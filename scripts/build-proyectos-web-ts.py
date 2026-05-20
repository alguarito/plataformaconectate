#!/usr/bin/env python3
"""
Generador del contenido web TS desde YAML SSOT de proyectos integradores MILC v3.

Lee content/proyectos/{grado}-{periodo}.yaml con `completo: true` y escribe
src/data/proyectosContenido/{grado}-{periodo}.ts.

Modelo entregable-céntrico: el proyecto se vertebra en 3-5 entregables.
Cada entregable lleva su consigna, pasos, reflexión incrustada del triángulo
(Dussel/Estoico/Floridi) y criterios observables.

Tras generar archivos nuevos, actualiza automáticamente _index.ts con los
imports faltantes.

Uso:
    python3 scripts/build-proyectos-web-ts.py            # todos los proyectos completos
    python3 scripts/build-proyectos-web-ts.py 11-1       # solo G11·P1
    python3 scripts/build-proyectos-web-ts.py --force    # sobrescribe TS existentes
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "proyectos"
TS_DIR = ROOT / "src" / "data" / "proyectosContenido"
INDEX_TS = TS_DIR / "_index.ts"


# ───────── LaTeX → texto plano ─────────


LATEX_PATTERNS: list[tuple[re.Pattern, str]] = [
    (re.compile(r"\\textbf\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\emph\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\textit\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\texttt\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\&"), "&"),
    (re.compile(r"\\%"), "%"),
    (re.compile(r"\\\$"), "$"),
    (re.compile(r"\\_"), "_"),
    (re.compile(r"\\#"), "#"),
    (re.compile(r"---"), "—"),
    (re.compile(r"``"), '"'),
    (re.compile(r"''"), '"'),
]


def latex_to_text(s: str) -> str:
    if not isinstance(s, str):
        return ""
    out = s
    for _ in range(3):
        for pat, repl in LATEX_PATTERNS:
            out = pat.sub(repl, out)
    out = re.sub(r"\s+", " ", out).strip()
    return out


# ───────── TS serializer ─────────


def ts_string(s: str) -> str:
    if s is None:
        return "''"
    s = latex_to_text(str(s))
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def ts_pretty(value, indent: int = 0) -> str:
    sp = "  " * indent
    sp2 = "  " * (indent + 1)
    if value is None:
        return "undefined"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, str):
        return ts_string(value)
    if isinstance(value, list):
        if not value:
            return "[]"
        parts = [ts_pretty(v, indent + 1) for v in value]
        joined = ",\n".join(f"{sp2}{p}" for p in parts)
        return "[\n" + joined + "\n" + sp + "]"
    if isinstance(value, dict):
        if not value:
            return "{}"
        items = []
        for k, v in value.items():
            items.append(f"{sp2}{k}: {ts_pretty(v, indent + 1)}")
        return "{\n" + ",\n".join(items) + "\n" + sp + "}"
    return ts_string(str(value))


# ───────── Mapeo YAML → ContenidoProyecto ─────────


VALID_LENTES = {"dussel", "estoico", "floridi"}


def build_entregable(raw: dict) -> dict:
    reflexion_raw = raw.get("reflexion") or {}
    lente = (reflexion_raw.get("lente") or "dussel").strip().lower()
    if lente not in VALID_LENTES:
        lente = "dussel"
    return {
        "numero": int(raw.get("numero", 0)),
        "titulo": latex_to_text(raw.get("titulo", "")),
        "queEntregas": latex_to_text(raw.get("que_entregas", "")),
        "comoSeHace": [latex_to_text(p) for p in (raw.get("como_se_hace") or [])],
        "reflexion": {
            "lente": lente,
            "titulo": latex_to_text(reflexion_raw.get("titulo", "")),
            "consigna": latex_to_text(reflexion_raw.get("consigna", "")),
        },
        "criterios": [latex_to_text(c) for c in (raw.get("criterios") or [])],
    }


def build_rubrica_item(raw: dict) -> dict:
    entregable_raw = raw.get("entregable")
    if isinstance(entregable_raw, str) and entregable_raw.strip().lower() == "global":
        entregable: int | str = "global"
    else:
        try:
            entregable = int(entregable_raw)
        except (TypeError, ValueError):
            entregable = "global"
    item = {
        "entregable": entregable,
        "nivel5": latex_to_text(raw.get("nivel_5", "")),
        "nivel3": latex_to_text(raw.get("nivel_3", "")),
        "nivel1": latex_to_text(raw.get("nivel_1", "")),
    }
    if entregable == "global" and raw.get("titulo"):
        item["titulo"] = latex_to_text(raw["titulo"])
    return item


def build_contenido(data: dict) -> dict:
    grado = int(data["grado"])
    periodo = int(data["periodo"])
    titulo = latex_to_text(data.get("titulo", ""))
    titulo_portada = latex_to_text(data.get("titulo_portada", titulo))

    aprendizajes = [
        {"sesion": int(a.get("sesion", 0)), "titulo": latex_to_text(a.get("titulo", ""))}
        for a in (data.get("aprendizajes") or [])
    ]

    entregables = [build_entregable(e) for e in (data.get("entregables") or [])]
    rubrica = [build_rubrica_item(r) for r in (data.get("rubrica") or [])]

    sust_raw = data.get("sustentacion") or {}
    sustentacion = {
        "duracionMin": int(sust_raw.get("duracion_min", 5)),
        "guionSugerido": [latex_to_text(g) for g in (sust_raw.get("guion_sugerido") or [])],
    }

    contenido = {
        "grado": grado,
        "periodo": periodo,
        "clave": f"{grado}-{periodo}",
        "titulo": titulo,
        "tituloPortada": titulo_portada,
        "autor": latex_to_text(data.get("autor", "Dr. Álvaro Cárdenas Orozco")),
        "dba": latex_to_text(data.get("dba", "")),
        "estrategia": latex_to_text(data.get("estrategia", "")),
        "duracionSemanas": int(data.get("duracion_semanas", 4)),
        "modalidad": latex_to_text(data.get("modalidad", "equipo")),
        "reto": latex_to_text(data.get("reto", "")),
        "insumos": [latex_to_text(i) for i in (data.get("insumos") or [])],
        "anclaje": latex_to_text(data.get("anclaje", "")),
        "aprendizajes": aprendizajes,
        "entregables": entregables,
        "rubrica": rubrica,
        "sustentacion": sustentacion,
        "declaracionIa": latex_to_text(data.get("declaracion_ia", "")),
        "cierre": latex_to_text(data.get("cierre", "")),
        "pdf": f"proyecto-{periodo}-{grado}-TIC.pdf",
    }
    return contenido


def render_ts(contenido: dict) -> str:
    grado = contenido["grado"]
    periodo = contenido["periodo"]
    header = (
        "/**\n"
        f" * Contenido web del proyecto integrador · Grado {grado} · Período {periodo}\n"
        " *\n"
        f" * Auto-generado desde content/proyectos/{grado}-{periodo}.yaml por\n"
        " * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.\n"
        " *\n"
        " * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión\n"
        " * incrustada del triángulo (Dussel/Estoico/Floridi).\n"
        " */\n"
        "import type { ContenidoProyecto } from './_schema';\n\n"
        "const contenido: ContenidoProyecto = "
    )
    body = ts_pretty(contenido, indent=0)
    return header + body + ";\n\nexport default contenido;\n"


# ───────── _index.ts updater ─────────


def update_index_ts(claves_nuevas: list[str]) -> int:
    if not claves_nuevas or not INDEX_TS.exists():
        return 0
    src = INDEX_TS.read_text(encoding="utf-8")
    existing = set(re.findall(r"^import p(\d+)_(\d+) from", src, flags=re.M))
    to_add: list[tuple[int, int]] = []
    for clave in claves_nuevas:
        m = re.match(r"^(\d+)-(\d+)$", clave)
        if not m:
            continue
        g, p = m.group(1), m.group(2)
        if (g, p) in existing:
            continue
        to_add.append((int(g), int(p)))
    if not to_add:
        return 0
    import_block = "\n".join(
        f"import p{g}_{p} from './{g}-{p}';" for g, p in to_add
    )
    src = src.replace(
        "const TODOS: ContenidoProyecto[] = [",
        import_block + "\n\nconst TODOS: ContenidoProyecto[] = [",
    )
    refs = ", ".join(f"p{g}_{p}" for g, p in to_add)
    src = src.replace(
        "];\n\nconst MAPA",
        f"  {refs},\n];\n\nconst MAPA",
    )
    INDEX_TS.write_text(src, encoding="utf-8")
    return len(to_add)


# ───────── Main ─────────


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("clave", nargs="?", help="Clave (ej 11-1). Si vacío, todos.")
    ap.add_argument("--force", action="store_true", help="Sobrescribe TS existentes")
    args = ap.parse_args()

    if not CONTENT_DIR.exists():
        print(f"✗ No existe {CONTENT_DIR}", file=sys.stderr)
        return 1
    TS_DIR.mkdir(parents=True, exist_ok=True)

    if args.clave:
        archivos = [CONTENT_DIR / f"{args.clave}.yaml"]
    else:
        archivos = sorted([f for f in CONTENT_DIR.glob("*.yaml") if not f.stem.startswith("_")])

    nuevas: list[str] = []
    omitidas: list[str] = []
    sobrescritas: list[str] = []
    incompletos: list[str] = []

    for path in archivos:
        if not path.exists():
            print(f"  ✗ {path.name}: no existe", file=sys.stderr)
            continue
        with path.open("r", encoding="utf-8") as fh:
            data = yaml.safe_load(fh)
        if not data.get("completo"):
            incompletos.append(path.stem)
            continue
        if not (data.get("entregables") or []):
            print(f"  · {path.stem}: sin entregables, omitido")
            continue
        clave = path.stem
        ts_path = TS_DIR / f"{clave}.ts"
        existed = ts_path.exists()
        if existed and not args.force:
            omitidas.append(clave)
            continue
        contenido = build_contenido(data)
        ts_text = render_ts(contenido)
        ts_path.write_text(ts_text, encoding="utf-8")
        if existed:
            sobrescritas.append(clave)
        else:
            nuevas.append(clave)

    added = update_index_ts(nuevas)

    print(f"\n  Nuevas:        {len(nuevas)}")
    print(f"  Sobrescritas:  {len(sobrescritas)}")
    print(f"  Omitidas (ya existían): {len(omitidas)}")
    print(f"  Outlines (incompletos): {len(incompletos)}")
    print(f"  Entradas agregadas a _index.ts: {added}")
    if nuevas:
        print("\n  Nuevas claves:")
        for c in nuevas:
            print(f"    + {c}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
