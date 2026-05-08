---
name: alvaro-milc-pedagogy
description: Audit, redesign, and generate MILC guide content using Colombian pedagogical criteria, Bloom/SOLO/DOK/Marzano taxonomies, ICFES-style evaluation, autonomous learning, formative assessment, socio-critical context, computational thinking, and a closing philosophical triangle (Dussel, Stoicism, Floridi). Use when Codex must improve Tecnología e Informática guides, projects, exams, rubrics, session plans, or curriculum data for Álvaro's MILC materials.
---

# Alvaro MILC Pedagogy

## Purpose

Use this skill to improve MILC educational resources from a pedagogical lens before polishing layout or code. The goal is to make each guide teach well: clear prerequisites, autonomous learning, sufficient conceptual development, coherent activities, contextualized practice, formative feedback, and evaluation aligned with the topic.

Beyond the technical content, every MILC guide must form an integral human being. That requires three additions to the standard MILC cycle:

1. **Apertura ancestral-contemporánea** — connect ancestral/local knowledge with contemporary technical knowledge at the start of the guide.
2. **Pensamiento computacional** transversal — apply the four pillars of computational thinking explicitly during *Sistematización* and *Praxis*.
3. **Cierre liberador** — close the guide with five human-social dimensions (personal, emotional, citizenly, local, intergenerational) and a **Triángulo de pensamiento** with three master voices: Dussel, Stoicism, Floridi.

This skill complements `alvaro-milc-latex-editorial`: use this one for pedagogy and curriculum decisions, then apply visual/template checks when layout or PDF quality matters.

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
   - Does the guide open with an ancestral-contemporary bridge that anchors the topic in local knowledge?
   - Does the guide explain what students need before asking them to act?
   - Do the activities use the concepts taught in the same guide?
   - Are the four pillars of computational thinking (decomposition, pattern recognition, abstraction, algorithm) made explicit during Sistematización and Praxis?
   - Is the task possible for the grade level without hidden teacher knowledge?
   - Is the final product observable and assessable?
   - Does Evaluación liberadora cover all five human-social dimensions and close with the Triángulo de pensamiento?
4. Classify cognitive demand:
   - Bloom: recordar, comprender, aplicar, analizar, evaluar, crear.
   - SOLO: preestructural, uniestructural, multiestructural, relacional, abstracto extendido.
   - DOK: recall, skill/concept, strategic thinking, extended thinking.
5. Redesign the learning path:
   - Ancestral–contemporary opening with a bridge question.
   - Concept development with definitions, examples, non-examples, and common errors.
   - Guided practice that models the task with explicit computational thinking.
   - Independent practice that transfers the skill.
   - Product criteria that tell the student what quality looks like.
   - Five-dimension liberatory reflection plus the philosophical triangle.
6. Align evaluation:
   - Include concept understanding, application, process evidence, product quality, and reflection across all five dimensions.
   - For exams, use ICFES-style contexts with plausible distractors and justifications.
   - For rubrics, use Colombian 1.0-5.0 performance language when useful.
7. If edits repeat across many guides, patch the generator/template or source data instead of only editing one output file.

## Apertura: saberes ancestrales y contemporáneos

Every guide opens with a bridge between knowledges. The introduction does not present the topic — it connects it to what the culture already knows.

Three obligatory movements at the start of every guide:

1. **Saber ancestral or tradicional**
   A practice, symbol or knowledge of indigenous, Afro, peasant, craft, or community-memory roots that resonates with the topic.
   Examples by topic family:
   - Tejido (Wayuu, Páez) ↔ algoritmos, capas, estructura
   - Trueque andino, mercado campesino ↔ economía digital, valor, intercambio
   - Mingas, convites ↔ trabajo colaborativo, código abierto, comunidad
   - Memoria oral, palabras de mayores ↔ archivo digital, narrativa, audio
   - Ríos, cosechas, ciclos lunares ↔ flujo de datos, periodicidad
   - Consejos comunitarios, cabildos ↔ gobernanza digital, deliberación

2. **Saber contemporáneo / técnico**
   The modern technical concept the guide will teach.

3. **Pregunta-puente de reflexión**
   A provocative question that invites the student to find continuity between ancestral and contemporary knowledge.
   Examples:
   - "¿Qué del tejido Wayuu nos enseña sobre cómo organizar datos?"
   - "¿Por qué la minga y el código abierto son la misma idea en dos tiempos?"
   - "¿Qué le diría una abuela tejedora a un programador joven?"

This opening is NOT cultural decoration. It is the anchor that prevents technology from feeling foreign, imported, or imposed. The aesthetics of liberation (Dussel) and Stoicism dialogue with local knowledge — that is the MILC signature.

