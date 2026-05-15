/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 6
 * Tema: Gráficos — la imagen de los datos.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-6.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 6,
  titulo: 'Gráficos — la imagen de los datos',
  ocultarPDF: false,
  resumen:
    'Un gráfico convierte la tabla en imagen para que el ojo lea de un vistazo. Aprendes los 3 tipos básicos (barras, líneas, circular) y a justificar por qué elegiste cada uno.',
  duracionMin: 90,
  subtema: 'Datos · La imagen como argumento',

  saberAncestral: {
    saber:
      'Antes del gráfico de barras existieron los mapas grabados en piedra de los pueblos andinos para mostrar caminos y cosechas, los dibujos en arena de los pescadores afro-pacíficos para explicar corrientes, los esquemas de la abuela campesina con un palo en el suelo, y los tejidos Wayuu cuyos rombos cuentan historias. Visualizar datos es gesto humano antiguo. El software cambió el medio, pero la pregunta sigue siendo: ¿cómo le muestro a otro lo que yo ya vi en los números?',
    fuente: 'Mapas andinos en piedra, dibujos en arena del Pacífico, esquemas campesinos y tejidos Wayuu',
    preguntaPuente:
      '¿Cómo hacía el pescador afro-pacífico para enseñar la corriente con un solo dibujo en la arena? ¿Y qué pierde un analista novato cuando hace un gráfico bonito sin haber escrito antes la pregunta que el gráfico debe responder?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Visualizar es gesto antiguo', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: '¿Qué entendiste de este gráfico?', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de un gráfico', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '3 gráficos con justificación', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Casi toda noticia económica, política o de salud llega al ciudadano a través de un gráfico. Saber elegir el tipo correcto y detectar trampas visuales es alfabetización ciudadana básica del siglo XXI.',
    preguntaDetonante:
      'Si dos gráficos muestran los mismos datos pero uno tiene el eje Y cortado, ¿qué pasa con la conclusión del lector?',
    activacion: {
      titulo: 'Tres gráficos, una sola verdad',
      descripcion:
        'En 3 minutos: el docente muestra 3 gráficos del mismo dataset (uno honesto, uno con eje cortado, uno circular con 12 porciones). Los estudiantes anotan qué entendieron antes de ver la tabla original.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 5 agrupaste y comparaste con una tabla dinámica. Hoy le pones imagen a esa agrupación.',
      siguiente:
        'En la sesión 7 vas a comunicar conclusiones con narrativa de datos — el gráfico como argumento, no como decoración.',
    },
  },

  conceptosClave: [
    {
      termino: 'Gráfico de barras',
      definicion:
        'Compara categorías que NO son tiempo. Eje X = categorías, eje Y = valor. El eje Y debe arrancar en cero para no engañar.',
      ejemplo:
        'Horas asignadas a cada área (Matemática, Lenguaje, Tecnología, Sociales) → barras.',
      emoji: '📊',
    },
    {
      termino: 'Gráfico de líneas',
      definicion:
        'Muestra evolución en el tiempo. Eje X = fecha o periodo ordenado, eje Y = valor. Conectar puntos sin orden temporal es error.',
      ejemplo:
        'Promedio de notas mes a mes durante el periodo → líneas.',
      emoji: '📈',
    },
    {
      termino: 'Gráfico circular (pie)',
      definicion:
        'Muestra participación sobre un total. Funciona con 3-5 porciones (máximo 7); más porciones lo vuelven ilegible.',
      ejemplo:
        '% del gasto en transporte, alimentación, útiles y ahorro → circular.',
      emoji: '🥧',
    },
    {
      termino: 'Eje Y arranca en cero',
      definicion:
        'Regla básica para barras y líneas. Cortar el eje Y exagera diferencias y manipula la lectura. Si lo cortas, decláralo.',
      ejemplo:
        'Si el rango va de 95 a 99 y el eje arranca en 90, una caída pequeña parece colapso.',
      emoji: '🛡️',
    },
    {
      termino: 'Título descriptivo',
      definicion:
        'Dice qué muestra el gráfico, no qué tipo es. "Gasto mensual en transporte" sí; "Gráfico de barras 1" no.',
      ejemplo:
        '"Notas promedio por curso (periodo 3)" frente a "Gráfico 2".',
      emoji: '🏷️',
    },
    {
      termino: 'Justificación por tipo',
      definicion:
        'Cada gráfico se acompaña de 1-2 frases que digan por qué ese tipo y no otro. Sin justificación, el gráfico es decoración.',
      ejemplo:
        '"Elegí líneas porque comparo cómo evoluciona mes a mes; barras separadas no mostrarían la tendencia."',
      emoji: '💡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '¿Qué entendiste de este gráfico?',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los 3 gráficos proyectados sin ver la tabla detrás.',
        'Para cada uno anota: qué pregunta parece responder, qué conclusión sacarías a primera vista, qué te resulta sospechoso o confuso.',
        'Cuando se muestren las tablas reales, compara con tu lectura inicial.',
        'Anota cuál gráfico era confiable y cuáles te engañaron, y por qué.',
      ],
      cuaderno: {
        titulo: '¿Qué entendiste de este gráfico?',
        formato: 'Tabla 3 filas (uno por gráfico) × 3 columnas (Pregunta | Conclusión | Qué cambió al ver la tabla)',
        extension: '3 filas + 1 línea de cierre',
      },
      criterios: [
        'Anoté qué pregunta parecía responder cada gráfico',
        'Anoté la conclusión inicial sin ver la tabla',
        'Identifiqué cuál engañaba y por qué',
        'Reconozco que un mismo dato puede contar dos historias',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía de un gráfico',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 3 fichas, una por tipo (barras, líneas, circular).',
        'En cada ficha: pregunta que responde + cuándo elegirlo + cuándo NO + 1 error frecuente.',
        'Anota tu ejemplo personal: qué pregunta de tu tabla resolverías con cada tipo.',
        'Marca con 🚫 los usos abusivos típicos (eje cortado, pie con 15 porciones, línea sin tiempo).',
      ],
      cuaderno: {
        titulo: 'Anatomía de un gráfico',
        formato: '3 fichas (barras, líneas, circular) con pregunta + cuándo sí + cuándo no + error',
        extension: '3 fichas + 1 marca de uso abusivo',
      },
      criterios: [
        'Las 3 fichas tienen los 4 elementos',
        'Cada ficha tiene un ejemplo propio',
        'Identifico al menos un uso abusivo común',
        'Podría elegir el tipo correcto sin consultar',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: '3 gráficos con justificación',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe 3 preguntas, una por tipo de gráfico, antes de insertar nada.',
        'Genera barras (categorías no temporales), líneas (evolución temporal) y circular (participación sobre total).',
        'Configura título descriptivo y unidades en ejes; verifica que el eje Y arranque en cero.',
        'Escribe 1-2 frases de justificación por cada gráfico: por qué ese tipo y no otro.',
      ],
      cuaderno: {
        titulo: 'Mis 3 gráficos con justificación',
        formato: '3 fichas con pregunta + tipo + captura descrita + justificación 1-2 frases',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '3 preguntas escritas antes de crear',
        '3 gráficos, uno de cada tipo',
        'Títulos descriptivos y ejes con unidad',
        'Eje Y arranca en cero (o justificación declarada)',
        '3 justificaciones que nombren por qué ese tipo y no otro',
      ],
    },
    {
      numero: 4,
      verbo: 'APLICA',
      titulo: 'Audita un gráfico de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu ficha de los 3 gráficos.',
        'Para cada gráfico del compañero, audita: ¿el tipo coincide con la pregunta?, ¿el eje Y arranca en cero?, ¿el título describe?',
        'Marca ✨ los aciertos y 🚩 los problemas, con 1 frase de justificación cada uno.',
        'Conversen 5 min: ¿qué categoría quedó en "otros" en el circular y cómo afectaría a la lectura?',
      ],
      cuaderno: {
        titulo: 'Auditoría de los gráficos de [nombre]',
        formato: '3 marcas + 3 observaciones + 1 nota sobre "otros"',
        extension: '3 auditorías + 1 observación',
      },
      criterios: [
        'Las 3 auditorías tienen justificación',
        'Identifico al menos 1 acierto y 1 problema en total',
        'La conversación cerró con una sugerencia accionable',
        'Reconozco el efecto de la categoría "otros"',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica gráficos',
      instrucciones:
        '5 preguntas para confirmar que eliges gráficos con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Para comparar el gasto mensual de 5 áreas en un mismo periodo, ¿qué gráfico eliges?',
          opciones: ['Líneas', 'Barras', 'Circular', 'Dispersión'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Categorías que no son tiempo se comparan con barras. Líneas conectaría datos sin relación temporal.',
          feedbackIncorrecto:
            'Barras. Líneas implican evolución en el tiempo; circular implica partes de un total. Categorías independientes → barras.',
        },
        {
          enunciado: '¿Por qué cortar el eje Y es problemático en un gráfico de barras?',
          opciones: [
            'No lo es',
            'Exagera diferencias pequeñas y manipula la lectura',
            'Hace el gráfico más bonito',
            'Es estándar profesional',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Un eje Y que arranca en 90 cuando los datos van de 95 a 99 hace parecer enorme una caída de 4 puntos. Por defecto: cero.',
          feedbackIncorrecto:
            'Cortar el eje Y manipula la lectura. La regla básica para barras es arrancar en cero, y si lo cortas, declararlo en el título.',
        },
        {
          enunciado: '¿Cuál es el límite práctico de porciones en un gráfico circular?',
          opciones: ['No hay límite', '3 a 5 (máximo 7) porciones', 'Mínimo 10', '20+'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Más de 7 porciones el ojo deja de distinguirlas. Si tienes 12 categorías, usa barras o agrupa en "otros".',
          feedbackIncorrecto:
            '3 a 5 (máximo 7). Circular con 15 porciones es ilegible — pasa a barras.',
        },
        {
          enunciado: '¿Qué hace un buen título de gráfico?',
          opciones: [
            'Nombrar el tipo (ej. "Gráfico de barras 1")',
            'Describir qué muestra y en qué unidades, ligado a la pregunta',
            'Ser corto a toda costa',
            'Repetir el eje X',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. "Notas promedio por curso (periodo 3)" sí; "Gráfico 2" no. El título es la pregunta que el gráfico responde.',
          feedbackIncorrecto:
            'Describe qué y en qué unidad. Sin título descriptivo, el lector no sabe qué mira.',
        },
        {
          enunciado: 'En el saber ancestral, ¿qué aplica a los gráficos digitales de hoy?',
          opciones: [
            'Nada — son tecnologías distintas',
            'Visualizar datos es gesto humano antiguo: el medio cambia, la pregunta no',
            'Que el papel sigue siendo mejor',
            'Que los gráficos son invento del siglo XX',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El mapa en piedra, el dibujo en arena, el tejido Wayuu: todos eran gráficos. La pantalla es solo el medio nuevo.',
          feedbackIncorrecto:
            'La visualización es antigua. El software solo aceleró el gesto — la phronesis de elegir qué mostrar sigue siendo humana.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, toma un gráfico real de prensa o redes. Identifica: ¿qué pregunta dice responder?, ¿es el tipo adecuado?, ¿el eje Y arranca en cero?, ¿qué categoría queda escondida en "otros"?',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda imagen muestra y oculta al mismo tiempo: la pregunta es qué oculta.',
      preguntaEspejo:
        'En mis 3 gráficos, ¿qué categorías cayeron en "otros"? ¿Qué decisión cambiaría si esas categorías fueran visibles una por una?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Lo que no necesita adorno es lo que dice la verdad.',
      preguntaEspejo:
        '¿Cuánto adorno hay en mis gráficos que no ayuda al lector a responder la pregunta? ¿Qué pasaría si lo quito?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los gráficos son la infraestructura visual con que las sociedades contemporáneas se forman opinión.',
      preguntaEspejo:
        '¿Cuántos gráficos vi esta semana en redes o noticias? ¿Cuántos eran del tipo adecuado para la pregunta que decían responder?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a leer críticamente cualquier gráfico que veas y a producir los tuyos sin caer en trampas visuales.',
    emocional:
      'Resististe la tentación del adorno gráfico (3D, sombras, gradientes). Elegir simple es disciplina.',
    ciudadana:
      'Los gráficos son la primera plana de las noticias. Auditar el eje, el tipo y la categoría "otros" es alfabetización política.',
    local:
      'Visualizar es gesto antiguo: mapa en piedra, dibujo en arena, tejido Wayuu, esquema con palo en el suelo. Tu pantalla continúa la línea.',
    intergeneracional:
      'El abuelo dibujaba el ciclo de la cosecha en la tierra; tú lo haces en línea. Misma pregunta, distinto medio.',
  },
};

export default contenido;
