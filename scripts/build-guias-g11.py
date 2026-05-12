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
        "completo": True,
        "titulo": "Identidad visual --- del grafismo ancestral a la paleta propia",
        "titulo_portada": "Identidad visual ---\\\\del grafismo ancestral\\\\a la paleta propia",
        "producto_final": "Sistema visual mínimo: 1 paleta (3-5 colores) · 1 par tipográfico · 1 lockup",

        "SABER_ANCESTRAL": (
            "Mucho antes de los ``manuales de marca'', los pueblos ya tenían identidad visual. La "
            "\\textbf{orfebrería Quimbaya}, los \\textbf{tejidos Wayuu}, las \\textbf{molas guna} "
            "y los grafismos del Pacífico colombiano transmitían, en una sola pieza, quién era el "
            "pueblo que la había hecho. Sin firma, sin texto. Solo geometría, color y proporción. "
            "Esa gramática visual sostenía el reconocimiento entre generaciones."
        ),
        "SABER_CONTEMPORANEO": (
            "Las marcas modernas usan exactamente el mismo principio en formato digital: una "
            "\\textbf{paleta} de 3 a 5 colores (no más), un \\textbf{par tipográfico} (una fuente "
            "para titulares y una para cuerpo) y un \\textbf{lockup} (cómo se firma el nombre y "
            "el logo). Esa pieza mínima identifica tu marca antes de que el espectador lea una "
            "palabra."
        ),
        "PREGUNTA_PUENTE": (
            "¿Qué señales visuales hacen que reconozcas inmediatamente a una familia, a un equipo "
            "del barrio o a tu colegio sin leer su nombre? ¿Por qué esas señales funcionan?"
        ),
        "SABER_HACER": (
            "Al terminar podrás: (1) \\textbf{identificar} gramáticas visuales en tu entorno "
            "cercano (ancestrales, populares, comerciales); (2) \\textbf{analizar} el sistema "
            "visual de tres marcas que admiras; (3) \\textbf{crear} tu propio sistema visual "
            "mínimo coherente con tu manifiesto; (4) \\textbf{evaluar} el sistema de un compañero "
            "con criterios de coherencia y diferenciación."
        ),

        "PUENTE_TO_RUTA": (
            "Antes de empezar, mira el viaje completo. Hoy le pondrás \\emph{cara} a la marca que "
            "definiste la semana pasada --- la promesa que escribiste necesita una piel visual "
            "que la sostenga."
        ),
        "PUENTE_TO_ESCUTA": (
            "Toda identidad visual nace de \\emph{ver primero}. Antes de diseñar la tuya, vas a "
            "entrenar el ojo: cómo se reconocen pueblos, oficios y barrios sin necesidad de "
            "palabras. Sin ese entrenamiento, cualquier paleta que elijas será aleatoria."
        ),
        "PUENTE_TO_SIST": (
            "Ya viste cómo otros transmiten identidad sin palabras. Ahora vamos a entender los "
            "\\textbf{tres componentes} que toda marca digital usa para hacerlo: paleta, "
            "tipografía y lockup. Tres piezas, una decisión coherente."
        ),
        "PUENTE_TO_PRAX": (
            "Tienes el vocabulario y los referentes. Toca decidir: ¿qué paleta, qué tipografía y "
            "qué lockup hablan por la marca que escribiste la semana pasada? Esto es lo que vas a "
            "entregar hoy."
        ),
        "PUENTE_TO_PROD": (
            "Lo que sigue es el resumen de \\emph{qué} entregas y \\emph{cómo se sabe} si tu "
            "sistema visual es coherente. El primer criterio: que un extraño pueda mirarlo y "
            "sentir tu marca sin que tú la expliques."
        ),
        "PUENTE_TO_EVAL": (
            "Antes de cerrar, mira tu sistema visual desde las cinco dimensiones humanas. Las "
            "decisiones estéticas tienen consecuencias personales, ciudadanas, locales --- aunque "
            "a primera vista no lo parezca."
        ),
        "PUENTE_TO_TRIANG": (
            "Y para terminar, tres voces sobre la imagen. Dussel sobre la belleza descolonizada, "
            "Marco Aurelio sobre la belleza propia, Floridi sobre la responsabilidad visual en la "
            "infoesfera. Cada uno te ofrece un lente distinto para mirar el sistema que acabas de "
            "crear."
        ),

        "ESCUTA_ESCENA": (
            "\\textbf{Actividad 1 · IDENTIFICA --- Gramáticas visuales en tu entorno} (15 min · "
            "individual). Sin moverte de donde estás, observa con atención \\textbf{tres ejemplos} "
            "de identidad visual cercana: (1) un objeto de tradición ancestral o popular (tejido, "
            "cerámica, ropa de fiesta), (2) un negocio del barrio (panadería, peluquería, taller), "
            "(3) una marca global presente en tu cotidianidad (zapatillas, app, café). Para cada "
            "uno: ¿qué colores usa? ¿qué formas? ¿qué transmite sin palabras?"
        ),
        "ESCUTA_CHECK_1": "Encontré un ejemplo de identidad visual ancestral o popular en mi entorno.",
        "ESCUTA_CHECK_2": "Encontré un ejemplo de identidad visual de un negocio local que reconozco.",
        "ESCUTA_CHECK_3": "Encontré un ejemplo de identidad visual global presente en mi cotidianidad.",
        "ESCUTA_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 1 · IDENTIFICA).} Título: «Actividad 1 --- "
            "Gramáticas visuales en mi entorno». \\textbf{Formato:} tabla de 4 columnas (Ejemplo "
            "| Colores principales | Formas y patrones | Qué transmite). \\textbf{Extensión:} 3 "
            "filas, una por ejemplo. \\textbf{Sabes que terminaste cuando} cada fila menciona "
            "colores específicos (no ``varios''), formas concretas (no ``diseños bonitos'') y un "
            "mensaje que el sistema visual transmite sin texto."
        ),

        "SISTEMATIZACION_INTRO": (
            "Todo sistema visual moderno se compone de tres piezas mínimas. Vamos a descomponerlas "
            "con los pilares del pensamiento computacional para que puedas diseñar el tuyo con "
            "criterio."
        ),
        "PILAR_1_SIST": (
            "Una identidad visual se descompone en: (1) \\textbf{paleta} (3-5 colores con función "
            "clara), (2) \\textbf{tipografía} (1 fuente display para titulares + 1 fuente cuerpo "
            "para texto), (3) \\textbf{lockup} (la firma del nombre con su tratamiento visual)."
        ),
        "PILAR_2_SIST": (
            "Toda identidad fuerte sigue patrones de contraste y proporción: un color dominante "
            "(\\textasciitilde 60\\%), uno de soporte (\\textasciitilde 30\\%), uno de acento "
            "(\\textasciitilde 10\\%); un tipo display contrastado contra el cuerpo; espacio en "
            "blanco generoso. Cambia las proporciones y se rompe."
        ),
        "PILAR_3_SIST": (
            "Lo esencial de un sistema visual cabe en \\emph{una pieza}: si tu lockup, en blanco y "
            "negro y del tamaño de una uña, todavía dice quién eres, has abstraído bien."
        ),
        "PILAR_4_SIST": (
            "Pasos: (1) elige una emoción principal de tu marca (calidez, rigor, frescura, etc.); "
            "(2) escoge la paleta que la transmita; (3) escoge el par tipográfico; "
            "(4) construye el lockup que firma todo."
        ),
        "ANATOMIA_TITULO": "Anatomía de un sistema visual mínimo",
        "ANATOMIA_BODY": (
            "\\textbf{Paleta:} 3-5 colores con jerarquía (uno dominante, uno secundario, 1-3 "
            "acentos). Evita colores neón puros para texto. \\\\[1mm] "
            "\\textbf{Tipografía:} 1 display + 1 cuerpo. Si tu display es fuerte, tu cuerpo debe "
            "ser neutro --- nunca dos display al mismo tiempo. \\\\[1mm] "
            "\\textbf{Lockup:} la firma de tu nombre con tratamiento fijo (color, fuente, "
            "espacios). Debe funcionar a 16 píxeles y a 2 metros de pared."
        ),
        "ERRORES_COMUNES": (
            "(1) Más de 5 colores: la identidad se diluye. "
            "(2) Dos fuentes display compitiendo: se siente caótico. "
            "(3) Color neón saturado en texto: ilegible. "
            "(4) Copiar la paleta exacta de una marca global: tu marca pierde identidad."
        ),
        "SIST_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 2 · ANALIZA).} Título: «Actividad 2 --- "
            "Tres sistemas visuales que admiro». \\textbf{Formato:} 3 fichas, una por marca, con 4 "
            "datos cada una: Nombre · Paleta (3-5 códigos HEX) · Par tipográfico · Qué transmite "
            "(1 frase). \\textbf{Sabes que terminaste cuando} las 3 marcas son distintas entre sí "
            "(no las 3 deportivas), y la frase ``qué transmite'' es específica (no ``se ve cool'')."
        ),

        "PRAXIS_INTRO": (
            "\\textbf{Actividad 3 · CREA --- Tu sistema visual mínimo} (30 min · individual). "
            "Tienes el vocabulario y los referentes. Hora de tomar decisiones para tu marca. "
            "Recuerda: tu manifiesto (Guía 1) prometió algo --- tu sistema visual debe sostener "
            "esa promesa."
        ),
        "PILAR_1_PRAX": (
            "Tu sistema se descompone en 3 piezas: paleta + tipografía + lockup. Cada una "
            "contesta una pregunta: ¿qué emoción transmite? ¿qué jerarquía organiza el texto? "
            "¿cómo firma todo?"
        ),
        "PILAR_2_PRAX": (
            "Sigue el patrón 60-30-10 en color: un dominante, un secundario, un acento. Sigue el "
            "patrón display + cuerpo en tipografía. Sigue el patrón ``nombre + tratamiento'' en "
            "lockup."
        ),
        "PILAR_3_PRAX": (
            "Cada decisión expresa una sola idea. Si no puedes decir en una frase corta por qué "
            "elegiste ese color, ese tipo o ese lockup, vuelve atrás."
        ),
        "PILAR_4_PRAX": (
            "Algoritmo: (1) elige la emoción principal; (2) prueba 3 paletas en coolors.co; "
            "(3) prueba 3 pares tipográficos en fonts.google.com; (4) dibuja a mano 3 versiones "
            "de tu lockup. Elige la combinación más coherente."
        ),
        "CHECKLIST_TITULO": "Checklist del sistema visual antes de cerrar el cuaderno",
        "CHECKLIST_ITEMS": (
            "\\checkbox Paleta de 3 a 5 colores con códigos HEX anotados. \\\\[1mm] "
            "\\checkbox Par tipográfico nombrado (ej.: Bricolage Grotesque + Inter). \\\\[1mm] "
            "\\checkbox Lockup dibujado a mano o en herramienta digital. \\\\[1mm] "
            "\\checkbox Justificación de 1 línea por cada decisión (color, tipo, lockup). \\\\[1mm] "
            "\\checkbox Tu manifiesto de la Guía 1 se refleja coherente en este sistema."
        ),
        "PLANTILLA_GUION": (
            "\\textbf{Mi paleta.} \\textit{HEX codes + para qué sirve cada color "
            "(dominante/secundario/acento).} \\\\[1mm] "
            "\\textbf{Mi par tipográfico.} \\textit{Display + cuerpo, nombres y dónde se "
            "encuentran.} \\\\[1mm] "
            "\\textbf{Mi lockup.} \\textit{Cómo firma tu marca: dibujo, tratamiento, tamaños.} \\\\[1mm] "
            "\\textbf{Por qué estas decisiones.} \\textit{1 frase por elemento.}"
        ),
        "PRAX_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 3 · CREA).} Título: «Actividad 3 --- Mi "
            "sistema visual · versión 1». \\textbf{Formato:} una página con 4 secciones (Paleta · "
            "Tipografía · Lockup · Justificación), cada una con datos concretos y una frase de "
            "decisión. \\textbf{Extensión:} una página de cuaderno. \\textbf{Sabes que terminaste "
            "cuando} los 4 elementos están presentes, cada decisión tiene su frase de "
            "justificación, y tu lockup se puede dibujar a mano sin guías."
        ),
        "PRODUCTO_TITULO": "Sistema visual mínimo en una página: paleta + par tipográfico + lockup",
        "CRITERIOS_LISTA": (
            "(1) La paleta tiene 3-5 colores con jerarquía clara. "
            "(2) El par tipográfico es uno display + uno cuerpo, no dos display. "
            "(3) El lockup tiene tratamiento fijo y funciona a tamaño chico. "
            "(4) Cada decisión tiene una frase de justificación que la conecta con tu manifiesto. "
            "(5) Un extraño puede mirar el sistema y sentir tu marca sin que tú la expliques."
        ),

        "DUSSEL_CITA": "La belleza estética nace donde una voz silenciada encuentra forma.",
        "DUSSEL_APLICACION": (
            "Tu sistema visual puede repetir las paletas de moda global (azules tech, naranjas "
            "startup) o puede atreverse a recuperar colores y formas de tu lugar --- los amarillos "
            "del Valle, los rojos del Pacífico, los grafismos del oficio. La descolonización "
            "estética empieza por mirar antes de copiar."
        ),
        "DUSSEL_PREGUNTA": (
            "¿Mi sistema visual incluye señales de mi lugar y mi gente, o copia el estándar "
            "global? ¿A qué voz le doy forma cuando elijo estos colores?"
        ),
        "ESTOICISMO_AUTOR": "Marco Aurelio",
        "ESTOICISMO_CITA": "Toda cosa tiene su belleza propia, pero no todos la ven.",
        "ESTOICISMO_APLICACION": (
            "La tentación más fuerte en diseño visual es seguir tendencias. Pero las tendencias "
            "pasan; la belleza propia de tu marca se descubre cuando dejas de mirar lo que está "
            "de moda y miras lo que de verdad transmite tu promesa. Eso depende de ti."
        ),
        "ESTOICISMO_PREGUNTA": (
            "¿Estoy eligiendo lo que de verdad expresa mi marca o estoy persiguiendo una estética "
            "que vi en otra parte? ¿Cuál es mi belleza propia?"
        ),
        "FLORIDI_CITA": "Cada acto de diseño es un acto informacional: añade o resta a la infoesfera visual común.",
        "FLORIDI_APLICACION": (
            "Tu sistema visual va a aparecer en feeds, presentaciones, perfiles. Va a competir "
            "por atención en una infoesfera ya saturada. La pregunta no es ``¿llama la atención?'' "
            "sino ``¿añade algo útil o agrega ruido visual?''. El diseño tiene ética informacional."
        ),
        "FLORIDI_PREGUNTA": (
            "¿Mi sistema visual aporta claridad a quien lo mira o le suma ruido a un mundo ya "
            "saturado? ¿Qué responsabilidad tengo sobre la atención de quienes lo verán?"
        ),

        "COMPROMISO_INFOBAND": (
            "\\textbf{Para la próxima semana.} Aplica tu paleta a 3 productos cotidianos: la "
            "portada de tu próximo trabajo, tu foto de perfil con un filtro de color coherente, "
            "y la firma de tu correo institucional. Ese ensayo te mostrará si tu sistema "
            "funciona o necesita ajustes. El próximo lunes traes esos 3 productos al aula."
        ),
    },

    "1-3": {
        "completo": True,
        "titulo": "Sitio web personal --- fundamentos de la casa digital",
        "titulo_portada": "Sitio web personal ---\\\\fundamentos de\\\\la casa digital",
        "producto_final": "Wireframe a mano + archivo index.html con estructura HTML semántica",

        "SABER_ANCESTRAL": (
            "Los \\textbf{caminos prehispánicos} (la red del oro Quimbaya en el Valle, los caminos "
            "incas, los senderos de los chasquis) no eran trazos al azar: cada uno tenía un "
            "propósito y conectaba un lugar específico con otro. El que caminaba sabía adónde iba "
            "porque la ruta estaba pensada. Esa misma intención organiza un buen sitio web."
        ),
        "SABER_CONTEMPORANEO": (
            "Una página web bien construida usa \\textbf{HTML semántico}: \\texttt{header}, "
            "\\texttt{nav}, \\texttt{main}, \\texttt{article}, \\texttt{aside}, \\texttt{footer}. "
            "Cada etiqueta no solo dibuja: \\emph{le dice al navegador} qué función cumple ese "
            "bloque. Sin semántica, los lectores de pantalla, los buscadores y las personas se "
            "pierden."
        ),
        "PREGUNTA_PUENTE": (
            "¿Qué hacía que los caminos antiguos llevaran a la gente al lugar correcto sin GPS? "
            "¿Qué señales usaban y por qué funcionaban?"
        ),
        "SABER_HACER": (
            "Al terminar podrás: (1) \\textbf{identificar} la estructura semántica de sitios "
            "reales; (2) \\textbf{explicar} qué función cumple cada etiqueta semántica; "
            "(3) \\textbf{crear} el wireframe y el HTML de tu página personal; (4) \\textbf{evaluar} "
            "la estructura del sitio de un compañero."
        ),

        "PUENTE_TO_RUTA": (
            "Antes de empezar, mira el viaje completo. Hoy le construyes \\emph{la casa} a tu "
            "marca --- una página web con estructura semántica clara, lista para crecer en las "
            "guías siguientes."
        ),
        "PUENTE_TO_ESCUTA": (
            "Antes de construir tu propia casa digital, vas a aprender a leer las que ya existen. "
            "Detrás de cada sitio bien hecho hay una estructura semántica --- visible solo si "
            "sabes mirar."
        ),
        "PUENTE_TO_SIST": (
            "Ya viste cómo se organizan los sitios reales. Ahora vamos a aprender el "
            "\\textbf{vocabulario exacto} que usa HTML para esa organización. Cinco o seis "
            "etiquetas semánticas resuelven el 90\\% de los casos."
        ),
        "PUENTE_TO_PRAX": (
            "Tienes el vocabulario y los referentes. Toca decidir: ¿qué secciones tendrá tu sitio "
            "y cómo se distribuirán? Vas a dibujar primero a mano (wireframe), después convertir "
            "a HTML."
        ),
        "PUENTE_TO_PROD": (
            "Lo que sigue resume \\emph{qué} entregas hoy: un wireframe a mano y un archivo HTML. "
            "El criterio principal: que un extraño pueda leer tu HTML sin estilos y entender la "
            "página."
        ),
        "PUENTE_TO_EVAL": (
            "Antes de cerrar, mira tu sitio desde las cinco dimensiones humanas. Una página web "
            "también incluye o excluye personas; piensa en quién \\emph{no} podría leerla y por "
            "qué."
        ),
        "PUENTE_TO_TRIANG": (
            "Y para terminar, tres voces sobre las casas digitales. Dussel sobre quién entra y "
            "quién no, Séneca sobre el orden como disciplina, Floridi sobre la web como espacio "
            "común."
        ),

        "ESCUTA_ESCENA": (
            "\\textbf{Actividad 1 · IDENTIFICA --- Lee la estructura semántica de 3 sitios} "
            "(15 min · individual). Visita 3 sitios distintos: un periódico, una página de "
            "universidad, un sitio de empresa. En cada uno: ¿qué hay en el header (logo, menú)? "
            "¿qué en el main (contenido principal)? ¿qué en el footer (créditos, contacto)? "
            "Toma capturas y márcalas a lápiz si puedes."
        ),
        "ESCUTA_CHECK_1": "Visité un sitio de noticias y reconocí header, main y footer.",
        "ESCUTA_CHECK_2": "Visité un sitio de universidad y reconocí su nav principal.",
        "ESCUTA_CHECK_3": "Visité un sitio de empresa y reconocí su jerarquía visual.",
        "ESCUTA_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 1 · IDENTIFICA).} Título: «Actividad 1 --- "
            "Estructura semántica de 3 sitios». \\textbf{Formato:} tabla de 4 columnas (Sitio | "
            "Header | Main | Footer), con qué contiene cada zona en una frase corta. "
            "\\textbf{Extensión:} 3 filas, una por sitio. \\textbf{Sabes que terminaste cuando} "
            "cada celda nombra elementos concretos (no ``varias cosas'') y reconoces el patrón "
            "común a los 3."
        ),

        "SISTEMATIZACION_INTRO": (
            "HTML semántico organiza una página en bloques con significado. Vamos a descomponerlo "
            "con los pilares del pensamiento computacional para que sepas qué etiqueta usar en "
            "cada lugar."
        ),
        "PILAR_1_SIST": (
            "Una página se descompone en bloques semánticos: \\texttt{header} (cabecera con logo "
            "y navegación), \\texttt{nav} (menú), \\texttt{main} (contenido único de la página), "
            "\\texttt{section} (secciones temáticas), \\texttt{article} (contenido autónomo), "
            "\\texttt{aside} (información complementaria), \\texttt{footer} (pie)."
        ),
        "PILAR_2_SIST": (
            "Todo sitio sigue un patrón: header arriba, footer abajo, main en el centro con "
            "secciones. Si el patrón se rompe sin razón, el usuario se pierde. La buena variación "
            "es excepción, no regla."
        ),
        "PILAR_3_SIST": (
            "Lo esencial de una página cabe en su esqueleto semántico: si tu HTML sin estilos "
            "todavía se lee como un documento ordenado (h1, h2, párrafos, listas), tu abstracción "
            "está bien."
        ),
        "PILAR_4_SIST": (
            "Pasos: (1) dibuja a mano la jerarquía (header/nav/main/footer); (2) decide qué "
            "\\texttt{section}s irán dentro del main; (3) traduce a HTML semántico; (4) prueba "
            "el resultado SIN CSS --- si se entiende, hiciste bien."
        ),
        "ANATOMIA_TITULO": "Anatomía de una página HTML semántica",
        "ANATOMIA_BODY": (
            "\\texttt{header}: logo + nav (cabecera del sitio). \\\\[1mm] "
            "\\texttt{nav}: menú principal (puede ir dentro de header). \\\\[1mm] "
            "\\texttt{main}: contenido único de esta página. \\\\[1mm] "
            "\\texttt{section}: agrupaciones temáticas dentro de main. \\\\[1mm] "
            "\\texttt{article}: contenido autónomo (post, ficha, item). \\\\[1mm] "
            "\\texttt{aside}: complemento lateral o relacionado. \\\\[1mm] "
            "\\texttt{footer}: créditos, contacto, navegación secundaria."
        ),
        "ERRORES_COMUNES": (
            "(1) Usar \\texttt{div} para todo: pierdes semántica. "
            "(2) Múltiples \\texttt{h1} por página: confunde a lectores de pantalla. "
            "(3) \\texttt{main} repetido: solo debe haber UNO por página. "
            "(4) Confundir \\texttt{section} con \\texttt{article}: section agrupa, article es "
            "autónomo."
        ),
        "SIST_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 2 · EXPLICA).} Título: «Actividad 2 --- "
            "Vocabulario semántico HTML». \\textbf{Formato:} 7 fichas, una por etiqueta "
            "(header / nav / main / section / article / aside / footer), cada ficha con nombre + "
            "para qué sirve (1 frase con tus palabras) + un ejemplo concreto de tu propio sitio. "
            "\\textbf{Sabes que terminaste cuando} puedes explicar cada etiqueta sin mirar notas y "
            "dar un ejemplo específico de cómo la usarás."
        ),

        "PRAXIS_INTRO": (
            "\\textbf{Actividad 3 · CREA --- Wireframe + HTML semántico de tu home} (35 min · "
            "individual). Hora de construir. Primero dibujas a mano (wireframe), después "
            "conviertes a HTML real. El resultado es tu \\texttt{index.html} con la estructura "
            "semántica de la página de inicio de tu sitio personal."
        ),
        "PILAR_1_PRAX": (
            "Tu home se descompone en 4 zonas: header (nombre + nav), main (presentación + 2-3 "
            "secciones), aside opcional, footer (contacto + redes)."
        ),
        "PILAR_2_PRAX": (
            "Sigue el patrón: header arriba con tu nombre y un nav corto (3-5 enlaces), main con "
            "un h1 claro y secciones bien delimitadas, footer al final con email y redes "
            "profesionales."
        ),
        "PILAR_3_PRAX": (
            "Cada sección expresa una sola idea. Si tu \\texttt{section} contiene 3 temas "
            "distintos, pártela. Si una sección es muy corta, fusiónala."
        ),
        "PILAR_4_PRAX": (
            "Algoritmo: (1) dibuja a mano la estructura en una hoja; (2) abre un archivo "
            "\\texttt{index.html} en VS Code; (3) escribe el esqueleto semántico vacío; (4) llena "
            "cada bloque con texto real (sin CSS, todavía); (5) abre el HTML en Chrome y revisa."
        ),
        "CHECKLIST_TITULO": "Checklist del HTML antes de cerrar el cuaderno",
        "CHECKLIST_ITEMS": (
            "\\checkbox Wireframe a mano con header / main / footer claramente delimitados. \\\\[1mm] "
            "\\checkbox Archivo \\texttt{index.html} con doctype, html, head y body completos. \\\\[1mm] "
            "\\checkbox Un solo \\texttt{h1} por página. \\\\[1mm] "
            "\\checkbox Etiquetas semánticas en lugar de \\texttt{div} cuando aplica. \\\\[1mm] "
            "\\checkbox Sin CSS, la página todavía se lee como un documento ordenado en Chrome."
        ),
        "PLANTILLA_GUION": (
            "\\textbf{Header.} \\textit{Tu nombre o lockup + nav corto.} \\\\[1mm] "
            "\\textbf{Main / Hero.} \\textit{h1 con tu propuesta de valor + breve presentación.} \\\\[1mm] "
            "\\textbf{Main / Sobre mí.} \\textit{section con 1 párrafo personal.} \\\\[1mm] "
            "\\textbf{Main / Proyectos o servicios.} \\textit{section con 2-3 articles.} \\\\[1mm] "
            "\\textbf{Footer.} \\textit{Email, redes profesionales, derechos.}"
        ),
        "PRAX_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 3 · CREA).} Título: «Actividad 3 --- Mi "
            "home semántico v1». \\textbf{Formato:} (1) wireframe a mano en la página izquierda, "
            "(2) transcripción del HTML real en la página derecha. \\textbf{Extensión:} dos "
            "páginas enfrentadas. \\textbf{Sabes que terminaste cuando} tu HTML carga en Chrome "
            "sin errores, tiene un solo h1, y sin CSS la página se entiende como documento "
            "estructurado."
        ),
        "PRODUCTO_TITULO": "Wireframe a mano + archivo index.html con estructura HTML semántica",
        "CRITERIOS_LISTA": (
            "(1) El wireframe muestra las 3 zonas (header / main / footer) claramente. "
            "(2) El HTML usa al menos 5 etiquetas semánticas distintas. "
            "(3) Existe un único \\texttt{h1}. "
            "(4) Sin CSS, el navegador todavía muestra una jerarquía clara. "
            "(5) El HTML pasa el validador W3C sin errores estructurales."
        ),

        "DUSSEL_CITA": "La analéctica supera a la dialéctica al partir del Otro como Otro.",
        "DUSSEL_APLICACION": (
            "Tu sitio web es una puerta. Cada decisión de diseño define a quién deja entrar y a "
            "quién deja afuera. La accesibilidad (etiquetas semánticas, contraste, texto "
            "alternativo) no es un ``extra técnico'': es la diferencia entre invitar al Otro o "
            "ignorarlo."
        ),
        "DUSSEL_PREGUNTA": (
            "¿Quién no puede leer mi sitio? ¿Una persona con lector de pantalla, con conexión "
            "lenta, que no maneja bien el español, lo logra navegar?"
        ),
        "ESTOICISMO_AUTOR": "Séneca",
        "ESTOICISMO_CITA": "Nada se construye bien sin orden; sin él, la abundancia es ruina.",
        "ESTOICISMO_APLICACION": (
            "Un sitio web mal estructurado se siente ``hecho a la carrera''. Ordenar el HTML es "
            "un acto de disciplina --- pocas decisiones, en el orden correcto --- y depende solo "
            "de ti. Nadie te ordena el código; tú decides."
        ),
        "ESTOICISMO_PREGUNTA": (
            "¿Mi sitio refleja una estructura ordenada y deliberada, o se siente improvisado? "
            "¿Qué dice eso de mi disciplina?"
        ),
        "FLORIDI_CITA": "La web es un patrimonio informacional común; cada sitio bien construido lo enriquece, cada sitio mal hecho lo erosiona.",
        "FLORIDI_APLICACION": (
            "Cuando publicas tu sitio, te sumas a la infoesfera pública. Tu HTML será leído por "
            "buscadores, lectores de pantalla, archivos del futuro. Construirlo con cuidado es "
            "ética informacional aplicada --- el equivalente moderno a sembrar bien."
        ),
        "FLORIDI_PREGUNTA": (
            "¿Mi sitio enriquece o ensucia el patrimonio digital común? ¿Estoy publicando algo "
            "de lo que el internet del futuro se beneficiará?"
        ),

        "COMPROMISO_INFOBAND": (
            "\\textbf{Para la próxima semana.} Comparte tu \\texttt{index.html} con un compañero "
            "por correo. Pídele que lo abra en Chrome y te diga, en 1 frase, qué entendió. Si esa "
            "frase coincide con lo que querías comunicar, tu estructura semántica funciona. El "
            "próximo lunes traes ese feedback al aula."
        ),
    },

    "1-4": {
        "completo": True,
        "titulo": "Plantillas web --- elegir y adaptar sin perderse uno mismo",
        "titulo_portada": "Plantillas web ---\\\\elegir y adaptar\\\\sin perderse uno mismo",
        "producto_final": "Sitio publicado en GitHub Pages (o equivalente) con plantilla adaptada",

        "SABER_ANCESTRAL": (
            "Los oficios heredados se aprenden con \\textbf{moldes}: la receta de la abuela, el "
            "corte del sastre, el patrón del tejedor, las décimas del Pacífico. El maestro no "
            "enseña con palabras: enseña con un molde que el aprendiz debe usar primero igual, y "
            "después adaptar a su mano. Lo que cambia es la firma; lo que se conserva es la "
            "estructura."
        ),
        "SABER_CONTEMPORANEO": (
            "En la web moderna existen \\textbf{plantillas} en GitHub Pages, Carrd, Notion sites, "
            "Webflow, Astro starters. Son moldes profesionales que aceleran tu trabajo --- "
            "siempre y cuando los adaptes con criterio en lugar de dejarlos genéricos."
        ),
        "PREGUNTA_PUENTE": (
            "¿Qué se mantiene y qué cambia cuando tú haces la receta de tu abuela? ¿Qué la sigue "
            "convirtiendo en \\emph{esa} receta y no en una copia genérica?"
        ),
        "SABER_HACER": (
            "Al terminar podrás: (1) \\textbf{analizar} 3 plantillas similares e identificar qué "
            "tienen en común; (2) \\textbf{explicar} qué se conserva y qué cambia al adaptar un "
            "molde; (3) \\textbf{aplicar} una plantilla a tu identidad de marca y publicarla; "
            "(4) \\textbf{evaluar} si tu sitio adaptado sigue siendo ``tuyo''."
        ),

        "PUENTE_TO_RUTA": (
            "Antes de empezar, mira el viaje completo. Hoy publicas tu sitio en internet --- por "
            "primera vez ya no será un archivo en tu computador, será una URL que cualquiera "
            "puede abrir."
        ),
        "PUENTE_TO_ESCUTA": (
            "Antes de elegir tu plantilla, vas a aprender a mirar otras. Compararlas te enseña la "
            "gramática común de las plantillas modernas --- y revela qué espacio hay para hacerla "
            "tuya."
        ),
        "PUENTE_TO_SIST": (
            "Ya viste tres plantillas. Ahora vamos a entender el \\textbf{principio} detrás de "
            "adaptar un molde sin perderse: qué se queda fijo, qué se cambia, y qué decisión "
            "convierte una plantilla genérica en \\emph{tu} sitio."
        ),
        "PUENTE_TO_PRAX": (
            "Tienes el criterio. Hora de ejecutar: eliges una plantilla, la adaptas a tu identidad "
            "(usando tu paleta y tipografía de la guía anterior) y la publicas en GitHub Pages."
        ),
        "PUENTE_TO_PROD": (
            "Lo que sigue es el resumen de \\emph{qué} entregas hoy: una URL pública con tu sitio "
            "adaptado. Es el primer ``hola mundo'' real de tu marca en internet."
        ),
        "PUENTE_TO_EVAL": (
            "Antes de cerrar, mira tu sitio publicado desde las cinco dimensiones humanas. "
            "Publicar tiene costo emocional y ciudadano --- estás haciendo pública tu identidad."
        ),
        "PUENTE_TO_TRIANG": (
            "Y para terminar, tres voces sobre los moldes y la identidad. Dussel sobre copiar vs "
            "encontrar, Epicteto sobre lo que depende de ti, Floridi sobre estándares y "
            "diversidad."
        ),

        "ESCUTA_ESCENA": (
            "\\textbf{Actividad 1 · ANALIZA --- Tres plantillas, qué tienen en común} (15 min · "
            "individual). Visita 3 sitios construidos sobre plantillas (puedes mirar catálogos de "
            "GitHub Pages templates, Carrd showcase, o Astro themes). Para cada uno: ¿qué partes "
            "son intercambiables (logo, paleta, tipografía, fotos)? ¿qué partes son estructura "
            "fija (orden de secciones, jerarquía)?"
        ),
        "ESCUTA_CHECK_1": "Revisé 3 plantillas distintas en uno de los catálogos sugeridos.",
        "ESCUTA_CHECK_2": "Distinguí qué partes son intercambiables y cuáles son fijas.",
        "ESCUTA_CHECK_3": "Tomé nota del nombre y URL de la plantilla que más se acerca a mi marca.",
        "ESCUTA_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 1 · ANALIZA).} Título: «Actividad 1 --- "
            "Tres plantillas comparadas». \\textbf{Formato:} tabla de 4 columnas (Plantilla | "
            "URL | Partes intercambiables | Partes fijas), 3 filas. Al final un párrafo de 3-4 "
            "renglones eligiendo una plantilla y justificando por qué. \\textbf{Sabes que "
            "terminaste cuando} tu elección es coherente con tu paleta y tipografía de la Guía 2."
        ),

        "SISTEMATIZACION_INTRO": (
            "Adaptar una plantilla es un acto de criterio, no de pereza. Vamos a descomponer ese "
            "criterio en cuatro decisiones que diferencian un sitio único de uno genérico."
        ),
        "PILAR_1_SIST": (
            "Una adaptación se descompone en 4 decisiones: (1) qué \\textbf{conservar} de la "
            "plantilla (estructura, layout), (2) qué \\textbf{cambiar} (colores, fuentes, fotos, "
            "copy), (3) qué \\textbf{agregar} (tu marca, tu voz), (4) qué \\textbf{eliminar} "
            "(secciones que no te sirven)."
        ),
        "PILAR_2_SIST": (
            "Toda buena adaptación sigue el patrón 70-20-10: \\textasciitilde 70\\% queda como "
            "vino la plantilla (estructura), \\textasciitilde 20\\% se personaliza (colores, "
            "fuentes, copy), \\textasciitilde 10\\% se agrega o quita (lo único de tu marca). "
            "Cambia el patrón y el resultado se siente o copiado o frankenstein."
        ),
        "PILAR_3_SIST": (
            "Lo esencial de tu adaptación cabe en una pregunta: \\emph{¿en qué se nota que este "
            "sitio es tuyo y no de otro que use la misma plantilla?}. Si no tienes 3 respuestas, "
            "todavía no lo has hecho tuyo."
        ),
        "PILAR_4_SIST": (
            "Pasos: (1) haz fork de la plantilla en tu GitHub; (2) clónala y ábrela en VS Code; "
            "(3) cambia colores y fuentes por los de tu sistema visual; (4) reemplaza fotos y "
            "copy genéricos por los tuyos; (5) publica con GitHub Pages."
        ),
        "ANATOMIA_TITULO": "Anatomía de una buena adaptación",
        "ANATOMIA_BODY": (
            "\\textbf{Conservar:} estructura semántica de la plantilla. No reinventes la rueda. \\\\[1mm] "
            "\\textbf{Cambiar:} paleta y tipografía a las tuyas (de la Guía 2). Copy a tu voz. \\\\[1mm] "
            "\\textbf{Agregar:} un detalle único de tu marca (un símbolo, un microcopy especial, "
            "una sección propia). \\\\[1mm] "
            "\\textbf{Eliminar:} cualquier sección genérica que la plantilla traiga y que tú no "
            "necesites. \\emph{Menos es más.}"
        ),
        "ERRORES_COMUNES": (
            "(1) Dejar copy genérico (``Welcome to my site!''): muerte instantánea. "
            "(2) Cambiar TODO y romper la coherencia visual de la plantilla. "
            "(3) Conservar fotos placeholder o nombres de prueba (``John Doe''). "
            "(4) No probar el sitio en móvil: la mayoría de tus visitantes te leerán ahí."
        ),
        "SIST_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 2 · EXPLICA).} Título: «Actividad 2 --- "
            "Plan de adaptación de mi plantilla». \\textbf{Formato:} 4 columnas (Conservar | "
            "Cambiar | Agregar | Eliminar), cada una con 3-5 elementos específicos de tu "
            "plantilla elegida. \\textbf{Sabes que terminaste cuando} las 4 columnas tienen "
            "contenido concreto (no ``el color'' sino ``el azul \\#0066FF del navbar por mi naranja "
            "\\#FF6B35'')."
        ),

        "PRAXIS_INTRO": (
            "\\textbf{Actividad 3 · APLICA --- Publicar tu sitio adaptado} (40 min · individual). "
            "Hora de ejecutar. Vas a clonar la plantilla, adaptarla con tu paleta y tu copy, y "
            "publicarla en GitHub Pages. Al final tendrás una URL pública que cualquiera puede "
            "abrir desde el mundo."
        ),
        "PILAR_1_PRAX": (
            "Tu publicación se descompone en pasos: fork del repo → cambiar archivos clave "
            "(paleta, copy) → commit → push → activar GitHub Pages → verificar URL pública."
        ),
        "PILAR_2_PRAX": (
            "Sigue el patrón de despliegue: rama main, configurar Pages desde Settings → Pages, "
            "espera 1-2 min, abre la URL en pestaña incógnita."
        ),
        "PILAR_3_PRAX": (
            "Cada commit expresa una sola idea: ``colores a mi paleta'', ``copy del header'', "
            "``foto personal''. Si haces commits gigantes, no podrás revertir cambios específicos."
        ),
        "PILAR_4_PRAX": (
            "Algoritmo: (1) fork de la plantilla a tu GitHub; (2) clone local; (3) abrir en VS "
            "Code; (4) cambiar paleta (CSS variables o archivo de tema); (5) reemplazar copy y "
            "fotos; (6) commit y push; (7) Settings → Pages → main branch → save; (8) esperar URL; "
            "(9) verificar en móvil y desktop."
        ),
        "CHECKLIST_TITULO": "Checklist antes de declarar el sitio publicado",
        "CHECKLIST_ITEMS": (
            "\\checkbox La URL pública carga sin errores 404. \\\\[1mm] "
            "\\checkbox Cero ``Lorem ipsum'' o copy de placeholder. \\\\[1mm] "
            "\\checkbox Los colores son los de tu paleta (Actividad 3, Guía 2). \\\\[1mm] "
            "\\checkbox La tipografía es tu par (Actividad 3, Guía 2). \\\\[1mm] "
            "\\checkbox Se ve bien en móvil (revisa con DevTools a 360 px). \\\\[1mm] "
            "\\checkbox Tu nombre y propuesta de valor aparecen en el hero."
        ),
        "PLANTILLA_GUION": (
            "\\textbf{Plantilla elegida.} \\textit{Nombre + URL.} \\\\[1mm] "
            "\\textbf{Mi sitio.} \\textit{La URL pública en GitHub Pages.} \\\\[1mm] "
            "\\textbf{Cambios aplicados.} \\textit{4 columnas como en Actividad 2.} \\\\[1mm] "
            "\\textbf{Captura.} \\textit{Pega o dibuja una captura de tu home en el cuaderno.}"
        ),
        "PRAX_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 3 · APLICA).} Título: «Actividad 3 --- Mi "
            "sitio publicado». \\textbf{Formato:} (1) URL pública en grande arriba, (2) tabla de "
            "cambios aplicados, (3) captura impresa o dibujada del home. \\textbf{Sabes que "
            "terminaste cuando} la URL carga en móvil de un compañero, sin lorem ipsum, con tu "
            "paleta y tu tipografía."
        ),
        "PRODUCTO_TITULO": "Sitio personal publicado en GitHub Pages con plantilla adaptada",
        "CRITERIOS_LISTA": (
            "(1) La URL pública es accesible para cualquiera con internet. "
            "(2) Cero contenido placeholder (texto, imágenes, nombres de prueba). "
            "(3) La paleta y la tipografía coinciden con tu sistema visual (Guía 2). "
            "(4) En móvil se lee y navega sin problemas. "
            "(5) Hay al menos UN detalle único (símbolo, sección propia, microcopy) que no "
            "estaba en la plantilla original."
        ),

        "DUSSEL_CITA": "El sur global piensa desde su propia herida y desde ahí ofrece mundo.",
        "DUSSEL_APLICACION": (
            "Las plantillas son productos del norte tecnológico (Silicon Valley, Europa). Usarlas "
            "tal cual te invisibiliza; adaptarlas con tu identidad local --- tus colores del "
            "Valle, tu copy en español de Colombia, tus historias reales --- es un acto pequeño "
            "de soberanía digital."
        ),
        "DUSSEL_PREGUNTA": (
            "¿Mi sitio publicado se siente como un sitio del Valle o como un clon de plantilla "
            "global? ¿Qué señales locales le agregué?"
        ),
        "ESTOICISMO_AUTOR": "Epicteto",
        "ESTOICISMO_CITA": "Algunas cosas dependen de nosotros y otras no --- distinguir esto es la libertad.",
        "ESTOICISMO_APLICACION": (
            "Que la plantilla traiga ciertas decisiones de diseño \\emph{no depende de ti}. Pero "
            "qué conservas, qué cambias, qué agregas y qué eliminas: eso sí depende. Adaptar bien "
            "es ejercer la libertad estoica sobre la propia identidad digital."
        ),
        "ESTOICISMO_PREGUNTA": (
            "¿Estoy ejerciendo mi libertad sobre la plantilla, o me dejé llevar por todo lo que "
            "venía? ¿Qué partes son auténticamente mías?"
        ),
        "FLORIDI_CITA": "La estandarización facilita la cooperación; la diversidad sostiene la riqueza informacional.",
        "FLORIDI_APLICACION": (
            "Usar plantillas es bueno: estandariza la web, hace que más gente publique. Pero si "
            "todos los sitios se ven iguales, la infoesfera se empobrece. Adaptar es contribuir a "
            "la diversidad sin abandonar el beneficio de la estandarización."
        ),
        "FLORIDI_PREGUNTA": (
            "¿Mi adaptación aporta diversidad a la infoesfera o solo replica un patrón estándar? "
            "¿Qué de mi sitio enriquece el panorama digital común?"
        ),

        "COMPROMISO_INFOBAND": (
            "\\textbf{Para la próxima semana.} Comparte tu URL pública con 3 personas: un "
            "familiar, un compañero, un docente. Pídeles a cada uno una observación. No "
            "discutas las observaciones: anótalas. La próxima guía empezamos con esas tres "
            "voces externas."
        ),
    },

    "1-5": {
        "completo": True,
        "titulo": "Copywriting con IA --- escribir con criterio, no a ciegas",
        "titulo_portada": "Copywriting con IA ---\\\\escribir con criterio,\\\\no a ciegas",
        "producto_final": "Página ``Sobre mí'' del sitio, coescrita con IA y revisada con criterio personal",

        "SABER_ANCESTRAL": (
            "La \\textbf{tradición oral} de los pueblos del Pacífico, los Andes y el Valle no era "
            "una transmisión pasiva: cada generación tomaba la historia de la anterior, la "
            "adaptaba a su contexto y se la pasaba a la siguiente. Lo que llegaba a tus abuelos "
            "no era exactamente lo que sus abuelos contaron --- pero conservaba la esencia. La "
            "autoría era \\emph{compartida} entre generaciones, con la voz viva del que cuenta hoy."
        ),
        "SABER_CONTEMPORANEO": (
            "Hoy tienes un nuevo ``ancestro colaborador'': la IA generativa (ChatGPT, Claude, "
            "Gemini). Te puede ayudar a escribir más rápido y mejor estructurado. Pero como "
            "cualquier coautor, necesita que tú aportes lo único que ella no tiene: "
            "\\textbf{quién eres y por qué importa}. Sin esa voz tuya encima, la IA escribe "
            "textos pasables que no son de nadie."
        ),
        "PREGUNTA_PUENTE": (
            "¿Cómo se hereda la voz de una generación a otra sin que se diluya su identidad? "
            "¿Y cómo escribes con una herramienta que puede sonar a cualquiera?"
        ),
        "SABER_HACER": (
            "Al terminar podrás: (1) \\textbf{identificar} patrones únicos de tu voz al escribir; "
            "(2) \\textbf{analizar} cómo cambia un texto cuando lo escribe la IA en lugar de ti; "
            "(3) \\textbf{crear} la página ``Sobre mí'' del sitio en colaboración con IA y "
            "revisión tuya; (4) \\textbf{evaluar} si el resultado final suena a ti."
        ),

        "PUENTE_TO_RUTA": (
            "Antes de empezar, mira el viaje completo. Hoy le pones \\emph{voz} a tu sitio --- "
            "escribirás la página ``Sobre mí'' en colaboración con IA, sin perder lo que solo tú "
            "puedes decir."
        ),
        "PUENTE_TO_ESCUTA": (
            "Antes de pedirle a la IA que escriba contigo, tienes que conocer tu propia voz. "
            "¿Qué palabras repites? ¿Qué giros usas? Solo así notarás cuándo la IA escribe como "
            "tú y cuándo escribe como nadie."
        ),
        "PUENTE_TO_SIST": (
            "Ya identificaste tu voz. Ahora vamos a ver \\textbf{qué pasa cuando un texto pasa "
            "por la IA} --- qué se conserva, qué se gana, qué se pierde. Es el experimento clave "
            "para decidir cómo vas a colaborar con ella."
        ),
        "PUENTE_TO_PRAX": (
            "Tienes el diagnóstico. Toca escribir el texto real: la página ``Sobre mí'' del "
            "sitio, en una conversación con la IA donde TÚ diriges y ella ejecuta."
        ),
        "PUENTE_TO_PROD": (
            "Lo que sigue resume \\emph{qué} entregas: una página ``Sobre mí'' lista para pegar "
            "en el sitio. El criterio principal: que alguien que te conoce pueda leerla y "
            "reconocer tu voz."
        ),
        "PUENTE_TO_EVAL": (
            "Antes de cerrar, mira el proceso desde las cinco dimensiones humanas. Coescribir "
            "con IA es un acto profundamente personal, ciudadano y ético --- aunque parezca "
            "solo técnico."
        ),
        "PUENTE_TO_TRIANG": (
            "Y para terminar, tres voces sobre la autoría con IA. Dussel sobre la voz "
            "colonizada, Marco Aurelio sobre la coherencia interna, Floridi sobre la IA como "
            "otro inforg en la infoesfera."
        ),

        "ESCUTA_ESCENA": (
            "\\textbf{Actividad 1 · IDENTIFICA --- Tu voz al escribir} (15 min · individual). "
            "Mira los últimos 20 mensajes de WhatsApp que escribiste (no copies-pegues los que "
            "te enviaron). Identifica: ¿qué palabras o frases repites? ¿usas comas o frases "
            "cortas? ¿usas emojis, cuáles? ¿hablas con tono formal, informal, irónico? Tu voz al "
            "escribir es ese patrón."
        ),
        "ESCUTA_CHECK_1": "Revisé mis últimos 20 mensajes de WhatsApp con ojo de ``observador''.",
        "ESCUTA_CHECK_2": "Identifiqué al menos 3 patrones repetidos en mi forma de escribir.",
        "ESCUTA_CHECK_3": "Anoté qué tono predomina en mi voz: formal, informal, irónico, cálido.",
        "ESCUTA_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 1 · IDENTIFICA).} Título: «Actividad 1 --- "
            "Mi voz al escribir». \\textbf{Formato:} lista de 5 patrones repetidos en tu manera "
            "de escribir, cada uno con un ejemplo real tuyo (frase textual). \\textbf{Extensión:} "
            "5 patrones + 5 ejemplos. \\textbf{Sabes que terminaste cuando} los ejemplos son "
            "tuyos (no inventados), específicos (no ``hablo informal''), y un compañero que te "
            "conoce podría reconocerte por esos patrones."
        ),

        "SISTEMATIZACION_INTRO": (
            "Toda colaboración con IA tiene cuatro pilares. Vamos a descomponerlos para que "
            "sepas exactamente cómo dirigir a la IA en lugar de que ella te dirija a ti."
        ),
        "PILAR_1_SIST": (
            "Una buena colaboración con IA se descompone en 4 capas: (1) \\textbf{contexto} (le "
            "dices quién eres y para qué es el texto), (2) \\textbf{voz} (le compartes ejemplos "
            "de tu manera de escribir), (3) \\textbf{tarea} (le pides algo concreto), "
            "(4) \\textbf{iteración} (revisas, le pides cambios, vuelves a revisar)."
        ),
        "PILAR_2_SIST": (
            "Toda IA generativa sigue el patrón: \\emph{le das señal, ella amplía}. Si tu señal "
            "es genérica (``escribe un Sobre mí''), su respuesta será genérica. Si tu señal es "
            "rica (ejemplos + tono + estilo), su respuesta puede sonar a ti."
        ),
        "PILAR_3_SIST": (
            "Lo esencial de tu colaboración con IA cabe en una pregunta: \\emph{¿estoy usándola "
            "como espejo o como autora?}. Si la IA es espejo, tú decides. Si es autora, tú "
            "firmas algo que no es tuyo."
        ),
        "PILAR_4_SIST": (
            "Pasos del prompt: (1) ``Eres un editor que me ayuda a escribir...''; (2) ``Aquí "
            "están 3 ejemplos de mi manera de escribir...''; (3) ``Necesito que me ayudes a "
            "redactar...''; (4) ``Conserva mi tono. Evita estas palabras: ...''."
        ),
        "ANATOMIA_TITULO": "Anatomía de un prompt para coescritura con IA",
        "ANATOMIA_BODY": (
            "\\textbf{Rol:} ``Eres un editor de textos personales...'' \\\\[1mm] "
            "\\textbf{Voz:} ``Aquí están 3 fragmentos que escribí. Conserva este tono.'' \\\\[1mm] "
            "\\textbf{Tarea:} ``Ayúdame a escribir mi `Sobre mí' en 3 párrafos cortos.'' \\\\[1mm] "
            "\\textbf{Restricciones:} ``Evita clichés como `apasionado', `creativo', "
            "`innovador'.'' \\\\[1mm] "
            "\\textbf{Iteración:} ``Dame 3 versiones para elegir una y luego refinarla.''"
        ),
        "ERRORES_COMUNES": (
            "(1) Pedirle a la IA que escriba sin darle ejemplos de tu voz: sale genérico. "
            "(2) Aceptar la primera versión sin iterar: te quedas con el promedio. "
            "(3) Usar las palabras que la IA mete por defecto (``apasionado'', "
            "``transformador''): se notan a kilómetros. "
            "(4) Firmar como tuyo un texto que no revisaste línea por línea."
        ),
        "SIST_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 2 · ANALIZA).} Título: «Actividad 2 --- "
            "Mi voz vs. la IA». \\textbf{Formato:} (1) un prompt sencillo (``escribe un Sobre mí "
            "para una persona como yo''), pega la respuesta de la IA. (2) Anota 3 cosas que se "
            "parecen a tu voz y 3 que no. (3) Reescribe la respuesta a mano corrigiendo lo que "
            "no suena a ti. \\textbf{Sabes que terminaste cuando} puedes señalar palabras "
            "específicas que la IA usó y que tú no usarías nunca."
        ),

        "PRAXIS_INTRO": (
            "\\textbf{Actividad 3 · CREA --- Tu ``Sobre mí'' coescrito con IA} (35 min · "
            "individual). Hora de escribir el texto que va al sitio. Vas a tener una "
            "conversación con la IA donde TÚ diriges: le das contexto, ejemplos, tarea, iteras, "
            "y al final firmas un texto que puedes defender."
        ),
        "PILAR_1_PRAX": (
            "Tu sesión con la IA se descompone en 4 turnos: prompt inicial → respuesta IA → tu "
            "revisión + petición de cambios → versión final que tú reescribes."
        ),
        "PILAR_2_PRAX": (
            "Sigue el patrón ``espejo'': la IA produce, tú diriges. Si en algún momento sientes "
            "que estás copiando y pegando sin pensar, detén el flujo --- ya estás dejando que "
            "ella sea la autora."
        ),
        "PILAR_3_PRAX": (
            "Cada párrafo expresa una sola idea sobre ti. Si un párrafo de la IA dice 3 cosas "
            "distintas, pártelo. Si dice nada concreto (puro adjetivo), bórralo."
        ),
        "PILAR_4_PRAX": (
            "Algoritmo: (1) abre ChatGPT/Claude/Gemini; (2) prompt inicial con tu rol + voz + "
            "tarea (usando la plantilla de la Sist); (3) lee la respuesta y subraya lo que sí "
            "suena a ti; (4) pide una segunda versión con esas direcciones; (5) reescribe a mano "
            "la final, agregando 1 frase que la IA nunca podría escribir (algo solo tuyo)."
        ),
        "CHECKLIST_TITULO": "Checklist antes de cerrar el cuaderno",
        "CHECKLIST_ITEMS": (
            "\\checkbox El texto final cabe en 3 párrafos cortos. \\\\[1mm] "
            "\\checkbox Cero palabras de la lista negra (``apasionado'', ``creativo'', "
            "``innovador'', ``transformador''). \\\\[1mm] "
            "\\checkbox Hay al menos 1 frase que solo tú podrías escribir (referencia concreta "
            "a tu lugar, tu historia, tu manía). \\\\[1mm] "
            "\\checkbox Lo lees en voz alta y suena a ti --- ni inflado ni copiado. \\\\[1mm] "
            "\\checkbox Coherente con tu propuesta de valor (Guía 1) y sistema visual (Guía 2)."
        ),
        "PLANTILLA_GUION": (
            "\\textbf{Párrafo 1 · Quién soy.} \\textit{En una frase corta, sin currículum.} \\\\[1mm] "
            "\\textbf{Párrafo 2 · Qué hago.} \\textit{Tu propuesta de valor en voz propia.} \\\\[1mm] "
            "\\textbf{Párrafo 3 · Cómo conectar.} \\textit{Email + una invitación cálida y "
            "específica.}"
        ),
        "PRAX_INFOBAND": (
            "\\textbf{Lo que va al cuaderno (Actividad 3 · CREA).} Título: «Actividad 3 --- "
            "Sobre mí · versión final». \\textbf{Formato:} (1) el prompt completo que usaste con "
            "la IA (arriba), (2) el texto final de 3 párrafos cortos (abajo). \\textbf{Extensión:} "
            "una página de cuaderno. \\textbf{Sabes que terminaste cuando} cero palabras de la "
            "lista negra, al menos 1 frase irrepetible, y un compañero que te conoce te "
            "reconoce al leerlo."
        ),
        "PRODUCTO_TITULO": "Página ``Sobre mí'' coescrita con IA y firmada con tu voz",
        "CRITERIOS_LISTA": (
            "(1) 3 párrafos cortos, no más. "
            "(2) Cero palabras clichés (``apasionado'', ``creativo'', ``innovador'', "
            "``transformador''). "
            "(3) Al menos 1 frase que solo tú podrías escribir (referencia local, anécdota, "
            "manía). "
            "(4) Coherente con tu propuesta de valor y sistema visual de las guías anteriores. "
            "(5) Pasa el ``read aloud test'': al leerlo en voz alta a alguien que te conoce, te "
            "reconoce."
        ),

        "DUSSEL_CITA": "Toda comunidad de comunicación se hace plena cuando incluye la voz del excluido.",
        "DUSSEL_APLICACION": (
            "La IA fue entrenada principalmente con textos del norte global, en inglés. Su voz "
            "por defecto está sesgada hacia ese mundo. Si la dejas escribir sin dirigirla, te "
            "dará frases neutras que diluyen tu identidad latinoamericana. Coescribir con "
            "criterio es un acto de inclusión de tu propia voz en la infoesfera dominante."
        ),
        "DUSSEL_PREGUNTA": (
            "¿La IA está incluyendo mi voz local o me la está borrando suavemente? ¿Estoy "
            "permitiendo que escriba por mí en lugar de conmigo?"
        ),
        "ESTOICISMO_AUTOR": "Marco Aurelio",
        "ESTOICISMO_CITA": "No es lo que dices, es lo que haces lo que define quién eres.",
        "ESTOICISMO_APLICACION": (
            "La tentación con IA es publicar lo que escribió y firmar como tuyo. Pero firmar es "
            "un acto: estás diciéndole al mundo ``esto soy yo''. La integridad estoica te pide "
            "que firmes solo lo que puedes defender línea por línea --- y eso depende solo de ti."
        ),
        "ESTOICISMO_PREGUNTA": (
            "¿Puedo defender cada línea de este texto como mía? Si me preguntan ``¿por qué "
            "pusiste esta frase?'', ¿tengo respuesta?"
        ),
        "FLORIDI_CITA": "Cuando un agente delega su voz a otro, ambos quedan transformados en la infoesfera.",
        "FLORIDI_APLICACION": (
            "Cada vez que aceptas un texto de la IA sin revisarlo, le delegas tu voz. La IA se "
            "convierte en un coautor invisible de tu identidad digital. Floridi llama a eso "
            "\\emph{re-ontologisation informacional}: cambias quién eres digitalmente al cambiar "
            "quién escribe por ti."
        ),
        "FLORIDI_PREGUNTA": (
            "¿Estoy usando la IA como herramienta o le estoy entregando mi voz? ¿Quién está "
            "firmando cuando publico este texto?"
        ),

        "COMPROMISO_INFOBAND": (
            "\\textbf{Para la próxima semana.} Antes de publicar cualquier texto coescrito con "
            "IA esta semana (redes, correos, ensayos), aplícale el ``read aloud test'': léelo "
            "en voz alta a alguien que te conoce. Si te reconoce, publícalo. Si no, "
            "reescríbelo. El próximo lunes traes 3 textos pasados por ese filtro."
        ),
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
