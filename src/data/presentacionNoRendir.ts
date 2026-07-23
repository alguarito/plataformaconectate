/**
 * Metadata de la presentación "No rendir la mirada" — Tomo IV de la
 * Colección MILC, generada con NotebookLM y curada por el Dr. Álvaro
 * Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/no-rendir-la-mirada/slide-NN.webp`
 * (12 imágenes, 1920×1080), junto al PDF descargable.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionNoRendir = {
  titulo: 'No rendir la mirada',
  subtitulo:
    'La herramienta no piensa por el estudiante: le presta capacidad · Presentación del Tomo IV de la Colección MILC',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 12,
  archivoPdf: 'no-rendir-la-mirada.pdf',
  duracionEstimada: '10-12 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesNoRendir: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'No rendir la mirada',
    descripcion:
      'Portada. Tomo IV de la Colección MILC: «Inteligencia artificial, datos y soberanía tecnológica: usar la herramienta con criterio, autoría y cuidado». La herramienta más poderosa no debería pensar por nosotros: le presta capacidad, no la reemplaza. Dr. Álvaro Cárdenas Orozco · I.E. Sor María Juliana.',
  },
  {
    numero: 2,
    titulo: 'La ilusión del pensamiento',
    descripcion:
      'La IA no piensa, acierta: es un predictor de la siguiente palabra alimentado por estadísticas colosales. El esquema muestra cómo, tras la palabra «La», el modelo asigna probabilidades («herramienta» 82 %, «máquina» 14 %, «inteligencia» 4 %). El peligro de la alucinación: como no distingue lo que recuerda de lo que compone, inventa fuentes y datos con el mismo aplomo con que dice la verdad. El acierto es verificable para quien ya sabe; el invento es invisible para quien apenas aprende.',
  },
  {
    numero: 3,
    titulo: 'El dato como huella inevitable',
    descripcion:
      'Las tres capas de la huella digital, dibujadas en proporción a su peso real. La deliberada es la capa más delgada: lo que el estudiante cree que deja (publicaciones, mensajes). La registrada es la capa media: el rastro de comportamiento pasivo (tiempo de lectura, clics, ubicación). La inferida es la más ancha: lo que los algoritmos deducen cruzando datos para tomar decisiones sobre nosotros. Todo dato digital es una huella, y la huella acumulada en manos ajenas es poder sobre ti.',
  },
  {
    numero: 4,
    titulo: 'Las cuatro heridas de la rendición',
    descripcion:
      'Lo que la herramienta le hace al que aprende cuando lo sustituye en vez de acompañarlo. 1) Dependencia: la deuda cognitiva contraída al usar la IA como muleta en lugar de andamio; al retirar la máquina, la capacidad del estudiante cae. 2) Autoría rendida: el estudiante se borra y se vuelve invisible dentro de su propio trabajo. 3) Extracción: los datos personales y el comportamiento de aprendizaje convertidos en mercancía. 4) La brecha: la ilusión de que el acceso a internet resuelve el problema de la desigualdad.',
  },
  {
    numero: 5,
    titulo: 'Anatomía de la brecha',
    descripcion:
      'No hay una brecha, hay tres encajadas una dentro de otra. Acceso: tener el dispositivo, la única que solemos medir. Acompañamiento: el diseño pedagógico del maestro y quien explique en casa. Representación: no aceptar el mundo promedio que impone la máquina. Un estudiante con el mejor dispositivo del salón sigue excluido si acepta pasivamente el mundo promedio que la herramienta le devuelve sin criterio propio.',
  },
  {
    numero: 6,
    titulo: 'Matriz de diagnóstico: el cambio de paradigma',
    descripcion:
      'Dos maneras opuestas de relacionarse con la máquina. Como oráculo: entrega verdades indiscutibles, se consulta y se obedece, genera conclusiones finales; resultado, deuda cognitiva. Como mediación: es un instrumento que se interpone, exige verificación humana y genera borradores y materia prima; resultado, capacidad instalada. En el modelo MILC la inteligencia artificial es mediación, nunca oráculo.',
  },
  {
    numero: 7,
    titulo: 'Educar el criterio: la respuesta MILC',
    descripcion:
      'La arquitectura de la tercera parte del tomo: tres hábitos sostenidos por una postura. Declaración (hacer visible el proceso), Verificación (comprobar la verdad) y Autoría (explicar, decidir, responder) se apoyan sobre la Soberanía, que no es un cuarto acto de la misma serie sino el suelo desde el cual todo cobra sentido.',
  },
  {
    numero: 8,
    titulo: 'Hábito 1 · La declaración',
    descripcion:
      'Declarar el uso de IA no es confesar una falta; es firmar una autoría: hace el trabajo auditable y más valioso. Los grados de apoyo que conviene distinguir al declarar: formal (ortografía, formato, puntuación), comprensión (explicar conceptos para luego escribirlos con palabras propias), estructural (esquemas y orden de ideas) y contenido (borradores redactados que exigen corrección profunda).',
  },
  {
    numero: 9,
    titulo: 'Hábito 2 · Verificación y escepticismo estoico',
    descripcion:
      'Suspender el juicio ante la fluidez: no conceder el asentimiento a una respuesta por el solo hecho de que suene segura y convincente. El esquema contrapone la respuesta fluida generada por la máquina con la fuente primaria que debe confrontarla. Trata cada afirmación fluida como una hipótesis que espera confirmación, no como una verdad ya ganada.',
  },
  {
    numero: 10,
    titulo: 'Hábito 3 · Autoría y el Inforg Resiliente',
    descripcion:
      'El ideal antropológico del modelo no es huir de la tecnología, sino habitar la infoesfera sin disolverse en ella. El triángulo de la autoría: Explicar (entender el propio proceso de principio a fin), Decidir (saber qué se conserva y qué se descarta de la máquina) y Responder (dar la cara por el resultado, incluidos sus errores y sesgos).',
  },
  {
    numero: 11,
    titulo: 'La postura · Soberanía informacional situada',
    descripcion:
      'Usar las herramientas sin arrodillarse: aprovechar la máquina sin ceder tres dominios fundamentales. Dueño del juicio: seguir siendo quien decide qué es verdad y qué tiene valor. Dueño de los datos: saber qué huella se produce, quién la recoge y decidir sobre ella. Dueño del territorio: pensar desde la propia exterioridad y saber local, sin dejarse imponer la mirada del centro global.',
  },
  {
    numero: 12,
    titulo: 'Aplicación · El cuaderno de prompts',
    descripcion:
      'La herramienta de trazabilidad que evalúa el proceso y no solo el producto final, en tres columnas. 1) ¿Qué le pedí?: el prompt literal y sin adornos, porque pedir bien ya es pensar. 2) ¿Qué me devolvió?: el borrador, la sugerencia o la alucinación. 3) ¿Qué decidí yo?: el verdadero trabajo intelectual, qué conservé, qué borré, qué corregí y por qué. La herramienta puso la velocidad; el estudiante puso el criterio y la firma.',
  },
] as const;
