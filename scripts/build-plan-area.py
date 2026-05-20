#!/usr/bin/env python3
"""
Generador del PDF rector del Plan de Área 2026.

Lee los datos canónicos desde src/data/planArea.ts (extracción regex tolerante)
y las mallas curriculares directamente desde content/guias/{g}/{g}-{p}-{s}.yaml.
Compila el PDF con xelatex en 2 pasadas reutilizando la paleta institucional
y el sistema de tcolorbox del template de proyectos MILC v3.

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

import yaml

ROOT = Path(__file__).resolve().parent.parent
PLAN_TS = ROOT / "src" / "data" / "planArea.ts"
GUIAS_DIR = ROOT / "content" / "guias"
OUT_DIR = ROOT / "public" / "plan-de-area"
OUT_PDF = OUT_DIR / "plan-de-area-2026.pdf"
XELATEX = os.environ.get("XELATEX", "/Library/TeX/texbin/xelatex")


# ───────── Lector de planArea.ts (regex tolerante) ──────────────────────────


def _read_ts() -> str:
    return PLAN_TS.read_text(encoding="utf-8")


def _extract_plan_area(src: str) -> dict:
    """Extrae el objeto planArea con metadata + recursos."""
    m = re.search(r"export const planArea = \{(.*?)\n\};", src, re.DOTALL)
    if not m:
        raise ValueError("No se encontró planArea")
    body = m.group(1)
    out: dict = {}
    for m_str in re.finditer(
        r"^\s*(\w+):\s*(?:\n\s*)?'((?:[^'\\]|\\.)*)'", body, re.MULTILINE
    ):
        out[m_str.group(1)] = m_str.group(2).replace("\\'", "'")
    for m_num in re.finditer(r"^\s*(\w+):\s*(\d+),?\s*$", body, re.MULTILINE):
        out[m_num.group(1)] = int(m_num.group(2))
    m_rec = re.search(r"recursos:\s*\{(.*?)\}", body, re.DOTALL)
    if m_rec:
        rec: dict = {}
        for m_kv in re.finditer(r"(\w+):\s*(\d+)", m_rec.group(1)):
            rec[m_kv.group(1)] = int(m_kv.group(2))
        out["recursos"] = rec
    return out


def _extract_array_objects(src: str, name: str) -> list[dict]:
    """Extrae export const NAME = [ ... ] como lista de dicts."""
    pat = re.compile(rf"export const {name}[^=]*=\s*\[(.*?)\];", re.DOTALL)
    m = pat.search(src)
    if not m:
        return []
    body = m.group(1)
    items: list[str] = []
    depth = 0
    start = -1
    in_str = False
    str_char = ""
    for i, ch in enumerate(body):
        if in_str:
            if ch == "\\":
                continue
            if ch == str_char:
                in_str = False
            continue
        if ch in "'\"`":
            in_str = True
            str_char = ch
            continue
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
        inner = raw_obj.strip()[1:-1]
        i2 = 0
        while i2 < len(inner):
            m_key = re.match(r"\s*(\w+)\s*:\s*", inner[i2:])
            if not m_key:
                break
            key = m_key.group(1)
            i2 += m_key.end()
            if i2 >= len(inner):
                break
            ch = inner[i2]
            if ch in ("'", '"', "`"):
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
                m_val = re.match(r"([\w.\-]+)", inner[i2:])
                if m_val:
                    raw_v = m_val.group(1)
                    obj[key] = int(raw_v) if raw_v.isdigit() else raw_v
                    i2 += m_val.end()
            m_comma = re.match(r"\s*,\s*", inner[i2:])
            if m_comma:
                i2 += m_comma.end()
            else:
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
    return [
        s[1:-1].replace("\\'", "'")
        for s in re.findall(r"'(?:[^'\\]|\\.)*'", body)
    ]


# ───────── Mallas curriculares desde los YAMLs ──────────────────────────────


GRADO_NOMBRES = {
    6: "Sexto",
    7: "Séptimo",
    8: "Octavo",
    9: "Noveno",
    10: "Décimo",
    11: "Undécimo",
}


def cargar_malla(grado: int) -> dict[int, list[dict]]:
    """Devuelve {periodo: [{sesion, titulo, producto_final}]} para un grado."""
    malla: dict[int, list[dict]] = {1: [], 2: [], 3: []}
    grado_dir = GUIAS_DIR / str(grado)
    if not grado_dir.exists():
        return malla
    for periodo in (1, 2, 3):
        for sesion in range(1, 11):
            yaml_path = grado_dir / f"{grado}-{periodo}-{sesion}.yaml"
            if not yaml_path.exists():
                continue
            try:
                data = yaml.safe_load(yaml_path.read_text(encoding="utf-8"))
            except yaml.YAMLError:
                continue
            titulo = (data or {}).get("titulo", "")
            producto = (data or {}).get("producto_final", "")
            # Limpieza ligera
            titulo = re.sub(r"\s+", " ", str(titulo)).strip()
            producto = re.sub(r"\s+", " ", str(producto)).strip()
            # Primera frase del producto (cortar al primer punto)
            producto_corto = producto.split(".")[0]
            if len(producto_corto) > 180:
                producto_corto = producto_corto[:177] + "…"
            malla[periodo].append({
                "sesion": sesion,
                "titulo": titulo,
                "producto": producto_corto,
            })
    return malla


# ───────── LaTeX escaping ─────────


def tex(s: str) -> str:
    if s is None:
        return ""
    out = str(s)
    out = out.replace("\\textbackslash{}", "<<<TBS>>>")
    out = out.replace("\\", "<<<TBS>>>")
    out = out.replace("<<<TBS>>>", r"\textbackslash{}")
    for ch, rep in [
        ("&", r"\&"),
        ("%", r"\%"),
        ("$", r"\$"),
        ("#", r"\#"),
        ("_", r"\_"),
        ("{", r"\{"),
        ("}", r"\}"),
        ("~", r"\textasciitilde{}"),
        ("^", r"\textasciicircum{}"),
    ]:
        out = out.replace(ch, rep)
    out = out.replace("—", "---")
    out = out.replace("“", "``").replace("”", "''").replace("’", "'")
    return out


# ───────── Preamble LaTeX (reutiliza paleta del template de proyectos) ─────


PREAMBLE = r"""
\documentclass[11pt,letterpaper]{article}
\usepackage[margin=1.5cm,top=1.4cm,bottom=1.5cm]{geometry}
\usepackage[table]{xcolor}
\usepackage{fontspec}
\usepackage[spanish]{babel}
\usepackage{tikz}
\usepackage[most]{tcolorbox}
\usepackage{tabularx}
\usepackage{array}
\usepackage{fancyhdr}
\usepackage{ragged2e}
\usepackage{enumitem}
\usepackage{microtype}
\usepackage{multicol}
\usepackage{hyperref}
\usepackage{pifont}

