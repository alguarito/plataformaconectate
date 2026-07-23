/**
 * Generador de imágenes Open Graph para ConectaTE.
 *
 * Produce 33 PNGs en /public/og/ con la identidad visual Bento:
 * - 1 home + 6 grados + 18 períodos + 1 acerca + 1 comenzar + 1 modelo-milc
 *   + 1 plan-de-area + 4 portadas de la Colección MILC
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
import { anclajesAncestrales } from '../src/data/planArea';

const ANCLAJE_POR_PERIODO: Record<string, { oficio: string }> = {};
for (const a of anclajesAncestrales) {
  ANCLAJE_POR_PERIODO[`${a.grado}-${a.periodo}`] = { oficio: a.oficio };
}

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
  // 3 chips con los temas de los 3 periodos
  const chips = grado.periodos.map((p, i) => {
    const x = 80;
    const y = 470 + i * 60;
    const titulo = truncar(p.titulo, 48);
    return `
      <text x="${x}" y="${y}" fill="${c.fg}" opacity="0.95" font-family="Helvetica, sans-serif" font-weight="700" font-size="24" letter-spacing="-0.5">
        <tspan opacity="0.6">P${p.numero} ·</tspan> ${esc(titulo)}
      </text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${c.bg}"/>
    ${patternDots(0.07)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="${c.fg}" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('GRADO · TECNOLOGÍA E INFORMÁTICA · 2026')}
    </text>
    <!-- Número grande del grado (a la izquierda, no tan dominante) -->
    <text x="80" y="380" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="320" letter-spacing="-15" opacity="0.95">
      ${grado.numero}°
    </text>
    <!-- Icono del grado en esquina superior derecha -->
    <text x="${W - 100}" y="200" fill="${c.fg}" font-family="Helvetica, sans-serif" font-size="120" text-anchor="end">
      ${grado.icono}
    </text>
    <!-- Tres temas (uno por periodo) -->
    ${chips}
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, c.fg, c.fg === '#FFFFFF' ? '#FFFFFF' : '#0066FF')}
  </svg>`;
}

function tplPeriodo(grado: typeof grados[number], periodo: typeof grados[number]['periodos'][number]): string {
  const c = COLOR[periodo.bgClass] ?? COLOR['bg-bento-blue'];
  const lineasTit = textoEnLineas(periodo.titulo, 22, 2);
  const anclaje = ANCLAJE_POR_PERIODO[`${grado.numero}-${periodo.numero}`];
  const oficio = anclaje ? truncar(anclaje.oficio, 50) : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${c.bg}"/>
    ${patternDots(0.07)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="${c.fg}" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc(`GRADO ${grado.numero}° · PERÍODO ${periodo.numero} · 2026`)}
    </text>
    <!-- Número grande del período (fondo decorativo) -->
    <text x="80" y="370" fill="${c.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="280" letter-spacing="-12" opacity="0.16">
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
    <!-- Anclaje ancestral (nuevo · ancla cultural del periodo) -->
    ${oficio ? `
    <text x="80" y="${H - 170}" fill="${c.fg}" opacity="0.7" font-family="Helvetica, sans-serif" font-weight="700" font-size="18" letter-spacing="2">
      ${esc('🌱 ANCLAJE ANCESTRAL')}
    </text>
    <text x="80" y="${H - 130}" fill="${c.fg}" opacity="0.95" font-family="Helvetica, sans-serif" font-weight="700" font-size="30" letter-spacing="-1">
      ${esc(oficio)}
    </text>` : ''}
    <!-- Sub-stats -->
    <text x="80" y="${H - 80}" fill="${c.fg}" opacity="0.75" font-family="Helvetica, sans-serif" font-weight="600" font-size="20">
      ${esc('10 guías · 1 proyecto integrador · 1 examen · banco de práctica')}
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

function tplComenzar(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#0066FF"/>
    ${patternDots(0.08)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="#FFFFFF" opacity="0.95" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('CÓMO USAR LA PLATAFORMA · 2026')}
    </text>
    <!-- Emoji decorativo -->
    <text x="${W - 80}" y="200" fill="#FFFFFF" opacity="0.18" font-family="Helvetica, sans-serif" font-size="160" text-anchor="end">
      🧭
    </text>
    <!-- Título principal -->
    <text x="80" y="320" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="124" letter-spacing="-4">
      ${esc('Comenzar.')}
    </text>
    <!-- Subtítulo -->
    <text x="80" y="395" fill="#A3FF12" font-family="Helvetica, sans-serif" font-weight="800" font-size="32" letter-spacing="-1">
      ${esc('Para docentes y estudiantes.')}
    </text>
    <!-- Stats clave -->
    <text x="80" y="455" fill="#FFFFFF" opacity="0.9" font-family="Helvetica, sans-serif" font-weight="600" font-size="22">
      ${esc('7 secciones · 3 diagramas · toggle docente/estudiante')}
    </text>
    <text x="80" y="490" fill="#FFFFFF" opacity="0.75" font-family="Helvetica, sans-serif" font-weight="500" font-size="20">
      ${esc('Anatomía de una guía · cuaderno · examen · proyecto · política de IA')}
    </text>
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, '#FFFFFF', '#A3FF12')}
  </svg>`;
}

function tplModeloMilc(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#7C3AED"/>
    ${patternDots(0.08)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="#FFD60A" opacity="0.95" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('PEDAGOGÍA PROPIA · 2026')}
    </text>
    <!-- Emoji decorativo -->
    <text x="${W - 80}" y="220" fill="#FFFFFF" opacity="0.18" font-family="Helvetica, sans-serif" font-size="170" text-anchor="end">
      🌱
    </text>
    <!-- Título principal -->
    <text x="80" y="300" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="92" letter-spacing="-3">
      ${esc('Modelo')}
    </text>
    <text x="80" y="380" fill="#FFD60A" font-family="Helvetica, sans-serif" font-weight="900" font-size="124" letter-spacing="-4">
      ${esc('MILC.')}
    </text>
    <!-- Subtítulo -->
    <text x="80" y="430" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="700" font-size="26" letter-spacing="-1">
      ${esc('Investigación · Liberadora · Científica.')}
    </text>
    <!-- Stats clave -->
    <text x="80" y="475" fill="#FFFFFF" opacity="0.9" font-family="Helvetica, sans-serif" font-weight="600" font-size="22">
      ${esc('4 fases · Triángulo Dussel-Estoico-Floridi · 18 anclajes ancestrales')}
    </text>
    <text x="80" y="510" fill="#FFFFFF" opacity="0.75" font-family="Helvetica, sans-serif" font-weight="500" font-size="20">
      ${esc('Colección MILC · 4 libros con DOI · Dr. Álvaro Cárdenas Orozco')}
    </text>
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, '#FFFFFF', '#FFD60A')}
  </svg>`;
}

function tplPlanArea(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="#5A0038"/>
    ${patternDots(0.07)}
    <text x="80" y="120" fill="#FFD60A" opacity="0.95" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc('PLAN DE ÁREA · 2026')}
    </text>
    <text x="${W - 80}" y="220" fill="#FFFFFF" opacity="0.25" font-family="Helvetica, sans-serif" font-size="180" text-anchor="end">
      📚
    </text>
    <text x="80" y="290" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="80" letter-spacing="-2">
      ${esc('Tecnología')}
    </text>
    <text x="80" y="380" fill="#FFFFFF" font-family="Helvetica, sans-serif" font-weight="900" font-size="80" letter-spacing="-2">
      ${esc('e Informática.')}
    </text>
    <text x="80" y="450" fill="#FFD60A" font-family="Helvetica, sans-serif" font-weight="900" font-size="36" letter-spacing="-1">
      ${esc('216 piezas curriculares activas')}
    </text>
    <text x="80" y="490" fill="#FFFFFF" opacity="0.85" font-family="Helvetica, sans-serif" font-weight="600" font-size="22">
      ${esc('180 guías · 18 proyectos · 18 exámenes · Pipeline MILC v3')}
    </text>
    <text x="80" y="${H - 100}" fill="#FFFFFF" opacity="0.7" font-family="Helvetica, sans-serif" font-weight="600" font-size="20">
      ${esc('Grados 6° a 11° · I.E. Sor María Juliana · Cartago')}
    </text>
    ${wordmark(W - 240, H - 60, '#FFFFFF', '#FFD60A')}
  </svg>`;
}

/* ────────────── Portadas OG de la Colección MILC ────────────── */

