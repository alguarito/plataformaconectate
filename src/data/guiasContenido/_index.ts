/**
 * Índice de guías con contenido enriquecido.
 *
 * Cada vez que enriquezcas una guía nueva con `npm run enrich -- G P S`,
 * el script crea su archivo y agrega un import aquí. La página de guía
 * lee este mapa y renderiza el contenido enriquecido si existe; si no,
 * cae al scaffolding genérico (compatibilidad total).
 *
 * Estado actual: 17 / 180 enriquecidas.
 */
import type { ContenidoGuia } from './_schema';
import { claveContenido } from './_schema';

import g8_1_1 from './8-1-1';
import g8_1_2 from './8-1-2';
import g8_1_3 from './8-1-3';
import g8_1_4 from './8-1-4';
import g8_1_5 from './8-1-5';
import g8_1_6 from './8-1-6';
import g8_1_7 from './8-1-7';
import g8_1_8 from './8-1-8';
import g8_1_9 from './8-1-9';
import g8_1_10 from './8-1-10';
import g8_2_1 from './8-2-1';
import g8_2_2 from './8-2-2';
import g8_2_3 from './8-2-3';
import g8_2_4 from './8-2-4';
import g8_2_5 from './8-2-5';
import g8_3_10 from './8-3-10';
import g10_2_1 from './10-2-1';

const TODAS: ContenidoGuia[] = [
  g8_1_1, g8_1_2, g8_1_3, g8_1_4, g8_1_5,
  g8_1_6, g8_1_7, g8_1_8, g8_1_9, g8_1_10,
  g8_2_1, g8_2_2, g8_2_3, g8_2_4, g8_2_5,
  g8_3_10,
  g10_2_1,
];

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
