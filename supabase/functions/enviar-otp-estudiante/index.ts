/**
 * Edge Function · enviar-otp-estudiante
 *
 * Envía el código OTP al correo del estudiante ≥14 años.
 * Usa Supabase Auth nativo (signInWithOtp) — no requiere RESEND_API_KEY.
 *
 * Body: { registro_id: uuid, redirect_url?: string }
 * Respuesta: { ok: true, enviado_a: string } | { ok: false, error }
 *
 * Despliegue:
 *   supabase functions deploy enviar-otp-estudiante --no-verify-jwt
 */
// @ts-nocheck — Deno runtime

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.0';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

    const body = await req.json();
    const { registro_id, redirect_url } = body;

    if (!registro_id) return json({ ok: false, error: 'Falta registro_id' }, 400);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE, {
      auth: { persistSession: false },
    });

    const { data: reg, error: errReg } = await sb
      .from('registros_pendientes')
      .select('id, estudiante_email, estado, tipo_registro')
      .eq('id', registro_id)
      .maybeSingle();

    if (errReg || !reg) return json({ ok: false, error: 'Registro no encontrado' }, 404);
    if (reg.estado !== 'pendiente') {
      return json({ ok: false, error: `Estado: ${reg.estado}` }, 409);
    }
    if (reg.tipo_registro !== 'auto') {
      return json({ ok: false, error: 'Este registro no es de auto-firma' }, 400);
    }
    if (!reg.estudiante_email) {
      return json({ ok: false, error: 'Falta email del estudiante' }, 400);
    }

    // Enviar OTP via Supabase Auth nativo — no requiere servicios externos
    const anonSb = createClient(SUPABASE_URL, ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error: otpError } = await anonSb.auth.signInWithOtp({
      email: reg.estudiante_email,
      options: {
        shouldCreateUser: true,
        ...(redirect_url ? { emailRedirectTo: redirect_url } : {}),
      },
    });

    if (otpError) {
      console.error('[enviar-otp-estudiante] signInWithOtp:', otpError);
      return json({ ok: false, error: otpError.message }, 502);
    }

    // Marcar registro para verificación nativa (ya no usamos hash SHA-256 propio)
    await sb
      .from('registros_pendientes')
      .update({ otp_hash: '__supabase_native', otp_expira_en: null })
      .eq('id', registro_id);

    return json({ ok: true, enviado_a: reg.estudiante_email });
  } catch (err) {
    console.error('[enviar-otp-estudiante] excepción:', err);
    return json({ ok: false, error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
