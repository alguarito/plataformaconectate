#!/usr/bin/env python3
"""
Generador masivo de guías MILC v3.

Lee:
- scripts/generadores/template-milc-v3.tex  (plantilla maestra)
- scripts/generadores/datos-guias-{grado}.json  (datos por guía)

Produce:
- public/guias-mejoras/{N}-{G}-TIC.tex       (LaTeX final)
- (Compilación a PDF requiere xelatex en el sistema)
- (Render-validation requiere ghostscript + PIL)

Uso:
    python3 scripts/generadores/build-guia-milc.py 8 1     # genera G8·S1
    python3 scripts/generadores/build-guia-milc.py 8 all   # genera G8·S1-S30
"""
from __future__ import annotations
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / 'scripts/generadores'
PUBLIC = ROOT / 'public/guias-mejoras'
PUBLIC.mkdir(parents=True, exist_ok=True)

TEMPLATE_PATH = SCRIPTS / 'template-milc-v3.tex'

# Colores HEX por periodo (sin #)
COLORES_PERIODO = {
    1: {'primary': 'ED7446', 'dark': 'B63E16', 'soft': 'FFF0E8'},  # naranja P1
    2: {'primary': '0093A5', 'dark': '00525C', 'soft': 'E0F3F5'},  # turquesa P2
    3: {'primary': 'B63E16', 'dark': '5A1F0B', 'soft': 'F8DDD1'},  # ocre P3
}

PERIODO_NOMBRES = {1: 'Periodo Primero', 2: 'Periodo Segundo', 3: 'Periodo Tercero'}


def render_template(template: str, datos: dict) -> str:
    """Reemplaza placeholders KEY con valores del dict.

    Verifica al final que no queden placeholders sin reemplazar.
    """
    out = template
    for key, value in datos.items():
        # placeholder triple-corchete
        placeholder = '<<<' + key + '>>>'
        out = out.replace(placeholder, str(value))
    # detectar placeholders sin reemplazar
    sobrantes = re.findall(r'<<<[A-Z_0-9]+>>>', out)
    if sobrantes:
        raise ValueError(f'Placeholders sin reemplazar: {set(sobrantes)}')
    return out


def construir_datos_completos(guia: dict, grado: int) -> dict:
    """Mezcla los datos específicos de la guía con valores derivados."""
    periodo = guia['periodo']
    sesion_local = guia['sesion_local']
    colores = COLORES_PERIODO[periodo]

    datos = {
        'GRADO': grado,
        'GUIA_NUMERO': guia['sesion_global'],
        'TITULO_GUIA': guia['titulo'],
        'PERIODO_NOMBRE': PERIODO_NOMBRES[periodo],
        'COLOR_PORTADA_PRIMARY': colores['primary'],
        'COLOR_PORTADA_DARK': colores['dark'],
        'COLOR_PORTADA_SOFT': colores['soft'],
    }
    # Mezclar el resto de claves desde la guía
    datos.update(guia.get('contenido', {}))
    return datos


def generar_guia(grado: int, sesion_global: int, datos_grado: list[dict]) -> Path:
    """Genera el .tex de UNA guía."""
    template = TEMPLATE_PATH.read_text(encoding='utf-8')
    guia = next((g for g in datos_grado if g['sesion_global'] == sesion_global), None)
    if guia is None:
        raise ValueError(f'No hay datos para G{grado}·S{sesion_global}')
    datos = construir_datos_completos(guia, grado)
    tex = render_template(template, datos)
    out_path = PUBLIC / f'{sesion_global}-{grado}-TIC.tex'
    out_path.write_text(tex, encoding='utf-8')
    return out_path


def compilar_pdf(tex_path: Path) -> Path:
    """Compila .tex a PDF con xelatex.

    Compila 2 veces: el tikzpicture con remember picture,overlay (la
    portada de las guías MILC) requiere 2 pasadas para resolver las
    posiciones absolutas de página. Sin la 2ª pasada, la portada queda
    casi vacía.
    """
    workdir = tex_path.parent
    cmd = [
        'xelatex',
        '-interaction=nonstopmode',
        '-halt-on-error',
        '-output-directory', str(workdir),
        str(tex_path),
    ]
    for pasada in (1, 2):
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=workdir)
        if result.returncode != 0:
            log_path = tex_path.with_suffix('.log')
            if log_path.exists():
                log = log_path.read_text(errors='replace')
                print(f'⚠️ Compilación pasada {pasada} falló: {tex_path.name}')
                print(log[-2000:])
            raise RuntimeError(f'xelatex falló (pasada {pasada}) para {tex_path.name}')
    pdf_path = tex_path.with_suffix('.pdf')
    return pdf_path


