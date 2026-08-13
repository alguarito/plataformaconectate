#!/usr/bin/env python3
"""
Motor de generación de guías PDF del programa **Territorio interior**.

Territorio interior es un programa transversal de Explora (6°–11°), ajeno a la
malla de periodos,
así que no encaja en el motor de grados (build-guias-g11.py). Este driver
paralelo reúsa el MISMO esquema YAML (MILC v3) y el template de portada única
(template-milc-v3.tex), que parametriza portada y encabezado.

Cada guía del programa «Territorio interior» vive en un YAML:
    content/guias/territorio-interior/{grado}-{n}.yaml       (ej. 7-10.yaml)
y produce:
    public/guias-mejoras/territorio-interior/{grado}-{n}-TIC.pdf  (xelatex, 2 pasadas)

El YAML es la single source of truth de la guía PDF. El contenido se escribe en
LaTeX literal (\\textbf{...}, \\emph{...}, comillas ``...''), igual que las guías
de grado: el builder NO convierte Markdown ni escapa caracteres.

Uso:
    python3 scripts/build-guias-territorio-interior.py 7-10     # una guía
    python3 scripts/build-guias-territorio-interior.py 7-10 6-1 # varias
    python3 scripts/build-guias-territorio-interior.py          # todas las completas
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3-territorio-interior.tex"
CONTENT_DIR = ROOT / "content" / "guias" / "territorio-interior"
OUT_DIR = ROOT / "public" / "guias-mejoras" / "territorio-interior"
XELATEX = "/Library/TeX/texbin/xelatex"

# Paleta de Territorio interior (teal): tono sereno, deliberadamente
# distinto del lima de Bebras y del azul de los grados. Print-safe: texto
# blanco legible sobre el primario en la portada.
COLORES = {
    "COLOR_PORTADA_PRIMARY": "0D9488",
    "COLOR_PORTADA_DARK": "115E59",
    "COLOR_PORTADA_SOFT": "CCFBF1",
}

# Metadata fija del programa (equivale al bloque PERIODOS por grado del motor
# de grados, pero Territorio interior es transversal: un solo bloque para
# todas las guías).
META = {
    "PERIODO_NOMBRE": "Territorio interior · Educación socioemocional",
    "DBA": "Comprende los fenómenos que afectan a su territorio, regula sus emociones ante ellos y acompaña a otros con empatía (transversal 6°--11°, articulado con la política «Escuela, territorio de vida» del MEN, Resolución 006519 de 2025, y la Ley 1620 de 2013)",
    "REFERENTES": "Primera ayuda psicológica (OMS, 2011/2012) · Directrices IASC (2007) · USGS y Servicio Geológico Colombiano · Pueblo nasa y la minga (CRIC) · Dussel · Estoicismo · Floridi",
}


# ─────────────────────────────────────────────────────────────────────────────
# Recursos visuales (bloque `recursos:` del YAML)
# ─────────────────────────────────────────────────────────────────────────────
#
# Assets en public/guias-mejoras/territorio-interior/assets/{clave}/ ; el .tex se
# escribe en public/guias-mejoras/territorio-interior/, así que la ruta relativa
# es assets/{clave}/.
#   · .png/.jpg/.jpeg/.pdf → \guiaFigura
#   · .tex/.tikz           → \guiaDiagrama (TikZ vectorial y editable)
# Un asset ausente avisa y se omite; nunca rompe el build.

EXT_IMAGEN = {".png", ".jpg", ".jpeg", ".pdf"}
EXT_DIAGRAMA_TEX = {".tex", ".tikz"}
SECCIONES_RECURSOS = ("apertura", "escuta", "sistematizacion", "praxis")
AVISOS_RECURSOS: list[str] = []


def recursos_a_tex(guia: dict) -> dict[str, str]:
    """Agrupa los assets declarados por `donde` y emite el LaTeX de cada sección."""
    recursos = guia.get("recursos") or {}
    ruta_rel = f"assets/{guia['clave']}"
    assets_dir = OUT_DIR / "assets" / f"{guia['clave']}"
    por_seccion: dict[str, list[str]] = {s: [] for s in SECCIONES_RECURSOS}

    for asset in [*(recursos.get("imagenes") or []), *(recursos.get("diagramas") or [])]:
        archivo = (asset.get("archivo") or "").strip()
        if not archivo:
            AVISOS_RECURSOS.append("asset sin campo 'archivo': omitido")
            continue
        donde = (asset.get("donde") or "apertura").strip().lower()
        if donde not in por_seccion:
            AVISOS_RECURSOS.append(f"{archivo}: 'donde: {donde}' inválido: omitido")
            continue
        if not (assets_dir / archivo).exists():
            AVISOS_RECURSOS.append(f"{archivo}: ausente en {ruta_rel}/: omitido")
            continue
        pie = (asset.get("caption") or asset.get("alt") or "").strip()
        ext = Path(archivo).suffix.lower()
        destino = f"{ruta_rel}/{archivo}"
        if ext in EXT_DIAGRAMA_TEX:
            por_seccion[donde].append(f"\\guiaDiagrama{{{destino}}}{{{pie}}}")
        elif ext in EXT_IMAGEN:
            por_seccion[donde].append(f"\\guiaFigura{{{destino}}}{{{pie}}}")
        else:
            AVISOS_RECURSOS.append(f"{archivo}: extensión '{ext}' no soportada: omitido")

    return {f"RECURSOS_{s.upper()}": "\n".join(b) for s, b in por_seccion.items()}


def cargar_guia(clave: str) -> dict | None:
    """Lee una guía por clave {grado}-{momento} (ej. '7-10' → 7-10.yaml)."""
    path = CONTENT_DIR / f"{clave}.yaml"
    if not path.exists():
        return None
    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def yaml_a_placeholders(guia: dict) -> dict[str, str]:
    """Aplana el YAML a las claves <<<UPPER>>> que espera el template.

    Espeja el mapeo del motor de grados, salvo que el número de portada (GRADO)
    y el del header (GUIA_NUMERO) toman el número de MOMENTO (esta serie no usa
    grado). El contenido se inyecta tal cual (LaTeX literal en el YAML).
    """
    momento = guia["momento"]
    grado = guia["grado"]

    titulo_portada_raw = guia.get("titulo_portada", guia["titulo"])
    titulo_portada_tex = titulo_portada_raw.rstrip("\n").replace("\n", "\\\\")

    apertura = guia["apertura"]
    puentes = guia["puentes"]
    escuta = guia["escuta"]
    sist = guia["sistematizacion"]
    prax = guia["praxis"]
    triangulo = guia["triangulo"]

    criterios_str = " ".join(
        f"({i}) {c}{'' if c.endswith('.') else '.'}"
        for i, c in enumerate(prax["criterios"], start=1)
    )

    et = guia.get("etiquetas", {})
    et_sist = et.get("sist") or [
        "1. Primera clave", "2. Segunda clave", "3. Tercera clave", "4. Cuarta clave",
    ]
    et_prax = et.get("prax") or [
        "Primer paso", "Segundo paso", "Tercer paso", "Cuarto paso",
    ]

    return {
        **COLORES,
        **META,
        # Rótulos que el template base fija en pensamiento computacional y que
        # esta serie parametriza (fallback = redacción neutra, nunca CT).
        "FRANJA_PORTADA": et.get(
            "franja_portada",
            "Metodología MILC · Apertura ancestral · Triángulo Dussel-Estoicismo-Floridi",
        ),
        "FASE2_TITULO": et.get("fase2_titulo", "Fase 2 · Sistematización"),
        "FASE2_SUBTITULO": et.get("fase2_subtitulo", "Comprendo y verifico."),
        "SIST_PILARES_TITULO": et.get("sist_pilares_titulo", "Cuatro claves aplicadas al tema"),
        "FASE3_TITULO": et.get("fase3_titulo", "Fase 3 · Praxis"),
        "PRAX_PILARES_TITULO": et.get("prax_pilares_titulo", "Construyendo el producto paso a paso"),
        **{f"ETIQUETA_{i}_SIST": v for i, v in enumerate(et_sist, start=1)},
        **{f"ETIQUETA_{i}_PRAX": v for i, v in enumerate(et_prax, start=1)},
        "RUBRICA2_CRITERIO": et.get("rubrica2_criterio", "Aplicación de las claves"),
        "RUBRICA2_LOGRADO": et.get("rubrica2_logrado", "Apliqué las cuatro claves a mi producto."),
        "RUBRICA2_PROCESO": et.get("rubrica2_proceso", "Apliqué algunas."),
        "RUBRICA2_APOYO": et.get("rubrica2_apoyo", "Necesito releer la fase 2."),
        # Identidad de esta familia en el template unificado.
        "HEADER_IZQ": "Territorio interior · Educación socioemocional",
        "HEADER_DER": f"Grado {grado}° · Momento {momento} · MILC v3",
        "PORTADA_ETIQUETA": "MOMENTO",
        "PORTADA_SERIE": "TERRITORIO INTERIOR · SOCIOEMOCIONAL",
        "PORTADA_ID": f"Grado {grado}° · Momento {momento}",
        # Esta serie numera MOMENTOS, no grados: sin circulito de «°».
        "PORTADA_CIRCULO": "",
        # Recursos visuales (vacíos si la guía no declara `recursos:`).
        **recursos_a_tex(guia),
        # El número grande de portada y el del header = nº de momento.
        "GRADO": str(momento),
        "GUIA_NUMERO": str(momento),
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
        "ESCUTA_CHECK_1": escuta["checks"][0],
        "ESCUTA_CHECK_2": escuta["checks"][1],
        "ESCUTA_CHECK_3": escuta["checks"][2],
        "ESCUTA_INFOBAND": escuta["cuaderno"],

        # Fase 2 · Sistematización (4 pilares)
        "SISTEMATIZACION_INTRO": sist["intro"],
        "PILAR_1_SIST": sist["pilares"][0],
        "PILAR_2_SIST": sist["pilares"][1],
        "PILAR_3_SIST": sist["pilares"][2],
        "PILAR_4_SIST": sist["pilares"][3],
        "ANATOMIA_TITULO": sist["anatomia"]["titulo"],
        "ANATOMIA_BODY": sist["anatomia"]["body"],
        "ERRORES_COMUNES": sist["errores_comunes"],
        "SIST_INFOBAND": sist["cuaderno"],

        # Fase 3 · Praxis (4 pilares + producto)
        "PRAXIS_INTRO": prax["intro"],
        "PILAR_1_PRAX": prax["pilares"][0],
        "PILAR_2_PRAX": prax["pilares"][1],
        "PILAR_3_PRAX": prax["pilares"][2],
        "PILAR_4_PRAX": prax["pilares"][3],
        "CHECKLIST_TITULO": prax["checklist"]["titulo"],
        "CHECKLIST_ITEMS": prax["checklist"]["items"],
        "PLANTILLA_GUION": prax["plantilla_guion"],
        "PRAX_INFOBAND": prax["cuaderno"],
        "PRODUCTO_TITULO": prax["producto_titulo"],
        "CRITERIOS_LISTA": criterios_str,

        # Triángulo de pensamiento
        "DUSSEL_CITA": triangulo["dussel"]["cita"],
        "DUSSEL_APLICACION": triangulo["dussel"]["aplicacion"],
        "DUSSEL_PREGUNTA": triangulo["dussel"]["pregunta_espejo"],
        "ESTOICISMO_AUTOR": triangulo["estoico"]["autor"],
        "ESTOICISMO_CITA": triangulo["estoico"]["cita"],
        "ESTOICISMO_APLICACION": triangulo["estoico"]["aplicacion"],
        "ESTOICISMO_PREGUNTA": triangulo["estoico"]["pregunta_espejo"],
        "FLORIDI_CITA": triangulo["floridi"]["cita"],
        "FLORIDI_APLICACION": triangulo["floridi"]["aplicacion"],
        "FLORIDI_PREGUNTA": triangulo["floridi"]["pregunta_espejo"],

        # Compromiso
        "COMPROMISO_INFOBAND": guia["compromiso"],
    }


def compilar_guia(guia: dict, template_text: str) -> tuple[bool, str]:
    """Llena el template, corre 2 pasadas de xelatex y limpia auxiliares."""
    clave = guia["clave"]
    out_tex = OUT_DIR / f"{clave}-TIC.tex"
    out_pdf = out_tex.with_suffix(".pdf")

    replacements = yaml_a_placeholders(guia)
    contenido = template_text
    for k, v in replacements.items():
        contenido = contenido.replace(f"<<<{k}>>>", str(v))

    remaining = re.findall(r"<<<[A-Z_0-9]+>>>", contenido)
    if remaining:
        sample = sorted(set(remaining))[:5]
        return False, f"placeholders sin reemplazar: {sample}{'…' if len(set(remaining)) > 5 else ''}"

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
            return False, f"xelatex pasada {i} falló (revisa {out_tex.with_suffix('.log').name})"

    for ext in (".aux", ".log", ".out"):
        aux = out_tex.with_suffix(ext)
        if aux.exists():
            aux.unlink()

    return True, f"{out_pdf.name} ({out_pdf.stat().st_size:,} bytes)"


def main(argv: list[str]) -> int:
    if not TEMPLATE.exists():
        print(f"ERROR: no encuentro el template {TEMPLATE}")
        return 1
    if not CONTENT_DIR.exists():
        print(f"ERROR: no encuentro contenido en {CONTENT_DIR}")
        return 1

    template_text = TEMPLATE.read_text(encoding="utf-8")

    if argv:
        seleccion = argv
    else:
        seleccion = sorted(
            p.stem for p in sorted(CONTENT_DIR.glob("*-*.yaml"))
        )

    completas, errores = [], []
    for clave in seleccion:
        guia = cargar_guia(clave)
        if guia is None:
            print(f"  ?  {clave} — no existe en {CONTENT_DIR}")
            errores.append(clave)
            continue
        if not guia.get("completo"):
            print(f"  ·  {clave}  PENDIENTE")
            continue
        ok, msg = compilar_guia(guia, template_text)
        if ok:
            print(f"  ✓  {clave}  OK   {msg}")
            completas.append(clave)
        else:
            print(f"  ✗  {clave}  ERROR   {msg}")
            errores.append(clave)

    print()
    print(f"Resumen: {len(completas)} compiladas · {len(errores)} errores")
    return 0 if not errores else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
