#!/usr/bin/env node
/*
 * Generador reproducible de bloques MakeCode (micro:bit) → SVG.
 * Semillero de Investigación ConectaTE.
 *
 * Dibuja un programa de MakeCode como bloques FIELES: colores y etiquetas
 * exactos del entorno micro:bit en español, extraídos del editor en vivo
 * (paleta: Básico #1E90FF, Entrada #D400D4, Lógica #00A4A6,
 *  Variables #DC143C, Matemática #9400D3).
 *
 * Uso:  node makecode-blocks-gen.js > bloques-makecode.svg
 * Luego rasterizar (macOS):  qlmanage -t -s 2000 -o . bloques-makecode.svg
 *
 * Sin dependencias externas. El ancho de texto se estima con una tabla de
 * anchos por carácter calibrada para el peso semibold ~15px (suficiente para
 * el auto-tamaño flexible de los bloques).
 */

// ── Paleta exacta MakeCode micro:bit ──────────────────────────────────────
const CAT = {
  basico:    { fill: '#1E90FF', edge: '#1462b3' },
  entrada:   { fill: '#D400D4', edge: '#960096' },
  logica:    { fill: '#00A4A6', edge: '#00777a' },
  variables: { fill: '#DC143C', edge: '#a10e2b' },
  mate:      { fill: '#9400D3', edge: '#690099' },
};
const TXT = '#ffffff';
const FS = 15;                 // tamaño de fuente etiquetas
const FS_FIELD = 14;           // tamaño en campos blancos
const ROWH = 32;               // alto de fila de bloque
const FH = 22;                 // alto de campos/pills interiores
const PADX = 12;               // padding horizontal interno
const GAP = 8;                 // separación entre elementos
const RADIUS = 5;
const ARM = 14;                // grosor del brazo de un bloque C
const NX = 12, NW = 16, NH = 4; // muesca: offset, ancho, alto

// Estimación de ancho de texto (px) — heurística por carácter a FS px semibold.
function charW(ch) {
  if ('iíl.,:;\'|!'.includes(ch)) return 0.30;
  if ('fjtr ()[]'.includes(ch)) return 0.42;
  if ('abcdeghknopqsuvxyzáéóú'.includes(ch)) return 0.56;
  if ('mwABCDEFGHKNOPQRSUVXYZ0123456789'.includes(ch)) return 0.70;
  if ('MW'.includes(ch)) return 0.90;
  return 0.60;
}
function textW(t, fs) {
  fs = fs || FS;
  let w = 0;
  for (const ch of String(t)) w += charW(ch) * fs;
  return w;
}

let parts = [];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const P = (s) => parts.push(s);

function label(x, y, t, color, fs) {
  fs = fs || FS;
  P(`<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="${fs}" font-weight="600" fill="${color || TXT}" dominant-baseline="middle">${esc(t)}</text>`);
}

