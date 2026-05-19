#!/usr/bin/env python3
"""
Linter del contrato del examen final MILC v3 para los YAML en content/examenes/.

Valida estructura, cantidades, ids estables del banco, distribución por Bloom
y por sesión, y la suma de puntos del examen formal.

Uso:
    python3 scripts/examenes-lint.py            # todos los exámenes completos
    python3 scripts/examenes-lint.py 11-1       # solo uno
    python3 scripts/examenes-lint.py --strict   # warnings cuentan como errores
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "examenes"

# ─── Contrato ────────────────────────────────────────────────────────

REQUIRED_TOP = [
    "clave", "grado", "periodo", "completo", "titulo", "titulo_portada",
    "duracion_min", "ponderacion", "fecha_aplicacion",
    "apertura", "aprendizajes", "examen_formal", "banco_practica", "cierre",
]
REQUIRED_APERTURA = ["saber_ancestral", "contexto", "pregunta_marco"]
REQUIRED_FORMAL = ["concreto", "contexto", "practico", "reflexivo"]
REQUIRED_ITEM_ABIERTA = ["enunciado", "criterio"]
REQUIRED_ITEM_BANCO = ["id", "bloom", "sesion", "tipo", "enunciado", "opciones",
                       "respuesta_index", "feedback_correcto", "feedback_incorrecto"]

BLOOM_VALIDOS = {"recordar", "comprender", "aplicar", "analizar", "evaluar", "crear"}
TIPOS_PRACTICO = {"abierta_corta", "abierta_larga", "opcion_multiple", "caso"}

# Códigos ANSI para color en terminal.
class C:
    OK = "\033[32m"
    WARN = "\033[33m"
    ERR = "\033[31m"
    DIM = "\033[2m"
    RST = "\033[0m"


# ─── Validaciones por sección ────────────────────────────────────────


def check_top(data: dict) -> tuple[list[str], list[str]]:
    errs, warns = [], []
    for k in REQUIRED_TOP:
        if k not in data:
            errs.append(f"falta campo raíz `{k}`")
    # Tipos esperados.
    if "grado" in data and data["grado"] not in (6, 7, 8, 9, 10, 11):
        warns.append(f"grado={data['grado']} fuera de rango 6-11")
    if "periodo" in data and data["periodo"] not in (1, 2, 3):
        errs.append(f"periodo={data['periodo']} fuera de rango 1-3")
    if "clave" in data:
        esperado = f"{data.get('grado')}-{data.get('periodo')}"
        if str(data["clave"]) != esperado:
            errs.append(f"clave `{data['clave']}` no coincide con grado-periodo `{esperado}`")
    if "ponderacion" in data and not (5 <= int(data["ponderacion"]) <= 50):
        warns.append(f"ponderacion={data['ponderacion']}% fuera del rango típico [5,50]")
    if "duracion_min" in data and not (20 <= int(data["duracion_min"]) <= 120):
        warns.append(f"duracion_min={data['duracion_min']} fuera del rango típico [20,120]")
    return errs, warns


def check_apertura(data: dict) -> list[str]:
    errs = []
    apertura = data.get("apertura") or {}
    for k in REQUIRED_APERTURA:
        if not apertura.get(k):
            errs.append(f"falta `apertura.{k}` o está vacío")
    return errs


def check_aprendizajes(data: dict) -> tuple[list[str], list[str]]:
    errs, warns = [], []
    aprendizajes = data.get("aprendizajes") or []
    if len(aprendizajes) < 5:
        errs.append(f"`aprendizajes` debe tener al menos 5 entradas, tiene {len(aprendizajes)}")
    elif len(aprendizajes) < 10:
        warns.append(f"`aprendizajes` ideal 1 por sesión (10); tiene {len(aprendizajes)}")
    sesiones_vistas = set()
    for a in aprendizajes:
        if not isinstance(a, dict) or "sesion" not in a or "titulo" not in a:
            errs.append(f"aprendizaje mal formado: {a!r}")
            continue
        if a["sesion"] in sesiones_vistas:
            errs.append(f"sesion {a['sesion']} declarada dos veces en aprendizajes")
        sesiones_vistas.add(a["sesion"])
    return errs, warns


def check_examen_formal(data: dict) -> tuple[list[str], list[str]]:
    errs, warns = [], []
    formal = data.get("examen_formal") or {}
    for k in REQUIRED_FORMAL:
        if k not in formal:
            errs.append(f"falta `examen_formal.{k}`")
    # Concreto y contexto: 1 ítem cada uno (estructura plana).
    for k in ("concreto", "contexto"):
        item = formal.get(k) or {}
        for r in REQUIRED_ITEM_ABIERTA:
            if not item.get(r):
                errs.append(f"falta `examen_formal.{k}.{r}` o está vacío")
    # Práctico: lista de 2 ítems.
    practico = formal.get("practico") or []
    if not isinstance(practico, list):
        errs.append("`examen_formal.practico` debe ser lista")
    elif len(practico) != 2:
        errs.append(f"`examen_formal.practico` debe tener 2 ítems, tiene {len(practico)}")
    for i, item in enumerate(practico if isinstance(practico, list) else [], start=1):
        for r in REQUIRED_ITEM_ABIERTA:
            if not item.get(r):
                errs.append(f"falta `examen_formal.practico[{i}].{r}`")
        tipo = item.get("tipo", "abierta_larga")
        if tipo not in TIPOS_PRACTICO:
            warns.append(f"`examen_formal.practico[{i}].tipo`=`{tipo}` no es estándar")
        if tipo == "opcion_multiple":
            opciones = item.get("opciones") or []
            if len(opciones) < 3 or len(opciones) > 5:
                errs.append(f"opcion_multiple en practico[{i}] necesita 3-5 opciones, tiene {len(opciones)}")
            ri = item.get("respuesta_index")
            if ri is None or not (0 <= int(ri) < len(opciones)):
                errs.append(f"respuesta_index fuera de rango en practico[{i}]")
    # Reflexivo: 3 voces obligatorias.
    reflexivo = formal.get("reflexivo") or {}
    for r in REQUIRED_ITEM_ABIERTA:
        if not reflexivo.get(r):
            errs.append(f"falta `examen_formal.reflexivo.{r}`")
    voces = reflexivo.get("voces") or {}
    for v in ("dussel", "estoico", "floridi"):
        if not voces.get(v):
            errs.append(f"falta `examen_formal.reflexivo.voces.{v}`")
    # Suma de puntos = 5.0.
    puntos = []
    for k in ("concreto", "contexto"):
        item = formal.get(k) or {}
        puntos.append(float(item.get("puntos", 1.0)))
    for item in (formal.get("practico") or []):
        puntos.append(float(item.get("puntos", 1.0)))
    refl_pts = float((formal.get("reflexivo") or {}).get("puntos", 1.0))
    puntos.append(refl_pts)
    total = sum(puntos)
    if abs(total - 5.0) > 0.01:
        errs.append(f"suma de puntos del examen formal = {total}, debe ser 5.0")
    return errs, warns


def check_banco(data: dict) -> tuple[list[str], list[str]]:
    errs, warns = [], []
    banco = data.get("banco_practica") or []
    if len(banco) < 20:
        errs.append(f"`banco_practica` debe tener al menos 20 ítems, tiene {len(banco)}")
    if len(banco) > 30:
        errs.append(f"`banco_practica` no puede tener más de 30 ítems, tiene {len(banco)}")

    ids = set()
    sesiones_cubiertas: dict[int, int] = {}
    bloom_counts: dict[str, int] = {}

    for i, item in enumerate(banco, start=1):
        if not isinstance(item, dict):
            errs.append(f"banco_practica[{i}] no es objeto")
            continue
        for r in REQUIRED_ITEM_BANCO:
            if r not in item:
                errs.append(f"banco_practica[{i}] falta `{r}`")
        id_ = item.get("id", "")
        if not re.match(r"^bp-\d{3}$", str(id_)):
            errs.append(f"banco_practica[{i}].id=`{id_}` no sigue patrón `bp-NNN`")
        if id_ in ids:
            errs.append(f"id duplicado en banco_practica: `{id_}`")
        ids.add(id_)
        bloom = item.get("bloom", "")
        if bloom not in BLOOM_VALIDOS:
            errs.append(f"banco_practica[{i}].bloom=`{bloom}` no es válido")
        else:
            bloom_counts[bloom] = bloom_counts.get(bloom, 0) + 1
        sesion = item.get("sesion")
        if isinstance(sesion, int):
            sesiones_cubiertas[sesion] = sesiones_cubiertas.get(sesion, 0) + 1
        tipo = item.get("tipo", "")
        if tipo != "opcion_multiple":
            errs.append(f"banco_practica[{i}].tipo debe ser `opcion_multiple`, es `{tipo}`")
        opciones = item.get("opciones") or []
        if len(opciones) < 3 or len(opciones) > 5:
            errs.append(f"banco_practica[{i}] necesita 3-5 opciones, tiene {len(opciones)}")
        ri = item.get("respuesta_index")
        if ri is None or not (0 <= int(ri) < len(opciones)):
            errs.append(f"banco_practica[{i}] respuesta_index fuera de rango")

    # Cobertura por sesión: idealmente 2-3 por sesión declarada en aprendizajes.
    sesiones_declaradas = {a.get("sesion") for a in (data.get("aprendizajes") or []) if isinstance(a, dict)}
    for s in sorted(sesiones_declaradas):
        cnt = sesiones_cubiertas.get(s, 0)
        if cnt == 0:
            warns.append(f"banco no cubre sesion {s}")
        elif cnt < 2:
            warns.append(f"banco solo tiene 1 ítem para sesion {s} (ideal ≥2)")

    # Distribución Bloom: ideal 30/40/30.
    total = sum(bloom_counts.values()) or 1
    p_recall = (bloom_counts.get("recordar", 0) + bloom_counts.get("comprender", 0)) / total
    p_aplicar = (bloom_counts.get("aplicar", 0) + bloom_counts.get("analizar", 0)) / total
    p_top = (bloom_counts.get("evaluar", 0) + bloom_counts.get("crear", 0)) / total
    if abs(p_recall - 0.30) > 0.20:
        warns.append(f"Bloom recordar+comprender = {p_recall:.0%} (ideal ~30%)")
    if abs(p_aplicar - 0.40) > 0.20:
        warns.append(f"Bloom aplicar+analizar = {p_aplicar:.0%} (ideal ~40%)")
    if abs(p_top - 0.30) > 0.20:
        warns.append(f"Bloom evaluar+crear = {p_top:.0%} (ideal ~30%)")
    return errs, warns


def check_cierre(data: dict) -> list[str]:
    if not (data.get("cierre") or "").strip():
        return ["falta `cierre` o está vacío"]
    return []


# ─── Pipeline ────────────────────────────────────────────────────────


def lint_archivo(path: Path) -> tuple[list[str], list[str]]:
    """Devuelve (errores, warnings) del archivo YAML."""
    try:
        with path.open("r", encoding="utf-8") as fh:
            data = yaml.safe_load(fh)
    except Exception as exc:
        return [f"YAML inválido: {exc}"], []

    if not isinstance(data, dict):
        return ["raíz del YAML no es objeto"], []

    if not data.get("completo"):
        return [], []  # outline, no se valida

    errs, warns = [], []
    e, w = check_top(data); errs += e; warns += w
    errs += check_apertura(data)
    e, w = check_aprendizajes(data); errs += e; warns += w
    e, w = check_examen_formal(data); errs += e; warns += w
    e, w = check_banco(data); errs += e; warns += w
    errs += check_cierre(data)

    return errs, warns


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("claves", nargs="*", help="Claves a validar (ej. 11-1). Si vacío, todos.")
    ap.add_argument("--strict", action="store_true", help="Warnings cuentan como errores")
    args = ap.parse_args()

    if not CONTENT_DIR.exists():
        print(f"{C.ERR}✗ No existe {CONTENT_DIR}{C.RST}")
        return 1

    if args.claves:
        archivos = [CONTENT_DIR / f"{c}.yaml" for c in args.claves]
    else:
        archivos = sorted([f for f in CONTENT_DIR.glob("*.yaml") if not f.stem.startswith("_")])

    if not archivos:
        print(f"{C.WARN}· Sin exámenes que validar{C.RST}")
        return 0

    total_ok = total_warn = total_err = 0
    print(f"\n  {C.DIM}Linter de exámenes MILC v3 · {len(archivos)} archivo(s){C.RST}")
    print(f"  {C.DIM}{'─'*70}{C.RST}")

    for path in archivos:
        if not path.exists():
            print(f"  {C.ERR}✗  {path.name}: no existe{C.RST}")
            total_err += 1
            continue
        errs, warns = lint_archivo(path)
        clave = path.stem
        if not errs and not warns:
            print(f"  {C.OK}✓  {clave}  OK{C.RST}")
            total_ok += 1
        elif not errs:
            print(f"  {C.WARN}⚠  {clave}  {len(warns)} warning(s){C.RST}")
            for w in warns:
                print(f"      {C.WARN}· {w}{C.RST}")
            total_warn += 1
        else:
            print(f"  {C.ERR}✗  {clave}  {len(errs)} error(es), {len(warns)} warning(s){C.RST}")
            for e in errs:
                print(f"      {C.ERR}✗ {e}{C.RST}")
            for w in warns:
                print(f"      {C.WARN}· {w}{C.RST}")
            total_err += 1

    print(f"  {C.DIM}{'─'*70}{C.RST}")
    print(f"\n  Resumen: {C.OK}{total_ok} OK{C.RST} · {C.WARN}{total_warn} con warnings{C.RST} · {C.ERR}{total_err} con errores{C.RST}\n")

    if total_err > 0:
        return 1
    if args.strict and total_warn > 0:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
