/**
 * Metadata de la presentación "El Mercado de la Atención" — Tomo I de la
 * Colección MILC, generada con NotebookLM y curada por el Dr. Álvaro
 * Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/mercado-atencion/slide-NN.webp`
 * (12 imágenes, ~950 KB total, 1920×1080), junto al PPTX y el PDF.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionMercado = {
  titulo: 'El Mercado de la Atención',
  subtitulo:
    'Cómo se disputa la mirada de los jóvenes y cómo educar el criterio en la era onlife · Presentación del Tomo I de la Colección MILC',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 12,
  archivoPptx: 'el-mercado-de-la-atencion.pptx',
  archivoPdf: 'el-mercado-de-la-atencion.pdf',
  duracionEstimada: '12-15 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesMercado: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'El Mercado de la Atención',
    descripcion:
      'Portada. Cómo se disputa la mirada de los jóvenes y cómo educar el criterio en la era onlife. Dr. Álvaro Cárdenas Orozco · Modelo MILC.',
  },
  {
    numero: 2,
    titulo: 'La premisa de Herbert Simon (1971)',
    descripcion:
      'Una riqueza de información crea una pobreza de atención: si la atención es finita y el contenido infinito, la mirada se convierte en la mercancía definitiva.',
  },
  {
    numero: 3,
    titulo: 'La arquitectura de la captura',
    descripcion:
      'El diseño persuasivo no es accidente, es ingeniería conductual: el disparador, la acción fácil (scroll infinito) y la recompensa variable de tragamonedas.',
  },
  {
    numero: 4,
    titulo: 'El semáforo de la evidencia',
    descripcion:
      'Evaluación sin pánico: lo robusto (fragmentación del foco, costo de la interrupción continua, diseño predictivo) frente a lo aún en disputa (el mito del pez dorado).',
  },
  {
    numero: 5,
    titulo: 'El costo cognitivo: dos formas de mirar',
    descripcion:
      'Hiperatención (saltos veloces, intolerancia al tedio) frente a atención profunda (foco sostenido, base de la libertad interior y del pensamiento complejo).',
  },
  {
    numero: 6,
    titulo: 'El costo identitario: el yo espejo onlife',
    descripcion:
      'La necesidad de reconocimiento no es nueva; el espejo sí: una audiencia numérica (likes), permanente (viaja en el bolsillo) y pública (anónima y masiva).',
  },
  {
    numero: 7,
    titulo: 'La respuesta del MILC: soberanía atencional',
    descripcion:
      'No es fuerza de voluntad ni desintoxicación pasiva: es una competencia entrenable que une metacognición, autorregulación e intencionalidad. Recuperar el gobierno de la propia mirada es un acto de libertad.',
  },
  {
    numero: 8,
    titulo: 'El desplazamiento final: de consumidor a autor',
    descripcion:
      'La mejor respuesta a una mirada capturada es una mirada que crea: investigación estructurada, foco sostenido, semilleros MILC y la Revista CosmoTEC.',
  },
  {
    numero: 9,
    titulo: 'El cerebro que atiende: la regla de la poda',
    descripcion:
      'La adolescencia es neuroplasticidad intensa: lo que se practica hoy cablea el cerebro adulto. Y los mitos a descartar: el 10% del cerebro, los estilos de aprendizaje, las píldoras mágicas.',
  },
  {
    numero: 10,
    titulo: 'El semáforo de los métodos',
    descripcion:
      'Qué funciona de verdad: práctica espaciada, monotarea estricta y sueño suficiente (verde); pausas restauradoras y ejercicio (ámbar); brain-training comercial (rojo).',
  },
  {
    numero: 11,
    titulo: 'El aula como gimnasio: un programa por etapas',
    descripcion:
      'Tres etapas que transfieren el control del docente al estudiante: cimientos (el docente modela), consolidación (práctica guiada) y autonomía (el estudiante gestiona).',
  },
  {
    numero: 12,
    titulo: 'La política de la mirada: un asunto de justicia',
    descripcion:
      'La atención no es un rasgo privado, es un bien común: enseñar a gobernarla en la escuela pública es justicia atencional — devolverle a cada joven el derecho a decidir su propia biografía.',
  },
];
