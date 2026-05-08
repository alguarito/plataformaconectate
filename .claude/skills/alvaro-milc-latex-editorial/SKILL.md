---
name: alvaro-milc-latex-editorial
description: Improve, repair, and design LaTeX-based MILC educational documents for Álvaro, including guide templates, project sheets, final exams, tcolorbox layouts, TikZ diagrams, pgfplots charts, circuitikz schematics, siunitx notation, tables, typography, compile errors, overfull boxes, and print-ready PDF quality.
---

# Alvaro MILC LaTeX Editorial

## Purpose

Use this skill when MILC resources need editorial, visual, or technical improvement in LaTeX. The goal is not decoration for its own sake: every visual decision must make the guide easier to read, solve, teach, print, or assess.

This skill is especially useful for Tecnología e Informática guides, projects, exams, dashboards-as-reports, LaTeX reports in grade 10, and STEM visuals such as graphs, circuits, tables, timelines, or geometric diagrams.

## Reference Use

Read `references/latex-packages.md` when the task involves:

- choosing packages for educational documents;
- improving `tcolorbox`, color systems, page structure, headers, or rubrics;
- drawing diagrams with TikZ, pgfplots, circuitikz, forest, timelines, Venn diagrams, or function plots;
- adding mathematical notation, SI units, formulas, or scientific tables;
- fixing LaTeX compilation, overfull boxes, package conflicts, or visual overflow;
- making a reusable template for guides, projects, exams, reports, or annexes.

Do not load the reference for plain text content edits unless LaTeX structure or visual rendering is part of the task.

## Editorial Principles

- Prefer clarity over ornamental density.
- Use consistent color roles: header, section, activity, warning, example, rubric.
- Do not add visual elements that compete with instructions or assessment criteria.
- Keep boxes shallow and readable; avoid nested boxes unless the hierarchy is essential.
- For student worksheets, leave stable writing space and avoid layouts that collapse when text grows.
- For long Spanish titles, prioritize wrapping, smaller headings, and stable dimensions.
- For printed school material, verify page count, margins, contrast, and whether tables fit.

## Quick Workflow

1. Locate the `.tex`, generator, source JSON, and rendered PDF.
2. Identify the document type: guide, project, exam, plan, annex, report, or template.
3. Inspect the PDF and the `.tex` together. Compilation success alone is not enough.
4. Check for:
   - clipped text, overlapping boxes, footer collisions, excessive blank space;
   - overfull/underfull warnings, fragile tables, and long unbreakable strings;
   - color names or raw template tokens visible in the PDF;
   - inconsistent headings, line spacing, and rubric/table alignment.
5. Patch the generator/template when the issue repeats across documents.
6. Regenerate representative outputs.
7. Render or inspect samples before reporting completion.

## Package Selection Guide

- Use `fontspec` with XeLaTeX/LuaLaTeX for Spanish documents with modern fonts.
- Use `babel` for Spanish language conventions when compatible with the template.
- Use `tcolorbox` for instructional sections, examples, warnings, and rubrics.
- Use `tabularx`, `array`, and controlled column widths for rubrics and student data.
- Use `tikz` for diagrams, visual organizers, worksheets, and structured drawing spaces.
- Use `pgfplots` for mathematical or data charts when the graphic should be generated in LaTeX.
- Use `circuitikz` for electronics or IoT schematics.
- Use `siunitx` for physics, electronics, measurements, units, and scientific notation.

## Anti-vacío: nunca un hueco sin andamiaje

Cada espacio para que el estudiante escriba o dibuje debe ofrecer un
mínimo de andamiaje. Un `\respuesta{}` desnudo es un fracaso pedagógico
y estético. El "espacio en blanco" mata la actividad: el estudiante
queda en parálisis cognitiva ("¿por dónde empiezo?") y la página luce
desértica.

Antes de dejar un hueco, aplica una de estas seis técnicas:

1. **Frame starter (pista de inicio)** — REGLA GENERAL
   Da el comienzo de la respuesta como plantilla con líneas guía.
   Ej: `Me sentí ___ porque ___ y eso me enseñó que ___`
   Implementación LaTeX: tres prompts cortos, cada uno seguido por
   `\rule{14cm}{0.5pt}` o `\respuesta{1}` (NO `\respuesta{2+}`).
   Usar en ≈80% de los huecos. Mantiene la voz personal del estudiante.

2. **Tabla mini-rejilla** — EXCEPCIÓN PARA PARALELISMOS EVIDENTES
   Sustituye espacio libre por tabularx 2-3 columnas con encabezados.
   Usar SOLO cuando hay paralelismo claro (5 dimensiones, comparación
   ancestral/contemporáneo, 4 fases, etc).
   No abusar: la tabla siente "hoja de cálculo" si reemplaza reflexión.

3. **Esquema con cajas pre-dibujadas**
   Para dibujos: 3-9 cajas etiquetadas en TikZ o tabularx, no espacio
   libre. Cada caja con sub-instrucción específica.
   Ej (rejilla 3×3 para símbolo): forma / color / detalle / territorio /
   digital / palabra clave / firma / fecha / flecha de futuro.

