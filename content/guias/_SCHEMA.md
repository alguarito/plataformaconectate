# Esquema declarativo de una guía MILC v3 — Plataforma Conéctate

Cada guía vive en un archivo YAML bajo `content/guias/{grado}/{clave}.yaml` donde la clave sigue el patrón `{grado}-{periodo}-{sesion}` (ej. `11-1-2.yaml`).

El motor `scripts/build-guias-g11.py` lee estos archivos y produce dos salidas desde la **misma fuente**:

- **PDF** en `public/guias-mejoras/{sesionGlobal}-{grado}-TIC.pdf` (vía xelatex)
- **Web TypeScript** en `src/data/guiasContenido/{grado}-{periodo}-{sesion}.ts` (vía generador TS)

> **Single source of truth.** Si editas el `.yaml`, ambos formatos se actualizan al correr el build.

## Estructura del archivo YAML

```yaml
# ─── Metadata ────────────────────────────────────────────────────────
clave: "11-1-2"           # str · obligatorio · formato {grado}-{periodo}-{sesion}
grado: 11                 # int · obligatorio · 6-11
periodo: 1                # int · obligatorio · 1-3
sesion: 2                 # int · obligatorio · 1-10 dentro del periodo
completo: true            # bool · obligatorio · si false, no se compila

titulo: "..."             # str · obligatorio · título completo de la guía
titulo_portada: |         # str · obligatorio · versión con saltos manuales (\\)
  Identidad visual ---
  del grafismo ancestral
  a la paleta propia

producto_final: "..."     # str · obligatorio · qué entrega el estudiante

# ─── Apertura (obligatoria, MILC) ────────────────────────────────────
apertura:
  saber_ancestral: |      # str · obligatorio · saber concreto del Valle/Pacífico/etc
    En el Valle del Cauca...
  saber_contemporaneo: |  # str · obligatorio · concepto técnico moderno
    Las marcas modernas...
  pregunta_puente: |      # str · obligatorio · conecta ancestral con moderno
    ¿Qué señales visuales hacen que reconozcas...
  saber_hacer: |          # str · obligatorio · 4 desempeños con los 4 verbos

# ─── Puentes narrativos (7 obligatorios) ─────────────────────────────
puentes:
  a_ruta: |               # str · "Acabas de X. Ahora Y porque Z."
  a_escuta: |
  a_sistematizacion: |
  a_praxis: |
  a_producto: |
  a_evaluacion: |
  a_triangulo: |

# ─── Fase 1 · Escucha = Actividad 1 ───────────────────────────────────
escuta:
  escena: |               # str · prompt de la Actividad 1 (qué vas a hacer)
  checks:                 # list[str] · 3 checks observables
    - "..."
    - "..."
    - "..."
  cuaderno: |             # str · infoband con anatomía: Título · Formato · Extensión · Sabes que terminaste cuando

# ─── Fase 2 · Sistematización = Actividad 2 ──────────────────────────
sistematizacion:
  intro: |
  pilares:                # list[str] · 4 pilares pensamiento computacional
    - "..."  # descomposición
    - "..."  # patrones
    - "..."  # abstracción
    - "..."  # algoritmo
  anatomia:
    titulo: "..."
    body: |
  errores_comunes: |
  cuaderno: |             # infoband Actividad 2

# ─── Fase 3 · Praxis = Actividad 3 ───────────────────────────────────
praxis:
  intro: |
  pilares:                # list[str] · 4 pilares aplicados al producto
    - "..."
    - "..."
    - "..."
    - "..."
  checklist:
    titulo: "..."
    items: |              # con \checkbox por item
  plantilla_guion: |
  cuaderno: |             # infoband Actividad 3
  producto_titulo: "..."
  criterios:              # list[str] · 5 criterios de calidad
    - "..."
    - "..."
    - "..."
    - "..."
    - "..."

# ─── Triángulo de pensamiento (3 voces) ──────────────────────────────
triangulo:
  dussel:
    autor: "Enrique Dussel"  # str · siempre Dussel para el primer vértice
    cita: "..."              # str · cita textual real
    aplicacion: |            # str · cómo se aplica al tema de la guía
    pregunta_espejo: "..."   # str · pregunta para el estudiante
  estoico:
    autor: "..."             # str · Marco Aurelio | Epicteto | Séneca
    cita: "..."
    aplicacion: |
    pregunta_espejo: "..."
  floridi:
    autor: "Luciano Floridi" # str · siempre Floridi para el tercer vértice
    cita: "..."
    aplicacion: |
    pregunta_espejo: "..."

# ─── Cierre / Compromiso ─────────────────────────────────────────────
compromiso: |             # str · tarea concreta para la próxima semana

# ─── (OPCIONAL) Recursos visuales (imágenes, diagramas) ──────────────
# Cada guía puede declarar imágenes/diagramas que se renderizan dentro
# del PDF y/o de la página web. Los archivos viven en:
#   public/guias-mejoras/assets/{sesionGlobal}-{grado}/
# y se referencian por nombre de archivo (sin ruta).
recursos:
  imagenes:           # list opcional · imágenes incrustadas en la guía
    - archivo: "saber-ancestral.jpg"   # nombre relativo a la carpeta de assets
      alt: "Tejedora Wayuu trabajando con su telar tradicional"
      caption: "Patrones que se transmiten oralmente"  # opcional
      donde: "apertura"                # opcional · sección donde aparece
  diagramas:          # list opcional · diagramas TikZ/SVG/PNG
    - archivo: "anatomia-marca.svg"
      alt: "Las 3 piezas de un sistema visual: paleta + tipografía + lockup"
      donde: "sistematizacion"

# ─── (OPCIONAL) Contenido web extra ──────────────────────────────────
# Si la guía tiene quizzes interactivos o conceptos clave estructurados
# para la versión web, se agregan aquí. El PDF los renderiza implícitos
# dentro de los infobands; la web los muestra como componentes.
web:
  conceptos_clave:        # list opcional · 4-6 entradas
    - termino: "..."
      definicion: "..."
      ejemplo: "..."
      emoji: "..."          # opcional
      categoria: "..."      # opcional · para agrupar
  quiz:                   # opcional · preguntas de verificación
    titulo: "..."
    instrucciones: "..."
    preguntas:
      - enunciado: "..."
        opciones: ["...", "...", "...", "..."]
        respuesta_index: 0
        feedback_correcto: "..."
        feedback_incorrecto: "..."
```

