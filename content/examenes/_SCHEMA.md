# Esquema declarativo del examen final MILC v3 — Plataforma Conéctate

Cada examen vive en un archivo YAML bajo `content/examenes/{grado}-{periodo}.yaml`
donde la clave sigue el patrón `{grado}-{periodo}` (ej. `8-1.yaml`).

Se modelan exámenes de los grados **6°, 7°, 8°, 9°, 10° y 11°**. Con G6 y G7
ya abiertos al público, los 18 exámenes (6 grados × 3 periodos) entran al
pipeline. La calibración de los exámenes de 6° y 7° usa lenguaje más
accesible (frases cortas, ejemplos contextualizados, vocabulario directo).

El motor `scripts/build-examenes.py` lee estos archivos y produce **dos salidas
desde la misma fuente**:

- **PDF del examen formal** en `public/examenes-mejoras/examen-{periodo}-{grado}-TIC.pdf`
  (vía xelatex, portada negra con texto blanco · 5 preguntas curadas).
- **Banco de práctica web** en `src/data/examenesContenido/{grado}-{periodo}.ts`
  (vía generador TS · 20-30 preguntas para que el estudiante practique
  entre clases con el componente `LabQuiz`).

> **Single source of truth.** Si editas el `.yaml`, ambos formatos se
> regeneran al correr el build. Nunca edites el `.tex`, el `.pdf` ni el `.ts`
> directamente.

## Diferencia entre examen formal y banco de práctica

| | **Examen formal (PDF)** | **Banco de práctica (web)** |
|---|---|---|
| Propósito | Instrumento sumativo | Práctica autoevaluativa |
| Cuándo | Sesión 10, aplicado en aula | Cualquier momento entre S1 y S10 |
| Cuenta para nota | **Sí** (20% del periodo) | **No** |
| Cantidad de ítems | **5 fijos** | 20-30 (a libertad del docente) |
| Tipo de ítem | Predominio de abiertas | Predominio de OM |
| Repetible | No | Sí, ilimitado |
| Corrección | Manual por el docente | Automática (web) |

**Regla clave**: el examen formal NO se resuelve online. La web solo registra
intentos del banco de práctica. Eso preserva el carácter del instrumento
sumativo y evita problemas de deshonestidad académica.

## Estructura del archivo YAML