4. **Lista numerada con prompts breves**
   1) ___ que ya sé · 2) ___ que descubrí · 3) ___ que me intriga
   Útil cuando se pide enumerar evidencias, hallazgos o pasos.

5. **Pregunta + ejemplo pre-llenado**
   Da un ejemplo trabajado primero, luego el espacio.
   "Ej: 'Mi proyecto demuestra cómo el portafolio digital democratiza
   la voz estudiantil'. **Tu turno:** ___."
   Reduce el bloqueo "no sé qué escribir".

6. **Banda de información complementaria** (anti-pie de página vacío)
   Si una sección termina pronto y deja >5cm al pie de página, insertar:
   - dato curioso del tema (1-2 líneas con tcolorbox pequeño)
   - cita complementaria de un maestro del Triángulo
   - glosario mínimo de términos técnicos
   - mini-historia de un estudiante real (anonimizado)
   - "Saber más": pista de un libro, video o link sugerido

### Reglas duras

- NUNCA `\respuesta{>2}` sin frame starter o esquema previo.
- NUNCA `\vspace{>3cm}` para dibujo sin cajas o cuadrícula.
- NUNCA dos `\respuesta{}` consecutivos sin separación contextual.
- NUNCA terminar una página con >5cm de blanco al pie.
- Si la página termina con espacio sobrante, llenar con técnica #6.

### Combinaciones recomendadas

- Reflexión personal/emocional (Escuta, Evaluación) → técnica #1
- 5 dimensiones liberatorias paralelas → técnica #2 (tabla)
- Triángulo Dussel/Estoicismo/Floridi → técnica #1 dentro de cada softbox
  (NO tabla — cada voz necesita respiro independiente)
- Drawbox de símbolo o dibujo → técnica #3 (cajas guiadas)
- Listas de hallazgos, criterios → técnica #4
- Frase de abstracción, guion plantilla → técnica #5 (ejemplo)
- Pies de página vacíos → técnica #6 (banda info)

## MILC Document Checks

For guides:

- portada intentional, no black/transparent artifacts;
- MILC phases visually distinct but not visually noisy;
- concept sections readable and not overly compressed;
- guided practice and independent practice have enough space;
- product criteria and rubric are visible and specific;
- **anti-vacío**: every `\respuesta{}` and `\vspace{}` for drawing has
  scaffolding (frame starter, mini-table, pre-drawn boxes, numbered
  prompt list, worked example, or info-band). NO blank holes.

For exams:

- student information appears once and clearly;
- questions do not split awkwardly;
- answer space is sufficient;
- rubric fits without clipping;
- page count matches the intended assessment design.

For projects:

- challenge, product, phases, deliverables, and rubric are easy to scan;
- drawing/planning spaces are large enough;
- instructions do not disappear inside decorative boxes.

## Compile And Verify

Prefer the repository's existing compiler flow. If none exists:

- Use XeLaTeX or LuaLaTeX for `fontspec`.
- Use Tectonic when the project already supports it or portability matters.
- Save build artifacts outside source folders when possible.
- After compile, inspect at least one short-title and one long-title sample.

### Render-validation: compilar OK ≠ ver bien

**Compilation success without warnings is NOT enough.** A guide can compile
clean and still have huge white bands when forced `\newpage` separates
content into nearly-empty pages. ALWAYS validate the rendered PDF
visually before declaring done.

Required render-validation pipeline:

```bash
# 1. Convert each page to PNG (80 dpi is enough)
gs -q -dNOPAUSE -dBATCH -sDEVICE=png16m -r80 \
   -sOutputFile=pages/p%02d.png file.pdf

# 2. Detect whitespace bands per page
python3 -c "
from PIL import Image
img = Image.open('pages/p03.png').convert('L')
w, h = img.size
pixels = img.load()
rows = [sum(1 for x in range(w) if pixels[x,y]>240)/w for y in range(h)]
# Find continuous bands where row >98.5% white and length >80px (~2.5cm)
"
```

Threshold rules:
- A band of **>80 pixels at 80dpi (~2.5cm) of >98.5% white** is suspicious.
- A band **>5cm in the middle or top** of any page is a failure → fix it.
- A band **at the page bottom (last 30%)** is acceptable up to ~5cm
  (normal page letter margin).

### Common causes of white bands

1. **`\newpage` overuse**: every forced page break is a candidate for an
   almost-empty page. Use `\newpage` ONLY for the cover. Let LaTeX flow
   naturally; if a section begins on a tight page, use `\pagebreak[3]`
   (suggestion) instead of `\newpage` (force).

2. **Big drawbox + sigilbox grid undersized**: if the drawing area is
   smaller than the remaining page space, the rest is white. Either
   enlarge the cells or add a complementary block (cita, info-band,
   firma, footer).

3. **End of document with leftover space**: add a closing soft-box
   (cita rotativa de un maestro del Triángulo) + firma del cierre
   to fill the last page densely.

When reporting, include the files changed, the outputs regenerated, the
**per-page whitespace report**, and any remaining visual risk.

