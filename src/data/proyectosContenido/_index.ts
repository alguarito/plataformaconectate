/**
 * Índice del contenido web de proyectos integradores MILC v3.
 *
 * Cada vez que el builder genera un nuevo TS, este índice se actualiza
 * automáticamente con el import correspondiente. La página /proyecto lee
 * este mapa para renderizar el contenido entregable-céntrico.
 *
 * Si una clave no tiene entrada aquí, la página muestra solo el PDF.
 */
import type { ContenidoProyecto } from './_schema';
import { claveProyecto } from './_schema';

import p10_1 from './10-1';
import p10_2 from './10-2';
import p10_3 from './10-3';
import p11_1 from './11-1';
import p11_2 from './11-2';
import p11_3 from './11-3';
import p6_1 from './6-1';
import p6_2 from './6-2';
import p6_3 from './6-3';
import p7_1 from './7-1';
import p7_2 from './7-2';
import p7_3 from './7-3';
import p8_1 from './8-1';
import p8_2 from './8-2';
import p8_3 from './8-3';
import p9_1 from './9-1';
import p9_2 from './9-2';
import p9_3 from './9-3';

const TODOS: ContenidoProyecto[] = [
  p10_1, p10_2, p10_3, p11_1, p11_2, p11_3, p6_1, p6_2, p6_3, p7_1, p7_2, p7_3, p8_1, p8_2, p8_3, p9_1, p9_2, p9_3,
];

const MAPA = new Map<string, ContenidoProyecto>(
  TODOS.map((c) => [claveProyecto(c.grado, c.periodo), c]),
);

export function getContenidoProyecto(
  grado: number,
  periodo: number,
): ContenidoProyecto | undefined {
  return MAPA.get(claveProyecto(grado, periodo));
}

export function getAllContenidoProyecto(): ContenidoProyecto[] {
  return TODOS.slice();
}
