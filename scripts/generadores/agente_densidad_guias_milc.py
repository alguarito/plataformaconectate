from __future__ import annotations

import argparse
import csv
import json
import subprocess
import tempfile
from dataclasses import asdict, dataclass
from pathlib import Path

from PIL import Image


WHITE_THRESHOLD = 248
ROW_ACTIVE_RATIO = 0.0025
INNER_BLANK_RATIO = 0.0015


@dataclass
class PageAudit:
    guia: str
    pdf: str
    page: int
    total_pages: int
    non_white_pct: float
    trailing_blank_pct: float
    largest_inner_blank_pct: float
    severity: str
    expansion_slot: str
    recommendation: str


def render_pdf(pdf_path: Path, output_dir: Path, dpi: int) -> list[Path]:
    output_pattern = output_dir / "page-%03d.png"
    cmd = [
        "gs",
        "-q",
        "-dNOPAUSE",
        "-dBATCH",
        "-sDEVICE=png16m",
        f"-r{dpi}",
        "-dGraphicsAlphaBits=4",
        "-dTextAlphaBits=4",
        f"-sOutputFile={output_pattern}",
        str(pdf_path),
    ]
    subprocess.run(cmd, check=True, capture_output=True, text=True)
    return sorted(output_dir.glob("page-*.png"))


def is_non_white(pixel: tuple[int, int, int]) -> bool:
    return pixel[0] < WHITE_THRESHOLD or pixel[1] < WHITE_THRESHOLD or pixel[2] < WHITE_THRESHOLD


def row_occupancy(image: Image.Image) -> tuple[list[float], float]:
    rgb = image.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()
    rows: list[float] = []
    non_white = 0
    for y in range(height):
        row_non_white = 0
        for x in range(width):
            if is_non_white(pixels[x, y]):
                row_non_white += 1
        non_white += row_non_white
        rows.append(row_non_white / width)
    return rows, non_white / (width * height)


def longest_blank_band(rows: list[float]) -> float:
    if not rows:
        return 0.0
    height = len(rows)
    start = int(height * 0.08)
    end = int(height * 0.94)
    longest = 0
    current = 0
    for ratio in rows[start:end]:
        if ratio <= INNER_BLANK_RATIO:
            current += 1
        else:
            longest = max(longest, current)
            current = 0
    longest = max(longest, current)
    return longest / height


def trailing_blank(rows: list[float]) -> float:
    if not rows:
        return 0.0
    last_active = 0
    for index, ratio in enumerate(rows):
        if ratio > ROW_ACTIVE_RATIO:
            last_active = index
    return (len(rows) - last_active - 1) / len(rows)


def severity_for(non_white_pct: float, trailing_pct: float, band_pct: float) -> str:
    if band_pct >= 0.28 and trailing_pct < 0.08:
        return "zona_trabajo"
    if trailing_pct >= 0.30:
        return "alta"
    if trailing_pct >= 0.20 or (band_pct >= 0.20 and trailing_pct >= 0.12) or non_white_pct <= 0.025:
        return "media"
    return "ok"


def expansion_slot(page: int, total_pages: int, severity: str) -> str:
    if severity == "ok":
        return "sin ajuste"
    if severity == "zona_trabajo":
        return "espacio de respuesta"
    if page == 1:
        return "portada"
    if page <= 3:
        return "contexto/autonomia"
    if page == total_pages:
        return "evaluacion liberadora"
    if page >= total_pages - 1:
        return "producto/evaluacion"
    return "desarrollo/practica"


def recommendation_for(slot: str, trailing_pct: float, band_pct: float) -> str:
    if slot == "sin ajuste":
        return "La página aprovecha bien el espacio o contiene áreas de respuesta intencionales."
    if slot == "portada":
        return "No rellenar la portada; solo revisar cortes de título o equilibrio visual."
    if slot == "espacio de respuesta":
        return (
            "Parece un espacio intencional para que el estudiante produzca. No ocuparlo totalmente; "
            "si se busca mayor aprovechamiento, agregar andamiaje ligero: rótulos, cuadrícula, pistas, "
            "pasos de revisión o criterios dentro del mismo bloque."
        )
    if slot == "contexto/autonomia":
        return (
            "Agregar una meta de aprendizaje autónomo, instrucciones de uso de la guía, vocabulario previo "
            "o una mini lista de cotejo para iniciar sin depender totalmente del docente."
        )
    if slot == "desarrollo/practica":
        return (
            "Expandir con contenido pedagógico específico: definición clara, ejemplo trabajado, error común, "
            "micropráctica guiada, tabla de verificación o caso breve conectado al producto."
        )
    if slot == "producto/evaluacion":
        return (
            "Agregar criterios observables del producto, plan rápido de entrega, revisión por pares, "
            "lista de evidencias mínimas o mejora antes de socializar."
        )
    if slot == "evaluacion liberadora":
        return (
            "Ampliar con autoevaluación específica, compromiso verificable, transferencia a otra situación "
            "y una pregunta de reflexión ética o de convivencia."
        )
    detail = "final de página" if trailing_pct >= band_pct else "franja interna"
    return f"Usar el espacio en blanco detectado como {detail} para una ampliación breve y evaluable."


