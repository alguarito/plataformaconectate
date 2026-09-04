#!/usr/bin/env python3
"""
Reparte la posición de la respuesta correcta en los quices de opción múltiple.

Problema: en `web.quiz.preguntas[]` de las guías y en los exámenes
(`examen_formal.practico[]` con `tipo: opcion_multiple` y `banco_practica[]`)
la respuesta correcta cae casi siempre en el índice 1 (opción B). Un
estudiante atento lo nota en dos quices.

Algoritmo (determinista, reproducible):
- Por archivo se deriva una semilla fija de la clave (`zlib.crc32`), así el
  resultado no cambia entre corridas ni entre máquinas.
- Cada grupo de preguntas (el quiz de la guía; `practico` y `banco_practica`
  del examen, cada uno por su lado) recorre permutaciones barajadas de
  [0, 1, 2, 3]: en 4 preguntas seguidas aparecen las 4 posiciones, luego en
  cualquier ventana de 5 preguntas ninguna posición se repite más de 2 veces.
- La opción correcta se mueve a la posición objetivo; las demás conservan su
  orden relativo. Se actualiza `respuesta_index`. Ningún texto cambia.

Formato: NO se re-serializa el YAML. Se localizan en el texto las líneas de
cada bloque `opciones:` y de `respuesta_index:`, se reordenan las líneas de
los ítems y se reescribe el número. Las comillas, los bloques `|-` y los
espacios quedan como estaban. Antes de escribir se verifica con `yaml.safe_load`
que la estructura resultante es exactamente la esperada (mismo contenido,
opciones permutadas, índice actualizado); si no cuadra, el archivo no se toca.

Uso:
    python3 scripts/quiz-barajar.py --dry-run          # reporte, sin escribir
    python3 scripts/quiz-barajar.py                    # guías + exámenes
    python3 scripts/quiz-barajar.py --grado 8          # solo grado 8 (guías y examen)
    python3 scripts/quiz-barajar.py --examenes         # solo content/examenes
    python3 scripts/quiz-barajar.py --guias            # solo content/guias
    python3 scripts/quiz-barajar.py 8-2-3 8-2          # claves: guía G-P-S, examen G-P
    python3 scripts/quiz-barajar.py content/guias/semillero/robotica-1.yaml
"""
from __future__ import annotations

import argparse
import copy
import random
import re
import sys
import zlib
from collections import Counter
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
GUIAS_DIR = ROOT / "content" / "guias"
EXAMENES_DIR = ROOT / "content" / "examenes"

N_POS = 4  # opciones por pregunta (A-D)

# Colores ANSI (se apagan con --no-color o si stdout no es TTY)
RESET, RED, YELLOW, GREEN, DIM, BOLD = "\033[0m", "\033[31m", "\033[33m", "\033[32m", "\033[2m", "\033[1m"


def sin_color() -> None:
    global RESET, RED, YELLOW, GREEN, DIM, BOLD
    RESET = RED = YELLOW = GREEN = DIM = BOLD = ""


# ─── Selección de archivos ───────────────────────────────────────────────────


def es_guia(path: Path) -> bool:
    return GUIAS_DIR in path.parents


def archivos_por_defecto(grado: int | None, solo_guias: bool, solo_examenes: bool) -> list[Path]:
    files: list[Path] = []
    if not solo_examenes:
        for d in sorted(GUIAS_DIR.iterdir()):
            if not d.is_dir():
                continue
            if grado is not None and d.name != str(grado):
                continue
            files.extend(sorted(d.glob("*.yaml")))
    if not solo_guias:
        for f in sorted(EXAMENES_DIR.glob("*.yaml")):
            if grado is not None and not f.name.startswith(f"{grado}-"):
                continue
            files.append(f)
    return files


def resolver_clave(clave: str) -> Path | None:
    """`8-2-3` → guía; `8-2` → examen; también acepta rutas."""
    p = Path(clave)
    if p.suffix == ".yaml" and (p.exists() or (ROOT / p).exists()):
        return p if p.exists() else ROOT / p
    m = re.fullmatch(r"(\d+)-(\d+)-(\d+)", clave)
    if m:
        cand = GUIAS_DIR / m.group(1) / f"{clave}.yaml"
        return cand if cand.exists() else None
    m = re.fullmatch(r"(\d+)-(\d+)", clave)
    if m:
        cand = EXAMENES_DIR / f"{clave}.yaml"
        return cand if cand.exists() else None
    return None


