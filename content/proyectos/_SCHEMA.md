# Esquema declarativo del proyecto integrador MILC v3 — Plataforma Conéctate

Cada proyecto vive en un archivo YAML bajo `content/proyectos/{grado}-{periodo}.yaml`
donde la clave sigue el patrón `{grado}-{periodo}` (ej. `11-1.yaml`).

Solo se modelan proyectos de los grados **8°, 9°, 10° y 11°**. Mientras 6° y 7°
estén marcados como `enConstruccion: true` en `src/data/grados.ts`, sus PDFs
actuales (`proyecto-{p}-{g}-TIC.pdf` en `public/proyectos/`) se conservan en el
estado anterior sin migración.

El motor `scripts/build-proyectos.py` lee estos archivos y produce **dos salidas
desde la misma fuente**:

- **PDF del proyecto integrador** en `public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf`
  (vía xelatex · plantilla de trabajo con espacios para responder en aula).
- **Contenido web enriquecido** en `src/data/proyectosContenido/{grado}-{periodo}.ts`
  (vía generador TS · alimenta la página `/proyecto` con datos del schema sin
  duplicar la información en `src/data/proyectos.ts`).

> **Single source of truth.** Si editas el `.yaml`, ambos formatos se regeneran
> al correr el build. Nunca edites el `.tex`, el `.pdf` ni el `.ts` directamente.

## Diferencia entre proyecto, guía y examen

| | **Guía** | **Examen formal** | **Proyecto integrador** |
|---|---|---|---|
| Propósito | Aprender una sesión específica | Verificar transferencia | Aplicar todo el periodo |
| Duración | 1-2 sesiones de aula | 45 minutos | 4-6 semanas (final del periodo) |
| Estructura | 10 sesiones secuenciales | 5 preguntas curadas | 4 fases MILC (Escuta → Sistematización → Praxis → Evaluación) |
| Producto | Anotaciones en cuaderno | Respuestas en PDF impreso | Prototipo, propuesta o solución concreta |
| Modalidad | Individual o equipo | Individual | Equipo (preferido) |

El proyecto es la **cima del periodo**: integra los 10 aprendizajes de las guías
y se evalúa con rúbrica formal.

## Estructura del archivo YAML

