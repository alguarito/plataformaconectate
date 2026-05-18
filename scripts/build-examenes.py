#!/usr/bin/env python3
"""
Motor de generación de exámenes finales MILC v3 (Plataforma Conéctate).

Lee los archivos YAML en `content/examenes/{clave}.yaml` y, para cada uno
con `completo: true`, llena los placeholders de
`scripts/generadores/template-examen-milc-v3.tex` y compila el PDF en
`public/examenes-mejoras/examen-{periodo}-{grado}-TIC.pdf`.

Cada YAML es la **single source of truth** de un examen. Para editar el
contenido, edita el YAML; nunca edites el .tex o el PDF directamente.
El esquema completo está en `content/examenes/_SCHEMA.md`.

Uso:
    python3 scripts/build-examenes.py                 # compila todos los completos
    python3 scripts/build-examenes.py 11-1            # solo G11·P1
    python3 scripts/build-examenes.py 11-1 11-2       # varios

Convenciones:
    - Clave de examen: "{grado}-{periodo}" (ej. "11-1")
    - YAML:            content/examenes/{clave}.yaml
    - PDF generado:    public/examenes-mejoras/examen-{periodo}-{grado}-TIC.pdf
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-examen-milc-v3.tex"
CONTENT_DIR = ROOT / "content" / "examenes"
OUT_DIR = ROOT / "public" / "examenes-mejoras"
XELATEX = "/Library/TeX/texbin/xelatex"

# Paleta del periodo (sincronizada con bento card de la web).
# bento-blue (P1) / bento-cyan (P2) / bento-purple (P3) por convención del
# periodo (no del grado, para que el examen visualmente "pertenezca" al
# periodo dentro de cualquier grado).
COLORES_POR_PERIODO = {
    1: {  # bento-blue
        "COLOR_PERIODO_PRIMARY": "0066FF",
        "COLOR_PERIODO_DARK": "003D99",
        "COLOR_PERIODO_SOFT": "D6E8FF",
    },
    2: {  # bento-cyan
        "COLOR_PERIODO_PRIMARY": "00B3D9",
        "COLOR_PERIODO_DARK": "006B82",
        "COLOR_PERIODO_SOFT": "CCEEF7",
    },
    3: {  # bento-purple
        "COLOR_PERIODO_PRIMARY": "7C3AED",
        "COLOR_PERIODO_DARK": "4C1D95",
        "COLOR_PERIODO_SOFT": "EDE9FE",
    },
}


# ───────── Helpers de escape LaTeX ─────────


def escape_latex(text: str) -> str:
    """Escapa caracteres especiales de LaTeX en texto plano.

    NO toca placeholders ya escapados manualmente en el YAML (texttt, emph,
    textbf, etc.) — esos se conservan tal cual."""
    if not isinstance(text, str):
        return ""
    # Caracteres especiales que el YAML no escapa pero LaTeX necesita.
    # Solo escapamos los que no están dentro de macros LaTeX explícitas.
    text = text.replace("\r\n", "\n").rstrip()
    # Reemplazos seguros (no rompen LaTeX existente).
    replacements = [
        ("&", "\\&"),
        ("%", "\\%"),
        # No tocamos $, \, {, }, _, ^, ~, # porque pueden ser LaTeX legítimo.
    ]
    # Evitar doble-escape: si ya está escapado, no lo escapamos de nuevo.
    out = text
    for raw, escaped in replacements:
        # Solo reemplaza si no está ya precedido por backslash.
        out = re.sub(r"(?<!\\)" + re.escape(raw), escaped, out)
    return out


def block(text: str) -> str:
    """Texto multilinea limpio para insertar como contenido de tcolorbox."""
    return escape_latex(text or "").strip()


# ───────── Validación previa ─────────


REQUIRED_TOP = [
    "clave", "grado", "periodo", "completo", "titulo", "titulo_portada",
    "duracion_min", "ponderacion", "fecha_aplicacion",
    "apertura", "aprendizajes", "examen_formal", "banco_practica", "cierre",
]
REQUIRED_APERTURA = ["saber_ancestral", "contexto", "pregunta_marco"]
REQUIRED_FORMAL = ["concreto", "contexto", "practico", "reflexivo"]


def validar(data: dict, clave: str) -> list[str]:
    """Devuelve lista de errores. Vacío = OK."""
    errores = []
    for k in REQUIRED_TOP:
        if k not in data:
            errores.append(f"falta `{k}` en raíz")
    apertura = data.get("apertura") or {}
    for k in REQUIRED_APERTURA:
        if k not in apertura:
            errores.append(f"falta `apertura.{k}`")
    formal = data.get("examen_formal") or {}
    for k in REQUIRED_FORMAL:
        if k not in formal:
            errores.append(f"falta `examen_formal.{k}`")
    # Práctico debe ser lista de 2
    practico = (formal.get("practico") or [])
    if len(practico) != 2:
        errores.append(f"`examen_formal.practico` debe tener 2 ítems, tiene {len(practico)}")
    # Reflexivo debe tener las 3 voces.
    reflexivo = formal.get("reflexivo") or {}
    voces = reflexivo.get("voces") or {}
    for v in ("dussel", "estoico", "floridi"):
        if not voces.get(v):
            errores.append(f"falta `examen_formal.reflexivo.voces.{v}`")
    # Aprendizajes mínimos.
    aprendizajes = data.get("aprendizajes") or []
    if len(aprendizajes) < 5:
        errores.append(f"`aprendizajes` debe tener al menos 5 entradas, tiene {len(aprendizajes)}")
    # Banco de práctica.
    banco = data.get("banco_practica") or []
    if len(banco) < 20:
        errores.append(f"`banco_practica` debe tener al menos 20 ítems, tiene {len(banco)}")
    if len(banco) > 30:
        errores.append(f"`banco_practica` no puede tener más de 30 ítems, tiene {len(banco)}")
    return errores


# ───────── Renderizado de bloques opcionales ─────────


def render_aprendizajes(aprendizajes: list[dict]) -> str:
    """Renderiza la lista de aprendizajes como una lista LaTeX."""
    if not aprendizajes:
        return "Sin aprendizajes declarados."
    items = []
    for a in aprendizajes:
        sesion = a.get("sesion", "?")
        titulo = escape_latex(a.get("titulo", ""))
        items.append(f"\\item \\textbf{{S{sesion}.}} {titulo}")
    return "\\begin{itemize}\n" + "\n".join(items) + "\n\\end{itemize}"


def render_practico(p: dict, numero: int) -> dict[str, str]:
    """Devuelve los 3 placeholders del ítem práctico N (1 o 2):
    PRACTICO_N_ENUNCIADO, PRACTICO_N_CONTEXTO_BLOQUE, PRACTICO_N_OPCIONES_BLOQUE,
    PRACTICO_N_CRITERIO."""
    enunciado = block(p.get("enunciado", ""))
    contexto = (p.get("contexto") or "").strip()
    criterio = block(p.get("criterio", ""))
    tipo = p.get("tipo", "abierta_larga")

    contexto_bloque = ""
    if contexto:
        contexto_bloque = (
            "\\begin{infoband}{milcPeriodoDark}\n"
            f"\\textbf{{Caso.}} {block(contexto)}\n"
            "\\end{infoband}"
        )

    opciones_bloque = ""
    if tipo == "opcion_multiple":
        opciones = p.get("opciones") or []
        if opciones:
            letras = "ABCDE"
            renglones = []
            for i, op in enumerate(opciones):
                letra = letras[i] if i < len(letras) else f"{i+1}"
                renglones.append(f"  \\item[\\textbf{{{letra}.}}] {escape_latex(op)}")
            opciones_bloque = (
                "\\begin{itemize}[leftmargin=8mm,labelsep=4mm]\n"
                + "\n".join(renglones)
                + "\n\\end{itemize}"
            )

    return {
        f"PRACTICO_{numero}_ENUNCIADO": enunciado,
        f"PRACTICO_{numero}_CONTEXTO_BLOQUE": contexto_bloque,
        f"PRACTICO_{numero}_OPCIONES_BLOQUE": opciones_bloque,
        f"PRACTICO_{numero}_CRITERIO": criterio,
    }


# ───────── Builder principal ─────────


def construir_placeholders(data: dict) -> dict[str, str]:
    grado = int(data["grado"])
    periodo = int(data["periodo"])
    clave = str(data["clave"])
    colores = COLORES_POR_PERIODO.get(periodo, COLORES_POR_PERIODO[1])

    apertura = data.get("apertura") or {}
    formal = data.get("examen_formal") or {}
    concreto = formal.get("concreto") or {}
    contexto = formal.get("contexto") or {}
    practico_lista = formal.get("practico") or []
    reflexivo = formal.get("reflexivo") or {}
    voces = reflexivo.get("voces") or {}

    placeholders = {
        "CLAVE": clave,
        "GRADO": str(grado),
        "PERIODO": str(periodo),
        "TITULO_PORTADA": block(data.get("titulo_portada", data.get("titulo", ""))),
        "DURACION_MIN": str(data.get("duracion_min", 45)),
        "FECHA_APLICACION": block(data.get("fecha_aplicacion", "Sesión 10")),
        "PONDERACION": str(data.get("ponderacion", 20)),
        "INSTRUCCIONES": block(data.get(
            "instrucciones",
            "Lee cada pregunta con atención. Responde con tu propia voz: el examen evalúa cómo razonas, no cuánto repites."
        )),
        "SABER_ANCESTRAL": block(apertura.get("saber_ancestral", "")),
        "CONTEXTO": block(apertura.get("contexto", "")),
        "PREGUNTA_MARCO": block(apertura.get("pregunta_marco", "")),
        "APRENDIZAJES_LISTA": render_aprendizajes(data.get("aprendizajes") or []),
        "CONCRETO_ENUNCIADO": block(concreto.get("enunciado", "")),
        "CONCRETO_CRITERIO": block(concreto.get("criterio", "")),
        "CONTEXTO_ENUNCIADO": block(contexto.get("enunciado", "")),
        "CONTEXTO_CRITERIO": block(contexto.get("criterio", "")),
        "REFLEXIVO_ENUNCIADO": block(reflexivo.get("enunciado", "")),
        "VOZ_DUSSEL": block(voces.get("dussel", "")),
        "VOZ_ESTOICO": block(voces.get("estoico", "")),
        "VOZ_FLORIDI": block(voces.get("floridi", "")),
        "REFLEXIVO_CRITERIO": block(reflexivo.get("criterio", "")),
        "CIERRE": block(data.get("cierre", "")),
        **colores,
    }
    # Práctico 1 y 2.
    if len(practico_lista) >= 1:
        placeholders.update(render_practico(practico_lista[0], 1))
    if len(practico_lista) >= 2:
        placeholders.update(render_practico(practico_lista[1], 2))

    return placeholders


def llenar_template(placeholders: dict[str, str]) -> str:
    template = TEMPLATE.read_text(encoding="utf-8")
    out = template
    for key, value in placeholders.items():
        out = out.replace(f"<<<{key}>>>", value)
    # Verifica que no queden placeholders sin reemplazar.
    pendientes = re.findall(r"<<<[A-Z_0-9]+>>>", out)
    if pendientes:
        raise RuntimeError(
            f"Placeholders sin reemplazar: {sorted(set(pendientes))}"
        )
    return out


def compilar_pdf(tex_source: str, clave: str) -> Path:
    grado = int(clave.split("-")[0])
    periodo = int(clave.split("-")[1])
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    work_tex = OUT_DIR / f"examen-{periodo}-{grado}-TIC.tex"
    work_tex.write_text(tex_source, encoding="utf-8")

    # 2 pasadas xelatex.
    for _ in range(2):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-output-directory", str(OUT_DIR), str(work_tex)],
            capture_output=True, text=True,
        )
        if result.returncode != 0:
            log = OUT_DIR / f"examen-{periodo}-{grado}-TIC.log"
            print(f"  ✗ xelatex falló · revisa {log}", file=sys.stderr)
            # Imprime últimas 20 líneas del log para diagnóstico rápido.
            if log.exists():
                lineas = log.read_text(encoding="utf-8", errors="ignore").splitlines()
                print("\n".join(lineas[-25:]), file=sys.stderr)
            raise RuntimeError(f"xelatex falló en {clave}")
    return OUT_DIR / f"examen-{periodo}-{grado}-TIC.pdf"


def procesar(clave: str) -> bool:
    """Procesa un examen. Devuelve True si OK, False si error."""
    yaml_path = CONTENT_DIR / f"{clave}.yaml"
    if not yaml_path.exists():
        print(f"  ✗ {clave}: no existe {yaml_path}", file=sys.stderr)
        return False
    with yaml_path.open("r", encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    if not data.get("completo"):
        print(f"  · {clave}: marcado como pendiente (completo: false), omitido")
        return True
    errores = validar(data, clave)
    if errores:
        print(f"  ✗ {clave}: validación falló")
        for e in errores:
            print(f"      - {e}")
        return False
    placeholders = construir_placeholders(data)
    try:
        tex_source = llenar_template(placeholders)
    except RuntimeError as exc:
        print(f"  ✗ {clave}: {exc}", file=sys.stderr)
        return False
    try:
        pdf_path = compilar_pdf(tex_source, clave)
    except RuntimeError:
        return False
    print(f"  ✓ {clave} → {pdf_path.relative_to(ROOT)}")
    return True


def main() -> int:
    if not TEMPLATE.exists():
        print(f"✗ No existe el template: {TEMPLATE}", file=sys.stderr)
        return 1
    args = sys.argv[1:]
    if args:
        claves = args
    else:
        claves = sorted([f.stem for f in CONTENT_DIR.glob("*.yaml") if not f.stem.startswith("_")])
    if not claves:
        print("✗ No hay exámenes que procesar.")
        return 1
    print(f"▸ Procesando {len(claves)} examen(es)…")
    ok, fail = 0, 0
    for clave in claves:
        if procesar(clave):
            ok += 1
        else:
            fail += 1
    print(f"\n  Resumen: {ok} OK · {fail} con errores")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
