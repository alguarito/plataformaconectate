/**
 * Metadata de la presentación "El niño que sueña ciencia" — Tomo III de la
 * Colección MILC, generada con NotebookLM y curada por el Dr. Álvaro
 * Cárdenas Orozco.
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
    'La curiosidad es un sentido natural del ser; la escuela no la enseña, le da método sin apagarla · Presentación del Tomo III de la Colección MILC',
  autor: 'PhD. Álvaro Cárdenas Orozco',
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
    titulo: 'El niño que sueña ciencia',
    descripcion:
      'Portada. Tomo III de la Colección MILC: «La curiosidad es natural; la escuela debe darle método al sueño (sin apagarlo)». Dr. Álvaro Cárdenas Orozco · I.E. Sor María Juliana.',
  },
  {
    numero: 2,
    titulo: 'El asombro no pide permiso',
    descripcion:
      'Epígrafe: «El asombro no pide permiso: llega antes que la escuela y, a veces, le sobrevive». El sentido investigador es la facultad natural de captar lo desconocido y sentirse atraído por ello; igual que nacemos con la vista para la luz, nacemos con un sentido que capta lo que no sabemos. No se instala: se trae.',
  },
  {
    numero: 3,
    titulo: 'Nacidos preguntando: las tres herramientas del oficio',
    descripcion:
      'El niño ya investiga con tres herramientas antiguas. Preguntar: reconocer que hay algo que no se sabe y que se puede saber. Explorar: la pregunta hecha cuerpo (tocar, mover, comprobar; la mano en el charco). Desarmar: sospechar que detrás de la superficie hay un mecanismo (el mundo no es magia, tiene partes comprensibles).',
  },
  {
    numero: 4,
    titulo: 'La síntesis: de ingenua a epistemológica',
    descripcion:
      'De la curiosidad ingenua (el sentido común espontáneo, la materia prima) a la curiosidad epistemológica (metódica, exigente, rigurosa) mediante el verbo CULTIVAR. La escuela no reemplaza la curiosidad: la hace crecer hasta que ella misma pide rigor, sin perder su fuego original.',
  },
  {
    numero: 5,
    titulo: 'Lo que apaga el sueño vs. el rescate MILC',
    descripcion:
      'Tabla de contrastes. Apagadores: modelo bancario (domestica la pregunta a «¿esto entra en el examen?»), mercado de la atención (consumo pasivo) y el «¿por qué?» corregido (la prisa aplaza las preguntas). Rescate MILC: la pregunta liberada (el estudiante como productor de saber), la pantalla que crea (tecnología para construir) y el tiempo del asombro (defender la demora y la digresión fértil).',
  },
  {
    numero: 6,
    titulo: 'El método como alcance',
    descripcion:
      'El método no es una jaula, es un bastón: un repertorio de herramientas para amplificar el pensamiento. Recorrido que da alcance a la curiosidad: medir (la impresión se vuelve dato), documentar (la observación se vuelve evidencia), escribir (la intuición se vuelve argumento) y publicar (el hallazgo llega a otros).',
  },
  {
    numero: 7,
    titulo: 'El rol del maestro: el silencio productivo',
    descripcion:
      'La prueba de fuego del educador MILC es ceder el frente del aula: guardarse la respuesta inmediata y tolerar tres segundos de incomodidad para dar luz a la pregunta del estudiante en vez de taparla. El maestro no desaparece: acompaña desde un lado, no desde el centro, y deja que un estudiante enseñe a sus pares.',
  },
  {
    numero: 8,
    titulo: 'El motor: el ciclo del asombro',
    descripcion:
      'Un ritmo natural para investigar, no un formulario para llenar. Las cuatro fases MILC en rueda alrededor del núcleo: Escucha (atender al territorio), Sistematización (convertir la maravilla en datos), Proyección (el coraje de proponer) y Liberación (devolver el saber).',
  },
  {
    numero: 9,
    titulo: 'Fase 1 y 2: del territorio a la evidencia',
    descripcion:
      'Escucha: investigar empieza por callar; el territorio ya estaba hablando antes de que llegáramos, con actitud sentipensante (output: la pregunta situada, concreta y local). Sistematización: convertir impresiones en datos con la ética de la honestidad, sin inventar ni «arreglar» ningún dato (output: la bitácora de datos, la diferencia entre «yo creo» y «yo lo medí»).',
  },
  {
    numero: 10,
    titulo: 'Fase 3 y 4: de la propuesta a la comunidad',
    descripcion:
      'Proyección: el salto más audaz; el asombro deja de solo mirar y se atreve a intervenir en el mundo (output: explicaciones, hipótesis y prototipos). Liberación: la «L» de MILC; investigar con y para el territorio, no sobre él (Fals Borda); el estudiante pasa de recipiente a productor y donante de conocimiento.',
  },
  {
    numero: 11,
    titulo: 'Las arenas de la ciencia real: la escalera de la autonomía',
    descripcion:
      'Escalera de rigor y alcance frente a libertad y responsabilidad. Ciencia ciudadana (rigor prestado: aceptar un protocolo externo como IASC o GLOBE), convocatorias (el molde que da forma), ferias de ciencia (libertad orientada: método propio bajo criterios y escrutinio externo) y publicaciones (autoría joven: un registro permanente y ético con DOI o ISSN).',
  },
  {
    numero: 12,
    titulo: 'El escrutinio y el legado',
    descripcion:
      'Sustentación en ferias (p. ej. RedCOLSI): defender el propio trabajo en público convierte la investigación en un acto social y enseña a ser libre con responsabilidad. Autoría joven en publicaciones: devolverle al mundo la respuesta con ética estricta (consentimiento, datos 100 % reales, proteger la identidad usando solo el primer nombre); el conocimiento deja huella en Zenodo y revistas.',
  },
  {
    numero: 13,
    titulo: 'Instrumentos del oficio (el cuaderno del ciclo)',
    descripcion:
      'Cuatro instrumentos concretos y sin costo. Bitácora del asombro (mide lo que el estudiante quiere saber, no lo que sabe), tablero de preguntas vivas (un rincón para guardar dudas inesperadas en vez de aplazarlas), plantilla de bitácora (cinco columnas para exigir evidencia) y kit de escritura (estructura IMRyD escolar con trazabilidad ética de las herramientas).',
  },
  {
    numero: 14,
    titulo: 'El aula sistémica: matriz de progresión (6.º a 11.º)',
    descripcion:
      'La investigación no es para un semillero de elegidos: es un derecho transversal y escalonado. Grados 6.º-7.º: despertar y escuchar (observación, bitácora del asombro, preguntas situadas). Grados 8.º-9.º: el ciclo y primeras arenas (sistematización formal, ciencia ciudadana, primeros prototipos). Grados 10.º-11.º: publicación y liderazgo (ferias, autoría joven y formar a los grados menores).',
  },
  {
    numero: 15,
    titulo: 'El relevo del asombro',
    descripcion:
      'Cierre. La prueba de que el aula funcionó no es una medalla, es la continuidad: cuando los estudiantes formados capacitan a las siguientes generaciones, el asombro deja de ser un momento y se vuelve herencia. «El niño que soñó ciencia no despertó del sueño: aprendió a construirlo».',
  },
];