def render_validation(pdf_path: Path) -> dict:
    """Mide bandas blancas por página. Devuelve resumen."""
    try:
        from PIL import Image
    except ImportError:
        print('⚠️ PIL no disponible, render-validation omitida')
        return {'pages': '?', 'max_blank_cm': '?'}
    workdir = pdf_path.parent
    pngs_dir = workdir / f'.tmp_pngs_{pdf_path.stem}'
    pngs_dir.mkdir(exist_ok=True)
    # gs convierte a PNGs
    cmd = [
        'gs', '-q', '-dNOPAUSE', '-dBATCH', '-sDEVICE=png16m', '-r80',
        f'-sOutputFile={pngs_dir}/p%02d.png', str(pdf_path),
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    pages = sorted(pngs_dir.glob('p*.png'))
    max_blank_cm = 0.0
    problemas = []
    for i, png in enumerate(pages, 1):
        img = Image.open(png).convert('L')
        w, h = img.size
        pixels = img.load()
        rows = [sum(1 for x in range(w) if pixels[x, y] > 240) / w for y in range(h)]
        bands = []
        band_start = None
        for y, wp in enumerate(rows):
            if wp > 0.985:
                if band_start is None:
                    band_start = y
            else:
                if band_start is not None and y - band_start > 80:
                    bands.append((band_start, y, y - band_start))
                band_start = None
        if band_start is not None and h - band_start > 80:
            bands.append((band_start, h, h - band_start))
        for s, e, l in bands:
            cm = l * 0.0317
            posicion = 'ARRIBA' if s < h * 0.3 else ('MEDIO' if s < h * 0.7 else 'ABAJO')
            if cm > max_blank_cm:
                max_blank_cm = cm
            # Solo reportar si está arriba/medio (huecos de verdad), no abajo
            if cm > 5.0 and posicion != 'ABAJO':
                problemas.append(f'P{i} {posicion} {cm:.1f}cm')
    # Limpiar PNGs temporales
    for p in pngs_dir.glob('*.png'):
        p.unlink()
    pngs_dir.rmdir()
    return {
        'pages': len(pages),
        'max_blank_cm': round(max_blank_cm, 1),
        'problemas': problemas,
    }


def main():
    if len(sys.argv) < 3:
        print('Uso: build-guia-milc.py <grado> <sesion_global|all>')
        sys.exit(1)
    grado = int(sys.argv[1])
    target = sys.argv[2]

    datos_path = SCRIPTS / f'datos-guias-g{grado}.json'
    if not datos_path.exists():
        print(f'❌ No existe {datos_path}')
        sys.exit(1)
    datos_grado = json.loads(datos_path.read_text(encoding='utf-8'))

    if target == 'all':
        sesiones = [g['sesion_global'] for g in datos_grado]
    else:
        sesiones = [int(target)]

    resultados = []
    for s in sesiones:
        try:
            tex_path = generar_guia(grado, s, datos_grado)
            pdf_path = compilar_pdf(tex_path)
            stats = render_validation(pdf_path)
            estado = '✅' if not stats['problemas'] else '⚠️'
            resultados.append({
                's': s, 'estado': estado, 'pages': stats['pages'],
                'max_blank': stats['max_blank_cm'], 'problemas': stats['problemas'],
            })
            print(f'{estado} G{grado}·S{s:02} · {stats["pages"]}p · max blanco {stats["max_blank_cm"]}cm · {stats["problemas"] or "OK"}')
        except Exception as e:
            print(f'❌ G{grado}·S{s:02} FALLA: {e}')
            resultados.append({'s': s, 'estado': '❌', 'error': str(e)})

    # Resumen
    print('\n' + '=' * 60)
    ok = sum(1 for r in resultados if r.get('estado') == '✅')
    warn = sum(1 for r in resultados if r.get('estado') == '⚠️')
    err = sum(1 for r in resultados if r.get('estado') == '❌')
    print(f'Total: {len(resultados)} | OK: {ok} | Warn: {warn} | Error: {err}')


if __name__ == '__main__':
    main()
