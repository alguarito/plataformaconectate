#!/usr/bin/env python3
"""
Generador del PDF rector del Plan de Área 2026 (formato institucional).

Lee content/plan-area/2026.yaml (single source of truth) y produce
public/plan-de-area/plan-de-area-2026.pdf vía xelatex en 2 pasadas.

Estructura institucional siguiendo el formato I.E. Sor María Juliana:
  Portada · Tabla de contenido · 18 secciones numeradas · Mallas curriculares
  por grado-periodo (tabla 6 columnas con componentes MEN) · Referencias.

Mantiene la paleta MILC del template de proyectos para consistencia visual.

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
YAML_PATH = ROOT / "content" / "plan-area" / "2026.yaml"
OUT_DIR = ROOT / "public" / "plan-de-area"
OUT_PDF = OUT_DIR / "plan-de-area-2026.pdf"
XELATEX = os.environ.get("XELATEX", "/Library/TeX/texbin/xelatex")


# ───────── LaTeX escaping ─────────────────────────────────────────────────


def tex(s: str) -> str:
    """Escape texto plano para LaTeX. NO escapa cuando ya parece LaTeX."""
    if s is None:
        return ""
    out = str(s)
    # Si el string ya contiene comandos LaTeX explícitos, lo dejamos como está.
    if re.search(r"\\(textbf|emph|itshape|begin|end|item|section)", out):
        return out
    # Escape básico
    out = out.replace("\\", "<<<BSLASH>>>")
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
    out = out.replace("<<<BSLASH>>>", r"\textbackslash{}")
    out = out.replace("—", "---")
    return out


def tex_block(text: str) -> str:
    """Para bloques de texto que ya pueden contener LaTeX (marco_legal, marco_teorico)."""
    if text is None:
        return ""
    return str(text).strip()


# ───────── Preamble + macros visuales ─────────────────────────────────────


PREAMBLE = r"""
\documentclass[11pt,letterpaper]{article}
\usepackage[margin=2cm,top=2cm,bottom=2.2cm,headheight=14pt]{geometry}
\usepackage{fontspec}
\usepackage[spanish]{babel}
\usepackage[table]{xcolor}
\usepackage{tikz}
\usepackage[most]{tcolorbox}
\usepackage{tabularx}
\usepackage{array}
\usepackage{longtable}
\usepackage{fancyhdr}
\usepackage{ragged2e}
\usepackage{enumitem}
\usepackage{microtype}
\usepackage{pifont}
\usepackage{hyperref}
\usepackage{titletoc}
\usepackage{titlesec}
\usepackage{titling}

\setmainfont{Helvetica Neue}
\setsansfont{Helvetica Neue}
\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}
\renewcommand{\arraystretch}{1.18}
\setlist{leftmargin=6mm,itemsep=1.5mm,topsep=1mm}
\newcolumntype{Y}{>{\RaggedRight\arraybackslash}X}

% Permite mayor flexibilidad de espaciado para evitar overflow horizontal
% (URLs y rutas largas sin guiones se quebrarían fuera del margen).
\setlength{\emergencystretch}{4em}
\tolerance=1000
\hyphenpenalty=500
\hbadness=10000

