from __future__ import annotations

import csv
import importlib.util
import json
import re
import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

from docx import Document


PACKAGE_ROOT = Path(__file__).resolve().parents[1]
ROOT = PACKAGE_ROOT
BASE_SCRIPT = PACKAGE_ROOT / "05_SCRIPTS_GENERADORES" / "generar_guias_sexto_milc.py"
PLAN = PACKAGE_ROOT / "00_PLAN_AREA" / "plan_area_tecnologia_2025.docx"
GUIDES_ROOT = PACKAGE_ROOT / "01_GUIAS_APRENDIZAJE"
OUT = PACKAGE_ROOT / "03_EXAMENES_FINALES"
AUTHOR = "Dr. Álvaro Cárdenas Orozco"
XELATEX = "xelatex"

GRADE_NAMES = {
    6: "sexto",
    7: "septimo",
    8: "octavo",
    9: "noveno",
    10: "decimo",
    11: "undecimo",
}

GRADE_DIRS = {
    6: "06_SEXTO",
    7: "07_SEPTIMO",
    8: "08_OCTAVO",
    9: "09_NOVENO",
    10: "10_DECIMO",
    11: "11_UNDECIMO",
}

TABLE_START = {6: 0, 7: 3, 8: 6, 9: 9, 10: 12, 11: 15}


@dataclass
class PeriodData:
    number: int
    name: str
    dba: str
    competencias: str
    aprendizajes: str
    cognitivos: str
    procedimentales: str
    actitudinales: str


@dataclass
class ExamData:
    grade: int
    period: PeriodData
    topics: list[str]
    focus: str


def load_base():
    spec = importlib.util.spec_from_file_location("milc_guides_base", BASE_SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"No se pudo cargar {BASE_SCRIPT}")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


BASE = load_base()


def clean(text: str) -> str:
    return " ".join((text or "").replace("\n", " ").split()).strip()


def tex_escape(text: str) -> str:
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
        "~": r"\textasciitilde{}",
        "^": r"\textasciicircum{}",
    }
    return "".join(replacements.get(ch, ch) for ch in str(text))


def period_name(number: int) -> str:
    return {1: "Primero", 2: "Segundo", 3: "Tercero"}[number]


def split_sentences(text: str, limit: int = 3) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", clean(text))
    return [p for p in parts if p][:limit]


def extract_period_data(grade: int, period: int) -> PeriodData:
    doc = Document(str(PLAN))
    table = doc.tables[TABLE_START[grade] + period - 1]
    row1 = [clean(c.text) for c in table.rows[1].cells]
    row5 = [clean(c.text) for c in table.rows[5].cells]
    return PeriodData(
        number=period,
        name=period_name(period),
        dba=row1[0].replace("DBA:", "").strip(),
        competencias=row5[1],
        aprendizajes=row5[2],
        cognitivos=row5[3],
        procedimentales=row5[4],
        actitudinales=row5[5],
    )


def load_topics(grade: int, period: int) -> list[str]:
    grade_name = GRADE_NAMES[grade]
    temario_path = GUIDES_ROOT / GRADE_DIRS[grade] / "fuente" / f"temario_{grade_name}.json"
    data = json.loads(temario_path.read_text(encoding="utf-8"))
    return [item["titulo"] for item in data if item["periodo"] == period]


