-- ============================================================================
-- Plataforma Conéctate · Proyecto Supabase "ConcienciA"
-- Esquema de base de datos · Fase 1 (MVP)
--
-- Versión: 2026.05
-- Autor:   Dr. Álvaro Cárdenas Orozco
-- Aplica:  PostgreSQL 15+ (Supabase)
--
-- Este archivo es IDEMPOTENTE: puede aplicarse varias veces sin error.
-- NO contiene DROP TABLE — para reiniciar limpio ver db/README.md.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Extensiones requeridas
-- ----------------------------------------------------------------------------

create extension if not exists "pgcrypto"; -- para gen_random_uuid()

-- ----------------------------------------------------------------------------
-- 2. Tipos enumerados
-- ----------------------------------------------------------------------------

do $$ begin
  create type rol_enrollment as enum ('student', 'teacher', 'observer');
exception when duplicate_object then null; end $$;

do $$ begin
  create type estado_registro as enum ('pendiente', 'firmado', 'expirado', 'rechazado');
exception when duplicate_object then null; end $$;

do $$ begin
  create type tipo_evento_arco as enum (
    'acceso', 'rectificacion', 'cancelacion', 'oposicion', 'revocacion'
  );
exception when duplicate_object then null; end $$;

-- ----------------------------------------------------------------------------
-- 3. Tabla: usuarios
--    Perfil público asociado a cada cuenta de auth.users (Supabase Auth).
--    NO incluye email ni datos de menor — solo display_name + edad.
-- ----------------------------------------------------------------------------

create table if not exists public.usuarios (
  id              uuid primary key references auth.users(id) on delete cascade,
  display_name    text not null check (char_length(display_name) between 1 and 80),
  fecha_nacimiento date,
  creado_en       timestamptz not null default now(),
  actualizado_en  timestamptz not null default now()
);

create index if not exists idx_usuarios_creado_en on public.usuarios(creado_en);

-- Trigger para actualizado_en
create or replace function public.touch_actualizado_en() returns trigger as $$
begin
  new.actualizado_en := now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_usuarios_touch on public.usuarios;
create trigger trg_usuarios_touch before update on public.usuarios
  for each row execute function public.touch_actualizado_en();

-- ----------------------------------------------------------------------------
-- 4. Tabla: aulas
--    Grupos del docente. Un docente puede tener varias aulas por año.
-- ----------------------------------------------------------------------------

create table if not exists public.aulas (
  id              uuid primary key default gen_random_uuid(),
  docente_id      uuid not null references public.usuarios(id) on delete cascade,
  grado           int not null check (grado between 6 and 11),
  periodo         int not null check (periodo between 1 and 3),
  ano             int not null check (ano between 2025 and 2099),
  codigo_acceso   text not null unique check (char_length(codigo_acceso) between 4 and 16),
  nombre          text,
  creado_en       timestamptz not null default now()
);

create index if not exists idx_aulas_docente on public.aulas(docente_id);
create index if not exists idx_aulas_codigo on public.aulas(codigo_acceso);

-- ----------------------------------------------------------------------------
-- 5. Tabla: enrollments
--    Vínculo entre un usuario y un aula con su rol.
--    Modelo Canvas-lite: el rol vive aquí, no en usuarios.
-- ----------------------------------------------------------------------------

create table if not exists public.enrollments (
  id                  bigserial primary key,
  usuario_id          uuid not null references public.usuarios(id) on delete cascade,
  aula_id             uuid not null references public.aulas(id) on delete cascade,
  rol                 rol_enrollment not null,
  associated_user_id  uuid references public.usuarios(id) on delete set null,
  creado_en           timestamptz not null default now(),
  unique (usuario_id, aula_id)
);

create index if not exists idx_enrollments_usuario on public.enrollments(usuario_id);
create index if not exists idx_enrollments_aula on public.enrollments(aula_id);
create index if not exists idx_enrollments_aula_rol on public.enrollments(aula_id, rol);

-- ----------------------------------------------------------------------------
-- 6. Tabla: progreso_guia
--    Una fila por (estudiante, guía).
--    guia_clave usa el formato '{grado}-{periodo}-{sesion}' ej. '6-3-9'.
-- ----------------------------------------------------------------------------

create table if not exists public.progreso_guia (
  id              bigserial primary key,
  estudiante_id   uuid not null references public.usuarios(id) on delete cascade,
  guia_clave      text not null check (guia_clave ~ '^(6|7|8|9|10|11)-[1-3]-[0-9]+$'),
  porcentaje      int not null default 0 check (porcentaje between 0 and 100),
  ultima_estacion text,
  completada_en   timestamptz,
  actualizado_en  timestamptz not null default now(),
  unique (estudiante_id, guia_clave)
);

create index if not exists idx_progreso_estudiante on public.progreso_guia(estudiante_id);
create index if not exists idx_progreso_guia_clave on public.progreso_guia(guia_clave);

drop trigger if exists trg_progreso_touch on public.progreso_guia;
create trigger trg_progreso_touch before update on public.progreso_guia
  for each row execute function public.touch_actualizado_en();

