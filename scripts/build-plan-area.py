#!/usr/bin/env python3
"""
Generador del PDF rector del Plan de Área 2026.

Lee los datos canónicos desde src/data/planArea.ts (via export JSON intermedio
generado en tiempo de build) y produce public/plan-de-area/plan-de-area-2026.pdf
vía xelatex en 2 pasadas.

Sucesor del script legacy `generadores/generar_plan_area_2025_editorial.py`,
que dependía de un .docx fuente fuera del repo. Esta versión es autosuficiente:
solo necesita Python 3.10+ y xelatex.

Uso:
    python3 scripts/build-plan-area.py
    make plan-area-build
"""
from __future__ import annotations

import os
import re
import subprocess
import sys
from pathlib import Path
from textwrap import dedent

ROOT = Path(__file__).resolve().parent.parent
PLAN_TS = ROOT / "src" / "data" / "planArea.ts"
OUT_DIR = ROOT / "public" / "plan-de-area"
OUT_PDF = OUT_DIR / "plan-de-area-2026.pdf"
XELATEX = os.environ.get("XELATEX", "/Library/TeX/texbin/xelatex")


# ───────── Lector minimalista de planArea.ts ─────────
# Extrae las estructuras de datos del TS sin dependencias externas.
# Cubre exactamente lo que necesita este generador.


def _read_ts() -> str:
    return PLAN_TS.read_text(encoding="utf-8")


def _extract_simple_object(src: str, name: str) -> dict:
    """Extrae `export const {name} = { ... };` como dict tipado.

    Soporta strings en una sola línea y multilínea (clave: \n 'valor',).
    """
    m = re.search(rf"export const {name} = \{{(.*?)\n\}};", src, re.DOTALL)
    if not m:
        raise ValueError(f"No se encontró {name}")
    body = m.group(1)
    out: dict = {}

    # Extraer pares clave: 'valor' (string en cualquier línea cercana).
    # Patrón tolerante a saltos de línea, indentación e comentarios.
    pat_str = re.compile(r"^\s*(\w+):\s*(?:\n\s*)?'((?:[^'\\]|\\.)*)'", re.MULTILINE)
    for m_str in pat_str.finditer(body):
        out[m_str.group(1)] = m_str.group(2).replace("\\'", "'")

    # Pares clave: número
    for m_num in re.finditer(r"^\s*(\w+):\s*(\d+),?\s*$", body, re.MULTILINE):
        out[m_num.group(1)] = int(m_num.group(2))

    # Sub-objeto `recursos: { ... }` (un nivel)
    m_recursos = re.search(
        r"recursos:\s*\{(.*?)\}",
        body,
        re.DOTALL,
    )
    if m_recursos:
        inner: dict = {}
        for m_kv in re.finditer(r"(\w+):\s*(\d+)", m_recursos.group(1)):
            inner[m_kv.group(1)] = int(m_kv.group(2))
        if inner:
            out["recursos"] = inner

    return out


