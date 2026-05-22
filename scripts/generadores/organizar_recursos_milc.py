from __future__ import annotations

import csv
import json
import shutil
from pathlib import Path


PACKAGE_ROOT = Path(__file__).resolve().parents[1]
ROOT = PACKAGE_ROOT
MASTER = PACKAGE_ROOT

GUIAS = MASTER / "01_GUIAS_APRENDIZAJE"
PROYECTOS = MASTER / "02_PROYECTOS_INTEGRADORES"
EXAMENES = MASTER / "03_EXAMENES_FINALES"
PLAN = MASTER / "00_PLAN_AREA" / "plan_area_tecnologia_2025.docx"
PLAN_EDITORIAL = MASTER / "00_PLAN_AREA" / "plan_area_2025_editorial_milc"
ANEXO_MILC = MASTER / "00_PLAN_AREA" / "anexo_marco_teorico_milc"

GRADE_DIRS = [
    ("sexto", "06_SEXTO"),
    ("septimo", "07_SEPTIMO"),
    ("octavo", "08_OCTAVO"),
    ("noveno", "09_NOVENO"),
    ("decimo", "10_DECIMO"),
    ("undecimo", "11_UNDECIMO"),
]


def ensure(path: Path) -> Path:
    path.mkdir(parents=True, exist_ok=True)
    return path


def copy_file(src: Path, dst: Path) -> None:
    if src.exists():
        ensure(dst.parent)
        if dst.exists() and src.resolve() == dst.resolve():
            return
        shutil.copy2(src, dst)


def copy_tree_files(src_dir: Path, dst_dir: Path, pattern: str = "*") -> int:
    ensure(dst_dir)
    count = 0
    if not src_dir.exists():
        return count
    for src in sorted(src_dir.glob(pattern)):
        if src.is_file():
            dst = dst_dir / src.name
            if dst.exists() and src.resolve() == dst.resolve():
                continue
            shutil.copy2(src, dst)
            count += 1
    return count


def copy_scripts() -> None:
    dst = ensure(MASTER / "05_SCRIPTS_GENERADORES")
    for src in sorted(dst.glob("*.py")):
        copy_file(src, dst / src.name)


def organize_plan() -> None:
    dst = ensure(MASTER / "00_PLAN_AREA")
    copy_file(PLAN, dst / PLAN.name)
    ensure(dst / "fuentes_curriculares")
    for src in [
        dst / "fuentes_curriculares" / "plantilla_guia_aprendizaje_milc.docx",
        dst / "fuentes_curriculares" / "plantilla_guia_aprendizaje_milc.json",
    ]:
        copy_file(src, dst / "fuentes_curriculares" / src.name)


def plan_rows() -> list[dict[str, str]]:
    rows = [
        {
            "tipo": "plan_area_base",
            "grado": "06-11",
            "periodo": "2025",
            "recurso": "plan_area_tecnologia_2025",
            "titulo": "Plan de área base 2025",
            "pdf": "",
            "tex": "",
            "doc": "",
            "docx": "00_PLAN_AREA/plan_area_tecnologia_2025.docx",
        }
    ]
    if PLAN_EDITORIAL.exists():
        rows.append(
            {
                "tipo": "plan_area_editorial",
                "grado": "06-11",
                "periodo": "2025",
                "recurso": "plan_area_tecnologia_2025_editorial_milc",
                "titulo": "Plan de área editorial MILC 2025",
                "pdf": "00_PLAN_AREA/plan_area_2025_editorial_milc/pdf/plan_area_tecnologia_2025_editorial_milc.pdf",
                "tex": "00_PLAN_AREA/plan_area_2025_editorial_milc/tex/plan_area_tecnologia_2025_editorial_milc.tex",
                "doc": "",
                "docx": "00_PLAN_AREA/plan_area_2025_editorial_milc/docx/plan_area_tecnologia_2025_editorial_milc.docx",
            }
        )
        rows.append(
            {
                "tipo": "anexo_correspondencia",
                "grado": "06-11",
                "periodo": "2025",
                "recurso": "correspondencia_plan_recursos",
                "titulo": "Correspondencia entre plan, guías, proyectos y exámenes",
                "pdf": "",
                "tex": "",
                "doc": "",
                "docx": "00_PLAN_AREA/plan_area_2025_editorial_milc/anexos/correspondencia_plan_recursos.csv",
            }
        )
    if ANEXO_MILC.exists():
        rows.append(
            {
                "tipo": "anexo_academico",
                "grado": "06-11",
                "periodo": "2025",
                "recurso": "anexo_marco_teorico_milc",
                "titulo": "Anexo académico: Marco teórico del Modelo MILC",
                "pdf": "00_PLAN_AREA/anexo_marco_teorico_milc/pdf/anexo_marco_teorico_milc.pdf",
                "tex": "00_PLAN_AREA/anexo_marco_teorico_milc/tex/anexo_marco_teorico_milc.tex",
                "doc": "",
                "docx": "00_PLAN_AREA/anexo_marco_teorico_milc/docx/anexo_marco_teorico_milc.docx",
            }
        )
    return rows