## Contrato v3.1 (opt-in) — campos nuevos

Una guía declara que cumple el contrato v3.1 cuando trae `duracion_min`. Con
ese campo presente, el linter convierte en **errores** las reglas nuevas; sin
él, solo avisa (así las 180 guías anteriores siguen compilando). Piloto: `8-1-1`.

```yaml
duracion_min: 90            # int · duración de la sesión; las actividades no pueden sumar más

apertura:
  origen: Cuaderno del fiado · tiendas de barrio     # rótulo corto (etiqueta del bloque web)
  fuente: |-                                          # referencia APA 7 (LaTeX); va como pie del bloque
    Martínez Benavides, A. (2021). Circuitos crediticios… \emph{Estudios Sociológicos, 39}(116), 467--494.

# Prosa (PDF): cada actividad lleva UN verbo, tiempo y modalidad, y el cuaderno
# trae Título · Formato · Extensión · Sabes que terminaste cuando.
#   \textbf{Actividad 2 · ANALIZA --- Título} (25 min · parejas). (1) … (2) …

web:
  resumen: …                 # opcional · sobrescribe el resumen derivado
  subtema: …                 # opcional
  pre_lectura:               # opcional · sobrescribe lo derivado de la prosa
    por_que_importa: …
    pregunta_detonante: …
    activacion: { titulo: …, descripcion: …, duracion_min: 5 }
    conexion: { anterior: …, siguiente: … }
  mapa_ruta:                 # 4-6 estaciones; la suma de duracion_min = duracion_min de la guía
    - { numero: 1, iconos: ["🌱"], titulo: …, duracion_min: 10 }
  actividades:               # exactamente 3; deben coincidir con la prosa (verbo, tiempo, modalidad, título del cuaderno)
    - numero: 1
      verbo: IDENTIFICA      # uno de los 6
      titulo: …
      tiempo_min: 15
      modalidad: individual  # individual | parejas | equipo (+ equipo_tamano)
      pasos: [ … ]           # 3-6
      cuaderno: { titulo: …, formato: …, extension: … }   # el título aparece en la prosa como «Actividad N --- Título»
      criterios: [ … ]       # ≥ 2, observables
  conceptos_clave:           # `categoria` agrupa en la web (sin emoji)
    - { categoria: …, termino: …, definicion: …, ejemplo: … }
  cinco_dimensiones:         # opcional · personal, emocional, ciudadana, local, intergeneracional
  post_lectura:              # opcional · reflexion, transferencia, cierre
  quiz:                      # la respuesta correcta se reparte entre posiciones (máx. 40 % en una)
```

Reglas v3.1 del linter: `lint_fuente_apertura`, `lint_quiz_balance`, `lint_verbo_unico`,
`lint_tiempo_modalidad`, `lint_extension_cuaderno`, `lint_web_estructura`,
`lint_modo_triangulo`, `lint_oraciones_largas`, `lint_frases_plantilla`, `lint_anclas_prohibidas`.

### Triángulo por edad (`triangulo.modo`)

La calibración de la skill pedagógica manda: 6.º–7.º **`preguntas`**, 8.º **`ideas`**,
9.º–11.º **`citas`**. Sin `modo`, se conserva `citas` (comportamiento anterior).

