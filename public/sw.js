/**
 * Service Worker de ConectaTE
 *
 * Hace que la plataforma funcione offline tras la primera visita.
 * Estrategia por tipo de recurso:
 *  - HTML pages         → stale-while-revalidate (rápido, se refresca en bg)
 *  - Astro hashed assets→ cache-first (URL contiene hash, nunca cambia)
 *  - PDFs locales       → cache-first (no se modifican)
 *  - Imágenes           → cache-first
 *  - Inter font CDN     → cache-first
 *  - Sitemap/manifest   → network-first (puede cambiar entre deploys)
 *  - Drive / 3rd party  → no se cachea (passthrough)
 *
 * Versión: bumpear este número en deploys con cambios estructurales para
 * forzar invalidación de caché.
 */

const VERSION = 'v1';
const BASE_PATH = '/plataformaconectate';

const CACHE_SHELL = `conectate-shell-${VERSION}`;
const CACHE_PAGES = `conectate-pages-${VERSION}`;
const CACHE_ASSETS = `conectate-assets-${VERSION}`;

/** Recursos críticos que se precachean al instalar. */
const SHELL_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/manifest.webmanifest`,
  `${BASE_PATH}/LOGO.png`,
  `${BASE_PATH}/offline`,
];

/* ─── Install: precarga el shell y activa inmediatamente ─── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_SHELL)
      // addAll falla si CUALQUIER recurso falla → usamos un loop tolerante
      .then((cache) =>
        Promise.all(
          SHELL_URLS.map((url) =>
            fetch(url, { cache: 'reload' })
              .then((res) => (res.ok ? cache.put(url, res) : null))
              .catch(() => null),
          ),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

/* ─── Activate: limpia cachés viejos y toma control ─── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !k.endsWith(VERSION))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/* ─── Fetch: enrutar por tipo de recurso ─── */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo manejamos GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cross-origin (Drive, fonts, etc.)
  if (url.origin !== location.origin) {
    // Inter font: cache-first
    if (url.hostname === 'rsms.me') {
      event.respondWith(cacheFirst(request, CACHE_ASSETS));
      return;
    }
    // Drive y otros: passthrough (el browser maneja)
    return;
  }

  // Astro hashed assets: cache-first (URL incluye hash, content-addressed)
  if (url.pathname.includes('/_astro/')) {
    event.respondWith(cacheFirst(request, CACHE_ASSETS));
    return;
  }

  // PDFs locales (proyectos, plan de área, etc.): cache-first
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(cacheFirst(request, CACHE_ASSETS));
    return;
  }

  // Imágenes: cache-first
  if (/\.(png|jpe?g|svg|webp|ico|gif|avif)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request, CACHE_ASSETS));
    return;
  }

  // Páginas HTML: stale-while-revalidate con fallback a /offline
  const accept = request.headers.get('accept') || '';
  if (request.mode === 'navigate' || accept.includes('text/html')) {
    event.respondWith(staleWhileRevalidate(request, CACHE_PAGES));
    return;
  }

  // Sitemap, robots, manifest, JSON, etc.: network-first
  event.respondWith(networkFirst(request, CACHE_PAGES));
});

/* ─── Estrategias ─── */

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('Recurso no disponible offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(async () => {
      // Sin red y sin cache → mostrar página offline
      if (cached) return cached;
      const offline = await cache.match(`${BASE_PATH}/offline`);
      return (
        offline ||
        new Response('Sin conexión', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        })
      );
    });

  return cached || networkPromise;
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    return (
      cached ||
      new Response('Sin conexión', {
        status: 503,
        statusText: 'Service Unavailable',
      })
    );
  }
}

/* ─── Mensajería: permite forzar update desde la app ─── */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
