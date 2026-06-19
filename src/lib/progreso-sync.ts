/**
 * Sync bidireccional localStorage ↔ Supabase para el sistema de progreso.
 *
 * Reglas de diseño:
 *
 * 1. **Offline-first preservado**: localStorage sigue siendo la fuente de
 *    verdad en runtime. Cada mutación escribe primero a localStorage; si hay
 *    sesión activa, también se sube a BD en background (fire-and-forget).
 *
 * 2. **Compatibilidad con invitados**: usuarios sin sesión NO sufren ningún
 *    cambio de comportamiento. Las funciones del sync simplemente retornan
 *    temprano cuando authEnabled=false o no hay sesión.
 *
 * 3. **Migración silenciosa al login**: cuando un invitado se registra,
 *    `migrarLocalABD()` sube todo lo acumulado en localStorage a BD para que
 *    no pierda su progreso histórico.
 *
 * 4. **Hidratación al login**: `cargarDesdeBD()` trae todo el progreso del
 *    estudiante y lo fusiona con localStorage (la fusión gana el más reciente
 *    por timestamp). Útil para multi-dispositivo.
 *
 * 5. **Cola offline**: si una escritura a BD falla por red, se reintenta
 *    al próximo cambio de sesión o cuando vuelva la conexión.
 *
 * Las claves de localStorage usan formato 'g{N}-p{N}-s{N}' / 'g{N}-p{N}'.
 * La BD usa columnas separadas grado/periodo/sesion. El parseo vive aquí.
 */

import { supabase, authEnabled } from './supabase';
import type { EstadoProgreso } from '../scripts/progreso';

const COLA_KEY = 'conectate.progreso.sync.cola.v1';

interface OperacionPendiente {
  tipo: 'guia_upsert' | 'guia_delete' | 'proyecto_upsert' | 'proyecto_delete';
  grado: number;
  periodo: number;
  sesion?: number;
  ts: number;
}

/* ─────────── Helpers de parseo claves ↔ columnas ─────────── */

function parsearGuiaKey(k: string): { grado: number; periodo: number; sesion: number } | null {
  const m = k.match(/^g(\d+)-p(\d+)-s(\d+)$/);
  if (!m) return null;
  return {
    grado: parseInt(m[1], 10),
    periodo: parseInt(m[2], 10),
    sesion: parseInt(m[3], 10),
  };
}

function parsearProyectoKey(k: string): { grado: number; periodo: number } | null {
  const m = k.match(/^g(\d+)-p(\d+)$/);
  if (!m) return null;
  return {
    grado: parseInt(m[1], 10),
    periodo: parseInt(m[2], 10),
  };
}

function formatoGuiaClaveBD(grado: number, periodo: number, sesion: number): string {
  // Convención BD: '{grado}-{periodo}-{sesion}' (sin prefijos g/p/s)
  return `${grado}-${periodo}-${sesion}`;
}

/* ─────────── Detección de sesión ─────────── */

async function hayUsuario(): Promise<string | null> {
  if (!authEnabled) return null;
  const { data } = await supabase.auth.getSession();
  return data.session?.user.id ?? null;
}

/* ─────────── Cola offline ─────────── */

function leerCola(): OperacionPendiente[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(COLA_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function escribirCola(cola: OperacionPendiente[]): void {
  if (typeof localStorage === 'undefined') return;
  if (cola.length === 0) {
    localStorage.removeItem(COLA_KEY);
    return;
  }
  localStorage.setItem(COLA_KEY, JSON.stringify(cola));
}

function encolar(op: OperacionPendiente): void {
  const cola = leerCola();
  cola.push(op);
  escribirCola(cola);
}

/* ─────────── Sync individual (llamada desde progreso.ts hooks) ─────────── */

/**
 * Sube un cambio individual de guía a BD. Fire-and-forget: si falla, encola
 * para reintento posterior.
 */
export async function syncGuia(
  grado: number,
  periodo: number,
  sesion: number,
  completar: boolean,
): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  const guia_clave = formatoGuiaClaveBD(grado, periodo, sesion);

  try {
    if (completar) {
      const { error } = await supabase.from('progreso_guia').upsert(
        {
          estudiante_id: usuarioId,
          guia_clave,
          porcentaje: 100,
          completada_en: new Date().toISOString(),
        },
        { onConflict: 'estudiante_id,guia_clave' },
      );
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('progreso_guia')
        .delete()
        .eq('estudiante_id', usuarioId)
        .eq('guia_clave', guia_clave);
      if (error) throw error;
    }
  } catch (err) {
    console.warn('[progreso-sync] guia falló, encolando:', err);
    encolar({
      tipo: completar ? 'guia_upsert' : 'guia_delete',
      grado,
      periodo,
      sesion,
      ts: Date.now(),
    });
  }
}

/**
 * Sube un cambio individual de proyecto a BD. Fire-and-forget.
 */
export async function syncProyecto(
  grado: number,
  periodo: number,
  completar: boolean,
): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  try {
    if (completar) {
      const { error } = await supabase.from('progreso_proyecto').upsert(
        {
          estudiante_id: usuarioId,
          grado,
          periodo,
          completada_en: new Date().toISOString(),
        },
        { onConflict: 'estudiante_id,grado,periodo' },
      );
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('progreso_proyecto')
        .delete()
        .eq('estudiante_id', usuarioId)
        .eq('grado', grado)
        .eq('periodo', periodo);
      if (error) throw error;
    }
  } catch (err) {
    console.warn('[progreso-sync] proyecto falló, encolando:', err);
    encolar({
      tipo: completar ? 'proyecto_upsert' : 'proyecto_delete',
      grado,
      periodo,
      ts: Date.now(),
    });
  }
}

