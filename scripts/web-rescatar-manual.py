#!/usr/bin/env python3
"""
Rescata al YAML lo valioso de los TS web escritos a mano.

Un TS de `src/data/guiasContenido/{g}-{p}-{s}.ts` es «manual» cuando su
cabecera (el comentario antes del primer `import`) NO dice «Auto-generado».
Esos archivos traen campos que el generador `scripts/build-guias-web-ts.py`
ya sabe leer desde el YAML pero que el YAML no tiene. Este script los vuelca
al bloque `web` (y `apertura.origen`) de `content/guias/{g}/{g}-{p}-{s}.yaml`.

Campos rescatados (TS → YAML):
- resumen, subtema                      → web.resumen, web.subtema
- preLectura{porQueImporta, preguntaDetonante, activacion{titulo, descripcion,
  duracionMin}, conexion{anterior, siguiente}}  → web.pre_lectura{…}
- conceptosClave[]{categoria, termino, definicion, ejemplo, emoji}
                                        → web.conceptos_clave[] (sin emojis en
                                          `categoria`: «🔍 Cómo…» → «Cómo…»)
- postLectura{reflexion, transferencia, cierre} → web.post_lectura{…}
- cincoDimensiones{personal, emocional, ciudadana, local, intergeneracional}
                                        → web.cinco_dimensiones{…}
- saberAncestral.fuente (rótulo corto)  → apertura.origen
- laboratorios[tipo=quiz]               → web.quiz SOLO si el YAML no lo tiene

Regla: el YAML manda. Nunca se sobrescribe una clave existente; en los
diccionarios se agregan solo las sub-claves que faltan. Si el YAML ya tiene
`web.conceptos_clave`, se enriquecen los ítems cuyo `termino` coincide con uno
del TS (agregando `categoria`/`emoji`/… que falten); los conceptos que solo
existen en el TS se reportan y se anexan únicamente con `--anexar-conceptos`.
`mapaRuta`, `actividades`, `titulo` y otros campos del TS quedan fuera del
alcance y solo se listan en el reporte.

Parseo del TS: por defecto se transpila con `tsx` (node_modules/.bin/tsx o
`npx tsx`) y se serializa a JSON; si no hay tsx, un conversor propio
(literal TS → JSON) hace el trabajo. `--parser node|python` fuerza uno.

Formato del YAML: no se re-serializa. Las claves nuevas se insertan como
texto al final del mapeo correspondiente (bloques `|-` para textos largos,
comillas dobles solo cuando hace falta); las líneas existentes no se tocan.
Antes de escribir se verifica con `yaml.safe_load` que el resultado es
exactamente el YAML original + las claves nuevas; si no, el archivo no se toca.

Uso:
    python3 scripts/web-rescatar-manual.py --dry-run          # reporte por guía
    python3 scripts/web-rescatar-manual.py --grado 9
    python3 scripts/web-rescatar-manual.py 8-2-3 9-1-6
    python3 scripts/web-rescatar-manual.py --anexar-conceptos  # también los conceptos solo-TS
"""
from __future__ import annotations

import argparse
import copy
import json
import re
import shutil
import subprocess
import sys
import tempfile
import unicodedata
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TS_DIR = ROOT / "src" / "data" / "guiasContenido"
GUIAS_DIR = ROOT / "content" / "guias"

RESET, RED, YELLOW, GREEN, DIM, BOLD, CYAN = "\033[0m", "\033[31m", "\033[33m", "\033[32m", "\033[2m", "\033[1m", "\033[36m"


def sin_color() -> None:
    global RESET, RED, YELLOW, GREEN, DIM, BOLD, CYAN
    RESET = RED = YELLOW = GREEN = DIM = BOLD = CYAN = ""


# ─── Selección de TS manuales ────────────────────────────────────────────────

RE_CLAVE = re.compile(r"^(\d+)-(\d+)-(\d+)$")


def es_manual(path: Path) -> bool:
    head = path.read_text(encoding="utf-8")[:3000]
    idx = head.find("import ")
    cabecera = head[:idx] if idx >= 0 else head
    return "Auto-generado" not in cabecera


