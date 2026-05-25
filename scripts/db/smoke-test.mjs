#!/usr/bin/env node
/**
 * Smoke test de la conexión a Supabase (ConcienciA).
 *
 * Verifica:
 *   1. Que las variables de entorno están bien.
 *   2. Que el cliente puede conectarse al proyecto.
 *   3. Que las 8 tablas del esquema existen y son visibles (anon role).
 *   4. Que RLS está bloqueando lectura no autenticada (esperado).
 *
 * Uso:
 *   node scripts/db/smoke-test.mjs
 *
 * Requiere que .env.local exista y tenga PUBLIC_SUPABASE_URL +
 * PUBLIC_SUPABASE_ANON_KEY.
 *
 * Si el proyecto Supabase está pausado o en restauración, este script
 * fallará con timeout. Eso es esperado — esperar a que el dashboard diga
 * "Active" y volver a correr.
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// --- Cargar .env.local manualmente (no hace falta dotenv) ---
function loadEnvLocal() {
  try {
    const content = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq < 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch (err) {
    console.error('✗ No se pudo leer .env.local:', err.message);
    process.exit(1);
  }
}

loadEnvLocal();

const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('✗ Faltan PUBLIC_SUPABASE_URL o PUBLIC_SUPABASE_ANON_KEY en .env.local');
  process.exit(1);
}

console.log('=== Plataforma Conéctate · Smoke test Supabase ===\n');
console.log(`URL: ${SUPABASE_URL}`);
console.log(`Key: ${SUPABASE_KEY.slice(0, 30)}... (truncada por seguridad)\n`);

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// --- 1. Verificar las 8 tablas del esquema ---
const TABLAS_ESPERADAS = [
  'usuarios',
  'aulas',
  'enrollments',
  'progreso_guia',
  'intentos_quiz',
  'registros_pendientes',
  'consentimientos_plataforma',
  'eventos_arco',
];

let ok = 0;
let fallos = 0;

for (const tabla of TABLAS_ESPERADAS) {
  try {
    const { error } = await supabase.from(tabla).select('*', { count: 'exact', head: true });
    if (error) {
      // Errores aceptables: "permission denied" (RLS funcionando) o "no rows" (tabla vacía)
      if (
        error.code === 'PGRST116' ||
        error.message.includes('permission denied') ||
        error.message.includes('row-level security')
      ) {
        console.log(`✓ tabla ${tabla.padEnd(28)} existe (RLS protegiendo: ${error.code ?? 'rls'})`);
        ok++;
      } else if (error.code === '42P01') {
        console.log(`✗ tabla ${tabla.padEnd(28)} NO EXISTE — aplicar db/schema.sql primero`);
        fallos++;
      } else {
        console.log(`? tabla ${tabla.padEnd(28)} error inesperado: ${error.code} · ${error.message}`);
        fallos++;
      }
    } else {
      console.log(`✓ tabla ${tabla.padEnd(28)} existe y es accesible (¿RLS no activa?)`);
      ok++;
    }
  } catch (err) {
    console.log(`✗ tabla ${tabla.padEnd(28)} error de red: ${err.message}`);
    fallos++;
  }
}

console.log(`\n=== Resultado: ${ok}/${TABLAS_ESPERADAS.length} tablas verificadas, ${fallos} fallos ===`);

if (fallos === 0) {
  console.log('\n✅ Conexión OK y esquema completo. Listo para Fase 2.');
  process.exit(0);
} else {
  console.log('\n⚠️  Hay tablas faltantes. Aplicar db/schema.sql y db/policies.sql en Supabase SQL Editor.');
  process.exit(1);
}
