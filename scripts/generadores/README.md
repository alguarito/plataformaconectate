# Scripts generadores MILC

Scripts Python que generan los recursos académicos en LaTeX (que luego se
compilan a PDF y se publican en `public/`).

**Origen:** Drive maestro `05_SCRIPTS_GENERADORES`. Versionados aquí para
reproducibilidad.

## Inventario

### Generadores de guías por grado
Cada uno produce los 30 archivos `.tex` del grado (3 períodos × 10 sesiones).

| Script | Tamaño | Salida |
|---|---|---|
| `generar_guias_sexto.py` | 297 KB | `guia-{1..30}-6-TIC.tex` |
| `generar_guias_septimo.py` | 297 KB | `guia-{1..30}-7-TIC.tex` |
| `generar_guias_octavo.py` | 319 KB | `guia-{1..30}-8-TIC.tex` |
| `generar_guias_noveno.py` | 297 KB | `guia-{1..30}-9-TIC.tex` |
| `generar_guias_decimo.py` | 297 KB | `guia-{1..30}-10-TIC.tex` |
| `generar_guias_undecimo.py` | 297 KB | `guia-{1..30}-11-TIC.tex` |
| `generar_guias_sexto_milc.py` | 319 KB | versión MILC enriquecida |

### Generadores de proyectos y exámenes
| Script | Tamaño | Salida |
|---|---|---|
| `generar_proyectos_milc.py` | 35 KB | 18 proyectos integradores `.tex` |
| `generar_examenes_milc.py` | 17 KB | 18 exámenes ICFES `.tex` |

### Generadores de plan editorial
| Script | Tamaño | Salida |
|---|---|---|
| `generar_plan_area_2025_editorial.py` | 110 KB | Plan de área completo |
| `generar_anexo_marco_teorico_milc.py` | 44 KB | Marco teórico (Floridi, Dussel, estoicismo) |

### Utilidades
| Script | Función |
|---|---|
| `agente_densidad_guias_milc.py` | Mide densidad/calidad de cada guía (palabras, conceptos, profundidad). Salida: JSON. |
| `organizar_recursos_milc.py` | Organiza el árbol de archivos de Drive. |
| `generar_guias_restantes_milc.py` | Helper para generar guías que faltan en una iteración. |

## Uso típico

```bash
cd scripts/generadores
python3 generar_guias_decimo.py    # genera 30 .tex en /tmp o output dir
python3 agente_densidad_guias_milc.py --grado 10 --periodo 1
```

> ⚠️ Los scripts esperan estructura de carpetas Drive. Si los corres
> localmente, pueden requerir ajustar paths absolutos.

## Roadmap

- [ ] Workflow GitHub Action: `regenerar-recursos.yml` — corre estos scripts
      en CI cuando cambia el JSON fuente.
- [ ] Compilar `.tex` → PDF en CI con Tectonic.
- [ ] Publicar `densidad.json` y mostrar badge en la web.
