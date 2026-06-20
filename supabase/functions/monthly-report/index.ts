/**
 * Edge Function · monthly-report
 *
 * Envía un informe mensual de actividad del estudiante al correo del acudiente.
 * Corre el día 1 de cada mes a las 8am (hora Colombia) vía pg_cron.
 *
 * Env vars requeridas:
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *   RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_REPLY_TO (opcional)
 *
 * Despliegue:
 *   supabase functions deploy monthly-report --no-verify-jwt
 *
 * Invocación manual (prueba):
 *   supabase functions invoke monthly-report --data '{"dry_run": true}'
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

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  // Autorización: solo service_role o token de cron
  const authHeader = req.headers.get('Authorization') ?? '';
  const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  if (authHeader !== `Bearer ${SERVICE_ROLE}`) {
    return json({ ok: false, error: 'unauthorized' }, 401);
  }

  let body: { dry_run?: boolean } = {};
  try { body = await req.json(); } catch { /* body vacío */ }
  const dryRun = body.dry_run === true;

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, SERVICE_ROLE);
  const resend = dryRun ? null : new Resend(Deno.env.get('RESEND_API_KEY')!);

  // Calcular rango del mes anterior
  const ahora = new Date();
  const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth() - 1, 1);
  const finMes = new Date(ahora.getFullYear(), ahora.getMonth(), 0, 23, 59, 59);
  const mesLabel = inicioMes.toLocaleDateString('es-CO', { month: 'long', year: 'numeric' });

  // Obtener estudiantes con consentimiento activo y acudiente_email
  const { data: consentimientos, error: errC } = await supabase
    .from('consentimientos_plataforma')
    .select('estudiante_id, acudiente_email, acudiente_nombre, estudiante_email, auto_consentido')
    .is('revocado_en', null)
    .not('acudiente_email', 'is', null);

  if (errC) return json({ ok: false, error: errC.message }, 500);
  if (!consentimientos?.length) return json({ ok: true, sent: 0, reason: 'sin_consentimientos' });

  const resultados: { id: string; email: string; guias: number; ok?: boolean; error?: string }[] = [];

  for (const c of consentimientos) {
    const { data: progresos } = await supabase
      .from('progreso_guia')
      .select('guia_clave, porcentaje, completada_en')
      .eq('estudiante_id', c.estudiante_id)
      .gte('actualizado_en', inicioMes.toISOString())
      .lte('actualizado_en', finMes.toISOString());

    // Omitir estudiantes sin actividad el mes anterior
    if (!progresos?.length) continue;

    const { data: examenes } = await supabase
      .from('intentos_quiz')
      .select('puntaje')
      .eq('estudiante_id', c.estudiante_id)
      .gte('realizado_en', inicioMes.toISOString())
      .lte('realizado_en', finMes.toISOString());

    const guiasIniciadas = progresos.length;
    const guiasCompletadas = progresos.filter((p) => p.completada_en).length;
    const promProgreso = Math.round(
      progresos.reduce((a, p) => a + p.porcentaje, 0) / progresos.length
    );
    const nExamenes = examenes?.length ?? 0;
    const promExamenes = nExamenes > 0
      ? Math.round((examenes!).reduce((a, e) => a + (e.puntaje ?? 0), 0) / nExamenes)
      : null;

    // Obtener nombre del estudiante desde auth.users
    const { data: { user } } = await supabase.auth.admin.getUserById(c.estudiante_id);
    const nombreEstudiante = user?.user_metadata?.full_name
      ?? user?.email?.split('@')[0]
      ?? 'el estudiante';

    const destinatario = c.acudiente_email;
    const nombreAcudiente = c.acudiente_nombre ?? 'Acudiente';

    const html = buildHtml({
      nombreAcudiente,
      nombreEstudiante,
      mesLabel,
      guiasIniciadas,
      guiasCompletadas,
      promProgreso,
      nExamenes,
      promExamenes,
    });

    const resultado: (typeof resultados)[number] = {
      id: c.estudiante_id,
      email: destinatario,
      guias: guiasIniciadas,
    };

    if (dryRun) {
      resultado.ok = true;
    } else {
      try {
        const RESEND_FROM = Deno.env.get('RESEND_FROM_EMAIL')!;
        const REPLY_TO = Deno.env.get('RESEND_REPLY_TO') ?? undefined;
        const { error: errEnvio } = await resend!.emails.send({
          from: RESEND_FROM,
          to: [destinatario],
          reply_to: REPLY_TO,
          subject: `Informe mensual de ${nombreEstudiante} — ${mesLabel}`,
          html,
        });
        resultado.ok = !errEnvio;
        if (errEnvio) resultado.error = errEnvio.message;
      } catch (e) {
        resultado.ok = false;
        resultado.error = (e as Error).message;
      }
    }

    resultados.push(resultado);
  }

  const sent = resultados.filter((r) => r.ok).length;
  return json({ ok: true, dry_run: dryRun, mes: mesLabel, sent, total: consentimientos.length, resultados });
});

