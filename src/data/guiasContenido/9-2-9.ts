/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 9
 * Tema: Maquetar la revista completa — flujo de trabajo.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-9.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 9,
  titulo: 'Maquetar la revista completa — flujo de trabajo',
  ocultarPDF: false,
  resumen:
    'Produces tu revista digital de 8 páginas con tema propio, sistema visual coherente, exportada como PDF y publicada con URL. Es el producto integrador del periodo.',
  duracionMin: 100,
  subtema: 'Diseño editorial digital · Producto integrador',

  saberAncestral: {
    saber:
      'El diagramador tradicional armaba la revista físicamente, pegando recortes en una mesa, decidiendo qué iba antes y qué después con todo a la vista. En las imprentas del Valle, los maestros diagramadores tenían mesas enormes donde extendían las 16, 24 o 32 páginas a la vez. Caminaban alrededor, miraban desde lejos, ajustaban. La revista nacía como cuerpo completo, no como páginas sueltas.',
    fuente: 'Tradición del diagramador en imprentas colombianas del siglo XX',
    preguntaPuente:
      'Cuando miras una revista bien hecha y la pasas página por página, ¿qué hace que el conjunto se sienta "un cuerpo" y no "8 páginas pegadas"?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El diagramador y la mesa entera', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Anatomía de una revista de 8 páginas', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Flujo de trabajo de maquetación', duracionMin: 15 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Maqueta, exporta y publica tu revista', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Esta es la sesión de cosecha del periodo: aquí converge todo lo aprendido en las 8 sesiones anteriores. Producir una revista de 8 páginas publicada con URL es prueba real de oficio editorial. Pasaste de la teoría al producto.',
    preguntaDetonante:
      'Si dentro de 5 años un futuro empleador te pidiera mostrar UN trabajo del colegio que demostrara tu capacidad de oficio, ¿qué le mostrarías? Hoy puedes producir esa pieza.',
    activacion: {
      titulo: 'El test de la mesa entera',
      descripcion:
        'En 3 minutos, abre 2 revistas reales y déjalas extendidas en orden, página por página. Camina alrededor, mira desde 2 metros. ¿Qué hace que el conjunto se sienta coherente y no fragmentado? Esa mirada panorámica es la del diagramador.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En las sesiones 7 y 8 hiciste accesibilidad y corrección. Hoy aplicas todo el sistema visual sobre tu producto integrador.',
      siguiente:
        'En la sesión 10 (cierre P2) sustentas públicamente tu revista al curso — exposición de 1 minuto por página.',
    },
  },

  conceptosClave: [
    {
      termino: 'Estructura típica de 8 páginas',
      definicion:
        'Portada (p.1) + editorial/sumario (p.2) + contenido principal (p.3-7) + contraportada (p.8). Esta estructura sirve para la mayoría de revistas culturales o temáticas.',
      ejemplo:
        'Bocas o Cromos tienen variaciones, pero la base es la misma: una portada que captura, un sumario que orienta, contenido que desarrolla, contraportada que cierra.',
      emoji: '📰',
    },
    {
      termino: 'Planear antes de maquetar',
      definicion:
        'Antes de tocar la herramienta digital, listar las 8 páginas en cuaderno con qué contendrá cada una. Saltar planeación es la causa principal de revistas que se sienten desordenadas.',
      ejemplo:
        '10 minutos planeando ahorran 2 horas de reproceso. La diferencia entre amateur y profesional pasa por aquí.',
      emoji: '📋',
    },
    {
      termino: 'Coherencia visual entre páginas',
      definicion:
        'Las 8 páginas comparten grilla, tipografía y paleta. Cambiar el sistema en la página 4 rompe la sensación de "un cuerpo". La coherencia es lo que diferencia revista de carpeta de imágenes.',
      ejemplo:
        'Si tu titular usa Bricolage Grotesque en p.1, p.2, p.3, pero en p.4 cambias a Playfair sin razón, el lector siente extrañeza aunque no sepa explicar por qué.',
      emoji: '🧵',
    },
    {
      termino: 'Ritmo del conjunto',
      definicion:
        'Variación visual entre páginas: algunas con más texto, otras con más imagen, otras de respiro. Sin variación, las 8 páginas se sienten iguales y aburren.',
      ejemplo:
        'Después de un spread con mucho texto, la siguiente puede ser una página con imagen grande + cita destacada. El ojo agradece el respiro.',
      emoji: '🎵',
    },
    {
      termino: 'Exportar como PDF',
      definicion:
        'Formato profesional para compartir o imprimir. Conserva tipografía, color y disposición exactos. JPG por separado pierde la integridad del documento.',
      ejemplo:
        'En Figma: File > Export > PDF (selecciona todas las páginas). En Canva: Descargar > PDF (Estándar o Imprimir). En Adobe Express: Exportar > PDF.',
      emoji: '📄',
    },
    {
      termino: 'URL pública',
      definicion:
        'Enlace accesible para cualquiera con internet. Sube tu PDF a Google Drive con permisos públicos, Issuu (gratis para revistas), o página en Notion. La URL hace tu revista existir en el mundo.',
      ejemplo:
        'drive.google.com/file/xxxxxx con permiso "Cualquiera con el enlace puede ver". O issuu.com/turevista. La URL es prueba de existencia pública.',
      emoji: '🔗',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Anatomía de una revista',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma 2 revistas reales con 8-16 páginas: una cultural seria (Bocas, El Malpensante), una temática (música, deporte, ciencia).',
        'Para cada una: ¿qué va en portada? ¿qué en contraportada? ¿cómo se distribuye el contenido?',
        'Identifica si hay sumario, editorial u otras secciones recurrentes.',
        'Dibuja esquema de 8 páginas de UNA de las 2 con etiqueta de qué contiene cada una.',
      ],
      cuaderno: {
        titulo: 'Anatomía de una revista',
        formato: 'Esquema dibujado de 8 páginas (p.1 a p.8) con etiqueta de contenido',
        extension: '1 página de cuaderno con esquema',
      },
      criterios: [
        '2 revistas reales analizadas',
        'Esquema dibujado de 8 páginas con etiquetas',
        'Puedes nombrar la función de cada una de las 8 páginas',
        'Identificas secciones recurrentes (sumario, editorial)',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Plan de mi revista de 8 páginas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige tema de tu revista (cultura local, ciencia, deporte, música, arte, etc.).',
        'Lista las 8 páginas con contenido específico que tendrá cada una.',
        'Para cada página decide el tipo de visual: foto, texto, infografía, cita, mixto.',
        'Verifica que haya ritmo (no 8 páginas iguales).',
      ],
      cuaderno: {
        titulo: 'Plan de mi revista de 8 páginas',
        formato: 'Tabla 3 columnas (Página | Contenido | Tipo de visual), 8 filas',
        extension: '8 filas completas',
      },
      criterios: [
        'Tema elegido y declarado',
        '8 páginas con contenido específico',
        'Tipo de visual variado entre páginas',
        'Plan completo antes de tocar herramienta digital',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Maqueta, exporta y publica tu revista',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Abre 8 lienzos A4 vertical en tu herramienta digital (Figma, Canva o Adobe Express).',
        'Aplica grilla guía y paleta de color a todas (coherencia desde el inicio).',
        'Maqueta una a una empezando por la más simple. Aplica par tipográfico.',
        'Revisa el conjunto cada 2-3 páginas para mantener ritmo.',
        'Exporta como PDF. Sube a Drive/Issuu/Notion con permisos públicos. Verifica URL.',
      ],
      cuaderno: {
        titulo: 'Mi revista de 8 páginas publicada',
        formato: 'Plan + URL pública + capturas de portada + 1 spread + contraportada + reflexión',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        '8 páginas maquetadas con sistema visual coherente',
        'Portada con titular + imagen + número/fecha',
        'Editorial o sumario en p.2',
        'Contraportada en p.8 (no en blanco)',
        'Exportada como PDF',
        'URL pública accesible y verificada',
        'Reflexión personal sobre decisión más fuerte y más débil',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Lee la revista de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia URLs. Abre la revista del compañero en pestaña incógnita.',
        'Pasa página por página. Califica del 1 al 5: (a) ¿se siente "un cuerpo" o "páginas sueltas"?, (b) ¿hay ritmo entre páginas?, (c) ¿coherencia visual en las 8?',
        'Marca con ✨ la página más fuerte y con 🚩 la más débil.',
        'Conversen 5 min: ¿qué consejo se darían para la sustentación oral de la próxima sesión?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la revista de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación + 1 consejo',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Marcaste página más fuerte y más débil',
        'La observación es constructiva',
        'El consejo para la sustentación es accionable',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el flujo de maquetación',
      instrucciones:
        '5 preguntas para confirmar que dominas la lógica del producto integrador. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué va típicamente en la página 2 de una revista de 8 páginas?',
          opciones: ['Contraportada', 'Editorial o sumario', 'Anuncio publicitario', 'Imagen suelta'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La p.2 suele tener editorial (presentación del número) o sumario (índice de contenidos). Orienta al lector antes de entrar al contenido principal.',
          feedbackIncorrecto:
            'Editorial o sumario. La p.2 orienta al lector — le dice "qué vas a encontrar y por qué importa". Sin ella, el lector entra al contenido sin contexto.',
        },
        {
          enunciado: '¿Por qué planear las 8 páginas en cuaderno antes de abrir la herramienta digital?',
          opciones: [
            'Por costumbre escolar',
            'Porque saltar planeación es la causa principal de revistas que se sienten desordenadas',
            'Por moda',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. 10 minutos planeando ahorran 2 horas de reproceso. La diferencia entre amateur y profesional pasa por la planeación previa.',
          feedbackIncorrecto:
            'Planeación previa = revista coherente. Sin ella, llegas a la página 4 sin saber qué va en la 6. Reproceso garantizado.',
        },
        {
          enunciado: '¿Qué hace que las 8 páginas se sientan "un cuerpo" y no "páginas sueltas"?',
          opciones: [
            'Que sean todas iguales',
            'Coherencia visual (mismo grilla + tipografía + paleta) combinada con ritmo (variación entre páginas)',
            'Que tengan numeración',
            'Que tengan el mismo color de fondo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Coherencia para que se sienta cuerpo + variación para que tenga ritmo. Iguales = aburren. Sin coherencia = se sienten sueltas.',
          feedbackIncorrecto:
            'Coherencia + ritmo. Mismo sistema visual (coherencia) pero variación de contenido y peso entre páginas (ritmo). Las dos cosas a la vez.',
        },
        {
          enunciado: '¿Por qué exportar como PDF y no como JPGs sueltos?',
          opciones: [
            'PDF es más bonito',
            'PDF conserva tipografía, color y disposición exactos en un documento unificado',
            'JPGs no se pueden compartir',
            'PDF pesa menos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. PDF preserva integridad del documento. JPGs sueltos pierden la unidad de revista y desordenan las páginas.',
          feedbackIncorrecto:
            'PDF = documento unificado con tipografía, color y disposición fieles. JPG suelto pierde la integridad de revista — son fotos sueltas, no publicación.',
        },
        {
          enunciado:
            'En el saber ancestral del diagramador colombiano, ¿qué aplica a tu uso de Figma/Canva hoy?',
          opciones: [
            'Nada — ahora es digital',
            'Que la revista nace como cuerpo completo, no como páginas sueltas — hay que verla entera, no una a una',
            'Que las mesas de antes eran mejores',
            'Que se pegaban recortes',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El diagramador caminaba alrededor de la mesa para ver todo. Tú abres las 8 páginas en miniatura para ver el cuerpo completo. Mismo gesto, formato digital.',
          feedbackIncorrecto:
            'Ver entera, no una a una. El diagramador de antes y tú con Figma comparten la mirada panorámica. La revista es cuerpo, no colección.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte la URL de tu revista con 3 personas distintas: un familiar, un compañero, un docente. Pide UNA observación honesta a cada uno. Esas tres voces externas son insumo de la sustentación pública de la sesión 10.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda revista es un acto editorial: decide quién aparece, quién no, en qué tono y con qué peso.',
      preguntaEspejo:
        '¿Quién aparece en mi revista y qué dice eso de mis decisiones editoriales inconscientes? ¿Qué historias del Valle o de mi colegio merecen aparecer y no estaban?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Persistir 4 horas en un oficio largo enseña más que 40 horas dispersas.',
      preguntaEspejo:
        '¿Qué proyectos he dejado a medias por cansancio o aburrimiento? ¿Qué cambiaría si entrenara la persistencia con esta revista como ejercicio?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Publicar es añadir un agente más a la infoesfera; cuídala como cuidarías un legado.',
      preguntaEspejo:
        'Si dentro de 5 años alguien encuentra mi revista, ¿la voy a defender o la voy a esconder? ¿Qué cambia en mi maquetación si la pienso para durar?',
    },
  },

  cincoDimensiones: {
    personal:
      'Produjiste tu primera pieza editorial completa con URL pública — prueba real de oficio.',
    emocional:
      'Persistir 40 minutos en un trabajo largo entrenó algo más valioso que cualquier nota: tu capacidad de terminar.',
    ciudadana:
      'Tu revista aporta una voz nueva a la infoesfera — pequeña pero tuya, no copia de otras.',
    local:
      'Heredaste el oficio del diagramador colombiano del siglo XX: ver el cuerpo entero, no la página suelta.',
    intergeneracional:
      'Las imprentas de tu abuelo y tu Figma de hoy se encuentran en el mismo principio: la revista es cuerpo.',
  },
};

export default contenido;
