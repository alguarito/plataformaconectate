/**
 * Semillero de Investigación ConectaTE — apartado propio de primer nivel.
 *
 * BORRADOR (2026): en revisión antes de publicación oficial. Aún no está
 * enlazado en la navegación principal; se accede solo por la URL /semillero.
 *
 * Es la casa de la investigación estudiantil STEM de la I.E. Sor María Juliana:
 * un espacio donde estudiantes de 6° a 11° formulan preguntas, indagan con
 * método y producen ciencia real, bajo el modelo pedagógico MILC.
 *
 * Se articula con los programas del hub Explora (que funcionan como sus
 * "canteras" de talento): Salomé · exoplanetas (RECA), Bebras, NASA-IASC y
 * Samsung Solve for Tomorrow. Ver src/data/explora.ts.
 *
 * NOTA DE CONTENIDO: este archivo describe la ESTRUCTURA del semillero (líneas,
 * método, participación). No incluye integrantes, cifras de membresía ni
 * resultados concretos: esos los completa el docente con datos reales.
 */

export interface LineaInvestigacion {
  slug: string;
  nombre: string;
  /** Descripción breve de una o dos frases. */
  descripcion: string;
  /** Emoji representativo. */
  icono: string;
  /** Clase de color Bento (bg-bento-*). */
  bgClass: string;
  /** Programa Explora con el que se articula (atribución visible). */
  articulaCon?: string;
  /** Ejemplos de preguntas o retos de la línea. */
  ejemplos: string[];
}

