-- ============================================================
-- Sistema de Valoración Académica — Opción B
-- Pesos: guías 20% · formativos 20% · banco práctica 20%
--        proyecto integrador 15% · examen PDF 25%
-- Conversión: nota = 1.0 + (puntaje / 100) × 4.0  (lineal)
--             puntaje 50 → nota 3.0 (aprobado mínimo)
-- ============================================================

-- ─── 1. Columna nota en intentos_quiz (GENERATED STORED) ─────────────────────

ALTER TABLE public.intentos_quiz
  ADD COLUMN IF NOT EXISTS nota NUMERIC(3,1)
  GENERATED ALWAYS AS (
    CASE WHEN puntaje IS NOT NULL
    THEN ROUND((1.0 + (puntaje / 100.0) * 4.0)::numeric, 1)
    ELSE NULL END
  ) STORED;

-- ─── 2. Tabla notas_manuales ──────────────────────────────────────────────────
-- El docente ingresa: nota del examen PDF (formal) y nota del proyecto.
-- Una fila por (estudiante × grado × periodo × año).

CREATE TABLE IF NOT EXISTS public.notas_manuales (
  id            BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  docente_id    UUID        NOT NULL REFERENCES auth.users(id)        ON DELETE CASCADE,
  estudiante_id UUID        NOT NULL REFERENCES public.usuarios(id)   ON DELETE CASCADE,
  grado         SMALLINT    NOT NULL CHECK (grado    BETWEEN 6 AND 11),
  periodo       SMALLINT    NOT NULL CHECK (periodo  BETWEEN 1 AND  4),
  ano           SMALLINT    NOT NULL CHECK (ano      >= 2020),
  nota_examen_pdf NUMERIC(3,1) CHECK (nota_examen_pdf BETWEEN 1.0 AND 5.0),
  nota_proyecto   NUMERIC(3,1) CHECK (nota_proyecto   BETWEEN 1.0 AND 5.0),
  observaciones   TEXT,
  creado_en     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  actualizado_en  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (estudiante_id, grado, periodo, ano)
);

CREATE INDEX IF NOT EXISTS idx_notas_manuales_docente
  ON public.notas_manuales(docente_id);
CREATE INDEX IF NOT EXISTS idx_notas_manuales_estudiante
  ON public.notas_manuales(estudiante_id, grado, periodo, ano);

ALTER TABLE public.notas_manuales ENABLE ROW LEVEL SECURITY;

-- Docente: SELECT / INSERT / UPDATE sus propias filas
CREATE POLICY "nm_docente_select" ON public.notas_manuales
  FOR SELECT USING (docente_id = auth.uid());
CREATE POLICY "nm_docente_insert" ON public.notas_manuales
  FOR INSERT WITH CHECK (docente_id = auth.uid());
CREATE POLICY "nm_docente_update" ON public.notas_manuales
  FOR UPDATE USING (docente_id = auth.uid());

-- Estudiante: solo lectura de su propia fila
CREATE POLICY "nm_estudiante_select" ON public.notas_manuales
  FOR SELECT USING (estudiante_id = auth.uid());

-- ─── 3. Tabla resultados_test ─────────────────────────────────────────────────
-- Persiste las respuestas del TestRunner (Likert). No entra en nota;
-- sirve para diagnóstico y seguimiento del docente.

CREATE TABLE IF NOT EXISTS public.resultados_test (
  id            BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  estudiante_id UUID        NOT NULL REFERENCES public.usuarios(id) ON DELETE CASCADE,
  test_id       TEXT        NOT NULL,
  guia_clave    TEXT,
  respuestas    JSONB       NOT NULL,   -- array de enteros [1,5,3,2,4,...]
  realizado_en  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resultados_test_estudiante
  ON public.resultados_test(estudiante_id);
CREATE INDEX IF NOT EXISTS idx_resultados_test_test_id
  ON public.resultados_test(test_id, realizado_en DESC);

ALTER TABLE public.resultados_test ENABLE ROW LEVEL SECURITY;

-- Estudiante: puede insertar y ver sus propios resultados
CREATE POLICY "rt_estudiante_insert" ON public.resultados_test
  FOR INSERT WITH CHECK (estudiante_id = auth.uid());
CREATE POLICY "rt_estudiante_select" ON public.resultados_test
  FOR SELECT USING (estudiante_id = auth.uid());

-- Docente: puede ver resultados de sus estudiantes (para diagnóstico)
CREATE POLICY "rt_docente_select" ON public.resultados_test
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.enrollments e
      JOIN public.aulas a ON a.id = e.aula_id
      WHERE e.usuario_id = resultados_test.estudiante_id
      AND e.rol = 'student'
      AND a.docente_id = auth.uid()
    )
  );

