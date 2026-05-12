#!/usr/bin/env python3
"""
Linter del contrato editorial MILC v3 para las guías YAML.

Verifica que cada guía cumpla:
- Campos obligatorios presentes
- Verbos cognitivos válidos (solo los 6 permitidos)
- Balance Bloom (al menos 3 niveles distintos entre las 3 actividades nombradas)
- Triángulo bien estructurado (Dussel + estoico + Floridi con citas no vacías)
- Regla de 200 palabras (ningún campo de texto excede 200 palabras)
- Saber ancestral con origen nombrado (Wayuu, Quimbaya, Pacífico, etc.)
- Caracteres especiales LaTeX escapados (`#`, `&`, `%` sin `\\` previo)

Uso:
    python3 scripts/guias-lint.py            # todas las guías completas
    python3 scripts/guias-lint.py 1-2        # solo una
    python3 scripts/guias-lint.py --grado 6  # otro grado
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent


# ─── Configuración del contrato ──────────────────────────────────────────────

VERBOS_VALIDOS = {"IDENTIFICA", "EXPLICA", "APLICA", "ANALIZA", "EVALÚA", "CREA"}

# Mapeo verbo → nivel Bloom (1-6)
BLOOM = {
    "IDENTIFICA": 1, "EXPLICA": 2, "APLICA": 3,
    "ANALIZA": 4, "EVALÚA": 5, "CREA": 6,
}

# Anclajes ancestrales aceptables (al menos uno debe aparecer en saber_ancestral)
ANCLAJES_LOCALES = [
    "Wayuu", "Quimbaya", "Pacífico", "Pacifico", "Valle", "Cartago",
    "Pijao", "Muisca", "Calima", "Guna", "guna",
    "campesino", "campesina", "afro", "Afro",
    "indígena", "indigena", "ancestral", "abuela", "abuelo",
    "oficio", "tradición", "tradicion", "minga", "convite",
    "tejido", "telar", "cosecha", "pregonero",
]

# Caracteres especiales LaTeX que deben escaparse cuando aparecen literales
LATEX_ESPECIALES = ["#", "&", "%", "_", "$", "~", "^"]

# Campos de texto largo (>= 200 palabras dispara warning)
CAMPOS_TEXTO_LARGO = [
    ("apertura.saber_ancestral", lambda d: d["apertura"]["saber_ancestral"]),
    ("apertura.saber_contemporaneo", lambda d: d["apertura"]["saber_contemporaneo"]),
    ("apertura.saber_hacer", lambda d: d["apertura"]["saber_hacer"]),
    ("escuta.escena", lambda d: d["escuta"]["escena"]),
    ("escuta.cuaderno", lambda d: d["escuta"]["cuaderno"]),
    ("sistematizacion.intro", lambda d: d["sistematizacion"]["intro"]),
    ("sistematizacion.errores_comunes", lambda d: d["sistematizacion"]["errores_comunes"]),
    ("sistematizacion.cuaderno", lambda d: d["sistematizacion"]["cuaderno"]),
    ("praxis.intro", lambda d: d["praxis"]["intro"]),
    ("praxis.cuaderno", lambda d: d["praxis"]["cuaderno"]),
    ("compromiso", lambda d: d["compromiso"]),
]

# Campos requeridos en la estructura
REQUIRED_PATHS = [
    "clave", "grado", "periodo", "sesion", "completo",
    "titulo", "producto_final",
    "apertura.saber_ancestral", "apertura.saber_contemporaneo",
    "apertura.pregunta_puente", "apertura.saber_hacer",
    "puentes.a_ruta", "puentes.a_escuta", "puentes.a_sistematizacion",
    "puentes.a_praxis", "puentes.a_producto", "puentes.a_evaluacion",
    "puentes.a_triangulo",
    "escuta.escena", "escuta.checks", "escuta.cuaderno",
    "sistematizacion.intro", "sistematizacion.pilares",
    "sistematizacion.anatomia.titulo", "sistematizacion.anatomia.body",
    "sistematizacion.errores_comunes", "sistematizacion.cuaderno",
    "praxis.intro", "praxis.pilares", "praxis.checklist.titulo",
    "praxis.checklist.items", "praxis.plantilla_guion", "praxis.cuaderno",
    "praxis.producto_titulo", "praxis.criterios",
    "triangulo.dussel.autor", "triangulo.dussel.cita",
    "triangulo.dussel.aplicacion", "triangulo.dussel.pregunta_espejo",
    "triangulo.estoico.autor", "triangulo.estoico.cita",
    "triangulo.estoico.aplicacion", "triangulo.estoico.pregunta_espejo",
    "triangulo.floridi.autor", "triangulo.floridi.cita",
    "triangulo.floridi.aplicacion", "triangulo.floridi.pregunta_espejo",
    "compromiso",
]

# Colors (ANSI)
RESET = "\033[0m"
RED = "\033[31m"
YELLOW = "\033[33m"
GREEN = "\033[32m"
DIM = "\033[2m"
BOLD = "\033[1m"


# ─── Validadores ─────────────────────────────────────────────────────────────

def _get(obj, path: str):
    parts = path.split(".")
    cur = obj
    for part in parts:
        if isinstance(cur, dict) and part in cur:
            cur = cur[part]
        else:
            return None
    return cur


def lint_required_fields(g: dict) -> list[str]:
    """Devuelve lista de errores: campos faltantes."""
    errors = []
    for path in REQUIRED_PATHS:
        v = _get(g, path)
        if v is None or v == "" or v == []:
            errors.append(f"falta o vacío: {path}")
    return errors


def lint_verbos(g: dict) -> tuple[list[str], list[str], list[str]]:
    """Extrae verbos de escuta/sist/praxis y valida.

    Cada fase puede tener el verbo en `intro` (Praxis, Escuta) o en
    `cuaderno`/infoband (Sistematización). Buscamos en varios campos.

    Devuelve (verbos_encontrados, errores, warnings).
    """
    # Para cada actividad/fase, busca en una lista de campos hasta encontrar uno con el patrón.
    fases = [
        ("Actividad 1 (Escuta)", ["escuta.escena", "escuta.cuaderno"]),
        ("Actividad 2 (Sist)",  ["sistematizacion.intro", "sistematizacion.cuaderno"]),
        ("Actividad 3 (Praxis)", ["praxis.intro", "praxis.cuaderno"]),
    ]
    verbos = []
    errors = []
    pattern = re.compile(r"Actividad\s+\d+\s*·\s*([A-ZÁÉÍÓÚ]+)")
    for nombre_fase, paths in fases:
        verbo_encontrado = None
        for path in paths:
            text = _get(g, path) or ""
            m = pattern.search(text)
            if m:
                verbo_encontrado = (path, m.group(1))
                break
        if verbo_encontrado is None:
            errors.append(
                f"no encontré verbo para {nombre_fase} en ninguno de {paths} "
                "(patrón esperado: 'Actividad N · VERBO ...')"
            )
            continue
        path, verbo = verbo_encontrado
        if verbo not in VERBOS_VALIDOS:
            errors.append(
                f"verbo inválido '{verbo}' en {path}. "
                f"Solo permitidos: {sorted(VERBOS_VALIDOS)}"
            )
        else:
            verbos.append(verbo)

    warnings = []
    if len(verbos) >= 2:
        niveles = {BLOOM[v] for v in verbos}
        if len(niveles) < 2:
            warnings.append(
                f"balance Bloom pobre: las 3 actividades usan el mismo nivel ({verbos}). "
                "Idealmente al menos 3 niveles distintos."
            )
        elif len(niveles) < 3 and len(verbos) >= 3:
            warnings.append(
                f"balance Bloom flojo: solo {len(niveles)} niveles distintos en 3 actividades ({verbos})."
            )

    return verbos, errors, warnings


def lint_saber_ancestral(g: dict) -> list[str]:
    """Verifica que el saber ancestral nombre un origen concreto."""
    text = _get(g, "apertura.saber_ancestral") or ""
    if not any(anchor.lower() in text.lower() for anchor in ANCLAJES_LOCALES):
        return [
            "saber_ancestral no nombra un origen concreto (Wayuu, Quimbaya, Pacífico, "
            "Valle, campesino, oficio, etc.). Genérico tipo 'los pueblos antiguos' no vale."
        ]
    return []


def lint_triangulo(g: dict) -> list[str]:
    """Valida el triángulo: 3 voces con citas y autores correctos."""
    errors = []
    tri = g.get("triangulo", {})

    # Dussel
    if "Dussel" not in (tri.get("dussel", {}).get("autor") or ""):
        errors.append("triangulo.dussel.autor debe contener 'Dussel'")

    # Estoico: debe ser Marco Aurelio, Epicteto, o Séneca
    estoicos_validos = {"Marco Aurelio", "Epicteto", "Séneca", "Seneca"}
    autor_est = tri.get("estoico", {}).get("autor") or ""
    if not any(e in autor_est for e in estoicos_validos):
        errors.append(
            f"triangulo.estoico.autor debe ser Marco Aurelio | Epicteto | Séneca. "
            f"Encontrado: '{autor_est}'"
        )

    # Floridi
    if "Floridi" not in (tri.get("floridi", {}).get("autor") or ""):
        errors.append("triangulo.floridi.autor debe contener 'Floridi'")

    # Citas no vacías
    for nombre in ("dussel", "estoico", "floridi"):
        cita = tri.get(nombre, {}).get("cita") or ""
        if len(cita.strip()) < 20:
            errors.append(f"triangulo.{nombre}.cita es muy corta o vacía: '{cita[:30]}...'")

    return errors


def lint_200_palabras(g: dict) -> list[str]:
    """Warnings por campos de texto que exceden 200 palabras."""
    warnings = []
    for path, getter in CAMPOS_TEXTO_LARGO:
        try:
            text = getter(g) or ""
        except (KeyError, TypeError):
            continue
        words = len(text.split())
        if words > 200:
            warnings.append(f"{path}: {words} palabras (límite 200). Considera partir el bloque.")
    return warnings


def lint_latex_escapes(g: dict) -> list[str]:
    """Errores por caracteres especiales LaTeX sin escapar."""
    errors = []
    # Solo revisamos los campos de texto continuo (no listas, no metadata)
    campos = [
        f"apertura.{k}" for k in ("saber_ancestral", "saber_contemporaneo", "pregunta_puente", "saber_hacer")
    ] + [
        f"puentes.{k}" for k in ("a_ruta", "a_escuta", "a_sistematizacion", "a_praxis", "a_producto", "a_evaluacion", "a_triangulo")
    ] + [
        "escuta.escena", "escuta.cuaderno",
        "sistematizacion.intro", "sistematizacion.errores_comunes", "sistematizacion.cuaderno",
        "sistematizacion.anatomia.body",
        "praxis.intro", "praxis.cuaderno", "praxis.plantilla_guion",
        "praxis.checklist.items",
        "triangulo.dussel.aplicacion", "triangulo.estoico.aplicacion", "triangulo.floridi.aplicacion",
        "compromiso",
    ]
    for path in campos:
        text = _get(g, path)
        if not text:
            continue
        # Detecta # & % sin \ previo. Excluye URLs y patrones #N
        for char in ("#", "&", "%"):
            # `(?<!\\)` lookahead negativo: no precedido por backslash
            pattern = rf"(?<!\\){re.escape(char)}"
            matches = re.findall(pattern, text)
            if matches:
                # Mostrar contexto del primer hallazgo
                idx = re.search(pattern, text).start()
                context = text[max(0, idx - 20):idx + 20].replace("\n", " ")
                errors.append(
                    f"{path}: carácter LaTeX '{char}' sin escapar. "
                    f"Contexto: \"...{context}...\". "
                    f"Reemplaza por '\\{char}'."
                )
                break  # un error por campo es suficiente
    return errors


# ─── Reporte ─────────────────────────────────────────────────────────────────

def lint_guia(g: dict) -> tuple[list[str], list[str]]:
    """Corre todos los lints y devuelve (errores, warnings)."""
    if not g.get("completo"):
        return [], []  # outlines no se lintean

    errors: list[str] = []
    warnings: list[str] = []

    errors += lint_required_fields(g)

    # Solo seguimos si la estructura básica está OK
    if errors:
        return errors, warnings

    _, verbo_errors, verbo_warnings = lint_verbos(g)
    errors += verbo_errors
    warnings += verbo_warnings

    errors += lint_triangulo(g)
    errors += lint_latex_escapes(g)

    warnings += lint_saber_ancestral(g)
    warnings += lint_200_palabras(g)

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="Linter del contrato MILC v3 para guías YAML.")
    parser.add_argument("claves", nargs="*", help="Claves específicas (ej. 1-2 1-3). Vacío = todas.")
    parser.add_argument("--grado", type=int, default=11)
    parser.add_argument("--strict", action="store_true", help="Tratar warnings como errores")
    args = parser.parse_args()

    content_dir = ROOT / "content" / "guias" / str(args.grado)
    paths = sorted(
        content_dir.glob("*.yaml"),
        key=lambda p: tuple(int(x) for x in p.stem.split("-")[1:]),
    )

    seleccion = args.claves
    if not seleccion:
        seleccion = None  # todas

    n_completas = 0
    n_outlines = 0
    n_con_errores = 0
    n_con_warnings = 0

    print()
    print(f"  Plataforma Conéctate · Grado {args.grado}° · Lint contrato MILC v3")
    print("  " + "─" * 70)
    print()

    for path in paths:
        with path.open(encoding="utf-8") as f:
            g = yaml.safe_load(f)
        clave = g["clave"]
        if seleccion and clave not in seleccion:
            continue

        gnum = (g["periodo"] - 1) * 10 + g["sesion"]

        if not g.get("completo"):
            n_outlines += 1
            print(f"  {DIM}·  {clave}  (G{gnum:02d})  outline (no lint){RESET}")
            continue

        n_completas += 1
        errors, warnings = lint_guia(g)

        if errors:
            n_con_errores += 1
            print(f"  {RED}✗  {clave}  (G{gnum:02d})  {len(errors)} error(es){RESET}")
            for e in errors:
                print(f"       {RED}✗{RESET} {e}")
        elif warnings:
            n_con_warnings += 1
            print(f"  {YELLOW}⚠  {clave}  (G{gnum:02d})  {len(warnings)} warning(s){RESET}")
            for w in warnings:
                print(f"       {YELLOW}⚠{RESET} {w}")
        else:
            print(f"  {GREEN}✓  {clave}  (G{gnum:02d})  OK{RESET}")

    print()
    print(f"  Resumen: {GREEN}{n_completas - n_con_errores - n_con_warnings} OK{RESET} · "
          f"{YELLOW}{n_con_warnings} con warnings{RESET} · "
          f"{RED}{n_con_errores} con errores{RESET}  "
          f"(de {n_completas} completas, +{n_outlines} outlines)")
    print()

    if n_con_errores > 0:
        return 1
    if args.strict and n_con_warnings > 0:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
