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

// ─── PR-2: Cortes por grado y periodo ────────────────────────────────────────

export interface ResumenGrado {
  grado: number;
  aulas: number;
  estudiantes: number;
  guiasCompletadas: number;
  progresoPromedio: number;
  quizIntentos: number;
  quizPromedio: number | null;
  activos30d: number;
}

export interface ResumenPeriodo {
  periodo: number;
  aulas: number;
  estudiantes: number;
  guiasCompletadas: number;
  progresoPromedio: number;
  quizIntentos: number;
  quizPromedio: number | null;
}

export interface CoberturaGuia {
  guiaClave: string;
  grado: number;
  periodo: number;
  sesion: number;
  conProgreso: number;
  completadas: number;
  progresoPromedio: number;
}

export interface DesempenoExamen {
  quizId: string;
  guiaClave: string;
  totalIntentos: number;
  promedio: number | null;
  aprobados: number;
  p25: number | null;
  p50: number | null;
  p75: number | null;
}

/** KPIs agrupados por grado (comparativa entre grados del docente). */
export async function getResumenPorGrado(ano?: number): Promise<ResumenGrado[]> {
  if (!authEnabled) return [];
  const { data, error } = await supabase.rpc(
    'resumen_por_grado',
    ano != null ? { _ano: ano } : {}
  );
  if (error) {
    console.error('[informes] resumen_por_grado:', error);
    return [];
  }
  return (data ?? []).map((r) => ({
    grado: r.grado,
    aulas: r.aulas,
    estudiantes: r.estudiantes,
    guiasCompletadas: r.guias_completadas,
    progresoPromedio: num(r.progreso_promedio),
    quizIntentos: r.quiz_intentos,
    quizPromedio: r.quiz_promedio == null ? null : num(r.quiz_promedio),
    activos30d: r.activos_30d,
  }));
}

/** KPIs agrupados por periodo (comparativa entre periodos; filtra por grado opcional). */
export async function getResumenPorPeriodo(
  ano?: number,
  grado?: number
): Promise<ResumenPeriodo[]> {
  if (!authEnabled) return [];
  const args: Record<string, unknown> = {};
  if (ano != null) args._ano = ano;
  if (grado != null) args._grado = grado;
  const { data, error } = await supabase.rpc('resumen_por_periodo', args);
  if (error) {
    console.error('[informes] resumen_por_periodo:', error);
    return [];
  }
  return (data ?? []).map((r) => ({
    periodo: r.periodo,
    aulas: r.aulas,
    estudiantes: r.estudiantes,
    guiasCompletadas: r.guias_completadas,
    progresoPromedio: num(r.progreso_promedio),
    quizIntentos: r.quiz_intentos,
    quizPromedio: r.quiz_promedio == null ? null : num(r.quiz_promedio),
  }));
}

/** Cobertura de guías (heatmap: qué guías trabajaron los estudiantes del docente). */
export async function getCoberturaGuias(
  ano?: number,
  grado?: number
): Promise<CoberturaGuia[]> {
  if (!authEnabled) return [];
  const args: Record<string, unknown> = {};
  if (ano != null) args._ano = ano;
  if (grado != null) args._grado = grado;
  const { data, error } = await supabase.rpc('cobertura_guias', args);
  if (error) {
    console.error('[informes] cobertura_guias:', error);
    return [];
  }
  return (data ?? []).map((r) => ({
    guiaClave: r.guia_clave,
    grado: r.grado,
    periodo: r.periodo,
    sesion: r.sesion,
    conProgreso: r.con_progreso,
    completadas: r.completadas,
    progresoPromedio: num(r.progreso_promedio),
  }));
}

/** Estadísticas por quiz_id (promedio, percentiles, aprobados ≥ 60). */
export async function getDesempenoExamenes(
  ano?: number,
  grado?: number
): Promise<DesempenoExamen[]> {
  if (!authEnabled) return [];
  const args: Record<string, unknown> = {};
  if (ano != null) args._ano = ano;
  if (grado != null) args._grado = grado;
  const { data, error } = await supabase.rpc('desempeno_examenes', args);
  if (error) {
    console.error('[informes] desempeno_examenes:', error);
    return [];
  }
  return (data ?? []).map((r) => ({
    quizId: r.quiz_id,
    guiaClave: r.guia_clave,
    totalIntentos: r.total_intentos,
    promedio: r.promedio == null ? null : num(r.promedio),
    aprobados: r.aprobados,
    p25: r.p25 == null ? null : num(r.p25),
    p50: r.p50 == null ? null : num(r.p50),
    p75: r.p75 == null ? null : num(r.p75),
  }));
}

// ─── PR-3: Cumplimiento y resumen anual ──────────────────────────────────────

export interface ArcoTipo {
  tipo: string;
  conteo: number;
}

