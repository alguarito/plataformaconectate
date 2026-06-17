/**
 * Helpers para CRUD de aulas (Fase 2b).
 *
 * Todas las funciones requieren sesión activa (RLS bloquea sin auth).
 * El docente solo ve/edita sus propias aulas gracias a las policies
 * en db/policies.sql.
 */

import { supabase, authEnabled } from './supabase';
import type { Database } from './database.types';
import { calcularGamificacion } from './gamificacion';

export type Aula = Database['public']['Tables']['aulas']['Row'];
export type AulaInsert = Database['public']['Tables']['aulas']['Insert'];

const GRADOS_VALIDOS = [6, 7, 8, 9, 10, 11] as const;
const PERIODOS_VALIDOS = [1, 2, 3] as const;

export type GradoValido = (typeof GRADOS_VALIDOS)[number];
export type PeriodoValido = (typeof PERIODOS_VALIDOS)[number];

export const GRADOS = GRADOS_VALIDOS;
export const PERIODOS = PERIODOS_VALIDOS;

/**
 * Genera un código de acceso legible para el aula.
 *
 * Formato: <PREFIJO>-<GRADO><LETRA>-<ANO>-<RAND>
 *   ej: AULA-6A-2026-K3X7
 *
 * Razones:
 * - Legible al dictarlo en clase (sin caracteres ambiguos 0/O 1/I)
 * - Único razonable (4 chars random = 65 536 combinaciones)
 * - Sufijo letra opcional para distinguir aulas paralelas en el mismo grado
 */
export function generarCodigoAcceso(
  grado: GradoValido,
  ano: number,
  letra: string = 'A'
): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // sin 0,O,1,I,L
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars[Math.floor(Math.random() * chars.length)];
  }
  return `AULA-${grado}${letra.toUpperCase()}-${ano}-${rand}`;
}

/**
 * Lista las aulas del docente autenticado.
 * RLS garantiza que solo se ven las propias.
 */
export async function listarAulas(): Promise<Aula[]> {
  if (!authEnabled) return [];
  const { data, error } = await supabase
    .from('aulas')
    .select('*')
    .order('ano', { ascending: false })
    .order('grado', { ascending: true })
    .order('periodo', { ascending: true });
  if (error) {
    console.error('[aulas] listarAulas falló:', error);
    throw error;
  }
  return data ?? [];
}

/**
 * Obtiene una aula por id. Devuelve null si no existe o el usuario no
 * tiene acceso (RLS bloquea).
 */
export async function getAulaById(id: string): Promise<Aula | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase
    .from('aulas')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) {
    console.error('[aulas] getAulaById falló:', error);
    return null;
  }
  return data;
}

/**
 * Crea un aula nueva para el docente autenticado.
 *
 * El docente_id se infiere de auth.uid() — RLS rechaza si intenta crear
 * para otro docente.
 */
export async function crearAula(input: {
  grado: GradoValido;
  periodo: PeriodoValido;
  ano: number;
  nombre?: string;
  letra?: string;
}): Promise<Aula> {
  if (!authEnabled) {
    throw new Error('Auth deshabilitada');
  }
  const { data: sesion } = await supabase.auth.getUser();
  if (!sesion.user) {
    throw new Error('No hay sesión activa');
  }

  const codigo = generarCodigoAcceso(input.grado, input.ano, input.letra);
  const nuevoAula: AulaInsert = {
    docente_id: sesion.user.id,
    grado: input.grado,
    periodo: input.periodo,
    ano: input.ano,
    codigo_acceso: codigo,
    nombre: input.nombre ?? null,
  };

  const { data, error } = await supabase
    .from('aulas')
    .insert(nuevoAula)
    .select()
    .single();
  if (error) {
    console.error('[aulas] crearAula falló:', error);
    throw error;
  }

  // El docente también queda como teacher en enrollments del aula creada.
  // Esto facilita las queries posteriores (los enrollments son fuente única
  // de verdad sobre quién está en cada aula).
  await supabase.from('enrollments').insert({
    usuario_id: sesion.user.id,
    aula_id: data.id,
    rol: 'teacher',
  });

  return data;
}

/**
 * Elimina un aula. La eliminación es en cascada (enrollments, progreso,
 * intentos_quiz se borran automáticamente por el ON DELETE CASCADE).
 *
 * RLS solo permite borrar aulas propias.
 */
export async function eliminarAula(id: string): Promise<void> {
  if (!authEnabled) return;
  const { error } = await supabase.from('aulas').delete().eq('id', id);
  if (error) {
    console.error('[aulas] eliminarAula falló:', error);
    throw error;
  }
}

/**
 * Cuenta los estudiantes inscritos en un aula.
 */
export async function contarEstudiantes(aulaId: string): Promise<number> {
  if (!authEnabled) return 0;
  const { count, error } = await supabase
    .from('enrollments')
    .select('*', { count: 'exact', head: true })
    .eq('aula_id', aulaId)
    .eq('rol', 'student');
  if (error) {
    console.error('[aulas] contarEstudiantes falló:', error);
    return 0;
  }
  return count ?? 0;
}

/**
 * Formatea el "periodo" para mostrar (1 → "Primer", 2 → "Segundo", 3 → "Tercer").
 */
export function periodoLabel(periodo: PeriodoValido): string {
  return ['Primer', 'Segundo', 'Tercer'][periodo - 1] + ' periodo';
}

