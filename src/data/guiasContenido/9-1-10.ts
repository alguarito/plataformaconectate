/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 10 (cierre)
 * Tema: Cosecha P1 — manifiesto del técnico crítico.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-10.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 10,
  titulo: 'Cosecha P1 — manifiesto del técnico crítico',
  ocultarPDF: false,
  resumen:
    'Cierras el Periodo 1 con tu manifiesto del técnico crítico: posición, argumentos, ancla local, límites y propuesta accionable. Defendido oralmente en 3-5 min.',
  duracionMin: 100,
  subtema: 'Cosecha · Cierre del Periodo 1',

  saberAncestral: {
    saber:
      'En las tradiciones de oficio del Valle, el Pacífico y los Andes, el aprendiz cerraba su formación presentando una pieza de prueba: el panadero su mejor pan, el sastre su mejor traje. No era examen — era declaración pública: "esto soy capaz de hacer, esto defiendo, esto es mi firma". Tu cierre del periodo es exactamente eso: la pieza de prueba con la que muestras en qué te convertiste.',
    fuente: 'Tradición de la pieza de prueba en oficios del Valle, el Pacífico y los Andes',
    preguntaPuente:
      'Si tuvieras que decirle a tu yo de hace 2 meses (antes de empezar este periodo) una sola cosa que descubriste sobre la técnica, ¿cuál sería?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La pieza de prueba ancestral', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Las 9 preguntas-puente del periodo', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 elementos de un manifiesto fuerte', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Manifiesto + sustentación oral', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Cosecha, reflexiona y cierra el P1', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      '9 sesiones te trajeron hasta aquí. Hoy haces la cosecha: extraes de ese trabajo lo que de verdad te quedó. No es resumen; es destilación. Tu manifiesto, defendido oralmente, es la primera vez en muchos años escolares que se te pide tener voz propia. Vale la pena tomarlo en serio.',
    preguntaDetonante:
      'Si publicaras tu manifiesto en redes con tu nombre real, ¿lo publicarías tal cual? Si no, ¿qué te detiene? Si sí, ¿lo vas a hacer?',
    activacion: {
      titulo: 'La sola frase',
      descripcion:
        'En 3 minutos, escribe en una hoja UNA frase que resuma lo que más te marca del Periodo 1. No filtres. Esa frase será candidata a tu posición central del manifiesto. Si no se te ocurre nada, escribe lo primero que llegue — el filtro viene después.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'Las 9 sesiones del P1 te dieron lentes: cuerpo, máquina, balanza, cronología, oficios, voz pública, electricidad, cálculo y tecnologías propias. Hoy los destilas.',
      siguiente:
        'En el Periodo 2 arrancas Diseño editorial digital. La presencia digital queda viva — la mejoras desde la práctica. Empezarás con un manifiesto que defenderás.',
    },
  },

  conceptosClave: [
    {
      termino: 'Pieza de prueba',
      definicion:
        'Producto que un aprendiz presenta al cerrar su formación con el maestro. No es examen — es declaración pública de capacidad y posición.',
      ejemplo:
        'El sastre tradicional cerraba con un traje que mostraba todo lo aprendido. Su firma. Lo mismo es tu manifiesto: tu firma del periodo 1 de grado 9.',
      emoji: '🏆',
    },
    {
      termino: 'Manifiesto',
      definicion:
        'Declaración corta, pública y comprometida sobre una posición personal. Distinto del resumen: tiene voz propia, argumentos, ancla y propuesta.',
      ejemplo:
        'No es "lo que aprendí durante el periodo" (eso es resumen). Es "después de aprender X, sostengo que Y porque Z, y por eso voy a hacer W".',
      emoji: '📜',
    },
    {
      termino: 'Posición clara',
      definicion:
        'Una frase fuerte que dice qué crees, propones o sostienes. Sin "creo que tal vez quizás" — un manifiesto sin posición es un panfleto.',
      ejemplo:
        'Mal: "La tecnología tiene cosas buenas y malas". Bien: "La técnica que amplía mi cuerpo me hace libre; la que lo reemplaza me hace dependiente".',
      emoji: '🎯',
    },
    {
      termino: 'Argumento técnico',
      definicion:
        '2-3 razones rigurosas (no solo morales) que sostienen la posición. Si tus argumentos son solo "porque es bueno", sigues en el panfleto.',
      ejemplo:
        'Para la posición anterior: argumento 1 (los andenes regeneran), argumento 2 (el celular atrofia memoria), argumento 3 (el trapiche sigue funcionando sin internet).',
      emoji: '🔬',
    },
    {
      termino: 'Ancla local',
      definicion:
        'Un ejemplo concreto de tu región o familia que sostiene la posición. Sin ancla, el manifiesto suena prestado. Con ancla, suena tuyo.',
      ejemplo:
        'No "la agricultura tradicional es buena". Sí: "mi abuela siembra fríjol y maíz en la misma parcela hace 40 años; el suelo sigue fértil".',
      emoji: '🌽',
    },
    {
      termino: 'Propuesta accionable',
      definicion:
        'Qué vas a hacer tú distinto la próxima semana, mes o año a partir del manifiesto. Sin propuesta accionable, la posición queda en el aire.',
      ejemplo:
        'No "hay que respetar las tecnologías locales". Sí: "esta semana voy a entrevistar a mi tío sobre el oficio de carpintería antes de que se pierda".',
      emoji: '🚀',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Recoge las 9 preguntas-puente del periodo',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu cuaderno del periodo y busca las 9 preguntas-puente (una por sesión).',
        'Anótalas en orden, numeradas del 1 al 9.',
        'Para cada una, anota 1-2 renglones de respuesta honesta (qué descubriste o qué quedó pendiente).',
        'Marca con ★ la pregunta que más te sigue inquietando.',
      ],
      cuaderno: {
        titulo: 'Las 9 preguntas-puente del periodo',
        formato: 'Lista numerada 1-9 con respuesta breve cada una + ★ en la que más marca',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Las 9 preguntas están recuperadas correctamente',
        'Cada respuesta es honesta (no rellenar por rellenar)',
        'Identificaste cuál te sigue inquietando',
        'Reconoces que algunas las respondiste y otras siguen abiertas',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 elementos de mi manifiesto',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (posición, argumento, ancla local, propuesta accionable) escribe una ficha.',
        'En cada ficha pon LO QUE TÚ vas a poner en el manifiesto final — esta es la versión borrador estructurada.',
        'Reconoce explícitamente al menos UN límite de tu propia posición (qué no sabes, qué tiene de débil).',
        'Cierra con: ¿qué pregunta-puente de la Actividad 1 vas a llevar a tu manifiesto?',
      ],
      cuaderno: {
        titulo: '4 elementos de mi manifiesto',
        formato: '4 fichas con borrador estructurado + reconocimiento de 1 límite',
        extension: '4 fichas + 1 línea de límite',
      },
      criterios: [
        'Los 4 elementos tienen contenido propio (no plantilla)',
        'La posición está en 1 frase fuerte',
        'Hay al menos 2 argumentos técnicos',
        'Reconocés honestamente al menos un límite',
        'Tienes claro qué pregunta-puente sostiene el manifiesto',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu manifiesto + sustentación oral',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Redacta tu manifiesto en 1 página A4 con los 6 elementos: posición + argumentos + ancla local + reconocimiento de límites + propuesta accionable + firma.',
        'Léelo en voz alta y ajusta si suena prestado o forzado.',
        'Prepara notas breves para la sustentación oral (no leer la hoja, exponer libre).',
        'Defiende oralmente ante un compañero o el aula durante 3 a 5 minutos.',
      ],
      cuaderno: {
        titulo: 'Manifiesto del técnico crítico · versión 1',
        formato: '1 página A4 con los 6 elementos + 1/2 página de notas para sustentación oral',
        extension: '1 página A4 + 1/2 página de notas',
      },
      criterios: [
        'Manifiesto en 1 página A4 con los 6 elementos visibles',
        'Posición clara, argumentos técnicos, ancla local, límites reconocidos, propuesta accionable',
        'Sustentación oral preparada con notas breves',
        'Defendido en voz alta sin avergonzarte ni inflarte',
        'Un compañero que no estuvo en clase entendería tu posición leyéndolo',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el manifiesto de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Escucha la sustentación oral del compañero (sin interrumpir).',
        'Califica del 1 al 5: (a) ¿posición clara?, (b) ¿argumentos técnicos?, (c) ¿propuesta accionable concreta?',
        'Marca con ✨ el elemento más fuerte y con 🚩 el más débil.',
        'Devuelve la evaluación. Conversen 5 min: ¿le creyeron la propuesta accionable o suena a buena intención?',
      ],
      cuaderno: {
        titulo: 'Evaluación del manifiesto de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación de cierre',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Identificaste el elemento más fuerte y el más débil',
        'La observación de cierre es honesta sobre la propuesta accionable',
        'No defendiste tu propio manifiesto durante el feedback del otro',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Cierre del Periodo 1',
      instrucciones:
        '5 preguntas para cerrar P1 y confirmar que dominas la lógica del manifiesto. Necesitas 4/5 para sentir el cierre del periodo completo.',
      preguntas: [
        {
          enunciado: '¿Qué diferencia a un manifiesto de un resumen?',
          opciones: [
            'Que el manifiesto es más largo',
            'Que el manifiesto tiene voz propia, posición, argumentos y propuesta — no enumera, defiende',
            'Que el manifiesto va en mayúsculas',
            'Que el manifiesto requiere bibliografía',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Resumen enumera lo aprendido; manifiesto sostiene una posición con argumentos y propuesta. Misma información, distinta función.',
          feedbackIncorrecto:
            'Manifiesto = posición + argumentos + propuesta. Resumen = enumeración. La diferencia es si tomas voz propia o solo repasas el contenido.',
        },
        {
          enunciado: '¿Por qué un manifiesto debe reconocer límites o cosas que NO sabe?',
          opciones: [
            'Para humildad performática',
            'Porque la rigidez es ideología; el matiz reconocido es pensamiento',
            'Para llenar espacio',
            'Para sacar mejor nota',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Sostén tu posición con fuerza, pero reconoce honestamente qué tiene de débil. Eso separa pensamiento de doctrina.',
          feedbackIncorrecto:
            'Reconocer límites separa pensamiento de doctrina. Una posición sin matices se vuelve ideología; con matices se vuelve criterio.',
        },
        {
          enunciado: '¿Qué hace que un argumento sea TÉCNICO en un manifiesto técnico?',
          opciones: [
            'Que use palabras difíciles',
            'Que apele a razones rigurosas (datos, mecanismos, evidencia), no solo a morales o tradición',
            'Que cite a un autor',
            'Que sea largo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. "Los andenes regeneran nitrógeno" es técnico. "Los andenes son nuestra tradición" es moral. Defender técnicamente abre puertas que la nostalgia cierra.',
          feedbackIncorrecto:
            'Argumento técnico = rigor (datos, mecanismos, evidencia). Argumento moral = valores. Los dos pueden coexistir, pero el técnico es el que convence en sectores que financian o ejecutan.',
        },
        {
          enunciado: '¿Cuál es la diferencia entre "propuesta accionable" y "buena intención"?',
          opciones: [
            'No hay diferencia',
            'La propuesta accionable tiene qué, cuándo, dónde, cómo — verbo concreto. La buena intención solo dice "deberíamos"',
            'La propuesta es más larga',
            'La buena intención requiere dinero',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Deberíamos respetar las tradiciones" es buena intención. "Esta semana entrevisto a mi tío carpintero" es propuesta accionable.',
          feedbackIncorrecto:
            'Accionable = verbo + qué + cuándo + dónde. Buena intención = "deberíamos". La diferencia es si va a pasar algo concreto o si queda en el aire.',
        },
        {
          enunciado:
            'En el saber ancestral de la "pieza de prueba", ¿qué aplica a tu manifiesto de hoy?',
          opciones: [
            'Nada — los aprendices antiguos no escribían manifiestos',
            'Que un cierre público de formación es declaración de capacidad y posición — no examen, sino firma',
            'Que se hacían en madera',
            'Que solo los hombres podían presentarla',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La pieza de prueba ancestral y tu manifiesto cumplen la misma función: declarar pública y comprometidamente en qué te convertiste.',
          feedbackIncorrecto:
            'Misma función: declarar capacidad y posición públicamente. El sastre presentaba un traje; tú presentas un manifiesto. La forma cambia, el principio sobrevive.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Para el próximo periodo. Pega o copia tu manifiesto en la primera página de tu cuaderno del Periodo 2. Cada mes vuelve a leerlo y anota: ¿qué cumplí?, ¿qué se quedó en intención?, ¿qué cambió mi posición? Esa práctica de volver al manifiesto es lo que convierte una declaración en una vida. Felicitaciones por cerrar el Periodo 1 de grado 9 con voz propia.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La palabra propia es el primer acto de pensamiento libre.',
      preguntaEspejo:
        '¿Qué de mi manifiesto es genuinamente mío y qué viene de la voz de otros (libros, redes, profesores)? ¿Soy consciente de la diferencia?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No es lo que defiendes con palabras lo que te define; es lo que sostienes con actos a lo largo del tiempo.',
      preguntaEspejo:
        '¿Estoy dispuesto a revisar este manifiesto cada mes para verificar si lo estoy viviendo? ¿O lo voy a archivar y olvidar?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'En la infoesfera contemporánea, escribir es un acto político: lo que se publica con tu nombre te define para los archivos del futuro.',
      preguntaEspejo:
        '¿Publicaría mi manifiesto en redes con mi nombre real? Si la respuesta es no, ¿qué me detiene? Si es sí, ¿lo voy a hacer?',
    },
  },

  cincoDimensiones: {
    personal:
      'Cerraste 10 semanas de pensamiento técnico con un acto público: defendiste tu posición ante tus pares.',
    emocional:
      'Resististe la tentación del relleno y elegiste tomar posición con voz propia, no prestada.',
    ciudadana:
      'Practicaste palabra pública responsable — ejercicio que la ciudadanía digital necesita y muy pocos cultivan.',
    local:
      'Tu manifiesto está anclado en saberes, oficios y lugares de tu propia región — no en abstracciones globales.',
    intergeneracional:
      'Heredaste la tradición de la pieza de prueba del oficio antiguo y la actualizaste en formato manifiesto del XXI.',
  },
};

export default contenido;