def organize_guides() -> list[dict[str, str]]:
    rows = []
    base = ensure(MASTER / "01_GUIAS_APRENDIZAJE")
    for grade_name, grade_folder in GRADE_DIRS:
        src_grade = GUIAS / grade_folder
        dst_grade = ensure(base / grade_folder)
        for sub in ["pdf", "tex", "doc", "docx", "fuente"]:
            copy_tree_files(src_grade / sub, dst_grade / sub)
        manifest = src_grade / f"manifest_{grade_name}.csv"
        if manifest.exists():
            copy_file(manifest, dst_grade / manifest.name)
            with manifest.open(encoding="utf-8") as handle:
                for row in csv.DictReader(handle):
                    rows.append(
                        {
                            "tipo": "guia",
                            "grado": grade_folder,
                            "periodo": row.get("periodo", ""),
                            "recurso": row.get("guia", ""),
                            "titulo": row.get("titulo", ""),
                            "pdf": f"01_GUIAS_APRENDIZAJE/{grade_folder}/pdf/{row.get('guia','')}.pdf",
                            "tex": f"01_GUIAS_APRENDIZAJE/{grade_folder}/tex/{row.get('guia','')}.tex",
                            "doc": f"01_GUIAS_APRENDIZAJE/{grade_folder}/doc/{row.get('guia','')}.doc",
                            "docx": f"01_GUIAS_APRENDIZAJE/{grade_folder}/docx/{row.get('guia','')}.docx",
                        }
                    )
    return rows


def organize_projects() -> list[dict[str, str]]:
    rows = []
    base = ensure(MASTER / "02_PROYECTOS_INTEGRADORES")
    metadata = {}
    fuente = PROYECTOS / "fuente" / "proyectos_periodo.json"
    if fuente.exists():
        for item in json.loads(fuente.read_text(encoding="utf-8")):
            metadata[item.get("proyecto", "")] = item.get("estrategia_activa", "")
    for sub in ["pdf", "tex", "fuente"]:
        copy_tree_files(PROYECTOS / sub, base / sub)
    manifest = PROYECTOS / "manifest_proyectos.csv"
    copy_file(manifest, base / "manifest_proyectos.csv")
    if manifest.exists():
        with manifest.open(encoding="utf-8") as handle:
            for row in csv.DictReader(handle):
                recurso = row.get("proyecto", "")
                rows.append(
                    {
                        "tipo": "proyecto",
                        "grado": row.get("grado", ""),
                        "periodo": row.get("periodo", ""),
                        "recurso": recurso,
                        "titulo": f"Proyecto integrador: {metadata.get(recurso, '').strip()}".strip(": "),
                        "pdf": f"02_PROYECTOS_INTEGRADORES/pdf/{recurso}.pdf",
                        "tex": f"02_PROYECTOS_INTEGRADORES/tex/{recurso}.tex",
                        "doc": "",
                        "docx": "",
                    }
                )
    return rows


def organize_exams() -> list[dict[str, str]]:
    rows = []
    base = ensure(MASTER / "03_EXAMENES_FINALES")
    metadata = {}
    fuente = EXAMENES / "fuente" / "examenes_periodo.json"
    if fuente.exists():
        for item in json.loads(fuente.read_text(encoding="utf-8")):
            metadata[item.get("examen", "")] = item.get("foco", "")
    for sub in ["pdf", "tex", "fuente"]:
        copy_tree_files(EXAMENES / sub, base / sub)
    manifest = EXAMENES / "manifest_examenes.csv"
    copy_file(manifest, base / "manifest_examenes.csv")
    if manifest.exists():
        with manifest.open(encoding="utf-8") as handle:
            for row in csv.DictReader(handle):
                recurso = row.get("examen", "")
                rows.append(
                    {
                        "tipo": "examen",
                        "grado": row.get("grado", ""),
                        "periodo": row.get("periodo", ""),
                        "recurso": recurso,
                        "titulo": f"Examen final: {metadata.get(recurso, '').strip()}".strip(": "),
                        "pdf": f"03_EXAMENES_FINALES/pdf/{recurso}.pdf",
                        "tex": f"03_EXAMENES_FINALES/tex/{recurso}.tex",
                        "doc": "",
                        "docx": "",
                    }
                )
    return rows


