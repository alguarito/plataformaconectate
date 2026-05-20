# Auditorías SEO · Plataforma Conéctate

Carpeta con reportes Lighthouse y notas de auditoría SEO.

## Lighthouse · home `/` · 2026-05-20

Medido en preview local (`npm run preview`). Producción típicamente
ofrece mejor Performance por CDN de GitHub Pages y caché del Service Worker.

| Categoría | Score | Notas |
|---|---|---|
| Performance | 48/100 | Bajo en local · minimizar CSS/JS, reducir unused. Mejor en prod por SW caché. |
| Accessibility | 93/100 | Único issue: color-contrast en algún chip lime/yellow. |
| Best Practices | 100/100 | Sin issues técnicos. |
| **SEO** | **100/100** | Score perfecto tras paquete crítico (sitemap + Schema.org + OG). |

## Próximas auditorías

- Re-correr en producción tras deploy con PageSpeed Insights API
- Auditar `/modelo-milc`, `/comenzar` y una guía representativa
- Verificar Rich Results en [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

## Comando para regenerar

```bash
# Preview local en puerto 4325
npm run preview -- --port 4325 &
# Lighthouse contra home
npx lighthouse "http://localhost:4325/plataformaconectate/" \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html --output-path=./docs/seo/lighthouse-home-YYYY-MM-DD.html \
  --chrome-flags="--headless --no-sandbox" --quiet
```
