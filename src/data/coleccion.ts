/**
 * Colección MILC · capa web sobre src/data/coleccion.json (fuente única, compartida con el libro).
 *
 * El JSON guarda los datos editoriales (títulos, DOI de concepto, licencias, capítulos del
 * Tomo 0 que profundiza cada tomo, archivos). Aquí solo se añade lo que es de la web:
 * rutas con BASE_URL, URL de DOI, color Bento y emoji. Nunca se duplican datos del JSON.
 */
import datos from './coleccion.json';

export type Romano = '0' | 'I' | 'II' | 'III' | 'IV' | 'V';
export type RolArchivo = 'libro' | 'cuaderno' | 'hojas-carta' | 'hojas-a4';

interface ArchivoDatos {
  rol: RolArchivo;
  /** Carpeta relativa a public/, sin barras extremas. */
  carpeta: string;
  /** Nombre EXACTO del archivo (el libro y el cuaderno se enlazan por nombre relativo). */
  nombre: string;
  paginas?: number;
  formato?: string;
  /** Peso exacto en bytes (el de la entrega congelada para el Tomo 0). */
  bytes?: number;
}

interface LibroDatos {
  romano: Romano;
  numero: number;
  /** Fragmento estable del JSON-LD en /modelo-milc (#libro, #tomo1…). No cambiar. */
  id: string;
  /** Ruta bajo /modelo-milc ('' = la página del Tomo 0). */
  slug: string;
  titulo: string;
  subtitulo: string;
  papel: 'obra matriz' | 'tomo';
  dimension: string;
  pregunta: string;
  pregunta_corta: string;
  sintesis: string;
  doi: string;
  licencia: string;
  licencia_url: string;
  profundiza: number[];
  edicion: string;
  version?: string; // solo los tomos que ya la declaran (Tomo 0: «3.0»)
  fecha: string;
  cita_key: string;
  archivos: ArchivoDatos[];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Solo presentación web (no va al JSON compartido). */
const presentacion: Record<Romano, { color: string; emoji: string }> = {
  '0': { color: 'bg-bento-purple', emoji: '📕' },
  I: { color: 'bg-bento-lime', emoji: '📗' },
  II: { color: 'bg-bento-orange', emoji: '📘' },
  III: { color: 'bg-bento-blue', emoji: '📙' },
  IV: { color: 'bg-bento-yellow', emoji: '📒' },
  V: { color: 'bg-bento-black', emoji: '📗' },
};

const urlArchivo = (a: ArchivoDatos) => `${base}/${a.carpeta}/${encodeURIComponent(a.nombre)}`;

/** «6,6 MB» / «47 KB», para los botones de descarga. */
export const peso = (bytes?: number) =>
  bytes == null ? '' : bytes >= 1e6 ? `${(bytes / 1e6).toFixed(1).replace('.', ',')} MB` : `${Math.round(bytes / 1e3)} KB`;

export const coleccion = datos.coleccion;

export const libros = (datos.libros as LibroDatos[]).map((l) => {
  const archivos = l.archivos.map((a) => ({ ...a, url: urlArchivo(a) }));
  return {
    ...l,
    ...presentacion[l.romano],
    etiqueta: `Tomo ${l.romano}`,
    href: `${base}/modelo-milc${l.slug ? `/${l.slug}` : ''}`,
    doiUrl: `https://doi.org/${l.doi}`,
    archivos,
    /** PDF principal (rol "libro"). */
    pdf: archivos.find((a) => a.rol === 'libro')!.url,
    paginas: archivos.find((a) => a.rol === 'libro')?.paginas,
  };
});

export type Libro = (typeof libros)[number];

export const tomo = (r: Romano): Libro => {
  const l = libros.find((x) => x.romano === r);
  if (!l) throw new Error(`Colección MILC: no existe el Tomo ${r}`);
  return l;
};

/** Tomo que profundiza un capítulo del Tomo 0 (marcas «Para profundizar»). */
export const tomoQueProfundiza = (capitulo: number): Libro | undefined =>
  libros.find((l) => l.profundiza.includes(capitulo));

/** Lista "1 y 3" / "2, 5 y 11". */
export const listaCapitulos = (caps: number[]) =>
  caps.length <= 1 ? caps.join('') : `${caps.slice(0, -1).join(', ')} y ${caps[caps.length - 1]}`;
