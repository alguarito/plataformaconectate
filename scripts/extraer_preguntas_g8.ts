/**
 * Extrae las 150 preguntas de quiz de las 30 guías de Grado 8
 * y selecciona 50 para el examen final interactivo (Sesión 11 · P3).
 *
 * Reglas de selección (sin etiquetado manual):
 *   - 2 preguntas por sesión en las primeras N sesiones de cada periodo
 *     (donde están los conceptos fundantes), 1 en las restantes.
 *   - Distribución por periodo: 17 / 17 / 16.
 *   - Dentro de cada sesión preferimos pregunta #2 (comprensión) y #4
 *     (aplicación) cuando se eligen 2; o #3 (intermedia) cuando se elige 1.
 *
 * Salida:
 *   - scripts/generadores/datos-examen-final-g8.json (pool + selección)
 *   - src/data/guiasContenido/8-3-11.ts (guía MILC v3 con 3 LabQuiz)
 *
 * Uso: tsx scripts/extraer_preguntas_g8.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ──────────────── Carga del pool ────────────────

interface Pregunta {
  enunciado: string;
  opciones: string[];
  respuestaIndex: number;
  feedbackCorrecto: string;
  feedbackIncorrecto: string;
}

interface GuiaMin {
  grado: number;
  periodo: number;
  sesion: number;
  subtema?: string;
  tituloQuiz: string;
  preguntas: Pregunta[];
}

async function loadGuias(): Promise<GuiaMin[]> {
  const out: GuiaMin[] = [];
  for (let p = 1; p <= 3; p++) {
    for (let s = 1; s <= 10; s++) {
      const mod = await import(
        path.join(ROOT, 'src/data/guiasContenido', `8-${p}-${s}.ts`)
      );
      const g = mod.default;
      const labQuiz = g.laboratorios.find((l: any) => l.tipo === 'quiz');
      if (!labQuiz) {
        throw new Error(`Sin LabQuiz en 8-${p}-${s}`);
      }
      out.push({
        grado: g.grado,
        periodo: g.periodo,
        sesion: g.sesion,
        subtema: g.subtema,
        tituloQuiz: labQuiz.titulo,
        preguntas: labQuiz.preguntas,
      });
    }
  }
  return out;
}

// ──────────────── Selección ────────────────

interface SeleccionResult {
  porPeriodo: Record<number, Pregunta[]>;
  detalleOrigen: { periodo: number; sesion: number; indiceLocal: number }[];
}

/**
 * Para cada periodo decide cuántas preguntas tomar por sesión:
 *   periodo 1 y 2 (objetivo 17): 7 sesiones × 2 + 3 sesiones × 1 = 17
 *   periodo 3 (objetivo 16):     6 sesiones × 2 + 4 sesiones × 1 = 16
 * Las sesiones que reciben 2 son las primeras de cada periodo
 * (donde están los fundamentos del bloque temático).
 */
function seleccionar(guias: GuiaMin[]): SeleccionResult {
  const cfg: Record<number, { dobles: number; total: number }> = {
    1: { dobles: 7, total: 17 },
    2: { dobles: 7, total: 17 },
    3: { dobles: 6, total: 16 },
  };
  const porPeriodo: Record<number, Pregunta[]> = { 1: [], 2: [], 3: [] };
  const detalle: { periodo: number; sesion: number; indiceLocal: number }[] = [];

  for (const periodo of [1, 2, 3]) {
    const sesiones = guias
      .filter((g) => g.periodo === periodo)
      .sort((a, b) => a.sesion - b.sesion);
    const { dobles, total } = cfg[periodo];
    let acumulado = 0;
    for (let i = 0; i < sesiones.length && acumulado < total; i++) {
      const ses = sesiones[i];
      const tomar = i < dobles ? 2 : 1;
      const indices = tomar === 2 ? [1, 3] : [2]; // 0-based: #2 y #4 / #3
      for (const idx of indices) {
        if (idx < ses.preguntas.length) {
          porPeriodo[periodo].push(ses.preguntas[idx]);
          detalle.push({ periodo, sesion: ses.sesion, indiceLocal: idx });
          acumulado++;
          if (acumulado >= total) break;
        }
      }
    }
  }
  return { porPeriodo, detalleOrigen: detalle };
}

// ──────────────── Emisión TS ────────────────