/* ─────────── Sync individual de quiz ─────────── */

/**
 * Persiste un intento de quiz en BD. No hay equivalente en localStorage
 * (los intentos no se guardan localmente). Solo se llama cuando hay sesión.
 */
export async function syncIntentoQuiz(input: {
  guiaClave: string; // formato '{grado}-{periodo}-{sesion}'
  quizId: string;
  respuestas: unknown;
  puntaje?: number;
  duracionSeg?: number;
}): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  try {
    const { error } = await supabase.from('intentos_quiz').insert({
      estudiante_id: usuarioId,
      guia_clave: input.guiaClave,
      quiz_id: input.quizId,
      respuestas: input.respuestas as never,
      puntaje: input.puntaje ?? null,
      duracion_seg: input.duracionSeg ?? null,
    });
    if (error) throw error;
  } catch (err) {
    console.warn('[progreso-sync] intento quiz falló:', err);
    // Los intentos no se encolan: muy probables de cambiar al reintentar
    // y la falla es informativa, no crítica.
  }
}

/* ─────────── Migración localStorage → BD al primer login ─────────── */

/**
 * Sube TODO el estado de localStorage a BD. Se llama una sola vez al
 * primer login (después de loguearse con Google o auto-firma) para que
 * el progreso acumulado como invitado no se pierda.
 */
export async function migrarLocalABD(estadoLocal: EstadoProgreso): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  const guiasUpsert: Array<{
    estudiante_id: string;
    guia_clave: string;
    porcentaje: number;
    completada_en: string;
  }> = [];
  const proyectosUpsert: Array<{
    estudiante_id: string;
    grado: number;
    periodo: number;
    completada_en: string;
  }> = [];

  for (const [k, v] of Object.entries(estadoLocal.guias)) {
    const p = parsearGuiaKey(k);
    if (!p) continue;
    guiasUpsert.push({
      estudiante_id: usuarioId,
      guia_clave: formatoGuiaClaveBD(p.grado, p.periodo, p.sesion),
      porcentaje: 100,
      completada_en: new Date(v.ts).toISOString(),
    });
  }
  for (const [k, v] of Object.entries(estadoLocal.proyectos)) {
    const p = parsearProyectoKey(k);
    if (!p) continue;
    proyectosUpsert.push({
      estudiante_id: usuarioId,
      grado: p.grado,
      periodo: p.periodo,
      completada_en: new Date(v.ts).toISOString(),
    });
  }

  if (guiasUpsert.length > 0) {
    const { error } = await supabase
      .from('progreso_guia')
      .upsert(guiasUpsert, { onConflict: 'estudiante_id,guia_clave' });
    if (error) console.warn('[progreso-sync] migrar guias falló:', error);
  }
  if (proyectosUpsert.length > 0) {
    const { error } = await supabase
      .from('progreso_proyecto')
      .upsert(proyectosUpsert, { onConflict: 'estudiante_id,grado,periodo' });
    if (error) console.warn('[progreso-sync] migrar proyectos falló:', error);
  }
}

/* ─────────── Hidratación BD → localStorage al login ─────────── */

/**
 * Trae todo el progreso desde BD y devuelve un EstadoProgreso fusionable
 * con el local. El caller decide cómo fusionar (en general: tomar siempre
 * lo más reciente por timestamp).
 */
