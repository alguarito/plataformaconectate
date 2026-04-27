/**
 * Perfil profesional del Dr. Álvaro Cárdenas Orozco.
 * Datos extraídos de su Hoja de Vida + carpetas de soporte en Google Drive.
 */

export const perfil = {
  nombre: 'Álvaro Cárdenas Orozco',
  prefijo: 'Dr.',
  cargo: 'Docente de Tecnología e Informática',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  email: 'alvaro.cardenas.orozco@gmail.com',
  whatsapp: '+57 320 632 4740',
  whatsappE164: '573206324740',
  blog: 'https://alvarocardenasorozco.wixsite.com/blog',

  // Perfil profesional resumido
  resumen:
    'Ingeniero en Sistemas, Doctor en Ciencias de la Educación y Magíster en Gestión de la Tecnología Educativa, con más de diez años de experiencia en docencia universitaria, investigación educativa y liderazgo de proyectos STEM+. Especializado en tecnologías emergentes, Inteligencia Artificial, robótica educativa y pensamiento computacional. Ponente y mentor internacional, reconocido por colaboraciones con NASA (IASC) y finalista en Solve for Tomorrow de Samsung.',

  // Frases (las del CV)
  frases: [
    {
      texto: 'Aunque nada cambie, si yo cambio, todo cambia.',
      autor: 'Marcel Proust',
    },
    {
      texto:
        'La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan hoy.',
      autor: 'Malcolm X',
    },
  ],
};

export interface Estudio {
  titulo: string;
  institucion: string;
  pais: string;
  desde: number;
  hasta: number;
}

/**
 * Formación académica formal (5 títulos).
 */
export const formacion: Estudio[] = [
  {
    titulo: 'Doctorado en Ciencias de la Educación',
    institucion: 'Universidad Cuauhtémoc',
    pais: 'México',
    desde: 2018,
    hasta: 2024,
  },
  {
    titulo: 'Maestría en Gestión de la Tecnología Educativa',
    institucion: 'Universidad de Santander (UDES)',
    pais: 'Colombia',
    desde: 2013,
    hasta: 2016,
  },
  {
    titulo: 'Especialización en Administración en Informática Educativa',
    institucion: 'Universidad de Santander (UDES)',
    pais: 'Colombia',
    desde: 2013,
    hasta: 2014,
  },
  {
    titulo: 'Especialización Técnica en Sistemas de Información Geográfica',
    institucion: 'SENA',
    pais: 'Colombia',
    desde: 2012,
    hasta: 2013,
  },
  {
    titulo: 'Ingeniería en Sistemas y Computación',
    institucion: 'Universidad Tecnológica de Pereira (UTP)',
    pais: 'Colombia',
    desde: 2006,
    hasta: 2012,
  },
];

export interface Experiencia {
  cargo: string;
  organizacion: string;
  desde: number;
  hasta: number | 'actualidad';
  destacado?: boolean;
}

/**
 * Experiencia profesional relevante (6 cargos).
 */
export const experiencia: Experiencia[] = [
  {
    cargo: 'Docente de Tecnología e Informática · Líder de Semilleros',
    organizacion: 'I.E. Sor María Juliana',
    desde: 2015,
    hasta: 'actualidad',
    destacado: true,
  },
  {
    cargo: 'Docente de Maestría y Especialización',
    organizacion: 'Universidad Tecnológica de Pereira',
    desde: 2018,
    hasta: 'actualidad',
    destacado: true,
  },
  {
    cargo: 'Docente Universitario de Pregrado',
    organizacion: 'Universidad Remington',
    desde: 2017,
    hasta: 2022,
  },
  {
    cargo: 'Director de Proyectos',
    organizacion: 'Qltura& S.A.S.',
    desde: 2015,
    hasta: 2016,
  },
  {
    cargo: 'Docente de Tecnología',
    organizacion: 'I.E. Indalecio Penilla',
    desde: 2013,
    hasta: 2015,
  },
  {
    cargo: 'Director de Proyectos Educativos',
    organizacion: 'A Cuadrado Soluciones SAS',
    desde: 2012,
    hasta: 2014,
  },
];

export interface Reconocimiento {
  titulo: string;
  organizacion: string;
  anos: number[];
  emoji: string;
  destacado?: boolean;
}

/**
 * Participaciones internacionales y reconocimientos relevantes.
 */
export const reconocimientos: Reconocimiento[] = [
  {
    titulo: 'Colaborador Científico',
    organizacion: 'NASA · International Astronomical Search Collaboration (IASC)',
    anos: [2021, 2023, 2024],
    emoji: '🚀',
    destacado: true,
  },
  {
    titulo: 'Finalista Solve for Tomorrow',
    organizacion: 'Samsung',
    anos: [2022, 2023],
    emoji: '🏆',
    destacado: true,
  },
  {
    titulo: 'Ponente · 12.º CNEFA',
    organizacion: 'Universidad del Valle',
    anos: [2024],
    emoji: '🎤',
  },
  {
    titulo: 'Ponente Internacional',
    organizacion: 'SENACYT y UTP · Robótica Aplicada',
    anos: [2024],
    emoji: '🌎',
  },
  {
    titulo: 'Mentor en Pensamiento Computacional',
    organizacion: 'Programa nacional de mentores',
    anos: [2024],
    emoji: '🧠',
  },
  {
    titulo: 'Maestro Coinvestigador · Programa Ondas',
    organizacion: 'Ondas Valle',
    anos: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    emoji: '🔬',
  },
  {
    titulo: 'Evaluador Internacional · Jurado',
    organizacion: 'International Statistical Literacy Project (ISLP)',
    anos: [2018],
    emoji: '🌐',
  },
  {
    titulo: 'Astro va a tu Cole',
    organizacion: 'Programa de astronomía escolar',
    anos: [2025],
    emoji: '🔭',
  },
  {
    titulo: 'Torneo STEAM',
    organizacion: '2021',
    anos: [2021],
    emoji: '⚙️',
  },
  {
    titulo: 'Reconocimiento Institucional + Municipal',
    organizacion: 'I.E. Sor María Juliana · Cartago',
    anos: [],
    emoji: '🎖',
  },
  {
    titulo: 'VII Encuentro Internacional · Avances de Investigación y Electrónica',
    organizacion: 'Encuentro académico internacional',
    anos: [],
    emoji: '⚡',
  },
];

