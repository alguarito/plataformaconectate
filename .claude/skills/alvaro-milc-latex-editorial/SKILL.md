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

## MILC Document Checks

For guides:

- portada intentional, no black/transparent artifacts;
- MILC phases visually distinct but not visually noisy;
- concept sections readable and not overly compressed;
- guided practice and independent practice have enough space;
- product criteria and rubric are visible and specific.

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

When reporting, include the files changed, the outputs regenerated, and any remaining visual risk.

