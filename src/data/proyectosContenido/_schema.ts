/**
 * Esquema del contenido web de los proyectos integradores MILC v3.
 *
 * Auto-generado desde content/proyectos/{grado}-{periodo}.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no estos archivos.
 *
 * Modelo entregable-céntrico: el proyecto se vertebra en 3-5 entregables
 * concretos. Cada entregable lleva su consigna, sus pasos, una reflexión
 * del triángulo (Dussel/Estoico/Floridi) incrustada en el producto, y los
 * criterios observables que se evalúan en la rúbrica.
 */

export type LenteTriangulo = 'dussel' | 'estoico' | 'floridi';

export interface AprendizajeProyecto {
  sesion: number;
  titulo: string;
}

export interface ReflexionEntregable {
  lente: LenteTriangulo;
  titulo: string;
  consigna: string;
}

export interface EntregableProyecto {
  numero: number;
  titulo: string;
  queEntregas: string;
  comoSeHace: string[];
  reflexion: ReflexionEntregable;
  criterios: string[];
}

export interface RubricaItem {
  /** Número de entregable, o "global" para el criterio transversal. */
  entregable: number | 'global';
  /** Solo presente cuando `entregable === 'global'`. */
  titulo?: string;
  nivel5: string;
  nivel3: string;
  nivel1: string;
}

export interface SustentacionProyecto {
  duracionMin: number;
  guionSugerido: string[];
}

export interface ContenidoProyecto {
  grado: number;
  periodo: number;
  clave: string;
  titulo: string;
  tituloPortada: string;
  autor: string;
  dba: string;
  estrategia: string;
  duracionSemanas: number;
  modalidad: string;
  reto: string;
  insumos: string[];
  anclaje: string;
  aprendizajes: AprendizajeProyecto[];
  entregables: EntregableProyecto[];
  rubrica: RubricaItem[];
  sustentacion: SustentacionProyecto;
  declaracionIa: string;
  cierre: string;
  /** Nombre del archivo PDF en /public/proyectos/ (ej. "proyecto-1-6-TIC.pdf"). */
  pdf: string;
}

export function claveProyecto(grado: number, periodo: number): string {
  return `${grado}-${periodo}`;
}
