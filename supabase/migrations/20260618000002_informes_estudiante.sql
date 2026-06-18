-- Informes PR-4 · RPC de informe individual del estudiante
--
-- informe_estudiante: devuelve JSONB con toda la actividad de un estudiante
-- para el docente autenticado. Incluye verificación de autorización:
-- si el estudiante NO está en un aula del docente, devuelve {autorizado:false}.
--
-- Expone display_name porque es la vista individual accionable del docente.
-- No devuelve datos de otros docentes.

create or replace function public.informe_estudiante(_estudiante_id uuid)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare
  result jsonb;
  v_grado int;
  v_es_autorizado boolean;
begin
  select count(*) > 0 into v_es_autorizado
  from public.enrollments e
  join public.aulas a on a.id = e.aula_id
  where e.usuario_id = _estudiante_id
    and e.rol = 'student'
    and a.docente_id = auth.uid();

  if not v_es_autorizado then
    return jsonb_build_object('autorizado', false);
  end if;

  -- Grado principal = aula más reciente del docente
  select a.grado into v_grado
  from public.enrollments e
  join public.aulas a on a.id = e.aula_id
  where e.usuario_id = _estudiante_id
    and e.rol = 'student'
    and a.docente_id = auth.uid()
  order by a.ano desc, a.periodo desc, e.creado_en desc
  limit 1;

  select jsonb_build_object(
    'autorizado',   true,
    'display_name', (select display_name from public.usuarios where id = _estudiante_id),
    'grado',        v_grado,
    'aulas', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id',       a.id,
        'grado',    a.grado,
        'periodo',  a.periodo,
        'ano',      a.ano,
        'nombre',   a.nombre,
        'codigo',   a.codigo_acceso
      ) order by a.ano desc, a.periodo desc), '[]'::jsonb)
      from public.enrollments e
      join public.aulas a on a.id = e.aula_id
      where e.usuario_id = _estudiante_id
        and e.rol = 'student'
        and a.docente_id = auth.uid()
    ),
    'guias', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'guia_clave',     guia_clave,
        'porcentaje',     porcentaje,
        'ultima_estacion', ultima_estacion,
        'completada_en',  completada_en,
        'actualizado_en', actualizado_en
      ) order by actualizado_en desc), '[]'::jsonb)
      from public.progreso_guia
      where estudiante_id = _estudiante_id
    ),
    'examenes', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'quiz_id',      quiz_id,
        'guia_clave',   guia_clave,
        'puntaje',      puntaje,
        'duracion_seg', duracion_seg,
        'realizado_en', realizado_en
      ) order by realizado_en desc), '[]'::jsonb)
      from public.intentos_quiz
      where estudiante_id = _estudiante_id
    ),
    'proyectos', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'grado',        grado,
        'periodo',      periodo,
        'completado',   completada_en is not null,
        'completado_en', completada_en
      ) order by completada_en desc nulls last), '[]'::jsonb)
      from public.progreso_proyecto
      where estudiante_id = _estudiante_id
    ),
    'consentimiento', (
      select jsonb_build_object(
        'vigente',     revocado_en is null,
        'firmado_en',  firmado_en,
        'revocado_en', revocado_en,
        'ano_lectivo', ano_lectivo
      )
      from public.consentimientos_plataforma
      where estudiante_id = _estudiante_id
      order by firmado_en desc
      limit 1
    ),
    'ultima_actividad', greatest(
      (select max(actualizado_en)         from public.progreso_guia  where estudiante_id = _estudiante_id),
      (select max(realizado_en::timestamptz) from public.intentos_quiz where estudiante_id = _estudiante_id)
    )
  ) into result;

  return coalesce(result, '{}'::jsonb);
end;
$$;
grant execute on function public.informe_estudiante(uuid) to authenticated;
