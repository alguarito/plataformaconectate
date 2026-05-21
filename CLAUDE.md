# Plataforma Conéctate — Contexto para Claude Code

Plataforma educativa de Tecnología e Informática (I.E. Sor María Juliana, Cartago, Valle del Cauca). Aloja **150 guías + 15 proyectos integradores** para grados 6° a 10°. Construida con **Astro + Tailwind + TypeScript** y opera offline-first (Service Worker).

Docente y propietario: **PhD. Álvaro Cárdenas Orozco**.

## Lineamientos de Diseño UI/UX

> Estos lineamientos aplican cuando la skill `frontend-design` se active (creación o ajuste de componentes, páginas, layouts).

### Público y dispositivos
- Estudiantes de 11 a 16 años.
- Mayoría usa **Android gama media**, pantallas pequeñas (360–414 px), datos limitados.
- También docentes y acudientes en escritorio.
- **Mobile-first siempre.** Probar el diseño a 360 px antes que a 1440 px.

### Sistema visual existente (respetar — no reinventar)
El proyecto ya tiene un sistema **"Bento Moderna"** en [tailwind.config.mjs](tailwind.config.mjs):
- Paleta: `bento.*` (blue `#0066FF`, lime, orange, pink, purple, cyan, yellow) sobre neutros.
- Radios grandes: `bento-sm` 16px, `bento` 24px, `bento-lg` 32px.
- Sombras suaves: `shadow-bento`, `shadow-bento-hover`.
- Escalas tipográficas display: `text-mega`, `text-giant`, `text-huge`.

**Antes de proponer un rediseño completo, primero ajusta dentro del sistema Bento.** Solo plantea cambios de sistema si el usuario lo pide explícitamente.

### Tipografía
- **Mantener Inter como única familia** (definida en Tailwind), tanto para body como para displays.
- **No agregar fuentes nuevas** sin pedirlo explícitamente el usuario. El proyecto prefiere consistencia tipográfica.
- **Evitar** Roboto, Arial, Helvetica, Space Grotesk, Poppins.

### Accesibilidad (no negociable)
- Contraste mínimo **WCAG AA 4.5:1** en texto. Cuidar `bento.lime` y `bento.yellow` sobre blanco — solo decorativos, nunca para texto.
- Targets táctiles ≥ 44×44 px.
- Respetar `prefers-reduced-motion`: las animaciones `slide-up`, `marquee`, etc. deben desactivarse.
- Soporte de teclado y `:focus-visible` claro en todo elemento interactivo.
- Modo oscuro: `darkMode: 'class'` ya está activo — verificar siempre la variante dark.

### Performance
- Es **offline-first** (Service Worker activo). No introducir dependencias pesadas sin razón.
- Imágenes: usar `astro:assets` (`<Image />`), nunca `<img>` crudo con archivos grandes.
- Lazy-load todo lo que no esté above-the-fold.
- **Bump del Service Worker** (regla precisa, no genérica):
  - ✅ Bumpear `public/sw.js` solo si: cambia un PDF compilado, una imagen en `public/`, el LOGO.png, o la lógica del propio SW.
  - ❌ NO bumpear si solo cambia HTML/CSS de un componente Astro, código TypeScript en `src/`, o YAMLs sin recompilar PDFs. El navegador o el `stale-while-revalidate` los refresca solo.
  - Ver el header de `public/sw.js` que tiene la tabla SÍ/NO completa.

