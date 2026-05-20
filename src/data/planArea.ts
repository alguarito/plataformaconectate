/**
 * Plan de Área de Tecnología e Informática · 2026
 * I.E. Sor María Juliana — Autor: Dr. Álvaro Cárdenas Orozco
 *
 * Documento rector del área. La edición 2026 cierra el pipeline editorial
 * MILC v3 (YAML SSOT → PDF + TS web) y formaliza los ajustes operativos
 * acumulados durante la migración: triángulo de pensamiento, anclajes
 * ancestrales por periodo, política de IA responsable y sistema de
 * valoración por completitud editorial.
 */

export const planArea = {
  area: 'Tecnología e Informática',
  ano: 2026,
  cobertura: 'Grados 6° a 11°',
  institucion: 'Institución Educativa Sor María Juliana',
  ciudad: 'Cartago, Valle del Cauca',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  enfoque: 'Formación tecnológica crítica, creativa, ética y liberadora',

  ideaFuerza:
    'La tecnología no se enseña como un inventario de herramientas, sino como una práctica cultural para saber, cuidar, producir y transformar responsablemente el entorno.',

  metaEgreso:
    'Un estudiante capaz de comprender la tecnología, usarla críticamente, crear con ella y evaluar sus efectos en la vida común.',

  pdf: 'plan-de-area-2026.pdf',
  paginas: 15,

  // Recursos curriculares activos (216 piezas vivas)
  recursos: {
    guias: 180, // 30 × 6 grados
    proyectos: 18, // 3 × 6 grados (entregable-céntrico MILC v3)
    examenes: 18, // 3 × 6 grados (formal + banco práctica)
    total: 216,
  },
};

/**
 * Las 4 fases del Modelo MILC (Modelo de Investigación Liberadora y Científica).
 */
export interface FaseMILC {
  nombre: string;
  emoji: string;
  bgClass: string;
  descripcion: string;
}

export const fasesMILC: FaseMILC[] = [
  {
    nombre: 'Escuta',
    emoji: '👂',
    bgClass: 'bg-bento-lime',
    descripcion:
      'Escuchar, observar y problematizar la realidad tecnológica del estudiante y su comunidad.',
  },
  {
    nombre: 'Sistematización',
    emoji: '🗂️',
    bgClass: 'bg-bento-cyan',
    descripcion:
      'Ordenar información, reconocer patrones, construir criterios, documentar procesos y formular explicaciones.',
  },
  {
    nombre: 'Praxis',
    emoji: '🛠️',
    bgClass: 'bg-bento-pink',
    descripcion:
      'Diseñar, experimentar, programar, prototipar, comunicar o intervenir una situación concreta.',
  },
  {
    nombre: 'Evaluación liberadora',
    emoji: '🔄',
    bgClass: 'bg-bento-purple',
    descripcion:
      'Valorar evidencias, impactos, aprendizajes, errores, mejoras y compromisos éticos.',
  },
];

/**
 * Triángulo de pensamiento — columna pedagógica explícita en cada guía,
 * proyecto y examen. Las 3 lentes dialogan en el cierre filosófico y se
 * incrustan operativamente en los entregables del proyecto integrador.
 */
export interface LenteTriangulo {
  nombre: string;
  obra: string;
  bgClass: string;
  aporte: string;
  emoji: string;
}

export const trianguloPensamiento: LenteTriangulo[] = [
  {
    nombre: 'Enrique Dussel',
    obra: 'Filosofía de la liberación',
    bgClass: 'bg-bento-purple',
    aporte:
      'Reconocimiento de la voz del otro. Cuidar la propia voz es respeto a sí mismo. Lo que escribimos cuenta porque cuenta la voz de quien escribe.',
    emoji: '🗣️',
  },
  {
    nombre: 'Marco Aurelio (Estoicismo)',
    obra: 'Meditaciones',
    bgClass: 'bg-bento-cyan',
    aporte:
      'Disciplina del tiempo. Lo que escribes hoy queda. La prisa es enemiga del juicio: parar, respirar y verificar antes de creer o reenviar.',
    emoji: '⏳',
  },
  {
    nombre: 'Luciano Floridi',
    obra: 'Filosofía de la información',
    bgClass: 'bg-bento-orange',
    aporte:
      'Infoesfera. Habitas un ambiente informacional compartido. Cada mensaje suma claridad o ruido. Eres responsable de lo que produces como tuyo.',
    emoji: '🌐',
  },
];

