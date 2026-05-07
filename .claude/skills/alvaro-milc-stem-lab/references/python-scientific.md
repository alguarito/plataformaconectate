# Referencia Doctoral: Python Científico

## Ecosistema de Librerías

### NumPy
```python
import numpy as np
# Arrays: np.array(), np.zeros(), np.ones(), np.linspace(), np.arange()
# Operaciones: np.dot(), np.cross(), np.linalg.solve(), np.linalg.eig()
# Álgebra lineal: np.linalg.inv(), np.linalg.det(), np.linalg.norm()
# FFT: np.fft.fft(), np.fft.ifft(), np.fft.fftfreq()
# Random: np.random.normal(), np.random.uniform(), np.random.seed()
# Broadcasting, indexación avanzada, slicing
```

### SymPy (Álgebra Simbólica)
```python
import sympy as sp
x, y, z, t = sp.symbols('x y z t')
# Simplificación: sp.simplify(), sp.expand(), sp.factor(), sp.collect()
# Cálculo: sp.diff(), sp.integrate(), sp.limit(), sp.series()
# Ecuaciones: sp.solve(), sp.solveset(), sp.dsolve() (EDO)
# Matrices: sp.Matrix(), .eigenvals(), .eigenvects(), .det(), .inv()
# LaTeX: sp.latex(expr) → string LaTeX
# Plotting: sp.plot(), sp.plot3d(), sp.plot_implicit()
# Transformadas: sp.laplace_transform(), sp.fourier_transform()
# Lógica: sp.And, sp.Or, sp.Not, sp.Implies, sp.satisfiable()
# Conjuntos: sp.FiniteSet(), sp.Interval(), sp.Union(), sp.Intersection()
```

### SciPy
```python
from scipy import optimize, integrate, interpolate, linalg, signal, stats
# Optimización: optimize.minimize(), optimize.curve_fit(), optimize.linprog()
# Integración: integrate.quad(), integrate.odeint(), integrate.solve_ivp()
# Interpolación: interpolate.interp1d(), interpolate.CubicSpline()
# Señales: signal.butter(), signal.filtfilt(), signal.spectrogram()
# Estadística: stats.norm, stats.ttest_ind(), stats.chi2_contingency()
# Álgebra lineal: linalg.lu(), linalg.qr(), linalg.svd(), linalg.expm()
```

### Pandas
```python
import pandas as pd
# DataFrame: pd.DataFrame(), pd.read_csv(), pd.read_excel()
# Operaciones: df.groupby(), df.merge(), df.pivot_table()
# Estadísticas: df.describe(), df.corr(), df.value_counts()
# Limpieza: df.dropna(), df.fillna(), df.replace(), df.astype()
# Exportar: df.to_csv(), df.to_excel(), df.to_latex()
```

### Polars (alternativa rápida a Pandas)
```python
import polars as pl
# pl.DataFrame(), pl.read_csv(), pl.scan_csv() (lazy)
# Expresiones: pl.col(), pl.lit(), pl.when().then().otherwise()
# Operaciones: df.filter(), df.group_by(), df.sort(), df.join()
```

### Matplotlib
```python
import matplotlib.pyplot as plt
import matplotlib as mpl
# Estilo publicación:
plt.style.use('seaborn-v0_8-whitegrid')  # o 'ggplot', 'bmh'
fig, ax = plt.subplots(figsize=(10, 6))
ax.set_xlabel('Tiempo (s)', fontsize=14)
ax.set_ylabel('Posición (m)', fontsize=14)
ax.set_title('Movimiento', fontsize=16, fontweight='bold')
ax.legend(fontsize=12)
ax.grid(True, alpha=0.3)
fig.tight_layout()
# Subplots: fig, axes = plt.subplots(2, 3, figsize=(15, 10))
# 3D: from mpl_toolkits.mplot3d import Axes3D; ax = fig.add_subplot(111, projection='3d')
# Animación: from matplotlib.animation import FuncAnimation
# Guardar: fig.savefig('grafica.png', dpi=300, bbox_inches='tight')
# Exportar LaTeX: fig.savefig('grafica.pgf')  # para incluir en LaTeX
```

