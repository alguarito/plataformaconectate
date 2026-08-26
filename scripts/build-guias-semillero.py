#!/usr/bin/env python3
"""
Motor de generación de guías PDF para el **Semillero de Investigación ConectaTE**.

El Semillero es TRANSVERSAL (6°–11°) y no está atado a grado/periodo/sesión: se
organiza por LÍNEA de investigación y MÓDULO, y cada módulo recorre una fase del
modelo MILC (Escucha → Sistematización → Praxis → Evaluación liberadora).
Por eso no encaja en el motor de grados (build-guias-g11.py) y usa —igual que
Bebras— un driver paralelo con el MISMO esquema YAML (MILC v3) y un template
plantilla unica (template-milc-v3.tex), que parametriza portada y encabezado.

El plan de estudios (la fuente de verdad de líneas y módulos) vive en
src/data/semillero.ts → planEstudios.

Cada módulo vive en un YAML:
    content/guias/semillero/{linea}-{modulo}.yaml     (ej. astronomia-1.yaml)
y produce:
    public/guias-mejoras/semillero/{linea}-{modulo}-TIC.pdf   (xelatex, 2 pasadas)

El YAML es la single source of truth. El contenido se escribe en LaTeX literal
(\\textbf{...}, \\emph{...}, comillas ``...''), igual que las guías de grado: el
builder NO convierte Markdown ni escapa caracteres.

Recursos visuales: soporta el bloque `recursos:` (imágenes y diagramas). Ver
recursos_a_tex() más abajo y content/guias/_SCHEMA.md.

Uso:
    python3 scripts/build-guias-semillero.py astronomia-1     # una guía
    python3 scripts/build-guias-semillero.py astronomia-1 robotica-1
    python3 scripts/build-guias-semillero.py                  # todas las completas
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3.tex"
CONTENT_DIR = ROOT / "content" / "guias" / "semillero"
OUT_DIR = ROOT / "public" / "guias-mejoras" / "semillero"
XELATEX = "/Library/TeX/texbin/xelatex"

# ─────────────────────────────────────────────────────────────────────────────
# Metadata por línea de investigación
# ─────────────────────────────────────────────────────────────────────────────
#
# Cada línea tiene su paleta (print-safe: texto blanco legible sobre el primario
# en la portada) y su nombre visible. Los colores espejan los bgClass Bento de
# src/data/semillero.ts → lineas, para que el PDF y la web se vean hermanos.

LINEAS = {
    "astronomia": {
        "nombre": "Astronomía y ciencia ciudadana",
        "colores": {
            "COLOR_PORTADA_PRIMARY": "7C3AED",  # bg-bento-purple
            "COLOR_PORTADA_DARK": "5B21B6",
            "COLOR_PORTADA_SOFT": "EDE9FE",
        },
        "referentes": "Orlove, Chiang \\& Cane (2000, Nature) · RECA · NASA-IASC · Saberes campesinos y Quimbaya del Norte del Valle",
    },
    "pensamiento-computacional": {
        "nombre": "Pensamiento computacional y algoritmia",
        "colores": {
            "COLOR_PORTADA_PRIMARY": "84CC16",  # bg-bento-lime
            "COLOR_PORTADA_DARK": "4D7C0F",
            "COLOR_PORTADA_SOFT": "ECFCCB",
        },
        "referentes": "Valentina Dagienė (Bebras) · Jeannette Wing (pensamiento computacional)",
    },
    "inteligencia-artificial": {
        "nombre": "Inteligencia artificial y datos",
        "colores": {
            "COLOR_PORTADA_PRIMARY": "0891B2",  # bg-bento-cyan (oscurecido para contraste)
            "COLOR_PORTADA_DARK": "155E75",
            "COLOR_PORTADA_SOFT": "CFFAFE",
        },
        "referentes": "Luciano Floridi (infoesfera) · Ética de la IA",
    },
    "robotica": {
        "nombre": "Robótica y sistemas embebidos",
        "colores": {
            "COLOR_PORTADA_PRIMARY": "EA580C",  # bg-bento-orange
            "COLOR_PORTADA_DARK": "9A3412",
            "COLOR_PORTADA_SOFT": "FFEDD5",
        },
        "referentes": "micro:bit · MakeCode · Continuidad con la unidad de 8° P2 (guías 8-2-1 a 8-2-10)",
    },
    "innovacion-social": {
        "nombre": "Innovación social y tecnología",
        "colores": {
            "COLOR_PORTADA_PRIMARY": "DB2777",  # bg-bento-pink
            "COLOR_PORTADA_DARK": "9D174D",
            "COLOR_PORTADA_SOFT": "FCE7F3",
        },
        "referentes": "Samsung Solve for Tomorrow · Pensamiento de diseño · Dussel (filosofía de la liberación)",
    },
}

# Fases MILC válidas (espejan src/data/planArea.ts → fasesMILC).
FASES_MILC = ("Escucha", "Sistematización", "Praxis", "Evaluación liberadora")

# Metadata común a todo el Semillero.
META_COMUN = {
    "DBA": "Formula preguntas investigables, produce evidencia con método y comunica hallazgos reconociendo sus límites (investigación estudiantil STEM, transversal 6°--11°)",
}

# ─────────────────────────────────────────────────────────────────────────────
# Recursos visuales (bloque `recursos:` del YAML)
# ─────────────────────────────────────────────────────────────────────────────
#
# Los assets viven en public/guias-mejoras/semillero/assets/{linea}-{modulo}/ y
# el .tex se escribe en public/guias-mejoras/semillero/, así que la ruta relativa
# desde el .tex es assets/{linea}-{modulo}/{archivo}.
#
# Por extensión se decide cómo incrustarlos:
#   · .png/.jpg/.jpeg/.pdf → \guiaFigura   (carta celeste, captura de MakeCode, foto)
#   · .tex/.tikz           → \guiaDiagrama (fuente TikZ vectorial y editable:
#                            esfera celeste, altura/azimut, diagramas de flujo)
#   · .svg                 → no soportado por xelatex; se omite con aviso
#
# Un asset declarado pero ausente NO rompe el build: se omite y se avisa.

EXT_IMAGEN = {".png", ".jpg", ".jpeg", ".pdf"}
EXT_DIAGRAMA_TEX = {".tex", ".tikz"}
SECCIONES_RECURSOS = ("apertura", "escuta", "sistematizacion", "praxis")


def recursos_a_tex(guia: dict, slug: str, avisos: list[str]) -> dict[str, str]:
    """Agrupa los assets declarados por `donde` y emite el LaTeX de cada sección.

    Devuelve siempre las 4 claves RECURSOS_* (vacías si no hay assets), para que
    ninguna guía deje placeholders sin reemplazar.
    """
    recursos = guia.get("recursos") or {}
    imagenes = recursos.get("imagenes") or []
    diagramas = recursos.get("diagramas") or []

    ruta_rel = f"assets/{slug}"
    assets_dir = OUT_DIR / "assets" / slug

    por_seccion: dict[str, list[str]] = {s: [] for s in SECCIONES_RECURSOS}

    for asset in [*imagenes, *diagramas]:
        archivo = (asset.get("archivo") or "").strip()
        if not archivo:
            avisos.append("asset sin campo 'archivo': omitido")
            continue

        donde = (asset.get("donde") or "apertura").strip().lower()
        if donde not in por_seccion:
            avisos.append(
                f"{archivo}: 'donde: {donde}' no es una sección válida "
                f"({', '.join(SECCIONES_RECURSOS)}): omitido"
            )
            continue

        if not (assets_dir / archivo).exists():
            avisos.append(f"{archivo}: declarado pero ausente en {ruta_rel}/: omitido")
            continue

        pie = (asset.get("caption") or asset.get("alt") or "").strip()
        ext = Path(archivo).suffix.lower()
        destino = f"{ruta_rel}/{archivo}"

        if ext in EXT_DIAGRAMA_TEX:
            por_seccion[donde].append(f"\\guiaDiagrama{{{destino}}}{{{pie}}}")
        elif ext in EXT_IMAGEN:
            por_seccion[donde].append(f"\\guiaFigura{{{destino}}}{{{pie}}}")
        else:
            avisos.append(
                f"{archivo}: extensión '{ext}' no soportada en PDF "
                f"(usa .png/.jpg/.pdf o .tex/.tikz): omitido"
            )

    return {
        f"RECURSOS_{seccion.upper()}": "\n".join(bloques)
        for seccion, bloques in por_seccion.items()
    }


# ─────────────────────────────────────────────────────────────────────────────
# Carga y validación
# ─────────────────────────────────────────────────────────────────────────────

def cargar_guia(slug: str) -> dict | None:
    """Lee una guía por slug (ej. 'astronomia-1' → astronomia-1.yaml)."""
    path = CONTENT_DIR / f"{slug}.yaml"
    if not path.exists():
        return None
    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def validar(guia: dict, slug: str) -> str | None:
    """Devuelve un mensaje de error si la guía no es publicable, o None si va bien."""
    linea = guia.get("linea")
    if linea not in LINEAS:
        return f"'linea: {linea}' desconocida (válidas: {', '.join(LINEAS)})"
    if guia.get("fase") not in FASES_MILC:
        return f"'fase: {guia.get('fase')}' no es una fase MILC ({', '.join(FASES_MILC)})"
    if not isinstance(guia.get("modulo"), int):
        return "falta 'modulo' (entero)"
    esperado = f"{linea}-{guia['modulo']}"
    if slug != esperado:
        return f"el nombre del archivo ({slug}) no coincide con linea-modulo ({esperado})"
    return None


# ─────────────────────────────────────────────────────────────────────────────
# Mapeo YAML → placeholders del template LaTeX
# ─────────────────────────────────────────────────────────────────────────────

def pilares_a_pasocards(pilares, color: str) -> str:
    """Convierte la lista de pilares/pasos del YAML en tarjetas numeradas.

    Antes el template tenia cuatro celdas fijas (PILAR_1..4 en una tabla) y el
    builder indexaba pilares[0..3]. Las guias con 6 pasos perdian los pasos 5 y
    6 en el PDF, en silencio (67 guias afectadas). Ahora se emiten todos.
    """
    return "\n".join(
        "\\milcpaso{%d}{%s}{%s}" % (i, color, texto)
        for i, texto in enumerate(pilares, start=1)
    )

def sin_comillas(texto: str) -> str:
    """Quita las comillas que rodean la formulacion del triangulo.

    Los YAML guardan la frase ya entrecomillada (``...''), asi que aunque la
    plantilla dejo de anadir su propio par, seguia imprimiendose como cita
    textual: justo lo que la nota al docente dice que NO es. Se quita aqui, al
    emitir el .tex; el YAML queda intacto.
    """
    t = texto.strip()
    for ini, fin in (("``", "''"), ("\u201c", "\u201d"), ('"', '"'), ("\u00ab", "\u00bb")):
        if t.startswith(ini) and t.endswith(fin):
            t = t[len(ini):-len(fin)].strip()
    return t

def yaml_a_placeholders(guia: dict, slug: str, avisos: list[str]) -> dict[str, str]:
    """Aplana el YAML a las claves <<<UPPER>>> que espera el template.

    Espeja el mapeo del motor de grados, salvo que el número grande de portada
    (GRADO) y el del encabezado (GUIA_NUMERO) toman el número de MÓDULO, y que
    LINEA_NOMBRE / FASE_MILC reemplazan a grado/periodo.
    """
    linea_meta = LINEAS[guia["linea"]]
    modulo = guia["modulo"]

    titulo_portada_raw = guia.get("titulo_portada", guia["titulo"])
    titulo_portada_tex = titulo_portada_raw.rstrip("\n").replace("\n", "\\\\[4pt]")

    apertura = guia["apertura"]
    puentes = guia["puentes"]
    escuta = guia["escuta"]
    sist = guia["sistematizacion"]
    prax = guia["praxis"]
    triangulo = guia["triangulo"]

    # Un criterio/check que contenga «: » (colon-espacio) hace que YAML lo
    # parsee como {clave: valor} en vez de string. En vez de reventar, lo
    # reconstruimos como texto plano. Así el autor puede escribir dos puntos.
    def _texto(item) -> str:
        if isinstance(item, dict):
            return "; ".join(f"{k}: {v}" for k, v in item.items())
        return str(item)

    criterios_str = " ".join(
        f"({i}) {_texto(c).rstrip('.')}."
        for i, c in enumerate(prax["criterios"], start=1)
    )

    # El subtítulo de portada sitúa el módulo en su itinerario y fase.
    periodo_nombre = f"Módulo {modulo} · Fase MILC: {guia['fase']}"
    duracion = guia.get("duracion_min")
    if duracion:
        periodo_nombre += f" · {duracion // 60} h de clase"

    return {
        **linea_meta["colores"],
        **META_COMUN,
        **recursos_a_tex(guia, slug, avisos),
        "REFERENTES": linea_meta["referentes"],
        # Identidad de esta familia en el template unificado.
        "HEADER_IZQ": f"Semillero de Investigación · {linea_meta['nombre']}",
        "HEADER_DER": f"Módulo {modulo} · {guia['fase']} · MILC v3",
        "PORTADA_ETIQUETA": "MÓDULO",
        "PORTADA_SERIE": "SEMILLERO DE INVESTIGACIÓN · CONECTATE",
        "PORTADA_ID": linea_meta["nombre"],
        # El Semillero numera MÓDULOS, no grados: sin circulito de «°».
        "PORTADA_CIRCULO": "",
        # En el Semillero, el número grande de portada y el del header = nº de módulo.
        "GRADO": str(modulo),
        "GUIA_NUMERO": str(modulo),
        "PERIODO_NOMBRE": periodo_nombre,
        "TITULO_GUIA": guia["titulo"],
        "TITULO_GUIA_PORTADA": titulo_portada_tex,
        "PRODUCTO_FINAL": guia["producto_final"],

        # Apertura
        "SABER_ANCESTRAL": apertura["saber_ancestral"],
        "SABER_CONTEMPORANEO": apertura["saber_contemporaneo"],
        "PREGUNTA_PUENTE": apertura["pregunta_puente"],
        "SABER_HACER": apertura["saber_hacer"],

        # Puentes narrativos (7)
        "PUENTE_TO_RUTA": puentes["a_ruta"],
        "PUENTE_TO_ESCUTA": puentes["a_escuta"],
        "PUENTE_TO_SIST": puentes["a_sistematizacion"],
        "PUENTE_TO_PRAX": puentes["a_praxis"],
        "PUENTE_TO_PROD": puentes["a_producto"],
        "PUENTE_TO_EVAL": puentes["a_evaluacion"],
        "PUENTE_TO_TRIANG": puentes["a_triangulo"],

        # Fase 1 · Escucha
        "ESCUTA_ESCENA": escuta["escena"],
        "ESCUTA_CHECK_1": _texto(escuta["checks"][0]),
        "ESCUTA_CHECK_2": _texto(escuta["checks"][1]),
        "ESCUTA_CHECK_3": _texto(escuta["checks"][2]),
        "ESCUTA_INFOBAND": escuta["cuaderno"],

        # Fase 2 · Sistematización (4 pilares)
        "SISTEMATIZACION_INTRO": sist["intro"],
        "SIST_PILARES": pilares_a_pasocards(sist["pilares"], "milcTurquesa"),
        "ANATOMIA_TITULO": sist["anatomia"]["titulo"],
        "ANATOMIA_BODY": sist["anatomia"]["body"],
        "ERRORES_COMUNES": sist["errores_comunes"],
        "SIST_INFOBAND": sist["cuaderno"],

        # Fase 3 · Praxis (pilares + producto)
        "PRAXIS_INTRO": prax["intro"],
        "PRAXIS_PASOS": pilares_a_pasocards(prax["pilares"], "milcMagenta"),
        "CHECKLIST_TITULO": prax["checklist"]["titulo"],
        "CHECKLIST_ITEMS": prax["checklist"]["items"],
        "PLANTILLA_GUION": prax["plantilla_guion"],
        "PRAX_INFOBAND": prax["cuaderno"],
        "PRODUCTO_TITULO": prax["producto_titulo"],
        "CRITERIOS_LISTA": criterios_str,

        # Triángulo de pensamiento
        "DUSSEL_CITA": sin_comillas(triangulo["dussel"]["cita"]),
        "DUSSEL_APLICACION": triangulo["dussel"]["aplicacion"],
        "DUSSEL_PREGUNTA": triangulo["dussel"]["pregunta_espejo"],
        "ESTOICISMO_AUTOR": triangulo["estoico"]["autor"],
        "ESTOICISMO_CITA": sin_comillas(triangulo["estoico"]["cita"]),
        "ESTOICISMO_APLICACION": triangulo["estoico"]["aplicacion"],
        "ESTOICISMO_PREGUNTA": triangulo["estoico"]["pregunta_espejo"],
        "FLORIDI_CITA": sin_comillas(triangulo["floridi"]["cita"]),
        "FLORIDI_APLICACION": triangulo["floridi"]["aplicacion"],
        "FLORIDI_PREGUNTA": triangulo["floridi"]["pregunta_espejo"],

        # Compromiso
        "COMPROMISO_INFOBAND": guia["compromiso"],
    }


# ─────────────────────────────────────────────────────────────────────────────
# Compilación
# ─────────────────────────────────────────────────────────────────────────────

def compilar_guia(guia: dict, slug: str, template_text: str) -> tuple[bool, str, list[str]]:
    """Llena el template, corre 2 pasadas de xelatex y limpia auxiliares."""
    avisos: list[str] = []
    out_tex = OUT_DIR / f"{slug}-TIC.tex"
    out_pdf = out_tex.with_suffix(".pdf")

    replacements = yaml_a_placeholders(guia, slug, avisos)
    contenido = template_text
    for k, v in replacements.items():
        contenido = contenido.replace(f"<<<{k}>>>", str(v))

    remaining = re.findall(r"<<<[A-Z_0-9]+>>>", contenido)
    if remaining:
        sample = sorted(set(remaining))[:5]
        return False, f"placeholders sin reemplazar: {sample}{'…' if len(set(remaining)) > 5 else ''}", avisos

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_tex.write_text(contenido, encoding="utf-8")

    for i in (1, 2):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-halt-on-error", out_tex.name],
            cwd=out_tex.parent,
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            return False, f"xelatex pasada {i} falló (revisa {out_tex.with_suffix('.log').name})", avisos

    for ext in (".aux", ".log", ".out"):
        aux = out_tex.with_suffix(ext)
        if aux.exists():
            aux.unlink()

    return True, f"{out_pdf.name} ({out_pdf.stat().st_size:,} bytes)", avisos


def main(argv: list[str]) -> int:
    if not TEMPLATE.exists():
        print(f"ERROR: no encuentro el template {TEMPLATE}")
        return 1
    if not CONTENT_DIR.exists():
        print(f"ERROR: no encuentro contenido en {CONTENT_DIR}")
        return 1

    template_text = TEMPLATE.read_text(encoding="utf-8")
    seleccion = argv or sorted(p.stem for p in CONTENT_DIR.glob("*.yaml"))

    print()
    print("  Plataforma Conéctate · Semillero de Investigación · Guías")
    print()

    completas, errores = [], []
    for slug in seleccion:
        guia = cargar_guia(slug)
        if guia is None:
            print(f"  ?  {slug} — no existe en {CONTENT_DIR}")
            errores.append(slug)
            continue
        if not guia.get("completo"):
            print(f"  ·  {slug}  PENDIENTE")
            continue

        problema = validar(guia, slug)
        if problema:
            print(f"  ✗  {slug}  ERROR   {problema}")
            errores.append(slug)
            continue

        ok, msg, avisos = compilar_guia(guia, slug, template_text)
        if ok:
            print(f"  ✓  {slug}  OK   {msg}")
            completas.append(slug)
        else:
            print(f"  ✗  {slug}  ERROR   {msg}")
            errores.append(slug)
        for a in avisos:
            print(f"       ⚠  recurso: {a}")

    print()
    print(f"Resumen: {len(completas)} compiladas · {len(errores)} errores")
    return 0 if not errores else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
