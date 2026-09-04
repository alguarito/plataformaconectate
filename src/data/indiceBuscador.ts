/**
 * Índice del buscador global de ConectaTE (MILC v3).
 *
 * Se construye al BUILD a partir de las fuentes editoriales del corpus:
 *   - Guías MILC v3 (título + saber ancestral + conceptos clave + triángulo)
 *   - Proyectos integradores entregable-céntricos (reto + anclaje + entregables)
 *   - Exámenes finales (título + período + DBA del periodo)
 *   - Anclajes ancestrales del plan de área (atajo a la guía S1 que los contiene)
 *
 * Cada concepto clave de las guías también se indexa como item independiente,
 * de modo que buscar "identidad digital" lleva directo a la guía donde se
 * desarrolla, no solo a las que lo mencionan en el título.
 *
 * El índice NO se inyecta en el HTML de cada página: se sirve como JSON
 * estático en `${base}/data/buscador.json` (ver src/pages/data/buscador.json.ts)
 * y el overlay lo descarga una sola vez al abrirse.
 */
import { grados } from './grados';
import { getAllContenidoGuia } from './guiasContenido/_index';
import { getAllContenidoProyecto } from './proyectosContenido/_index';
import { examenes } from './examenes';
import { anclajesAncestrales } from './planArea';

export type TipoResultado = 'guia' | 'proyecto' | 'examen' | 'concepto' | 'anclaje';

export interface ItemIndice {
  tipo: TipoResultado;
  grado: number;
  periodo: number;
  sesion: number;          // 0 para proyectos/exámenes/anclajes
  titulo: string;
  contexto: string;        // ej. "G6 · P1 · S2"
  subtitulo?: string;      // texto descriptivo opcional
  href: string;
  k: string;               // texto normalizado para match
  bgClass: string;         // color del período (badge)
}

/** Totales por tipo (solo números; seguros para inyectar en el HTML). */
export interface TotalesIndice {
  total: number;
  guias: number;
  proyectos: number;
  examenes: number;
  conceptos: number;
  anclajes: number;
}

/** Misma normalización que usa el cliente: minúsculas, sin tildes, sin espacios extremos. */
export function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

/**
 * Construye el índice completo. `base` es el prefijo de rutas del sitio
 * (import.meta.env.BASE_URL), usado para los `href` absolutos.
 */
