#!/usr/bin/env python3
"""Informe del desfase entre las guías del repo y el contrato v3.1.

Recorre los dos programas que hoy tienen guías ---las de grado y Territorio
Interior--- y produce un informe en markdown con el estado de cada una.

No modifica ninguna guía: solo lee. El exit code es siempre 0, porque esto es
un informe y no una compuerta de calidad ---esa es guias-lint.py---.

Uso:
    python3 scripts/guias-auditoria.py                          # a stdout
    python3 scripts/guias-auditoria.py --out docs/auditoria/x.md --json
    python3 scripts/guias-auditoria.py --programa territorio-interior
"""

from __future__ import annotations

import argparse
import datetime as dt
import importlib.util
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent

# guias-lint.py lleva guion: no es importable con `import`. Hay que registrarlo
# en sys.modules antes de ejecutarlo, porque @dataclass resuelve el módulo de la
# clase por ahí y sin eso falla al construir Perfil.
_spec = importlib.util.spec_from_file_location("guias_lint", ROOT / "scripts" / "guias-lint.py")
gl = importlib.util.module_from_spec(_spec)
sys.modules["guias_lint"] = gl
_spec.loader.exec_module(gl)

VOCES = ("dussel", "estoico", "floridi")


# ─── Señales del contrato ────────────────────────────────────────────────────
# No son reglas de lint: son el estado declarado de la guía. Por eso viven aquí
# y no en el linter.

def estado_contrato(g: dict, perfil) -> str:
    if perfil.contrato == "propio":
        return "propio"
    return "v3.1" if g.get("duracion_min") else "legacy"


def atribucion(g: dict) -> tuple[int, int]:
    """(voces con obra+año, voces totales) según el criterio del propio linter."""
    tri = g.get("triangulo") or {}
    con = tot = 0
    for voz in VOCES:
        autor = str((tri.get(voz) or {}).get("autor") or "").strip()
        if not autor:
            continue
        tot += 1
        if gl._TIENE_OBRA.search(autor):
            con += 1
    return con, tot


def senales(g: dict, perfil) -> dict:
    web = g.get("web") or {}
    checks = (g.get("escuta") or {}).get("checks") or []
    con, tot = atribucion(g)
    cuadernos = [
        (g.get("escuta") or {}).get("cuaderno") or "",
        (g.get("sistematizacion") or {}).get("cuaderno") or "",
        (g.get("praxis") or {}).get("cuaderno") or "",
    ]
    return {
        "contrato": estado_contrato(g, perfil),
        "duracion_min": g.get("duracion_min") or "—",
        "tiene_origen": bool((g.get("apertura") or {}).get("origen")),
        "tiene_fuente": bool((g.get("apertura") or {}).get("fuente")),
        "modo_triangulo": (g.get("triangulo") or {}).get("modo") or "—",
        "atribucion": f"{con}/{tot}" if tot else "—",
        "atribucion_completa": tot > 0 and con == tot,
        "checks_3": len(checks) == 3,
        "extension_3": sum("Extensión:" in str(c) for c in cuadernos) == 3,
        "web_secciones": sorted(web.keys()),
        "tiene_quiz": bool(web.get("quiz")),
    }


# ─── Recolección ─────────────────────────────────────────────────────────────

def recolectar(programas: list[str]) -> list[dict]:
    filas: list[dict] = []
    for nombre in programas:
        perfil = gl.PERFILES[nombre]
        grados = range(6, 12) if nombre == "grado" else [None]
        for grado in grados:
            content_dir = perfil.dir_rel(grado or 11)
            if not content_dir.is_dir():
                continue
            for path in sorted(content_dir.glob("*.yaml"), key=perfil.orden_key):
                g = yaml.safe_load(path.read_text(encoding="utf-8"))
                if not g.get("completo"):
                    continue
                g_grado = int(g.get("grado") or 0)
                detalle = gl.lint_guia_detallado(g, g_grado, perfil)
                errores = sum(len(e) for e, _ in detalle.values())
                warnings = sum(len(w) for _, w in detalle.values())
                # En las guías de grado la clave es «periodo-sesion» («3-6»), que
                # fuera de su carpeta es ambigua. Se muestra con el grado delante.
                clave = str(g["clave"])
                filas.append({
                    "clave": clave if nombre != "grado" else f"{g_grado}-{clave}",
                    "clave_yaml": clave,
                    "programa": nombre,
                    "grado": g_grado,
                    "id": perfil.id_guia(g),
                    "errores": errores,
                    "warnings": warnings,
                    "reglas": {k: (len(e), len(w)) for k, (e, w) in detalle.items()},
                    **senales(g, perfil),
                })
    return filas