/**
 * Anclajes ancestrales por grado y período.
 *
 * Cada periodo conecta su tema técnico con un saber local del Valle del
 * Cauca y el Pacífico. El anclaje aparece en la guía de apertura (S1),
 * vuelve a aparecer en el examen formal (pregunta contexto) y vertebra
 * el reto del proyecto integrador.
 */
export interface AnclajeAncestral {
  grado: number;
  periodo: number;
  oficio: string;
  resumen: string;
}

export const anclajesAncestrales: AnclajeAncestral[] = [
  { grado: 6,  periodo: 1, oficio: 'El pregonero del barrio',           resumen: 'Don Aurelio llevaba avisos con campanita. Su nombre era su identidad: si lo entregaba bien, la cuadra lo buscaba; si lo dañaba, lo corregían.' },
  { grado: 6,  periodo: 2, oficio: 'Relojero, costurera, panadero',     resumen: 'Maestros de oficio que entendían su máquina por dentro. Don Lucho con el reloj, doña Carmen con la Singer, don Aurelio con el horno.' },
  { grado: 6,  periodo: 3, oficio: 'Doña Mercedes, maestra rural',      resumen: 'Enseñaba a escribir bien y a leer crítico. Antes de creer una noticia preguntaba: ¿quién?, ¿cuándo?, ¿por qué?, ¿qué prueba?, ¿quién más?' },
  { grado: 7,  periodo: 1, oficio: 'La minga del Valle',                resumen: 'Veinte vecinos cosechaban café al tiempo, en surcos distintos, sin estorbarse, con reciprocidad. Es la matriz cultural de la coautoría en la nube.' },
  { grado: 7,  periodo: 2, oficio: 'Doña Sofía, la tejedora',           resumen: 'Tejía canastos siguiendo un algoritmo: secuencia, repetición, condicional al borde, variable contadora en la cabeza. Las tejedoras programaban antes que las computadoras.' },
  { grado: 7,  periodo: 3, oficio: 'El consejero del barrio',           resumen: 'Doña Mercedes, don Lucho, doña Esperanza. Aconsejaban pero no decidían por nadie. La IA hoy ocupa ese rol: requiere verificación y voz propia.' },
  { grado: 8,  periodo: 1, oficio: 'El gesto de la cocina del Valle',   resumen: 'La abuela tomaba decisiones lógicas antes de poner la olla al fogón. Cuidado, precisión y verificación cruzada en cada paso.' },
  { grado: 8,  periodo: 2, oficio: 'Decisiones del campesino',          resumen: 'En las fincas, decisiones que parecen sencillas esconden lógica compuesta: condiciones AND/OR/NOT que evitan pérdidas.' },
  { grado: 8,  periodo: 3, oficio: 'Diseño visual del Pacífico',        resumen: 'Comunidades del Chocó con tradiciones de diseño visual y gestión del dato comunal. Lo común se anota, se cuida, se transmite.' },
  { grado: 9,  periodo: 1, oficio: 'La técnica en la mano',             resumen: 'Los primeros artefactos (azuela, hueso tallado) no nacieron en fábrica: nacieron en la mano. La técnica es habilidad situada antes que herramienta.' },
  { grado: 9,  periodo: 2, oficio: 'Pasquines, almanaques, esquelas',   resumen: 'Diseño popular del Valle: pliegos parroquiales y almanaques campesinos. La maquetación tiene siglos antes de Figma.' },
  { grado: 9,  periodo: 3, oficio: 'La libreta de la abuela',           resumen: 'Conteo de cosecha: racimos por mata, gallinas por corral, deudas pendientes. La estadística doméstica como ética de cuidado.' },
  { grado: 10, periodo: 1, oficio: 'El personaje silencioso del barrio',resumen: 'Intermediario que conectaba familias y oficios. Curaduría comunitaria de la información, sin algoritmo ni servidor.' },
  { grado: 10, periodo: 2, oficio: 'Los 4 oficios de la palabra',       resumen: 'En el barrio Obrero: cuentista, pregonero, recitador, sermoneador. Cada uno con un tipo de palabra; cada uno con criterio editorial.' },
  { grado: 10, periodo: 3, oficio: 'Tiendas y panaderías del centro',   resumen: 'Microempresas del Quindío y Cartago que sostienen libros de cuentas, fiar y cobrar, oferta de temporada. Gestión del negocio antes del Excel.' },
  { grado: 11, periodo: 1, oficio: 'Oficio y palabra',                  resumen: 'Una persona se conocía por dos cosas: su oficio (lo que sabía hacer) y su palabra (lo que sostenía). Identidad y reputación digital tienen aquí su anclaje.' },
  { grado: 11, periodo: 2, oficio: 'El maestro carpintero',             resumen: 'No necesita reloj para saber dónde se traba el taller: lo ve. Lectura del proceso, detección de cuellos de botella y mejora continua.' },
  { grado: 11, periodo: 3, oficio: 'Oficios que escuchan al pueblo',    resumen: 'Los oficios del Valle no nacían de la imaginación del emprendedor genial: nacían de escuchar lo que el pueblo necesitaba. Validación de mercado ancestral.' },
];

