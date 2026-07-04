/**
 * Metadata de la presentación "Pedagogía de la Querencia" — Tomo II de la
 * Colección MILC, generada con NotebookLM y curada por el Dr. Álvaro
 * Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/querencia/slide-NN.webp`
 * (15 imágenes, 1920×1080), junto al PDF descargable.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionQuerencia = {
  titulo: 'Pedagogía de la Querencia',
  subtitulo:
    'Reconstruir el aula para arraigar al estudiante en su territorio, su historia y sus saberes ancestrales · Presentación del Tomo II de la Colección MILC',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 15,
  archivoPdf: 'pedagogia-de-la-querencia.pdf',
  duracionEstimada: '12-15 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesQuerencia: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'Pedagogía de la Querencia',
    descripcion:
      'Portada. Reconstruir el aula para arraigar al estudiante en su territorio. Basado en la obra del Dr. Álvaro Cárdenas Orozco · Modelo MILC.',
  },
  {
    numero: 2,
    titulo: 'La paradoja silenciosa: educamos para la partida',
    descripcion:
      'El éxito escolar tiene una geografía implícita: felicitamos al que «llegó lejos» y graduamos a los estudiantes como extranjeros en su propia tierra. Dar alas sin dar raíces no es libertad: el progreso no debería exigir el desarraigo.',
  },
  {
    numero: 3,
    titulo: 'La Totalidad: el aula que se cree el mundo entero',
    descripcion:
      'Siguiendo a Enrique Dussel, la escuela tradicional opera como una Totalidad (un sistema cerrado que da por completo el conocimiento). El territorio, el Otro y el saber de casa quedan fuera: enseña el mundo entero, menos el pedazo de mundo que el estudiante pisa.',
  },
  {
    numero: 4,
    titulo: 'El «Punto Cero» y la colonialidad del saber',
    descripcion:
      'La ciencia escolar se presenta como una verdad sin domicilio («universal»), mientras el saber de la casa o del campo queda rebajado a «creencia» o «folclor». La Hybris del Punto Cero frente al Saber Situado (Cartago, Valle del Cauca).',
  },
  {
    numero: 5,
    titulo: 'El aula como «No-Lugar»',
    descripcion:
      'Marc Augé llamó no-lugares a los sitios de puro tránsito (aeropuertos, autopistas). Cuando el currículo no nombra el territorio, la escuela se vuelve un no-lugar cuyo único horizonte es salir. Un niño educado en tránsito nunca desarrolla querencia.',
  },
  {
    numero: 6,
    titulo: 'Las tres heridas del currículo invisible',
    descripcion:
      'Enseñar a mirar lo propio con ojos prestados deja tres fracturas: 1) Desarraigo epistémico (pérdida de confianza en el saber propio), 2) Desarraigo territorial (ceguera ante el entorno) y 3) Desarraigo identitario (vergüenza del origen).',
  },
  {
    numero: 7,
    titulo: 'La doble conciencia: el estudiante escindido',
    descripcion:
      'El lenguaje de la casa frente al lenguaje de la escuela. Epistemicidio (Boaventura de Sousa Santos): cuando el estudiante aprende que su vocabulario es «vulgar» y el oficio de sus padres «atraso», pierde el respeto por la mente de su propia gente.',
  },
  {
    numero: 8,
    titulo: 'Espacio vs. Lugar: la ceguera territorial',
    descripcion:
      'El Espacio (coordenadas, kilómetros, mapas abstractos, sin rostro) frente al Lugar (espacio cargado de significado: memoria, afecto, nombres). Un territorio que la escuela nunca nombra se apaga hasta volverse paisaje, y a un paisaje nadie lo defiende.',
  },
  {
    numero: 9,
    titulo: 'El espejo roto: la vergüenza del origen',
    descripcion:
      'La identidad se forma en el espejo de cómo nos miran los demás. Si el currículo, por omisión, le dice a un joven que su origen no es digno de conocimiento, la conclusión es trágica: él tampoco lo es. La vergüenza asoma en el acento corregido y el apellido silenciado.',
  },
  {
    numero: 10,
    titulo: 'El giro analéctico: abrir la puerta a la Exterioridad',
    descripcion:
      'Ninguna Totalidad es perfecta. El antídoto es la Exterioridad (la pregunta del barrio, la técnica de la partera, el dato de la abuela) con poder de transformar el centro. De la jerarquía colonial a una ecología de saberes que dialogan de igual a igual.',
  },
  {
    numero: 11,
    titulo: 'Dos paradigmas frente a frente',
    descripcion:
      'El Aula Abstracta (Totalidad) frente al Aula Situada (Querencia), comparadas en cuatro dimensiones: punto de partida, visión del estudiante, rol del territorio y objetivo final (preparar para irse frente a dar raíces para transformar y elegir).',
  },
  {
    numero: 12,
    titulo: 'Praxis I: de receptáculo a autor (Reparación Epistémica)',
    descripcion:
      'Firmar la paz entre el conocimiento de la casa y la ciencia de la escuela: el estudiante deja de ser consumidor para volverse productor. Ventana al Aula (El cielo propio): CosmoTEC y Betelgeuse (2023-2024), estudiantes de Cartago descubrieron asteroides y publicaron su libro.',
  },
  {
    numero: 13,
    titulo: 'Praxis II: del espacio al lugar (Reterritorialización)',
    descripcion:
      'No se puede amar lo que no se ha tocado: la escuela sale del edificio y usa el territorio como laboratorio. Ventana al Aula (El agua que faltaba): con EcoTIC y CIR, los estudiantes mapearon con SIG el riesgo de inundación de sus propias calles y ejercieron su derecho a la ciudad.',
  },
  {
    numero: 14,
    titulo: 'La Pedagogía de la Querencia: alas y raíces',
    descripcion:
      'La querencia no es nostalgia ni encierro: es una competencia educable que repara las tres heridas (epistémica → reparación, territorial → reterritorialización, identitaria → pertenencia). El estudiante con querencia no es el que se queda porque no pudo irse, sino el que, pudiendo irse, sabe que tiene un lugar al cual volver.',
  },
  {
    numero: 15,
    titulo: 'El derecho a quedarse',
    descripcion:
      'Para muchos, salir del territorio no ha sido una elección sino un desplazamiento. Formar querencia es defender un derecho que la escuela rara vez nombra: el derecho a quedarse. Si mañana todos pudieran irse, asegurémonos de haberles dado una razón para querer volver.',
  },
];
