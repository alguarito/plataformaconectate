/**
 * Edge Function · firmar-auto-consentimiento
 *
 * El estudiante ≥14 años verifica su OTP y firma su propio consentimiento.
 *
 * Verificación vía Supabase Auth nativo:
 *   - Magic link: el cliente ya tiene sesión activa (Authorization: Bearer).
 *   - Código de 6 dígitos: se valida con verifyOtp.
 *
 * Body:
 *   {
 *     registro_id: uuid,
 *     otp: '123456',
 *     declaraciones: ['mayor_14', 'email_propio', 'autoriza'],
 *     version_politica: '2026.06'
 *   }
 *
 * Respuesta:
 *   { ok: true, estudiante_id, codigo_pin } | { ok: false, error }
 *
 * Despliegue:
 *   supabase functions deploy firmar-auto-consentimiento --no-verify-jwt
 */
// @ts-nocheck

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.0';
import { Resend } from 'https://esm.sh/resend@4.0.1';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const DECLARACIONES_REQUERIDAS = ['mayor_14', 'email_propio', 'autoriza'];

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const RESEND_FROM = Deno.env.get('RESEND_FROM_EMAIL')!;
    const RESEND_REPLY_TO = Deno.env.get('RESEND_REPLY_TO') ?? '';

    const body = await req.json();
    const { registro_id, otp, declaraciones, version_politica, user_agent } = body;

    if (!registro_id || !otp || !Array.isArray(declaraciones) || !version_politica) {
      return json({ ok: false, error: 'Faltan campos requeridos' }, 400);
    }

    // Validar declaraciones obligatorias
    const faltantes = DECLARACIONES_REQUERIDAS.filter((d) => !declaraciones.includes(d));
    if (faltantes.length > 0) {
      return json(
        { ok: false, error: `Faltan declaraciones obligatorias: ${faltantes.join(', ')}` },
        400
      );
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE, {
      auth: { persistSession: false },
    });

    const { data: reg, error: errReg } = await sb
      .from('registros_pendientes')
      .select('*')
      .eq('id', registro_id)
      .maybeSingle();

    if (errReg || !reg) return json({ ok: false, error: 'Registro no encontrado' }, 404);
    if (reg.estado !== 'pendiente') {
      return json({ ok: false, error: `Estado: ${reg.estado}` }, 409);
    }
    if (reg.tipo_registro !== 'auto') {
      return json({ ok: false, error: 'Este registro requiere firma del acudiente' }, 400);
    }

    // Solo se admite verificación nativa (Supabase Auth). Los registros antiguos
    // basados en SHA-256/Resend ya no se pueden completar: su OTP nunca se
    // entregó, así que el estudiante debe reiniciar el registro para recibir
    // un código nuevo por el flujo nativo.
    if (reg.otp_hash !== '__supabase_native') {
      return json(
        {
          ok: false,
          error: 'Tu solicitud expiró. Vuelve a iniciar el registro para recibir un código nuevo.',
        },
        409
      );
    }

    // Validar edad ≥ 14 antes de tocar Auth
    const edad = calcularEdad(new Date(reg.estudiante_fecha_nacimiento));
    if (edad < 14) {
      return json(
        { ok: false, error: 'Edad insuficiente para auto-registro (mínimo 14 años)' },
        403
      );
    }

    // Cargar aula
    const { data: aula } = await sb
      .from('aulas')
      .select('*')
      .eq('codigo_acceso', reg.codigo_aula)
      .maybeSingle();
    if (!aula) return json({ ok: false, error: 'Aula no encontrada' }, 404);

    // PIN que se mostrará al estudiante
    const codigoPin = String(Math.floor(1000 + Math.random() * 9000));
    let estudianteId: string;

    // ── Verificación nativa ──────────────────────────────────────────────────
    // Sub-ruta A: magic link — el cliente ya tiene sesión activa.
    // supabase.functions.invoke envía "Authorization: Bearer <access_token>"
    // cuando hay sesión, a diferencia del anon key que no identifica usuario.
    const authHeader = req.headers.get('authorization') ?? '';
    const bearer = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

    let sessionUser = null;
    if (bearer) {
      const tempSb = createClient(SUPABASE_URL, ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
        global: { headers: { Authorization: `Bearer ${bearer}` } },
      });
      const { data: { user } } = await tempSb.auth.getUser();
      // Validar que el email del JWT coincide con el del registro
      if (user?.email === reg.estudiante_email) sessionUser = user;
    }

    if (sessionUser) {
      estudianteId = sessionUser.id;
    } else {
      // Sub-ruta B: OTP de 6 dígitos — el cliente lo ingresó manualmente.
      const anonSb = createClient(SUPABASE_URL, ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
      });

      const { data: verified, error: errOtp } = await anonSb.auth.verifyOtp({
        email: reg.estudiante_email,
        token: String(otp),
        type: 'email',
      });

      if (errOtp || !verified?.user) {
        console.error('[firmar-auto] verifyOtp nativo:', errOtp);
        return json({ ok: false, error: 'OTP incorrecto o expirado' }, 400);
      }

      estudianteId = verified.user.id;
    }

    // Completar metadatos del usuario creado por signInWithOtp (mínimos por defecto)
    await sb.auth.admin.updateUserById(estudianteId, {
      user_metadata: {
        display_name: reg.estudiante_display_name,
        rol_principal: 'student',
        auto_consentido: true,
        codigo_pin: codigoPin,
      },
    });

    // ── Ruta común ─────────────────────────────────────────────────────────────

    // Actualizar usuarios con datos reales (trigger de auth crea la fila base)
    await sb
      .from('usuarios')
      .update({
        display_name: reg.estudiante_display_name,
        fecha_nacimiento: reg.estudiante_fecha_nacimiento,
      })
      .eq('id', estudianteId);

    // Insertar consentimiento con auto_consentido=true
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('cf-connecting-ip') ||
      null;

    const { error: errCons } = await sb.from('consentimientos_plataforma').insert({
      estudiante_id: estudianteId,
      acudiente_nombre: reg.estudiante_display_name,
      acudiente_cc: 'N/A',
      acudiente_email: reg.estudiante_email,
      acudiente_parentesco: 'auto',
      version_politica,
      finalidades: ['progreso', 'quizzes', 'reportes_docente'],
      ano_lectivo: aula.ano,
      ip_firma: ip,
      user_agent_firma: user_agent ?? null,
      auto_consentido: true,
      estudiante_email: reg.estudiante_email,
    });

    if (errCons) {
      console.error('[firmar-auto] insert consentimiento:', errCons);
      return json({ ok: false, error: 'No se pudo guardar el consentimiento' }, 500);
    }

    // Inscribir en aula
    await sb.from('enrollments').insert({
      usuario_id: estudianteId,
      aula_id: aula.id,
      rol: 'student',
    });

    // Marcar registro firmado
    await sb
      .from('registros_pendientes')
      .update({ estado: 'firmado', otp_hash: null, otp_expira_en: null })
      .eq('id', registro_id);

    // Correo de confirmación (solo si Resend está configurado; no bloquea el flujo)
    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);
        await resend.emails.send({
          from: RESEND_FROM,
          to: reg.estudiante_email,
          reply_to: RESEND_REPLY_TO || undefined,
          subject: `Bienvenido a Conéctate, ${reg.estudiante_display_name}`,
          html: `<p>Tu cuenta de Plataforma Conéctate quedó activa.</p>
            <p>Tu PIN para acceder desde otros dispositivos: <code>${codigoPin}</code></p>
            <p>Si necesitas eliminar tu cuenta o ejercer tus derechos ARCO,
            responde este correo (${RESEND_REPLY_TO || 'al docente'}).</p>`,
        });
      } catch (err) {
        console.warn('[firmar-auto] no se pudo enviar email confirmación:', err);
      }
    }

    return json({ ok: true, estudiante_id: estudianteId, codigo_pin: codigoPin });
  } catch (err) {
    console.error('[firmar-auto-consentimiento] excepción:', err);
    return json({ ok: false, error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function calcularEdad(fechaNac: Date, hoy: Date = new Date()): number {
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  if (
    hoy.getMonth() < fechaNac.getMonth() ||
    (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())
  ) {
    edad--;
  }
  return edad;
}
