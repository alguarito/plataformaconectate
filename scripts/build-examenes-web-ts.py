#!/usr/bin/env python3
"""
Generador del banco de práctica TS desde YAML SSOT de exámenes.

Lee content/examenes/{grado}-{periodo}.yaml con `completo: true` y banco_practica
poblado, y escribe src/data/examenesContenido/{grado}-{periodo}.ts.

NO toca el examen formal (eso solo vive en PDF).

Tras generar archivos nuevos, actualiza automáticamente _index.ts con los
imports faltantes.

Uso:
    python3 scripts/build-examenes-web-ts.py            # todos los exámenes completos
    python3 scripts/build-examenes-web-ts.py 11-1       # solo G11·P1
    python3 scripts/build-examenes-web-ts.py --force    # sobrescribe TS existentes
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "examenes"
TS_DIR = ROOT / "src" / "data" / "examenesContenido"
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


# ───────── Mapeo YAML → ContenidoExamen ─────────


def build_contenido(data: dict) -> dict:
    grado = int(data["grado"])
    periodo = int(data["periodo"])
    titulo = latex_to_text(data.get("titulo", ""))
    banco = data.get("banco_practica") or []

    preguntas = []
    for item in banco:
        preguntas.append({
            "enunciado": latex_to_text(item.get("enunciado", "")),
            "opciones": [latex_to_text(o) for o in (item.get("opciones") or [])],
            "respuestaIndex": int(item.get("respuesta_index", 0)),
            "feedbackCorrecto": latex_to_text(item.get("feedback_correcto", "")),
            "feedbackIncorrecto": latex_to_text(item.get("feedback_incorrecto", "")),
        })

    contenido = {
        "grado": grado,
        "periodo": periodo,
        "titulo": titulo,
        "duracionMin": int(data.get("duracion_min", 45)),
        "ponderacion": int(data.get("ponderacion", 20)),
        "fechaAplicacion": latex_to_text(data.get("fecha_aplicacion", "Sesión 10")),
        "bancoPractica": {
            "tipo": "quiz",
            "titulo": f"Banco de práctica · {titulo.replace('Examen final · ', '')}",
            "instrucciones": (
                f"Practica con {len(preguntas)} preguntas de opción múltiple. "
                f"Esta práctica NO cuenta para la nota: es para que llegues "
                f"preparado al examen formal. Puedes repetir las veces que quieras."
            ),
            "preguntas": preguntas,
        },
    }
    return contenido


def render_ts(contenido: dict) -> str:
    grado = contenido["grado"]
    periodo = contenido["periodo"]
    header = (
        "/**\n"
        f" * Contenido web del examen final · Grado {grado} · Período {periodo}\n"
        " *\n"
        " * Auto-generado desde content/examenes/{clave}.yaml por\n"
        " * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.\n"
        " *\n"
        " * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)\n"
        " * vive únicamente como PDF para preservar su carácter sumativo.\n"
        " */\n"
        "import type { ContenidoExamen } from './_schema';\n\n"
        "const contenido: ContenidoExamen = "
    ).replace("{clave}", f"{grado}-{periodo}")
    body = ts_pretty(contenido, indent=0)
    return header + body + ";\n\nexport default contenido;\n"


# ───────── _index.ts updater ─────────


def update_index_ts(claves_nuevas: list[str]) -> int:
    if not claves_nuevas or not INDEX_TS.exists():
        return 0
    src = INDEX_TS.read_text(encoding="utf-8")
    existing = set(re.findall(r"^import e(\d+)_(\d+) from", src, flags=re.M))
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
        f"import e{g}_{p} from './{g}-{p}';" for g, p in to_add
    )
    src = src.replace(
        "const TODOS: ContenidoExamen[] = [",
        import_block + "\n\nconst TODOS: ContenidoExamen[] = [",
    )
    refs = ", ".join(f"e{g}_{p}" for g, p in to_add)
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
        if not (data.get("banco_practica") or []):
            print(f"  · {path.stem}: sin banco_practica, omitido")
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