```yaml
triangulo:
  modo: preguntas            # 6.º–7.º · sin nombrar autores
  dussel:
    pregunta: ¿A quién no le preguntaste hoy qué opina, y por qué?
    aplicacion: |-           # dos o tres frases que aterrizan la pregunta
    pregunta_espejo: …       # se imprime como «Para tu cuaderno: …»
  estoico: { pregunta: …, aplicacion: …, pregunta_espejo: … }
  floridi: { pregunta: …, aplicacion: …, pregunta_espejo: … }

triangulo:
  modo: ideas                # 8.º · nombre e idea contada con palabras de la guía
  dussel:
    autor: Enrique Dussel · Filosofía de la liberación (1977)   # se imprime solo el nombre
    idea: Quien queda fuera del sistema tiene rostro y voz…     # sin comillas
    aplicacion: …
    pregunta_espejo: …

triangulo:
  modo: citas                # 9.º–11.º · citas verificadas del banco
  dussel:
    autor: "Enrique Dussel · Filosofía de la liberación (1977)" # string EXACTO de _banco-citas.yaml
    cita: …                                                     # texto EXACTO del banco
```

Los rótulos de las cajas («Mirar a los demás» / «Enrique Dussel · lente del nosotros» /
«Estoicismo · Marco Aurelio · Meditaciones VI, 21 (c. 175 d.C.) · cuidado interior») y la nota
para el docente los pone `scripts/lib_triangulo.py` (`placeholders_triangulo`) para los cuatro
drivers; la web los replica en `TrianguloBlock.astro`.

### Bancos

- `content/guias/_banco-citas.yaml`: citas cotejadas contra la obra. En una guía v3.1 con modo
  `citas`, `autor` y `cita` deben coincidir con el banco (error del linter si no).
- `content/anclas/banco-anclas.yaml`: prácticas con fuente verificable y cara de exclusión, más la
  lista `descartadas:` (cabañuelas, pregonero, sereno…) que el linter rechaza en el saber ancestral.
- `docs/guia-de-voz.md`: tono, longitud de oración por segmento (18 / 25 / 30 palabras), frases
  prohibidas y ejemplos antes/después.


## Reglas de validación

El builder rechaza un YAML que falle alguna de estas reglas (Pieza 4):

1. **Campos obligatorios presentes** — todo lo marcado `obligatorio` arriba.
2. **Verbo cognitivo** — cada Actividad debe usar uno de los 6: IDENTIFICA · EXPLICA · APLICA · ANALIZA · EVALÚA · CREA.
3. **Balance Bloom** — al menos 3 niveles distintos entre las 4 actividades de la guía.
4. **Triángulo:** Dussel + (Marco Aurelio | Epicteto | Séneca) + Floridi. Cita textual no vacía.
5. **Caracteres especiales LaTeX** — el builder escapa automáticamente `#`, `&`, `%`, `_`, `$`, `~`, `^` en strings antes de inyectar al template.
6. **Saberes ancestrales** — el saber concreto debe nombrar un origen (Wayuu, Quimbaya, campesino, afro-pacífico, etc.). No vale "los pueblos antiguos sabían…".
7. **Regla de 200 palabras** — ningún campo de texto continuo excede 200 palabras (las Actividades, Pilares y Triángulo están naturalmente cortos; los Infobands también).

## Convenciones de escritura

- **Comillas:** usa `« »` para títulos de cuaderno (no `" "` ni `'`). En LaTeX se renderizan con `\guillemotleft` y `\guillemotright`.
- **Negrita:** `**texto**` (Markdown). El builder lo traduce a `\textbf{texto}` en LaTeX y `<strong>` en web.
- **Itálica:** `*texto*` → `\emph{texto}` / `<em>`.
- **Citas:** usa `'\` no `'` cuando vayan dentro de texto regular.
- **Em-dash:** usa `---` (LaTeX style). El builder respeta.
- **Texto con LaTeX:** los campos de prosa llevan `\\textbf{}`, `\\emph{}`, `---`; el generador web los convierte a texto plano (`latex_to_text`).

## Cómo agregar/editar una guía

```bash
# 1. Editar (o crear) el YAML
$EDITOR content/guias/11/11-2-3.yaml

# 2. Compilar PDF + web TS de esa guía
python3 scripts/build-guias-g11.py 2-3

# 3. Ver el PDF
open public/guias-mejoras/13-11-TIC.pdf

# 4. Si todo OK, commit + PR (flujo gh automatizado)
```

## Estado del sistema

| Pieza del sistema | Estado |
|---|---|
| 1. YAML como source de cada guía | ✅ |
| 2. Schema declarativo | ✅ Este documento |
| 3. Pipeline `make guia-build` | ✅ |
| 4. Validador `make guia-lint` | ✅ |
| 5. Asset management | ✅ |
| 6. Workflow de sesión (modos) | ✅ |
| 7. Status `make guia-status` | ✅ |
| 8. Generador web `make guia-web` | ✅ |
