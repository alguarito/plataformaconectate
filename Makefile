# Plataforma Conéctate — Pipeline de generación de guías
#
# Centraliza las operaciones sobre guías de Tecnología e Informática.
# Cada target llama al script Python correspondiente. Tú no memorizas
# comandos largos, solo `make guia-<algo>`.
#
# Convenciones:
#   - Los targets `guia-*` operan sobre las guías YAML en content/guias/
#   - El argumento CLAVE selecciona una guía: CLAVE=1-2 → G11·P1·S2
#   - Sin CLAVE, los targets operan sobre todas las guías del grado activo
#   - GRADO=11 por defecto (a futuro: GRADO=6, 7, ...)

GRADO       ?= 11
CLAVE       ?=
PYTHON      ?= python3
BUILDER     := scripts/build-guias-g11.py
CONTENT_DIR := content/guias/$(GRADO)
OUT_DIR     := public/guias-mejoras

# ─── Default ────────────────────────────────────────────────────────────────

.DEFAULT_GOAL := help

.PHONY: help
help:  ## Lista los comandos disponibles
	@echo "Plataforma Conéctate — Comandos de guías"
	@echo ""
	@echo "  Uso típico:"
	@echo "    make guia-build                  # compila todas las guías completas (grado $(GRADO))"
	@echo "    make guia-build CLAVE=1-2        # compila solo G$(GRADO)·P1·S2"
	@echo "    make guia-show CLAVE=1-2         # abre el PDF de G$(GRADO)·P1·S2"
	@echo "    make guia-status                 # estado de las 30 guías sin recompilar"
	@echo "    make guia-edit CLAVE=1-2         # abre el YAML de G$(GRADO)·P1·S2 en \$$EDITOR"
	@echo ""
	@echo "  Comandos disponibles:"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "    \033[1m%-22s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""
	@echo "  Variables:"
	@echo "    GRADO=$(GRADO)     # grado activo (default 11)"
	@echo "    CLAVE=$(CLAVE)         # clave de guía 'periodo-sesion' (opcional)"
	@echo ""

# ─── Build ──────────────────────────────────────────────────────────────────

.PHONY: guia-build
guia-build:  ## Compila la(s) guía(s) YAML → PDF (vía xelatex 2 pasadas)
ifeq ($(CLAVE),)
	@$(PYTHON) $(BUILDER)
else
	@$(PYTHON) $(BUILDER) $(CLAVE)
endif

.PHONY: guia-show
guia-show:  ## Abre el PDF de la guía CLAVE en Preview (requiere CLAVE=p-s)
	@if [ -z "$(CLAVE)" ]; then \
		echo "✗ Falta CLAVE. Ejemplo: make guia-show CLAVE=1-2"; \
		exit 1; \
	fi
	@$(eval PERIODO := $(word 1,$(subst -, ,$(CLAVE))))
	@$(eval SESION  := $(word 2,$(subst -, ,$(CLAVE))))
	@$(eval GLOBAL  := $(shell echo $$(( ( $(PERIODO) - 1 ) * 10 + $(SESION) ))))
	@$(eval PDF     := $(OUT_DIR)/$(GLOBAL)-$(GRADO)-TIC.pdf)
	@if [ -f "$(PDF)" ]; then \
		echo "▸ Abriendo $(PDF)…"; \
		open "$(PDF)"; \
	else \
		echo "✗ No existe $(PDF). Corre primero: make guia-build CLAVE=$(CLAVE)"; \
		exit 1; \
	fi

.PHONY: guia-edit
guia-edit:  ## Abre el YAML de la guía CLAVE en \$$EDITOR (default: VS Code)
	@if [ -z "$(CLAVE)" ]; then \
		echo "✗ Falta CLAVE. Ejemplo: make guia-edit CLAVE=1-2"; \
		exit 1; \
	fi
	@$(eval YAML := $(CONTENT_DIR)/$(GRADO)-$(CLAVE).yaml)
	@if [ -f "$(YAML)" ]; then \
		$${EDITOR:-code} "$(YAML)"; \
	else \
		echo "✗ No existe $(YAML)"; \
		exit 1; \
	fi

# ─── Status ─────────────────────────────────────────────────────────────────

.PHONY: guia-status
guia-status:  ## Tablero de progreso del grado (sin recompilar)
	@$(PYTHON) scripts/guias-status.py --grado $(GRADO)

.PHONY: guia-lint
guia-lint:  ## Valida contrato MILC v3 en las guías completas (200 palabras, verbos, etc.)
ifeq ($(CLAVE),)
	@$(PYTHON) scripts/guias-lint.py --grado $(GRADO)
else
	@$(PYTHON) scripts/guias-lint.py --grado $(GRADO) $(CLAVE)
endif

.PHONY: guia-lint-strict
guia-lint-strict:  ## Igual que guia-lint pero los warnings también fallan
	@$(PYTHON) scripts/guias-lint.py --grado $(GRADO) --strict

.PHONY: guia-assets
guia-assets:  ## Lista los assets (imágenes, diagramas) declarados por las guías
ifeq ($(CLAVE),)
	@$(PYTHON) scripts/guias-assets.py --grado $(GRADO)
else
	@$(PYTHON) scripts/guias-assets.py --grado $(GRADO) $(CLAVE)
endif

# ─── Limpieza ───────────────────────────────────────────────────────────────

.PHONY: guia-clean
guia-clean:  ## Borra archivos auxiliares de LaTeX (.aux, .log, .out)
	@find $(OUT_DIR) -maxdepth 1 \( -name "*.aux" -o -name "*.log" -o -name "*.out" \) -delete
	@echo "▸ Limpieza completa."

# ─── Web ────────────────────────────────────────────────────────────────────

.PHONY: dev
dev:  ## npm run dev (servidor de desarrollo Astro)
	@npm run dev

.PHONY: build
build:  ## npm run build (compila el sitio Astro completo)
	@npm run build