```yaml
# ─── Metadata ──────────────────────────────────────────────────────
clave: "11-1"             # str · obligatorio · formato {grado}-{periodo}
grado: 11                 # int · obligatorio · 8-11
periodo: 1                # int · obligatorio · 1-3
completo: true            # bool · obligatorio · si false, no se compila

titulo: "..."             # str · obligatorio · título completo del proyecto
titulo_portada: |         # str · obligatorio · versión corta con saltos
  Proyecto integrador ---
  Presencia digital
  empresarial con IA

# ─── Metadatos curriculares ────────────────────────────────────────
autor: "Dr. Álvaro Cárdenas Orozco"
dba: "..."                # str · DBA del MEN o equivalente
estrategia: "..."         # str · ej. "Design Thinking + ABP"
foco_diseno: "..."        # str · qué se diseña en el proyecto
producto_final: "..."     # str · qué entrega el equipo al cerrar
duracion_semanas: 5       # int · 4-6 típicamente

# ─── Anclaje MILC (igual que guías y exámenes) ─────────────────────
apertura:
  saber_ancestral: |      # 1-2 párrafos · ancla del periodo a un oficio del Valle/Pacífico
  contexto: |             # 1 párrafo · por qué este proyecto cierra el periodo
  pregunta_marco: |       # 1 línea · pregunta paraguas del proyecto

# ─── Sentido del proyecto ──────────────────────────────────────────
sentido: |                # str · texto MILC sobre por qué existe el proyecto
reto_central: |           # str · UNA frase potente que define el reto

# ─── Aprendizajes integrados (los 10 del periodo) ──────────────────
aprendizajes:             # lista · idealmente 10 (uno por sesión)
  - sesion: 1
    titulo: "..."
  - sesion: 2
    titulo: "..."
  # ... hasta sesion 10

# ─── Marco conceptual ──────────────────────────────────────────────
conceptos_clave: "..."    # str · "Tema central: X"
competencias: "..."       # str · competencias del periodo

desempenos:
  cognitivo: |            # str · qué comprende
  procedimental: |        # str · qué hace
  actitudinal: |          # str · qué actitud asume

# ─── Fases del proyecto (lista ordenada, 3-5 fases) ────────────────
# El número y nombre de las fases es configurable según el tipo de
# proyecto. La estructura MILC clásica de 4 fases (Escuta · Sistematización ·
# Praxis · Evaluación liberadora) es la sugerida por defecto, pero un
# proyecto emprendedor (G11·P3) podría tener Ideación · Validación ·
# MVP · Pitch · Cierre = 5 fases; un proyecto técnico simple (G8·P1)
# podría tener Problema · Diseño · Sustentación = 3 fases.
#
# Cada fase tiene su propio color institucional asignado en orden
# (verde, turquesa, magenta, vino, mostaza). El builder rota la paleta.
fases:                    # list · obligatorio · 3-5 entradas en orden
  - id: "escuta"          # str · slug interno (escuta, sistematizacion, ...)
    titulo: "Fase 1 · Escuta y empatía"
    proposito: |          # str · propósito MILC de la fase
    checks:               # lista · 3 mínimo · checks observables
      - "..."
      - "..."
      - "..."
    preguntas:            # lista · 2 mínimo · campos abiertos para el equipo
      - "Problema o necesidad detectada"
      - "Usuarios o personas afectadas"
      - "Pregunta de proyecto"
    artefacto:            # OBLIGATORIO en cada fase · drawbox/recurso visual
      titulo: "Mapa de empatía"
      descripcion: |      # str · qué se dibuja o esquematiza
      altura_cm: 5.2      # int · opcional · altura del drawbox (default 5cm)

  - id: "sistematizacion"
    titulo: "Fase 2 · Sistematización e investigación"
    proposito: |
    checks: [...]
    preguntas:
      - "Tres hallazgos de investigación"
      - "Criterios que debe cumplir la solución"
    artefacto:
      titulo: "Diagrama de hallazgos"
      descripcion: |

  - id: "praxis"
    titulo: "Fase 3 · Praxis, diseño y prototipo"
    proposito: |
    checks: [...]
    preguntas:
      - "Idea de solución o producto"
      - "Materiales, herramientas, recursos"
      - "Experimento, prueba o validación"
      - "Mejora después de la prueba"
    artefacto:
      titulo: "Boceto del prototipo"
      descripcion: |

  - id: "evaluacion"
    titulo: "Fase 4 · Evaluación liberadora"
    proposito: |
    checks: [...]
    preguntas:
      - "Lo más importante que aprendimos"
      - "Nuestro producto ayuda porque"
      - "Una mejora posible sería"
    artefacto:
      titulo: "Símbolo del proyecto"
      descripcion: |

# ─── Entregables mínimos ───────────────────────────────────────────
entregables:              # lista · 4-6 entregables observables
  - "Ficha de problema y pregunta de proyecto"
  - "Evidencias de escuta"
  - "Sistematización con conceptos y datos"
  - "Producto final o prototipo"
  - "Sustentación breve con reflexión ética"

# ─── Rúbrica (4-6 criterios × 3 niveles) ───────────────────────────
# Los criterios son personalizables según el tipo de proyecto. Por defecto
# se usan los 5 estándar MILC; un proyecto emprendedor podría reemplazar
# "Sistematización" por "Validación con clientes" y "Praxis y producto"
# por "MVP funcional + métricas", etc.
#
# Regla: la suma de criterios reparte 5.0 puntos en total. Si hay 5
# criterios, cada uno aporta 1.0; si hay 4, cada uno aporta 1.25; si hay 6,
# cada uno aporta ~0.83. Se calcula automáticamente.
rubrica:                  # list · obligatorio · 4-6 criterios
  - criterio: "Problema y escuta"
    nivel_5: "Problema real y bien sustentado con evidencia de campo"
    nivel_3: "Problema comprensible con poca evidencia"
    nivel_1: "Problema confuso o sin contexto"
  - criterio: "Sistematización"
    nivel_5: "..."
    nivel_3: "..."
    nivel_1: "..."
  # ... etc
  # Mínimo 4 criterios, máximo 6.

# ─── Triángulo de pensamiento (explícito) ──────────────────────────
# El triángulo se imprime visible en la última sección del proyecto, con
# las 3 voces como apoyo argumentativo. Después de las 3 citas viene un
# bloque de "actividades de integración" donde el equipo debe declarar
# explícitamente cómo cada lente aparece en su propuesta.
triangulo:
  dussel:
    cita: |               # str · cita o pregunta-espejo Dussel
    invitacion: |         # str · cómo invitar al equipo a integrar esta lente
                          #       en su propuesta (actividad concreta)
  estoico:
    cita: |               # cita o pregunta-espejo (Marco Aurelio / Epicteto / Séneca)
    invitacion: |
  floridi:
    cita: |               # cita o pregunta-espejo de Floridi sobre infoesfera
    invitacion: |

# Actividad final integradora del triángulo (obligatoria)
integracion_triangulo:
  consigna: |             # str · pide al equipo escribir 1 párrafo aplicando
                          #       las 3 lentes a su proyecto
  campos:                 # list · campos para que el equipo responda
    - "Cómo Dussel ilumina mi proyecto (a quién dignifica, a quién deja fuera)"
    - "Cómo el estoico ilumina mi proyecto (qué disciplina exige el oficio)"
    - "Cómo Floridi ilumina mi proyecto (qué responsabilidad ética en la infoesfera)"
    - "Una decisión concreta que tomamos por aplicar este triángulo"

# ─── Cierre del proyecto ───────────────────────────────────────────
cierre: |                 # str · invitación final hacia el siguiente periodo
```

