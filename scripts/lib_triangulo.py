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
    # El Onlife Manifesto es colectivo y lo editó Floridi: en los rótulos se
    # nombra a los dos, para que el estudiante sepa de quién es la lente.
    if nombre.strip().startswith("The Onlife Initiative"):
        return "Luciano Floridi y la Onlife Initiative"
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


# ─── Contrato v3.1 · modo del triángulo por grado ─────────────────────────────
#
# La skill pedagógica calibra el cierre filosófico por edad: en 6.º y 7.º son
# tres preguntas cotidianas sin nombrar autores; en 8.º aparecen los nombres con
# una idea breve, sin cita textual; de 9.º a 11.º van citas textuales completas
# con referencia. El YAML lo declara en `triangulo.modo`; si no lo declara, se
# conserva el modo `citas` (el comportamiento de siempre).

MODOS = ("preguntas", "ideas", "citas")

MODO_POR_GRADO = {6: "preguntas", 7: "preguntas", 8: "ideas",
                  9: "citas", 10: "citas", 11: "citas"}

# Rótulos de cada voz cuando NO se nombra al autor (modo preguntas).
LENTES_SIN_NOMBRE = {
    "dussel": "Mirar a los demás",
    "estoico": "Mirar hacia adentro",
    "floridi": "Mirar la información",
}
LENTES = {
    "dussel": "lente del nosotros",
    "estoico": "cuidado interior",
    "floridi": "lente de la infoesfera",
}
TITULOS = {
    "preguntas": "Tres preguntas para cerrar",
    "ideas": "Tres ideas para cerrar · Dussel, un estoico y Floridi",
    "citas": "Triángulo de pensamiento · cierre filosófico",
}


def modo_de(triangulo: dict, grado: int | None = None) -> str:
    """Modo declarado en el YAML; si no hay, `citas` (compatibilidad)."""
    m = ((triangulo or {}).get("modo") or "").strip().lower()
    if m in MODOS:
        return m
    return "citas"


def modo_esperado(grado: int | None) -> str | None:
    return MODO_POR_GRADO.get(int(grado)) if grado is not None else None


def rotulo_voz(voz: dict, clave: str, modo: str) -> str:
    """Título de la caja de cada voz según el modo."""
    voz = voz or {}
    if modo == "preguntas":
        return LENTES_SIN_NOMBRE[clave]
    nombre = nombre_limpio(voz.get("autor", ""))
    if clave == "estoico":
        # En modo citas el rótulo conserva el autor completo (obra y año), como
        # siempre se imprimió; en modo ideas solo el nombre.
        quien = (voz.get("autor", "") or "").strip() if modo == "citas" else nombre
        return f"Estoicismo · {quien} · {LENTES[clave]}"
    apellido = {"dussel": "Dussel", "floridi": "Floridi"}[clave]
    return f"{apellido} · {LENTES[clave]}" if modo == "citas" else f"{nombre} · {LENTES[clave]}"


def frase_principal(voz: dict, modo: str) -> str:
    """Lo que va en el sitio de la cita: pregunta, idea o cita, según el modo."""
    voz = voz or {}
    if modo == "preguntas":
        return f"\\textbf{{{sin_comillas(voz.get('pregunta') or voz.get('cita', ''))}}}"
    if modo == "ideas":
        return sin_comillas(voz.get("idea") or voz.get("cita", ""))
    return cita_presentada(voz)


def atribucion_modo(voz: dict, modo: str) -> str:
    if modo == "preguntas":
        return ""
    if modo == "ideas":
        return (f"--- idea tomada de {nombre_limpio((voz or {}).get('autor', ''))}, "
                f"contada con palabras de esta guía. No es una cita textual.")
    return atribucion(voz)


def nota_docente_modo(triangulo: dict, modo: str) -> str:
    if modo == "preguntas":
        return (
            "\\textbf{Nota para el docente.} En 6.º y 7.º el cierre son tres preguntas "
            "cotidianas inspiradas en Dussel, en los estoicos y en Floridi, sin nombrarlos: "
            "los nombres llegan en 8.º y las citas con su obra, de 9.º en adelante."
        )
    if modo == "ideas":
        return (
            "\\textbf{Nota para el docente.} Las tres ideas están contadas con palabras de "
            "esta guía a partir del pensamiento de cada autor; no son citas textuales. "
            "De 9.º en adelante se trabajan con la obra y su referencia."
        )
    return nota_docente(triangulo)


def placeholders_triangulo(triangulo: dict, grado: int | None = None) -> dict[str, str]:
    """Todos los placeholders del bloque del triángulo, para cualquier driver."""
    tri = triangulo or {}
    modo = modo_de(tri, grado)
    out = {
        "TRIANGULO_TITULO": TITULOS[modo],
        "TRIANGULO_NOTA": nota_docente_modo(tri, modo),
        "ESTOICISMO_AUTOR": (tri.get("estoico") or {}).get("autor", "") or "",
    }
    for clave, pref in (("dussel", "DUSSEL"), ("estoico", "ESTOICISMO"), ("floridi", "FLORIDI")):
        voz = tri.get(clave) or {}
        out[f"{pref}_ROTULO"] = rotulo_voz(voz, clave, modo)
        out[f"{pref}_CITA"] = frase_principal(voz, modo)
        out[f"{pref}_ATRIBUCION"] = atribucion_modo(voz, modo)
        out[f"{pref}_APLICACION"] = voz.get("aplicacion", "") or ""
        pregunta = voz.get("pregunta_espejo", "") or ""
        out[f"{pref}_PREGUNTA"] = f"Para tu cuaderno: {pregunta}" if modo == "preguntas" and pregunta else pregunta
    return out
