/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 1
 * (sesión global 1).
 *
 * Auto-generado desde content/guias/10/10-1-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 1,
  titulo: 'El oficio del editor — qué hace y qué no hace',
  resumen: 'El oficio editorial es uno de los más antiguos del mundo del texto: existe desde que hubo libros, mucho antes de internet y mucho antes de la IA.',
  duracionMin: 90,
  subtema: 'El oficio del editor — qué hace y qué no hace',
  preLectura: {
    porQueImporta: 'El criterio principal: que después de esta sesión sepas con claridad qué tipo de responsabilidad estás aceptando para los próximos 9 encuentros del periodo.',
    preguntaDetonante: '¿Qué sabía don Hernando, editor de la gaceta del barrio, al firmar abajo sin haber escrito todas las notas? ¿Y por qué la diferencia entre "escribir" y "editar" es lo que separa al usuario casual de ChatGPT del editor profesional que asume la IA con criterio?',
    activacion: {
      titulo: '2 libros que conoces',
      descripcion: 'Actividad 1 · IDENTIFICA — 2 libros que conoces (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Este periodo te lleva a producir un libro de 80 páginas como editor responsable, usando IA generativa como tu escritor asistente.',
      siguiente: 'Llega con tu definición de editor, las 3 decisiones preliminares y el análisis de los 2 libros.'
    }
  },
  conceptosClave: [
    {
      termino: 'Editor',
      definicion: 'Persona que toma decisiones sobre una obra: qué entra, qué sale, cómo se ordena, para qué audiencia. No es el autor, pero firma como responsable.',
      ejemplo: 'Si la IA genera 3 capítulos pero tú decides cuál entra y cuál se devuelve a reescribir, ejerces el oficio editorial.',
      emoji: '📝'
    },
    {
      termino: 'Autor vs editor',
      definicion: 'El autor escribe; el editor decide. En este periodo asumes el rol de editor de tu propio libro, no de escritor a mano.',
      ejemplo: 'La IA actúa como autor asistente; tú como editor responsable. La firma final es tuya, no del modelo.',
      emoji: '✍️'
    },
    {
      termino: 'Escritor asistente (IA)',
      definicion: 'Rol que asume la IA generativa cuando produce primeros borradores. No firma ni decide; sirve como apoyo bajo tu criterio.',
      ejemplo: 'ChatGPT escribe el primer borrador del capítulo 3. Tú lo lees, decides qué sirve y qué reescribir.',
      emoji: '🤖'
    },
    {
      termino: 'Decisiones editoriales',
      definicion: 'Qué tema, qué audiencia, qué tono, qué se acepta y qué se devuelve a corregir. Toda decisión deja huella en el libro final.',
      ejemplo: 'Decides usar tono cercano en lugar de académico. Esa elección cambia cómo el lector vivirá el libro.',
      emoji: '🧭'
    },
    {
      termino: 'Responsabilidad firmada',
      definicion: 'El editor firma como responsable de lo publicado. Si algo es impreciso o inadecuado, la responsabilidad recae en el editor, no en la IA.',
      ejemplo: 'Si tu libro afirma un dato falso generado por la IA, tú respondes por la publicación, no el chatbot.',
      emoji: '🪪'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Entiendes el oficio editorial?',
      instrucciones: '5 preguntas para verificar que separas escritor y editor.',
      preguntas: [
        {
          enunciado: '¿Cuál es la principal diferencia entre autor y editor?',
          opciones: [
            'El editor escribe más rápido',
            'El autor escribe; el editor decide qué entra y firma como responsable',
            'Son lo mismo',
            'El editor solo corrige comas'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El autor escribe; el editor decide y firma como responsable de la obra publicada.',
          feedbackIncorrecto: 'El autor escribe; el editor decide qué entra y firma como responsable. Son roles distintos con funciones distintas.'
        },
        {
          enunciado: 'En este periodo, ¿qué rol asume la IA generativa?',
          opciones: [
            'Editor responsable',
            'Escritor asistente que produce primeros borradores',
            'Tu jefe',
            'El director del colegio'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La IA es escritor asistente. Produce borradores; tú editas, decides y firmas como responsable.',
          feedbackIncorrecto: 'La IA es escritor asistente. Tú eres editor: decides, ordenas y firmas.'
        },
        {
          enunciado: 'Si pierdes la distinción autor/editor, ¿qué pasa con tu libro?',
          opciones: [
            'Termina con un libro que la IA escribió y tú solo presentaste',
            'Lo terminas más rápido',
            'Vendes más copias',
            'No pasa nada'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Sin la distinción clara, terminas presentando lo que la IA generó. Con la distinción, terminas con un libro tuyo.',
          feedbackIncorrecto: 'Sin la distinción, terminas con un libro que la IA escribió y tú solo presentaste. Por eso el oficio editorial importa.'
        },
        {
          enunciado: '¿Quién firma como responsable del libro?',
          opciones: [
            'La IA que generó el texto',
            'El editor (tú)',
            'El servidor del modelo',
            'Nadie en particular'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. El editor firma. La IA no tiene personalidad jurídica ni responsabilidad sobre lo publicado.',
          feedbackIncorrecto: 'El editor firma. La IA no asume responsabilidad sobre lo publicado; tú sí.'
        },
        {
          enunciado: '¿Cuál de estos NO es un tipo de editor?',
          opciones: [
            'Editor de adquisiciones',
            'Editor de mesa',
            'Editor de estilo',
            'Editor de WhatsApp'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Adquisiciones, mesa y estilo son tipos reales. "Editor de WhatsApp" no es categoría editorial.',
          feedbackIncorrecto: 'Los tres primeros son tipos reales (adquisiciones, mesa, estilo). El cuarto no es categoría editorial.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy dispuesto a firmar mi libro como editor responsable, o prefiero esconderme detrás de "lo hizo la IA"?',
    transferencia: 'Llega con tu definición de editor, las 3 decisiones preliminares y el análisis de los 2 libros.',
    cierre: 'Al terminar podrás: (1) identificar las 3 decisiones más importantes que cualquier editor toma sobre una obra (tema, audiencia, estructura); (2) analizar libros reales que conoces detectando qué decisiones editoriales los sostienen; (3) explicar con tus palabras la diferencia ent…'
  },
  saberAncestral: {
    saber: 'En cada barrio del centro de Cartago hubo durante décadas un personaje silencioso que cualquier vecino mayor recuerda: el editor de la gaceta barrial. La gaceta no era diario profesional ni revista grande: era un cuadernillo impreso a mimeógrafo, después fotocopiado, que circulaba los sábados por las tiendas. Adentro venían noticias del barrio: cumpleaños, fallecimientos, fiestas patronales, ofertas de la tienda de la esquina, anuncios de extraviados. El editor no escribía todas las notas: las recibía, las elegía, las corregía. Cada semana llegaban a su mesa 30-40 notas mandadas por vecinos. El editor leía cada una y decidía: esta entra, esta no entra, esta se acorta, esta se publica al lado de aquella. Cuando salía la gaceta, su nombre aparecía abajo: "Editor: don Hernando Castaño". Esa firma no significaba "yo escribí esto"; significaba "yo respondo por esta pieza". Si una nota tenía error, el editor respondía. Si alguien se quejaba, era con él. El editor no escribía todo, pero firmaba todo. Esa distinción es ancestral y exacta: escribir es producir; editar es elegir, ordenar y responder. El editor moderno con IA hace exactamente lo mismo.',
    preguntaPuente: '¿Qué sabía don Hernando, editor de la gaceta del barrio, al firmar abajo sin haber escrito todas las notas? ¿Y por qué la diferencia entre "escribir" y "editar" es lo que separa al usuario casual de ChatGPT del editor profesional que asume la IA con criterio?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Firmar como editor en la era de la IA es acto de autoría asumida, no de delegación cómoda.',
      preguntaEspejo: '¿Estoy dispuesto a firmar mi libro como editor responsable, o prefiero esconderme detrás de "lo hizo la IA"?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La responsabilidad asumida es virtud; delegarla a la herramienta es debilidad disfrazada de modernidad.',
      preguntaEspejo: '¿Asumo la responsabilidad de mi libro como editor, o pretendo que la IA es co-autora con derechos y deberes que ella no tiene?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El editor humano es el ancla ética en la infosfera saturada de contenido generado por IA.',
      preguntaEspejo: '¿Mi rol de editor aporta calidad informacional al mundo, o solo agrega más contenido generado por IA disfrazado de obra humana?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 3 decisiones más importantes que cualquier editor toma sobre una obra (tema, audiencia, estructura); (2) analizar libros reales que conoces detectando qué decis…',
    emocional: 'Es tentador pensar que usar IA significa que la IA es responsable del resultado.',
    ciudadana: 'En la era de la IA generativa, es fácil esconderse detrás de "la IA lo escribió".',
    local: 'Antes de cerrar, mira el oficio del editor desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, miles de páginas se producen por minuto sin autor humano declarado.'
  }
};

export default contenido;