export function construirIndice(base: string): ItemIndice[] {
  // Mapa rápido grado → periodo → bgClass para los badges
  const colorPorPeriodo: Record<string, string> = {};
  const periodoTitulo: Record<string, string> = {};
  for (const g of grados) {
    for (const p of g.periodos) {
      colorPorPeriodo[`${g.numero}-${p.numero}`] = p.bgClass;
      periodoTitulo[`${g.numero}-${p.numero}`] = p.titulo;
    }
  }

  // Grados en construcción no entran al índice
  const gradosEnConstruccion = new Set(
    grados.filter((g) => g.enConstruccion).map((g) => g.numero),
  );

  const indice: ItemIndice[] = [];

  // ─── 1. Guías MILC v3 ─────────────────────────────────────────────────────
  for (const guia of getAllContenidoGuia()) {
    if (gradosEnConstruccion.has(guia.grado)) continue;
    const claveColor = `${guia.grado}-${guia.periodo}`;
    const bgClass = colorPorPeriodo[claveColor] ?? 'bg-bento-blue';

    const titulo = guia.titulo ?? guia.resumen;
    const saber = guia.saberAncestral
      ? `${guia.saberAncestral.saber ?? ''} ${guia.saberAncestral.fuente ?? ''} ${guia.saberAncestral.preguntaPuente ?? ''}`
      : '';
    const conceptos = guia.conceptosClave
      .map((c) => `${c.termino} ${c.definicion}`)
      .join(' ');
    const triangulo = guia.triangulo
      ? `${guia.triangulo.dussel.cita} ${guia.triangulo.estoico.cita} ${guia.triangulo.floridi.cita} ${guia.triangulo.dussel.lente} ${guia.triangulo.estoico.lente} ${guia.triangulo.floridi.lente}`
      : '';
    const preLectura = `${guia.preLectura.porQueImporta} ${guia.preLectura.preguntaDetonante}`;
    const subtema = guia.subtema ?? '';

    indice.push({
      tipo: 'guia',
      grado: guia.grado,
      periodo: guia.periodo,
      sesion: guia.sesion,
      titulo,
      subtitulo: guia.resumen,
      contexto: `G${guia.grado} · P${guia.periodo} · S${guia.sesion}`,
      href: `${base}/grado-${guia.grado}/periodo-${guia.periodo}/guia-${guia.sesion}`,
      k: normalizar(`${titulo} ${subtema} ${preLectura} ${saber} ${conceptos} ${triangulo}`),
      bgClass,
    });

    // ─── Cada concepto clave como item independiente ──────────────────────
    for (const c of guia.conceptosClave) {
      indice.push({
        tipo: 'concepto',
        grado: guia.grado,
        periodo: guia.periodo,
        sesion: guia.sesion,
        titulo: c.termino,
        subtitulo: c.definicion,
        contexto: `G${guia.grado} · P${guia.periodo} · S${guia.sesion}`,
        href: `${base}/grado-${guia.grado}/periodo-${guia.periodo}/guia-${guia.sesion}#concepto-${normalizar(c.termino).replace(/\s+/g, '-')}`,
        k: normalizar(`${c.termino} ${c.definicion} ${c.ejemplo ?? ''}`),
        bgClass,
      });
    }
  }

  // ─── 2. Proyectos integradores MILC v3 ────────────────────────────────────
  for (const proy of getAllContenidoProyecto()) {
    if (gradosEnConstruccion.has(proy.grado)) continue;
    const claveColor = `${proy.grado}-${proy.periodo}`;
    const bgClass = colorPorPeriodo[claveColor] ?? 'bg-bento-blue';

    const entregables = proy.entregables
      .map((e) => `${e.titulo} ${e.queEntregas} ${e.criterios.join(' ')}`)
      .join(' ');
    const aprendizajes = proy.aprendizajes.map((a) => a.titulo).join(' ');

    indice.push({
      tipo: 'proyecto',
      grado: proy.grado,
      periodo: proy.periodo,
      sesion: 0,
      titulo: proy.titulo || `Proyecto integrador · ${proy.reto}`,
      subtitulo: proy.reto,
      contexto: `G${proy.grado} · P${proy.periodo} · Proyecto`,
      href: `${base}/grado-${proy.grado}/periodo-${proy.periodo}/proyecto`,
      k: normalizar(
        `proyecto integrador ${proy.titulo} ${proy.reto} ${proy.anclaje} ${proy.estrategia} ${proy.dba} ${entregables} ${aprendizajes}`,
      ),
      bgClass,
    });
  }

  // ─── 3. Exámenes finales ──────────────────────────────────────────────────
  for (const ex of examenes) {
    if (gradosEnConstruccion.has(ex.grado)) continue;
    const claveColor = `${ex.grado}-${ex.periodo}`;
    const bgClass = colorPorPeriodo[claveColor] ?? 'bg-bento-blue';
    const tituloPer = periodoTitulo[claveColor] ?? '';

    indice.push({
      tipo: 'examen',
      grado: ex.grado,
      periodo: ex.periodo,
      sesion: 0,
      titulo: `Examen final · ${tituloPer || `P${ex.periodo}`}`,
      subtitulo: 'Banco de práctica y examen formal del período',
      contexto: `G${ex.grado} · P${ex.periodo} · Examen`,
      href: `${base}/grado-${ex.grado}/periodo-${ex.periodo}/examen`,
      k: normalizar(
        `examen final ${tituloPer} banco de practica sintesis aplicacion argumentacion ${ex.archivo}`,
      ),
      bgClass,
    });
  }

  // ─── 4. Anclajes ancestrales del plan de área ─────────────────────────────
  // Cada anclaje enlaza al período correspondiente; el saber se desarrolla en S1.
  for (const a of anclajesAncestrales) {
    if (gradosEnConstruccion.has(a.grado)) continue;
    const claveColor = `${a.grado}-${a.periodo}`;
    const bgClass = colorPorPeriodo[claveColor] ?? 'bg-bento-blue';

    indice.push({
      tipo: 'anclaje',
      grado: a.grado,
      periodo: a.periodo,
      sesion: 1,
      titulo: a.oficio,
      subtitulo: a.resumen,
      contexto: `G${a.grado} · P${a.periodo} · Saber ancestral`,
      href: `${base}/grado-${a.grado}/periodo-${a.periodo}/guia-1`,
      k: normalizar(`${a.oficio} ${a.resumen} saber ancestral anclaje`),
      bgClass,
    });
  }

  return indice;
}

/** Cuenta ítems por tipo; útil para los chips de filtro sin embeber el índice. */
export function contarIndice(indice: ItemIndice[]): TotalesIndice {
  const t: TotalesIndice = {
    total: indice.length,
    guias: 0,
    proyectos: 0,
    examenes: 0,
    conceptos: 0,
    anclajes: 0,
  };
  for (const i of indice) {
    if (i.tipo === 'guia') t.guias++;
    else if (i.tipo === 'proyecto') t.proyectos++;
    else if (i.tipo === 'examen') t.examenes++;
    else if (i.tipo === 'concepto') t.conceptos++;
    else if (i.tipo === 'anclaje') t.anclajes++;
  }
  return t;
}
