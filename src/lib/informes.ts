/**
 * Capa de datos para el dashboard de informes del docente.
 *
 * Envuelve las RPCs de agregación (SECURITY DEFINER, scoping por auth.uid())
 * definidas en supabase/migrations/20260617000000_informes_agregacion.sql y
 * mapea sus resultados snake_case a interfaces camelCase para la UI.
 *
 * Las RPCs agregadas NO devuelven nombres (vista institucional anónima); solo
 * `estudiantes_en_riesgo` expone display_name (vista accionable del docente).
 *
 * Para el informe individual y el detalle de aula se reutiliza la agregación
 * client-side de ./aulas.ts + ./gamificacion.ts (no se duplica la fórmula).
 */

import { supabase, authEnabled } from './supabase';

export interface ResumenDocente {
  aulas: number;
  estudiantes: number;
  conConsentimiento: number;
  guiasIniciadas: number;
  guiasCompletadas: number;
  progresoPromedio: number;
  quizIntentos: number;
  quizPromedio: number | null;
  activos7d: number;
  activos30d: number;
  inactivos: number;
  enRiesgo: number;
}

export interface EmbudoRegistro {
  pendiente: number;
  firmado: number;
  expirado: number;
  rechazado: number;
  total: number;
  tasaConversion: number;
  auto: number;
  acudiente: number;
}

export interface PuntoSerie {
  periodoInicio: string;
  guiasActividad: number;
  quizIntentos: number;
  estudiantesActivos: number;
}

export interface EstudianteRiesgo {
  estudianteId: string;
  displayName: string;
  progresoPromedio: number;
  ultimaActividad: string | null;
  diasInactivo: number | null;
}

export interface AnoDisponible {
  ano: number;
  aulas: number;
}

/** Postgres devuelve `numeric` como string vía PostgREST; coacciona seguro. */
function num(v: unknown): number {
  const n = typeof v === 'string' ? parseFloat(v) : (v as number);
  return Number.isFinite(n) ? n : 0;
}

/** Años lectivos con aulas del docente (para poblar el selector). */
export async function getAnosDisponibles(): Promise<AnoDisponible[]> {
  if (!authEnabled) return [];
  const { data, error } = await supabase.rpc('anos_disponibles');
  if (error) {
    console.error('[informes] anos_disponibles:', error);
    return [];
  }
  return (data ?? []).map((a) => ({ ano: a.ano, aulas: a.aulas }));
}

/** KPIs globales del docente (opcionalmente acotado a un año lectivo). */
export async function getResumenDocente(ano?: number): Promise<ResumenDocente | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase.rpc(
    'resumen_docente',
    ano != null ? { _ano: ano } : {}
  );
  if (error) {
    console.error('[informes] resumen_docente:', error);
    return null;
  }
  const r = (data ?? {}) as Record<string, unknown>;
  return {
    aulas: num(r.aulas),
    estudiantes: num(r.estudiantes),
    conConsentimiento: num(r.con_consentimiento),
    guiasIniciadas: num(r.guias_iniciadas),
    guiasCompletadas: num(r.guias_completadas),
    progresoPromedio: num(r.progreso_promedio),
    quizIntentos: num(r.quiz_intentos),
    quizPromedio: r.quiz_promedio == null ? null : num(r.quiz_promedio),
    activos7d: num(r.activos_7d),
    activos30d: num(r.activos_30d),
    inactivos: num(r.inactivos),
    enRiesgo: num(r.en_riesgo),
  };
}

/** Embudo de registro (estados de registros_pendientes + tasa de conversión). */
export async function getEmbudoRegistro(ano?: number): Promise<EmbudoRegistro | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase.rpc(
    'embudo_registro',
    ano != null ? { _ano: ano } : {}
  );
  if (error) {
    console.error('[informes] embudo_registro:', error);
    return null;
  }
  const r = (data ?? {}) as Record<string, unknown>;
  return {
    pendiente: num(r.pendiente),
    firmado: num(r.firmado),
    expirado: num(r.expirado),
    rechazado: num(r.rechazado),
    total: num(r.total),
    tasaConversion: num(r.tasa_conversion),
    auto: num(r.auto),
    acudiente: num(r.acudiente),
  };
}

/** Serie temporal de actividad (guías + intentos de quiz) por semana o día. */
export async function getSerieActividad(
  desde: string,
  hasta: string,
  bucket: 'week' | 'day' = 'week',
  grado?: number
): Promise<PuntoSerie[]> {
  if (!authEnabled) return [];
  const args: Record<string, unknown> = { _desde: desde, _hasta: hasta, _bucket: bucket };
  if (grado != null) args._grado = grado;
  const { data, error } = await supabase.rpc('serie_actividad', args);
  if (error) {
    console.error('[informes] serie_actividad:', error);
    return [];
  }
  return (data ?? []).map((p) => ({
    periodoInicio: p.periodo_inicio,
    guiasActividad: p.guias_actividad,
    quizIntentos: p.quiz_intentos,
    estudiantesActivos: p.estudiantes_activos,
  }));
}

/** Estudiantes que necesitan atención (en riesgo o inactivos), con nombre. */
export async function getEstudiantesEnRiesgo(
  ano?: number,
  grado?: number
): Promise<EstudianteRiesgo[]> {
  if (!authEnabled) return [];
  const args: Record<string, unknown> = {};
  if (ano != null) args._ano = ano;
  if (grado != null) args._grado = grado;
  const { data, error } = await supabase.rpc('estudiantes_en_riesgo', args);
  if (error) {
    console.error('[informes] estudiantes_en_riesgo:', error);
    return [];
  }
  return (data ?? []).map((r) => ({
    estudianteId: r.estudiante_id,
    displayName: r.display_name,
    progresoPromedio: num(r.progreso_promedio),
    ultimaActividad: r.ultima_actividad,
    diasInactivo: r.dias_inactivo,
  }));
}
