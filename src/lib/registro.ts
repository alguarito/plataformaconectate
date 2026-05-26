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
 * Calcula la edad en años cumplidos dado un YYYY-MM-DD.
 */
export function calcularEdad(fechaNacimientoISO: string, hoy: Date = new Date()): number {
  const nac = new Date(fechaNacimientoISO + 'T00:00:00');
  let edad = hoy.getFullYear() - nac.getFullYear();
  if (
    hoy.getMonth() < nac.getMonth() ||
    (hoy.getMonth() === nac.getMonth() && hoy.getDate() < nac.getDate())
  ) {
    edad--;
  }
  return edad;
}

/**
 * Umbral legal para auto-consentimiento.
 * Estándar internacional: 14 (Colombia proyecto 247/2025, Chile, Argentina).
 */
export const EDAD_AUTO_CONSENTIMIENTO = 14;

/**
 * ¿Este estudiante necesita firma del acudiente?
 */
export function requiereAcudiente(fechaNacimientoISO: string): boolean {
  return calcularEdad(fechaNacimientoISO) < EDAD_AUTO_CONSENTIMIENTO;
}

/**
 * Inicia el registro con firma del acudiente (estudiantes <14 años).
 */
export async function iniciarRegistroAcudiente(input: {
  codigoAula: string;
  estudianteDisplayName: string;
  estudianteFechaNacimiento: string;
  acudienteEmail: string;
}): Promise<{ registro_id: string }> {
  if (!authEnabled) throw new Error('Auth deshabilitada');

  const registroId = crypto.randomUUID();
  const { error: errIns } = await supabase.from('registros_pendientes').insert({
    id: registroId,
    codigo_aula: input.codigoAula.trim().toUpperCase(),
    estudiante_display_name: input.estudianteDisplayName.trim(),
    estudiante_fecha_nacimiento: input.estudianteFechaNacimiento,
    acudiente_email: input.acudienteEmail.trim().toLowerCase(),
    tipo_registro: 'acudiente',
  });

  if (errIns) {
    console.error('[registro] iniciarRegistroAcudiente:', errIns);
    throw new Error(errIns.message ?? 'No se pudo iniciar el registro');
  }

  const { error: errFn } = await supabase.functions.invoke('enviar-solicitud-firma', {
    body: { registro_id: registroId },
  });
  if (errFn) console.warn('[registro] enviar-solicitud-firma (no bloqueante):', errFn);

  return { registro_id: registroId };
}

/**
 * Inicia el registro con auto-firma (estudiantes ≥14 años).
 * Envía OTP de 6 dígitos al email del propio estudiante.
 */
export async function iniciarRegistroAuto(input: {
  codigoAula: string;
  estudianteDisplayName: string;
  estudianteFechaNacimiento: string;
  estudianteEmail: string;
}): Promise<{ registro_id: string }> {
  if (!authEnabled) throw new Error('Auth deshabilitada');

  if (requiereAcudiente(input.estudianteFechaNacimiento)) {
    throw new Error('Este flujo solo aplica para estudiantes ≥14 años');
  }

  const registroId = crypto.randomUUID();
  const email = input.estudianteEmail.trim().toLowerCase();
  const { error: errIns } = await supabase.from('registros_pendientes').insert({
    id: registroId,
    codigo_aula: input.codigoAula.trim().toUpperCase(),
    estudiante_display_name: input.estudianteDisplayName.trim(),
    estudiante_fecha_nacimiento: input.estudianteFechaNacimiento,
    acudiente_email: email, // mismo email; semánticamente es el contacto del registro
    estudiante_email: email,
    tipo_registro: 'auto',
  });

  if (errIns) {
    console.error('[registro] iniciarRegistroAuto:', errIns);
    throw new Error(errIns.message ?? 'No se pudo iniciar el registro');
  }

  const { data, error: errFn } = await supabase.functions.invoke('enviar-otp-estudiante', {
    body: { registro_id: registroId },
  });
  if (errFn || data?.ok === false) {
    console.error('[registro] enviar-otp-estudiante:', errFn ?? data);
    throw new Error(data?.error ?? 'No se pudo enviar el código de verificación');
  }

  return { registro_id: registroId };
}

/**
 * El estudiante ≥14 verifica su OTP y firma su propio consentimiento.
 */
export async function firmarAutoConsentimiento(input: {
  registroId: string;
  otp: string;
  declaraciones: string[];
  versionPolitica: string;
}): Promise<{ estudiante_id: string; codigo_pin: string }> {
  if (!authEnabled) throw new Error('Auth deshabilitada');

  const { data, error } = await supabase.functions.invoke('firmar-auto-consentimiento', {
    body: {
      registro_id: input.registroId,
      otp: input.otp.trim(),
      declaraciones: input.declaraciones,
      version_politica: input.versionPolitica,
      user_agent: navigator.userAgent,
    },
  });

  if (error) throw new Error(error.message ?? 'No se pudo firmar');
  if (!data || data.ok === false) throw new Error(data?.error ?? 'Error al firmar');

  return { estudiante_id: data.estudiante_id, codigo_pin: data.codigo_pin };
}

/**
 * Re-envía OTP al estudiante (si expiró o no llegó).
 */
export async function reenviarOtp(registroId: string): Promise<void> {
  if (!authEnabled) throw new Error('Auth deshabilitada');
  const { data, error } = await supabase.functions.invoke('enviar-otp-estudiante', {
    body: { registro_id: registroId },
  });
  if (error || data?.ok === false) {
    throw new Error(data?.error ?? error?.message ?? 'No se pudo reenviar el código');
  }
}

/**
 * @deprecated usar iniciarRegistroAcudiente o iniciarRegistroAuto explícitamente.
 * Mantenido por compatibilidad con código de PR-3a — equivale al flujo acudiente.
 */
export const iniciarRegistro = iniciarRegistroAcudiente;

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