# ─── Objetivos estructurales (qué preguntas se barajan) ──────────────────────


def grupos_de(data: dict, guia: bool) -> list[tuple[str, list[dict]]]:
    """Devuelve [(nombre_grupo, [pregunta, ...])] con los dicts vivos del YAML
    (se mutan después para construir la estructura esperada)."""
    if guia:
        quiz = (data.get("web") or {}).get("quiz") or {}
        pregs = [p for p in (quiz.get("preguntas") or []) if isinstance(p, dict) and "opciones" in p]
        return [("web.quiz", pregs)] if pregs else []
    grupos = []
    practico = [
        it for it in ((data.get("examen_formal") or {}).get("practico") or [])
        if isinstance(it, dict) and it.get("tipo") == "opcion_multiple" and "opciones" in it
    ]
    if practico:
        grupos.append(("examen_formal.practico", practico))
    banco = [
        it for it in (data.get("banco_practica") or [])
        if isinstance(it, dict) and "respuesta_index" in it and "opciones" in it
    ]
    if banco:
        grupos.append(("banco_practica", banco))
    return grupos


class Ciclo:
    """Entrega posiciones objetivo recorriendo permutaciones barajadas de 0..3."""

    def __init__(self, rng: random.Random):
        self.rng = rng
        self.buf: list[int] = []

    def siguiente(self) -> int:
        if not self.buf:
            self.buf = self.rng.sample(range(N_POS), N_POS)
        return self.buf.pop(0)


# ─── Localización en el texto ────────────────────────────────────────────────

RE_OPCIONES = re.compile(r"^( *)opciones:\s*(#.*)?$")
RE_RESP = re.compile(r"^( *)respuesta_index:\s*(\d+)\s*(#.*)?$")


def indent(line: str) -> int:
    return len(line) - len(line.lstrip(" "))


def es_item(line: str) -> bool:
    s = line.lstrip(" ")
    return s.startswith("- ") or s == "-"


def scan_bloques(lines: list[str]) -> list[dict]:
    """Encuentra cada `opciones:` en bloque, sus ítems (rangos de líneas) y la
    línea `respuesta_index:` del mismo mapeo."""
    bloques = []
    i = 0
    while i < len(lines):
        m = RE_OPCIONES.match(lines[i])
        if not m:
            i += 1
            continue
        k = len(m.group(1))
        j = i + 1
        while j < len(lines) and not lines[j].strip():
            j += 1
        if j >= len(lines) or not es_item(lines[j]) or indent(lines[j]) < k:
            i = j if j > i else i + 1
            continue
        ind = indent(lines[j])
        starts: list[int] = []
        p = j
        while p < len(lines):
            l = lines[p]
            if not l.strip():
                p += 1
                continue
            li = indent(l)
            if li == ind and es_item(l):
                starts.append(p)
            elif li > ind:
                pass  # continuación del ítem (bloque |-, comillas multilínea)
            else:
                break
            p += 1
        end = p
        while end > j and not lines[end - 1].strip():
            end -= 1
        items = [(starts[x], starts[x + 1] if x + 1 < len(starts) else end) for x in range(len(starts))]

        # respuesta_index: primero hacia adelante dentro del mismo mapeo, luego hacia atrás
        resp = None
        q = end
        while q < len(lines):
            l = lines[q]
            if not l.strip() or l.lstrip().startswith("#"):
                q += 1
                continue
            li = indent(l)
            if li < k or (li == k and es_item(l)):
                break
            mm = RE_RESP.match(l)
            if mm and li == k:
                resp = q
                break
            q += 1
        if resp is None:
            q = i - 1
            while q >= 0:
                l = lines[q]
                if not l.strip() or l.lstrip().startswith("#"):
                    q -= 1
                    continue
                li = indent(l)
                mm = RE_RESP.match(l)
                if mm and li == k:
                    resp = q
                    break
                if li < k or (li == k and es_item(l)) or (li == k - 2 and es_item(l)):
                    break
                q -= 1
        # Rango del ítem (el mapeo de la pregunta) que contiene este bloque: se
        # usa para actualizar menciones a la letra («La opción B es correcta»).
        it_start = i
        q = i - 1
        while q >= 0:
            l = lines[q]
            if l.strip() and not l.lstrip().startswith("#"):
                li = indent(l)
                if li < k:
                    it_start = q if (li == k - 2 and es_item(l)) else q + 1
                    break
            q -= 1
        it_end = max(end, (resp + 1) if resp is not None else end)
        q = it_end
        while q < len(lines):
            l = lines[q]
            if l.strip() and not l.lstrip().startswith("#") and indent(l) < k:
                break
            q += 1
        it_end = q
        while it_end > end and not lines[it_end - 1].strip():
            it_end -= 1
        bloques.append({"key": i, "indent": k, "item_indent": ind, "items": items, "end": end, "resp": resp,
                        "item": (it_start, it_end)})
        i = max(end, i + 1)
    return bloques


