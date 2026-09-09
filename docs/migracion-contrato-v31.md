# Migración de las 180 guías al contrato v3.1

> Documento de traspaso. Si abres una sesión nueva y vas a seguir migrando guías,
> **este es el archivo que hay que leer primero.** Última actualización: 2026-09-09.

---

## 1. Qué es el contrato v3.1

El contrato editorial vive en `scripts/guias-lint.py`. No es un documento aparte: **el
linter es el contrato**. Lo que el linter marca como error es lo que no puede publicarse.

Es **opt-in por guía**: una guía entra al contrato cuando declara `duracion_min`. Sin ese
campo, las reglas nuevas solo avisan (warnings) y la guía legacy compila sin romper nada.
Por eso conviven 180 guías en dos estados sin que el build falle.

Lo que v3.1 exige, además de lo que ya pedía v3:

| Regla | Qué exige |
|---|---|
| `apertura.fuente` | Referencia APA 7 con año. Si la fuente no tiene año, `(s. f.)` **y fecha de consulta** |
| `web.mapa_ruta` | Exactamente 5 estaciones cuya suma de `duracion_min` sea igual a `duracion_min` de la guía |
| `web.actividades` | Exactamente 3, y cada una debe coincidir con la prosa en verbo, tiempo, modalidad y título del cuaderno |
| Verbo único | Cada actividad declara **un** verbo. `CREA + EXPLICA` es error |
| Modalidad | Solo `individual`, `parejas` o `equipo…`. `grupal` **no** existe en el vocabulario |
| `Extensión:` | Obligatoria en los tres cuadernos (escuta, sistematización, praxis) |
| `conceptos_clave` | Con `categoria`, **sin** `emoji` |
| Quiz balanceado | La correcta no cae más del 40 % de las veces en la misma posición, ni es la más larga en más del 60 % |
| `triangulo.modo` | Por edad: 6.º y 7.º `preguntas`, 8.º `ideas`, 9.º a 11.º `citas` |
| Modo `citas` | Autor **y** texto exactos del banco `content/guias/_banco-citas.yaml` |
| Oraciones | Máximo por grado en `_CAMPOS_VOZ`: 6.º-7.º 18 palabras, 8.º-9.º 25, 10.º-11.º 30 |
| `lint_listas_texto` | Todo elemento de `opciones`, `checks`, `pilares`, `criterios`, `pasos` e `iconos` debe ser **texto** |

---

## 2. Estado al 2026-09-09

| Grado | En v3.1 | Lint |
|---|---|---|
| 6.º | 0 / 30 | 0 errores · 30 con warnings |
| 7.º | 0 / 30 | 0 errores · 30 con warnings |
| **8.º** | **30 / 30** | **30 OK, sin warnings** |
| **9.º** | **30 / 30** | **30 OK, sin warnings** |
| 10.º | 6 / 30 | 6 OK · 24 con warnings |
| 11.º | 0 / 30 | 0 errores · 30 con warnings |
| Territorio Interior | n/a — estándar propio | 0 errores · 56 con warnings |

**66 de 180.** Faltan 114: los 24 de décimo y los 90 de sexto, séptimo y once.

Para regenerar esta tabla sin confiar en el documento:

```bash
for g in 6 7 8 9 10 11; do printf "grado %-2s → " $g; python3 scripts/guias-lint.py --grado $g | grep Resumen; done
python3 scripts/guias-lint.py --programa territorio-interior | grep Resumen
```

Y el conteo exacto de guías en el contrato:

```bash
python3 -c "
import yaml,glob
fs=glob.glob('content/guias/[6-9]/*.yaml')+glob.glob('content/guias/1[01]/*.yaml')
n=sum(1 for f in fs if yaml.safe_load(open(f)).get('duracion_min'))
print(f'{n} de {len(fs)} en v3.1')"
```

---

## 3. El ciclo de trabajo

La instrucción permanente del docente es: **«genera las siguientes 3, audita y continúa
una vez cumpla los criterios relacionados»**. Un lote son tres guías y termina en un PR
mergeado. No se acumulan lotes sin mergear.

### Antes de escribir

1. Rama nueva: `git checkout -b guias/v31-<grado>-batch<n>`
2. Leer las tres guías legacy completas. Casi siempre traen prosa aprovechable y una
   apertura de folclor **sin fuente** que hay que reemplazar por un ancla del banco.
