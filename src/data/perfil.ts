/**
 * Perfil profesional del Dr. Alvaro Cardenas Orozco (página /acerca).
 *
 * Fuente única: la hoja de vida vigente, publicada en alvarocardenasorozco.com
 * (versión del 21-10-2026). Cada dato de este archivo está en ella; lo que no tiene
 * respaldo allí no se publica. Si la hoja de vida cambia, se actualiza aquí.
 * La Colección MILC se lee de src/data/coleccion.json, no se repite aquí.
 */

/** Hoja de vida vigente. ConectaTE no aloja copia propia: enlaza la publicada. */
export const hojaDeVida = {
  url: 'https://alvarocardenasorozco.com/hoja-de-vida.html',
  pdf: 'https://alvarocardenasorozco.com/hoja-de-vida-alvaro-cardenas.pdf',
};

export const perfil = {
  nombre: 'Alvaro Cardenas Orozco',
  prefijo: 'Dr.',
  cargo: 'Docente de Tecnología e Informática',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  email: 'alvaro.cardenas.orozco@gmail.com',
  whatsapp: '+57 320 632 4740',
  whatsappE164: '573206324740',
  sitioWeb: 'https://alvarocardenasorozco.com/',
  linkedin: 'https://www.linkedin.com/in/alvarocardenasorozco/',
  orcid: 'https://orcid.org/0000-0003-1820-301X',

  // «Perfil profesional» de la hoja de vida, textual.
  resumen:
    'Llevo un problema educativo de la pregunta a la solución en uso: lo investigo, lo convierto en modelo y currículo, formo a los docentes y construyo el software que lo sostiene. Ingeniero de Sistemas y Computación y Doctor en Ciencias de la Educación, con más de 13 años en docencia básica, media y de posgrado. Autor del Modelo MILC, líder de semilleros de investigación escolar en básica y media y Par Experto de Colombia Programa (MinTIC – British Council).',
};

export interface Estudio {
  titulo: string;
  institucion: string;
  pais: string;
  desde: number;
  hasta: number;
  nota?: string;
  /** Ruta interna (sin BASE_URL) a una obra derivada del título. */
  enlace?: { texto: string; href: string };
}

/**
 * Formación académica formal, con las denominaciones de la hoja de vida.
 */
export const formacion: Estudio[] = [
  {
    titulo: 'Doctorado en Ciencias de la Educación',
    institucion: 'Universidad Cuauhtémoc',
    pais: 'México',
    desde: 2018,
    hasta: 2024,
    nota: 'Convalidado MEN, Res. 016493 de 2025',
    enlace: {
      texto: 'Tesis publicada como libro (2026)',
      href: '/modelo-milc/tesis-aula-invertida',
    },
  },
  {
    titulo: 'Maestría en Gestión de la Tecnología Educativa',
    institucion: 'Universidad de Santander (UDES)',
    pais: 'Colombia',
    desde: 2013,
    hasta: 2016,
  },
  {
    titulo: 'Especialización en Administración de la Informática Educativa',
    institucion: 'Universidad de Santander (UDES)',
    pais: 'Colombia',
    desde: 2013,
    hasta: 2014,
  },
  {
    titulo: 'Especialización Técnica en Desarrollo de Sistemas de Información Geográfica',
    institucion: 'SENA',
    pais: 'Colombia',
    desde: 2012,
    hasta: 2013,
  },
  {
    titulo: 'Ingeniería de Sistemas y Computación',
    institucion: 'Universidad Tecnológica de Pereira (UTP)',
    pais: 'Colombia',
    desde: 2006,
    hasta: 2012,
  },
];

export interface Experiencia {
  cargo: string;
  organizacion?: string;
  desde: number;
  hasta: number | 'actualidad';
  /** Descripción del cargo, tal como la trae la hoja de vida. */
  detalle?: string;
  /** Cargos que la hoja de vida agrupa en un solo periodo, sin años propios. */
  items?: string[];
}

/**
 * Experiencia profesional. Los cargos de 2011 a 2018 van agrupados, como en la
 * hoja de vida: no tienen años individuales publicados.
 */