function tsEscape(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function emitirPreguntasArray(preguntas: Pregunta[], indent = '        '): string {
  return preguntas
    .map((p) => {
      const opc = p.opciones.map((o) => `${indent}    '${tsEscape(o)}'`).join(',\n');
      return [
        `${indent}{`,
        `${indent}  enunciado:`,
        `${indent}    '${tsEscape(p.enunciado)}',`,
        `${indent}  opciones: [`,
        opc + ',',
        `${indent}  ],`,
        `${indent}  respuestaIndex: ${p.respuestaIndex},`,
        `${indent}  feedbackCorrecto:`,
        `${indent}    '${tsEscape(p.feedbackCorrecto)}',`,
        `${indent}  feedbackIncorrecto:`,
        `${indent}    '${tsEscape(p.feedbackIncorrecto)}',`,
        `${indent}}`,
      ].join('\n');
    })
    .join(',\n');
}

function generarTs(seleccion: SeleccionResult): string {
  const p1 = emitirPreguntasArray(seleccion.porPeriodo[1]);
  const p2 = emitirPreguntasArray(seleccion.porPeriodo[2]);
  const p3 = emitirPreguntasArray(seleccion.porPeriodo[3]);
  const total =
    seleccion.porPeriodo[1].length +
    seleccion.porPeriodo[2].length +
    seleccion.porPeriodo[3].length;

  return `/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 11
 * (sesión global 31 — Cierre de grado: examen integrador interactivo).
 *
 * Tema: 50 retos del año entero — phronesis del año en clave inforg.
 * Versión MILC v3 con triple LabQuiz (P1 · P2 · P3) y feedback formativo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 11,
  resumen:
    'Cierre del grado 8: ${total} retos interactivos que recorren los tres periodos. Sin nota dura, con feedback inmediato — para que cierres el año sabiendo qué dominas y qué te llevas a noveno.',
  duracionMin: 90,
  subtema: 'Examen integrador interactivo · Phronesis del año entero',

  preLectura: {
    porQueImporta:
      'Mirar atrás antes de pasar a 9° no es nostalgia: es phronesis. Los datos, la lógica de control y la producción multimedia van a volver — más complejos, con más responsabilidad. Saber qué hilos del año dominas (y cuáles aún se te escapan) te ahorra meses de tropiezos en grado 9.',
    preguntaDetonante:
      '¿Qué del grado 8 podrías explicarle a alguien de 7° que aún no lo sabe? Si no encuentras nada, este quiz te dirá por dónde empezar.',
    activacion: {
      titulo: 'Auto-mapa antes del quiz',
      descripcion:
        'En 5 minutos: en una hoja escribe 3 cosas que crees dominar del año, 1 que aún te confunde y 1 que ya olvidaste. No la entregues — la vas a contrastar con tus resultados al final.',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'En las sesiones 1-30 del grado 8 trabajamos datos (P1), lógica y computación física (P2) y producción multimedia con responsabilidad digital (P3).',
      siguiente:
        'En grado 9 retomarás historia de la tecnología, redes, normas documentales y verás de nuevo IA básica con más profundidad. Lo que aquí domines será tu piso.',
    },
  },

  conceptosClave: [
    {
      categoria: '🧵 Hilos rojos del grado 8',
      termino: 'Variable',
      definicion:
        'Característica que cambia entre casos — cuantitativa o cualitativa. Es el ladrillo común de los tres periodos: se observa en P1 (datos), se manipula en P2 (programación), se comunica en P3 (multimedia).',
      ejemplo:
        'En P1 "edad" es variable cuantitativa. En P2 una variable guarda el conteo de un bucle. En P3 una variable de Canva define el color institucional.',
      emoji: '📊',
    },
    {
      categoria: '🧵 Hilos rojos del grado 8',
      termino: 'Decisión prudente',
      definicion:
        'Acción concreta que reconoce los límites de lo que sabes. Aparece en P1 al interpretar datos, en P2 al elegir un condicional, en P3 al publicar contenido respetando a otros.',
      ejemplo:
        'Decir "los datos sugieren X pero no me dicen Y" es una decisión prudente. Lo opuesto es concluir más de lo que el dato permite.',
      emoji: '🦉',
    },
    {
      categoria: '🧵 Hilos rojos del grado 8',
      termino: 'Algoritmo',
      definicion:
        'Secuencia ordenada de pasos para resolver un problema. En P1 fue el algoritmo de decisión con datos; en P2 fue pseudocódigo y MakeCode; en P3 es el flujo de producción multimedia.',
      ejemplo:
        'El algoritmo "pregunta → muestra → cálculo → interpretación → decisión" funciona igual de bien en una hoja de cálculo que en una campaña de Canva.',
      emoji: '⚙️',
    },
    {
      categoria: '🧵 Hilos rojos del grado 8',
      termino: 'Identidad digital',
      definicion:
        'La huella que dejas (y construyes) cuando produces, publicas o decides en línea. Cruza los tres periodos: cómo nombras tu archivo, cómo proteges un dato, cómo firmas un diseño.',
      ejemplo:
        'Subir un meme con la foto de un compañero sin permiso y publicar tu propio análisis de datos firmado son dos puntas opuestas de la misma identidad digital.',
      emoji: '🪪',
    },
    {
      categoria: '🧭 Triángulo MILC del año',
      termino: 'Phronesis (Aristóteles · Estoicos)',
      definicion:
        'Prudencia práctica: saber decidir bien en situaciones concretas. Distingue lo que depende de ti (interpretación, cuidado) de lo que no (calidad de datos previos, decisiones de otros).',
      ejemplo:
        'No controlas si los datos llegaron limpios. Sí controlas con qué cuidado los interpretas y comunicas.',
      emoji: '🏛️',
    },
    {
      categoria: '🧭 Triángulo MILC del año',
      termino: 'Cuidado del Otro (Dussel · Floridi)',
      definicion:
        'Cada dato es una persona, cada publicación tiene un destinatario. La técnica nunca es éticamente neutral: respeta al ausente y a quien no puede defenderse en línea.',
      ejemplo:
        'Antes de incluir un dato sensible en tu dashboard pregúntate: ¿pedí permiso? ¿quién falta en estos datos? ¿qué le comunica esto a quien lo lea?',
      emoji: '🤝',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Bloque I · Datos y decisiones prudentes (Periodo 1)',
      instrucciones:
        '${seleccion.porPeriodo[1].length} preguntas sobre datos, hojas de cálculo, gráficos y decisiones con phronesis. Sin tiempo límite. Cada respuesta te da feedback inmediato.',
      preguntas: [
${p1},
      ],
    },
    {
      tipo: 'quiz',
      titulo: 'Bloque II · Lógica, control y computación física (Periodo 2)',
      instrucciones:
        '${seleccion.porPeriodo[2].length} preguntas sobre pseudocódigo, condicionales, bucles, MakeCode y sensores. Aplica lo aprendido a casos nuevos.',
      preguntas: [
${p2},
      ],
    },
    {
      tipo: 'quiz',
      titulo: 'Bloque III · Multimedia, redes y responsabilidad (Periodo 3)',
      instrucciones:
        '${seleccion.porPeriodo[3].length} preguntas sobre diseño multimedia, seguridad digital, identidad y publicación responsable. Cierra el año.',
      preguntas: [
${p3},
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Qué bloque te costó más y qué dice eso de ti como inforg? No se trata de la nota — se trata de saber dónde poner energía en grado 9.',
    transferencia:
      'En grado 9 vas a retomar lógica al programar, datos al producir informes con normas ICONTEC y responsabilidad digital al publicar contenido institucional. Lo que dominaste aquí es tu base; lo que se te escapó, tu primer foco.',
    cierre:
      'Cerrar grado 8 con phronesis no es saberlo todo: es saber qué decisiones puedes tomar bien y reconocer dónde aún necesitas cuidado. Ese reconocimiento es el inicio de grado 9.',
  },
};

export default contenido;
`;
}

// ──────────────── Main ────────────────

async function main() {
  console.log('→ Cargando 30 guías de grado 8...');
  const guias = await loadGuias();
  const totalPool = guias.reduce((acc, g) => acc + g.preguntas.length, 0);
  console.log(`  Pool: ${totalPool} preguntas en ${guias.length} guías.`);

  console.log('→ Seleccionando 50 (17/17/16)...');
  const seleccion = seleccionar(guias);
  for (const p of [1, 2, 3]) {
    console.log(`  Periodo ${p}: ${seleccion.porPeriodo[p].length} preguntas`);
  }

  // JSON de auditoría
  const auditPath = path.join(
    ROOT,
    'scripts/generadores/datos-examen-final-g8.json',
  );
  fs.writeFileSync(
    auditPath,
    JSON.stringify(
      {
        totalPool,
        totalSeleccionadas:
          seleccion.porPeriodo[1].length +
          seleccion.porPeriodo[2].length +
          seleccion.porPeriodo[3].length,
        distribucion: {
          periodo1: seleccion.porPeriodo[1].length,
          periodo2: seleccion.porPeriodo[2].length,
          periodo3: seleccion.porPeriodo[3].length,
        },
        detalleOrigen: seleccion.detalleOrigen,
        seleccionadas: seleccion.porPeriodo,
      },
      null,
      2,
    ),
    'utf-8',
  );
  console.log(`  Audit JSON → ${auditPath}`);

  // TS de la guía
  const tsPath = path.join(ROOT, 'src/data/guiasContenido/8-3-11.ts');
  fs.writeFileSync(tsPath, generarTs(seleccion), 'utf-8');
  console.log(`  Guía → ${tsPath}`);

  console.log('\nLISTO. Próximo paso: registrar en _index.ts y ajustar rutas.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
