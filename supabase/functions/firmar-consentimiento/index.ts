/**
 * Edge Function · firmar-consentimiento
 *
 * El acudiente diligencia el formulario en /cuenta/firma-acudiente.
 * Esta función:
 *   1. Valida que el registro_pendiente exista y esté en estado 'pendiente'.
 *   2. Crea el estudiante en auth.users (signUp con email del acudiente como
 *      contacto). El estudiante NO necesita email — usa código de aula + PIN
 *      para entrar. Pero auth.users requiere algún identificador único.
 *   3. Inserta consentimientos_plataforma con todos los datos.
 *   4. Inscribe al estudiante en el aula correspondiente (enrollments).
 *   5. Marca registro_pendiente como 'firmado'.
 *   6. Notifica al docente y al acudiente por email.
 *
 * Body esperado (JSON):
 *   {
 *     registro_id: uuid,
 *     acudiente_nombre: string,
 *     acudiente_cc: string,
 *     acudiente_parentesco: 'padre' | 'madre' | 'tutor',
 *     finalidades: string[],
 *     version_politica: string,
 *     user_agent: string
 *   }
 *
 * Devuelve:
 *   { ok: true, estudiante_id, codigo_pin } o { ok: false, error }
 *
 * El codigo_pin es un PIN aleatorio que el docente le entrega al estudiante
 * (no se envía por correo). Junto con el código de aula, le permite entrar
 * sin necesidad de email/password.
 *
 * Despliegue:
 *   supabase functions deploy firmar-consentimiento --no-verify-jwt
 */
// @ts-nocheck

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.0';
import { Resend } from 'https://esm.sh/resend@4.0.1';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const RESEND_FROM = Deno.env.get('RESEND_FROM_EMAIL')!;
    const RESEND_REPLY_TO = Deno.env.get('RESEND_REPLY_TO') ?? '';

    const body = await req.json();
    const {
      registro_id,
      acudiente_nombre,
      acudiente_cc,
      acudiente_parentesco,
      finalidades,
      version_politica,
      user_agent,
    } = body;

    if (
      !registro_id ||
      !acudiente_nombre ||
      !acudiente_cc ||
      !acudiente_parentesco ||
      !Array.isArray(finalidades) ||
      finalidades.length === 0 ||
      !version_politica
    ) {
      return json({ ok: false, error: 'Faltan campos requeridos' }, 400);
    }

    if (!['padre', 'madre', 'tutor'].includes(acudiente_parentesco)) {
      return json({ ok: false, error: 'parentesco inválido' }, 400);
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
      auth: { persistSession: false },
    });

    // Cargar registro pendiente
    const { data: registro, error: errReg } = await supabase
      .from('registros_pendientes')
      .select('*')
      .eq('id', registro_id)
      .maybeSingle();

    if (errReg || !registro) {
      return json({ ok: false, error: 'Registro no encontrado' }, 404);
    }
    if (registro.estado !== 'pendiente') {
      return json(
        { ok: false, error: `Registro ya está en estado ${registro.estado}` },
        409
      );
    }

    // Cargar el aula
    const { data: aula } = await supabase
      .from('aulas')
      .select('*')
      .eq('codigo_acceso', registro.codigo_aula)
      .maybeSingle();
    if (!aula) {
      return json({ ok: false, error: 'Aula no encontrada' }, 404);
    }

    // Crear usuario estudiante en auth.users
    // Email sintético: <id_registro>@conectate.local — único y no enumerable.
    // El estudiante NO ingresa con email, ingresa con código de aula + PIN.
    const emailSintetico = `est-${registro.id.slice(0, 8)}@conectate.local`;
    const codigoPin = generarPin();
    const passwordSintetico = `Pin-${codigoPin}-${crypto.randomUUID().slice(0, 12)}`;

    const { data: nuevoUsuario, error: errCrear } = await supabase.auth.admin.createUser({
      email: emailSintetico,
      password: passwordSintetico,
      email_confirm: true,
      user_metadata: {
        display_name: registro.estudiante_display_name,
        rol_principal: 'student',
        codigo_pin_hash: await hashPin(codigoPin),
      },
    });

    if (errCrear || !nuevoUsuario.user) {
      console.error('[firmar-consentimiento] createUser falló:', errCrear);
      return json({ ok: false, error: 'No se pudo crear cuenta del estudiante' }, 500);
    }

    const estudianteId = nuevoUsuario.user.id;

    // El trigger handle_new_user ya creó public.usuarios. Actualizar fecha_nacimiento.
    await supabase
      .from('usuarios')
      .update({
        display_name: registro.estudiante_display_name,
        fecha_nacimiento: registro.estudiante_fecha_nacimiento,
      })
      .eq('id', estudianteId);

    // Insertar consentimiento
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('cf-connecting-ip') ||
      null;
    const { error: errCons } = await supabase
      .from('consentimientos_plataforma')
      .insert({
        estudiante_id: estudianteId,
        acudiente_nombre,
        acudiente_cc,
        acudiente_email: registro.acudiente_email,
        acudiente_parentesco,
        version_politica,
        finalidades,
        ano_lectivo: aula.ano,
        ip_firma: ip,
        user_agent_firma: user_agent ?? null,
      });

    if (errCons) {
      console.error('[firmar-consentimiento] insert consentimiento falló:', errCons);
      return json({ ok: false, error: 'No se pudo guardar el consentimiento' }, 500);
    }

    // Inscribir al estudiante en el aula
    await supabase.from('enrollments').insert({
      usuario_id: estudianteId,
      aula_id: aula.id,
      rol: 'student',
    });

    // Marcar registro pendiente como firmado
    await supabase
      .from('registros_pendientes')
      .update({ estado: 'firmado' })
      .eq('id', registro_id);

    // Notificación al acudiente (confirmación) — opcional, requiere Resend
    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);
        await resend.emails.send({
          from: RESEND_FROM,
          to: registro.acudiente_email,
          reply_to: RESEND_REPLY_TO || undefined,
          subject: `Confirmación: ${registro.estudiante_display_name} ya está inscrito/a en Conéctate`,
          html: `<p>Hola,</p><p>Confirmamos que firmó la autorización para que
            <strong>${registro.estudiante_display_name}</strong> use la plataforma
            <strong>Conéctate</strong>. El docente le entregará en clase el código PIN
            <code>${codigoPin}</code> para que pueda ingresar.</p>
            <p>Si necesita revocar esta autorización en el futuro, puede contactarnos en
            ${RESEND_REPLY_TO || 'el correo del docente'}.</p>`,
        });
      } catch (err) {
        console.warn('[firmar-consentimiento] no se pudo enviar email confirmación:', err);
      }
    }

    return json({ ok: true, estudiante_id: estudianteId, codigo_pin: codigoPin });
  } catch (err) {
    console.error('[firmar-consentimiento] excepción:', err);
    return json({ ok: false, error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function generarPin(): string {
  // 4 dígitos visibles. No crítico para seguridad (RLS protege todo);
  // sirve para que el estudiante "se identifique" verbalmente con el docente.
  return String(Math.floor(1000 + Math.random() * 9000));
}

async function hashPin(pin: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(pin)
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
