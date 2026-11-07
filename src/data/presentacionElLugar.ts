/**
 * Metadata de la presentación "El Lugar de Llegar a Ser" — Tomo V de la
 * Colección MILC (el tomo de cierre), compuesta desde la versión 2.0 del libro
 * (octubre de 2026). Las citas son literales del libro; el generador vive en
 * CEREBRO (taller/presentaciones-milc-v2-2026-10-27/).
 *
 * Las slides viven en `public/presentaciones/el-lugar-de-llegar-a-ser/slide-NN.webp`
 * (12 imágenes, 1920×1080), junto al PDF descargable.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionElLugar = {
  titulo: 'El Lugar de Llegar a Ser',
  subtitulo:
    'El espacio pedagógico como agente de la formación · Presentación del Tomo V de la Colección MILC, versión 2.0',
  autor: 'PhD. Alvaro Cardenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 12,
  archivoPdf: 'el-lugar-de-llegar-a-ser.pdf',
  duracionEstimada: '10-12 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesElLugar: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'El Lugar de Llegar a Ser',
    descripcion:
      'Portada del Tomo V de la Colección MILC, El Lugar de Llegar a Ser, en su versión 2.0, edición revisada de octubre de 2026. Es el tomo que cierra la colección y pregunta por el espacio: ¿dónde puedo llegar a ser? Su autor es el Dr. Alvaro Cardenas Orozco, de la I.E. Sor María Juliana (Cartago, Valle del Cauca), y la obra circula en acceso abierto con licencia CC BY-SA 4.0.',
  },
  {
    numero: 2,
    titulo: '¿Dónde puedo llegar a ser?',
    descripcion:
      'La colección reúne seis obras: el Tomo 0, Educación en la Era Onlife, que es la obra matriz, y cinco tomos temáticos. Cada tomo temático hace una pregunta distinta sobre el mismo acto de aprender: el yo, el nosotros, el cómo y la herramienta. Faltaba el dónde, y el libro explica por qué: «La atención se defiende en un sitio, el arraigo se cultiva en un sitio, el método se practica en un sitio».',
  },
  {
    numero: 3,
    titulo: 'El espacio no es el fondo: es un agente',
    descripcion:
      'Capítulo 1, El aula que apaga. Con Vygotsky (1978), el libro sostiene que el desarrollo ocurre primero entre las personas, y por eso el ambiente es parte de la maquinaria del aprendizaje. La regla que propone es sencilla: «El silencio de un estudiante no basta para juzgar su capacidad.»',
  },
  {
    numero: 4,
    titulo: 'La escuela-isla frente a la escuela-nodo',
    descripcion:
      'Dos columnas contraponen la escuela que se encierra (capítulo 3) y la escuela que se conecta (capítulo 8). La frontera de ladrillo es necesaria; la frontera mental es una decisión y se puede mover. El libro advierte, sin embargo: «Tampoco todo aislamiento es elegido: puede resultar de barreras de transporte, conectividad, seguridad, financiación o exclusión institucional.»',
  },
  {
    numero: 5,
    titulo: 'Lo que la pedagogía sabe desde hace décadas',
    descripcion:
      'Cuatro referentes que la Introducción y el capítulo 1 ponen en diálogo, junto con el currículo oculto de Jackson (1968). El libro aclara que no son equivalentes: «Estas perspectivas no son equivalentes ni prueban una causa única; permiten mirar juntos ambiente, actividad y participación.»',
  },
  {
    numero: 6,
    titulo: 'Lo que alguien diseñó, alguien puede rediseñarlo',
    descripcion:
      'Capítulo 2, El espacio es un artefacto: el aula no es un hecho de la naturaleza, sino un objeto fabricado, y su disposición es una decisión pedagógica. La Ventana del Grupo Ecosistemas Digitales (2024) muestra un salón común convertido en laboratorio de sensores y prototipos. El libro acota que esa experiencia contó con equipos, tiempo y acompañamiento, y que «el cambio no puede atribuirse solo a mover las mesas».',
  },
  {
    numero: 7,
    titulo: 'Nombrar, fundar, abrir, sostener: un solo gesto',
    descripcion:
      'Las cuatro partes del libro son cuatro operaciones sobre el espacio, y se sostienen unas a otras: «no se sostiene lo que no se fundó, no se abre lo que no existe, y no se funda bien lo que antes no se supo nombrar». No reemplazan el ciclo de investigación MILC de la obra matriz (Escucha, Sistematización, Praxis, Evaluación liberadora y Devolución); los productos de la Parte IV se construyen dentro de él.',
  },
  {
    numero: 8,
    titulo: 'El espacio no se pide: se funda',
    descripcion:
      'Los cuatro capítulos de la Parte II: fundar donde no había nada, dar identidad (CIR Sormatronik, el semillero de robótica nacido en 2015 que el autor dirige desde 2016), nacer en la adversidad (Betelgeuse, creado durante la pandemia) y abrir el ágora. El ágora completa la fundación, porque «un semillero sin ágora forma para saber, pero no para responder por lo que se sabe».',
  },
  {
    numero: 9,
    titulo: 'La red como arquitectura del espacio',
    descripcion:
      'La escuela en el centro y tres clases de vínculo (capítulos 8 a 10): la red que la cuenta como nodo, la infraestructura que le prestan y los aliados que se vuelven parte del aula. El cambio empieza por la pregunta, que deja de ser «¿cuánto cuesta?» y pasa a ser «¿quién lo presta?». Con la IASC, el libro habla «de participación, no de descubrimientos».',
  },
  {
    numero: 10,
    titulo: 'Hacer visible lo que la nota no captura',
    descripcion:
      'Rúbrica de ambiente del capítulo 15: cada fila va del nivel inicial al sostenido, con un nivel intermedio (en desarrollo), y revisa el ambiente sin calificar a los estudiantes. Es una propuesta para adaptar, no una escala validada, y advierte: «No sume los niveles ni produzca un ranking.» Sostener también es institucionalizar el espacio (capítulo 13) y tejerle una red (capítulo 14), porque «Hacer visible no es lo mismo que probar.»',
  },
  {
    numero: 11,
    titulo: 'La misma persona, dos lugares',
    descripcion:
      'Tres Ventanas al Aula del libro: Luisa en el semillero Betelgeuse (capítulo 1), un estudiante en el 12.º Congreso Nacional de Enseñanza de la Física y la Astronomía (Universidad del Valle, Cali, 2024; capítulo 7) y el taller de constelaciones que Luisa lideró en la I.E. Alfonso López Pumarejo (capítulo 11). Del congreso, el libro concluye: «La hazaña no es del joven solo: es de la arquitectura que lo hizo posible.» Y sobre Luisa advierte: «Esta historia no permite aislar el efecto del lugar del esfuerzo de Luisa, del acompañamiento, del tiempo o de otras experiencias de su vida.»',
  },
  {
    numero: 12,
    titulo: 'El último acto de soberanía',
    descripcion:
      'Cierre del Tomo V y de la Colección MILC. Después de la atención, el origen, el método y la herramienta, queda la soberanía sobre el lugar, que es también un asunto de justicia. El libro termina así: «Porque nadie llega a ser en un lugar cualquiera. Y ese lugar, el que sí lo permite, no lo espera el maestro: lo funda.»',
  },
] as const;
