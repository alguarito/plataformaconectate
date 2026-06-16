-- Función para limpiar registros_pendientes que llevan más de 7 días sin firma.
-- Puede invocarse manualmente desde el dashboard de Supabase o via pg_cron si
-- la extensión está habilitada.
--
-- Uso manual:    SELECT public.limpiar_registros_expirados();
-- Con pg_cron:   SELECT cron.schedule('limpiar-registros', '0 3 * * *',
--                  'SELECT public.limpiar_registros_expirados()');

CREATE OR REPLACE FUNCTION public.limpiar_registros_expirados()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _count integer;
BEGIN
  UPDATE public.registros_pendientes
  SET estado = 'expirado'
  WHERE estado = 'pendiente'
    AND creado_en < NOW() - INTERVAL '7 days';

  GET DIAGNOSTICS _count = ROW_COUNT;
  RETURN _count;
END;
$$;

COMMENT ON FUNCTION public.limpiar_registros_expirados() IS
  'Marca como expirados los registros_pendientes con más de 7 días sin firma. '
  'Devuelve el número de filas afectadas.';