export type EstudianteConProgreso = {
  id: string;
  display_name: string;
  fecha_nacimiento: string | null;
  inscrito_en: string;
  guias_iniciadas: number;
  guias_completadas: number;
  progreso_promedio: number;
  // Exámenes (intentos_quiz)
  quizzes_intentos: number;
  /** Promedio de puntaje (0-100) de los intentos calificados; null si no hay. */
  quiz_promedio: number | null;
  // Gamificación derivada con la MISMA fórmula que ve el estudiante.
  xp_total: number;
  nivel_nombre: string;
  nivel_emoji: string;
  insignias_ganadas: number;
};

/** Extrae el grado de una guia_clave con formato '{grado}-{periodo}-{sesion}'. */
function gradoDeGuiaClave(clave: string): number | null {
  const m = clave.match(/^(\d+)-/);
  return m ? parseInt(m[1], 10) : null;
}

/**
 * Lista los estudiantes de un aula con su progreso, desempeño en exámenes y
 * gamificación agregada. Requiere que el caller sea el docente del aula
 * (RLS garantiza esto).
 *
 * `gradoAula` se usa como referencia de «mi grado» para la gamificación:
 * lo completado de ese grado suma al nivel; lo de otros grados, a las
 * insignias de exploración (igual criterio que el progreso del estudiante).
 */
export async function listarEstudiantesConProgreso(
  aulaId: string,
  gradoAula: number
): Promise<EstudianteConProgreso[]> {
  if (!authEnabled) return [];

  const { data: enrolls, error: errE } = await supabase
    .from('enrollments')
    .select('creado_en, usuario_id, usuarios(id, display_name, fecha_nacimiento)')
    .eq('aula_id', aulaId)
    .eq('rol', 'student')
    .order('creado_en', { ascending: true });

  if (errE) throw errE;
  if (!enrolls || enrolls.length === 0) return [];

  const ids = enrolls.map((e) => e.usuario_id);

  // Guías, intentos de quiz y proyectos de todos los estudiantes en paralelo.
  const [progRes, quizRes, proyRes] = await Promise.all([
    supabase
      .from('progreso_guia')
      .select('estudiante_id, guia_clave, porcentaje, completada_en')
      .in('estudiante_id', ids),
    supabase
      .from('intentos_quiz')
      .select('estudiante_id, puntaje')
      .in('estudiante_id', ids),
    supabase
      .from('progreso_proyecto')
      .select('estudiante_id, grado')
      .in('estudiante_id', ids),
  ]);

  type Acumulado = {
    iniciadas: number;
    completadas: number;
    pct: number[];
    guiasGrado: number;
    guiasOtro: number;
    proyectosGrado: number;
    proyectosOtro: number;
    quizPuntajes: number[];
    quizIntentos: number;
  };
  const nuevo = (): Acumulado => ({
    iniciadas: 0,
    completadas: 0,
    pct: [],
    guiasGrado: 0,
    guiasOtro: 0,
    proyectosGrado: 0,
    proyectosOtro: 0,
    quizPuntajes: [],
    quizIntentos: 0,
  });
  const acc = new Map<string, Acumulado>();
  const obtener = (id: string): Acumulado => {
    let a = acc.get(id);
    if (!a) {
      a = nuevo();
      acc.set(id, a);
    }
    return a;
  };

  for (const p of progRes.data ?? []) {
    const a = obtener(p.estudiante_id);
    a.iniciadas++;
    a.pct.push(p.porcentaje ?? 0);
    if (p.completada_en) {
      a.completadas++;
      const g = gradoDeGuiaClave(p.guia_clave);
      if (g === gradoAula) a.guiasGrado++;
      else a.guiasOtro++;
    }
  }
  for (const q of quizRes.data ?? []) {
    const a = obtener(q.estudiante_id);
    a.quizIntentos++;
    if (q.puntaje != null) a.quizPuntajes.push(q.puntaje);
  }
  for (const pr of proyRes.data ?? []) {
    const a = obtener(pr.estudiante_id);
    if (pr.grado === gradoAula) a.proyectosGrado++;
    else a.proyectosOtro++;
  }

  return enrolls.map((e) => {
    const u = e.usuarios as {
      id: string;
      display_name: string;
      fecha_nacimiento: string | null;
    };
    const a = acc.get(e.usuario_id) ?? nuevo();
    const promedio =
      a.pct.length > 0
        ? Math.round(a.pct.reduce((x, y) => x + y, 0) / a.pct.length)
        : 0;
    const quizPromedio =
      a.quizPuntajes.length > 0
        ? Math.round(a.quizPuntajes.reduce((x, y) => x + y, 0) / a.quizPuntajes.length)
        : null;
    const gam = calcularGamificacion({
      guiasGrado: a.guiasGrado,
      guiasOtro: a.guiasOtro,
      proyectosGrado: a.proyectosGrado,
      proyectosOtro: a.proyectosOtro,
    });
    return {
      id: u.id,
      display_name: u.display_name,
      fecha_nacimiento: u.fecha_nacimiento ?? null,
      inscrito_en: e.creado_en,
      guias_iniciadas: a.iniciadas,
      guias_completadas: a.completadas,
      progreso_promedio: promedio,
      quizzes_intentos: a.quizIntentos,
      quiz_promedio: quizPromedio,
      xp_total: gam.xpGrado + gam.xpExploracion,
      nivel_nombre: gam.nivel.nombre,
      nivel_emoji: gam.nivel.emoji,
      insignias_ganadas: gam.insigniasGanadas.length,
    };
  });
}
