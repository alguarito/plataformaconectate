#!/usr/bin/env python3
"""
Genera densidad.json para las 180 guías a partir de los fileSize (bytes)
de los .tex en Drive. Es una v1 rápida que no requiere descargar archivos.

Niveles:
- alta:  bytes >= P67 del grado
- media: P33 <= bytes < P67
- baja:  bytes < P33

Stars: 1-5 según percentil dentro del grado.

Output: public/data/densidad.json
{
  "6-1": { "guiaId": "1-6-TIC", "grado": 6, "sesion": 1, "bytes": 18860,
           "kb": 18.4, "nivel": "alta", "stars": 5, "percentile": 92 },
  ...
}
"""
import json
from pathlib import Path

# Datos extraídos de los outputs de Drive search_files (2026-05-07)
# Formato: (grado, sesion, bytes)
RAW = [
    # Grado 6
    (6,1,18860),(6,2,16616),(6,3,16075),(6,4,16075),(6,5,16724),(6,6,16605),(6,7,16139),
    (6,8,15045),(6,9,15052),(6,10,14778),(6,11,16156),(6,12,16162),(6,13,16180),(6,14,16172),
    (6,15,16140),(6,16,16182),(6,17,16188),(6,18,16236),(6,19,16126),(6,20,16171),(6,21,15878),
    (6,22,15954),(6,23,15876),(6,24,15936),(6,25,15904),(6,26,15929),(6,27,15043),(6,28,15926),
    (6,29,15962),(6,30,14793),
    # Grado 7
    (7,1,15985),(7,2,16042),(7,3,16099),(7,4,16094),(7,5,15993),(7,6,16103),(7,7,16140),
    (7,8,15985),(7,9,16146),(7,10,15983),(7,11,17771),(7,12,17644),(7,13,17546),(7,14,17546),
    (7,15,17696),(7,16,17700),(7,17,17546),(7,18,17680),(7,19,17546),(7,20,17767),(7,21,19145),
    (7,22,19063),(7,23,19155),(7,24,19150),(7,25,19083),(7,26,19062),(7,27,16100),(7,28,16061),
    (7,29,16175),(7,30,16054),
    # Grado 8
    (8,1,23672),(8,2,14319),(8,3,15798),(8,4,14379),(8,5,14315),(8,6,14412),(8,7,15826),
    (8,8,14351),(8,9,15853),(8,10,15723),(8,11,16870),(8,12,16851),(8,13,16808),(8,14,17455),
    (8,15,17561),(8,16,17553),(8,17,17601),(8,18,17565),(8,19,17589),(8,20,17511),(8,21,14440),
    (8,22,14308),(8,23,14387),(8,24,14207),(8,25,14231),(8,26,14179),(8,27,14203),(8,28,15999),
    (8,29,14398),(8,30,14104),
    # Grado 9
    (9,1,16196),(9,2,16438),(9,3,16188),(9,4,15511),(9,5,15505),(9,6,15528),(9,7,15515),
    (9,8,15503),(9,9,14363),(9,10,15424),(9,11,20755),(9,12,15689),(9,13,15679),(9,14,15501),
    (9,15,15551),(9,16,15511),(9,17,15498),(9,18,15555),(9,19,16139),(9,20,16035),(9,21,18970),
    (9,22,18990),(9,23,18986),(9,24,18900),(9,25,18940),(9,26,18944),(9,27,19038),(9,28,18928),
    (9,29,19116),(9,30,18958),
    # Grado 10
    (10,1,17017),(10,2,17085),(10,3,17037),(10,4,17011),(10,5,16990),(10,6,17049),(10,7,16972),
    (10,8,17040),(10,9,17002),(10,10,16872),(10,11,16682),(10,12,16723),(10,13,16658),(10,14,16699),
    (10,15,16682),(10,16,16631),(10,17,16693),(10,18,16693),(10,19,16693),(10,20,16576),(10,21,16808),
    (10,22,16814),(10,23,16779),(10,24,17325),(10,25,16823),(10,26,16767),(10,27,16758),(10,28,16835),
    (10,29,16826),(10,30,16685),
    # Grado 11
    (11,1,17563),(11,2,17586),(11,3,17560),(11,4,17518),(11,5,17560),(11,6,17545),(11,7,17530),
    (11,8,17536),(11,9,17554),(11,10,17400),(11,11,22909),(11,12,17190),(11,13,17226),(11,14,17202),
    (11,15,17205),(11,16,17208),(11,17,17223),(11,18,17214),(11,19,17199),(11,20,17117),(11,21,17600),
    (11,22,17587),(11,23,17497),(11,24,17568),(11,25,17491),(11,26,17524),(11,27,17535),(11,28,17574),
    (11,29,17494),(11,30,17284),
]

