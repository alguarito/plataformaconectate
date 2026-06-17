-- Informes del docente · RPCs de agregación
--
-- Funciones SECURITY DEFINER que agregan la actividad de los estudiantes del
-- docente autenticado, scoping SIEMPRE por auth.uid() (el docente solo ve sus
-- aulas). Las funciones AGREGADAS no devuelven nombres (vista institucional
-- anónima); solo estudiantes_en_riesgo expone display_name porque es una vista
-- accionable del propio docente.
--
-- Convención de guia_clave: '{grado}-{periodo}-{sesion}'.
-- Patrón base copiado de 20260616000001_rpcs_registro.sql.

-- ───────────────────────────────────────────────────────────────────────────
-- 1. Años lectivos con aulas del docente (para el selector de año)
-- ───────────────────────────────────────────────────────────────────────────
create or replace function public.anos_disponibles()
returns table(ano int, aulas int)
language sql stable security definer set search_path = public as $$
  select a.ano, count(*)::int
  from public.aulas a
  where a.docente_id = auth.uid()
  group by a.ano
  order by a.ano desc;
$$;
grant execute on function public.anos_disponibles() to authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 2. Resumen global del docente (KPIs del panel general)
-- ───────────────────────────────────────────────────────────────────────────
create or replace function public.resumen_docente(_ano int default null)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare
  result jsonb;
begin
  with mis_aulas as (
    select id from public.aulas
    where docente_id = auth.uid() and (_ano is null or ano = _ano)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  ),
  pg as (
    select * from public.progreso_guia
    where estudiante_id in (select usuario_id from mis_estudiantes)
  ),
  iq as (
    select * from public.intentos_quiz
    where estudiante_id in (select usuario_id from mis_estudiantes)
  ),
  actividad as (
    select me.usuario_id,
      greatest(
        coalesce((select max(actualizado_en) from pg where pg.estudiante_id = me.usuario_id), 'epoch'),
        coalesce((select max(realizado_en)   from iq where iq.estudiante_id = me.usuario_id), 'epoch')
      ) as ultima,
      coalesce((select round(avg(porcentaje)) from pg where pg.estudiante_id = me.usuario_id), 0) as prog
    from mis_estudiantes me
  )
  select jsonb_build_object(
    'aulas',              (select count(*) from mis_aulas),
    'estudiantes',        (select count(*) from mis_estudiantes),
    'con_consentimiento', (select count(*) from mis_estudiantes me where public.tiene_consentimiento_vigente(me.usuario_id)),
    'guias_iniciadas',    (select count(*) from pg),
    'guias_completadas',  (select count(*) from pg where completada_en is not null),
    'progreso_promedio',  (select coalesce(round(avg(porcentaje)), 0) from pg),
    'quiz_intentos',      (select count(*) from iq),
    'quiz_promedio',      (select round(avg(puntaje), 1) from iq where puntaje is not null),
    'activos_7d',         (select count(*) from actividad where ultima > now() - interval '7 days'),
    'activos_30d',        (select count(*) from actividad where ultima > now() - interval '30 days'),
    'inactivos',          (select count(*) from actividad where ultima <= now() - interval '14 days'),
    'en_riesgo',          (select count(*) from actividad where prog < 25)
  ) into result;
  return coalesce(result, '{}'::jsonb);
end;
$$;
grant execute on function public.resumen_docente(int) to authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 3. Embudo de registro (registros_pendientes por estado + conversión)
-- ───────────────────────────────────────────────────────────────────────────
create or replace function public.embudo_registro(_ano int default null)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare
  result jsonb;