export const experiencia: Experiencia[] = [
  {
    cargo: 'Docente de Tecnología e Informática (en propiedad desde 2016)',
    organizacion: 'I.E. Sor María Juliana, Cartago',
    desde: 2015,
    hasta: 'actualidad',
    detalle:
      'Director de tres semilleros de investigación escolar (CIR Sormatronik, Betelgeuse y ConectaTE), con énfasis en robótica, astronomía, ciencias, pensamiento computacional, IA y programación. Más de 400 proyectos escolares presentados en convocatorias regionales y nacionales. Autor del Plan de Área 2026 de 6.º a 11.º, con sus guías, proyectos y exámenes.',
  },
  {
    cargo: 'Docente hora cátedra de posgrados',
    organizacion: 'Universidad Tecnológica de Pereira',
    desde: 2018,
    hasta: 'actualidad',
    detalle:
      'Maestría y Especialización en Enseñanza de la Física. Electivas de Ingenierías: Dirección de Proyectos, Gobierno TI y Seguridad Informática. Director de 6 trabajos de grado de posgrado (2 de maestría y 4 de especialización) y de 4 más en curso, en la línea de enseñanza de la física con tecnología aplicada.',
  },
  {
    cargo: 'Docente de pregrado: hora cátedra (2019) y medio tiempo (2022–2023)',
    organizacion: 'Corporación Universitaria Remington',
    desde: 2019,
    hasta: 2023,
  },
  {
    cargo: 'Experiencia anterior',
    desde: 2011,
    hasta: 2018,
    items: [
      'Director de proyectos en Qltura& S.A.S. y A Cuadrado Soluciones S.A.S.',
      'Docente en el CRES y en la I.E. Indalecio Penilla',
      'Líder del proyecto Red Inteligente Educativa en Innovations Ingeniería',
      'Asistente del proyecto ReSA CUNA del DPS con FUNDASET',
    ],
  },
];

export interface Destacado {
  ambito: string;
  /** Cifra o periodo que encabeza la tarjeta. */
  resumen: string;
  titulo: string;
  texto: string;
  anos: number[];
  emoji: string;
}

/**
 * Los dos reconocimientos de cabecera. La IASC es aliada de la NASA: no se presenta
 * como campaña de la NASA ni el rol como «colaborador científico» de la NASA.
 */
export const reconocimientosDestacados: Destacado[] = [
  {
    ambito: 'Semilleros · etapas nacionales',
    resumen: '3 años seguidos',
    titulo: 'Samsung Solve for Tomorrow',
    texto:
      'Líder de semilleros de investigación escolar con 11 proyectos entre los mejores del país: 1 entre los 50 seleccionados, HopeLine Connect (2024); 4 entre los 100 equipos seleccionados y 1 entre los 50, de 2.330 propuestas (2025); 6 entre los 100 seleccionados, de 2.383 propuestas de 29 departamentos (2026), el 6 % de la selección nacional. Participante desde 2021.',
    anos: [2024, 2025, 2026],
    emoji: '🏆',
  },
  {
    ambito: 'Ciencia ciudadana',
    resumen: '2021–2026',
    titulo: 'Campañas de ciencia ciudadana de la IASC',
    texto:
      'Participante en las campañas de búsqueda de asteroides de la IASC (International Astronomical Search Collaboration), aliada de la NASA; Salomé y otras. 16 estudiantes certificados por la IASC en tres campañas (2024).',
    anos: [],
    emoji: '☄️',
  },
];

export interface Reconocimiento {
  titulo: string;
  detalle: string;
  /** Texto libre, como en la hoja de vida («2024–2026», «2025 y 2026»). Vacío si no trae fecha. */
  fecha: string;
  emoji: string;
}

/**
 * Reconocimientos, programas, mentoría, dirección y jurado
 * (secciones «Reconocimientos y programas», «Mentoría» y «Dirección, jurado y mentoría»).
 */
export const reconocimientos: Reconocimiento[] = [
  {
    titulo: 'Docente Par Experto, Colombia Programa',
    detalle:
      'MinTIC y British Council; Nodos de Pensamiento Computacional, 94 h de formación y acompañamiento',
    fecha: '2024–2026',
    emoji: '🧩',
  },
  {
    titulo: 'Feria de Ciencias de la Empresa de Energía de Pereira',
    detalle:
      'Cuarto y quinto lugar (2023); segundo lugar (2024); reconocimiento a la institución con más proyectos de valor presentados (2025)',
    fecha: '2023–2025',
    emoji: '⚡',
  },
  {
    titulo: 'Maestro coinvestigador, Programa Ondas Valle',
    detalle: 'Univalle; semillero CIR Sormatronik, convocatorias de 2016 a 2022',
    fecha: '2016–2022',
    emoji: '🔬',
  },
  {
    titulo: 'Olimpiadas STEM+ Colombia (circuito regional) y La Astronomía va a tu Colegio',
    detalle: 'MEN, UNNO y UNIMINUTO; RECA',
    fecha: '2025 y 2026',
    emoji: '🔭',
  },
  {
    titulo: 'Reconocimiento por colaboración y compromiso con la institución',
    detalle: 'Alcaldía de Cartago',
    fecha: '2014',
    emoji: '🎖',
  },
  {
    titulo: 'Mentor y docente enlace, VIII Concurso Nacional de Programación',
    detalle: 'Proyecto HandSpeak. Fedesoft y REDIS',
    fecha: '2024',
    emoji: '🧠',
  },
  {
    titulo: 'Jurado y evaluador por Colombia, Competencia Latinoamericana de Póster',
    detalle:
      'International Statistical Literacy Project (ISLP), proyecto de la IASE y el ISI',
    fecha: '2018',
    emoji: '🌐',
  },
  {
    titulo: 'Comité Científico, 11.º Congreso Nacional de Enseñanza de la Física y la Astronomía',
    detalle: 'Universidad de Antioquia; filiación UTP',
    fecha: '',
    emoji: '📋',
  },
  {
    titulo: 'Jurado de trabajos de grado',
    detalle: 'Especialización en Enseñanza de la Física, UTP',
    fecha: '2023',
    emoji: '🎓',
  },
];

