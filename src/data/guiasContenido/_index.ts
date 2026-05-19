/**
 * Índice de guías con contenido enriquecido.
 *
 * Cada vez que enriquezcas una guía nueva con `npm run enrich -- G P S`,
 * el script crea su archivo y agrega un import aquí. La página de guía
 * lee este mapa y renderiza el contenido enriquecido si existe; si no,
 * cae al scaffolding genérico (compatibilidad total).
 *
 * Estado actual: 37 / 198 enriquecidas (incluye 6 S1/S11 patrón MILC para grado 6).
 */
import type { ContenidoGuia } from './_schema';
import { claveContenido } from './_schema';

import g6_1_1 from './6-1-1';
import g6_1_11 from './6-1-11';
import g6_2_1 from './6-2-1';
import g6_2_11 from './6-2-11';
import g6_3_1 from './6-3-1';
import g6_3_11 from './6-3-11';
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
import g8_2_6 from './8-2-6';
import g8_2_7 from './8-2-7';
import g8_2_8 from './8-2-8';
import g8_2_9 from './8-2-9';
import g8_2_10 from './8-2-10';
import g8_3_1 from './8-3-1';
import g8_3_2 from './8-3-2';
import g8_3_3 from './8-3-3';
import g8_3_4 from './8-3-4';
import g8_3_5 from './8-3-5';
import g8_3_6 from './8-3-6';
import g8_3_7 from './8-3-7';
import g8_3_8 from './8-3-8';
import g8_3_9 from './8-3-9';
import g8_3_10 from './8-3-10';
import g9_1_1 from './9-1-1';
import g9_1_2 from './9-1-2';
import g9_1_3 from './9-1-3';
import g9_1_4 from './9-1-4';
import g9_1_5 from './9-1-5';
import g9_1_6 from './9-1-6';
import g9_1_7 from './9-1-7';
import g9_1_8 from './9-1-8';
import g9_1_9 from './9-1-9';
import g9_1_10 from './9-1-10';
import g9_2_1 from './9-2-1';
import g9_2_2 from './9-2-2';
import g9_2_3 from './9-2-3';
import g9_2_4 from './9-2-4';
import g9_2_5 from './9-2-5';
import g9_2_6 from './9-2-6';
import g9_2_7 from './9-2-7';
import g9_2_8 from './9-2-8';
import g9_2_9 from './9-2-9';
import g9_2_10 from './9-2-10';
import g9_3_1 from './9-3-1';
import g9_3_2 from './9-3-2';
import g9_3_3 from './9-3-3';
import g9_3_4 from './9-3-4';
import g9_3_5 from './9-3-5';
import g9_3_6 from './9-3-6';
import g9_3_7 from './9-3-7';
import g9_3_8 from './9-3-8';
import g9_3_9 from './9-3-9';
import g9_3_10 from './9-3-10';
import g10_2_1 from './10-2-1';
import g11_1_1 from './11-1-1';
import g11_2_1 from './11-2-1';
import g11_2_2 from './11-2-2';
import g11_2_3 from './11-2-3';
import g11_2_4 from './11-2-4';
import g11_2_5 from './11-2-5';
import g11_2_6 from './11-2-6';
import g11_2_7 from './11-2-7';
import g11_2_8 from './11-2-8';
import g11_2_9 from './11-2-9';
import g11_2_10 from './11-2-10';
import g11_1_2 from './11-1-2';
import g11_1_3 from './11-1-3';
import g11_1_4 from './11-1-4';
import g11_1_5 from './11-1-5';
import g11_1_6 from './11-1-6';
import g11_1_7 from './11-1-7';
import g11_1_8 from './11-1-8';
import g11_1_9 from './11-1-9';
import g11_1_10 from './11-1-10';

import g10_1_1 from './10-1-1';
import g10_1_10 from './10-1-10';
import g10_1_2 from './10-1-2';
import g10_1_3 from './10-1-3';
import g10_1_4 from './10-1-4';
import g10_1_5 from './10-1-5';
import g10_1_6 from './10-1-6';
import g10_1_7 from './10-1-7';
import g10_1_8 from './10-1-8';
import g10_1_9 from './10-1-9';
import g10_2_10 from './10-2-10';
import g10_2_2 from './10-2-2';
import g10_2_3 from './10-2-3';
import g10_2_4 from './10-2-4';
import g10_2_5 from './10-2-5';
import g10_2_6 from './10-2-6';
import g10_2_7 from './10-2-7';
import g10_2_8 from './10-2-8';
import g10_2_9 from './10-2-9';
import g10_3_1 from './10-3-1';
import g10_3_10 from './10-3-10';
import g10_3_2 from './10-3-2';
import g10_3_3 from './10-3-3';
import g10_3_4 from './10-3-4';
import g10_3_5 from './10-3-5';
import g10_3_6 from './10-3-6';
import g10_3_7 from './10-3-7';
import g10_3_8 from './10-3-8';
import g10_3_9 from './10-3-9';

import g6_1_10 from './6-1-10';
import g6_1_2 from './6-1-2';
import g6_1_3 from './6-1-3';
import g6_1_4 from './6-1-4';
import g6_1_5 from './6-1-5';
import g6_1_6 from './6-1-6';
import g6_1_7 from './6-1-7';
import g6_1_8 from './6-1-8';
import g6_1_9 from './6-1-9';

import g6_2_10 from './6-2-10';
import g6_2_2 from './6-2-2';
import g6_2_3 from './6-2-3';
import g6_2_4 from './6-2-4';
import g6_2_5 from './6-2-5';
import g6_2_6 from './6-2-6';
import g6_2_7 from './6-2-7';
import g6_2_8 from './6-2-8';
import g6_2_9 from './6-2-9';

