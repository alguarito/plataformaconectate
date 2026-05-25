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
  const { data, error } = await supabase.from(tabla).select('id').limit(1);
  if (error) {
    if (error.code === '42P01' || error.message.includes('does not exist')) {
      console.log(`✗ tabla ${tabla.padEnd(28)} NO EXISTE — aplicar db/schema.sql primero`);
    } else {
      console.log(`✗ tabla ${tabla.padEnd(28)} error: ${error.code} · ${error.message}`);
    }
    fallos++;
  } else {
    console.log(`✓ tabla ${tabla.padEnd(28)} existe (anon ve ${data.length} filas, esperado 0 con RLS)`);
    ok++;
  }
}

console.log(`\n=== Tablas: ${ok}/${TABLAS_ESPERADAS.length} verificadas, ${fallos} fallos ===\n`);

// --- 2. Verificar policies (default deny + flujo de registro) ---
console.log('=== Verificación de policies ===\n');

let policiesOk = 0;
const policiesTotal = 5;

// Test 1: la función helper existe (= schema.sql aplicado completo)
const t1 = await supabase.rpc('tiene_consentimiento_vigente', {
  _estudiante_id: '00000000-0000-0000-0000-000000000000',
});
if (!t1.error && t1.data === false) {
  console.log('✓ función tiene_consentimiento_vigente() responde');
  policiesOk++;
} else {
  console.log(`✗ función tiene_consentimiento_vigente: ${t1.error?.message ?? 'resultado inesperado'}`);
}

// Test 2: anon NO puede INSERT en usuarios (RLS bloqueando)
const t2 = await supabase.from('usuarios').insert({
  id: '99999999-9999-9999-9999-999999999999',
  display_name: 'smoke-test',
});
if (
  t2.error &&
  (t2.error.code === '42501' ||
    t2.error.code === '23503' ||
    t2.error.message.includes('row-level security'))
) {
  console.log(`✓ anon NO puede INSERT en usuarios (bloqueado: ${t2.error.code})`);
  policiesOk++;
} else {
  console.log(`✗ anon pudo INSERT en usuarios — riesgo de seguridad`);
}

// Test 3: anon SÍ puede INSERT en registros_pendientes (sin .select para evitar RLS de SELECT)
const t3 = await supabase.from('registros_pendientes').insert({
  codigo_aula: 'SMOKE-' + Date.now(),
  estudiante_display_name: 'smoke-test',
  estudiante_fecha_nacimiento: '2010-01-01',
  acudiente_email: `smoke-${Date.now()}@example.com`,
});
if (!t3.error) {
  console.log('✓ anon puede INSERT en registros_pendientes (flujo de registro OK)');
  policiesOk++;
} else {
  console.log(`✗ anon NO puede INSERT en registros_pendientes: ${t3.error.message}`);
}

// Test 4: anon recibe 0 filas en usuarios (privacidad)
const t4 = await supabase.from('usuarios').select('id').limit(10);
if (!t4.error && t4.data.length === 0) {
  console.log('✓ anon recibe 0 filas en usuarios (privacidad protegida)');
  policiesOk++;
} else if (t4.error) {
  console.log(`✗ SELECT en usuarios falló: ${t4.error.message}`);
} else {
  console.log(`✗ anon vio ${t4.data.length} filas en usuarios — RLS no está bloqueando lectura`);
}

// Test 5: anon recibe 0 filas en registros_pendientes (privacidad)
const t5 = await supabase.from('registros_pendientes').select('id').limit(10);
if (!t5.error && t5.data.length === 0) {
  console.log('✓ anon recibe 0 filas en registros_pendientes (privacidad protegida)');
  policiesOk++;
} else if (t5.error) {
  console.log(`✗ SELECT en registros_pendientes falló: ${t5.error.message}`);
} else {
  console.log(`✗ anon vio ${t5.data.length} filas en registros_pendientes`);
}

console.log(`\n=== Policies: ${policiesOk}/${policiesTotal} verificadas ===\n`);

if (fallos === 0 && policiesOk === policiesTotal) {
  console.log('✅ Conexión OK, esquema completo, policies funcionando. Listo para Fase 2.');
  process.exit(0);
} else {
  console.log('⚠️  Hay problemas. Revisar los ✗ arriba.');
  if (fallos > 0) console.log('   → Aplicar db/schema.sql en Supabase SQL Editor.');
  if (policiesOk < policiesTotal) console.log('   → Aplicar db/policies.sql en Supabase SQL Editor.');
  process.exit(1);
}