export interface Ponencia {
  titulo: string;
  evento: string;
  fecha: string;
}

/** Ponencias, de la más reciente a la más antigua, como en la hoja de vida. */
export const ponencias: Ponencia[] = [
  {
    titulo:
      '«Betelgeuse y MILC: una pedagogía situada para la enseñanza de la astronomía y la física en la escuela pública colombiana en la era onlife»',
    evento:
      'Ponencia aceptada, 13.º Congreso Nacional de Enseñanza de la Física y la Astronomía. UTP, Pereira; aplazado por el sismo.',
    fecha: '2026',
  },
  {
    titulo:
      '«Soberanía, ética y STEAM frugal: el Modelo MILC ante los desafíos de la transmodernidad»',
    evento:
      'II Congreso Internacional de Investigación en Ciencias de la Educación, UNAD. Valledupar.',
    fecha: '20–22 may 2026',
  },
  {
    titulo: '«Más allá de la pantalla: ConectaTE y la Educación 4.0»',
    evento:
      'Panelista invitado, IV Semana Internacional de Ciencia, Tecnología e Innovación del Valle del Cauca. Gobernación del Valle.',
    fecha: '1 oct 2025',
  },
  {
    titulo: 'Taller «Escritura inversa… con IA»',
    evento: '12.º Congreso Nacional de Enseñanza de la Física y la Astronomía. Univalle, Cali.',
    fecha: '9–11 oct 2024',
  },
  {
    titulo: '«IA aplicada en la educación»',
    evento:
      'VII Seminario Internacional de Avances en Investigación y Electrónica Aplicada. Univalle, sede Cartago.',
    fecha: '2023',
  },
  {
    titulo: 'Ponente oral',
    evento: 'VII Encuentro Internacional sobre la Enseñanza de las Ciencias Exactas y Naturales. UTP.',
    fecha: '7–8 sep 2023',
  },
  {
    titulo: '«Introducción a las TIC aplicadas a la educación»',
    evento:
      'Ponente internacional invitado, VI Encuentro de Comunidades de Aprendizaje de Física. SENACYT (Panamá) / UTP.',
    fecha: 'jul–ago 2021',
  },
];

export interface Competencia {
  titulo: string;
  evidencia: string;
  emoji: string;
}

/** «Competencias» de la hoja de vida, cada una con su evidencia. */
export const competencias: Competencia[] = [
  {
    titulo: 'Desarrollo de software educativo',
    evidencia: 'ConectaTE, ConciencIA, MEAEF y 11 plataformas publicadas.',
    emoji: '💻',
  },
  {
    titulo: 'Diseño curricular',
    evidencia: 'Plan de Área 2026 de 6.º a 11.º y el Modelo MILC.',
    emoji: '🧭',
  },
  {
    titulo: 'IA aplicada a la educación',
    evidencia: 'Módulo 9 de la UTP, ConciencIA, escritura inversa y el Tomo IV.',
    emoji: '🤖',
  },
  {
    titulo: 'Investigación y producción académica',
    evidencia: 'Doctorado, artículo arbitrado y seis libros con DOI.',
    emoji: '🔬',
  },
  {
    titulo: 'Formación docente en IA',
    evidencia: 'Más de 330 docentes formados; Módulo 9 del Diplomado en IA de la UTP.',
    emoji: '🎓',
  },
  {
    titulo: 'Datos abiertos y SIG',
    evidencia: 'BioMap Cartago, 30 capas para toda la ciudad; especialización técnica en SIG.',
    emoji: '🗺️',
  },
  {
    titulo: 'Diseño editorial',
    evidencia:
      'Sor María Juliana Ediciones: seis libros con una misma plantilla y sistema de identidad.',
    emoji: '📚',
  },
  {
    titulo: 'Gestión de proyectos y recursos',
    evidencia: 'Dotaciones para la institución; diagnóstico de 38 sedes en cuatro días.',
    emoji: '🛠️',
  },
];

