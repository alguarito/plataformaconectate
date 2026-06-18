/**
 * Types de la base de datos de ConcienciA.
 *
 * Estos types se pueden regenerar automáticamente desde el esquema vivo con:
 *
 *   npx supabase gen types typescript --project-id zvvylehmgfrggpghrskd > src/lib/database.types.ts
 *
 * Mientras tanto, esta versión está escrita a mano siguiendo db/schema.sql.
 * Si modificas el esquema, regenera este archivo.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type RolEnrollment = 'student' | 'teacher' | 'observer';
export type EstadoRegistro = 'pendiente' | 'firmado' | 'expirado' | 'rechazado';
export type TipoEventoArco =
  | 'acceso'
  | 'rectificacion'
  | 'cancelacion'
  | 'oposicion'
  | 'revocacion';

export interface Database {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string;
          display_name: string;
          fecha_nacimiento: string | null;
          rol: 'estudiante' | 'docente';
          creado_en: string;
          actualizado_en: string;
        };
        Insert: {
          id: string;
          display_name: string;
          fecha_nacimiento?: string | null;
          rol?: 'estudiante' | 'docente';
          creado_en?: string;
          actualizado_en?: string;
        };
        Update: {
          id?: string;
          display_name?: string;
          fecha_nacimiento?: string | null;
          rol?: 'estudiante' | 'docente';
          creado_en?: string;
          actualizado_en?: string;
        };
      };
      aulas: {
        Row: {
          id: string;
          docente_id: string;
          grado: number;
          periodo: number;
          ano: number;
          codigo_acceso: string;
          nombre: string | null;
          creado_en: string;
        };
        Insert: {
          id?: string;
          docente_id: string;
          grado: number;
          periodo: number;
          ano: number;
          codigo_acceso: string;
          nombre?: string | null;
          creado_en?: string;
        };
        Update: {
          id?: string;
          docente_id?: string;
          grado?: number;
          periodo?: number;
          ano?: number;
          codigo_acceso?: string;
          nombre?: string | null;
          creado_en?: string;
        };
      };
      enrollments: {
        Row: {
          id: number;
          usuario_id: string;
          aula_id: string;
          rol: RolEnrollment;
          associated_user_id: string | null;
          creado_en: string;
        };
        Insert: {
          id?: number;
          usuario_id: string;
          aula_id: string;
          rol: RolEnrollment;
          associated_user_id?: string | null;
          creado_en?: string;
        };
        Update: {
          id?: number;
          usuario_id?: string;
          aula_id?: string;
          rol?: RolEnrollment;
          associated_user_id?: string | null;
          creado_en?: string;
        };
      };
      progreso_guia: {
        Row: {
          id: number;
          estudiante_id: string;
          guia_clave: string;
          porcentaje: number;
          ultima_estacion: string | null;
          completada_en: string | null;
          actualizado_en: string;
        };
        Insert: {
          id?: number;
          estudiante_id: string;
          guia_clave: string;
          porcentaje?: number;
          ultima_estacion?: string | null;
          completada_en?: string | null;
          actualizado_en?: string;
        };
        Update: {
          id?: number;
          estudiante_id?: string;
          guia_clave?: string;
          porcentaje?: number;
          ultima_estacion?: string | null;
          completada_en?: string | null;
          actualizado_en?: string;
        };
      };
      intentos_quiz: {
        Row: {
          id: number;
          estudiante_id: string;
          guia_clave: string;
          quiz_id: string;
          respuestas: Json;
          puntaje: number | null;
          duracion_seg: number | null;
          realizado_en: string;
        };
        Insert: {
          id?: number;
          estudiante_id: string;
          guia_clave: string;
          quiz_id: string;
          respuestas: Json;
          puntaje?: number | null;
          duracion_seg?: number | null;
          realizado_en?: string;
        };
        Update: {
          id?: number;
          estudiante_id?: string;
          guia_clave?: string;
          quiz_id?: string;
          respuestas?: Json;
          puntaje?: number | null;
          duracion_seg?: number | null;
          realizado_en?: string;
        };
      };
      progreso_proyecto: {
        Row: {
          id: number;
          estudiante_id: string;
          grado: number;
          periodo: number;
          completada_en: string | null;
        };
        Insert: {
          id?: number;
          estudiante_id: string;
          grado: number;
          periodo: number;
          completada_en?: string | null;
        };
        Update: {
          id?: number;
          estudiante_id?: string;
          grado?: number;
          periodo?: number;
          completada_en?: string | null;
        };
      };
      registros_pendientes: {
        Row: {
          id: string;
          codigo_aula: string;
          estudiante_display_name: string;
          estudiante_fecha_nacimiento: string;
          acudiente_email: string;
          otp_hash: string | null;
          otp_expira_en: string | null;
          estado: EstadoRegistro;
          creado_en: string;
        };
        Insert: {
          id?: string;
          codigo_aula: string;
          estudiante_display_name: string;
          estudiante_fecha_nacimiento: string;
          acudiente_email: string;
          otp_hash?: string | null;
          otp_expira_en?: string | null;
          estado?: EstadoRegistro;
          creado_en?: string;
        };
        Update: {
          id?: string;
          codigo_aula?: string;
          estudiante_display_name?: string;
          estudiante_fecha_nacimiento?: string;
          acudiente_email?: string;
          otp_hash?: string | null;
          otp_expira_en?: string | null;
          estado?: EstadoRegistro;
          creado_en?: string;
        };
      };
      consentimientos_plataforma: {
        Row: {
          id: number;
          estudiante_id: string;
          acudiente_nombre: string;
          acudiente_cc: string;
          acudiente_email: string;
          acudiente_parentesco: 'padre' | 'madre' | 'tutor';
          version_politica: string;
          finalidades: string[];
          ano_lectivo: number;
          ip_firma: string | null;
          user_agent_firma: string | null;
          firmado_en: string;
          revocado_en: string | null;
          motivo_revocacion: string | null;
        };
        Insert: {
          id?: number;
          estudiante_id: string;
          acudiente_nombre: string;
          acudiente_cc: string;
          acudiente_email: string;
          acudiente_parentesco: 'padre' | 'madre' | 'tutor';
          version_politica: string;
          finalidades: string[];
          ano_lectivo: number;
          ip_firma?: string | null;
          user_agent_firma?: string | null;
          firmado_en?: string;
          revocado_en?: string | null;
          motivo_revocacion?: string | null;
        };
        Update: {
          id?: number;
          estudiante_id?: string;
          acudiente_nombre?: string;
          acudiente_cc?: string;
          acudiente_email?: string;
          acudiente_parentesco?: 'padre' | 'madre' | 'tutor';
          version_politica?: string;
          finalidades?: string[];
          ano_lectivo?: number;
          ip_firma?: string | null;
          user_agent_firma?: string | null;
          firmado_en?: string;
          revocado_en?: string | null;
          motivo_revocacion?: string | null;
        };
      };
      eventos_arco: {
        Row: {
          id: number;
          estudiante_id: string;
          tipo: TipoEventoArco;
          detalle: string | null;
          ejecutado_en: string;
        };
        Insert: {
          id?: number;
          estudiante_id: string;
          tipo: TipoEventoArco;
          detalle?: string | null;
          ejecutado_en?: string;
        };
        Update: {
          id?: number;
          estudiante_id?: string;
          tipo?: TipoEventoArco;
          detalle?: string | null;
          ejecutado_en?: string;
        };
      };
    };
    Functions: {
      tiene_consentimiento_vigente: {
        Args: { _estudiante_id: string };
        Returns: boolean;
      };
      es_docente_de: {
        Args: { _docente_id: string; _estudiante_id: string };
        Returns: boolean;
      };
      anos_disponibles: {
        Args: Record<PropertyKey, never>;
        Returns: { ano: number; aulas: number }[];
      };
      resumen_docente: {
        Args: { _ano?: number };
        Returns: Json;
      };
      embudo_registro: {
        Args: { _ano?: number };
        Returns: Json;
      };
      serie_actividad: {
        Args: { _desde: string; _hasta: string; _bucket?: string; _grado?: number };
        Returns: {
          periodo_inicio: string;
          guias_actividad: number;
          quiz_intentos: number;
          estudiantes_activos: number;
        }[];
      };
      estudiantes_en_riesgo: {
        Args: { _ano?: number; _grado?: number };
        Returns: {
          estudiante_id: string;
          display_name: string;
          progreso_promedio: number;
          ultima_actividad: string | null;
          dias_inactivo: number | null;
        }[];
      };
      resumen_por_grado: {
        Args: { _ano?: number };
        Returns: {
          grado: number;
          aulas: number;
          estudiantes: number;
          guias_completadas: number;
          progreso_promedio: number;
          quiz_intentos: number;
          quiz_promedio: number | null;
          activos_30d: number;
        }[];
      };
      resumen_por_periodo: {
        Args: { _ano?: number; _grado?: number };
        Returns: {
          periodo: number;
          aulas: number;
          estudiantes: number;
          guias_completadas: number;
          progreso_promedio: number;
          quiz_intentos: number;
          quiz_promedio: number | null;
        }[];
      };
      cobertura_guias: {
        Args: { _ano?: number; _grado?: number };
        Returns: {
          guia_clave: string;
          grado: number;
          periodo: number;
          sesion: number;
          con_progreso: number;
          completadas: number;
          progreso_promedio: number;
        }[];
      };
      desempeno_examenes: {
        Args: { _ano?: number; _grado?: number };
        Returns: {
          quiz_id: string;
          guia_clave: string;
          total_intentos: number;
          promedio: number | null;
          aprobados: number;
          p25: number | null;
          p50: number | null;
          p75: number | null;
        }[];
      };
    };
    Enums: {
      rol_enrollment: RolEnrollment;
      estado_registro: EstadoRegistro;
      tipo_evento_arco: TipoEventoArco;
    };
  };
}