def audit_pdf(pdf_path: Path, dpi: int) -> list[PageAudit]:
    with tempfile.TemporaryDirectory(prefix="milc_density_") as tmp:
        pages = render_pdf(pdf_path, Path(tmp), dpi)
        total = len(pages)
        audits: list[PageAudit] = []
        for page_path in pages:
            page_number = int(page_path.stem.split("-")[-1])
            with Image.open(page_path) as image:
                rows, non_white_pct = row_occupancy(image)
            trailing_pct = trailing_blank(rows)
            band_pct = longest_blank_band(rows)
            severity = severity_for(non_white_pct, trailing_pct, band_pct)
            slot = expansion_slot(page_number, total, severity)
            audits.append(
                PageAudit(
                    guia=pdf_path.stem,
                    pdf=str(pdf_path),
                    page=page_number,
                    total_pages=total,
                    non_white_pct=round(non_white_pct, 4),
                    trailing_blank_pct=round(trailing_pct, 4),
                    largest_inner_blank_pct=round(band_pct, 4),
                    severity=severity,
                    expansion_slot=slot,
                    recommendation=recommendation_for(slot, trailing_pct, band_pct),
                )
            )
        return audits


def collect_pdfs(target: Path) -> list[Path]:
    if target.is_file() and target.suffix.lower() == ".pdf":
        return [target]
    pdf_dir = target / "pdf"
    if pdf_dir.exists():
        return sorted(pdf_dir.glob("*.pdf"), key=lambda p: natural_key(p.stem))
    return sorted(target.rglob("*.pdf"), key=lambda p: natural_key(p.stem))


def natural_key(text: str) -> list[object]:
    parts = []
    for piece in text.replace("-", " ").split():
        parts.append(int(piece) if piece.isdigit() else piece.lower())
    return parts


def write_csv(rows: list[PageAudit], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(asdict(rows[0]).keys()) if rows else [])
        if rows:
            writer.writeheader()
            writer.writerows(asdict(row) for row in rows)


def write_json(rows: list[PageAudit], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps([asdict(row) for row in rows], ensure_ascii=False, indent=2), encoding="utf-8")


def write_markdown(rows: list[PageAudit], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    flagged = [row for row in rows if row.severity != "ok"]
    high = [row for row in flagged if row.severity == "alta"]
    medium = [row for row in flagged if row.severity == "media"]
    work_zones = [row for row in flagged if row.severity == "zona_trabajo"]
    lines = [
        "# Auditoría de densidad MILC",
        "",
        f"- Páginas auditadas: {len(rows)}",
        f"- Páginas con ajuste alto: {len(high)}",
        f"- Páginas con ajuste medio: {len(medium)}",
        f"- Zonas de trabajo detectadas: {len(work_zones)}",
        "",
        "## Páginas priorizadas",
        "",
    ]
    if not flagged:
        lines.append("No se detectaron espacios blancos relevantes según los umbrales actuales.")
    order = {"alta": 0, "media": 1, "zona_trabajo": 2, "ok": 3}
    for row in sorted(flagged, key=lambda item: (order.get(item.severity, 9), item.guia, item.page)):
        lines.extend(
            [
                f"### {row.guia} · página {row.page}/{row.total_pages} · {row.severity}",
                "",
                f"- Espacio blanco final: {row.trailing_blank_pct:.1%}",
                f"- Mayor franja interna: {row.largest_inner_blank_pct:.1%}",
                f"- Tipo de expansión: {row.expansion_slot}",
                f"- Recomendación: {row.recommendation}",
                "",
            ]
        )
    path.write_text("\n".join(lines), encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Agente de densidad pedagógica para guías MILC en PDF.")
    parser.add_argument("target", type=Path, help="PDF, carpeta de grado o carpeta con subcarpeta pdf/")
    parser.add_argument("--dpi", type=int, default=72, help="Resolución de render para análisis. 72 es suficiente y rápido.")
    parser.add_argument("--output-dir", type=Path, default=None, help="Carpeta de reportes. Por defecto: target/auditoria_espacios")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    target = args.target.resolve()
    output_dir = args.output_dir or (target if target.is_dir() else target.parent) / "auditoria_espacios"
    pdfs = collect_pdfs(target)
    if not pdfs:
        raise SystemExit(f"No se encontraron PDF en {target}")
    rows: list[PageAudit] = []
    for pdf in pdfs:
        print(f"Auditando {pdf.name}...")
        rows.extend(audit_pdf(pdf, args.dpi))

    write_csv(rows, output_dir / "densidad_paginas.csv")
    write_json(rows, output_dir / "densidad_paginas.json")
    write_markdown(rows, output_dir / "plan_expansion_pedagogica.md")
    flagged = sum(1 for row in rows if row.severity != "ok")
    print(f"Páginas auditadas: {len(rows)}")
    print(f"Páginas priorizadas: {flagged}")
    print(f"Reporte: {output_dir / 'plan_expansion_pedagogica.md'}")


if __name__ == "__main__":
    main()
