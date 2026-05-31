-- ============================================================================
-- Migración 006 · Tabla progreso_proyecto para tracking de proyectos
--
-- En Fase 1 creamos progreso_guia (granularidad guía). Pero el sistema actual
-- de localStorage también rastrea PROYECTOS integradores como entidad
-- separada (uno por periodo, no por guía).
--
-- Esta migración añade la tabla equivalente en BD para que el sync de Fase 3
-- pueda persistir ambos: progreso_guia + progreso_proyecto.
--
-- IDEMPOTENTE.
-- ============================================================================

create table if not exists public.progreso_proyecto (
  id              bigserial primary key,
  estudiante_id   uuid not null references public.usuarios(id) on delete cascade,
  grado           int not null check (grado between 6 and 11),
  periodo         int not null check (periodo between 1 and 3),
  completada_en   timestamptz not null default now(),
  unique (estudiante_id, grado, periodo)
);

create index if not exists idx_progreso_proyecto_estudiante
  on public.progreso_proyecto(estudiante_id);

-- ----------------------------------------------------------------------------
-- RLS habilitada con policies espejo de progreso_guia
-- ----------------------------------------------------------------------------

alter table public.progreso_proyecto enable row level security;

-- El estudiante ve y muta solo lo suyo (si tiene consentimiento vigente)
drop policy if exists progreso_proyecto_self_select on public.progreso_proyecto;
create policy progreso_proyecto_self_select on public.progreso_proyecto for select
  using (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

drop policy if exists progreso_proyecto_self_insert on public.progreso_proyecto;
create policy progreso_proyecto_self_insert on public.progreso_proyecto for insert
  with check (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

drop policy if exists progreso_proyecto_self_delete on public.progreso_proyecto;
create policy progreso_proyecto_self_delete on public.progreso_proyecto for delete
  using (estudiante_id = auth.uid());

-- El docente ve el progreso de sus estudiantes
drop policy if exists progreso_proyecto_docente on public.progreso_proyecto;
create policy progreso_proyecto_docente on public.progreso_proyecto for select
  using (public.es_docente_de(auth.uid(), estudiante_id));

-- ============================================================================
-- Verificación
-- ============================================================================
--   select tablename, rowsecurity from pg_tables
--   where tablename = 'progreso_proyecto';
--   → 1 fila, rowsecurity = true
-- ============================================================================
