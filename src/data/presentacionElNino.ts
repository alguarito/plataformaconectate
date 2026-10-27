/**
 * Metadata de la presentación "El niño que sueña ciencia" — Tomo III de la
 * Colección MILC, compuesta desde la versión 2.0 del libro (octubre de 2026).
 * Las citas son literales del libro; el generador vive en CEREBRO
 * (taller/presentaciones-milc-v2-2026-10-27/).
 *
 * Las slides viven en `public/presentaciones/el-nino-que-suena-ciencia/slide-NN.webp`
 * (15 imágenes, 1920×1080), junto al PDF descargable.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionElNino = {
  titulo: 'El niño que sueña ciencia',
  subtitulo:
    'La curiosidad es natural; la escuela debe darle método al sueño (sin apagarlo) · Presentación del Tomo III de la Colección MILC, versión 2.0',
  autor: 'PhD. Alvaro Cardenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 15,
  archivoPdf: 'el-nino-que-suena-ciencia.pdf',
  duracionEstimada: '12-15 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesElNino: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'El Niño que Sueña Ciencia',
    descripcion:
      'Portada del Tomo III de la Colección MILC, El Niño que Sueña Ciencia, del Dr. Alvaro Cardenas Orozco (versión 2.0, edición revisada, octubre de 2026). Subtítulo: «La curiosidad es natural; la escuela debe darle método al sueño (sin apagarlo).» Sello Sor María Juliana Ediciones e Institución Educativa Sor María Juliana (Cartago, Valle del Cauca); acceso abierto con licencia CC BY-SA 4.0 y DOI de concepto 10.5281/zenodo.21360910.',
  },
  {
    numero: 2,
    titulo: 'El asombro no pide permiso',
    descripcion:
      'Epígrafe del capítulo 1: «El asombro no pide permiso: llega antes que la escuela y, a veces, le sobrevive.» El libro llama sentido investigador a la disposición a detenerse ante lo desconocido y buscar cómo comprenderlo: una categoría pedagógica que la escuela puede reconocer, ampliar y cuidar, que no equivale a un sentido biológico adicional ni supone que el niño ya domina el método científico. Lo ilustra el semillero Betelgeuse, que Juan y un grupo de compañeros fundaron en 2020-2021, durante el encierro de la pandemia, sin laboratorio y con el cielo como punto de partida.',
  },
  {
    numero: 3,
    titulo: 'Preguntar, explorar y desarmar',
    descripcion:
      'Antes de leer o escribir, el niño ya investiga con «las tres herramientas más antiguas del oficio: preguntar, explorar y desarmar». Para el libro, la diferencia entre ese niño y un científico no es de naturaleza, sino de método. También advierte que explorar un charco puede ser a la vez jugar y observar, y que convertir esa observación en evidencia requiere acompañamiento.',
  },
  {
    numero: 4,
    titulo: 'De la curiosidad ingenua a la epistemológica',
    descripcion:
      'Siguiendo a Freire (1996/1997), el libro distingue la curiosidad ingenua (espontánea, del sentido común) de la epistemológica (metódica y rigurosa), y sostiene que la segunda continúa a la primera sin romperla. «Toda la pedagogía del modelo cabe en un solo verbo: cultivar», que no es instalar ni arrancar. El rigor no se impone contra el deseo: llega cuando el maestro acompaña la curiosidad hasta que ella misma choca con su propio límite y pide método.',
  },
  {
    numero: 5,
    titulo: 'Qué apaga la curiosidad y qué la protege',
    descripcion:
      'La Parte II nombra tres apagadores: el modelo bancario descrito por Freire (1968/1970), que domestica la pregunta hasta reducirla a «¿esto entra en la prueba?»; el mercado de la atención, que compite por la mirada desde el bolsillo; y el «¿por qué?» corregido por la prisa, el temario y el reloj. Frente a ellos, el libro propone la educación problematizadora, la pantalla que crea (producir algo propio y explicarlo a otros) y el tiempo del asombro, con un tablero de preguntas vivas. Los nombra «no para lamentarnos, sino para poder dejar de apagarlo».',
  },
  {
    numero: 6,
    titulo: 'El método como alcance',
    descripcion:
      'En el capítulo 8, el método no es un conjunto de reglas para vigilar al estudiante, sino un repertorio de herramientas para ampliar su alcance, en distancia y en hondura. Los cuatro peldaños (medir, documentar, escribir y publicar) llevan la idea cada vez más lejos; la prueba no es que el trabajo se vea prolijo, sino que la idea llegó más lejos gracias a él. Con las herramientas digitales y la IA rige una regla: «la herramienta se usa para amplificar el pensamiento del estudiante, nunca para reemplazarlo».',
  },
  {
    numero: 7,
    titulo: 'El maestro que no apaga',
    descripcion:
      'El capítulo 9 retoma la mayéutica socrática (Platón, ca. 369 a. C./1988): el maestro que no apaga no se ausenta, acompaña «desde un lado en vez de dominar desde el centro». Su protocolo, el silencio productivo, pide no responder de inmediato, contar hasta tres, devolver la pregunta al grupo y tolerar el silencio. En 2026, Jana preparó y condujo una sesión sobre los primeros trajes espaciales, y Tomás y Matías capacitaron para las campañas IASC a estudiantes de la jornada de la mañana.',
  },
  {
    numero: 8,
    titulo: 'El ciclo del asombro',
    descripcion:
      'La Parte IV organiza la investigación en cuatro fases (Escucha, Sistematización, Proyección y Liberación) alrededor de la pregunta, el territorio y la comunidad. La evaluación acompaña todo el recorrido, y el ciclo admite volver a cualquier fase anterior para revisar la pregunta, el registro o la propuesta. Las cuatro fases se corresponden con los cinco momentos de la obra matriz, el Tomo 0 (Escucha, Sistematización, Praxis, Evaluación liberadora y Devolución).',
  },
  {
    numero: 9,
    titulo: 'Del territorio a la evidencia',
    descripcion:
      'La Escucha parte de un problema que el territorio ya conoce, como en el proyecto «Estudiando las inundaciones» (2023), o de una maravilla cercana, como el cielo de la línea AstroData / AstroLumen. La Sistematización convierte impresiones en evidencia: con EcoTIC (2025), los estudiantes pasaron de hablar del ambiente a medirlo con placas micro:bit y sensores. Su regla de honestidad es que los datos marquen la diferencia entre «yo creo» y «yo lo medí».',
  },
  {
    numero: 10,
    titulo: 'De la propuesta a la comunidad',
    descripcion:
      'La Proyección se atreve a proponer y aprende de la prueba, como el sistema de riego autónomo (2017-2019) o HandSpeak, que reconoce 27 letras dactilológicas y seis señas de cortesía de la Lengua de Señas Colombiana, sin equivaler a traducirla y con la validación de la comunidad sorda aún pendiente. La Liberación, la «L» de MILC, libera dos veces: al conocimiento, que sale a circular, y al estudiante, que pasa de recipiente a productor y donante de saber. Luisa llevó un taller de constelaciones a la IE Alfonso López Pumarejo (2024) y, con Sebastián, presentó el trabajo del semillero en el Primer Encuentro Rotario de Semilleros STEAM (2024).',
  },
  {
    numero: 11,
    titulo: 'Las arenas de la ciencia real',
    descripcion:
      'Las tres primeras arenas forman lo que el libro llama una «escalera de libertad»: cumplir un protocolo ajeno, llenar un molde con contenido propio y defender un camino elegido por los estudiantes; la publicación, cuarta y última, da al saber su forma más duradera. Cada peldaño entrega más libertad y pide, a cambio, más responsabilidad. En el semillero, el registro institucional consigna dieciséis estudiantes certificados en las tres campañas IASC de 2024, y según el registro del autor «Estudiando las inundaciones» avanzó en 2023 al grupo de 50 proyectos seleccionados de Samsung Solve for Tomorrow.',
  },
  {
    numero: 12,
    titulo: 'Defender lo propio y volverse autor',
    descripcion:
      'En la Feria de Energía de Pereira, la participación creció desde 2023 (un cuarto y un quinto puesto) hasta cerca de cuarenta y ocho proyectos de sexto a once en 2025, y el libro recuerda que «la ciencia no es tener razón, sino estar dispuesto a corregirse en público». En publicaciones, del semillero de astronomía salió ¿Qué vemos en el cielo? Astronomía para jóvenes curiosos, de León (2023), y la institución publicó los volúmenes 1 y 2 de la revista CosmoTEC (2023 y 2024), con artículos de estudiantes y docentes. La regla es «publicar poco y verdadero antes que mucho y falso».',
  },
  {
    numero: 13,
    titulo: 'Instrumentos del oficio',
    descripcion:
      'El Cuaderno del Ciclo del Asombro reúne los diecisiete protocolos del libro, ordenados por el momento del ciclo en que sirven, y el Atlas de Arenas reúne las puertas reales para salir al mundo, con condiciones que se confirman cada año en la fuente oficial. No se usan todos a la vez: se toma el que la tarea pide, y casi todos son gratuitos o de bajo costo. La bitácora del asombro, la primera, «no mide lo que el estudiante sabe, mide lo que quiere saber»; la prueba de cualquier instrumento es si el estudiante llega más lejos con él que sin él.',
  },
  {
    numero: 14,
    titulo: 'Matriz de progresión de 6.º a 11.º',
    descripcion:
      'El capítulo 19 lleva el ciclo a toda la institución, porque «investigar no puede ser el privilegio de un semillero de elegidos». La progresión es flexible y retoma el mismo ciclo en espiral (Bruner, 1960), con más profundidad, autonomía y alcance en cada etapa; ninguna fase queda reservada a un grado. La sostiene la evaluación liberadora, que valora el proceso con autoevaluación y coevaluación, y el libro aconseja empezar por una sola etapa y subir un grado por año. La matriz «es un mapa vivo, no un decreto».',
  },
  {
    numero: 15,
    titulo: 'El relevo del asombro',
    descripcion:
      'Cierre del libro: la señal de que un aula formó de verdad no es una medalla sino la continuidad, cuando los que aprendieron enseñan y el asombro pasa de una generación de estudiantes a la siguiente. En 2026, Tomás lideró la primera campaña de búsqueda de asteroides del año y ayudó a formar a nuevos líderes: «El asombro de unos pocos se había convertido en el patrimonio de muchos.» La invitación final al maestro es «volver a pedir preguntas, y tratarlas como si valieran».',
  },
];
