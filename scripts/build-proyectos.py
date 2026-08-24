#!/usr/bin/env python3
"""
Motor de generación de proyectos integradores MILC v3 (modelo entregable-céntrico).

Lee content/proyectos/{clave}.yaml y compila el PDF en
public/proyectos/proyecto-{periodo}-{grado}-TIC.pdf vía xelatex.

Uso:
    python3 scripts/build-proyectos.py            # todos los completos
    python3 scripts/build-proyectos.py 11-1       # solo G11·P1
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts/generadores/template-proyecto-milc-v3.tex"
CONTENT_DIR = ROOT / "content" / "proyectos"
OUT_DIR = ROOT / "public" / "proyectos"
XELATEX = "/Library/TeX/texbin/xelatex"

# Paleta para las lentes del triángulo (color del título del entregable según
# la lente que tiene incrustada la reflexión).
LENTES_COLOR = {
    "dussel": "lentDussel",
    "estoico": "lentEstoico",
    "floridi": "lentFloridi",
}
LENTES_NOMBRE = {
    "dussel": "Lente del nosotros · Dussel",
    "estoico": "Lente del cuidado interior · Estoico",
    "floridi": "Lente de la infoesfera · Floridi",
}


# ───────── Escape LaTeX y helpers ─────────


def escape_latex(text: str) -> str:
    if not isinstance(text, str):
        return ""
    text = text.replace("\r\n", "\n").rstrip()
    out = text
    # Solo escapamos `&` y `%` que el YAML no escapa pero LaTeX necesita.
    out = re.sub(r"(?<!\\)&", "\\&", out)
    out = re.sub(r"(?<!\\)%", "\\%", out)
    return out


def block(text: str) -> str:
    return escape_latex(text or "").strip()


def render_list(items: list[str], prefix: str = "\\item") -> str:
    """Renderiza lista de strings como ítems LaTeX (itemize)."""
    if not items:
        return ""
    lines = [f"{prefix} {escape_latex(it)}" for it in items]
    return "\\begin{itemize}\n" + "\n".join(lines) + "\n\\end{itemize}"


def render_checkbox_list(items: list[str]) -> str:
    """Renderiza lista con checkboxes (\\checkbox prefix)."""
    if not items:
        return ""
    lines = [f"\\checkbox {escape_latex(it)}\\\\" for it in items]
    return "\n".join(lines)


def render_aprendizajes(aprendizajes: list[dict]) -> str:
    """Renderiza aprendizajes como itemize compacto en 2 columnas."""
    if not aprendizajes:
        return "Sin aprendizajes declarados."
    lines = []
    for a in aprendizajes:
        sesion = a.get("sesion", "?")
        titulo = escape_latex(a.get("titulo", ""))
        lines.append(f"\\item \\textbf{{S{sesion}.}} {titulo}")
    return (
        "\\begin{multicols}{2}\n"
        "\\begin{itemize}[leftmargin=*,itemsep=1mm]\n"
        + "\n".join(lines)
        + "\n\\end{itemize}\n\\end{multicols}"
    )


# ───────── Render de un entregable ─────────


def render_entregable(e: dict) -> str:
    """Renderiza un entregable como página LaTeX completa."""
    numero = e.get("numero", "?")
    titulo = escape_latex(e.get("titulo", ""))
    que = block(e.get("que_entregas", ""))
    como = e.get("como_se_hace") or []
    refl = e.get("reflexion") or {}
    criterios = e.get("criterios") or []

    lente_id = refl.get("lente", "dussel")
    lente_color = LENTES_COLOR.get(lente_id, "milcVino")
    lente_nombre = LENTES_NOMBRE.get(lente_id, "Reflexión")
    refl_titulo = escape_latex(refl.get("titulo", ""))
    refl_consigna = block(refl.get("consigna", ""))

    como_lista = render_list(como) if como else ""
    criterios_lista = render_checkbox_list(criterios) if criterios else ""

    return (
        "\n\\newpage\n"
        f"\\begin{{titlebox}}{{milcMagenta}}\n"
        f"Entregable {numero} · {titulo}\n"
        f"\\end{{titlebox}}\n\n"
        f"\\begin{{softbox}}{{milcTurquesa}}{{milcGris}}{{Qué entregas}}\n"
        f"{que}\n"
        f"\\end{{softbox}}\n\n"
        f"\\textbf{{Cómo se hace}}\n"
        f"{como_lista}\n\n"
        f"\\begin{{softbox}}{{{lente_color}}}{{milcGris}}{{Reflexión integrada · {lente_nombre}}}\n"
        f"\\textbf{{{refl_titulo}}}\\\\[2mm]\n"
        f"{refl_consigna}\n"
        f"\\end{{softbox}}\n\n"
        f"\\textbf{{Criterios de calidad (observables)}}\\\\[1mm]\n"
        f"{criterios_lista}\n\n"
        f"\\textbf{{Bitácora del equipo (evidencias y decisiones)}}\n"
        f"\\respuesta{{4}}\n"
    )


# ───────── Render de la rúbrica ─────────


def render_rubrica(rubrica: list[dict], entregables: list[dict]) -> str:
    """Renderiza filas de la rúbrica."""
    if not rubrica:
        return ""
    # Mapa numero → título del entregable.
    titulos_entregables = {
        e.get("numero"): escape_latex(e.get("titulo", ""))
        for e in entregables
    }
    filas = []
    for r in rubrica:
        ent = r.get("entregable", "global")
        if ent == "global":
            criterio = escape_latex(r.get("titulo", "Comunicación e integración del triángulo"))
        else:
            titulo_e = titulos_entregables.get(ent, f"Entregable {ent}")
            criterio = f"Entregable {ent} · {titulo_e}"
        n5 = escape_latex(r.get("nivel_5", ""))
        n3 = escape_latex(r.get("nivel_3", ""))
        n1 = escape_latex(r.get("nivel_1", ""))
        filas.append(f"\\textbf{{{criterio}}} & {n5} & {n3} & {n1}\\\\")
    return "\n".join(filas)


# ───────── Render del guion de sustentación ─────────


def render_guion(sustentacion: dict) -> str:
    items = sustentacion.get("guion_sugerido") or []
    if not items:
        return "Sustentación libre de 5 minutos."
    return render_list(items)


# ───────── Builder principal ─────────


def construir_placeholders(data: dict) -> dict[str, str]:
    grado = int(data["grado"])
    periodo = int(data["periodo"])

    entregables = data.get("entregables") or []
    rubrica = data.get("rubrica") or []
    sustentacion = data.get("sustentacion") or {}

    n_criterios = len(rubrica) if rubrica else 1
    puntos_por_criterio = 5.0 / n_criterios if n_criterios > 0 else 0
    puntos_str = f"{puntos_por_criterio:.2f} puntos"

    # Render de todos los entregables en bloque.
    entregables_bloques = "\n".join(render_entregable(e) for e in entregables)

    placeholders = {
        "GRADO": str(grado),
        "PERIODO": str(periodo),
        "TITULO_PORTADA": block(data.get("titulo_portada", data.get("titulo", ""))),
        "AUTOR": block(data.get("autor", "Dr. Álvaro Cárdenas Orozco")),
        "DURACION_SEMANAS": str(data.get("duracion_semanas", 5)),
        "MODALIDAD": block(data.get("modalidad", "equipo")),
        "ESTRATEGIA": block(data.get("estrategia", "")),
        "DBA": block(data.get("dba", "")),
        "RETO": block(data.get("reto", "")),
        "ANCLAJE": block(data.get("anclaje", "")),
        "INSUMOS_LISTA": render_list(data.get("insumos") or []),
        "APRENDIZAJES_LISTA": render_aprendizajes(data.get("aprendizajes") or []),
        "ENTREGABLES_BLOQUES": entregables_bloques,
        "PUNTOS_POR_CRITERIO": puntos_str,
        "RUBRICA_FILAS": render_rubrica(rubrica, entregables),
        "SUSTENTACION_MIN": str(sustentacion.get("duracion_min", 5)),
        "GUION_SUSTENTACION": render_guion(sustentacion),
        "DECLARACION_IA": block(data.get("declaracion_ia", "")),
        "CIERRE": block(data.get("cierre", "")),
    }
    return placeholders


# Rangos de pictogramas que Helvetica Neue no tiene. Si llegan al .tex,
# xelatex los descarta EN SILENCIO («Missing character») y deja un espacio
# suelto donde iba el simbolo: asi se estuvo imprimiendo el 💭 que encabeza
# los bloques del triangulo en seis proyectos. Se filtran aqui, no en el
# YAML, para no alterar lo que consume la web.
_PICTOGRAMAS = re.compile(
    "[\U0001F300-\U0001FAFF\u2600-\u27BF\uFE0F\u2B00-\u2BFF]"
)


def sin_pictogramas(texto: str, clave: str) -> str:
    limpio = _PICTOGRAMAS.sub("", texto)
    n = len(texto) - len(limpio)
    if n:
        print(f"  · {clave}: {n} pictograma(s) sin glifo retirados del PDF")
    return re.sub(r"  +", " ", limpio)


def llenar_template(placeholders: dict[str, str], clave: str = "") -> str:
    template = TEMPLATE.read_text(encoding="utf-8")
    out = template
    for key, value in placeholders.items():
        out = out.replace(f"<<<{key}>>>", sin_pictogramas(value, clave or key))
    pendientes = re.findall(r"<<<[A-Z_0-9]+>>>", out)
    if pendientes:
        raise RuntimeError(f"Placeholders sin reemplazar: {sorted(set(pendientes))}")
    return out


def compilar_pdf(tex_source: str, clave: str) -> Path:
    grado = int(clave.split("-")[0])
    periodo = int(clave.split("-")[1])
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    work_tex = OUT_DIR / f"proyecto-{periodo}-{grado}-TIC.tex"
    work_tex.write_text(tex_source, encoding="utf-8")

    for _ in range(2):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-output-directory", str(OUT_DIR), str(work_tex)],
            capture_output=True, text=True,
        )
        if result.returncode != 0:
            log = OUT_DIR / f"proyecto-{periodo}-{grado}-TIC.log"
            print(f"  ✗ xelatex falló · revisa {log}", file=sys.stderr)
            if log.exists():
                lineas = log.read_text(encoding="utf-8", errors="ignore").splitlines()
                print("\n".join(lineas[-25:]), file=sys.stderr)
            raise RuntimeError(f"xelatex falló en {clave}")
    return OUT_DIR / f"proyecto-{periodo}-{grado}-TIC.pdf"


def procesar(clave: str) -> bool:
    yaml_path = CONTENT_DIR / f"{clave}.yaml"
    if not yaml_path.exists():
        print(f"  ✗ {clave}: no existe {yaml_path}", file=sys.stderr)
        return False
    with yaml_path.open("r", encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    if not data.get("completo"):
        print(f"  · {clave}: pendiente (completo: false), omitido")
        return True
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
        print("✗ No hay proyectos que procesar.")
        return 1
    print(f"▸ Procesando {len(claves)} proyecto(s)…")
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