## MILC Pedagogical Checks

For every guide or activity, verify:

- **Escuta**: The student observes a real context, need, question, user, or problem.

- **Sistematización (con pensamiento computacional)**: The student receives concepts, vocabulary, examples, and criteria, AND practices the four pillars of computational thinking on the topic itself:
  - **Descomposición**: divide the topic or problem into manageable parts.
  - **Reconocimiento de patrones**: identify regularities, analogies, or recurring structures.
  - **Abstracción**: separate the essential from the accessory; name the model or general rule.
  - **Algoritmo conceptual**: sequence logical steps to understand, explain, or apply the concept.

  The result is not memorization but a transferable mental model.

- **Praxis (con pensamiento computacional aplicado)**: The student produces, tests, revises, compares or applies something visible, AND the construction of the product demonstrates the four pillars:
  - **Descomposición** of the product into components or stages.
  - **Reconocimiento de patrones** between existing solutions and one's own.
  - **Abstracción** of the product's essential function (what it does in one sentence).
  - **Algoritmo de ejecución**: concrete steps to build, test, and iterate.

  This turns the product into a reasoned decision, not a mechanical copy.

- **Evaluación liberadora**: see expanded section below.

Flag a guide as weak if it:
- skips the ancestral-contemporary opening;
- asks students to answer about tools, ethics, concepts, or procedures that were not introduced first;
- treats Sistematización or Praxis as content-dump without the four computational thinking pillars;
- closes with a generic "self-evaluation" instead of the five dimensions and the Triángulo;
- **leaves blank `\respuesta{}` or `\vspace{}` without scaffolding** (frame
  starter, mini-table, pre-drawn boxes, prompt list, worked example, or
  info-band). Refer to `alvaro-milc-latex-editorial` "Anti-vacío" section.
  Frame starter is the dominant technique (~80% of slots); tables only for
  evident parallelism (5 dimensions, comparisons).

## Autonomous Learning Pattern

When improving a guide for autonomous learning, include:

- An ancestral-contemporary opening with bridge question.
- A short activation question tied to the student's context.
- A concept section with 5-7 topic-specific ideas, mapping the four computational thinking pillars.
- A worked example or mini-model.
- A guided practice with partial scaffolding.
- An independent task with a clear deliverable produced through computational decomposition.
- A self-check list.
- The five-dimension reflection and the Triángulo de pensamiento.

## Evaluación liberadora — cinco dimensiones

The student recognizes what was learned and links the developed competencies to five human-social dimensions:

1. **Desarrollo personal** — ¿Qué cambió en mí, en mi forma de pensar, hacer o decidir? ¿Qué descubrí sobre mis capacidades, preguntas o aspiraciones?

2. **Control emocional** — ¿Qué emociones surgieron (frustración, asombro, confusión, orgullo)? ¿Cómo las reconocí y regulé? Estoicismo aplicado: distinguir lo que depende de mí (atención, esfuerzo, juicio) de lo que no.

3. **Reflexión ciudadana** — ¿Cómo se relaciona este aprendizaje con derechos, deberes, democracia, debates públicos, uso ético de la tecnología, vida en común? ¿Qué exige de mí como ciudadano digital?

4. **Reflexión local** — ¿Qué significa este aprendizaje en mi contexto inmediato: barrio, escuela, Cartago, Valle del Cauca, Colombia? ¿A quién en mi entorno le serviría? ¿Qué problema local podría tocar? Incluye lo ecológico-territorial.

5. **Vínculo intergeneracional** — ¿Qué le diría mi abuela/abuelo sobre lo que aprendí hoy? ¿Qué de este aprendizaje quiero pasarle a quienes vienen detrás de mí (hermanos menores, hijos futuros)? Cierre del círculo abierto en la apertura ancestral.

Each guide must offer the student an explicit space to answer at least ONE question per dimension (1-2 lines is enough), with the rubric reflecting these five dimensions in addition to cognitive and procedural criteria.

## Triángulo de pensamiento (cierre filosófico de cada guía)

Every MILC guide closes with a dialogue with three masters of thought. NOT decoration — three lenses that the student internalizes across the school cycle. They appear always, in this order, before the final commitment, in three vertical color-coded boxes:

### 1. DUSSEL (lente del nosotros) — color milcVino #5A0038

A short citation of Enrique Dussel or an echo of his thought, applied to the topic.
Mirror question: ¿quién está oprimido o silenciado por este tema? ¿qué palabra libera?
Connects with: Reflexión ciudadana · Reflexión local · Estética de la liberación · Analéctica.

