-- ============================================================================
-- Plataforma Conéctate · Proyecto Supabase "ConcienciA"
-- Políticas Row Level Security · Fase 1 (MVP)
--
-- Versión: 2026.05
-- Aplicar DESPUÉS de schema.sql.
--
-- Este archivo es IDEMPOTENTE: usa "drop policy if exists" antes de cada create.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Habilitar RLS en todas las tablas con datos personales
-- ----------------------------------------------------------------------------

alter table public.usuarios                  enable row level security;
alter table public.aulas                     enable row level security;
alter table public.enrollments               enable row level security;
alter table public.progreso_guia             enable row level security;
alter table public.intentos_quiz             enable row level security;
alter table public.registros_pendientes      enable row level security;
alter table public.consentimientos_plataforma enable row level security;
alter table public.eventos_arco              enable row level security;

-- ============================================================================
-- 2. Políticas para usuarios
-- ============================================================================

-- Un usuario ve y edita solo su propia fila.
drop policy if exists usuarios_self_select on public.usuarios;
create policy usuarios_self_select on public.usuarios for select
  using (id = auth.uid());

drop policy if exists usuarios_self_update on public.usuarios;
create policy usuarios_self_update on public.usuarios for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- El docente ve a estudiantes que están en aulas que él tiene.
drop policy if exists usuarios_docente_ve_clase on public.usuarios;
create policy usuarios_docente_ve_clase on public.usuarios for select
  using (
    public.es_docente_de(auth.uid(), id)
  );

-- ============================================================================
-- 3. Políticas para aulas
-- ============================================================================

-- El docente ve y administra solo sus aulas.
drop policy if exists aulas_docente_propietario on public.aulas;
create policy aulas_docente_propietario on public.aulas for all
  using (docente_id = auth.uid())
  with check (docente_id = auth.uid());

-- Cualquier usuario autenticado puede ver el aula a la que pertenece (para mostrar el nombre).
-- Usa función SECURITY DEFINER para evitar recursión con la policy de enrollments.
drop policy if exists aulas_miembro_lee on public.aulas;
create policy aulas_miembro_lee on public.aulas for select
  using (public.es_miembro_de_aula(auth.uid(), id));

-- ============================================================================
-- 4. Políticas para enrollments
-- ============================================================================

-- Un usuario ve sus propios enrollments.
drop policy if exists enrollments_self on public.enrollments;
create policy enrollments_self on public.enrollments for select
  using (usuario_id = auth.uid());

-- El docente ve los enrollments de sus aulas (usa función SECURITY DEFINER).
drop policy if exists enrollments_docente on public.enrollments;
create policy enrollments_docente on public.enrollments for select
  using (public.es_docente_del_aula(auth.uid(), aula_id));

-- El docente puede crear/eliminar enrollments de sus aulas.
drop policy if exists enrollments_docente_admin on public.enrollments;
create policy enrollments_docente_admin on public.enrollments for all
  using (public.es_docente_del_aula(auth.uid(), aula_id))
  with check (public.es_docente_del_aula(auth.uid(), aula_id));

-- ============================================================================
-- 5. Políticas para progreso_guia
--    Acceso bloqueado si el consentimiento está revocado.
-- ============================================================================

