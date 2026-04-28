/**
 * Generador de borrador de contenido enriquecido para una guía.
 *
 * Uso:
 *   npm run enrich -- 8 2 1
 *
 *   donde G P S = grado, periodo, sesion (en este caso: guía 11 = 8 P2 S1)
 *
 * Qué hace:
 *  1. Verifica que NO exista ya `src/data/guiasContenido/{G}-{P}-{S}.ts`
 *  2. Lee el título real de la guía desde src/data/recursos.ts
 *  3. Si existe `scripts/guias_drive/{G-P-S}-{grado}-TIC.tex`, intenta extraer
 *     conceptos clave y pregunta guía del documento original
 *  4. Genera un borrador con secciones rellenas/placeholder y lo escribe
 *  5. Recuerda al docente actualizar `src/data/guiasContenido/_index.ts`
 *
 * El docente luego edita el archivo, ajusta la voz, completa los labs y
 * commitea. La guía queda enriquecida automáticamente al hacer build.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { recursos } from '../src/data/recursos';

function abort(msg: string): never {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
}

function paso(msg: string): void {
  console.log(`  • ${msg}`);
}

/* ─── Args ─── */
const [, , gArg, pArg, sArg] = process.argv;
if (!gArg || !pArg || !sArg) {
  abort(
    'Uso: npm run enrich -- <grado> <periodo> <sesion>\n  ej: npm run enrich -- 8 2 1   (guía 11 de octavo)',
  );
}
const grado = parseInt(gArg, 10);
const periodo = parseInt(pArg, 10);
const sesion = parseInt(sArg, 10);

if (
  ![6, 7, 8, 9, 10, 11].includes(grado) ||
  ![1, 2, 3].includes(periodo) ||
  sesion < 1 ||
  sesion > 10
) {
  abort('Rango inválido. grado ∈ [6,11], periodo ∈ [1,3], sesion ∈ [1,10]');
}

/* ─── Verifica recurso existente ─── */
const recurso = recursos.find(
  (r) => r.grado === grado && r.periodo === periodo && r.sesion === sesion,
);
if (!recurso) abort(`No existe la guía ${grado}-${periodo}-${sesion} en recursos.ts`);

const sesionGlobal = recurso.sesionGlobal;
console.log(`\n🪄 Enriqueciendo guía ${sesionGlobal} (grado ${grado}, P${periodo}, S${sesion})`);
console.log(`   Título: ${recurso.titulo}\n`);

/* ─── Output path ─── */
const outPath = resolve(`src/data/guiasContenido/${grado}-${periodo}-${sesion}.ts`);
if (existsSync(outPath)) {
  abort(`Ya existe ${outPath}. Edítalo manualmente o bórralo primero.`);
}

/* ─── Intentar leer .tex original (opcional) ─── */
const texPath = resolve(`scripts/guias_drive/${sesionGlobal}-${grado}-TIC.tex`);
let conceptosTex: { termino: string; def: string; ej: string }[] = [];
let preguntaGuiaTex = '';

if (existsSync(texPath)) {
  paso(`Leyendo .tex original: ${texPath}`);
  const texto = readFileSync(texPath, 'utf-8');

  // Extraer pregunta guía
  const m = texto.match(/\{Pregunta gu[ií]a\}\s*([^]+?)\\end\{softbox\}/);
  if (m) {
    preguntaGuiaTex = m[1].replace(/\s+/g, ' ').trim();
    paso(`Pregunta guía detectada`);
  }

  // Extraer tabla de conceptos (Sistematización)
  const tablaConceptos = texto.match(
    /\\rowcolor\{milcTurquesa[^}]*\}[^]+?(?=\\end\{tabularx\})/,
  );
  if (tablaConceptos) {
    const filas = tablaConceptos[0].split('\\\\').slice(1); // quita header
    for (const fila of filas) {
      const partes = fila.split('&').map((s) => s.trim()).filter(Boolean);
      if (partes.length >= 3) {
        conceptosTex.push({
          termino: partes[0].replace(/\\textbf\{|\}/g, '').trim(),
          def: partes[1].replace(/\\textbf\{|\}/g, '').trim(),
          ej: partes[2].replace(/\\textbf\{|\}/g, '').trim(),
        });
      }
    }
    paso(`Conceptos detectados: ${conceptosTex.length}`);
  }
} else {
  paso(`No se encontró .tex original (${texPath}). Generando placeholder.`);
}

