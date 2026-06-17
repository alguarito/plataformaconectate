/**
 * Generadores de gráficos como strings HTML/SVG, para usar desde scripts de
 * cliente que hidratan el dashboard con datos de Supabase (mismo patrón que
 * src/pages/docente/aulas/detalle.astro). Reutilizables entre vistas e
 * impresión. SVG → imprime nítido; sin librerías.
 *
 * Paleta bento (hex): blue #0066FF, lime #A3FF12, orange #FF6B35,
 * pink #FF2D87, purple #7C3AED, cyan #00D4FF, yellow #FFD60A.
 */

export const BENTO = {
  blue: '#0066FF',
  lime: '#A3FF12',
  orange: '#FF6B35',
  pink: '#FF2D87',
  purple: '#7C3AED',
  cyan: '#00D4FF',
  yellow: '#FFD60A',
} as const;

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );
}

export interface EtapaEmbudo {
  label: string;
  valor: number;
  color: string;
}

/** Embudo horizontal (divs). `base` para el % (default = mayor etapa). */
export function funnelHTML(etapas: EtapaEmbudo[], base?: number): string {
  const max = Math.max(1, ...etapas.map((e) => e.valor));
  const tot = base ?? max;
  return (
    `<div class="space-y-3" role="img" aria-label="Embudo de registro">` +
    etapas
      .map((e) => {
        const ancho = Math.max(Math.round((e.valor / max) * 100), 8);
        const pct = Math.round((e.valor / Math.max(tot, 1)) * 100);
        return (
          `<div class="flex items-center gap-3">` +
          `<span class="text-xs font-semibold w-20 flex-shrink-0 capitalize">${escapeHtml(e.label)}</span>` +
          `<div class="flex-1 h-7 bg-neutral-100 dark:bg-neutral-800 rounded-bento-sm overflow-hidden">` +
          `<div class="h-full rounded-bento-sm flex items-center justify-end px-2" style="width:${ancho}%;background:${e.color}">` +
          `<span class="text-xs font-black text-white tabular-nums">${e.valor}</span>` +
          `</div></div>` +
          `<span class="text-xs text-neutral-500 w-10 text-right tabular-nums">${pct}%</span>` +
          `</div>`
        );
      })
      .join('') +
    `</div>`
  );
}

export interface SerieLinea {
  nombre: string;
  color: string;
  valores: number[];
}

/** Serie temporal en SVG (1+ series, eje X compartido). La 1ª lleva área. */
export function lineChartSVG(
  etiquetas: string[],
  series: SerieLinea[],
  alto = 220
): string {
  const W = 720;
  const H = alto;
  const padL = 32;
  const padR = 12;
  const padT = 12;
  const padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const n = etiquetas.length;
  const maxVal = Math.max(1, ...series.flatMap((s) => s.valores));
  const x = (i: number) => padL + (n <= 1 ? innerW / 2 : (i / (n - 1)) * innerW);
  const y = (v: number) => padT + innerH - (v / maxVal) * innerH;

  const line = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = (vals: number[]) => {
    if (!vals.length) return '';
    return (
      line(vals) +
      ` L ${x(vals.length - 1).toFixed(1)} ${(padT + innerH).toFixed(1)}` +
      ` L ${x(0).toFixed(1)} ${(padT + innerH).toFixed(1)} Z`
    );
  };

  const refs = [0, 0.5, 1].map((f) => ({ v: Math.round(maxVal * f), yy: y(maxVal * f) }));
  const stepX = Math.max(1, Math.ceil(n / 6));

  const refsSvg = refs
    .map(
      (r) =>
        `<line x1="${padL}" y1="${r.yy.toFixed(1)}" x2="${W - padR}" y2="${r.yy.toFixed(1)}" stroke="currentColor" stroke-width="1" class="text-neutral-200 dark:text-neutral-700"/>` +
        `<text x="${padL - 6}" y="${(r.yy + 3).toFixed(1)}" text-anchor="end" class="fill-neutral-400" style="font-size:10px">${r.v}</text>`
    )
    .join('');

  const areaSvg = series[0]
    ? `<path d="${area(series[0].valores)}" fill="${series[0].color}" opacity="0.12"/>`
    : '';

  const seriesSvg = series
    .map(
      (s) =>
        `<path d="${line(s.valores)}" fill="none" stroke="${s.color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>` +
        s.valores.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="2.5" fill="${s.color}"/>`).join('')
    )
    .join('');

  const labelsSvg = etiquetas
    .map((et, i) =>
      i % stepX === 0
        ? `<text x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" class="fill-neutral-400" style="font-size:10px">${escapeHtml(et)}</text>`
        : ''
    )
    .join('');

  const leyenda = series
    .map(
      (s) =>
        `<span class="inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">` +
        `<span class="inline-block w-3 h-1.5 rounded-full" style="background:${s.color}"></span>${escapeHtml(s.nombre)}</span>`
    )
    .join('');

  return (
    `<figure class="w-full">` +
    `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img" preserveAspectRatio="xMidYMid meet" aria-label="Serie temporal de actividad">` +
    refsSvg + areaSvg + seriesSvg + labelsSvg +
    `</svg>` +
    `<figcaption class="flex flex-wrap gap-x-4 gap-y-1 justify-center mt-2">${leyenda}</figcaption>` +
    `</figure>`
  );
}
