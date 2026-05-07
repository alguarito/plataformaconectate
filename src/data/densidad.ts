// Densidad pedagógica estimada por guía.
// Generado por scripts/medir-densidad.py a partir del tamaño en bytes
// de los .tex de Drive. Es una v1: el tamaño correlaciona con cantidad
// de contenido (palabras, ejemplos, ejercicios) en este corpus de guías
// MILC ya que comparten un preamble fijo de ~3KB.
//
// Para regenerar: python3 scripts/medir-densidad.py
import densidadData from '../../public/data/densidad.json';

export type NivelDensidad = 'alta' | 'media' | 'baja';

export interface DensidadGuia {
  guiaId: string;
  grado: number;
  sesion: number;
  bytes: number;
  kb: number;
  palabras: number;
  nivel: NivelDensidad;
  stars: number;        // 1-5
  percentile: number;   // 0-100
}

const data = densidadData as Record<string, DensidadGuia>;

/**
 * Obtiene densidad por grado + sesión global (1-30).
 */
export function getDensidad(grado: number, sesionGlobal: number): DensidadGuia | undefined {
  return data[`${grado}-${sesionGlobal}`];
}

/**
 * Obtiene densidad por grado + periodo (1-3) + sesión local (1-10).
 * Convierte automáticamente a sesión global.
 */
export function getDensidadPeriodo(
  grado: number,
  periodo: number,
  sesionLocal: number
): DensidadGuia | undefined {
  const sesionGlobal = (periodo - 1) * 10 + sesionLocal;
  return data[`${grado}-${sesionGlobal}`];
}

export function getAllDensidad(): DensidadGuia[] {
  return Object.values(data);
}

export const NIVEL_LABEL: Record<NivelDensidad, string> = {
  alta: 'Alta',
  media: 'Media',
  baja: 'Baja',
};

export const NIVEL_COLOR: Record<NivelDensidad, string> = {
  alta: '#58A923',   // verde MILC
  media: '#E5B400',  // mostaza
  baja: '#B86600',   // ocre
};
