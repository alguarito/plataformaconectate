-- ============================================================================
-- Migración 001 · Arreglar recursión infinita en policies de aulas/enrollments
--
-- Problema detectado por smoke test:
--   42P17 · infinite recursion detected in policy for relation "aulas"
--   42P17 · infinite recursion detected in policy for relation "enrollments"
--
-- Causa: la policy de aulas consultaba enrollments y la de enrollments
-- consultaba aulas → ciclo infinito al evaluar SELECT.
--
-- Solución: introducir 2 funciones SECURITY DEFINER que bypassen RLS al
-- consultar internamente. Reemplazar las policies recursivas por llamadas
-- a esas funciones.
--
-- Esta migración es IDEMPOTENTE — se puede correr varias veces sin error.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Crear funciones helper SECURITY DEFINER
-- ----------------------------------------------------------------------------

create or replace function public.es_miembro_de_aula(_usuario_id uuid, _aula_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.enrollments
    where usuario_id = _usuario_id and aula_id = _aula_id
  );
$$;

create or replace function public.es_docente_del_aula(_docente_id uuid, _aula_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.aulas
    where id = _aula_id and docente_id = _docente_id
  );
$$;

-- ----------------------------------------------------------------------------
-- 2. Reemplazar policy aulas_miembro_lee (estaba consultando enrollments directamente)
-- ----------------------------------------------------------------------------

drop policy if exists aulas_miembro_lee on public.aulas;
create policy aulas_miembro_lee on public.aulas for select
  using (public.es_miembro_de_aula(auth.uid(), id));

-- ----------------------------------------------------------------------------
-- 3. Reemplazar policies de enrollments que consultaban aulas
-- ----------------------------------------------------------------------------

drop policy if exists enrollments_docente on public.enrollments;
create policy enrollments_docente on public.enrollments for select
  using (public.es_docente_del_aula(auth.uid(), aula_id));

drop policy if exists enrollments_docente_admin on public.enrollments;
create policy enrollments_docente_admin on public.enrollments for all
  using (public.es_docente_del_aula(auth.uid(), aula_id))
  with check (public.es_docente_del_aula(auth.uid(), aula_id));

-- ============================================================================
-- Verificación
-- ============================================================================
-- Después de aplicar esta migración, deben funcionar SELECT sobre aulas y
-- enrollments sin error 42P17. Confirmar con el smoke test desde la terminal:
--
--   node scripts/db/smoke-test.mjs
--
-- Esperado: 8/8 tablas verificadas y 5/5 policies OK.
-- ============================================================================
