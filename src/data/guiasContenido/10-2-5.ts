/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/10/10-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 5,
  titulo: 'Encuestas con phronesis — Google Forms más IA para preguntar bien',
  resumen: 'Una encuesta profesional es instrumento de recolección de datos que requiere diseño cuidadoso.',
  duracionMin: 90,
  subtema: 'Encuestas con phronesis — Google Forms más IA para preguntar bien',
  preLectura: {
    porQueImporta: 'El criterio principal: que las preguntas sean neutras y útiles para tomar decisión real.',
    preguntaDetonante: '¿Qué sabía el que pregunta bien del barrio al respetar el silencio y observar la cara, que el novato de Forms olvida cuando hace preguntas tendenciosas como "¿no le parece que el recreo es muy corto?"? ¿Y por qué pasar el cuestionario por IA antes de aplicarlo evita 80 por ciento de los errores comunes?',
    activacion: {
      titulo: '3 preguntas críticas',
      descripcion: 'Actividad 1 · IDENTIFICA — 3 preguntas críticas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy aprendes a recolectar datos propios con encuestas.',
      siguiente: 'Llega con tu encuesta aplicada y al menos 15-20 respuestas reales recolectadas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Google Forms',
      definicion: 'Herramienta gratuita para crear encuestas digitales. Soporta varios tipos de pregunta y exporta a Sheets.',
      ejemplo: 'Diseñas la encuesta, compartes el link, las respuestas se acumulan en una hoja de Sheets en tiempo real.',
      emoji: '📋'
    },
    {
      termino: 'Escala Likert 1-5',
      definicion: 'Tipo de pregunta que mide actitudes en cinco niveles: 1 muy en desacuerdo, 5 muy de acuerdo.',
      ejemplo: '"El recreo es suficiente": 1, 2, 3, 4, 5. Permite cuantificar actitudes sin obligar a sí/no.',
      emoji: '📊'
    },
    {
      termino: 'Pregunta sesgada',
      definicion: 'Pregunta que induce una respuesta. Por ejemplo, "¿No crees que el recreo es muy corto?" empuja al "sí".',
      ejemplo: 'Mejor: "¿Cómo evalúas la duración del recreo?" Neutra, sin empujar respuesta.',
      emoji: '⚠️'
    },
    {
      termino: 'Pregunta doble cabeza',
      definicion: 'Pregunta que pregunta dos cosas a la vez, imposibilitando respuesta clara.',
      ejemplo: '"¿Te gustan el recreo y la cafetería?" Si te gusta uno y no el otro, no sabes qué responder.',
      emoji: '🐉'
    },
    {
      termino: 'Filtro de la IA',
      definicion: 'Práctica profesional moderna: antes de aplicar la encuesta, pedir a la IA que detecte preguntas problemáticas.',
      ejemplo: '"Claude, analiza estas 10 preguntas y detecta sesgos, ambigüedad, doble cabeza o supuestos." Ahorra horas de error.',
      emoji: '🔍'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Diseñas encuestas con phronesis?',
      instrucciones: '5 preguntas para verificar que evitas los errores comunes.',
      preguntas: [
        {
          enunciado: '¿Qué problema tiene \'No crees que el recreo es muy corto?\'',
          opciones: [
            '',
            'Ninguno',
            'Es demasiado larga',
            'No tiene signo de pregunta'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. La pregunta empuja al "sí". Una pregunta neutra dice "¿Cómo evalúas la duración del recreo?".',
          feedbackIncorrecto: 'Es sesgada. Induce respuesta al usar "no crees" antes de la afirmación.'
        },
        {
          enunciado: '¿Cuántas respuestas mínimas recolectarás para tu encuesta?',
          opciones: [
            '1',
            '1000',
            '10000',
            '15-20'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. 15-20 respuestas mínimas dan masa para análisis sin exigir esfuerzo desproporcionado.',
          feedbackIncorrecto: 'Son 15-20 respuestas mínimas. Menos no permite análisis serio; muchas más son carga sin valor agregado.'
        },
        {
          enunciado: 'La pregunta "¿Te gustan el recreo y la cafetería?" tiene problema de...',
          opciones: [
            'Idioma',
            'Doble cabeza',
            'Longitud',
            'Color'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Doble cabeza. Pregunta dos cosas a la vez y la respuesta no puede ser clara.',
          feedbackIncorrecto: 'Es pregunta doble cabeza. Hay que separarlas en dos preguntas distintas.'
        },
        {
          enunciado: 'La regla "las respuestas dependen de cómo preguntas" significa que...',
          opciones: [
            'Hay que preguntar mucho',
            'Las respuestas son aleatorias',
            'El diseño de las preguntas determina la calidad de los datos',
            'No importa el diseño'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El diseño cuidadoso de las preguntas evita sesgos y produce datos confiables.',
          feedbackIncorrecto: 'Significa que el diseño de las preguntas determina la calidad de los datos. Preguntar mal produce respuestas inutilizables.'
        },
        {
          enunciado: '¿Para qué sirve pasar la encuesta por la IA antes de aplicarla?',
          opciones: [
            'Para detectar sesgos, ambigüedad, doble cabeza y supuestos',
            'Para perder tiempo',
            'Para hacerla más larga',
            'Para traducirla'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. La IA detecta varios problemas comunes que el diseñador novato no ve.',
          feedbackIncorrecto: 'Para detectar problemas: sesgos, ambigüedad, doble cabeza, supuestos. Ahorra rehacer la encuesta después.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi encuesta deja libertad al encuestado para responder honestamente, o lo induce a confirmar mi hipótesis?',
    transferencia: 'Llega con tu encuesta aplicada y al menos 15-20 respuestas reales recolectadas.',
    cierre: 'Al terminar podrás: (1) identificar los 6 tipos de preguntas de Google Forms y cuándo usar cada uno; (2) analizar un cuestionario tuyo con asistencia de IA para detectar sesgos, ambigüedades y preguntas capciosas; (3) aplicar la phronesis del preguntón ancestral al diseño de preg…'
  },
  saberAncestral: {
    saber: 'En cualquier barrio popular del Valle del Cauca, en cualquier vereda del Cauca o del Quindío, hay una figura silenciosa que cualquier vecino mayor reconoce con una mezcla de respeto y prudencia: la persona que sabe preguntar sin parecer entrometida. No es chismoso barato ("y a usted qué le importa"); es el que averigua con método. Su técnica es ancestral y precisa: (1) Pregunta indirecta primero: empieza por algo aparentemente banal ("¿qué tal el tiempo hoy, doña Rosa?"). (2) Observa la cara: ve si la persona se relaja, se incomoda, evade o se abre. (3) Profundiza con calma: si ve apertura, sigue. Si ve resistencia, retrocede. (4) Nunca pregunta capciosa: no induce respuestas con preguntas tendenciosas. (5) Respeta el silencio: deja espacio para que la otra persona piense. Esa persona logra enterarse de lo que pasa en el barrio sin que nadie se sienta interrogado. La sabiduría ancestral es phronesis pura: preguntar bien es oficio antes que técnica. Esa misma phronesis es la que pide una buena encuesta profesional: orden, neutralidad, respeto por el encuestado.',
    preguntaPuente: '¿Qué sabía el que pregunta bien del barrio al respetar el silencio y observar la cara, que el novato de Forms olvida cuando hace preguntas tendenciosas como "¿no le parece que el recreo es muy corto?"? ¿Y por qué pasar el cuestionario por IA antes de aplicarlo evita 80 por ciento de los errores comunes?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una encuesta neutra dignifica al encuestado; una tendenciosa lo manipula bajo disfraz de investigación.',
      preguntaEspejo: '¿Mi encuesta deja libertad al encuestado para responder honestamente, o lo induce a confirmar mi hipótesis?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La neutralidad en la pregunta es virtud del que busca verdad; la tendenciosidad es vicio del que ya tiene conclusión.',
      preguntaEspejo: '¿Estoy preguntando para aprender, o para que confirmen lo que ya pienso?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El dato bien recolectado es ética informacional en la era de la sobreinformación.',
      preguntaEspejo: '¿Mis datos están siendo recolectados con rigor profesional, o solo replico la mala práctica que circula?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar los 6 tipos de preguntas de Google Forms y cuándo usar cada uno; (2) analizar un cuestionario tuyo con asistencia de IA para detectar sesgos, ambigüedades y pregunt…',
    emocional: 'Es tentador formular preguntas que confirmen lo que tú piensas.',
    ciudadana: 'Cuando una encuesta tiene preguntas tendenciosas, no investiga: confirma lo que el encuestador ya quería oír.',
    local: 'Antes de cerrar, mira la encuesta desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, hay datos por todas partes pero pocos están bien recolectados.'
  }
};

export default contenido;
