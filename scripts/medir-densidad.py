#!/usr/bin/env python3
"""
Genera densidad.json con métricas absolutas de cada guía MILC v3.

Modelo v2 (sistema absoluto):
- Las **estrellas** del badge ya NO se calculan aquí: el componente
  ``BadgeDensidad.astro`` las deriva del nivel MILC (``pro``/``bloques``/
  ``legacy``/``none``) en runtime. Una guía MILC v3 pro siempre se ve ⭐⭐⭐⭐⭐
  sin depender del percentil.
- El **color** del badge sigue saliendo de aquí: ``nivel`` (alta/media/baja)
  según las **palabras reales del YAML**, en umbrales absolutos:
    * alta   ≥ 1500 palabras  (verde MILC)
    * media  1000 - 1499      (mostaza)
    * baja   <  1000          (ocre)
- ``bytes`` y ``kb`` siguen siendo el tamaño real del PDF generado (informativo).
- ``palabras`` ahora se cuenta directo del contenido editorial del YAML, no se
  estima desde bytes (que daba números absurdos para PDFs binarios).

Para regenerar: ``make guia-densidad`` o ``python3 scripts/medir-densidad.py``.
Output: ``public/data/densidad.json``.
"""
import json
import re
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    raise SystemExit("Falta PyYAML: ejecuta `pip install pyyaml` o usa el make target.")

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "public" / "guias-mejoras"
YAML_DIR = ROOT / "content" / "guias"

# Datos extraídos de los outputs de Drive search_files (2026-05-07).
# Fallback histórico: si una guía aún no tiene PDF MILC v3 ni YAML
# correspondiente, se usa el tamaño del .tex original como bytes.
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


# ─── Conteo de palabras desde el YAML ───────────────────────────────────────

# Limpieza ligera de LaTeX para que el conteo refleje texto humano leíble.
LATEX_CMD_WITH_ARG = re.compile(r"\\[a-zA-Z]+\{([^{}]*)\}")
LATEX_CMD_NO_ARG = re.compile(r"\\[a-zA-Z]+\b")
LATEX_BRACES = re.compile(r"[{}\[\]]")


def _limpiar_latex(texto: str) -> str:
    """Quita comandos LaTeX dejando el texto humano legible."""
    # \textbf{foo} → foo
    while True:
        nuevo = LATEX_CMD_WITH_ARG.sub(r"\1", texto)
        if nuevo == texto:
            break
        texto = nuevo
    # \\, \emph (sin args restantes), etc.
    texto = LATEX_CMD_NO_ARG.sub(" ", texto)
    texto = LATEX_BRACES.sub(" ", texto)
    return texto


def _contar_palabras(valor) -> int:
    """Recorre dict/list/str y cuenta palabras de contenido editorial."""
    if isinstance(valor, str):
        if not valor:
            return 0
        limpio = _limpiar_latex(valor).strip()
        if not limpio:
            return 0
        return len(limpio.split())
    if isinstance(valor, dict):
        # Saltamos llaves obvias de metadata que no son contenido editorial.
        ignorar = {"clave", "grado", "periodo", "sesion", "completo", "autor"}
        return sum(_contar_palabras(v) for k, v in valor.items() if k not in ignorar)
    if isinstance(valor, list):
        return sum(_contar_palabras(v) for v in valor)
    return 0


def palabras_yaml(grado: int, sesion_global: int) -> int:
    """Cuenta palabras reales del contenido editorial del YAML de la guía."""
    periodo = (sesion_global - 1) // 10 + 1
    sesion_local = (sesion_global - 1) % 10 + 1
    yaml_path = YAML_DIR / str(grado) / f"{grado}-{periodo}-{sesion_local}.yaml"
    if not yaml_path.exists():
        return 0
    try:
        data = yaml.safe_load(yaml_path.read_text(encoding="utf-8"))
    except yaml.YAMLError:
        return 0
    return _contar_palabras(data)


# ─── Bytes efectivos del PDF (informativo) ──────────────────────────────────

def bytes_pdf(grado: int, sesion: int, bytes_legacy: int) -> int:
    """Tamaño real del PDF si existe; si no, cae al .tex legacy."""
    pdf = PDF_DIR / f"{sesion}-{grado}-TIC.pdf"
    if pdf.exists():
        return pdf.stat().st_size
    return bytes_legacy


# ─── Nivel absoluto por palabras (color del badge) ──────────────────────────

# Umbrales absolutos pensados para una guía de 1 sesión (40-50 min) en MILC v3.
# Calibrados sobre la distribución real del corpus (mayo 2026):
#   min 1541 · P25 2150 · P50 2702 · P75 2931 · max 3415
# Significados:
#   alta  ≥ 2500: guía densa con actividades muy expandidas y ejemplos largos.
#   media 1800-2499: guía estándar que cumple contrato sin excesos.
#   baja  < 1800: guía mínima (cumple lo justo, candidata a expansión).
UMBRAL_ALTA = 2500
UMBRAL_MEDIA = 1800


def nivel_por_palabras(palabras: int) -> str:
    if palabras >= UMBRAL_ALTA:
        return "alta"
    if palabras >= UMBRAL_MEDIA:
        return "media"
    return "baja"


# Fallback de palabras cuando no hay YAML: estimar desde bytes del .tex legacy.
# Mantiene compatibilidad con guías aún no migradas a YAML.
def palabras_legacy(bytes_tex: int) -> int:
    """Estima palabras desde bytes del .tex (no aplicar a PDFs)."""
    contenido_neto = max(0, bytes_tex - 3000)
    return int(contenido_neto / 6.5)


# ─── Generación del JSON ────────────────────────────────────────────────────

densidad = {}
for grado, sesion, bytes_legacy in RAW:
    palabras = palabras_yaml(grado, sesion)
    if palabras == 0:
        palabras = palabras_legacy(bytes_legacy)
    bytes_efectivos = bytes_pdf(grado, sesion, bytes_legacy)
    densidad[f"{grado}-{sesion}"] = {
        "guiaId": f"{sesion}-{grado}-TIC",
        "grado": grado,
        "sesion": sesion,
        "bytes": bytes_efectivos,
        "kb": round(bytes_efectivos / 1024, 1),
        "palabras": palabras,
        "nivel": nivel_por_palabras(palabras),
    }

# Estadísticas
niveles_count = {"alta": 0, "media": 0, "baja": 0}
for d in densidad.values():
    niveles_count[d["nivel"]] += 1

OUT = ROOT / "public/data/densidad.json"
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(densidad, ensure_ascii=False, indent=2))

print(f"✓ {len(densidad)} guías procesadas (modelo absoluto v2)")
print(f"  Color del badge (por palabras del YAML):")
print(f"    ALTA  ≥{UMBRAL_ALTA}  → {niveles_count['alta']} guías (verde)")
print(f"    MEDIA {UMBRAL_MEDIA}-{UMBRAL_ALTA-1} → {niveles_count['media']} guías (mostaza)")
print(f"    BAJA  <{UMBRAL_MEDIA}  → {niveles_count['baja']} guías (ocre)")
print(f"  Output: {OUT}")
print(f"  Las estrellas se derivan del nivel MILC en runtime (BadgeDensidad.astro).")
