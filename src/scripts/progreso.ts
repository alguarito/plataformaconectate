/**
 * Sistema de progreso y gamificación de ConectaTE
 *
 * Modelo:
 * - El estudiante elige su "grado actual" al primer ingreso (se guarda en localStorage).
 * - Cada guía y cada proyecto integrador puede marcarse como "completado".
 * - Si lo completado pertenece a SU grado → suma XP al contador principal del grado.
 * - Si pertenece a OTRO grado → suma XP al contador de exploración (independiente).
 *
 * Persistencia: localStorage (por navegador, sin login).
 * Comunicación entre componentes: CustomEvent('progreso:cambio') en document.
 */

import {
  calcularGamificacion,
  NIVELES_GRADO,
  INSIGNIAS_EXPLORACION,
  TOTAL_ITEMS_GRADO,
} from '../lib/gamificacion';
import type { NivelGrado, Insignia } from '../lib/gamificacion';

// Re-export: varios componentes importaban estos símbolos desde aquí.
// La fuente única ahora es ../lib/gamificacion (compartida con el panel docente).
export { NIVELES_GRADO, INSIGNIAS_EXPLORACION, TOTAL_ITEMS_GRADO };
export type { NivelGrado, Insignia };

const STORAGE_KEY = 'conectate.progreso.v1';

export interface EstadoProgreso {
  version: 1;
  gradoActual: number | null;
  guias: Record<string, { ts: number }>;
  proyectos: Record<string, { ts: number }>;
}

export interface Stats {
  gradoActual: number | null;
  itemsGrado: number;
  itemsOtros: number;
  porcentajeGrado: number;
  nivel: NivelGrado;
  insigniasGanadas: Insignia[];
  proximaInsignia: Insignia | null;
  xpGrado: number;
  xpExploracion: number;
}

/* ─────────── Helpers de claves ─────────── */

export function guiaKey(grado: number, periodo: number, sesion: number): string {
  return `g${grado}-p${periodo}-s${sesion}`;
}

export function proyectoKey(grado: number, periodo: number): string {
  return `g${grado}-p${periodo}`;
}

function gradoDeKey(k: string): number | null {
  const m = k.match(/^g(\d+)-/);
  return m ? parseInt(m[1], 10) : null;
}

/* ─────────── Lectura / escritura ─────────── */

function vacio(): EstadoProgreso {
  return { version: 1, gradoActual: null, guias: {}, proyectos: {} };
}

export function leerEstado(): EstadoProgreso {
  if (typeof localStorage === 'undefined') return vacio();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return vacio();
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1) {
      return {
        version: 1,
        gradoActual: parsed.gradoActual ?? null,
        guias: parsed.guias ?? {},
        proyectos: parsed.proyectos ?? {},
      };
    }
  } catch {
    /* ignore */
  }
  return vacio();
}

function escribirEstado(e: EstadoProgreso): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
  document.dispatchEvent(new CustomEvent('progreso:cambio', { detail: e }));
}

/* ─────────── API pública: mutaciones ─────────── */

export function setGradoActual(grado: number | null): void {
  const e = leerEstado();
  e.gradoActual = grado;
  escribirEstado(e);
  // gradoActual NO se sincroniza a BD — es preferencia local del dispositivo.
}

export function marcarGuia(
  grado: number,
  periodo: number,
  sesion: number,
  completar: boolean,
): void {
  const e = leerEstado();
  const k = guiaKey(grado, periodo, sesion);
  if (completar) e.guias[k] = { ts: Date.now() };
  else delete e.guias[k];
  escribirEstado(e);
  // Sync a BD fire-and-forget. No bloquea ni falla la mutación local.
  void import('../lib/progreso-sync').then((m) =>
    m.syncGuia(grado, periodo, sesion, completar),
  );
}

export function marcarProyecto(
  grado: number,
  periodo: number,
  completar: boolean,
): void {
  const e = leerEstado();
  const k = proyectoKey(grado, periodo);
  if (completar) e.proyectos[k] = { ts: Date.now() };
  else delete e.proyectos[k];
  escribirEstado(e);
  // Sync a BD fire-and-forget.
  void import('../lib/progreso-sync').then((m) =>
    m.syncProyecto(grado, periodo, completar),
  );
}

