#!/usr/bin/env python3
"""
Generador de contenido web TS desde YAML SSOT.

Lee `content/guias/{grado}/{grado}-{periodo}-{sesion}.yaml` con `completo: true`
y `web.conceptos_clave` + `web.quiz` definidos, y escribe el TS correspondiente
en `src/data/guiasContenido/{grado}-{periodo}-{sesion}.ts`.

Por defecto NO sobrescribe archivos existentes (para no pisar TS escritas a
mano). Usa `--force` para regenerar.

Tras generar archivos nuevos, actualiza automáticamente `_index.ts` con los
imports faltantes.

Uso:
    python3 scripts/build-guias-web-ts.py                # todos los grados (8, 10, 11)
    GRADO=10 python3 scripts/build-guias-web-ts.py       # solo grado 10
    python3 scripts/build-guias-web-ts.py 10 1-1         # solo G10·P1·S1
    python3 scripts/build-guias-web-ts.py --force        # regenera incluso si existe
    python3 scripts/build-guias-web-ts.py --dry-run      # muestra qué haría sin escribir
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content" / "guias"
TS_DIR = ROOT / "src" / "data" / "guiasContenido"
INDEX_TS = TS_DIR / "_index.ts"

# Lentes fijas del triángulo (alineado con TS existentes).
LENTES = {
    "dussel": "lente del nosotros",
    "estoico": "lente del cuidado interior",
    "floridi": "lente de la infoesfera",
}


# ───────── LaTeX → texto plano ─────────


LATEX_PATTERNS: list[tuple[re.Pattern, str]] = [
    (re.compile(r"\\textbf\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\emph\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\textit\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\texttt\{([^{}]*)\}"), r"\1"),
    (re.compile(r"\\\\\[\d+mm\]"), " "),
    (re.compile(r"\\checkbox"), "☐"),
    (re.compile(r"\\&"), "&"),
    (re.compile(r"\\%"), "%"),
    (re.compile(r"\\\$"), "$"),
    (re.compile(r"\\_"), "_"),
    (re.compile(r"\\#"), "#"),
    (re.compile(r"\\char91"), "["),
    (re.compile(r"\\char93"), "]"),
    (re.compile(r"\$<\$"), "<"),
    (re.compile(r"\$>\$"), ">"),
    (re.compile(r"\$\^(\d+)\$"), r"^\1"),
    (re.compile(r"---"), "—"),
    (re.compile(r"``"), '"'),
    (re.compile(r"''"), '"'),
]


def latex_to_text(s: str) -> str:
    """Limpia comandos LaTeX comunes para producir texto plano legible."""
    if not isinstance(s, str):
        return ""
    out = s
    for _ in range(3):  # 3 pasadas por anidamiento
        for pat, repl in LATEX_PATTERNS:
            out = pat.sub(repl, out)
    out = re.sub(r"\s+", " ", out).strip()
    return out


def first_sentence(text: str, max_chars: int = 280) -> str:
    """Toma la primera frase razonable del texto. Cae a max_chars si no encuentra."""
    cleaned = latex_to_text(text)
    m = re.search(r"^(.{20,}?[\.!?])(?:\s|$)", cleaned)
    if m:
        s = m.group(1).strip()
        if len(s) <= max_chars:
            return s
    return cleaned[:max_chars].rstrip() + ("…" if len(cleaned) > max_chars else "")


_BOILERPLATE_OPENERS = re.compile(
    r"^(Lo que sigue resume|Antes de empezar|Antes de cerrar|Antes de teorizar|"
    r"Ya hiciste|Ya tienes|Tienes el método|Hasta aquí|Para la próxima sesión|"
    r"En la sesión \d+|Después del grado|Cierra el periodo|Y para terminar)[^.!?]*[.!?]\s+",
    re.IGNORECASE,
)


def meaty_excerpt(text: str, max_chars: int = 360) -> str:
    """Versión que prefiere texto sustancioso saltando aperturas genéricas:
    transiciones cortas (< 60 chars) o frases boilerplate típicas del contrato."""
    cleaned = latex_to_text(text)
    if not cleaned:
        return ""
    # 1) salta boilerplate explícito
    cleaned = _BOILERPLATE_OPENERS.sub("", cleaned)
    # 2) salta primera frase si es muy corta y hay sustancia detrás
    m = re.search(r"^(.{1,60}?[\.!?])\s+(.+)$", cleaned)
    if m:
        rest = m.group(2)
        if len(rest) >= 40:
            return first_sentence(rest, max_chars)
    return first_sentence(cleaned, max_chars)


# ───────── TS serializer ─────────


def ts_string(s: str) -> str:
    """Convierte un string Python a un literal TS seguro (single-quoted o template)."""
    if s is None:
        return "''"
    s = latex_to_text(str(s))
    # Escape backslashes y comillas simples.
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def ts_pretty(value, indent: int = 0) -> str:
    """Serializa estructuras Python como literal TS, similar a JS pretty-print."""
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


# ───────── YAML → TS mapping ─────────


def derive_resumen(data: dict) -> str:
    """Resumen breve: primera frase del saber contemporáneo (más legible)."""
    sc = (data.get("apertura", {}) or {}).get("saber_contemporaneo", "")
    out = first_sentence(sc, max_chars=240)
    if out:
        return out
    return first_sentence(data.get("producto_final", ""), max_chars=240)


def derive_subtema(data: dict) -> str:
    """Subtema corto: usa el título de la guía."""
    titulo = data.get("titulo", "")
    return latex_to_text(titulo)


def derive_pre_lectura(data: dict) -> dict:
    apertura = data.get("apertura", {})
    puentes = data.get("puentes", {})
    escuta = data.get("escuta", {})
    compromiso = data.get("compromiso", "")
    # Para la activación, intenta extraer título de "Actividad N · VERBO — Título"
    escena = latex_to_text(escuta.get("escena", ""))
    activacion_titulo = "Apertura: del saber al oficio"
    m = re.search(r"Actividad\s+\d+\s*[·•]\s*\w+\s*—\s*([^.(]+)", escena)
    if m:
        activacion_titulo = m.group(1).strip().rstrip(".,;")
    return {
        "porQueImporta": meaty_excerpt(puentes.get("a_producto", "") or apertura.get("saber_hacer", ""), 360),
        "preguntaDetonante": latex_to_text(apertura.get("pregunta_puente", "")),
        "activacion": {
            "titulo": activacion_titulo,
            "descripcion": first_sentence(escena, 360),
            "duracionMin": 10,
        },
        "conexion": {
            "anterior": meaty_excerpt(puentes.get("a_ruta", ""), 280),
            "siguiente": meaty_excerpt(compromiso, 280),
        },
    }


def derive_conceptos(data: dict) -> list[dict]:
    """Mapea web.conceptos_clave → conceptosClave."""
    web = data.get("web", {}) or {}
    conceptos = web.get("conceptos_clave", []) or []
    out = []
    for c in conceptos:
        item = {
            "termino": latex_to_text(c.get("termino", "")),
            "definicion": latex_to_text(c.get("definicion", "")),
            "ejemplo": latex_to_text(c.get("ejemplo", "")),
        }
        if c.get("emoji"):
            item["emoji"] = c["emoji"]
        out.append(item)
    return out


def derive_laboratorios(data: dict) -> list[dict]:
    """Mapea web.quiz → laboratorios[LabQuiz]."""
    web = data.get("web", {}) or {}
    quiz = web.get("quiz")
    if not quiz:
        return []
    preguntas = []
    for q in quiz.get("preguntas", []) or []:
        preguntas.append({
            "enunciado": latex_to_text(q.get("enunciado", "")),
            "opciones": [latex_to_text(o) for o in q.get("opciones", [])],
            "respuestaIndex": int(q.get("respuesta_index", 0)),
            "feedbackCorrecto": latex_to_text(q.get("feedback_correcto", "")),
            "feedbackIncorrecto": latex_to_text(q.get("feedback_incorrecto", "")),
        })
    return [{
        "tipo": "quiz",
        "titulo": latex_to_text(quiz.get("titulo", "Quiz de verificación")),
        "instrucciones": latex_to_text(quiz.get("instrucciones", "")),
        "preguntas": preguntas,
    }]


def derive_post_lectura(data: dict) -> dict:
    triangulo = data.get("triangulo", {}) or {}
    dussel = (triangulo.get("dussel") or {})
    compromiso = data.get("compromiso", "")
    apertura = data.get("apertura", {})
    # Para transferencia: limpia boilerplate "Para la próxima sesión."
    transferencia = meaty_excerpt(compromiso, 360)
    return {
        "reflexion": latex_to_text(dussel.get("pregunta_espejo", "")),
        "transferencia": transferencia,
        "cierre": first_sentence(apertura.get("saber_hacer", ""), 280),
    }


def derive_saber_ancestral(data: dict) -> dict:
    apertura = data.get("apertura", {}) or {}
    return {
        "saber": latex_to_text(apertura.get("saber_ancestral", "")),
        "preguntaPuente": latex_to_text(apertura.get("pregunta_puente", "")),
    }


def derive_triangulo(data: dict) -> dict:
    tri = data.get("triangulo", {}) or {}
    out = {}
    for key in ("dussel", "estoico", "floridi"):
        v = tri.get(key) or {}
        out[key] = {
            "autor": latex_to_text(v.get("autor", "")),
            "lente": LENTES[key],
            "cita": latex_to_text(v.get("cita", "")),
            "preguntaEspejo": latex_to_text(v.get("pregunta_espejo", "")),
        }
    return out


def derive_cinco_dimensiones(data: dict) -> dict:
    """Sintetiza una versión básica de 5 dimensiones a partir de puentes y triángulo.

    No es tan rica como las TS escritas a mano, pero alcanza para que la
    página renderice el bloque. El docente puede afinarla luego."""
    puentes = data.get("puentes", {}) or {}
    triangulo = data.get("triangulo", {}) or {}
    saber = first_sentence(data.get("apertura", {}).get("saber_hacer", ""), 200)
    evaluacion = first_sentence(puentes.get("a_evaluacion", ""), 200)
    dussel_aplic = first_sentence((triangulo.get("dussel") or {}).get("aplicacion", ""), 200)
    estoico_aplic = first_sentence((triangulo.get("estoico") or {}).get("aplicacion", ""), 200)
    floridi_aplic = first_sentence((triangulo.get("floridi") or {}).get("aplicacion", ""), 200)
    return {
        "personal": saber or "Aprendizajes y capacidades adquiridos en la sesión.",
        "emocional": estoico_aplic or "Disciplina y paciencia ejercidas durante el oficio.",
        "ciudadana": dussel_aplic or "Lectura del impacto del trabajo en la comunidad.",
        "local": evaluacion or "Contexto local que dialoga con el oficio aprendido.",
        "intergeneracional": floridi_aplic or "Diálogo con tradiciones previas y futuras.",
    }


# ───────── Generador ─────────


def build_contenido(data: dict) -> dict:
    """Construye el dict del objeto ContenidoGuia listo para serializar a TS."""
    contenido: dict = {
        "grado": int(data["grado"]),
        "periodo": int(data["periodo"]),
        "sesion": int(data["sesion"]),
    }
    titulo = latex_to_text(data.get("titulo", ""))
    if titulo:
        contenido["titulo"] = titulo
    contenido["resumen"] = derive_resumen(data) or titulo
    contenido["duracionMin"] = 90
    subtema = derive_subtema(data)
    if subtema:
        contenido["subtema"] = subtema
    contenido["preLectura"] = derive_pre_lectura(data)
    contenido["conceptosClave"] = derive_conceptos(data)
    contenido["laboratorios"] = derive_laboratorios(data)
    contenido["postLectura"] = derive_post_lectura(data)
    contenido["saberAncestral"] = derive_saber_ancestral(data)
    contenido["triangulo"] = derive_triangulo(data)
    contenido["cincoDimensiones"] = derive_cinco_dimensiones(data)
    return contenido


def render_ts(contenido: dict, clave: str) -> str:
    """Devuelve el contenido completo del archivo TS."""
    grado = contenido["grado"]
    periodo = contenido["periodo"]
    sesion = contenido["sesion"]
    sesion_global = (periodo - 1) * 10 + sesion
    header = (
        "/**\n"
        f" * Contenido enriquecido para Grado {grado} · Período {periodo} · Sesión {sesion}\n"
        f" * (sesión global {sesion_global}).\n"
        " *\n"
        " * Auto-generado desde content/guias/{grado}/{clave}.yaml por\n"
        " * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.\n"
        " */\n"
        "import type { ContenidoGuia } from './_schema';\n\n"
        "const contenido: ContenidoGuia = "
    ).replace("{grado}", str(grado)).replace("{clave}", f"{grado}-{periodo}-{sesion}")
    body = ts_pretty(contenido, indent=0)
    return header + body + ";\n\nexport default contenido;\n"


# ───────── Selección de YAML ─────────


def iter_yaml_files(grados: list[int], clave_filter: str | None) -> list[Path]:
    files: list[Path] = []
    for g in grados:
        d = CONTENT_DIR / str(g)
        if not d.exists():
            continue
        for f in sorted(d.glob(f"{g}-*.yaml")):
            if clave_filter:
                want = f"{g}-{clave_filter}.yaml"
                if f.name != want:
                    continue
            files.append(f)
    return files


def load_yaml(path: Path) -> dict | None:
    try:
        with path.open("r", encoding="utf-8") as fh:
            return yaml.safe_load(fh)
    except Exception as exc:
        print(f"  ✗ Error parseando {path.name}: {exc}", file=sys.stderr)
        return None


# ───────── _index.ts updater ─────────


def update_index_ts(new_claves: list[str]) -> int:
    """Inserta imports y entradas en _index.ts para claves nuevas.

    `new_claves` viene como ['10-1-1', '10-1-2', ...]
    Devuelve cuántas entradas se agregaron."""
    if not new_claves:
        return 0
    src = INDEX_TS.read_text(encoding="utf-8")
    existing_imports = set(re.findall(r"^import g(\d+)_(\d+)_(\d+) from", src, flags=re.M))
    to_add: list[tuple[int, int, int]] = []
    for clave in new_claves:
        m = re.match(r"^(\d+)-(\d+)-(\d+)$", clave)
        if not m:
            continue
        g, p, s = m.group(1), m.group(2), m.group(3)
        if (g, p, s) in existing_imports:
            continue
        to_add.append((int(g), int(p), int(s)))
    if not to_add:
        return 0

    # Inserta imports justo antes de la línea "const TODAS: ContenidoGuia[]".
    import_block = "\n".join(
        f"import g{g}_{p}_{s} from './{g}-{p}-{s}';" for g, p, s in to_add
    )
    src = src.replace(
        "const TODAS: ContenidoGuia[] = [",
        import_block + "\n\nconst TODAS: ContenidoGuia[] = [",
    )
    # Y agrega referencias dentro del array, antes del "];".
    refs = ", ".join(f"g{g}_{p}_{s}" for g, p, s in to_add)
    src = src.replace(
        "];\n\nconst MAPA",
        f"  {refs},\n];\n\nconst MAPA",
    )
    INDEX_TS.write_text(src, encoding="utf-8")
    return len(to_add)


# ───────── Main ─────────


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("grado", nargs="?", type=int, help="Grado a generar (8, 10, 11). Por defecto todos.")
    ap.add_argument("clave", nargs="?", help="Clave 'periodo-sesion' opcional (ej 1-3).")
    ap.add_argument("--force", action="store_true", help="Sobrescribe TS existentes.")
    ap.add_argument("--dry-run", action="store_true", help="Imprime acciones sin escribir.")
    ap.add_argument("--no-index", action="store_true", help="No actualiza _index.ts.")
    args = ap.parse_args()

    if args.grado:
        grados = [args.grado]
    else:
        env = os.environ.get("GRADO")
        if env:
            grados = [int(env)]
        else:
            # Por defecto, los grados con YAML SSOT disponible.
            grados = [8, 10, 11]

    files = iter_yaml_files(grados, args.clave)
    if not files:
        print("✗ No se encontraron YAML que coincidan.")
        return 1

    print(f"▸ Procesando {len(files)} archivo(s) YAML (grados {grados})…")
    nuevas: list[str] = []
    sobrescritas: list[str] = []
    omitidas: list[str] = []
    sin_web: list[str] = []
    incompletas: list[str] = []

    for f in files:
        data = load_yaml(f)
        if not data:
            continue
        if not data.get("completo"):
            incompletas.append(f.name)
            continue
        web = data.get("web") or {}
        if not web.get("conceptos_clave") or not web.get("quiz"):
            sin_web.append(f.name)
            continue
        grado, periodo, sesion = int(data["grado"]), int(data["periodo"]), int(data["sesion"])
        clave = f"{grado}-{periodo}-{sesion}"
        ts_path = TS_DIR / f"{clave}.ts"
        exists = ts_path.exists()
        if exists and not args.force:
            omitidas.append(clave)
            continue
        contenido = build_contenido(data)
        ts_text = render_ts(contenido, clave)
        if args.dry_run:
            print(f"  · {clave} ({'OVERWRITE' if exists else 'NEW'}) — {len(ts_text)} bytes")
        else:
            ts_path.write_text(ts_text, encoding="utf-8")
            if exists:
                sobrescritas.append(clave)
            else:
                nuevas.append(clave)

    # _index.ts
    added_index = 0
    if not args.dry_run and not args.no_index:
        added_index = update_index_ts(nuevas)

    # Reporte
    print("")
    print(f"  Nuevas:      {len(nuevas)}")
    print(f"  Sobrescritas: {len(sobrescritas)}")
    print(f"  Omitidas (ya existían): {len(omitidas)}")
    print(f"  Sin bloque web:         {len(sin_web)}")
    print(f"  Outlines (incompletos): {len(incompletas)}")
    if not args.no_index and not args.dry_run:
        print(f"  Entradas agregadas a _index.ts: {added_index}")
    if nuevas:
        print("\n  Nuevas claves:")
        for c in nuevas:
            print(f"    + {c}")
    if sin_web:
        print("\n  Saltadas por falta de web.conceptos_clave/quiz:")
        for f in sin_web:
            print(f"    - {f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
