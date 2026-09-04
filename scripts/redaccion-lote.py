#!/usr/bin/env python3
"""
Correcciones mecánicas de redacción en lote sobre el TEXTO de los YAML.

Alcance: `content/guias/**/*.yaml`, `content/examenes/*.yaml`,
`content/proyectos/*.yaml`. Los archivos se leen como texto, se aplican
expresiones regulares línea a línea y se escriben tal cual (nunca se
re-serializa el YAML, así el formato queda intacto).

Patrones (nombre → qué hace):
- signo_punto        «¿…?.» / «¡…!.» → sin el punto tras el signo de cierre.
                     Solo cuando al punto le sigue espacio o fin de línea: no
                     toca `?.` pegado a otra cosa (comilla de cierre, código,
                     URLs) ni «?».», que es correcto.
- se_especifico      «se específico» → «sé específico» (imperativo de ser).
- solo               «sólo» → «solo» (RAE 2010).
- raya_doble_espacio «---  » (raya con dos o más espacios) → «--- ».
- porcentaje         «20\\%» → «20 \\%» con espacio fino (U+202F, no separable)
                     antes del porcentaje; respeta el escape LaTeX. No se toca
                     dentro de modo matemático `$…$` (se reporta).
- horas              «7 pm», «7pm», «3 PM» → «7 p. m.», «3 p. m.» (y «a. m.»).
- toda_analisis      «toda análisis» → «todo análisis».
- cada_una_una       «cada una una decisión» → «cada una, una decisión».

Uso:
    python3 scripts/redaccion-lote.py --dry-run                 # muestra archivo, patrón, línea y contexto
    python3 scripts/redaccion-lote.py                           # aplica todos los patrones
    python3 scripts/redaccion-lote.py --patron solo --patron horas
    python3 scripts/redaccion-lote.py --dry-run content/guias/9  # limita a rutas
    python3 scripts/redaccion-lote.py --listar                  # lista los patrones
"""
from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable

ROOT = Path(__file__).resolve().parent.parent
ALCANCE = [
    (ROOT / "content" / "guias", "**/*.yaml"),
    (ROOT / "content" / "examenes", "*.yaml"),
    (ROOT / "content" / "proyectos", "*.yaml"),
]

ESPACIO_FINO = "~"  # espacio indivisible LaTeX: XeTeX lo respeta con cualquier fuente; la web lo convierte en espacio (latex_to_text)

RESET, RED, YELLOW, GREEN, DIM, BOLD, CYAN = "\033[0m", "\033[31m", "\033[33m", "\033[32m", "\033[2m", "\033[1m", "\033[36m"


def sin_color() -> None:
    global RESET, RED, YELLOW, GREEN, DIM, BOLD, CYAN
    RESET = RED = YELLOW = GREEN = DIM = BOLD = CYAN = ""


# ─── Patrones ────────────────────────────────────────────────────────────────


def fuera_de_math(line: str, m: re.Match) -> bool:
    """True si la coincidencia NO está dentro de `$…$` en esa línea."""
    antes = line[:m.start()]
    return len(re.findall(r"(?<!\\)\$", antes)) % 2 == 0


@dataclass
class Patron:
    nombre: str
    descripcion: str
    regex: re.Pattern
    reemplazo: Callable[[re.Match], str]
    filtro: Callable[[str, re.Match], bool] | None = None
    omitido_msg: str = ""
    # coincidencias que el filtro descartó (para revisión manual)
    omitidos: list = field(default_factory=list)


def _horas(m: re.Match) -> str:
    return f"{m.group(1)} {m.group(2)[0].lower()}. m."


PATRONES: list[Patron] = [
    Patron("signo_punto", "punto sobrante tras ? o ! de cierre",
           re.compile(r"([?!])\.(?=\s|$)"), lambda m: m.group(1)),
    Patron("se_especifico", "«se específico» → «sé específico»",
           re.compile(r"\b([Ss])e específico\b"), lambda m: ("S" if m.group(1) == "S" else "s") + "é específico"),
    Patron("solo", "«sólo» → «solo»",
           re.compile(r"\b([Ss])ólo\b"), lambda m: m.group(1) + "olo"),
    Patron("raya_doble_espacio", "«---  » → «--- »",
           re.compile(r"(?<!-)---(?!-)  +"), lambda m: "--- "),
    Patron("porcentaje", "«20\\%» → «20 \\%» (espacio fino U+202F)",
           re.compile(r"(\d)\\%"), lambda m: m.group(1) + ESPACIO_FINO + "\\%",
           filtro=fuera_de_math, omitido_msg="dentro de modo matemático $…$"),
    Patron("horas", "«7 pm» / «7pm» / «3 PM» → «7 p. m.» / «3 p. m.»",
           re.compile(r"(?<![\d.,])(\d{1,2})\s?(am|pm)\b", re.I), _horas),
    Patron("toda_analisis", "«toda análisis» → «todo análisis»",
           re.compile(r"\b([Tt])oda análisis\b"), lambda m: m.group(1) + "odo análisis"),
    Patron("cada_una_una", "«cada una una decisión» → «cada una, una decisión»",
           re.compile(r"\bcada una una decisión\b"), lambda m: "cada una, una decisión"),
]

# Casos vecinos de `signo_punto` que NO se tocan, solo se reportan para revisión
RE_SIGNO_PUNTO_PEGADO = re.compile(r"[?!]\.(?!\s|$)")


# ─── Aplicación ──────────────────────────────────────────────────────────────


