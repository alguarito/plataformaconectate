/**
 * Utilidades compartidas entre las páginas de informes del docente.
 * Solo para uso en bloques <script> (client-side).
 */
import { BENTO } from './charts';

export const COLORES_GRADO: Record<number, string> = {
  6: BENTO.blue, 7: BENTO.lime, 8: BENTO.orange,
  9: BENTO.purple, 10: BENTO.pink, 11: BENTO.cyan,
};

export const base = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export const $ = <T extends HTMLElement>(s: string) =>
  document.querySelector<T>(s);

export function setKpi(clave: string, valor: string): void {
  const el = document.querySelector(`[data-kpi="${clave}"]`);
  if (el) el.textContent = valor;
}

export function mostrar(
  estado: string,
  estados: readonly string[] = ['loading', 'error', 'vacio', 'contenido'],
): void {
  for (const e of estados) {
    const sel = e === 'contenido' ? '[data-contenido]' : `[data-${e}]`;
    document.querySelector(sel)?.classList.toggle('hidden', e !== estado);
  }
}