```yaml
# ─── Metadata ──────────────────────────────────────────────────────
clave: "8-1"              # str · obligatorio · formato {grado}-{periodo}
grado: 8                  # int · obligatorio · 6-11
periodo: 1                # int · obligatorio · 1-3
completo: true            # bool · obligatorio · si false, no se compila

titulo: "..."             # str · obligatorio · título completo
titulo_portada: |         # str · obligatorio · versión con saltos manuales
  Examen final ---
  Lógica avanzada y
  phronesis con datos

duracion_min: 45          # int · obligatorio · tiempo estimado de aplicación
ponderacion: 20           # int · obligatorio · % del periodo (típico 20)
fecha_aplicacion: "Sesión 10"  # str · obligatorio

# ─── Anclaje MILC (versión breve) ──────────────────────────────────
apertura:
  saber_ancestral: |      # str · obligatorio · 1 párrafo · el ancla del periodo
    En el Valle del Cauca, el herrero antes de cada golpe...
  contexto: |             # str · obligatorio · 1 párrafo · qué evalúa el examen
    Este examen cierra el periodo de lógica avanzada...
  pregunta_marco: |       # str · obligatorio · 1 línea · pregunta paraguas
    ¿Cómo cruza el oficio del herrero con las condiciones de tu código?

# ─── Aprendizajes cubiertos (mapa visible al estudiante) ──────────
aprendizajes:             # list · obligatorio · al menos 5, idealmente 1 por sesión
  - sesion: 1
    titulo: "Condicionales con AND/OR/NOT"
  - sesion: 2
    titulo: "Datos como tablas: filas, columnas, tipos"
  # ... hasta sesion 10

# ─── EXAMEN FORMAL · 5 preguntas con estructura fija ──────────────
examen_formal:
  concreto:               # 1 ítem · "¿Qué aprendí?" · síntesis personal
    enunciado: |          # str · obligatorio · pregunta al estudiante
    criterio: |           # str · obligatorio · qué se evalúa
    retroalimentacion: |  # str · opcional · feedback escrito constructivo
    puntos: 1.0           # num · default 1.0 · sobre 5.0 total

  contexto:               # 1 ítem · sobre el saber ancestral del periodo
    enunciado: |
    criterio: |
    retroalimentacion: |
    puntos: 1.0

  practico:               # 2 ítems · aplicación a situaciones reales
    - numero: 1
      enunciado: |
      contexto: |         # str · opcional · caso o stem largo si aplica
      criterio: |
      retroalimentacion: |
      puntos: 1.0
      # Si una pregunta práctica es OM (ICFES), agrega:
      tipo: opcion_multiple   # opcional · default abierta_larga
      opciones:               # solo si tipo=opcion_multiple
        - "..."
        - "..."
        - "..."
        - "..."
      respuesta_index: 2      # int · 0-based · oculto en PDF estudiante,
                              #         visible en PDF docente
    - numero: 2
      enunciado: |
      criterio: |
      retroalimentacion: |
      puntos: 1.0

  reflexivo:              # 1 ítem · triángulo de pensamiento aplicado al tema
    enunciado: |          # invita al estudiante a aplicar las 3 lentes
    voces:                # las 3 citas como apoyo visible para argumentar
      dussel: |           # cita corta de Dussel, 1-2 líneas
      estoico: |          # cita corta del estoico del periodo
      floridi: |          # cita corta de Floridi
    criterio: |
    retroalimentacion: |
    puntos: 1.0

# ─── BANCO DE PRÁCTICA · 20-30 preguntas para la web ──────────────
banco_practica:
  - id: "bp-001"          # str · obligatorio · prefijo bp-, único por examen
    bloom: comprender     # str · obligatorio · recordar|comprender|aplicar|analizar|evaluar|crear
    sesion: 1             # int · obligatorio · sesión que la inspira (para filtrar)
    tipo: opcion_multiple # str · obligatorio · solo opcion_multiple en el banco
    enunciado: |          # str · obligatorio
    opciones:             # list · obligatorio · 3-4 opciones
      - "..."
      - "..."
      - "..."
      - "..."
    respuesta_index: 1    # int · obligatorio · 0-based
    feedback_correcto: |  # str · obligatorio · refuerzo al acertar
    feedback_incorrecto: |# str · obligatorio · explicación al fallar
  - id: "bp-002"
    ...
  # mínimo 20, máximo 30

# ─── Cierre ────────────────────────────────────────────────────────
cierre: |                 # str · obligatorio · 1 línea · invitación final
  Cierras el periodo con instrumentos para razonar; el grado siguiente
  los volverá a poner a prueba.
```

## Reglas del examen formal (las 5 preguntas)

### 1. `concreto` · ¿Qué aprendí? (1 pregunta)

Pregunta abierta. El estudiante sintetiza con sus palabras lo más importante
que se llevó del periodo. **No es pregunta de memoria**: pide curaduría
personal. Evalúa la capacidad de **sintetizar**.

> Ejemplo: «Si tuvieras que enseñarle a un primo de 10° lo más importante
> que aprendiste sobre lógica condicional, ¿qué le dirías en 5 renglones?»

### 2. `contexto` · saber ancestral (1 pregunta)

Pregunta abierta que conecta el saber ancestral del periodo con el contenido
técnico. Evalúa la capacidad de **conectar tradiciones y oficios concretos
con conceptos abstractos**. No es decoración: es la pieza MILC del examen.

> Ejemplo: «El herrero del Valle cruzaba 4 condiciones antes de cada golpe.
> ¿Qué condiciones cruzarías tú en código para que una alarma de incendio
> no de falsas alarmas por una vela?»

### 3. `practico` · aplicación (2 preguntas)

Dos preguntas que **piden hacer algo concreto** con lo aprendido. Pueden ser:
- **Abierta larga** (default): escribir código, diseñar algoritmo, construir tabla.
- **Opción múltiple ICFES** (opcional): caso real con 4 opciones, 1 correcta.

Las dos preguntas deben atacar **distintos niveles de Bloom** (típicamente
aplicar + analizar).

> Ejemplo 1 (abierta): «Escribe un programa en MakeCode que muestre 'frío'
> si la temperatura es menor a 18 grados Y mayor a 5 grados.»
>
> Ejemplo 2 (OM): «¿Qué pasaría con `if (edad>10 AND edad<5)`?» con 4 opciones.

### 4. `reflexivo` · triángulo de pensamiento (1 pregunta)

Pregunta abierta que pide aplicar las 3 lentes del triángulo de pensamiento
(Dussel/Estoico/Floridi) al tema del periodo. **Las 3 citas se imprimen
visibles en el examen como apoyo argumentativo** — el estudiante no tiene
que recordarlas, sí tiene que usarlas.

