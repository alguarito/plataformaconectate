/**
 * Índice del contenido web de exámenes finales.
 *
 * Cada vez que el builder genera un nuevo TS, este índice se actualiza
 * automáticamente con el import correspondiente. La página /examen lee
 * este mapa para decidir si renderiza el banco de práctica.
 *
 * Si una clave no tiene entrada aquí, la página muestra solo el PDF
 * formal sin banco web.
 */
import type { ContenidoExamen } from './_schema';
import { claveExamen } from './_schema';

import e11_1 from './11-1';

import e11_2 from './11-2';

import e11_3 from './11-3';

import e10_1 from './10-1';

import e10_2 from './10-2';

import e10_3 from './10-3';

import e9_1 from './9-1';

import e9_2 from './9-2';

import e9_3 from './9-3';

import e8_1 from './8-1';

import e8_2 from './8-2';

import e8_3 from './8-3';

import e6_1 from './6-1';

import e6_2 from './6-2';

import e6_3 from './6-3';

const TODOS: ContenidoExamen[] = [
  e11_1,
  e11_2,
  e11_3,
  e10_1,
  e10_2,
  e10_3,
  e9_1,
  e9_2,
  e9_3,
  e8_1,
  e8_2,
  e8_3,
  e6_1,
  e6_2,
  e6_3,
];

const MAPA = new Map<string, ContenidoExamen>();
for (const e of TODOS) {
  MAPA.set(claveExamen(e.grado, e.periodo), e);
}

export function getContenidoExamen(
  grado: number,
  periodo: number,
): ContenidoExamen | null {
  return MAPA.get(claveExamen(grado, periodo)) ?? null;
}

export function totalConBanco(): number {
  return TODOS.length;
}
