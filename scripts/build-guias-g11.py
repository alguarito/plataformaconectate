#!/usr/bin/env python3
"""
Motor de generación de guías PDF de Grado 11° (Plataforma Conéctate).

Lee los archivos YAML en `content/guias/11/{clave}.yaml` y, para cada uno
con `completo: true`, llena los placeholders de `template-milc-v3.tex` (la
plantilla unica que comparten las tres familias de guias)
y compila el PDF en `public/guias-mejoras/{sesionGlobal}-11-TIC.pdf`.

Cada YAML es la **single source of truth** de una guía. Para editar el
contenido, edita el YAML; nunca edites el .tex o el PDF directamente.
El esquema completo está en `content/guias/_SCHEMA.md`.

Uso:
    python3 scripts/build-guias-g11.py           # compila todas las completas
    python3 scripts/build-guias-g11.py 1-1       # solo G11·P1·S1
    python3 scripts/build-guias-g11.py 1-1 2-3   # varias

Convenciones:
    - Clave de guía:  "periodo-sesion"  (sesion 1-10 dentro del periodo)
    - YAML:           content/guias/11/11-{clave}.yaml
    - PDF generado:   public/guias-mejoras/{sesionGlobal}-11-TIC.pdf
                      donde sesionGlobal va 1..30: P1→1-10, P2→11-20, P3→21-30.
"""
from __future__ import annotations

import concurrent.futures
import re
import subprocess
import sys
from pathlib import Path

# Presentación honesta del triángulo: ver scripts/lib_triangulo.py
sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib_triangulo import atribucion, cita_presentada, nota_docente  # noqa: E402

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3.tex"
OUT_DIR = ROOT / "public/guias-mejoras"
XELATEX = "/Library/TeX/texbin/xelatex"

# El grado activo se elige con la variable de entorno GRADO (default 11).
import os
GRADO = int(os.environ.get("GRADO", "11"))
CONTENT_DIR = ROOT / "content" / "guias" / str(GRADO)

# Paleta institucional por grado (sincronizada con src/data/grados.ts).
COLORES_POR_GRADO = {
    6: {  # bento-blue · grado de entrada al bachillerato
        "COLOR_PORTADA_PRIMARY": "0066FF",
        "COLOR_PORTADA_DARK": "003D99",
        "COLOR_PORTADA_SOFT": "D6E8FF",
    },
    7: {  # bento-lime
        "COLOR_PORTADA_PRIMARY": "84CC16",
        "COLOR_PORTADA_DARK": "4D7C0F",
        "COLOR_PORTADA_SOFT": "ECFCCB",
    },
    8: {  # bento-orange
        "COLOR_PORTADA_PRIMARY": "FF6600",
        "COLOR_PORTADA_DARK": "9A3E00",
        "COLOR_PORTADA_SOFT": "FFE4D0",
    },
    9: {  # bento-purple
        "COLOR_PORTADA_PRIMARY": "7C3AED",
        "COLOR_PORTADA_DARK": "4C1D95",
        "COLOR_PORTADA_SOFT": "EDE9FE",
    },
    10: {  # bento-pink
        "COLOR_PORTADA_PRIMARY": "FF2D87",
        "COLOR_PORTADA_DARK": "9F1B56",
        "COLOR_PORTADA_SOFT": "FFE0EE",
    },
    11: {  # bento-blue
        "COLOR_PORTADA_PRIMARY": "0066FF",
        "COLOR_PORTADA_DARK": "003D99",
        "COLOR_PORTADA_SOFT": "D6E8FF",
    },
}
COLORES = COLORES_POR_GRADO.get(GRADO, COLORES_POR_GRADO[11])