### TensorFlow / Keras
```python
import tensorflow as tf
from tensorflow import keras
# Modelos: keras.Sequential(), keras.Model (funcional)
# Capas: Dense, Conv2D, LSTM, Dropout, BatchNormalization
# Compilar: model.compile(optimizer='adam', loss='mse', metrics=['mae'])
# Entrenar: model.fit(X_train, y_train, epochs=100, validation_split=0.2)
# Predicción: model.predict(X_new)
# Aplicaciones educativas: regresión, clasificación, redes neuronales visualizadas
```

### PuLP (Programación Lineal)
```python
from pulp import *
prob = LpProblem("Optimización", LpMaximize)
x1 = LpVariable("x1", lowBound=0)
x2 = LpVariable("x2", lowBound=0)
prob += 3*x1 + 5*x2  # Función objetivo
prob += x1 + x2 <= 10  # Restricción
prob.solve()
# value(x1), value(x2), value(prob.objective)
```

### ipywidgets (Google Colab)
```python
import ipywidgets as widgets
from IPython.display import display
# Sliders: widgets.FloatSlider(min=0, max=10, step=0.1, description='Velocidad')
# Dropdown: widgets.Dropdown(options=['MRU', 'MRUA'], description='Tipo')
# Button: widgets.Button(description='Calcular')
# Output: widgets.Output()
# Interactividad: widgets.interact(funcion, param=slider)
# Layout: widgets.HBox([w1, w2]), widgets.VBox([w1, w2])
```

## Patrones de Código

### Resolución de EDO con gráfica
```python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def sistema(t, y, params):
    """Sistema de EDOs: dy/dt = f(t, y)"""
    x, v = y
    m, k, b = params
    dxdt = v
    dvdt = -(k/m)*x - (b/m)*v
    return [dxdt, dvdt]

params = (1.0, 10.0, 0.5)  # m, k, b
sol = solve_ivp(sistema, [0, 20], [1, 0], args=(params,),
                t_eval=np.linspace(0, 20, 1000), method='RK45')

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))
ax1.plot(sol.t, sol.y[0], 'b-', linewidth=2)
ax1.set_ylabel('Posición x(t)', fontsize=13)
ax2.plot(sol.t, sol.y[1], 'r-', linewidth=2)
ax2.set_ylabel('Velocidad v(t)', fontsize=13)
ax2.set_xlabel('Tiempo (s)', fontsize=13)
```

### Análisis estadístico completo
```python
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt

# Estadística descriptiva
data = pd.Series([...])
resumen = data.describe()
# Prueba de normalidad
stat, p_value = stats.shapiro(data)
# Intervalo de confianza 95%
ci = stats.t.interval(0.95, len(data)-1, loc=data.mean(), scale=stats.sem(data))
# Prueba de hipótesis (t-test)
t_stat, p_val = stats.ttest_1samp(data, mu_0)
```

### Visualización interactiva en Colab
```python
import ipywidgets as widgets
import matplotlib.pyplot as plt
import numpy as np

@widgets.interact(
    frecuencia=widgets.FloatSlider(min=0.1, max=10, step=0.1, value=1, description='f (Hz)'),
    amplitud=widgets.FloatSlider(min=0.1, max=5, step=0.1, value=1, description='A (m)'),
    fase=widgets.FloatSlider(min=0, max=2*np.pi, step=0.1, value=0, description='φ (rad)')
)
def graficar_onda(frecuencia, amplitud, fase):
    t = np.linspace(0, 4*np.pi, 1000)
    y = amplitud * np.sin(2*np.pi*frecuencia*t + fase)
    fig, ax = plt.subplots(figsize=(10, 4))
    ax.plot(t, y, 'b-', linewidth=2)
    ax.set_xlabel('Tiempo (s)')
    ax.set_ylabel('Desplazamiento (m)')
    ax.set_title(f'y(t) = {amplitud:.1f} sin(2π·{frecuencia:.1f}·t + {fase:.1f})')
    ax.grid(True, alpha=0.3)
    ax.set_ylim(-6, 6)
    plt.tight_layout()
    plt.show()
```
