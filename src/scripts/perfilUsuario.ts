/**
 * Sistema de perfil de usuario para ConectaTE — Fase A (sin backend)
 *
 * Persiste en localStorage el rol del usuario (visitante / estudiante /
 * docente), su identidad y el histórico de tests psicométricos.
 *
 * IMPORTANTE: en Fase A todo vive en el dispositivo. No hay sincronización
 * entre dispositivos. Si limpia caché, pierde su histórico. La autenticación
 * de docente es decorativa (constantes hardcoded) — no es seguridad real,
 * sirve para activar la vista de docente. La seguridad real llega en Fase C
 * con backend.
 */

import { setGradoActual } from './progreso';
import type { DimensionIM } from '../data/tests/inteligenciasMultiples';
import type { DimensionAC } from '../data/tests/autoconcepto';

const STORAGE_KEY = 'conectate.perfilUsuario.v1';

/** Credenciales del docente — Fase A (decorativas, no son seguridad real) */
const DOCENTE_EMAIL = 'alvaro.cardenas.orozco@gmail.com';
// Hash simple de la contraseña; quien lea el código puede verla. En Fase A es solo
// un "candado simbólico" para evitar acceso accidental. La seguridad real es backend.
const DOCENTE_PASSWORD = 'Mariana.0';

export type Rol = 'visitante' | 'estudiante' | 'docente';

export interface ResultadoTestIM {
  fecha: number; // timestamp ms
  scores: Record<DimensionIM, number>;
}

export interface ResultadoTestAC {
  fecha: number;
  scores: Record<DimensionAC, number>;
}

export interface PerfilUsuario {
  version: 1;
  rol: Rol;
  // Estudiante
  nombre?: string;
  grado?: number;
  grupo?: string;
  fechaRegistro?: number;
  // Docente
  emailDocente?: string;
  // Tests
  testsIM: ResultadoTestIM[];
  testsAC: ResultadoTestAC[];
}

/* ─────── Lectura / escritura ─────── */

function vacio(): PerfilUsuario {
  return {
    version: 1,
    rol: 'visitante',
    testsIM: [],
    testsAC: [],
  };
}

export function leerPerfil(): PerfilUsuario {
  if (typeof localStorage === 'undefined') return vacio();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return vacio();
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1) {
      return {
        version: 1,
        rol: parsed.rol ?? 'visitante',
        nombre: parsed.nombre,
        grado: parsed.grado,
        grupo: parsed.grupo,
        fechaRegistro: parsed.fechaRegistro,
        emailDocente: parsed.emailDocente,
        testsIM: parsed.testsIM ?? [],
        testsAC: parsed.testsAC ?? [],
      };
    }
  } catch {
    /* ignore */
  }
  return vacio();
}

function escribirPerfil(p: PerfilUsuario): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  document.dispatchEvent(new CustomEvent('perfil:cambio', { detail: p }));
}

/* ─────── API: identidad ─────── */

export function loginEstudiante(
  nombre: string,
  grado: number,
  grupo: string,
): void {
  const p = leerPerfil();
  p.rol = 'estudiante';
  p.nombre = nombre.trim();
  p.grado = grado;
  p.grupo = grupo.trim();
  p.fechaRegistro = p.fechaRegistro ?? Date.now();
  escribirPerfil(p);
  // Sincroniza con el sistema de gamificación existente
  setGradoActual(grado);
}

export interface ResultadoLoginDocente {
  ok: boolean;
  mensaje?: string;
}

export function loginDocente(email: string, password: string): ResultadoLoginDocente {
  const emailNorm = email.trim().toLowerCase();
  const expected = DOCENTE_EMAIL.toLowerCase();
  if (emailNorm !== expected) {
    return { ok: false, mensaje: 'Email no registrado como docente.' };
  }
  if (password !== DOCENTE_PASSWORD) {
    return { ok: false, mensaje: 'Contraseña incorrecta.' };
  }
  const p = leerPerfil();
  p.rol = 'docente';
  p.emailDocente = emailNorm;
  escribirPerfil(p);
  return { ok: true };
}

export function loginVisitante(): void {
  const p = leerPerfil();
  // Si ya tiene grado guardado de antes, lo conservamos como visitante con grado conocido
  p.rol = 'visitante';
  escribirPerfil(p);
}

export function cerrarSesion(): void {
  // Vuelve a estado visitante pero conserva los tests previos en histórico
  const p = leerPerfil();
  const limpio: PerfilUsuario = {
    version: 1,
    rol: 'visitante',
    testsIM: p.testsIM, // se conserva el histórico
    testsAC: p.testsAC,
  };
  escribirPerfil(limpio);
}

export function olvidarTodo(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  document.dispatchEvent(new CustomEvent('perfil:cambio', { detail: vacio() }));
}

/* ─────── API: tests ─────── */

export function guardarResultadoIM(
  scores: Record<DimensionIM, number>,
): ResultadoTestIM {
  const p = leerPerfil();
  const r: ResultadoTestIM = { fecha: Date.now(), scores };
  p.testsIM.push(r);
  escribirPerfil(p);
  return r;
}

export function guardarResultadoAC(
  scores: Record<DimensionAC, number>,
): ResultadoTestAC {
  const p = leerPerfil();
  const r: ResultadoTestAC = { fecha: Date.now(), scores };
  p.testsAC.push(r);
  escribirPerfil(p);
  return r;
}

/** Devuelve el último resultado de IM, o null si no hay. */
export function ultimoTestIM(): ResultadoTestIM | null {
  const p = leerPerfil();
  return p.testsIM.length > 0 ? p.testsIM[p.testsIM.length - 1] : null;
}

export function ultimoTestAC(): ResultadoTestAC | null {
  const p = leerPerfil();
  return p.testsAC.length > 0 ? p.testsAC[p.testsAC.length - 1] : null;
}

/**
 * ¿Cuánto tiempo (en días) hace desde el último test de tipo IM?
 * Devuelve null si nunca lo ha tomado, o un número de días redondeado.
 */
export function diasDesdeUltimoIM(): number | null {
  const u = ultimoTestIM();
  if (!u) return null;
  return Math.floor((Date.now() - u.fecha) / (1000 * 60 * 60 * 24));
}

export function diasDesdeUltimoAC(): number | null {
  const u = ultimoTestAC();
  if (!u) return null;
  return Math.floor((Date.now() - u.fecha) / (1000 * 60 * 60 * 24));
}

/** ¿Es momento de re-tomar un test? (>= 30 días desde el último, o nunca tomado) */
export function momentoDeRetomarIM(): boolean {
  const d = diasDesdeUltimoIM();
  return d === null || d >= 30;
}

export function momentoDeRetomarAC(): boolean {
  const d = diasDesdeUltimoAC();
  return d === null || d >= 30;
}

/* ─────── Suscripciones ─────── */

export function onCambioPerfil(handler: (p: PerfilUsuario) => void): () => void {
  const fn = (ev: Event) => handler((ev as CustomEvent<PerfilUsuario>).detail);
  document.addEventListener('perfil:cambio', fn);
  return () => document.removeEventListener('perfil:cambio', fn);
}

/* ─────── Helpers de exportación ─────── */

export function exportarComoJSON(): string {
  return JSON.stringify(leerPerfil(), null, 2);
}
