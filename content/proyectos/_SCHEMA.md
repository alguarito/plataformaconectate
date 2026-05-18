# Esquema declarativo del proyecto integrador MILC v3 — Plataforma Conéctate

Cada proyecto vive en un archivo YAML bajo `content/proyectos/{grado}-{periodo}.yaml`
donde la clave sigue el patrón `{grado}-{periodo}` (ej. `11-1.yaml`).

Solo se modelan proyectos de **8°, 9°, 10° y 11°**. Mientras 6° y 7° estén
marcados como `enConstruccion: true`, sus PDFs actuales se conservan sin
migración.

El motor `scripts/build-proyectos.py` lee estos archivos y produce **dos
salidas desde la misma fuente**:

- **PDF del proyecto** (6-8 páginas) en `public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf`
- **Contenido web** en `src/data/proyectosContenido/{grado}-{periodo}.ts`

> **Single source of truth.** Edita el YAML; nunca el `.tex`, el `.pdf` o el `.ts`.

## Filosofía del modelo

A diferencia del proyecto MILC clásico de **fases abstractas** (Escuta,
Sistematización, Praxis, Evaluación), este modelo es **entregable-céntrico**:

- El proyecto es un **brief sintético**: reto + insumos + entregables + rúbrica.
- Cada entregable es una **unidad cerrada** con qué se entrega, cómo se hace,
  qué reflexión se incrusta dentro del producto, y criterios observables.
- Las reflexiones del **triángulo de pensamiento** (Dussel, Estoico, Floridi)
  NO son ensayos académicos sueltos: son **párrafos visibles dentro de los
  productos** (en el sitio web, en el manual de marca, en el reporte de datos).
- La rúbrica tiene **un criterio por entregable**, no por fase abstracta.

Esto produce un proyecto más operativo, más corto, y donde las reflexiones
tienen consecuencias prácticas para el equipo (sostener lo declarado).

## Diferencia entre proyecto, guía y examen

| | **Guía** | **Examen** | **Proyecto** |
|---|---|---|---|
| Propósito | Aprender 1 sesión | Verificar transferencia | Aplicar todo el periodo |
| Duración | 1-2 sesiones | 45 minutos | 4-6 semanas |
| Estructura | 10 sesiones secuenciales | 5 preguntas | 3-5 entregables concretos |
| Producto | Anotaciones | Respuestas en PDF | Productos publicables (URL, PDF, video) |
| Reflexiones | Triángulo al final | Pregunta reflexiva | Incrustadas en cada entregable |

## Estructura del archivo YAML

```yaml
# ─── Metadata ──────────────────────────────────────────────────────
clave: "11-1"             # str · obligatorio · formato {grado}-{periodo}
grado: 11                 # int · obligatorio · 8-11
periodo: 1                # int · obligatorio · 1-3
completo: true            # bool · obligatorio · si false, no se compila

titulo: "..."             # str · obligatorio · título completo
titulo_portada: |         # str · obligatorio · versión con saltos para portada
  Presencia digital
  empresarial con IA

# ─── Metadatos curriculares ────────────────────────────────────────
autor: "Dr. Álvaro Cárdenas Orozco"
dba: "..."                # str · DBA del MEN o equivalente
estrategia: "..."         # str · ej. "Design Thinking + ABP"
duracion_semanas: 5       # int · 4-6
modalidad: "equipo"       # str · "individual" | "parejas" | "equipo"

# ─── El reto (la pieza más potente) ────────────────────────────────
reto: |                   # str · 1-2 frases potentes que sintetizan el reto
                          #       Ej: "Diseñar y publicar tu presencia digital
                          #       profesional como editor responsable, con IA
                          #       como asistente y al menos 30% de intervención
                          #       humana visible."

# ─── Insumos concretos (qué necesita el equipo para arrancar) ──────
insumos:                  # list · 4-8 insumos concretos · herramientas/datos
                          #       /plantillas/ejemplos reales (no abstractos)
  - "Plantilla HTML/CSS responsive (link incluido)"
  - "Cuenta gratis Netlify o Vercel para deploy"
  - "Acceso a IA generativa: Claude, Gemini, ChatGPT"
  - "Ejemplos de 3 portafolios referentes (links)"

# ─── Anclaje ancestral (1 párrafo, no sección completa) ────────────
anclaje: |                # str · 1 párrafo · oficio del Valle/Pacífico que
                          #       dialoga con el reto del proyecto

# ─── Aprendizajes del periodo que se ponen a prueba ────────────────
aprendizajes:             # list · idealmente 10 (uno por sesión)
  - sesion: 1
    titulo: "..."
  - sesion: 2
    titulo: "..."
  # ... hasta sesion 10

# ─── Entregables (la columna vertebral · 3-5 entregables) ──────────
entregables:              # list · 3-5 entregables obligatorios
  - numero: 1
    titulo: "..."         # str · título corto y accionable

    que_entregas: |       # str · descripción concreta del producto
                          #       (formato, longitud, plataforma)

    como_se_hace:         # list · 3-5 pasos accionables, no abstractos
      - "Paso 1 concreto"
      - "Paso 2 concreto"
      - "..."

    reflexion:            # obligatorio · 1 reflexión incrustada en el producto
      lente: "dussel"     # str · "dussel" | "estoico" | "floridi"
      titulo: |           # str · cómo se titula la sección dentro del producto
      consigna: |         # str · qué reflexión escribe el equipo + DÓNDE
                          #       queda visible en el producto (no anexo)

    criterios:            # list · 3-5 criterios observables (no opinables)
      - "..."
      - "..."

# ─── Rúbrica (1 criterio por entregable + comunicación global) ─────
# La suma de puntos es 5.0 distribuidos entre criterios según cantidad
# de entregables. Si hay 4 entregables, cada uno aporta 1.0 punto y
# se reserva 1.0 para "Comunicación + integración del triángulo".
rubrica:
  - entregable: 1
    nivel_5: "Cumple los 3+ criterios con evidencia clara"
    nivel_3: "Cumple parcialmente; falta evidencia en 1-2 criterios"
    nivel_1: "Incompleto o sin evidencia verificable"
  - entregable: 2
    nivel_5: "..."
    nivel_3: "..."
    nivel_1: "..."
  # ... etc · uno por entregable
  - entregable: "global"  # último criterio · transversal
    titulo: "Comunicación, sustentación e integración del triángulo"
    nivel_5: "..."
    nivel_3: "..."
    nivel_1: "..."

# ─── Sustentación (cierre del proyecto) ────────────────────────────
sustentacion:
  duracion_min: 5         # int · típicamente 5 minutos
  guion_sugerido:         # list · partes del guion
    - "1 min · reto y por qué importa"
    - "2 min · entregables principales con demo"
    - "1 min · integración del triángulo (decisión tomada por cada lente)"
    - "1 min · limitaciones reconocidas y plan de mejora"

# ─── Declaración honesta de uso de IA ──────────────────────────────
declaracion_ia: |         # str · consigna sobre cómo declarar uso de IA
                          #       (modelos, porcentajes, qué se editó a mano)

# ─── Cierre filosófico ─────────────────────────────────────────────
cierre: |                 # str · 1-2 líneas · invitación al siguiente periodo
```

