# Base de datos · Plataforma Conéctate

Esquema PostgreSQL para el módulo de cuentas. Proyecto Supabase: **ConcienciA**.

## Archivos en esta carpeta

| Archivo | Cuándo aplicarlo |
|---|---|
| `schema.sql` | Una vez al inicio. Crea las 8 tablas, tipos enumerados, índices y funciones helper. **Idempotente** — se puede correr varias veces. |
| `policies.sql` | Una vez después de `schema.sql`. Habilita Row Level Security y crea las políticas por rol. **Idempotente**. |
| `seed.sql` | Opcional, solo en desarrollo. Inserta el docente y un aula de prueba. **Requiere editar el UUID antes de correr**. |

## Cómo aplicar en Supabase

### Opción 1 · SQL Editor de Supabase (recomendado)

1. Entra al [dashboard del proyecto ConcienciA](https://supabase.com/dashboard/project/zvvylehmgfrggpghrskd).
2. Sidebar izquierdo → ícono **SQL Editor** (terminal `>_`).
3. **Aplicar schema**:
   - Click en "New query".
   - Pega el contenido de `db/schema.sql`.
   - Click "Run" (o `Cmd+Enter` en Mac).
   - Verifica que no haya errores en la pestaña "Results".
4. **Aplicar policies**:
   - Nueva query.
   - Pega el contenido de `db/policies.sql`.
   - Run.
5. **Verificar** (en una nueva query):
   ```sql
   select tablename, rowsecurity
   from pg_tables
   where schemaname = 'public'
   order by tablename;
   ```
   Resultado esperado: **8 filas, `rowsecurity = t` en todas**.

### Opción 2 · CLI de Supabase (si tienes acceso)

```bash
# Requiere: npm i -g supabase + login con tu token
supabase db push --linked
```

## Cómo verificar que todo quedó bien

Después de aplicar `schema.sql` + `policies.sql`, corre en SQL Editor:

```sql
-- 1. Las 8 tablas existen
select count(*) as total_tablas
from pg_tables
where schemaname = 'public';
-- Esperado: 8

-- 2. RLS activado en todas
select count(*) as con_rls
from pg_tables
where schemaname = 'public' and rowsecurity = true;
-- Esperado: 8

-- 3. Las políticas existen
select schemaname, tablename, policyname
from pg_policies
where schemaname = 'public'
order by tablename, policyname;
-- Esperado: ~22 políticas distribuidas en las 8 tablas

-- 4. Las funciones helper existen
select proname from pg_proc
where pronamespace = 'public'::regnamespace
  and proname in (
    'tiene_consentimiento_vigente',
    'es_docente_de',
    'touch_actualizado_en'
  );
-- Esperado: 3 filas
```

## Reset limpio (si necesitas reiniciar)

⚠️ **Borra TODOS los datos**. Solo para entornos de desarrollo.

```sql
drop table if exists
  public.eventos_arco,
  public.consentimientos_plataforma,
  public.registros_pendientes,
  public.intentos_quiz,
  public.progreso_guia,
  public.enrollments,
  public.aulas,
  public.usuarios
  cascade;

drop type if exists rol_enrollment, estado_registro, tipo_evento_arco cascade;
drop function if exists
  public.tiene_consentimiento_vigente(uuid),
  public.es_docente_de(uuid, uuid),
  public.touch_actualizado_en()
  cascade;
```

Luego volver a aplicar `schema.sql` + `policies.sql`.

## Tablas y para qué sirven

| # | Tabla | Para qué |
|---|---|---|
| 1 | `usuarios` | Perfil público de cada cuenta (sin email del menor) |
| 2 | `aulas` | Grupos del docente con código de acceso |
| 3 | `enrollments` | Vínculo usuario↔aula con su rol (student/teacher/observer) |
| 4 | `progreso_guia` | Una fila por (estudiante, guía) — %, última estación |
| 5 | `intentos_quiz` | Histórico de intentos de quizzes (respuestas en JSONB) |
| 6 | `registros_pendientes` | Estado temporal del flujo de firma del acudiente |
| 7 | `consentimientos_plataforma` | Prueba legal del consentimiento firmado |
| 8 | `eventos_arco` | Auditoría de derechos ejercidos (acceso, rectificación, etc.) |

## Mapa de políticas RLS

| Tabla | Quién ve | Quién edita |
|---|---|---|
| `usuarios` | el mismo + su docente | el mismo |
| `aulas` | docente dueño + miembros del aula | docente dueño |
| `enrollments` | el mismo + docente del aula | docente del aula |
| `progreso_guia` | el mismo (si consent vigente) + docente | el mismo (si consent vigente) |
| `intentos_quiz` | el mismo (si consent vigente) + docente | el mismo (si consent vigente) |
| `registros_pendientes` | nadie via cliente | nadie via cliente (anon puede insert) |
| `consentimientos_plataforma` | el mismo + docente | el mismo (solo revocar) |
| `eventos_arco` | el mismo + docente | el mismo |

## Documentos relacionados

- [`docs/cuentas/arquitectura-cuentas.md`](../docs/cuentas/arquitectura-cuentas.md) — diseño técnico completo.
- [`docs/cuentas/consentimiento-v2026.05.md`](../docs/cuentas/consentimiento-v2026.05.md) — texto del consentimiento.
- [`docs/cuentas/politica-de-privacidad-v2026.05.md`](../docs/cuentas/politica-de-privacidad-v2026.05.md) — política pública.

## Próximo paso (Fase 2)

Cuando el esquema esté aplicado en ConcienciA:

1. Instalar `@supabase/supabase-js` en `package.json`.
2. Crear `src/lib/supabase.ts` con el cliente tipado.
3. Crear `.env.local` con las credenciales (gitignored).
4. Implementar flujo de registro con OTP del acudiente.
