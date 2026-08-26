-- ════════════════════════════════════════════════════════════════════════
-- Censo de conectividad post-sismo · I.E. Sor María Juliana
-- ════════════════════════════════════════════════════════════════════════
--
-- Estos objetos YA EXISTEN en el proyecto (se crearon el 25 de agosto de 2026
-- directamente sobre la base, sin pasar por el repo). Esta migración los
-- documenta como código: es idempotente, así que aplicarla sobre el proyecto
-- actual no cambia nada, y sobre uno nuevo reproduce el censo completo.
--
-- Diseño de acceso —importante, no es un descuido—:
--   · Las dos tablas tienen RLS activo y NINGUNA política. Nadie lee ni
--     escribe directamente, ni siquiera `authenticated`.
--   · Todo pasa por tres funciones SECURITY DEFINER con `search_path = ''`,
--     que son lo único otorgado a `anon`. La verificación de identidad vive
--     en `conectividad_guardar`: compara los últimos 4 dígitos del documento
--     contra el estudiante elegido y rechaza si no coinciden.
--   · Las restricciones CHECK repiten las validaciones de la función. Es
--     deliberado: la función da un mensaje legible, la tabla es la garantía.
--
-- El padrón (1.199 estudiantes, 5 sedes) lo carga el colegio desde el Excel
-- oficial; `fila_excel` es único para poder recargarlo sin duplicar.

-- ─── Padrón ─────────────────────────────────────────────────────────────

create table if not exists public.conectividad_estudiantes (
  id          bigint generated always as identity primary key,
  dane        text    not null,
  ie          text    not null,
  sede        text    not null,
  jornada     text    not null,
  grado       text    not null,
  grupo       text    not null,
  nombre      text    not null,
  documento   text    not null unique,
  fila_excel  integer not null unique
);

create index if not exists conectividad_estudiantes_grupo_idx
  on public.conectividad_estudiantes (sede, jornada, grado, grupo);

-- ─── Respuestas ─────────────────────────────────────────────────────────
--
-- La PK es `estudiante_id`: una respuesta por estudiante, y por eso el
-- `on conflict do update` de la función actualiza en vez de duplicar.

create table if not exists public.conectividad_respuestas (
  estudiante_id  bigint primary key
                 references public.conectividad_estudiantes (id) on delete cascade,
  internet       text not null check (internet in ('Fijo', 'Datos móviles', 'Ninguno')),
  estabilidad    text not null check (estabilidad in ('Estable', 'Intermitente', 'Sin servicio')),
  dispositivo    text not null check (dispositivo in ('Computador', 'Tablet', 'Celular', 'Ninguno')),
  uso            text not null check (uso in ('Exclusivo', 'Compartido')),
  comparte_n     integer not null default 0 check (comparte_n >= 0 and comparte_n <= 20),
  vivienda       text not null check (vivienda in ('Sí', 'No')),
  albergue       text not null check (albergue in ('Sí', 'No')),
  telefono       text check (telefono ~ '^[0-9]{7,12}$'),
  observaciones  text check (char_length(observaciones) <= 600),
  creado_en      timestamptz not null default now(),
  actualizado_en timestamptz not null default now()
);

-- ─── RLS: activo y sin políticas, a propósito ───────────────────────────

alter table public.conectividad_estudiantes enable row level security;
alter table public.conectividad_respuestas  enable row level security;

-- ─── Lectura: los grupos con su avance ──────────────────────────────────

create or replace function public.conectividad_grupos()
returns table (sede text, jornada text, grado text, grupo text, total bigint, respondidos bigint)
language sql
stable
security definer
set search_path to ''
as $$
  select e.sede, e.jornada, e.grado, e.grupo,
         count(*)               as total,
         count(r.estudiante_id) as respondidos
  from public.conectividad_estudiantes e
  left join public.conectividad_respuestas r on r.estudiante_id = e.id
  group by e.sede, e.jornada, e.grado, e.grupo
  order by e.sede, e.jornada, e.grado, e.grupo;
$$;

-- ─── Lectura: estudiantes de un grupo ───────────────────────────────────

create or replace function public.conectividad_estudiantes_de_grupo(
  p_sede text, p_jornada text, p_grado text, p_grupo text
)
returns table (id bigint, nombre text, respondido boolean)
language sql
stable
security definer
set search_path to ''
as $$
  select e.id, e.nombre, (r.estudiante_id is not null) as respondido
  from public.conectividad_estudiantes e
  left join public.conectividad_respuestas r on r.estudiante_id = e.id
  where e.sede = p_sede and e.jornada = p_jornada
    and e.grado = p_grado and e.grupo = p_grupo
  order by e.nombre;
