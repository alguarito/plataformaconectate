import type { APIRoute } from 'astro';
import { grados } from '../data/grados';
import { libros } from '../data/coleccion';

/**
 * Sitemap dinámico para SEO.
 * Lista las 225 URLs estáticas con prioridad y changefreq adecuadas para
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
  urls.push({ loc: `${fullBase}/modelo-milc/coleccion`, priority: 0.9, changefreq: 'monthly' });

  // Colección MILC · páginas dedicadas de cada libro (obra citable con DOI · alto valor SEO).
  // El Tomo 0 vive en /modelo-milc (arriba); los tomos I–V en /modelo-milc/<slug>.
  for (const l of libros) {
    if (l.slug) urls.push({ loc: `${baseUrl}${l.href}`, priority: 0.85, changefreq: 'monthly' });
  }

  // Archivos de los libros · indexables directamente por Google (rankean como documento).
  // Salen de src/data/coleccion.json; `url` ya trae la base y el nombre codificado (%20).
  for (const l of libros) {
    for (const a of l.archivos) {
      urls.push({ loc: `${baseUrl}${a.url}`, priority: a.rol === 'libro' ? 0.7 : 0.6, changefreq: 'yearly' });
    }
  }

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