def ts_manuales(grado: int | None, claves: list[str]) -> list[Path]:
    out = []
    for f in sorted(TS_DIR.glob("*.ts")):
        m = RE_CLAVE.match(f.stem)
        if not m:
            continue
        if grado is not None and int(m.group(1)) != grado:
            continue
        if claves and f.stem not in claves:
            continue
        if es_manual(f):
            out.append(f)
    return out


# ─── Parseo del TS ───────────────────────────────────────────────────────────

LOADER_MTS = """
const out = {};
for (const p of process.argv.slice(2)) {
  try {
    const m = await import(p);
    out[p] = m.default ?? m;
  } catch (e) {
    out[p] = { __error: String((e && e.stack) || e) };
  }
}
process.stdout.write(JSON.stringify(out));
"""


def comando_tsx() -> list[str] | None:
    local = ROOT / "node_modules" / ".bin" / "tsx"
    if local.exists():
        return [str(local)]
    npx = shutil.which("npx")
    if npx:
        try:
            r = subprocess.run([npx, "tsx", "--version"], cwd=ROOT, capture_output=True, text=True, timeout=60)
            if r.returncode == 0 and r.stdout.strip().startswith("tsx"):
                return [npx, "tsx"]
        except (subprocess.SubprocessError, OSError):
            pass
    return None


def parsear_con_node(paths: list[Path]) -> dict[str, dict]:
    cmd = comando_tsx()
    if not cmd:
        raise RuntimeError("tsx no disponible")
    with tempfile.TemporaryDirectory() as td:
        loader = Path(td) / "cargar-ts.mts"
        loader.write_text(LOADER_MTS, encoding="utf-8")
        r = subprocess.run(cmd + [str(loader)] + [str(p) for p in paths],
                           cwd=ROOT, capture_output=True, text=True, timeout=900)
    if r.returncode != 0:
        raise RuntimeError(f"tsx falló: {r.stderr.strip()[-1500:]}")
    return json.loads(r.stdout)


_ESC = {"n": "\n", "t": "\t", "r": "\r", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}


def js_a_json(s: str) -> str:
    """Convierte un literal de objeto JS/TS a JSON: comentarios fuera, claves
    entre comillas, comillas simples/plantilla → dobles, sin comas finales."""
    out: list[str] = []
    code: list[str] = []
    i, n = 0, len(s)

    def flush() -> None:
        seg = "".join(code)
        code.clear()
        seg = re.sub(r"([{,]\s*)([A-Za-z_$][\w$]*)(\s*):", r'\1"\2"\3:', seg)
        seg = re.sub(r",(\s*[}\]])", r"\1", seg)
        seg = re.sub(r"\bundefined\b", "null", seg)
        out.append(seg)

    while i < n:
        c = s[i]
        if c in "'\"`":
            flush()
            q = c
            i += 1
            buf: list[str] = []
            while i < n and s[i] != q:
                if s[i] == "\\" and i + 1 < n:
                    e = s[i + 1]
                    if e == "u" and i + 5 < n:
                        buf.append(chr(int(s[i + 2:i + 6], 16)))
                        i += 6
                        continue
                    if e == "x" and i + 3 < n:
                        buf.append(chr(int(s[i + 2:i + 4], 16)))
                        i += 4
                        continue
                    if e == "\n":
                        i += 2
                        continue
                    buf.append(_ESC.get(e, e))
                    i += 2
                    continue
                buf.append(s[i])
                i += 1
            i += 1
            val = "".join(buf).encode("utf-16", "surrogatepass").decode("utf-16")
            if q == "`" and "${" in val:
                raise ValueError("plantilla con ${…} no soportada por el conversor Python")
            out.append(json.dumps(val, ensure_ascii=False))
        elif c == "/" and i + 1 < n and s[i + 1] == "/":
            j = s.find("\n", i)
            i = n if j < 0 else j
        elif c == "/" and i + 1 < n and s[i + 1] == "*":
            j = s.find("*/", i + 2)
            i = n if j < 0 else j + 2
        else:
            code.append(c)
            i += 1
    flush()
    return "".join(out)


def parsear_con_python(path: Path) -> dict:
    src = path.read_text(encoding="utf-8")
    i0 = src.find("const contenido")
    if i0 < 0:
        i0 = 0
    a = src.find("{", i0)
    b = src.rfind("export default")
    if b < 0:
        b = len(src)
    z = src.rfind("}", 0, b)
    if a < 0 or z < 0:
        raise ValueError("no encontré el literal del objeto")
    return json.loads(js_a_json(src[a:z + 1]))