export interface FaseSemillero {
  numero: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface FormaParticipar {
  titulo: string;
  descripcion: string;
  icono: string;
}

/** Encabezado del apartado. */
export const semillero = {
  nombre: 'Semillero de Investigación ConectaTE',
  lema: 'Aquí las preguntas de los estudiantes se vuelven ciencia real.',
  intro:
    'El Semillero de Investigación ConectaTE es el espacio donde los estudiantes de 6° a 11° ' +
    'de la I.E. Sor María Juliana dejan de solo consumir tecnología para investigarla: formulan ' +
    'preguntas propias, las indagan con método y comparten sus hallazgos. Es investigación ' +
    'estudiantil STEM guiada por el modelo MILC, abierta a cualquier estudiante curioso.',
  estado: 'activo' as const,
  liderazgo: 'Dr. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
};

/** Sellos / hechos verificables que enmarcan el semillero (sin cifras inventadas). */
export const sellos = [
  {
    valor: '6°–11°',
    etiqueta: 'abierto a todos los grados',
    bgClass: 'bg-bento-blue',
  },
  {
    valor: '5',
    etiqueta: 'líneas de investigación STEM',
    bgClass: 'bg-bento-purple',
  },
  {
    valor: '3',
    etiqueta: 'aliados: NASA-IASC · Samsung · RECA',
    bgClass: 'bg-bento-pink',
  },
  {
    valor: 'MILC',
    etiqueta: 'ciencia real con método propio',
    bgClass: 'bg-bento-lime',
  },
];

/** Líneas de investigación del semillero. */
export const lineas: LineaInvestigacion[] = [
  {
    slug: 'astronomia',
    nombre: 'Astronomía y ciencia ciudadana',
    descripcion:
      'Observar y estudiar el cielo de Cartago: exoplanetas, estrellas variables y asteroides con datos reales de campañas científicas.',
    icono: '🔭',
    bgClass: 'bg-bento-purple',
    articulaCon: 'Salomé (RECA) · NASA-IASC',
    ejemplos: [
      '¿Cómo se detecta un planeta que orbita otra estrella?',
      '¿Podemos hallar un asteroide analizando imágenes reales del cielo?',
      'Curvas de luz: qué nos dice el brillo de una estrella.',
    ],
  },
  {
    slug: 'pensamiento-computacional',
    nombre: 'Pensamiento computacional y algoritmia',
    descripcion:
      'Resolver problemas con lógica, patrones y algoritmos —con o sin código— y entrenar la mente para pensar como la computación.',
    icono: '🦫',
    bgClass: 'bg-bento-lime',
    articulaCon: 'Bebras International',
    ejemplos: [
      '¿Cuál es la forma más eficiente de ordenar o buscar?',
      'Descomponer un problema grande en pasos resolubles.',
      'Retos Bebras: lógica e ingenio sin escribir una línea de código.',
    ],
  },
  {
    slug: 'inteligencia-artificial',
    nombre: 'Inteligencia artificial y datos',
    descripcion:
      'Entender cómo aprenden las máquinas, experimentar con datos y usar la IA de forma crítica y ética en el aula y la comunidad.',
    icono: '🤖',
    bgClass: 'bg-bento-cyan',
    ejemplos: [
      '¿Cómo "aprende" un modelo a reconocer imágenes o texto?',
      'Recoger y analizar datos de nuestro entorno.',
      'Usos éticos de la IA: qué sí, qué no y por qué.',
    ],
  },
  {
    slug: 'robotica',
    nombre: 'Robótica y sistemas embebidos',
    descripcion:
      'Diseñar, construir y programar con micro:bit dispositivos que perciben y actúan: sensores, umbrales calibrados y automatización de bajo costo.',
    icono: '⚙️',
    bgClass: 'bg-bento-orange',
    articulaCon: 'micro:bit · MakeCode',
    ejemplos: [
      '¿Cómo hago que un dispositivo reaccione a su entorno?',
      'Del pseudocódigo a los bloques: la lógica antes que el código.',
      'Monitorear una variable real de la escuela durante días.',
    ],
  },
  {
    slug: 'innovacion-social',
    nombre: 'Innovación social y tecnología',
    descripcion:
      'Diseñar soluciones tecnológicas a problemas reales de la comunidad, con enfoque STEM+ y sentido de país.',
    icono: '💡',
    bgClass: 'bg-bento-pink',
    articulaCon: 'Samsung Solve for Tomorrow',
    ejemplos: [
      '¿Qué problema de mi comunidad puedo ayudar a resolver?',
      'De la idea al prototipo: pensamiento de diseño.',
      'Medir el impacto real de una solución.',
    ],
  },
];

/**
 * Método del semillero — un ciclo de investigación situado, en diálogo con las
 * cuatro fases del modelo MILC (Escucha · Sistematización · Praxis · Evaluación
 * liberadora). Ver src/data/planArea.ts → fasesMILC.
 */
export const fases: FaseSemillero[] = [
  {
    numero: 1,
    nombre: 'Pregunta',
    descripcion:
      'Todo empieza por una pregunta genuina: algo del mundo que despierta curiosidad y merece ser investigado.',
    icono: '❓',
  },
  {
    numero: 2,
    nombre: 'Indagación',
    descripcion:
      'Buscamos qué se sabe ya: fuentes confiables, saberes situados y estado del arte, citando con rigor (APA 7ª).',
    icono: '🔎',
  },
  {
    numero: 3,
    nombre: 'Diseño',
    descripcion:
      'Planeamos cómo responderla: experimento, prototipo, recolección de datos o análisis. Hacemos ciencia con las manos.',
    icono: '🛠️',
  },
  {
    numero: 4,
    nombre: 'Evidencia',
    descripcion:
      'Recogemos, analizamos y discutimos resultados. Lo que afirmamos, lo respaldamos con evidencia.',
    icono: '📊',
  },
  {
    numero: 5,
    nombre: 'Divulgación',
    descripcion:
      'Compartimos: ponencias, ferias, concursos, artículos o participación en campañas de ciencia real.',
    icono: '📣',
  },
];

/** Cómo se participa en el semillero. */
export const participar: FormaParticipar[] = [
  {
    titulo: 'Cualquier estudiante de 6° a 11°',
    descripcion:
      'No necesitas ser el mejor en notas: necesitas curiosidad y ganas de sostener una pregunta en el tiempo.',
    icono: '🙋',
  },
  {
    titulo: 'Encuentros y mentoría',
    descripcion:
      'Sesiones de acompañamiento con el docente para dar forma a tu proyecto, paso a paso.',
    icono: '🧭',
  },
  {
    titulo: 'Elige una línea',
    descripcion:
      'Súmate a una de las cinco líneas STEM o propón la tuya si tu pregunta abre camino nuevo.',
    icono: '🧪',
  },
  {
    titulo: 'Productos reales',
    descripcion:
      'Prototipos, ponencias, artículos y participación en concursos y campañas científicas nacionales e internacionales.',
    icono: '🏆',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PLAN DE ESTUDIOS DEL SEMILLERO
//
// Organizado POR LÍNEA de investigación. Cada línea recorre las cuatro fases del
// modelo MILC (Escucha → Sistematización → Praxis → Evaluación liberadora) como
// un itinerario formativo. Cada módulo declara tres capas de resultados:
//   · rae        → resultado de aprendizaje (qué sabrá/podrá hacer el estudiante)
//   · productos  → evidencias tangibles de investigación esperadas
//   · indicador  → criterio observable con que se verifica el logro
//
// Los nombres y descripciones de las fases son la fuente de verdad de
// src/data/planArea.ts → fasesMILC. Aquí solo se referencia la fase por nombre.
// ─────────────────────────────────────────────────────────────────────────────

/** Nombre de una fase MILC, tal como está en planArea.ts → fasesMILC. */
export type FaseMilcNombre =
  | 'Escucha'
  | 'Sistematización'
  | 'Praxis'
  | 'Evaluación liberadora';

export interface ModuloPlan {
  /** Fase MILC que ancla el módulo. */
  fase: FaseMilcNombre;
  /** Título del módulo dentro de la línea. */
  titulo: string;
  /** Resultado de aprendizaje esperado (verbo observable). */
  rae: string;
  /** Productos / evidencias de investigación del módulo. */
  productos: string[];
  /** Indicador de logro: cómo se verifica el resultado. */
  indicador: string;
  /**
   * Slug de la guía publicada de este módulo, si ya existe: corresponde a
   * content/guias/semillero/{slug}.yaml y al PDF que produce
   * scripts/build-guias-semillero.py. Su ausencia significa «guía pendiente»:
   * el módulo se muestra igual, pero sin enlace.
   */
  guia?: string;
  /** Duración de la sesión en minutos (si la guía la declara). */
  duracionMin?: number;
}

export interface PlanLinea {
  /** Referencia a lineas[].slug. */
  lineaSlug: string;
  /** Cuatro módulos, uno por fase MILC, en orden. */
  modulos: ModuloPlan[];
}

/**
 * Perfil de egreso: lo que, de manera transversal, alcanza un estudiante que
 * completa un itinerario del semillero. Da sentido global al plan.
 */
export const perfilEgreso = {
  titulo: 'Perfil del investigador ConectaTE',
  intro:
    'Al completar un itinerario, el estudiante ha sostenido una pregunta propia y la ha llevado ' +
    'de la curiosidad a la evidencia, con método, ética y voz.',
  logros: [
    'Formula preguntas investigables y las delimita con criterio.',
    'Busca, ordena y cita información con rigor (APA 7ª).',
    'Diseña, experimenta o prototipa para producir evidencia real.',
    'Comunica hallazgos y reconoce los límites y la ética de su trabajo.',
  ],
};

export const planEstudios: PlanLinea[] = [
  {
    lineaSlug: 'astronomia',
    modulos: [
      {
        fase: 'Escucha',
        titulo: 'Mirar el cielo de Cartago',
        rae: 'Observa el cielo local e identifica preguntas investigables sobre estrellas, planetas y objetos del cielo profundo.',
        productos: ['Bitácora de observación', 'Lista de preguntas de investigación priorizadas'],
        indicador: 'Formula al menos una pregunta investigable, delimitada y verificable.',
        guia: 'astronomia-1',
        duracionMin: 180,
      },
      {
        fase: 'Sistematización',
        titulo: 'Datos que hablan del cielo',
        rae: 'Organiza y analiza datos astronómicos reales (curvas de luz, catálogos, imágenes) reconociendo patrones.',
        productos: ['Gráfica de una curva de luz o tránsito', 'Ficha de fuentes citadas en APA 7ª'],
        indicador: 'Interpreta correctamente un patrón (por ejemplo, un tránsito planetario) a partir de los datos.',
        guia: 'astronomia-2',
        duracionMin: 180,
      },
      {
        fase: 'Praxis',
        titulo: 'Del ojo al instrumento: fotómetro micro:bit',
        rae: 'Construye y calibra un fotómetro con micro:bit para medir el brillo del cielo, y aporta sus datos a una campaña de ciencia ciudadana (RECA, NASA-IASC).',
        productos: [
          'Fotómetro micro:bit calibrado con umbrales (usa el sensor de luz integrado, sin cablear nada), con su pseudocódigo y 5 escenarios de prueba',
          'Serie de medidas del brillo del cielo en 3 noches, contrastada con la magnitud límite que estimó a ojo en el módulo 1',
          'Reporte de detección o medición para la campaña (candidato a exoplaneta o asteroide)',
        ],
        indicador: 'Su fotómetro distingue cielos de distinto brillo con umbrales calibrados, y sus datos se entregan conforme al protocolo de la campaña.',
        guia: 'astronomia-3',
        duracionMin: 180,
      },
      {
        fase: 'Evaluación liberadora',
        titulo: 'Comunicar y cuidar el conocimiento',
        rae: 'Comunica hallazgos y valora el alcance, los límites y la ética de su investigación.',
        productos: ['Póster o ponencia', 'Conclusión con límites y nuevas preguntas'],
        indicador: 'Sustenta hallazgos ante un público y reconoce los límites de su evidencia.',
        guia: 'astronomia-4',
        duracionMin: 180,
      },
    ],
  },
  {
    lineaSlug: 'pensamiento-computacional',
    modulos: [
      {
        fase: 'Escucha',
        titulo: 'Problemas que piden lógica',
        rae: 'Reconoce, en su entorno, problemas que pueden abordarse con pensamiento computacional.',
        productos: ['Colección de problemas cotidianos reformulados como retos computacionales'],
        indicador: 'Descompone un problema en subproblemas resolubles.',
      },
      {
        fase: 'Sistematización',
        titulo: 'Patrones y algoritmos',
        rae: 'Representa soluciones mediante patrones, abstracciones y algoritmos (diagramas, pseudocódigo).',
        productos: ['Diagrama de flujo o pseudocódigo de un algoritmo propio', 'Tabla comparativa de estrategias'],
        indicador: 'Justifica cuál algoritmo es más eficiente y por qué.',
      },
      {
        fase: 'Praxis',
        titulo: 'Resolver contra el reto',
        rae: 'Resuelve retos tipo Bebras y problemas algorítmicos aplicando estrategias sistemáticas.',
        productos: ['Set de retos resueltos con explicación del razonamiento', 'Participación en la prueba Bebras'],
        indicador: 'Resuelve un reto nuevo explicando su estrategia.',
      },
      {
        fase: 'Evaluación liberadora',
        titulo: 'Pensar sobre el propio pensar',
        rae: 'Evalúa la eficiencia, los límites y las implicaciones de sus soluciones.',
        productos: ['Reflexión metacognitiva', 'Propuesta de mejora de una solución previa'],
        indicador: 'Identifica una mejora concreta y la fundamenta.',
      },
    ],
  },
  {
    lineaSlug: 'inteligencia-artificial',
    modulos: [
      {
        fase: 'Escucha',
        titulo: 'La IA en mi vida',
        rae: 'Identifica dónde y cómo la IA interviene en su entorno y qué preguntas éticas plantea.',
        productos: ['Mapa de usos de IA en su cotidianidad', 'Preguntas éticas priorizadas'],
        indicador: 'Distingue, con argumentos, entre un uso responsable y uno problemático de la IA.',
      },
      {
        fase: 'Sistematización',
        titulo: 'Datos que enseñan',
        rae: 'Recolecta, limpia y organiza un conjunto de datos y reconoce cómo un modelo aprende de ellos.',
        productos: ['Conjunto de datos propio y documentado', 'Ficha del problema y las variables'],
        indicador: 'Explica la relación entre los datos y lo que el modelo puede aprender.',
      },
      {
        fase: 'Praxis',
        titulo: 'Entrenar y probar',
        rae: 'Experimenta con un modelo o herramienta de IA (clasificación, reconocimiento) y evalúa su desempeño.',
        productos: ['Prototipo o experimento de IA', 'Registro de resultados y errores'],
        indicador: 'Reporta el desempeño del modelo con al menos una métrica y un caso de error.',
      },
      {
        fase: 'Evaluación liberadora',
        titulo: 'IA con criterio',
        rae: 'Valora los sesgos, los límites y los impactos sociales de su experimento con IA.',
        productos: ['Informe de límites y sesgos', 'Decálogo de uso ético para su comunidad'],
        indicador: 'Señala un sesgo o riesgo real y propone una salvaguarda.',
      },
    ],
  },
  {
    lineaSlug: 'robotica',
    modulos: [
      {
        fase: 'Escucha',
        titulo: 'Cosas que podrían reaccionar',
        rae: 'Detecta necesidades de su entorno que un sistema capaz de percibir y actuar podría atender, y reconoce qué sensor del micro:bit las alcanza.',
        productos: [
          'Lista de necesidades y funciones deseadas',
          'Mapa de sensores del micro:bit (luz, temperatura, acelerómetro, botones) frente a cada necesidad',
        ],
        indicador: 'Define qué debe percibir y qué debe hacer el dispositivo, y con cuál sensor.',
        guia: 'robotica-1',
        duracionMin: 180,
      },
      {
        fase: 'Sistematización',
        titulo: 'De la idea al pseudocódigo',
        rae: 'Diseña la lógica de su sistema (sensor → umbral → acción) en pseudocódigo y diagrama de flujo antes de tocar un solo bloque.',
        productos: [
          'Pseudocódigo y diagrama de flujo de la lógica',
          'Tabla de umbrales con su método de calibración',
          'Lista de materiales',
        ],
        indicador: 'Su lógica es coherente entre lo que percibe y lo que ejecuta, y sus umbrales se justifican con medidas, no con supuestos.',
        guia: 'robotica-2',
        duracionMin: 180,
      },
      {
        fase: 'Praxis',
        titulo: 'Construir y programar en MakeCode',
        rae: 'Construye y programa en MakeCode un prototipo funcional que responde a su entorno, y lo somete a escenarios de prueba.',
        productos: [
          'Prototipo funcional con micro:bit',
          'Programa MakeCode comentado',
          '5 escenarios de prueba con resultado esperado / real',
          'Video de funcionamiento',
        ],
        indicador: 'El prototipo cumple la función definida en una prueba real y supera los 5 escenarios documentados.',
      },
      {
        fase: 'Evaluación liberadora',
        titulo: 'Probar, medir, mejorar',
        rae: 'Depura, evalúa el desempeño y las fallas de su prototipo, e itera una mejora sostenida en evidencia.',
        productos: [
          'Registro de pruebas, fallas y depuración',
          'Versión mejorada y documentada',
          'Nota de límites: a quién sirve el dispositivo y a quién no',
        ],
        indicador: 'Documenta una iteración de mejora basada en evidencia y nombra un límite real de su solución.',
      },
    ],
  },
  {
    lineaSlug: 'innovacion-social',
    modulos: [
      {
        fase: 'Escucha',
        titulo: 'El problema de mi comunidad',
        rae: 'Escucha y delimita un problema real de su comunidad susceptible de una solución tecnológica.',
        productos: ['Diagnóstico del problema con voces de la comunidad', 'Pregunta de diseño'],
        indicador: 'Enuncia el problema desde la voz de los afectados, no solo la propia.',
      },
      {
        fase: 'Sistematización',
        titulo: 'Entender antes de resolver',
        rae: 'Investiga causas, antecedentes y soluciones existentes, citando fuentes con rigor (APA 7ª).',
        productos: ['Estado del arte breve', 'Mapa de causas y actores'],
        indicador: 'Fundamenta el problema con al menos tres fuentes confiables.',
      },
      {
        fase: 'Praxis',
        titulo: 'Del prototipo a la comunidad',
        rae: 'Diseña, prototipa y prueba una solución con pensamiento de diseño centrado en las personas.',
        productos: ['Prototipo de la solución', 'Evidencia de prueba con usuarios reales'],
        indicador: 'Recoge retroalimentación de usuarios y ajusta el prototipo.',
      },
      {
        fase: 'Evaluación liberadora',
        titulo: 'Medir el impacto y el sentido',
        rae: 'Evalúa el impacto, la sostenibilidad y la dimensión ética de su solución.',
        productos: ['Informe de impacto', 'Pitch o ponencia (por ejemplo, Solve for Tomorrow)'],
        indicador: 'Demuestra el impacto con evidencia y reconoce sus límites éticos.',
      },
    ],
  },
];

/** Devuelve el plan de estudios de una línea por su slug. */
export function getPlanLinea(slug: string): PlanLinea | undefined {
  return planEstudios.find((p) => p.lineaSlug === slug);
}