def _extract_array_of_objects(src: str, name: str) -> list[dict]:
    """Extrae un array de objetos literal. Robusto contra anidamiento simple."""
    # Busca: export const NAME ... = [ ... ];
    pat = re.compile(
        rf"export const {name}[^=]*=\s*\[(.*?)\];",
        re.DOTALL,
    )
    m = pat.search(src)
    if not m:
        raise ValueError(f"No se encontró {name}")
    body = m.group(1)
    # Separar objetos por nivel superior (matching {}).
    items: list[str] = []
    depth = 0
    start = -1
    for i, ch in enumerate(body):
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                items.append(body[start : i + 1])
                start = -1
    parsed: list[dict] = []
    for raw_obj in items:
        obj: dict = {}
        # Quitar la primera y última llave.
        inner = raw_obj.strip()[1:-1]
        # Parser tolerante: `clave: 'valor'` o `clave: \`...\`` o `clave: number`.
        # Soportamos strings con `'`, `"`, o template literal `.
        i2 = 0
        while i2 < len(inner):
            # buscar clave
            m_key = re.match(r"\s*(\w+)\s*:\s*", inner[i2:])
            if not m_key:
                break
            key = m_key.group(1)
            i2 += m_key.end()
            if i2 >= len(inner):
                break
            ch = inner[i2]
            if ch in ("'", '"', "`"):
                # leer string hasta el delimitador (sin escape complejo)
                delim = ch
                i2 += 1
                start_str = i2
                while i2 < len(inner) and inner[i2] != delim:
                    if inner[i2] == "\\":
                        i2 += 2
                        continue
                    i2 += 1
                val = inner[start_str:i2]
                obj[key] = val.replace("\\'", "'").replace('\\"', '"')
                i2 += 1
            else:
                # numérico o booleano hasta coma o fin
                m_val = re.match(r"([\w.\-]+)", inner[i2:])
                if m_val:
                    raw_v = m_val.group(1)
                    obj[key] = int(raw_v) if raw_v.isdigit() else raw_v
                    i2 += m_val.end()
            # avanzar hasta siguiente coma o llave
            m_comma = re.match(r"\s*,\s*", inner[i2:])
            if m_comma:
                i2 += m_comma.end()
            else:
                # saltar al siguiente delimitador
                m_next = re.search(r"[,\n]", inner[i2:])
                if m_next:
                    i2 += m_next.end()
                else:
                    break
        if obj:
            parsed.append(obj)
    return parsed


def _extract_string_array(src: str, name: str) -> list[str]:
    pat = re.compile(rf"export const {name}[^=]*=\s*\[(.*?)\];", re.DOTALL)
    m = pat.search(src)
    if not m:
        return []
    body = m.group(1)
    return [s.strip().strip(",").strip("'\"") for s in re.findall(r"'(?:[^'\\]|\\.)*'", body)]


# ───────── LaTeX escaping ─────────


LATEX_ESCAPE = {
    "&": r"\&",
    "%": r"\%",
    "$": r"\$",
    "#": r"\#",
    "_": r"\_",
    "{": r"\{",
    "}": r"\}",
    "~": r"\textasciitilde{}",
    "^": r"\textasciicircum{}",
    "\\": r"\textbackslash{}",
}


def tex(s: str) -> str:
    if s is None:
        return ""
    out = str(s)
    # Caracteres especiales primero, en orden seguro.
    out = out.replace("\\", "\\textbackslash{}")
    for ch in "&%$#_{}~^":
        out = out.replace(ch, LATEX_ESCAPE[ch])
    # Comillas tipográficas
    out = out.replace("—", "---")
    return out


# ───────── Renderizado LaTeX ─────────