# Metadata por (grado, periodo): nombre del periodo, DBA, referentes.
PERIODOS_POR_GRADO = {
    6: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Comunicación e identidad digital",
            "DBA": "Reconoce principios y conceptos propios de la tecnología, relacionando artefactos con su utilización segura (MEN, T\\&I 6°)",
            "REFERENTES": "Saber ancestral del pregonero · Pensamiento computacional inicial · Cuidado de la palabra",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Hardware y software",
            "DBA": "Identifica componentes y sistemas tecnológicos en su entorno (MEN, T\\&I 6°)",
            "REFERENTES": "Saber ancestral del relojero · Sistemas como cadena de oficios · Diagnóstico paso a paso",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Procesador de texto e Internet",
            "DBA": "Produce contenidos digitales y valida información de fuentes web (MEN, T\\&I 6°)",
            "REFERENTES": "Saber ancestral de la maestra rural · Lectura crítica · Soberanía informacional",
        },
    },
    7: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Trabajo colaborativo en la nube",
            "DBA": "Utiliza herramientas digitales para trabajar de manera colaborativa con otros (MEN, T\\&I 7°)",
            "REFERENTES": "Saber ancestral de la minga · Microsoft 365 y OneDrive · Coautoría asincrónica",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Algoritmia y pensamiento computacional",
            "DBA": "Construye algoritmos y diagramas de flujo para resolver problemas paso a paso (MEN, T\\&I 7°)",
            "REFERENTES": "Saber ancestral del tejedor · Pensamiento computacional · Scratch",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Inteligencia Artificial",
            "DBA": "Reconoce los fundamentos, usos y límites éticos de la Inteligencia Artificial (MEN, T\\&I 7°)",
            "REFERENTES": "Saber ancestral del consejero · Modelos de lenguaje · Ética algorítmica y prompting",
        },
    },
    11: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Presencia y marca digital",
            "DBA": "Comunicación profesional en entornos digitales (MEN, Lineamientos T\\&I)",
            "REFERENTES": "Floridi (infoética) · Dussel (estética de la liberación) · Estoicismo",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Automatización y procesos",
            "DBA": "Diseño y mejora de procesos digitales con criterio ético (MEN, T\\&I)",
            "REFERENTES": "Pensamiento computacional · Lean / Kaizen · Floridi (ética informacional)",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Proyecto final emprendedor",
            "DBA": "Diseño, implementación y sustentación de un proyecto de impacto local (MEN, T\\&I)",
            "REFERENTES": "Dussel (analéctica · sur global) · Lean Startup · Floridi · Estoicismo",
        },
    },
    8: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Análisis de datos con phronesis",
            "DBA": "Tratamiento de datos cuantitativos con criterio ético (MEN, T\\&I)",
            "REFERENTES": "Phronesis aristotélica · Floridi (ética del dato) · Estoicismo (ver lo que es)",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Lógica, algoritmos y computación física",
            "DBA": "Pensamiento computacional aplicado a sistemas de control con sensores y actuadores (MEN, T\\&I)",
            "REFERENTES": "Pensamiento computacional · MakeCode / micro:bit · Logos como razón universal",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Multimedia, narrativa y ciberseguridad",
            "DBA": "Producción multimedia ética y comportamiento responsable en entornos digitales (MEN, T\\&I)",
            "REFERENTES": "Dussel (estética de la liberación) · Ley 1336 · Floridi (infoesfera)",
        },
    },
    10: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Escritura abierta con IA",
            "DBA": "Producción editorial mediada por IA con criterio ético y técnico (MEN, T\\&I)",
            "REFERENTES": "Ley 23 de 1982 · Floridi (ética de la IA generativa) · Dussel (autoría con dignidad)",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Informes técnicos y comunicación profesional con IA",
            "DBA": "Comunicación profesional con asistencia de IA y herramientas ofimáticas gratuitas (MEN, T\\&I)",
            "REFERENTES": "Markdown como estándar abierto · Google Workspace · Estoicismo (claridad)",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Ofimática con IA: contabilidad, datos y emprendimiento",
            "DBA": "Aplicación de ofimática asistida por IA a contabilidad básica y emprendimiento (MEN, T\\&I)",
            "REFERENTES": "Lean Startup · Phronesis financiera · Ética del dato empresarial",
        },
    },
    9: {
        1: {
            "PERIODO_NOMBRE": "Período 1 · Historia de la técnica",
            "DBA": "Análisis crítico de la historia de la tecnología y su impacto social (MEN, T\\&I)",
            "REFERENTES": "Dussel (técnica situada) · Estoicismo (téchne del cuerpo) · Floridi (infoesfera)",
        },
        2: {
            "PERIODO_NOMBRE": "Período 2 · Diseño editorial digital",
            "DBA": "Producción de piezas editoriales digitales con criterio estético y ético (MEN, T\\&I)",
            "REFERENTES": "Tipografía colombiana · Diseño centrado en accesibilidad · Floridi",
        },
        3: {
            "PERIODO_NOMBRE": "Período 3 · Datos --- del registro al insight",
            "DBA": "Tratamiento y visualización honesta de datos para la toma de decisiones (MEN, T\\&I)",
            "REFERENTES": "Ética del dato · Visualización honesta · Pensamiento computacional",
        },
    },
}
PERIODOS = PERIODOS_POR_GRADO.get(GRADO, PERIODOS_POR_GRADO[11])