def parsear_ts(paths: list[Path], parser: str) -> tuple[dict[Path, dict], list[str]]:
    """Devuelve ({path: objeto}, avisos)."""
    avisos: list[str] = []
    res: dict[Path, dict] = {}
    pendientes = list(paths)
    if parser in ("auto", "node"):
        try:
            data = parsear_con_node(paths)
            for p in paths:
                v = data.get(str(p))
                if isinstance(v, dict) and "__error" not in v:
                    res[p] = v
                    pendientes.remove(p)
                else:
                    avisos.append(f"{p.name}: tsx no pudo cargarlo ({(v or {}).get('__error', '?')[:120]})")
        except (RuntimeError, json.JSONDecodeError, subprocess.SubprocessError) as exc:
            if parser == "node":
                raise
            avisos.append(f"tsx no disponible ({str(exc)[:120]}); uso el conversor Python")
    if parser == "node":
        return res, avisos
    for p in pendientes:
        try:
            res[p] = parsear_con_python(p)
        except (ValueError, json.JSONDecodeError) as exc:
            avisos.append(f"{p.name}: el conversor Python falló: {exc}")
    return res, avisos


# ─── Extracción y normalización ──────────────────────────────────────────────

EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF☀-➿⬀-⯿⌀-⏿←-⇿"
    "■-◿⤀-⥿〰〽㊗㊙©®™ℹ️‍⃣]"
)


def txt(v) -> str:
    """Normaliza un texto del TS: NFC, sin espacios finales por línea, sin bordes."""
    if v is None:
        return ""
    s = unicodedata.normalize("NFC", str(v)).replace("\r\n", "\n").replace("\r", "\n")
    return "\n".join(l.rstrip() for l in s.split("\n")).strip()


def limpiar_categoria(v) -> str:
    s = EMOJI_RE.sub("", txt(v))
    return s.strip(" \t·-–—:|").strip()


def _dict_no_vacio(pares: list[tuple[str, object]]) -> dict:
    return {k: v for k, v in pares if v not in (None, "", {}, [])}


def extraer(ts: dict) -> tuple[dict, dict, list[str]]:
    """TS → (web_candidato, apertura_candidata, extras_no_rescatados)."""
    web: dict = {}
    if txt(ts.get("resumen")):
        web["resumen"] = txt(ts["resumen"])
    if txt(ts.get("subtema")):
        web["subtema"] = txt(ts["subtema"])

    pl = ts.get("preLectura") or {}
    act = pl.get("activacion") or {}
    con = pl.get("conexion") or {}
    pre = _dict_no_vacio([
        ("por_que_importa", txt(pl.get("porQueImporta"))),
        ("pregunta_detonante", txt(pl.get("preguntaDetonante"))),
        ("activacion", _dict_no_vacio([
            ("titulo", txt(act.get("titulo"))),
            ("descripcion", txt(act.get("descripcion"))),
            ("duracion_min", int(act["duracionMin"]) if isinstance(act.get("duracionMin"), (int, float)) else None),
        ])),
        ("conexion", _dict_no_vacio([
            ("anterior", txt(con.get("anterior"))),
            ("siguiente", txt(con.get("siguiente"))),
        ])),
    ])
    if pre:
        web["pre_lectura"] = pre

    conceptos = []
    for c in ts.get("conceptosClave") or []:
        if not isinstance(c, dict) or not txt(c.get("termino")):
            continue
        conceptos.append(_dict_no_vacio([
            ("categoria", limpiar_categoria(c.get("categoria"))),
            ("termino", txt(c.get("termino"))),
            ("definicion", txt(c.get("definicion"))),
            ("ejemplo", txt(c.get("ejemplo"))),
            ("emoji", txt(c.get("emoji"))),
        ]))
    if conceptos:
        web["conceptos_clave"] = conceptos

    extras: list[str] = []
    quiz = None
    for lab in ts.get("laboratorios") or []:
        if not isinstance(lab, dict):
            continue
        if lab.get("tipo") == "quiz" and quiz is None:
            preguntas = []
            for q in lab.get("preguntas") or []:
                preguntas.append(_dict_no_vacio([
                    ("enunciado", txt(q.get("enunciado"))),
                    ("opciones", [txt(o) for o in (q.get("opciones") or [])]),
                    ("respuesta_index", int(q.get("respuestaIndex", 0))),
                    ("feedback_correcto", txt(q.get("feedbackCorrecto"))),
                    ("feedback_incorrecto", txt(q.get("feedbackIncorrecto"))),
                ]))
            if preguntas:
                quiz = _dict_no_vacio([
                    ("titulo", txt(lab.get("titulo"))),
                    ("instrucciones", txt(lab.get("instrucciones"))),
                    ("preguntas", preguntas),
                ])
        else:
            extras.append(f"laboratorios[{lab.get('tipo', '?')}]")
    if quiz:
        web["quiz"] = quiz

    post = ts.get("postLectura") or {}
    p = _dict_no_vacio([(k, txt(post.get(k))) for k in ("reflexion", "transferencia", "cierre")])
    if p:
        web["post_lectura"] = p

    cd = ts.get("cincoDimensiones") or {}
    d = _dict_no_vacio([(k, txt(cd.get(k))) for k in ("personal", "emocional", "ciudadana", "local", "intergeneracional")])
    if d:
        web["cinco_dimensiones"] = d

    apertura: dict = {}
    fuente = txt((ts.get("saberAncestral") or {}).get("fuente"))
    if fuente:
        apertura["origen"] = fuente

    for k in ("mapaRuta", "actividades", "titulo", "ocultarPDF"):
        if k in ts:
            extras.append(k)
    return web, apertura, extras