# ─── Informe ─────────────────────────────────────────────────────────────────

def _tabla(cabeceras: list[str], filas: list[list[str]]) -> list[str]:
    out = ["| " + " | ".join(cabeceras) + " |",
           "|" + "|".join("---" for _ in cabeceras) + "|"]
    out += ["| " + " | ".join(str(c) for c in f) + " |" for f in filas]
    return out


def render(filas: list[dict], cmd: str) -> str:
    hoy = dt.date.today().isoformat()
    L: list[str] = []
    n_grado = sum(f["programa"] == "grado" for f in filas)
    n_ti = sum(f["programa"] == "territorio-interior" for f in filas)

    L += [f"# Auditoría del contrato v3.1 · {hoy}", "",
          f"Generado con `{cmd}`. No modifica ninguna guía.", "",
          f"**{len(filas)} guías completas** — {n_grado} de grado y {n_ti} de Territorio Interior.",
          ""]

    # 1 · Agregado por programa y grado
    L += ["## 1 · Estado por programa y grado", ""]
    grupos: dict[tuple, list[dict]] = defaultdict(list)
    for f in filas:
        grupos[(f["programa"], f["grado"] if f["programa"] == "grado" else None)].append(f)
    tf = []
    for (prog, grado), gs in sorted(grupos.items(), key=lambda x: (x[0][0], x[0][1] or 0)):
        v31 = sum(g["contrato"] == "v3.1" for g in gs)
        limpias = sum(g["errores"] == 0 and g["warnings"] == 0 for g in gs)
        tf.append([prog, grado or "—", len(gs), v31, len(gs) - v31,
                   sum(g["errores"] for g in gs), sum(g["warnings"] for g in gs), limpias])
    L += _tabla(["programa", "grado", "guías", "v3.1", "resto", "errores", "warnings", "limpias"], tf)
    total_v31 = sum(f["contrato"] == "v3.1" for f in filas)
    L += ["", f"**{total_v31} de {len(filas)} guías declaran el contrato v3.1.**", ""]

    # 2 · Cobertura por regla
    L += ["## 2 · Cobertura por regla", "",
          "Guías afectadas por cada regla. `·` significa que la regla **no aplica** a ese "
          "programa, que es distinto de cero hallazgos.", ""]
    cols = [("grado", g) for g in range(6, 12)] + [("territorio-interior", None)]
    enc = ["regla"] + [f"{g}.º" if p == "grado" else "TI" for p, g in cols]
    estructurales = gl.REGLAS_V31_ESTRUCTURALES
    tf = []
    for rid, _fn in gl.REGLAS:
        fila = [f"`{rid}`"]
        for prog, grado in cols:
            if prog == "territorio-interior" and rid in estructurales:
                fila.append("·")
                continue
            sub = [f for f in filas if f["programa"] == prog
                   and (grado is None or f["grado"] == grado)]
            fila.append(sum(rid in f["reglas"] for f in sub) or "—")
        tf.append(fila)
    L += _tabla(enc, tf) + [""]

    # 3 · Señales del contrato
    L += ["## 3 · Señales del contrato", ""]
    tf = []
    for (prog, grado), gs in sorted(grupos.items(), key=lambda x: (x[0][0], x[0][1] or 0)):
        n = len(gs)
        tf.append([prog, grado or "—", n,
                   f"{sum(g['tiene_origen'] for g in gs)}/{n}",
                   f"{sum(g['tiene_fuente'] for g in gs)}/{n}",
                   f"{sum(g['atribucion_completa'] for g in gs)}/{n}",
                   f"{sum(g['checks_3'] for g in gs)}/{n}",
                   f"{sum(g['extension_3'] for g in gs)}/{n}",
                   f"{sum(g['tiene_quiz'] for g in gs)}/{n}"])
    L += _tabla(["programa", "grado", "guías", "origen", "fuente APA",
                 "atribución 3/3", "checks=3", "Extensión×3", "quiz"], tf) + [""]

    # 4 · Detalle por guía
    L += ["## 4 · Detalle por guía", ""]
    tf = []
    for f in filas:
        incumple = ", ".join(f"`{k}`" for k in f["reglas"]) or "—"
        tf.append([f["clave"], f["programa"], f["grado"], f["id"], f["contrato"],
                   f["errores"], f["warnings"], incumple])
    L += _tabla(["clave", "programa", "grado", "id", "contrato", "E", "W",
                 "reglas incumplidas"], tf) + [""]

    # 5 · Deuda por decidir
    L += ["## 5 · Deuda por decidir", ""]
    g8 = [f for f in filas if f["programa"] == "grado" and f["grado"] == 8]
    g8_falta = [f["clave"] for f in g8 if f["contrato"] != "v3.1"]
    sin_atrib = [f for f in filas if f["programa"] == "grado" and not f["atribucion_completa"]]
    ti = [f for f in filas if f["programa"] == "territorio-interior"]
    ti_sin_atrib = [f for f in ti if not f["atribucion_completa"]]
    largas_ti = sum(f["reglas"].get("oraciones-largas", (0, 0))[1] for f in ti)
    largas_gr = sum(f["reglas"].get("oraciones-largas", (0, 0))[1]
                    for f in filas if f["programa"] == "grado")
    conceptos = sum(len((yaml.safe_load(
        (ROOT / "content" / "guias" / "territorio-interior" / f"{f['clave_yaml']}.yaml")
        .read_text(encoding="utf-8")).get("web") or {}).get("conceptos_clave") or [])
        for f in ti)

    L += [f"- **Octavo, a medio migrar.** {len(g8) - len(g8_falta)} de {len(g8)} guías en v3.1; "
          f"faltan {len(g8_falta)}: {', '.join(f'`{c}`' for c in g8_falta) or '—'}. "
          "Es el único hueco parcial del repo y el más barato de cerrar.",
          "",
          f"- **Atribuciones.** {len(sin_atrib)} guías de grado no tienen las tres voces con "
          f"obra y año, frente a {len(ti_sin_atrib)} de las {len(ti)} de Territorio Interior. "
          "Es decir: **Territorio Interior va por delante en trazabilidad**, y la deuda está "
          "en las guías de grado. `content/guias/_banco-citas.yaml` ya trae el campo "
          "`autor_repo_previo`, que mapea los strings actuales a los corregidos.",
          "",
          f"- **Oraciones largas.** {largas_ti} hallazgos en las {len(ti)} guías de Territorio "
          f"Interior ---{sum('oraciones-largas' in f['reglas'] for f in ti)} de {len(ti)} "
          f"afectadas--- frente a {largas_gr} en las 180 de grado, en "
          f"{sum('oraciones-largas' in f['reglas'] for f in filas if f['programa'] == 'grado')} "
          "archivos. Es la regla más incumplida del repo y el candidato natural a un paso de "
          "reescritura.",
          "",
          f"- **{conceptos} conceptos que no se ven.** El bloque `web.conceptos_clave` de "
          "Territorio Interior no lo lee ningún script ni lo muestra ninguna página: "
          "`build-guias-web-ts.py` filtra por grados y exige `periodo`/`sesion` más "
          "`web.quiz`, y la página de momento solo enlaza el PDF. Dos salidas: conectarlo "
          "---extendiendo el builder web y la página--- o dejar de escribirlo. **No se decide "
          "en este informe.**",
          "",
          "- **`MODO_POR_GRADO` está duplicado** en `scripts/guias-lint.py` y "
          "`scripts/lib_triangulo.py`. Hoy coinciden; conviene unificarlo antes de que dejen "
          "de hacerlo.",
          ""]
    return "\n".join(L)


def main() -> int:
    p = argparse.ArgumentParser(description="Informe del desfase frente al contrato v3.1.")
    p.add_argument("--programa", choices=tuple(gl.PERFILES), action="append",
                   help="Limita el informe. Repetible. Por defecto, todos.")
    p.add_argument("--out", type=Path, help="Escribe el markdown a este archivo.")
    p.add_argument("--json", action="store_true", help="Escribe también el .json hermano.")
    args = p.parse_args()

    programas = args.programa or list(gl.PERFILES)
    filas = recolectar(programas)
    cmd = "python3 " + " ".join(["scripts/guias-auditoria.py"] + sys.argv[1:])
    md = render(filas, cmd.strip())

    def _corto(p: Path) -> str:
        p = p.resolve()
        return str(p.relative_to(ROOT)) if p.is_relative_to(ROOT) else str(p)

    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(md + "\n", encoding="utf-8")
        print(f"  informe → {_corto(args.out)}  ({len(filas)} guías)")
        if args.json:
            j = args.out.with_suffix(".json")
            j.write_text(json.dumps(filas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"  datos   → {_corto(j)}")
    else:
        print(md)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