PREAMBLE = r"""
\documentclass[11pt,a4paper]{article}
\usepackage[a4paper,margin=2cm,top=2.2cm,bottom=2.2cm]{geometry}
\usepackage{fontspec}
\usepackage[table]{xcolor}
\usepackage{enumitem}
\usepackage{array}
\usepackage{longtable}
\usepackage[most]{tcolorbox}
\usepackage{hyperref}
\usepackage{fancyhdr}
\usepackage{titlesec}
\usepackage{microtype}
\usepackage{csquotes}

% ─── Tipografía (consistente con build-proyectos.py) ────────────────────────
\setmainfont{Helvetica Neue}
\setsansfont{Helvetica Neue}

% ─── Paleta MILC (alineada con tailwind Bento) ──────────────────────────────
\definecolor{milcBlue}{HTML}{0066FF}
\definecolor{milcLime}{HTML}{C7F051}
\definecolor{milcPink}{HTML}{FF4081}
\definecolor{milcCyan}{HTML}{0FB6D1}
\definecolor{milcOrange}{HTML}{FF8A00}
\definecolor{milcPurple}{HTML}{7C3AED}
\definecolor{milcYellow}{HTML}{FFE34D}
\definecolor{milcBlack}{HTML}{0A0A0A}
\definecolor{milcGreen}{HTML}{58A923}
\definecolor{milcOcre}{HTML}{B86600}
\definecolor{milcMostaza}{HTML}{E5B400}
\definecolor{fgMuted}{HTML}{555555}

\hypersetup{
  colorlinks=true,
  linkcolor=milcBlue,
  urlcolor=milcBlue,
  pdftitle={Plan de Área 2026 · Tecnología e Informática},
  pdfauthor={Dr. Álvaro Cárdenas Orozco},
}

% ─── Cabecera y pie ─────────────────────────────────────────────────────────
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\color{fgMuted}Plan de Área 2026 · Tecnología e Informática}
\fancyhead[R]{\small\color{fgMuted}I.E. Sor María Juliana}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% ─── Estilos de encabezados ─────────────────────────────────────────────────
\titleformat{\section}{\Large\bfseries\color{milcBlue}}{}{0pt}{}
\titleformat{\subsection}{\large\bfseries\color{milcBlack}}{}{0pt}{}

% ─── Comandos auxiliares ────────────────────────────────────────────────────
\newcommand{\chip}[2]{%
  \begin{tcolorbox}[colback=#1!12,colframe=#1!50,boxrule=0.4pt,
    arc=4pt,left=6pt,right=6pt,top=2pt,bottom=2pt,
    nobeforeafter,box align=center,enhanced]
    \footnotesize\bfseries\color{#1!75!black}\MakeUppercase{#2}%
  \end{tcolorbox}%
}

\newcommand{\cardbox}[2]{%
  \begin{tcolorbox}[colback=#1!12,colframe=#1!50,boxrule=0.4pt,
    arc=8pt,left=10pt,right=10pt,top=8pt,bottom=8pt,breakable]
    #2%
  \end{tcolorbox}%
}

\setlist[itemize]{leftmargin=*,itemsep=2pt}
\setlist[enumerate]{leftmargin=*,itemsep=2pt}
"""


def render_portada(plan: dict) -> str:
    return rf"""
\begin{{titlepage}}
  \pagecolor{{milcBlack}}\color{{white}}
  \begin{{center}}
    \vspace*{{2cm}}
    {{\Huge\bfseries Plan de Área {tex(str(plan['ano']))}}}\\[0.5cm]
    {{\LARGE {tex(plan['area'])}}}\\[2cm]
    \rule{{0.5\textwidth}}{{0.4pt}}\\[1.5cm]
    {{\Large {tex(plan['institucion'])}}}\\[0.3cm]
    {{\large {tex(plan['ciudad'])}}}\\[2cm]
    {{\large\itshape \enquote{{{tex(plan['ideaFuerza'])}}}}}\\[3cm]
    {{\large {tex(plan['cobertura'])}}}\\[0.5cm]
    {{\normalsize Autor: {tex(plan['autor'])}}}\\[0.3cm]
    {{\footnotesize {tex(plan['recursos']['total'])} piezas curriculares activas · pipeline MILC v3}}\\[1cm]
    {{\footnotesize \today}}
  \end{{center}}
  \nopagecolor
\end{{titlepage}}
"""


def render_meta(plan: dict) -> str:
    return rf"""
\section*{{Meta de egreso}}
\cardbox{{milcLime}}{{
  \large {tex(plan['metaEgreso'])}
}}
\bigskip
"""


def render_fases(fases: list[dict]) -> str:
    rows = []
    color_map = {
        "Escuta": "milcLime",
        "Sistematización": "milcCyan",
        "Praxis": "milcPink",
        "Evaluación liberadora": "milcPurple",
    }
    for i, f in enumerate(fases, 1):
        color = color_map.get(f["nombre"], "milcBlue")
        rows.append(rf"""
\cardbox{{{color}}}{{
  \textbf{{\large Fase {i} · {tex(f['nombre'])}}}\\[2pt]
  \small {tex(f['descripcion'])}
}}
""")
    return r"""
\section*{Modelo MILC · Investigación · Liberación · Ciencia}
\noindent\small\color{fgMuted}
El Modelo MILC convierte cada clase en proceso de investigación escolar.
El estudiante escucha el contexto, organiza lo que encuentra, actúa mediante
productos y evalúa críticamente el sentido de lo realizado.
\color{black}\bigskip
""" + "\n".join(rows)


