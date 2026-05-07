# Referencia Doctoral: LaTeX y Paquetes Especializados

## Compiladores Recomendados
- **LuaLaTeX**: Preferido. Soporte Unicode nativo, fuentes OpenType, Lua scripting
- **XeLaTeX**: Alternativa. Soporte Unicode y OpenType, compatible con fontspec
- **pdfLaTeX**: Clásico. Para documentos sin necesidad de fuentes especiales

## Paquetes Fundamentales

### Estructura y Formato
```latex
\usepackage[utf8]{inputenc}      % Solo pdfLaTeX (LuaLaTeX no lo necesita)
\usepackage[T1]{fontenc}         % Solo pdfLaTeX
\usepackage[spanish]{babel}      % Idioma español
\usepackage{geometry}            % Márgenes: \geometry{margin=2.5cm}
\usepackage{fancyhdr}            % Encabezados/pies personalizados
\usepackage{enumitem}            % Listas personalizadas
\usepackage{multicol}            % Múltiples columnas
\usepackage{hyperref}            % Hipervínculos
\usepackage{bookmark}            % Bookmarks PDF mejorados
```

### Matemáticas
```latex
\usepackage{amsmath}             % Ecuaciones: align, gather, cases, matrix
\usepackage{amssymb}             % Símbolos: \mathbb{R}, \therefore
\usepackage{amsthm}              % Teoremas: \newtheorem
\usepackage{mathtools}           % Extensión de amsmath: dcases, multlined
\usepackage{siunitx}             % Unidades SI: \SI{9.8}{\meter\per\second\squared}
\usepackage{cancel}              % Cancelar términos: \cancel{x}
\usepackage{nicematrix}          % Matrices avanzadas con decoraciones
```

### Colores y Cajas
```latex
\usepackage[dvipsnames,svgnames,x11names]{xcolor}  % Colores nombrados
\usepackage[most]{tcolorbox}     % Cajas con estilo

% Entornos tcolorbox personalizados (patrón Vibrant Science)
\newtcolorbox{definicion}[1][]{
  colback=blue!5!white, colframe=blue!75!black,
  fonttitle=\bfseries, title=#1,
  rounded corners, boxrule=1pt,
  left=8pt, right=8pt, top=6pt, bottom=6pt
}
\newtcolorbox{teorema}[1][]{
  colback=green!5!white, colframe=green!50!black,
  fonttitle=\bfseries, title=#1,
  rounded corners, boxrule=1pt
}
\newtcolorbox{ejemplo}[1][]{
  colback=orange!5!white, colframe=orange!75!black,
  fonttitle=\bfseries, title=#1,
  rounded corners, boxrule=1pt
}
\newtcolorbox{ejercicio}[1][]{
  colback=purple!5!white, colframe=purple!75!black,
  fonttitle=\bfseries, title=#1,
  rounded corners, boxrule=1pt
}
\newtcolorbox{nota}[1][]{
  colback=yellow!10!white, colframe=yellow!80!black,
  fonttitle=\bfseries, title=#1,
  rounded corners, boxrule=1pt
}
```

### Tipografía e Íconos
```latex
\usepackage{fontspec}            % Solo LuaLaTeX/XeLaTeX: fuentes OpenType
\usepackage{fontawesome5}        % Íconos: \faIcon{atom}, \faIcon{calculator}
\usepackage{pifont}              % Símbolos especiales: \ding{51} (checkmark)
```

## Dibujo y Gráficos

### TikZ / PGF (Estándar de oro)
```latex
\usepackage{tikz}
\usetikzlibrary{
  calc,              % Cálculos de coordenadas
  positioning,       % Posicionamiento relativo
  shapes.geometric,  % Formas geométricas
  shapes.misc,       % Formas misceláneas
  arrows.meta,       % Puntas de flecha modernas
  decorations.pathmorphing,  % Líneas onduladas, zigzag
  decorations.markings,      % Marcas sobre caminos
  patterns,          % Rellenos con patrones
  intersections,     % Calcular intersecciones
  angles,            % Marcar ángulos
  quotes,            % Etiquetas en ángulos
  backgrounds,       % Capas de fondo
  fit,               % Ajustar nodos a regiones
  mindmap,           % Mapas mentales
  graphs,            % Grafos simplificados
  shadows,           % Sombras
  fadings,           % Degradados de opacidad
  3d,                % Perspectiva 3D básica
  spy                % Lupa/zoom
}
```

### pgfplots (Gráficas científicas)
```latex
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
% Gráfica de función
\begin{tikzpicture}
\begin{axis}[
  xlabel={$x$}, ylabel={$f(x)$},
  grid=major, grid style={dashed, gray!30},
  width=10cm, height=7cm,
  legend pos=north west
]
\addplot[blue, thick, domain=-2:2, samples=100] {x^2};
\addlegendentry{$f(x) = x^2$}
\end{axis}
\end{tikzpicture}

% Gráfica 3D
\begin{axis}[view={60}{30}]
\addplot3[surf, domain=-2:2, domain y=-2:2] {x^2 + y^2};
\end{axis}
```

### Circuitikz (Circuitos eléctricos)
```latex
\usepackage[american]{circuitikz}
% Estilos: american, european
% Componentes principales:
% R = resistencia, C = capacitor, L = inductor
% V = fuente de voltaje, I = fuente de corriente
% D = diodo, led = LED, zD = Zener
% npn, pnp = transistores BJT
% nmos, pmos = MOSFET
% op amp = amplificador operacional
% and port, or port, not port = compuertas lógicas

\begin{circuitikz}[american, cute inductors]
\draw (0,0) to[V=$V_s$] (0,4)
            to[R=$R_1$, i=$i_1$] (4,4)
            to[L=$L_1$, v=$V_L$] (4,0)
            -- (0,0);
\draw (4,4) to[C=$C_1$] (8,4)
            to[R=$R_2$] (8,0)
            -- (4,0);
\end{circuitikz}
```

