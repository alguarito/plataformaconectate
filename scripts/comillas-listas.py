#!/usr/bin/env python3
"""Entrecomilla los ítems de lista que YAML leyó como diccionario.

Un «- Algo: algo» sin comillas se convierte en un diccionario de una clave y el
generador lo emite vacío. Esto localiza la línea cruda y la reescribe con
comillas, sin tocar nada más del archivo.
"""
import re
import sys

import yaml


def rotos(x, ruta=""):
    LISTAS = ("checks", "pilares", "criterios", "opciones", "pasos", "iconos")
    if isinstance(x, dict):
        for k, v in x.items():
            yield from rotos(v, f"{ruta}.{k}" if ruta else str(k))
    elif isinstance(x, list):
        nombre = ruta.split(".")[-1].split("[")[0]
        for i, v in enumerate(x):
            if nombre in LISTAS and isinstance(v, dict) and len(v) == 1:
                (kk, vv), = v.items()
                yield f"{kk}: {vv}"
            else:
                yield from rotos(v, f"{ruta}[{i}]")


for ruta in sys.argv[1:]:
    texto = open(ruta).read()
    n = 0
    for esperado in rotos(yaml.safe_load(texto)):
        # La línea cruda es «- <esperado>» con cualquier sangría, sin comillas.
        # [ \t]*$ y no \s*$: \s se come el salto de línea final del archivo.
        patron = re.compile(r"^([ \t]*- )" + re.escape(esperado) + r"[ \t]*$", re.M)
        nuevo, hechos = patron.subn(
            lambda m: m.group(1) + '"' + esperado.replace('"', '\\"') + '"', texto
        )
        if hechos:
            texto, n = nuevo, n + hechos
        else:
            print(f"  ! {ruta}: no encontré la línea cruda de «{esperado[:50]}…»")
    if n:
        open(ruta, "w").write(texto)
        print(f"  {ruta}: {n} ítem(s) entrecomillados")
