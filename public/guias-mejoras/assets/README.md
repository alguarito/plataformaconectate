# Assets de guías — convención

Imágenes, diagramas y otros recursos visuales que las guías PDF y web incrustan.

## Estructura de carpetas

```
public/guias-mejoras/assets/
├── README.md             ← este archivo
├── 1-11/                 ← assets de la guía G11·P1·S1 (sesión global 1)
│   ├── saber-ancestral.jpg
│   └── anatomia-marca.svg
├── 2-11/                 ← assets de la guía G11·P1·S2
│   └── ...
└── {sesionGlobal}-{grado}/
```

**Convención del nombre de carpeta:** `{sesionGlobal}-{grado}` donde:
- `sesionGlobal` = 1..30 (P1 → 1-10, P2 → 11-20, P3 → 21-30)
- `grado` = 6, 7, 8, 9, 10, 11

Ejemplo: la guía G11·P2·S3 (sesión global 13) tiene sus assets en `public/guias-mejoras/assets/13-11/`.

## Cómo se referencia un asset desde el YAML

En el archivo YAML de la guía (ej. `content/guias/11/11-2-3.yaml`):

```yaml
recursos:
  imagenes:
    - archivo: "diagrama-bpmn.svg"
      alt: "Diagrama BPMN del flujo de matrícula"
      caption: "Ejemplo real del proceso del colegio"
      donde: "sistematizacion"
```

El builder busca el archivo en `public/guias-mejoras/assets/13-11/diagrama-bpmn.svg`.

Si el archivo no existe, `make guia-lint` lo reporta como error.

## Formatos recomendados

- **Fotos:** `.jpg` o `.webp` (compresión), ≤ 500 KB cada una.
- **Diagramas:** `.svg` (escalable, ideal para LaTeX y web).
- **Capturas de pantalla:** `.png` con transparencia si aplica.
- **Iconos pequeños:** `.svg` siempre.

## Naming

- Nombre descriptivo en kebab-case: `saber-ancestral-tejido-wayuu.jpg`, no `IMG_001.jpg`.
- Sin tildes ni mayúsculas: `diagrama-bpmn.svg`, no `Diagrama BPMN.svg`.
- Sin espacios: usa guiones.

## Licencias y atribución

Si una imagen no es de tu autoría, agrega el campo `fuente` al referenciarla:

```yaml
recursos:
  imagenes:
    - archivo: "quimbaya-mascara.jpg"
      alt: "Máscara ceremonial Quimbaya"
      fuente: "Museo del Oro · Bogotá (CC BY-SA)"
      donde: "apertura"
```

El builder incluye la atribución en el PDF y web.

## Comandos relacionados

```bash
make guia-assets                   # lista todos los assets de todas las guías
make guia-assets CLAVE=1-2         # lista assets de G11·P1·S2
make guia-lint                     # valida referencias rotas (asset declarado pero archivo ausente)
```

## Estado actual

Todavía ninguna guía declara assets (las G11·P1 funcionan sin imágenes). La estructura está lista para cuando empieces a incluir diagramas o fotos del oficio.
