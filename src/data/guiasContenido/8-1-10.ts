/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 10
 * Tema: Socialización del portafolio del periodo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 10,
  resumen:
    'Como la asamblea trimestral en cabildos: presentar lo trabajado, escuchar preguntas, recibir crítica con humildad. Sustentar es darle voz pública al estudio que hiciste con phronesis.',
  duracionMin: 90,
  subtema: 'Socialización · Sustentación de 4 minutos · Phronesis comunicativa',

  preLectura: {
    porQueImporta:
      'Saber sustentar te servirá toda la vida: para defender un proyecto en tu universidad, para presentar una propuesta laboral, para participar en una junta de acción comunal. Es habilidad de ciudadano que se hace escuchar.',
    preguntaDetonante:
      '¿Qué de la asamblea trimestral en cabildos — la disciplina de presentar y escuchar a la comunidad — podemos llevar a la sustentación digital?',
    activacion: {
      titulo: 'La sustentación memorable',
      descripcion:
        'En 5 minutos: en parejas recuerden la mejor sustentación que han visto (de un compañero, profesor, conferencia). ¿Qué la hizo memorable? ¿Qué tuvo que las malas no tienen?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 9 ejecutaste tu mini-estudio del entorno escolar.',
      siguiente: 'Cierre del periodo 1. En el periodo 2 entrarás a lógica avanzada y computación física.',
    },
  },

  conceptosClave: [
    {
      categoria: '🎯 Cómo se prepara la sustentación',
      termino: 'Frase central',
      definicion:
        'Una sola oración que captura el mensaje principal del estudio. Si te dejaran decir UNA cosa, ¿cuál sería? Esa es la frase central.',
      ejemplo:
        '"Los estudiantes del 8°A duermen en promedio 6.4 horas, por debajo de las 8 recomendadas, y eso correlaciona con bajo rendimiento". Una frase, mucho contenido.',
      emoji: '🎯',
    },
    {
      categoria: '🎯 Cómo se prepara la sustentación',
      termino: 'Evidencia visual',
      definicion:
        'UN gráfico clave que respalda la frase central. NO 5 gráficos: uno bien explicado vale más que muchos amontonados.',
      ejemplo:
        'Un gráfico de barras horizontales con horas de sueño promedio por curso, el del 8°A resaltado en rojo. Visual claro de la situación.',
      emoji: '📊',
    },
    {
      categoria: '🎯 Cómo se prepara la sustentación',
      termino: 'Recomendación',
      definicion:
        'La acción concreta que propones. Específica, ejecutable, medible. NO "que duerman más"; SÍ "campaña de concientización en horarios y media hora menos de pantallas en la noche".',
      ejemplo:
        '"Propongo: 1) charla mensual sobre higiene del sueño, 2) acuerdo del curso de no usar pantallas después de las 9 PM en semana de exámenes".',
      emoji: '💡',
    },
    {
      categoria: '🎯 Cómo se prepara la sustentación',
      termino: 'Estructura de 4 minutos',
      definicion:
        'Distribución del tiempo: apertura 30s, pregunta y dato 1 min, gráfico 1 min, conclusión y recomendación 1 min, cierre 30s. Total: 4 min disciplinados.',
      ejemplo:
        'Cronómetro a la vista. Si te alargas en una sección, te roba tiempo de la siguiente. La práctica con cronómetro convierte ansiedad en confianza.',
      emoji: '⏱️',
    },
    {
      categoria: '🎙️ Cómo se socializa',
      termino: 'Audiencia',
      definicion:
        'Las personas a quienes hablas. NO es lo mismo sustentar a tu curso (lenguaje informal) que a la administración (lenguaje formal con datos). Adaptar el lenguaje sin manipular.',
      ejemplo:
        'Para tu curso: "encontré que dormimos poco". Para la administración: "los datos del 8°A muestran 6.4h promedio, por debajo del estándar recomendado".',
      emoji: '👥',
    },
    {
      categoria: '🎙️ Cómo se socializa',
      termino: 'Anticipación de preguntas',
      definicion:
        'Pensar 3 preguntas que probablemente te harán y preparar respuestas. NO te las apropias — solo las anticipas para no quedar sin palabras.',
      ejemplo:
        'Probables: "¿cómo elegiste la muestra?", "¿hay sesgo en la pregunta?", "¿qué te falta investigar?". Tener respuestas pensadas reduce ansiedad.',
      emoji: '❓',
    },
    {
      categoria: '🎙️ Cómo se socializa',
      termino: 'Recibir crítica',
      definicion:
        'Escuchar la pregunta completa antes de responder. NO defenderte — entiende qué te están diciendo, agradece, considera si tiene razón. La crítica honesta es regalo.',
      ejemplo:
        'Si te preguntan "¿no incluiste a los del nocturno?", responde: "Tienes razón, mi muestra no los incluyó. Lo agregaré como límite reconocido". Aprendes y demuestras humildad.',
      emoji: '🤝',
    },
    {
      categoria: '🎙️ Cómo se socializa',
      termino: 'Phronesis al sustentar',
      definicion:
        'Sabiduría práctica al hablar: afirmar lo que los datos sostienen, reconocer lo que no se sabe, no inventar respuestas. La parresia (decir verdad ante la comunidad) aplicada.',
      ejemplo:
        '"Los datos NO me dicen si la baja satisfacción es por presupuesto o por gestión. Hace falta otro estudio". Eso es phronesis: distinguir lo seguro de lo incierto.',
      emoji: '🦉',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Sustentación con phronesis',
      instrucciones:
        '5 preguntas tipo ICFES sobre preparación, presentación y manejo de preguntas en una sustentación.',
      preguntas: [
        {
          enunciado: 'La frase central de un estudio sobre redes sociales sería:',
          opciones: ['"Investigué redes sociales"', '"Los del 8° usan TikTok 90 minutos diarios y eso afecta su sueño"', '"Hay redes sociales"', '"Yo gusto de Instagram"'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Exacto. La frase central CONDENSA el hallazgo: qué red, cuánto tiempo, qué efecto. Es el "trailer" del estudio en una sola oración.',
          feedbackIncorrecto: '❌ "Investigué redes" no dice nada. "Hay redes" es trivial. "Yo gusto de" es opinión personal. La frase central debe condensar el HALLAZGO específico de tu estudio.',
        },
        {
          enunciado: 'Si en la sustentación te preguntan algo que NO estudiaste:',
          opciones: ['Inventar una respuesta convincente', 'Reconocer que no lo sabes y proponer cómo investigarlo', 'Cambiar de tema rápido', 'Acabar la presentación abruptamente'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Correcto. La phronesis es reconocer límites. Decir "esa pregunta no la abordé pero podría hacerse en un próximo estudio" es honesto y profesional. Inventar es el pecado del pseudo-experto.',
          feedbackIncorrecto: '❌ Inventar respuestas te puede dejar mal parado si te confrontan. Cambiar de tema o cortar es evasivo. Reconocer límites con propuesta concreta de futura investigación es respuesta madura.',
        },
        {
          enunciado: 'Mostrar UN gráfico clave en lugar de 5 tablas amontonadas:',
          opciones: ['Es señal de pereza', 'Comunica más rápido la idea principal', 'Es trampa, falta información', 'Solo si tienes mucho tiempo de sustentación'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. La audiencia procesa UN visual claro mejor que 5 mediocres. La regla profesional: una idea, un gráfico, un mensaje. Lo demás es ruido.',
          feedbackIncorrecto: '❌ Mostrar mucho NO comunica más — abruma. La sustentación profesional concentra el mensaje en UN gráfico clave bien explicado. Eso es respeto a la atención de la audiencia.',
        },
        {
          enunciado: 'Si la audiencia critica tu conclusión, lo más sabio es:',
          opciones: ['Defenderse fuertemente', 'Escuchar completa la pregunta, agradecer y considerar la mejora', 'Ignorar la crítica', 'Cambiar tu conclusión inmediatamente sin pensar'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Excelente. Defenderse cierra el aprendizaje. Cambiar sin pensar es ceder. Lo sabio: escuchar, agradecer, considerar. Eso es humildad intelectual y crece tu trabajo.',
          feedbackIncorrecto: '❌ Defenderse fuertemente cierra el diálogo. Ignorar es arrogante. Cambiar sin reflexión es ceder por presión. Lo correcto: ESCUCHAR, agradecer, evaluar si tiene razón.',
        },
        {
          enunciado: '"Sustentar con phronesis" significa:',
          opciones: ['Mostrar mucho contenido para impresionar', 'Afirmar lo que los datos sostienen y reconocer lo que NO se sabe', 'Hablar mucho rato para llenar el tiempo', 'Tener todos los gráficos posibles'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. La phronesis al sustentar es EQUILIBRIO: afirmar con evidencia + reconocer límites. Es la diferencia entre profesional honesto y opinador.',
          feedbackIncorrecto: '❌ La cantidad NO es phronesis. Hablar mucho ni mostrar muchos gráficos garantiza calidad. La phronesis es DISTINGUIR lo que sabes de lo que no, ante la audiencia.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: 'La sustentación es darle voz pública a tu estudio. ¿Qué te cuesta más: hablar en público, recibir crítica, o reconocer lo que no sabes? ¿Por qué?',
    transferencia: 'Mañana sustenta tu mini-estudio en 4 minutos. Cronométrate. Pide retroalimentación honesta a un compañero. Mejora antes de la próxima sustentación.',
    cierre: 'La asamblea del cabildo y la sustentación digital comparten una verdad: la palabra dada en público se sostiene con evidencia. La phronesis es habilidad de ciudadano informado.',
  },
};

export default contenido;