### Tono y lenguaje
- Español neutro de Colombia, cercano pero no infantil. Estudiantes de secundaria, no niños.
- Inspiración de tono: [iemauxicartago.edu.co/Fisica/](https://iemauxicartago.edu.co/Fisica/) — sobrio, académico, claro.
- CTAs en verbo claro: "Abrir guía", "Continuar", "Descargar PDF" (no "Click aquí").

### Componentes clave del proyecto
- `BaseLayout.astro`, `GuiaLayout.astro` — layouts base.
- `Hero.astro`, `Navigation.astro`, `Footer.astro` — chrome.
- `GradoCard.astro`, `PeriodoCard.astro`, `ProgresoCard.astro` — tarjetas de navegación.
- `LabQuiz.astro`, `LabVisualizacion.astro`, `TestRunner.astro` — actividades interactivas.
- Antes de crear un componente nuevo, **buscar si ya existe uno equivalente**.

## Contrato editorial para guías de aprendizaje

> Estos lineamientos aplican cuando generes, audites o ajustes una **guía didáctica** de la plataforma (sea formato Astro/HTML interactivo o LaTeX/PDF). La skill `alvaro-milc-pedagogy` contiene el desarrollo completo (template, ejemplos, repertorios). Esta sección es el **contrato mínimo innegociable** que debe leerse en TODA sesión.

### Estructura obligatoria de la guía (10 secciones, en este orden)

1. **🌱 Estación 1 · Saber ancestral** — apertura siempre. Conecta un saber indígena/afro/campesino/popular (priorizar Valle del Cauca y Pacífico, abrir al ámbito nacional cuando convenga) con el tema técnico de la guía. **No es decoración: es anclaje.** Cierra con pregunta-puente.
2. **🗺 Tu ruta hoy** — mapa de la guía con 4-6 estaciones nombradas y tiempo estimado de cada una.
3. **Propósito de aprendizaje** — 3-5 desempeños redactados en niveles Bloom/SOLO crecientes + producto final esperado.
4. **Marco conceptual** — desarrollo teórico estructurado, glosario, ejemplos **contextualizados** (no genéricos), diagramas cuando apliquen.
5. **Secuencia de actividades** — escalonada por Bloom (recordar → crear). Alternancia obligatoria leer/hacer (ver regla de 200 palabras).
6. **Componente práctico tecnológico** — herramienta concreta, paso a paso reproducible.
7. **Evaluación** — formativa intercalada + sumativa final con rúbrica visible + al menos 1 ítem tipo ICFES en evaluaciones de cierre.
8. **💭 Cierre filosófico — Triángulo de pensamiento** — Dussel, Estoicismo, Floridi. Versión adaptada por grado (en 6°-8° las preguntas son cotidianas; en 9°-11° con citas y autores).
9. **Evaluación liberadora — 5 dimensiones** — personal, emocional, ciudadana, local, intergeneracional.
10. **Pie institucional** — I.E. Sor María Juliana · Cartago · PhD. Álvaro Cárdenas Orozco · área de Tecnología e Informática.

### Iconografía de bloques (vocabulario visual cerrado)

Solo estos íconos, solo este significado. Aparecen siempre con la misma etiqueta:

| Icono | Bloque | Significado |
|---|---|---|
| 🌱 | **SABER ANCESTRAL** | Apertura, anclaje a saberes locales |
| 📖 | **LEE** | Contenido para comprender, no para copiar |
| ✏️ | **ACTIVIDAD** | Produce escritura en el cuaderno (única vía) |
| 👁 | **OBSERVA** | Atención dirigida (imagen, video) sin escritura |
| ✅ | **VERIFICA** | Mini-quiz mental rápido, no va al cuaderno |
| 🔎 | **EXPLORA** | Acción en el computador / abrir programa / navegar |
| 💭 | **REFLEXIONA** | Pensamiento metacognitivo o cierre filosófico |

### Anatomía obligatoria del bloque ACTIVIDAD (6 partes, en este orden)

```
✏️ ACTIVIDAD N · [verbo cognitivo]
Título imperativo en una línea
⏱ tiempo · 🤝 modalidad (individual / parejas / equipo)

📋 Qué vas a hacer
1. Paso accionable
2. Paso accionable
3. Paso accionable

📓 En tu cuaderno escribe:
  Título: «Actividad N — [título]»
  Formato: [párrafo de X renglones / tabla N×N / lista / dibujo / mapa]
  Extensión: [cantidad concreta]

✅ Sabes que terminaste cuando:
  • Criterio observable 1
  • Criterio observable 2
```

**Sin esta anatomía completa, no es una ACTIVIDAD válida.**

### Vocabulario cognitivo controlado (solo 6 verbos)

Cada ACTIVIDAD lleva exactamente uno de estos 6 verbos. No usar sinónimos ni inventar nuevos:

| Etiqueta | Pide al estudiante | Bloom |
|---|---|---|
| **IDENTIFICA** | Reconocer, listar, definir | Recordar |
| **EXPLICA** | Poner en sus palabras | Comprender |
| **APLICA** | Usar lo aprendido en caso nuevo | Aplicar |
| **ANALIZA** | Comparar, descomponer, relacionar | Analizar |
| **EVALÚA** | Juzgar con criterios | Evaluar |
| **CREA** | Producir algo nuevo | Crear |

Una guía bien balanceada **debe** incluir actividades en al menos 3 niveles distintos, terminando idealmente en CREA.

### Contrato del cuaderno del estudiante

Toda guía instruye al estudiante a iniciar el trabajo del cuaderno con este encabezado fijo:

```
Guía: [grado]° · Periodo [N] · Guía [N]
Tema: [título de la guía]
Fecha: __/__/____
```

Reglas:
- Cada guía empieza en página nueva con ese encabezado.
- Las actividades van numeradas idéntico que en la guía: «Actividad 1 — …», «Actividad 2 — …»
- Saberes ancestrales (🌱) y reflexión (💭) tienen apartados propios, no son "actividades".
- **Solo lo que aparece en bloque `ACTIVIDAD` y en los apartados `🌱` y `💭` va al cuaderno.** El resto es para leer y entender.

### Reglas de claridad (innegociables)

1. **Regla de 200 palabras**: ningún bloque de texto puede pasar de 200 palabras sin una acción intercalada (ACTIVIDAD, VERIFICA, OBSERVA, EXPLORA). Esta es la regla más poderosa para evitar que el estudiante se pierda.
2. **Numeración de paso visible** en todo momento: en plataforma web como barra de progreso pegada; en LaTeX/PDF como header de página (`Paso 3 de 5`).
3. **Anclaje explícito entre secciones** (puentes): cada sección nueva empieza con UN renglón que conecta con la anterior. *"Hasta aquí entendiste X. Ahora vas a Y porque…"*
4. **Micro-cierre al final de cada estación**: 3-5 viñetas con lo aprendido en esa estación + (opcional) mini-quiz de 2-3 preguntas usando el componente `LabQuiz`.
5. **Instrucciones en voz imperativa, segunda persona**: «Escribe en tu cuaderno…», nunca «Los estudiantes escribirán…».
6. **Ejemplos contextualizados**: no «Juan tiene 3 manzanas». Sí: contexto Cartago, Valle, cotidiano del estudiante.

### Tipografía y formato (no agregar fuentes serif/display al rediseñar guías digitales)

- Mantener **Inter** como única familia (consistente con la regla de tipografía UI).
- Para énfasis usar peso (bold/black) o color del sistema Bento, no fuentes nuevas.

## Workflow de sesión — los 3 modos de trabajo

> **Esta sección es el protocolo de Claude al iniciar cada sesión nueva.** Sigue este flujo sin esperar que el usuario lo recuerde.

### Protocolo de arranque (siempre, sin pedirlo)

Cuando una sesión nueva empiece y el usuario diga algo como "continuemos", "siguiente", "sigamos", "hola", o cualquier saludo abierto sobre las guías, **antes de cualquier otra cosa** ejecutar:

```bash
make guia-status
```

Esa orden muestra el estado real del trabajo (no la memoria del modelo, que puede estar desactualizada). A partir del output, proponer la siguiente acción concreta.

### Los 3 modos

Según lo que el usuario quiera hacer, la sesión se acomoda a uno de estos modos:

#### 🚀 Modo `bloque` — expansión normal (default)

**Cuándo:** la sesión arranca con guías pendientes y el usuario quiere avanzar (lo más común).

**Trigger:** `make guia-status` reporta pendientes Y el usuario dice "continuemos", "siguiente bloque", "sigue", etc.

**Protocolo:**
1. Identificar el siguiente bloque sugerido (3-5 guías consecutivas).
2. Proponer al usuario el bloque con un titular por guía + ancla ancestral.
3. Esperar confirmación o pivote (`"sí"` / `"no, prefiero X"`).
4. Expandir cada outline → ~38 campos completos.
5. `make guia-build` para compilar.
6. `make guia-lint` para validar.
7. Commit + push + `gh pr create` → pasar link al usuario.

#### 🔧 Modo `afina` — ajuste puntual

**Cuándo:** el usuario detectó algo específico que ajustar en UNA guía.

**Trigger:** el usuario dice "afina G02 saber ancestral", "cambia X en la guía Y", "el verbo de la actividad 3 de la guía 5 debería ser...".

**Protocolo:**
1. Leer SOLO el YAML afectado.
2. Confirmar el cambio (qué se reemplaza por qué).
3. Editar UN campo específico (Edit puntual).
4. `make guia-build CLAVE=p-s` (solo esa).
5. `make guia-lint CLAVE=p-s` (solo esa).
6. Commit pequeño + PR pequeña → link al usuario.

**Regla:** no aprovechar para cambiar nada más. Una afinación = un cambio = una PR.

#### 🔍 Modo `audita` — revisión antes de aula

**Cuándo:** el usuario va a usar las guías en clase y quiere asegurarse de que todo está sano.

**Trigger:** el usuario dice "audita", "revisa todo", "antes de imprimir", "voy a usar X en clase mañana".

**Protocolo:**
1. `make guia-status` (estado general).
2. `make guia-lint-strict` (warnings cuentan como errores).
3. `make guia-assets` (verifica que ningún asset esté roto).
4. Reportar al usuario en formato tabla: ✓ OK / ⚠ atención / ✗ fix urgente.
5. **NO hacer cambios** automáticamente. El usuario decide qué arreglar después.
6. Si hay errores, ofrecer entrar en modo `afina` para resolverlos uno por uno.

### Cómo Claude reconoce el modo

| Lo que dice el usuario | Modo |
|---|---|
| "continuemos", "siguiente", "sigamos", "ok", saludo inicial | `bloque` (default) |
| "afina X", "cambia Y", "el campo Z de la guía W" | `afina` |
| "audita", "revisa", "antes de clase", "imprimo mañana" | `audita` |
| "estado", "cómo vamos", "dónde quedamos" | sólo correr `make guia-status` |

Si la intención es ambigua, **preguntar** antes de decidir. Pero por defecto, `bloque`.

### Lo que NO hacer

- **Nunca** proponer "innovar" sobre las piezas del sistema (YAML, schema, contrato editorial) sin pedirlo explícitamente el usuario. Ese trabajo ya está cerrado.
- **Nunca** editar archivos generados (`.tex`, `.pdf`, archivos `.ts` derivados). Siempre editar el YAML.
- **Nunca** saltar el linter antes del commit. Si lint falla, fix antes de PR.
- **Nunca** mergear PRs por el usuario (regla persistente del workflow).

## Arquitectura del generador de guías PDF

> Esta sección describe la **single source of truth** para generar guías. Aplica a las guías de grado 11° (y se extenderá a los demás grados con el mismo patrón).

### Single source of truth: archivos YAML

Cada guía vive en **un solo archivo YAML** bajo `content/guias/{grado}/{clave}.yaml` (clave = `{grado}-{periodo}-{sesion}`). De ese único archivo se generan **todas las salidas**:

```
content/guias/11/11-1-2.yaml  ◀────────  fuente única editable
        │
        ▼
build-guias-g11.py
        │
        ├──▶  public/guias-mejoras/2-11-TIC.pdf  (vía xelatex)
        └──▶  src/data/guiasContenido/11-1-2.ts  (vía generador TS · próxima pieza)
```

**Regla de oro:** nunca edites `.tex` ni `.ts` generados; siempre edita el YAML.

### Comandos (vía `make`)

```bash
make help                          # lista todos los comandos disponibles
make guia-status                   # tablero de progreso del grado, sin recompilar
make guia-build                    # compila todas las completas
make guia-build CLAVE=1-2          # compila solo G11·P1·S2
make guia-show CLAVE=1-2           # abre el PDF en Preview
make guia-edit CLAVE=1-2           # abre el YAML en VS Code (o $EDITOR)
make guia-clean                    # limpia auxiliares LaTeX (.aux, .log, .out)
make guia-lint                     # valida contrato MILC v3 en todas las guías
make guia-lint CLAVE=1-2           # valida solo G11·P1·S2
make guia-lint-strict              # warnings cuentan como errores
make guia-assets                   # lista assets (imágenes, diagramas) de todas las guías
make guia-assets CLAVE=1-2         # solo G11·P1·S2
```

> **Assets:** las imágenes y diagramas de cada guía viven en `public/guias-mejoras/assets/{sesionGlobal}-{grado}/`. Se referencian desde el YAML en la sección opcional `recursos.imagenes` y `recursos.diagramas`. Ver [public/guias-mejoras/assets/README.md](public/guias-mejoras/assets/README.md) para la convención completa.

> **Para sesiones futuras:** la primera acción de cada sesión nueva debería ser `make guia-status` para ver dónde estamos antes de proponer trabajo. El siguiente pendiente sale resaltado.

### Esquema del YAML

Documentación completa en [content/guias/_SCHEMA.md](content/guias/_SCHEMA.md). Incluye:
- Estructura de los 30+ campos del contrato editorial MILC v3
- Reglas de validación
- Convenciones de escritura (negrita, itálica, comillas, em-dash)
- Cómo agregar o expandir una guía

### Cuándo es `completo: true` vs outline

- **`completo: true`** → todos los campos del contrato presentes. El builder compila el PDF.
- **`completo: false`** (outline) → solo `titulo`, `producto_final`, `saber_ancestral_idea`, `verbos_actividades`. El builder lo lista como pendiente sin compilar.

### Estado de las piezas del sistema

| Pieza | Estado |
|---|---|
| 1. YAML como source | ✅ |
| 2. Schema declarativo | ✅ |
| 3. Pipeline `make guia-build` | ✅ |
| 4. Validador `make guia-lint` | ✅ |
| 5. Asset management | ✅ |
| 6. Workflow de sesión (modos) | ✅ |
| 7. Status `make guia-status` | ⏳ |

## Reglas operativas para Claude

- No agregar emojis al código ni a la UI salvo que se pida explícitamente.
- No crear archivos `.md` de documentación sin que se pidan.
- Para cambios de UI, **probar visualmente** (`npm run dev` + navegador) antes de declarar la tarea completa.
- Service Worker: ver "Bump del Service Worker" arriba en la sección Performance. Bumpear solo cuando se regeneran PDFs, se cambia una imagen del SHELL_URLS, o cambia la lógica del propio SW. Para cambios de HTML/CSS/TS de Astro, NO bumpear (Astro hashea URLs y stale-while-revalidate refresca el HTML al próximo load).
