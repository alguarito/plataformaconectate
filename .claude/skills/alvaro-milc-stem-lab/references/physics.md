# Referencia Doctoral: Física

## Dominios de Conocimiento

### 1. Mecánica Clásica y Teórica
- **Cinemática**: MRU, MRUA, movimiento parabólico, circular (MCU, MCUA)
- **Dinámica**: Leyes de Newton, fuerzas de fricción, tensión, normal, peso
- **Trabajo, energía y potencia**: Teorema trabajo-energía, conservación de energía mecánica
- **Momento lineal**: Impulso, conservación del momento, colisiones elásticas e inelásticas
- **Momento angular**: Torque, equilibrio rotacional, conservación del momento angular
- **Mecánica Lagrangiana**: Ecuaciones de Euler-Lagrange, coordenadas generalizadas, vínculos holónomos
- **Mecánica Hamiltoniana**: Función hamiltoniana, ecuaciones canónicas, transformaciones canónicas
- **Centro de masa**: Cálculo para sistemas discretos y continuos

### 2. Mecánica de Fluidos
- **Estática de fluidos**: Presión hidrostática, principio de Pascal, principio de Arquímedes
- **Dinámica de fluidos**: Ecuación de continuidad, ecuación de Bernoulli, teorema de Torricelli
- **Viscosidad**: Ley de Poiseuille, número de Reynolds, flujo laminar vs turbulento
- **Tensión superficial**: Capilaridad, ley de Laplace, ángulo de contacto
- **Ecuaciones de Navier-Stokes**: Formulación, casos especiales resolubles

### 3. Termodinámica
- **Ley cero**: Equilibrio térmico, escalas de temperatura
- **Primera ley**: Energía interna, trabajo PdV, procesos termodinámicos (isotérmico, adiabático, isobárico, isocórico)
- **Segunda ley**: Entropía, ciclo de Carnot, eficiencia, enunciados de Clausius y Kelvin-Planck
- **Tercera ley**: Entropía a cero absoluto
- **Potenciales termodinámicos**: Energía libre de Helmholtz, energía libre de Gibbs, entalpía
- **Teoría cinética de gases**: Distribución de Maxwell-Boltzmann, equipartición de energía
- **Transferencia de calor**: Conducción (Fourier), convección, radiación (Stefan-Boltzmann)

### 4. Óptica Geométrica y Física
- **Óptica geométrica**: Reflexión, refracción (Snell), espejos (cóncavos/convexos), lentes (convergentes/divergentes), ecuación de lentes delgadas, aumento, instrumentos ópticos
- **Óptica física/ondulatoria**: Interferencia (Young), difracción (Fraunhofer, Fresnel), polarización (Malus), redes de difracción
- **Óptica moderna**: Fibra óptica, láser, holografía

### 5. Electromagnetismo
- **Electrostática**: Ley de Coulomb, campo eléctrico, potencial eléctrico, ley de Gauss, capacitores, dieléctricos
- **Corriente eléctrica**: Ley de Ohm, resistencias (serie/paralelo), leyes de Kirchhoff, circuitos RC
- **Magnetismo**: Fuerza de Lorentz, ley de Biot-Savart, ley de Ampère, inductancia, circuitos RL, RLC
- **Inducción electromagnética**: Ley de Faraday, ley de Lenz, corrientes de Foucault
- **Ecuaciones de Maxwell**: Forma integral y diferencial, ondas electromagnéticas
- **Circuitos de corriente alterna**: Impedancia, resonancia, factor de potencia, transformadores

### 6. Ondas y Acústica
- **Ondas mecánicas**: Ecuación de onda, superposición, ondas estacionarias, resonancia
- **Acústica**: Velocidad del sonido, intensidad, decibelios, efecto Doppler, tubos abiertos/cerrados
- **Ondas electromagnéticas**: Espectro, propagación, energía

