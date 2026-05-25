/**
 * Helpers para CRUD de aulas (Fase 2b).
 *
 * Todas las funciones requieren sesión activa (RLS bloquea sin auth).
 * El docente solo ve/edita sus propias aulas gracias a las policies
 * en db/policies.sql.
 */

import { supabase, authEnabled } from './supabase';
import type { Database } from './database.types';

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
