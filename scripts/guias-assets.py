#!/usr/bin/env python3
"""
Lista los assets (imágenes, diagramas) declarados por cada guía y reporta
referencias rotas (asset declarado pero archivo ausente en disco).

Uso:
    python3 scripts/guias-assets.py            # todas las guías del grado 11
    python3 scripts/guias-assets.py 1-2        # solo G11·P1·S2
    python3 scripts/guias-assets.py --grado 6  # otro grado
"""
from __future__ import annotations

import argparse
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent

RESET = "\033[0m"
RED = "\033[31m"
YELLOW = "\033[33m"
GREEN = "\033[32m"
DIM = "\033[2m"


def _assets_dir(sesion_global: int, grado: int) -> Path:
    return ROOT / "public" / "guias-mejoras" / "assets" / f"{sesion_global}-{grado}"


def listar_guia(guia: dict, grado: int) -> tuple[int, int, list[str]]:
    """Devuelve (total_declarados, total_rotos, lineas_reporte)."""
    sg = (guia["periodo"] - 1) * 10 + guia["sesion"]
    assets_dir = _assets_dir(sg, grado)

    recursos = guia.get("recursos") or {}
    imagenes = recursos.get("imagenes") or []
    diagramas = recursos.get("diagramas") or []
    todos = [("img", i) for i in imagenes] + [("dia", d) for d in diagramas]

    if not todos:
        return 0, 0, []

    lineas = []
    rotos = 0
    for tipo, asset in todos:
        archivo = asset.get("archivo", "?")
        alt = asset.get("alt", "(sin alt)")
        path = assets_dir / archivo
        if path.exists():
            mark = f"{GREEN}✓{RESET}"
        else:
            mark = f"{RED}✗{RESET}"
            rotos += 1
        lineas.append(f"       {mark} [{tipo}] {archivo}  {DIM}— {alt[:50]}{RESET}")

    return len(todos), rotos, lineas


def main() -> int:
    parser = argparse.ArgumentParser(description="Lista assets declarados por las guías.")
    parser.add_argument("claves", nargs="*", help="Claves específicas (ej. 1-2). Vacío = todas.")
    parser.add_argument("--grado", type=int, default=11)
    args = parser.parse_args()

    content_dir = ROOT / "content" / "guias" / str(args.grado)
    paths = sorted(
        content_dir.glob("*.yaml"),
        key=lambda p: tuple(int(x) for x in p.stem.split("-")[1:]),
    )

    seleccion = args.claves if args.claves else None

    print()
    print(f"  Plataforma Conéctate · Grado {args.grado}° · Assets declarados")
    print("  " + "─" * 60)
    print()

    total_assets = 0
    total_rotos = 0
    guias_con_assets = 0

    for path in paths:
        with path.open(encoding="utf-8") as f:
            g = yaml.safe_load(f)
        clave = g["clave"]
        if seleccion and clave not in seleccion:
            continue

        n, rotos, lineas = listar_guia(g, args.grado)
        sg = (g["periodo"] - 1) * 10 + g["sesion"]

        if n == 0:
            if seleccion:
                print(f"  {DIM}·  {clave}  (G{sg:02d})  sin assets declarados{RESET}")
            continue

        guias_con_assets += 1
        total_assets += n
        total_rotos += rotos

        if rotos == 0:
            print(f"  {GREEN}✓{RESET}  {clave}  (G{sg:02d})  {n} asset(s) OK")
        else:
            print(f"  {RED}✗{RESET}  {clave}  (G{sg:02d})  {n} asset(s) · {rotos} rotos")
        for linea in lineas:
            print(linea)

    print()
    if total_assets == 0:
        print(f"  {DIM}Ninguna guía declara assets todavía. La estructura está lista para cuando se necesite.{RESET}")
        print(f"  {DIM}Convención: public/guias-mejoras/assets/{{sesionGlobal}}-{args.grado}/{RESET}")
    else:
        estado = (
            f"{GREEN}{total_assets - total_rotos} OK{RESET}"
            + (f" · {RED}{total_rotos} rotos{RESET}" if total_rotos else "")
        )
        print(f"  Resumen: {guias_con_assets} guías con assets · {total_assets} total · {estado}")
    print()

    return 1 if total_rotos > 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