## Reglas obligatorias del proyecto

### Fases del proyecto (3-5, configurables)

Cada fase tiene anatomía fija:
- **Título** con color institucional asignado en orden.
- **Propósito** en `softbox`.
- **Checks** (3 mínimo) que el equipo verifica como hitos visibles.
- **Preguntas abiertas** (2 mínimo) que el equipo responde con líneas en
  blanco en el PDF.
- **Artefacto visual obligatorio** (mapa, boceto, símbolo, lienzo) en
  `drawbox` para dibujar. Cada fase tiene su artefacto.

El **número y nombre de las fases es configurable** según el tipo de proyecto:
- **MILC clásico (4 fases)**: Escuta · Sistematización · Praxis · Evaluación.
- **Proyecto emprendedor (5 fases)**: Ideación · Validación · MVP · Pitch · Cierre.
- **Proyecto técnico simple (3 fases)**: Problema · Diseño · Sustentación.
- **Proyecto comunitario (5 fases)**: Escuta · Diagnóstico · Co-diseño · Acción · Cierre.

La paleta de colores rota automáticamente:
1. Verde (`milcVerde`)
2. Turquesa (`milcTurquesa`)
3. Magenta (`milcMagenta`)
4. Vino (`milcVino`)
5. Mostaza (`milcMostaza`)

### Aprendizajes integrados

Lista de las 10 sesiones del periodo. Para grados con guías ya migradas,
estos títulos se pueden auto-rellenar leyendo `content/guias/{grado}/{grado}-{periodo}-*.yaml`.

### Rúbrica (4-6 criterios × 3 niveles)

Los criterios son **personalizables** según el tipo de proyecto. Los 5
criterios estándar MILC son:
1. **Problema y escuta**
2. **Sistematización**
3. **Praxis y producto**
4. **Comunicación**
5. **Evaluación liberadora**

Pero pueden reemplazarse parcial o totalmente. Ejemplos:
- **Proyecto emprendedor**: Problema validado · MVP funcional · Métricas honestas · Pitch · Ética y privacidad.
- **Proyecto técnico**: Diseño · Implementación · Validación · Documentación.
- **Proyecto editorial**: Investigación · Edición · Diseño · Accesibilidad · Sustentación.

