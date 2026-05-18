#!/usr/bin/env python3
"""Genera los 30 outlines (completo: false) de Grado 10 en content/guias/10/.

Malla diseñada para estudiantes de 15-16 años:

- P1 — Escritura abierta con IA: el estudiante como editor produce un libro
  de 80 páginas mediado por IA (texto + portada + diagramación + derechos).
- P2 — Informes técnicos y comunicación profesional con IA: Google Docs,
  Markdown, encuestas con Forms, comunicación profesional.
- P3 — Ofimática con IA, contabilidad y emprendimiento: Google Sheets +
  IA aplicada a contabilidad básica, análisis de datos y plan de negocio.

Lenguaje cercano a jóvenes (tú, no usted). Reconoce que ya usan IA
(ChatGPT, Gemini, Bing) y los enseña a usarla con criterio profesional.
"""
from __future__ import annotations
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "content" / "guias" / "10"

# Cada outline: (titulo, producto_final, saber_ancestral_idea, verbos[4])

P1 = [
    (
        "El oficio del editor --- qué hace y qué no hace",
        "Definición personal del rol de editor de libro en 1 página + listado de las 3 decisiones más importantes que un editor toma (tema, audiencia, estructura) + análisis de 2 libros que conoces identificando qué decisión editorial sostiene a cada uno",
        "El editor de la gaceta barrial de Cartago decide cada semana qué nota entra y qué nota sale: no escribe todo, pero firma todo. El editor moderno con IA hace lo mismo: no escribe cada palabra, pero responde por la pieza completa.",
        ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    ),
    (
        "Concebir tu libro --- género, tema, audiencia y escaleta",
        "Ficha editorial de tu libro con 5 campos (género, tema, audiencia, propósito, escaleta inicial con 8-12 capítulos posibles) + justificación de 5 líneas sobre por qué este libro merece ser escrito",
        "El cuentista del fogón nunca empieza a hablar sin saber qué historia va a contar: elige el género (susto, aventura, ejemplo, chiste), elige la audiencia (niños, jóvenes, mayores), elige el tema. Esa decisión previa es la concepción editorial del oficio ancestral.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Prompting técnico para escritura --- las 5 partes del prompt profesional",
        "Plantilla personal de prompt editorial con las 5 partes (rol, contexto, tarea, formato, restricciones) + 3 prompts escritos y probados en ChatGPT/Gemini/Bing para generar primer borrador de un capítulo + bitácora de qué funcionó y qué no",
        "Cuando el comensal pide un plato al cocinero del restaurante, no dice solo \\emph{``algo rico''}. Dice: \\emph{``un sancocho de gallina, con yuca y mazorca, no muy salado, para 4 personas''}. La precisión del pedido determina la calidad del plato. El prompt editorial es esa misma precisión.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Iterar y refinar texto con IA --- del borrador al capítulo terminado",
        "1 capítulo de tu libro iterado al menos 3 veces (v1 borrador IA → v2 ajustes editoriales → v3 versión final con voz propia) + bitácora de cambios documentando cada decisión + comparación lado a lado de las 3 versiones",
        "El ebanista del centro de Cartago nunca lija de un solo paso: pasa una lija de grano grueso, después una mediana, finalmente una fina. Cada paso quita lo justo y revela la superficie limpia. Iterar texto con IA es esa misma disciplina aplicada a las palabras.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Estructura editorial --- arco narrativo, ritmo y capítulos",
        "Mapa estructural completo de tu libro de 80 páginas con (a) arco narrativo en 3 actos (planteamiento, desarrollo, cierre), (b) 8-12 capítulos numerados con título y resumen de 2 líneas cada uno, (c) ritmo de páginas estimado por capítulo (~6-10 páginas)",
        "El arquitecto del barrio nunca pone ladrillos sin antes dibujar el plano: dónde van las puertas, dónde las ventanas, dónde el techo. Sin plano, la casa se cae. La estructura editorial es ese plano del libro antes de escribirlo.",
        ["ANALIZA", "EXPLICA", "CREA", "EVALÚA"],
    ),
    (
        "Derechos de autor y propiedad intelectual con IA --- Ley 23 de 1982 y obras derivadas",
        "Ficha de derechos de autor de tu libro con 6 elementos (autor declarado, fecha, licencia elegida entre Creative Commons o todos los derechos reservados, declaración de uso de IA, fuentes citadas, derechos morales vs patrimoniales) + análisis de 3 casos reales de polémicas de IA y derechos de autor publicados en prensa",
        "Cuando el artesano de cestería firmaba su pieza con un nudo distintivo en la base, estaba haciendo dos cosas: declarando autoría y asumiendo responsabilidad. La firma del oficio es derecho moral (siempre del artesano) y derecho patrimonial (negociable). La Ley 23 de 1982 traduce esa práctica.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Portada con IA generativa de imagen --- DALL-E, Bing Image Creator y herramientas gratuitas",
        "Portada de tu libro creada con al menos 1 herramienta gratuita de IA generativa (Bing Image Creator, Adobe Express, Leonardo.ai, Microsoft Designer) + 3 versiones probadas con prompts distintos + decisión final justificada + declaración del modelo usado y los términos de uso",
        "El pintor de carteles del centro de Cartago nunca tomaba el pincel sin saber cómo se vería la cubierta del cuento. Bocetaba 3 versiones a lápiz, escogía con el cliente, recién entonces pintaba. La portada con IA generativa es ese boceto multiplicado, pero el oficio del editor (elegir, decidir, firmar) sigue siendo humano.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Diagramación y maquetación con herramientas gratuitas --- Canva, Google Docs, LibreOffice",
        "Documento maquetado de tu libro con (a) plantilla profesional en Canva/Docs/LibreOffice, (b) tipografía coherente (1-2 familias máximo), (c) jerarquía visual clara (capítulo, subtítulo, cuerpo), (d) numeración de páginas y tabla de contenido automática, (e) capítulo de muestra completamente diagramado de 6+ páginas",
        "El imprentero del barrio organizaba los tipos antes de imprimir: cada letra en su cajón, cada renglón en su orden. Si los tipos se desordenaban, la página salía caótica. La diagramación moderna es ese ordenamiento aplicado a herramientas digitales gratuitas.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Producción final del libro --- 80 páginas compiladas, revisadas y firmadas",
        "Libro completo de al menos 80 páginas en formato PDF + revisión de calidad con checklist de 12 puntos + carta del editor (tú) firmada con nombre y fecha + declaración de uso de IA + licencia de derechos elegida + bitácora del proceso completo del periodo",
        "El aprendiz que termina su pieza maestra no la entrega cualquier día: la firma, declara cómo la hizo, dice qué le enseñó el maestro, qué decidió por sí mismo. Esa firma es honor del oficio. La producción final del libro es esa firma del editor sobre 80 páginas de trabajo.",
        ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
    ),
    (
        "Sustentación + feria del libro escolar",
        "Sustentación pública de 6 minutos de tu libro frente al grupo + demo del libro físico o digital + sesión de preguntas y respuestas de 5 minutos + participación en feria del libro escolar donde los compañeros intercambian o leen muestras de los libros producidos",
        "La feria del libro del pueblo nunca era solo exhibición: era intercambio. Los autores leían fragmentos, los lectores preguntaban, los libros se prestaban o vendían. La sustentación + feria es esa práctica ancestral: el editor presenta y defiende su pieza ante la comunidad.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]

P2 = [
    (
        "4 tipos de texto profesional --- informe, comercial, técnico, estudio de mercado",
        "Tabla comparativa de los 4 tipos de texto profesional con (a) propósito, (b) audiencia, (c) estructura típica, (d) tono apropiado para cada uno + 1 ejemplo real (capturado de prensa o redes) por cada tipo + análisis breve de qué diferencia un informe técnico de uno comercial",
        "En el barrio Obrero hay cuatro oficios de la palabra que cualquier abuela distingue al oído: el cuentista (entretiene), el escribano (acredita), el contador (calcula y reporta), el juez (sentencia). Cada uno tiene tono propio. Confundirlos es perder el oficio.",
        ["IDENTIFICA", "ANALIZA", "EXPLICA", "EVALÚA"],
    ),
    (
        "Estructura del informe técnico --- introducción, desarrollo, conclusiones",
        "Plantilla personal de informe técnico con las 3 secciones obligatorias (introducción con contexto y objetivo, desarrollo con datos y argumentos, conclusiones con recomendaciones) + ejemplo aplicado a un caso real del colegio (ej. propuesta de mejora del recreo, análisis de uso del laboratorio)",
        "Toda receta de la abuela tiene principio, medio y fin: alistar ingredientes, cocinar, servir. Quien intenta cocinar sin orden pierde el sabor. El informe técnico tiene esos 3 mismos tiempos: introducción, desarrollo, conclusión.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Google Docs para informes profesionales --- estilos, índice automático y citas",
        "Informe en Google Docs aplicando (a) estilos de título consistentes, (b) índice automático generado, (c) numeración de páginas, (d) citas con APA o IEEE básico, (e) imagen con pie de figura + comparación con un informe sin estilos para demostrar la diferencia",
        "El escribano del juzgado del centro de Cartago sabía que un documento legal mal organizado se cae solo: las partes, los considerandos, las firmas. Hoy esa misma disciplina vive en los estilos de Google Docs: ordenar para que el documento sea legible y portable.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Markdown --- el formato del oficio digital portable",
        "Documento en Markdown con al menos 8 elementos distintos (encabezados de 3 niveles, listas, tabla, link, imagen, código, cita en bloque, énfasis) escrito en cualquier editor gratuito (Stackedit, Dillinger, Obsidian) + conversión a 2 formatos (PDF y HTML) + comparación con Word",
        "El sastre profesional no diseña sin patrón estandarizado: usa el mismo plantilla para clientes distintos, porque eso permite portabilidad. Markdown es el patrón estándar de la escritura digital: el mismo archivo se convierte a PDF, HTML, presentación o libro según se necesite.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Encuestas con phronesis --- Google Forms más IA para preguntar bien",
        "Encuesta diseñada en Google Forms con al menos 10 preguntas (mezcla de opción única, opción múltiple, escala Likert y abierta) sobre tema escolar real + revisión con IA del cuestionario para detectar preguntas sesgadas o ambiguas + plan de aplicación a 20-30 personas",
        "El chismoso del barrio que pregunta bien sin parecer entrometido lo hace por método: pregunta indirecta primero, observa la cara, profundiza después. Esa phronesis del preguntón ancestral es exactamente lo que pide una buena encuesta: orden, neutralidad, escucha.",
        ["IDENTIFICA", "ANALIZA", "APLICA", "EVALÚA"],
    ),
    (
        "Análisis cualitativo con IA --- qué hace y qué no",
        "Análisis con IA de 15-20 respuestas abiertas de tu encuesta de la sesión anterior + clasificación temática automática propuesta por la IA + tabla con (a) lo que la IA acertó, (b) lo que erró, (c) cómo lo corregiste con criterio humano",
        "La cocinera del restaurante muestra siempre las medidas al cliente antes de cocinar: \\emph{``vea, esto es lo que va\\''}. La IA es buena agregando y proponiendo pero puede equivocarse en matices culturales. Tu papel como editor es verificar antes de servir.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Informe comercial --- para audiencia real",
        "Informe comercial dirigido a una audiencia real concreta (ej. propuesta al consejo estudiantil, al rector, a una organización del barrio) con (a) resumen ejecutivo de 1 página, (b) cuerpo argumentativo de 2-3 páginas, (c) recomendaciones accionables, (d) presupuesto estimado si aplica",
        "Cuando el tendero del barrio iba al banco a pedir un préstamo, no llegaba con palabras: llevaba un papel con cuentas claras, una propuesta concreta, la cantidad pedida, cómo iba a pagarla. Ese papel era informe comercial avant la lettre.",
        ["ANALIZA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Comunicación profesional por correo --- con IA como asistente, no como reemplazo",
        "3 correos profesionales escritos en colaboración con IA (uno solicitando información, uno respondiendo a un cliente, uno declinando una propuesta con respeto) + bitácora con (a) el prompt usado, (b) la versión de la IA, (c) la versión final con tu voz, (d) por qué cambiaste lo que cambiaste",
        "El telegrafista del pueblo cobraba por palabra y por eso aprendió a decir lo justo: precisión más brevedad. El correo profesional moderno hereda esa disciplina: máximo respeto, mínimo desperdicio. La IA ayuda a redactar; tú decides el tono.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Mini-proyecto del periodo --- informe técnico con datos reales y IA documentada",
        "Mini-proyecto integrador del periodo 2: informe técnico de 6-10 páginas sobre un tema escolar real con (a) datos reales recolectados con encuesta o medición, (b) análisis con IA debidamente declarada, (c) estructura informe completa, (d) declaración explícita de qué hizo la IA y qué hiciste tú",
        "El aprendiz que pide certificación al gremio no presenta cualquier pieza: presenta una que integra todo lo aprendido en el periodo. El mini-proyecto del informe técnico es esa pieza para certificar el oficio de la palabra profesional con IA.",
        ["ANALIZA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Sustentación del periodo 2",
        "Sustentación pública de 5 minutos del informe técnico del periodo + demo de un fragmento clave + sesión de 5 preguntas de la audiencia + autoevaluación con 2 fortalezas y 2 mejoras concretas para el periodo siguiente",
        "El aprendiz que termina la prueba de oficio no entrega solo la pieza: la defiende ante los mayores, responde preguntas técnicas, declara con honestidad lo que aún no domina. La sustentación es ese ritual del oficio profesional.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]

P3 = [
    (
        "Ofimática con IA --- el copiloto del oficio digital cotidiano",
        "Lista de 10 tareas reales de ofimática que haces o harás en la vida real (con la familia, en el colegio, en un primer trabajo) + para cada una, propón cómo la IA puede asistir (no reemplazar) + identificación de qué herramientas gratuitas usarías (Google Sheets, Excel Online, LibreOffice, Notion, ChatGPT)",
        "El cuaderno cuadriculado del tendero del barrio, formalizado con calculadora y radio, ya era ofimática del oficio antes de que existieran computadores. La IA solo agrega un copiloto: tú decides, ella sugiere.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Contabilidad básica --- ingresos, egresos y balance del negocio o personal",
        "Cuaderno de cuentas personal o familiar de 2 semanas reales con (a) tabla de ingresos por fuente, (b) tabla de egresos por categoría, (c) balance neto (ingresos menos egresos), (d) identificación de 1 categoría donde podrías reducir gastos + reflexión de 5 líneas sobre lo que aprendiste",
        "La cuenta de la tienda del barrio Obrero nunca era misterio: cada noche, antes de cerrar, el tendero sumaba lo que entró, restaba lo que salió, y miraba el saldo. Esa contabilidad ancestral es la base de toda contabilidad moderna, personal o empresarial.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Google Sheets + IA para contabilidad personal o microempresa",
        "Plantilla funcional de contabilidad en Google Sheets con (a) hoja de ingresos, (b) hoja de egresos, (c) hoja de balance con fórmulas SUMA, PROMEDIO, MAX, MIN, (d) gráfico automático de gastos por categoría + asistencia de IA documentada para resolver al menos 1 duda técnica del proceso",
        "El contador del barrio antes usaba planilla cuadriculada y lápiz para llevar las cuentas de los microempresarios. Hoy Sheets es esa planilla digital, y la IA es el aprendiz que te ayuda cuando te trabas. Tú firmas las cuentas; la IA solo asiste.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Flujo de caja y punto de equilibrio --- proyectar con IA",
        "Proyección financiera a 3 meses de un microemprendimiento real o hipotético con (a) flujo de caja mes a mes, (b) cálculo del punto de equilibrio en unidades vendidas, (c) 3 escenarios (pesimista 30 por ciento, realista 60 por ciento, optimista 100 por ciento), (d) decisión documentada de viabilidad",
        "El campesino del Valle nunca sembraba sin hacer la cuenta de la cosecha: cuánto invierte en semilla, cuánto tarda en cosechar, cuánto espera recoger. Esa cuenta ancestral es proyección financiera. El flujo de caja moderno la formaliza.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Visualización de datos contables con IA --- gráficos automáticos honestos",
        "3 gráficos hechos sobre los datos contables del periodo (barras para comparar gastos por mes, líneas para evolución de ingresos en el tiempo, circular para proporción del presupuesto por categoría) + crítica de 1 gráfico engañoso real (publicidad o medios) identificando 3 errores de honestidad visual",
        "El pregonero del mercado siempre mostraba la pesa al cliente: la pesa visible era prueba de honestidad. El gráfico contable honesto es esa pesa moderna; el gráfico manipulado para engañar es traición del oficio.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Encuestas y análisis de mercado con IA",
        "Mini-estudio de mercado para un microemprendimiento real o hipotético con (a) encuesta de 8-10 preguntas aplicada a 15-20 personas del entorno cercano, (b) análisis con IA de los resultados, (c) 3 hallazgos numéricos clave, (d) 1 decisión razonada sobre qué producto/servicio ofrecer",
        "El comerciante experimentado del barrio nunca pedía mercancía sin antes preguntar a la clientela: \\emph{``¿qué les hace falta?\\''}, \\emph{``¿qué precio pagarían?\\''}. Esa investigación de mercado ancestral es lo que la IA hoy automatiza, pero el criterio sigue siendo del comerciante.",
        ["IDENTIFICA", "ANALIZA", "APLICA", "EVALÚA"],
    ),
    (
        "Plan de negocio con IA --- Business Model Canvas asistido",
        "Business Model Canvas completo de un microemprendimiento con los 9 bloques llenos (segmento, propuesta de valor, canales, relaciones, ingresos, recursos, actividades, socios, costos) + asistencia de IA para refinar al menos 3 bloques + 3 supuestos críticos identificados que requerirán verificación posterior",
        "El trueque ancestral del mercado de Cartago tenía arquitectura silenciosa: segmento (quién con quién), valor (qué da cada uno), canal (la plaza), confianza acumulada. El Business Model Canvas formaliza esa arquitectura en 9 casillas; la IA ayuda a refinar, no reemplaza el criterio.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Comunicación empresarial profesional con IA",
        "3 piezas de comunicación empresarial producidas con asistencia de IA (a) propuesta comercial breve de 1 página, (b) correo de presentación a un cliente potencial, (c) infografía o publicación de redes con el resumen de la propuesta + declaración de qué hizo la IA y qué hiciste tú en cada pieza",
        "La palabra empeñada del tendero ancestral nunca era frase suelta: era propuesta clara con compromiso real. El correo profesional, la propuesta comercial, la publicación de redes son las palabras empeñadas del emprendedor moderno. La IA ayuda a redactarlas; tú asumes lo prometido.",
        ["APLICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Proyecto integrador del periodo --- micro-emprendimiento con plan contable, datos y propuesta",
        "Proyecto integrador final del año: micro-emprendimiento personal o grupal completo con (a) idea con problema real identificado, (b) plan de negocio con Canvas, (c) contabilidad proyectada a 3 meses con flujo de caja, (d) propuesta de comunicación, (e) plan de validación con 5 personas reales, (f) bitácora del proceso",
        "El aprendiz emprendedor del barrio que abre su primer puestico no improvisa: estudia la calle, calcula los costos, ahorra el capital, prepara el lugar. El proyecto integrador del año 10 es esa preparación seria del emprendedor antes de iniciar.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Sustentación final del grado 10 + feria de microempresas escolares",
        "Sustentación pública de 10 minutos del proyecto integrador frente a la comunidad escolar (compañeros, docentes, padres si aplica) + demo de los productos digitales generados durante el año (libro, informe, plan de negocio) + carta abierta firmada de cierre del grado + participación en feria de microempresas con stand del proyecto",
        "La graduación del aprendiz frente a los mayores del oficio es ritual ancestral: el aprendiz expone su pieza maestra, los maestros preguntan, juzgan, certifican. La sustentación del grado 10 más la feria es esa graduación moderna que abre el camino al proyecto final del grado 11.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]


def render(periodo: int, sesion: int, item: tuple) -> str:
    titulo, producto, saber, verbos = item
    verbos_yaml = "\n".join(f"- {v}" for v in verbos)
    return f"""clave: {periodo}-{sesion}
grado: 10
periodo: {periodo}
sesion: {sesion}
completo: false
titulo: {titulo}
producto_final: |-
  {producto}
saber_ancestral_idea: |-
  {saber}
verbos_actividades:
{verbos_yaml}
"""


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written = 0
    for periodo, items in [(1, P1), (2, P2), (3, P3)]:
        for i, item in enumerate(items, start=1):
            path = OUT_DIR / f"10-{periodo}-{i}.yaml"
            path.write_text(render(periodo, i, item), encoding="utf-8")
            written += 1
    print(f"  {written} outlines escritos en {OUT_DIR.relative_to(ROOT)}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
