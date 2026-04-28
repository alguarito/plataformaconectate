/**
 * Esquema de contenido enriquecido por guía.
 *
 * Cada guía puede tener una entrada en src/data/guiasContenido/{grado}-{periodo}-{sesion}.ts
 * que la página /grado-G/periodo-P/guia-S renderiza ANTES y DESPUÉS del visor PDF.
 *
 * Si una guía no tiene entrada, la página muestra el visor PDF más el scaffolding
 * genérico actual (compatibilidad total).
 *
 * Voz pedagógica: MILC con lenguaje cercano y juvenil — ni infantilizado, ni acartonado.
 * Trata al estudiante como "inforg" capaz, evita el etiquetado, abre puertas.
 */

/* ─────── Concepto clave ─────── */

export interface ConceptoClave {
  termino: string;
  definicion: string;
  ejemplo: string;
  emoji?: string;
}

/* ─────── Pre-lectura: contexto antes de abrir el PDF ─────── */

export interface PreLectura {
  /** Frase corta que motiva: "Esto te va a servir para..." */
  porQueImporta: string;
  /** Pregunta provocadora 1 línea — la usa el docente para abrir clase */
  preguntaDetonante: string;
  /** Mini-actividad de calentamiento (3-5 min) antes de leer la guía */
  activacion: {
    titulo: string;
    descripcion: string;
    duracionMin: number;
  };
  /** Conexión con sesiones previas y siguientes */
  conexion: {
    anterior?: string;
    siguiente?: string;
  };
}

/* ─────── Laboratorio web (quiz, visualización, etc.) ─────── */

export type LabTipo = 'quiz' | 'visualizacion' | 'sandbox' | 'simulacion';

export interface QuizPregunta {
  enunciado: string;
  opciones: string[];
  respuestaIndex: number;
  feedbackCorrecto: string;
  feedbackIncorrecto: string;
}

export interface LabQuiz {
  tipo: 'quiz';
  titulo: string;
  instrucciones: string;
  preguntas: QuizPregunta[];
}

export interface VisualizacionPaso {
  /** Título del paso */
  titulo: string;
  /** Texto explicativo del paso */
  texto: string;
  /** Bloque de código o ejemplo asociado */
  codigo?: string;
  /** Resaltado visual (líneas a destacar) */
  destacar?: number[];
}

export interface LabVisualizacion {
  tipo: 'visualizacion';
  titulo: string;
  instrucciones: string;
  pasos: VisualizacionPaso[];
}

export type Laboratorio = LabQuiz | LabVisualizacion;

/* ─────── Post-lectura: refuerzo después del PDF ─────── */

export interface PostLectura {
  /** Pregunta de reflexión profunda */
  reflexion: string;
  /** Transferencia: "encuentra ejemplos en tu vida" */
  transferencia: string;
  /** Cierre con frase MILC */
  cierre: string;
}

/* ─────── Estructura completa ─────── */

export interface ContenidoGuia {
  grado: number;
  periodo: number;
  sesion: number;

  /** Resumen muy breve mostrado debajo del título (1 línea) */
  resumen: string;

  /** Duración estimada en aula (minutos) */
  duracionMin: number;

  /** Etiqueta de subtema dentro del periodo */
  subtema?: string;

  /** Bloques pedagógicos */
  preLectura: PreLectura;
  conceptosClave: ConceptoClave[];
  laboratorios: Laboratorio[];
  postLectura: PostLectura;
}

/* ─────── Helper de lookup ─────── */

export function claveContenido(grado: number, periodo: number, sesion: number): string {
  return `${grado}-${periodo}-${sesion}`;
}
