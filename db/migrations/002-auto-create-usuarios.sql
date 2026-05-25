-- ============================================================================
-- Migración 002 · Trigger auto-crear public.usuarios al hacer signup
--
-- Cuando un usuario se registra (auth.users INSERT), automáticamente le
-- creamos su fila en public.usuarios con el nombre extraído de los metadatos
-- del provider (Google envía full_name).
--
-- Sin este trigger, después de cada login con Google habría que hacer un
-- INSERT manual desde el cliente, lo cual es frágil (race conditions,
-- usuario sin perfil si la app crashea, etc.).
--
-- Esta migración es IDEMPOTENTE.
-- ============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.usuarios (id, display_name, fecha_nacimiento)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(coalesce(new.email, 'usuario'), '@', 1)
    ),
    null
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- Verificación post-aplicación
-- ============================================================================
-- Después de aplicar, la próxima vez que entres con Google a la plataforma,
-- debería crearse automáticamente tu fila en public.usuarios. Verificarlo:
--
--   select id, display_name, creado_en from public.usuarios;
--
-- ============================================================================