/**
 * Marco teórico: referentes que sostienen la propuesta.
 */
export interface Referente {
  autor: string;
  obra: string;
  aporte: string;
  emoji: string;
}

export const referentes: Referente[] = [
  {
    autor: 'Paulo Freire',
    obra: 'Pedagogía del oprimido',
    aporte:
      'Crítica a la educación bancaria y defensa de una educación problematizadora. El estudiante interpreta su realidad y actúa sobre ella mediante diálogo, conciencia crítica y praxis.',
    emoji: '🌱',
  },
  {
    autor: 'Enrique Dussel',
    obra: 'Filosofía de la liberación',
    aporte:
      'Exterioridad, alteridad, ética y crítica de la dominación. La tecnología debe pensarse desde el otro, especialmente desde quien queda excluido o silenciado por sistemas técnicos.',
    emoji: '🌎',
  },
  {
    autor: 'Luciano Floridi',
    obra: 'Filosofía de la información',
    aporte:
      'Infoesfera, vida onlife, identidad y ética informacional. Los estudiantes habitan entornos donde identidad, datos, comunicación y aprendizaje se entrelazan.',
    emoji: '🌐',
  },
  {
    autor: 'Jeannette M. Wing',
    obra: 'Computational Thinking',
    aporte:
      'Gramática cognitiva para resolver problemas: descomponer, reconocer patrones, abstraer, diseñar algoritmos, depurar, modelar y evaluar soluciones.',
    emoji: '🧠',
  },
  {
    autor: 'CASEL',
    obra: 'Marco socioemocional',
    aporte:
      'Competencias socioemocionales: autoconciencia, autorregulación, conciencia social, habilidades relacionales y toma responsable de decisiones.',
    emoji: '💛',
  },
  {
    autor: 'UNESCO',
    obra: 'Competencias en IA',
    aporte:
      'Competencias estudiantiles en inteligencia artificial con enfoque humano, ético, creativo e inclusivo.',
    emoji: '🤖',
  },
  {
    autor: 'MEN Colombia',
    obra: 'Guía No. 30',
    aporte:
      'Marco colombiano para competencias tecnológicas y los 4 componentes: naturaleza, apropiación, solución de problemas y tecnología-sociedad.',
    emoji: '🇨🇴',
  },
];

/**
 * Estrategias activas de aprendizaje.
 */
export interface EstrategiaActiva {
  nombre: string;
  descripcion: string;
  emoji: string;
}

export const estrategias: EstrategiaActiva[] = [
  {
    nombre: 'Design Thinking',
    descripcion: 'Empatizar, definir, idear, prototipar y validar soluciones.',
    emoji: '💡',
  },
  {
    nombre: 'Aprendizaje Basado en Proyectos',
    descripcion: 'Reto, producto, roles, cronograma, evidencias y sustentación.',
    emoji: '🎯',
  },
  {
    nombre: 'PRIMM (programación)',
    descripcion: 'Predecir, ejecutar, investigar, modificar y crear.',
    emoji: '💻',
  },
  {
    nombre: 'Aprendizaje basado en datos',
    descripcion: 'Formular preguntas, registrar, organizar, visualizar e interpretar.',
    emoji: '📊',
  },
  {
    nombre: 'Laboratorio técnico',
    descripcion: 'Diagnóstico, prueba, cuidado, bitácora y protocolo.',
    emoji: '🔬',
  },
  {
    nombre: 'Producción editorial digital',
    descripcion:
      'Documentos, presentaciones, infografías, mapas, campañas, prototipos y portafolios.',
    emoji: '📐',
  },
];

