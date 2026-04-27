import type { APIRoute } from 'astro';
import { grados } from '../data/grados';

/**
 * Sitemap dinámico para SEO.
 * Lista las 223 URLs estáticas con prioridad y changefreq adecuadas para
 * Google, Bing y otros buscadores.
 */
export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ?? new URL('https://alguarito.github.io')).toString().replace(/\/$/, '');
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const fullBase = `${baseUrl}${basePath}`;
  // Fecha estática del último cambio significativo (se actualiza al hacer commit que toque sitemap)
  const lastmod = new Date().toISOString().split('T')[0];

  type Url = { loc: string; priority: number; changefreq: string };
  const urls: Url[] = [];

  // Home
  urls.push({ loc: `${fullBase}/`, priority: 1.0, changefreq: 'weekly' });

  // Página "Acerca de"
  urls.push({ loc: `${fullBase}/acerca`, priority: 0.8, changefreq: 'monthly' });

  // Páginas de grado, período, guías y proyectos
  for (const g of grados) {
    urls.push({
      loc: `${fullBase}/grado-${g.numero}`,
      priority: 0.9,
      changefreq: 'monthly',
    });
    for (const p of g.periodos) {
      urls.push({
        loc: `${fullBase}/grado-${g.numero}/periodo-${p.numero}`,
        priority: 0.8,
        changefreq: 'monthly',
      });
      // Proyecto integrador
      urls.push({
        loc: `${fullBase}/grado-${g.numero}/periodo-${p.numero}/proyecto`,
        priority: 0.7,
        changefreq: 'monthly',
      });
      // 10 guías por período
      for (let s = 1; s <= 10; s++) {
        urls.push({
          loc: `${fullBase}/grado-${g.numero}/periodo-${p.numero}/guia-${s}`,
          priority: 0.7,
          changefreq: 'monthly',
        });
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
