-- ============================================================================
-- Migración 004 · Ampliar constraint del código de acceso de aula
--
-- Problema: el constraint original limitaba codigo_acceso a max 16 chars,
-- pero el formato generado AULA-XX-YYYY-XXXX (ej. AULA-8B-2026-K3X7) tiene
-- 17 chars. Al crear cualquier aula el INSERT fallaba con:
--
--   new row for relation "aulas" violates check constraint
--   "aulas_codigo_acceso_check"
--
-- Solución: ampliar el rango a 4-32 chars. Más holgado para futuros
-- prefijos o formatos sin perder protección contra strings absurdamente
-- largos.
--
-- IDEMPOTENTE: se puede re-aplicar sin error.
-- ============================================================================

alter table public.aulas
  drop constraint if exists aulas_codigo_acceso_check;

alter table public.aulas
  add constraint aulas_codigo_acceso_check
  check (char_length(codigo_acceso) between 4 and 32);

-- ============================================================================
-- Verificación
-- ============================================================================
--   select conname, pg_get_constraintdef(oid)
--   from pg_constraint
--   where conname = 'aulas_codigo_acceso_check';
--
-- Esperado:
--   CHECK ((char_length(codigo_acceso) >= 4 AND char_length(codigo_acceso) <= 32))
-- ============================================================================
