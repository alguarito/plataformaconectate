/**
 * Gamificación · lógica pura compartida entre cliente y servidor.
 *
 * Tanto el progreso local del estudiante (src/scripts/progreso.ts, calculado
 * desde localStorage) como el panel del docente (src/lib/aulas.ts, calculado
 * desde Supabase) derivan XP / nivel / insignias con ESTAS mismas reglas.
 * Mantener una sola fuente evita que la vista del estudiante y la del docente
 * difieran.
 *
 * Sin dependencias de DOM ni localStorage: solo constantes y funciones puras.
 */

const XP_GUIA_GRADO = 100;
const XP_GUIA_OTRO = 50;
const XP_PROYECTO_GRADO = 500;
const XP_PROYECTO_OTRO = 200;

const TOTAL_GUIAS_GRADO = 30;
const TOTAL_PROYECTOS_GRADO = 3;
export const TOTAL_ITEMS_GRADO = TOTAL_GUIAS_GRADO + TOTAL_PROYECTOS_GRADO; // 33

export interface NivelGrado {
  min: number;
  max: number;
  nombre: string;
  emoji: string;
  color: string;
}

export const NIVELES_GRADO: NivelGrado[] = [
  { min: 0, max: 7, nombre: 'Novato', emoji: '🌱', color: 'bg-bento-blue' },
  { min: 8, max: 16, nombre: 'Aprendiz', emoji: '🌿', color: 'bg-bento-cyan' },
  { min: 17, max: 25, nombre: 'Experto', emoji: '🌳', color: 'bg-bento-lime' },
  { min: 26, max: 32, nombre: 'Casi Maestro', emoji: '🎯', color: 'bg-bento-orange' },
  { min: 33, max: 33, nombre: 'Maestro', emoji: '🏆', color: 'bg-bento-pink' },
];

export interface Insignia {
  min: number;
  nombre: string;
  emoji: string;
}

export const INSIGNIAS_EXPLORACION: Insignia[] = [
  { min: 1, nombre: 'Explorador', emoji: '🗺️' },
  { min: 5, nombre: 'Pionero', emoji: '🧭' },
  { min: 15, nombre: 'Aventurero', emoji: '🚀' },
  { min: 30, nombre: 'Polímata', emoji: '🌟' },
];

/**
 * Conteo de items completados, separados por «mi grado» vs «otros grados».
 * El cliente lo deriva de localStorage; el panel del docente, de Supabase
 * (usando el grado del aula como referencia de «mi grado»).
 */
export interface ConteoGamificacion {
  guiasGrado: number;
  guiasOtro: number;
  proyectosGrado: number;
  proyectosOtro: number;
}

export interface ResumenGamificacion {
  itemsGrado: number;
  itemsOtros: number;
  xpGrado: number;
  xpExploracion: number;
  porcentajeGrado: number;
  nivel: NivelGrado;
  insigniasGanadas: Insignia[];
  proximaInsignia: Insignia | null;
}

/**
 * Calcula XP, nivel e insignias a partir de los conteos de items completados.
 * Función pura: mismos insumos → mismos resultados, sin efectos colaterales.
 */
export function calcularGamificacion(c: ConteoGamificacion): ResumenGamificacion {
  const itemsGrado = c.guiasGrado + c.proyectosGrado;
  const itemsOtros = c.guiasOtro + c.proyectosOtro;
  const xpGrado = c.guiasGrado * XP_GUIA_GRADO + c.proyectosGrado * XP_PROYECTO_GRADO;
  const xpExploracion =
    c.guiasOtro * XP_GUIA_OTRO + c.proyectosOtro * XP_PROYECTO_OTRO;

  const porcentajeGrado = Math.min(
    100,
    Math.round((itemsGrado / TOTAL_ITEMS_GRADO) * 100),
  );
  const nivel =
    NIVELES_GRADO.find((n) => itemsGrado >= n.min && itemsGrado <= n.max) ??
    NIVELES_GRADO[0];
  const insigniasGanadas = INSIGNIAS_EXPLORACION.filter((i) => itemsOtros >= i.min);
  const proximaInsignia =
    INSIGNIAS_EXPLORACION.find((i) => itemsOtros < i.min) ?? null;

  return {
    itemsGrado,
    itemsOtros,
    xpGrado,
    xpExploracion,
    porcentajeGrado,
    nivel,
    insigniasGanadas,
    proximaInsignia,
  };
}
