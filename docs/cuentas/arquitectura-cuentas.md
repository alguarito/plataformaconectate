# Arquitectura del módulo de cuentas · Plataforma Conéctate

> Documento maestro de diseño para la introducción de autenticación, persistencia
> de progreso y base de datos en la plataforma, **sin afectar el sitio estático
> actual** ni romper el modelo offline-first.

**Versión**: 2026.05 · **Estado**: borrador para Fase 0 · **Autor**: Dr. Álvaro Cárdenas Orozco

---

## 1. Principio rector

**Progressive enhancement.** Todo lo que se agrega es **opcional y aditivo**:

- Quien no inicia sesión ve exactamente el sitio actual.
- Quien inicia sesión desbloquea progreso personal y dashboard.
- Si pierde conexión, el sitio sigue funcionando (cache local).
- Si la base de datos cae, el sitio sigue navegable; sólo las funciones de cuenta dejan de responder.

Esto se logra con un **feature flag** (`PUBLIC_AUTH_ENABLED`) y una capa de servicios desacoplada del SSG actual.

---

## 2. Stack elegido

| Componente | Tecnología | Razón |
|---|---|---|
| Hosting del sitio | GitHub Pages (sin cambios) | Mantener costo $0 y deploy actual |
| Base de datos + Auth | **Supabase** (PostgreSQL + Auth + RLS) | Plan gratis cubre 50k usuarios / 500 MB; RLS nativo para datos de menores; SDK JS pura |
| Email transaccional | Supabase Auth Emails (built-in) | OTP de verificación al acudiente sin servicio adicional |
| Storage opcional | Supabase Storage | Para evidencias documentales (futuro) |

Descartados: Firebase (bloquea menores en Workspace for Education), Clerk/Auth0 (más caros), backend propio (cuesta y excede el alcance).

---

## 3. Responsable y encargado del tratamiento

| Rol | Persona/Entidad |
|---|---|
| **Responsable del tratamiento** | Dr. Álvaro Cárdenas Orozco · CC 14.570.923 |
| **Lugar de ejercicio docente** | I.E. Sor María Juliana, Cartago (Valle) |
| **Contacto para ARCO** | alvaro.cardenas.orozco@gmail.com · WhatsApp +57 320 632 4740 |
| **Encargados externos** | Supabase Inc. (EE.UU.), GitHub/Microsoft (EE.UU.) |

Decisión deliberada: el docente es responsable individual, no la I.E. Esto otorga independencia (la plataforma sirve si cambia de institución) a cambio de asumir responsabilidad jurídica personal ante la SIC.

---

## 4. Modelo de roles

### Fase 1 (MVP)

| Rol | Cómo entra | Qué puede hacer |
|---|---|---|
| **invitado** | Sin login — el sitio como hoy | Navegar guías, leer, ver actividades. Sin progreso guardado. |
| **estudiante** | Código de aula + PIN (sin email del menor) | Ver su progreso, marcar guías completadas, resolver quizzes |
| **docente** | Email + password (Supabase Auth) | CRUD aulas, generar códigos de aula, ver progreso de su clase, calificar quizzes |
| **admin** (= el docente al inicio) | Email + password | CRUD usuarios, exportar datos para ARCO, gestionar consentimientos |

### Fase 2 (diferida)

| Rol | Notas |
|---|---|
| **acudiente** (Observer) | Vinculado por `associated_user_id` a uno o más estudiantes. Read-only. |
| **docente_lector** | Para otros docentes de la I.E. que quieran consultar progreso. |

**Decisión clave**: rol `acudiente` **se difiere a Fase 2**. Razón: en escala de ~150-200 estudiantes con consentimiento de acudiente firmado al registrar, agregarlos como usuarios online ahora multiplica la superficie de Habeas Data sin necesidad operativa.

---

## 5. Matriz de permisos (Fase 1)

| Acción | Invitado | Estudiante | Docente | Admin |
|---|:---:|:---:|:---:|:---:|
| Leer guías 6°-10° | ✅ | ✅ | ✅ | ✅ |
| Ejecutar quiz interactivo | ✅ (sin guardar) | ✅ (guarda intento) | ✅ | ✅ |
| Ver mi progreso | ❌ | ✅ (solo el suyo) | — | — |
| Ver progreso de un estudiante | ❌ | ❌ | ✅ (si está en su clase) | ✅ |
| Ver progreso agregado de su clase | ❌ | ❌ | ✅ | ✅ |
| Marcar guía como completada | ❌ | ✅ (la suya) | ✅ (de cualquiera de su clase) | ✅ |
| Crear/editar aulas | ❌ | ❌ | ✅ (las suyas) | ✅ |
| Generar código de aula | ❌ | ❌ | ✅ | ✅ |
| Exportar datos del titular (ARCO) | ❌ | ✅ (los suyos) | ❌ | ✅ |
| Suprimir cuenta (oposición) | ❌ | ✅ (la suya) | ❌ | ✅ |
| Revocar consentimiento de un estudiante | ❌ | ❌ | ✅ | ✅ |
| CRUD usuarios | ❌ | ❌ | ❌ | ✅ |

