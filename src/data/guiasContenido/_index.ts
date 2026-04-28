/**
 * Índice de guías con contenido enriquecido.
 *
 * Cada vez que enriquezcas una guía nueva con `npm run enrich -- G P S`,
 * el script crea su archivo y agrega un import aquí. La página de guía
 * lee este mapa y renderiza el contenido enriquecido si existe; si no,
 * cae al scaffolding genérico (compatibilidad total).
 *
 * Estado actual: 1 / 180 enriquecidas.
 */
import type { ContenidoGuia } from './_schema';
import { claveContenido } from './_schema';

import g8_2_1 from './8-2-1';

const TODAS: ContenidoGuia[] = [g8_2_1];

const MAPA = new Map<string, ContenidoGuia>();
for (const g of TODAS) {
  MAPA.set(claveContenido(g.grado, g.periodo, g.sesion), g);
}

export function getContenidoGuia(
  grado: number,
  periodo: number,
  sesion: number,
): ContenidoGuia | null {
  return MAPA.get(claveContenido(grado, periodo, sesion)) ?? null;
}

export function totalEnriquecidas(): number {
  return TODAS.length;
}

export function listaEnriquecidas(): { grado: number; periodo: number; sesion: number }[] {
  return TODAS.map((g) => ({ grado: g.grado, periodo: g.periodo, sesion: g.sesion }));
}
