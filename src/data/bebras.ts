/**
 * Espacio "Bebras" — preparación para el reto internacional de pensamiento
 * computacional, dentro del apartado Explora.
 *
 * No entrena para el test: forma el pensamiento. Cada uno de los 10 momentos
 * desarrolla una pieza del pensamiento computacional con el molde MILC
 * (presentación → guía → metodología docente → simulación), reutilizando los
 * componentes interactivos Lab* y tareas reales del archivo público de Bebras.
 *
 * Bebras es una iniciativa internacional nacida en Lituania (2004), creada por
 * Valentina Dagienė, hoy presente en más de 50 países. Aquí adaptamos la
 * preparación al modelo MILC con atribución a Bebras International.
 * Ver src/pages/explora/bebras.
 */

export type EstadoMomento = 'activo' | 'proximamente';

/** Los 6 verbos cognitivos del contrato MILC (Bloom). */
export type VerboBloom =
  | 'IDENTIFICA'
  | 'EXPLICA'
  | 'APLICA'
  | 'ANALIZA'
  | 'EVALÚA'
  | 'CREA';

export interface MomentoBebras {
  /** Identificador en la URL: /explora/bebras/{slug} */
  slug: string;
  /** Número de orden en la ruta (0–9) */
  numero: number;
  /** Nombre evocador del momento */
  nombre: string;
  /** Dominio del pensamiento computacional que trabaja */
  dominio: string;
  /** Una frase para la tarjeta de la ruta */
  resumen: string;
  /** Semilla del saber ancestral 🌱 (se desarrolla en la página del momento) */
  saberAncestral: string;
  /** Verbo cognitivo dominante de la actividad del momento */
  verbo: VerboBloom;
  /** Tiempo estimado de la sesión */
  tiempo: string;
  /** 'activo' es navegable; 'proximamente' se muestra en la ruta sin enlace */
  estado: EstadoMomento;
}

/**
 * La ruta de 10 momentos. El momento 0 es el arranque (diagnóstico + formato);
 * los momentos 1–9 desarrollan, uno a uno, las piezas del pensamiento
 * computacional, cerrando en CREA con el simulacro y el diseño de tarea propia.
 */
export const momentos: MomentoBebras[] = [
  {
    slug: 'momento-0',
    numero: 0,
    nombre: 'El castor que piensa',
    dominio: 'Pensamiento computacional',
    resumen: 'Qué es Bebras, cómo puntúa y las cuatro piezas del pensamiento computacional.',
    saberAncestral: 'La minga: organizar entre todos una tarea grande es pensar como una máquina, sin computador.',
    verbo: 'IDENTIFICA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-1',
    numero: 1,
    nombre: 'Parte y vencerás',
    dominio: 'Descomposición',
    resumen: 'Romper un problema grande en partes pequeñas y manejables.',
    saberAncestral: 'El tejido en werregue del Pacífico: un canasto complejo se teje fibra por fibra.',
    verbo: 'ANALIZA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-2',
    numero: 2,
    nombre: 'Cazador de patrones',
    dominio: 'Reconocimiento de patrones',
    resumen: 'Encontrar regularidades, secuencias y repeticiones.',
    saberAncestral: 'El currulao: la marimba del Pacífico repite patrones rítmicos que el oído reconoce.',
    verbo: 'IDENTIFICA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-3',
    numero: 3,
    nombre: 'Lo esencial',
    dominio: 'Abstracción',
    resumen: 'Ignorar lo que no importa y quedarte con el modelo esencial.',
    saberAncestral: 'Las indicaciones para llegar a una vereda: el campesino abstrae el camino en pocas señas.',
    verbo: 'EXPLICA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-4',
    numero: 4,
    nombre: 'Receta exacta',
    dominio: 'Algoritmos',
    resumen: 'Dar instrucciones exactas: secuencias, condiciones y repeticiones.',
    saberAncestral: 'La receta del sancocho: pasos en orden exacto que siempre llevan al mismo resultado.',
    verbo: 'APLICA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-5',
    numero: 5,
    nombre: 'El idioma de los datos',
    dominio: 'Representación de datos',
    resumen: 'Codificar la información: binario, listas y árboles.',
    saberAncestral: 'Los tambores del Pacífico: codificar mensajes a distancia con golpes y silencios.',
    verbo: 'EXPLICA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-6',
    numero: 6,
    nombre: 'Verdadero o falso',
    dominio: 'Lógica y deducción',
    resumen: 'Deducir con condicionales y resolver acertijos de grilla.',
    saberAncestral: 'Las adivinanzas de la tradición oral: deducir la respuesta con pistas y lógica.',
    verbo: 'ANALIZA',
    tiempo: '45 min',
    estado: 'activo',
  },
  {
    slug: 'momento-7',
    numero: 7,
    nombre: 'Mapas y redes',
    dominio: 'Grafos y optimización',
    resumen: 'Recorrer caminos y redes: buscar, ordenar y optimizar.',
    saberAncestral: 'Los ríos del Pacífico como carreteras: una red de caminos para llegar más rápido.',
    verbo: 'ANALIZA',
    tiempo: '45 min',
    estado: 'proximamente',
  },
  {
    slug: 'momento-8',
    numero: 8,
    nombre: 'Modo concurso',
    dominio: 'Estrategia de concurso',
    resumen: 'Orden de ataque, manejo del tiempo y de la penalización.',
    saberAncestral: 'Los juegos de canicas y trompo: saber cuándo arriesgar y cuándo guardar.',
    verbo: 'EVALÚA',
    tiempo: '45 min',
    estado: 'proximamente',
  },
  {
    slug: 'momento-9',
    numero: 9,
    nombre: 'Simulacro y cierre',
    dominio: 'Integración y cierre',
    resumen: 'Simulacro cronometrado real, análisis y cierre filosófico.',
    saberAncestral: 'Volver a la minga: cerramos en comunidad lo que aprendimos en el camino.',
    verbo: 'CREA',
    tiempo: '45 min',
    estado: 'proximamente',
  },
];

/** Nivel de dificultad de una tarea Bebras y su puntuación oficial. */
export interface NivelPuntuacion {
  nivel: 'A' | 'B' | 'C';
  etiqueta: string;
  /** Puntos por respuesta correcta */
  acierto: number;
  /** Puntos por respuesta incorrecta (penalización) */
  error: number;
  /** Puntos por dejar en blanco */
  enBlanco: number;
}

/**
 * Sistema de puntuación oficial de Bebras. La penalización en B y C es lo que
 * dicta la estrategia: en A conviene siempre responder; en B y C, descartar
 * opciones y arriesgar solo con fundamento.
 */
export const puntuacion: NivelPuntuacion[] = [
  { nivel: 'A', etiqueta: 'Fácil', acierto: 6, error: 0, enBlanco: 0 },
  { nivel: 'B', etiqueta: 'Medio', acierto: 9, error: -2, enBlanco: 0 },
  { nivel: 'C', etiqueta: 'Difícil', acierto: 12, error: -4, enBlanco: 0 },
];

/** Datos de formato de la prueba, para la presentación del espacio. */
export const formato = {
  duracion: '45 minutos',
  tareas: '~15 tareas',
  niveles: '3 niveles (A · B · C)',
  modalidad: 'Opción múltiple, sin programar',
};

export function getMomento(slug: string): MomentoBebras | undefined {
  return momentos.find((m) => m.slug === slug);
}

export function getMomentosActivos(): MomentoBebras[] {
  return momentos.filter((m) => m.estado === 'activo');
}