export interface FormacionGrupo {
  categoria: string;
  emoji: string;
  bgClass: string;
  items: string[];
  nota?: string;
}

/**
 * Formación complementaria, como la resume la hoja de vida. No trae totales:
 * por eso la página no muestra conteos de cursos ni de certificaciones.
 */
export const formacionComplementaria: FormacionGrupo[] = [
  {
    categoria: 'Diplomados',
    emoji: '🎓',
    bgClass: 'bg-bento-cyan',
    items: [
      'Régimen Laboral del Magisterio · UPN y FECODE · 144 h (2025)',
      'Enfoque STEM+ para la Formación Integral · EAFIT y MEN · 120 h (2024)',
      'Apropiación Social del Conocimiento · UNIMINUTO · 90 h (2024)',
    ],
    nota: 'Y 5 más desde 2016.',
  },
  {
    categoria: 'Inteligencia artificial',
    emoji: '🤖',
    bgClass: 'bg-bento-blue',
    items: [
      'Anthropic Academy (7 cursos)',
      'IBM',
      'MinTIC',
      'Santander Open Academy (contenidos del MIT)',
    ],
    nota: '2024–2026',
  },
  {
    categoria: 'Pedagogía y tecnología',
    emoji: '👩‍🏫',
    bgClass: 'bg-bento-yellow',
    items: ['Porvir y Samsung', 'UC Irvine', 'Learning by Helping', 'Computadores para Educar'],
  },
];

export interface Membresia {
  rol: string;
  organizacion: string;
  emoji: string;
}

/**
 * Membresías («Membresías» de la hoja de vida) y la dirección de los semilleros.
 */
export const membresias: Membresia[] = [
  {
    rol: 'Integrante',
    organizacion:
      'Grupo de Investigación Robótica Aplicada · Universidad Tecnológica de Pereira (GrupLAC, Minciencias) · desde 2026',
    emoji: '🤖',
  },
  {
    rol: 'Miembro',
    organizacion: 'Club Rotario Pedro Morales Pino · Cartago',
    emoji: '🤝',
  },
  {
    rol: 'Integrante',
    organizacion: 'Colectivo Ecosistemas Digitales · Cartago',
    emoji: '🌱',
  },
  {
    rol: 'Director',
    organizacion:
      'Tres semilleros de investigación escolar: CIR Sormatronik, Betelgeuse y ConectaTE · I.E. Sor María Juliana',
    emoji: '🔭',
  },
];

/**
 * Cifras de la cabecera. Cada una está en la hoja de vida, con la frase citada.
 * El número de libros con DOI sale de coleccion.json (en la página).
 */
export const stats = {
  anosDocencia: 13, // «con más de 13 años en docencia básica, media y de posgrado»
  proyectosSamsung: 11, // «11 proyectos en etapas nacionales de Samsung» (2024–2026)
  docentesFormados: 330, // «Más de 330 docentes formados de forma directa en IA y tecnología aplicada a la educación»
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
  tipo: string;
  titulo: string;
  subtitulo?: string;
  detalle: string;
  ano: number;
  /** DOI (de concepto, en los libros). */
  doi?: string;
  /** Ruta interna, sin BASE_URL: la ficha de la obra o su PDF. */
  href?: string;
  hrefTexto?: string;
  emoji: string;
}

/**
 * Publicaciones de 2026 que no son tomos de la Colección MILC (los tomos se leen de
 * coleccion.json). El artículo y la tesis van como los trae la hoja de vida; las páginas
 * de la tesis y del plan son las de sus PDF.
 */
export const articuloArbitrado: Publicacion = {
  tipo: 'Artículo arbitrado',
  titulo:
    'Modelo de investigación liberadora y científica (MILC): una propuesta para la educación en la era onlife',
  detalle:
    'Cardenas Orozco, A. y Restrepo Ortiz, J. A. (UTP). Revista Hambatu Science (Ecuador), vol. 1, n.º 3, pp. 56–77. ISSN 3151-815X. Revisión por pares.',
  ano: 2026,
  doi: '10.63862/rhs-v1n3-56-77-2026',
  emoji: '📰',
};

export const tesisLibro: Publicacion = {
  tipo: 'Libro · tesis doctoral, edición revisada y ampliada',
  titulo:
    'Impacto de la implementación del modelo pedagógico Flipped Classroom en la enseñanza de la tecnología en básica secundaria',
  subtitulo: 'Relectura crítica de la experiencia desde el MILC',
  detalle: 'Versión 1.0 · 146 págs.',
  ano: 2026,
  doi: '10.5281/zenodo.23519364',
  href: '/modelo-milc/tesis-aula-invertida',
  hrefTexto: 'Ver ficha',
  emoji: '🎓',
};
