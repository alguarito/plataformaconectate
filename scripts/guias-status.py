#!/usr/bin/env python3
"""
Tablero de progreso del estado de las guías del grado activo.
Lee los YAMLs y muestra una vista rápida sin recompilar nada.

Uso:
    python3 scripts/guias-status.py            # grado 11 (default)
    python3 scripts/guias-status.py --grado 6  # otro grado (a futuro)
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent

PERIODOS_POR_GRADO = {
    11: {
        1: "P1 · Presencia y marca digital ",
        2: "P2 · Automatización y procesos ",
        3: "P3 · Proyecto final emprendedor",
    },
    9: {
        1: "P1 · Historia de la técnica   ",
        2: "P2 · Diseño editorial digital ",
        3: "P3 · Datos: registro a insight",
    },
    8: {
        1: "P1 · Datos con phronesis      ",
        2: "P2 · Lógica y micro:bit       ",
        3: "P3 · Multimedia y ciberética  ",
    },
}

# Fallback genérico si el grado no está en el mapa explícito.
PERIODOS_NOMBRE_FALLBACK = {
    1: "P1                              ",
    2: "P2                              ",
    3: "P3                              ",
}


def main() -> int:
    parser = argparse.ArgumentParser(description="Estado de progreso del trabajo de guías.")
    parser.add_argument("--grado", type=int, default=11, help="Grado a inspeccionar (default 11)")
    args = parser.parse_args()

    content_dir = ROOT / "content" / "guias" / str(args.grado)
    if not content_dir.exists():
        print(f"  ✗ No hay contenido en {content_dir.relative_to(ROOT)}")
        return 1

    paths = sorted(
        content_dir.glob("*.yaml"),
        key=lambda p: tuple(int(x) for x in p.stem.split("-")[1:]),
    )
    if not paths:
        print(f"  ✗ No hay YAMLs en {content_dir.relative_to(ROOT)}")
        return 1

    guias = [yaml.safe_load(p.open(encoding="utf-8")) for p in paths]

    # Agrupar por periodo.
    por_periodo: dict[int, list] = {1: [], 2: [], 3: []}
    for g in guias:
        por_periodo[g["periodo"]].append(g)
    for p in por_periodo:
        por_periodo[p].sort(key=lambda x: x["sesion"])

    total = len(guias)
    total_completas = sum(1 for g in guias if g.get("completo"))

    print()
    print(f"  Plataforma Conéctate · Grado {args.grado}° · Estado del trabajo")
    print("  " + "─" * 60)
    print()

    periodos_nombre = PERIODOS_POR_GRADO.get(args.grado, PERIODOS_NOMBRE_FALLBACK)
    for p, items in por_periodo.items():
        nombre = periodos_nombre[p]
        barra = "".join("▓" if g.get("completo") else "░" for g in items)
        completas = sum(1 for g in items if g.get("completo"))
        check = "  ✅" if completas == len(items) else ""
        print(f"  {nombre}  {barra}  {completas}/{len(items)}{check}")

    print()
    barra_total = "".join("▓" if g.get("completo") else "░" for g in guias)
    pct = int(100 * total_completas / total)
    print(f"  TOTAL                            {barra_total}  {total_completas}/{total}  ({pct}%)")
    print()

    pendientes = [
        (g["periodo"], g["sesion"], g["titulo"])
        for g in guias
        if not g.get("completo")
    ]
    if pendientes:
        p, s, t = pendientes[0]
        gnum = (p - 1) * 10 + s
        titulo_corto = t[:55] + ("…" if len(t) > 55 else "")
        print(f"  ▶ Siguiente pendiente: G{gnum:02d} · P{p}·S{s} — {titulo_corto}")
        if len(pendientes) > 1:
            print(f"    ({len(pendientes) - 1} más pendientes después)")
    else:
        print("  🎉 Todas las guías están completas.")
    print()

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