# ─────────────────────────────────────────────────────────────────────────────
# Carga de YAML
# ─────────────────────────────────────────────────────────────────────────────

def cargar_guias() -> dict[str, dict]:
    """Lee todos los YAMLs en content/guias/11/ y devuelve dict {clave: data}."""
    guias = {}
    for path in sorted(CONTENT_DIR.glob(f"{GRADO}-*.yaml")):
        with path.open(encoding="utf-8") as f:
            data = yaml.safe_load(f)
        clave = data["clave"]
        guias[clave] = data
    return guias


def cargar_guia(clave: str) -> dict | None:
    """Lee una sola guía por clave (ej. '1-2')."""
    path = CONTENT_DIR / f"{GRADO}-{clave}.yaml"
    if not path.exists():
        return None
    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


# ─────────────────────────────────────────────────────────────────────────────
# Recursos visuales (bloque `recursos:` del YAML)
# ─────────────────────────────────────────────────────────────────────────────
#
# Los assets viven en public/guias-mejoras/assets/{sesionGlobal}-{grado}/ y el
# .tex se escribe en public/guias-mejoras/, así que la ruta relativa desde el
# .tex es assets/{sesionGlobal}-{grado}/{archivo}.
#
# Por extensión se decide cómo incrustarlos:
#   · .png/.jpg/.jpeg/.pdf → \guiaFigura   (imagen: foto, carta celeste, captura
#                            de MakeCode, montaje)
#   · .tex/.tikz           → \guiaDiagrama (fuente TikZ incrustada como vector y
#                            editable: esfera celeste, altura/azimut, diagramas
#                            de flujo. Para esquemáticos de circuito hay que
#                            habilitar circuitikz en el template.)
#   · .svg                 → no soportado por xelatex; se omite con aviso
#                            (la versión web sí puede usarlo)
#
# Un asset declarado pero ausente en disco NO rompe el build: se omite y se
# avisa (usa `python3 scripts/guias-assets.py` para auditar los rotos).

# El circulito de grado (°) que acompaña al número grande de la portada.
CIRCULO_GRADO = (
    # Se ancla al nodo `gradonum` de la portada (el numero grande), no a
    # coordenadas absolutas de pagina: asi el circulito sigue al numero si
    # la portada se re-maqueta.
    "\\draw[milcGradeText,line width=1.6pt]\n"
    "    ([xshift=2.0mm,yshift=-4.5mm]gradonum.north east) circle (.15cm);"
)

EXT_IMAGEN = {".png", ".jpg", ".jpeg", ".pdf"}
EXT_DIAGRAMA_TEX = {".tex", ".tikz"}

# Secciones del template que aceptan recursos (placeholder <<<RECURSOS_X>>>).
SECCIONES_RECURSOS = ("apertura", "escuta", "sistematizacion", "praxis")

# Avisos acumulados durante el build (se imprimen al final de cada guía).
AVISOS_RECURSOS: list[str] = []