def render_triangulo(triangulo: list[dict]) -> str:
    rows = []
    color_map = {
        "Enrique Dussel": "milcPurple",
        "Marco Aurelio (Estoicismo)": "milcCyan",
        "Luciano Floridi": "milcOrange",
    }
    for l in triangulo:
        color = color_map.get(l["nombre"], "milcBlue")
        rows.append(rf"""
\cardbox{{{color}}}{{
  \textbf{{\large {tex(l['nombre'])}}}\\
  \small\itshape {tex(l['obra'])}\\[4pt]
  \small {tex(l['aporte'])}
}}
""")
    return r"""
\section*{Triángulo de pensamiento}
\noindent\small\color{fgMuted}
Cada guía, examen y proyecto integra las tres lentes del triángulo. En los
proyectos integradores las reflexiones quedan \textbf{incrustadas dentro de
los productos} (no como anexos): un párrafo Dussel en la tarjeta de identidad,
una nota estoica en el decálogo firmado, una declaración Floridi en la
mini-campaña pública.
\color{black}\bigskip
""" + "\n".join(rows)


def render_anclajes(anclajes: list[dict]) -> str:
    out = [r"""
\section*{Anclajes ancestrales por periodo}
\noindent\small\color{fgMuted}
Cada periodo abre con un saber del Valle del Cauca, el Pacífico o el campo
colombiano. El anclaje aparece en la guía de apertura (S1), regresa en el
examen formal (pregunta contexto) y vertebra el reto del proyecto integrador.
No es decoración: es continuidad cultural con identidad digital.
\color{black}\bigskip
"""]
    # Tabla 6 grados × 3 periodos
    out.append(r"\renewcommand{\arraystretch}{1.4}")
    out.append(r"\begin{longtable}{|>{\bfseries}p{1cm}|p{4.3cm}|p{4.3cm}|p{4.3cm}|}")
    out.append(r"\hline")
    out.append(r"\rowcolor{milcBlue!15}\textbf{Grado} & \textbf{Período 1} & \textbf{Período 2} & \textbf{Período 3} \\ \hline")
    out.append(r"\endhead")
    by_grado: dict[int, dict[int, dict]] = {}
    for a in anclajes:
        by_grado.setdefault(int(a["grado"]), {})[int(a["periodo"])] = a
    for g in sorted(by_grado.keys()):
        row = by_grado[g]
        cells = [f"{g}°"]
        for p in (1, 2, 3):
            a = row.get(p)
            if a:
                cells.append(f"\\textbf{{{tex(a['oficio'])}}}\\\\\\footnotesize {tex(a['resumen'])}")
            else:
                cells.append("---")
        out.append(" & ".join(cells) + r" \\ \hline")
    out.append(r"\end{longtable}")
    return "\n".join(out)


def render_recursos(plan: dict) -> str:
    r = plan["recursos"]
    return rf"""
\section*{{Recursos curriculares activos}}
\noindent
\cardbox{{milcBlue}}{{
  \centering
  \textbf{{\Huge {tex(str(r['total']))}}}\\[2pt]
  \footnotesize\textbf{{piezas curriculares vivas}}\\[6pt]
  \small {tex(str(r['guias']))} guías · {tex(str(r['proyectos']))} proyectos integradores · {tex(str(r['examenes']))} exámenes
}}
"""


def render_componentes(componentes: list[dict]) -> str:
    rows = []
    for c in componentes:
        rows.append(rf"""\item \textbf{{{tex(c['nombre'])}.}} {tex(c['descripcion'])}""")
    return r"""
\section*{Componentes MEN · Guía No. 30}
\noindent\small\color{fgMuted}
Articulación con el marco oficial del Ministerio de Educación Nacional.
\color{black}\bigskip
\begin{itemize}
""" + "\n".join(rows) + r"""
\end{itemize}
"""


