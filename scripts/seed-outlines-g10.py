#!/usr/bin/env python3
"""Genera los 30 outlines (completo: false) de Grado 10 en content/guias/10/.

Malla curricular definida por PhD. Álvaro Cárdenas Orozco:
  P1: Escritura inversa con IA
  P2: IA aplicada a ofimática empresarial
  P3: IA aplicada a contabilidad y emprendimiento

Se ejecuta una sola vez como semilla. Después cada outline se expande por
bloques (S1-S3, S4-S6, etc.) siguiendo el contrato MILC v3.
"""
from __future__ import annotations
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "content" / "guias" / "10"

# Cada outline: (titulo, producto_final, saber_ancestral_idea, verbos[4])
P1 = [
    (
        "¿Sobre qué escribirías un libro? --- de la pasión al tema",
        "Mapa de pasiones: 3 temas candidatos con justificación de por qué te apasionan + elección del tema del libro del periodo con una frase que lo presente al lector ideal",
        "El abuelo sabía de qué hablaría toda la noche antes de abrir la boca: su tema era su oficio, su tierra, su historia. Nadie escribe bien sobre lo que le da igual. El primer acto del autor es elegir --- y elegir con honestidad.",
        ["IDENTIFICA", "EXPLICA", "EVALÚA", "CREA"],
    ),
    (
        "Del tema al proyecto editorial --- audiencia, propósito e índice tentativo",
        "Ficha de proyecto del libro: tema, audiencia (quién lo leerá), propósito (para qué existe), índice tentativo de 8-12 capítulos con título y subtema de cada uno",
        "El carpintero del Valle no clava un solo puntillo sin tener el plano completo en la cabeza: sabe cuántas piezas, en qué orden, para qué función. El índice del libro es ese plano --- antes de escribir una palabra, el arquitecto del texto traza la estructura.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EXPLICA"],
    ),
    (
        "Escritura inversa I --- desmontar un libro para entender su arquitectura",
        "Análisis de 1 capítulo de un libro real del género elegido: estructura identificada (gancho, desarrollo, cierre), decisiones del autor anotadas, mapa de cómo está hecho + reflexión de qué vas a replicar en tu propio libro",
        "El cuentero del fogón aprendía escuchando antes de narrar: desarmaba el cuento ajeno en silencio, reconocía el gancho, sentía cuándo aceleró, notaba cómo cerró. Desmontar para entender es la técnica del aprendiz que quiere llegar a maestro.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "IDENTIFICA"],
    ),
    (
        "Escritura inversa II --- reconstruir el prompt que generó un capítulo con IA",
        "3 fragmentos de texto generado con IA + prompt inverso reconstruido para cada uno + bitácora de qué instrucciones producen capítulos de calidad vs. capítulos genéricos",
        "El tejedor del Pacífico mira el patrón del otro y reconstruye mentalmente el camino del hilo: ¿dónde empezó?, ¿cómo cruzó?, ¿qué tensión mantuvo? Reconstruir el proceso ajeno es la vía más rápida para dominar el propio.",
        ["ANALIZA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "El prompt autoral --- instrucciones de calidad para capítulos de calidad",
        "Bitácora de 5 prompts refinados para el libro propio: cada uno con versión débil, versión robusta y comparación del resultado + primeras 3 páginas del capítulo 1 generadas con el mejor prompt",
        "El mambero del cabildo prepara la palabra antes de hablarla: no improvisa, delimita el tema, fija el tono, anticipa la reacción del oyente. La instrucción preparada produce la palabra precisa. El prompt autoral es esa preparación llevada al texto largo.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "CREA"],
    ),
    (
        "Voz propia + IA --- conservar tu identidad en el texto generado",
        "Capítulo 1 completo (8-10 páginas): borrador generado con IA + intervenciones del autor marcadas (qué se cambió, qué se añadió, qué se eliminó) + reflexión de 1 párrafo sobre dónde está tu voz en el texto",
        "El artesano del Quindío que deja que el aprendiz talle la pieza: al final de la jornada sabe exactamente qué fue suyo y qué fue del aprendiz. La voz propia no desaparece porque haya asistencia --- desaparece cuando el autor no presta atención.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Escribo mi libro I --- capítulos 2, 3 y 4 con flujo IA asistido",
        "Capítulos 2, 3 y 4 del libro (8-10 páginas cada uno, total 24-30 páginas nuevas) + bitácora de proceso: prompt usado por capítulo, tiempo invertido, decisiones de edición tomadas",
        "El albañil levanta el muro hilada a hilada: no espera tener todo el material antes de empezar ni para cuando la mezcla está fresca. Escribir un libro con IA tiene el mismo ritmo --- capítulo terminado, siguiente capítulo, sin romper el flujo.",
        ["APLICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Escribo mi libro II --- capítulos 5, 6, 7 y 8 con rigor e investigación",
        "Capítulos 5 al 8 del libro (8-10 páginas cada uno, total 32-40 páginas nuevas) + mínimo 5 fuentes verificadas citadas en el texto + bitácora de cómo la IA ayudó a investigar sin reemplazar el criterio propio",
        "El cronista del Valle del Cauca preguntaba, anotaba, verificaba antes de publicar: la palabra impresa tenía peso porque detrás había rigor. Cuando el libro toca hechos, nombres o datos, la investigación es el honor del autor --- la IA puede buscar, pero tú confirmas.",
        ["APLICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Revisión editorial --- coherencia, voz y estructura del libro completo",
        "Libro completo revisado: mapa de coherencia (cada capítulo conecta con el anterior), 10 intervenciones de edición documentadas con antes/después + declaración de uso responsable de IA de 1 página",
        "La partera del Pacífico revisa el bebé de pies a cabeza antes de entregarlo a la madre: nada al azar, todo con orden. El editor hace lo mismo con el libro: lo recorre entero, lo afina, lo deja listo para el lector. Sin esa revisión, el libro no está terminado.",
        ["ANALIZA", "EVALÚA", "APLICA", "EXPLICA"],
    ),
    (
        "Mi libro --- entrega del libro completo y presentación autoral",
        "Libro terminado de mínimo 80 páginas en documento digital (PDF o Word): portada, índice, cuerpo de capítulos, declaración de autoría + presentación oral de 5 minutos al grupo contando de qué trata, por qué lo elegiste y qué aprendiste escribiéndolo",
        "El día del mercado el artesano expone su pieza maestra: no la explica con disculpas, la muestra con orgullo y dice lo que costó hacerla. El libro de 80 páginas es esa pieza maestra de décimo grado --- el primer libro que alguien de 15 años escribe con nombre propio.",
        ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
    ),
]

P2 = [
    (
        "Hojas de cálculo con inteligencia --- de fórmulas manuales a análisis asistido",
        "Hoja de cálculo empresarial con 5 métricas clave (ventas, costos, margen, crecimiento, proyección) calculadas con fórmulas + análisis narrativo generado con IA de los hallazgos",
        "El tendero del barrio Obrero llevaba su cuaderno de cuentas de memoria y en papel: suma nocturna, margen estimado, proyección del lunes. La hoja inteligente con IA es ese cuaderno hecho preciso, rápido y comparable mes a mes.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Bases de datos empresariales --- organizar, consultar y mantener información",
        "Base de datos de empresa simulada (clientes, productos, ventas) en Excel o Sheets con 30+ registros + 5 consultas respondidas con filtros y tablas dinámicas + resumen con IA",
        "La notaría de Cartago: donde cada dato tiene orden, fecha, firma y número de folio. El notario no busca en el azar --- busca en el registro. Una base de datos empresarial bien organizada es esa notaría digital que no pierde nada.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Email y comunicaciones corporativas --- redacción asistida con tono profesional",
        "5 emails corporativos redactados con IA y revisados con criterio propio (solicitud, respuesta formal, reclamo, seguimiento, comunicado interno) + tabla de elementos de tono analizados",
        "El telegrafista del Pacífico escribía mensajes cortos, precisos, sin adornos: cada palabra tenía costo y urgencia. El email corporativo moderno tiene la misma economía de la palabra que el telegrama --- la IA no lo justifica más largo.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "CREA"],
    ),
    (
        "Presentaciones ejecutivas --- estructura de alto impacto con apoyo de IA",
        "Presentación de 8 slides sobre empresa simulada con estructura ejecutiva (problema, solución, mercado, modelo, financiero, equipo, traction, llamado a la acción) diseñada con IA + defensa oral de 5 minutos",
        "El orador del cabildo indígena presentaba sus argumentos de mayor a menor urgencia, cerraba con la acción pedida. Esa lógica de estructura oral es la misma que hace efectiva una presentación ejecutiva: primero lo más importante, último el llamado.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Automatización de tareas repetitivas --- macros y flujos con IA",
        "1 macro de Excel que automatice una tarea repetitiva real (formato de informe, limpieza de datos, envío de reporte) + descripción del tiempo ahorrado + análisis de qué decisiones NO puede tomar la automatización",
        "La costurera con pedal: cada pasada igual, cada pieza exacta, el pie nunca para. La repetición perfecta liberaba las manos para hacer lo que la máquina no podía. La automatización es ese pedal --- libera para pensar, no para descansar.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Análisis de datos con IA --- tendencias, pronósticos y visualizaciones",
        "Conjunto de datos reales de empresa o institución (ventas mensuales, asistencia, consumo) analizado con IA + 3 gráficos de tendencia + pronóstico a 3 meses con intervalo de confianza explicado en lenguaje sencillo",
        "El observador del río Cauca leía el nivel del agua con tres señales: el color, la velocidad y el ruido del caudal. Esas tres señales combinadas decían lo que ninguna sola podía. El análisis de tendencias con IA es esa lectura combinada de señales.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Gestión de proyectos digitales --- Trello, Notion y herramientas con IA integrada",
        "Proyecto del grado organizado en Trello o Notion con tablero kanban, asignación de roles, fechas límite y uso de IA para redactar las tarjetas de tarea + retrospectiva del equipo al cerrar",
        "La minga del Cauca: todos coordinados con roles claros, sin jerarquía innecesaria, sin nadie doblando lo que otro ya hizo. La minga funciona porque la tarea de cada uno es visible para todos. El tablero kanban es la minga digital.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Seguridad de la información empresarial --- amenazas, protocolos y responsabilidad",
        "Mapa de amenazas digitales de una PYME simulada (phishing, malware, acceso no autorizado, fuga de datos) + protocolo de 5 pasos para respuesta ante incidente + política de contraseñas del equipo",
        "La llave de dos pasos en la caja fuerte del municipio: doble firma, doble llave, doble testigo. Ninguna decisión sobre el dinero del pueblo la tomaba una sola persona. La seguridad de la información empresarial opera con la misma lógica del doble control.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Informe de gestión con IA --- estructura, datos y narrativa para decisores",
        "Informe de gestión de 2 páginas de la empresa simulada del periodo (incluye: resumen ejecutivo, indicadores clave, análisis de variación, conclusión y recomendación) redactado con asistencia de IA y datos reales del tablero",
        "El informe del inspector de policía de Cartago: seco, preciso, sin adornos --- los hechos primero, la interpretación al final, la recomendación al cierre. Ese formato de informe sin ornamento es el que leen los decisores. La IA puede redactarlo, pero el criterio es tuyo.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "CREA"],
    ),
    (
        "Proyecto integrador P2 --- empresa simulada con suite ofimática + IA",
        "Empresa simulada completa del periodo: base de datos de 50+ registros + informe de gestión + presentación ejecutiva de 8 slides + automatización de 1 tarea + declaración de uso responsable de IA",
        "La feria de emprendedores del Valle: cada puesto es una empresa pequeña que muestra su producto, su precio, su historia. El proyecto integrador es ese puesto de feria --- todo lo del periodo visible en un solo lugar con coherencia.",
        ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
    ),
]

P3 = [
    (
        "Contabilidad básica con IA --- activos, pasivos, patrimonio y primer balance",
        "Hoja de balance de empresa simulada con 10 activos, 5 pasivos y patrimonio calculado + verificación con ecuación contable fundamental + análisis narrativo generado con IA",
        "La natillera del barrio: cada quien pone su parte al fondo común, todos saben cuánto hay, todos conocen los compromisos. Ese saber colectivo de la caja es la contabilidad básica antes de que existieran balances formales.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "ANALIZA"],
    ),
    (
        "Presupuesto personal y empresarial --- planear con IA y controlar sin perder el hilo",
        "Presupuesto mensual de empresa simulada (ingresos proyectados, gastos fijos, gastos variables, ahorro meta) + comparación real vs. proyectado al cierre del mes + análisis de variación con IA",
        "El presupuesto del papá aguinaldo: planear la fiesta sin endeudarse, saber antes de diciembre cuánto hay, cuánto falta y qué se puede y qué no. Esa disciplina de la planeación festiva es la misma del presupuesto empresarial --- solo que todo el año.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Flujo de caja --- el pulso financiero del negocio monitoreado con IA",
        "Flujo de caja proyectado a 3 meses de empresa simulada + identificación de 2 meses de riesgo de saldo negativo + propuesta de acción correctiva con argumentos financieros",
        "El flujo del río Dagua: cuando baja es sequía y los cultivos se resienten, cuando sube es abundancia pero también riesgo de desborde. La clave no es que fluya --- es medir, anticipar y actuar antes de que sea tarde. El flujo de caja es ese río del negocio.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Análisis financiero básico --- rentabilidad, liquidez y solvencia",
        "Análisis de 3 indicadores financieros (margen bruto, razón corriente, índice de endeudamiento) aplicados a empresa simulada + interpretación en lenguaje sencillo + recomendación de un decisor",
        "La pesa y el ojo del comerciante del Pacífico: dos herramientas de análisis simultáneas, ninguna suficiente sola. La pesa dice el peso exacto; el ojo dice si la pieza tiene defecto. El análisis financiero combina la pesa (los números) con el ojo (el criterio).",
        ["IDENTIFICA", "EXPLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Plan de negocios asistido por IA --- del problema al modelo en 8 pasos",
        "Plan de negocios de 4 páginas (problema, solución, propuesta de valor, segmento, canales, fuentes de ingreso, costos clave, indicadores de éxito) redactado con asistencia de IA sobre una idea de negocio local real",
        "El plan de la finca cafetera del norte del Valle: antes de sembrar, el caficultor decide variedad, sombra, distancia, mercado. Son 8 decisiones que determinan el resultado 3 años después. El plan de negocios es esa planeación de la siembra aplicada a la empresa.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Marketing digital con IA --- contenido, redes y campañas con criterio empresarial",
        "Estrategia de contenido de 1 mes para empresa simulada: 12 piezas de contenido (4 por semana) + calendario editorial + análisis de métricas esperadas con IA + reflexión sobre qué no puede decidir la IA en la estrategia",
        "El pregonero del mercado de Cartago: sabía qué decir, cuándo decirlo, a quién. No anunciaba el pescado cuando ya había pasado el mediodía. El marketing digital con IA es ese pregonero con calendario, métricas y audiencia segmentada.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Investigación de mercados con IA --- clientes, competencia y oportunidades locales",
        "Informe de investigación de mercado del sector de la empresa simulada: 3 competidores analizados, 1 encuesta de 10 preguntas aplicada a 15 personas + análisis de resultados con IA + oportunidad de diferenciación identificada",
        "El señor de las ferias del Cauca llegaba al pueblo la víspera: sabía antes de instalar el puesto qué había demanda y a qué precio vendían los otros. Ese saber previo es la investigación de mercados --- llegar sabiendo, no llegando a ver.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Tableros de control financiero --- dashboards que dicen la verdad del negocio",
        "Dashboard en Google Sheets o Looker Studio con 6 indicadores clave de empresa simulada (ventas, costos, margen, flujo, clientes nuevos, retención) + lectura narrativa de 1 párrafo generada con IA + análisis propio de 1 alerta detectada",
        "El libro de cuentas del almacén de telas del centro de Cartago: una sola mirada al cuaderno y el dueño sabía si el mes fue bueno o malo. El dashboard es ese cuaderno hecho visual, dinámico y con alertas automáticas --- mismo propósito, otra forma.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Ética empresarial y responsabilidad social en el emprendimiento digital",
        "Análisis de 2 casos reales de empresa con prácticas cuestionables (datos, trabajo, medio ambiente) + código de ética de 10 puntos para la empresa simulada + declaración de impacto social del emprendimiento propio",
        "El comercio justo del Pacífico: precio honesto, trato digno, sin intermediarios que se quedan con la mitad. Esa ética del comercio directo es la misma que define hoy la responsabilidad social empresarial --- solo que ahora tiene nombre legal y consecuencias digitales.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Proyecto final --- empresa digital completa con plan, análisis y pitch con IA",
        "Empresa digital completa: plan de negocios (4 pág.) + balance inicial + flujo de caja 3 meses + dashboard de 6 indicadores + pitch de 5 minutos + declaración de uso responsable de IA en todo el proceso",
        "La cooperativa cafetera del norte del Valle: modelo completo con propósito colectivo, plan de siembra, análisis de costos, mercado destino, distribución de ganancias y código de conducta. El proyecto final es esa cooperativa en versión digital de décimo grado.",
        ["ANALIZA", "EVALÚA", "CREA", "EXPLICA"],
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