/**
 * Componentes MEN — Guía No. 30.
 */
export const componentesMEN: { nombre: string; descripcion: string; emoji: string }[] = [
  {
    nombre: 'Naturaleza y evolución de la tecnología',
    descripcion:
      'Comprensión histórica y conceptual de los sistemas tecnológicos.',
    emoji: '🕰️',
  },
  {
    nombre: 'Apropiación y uso de la tecnología',
    descripcion:
      'Uso ético, responsable y productivo de herramientas y plataformas.',
    emoji: '🛠️',
  },
  {
    nombre: 'Solución de problemas con tecnología',
    descripcion:
      'Aplicación de pensamiento computacional, diseño y prototipado.',
    emoji: '🧩',
  },
  {
    nombre: 'Tecnología y sociedad',
    descripcion:
      'Análisis de impacto cultural, ético y socioambiental de las tecnologías.',
    emoji: '🌍',
  },
];

/**
 * Objetivos formativos del área.
 */
export const objetivos: string[] = [
  'Desarrollar competencias tecnológicas integrales: saber, saber hacer, saber cuidar y saber convivir en entornos digitales.',
  'Promover pensamiento computacional y cultura de resolución de problemas desde situaciones reales.',
  'Fortalecer soberanía informacional: búsqueda, validación, organización, protección y producción de información.',
  'Articular tecnología, sociedad, ambiente y ética en proyectos con impacto escolar o comunitario.',
  'Consolidar portafolios de evidencias, productos y reflexiones que hagan visible la progresión del aprendizaje.',
];

/**
 * Criterios de evaluación.
 */
export interface CriterioEvaluacion {
  nombre: string;
  descripcion: string;
  emoji: string;
}

export const criteriosEvaluacion: CriterioEvaluacion[] = [
  {
    nombre: 'Cognitivo',
    descripcion:
      'Comprende conceptos, sistemas, relaciones, riesgos, datos, algoritmos y criterios de decisión.',
    emoji: '🧠',
  },
  {
    nombre: 'Procedimental',
    descripcion:
      'Usa herramientas, documenta procesos, programa, analiza datos, prototipa y produce recursos digitales.',
    emoji: '🛠️',
  },
  {
    nombre: 'Actitudinal y socioemocional',
    descripcion:
      'Cuida equipos, regula emociones, colabora, respeta acuerdos, reconoce al otro y decide responsablemente.',
    emoji: '💛',
  },
  {
    nombre: 'Ético-cultural',
    descripcion:
      'Valida información, protege datos, reconoce contexto, evita plagio, considera impacto social y propone usos con sentido.',
    emoji: '⚖️',
  },
];

/**
 * Ponderación orientativa por período (suma 100%).
 */
export const ponderacion = [
  { item: 'Guías y portafolio', porcentaje: 30 },
  { item: 'Proyecto integrador', porcentaje: 30 },
  { item: 'Examen / prueba aplicada', porcentaje: 20 },
  { item: 'Participación y reflexión MILC', porcentaje: 20 },
];

/**
 * Política institucional de IA responsable.
 *
 * Distribución por grados: G6 sin IA, G7 con declaración honesta, G8-G11
 * con uso explícito + declaración obligatoria en cada entregable.
 */
export interface PoliticaIaPorGrado {
  rango: string;
  postura: string;
  detalle: string;
}