// Contorno de bloque de sentencia con muesca arriba y abajo.
function statementPath(x, y, w, h) {
  const r = RADIUS;
  return `M ${x} ${y + r}`
    + ` q 0 ${-r} ${r} ${-r}`
    + ` l ${NX - r} 0 l 3 ${NH} l ${NW - 6} 0 l 3 ${-NH}`
    + ` l ${w - NX - NW - r} 0 q ${r} 0 ${r} ${r}`
    + ` l 0 ${h - 2 * r} q 0 ${r} ${-r} ${r}`
    + ` l ${-(w - NX - NW - r)} 0 l -3 ${NH} l ${-(NW - 6)} 0 l -3 ${-NH}`
    + ` l ${-(NX - r)} 0 q ${-r} 0 ${-r} ${-r} z`;
}
function blockRect(x, y, w, h, cat) {
  const c = CAT[cat];
  P(`<path d="${statementPath(x, y, w, h)}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
}
function pill(x, y, w, h, cat) {
  const c = CAT[cat];
  P(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${(h / 2).toFixed(1)}" ry="${(h / 2).toFixed(1)}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
}
function hexo(x, y, w, h, cat) {
  const c = CAT[cat], k = h / 2;
  P(`<path d="M ${x + k} ${y} l ${w - 2 * k} 0 l ${k} ${k} l ${-k} ${k} l ${-(w - 2 * k)} 0 l ${-k} ${-k} z" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
}
function field(x, y, w, h, text) {
  P(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" ry="4" fill="#ffffff" stroke="#c8c8c8" stroke-width="1"/>`);
  label(x + w / 2 - textW(text, FS_FIELD) / 2, y + h / 2 + 1, text, '#2b2b2b', FS_FIELD);
}

// mostrar cadena "…"  [Básico]
function showString(x, y, w, val) {
  blockRect(x, y, w, ROWH, 'basico');
  let tx = x + PADX; const cy = y + ROWH / 2 + 1;
  label(tx, cy, 'mostrar cadena', TXT); tx += textW('mostrar cadena') + GAP;
  const fw = textW('"' + val + '"', FS_FIELD) + 16;
  field(tx, y + (ROWH - FH) / 2, fw, FH, '"' + val + '"');
}

// ── Programa: fotómetro ───────────────────────────────────────────────────
function build() {
  parts = [];
  const X0 = 8, Y0 = 8;
  const W = 466;
  const bodyX = X0 + ARM;
  const thenX = bodyX + ARM;

  let y = Y0;
  const foreverTop = y;
  const headH = ROWH;
  y += headH;

  const setY = y;                 // establecer luz a nivel de luz
  const ifTop = setY + ROWH;      // si <...> entonces
  const showNocheY = ifTop + ROWH;
  const elseDivY = showNocheY + ROWH;
  const showDiaY = elseDivY + ROWH;
  const ifBottomY = showDiaY + ROWH;
  const ifH = ifBottomY - ifTop + 8;        // + cierre inferior del if
  const foreverH = ifBottomY + 8 - foreverTop + 8;

  // "para siempre" (bloque C, Básico)
  drawC(X0, foreverTop, W, foreverH, headH, 'basico', 'para siempre');

  // establecer luz a (nivel de luz)  [Variables]
  {
    const bw = W - ARM - 12;
    blockRect(bodyX, setY, bw, ROWH, 'variables');
    let tx = bodyX + PADX; const cy = setY + ROWH / 2 + 1;
    label(tx, cy, 'establecer', TXT); tx += textW('establecer') + GAP;
    const dw = textW('luz ▾', FS_FIELD) + 14;
    field(tx, setY + (ROWH - FH) / 2, dw, FH, 'luz ▾'); tx += dw + GAP;
    label(tx, cy, 'a', TXT); tx += textW('a') + GAP;
    const rw = textW('nivel de luz') + 20;
    pill(tx, setY + (ROWH - FH) / 2, rw, FH, 'entrada');
    label(tx + 10, cy, 'nivel de luz', TXT);
  }

  // si <luz < 50> entonces  [Lógica, header del bloque C-if]
  {
    const bw = W - ARM - 12;
    drawIf(bodyX, ifTop, bw, ifH, headH);
    let tx = bodyX + PADX; const cy = ifTop + ROWH / 2 + 1;
    label(tx, cy, 'si', TXT); tx += textW('si') + GAP;
    const vGetW = textW('luz') + 18;
    const opW = 22, numW = 30;
    const condW = 12 + vGetW + GAP + opW + GAP + numW + 12;
    hexo(tx, ifTop + (ROWH - FH) / 2, condW, FH, 'logica');
    let hx = tx + 12;
    pill(hx, ifTop + (ROWH - FH) / 2 + 1, vGetW, FH - 2, 'variables');
    label(hx + 9, cy, 'luz', TXT); hx += vGetW + GAP;
    field(hx, ifTop + (ROWH - FH) / 2 + 1, opW, FH - 2, '<'); hx += opW + GAP;
    field(hx, ifTop + (ROWH - FH) / 2 + 1, numW, FH - 2, '50');
    tx += condW + GAP;
    label(tx, cy, 'entonces', TXT);
  }

  // then: mostrar cadena "noche"
  showString(thenX, showNocheY, W - 2 * ARM - 12, 'noche');
  // si no
  {
    const bw = W - ARM - 12;
    blockRect(bodyX, elseDivY, bw, ROWH, 'logica');
    label(bodyX + PADX, elseDivY + ROWH / 2 + 1, 'si no', TXT);
  }
  // else: mostrar cadena "día"
  showString(thenX, showDiaY, W - 2 * ARM - 12, 'día');

  const H = foreverTop + foreverH + 8;
  const totW = W + 16, totH = H + 8;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totW}" height="${totH}" viewBox="0 0 ${totW} ${totH}">`
    + `<rect width="100%" height="100%" fill="#ffffff"/>`
    + parts.join('\n') + `</svg>`;
}

// bloque C (para siempre): header + brazo izquierdo + cierre inferior
function drawC(x, y, w, h, headH, cat, title) {
  const c = CAT[cat];
  blockRect(x, y, w, headH, cat);
  label(x + PADX, y + headH / 2 + 1, title, TXT);
  P(`<rect x="${x}" y="${y + headH}" width="${ARM}" height="${h - headH - 8}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
  P(`<path d="${statementPath(x, y + h - 8, w, 8 + RADIUS)}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
}
// bloque if/else (Lógica): header + brazo + cierre inferior (el "si no" se dibuja aparte)
function drawIf(x, y, w, h, headH) {
  const c = CAT['logica'];
  blockRect(x, y, w, headH, 'logica');
  P(`<rect x="${x}" y="${y + headH}" width="${ARM}" height="${h - headH - 8}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
  P(`<path d="${statementPath(x, y + h - 8, w, 8 + RADIUS)}" fill="${c.fill}" stroke="${c.edge}" stroke-width="1"/>`);
}

process.stdout.write(build());
