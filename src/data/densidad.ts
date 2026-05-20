// Densidad pedagógica de cada guía (modelo v2 · absoluto).
//
// Generado por scripts/medir-densidad.py contando palabras reales del YAML.
// El **nivel** (alta/media/baja) sale de umbrales absolutos de palabras y
// determina el COLOR del badge. Las **estrellas** las calcula
// BadgeDensidad.astro desde el nivel MILC v3 del contenido TS, no de aquí.
//
// Para regenerar: make guia-densidad
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