def archivos(rutas: list[str]) -> list[Path]:
    if rutas:
        out: list[Path] = []
        for r in rutas:
            p = Path(r)
            if not p.is_absolute():
                p = ROOT / p
            if p.is_dir():
                out.extend(sorted(p.rglob("*.yaml")))
            elif p.exists():
                out.append(p)
            else:
                print(f"{RED}✗ no existe: {r}{RESET}", file=sys.stderr)
        return out
    out = []
    for d, glob in ALCANCE:
        if d.exists():
            # Los bancos (_banco-citas.yaml, _SCHEMA…) guardan citas textuales
            # cotejadas: no se les corrige la ortografía.
            out.extend(sorted(f for f in d.glob(glob) if not f.name.startswith("_")))
    return out


def contexto(line: str, a: int, b: int, ancho: int = 38) -> str:
    ini, fin = max(0, a - ancho), min(len(line), b + ancho)
    return ("…" if ini > 0 else "") + line[ini:fin].strip() + ("…" if fin < len(line) else "")


def procesar(path: Path, patrones: list[Patron], dry_run: bool) -> tuple[Counter, list[str]]:
    """Devuelve (conteo por patrón, líneas de reporte). Escribe si hay cambios y no es dry-run."""
    raw = path.read_text(encoding="utf-8")
    lines = raw.split("\n")
    conteo: Counter = Counter()
    reporte: list[str] = []
    rel = path.relative_to(ROOT) if ROOT in path.parents else path
    cambiado = False
    for i, line in enumerate(lines):
        nueva = line
        for pat in patrones:
            def sub(m: re.Match, pat=pat, line=line, i=i) -> str:
                if pat.filtro and not pat.filtro(line, m):
                    pat.omitidos.append(f"{rel}:{i + 1}  {contexto(line, m.start(), m.end())}")
                    return m.group(0)
                r = pat.reemplazo(m)
                conteo[pat.nombre] += 1
                if dry_run:
                    reporte.append(f"{CYAN}{rel}:{i + 1}{RESET}  {BOLD}{pat.nombre:<19}{RESET} "
                                   f"{contexto(line, m.start(), m.end())}  {DIM}→{RESET} "
                                   f"{line[max(0, m.start() - 12):m.start()].lstrip()}{GREEN}{r}{RESET}{line[m.end():m.end() + 12]}")
                return r
            nueva = pat.regex.sub(sub, nueva)
        if nueva != line:
            lines[i] = nueva
            cambiado = True
    if cambiado and not dry_run:
        path.write_text("\n".join(lines), encoding="utf-8")
    return conteo, reporte


def main() -> int:
    ap = argparse.ArgumentParser(description="Correcciones mecánicas de redacción sobre el texto de los YAML.")
    ap.add_argument("rutas", nargs="*", help="Archivos o carpetas (opcional). Por defecto: guías, exámenes y proyectos.")
    ap.add_argument("--dry-run", action="store_true", help="Muestra archivo, patrón, línea y contexto; no escribe.")
    ap.add_argument("--patron", action="append", metavar="NOMBRE", help="Aplica solo este patrón (repetible).")
    ap.add_argument("--listar", action="store_true", help="Lista los patrones disponibles y termina.")
    ap.add_argument("--no-color", action="store_true")
    args = ap.parse_args()
    if args.no_color or not sys.stdout.isatty():
        sin_color()

    if args.listar:
        for p in PATRONES:
            print(f"  {BOLD}{p.nombre:<19}{RESET} {p.descripcion}")
        return 0
    nombres = {p.nombre for p in PATRONES}
    if args.patron:
        malos = [n for n in args.patron if n not in nombres]
        if malos:
            print(f"{RED}✗ patrón desconocido: {', '.join(malos)}. Usa --listar.{RESET}", file=sys.stderr)
            return 2
        patrones = [p for p in PATRONES if p.nombre in set(args.patron)]
    else:
        patrones = list(PATRONES)

    files = archivos(args.rutas)
    if not files:
        print(f"{RED}✗ no hay archivos que procesar{RESET}", file=sys.stderr)
        return 2
    modo = "DRY-RUN" if args.dry_run else "ESCRITURA"
    print(f"{BOLD}▸ redaccion-lote · {modo} · {len(files)} archivo(s) · {len(patrones)} patrón(es){RESET}")

    total: Counter = Counter()
    con_cambios = 0
    pegados: list[str] = []
    revisar_signo = any(p.nombre == "signo_punto" for p in patrones)
    for f in files:
        conteo, reporte = procesar(f, patrones, args.dry_run)
        for l in reporte:
            print("  " + l)
        if conteo:
            con_cambios += 1
            total.update(conteo)
        if revisar_signo:
            rel = f.relative_to(ROOT) if ROOT in f.parents else f
            for i, line in enumerate(f.read_text(encoding="utf-8").split("\n")):
                for m in RE_SIGNO_PUNTO_PEGADO.finditer(line):
                    pegados.append(f"{rel}:{i + 1}  {contexto(line, m.start(), m.end())}")

    print("")
    print(f"{BOLD}Conteo por patrón{RESET}")
    for p in patrones:
        n = total.get(p.nombre, 0)
        print(f"  {GREEN if n else DIM}{p.nombre:<19}{n:>5}{RESET}")
    print(f"  {'total':<19}{sum(total.values()):>5}   en {con_cambios} archivo(s)")
    for p in patrones:
        if p.omitidos:
            print(f"\n{YELLOW}Revisar a mano · {p.nombre} · {len(p.omitidos)} omitida(s) ({p.omitido_msg}){RESET}")
            for o in p.omitidos:
                print(f"  {o}")
    if pegados:
        print(f"\n{YELLOW}Revisar a mano · signo_punto · {len(pegados)} «?.»/«!.» pegados a otra cosa (no se tocan){RESET}")
        for o in pegados:
            print(f"  {o}")
    if args.dry_run:
        print(f"\n  {DIM}(dry-run: nada se escribió){RESET}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
