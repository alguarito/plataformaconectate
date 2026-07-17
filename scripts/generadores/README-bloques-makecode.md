# Generar bloques fieles de MakeCode (micro:bit) para las guías

Método reproducible para incluir en las guías del Semillero una imagen **fiel** de un
programa de MakeCode —colores, formas y etiquetas exactos del entorno micro:bit en
español— sin depender del editor en vivo.

## Por qué este método (y no una captura del editor)

Intentamos capturar los bloques directamente del editor `makecode.microbit.org`
automatizando el navegador. Aprendimos:

- El editor **no cambia a la vista Bloques** con clics automatizados (el botón «Bloques»
  no responde), ni desde JavaScript ni desde Python.
- **Truco que sí funciona a veces:** salir a *Pantalla de inicio* y **reabrir** el
  proyecto lo abre directamente en vista Bloques (MakeCode abre los proyectos en
  bloques por defecto). Con programas simples renderiza bien; con programas con
  `forever` + `if/else` el workspace **se cuelga a mitad de inicialización** en el
  navegador automatizado (canvas 0×0, `loader` activo).
- Para **fijar el código** sin pelear con el autocierre de Monaco: exponer los modelos
  y usar `monaco.editor.getModels()` → `model.setValue(...)` sobre `main.ts` (y/o
  `main.py`). Esto sí es fiable.
- Los **colores exactos** de cada categoría se extraen del editor cargado leyendo
  `--block-meta-color` de las filas `.blocklyTreeRow`; las **etiquetas en español**
  se leen abriendo el flyout de cada categoría (`row.click()` + leer `text.blocklyText`).

Conclusión: en lugar de capturar un editor frágil, **dibujamos** los bloques con la
paleta y las etiquetas reales que extrajimos. Es 100 % reproducible, vectorial y sin
dependencias de red ni de terceros.

## Paleta exacta de MakeCode micro:bit (extraída del editor)

| Categoría | Color | Uso en el fotómetro |
|-----------|-------|---------------------|
| Básico    | `#1E90FF` | `para siempre`, `mostrar cadena` |
| Entrada   | `#D400D4` | `nivel de luz` (reporter) |
| Lógica    | `#00A4A6` | `si … si no`, comparación `<` |
| Variables | `#DC143C` | `establecer luz a …`, variable `luz` |
| Matemática| `#9400D3` | literales numéricos |

Etiquetas en español verificadas en el editor: `para siempre`, `establecer [var] a`,
`nivel de luz`, `si … entonces`, `si no`, `mostrar cadena`.

## Pipeline

```sh
cd scripts/generadores

# 1) Generar el SVG (Node, sin dependencias)
node makecode-blocks-gen.js > bloques-makecode.svg

# 2) Rasterizar a PNG de alta resolución (macOS, Quick Look = motor WebKit)
qlmanage -t -s 1928 -o . bloques-makecode.svg      # → bloques-makecode.svg.png

# 3) Recortar el relleno blanco (qlmanage cuadra la imagen) y colocar el asset
python3 - <<'PY'
from PIL import Image, ImageChops
im = Image.open("bloques-makecode.svg.png").convert("RGB")
bbox = ImageChops.difference(im, Image.new("RGB", im.size, (255,255,255))).getbbox()
l,t,r,b = bbox; pad=24
im.crop((max(0,l-pad),max(0,t-pad),min(im.width,r+pad),min(im.height,b+pad))) \
  .save("../../public/guias-mejoras/semillero/assets/robotica-3/bloques-makecode.png","PNG")
PY
```

`makecode-blocks-render.html` es la misma lógica en el navegador (útil para previsualizar
y descargar el PNG con un botón; expone `window.renderSpecToPNG(scale)`).

## Incrustar en una guía

El PNG se referencia desde el `.tex` del diagrama con ruta relativa al build:

```latex
\includegraphics[width=0.86\linewidth]{assets/robotica-3/bloques-makecode.png}
```

y ese `.tex` se declara en el `recursos:` del YAML como un `diagrama` (se incrusta con
`\guiaDiagrama`). Ver `public/guias-mejoras/semillero/assets/robotica-3/flujo-a-bloques.tex`.

## Adaptar a otro programa

Editar la función `build()` de `makecode-blocks-gen.js`: define las filas del programa
(bloques C con `drawC` / `drawIf`, sentencias con `blockRect`, reporters con `pill`,
condiciones con `hexo`, campos blancos con `field`). Reutiliza los helpers y la paleta.
Para un programa nuevo, extrae del editor las etiquetas en español exactas (flyout) y
verifica los colores por si cambian entre targets.
