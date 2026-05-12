/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 8
 * Tema: Perfiles profesionales — LinkedIn y portafolio coherentes.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-8.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 8,
  titulo: 'Perfiles profesionales — LinkedIn y portafolio coherentes',
  ocultarPDF: false,
  resumen:
    'Configuras tu handshake digital: LinkedIn completo + portafolio mínimo enlazado al sitio. Todo lo que has construido converge aquí.',
  duracionMin: 95,
  subtema: 'Presencia y marca digital · LinkedIn y portafolio',

  saberAncestral: {
    saber:
      'En el Valle, el Pacífico y los pueblos andinos, las "señas" de identidad abrían o cerraban puertas en segundos. Tu apellido ("los Cárdenas"), tu oficio ("soy hijo del herrero"), tu procedencia ("vengo del Cauca"), tu padrino o tu maestro. Bastaba una conversación de 30 segundos en la plaza para que te ubicaran social y profesionalmente. Las señas eran el handshake tradicional: confianza basada en red verificada.',
    fuente: 'Tradición de las "señas" de identidad en el Valle, el Pacífico y los Andes',
    preguntaPuente:
      '¿Qué hacían las "señas" tradicionales que abrían puertas profesionales en segundos? ¿Qué se conserva, qué cambia, en la versión digital?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Las señas y el handshake digital', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: '3 perfiles que admiras', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Los 6 elementos del perfil', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Tu perfil + portafolio', duracionMin: 40 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Tu LinkedIn es el handshake digital con quien no te conoce todavía. Cada elemento suma o resta credibilidad en segundos — un perfil incompleto cierra puertas que uno sólido abre sin que tú hagas nada más.',
    preguntaDetonante:
      'Si un futuro empleador googlea tu nombre ahora mismo, ¿qué encuentra primero — tu LinkedIn cuidado o cosas aleatorias que no te representan?',
    activacion: {
      titulo: 'El test del extraño',
      descripcion:
        'En 3 minutos, abre tu LinkedIn (o crea cuenta si no tienes). Mira tu perfil como si fueras un recruiter desconocido. Anota qué entiendes de la persona en 10 segundos. Esa primera impresión es contra la que vas a trabajar hoy.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 7 produjiste tus 3 fotos profesionales + video. Tienes la imagen lista para subir.',
      siguiente:
        'En la sesión 9 instalarás métricas básicas para medir quién entra a tu sitio y qué busca.',
    },
  },

  conceptosClave: [
    {
      termino: 'Titular (no cargo)',
      definicion:
        'Los 220 caracteres bajo tu nombre. NO uses tu cargo ("estudiante 11°"); usa tu propuesta de valor de la Guía 1.',
      ejemplo:
        'Mal: "Estudiante de grado 11". Bien: "Ayudo a pequeños negocios de Cartago a contar su historia en video corto".',
      emoji: '🏷',
    },
    {
      termino: 'Sobre mí',
      definicion:
        'Tu texto de 3 párrafos coescrito con IA y firmado con tu voz (Guía 5). Sin clichés tipo "apasionado" o "creativo".',
      ejemplo:
        'Pega el texto de tu Sobre mí de la Guía 5. No reescribas de cero — esa versión ya pasó el read aloud test.',
      emoji: '📖',
    },
    {
      termino: 'Logros medibles',
      definicion:
        'En cada experiencia, lista 3 logros con cifra o resultado concreto. NO listes tareas ("apoyé eventos"); lista impacto.',
      ejemplo:
        'Mal: "ayudé en el club de robótica". Bien: "diseñé el sitio del club, llegamos a 40 inscritos en 2 semanas".',
      emoji: '🎯',
    },
    {
      termino: 'Destacado',
      definicion:
        '3 piezas tangibles que prueban lo que dices: tu sitio (Guía 4), un proyecto del colegio, una foto del trabajo real. Enlaces visibles.',
      ejemplo:
        'Destacado #1: tu sitio personal. #2: video de presentación (Guía 7). #3: un proyecto de aula con foto y descripción.',
      emoji: '🏆',
    },
    {
      termino: 'Recomendaciones',
      definicion:
        '1-2 voces externas que confirmen lo que tu perfil dice. Tu perfil no se valida solo — necesita voces de docentes, mentores o colegas.',
      ejemplo:
        'Escribe a 2 docentes y pídeles: "¿Me harías una recomendación en LinkedIn? Tres frases bastan". Disposición a recibir = profesionalismo.',
      emoji: '🤝',
    },
    {
      termino: 'Coherencia transversal',
      definicion:
        'Foto + titular + sobre + experiencia + destacado + recomendaciones cuentan la MISMA historia. Si cada uno dice algo distinto, la marca se rompe.',
      ejemplo:
        'Si tu titular dice "diseñador" y tu experiencia solo lista clubes deportivos, hay incoherencia. Une o ajusta uno.',
      emoji: '🧵',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: '3 perfiles profesionales que admiras',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'En LinkedIn busca 3 personas que te transmitan seriedad y competencia (profesionales con 3-10 años, no necesariamente famosas).',
        'Para cada perfil revisa los 6 elementos: foto, titular, sobre, experiencia, destacado, recomendaciones.',
        'Anota qué transmite cada elemento y por qué te transmite confianza.',
        'Cierra con 1 párrafo sobre el patrón común a los 3 perfiles fuertes.',
      ],
      cuaderno: {
        titulo: '3 perfiles profesionales que admiro',
        formato: '3 fichas, cada una con los 6 elementos + columna "qué transmite"',
        extension: '3 fichas + párrafo de 4 renglones con el patrón común',
      },
      criterios: [
        'Los 3 perfiles están en tu área de interés',
        'Cada elemento tiene observación específica (no "buena foto")',
        'El patrón común identifica al menos 2 decisiones que TÚ aplicarás',
        'Hay al menos 1 perfil con recomendaciones visibles',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los 6 elementos de tu perfil',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (foto, titular, sobre, experiencia, destacado, recomendaciones) escribe una ficha.',
        'En cada ficha: definición en 1 frase tuya + error común a evitar.',
        'Agrega un ejemplo específico de cómo aplicarás ESE elemento en TU LinkedIn.',
        'Cierra con 2 renglones: ¿qué elemento te cuesta más y por qué?',
      ],
      cuaderno: {
        titulo: 'Los 6 elementos de mi perfil',
        formato: '6 fichas con definición + error común + ejemplo tuyo',
        extension: '6 fichas + 2 renglones de cierre',
      },
      criterios: [
        'Cada ficha tiene tu propio ejemplo, no plantilla genérica',
        'Identificaste al menos 1 error común que has cometido o estás a punto de cometer',
        'El elemento más difícil para ti está identificado con honestidad',
        'Puedes explicar cada elemento sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu perfil LinkedIn + portafolio mínimo',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Entra a LinkedIn (o crea cuenta institucional). Sube tu foto de retrato (Guía 7).',
        'Escribe tu titular con tu propuesta de valor (Guía 1), no tu cargo.',
        'Pega tu Sobre mí coescrito (Guía 5). Llena 1-3 experiencias con 3 logros concretos cada una.',
        'Sube 3 piezas a Destacado: sitio (Guía 4), video (Guía 7), un proyecto real.',
        'Escribe a 2 docentes/mentores pidiendo recomendación. Publica tu primer post anunciando tu sitio.',
      ],
      cuaderno: {
        titulo: 'Mi perfil LinkedIn · v1',
        formato: '6 secciones con contenido final + URL pública del perfil',
        extension: '6 secciones — 1 página de cuaderno',
      },
      criterios: [
        'URL pública del perfil accesible sin login',
        'Los 6 elementos están presentes y completos (no "estudiante" como titular)',
        'Coherencia transversal: foto + titular + sobre + experiencia se sostienen entre sí',
        'Mínimo 3 piezas en Destacado, incluyendo el sitio',
        '2 solicitudes de recomendación enviadas',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Auditoría del perfil de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia URLs de LinkedIn con un compañero. Abre la suya en pestaña incógnita (sin login).',
        'Califica del 1 al 5: (a) ¿qué hace queda claro en 30 segundos?, (b) ¿foto profesional?, (c) ¿coherencia transversal?',
        'Escribe 1 observación que afirma + 1 que reta sobre el elemento más fuerte y el más débil.',
        'Devuelve la auditoría. Conversen 5 min sin defenderse.',
      ],
      cuaderno: {
        titulo: 'Auditoría del perfil de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones sobre fortaleza y debilidad',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Identificaste el elemento más fuerte del perfil',
        'Identificaste el más débil con sugerencia concreta',
        'Verificaste que la URL funcione sin login',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los principios del perfil',
      instrucciones:
        '5 preguntas para confirmar que dominas la coherencia del handshake digital. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué debe ir en el titular de tu LinkedIn (los 220 caracteres bajo tu nombre)?',
          opciones: [
            'Tu cargo o rol actual ("estudiante 11°")',
            'Tu propuesta de valor — a quién sirves y cómo',
            'Tu fecha de nacimiento',
            'Una frase motivacional',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El titular no es un cargo — es tu propuesta de valor. "Ayudo a X a Y gracias a Z" abre más puertas que "estudiante".',
          feedbackIncorrecto:
            'Tu propuesta de valor. El titular tipo "Estudiante 11°" cierra puertas; tu propuesta de valor las abre.',
        },
        {
          enunciado: '¿Cuál es el error más grave al listar experiencias?',
          opciones: [
            'Listar más de un cargo',
            'Listar tareas en lugar de logros medibles',
            'Listar fechas exactas',
            'Listar la empresa',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. "Apoyé eventos" describe tarea. "Diseñé el sitio del club y llegamos a 40 inscritos" es logro. La diferencia decide quién te lee dos veces.',
          feedbackIncorrecto:
            'Listar tareas en vez de logros. "Apoyé al club" es tarea; "diseñé el sitio del club, llegamos a 40 inscritos en 2 semanas" es logro.',
        },
        {
          enunciado: '¿Qué es la "coherencia transversal" en un perfil?',
          opciones: [
            'Que todos los textos estén alineados a la izquierda',
            'Que foto, titular, sobre, experiencia, destacado y recomendaciones cuenten la misma historia',
            'Que todo esté en mayúsculas',
            'Que solo uses 2 colores',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Los 6 elementos deben sostener la misma promesa. Si cada uno dice algo distinto, el perfil se rompe.',
          feedbackIncorrecto:
            'Coherencia transversal: los 6 elementos cuentan la misma historia. Si tu titular dice X y tu experiencia dice Y, el perfil pierde fuerza.',
        },
        {
          enunciado: '¿Por qué necesitas recomendaciones en tu perfil aunque tengas Sobre mí impecable?',
          opciones: [
            'Para llenar espacio',
            'Porque tu perfil no se valida solo — necesita voces externas que confirmen',
            'Para subir en el ranking de LinkedIn',
            'Porque es obligatorio',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Lo que tú dices de ti es promesa; lo que otros dicen es prueba. Las dos cosas se necesitan — no una sola.',
          feedbackIncorrecto:
            'Tu perfil no se valida solo. Lo que tú dices es promesa; lo que otros dicen es evidencia. Las recomendaciones son la evidencia.',
        },
        {
          enunciado:
            'En el saber ancestral de las "señas", ¿qué aplica directamente a LinkedIn?',
          opciones: [
            'Nada — las señas son del pasado',
            'Que un puñado de elementos verificados abren puertas profesionales en segundos',
            'Que solo los apellidos importan',
            'Que las señas se gritaban',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Las "señas" de la plaza (apellido + oficio + procedencia + maestro) son los 6 elementos de LinkedIn hoy.',
          feedbackIncorrecto:
            'Las señas tradicionales = los 6 elementos de LinkedIn hoy. Conjunto pequeño de datos verificados = handshake en segundos.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, cada día dedica 10 minutos a interactuar con contenido profesional en LinkedIn — no scrollear, sino comentar 1 post con criterio y compartir 1 con tu opinión. Esa práctica diaria construye más reputación que un perfil estático impecable. El próximo lunes traes la bitácora de las 7 interacciones.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El sur global piensa desde su propia herida y desde ahí ofrece mundo.',
      preguntaEspejo:
        '¿Mi perfil reproduce un modelo de carrera del norte o reconoce mi historia real del Valle? ¿Qué de mi vida estoy borrando para encajar?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Mientras esperamos vivir, la vida pasa.',
      preguntaEspejo:
        '¿Estoy postergando construir mi reputación profesional digital esperando un momento ideal? ¿Qué pierdo cada mes que paso sin perfil?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La identidad profesional digital es capital reputacional en la infoesfera.',
      preguntaEspejo:
        '¿Mi perfil construye capital reputacional honesto o capital inflado fácil de derrumbar? ¿Qué de mi perfil puedo defender en 5 años?',
    },
  },

  cincoDimensiones: {
    personal:
      'Construiste tu primer handshake digital — la herramienta que abre puertas cuando tú no estás presente.',
    emocional:
      'Resististe la tentación del "no tengo nada que mostrar" — empezaste con lo que sí tienes.',
    ciudadana:
      'Tu perfil aporta capital reputacional honesto a una infoesfera saturada de perfiles inflados.',
    local:
      'Nombraste tu historia real del Valle en vez de borrarla para encajar en un canon de carrera del norte.',
    intergeneracional:
      'La tradición de "señas" que abrían puertas en segundos sobrevive en LinkedIn: pocos datos, bien sostenidos.',
  },
};

export default contenido;