---

## 6. Esquema de datos (PostgreSQL)

```sql
-- 8 tablas que cubren Fase 1 completo

-- 1. usuarios (sin columna 'role'; el rol vive en enrollments)
create table usuarios (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  fecha_nacimiento date,
  creado_en timestamptz default now()
);

-- 2. aulas (grupos del docente)
create table aulas (
  id uuid primary key default gen_random_uuid(),
  docente_id uuid references usuarios(id),
  grado int not null,
  periodo int not null,
  ano int not null,
  codigo_acceso text unique not null,
  creado_en timestamptz default now()
);

-- 3. enrollments (vínculo usuario↔aula con su rol)
create type rol_enrollment as enum ('student', 'teacher', 'observer');

create table enrollments (
  id bigserial primary key,
  usuario_id uuid references usuarios(id),
  aula_id uuid references aulas(id),
  rol rol_enrollment not null,
  associated_user_id uuid references usuarios(id),  -- para observer (Fase 2)
  unique(usuario_id, aula_id)
);

-- 4. progreso_guia
create table progreso_guia (
  id bigserial primary key,
  estudiante_id uuid references usuarios(id) on delete cascade,
  guia_clave text not null,                   -- ej '6-3-9' (grado-periodo-sesion)
  porcentaje int default 0,
  ultima_estacion text,
  completada_en timestamptz,
  actualizado_en timestamptz default now(),
  unique(estudiante_id, guia_clave)
);

-- 5. intentos_quiz
create table intentos_quiz (
  id bigserial primary key,
  estudiante_id uuid references usuarios(id) on delete cascade,
  guia_clave text not null,
  quiz_id text not null,
  respuestas jsonb not null,
  puntaje numeric(5,2),
  duracion_seg int,
  realizado_en timestamptz default now()
);

-- 6. registros_pendientes (estado temporal del flujo de registro)
create table registros_pendientes (
  id uuid primary key default gen_random_uuid(),
  codigo_aula text not null,
  estudiante_display_name text not null,
  estudiante_fecha_nacimiento date not null,
  acudiente_email text not null,
  otp_hash text,
  otp_expira_en timestamptz,
  estado text default 'pendiente',  -- pendiente|firmado|expirado|rechazado
  creado_en timestamptz default now()
);

-- 7. consentimientos_plataforma (prueba legal Ley 1581)
create table consentimientos_plataforma (
  id bigserial primary key,
  estudiante_id uuid references usuarios(id) on delete cascade,
  acudiente_nombre text not null,
  acudiente_cc text not null,
  acudiente_email text not null,
  acudiente_parentesco text not null,
  version_politica text not null,        -- ej '2026.05'
  finalidades text[] not null,
  ano_lectivo int not null,
  ip_firma inet,
  user_agent_firma text,
  firmado_en timestamptz default now(),
  revocado_en timestamptz,
  motivo_revocacion text
);

create index on consentimientos_plataforma(estudiante_id) where revocado_en is null;

-- 8. eventos_arco (auditoría de derechos ejercidos)
create table eventos_arco (
  id bigserial primary key,
  estudiante_id uuid references usuarios(id) on delete cascade,
  tipo text not null,                    -- 'acceso' | 'rectificacion' | 'cancelacion' | 'oposicion' | 'revocacion'
  detalle text,
  ejecutado_en timestamptz default now()
);
```

---

## 7. Políticas RLS clave

```sql
-- Habilitar RLS en todas las tablas con datos personales
alter table progreso_guia          enable row level security;
alter table intentos_quiz          enable row level security;
alter table consentimientos_plataforma enable row level security;

-- progreso_guia: el estudiante ve solo lo suyo
create policy progreso_self on progreso_guia for select
  using (estudiante_id = auth.uid());

-- progreso_guia: el docente ve solo a estudiantes de su aula
create policy progreso_docente_clase on progreso_guia for select
  using (
    exists (
      select 1 from enrollments e_doc
      join enrollments e_est on e_est.aula_id = e_doc.aula_id
      where e_doc.usuario_id = auth.uid()
        and e_doc.rol = 'teacher'
        and e_est.usuario_id = progreso_guia.estudiante_id
        and e_est.rol = 'student'
    )
  );

-- progreso_guia bloqueado si consentimiento revocado
create policy progreso_consentimiento_vigente on progreso_guia for all
  using (
    exists (
      select 1 from consentimientos_plataforma c
      where c.estudiante_id = progreso_guia.estudiante_id
        and c.revocado_en is null
    )
  );
```

