#!/usr/bin/env python3
"""
Generador de PDFs para las 30 guías de Grado 11° (Plataforma Conéctate).

Lee la tabla GUIAS de abajo y, para cada entrada con `completo=True`,
llena los placeholders del template `template-milc-v3-conectate.tex`
y compila el PDF en `public/guias-mejoras/{sesion-global}-11-TIC.pdf`.

Las entradas con `completo=False` son outlines (esqueletos): salen en
el reporte como pendientes pero no se compilan. Para activarlas, llena
los ~55 campos restantes y cambia el flag a True.

Uso:
    python3 scripts/build-guias-g11.py           # compila todas las completas
    python3 scripts/build-guias-g11.py 1-1       # compila solo G11·P1·S1
    python3 scripts/build-guias-g11.py 1-1 2-3   # compila varias

Convenciones:
    - Clave de guía:  "periodo-sesion"  donde sesion va de 1 a 10 en cada periodo.
    - Archivo PDF:    {sesion-global}-11-TIC.pdf  donde sesion-global va de 1 a 30:
                      P1 → 1..10, P2 → 11..20, P3 → 21..30.
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3-conectate.tex"
OUT_DIR = ROOT / "public/guias-mejoras"
XELATEX = "/Library/TeX/texbin/xelatex"

GRADO = 11

# Paleta institucional de Grado 11 (bento-cyan/blue). Compartida por todas las guías.
COLORES = {
    "COLOR_PORTADA_PRIMARY": "0066FF",
    "COLOR_PORTADA_DARK":    "003D99",
    "COLOR_PORTADA_SOFT":    "D6E8FF",
}

# Metadata por periodo (DBA, referentes, nombre del periodo).
PERIODOS = {
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
}


# ─────────────────────────────────────────────────────────────────────────────
# GUIAS: 30 entradas. 1 completa (piloto) + 29 outlines (pendientes).
# Para activar una outline: añadir los ~55 campos restantes y `completo: True`.
# ─────────────────────────────────────────────────────────────────────────────

GUIAS: dict[str, dict] = {

    # ═══════════════════════════════════════════════════════════════════════
    # PERÍODO 1 · PRESENCIA Y MARCA DIGITAL
    # ═══════════════════════════════════════════════════════════════════════

    "1-1": {
        "completo": True,
        "titulo": "Mi marca digital --- del oficio heredado a la huella propia",
        "titulo_portada": "Mi marca digital ---\\\\del oficio heredado\\\\a la huella propia",
        "producto_final": "Manifiesto de marca personal en una página de cuaderno",

        # ─── Apertura ─────────────────────────────────────────────────────
        "SABER_ANCESTRAL": (
            "En el Valle del Cauca, el Pacífico y el campo colombiano, una persona se conocía por dos "
            "cosas: su \\textbf{oficio} y su \\textbf{palabra}. ``Es el hijo del panadero'', ``los Cárdenas "
            "son maestros'', ``esa familia es seria''. Una marca nunca nació en internet --- nació en la "
            "plaza del pueblo, en la voz que pasa de vecino a vecino. La marca, en el fondo, es \\emph{la "
            "promesa que tu nombre sostiene cuando no estás presente}."
        ),
        "SABER_CONTEMPORANEO": (
            "Hoy esa promesa se construye en redes, perfiles, búsquedas de Google y huella digital. "
            "Un futuro empleador, un jurado de universidad o un cliente potencial te lee \\emph{antes} de "
            "conocerte. Tu marca personal trabaja por ti --- o en tu contra --- 24 horas al día. "
            "Construirla con intención hoy te ahorra borrar errores mañana."
        ),
        "PREGUNTA_PUENTE": (
            "¿Qué prometía el nombre de tu familia en su barrio o vereda hace 50 años? "
            "¿Qué promete hoy en redes el nombre que tú llevas?"
        ),
        "SABER_HACER": (
            "Al terminar esta guía podrás: (1) \\textbf{identificar} qué huella digital tienes hoy; "
            "(2) \\textbf{explicar} tu propuesta de valor en una frase concreta; (3) \\textbf{crear} "
            "tu manifiesto de marca personal con cinco bloques fijos; (4) \\textbf{evaluar} con criterios "
            "el manifiesto de un compañero."
        ),

        # ─── Puentes narrativos ────────────────────────────────────────────
        "PUENTE_TO_RUTA": (
            "Antes de empezar, mira el viaje completo. Cinco estaciones, una promesa: al final de la guía "
            "habrás escrito --- de tu propia mano --- el manifiesto de marca personal que va a ser tu ancla "
            "durante todo el periodo."
        ),
        "PUENTE_TO_ESCUTA": (
            "Una marca no se construye al aire: se levanta sobre lo que ya existe. Antes de proyectar quién "
            "quieres ser, vamos a mirar la huella que ya dejaste en internet. Es el espejo más duro y el más "
            "útil que tienes hoy."
        ),
        "PUENTE_TO_SIST": (
            "Ya viste lo que la red dice de ti hoy. Ahora vamos a entender qué hace fuerte a una marca, para "
            "que la tuya tenga \\textbf{criterio}, no \\textbf{instinto}. Cuatro pilares del pensamiento "
            "computacional aplicados a una sola pregunta: ¿qué prometo, a quién, y por qué?"
        ),
        "PUENTE_TO_PRAX": (
            "Ya tienes tu propuesta de valor en una frase. Bien. Ahora la vas a convertir en un manifiesto "
            "completo --- una página de tu cuaderno que será tu ancla durante todo el periodo 1. Cada guía "
            "siguiente lo desarrolla; hoy lo dejas escrito."
        ),
        "PUENTE_TO_PROD": (
            "Lo que sigue es el resumen de \\emph{qué} entregas hoy y \\emph{cómo se sabe} si quedó bien "
            "hecho. Léelo antes de cerrar el cuaderno: son los criterios con los que el manifiesto se "
            "evalúa --- a ti mismo, primero."
        ),
        "PUENTE_TO_EVAL": (
            "Antes de cerrar, mira tu trabajo desde cinco dimensiones humanas. Evaluar no es la nota: es lo "
            "que se queda en ti cuando esta guía pase. Personal, emocional, ciudadana, local, "
            "intergeneracional --- cinco preguntas pequeñas que cambian con el tiempo."
        ),
        "PUENTE_TO_TRIANG": (
            "Y para terminar, tres voces antiguas que te van a acompañar durante toda la secundaria. Dussel, "
            "un estoico, Floridi. No los memorices --- escúchalos. Cada uno te ofrece un lente distinto para "
            "mirar la marca personal que acabas de escribir."
        ),

        # ─── Fase 1 · Escuta ───────────────────────────────────────────────
        "ESCUTA_ESCENA": (
            "\\textbf{Actividad 1 · ANALIZA --- Audita tu huella digital actual} (20 min · individual). "
            "En tu celular, abre Google en una pestaña de incógnito y busca tu nombre completo entre "
            "comillas. Revisa los primeros 10 resultados de Google y los primeros 5 de Google Imágenes. "
            "Luego revisa las últimas 20 publicaciones de tus 3 redes principales (Instagram, TikTok, "
            "Facebook o las que uses) con ojo de futuro empleador."
        ),
        "ESCUTA_CHECK_1": "Busqué mi nombre completo en Google incógnito y revisé los primeros 10 resultados.",
        "ESCUTA_CHECK_2": "Revisé las últimas 20 publicaciones de mis 3 redes principales con ojo de futuro empleador.",
        "ESCUTA_CHECK_3": "Clasifiqué cada elemento en: suma, neutro o resta a mi marca.",
        "ESCUTA_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 1).} Título: «Actividad 1 --- Auditoría de mi huella "
            "digital». \\textbf{Formato:} tabla de 3 columnas (Suma~|~Neutro~|~Resta), mínimo 3 elementos "
            "por columna, más un párrafo de diagnóstico de 5--8 renglones. \\textbf{Sabes que terminaste "
            "cuando} cada elemento es específico (URL, post, foto, comentario --- no genérico) y el párrafo "
            "responde con honestidad, reconociendo al menos un sesgo de tu propia mirada."
        ),

        # ─── Fase 2 · Sistematización ──────────────────────────────────────
        "SISTEMATIZACION_INTRO": (
            "Una marca personal se compone de cuatro elementos. Vamos a descomponerlos con los pilares del "
            "pensamiento computacional para construir tu \\textbf{propuesta de valor}."
        ),
        "PILAR_1_SIST": (
            "Separamos la marca en sus 4 piezas: identidad (quién soy), audiencia (a quién hablo), promesa "
            "(qué resuelvo) y evidencia (cómo se prueba)."
        ),
        "PILAR_2_SIST": (
            "Toda marca fuerte responde al patrón: ``Ayudo a [X] a [resolver/lograr Y] gracias a [Z]''. "
            "Cambia el patrón y la marca pierde fuerza."
        ),
        "PILAR_3_SIST": (
            "Lo esencial de tu marca cabe en \\emph{una frase}. Si necesitas tres párrafos para explicar "
            "quién eres, todavía no la has abstraído."
        ),
        "PILAR_4_SIST": (
            "Pasos: (1) lista 3 audiencias posibles, (2) lista 3 resultados que sabes producir, "
            "(3) combínalos en 3 frases con el patrón, (4) elige la más auténtica."
        ),
        "ANATOMIA_TITULO": "Anatomía de una propuesta de valor sólida",
        "ANATOMIA_BODY": (
            "\\textbf{Ayudo a} [audiencia concreta, no ``personas''] \\textbf{a} [resolver/lograr resultado "
            "específico, no ``ayudar''] \\textbf{gracias a} [tu fortaleza distintiva, no ``ser creativo'']. "
            "\\\\[2mm] \\textbf{Ejemplo débil:} ``Soy creativo y me gusta el diseño.'' \\\\[1mm] "
            "\\textbf{Ejemplo fuerte:} ``Ayudo a pequeños negocios de Cartago a contar su historia en "
            "video corto.''"
        ),
        "ERRORES_COMUNES": (
            "(1) Frases genéricas tipo ``soy proactivo y trabajador''. (2) Audiencia vaga (``personas''). "
            "(3) Inflar logros que no sostienes con evidencia. (4) Copiar la marca de alguien que admiras."
        ),
        "SIST_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 2 · EXPLICA).} Título: «Actividad 2 --- Mi propuesta "
            "de valor». \\textbf{Formato:} 3 versiones de tu propuesta numeradas (1, 2, 3) siguiendo el "
            "patrón ``Ayudo a [X] a [Y] gracias a [Z]'', cambiando cada vez la audiencia o la fortaleza. "
            "Luego marca con $\\star$ la versión elegida y escribe 2 renglones explicando por qué esa. "
            "\\textbf{Sabes que terminaste cuando} cada frase nombra una audiencia concreta (no "
            "``personas''), un resultado específico (no ``ayudar''), y la elegida la puedes decir en voz "
            "alta sin titubear."
        ),

        # ─── Fase 3 · Praxis ───────────────────────────────────────────────
        "PRAXIS_INTRO": (
            "\\textbf{Actividad 3 · CREA --- Tu Manifiesto de Marca Personal} (30 min · individual). En una "
            "página del cuaderno vas a escribir 5 bloques cortos con títulos fijos. Este manifiesto será tu "
            "ancla durante todo el periodo 1 --- cada guía siguiente lo desarrolla."
        ),
        "PILAR_1_PRAX": (
            "Tu manifiesto se descompone en 5 bloques fijos: Quién soy · A quién sirvo · Qué prometo · "
            "Qué NO soy · Cómo me reconocerán."
        ),
        "PILAR_2_PRAX": (
            "Sigue el patrón de manifiestos fuertes: lenguaje directo, primera persona, frases cortas, "
            "evidencia concreta (no abstracciones)."
        ),
        "PILAR_3_PRAX": (
            "Cada bloque expresa una sola idea. Si un bloque tuyo dice tres cosas distintas, todavía no "
            "abstrajiste lo esencial."
        ),
        "PILAR_4_PRAX": (
            "Algoritmo de escritura: (1) escribe los 5 títulos en blanco; (2) llena ``Quién soy'' primero; "
            "(3) ``Qué NO soy'' al final con 3 cosas concretas; (4) ``Cómo me reconocerán'' con 3 evidencias "
            "observables."
        ),
        "CHECKLIST_TITULO": "Checklist del manifiesto antes de cerrar el cuaderno",
        "CHECKLIST_ITEMS": (
            "\\checkbox Los 5 bloques están presentes y titulados. \\\\[1mm] "
            "\\checkbox ``Qué NO soy'' tiene al menos 3 cosas concretas (no ``no soy malo''). \\\\[1mm] "
            "\\checkbox ``Cómo me reconocerán'' da 3 evidencias observables (manera de escribir, temas que "
            "repites, una marca visual). \\\\[1mm] "
            "\\checkbox Lo puedes leer en voz alta sin avergonzarte ni inflarte. \\\\[1mm] "
            "\\checkbox Tu propuesta de valor (Actividad 2) se refleja de forma coherente."
        ),
        "PLANTILLA_GUION": (
            "\\textbf{Quién soy.} \\textit{En 2--3 renglones, quién eres hoy sin currículum.} \\\\[1mm] "
            "\\textbf{A quién sirvo.} \\textit{La audiencia concreta de tu marca en este momento.} \\\\[1mm] "
            "\\textbf{Qué prometo.} \\textit{El resultado que sabes producir.} \\\\[1mm] "
            "\\textbf{Qué NO soy.} \\textit{3 cosas con las que no quieres que te confundan.} \\\\[1mm] "
            "\\textbf{Cómo me reconocerán.} \\textit{3 evidencias observables --- no abstracciones.}"
        ),
        "PRAX_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 3 · CREA).} Título: «Actividad 3 --- Manifiesto de "
            "marca personal · versión 1». \\textbf{Formato:} 5 bloques titulados (Quién soy · A quién sirvo "
            "· Qué prometo · Qué NO soy · Cómo me reconocerán), 3--5 renglones cada uno. \\textbf{Extensión:} "
            "una página completa de cuaderno. \\textbf{Sabes que terminaste cuando} los 5 bloques están "
            "presentes con sus títulos exactos, ``Qué NO soy'' tiene al menos 3 cosas concretas, "
            "``Cómo me reconocerán'' da 3 evidencias observables, y puedes leerlo en voz alta sin "
            "avergonzarte ni inflarte."
        ),
        "PRODUCTO_TITULO": "Manifiesto de marca personal en una página de cuaderno",
        "CRITERIOS_LISTA": (
            "(1) Los 5 bloques están presentes y titulados con el nombre exacto. "
            "(2) ``Qué NO soy'' tiene al menos 3 cosas concretas. "
            "(3) ``Cómo me reconocerán'' da 3 evidencias observables (no abstracciones). "
            "(4) El manifiesto suena a ti --- ni inflado ni copiado. "
            "(5) Tu propuesta de valor de la Actividad 2 se refleja con coherencia."
        ),

        # ─── Triángulo de pensamiento ──────────────────────────────────────
        "DUSSEL_CITA":        "Sin reconocimiento del Otro no hay justicia, sólo poder.",
        "DUSSEL_APLICACION": (
            "Una marca personal puede ser un acto de reconocimiento o un acto de poder. Si tu marca solo "
            "te promociona a ti, ejerce poder; si abre espacio a otros, encuentra justicia. En el Valle, "
            "las marcas familiares más respetadas eran las que sostuvieron una comunidad."
        ),
        "DUSSEL_PREGUNTA":    "¿A quién sirve mi marca? ¿Reconozco al Otro o solo me promociono?",
        "ESTOICISMO_AUTOR":   "Marco Aurelio",
        "ESTOICISMO_CITA":    "Tu vida es lo que tus pensamientos hagan de ella.",
        "ESTOICISMO_APLICACION": (
            "Lo que publicas, cómo respondes a un mensaje incómodo, cómo manejas un comentario hostil: "
            "todo \\emph{eso} depende de ti. Los algoritmos, los juicios ajenos, el clima de las redes: "
            "\\emph{eso no}. Distinguir las dos columnas es la ataraxia digital."
        ),
        "ESTOICISMO_PREGUNTA": "¿La huella que dejo coincide con quien quiero ser? ¿Distingo lo que depende de mí de lo que no?",
        "FLORIDI_CITA":       "Somos inforgs en una infoesfera que cuidamos o degradamos con cada acto informacional.",
        "FLORIDI_APLICACION": (
            "Cada publicación tuya es un acto informacional: añade valor a la infoesfera o la ensucia. Tu "
            "marca personal, en términos de Floridi, es una responsabilidad sobre el bien común "
            "informacional. No es vanidad: es ética digital aplicada."
        ),
        "FLORIDI_PREGUNTA":   "¿Mi marca enriquece o ensucia la infoesfera? ¿Lo que añado al mundo digital agrega valor a otros?",

        # ─── Compromiso final ──────────────────────────────────────────────
        "COMPROMISO_INFOBAND": (
            "\\textbf{Para la próxima semana.} Antes de cada publicación en cualquier red, pregúntate: ¿esto "
            "suma o resta a la marca que escribí hoy en mi manifiesto? Si no suma, no se publica. Esa "
            "disciplina de una semana vale más que mil consejos. El próximo lunes traes tu manifiesto al "
            "aula y le añades los aprendizajes de la semana."
        ),
    },

    # ───────────────────────────────────────────────────────────────────────
    # OUTLINES (Periodo 1 · Sesiones 2-10)
    # ───────────────────────────────────────────────────────────────────────

    "1-2": {
        "completo": False,
        "titulo": "Identidad visual --- del grafismo ancestral a la paleta propia",
        "producto_final": "Sistema visual mínimo: 1 paleta de color · 1 par tipográfico · 1 lockup de marca",
        "saber_ancestral_idea": "Grafismos Quimbaya, geometría textil Wayuu y mola Guna: identidad visual transmitida por generaciones sin necesidad de palabras. Cada pueblo se reconoce por su lenguaje visual.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    "1-3": {
        "completo": False,
        "titulo": "Sitio web personal --- fundamentos de la casa digital",
        "producto_final": "Wireframe en papel + estructura HTML semántica de la página de inicio",
        "saber_ancestral_idea": "Caminos prehispánicos (red de oro Quimbaya, caminos de los chasquis): cada lugar conecta con otros bajo una estructura intencional. La web es un sistema de caminos.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "CREA", "EVALÚA"],
    },

    "1-4": {
        "completo": False,
        "titulo": "Plantillas web --- elegir y adaptar sin perderse uno mismo",
        "producto_final": "Sitio funcional en GitHub Pages (o Carrd / Notion) adaptado de plantilla",
        "saber_ancestral_idea": "Los oficios heredados se aprenden a partir de moldes: la receta de la abuela, el corte del sastre, el patrón del tejedor. La plantilla es el molde que se adapta a la mano propia.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "APLICA", "EVALÚA"],
    },

    "1-5": {
        "completo": False,
        "titulo": "Copywriting con IA --- escribir con criterio, no a ciegas",
        "producto_final": "Página \"Sobre mí\" del sitio, escrita en colaboración con IA y revisada con criterio",
        "saber_ancestral_idea": "Tradición oral: las historias se transmiten generación tras generación, cada uno añade o quita, pero la voz colectiva sostiene la verdad. La IA es un nuevo ancestro colaborador.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    "1-6": {
        "completo": False,
        "titulo": "SEO básico --- hacerme visible sin engaños",
        "producto_final": "Plan de palabras clave + meta-etiquetas del sitio + sitemap básico",
        "saber_ancestral_idea": "El pregonero en la plaza del pueblo: anunciaba con voz clara y a la hora correcta para que la gente correcta lo oyera. El SEO es el pregón digital, sin gritos ni engaños.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    },

    "1-7": {
        "completo": False,
        "titulo": "Imagen propia --- cómo se ve mi marca en foto y video",
        "producto_final": "3 fotos de perfil profesional + 1 video corto (≤60s) de presentación",
        "saber_ancestral_idea": "El retrato del oficio: el panadero con su pan, el pescador con su atarraya. La imagen muestra lo que la palabra promete --- y en internet la imagen llega antes que la palabra.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    "1-8": {
        "completo": False,
        "titulo": "Perfiles profesionales --- LinkedIn y portafolio coherentes",
        "producto_final": "Perfil de LinkedIn completo + portafolio mínimo (3 piezas) enlazado al sitio",
        "saber_ancestral_idea": "Las \"señas\" de identidad familiar (el apellido, el oficio, la procedencia) abrían o cerraban puertas. Hoy las señas viven en LinkedIn: el handshake digital del nuevo profesional.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    },

    "1-9": {
        "completo": False,
        "titulo": "Métricas básicas --- quién entra a mi sitio y qué busca",
        "producto_final": "Dashboard de 5 indicadores en Google Analytics (o Plausible / Umami) configurado",
        "saber_ancestral_idea": "El conteo de cosecha: el campesino cuenta racimos, semillas, días de lluvia. No para presumir sino para decidir el próximo ciclo. Las métricas son la cosecha de tu marca.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "ANALIZA", "EVALÚA"],
    },

    "1-10": {
        "completo": False,
        "titulo": "Lanzamiento P1 --- mi presencia digital sale al mundo",
        "producto_final": "Sitio público anunciado en 3 redes + primera entrada del cuaderno de marca",
        "saber_ancestral_idea": "La inauguración del taller: el oficio que se abre por primera vez al barrio. Hay nervios, hay errores, hay vecinos curiosos. Lo importante es \\emph{empezar}.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    },

    # ═══════════════════════════════════════════════════════════════════════
    # PERÍODO 2 · AUTOMATIZACIÓN Y PROCESOS
    # ═══════════════════════════════════════════════════════════════════════

    "2-1": {
        "completo": False,
        "titulo": "Mapeo de procesos --- ver dónde se pierde el tiempo",
        "producto_final": "Mapa visual de un proceso real (escuela, casa o negocio cercano) con cuellos de botella marcados",
        "saber_ancestral_idea": "El maestro del oficio \"ve\" el flujo completo del trabajo de un vistazo: dónde se traba la madera, dónde se pierde la harina, dónde se enfría el horno. Esa mirada es el primer paso para automatizar.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    },

    "2-2": {
        "completo": False,
        "titulo": "Diagramas de flujo --- lenguaje BPMN básico",
        "producto_final": "Diagrama BPMN de un proceso del cuaderno anterior, hecho en draw.io o Lucidchart",
        "saber_ancestral_idea": "Las recetas familiares como flujos paso a paso: primero el sofrito, luego el caldo, luego el grano. Cambia el orden y se daña el plato. BPMN es la receta del oficio digital.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    },

    "2-3": {
        "completo": False,
        "titulo": "Formularios digitales --- captura de información sin papel",
        "producto_final": "Formulario funcional (Google Forms o Typeform) con validaciones para un proceso real",
        "saber_ancestral_idea": "La libreta del jornal: la abuela apunta cuántos canastos, cuántos jornaleros, cuánto se pagó. Los formularios digitales son la libreta moderna, pero con cálculo automático.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    "2-4": {
        "completo": False,
        "titulo": "Hojas de cálculo como base de datos",
        "producto_final": "Hoja estructurada con 3 vistas (filtro / ordenamiento / fórmulas) sobre datos reales",
        "saber_ancestral_idea": "El libro contable del mercado campesino: cada fila una venta, cada columna un dato (qué, cuánto, a quién, por cuánto). Excel y Google Sheets son la evolución natural del libro mayor.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    },

    "2-5": {
        "completo": False,
        "titulo": "Automatización con triggers --- Zapier, Make, n8n",
        "producto_final": "Flujo automático que conecta 2 servicios (ej: Form → Sheet → Email) funcionando",
        "saber_ancestral_idea": "La campana de la iglesia: cuando suena, todo el pueblo sabe (misa, almuerzo, fuego). Los triggers digitales son las campanas que activan acciones encadenadas sin tu intervención.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    },

    "2-6": {
        "completo": False,
        "titulo": "IA en mensajería --- clasificar y responder con criterio",
        "producto_final": "Sistema de clasificación de mensajes (urgente / útil / ignorar) con prompt afinado",
        "saber_ancestral_idea": "El intermediario de la plaza: el vecino respetado que filtraba qué noticia se contaba y a quién. La IA en mensajería es ese filtro, pero exige que tú definas las reglas con ética.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "APLICA", "EVALÚA"],
    },

    "2-7": {
        "completo": False,
        "titulo": "Chatbots sin código --- flujos de conversación",
        "producto_final": "Bot conversacional en ManyChat / Landbot con 5 ramas + escape humano",
        "saber_ancestral_idea": "El loro que repetía las palabras del dueño y el muñeco oracular de los abuelos: respondían a preguntas frecuentes con frases ensayadas. El chatbot moderno es el loro escalable.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "CREA", "EVALÚA"],
    },

    "2-8": {
        "completo": False,
        "titulo": "KPIs --- métricas que importan en un proceso",
        "producto_final": "Tabla de 5 KPIs del proceso del periodo + dashboard con su evolución",
        "saber_ancestral_idea": "Cuántos racimos por cosecha, cuántos panes al día, cuántas mantas terminadas. Los KPIs son la cosecha del oficio digital: si no se cuentan, no se mejoran.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    },

    "2-9": {
        "completo": False,
        "titulo": "Mejora continua --- Kaizen aplicado a procesos digitales",
        "producto_final": "Propuesta de 3 mejoras al proceso del periodo, priorizadas con criterio de impacto/esfuerzo",
        "saber_ancestral_idea": "El oficio se afina con repetición y crítica: el artesano nunca termina de aprender, cada pieza es un poco mejor que la anterior. Kaizen es la palabra japonesa para la sabiduría del oficio.",
        "verbos_actividades": ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
    },

    "2-10": {
        "completo": False,
        "titulo": "Caso real --- automatizar un proceso del colegio o la casa",
        "producto_final": "Proceso real automatizado de principio a fin con evidencia (antes/después) documentada",
        "saber_ancestral_idea": "Reparar lo que está roto en mi entorno: la tradición del que arregla, repara, suelda, cose. Hoy reparamos procesos digitales con los mismos valores: paciencia, precisión, devolver algo útil.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    # ═══════════════════════════════════════════════════════════════════════
    # PERÍODO 3 · PROYECTO FINAL EMPRENDEDOR
    # ═══════════════════════════════════════════════════════════════════════

    "3-1": {
        "completo": False,
        "titulo": "Ideación --- un problema real de mi comunidad",
        "producto_final": "Lista de 10 problemas observados en Cartago/Valle + 1 elegido con justificación",
        "saber_ancestral_idea": "Lo que la comunidad pide y nadie escucha: el oficio nace de una necesidad concreta del vecindario, no de una idea genial en abstracto. El emprendimiento empieza por escuchar.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    },

    "3-2": {
        "completo": False,
        "titulo": "Validación --- hablar antes de construir",
        "producto_final": "5 entrevistas a personas afectadas por el problema + síntesis de hallazgos en 1 página",
        "saber_ancestral_idea": "Antes de actuar, hablar con los mayores: la consulta a los abuelos, al cabildo, a quien sabe. La validación empresarial moderna es exactamente esa práctica ancestral con otro nombre.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    },

    "3-3": {
        "completo": False,
        "titulo": "Modelo de negocio --- el lienzo de tu proyecto",
        "producto_final": "Business Model Canvas completo, en una hoja, hecho con base en las entrevistas",
        "saber_ancestral_idea": "El trueque como modelo de valor: yo doy lo que tengo, tú das lo que necesito, ambos ganamos. Todo modelo de negocio moderno es una variante sofisticada del trueque ancestral.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    },

    "3-4": {
        "completo": False,
        "titulo": "MVP digital --- una versión imperfecta para probar",
        "producto_final": "MVP funcional (sitio + formulario + flujo) que pueda probar 1 usuario real",
        "saber_ancestral_idea": "Hacer una versión imperfecta para probar: el alfarero hace una pieza de muestra antes de la serie. El MVP es la pieza de muestra del oficio digital.",
        "verbos_actividades": ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    },

    "3-5": {
        "completo": False,
        "titulo": "Datos del MVP --- recoger evidencia con rigor",
        "producto_final": "Plan de medición + primeros 10 datos reales del MVP organizados",
        "saber_ancestral_idea": "El médico tradicional observa antes de recetar: pregunta, mira, escucha el cuerpo. La medición del MVP es exactamente esa observación rigurosa antes de decidir el cambio.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    },

    "3-6": {
        "completo": False,
        "titulo": "Pitch --- contar la historia de tu proyecto",
        "producto_final": "Pitch deck de 7 slides + ensayo grabado de 3 min",
        "saber_ancestral_idea": "Contar el cuento como los abuelos enseñaron: principio que engancha, conflicto que duele, resolución que inspira. El pitch empresarial es estructura narrativa antigua aplicada al negocio.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    },

    "3-7": {
        "completo": False,
        "titulo": "Presupuesto --- cuánto siembras, cuánto cosechas",
        "producto_final": "Presupuesto de costos del MVP a 3 meses + proyección simple de ingresos",
        "saber_ancestral_idea": "Calcular como en la cosecha: siembra (inversión), espera (tiempo), recoge (ingreso). El campesino mide antes de sembrar; el emprendedor también.",
        "verbos_actividades": ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    },

    "3-8": {
        "completo": False,
        "titulo": "Ética y legal --- la palabra empeñada en lo digital",
        "producto_final": "Política de privacidad + términos de uso del MVP + autoevaluación ética (Floridi)",
        "saber_ancestral_idea": "La palabra empeñada y el código de honor: el oficio se sostiene en confiar, en cumplir lo prometido. La ética digital es la palabra empeñada del nuevo emprendedor.",
        "verbos_actividades": ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    },

    "3-9": {
        "completo": False,
        "titulo": "Versión final del MVP",
        "producto_final": "MVP pulido con las correcciones del pilotaje + bitácora de cambios",
        "saber_ancestral_idea": "Acabar bien lo que se empezó: la cláusula no escrita del oficio. El artesano firma su pieza solo cuando puede defenderla. Tu MVP final es esa firma.",
        "verbos_actividades": ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
    },

    "3-10": {
        "completo": False,
        "titulo": "Sustentación pública --- el aprendiz frente a los mayores",
        "producto_final": "Sustentación de 15 min + sesión de preguntas + manifiesto final que integra todo el grado 11",
        "saber_ancestral_idea": "La graduación del aprendiz frente a los mayores del oficio: el aprendiz expone su pieza maestra y los maestros preguntan, miran, juzgan. La sustentación pública es ese ritual moderno.",
        "verbos_actividades": ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    },
}


# ─────────────────────────────────────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────────────────────────────────────

def sesion_global(periodo: int, sesion: int) -> int:
    """Convierte (periodo, sesion-en-periodo 1..10) a sesion-global 1..30."""
    return (periodo - 1) * 10 + sesion


def parse_clave(clave: str) -> tuple[int, int]:
    """'1-3' → (1, 3)."""
    p, s = clave.split("-")
    return int(p), int(s)


def construir_replacements(clave: str, guia: dict) -> dict[str, str]:
    """Une COLORES + PERIODOS + datos de la guía en un solo dict de placeholders."""
    periodo, sesion = parse_clave(clave)
    global_n = sesion_global(periodo, sesion)
    base = {
        **COLORES,
        **PERIODOS[periodo],
        "GRADO": str(GRADO),
        "GUIA_NUMERO": str(global_n),
        "TITULO_GUIA": guia["titulo"],
        "TITULO_GUIA_PORTADA": guia.get("titulo_portada", guia["titulo"]),
        "PRODUCTO_FINAL": guia["producto_final"],
    }
    # Los demás campos vienen tal cual de la guía (con nombres ya en mayúscula).
    extras = {k: v for k, v in guia.items() if k.isupper()}
    return {**base, **extras}


def compilar_guia(clave: str, guia: dict, template_text: str) -> tuple[bool, str]:
    """Genera .tex + 2 pasadas de xelatex + limpia auxiliares. Devuelve (ok, mensaje)."""
    periodo, sesion = parse_clave(clave)
    global_n = sesion_global(periodo, sesion)
    out_tex = OUT_DIR / f"{global_n}-{GRADO}-TIC.tex"
    out_pdf = out_tex.with_suffix(".pdf")

    replacements = construir_replacements(clave, guia)
    contenido = template_text
    for k, v in replacements.items():
        contenido = contenido.replace(f"<<<{k}>>>", str(v))
    remaining = re.findall(r"<<<[A-Z_0-9]+>>>", contenido)
    if remaining:
        return False, f"placeholders sin reemplazar: {sorted(set(remaining))[:5]}{'…' if len(set(remaining))>5 else ''}"

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

def main(argv: list[str]) -> int:
    if not TEMPLATE.exists():
        print(f"ERROR: no encuentro el template {TEMPLATE}")
        return 1
    template_text = TEMPLATE.read_text(encoding="utf-8")

    # Si pasan claves como argumentos, solo trabajamos en ésas.
    seleccion = argv if argv else sorted(GUIAS.keys(), key=lambda k: tuple(map(int, k.split("-"))))

    completas, pendientes, errores = [], [], []

    for clave in seleccion:
        if clave not in GUIAS:
            print(f"  ?  {clave} — no existe en GUIAS")
            errores.append(clave)
            continue
        guia = GUIAS[clave]
        periodo, sesion = parse_clave(clave)
        global_n = sesion_global(periodo, sesion)
        titulo_corto = guia["titulo"][:55] + ("…" if len(guia["titulo"]) > 55 else "")

        if not guia.get("completo"):
            print(f"  ·  {clave}  (G{global_n:02d})  PENDIENTE   {titulo_corto}")
            pendientes.append(clave)
            continue

        ok, msg = compilar_guia(clave, guia, template_text)
        if ok:
            print(f"  ✓  {clave}  (G{global_n:02d})  OK          {msg}")
            completas.append(clave)
        else:
            print(f"  ✗  {clave}  (G{global_n:02d})  ERROR       {msg}")
            errores.append(clave)

    total = len(seleccion)
    print()
    print(f"Resumen: {len(completas)} compiladas · {len(pendientes)} pendientes · {len(errores)} errores  (de {total})")
    return 0 if not errores else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
