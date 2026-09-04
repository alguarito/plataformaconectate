import type { APIRoute } from 'astro';
import { construirIndice } from '../../data/indiceBuscador';

/**
 * Índice del buscador global como JSON estático.
 *
 * Se genera al build en `${base}/data/buscador.json` y lo descarga
 * BuscadorOverlay.astro una sola vez al abrir el diálogo (antes iba
 * embebido en cada página y sumaba ~1,4 MB por HTML). El service worker
 * lo cachea con stale-while-revalidate (ver public/sw.js).
 */
export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const indice = construirIndice(base);
  return new Response(JSON.stringify(indice), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
