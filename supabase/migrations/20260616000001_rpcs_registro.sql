-- ─────────────────────────────────────────────────────────────────────────────
-- RPCs para el flujo de registro de estudiantes
--
-- 1. estado_registro_por_id   → texto escalar; usado por verificar-otp y lib/registro.ts
-- 2. info_registro_por_id     → jsonb {estado, nombre}; usado por firma-acudiente
-- 3. contar_pendientes_por_aula → bigint; panel docente (data-stat-pendientes)
--
-- Todas son SECURITY DEFINER para que usuarios anon/autenticados puedan
-- consultar sin que RLS bloquee la tabla registros_pendientes.
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Estado escalar (llamada anon segura — solo expone el estado)
CREATE OR REPLACE FUNCTION public.estado_registro_por_id(_id uuid)
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT estado::text
  FROM public.registros_pendientes
  WHERE id = _id;
$$;

-- 2. Info mínima para firma-acudiente (estado + nombre del estudiante)
--    El acudiente ya conoce el nombre de su hijo; no es información sensible.
CREATE OR REPLACE FUNCTION public.info_registro_por_id(_id uuid)
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT jsonb_build_object(
    'estado',  estado::text,
    'nombre',  estudiante_display_name
  )
  FROM public.registros_pendientes
  WHERE id = _id;
$$;

-- 3. Contar pendientes de un aula — solo el docente propietario recibe el dato
CREATE OR REPLACE FUNCTION public.contar_pendientes_por_aula(_codigo_aula text)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _count bigint;
BEGIN
  -- Solo devuelve datos si el caller es el docente de esa aula
  IF NOT EXISTS (
    SELECT 1 FROM public.aulas
    WHERE codigo_acceso = _codigo_aula
      AND docente_id = auth.uid()
  ) THEN
    RETURN 0;
  END IF;

  SELECT COUNT(*) INTO _count
  FROM public.registros_pendientes
  WHERE codigo_aula = _codigo_aula
    AND estado = 'pendiente';

  RETURN _count;
END;
$$;
