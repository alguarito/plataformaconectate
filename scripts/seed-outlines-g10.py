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
        "La IA como lector crítico --- qué ve el asistente en tu texto antes de que lo veas tú",
        "Análisis comparativo: tu propia lectura de un texto propio vs. la retroalimentación de la IA sobre el mismo texto + reflexión de 1 párrafo sobre las diferencias",
        "La sabedora del Pacífico escucha el cuento completo antes de decir una palabra. Su primer gesto no es hablar sino mirar: ¿qué falta?, ¿qué sobra?, ¿qué miente? La IA como lector crítico es ese primer gesto ancestral aplicado al texto digital.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Anatomía de un prompt eficaz --- instrucciones que la IA entiende",
        "Bitácora de 6 prompts comparados (débil vs. robusto) sobre el mismo tema + tabla de análisis de qué cambió en el resultado al mejorar cada instrucción",
        "El mambero del cabildo prepara la palabra antes de hablarla: no improvisa, delimita el tema, fija el tono, anticipa la reacción. La instrucción preparada produce la palabra precisa. El prompt eficaz es esa preparación ancestral traducida al lenguaje de los asistentes de IA.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Escritura inversa --- de la respuesta de la IA al prompt que la generó",
        "3 pares texto–prompt reconstruido + reflexión sobre qué revelan esos prompts acerca de las intenciones del autor original",
        "El cuentero del fogón desarmaba los cuentos ajenos para aprender a hacerlos: ¿qué gancho usó?, ¿cuándo aceleró?, ¿cómo cerró? Desmontar para entender es la técnica del aprendiz experto. La escritura inversa es ese desmontaje aplicado a los textos que produce la IA.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
    (
        "Géneros textuales de la empresa --- email, acta e informe con asistencia de IA",
        "1 email corporativo + 1 acta breve + 1 informe de media página, cada uno escrito con asistencia de IA y revisado con criterio propio de género y registro",
        "La secretaria del alcalde de Cartago sabía escribir en tres registros: el oficio formal, la nota interna y el acta del concejo, cada una con su tono. Ese saber de registro múltiple es la competencia clave del asistente administrativo moderno con IA.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "CREA"],
    ),
    (
        "Revisión con IA --- feedback automatizado vs. criterio propio",
        "Documento de 1 página revisado con 2 herramientas de IA distintas + tabla comparativa de sugerencias recibidas + decisión fundamentada de cuáles aplicar y cuáles rechazar",
        "El corrector de pruebas de imprenta del periódico del Valle leía con lupa y tachaba con criterio: no toda señal roja era error, no todo texto limpio era correcto. El ojo crítico del corrector es lo que distingue al editor del que acepta todo lo que propone la máquina.",
        ["ANALIZA", "EVALÚA", "EXPLICA", "APLICA"],
    ),
    (
        "Reformulación y registro --- cómo cambia el tono según el lector",
        "1 mismo mensaje escrito en 4 registros distintos (WhatsApp informal, email al docente, carta al rector, comunicado oficial) con asistencia de IA + análisis de qué cambió en cada versión",
        "El pregonero del mercado de Cartago cambiaba el tono al hablarle al cliente, al proveedor, al inspector de policía y al compadre: misma información, distinta música. Dominar el registro es poder comunicar con precisión sin perder la idea.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "CREA"],
    ),
    (
        "Argumentación asistida --- construir un argumento con IA y defender la posición propia",
        "Texto argumentativo de 3 párrafos (tesis, argumentos, conclusión) escrito con asistencia de IA sobre un dilema real del colegio o la ciudad + defensa oral de 2 minutos sin notas",
        "El abogado del pueblo del Valle usaba la palabra como herramienta de justicia: primero la tesis clara, luego la evidencia concreta, cierre sin ambigüedad. La argumentación con IA es ese oficio aprendido, no improvisado.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Autoría y voz --- qué queda tuyo cuando la IA edita",
        "Texto propio antes y después de edición con IA + análisis de qué elementos de voz (vocabulario, estructura, ejemplos) se conservaron, cuáles se perdieron y cuáles mejoraron",
        "El artesano del Quindío que deja que el aprendiz termine la pieza: al final de la jornada, ¿quién hizo qué? La autoría compartida tiene historia larga en los oficios. La voz propia es lo que distingue al artesano del molde.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Ética de la escritura asistida --- plagio, atribución y declaración de uso",
        "Política de uso responsable de IA en trabajos escritos (1 página) redactada para el grado 10° + 3 casos de dilema ético resueltos con criterios propios",
        "La tradición oral del Pacífico atribuye siempre: «este cuento me lo contó mi tía Ernestina, que lo supo de su abuela.» La cadena de autoría es un acto de justicia. Declarar el uso de IA es la misma cadena en el texto digital.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Portafolio de escritura asistida --- mi proceso documentado",
        "Portafolio digital con 5 piezas escritas del periodo (una por género), cada una con: versión final, bitácora de prompts usados, reflexión de 3 renglones sobre lo aprendido",
        "El portafolio del artesano era la muestra que llevaba al mercado: piezas elegidas, no todas las que hizo. Cada pieza contaba una historia de oficio. El portafolio digital es esa muestra con su historia de proceso incluida.",
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
