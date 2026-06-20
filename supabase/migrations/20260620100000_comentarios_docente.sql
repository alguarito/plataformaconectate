/**
 * comentarios_docente — retroalimentación del docente por guía y estudiante.
 *
 * Una fila por (docente, estudiante, guía). El docente escribe/edita su comentario;
 * el estudiante puede leerlo desde la página de la guía.
 */

create table if not exists public.comentarios_docente (
  id              uuid primary key default gen_random_uuid(),
  docente_id      uuid not null references auth.users(id) on delete cascade,
  estudiante_id   uuid not null references auth.users(id) on delete cascade,
  guia_clave      text not null,                              -- '8-2-3'
  texto           text not null check (char_length(texto) between 1 and 1000),
  creado_en       timestamptz default now(),
  actualizado_en  timestamptz default now(),
  unique(docente_id, estudiante_id, guia_clave)
);

alter table public.comentarios_docente enable row level security;

-- Docente: CRUD de sus propios comentarios
create policy "comentarios_docente_own_select"
  on public.comentarios_docente for select
  using (docente_id = auth.uid());

create policy "comentarios_docente_own_insert"
  on public.comentarios_docente for insert
  with check (docente_id = auth.uid());

create policy "comentarios_docente_own_update"
  on public.comentarios_docente for update
  using (docente_id = auth.uid());

create policy "comentarios_docente_own_delete"
  on public.comentarios_docente for delete
  using (docente_id = auth.uid());

-- Estudiante: lee comentarios que le dejaron sus docentes
create policy "comentarios_estudiante_read"
  on public.comentarios_docente for select
  using (
    estudiante_id = auth.uid()
    and exists (
      select 1 from public.enrollments e
      join public.aulas a on a.id = e.aula_id
      where e.usuario_id = auth.uid()
        and a.docente_id = public.comentarios_docente.docente_id
    )
  );

-- Trigger: mantiene actualizado_en
create or replace function public.set_comentarios_actualizado_en()
returns trigger language plpgsql as $$
begin
  new.actualizado_en = now();
  return new;
end $$;

create trigger trg_comentarios_actualizado
  before update on public.comentarios_docente
  for each row execute procedure public.set_comentarios_actualizado_en();

-- Índices
create index if not exists idx_comentarios_docente_id
  on public.comentarios_docente(docente_id);

create index if not exists idx_comentarios_estudiante_id
  on public.comentarios_docente(estudiante_id);

create index if not exists idx_comentarios_guia_clave
  on public.comentarios_docente(guia_clave);