def organize_templates() -> None:
    dst = ensure(MASTER / "04_PLANTILLAS")
    # Use representative generated LaTeX files as editable master references.
    template_sources = {
        "plantilla_guia_milc_referencia.tex": GUIAS / "06_SEXTO" / "tex" / "1-6-TIC.tex",
        "plantilla_proyecto_milc_referencia.tex": PROYECTOS / "tex" / "proyecto-1-6-TIC.tex",
        "plantilla_examen_milc_referencia.tex": EXAMENES / "tex" / "examen-1-6-TIC.tex",
    }
    for name, src in template_sources.items():
        copy_file(src, dst / name)


def organize_backups() -> None:
    backup = ensure(MASTER / "07_ANTERIORES_RESPALDO")
    index = [str(MASTER)]
    (backup / "ubicaciones_originales.txt").write_text("\n".join(index) + "\n", encoding="utf-8")


def write_manifests(rows: list[dict[str, str]]) -> None:
    dst = ensure(MASTER / "06_MANIFIESTOS")
    fields = ["tipo", "grado", "periodo", "recurso", "titulo", "pdf", "tex", "doc", "docx"]
    with (dst / "manifest_general.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    summary = {
        "total_recursos": len(rows),
        "documentos_curriculares": sum(1 for r in rows if r["tipo"].startswith(("plan_area", "anexo"))),
        "guias": sum(1 for r in rows if r["tipo"] == "guia"),
        "proyectos": sum(1 for r in rows if r["tipo"] == "proyecto"),
        "examenes": sum(1 for r in rows if r["tipo"] == "examen"),
    }
    (dst / "resumen.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")


def write_readme() -> None:
    text = """# Tecnología e Informática MILC 2025

Repositorio documental organizado para el área de Tecnología e Informática.

## Estructura

- `00_PLAN_AREA`: plan de área base, plan editorial MILC, anexo académico MILC y fuentes curriculares.
- `01_GUIAS_APRENDIZAJE`: guías por grado, con PDF, TEX, DOC y DOCX.
- `02_PROYECTOS_INTEGRADORES`: proyectos finales de periodo en PDF y TEX.
- `03_EXAMENES_FINALES`: exámenes finales de periodo en PDF y TEX.
- `04_PLANTILLAS`: archivos LaTeX de referencia para guía, proyecto y examen.
- `05_SCRIPTS_GENERADORES`: scripts usados para regenerar recursos.
- `06_MANIFIESTOS`: índice general y resumen de recursos.
- `07_ANTERIORES_RESPALDO`: rutas de los materiales originales conservados.

## Documentos curriculares principales

- Plan base: `00_PLAN_AREA/plan_area_tecnologia_2025.docx`.
- Plan editorial MILC: `00_PLAN_AREA/plan_area_2025_editorial_milc/pdf/plan_area_tecnologia_2025_editorial_milc.pdf`.
- Anexo académico MILC: `00_PLAN_AREA/anexo_marco_teorico_milc/pdf/anexo_marco_teorico_milc.pdf`.
- Correspondencia plan-recursos: `00_PLAN_AREA/plan_area_2025_editorial_milc/anexos/correspondencia_plan_recursos.csv`.

## Nomenclatura

- Guías: `numero-grado-TIC`, por ejemplo `1-6-TIC.pdf`.
- Proyectos: `proyecto-periodo-grado-TIC`, por ejemplo `proyecto-2-10-TIC.pdf`.
- Exámenes: `examen-periodo-grado-TIC`, por ejemplo `examen-3-11-TIC.pdf`.

## Identidad Editorial

La línea visual usa una paleta magenta/vino con acentos verde, turquesa y mostaza. La portada conserva una línea discontinua decorativa; las secciones internas usan formas sólidas con texto blanco.

## Enfoque Pedagógico

Los recursos integran el método MILC: Escucha, Sistematización, Praxis y Evaluación liberadora. Los proyectos incorporan estrategias activas como Design Thinking, prototipado, experimentación, validación y sustentación.

## Autor

Dr. Álvaro Cárdenas Orozco.
"""
    (MASTER / "README.md").write_text(text, encoding="utf-8")


def main() -> None:
    ensure(MASTER)
    organize_plan()
    curricular_rows = plan_rows()
    guide_rows = organize_guides()
    project_rows = organize_projects()
    exam_rows = organize_exams()
    organize_templates()
    copy_scripts()
    organize_backups()
    rows = curricular_rows + guide_rows + project_rows + exam_rows
    write_manifests(rows)
    write_readme()
    print(MASTER)
    print(f"Recursos indexados: {len(rows)}")


if __name__ == "__main__":
    main()
