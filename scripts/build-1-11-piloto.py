#!/usr/bin/env python3
"""
Genera el .tex de la guía piloto G11·P1·S1 (Mi marca digital)
a partir de scripts/generadores/template-milc-v3.tex.

Uso:
    python3 scripts/build-1-11-piloto.py

Salida:
    public/guias-mejoras/1-11-TIC.tex
"""
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-milc-v3-conectate.tex"
OUTPUT = ROOT / "public/guias-mejoras/1-11-TIC.tex"

# Paleta del grado 11 (bento-cyan/blue): primary, dark, soft
COLOR_PRIMARY = "0066FF"
COLOR_DARK = "003D99"
COLOR_SOFT = "D6E8FF"

# Contenido de la guía
R = {
    # ───── Metadata ─────
    "COLOR_PORTADA_PRIMARY": COLOR_PRIMARY,
    "COLOR_PORTADA_DARK": COLOR_DARK,
    "COLOR_PORTADA_SOFT": COLOR_SOFT,
    "GRADO": "11",
    "GUIA_NUMERO": "1",
    "TITULO_GUIA": "Mi marca digital --- del oficio heredado a la huella propia",
    # Versión con saltos manuales para la portada (cuadro de texto angosto).
    "TITULO_GUIA_PORTADA": "Mi marca digital ---\\\\del oficio heredado\\\\a la huella propia",
    "PERIODO_NOMBRE": "Período 1 · Presencia y marca digital",
    "PRODUCTO_FINAL": "Manifiesto de marca personal en una página de cuaderno",
    "DBA": "Comunicación profesional en entornos digitales (MEN, Lineamientos T\\&I)",
    "REFERENTES": "Floridi (infoética) · Dussel (estética de la liberación) · Estoicismo",

    # ───── Apertura ─────
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
        "Al terminar esta guía podrás: "
        "(1) \\textbf{identificar} qué huella digital tienes hoy; "
        "(2) \\textbf{explicar} tu propuesta de valor en una frase concreta; "
        "(3) \\textbf{crear} tu manifiesto de marca personal con cinco bloques fijos; "
        "(4) \\textbf{evaluar} con criterios el manifiesto de un compañero."
    ),

    # ───── Puentes narrativos (contrato editorial) ─────
    "PUENTE_TO_RUTA": (
        "Antes de empezar, mira el viaje completo. Cinco estaciones, una promesa: "
        "al final de la guía habrás escrito --- de tu propia mano --- el manifiesto de marca "
        "personal que va a ser tu ancla durante todo el periodo."
    ),
    "PUENTE_TO_ESCUTA": (
        "Una marca no se construye al aire: se levanta sobre lo que ya existe. Antes de proyectar "
        "quién quieres ser, vamos a mirar la huella que ya dejaste en internet. Es el espejo más "
        "duro y el más útil que tienes hoy."
    ),
    "PUENTE_TO_SIST": (
        "Ya viste lo que la red dice de ti hoy. Ahora vamos a entender qué hace fuerte a una marca, "
        "para que la tuya tenga \\textbf{criterio}, no \\textbf{instinto}. Cuatro pilares del "
        "pensamiento computacional aplicados a una sola pregunta: ¿qué prometo, a quién, y por qué?"
    ),
    "PUENTE_TO_PRAX": (
        "Ya tienes tu propuesta de valor en una frase. Bien. Ahora la vas a convertir en un "
        "manifiesto completo --- una página de tu cuaderno que será tu ancla durante todo el "
        "periodo 1. Cada guía siguiente lo desarrolla; hoy lo dejas escrito."
    ),
    "PUENTE_TO_PROD": (
        "Lo que sigue es el resumen de \\emph{qué} entregas hoy y \\emph{cómo se sabe} si quedó "
        "bien hecho. Léelo antes de cerrar el cuaderno: son los criterios con los que el manifiesto "
        "se evalúa --- a ti mismo, primero."
    ),
    "PUENTE_TO_EVAL": (
        "Antes de cerrar, mira tu trabajo desde cinco dimensiones humanas. Evaluar no es la nota: "
        "es lo que se queda en ti cuando esta guía pase. Personal, emocional, ciudadana, local, "
        "intergeneracional --- cinco preguntas pequeñas que cambian con el tiempo."
    ),
    "PUENTE_TO_TRIANG": (
        "Y para terminar, tres voces antiguas que te van a acompañar durante toda la secundaria. "
        "Dussel, un estoico, Floridi. No los memorices --- escúchalos. Cada uno te ofrece un lente "
        "distinto para mirar la marca personal que acabas de escribir."
    ),

    # ───── Fase 1 · Escuta (Actividad 1: ANALIZA tu huella) ─────
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
        "\\textbf{Lo que va al cuaderno (Actividad 1).} "
        "Título: «Actividad 1 --- Auditoría de mi huella digital». "
        "\\textbf{Formato:} tabla de 3 columnas (Suma~|~Neutro~|~Resta), mínimo 3 elementos por columna, "
        "más un párrafo de diagnóstico de 5--8 renglones. "
        "\\textbf{Sabes que terminaste cuando} cada elemento es específico (URL, post, foto, comentario --- "
        "no genérico) y el párrafo responde con honestidad, reconociendo al menos un sesgo de tu propia mirada."
    ),

    # ───── Fase 2 · Sistematización (Actividad 2: EXPLICA propuesta de valor) ─────
    "SISTEMATIZACION_INTRO": (
        "Una marca personal se compone de cuatro elementos. Vamos a descomponerlos con los pilares "
        "del pensamiento computacional para construir tu \\textbf{propuesta de valor}."
    ),
    "PILAR_1_SIST": (
        "Separamos la marca en sus 4 piezas: identidad (quién soy), audiencia (a quién hablo), "
        "promesa (qué resuelvo) y evidencia (cómo se prueba)."
    ),
    "PILAR_2_SIST": (
        "Toda marca fuerte responde al patrón: ``Ayudo a [X] a [resolver/lograr Y] gracias a [Z]''. "
        "Cambia el patrón y la marca pierde fuerza."
    ),
    "PILAR_3_SIST": (
        "Lo esencial de tu marca cabe en \\emph{una frase}. Si necesitas tres párrafos para "
        "explicar quién eres, todavía no la has abstraído."
    ),
    "PILAR_4_SIST": (
        "Pasos: (1) lista 3 audiencias posibles, (2) lista 3 resultados que sabes producir, "
        "(3) combínalos en 3 frases con el patrón, (4) elige la más auténtica."
    ),
    "ANATOMIA_TITULO": "Anatomía de una propuesta de valor sólida",
    "ANATOMIA_BODY": (
        "\\textbf{Ayudo a} [audiencia concreta, no ``personas''] \\textbf{a} [resolver/lograr "
        "resultado específico, no ``ayudar''] \\textbf{gracias a} [tu fortaleza distintiva, no ``ser "
        "creativo'']. \\\\[2mm] \\textbf{Ejemplo débil:} ``Soy creativo y me gusta el diseño.'' "
        "\\\\[1mm] \\textbf{Ejemplo fuerte:} ``Ayudo a pequeños negocios de Cartago a contar su "
        "historia en video corto.''"
    ),
    "ERRORES_COMUNES": (
        "(1) Frases genéricas tipo ``soy proactivo y trabajador''. "
        "(2) Audiencia vaga (``personas''). "
        "(3) Inflar logros que no sostienes con evidencia. "
        "(4) Copiar la marca de alguien que admiras."
    ),
    "SIST_INFOBAND": (
        "\\textbf{Lo que va al cuaderno (Actividad 2 · EXPLICA).} "
        "Título: «Actividad 2 --- Mi propuesta de valor». "
        "\\textbf{Formato:} 3 versiones de tu propuesta numeradas (1, 2, 3) siguiendo el patrón "
        "``Ayudo a [X] a [Y] gracias a [Z]'', cambiando cada vez la audiencia o la fortaleza. "
        "Luego marca con $\\star$ la versión elegida y escribe 2 renglones explicando por qué esa. "
        "\\textbf{Sabes que terminaste cuando} cada frase nombra una audiencia concreta (no ``personas''), "
        "un resultado específico (no ``ayudar''), y la elegida la puedes decir en voz alta sin titubear."
    ),

    # ───── Fase 3 · Praxis (Actividad 3: CREA manifiesto) ─────
    "PRAXIS_INTRO": (
        "\\textbf{Actividad 3 · CREA --- Tu Manifiesto de Marca Personal} (30 min · individual). "
        "En una página del cuaderno vas a escribir 5 bloques cortos con títulos fijos. Este "
        "manifiesto será tu ancla durante todo el periodo 1 --- cada guía siguiente lo desarrolla."
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
        "Cada bloque expresa una sola idea. Si un bloque tuyo dice tres cosas distintas, "
        "todavía no abstrajiste lo esencial."
    ),
    "PILAR_4_PRAX": (
        "Algoritmo de escritura: (1) escribe los 5 títulos en blanco; (2) llena ``Quién soy'' "
        "primero; (3) ``Qué NO soy'' al final con 3 cosas concretas; (4) ``Cómo me reconocerán'' "
        "con 3 evidencias observables."
    ),
    "CHECKLIST_TITULO": "Checklist del manifiesto antes de cerrar el cuaderno",
    "CHECKLIST_ITEMS": (
        "\\checkbox Los 5 bloques están presentes y titulados. \\\\[1mm] "
        "\\checkbox ``Qué NO soy'' tiene al menos 3 cosas concretas (no ``no soy malo''). \\\\[1mm] "
        "\\checkbox ``Cómo me reconocerán'' da 3 evidencias observables (manera de escribir, temas "
        "que repites, una marca visual). \\\\[1mm] "
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
        "\\textbf{Lo que va al cuaderno (Actividad 3 · CREA).} "
        "Título: «Actividad 3 --- Manifiesto de marca personal · versión 1». "
        "\\textbf{Formato:} 5 bloques titulados (Quién soy · A quién sirvo · Qué prometo · Qué NO soy · "
        "Cómo me reconocerán), 3--5 renglones cada uno. "
        "\\textbf{Extensión:} una página completa de cuaderno. "
        "\\textbf{Sabes que terminaste cuando} los 5 bloques están presentes con sus títulos exactos, "
        "``Qué NO soy'' tiene al menos 3 cosas concretas, ``Cómo me reconocerán'' da 3 evidencias "
        "observables, y puedes leerlo en voz alta sin avergonzarte ni inflarte."
    ),
    "PRODUCTO_TITULO": "Manifiesto de marca personal en una página de cuaderno",
    "CRITERIOS_LISTA": (
        "(1) Los 5 bloques están presentes y titulados con el nombre exacto. "
        "(2) ``Qué NO soy'' tiene al menos 3 cosas concretas. "
        "(3) ``Cómo me reconocerán'' da 3 evidencias observables (no abstracciones). "
        "(4) El manifiesto suena a ti --- ni inflado ni copiado. "
        "(5) Tu propuesta de valor de la Actividad 2 se refleja con coherencia."
    ),

    # ───── Fase 4 · Triángulo de pensamiento (versión 11° con citas) ─────
    "DUSSEL_CITA": "Sin reconocimiento del Otro no hay justicia, sólo poder.",
    "DUSSEL_APLICACION": (
        "Una marca personal puede ser un acto de reconocimiento o un acto de poder. Si tu marca "
        "solo te promociona a ti, ejerce poder; si abre espacio a otros, encuentra justicia. "
        "En el Valle, las marcas familiares más respetadas eran las que sostuvieron una comunidad."
    ),
    "DUSSEL_PREGUNTA": (
        "¿A quién sirve mi marca? ¿Reconozco al Otro o solo me promociono?"
    ),
    "ESTOICISMO_AUTOR": "Marco Aurelio",
    "ESTOICISMO_CITA": "Tu vida es lo que tus pensamientos hagan de ella.",
    "ESTOICISMO_APLICACION": (
        "Lo que publicas, cómo respondes a un mensaje incómodo, cómo manejas un comentario hostil: "
        "todo \\emph{eso} depende de ti. Los algoritmos, los juicios ajenos, el clima de las redes: "
        "\\emph{eso no}. Distinguir las dos columnas es la ataraxia digital."
    ),
    "ESTOICISMO_PREGUNTA": (
        "¿La huella que dejo coincide con quien quiero ser? ¿Distingo lo que depende de mí de lo que no?"
    ),
    "FLORIDI_CITA": (
        "Somos inforgs en una infoesfera que cuidamos o degradamos con cada acto informacional."
    ),
    "FLORIDI_APLICACION": (
        "Cada publicación tuya es un acto informacional: añade valor a la infoesfera o la ensucia. "
        "Tu marca personal, en términos de Floridi, es una responsabilidad sobre el bien común "
        "informacional. No es vanidad: es ética digital aplicada."
    ),
    "FLORIDI_PREGUNTA": (
        "¿Mi marca enriquece o ensucia la infoesfera? ¿Lo que añado al mundo digital agrega valor a otros?"
    ),

    # ───── Compromiso ─────
    "COMPROMISO_INFOBAND": (
        "\\textbf{Para la próxima semana.} Antes de cada publicación en cualquier red, pregúntate: "
        "¿esto suma o resta a la marca que escribí hoy en mi manifiesto? Si no suma, no se publica. "
        "Esa disciplina de una semana vale más que mil consejos. El próximo lunes traes tu manifiesto "
        "al aula y le añades los aprendizajes de la semana."
    ),
}


