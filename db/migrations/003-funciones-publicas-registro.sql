-- ============================================================================
-- Migración 003 · Funciones públicas para flujo de registro
--
-- Las policies actuales no permiten que anon lea aulas ni registros_pendientes
-- (por privacidad). Pero el flujo de registro necesita:
--   1. Que el estudiante vea info de su aula (grado, año) al ingresar el código.
--   2. Que el estudiante haga polling del estado de su registro.
--
-- Estas dos operaciones se exponen vía funciones SECURITY DEFINER que devuelven
-- solo lo mínimo necesario (no enumera otras aulas/registros).
--
-- Esta migración es IDEMPOTENTE.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- info_aula_por_codigo: devuelve grado/periodo/ano/nombre dado un código de
-- acceso. NO devuelve docente_id ni id interna. Si el código no existe,
-- devuelve NULL.
-- ----------------------------------------------------------------------------

create or replace function public.info_aula_por_codigo(_codigo text)
returns table (
  grado int,
  periodo int,
  ano int,
  nombre text
)
language sql
stable
security definer
set search_path = public
as $$
  select a.grado, a.periodo, a.ano, a.nombre
  from public.aulas a
  where a.codigo_acceso = _codigo
  limit 1;
$$;

-- Permitir invocación desde anon
grant execute on function public.info_aula_por_codigo(text) to anon, authenticated;

-- ----------------------------------------------------------------------------
-- estado_registro_por_id: dado el UUID de un registro pendiente devuelve solo
-- su estado actual. El UUID es prácticamente no enumerable (versión 4); si
-- alguien lo tiene, ya conocía el registro.
-- ----------------------------------------------------------------------------

create or replace function public.estado_registro_por_id(_id uuid)
returns text
language sql
stable
security definer
set search_path = public
as $$
  select estado::text
  from public.registros_pendientes
  where id = _id
  limit 1;
$$;

grant execute on function public.estado_registro_por_id(uuid) to anon, authenticated;

-- ============================================================================
-- Verificación post-aplicación
-- ============================================================================
-- Probar desde el cliente con la publishable key:
--
--   const { data } = await supabase.rpc('info_aula_por_codigo', { _codigo: 'AULA-XX-XX' });
--   debe devolver null si no existe, o {grado, periodo, ano, nombre} si existe.
--
-- ============================================================================
