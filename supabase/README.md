# Supabase Edge Functions · ConcienciA

Funciones Deno que se ejecutan en el edge de Supabase. Las usamos para:

- **enviar-solicitud-firma** — envía email al acudiente con link de firma (vía Resend).
- **firmar-consentimiento** — recibe la firma del acudiente, crea cuenta del estudiante, inserta consentimiento, inscribe en aula.

Las dos viven aquí porque necesitan secretos (`RESEND_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) que NUNCA pueden vivir en el cliente.

## Pre-requisitos

```bash
brew install supabase/tap/supabase
supabase --version  # debe ser >= 1.200
```

Luego, una vez:

```bash
cd /Users/alvarocardenasorozco/Desktop/PROYECTOS/PLATAFORMA\ CONECTATE
supabase login                                 # autentica con tu cuenta Supabase
supabase link --project-ref zvvylehmgfrggpghrskd
```

## Configurar secretos

Antes del primer deploy, registra los secretos que las funciones leen via `Deno.env.get()`:

> ⚠️ **NUNCA pegues los valores reales en este README**. Los valores
> verdaderos viven en `.env.local` (gitignored) y en el secrets store de
> Supabase. Los placeholders `<…>` son solo para indicar el formato.

```bash
# Resend (ver .env.local para los valores reales)
supabase secrets set RESEND_API_KEY=<TU_RESEND_API_KEY>
supabase secrets set RESEND_FROM_EMAIL="Plataforma Conéctate <onboarding@resend.dev>"
supabase secrets set RESEND_REPLY_TO=<tu-correo>

# URL del sitio (usada en los links de los emails)
supabase secrets set PUBLIC_SITE_URL=https://alguarito.github.io/plataformaconectate

# El service_role lo necesitamos pero Supabase ya lo expone como SUPABASE_SERVICE_ROLE_KEY
# automáticamente en el runtime de las edge functions — no hay que setearlo a mano.
```

Verificar:

```bash
supabase secrets list
```

## Deploy de las dos funciones

```bash
supabase functions deploy enviar-solicitud-firma --no-verify-jwt
supabase functions deploy firmar-consentimiento --no-verify-jwt
```

`--no-verify-jwt` permite que las funciones se llamen sin un JWT de usuario logueado. Cada función valida internamente (los acudientes firman SIN tener cuenta).

## Verificación rápida

```bash
curl -X POST \
  https://zvvylehmgfrggpghrskd.supabase.co/functions/v1/enviar-solicitud-firma \
  -H "apikey: $PUBLIC_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"registro_id":"<uuid-de-un-registro-pendiente>"}'
```

Si responde `{ "ok": true, "enviado_a": "..." }` está bien.

## Logs

```bash
supabase functions logs enviar-solicitud-firma --tail
supabase functions logs firmar-consentimiento --tail
```

## Estructura

```
supabase/
├── config.toml                          # vincula a project_id ConcienciA
├── functions/
│   ├── enviar-solicitud-firma/
│   │   └── index.ts
│   └── firmar-consentimiento/
│       └── index.ts
└── README.md                            # este archivo
```
