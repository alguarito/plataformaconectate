/**
 * monthly-report — configuración del cron mensual
 *
 * La Edge Function `monthly-report` se invoca el día 1 de cada mes a las 8am
 * (hora Colombia, UTC-5) a través de GitHub Actions:
 *   .github/workflows/monthly-report.yml
 *
 * Secrets requeridos en GitHub (Settings → Secrets and variables → Actions):
 *   SUPABASE_URL          — https://ufnvowvvjygemfzdaput.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY — tu service_role key
 *
 * Variables de entorno requeridas en la Edge Function (Supabase Dashboard):
 *   RESEND_API_KEY        — tu API key de resend.com
 *   RESEND_FROM_EMAIL     — "Plataforma Conéctate <informes@resend.dev>"
 *   RESEND_REPLY_TO       — alvaro.cardenas.orozco@gmail.com  (opcional)
 *
 * Despliegue de la función:
 *   supabase functions deploy monthly-report --project-ref ufnvowvvjygemfzdaput --no-verify-jwt
 *
 * Prueba sin enviar correos:
 *   GitHub Actions → monthly-report → Run workflow → dry_run: true
 *   — o —
 *   supabase functions invoke monthly-report --data '{"dry_run": true}' --project-ref ufnvowvvjygemfzdaput
 *
 * Nota: pg_cron y pg_net no están habilitados en este proyecto.
 * Si en el futuro se habilitan, la lógica de scheduling puede moverse aquí.
 */

-- (sin SQL ejecutable — el scheduling corre en GitHub Actions)
select 1;