def infer_focus(grade: int, period: int, topics: list[str], pdata: PeriodData) -> str:
    text = " ".join(topics).lower()
    planned = {
        (6, 1): "comunicación digital, identidad, netiqueta, correo institucional y seguridad básica",
        (6, 2): "arquitectura del computador, diagnóstico, organización de archivos y cuidado técnico",
        (6, 3): "producción documental, búsqueda de información, fuentes confiables y seguridad digital",
        (7, 1): "trabajo colaborativo en la nube, permisos, publicación y ciudadanía digital",
        (7, 2): "algoritmia, Scratch, estructuras de control, depuración y creación interactiva",
        (7, 3): "inteligencia artificial básica, prompts, verificación, sesgos, privacidad y uso responsable",
        (8, 1): "datos, hojas de cálculo, fórmulas, gráficos y toma de decisiones",
        (8, 2): "lógica de control, computación física, simulación y depuración",
        (8, 3): "producción multimedia, comunicación visual, seguridad en red y responsabilidad digital",
        (9, 1): "historia de la tecnología, normas documentales, citación y propiedad intelectual",
        (9, 2): "publicación digital, redes básicas, simulación de conectividad y accesibilidad",
        (9, 3): "inteligencia artificial básica, prompts, verificación, sesgos, privacidad y uso responsable",
    }
    if (grade, period) in planned:
        return planned[(grade, period)]
    if "latex" in text or "informe comercial" in text or "estudio de mercado" in text:
        return "informes comerciales en LaTeX, datos, citación, análisis y transparencia en IA"
    if "escritura inversa" in text or "libro" in text:
        return "escritura de libro con IA, prompts, autoría, edición y derechos de autor"
    if "proyecto final" in text or "sustentación final" in text or "preparación del pitch" in text:
        return "proyecto empresarial integrado con IA, datos, dashboard, automatización, documentación y pitch"
    if pdata and ("dashboard" in text or "decisiones empresariales" in text or "base de datos comercial" in text):
        return "datos empresariales, visualización, dashboard, reporte asistido con IA y decisiones"
    if "presencia digital empresarial" in text or "identidad de marca" in text or "seo básico" in text:
        return "presencia digital empresarial, identidad de marca, arquitectura web, SEO y ética con IA"
    if "procesos empresariales" in text or "automatización básica" in text or ("protección de datos" in text and "ley 1581" in text):
        return "procesos empresariales, automatización, atención al cliente, PDCA y protección de datos"
    if "inteligencia artificial" in text or "prompts" in text or "ia generativa" in text:
        return "inteligencia artificial básica, prompts, verificación, sesgos, privacidad y uso responsable"
    if "historia de la tecnología" in text or "icontec" in text or "apa" in text or "propiedad intelectual" in text:
        return "historia de la tecnología, normas documentales, citación y propiedad intelectual"
    if "diseño editorial digital" in text or "filius" in text or "topologías" in text or "publicación digital" in text:
        return "publicación digital, redes básicas, simulación de conectividad y accesibilidad"
    if "datos" in text or "excel" in text or "hoja" in text:
        return "datos, hojas de cálculo, análisis y toma de decisiones"
    if "hardware" in text or "computador" in text or "mantenimiento" in text:
        return "arquitectura del computador, diagnóstico y cuidado técnico"
    if "makecode" in text or "sensores" in text or "lógica de control" in text or "estructuras de control" in text or "pseudocódigo" in text:
        return "lógica de control, computación física, simulación y depuración"
    if "scratch" in text or "algorit" in text:
        return "programación, pensamiento computacional y creación de soluciones"
    if "nube" in text or "colaborativo" in text or "documento compartido" in text:
        return "trabajo colaborativo en la nube, permisos, publicación y ciudadanía digital"
    if "presentación" in text or "multimedia" in text or "canva" in text or "edición básica" in text:
        return "producción multimedia, comunicación visual, seguridad en red y responsabilidad digital"
    if "red" in text or "conectividad" in text or "internet" in text:
        return "redes, conectividad, información y seguridad digital"
    if "proyecto" in text or "innovación" in text or "emprendimiento" in text:
        return "proyecto tecnológico, innovación y responsabilidad social"
    if "documento" in text or "word" in text or "texto" in text:
        return "producción documental, formato y comunicación clara"
    return split_sentences(pdata.aprendizajes, 1)[0] if pdata.aprendizajes else pdata.dba


def build_exam(grade: int, period: int) -> ExamData:
    pdata = extract_period_data(grade, period)
    topics = load_topics(grade, period)
    return ExamData(grade=grade, period=pdata, topics=topics, focus=infer_focus(grade, period, topics, pdata))


def stem(exam: ExamData) -> str:
    return f"examen-{exam.period.number}-{exam.grade}-TIC"


def topic_summary(topics: list[str]) -> str:
    simplified = []
    for topic in topics[:10]:
        left = topic.split("—", 1)[0].strip()
        simplified.append(left)
    return "; ".join(simplified)


def questions(exam: ExamData) -> dict[str, str]:
    focus = exam.focus
    topics = [t.split("—", 1)[0].strip() for t in exam.topics]
    t1 = topics[0] if topics else "el tema del periodo"
    t2 = topics[min(3, len(topics) - 1)] if topics else "una práctica tecnológica"
    t3 = topics[min(6, len(topics) - 1)] if topics else "una evidencia"
    return {
        "mc1": f"¿Cuál acción muestra mejor uso responsable de {focus}?",
        "mc1a": "Copiar una respuesta sin verificar su fuente.",
        "mc1b": "Aplicar criterios, cuidar evidencias y justificar decisiones.",
        "mc1c": "Trabajar rápido aunque no se comprendan las instrucciones.",
        "mc1d": "Evitar preguntar para no mostrar dudas.",
        "mc2": f"En una situación relacionada con {t1}, la primera decisión MILC debe ser:",
        "mc2a": "producir el resultado final sin revisar el contexto.",
        "mc2b": "escuchar, observar y formular una pregunta significativa.",
        "mc2c": "calificar el trabajo de otros.",
        "mc2d": "ignorar las consecuencias sociales del uso tecnológico.",
        "short1": f"Explica con tus palabras una relación entre {t2} y el cuidado ético o responsable de la tecnología.",
        "case": f"Un equipo debe resolver un reto relacionado con {t3}, pero encuentra información incompleta, desacuerdos internos y poco tiempo. Propón dos decisiones responsables para avanzar.",
        "draw": f"Dibuja o esquematiza un producto, protocolo, experimento o solución que integre los aprendizajes del periodo sobre {focus}.",
    }


