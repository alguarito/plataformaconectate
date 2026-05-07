# Claude Skills — MILC

Skills personalizadas para el proyecto **Plataforma ConectaTE** y los recursos
MILC de Tecnología e Informática (I.E. Sor María Juliana, Cartago).

Cada subcarpeta sigue el formato Anthropic Skills:
- `SKILL.md` — descripción y workflow de la skill
- `agents/openai.yaml` — metadata para invocación
- `references/*.md` — material de referencia denso (cargado solo cuando aplica)

## Skills disponibles

| Skill | Cuándo usarla |
|---|---|
| **alvaro-milc-pedagogy** | Auditoría pedagógica con Bloom/SOLO/DOK/Marzano, ICFES, DBA, escala 1.0–5.0 colombiana, MILC (Escuta-Sistematización-Praxis-Evaluación liberadora). |
| **alvaro-milc-ia-empresarial** | Currículo IA + negocios (grados 9-11): prompts, libros con IA, reportes LaTeX, dashboards, presencia digital, automatización, pitch. |
| **alvaro-milc-latex-editorial** | LaTeX educativo: tcolorbox, TikZ, pgfplots, circuitikz, siunitx, layout print-ready. |
| **alvaro-milc-stem-lab** | Laboratorios STEM: matemática, física, electrónica/IoT, Python científico, simulaciones, dashboards. |

## Cómo invocarlas (Claude Code)

Claude detecta automáticamente la skill apropiada según la solicitud. Ejemplos:

- *"Audita pedagógicamente la guía 5 de grado 8 P2"* → invoca `alvaro-milc-pedagogy`
- *"Mejora el layout LaTeX del proyecto-1-10-TIC"* → invoca `alvaro-milc-latex-editorial`
- *"Diseña una simulación de circuito RC para grado 9"* → invoca `alvaro-milc-stem-lab`
- *"Diseña la sesión de prompts para grado 10 P1"* → invoca `alvaro-milc-ia-empresarial`

## Origen

Las skills están versionadas desde el Drive maestro
(`08_SKILLS_PERSONALIZADAS`). Si actualizas el Drive, vuelve a sincronizar
con `scripts/generadores/` o haz commit directo en este repo.
