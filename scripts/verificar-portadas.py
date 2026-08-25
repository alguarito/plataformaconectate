#!/usr/bin/env python3
"""Verifica geometricamente la portada de cada PDF del catalogo.

Revisar portadas a ojo no basta: dos defectos reales pasaron varias rondas de
inspeccion visual porque solo se manifestaban en casos concretos —el titulo
montado sobre el numeral, que solo ocurria en los grados de DOS digitos, y las
lineas del titulo encimadas, que solo ocurria cuando la linea previa no tenia
descendentes—. Este script mide las cajas de texto de la pagina 1 y avisa de
solapes y desbordes de margen, en todo el catalogo de una pasada.

Uso:
    python3 scripts/verificar-portadas.py 'public/guias-mejoras/*.pdf'
    python3 scripts/verificar-portadas.py 'public/examenes-mejoras/*.pdf'

Requiere `pdftotext` (poppler). Devuelve codigo 1 si encuentra problemas.
"""

import glob, re, subprocess, sys
# Comprueba la PORTADA de cada PDF: que ninguna palabra se salga del margen
# derecho y que no haya cajas de texto solapadas (que es como se manifestaba
# el titulo montado sobre el numeral en 10.º y 11.º).
def cajas(path):
    out = subprocess.run(['pdftotext','-f','1','-l','1','-bbox',path,'-'],
                         capture_output=True, text=True).stdout
    return [tuple(float(x) for x in m) for m in
            re.findall(r'xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)"', out)]

def solapan(a, b):
    ix = min(a[2], b[2]) - max(a[0], b[0])
    iy = min(a[3], b[3]) - max(a[1], b[1])
    if ix <= 0 or iy <= 0: return 0.0
    menor = min((a[2]-a[0])*(a[3]-a[1]), (b[2]-b[0])*(b[3]-b[1]))
    return (ix*iy)/menor if menor else 0.0

ANCHO, MARGEN = 612.0, 40.0
malos = 0
for f in sorted(glob.glob(sys.argv[1])):
    cs = cajas(f)
    fuera = [c for c in cs if c[2] > ANCHO - MARGEN + 1]
    sol = []
    for i in range(len(cs)):
        for j in range(i+1, len(cs)):
            if solapan(cs[i], cs[j]) > 0.35: sol.append((cs[i], cs[j]))
    if fuera or sol:
        malos += 1
        print('%-46s fuera=%d solapes=%d' % (f.split('/')[-1], len(fuera), len(sol)))
print('revisadas %d · con problemas: %d' % (len(glob.glob(sys.argv[1])), malos))
sys.exit(1 if malos else 0)