# Menciones a la letra de la opción en criterios/retroalimentación.
# Estrictas («La opción B es correcta», «respuesta C») se remapean con la
# permutación completa. Solo mayúsculas: «respuesta a una categoría» no cuenta.
RE_LETRA = re.compile(r"(\b(?:[Oo]pci[oó]n|[Rr]espuesta|[Ll]etra|[Aa]lternativa)\s+\(?)([A-D])\b")
# Sueltas («A es la trampa», «C y D son secundarias») NO se tocan: en lógica
# «A es verdadero y B…» son variables, no opciones. Solo se avisa.
RE_LETRA_SUELTA = re.compile(r"(?<![\w/\\])([A-D])(?=\s*(?:es\b|son\b|y\b|o\b|sería\b|parece\b|[,;:)]|—|–))")


def _sub_letras(s: str, mapa: dict[str, str]) -> str:
    return RE_LETRA.sub(lambda m: m.group(1) + mapa.get(m.group(2), m.group(2)), s)


def _sub_letras_rec(v, mapa: dict[str, str]):
    if isinstance(v, str):
        return _sub_letras(v, mapa)
    if isinstance(v, list):
        return [_sub_letras_rec(x, mapa) for x in v]
    if isinstance(v, dict):
        for k in list(v.keys()):
            v[k] = _sub_letras_rec(v[k], mapa)
        return v
    return v


def opciones_de_bloque(lines: list[str], bloque: dict) -> list | None:
    """Parsea solo las líneas de los ítems para comparar con la estructura."""
    ind = bloque["item_indent"]
    if not bloque["items"]:
        return None
    frag = []
    for l in lines[bloque["items"][0][0]:bloque["end"]]:
        frag.append(l[ind:] if l.startswith(" " * ind) else l.lstrip(" "))
    try:
        val = yaml.safe_load("\n".join(frag))
    except yaml.YAMLError:
        return None
    return val if isinstance(val, list) else None


# ─── Barajado de un archivo ──────────────────────────────────────────────────