-- ─── 4. RPC nota_periodo ──────────────────────────────────────────────────────
-- Calcula la nota del periodo para UN estudiante.
-- Accesible por el propio estudiante (auth.uid()=_estudiante_id)
-- o por su docente (verify vía enrollments + aulas).
-- Redistribuye pesos si algún componente aún no tiene datos (nota_parcial).

CREATE OR REPLACE FUNCTION public.nota_periodo(
  _estudiante_id UUID,
  _grado         INT,
  _periodo       INT,
  _ano           INT
)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid            UUID    := auth.uid();
  v_autorizado     BOOLEAN;
  v_patron         TEXT    := _grado::TEXT || '-' || _periodo::TEXT || '-%';

  -- Porcentajes (0-100) de los componentes automáticos
  v_pct_guias      NUMERIC(5,1);
  v_pct_formativos NUMERIC(5,1);
  v_pct_banco      NUMERIC(5,1);
  v_n_guias        BIGINT  := 0;
  v_n_formativos   BIGINT  := 0;
  v_n_banco        BIGINT  := 0;

  -- Notas en escala 1.0-5.0
  v_nota_guias      NUMERIC(3,1);
  v_nota_formativos NUMERIC(3,1);
  v_nota_banco      NUMERIC(3,1);
  v_nota_proyecto   NUMERIC(3,1);
  v_nota_examen_pdf NUMERIC(3,1);

  -- Resultado final
  v_suma            NUMERIC := 0;
  v_peso_efectivo   NUMERIC := 0;
  v_nota_final      NUMERIC(3,1);
  v_es_parcial      BOOLEAN;
