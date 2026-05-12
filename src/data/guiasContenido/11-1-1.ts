/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 1
 *
 * Tema: Mi marca digital — del oficio heredado a la huella propia.
 * Apertura del grado 11 y del periodo "Presencia y marca digital".
 * Versión MILC v3 con contrato editorial completo:
 *   - Saber ancestral con pregunta-puente
 *   - Mapa de ruta visible
 *   - 4 Actividades con anatomía de 6 partes (verbos: ANALIZA, EXPLICA, CREA, EVALÚA)
 *   - Conceptos clave
 *   - Laboratorios (quiz de verificación)
 *   - Post-lectura: reflexión, transferencia, cierre con Triángulo
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 1,
  titulo: 'Mi marca digital — del oficio heredado a la huella propia',
  ocultarPDF: false,
  resumen:
    'Apertura del grado 11. Conectamos la identidad heredada (el oficio, la palabra de la familia) con la marca digital que vas a construir profesionalmente durante el grado.',
  duracionMin: 90,
  subtema: 'Apertura · Presencia y marca digital',

  /* ─────── 🌱 Saber ancestral (contrato MILC v3) ─────── */
  saberAncestral: {
    saber:
      'En el Valle del Cauca, el Pacífico y el campo colombiano, una persona se conocía por dos cosas: su oficio y su palabra. "Es el hijo del panadero", "los Cárdenas son maestros", "esa familia es seria". Una marca nunca nació en internet — nació en la plaza del pueblo, en la voz que pasa de vecino a vecino. La marca, en el fondo, es la promesa que tu nombre sostiene cuando no estás presente.',
    fuente: 'Tradición de oficio y palabra en el Valle del Cauca y el Pacífico colombiano',
    preguntaPuente:
      '¿Qué prometía el nombre de tu familia en su barrio o vereda hace 50 años? ¿Qué promete hoy en redes el nombre que tú llevas?',
  },

  /* ─────── 🗺 Mapa de ruta (contrato MILC v3) ─────── */
  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El oficio y la palabra', duracionMin: 10 },
    { numero: 2, iconos: ['📖'], titulo: '¿Qué es una marca digital? Conceptos clave', duracionMin: 15 },
    { numero: 3, iconos: ['✏️', '🔎'], titulo: 'Audita tu huella digital actual', duracionMin: 25 },
    { numero: 4, iconos: ['✏️'], titulo: 'Diseña tu manifiesto de marca personal', duracionMin: 30 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 10 },
  ],

  preLectura: {
    porQueImporta:
      'En el grado 11 dejas de ser solo "estudiante". Sales con un nombre, una huella en redes, una reputación digital. Ese rastro decidirá universidades a las que entras, empleos que consigues, redes que abres. Construirlo con intención hoy te ahorra borrar errores mañana.',
    preguntaDetonante:
      'Si googleas tu nombre completo en este momento, ¿quién aparece — y esa persona es la que tú quieres ser?',
    activacion: {
      titulo: 'El google-test de 5 minutos',
      descripcion:
        'En tu celular: abre Google en pestaña de incógnito y busca tu nombre completo entre comillas. Mira las primeras 10 entradas. Anota mentalmente: ¿qué dicen de ti? ¿coincide con quien quieres ser profesionalmente en 5 años? Si no encuentras nada — esa también es información: tu huella digital actual está en blanco.',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'En grado 10 cerraste el ciclo de IA con tu proyecto de escritura asistida y decisiones empresariales con datos.',
      siguiente:
        'En la sesión 2 abrirás tu identidad visual: paleta, tipografía y elementos gráficos coherentes con el manifiesto que escribes hoy.',
    },
  },

  conceptosClave: [
    {
      categoria: '🆔 Qué es una marca digital',
      termino: 'Marca personal',
      definicion:
        'La promesa que tu nombre proyecta a quien no te conoce todavía. Es lo que se dice de ti cuando no estás en la sala — y hoy, eso se construye sobre todo en línea.',
      ejemplo:
        'Si alguien lee tu perfil de LinkedIn antes de una entrevista y siente "esta persona sabe de qué habla y es coherente" — tu marca trabajó por ti antes que tu boca.',
      emoji: '🪪',
    },
    {
      categoria: '🆔 Qué es una marca digital',
      termino: 'Huella digital',
      definicion:
        'El conjunto de información sobre ti que existe en internet: lo que tú publicas (huella activa) y lo que otros publican sobre ti o lo que sistemas registran (huella pasiva).',
      ejemplo:
        'Tu foto de perfil en Instagram es huella activa. La cookie que Google guarda cuando buscas algo es huella pasiva — no la elegiste, pero existe.',
      emoji: '👣',
    },
    {
      categoria: '🆔 Qué es una marca digital',
      termino: 'Propuesta de valor',
      definicion:
        'La razón concreta por la que alguien te elegiría a ti y no a otro. Responde a "¿qué problema resuelves tú mejor que la mayoría?".',
      ejemplo:
        'No basta con "soy creativo". Sí sirve: "ayudo a pequeños negocios de Cartago a contar su historia en video corto".',
      emoji: '💎',
    },
    {
      categoria: '🆔 Qué es una marca digital',
      termino: 'Reputación digital',
      definicion:
        'La percepción que otros se forman al revisar tu huella. Es la suma de coherencia, consistencia y conducta a lo largo del tiempo — no se compra, se construye.',
      ejemplo:
        'Un perfil que en 2023 publicaba memes ofensivos y hoy se anuncia "profesional serio" pierde reputación porque no hay coherencia visible.',
      emoji: '⭐',
    },
    {
      categoria: '🧭 Cómo se construye',
      termino: 'Coherencia',
      definicion:
        'Que lo que dices, muestras y haces en línea apunten al mismo lugar. Una marca incoherente confunde a quien la lee y pierde fuerza.',
      ejemplo:
        'Si tu bio dice "amo la naturaleza" pero tus fotos son todas dentro de centros comerciales, hay incoherencia. No es malo el centro comercial — es que tu promesa no encaja con tu evidencia.',
      emoji: '🧭',
    },
    {
      categoria: '🧭 Cómo se construye',
      termino: 'Audiencia objetivo',
      definicion:
        'El grupo concreto de personas a quien le hablas. Sin audiencia clara, tu marca le habla "a todos" — y por eso no llega a nadie.',
      ejemplo:
        'Si vas a estudiar diseño industrial, tu audiencia hoy son profesores, jurados de universidades y futuros empleadores creativos — no tus amigos del barrio.',
      emoji: '🎯',
    },
  ],

  /* ─────── ✏️ Actividades (contrato MILC v3) ─────── */
  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Audita tu huella digital actual',
      tiempoMin: 20,
      modalidad: 'individual',
      pasos: [
        'En Google incógnito, busca tu nombre completo entre comillas. Revisa los primeros 10 resultados de Google y los primeros 5 de Google Imágenes.',
        'Revisa tus 3 redes principales (Instagram, TikTok, Facebook o las que uses): mira las últimas 20 publicaciones de tu perfil con ojo de futuro empleador.',
        'Clasifica lo que encontraste en 3 categorías: «suma a mi marca», «no suma ni resta», «resta a mi marca».',
        'Identifica el patrón principal: ¿qué imagen proyecta hoy mi huella? ¿coincide con quien quiero ser?',
      ],
      cuaderno: {
        titulo: 'Auditoría de mi huella digital',
        formato:
          'Tabla de 3 columnas (Suma | Neutro | Resta), con al menos 3 elementos en cada columna, + 1 párrafo final de 5 a 8 renglones con tu diagnóstico',
        extension: '3 columnas con 3+ elementos cada una + 1 párrafo (5-8 renglones)',
      },
      criterios: [
        'La tabla tiene mínimo 3 elementos por columna',
        'Cada elemento es específico (URL, post, foto, comentario), no genérico',
        'El párrafo final responde concretamente: ¿coincide tu huella con tu yo profesional deseado?',
        'Reconoces al menos un sesgo de tu propia mirada (no solo te juzgas duro ni te justificas)',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Define tu propuesta de valor en una frase',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Completa esta frase: «Ayudo a [audiencia concreta] a [resolver/lograr] [resultado específico] gracias a [tu fortaleza distintiva]».',
        'Escribe 3 versiones distintas, cambiando cada vez la audiencia o la fortaleza.',
        'Elige la que más se acerca a la verdad de quién eres hoy (no la más impresionante, la más auténtica).',
        'Léela en voz alta — si no la puedes decir sin titubear, todavía no es tuya.',
      ],
      cuaderno: {
        titulo: 'Mi propuesta de valor en una frase',
        formato:
          '3 versiones de la frase numeradas (1, 2, 3) + la versión elegida marcada con ★ + 2 renglones explicando por qué esa',
        extension: '3 frases + 1 elegida + 2 renglones de justificación',
      },
      criterios: [
        'Cada frase nombra a una audiencia concreta (no "personas")',
        'Cada frase nombra un resultado específico (no "ayudar")',
        'La versión elegida es la que sientes que puedes sostener con tu trayectoria real',
        'No es una frase de catálogo — es tuya, suena a ti',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Escribe tu Manifiesto de Marca Personal',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'En una página, escribe 5 bloques cortos con estos títulos exactos: «Quién soy», «A quién sirvo», «Qué prometo», «Qué NO soy», «Cómo me reconocerán».',
        'En «Qué NO soy» nombra al menos 3 cosas con las que no quieres que te confundan (es lo que más define una marca).',
        'En «Cómo me reconocerán» da 3 evidencias concretas: tu manera de escribir, los temas que repites, una marca visual o un detalle que solo tú haces.',
        'Léelo completo al final. Si te sientes cómodo enseñándoselo a un adulto que te conoce, está listo.',
      ],
      cuaderno: {
        titulo: 'Manifiesto de marca personal — versión 1',
        formato:
          '5 bloques titulados, cada uno con 3 a 5 renglones. Total: una página completa de cuaderno.',
        extension: '5 bloques · 1 página completa',
      },
      criterios: [
        'Los 5 bloques están presentes y titulados',
        '«Qué NO soy» tiene al menos 3 cosas concretas, no genéricas',
        '«Cómo me reconocerán» da 3 evidencias observables (no abstracciones)',
        'Lo puedes leer en voz alta sin avergonzarte ni inflarte',
        'Tu propuesta de valor (Actividad 2) está reflejada de forma coherente',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el manifiesto de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu cuaderno con un compañero. Lee su Manifiesto sin interrumpir.',
        'Califica del 1 al 5 estas tres dimensiones: (a) coherencia entre bloques, (b) especificidad de la audiencia y la promesa, (c) autenticidad (¿suena a esa persona?).',
        'Escribe DOS observaciones: una que afirma (qué está fuerte) y una que reta (qué debe afinar).',
        'Devuelve el cuaderno y conversen 5 minutos sobre los hallazgos.',
      ],
      cuaderno: {
        titulo: 'Evaluación del manifiesto de [nombre del compañero]',
        formato:
          'Calificaciones (a/b/c con número del 1 al 5) + 1 observación que afirma + 1 observación que reta',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones cada una',
      },
      criterios: [
        'Las 3 calificaciones están presentes con justificación de una línea',
        'La observación que afirma señala algo específico, no generalidades',
        'La observación que reta es respetuosa pero concreta (qué cambiarías y por qué)',
        'No copiaste su manifiesto en tu propio cuaderno — solo evaluaste',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los conceptos clave',
      instrucciones:
        '5 preguntas para confirmar que dominas el lenguaje de la marca digital antes de pasar a la sesión 2. Necesitas 3/5 para avanzar.',
      preguntas: [
        {
          enunciado:
            'Acabas de subir una foto a tu Instagram. ¿Qué tipo de huella digital es?',
          opciones: [
            'Huella pasiva, porque la cargó Instagram',
            'Huella activa, porque tú decidiste publicarla',
            'No es huella digital porque las redes son privadas',
            'Es huella ancestral',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Lo que TÚ decides publicar es huella activa. Lo que otros publican de ti o los sistemas registran (cookies, ubicación) es huella pasiva.',
          feedbackIncorrecto:
            'Huella activa = lo que tú decides publicar. Huella pasiva = lo que otros publican de ti o lo que sistemas registran automáticamente.',
        },
        {
          enunciado:
            '¿Cuál de estas frases es una propuesta de valor bien formulada?',
          opciones: [
            'Soy creativo y me gusta el diseño',
            'Quiero estudiar diseño y trabajar duro',
            'Ayudo a pequeños negocios de Cartago a contar su historia en video corto',
            'Soy la mejor opción del mercado',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. Una propuesta de valor nombra audiencia concreta (pequeños negocios de Cartago), problema concreto (contar historia) y fortaleza específica (video corto).',
          feedbackIncorrecto:
            'Una propuesta de valor débil habla en general ("soy creativo"). Una fuerte nombra a una audiencia y un resultado específicos.',
        },
        {
          enunciado:
            'Un perfil que en 2023 publicaba memes ofensivos y hoy se anuncia "profesional serio" pierde reputación porque le falta...',
          opciones: [
            'Seguidores',
            'Coherencia visible en el tiempo',
            'Filtros estéticos',
            'Una propuesta de valor',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Reputación = coherencia + consistencia + conducta sostenida. Sin la línea histórica visible, lo nuevo no convence.',
          feedbackIncorrecto:
            'La reputación no se compra ni se rescribe — se construye en el tiempo. Sin coherencia visible, lo nuevo se lee como pose.',
        },
        {
          enunciado:
            'En el saber ancestral del oficio, ¿qué de eso aplica directamente a una marca digital?',
          opciones: [
            'La idea de que el nombre proyecta una promesa al que no te conoce',
            'Nada — los oficios tradicionales no tienen que ver con internet',
            'Que solo las familias antiguas pueden tener marca',
            'Que la marca depende del logo, no del nombre',
          ],
          respuestaIndex: 0,
          feedbackCorrecto:
            'Esa es la conexión. "Soy el hijo del panadero" = "soy @nombre en LinkedIn". Lo que cambia es el medio; la promesa que el nombre sostiene es la misma.',
          feedbackIncorrecto:
            'La idea de marca como promesa-que-tu-nombre-sostiene es antiquísima. Internet solo cambió el alcance, no la naturaleza.',
        },
        {
          enunciado:
            'Tu manifiesto de marca personal debe incluir un bloque "Qué NO soy". ¿Por qué?',
          opciones: [
            'Para criticar a los demás',
            'Porque las marcas se definen tanto por lo que afirman como por lo que descartan',
            'Para llenar la página',
            'Porque lo pide el formato y ya',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Decir "no soy un genérico copiapegado", "no busco viralidad fácil", "no soy todo terreno" delimita tu marca con más fuerza que diez frases de afirmación.',
          feedbackIncorrecto:
            'Lo que descartas define tu marca tanto como lo que afirmas. Sin "qué NO soy", una marca queda confusa para quien la lee.',
        },
      ],
    },
  ],

  postLectura: {
    // El campo `reflexion` queda vacío porque el triángulo estructurado lo reemplaza.
    reflexion: '',
    transferencia:
      'Esta semana, antes de cada publicación en cualquier red, pregúntate: ¿esto suma o resta a la marca que escribí hoy en mi manifiesto? Si no suma, no se publica. Esa disciplina de una semana vale más que mil consejos. El próximo lunes traes tu manifiesto al aula y le añades los aprendizajes de la semana.',
    // El campo `cierre` queda vacío porque las 5 dimensiones estructuradas lo reemplazan.
    cierre: '',
  },

  /* ─────── 💭 Triángulo de pensamiento (contrato MILC v3, versión 11° con citas) ─────── */
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Sin reconocimiento del Otro no hay justicia, sólo poder.',
      preguntaEspejo:
        '¿A quién sirve mi marca? ¿Reconozco al Otro o solo me promociono?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Tu vida es lo que tus pensamientos hagan de ella.',
      preguntaEspejo:
        '¿La huella que dejo coincide con quien quiero ser? ¿Distingo lo que depende de mí (qué publico, cómo respondo) de lo que no (algoritmos, comentarios ajenos)?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita:
        'Somos inforgs en una infoesfera que cuidamos o degradamos con cada acto informacional.',
      preguntaEspejo:
        '¿Mi marca enriquece o ensucia la infoesfera? ¿Lo que añado al mundo digital agrega valor a otros?',
    },
  },

  /* ─────── 🌱 Cinco dimensiones de evaluación liberadora ─────── */
  cincoDimensiones: {
    personal:
      'Descubriste qué huella ya dejaste y decidiste hacia dónde quieres llevarla.',
    emocional:
      'Distinguiste lo que depende de ti (lo que publicas, cómo respondes) de lo que no (algoritmos, juicios ajenos).',
    ciudadana:
      'Entendiste que tu marca afecta el espacio común digital — cada publicación es un acto en la infoesfera.',
    local:
      'Anclaste el concepto moderno de marca en el saber del oficio y la palabra del Valle del Cauca.',
    intergeneracional:
      'Tu marca digital es la versión 2026 de la promesa que un nombre familiar sostenía hace 50 años.',
  },
};

export default contenido;
