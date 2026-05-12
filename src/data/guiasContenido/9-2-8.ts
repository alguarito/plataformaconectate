/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 8
 * Tema: Edición y corrección — el ojo crítico.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-8.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 8,
  titulo: 'Edición y corrección — el ojo crítico',
  ocultarPDF: false,
  resumen:
    'Aplicas el oficio del corrector sobre tu propia revista: 10 errores corregidos (5 de texto + 5 de diseño) con bitácora antes/después.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Edición y corrección',

  saberAncestral: {
    saber:
      'El oficio del corrector existía mucho antes de Word. En la tipografía colombiana del siglo XX —las imprentas de Cali, Bogotá, Medellín, el Eje Cafetero— el corrector era casi tan importante como el diagramador. Su trabajo: leer con un ojo distinto al del autor, encontrar lo que el autor ya no ve. Tildes faltantes, dedos cambiados, mayúsculas mal puestas. El corrector salvaba revistas, periódicos y libros enteros antes de imprimir.',
    fuente: 'Tipografía colombiana del siglo XX — oficio del corrector',
    preguntaPuente:
      '¿Cuándo fue la última vez que volviste a leer un texto tuyo después de unas horas? ¿Qué encontraste que no habías visto al escribirlo?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El oficio del corrector', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Errores en publicaciones reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '10 errores comunes (texto + diseño)', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '10 correcciones sobre tu revista', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una revista profesional dedica 30% del tiempo a edición y corrección antes de publicar. Saltarse esa fase es la diferencia entre trabajo amateur y profesional, no importa cuán bueno fuera el primer borrador.',
    preguntaDetonante:
      'Si publicaras un texto con tres errores ortográficos en tu CV de prácticas — ¿lo leerían igual? ¿Qué dice eso sobre el rol invisible del corrector?',
    activacion: {
      titulo: 'Lectura en voz alta',
      descripcion:
        'En 3 minutos, lee en voz alta el primer párrafo de algo que escribiste recientemente (post, ensayo, mensaje largo). Vas a notar errores que no veías al leerlo en silencio. La voz expone lo que el ojo deja pasar.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 7 hiciste accesibilidad ética. Hoy aplicas oficio técnico: el ojo crítico del corrector.',
      siguiente:
        'En la sesión 9 maquetarás tu revista completa de 8 páginas — con todo el sistema visual y correcciones aplicadas.',
    },
  },

  conceptosClave: [
    {
      termino: 'Corrección de texto',
      definicion:
        'Revisión ortográfica, gramatical, de puntuación y coherencia. No es reescritura — es limpieza. El corrector quita errores sin tocar el estilo del autor.',
      ejemplo:
        '"Esta es una guía muy importante para los los estudiantes" → "Esta es una guía muy importante para los estudiantes" (eliminé palabra repetida).',
      emoji: '✍️',
    },
    {
      termino: 'Corrección de diseño',
      definicion:
        'Revisión de alineación, espacios, tipografía consistente, color con función, calidad de imágenes. Lo que ojo entrenado nota y ojo apresurado pasa por alto.',
      ejemplo:
        'Titular en Bricolage Grotesque 36pt, pero un subtítulo accidentalmente quedó en Inter 24pt. Mezcla rompe coherencia del sistema visual.',
      emoji: '🎨',
    },
    {
      termino: 'Distancia del autor',
      definicion:
        'Cuando tú escribes, tu cerebro completa lo que falta. Cuando lees después de tiempo (o lo lee otra persona), no completas. Por eso corrección efectiva requiere distancia.',
      ejemplo:
        'Acabas de escribir un texto. Si lo corriges inmediatamente, pasarás errores por alto. Si descansas 1 día y vuelves, encontrarás el doble.',
      emoji: '⏳',
    },
    {
      termino: 'Leer en voz alta',
      definicion:
        'Técnica más antigua y efectiva de corrección. La voz expone errores que el ojo silencioso deja pasar: frases muy largas, palabras repetidas, puntuación incorrecta.',
      ejemplo:
        'Lee tu texto en voz alta. Si una frase no puedes leerla sin respirar varias veces, es demasiado larga — divídela.',
      emoji: '🗣',
    },
    {
      termino: '5 errores típicos de texto',
      definicion:
        'Tildes faltantes/sobrantes, palabras repetidas, puntuación incorrecta (comas, puntos), números mal escritos, frases ambiguas o muy largas. Estos 5 cubren el 80% de errores comunes.',
      ejemplo:
        'Lista de control rápida: ¿tildes correctas? ¿palabras repetidas en frases cercanas? ¿comas bien puestas? ¿números coherentes? ¿frases no más de 25 palabras?',
      emoji: '📝',
    },
    {
      termino: '5 errores típicos de diseño',
      definicion:
        'Alineación inconsistente, espacios dobles entre palabras, tipografía mezclada (más de tu par), color sin función, imagen pixelada o de baja calidad.',
      ejemplo:
        'Si un párrafo está alineado a la izquierda y otro al centro sin razón clara, el ojo se descoloca. Pequeño detalle pero significativo.',
      emoji: '📐',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 errores en publicaciones reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma un periódico nacional impreso o digital y busca al menos UN error ortográfico, de redacción o diseño.',
        'Toma una revista cultural conocida y haz lo mismo.',
        'Toma un post viral en redes con muchos likes y busca al menos UN error.',
        'Anota: la corrección sí importa, pues incluso publicaciones grandes tienen errores.',
      ],
      cuaderno: {
        titulo: '3 errores en publicaciones reales',
        formato: 'Tabla 3 columnas (Publicación | Tipo de error | Cómo lo corregirías), 3 filas',
        extension: '3 filas + 1 reflexión',
      },
      criterios: [
        'Encontré al menos 1 error en publicación profesional',
        'Encontré al menos 1 error en post viral',
        'Reconozco que la corrección no es lujo — es oficio incumplido por muchos',
        'Identifiqué tipos de error: ortográfico, de redacción, de diseño',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '10 errores comunes (5 texto + 5 diseño)',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'En dos columnas (Texto | Diseño) escribe los 5 errores más comunes de cada capa.',
        'Para cada uno da un ejemplo concreto (inventado o real).',
        'Marca con ★ los 2 errores que sospechas que tienes en tu revista.',
        'Cierra con 1 línea: ¿qué te impide hoy corregir bien?',
      ],
      cuaderno: {
        titulo: '10 errores comunes',
        formato: '2 columnas con 5 errores cada una + ejemplo + marca ★ en 2 que sospechas tener',
        extension: '10 errores + 1 línea de cierre',
      },
      criterios: [
        'Tabla completa con 5 errores de texto y 5 de diseño',
        'Cada uno tiene ejemplo concreto',
        'Identifiqué honestamente 2 sospechas en mi propio trabajo',
        'Reconozco la 10 errores en cualquier publicación',
      ],
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: '10 correcciones sobre tu propia revista',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Descansa al menos 1 hora antes de abrir tu trabajo (idealmente 1 día).',
        'Lee tus spreads y portada en voz alta una vez.',
        'Busca 5 errores de texto y márcalos.',
        'Busca 5 errores de diseño y márcalos.',
        'Para cada error: captura ANTES + corrección + captura DESPUÉS + justificación.',
      ],
      cuaderno: {
        titulo: 'Bitácora de 10 correcciones',
        formato: '10 fichas mini con captura antes/después + tipo + justificación + reflexión final',
        extension: '1.5 páginas de cuaderno',
      },
      criterios: [
        '10 correcciones documentadas (mínimo 5 texto + 5 diseño)',
        'Cada una con captura ANTES y DESPUÉS',
        'Cada una con tipo de error y justificación',
        'Reflexión final identifica patrón en tus errores',
        'La bitácora demuestra que descansaste y leíste en voz alta',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa correcciones de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia bitácoras. Revisa las 10 correcciones del compañero.',
        'Califica del 1 al 5: (a) ¿cumplió 5 de texto + 5 de diseño?, (b) ¿las correcciones son genuinas (no preferencias personales)?, (c) ¿hay capturas antes/después?',
        'Marca con ✨ la corrección más sutil y con 🚩 alguna que parece más preferencia que error.',
        'Conversen 5 min: ¿qué error fue más frecuente en sus revistas?',
      ],
      cuaderno: {
        titulo: 'Evaluación de correcciones de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Marcaste corrección sutil y posible preferencia',
        'La observación es constructiva',
        'La conversación cerró con patrón compartido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el oficio del corrector',
      instrucciones:
        '5 preguntas para confirmar que aplicas el ojo crítico con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la técnica más antigua y efectiva de corrección de texto?',
          opciones: [
            'Usar corrector automático de Word',
            'Leer el texto en voz alta',
            'Imprimir y revisar',
            'Pedirle a un amigo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Leer en voz alta expone errores que el ojo deja pasar. Frases muy largas, palabras repetidas, puntuación incorrecta — la voz los señala.',
          feedbackIncorrecto:
            'Leer en voz alta. La voz expone lo que el ojo silencioso deja pasar. Es la técnica de corrección más antigua y más efectiva.',
        },
        {
          enunciado: '¿Por qué necesitas "distancia del autor" para corregir bien tu propio texto?',
          opciones: [
            'Para descansar',
            'Porque cuando escribes, tu cerebro completa lo que falta y no ves los errores',
            'Por moda',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Tu cerebro autor completa errores automáticamente. Solo con tiempo o distancia los puedes ver. Por eso un día de descanso multiplica errores encontrados.',
          feedbackIncorrecto:
            'El cerebro autor autocompleta. Solo con distancia (tiempo o persona) los errores se hacen visibles. Por eso corregir inmediatamente es ineficaz.',
        },
        {
          enunciado: '¿Cuál es la diferencia entre corrección y reescritura?',
          opciones: [
            'No hay diferencia',
            'Corrección limpia errores sin tocar el estilo; reescritura rehace el texto',
            'Reescritura es más rápida',
            'Solo los profesionales reescriben',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. El corrector limpia, no reescribe. Respeta el estilo del autor. Reescribir es otra etapa editorial — más invasiva.',
          feedbackIncorrecto:
            'Corrección = limpia errores manteniendo el estilo. Reescritura = rehace el texto. El corrector profesional sabe distinguir las dos para no excederse.',
        },
        {
          enunciado: '¿Cuántos errores comunes cubren las dos listas (texto + diseño)?',
          opciones: ['3 en total', '10 en total (5 texto + 5 diseño)', '20 en total', '50 en total'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. 10 errores comunes cubren el 80% de problemas típicos. Tener lista clara hace la corrección sistemática, no caprichosa.',
          feedbackIncorrecto:
            '10 errores (5 texto + 5 diseño). Una lista clara te ahorra perder el foco. Si revisas con esa lista en mente, cubres lo crítico.',
        },
        {
          enunciado:
            'En el saber ancestral del corrector de la tipografía colombiana, ¿qué aplica directamente a Word de hoy?',
          opciones: [
            'Nada — Word automatiza todo',
            'Que el corrector lee con ojo distinto al del autor; Word marca errores pero no los corrige por ti',
            'Que la tinta era mejor',
            'Que solo los expertos podían corregir',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Word te alerta pero no decide. El criterio del corrector profesional sobrevive en la persona, no en el software.',
          feedbackIncorrecto:
            'Word asiste, no reemplaza. El corrector lee con criterio diferente al autor; alguien tiene que aplicar ese criterio. La máquina no decide qué es error.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica el ojo del corrector a UN texto tuyo que vayas a publicar (post, correo, trabajo escolar). Descansa, lee en voz alta, busca los 10 errores comunes. Anota qué encontraste. La práctica se vuelve hábito si la repites 5 veces.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda corrección lingüística contiene una decisión política sobre qué lengua se considera legítima.',
      preguntaEspejo:
        '¿Cuando corrijo, estoy quitando errores o también borrando voces regionales? ¿Qué se preserva y qué se uniforma?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El cuidado paciente de lo que parece pequeño es la mayor virtud del oficio.',
      preguntaEspejo:
        '¿Me canso de buscar errores pequeños o veo en cada uno una oportunidad de oficio? ¿Qué cambia si los tomo como práctica espiritual y no como tarea?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La calidad informacional en la infoesfera depende de millones de actos de corrección invisibles.',
      preguntaEspejo:
        '¿Estoy contribuyendo a una infoesfera más legible o le sumo ruido cuando publico sin corregir? ¿Qué cambia si me trato como corrector profesional aunque sea estudiante?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aplicaste disciplina sobre tu propio trabajo — separaste autor de corrector y elegiste el segundo rol.',
    emocional:
      'Resististe la tentación de defenderte de tus errores — abrazaste el oficio del corrector con humildad.',
    ciudadana:
      'Tu corrección aporta a una infoesfera más legible. Pequeño acto, gran consecuencia colectiva.',
    local:
      'Heredaste el oficio del corrector de imprenta colombiana — paciente, riguroso, invisible y esencial.',
    intergeneracional:
      'El corrector de El País del Valle hace 50 años y tu corrección de hoy comparten ética: cuidado paciente por el lector.',
  },
};

export default contenido;