BEGIN
  -- ── Verificar acceso ──────────────────────────────────────────────────
  IF v_uid = _estudiante_id THEN
    v_autorizado := TRUE;
  ELSE
    SELECT EXISTS (
      SELECT 1 FROM public.enrollments e
      JOIN public.aulas a ON a.id = e.aula_id
      WHERE e.usuario_id = _estudiante_id
      AND e.rol = 'student'
      AND a.docente_id = v_uid
      AND a.grado   = _grado
      AND a.periodo = _periodo
      AND a.ano     = _ano
    ) INTO v_autorizado;
  END IF;

  IF NOT v_autorizado THEN
    RETURN jsonb_build_object('autorizado', FALSE);
  END IF;

  -- ── Componente 1: Progreso en guías ──────────────────────────────────
  SELECT ROUND(AVG(pg.porcentaje)::numeric, 1), COUNT(*)
  INTO v_pct_guias, v_n_guias
  FROM public.progreso_guia pg
  WHERE pg.estudiante_id = _estudiante_id
  AND pg.guia_clave LIKE v_patron;

  IF v_n_guias > 0 THEN
    v_nota_guias    := ROUND((1.0 + (COALESCE(v_pct_guias, 0) / 100.0) * 4.0)::numeric, 1);
    v_suma          := v_suma          + v_nota_guias * 0.20;
    v_peso_efectivo := v_peso_efectivo + 0.20;
  END IF;

  -- ── Componente 2: Quizzes formativos (quiz_id LIKE 'lab-%') ──────────
  SELECT ROUND(AVG(iq.puntaje)::numeric, 1), COUNT(*)
  INTO v_pct_formativos, v_n_formativos
  FROM public.intentos_quiz iq
  WHERE iq.estudiante_id = _estudiante_id
  AND iq.guia_clave LIKE v_patron
  AND iq.quiz_id LIKE 'lab-%'
  AND iq.puntaje IS NOT NULL;

  IF v_n_formativos > 0 THEN
    v_nota_formativos := ROUND((1.0 + (COALESCE(v_pct_formativos, 0) / 100.0) * 4.0)::numeric, 1);
    v_suma            := v_suma            + v_nota_formativos * 0.20;
    v_peso_efectivo   := v_peso_efectivo   + 0.20;
  END IF;

  -- ── Componente 3: Banco de práctica (quiz_id LIKE 'examen-%') ────────
  SELECT ROUND(AVG(iq.puntaje)::numeric, 1), COUNT(*)
  INTO v_pct_banco, v_n_banco
  FROM public.intentos_quiz iq
  WHERE iq.estudiante_id = _estudiante_id
  AND iq.guia_clave LIKE v_patron
  AND iq.quiz_id LIKE 'examen-%'
  AND iq.puntaje IS NOT NULL;

  IF v_n_banco > 0 THEN
    v_nota_banco    := ROUND((1.0 + (COALESCE(v_pct_banco, 0) / 100.0) * 4.0)::numeric, 1);
    v_suma          := v_suma          + v_nota_banco * 0.20;
    v_peso_efectivo := v_peso_efectivo + 0.20;
  END IF;

  -- ── Componentes 4 y 5: Notas manuales del docente ────────────────────
  SELECT nm.nota_proyecto, nm.nota_examen_pdf
  INTO v_nota_proyecto, v_nota_examen_pdf
  FROM public.notas_manuales nm
  WHERE nm.estudiante_id = _estudiante_id
  AND nm.grado   = _grado
  AND nm.periodo = _periodo
  AND nm.ano     = _ano
  LIMIT 1;

  -- Fallback proyecto: si no hay nota manual, usar binario de progreso_proyecto
  IF v_nota_proyecto IS NULL THEN
    SELECT CASE WHEN completada_en IS NOT NULL THEN 5.0::NUMERIC(3,1) ELSE NULL END
    INTO v_nota_proyecto
    FROM public.progreso_proyecto
    WHERE estudiante_id = _estudiante_id
    AND grado   = _grado
    AND periodo = _periodo;
  END IF;

  IF v_nota_proyecto IS NOT NULL THEN
    v_suma          := v_suma          + v_nota_proyecto * 0.15;
    v_peso_efectivo := v_peso_efectivo + 0.15;
  END IF;

  IF v_nota_examen_pdf IS NOT NULL THEN
    v_suma          := v_suma          + v_nota_examen_pdf * 0.25;
    v_peso_efectivo := v_peso_efectivo + 0.25;
  END IF;

  -- ── Nota final ────────────────────────────────────────────────────────
  IF v_peso_efectivo > 0 THEN
    v_nota_final := ROUND((v_suma / v_peso_efectivo)::numeric, 1);
  END IF;

  v_es_parcial := NOT (
    v_nota_guias      IS NOT NULL AND
    v_nota_formativos IS NOT NULL AND
    v_nota_banco      IS NOT NULL AND
    v_nota_proyecto   IS NOT NULL AND
    v_nota_examen_pdf IS NOT NULL
  );

  RETURN jsonb_build_object(
    'autorizado',  TRUE,
    'nota_final',  v_nota_final,
    'es_parcial',  v_es_parcial,
    'aprobado',    CASE WHEN v_nota_final IS NOT NULL THEN v_nota_final >= 3.0 ELSE NULL END,
    'componentes', jsonb_build_object(
      'guias',       jsonb_build_object('nota', v_nota_guias,      'pct', v_pct_guias,      'n', v_n_guias,      'peso', 20),
      'formativos',  jsonb_build_object('nota', v_nota_formativos, 'pct', v_pct_formativos, 'n', v_n_formativos, 'peso', 20),
      'banco',       jsonb_build_object('nota', v_nota_banco,      'pct', v_pct_banco,      'n', v_n_banco,      'peso', 20),
      'proyecto',    jsonb_build_object('nota', v_nota_proyecto,                                                  'peso', 15),
      'examen_pdf',  jsonb_build_object('nota', v_nota_examen_pdf,                                               'peso', 25)
    )
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.nota_periodo(UUID, INT, INT, INT) TO authenticated;

-- ─── 5. RPC notas_grado ───────────────────────────────────────────────────────
-- Devuelve la nota de TODOS los estudiantes de un grado/periodo/año.
-- Solo accesible por el docente que tiene ese grado/periodo/año.

CREATE OR REPLACE FUNCTION public.notas_grado(_ano INT, _grado INT, _periodo INT)
RETURNS TABLE (
  estudiante_id    UUID,
  display_name     TEXT,
  nota_guias       NUMERIC(3,1),
  nota_formativos  NUMERIC(3,1),
  nota_banco       NUMERIC(3,1),
  nota_proyecto    NUMERIC(3,1),
  nota_examen_pdf  NUMERIC(3,1),
  nota_final       NUMERIC(3,1),
  aprobado         BOOLEAN,
  es_parcial       BOOLEAN
)
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH
  -- Estudiantes del docente en este grado/periodo/año
  de AS (
    SELECT DISTINCT e.usuario_id AS estudiante_id, u.display_name
    FROM public.enrollments e
    JOIN public.aulas a ON a.id = e.aula_id
    JOIN public.usuarios u ON u.id = e.usuario_id
    WHERE e.rol = 'student'
    AND a.docente_id = auth.uid()
    AND a.grado   = _grado
    AND a.periodo = _periodo
    AND a.ano     = _ano
  ),
  patron AS (SELECT _grado::TEXT || '-' || _periodo::TEXT || '-%' AS p),
  -- Comp 1: Guías
  cg AS (
    SELECT pg.estudiante_id, ROUND(AVG(pg.porcentaje)::numeric, 1) AS pct
    FROM public.progreso_guia pg
    JOIN de ON de.estudiante_id = pg.estudiante_id
    WHERE pg.guia_clave LIKE (SELECT p FROM patron)
    GROUP BY pg.estudiante_id
  ),
  -- Comp 2: Formativos
  cf AS (
    SELECT iq.estudiante_id, ROUND(AVG(iq.puntaje)::numeric, 1) AS pct
    FROM public.intentos_quiz iq
    JOIN de ON de.estudiante_id = iq.estudiante_id
    WHERE iq.guia_clave LIKE (SELECT p FROM patron)
    AND iq.quiz_id LIKE 'lab-%' AND iq.puntaje IS NOT NULL
    GROUP BY iq.estudiante_id
  ),
  -- Comp 3: Banco
  cb AS (
    SELECT iq.estudiante_id, ROUND(AVG(iq.puntaje)::numeric, 1) AS pct
    FROM public.intentos_quiz iq
    JOIN de ON de.estudiante_id = iq.estudiante_id
    WHERE iq.guia_clave LIKE (SELECT p FROM patron)
    AND iq.quiz_id LIKE 'examen-%' AND iq.puntaje IS NOT NULL
    GROUP BY iq.estudiante_id
  ),
  -- Comp 4+5: Manuales
  cm AS (
    SELECT nm.estudiante_id, nm.nota_proyecto, nm.nota_examen_pdf
    FROM public.notas_manuales nm
    JOIN de ON de.estudiante_id = nm.estudiante_id
    WHERE nm.grado = _grado AND nm.periodo = _periodo AND nm.ano = _ano
  ),
  -- Fallback proyecto binario
  pb AS (
    SELECT pp.estudiante_id, 5.0::NUMERIC(3,1) AS nota_bin
    FROM public.progreso_proyecto pp
    JOIN de ON de.estudiante_id = pp.estudiante_id
    WHERE pp.grado = _grado AND pp.periodo = _periodo AND pp.completada_en IS NOT NULL
  ),
  -- Ensamblar componentes por estudiante
  notas AS (
    SELECT
      de.estudiante_id,
      de.display_name,
      CASE WHEN cg.pct IS NOT NULL THEN ROUND((1.0 + (cg.pct / 100.0) * 4.0)::numeric, 1) ELSE NULL END AS n_guias,
      CASE WHEN cf.pct IS NOT NULL THEN ROUND((1.0 + (cf.pct / 100.0) * 4.0)::numeric, 1) ELSE NULL END AS n_form,
      CASE WHEN cb.pct IS NOT NULL THEN ROUND((1.0 + (cb.pct / 100.0) * 4.0)::numeric, 1) ELSE NULL END AS n_banco,
      COALESCE(cm.nota_proyecto,   pb.nota_bin) AS n_proy,
      cm.nota_examen_pdf                         AS n_pdf
    FROM de
    LEFT JOIN cg ON cg.estudiante_id = de.estudiante_id
    LEFT JOIN cf ON cf.estudiante_id = de.estudiante_id
    LEFT JOIN cb ON cb.estudiante_id = de.estudiante_id
    LEFT JOIN cm ON cm.estudiante_id = de.estudiante_id
    LEFT JOIN pb ON pb.estudiante_id = de.estudiante_id
  ),
  -- Calcular suma ponderada y peso efectivo
  pesos AS (
    SELECT
      n.*,
      (COALESCE(n.n_guias  * 0.20, 0) +
       COALESCE(n.n_form   * 0.20, 0) +
       COALESCE(n.n_banco  * 0.20, 0) +
       COALESCE(n.n_proy   * 0.15, 0) +
       COALESCE(n.n_pdf    * 0.25, 0)) AS suma,
      (CASE WHEN n.n_guias  IS NOT NULL THEN 0.20 ELSE 0 END +
       CASE WHEN n.n_form   IS NOT NULL THEN 0.20 ELSE 0 END +
       CASE WHEN n.n_banco  IS NOT NULL THEN 0.20 ELSE 0 END +
       CASE WHEN n.n_proy   IS NOT NULL THEN 0.15 ELSE 0 END +
       CASE WHEN n.n_pdf    IS NOT NULL THEN 0.25 ELSE 0 END) AS peso_ef
    FROM notas n
  )
  SELECT
    p.estudiante_id,
    p.display_name,
    p.n_guias                                                                  AS nota_guias,
    p.n_form                                                                   AS nota_formativos,
    p.n_banco                                                                  AS nota_banco,
    p.n_proy                                                                   AS nota_proyecto,
    p.n_pdf                                                                    AS nota_examen_pdf,
    CASE WHEN p.peso_ef > 0 THEN ROUND((p.suma / p.peso_ef)::numeric, 1) ELSE NULL END AS nota_final,
    CASE WHEN p.peso_ef > 0 THEN ROUND((p.suma / p.peso_ef)::numeric, 1) >= 3.0 ELSE NULL END AS aprobado,
    NOT (p.n_guias IS NOT NULL AND p.n_form IS NOT NULL AND p.n_banco IS NOT NULL
         AND p.n_proy IS NOT NULL AND p.n_pdf IS NOT NULL)                     AS es_parcial
  FROM pesos p
  ORDER BY p.display_name;
$$;

GRANT EXECUTE ON FUNCTION public.notas_grado(INT, INT, INT) TO authenticated;

-- ─── 6. RPC upsert_nota_manual ───────────────────────────────────────────────
-- El docente ingresa / actualiza la nota del examen PDF y/o del proyecto.
-- Solo actualiza los campos que no son NULL en el llamado.

CREATE OR REPLACE FUNCTION public.upsert_nota_manual(
  _estudiante_id    UUID,
  _grado            INT,
  _periodo          INT,
  _ano              INT,
  _nota_examen_pdf  NUMERIC(3,1) DEFAULT NULL,
  _nota_proyecto    NUMERIC(3,1) DEFAULT NULL,
  _observaciones    TEXT         DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_docente_id UUID := auth.uid();
  v_autorizado BOOLEAN;
BEGIN
  -- Verificar que el docente tiene al estudiante en su aula
  SELECT EXISTS (
    SELECT 1 FROM public.enrollments e
    JOIN public.aulas a ON a.id = e.aula_id
    WHERE e.usuario_id = _estudiante_id
    AND e.rol = 'student'
    AND a.docente_id = v_docente_id
    AND a.grado   = _grado
    AND a.periodo = _periodo
    AND a.ano     = _ano
  ) INTO v_autorizado;

  IF NOT v_autorizado THEN
    RETURN jsonb_build_object('ok', FALSE, 'error', 'no_autorizado');
  END IF;

  INSERT INTO public.notas_manuales (
    docente_id, estudiante_id, grado, periodo, ano,
    nota_examen_pdf, nota_proyecto, observaciones
  ) VALUES (
    v_docente_id, _estudiante_id, _grado, _periodo, _ano,
    _nota_examen_pdf, _nota_proyecto, _observaciones
  )
  ON CONFLICT (estudiante_id, grado, periodo, ano) DO UPDATE SET
    docente_id       = v_docente_id,
    -- Solo actualiza el campo si se pasó un valor (no NULL)
    nota_examen_pdf  = CASE WHEN _nota_examen_pdf IS NOT NULL
                            THEN _nota_examen_pdf
                            ELSE notas_manuales.nota_examen_pdf END,
    nota_proyecto    = CASE WHEN _nota_proyecto IS NOT NULL
                            THEN _nota_proyecto
                            ELSE notas_manuales.nota_proyecto END,
    observaciones    = CASE WHEN _observaciones IS NOT NULL
                            THEN _observaciones
                            ELSE notas_manuales.observaciones END,
    actualizado_en   = NOW();

  RETURN jsonb_build_object('ok', TRUE);
END;
$$;

GRANT EXECUTE ON FUNCTION public.upsert_nota_manual(UUID, INT, INT, INT, NUMERIC, NUMERIC, TEXT) TO authenticated;