interface EmailData {
  nombreAcudiente: string;
  nombreEstudiante: string;
  mesLabel: string;
  guiasIniciadas: number;
  guiasCompletadas: number;
  promProgreso: number;
  nExamenes: number;
  promExamenes: number | null;
}

function buildHtml(d: EmailData): string {
  const pctBar = Math.min(100, d.promProgreso);
  const barColor = d.promProgreso >= 75 ? '#84cc16' : d.promProgreso >= 40 ? '#f97316' : '#f43f5e';
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08);">
      <!-- Header azul -->
      <tr>
        <td style="background:#0066FF;padding:28px 32px;">
          <p style="margin:0;color:rgba(255,255,255,.7);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">I.E. Sor María Juliana · Cartago</p>
          <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-.02em;">Informe mensual</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,.8);font-size:14px;">${escHtml(d.mesLabel)} · Plataforma Conéctate</p>
        </td>
      </tr>
      <!-- Cuerpo -->
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 20px;color:#111;font-size:15px;">Estimado/a <strong>${escHtml(d.nombreAcudiente)}</strong>,</p>
          <p style="margin:0 0 24px;color:#555;font-size:14px;line-height:1.6;">
            A continuación encontrará el resumen de la actividad de <strong>${escHtml(d.nombreEstudiante)}</strong>
            en la Plataforma Conéctate durante el mes de ${escHtml(d.mesLabel)}.
          </p>

          <!-- KPIs -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              ${kpiCell('Guías trabajadas', String(d.guiasIniciadas), '#0066FF')}
              ${kpiCell('Guías completadas', String(d.guiasCompletadas), '#84cc16')}
              ${kpiCell('Exámenes realizados', String(d.nExamenes), '#a855f7')}
            </tr>
          </table>

          <!-- Barra de progreso promedio -->
          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.06em;">Progreso promedio en guías</p>
          <div style="background:#e5e7eb;border-radius:8px;overflow:hidden;height:12px;margin-bottom:4px;">
            <div style="background:${barColor};width:${pctBar}%;height:12px;border-radius:8px;"></div>
          </div>
          <p style="margin:4px 0 20px;font-size:13px;color:#666;">${d.promProgreso}%${d.promExamenes != null ? ` · Promedio exámenes: ${d.promExamenes}%` : ''}</p>

          <!-- Interpretación -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f7ff;border-radius:12px;margin-bottom:24px;">
            <tr><td style="padding:16px 20px;">
              <p style="margin:0;font-size:14px;color:#0066FF;font-weight:700;">${interpretacion(d.promProgreso, d.guiasCompletadas)}</p>
            </td></tr>
          </table>

          <p style="margin:0 0 24px;color:#555;font-size:13px;line-height:1.6;">
            Si desea conversar sobre el desempeño de su hijo/a, puede responder este correo directamente.
            El docente <strong>PhD. Álvaro Cárdenas Orozco</strong> lo atenderá a la brevedad.
          </p>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f9fafb;padding:20px 32px;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">
            I.E. Sor María Juliana · Área de Tecnología e Informática · Cartago, Valle del Cauca<br>
            Este informe se genera automáticamente el primer día de cada mes.<br>
            Si no desea recibirlos, por favor informe al docente.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function kpiCell(label: string, valor: string, color: string): string {
  return `<td align="center" style="padding:0 4px;">
    <div style="background:#f9fafb;border-radius:12px;padding:16px 12px;text-align:center;">
      <p style="margin:0 0 4px;font-size:24px;font-weight:900;color:${color};">${escHtml(valor)}</p>
      <p style="margin:0;font-size:11px;color:#666;">${escHtml(label)}</p>
    </div>
  </td>`;
}

function interpretacion(prom: number, completadas: number): string {
  if (prom >= 75 || completadas >= 3) return '¡Excelente trabajo este mes! Mantén el ritmo.';
  if (prom >= 40) return 'Buen avance. Un poco más de constancia cerrará las guías en curso.';
  return 'Hay guías sin completar. Anímalo/a a dedicar 30 minutos extra a la semana.';
}

function escHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
