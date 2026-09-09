#!/usr/bin/env python3
"""Verifica que cada cita del banco aparezca literalmente en su fuente.

El banco `content/guias/_banco-citas.yaml` declara, para cada cita, la edición
de acceso abierto de la que salió. Este script descarga esas fuentes, extrae su
texto y comprueba fragmento por fragmento que la cita esté ahí, tal cual.

Una cita puede llevar elisiones marcadas con «…». Cada tramo entre elisiones se
comprueba por separado: así una elisión no puede usarse para pegar dos trozos
que en la obra no van seguidos, que es el error fácil de cometer al citar.

Uso:
    python3 scripts/citas-verificar.py                 # descarga y verifica
    python3 scripts/citas-verificar.py --fuentes DIR   # usa PDFs ya bajados
    python3 scripts/citas-verificar.py --solo dussel   # una sola voz

Requiere `pdftotext` (poppler) y salida a internet en la primera corrida.
Devuelve 1 si alguna cita no se pudo verificar literalmente.
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
import unicodedata
import urllib.request
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
BANCO = ROOT / "content" / "guias" / "_banco-citas.yaml"

# Fuentes de acceso abierto que el banco declara en su campo `edicion`.
FUENTES = {
    "dussel": (
        "https://enriquedussel.com/txt/Textos_Libros/29.Filosofia_de_la_liberacion.pdf",
        "Dussel, Filosofía de la liberación, 5.ª ed. (PDF del autor)",
    ),
    "onlife-manifiesto": (
        "https://link.springer.com/content/pdf/10.1007/978-3-319-04093-6_2.pdf",
        "The Onlife Manifesto, cap. 2 (Springer, acceso abierto)",
    ),
    "onlife-hiperhistoria": (
        "https://link.springer.com/content/pdf/10.1007/978-3-319-04093-6_12.pdf",
        "Floridi, Hyperhistory…, cap. 12 (Springer, acceso abierto)",
    ),
    "onlife-comentario": (
        "https://link.springer.com/content/pdf/10.1007/978-3-319-04093-6_4.pdf",
        "Floridi, Commentary on the Onlife Manifesto, cap. 4 (Springer, acceso abierto)",
    ),
    "bigdata-2012": (
        "https://link.springer.com/content/pdf/10.1007/s13347-012-0093-4.pdf",
        "Floridi, Big data and their epistemological challenge (2012)",
    ),
}

# Los estoicos se cotejaron contra Wikisource, cuyo HTML no se descarga aquí.
VOCES_SIN_FUENTE_LOCAL = {"estoico"}

CONTROL = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f]")
COMILLAS = re.compile(r"[«»\"“”‘’'`´]")
# Encabezados y pies corrientes de los PDF. Importan porque caen en mitad de una
# frase y, sin quitarlos, una cita correcta parece no estar en la fuente.
TITULOS_CORRIENTES = (
    "The Onlife Initiative",
    "The Onlife Manifesto",
    "Hyperhistory and the Philosophy of Information Policies",
    "Big data and their epistemological challenge",
    r"L\. Floridi",
)
_T = "|".join(TITULOS_CORRIENTES)
ENCABEZADOS = re.compile(rf"(?m)^\s*(?:\d{{1,3}}\s+(?:{_T})|(?:{_T})\s+\d{{1,3}})\s*$")


def _normalizaciones(texto: str) -> list[str]:
    """Dos lecturas de la fuente: una une las palabras partidas por guion de fin
    de línea; la otra conserva el guion, para compuestos reales («self-restraint»).
    Una cita vale si aparece en cualquiera de las dos."""
    t = unicodedata.normalize("NFC", texto)
    t = CONTROL.sub(" ", t)          # el PDF trae \x0c y \x08 entre el texto
    t = ENCABEZADOS.sub("", t)       # encabezados corrientes partían frases
    t = COMILLAS.sub("", t)
    unido = re.sub(r"-\s*\n\s*", "", t)
    con_guion = re.sub(r"-\s*\n\s*", "-", t)
    return [re.sub(r"\s+", " ", v).lower() for v in (unido, con_guion)]


def _norm(texto: str) -> str:
    t = unicodedata.normalize("NFC", texto)
    t = CONTROL.sub(" ", t)
    return re.sub(r"\s+", " ", COMILLAS.sub("", t)).lower()


def _fuente_de(cita: dict) -> str | None:
    if cita["voz"] == "dussel":
        return "dussel"
    if cita["voz"] == "floridi":
        autor = cita["autor"]
        if "Hyperhistory" in autor:
            return "onlife-hiperhistoria"
        if "Commentary" in autor:
            return "onlife-comentario"
        if "Big data" in autor:
            return "bigdata-2012"
        return "onlife-manifiesto"
    return None


def _texto_cotejable(cita: dict) -> str:
    """Para obras en español se coteja `texto`; para las inglesas, `texto_original`."""
    campo = "texto" if cita["voz"] == "dussel" else "texto_original"
    return re.sub(r"\(trad\. propia[^)]*\)", "", cita.get(campo) or "")


def descargar(dest: Path) -> dict[str, list[str]]:
    dest.mkdir(parents=True, exist_ok=True)
    fuentes: dict[str, list[str]] = {}
    for clave, (url, etiqueta) in FUENTES.items():
        pdf, txt = dest / f"{clave}.pdf", dest / f"{clave}.txt"
        if not txt.exists():
            if not pdf.exists():
                print(f"  ▸ descargando {etiqueta}…")
                urllib.request.urlretrieve(url, pdf)
            subprocess.run(["pdftotext", "-layout", str(pdf), str(txt)], check=True)
        fuentes[clave] = _normalizaciones(txt.read_text(encoding="utf-8", errors="replace"))
    return fuentes


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--fuentes", type=Path, default=ROOT / ".cache" / "citas-fuentes",
                    help="directorio donde guardar o buscar los PDF y su texto")
    ap.add_argument("--solo", choices=["dussel", "floridi", "estoico"], help="verificar una sola voz")
    args = ap.parse_args()

    banco = yaml.safe_load(BANCO.read_text(encoding="utf-8"))
    citas = banco.get("citas") or []
    if args.solo:
        citas = [c for c in citas if c["voz"] == args.solo]

    print(f"\n  Banco de citas · {len(citas)} cita(s) a verificar\n  {'─' * 66}\n")
    fuentes = descargar(args.fuentes)

    ok = sin_fuente = 0
    fallos: list[tuple[str, list[str]]] = []
    divergentes: list[tuple[str, str]] = []
    for cita in citas:
        clave = _fuente_de(cita)
        if clave is None or cita["voz"] in VOCES_SIN_FUENTE_LOCAL:
            sin_fuente += 1
            continue
        crudo = _texto_cotejable(cita)
        if not crudo.strip():
            sin_fuente += 1
            continue
        # cada tramo entre elisiones se busca por separado
        tramos = [t.strip(" .,;:") for t in re.split("…", crudo) if len(t.strip()) > 25]
        malos = [t for t in tramos if not any(_norm(t) in f for f in fuentes[clave])]
        if not malos:
            ok += 1
        elif cita.get("divergencia_documentada"):
            # el banco declara y explica en qué se aparta del texto tal como sale
            # de la fuente (erratas de OCR, puntuación); no es un fallo, pero se
            # muestra para que la decisión siga a la vista.
            divergentes.append((cita["id"], cita["verificacion"]))
        else:
            fallos.append((cita["id"], malos))

    for cid, malos in fallos:
        print(f"  ✗ {cid}")
        for m in malos:
            print(f"      no aparece literalmente: «{m[:88]}…»")
    for cid, nota in divergentes:
        print(f"  ~ {cid} · divergencia documentada")
        print(f"      {nota[:150]}…")

    print(f"\n  Resumen: {ok} verificadas · {len(divergentes)} con divergencia documentada · "
          f"{len(fallos)} sin verificar · {sin_fuente} sin fuente local (estoicos: Wikisource)\n")
    return 1 if fallos else 0


if __name__ == "__main__":
    raise SystemExit(main())