export async function cargarDesdeBD(): Promise<EstadoProgreso | null> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return null;

  const [guiasRes, proyectosRes] = await Promise.all([
    supabase
      .from('progreso_guia')
      .select('guia_clave, completada_en')
      .eq('estudiante_id', usuarioId),
    supabase
      .from('progreso_proyecto')
      .select('grado, periodo, completada_en')
      .eq('estudiante_id', usuarioId),
  ]);

  if (guiasRes.error) {
    console.warn('[progreso-sync] cargar guias falló:', guiasRes.error);
    return null;
  }
  if (proyectosRes.error) {
    console.warn('[progreso-sync] cargar proyectos falló:', proyectosRes.error);
    return null;
  }

  const guias: Record<string, { ts: number }> = {};
  for (const row of guiasRes.data ?? []) {
    const m = (row.guia_clave as string).match(/^(\d+)-(\d+)-(\d+)$/);
    if (!m) continue;
    const k = `g${m[1]}-p${m[2]}-s${m[3]}`;
    const ts = row.completada_en ? new Date(row.completada_en).getTime() : Date.now();
    guias[k] = { ts };
  }

  const proyectos: Record<string, { ts: number }> = {};
  for (const row of proyectosRes.data ?? []) {
    const k = `g${row.grado}-p${row.periodo}`;
    const ts = row.completada_en ? new Date(row.completada_en).getTime() : Date.now();
    proyectos[k] = { ts };
  }

  return {
    version: 1,
    gradoActual: null, // BD no guarda gradoActual; se preserva el local
    guias,
    proyectos,
  };
}

/**
 * Fusiona estado local + estado de BD ganando el más reciente por timestamp.
 * Para `gradoActual` siempre se preserva el del local (no está en BD).
 */
export function fusionar(local: EstadoProgreso, remoto: EstadoProgreso): EstadoProgreso {
  const guias = { ...local.guias };
  for (const [k, v] of Object.entries(remoto.guias)) {
    if (!guias[k] || v.ts > guias[k].ts) guias[k] = v;
  }
  const proyectos = { ...local.proyectos };
  for (const [k, v] of Object.entries(remoto.proyectos)) {
    if (!proyectos[k] || v.ts > proyectos[k].ts) proyectos[k] = v;
  }
  return {
    version: 1,
    gradoActual: local.gradoActual,
    guias,
    proyectos,
  };
}

/* ─────────── Procesar cola offline al login ─────────── */

/**
 * Procesa la cola de operaciones pendientes (escritas en localStorage cuando
 * BD no estaba disponible). Se llama al login y al reconectar.
 */
export async function procesarCola(): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  const cola = leerCola();
  if (cola.length === 0) return;

  const nuevaCola: OperacionPendiente[] = [];
  for (const op of cola) {
    try {
      if (op.tipo === 'guia_upsert' && op.sesion !== undefined) {
        await syncGuia(op.grado, op.periodo, op.sesion, true);
      } else if (op.tipo === 'guia_delete' && op.sesion !== undefined) {
        await syncGuia(op.grado, op.periodo, op.sesion, false);
      } else if (op.tipo === 'proyecto_upsert') {
        await syncProyecto(op.grado, op.periodo, true);
      } else if (op.tipo === 'proyecto_delete') {
        await syncProyecto(op.grado, op.periodo, false);
      }
    } catch (err) {
      console.warn('[progreso-sync] procesar cola item falló, conserva:', op, err);
      nuevaCola.push(op);
    }
  }
  escribirCola(nuevaCola);
}

/* ─────────── Sync resultado TestRunner ─────────── */

/**
 * Persiste las respuestas de un TestRunner en BD. No hay localStorage de respaldo
 * (no cuenta en nota, es solo diagnóstico). Fire-and-forget.
 */
export async function syncResultadoTest(input: {
  testId: string;
  guiaClave?: string;
  respuestas: unknown;
}): Promise<void> {
  const usuarioId = await hayUsuario();
  if (!usuarioId) return;

  try {
    const { error } = await supabase.from('resultados_test').insert({
      estudiante_id: usuarioId,
      test_id: input.testId,
      guia_clave: input.guiaClave ?? null,
      respuestas: input.respuestas as never,
    });
    if (error) throw error;
  } catch (err) {
    console.warn('[progreso-sync] resultado test falló:', err);
  }
}

/* ─────────── Limpieza local (al logout) ─────────── */

const STORAGE_KEY_PROGRESO = 'conectate.progreso.v1';
const STORAGE_KEY_PERFIL = 'conectate.perfilUsuario.v1';

/**
 * Borra el progreso local y la cola offline. Se llama al cerrar sesión
 * para que el siguiente usuario no vea progreso ajeno.
 */
export function limpiarLocal(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_PROGRESO);
  localStorage.removeItem(STORAGE_KEY_PERFIL);
  localStorage.removeItem(COLA_KEY);
}
