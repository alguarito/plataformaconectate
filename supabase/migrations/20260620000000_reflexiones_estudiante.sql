/**
 * reflexiones_estudiante — captura digital del bloque 💭 de cada guía.
 *
 * Una fila por (estudiante, guía). Upsert en autosave.
 * RLS: estudiante ve/edita solo las suyas; docente las lee (via aulas).
 */

create table if not exists public.reflexiones_estudiante (
  id              uuid primary key default gen_random_uuid(),
  estudiante_id   uuid not null references auth.users(id) on delete cascade,
  guia_clave      text not null,                              -- '8-2-3'
  texto           text not null check (char_length(texto) between 1 and 800),
  creado_en       timestamptz default now(),
  actualizado_en  timestamptz default now(),
  unique(estudiante_id, guia_clave)
);

alter table public.reflexiones_estudiante enable row level security;

-- Estudiante: sus propias reflexiones
create policy "reflexiones_select_own"
  on public.reflexiones_estudiante for select
  using (estudiante_id = auth.uid());

create policy "reflexiones_insert_own"
  on public.reflexiones_estudiante for insert
  with check (estudiante_id = auth.uid());

create policy "reflexiones_update_own"
  on public.reflexiones_estudiante for update
  using (estudiante_id = auth.uid());

-- Docente: lee reflexiones de estudiantes de sus aulas (para informe individual)
create policy "reflexiones_docente_read"
  on public.reflexiones_estudiante for select
  using (
    exists (
      select 1 from public.enrollments e
      join public.aulas a on a.id = e.aula_id
      where e.usuario_id = public.reflexiones_estudiante.estudiante_id
        and a.docente_id = auth.uid()
    )
  );

-- Trigger: mantiene actualizado_en
create or replace function public.set_reflexiones_actualizado_en()
returns trigger language plpgsql as $$
begin
  new.actualizado_en = now();
  return new;
end $$;

create trigger trg_reflexiones_actualizado
  before update on public.reflexiones_estudiante
  for each row execute procedure public.set_reflexiones_actualizado_en();

-- Índice para lookup rápido por docente (join sobre aulas_estudiantes)
create index if not exists idx_reflexiones_estudiante_id
  on public.reflexiones_estudiante(estudiante_id);