export interface CumplimientoResumen {
  firmados: number;
  revocados: number;
  auto: number;
  acudiente: number;
  tasaConsentimiento: number;
  arcoTotal: number;
  arcoPorTipo: ArcoTipo[];
}

/** Consentimientos y eventos ARCO del docente (acotado a un año si se pasa). */
export async function getCumplimientoResumen(ano?: number): Promise<CumplimientoResumen | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase.rpc(
    'cumplimiento_resumen',
    ano != null ? { _ano: ano } : {}
  );
  if (error) {
    console.error('[informes] cumplimiento_resumen:', error);
    return null;
  }
  const r = (data ?? {}) as Record<string, unknown>;
  return {
    firmados: num(r.firmados),
    revocados: num(r.revocados),
    auto: num(r.auto),
    acudiente: num(r.acudiente),
    tasaConsentimiento: num(r.tasa_consentimiento),
    arcoTotal: num(r.arco_total),
    arcoPorTipo: Array.isArray(r.arco_por_tipo)
      ? (r.arco_por_tipo as ArcoTipo[])
      : [],
  };
}

// ─── PR-4: Informe individual del estudiante ─────────────────────────────────

export interface AulaResumen {
  id: string;
  grado: number;
  periodo: number;
  ano: number;
  nombre: string | null;
  codigo: string;
}

export interface ProgresoGuiaItem {
  guiaClave: string;
  porcentaje: number;
  ultimaEstacion: string | null;
  completadaEn: string | null;
  actualizadoEn: string;
}

export interface IntentoQuizItem {
  quizId: string;
  guiaClave: string;
  puntaje: number | null;
  duracionSeg: number | null;
  realizadoEn: string;
}

export interface ProgresoProyectoItem {
  grado: number;
  periodo: number;
  completado: boolean;
  completadoEn: string | null;
}

export interface ConsentimientoResumen {
  vigente: boolean;
  firmadoEn: string | null;
  revocadoEn: string | null;
  anoLectivo: number | null;
}

export interface InformeEstudiante {
  autorizado: boolean;
  displayName: string;
  grado: number;
  aulas: AulaResumen[];
  guias: ProgresoGuiaItem[];
  examenes: IntentoQuizItem[];
  proyectos: ProgresoProyectoItem[];
  consentimiento: ConsentimientoResumen | null;
  ultimaActividad: string | null;
}

/**
 * Informe completo de un estudiante (solo accesible si es alumno del docente).
 * Devuelve null si no autorizado o error; chequear `.autorizado` para distinguir.
 */
export async function getInformeEstudiante(
  estudianteId: string
): Promise<InformeEstudiante | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase.rpc('informe_estudiante', {
    _estudiante_id: estudianteId,
  });
  if (error) {
    console.error('[informes] informe_estudiante:', error);
    return null;
  }
  const r = (data ?? {}) as Record<string, unknown>;
  if (!r.autorizado) return { autorizado: false } as InformeEstudiante;

  return {
    autorizado: true,
    displayName: String(r.display_name ?? ''),
    grado: num(r.grado),
    aulas: (Array.isArray(r.aulas) ? r.aulas : []).map((a) => ({
      id: a.id,
      grado: a.grado,
      periodo: a.periodo,
      ano: a.ano,
      nombre: a.nombre ?? null,
      codigo: a.codigo,
    })),
    guias: (Array.isArray(r.guias) ? r.guias : []).map((g) => ({
      guiaClave: g.guia_clave,
      porcentaje: num(g.porcentaje),
      ultimaEstacion: g.ultima_estacion ?? null,
      completadaEn: g.completada_en ?? null,
      actualizadoEn: g.actualizado_en,
    })),
    examenes: (Array.isArray(r.examenes) ? r.examenes : []).map((e) => ({
      quizId: e.quiz_id,
      guiaClave: e.guia_clave,
      puntaje: e.puntaje == null ? null : num(e.puntaje),
      duracionSeg: e.duracion_seg == null ? null : num(e.duracion_seg),
      realizadoEn: e.realizado_en,
    })),
    proyectos: (Array.isArray(r.proyectos) ? r.proyectos : []).map((p) => ({
      grado: p.grado,
      periodo: p.periodo,
      completado: Boolean(p.completado),
      completadoEn: p.completado_en ?? null,
    })),
    consentimiento: r.consentimiento
      ? {
          vigente: Boolean((r.consentimiento as Record<string, unknown>).vigente),
          firmadoEn: ((r.consentimiento as Record<string, unknown>).firmado_en as string | null) ?? null,
          revocadoEn: ((r.consentimiento as Record<string, unknown>).revocado_en as string | null) ?? null,
          anoLectivo: (r.consentimiento as Record<string, unknown>).ano_lectivo == null
            ? null
            : num((r.consentimiento as Record<string, unknown>).ano_lectivo),
        }
      : null,
    ultimaActividad: (r.ultima_actividad as string | null) ?? null,
  };
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
