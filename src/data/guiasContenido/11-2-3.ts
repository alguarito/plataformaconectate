/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 3
 * Tema: Formularios digitales — captura de información sin papel.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-3.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 3,
  titulo: 'Formularios digitales — captura de información sin papel',
  ocultarPDF: false,
  resumen:
    'Los formularios digitales son la libreta del jornal moderna: capturan información estructurada con cálculo automático y respaldo en la nube. Aprendes a diseñar uno funcional con validaciones, lógica condicional y hoja de cálculo enlazada.',
  duracionMin: 90,
  subtema: 'Automatización · Captura de datos',

  saberAncestral: {
    saber:
      'La libreta del jornal de las fincas cafeteras del Valle es un formulario de papel: la abuela apunta cuántos canastos cosechó cada jornalero, cuántas horas, cuánto se pagó. La libreta del fiado del tendero registra quién pidió qué y cuándo. El cuaderno de matrícula del docente apunta nombre, acudiente, dirección. Estos cuadernos comparten una sabiduría: capturar información estructurada, una sola vez, en el momento exacto en que ocurre. Los formularios digitales son esa libreta — pero con cálculo automático, sin tachones, con respaldo en la nube.',
    fuente: 'Libreta del jornal cafetero, libreta del fiado del tendero y cuaderno de matrícula del docente',
    preguntaPuente:
      '¿Cómo sabía la abuela qué campos eran imprescindibles en su libreta del jornal y cuáles sobraban? ¿Y qué pierde un emprendedor novato cuando inventa un formulario de 25 preguntas sin haber mapeado primero el proceso?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La libreta del jornal', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Responde 2 formularios reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del formulario', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu formulario funcional', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Casi toda interacción institucional contemporánea pasa por un formulario digital: universidad, salud, trámites, compras. Saber diseñarlos a los 16 años es alfabetización profesional anticipada.',
    preguntaDetonante:
      'Si tu primo abre una venta de pasteles por WhatsApp, ¿cómo le ayudarías a no perder pedidos por mensaje y a tener todo registrado automáticamente en una hoja?',
    activacion: {
      titulo: '2 formularios en 3 minutos',
      descripcion:
        'Respondes 2 formularios reales (uno bien diseñado, uno mal diseñado) y anotas qué te frustró y qué te facilitó. La experiencia como usuario es la mejor escuela de diseño.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 2 diagramaste tu proceso en BPMN. Hoy automatizas el primer paso del proceso: la captura de información.',
      siguiente:
        'En la sesión 4 conectas el formulario con automatizaciones (Zapier, Make, Apps Script) para que las respuestas disparen acciones automáticas.',
    },
  },

  conceptosClave: [
    {
      termino: '8 tipos de campo básicos',
      definicion:
        'Texto corto, texto largo, opción múltiple, casillas, escala, fecha, email, número. Cada uno responde una pregunta distinta.',
      ejemplo:
        'Nombre: texto corto. Comentario: texto largo. Curso: opción múltiple. Días disponibles: casillas.',
      emoji: '🧱',
    },
    {
      termino: 'Validaciones',
      definicion:
        'Reglas que verifican la respuesta antes de aceptarla: obligatorio, formato email, rango numérico.',
      ejemplo:
        'Campo Email: validación "debe contener @". Campo Edad: validación "entre 10 y 100".',
      emoji: '🛡️',
    },
    {
      termino: 'Lógica condicional',
      definicion:
        'Si responde X, salta a la pregunta Y. Evita preguntar lo irrelevante a cada usuario.',
      ejemplo:
        '"¿Eres mayor de edad?" → No → salta directo al final (no pide otros datos).',
      emoji: '🔀',
    },
    {
      termino: 'Hoja enlazada (destino)',
      definicion:
        'La hoja de cálculo donde llegan las respuestas. Sin destino, las respuestas se quedan en el formulario y nadie las usa.',
      ejemplo:
        'Google Form → Respuestas → Crear hoja vinculada → todas las respuestas aparecen en filas automáticamente.',
      emoji: '📊',
    },
    {
      termino: 'Economía de campos',
      definicion:
        'Cada pregunta paga renta. Si la respuesta no se usa para decidir o actuar, no se pide.',
      ejemplo:
        '8-10 campos máximo en un formulario público. Más de 12 → abandono garantizado.',
      emoji: '✂️',
    },
    {
      termino: 'Prueba como usuario',
      definicion:
        'Antes de publicar, responde tú mismo el formulario 2 veces (todo bien + forzando errores) para detectar problemas.',
      ejemplo:
        'Si tarda más de 3 minutos en completarse, está mal diseñado.',
      emoji: '🧪',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Responde 2 formularios reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Responde los 2 formularios que comparte el docente.',
        'Cronometra cuánto demoraste en cada uno.',
        'Anota qué te frustró y qué te facilitó.',
        'Identifica al menos 2 diferencias concretas de diseño.',
      ],
      cuaderno: {
        titulo: 'Responde 2 formularios',
        formato: 'Tabla 2 filas × 3 columnas (Tiempo | Frustración | Facilidad)',
        extension: '2 filas + 2 líneas de diferencias',
      },
      criterios: [
        'Respondí los 2 formularios completos',
        'Medí tiempo de cada uno',
        'Anoté frustraciones y facilidades específicas',
        'Identifiqué diferencias de diseño concretas',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía del formulario',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Lista los 8 tipos básicos de campo y un ejemplo de cada uno.',
        'Para tu proceso de Sesión 1, decide qué información necesitas capturar.',
        'Elige el tipo de campo apropiado para cada dato.',
        'Marca qué campos serán obligatorios y cuáles tendrán validación.',
      ],
      cuaderno: {
        titulo: 'Anatomía del formulario',
        formato: 'Tabla 4 columnas (Dato | Tipo de campo | Obligatorio | Validación)',
        extension: '8-10 filas',
      },
      criterios: [
        'Los 8 tipos básicos identificados',
        'Cada dato tiene tipo apropiado justificado',
        'Marqué obligatorios y validaciones',
        'Eliminé campos sin uso claro',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu formulario funcional',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Abre forms.google.com y crea formulario con título + descripción.',
        'Agrega 8-10 campos con los tipos elegidos en Actividad 2.',
        'Activa validaciones (obligatorio, formato email, rango numérico) y al menos 1 lógica condicional.',
        'Enlaza a hoja de cálculo desde la pestaña Respuestas y comparte la URL pública.',
      ],
      cuaderno: {
        titulo: 'Mi formulario funcional',
        formato: 'Pantallazo del formulario + URL pública + pantallazo de la hoja',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '8-10 campos con tipos apropiados',
        'Validaciones activas en email, número y obligatorios',
        'Al menos 1 lógica condicional implementada',
        'Hoja de cálculo enlazada activa',
        'URL pública compartible',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Prueba como usuario',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte el formulario con un compañero y cronometra cuánto tarda en responderlo.',
        'Pide que anote qué le confundió y qué le faltó.',
        'Si tardó más de 3 minutos o se confundió en algo, reduce o reescribe.',
        'Vuelve a probar hasta que un compañero lo responda en menos de 3 minutos sin preguntas.',
      ],
      cuaderno: {
        titulo: 'Auditoría con [nombre]',
        formato: 'Tiempo + confusiones + cambios aplicados + tiempo final',
        extension: '1 auditoría',
      },
      criterios: [
        'El compañero respondió sin instrucciones previas',
        'Cronometré tiempo inicial y final',
        'Apliqué cambios basados en su confusión',
        'Logré que se complete en menos de 3 minutos',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica formularios digitales',
      instrucciones:
        '5 preguntas para confirmar que diseñas formularios con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Tu formulario tiene 22 campos y el 70% de usuarios abandona. ¿Cuál es el problema?',
          opciones: [
            'Es normal',
            'Demasiados campos: cada pregunta innecesaria aumenta el abandono',
            'Falta diseño bonito',
            'El tema no interesa',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La economía de campos es ética del diseño. 8-10 es el rango funcional; más de 12 ya es exceso para la mayoría de procesos.',
          feedbackIncorrecto:
            'Cada pregunta innecesaria roba tiempo y aumenta abandono. Pregunta solo lo que vas a usar para decidir o actuar.',
        },
        {
          enunciado: '¿Qué validación pondrías en un campo "correo electrónico"?',
          opciones: [
            'Ninguna',
            'Solo obligatorio',
            'Obligatorio + formato email (debe contener @)',
            'Solo longitud',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Sí. Obligatorio + formato. Sin formato, llegan respuestas como "juancarlos" que no son emails reales y rompen automatizaciones posteriores.',
          feedbackIncorrecto:
            'Obligatorio + formato email. Las dos validaciones juntas garantizan que el dato sirva para contactar al usuario después.',
        },
        {
          enunciado: 'Tu formulario recibe respuestas pero nadie las revisa. ¿Qué falta?',
          opciones: [
            'Más respuestas',
            'Destino claro: hoja enlazada + responsable + frecuencia de revisión',
            'Más validaciones',
            'Mejor diseño',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Sin destino, las respuestas se acumulan sin acción. Todo formulario necesita hoja, responsable y plan de revisión.',
          feedbackIncorrecto:
            'Destino + responsable + revisión. Un formulario sin destino es una caja negra: junta datos sin servir a ninguna decisión.',
        },
        {
          enunciado: '¿Para qué sirve la lógica condicional ("si responde X, salta a Y")?',
          opciones: [
            'Para complicar',
            'Para evitar preguntar lo irrelevante a cada usuario',
            'Por estética',
            'No sirve',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La lógica condicional hace que cada usuario solo responda lo que aplica a su caso. Reduce tiempo y abandono.',
          feedbackIncorrecto:
            'Personalización del recorrido. Si no eres mayor de edad, no tiene sentido preguntarte por tu trabajo: la lógica lo evita.',
        },
        {
          enunciado: 'En el saber ancestral de la libreta del jornal, ¿qué aplica al formulario digital?',
          opciones: [
            'Nada — son tecnologías distintas',
            'Capturar información estructurada en el momento exacto en que ocurre — gesto antiguo, medio nuevo',
            'Que el papel es obsoleto',
            'Que las abuelas no usaban formularios',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La libreta y el formulario comparten oficio: registrar mientras está fresco. El medio cambia, no el gesto.',
          feedbackIncorrecto:
            'Registrar mientras está fresco. La sabiduría del oficio es la misma; el formulario solo automatiza el cálculo y el respaldo.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, pide a 3 personas reales que respondan tu formulario, mide cuánto tarda cada uno y pregúntales qué les confundió. Ajusta con base en lo que digan.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo formulario decide quién puede responder y quién queda fuera por no tener el dispositivo o el conocimiento.',
      preguntaEspejo:
        '¿Quién no podría responder mi formulario digital? ¿Qué canal complementario habilitaría para que la información que pido no excluya a quienes más podrían necesitar el servicio?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La economía de palabras es respeto por el tiempo de quien lee.',
      preguntaEspejo:
        '¿Qué preguntas de mi formulario están "por si acaso" y nunca se usarán? ¿Qué pasaría si las elimino?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los formularios digitales son la infraestructura administrativa invisible de la sociedad contemporánea.',
      preguntaEspejo:
        '¿Cuántos formularios digitales respondí esta semana? ¿Cuántos estaban bien diseñados y cuántos me hicieron perder tiempo? ¿Qué aprendí sobre diseño respondiéndolos?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a diseñar una herramienta que usarás en cualquier emprendimiento, club, evento o trabajo donde necesites capturar información.',
    emocional:
      'Resististe la tentación de "preguntar por si acaso". La economía de campos es disciplina contra el ego del que pide más de lo que necesita.',
    ciudadana:
      'Los trámites estatales son formularios. Saber diseñarlos te permite proponer mejores; saber criticarlos te protege del mal diseño público.',
    local:
      'La libreta del jornal, del fiado, del docente: el oficio del registro estructurado tiene siglos. El medio digital lo acelera, no lo reemplaza.',
    intergeneracional:
      'Lo que la abuela apuntaba con lápiz en libreta, tú lo capturas en Google Forms con cálculo automático. Misma sabiduría, distinto medio.',
  },
};

export default contenido;