3. Elegir ancla por guía en `content/anclas/banco-anclas.yaml`. Reglas:
   - Preferir anclas sin uso en guías de grado.
   - **Máximo dos usos por ancla dentro de un mismo grado**, con ángulo distinto y declarado.
   - **Leer `limites_eticos` y `cara_de_exclusion` antes de escribir.** Son vinculantes y han
     hecho descartar anclas que encajaban mejor temáticamente (ver §5).
4. Elegir tres citas en `content/guias/_banco-citas.yaml` (solo grados en modo `citas`).
   Reglas: aptas para el grado (`grados`), **máximo dos usos por cita dentro de un grado**,
   y texto de aplicación distinto en cada uso.

### Al escribir

- Copiar la estructura de una guía ya migrada del mismo grado como plantilla.
- **Décimo y once traen el bloque `web` mucho más flaco** que noveno: solo `conceptos_clave`
  y `quiz`. Hay que construir `resumen`, `subtema`, `pre_lectura`, `mapa_ruta`,
  `actividades`, `cinco_dimensiones` y `post_lectura` desde cero.
- Usar bloques literales `|-` para todo texto largo. Evita el defecto de los dos puntos.
- Al terminar cada guía:
  ```bash
  python3 scripts/comillas-listas.py content/guias/<g>/<g>-<p>-<s>.yaml
  python3 scripts/guias-lint.py --grado <g> <p>-<s> --strict
  ```
  Iterar hasta `OK`. Un warning de frase plantilla o de balance de quiz se corrige, no se
  justifica.

### Cierre del lote

```bash
# 1. usos del banco de anclas: añadir la clave de la guía al campo `usos` del ancla usada
# 2. PDF y TS de las tres
GRADO=<g> python3 scripts/build-guias-g11.py <p>-<s>
python3 scripts/build-guias-web-ts.py <g> <p>-<s> --force
# 3. Service Worker: se regeneraron PDFs → bump obligatorio
#    public/sw.js  const VERSION = 'vNN'  →  'vNN+1'
# 4. auditoría y build
python3 scripts/guias-auditoria.py --out docs/auditoria/contrato-v31-$(date +%F).md --json
npm run build          # deben salir 379 páginas
# 5. verificar que el ancla llegó al HTML construido
grep -qi "<término del ancla>" dist/grado-<g>/periodo-<p>/guia-<s>/index.html
# 6. lint de los seis grados + Territorio Interior: 0 errores en todos
# 7. commit, PR, merge
gh pr merge <n> --squash --auto --delete-branch
```

**PDFs y ruido binario.** Recompilar una guía cambia los bytes del PDF aunque el contenido
no cambie. Antes de commitear, revertir los PDF cuyo `.tex` no cambió:

```bash
cambiados=$(git status --short public/guias-mejoras | grep '\.tex$' | sed 's|.*/||;s|\.tex$||')
for p in $(git status --short public/guias-mejoras | grep '\.pdf$' | sed 's|.* ||'); do
  base=$(basename "$p" .pdf)
  echo "$cambiados" | grep -qx "$base" || git checkout -- "$p"
done
```

---

## 4. Los dos bancos

### `content/anclas/banco-anclas.yaml` — 62 anclas

Ampliado el 2026-09-09 de 54 a 62. Con 114 guías por migrar, cada ancla tendría que
sostener ~1,8 usos más encima de lo que ya carga. **Si vuelve a apretar, ampliar antes de
forzar repeticiones**, y decirlo con números.

Regla de admisión del banco: solo entran prácticas con fuente verificable — artículo
arbitrado con DOI, ficha oficial de UNESCO, acto administrativo, documento institucional o
prensa firmada. **Los blogs de turismo y de viaje no cuentan.** En la ampliación de
septiembre se descartó el mercado de Silvia por eso.

Cada entrada trae `verificacion` (con `DUDA` explícita cuando algo falta cotejar),
`cara_de_exclusion` y `limites_eticos`. Los tres son de lectura obligatoria.

La trazabilidad de la investigación vive en el vault CEREBRO 2, en «Taller Editorial
MILC/Anclas — Territorio interior/»: los lotes 1 a 6 para Territorio Interior y el lote 7
para la ampliación de septiembre de 2026.

### `content/guias/_banco-citas.yaml` — 74 citas

