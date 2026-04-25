# 🎓 ConectaTE — Plataforma Educativa

> **Conectando Tecnología con Educación**
> Plataforma educativa interactiva del área de Tecnología e Informática
> **Institución Educativa Sor María Juliana** · Cartago, Valle del Cauca
> Dr. Álvaro Cárdenas Orozco

---

## 🎯 Objetivo

Plataforma web que organiza y comparte las **150 guías de aprendizaje** y **15 proyectos integradores** del área de Tecnología e Informática (grados 6° a 10°), estructurados en 3 períodos académicos por grado.

Inspirada en [Física Interactiva](https://iemauxicartago.edu.co/Fisica/) de la I.E. María Auxiliadora de Cartago.

---

## ⚙️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro 4](https://astro.build) (estático, rápido) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) |
| Contenido | Markdown + MDX |
| Paleta | iOS System Colors |
| Estilo visual | Glassmorphism |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## 🚀 Instalación Local

### 1. Requisitos previos

- [Node.js](https://nodejs.org) 18+ (recomendado 20+)
- [Git](https://git-scm.com)

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre http://localhost:4321/plataformaconectate

### 4. Construir para producción

```bash
npm run build
```

El sitio estático se generará en `dist/`.

### 5. Previsualizar el build

```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
plataformaconectate/
├── .github/workflows/    # GitHub Actions (deploy automático)
├── public/                # Archivos estáticos (LOGO.png, etc.)
├── src/
│   ├── components/        # Componentes Astro reutilizables
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── GradoCard.astro
│   │   ├── PeriodoCard.astro
│   │   ├── ThemeToggle.astro
│   │   └── BlobsBackground.astro
│   ├── data/
│   │   └── grados.ts      # Metadata de los 5 grados y sus períodos
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Layout general (nav + footer)
│   │   └── GuiaLayout.astro   # Layout específico para cada guía
│   ├── pages/
│   │   ├── index.astro                        # Landing
│   │   ├── grado-[numero]/index.astro         # Dinámica: 5 páginas de grado
│   │   ├── grado-[numero]/periodo-[periodo]/  # Dinámica: 15 períodos
│   │   └── grado-6/periodo-1/guia-1.mdx       # Ejemplo de guía MDX
│   └── styles/
│       └── global.css     # Estilos globales (glassmorphism + iOS)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## ✍️ Cómo agregar una nueva guía

Las guías se escriben en **MDX** (Markdown con componentes) para facilidad de edición.

1. Crea un archivo en `src/pages/grado-N/periodo-N/guia-N.mdx`
2. Copia el frontmatter del ejemplo (`src/pages/grado-6/periodo-1/guia-1.mdx`)
3. Escribe el contenido en Markdown
4. Guarda y se publica automáticamente al hacer `git push`

---

## 🌐 Deploy a GitHub Pages

### Primer deploy (una sola vez)

1. Sube el código al repositorio:
   ```bash
   git add .
   git commit -m "feat: MVP inicial de ConectaTE"
   git push -u origin main
   ```

2. Activa GitHub Pages en el repositorio:
   - Ve a **Settings → Pages**
   - Source: **GitHub Actions**
   - Guarda

3. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente.

4. El sitio quedará publicado en:
   **https://alguarito.github.io/plataformaconectate**

### Deploys posteriores

Cada `git push` a `main` dispara un deploy automático (~2 minutos).

---

## 🎨 Paleta de Colores (iOS)

| Color | Hex Claro | Hex Oscuro | Uso |
|-------|-----------|------------|-----|
| 🔵 iOS Blue | `#007AFF` | `#0A84FF` | Primario |
| 🟢 iOS Green | `#34C759` | `#30D158` | Éxito / Grado 7° |
| 🟠 iOS Orange | `#FF9500` | `#FF9F0A` | Grado 8° |
| 🟣 iOS Purple | `#AF52DE` | `#BF5AF2` | Grado 9° |
| 🔴 iOS Pink | `#FF2D55` | `#FF375F` | Grado 10° |
| 🟡 iOS Yellow | `#FFCC00` | `#FFD60A` | Destacados |

Modo oscuro activado por defecto según preferencia del sistema.

---

## 📋 Roadmap

### ✅ Fase 1 (MVP actual)
- [x] Estructura del sitio (Astro + Tailwind)
- [x] Landing page con Hero y 5 grados
- [x] Rutas dinámicas para grados y períodos
- [x] Layout de guía MDX (1 guía de ejemplo)
- [x] Modo claro/oscuro automático
- [x] Deploy automático a GitHub Pages

### 🚧 Fase 2 (próximas semanas)
- [ ] Convertir las 150 guías de `.docx` a `.mdx`
- [ ] Convertir los 15 proyectos integradores
- [ ] Integrar simulaciones GeoGebra en las guías relevantes
- [ ] Agregar videos de YouTube embebidos
- [ ] Descargas en PDF de cada guía

### 🔮 Fase 3 (futuro)
- [ ] Sistema de registro de estudiantes (Supabase)
- [ ] Guardado de progreso y evaluaciones
- [ ] Chatbot IA tutor ("ConectaTE Genius" con Google Gemini)
- [ ] Panel docente para ver avance de estudiantes
- [ ] Laboratorios virtuales de electrónica e IoT

---

## 👤 Autor

**Dr. Álvaro Cárdenas Orozco**
Docente de Tecnología e Informática
I.E. Sor María Juliana — Cartago, Valle del Cauca, Colombia

---

## 📜 Licencia

Creative Commons **CC BY-NC-SA 4.0** — uso educativo, no comercial, compartir igual.

© 2026 ConectaTE. Todos los derechos reservados.