type LibroOg = {
  slug: string;
  etiqueta: string;
  titulo: string;
  subtitulo: string;
  paginas: number;
  licencia: string;
  doi: string;
  bg: string;
  fg: string;
  accent: string;
  emoji: string;
};

// Cada libro con el color de su card en la home (matriz=negro, Tomo I=morado, Tomo II=azul, Tomo III=naranja).
const LIBROS: LibroOg[] = [
  {
    slug: 'libro-onlife',
    etiqueta: 'COLECCIÓN MILC · OBRA MATRIZ',
    titulo: 'Educación en la Era Onlife',
    subtitulo: 'Modelo de Investigación Liberadora y Científica',
    paginas: 226,
    licencia: 'CC BY-NC-SA 4.0',
    doi: '10.5281/zenodo.20518085',
    bg: '#000000', fg: '#FFFFFF', accent: '#A3FF12',
    emoji: '📖',
  },
  {
    slug: 'libro-mercado-atencion',
    etiqueta: 'COLECCIÓN MILC · TOMO I',
    titulo: 'El Mercado de la Atención',
    subtitulo: 'Educar el criterio de los jóvenes en la era onlife',
    paginas: 118,
    licencia: 'CC BY-SA 4.0',
    doi: '10.5281/zenodo.20644820',
    bg: '#7C3AED', fg: '#FFFFFF', accent: '#FFD60A',
    emoji: '📕',
  },
  {
    slug: 'libro-querencia',
    etiqueta: 'COLECCIÓN MILC · TOMO II',
    titulo: 'Pedagogía de la Querencia',
    subtitulo: 'Arraigar al estudiante en su territorio y saberes ancestrales',
    paginas: 144,
    licencia: 'CC BY-SA 4.0',
    doi: '10.5281/zenodo.21176768',
    bg: '#0066FF', fg: '#FFFFFF', accent: '#A3FF12',
    emoji: '🌱',
  },
  {
    slug: 'libro-el-nino-que-suena-ciencia',
    etiqueta: 'COLECCIÓN MILC · TOMO III',
    titulo: 'El niño que sueña ciencia',
    subtitulo: 'Darle método al sueño de investigar, sin apagar el asombro',
    paginas: 138,
    licencia: 'CC BY-SA 4.0',
    doi: '10.5281/zenodo.21360910',
    bg: '#FF6B35', fg: '#FFFFFF', accent: '#FFD60A',
    emoji: '📙',
  },
  {
    slug: 'libro-no-rendir-la-mirada',
    etiqueta: 'COLECCIÓN MILC · TOMO IV',
    titulo: 'No rendir la mirada',
    subtitulo: 'IA, datos y soberanía tecnológica: usar la herramienta con criterio',
    paginas: 142,
    licencia: 'CC BY-SA 4.0',
    doi: '10.5281/zenodo.21517630',
    bg: '#1A1A2E', fg: '#FFFFFF', accent: '#C9A227',
    emoji: '📕',
  },
];