Si un acudiente revoca el consentimiento, `revocado_en` se llena y **todos los datos del estudiante quedan inaccesibles desde la app** automáticamente — sin borrar nada, manteniendo trazabilidad por si la SIC lo requiere.

---

## 8. Flujo de registro

```
1. Docente genera "código de aula 6A-2026" desde panel
2. Estudiante recibe código en clase
3. Estudiante ingresa código en /cuenta/unirme
4. Sistema pide: nombre/seudónimo, fecha de nacimiento, email del acudiente
5. Sistema envía email al acudiente con link único
6. Acudiente abre link → lee consentimiento completo v2026.05
7. Acudiente diligencia: nombre, CC, parentesco, marca finalidades
8. Sistema envía OTP de 6 dígitos al email
9. Acudiente ingresa OTP → consentimiento queda firmado en BD
10. Sistema activa cuenta del estudiante
11. Estudiante recibe PIN por el código de aula (entregado por docente)
12. Estudiante ingresa y puede usar la plataforma
```

**Tiempo realista**: 5 minutos si el acudiente está disponible. Si tarda, el estudiante navega como invitado mientras tanto.

---

## 9. Roadmap

| Fase | Duración | Entregables |
|---|---|---|
| **0 · Privacidad y diseño** | 5-7 días | Este documento + política + consentimiento + skill `ley-1581-habeas-data` |
| **1 · Infraestructura Supabase** | 3-5 días | Cuenta Supabase, las 8 tablas, RLS, `.env.local` |
| **2 · Auth docente + flujo registro con OTP** | 2-3 sem | `/cuenta/login`, `/cuenta/unirme`, email del acudiente, OTP. Feature flag activado. |
| **3 · Tracking progreso real** | 1-2 sem | Sustituir `localStorage` por sync con Supabase. `localStorage` como cache offline. |
| **4 · Dashboard docente** | 1-2 sem | `/docente`, vista por aula, exportar CSV |
| **5 · ARCO y operaciones** | 3-4 días | Botones "descargar mis datos" + "borrar mi cuenta", auditoría |
| **Total a producción** | **6-8 semanas** | Plataforma con cuentas, BD, dashboard y ARCO operable |

---

## 10. Salvaguardas para no romper lo actual

1. **Feature flag** `PUBLIC_AUTH_ENABLED=false` por defecto. El sitio actual no cambia hasta activarlo manualmente.
2. **Branch separado** `feat/db-fase-N` durante el desarrollo. `main` queda intocable.
3. **Tests E2E con Playwright** verifican que la navegación anónima sigue funcionando idéntica.
4. **Lighthouse en cada PR** garantiza que no degradamos performance ni accesibilidad.
5. **Security-review Action** ya activa en PRs (auditoría IA en cada cambio que toca `src/`).
6. **PR final** a `main` solo cuando todo esté validado y se vea estable.

---

## 11. Decisiones legales innegociables

1. Responsable individual del tratamiento: **Dr. Álvaro Cárdenas Orozco, CC 14.570.923**.
2. **Consentimiento informado del acudiente** obligatorio antes de crear cuenta de menor.
3. Política de privacidad pública y versionada (`v2026.05`).
4. Conservación: año lectivo + 2 años. Después, eliminación o anonimización.
5. Derechos ARCO ejercitables desde el primer día.
6. Transferencia internacional declarada (Supabase en EE.UU.).
7. Cláusula explícita: "no se entrenan modelos externos con datos del estudiante".
8. Registro en RNBD de la SIC si supera umbrales — verificar al cumplir 50 titulares.

---

## 12. Referencias

- [Ley 1581 de 2012 · Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981)
- [Decreto 1377 de 2013 · Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646)
- [SIC · Protección especial NNA](https://www.sic.gov.co/content/%C2%BFlos-datos-personales-de-los-ni%C3%B1os-ni%C3%B1as-y-adolescentes-tienen-alguna-protecci%C3%B3n-especial)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Astro + Supabase guide](https://docs.astro.build/en/guides/backend/supabase/)