def barajar_archivo(path: Path, clave: str) -> dict:
    """Devuelve {'antes': Counter, 'despues': Counter, 'texto': str|None,
    'cambios': int, 'errores': [str], 'avisos': [str]}."""
    res = {"antes": Counter(), "despues": Counter(), "texto": None, "cambios": 0, "letras": 0, "errores": [], "avisos": []}
    raw = path.read_text(encoding="utf-8")
    try:
        data = yaml.safe_load(raw)
    except yaml.YAMLError as exc:
        res["errores"].append(f"YAML inválido: {exc}")
        return res
    if not isinstance(data, dict):
        return res
    grupos = grupos_de(data, es_guia(path))
    if not grupos:
        return res

    rng = random.Random(zlib.crc32(clave.encode("utf-8")))
    # Plan estructural: por pregunta (en orden del documento) la posición objetivo.
    objetivos: list[dict] = []  # {'opciones', 'idx', 'target', 'preg', 'grupo'}
    for nombre, pregs in grupos:
        ciclo = Ciclo(rng)
        for n, p in enumerate(pregs):
            ops = p.get("opciones")
            idx = p.get("respuesta_index")
            if not isinstance(ops, list) or len(ops) != N_POS or not isinstance(idx, int) or not (0 <= idx < N_POS):
                res["avisos"].append(f"{nombre}[{n}]: {len(ops) if isinstance(ops, list) else '?'} opciones / índice {idx!r}; se deja igual")
                continue
            res["antes"][idx] += 1
            objetivos.append({"opciones": ops, "idx": idx, "target": ciclo.siguiente(), "preg": p, "grupo": nombre, "n": n})

    if not objetivos:
        return res

    lines = raw.split("\n")
    bloques = scan_bloques(lines)
    pendientes = list(objetivos)
    asignados: list[tuple[dict, dict]] = []
    for b in bloques:
        ops = opciones_de_bloque(lines, b)
        if ops is None:
            continue
        for o in pendientes:
            if o["opciones"] == ops:
                asignados.append((o, b))
                pendientes.remove(o)
                break
    for o in pendientes:
        res["errores"].append(f"{o['grupo']}[{o['n']}]: no encontré su bloque `opciones:` en el texto")
    if res["errores"]:
        return res

    # Aplica de abajo hacia arriba (los rangos no cambian de tamaño, pero es más seguro).
    nuevas = list(lines)
    for o, b in sorted(asignados, key=lambda t: -t[1]["key"]):
        idx, target = o["idx"], o["target"]
        if b["resp"] is None:
            res["errores"].append(f"{o['grupo']}[{o['n']}]: no encontré `respuesta_index:`")
            continue
        if len(b["items"]) != N_POS:
            res["errores"].append(f"{o['grupo']}[{o['n']}]: el bloque tiene {len(b['items'])} ítems en el texto")
            continue
        # Estructura esperada
        ops = o["preg"]["opciones"]
        correcta = ops[idx]
        resto = [x for i, x in enumerate(ops) if i != idx]
        resto.insert(target, correcta)
        o["preg"]["opciones"] = resto
        o["preg"]["respuesta_index"] = target
        res["despues"][target] += 1
        if idx == target:
            continue
        # Texto
        grupos_lineas = [nuevas[s:e] for s, e in b["items"]]
        corr = grupos_lineas.pop(idx)
        grupos_lineas.insert(target, corr)
        inicio, fin = b["items"][0][0], b["end"]
        nuevas[inicio:fin] = [l for g in grupos_lineas for l in g]
        nuevas[b["resp"]] = re.sub(r"(respuesta_index:\s*)\d+", rf"\g<1>{target}", nuevas[b["resp"]], count=1)
        res["cambios"] += 1
        # Menciones a la letra dentro del mismo ítem («La opción B es correcta»).
        # Mapa viejo→nuevo de TODAS las letras según la permutación aplicada.
        orden_viejo = [i for i in range(N_POS) if i != idx]
        orden_viejo.insert(target, idx)  # orden_viejo[pos_nueva] = índice viejo
        mapa = {"ABCD"[viejo]: "ABCD"[nuevo] for nuevo, viejo in enumerate(orden_viejo)}
        a, z = b["item"]
        n_letras = 0
        sueltas: set[str] = set()
        for li in range(a, z):
            hits = [m for m in RE_LETRA.finditer(nuevas[li]) if mapa[m.group(2)] != m.group(2)]
            if hits:
                n_letras += len(hits)
                nuevas[li] = _sub_letras(nuevas[li], mapa)
            for m in RE_LETRA_SUELTA.finditer(nuevas[li]):
                if mapa[m.group(1)] != m.group(1):
                    sueltas.add(m.group(1))
        if n_letras:
            _sub_letras_rec(o["preg"], mapa)
            res["letras"] += n_letras
        if sueltas:
            cambios_mapa = ", ".join(f"{v}→{n}" for v, n in mapa.items() if v != n)
            res["avisos"].append(
                f"{o['grupo']}[{o['n']}]: menciona letras sueltas ({', '.join(sorted(sueltas))}) que no se "
                f"tocan; revisar a mano con el mapa {cambios_mapa}"
            )

    if res["errores"]:
        return res
    texto = "\n".join(nuevas)
    try:
        verificado = yaml.safe_load(texto)
    except yaml.YAMLError as exc:
        res["errores"].append(f"el resultado no parsea: {exc}")
        return res
    if verificado != data:
        res["errores"].append("la verificación estructural falló (el texto reordenado no coincide con lo esperado); no se escribe")
        return res
    res["texto"] = texto
    return res


