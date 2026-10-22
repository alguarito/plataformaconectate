import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { rm } from 'node:fs/promises';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Capa de cuentas (Supabase): desactivada por decisión del autor el 2026-10-22.
// Con PUBLIC_AUTH_ENABLED distinto de 'true', las rutas de cuentas, panel
// docente y censo de conectividad no se publican: el código sigue en el repo,
// pero sus páginas se retiran de dist/ al terminar el build.
// Antes de reactivarla, ver docs/cuentas-2027.md.
const { PUBLIC_AUTH_ENABLED } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');
const cuentasActivas = PUBLIC_AUTH_ENABLED === 'true';
const RUTAS_DE_CUENTAS = ['cuenta', 'docente', 'conectividad'];

function cuentasDesactivadas() {
  return {
    name: 'conectate:cuentas-desactivadas',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (cuentasActivas) return;
        for (const ruta of RUTAS_DE_CUENTAS) {
          await rm(new URL(`${ruta}/`, dir), { recursive: true, force: true });
        }
        logger.info(`Cuentas desactivadas: no se publican /${RUTAS_DE_CUENTAS.join(', /')}`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://alguarito.github.io',
  base: '/plataformaconectate',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    cuentasDesactivadas(),
  ],
  build: {
    format: 'directory',
  },
});
