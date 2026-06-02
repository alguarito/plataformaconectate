/**
 * Metadata de la presentación "MILC: Educación en la Era Onlife"
 * generada con NotebookLM y curada por el Dr. Álvaro Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/milc-onlife/slide-NN.webp`
 * (13 imágenes, ~1.9 MB total, 1920×1080).
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */

export interface SlideMilc {
  /** Número de slide, 1-indexed */
  numero: number;
  /** Título corto que aparece como caption */
  titulo: string;
  /** Descripción para alt text y tooltip (1-2 líneas) */
  descripcion: string;
}

export const presentacionMilc = {
  titulo: 'MILC: Educación en la Era Onlife',
  subtitulo:
    'Modelo de Investigación Liberadora y Científica · Una pedagogía para recuperar la mirada, investigar el territorio y crear tecnología con sentido',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 13,
  archivoPptx: 'MILC_and_Onlife_Education.pptx',
  archivoPdf: 'MILC_and_Onlife_Education.pdf',
  duracionEstimada: '15-20 minutos',
  licencia: 'CC BY-NC-SA 4.0',
} as const;

export const slidesMilc: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'MILC: Educación en la Era Onlife',
    descripcion:
      'Portada. Una pedagogía para recuperar la mirada, investigar el territorio y crear tecnología con sentido.',
  },
  {
    numero: 2,
    titulo: 'La Crisis: El Mercado de la Mirada',
    descripcion:
      'Diagnóstico del momento educativo: la atención del estudiante se ha convertido en mercancía.',
  },
  {
    numero: 3,
    titulo: 'El Cambio de Paradigma',
    descripcion:
      'De consumidores a autores de mundo. La escuela debe formar sujetos que decidan, no que reaccionen.',
  },
  {
    numero: 4,
    titulo: 'La Arquitectura de la Liberación',
    descripcion:
      'El ecosistema MILC: cómo se articulan saberes ancestrales, ciencia, tecnología y comunidad.',
  },
  {
    numero: 5,
    titulo: 'Los Cimientos: Genealogía del Futuro',
    descripcion:
      'Raíces filosóficas del modelo: Dussel (liberación), Floridi (era onlife), estoicismo y saberes locales.',
  },
  {
    numero: 6,
    titulo: 'Alcance I: El Inforg Resiliente',
    descripcion:
      'El sujeto inforg que MILC busca formar: dueño de su atención, ético con sus datos y autor de su tecnología.',
  },
  {
    numero: 7,
    titulo: 'Alcance II: El Laboratorio-Ágora',
    descripcion:
      'El aula deja de ser fila y se vuelve círculo: círculos sobre filas, prototipado frugal, muro de evidencia, pacto de uso.',
  },
  {
    numero: 8,
    titulo: 'El Método: Ciclo de Investigación Liberadora',
    descripcion:
      'Espiral de 5 pasos: Escucha → Sistematización → Praxis → Evaluación Liberadora → Devolución → nueva pregunta.',
  },
  {
    numero: 9,
    titulo: 'Las Herramientas: Engranajes Éticos en la Era de la IA',
    descripcion:
      'La técnica se evalúa por sus hábitos pedagógicos: declaración del uso de IA, verificación de fuentes, autoría humana final.',
  },
  {
    numero: 10,
    titulo: 'Tiempo y Ética: El Relevo y la Soberanía de Datos',
    descripcion:
      'Cronotopo MILC: el tiempo del relevo entre estudiantes, soberanía sobre los datos propios y memoria pedagógica.',
  },
  {
    numero: 11,
    titulo: 'El Impacto: Sostenibilidad y Evidencia Prudente',
    descripcion:
      'Cuatro tipos de evidencia para sostener el modelo: material, documental, narrativa y comunitaria.',
  },
  {
    numero: 12,
    titulo: 'La Escalabilidad: De la Clase a la Red MILC',
    descripcion:
      'Federar experiencias, no franquiciar formatos: Aula → Semillero → Institución → Red MILC.',
  },
  {
    numero: 13,
    titulo: 'El Último Bastión',
    descripcion:
      'Cierre: formar un sujeto investigador en la era onlife no es un cambio de método, es un cambio de mirada.',
  },
] as const;