Citation repertoire (rotate by topic):
- "Toda comunidad de comunicación se hace plena cuando incluye la voz del excluido." — temas: comunicación, redes, sustentación, medios.
- "El Otro es el origen absoluto de la responsabilidad ética." — temas: ética, IA, datos personales, ciudadanía.
- "La analéctica supera a la dialéctica al partir del Otro como Otro." — temas: diversidad, accesibilidad, inclusión digital.
- "La belleza estética nace donde una voz silenciada encuentra forma." — temas: diseño, multimedia, creación.
- "La filosofía de la liberación es el pensar de los que han sido excluidos." — temas: pensamiento crítico, identidad.
- "Sin reconocimiento del Otro no hay justicia, sólo poder." — temas: privacidad, vigilancia, derechos.
- "El sur global piensa desde su propia herida y desde ahí ofrece mundo." — temas: tecnologías locales, soberanía digital.

### 2. ESTOICISMO (lente del cuidado interior) — color milcMostaza #E5B400

Rotates among Marco Aurelio, Epicteto, and Séneca. Choose the citation that best resonates with the topic.
Mirror question: distinguish what depends on me from what does not.
Connects with: Control emocional · Desarrollo personal · Ataraxia digital.

**Epicteto:**
- "No nos perturban las cosas, sino las opiniones que tenemos de ellas." — temas: ansiedad, ciberbullying, redes.
- "Algunas cosas dependen de nosotros y otras no — distinguir esto es la libertad." — temas: frustración digital, ataraxia.
- "No es lo que dices, es lo que haces lo que define quién eres." — temas: coherencia, ética, integridad.

**Marco Aurelio:**
- "Tu vida es lo que tus pensamientos hagan de ella." — temas: identidad digital, narrativa propia.
- "El obstáculo en el camino se vuelve el camino." — temas: errores, debugging, fracaso constructivo.
- "El presente es lo único que poseemos. Cuídalo." — temas: atención, foco, anti-distracción.
- "Sé como el promontorio donde rompen las olas, firme y tranquilo." — temas: resiliencia, presión social.

**Séneca:**
- "No tenemos poco tiempo, sino que perdemos mucho." — temas: productividad, atención, scroll infinito.
- "Mientras esperamos vivir, la vida pasa." — temas: procrastinación, presencia.
- "Toda dificultad bien llevada nos prepara para la siguiente." — temas: aprendizaje iterativo.

### 3. FLORIDI (lente de la infoesfera) — color milcTurquesa #0093A5

A short citation of Luciano Floridi or an echo of his thought, applied to the topic.
Mirror question: ¿qué responsabilidad tengo como inforg, agente de información en la infoesfera?
Connects with: Ética digital · Privacidad · Verdad · Cuidado de la información como bien común.

Citation repertoire:
- "Somos inforgs en una infoesfera; cada decisión de información tiene peso ético." — temas: cualquier guía digital.
- "La información es un bien común; merece el cuidado del agua o del aire." — temas: datos abiertos, privacidad, redes.
- "Una buena vida digital implica dejar la infoesfera mejor de lo que la encontramos." — temas: huella digital, contenido.
- "El cuidado de los datos es una forma contemporánea de cuidar a las personas." — temas: bases de datos, IA, BI.
- "El bien y el mal informacional se miden por su impacto en seres vivos y datos." — temas: ciberseguridad.
- "Una sociedad madura protege la integridad de su entorno informacional." — temas: fake news, verificación.
- "Toda interacción es un acto de información; no hay neutralidad técnica." — temas: diseño UX, sesgos, accesibilidad.

### Visual format

Three vertical color-coded `softbox` blocks (Dussel/vino → Estoicismo/mostaza → Floridi/turquesa), each containing:
- Author label
- Italic short citation (1-2 lines)
- Application sentence connecting citation to the guide topic (1 line)
- A mirror question (1 line)
- One blank `\respuesta{1}` line for the student

Each citation must be SHORT, CONTEXTUALIZED to the guide topic, and accompanied by a brief question the student answers in 1-3 lines.

The triangle does NOT demand deep philosophy in every session. It plants three voices the student will recognize cycle after cycle, year after year, until they become part of how they think.

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

- the ancestral-contemporary opening proposed (saber ancestral, saber contemporáneo, pregunta-puente);
- the four pillars of computational thinking applied to Sistematización and Praxis (named explicitly);
- the five dimensions of liberatory evaluation (personal, emotional, citizenly, local, intergenerational);
- the chosen Triángulo citations (Dussel + one of Stoicism + Floridi) with their mirror questions;
- the main coherence problem found in the original;
- what was improved in concepts, practice, product, and evaluation;
- whether the fix belongs in source JSON, generator, TEX, DOCX, or only the current guide;
- remaining risks or manual review points.