def recursos_a_tex(guia: dict, sesion_global: int, grado: int) -> dict[str, str]:
    """Agrupa los assets declarados por `donde` y emite el LaTeX de cada sección.

    Devuelve siempre las 4 claves RECURSOS_* (vacías si no hay assets), para que
    ninguna guía deje placeholders sin reemplazar.
    """
    recursos = guia.get("recursos") or {}
    imagenes = recursos.get("imagenes") or []
    diagramas = recursos.get("diagramas") or []

    ruta_rel = f"assets/{sesion_global}-{grado}"
    assets_dir = OUT_DIR / "assets" / f"{sesion_global}-{grado}"

    por_seccion: dict[str, list[str]] = {s: [] for s in SECCIONES_RECURSOS}

    for asset in [*imagenes, *diagramas]:
        archivo = (asset.get("archivo") or "").strip()
        if not archivo:
            AVISOS_RECURSOS.append("asset sin campo 'archivo': omitido")
            continue

        donde = (asset.get("donde") or "apertura").strip().lower()
        if donde not in por_seccion:
            AVISOS_RECURSOS.append(
                f"{archivo}: 'donde: {donde}' no es una sección válida "
                f"({', '.join(SECCIONES_RECURSOS)}): omitido"
            )
            continue

        if not (assets_dir / archivo).exists():
            AVISOS_RECURSOS.append(f"{archivo}: declarado pero ausente en {ruta_rel}/: omitido")
            continue

        pie = (asset.get("caption") or asset.get("alt") or "").strip()
        ext = Path(archivo).suffix.lower()
        destino = f"{ruta_rel}/{archivo}"

        if ext in EXT_DIAGRAMA_TEX:
            por_seccion[donde].append(f"\\guiaDiagrama{{{destino}}}{{{pie}}}")
        elif ext in EXT_IMAGEN:
            por_seccion[donde].append(f"\\guiaFigura{{{destino}}}{{{pie}}}")
        else:
            AVISOS_RECURSOS.append(
                f"{archivo}: extensión '{ext}' no soportada en PDF "
                f"(usa .png/.jpg/.pdf o .tex/.tikz): omitido"
            )

    return {
        f"RECURSOS_{seccion.upper()}": "\n".join(bloques)
        for seccion, bloques in por_seccion.items()
    }


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

# ─────────────────────────────────────────────────────────────────────────────
# Rótulos de la plantilla
# ─────────────────────────────────────────────────────────────────────────────
#
# La plantilla trae los rótulos parametrizados para que Territorio Interior
# ---que llama a sus fases por el nombre MILC--- pueda usar la MISMA plantilla
# que las demás familias, en vez de una copia propia que se quedó atrás en el
# rediseño. Estos son los valores de siempre; quien necesite otros los pasa.

ROTULOS_POR_DEFECTO = {
    "FRANJA_PORTADA": "Metodología MILC · apertura ancestral · pensamiento computacional · triángulo Dussel–estoicismo–Floridi",
    "FASE2_CARD": "Entender",
    "FASE2_SUBTITULO": "Sistematizo y ordeno.",
    "FASE3_CARD": "Hacer",
    "FASE3_SUBTITULO": "Construyo y aplico.",
    "FASE4_CARD": "Cierre",
    "FASE4_SUBTITULO": "Evalúo y reflexiono.",
    "FASE2_TITULO": "Estación 2 de 3 · Entender",
    "FASE3_TITULO": "Estación 3 de 3 · Hacer",
    "SIST_PILARES_TITULO": "Lo que vas a entender",
    "PRAX_PILARES_TITULO": "Cómo vas a construir tu producto",
    "RUBRICA2_CRITERIO": "Pensamiento computacional",
    "RUBRICA2_LOGRADO": "Usé los pilares al armar mi producto.",
    "RUBRICA2_PROCESO": "Usé algunos pilares.",
    "RUBRICA2_APOYO": "Necesito releer la estación 2.",
}


def saber_ancestral_tex(apertura: dict) -> str:
    """Saber ancestral más, si el YAML la declara, su referencia (APA 7).

    Contrato v3.1: `apertura.fuente` es la referencia completa de la práctica
    documentada. Se imprime en cuerpo pequeño bajo el texto, dentro del mismo
    bloque, para que el lector vea de dónde sale lo que acaba de leer."""
    texto = apertura["saber_ancestral"]
    fuente = (apertura.get("fuente") or "").strip()
    if not fuente:
        return texto
    return (
        f"{texto}\\par\\smallskip{{\\footnotesize\\textcolor{{milcNegro!70}}"
        f"{{\\textbf{{Fuente.}} {fuente}}}}}"
    )


