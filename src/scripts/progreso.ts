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

const STORAGE_KEY = 'conectate.progreso.v1';

const TOTAL_GUIAS_GRADO = 30;
const TOTAL_PROYECTOS_GRADO = 3;
export const TOTAL_ITEMS_GRADO = TOTAL_GUIAS_GRADO + TOTAL_PROYECTOS_GRADO; // 33

const XP_GUIA_GRADO = 100;
const XP_GUIA_OTRO = 50;
const XP_PROYECTO_GRADO = 500;
const XP_PROYECTO_OTRO = 200;

export interface NivelGrado {
  min: number;
  max: number;
  nombre: string;
  emoji: string;
  color: string;
}

export const NIVELES_GRADO: NivelGrado[] = [
  { min: 0, max: 7, nombre: 'Novato', emoji: '🌱', color: 'bg-bento-blue' },
  { min: 8, max: 16, nombre: 'Aprendiz', emoji: '🌿', color: 'bg-bento-cyan' },
  { min: 17, max: 25, nombre: 'Experto', emoji: '🌳', color: 'bg-bento-lime' },
  { min: 26, max: 32, nombre: 'Casi Maestro', emoji: '🎯', color: 'bg-bento-orange' },
  { min: 33, max: 33, nombre: 'Maestro', emoji: '🏆', color: 'bg-bento-pink' },
];

export interface Insignia {
  min: number;
  nombre: string;
  emoji: string;
}

export const INSIGNIAS_EXPLORACION: Insignia[] = [
  { min: 1, nombre: 'Explorador', emoji: '🗺️' },
  { min: 5, nombre: 'Pionero', emoji: '🧭' },
  { min: 15, nombre: 'Aventurero', emoji: '🚀' },
  { min: 30, nombre: 'Polímata', emoji: '🌟' },
];

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

  let itemsGrado = 0;
  let itemsOtros = 0;
  let xpGrado = 0;
  let xpExploracion = 0;

  for (const k of Object.keys(e.guias)) {
    const g = gradoDeKey(k);
    if (g == null) continue;
    if (ga != null && g === ga) {
      itemsGrado++;
      xpGrado += XP_GUIA_GRADO;
    } else {
      itemsOtros++;
      xpExploracion += XP_GUIA_OTRO;
    }
  }
  for (const k of Object.keys(e.proyectos)) {
    const g = gradoDeKey(k);
    if (g == null) continue;
    if (ga != null && g === ga) {
      itemsGrado++;
      xpGrado += XP_PROYECTO_GRADO;
    } else {
      itemsOtros++;
      xpExploracion += XP_PROYECTO_OTRO;
    }
  }

  const porcentaje =
    ga != null
      ? Math.min(100, Math.round((itemsGrado / TOTAL_ITEMS_GRADO) * 100))
      : 0;
  const nivel =
    NIVELES_GRADO.find((n) => itemsGrado >= n.min && itemsGrado <= n.max) ??
    NIVELES_GRADO[0];
  const insigniasGanadas = INSIGNIAS_EXPLORACION.filter(
    (i) => itemsOtros >= i.min,
  );
  const proximaInsignia =
    INSIGNIAS_EXPLORACION.find((i) => itemsOtros < i.min) ?? null;

  return {
    gradoActual: ga,
    itemsGrado,
    itemsOtros,
    porcentajeGrado: porcentaje,
    nivel,
    insigniasGanadas,
    proximaInsignia,
    xpGrado,
    xpExploracion,
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