% Macro para quebrar URLs/rutas largas en cualquier carácter sin agregar guion.
\usepackage{seqsplit}
\newcommand{\rutapath}[1]{\seqsplit{#1}}

% Paleta institucional MILC.
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

\hypersetup{
  colorlinks=true,linkcolor=milcVino,urlcolor=milcTurquesa,
  pdftitle={Plan de Área 2026 · Tecnología e Informática},
  pdfauthor={Dr. Álvaro Cárdenas Orozco},
  pdfsubject={Plan de Área Institucional · I.E. Sor María Juliana · Cartago},
  pdfkeywords={MILC v3, plan de área, tecnología, informática, MEN},
  bookmarksopen=true,bookmarksnumbered=true,
}

% ─── Estilo de los títulos de sección ─────────────────────────────────────
\titleformat{\section}[hang]
  {\bfseries\Large\color{milcVino}}{\thesection.}{8pt}{}
  [\vspace{2pt}\color{milcLinea}\hrule]
\titleformat{\subsection}[hang]
  {\bfseries\large\color{milcMagenta}}{\thesubsection}{8pt}{}
\titleformat{\subsubsection}[hang]
  {\bfseries\normalsize\color{milcTurquesa}}{\thesubsubsection}{6pt}{}
\titlespacing*{\section}{0pt}{18pt}{8pt}
\titlespacing*{\subsection}{0pt}{14pt}{6pt}

% ─── Header / footer institucional ────────────────────────────────────────
\pagestyle{fancy}
\fancyhf{}
\lhead{\small\color{milcVino}\bfseries Plan de Área 2026 · Tecnología e Informática}
\rhead{\small\color{milcNegro} I.E. Sor María Juliana · Cartago}
\cfoot{\small\color{milcNegro}\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\renewcommand{\headrule}{\vspace{1pt}\hbox to\headwidth{\color{milcLinea}\leaders\hrule height 0.4pt\hfill}}

% Macros visuales reutilizados de proyectos.
\newtcolorbox{titlebox}[1]{
  enhanced,colback=#1,colframe=#1,arc=6mm,boxrule=0pt,
  left=6mm,right=6mm,top=3mm,bottom=3mm,
  before skip=8pt,after skip=8pt,
  fontupper=\sffamily\bfseries\large\color{white}
}

\newtcolorbox{softbox}[3]{
  enhanced,colback=#2,colframe=#1,borderline west={3pt}{0pt}{#1},
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

% Tabla institucional de encabezado para mallas (sin bordes externos).
\newcommand{\mallaheader}[7]{%
  % Args: nivel · grado · periodo · DBA · fecha_ini · fecha_fin · proyecto
  \begin{tcolorbox}[enhanced,colback=milcVino!90,colframe=milcVino!90,arc=2mm,boxrule=0pt,
    left=4mm,right=4mm,top=3mm,bottom=3mm,before skip=4pt,after skip=4pt]
  \footnotesize\color{white}\sffamily
  \textbf{ASIGNACIÓN ACADÉMICA:} Dr. Álvaro Cárdenas Orozco \hfill
  \textbf{ÁREA / ASIGNATURA:} TECNOLOGÍA E INFORMÁTICA\\
  \textbf{NIVEL:} #1 \hfill \textbf{GRADO:} #2 \hfill \textbf{PERIODO:} #3\\
  \textbf{NÚMERO DE SESIONES PEDAGÓGICAS POR PERIODO:} 10 \hfill
  \textbf{INICIO:} #5 \hfill \textbf{FIN:} #6\\
  \textbf{PROYECTO INTEGRADOR:} #7
  \end{tcolorbox}
  \begin{infoband}{milcOcre}
  \footnotesize\textbf{DBA:} #4
  \end{infoband}
  \begin{infoband}{milcTurquesa}
  \footnotesize\textbf{REFERENTES BIBLIOGRÁFICOS:} MEN Colombia (2008). \emph{Guía No. 30: Ser competente en tecnología}; MEN (2022). \emph{Orientaciones Curriculares}; Ley 115 de 1994; DBA por grado.
  \end{infoband}
}

% Configuración del título del TOC
\renewcommand{\contentsname}{\color{milcVino}Tabla de contenido}
"""


# ───────── Render por sección ─────────────────────────────────────────────


def render_portada(meta: dict) -> str:
    return rf"""
\thispagestyle{{empty}}
\vspace*{{0.3cm}}

\begin{{tcolorbox}}[
  enhanced,colback=milcVino,colframe=milcVino,arc=14mm,boxrule=0pt,
  left=12mm,right=12mm,top=14mm,bottom=14mm,
  overlay={{\draw[milcMostaza,line width=2pt,dash pattern=on 9pt off 8pt,rounded corners=12mm]
    ([xshift=7mm,yshift=-7mm]frame.north west) rectangle ([xshift=-7mm,yshift=7mm]frame.south east);}}
]
\centering
{{\sffamily\bfseries\color{{white}}\fontsize{{14}}{{16}}\selectfont DOCUMENTO RECTOR INSTITUCIONAL}}\\[16mm]
{{\sffamily\bfseries\color{{white}}\fontsize{{48}}{{52}}\selectfont Plan de Área}}\\[4mm]
{{\sffamily\bfseries\color{{milcMostaza}}\fontsize{{68}}{{72}}\selectfont {tex(str(meta['ano']))}}}\\[14mm]
{{\sffamily\color{{white}}\Large {tex(meta['area'])}}}\\[16mm]
{{\sffamily\bfseries\color{{white}}\large {tex(meta['institucion'])}}}\\[3mm]
{{\sffamily\color{{white}}\normalsize {tex(meta['ciudad'])}}}\\[6mm]
{{\sffamily\color{{white}}\small {tex(meta['cobertura'])}}}\\[2mm]
{{\sffamily\color{{white}}\small Autor responsable: {tex(meta['autor'])}}}
\end{{tcolorbox}}

\vspace{{8mm}}

\begin{{tcolorbox}}[enhanced,colback=milcGris,colframe=milcVino,arc=3mm,boxrule=.8pt,
  left=5mm,right=5mm,top=4mm,bottom=4mm]
\centering
{{\sffamily\bfseries\color{{milcVino}}\Large 216 piezas curriculares activas}}\\[2mm]
{{\sffamily\small\color{{milcNegro}} 180 guías didácticas \textbullet{{}} 18 proyectos integradores \textbullet{{}} 18 exámenes finales}}\\[2mm]
{{\sffamily\footnotesize\color{{milcNegro}} Pipeline editorial MILC v3 \textbullet{{}} alguarito.github.io/plataformaconectate}}
\end{{tcolorbox}}

\vfill
{{\footnotesize\color{{milcNegro}}\centering Edición 2026 \textbullet{{}} Versión institucional \textbullet{{}} Articulación MEN Guía No. 30 + Orientaciones 2022\par}}
\newpage
"""


def render_toc() -> str:
    return r"""
\thispagestyle{empty}
\tableofcontents
\newpage
\setcounter{page}{1}
"""


def render_introduccion(text: str) -> str:
    return rf"""
\section{{Introducción}}
{tex_block(text)}
"""


def render_justificacion(text: str) -> str:
    return rf"""
\section{{Justificación o enfoque del área}}
{tex_block(text)}
"""


def render_objetivos(general: str, metas: list[str]) -> str:
    parts = [r"\section{Objetivos y metas de aprendizaje}", r"\subsection{Objetivo general}"]
    parts.append(tex_block(general))
    parts.append(r"\subsection{Metas de aprendizaje}")
    parts.append(r"\begin{enumerate}")
    for m in metas:
        parts.append(rf"\item {tex(m)}")
    parts.append(r"\end{enumerate}")
    return "\n".join(parts)


def render_marco_legal(text: str) -> str:
    return rf"""
\section{{Marco legal}}
{tex_block(text)}
"""


def render_marco_teorico(intro: str, triangulo: list[dict], referentes: list[dict]) -> str:
    parts = [r"\section{Marco teórico}", tex_block(intro)]
    parts.append(r"\subsection{Triángulo de pensamiento}")
    parts.append("Cada guía, examen y proyecto integra tres lentes filosóficas que dialogan en el cierre:")
    for l in triangulo:
        parts.append(rf"""
\begin{{softbox}}{{milcTurquesa}}{{milcGris}}{{{tex(l['nombre'])}}}
{tex(l['aporte'])}
\end{{softbox}}
""")
    parts.append(r"\subsection{Referentes integradores}")
    parts.append(r"\renewcommand{\arraystretch}{1.4}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{4.2cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcVino}{\color{white}\textbf{Autor · obra}} & {\color{white}\textbf{Aporte}} \\")
    for r in referentes:
        parts.append(rf"{tex(r['autor'])} \emph{{{tex(r['obra'])}}} & {tex(r['aporte'])} \\")
    parts.append(r"\end{tabularx}")
    return "\n".join(parts)


def render_marco_contextual(historia: str, socio: str, anclajes: list[dict]) -> str:
    parts = [r"\section{Marco contextual}"]
    parts.append(r"\subsection{Reseña histórica institucional}")
    parts.append(tex_block(historia))
    parts.append(r"\subsection{Contexto socioeconómico}")
    parts.append(tex_block(socio))
    parts.append(r"\subsection{Anclajes ancestrales por periodo}")
    parts.append(r"""
Cada periodo curricular abre con un \emph{anclaje ancestral} de oficios del Valle del
Cauca, el Pacífico o el campo colombiano. El anclaje aparece en la guía de apertura
(S1), regresa en el examen formal (pregunta contexto) y vertebra el reto del proyecto
integrador. No es decoración: es continuidad cultural con identidad digital.
""")
    # Agrupar por grado
    by_g: dict[int, list[dict]] = {}
    for a in anclajes:
        by_g.setdefault(int(a["grado"]), []).append(a)
    color_p = {1: "milcVerde", 2: "milcMostaza", 3: "milcMagenta"}
    grado_nombres = {6: "Sexto", 7: "Séptimo", 8: "Octavo", 9: "Noveno", 10: "Décimo", 11: "Undécimo"}
    for g in sorted(by_g):
        # Encabezado de grado en barra completa
        parts.append(rf"""
\par\vspace{{4mm}}
\begin{{tcolorbox}}[enhanced,colback=milcVino,colframe=milcVino,arc=2mm,boxrule=0pt,
  left=4mm,right=4mm,top=2mm,bottom=2mm,before skip=4pt,after skip=4pt]
\sffamily\bfseries\color{{white}}\normalsize Grado {g}° {grado_nombres.get(g,'')}
\end{{tcolorbox}}
""")
        parts.append(r"\noindent")
        parts.append(r"\begin{tabularx}{\textwidth}{@{}YYY@{}}")
        cells = []
        for a in sorted(by_g[g], key=lambda x: int(x["periodo"])):
            color = color_p[int(a["periodo"])]
            cell = (
                rf"\begin{{tcolorbox}}[enhanced,colback={color}!10,colframe={color}!50,"
                rf"borderline west={{2pt}}{{0pt}}{{{color}}},arc=2mm,boxrule=.4pt,"
                rf"left=3mm,right=3mm,top=2mm,bottom=2mm,nobeforeafter,"
                rf"valign=top,height=4.4cm]"
                rf"\textbf{{\color{{{color}}}\scriptsize Período {a['periodo']}}}\\[0.5mm]"
                rf"\textbf{{\footnotesize {tex(a['oficio'])}}}\\[0.5mm]"
                rf"\scriptsize {tex(a['resumen'])}"
                rf"\end{{tcolorbox}}"
            )
            cells.append(cell)
        while len(cells) < 3:
            cells.append(r"\phantom{x}")
        parts.append(" & ".join(cells) + r" \\")
        parts.append(r"\end{tabularx}")
    return "\n".join(parts)


def render_marco_conceptual(intro: str, componentes: list[dict], fases: list[dict]) -> str:
    parts = [r"\section{Marco conceptual}", tex_block(intro)]
    parts.append(r"\subsection{Cuatro componentes MEN (Guía No. 30)}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{5.5cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcOcre}{\color{white}\textbf{Componente}} & {\color{white}\textbf{Descripción}} \\")
    for c in componentes:
        parts.append(rf"{tex(c['nombre'])} & {tex(c['descripcion'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsection{Cuatro fases del modelo MILC}")
    color_map = {"Escuta": "milcVerde", "Sistematización": "milcTurquesa", "Praxis": "milcMagenta", "Evaluación liberadora": "milcVino"}
    for i, f in enumerate(fases, 1):
        color = color_map.get(f["nombre"], "milcTurquesa")
        parts.append(rf"""
\begin{{softbox}}{{{color}}}{{milcGris}}{{Fase {i} · {tex(f['nombre'])}}}
{tex(f['descripcion'])}
\end{{softbox}}
""")
    return "\n".join(parts)


def render_malla_grado_periodo(grado: dict, periodo: dict, fechas: dict) -> str:
    """Renderiza la tabla institucional para un grado-periodo."""
    p_num = int(periodo["num"])
    fechas_p = fechas[f"p{p_num}"]
    p_names = {1: "PRIMERO", 2: "SEGUNDO", 3: "TERCERO"}
    header_str = (
        f"\\mallaheader{{{tex(grado['nivel'])}}}"
        f"{{{tex(grado['grado_nombre'])}}}"
        f"{{{p_names[p_num]}}}"
        f"{{{tex(periodo['dba'])}}}"
        f"{{{tex(fechas_p['inicio'])}}}"
        f"{{{tex(fechas_p['fin'])}}}"
        f"{{{tex(periodo['proyecto'])}}}"
    )
    parts = [
        rf"\subsubsection{{Período {p_num} · {tex(periodo['titulo'])}}}",
        header_str,
        rf"\textbf{{\small Anclaje ancestral:}} {tex(periodo['anclaje'])}\\[2mm]",
    ]
    # Tabla 6 columnas
    parts.append(r"\footnotesize")
    parts.append(r"\renewcommand{\arraystretch}{1.15}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{longtable}{|>{\bfseries\RaggedRight\arraybackslash}p{2.3cm}|>{\RaggedRight\arraybackslash}p{2.8cm}|>{\RaggedRight\arraybackslash}p{2.8cm}|>{\RaggedRight\arraybackslash}p{2.6cm}|>{\RaggedRight\arraybackslash}p{2.6cm}|>{\RaggedRight\arraybackslash}p{2.4cm}|}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\hline")
    parts.append(r"\rowcolor{milcVino}\multicolumn{1}{|c|}{\color{white}\bfseries\sffamily ESTÁNDAR} & \multicolumn{1}{c|}{\color{white}\bfseries\sffamily COMPETENCIA} & \multicolumn{1}{c|}{\color{white}\bfseries\sffamily APRENDIZAJE} & \multicolumn{1}{c|}{\color{white}\bfseries\sffamily COGNITIVO} & \multicolumn{1}{c|}{\color{white}\bfseries\sffamily PROCEDIMENTAL} & \multicolumn{1}{c|}{\color{white}\bfseries\sffamily ACTITUDINAL} \\ \hline")
    parts.append(r"\endhead")
    for c in periodo["competencias"]:
        row = " & ".join([
            tex(c.get("componente", "")),
            tex(c.get("competencia", "")),
            tex(c.get("aprendizaje", "")),
            tex(c.get("cognitivo", "")),
            tex(c.get("procedimental", "")),
            tex(c.get("actitudinal", "")),
        ]) + r" \\ \hline"
        parts.append(row)
    parts.append(r"\end{longtable}")
    parts.append(r"\normalsize")
    return "\n".join(parts)


def render_diseno_curricular(mallas: list[dict], fechas: dict) -> str:
    parts = [r"\section{Diseño curricular del área de Tecnología e Informática}"]
    parts.append("""
El diseño curricular se estructura para Básica Secundaria (grados 6° a 9°) y Media
(grados 10° a 11°), articulando los cuatro componentes MEN con el modelo MILC v3.
Cada grado tiene 30 sesiones distribuidas en 3 periodos de 10 sesiones cada uno.
La tabla por periodo combina: estándar (componente MEN) \\textbullet{} competencia
\\textbullet{} aprendizaje \\textbullet{} descriptores cognitivo, procedimental y
actitudinal.
""")
    grado_section = {6: r"\subsection{Básica Secundaria · Grado Sexto}",
                     7: r"\subsection{Básica Secundaria · Grado Séptimo}",
                     8: r"\subsection{Básica Secundaria · Grado Octavo}",
                     9: r"\subsection{Básica Secundaria · Grado Noveno}",
                     10: r"\subsection{Media · Grado Décimo}",
                     11: r"\subsection{Media · Grado Undécimo}"}
    for g in mallas:
        parts.append(grado_section.get(int(g["grado"]), rf"\subsection{{Grado {g['grado']}°}}"))
        for p in g["periodos"]:
            parts.append(render_malla_grado_periodo(g, p, fechas))
    return "\n".join(parts)


def render_metodologia(intro: str, estrategias: list[dict], politica: list[dict], principios: list[str]) -> str:
    parts = [r"\section{Metodología (plan de aula y secuencia didáctica)}"]
    parts.append(tex_block(intro))
    parts.append(r"\subsection{Estrategias activas de aprendizaje}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{5cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcMagenta}{\color{white}\textbf{Estrategia}} & {\color{white}\textbf{Descripción}} \\")
    for e in estrategias:
        parts.append(rf"{tex(e['nombre'])} & {tex(e['descripcion'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsection{Política de IA responsable}")
    parts.append("Distribución progresiva por grados. La rúbrica del proyecto integrador valora el \\textbf{uso responsable}, no la cantidad de IA usada.")
    for p in politica:
        parts.append(rf"""
\begin{{softbox}}{{milcMagenta}}{{milcGris}}{{{tex(p['rango'])} · {tex(p['postura'])}}}
{tex(p['detalle'])}
\end{{softbox}}
""")
    parts.append(r"\subsubsection{Principios transversales · 5 reglas no negociables}")
    parts.append(r"\begin{enumerate}")
    for pr in principios:
        parts.append(rf"\item {tex(pr)}")
    parts.append(r"\end{enumerate}")
    return "\n".join(parts)


def render_recursos(intro: str, recursos: list[dict], ambientes: list[str]) -> str:
    parts = [r"\section{Recursos y ambientes de aprendizaje}"]
    parts.append(tex_block(intro))
    parts.append(r"\subsection{Recursos curriculares activos}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{5cm}|c|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcTurquesa}{\color{white}\textbf{Recurso}} & {\color{white}\textbf{Cant.}} & {\color{white}\textbf{Detalle}} \\")
    for r in recursos:
        parts.append(rf"{tex(r['tipo'])} & {r['cantidad']} & {tex(r['detalle'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsection{Ambientes de aprendizaje}")
    parts.append(r"\begin{itemize}")
    for a in ambientes:
        parts.append(rf"\item {tex(a)}")
    parts.append(r"\end{itemize}")
    return "\n".join(parts)


def render_plataforma_conectate(pc: dict) -> str:
    parts = [r"\section{Plataforma Conéctate}"]
    parts.append(tex_block(pc["intro"]))

    # 11.1 Arquitectura técnica
    parts.append(r"\subsection{Arquitectura técnica}")
    parts.append(tex_block(pc["arquitectura_intro"]))
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries}p{3cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcTurquesa}{\color{white}\textbf{Aspecto}} & {\color{white}\textbf{Detalle}} \\")
    for it in pc["arquitectura_items"]:
        valor = tex(it["valor"])
        # Quiebre seguro de URLs/rutas largas
        valor = valor.replace("alguarito.github.io/plataformaconectate", r"\seqsplit{alguarito.github.io/plataformaconectate}")
        valor = valor.replace("github.com/alguarito/plataformaconectate", r"\seqsplit{github.com/alguarito/plataformaconectate}")
        parts.append(rf"{tex(it['clave'])} & {valor} \\")
    parts.append(r"\end{tabularx}")

    # 11.2 Offline (PWA)
    parts.append(r"\subsection{Funcionamiento offline · Progressive Web App}")
    parts.append(tex_block(pc["offline_intro"]))
    parts.append(r"\subsubsection{Estrategias de caché del Service Worker}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries}p{2.9cm}|>{\ttfamily\scriptsize}p{3.5cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcTurquesa}{\color{white}\textbf{Tipo}} & {\color{white}\textbf{Estrategia}} & {\color{white}\textbf{Detalle}} \\")
    for e in pc["offline_estrategias"]:
        parts.append(rf"{tex(e['tipo'])} & {tex(e['estrategia'])} & {tex(e['detalle'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(tex_block(pc["offline_versionado"]))

    # 11.3 Pipeline editorial
    parts.append(r"\subsection{Pipeline editorial MILC v3 · single source of truth}")
    parts.append(tex_block(pc["pipeline_intro"]))
    parts.append(r"\footnotesize")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries}p{3.2cm}|Y|>{\ttfamily\scriptsize\centering\arraybackslash}p{2.7cm}}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcVino}{\color{white}\textbf{Pieza}} & {\color{white}\textbf{Rutas YAML \textbar{} PDF \textbar{} TS}} & {\color{white}\textbf{Comando}} \\")
    for p in pc["pipeline_piezas"]:
        rutas = (
            rf"\texttt{{\scriptsize\seqsplit{{{tex(p['yaml'])}}}}}\\"
            rf"\texttt{{\scriptsize\seqsplit{{{tex(p['pdf'])}}}}}\\"
            rf"\texttt{{\scriptsize\seqsplit{{{tex(p['ts'])}}}}}"
        )
        parts.append(rf"{tex(p['tipo'])} & {rutas} & {tex(p['comando'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\normalsize")
    parts.append(tex_block(pc["pipeline_validacion"]))

    # 11.4 Diseño + accesibilidad
    parts.append(r"\subsection{Diseño visual y accesibilidad}")
    parts.append(tex_block(pc["diseno_intro"]))
    parts.append(r"\subsubsection{Criterios de accesibilidad (WCAG 2.1 AA)}")
    parts.append(tex_block(pc["accesibilidad_intro"]))
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries}p{3.2cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcVerde}{\color{white}\textbf{Criterio}} & {\color{white}\textbf{Implementación}} \\")
    for it in pc["accesibilidad_items"]:
        parts.append(rf"{tex(it['clave'])} & {tex(it['valor'])} \\")
    parts.append(r"\end{tabularx}")

    # 11.5 Componentes interactivos
    parts.append(r"\subsection{Componentes interactivos}")
    parts.append(tex_block(pc["componentes_intro"]))
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries\ttfamily}p{3.2cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcMagenta}{\color{white}\textbf{Componente}} & {\color{white}\textbf{Descripción}} \\")
    for c in pc["componentes_lista"]:
        parts.append(rf"{tex(c['nombre'])} & {tex(c['descripcion'])} \\")
    parts.append(r"\end{tabularx}")

    # 11.6 Métricas Lighthouse
    parts.append(r"\subsection{Métricas de rendimiento (Lighthouse)}")
    parts.append(tex_block(pc["metricas_intro"]))
    parts.append(r"\renewcommand{\arraystretch}{1.35}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\par\noindent")
    parts.append(r"\begin{tabularx}{\linewidth}{>{\bfseries}p{3.2cm}|>{\bfseries\centering\arraybackslash}p{2.3cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcMostaza}{\color{white}\textbf{Métrica}} & {\color{white}\textbf{Valor}} & {\color{white}\textbf{Detalle}} \\")
    for m in pc["metricas_lista"]:
        parts.append(rf"{tex(m['metrica'])} & {tex(m['valor'])} & {tex(m['detalle'])} \\")
    parts.append(r"\end{tabularx}")

    # 11.7 Articulación con experiencia de aula
    parts.append(r"\subsection{Articulación con la experiencia de aula}")
    parts.append(tex_block(pc["articulacion_intro"]))
    for momento in pc["articulacion_momentos"]:
        parts.append(rf"""
\begin{{softbox}}{{milcTurquesa}}{{milcGris}}{{{tex(momento['cuando'])}}}
{tex(momento['detalle'])}
\end{{softbox}}
""")

    # 11.8 Brecha digital + 11.9 Open source
    parts.append(r"\subsection{Reducción de la brecha digital}")
    parts.append(tex_block(pc["brecha_digital"]))
    parts.append(r"\subsection{Código abierto y reproducibilidad}")
    parts.append(tex_block(pc["open_source"]))

    return "\n".join(parts)


def render_intensidad(ih: dict) -> str:
    return rf"""
\section{{Intensidad horaria por el área}}
{tex_block(ih['detalle'])}

\begin{{infoband}}{{milcOcre}}
\textbf{{Resumen:}} {ih['intensidad_semanal_horas']} horas semanales \textbullet{{}}
{ih['semanas_por_periodo']} semanas por periodo \textbullet{{}}
{ih['total_horas_periodo']} horas por periodo \textbullet{{}}
{ih['total_horas_ano']} horas anuales por grado.
\end{{infoband}}
"""


def render_evaluacion(intro: str, criterios: list[dict], pond: list[dict], tipos: list[str], val: dict) -> str:
    parts = [r"\section{Evaluación}", tex_block(intro)]
    parts.append(r"\subsection{Tipos de evaluación}")
    parts.append(r"\begin{itemize}")
    for t in tipos:
        parts.append(rf"\item {tex(t)}")
    parts.append(r"\end{itemize}")
    parts.append(r"\subsection{Cuatro criterios integrales}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\rowcolors{2}{milcGris}{white}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{5cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    parts.append(r"\rowcolor{milcMostaza}{\color{white}\textbf{Criterio}} & {\color{white}\textbf{Descripción}} \\")
    for c in criterios:
        parts.append(rf"{tex(c['nombre'])} & {tex(c['descripcion'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsection{Ponderación orientativa por periodo}")
    parts.append(r"\renewcommand{\arraystretch}{1.4}")
    parts.append(r"\begin{tabularx}{\textwidth}{Y|>{\bfseries\centering\arraybackslash}p{3cm}}")
    for p in pond:
        parts.append(rf"{tex(p['item'])} & {p['pct']}\% \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsection{Sistema de valoración web (Plataforma Conéctate)}")
    parts.append("El badge de cada guía combina dos señales independientes:")
    parts.append(r"\subsubsection{Estrellas (completitud del contrato MILC v3)}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{2.5cm}|>{\bfseries}p{4cm}|Y}")
    parts.append(r"\arrayrulecolor{milcLinea}")
    for c in val["estrellas"]:
        parts.append(rf"\rating{{{c['estrellas']}}} & {tex(c['nombre'])} & {tex(c['significado'])} \\")
    parts.append(r"\end{tabularx}")
    parts.append(r"\subsubsection{Color del badge (densidad por palabras del YAML)}")
    parts.append(r"\renewcommand{\arraystretch}{1.3}")
    parts.append(r"\begin{tabularx}{\textwidth}{>{\bfseries}p{2cm}|>{\bfseries}p{3cm}|Y}")
    for d in val["color"]:
        parts.append(rf"{tex(d['nivel'])} ({tex(d['color'])}) & {tex(d['umbral'])} & {tex(d['detalle'])} \\")
    parts.append(r"\end{tabularx}")
    return "\n".join(parts)


def render_seccion_texto(numero_titulo: str, text: str) -> str:
    """Render una sección simple con texto que ya puede contener LaTeX."""
    return rf"""
\section{{{numero_titulo}}}
{tex_block(text)}
"""


def render_referencias(refs: list[str]) -> str:
    parts = [r"\section{Referencias bibliográficas}"]
    parts.append(r"\begin{itemize}")
    for r in refs:
        parts.append(rf"\item {tex_block(r)}")
    parts.append(r"\end{itemize}")
    return "\n".join(parts)


def render_pie() -> str:
    return r"""
\vfill
\begin{tcolorbox}[enhanced,colback=milcVino,colframe=milcVino,arc=4mm,boxrule=0pt,left=6mm,right=6mm,top=4mm,bottom=4mm]
\centering
{\sffamily\color{white}\small Plan de Área 2026 · Tecnología e Informática}\\[1mm]
{\sffamily\color{milcMostaza}\footnotesize Institución Educativa Sor María Juliana · Cartago, Valle del Cauca}\\[1mm]
{\sffamily\color{white}\footnotesize Autor: Dr. Álvaro Cárdenas Orozco}\\[2mm]
{\sffamily\color{white}\scriptsize Plataforma Conéctate · \url{https://alguarito.github.io/plataformaconectate}}
\end{tcolorbox}
"""


# ───────── Composición + compilación ─────────────────────────────────────


def build_tex() -> str:
    data = yaml.safe_load(YAML_PATH.read_text(encoding="utf-8"))
    meta = data["metadata"]
    fechas = meta["fechas"]

    parts: list[str] = [PREAMBLE, r"\begin{document}"]
    parts.append(render_portada(meta))
    parts.append(render_toc())

    parts.append(render_introduccion(data["introduccion"]))
    parts.append(render_justificacion(data["justificacion"]))
    parts.append(render_objetivos(data["objetivos_generales"], data["metas_aprendizaje"]))
    parts.append(render_marco_legal(data["marco_legal"]))
    parts.append(render_marco_teorico(
        data["marco_teorico_intro"], data["triangulo_pensamiento"], data["referentes_marco_teorico"]
    ))
    parts.append(render_marco_contextual(
        data["marco_contextual_historia"], data["marco_contextual_socioeconomico"], data["anclajes_ancestrales"]
    ))
    parts.append(render_marco_conceptual(
        data["marco_conceptual_intro"], data["componentes_men"], data["fases_milc"]
    ))
    parts.append(render_diseno_curricular(data["mallas"], fechas))
    parts.append(render_metodologia(
        data["metodologia_intro"], data["estrategias_activas"], data["politica_ia"], data["principios_ia"]
    ))
    parts.append(render_recursos(data["recursos_intro"], data["recursos"], data["ambientes"]))
    parts.append(render_plataforma_conectate(data["plataforma_conectate"]))
    parts.append(render_intensidad(data["intensidad_horaria"]))
    parts.append(render_evaluacion(
        data["evaluacion_intro"], data["criterios_evaluacion"], data["ponderacion"],
        data["tipos_evaluacion"], data["valoracion_web"]
    ))
    parts.append(render_seccion_texto("Plan de acción hacia la Meta de la Excelencia (HME)", data["plan_hme"]))
    parts.append(render_seccion_texto("Comisión de evaluación y promoción", data["comision_evaluacion"]))
    parts.append(render_seccion_texto("Actividades de apoyo para estudiantes con dificultades", data["actividades_apoyo"]))
    parts.append(render_seccion_texto("Modelo para estudiantes con NEE", data["nee"]))
    parts.append(render_seccion_texto("Articulación con proyectos transversales", data["articulacion_transversal"]))
    parts.append(render_referencias(data["referencias_bibliograficas"]))
    parts.append(render_pie())

    parts.append(r"\end{document}")
    return "\n\n".join(parts)


def compile_pdf(tex_source: str) -> bool:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    work_tex = OUT_DIR / "plan-de-area-2026.tex"
    work_tex.write_text(tex_source, encoding="utf-8")

    for run in range(2):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-output-directory", str(OUT_DIR), str(work_tex)],
            capture_output=True, text=True,
        )
        if result.returncode != 0:
            log = OUT_DIR / "plan-de-area-2026.log"
            print(f"  ✗ xelatex falló (pasada {run + 1}) · revisa {log}", file=sys.stderr)
            if log.exists():
                lines = log.read_text(encoding="utf-8", errors="ignore").splitlines()
                errs = [l for l in lines if l.startswith("!")][:15]
                for l in errs:
                    print(f"    {l}", file=sys.stderr)
            return False

    for ext in ("aux", "log", "out", "toc", "tex"):
        aux = OUT_DIR / f"plan-de-area-2026.{ext}"
        if aux.exists():
            aux.unlink()
    return True


def main() -> int:
    print("▸ Generando LaTeX desde content/plan-area/2026.yaml…")
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