def yaml_a_placeholders(guia: dict) -> dict[str, str]:
    """Aplana el dict YAML a las claves uppercase que espera el template."""
    periodo = guia["periodo"]
    sesion = guia["sesion"]
    sesion_global = (periodo - 1) * 10 + sesion

    # Título de portada: YAML usa saltos de línea reales; LaTeX necesita "\\".
    titulo_portada_raw = guia.get("titulo_portada", guia["titulo"])
    # Salto con espacio explicito: dentro de un nodo TikZ con text width,
    # un «\\\\» pelado deja que TeX decida la separacion segun los
    # descendentes de cada renglon, y una linea sin descendentes («la
    # receta») se come casi la mitad del interlineado y la siguiente se le
    # monta encima. El [4pt] garantiza un minimo.
    titulo_portada_tex = titulo_portada_raw.replace("\n", "\\\\[4pt]")

    apertura = guia["apertura"]
    puentes = guia["puentes"]
    escuta = guia["escuta"]
    sist = guia["sistematizacion"]
    prax = guia["praxis"]
    triangulo = guia["triangulo"]

    # Criterios: lista → '(1) ... (2) ...' como el template espera.
    criterios_str = " ".join(
        f"({i}) {c}{'' if c.endswith('.') else '.'}"
        for i, c in enumerate(prax["criterios"], start=1)
    )

    return {
        **COLORES,
        **PERIODOS[periodo],
        # Identidad de esta familia en el template unificado.
        "HEADER_IZQ": f"Tecnología e Informática · Grado {GRADO}",
        "HEADER_DER": f"Guía {sesion_global} · MILC v3",
        "PORTADA_ETIQUETA": "GRADO",
        "PORTADA_SERIE": "SERIE GUÍAS · TECNOLOGÍA E INFORMÁTICA",
        "PORTADA_ID": f"Guía {sesion_global}-{GRADO}-TIC",
        # Las guías de grado sí llevan el circulito: «11°».
        "PORTADA_CIRCULO": CIRCULO_GRADO,
        # Recursos visuales declarados en `recursos:` (vacíos si no hay).
        **recursos_a_tex(guia, sesion_global, GRADO),
        "GRADO": str(GRADO),
        "GUIA_NUMERO": str(sesion_global),
        "TITULO_GUIA": guia["titulo"],
        "TITULO_GUIA_PORTADA": titulo_portada_tex,
        "PRODUCTO_FINAL": guia["producto_final"],

        # Apertura (la fuente APA, si existe, va como pie del bloque)
        "SABER_ANCESTRAL": saber_ancestral_tex(apertura),
        "SABER_CONTEMPORANEO": apertura["saber_contemporaneo"],
        "PREGUNTA_PUENTE": apertura["pregunta_puente"],
        "SABER_HACER": apertura["saber_hacer"],

        # Puentes
        "PUENTE_TO_RUTA": puentes["a_ruta"],
        "PUENTE_TO_ESCUTA": puentes["a_escuta"],
        "PUENTE_TO_SIST": puentes["a_sistematizacion"],
        "PUENTE_TO_PRAX": puentes["a_praxis"],
        "PUENTE_TO_PROD": puentes["a_producto"],
        "PUENTE_TO_EVAL": puentes["a_evaluacion"],
        "PUENTE_TO_TRIANG": puentes["a_triangulo"],

        # Escucha
        "ESCUTA_ESCENA": escuta["escena"],
        "ESCUTA_CHECK_1": escuta["checks"][0],
        "ESCUTA_CHECK_2": escuta["checks"][1],
        "ESCUTA_CHECK_3": escuta["checks"][2],
        "ESCUTA_INFOBAND": escuta["cuaderno"],

        # Sistematización
        "SISTEMATIZACION_INTRO": sist["intro"],
        "SIST_PILARES": pilares_a_pasocards(sist["pilares"], "milcTurquesa"),
        "ANATOMIA_TITULO": sist["anatomia"]["titulo"],
        "ANATOMIA_BODY": sist["anatomia"]["body"],
        "ERRORES_COMUNES": sist["errores_comunes"],
        "SIST_INFOBAND": sist["cuaderno"],

        # Praxis
        "PRAXIS_INTRO": prax["intro"],
        "PRAXIS_PASOS": pilares_a_pasocards(prax["pilares"], "milcMagenta"),
        "CHECKLIST_TITULO": prax["checklist"]["titulo"],
        "CHECKLIST_ITEMS": prax["checklist"]["items"],
        "PLANTILLA_GUION": prax["plantilla_guion"],
        "PRAX_INFOBAND": prax["cuaderno"],
        "PRODUCTO_TITULO": prax["producto_titulo"],
        "CRITERIOS_LISTA": criterios_str,

        # Triángulo
                "TRIANGULO_NOTA": nota_docente(triangulo),
**ROTULOS_POR_DEFECTO,
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


# ─────────────────────────────────────────────────────────────────────────────
# Compilación
# ─────────────────────────────────────────────────────────────────────────────

def compilar_guia(guia: dict, template_text: str) -> tuple[bool, str]:
    """Genera .tex + 2 pasadas de xelatex + limpia auxiliares."""
    periodo = guia["periodo"]
    sesion = guia["sesion"]
    sesion_global = (periodo - 1) * 10 + sesion
    out_tex = OUT_DIR / f"{sesion_global}-{GRADO}-TIC.tex"
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

    # 2 pasadas de xelatex (indispensables para el TikZ overlay de la portada).
    for i in (1, 2):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-halt-on-error", out_tex.name],
            cwd=out_tex.parent,
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            return False, f"xelatex pasada {i} falló (revisa {out_tex.with_suffix('.log').name})"

    # Limpiar auxiliares.
    for ext in (".aux", ".log", ".out"):
        aux = out_tex.with_suffix(ext)
        if aux.exists():
            aux.unlink()

    return True, f"{out_pdf.name} ({out_pdf.stat().st_size:,} bytes)"


# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

def _compilar_una(args: tuple) -> tuple:
    """Envoltorio para el pool: recibe y devuelve solo datos serializables."""
    clave, guia, template_text = args
    try:
        ok, msg = compilar_guia(guia, template_text)
    except Exception as exc:                      # noqa: BLE001
        ok, msg = False, f"excepción: {exc}"
    return clave, ok, msg


def _jobs() -> int:
    """Procesos en paralelo. `JOBS=1` fuerza el modo serie de siempre."""
    if os.environ.get("JOBS"):
        return max(1, int(os.environ["JOBS"]))
    return max(1, min(8, (os.cpu_count() or 2) - 1))


def main(argv: list[str]) -> int:
    if not TEMPLATE.exists():
        print(f"ERROR: no encuentro el template {TEMPLATE}")
        return 1
    if not CONTENT_DIR.exists():
        print(f"ERROR: no encuentro contenido en {CONTENT_DIR}")
        return 1

    template_text = TEMPLATE.read_text(encoding="utf-8")
    guias = cargar_guias()

    if not guias:
        print(f"ERROR: no encontré YAMLs en {CONTENT_DIR}")
        return 1

    # Si se pasan claves como argumentos, solo trabajamos en ésas.
    if argv:
        seleccion = argv
    else:
        seleccion = sorted(guias.keys(), key=lambda k: tuple(map(int, k.split("-"))))

    completas, pendientes, errores = [], [], []
    porCompilar, lineas = [], {}

    for clave in seleccion:
        if clave not in guias:
            lineas[clave] = f"  ?  {clave} — no existe en {CONTENT_DIR}"
            errores.append(clave)
            continue
        guia = guias[clave]
        periodo, sesion = guia["periodo"], guia["sesion"]
        global_n = (periodo - 1) * 10 + sesion
        titulo_corto = guia["titulo"][:55] + ("…" if len(guia["titulo"]) > 55 else "")

        if not guia.get("completo"):
            lineas[clave] = f"  ·  {clave}  (G{global_n:02d})  PENDIENTE   {titulo_corto}"
            pendientes.append(clave)
            continue

        porCompilar.append((clave, guia, template_text))

    # Cada guía es independiente —su propio .tex, .pdf y auxiliares—, así que
    # se pueden compilar a la vez. En serie el catálogo tarda ~7 s por
    # documento; con el pool, el reloj lo marca el núcleo más lento.
    jobs = _jobs()
    resultados = {}
    if porCompilar:
        if jobs == 1:
            for tarea in porCompilar:
                clave, ok, msg = _compilar_una(tarea)
                resultados[clave] = (ok, msg)
        else:
            with concurrent.futures.ProcessPoolExecutor(max_workers=jobs) as pool:
                for clave, ok, msg in pool.map(_compilar_una, porCompilar):
                    resultados[clave] = (ok, msg)

    for clave, guia, _ in porCompilar:
        ok, msg = resultados[clave]
        global_n = (guia["periodo"] - 1) * 10 + guia["sesion"]
        if ok:
            lineas[clave] = f"  ✓  {clave}  (G{global_n:02d})  OK          {msg}"
            completas.append(clave)
        else:
            lineas[clave] = f"  ✗  {clave}  (G{global_n:02d})  ERROR       {msg}"
            errores.append(clave)

    for clave in seleccion:
        if clave in lineas:
            print(lineas[clave])

    total = len(seleccion)
    print()
    print(f"Resumen: {len(completas)} compiladas · {len(pendientes)} pendientes · {len(errores)} errores  (de {total})")
    return 0 if not errores else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