### 7. Física Moderna
- **Relatividad especial**: Postulados de Einstein, dilatación temporal, contracción de longitudes, E=mc², transformaciones de Lorentz
- **Relatividad general**: Principio de equivalencia, curvatura del espacio-tiempo (conceptual)
- **Mecánica cuántica**: Radiación de cuerpo negro (Planck), efecto fotoeléctrico (Einstein), modelo de Bohr, dualidad onda-partícula (De Broglie), principio de incertidumbre (Heisenberg), ecuación de Schrödinger, operadores y valores esperados, pozo de potencial infinito, oscilador armónico cuántico, átomo de hidrógeno
- **Física nuclear**: Radiactividad (α, β, γ), fisión, fusión, ley de decaimiento
- **Física de partículas**: Modelo estándar (conceptual), quarks, leptones, bosones
- **Física del estado sólido**: Estructura cristalina, bandas de energía, semiconductores

### 8. Teoría de Circuitos Eléctricos
- **Análisis de circuitos DC**: Mallas, nodos, superposición, Thévenin, Norton, máxima transferencia de potencia
- **Análisis de circuitos AC**: Fasores, impedancia compleja, potencia (activa, reactiva, aparente)
- **Circuitos RLC**: Respuesta transitoria, respuesta en frecuencia, resonancia, filtros
- **Cuadripolos**: Parámetros Z, Y, H, T
- **Diagramas de Bode**: Magnitud y fase, frecuencia de corte

## Constantes Físicas Fundamentales (usar siempre `siunitx` en LaTeX)

```
g = 9.80 m/s²          (aceleración gravitacional)
G = 6.674×10⁻¹¹ N·m²/kg²  (constante gravitacional)
c = 3.00×10⁸ m/s       (velocidad de la luz)
h = 6.626×10⁻³⁴ J·s    (constante de Planck)
ℏ = 1.055×10⁻³⁴ J·s    (constante de Planck reducida)
k_B = 1.381×10⁻²³ J/K  (constante de Boltzmann)
e = 1.602×10⁻¹⁹ C      (carga del electrón)
ε₀ = 8.854×10⁻¹² F/m   (permitividad del vacío)
μ₀ = 4π×10⁻⁷ H/m       (permeabilidad del vacío)
N_A = 6.022×10²³ mol⁻¹  (número de Avogadro)
R = 8.314 J/(mol·K)    (constante de los gases)
σ = 5.670×10⁻⁸ W/(m²·K⁴) (constante de Stefan-Boltzmann)
```

## Textos de Referencia por Nivel

- **Secundaria/Media**: Serway (Física), Hewitt (Física Conceptual), Giancoli
- **Universidad introductorio**: Serway-Jewett, Halliday-Resnick-Walker, Young-Freedman
- **Universidad intermedio**: Griffiths (Electrodinámica, Cuántica), Taylor (Mecánica Clásica)
- **Avanzado**: Goldstein (Mecánica Clásica), Jackson (Electrodinámica), Sakurai (Mecánica Cuántica)
- **Fluidos**: Cengel-Cimbala, Mott, White
- **Termodinámica**: Cengel-Boles, Zemansky

## Competencias ICFES en Física

1. **Uso comprensivo del conocimiento científico**: Identificar conceptos, leyes y principios
2. **Explicación de fenómenos**: Construir explicaciones basadas en modelos científicos
3. **Indagación**: Diseñar experimentos, analizar datos, formular hipótesis

## Patrones de Simulación para Física

### Simulador MRU/MRUA
```javascript
// Patrón base para simulador cinemático
function simulate(t, x0, v0, a) {
    return x0 + v0 * t + 0.5 * a * t * t;
}
// requestAnimationFrame loop con dt = (now - lastTime) / 1000
// Canvas para dibujo + Plotly/Chart.js para gráfica x(t), v(t), a(t)
```

### Simulador de Campo Eléctrico
```javascript
// Cargas puntuales con superposición vectorial
// Canvas con flechas de campo (arrows)
// Líneas de campo con integración numérica (Euler)
// Superficies equipotenciales con contornos
```

### Simulador Óptico
```javascript
// Trazado de rayos con geometría analítica
// SVG para lentes, espejos, rayos
// Ecuación de lentes: 1/f = 1/do + 1/di
// Aumento: M = -di/do = hi/ho
```
