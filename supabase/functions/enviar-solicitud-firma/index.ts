/**
 * Edge Function · enviar-solicitud-firma
 *
 * Recibe el id de un registro_pendiente y envía un correo al acudiente
 * con un link único para que firme el consentimiento informado.
 *
 * Por qué Edge Function (no llamada directa desde cliente):
 *   - La API key de Resend es secreta y no puede vivir en el bundle público.
 *   - Necesitamos validar que el registro_pendiente existe en BD.
 *
 * Body esperado (JSON):
 *   { registro_id: string (uuid) }
 *
 * Devuelve:
 *   { ok: true, enviado_a: string } o { ok: false, error: string }
 *
 * Despliegue:
 *   supabase functions deploy enviar-solicitud-firma --no-verify-jwt
 *
 * Secretos necesarios (configurar con supabase secrets set):
 *   RESEND_API_KEY
 *   RESEND_FROM_EMAIL      (ej. "Plataforma Conéctate <onboarding@resend.dev>")
 *   RESEND_REPLY_TO        (ej. "alvaro.cardenas.orozco@gmail.com")
 *   PUBLIC_SITE_URL        (ej. "https://alguarito.github.io/plataformaconectate")
 */
// @ts-nocheck — esto es Deno, no Node. Los imports son de esm.sh.

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
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
    const RESEND_FROM = Deno.env.get('RESEND_FROM_EMAIL')!;
    const RESEND_REPLY_TO = Deno.env.get('RESEND_REPLY_TO') ?? '';
    const SITE_URL = Deno.env.get('PUBLIC_SITE_URL')!;

    const { registro_id } = await req.json();
    if (!registro_id || typeof registro_id !== 'string') {
      return json({ ok: false, error: 'Falta registro_id' }, 400);
    }

    // Service role para bypasear RLS y leer el registro_pendiente
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
      auth: { persistSession: false },
    });

    const { data: registro, error: errReg } = await supabase
      .from('registros_pendientes')
      .select('*, aula:codigo_aula')
      .eq('id', registro_id)
      .maybeSingle();

    if (errReg || !registro) {
      console.error('[enviar-solicitud-firma] No se encontró registro:', errReg);
      return json({ ok: false, error: 'Registro no encontrado' }, 404);
    }

    if (registro.estado !== 'pendiente') {
      return json(
        { ok: false, error: `Registro en estado ${registro.estado}, no pendiente` },
        409
      );
    }

    // Buscar el aula para personalizar el correo (grado, periodo)
    const { data: aula } = await supabase
      .from('aulas')
      .select('grado, periodo, ano, nombre, docente_id')
      .eq('codigo_acceso', registro.codigo_aula)
      .maybeSingle();

    const linkFirma = `${SITE_URL}/cuenta/firma-acudiente?id=${registro.id}`;

    const html = renderEmail({
      estudiante: registro.estudiante_display_name,
      grado: aula?.grado ?? null,
      ano: aula?.ano ?? null,
      linkFirma,
      replyTo: RESEND_REPLY_TO,
    });

    const resend = new Resend(RESEND_API_KEY);
    const enviado = await resend.emails.send({
      from: RESEND_FROM,
      to: registro.acudiente_email,
      reply_to: RESEND_REPLY_TO || undefined,
      subject: `Autorización requerida: ${registro.estudiante_display_name} en Plataforma Conéctate`,
      html,
    });

    if (enviado.error) {
      console.error('[enviar-solicitud-firma] Resend error:', enviado.error);
      return json({ ok: false, error: enviado.error.message }, 502);
    }

    return json({ ok: true, enviado_a: registro.acudiente_email });
  } catch (err) {
    console.error('[enviar-solicitud-firma] excepción:', err);
    return json({ ok: false, error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function renderEmail(opts: {
  estudiante: string;
  grado: number | null;
  ano: number | null;
  linkFirma: string;
  replyTo: string;
}): string {
  const contexto =
    opts.grado && opts.ano ? `Grado ${opts.grado}° · Año lectivo ${opts.ano}` : '';
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Autorización Plataforma Conéctate</title></head>
<body style="font-family: -apple-system, 'Helvetica Neue', sans-serif; background:#F7F7F4; color:#241816; margin:0; padding:24px;">
  <table role="presentation" style="max-width:560px; margin:0 auto; background:#fff; border-radius:24px; padding:32px;">
    <tr><td>
      <h1 style="margin:0 0 8px; font-size:22px; color:#0066FF; font-weight:900;">
        Solicitud de autorización
      </h1>
      <p style="margin:0 0 16px; font-size:14px; color:#52525B;">Plataforma Conéctate · I.E. Sor María Juliana · Cartago</p>

      <p style="font-size:15px; line-height:1.5;">
        Hola, le escribimos desde la plataforma educativa <strong>Conéctate</strong> del
        <strong>Dr. Álvaro Cárdenas Orozco</strong>, docente de Tecnología e Informática
        en la I.E. Sor María Juliana.
      </p>

      <p style="font-size:15px; line-height:1.5;">
        El/la estudiante <strong>${escape(opts.estudiante)}</strong>
        ${contexto ? `(${escape(contexto)})` : ''} desea registrarse en la plataforma para hacer
        seguimiento de su progreso académico.
      </p>

      <p style="font-size:15px; line-height:1.5;">
        Como representante legal del menor, la <strong>Ley 1581 de 2012</strong> exige su
        autorización previa, expresa e informada antes de tratar sus datos. Por favor
        haga clic en el botón para leer el consentimiento informado y firmarlo
        digitalmente:
      </p>

      <p style="text-align:center; margin:32px 0;">
        <a href="${opts.linkFirma}"
           style="background:#0066FF; color:#fff; text-decoration:none; padding:14px 32px; border-radius:16px; font-weight:700; font-size:16px; display:inline-block;">
          Leer y autorizar
        </a>
      </p>

      <p style="font-size:13px; color:#52525B; line-height:1.5;">
        Si el botón no funciona, copie y pegue este enlace en su navegador:<br>
        <a href="${opts.linkFirma}" style="color:#0066FF; word-break:break-all;">${opts.linkFirma}</a>
      </p>

      <hr style="border:none; border-top:1px solid #E8E2DD; margin:24px 0;">

      <p style="font-size:12px; color:#71717A; line-height:1.5;">
        Si usted no es el acudiente del estudiante mencionado o no esperaba este correo,
        puede ignorarlo. El estudiante no podrá registrarse sin su autorización.
      </p>

      <p style="font-size:12px; color:#71717A; line-height:1.5;">
        Para soporte o dudas, responda este correo (será atendido por
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
