-- Informes PR-2 · RPCs de cortes por grado y periodo
--
-- Mismo patrón SECURITY DEFINER de 20260617000000_informes_agregacion.sql:
-- scope siempre por auth.uid(), sin nombres en las agregadas, grant a authenticated.
--
-- guia_clave formato: '{grado}-{periodo}-{sesion}' → split_part(clave,'-',N)::int

-- ─────────────────────────────────────────────────────────────────────────────
-- 6. Resumen por grado (comparativa entre grados del docente, sin nombres)
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.resumen_por_grado(_ano int default null)
returns table(
  grado             int,
  aulas             int,
  estudiantes       int,
  guias_completadas int,
  progreso_promedio numeric,
  quiz_intentos     int,
  quiz_promedio     numeric,
  activos_30d       int
)
language plpgsql stable security definer set search_path = public as $$
begin
  return query
  with mis_aulas as (
    select id, grado from public.aulas
    where docente_id = auth.uid()
      and (_ano is null or ano = _ano)
  ),
  mis_enroll as (
    select distinct e.usuario_id, a.grado
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  ),
  ultima_act as (
    select me.usuario_id, me.grado,
      greatest(
        coalesce(max(pg.actualizado_en),    'epoch'::timestamptz),
        coalesce(max(iq.realizado_en::timestamptz), 'epoch'::timestamptz)
      ) as ultima
    from mis_enroll me
    left join public.progreso_guia pg on pg.estudiante_id = me.usuario_id
    left join public.intentos_quiz  iq on iq.estudiante_id = me.usuario_id
    group by me.usuario_id, me.grado
  )
  select
    me.grado,
    (select count(distinct id)::int from mis_aulas ma2 where ma2.grado = me.grado) as aulas,
    count(distinct me.usuario_id)::int                               as estudiantes,
    count(pg.id) filter (where pg.completada_en is not null)::int    as guias_completadas,
    coalesce(round(avg(pg.porcentaje)), 0)                           as progreso_promedio,
    count(iq.id)::int                                                as quiz_intentos,
    round(avg(iq.puntaje) filter (where iq.puntaje is not null), 1)  as quiz_promedio,
    (select count(ua2.usuario_id)::int
     from ultima_act ua2
     where ua2.grado = me.grado
       and ua2.ultima > now() - interval '30 days')                  as activos_30d
  from mis_enroll me
  left join public.progreso_guia pg on pg.estudiante_id = me.usuario_id
  left join public.intentos_quiz  iq on iq.estudiante_id = me.usuario_id
  group by me.grado
  order by me.grado;
end;
$$;
grant execute on function public.resumen_por_grado(int) to authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 7. Resumen por periodo (comparativa entre periodos; filtra por grado opcional)
--    progreso y quizzes acotados al periodo de la aula (split_part por guia_clave)
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.resumen_por_periodo(
  _ano   int default null,
  _grado int default null
)
returns table(
  periodo           int,
  aulas             int,
  estudiantes       int,
  guias_completadas int,
  progreso_promedio numeric,
  quiz_intentos     int,
  quiz_promedio     numeric
)
language plpgsql stable security definer set search_path = public as $$
begin
  return query
  with mis_aulas as (
    select id, periodo from public.aulas
    where docente_id = auth.uid()
      and (_ano   is null or ano   = _ano)
      and (_grado is null or grado = _grado)
  ),
  mis_enroll as (
    select distinct e.usuario_id, a.periodo
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  )
  select
    me.periodo,
    (select count(distinct id)::int from mis_aulas ma2 where ma2.periodo = me.periodo) as aulas,
    count(distinct me.usuario_id)::int as estudiantes,
    count(pg.id) filter (
      where pg.completada_en is not null
        and split_part(pg.guia_clave, '-', 2)::int = me.periodo
    )::int as guias_completadas,
    coalesce(round(avg(pg.porcentaje) filter (
      where split_part(pg.guia_clave, '-', 2)::int = me.periodo
    )), 0) as progreso_promedio,
    count(iq.id) filter (
      where split_part(iq.guia_clave, '-', 2)::int = me.periodo
    )::int as quiz_intentos,
    round(avg(iq.puntaje) filter (
      where iq.puntaje is not null
        and split_part(iq.guia_clave, '-', 2)::int = me.periodo
    ), 1) as quiz_promedio
  from mis_enroll me
  left join public.progreso_guia pg on pg.estudiante_id = me.usuario_id
  left join public.intentos_quiz  iq on iq.estudiante_id = me.usuario_id
  group by me.periodo
  order by me.periodo;
end;
$$;
grant execute on function public.resumen_por_periodo(int, int) to authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 8. Cobertura de guías (para heatmap: qué guías trabajaron los estudiantes)
--    No devuelve nombres; filtra opcionalmente por año y grado del aula.
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.cobertura_guias(
  _ano   int default null,
  _grado int default null
)
returns table(
  guia_clave        text,
  grado             int,
  periodo           int,
  sesion            int,
  con_progreso      int,
  completadas       int,
  progreso_promedio numeric
)
language plpgsql stable security definer set search_path = public as $$
begin
  return query
  with mis_aulas as (
    select id from public.aulas
    where docente_id = auth.uid()
      and (_ano   is null or ano   = _ano)
      and (_grado is null or grado = _grado)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  )
  select
    pg.guia_clave,
    split_part(pg.guia_clave, '-', 1)::int                          as grado,
    split_part(pg.guia_clave, '-', 2)::int                          as periodo,
    split_part(pg.guia_clave, '-', 3)::int                          as sesion,
    count(distinct pg.estudiante_id)::int                            as con_progreso,
    count(distinct pg.estudiante_id) filter (where pg.completada_en is not null)::int as completadas,
    coalesce(round(avg(pg.porcentaje)), 0)                           as progreso_promedio
  from public.progreso_guia pg
  where pg.estudiante_id in (select usuario_id from mis_estudiantes)
  group by pg.guia_clave
  order by
    split_part(pg.guia_clave, '-', 1)::int,
    split_part(pg.guia_clave, '-', 2)::int,
    split_part(pg.guia_clave, '-', 3)::int;
end;
$$;
grant execute on function public.cobertura_guias(int, int) to authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 9. Desempeño en exámenes (estadísticas por quiz_id, sin nombres)
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.desempeno_examenes(
  _ano   int default null,
  _grado int default null
)
returns table(
  quiz_id        text,
  guia_clave     text,
  total_intentos int,
  promedio       numeric,
  aprobados      int,
  p25            numeric,
  p50            numeric,
  p75            numeric
)
language plpgsql stable security definer set search_path = public as $$
begin
  return query
  with mis_aulas as (
    select id from public.aulas
    where docente_id = auth.uid()
      and (_ano   is null or ano   = _ano)
      and (_grado is null or grado = _grado)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  )
  select
    iq.quiz_id,
    iq.guia_clave,
    count(*)::int                                                         as total_intentos,
    round(avg(iq.puntaje), 1)                                             as promedio,
    count(*) filter (where iq.puntaje >= 60)::int                         as aprobados,
    round(percentile_cont(0.25) within group (order by iq.puntaje), 1)   as p25,
    round(percentile_cont(0.50) within group (order by iq.puntaje), 1)   as p50,
    round(percentile_cont(0.75) within group (order by iq.puntaje), 1)   as p75
  from public.intentos_quiz iq
  where iq.estudiante_id in (select usuario_id from mis_estudiantes)
    and iq.puntaje is not null
  group by iq.quiz_id, iq.guia_clave
  order by iq.guia_clave, iq.quiz_id;
end;
$$;
grant execute on function public.desempeno_examenes(int, int) to authenticated;