def render_estrategias(estrategias: list[dict]) -> str:
    rows = []
    for e in estrategias:
        rows.append(rf"""\item \textbf{{{tex(e['nombre'])}.}} {tex(e['descripcion'])}""")
    return r"""
\section*{Estrategias activas de aprendizaje}
\begin{itemize}
""" + "\n".join(rows) + r"""
\end{itemize}
"""


def render_referentes(referentes: list[dict]) -> str:
    rows = []
    for r in referentes:
        rows.append(rf"""\item \textbf{{{tex(r['autor'])} · {tex(r['obra'])}.}} {tex(r['aporte'])}""")
    return r"""
\section*{Marco teórico}
\begin{itemize}
""" + "\n".join(rows) + r"""
\end{itemize}
"""


def render_objetivos(objetivos: list[str]) -> str:
    rows = [rf"\item {tex(o)}" for o in objetivos]
    return r"""
\section*{Objetivos formativos del área}
\begin{enumerate}
""" + "\n".join(rows) + r"""
\end{enumerate}
"""


def render_criterios_ponderacion(criterios: list[dict], ponderacion: list[dict]) -> str:
    crit_rows = [rf"\item \textbf{{{tex(c['nombre'])}.}} {tex(c['descripcion'])}" for c in criterios]
    pond_rows = [rf"\item \textbf{{{tex(p['item'])}}} \hfill \textbf{{{tex(str(p['porcentaje']))}\%}}" for p in ponderacion]
    return r"""
\section*{Evaluación liberadora}
\subsection*{4 criterios integrales}
\begin{itemize}
""" + "\n".join(crit_rows) + r"""
\end{itemize}

\subsection*{Ponderación orientativa por período}
\begin{itemize}
""" + "\n".join(pond_rows) + r"""
\end{itemize}
"""


def render_politica_ia(politica: list[dict], principios: list[str]) -> str:
    pol_rows = []
    for p in politica:
        pol_rows.append(rf"""\item \textbf{{{tex(p['rango'])} · {tex(p['postura'])}.}} {tex(p['detalle'])}""")
    pri_rows = [rf"\item {tex(p)}" for p in principios]
    return r"""
\section*{Política de IA responsable}
\noindent\small\color{fgMuted}
Distribución progresiva por grados. La rúbrica del proyecto integrador
valora el uso responsable, no la cantidad de IA usada.
\color{black}\bigskip
\begin{itemize}
""" + "\n".join(pol_rows) + r"""
\end{itemize}

\subsection*{Principios transversales}
\begin{itemize}
""" + "\n".join(pri_rows) + r"""
\end{itemize}
"""


def render_pipeline(pipeline: list[dict]) -> str:
    rows = []
    for p in pipeline:
        rows.append(rf"""
\textbf{{{tex(p['nombre'])}.}} \hfill \texttt{{\small {tex(p['comando'])}}}\\
\footnotesize YAML: \texttt{{{tex(p['yaml'])}}}\\
PDF: \texttt{{{tex(p['pdf'])}}}\\
TS: \texttt{{{tex(p['ts'])}}}\\[6pt]
""")
    return r"""
\section*{Pipeline editorial MILC v3}
\noindent\small\color{fgMuted}
Cada pieza vive como YAML. Un script la compila a PDF (vía xelatex) y a
TypeScript para la web. Edita el YAML; nunca toques el .tex, el .pdf o el
.ts. El linter valida el contrato editorial.
\color{black}\bigskip
""" + "\n".join(rows)


def render_valoracion(contratos: list[dict], densidad: list[dict]) -> str:
    cont_rows = []
    for c in contratos:
        cont_rows.append(rf"""\item \textbf{{{'★' * c['estrellas']}{'☆' * (5 - c['estrellas'])}}} \textbf{{{tex(c['nombre'])}.}} {tex(c['significado'])}""")
    dens_rows = []
    for d in densidad:
        dens_rows.append(rf"""\item \textbf{{Color {tex(d['color'])}}} ({tex(d['nivel'])} \textbf{{{tex(d['umbral'])}}}): {tex(d['detalle'])}""")
    return r"""
\section*{Sistema de valoración}
\subsection*{Estrellas absolutas (completitud del contrato)}
\begin{itemize}
""" + "\n".join(cont_rows) + r"""
\end{itemize}

\subsection*{Color por densidad real (palabras del YAML)}
\begin{itemize}
""" + "\n".join(dens_rows) + r"""
\end{itemize}
"""


