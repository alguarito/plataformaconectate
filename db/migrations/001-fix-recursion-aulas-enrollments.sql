-- ============================================================================
-- Migración 001 · Arreglar recursión infinita en policies de aulas/enrollments
--
-- Problema: la policy de aulas consultaba enrollments y la de enrollments
-- consultaba aulas → ciclo infinito al evaluar SELECT (error 42P17).
--
-- Solución: introducir 2 funciones SECURITY DEFINER que bypassen RLS al
-- consultar internamente. Reemplazar las policies recursivas por llamadas
-- a esas funciones.
--
-- Esta migración es IDEMPOTENTE — se puede correr varias veces sin error.
-- Si ya la aplicaste antes, no pasa nada.
-- ============================================================================

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

drop policy if exists aulas_miembro_lee on public.aulas;
create policy aulas_miembro_lee on public.aulas for select
  using (public.es_miembro_de_aula(auth.uid(), id));

drop policy if exists enrollments_docente on public.enrollments;
create policy enrollments_docente on public.enrollments for select
  using (public.es_docente_del_aula(auth.uid(), aula_id));

drop policy if exists enrollments_docente_admin on public.enrollments;
create policy enrollments_docente_admin on public.enrollments for all
  using (public.es_docente_del_aula(auth.uid(), aula_id))
  with check (public.es_docente_del_aula(auth.uid(), aula_id));

-- Limpiar la policy negativa redundante que causaba conflicto con la de insert
drop policy if exists registros_negar_todo on public.registros_pendientes;

drop policy if exists registros_anon_insert on public.registros_pendientes;
create policy registros_anon_insert on public.registros_pendientes
  for insert
  to anon, authenticated
  with check (true);
