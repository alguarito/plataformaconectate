/**
 * Tomo 0 · obra matriz · datos de presentación web que comparten /modelo-milc (el modelo)
 * y /modelo-milc/educacion-en-la-era-onlife (la ficha del libro). Los datos editoriales
 * salen de src/data/coleccion.json; aquí solo va lo que arma la web con ellos.
 */
import { tomo, tomoQueProfundiza, peso } from './coleccion';

const t0 = tomo('0');

// En la cita y en Zenodo el subtítulo va con coma: «…Onlife: MILC, Modelo de…».
export const tituloCompletoTomo0 = `${t0.titulo}: ${t0.subtitulo.replace(/^MILC: /, 'MILC, ')}`;

// Botones de descarga del Tomo 0: uno por archivo, con su nombre exacto.
const etiquetaArchivo: Record<string, string> = {
  libro: 'Libro',
  cuaderno: 'Cuaderno de trabajo',
  'hojas-carta': 'Hojas F01–F16 · Carta',
  'hojas-a4': 'Hojas F01–F16 · A4',
};
export const descargasTomo0 = t0.archivos.map((a) => {
  const esHoja = a.rol === 'hojas-carta' || a.rol === 'hojas-a4';
  return {
    ...a,
    etiqueta: etiquetaArchivo[a.rol],
    detalle: `${a.paginas} ${esHoja ? 'hojas' : 'págs.'} · ${peso(a.bytes)}`,
    principal: !esHoja,
  };
});

// Estructura real de la obra matriz (versión 3.0 · 11 capítulos en 5 partes + epílogo).
// `ruta` = la «Ruta del capítulo» que abre cada capítulo en el libro (en el 1, su mapa de lectura).
// «Para profundizar» sale de coleccion.json (tomoQueProfundiza); el capítulo 9 no tiene tomo.
const momentosCiclo = ['Escucha', 'Sistematización', 'Praxis', 'Evaluación liberadora', 'Devolución'];
export const libroEstructura = [
  {
    parte: 'I',
    titulo: 'Crisis onlife',
    capitulos: [
      { n: 1, titulo: 'El Mercado de la Mirada', ruta: ['Atención', 'Biografía', 'Curiosidad', 'Escuela', 'Autoría', 'Comunidad', 'Docencia'], desc: 'La atención como territorio en disputa: la escuela recupera la mirada antes de pretender educar con tecnología.' },
    ],
  },
  {
    parte: 'II',
    titulo: 'Genealogía y sujeto',
    capitulos: [
      { n: 2, titulo: 'Genealogía del Futuro', ruta: ['Palabra', 'Infoesfera', 'Ética', 'Territorio'], desc: 'Las raíces críticas del modelo: Freire, Floridi, el estoicismo crítico y Dussel.' },
      { n: 3, titulo: 'La Re-ontologización del Sujeto', ruta: ['Información', 'Sentido', 'Carácter', 'Territorio'], desc: 'Un sujeto capaz de habitar la infoesfera sin renunciar a juicio, autoría ni dignidad.' },
    ],
  },
  {
    parte: 'III',
    titulo: 'Espacio y método',
    capitulos: [
      { n: 4, titulo: 'La Arquitectura del Encuentro', ruta: ['Espacio', 'Materia', 'Error', 'Comunidad'], desc: 'El Laboratorio-Ágora: un espacio que educa antes de que alguien pronuncie la primera palabra.' },
      { n: 5, titulo: 'El Ciclo de la Investigación Liberadora', ruta: momentosCiclo, desc: 'Un ciclo abierto de cinco momentos: se puede volver a cualquiera cuando la evidencia exige revisar el camino.' },
    ],
  },
  {
    parte: 'IV',
    titulo: 'Herramientas y tiempo',
    capitulos: [
      { n: 6, titulo: 'Las herramientas del oficio', ruta: ['Cartografía', 'Portafolio', 'IA', 'Mantenimiento'], desc: 'Cartografía social, portafolio de investigación e inteligencia artificial con criterio.' },
      { n: 7, titulo: 'Cronotopos de la práctica', ruta: ['Lentitud', 'Retorno', 'Urgencia', 'Memoria'], desc: 'Los tiempos de la investigación escolar: lo que una pregunta necesita para madurar.' },
    ],
  },
  {
    parte: 'V',
    titulo: 'Escalamiento, comunidad y movimiento',
    capitulos: [
      { n: 8, titulo: 'Escalando esperanzas', ruta: ['Incubar', 'Instituir', 'Formar', 'Federar'], desc: 'Una pedagogía crece cuando otras comunidades la apropian, la cuidan y la vuelven suya.' },
      { n: 9, titulo: 'ConectaTE como caso vivo', ruta: ['Memoria', 'Liderazgo', 'Producción', 'Cultura'], desc: 'La experiencia de la plataforma y su semillero, abierta a la discusión y a la verificación.' },
      { n: 10, titulo: 'Sostenibilidad y evidencia', ruta: ['Archivo', 'Evidencia', 'Cuidado', 'Relevo'], desc: 'Documentar con cuidado para que la experiencia dure y pueda pasar a otras manos.' },
      { n: 11, titulo: 'Red MILC y expansión territorial', ruta: ['Red', 'Mentoría', 'Apertura', 'Territorio'], desc: 'Una red para multiplicar la capacidad de aprender juntos, no para multiplicar una marca.' },
    ],
  },
].map((p) => ({
  ...p,
  capitulos: p.capitulos.map((c) => ({ ...c, profundiza: tomoQueProfundiza(c.n) })),
}));
export const totalCapitulos = libroEstructura.reduce((s, p) => s + p.capitulos.length, 0);
