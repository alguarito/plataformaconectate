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
 * Cierra la sesión actual y limpia localStorage del progreso.
 * Esto evita que el siguiente usuario en el mismo dispositivo vea
 * progreso ajeno (recomendación A del diseño de Fase 3).
 */
export async function signOut(): Promise<void> {
  if (!authEnabled) return;

  // Limpiar localStorage del progreso ANTES de signOut. Si la llamada
  // a Supabase fallara, al menos el progreso ya quedó borrado del
  // dispositivo.
  try {
    const sync = await import('./progreso-sync');
    sync.limpiarLocal();
  } catch (err) {
    console.warn('[auth] no se pudo limpiar localStorage:', err);
  }

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

/* ─────────── Hook automático de sync con progreso ─────────── */

let yaInicializado = false;
const MARCADOR_MIGRADO = 'conectate.progreso.migrado.v1';

/**
 * Conecta el sistema de auth con el sistema de progreso:
 *
 *   - Al cargar la página con sesión activa: carga progreso desde BD,
 *     fusiona con localStorage, procesa cola offline pendiente.
 *   - Al login: si es la primera vez en este dispositivo, migra todo el
 *     localStorage acumulado como invitado a BD.
 *
 * Se debe llamar UNA vez al cargar la app (lo hacemos desde BaseLayout
 * via import dinámico, así no carga si auth está deshabilitada).
 */
export async function inicializarSyncProgreso(): Promise<void> {
  if (!authEnabled || yaInicializado) return;
  yaInicializado = true;

  try {
    const [{ leerEstado, setEstadoCompleto }, sync] = await Promise.all([
      import('../scripts/progreso'),
      import('./progreso-sync'),
    ]);

    async function sincronizar() {
      const sesion = await getSesion();
      if (!sesion) return;

      const local = leerEstado();

      // Primera vez: migrar TODO el localStorage acumulado como invitado
      const migrado = localStorage.getItem(MARCADOR_MIGRADO);
      if (!migrado) {
        await sync.migrarLocalABD(local);
        localStorage.setItem(MARCADOR_MIGRADO, sesion.user.id);
      }

      // Procesar cola de operaciones offline
      await sync.procesarCola();

      // Hidratar con lo que haya en BD (otros dispositivos)
      const remoto = await sync.cargarDesdeBD();
      if (remoto) {
        const fusionado = sync.fusionar(local, remoto);
        setEstadoCompleto(fusionado);
      }
    }

    // Sync inicial
    await sincronizar();

    // Re-sync en cada cambio de sesión (login después de iniciar la pestaña)
    onAuthChange((sesion) => {
      if (sesion) void sincronizar();
    });
  } catch (err) {
    console.warn('[auth] inicializarSyncProgreso falló:', err);
  }
}
