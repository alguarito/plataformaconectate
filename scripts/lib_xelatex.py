"""Compilación XeLaTeX compartida por los cuatro motores de guías MILC v3.

Los drivers de grados, Semillero, Territorio Interior y Bebras llenan la misma
plantilla (scripts/generadores/template-milc-v3.tex) y compilaban cada uno con
una copia del mismo bloque: dos pasadas de xelatex, borrar auxiliares, listo.
Ese bloque tenía tres defectos que la auditoría de 2026-09-03 sacó a la luz:

  · La ruta de xelatex estaba fija (/Library/TeX/texbin/xelatex). En otra
    máquina o con otra distribución, el builder no arrancaba.
  · El .log se borraba SIN LEERLO. Un «Overfull \\vbox» —una caja más alta que
    la página, con el contenido montado sobre el número de página— pasaba
    como guía «OK». Territorio Interior 10-7 salió así a public/.
  · Los avisos de recursos (assets declarados pero ausentes, extensiones no
    soportadas) se acumulaban en una lista global que nunca se imprimía, y
    con el ProcessPool del motor de grados ni siquiera llegaban al proceso
    padre.

Aquí vive la versión única: compila, LEE el .log, falla la guía si hay
`Overfull \\vbox`, avisa (con conteo) de los `Overfull \\hbox`, y solo
entonces borra los auxiliares. Si la guía falla, el .log se conserva para
poder revisarlo.

También vive aquí `texto_pdf()`, que convierte un título con LaTeX literal
(\\textbf, \\emph, comillas ``...'') en el texto plano que van a leer los
metadatos del PDF (/Title) y, con ellos, el lector de pantalla.
"""
from __future__ import annotations

import re
import shutil
import subprocess
from pathlib import Path

# xelatex del PATH; si no hay (Finder, cron, editor sin PATH), el de MacTeX.
XELATEX = shutil.which("xelatex") or "/Library/TeX/texbin/xelatex"

# 2 pasadas: indispensables para el TikZ overlay de la portada (remember
# picture) y para que hyperref resuelva marcadores y anclas.
PASADAS = 2

AUXILIARES = (".aux", ".log", ".out")

_RE_OVERFULL_VBOX = re.compile(r"^Overfull \\vbox \(([\d.]+)pt too high\)", re.M)
_RE_OVERFULL_HBOX = re.compile(r"^Overfull \\hbox \(([\d.]+)pt too wide\)", re.M)


def leer_log(log: Path) -> tuple[list[float], list[float]]:
    """Devuelve (alturas de Overfull \\vbox, anchos de Overfull \\hbox) del .log.

    XeLaTeX escribe el log en la codificación del sistema; los mensajes que
    buscamos son ASCII, así que se lee con `errors="replace"` para que un
    carácter raro en el nombre de una fuente no reviente la lectura.
    """
    if not log.exists():
        return [], []
    texto = log.read_text(encoding="utf-8", errors="replace")
    vbox = [float(m) for m in _RE_OVERFULL_VBOX.findall(texto)]
    hbox = [float(m) for m in _RE_OVERFULL_HBOX.findall(texto)]
    return vbox, hbox


def limpiar_auxiliares(out_tex: Path) -> None:
    for ext in AUXILIARES:
        aux = out_tex.with_suffix(ext)
        if aux.exists():
            aux.unlink()


def compilar(out_tex: Path, avisos: list[str] | None = None) -> tuple[bool, str]:
    """Compila `out_tex` (2 pasadas) y valida el .log.

    Devuelve (ok, mensaje). Los avisos no fatales (Overfull \\hbox) se agregan
    a `avisos` si se pasa la lista. Si la guía falla, el .log se conserva.
    """
    if avisos is None:
        avisos = []
    log = out_tex.with_suffix(".log")
    pdf = out_tex.with_suffix(".pdf")

    for i in range(1, PASADAS + 1):
        result = subprocess.run(
            [XELATEX, "-interaction=nonstopmode", "-halt-on-error", out_tex.name],
            cwd=out_tex.parent,
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            return False, f"xelatex pasada {i} falló (revisa {log.name})"

    vbox, hbox = leer_log(log)
    if vbox:
        peor = max(vbox)
        return False, (
            f"Overfull \\vbox ×{len(vbox)} (hasta {peor:.0f}pt): una caja no cabe en la "
            f"página y monta el contenido sobre el pie (revisa {log.name})"
        )
    if hbox:
        avisos.append(f"Overfull \\hbox ×{len(hbox)} (hasta {max(hbox):.1f}pt de más)")

    limpiar_auxiliares(out_tex)
    return True, f"{pdf.name} ({pdf.stat().st_size:,} bytes)"


# ─────────────────────────────────────────────────────────────────────────────
# Texto plano para los metadatos del PDF
# ─────────────────────────────────────────────────────────────────────────────

_RE_CMD_CON_ARG = re.compile(
    r"\\(?:textbf|textit|emph|texttt|textsc|textsf|underline|MakeUppercase|mbox)\{([^{}]*)\}"
)
_RE_SALTO = re.compile(r"\\\\(?:\[[^\]]*\])?")
_RE_CMD = re.compile(r"\\[A-Za-z]+\*?(?:\[[^\]]*\])?")
_ESCAPES = {"&": "\\&", "%": "\\%", "#": "\\#", "$": "\\$", "_": "\\_"}


def texto_plano(tex: str) -> str:
    """Quita el marcado LaTeX de un título y deja texto legible."""
    t = tex.replace("\n", " ")
    for _ in range(3):  # \textbf{\emph{...}} anidados
        t = _RE_CMD_CON_ARG.sub(r"\1", t)
    t = _RE_SALTO.sub(" ", t)
    t = (t.replace("\\&", "&").replace("\\%", "%").replace("\\#", "#")
          .replace("\\$", "$").replace("\\_", "_").replace("~", " ")
          .replace("``", "\u201c").replace("''", "\u201d").replace("---", "\u2014")
          .replace("--", "\u2013"))
    t = _RE_CMD.sub("", t)
    t = t.replace("{", "").replace("}", "")
    return re.sub(r"\s+", " ", t).strip()


def texto_pdf(tex: str) -> str:
    """Texto plano listo para `\\hypersetup{pdftitle={...}}`.

    hyperref convierte `\\&`, `\\%`, `\\#` de vuelta al carácter al escribir el
    /Title, así que el resultado se lee limpio en el visor.
    """
    plano = texto_plano(tex)
    return "".join(_ESCAPES.get(c, c) for c in plano)