Cada criterio tiene descriptores para nivel 5 (excelente), 3 (suficiente), 1 (insuficiente).
**La suma de puntos siempre es 5.0**, distribuido automáticamente entre los criterios.

### Triángulo de pensamiento (explícito + acción)

A diferencia de las guías y exámenes (donde el triángulo es cierre filosófico),
en el proyecto el triángulo es **acción concreta**:

1. Se imprimen las **3 voces** con cita visible (Dussel, Estoico, Floridi).
2. Cada lente trae una **invitación** específica a integrar esa mirada en el
   propio proyecto.
3. Después viene una **actividad integradora obligatoria** (`integracion_triangulo`)
   donde el equipo debe escribir explícitamente cómo cada lente apareció en
   su propuesta y qué decisión concreta tomaron por aplicarla.

Esto convierte el triángulo de adorno reflexivo a parte operativa del producto
final: la rúbrica puede evaluar si el equipo realmente integró las 3 lentes.

## Validaciones del linter (`make proyecto-lint`)

El linter falla si:
- Falta cualquier campo obligatorio del schema.
- `fases` tiene <3 o >5 entradas.
- Alguna fase tiene <3 checks, <2 preguntas, o no declara `artefacto`.
- Alguna fase no tiene `id` único.
- La rúbrica tiene <4 o >6 criterios.
- Algún criterio de la rúbrica no tiene los 3 niveles (5, 3, 1) declarados.
- El triángulo no tiene las 3 voces (Dussel, Estoico, Floridi).
- `integracion_triangulo.campos` tiene <3 entradas.
- `aprendizajes` tiene <5 entradas.

Emite warnings (no errores) si:
- `aprendizajes` tiene <10 entradas (incompleta cobertura del periodo).
- `dba` o `competencias` están vacíos.
- Alguna fase no tiene `descripcion` en el artefacto.

## Estilo gráfico del PDF

- **Portada**: fondo institucional MILC (magenta + vino patrón) — coherente con
  el estilo actual de los proyectos.
- **Páginas interiores**: blancas, tipografía Helvetica Neue.
- **Fases**: cada fase con su color (verde, turquesa, magenta, vino).
- **Drawboxes**: marco coloreado del color de la fase, espacio para dibujar.
- **Líneas para respuesta**: longitud según complejidad esperada (1-3 líneas
  por pregunta).
- **Rúbrica**: tabla con fila de cabecera vino, criterios por filas.

## Archivos generados

| Archivo | Lo lee | Lo edita |
|---|---|---|
| `content/proyectos/{grado}-{periodo}.yaml` | builder | **tú** (única fuente) |
| `public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf` | navegador, impresora | builder |
| `src/data/proyectosContenido/{grado}-{periodo}.ts` | página `/proyecto` | builder |

## Migración desde `src/data/proyectos.ts`

`src/data/proyectos.ts` actual contiene los 18 proyectos (incluye G6 y G7). Plan
de migración:

1. **G8-G11**: cada uno se migra a YAML SSOT con este schema. El nuevo TS en
   `proyectosContenido/` reemplaza al registro correspondiente en `proyectos.ts`.
2. **G6-G7**: se mantienen en `proyectos.ts` mientras esos grados sigan en
   construcción. Cuando se reactiven, se migran al schema.
3. La página `/proyecto` lee primero de `proyectosContenido/` (nuevo, si existe);
   si no, cae a `proyectos.ts` (legacy).

## Roadmap

| Pieza | Estado |
|---|---|
| 1. Schema declarativo | ✅ (este documento) |
| 2. Template LaTeX + builder PDF | ⏳ |
| 3. Generador TS del contenido web | ⏳ |
| 4. Linter `make proyecto-lint` | ⏳ |
| 5. Página `/proyecto` lee del nuevo schema | ⏳ |
| 6. Migración editorial de los 12 proyectos (8-11) | ⏳ |
