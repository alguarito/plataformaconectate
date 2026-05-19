/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/7/7-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 5,
  titulo: 'Modelos de lenguaje (LLMs) — ChatGPT, Claude, Gemini',
  resumen: 'Los LLMs (Large Language Models, Modelos de Lenguaje Grandes) son IAs entrenadas con miles de millones de palabras de libros, sitios web, foros, artículos.',
  duracionMin: 90,
  subtema: 'Modelos de lenguaje (LLMs) — ChatGPT, Claude, Gemini',
  preLectura: {
    porQueImporta: 'El producto es la tabla comparativa + 3 conversaciones capturadas + análisis.',
    preguntaDetonante: 'Si le preguntas a ChatGPT "¿quién ganó las elecciones de mi colegio el año pasado?", ¿podrá responder? ¿Por qué sí o por qué no?',
    activacion: {
      titulo: 'Planea tus 3 conversaciones',
      descripcion: 'Actividad 1 · IDENTIFICA — Planea tus 3 conversaciones (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: distingues los 3 LLMs principales, abres uno y conversas 3 veces, evalúas sus respuestas, analizas qué pueden y qué no.',
      siguiente: 'Esta semana, haz 2 conversaciones más con el LLM que más te gustó.'
    }
  },
  conceptosClave: [
    {
      termino: 'LLM (Large Language Model)',
      definicion: 'IA especializada en generar y procesar texto. Entrenada con miles de millones de palabras de libros, web, foros. Predice palabra por palabra basándose en patrones aprendidos. ChatGPT, Claude, Gemini son LLMs.',
      ejemplo: 'Le escribes \'Explícame derivadas como si fuera para un niño de 12\'. El LLM predice una explicación coherente palabra por palabra. No \'sabe\' matemáticas; reproduce patrones de cómo se explican matemáticas en sus datos.',
      emoji: '💬'
    },
    {
      termino: 'ChatGPT (OpenAI)',
      definicion: 'El primer LLM masivo (noviembre 2022). De la empresa OpenAI. Versión gratuita actual: GPT-4o-mini en chat.openai.com. Conocido por su versatilidad. Tiene memoria entre conversaciones en cuenta paga.',
      ejemplo: 'Para empezar: ve a chat.openai.com, crea cuenta gratis, escribe tu pregunta. Te responde en segundos. Tiene 100+ millones de usuarios activos en el mundo.',
      emoji: '🟢'
    },
    {
      termino: 'Claude (Anthropic)',
      definicion: 'LLM de la empresa Anthropic, fundada por ex-empleados de OpenAI. Conocido por respuestas cuidadosas, largas y bien estructuradas. Versión gratuita en claude.ai. Énfasis en seguridad de IA.',
      ejemplo: 'Para empezar: claude.ai (no requiere cuenta para primeros 5 mensajes). Útil para análisis profundo de textos, ensayos, código complejo. Estilo de respuesta más reflexivo.',
      emoji: '🔵'
    },
    {
      termino: 'Alucinación de LLM',
      definicion: 'Cuando el LLM inventa información con seguridad. Por ejemplo, te da una cita falsa, atribuye un libro a un autor equivocado, da una fecha incorrecta. Riesgo real al usar LLMs. Solución: verificar siempre.',
      ejemplo: 'Le pides \'cita una obra de Borges sobre Cartago\'. Te da un título plausible pero inexistente. Por eso el acuerdo 1: verificar siempre antes de citar como verdad.',
      emoji: '💭'
    },
    {
      termino: 'Las 5 cosas que SÍ pueden los LLMs',
      definicion: 'Capacidades clave: (1) explicar conceptos, (2) ayudar a estructurar texto, (3) traducir, (4) resumir textos largos, (5) generar ideas (lluvia de ideas). Útiles para estudios cuando se usan con criterio.',
      ejemplo: 'Tienes ensayo en borrador desordenado. Le pides al LLM \'sugiéreme una estructura mejor para este ensayo\'. Te da plan. Tú decides si lo aplicas o no. Es asistente, no reemplazo.',
      emoji: '✅'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar un LLM?',
      instrucciones: '5 preguntas para verificar que dominas la primera experiencia con LLMs.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los 3 LLMs más conocidos en 2026?',
          opciones: [
            'WhatsApp, Instagram, TikTok.',
            'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google).',
            'Google, Bing, Yahoo.',
            'Word, Excel, PowerPoint.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. ChatGPT, Claude y Gemini son los 3 LLMs principales. Cada uno con su URL y estilo. WhatsApp/TikTok son apps, no LLMs.',
          feedbackIncorrecto: 'ChatGPT, Claude, Gemini son los 3 LLMs. Apps como WhatsApp/TikTok usan IA pero no son LLMs. Word/Excel son procesadores, no IA conversacional.'
        },
        {
          enunciado: 'Le pides a un LLM \'cita una obra de Borges sobre Cartago\' y te da un título. ¿Confías?',
          opciones: [
            'Sí, suena seguro.',
            'No. Verifico en Google o biblioteca. Los LLMs alucinan títulos falsos a veces.',
            'Solo si paga premium.',
            'Sí, es Borges.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Verificas siempre. Los LLMs alucinan: inventan datos con seguridad. Acuerdo 1 del uso responsable. Para citas y datos importantes, verifica en otra fuente.',
          feedbackIncorrecto: 'Verifica. Los LLMs alucinan en datos específicos: nombres, fechas, citas. Buscar en otra fuente toma 30 segundos y te ahorra citar mentiras.'
        },
        {
          enunciado: 'Le preguntas a ChatGPT \'¿quién ganó las elecciones presidenciales del año pasado?\'. ¿Puede responder?',
          opciones: [
            'Sí, sabe todo lo que pasa en el mundo.',
            'Depende. En versión sin acceso a internet, su conocimiento se detiene en la fecha de entrenamiento (cutoff). Versiones con búsqueda web sí pueden.',
            'Sí, siempre.',
            'No, las IAs no saben de política.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Los LLMs gratuitos tienen \'cutoff\' (fecha límite de su conocimiento). No tienen información en tiempo real salvo versiones con búsqueda web (premium o específicas).',
          feedbackIncorrecto: 'Tienen \'cutoff\' (fecha límite). Versión gratuita típicamente no tiene info reciente. Las versiones con búsqueda web (algunas, premium) sí. Pregunta siempre la fecha de cutoff.'
        },
        {
          enunciado: 'Le pides al LLM redactar un correo formal y te lo da. ¿Lo copias y envías?',
          opciones: [
            'Sí, está perfecto.',
            'No. Lo leo, lo adapto a mi voz, cambio detalles que no son míos. Acuerdo 5 (voz propia).',
            'Sí, ahorra tiempo.',
            'Lo envío tal cual al rector.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Acuerdo 5: voz propia. El LLM da borrador; tú adaptas. Si copias tal cual, pierdes el aprendizaje y a veces se nota que no es tu voz.',
          feedbackIncorrecto: 'Adapta a tu voz. El borrador del LLM es punto de partida, no producto final. Adaptarlo te entrena en escribir bien. Copiar tal cual te quita el aprendizaje.'
        },
        {
          enunciado: '¿Para qué tarea SÍ es útil un LLM como ChatGPT?',
          opciones: [
            'Para calcular \'6738 × 9281\' con precisión exacta.',
            'Para explicar conceptos difíciles, estructurar texto, traducir, resumir.',
            'Para saber qué pasa en las noticias de hoy.',
            'Para hacer la tarea sin pensar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Las 5 capacidades clave: explicar, estructurar, traducir, resumir, generar ideas. Para cálculos exactos largos usa calculadora; para noticias usa medios reales.',
          feedbackIncorrecto: 'Las 5 fortalezas: explicar, estructurar, traducir, resumir, generar ideas. Cálculos exactos largos NO; noticias de hoy NO (sin búsqueda web); tarea sin pensar NO ético.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Voy a entrenar mi pensamiento crítico al usar IA, o a dejar que la IA piense por mí?',
    transferencia: 'Esta semana, haz 2 conversaciones más con el LLM que más te gustó.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 LLMs principales y sus diferencias; (2) sabrás aplicar cada uno a tareas reales; (3) podrás evaluar qué pueden y qué NO pueden hacer; (4) habrás conversado con un LLM real al menos 3 veces.'
  },
  saberAncestral: {
    saber: 'Cuando doña Mercedes la maestra rural de Cartago tenía que explicarle un tema difícil a un niño del campo, no le daba la respuesta de una vez. Le hacía preguntas, le mostraba ejemplos, lo guiaba paso a paso. Si el niño no entendía con la primera explicación, doña Mercedes lo intentaba de otra manera: con un dibujo, con una comparación con la vida del campo, con un cuento. Era paciente y se adaptaba al estudiante. Los LLMs (Large Language Models) intentan hacer algo parecido: conversan contigo, se adaptan a tus preguntas, te explican de varias formas. Pero hay diferencias claves: doña Mercedes te conocía, sabía qué te interesaba, recordaba tu progreso. Los LLMs no te conocen: cada conversación arranca de cero. Esa diferencia es lo que hace que la IA sea asistente pero no maestra en sentido completo.',
    preguntaPuente: 'Si le preguntas a ChatGPT "¿quién ganó las elecciones de mi colegio el año pasado?", ¿podrá responder? ¿Por qué sí o por qué no?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del diálogo crítico)',
      lente: 'lente del nosotros',
      cita: '"Dialogar con la IA no es someterse a ella. Es ejercer pensamiento crítico mientras conversas: preguntar, verificar, decidir tú."',
      preguntaEspejo: '¿Voy a entrenar mi pensamiento crítico al usar IA, o a dejar que la IA piense por mí?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador del juicio sereno)',
      lente: 'lente del cuidado interior',
      cita: '"Cuando recibas una respuesta, antes de aceptarla, pregúntate: ¿es verdadera? ¿es útil para mí en mi situación? El sabio juzga antes de seguir."',
      preguntaEspejo: '¿Estoy aplicando estos 2 filtros (verdad + utilidad propia) o acepto respuestas sin pasar por ellos?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la conversación con IA)',
      lente: 'lente de la infoesfera',
      cita: '"La calidad de tu conversación con la IA refleja la calidad de tu pensamiento. Quien sabe preguntar, obtiene respuestas valiosas. Quien no, obtiene basura."',
      preguntaEspejo: '¿Mis preguntas son vagas o específicas? ¿Cómo mejora la respuesta cuando la pregunta es mejor?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 LLMs principales y sus diferencias; (2) sabrás aplicar cada uno a tareas reales; (3) podrás evaluar qué pueden y qué NO pueden hacer; (4) habrás conv…',
    emocional: 'Los LLMs dan respuestas con seguridad: suenan correctas aunque a veces no lo sean.',
    ciudadana: 'Hay gente que abre ChatGPT y copia la primera respuesta sin pensar.',
    local: 'Antes de salir, verifica que TÚ aplicaste los 5 acuerdos de la S1 (verificar, no datos personales, etc.).',
    intergeneracional: 'Los LLMs son espejo de tu pensamiento.'
  }
};

export default contenido;