export interface Especialidad {
  titulo: string;
  emoji: string;
  nivel: number; // 0-100 visual
}

/**
 * Áreas de especialización (las 8 del CV con barra de habilidades).
 */
export const especialidades: Especialidad[] = [
  { titulo: 'Integración de TIC en educación', emoji: '💻', nivel: 95 },
  { titulo: 'Innovación educativa STEM+', emoji: '🧪', nivel: 92 },
  { titulo: 'Aplicación de IA en educación', emoji: '🤖', nivel: 90 },
  { titulo: 'Liderazgo en investigación educativa', emoji: '🔬', nivel: 90 },
  { titulo: 'Pensamiento computacional', emoji: '🧩', nivel: 92 },
  { titulo: 'Formación de comunidades de aprendizaje', emoji: '🌐', nivel: 85 },
  { titulo: 'Gamificación y aprendizaje activo', emoji: '🎮', nivel: 88 },
  { titulo: 'CTeI y apropiación social del conocimiento', emoji: '📚', nivel: 88 },
];

export interface FormacionGrupo {
  categoria: string;
  emoji: string;
  bgClass: string;
  items: string[];
}

/**
 * Formación complementaria (28 cursos/talleres + 9 diplomados) agrupada por área.
 */
export const formacionComplementaria: FormacionGrupo[] = [
  {
    categoria: 'Inteligencia Artificial',
    emoji: '🤖',
    bgClass: 'bg-bento-blue',
    items: [
      'Inteligencia Artificial Generativa — MIT',
      'Inteligencia Artificial Aplicada a la Educación',
      'IBM Inteligencia Artificial — Coursera (1 y 2)',
      'Inteligencia Artificial — MINTIC',
      'Ingeniería de Prompt',
      'DAYIA · Diseño de Aprendizaje con IA',
    ],
  },
  {
    categoria: 'Apropiación Social del Conocimiento',
    emoji: '📡',
    bgClass: 'bg-bento-cyan',
    items: [
      'Diplomado en ASC con Enfoque Territorial — UNIMINUTO PCIS',
      'ASC con Gobernanza Territorial',
      'Recursos metodológicos para la ASC',
      'Recomendaciones para la formulación de proyectos ASC',
      'La apropiación y su relación con actores y sectores CTeI',
      'Evaluación de la ASC',
    ],
  },
  {
    categoria: 'STEAM y robótica educativa',
    emoji: '⚙️',
    bgClass: 'bg-bento-orange',
    items: [
      'Diplomado en Educación STEAM',
      'Ruta STEAM',
      'Diplomado STEM+',
      'Diplomado Edumaker',
      'Robótica Educativa',
      'Impresión 3D',
      'Investigación como Estrategia Pedagógica',
    ],
  },
  {
    categoria: 'Gamificación y didáctica activa',
    emoji: '🎮',
    bgClass: 'bg-bento-pink',
    items: [
      'Diplomado en ABJ y Gamificación — MAESTRO Medellín',
      'Diplomado Comunidades para el Aprendizaje',
      'Diplomado Docente TIC',
      'Implementación de TOMi Digital en el Aula',
      'Maestro TIC',
      'Ambientes Virtuales de Aprendizaje (AVA)',
      'Gestión del Aula',
    ],
  },
  {
    categoria: 'Pedagogía y formación docente',
    emoji: '👩‍🏫',
    bgClass: 'bg-bento-yellow',
    items: [
      'Orientador Escolar TI',
      'Seminario COVID-19 y educación',
      'Seminario Actualización en TIC con énfasis en Electrónica',
      'Seminario en Competencias Ciudadanas y Formación de Paz',
      'Seminario TICs en la Formación de Ingenieros en Sistemas',
    ],
  },
];

export interface Membresia {
  rol: string;
  organizacion: string;
  emoji: string;
}

/**
 * Membresías activas y roles vigentes.
 */
export const membresias: Membresia[] = [
  {
    rol: 'Miembro activo',
    organizacion: 'Club Rotario Pedro Morales Pino · Cartago',
    emoji: '🤝',
  },
  {
    rol: 'Integrante',
    organizacion: 'Colectivo Ecosistemas Digitales · Cartago',
    emoji: '🌱',
  },
  {
    rol: 'Tutor docente',
    organizacion:
      'Semilleros de Investigación Cir Sormatronik y Betelgeuse · I.E. Sor María Juliana',
    emoji: '🔭',
  },
  {
    rol: 'Representante sindical',
    organizacion: 'CEID · Centro de Estudios e Investigación Docente del SUTEV',
    emoji: '✊',
  },
];

/**
 * Estadísticas resumen para la sección "números destacados".
 */
export const stats = {
  anosDocencia: 12,
  titulosAcademicos: 5,
  formacionComplementaria: 37, // 28 cursos + 9 diplomados
  reconocimientosInt: 8,
  institucionesEnsenadas: 6,
  semillerosLiderados: 2,
};
