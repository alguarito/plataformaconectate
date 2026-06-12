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
    anos: [2021, 2022, 2023, 2024, 2025, 2026],
    emoji: '🚀',
    destacado: true,
  },
  {
    titulo: 'Top 50 Finalistas · Solve for Tomorrow',
    organizacion: 'Samsung · Participación desde 2022, finalista nacional 3 años seguidos',
    anos: [2022, 2023, 2024, 2025],
    emoji: '🏆',
    destacado: true,
  },
  {
    titulo: 'Feria de Ciencias y Energía',
    organizacion: 'Pereira · Finalistas 2023 y 2024 · 2025 incentivo a la institución que más proyectos presentó',
    anos: [2023, 2024, 2025],
    emoji: '⚡',
  },
  {
    titulo: 'Reconocimientos Institucionales y Municipales',
    organizacion: 'I.E. Sor María Juliana y Alcaldía de Cartago · 12 años consecutivos',
    anos: [
      2014, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
    ],
    emoji: '🎖',
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
    organizacion: 'Competencia educativa',
    anos: [2021],
    emoji: '⚙️',
  },
  {
    titulo: 'VII Encuentro Internacional · Avances de Investigación y Electrónica',
    organizacion: 'Encuentro académico internacional',
    anos: [],
    emoji: '🔌',
  },
];

export interface Especialidad {
  titulo: string;
  emoji: string;
  nivel: number; // 0-100 visual
}

/**
 * Áreas de especialización (con barra de habilidades visual).
 */
export const especialidades: Especialidad[] = [
  { titulo: 'Capacitación docente', emoji: '🎓', nivel: 100 },
  { titulo: 'Uso de la IA en educación', emoji: '🤖', nivel: 100 },
  { titulo: 'Integración de TIC en educación', emoji: '💻', nivel: 95 },
  { titulo: 'Innovación educativa STEM+', emoji: '🧪', nivel: 92 },
  { titulo: 'Pensamiento computacional', emoji: '🧩', nivel: 92 },
  { titulo: 'Liderazgo en investigación educativa', emoji: '🔬', nivel: 90 },
  { titulo: 'Gamificación y aprendizaje activo', emoji: '🎮', nivel: 88 },
  { titulo: 'CTeI y apropiación social del conocimiento', emoji: '📚', nivel: 88 },
  { titulo: 'Formación de comunidades de aprendizaje', emoji: '🌐', nivel: 85 },
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
  anosDocencia: 13,
  titulosAcademicos: 5,
  formacionComplementaria: 37, // 28 cursos + 9 diplomados
  reconocimientos: 12, // 12 reconocimientos distintos (NASA: 6 años · Samsung: 4 años · Inst/Mun: 11 años · etc.)
  institucionesEnsenadas: 6,
  semillerosLiderados: 2,
  anosNasaIASC: 6, // 2021-2026
};

/**
 * Plataforma educativa propia · ConectaTE · 2026.
 * Stats de las publicaciones y el corpus curricular generado.
 */
export const plataformaConectate = {
  nombre: 'Plataforma Conéctate',
  url: 'https://alguarito.github.io/plataformaconectate',
  ano: 2026,
  totalPiezas: 216,
  guias: 180, // 30 sesiones × 6 grados
  proyectos: 18, // 3 períodos × 6 grados
  examenes: 18, // 3 períodos × 6 grados
  totalPaginas: 251, // páginas Astro generadas en el build
  modelo: 'MILC v3', // Modelo de Investigación Liberadora y Científica
  destacados: [
    'Pipeline editorial reproducible (YAML → PDF + Web)',
    'Offline-first vía Service Worker (PWA)',
    'Triángulo de pensamiento Dussel · Estoico · Floridi',
    '18 anclajes ancestrales del Valle del Cauca y el Pacífico',
    'Política de IA progresiva por grados (sin IA → declaración → obligatoria)',
  ],
};

export interface Publicacion {
  titulo: string;
  subtitulo?: string;
  ano: number;
  paginas: number;
  rol: string; // "Autor", "Director editorial", etc.
  href?: string; // ruta interna al PDF
  emoji?: string;
}

/**
 * Publicaciones recientes del autor.
 */
export const publicaciones: Publicacion[] = [
  {
    titulo: 'Educación en la Era Onlife',
    subtitulo: 'MILC: Modelo de Investigación Liberadora y Científica · Edición ampliada 2026',
    ano: 2026,
    paginas: 226,
    rol: 'Autor',
    href: '/libro-milc/libro-milc-2026.pdf',
    emoji: '📖',
  },
  {
    titulo: 'El Mercado de la Atención',
    subtitulo: 'Colección MILC · Tomo I — Cómo se disputa la atención de los jóvenes y cómo educar el criterio en la era onlife',
    ano: 2026,
    paginas: 118,
    rol: 'Autor',
    href: '/libro-milc/tomo-1-mercado-de-la-atencion.pdf',
    emoji: '📕',
  },
  {
    titulo: 'Plan de Área 2026 · Tecnología e Informática',
    subtitulo: 'Documento rector institucional',
    ano: 2026,
    paginas: 39,
    rol: 'Director editorial',
    href: '/plan-de-area/plan-de-area-2026.pdf',
    emoji: '📚',
  },
];