% Estrellas con pifont (\ding{72} = filled, \ding{73} = empty)
\newcommand{\estrellafilled}{\textcolor{milcMostaza}{\ding{72}}}
\newcommand{\estrellaempty}{\textcolor{milcMostaza!30}{\ding{73}}}
\newcommand{\rating}[1]{%
  \ifcase#1 \estrellaempty\estrellaempty\estrellaempty\estrellaempty\estrellaempty%
  \or \estrellafilled\estrellaempty\estrellaempty\estrellaempty\estrellaempty%
  \or \estrellafilled\estrellafilled\estrellaempty\estrellaempty\estrellaempty%
  \or \estrellafilled\estrellafilled\estrellafilled\estrellaempty\estrellaempty%
  \or \estrellafilled\estrellafilled\estrellafilled\estrellafilled\estrellaempty%
  \or \estrellafilled\estrellafilled\estrellafilled\estrellafilled\estrellafilled%
  \fi%
}

\setmainfont{Helvetica Neue}
\setsansfont{Helvetica Neue}
\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}
\renewcommand{\arraystretch}{1.22}
\setlist{leftmargin=5mm,itemsep=1mm,topsep=1mm}
\newcolumntype{Y}{>{\RaggedRight\arraybackslash}X}

% Paleta institucional MILC (alineada con el template de proyectos).
\definecolor{milcMagenta}{HTML}{E6007E}
\definecolor{milcVino}{HTML}{5A0038}
\definecolor{milcTurquesa}{HTML}{0093A5}
\definecolor{milcVerde}{HTML}{58A923}
\definecolor{milcMostaza}{HTML}{E5B400}
\definecolor{milcOcre}{HTML}{B86600}
\definecolor{milcNegro}{HTML}{241816}
\definecolor{milcGris}{HTML}{F7F7F4}
\definecolor{milcLinea}{HTML}{E8E2DD}
\color{milcNegro}