## Reglas obligatorias

### Entregables (3-5)

Cada entregable es una **página del PDF** con anatomía fija:
1. **Qué entregas** (descripción del producto).
2. **Cómo se hace** (3-5 pasos accionables).
3. **💭 Reflexión integrada** con lente del triángulo (Dussel, Estoico o Floridi).
   La reflexión va a una sección visible del producto final, no como ensayo aparte.
4. **Criterios observables** (3-5 verificables sin opinión).

Reglas adicionales:
- Al menos un entregable por **cada lente del triángulo** (Dussel + Estoico + Floridi).
  Esto garantiza que las 3 lentes están incrustadas operativamente.
- Si hay 3 entregables: uno por lente.
- Si hay 4-5: el último entregable suele ser la sustentación + declaración IA.

### Rúbrica

- Tantos criterios como entregables (uno por entregable) + 1 criterio transversal
  ("Comunicación, sustentación e integración del triángulo").
- Cada criterio tiene niveles 5 / 3 / 1.
- La suma de puntos es 5.0, distribuida automáticamente: cada criterio aporta
  `5.0 / N_total_criterios`. Para 4 entregables + 1 transversal = 5 criterios →
  1.0 cada uno.

### Anclaje ancestral

1 párrafo (no sección completa) que conecta el reto del proyecto con un oficio
del Valle/Pacífico. Coherente con el periodo (mismo anclaje que la guía S1 y
el examen formal del periodo, si fuera posible).

## Validaciones del linter (`make proyecto-lint`)

El linter falla si:
- Falta cualquier campo obligatorio del schema.
- `entregables` tiene <3 o >5 entradas.
- Algún entregable no tiene los 4 sub-bloques (que_entregas, como_se_hace,
  reflexion, criterios).
- Las 3 lentes del triángulo no están representadas en al menos un entregable
  cada una.
- `rubrica` no cubre los entregables (debe haber 1 entrada por entregable + 1
  global).
- Algún criterio de rúbrica no tiene niveles 5, 3 y 1.
- `aprendizajes` tiene <5 entradas.
- `insumos` tiene <3 entradas.

Emite warnings si:
- `aprendizajes` tiene <10 entradas (cobertura incompleta).
- Algún entregable tiene <3 criterios o pasos.

## Estructura del PDF generado (6-8 páginas)

| Pág | Sección | Notas |
|---|---|---|
| 1 | **Portada** | Estilo institucional MILC (cyan + magenta + ícono) |
| 2 | **Brief del proyecto** | Reto + insumos + anclaje + aprendizajes en una vista |
| 3-7 | **Entregables** (3-5 páginas) | Una página por entregable con la anatomía completa |
| 8 | **Rúbrica + cierre** | Tabla de rúbrica + sustentación + declaración IA + cierre |

## Archivos generados

| Archivo | Lo lee | Lo edita |
|---|---|---|
| `content/proyectos/{grado}-{periodo}.yaml` | builder | **tú** (única fuente) |
| `public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf` | navegador, impresora | builder |
| `src/data/proyectosContenido/{grado}-{periodo}.ts` | página `/proyecto` | builder |

## Roadmap

| Pieza | Estado |
|---|---|
| 1. Schema declarativo (entregable-céntrico) | ✅ (este documento) |
| 2. Template LaTeX + builder PDF | ⏳ |
| 3. Generador TS del contenido web | ⏳ |
| 4. Linter `make proyecto-lint` | ⏳ |
| 5. Página `/proyecto` lee del nuevo schema | ⏳ |
| 6. Migración editorial de los 12 proyectos | ⏳ |
