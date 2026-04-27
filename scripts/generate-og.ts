/**
 * Generador de imágenes Open Graph para ConectaTE.
 *
 * Produce 27 PNGs en /public/og/ con la identidad visual Bento:
 * - 1 home + 6 grados + 18 períodos + 1 acerca + 1 plan-de-area
 *
 * Cada página de la plataforma referencia el archivo correspondiente.
 * Guías, proyectos y exámenes heredan la imagen de su período (contexto
 * visual coherente al compartir por WhatsApp).
 *
 * Ejecutar: npx tsx scripts/generate-og.ts (también corre como prebuild)
 */

import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { grados } from '../src/data/grados';

const OUT_DIR = resolve('public/og');
const W = 1200;
const H = 630;

// Mapa de nuestras clases bento a hex codes (sincronizado con tailwind.config.mjs)
const COLOR: Record<string, { bg: string; fg: string }> = {
  'bg-bento-blue':   { bg: '#0066FF', fg: '#FFFFFF' },
  'bg-bento-cyan':   { bg: '#00D4FF', fg: '#000000' },
  'bg-bento-purple': { bg: '#7C3AED', fg: '#FFFFFF' },
  'bg-bento-pink':   { bg: '#FF2D87', fg: '#FFFFFF' },
  'bg-bento-orange': { bg: '#FF6B35', fg: '#FFFFFF' },
  'bg-bento-yellow': { bg: '#FFD60A', fg: '#000000' },
  'bg-bento-lime':   { bg: '#A3FF12', fg: '#000000' },
  'bg-bento-black':  { bg: '#000000', fg: '#FFFFFF' },
  'bg-bento-white':  { bg: '#FFFFFF', fg: '#000000' },
};

/** Escapa caracteres XML básicos para incrustar texto en SVG. */
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Recorta una cadena hasta un máximo, agregando ellipsis. */
function truncar(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + '…';
}

/** Wordmark "Conecta·TE" en una esquina, con la TE en blue (sobre fondo claro/oscuro). */
function wordmark(x: number, y: number, color: string, accent = '#0066FF'): string {
  const fontFamily = "Helvetica, 'Helvetica Neue', Arial, system-ui, sans-serif";
  return `
    <text x="${x}" y="${y}" font-family="${fontFamily}" font-weight="900" font-size="32" letter-spacing="-1" fill="${color}">
      Conecta<tspan fill="${accent}">TE</tspan>
    </text>
  `;
}

/** Texto envuelto en múltiples líneas, máx 2 líneas, ellipsis al final. */
function textoEnLineas(
  s: string,
  maxCharsPorLinea: number,
  maxLineas: number = 2,
): string[] {
  const palabras = s.split(' ');
  const lineas: string[] = [];
  let actual = '';
  for (const p of palabras) {
    if ((actual + ' ' + p).trim().length > maxCharsPorLinea) {
      if (actual) lineas.push(actual);
      actual = p;
      if (lineas.length === maxLineas) break;
    } else {
      actual = (actual + ' ' + p).trim();
    }
  }
  if (actual && lineas.length < maxLineas) lineas.push(actual);
  if (lineas.length === maxLineas) {
    const ult = lineas[maxLineas - 1];
    if (s.length > lineas.join(' ').length) {
      lineas[maxLineas - 1] = truncar(ult, maxCharsPorLinea);
    }
  }
  return lineas;
}

/** Logo subtle pattern para esquina derecha (puntitos). */
function patternDots(opacity = 0.15): string {
  let dots = '';
  for (let x = 720; x < W - 60; x += 40) {
    for (let y = 120; y < H - 80; y += 40) {
      dots += `<circle cx="${x}" cy="${y}" r="2" fill="white" opacity="${opacity}"/>`;
    }
  }
  return dots;
}

/* ────────────── Templates ────────────── */

function tplHome(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#000000"/>
    ${patternDots(0.05)}
    <!-- Marca institucional -->
    <text x="80" y="120" fill="#A3FF12" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('I.E. SOR MARÍA JULIANA · CARTAGO')}
    </text>
    <!-- Wordmark gigante -->
    <text x="80" y="340" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="184" letter-spacing="-8">
      Conecta<tspan fill="#0066FF">TE</tspan>.
    </text>
    <!-- Tagline -->
    <text x="80" y="430" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="600" font-size="38">
      ${esc('Conectando Tecnología con Educación.')}
    </text>
    <!-- Stats -->
    <text x="80" y="500" fill="#FFFFFF" opacity="0.7" font-family="Helvetica, sans-serif" font-weight="500" font-size="24">
      ${esc('180 guías · 18 proyectos · 18 exámenes · Grados 6° a 11°')}
    </text>
    <!-- Footer institucional -->
    <text x="80" y="${H - 60}" fill="#FFFFFF" opacity="0.4" font-family="Helvetica, sans-serif" font-weight="500" font-size="20">
      ${esc('Dr. Álvaro Cárdenas Orozco · Plataforma educativa MILC')}
    </text>
  </svg>`;
}

function tplGrado(grado: typeof grados[number]): string {
  const c = COLOR[grado.bgClass] ?? COLOR['bg-bento-blue'];
  const lineasTit = textoEnLineas(grado.titulo, 28, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${c.bg}"/>
    ${patternDots(0.07)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="${c.fg}" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('GRADO · TECNOLOGÍA E INFORMÁTICA')}
    </text>
    <!-- Número grande del grado -->
    <text x="80" y="430" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="380" letter-spacing="-15">
      ${grado.numero}°
    </text>
    <!-- Icono del grado en esquina -->
    <text x="${W - 100}" y="200" fill="${c.fg}" font-family="Helvetica, sans-serif" font-size="120" text-anchor="end">
      ${grado.icono}
    </text>
    <!-- Título del grado -->
    ${lineasTit
      .map(
        (l, i) => `
      <text x="80" y="${510 + i * 50}" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="42" letter-spacing="-1">
        ${esc(l)}
      </text>`,
      )
      .join('')}
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, c.fg, c.fg === '#FFFFFF' ? '#FFFFFF' : '#0066FF')}
  </svg>`;
}