% Colores del triángulo (sincronizados con guías y proyectos).
\definecolor{lentDussel}{HTML}{5A0038}
\definecolor{lentEstoico}{HTML}{E5B400}
\definecolor{lentFloridi}{HTML}{0093A5}

\hypersetup{
  colorlinks=true,
  linkcolor=milcTurquesa,
  urlcolor=milcTurquesa,
  pdftitle={Plan de Área 2026 · Tecnología e Informática},
  pdfauthor={Dr. Álvaro Cárdenas Orozco},
}

\pagestyle{fancy}
\fancyhf{}
\lhead{\small\color{milcVino}\bfseries Plan de Área 2026}
\rhead{\small\color{milcNegro} I.E. Sor María Juliana · Cartago}
\cfoot{\small\color{milcNegro}\thepage}
\renewcommand{\headrulewidth}{0pt}

% ─── Cajas (mismas que el template de proyectos) ────────────────────────────

\newtcolorbox{titlebox}[1]{
  enhanced,colback=#1,colframe=#1,arc=7mm,boxrule=0pt,
  left=7mm,right=7mm,top=3mm,bottom=3mm,
  before skip=8pt,after skip=8pt,
  fontupper=\sffamily\bfseries\Large\color{white}
}

\newtcolorbox{softbox}[3]{
  enhanced,colback=#2,colframe=#1,borderline west={4pt}{0pt}{#1},
  arc=2mm,boxrule=.4pt,left=4mm,right=4mm,top=3mm,bottom=3mm,
  before skip=6pt,after skip=8pt,title={#3},coltitle=white,
  colbacktitle=#1,fonttitle=\sffamily\bfseries,fontupper=\RaggedRight,
  attach boxed title to top left={xshift=3mm,yshift=-2mm},
  boxed title style={arc=2mm, boxrule=0pt}
}

\newtcolorbox{infoband}[1]{
  enhanced,colback=#1!8,colframe=#1!50,arc=2mm,boxrule=.5pt,
  left=4mm,right=4mm,top=2mm,bottom=2mm,before skip=4pt,after skip=4pt,
  fontupper=\small\RaggedRight
}

\newtcolorbox{statbox}[1]{
  enhanced,colback=#1,colframe=#1,arc=4mm,boxrule=0pt,
  left=4mm,right=4mm,top=4mm,bottom=4mm,
  before skip=4pt,after skip=4pt,center,
  fontupper=\sffamily\color{white}
}
"""


# ───────── Composición LaTeX ────────────────────────────────────────────────


def render_portada(plan: dict) -> str:
    return rf"""
\thispagestyle{{empty}}
\vspace*{{0.5cm}}

\begin{{tcolorbox}}[
  enhanced,colback=milcTurquesa!85!black,colframe=milcTurquesa!85!black,
  arc=12mm,boxrule=0pt,
  left=11mm,right=11mm,top=10mm,bottom=10mm,
  overlay={{\draw[milcMagenta,line width=2pt,dash pattern=on 9pt off 8pt,rounded corners=10mm]
    ([xshift=7mm,yshift=-7mm]frame.north west) rectangle ([xshift=-7mm,yshift=7mm]frame.south east);}}
]
  \centering
  {{\sffamily\bfseries\color{{white}}\fontsize{{13}}{{15}}\selectfont DOCUMENTO RECTOR · TECNOLOGÍA E INFORMÁTICA}}\\[10mm]
  {{\sffamily\bfseries\color{{white}}\fontsize{{42}}{{46}}\selectfont Plan de Área}}\\[2mm]
  {{\sffamily\bfseries\color{{milcMostaza}}\fontsize{{60}}{{64}}\selectfont {tex(str(plan['ano']))}}}\\[10mm]
  {{\sffamily\color{{white}}\Large {tex(plan['area'])}}}\\[8mm]
  {{\sffamily\bfseries\color{{white}}\large {tex(plan['institucion'])}}}\\[2mm]
  {{\sffamily\color{{white}}\normalsize {tex(plan['ciudad'])}}}\\[4mm]
  {{\sffamily\color{{white}}\small {tex(plan['cobertura'])}}}\\[2mm]
  {{\sffamily\color{{white}}\small Autor: {tex(plan['autor'])}}}
\end{{tcolorbox}}

\vspace{{6mm}}

\begin{{tcolorbox}}[
  enhanced,colback=milcVino,colframe=milcVino,arc=5mm,boxrule=0pt,
  left=6mm,right=6mm,top=5mm,bottom=5mm,
]
\centering
{{\sffamily\bfseries\color{{milcMostaza}}\Large {tex(str(plan['recursos']['total']))} piezas curriculares activas}}\\[2mm]
{{\sffamily\color{{white}}\small {tex(str(plan['recursos']['guias']))} guías · {tex(str(plan['recursos']['proyectos']))} proyectos integradores · {tex(str(plan['recursos']['examenes']))} exámenes}}\\[2mm]
{{\sffamily\color{{white}}\footnotesize Pipeline editorial MILC v3 · YAML como única fuente · PDF + Web autogenerados}}
\end{{tcolorbox}}

\vspace{{6mm}}

\begin{{softbox}}{{milcMostaza}}{{milcGris}}{{Idea fuerza}}
\large\itshape {tex(plan['ideaFuerza'])}
\end{{softbox}}

\vfill

\begin{{infoband}}{{milcVerde}}
\centering
{{\sffamily\bfseries\color{{milcVerde}}MILC v3:}} Modelo de Investigación Liberadora y Científica.\\
{{\small Escuta · Sistematización · Praxis · Evaluación liberadora}}
\end{{infoband}}

\newpage
"""


def render_meta_y_modelo(plan: dict, fases: list[dict]) -> str:
    parts = [rf"""
\begin{{titlebox}}{{milcMagenta}}
Meta de egreso
\end{{titlebox}}

\begin{{softbox}}{{milcMagenta}}{{milcGris}}{{Lo que esperamos al egresar}}
\large {tex(plan['metaEgreso'])}
\end{{softbox}}

\vspace{{4mm}}

\begin{{titlebox}}{{milcTurquesa}}
Modelo MILC · 4 fases
\end{{titlebox}}

El Modelo MILC convierte cada clase en proceso de investigación escolar. El estudiante
escucha el contexto, organiza lo que encuentra, actúa mediante productos y evalúa
críticamente el sentido de lo realizado.

\vspace{{3mm}}
"""]
    color_map = {
        "Escuta": "milcVerde",
        "Sistematización": "milcTurquesa",
        "Praxis": "milcMagenta",
        "Evaluación liberadora": "milcVino",
    }
    for i, f in enumerate(fases, 1):
        color = color_map.get(f["nombre"], "milcTurquesa")
        parts.append(rf"""
\begin{{softbox}}{{{color}}}{{milcGris}}{{Fase {i} · {tex(f['nombre'])}}}
{tex(f['descripcion'])}
\end{{softbox}}
""")
    parts.append(r"\newpage")
    return "\n".join(parts)


def render_triangulo(triangulo: list[dict]) -> str:
    out = [r"""
\begin{titlebox}{milcVino}
Triángulo de pensamiento
\end{titlebox}

Cada guía, examen y proyecto integra las tres lentes del triángulo. En los proyectos
integradores las reflexiones quedan \textbf{incrustadas dentro de los productos} (no como
anexos): un párrafo Dussel en la tarjeta de identidad, una nota estoica en el decálogo
firmado, una declaración Floridi en la mini-campaña pública.

\vspace{3mm}
"""]
    color_map = {
        "Enrique Dussel": "lentDussel",
        "Marco Aurelio (Estoicismo)": "lentEstoico",
        "Luciano Floridi": "lentFloridi",
    }
    for l in triangulo:
        color = color_map.get(l["nombre"], "milcTurquesa")
        out.append(rf"""
\begin{{softbox}}{{{color}}}{{milcGris}}{{{tex(l['nombre'])} · {tex(l['obra'])}}}
{tex(l['aporte'])}
\end{{softbox}}
""")
    out.append(r"\newpage")
    return "\n".join(out)


def render_anclajes(anclajes: list[dict]) -> str:
    # Agrupar por grado
    by_g: dict[int, list[dict]] = {}
    for a in anclajes:
        by_g.setdefault(int(a["grado"]), []).append(a)
    for g in by_g:
        by_g[g].sort(key=lambda x: int(x["periodo"]))

    out = [r"""
\begin{titlebox}{milcVerde}
Anclajes ancestrales por periodo
\end{titlebox}

Cada periodo abre con un saber del Valle del Cauca, el Pacífico o el campo colombiano.
El anclaje aparece en la guía de apertura (S1), regresa en el examen formal (pregunta
contexto) y vertebra el reto del proyecto integrador. \textbf{No es decoración: es
continuidad cultural con identidad digital.}

\vspace{2mm}
"""]
    color_periodo = {1: "milcVerde", 2: "milcMostaza", 3: "milcMagenta"}
    for g in sorted(by_g):
        g_name = GRADO_NOMBRES.get(g, str(g))
        out.append(rf"""
\vspace{{2mm}}
\begin{{titlebox}}{{milcVino}}
Grado {g}° {g_name}
\end{{titlebox}}
""")
        out.append(r"\begin{tabularx}{\textwidth}{@{}p{0.32\textwidth}@{\hspace{0.02\textwidth}}p{0.32\textwidth}@{\hspace{0.02\textwidth}}p{0.32\textwidth}@{}}")
        cells = []
        for a in by_g[g]:
            p = int(a["periodo"])
            color = color_periodo.get(p, "milcTurquesa")
            cell = (
                rf"\begin{{tcolorbox}}[enhanced,colback={color}!10,colframe={color}!50,"
                rf"borderline west={{3pt}}{{0pt}}{{{color}}},arc=2mm,boxrule=.4pt,"
                rf"left=3mm,right=3mm,top=2.5mm,bottom=2.5mm,nobeforeafter,height=4.6cm,"
                rf"valign=top]"
                rf"\textbf{{\color{{{color}}}\footnotesize Período {p}}}\\[1mm]"
                rf"\textbf{{\small {tex(a['oficio'])}}}\\[1mm]"
                rf"\footnotesize {tex(a['resumen'])}"
                rf"\end{{tcolorbox}}"
            )
            cells.append(cell)
        # Garantizar exactamente 3 celdas (si falta algún periodo, espacio en blanco)
        while len(cells) < 3:
            cells.append(r"\phantom{x}")
        out.append(" & ".join(cells) + r" \\")
        out.append(r"\end{tabularx}")
    out.append(r"\newpage")
    return "\n".join(out)


def render_mallas(grado: int, malla: dict[int, list[dict]]) -> str:
    g_name = GRADO_NOMBRES.get(grado, str(grado))
    parts = [rf"""
\begin{{titlebox}}{{milcTurquesa}}
Malla curricular · Grado {grado}° {g_name}
\end{{titlebox}}

\footnotesize 30 sesiones distribuidas en 3 periodos. Cada sesión cierra con producto al cuaderno + verificación de comprensión.
\normalsize
"""]
    color_periodo = {1: "milcVerde", 2: "milcMostaza", 3: "milcMagenta"}
    for p in (1, 2, 3):
        sesiones = malla.get(p, [])
        if not sesiones:
            continue
        color = color_periodo[p]
        parts.append(rf"""
\vspace{{1mm}}
\begin{{tcolorbox}}[enhanced,colback={color},colframe={color},arc=4mm,boxrule=0pt,
  left=5mm,right=5mm,top=1.5mm,bottom=1.5mm,before skip=2pt,after skip=2pt,
  fontupper=\sffamily\bfseries\normalsize\color{{white}}]
Período {p}
\end{{tcolorbox}}
\vspace{{-1mm}}
\renewcommand{{\arraystretch}}{{1.05}}
\rowcolors{{2}}{{milcGris}}{{white}}
\begin{{tabularx}}{{\textwidth}}{{>{{\bfseries\centering\arraybackslash}}p{{0.7cm}} | Y}}
\arrayrulecolor{{milcLinea}}
""")
        for s in sesiones:
            parts.append(rf"\footnotesize S{s['sesion']} & \footnotesize {tex(s['titulo'])} \\")
        parts.append(r"\end{tabularx}")
    parts.append(r"\newpage")
    return "\n".join(parts)


def render_politica_ia(politica: list[dict], principios: list[str]) -> str:
    out = [r"""
\begin{titlebox}{milcMagenta}
Política de IA responsable
\end{titlebox}

Distribución progresiva por grados. La rúbrica del proyecto integrador valora el
\textbf{uso responsable}, no la cantidad de IA usada. Voz humana + edición + declaración
+ verificación son lo central.

\vspace{3mm}
"""]
    for p in politica:
        out.append(rf"""
\begin{{softbox}}{{milcMagenta}}{{milcGris}}{{{tex(p['rango'])} · {tex(p['postura'])}}}
{tex(p['detalle'])}
\end{{softbox}}
""")
    out.append(r"\vspace{3mm}")
    out.append(r"\begin{softbox}{milcOcre}{milcGris}{Principios transversales · 5 reglas no negociables}")
    out.append(r"\begin{enumerate}[leftmargin=6mm]")
    for pr in principios:
        out.append(rf"\item {tex(pr)}")
    out.append(r"\end{enumerate}")
    out.append(r"\end{softbox}")
    out.append(r"\newpage")
    return "\n".join(out)


def render_valoracion(contratos: list[dict], densidad: list[dict]) -> str:
    out = [r"""
\begin{titlebox}{milcMostaza}
Sistema de valoración de guías
\end{titlebox}

El badge de cada guía combina dos señales \textbf{independientes}. Las
\textbf{estrellas} indican completitud del contrato MILC v3 (absoluto: una guía bien
hecha siempre se ve bien). El \textbf{color} del badge indica densidad informativa
real medida en palabras del YAML.

\vspace{3mm}

\begin{softbox}{milcMostaza}{milcGris}{Estrellas absolutas · completitud del contrato MILC v3}
\begin{tabularx}{\textwidth}{>{\bfseries}p{2.8cm}|>{\bfseries}p{4cm}|Y}
\textbf{Estrellas} & \textbf{Nivel} & \textbf{Significado} \\
\hline
"""]
    for c in contratos:
        out.append(rf"\rating{{{c['estrellas']}}} & {tex(c['nombre'])} & {tex(c['significado'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\end{softbox}")
    out.append(r"\vspace{2mm}")
    out.append(r"\begin{softbox}{milcVerde}{milcGris}{Color del badge · densidad por palabras reales del YAML}")
    out.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{2cm}|>{\bfseries}p{3cm}|Y}")
    out.append(r"\textbf{Nivel} & \textbf{Umbral} & \textbf{Significado} \\")
    out.append(r"\hline")
    for d in densidad:
        color_name = d.get("color", "")
        out.append(rf"{tex(d['nivel'])} ({tex(color_name)}) & {tex(d['umbral'])} & {tex(d['detalle'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\end{softbox}")
    out.append(r"\newpage")
    return "\n".join(out)


def render_pipeline(pipeline: list[dict]) -> str:
    out = [r"""
\begin{titlebox}{milcVino}
Pipeline editorial MILC v3
\end{titlebox}

Cada pieza vive como YAML. Un script la compila a PDF (vía xelatex) y a TypeScript
para la web. \textbf{Edita el YAML; nunca toques el .tex, el .pdf o el .ts.} El linter
valida el contrato editorial automáticamente.

\vspace{3mm}
"""]
    for p in pipeline:
        out.append(rf"""
\begin{{softbox}}{{milcTurquesa}}{{milcGris}}{{{tex(p['nombre'])} \hfill \texttt{{\small {tex(p['comando'])}}}}}
\footnotesize\ttfamily
YAML: {tex(p['yaml'])}\\
PDF: {tex(p['pdf'])}\\
TS: {tex(p['ts'])}
\end{{softbox}}
""")
    out.append(r"\newpage")
    return "\n".join(out)


def render_componentes_y_estrategias(componentes: list[dict], estrategias: list[dict]) -> str:
    out = [r"""
\begin{titlebox}{milcOcre}
Componentes MEN · Guía No. 30
\end{titlebox}

Articulación con el marco oficial del Ministerio de Educación Nacional para la
educación en tecnología.

\vspace{3mm}
\renewcommand{\arraystretch}{1.3}
\rowcolors{2}{milcGris}{white}
\begin{tabularx}{\textwidth}{>{\bfseries}p{6cm}|Y}
\arrayrulecolor{milcLinea}
\rowcolor{milcOcre}{\color{white}\textbf{Componente}} & {\color{white}\textbf{Descripción}} \\
"""]
    for c in componentes:
        out.append(rf"{tex(c['nombre'])} & {tex(c['descripcion'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\vspace{6mm}")
    out.append(r"""
\begin{titlebox}{milcMagenta}
Estrategias activas de aprendizaje
\end{titlebox}

\renewcommand{\arraystretch}{1.3}
\rowcolors{2}{milcGris}{white}
\begin{tabularx}{\textwidth}{>{\bfseries}p{5cm}|Y}
\arrayrulecolor{milcLinea}
\rowcolor{milcMagenta}{\color{white}\textbf{Estrategia}} & {\color{white}\textbf{Descripción}} \\
""")
    for e in estrategias:
        out.append(rf"{tex(e['nombre'])} & {tex(e['descripcion'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\newpage")
    return "\n".join(out)


def render_objetivos(objetivos: list[str]) -> str:
    parts = [r"""
\begin{titlebox}{milcTurquesa}
Objetivos formativos del área
\end{titlebox}

Cinco metas que guían el currículo. Se ponen en juego en cada guía, proyecto y examen.

\vspace{3mm}

\begin{enumerate}[leftmargin=8mm,itemsep=4mm]
"""]
    for o in objetivos:
        parts.append(rf"\item \large {tex(o)}")
    parts.append(r"\end{enumerate}")
    return "\n".join(parts)


def render_referentes(referentes: list[dict]) -> str:
    out = [r"""
\vspace{6mm}

\begin{titlebox}{milcVino}
Marco teórico · 7 referentes
\end{titlebox}

MILC integra a los grandes referentes pedagógicos, filosóficos y tecnológicos en un
lenguaje pedagógico operativo para el aula.

\vspace{3mm}
\renewcommand{\arraystretch}{1.4}
\rowcolors{2}{milcGris}{white}
\begin{tabularx}{\textwidth}{>{\bfseries}p{4.5cm}|Y}
\arrayrulecolor{milcLinea}
\rowcolor{milcVino}{\color{white}\textbf{Autor · obra}} & {\color{white}\textbf{Aporte}} \\
"""]
    for r in referentes:
        out.append(rf"{tex(r['autor'])} · \textit{{{tex(r['obra'])}}} & {tex(r['aporte'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\newpage")
    return "\n".join(out)


def render_evaluacion(criterios: list[dict], ponderacion: list[dict]) -> str:
    out = [r"""
\begin{titlebox}{milcMostaza}
Evaluación liberadora
\end{titlebox}

Formativa, criterial, integral y liberadora --- coherente con el SIEE institucional.
Cuatro criterios integrales y una ponderación orientativa por período.

\vspace{3mm}

\begin{softbox}{milcMostaza}{milcGris}{4 criterios integrales}
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{>{\bfseries}p{4cm}|Y}
"""]
    for c in criterios:
        out.append(rf"{tex(c['nombre'])} & {tex(c['descripcion'])} \\")
    out.append(r"\end{tabularx}")
    out.append(r"\end{softbox}")
    out.append(r"\vspace{2mm}")
    out.append(r"""
\begin{softbox}{milcOcre}{milcGris}{Ponderación orientativa · 100\% del período}
\renewcommand{\arraystretch}{1.4}
\begin{tabularx}{\textwidth}{Y|>{\bfseries\centering\arraybackslash}p{2.5cm}}
""")
    for p in ponderacion:
        out.append(rf"{tex(p['item'])} & {p['porcentaje']}\% \\")
    out.append(r"\end{tabularx}")
    out.append(r"\end{softbox}")
    return "\n".join(out)


def render_pie() -> str:
    return r"""
\vfill

\begin{tcolorbox}[enhanced,colback=milcNegro,colframe=milcNegro,arc=4mm,boxrule=0pt,left=6mm,right=6mm,top=4mm,bottom=4mm]
\centering
{\sffamily\color{white}\small Plan de Área 2026 · Tecnología e Informática}\\[1mm]
{\sffamily\color{milcMostaza}\footnotesize Institución Educativa Sor María Juliana · Cartago, Valle del Cauca}\\[1mm]
{\sffamily\color{white}\footnotesize Autor: Dr. Álvaro Cárdenas Orozco}\\[2mm]
{\sffamily\color{white}\scriptsize Plataforma Conéctate · alguarito.github.io/plataformaconectate}
\end{tcolorbox}
"""


# ───────── Composición + compilación ────────────────────────────────────────


def build_tex() -> str:
    src = _read_ts()
    plan = _extract_plan_area(src)
    if not plan.get("recursos"):
        plan["recursos"] = {"guias": 180, "proyectos": 18, "examenes": 18, "total": 216}

    fases = _extract_array_objects(src, "fasesMILC")
    triangulo = _extract_array_objects(src, "trianguloPensamiento")
    anclajes = _extract_array_objects(src, "anclajesAncestrales")
    referentes = _extract_array_objects(src, "referentes")
    estrategias = _extract_array_objects(src, "estrategias")
    componentes = _extract_array_objects(src, "componentesMEN")
    criterios = _extract_array_objects(src, "criteriosEvaluacion")
    politica = _extract_array_objects(src, "politicaIa")
    pipeline = _extract_array_objects(src, "pipelineMilc")
    val_contrato = _extract_array_objects(src, "valoracionPorContrato")
    val_densidad = _extract_array_objects(src, "valoracionPorDensidad")
    objetivos = _extract_string_array(src, "objetivos")
    principios = _extract_string_array(src, "principiosIa")

    ponderacion = [
        {"item": "Guías y portafolio", "porcentaje": 30},
        {"item": "Proyecto integrador", "porcentaje": 30},
        {"item": "Examen / prueba aplicada", "porcentaje": 20},
        {"item": "Participación y reflexión MILC", "porcentaje": 20},
    ]

    parts: list[str] = [PREAMBLE, r"\begin{document}"]
    parts.append(render_portada(plan))
    parts.append(render_meta_y_modelo(plan, fases))
    parts.append(render_triangulo(triangulo))
    parts.append(render_anclajes(anclajes))

    for g in (6, 7, 8, 9, 10, 11):
        malla = cargar_malla(g)
        parts.append(render_mallas(g, malla))

    parts.append(render_politica_ia(politica, principios))
    parts.append(render_valoracion(val_contrato, val_densidad))
    parts.append(render_pipeline(pipeline))
    parts.append(render_componentes_y_estrategias(componentes, estrategias))
    parts.append(render_objetivos(objetivos))
    parts.append(render_referentes(referentes))
    parts.append(render_evaluacion(criterios, ponderacion))
    parts.append(render_pie())
    parts.append(r"\end{document}")
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
            print(f"  ✗ xelatex falló (pasada {run + 1}) · revisa {log}", file=sys.stderr)
            if log.exists():
                lines = log.read_text(encoding="utf-8", errors="ignore").splitlines()
                err = [l for l in lines if l.startswith("!")][:12]
                for l in err:
                    print(f"    {l}", file=sys.stderr)
            return False

    for ext in ("aux", "log", "out", "toc", "tex"):
        aux = OUT_DIR / f"plan-de-area-2026.{ext}"
        if aux.exists():
            aux.unlink()
    return True


def main() -> int:
    print("▸ Generando LaTeX desde planArea.ts + content/guias/…")
    tex_source = build_tex()
    print(f"  · {len(tex_source.splitlines())} líneas de LaTeX")
    print("▸ Compilando con xelatex (2 pasadas)…")
    if not compile_pdf(tex_source):
        return 1
    size_kb = OUT_PDF.stat().st_size // 1024
    print(f"  ✓ {OUT_PDF.relative_to(ROOT)} ({size_kb} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