# Calcular percentiles GLOBALES (más justo que por grado, ya que algunos
# grados son consistentemente más pesados)
all_bytes = sorted(b for _, _, b in RAW)
n = len(all_bytes)


def percentile(value: int) -> int:
    """Devuelve percentil (0-100) del valor dentro del set global."""
    rank = sum(1 for b in all_bytes if b <= value)
    return int(round(100 * rank / n))


def nivel(p: int) -> str:
    if p >= 67:
        return "alta"
    if p >= 33:
        return "media"
    return "baja"


def stars(p: int) -> int:
    """Convierte percentil a 1-5 estrellas."""
    if p >= 90:
        return 5
    if p >= 70:
        return 4
    if p >= 50:
        return 3
    if p >= 25:
        return 2
    return 1


# Estimar palabras: ~7 bytes/palabra en LaTeX típico (incluye comandos)
# Excluyendo overhead de preamble (~3KB), contenido neto = bytes - 3000
def palabras_estimadas(b: int) -> int:
    contenido_neto = max(0, b - 3000)
    return int(contenido_neto / 6.5)


# Si existe un PDF local en public/guias-mejoras/ (pipeline MILC v3 nuevo),
# usamos su tamaño real en lugar del legacy de Drive. Eso refleja el trabajo
# de expansión MILC v3 en las estrellas y el badge.
ROOT_FOR_PDFS = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT_FOR_PDFS / "public" / "guias-mejoras"


def bytes_efectivos(grado: int, sesion: int, bytes_raw: int) -> int:
    pdf = PDF_DIR / f"{sesion}-{grado}-TIC.pdf"
    if pdf.exists():
        return pdf.stat().st_size
    return bytes_raw


# Reemplazar RAW bytes con tamaños reales de PDFs MILC v3 cuando existan.
RAW_EFECTIVO = [(g, s, bytes_efectivos(g, s, b)) for g, s, b in RAW]
all_bytes_eff = sorted(b for _, _, b in RAW_EFECTIVO)


def percentile_eff(value: int) -> int:
    rank = sum(1 for b in all_bytes_eff if b <= value)
    return int(round(100 * rank / len(all_bytes_eff)))


densidad = {}
for grado, sesion, bytes_ in RAW_EFECTIVO:
    p = percentile_eff(bytes_)
    densidad[f"{grado}-{sesion}"] = {
        "guiaId": f"{sesion}-{grado}-TIC",
        "grado": grado,
        "sesion": sesion,
        "bytes": bytes_,
        "kb": round(bytes_ / 1024, 1),
        "palabras": palabras_estimadas(bytes_),
        "nivel": nivel(p),
        "stars": stars(p),
        "percentile": p,
    }

# Estadísticas globales
niveles_count = {"alta": 0, "media": 0, "baja": 0}
for d in densidad.values():
    niveles_count[d["nivel"]] += 1

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/data/densidad.json'
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(densidad, ensure_ascii=False, indent=2))

print(f"✓ {len(densidad)} guías procesadas")
print(f"  Distribución: ALTA={niveles_count['alta']} | MEDIA={niveles_count['media']} | BAJA={niveles_count['baja']}")
print(f"  Output: {OUT}")
print(f"  Tamaño JSON: {OUT.stat().st_size} bytes")

# Ejemplos
print("\nEjemplos (primer y último de cada nivel):")
for niv in ("alta", "media", "baja"):
    items = [d for d in densidad.values() if d["nivel"] == niv]
    if items:
        items.sort(key=lambda x: x["bytes"])
        print(f"  {niv:5}: G{items[0]['grado']}·S{items[0]['sesion']}={items[0]['kb']}KB ⭐{items[0]['stars']} ... G{items[-1]['grado']}·S{items[-1]['sesion']}={items[-1]['kb']}KB ⭐{items[-1]['stars']}")
