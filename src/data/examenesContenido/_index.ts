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

const TODOS: ContenidoExamen[] = [
  e11_1,
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