def tex_template(exam: ExamData) -> str:
    q = questions(exam)
    pdata = exam.period
    topics = tex_escape(topic_summary(exam.topics))
    grade_colors = BASE.tex_grade_color_definitions(exam.grade)
    return rf"""
\documentclass[10pt,letterpaper]{{article}}
\usepackage[margin=1.15cm]{{geometry}}
\usepackage[table]{{xcolor}}
\usepackage{{fontspec}}
\usepackage{{tikz}}
\usepackage[most]{{tcolorbox}}
\usepackage{{tabularx}}
\usepackage{{array}}
\usepackage{{enumitem}}
\pagestyle{{empty}}

\setmainfont{{Helvetica Neue}}
\setsansfont{{Helvetica Neue}}
\setlength{{\parindent}}{{0pt}}
\setlength{{\parskip}}{{3pt}}
\renewcommand{{\arraystretch}}{{1.12}}

\definecolor{{milcMagenta}}{{HTML}}{{E6007E}}
\definecolor{{milcVino}}{{HTML}}{{5A0038}}
\definecolor{{milcTurquesa}}{{HTML}}{{0093A5}}
\definecolor{{milcVerde}}{{HTML}}{{58A923}}
\definecolor{{milcMostaza}}{{HTML}}{{E5B400}}
\definecolor{{milcNegro}}{{HTML}}{{241816}}
\definecolor{{milcGris}}{{HTML}}{{F7F7F4}}
\definecolor{{milcLinea}}{{HTML}}{{E8E2DD}}
{grade_colors}
\color{{milcNegro}}

\newtcolorbox{{headerbox}}{{enhanced,colback=milcGradeDark,colframe=milcGradeDark,arc=5mm,boxrule=0pt,left=5mm,right=5mm,top=3mm,bottom=3mm}}
\newtcolorbox{{sectionbox}}[2]{{enhanced,colback=#2,colframe=#1,borderline west={{3pt}}{{0pt}}{{#1}},arc=1.5mm,boxrule=.35pt,left=3mm,right=3mm,top=2mm,bottom=2mm,before skip=3pt,after skip=4pt}}
\newcommand{{\linea}}{{\textcolor{{milcLinea}}{{\rule{{\linewidth}}{{0.45pt}}}}}}
\newcommand{{\lineafill}}{{\textcolor{{milcLinea}}{{\leaders\hrule height 0.45pt\hfill\kern0pt}}}}

\begin{{document}}
\begin{{headerbox}}
\begin{{tabularx}}{{\textwidth}}{{X r}}
{{\sffamily\bfseries\color{{white}}\Large Examen final de periodo}} & {{\sffamily\bfseries\color{{milcGradeAccent}}\Large {tex_escape(stem(exam))}}}\\
{{\color{{white}}Grado {exam.grade} · Periodo {tex_escape(pdata.name)} · Tecnología e Informática}} & {{\color{{white}}Autor: {tex_escape(AUTHOR)}}}
\end{{tabularx}}
\end{{headerbox}}

\begin{{tabularx}}{{\textwidth}}{{>{{\bfseries}}p{{2.1cm}}X>{{\bfseries}}p{{1.5cm}}X}}
Nombre & \linea & Curso & \linea\\
\end{{tabularx}}

\begin{{sectionbox}}{{milcTurquesa}}{{milcGris}}
\textbf{{DBA:}} {tex_escape(pdata.dba)}\\
\textbf{{Temas integrados:}} {topics}
\end{{sectionbox}}

\begin{{sectionbox}}{{milcVerde}}{{milcGris}}
\textbf{{1. Selección múltiple.}} Marca una opción y justifica en una frase.
\begin{{enumerate}}[label=\alph*) , leftmargin=*, itemsep=0pt, topsep=1pt]
\item {tex_escape(q["mc1"])}\\
A. {tex_escape(q["mc1a"])} \quad B. {tex_escape(q["mc1b"])} \quad C. {tex_escape(q["mc1c"])} \quad D. {tex_escape(q["mc1d"])}
\item {tex_escape(q["mc2"])}\\
A. {tex_escape(q["mc2a"])} \quad B. {tex_escape(q["mc2b"])} \quad C. {tex_escape(q["mc2c"])} \quad D. {tex_escape(q["mc2d"])}
\end{{enumerate}}
\textbf{{Justificación breve:}} \lineafill
\end{{sectionbox}}

\begin{{sectionbox}}{{milcMostaza}}{{milcGris}}
\textbf{{2. Respuesta corta.}} {tex_escape(q["short1"])}\\[1mm]
\linea\\[3mm]\linea
\end{{sectionbox}}

\newpage
\begin{{headerbox}}
\begin{{tabularx}}{{\textwidth}}{{X r}}
{{\sffamily\bfseries\color{{white}}\Large Examen final de periodo · continuación}} & {{\sffamily\bfseries\color{{milcGradeAccent}}\Large {tex_escape(stem(exam))}}}\\
{{\color{{white}}Grado {exam.grade} · Periodo {tex_escape(pdata.name)}}} & {{\color{{white}}Nombre: \textcolor{{white}}{{\rule{{4.8cm}}{{0.4pt}}}}}}
\end{{tabularx}}
\end{{headerbox}}

\begin{{sectionbox}}{{milcMagenta}}{{milcGris}}
\textbf{{3. Caso aplicado.}} {tex_escape(q["case"])}\\[1mm]
\textbf{{Decisión 1:}} \lineafill\\[3mm]
\textbf{{Decisión 2:}} \lineafill
\end{{sectionbox}}

\begin{{sectionbox}}{{milcVino}}{{milcGris}}
\textbf{{4. Producción visual.}} {tex_escape(q["draw"])}\\[-1mm]
\begin{{center}}
\begin{{tikzpicture}}
\draw[milcLinea, line width=.5pt] (0,0) rectangle (18.2,7.6);
\end{{tikzpicture}}
\end{{center}}
\textbf{{Explica tu dibujo en una frase:}} \lineafill
\end{{sectionbox}}

\begin{{tabularx}}{{\textwidth}}{{p{{3.8cm}}XXXX}}
\rowcolor{{milcGradeDark}}\color{{white}}\bfseries Criterio & \color{{white}}\bfseries 5 & \color{{white}}\bfseries 4 & \color{{white}}\bfseries 3 & \color{{white}}\bfseries 1-2\\
Conceptos clave & & & &\\
Criterio ético & & & &\\
Producción visual & & & &\\
\end{{tabularx}}

\end{{document}}
"""


