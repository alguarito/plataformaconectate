/**
 * Cliente Supabase tipado para Plataforma Conéctate.
 *
 * Uso:
 *   import { supabase } from '@/lib/supabase';
 *   const { data, error } = await supabase.from('progreso_guia').select('*');
 *
 * Variables de entorno requeridas (en .env.local):
 *   PUBLIC_SUPABASE_URL
 *   PUBLIC_SUPABASE_ANON_KEY
 *
 * Si PUBLIC_AUTH_ENABLED=false, el módulo aún se importa pero no se conecta
 * activamente — todas las funciones del sitio que no usen supabase siguen
 * funcionando idénticas a hoy.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[supabase] PUBLIC_SUPABASE_URL o PUBLIC_SUPABASE_ANON_KEY no están definidas. ' +
      'El cliente Supabase no funcionará. Verifica .env.local.'
  );
}

/**
 * Cliente público de Supabase.
 * Usa la publishable key (segura para exponer con RLS activa).
 */
export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder_key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      // Storage en localStorage para que sobreviva offline
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    },
  }
);

/**
 * Indica si el feature de auth+BD está activado para este build.
 * Cuando es false, el sitio se comporta exactamente como antes.
 */
export const authEnabled = import.meta.env.PUBLIC_AUTH_ENABLED === 'true';

/**
 * Helper: ¿hay sesión activa?
 */
export async function tieneSesion(): Promise<boolean> {
  if (!authEnabled) return false;
  const { data } = await supabase.auth.getSession();
  return Boolean(data.session);
}

/**
 * Helper: ID del usuario autenticado, o null.
 */
export async function getUsuarioId(): Promise<string | null> {
  if (!authEnabled) return null;
  const { data } = await supabase.auth.getUser();
  return data.user?.id ?? null;
}
