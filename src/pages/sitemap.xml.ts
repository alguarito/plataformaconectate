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

  // Página "Comenzar" · onboarding para docentes y estudiantes (alto valor SEO)
  urls.push({ loc: `${fullBase}/comenzar`, priority: 0.9, changefreq: 'monthly' });

  // Página "Modelo MILC" · pedagogía propia · página de autoridad (alto valor SEO)
  urls.push({ loc: `${fullBase}/modelo-milc`, priority: 0.9, changefreq: 'monthly' });

  // Colección MILC · páginas dedicadas de cada libro (obra citable con DOI · alto valor SEO)
  urls.push({ loc: `${fullBase}/modelo-milc/mercado-atencion`, priority: 0.85, changefreq: 'monthly' });
  urls.push({ loc: `${fullBase}/modelo-milc/querencia`, priority: 0.85, changefreq: 'monthly' });

  // PDFs de los libros · indexables directamente por Google (rankean como documento)
  urls.push({ loc: `${fullBase}/libro-milc/libro-milc-2026.pdf`, priority: 0.7, changefreq: 'yearly' });
  urls.push({ loc: `${fullBase}/libro-milc/tomo-1-mercado-de-la-atencion.pdf`, priority: 0.7, changefreq: 'yearly' });
  urls.push({ loc: `${fullBase}/libro-milc/tomo-2-pedagogia-de-la-querencia.pdf`, priority: 0.7, changefreq: 'yearly' });

  // Página "Acerca de"
  urls.push({ loc: `${fullBase}/acerca`, priority: 0.8, changefreq: 'monthly' });

  // Página "Plan de Área"
  urls.push({ loc: `${fullBase}/plan-de-area`, priority: 0.85, changefreq: 'monthly' });

  // Dashboard del estudiante (acceso público para SEO; el contenido se gatea client-side)
  urls.push({ loc: `${fullBase}/dashboard`, priority: 0.5, changefreq: 'monthly' });

  // Páginas de grado, período, guías y proyectos
  for (const g of grados) {
    urls.push({
      loc: `${fullBase}/grado-${g.numero}`,
      priority: g.enConstruccion ? 0.3 : 0.9,
      changefreq: 'monthly',
    });
    // Mientras el grado esté en construcción no indexamos sus rutas internas:
    // las páginas de períodos/guías/proyectos existen pero no se promocionan
    // en el sitemap para evitar que motores y buscadores las muestren.
    if (g.enConstruccion) continue;
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
      // Examen final
      urls.push({
        loc: `${fullBase}/grado-${g.numero}/periodo-${p.numero}/examen`,
        priority: 0.65,
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
