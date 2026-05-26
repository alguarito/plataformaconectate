/**
 * Edge Function · enviar-otp-estudiante
 *
 * Para estudiantes ≥14 años que se auto-registran. Genera un OTP de 6
 * dígitos, lo guarda hasheado en registros_pendientes.otp_hash con
 * expiración de 15 minutos, y lo envía al email del estudiante via Resend.
 *
 * Body:
 *   { registro_id: uuid }
 *
 * Respuesta:
 *   { ok: true, enviado_a: <email> } | { ok: false, error }
 *
 * Despliegue:
 *   supabase functions deploy enviar-otp-estudiante --no-verify-jwt
 */
// @ts-nocheck — Deno runtime

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.0';
import { Resend } from 'https://esm.sh/resend@4.0.1';

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
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
    const RESEND_FROM = Deno.env.get('RESEND_FROM_EMAIL')!;
    const RESEND_REPLY_TO = Deno.env.get('RESEND_REPLY_TO') ?? '';

    const { registro_id } = await req.json();
    if (!registro_id) return json({ ok: false, error: 'Falta registro_id' }, 400);

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
      return json({ ok: false, error: 'Este registro no es de auto-firma' }, 400);
    }
    if (!reg.estudiante_email) {
      return json({ ok: false, error: 'Falta email del estudiante' }, 400);
    }

    // Generar OTP 6 dígitos, guardar hash
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const otp_hash = await sha256(otp);
    const expira = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    await sb
      .from('registros_pendientes')
      .update({ otp_hash, otp_expira_en: expira })
      .eq('id', registro_id);

    // Buscar aula para contexto del correo
    const { data: aula } = await sb
      .from('aulas')
      .select('grado, ano, nombre')
      .eq('codigo_acceso', reg.codigo_aula)
      .maybeSingle();

    const html = renderEmail({
      estudiante: reg.estudiante_display_name,
      otp,
      grado: aula?.grado ?? null,
      ano: aula?.ano ?? null,
      replyTo: RESEND_REPLY_TO,
    });

    const resend = new Resend(RESEND_API_KEY);
    const enviado = await resend.emails.send({
      from: RESEND_FROM,
      to: reg.estudiante_email,
      reply_to: RESEND_REPLY_TO || undefined,
      subject: `Tu código de verificación Conéctate: ${otp}`,
      html,
    });

    if (enviado.error) {
      console.error('[enviar-otp-estudiante] Resend:', enviado.error);
      return json({ ok: false, error: enviado.error.message }, 502);
    }

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

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function renderEmail(opts: {
  estudiante: string;
  otp: string;
  grado: number | null;
  ano: number | null;
  replyTo: string;
}): string {
  const contexto =
    opts.grado && opts.ano ? `Grado ${opts.grado}° · Año lectivo ${opts.ano}` : '';
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Tu código Conéctate</title></head>
<body style="font-family: -apple-system, 'Helvetica Neue', sans-serif; background:#F7F7F4; color:#241816; margin:0; padding:24px;">
  <table role="presentation" style="max-width:520px; margin:0 auto; background:#fff; border-radius:24px; padding:32px;">
    <tr><td>
      <h1 style="margin:0 0 16px; font-size:22px; color:#0066FF; font-weight:900;">
        Tu código de verificación
      </h1>
      <p style="font-size:15px; line-height:1.5;">
        Hola <strong>${escape(opts.estudiante)}</strong>,
        usa este código para confirmar tu cuenta en
        <strong>Plataforma Conéctate</strong>${contexto ? ' (' + escape(contexto) + ')' : ''}:
      </p>

      <p style="text-align:center; margin:32px 0;">
        <span style="display:inline-block; background:#0066FF11; border:2px solid #0066FF; color:#0066FF; font-family:monospace; font-weight:900; font-size:40px; letter-spacing:10px; padding:16px 32px; border-radius:16px;">
          ${escape(opts.otp)}
        </span>
      </p>

      <p style="font-size:14px; line-height:1.5; color:#52525B;">
        Este código vence en <strong>15 minutos</strong>. Si no fuiste tú quien lo
        solicitó, ignora este correo.
      </p>

      <hr style="border:none; border-top:1px solid #E8E2DD; margin:24px 0;">

      <p style="font-size:12px; color:#71717A; line-height:1.5;">
        Plataforma educativa del Dr. Álvaro Cárdenas Orozco · I.E. Sor María Juliana,
        Cartago. Para soporte responde este correo (lo atiende
        ${opts.replyTo || 'el docente'}).
      </p>
    </td></tr>
  </table>
</body></html>`;
}

function escape(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );
}