/* ─── Genera el archivo TS borrador ─── */

function escapar(s: string): string {
  return s.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

const conceptosBlock =
  conceptosTex.length > 0
    ? conceptosTex
        .map(
          (c) => `    {
      termino: '${c.termino.replace(/'/g, "\\'")}',
      definicion: \`${escapar(c.def)}\`,
      ejemplo: \`${escapar(c.ej)}\`,
      emoji: '🔹', // TODO: ajusta el emoji
    },`,
        )
        .join('\n')
    : `    {
      termino: 'TODO concepto 1',
      definicion: 'TODO definición clara y corta.',
      ejemplo: 'TODO ejemplo concreto.',
      emoji: '🔹',
    },
    {
      termino: 'TODO concepto 2',
      definicion: 'TODO',
      ejemplo: 'TODO',
      emoji: '🔹',
    },`;

const preguntaDetonante =
  preguntaGuiaTex || `TODO pregunta provocadora sobre "${recurso.titulo}".`;

const contenido = `/**
 * Guía ${sesionGlobal} · Grado ${grado}° · Período ${periodo} · Sesión ${sesion}
 * ${recurso.titulo}
 *
 * Borrador generado automáticamente. EDITA este archivo:
 *  1. Ajusta los TODO con contenido real
 *  2. Reemplaza los conceptos placeholder con los del PDF
 *  3. Diseña los laboratorios (quiz + visualizacion)
 *  4. Pule la voz pedagógica
 *  5. Cuando esté listo, agrégalo a src/data/guiasContenido/_index.ts
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: ${grado},
  periodo: ${periodo},
  sesion: ${sesion},
  resumen: 'TODO resumen de 1 línea de la guía.',
  duracionMin: 90,
  subtema: 'TODO subtema',

  preLectura: {
    porQueImporta: \`TODO 2-3 frases que motiven al estudiante. ¿Por qué este tema le importa en su vida?\`,
    preguntaDetonante: \`${escapar(preguntaDetonante)}\`,
    activacion: {
      titulo: 'TODO título de la activación (5 min, antes del PDF)',
      descripcion: 'TODO descripción concreta de la mini-actividad de calentamiento.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'TODO con qué sesión anterior se conecta.',
      siguiente: 'TODO hacia qué sesión siguiente apunta.',
    },
  },

  conceptosClave: [
${conceptosBlock}
  ],

  laboratorios: [
    /* L1 — Visualización: paso a paso de un concepto */
    {
      tipo: 'visualizacion',
      titulo: 'TODO título del paso a paso',
      instrucciones: 'TODO instrucciones cortas',
      pasos: [
        {
          titulo: 'Paso 1',
          texto: 'TODO',
          codigo: 'TODO',
        },
        {
          titulo: 'Paso 2',
          texto: 'TODO',
        },
      ],
    },

    /* L2 — Quiz: 5 preguntas con feedback */
    {
      tipo: 'quiz',
      titulo: 'Quiz: verifica tu comprensión',
      instrucciones: 'Lee cada caso y elige la respuesta correcta.',
      preguntas: [
        {
          enunciado: 'TODO enunciado de la pregunta 1',
          opciones: ['A', 'B', 'C', 'D'],
          respuestaIndex: 0,
          feedbackCorrecto: 'TODO',
          feedbackIncorrecto: 'TODO',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: \`TODO pregunta de reflexión profunda (mira tu día/semana).\`,
    transferencia: \`TODO pista para encontrar el concepto en su vida cotidiana.\`,
    cierre: \`TODO frase de cierre con voz MILC (Escuta · Sistematización · Praxis · Evaluación liberadora).\`,
  },
};

export default contenido;
`;

writeFileSync(outPath, contenido, 'utf-8');
paso(`✓ Creado: ${outPath}`);

console.log(`
✅ Borrador listo. Próximos pasos:
   1. Abre ${outPath} y reemplaza los TODOs.
   2. Agrega el import en src/data/guiasContenido/_index.ts:

      import g${grado}_${periodo}_${sesion} from './${grado}-${periodo}-${sesion}';
      // y agrégalo al array TODAS

   3. Construye con \`npm run build\` y revisa la página en local.
   4. Cuando esté pulido, commit + push.
`);