function tplPeriodo(grado: typeof grados[number], periodo: typeof grados[number]['periodos'][number]): string {
  const c = COLOR[periodo.bgClass] ?? COLOR['bg-bento-blue'];
  const lineasTit = textoEnLineas(periodo.titulo, 22, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${c.bg}"/>
    ${patternDots(0.07)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="${c.fg}" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc(`GRADO ${grado.numero}° · PERÍODO ${periodo.numero}`)}
    </text>
    <!-- Número grande del período -->
    <text x="80" y="370" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="280" letter-spacing="-12" opacity="0.18">
      P${periodo.numero}
    </text>
    <!-- Título del período -->
    ${lineasTit
      .map(
        (l, i) => `
      <text x="80" y="${260 + i * 70}" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="64" letter-spacing="-2">
        ${esc(l)}
      </text>`,
      )
      .join('')}
    <!-- Sub-stats -->
    <text x="80" y="${H - 130}" fill="${c.fg}" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="600" font-size="22">
      ${esc('10 sesiones · 1 proyecto integrador · 1 examen final')}
    </text>
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, c.fg, c.fg === '#FFFFFF' ? '#FFFFFF' : '#0066FF')}
  </svg>`;
}

function tplAcerca(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#0066FF"/>
    ${patternDots(0.07)}
    <text x="80" y="120" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('ACERCA DEL DOCENTE')}
    </text>
    <text x="80" y="280" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="500" font-size="40">
      ${esc('Dr.')}
    </text>
    <text x="80" y="370" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="92" letter-spacing="-3">
      ${esc('Álvaro Cárdenas')}
    </text>
    <text x="80" y="460" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="92" letter-spacing="-3">
      ${esc('Orozco')}
    </text>
    <text x="80" y="540" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="600" font-size="28">
      ${esc('PhD en Educación · Docente TIC · NASA-IASC 6 años · Samsung S4T')}
    </text>
    ${wordmark(W - 240, H - 60, '#FFFFFF', '#FFFFFF')}
  </svg>`;
}

function tplPlanArea(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#7C3AED"/>
    ${patternDots(0.07)}
    <text x="80" y="120" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('PLAN DE ÁREA · 2025')}
    </text>
    <text x="80" y="${H - 100}" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-size="180" text-anchor="start">
      📚
    </text>
    <text x="80" y="320" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="80" letter-spacing="-2">
      ${esc('Tecnología')}
    </text>
    <text x="80" y="410" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="80" letter-spacing="-2">
      ${esc('e Informática.')}
    </text>
    <text x="80" y="490" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="600" font-size="28">
      ${esc('Modelo MILC · Grados 6° a 11° · I.E. Sor María Juliana')}
    </text>
    ${wordmark(W - 240, H - 60, '#FFFFFF', '#FFFFFF')}
  </svg>`;
}

/* ────────────── Render + escritura ────────────── */

async function svg2png(svg: string, outPath: string): Promise<void> {
  mkdirSync(dirname(outPath), { recursive: true });
  const buf = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(outPath, buf);
}

async function main(): Promise<void> {
  console.log('🎨 Generando imágenes OG…');
  let count = 0;
  const t0 = Date.now();

  // Home
  await svg2png(tplHome(), `${OUT_DIR}/home.png`);
  count++;

  // Acerca
  await svg2png(tplAcerca(), `${OUT_DIR}/acerca.png`);
  count++;

  // Plan de Área
  await svg2png(tplPlanArea(), `${OUT_DIR}/plan-de-area.png`);
  count++;

  // 6 grados
  for (const g of grados) {
    await svg2png(tplGrado(g), `${OUT_DIR}/grado-${g.numero}.png`);
    count++;
  }

  // 18 períodos
  for (const g of grados) {
    for (const p of g.periodos) {
      await svg2png(
        tplPeriodo(g, p),
        `${OUT_DIR}/grado-${g.numero}-periodo-${p.numero}.png`,
      );
      count++;
    }
  }

  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`✅ Generadas ${count} imágenes OG en ${dt}s · ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
