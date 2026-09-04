/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/7/7-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 2,
  titulo: 'Microsoft 365 — conocer las herramientas del taller digital',
  resumen: 'Microsoft 365 (antes llamado Office 365) es un paquete de aplicaciones que Microsoft ofrece en la nube.',
  duracionMin: 90,
  subtema: 'Microsoft 365 — conocer las herramientas del taller digital',
  preLectura: {
    porQueImporta: 'El producto es ese mapa + tabla comparativa firmados.',
    preguntaDetonante: 'Si tu profe te pide "hacer una encuesta a 30 compañeros sobre qué materia les gusta más, recoger las respuestas en una tabla con gráficos, y presentarla a la clase", ¿qué aplicación usarías para cada paso? ¿Sabrías escogerlas o usarías Word para todo?',
    activacion: {
      titulo: '¿Qué app usarías?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Qué app usarías?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas las 8 apps, las agrupas en 3 familias, comparas con Google Workspace, y armas tu mapa visual.',
      siguiente: 'Esta semana, abre Microsoft 365 en tu cuenta institucional (office.com) y solo mira las 8 aplicaciones disponibles.'
    }
  },
  conceptosClave: [
    {
      termino: 'Microsoft 365',
      definicion: 'Paquete de aplicaciones en la nube de Microsoft. Incluye Word, Excel, PowerPoint, OneNote, Outlook, Teams, OneDrive y Forms. Los colegios tienen licencia gratis para estudiantes. Es la suite más usada en empresas y universidades.',
      ejemplo: 'Tu cuenta institucional te da acceso gratis a todas estas apps en office.com. Inicias sesión con tu correo del colegio y tienes el paquete completo desde cualquier computador.',
      emoji: '🔵'
    },
    {
      termino: 'Familia Documentos',
      definicion: 'Las 4 apps para crear y editar documentos: Word (textos), Excel (tablas y cálculos), PowerPoint (presentaciones), OneNote (cuaderno digital). Cada una tiene un propósito específico.',
      ejemplo: 'Para una tarea de Sociales escrita usas Word. Para calcular el promedio de la clase usas Excel. Para presentar oralmente usas PowerPoint. Para tomar apuntes durante el año usas OneNote.',
      emoji: '📄'
    },
    {
      termino: 'Familia Comunicación',
      definicion: 'Las 2 apps para comunicarse con otros: Outlook (correo formal con calendario) y Teams (chat profesional + videollamadas + reuniones). Reemplazan al WhatsApp en contextos académicos y de trabajo.',
      ejemplo: 'Para escribir al coordinador del colegio usas Outlook. Para hacer reunión virtual con tu equipo de 4 compañeros usas Teams (con cámara, micrófono, pantalla compartida).',
      emoji: '💬'
    },
    {
      termino: 'OneDrive',
      definicion: 'La nube personal de Microsoft. Es como un disco duro pero en internet: tus archivos viven ahí y los abres desde cualquier dispositivo con tu cuenta. La cuenta institucional te da espacio gratis (suele ser 1 TB).',
      ejemplo: 'Cuando creas un Word en línea, automáticamente se guarda en tu OneDrive. Si abres office.com en otro PC y entras con tu cuenta, ese Word sigue ahí.',
      emoji: '☁️'
    },
    {
      termino: 'Google Workspace',
      definicion: 'La alternativa de Google a Microsoft 365. Incluye Docs (= Word), Sheets (= Excel), Slides (= PowerPoint), Gmail (= Outlook), Meet (= Teams), Drive (= OneDrive). Similar funcionalidad, distinto proveedor.',
      ejemplo: 'Algunos colegios usan Google Workspace en lugar de Microsoft. La lógica es la misma, los nombres cambian. Si conoces uno, aprendes el otro en 1 semana.',
      emoji: '🟢'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces las herramientas de Microsoft 365?',
      instrucciones: '5 preguntas para verificar que sabes cuándo usar cada app del paquete.',
      preguntas: [
        {
          enunciado: 'Vas a hacer una presentación oral de 15 diapositivas para Sociales. ¿Qué app usas?',
          opciones: [
            'Word con saltos de página.',
            'PowerPoint.',
            'Excel con celdas grandes.',
            'Outlook.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. PowerPoint está diseñado para diapositivas con texto, imágenes, transiciones, notas del orador. Word podría servir pero no tiene las herramientas específicas.',
          feedbackIncorrecto: 'PowerPoint es la app de presentaciones. Word es para textos largos; Excel para cálculos; Outlook para correo. Cada herramienta para su uso.'
        },
        {
          enunciado: 'Vas a calcular el promedio de calificaciones de 30 compañeros. ¿Qué app?',
          opciones: [
            'Word.',
            'OneNote.',
            'Teams.',
            'Excel.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Excel tiene fórmulas (=PROMEDIO()) que hacen el cálculo automático. Word no tiene cálculos automáticos; OneNote tampoco.',
          feedbackIncorrecto: 'Excel: fórmulas + tablas + gráficos. =PROMEDIO(A1:A30) te da el promedio en 1 segundo. Word puede hacer tabla pero sin cálculos automáticos.'
        },
        {
          enunciado: 'Tu equipo necesita reunión virtual con cámara y compartir pantalla. ¿Qué app?',
          opciones: [
            'WhatsApp.',
            'Outlook.',
            'Teams.',
            'Word.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Teams es la app de Microsoft para reuniones virtuales: video, audio, compartir pantalla, chat, grabación. Mucho mejor que WhatsApp para uso académico/profesional.',
          feedbackIncorrecto: 'Teams es la app de reuniones virtuales en Microsoft 365. Tiene video, audio, pantalla compartida, chat, grabación. WhatsApp es informal, no profesional.'
        },
        {
          enunciado: 'Quieres hacer una encuesta a los 30 compañeros de la clase. ¿Qué app?',
          opciones: [
            'Forms.',
            'Word.',
            'Excel.',
            'PowerPoint.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Forms hace encuestas en línea, recoge respuestas automáticamente, te las muestra en gráfico. En 30 minutos lo que en papel tomaría 2 horas.',
          feedbackIncorrecto: 'Forms: encuestas online + gráficos automáticos. Cada compañero responde por celular, las respuestas llegan a Forms y se grafican solas.'
        },
        {
          enunciado: '¿Cuál es el equivalente de OneDrive en Google Workspace?',
          opciones: [
            'Gmail.',
            'Meet.',
            'Drive.',
            'Docs.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Google Drive es el equivalente de OneDrive: ambos son nubes para guardar archivos. Los conceptos son los mismos, cambia solo el proveedor.',
          feedbackIncorrecto: 'Google Drive = OneDrive (ambos son nubes). Gmail = Outlook (correo), Meet = Teams (reuniones), Docs = Word (texto). Equivalentes funcionales.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprendiendo las herramientas que me darán libertad en mi vida adulta?',
    transferencia: 'Esta semana, abre Microsoft 365 en tu cuenta institucional (office.com) y solo mira las 8 aplicaciones disponibles.',
    cierre: 'Al terminar la clase: (1) podrás identificar las 8 aplicaciones principales de Microsoft 365; (2) sabrás explicar qué hace cada una con 1 ejemplo concreto; (3) podrás aplicar la app correcta a 5 tareas reales; (4) habrás comparado Microsoft 365 con Google Workspace en 5 puntos.'
  },
  saberAncestral: {
    saber: 'Cuando llegabas a una minga grande en el campo de Cartago, lo primero era reconocer las herramientas. En la finca cafetera del Valle del Cauca, alguien organizaba las herramientas de la minga al inicio: canastas para recoger el café, lonas para tender el grano al sol, calabozos (machetes pequeños) para podar, ollas grandes para la comida, cucharas de madera para servir, cántaros para llevar agua. Cada herramienta tenía su uso: canasta no servía para podar, machete no servía para servir sopa. Doña Mercedes la maestra rural enseñaba a los niños que iban por primera vez: "Mire bien cada herramienta. Sepa cuál es cuál. No agarre cualquiera. La minga funciona si cada quien sabe qué herramienta usar". Hoy en tu taller digital pasa lo mismo: Microsoft 365 te ofrece 8 herramientas principales. Cada una tiene su uso. Conocerlas todas te hace eficiente; usar la equivocada te complica el trabajo.',
    preguntaPuente: 'Si tu profe te pide "hacer una encuesta a 30 compañeros sobre qué materia les gusta más, recoger las respuestas en una tabla con gráficos, y presentarla a la clase", ¿qué aplicación usarías para cada paso? ¿Sabrías escogerlas o usarías Word para todo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del oficio)',
      lente: 'lente del nosotros',
      cita: '"Quien conoce las herramientas, manda; quien no las conoce, obedece a quien sí."',
      preguntaEspejo: '¿Estoy aprendiendo las herramientas que me darán libertad en mi vida adulta?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Cada herramienta tiene su uso. Forzarla a otro le quita eficacia y dignidad. Conoce primero su naturaleza."',
      preguntaEspejo: '¿Estoy usando cada herramienta para lo que sirve, o forzando una a hacer trabajo de otra?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era digital)',
      lente: 'lente de la infoesfera',
      cita: '"El paquete de herramientas que dominas define qué decisiones puedes tomar. Más herramientas, más libertad."',
      preguntaEspejo: '¿Qué app del paquete me da más curiosidad? ¿Por qué no me animo a explorarla?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 8 aplicaciones principales de Microsoft 365; (2) sabrás explicar qué hace cada una con 1 ejemplo concreto; (3) podrás aplicar la app correcta a 5 tarea…',
    emocional: 'Usar Word para hacer una tabla con cálculos es como usar un martillo para apretar tornillos: funciona mal y daña la herramienta.',
    ciudadana: 'Hoy hay personas que viven en el siglo XXI sin conocer las herramientas digitales básicas.',
    local: 'Antes de salir, verifica que cada app tiene su ícono, nombre, función y ejemplo.',
    intergeneracional: 'Si solo conoces Word, vas a hacer todo en Word.'
  }
};

export default contenido;
