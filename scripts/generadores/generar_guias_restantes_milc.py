from __future__ import annotations

import argparse
import csv
import importlib.util
import json
import re
import shutil
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BASE_SCRIPT = ROOT / "05_SCRIPTS_GENERADORES" / "generar_guias_sexto_milc.py"
OUT_ROOT = ROOT / "01_GUIAS_APRENDIZAJE"

GRADE_FOLDERS = {
    7: "septimo",
    8: "octavo",
    9: "noveno",
    10: "decimo",
    11: "undecimo",
}

TABLE_START = {
    7: 3,
    8: 6,
    9: 9,
    10: 12,
    11: 15,
}


def load_base():
    spec = importlib.util.spec_from_file_location("milc_base", BASE_SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"No se pudo cargar {BASE_SCRIPT}")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def make_period_extractor(mod, grade: int):
    def extract_period_data():
        doc = mod.Document(str(mod.PLAN))
        result = {}
        start = TABLE_START[grade]
        for offset, period in enumerate([1, 2, 3]):
            table = doc.tables[start + offset]
            row1 = [mod.clean(c.text) for c in table.rows[1].cells]
            row2 = [mod.clean(c.text) for c in table.rows[2].cells]
            row5 = [mod.clean(c.text) for c in table.rows[5].cells]
            result[period] = mod.PeriodData(
                number=period,
                name=mod.period_name(period),
                dba=row1[0].replace("DBA:", "").strip(),
                referentes=row2[0].replace("REFERENTES:", "").strip(),
                estandares=row5[0],
                competencias=row5[1],
                aprendizajes=row5[2],
                cognitivos=row5[3],
                procedimentales=row5[4],
                actitudinales=row5[5],
            )
        return result

    return extract_period_data


def make_topic_extractor(mod, grade: int):
    def extract_topics():
        current_temario = mod.OUT / "fuente" / f"temario_{GRADE_FOLDERS[grade]}.json"
        if current_temario.exists():
            data = json.loads(current_temario.read_text(encoding="utf-8"))
            topics = {int(item["guia"]): item for item in data if 1 <= int(item["guia"]) <= 30}
            missing = [i for i in range(1, 31) if i not in topics]
            if not missing:
                return topics

        topics = {}
        for path in mod.OLD_GUIDES.glob("PERIODO */guia_aprendizaje_grado_*_sesion_*.docx"):
            match = re.search(r"sesion_(\d+)\.docx$", path.name)
            if not match:
                continue
            session = int(match.group(1))
            if 1 <= session <= 30:
                topics[session] = mod.extract_title_from_docx(path)
        missing = [i for i in range(1, 31) if i not in topics]
        if missing:
            raise RuntimeError(f"Grado {grade}: faltan títulos para sesiones {missing}")
        return topics

    return extract_topics


def convert_docx_to_doc(folder: Path) -> int:
    docx_dir = folder / "docx"
    doc_dir = folder / "doc"
    doc_dir.mkdir(parents=True, exist_ok=True)
    count = 0
    for src in sorted(docx_dir.glob("*.docx")):
        out = doc_dir / f"{src.stem}.doc"
        import subprocess

        subprocess.run(
            ["textutil", "-convert", "doc", "-output", str(out), str(src)],
            check=True,
            capture_output=True,
            text=True,
        )
        count += 1
    return count


def update_manifest_with_doc(folder: Path) -> None:
    manifests = sorted(folder.glob("manifest_*.csv"))
    manifest = manifests[0] if manifests else folder / "manifest_sexto.csv"
    if not manifest.exists():
        return
    rows = list(csv.DictReader(manifest.open(encoding="utf-8")))
    for row in rows:
        row["doc"] = str(folder / "doc" / f"{row['guia']}.doc")
    fields = list(rows[0].keys())
    with manifest.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def rename_manifest(folder: Path, grade_name: str) -> None:
    old = folder / "manifest_sexto.csv"
    new = folder / f"manifest_{grade_name}.csv"
    if old.exists() and not new.exists():
        old.replace(new)


def rename_temario(folder: Path, grade_name: str) -> None:
    old = folder / "fuente" / "temario_sexto.json"
    new = folder / "fuente" / f"temario_{grade_name}.json"
    if old.exists() and not new.exists():
        old.replace(new)


def run_grade(grade: int) -> None:
    mod = load_base()
    grade_name = GRADE_FOLDERS[grade]

    mod.GRADE = grade
    mod.ROOT = ROOT
    mod.PLAN = ROOT / "00_PLAN_AREA" / "plan_area_tecnologia_2025.docx"
    mod.OLD_GUIDES = ROOT / "07_ANTERIORES_RESPALDO" / f"Copia de {grade}"
    folder_map = {
        7: "07_SEPTIMO",
        8: "08_OCTAVO",
        9: "09_NOVENO",
        10: "10_DECIMO",
        11: "11_UNDECIMO",
    }
    mod.OUT = OUT_ROOT / folder_map[grade]
    mod.extract_period_data = make_period_extractor(mod, grade)
    mod.extract_topics = make_topic_extractor(mod, grade)

    print(f"\n=== GRADO {grade} ({grade_name}) ===")
    mod.main()

    doc_count = convert_docx_to_doc(mod.OUT)
    update_manifest_with_doc(mod.OUT)
    rename_manifest(mod.OUT, grade_name)
    rename_temario(mod.OUT, grade_name)

    scripts_out = OUT_ROOT / "scripts"
    scripts_out.mkdir(parents=True, exist_ok=True)
    script_copy = scripts_out / f"generar_guias_{grade_name}.py"
    shutil.copy2(Path(__file__), script_copy)

    counts = {
        "tex": len(list((mod.OUT / "tex").glob("*.tex"))),
        "pdf": len(list((mod.OUT / "pdf").glob("*.pdf"))),
        "docx": len(list((mod.OUT / "docx").glob("*.docx"))),
        "doc": doc_count,
    }
    print(f"Conteos grado {grade}: {json.dumps(counts, ensure_ascii=False)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Regenera guías MILC para grados 7 a 11 desde los temarios actuales.")
    parser.add_argument("--grades", nargs="+", type=int, default=[7, 8, 9, 10, 11], choices=sorted(GRADE_FOLDERS))
    args = parser.parse_args()
    for grade in args.grades:
        run_grade(grade)
    print(f"\nLanzamiento completo: {OUT_ROOT}")


if __name__ == "__main__":
    main()
