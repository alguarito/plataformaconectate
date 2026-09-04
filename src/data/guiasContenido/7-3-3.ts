/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 3
 * (sesión global 23).
 *
 * Auto-generado desde content/guias/7/7-3-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 3,
  titulo: 'Tipos de IA — estrecha, general, modelos especializados',
  resumen: 'En IA, la clasificación más importante es: IA estrecha (narrow AI) vs IA general (AGI — Artificial General Intelligence).',
  duracionMin: 90,
  subtema: 'Tipos de IA — estrecha, general, modelos especializados',
  preLectura: {
    porQueImporta: 'El producto es esa tabla + análisis personal + reflexión sobre AGI.',
    preguntaDetonante: 'Si una IA puede ganar al campeón mundial de ajedrez, jugar Go a nivel mundial, recomendar películas y traducir 100 idiomas, ¿ya es "general"? ¿O es solo muy hábil en cada una de esas cosas por separado?',
    activacion: {
      titulo: '¿Qué tipo de IA usa esta app?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Qué tipo de IA usa esta app?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: distingues IA estrecha de AGI, conoces 5 tipos específicos, analizas cuáles usas, armas tabla.',
      siguiente: 'Esta semana, cada vez que uses una app con IA, clasifícala mentalmente en uno de los 5 tipos.'
    }
  },
  conceptosClave: [
    {
      termino: 'IA estrecha (narrow AI)',
      definicion: 'IA especializada en una sola tarea. Es muy buena en su dominio, pero inútil fuera de él. La mayoría de IAs que usas hoy son estrechas: ChatGPT, TikTok, Maps, traductor.',
      ejemplo: 'ChatGPT es excelente generando texto pero no puede generar imágenes (necesitas DALL-E para eso). DALL-E genera imágenes pero no conversa. Cada uno especialista.',
      emoji: '🎯'
    },
    {
      termino: 'IA general (AGI)',
      definicion: 'Inteligencia Artificial General: una IA hipotética que pueda hacer cualquier tarea intelectual humana al mismo nivel que nosotros. AÚN NO EXISTE en 2026. Los expertos están divididos sobre cuándo llegará.',
      ejemplo: 'Una IA que pueda aprender un idioma, escribir un libro, hacer ingeniería, debatir política y criar un hijo, todo al nivel humano. Eso sería AGI. Hoy ninguna IA llega a eso.',
      emoji: '🌐'
    },
    {
      termino: 'Modelos de lenguaje (LLM)',
      definicion: 'IAs especializadas en generar y procesar texto. Aprenden patrones de miles de millones de palabras y predicen la siguiente palabra. ChatGPT, Claude, Gemini son LLMs.',
      ejemplo: 'Le escribes \'Cuéntame sobre Bolívar\' y el LLM predice palabra por palabra una respuesta coherente. No \'sabe\' sobre Bolívar; predice qué texto sería plausible escribir.',
      emoji: '💬'
    },
    {
      termino: 'Sistemas de recomendación',
      definicion: 'IAs que predicen qué te gustaría según tu historial y el de gente similar. TikTok, YouTube, Spotify, Netflix, Amazon. Muy efectivos para atraparte en la app.',
      ejemplo: 'TikTok analiza qué videos viste completos, qué saltaste, qué comentaste. Predice qué te gustaría siguiente. Puedes pasar horas sin notarlo: ese es su diseño.',
      emoji: '👍'
    },
    {
      termino: 'Visión por computador',
      definicion: 'IAs que procesan imágenes y videos. Reconocen caras (desbloqueo facial), clasifican objetos (Google Lens), generan imágenes nuevas (DALL-E, Midjourney). Otro dominio especialista.',
      ejemplo: 'Cuando el celular se desbloquea viendo tu cara, una IA de visión por computador procesa la imagen y verifica que eres tú. Mismo principio: reconocer patrones visuales.',
      emoji: '👁️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces los tipos de IA?',
      instrucciones: '5 preguntas para verificar que distingues IA estrecha, AGI y los 5 tipos.',
      preguntas: [
        {
          enunciado: '¿Existe AGI (Artificial General Intelligence) en 2026?',
          opciones: [
            'Sí, ChatGPT es AGI.',
            'Sí, salió el año pasado.',
            'No. Las IAs actuales son estrechas (especialistas en una tarea). La AGI aún no existe.',
            'Sí, solo en China.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. La AGI aún no existe en 2026. Las IAs actuales son estrechas: cada una experta en su dominio. ChatGPT es excelente en texto pero limitado fuera.',
          feedbackIncorrecto: 'AGI aún NO existe. ChatGPT y otras son IAs estrechas: especialistas en su tarea. Confundir IA estrecha con AGI lleva a esperar lo imposible.'
        },
        {
          enunciado: 'TikTok te recomienda videos. ¿Qué tipo de IA usa?',
          opciones: [
            'Modelo de lenguaje (LLM).',
            'Sistema de recomendación.',
            'Visión por computador.',
            'AGI.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Sistema de recomendación: predice qué te gustaría según tu historial. Por eso TikTok se siente tan adictivo: la IA optimiza para que sigas viendo.',
          feedbackIncorrecto: 'Sistema de recomendación. Predice qué video verías a continuación según historial y patrones. Tipo 3 de los 5. TikTok, YouTube, Spotify son ejemplos.'
        },
        {
          enunciado: 'ChatGPT puede conversar de muchos temas. ¿Es AGI por eso?',
          opciones: [
            'No. Es excelente generando texto plausible, pero técnicamente es IA estrecha (especialista en lenguaje).',
            'Sí, claramente.',
            'Solo si pago premium.',
            'Sí desde 2024.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. ChatGPT es IA estrecha (LLM). Excelente en texto plausible, pero no es AGI: no tiene sentido común profundo ni intenciones, ni puede aprender de 1 sola experiencia.',
          feedbackIncorrecto: 'ChatGPT es LLM (IA estrecha). Genera texto plausible pero no tiene sentido común profundo. Confundirlo con AGI es error común. Es asistente impresionante, no inteligencia general.'
        },
        {
          enunciado: 'El desbloqueo facial del celular es...',
          opciones: [
            'AGI.',
            'Sistema de recomendación.',
            'Modelo de lenguaje.',
            'Visión por computador (procesa imágenes).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Visión por computador. La IA procesa la imagen de tu cara y la compara con la registrada. Reconoce patrones visuales. Tipo 2 de los 5.',
          feedbackIncorrecto: 'Visión por computador. Procesa imágenes y reconoce patrones (tu cara vs la registrada). Tipo 2 de los 5. Otros ejemplos: Google Lens, DALL-E.'
        },
        {
          enunciado: 'Tu hermano dice \'mi computador tiene IA\'. ¿Qué le preguntas para entender mejor?',
          opciones: [
            '¿De qué tipo? ¿LLM, visión, recomendador, predicción, sistema experto?',
            'Nada, da igual.',
            '¿Cuánto te costó?',
            '¿Es de China?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Saber distinguir tipos es la diferencia entre conversación adulta sobre IA y comentarios vagos. Ahora puedes preguntar y entender.',
          feedbackIncorrecto: 'Pregunta el tipo. Te coloca en lugar de criterio: ya no piensas en \'IA\' como cosa genérica, sino en tipo específico con sus capacidades y limitaciones.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Antes de hoy, qué tan "mezcladas" tenía las IAs en mi cabeza?',
    transferencia: 'Esta semana, cada vez que uses una app con IA, clasifícala mentalmente en uno de los 5 tipos.',
    cierre: 'Al terminar la clase: (1) podrás identificar la diferencia entre IA estrecha y AGI; (2) sabrás aplicar la clasificación a 5 tipos de IA; (3) podrás analizar qué tipos usas más; (4) habrás creado una tabla comparativa de 5 tipos.'
  },
  saberAncestral: {
    saber: 'En el taller de don Lucho el relojero de Cartago, había herramientas especializadas y herramientas generales. Su lupa de aumento servía solo para una cosa: ver lo pequeño. Su cuchillo de mesa servía para muchas cosas: cortar pan, abrir cajas, raspar. Don Lucho usaba cada una para lo suyo: la lupa para ver el engranaje, el cuchillo para tareas variadas. Si hubiera tratado de usar la lupa para cortar pan, habría fallado. La lupa era especialista (excelente en una cosa, inútil en todas las demás). El cuchillo era generalista (decente en muchas cosas, no excelente en ninguna). En IA pasa algo parecido. Existen IAs especialistas (la mayoría de las que usas hoy) y la idea de IA generalista (que aún no existe). Esa distinción es la clave para entender qué IA es buena para qué.',
    preguntaPuente: 'Si una IA puede ganar al campeón mundial de ajedrez, jugar Go a nivel mundial, recomendar películas y traducir 100 idiomas, ¿ya es "general"? ¿O es solo muy hábil en cada una de esas cosas por separado?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del análisis crítico)',
      lente: 'lente del nosotros',
      cita: '"Clasificar lo que te rodea no es burocracia académica: es soberanía intelectual. El que distingue tipos, no se deja engañar."',
      preguntaEspejo: '¿Antes de hoy, qué tan "mezcladas" tenía las IAs en mi cabeza?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Lo que la IA no puede hacer hoy, importa tanto como lo que sí puede. Conocer ambos límites es sabiduría."',
      preguntaEspejo: '¿Tiendo a sobreestimar la IA (esperar que pueda todo) o a subestimarla (no aprovechar lo que puede)?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era de la IA)',
      lente: 'lente de la infoesfera',
      cita: '"Cuando llegue la AGI cambiará el mundo. Pero hoy no existe. Vivir como si ya existiera o como si nunca llegara son dos errores opuestos."',
      preguntaEspejo: '¿Estoy tratando a ChatGPT como AGI (esperando que sepa todo) o como herramienta estrecha (con criterio sobre lo que sí sabe)?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la diferencia entre IA estrecha y AGI; (2) sabrás aplicar la clasificación a 5 tipos de IA; (3) podrás analizar qué tipos usas más; (4) habrás creado una t…',
    emocional: 'Hay gente que solo habla de lo que la IA puede hacer (impresionante, ¿no?).',
    ciudadana: 'Cuando solo conoces "la IA" como categoría única, todas te parecen iguales.',
    local: 'Antes de salir, verifica que cada tipo tiene su ejemplo de app real.',
    intergeneracional: 'Algunos viven como si la AGI ya existiera: le piden a ChatGPT que decida por ellos.'
  }
};

export default contenido;
