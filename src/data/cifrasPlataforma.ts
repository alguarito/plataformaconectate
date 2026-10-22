/**
 * Cifras de la plataforma, contadas en el build a partir del contenido.
 *
 * Ningún número de este archivo se escribe a mano: cada uno sale de contar
 * archivos del repositorio cuando Astro compila (process.cwd() es la raíz del
 * proyecto, como en la página de cada guía). Si se publica o se retira una
 * pieza, la cifra cambia sola en el siguiente despliegue.
 *
 * - Guías de grado: content/guias/<grado>/*.yaml (carpetas numéricas, 6 a 11).
 * - Proyectos y exámenes: content/proyectos/*.yaml y content/examenes/*.yaml.
 * - Territorio Interior, Semillero y Bebras: content/guias/<apartado>/*.yaml.
 * - Anclas: las entradas de la lista `anclas:` de content/anclas/banco-anclas.yaml.
 *   No cuentan `por_verificar` ni `descartadas`, que el banco deja fuera a propósito.
 * - PDF: todos los .pdf que se sirven desde public/.
 *
 * Los archivos que empiezan por «_» (_SCHEMA.md, _banco-citas.yaml) no son piezas.
 * Si una cifra da 0, el build se detiene: es señal de una ruta equivocada, no
 * de una plataforma vacía.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const raiz = process.cwd();

function comprobar(nombre: string, n: number): number {
  if (n === 0) throw new Error(`cifrasPlataforma: «${nombre}» dio 0; revisa la ruta del contenido.`);
  return n;
}

/** Piezas YAML de una carpeta de content/ (sin los archivos que empiezan por «_»). */
function piezasEn(carpeta: string): number {
  return readdirSync(path.join(raiz, carpeta)).filter((f) => f.endsWith('.yaml') && !f.startsWith('_')).length;
}

/** Guías de grado: suma de las carpetas numéricas de content/guias/. */
function guiasDeGrado(): number {
  return readdirSync(path.join(raiz, 'content/guias'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+$/.test(d.name))
    .reduce((total, d) => total + piezasEn(`content/guias/${d.name}`), 0);
}

/** PDF servidos: recorre public/ completo. */
function pdfEn(carpeta: string): number {
  let n = 0;
  for (const e of readdirSync(path.join(raiz, carpeta), { withFileTypes: true })) {
    const rel = path.join(carpeta, e.name);
    if (e.isDirectory()) n += pdfEn(rel);
    else if (e.name.toLowerCase().endsWith('.pdf')) n += 1;
  }
  return n;
}

/**
 * Anclas del banco: entradas `  - id:` dentro de la clave de primer nivel
 * `anclas:`, hasta la siguiente clave de primer nivel (`por_verificar:`).
 */
function anclasDelBanco(): number {
  const lineas = readFileSync(path.join(raiz, 'content/anclas/banco-anclas.yaml'), 'utf8').split(/\r?\n/);
  const inicio = lineas.indexOf('anclas:');
  if (inicio < 0) return 0;
  let n = 0;
  for (const linea of lineas.slice(inicio + 1)) {
    if (/^[A-Za-z_][\w-]*:/.test(linea)) break;
    if (/^ {2}- id:/.test(linea)) n += 1;
  }
  return n;
}

const guias = comprobar('guías', guiasDeGrado());
const proyectos = comprobar('proyectos', piezasEn('content/proyectos'));
const examenes = comprobar('exámenes', piezasEn('content/examenes'));
const territorioInterior = comprobar('Territorio Interior', piezasEn('content/guias/territorio-interior'));
const semillero = comprobar('Semillero', piezasEn('content/guias/semillero'));
const bebras = comprobar('Bebras', piezasEn('content/guias/bebras'));

export const cifrasPlataforma = {
  guias,
  proyectos,
  examenes,
  territorioInterior,
  semillero,
  bebras,
  /** Piezas publicadas: guías, proyectos, exámenes, Territorio Interior, Semillero y Bebras. */
  totalPiezas: guias + proyectos + examenes + territorioInterior + semillero + bebras,
  /** Anclas documentadas con fuente APA en el banco. */
  anclas: comprobar('anclas', anclasDelBanco()),
  /** PDF servidos desde public/. */
  pdf: comprobar('PDF', pdfEn('public')),
};