/* ─────────── Hidratación desde BD (llamada por auth hook) ─────────── */

/**
 * Reemplaza el estado local con uno fusionado entre local + BD. Útil al
 * login para traer progreso de otros dispositivos.
 *
 * Se llama desde src/lib/auth.ts cuando detecta una sesión nueva.
 */
export function setEstadoCompleto(nuevo: EstadoProgreso): void {
  escribirEstado(nuevo);
}

export function reiniciarTodo(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  document.dispatchEvent(new CustomEvent('progreso:cambio', { detail: vacio() }));
}

/* ─────────── API pública: consultas ─────────── */

export function estaGuiaCompletada(
  grado: number,
  periodo: number,
  sesion: number,
): boolean {
  return guiaKey(grado, periodo, sesion) in leerEstado().guias;
}

export function estaProyectoCompletado(grado: number, periodo: number): boolean {
  return proyectoKey(grado, periodo) in leerEstado().proyectos;
}

export function calcStats(): Stats {
  const e = leerEstado();
  const ga = e.gradoActual;

  // Separar lo completado en «mi grado» vs «otros grados». Cuando no hay grado
  // elegido (ga == null) todo cae en «otros», igual que antes.
  let guiasGrado = 0;
  let guiasOtro = 0;
  let proyectosGrado = 0;
  let proyectosOtro = 0;

  for (const k of Object.keys(e.guias)) {
    const g = gradoDeKey(k);
    if (g == null) continue;
    if (ga != null && g === ga) guiasGrado++;
    else guiasOtro++;
  }
  for (const k of Object.keys(e.proyectos)) {
    const g = gradoDeKey(k);
    if (g == null) continue;
    if (ga != null && g === ga) proyectosGrado++;
    else proyectosOtro++;
  }

  const r = calcularGamificacion({
    guiasGrado,
    guiasOtro,
    proyectosGrado,
    proyectosOtro,
  });

  return {
    gradoActual: ga,
    itemsGrado: r.itemsGrado,
    itemsOtros: r.itemsOtros,
    porcentajeGrado: r.porcentajeGrado,
    nivel: r.nivel,
    insigniasGanadas: r.insigniasGanadas,
    proximaInsignia: r.proximaInsignia,
    xpGrado: r.xpGrado,
    xpExploracion: r.xpExploracion,
  };
}

/**
 * Cuenta cuántas guías de un período específico están completadas (incluye proyecto).
 */
export function progresoPeriodo(
  grado: number,
  periodo: number,
): { guiasCompletadas: number; proyectoCompletado: boolean } {
  const e = leerEstado();
  let guiasCompletadas = 0;
  for (let s = 1; s <= 10; s++) {
    if (guiaKey(grado, periodo, s) in e.guias) guiasCompletadas++;
  }
  const proyectoCompletado = proyectoKey(grado, periodo) in e.proyectos;
  return { guiasCompletadas, proyectoCompletado };
}

/**
 * Retorna la última guía visitada/completada (heurística para "Continuar aprendiendo").
 */
export function ultimaCompletada(): {
  grado: number;
  periodo: number;
  sesion: number;
} | null {
  const e = leerEstado();
  let mejor: { ts: number; key: string } | null = null;
  for (const [k, v] of Object.entries(e.guias)) {
    if (!mejor || v.ts > mejor.ts) mejor = { ts: v.ts, key: k };
  }
  if (!mejor) return null;
  const m = mejor.key.match(/^g(\d+)-p(\d+)-s(\d+)$/);
  if (!m) return null;
  return {
    grado: parseInt(m[1], 10),
    periodo: parseInt(m[2], 10),
    sesion: parseInt(m[3], 10),
  };
}

/**
 * Suscripción a cambios de progreso.
 * Devuelve la función para desuscribirse.
 */
export function onCambio(handler: (e: EstadoProgreso) => void): () => void {
  const fn = (ev: Event) => handler((ev as CustomEvent<EstadoProgreso>).detail);
  document.addEventListener('progreso:cambio', fn);
  return () => document.removeEventListener('progreso:cambio', fn);
}
