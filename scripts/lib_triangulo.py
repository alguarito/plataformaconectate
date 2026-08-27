"""Presentación honesta del triángulo de pensamiento.

Los cuatro motores de guías (grados, semillero, Bebras y Territorio Interior)
comparten el mismo contrato editorial: la guía cierra con tres voces ---Dussel,
un estoico y Floridi---. Ese contrato es fuerte, y por eso es fácil que aparezca
una frase escrita para la ocasión con el nombre de un autor encima.

Al hacer el inventario del corpus quedó claro el tamaño: **592 de 628
formulaciones no se pueden rastrear hasta ninguna obra**, y varias son
imposibles ---Marco Aurelio hablando de inteligencia artificial, Epicteto de
«tus datos»---. Ponerle a una persona real palabras que no dijo no es un recurso
pedagógico: es una atribución falsa. Y Floridi está vivo.

La salida no fue reescribir 592 frases, sino **dejar de presentarlas como
palabras del autor**. Este módulo decide, mirando el campo `autor`, cuál de las
dos cosas es cada formulación:

  · Si el autor nombra una obra y un año ---«Enrique Dussel · Filosofía de la
    liberación (1977)»---, la frase es una **cita textual** y se presenta como
    tal, entre comillas y con su referencia debajo.
  · Si no ---«Luciano Floridi» a secas, o «(filósofo italiano del documento
    digital)»---, la frase es una **formulación de la guía** y se presenta así,
    en voz propia: «al modo de Floridi», sin comillas y sin fingir cita.

La consecuencia útil es que el arreglo es automático: el día en que alguien le
ponga la obra a una formulación, la guía la empieza a presentar como cita, sin
tocar plantilla ni motor. Y `scripts/guias-lint.py` marca las que siguen sin
rastro, con la misma regla que se usa aquí.
"""
from __future__ import annotations

import re

# Una cita textual necesita de dónde salió. Basta con que el campo `autor`
# nombre una obra con año: "(1977)", "(c. 64 d.C.)", "(2014; trad.)".
_TIENE_OBRA = re.compile(r"\(.*\d{2,4}.*\)")

# Descriptores inventados a la medida de cada guía: "Luciano Floridi (filósofo
# italiano del documento digital)". No aportan nada verificable y sugieren una
# autoridad que no existe, así que no se imprimen.
_DESCRIPTOR_INVENTADO = re.compile(r"\s*\((?![^)]*\d)[^)]*\)")


def tiene_obra(autor: str) -> bool:
    """¿El campo `autor` permite rastrear la cita hasta una obra concreta?"""
    return bool(_TIENE_OBRA.search(autor or ""))


def nombre_limpio(autor: str) -> str:
    """El nombre del pensador, sin obra y sin descriptores inventados.

    «Enrique Dussel · Filosofía de la liberación (1977)» → «Enrique Dussel»
    «Luciano Floridi (filósofo italiano del trabajo digital)» → «Luciano Floridi»
    """
    nombre = (autor or "").split("·")[0]
    nombre = _DESCRIPTOR_INVENTADO.sub("", nombre)
    return nombre.strip(" ,;·") or "el autor"


def sin_comillas(texto: str) -> str:
    """Quita el par de comillas que rodea la frase en los datos.

    Los YAML guardan muchas formulaciones ya entrecomilladas, así que aunque la
    plantilla no añada su propio par, se imprimían como cita textual. Aquí se
    normaliza al emitir el .tex; el YAML queda intacto.
    """
    t = (texto or "").strip()
    for ini, fin in (("``", "''"), ("“", "”"), ('"', '"'), ("«", "»")):
        if t.startswith(ini) and t.endswith(fin):
            t = t[len(ini):-len(fin)].strip()
    return t


def cita_presentada(voz: dict) -> str:
    """La frase como debe leerse: entrecomillada solo si es textual."""
    texto = sin_comillas((voz or {}).get("cita", ""))
    if tiene_obra((voz or {}).get("autor", "")):
        return f"«{texto}»"
    return texto


def atribucion(voz: dict) -> str:
    """La línea de crédito que va debajo de la frase, en letra pequeña.

    Es el corazón del arreglo: dice, en el punto exacto donde se lee, si lo que
    se acaba de leer son palabras del pensador o de la guía.
    """
    autor = (voz or {}).get("autor", "") or ""
    if tiene_obra(autor):
        return f"--- {autor}"
    return (
        f"--- formulación de esta guía, al modo de {nombre_limpio(autor)}. "
        f"No es una cita textual."
    )


def nota_docente(triangulo: dict) -> str:
    """Nota final del bloque, ajustada a lo que de verdad hay en esta guía."""
    voces = [(triangulo or {}).get(k) or {} for k in ("dussel", "estoico", "floridi")]
    textuales = sum(1 for v in voces if tiene_obra(v.get("autor", "")))

    if textuales == 3:
        return (
            "\\textbf{Nota para el docente.} Las tres son citas textuales y llevan su "
            "referencia debajo. Puedes remitir a la obra en clase."
        )
    if textuales == 0:
        return (
            "\\textbf{Nota para el docente.} Las tres formulaciones son del autor de la "
            "guía, no citas textuales de los pensadores: recogen su lente para pensar el "
            "tema, no sus palabras. Si vas a citarlos en clase, remite a la obra original."
        )
    return (
        "\\textbf{Nota para el docente.} En este cierre conviven citas textuales ---con su "
        "referencia debajo--- y formulaciones del autor de la guía, señaladas como tales. "
        "Solo las primeras se pueden citar como palabras del pensador."
    )