# ─── Reporte ─────────────────────────────────────────────────────────────────


def fmt_dist(c: Counter) -> str:
    total = sum(c.values()) or 1
    letras = "ABCD"
    return "  ".join(f"{letras[i]}:{c.get(i, 0):>3} ({100 * c.get(i, 0) / total:4.1f}%)" for i in range(N_POS))


def main() -> int:
    ap = argparse.ArgumentParser(description="Reparte la posición de la respuesta correcta en quices y exámenes.")
    ap.add_argument("claves", nargs="*", help="Claves: guía G-P-S, examen G-P, o rutas .yaml. Vacío = todo.")
    ap.add_argument("--dry-run", action="store_true", help="Solo reporta; no escribe.")
    ap.add_argument("--grado", type=int, help="Limita a un grado (guías y examen).")
    ap.add_argument("--examenes", action="store_true", help="Solo content/examenes.")
    ap.add_argument("--guias", action="store_true", help="Solo content/guias.")
    ap.add_argument("--verbose", "-v", action="store_true", help="Muestra también los archivos sin cambios.")
    ap.add_argument("--no-color", action="store_true")
    args = ap.parse_args()
    if args.no_color or not sys.stdout.isatty():
        sin_color()

    if args.claves:
        files: list[Path] = []
        for c in args.claves:
            p = resolver_clave(c)
            if p is None:
                print(f"{RED}✗ clave no encontrada: {c}{RESET}", file=sys.stderr)
                return 2
            files.append(p)
    else:
        files = archivos_por_defecto(args.grado, args.guias, args.examenes)
    if not files:
        print(f"{RED}✗ no hay archivos que procesar{RESET}", file=sys.stderr)
        return 2

    modo = "DRY-RUN" if args.dry_run else "ESCRITURA"
    print(f"{BOLD}▸ quiz-barajar · {modo} · {len(files)} archivo(s){RESET}")
    total_antes, total_despues = Counter(), Counter()
    escritos = con_error = sin_quiz = 0
    for f in files:
        clave = f.stem
        r = barajar_archivo(f, clave)
        rel = f.relative_to(ROOT) if ROOT in f.parents else f
        for a in r["avisos"]:
            print(f"  {YELLOW}! {rel}: {a}{RESET}")
        if r["errores"]:
            con_error += 1
            for e in r["errores"]:
                print(f"  {RED}✗ {rel}: {e}{RESET}")
            continue
        if not r["antes"]:
            sin_quiz += 1
            if args.verbose:
                print(f"  {DIM}· {rel}: sin preguntas de opción múltiple{RESET}")
            continue
        total_antes.update(r["antes"])
        total_despues.update(r["despues"])
        if r["cambios"] or args.verbose or args.dry_run:
            letras = f" · {r['letras']} mención(es) a la letra actualizada(s)" if r["letras"] else ""
            print(f"  {GREEN if r['cambios'] else DIM}· {rel}{RESET}  {r['cambios']} movida(s){letras}")
            print(f"      antes    {fmt_dist(r['antes'])}")
            print(f"      después  {fmt_dist(r['despues'])}")
        if not args.dry_run and r["cambios"] and r["texto"] is not None:
            f.write_text(r["texto"], encoding="utf-8")
            escritos += 1

    n = sum(total_antes.values())
    print("")
    print(f"{BOLD}Distribución global ({n} preguntas){RESET}")
    print(f"  antes    {fmt_dist(total_antes)}")
    print(f"  después  {fmt_dist(total_despues)}")
    resumen = f"  archivos: {len(files)} · sin quiz: {sin_quiz} · con error: {con_error}"
    if not args.dry_run:
        resumen += f" · escritos: {escritos}"
    print(resumen)
    if args.dry_run:
        print(f"  {DIM}(dry-run: nada se escribió){RESET}")
    return 1 if con_error else 0


if __name__ == "__main__":
    sys.exit(main())