def main() -> int:
    template = TEMPLATE.read_text(encoding="utf-8")
    out = template
    for key, value in R.items():
        out = out.replace(f"<<<{key}>>>", value)
    # Verificar que no quedan placeholders sin reemplazar
    remaining = re.findall(r"<<<[A-Z_0-9]+>>>", out)
    if remaining:
        print(f"ERROR: placeholders sin reemplazar: {sorted(set(remaining))}")
        return 1
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(out, encoding="utf-8")
    print(f"OK .tex: {OUTPUT.name} ({len(out):,} bytes, {out.count(chr(10)):,} líneas)")

    # Compilar 2 pasadas de xelatex (la 2da es indispensable para TikZ overlay
    # de la portada con remember picture).
    xelatex = "/Library/TeX/texbin/xelatex"
    for i in (1, 2):
        result = subprocess.run(
            [xelatex, "-interaction=nonstopmode", "-halt-on-error", OUTPUT.name],
            cwd=OUTPUT.parent,
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            print(f"ERROR xelatex pasada {i}:")
            print(result.stdout[-2000:])
            return 1
    # Limpiar archivos auxiliares de LaTeX (quedan solo .tex y .pdf)
    for ext in (".aux", ".log", ".out"):
        aux = OUTPUT.with_suffix(ext)
        if aux.exists():
            aux.unlink()
    pdf = OUTPUT.with_suffix(".pdf")
    print(f"OK PDF: {pdf.name} ({pdf.stat().st_size:,} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
