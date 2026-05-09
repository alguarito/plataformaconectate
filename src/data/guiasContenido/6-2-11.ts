/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 11
 * (sesión global 22 — COSECHA MILC del periodo 2).
 *
 * Tema: Diagnóstico de un equipo + integración cruzada P1+P2 + Escuta digitalizado + auto-check #4.
 * Aplica PATRON_S11_cosecha.md · variante P2·S11 Cosecha intermedia.
 * Capítulo 2 cerrado: "ahora sé qué hay dentro y cómo cuidarlo".
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 11,
  titulo:
    'Cosecha del periodo 2 · Diagnóstico de un equipo + integración cruzada P1+P2 + Escuta digitalizado',
  ocultarPDF: true,
  resumen:
    'Habitamos la sala digital con dignidad — capítulo 2 cerrado: ahora sé qué hay dentro y cómo cuidarlo. Hoy diagnosticas un equipo, conectas lo aprendido entre P1 y P2 y entregas el segundo hito del Escuta: tu entrevista digitalizada y respaldada.',
  duracionMin: 90,
  subtema: 'Cosecha · Diagnóstico + integración cruzada P1+P2',

  preLectura: {
    porQueImporta:
      'Si pasaste 11 sesiones aprendiendo de hardware y software pero no puedes entregar tu Escuta digitalizado, no aprendiste — solo escuchaste. La cosecha intermedia mide si lo aprendido SIRVE para tu proyecto del año.',
    preguntaDetonante:
      '¿Tu Escuta de P1 se conectó con lo que aprendiste de hardware en P2? ¿Cómo? Si no, ¿qué se perdió?',
    activacion: {
      titulo: 'Círculo de la cosecha intermedia · El trueque entre veredas',
      descripcion:
        'Cada estudiante dice en una frase qué conecta P1 (comunicación) y P2 (hardware) en su Escuta. Es síntesis cruzada en voz alta — el ejercicio más exigente del año hasta hoy.',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'Vienes de la S10 P2: evaluación práctica con diagnóstico de un sistema computacional + portafolio.',
      siguiente:
        'En P3·S1 entras a la aceleración del año: Word, Internet, sustentación pública del Escuta. Última recta.',
    },
  },

  conceptosClave: [
    {
      categoria: '🔗 Integración P1 + P2',
      termino: 'Audio del Escuta ↔ Almacenamiento',
      definicion:
        'Lo que grabaste en P1 vive físicamente en un disco (HDD o SSD) que aprendiste a entender en P2.',
      ejemplo:
        'Tu archivo Escuta_abuela.mp3 ocupa 30 MB. Si tu disco está al 99%, no podrás guardarlo bien.',
      emoji: '🎙️',
    },
    {
      categoria: '🔗 Integración P1 + P2',
      termino: 'Correo institucional ↔ Sistema operativo',
      definicion:
        'El correo que configuraste en P1 corre sobre un sistema operativo (Windows / macOS / Linux) que entendiste en P2.',
      ejemplo:
        'Cuando abres Outlook estás usando software de correo SOBRE el sistema operativo. Sin SO, no hay correo.',
      emoji: '✉️',
    },
    {
      categoria: '🔗 Integración P1 + P2',
      termino: 'Huella digital ↔ Gestión de archivos',
      definicion:
        'La huella digital de la que hablamos en P1·S2 también queda en archivos del equipo, no solo en la red.',
      ejemplo:
        'Cada documento descargado, cada foto guardada, cada archivo creado deja huella en tu disco. Organizar carpetas también es cuidar tu huella.',
      emoji: '👣',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC · cuarta medición',
      termino: 'Desarrollo personal',
      definicion:
        'Lo que cambió en ti durante P2 — qué aprendiste a hacer solo que antes pedías ayuda.',
      ejemplo:
        '"Antes no sabía cómo respaldar archivos; hoy hago copia en USB + nube sin que me lo digan."',
      emoji: '💚',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC · cuarta medición',
      termino: 'Control emocional',
      definicion:
        'Cómo manejaste la frustración cuando un programa no funcionó o un archivo se perdió.',
      ejemplo:
        '"Cuando se cerró mi documento sin guardar, respiré, abrí el autoguardado y no exploté."',
      emoji: '🟡',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC · cuarta medición',
      termino: 'Reflexión ciudadana',
      definicion:
        'Cómo tu cuidado del equipo escolar es también cuidado del bien común.',
      ejemplo:
        '"Reportar un equipo dañado no es chismoseo: es responsabilidad ciudadana en miniatura."',
      emoji: '🤝',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC · cuarta medición',
      termino: 'Reflexión local + Vínculo intergeneracional',
      definicion:
        'Cómo tu Escuta digitalizado puede entregarse a quien lo grabó (devolución) y a quien viene detrás.',
      ejemplo:
        'Llevar el archivo en USB a la casa de tu abuela y mostrárselo es cerrar el círculo intergeneracional.',
      emoji: '🌳',
    },
  ],

  laboratorios: [
    {
      tipo: 'visualizacion',
      titulo: 'Diagnóstico técnico + Escuta digitalizado + auto-check #4 + pre-mortem',
      instrucciones:
        'Seis pasos del 70% hands-on. Sales con: ficha de diagnóstico firmada, Escuta digitalizado y respaldado, auto-check con gráfica longitudinal, pre-mortem del proyecto y equipo de sustentación P3 definido.',
      pasos: [
        {
          titulo: 'Paso 1 · Diagnóstico real de un equipo (15 min)',
          texto:
            'En parejas, revisan 5 elementos del equipo asignado: estado físico, espacio en disco, programas innecesarios abiertos, conexiones, fecha del último mantenimiento. Llenan una ficha técnica.',
        },
        {
          titulo: 'Paso 2 · Hito 2 del Escuta · digitalización (15 min)',
          texto:
            'Cada estudiante muestra: archivo de audio organizado en carpeta, copia en la nube institucional, copia en USB o segundo dispositivo. Tres copias = entrega segura.',
        },
        {
          titulo: 'Paso 3 · Auto-check MILC #4 + gráfica longitudinal (10 min)',
          texto:
            'Registras los 5 valores actuales y dibujas en el diario las cuatro líneas: #1 (P1·S1), #2 (P1·S11), #3 (P2·S1), #4 (hoy). Por primera vez tienes una gráfica visible de tu trayectoria.',
        },
        {
          titulo: 'Paso 4 · Pre-mortem del proyecto (10 min)',
          texto:
            'Imagina que tu Escuta fracasa en P3·S11. Pregúntate: "Si esto fracasa, ¿por qué probablemente sea?". Anota 2 riesgos + 2 acciones para mitigarlos. Esto es anticipación estoica.',
        },
        {
          titulo: 'Paso 5 · Definición de equipos de sustentación P3 (5 min)',
          texto:
            'Quien quiera sustentar individualmente, lo declara. Quien quiera en pareja, busca compañero. Se firman compromisos visibles para todos.',
        },
        {
          titulo: 'Paso 6 · Marcar el mapa + entrada de cierre del diario (5 min)',
          texto:
            'En la cartelera la marca de cierre P2. En el diario respondes: "¿Qué tuve que cambiar de mi idea inicial y por qué?"',
        },
      ],
    },
    {
      tipo: 'quiz',
      titulo: 'Quiz de cosecha intermedia · Síntesis cruzada P1 + P2',
      instrucciones: '5 preguntas que exigen integrar lo aprendido en los dos periodos.',
      preguntas: [
        {
          enunciado: 'Para guardar tu Escuta de manera segura, lo más prudente es:',
          opciones: [
            'Solo en el celular',
            'Solo en la nube',
            'En el equipo + nube + copia en otro dispositivo (regla 3-2-1)',
            'Imprimirlo en papel',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Tres copias en al menos dos medios distintos. Si una falla, las otras te salvan.',
          feedbackIncorrecto:
            '❌ Una sola copia es una sola falla del destino. La regla 3-2-1: 3 copias, 2 medios distintos, 1 fuera del lugar habitual.',
        },
        {
          enunciado: 'Si el archivo de audio del Escuta pesa 200 MB, ¿dónde NO conviene guardarlo?',
          opciones: [
            'En USB',
            'En OneDrive',
            'En la memoria RAM',
            'En el disco duro',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Correcto. La RAM es memoria volátil — se borra al apagar el equipo. No es para guardar archivos.',
          feedbackIncorrecto:
            '❌ La RAM es memoria temporal de trabajo, NO de almacenamiento. Lo guardado allí desaparece al apagar.',
        },
        {
          enunciado: 'Conectar tu micrófono USB y que NO funcione puede deberse a:',
          opciones: [
            'Que tienes mal humor',
            'Driver, puerto físico o software de grabación',
            'El día de la semana',
            'El idioma del computador',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Diagnóstico ordenado: revisa driver (software), puerto (hardware) y programa que lo usa.',
          feedbackIncorrecto:
            '❌ La falla siempre tiene causa material: hardware, software o configuración. No depende del clima ni del humor.',
        },
        {
          enunciado: 'Tu gráfica de auto-check #1 → #4 muestra una dimensión que bajó. ¿Qué haces?',
          opciones: [
            'La ignoras',
            'La borras',
            'Escribes una frase en el diario con la causa y un acto concreto para P3',
            'Mientes en #5',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Una bajada es información valiosa: te dice dónde poner energía en el último periodo.',
          feedbackIncorrecto:
            '❌ Ignorar, borrar o mentir destruye el valor del auto-check. Una bajada es una pista, no una falla.',
        },
        {
          enunciado: 'El riesgo más probable de tu Escuta para P3 es:',
          opciones: [
            'No hay riesgos',
            'Que se pierda el archivo, que el entrevistado se arrepienta, o que no logres redactar el documento final',
            'Que el día sea soleado',
            'Que el computador no exista',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Tres riesgos reales. Anótalos en tu pre-mortem y decide tu mitigación HOY.',
          feedbackIncorrecto:
            '❌ Negar riesgos no los elimina — los oculta. Los riesgos reales del Escuta se anticipan y se mitigan.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Qué dimensión MILC se mantiene baja desde P1·S1? ¿Qué acto concreto vas a hacer en P3 para moverla?',
    transferencia:
      'Esta semana hazle una copia del audio de tu Escuta a la persona que entrevistaste. Llévaselo en USB o por WhatsApp con su permiso. Es el primer acto público de devolución.',
    cierre:
      'Cosechas el periodo 2: Dussel diría que saber abrir la caja negra es no depender del que cobra por hacerlo. Epicteto diría que lo que revisas a tiempo no te sorprende después. Floridi diría que el cuerpo de la información también necesita cuidado — y hoy lo cuidaste.',
  },
};

export default contenido;
