/**
 * Metadata de la presentación visual «Construye una propuesta de alto valor»
 * (Samsung Solve for Tomorrow 2026), generada con NotebookLM a partir de la
 * guía PDF de ConectaTE y curada por el Dr. Álvaro Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/sft-propuesta/slide-NN.webp`
 * (15 imágenes, ~1.1 MB total, 1600×900). El visor solo muestra las slides;
 * la guía completa se descarga aparte (no se pasan archivoPdf/archivoPptx).
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionSft = {
  titulo: 'Construye una propuesta de alto valor',
  subtitulo:
    'Del problema de tu comunidad a una solución STEM ganadora · La guía de preparación, en 15 slides.',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 15,
  duracionEstimada: '~8 minutos',
} as const;

export const slidesSft: readonly SlideMilc[] = [
  { numero: 1, titulo: 'Construye una propuesta de alto valor', descripcion: 'Portada. Del problema de tu comunidad a una solución STEM ganadora. Para estudiantes de 8.º a 12.º y docentes guía en Colombia.' },
  { numero: 2, titulo: 'El reto: transformar el territorio', descripcion: 'Solve for Tomorrow no premia la idea más vistosa, sino la que entiende un problema y propone una salida aplicable. Requisitos 2026, el motor STEM + Design Thinking y la escala del programa.' },
  { numero: 3, titulo: 'Los 5 rasgos de una propuesta de alto valor', descripcion: 'Los proyectos que avanzan comparten cinco pilares: problema real y específico, empatía con evidencia, solución diferenciada, STEM explícito e impacto medible.' },
  { numero: 4, titulo: 'El mapa de ruta: Design Thinking', descripcion: 'El corazón evaluable de la propuesta sigue 5 etapas (Empatizar, Definir, Idear, Prototipar, Validar). Hilo conductor: el caso AquaVigía de Cartago.' },
  { numero: 5, titulo: 'Etapa 1 · Empatizar', descripcion: 'Identifica y ubica a la comunidad, incluye una voz real y describe lo que sienten. Caso AquaVigía: las familias de La Platanera y la quebrada Las Cruces.' },
  { numero: 6, titulo: 'Etapa 2 · Definir', descripcion: 'Redacta el problema como una frase clara (causa→efecto), muestra el impacto y conéctalo con la etapa 1. Máximo 840 caracteres.' },
  { numero: 7, titulo: 'Etapa 3 · Idear', descripcion: 'Di la solución en una frase, explica por qué resuelve el problema y en qué se diferencia. Máximo 560 caracteres. AquaVigía: un medidor comunitario de agua de bajo costo.' },
  { numero: 8, titulo: 'Etapa 4 · Prototipar', descripcion: 'Describe el funcionamiento paso a paso y nombra el STEM explícitamente. AquaVigía: sensores de turbidez y pH + microcontrolador + LED de semáforo.' },
  { numero: 9, titulo: 'El motor STEM', descripcion: 'Muestra el STEM actuando: Ciencia (principio que lo explica), Tecnología (dispositivo), Ingeniería (lo que construyes) y Matemática (el cálculo que sostiene tus decisiones).' },
  { numero: 10, titulo: 'Etapa 5 · Validar', descripcion: 'Da una forma de medir el éxito con números, muestra que la comunidad participa y sé realista. Máximo 560 caracteres.' },
  { numero: 11, titulo: 'La lente MILC', descripcion: 'Un proyecto crece al mirarlo con cinco dimensiones: personal, emocional, ciudadana, local e intergeneracional.' },
  { numero: 12, titulo: 'Áreas de impacto y ODS', descripcion: 'Elige hasta 2 áreas con coherencia; cada una habilita sus ODS. La coherencia suma, el relleno resta. AquaVigía: Ambiental + Salud (ODS 6 y 3).' },
  { numero: 13, titulo: 'El pitch perfecto', descripcion: 'Si llegan a la final: el problema con rostro, la solución en una frase, el STEM mostrando el cómo, el impacto con un número y el equipo.' },
  { numero: 14, titulo: 'Rúbrica de autoevaluación', descripcion: 'Antes de enviar, evalúa cada criterio: ¿está «en desarrollo» o es de «alto valor»? Si algo flaquea, aún hay tiempo de pulirlo.' },
  { numero: 15, titulo: 'Checklist de inscripción oficial', descripcion: 'Lo que el docente necesita para inscribir en la plataforma oficial de Samsung: datos del docente, la institución, el equipo, la propuesta y el cierre. La inscripción es exclusivamente oficial.' },
];
