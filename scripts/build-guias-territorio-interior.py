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
import sys
from pathlib import Path

# Presentación honesta del triángulo: ver scripts/lib_triangulo.py
sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib_triangulo import atribucion, cita_presentada, nota_docente  # noqa: E402
# Compilación XeLaTeX compartida (lee el .log, falla con Overfull \vbox):
# ver scripts/lib_xelatex.py
from lib_xelatex import XELATEX, compilar, texto_pdf  # noqa: E402,F401

import yaml

ROOT = Path(__file__).resolve().parent.parent
# Una sola plantilla para todas las familias. La copia propia de esta serie
# se quedó sin el rediseño de portadas (#265) y las guías salían con el
# diseño viejo; los rótulos que la justificaban ahora van parametrizados.
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3.tex"
CONTENT_DIR = ROOT / "content" / "guias" / "territorio-interior"
OUT_DIR = ROOT / "public" / "guias-mejoras" / "territorio-interior"
# XELATEX viene de lib_xelatex: el del PATH o, si no hay, el de MacTeX.

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
    "PERIODO_NOMBRE": "Territorio interior · Socioemocional",
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
            # El alt va al PDF etiquetado (/Alt); entre llaves por si trae «]».
            alt = (asset.get("alt") or "").strip()
            por_seccion[donde].append(f"\\guiaFigura[{{{alt}}}]{{{destino}}}{{{pie}}}")
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

def yaml_a_placeholders(guia: dict) -> dict[str, str]:
    """Aplana el YAML a las claves <<<UPPER>>> que espera el template.

    Espeja el mapeo del motor de grados, salvo que el número de portada (GRADO)
    y el del header (GUIA_NUMERO) toman el número de MOMENTO (esta serie no usa
    grado). El contenido se inyecta tal cual (LaTeX literal en el YAML).
    """
    momento = guia["momento"]
    grado = guia["grado"]

    titulo_portada_raw = guia.get("titulo_portada", guia["titulo"])
    titulo_portada_tex = titulo_portada_raw.rstrip("\n").replace("\n", "\\\\[4pt]")

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
        "REFERENTES": et.get("referentes", META["REFERENTES"]),
        "FASE2_TITULO": et.get("fase2_titulo", "Fase 2 · Sistematización"),
        "FASE2_SUBTITULO": et.get("fase2_subtitulo", "Comprendo y verifico."),
        "SIST_PILARES_TITULO": et.get("sist_pilares_titulo", "Cuatro claves aplicadas al tema"),
        "FASE3_TITULO": et.get("fase3_titulo", "Fase 3 · Praxis"),
        # Palabras de las tarjetas de fase: esta serie las nombra por su fase
        # MILC, no por el verbo que usan las guías de grado.
        "FASE2_CARD": et.get("fase2_card", "Sistematización"),
        "FASE3_CARD": et.get("fase3_card", "Praxis"),
        "FASE3_SUBTITULO": et.get("fase3_subtitulo", "Construyo y aplico."),
        "FASE4_CARD": et.get("fase4_card", "Evaluación"),
        "FASE4_SUBTITULO": et.get("fase4_subtitulo", "Reflexión liberadora."),
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
        # Metadatos del PDF: título en texto plano.
        "PDF_TITULO": texto_pdf(guia["titulo"]),
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
        "SIST_PILARES": pilares_a_pasocards(sist["pilares"], "milcTurquesa"),
        "ANATOMIA_TITULO": sist["anatomia"]["titulo"],
        "ANATOMIA_BODY": sist["anatomia"]["body"],
        "ERRORES_COMUNES": sist["errores_comunes"],
        "SIST_INFOBAND": sist["cuaderno"],

        # Fase 3 · Praxis (4 pilares + producto)
        "PRAXIS_INTRO": prax["intro"],
        "PRAXIS_PASOS": pilares_a_pasocards(prax["pilares"], "milcMagenta"),
        "CHECKLIST_TITULO": prax["checklist"]["titulo"],
        "CHECKLIST_ITEMS": prax["checklist"]["items"],
        "PLANTILLA_GUION": prax["plantilla_guion"],
        "PRAX_INFOBAND": prax["cuaderno"],
        "PRODUCTO_TITULO": prax["producto_titulo"],
        "CRITERIOS_LISTA": criterios_str,

        # Triángulo de pensamiento
                "TRIANGULO_NOTA": nota_docente(triangulo),
"DUSSEL_CITA": cita_presentada(triangulo["dussel"]),
        "DUSSEL_ATRIBUCION": atribucion(triangulo["dussel"]),
        "DUSSEL_APLICACION": triangulo["dussel"]["aplicacion"],
        "DUSSEL_PREGUNTA": triangulo["dussel"]["pregunta_espejo"],
        "ESTOICISMO_AUTOR": triangulo["estoico"]["autor"],
        "ESTOICISMO_CITA": cita_presentada(triangulo["estoico"]),
        "ESTOICISMO_ATRIBUCION": atribucion(triangulo["estoico"]),
        "ESTOICISMO_APLICACION": triangulo["estoico"]["aplicacion"],
        "ESTOICISMO_PREGUNTA": triangulo["estoico"]["pregunta_espejo"],
        "FLORIDI_CITA": cita_presentada(triangulo["floridi"]),
        "FLORIDI_ATRIBUCION": atribucion(triangulo["floridi"]),
        "FLORIDI_APLICACION": triangulo["floridi"]["aplicacion"],
        "FLORIDI_PREGUNTA": triangulo["floridi"]["pregunta_espejo"],

        # Compromiso
        "COMPROMISO_INFOBAND": guia["compromiso"],
    }


def compilar_guia(guia: dict, template_text: str) -> tuple[bool, str, list[str]]:
    """Llena el template, compila (2 pasadas), valida el .log y limpia auxiliares.

    Devuelve (ok, mensaje, avisos): avisos de recursos + `Overfull \\hbox`.
    """
    # AVISOS_RECURSOS es global al proceso: se vacía por guía para que cada
    # resultado lleve solo los suyos.
    AVISOS_RECURSOS.clear()
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
        return False, f"placeholders sin reemplazar: {sample}{'…' if len(set(remaining)) > 5 else ''}", list(AVISOS_RECURSOS)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_tex.write_text(contenido, encoding="utf-8")

    avisos = list(AVISOS_RECURSOS)
    # 2 pasadas, lectura del .log (Overfull box = guía fallida) y limpieza
    # de auxiliares solo si todo salió bien: ver lib_xelatex.compilar.
    ok, msg = compilar(out_tex, avisos)
    return ok, msg, avisos


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
        ok, msg, avisos = compilar_guia(guia, template_text)
        if ok:
            print(f"  ✓  {clave}  OK   {msg}")
            completas.append(clave)
        else:
            print(f"  ✗  {clave}  ERROR   {msg}")
            errores.append(clave)
        for a in avisos:
            print(f"       ⚠  {a}")

    print()
    print(f"Resumen: {len(completas)} compiladas · {len(errores)} errores")
    return 0 if not errores else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