$$;

-- ─── Escritura: valida, verifica identidad y guarda ─────────────────────

create or replace function public.conectividad_guardar(
  p_estudiante_id bigint,
  p_doc4          text,
  p_internet      text,
  p_estabilidad   text,
  p_dispositivo   text,
  p_uso           text,
  p_comparte_n    integer,
  p_vivienda      text,
  p_albergue      text,
  p_telefono      text default null,
  p_observaciones text default null
)
returns jsonb
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_doc      text;
  v_nombre   text;
  v_comparte int;
  v_tel      text;
begin
  select e.documento, e.nombre into v_doc, v_nombre
  from public.conectividad_estudiantes e
  where e.id = p_estudiante_id;

  if v_doc is null then
    return jsonb_build_object('ok', false, 'mensaje', 'El estudiante seleccionado no existe.');
  end if;

  if p_doc4 is null or right(v_doc, 4) <> regexp_replace(p_doc4, '\D', '', 'g') then
    return jsonb_build_object('ok', false,
      'mensaje', 'Los últimos 4 dígitos del documento no coinciden con el estudiante seleccionado.');
  end if;

  if p_internet    not in ('Fijo','Datos móviles','Ninguno')       then return jsonb_build_object('ok', false, 'mensaje', 'Acceso a internet inválido.'); end if;
  if p_estabilidad not in ('Estable','Intermitente','Sin servicio') then return jsonb_build_object('ok', false, 'mensaje', 'Estabilidad inválida.'); end if;
  if p_dispositivo not in ('Computador','Tablet','Celular','Ninguno') then return jsonb_build_object('ok', false, 'mensaje', 'Dispositivo inválido.'); end if;
  if p_uso         not in ('Exclusivo','Compartido')               then return jsonb_build_object('ok', false, 'mensaje', 'Uso del dispositivo inválido.'); end if;
  if p_vivienda    not in ('Sí','No')                              then return jsonb_build_object('ok', false, 'mensaje', 'Vivienda afectada inválida.'); end if;
  if p_albergue    not in ('Sí','No')                              then return jsonb_build_object('ok', false, 'mensaje', 'Albergue temporal inválido.'); end if;

  v_comparte := case when p_uso = 'Exclusivo' then 0
                     else greatest(0, least(20, coalesce(p_comparte_n, 0))) end;
  if p_uso = 'Compartido' and v_comparte < 1 then
    return jsonb_build_object('ok', false, 'mensaje', 'Indique con cuántas personas comparte el dispositivo.');
  end if;

  v_tel := nullif(regexp_replace(coalesce(p_telefono, ''), '\D', '', 'g'), '');
  if v_tel is not null and v_tel !~ '^[0-9]{7,12}$' then
    return jsonb_build_object('ok', false, 'mensaje', 'El teléfono debe tener entre 7 y 12 dígitos.');
  end if;

  insert into public.conectividad_respuestas as r
    (estudiante_id, internet, estabilidad, dispositivo, uso, comparte_n,
     vivienda, albergue, telefono, observaciones)
  values
    (p_estudiante_id, p_internet, p_estabilidad, p_dispositivo, p_uso, v_comparte,
     p_vivienda, p_albergue, v_tel, nullif(left(coalesce(p_observaciones, ''), 600), ''))
  on conflict (estudiante_id) do update set
    internet = excluded.internet, estabilidad = excluded.estabilidad,
    dispositivo = excluded.dispositivo, uso = excluded.uso,
    comparte_n = excluded.comparte_n, vivienda = excluded.vivienda,
    albergue = excluded.albergue, telefono = excluded.telefono,
    observaciones = excluded.observaciones, actualizado_en = now();

  return jsonb_build_object('ok', true, 'mensaje', 'Registro guardado.', 'nombre', v_nombre);
end;
$$;

-- ─── Permisos: solo las tres funciones, y solo ejecutar ─────────────────

grant execute on function public.conectividad_grupos()                                to anon, authenticated;
grant execute on function public.conectividad_estudiantes_de_grupo(text, text, text, text) to anon, authenticated;
grant execute on function public.conectividad_guardar(bigint, text, text, text, text, text, integer, text, text, text, text) to anon, authenticated;
