# Capa de cuentas: desactivada hasta 2027

**Decisión del autor (22 de octubre de 2026):** la capa de cuentas de ConectaTE (Supabase: registro con consentimiento del acudiente, sincronización del progreso, panel docente, informes y censo de conectividad) queda **desactivada**. El código se conserva en el repositorio para reactivarla el año entrante. Mientras tanto, la plataforma funciona como sitio estático y local primero: el progreso, los quizzes y los tests de Mi panel se guardan solo en el navegador de cada dispositivo.

Los proyectos de Supabase están pausados, no eliminados. Este cambio no los toca ni borra datos.

## Qué hace la bandera apagada

La bandera es `PUBLIC_AUTH_ENABLED`. En `.github/workflows/deploy.yml` vale `'false'`, y las dos variables de Supabase (`PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY`) quedan comentadas. Con la bandera apagada:

- **No se publican** `/cuenta/*` (incluida `/cuenta/unirme`), `/docente/*` ni `/conectividad`. La integración `conectate:cuentas-desactivadas` de `astro.config.mjs` las retira de `dist/` al terminar el build.
- **Ninguna página pública carga el cliente Supabase.** Las sincronizaciones de `src/scripts/progreso.ts`, `LabQuiz.astro` y `TestRunner.astro`, la reflexión de `ReflexionGuia.astro`, el comentario de `ComentarioDocenteVista.astro` y el ingreso docente de `LoginCard.astro` están condicionados a la bandera, y Vite los elimina del bundle.
- **No se muestran** el botón «Ingresar», «Unirme a un aula», el registro con código de aula de Comenzar, el ingreso docente del modal de perfil, el bloque de reflexión de las guías ni el comentario del docente.
- El workflow **«Informe mensual a acudientes»** (`.github/workflows/monthly-report.yml`) no tiene programación: solo se puede disparar a mano, y no conviene hacerlo antes de corregir A4.

## Antes de reactivar: lista de verificación

Los hallazgos vienen de la auditoría técnica del 22 de octubre de 2026 (`taller/conectate-auditoria-2026-10-22/tecnica.md`, en CEREBRO). Todos están en el SQL y en las funciones de este repositorio, y se activarían en cuanto el backend vuelva a estar en línea. **No se reactiva nada hasta tener los seis puntos resueltos y probados.**

### C2. Padrón del censo abierto a cualquier visitante

- [ ] Quitar el `grant` a `anon` de `conectividad_grupos()` y `conectividad_estudiantes_de_grupo()` (`supabase/migrations/20260825220000_censo_conectividad.sql`).
- [ ] Hacer que el censo exija sesión de docente o directivo, o un identificador que no se pueda listar, en lugar de mostrar una lista de nombres.
- [ ] Publicar el aviso de privacidad en el formulario del censo y poner `noindex` en `/conectividad`.
- [ ] Si el censo ya terminó: exportar solo el agregado y borrar las tablas con datos personales.

### A1. `conectividad_guardar` se puede forzar

- [ ] Limitar los intentos por estudiante y por IP, con bloqueo.
- [ ] No sobrescribir una respuesta sin un segundo factor.
- [ ] No devolver el nombre del estudiante.
- [ ] Guardar solo un hash de los dígitos de control, no el documento completo.

### A2. El estudiante puede firmar su propio consentimiento «del acudiente»

- [ ] Generar en el servidor un token aleatorio de un solo uso, guardar su hash con vencimiento y enviarlo solo en el correo del acudiente.
- [ ] Exigir ese token en `firmar-consentimiento`, no solo el `registro_id` que genera el navegador del estudiante. Como alternativa, un OTP al correo del acudiente.

### A3. Cualquier cuenta puede volverse «docente» de cualquier estudiante

- [ ] Condicionar el INSERT en `aulas` a que el correo esté en `docentes_autorizados` (`db/policies.sql`).
- [ ] Quitar el INSERT directo en `enrollments`: que la inscripción pase por una RPC que valide el código del aula.
- [ ] Proteger la columna `rol` de `usuarios` (trigger BEFORE UPDATE o permisos por columna), para que un estudiante no pueda ponerse `rol='docente'`.

### A4. Informe mensual: falla y expone correos en logs públicos

- [ ] Verificar el secreto `SUPABASE_URL` del repositorio (apunta a otra referencia de proyecto).
- [ ] Hacer que `monthly-report` devuelva solo conteos, sin correos ni identificadores.
- [ ] Dejar de imprimir el cuerpo de la respuesta en el workflow (el repositorio y sus logs son públicos).
- [ ] Solo entonces, restaurar el bloque `schedule` en `monthly-report.yml`.

### A6. Política de privacidad sin publicar y textos que no coinciden con lo que se guarda

- [ ] Publicar `/cuenta/politica` (hoy da 404) a partir de `docs/cuentas/politica-de-privacidad-v2026.05.md`, y enlazarla desde el consentimiento en lugar de una ruta del repositorio.
- [ ] Corregir `ConsentimientoTexto.astro`, que dice que no se tratan el documento ni el teléfono (el censo sí los guarda).
- [ ] Con las cuentas activas, ningún texto puede decir que nada llega a un servidor: se guardan nombre, fecha de nacimiento, correo, datos del acudiente, IP de la firma y reflexiones. Revisar en especial `LoginCard.astro`, Comenzar y Mi panel.
- [ ] Corregir el enlace roto `/cuenta/ingresar` de `src/pages/comenzar/index.astro` (la ruta es `/cuenta/login`).

## Pasos para reactivar (cuando la lista esté completa)

1. Revisar en el dashboard de Supabase el estado del proyecto y su plazo de restauración; restaurarlo solo después de aplicar las correcciones de SQL.
2. En `deploy.yml`, descomentar `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY` y poner `PUBLIC_AUTH_ENABLED: 'true'`.
3. Compilar y comprobar en `dist/` que aparecen `/cuenta`, `/docente` y `/conectividad`, y probar en un navegador real el registro, la firma del acudiente, una reflexión, un quiz y el panel docente.
4. Restaurar la programación del informe mensual (A4).
5. Actualizar este documento y la sección de estado del `README.md`.
