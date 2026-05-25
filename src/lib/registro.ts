/**
 * Helpers del flujo de registro de estudiantes.
 *
 * Tres operaciones principales:
 *   1. validarCodigoAula(codigo) — el estudiante ingresa el código de aula y
 *      verificamos que existe; devolvemos info del aula (grado, año, periodo).
 *   2. iniciarRegistro({codigo, ...}) — crea una fila en registros_pendientes
 *      y dispara la edge function que envía email al acudiente.
 *   3. firmarConsentimiento({registro_id, ...}) — el acudiente diligencia y
 *      llamamos a la edge function que valida y crea la cuenta.
 */

import { supabase, authEnabled } from './supabase';
import type { Database } from './database.types';

export type RegistroPendiente = Database['public']['Tables']['registros_pendientes']['Row'];

export interface InfoAulaPublica {
  /** Grado del aula (6-11) */
  grado: number;
  /** Periodo (1-3) */
  periodo: number;
  /** Año lectivo */
  ano: number;
  /** Nombre descriptivo (opcional) */
  nombre: string | null;
}

/**
 * Verifica que un código de aula es válido y devuelve datos PÚBLICOS del aula
 * (los necesarios para mostrar en la pantalla "estás a punto de registrarte en
 * Grado X, año Y..."). No expone el docente ni la lista de estudiantes.
 *
 * Para que esto funcione en RLS, agregamos una función SQL pública
 * `info_aula_por_codigo(text)` SECURITY DEFINER (ver migración 003).
 */
export async function validarCodigoAula(
  codigo: string
): Promise<InfoAulaPublica | null> {
  if (!authEnabled) return null;
  const codigoNormalizado = codigo.trim().toUpperCase();
  if (!codigoNormalizado) return null;

  const { data, error } = await supabase.rpc('info_aula_por_codigo', {
    _codigo: codigoNormalizado,
  });

  if (error) {
    console.error('[registro] validarCodigoAula:', error);
    return null;
  }
  if (!data || (Array.isArray(data) && data.length === 0)) return null;

  const aula = Array.isArray(data) ? data[0] : data;
  return {
    grado: aula.grado,
    periodo: aula.periodo,
    ano: aula.ano,
    nombre: aula.nombre ?? null,
  };
}

/**
 * Inicia el registro creando una fila en registros_pendientes y disparando
 * el envío del email al acudiente.
 *
 * Devuelve el id del registro pendiente para que el estudiante pueda hacer
 * polling del estado.
 */
export async function iniciarRegistro(input: {
  codigoAula: string;
  estudianteDisplayName: string;
  estudianteFechaNacimiento: string; // 'YYYY-MM-DD'
  acudienteEmail: string;
}): Promise<{ registro_id: string }> {
  if (!authEnabled) {
    throw new Error('Auth deshabilitada');
  }

  // 1. Insertar el registro pendiente (anon puede INSERT por policy)
  const { data: insertado, error: errIns } = await supabase
    .from('registros_pendientes')
    .insert({
      codigo_aula: input.codigoAula.trim().toUpperCase(),
      estudiante_display_name: input.estudianteDisplayName.trim(),
      estudiante_fecha_nacimiento: input.estudianteFechaNacimiento,
      acudiente_email: input.acudienteEmail.trim().toLowerCase(),
    })
    .select('id')
    .single();

  if (errIns || !insertado) {
    console.error('[registro] insertar pendiente:', errIns);
    throw new Error(errIns?.message ?? 'No se pudo iniciar el registro');
  }

  // 2. Disparar edge function enviar-solicitud-firma
  const { data, error: errFn } = await supabase.functions.invoke(
    'enviar-solicitud-firma',
    { body: { registro_id: insertado.id } }
  );

  if (errFn || data?.ok === false) {
    console.error('[registro] enviar-solicitud-firma:', errFn ?? data);
    // El registro queda pendiente; el docente puede re-disparar el email
    // desde el panel /docente (PR-3b). No bloqueamos al estudiante aquí.
  }

  return { registro_id: insertado.id };
}

/**
 * El acudiente envía la firma del consentimiento.
 *
 * Devuelve el codigo_pin que el docente le entregará al estudiante en clase
 * (el acudiente NO debería compartirlo con el estudiante; va al docente).
 */
export async function firmarConsentimiento(input: {
  registroId: string;
  acudienteNombre: string;
  acudienteCC: string;
  acudienteParentesco: 'padre' | 'madre' | 'tutor';
  finalidades: string[];
  versionPolitica: string;
}): Promise<{ estudiante_id: string; codigo_pin: string }> {
  if (!authEnabled) {
    throw new Error('Auth deshabilitada');
  }

  const { data, error } = await supabase.functions.invoke('firmar-consentimiento', {
    body: {
      registro_id: input.registroId,
      acudiente_nombre: input.acudienteNombre.trim(),
      acudiente_cc: input.acudienteCC.trim(),
      acudiente_parentesco: input.acudienteParentesco,
      finalidades: input.finalidades,
      version_politica: input.versionPolitica,
      user_agent: navigator.userAgent,
    },
  });

  if (error) {
    console.error('[registro] firmar-consentimiento error:', error);
    throw new Error(error.message ?? 'No se pudo firmar el consentimiento');
  }
  if (!data || data.ok === false) {
    throw new Error(data?.error ?? 'Error al firmar el consentimiento');
  }

  return { estudiante_id: data.estudiante_id, codigo_pin: data.codigo_pin };
}

/**
 * Polling del estado del registro pendiente (para que el estudiante vea
 * cuando el acudiente firma sin tener que recargar).
 *
 * NOTA: anon NO puede leer registros_pendientes (por privacidad). Esta
 * función SOLO funciona si el cliente ya tiene el id de su propio registro
 * y consulta via función SQL pública (ver migración 003).
 */
export async function estadoRegistro(
  registroId: string
): Promise<'pendiente' | 'firmado' | 'expirado' | 'rechazado' | null> {
  if (!authEnabled) return null;
  const { data, error } = await supabase.rpc('estado_registro_por_id', {
    _id: registroId,
  });
  if (error) {
    console.error('[registro] estadoRegistro:', error);
    return null;
  }
  return data ?? null;
}