import g6_3_10 from './6-3-10';
import g6_3_2 from './6-3-2';
import g6_3_3 from './6-3-3';
import g6_3_4 from './6-3-4';
import g6_3_5 from './6-3-5';
import g6_3_6 from './6-3-6';
import g6_3_7 from './6-3-7';
import g6_3_8 from './6-3-8';
import g6_3_9 from './6-3-9';

import g7_1_1 from './7-1-1';
import g7_1_10 from './7-1-10';
import g7_1_2 from './7-1-2';
import g7_1_3 from './7-1-3';
import g7_1_4 from './7-1-4';
import g7_1_5 from './7-1-5';
import g7_1_6 from './7-1-6';
import g7_1_7 from './7-1-7';
import g7_1_8 from './7-1-8';
import g7_1_9 from './7-1-9';

import g7_2_1 from './7-2-1';
import g7_2_10 from './7-2-10';
import g7_2_2 from './7-2-2';
import g7_2_3 from './7-2-3';
import g7_2_4 from './7-2-4';
import g7_2_5 from './7-2-5';
import g7_2_6 from './7-2-6';
import g7_2_7 from './7-2-7';
import g7_2_8 from './7-2-8';
import g7_2_9 from './7-2-9';

const TODAS: ContenidoGuia[] = [
  g6_1_1, g6_1_11,
  g6_2_1, g6_2_11,
  g6_3_1, g6_3_11,
  g8_1_1, g8_1_2, g8_1_3, g8_1_4, g8_1_5,
  g8_1_6, g8_1_7, g8_1_8, g8_1_9, g8_1_10,
  g8_2_1, g8_2_2, g8_2_3, g8_2_4, g8_2_5,
  g8_2_6, g8_2_7, g8_2_8, g8_2_9, g8_2_10,
  g8_3_1, g8_3_2, g8_3_3, g8_3_4, g8_3_5,
  g8_3_6, g8_3_7, g8_3_8, g8_3_9, g8_3_10,
  g9_1_1, g9_1_2, g9_1_3, g9_1_4, g9_1_5,
  g9_1_6, g9_1_7, g9_1_8, g9_1_9, g9_1_10,
  g9_2_1, g9_2_2, g9_2_3, g9_2_4, g9_2_5,
  g9_2_6, g9_2_7, g9_2_8, g9_2_9, g9_2_10,
  g9_3_1, g9_3_2, g9_3_3, g9_3_4, g9_3_5, g9_3_6,
  g9_3_7, g9_3_8, g9_3_9, g9_3_10,
  g10_2_1,
  g11_1_1, g11_1_2, g11_1_3, g11_1_4, g11_1_5,
  g11_1_6, g11_1_7, g11_1_8, g11_1_9, g11_1_10,
  g11_2_1, g11_2_2, g11_2_3, g11_2_4, g11_2_5, g11_2_6,
  g11_2_7, g11_2_8, g11_2_9, g11_2_10,
  g10_1_1, g10_1_10, g10_1_2, g10_1_3, g10_1_4, g10_1_5, g10_1_6, g10_1_7, g10_1_8, g10_1_9, g10_2_10, g10_2_2, g10_2_3, g10_2_4, g10_2_5, g10_2_6, g10_2_7, g10_2_8, g10_2_9, g10_3_1, g10_3_10, g10_3_2, g10_3_3, g10_3_4, g10_3_5, g10_3_6, g10_3_7, g10_3_8, g10_3_9,
  g6_1_10, g6_1_2, g6_1_3, g6_1_4, g6_1_5, g6_1_6, g6_1_7, g6_1_8, g6_1_9,
  g6_2_10, g6_2_2, g6_2_3, g6_2_4, g6_2_5, g6_2_6, g6_2_7, g6_2_8, g6_2_9,
  g6_3_10, g6_3_2, g6_3_3, g6_3_4, g6_3_5, g6_3_6, g6_3_7, g6_3_8, g6_3_9,
  g7_1_1, g7_1_10, g7_1_2, g7_1_3, g7_1_4, g7_1_5, g7_1_6, g7_1_7, g7_1_8, g7_1_9,
  g7_2_1, g7_2_10, g7_2_2, g7_2_3, g7_2_4, g7_2_5, g7_2_6, g7_2_7, g7_2_8, g7_2_9,
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

/**
 * Nivel de adopción del contrato editorial MILC v3 de una guía:
 *  - 'pro':     contrato completo (saber + ruta + actividades + triángulo + 5d).
 *               Es la profundidad de G9·P1+P2 y G11·P1.
 *  - 'bloques': los 3 bloques filosóficos (saber + triángulo + 5d) sobre una
 *               estructura pre-MILC. Es la migración A aplicada en G8·P1+P2.
 *  - 'legacy':  hay .ts pero sin los bloques MILC v3 (escasos G6/G8·P3 sin migrar).
 *  - 'none':    sin contenido enriquecido (cae a recurso de Drive / scaffolding).
 */
export type NivelMilc = 'pro' | 'bloques' | 'legacy' | 'none';

export function getMilcLevel(
  grado: number,
  periodo: number,
  sesion: number,
): NivelMilc {
  const g = getContenidoGuia(grado, periodo, sesion);
  if (!g) return 'none';
  const tieneSaber = !!g.saberAncestral;
  const tieneTri = !!g.triangulo;
  const tiene5d = !!g.cincoDimensiones;
  const tieneRuta = !!g.mapaRuta && g.mapaRuta.length > 0;
  const tieneActs = !!g.actividades && g.actividades.length > 0;
  if (tieneSaber && tieneTri && tiene5d && tieneRuta && tieneActs) return 'pro';
  if (tieneSaber && tieneTri && tiene5d) return 'bloques';
  return 'legacy';
}
