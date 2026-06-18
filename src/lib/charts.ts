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

// ─── PR-2: Heatmap de cobertura + Barras comparativas ────────────────────────

export interface CeldaHeatmap {
  periodo: number;
  sesion: number;
  valor: number;
}

/**
 * Heatmap de cobertura de guías en SVG (filas = periodos, cols = sesiones).
 * Cada celda se colorea con opacidad según valor/refMax.
 */
export function heatmapSVG(
  celdas: CeldaHeatmap[],
  opciones?: { color?: string; refMax?: number; titulo?: string }
): string {
  const color = opciones?.color ?? BENTO.blue;
  const maxP = Math.max(1, ...celdas.map((c) => c.periodo));
  const maxS = Math.max(1, ...celdas.map((c) => c.sesion));
  const refMax = opciones?.refMax ?? Math.max(1, ...celdas.map((c) => c.valor));

  const CELL_W = 32;
  const CELL_H = 28;
  const PAD_L = 28;
  const PAD_T = 20;
  const GAP = 3;
  const W = PAD_L + maxS * (CELL_W + GAP);
  const H = PAD_T + maxP * (CELL_H + GAP) + 4;

  const lookup = new Map(celdas.map((c) => [`${c.periodo}-${c.sesion}`, c]));

  let cells = '';
  for (let p = 1; p <= maxP; p++) {
    const yy = PAD_T + (p - 1) * (CELL_H + GAP);
    cells +=
      `<text x="${PAD_L - 6}" y="${(yy + CELL_H / 2 + 4).toFixed(1)}" ` +
      `text-anchor="end" class="fill-neutral-400" style="font-size:10px">P${p}</text>`;
    for (let s = 1; s <= maxS; s++) {
      const xx = PAD_L + (s - 1) * (CELL_W + GAP);
      const c = lookup.get(`${p}-${s}`);
      const v = c?.valor ?? 0;
      const opacity = v === 0 ? 0.06 : 0.15 + 0.85 * (v / refMax);
      const textCol = opacity > 0.55 ? '#fff' : '#374151';
      cells +=
        `<rect x="${xx}" y="${yy}" width="${CELL_W}" height="${CELL_H}" rx="4" fill="${color}" opacity="${opacity.toFixed(2)}"/>` +
        (v > 0
          ? `<text x="${(xx + CELL_W / 2).toFixed(1)}" y="${(yy + CELL_H / 2 + 4).toFixed(1)}" ` +
            `text-anchor="middle" fill="${textCol}" style="font-size:9px;font-weight:700">${v}</text>`
          : '');
    }
  }

  const colHeaders = Array.from({ length: maxS }, (_, i) => {
    const xx = PAD_L + i * (CELL_W + GAP) + CELL_W / 2;
    return `<text x="${xx.toFixed(1)}" y="13" text-anchor="middle" class="fill-neutral-400" style="font-size:9px">${i + 1}</text>`;
  }).join('');

  return (
    `<figure class="w-full overflow-x-auto">` +
    `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img" ` +
    `aria-label="${escapeHtml(opciones?.titulo ?? 'Heatmap de cobertura')}">` +
    colHeaders + cells +
    `</svg>` +
    `<figcaption class="text-xs text-neutral-400 mt-1 text-center">` +
    `Número dentro de la celda = estudiantes con actividad en esa guía` +
    `</figcaption>` +
    `</figure>`
  );
}

export interface BaraComparativa {
  label: string;
  valor: number;
  color: string;
  sub?: string;
}

/**
 * Barras verticales comparativas (grados vs grados, o periodos vs periodos).
 * `max` fija el tope del eje Y (default = mayor valor de la serie).
 */
export function barComparativoSVG(
  barras: BaraComparativa[],
  opciones?: { max?: number; unidad?: string; alto?: number }
): string {
  const maxVal = opciones?.max ?? Math.max(1, ...barras.map((b) => b.valor));
  const unidad = opciones?.unidad ?? '';
  const H = opciones?.alto ?? 180;
  const W = 640;
  const PAD_L = 28;
  const PAD_B = 36;
  const PAD_T = 10;
  const innerH = H - PAD_T - PAD_B;
  const n = barras.length;
  const barW = Math.min(48, Math.floor((W - PAD_L - 12) / Math.max(n, 1)) - 6);
  const totalW = n * (barW + 6) - 6;
  const startX = PAD_L + (W - PAD_L - 12 - totalW) / 2;
  const y0 = PAD_T + innerH;

  const refs = [0, 0.5, 1].map((f) => {
    const v = Math.round(maxVal * f);
    const yy = PAD_T + innerH - (v / maxVal) * innerH;
    return { v, yy };
  });

  const refsSvg = refs
    .map(
      (r) =>
        `<line x1="${PAD_L}" y1="${r.yy.toFixed(1)}" x2="${W - 8}" y2="${r.yy.toFixed(1)}" ` +
        `stroke="currentColor" stroke-width="1" class="text-neutral-200 dark:text-neutral-700"/>` +
        `<text x="${PAD_L - 4}" y="${(r.yy + 3).toFixed(1)}" text-anchor="end" ` +
        `class="fill-neutral-400" style="font-size:9px">${r.v}${unidad}</text>`
    )
    .join('');

  const barsSvg = barras
    .map((b, i) => {
      const xx = startX + i * (barW + 6);
      const h = Math.max(2, (b.valor / maxVal) * innerH);
      const yy = y0 - h;
      return (
        `<rect x="${xx.toFixed(1)}" y="${yy.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="4" fill="${b.color}"/>` +
        `<text x="${(xx + barW / 2).toFixed(1)}" y="${(yy - 4).toFixed(1)}" text-anchor="middle" ` +
        `fill="${b.color}" style="font-size:10px;font-weight:800">${b.valor}${unidad}</text>` +
        `<text x="${(xx + barW / 2).toFixed(1)}" y="${(y0 + 14).toFixed(1)}" text-anchor="middle" ` +
        `class="fill-neutral-600 dark:fill-neutral-400" style="font-size:10px;font-weight:700">${escapeHtml(b.label)}</text>` +
        (b.sub
          ? `<text x="${(xx + barW / 2).toFixed(1)}" y="${(y0 + 26).toFixed(1)}" text-anchor="middle" ` +
            `class="fill-neutral-400" style="font-size:9px">${escapeHtml(b.sub)}</text>`
          : '')
      );
    })
    .join('');

  return (
    `<figure class="w-full">` +
    `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img" aria-label="Gráfico comparativo">` +
    refsSvg + barsSvg +
    `</svg>` +
    `</figure>`
  );
}