> Ejemplo: «Lee las 3 citas abajo. Escribe en 1 párrafo cómo la lógica
> compuesta que aprendiste se relaciona con (a) quién queda incluido/excluido
> por una regla mal diseñada [Dussel], (b) la disciplina de cruzar varias
> condiciones antes de actuar [Marco Aurelio], (c) qué hace que un algoritmo
> sea éticamente robusto en la infoesfera [Floridi].»

## Reglas del banco de práctica (banco_practica)

- **Solo opción múltiple**: simplifica la corrección automática y la métrica
  futura (DB).
- **20 mínimo, 30 máximo**: con 20 hay suficiente para 2-3 sesiones de
  práctica sin que el estudiante vea siempre las mismas; 30 es el techo
  razonable para no inflar el YAML.
- **ID estable**: cada ítem lleva un id `bp-NNN` único dentro del examen.
  Cuando agreguemos persistencia futura, el id permite trazar el desempeño
  por pregunta a lo largo del tiempo.
- **Distribución por Bloom**: idealmente 30% recordar/comprender, 40%
  aplicar/analizar, 30% evaluar/crear. La linter lo valida.
- **Distribución por sesión**: idealmente 2-3 ítems por sesión. La linter
  lo valida.
- **Feedback obligatorio en ambos lados**: tanto al acertar como al fallar.
  Es lo que convierte el banco en herramienta de aprendizaje, no en
  examen disfrazado.

## Validaciones del linter (`make examen-lint`)

El linter falla si:
- Falta cualquier campo obligatorio del schema.
- El examen formal tiene ≠5 ítems (1+1+2+1 = 5).
- El banco de práctica tiene <20 o >30 ítems.
- Algún ítem OM tiene respuesta_index fuera del rango `[0, len(opciones)-1]`.
- La pregunta reflexiva no tiene las 3 voces (Dussel + estoico + Floridi).
- La suma de `puntos` del examen formal ≠ 5.0.
- Algún id del banco está duplicado o no sigue el patrón `bp-NNN`.

El linter emite warnings (no errores) si:
- El banco tiene <2 ítems para alguna de las sesiones declaradas en `aprendizajes`.
- La distribución por Bloom se aleja >15% de la ideal.
- Un ítem del banco no declara su `sesion`.

## Estilo gráfico del PDF

- **Portada**: fondo `#000000` (negro absoluto), texto blanco. Chip de
  "EXAMEN FINAL · GRADO N° · PERIODO N" en color del periodo (sutil).
  Pie con duración, fecha, ponderación.
- **Páginas interiores**: blancas, tipografía Inter como en las guías.
  Cabecera con clave del examen (ej. "8-1") + numeración (ej. "Pregunta 3 de 5").
- **Espacio para respuesta**: cada ítem deja líneas en blanco proporcionales
  al `criterio` (5 líneas para abiertas cortas, 10 para largas).
- **Versión docente**: idéntica al estudiante + bloque verde al pie de cada
  ítem con respuesta esperada + criterio + retroalimentación.

## Archivos generados

| Archivo | Lo lee | Lo edita |
|---|---|---|
| `content/examenes/{grado}-{periodo}.yaml` | builder | **tú** (única fuente) |
| `public/examenes-mejoras/examen-{periodo}-{grado}-TIC.pdf` | navegador, impresora | builder |
| `public/examenes-mejoras/examen-{periodo}-{grado}-TIC-docente.pdf` | docente | builder |
| `src/data/examenesContenido/{grado}-{periodo}.ts` | página `/examen` | builder |

## Migración de los exámenes actuales

Los `pdfId` de Drive en `src/data/examenes.ts` se conservan en una rama de
archivo (`pdfId_archivo`) por si quieres consultar el material previo.
Cuando el YAML correspondiente esté completo y validado, el builder regenera
el PDF y la página `/examen` apunta al nuevo. El `pdfId_archivo` no se
muestra más en la web.

## Roadmap

| Pieza | Estado |
|---|---|
| 1. Schema declarativo | ✅ (este documento) |
| 2. Template LaTeX + builder PDF | ⏳ |
| 3. Generador TS para banco de práctica | ⏳ |
| 4. Linter `make examen-lint` | ⏳ |
| 5. Página `/examen` lee TS + monta LabQuiz | ⏳ |
| 6. Contenido editorial de los 12 exámenes (8-11) | ⏳ (4-6 bloques) |
| 7. Backend (Supabase/PocketBase) + persistencia | 🔮 a futuro |
