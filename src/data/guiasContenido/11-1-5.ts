/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 5
 * Tema: Copywriting con IA — escribir con criterio, no a ciegas.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-5.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 5,
  titulo: 'Copywriting con IA — escribir con criterio, no a ciegas',
  ocultarPDF: false,
  resumen:
    'Coescribes con IA la página "Sobre mí" de tu sitio sin perder tu voz. La IA ejecuta, tú diriges y firmas.',
  duracionMin: 95,
  subtema: 'Presencia y marca digital · IA generativa con criterio',

  saberAncestral: {
    saber:
      'La tradición oral de los pueblos del Pacífico, los Andes y el Valle no era transmisión pasiva: cada generación tomaba la historia de la anterior, la adaptaba a su contexto y se la pasaba a la siguiente. Lo que llegaba a tus abuelos no era exactamente lo que sus abuelos contaron — pero conservaba la esencia. La autoría era compartida entre generaciones, con la voz viva del que cuenta hoy.',
    fuente: 'Tradición oral del Pacífico, los Andes y el Valle colombiano',
    preguntaPuente:
      '¿Cómo se hereda la voz de una generación a otra sin que se diluya su identidad? ¿Y cómo escribes con una herramienta que puede sonar a cualquiera?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Autoría compartida', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Tu voz al escribir', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de un buen prompt', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Sobre mí coescrito con IA', duracionMin: 40 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'La IA puede ayudarte a escribir más rápido y mejor estructurado. Pero como cualquier coautor, necesita que tú aportes lo único que ella no tiene: quién eres y por qué importa. Sin tu voz encima, la IA escribe textos pasables que no son de nadie.',
    preguntaDetonante:
      'Si publicas un texto que escribió la IA y nadie sabe — ¿quién firmó realmente?',
    activacion: {
      titulo: 'El test del eco',
      descripcion:
        'En 3 minutos, pídele a ChatGPT o Claude: "escribe un Sobre mí para un estudiante de grado 11 en Colombia". Lee la respuesta y subraya 3 palabras que TÚ jamás usarías. Eso es la voz por defecto de la IA — el eco genérico que vamos a desmontar.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 4 publicaste tu sitio adaptado en GitHub Pages: tu marca ya tiene URL pública.',
      siguiente:
        'En la sesión 6 optimizarás el sitio para SEO básico — para que Google encuentre lo que escribiste.',
    },
  },

  conceptosClave: [
    {
      termino: 'Voz al escribir',
      definicion:
        'Tu patrón único al escribir: palabras que repites, ritmo de frase, tono, manías. Es lo que hace que un compañero te reconozca sin ver tu nombre.',
      ejemplo:
        'Si usas "parce", abrevias "porq", terminas con "jaja" — eso es tu voz. Reconocible y distinta a la de cualquier otro.',
      emoji: '🗣',
    },
    {
      termino: 'Prompt con voz',
      definicion:
        'Un prompt que NO solo pide algo: aporta tu rol, ejemplos de tu manera de escribir, restricciones de tono y palabras a evitar. La IA solo puede sonar a ti si le das insumo de cómo suenas tú.',
      ejemplo:
        '"Eres mi editor. Aquí van 3 mensajes míos: [...]. Conserva ese tono. Evita: apasionado, creativo, innovador. Escribe un Sobre mí en 3 párrafos."',
      emoji: '📝',
    },
    {
      termino: 'Iteración',
      definicion:
        'Pedirle a la IA varias versiones y refinar. Aceptar la primera respuesta es quedarse con el promedio — siempre. Las buenas conversaciones con IA son 3-5 turnos, no uno.',
      ejemplo:
        '"Dame 3 versiones distintas. Elijo la 2 pero quítale el adjetivo del primer párrafo y agrega una referencia a Cartago."',
      emoji: '🔁',
    },
    {
      termino: 'Lista negra de clichés',
      definicion:
        'Palabras que la IA mete por defecto y que delatan que un texto no es humano: "apasionado", "creativo", "innovador", "transformador", "comprometido", "fanático de los retos".',
      ejemplo:
        'Si tu Sobre mí dice "soy un apasionado por la tecnología", todos en el aula sabrán que lo escribió ChatGPT.',
      emoji: '🚫',
    },
    {
      termino: 'Frase irrepetible',
      definicion:
        'Una línea que solo tú podrías escribir: una referencia local concreta, una manía, una anécdota mínima. Es la firma humana que la IA jamás podrá imitar.',
      ejemplo:
        '"Crecí oyendo la lluvia en techos de zinc en Cartago" — la IA puede acercarse, pero no es lo mismo que escribirla tú.',
      emoji: '✨',
    },
    {
      termino: 'Read aloud test',
      definicion:
        'Antes de publicar un texto coescrito con IA, léelo en voz alta a alguien que te conoce. Si te reconoce al oírlo, está listo. Si no, vuelve al prompt.',
      ejemplo:
        'Tu mamá oye el texto y dice "sí, suena a ti" → publica. Tu hermana dice "esto no eres tú" → reescribe.',
      emoji: '🔊',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tu voz al escribir',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tus últimos 20 mensajes de WhatsApp ENVIADOS (no los que recibiste).',
        'Identifica 3 patrones repetidos: palabras que vuelven, longitud típica de frase, emojis recurrentes, tono general.',
        'Anota un ejemplo real tuyo (frase textual) por cada patrón identificado.',
        'Cierra con 1 línea: ¿formal, informal, irónico, cálido? Tu tono predominante.',
      ],
      cuaderno: {
        titulo: 'Mi voz al escribir',
        formato: 'Lista de 5 patrones, cada uno con un ejemplo textual real tuyo',
        extension: '5 patrones + 5 ejemplos + 1 línea de tono predominante',
      },
      criterios: [
        'Los ejemplos son tuyos reales (no inventados)',
        'Cada patrón es específico (no "hablo informal")',
        'Identificaste tu tono predominante',
        'Un compañero que te conoce podría reconocerte por esos patrones',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Tu voz vs. la voz de la IA',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre ChatGPT/Claude/Gemini. Prompt simple: "Escribe un Sobre mí para una persona como yo (estudiante grado 11, Colombia)".',
        'Pega la respuesta en tu cuaderno (o transcríbela).',
        'Subraya 3 cosas que SÍ se parecen a tu voz y 3 que NO.',
        'Reescribe la respuesta a mano corrigiendo lo que no suena a ti.',
      ],
      cuaderno: {
        titulo: 'Mi voz vs. la IA',
        formato: '(1) Prompt + respuesta IA. (2) 3 marcas verdes + 3 rojas. (3) Reescritura a mano.',
        extension: 'Prompt + respuesta + análisis + reescritura — 1 página',
      },
      criterios: [
        'Identificaste palabras específicas que la IA usó y tú no usarías nunca',
        'La reescritura está hecha a mano (no copia-pega)',
        'Hay al menos 1 frase tuya que reemplazó un cliché de la IA',
        'Reconoces el patrón "voz por defecto" de la IA',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu Sobre mí coescrito con IA',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Abre tu IA favorita. Escribe un prompt con: rol ("eres mi editor"), voz (3 fragmentos tuyos), tarea ("Sobre mí en 3 párrafos cortos"), restricciones ("evita estas palabras: apasionado, creativo, innovador").',
        'Lee la respuesta. Subraya lo que suena a ti.',
        'Pide una segunda versión con direcciones específicas ("conserva el segundo párrafo, reescribe el primero con más anécdota").',
        'Reescribe la versión final A MANO en tu cuaderno, agregando 1 frase irrepetible (referencia a tu lugar, manía, anécdota concreta).',
      ],
      cuaderno: {
        titulo: 'Sobre mí — versión final',
        formato: '(1) Prompt completo usado. (2) Texto final de 3 párrafos cortos.',
        extension: 'Prompt + 3 párrafos — 1 página de cuaderno',
      },
      criterios: [
        '3 párrafos cortos, no más',
        'Cero palabras de la lista negra (apasionado, creativo, innovador, transformador, comprometido)',
        'Al menos 1 frase irrepetible (referencia local o anécdota concreta)',
        'Coherente con tu propuesta de valor (Guía 1) y sistema visual (Guía 2)',
        'Pasa el read aloud test: alguien que te conoce te reconoce',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el Sobre mí de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu cuaderno con un compañero que te conozca razonablemente.',
        'Lee su Sobre mí en silencio primero, luego en voz alta. Marca con 🚩 los clichés y con ✨ las frases irrepetibles.',
        'Califica del 1 al 5: (a) suena a esa persona, (b) tiene al menos 1 frase irrepetible, (c) cero palabras de la lista negra.',
        'Devuelve el cuaderno con 1 observación que afirma + 1 que reta. Conversen 5 min sin defenderse.',
      ],
      cuaderno: {
        titulo: 'Evaluación del Sobre mí de [nombre]',
        formato: 'Marcas 🚩/✨ sobre el texto + 3 calificaciones + 2 observaciones',
        extension: 'Marcas + 3 calificaciones + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Las 3 calificaciones están con justificación de 1 línea',
        'Identificaste al menos 1 cliché si lo hubo',
        'Identificaste al menos 1 frase irrepetible si la hubo',
        'Las observaciones son específicas (no "está bonito")',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el criterio de coautoría',
      instrucciones:
        '5 preguntas para confirmar que dominas la diferencia entre usar IA como espejo y delegarle tu voz. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué la primera respuesta de la IA suena genérica?',
          opciones: [
            'Porque la IA es mala',
            'Porque sin tu insumo (voz, ejemplos), te entrega el promedio entrenado',
            'Porque tiene errores',
            'Porque es lenta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. La IA es buena promediando. Si no le das voz tuya, te entrega lo más común — que no es tuyo.',
          feedbackIncorrecto:
            'La IA entrega el promedio cuando no le das insumo de tu voz. No es mala — es que necesita tu material para sonar a ti.',
        },
        {
          enunciado: '¿Cuál de estas palabras NO debería aparecer en tu Sobre mí coescrito con IA?',
          opciones: ['Cartago', 'Apasionado', 'Música', 'Mi familia'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Apasionado" es la palabra estrella de los clichés que mete la IA por defecto. Junto con "creativo", "innovador", "transformador", "comprometido".',
          feedbackIncorrecto:
            '"Apasionado" es bandera roja: aparece en el 80% de los Sobre mí generados por IA. Si lo dejas, todos sabrán quién escribió.',
        },
        {
          enunciado: '¿Qué es una "frase irrepetible" en tu texto?',
          opciones: [
            'Una frase muy larga',
            'Una línea que solo tú podrías escribir (referencia local, anécdota, manía)',
            'Una frase con palabras raras',
            'Una frase en otro idioma',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La firma humana que la IA jamás podrá imitar: una referencia a tu Cartago, una manía, una anécdota mínima.',
          feedbackIncorrecto:
            'La frase irrepetible es la que solo tú podrías escribir: referencia local, anécdota, manía. Es tu firma humana.',
        },
        {
          enunciado: '¿Cuál es el "read aloud test"?',
          opciones: [
            'Leer rápido el texto',
            'Leer el texto en voz alta a alguien que te conoce y ver si te reconoce',
            'Hacer que la IA lea el texto',
            'Leer el texto a un desconocido',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Si te reconoce al oírlo, está listo. Si no, vuelve al prompt.',
          feedbackIncorrecto:
            'El read aloud test: léeselo a alguien que te conoce. Si te reconoce, publícalo. Si no, reescribe.',
        },
        {
          enunciado:
            'En el saber ancestral de la tradición oral, ¿qué aplica a coescribir con IA?',
          opciones: [
            'Nada — la tradición oral no tiene que ver con IA',
            'Autoría compartida entre generaciones, con voz viva del que cuenta hoy',
            'Que las historias se inventaban',
            'Que solo los mayores las contaban',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La IA es como un ancestro colaborador: te entrega material que tú adaptas con tu voz viva.',
          feedbackIncorrecto:
            'La tradición oral: autoría compartida con voz viva. Coescribir con IA es exactamente eso — material que tú firmas con tu voz.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, antes de publicar cualquier texto coescrito con IA (redes, correos, ensayos), aplica el read aloud test: léelo en voz alta a alguien que te conoce. Si te reconoce, publica. Si no, reescribe. El próximo lunes traes 3 textos pasados por ese filtro.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda comunidad de comunicación se hace plena cuando incluye la voz del excluido.',
      preguntaEspejo:
        '¿La IA está incluyendo mi voz local o me la está borrando suavemente? ¿Estoy permitiendo que escriba por mí en lugar de conmigo?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No es lo que dices, es lo que haces lo que define quién eres.',
      preguntaEspejo:
        '¿Puedo defender cada línea de este texto como mía? Si me preguntan "¿por qué pusiste esta frase?", ¿tengo respuesta?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cuando un agente delega su voz a otro, ambos quedan transformados en la infoesfera.',
      preguntaEspejo:
        '¿Estoy usando la IA como herramienta o le estoy entregando mi voz? ¿Quién está firmando cuando publico este texto?',
    },
  },

  cincoDimensiones: {
    personal:
      'Reconociste tu voz al escribir y aprendiste a dirigir a la IA en lugar de dejarte dirigir.',
    emocional:
      'Sentiste la tentación de aceptar la primera versión y elegiste el camino más lento pero más auténtico.',
    ciudadana:
      'Coescribir con criterio es resistir la homogeneización lingüística de la infoesfera global.',
    local:
      'Cada frase irrepetible tuya —Valle, Cartago, español de Colombia— es un acto de inclusión en una IA entrenada en otro mundo.',
    intergeneracional:
      'Heredaste la tradición de autoría compartida (oral) y la usaste en formato 2026: tú diriges, la IA ejecuta, tú firmas.',
  },
};

export default contenido;
