/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 1
 * (sesión global 21).
 *
 * Auto-generado desde content/guias/7/7-3-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 1,
  titulo: 'Apertura periodo 3 — la IA como el nuevo consejero del barrio',
  resumen: 'Este periodo se llama Inteligencia Artificial.',
  duracionMin: 90,
  subtema: 'Apertura periodo 3 — la IA como el nuevo consejero del barrio',
  preLectura: {
    porQueImporta: 'El producto es el cuaderno P3 + 5 acuerdos firmados + investigación.',
    preguntaDetonante: 'Si tu mamá te pregunta "¿qué es ChatGPT?", ¿podrías explicárselo con tus palabras? ¿Y si te preguntara si es buena idea que ella lo use para escribir un correo profesional?',
    activacion: {
      titulo: 'La conversación de tu abuela',
      descripcion: 'Actividad 1 · IDENTIFICA — La conversación de tu abuela (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres la analogía consejero/IA, conoces la ruta del periodo, firmas los acuerdos, planeas investigación.',
      siguiente: 'Esta semana, termina la mini-investigación del consejero (pregunta en casa).'
    }
  },
  conceptosClave: [
    {
      termino: 'Inteligencia Artificial (IA)',
      definicion: 'Tecnología que simula procesos mentales humanos (aprender, razonar, decidir) usando computadores. No es \'inteligencia\' como la nuestra; es procesamiento de datos a gran escala. Está en buscadores, recomendaciones, traducciones, asistentes virtuales.',
      ejemplo: 'Cuando Google completa tu búsqueda al escribir, cuando TikTok te recomienda un video, cuando ChatGPT te responde una pregunta: todos son ejemplos de IA en acción cotidiana.',
      emoji: '🤖'
    },
    {
      termino: 'Consejero del barrio (analogía)',
      definicion: 'Persona mayor de la comunidad a quien se acudía para pedir consejo en decisiones difíciles. Tenía experiencia, paciencia, honestidad, discreción. Hoy la IA cumple algunos de esos roles, aunque con limitaciones distintas.',
      ejemplo: 'Doña Mercedes era consejera para educación, don Lucho para temas técnicos, doña Esperanza para salud. Hoy ChatGPT, Claude o un médico humano cumplen roles parecidos pero distintos.',
      emoji: '👵'
    },
    {
      termino: '5 acuerdos del uso responsable',
      definicion: 'Las 5 normas básicas para usar IA con criterio: (1) verificar siempre, (2) no compartir datos personales, (3) citar la fuente, (4) pensar antes de copiar, (5) mantener voz propia. Sin estos acuerdos, la IA puede perjudicar más que ayudar.',
      ejemplo: 'Si ChatGPT te ayuda con una tarea, lo citas en tu trabajo (\'con apoyo de ChatGPT, verificado en Wikipedia\'). Eso es responsable. Copiar sin entender ni citar es lo contrario.',
      emoji: '🤝'
    },
    {
      termino: 'Alucinación de la IA',
      definicion: 'Cuando la IA inventa información con seguridad pero falsa. Por ejemplo, da una fecha incorrecta, cita un libro que no existe, atribuye una idea a una persona equivocada. Por eso el acuerdo 1 (verificar) es fundamental.',
      ejemplo: 'Le preguntas a ChatGPT \'¿qué año nació Bolívar?\'. Te responde \'1783\' (correcto). Pero a veces inventa fechas o eventos. Siempre verifica en otra fuente confiable antes de usar la información.',
      emoji: '💭'
    },
    {
      termino: 'ChatGPT, Claude, Gemini',
      definicion: 'Los 3 modelos de lenguaje más conocidos en 2026. ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google). Funcionan parecido: les escribes una pregunta, te dan una respuesta en lenguaje natural. Tienen versiones gratuitas accesibles.',
      ejemplo: 'Para resumir un texto largo, puedes usar cualquiera de los 3. Sus respuestas son similares pero con sutilezas distintas. La elección depende de gustos personales y casos de uso.',
      emoji: '💻'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Llegaste bien al periodo 3 de grado 7?',
      instrucciones: '5 preguntas para verificar que entiendes la analogía + los 5 acuerdos.',
      preguntas: [
        {
          enunciado: '¿En qué se parece la IA al consejero del barrio?',
          opciones: [
            'En nada, son totalmente distintos.',
            'En que ambos pueden dar opiniones útiles si sabes preguntar bien.',
            'En que la IA conoce a tu familia.',
            'En que el consejero usa internet.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Ambos pueden aconsejar bien si sabes preguntar. La diferencia: el consejero te conoce, la IA no. Por eso verificas siempre.',
          feedbackIncorrecto: 'Ambos aconsejan si preguntas bien. La diferencia clave: el consejero te conoce y tiene reputación; la IA no. Verifica siempre.'
        },
        {
          enunciado: 'Le preguntas a ChatGPT algo y te da una respuesta con mucha seguridad. ¿Es 100% confiable?',
          opciones: [
            'Sí, si suena seguro es verdadero.',
            'Sí, ChatGPT es perfecto.',
            'Solo si paga premium.',
            'No. La IA puede \'alucinar\' (inventar info con seguridad). Verifica en otra fuente confiable.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Las IAs pueden inventar con seguridad (alucinación). Por eso el acuerdo 1 es VERIFICAR siempre en otra fuente confiable.',
          feedbackIncorrecto: 'La IA puede \'alucinar\' (inventar con seguridad). Verifica siempre. Acuerdo 1 del uso responsable: verificar antes de creer.'
        },
        {
          enunciado: '¿Cuál de estos NO es un acuerdo del uso responsable de IA?',
          opciones: [
            'Verificar siempre.',
            'No compartir datos personales.',
            'Compartir todo lo que ChatGPT diga en tus redes sociales.',
            'Mantener tu voz propia.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Compartir todo sin criterio NO es responsable. Los acuerdos son: verificar, no compartir datos personales, citar, pensar antes de copiar, voz propia.',
          feedbackIncorrecto: 'Compartir sin criterio no es responsable. Los 5 acuerdos: verificar, no datos personales, citar, pensar antes de copiar, voz propia.'
        },
        {
          enunciado: '¿Cuándo salió ChatGPT por primera vez al público?',
          opciones: [
            'A fines de 2022 (hace pocos años).',
            'Hace 50 años.',
            'Hace 20 años.',
            'El año pasado no existía.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. ChatGPT salió a fines de 2022. Tu generación es la primera que crece con IA conversacional masiva. Eso te coloca en momento histórico clave.',
          feedbackIncorrecto: 'A fines de 2022. Tu generación es la primera que crece con IA conversacional masiva. Los hábitos que formes hoy te acompañan décadas.'
        },
        {
          enunciado: 'Tu mamá usa IA para escribir un correo profesional. ¿Está bien?',
          opciones: [
            'Está mal, es trampa.',
            'Solo si paga premium.',
            'Está bien si verifica el resultado, mantiene su voz y no comparte datos personales.',
            'Solo si es para una empresa grande.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Usar IA como asistente está bien si se aplican los acuerdos: verificar, mantener voz propia, no datos sensibles. No es trampa; es asistente moderno.',
          feedbackIncorrecto: 'Está bien con criterio: verificar resultado, mantener voz propia, no datos sensibles. La IA como asistente es legítima cuando se usa con responsabilidad.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿A quién considero mi "consejero del barrio" moderno? ¿Cómo combino consejo humano + IA con criterio?',
    transferencia: 'Esta semana, termina la mini-investigación del consejero (pregunta en casa).',
    cierre: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 3; (2) sabrás explicar por qué la IA es como un consejero moderno; (3) podrás aplicar los 5 acuerdos del uso responsable; (4) habrás creado tu cuaderno P3 + investigación sobre consejeros tradicionales.'
  },
  saberAncestral: {
    saber: 'En el barrio de Cartago, cada cuadra tenía su consejero. No era un cargo formal — era la persona mayor a quien todos acudían cuando había una decisión difícil. Doña Mercedes era consejera para temas de niños y educación. Don Lucho el relojero era consejero para temas técnicos. Doña Esperanza la partera era consejera para temas de salud familiar. ¿Por qué la gente confiaba en ellos? Porque tenían experiencia (habían visto muchas vidas), paciencia (escuchaban antes de aconsejar), honestidad (no fingían saber lo que no sabían), discreción (lo que se les contaba no se difundía). La gente preguntaba; el consejero respondía; la gente verificaba con su propio criterio y decidía. El consejero no decidía por ti; te ayudaba a decidir mejor. Hoy hay un nuevo tipo de consejero al que millones de personas acuden cada día: la Inteligencia Artificial (ChatGPT, Claude, Gemini). Te puede aconsejar sobre cualquier tema en segundos. Pero con la IA pasa lo mismo que con doña Mercedes: si preguntas bien, verificas con criterio y mantienes tu voz, te sirve. Si copias sin pensar, te perjudica.',
    preguntaPuente: 'Si tu mamá te pregunta "¿qué es ChatGPT?", ¿podrías explicárselo con tus palabras? ¿Y si te preguntara si es buena idea que ella lo use para escribir un correo profesional?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de los nuevos saberes en la comunidad)',
      lente: 'lente del nosotros',
      cita: '"El consejero del barrio sigue siendo necesario, aunque cambie de forma. Hoy es humano + IA juntos."',
      preguntaEspejo: '¿A quién considero mi "consejero del barrio" moderno? ¿Cómo combino consejo humano + IA con criterio?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"El que pide consejo no es débil; el que confía sin verificar sí lo es. La IA es consejo nuevo: trátalo con la sabiduría antigua."',
      preguntaEspejo: 'Cuando uso IA, ¿estoy decidiendo yo después de escuchar, o estoy delegando mi decisión a ella?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era de la IA)',
      lente: 'lente de la infoesfera',
      cita: '"La generación que aprende IA en colegio decide cómo será la humanidad en 30 años. No es exageración: es realidad."',
      preguntaEspejo: 'Si mi yo de 30 años pudiera verme hoy usando IA, ¿estaría orgulloso de los hábitos que estoy formando?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 3; (2) sabrás explicar por qué la IA es como un consejero moderno; (3) podrás aplicar los 5 acuerdos del uso responsable; (4) habrás cr…',
    emocional: 'Marco Aurelio pedía consejo todos los días a su Senado, a sus asesores, a sus generales.',
    ciudadana: 'El consejero del barrio no desaparece: cambia de forma.',
    local: 'Antes de salir, verifica que tu cuaderno tiene los 5 elementos del periodo.',
    intergeneracional: 'Tu generación es la primera que crece con IA conversacional accesible.'
  }
};

export default contenido;
