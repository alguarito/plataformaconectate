/**
 * Helpers de autenticación para Plataforma Conéctate.
 *
 * Diseño:
 * - Auth opt-in: si PUBLIC_AUTH_ENABLED=false todas las funciones son no-ops.
 * - Persistencia: sesión en localStorage (compatible con PWA offline).
 * - Provider: Google OAuth via Supabase Auth.
 * - El perfil en public.usuarios se crea automáticamente vía trigger en BD
 *   (ver db/migrations/002-auto-create-usuarios.sql).
 */

import { supabase, authEnabled } from './supabase';
import type { Database } from './database.types';

export type Sesion = Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session'];
export type Usuario = Database['public']['Tables']['usuarios']['Row'];

const BASE_URL = import.meta.env.BASE_URL ?? '/';

function rutaAbsoluta(path: string): string {
  // BASE_URL típico de Astro: '/plataformaconectate/'
  const base = BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : '/' + path;
  return base + p;
}

/**
 * Inicia el flujo de login con Google OAuth.
 * Al ejecutarse, el navegador redirige a accounts.google.com.
 * Tras aprobar, Google → Supabase /auth/v1/callback → redirectTo.
 */
export async function signInWithGoogle(redirectTo?: string): Promise<void> {
  if (!authEnabled) {
    console.warn('[auth] PUBLIC_AUTH_ENABLED es false, login deshabilitado');
    return;
  }
  const destino = redirectTo ?? rutaAbsoluta('/cuenta');
  const callback = window.location.origin + rutaAbsoluta('/cuenta/callback');
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: callback + '?next=' + encodeURIComponent(destino),
      queryParams: {
        // Pide cuenta cada vez para que el usuario pueda elegir cuenta de Google
        prompt: 'select_account',
      },
    },
  });
  if (error) {
    console.error('[auth] signInWithOAuth falló:', error);
    throw error;
  }
}

/**
 * Cierra la sesión actual y limpia localStorage.
 */
export async function signOut(): Promise<void> {
  if (!authEnabled) return;
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('[auth] signOut falló:', error);
    throw error;
  }
}

/**
 * Obtiene la sesión actual sin lanzar errores.
 */
export async function getSesion(): Promise<Sesion | null> {
  if (!authEnabled) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

/**
 * Obtiene el perfil del usuario autenticado desde public.usuarios.
 * Devuelve null si no hay sesión o si el perfil aún no existe (raro,
 * el trigger lo crea automáticamente al hacer signup).
 */
export async function getPerfil(): Promise<Usuario | null> {
  if (!authEnabled) return null;
  const sesion = await getSesion();
  if (!sesion) return null;
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id', sesion.user.id)
    .maybeSingle();
  if (error) {
    console.error('[auth] getPerfil falló:', error);
    return null;
  }
  return data;
}

/**
 * Obtiene el avatar URL desde los metadatos de Google.
 * Devuelve null si no hay sesión o no hay avatar.
 */
export async function getAvatarUrl(): Promise<string | null> {
  if (!authEnabled) return null;
  const sesion = await getSesion();
  if (!sesion) return null;
  const md = sesion.user.user_metadata ?? {};
  return (md.avatar_url ?? md.picture ?? null) as string | null;
}

/**
 * Para uso dentro de scripts client-side de páginas protegidas.
 * Si no hay sesión, redirige a /cuenta/login con next=<ruta actual>.
 * Devuelve la sesión si la hay, o null tras disparar el redirect.
 */
export async function requireSesion(): Promise<Sesion | null> {
  if (!authEnabled) {
    // Cuando auth está deshabilitado, las rutas /cuenta y /docente
    // redirigen a home (no existen funcionalmente).
    window.location.replace(rutaAbsoluta('/'));
    return null;
  }
  const sesion = await getSesion();
  if (sesion) return sesion;
  const next = encodeURIComponent(window.location.pathname + window.location.search);
  window.location.replace(rutaAbsoluta('/cuenta/login') + '?next=' + next);
  return null;
}

/**
 * Suscribirse a cambios de auth (login/logout) en client-side.
 */
export function onAuthChange(cb: (sesion: Sesion | null) => void) {
  if (!authEnabled) return { unsubscribe: () => {} };
  const { data } = supabase.auth.onAuthStateChange((_event, sesion) => {
    cb(sesion);
  });
  return data.subscription;
}