### PSTricks (Alternativa basada en PostScript)
```latex
\usepackage{pstricks}
\usepackage{pst-plot}     % Gráficas
\usepackage{pst-circ}     % Circuitos
\usepackage{pst-3dplot}   % Gráficas 3D
\usepackage{pst-func}     % Funciones especiales
% Requiere compilar con XeLaTeX o vía DVI→PS→PDF
```

### Asymptote (Gráficos 3D avanzados)
```latex
\usepackage{asymptote}
% Lenguaje de programación de gráficos vectoriales
% Excelente para superficies 3D, sólidos de revolución
```

## Diagramas Especializados

### Forest (Árboles)
```latex
\usepackage{forest}
% Árboles de decisión, sintácticos, organigramas
\begin{forest}
  [Raíz [Hijo 1 [Nieto 1][Nieto 2]] [Hijo 2 [Nieto 3]]]
\end{forest}
```

### Smartdiagram (Diagramas modernos)
```latex
\usepackage{smartdiagram}
% \smartdiagram[flow diagram:horizontal]{Paso 1, Paso 2, Paso 3}
% Tipos: circular diagram, flow diagram, bubble diagram,
%        descriptive diagram, priority descriptive diagram,
%        constellation diagram, connected constellation diagram
```

### Líneas de Tiempo
```latex
\usepackage{chronology}   % Líneas de tiempo horizontales simples
\usepackage{chronosys}    % Líneas de tiempo históricas versátiles
% tikz-timeline para líneas de tiempo altamente gráficas
```

### Mapas mentales
```latex
\usetikzlibrary{mindmap}
\begin{tikzpicture}[mindmap, grow cyclic, every node/.style=concept,
  concept color=blue!40, level 1/.append style={sibling angle=90}]
  \node {Centro} child { node {Tema 1} }
                 child { node {Tema 2} }
                 child { node {Tema 3} }
                 child { node {Tema 4} };
\end{tikzpicture}
```

## Geometría en LaTeX

### tkz-euclide (Geometría euclidiana)
```latex
\usepackage{tkz-euclide}
% Definir puntos: \tkzDefPoint(0,0){A}
% Circunferencias: \tkzDefCircle[through](O,A)
% Intersecciones: \tkzInterLC, \tkzInterLL, \tkzInterCC
% Ángulos: \tkzMarkAngle, \tkzLabelAngle
% Mediatrices, bisectrices, alturas: \tkzDefMidPoint, \tkzDefBarycentricPoint
```

### tkz-fct (Gráficas de funciones)
```latex
\usepackage{tkz-fct}
% Usa Gnuplot por debajo para cálculos rápidos
```

### venndiagram (Diagramas de Venn)
```latex
\usepackage{venndiagram}
\begin{venndiagram2sets}[labelA={$A$}, labelB={$B$}]
  \fillACapB
\end{venndiagram2sets}
```

### bodegraph (Diagramas de Bode)
```latex
\usepackage{bodegraph}
% Para ingeniería de control: magnitud y fase
```

## Patrón: Documento Educativo Vibrant Science

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[margin=2cm]{geometry}
\usepackage[spanish]{babel}
\usepackage{fontspec}  % LuaLaTeX
\usepackage{amsmath,amssymb,mathtools}
\usepackage{siunitx}
\usepackage[dvipsnames]{xcolor}
\usepackage[most]{tcolorbox}
\usepackage{tikz}
\usepackage{pgfplots}\pgfplotsset{compat=1.18}
\usepackage{fontawesome5}
\usepackage{fancyhdr}
\usepackage{enumitem}
\usepackage{hyperref}

% Paleta de colores personalizada (mínimo 8)
\definecolor{primary}{HTML}{1A237E}
\definecolor{secondary}{HTML}{0D47A1}
\definecolor{accent}{HTML}{FF6F00}
\definecolor{success}{HTML}{2E7D32}
\definecolor{info}{HTML}{0097A7}
\definecolor{warning}{HTML}{F57F17}
\definecolor{danger}{HTML}{C62828}
\definecolor{light}{HTML}{F5F5F5}

% Entornos tcolorbox
% ... (definiciones, teoremas, ejemplos, ejercicios, notas)

% Encabezado/pie
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\textcolor{primary}{\faIcon{atom} Institución}}
\fancyhead[R]{\textcolor{primary}{Asignatura}}
\fancyfoot[C]{\thepage}

% Banner TikZ institucional
\newcommand{\banner}[3]{%
  \begin{tikzpicture}[remember picture, overlay]
    \fill[primary] (current page.north west) rectangle
      ([yshift=-3cm]current page.north east);
    \node[white, font=\LARGE\bfseries] at
      ([yshift=-1.2cm]current page.north) {#1};
    \node[white, font=\large] at
      ([yshift=-2cm]current page.north) {#2 — #3};
  \end{tikzpicture}
  \vspace{2.5cm}
}

\begin{document}
\banner{Título del Tema}{Grado/Semestre}{Docente: Néstor F. Montoya P.}
% ... contenido ...
\end{document}
```

## Paleta de Colores por Área

| Área | Primario | Secundario | Acento |
|---|---|---|---|
| Física | Navy #1A237E | Azul #0D47A1 | Naranja #FF6F00 |
| Matemáticas | Verde #1B5E20 | Teal #00695C | Oro #FFB300 |
| Química | Púrpura #4A148C | Rosa #880E4F | Cian #00838F |
| Tecnología | Gris #37474F | Azul #1565C0 | Lime #9E9D24 |
| Biología | Verde #2E7D32 | Oliva #558B2F | Café #5D4037 |