-- ----------------------------------------------------------------------------
-- 7. Tabla: intentos_quiz
--    Histórico de intentos. respuestas en JSONB para flexibilidad.
-- ----------------------------------------------------------------------------

create table if not exists public.intentos_quiz (
  id              bigserial primary key,
  estudiante_id   uuid not null references public.usuarios(id) on delete cascade,
  guia_clave      text not null,
  quiz_id         text not null,
  respuestas      jsonb not null,
  puntaje         numeric(5,2) check (puntaje between 0 and 100),
  duracion_seg    int check (duracion_seg >= 0),
  realizado_en    timestamptz not null default now()
);

create index if not exists idx_intentos_estudiante on public.intentos_quiz(estudiante_id);
create index if not exists idx_intentos_quiz_id on public.intentos_quiz(quiz_id);
create index if not exists idx_intentos_realizado on public.intentos_quiz(realizado_en desc);

-- ----------------------------------------------------------------------------
-- 8. Tabla: registros_pendientes
--    Estado temporal del flujo de registro (mientras el acudiente firma).
--    Una fila se borra cuando la cuenta queda activa, o se marca 'expirado'.
-- ----------------------------------------------------------------------------

create table if not exists public.registros_pendientes (
  id                          uuid primary key default gen_random_uuid(),
  codigo_aula                 text not null,
  estudiante_display_name     text not null,
  estudiante_fecha_nacimiento date not null,
  acudiente_email             text not null check (acudiente_email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  otp_hash                    text,
  otp_expira_en               timestamptz,
  estado                      estado_registro not null default 'pendiente',
  creado_en                   timestamptz not null default now()
);

create index if not exists idx_registros_codigo on public.registros_pendientes(codigo_aula);
create index if not exists idx_registros_estado on public.registros_pendientes(estado);

-- ----------------------------------------------------------------------------
-- 9. Tabla: consentimientos_plataforma
--    Prueba legal del consentimiento firmado por el acudiente (Ley 1581).
--    Conservar 5 años después del último año lectivo (art. 28 Dec. 1377).
-- ----------------------------------------------------------------------------

create table if not exists public.consentimientos_plataforma (
  id                    bigserial primary key,
  estudiante_id         uuid not null references public.usuarios(id) on delete cascade,
  acudiente_nombre      text not null,
  acudiente_cc          text not null,
  acudiente_email       text not null,
  acudiente_parentesco  text not null check (acudiente_parentesco in ('padre', 'madre', 'tutor')),
  version_politica      text not null,
  finalidades           text[] not null,
  ano_lectivo           int not null,
  ip_firma              inet,
  user_agent_firma      text,
  firmado_en            timestamptz not null default now(),
  revocado_en           timestamptz,
  motivo_revocacion     text
);

create index if not exists idx_consent_estudiante_activo
  on public.consentimientos_plataforma(estudiante_id) where revocado_en is null;
create index if not exists idx_consent_ano on public.consentimientos_plataforma(ano_lectivo);

-- ----------------------------------------------------------------------------
-- 10. Tabla: eventos_arco
--     Auditoría de cada ejercicio de derechos ARCO por parte del titular.
-- ----------------------------------------------------------------------------

create table if not exists public.eventos_arco (
  id              bigserial primary key,
  estudiante_id   uuid not null references public.usuarios(id) on delete cascade,
  tipo            tipo_evento_arco not null,
  detalle         text,
  ejecutado_en    timestamptz not null default now()
);

create index if not exists idx_arco_estudiante on public.eventos_arco(estudiante_id);
create index if not exists idx_arco_ejecutado on public.eventos_arco(ejecutado_en desc);

-- ----------------------------------------------------------------------------
-- 11. Función helper: ¿hay consentimiento vigente para este estudiante?
--     Usada por las políticas RLS de progreso_guia e intentos_quiz.
-- ----------------------------------------------------------------------------

create or replace function public.tiene_consentimiento_vigente(_estudiante_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.consentimientos_plataforma
    where estudiante_id = _estudiante_id
      and revocado_en is null
  );
$$;

-- ----------------------------------------------------------------------------
-- 12. Función helper: ¿es docente del aula donde está el estudiante?
-- ----------------------------------------------------------------------------

create or replace function public.es_docente_de(_docente_id uuid, _estudiante_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.enrollments e_doc
    join public.enrollments e_est on e_est.aula_id = e_doc.aula_id
    where e_doc.usuario_id = _docente_id
      and e_doc.rol = 'teacher'
      and e_est.usuario_id = _estudiante_id
      and e_est.rol = 'student'
  );
$$;

-- ----------------------------------------------------------------------------
-- 13. Funciones helper para romper recursión RLS entre aulas y enrollments
--     Sin estas, una policy en aulas que consulte enrollments + una policy
--     en enrollments que consulte aulas crean un ciclo infinito (error 42P17).
--     SECURITY DEFINER bypassa RLS dentro de la función.
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

-- ============================================================================
-- Fin de schema.sql
-- Siguiente paso: aplicar db/policies.sql para activar Row Level Security.
-- ============================================================================
