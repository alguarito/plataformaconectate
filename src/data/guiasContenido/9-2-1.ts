/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 1
 * Tema: ¿Qué es diseñar? — orden, jerarquía, intención.
 * Apertura del Periodo 2 (Diseño editorial digital).
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-1.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 1,
  titulo: '¿Qué es diseñar? — orden, jerarquía, intención',
  ocultarPDF: false,
  resumen:
    'Apertura del Periodo 2. Entrenas el ojo en piezas editoriales reales y entiendes los 3 pilares de todo buen diseño.',
  duracionMin: 90,
  subtema: 'Apertura · Diseño editorial digital',

  saberAncestral: {
    saber:
      'Diseñar no nació con Figma. Los pasquines populares del Valle, los almanaques campesinos, los pliegos parroquiales y las cartillas escolares de los años 50 eran piezas de diseño con propósito: jerarquía clara, tipografía legible en la plaza, orden de información que respondía a una necesidad concreta de la comunidad.',
    fuente: 'Pasquines, almanaques, pliegos parroquiales y cartillas del Valle del Cauca',
    preguntaPuente:
      '¿Qué tienen en común un pasquín del Valle hace 100 años y una historia de Instagram bien hecha hoy? ¿Y en qué se diferencian profundamente?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Pasquines y oficio editorial', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: '3 productos editoriales reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '3 pilares del diseño', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Análisis comparado', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Tu próxima publicación en redes también es diseño editorial — aunque no lo pienses así. Entrenar el ojo a ver decisiones de diseño que otros toman sin que las notes es ventaja profesional inmediata. Sin esto, copias tendencias sin entenderlas.',
    preguntaDetonante:
      'Mira la página de Instagram que más sigues. ¿Qué decisiones de diseño tomó esa persona o esa marca para que se vea así? ¿Cuáles podrías imitar y cuáles inventar?',
    activacion: {
      titulo: 'Test del primer vistazo',
      descripcion:
        'En 3 minutos, abre un libro, una revista o un periódico que tengas a mano. Mira la portada o primera página durante exactamente 5 segundos. Cierra el producto. Anota qué viste. Eso que recordaste es lo que el diseñador logró que se quedara contigo.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En el Periodo 1 cerraste con tu manifiesto del técnico crítico. Ahora aplicas esa mirada a la técnica más cotidiana: cómo se comunica la información.',
      siguiente:
        'En la sesión 2 verás la cuadrícula como primer principio operativo del orden — la columna vertebral invisible de toda página.',
    },
  },

  conceptosClave: [
    {
      termino: 'Orden',
      definicion:
        'La secuencia narrativa que propone una pieza editorial: qué va antes, qué después. El ojo del lector recorre la página siguiendo ese orden, sepa o no que lo está siguiendo.',
      ejemplo:
        'Una revista bien diseñada te lleva del titular al subtítulo, al lead, al cuerpo y al pie de foto en ese orden. No es accidente — es decisión.',
      emoji: '🔢',
    },
    {
      termino: 'Jerarquía',
      definicion:
        'La distinción visual entre lo más importante y lo secundario. Se establece con tamaño, peso, color, espacio. Sin jerarquía, todo se ve igual y el ojo no sabe por dónde empezar.',
      ejemplo:
        'El titular es 36pt en negrita. El subtítulo 18pt en regular. El cuerpo 11pt. Esa diferencia te dice qué leer primero sin que nadie te lo explique.',
      emoji: '🏔',
    },
    {
      termino: 'Intención',
      definicion:
        'El propósito de la pieza: informar, persuadir, entretener, recordar. Toda decisión de diseño debe servir a esa intención principal. Sin intención clara, diseñar es decorar.',
      ejemplo:
        'Un periódico tiene intención de informar rápido (titulares grandes, lead claro). Una revista de literatura tiene intención de invitar a lectura larga (tipografía cómoda, espacio generoso).',
      emoji: '🎯',
    },
    {
      termino: 'Decisión visible vs accidente',
      definicion:
        'En una pieza bien diseñada, cada tamaño, color y espacio responde a una decisión. En una pieza apresurada, todo se ve igual — el ojo no sabe qué importa.',
      ejemplo:
        'Si abres dos volantes y uno se siente "claro" y el otro "ruidoso", la diferencia es que el primero tuvo decisiones, el segundo tuvo descuidos.',
      emoji: '🎲',
    },
    {
      termino: 'Espacio negativo (aire)',
      definicion:
        'El espacio sin contenido que respira entre elementos. Es tan importante como el contenido — sin aire, la página agobia. Con aire, la página invita.',
      ejemplo:
        'Compara el feed de Apple con el de una tienda popular online. Apple usa MUCHO espacio en blanco; la otra "aprovecha cada píxel". Resultado: Apple se siente premium, la otra agobia.',
      emoji: '🌬',
    },
    {
      termino: 'Diseñar vs decorar',
      definicion:
        'Diseñar tiene función: resolver un problema de comunicación. Decorar es opcional, agrega sin función clara. El diseño puede ser bonito; pero ser bonito sin función no es diseño.',
      ejemplo:
        'Una etiqueta de medicina debe ser legible al primer vistazo (diseño). Que tenga un dibujito decorativo no la hace mejor — puede empeorarla si distrae.',
      emoji: '⚖️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 productos editoriales bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 3 productos editoriales cerca de ti: un libro, una revista, un periódico o volante.',
        'Para cada uno mira qué se ve PRIMERO (el ojo se va ahí inmediatamente).',
        'Identifica qué viene en SEGUNDO lugar y qué en TERCER lugar.',
        'Nombra UNA decisión de diseño específica que reconoces (tamaño, color, tipografía, espacio).',
      ],
      cuaderno: {
        titulo: '3 productos editoriales bajo la lupa',
        formato: 'Tabla 4 columnas (Producto | Qué se ve primero | Qué viene después | Decisión de diseño identificada), 3 filas',
        extension: '3 filas completas',
      },
      criterios: [
        'Los 3 productos son distintos en formato (libro, revista, periódico/volante)',
        'Identificaste qué se ve primero, segundo, tercero en cada uno',
        'Cada producto tiene al menos UNA decisión específica nombrada',
        'No usaste palabras vagas como "bonito" o "raro"',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '3 pilares del diseño editorial',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada pilar (orden, jerarquía, intención) escribe una ficha con definición en tus palabras.',
        'En cada ficha da un ejemplo de UNO de los 3 productos analizados en Actividad 1 que cumple ese pilar.',
        'Marca con ★ cuál pilar te parece más fuerte en cada uno de tus 3 productos.',
        'Cierra con 1 párrafo: ¿qué pilar es más difícil de lograr y por qué?',
      ],
      cuaderno: {
        titulo: '3 pilares del diseño editorial',
        formato: '3 fichas con definición tuya + ejemplo de tus productos analizados',
        extension: '3 fichas + 1 párrafo de cierre',
      },
      criterios: [
        'Cada definición está en tus palabras (no copia de libro)',
        'Cada ficha tiene ejemplo de uno de tus 3 productos',
        'Identificaste qué pilar es más fuerte en cada producto',
        'Reflexionaste honestamente sobre cuál pilar es más difícil',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Análisis comparado de 3 productos editoriales',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe una introducción (3-4 renglones) sobre qué 3 productos elegiste y por qué.',
        'Analiza cada producto aplicando los 3 pilares (orden, jerarquía, intención).',
        'Escribe comparación cruzada: qué tienen en común los 3, qué los diferencia.',
        'Cierra con conclusión personal: ¿qué decisión de diseño quieres recordar para tu propia revista del periodo?',
      ],
      cuaderno: {
        titulo: 'Análisis comparado de 3 productos editoriales',
        formato: '4 secciones escritas + dibujo/esquema simple de cada producto',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        '3 productos distintos analizados',
        'Los 3 pilares aplicados a cada uno',
        'Al menos 1 ejemplo específico por producto (no generalidad)',
        'Comparación cruzada con común y diferencia',
        'Conclusión personal con decisión accionable',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el análisis de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee el análisis del compañero sin interrumpir.',
        'Califica del 1 al 5: (a) ¿analizó los 3 productos con los 3 pilares?, (b) ¿hay ejemplos específicos?, (c) ¿la conclusión personal es accionable?',
        'Marca con ✨ el análisis más sólido y con 🚩 las generalidades.',
        'Conversen 5 min: ¿qué decisión de diseño común se llevan ambos para su revista?',
      ],
      cuaderno: {
        titulo: 'Evaluación del análisis de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste el análisis más sólido y las generalidades',
        'La observación menciona una decisión común',
        'La conversación cerró con compromiso compartido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los 3 pilares del diseño',
      instrucciones:
        '5 preguntas para confirmar que dominas orden, jerarquía e intención. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia clave entre "diseñar" y "decorar"?',
          opciones: [
            'No hay diferencia',
            'Diseñar tiene función (resuelve un problema); decorar es opcional y no resuelve nada',
            'Diseñar es para profesionales; decorar para todos',
            'Diseñar usa software; decorar usa lápiz',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Diseñar resuelve un problema de comunicación. Decorar agrega sin función clara. Lo bonito puede ser diseño o decoración — la prueba es si tiene función.',
          feedbackIncorrecto:
            'Diseñar = función. Decorar = adorno opcional. Una etiqueta con dibujitos puede ser decoración; una etiqueta con jerarquía clara y legible es diseño.',
        },
        {
          enunciado: 'En una revista, los titulares son 36pt, los subtítulos 18pt, el cuerpo 11pt. ¿Qué principio aplica esa decisión?',
          opciones: ['Orden', 'Jerarquía', 'Intención', 'Decoración'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. La jerarquía se establece con tamaño, peso, color o espacio. Los distintos puntos tipográficos te dicen qué leer primero.',
          feedbackIncorrecto:
            'Jerarquía. Los tamaños distintos crean orden de importancia: titular > subtítulo > cuerpo. Sin esa jerarquía, el ojo no sabe qué leer primero.',
        },
        {
          enunciado: '¿Para qué sirve el "espacio negativo" en diseño editorial?',
          opciones: [
            'Para ahorrar tinta',
            'Para que la página respire — sin él, agobia. Con él, invita',
            'Para tapar errores',
            'Para llenar espacio si falta contenido',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El aire entre elementos es tan importante como el contenido. Apple usa mucho espacio en blanco y por eso se siente premium.',
          feedbackIncorrecto:
            'El espacio negativo hace respirar la página. Sin él, la información se siente apretada y agobia. Con él, la lectura es invitante.',
        },
        {
          enunciado: 'Si un periódico tiene titulares grandes, lead claro y datos rápidos, ¿qué intención tiene?',
          opciones: [
            'Informar rápido',
            'Invitar a lectura larga',
            'Entretener',
            'Vender productos',
          ],
          respuestaIndex: 0,
          feedbackCorrecto:
            'Sí. Diseño coherente con intención de informar rápido. Un periódico no compite con una novela — compite con el tiempo del lector de mañana.',
          feedbackIncorrecto:
            'Informar rápido. El periódico debe entregar la noticia en segundos. Por eso titulares grandes, lead claro, datos rápidos. La intención modela el diseño.',
        },
        {
          enunciado:
            'En el saber ancestral de los pasquines del Valle, ¿qué aplica a tu próxima publicación digital?',
          opciones: [
            'Nada — los pasquines son antiguos',
            'Que cada elemento (jerarquía, tipografía, orden) responde a una necesidad concreta de comunicación',
            'Que se hacían en papel',
            'Que eran solo para adultos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El pasquín bien hecho tenía jerarquía clara, tipografía legible y orden propósito. Tu post de Instagram bien hecho cumple los mismos 3 pilares.',
          feedbackIncorrecto:
            'Cada elemento responde a necesidad concreta. Pasquín y post de redes comparten lógica: comunicar con claridad. La forma cambia, los pilares se mantienen.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, lleva tu cuaderno y cada vez que veas una pieza editorial (cartel, volante, libro, post de redes), anota UNA decisión de diseño que te llamó la atención. Al cabo de 3 días lee la lista — vas a notar cuántas decisiones pasan invisibles. El próximo lunes la traemos como insumo de la sesión 2.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Diseñar es decidir quién puede leer; toda decisión de diseño excluye a alguien.',
      preguntaEspejo:
        '¿A quién excluyen las piezas editoriales que admiro? ¿Y mis propias piezas, a quién dejan afuera sin darme cuenta?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo sencillo bien hecho es más difícil que lo complicado mal hecho.',
      preguntaEspejo:
        'Cuando diseño algo, ¿agrego o quito? ¿Qué de lo que pongo es necesario y qué es solo ruido visual que me da miedo eliminar?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El diseño es el lenguaje silencioso con que la infoesfera se organiza.',
      preguntaEspejo:
        '¿Qué decisiones de diseño en las plataformas que uso a diario moldean mi atención sin que yo lo note? ¿Cuáles diseñaría diferente?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a ver decisiones de diseño que antes eran invisibles — esa mirada es ventaja profesional inmediata.',
    emocional:
      'Reconociste que diseñar no es decorar — es responsabilidad por la atención de otros.',
    ciudadana:
      'Entendiste que diseñar es decidir quién puede leer: cada decisión incluye o excluye.',
    local:
      'Conectaste el pasquín popular del Valle con tu próxima publicación digital — el oficio sobrevive.',
    intergeneracional:
      'La cartilla de tu abuela, el pasquín de tu bisabuelo y tu post de mañana comparten 3 pilares: orden, jerarquía, intención.',
  },
};

export default contenido;