# ───────── Composición + compilación ─────────


def build_tex() -> str:
    src = _read_ts()
    plan = _extract_simple_object(src, "planArea")
    # plan['recursos'] llega ya como dict; aseguramos tipo
    if isinstance(plan.get("recursos"), str):
        # parsing simple_object no resolvió un objeto anidado: forzamos manualmente
        plan["recursos"] = {"guias": 180, "proyectos": 18, "examenes": 18, "total": 216}

    fases = _extract_array_of_objects(src, "fasesMILC")
    triangulo = _extract_array_of_objects(src, "trianguloPensamiento")
    anclajes = _extract_array_of_objects(src, "anclajesAncestrales")
    referentes = _extract_array_of_objects(src, "referentes")
    estrategias = _extract_array_of_objects(src, "estrategias")
    componentes = _extract_array_of_objects(src, "componentesMEN")
    criterios = _extract_array_of_objects(src, "criteriosEvaluacion")
    politica = _extract_array_of_objects(src, "politicaIa")
    pipeline = _extract_array_of_objects(src, "pipelineMilc")
    val_contrato = _extract_array_of_objects(src, "valoracionPorContrato")
    val_densidad = _extract_array_of_objects(src, "valoracionPorDensidad")
    objetivos = _extract_string_array(src, "objetivos")
    principios = _extract_string_array(src, "principiosIa")

    ponderacion = [
        {"item": "Guías y portafolio", "porcentaje": 30},
        {"item": "Proyecto integrador", "porcentaje": 30},
        {"item": "Examen / prueba aplicada", "porcentaje": 20},
        {"item": "Participación y reflexión MILC", "porcentaje": 20},
    ]

    parts = [
        PREAMBLE,
        r"\begin{document}",
        render_portada(plan),
        render_meta(plan),
        render_fases(fases),
        render_triangulo(triangulo),
        render_anclajes(anclajes),
        render_recursos(plan),
        render_componentes(componentes),
        render_estrategias(estrategias),
        render_objetivos(objetivos),
        render_referentes(referentes),
        render_politica_ia(politica, principios),
        render_valoracion(val_contrato, val_densidad),
        render_pipeline(pipeline),
        render_criterios_ponderacion(criterios, ponderacion),
        r"\end{document}",
    ]
    return "\n\n".join(parts)


def compile_pdf(tex_source: str) -> bool:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    work_tex = OUT_DIR / "plan-de-area-2026.tex"
    work_tex.write_text(tex_source, encoding="utf-8")

    for run in range(2):
        result = subprocess.run(
            [
                XELATEX,
                "-interaction=nonstopmode",
                "-output-directory",
                str(OUT_DIR),
                str(work_tex),
            ],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            log = OUT_DIR / "plan-de-area-2026.log"
            print(f"  ✗ xelatex falló · revisa {log}", file=sys.stderr)
            if log.exists():
                lines = log.read_text(encoding="utf-8", errors="ignore").splitlines()
                err = [l for l in lines if l.startswith("!")]
                for l in err[:10]:
                    print(f"    {l}", file=sys.stderr)
            return False

    # Limpiar auxiliares y .tex intermedio
    for ext in ("aux", "log", "out", "toc", "tex"):
        aux = OUT_DIR / f"plan-de-area-2026.{ext}"
        if aux.exists():
            aux.unlink()
    return True


def main() -> int:
    print("▸ Generando LaTeX desde planArea.ts…")
    tex_source = build_tex()
    print(f"  · {len(tex_source.splitlines())} líneas de LaTeX")
    print("▸ Compilando con xelatex (2 pasadas)…")
    ok = compile_pdf(tex_source)
    if not ok:
        return 1
    size = OUT_PDF.stat().st_size
    print(f"  ✓ {OUT_PDF.relative_to(ROOT)} ({size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