export const politicaIa: PoliticaIaPorGrado[] = [
  {
    rango: 'Grado 6°',
    postura: 'Sin IA',
    detalle:
      'Los entregables se producen a mano por el equipo, con criterio propio. La IA aún no se cubre como herramienta de uso. Si algún estudiante la usó por curiosidad personal, debe declararlo en la sustentación.',
  },
  {
    rango: 'Grado 7°',
    postura: 'IA con declaración',
    detalle:
      'Se permite el uso de IA generativa con declaración explícita: qué herramienta (Claude/ChatGPT/Gemini), en qué parte, cuánto editó el equipo a mano. La IA es asistente, no reemplazo del trabajo humano.',
  },
  {
    rango: 'Grados 8° a 11°',
    postura: 'IA esperada · declaración obligatoria',
    detalle:
      'La rúbrica del entregable 1 penaliza explícitamente la falta de declaración o el copy-paste sin edición. Se evalúa el uso responsable: voz humana visible + edición + declaración + verificación de lo que dijo la IA contra fuentes externas.',
  },
];

/**
 * Principios transversales de la política de IA.
 */
export const principiosIa: string[] = [
  'Declarar siempre el uso, así sea pequeño.',
  'Verificar contra fuente externa los datos importantes (fechas, leyes, nombres).',
  'Editar con voz propia: la IA puede borrador, pero el entregable es del estudiante.',
  'Respetar la privacidad: no escribir datos personales de otros en prompts.',
  'No usar IA en evaluaciones que valoran algo personal (autobiografía, reflexión propia, ética).',
];

/**
 * Pipeline editorial MILC v3.
 *
 * Single source of truth: cada pieza vive como YAML; un script la compila
 * a PDF (LaTeX) y a TS para la web. Linter automatiza el contrato.
 */
export interface PipelinePieza {
  nombre: string;
  yaml: string;
  pdf: string;
  ts: string;
  comando: string;
}

export const pipelineMilc: PipelinePieza[] = [
  {
    nombre: 'Guías',
    yaml: 'content/guias/{grado}/{clave}.yaml',
    pdf: 'public/guias-mejoras/{sesion}-{grado}-TIC.pdf',
    ts: 'src/data/guiasContenido/{grado}-{periodo}-{sesion}.ts',
    comando: 'make guia-build',
  },
  {
    nombre: 'Exámenes',
    yaml: 'content/examenes/{grado}-{periodo}.yaml',
    pdf: 'public/examenes-mejoras/examen-{periodo}-{grado}-TIC.pdf',
    ts: 'src/data/examenesContenido/{grado}-{periodo}.ts',
    comando: 'make examen-build && make examen-web',
  },
  {
    nombre: 'Proyectos',
    yaml: 'content/proyectos/{grado}-{periodo}.yaml',
    pdf: 'public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf',
    ts: 'src/data/proyectosContenido/{grado}-{periodo}.ts',
    comando: 'make proyecto-build',
  },
];

/**
 * Sistema absoluto de valoración de guías.
 *
 * El badge de cada guía combina dos señales independientes:
 * - Estrellas: completitud del contrato MILC v3 (absoluto).
 * - Color: densidad informativa real medida en palabras del YAML.
 */
export interface NivelValoracion {
  estrellas: number;
  nombre: string;
  significado: string;
}

export const valoracionPorContrato: NivelValoracion[] = [
  { estrellas: 5, nombre: 'MILC v3 · pro',     significado: 'Contrato completo: saber ancestral + ruta + actividades + triángulo + 5 dimensiones.' },
  { estrellas: 4, nombre: 'MILC v3 · bloques', significado: 'Bloques filosóficos completos (saber + triángulo + 5d) sin actividades estructuradas.' },
  { estrellas: 3, nombre: 'Legacy migrada',    significado: 'TS migrado pre-MILC v3.' },
  { estrellas: 2, nombre: 'PDF disponible',    significado: 'Solo PDF, sin contenido enriquecido en web.' },
];

export const valoracionPorDensidad = [
  { nivel: 'Alta', umbral: '≥ 2500 palabras', color: 'verde MILC',  detalle: 'Guía con actividades muy expandidas y ejemplos largos.' },
  { nivel: 'Media', umbral: '1800 – 2499',     color: 'mostaza',     detalle: 'Guía estándar que cumple el contrato sin excesos.' },
  { nivel: 'Baja',  umbral: '< 1800',          color: 'ocre',        detalle: 'Guía mínima que cumple lo justo (candidata a expansión).' },
];
