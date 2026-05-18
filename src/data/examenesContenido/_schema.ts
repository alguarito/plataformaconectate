/**
 * Esquema del banco de práctica de exámenes finales (Plataforma Conéctate).
 *
 * Auto-generado desde content/examenes/{grado}-{periodo}.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no estos archivos.
 *
 * Reutiliza el tipo LabQuiz de las guías para que el componente
 * <LabQuiz /> ya existente pueda renderizar el banco sin cambios.
 *
 * Disciplina clave: el examen FORMAL (5 preguntas) NO se renderiza online;
 * solo vive como PDF. La web únicamente expone el BANCO DE PRÁCTICA (20-30
 * preguntas de opción múltiple) para que el estudiante se autoevalúe entre
 * clases. Esa separación preserva el carácter sumativo del instrumento
 * formal.
 */
import type { LabQuiz } from '../guiasContenido/_schema';

export interface ContenidoExamen {
  grado: number;
  periodo: number;
  /** Título completo del examen (para hero y SEO). */
  titulo: string;
  /** Duración estimada de aplicación del examen formal (PDF) en minutos. */
  duracionMin: number;
  /** Porcentaje del periodo que pondera el examen formal. */
  ponderacion: number;
  /** Cuándo se aplica el examen formal (típicamente "Sesión 10"). */
  fechaAplicacion: string;
  /**
   * Banco de práctica reutilizando el tipo LabQuiz. El componente
   * <LabQuiz /> lo renderiza tal cual con feedback inmediato.
   */
  bancoPractica: LabQuiz;
}

export function claveExamen(grado: number, periodo: number): string {
  return `${grado}-${periodo}`;
}
