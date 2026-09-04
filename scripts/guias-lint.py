#!/usr/bin/env python3
"""
Linter del contrato editorial MILC v3 para las guías YAML.

Verifica que cada guía cumpla:
- Campos obligatorios presentes
- Verbos cognitivos válidos (solo los 6 permitidos)
- Balance Bloom (al menos 3 niveles distintos entre las 3 actividades nombradas)
- Triángulo bien estructurado (Dussel + estoico + Floridi con citas no vacías)
- Regla de 200 palabras (ningún campo de texto excede 200 palabras)
- Saber ancestral con origen nombrado (Wayuu, Quimbaya, Pacífico, etc.)
- Caracteres especiales LaTeX escapados (`#`, `&`, `%` sin `\\` previo)

Contrato v3.1 (opt-in: se activa cuando el YAML declara `duracion_min`; para
las guías anteriores las reglas nuevas solo avisan):
- `apertura.fuente` con referencia APA 7 (año entre paréntesis, sin marcadores pendientes)
- Un solo verbo por actividad (nada de «CREA + EVALÚA»)
- Tiempo y modalidad «(N min · modalidad)» en las tres actividades; la suma no supera `duracion_min`
- «Extensión:» en los tres cuadernos; exactamente 3 checks en Escucha
- Quiz con la respuesta correcta repartida (máx. 40 % en una posición) y sin ser siempre la más larga
- Si hay `web.actividades` / `web.mapa_ruta`, coinciden con la prosa (verbo, tiempo, modalidad, título del cuaderno)

Uso:
    python3 scripts/guias-lint.py            # todas las guías completas
    python3 scripts/guias-lint.py 1-2        # solo una
    python3 scripts/guias-lint.py --grado 6  # otro grado
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent


# ─── Configuración del contrato ──────────────────────────────────────────────

VERBOS_VALIDOS = {"IDENTIFICA", "EXPLICA", "APLICA", "ANALIZA", "EVALÚA", "CREA"}

# Mapeo verbo → nivel Bloom (1-6)
BLOOM = {
    "IDENTIFICA": 1, "EXPLICA": 2, "APLICA": 3,
    "ANALIZA": 4, "EVALÚA": 5, "CREA": 6,
}

# Anclajes ancestrales aceptables (al menos uno debe aparecer en saber_ancestral)
ANCLAJES_LOCALES = [
    "Wayuu", "Quimbaya", "Pacífico", "Pacifico", "Valle", "Cartago",
    "Pijao", "Muisca", "Calima", "Guna", "guna",
    "campesino", "campesina", "afro", "Afro",
    "indígena", "indigena", "ancestral", "abuela", "abuelo",
    "oficio", "tradición", "tradicion", "minga", "convite",
    "tejido", "telar", "cosecha", "pregonero",
]

# Caracteres especiales LaTeX que deben escaparse cuando aparecen literales
LATEX_ESPECIALES = ["#", "&", "%", "_", "$", "~", "^"]

# Campos de texto largo (>= 200 palabras dispara warning)
CAMPOS_TEXTO_LARGO = [
    ("apertura.saber_ancestral", lambda d: d["apertura"]["saber_ancestral"]),
    ("apertura.saber_contemporaneo", lambda d: d["apertura"]["saber_contemporaneo"]),
    ("apertura.saber_hacer", lambda d: d["apertura"]["saber_hacer"]),
    ("escuta.escena", lambda d: d["escuta"]["escena"]),
    ("escuta.cuaderno", lambda d: d["escuta"]["cuaderno"]),
    ("sistematizacion.intro", lambda d: d["sistematizacion"]["intro"]),
    ("sistematizacion.errores_comunes", lambda d: d["sistematizacion"]["errores_comunes"]),
    ("sistematizacion.cuaderno", lambda d: d["sistematizacion"]["cuaderno"]),
    ("praxis.intro", lambda d: d["praxis"]["intro"]),
    ("praxis.cuaderno", lambda d: d["praxis"]["cuaderno"]),
    ("compromiso", lambda d: d["compromiso"]),
]

# Campos requeridos en la estructura
REQUIRED_PATHS = [
    "clave", "grado", "periodo", "sesion", "completo",
    "titulo", "producto_final",
    "apertura.saber_ancestral", "apertura.saber_contemporaneo",
    "apertura.pregunta_puente", "apertura.saber_hacer",
    "puentes.a_ruta", "puentes.a_escuta", "puentes.a_sistematizacion",
    "puentes.a_praxis", "puentes.a_producto", "puentes.a_evaluacion",
    "puentes.a_triangulo",
    "escuta.escena", "escuta.checks", "escuta.cuaderno",
    "sistematizacion.intro", "sistematizacion.pilares",
    "sistematizacion.anatomia.titulo", "sistematizacion.anatomia.body",
    "sistematizacion.errores_comunes", "sistematizacion.cuaderno",
    "praxis.intro", "praxis.pilares", "praxis.checklist.titulo",
    "praxis.checklist.items", "praxis.plantilla_guion", "praxis.cuaderno",
    "praxis.producto_titulo", "praxis.criterios",
    "triangulo.dussel.autor", "triangulo.dussel.cita",
    "triangulo.dussel.aplicacion", "triangulo.dussel.pregunta_espejo",
    "triangulo.estoico.autor", "triangulo.estoico.cita",
    "triangulo.estoico.aplicacion", "triangulo.estoico.pregunta_espejo",
    "triangulo.floridi.autor", "triangulo.floridi.cita",
    "triangulo.floridi.aplicacion", "triangulo.floridi.pregunta_espejo",
    "compromiso",
]

# Colors (ANSI)
RESET = "\033[0m"
RED = "\033[31m"
YELLOW = "\033[33m"
GREEN = "\033[32m"
DIM = "\033[2m"
BOLD = "\033[1m"


# ─── Validadores ─────────────────────────────────────────────────────────────

def _get(obj, path: str):
    parts = path.split(".")
    cur = obj
    for part in parts:
        if isinstance(cur, dict) and part in cur:
            cur = cur[part]
        else:
            return None
    return cur


def lint_required_fields(g: dict) -> list[str]:
    """Devuelve lista de errores: campos faltantes."""
    errors = []
    for path in REQUIRED_PATHS:
        v = _get(g, path)
        if v is None or v == "" or v == []:
            errors.append(f"falta o vacío: {path}")
    return errors


def lint_verbos(g: dict) -> tuple[list[str], list[str], list[str]]:
    """Extrae verbos de escuta/sist/praxis y valida.

    Cada fase puede tener el verbo en `intro` (Praxis, Escucha) o en
    `cuaderno`/infoband (Sistematización). Buscamos en varios campos.

    Devuelve (verbos_encontrados, errores, warnings).
    """
    # Para cada actividad/fase, busca en una lista de campos hasta encontrar uno con el patrón.
    fases = [
        ("Actividad 1 (Escucha)", ["escuta.escena", "escuta.cuaderno"]),
        ("Actividad 2 (Sist)",  ["sistematizacion.intro", "sistematizacion.cuaderno"]),
        ("Actividad 3 (Praxis)", ["praxis.intro", "praxis.cuaderno"]),
    ]
    verbos = []
    errors = []
    pattern = re.compile(r"Actividad\s+\d+\s*·\s*([A-ZÁÉÍÓÚ]+)")
    for nombre_fase, paths in fases:
        verbo_encontrado = None
        for path in paths:
            text = _get(g, path) or ""
            m = pattern.search(text)
            if m:
                verbo_encontrado = (path, m.group(1))
                break
        if verbo_encontrado is None:
            errors.append(
                f"no encontré verbo para {nombre_fase} en ninguno de {paths} "
                "(patrón esperado: 'Actividad N · VERBO ...')"
            )
            continue
        path, verbo = verbo_encontrado
        if verbo not in VERBOS_VALIDOS:
            errors.append(
                f"verbo inválido '{verbo}' en {path}. "
                f"Solo permitidos: {sorted(VERBOS_VALIDOS)}"
            )
        else:
            verbos.append(verbo)

    warnings = []
    if len(verbos) >= 2:
        niveles = {BLOOM[v] for v in verbos}
        if len(niveles) < 2:
            warnings.append(
                f"balance Bloom pobre: las 3 actividades usan el mismo nivel ({verbos}). "
                "Idealmente al menos 3 niveles distintos."
            )
        elif len(niveles) < 3 and len(verbos) >= 3:
            warnings.append(
                f"balance Bloom flojo: solo {len(niveles)} niveles distintos en 3 actividades ({verbos})."
            )

    return verbos, errors, warnings


def lint_saber_ancestral(g: dict) -> list[str]:
    """Verifica que el saber ancestral nombre un origen concreto."""
    text = _get(g, "apertura.saber_ancestral") or ""
    if not any(anchor.lower() in text.lower() for anchor in ANCLAJES_LOCALES):
        return [
            "saber_ancestral no nombra un origen concreto (Wayuu, Quimbaya, Pacífico, "
            "Valle, campesino, oficio, etc.). Genérico tipo 'los pueblos antiguos' no vale."
        ]
    return []


def lint_triangulo(g: dict) -> list[str]:
    """Valida el triángulo: 3 voces con citas y autores correctos."""
    errors = []
    tri = g.get("triangulo", {})

    # Dussel
    if "Dussel" not in (tri.get("dussel", {}).get("autor") or ""):
        errors.append("triangulo.dussel.autor debe contener 'Dussel'")

    # Estoico: debe ser Marco Aurelio, Epicteto, o Séneca
    estoicos_validos = {"Marco Aurelio", "Epicteto", "Séneca", "Seneca"}
    autor_est = tri.get("estoico", {}).get("autor") or ""
    if not any(e in autor_est for e in estoicos_validos):
        errors.append(
            f"triangulo.estoico.autor debe ser Marco Aurelio | Epicteto | Séneca. "
            f"Encontrado: '{autor_est}'"
        )

    # Floridi
    if "Floridi" not in (tri.get("floridi", {}).get("autor") or ""):
        errors.append("triangulo.floridi.autor debe contener 'Floridi'")

    # Citas no vacías
    for nombre in ("dussel", "estoico", "floridi"):
        cita = tri.get(nombre, {}).get("cita") or ""
        if len(cita.strip()) < 20:
            errors.append(f"triangulo.{nombre}.cita es muy corta o vacía: '{cita[:30]}...'")

    return errors


# Autores antiguos: nada de lo que dijeron pudo hablar de tecnologia moderna.
_ESTOICOS_ANTIGUOS = ("Marco Aurelio", "Séneca", "Seneca", "Epicteto")

# Vocabulario imposible en su epoca. Si aparece dentro de unas comillas
# atribuidas a ellos, la cita no puede ser textual.
_ANACRONISMOS = re.compile(
    r"\b(IA|inteligencia artificial|digital(es)?|algoritm[oa]s?|internet|datos|software|"
    r"pantallas?|computador(es|a)?|robots?|c[óo]digo|chat|redes? social(es)?|siglo XXI|apps?|"
    r"correo electr[óo]nico|videojuegos?|plataformas?|hardware|wifi|nube|smartphones?|celulares?)\b",
    re.IGNORECASE,
)

# Una cita textual necesita de dónde salió. En el banco verificado del semillero
# la obra va entre paréntesis: "Enrique Dussel · Filosofía de la liberación (1977)".
_TIENE_OBRA = re.compile(r"\(.*\d{2,4}.*\)")  # "(1977)", "(c. 64 d.C.)", "(2014; trad.)"


def lint_citas_trazables(g: dict) -> list[str]:
    """Warnings por citas del triángulo que no se pueden rastrear hasta una obra.

    El contrato obliga a que el triángulo cierre con Dussel, un estoico y Floridi.
    Eso hace muy fácil que aparezca una frase *escrita para la ocasión* con el
    nombre de un autor encima --- y una frase inventada en boca de una persona
    real es una atribución falsa, no un recurso pedagógico. Dos señales:

      1. El campo `autor` no nombra ninguna obra ni año, así que la cita no se
         puede verificar. Ver el banco verificado en content/guias/semillero/.
      2. La cita se atribuye a un estoico antiguo y contiene vocabulario que no
         existía en su época. Ahí no hay duda posible.

    Son warnings, no errores: hoy los incumplen casi todas las guías de grado, y
    convertirlos en error dejaría el pipeline inutilizable de un día para otro.
    Con `--strict` fallan, que es como se cierra la deuda cuando se decida.
    """
    warnings = []
    tri = g.get("triangulo") or {}

    for nombre in ("dussel", "estoico", "floridi"):
        voz = tri.get(nombre) or {}
        cita = (voz.get("cita") or "").strip()
        autor = (voz.get("autor") or "").strip()
        if not cita:
            continue

        if not _TIENE_OBRA.search(autor):
            warnings.append(
                f"triangulo.{nombre}: la cita no se puede rastrear --- "
                f"'{autor}' no nombra obra ni año. Si es textual, cita la obra; "
                f"si es una formulación propia, no la pongas en boca del autor."
            )

        if any(e in autor for e in _ESTOICOS_ANTIGUOS):
            hallado = _ANACRONISMOS.search(cita)
            if hallado:
                warnings.append(
                    f"triangulo.{nombre}: atribuida a {autor} pero dice "
                    f"'{hallado.group(0)}' --- imposible en su época, no es textual."
                )

    return warnings


def lint_200_palabras(g: dict) -> list[str]:
    """Warnings por campos de texto que exceden 200 palabras."""
    warnings = []
    for path, getter in CAMPOS_TEXTO_LARGO:
        try:
            text = getter(g) or ""
        except (KeyError, TypeError):
            continue
        words = len(text.split())
        if words > 200:
            warnings.append(f"{path}: {words} palabras (límite 200). Considera partir el bloque.")
    return warnings


def lint_latex_escapes(g: dict) -> list[str]:
    """Errores por caracteres especiales LaTeX sin escapar."""
    errors = []
    # Solo revisamos los campos de texto continuo (no listas, no metadata)
    campos = [
        f"apertura.{k}" for k in ("saber_ancestral", "saber_contemporaneo", "pregunta_puente", "saber_hacer")
    ] + [
        f"puentes.{k}" for k in ("a_ruta", "a_escuta", "a_sistematizacion", "a_praxis", "a_producto", "a_evaluacion", "a_triangulo")
    ] + [
        "escuta.escena", "escuta.cuaderno",
        "sistematizacion.intro", "sistematizacion.errores_comunes", "sistematizacion.cuaderno",
        "sistematizacion.anatomia.body",
        "praxis.intro", "praxis.cuaderno", "praxis.plantilla_guion",
        "praxis.checklist.items",
        "triangulo.dussel.aplicacion", "triangulo.estoico.aplicacion", "triangulo.floridi.aplicacion",
        "compromiso", "apertura.fuente",
    ]
    for path in campos:
        text = _get(g, path)
        if not text:
            continue
        # Detecta # & % sin \ previo. Excluye URLs y patrones #N
        for char in ("#", "&", "%"):
            # `(?<!\\)` lookahead negativo: no precedido por backslash
            pattern = rf"(?<!\\){re.escape(char)}"
            matches = re.findall(pattern, text)
            if matches:
                # Mostrar contexto del primer hallazgo
                idx = re.search(pattern, text).start()
                context = text[max(0, idx - 20):idx + 20].replace("\n", " ")
                errors.append(
                    f"{path}: carácter LaTeX '{char}' sin escapar. "
                    f"Contexto: \"...{context}...\". "
                    f"Reemplaza por '\\{char}'."
                )
                break  # un error por campo es suficiente
    return errors


def lint_assets(g: dict, grado: int) -> list[str]:
    """Verifica que los assets declarados (recursos.imagenes/diagramas) existan."""
    errors = []
    recursos = g.get("recursos") or {}
    if not recursos:
        return errors

    sg = (g["periodo"] - 1) * 10 + g["sesion"]
    assets_dir = ROOT / "public" / "guias-mejoras" / "assets" / f"{sg}-{grado}"

    for tipo in ("imagenes", "diagramas"):
        items = recursos.get(tipo) or []
        for asset in items:
            archivo = asset.get("archivo")
            if not archivo:
                errors.append(f"recursos.{tipo}: entrada sin campo 'archivo'")
                continue
            if not (assets_dir / archivo).exists():
                errors.append(
                    f"recursos.{tipo}: archivo '{archivo}' no existe en "
                    f"{assets_dir.relative_to(ROOT)}/"
                )
            if not asset.get("alt"):
                errors.append(
                    f"recursos.{tipo}.{archivo}: falta 'alt' (accesibilidad requerida)"
                )
    return errors


# ─── Contrato v3.1 (opt-in por `duracion_min`) ────────────────────────────────
#
# Estas reglas nacen de la auditoría del 2026-09-03. Hoy las incumplen casi
# todas las guías (180 sin fuente, 129 quizzes con la correcta casi siempre en
# la misma posición, 74 verbos dobles, 296 cuadernos sin «Extensión»), así que
# para una guía sin `duracion_min` solo avisan. Cuando la guía declara
# `duracion_min` está diciendo «cumplo v3.1» y pasan a ser errores.

ICONOS_MAPA = {"🌱", "📖", "✏️", "👁", "✅", "🔎", "💭"}

_RE_ACT = re.compile(r"Actividad\s+(\d+)\s*·\s*([A-ZÁÉÍÓÚ]+)(\s*\+\s*[A-ZÁÉÍÓÚ]+)?")
_RE_TIEMPO = re.compile(r"\(\s*(\d+)\s*min\s*·\s*(individual|parejas|equipo[^)]*)\)", re.IGNORECASE)
_CAMPOS_ACT = [("escuta.escena", 1), ("sistematizacion.intro", 2), ("praxis.intro", 3)]
_CUADERNOS = ["escuta.cuaderno", "sistematizacion.cuaderno", "praxis.cuaderno"]


def _es_v31(g: dict) -> bool:
    return bool(g.get("duracion_min"))


def _sev(g: dict, errors: list[str], warnings: list[str], msg: str) -> None:
    (errors if _es_v31(g) else warnings).append(msg)


def lint_fuente_apertura(g: dict) -> tuple[list[str], list[str]]:
    """El saber ancestral necesita una referencia verificable."""
    errors: list[str] = []
    warnings: list[str] = []
    fuente = (_get(g, "apertura.fuente") or "").strip()
    if not fuente:
        _sev(g, errors, warnings,
             "apertura.fuente ausente: el saber ancestral necesita una referencia (APA 7) "
             "o rotularse como relato, no como saber.")
        return errors, warnings
    if re.search(r"\[|TODO|VERIFICAR|PENDIENTE", fuente, re.IGNORECASE):
        errors.append("apertura.fuente contiene un marcador pendiente ([…], TODO, VERIFICAR): no puede llegar al PDF")
    if not re.search(r"\(\s*(c\.\s*)?\d{3,4}", fuente):
        errors.append("apertura.fuente no trae año entre paréntesis: no parece una referencia APA")
    return errors, warnings


def lint_quiz_balance(g: dict) -> tuple[list[str], list[str]]:
    """Un quiz donde la correcta siempre es la B (o la más larga) no mide nada."""
    errors: list[str] = []
    warnings: list[str] = []
    preguntas = ((_get(g, "web.quiz") or {}).get("preguntas")) or []
    if not preguntas:
        return errors, warnings
    posiciones: list[int] = []
    mas_larga = 0
    for i, q in enumerate(preguntas, start=1):
        ops = q.get("opciones") or []
        idx = q.get("respuesta_index")
        if not isinstance(idx, int) or idx < 0 or idx >= len(ops):
            errors.append(f"web.quiz pregunta {i}: respuesta_index fuera de rango")
            continue
        posiciones.append(idx)
        if ops and len(str(ops[idx])) == max(len(str(o)) for o in ops):
            mas_larga += 1
    n = len(posiciones)
    if n >= 3:
        top = max(posiciones.count(p) for p in set(posiciones))
        if top / n > 0.4:
            warnings.append(
                f"web.quiz: la correcta cae {top} de {n} veces en la misma posición (máximo 40 %); repártela"
            )
        if mas_larga / n > 0.6:
            warnings.append(
                f"web.quiz: la correcta es la opción más larga en {mas_larga} de {n}; iguala las longitudes"
            )
    return errors, warnings


def lint_verbo_unico(g: dict) -> tuple[list[str], list[str]]:
    """Cada actividad lleva exactamente uno de los 6 verbos."""
    errors: list[str] = []
    warnings: list[str] = []
    for path in [p for p, _ in _CAMPOS_ACT] + _CUADERNOS:
        text = _get(g, path) or ""
        for m in _RE_ACT.finditer(text):
            if m.group(3):
                _sev(g, errors, warnings,
                     f"{path}: 'Actividad {m.group(1)} · {m.group(2)}{m.group(3).strip()}' usa dos verbos; "
                     "el contrato pide exactamente uno")
                break
    return errors, warnings


def lint_tiempo_modalidad(g: dict) -> tuple[list[str], list[str]]:
    """Las tres actividades declaran «(N min · modalidad)» y caben en la sesión."""
    errors: list[str] = []
    warnings: list[str] = []
    dur = g.get("duracion_min")
    total = 0
    if not dur:
        warnings.append("duracion_min ausente: declara la duración de la sesión (contrato v3.1)")
    for path, n in _CAMPOS_ACT:
        text = _get(g, path) or ""
        m = _RE_TIEMPO.search(text)
        if not m:
            _sev(g, errors, warnings, f"{path}: la Actividad {n} no declara '(N min · modalidad)'")
        else:
            total += int(m.group(1))
    if dur and total > int(dur):
        errors.append(f"las actividades suman {total} min y duracion_min es {dur}")
    return errors, warnings


def lint_extension_cuaderno(g: dict) -> tuple[list[str], list[str]]:
    """Anatomía completa del cuaderno y exactamente 3 checks en Escucha."""
    errors: list[str] = []
    warnings: list[str] = []
    for path in _CUADERNOS:
        text = _get(g, path) or ""
        if "Extensión" not in text and "Extension" not in text:
            _sev(g, errors, warnings, f"{path}: falta 'Extensión:' en la anatomía del cuaderno")
    checks = _get(g, "escuta.checks") or []
    if len(checks) != 3:
        warnings.append(f"escuta.checks tiene {len(checks)} ítems; la plantilla imprime exactamente 3")
    return errors, warnings


def lint_web_estructura(g: dict) -> tuple[list[str], list[str]]:
    """`web.actividades` y `web.mapa_ruta` deben coincidir con la prosa del PDF."""
    errors: list[str] = []
    warnings: list[str] = []
    web = g.get("web") or {}
    acts = web.get("actividades") or []
    mapa = web.get("mapa_ruta") or []
    if not acts and not mapa:
        return errors, warnings
    if len(acts) != 3:
        errors.append(f"web.actividades debe tener 3 actividades (tiene {len(acts)})")
    for i, (path, n) in enumerate(_CAMPOS_ACT):
        if i >= len(acts):
            break
        a = acts[i] or {}
        text = _get(g, path) or ""
        m = _RE_ACT.search(text)
        t = _RE_TIEMPO.search(text)
        if int(a.get("numero", 0)) != n:
            errors.append(f"web.actividades[{i}].numero debe ser {n}")
        verbo = str(a.get("verbo", "")).upper()
        if verbo not in VERBOS_VALIDOS:
            errors.append(f"web.actividades[{i}].verbo inválido '{verbo}'")
        elif m and m.group(2) != verbo:
            errors.append(f"web.actividades[{i}].verbo '{verbo}' no coincide con {path} ('{m.group(2)}')")
        if t:
            if int(t.group(1)) != int(a.get("tiempo_min", -1)):
                errors.append(
                    f"web.actividades[{i}].tiempo_min ({a.get('tiempo_min')}) no coincide con {path} ({t.group(1)} min)"
                )
            mod = t.group(2).split()[0].lower()
            if mod != str(a.get("modalidad", "")).lower():
                errors.append(f"web.actividades[{i}].modalidad no coincide con {path}")
        pasos = a.get("pasos") or []
        if not 3 <= len(pasos) <= 6:
            errors.append(f"web.actividades[{i}]: entre 3 y 6 pasos (tiene {len(pasos)})")
        if len(a.get("criterios") or []) < 2:
            errors.append(f"web.actividades[{i}]: al menos 2 criterios observables")
        cu = a.get("cuaderno") or {}
        for k in ("titulo", "formato", "extension"):
            if not cu.get(k):
                errors.append(f"web.actividades[{i}].cuaderno.{k} vacío")
        titulo_cu = (cu.get("titulo") or "").strip()
        prosa_cu = _get(g, _CUADERNOS[i]) or ""
        if titulo_cu and titulo_cu not in prosa_cu:
            errors.append(f"web.actividades[{i}].cuaderno.titulo «{titulo_cu}» no aparece en {_CUADERNOS[i]}")
    for e in mapa:
        malos = [str(i) for i in (e.get("iconos") or []) if str(i) not in ICONOS_MAPA]
        if malos:
            errors.append(f"web.mapa_ruta estación {e.get('numero')}: iconos no válidos {malos}")
    if mapa and g.get("duracion_min"):
        suma = sum(int(e.get("duracion_min", 0)) for e in mapa)
        if suma != int(g["duracion_min"]):
            warnings.append(f"web.mapa_ruta suma {suma} min y duracion_min es {g['duracion_min']}")
    return errors, warnings


# ─── Reporte ─────────────────────────────────────────────────────────────────

def lint_guia(g: dict, grado: int = 11) -> tuple[list[str], list[str]]:
    """Corre todos los lints y devuelve (errores, warnings)."""
    if not g.get("completo"):
        return [], []  # outlines no se lintean

    errors: list[str] = []
    warnings: list[str] = []

    errors += lint_required_fields(g)

    # Solo seguimos si la estructura básica está OK
    if errors:
        return errors, warnings

    _, verbo_errors, verbo_warnings = lint_verbos(g)
    errors += verbo_errors
    warnings += verbo_warnings

    errors += lint_triangulo(g)
    errors += lint_latex_escapes(g)
    errors += lint_assets(g, grado)

    warnings += lint_saber_ancestral(g)
    warnings += lint_200_palabras(g)
    warnings += lint_citas_trazables(g)

    # Contrato v3.1 (error solo si la guía declara duracion_min)
    for regla in (
        lint_fuente_apertura,
        lint_quiz_balance,
        lint_verbo_unico,
        lint_tiempo_modalidad,
        lint_extension_cuaderno,
        lint_web_estructura,
    ):
        e, w = regla(g)
        errors += e
        warnings += w

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="Linter del contrato MILC v3 para guías YAML.")
    parser.add_argument("claves", nargs="*", help="Claves específicas (ej. 1-2 1-3). Vacío = todas.")
    parser.add_argument("--grado", type=int, default=11)
    parser.add_argument("--strict", action="store_true", help="Tratar warnings como errores")
    args = parser.parse_args()

    content_dir = ROOT / "content" / "guias" / str(args.grado)
    paths = sorted(
        content_dir.glob("*.yaml"),
        key=lambda p: tuple(int(x) for x in p.stem.split("-")[1:]),
    )

    seleccion = args.claves
    if not seleccion:
        seleccion = None  # todas

    n_completas = 0
    n_outlines = 0
    n_con_errores = 0
    n_con_warnings = 0

    print()
    print(f"  Plataforma Conéctate · Grado {args.grado}° · Lint contrato MILC v3")
    print("  " + "─" * 70)
    print()

    for path in paths:
        with path.open(encoding="utf-8") as f:
            g = yaml.safe_load(f)
        clave = g["clave"]
        if seleccion and clave not in seleccion:
            continue

        gnum = (g["periodo"] - 1) * 10 + g["sesion"]

        if not g.get("completo"):
            n_outlines += 1
            print(f"  {DIM}·  {clave}  (G{gnum:02d})  outline (no lint){RESET}")
            continue

        n_completas += 1
        errors, warnings = lint_guia(g, args.grado)

        if errors:
            n_con_errores += 1
            print(f"  {RED}✗  {clave}  (G{gnum:02d})  {len(errors)} error(es){RESET}")
            for e in errors:
                print(f"       {RED}✗{RESET} {e}")
        elif warnings:
            n_con_warnings += 1
            print(f"  {YELLOW}⚠  {clave}  (G{gnum:02d})  {len(warnings)} warning(s){RESET}")
            for w in warnings:
                print(f"       {YELLOW}⚠{RESET} {w}")
        else:
            print(f"  {GREEN}✓  {clave}  (G{gnum:02d})  OK{RESET}")

    print()
    print(f"  Resumen: {GREEN}{n_completas - n_con_errores - n_con_warnings} OK{RESET} · "
          f"{YELLOW}{n_con_warnings} con warnings{RESET} · "
          f"{RED}{n_con_errores} con errores{RESET}  "
          f"(de {n_completas} completas, +{n_outlines} outlines)")
    print()

    if n_con_errores > 0:
        return 1
    if args.strict and n_con_warnings > 0:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
