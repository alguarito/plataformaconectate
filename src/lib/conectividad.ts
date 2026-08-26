/**
 * Censo de conectividad · I.E. Sor María Juliana (post-sismo 2026)
 *
 * Envoltura tipada de las tres funciones RPC que ya viven en la base de datos.
 * Las tablas `conectividad_estudiantes` y `conectividad_respuestas` tienen RLS
 * activo **sin políticas**: nadie lee ni escribe directamente. Todo el acceso
 * pasa por estas tres funciones `SECURITY DEFINER`, que son las únicas
 * otorgadas a `anon`:
 *
 *   · conectividad_grupos()                → los 64 grupos con su avance
 *   · conectividad_estudiantes_de_grupo()  → estudiantes de un grupo
 *   · conectividad_guardar()               → valida y guarda (upsert)
 *
 * La verificación de identidad la hace el servidor: `conectividad_guardar`
 * compara los últimos 4 dígitos del documento contra el estudiante elegido y
 * rechaza si no coinciden. Aquí no se valida identidad; solo se presenta.
 *
 * El padrón lo cargó el colegio (1.199 estudiantes, 5 sedes). Nada de lo que
 * hay aquí crea estudiantes: solo se registra su respuesta.
 */

import { supabase } from './supabase';

/**
 * `database.types.ts` se generó antes de que existieran estas RPC —el censo se
 * creó el 25 de agosto directamente sobre la base—, así que el cliente tipado
 * no las conoce. Se llaman por aquí, sin tipar, en vez de mentirle a TS con un
 * tipo que no existe. Cuando se regeneren los tipos (`supabase gen types`),
 * esto se puede borrar y usar `supabase.rpc` directamente.
 */
const rpc = supabase.rpc.bind(supabase) as (
  fn: string,
  args?: Record<string, unknown>
) => Promise<{ data: unknown; error: { message: string } | null }>;

// ─── Formas que devuelven las RPC ────────────────────────────────────────

export interface GrupoCenso {
  sede: string;
  jornada: string;
  grado: string;
  grupo: string;
  total: number;
  respondidos: number;
}

export interface EstudianteCenso {
  id: number;
  nombre: string;
  respondido: boolean;
}

export interface RespuestaCenso {
  internet: 'Fijo' | 'Datos móviles' | 'Ninguno';
  estabilidad: 'Estable' | 'Intermitente' | 'Sin servicio';
  dispositivo: 'Computador' | 'Tablet' | 'Celular' | 'Ninguno';
  uso: 'Exclusivo' | 'Compartido';
  comparte_n: number;
  vivienda: 'Sí' | 'No';
  albergue: 'Sí' | 'No';
  telefono?: string;
  observaciones?: string;
}

export interface ResultadoGuardar {
  ok: boolean;
  mensaje: string;
  nombre?: string;
}

// ─── Opciones (deben coincidir EXACTO con las que valida el servidor) ────
//
// `conectividad_guardar` rechaza cualquier valor fuera de estas listas. Si se
// cambian aquí sin cambiar la función, el formulario deja de guardar.

export const OPCIONES = {
  internet: ['Fijo', 'Datos móviles', 'Ninguno'],
  estabilidad: ['Estable', 'Intermitente', 'Sin servicio'],
  dispositivo: ['Computador', 'Tablet', 'Celular', 'Ninguno'],
  uso: ['Exclusivo', 'Compartido'],
  vivienda: ['Sí', 'No'],
  albergue: ['Sí', 'No'],
} as const;

// ─── Etiquetas legibles ──────────────────────────────────────────────────
//
// El padrón viene en códigos DANE: grado "00" es transición, "-1" es prejardín,
// y el grupo repite el grado ("0601" = grado 6, grupo 1).

export function etiquetaGrado(grado: string): string {
  const g = grado.trim();
  if (g === '-1') return 'Prejardín / Jardín';
  if (g === '00' || g === '0') return 'Transición';
  const n = Number(g);
  return Number.isFinite(n) ? `${n}.º` : g;
}

export function etiquetaGrupo(grupo: string): string {
  const g = grupo.trim();
  const n = Number(g.slice(-2));
  return Number.isFinite(n) && n > 0 ? `Grupo ${n}` : `Grupo ${g}`;
}

/** «SOR MARIA JULIANA» → «Sor María Juliana» no se puede adivinar; se deja el nombre tal cual, en caja de título. */
export function cajaTitulo(texto: string): string {
  return texto
    .toLocaleLowerCase('es-CO')
    .replace(/(^|\s|-)([\p{L}])/gu, (_m, sep, letra) => sep + letra.toLocaleUpperCase('es-CO'));
}

// ─── Llamadas ────────────────────────────────────────────────────────────

export async function cargarGrupos(): Promise<GrupoCenso[]> {
  const { data, error } = await rpc('conectividad_grupos');
  if (error) {
    console.error('[censo] conectividad_grupos:', error.message);
    return [];
  }
  return (data ?? []) as GrupoCenso[];
}

export async function cargarEstudiantes(g: {
  sede: string;
  jornada: string;
  grado: string;
  grupo: string;
}): Promise<EstudianteCenso[]> {
  const { data, error } = await rpc('conectividad_estudiantes_de_grupo', {
    p_sede: g.sede,
    p_jornada: g.jornada,
    p_grado: g.grado,
    p_grupo: g.grupo,
  });
  if (error) {
    console.error('[censo] conectividad_estudiantes_de_grupo:', error.message);
    return [];
  }
  return (data ?? []) as EstudianteCenso[];
}

export async function guardarRespuesta(
  estudianteId: number,
  doc4: string,
  r: RespuestaCenso
): Promise<ResultadoGuardar> {
  const { data, error } = await rpc('conectividad_guardar', {
    p_estudiante_id: estudianteId,
    p_doc4: doc4,
    p_internet: r.internet,
    p_estabilidad: r.estabilidad,
    p_dispositivo: r.dispositivo,
    p_uso: r.uso,
    p_comparte_n: r.comparte_n,
    p_vivienda: r.vivienda,
    p_albergue: r.albergue,
    p_telefono: r.telefono ?? null,
    p_observaciones: r.observaciones ?? null,
  });

  if (error) {
    console.error('[censo] conectividad_guardar:', error.message);
    return {
      ok: false,
      mensaje: 'No pudimos guardar en este momento. Revisa tu conexión e inténtalo otra vez.',
    };
  }
  return (data ?? { ok: false, mensaje: 'Respuesta vacía del servidor.' }) as ResultadoGuardar;
}

// ─── Derivados para la vista de avance ───────────────────────────────────

export interface AvanceSede {
  sede: string;
  total: number;
  respondidos: number;
  grupos: GrupoCenso[];
}

export function avancePorSede(grupos: GrupoCenso[]): AvanceSede[] {
  const mapa = new Map<string, AvanceSede>();
  for (const g of grupos) {
    const acc = mapa.get(g.sede) ?? { sede: g.sede, total: 0, respondidos: 0, grupos: [] };
    acc.total += Number(g.total);
    acc.respondidos += Number(g.respondidos);
    acc.grupos.push(g);
    mapa.set(g.sede, acc);
  }
  return [...mapa.values()].sort((a, b) => b.total - a.total);
}

export function porcentaje(respondidos: number, total: number): number {
  return total > 0 ? Math.round((respondidos / total) * 100) : 0;
}
