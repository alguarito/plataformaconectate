/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 10 (cierre)
 * Tema: Cosecha P2 — sustentación pública de la revista.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-10.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 10,
  titulo: 'Cosecha P2 — sustentación pública de la revista',
  ocultarPDF: false,
  resumen:
    'Cierras el Periodo 2 defendiendo oralmente tu revista al curso en 8 minutos y recibiendo feedback estructurado de 3 compañeros. Es ritual de oficio, no nota.',
  duracionMin: 100,
  subtema: 'Cosecha · Cierre del Periodo 2',

  saberAncestral: {
    saber:
      'En la tradición de los talleres editoriales colombianos, la primera revista de un aprendiz no se publicaba sin presentarla al maestro y a los pares. El aprendiz tipógrafo mostraba su primer pliego compuesto y soportaba críticas amigas. Sustentar es someter el trabajo a una mirada externa antes de que el público lo lea. Esa práctica antigua es lo que separa el trabajo de aula del trabajo profesional.',
    fuente: 'Tradición de talleres editoriales colombianos del siglo XX',
    preguntaPuente:
      'Si tuvieras 8 minutos para defender ante 30 personas el trabajo más importante de tu vida hasta hoy, ¿qué dirías? ¿Cómo demostrarías que no es solo "una tarea"?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El aprendiz ante el maestro', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: '3 sustentaciones reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 elementos de la sustentación', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Sustentación oral + feedback', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Cosecha, reflexiona y cierra el P2', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Cada presentación que hagas en tu vida adulta —proyecto en universidad, propuesta a un cliente, pitch a un inversor— depende de habilidades que se entrenan hoy. No es prueba de nervios: es gimnasio profesional.',
    preguntaDetonante:
      '¿Estoy acostumbrado a defender mis ideas en voz alta ante un grupo o tiendo a esconderme? ¿Qué significa esto para mi futuro adulto?',
    activacion: {
      titulo: 'El ensayo de 30 segundos',
      descripcion:
        'En 3 minutos, ensaya en voz alta solo el primer minuto de tu sustentación: presentarte + decir tema + mostrar URL. Lo más probable es que sientas que sobra o falta — eso es el dato que necesitabas para ajustar.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 9 publicaste tu revista de 8 páginas. Hoy la defiendes en voz alta y recibes mirada externa.',
      siguiente:
        'En el Periodo 3 arrancas Datos — del registro al insight. Hojas de cálculo y ética del dato. Llevarás contigo el manifiesto y la revista.',
    },
  },

  conceptosClave: [
    {
      termino: 'Sustentación pública',
      definicion:
        'Defensa oral de un trabajo ante un grupo. No es examen — es ritual de oficio: declarar lo que hiciste, defender decisiones, aceptar mirada externa.',
      ejemplo:
        'Una sustentación de tesis universitaria, un pitch de startup, una defensa de proyecto del colegio. Todos comparten estructura: contexto, proceso, defensa, reconocimiento.',
      emoji: '🎤',
    },
    {
      termino: 'Contexto (minuto 1)',
      definicion:
        'Apertura de la sustentación: qué hiciste, para quién, dónde se ve. Sin contexto claro, el resto de la presentación pierde anclaje.',
      ejemplo:
        '"Hice una revista de 8 páginas sobre música tradicional del Pacífico colombiano, para estudiantes de 14-16 años. Pueden verla en este link: bit.ly/mirevista."',
      emoji: '📍',
    },
    {
      termino: 'Proceso (minutos 2-3)',
      definicion:
        'Explicas las 3 decisiones grandes del sistema visual: grilla, tipografía, paleta. Cada una con su por qué.',
      ejemplo:
        '"Elegí grilla columnar de 3 porque facilita lectura larga. Par tipográfico Bricolage Grotesque + Inter porque contrastan sin pelearse. Paleta basada en colores naturales del Pacífico."',
      emoji: '⚙️',
    },
    {
      termino: 'Defensa (minutos 4-7)',
      definicion:
        'Recorres las 8 páginas en 30 segundos cada una, defendiendo la decisión más fuerte de cada página. Es donde demuestras criterio.',
      ejemplo:
        '"Página 3: este spread usa relación de contraste imagen-texto. La foto es alegre, el titular pregunta algo grave. Quería que el lector entrara al texto buscando la respuesta."',
      emoji: '🛡',
    },
    {
      termino: 'Reconocimiento (minuto 8)',
      definicion:
        'Cierre con honestidad: qué cambiarías en una versión 2.0. No es modestia falsa — es madurez profesional que la audiencia respeta.',
      ejemplo:
        '"En v2 mejoraría la contraportada — quedó débil porque la dejé al final. También trabajaría más alt text en imágenes. Eso me llevo para el siguiente proyecto."',
      emoji: '🔄',
    },
    {
      termino: 'Recibir feedback sin defenderse',
      definicion:
        'Cuando 3 compañeros te dan observaciones, escuchas sin justificarte, sin discutir. Anotas literal. La defensiva mata el aprendizaje.',
      ejemplo:
        'Compañero dice: "El titular de la página 4 me costó leer". Mala respuesta: "Es que ahí usé tipografía display intencionalmente". Buena respuesta: "Gracias, anoto eso".',
      emoji: '👂',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: '3 sustentaciones reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 3 presentaciones reales de máximo 10 minutos: una charla TED, un pitch de proyecto, una sustentación académica.',
        'Para cada una: ¿cómo empieza? ¿cómo desarrolla? ¿cómo cierra?',
        'Identifica qué hace fuerte a las buenas: estructura clara, voz propia, ejemplos concretos.',
        'Anota qué patrón vas a aplicar a tu propia sustentación.',
      ],
      cuaderno: {
        titulo: '3 sustentaciones reales',
        formato: 'Tabla 4 columnas (Presentación | Inicio | Desarrollo | Cierre), 3 filas + 1 párrafo de patrón común',
        extension: '3 filas + 1 párrafo',
      },
      criterios: [
        '3 presentaciones reales analizadas',
        'Identificaste estructura de cada una',
        'Reconozco patrón común de las buenas',
        'Anoté qué voy a aplicar a mi propia sustentación',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Estructura de mi sustentación',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (contexto, proceso, defensa, reconocimiento) escribe una ficha.',
        'En cada ficha: minutos asignados + 3-5 puntos clave que vas a decir.',
        'Marca con ★ la sección que te genera más nervio.',
        'Cierra con la frase final que vas a decir (cómo cierras la sustentación).',
      ],
      cuaderno: {
        titulo: 'Estructura de mi sustentación',
        formato: '4 fichas con minutos asignados + puntos clave + ★ en sección de más nervio',
        extension: '4 fichas + 1 frase final',
      },
      criterios: [
        'Los 4 elementos tienen contenido propio',
        'Cada uno tiene minutos asignados realistas',
        'Identifiqué la sección que me cuesta más',
        'Tengo frase final preparada',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Sustentación oral pública',
      tiempoMin: 45,
      modalidad: 'individual',
      pasos: [
        'Preparación final (10 min): repaso tarjeta, prueba URL, ensayo mental.',
        'Entrega oral ante el curso (8 min): sigue estructura 1-2-3-4 (contexto/proceso/defensa/reconocimiento).',
        'Escucha 3 observaciones de compañeros sin defenderte (5 min).',
        'Anota las 3 observaciones literales.',
      ],
      cuaderno: {
        titulo: 'Mi sustentación pública',
        formato: 'Estructura + tarjeta de puntos clave + feedback literal de 3 compañeros + reflexión final',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        'Estructura escrita previa (4 elementos con minutos)',
        'Ensayé al menos 2 veces antes de presentar',
        'Sustentación oral entre 7-8 minutos',
        'Defendí decisiones + reconocí debilidad honestamente',
        'Feedback literal de 3 compañeros transcrito',
        'Reflexión final sobre lo aprendido',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Da feedback a 3 compañeros',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Escucha 3 sustentaciones de compañeros sin interrumpir.',
        'Para cada una anota 1 observación constructiva (ni elogio vacío ni crítica destructiva).',
        'Entrega tus observaciones por escrito al final.',
        'Califica del 1 al 5 cada sustentación: estructura, defensa, honestidad.',
      ],
      cuaderno: {
        titulo: 'Feedback a 3 compañeros',
        formato: '3 observaciones constructivas + 3 calificaciones con justificación',
        extension: '3 observaciones + 3 calificaciones',
      },
      criterios: [
        'Las 3 observaciones son constructivas (no elogio vacío ni crítica destructiva)',
        'Cada calificación tiene justificación',
        'Escuché sin interrumpir',
        'Entregué feedback por escrito',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Cierre del Periodo 2',
      instrucciones:
        '5 preguntas para cerrar P2 y confirmar que dominas la lógica de la sustentación pública. Necesitas 4/5 para sentir el cierre del periodo completo.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los 4 elementos de una sustentación efectiva?',
          opciones: [
            'Introducción, desarrollo, conclusión, preguntas',
            'Contexto, proceso, defensa, reconocimiento',
            'Hola, qué hice, gracias, despedida',
            'Solo defensa',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Contexto (qué hiciste) + proceso (cómo decidiste) + defensa (por qué eso) + reconocimiento (qué cambiarías) = sustentación sólida.',
          feedbackIncorrecto:
            'Contexto + proceso + defensa + reconocimiento. Sin alguno, la sustentación queda débil. Los 4 elementos en 8 minutos.',
        },
        {
          enunciado: '¿Por qué reconocer debilidades honestamente fortalece tu sustentación?',
          opciones: [
            'Porque queda como modestia',
            'Porque la audiencia confía más en quien sostiene Y reconoce — eso es madurez profesional',
            'Porque pierdes nota',
            'No la fortalece',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Defender sin matiz suena arrogante. Reconocer sin defender suena inseguro. Las dos cosas juntas son madurez profesional que la gente respeta.',
          feedbackIncorrecto:
            'Honestidad genera confianza. La audiencia confía en quien dice "esto haría diferente en v2" tanto como en quien defiende sus aciertos.',
        },
        {
          enunciado: 'Cuando un compañero te da feedback sobre tu sustentación, ¿qué deberías hacer?',
          opciones: [
            'Defenderte explicando por qué tomaste esa decisión',
            'Escuchar sin defenderte, anotar literal, agradecer',
            'Discutir si no estás de acuerdo',
            'Ignorarlo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La defensiva mata el aprendizaje. Anotas literal, agradeces, después analizas en privado. Recibir mirada externa es regalo, no ataque.',
          feedbackIncorrecto:
            'Escuchar sin defender. La defensiva en el momento del feedback pierde la oportunidad de aprender. Recibes, anotas, después decides qué hacer.',
        },
        {
          enunciado: '¿Qué duración aproximada debe tener tu sustentación?',
          opciones: ['2 minutos', '7-8 minutos', '20 minutos', 'Lo que tarde'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. 7-8 minutos: 1 contexto + 2-3 proceso + 3-4 defensa + 1 reconocimiento. La disciplina del tiempo importa — es entrenamiento profesional.',
          feedbackIncorrecto:
            '7-8 minutos. Suficiente para defender 8 páginas con criterio, breve para mantener atención. Más es divagar, menos es superficial.',
        },
        {
          enunciado:
            'En el saber ancestral del aprendiz tipógrafo, ¿qué aplica a tu sustentación de hoy?',
          opciones: [
            'Nada — ahora todo es digital',
            'Que defender el trabajo ante el maestro y los pares es ritual de oficio, no examen',
            'Que se pegaban tipos de plomo',
            'Que solo los hombres podían sustentar',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El aprendiz tipógrafo mostraba su pliego al maestro; tú muestras tu revista a la audiencia. Misma función: defender oficio.',
          feedbackIncorrecto:
            'Ritual de oficio. El aprendiz tipógrafo defendía su pliego ante el maestro. Tú defiendes tu revista ante el curso. Forma cambia, esencia se mantiene.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Para el próximo periodo. Pega o copia tu sustentación (estructura + feedback recibido) en la primera página de tu cuaderno del Periodo 3. Cada mes vuelve a leerla y anota: ¿estoy aplicando lo que me señalaron como debilidad? Esa práctica de volver al feedback convierte la crítica en aprendizaje. Felicitaciones por cerrar el Periodo 2 con voz pública.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Tomar la palabra pública es el primer acto de ciudadanía intelectual — y se entrena en cada presentación, no se hereda.',
      preguntaEspejo:
        '¿Estoy acostumbrado a defender mis ideas en voz alta ante un grupo o tiendo a esconderme? ¿Qué significa esto para mi futuro adulto?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No es lo que dices al exponer; es la coherencia entre tu obra y tu palabra lo que se queda.',
      preguntaEspejo:
        '¿Mi revista está a la altura de lo que voy a decir de ella? Si no, ¿qué prefiero corregir: la obra o el discurso?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada sustentación pública es un acto reputacional permanente en la infoesfera de tu vida.',
      preguntaEspejo:
        '¿Qué versión de mí va a ver mi audiencia hoy? ¿Esa versión es la que quiero proyectar en mi vida adulta?',
    },
  },

  cincoDimensiones: {
    personal:
      'Defendiste en voz alta tu primer producto editorial real — entrenamiento de ciudadanía intelectual.',
    emocional:
      'Soportaste la mirada externa sin defenderte — eso entrena humildad madura, no sumisa.',
    ciudadana:
      'Practicaste palabra pública con criterio — habilidad que la democracia necesita y muchos nunca cultivan.',
    local:
      'Heredaste el ritual del aprendiz tipógrafo del Valle: defender el oficio ante el maestro y los pares.',
    intergeneracional:
      'Las generaciones que aprendieron a defender en voz alta su obra hacen sociedades con más debate honesto. Hoy te sumas.',
  },
};

export default contenido;
