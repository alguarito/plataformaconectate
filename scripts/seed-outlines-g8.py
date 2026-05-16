#!/usr/bin/env python3
"""Genera los 30 outlines (completo: false) de Grado 8 en content/guias/8/.

Usa la malla curricular levantada desde los TS legacy (src/data/guiasContenido/8-*.ts)
y agrega anclas ancestrales del Valle del Cauca / Pacífico colombiano.

Se ejecuta una sola vez como semilla. Después cada outline se expande por
bloques (S1-S3, S4-S6, etc.) siguiendo el contrato MILC v3.
"""
from __future__ import annotations
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "content" / "guias" / "8"

# Cada outline: (titulo, producto_final, saber_ancestral_idea, verbos[4])
P1 = [
    (
        "Phronesis con datos --- preguntar antes de calcular",
        "5 preguntas prudentes a un conjunto de datos del entorno escolar + decisión razonada de qué calcular y qué dejar fuera",
        "Antes de cocinar el grano, las abuelas del Valle lo pesaban y lo miraban: lo bueno por un lado, lo malo por otro, lo dudoso aparte. La phronesis del dato moderno es esa pesa silenciosa: preguntar antes de calcular.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "EXPLICA"],
    ),
    (
        "Tipos de datos y formato de celdas en Excel",
        "Hoja Excel con 5 columnas de tipos distintos (número, texto, fecha, moneda, porcentaje) formateadas correctamente, con captura del antes/después",
        "El carpintero clasifica la madera por tipo antes de cortar: cedro para puertas, guayacán para vigas, balso para juguetes. Cada material tiene su uso; cada dato también.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Tablas de datos --- campos, registros y limpieza con bitácora",
        "Tabla de 20 registros con campos limpios + bitácora de 5 errores corregidos (espacios extra, mayúsculas, fechas mal formateadas, duplicados, vacíos)",
        "La cocinera lava los granos antes de molerlos: el frijol se limpia antes de cocinar, el café se selecciona antes de tostar. Limpiar datos es la misma disciplina aplicada a hojas de cálculo.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EXPLICA"],
    ),
    (
        "SUMA, PROMEDIO, MAX, MIN --- 4 funciones que dirigen decisiones",
        "Hoja con las 4 funciones aplicadas a un conjunto real (notas, gastos, ventas, temperaturas) + 1 decisión razonada apoyada en cada función",
        "El tendero del barrio Obrero suma cada noche la caja, promedia las ventas de la semana, mira el día con más venta (MAX) y el más flojo (MIN) para decidir qué pedir el lunes. Las 4 funciones de Excel son ese cuaderno del tendero formalizado.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Referencias relativas y absolutas en Excel",
        "Hoja con cálculo de IVA y descuento usando referencias absolutas para los porcentajes + tabla multiplicada con referencias relativas que se arrastra correctamente",
        "El maestro alfarero del Quindío fija el patrón en arcilla antes de copiarlo: ese molde no se mueve, las piezas se ajustan a él. La referencia absoluta es ese molde digital; la relativa es la pieza que se adapta.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Fórmulas compuestas --- operadores, porcentajes y jerarquía PEMDAS",
        "Hoja con 5 fórmulas compuestas que aplican PEMDAS correctamente + 3 ejemplos de error de jerarquía corregidos con paréntesis",
        "El albañil de Cartago sigue orden estricto en la mezcla: primero arena, después cemento, luego agua, nunca al revés. Cambiar el orden produce una mezcla inútil. La jerarquía PEMDAS es esa receta para las fórmulas.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Gráficos básicos --- barras, líneas y circulares con honestidad visual",
        "3 gráficos (barras, líneas, circular) del mismo conjunto de datos + análisis de cuál comunica mejor según el propósito + crítica de 1 gráfico engañoso del periódico",
        "El pregonero del mercado siempre mostraba la pesa al cliente: la pesa visible era prueba de honestidad. El gráfico honesto es la pesa moderna; el gráfico engañoso es la pesa trucada que los mayores siempre denunciaron.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Formato condicional y validación de datos --- alertas visibles",
        "Hoja con formato condicional aplicado a 3 columnas + validación que impide ingresar datos incorrectos + simulación de 5 intentos de error bloqueados",
        "El semáforo del mercado de Cartago avisa con color antes de que pase el problema: rojo cuando hay pelea, verde cuando hay calma. El formato condicional es ese semáforo aplicado a la hoja de cálculo: el problema se ve antes de que ocurra.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Mini-estudio de datos del entorno escolar",
        "Estudio completo en 8 etapas (pregunta, hipótesis, recolección, limpieza, cálculo, gráfico, hallazgo, decisión) sobre un tema real del colegio (cafetería, tiempo de pantalla, gastos de transporte)",
        "El observador del barrio que cuenta y compara: el sereno que sabe cuántos extraños pasan en una semana, la abuela que cuenta cuántos venden empanada en la cuadra. Observar con disciplina es la primera forma del análisis de datos.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Sustentación del mini-estudio --- 4 minutos de phronesis comunicativa",
        "Sustentación oral de 4 minutos del mini-estudio del periodo + 5 preguntas de la audiencia respondidas con honestidad + autoevaluación de 1 fortaleza y 1 mejora",
        "El aprendiz cuenta a los mayores lo que aprendió en el oficio: la sustentación oral es ritual antiguo, la phronesis comunicativa es la versión moderna de la honestidad del cuentista del fogón.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]

P2 = [
    (
        "Lógica avanzada --- if-else con AND, OR y NOT",
        "Tabla de decisión en pseudocódigo + 3 algoritmos de decisión cotidiana (semáforo, riego automático, alarma escolar) escritos con if-else anidados",
        "Decisión del campesino del Cauca: si llueve y la tierra está dura, espero; si llueve y la tierra está blanda, cosecho; si no llueve, riego. La sabiduría rural ya operaba con lógica compuesta antes de que existieran computadores.",
        ["IDENTIFICA", "EXPLICA", "APLICA", "EVALÚA"],
    ),
    (
        "Tablas de verdad --- AND, OR, NOT explicadas como reglas universales",
        "Tabla de verdad completa de AND, OR, NOT + 3 situaciones reales del colegio modeladas con tablas de verdad + 1 error lógico común analizado",
        "La sabiduría del juez tradicional del cabildo: para condenar se necesitan dos pruebas (AND); para absolver basta una duda (OR); para mantener la justicia, ninguna mentira (NOT). La lógica formal nombra reglas que las comunidades aplicaron siglos antes.",
        ["IDENTIFICA", "EXPLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Algoritmos --- del pseudocódigo al diagrama de flujo",
        "1 algoritmo cotidiano (preparar arepa, llegar al colegio, decidir qué ropa usar) escrito en pseudocódigo + traducido a diagrama de flujo con símbolos correctos",
        "La receta de la abuela es algoritmo ancestral: \"primero pelas el plátano, después lo cortas; si está verde, lo fríes; si está maduro, lo asas.\" El diagrama de flujo es esa receta ordenada en cajas y flechas.",
        ["IDENTIFICA", "EXPLICA", "CREA", "EVALÚA"],
    ),
    (
        "Sensores en MakeCode --- el micro:bit que siente",
        "Programa en MakeCode que use 2 sensores del micro:bit (luz, temperatura, botón, movimiento) para disparar 1 acción + bitácora de pruebas con 5 escenarios",
        "El perro guardián de la finca siente lo que el dueño no: huele el extraño antes de verlo, escucha el ruido antes de que llegue al patio. El sensor del micro:bit es ese perro digital: percibe el mundo y avisa.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Actuadores --- LEDs, sonido y coreografía",
        "Programa en MakeCode con secuencia coreográfica de LEDs + tono musical sincronizado + lazo de repetición controlado por botón",
        "La campana del pueblo y el faro del puerto: dos actuadores antiguos que comunican a distancia. La campana suena para anunciar, el faro brilla para guiar. Los LEDs y el sonido del micro:bit hacen lo mismo a escala de tu mano.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Sensores con variables, umbrales y calibración",
        "Programa que lea sensor de luz y dispare alerta cuando cruce umbral calibrado + bitácora de calibración con 5 mediciones de baseline",
        "El termómetro de la curandera del Pacífico tenía marca propia: \"si la frente está más caliente que mi mano y la respiración rápida, hay fiebre.\" El umbral es esa marca personal que separa lo normal de lo que exige acción.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Depuración --- buscar el error como el relojero busca el tic-tac",
        "Programa con 3 bugs intencionales corregidos paso a paso + bitácora de depuración (hipótesis, prueba, resultado) por cada bug",
        "El relojero del centro de Cartago abría el reloj viejo, escuchaba, paraba la mano que sobraba, ajustaba un engranaje a la vez. Nunca tocaba dos piezas simultáneas. La depuración digital es ese oficio: una hipótesis, una prueba, un resultado.",
        ["IDENTIFICA", "ANALIZA", "APLICA", "EVALÚA"],
    ),
    (
        "Alertas con lógica compuesta --- validación con escenarios",
        "Sistema de alerta que combine 2-3 sensores con AND/OR/NOT + tabla de 8 escenarios (verdaderos y falsos) verificados en el micro:bit",
        "El centinela del puerto del Pacífico tenía 3 alertas: \"si veo barco grande Y bandera roja\", alerta máxima; \"si veo niebla O lluvia fuerte\", alerta moderada; \"si NO hay viento favorable\", alerta de retraso. La lógica compuesta vivía en la observación combinada.",
        ["IDENTIFICA", "APLICA", "ANALIZA", "EVALÚA"],
    ),
    (
        "Proyecto de monitoreo --- el micro:bit como vigía",
        "Proyecto funcional que monitoree 1 variable real del entorno escolar (temperatura del aula, ruido de la cafetería, paso de personas) con bitácora de 3 días de datos",
        "El vigía nocturno del barrio recorre, escucha, cuenta, anota: una vuelta cada hora. Los datos del vigía dicen si pasó algo o todo estuvo en calma. El proyecto de monitoreo es ese oficio del vigía hecho con sensores.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Sustentación del proyecto técnico --- honestidad del oficio",
        "Sustentación de 5 minutos del proyecto de monitoreo + demo en vivo + declaración honesta de 2 cosas que funcionaron y 1 que aún falla",
        "El relojero entrega la pieza al cliente: explica lo que funciona, declara lo que aún ajusta, promete mejorar. La honestidad técnica del oficio antiguo es la misma honestidad que pide la sustentación de un proyecto computacional moderno.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]

P3 = [
    (
        "Multimedia --- diseño visual y jerarquía de información",
        "1 pieza visual (afiche o post para redes) sobre un tema escolar real con jerarquía clara (título, subtítulo, cuerpo, llamada a la acción) + crítica de 1 afiche mal diseñado",
        "El tejedor del Pacífico ordena los patrones del telar: el motivo central, los laterales, el borde. Nada es aleatorio; cada hilo tiene función. El diseño visual moderno es ese tejido aplicado a pantalla.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Animaciones e hipervínculos --- narrativa interactiva",
        "Presentación interactiva (Genially, Canva, Slides) con 5+ slides conectadas por hipervínculos no lineales + 3 animaciones que apoyen el contenido",
        "El cuentero del fogón hilaba historias conectadas: \"y entonces el tigre dijo... pero antes les cuento de la vez que...\". El cuento ancestral ya era hipertexto. La narrativa interactiva digital lo formaliza.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Narrativa de alto impacto --- estructura TED-style",
        "Discurso TED-style de 3 minutos sobre un tema personal + guion con estructura de 3 actos (gancho, desarrollo, cierre) + grabación con celular",
        "El abuelo capturaba la atención del fogón en 30 segundos: empezaba con una imagen, desarrollaba con un conflicto, cerraba con una lección. La estructura TED es esa narrativa ancestral con cronómetro.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Edición de imagen --- ética visual y derechos de imagen",
        "1 imagen editada con herramientas básicas (recorte, brillo, contraste, texto) + autoevaluación ética del uso de la imagen (¿hay rostro?, ¿hay permiso?, ¿se altera el sentido?)",
        "El pintor de carteles del centro respetaba la imagen del retratado: nunca burla, nunca mentira sobre quién era. Esa ética visual del oficio antiguo es la misma que pide la edición digital responsable.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Audio --- captura, edición y formatos",
        "1 pieza de audio de 1-2 min (entrevista, podcast corto, narración) grabada y editada con Audacity o app móvil + exportada en 2 formatos",
        "El radio cumbero del Valle del Cauca capturaba la voz del cantor, editaba para que sonara clara, lo difundía a todo el departamento. La captura y edición de audio digital es ese oficio del operador de radio aplicado al celular.",
        ["IDENTIFICA", "APLICA", "CREA", "EVALÚA"],
    ),
    (
        "Ciberbullying --- prevención y Línea 141",
        "Mapa visual del flujo de ciberbullying (señales, escalada, denuncia) + plan personal de respuesta + cartel para el aula con la Línea 141 del ICBF",
        "La protección de los menores en el resguardo indígena: cuando un joven sufría en silencio, la comunidad entera intervenía. La Línea 141 es esa intervención moderna; conocerla es responsabilidad de comunidad digital.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Grooming y sexting --- riesgos digitales y Ley 1336",
        "Análisis de 3 casos reales de grooming/sexting publicados en prensa + protocolo personal de prevención de 5 pasos + ficha de la Ley 1336 de 2009",
        "La advertencia de los mayores ante el extraño: \"no aceptes dulces de quien no conoces, no subas a auto desconocido, no te dejes llevar por la promesa fácil.\" La Ley 1336 traduce esa advertencia al entorno digital con consecuencias legales.",
        ["IDENTIFICA", "ANALIZA", "EVALÚA", "CREA"],
    ),
    (
        "Estética de la liberación --- cultura popular y producción ética",
        "1 pieza visual o de video sobre un tema de la cultura popular vallecaucana (salsa, comida, oficios, fiestas) + análisis Dussel-style del público al que dignifica",
        "El mural barrial pintado por jóvenes del Distrito de Aguablanca: cada figura es voz del pueblo que el sistema invisibilizó. La estética de la liberación es ese mural llevado al medio digital con la misma intención.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Proyecto integrador comunitario --- voz para el cambio social",
        "Pieza multimedia (video, podcast, infografía animada) sobre un problema real del barrio o colegio + entrevista a 1 afectado + propuesta de mejora documentada",
        "El comunero que documenta su lucha: con la cámara prestada, el grabador del compañero, la libreta. La documentación comunitaria es el ejercicio multimedia con propósito de transformación, no de adorno.",
        ["IDENTIFICA", "ANALIZA", "CREA", "EVALÚA"],
    ),
    (
        "Sustentación pública y portafolio digital del grado 8",
        "Sustentación pública de 10 minutos del proyecto integrador + portafolio digital con piezas seleccionadas de los 3 periodos + carta abierta de cierre del grado",
        "La graduación del aprendiz frente a los mayores del oficio: el aprendiz expone su pieza maestra, los maestros preguntan, miran, juzgan. La sustentación pública es ese ritual ancestral moderno; el portafolio es la pieza maestra digital.",
        ["ANALIZA", "EXPLICA", "EVALÚA", "CREA"],
    ),
]


def render(periodo: int, sesion: int, item: tuple) -> str:
    titulo, producto, saber, verbos = item
    verbos_yaml = "\n".join(f"- {v}" for v in verbos)
    return f"""clave: {periodo}-{sesion}
grado: 8
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
            path = OUT_DIR / f"8-{periodo}-{i}.yaml"
            path.write_text(render(periodo, i, item), encoding="utf-8")
            written += 1
    print(f"  {written} outlines escritos en {OUT_DIR.relative_to(ROOT)}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