def setup_dirs() -> dict[str, Path]:
    dirs = {
        "base": OUT,
        "tex": OUT / "tex",
        "pdf": OUT / "pdf",
        "build": OUT / "build",
        "fuente": OUT / "fuente",
        "scripts": OUT / "scripts",
    }
    for d in dirs.values():
        d.mkdir(parents=True, exist_ok=True)
    return dirs


def compile_tex(tex_path: Path, pdf_out: Path, build_dir: Path) -> tuple[bool, str]:
    job_dir = build_dir / tex_path.stem
    if job_dir.exists():
        shutil.rmtree(job_dir)
    job_dir.mkdir(parents=True)
    work_tex = job_dir / tex_path.name
    shutil.copy2(tex_path, work_tex)
    proc = subprocess.run(
        [XELATEX, "-interaction=nonstopmode", "-halt-on-error", work_tex.name],
        cwd=job_dir,
        capture_output=True,
        text=True,
    )
    if proc.returncode != 0:
        return False, (proc.stdout + "\n" + proc.stderr)[-2400:]
    shutil.copy2(job_dir / f"{tex_path.stem}.pdf", pdf_out)
    return True, "ok"


def main() -> None:
    dirs = setup_dirs()
    rows = []
    fuente = []
    for grade in range(6, 12):
        for period in range(1, 4):
            exam = build_exam(grade, period)
            name = stem(exam)
            tex_path = dirs["tex"] / f"{name}.tex"
            pdf_path = dirs["pdf"] / f"{name}.pdf"
            tex_path.write_text(tex_template(exam), encoding="utf-8")
            ok, message = compile_tex(tex_path, pdf_path, dirs["build"])
            print(f"{name}: {'PDF ok' if ok else 'PDF error'}")
            rows.append(
                {
                    "examen": name,
                    "grado": grade,
                    "periodo": period,
                    "tex": str(tex_path),
                    "pdf": str(pdf_path) if ok else "",
                    "estado_pdf": "ok" if ok else "error",
                    "mensaje": message,
                }
            )
            fuente.append(
                {
                    "examen": name,
                    "grado": grade,
                    "periodo": period,
                    "foco": exam.focus,
                    "temas": exam.topics,
                }
            )
    with (OUT / "manifest_examenes.csv").open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)
    (dirs["fuente"] / "examenes_periodo.json").write_text(json.dumps(fuente, ensure_ascii=False, indent=2), encoding="utf-8")
    shutil.copy2(Path(__file__), dirs["scripts"] / "generar_examenes_milc.py")
    print(f"\nSalida: {OUT}")


if __name__ == "__main__":
    main()