# ─── Plan de fusión (el YAML manda) ──────────────────────────────────────────


def vacio(v) -> bool:
    return v is None or v == "" or v == {} or v == []


def ops_faltantes(path: tuple, dst: dict, src: dict, ops: list) -> None:
    """Genera ops ('map', path, clave, valor) para las hojas de src ausentes en dst.
    Si una clave falta entera, se agrega el sub-árbol completo en una sola op."""
    for k, v in src.items():
        cur = dst.get(k)
        if vacio(cur):
            ops.append(("map", path, k, v, None))
        elif isinstance(v, dict) and isinstance(cur, dict):
            ops_faltantes(path + (k,), cur, v, ops)
        # si existe y no es dict: el YAML manda, no se toca


def norm_termino(s: str) -> str:
    s = unicodedata.normalize("NFD", str(s)).casefold()
    s = "".join(ch for ch in s if unicodedata.category(ch) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def planificar(data: dict, web_src: dict, apertura_src: dict, anexar: bool) -> tuple[list, list[str]]:
    """Devuelve (ops, sobrantes). ops:
      ('map', path, clave, valor, despues_de) — agrega clave a un mapeo
      ('item_key', path_seq, idx, clave, valor) — agrega clave a un ítem de lista
      ('append', path_seq, valor) — anexa un ítem a la lista"""
    ops: list = []
    sobrantes: list[str] = []
    web_dst = data.get("web") if isinstance(data.get("web"), dict) else None

    web_simple = {k: v for k, v in web_src.items() if k not in ("conceptos_clave", "quiz")}
    if web_dst is None:
        todo = dict(web_simple)
        if "conceptos_clave" in web_src:
            todo["conceptos_clave"] = web_src["conceptos_clave"]
        if "quiz" in web_src:
            todo["quiz"] = web_src["quiz"]
        # orden legible: resumen, subtema, pre_lectura, conceptos, quiz, post, cinco
        orden = ["resumen", "subtema", "pre_lectura", "conceptos_clave", "quiz", "post_lectura", "cinco_dimensiones"]
        todo = {k: todo[k] for k in orden if k in todo}
        if todo:
            ops.append(("map", (), "web", todo, None))
    else:
        ops_faltantes(("web",), web_dst, web_simple, ops)
        # conceptos
        src_c = web_src.get("conceptos_clave") or []
        dst_c = web_dst.get("conceptos_clave")
        if vacio(dst_c) and src_c:
            ops.append(("map", ("web",), "conceptos_clave", src_c, None))
        elif isinstance(dst_c, list) and src_c:
            por_termino = {norm_termino(c.get("termino", "")): c for c in src_c}
            usados = set()
            for i, item in enumerate(dst_c):
                if not isinstance(item, dict):
                    continue
                k = norm_termino(item.get("termino", ""))
                c = por_termino.get(k)
                if not c:
                    continue
                usados.add(k)
                for sub in ("categoria", "termino", "definicion", "ejemplo", "emoji"):
                    if sub in c and vacio(item.get(sub)):
                        ops.append(("item_key", ("web", "conceptos_clave"), i, sub, c[sub]))
            for k, c in por_termino.items():
                if k in usados:
                    continue
                if anexar:
                    ops.append(("append", ("web", "conceptos_clave"), c))
                else:
                    sobrantes.append(f"concepto solo en TS: «{c.get('termino')}»")
        # quiz
        if "quiz" in web_src and (vacio(web_dst.get("quiz")) or vacio((web_dst.get("quiz") or {}).get("preguntas"))):
            ops.append(("map", ("web",), "quiz", web_src["quiz"], None))

    ap = data.get("apertura")
    if apertura_src:
        if isinstance(ap, dict):
            if vacio(ap.get("origen")):
                if len(apertura_src["origen"]) > 160:
                    sobrantes.append("saberAncestral.fuente es muy largo para `apertura.origen` (¿es una referencia APA?); revisar a mano")
                else:
                    ops.append(("map", ("apertura",), "origen", apertura_src["origen"], "saber_ancestral"))
        else:
            sobrantes.append("el YAML no tiene `apertura`; no se agrega `origen`")
    return ops, sobrantes


def aplicar_en_dict(data: dict, ops: list) -> dict:
    """Misma fusión pero sobre el dict (para verificar el texto resultante)."""
    d = copy.deepcopy(data)

    def nav(path):
        cur = d
        for k in path:
            if isinstance(k, int):
                cur = cur[k]
            else:
                cur = cur.setdefault(k, {})
        return cur

    for op in ops:
        if op[0] == "map":
            _, path, key, val, _ = op
            nav(path)[key] = copy.deepcopy(val)
        elif op[0] == "item_key":
            _, path, idx, key, val = op
            nav(path)[idx][key] = copy.deepcopy(val)
        elif op[0] == "append":
            _, path, val = op
            nav(path).append(copy.deepcopy(val))
    return d


# ─── Emisión de YAML (solo para las líneas nuevas) ───────────────────────────

RE_PLAIN_MALO = re.compile(r"^[\s\-?:,\[\]{}#&*!|>'\"%@`]|[\s]$|:\s|\s#|[\t]|^(true|false|null|yes|no|on|off|~|y|n)$|^[-+]?(\d[\d_]*([.,]\d+)?|\.\d+)$|^0[xob]", re.I)


def escalar_inline(s: str) -> str:
    """Escalar en una línea: plano si YAML lo lee exactamente igual (prueba de
    ida y vuelta: evita `1:1` → 61 sexagesimal, `2026-05-12` → fecha, `no` →
    false, etc.); si no, entre comillas dobles."""
    if not (s.isdigit() or RE_PLAIN_MALO.search(s) or EMOJI_RE.search(s) or any(ord(ch) > 0xFFFF for ch in s)
            or ": " in s or s.endswith(":")):
        try:
            if yaml.safe_load(f"k: {s}") == {"k": s}:
                return s
        except yaml.YAMLError:
            pass
    return json.dumps(s, ensure_ascii=False)


def emitir_escalar(key_prefix: str, val, ind: int) -> list[str]:
    """`key_prefix` ya trae la sangría y termina en ': ' o '- '."""
    if isinstance(val, bool):
        return [f"{key_prefix}{'true' if val else 'false'}"]
    if isinstance(val, int):
        return [f"{key_prefix}{val}"]
    if isinstance(val, float):
        return [f"{key_prefix}{val!r}"]
    s = txt(val)
    if "\n" in s or len(s) > 100:
        pad = " " * (ind + 2)
        return [f"{key_prefix.rstrip()}{' ' if key_prefix.endswith(': ') or key_prefix.endswith('- ') else ''}|-".replace(":  |-", ": |-").replace("-  |-", "- |-")] + [
            (pad + l) if l else "" for l in s.split("\n")
        ]
    return [f"{key_prefix}{escalar_inline(s)}"]


def emitir_clave(key: str, val, ind: int) -> list[str]:
    pad = " " * ind
    if isinstance(val, dict):
        lines = [f"{pad}{key}:"]
        for k, v in val.items():
            lines += emitir_clave(k, v, ind + 2)
        return lines
    if isinstance(val, list):
        lines = [f"{pad}{key}:"]
        for it in val:
            lines += emitir_item(it, ind + 2)
        return lines
    return emitir_escalar(f"{pad}{key}: ", val, ind)


def emitir_item(val, ind: int) -> list[str]:
    pad = " " * ind
    if isinstance(val, dict):
        lines: list[str] = []
        primera = True
        for k, v in val.items():
            sub = emitir_clave(k, v, ind + 2)
            if primera:
                sub[0] = f"{pad}- " + sub[0][ind + 2:]
                primera = False
            lines += sub
        return lines or [f"{pad}- {{}}"]
    if isinstance(val, list):
        lines = [f"{pad}-"]
        for it in val:
            lines += emitir_item(it, ind + 2)
        return lines
    return emitir_escalar(f"{pad}- ", val, ind)


# ─── Localización en el texto y aplicación de ops ────────────────────────────


def indent(line: str) -> int:
    return len(line) - len(line.lstrip(" "))


def es_item(line: str) -> bool:
    s = line.lstrip(" ")
    return s.startswith("- ") or s == "-"


def es_comentario(line: str) -> bool:
    return line.lstrip().startswith("#")


def fin_bloque(lines: list[str], key_line: int, k: int) -> int:
    """Fin (exclusivo) del bloque de la clave en key_line (sangría k), sin
    líneas en blanco ni comentarios de nivel superior al final."""
    p = key_line + 1
    while p < len(lines):
        l = lines[p]
        if not l.strip():
            p += 1
            continue
        li = indent(l)
        if li > k or (li == k and es_item(l)) or (es_comentario(l) and li <= k):
            p += 1
            continue
        break
    end = p
    while end > key_line + 1 and (not lines[end - 1].strip() or (es_comentario(lines[end - 1]) and indent(lines[end - 1]) <= k)):
        end -= 1
    return end


def buscar_clave(lines: list[str], lo: int, hi: int, k: int, key: str) -> int | None:
    pat = re.compile(rf"^ {{{k}}}{re.escape(key)}:(\s|$)")
    for i in range(lo, hi):
        if pat.match(lines[i]):
            return i
    return None


class Nodo:
    def __init__(self, key_line: int, k: int, end: int, kind: str, child_k: int):
        self.key_line, self.k, self.end, self.kind, self.child_k = key_line, k, end, kind, child_k


def nodo(lines: list[str], path: tuple) -> Nodo | None:
    """Localiza el mapeo/lista en `path` (claves y, para listas, índices)."""
    lo, hi, k = 0, len(lines), 0
    cur: Nodo | None = None
    for parte in path:
        if isinstance(parte, int):
            if cur is None or cur.kind != "seq":
                return None
            items = items_de(lines, cur)
            if parte >= len(items):
                return None
            s, e = items[parte]
            cur = Nodo(s, cur.child_k, e, "item", cur.child_k + 2)
            lo, hi, k = s, e, cur.child_k
            continue
        if cur is not None and cur.kind == "item":
            # la primera clave puede ir en la línea del guion
            dash = lines[cur.key_line]
            m = re.match(rf"^ {{{cur.k}}}- {re.escape(parte)}:(\s|$)", dash)
            line = cur.key_line if m else buscar_clave(lines, cur.key_line + 1, cur.end, cur.child_k, parte)
            kk = cur.child_k
        else:
            line = buscar_clave(lines, lo, hi, k, parte)
            kk = k
        if line is None:
            return None
        end = fin_bloque(lines, line, kk)
        # ¿valor inline?
        resto = re.sub(rf"^ *(- )?{re.escape(parte)}:", "", lines[line]).strip()
        resto = re.sub(r"\s#.*$", "", resto).strip() if not resto.startswith(("'", '"')) else resto
        if resto in ("{}", "[]"):
            cur = Nodo(line, kk, end, "flow_vacio", kk + 2)
        elif resto and not resto.startswith("|") and not resto.startswith(">"):
            cur = Nodo(line, kk, end, "scalar", kk + 2)
        elif resto.startswith(("|", ">")):
            cur = Nodo(line, kk, end, "scalar", kk + 2)
        else:
            first = None
            for i in range(line + 1, end):
                if lines[i].strip() and not es_comentario(lines[i]):
                    first = i
                    break
            if first is None:
                cur = Nodo(line, kk, end, "vacio", kk + 2)
            elif es_item(lines[first]):
                cur = Nodo(line, kk, end, "seq", indent(lines[first]))
            else:
                cur = Nodo(line, kk, end, "map", indent(lines[first]))
        lo, hi, k = line + 1, end, cur.child_k
    return cur


def items_de(lines: list[str], seq: Nodo) -> list[tuple[int, int]]:
    starts = [i for i in range(seq.key_line + 1, seq.end) if indent(lines[i]) == seq.child_k and es_item(lines[i])]
    out = []
    for x, s in enumerate(starts):
        e = starts[x + 1] if x + 1 < len(starts) else seq.end
        while e > s + 1 and not lines[e - 1].strip():
            e -= 1
        out.append((s, e))
    return out


def aplicar_op(lines: list[str], op: tuple) -> str | None:
    """Aplica una op sobre `lines` (in place). Devuelve mensaje de error o None."""
    kind = op[0]
    if kind == "map":
        _, path, key, val, despues_de = op
        if not path:
            # clave de nivel superior: al final del archivo
            end = len(lines)
            while end > 0 and not lines[end - 1].strip():
                end -= 1
            lines[end:end] = emitir_clave(key, val, 0)
            return None
        n = nodo(lines, path)
        if n is None:
            return f"no encontré el mapeo {'.'.join(map(str, path))}"
        if n.kind == "scalar":
            return f"{'.'.join(map(str, path))} es un escalar; no puedo agregar `{key}`"
        if n.kind == "flow_vacio":
            lines[n.key_line] = re.sub(r":\s*(\{\}|\[\])\s*$", ":", lines[n.key_line])
            n = Nodo(n.key_line, n.k, n.key_line + 1, "vacio", n.k + 2)
        pos = n.end if n.kind != "vacio" else n.key_line + 1
        if despues_de and n.kind == "map":
            line = buscar_clave(lines, n.key_line + 1, n.end, n.child_k, despues_de)
            if line is not None:
                pos = fin_bloque(lines, line, n.child_k)
        lines[pos:pos] = emitir_clave(key, val, n.child_k)
        return None
    if kind == "item_key":
        _, path, idx, key, val = op
        n = nodo(lines, path + (idx,))
        if n is None:
            return f"no encontré {'.'.join(map(str, path))}[{idx}]"
        lines[n.end:n.end] = emitir_clave(key, val, n.child_k)
        return None
    if kind == "append":
        _, path, val = op
        n = nodo(lines, path)
        if n is None or n.kind not in ("seq", "vacio"):
            return f"no encontré la lista {'.'.join(map(str, path))}"
        pos = n.end if n.kind == "seq" else n.key_line + 1
        lines[pos:pos] = emitir_item(val, n.child_k if n.kind == "seq" else n.k + 2)
        return None
    return f"op desconocida {kind}"


def describir_op(op: tuple) -> str:
    def hojas(v, pref=""):
        if isinstance(v, dict):
            return "{" + ", ".join(k if not isinstance(x, (dict, list)) else hojas(x, k) for k, x in v.items()) + "}" if not pref else f"{pref}{'{' + ', '.join(v.keys()) + '}'}"
        if isinstance(v, list):
            return f"[{len(v)} ítems]" if not pref else f"{pref}[{len(v)}]"
        return ""

    if op[0] == "map":
        _, path, key, val, _ = op
        return f"+ {'.'.join(path + (key,))} {hojas(val)}".rstrip()
    if op[0] == "item_key":
        _, path, idx, key, _ = op
        return f"+ {'.'.join(path)}[{idx}].{key}"
    _, path, val = op
    return f"+ {'.'.join(path)}[] «{val.get('termino', '?')}»"


# ─── Main ────────────────────────────────────────────────────────────────────


def main() -> int:
    ap = argparse.ArgumentParser(description="Rescata al YAML los campos web de los TS escritos a mano.")
    ap.add_argument("claves", nargs="*", help="Claves G-P-S (ej. 8-2-3). Vacío = todos los TS manuales.")
    ap.add_argument("--dry-run", action="store_true", help="Reporta qué claves se agregarían; no escribe.")
    ap.add_argument("--grado", type=int, help="Limita a un grado.")
    ap.add_argument("--parser", choices=("auto", "node", "python"), default="auto", help="Cómo leer el TS (auto: tsx si existe).")
    ap.add_argument("--anexar-conceptos", action="store_true", help="Anexa a web.conceptos_clave los conceptos que solo existen en el TS.")
    ap.add_argument("--no-color", action="store_true")
    args = ap.parse_args()
    if args.no_color or not sys.stdout.isatty():
        sin_color()

    for c in args.claves:
        if not RE_CLAVE.match(c):
            print(f"{RED}✗ clave inválida: {c} (formato G-P-S){RESET}", file=sys.stderr)
            return 2
    ts_files = ts_manuales(args.grado, args.claves)
    if not ts_files:
        print(f"{RED}✗ no hay TS manuales que coincidan{RESET}", file=sys.stderr)
        return 2
    modo = "DRY-RUN" if args.dry_run else "ESCRITURA"
    print(f"{BOLD}▸ web-rescatar-manual · {modo} · {len(ts_files)} TS manual(es){RESET}")

    objetos, avisos = parsear_ts(ts_files, args.parser)
    for a in avisos:
        print(f"  {YELLOW}! {a}{RESET}")

    escritos = con_error = sin_cambios = 0
    total_ops = 0
    for ts in ts_files:
        clave = ts.stem
        grado = clave.split("-")[0]
        ypath = GUIAS_DIR / grado / f"{clave}.yaml"
        if ts not in objetos:
            con_error += 1
            print(f"  {RED}✗ {clave}: no se pudo parsear el TS{RESET}")
            continue
        if not ypath.exists():
            con_error += 1
            print(f"  {RED}✗ {clave}: no existe {ypath.relative_to(ROOT)}{RESET}")
            continue
        raw = ypath.read_text(encoding="utf-8")
        try:
            data = yaml.safe_load(raw)
        except yaml.YAMLError as exc:
            con_error += 1
            print(f"  {RED}✗ {clave}: YAML inválido: {exc}{RESET}")
            continue
        if not isinstance(data, dict):
            con_error += 1
            print(f"  {RED}✗ {clave}: YAML vacío{RESET}")
            continue
        web_src, apertura_src, extras = extraer(objetos[ts])
        ops, sobrantes = planificar(data, web_src, apertura_src, args.anexar_conceptos)
        if not ops:
            sin_cambios += 1
            print(f"  {DIM}· {clave}: nada que rescatar{RESET}")
        else:
            print(f"  {GREEN}· {clave}{RESET}  {len(ops)} adición(es)")
            for op in ops:
                print(f"      {describir_op(op)}")
        for s in sobrantes:
            print(f"      {YELLOW}~ {s}{RESET}")
        if extras:
            print(f"      {DIM}fuera de alcance (solo en TS): {', '.join(extras)}{RESET}")
        if not ops:
            continue
        total_ops += len(ops)
        lines = raw.split("\n")
        err = None
        for op in ops:
            err = aplicar_op(lines, op)
            if err:
                break
        if err:
            con_error += 1
            print(f"  {RED}✗ {clave}: {err}{RESET}")
            continue
        texto = "\n".join(lines)
        if not texto.endswith("\n"):
            texto += "\n"
        try:
            nuevo = yaml.safe_load(texto)
        except yaml.YAMLError as exc:
            con_error += 1
            print(f"  {RED}✗ {clave}: el YAML resultante no parsea: {exc}{RESET}")
            continue
        esperado = aplicar_en_dict(data, ops)
        if nuevo != esperado:
            con_error += 1
            print(f"  {RED}✗ {clave}: la verificación estructural falló; no se escribe{RESET}")
            continue
        if not args.dry_run:
            ypath.write_text(texto, encoding="utf-8")
            escritos += 1

    print("")
    print(f"{BOLD}Resumen{RESET}: {len(ts_files)} TS · adiciones: {total_ops} · sin cambios: {sin_cambios} · con error: {con_error}"
          + ("" if args.dry_run else f" · YAML escritos: {escritos}"))
    if args.dry_run:
        print(f"  {DIM}(dry-run: nada se escribió){RESET}")
    return 1 if con_error else 0


if __name__ == "__main__":
    sys.exit(main())
