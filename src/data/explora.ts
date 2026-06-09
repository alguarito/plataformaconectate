/**
 * Apartado "Explora" — hub de programas, concursos y semilleros que llevan a
 * los estudiantes más allá de la malla curricular.
 *
 * Es independiente de los proyectos integradores (esos viven atados a
 * grado/periodo en src/data/proyectosContenido). Cada programa aquí es una
 * iniciativa propia o en alianza externa (RECA, Samsung, NASA-IASC…).
 *
 * Piloto 2026: "Salomé · Investigación de exoplanetas" — alianza con RECA
 * (Red de Estudiantes Colombianos en Astronomía) y la Association Ágora de
 * Hipatia (Suiza), autores del cómic. Ver src/pages/explora/salome.
 */

export type EstadoPrograma = 'activo' | 'proximamente';

export interface Programa {
  /** Identificador en la URL: /explora/{slug} */
  slug: string;
  /** Nombre visible del programa */
  nombre: string;
  /** Categoría corta (área / tema) */
  categoria: string;
  /** Descripción de una o dos frases para la tarjeta */
  descripcion: string;
  /** 'activo' es navegable; 'proximamente' se muestra como vista previa */
  estado: EstadoPrograma;
  /** Emoji representativo */
  icono: string;
  /** Clase de color Bento para la tarjeta (bg-bento-*) */
  bgClass: string;
  /** Aliado o fuente externa — atribución visible */
  aliado?: string;
}

export const programas: Programa[] = [
  {
    slug: 'salome',
    nombre: 'Salomé · Investigación de exoplanetas',
    categoria: 'Astronomía · Exoplanetas',
    descripcion:
      'Un cómic científico para descubrir estrellas, planetas y otros mundos. Adaptado al modelo MILC con los saberes del cielo colombiano.',
    estado: 'activo',
    icono: '🪐',
    bgClass: 'bg-bento-purple',
    aliado: 'Ágora de Hipatia · RECA',
  },
  {
    slug: 'bebras',
    nombre: 'Pruebas Bebras',
    categoria: 'Pensamiento computacional',
    descripcion:
      'Reto internacional de pensamiento computacional: resolver problemas con lógica e ingenio, sin escribir una sola línea de código.',
    estado: 'proximamente',
    icono: '🦫',
    bgClass: 'bg-bento-lime',
    aliado: 'Bebras International',
  },
  {
    slug: 'solve-for-tomorrow',
    nombre: 'Solve for Tomorrow',
    categoria: 'Innovación social STEM',
    descripcion:
      'Concurso de Samsung donde los estudiantes diseñan soluciones tecnológicas a un problema real de su comunidad.',
    estado: 'proximamente',
    icono: '💡',
    bgClass: 'bg-bento-orange',
    aliado: 'Samsung',
  },
  {
    slug: 'iasc',
    nombre: 'Búsqueda de asteroides',
    categoria: 'Astronomía · Ciencia ciudadana',
    descripcion:
      'Campaña de la NASA-IASC para detectar asteroides reales analizando imágenes del cielo. Ciencia que cuenta de verdad.',
    estado: 'proximamente',
    icono: '☄️',
    bgClass: 'bg-bento-blue',
    aliado: 'NASA · IASC',
  },
  {
    slug: 'programacion',
    nombre: 'Concurso Nacional de Programación',
    categoria: 'Programación competitiva',
    descripcion:
      'Retos de algoritmia y código contra reloj. Entrena la lógica, la velocidad y el temple para resolver bajo presión.',
    estado: 'proximamente',
    icono: '💻',
    bgClass: 'bg-bento-cyan',
  },
];

export function getPrograma(slug: string): Programa | undefined {
  return programas.find((p) => p.slug === slug);
}

export function getProgramasActivos(): Programa[] {
  return programas.filter((p) => p.estado === 'activo');
}

/** Colores Bento "oscuros" que requieren texto blanco para cumplir contraste AA. */
const COLORES_OSCUROS = new Set([
  'bg-bento-blue',
  'bg-bento-purple',
  'bg-bento-orange',
  'bg-bento-pink',
]);

/** Devuelve la clase de color de texto legible sobre un fondo Bento dado. */
export function fgSobreBento(bgClass: string): string {
  return COLORES_OSCUROS.has(bgClass) ? 'text-white' : 'text-neutral-950';
}
