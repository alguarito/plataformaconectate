-- ============================================================================
-- Migración 005 · Soporte para auto-registro de estudiantes ≥14 años
--
-- Cambio operativo: hasta ahora todos los menores requerían firma del
-- acudiente. A partir de aquí:
--   - Estudiantes <14 años: firma del acudiente (flujo original)
--   - Estudiantes ≥14 años: firman ellos mismos con OTP a su correo
--
-- Justificación legal:
--   - Estándar internacional (GDPR-K 16, COPPA 13, Chile 14, Argentina 13).
--   - Proyecto de Ley 247/2025 Colombia propone 14 como umbral.
--   - Cobertura institucional respaldo: consentimiento de matrícula firmado
--     por acudiente al ingresar a la I.E. cubre uso pedagógico.
--
-- IDEMPOTENTE.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Ampliar registros_pendientes para soportar ambos flujos
-- ----------------------------------------------------------------------------

alter table public.registros_pendientes
  add column if not exists estudiante_email text,
  add column if not exists tipo_registro text not null default 'acudiente';

-- check constraint para tipo_registro
do $$ begin
  alter table public.registros_pendientes
    drop constraint if exists registros_pendientes_tipo_registro_check;
  alter table public.registros_pendientes
    add constraint registros_pendientes_tipo_registro_check
    check (tipo_registro in ('acudiente', 'auto'));
exception when others then null;
end $$;

-- ----------------------------------------------------------------------------
-- 2. Ampliar consentimientos_plataforma para auto-consentimiento
-- ----------------------------------------------------------------------------

alter table public.consentimientos_plataforma
  add column if not exists auto_consentido boolean not null default false,
  add column if not exists estudiante_email text;

-- Permitir parentesco='auto' además de padre/madre/tutor
do $$ begin
  alter table public.consentimientos_plataforma
    drop constraint if exists consentimientos_plataforma_acudiente_parentesco_check;
  alter table public.consentimientos_plataforma
    add constraint consentimientos_plataforma_acudiente_parentesco_check
    check (acudiente_parentesco in ('padre', 'madre', 'tutor', 'auto'));
exception when others then null;
end $$;

-- ----------------------------------------------------------------------------
-- 3. Función helper: calcular edad a partir de fecha_nacimiento
-- ----------------------------------------------------------------------------

create or replace function public.edad_a_fecha(_fecha_nacimiento date, _hoy date default current_date)
returns int
language sql
immutable
as $$
  select extract(year from age(_hoy, _fecha_nacimiento))::int;
$$;

grant execute on function public.edad_a_fecha(date, date) to anon, authenticated;

-- ----------------------------------------------------------------------------
-- 4. Verificación
-- ----------------------------------------------------------------------------
--   select column_name, data_type from information_schema.columns
--   where table_name = 'registros_pendientes' and table_schema = 'public';
--   → debe incluir estudiante_email, tipo_registro
--
--   select edad_a_fecha('2010-01-01');  -- debería dar 16 (en 2026)
-- ============================================================================
