/**
 * Contenido enriquecido para Grado 6 · Período 1 · Sesión 1
 * (sesión global 1 — APERTURA MILC del grado 6).
 *
 * Tema: Bienvenida MILC + tour plataforma + contrato pedagógico + brief Escuta.
 * Aplica PATRON_S1_apertura.md · variante P1·S1 Inauguración.
 * Hilo del grado: "Habitar la sala digital con dignidad" — capítulo 1: llegar y reconocer.
 * Calibración 6°: 30% meta · 70% hands-on.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 1,
  sesion: 1,
  titulo:
    'Bienvenida MILC · Cómo aprenderemos este año en Tecnología — la sala digital, nuestro pacto y mi proyecto Escuta',
  resumen:
    'Habitamos la sala digital con dignidad — capítulo 1: llegar y reconocer. Hoy entiendes cómo aprenderemos este año: el método MILC, la plataforma ConectaTE, tu proyecto Escuta y el pacto que firmamos juntos.',
  duracionMin: 90,
  subtema: 'Apertura · Inauguración del año',

  preLectura: {
    porQueImporta:
      'Empezar bien el año en Tecnología no es solo conocer la sala: es saber cómo se aprende, qué se espera de ti, cómo se evalúa tu crecimiento y qué proyecto sustentarás al final. Si eso queda claro hoy, las próximas 32 sesiones te ahorran tropiezos.',
    preguntaDetonante:
      'Si fueras el dueño de un taller que recibe a un nuevo aprendiz, ¿qué le mostrarías primero? El maestro herrero del Valle lo hacía así. Hoy nosotros empezamos parecido.',
    activacion: {
      titulo: 'Círculo de la palabra · El recibimiento',
      descripcion:
        'Sentados en U, cada estudiante dice en una frase qué espera del año en Tecnología. El docente cierra el círculo nombrando la metáfora: "este año habitamos la sala digital con dignidad". Sin notas, sin juicio — solo expectativa puesta en común.',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'En grado 5° usaste el computador con apoyo del docente para tareas puntuales. Aquí empiezas a usarlo como herramienta tuya, con autonomía.',
      siguiente:
        'En la sesión 2 entras a tu identidad digital y huella digital — qué dejas de ti cuando navegas.',
    },
  },

  conceptosClave: [
    {
      categoria: '🧭 Las partes de cada guía MILC',
      termino: 'Pre-lectura',
      definicion:
        'El bloque que abre la guía: te calienta antes de leer. Trae un caso, una pregunta y una mini-actividad.',
      ejemplo:
        'En esta guía la pre-lectura te pide imaginar un taller del herrero — eso te prepara para hablar de la sala como "taller digital".',
      emoji: '📖',
    },
    {
      categoria: '🧭 Las partes de cada guía MILC',
      termino: 'Conceptos clave',
      definicion:
        'Las palabras nuevas explicadas con ejemplos cercanos. Tienen emoji para que las recuerdes y categoría para que veas su lugar.',
      ejemplo:
        'Justo este bloque que estás leyendo. Cada concepto tiene definición + ejemplo de tu vida real, no de un libro lejano.',
      emoji: '🔑',
    },
    {
      categoria: '🧭 Las partes de cada guía MILC',
      termino: 'Laboratorio',
      definicion:
        'El bloque de hands-on: practicas, no solo lees. Puede ser un quiz, un simulador, una visualización paso a paso.',
      ejemplo:
        'Más abajo en esta guía harás el tour de la plataforma + mini-reto + firma del contrato. Eso es laboratorio.',
      emoji: '🧪',
    },
    {
      categoria: '🧭 Las partes de cada guía MILC',
      termino: 'Post-lectura',
      definicion:
        'El cierre: una reflexión, una transferencia a tu vida y un cierre con frase del triángulo de pensamiento.',
      ejemplo:
        'Al final de esta guía vas a responder qué descubriste, qué aplicarás esta semana, y leerás el triángulo Dussel-Estoicismo-Floridi.',
      emoji: '📝',
    },
    {
      categoria: '🔍 Las 5 dimensiones que evaluamos en ti',
      termino: 'Desarrollo personal',
      definicion:
        'Lo que cambió en ti — en cómo piensas, decides o te ves a ti mismo. Mide crecimiento, no rendimiento.',
      ejemplo:
        'Si al final del periodo cuidas el equipo sin que nadie te lo recuerde, eso es desarrollo personal.',
      emoji: '💚',
    },
    {
      categoria: '🔍 Las 5 dimensiones que evaluamos en ti',
      termino: 'Control emocional',
      definicion:
        'Cómo reconoces lo que sientes (frustración, asombro, miedo, orgullo) y lo regulas. Estoicismo aplicado: lo que depende de ti.',
      ejemplo:
        'Cuando un programa falla y respiras antes de pegarle al monitor — eso es control emocional.',
      emoji: '🟡',
    },
    {
      categoria: '🔍 Las 5 dimensiones que evaluamos en ti',
      termino: 'Reflexión ciudadana',
      definicion:
        'Cómo lo aprendido te exige actuar como ciudadano digital — con derechos y deberes en internet.',
      ejemplo:
        'Decidir no compartir un meme que se burla de un compañero es reflexión ciudadana en acto.',
      emoji: '🤝',
    },
    {
      categoria: '🔍 Las 5 dimensiones que evaluamos en ti',
      termino: 'Reflexión local + Vínculo intergeneracional',
      definicion:
        'Cómo aterriza lo aprendido en Cartago y el Valle (local), y qué pasa entre lo que recibiste de los mayores y lo que entregas a los menores (intergeneracional).',
      ejemplo:
        'Tu proyecto Escuta es la dimensión intergeneracional pura: escuchas a un mayor y guardas su voz para los que vienen.',
      emoji: '🏘️',
    },
  ],

  laboratorios: [
    {
      tipo: 'visualizacion',
      titulo: 'Tour de la plataforma ConectaTE + mini-reto + contrato pedagógico',
      instrucciones:
        'Recorrido guiado de 6 pasos. En cada paso haces una acción concreta en tu equipo o en tu cuaderno. Al final sales con un contrato firmado y la primera entrada del diario del proyecto Escuta.',
      pasos: [
        {
          titulo: 'Paso 1 · Anatomía de una guía',
          texto:
            'Abre cualquier guía de la plataforma. Identifica los 4 bloques: pre-lectura, conceptos clave, laboratorio, post-lectura. Apunta en tu cuaderno qué bloque te llamó más la atención y por qué.',
        },
        {
          titulo: 'Paso 2 · Marcar como completado',
          texto:
            'Al final de cada guía hay un botón "Completar". Cuando lo presionas, queda registrado en tu portafolio. Hoy practicamos: marca esta guía como leída cuando termine la sesión.',
        },
        {
          titulo: 'Paso 3 · Mini-reto diagnóstico',
          texto:
            'En 20 minutos: identifica 5 partes visibles de tu equipo (pantalla, teclado, mouse, CPU, cables) + nombra 3 normas de seguridad de la sala + describe 1 problema común que observes hoy.',
        },
        {
          titulo: 'Paso 4 · Firmar el contrato pedagógico',
          texto:
            'Recibes 5 acuerdos para firmar con tu nombre: con la sala · con mi equipo · con mi compañero · con el docente · conmigo mismo. Léelos. Si firmas, te comprometes — si no, lo dialogas con el docente antes de firmar.',
        },
        {
          titulo: 'Paso 5 · Brief inicial del proyecto Escuta',
          texto:
            'Tu proyecto del año: entrevistar a un adulto mayor sobre cómo cambió la comunicación en su vida y, al final del año, sustentar públicamente un documento sobre esa entrevista. Hoy escribes en tu diario quién podría ser tu entrevistado y por qué.',
        },
        {
          titulo: 'Paso 6 · Auto-check MILC #1 (línea base)',
          texto:
            'En 5 minutos te das una nota de 1 a 5 en cada una de las 5 dimensiones MILC con emojis. Esta es tu LÍNEA BASE — la usaremos para ver tu crecimiento al final del año.',
        },
      ],
    },
    {
      tipo: 'quiz',
      titulo: 'Mini-quiz · ¿Entendiste cómo aprenderemos este año?',
      instrucciones: '5 preguntas cortas. Sin nota dura — solo te dice si captaste lo esencial.',
      preguntas: [
        {
          enunciado: 'En MILC, la "pre-lectura" sirve para:',
          opciones: [
            'Adornar la guía',
            'Hacer tarea adelantada',
            'Calentar antes de leer con un caso y una pregunta',
            'Repetir lo del año pasado',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Exacto. La pre-lectura te activa con un caso real y una pregunta — no con teoría seca.',
          feedbackIncorrecto:
            '❌ La pre-lectura no es relleno: es el calentamiento que te prepara para entender los conceptos.',
        },
        {
          enunciado: 'Tu auto-check MILC dio un 2 en "control emocional". ¿Qué decisión es prudente?',
          opciones: [
            'Bajarme la nota',
            'Ponerme una meta concreta para el periodo y revisar en S11',
            'Borrarlo',
            'Mentir más alto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ El auto-check no es para juzgarte — es para saber dónde poner energía. Compararás con #2 en la cosecha.',
          feedbackIncorrecto:
            '❌ El auto-check sirve para tomar decisiones de mejora, no para esconder ni mentir. Tu próximo registro será #2 en P1·S11.',
        },
        {
          enunciado: '¿Por qué tu proyecto Escuta empieza el primer día y no el último?',
          opciones: [
            'Por costumbre del docente',
            'Porque integra lo que aprenderás en TODAS las sesiones del año',
            'Porque hay tiempo de sobra',
            'Sin razón',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. El proyecto integrador conecta P1 (entrevista), P2 (digitalización en el equipo) y P3 (documento + sustentación).',
          feedbackIncorrecto:
            '❌ El proyecto Escuta no es un trabajo final improvisado: es el hilo que entrega contexto a todas las sesiones del año.',
        },
        {
          enunciado: 'El contrato pedagógico tiene sentido cuando:',
          opciones: [
            'Lo firma el docente solo',
            'Es plantilla copiada',
            'Cada estudiante firma con su nombre acuerdos que entiende',
            'Lo redacta la rectoría',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Sí. Firmar lo que entiendes te hace responsable de tu propia palabra.',
          feedbackIncorrecto:
            '❌ Un contrato sin comprensión y sin firma personal es papel mojado. Lo importante es que TÚ entiendas y TÚ firmes.',
        },
        {
          enunciado: 'Tu compañero olvidó cerrar sesión en su correo institucional el primer día. Lo prudente es:',
          opciones: [
            'Usar su cuenta un rato',
            'Ver qué tiene guardado',
            'Cerrar sesión por él y avisarle',
            'Apagar todo el equipo',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Cuidar al compañero también es habitar la sala con dignidad.',
          feedbackIncorrecto:
            '❌ Aprovechar un descuido del otro va contra el contrato pedagógico que acabas de firmar.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Qué de lo que escuchaste hoy NO esperabas? ¿Qué dimensión MILC sientes que ya tienes fuerte y cuál apenas estás descubriendo?',
    transferencia:
      'Esta semana: identifica un adulto mayor cercano (abuela, abuelo, vecino, tendero del barrio) que pueda ser tu entrevistado del proyecto Escuta. Anótalo en tu diario con una razón corta de por qué lo eliges.',
    cierre:
      'Hoy habitas la sala digital con dignidad — capítulo 1, primer día. Dussel diría: cuidas un lugar que otros usaron antes y otros usarán después. Epicteto diría: el equipo viejo no depende de ti, pero cómo lo tratas sí. Floridi diría: estás en una infoesfera compartida, y tu cuidado afecta a 30 personas más. El año empieza.',
  },
};

export default contenido;
