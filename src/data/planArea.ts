/**
 * Plan de Área de Tecnología e Informática 2025
 * I.E. Sor María Juliana — Autor: Dr. Álvaro Cárdenas Orozco
 *
 * Datos extraídos del documento oficial PLAN DE AREA.pdf (31 páginas).
 */

export const planArea = {
  area: 'Tecnología e Informática',
  ano: 2025,
  cobertura: 'Grados 6° a 11°',
  institucion: 'Institución Educativa Sor María Juliana',
  ciudad: 'Cartago, Valle del Cauca',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  enfoque: 'Formación tecnológica crítica, creativa, ética y liberadora',

  ideaFuerza:
    'La tecnología no se enseña como un inventario de herramientas, sino como una práctica cultural para saber, cuidar, producir y transformar responsablemente el entorno.',

  metaEgreso:
    'Un estudiante capaz de comprender la tecnología, usarla críticamente, crear con ella y evaluar sus efectos en la vida común.',

  pdf: 'plan-de-area-2025.pdf',
  paginas: 31,

  // Métrica de recursos
  recursos: {
    guias: 180, // 30 × 6 grados
    proyectos: 18, // 1 × 3 períodos × 6 grados
    examenes: 18,
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
