-- Informes PR-3 · RPC de cumplimiento y resumen anual
--
-- cumplimiento_resumen: agrega consentimientos (firmados/revocados) y eventos
-- ARCO de los estudiantes del docente autenticado.
-- Mismo patrón SECURITY DEFINER, scope por auth.uid(), sin nombres.
--
-- Tipos ARCO: acceso | rectificacion | cancelacion | oposicion | revocacion

create or replace function public.cumplimiento_resumen(_ano int default null)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare
  result jsonb;
begin
  with mis_aulas as (
    select id, codigo_acceso from public.aulas
    where docente_id = auth.uid()
      and (_ano is null or ano = _ano)
  ),
  mis_estudiantes as (
    select distinct e.usuario_id
    from public.enrollments e
    join mis_aulas a on a.id = e.aula_id
    where e.rol = 'student'
  ),
  mis_consentimientos as (
    select * from public.consentimientos_plataforma
    where estudiante_id in (select usuario_id from mis_estudiantes)
      and (_ano is null or ano_lectivo = _ano)
  ),
  mis_arco as (
    select ea.*
    from public.eventos_arco ea
    where ea.estudiante_id in (select usuario_id from mis_estudiantes)
  ),
  mis_registros as (
    select * from public.registros_pendientes
    where codigo_aula in (select codigo_acceso from mis_aulas)
      and estado = 'firmado'
  ),
  total_est as (
    select count(distinct usuario_id) as n from mis_estudiantes
  )
  select jsonb_build_object(
    'firmados',          (select count(*) from mis_consentimientos where revocado_en is null),
    'revocados',         (select count(*) from mis_consentimientos where revocado_en is not null),
    'auto',              (select count(*) from mis_registros where tipo_registro = 'auto'),
    'acudiente',         (select count(*) from mis_registros where tipo_registro = 'acudiente'),
    'tasa_consentimiento', (
      select case when n > 0
        then round(100.0 * (select count(*) from mis_consentimientos where revocado_en is null) / n, 1)
        else 0 end
      from total_est
    ),
    'arco_total',        (select count(*) from mis_arco),
    'arco_por_tipo',     (
      select coalesce(jsonb_agg(jsonb_build_object('tipo', tipo, 'conteo', cnt) order by cnt desc), '[]'::jsonb)
      from (
        select tipo, count(*)::int as cnt
        from mis_arco
        group by tipo
      ) t
    )
  ) into result;
  return coalesce(result, '{}'::jsonb);
end;
$$;
grant execute on function public.cumplimiento_resumen(int) to authenticated;
