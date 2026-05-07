---
name: alvaro-milc-pedagogy
description: Audit, redesign, and generate MILC guide content using Colombian pedagogical criteria, Bloom/SOLO/DOK/Marzano taxonomies, ICFES-style evaluation, autonomous learning, formative assessment, socio-critical context, and coherent activity-rubric alignment. Use when Codex must improve Tecnología e Informática guides, projects, exams, rubrics, session plans, or curriculum data for Álvaro's MILC materials.
---

# Alvaro MILC Pedagogy

## Purpose

Use this skill to improve MILC educational resources from a pedagogical lens before polishing layout or code. The goal is to make each guide teach well: clear prerequisites, autonomous learning, sufficient conceptual development, coherent activities, contextualized practice, formative feedback, and evaluation aligned with the topic.

This skill complements `milc-guide-auditor`: use this one for pedagogy and curriculum decisions, then use visual/template checks when layout or PDF quality matters.

## Reference Use

Read `references/pedagogy.md` when the task asks for:

- pedagogical diagnosis or redesign of guides;
- Bloom, SOLO, DOK, Marzano, ICFES, DBA, MEN, or Colombian evaluation criteria;
- rubrics, performance levels, formative assessment, gamification, or autonomous learning;
- socio-critical contextualization or interdisciplinary project design;
- conversion of a generic activity into a meaningful learning sequence.

Do not load the reference for simple formatting edits. If the user asks for up-to-date legal or official compliance, verify current official sources before treating the reference as authoritative.

## Quick Workflow

1. Locate the target resource: grade, period, guide number, project, exam, source JSON, generator, TEX, PDF, or DOCX.
2. Identify the intended learning: topic, DBA/referente, competencies, product, MILC phase, and student prior knowledge.
3. Audit coherence:
   - Does the guide explain what students need before asking them to act?
   - Do the activities use the concepts taught in the same guide?
   - Is the task possible for the grade level without hidden teacher knowledge?
   - Is the final product observable and assessable?
4. Classify cognitive demand:
   - Bloom: recordar, comprender, aplicar, analizar, evaluar, crear.
   - SOLO: preestructural, uniestructural, multiestructural, relacional, abstracto extendido.
   - DOK: recall, skill/concept, strategic thinking, extended thinking.
5. Redesign the learning path:
   - Concept development with definitions, examples, non-examples, and common errors.
   - Guided practice that models the task.
   - Independent practice that transfers the skill.
   - Product criteria that tell the student what quality looks like.
   - Reflection that connects technology, ethics, community, and autonomy.
6. Align evaluation:
   - Include concept understanding, application, process evidence, product quality, and reflection.
   - For exams, use ICFES-style contexts with plausible distractors and justifications.
   - For rubrics, use Colombian 1.0-5.0 performance language when useful.
7. If edits repeat across many guides, patch the generator/template or source data instead of only editing one output file.

## MILC Pedagogical Checks

For every guide or activity, verify:

- **Escuta**: The student observes a real context, need, question, user, or problem.
- **Sistematización**: The student receives enough concepts, vocabulary, examples, and criteria to work autonomously.
- **Praxis**: The student produces, tests, revises, compares, or applies something visible.
- **Evaluación liberadora**: The student explains decisions, recognizes impact, and reflects on responsibility.

Flag a guide as weak if it asks students to answer about tools, ethics, concepts, or procedures that were not introduced first.

## Autonomous Learning Pattern

When improving a guide for autonomous learning, include:

- A short activation question tied to the student's context.
- A concept section with 5-7 topic-specific ideas for technical topics.
- A worked example or mini-model.
- A guided practice with partial scaffolding.
- An independent task with a clear deliverable.
- A self-check list.
- A brief reflection prompt on what was learned, revised, or verified.

## ICFES-Style Question Pattern

For final exams or diagnostic checks:

- Context: 2-4 lines, realistic and connected to the topic.
- Question: one clear cognitive action.
- Options: A, B, C, D.
- Distractors: one partially correct, two plausible but incorrect.
- Metadata: competence, component, level, key, and justification.

Prefer questions that evaluate reasoning, evidence, verification, and decision-making over memorization alone.

## Output Expectations

When responding after a pedagogical audit or rewrite, include:

- the main coherence problem found;
- what was improved in concepts, practice, product, and evaluation;
- whether the fix belongs in source JSON, generator, TEX, DOCX, or only the current guide;
- remaining risks or manual review points.