Verificable con `make citas-verificar`, que descarga las fuentes de acceso abierto y
comprueba que cada cita aparece **literalmente**, revisando por separado cada segmento
entre elisiones. Estado actual: 53 verificadas · 0 sin verificar · 2 con divergencia
documentada · 19 sin fuente local (Epicteto y Séneca, en Wikisource).

Capacidad por voz para los grados en modo `citas`: dussel 27, estoico 26, floridi 21. Con
el tope de dos usos por año alcanza para los 30 de cada grado, pero obliga a repetir. En
noveno terminaron 90 citas colocadas, 68 distintas, ninguna con más de dos usos.

---

## 5. Decisiones éticas que ya se tomaron

Los `limites_eticos` del banco **cambian el trabajo**, no lo decoran. Precedentes:

- **`alabaos-medio-san-juan` descartada en 9-2-5.** Es un canto fúnebre y su entrada prohíbe
  convertirlo en «técnica» para otra cosa. Usarlo como metáfora de ritmo de lectura habría
  sido esa misma instrumentalización. Se cambió la guía, no el ancla.
- **`lopi-aprender-observando-mesoamerica` descartada** en la misma guía: el banco dice que
  sirve de respaldo de otras anclas, no como ancla territorial propia.
- **`guali` y `cantadoras` no se usaron** en décimo pese a estar libres y sugeridas para ese
  grado: son ritos de duelo, y aplicarlos a producción editorial repetiría el mismo error.
- **`chumbe-inga` descartada en 9-3-6** aunque encajaba mejor por tema: 9-2-1 ya la usaba
  con el mismo ángulo de jerarquía visual.
- **9-3-9 se corrige a sí misma dentro de la guía** sobre «la lectura estoica ingenua», que
  es lo que advierte la entrada de `roya-cosecha-incierta`.
- **9-2-7** usa solo la parte con fuente del ancla (la corrección Ley 324/1996 → Ley
  982/2005) y omite fundación y fundador, que el banco marca sin fuente institucional.

---

## 6. Trampas conocidas

| Trampa | Qué pasa | Cómo se evita |
|---|---|---|
| **Dos puntos en ítem de lista** | `- Nadie: el peso hace el trabajo.` YAML lo lee como diccionario y el generador lo emite como **cadena vacía**: la opción desaparece de la página sin que nada falle | `lint_listas_texto` lo marca como error. El arreglador entrecomilla la línea cruda |
| **Enteros en `opciones`** | `- 2025` se lee como `int` y produce la misma opción vacía | La misma regla lo atrapa |
| **`_` sin escapar** | Rompe el build de xelatex sin que el linter avise. Visto en `fecha_1` dentro de `sistematizacion.pilares` | `lint_latex_escapes` ya revisa `#`, `&`, `%`, `_` **y los pilares** |
| **Corchetes APA** | `[Comunicación al Ministerio TIC]` es APA 7 legítimo, no un marcador pendiente | La regla solo marca corchetes vacíos o con `TODO`/`VERIFICAR` |
| **Fuente sin año** | `(s.\,f.)` solo pasa si trae fecha de consulta | Añadir «Consultado en AAAA», como en 9-2-2 y 10-1-4 |
| **`modalidad: grupal`** | No existe en el vocabulario del contrato | `individual`, `parejas` o `equipo…` |
| **Rama base borrada** | Al mergear con `--delete-branch`, un PR apilado sobre esa rama se cierra solo y no se puede retargetear | `git rebase --onto origin/main <base-vieja> <rama>` y abrir PR nuevo |

---

## 7. Lo que queda pendiente

- **114 guías**: 24 de décimo, 30 de sexto, 30 de séptimo, 30 de once.
- **Cotejar contra el acto administrativo** cinco datos que hoy se apoyan en prensa y quedaron
  marcados con `DUDA` en el banco de anclas: el Decreto 0960 de 2025 de acueductos
  comunitarios, la Resolución 539 de 2000 del INPA (talla mínima de la piangua), la
  Resolución 1077 de 2017 (partería), el articulado por número de la Ley 70 de 1993, y el
  relato del «día de negros» como día de asueto.
- **Sexto y séptimo van en modo `preguntas`**: no consumen banco de citas, pero **sí
  consumen anclas**, porque `apertura.fuente` es obligatoria en todos los grados.
- El generador web `build-guias-web-ts.py` excluye el grado 9 de su lista por defecto
  `[8, 10, 11]`. Funciona igual pasando grado y clave explícitos; no hace falta tocarlo.