// ─── PR-3: Donut + BadgeDelta ─────────────────────────────────────────────────

export interface SegmentoDonut {
  label: string;
  valor: number;
  color: string;
}

/**
 * Dona SVG para distribución de consentimientos o eventos ARCO.
 * Usa stroke-dasharray en un <circle> rotado -90° para cada segmento.
 */
export function donutSVG(
  segmentos: SegmentoDonut[],
  opciones?: { titulo?: string }
): string {
  const CX = 72;
  const CY = 72;
  const R = 52;
  const SW = 22;
  const W = 280;
  const H = 158;
  const circ = 2 * Math.PI * R;
  const total = Math.max(1, segmentos.reduce((s, c) => s + c.valor, 0));

  let offset = 0;
  const arcos = segmentos.map((seg) => {
    const arc = (seg.valor / total) * circ;
    const dashOffset = circ - offset;
    offset += seg.valor / total;
    return { seg, arc, dashOffset: circ - (offset - seg.valor / total) * circ };
  });

  let prevOffset = 0;
  const arcsSvg = segmentos
    .map((seg, i) => {
      const arc = (seg.valor / total) * circ;
      const dashOffset = circ * (1 - prevOffset);
      prevOffset += seg.valor / total;
      return (
        `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${seg.color}" ` +
        `stroke-width="${SW}" stroke-dasharray="${arc.toFixed(2)} ${(circ - arc).toFixed(2)}" ` +
        `stroke-dashoffset="${dashOffset.toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"/>`
      );
    })
    .join('');

  const centerSvg =
    `<text x="${CX}" y="${CY + 5}" text-anchor="middle" class="fill-neutral-800 dark:fill-neutral-200" style="font-size:18px;font-weight:800">${total}</text>` +
    `<text x="${CX}" y="${CY + 18}" text-anchor="middle" class="fill-neutral-400" style="font-size:8px;font-weight:600">TOTAL</text>`;

  const LX = CX * 2 + 14;
  const legendSvg = segmentos
    .map((seg, i) => {
      const y = 28 + i * 22;
      const pct = total > 0 ? Math.round((seg.valor / total) * 100) : 0;
      return (
        `<rect x="${LX}" y="${y - 8}" width="10" height="10" rx="2" fill="${seg.color}"/>` +
        `<text x="${LX + 14}" y="${y}" class="fill-neutral-700 dark:fill-neutral-300" style="font-size:11px">${escapeHtml(seg.label)} ` +
        `<tspan font-weight="700">${seg.valor}</tspan></text>` +
        `<text x="${W - 8}" y="${y}" text-anchor="end" class="fill-neutral-400" style="font-size:10px">${pct}%</text>`
      );
    })
    .join('');

  return (
    `<figure class="w-full">` +
    `<svg viewBox="0 0 ${W} ${H}" class="w-full h-auto" role="img" ` +
    `aria-label="${escapeHtml(opciones?.titulo ?? 'Distribución')}">` +
    arcsSvg + centerSvg + legendSvg +
    `</svg></figure>`
  );
}

export interface ItemDelta {
  etiqueta: string;
  valorActual: number;
  valorAnterior: number;
  unidad?: string;
}

/**
 * Tarjetas de variación interanual (▲ verde / ▼ rosa).
 * Devuelve HTML con flex-wrap de badges para insertar via innerHTML.
 */
export function badgeDeltaHTML(items: ItemDelta[]): string {
  return (
    `<div class="flex flex-wrap gap-3">` +
    items
      .map((item) => {
        const delta = item.valorActual - item.valorAnterior;
        const pct = item.valorAnterior !== 0 ? (delta / item.valorAnterior) * 100 : 0;
        const isUp = delta >= 0;
        const col = isUp ? BENTO.lime : BENTO.pink;
        const bg = isUp ? '#A3FF1218' : '#FF2D8718';
        const arrow = isUp ? '▲' : '▼';
        return (
          `<div class="rounded-bento-sm p-3 border border-neutral-200 dark:border-neutral-700 min-w-[130px] flex-1">` +
          `<p class="text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">${escapeHtml(item.etiqueta)}</p>` +
          `<p class="text-2xl font-black tabular-nums">${item.valorActual}${escapeHtml(item.unidad ?? '')}</p>` +
          `<span class="inline-flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-full mt-1.5" ` +
          `style="color:${col};background:${bg}">${arrow} ${Math.abs(pct).toFixed(1)}%</span>` +
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