function tplLibro(libro: LibroOg): string {
  const lineasTit = textoEnLineas(libro.titulo, 17, 2);
  const lineasSub = textoEnLineas(libro.subtitulo, 44, 2);
  const titulo = lineasTit
    .map(
      (l, i) => `
      <text x="80" y="${250 + i * 82}" fill="${libro.fg}" font-family="Helvetica, sans-serif" font-weight="900" font-size="82" letter-spacing="-3">
        ${esc(l)}
      </text>`,
    )
    .join('');
  // Posición fija del subtítulo (bajo un título de hasta 2 líneas) para no chocar con los metadatos.
  const subtitulo = lineasSub
    .map(
      (l, i) => `
      <text x="80" y="${432 + i * 38}" fill="${libro.fg}" opacity="0.88" font-family="Helvetica, sans-serif" font-weight="600" font-size="28" letter-spacing="-0.5">
        ${esc(l)}
      </text>`,
    )
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${libro.bg}"/>
    ${patternDots(0.07)}
    <!-- Etiqueta superior -->
    <text x="80" y="120" fill="${libro.accent}" font-family="Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3">
      ${esc(libro.etiqueta)}
    </text>
    <!-- Emoji decorativo -->
    <text x="${W - 80}" y="210" fill="${libro.fg}" opacity="0.18" font-family="Helvetica, sans-serif" font-size="170" text-anchor="end">
      ${libro.emoji}
    </text>
    <!-- Título del libro -->
    ${titulo}
    <!-- Subtítulo -->
    ${subtitulo}
    <!-- Metadatos de obra citable -->
    <text x="80" y="${H - 92}" fill="${libro.accent}" font-family="Helvetica, sans-serif" font-weight="800" font-size="24" letter-spacing="-0.5">
      ${esc(`${libro.paginas} páginas · ${libro.licencia} · Acceso abierto`)}
    </text>
    <text x="80" y="${H - 56}" fill="${libro.fg}" opacity="0.72" font-family="Helvetica, sans-serif" font-weight="500" font-size="20">
      ${esc(`DOI ${libro.doi} · Dr. Álvaro Cárdenas Orozco`)}
    </text>
    <!-- Wordmark esquina -->
    ${wordmark(W - 240, H - 60, libro.fg, libro.accent)}
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

  // Comenzar (módulo onboarding)
  await svg2png(tplComenzar(), `${OUT_DIR}/comenzar.png`);
  count++;

  // Modelo MILC (página de autoridad pedagógica)
  await svg2png(tplModeloMilc(), `${OUT_DIR}/modelo-milc.png`);
  count++;

  // Plan de Área
  await svg2png(tplPlanArea(), `${OUT_DIR}/plan-de-area.png`);
  count++;

  // Colección MILC · una portada dedicada por libro (obra citable)
  for (const libro of LIBROS) {
    await svg2png(tplLibro(libro), `${OUT_DIR}/${libro.slug}.png`);
    count++;
  }

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