begin
  with mis_codigos as (
    select codigo_acceso from public.aulas
    where docente_id = auth.uid() and (_ano is null or ano = _ano)
  ),
  rp as (
    select * from public.registros_pendientes
    where codigo_aula in (select codigo_acceso from mis_codigos)
  )
  select jsonb_build_object(
    'pendiente',       (select count(*) from rp where estado = 'pendiente'),
    'firmado',         (select count(*) from rp where estado = 'firmado'),
    'expirado',        (select count(*) from rp where estado = 'expirado'),
    'rechazado',       (select count(*) from rp where estado = 'rechazado'),
    'total',           (select count(*) from rp),
    'tasa_conversion', (select case when count(*) > 0
                          then round(100.0 * count(*) filter (where estado = 'firmado') / count(*), 1)
                          else 0 end from rp),
    'auto',            (select count(*) from rp where tipo_registro = 'auto'),
    'acudiente',       (select count(*) from rp where tipo_registro = 'acudiente')
  ) into result;
  return coalesce(result, '{}'::jsonb);
end;
$$;
grant execute on function public.embudo_registro(int) to authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 4. Serie temporal de actividad (para gráfico de línea/área)
--    _bucket: 'week' (default) o 'day'.
-- ───────────────────────────────────────────────────────────────────────────
create or replace function public.serie_actividad(
  _desde date, _hasta date, _bucket text default 'week', _grado int default null
)
returns table(periodo_inicio date, guias_actividad int, quiz_intentos int, estudiantes_activos int)
language sql stable security definer set search_path = public as $$
  with mis_aulas as (
    select id from public.aulas
    where docente_id = auth.uid() and (_grado is null or grado = _grado)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  ),
  eventos as (
    select date_trunc(_bucket, actualizado_en)::date as bucket, estudiante_id, 'guia'::text as tipo
    from public.progreso_guia
    where estudiante_id in (select usuario_id from mis_estudiantes)
      and actualizado_en::date between _desde and _hasta
    union all
    select date_trunc(_bucket, realizado_en)::date, estudiante_id, 'quiz'::text
    from public.intentos_quiz
    where estudiante_id in (select usuario_id from mis_estudiantes)
      and realizado_en::date between _desde and _hasta
  )
  select bucket as periodo_inicio,
    count(*) filter (where tipo = 'guia')::int as guias_actividad,
    count(*) filter (where tipo = 'quiz')::int as quiz_intentos,
    count(distinct estudiante_id)::int as estudiantes_activos
  from eventos
  group by bucket
  order by bucket;
$$;
grant execute on function public.serie_actividad(date, date, text, int) to authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 5. Estudiantes que necesitan atención (riesgo o inactividad)
--    Expone display_name: vista accionable del docente (RLS ya lo permite).
-- ───────────────────────────────────────────────────────────────────────────
create or replace function public.estudiantes_en_riesgo(_ano int default null, _grado int default null)
returns table(
  estudiante_id uuid, display_name text,
  progreso_promedio numeric, ultima_actividad timestamptz, dias_inactivo int
)
language sql stable security definer set search_path = public as $$
  with mis_aulas as (
    select id from public.aulas
    where docente_id = auth.uid()
      and (_ano is null or ano = _ano)
      and (_grado is null or grado = _grado)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  ),
  metricas as (
    select me.usuario_id,
      coalesce((select round(avg(porcentaje)) from public.progreso_guia where estudiante_id = me.usuario_id), 0) as prog,
      greatest(
        coalesce((select max(actualizado_en) from public.progreso_guia where estudiante_id = me.usuario_id), 'epoch'),
        coalesce((select max(realizado_en)   from public.intentos_quiz where estudiante_id = me.usuario_id), 'epoch')
      ) as ultima
    from mis_estudiantes me
  )
  select m.usuario_id, u.display_name, m.prog,
    nullif(m.ultima, 'epoch') as ultima_actividad,
    case when m.ultima = 'epoch' then null
         else extract(day from now() - m.ultima)::int end as dias_inactivo
  from metricas m
  join public.usuarios u on u.id = m.usuario_id
  where m.prog < 25 or m.ultima <= now() - interval '14 days'
  order by m.prog asc, ultima_actividad asc nulls first
  limit 50;
$$;
grant execute on function public.estudiantes_en_riesgo(int, int) to authenticated;
