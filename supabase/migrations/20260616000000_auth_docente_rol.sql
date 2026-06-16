-- Migración: rol de docente en public.usuarios
-- Fecha: 2026-06-16
--
-- Añade columna `rol` a la tabla usuarios y crea la tabla whitelist
-- docentes_autorizados. Un trigger BEFORE INSERT asigna automáticamente
-- rol='docente' cuando el email del nuevo usuario está en la whitelist.
--
-- Para aplicar:
--   supabase db push            (CLI local)
--   o pega directamente en el SQL Editor del dashboard de Supabase.

-- ── 1. Columna rol en public.usuarios ────────────────────────────────────────
ALTER TABLE public.usuarios
  ADD COLUMN IF NOT EXISTS rol TEXT NOT NULL DEFAULT 'estudiante'
  CONSTRAINT usuarios_rol_check CHECK (rol IN ('estudiante', 'docente'));

-- ── 2. Tabla whitelist de docentes autorizados ────────────────────────────────
CREATE TABLE IF NOT EXISTS public.docentes_autorizados (
  email     TEXT PRIMARY KEY,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.docentes_autorizados ENABLE ROW LEVEL SECURITY;

-- Docente autenticado solo ve su propio registro
CREATE POLICY "docente_lee_su_propio_registro"
  ON public.docentes_autorizados
  FOR SELECT
  TO authenticated
  USING (email = (auth.jwt() ->> 'email'));

-- ── 3. Email autorizado ───────────────────────────────────────────────────────
INSERT INTO public.docentes_autorizados (email)
  VALUES ('alvaro.cardenas.orozco@gmail.com')
  ON CONFLICT DO NOTHING;

-- ── 4. Función: asigna rol='docente' antes de insertar en public.usuarios ─────
CREATE OR REPLACE FUNCTION public.fn_asignar_rol_docente()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public AS $$
DECLARE
  _email TEXT;
BEGIN
  SELECT email INTO _email FROM auth.users WHERE id = NEW.id;
  IF EXISTS (SELECT 1 FROM public.docentes_autorizados WHERE email = _email) THEN
    NEW.rol := 'docente';
  END IF;
  RETURN NEW;
END;
$$;

-- ── 5. Trigger BEFORE INSERT en public.usuarios ───────────────────────────────
-- handle_new_user crea el registro; este trigger modifica rol antes de persistirlo.
DROP TRIGGER IF EXISTS tg_asignar_rol_docente ON public.usuarios;
CREATE TRIGGER tg_asignar_rol_docente
  BEFORE INSERT ON public.usuarios
  FOR EACH ROW EXECUTE FUNCTION public.fn_asignar_rol_docente();

-- ── 6. Actualizar usuarios ya existentes que sean docentes ────────────────────
UPDATE public.usuarios u
SET rol = 'docente'
FROM auth.users au
JOIN public.docentes_autorizados da ON da.email = au.email
WHERE u.id = au.id;