-- El estudiante ve y actualiza solo su propio progreso, SI tiene consentimiento vigente.
drop policy if exists progreso_self_select on public.progreso_guia;
create policy progreso_self_select on public.progreso_guia for select
  using (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

drop policy if exists progreso_self_upsert on public.progreso_guia;
create policy progreso_self_upsert on public.progreso_guia for insert
  with check (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

drop policy if exists progreso_self_update on public.progreso_guia;
create policy progreso_self_update on public.progreso_guia for update
  using (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  )
  with check (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

-- El docente ve el progreso de sus estudiantes (sin restricción de consentimiento
-- porque si no hay consentimiento el estudiante nunca aparece enrollado).
drop policy if exists progreso_docente on public.progreso_guia;
create policy progreso_docente on public.progreso_guia for select
  using (
    public.es_docente_de(auth.uid(), estudiante_id)
  );

-- ============================================================================
-- 6. Políticas para intentos_quiz
-- ============================================================================

-- El estudiante ve sus propios intentos.
drop policy if exists intentos_self_select on public.intentos_quiz;
create policy intentos_self_select on public.intentos_quiz for select
  using (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

-- El estudiante registra sus propios intentos.
drop policy if exists intentos_self_insert on public.intentos_quiz;
create policy intentos_self_insert on public.intentos_quiz for insert
  with check (
    estudiante_id = auth.uid()
    and public.tiene_consentimiento_vigente(estudiante_id)
  );

-- El docente ve los intentos de sus estudiantes.
drop policy if exists intentos_docente on public.intentos_quiz;
create policy intentos_docente on public.intentos_quiz for select
  using (
    public.es_docente_de(auth.uid(), estudiante_id)
  );

-- ============================================================================
-- 7. Políticas para registros_pendientes
--    No requieren auth.uid() porque el acudiente firma SIN cuenta previa.
--    El acceso se hace por id + OTP desde el backend, no desde el cliente.
-- ============================================================================

-- El cliente anónimo puede crear un registro (al ingresar el código de aula).
-- Roles explícitos: anon (visitante sin sesión) y authenticated.
-- No agregamos policies de SELECT/UPDATE/DELETE adrede: el acceso de lectura
-- vive en el backend con service_role (privacidad).
drop policy if exists registros_anon_insert on public.registros_pendientes;
create policy registros_anon_insert on public.registros_pendientes
  for insert
  to anon, authenticated
  with check (true);

-- ============================================================================
-- 8. Políticas para consentimientos_plataforma
-- ============================================================================

-- El estudiante puede ver su propio consentimiento (para mostrar el estado en /cuenta).
drop policy if exists consent_estudiante_lee on public.consentimientos_plataforma;
create policy consent_estudiante_lee on public.consentimientos_plataforma for select
  using (estudiante_id = auth.uid());

-- El docente ve los consentimientos de sus estudiantes (para mostrar en dashboard).
drop policy if exists consent_docente_lee on public.consentimientos_plataforma;
create policy consent_docente_lee on public.consentimientos_plataforma for select
  using (
    public.es_docente_de(auth.uid(), estudiante_id)
  );

-- El estudiante puede revocar SU PROPIO consentimiento (campo revocado_en).
drop policy if exists consent_estudiante_revoca on public.consentimientos_plataforma;
create policy consent_estudiante_revoca on public.consentimientos_plataforma for update
  using (estudiante_id = auth.uid())
  with check (estudiante_id = auth.uid());

-- ============================================================================
-- 9. Políticas para eventos_arco
-- ============================================================================

-- El estudiante ve sus propios eventos ARCO.
drop policy if exists arco_self_lee on public.eventos_arco;
create policy arco_self_lee on public.eventos_arco for select
  using (estudiante_id = auth.uid());

-- El estudiante registra sus propios eventos (cuando ejerce un derecho).
drop policy if exists arco_self_insert on public.eventos_arco;
create policy arco_self_insert on public.eventos_arco for insert
  with check (estudiante_id = auth.uid());

-- El docente ve los eventos ARCO de sus estudiantes (auditoría).
drop policy if exists arco_docente_lee on public.eventos_arco;
create policy arco_docente_lee on public.eventos_arco for select
  using (
    public.es_docente_de(auth.uid(), estudiante_id)
  );

-- ============================================================================
-- Verificación post-aplicación
-- ============================================================================
-- Después de correr este script, verificar que TODAS las tablas tienen RLS:
--
--   select tablename, rowsecurity
--   from pg_tables
--   where schemaname = 'public'
--   order by tablename;
--
-- rowsecurity debe ser 't' para las 8 tablas.
-- ============================================================================
