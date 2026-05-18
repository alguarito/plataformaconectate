/**
 * Contenido web del examen final · Grado 9 · Período 3
 *
 * Auto-generado desde content/examenes/9-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 9,
  periodo: 3,
  titulo: 'Examen final · Datos y hojas de cálculo con phronesis',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Datos y hojas de cálculo con phronesis',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué es un dato en sentido riguroso?',
        opciones: [
          'Cualquier número que veas',
          'Información recolectada con propósito que responde una pregunta específica',
          'Lo que sale en internet',
          'Una opinión'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Sin propósito, los datos son ruido. La pregunta viene antes que la recolección.',
        feedbackIncorrecto: 'Información con propósito que responde una pregunta. Sin pregunta clara, los datos no sirven a la decisión.'
      },
      {
        enunciado: 'En una tabla limpia, ¿qué representa cada FILA?',
        opciones: [
          'Un tipo de dato',
          'Un caso o registro individual',
          'Una pregunta',
          'Una fórmula'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Fila = caso individual (un estudiante, un día, una venta). Columna = tipo de dato.',
        feedbackIncorrecto: 'Fila = caso individual; columna = tipo. Esa estructura permite filtrar, ordenar y sumar.'
      },
      {
        enunciado: '¿Qué fórmula da el valor MÁS ALTO de un rango?',
        opciones: [
          '=SUMA()',
          '=MAX()',
          '=PROMEDIO()',
          '=CONTAR()'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. =MAX() da el valor máximo. =MIN() el mínimo. =PROMEDIO() la media. =SUMA() la suma. =CONTAR() el conteo.',
        feedbackIncorrecto: '=MAX() para el máximo. Conoce las 5 básicas: SUMA, PROMEDIO, MAX, MIN, CONTAR.'
      },
      {
        enunciado: 'Tienes 200 filas de ventas. Quieres ver solo las del mes de marzo. ¿Qué herramienta usas?',
        opciones: [
          'Borrar las demás filas',
          'Filtro por columna Mes = marzo (no modifica los datos)',
          'Crear otra hoja',
          'Imprimir todo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Filtros muestran/ocultan filas sin tocar los datos. Reversible y rápido.',
        feedbackIncorrecto: 'Filtros, no borrar. Filtrar oculta filas temporalmente sin perder datos.'
      },
      {
        enunciado: '¿Para qué sirve una tabla dinámica (pivot table)?',
        opciones: [
          'Para escribir poemas',
          'Para agrupar y comparar datos rápidamente (ventas por mes, alumnos por grado, etc.)',
          'Para ordenar alfabéticamente',
          'Para imprimir'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Tabla dinámica = agrupar + comparar. Es la herramienta más poderosa del análisis básico.',
        feedbackIncorrecto: 'Agrupar y comparar. Sirve para responder preguntas tipo "¿cuánto vendí por mes?" sin escribir fórmulas complejas.'
      },
      {
        enunciado: 'Quieres mostrar la evolución de las ventas mensuales a lo largo de un año. ¿Qué gráfico es el más adecuado?',
        opciones: [
          'Gráfico circular (pastel)',
          'Gráfico de líneas (muestra tendencia temporal)',
          'Histograma',
          'Tabla sin gráfico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Líneas para tendencia temporal. Circular para proporciones; barras para comparar categorías.',
        feedbackIncorrecto: 'Gráfico de líneas para tendencia en el tiempo. Es el gráfico estándar para evolución mensual.'
      },
      {
        enunciado: '¿Cuál es el primer paso al recibir datos sucios para analizar?',
        opciones: [
          'Hacer el gráfico inmediato',
          'Limpiar: unificar formatos, eliminar duplicados, manejar datos faltantes, normalizar mayúsculas',
          'Eliminar todas las filas',
          'Imprimir'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Sin limpieza, el análisis es ficción. Los archiveros profesionales dedican 60-80% del tiempo a limpiar.',
        feedbackIncorrecto: 'Limpiar primero. Sin datos limpios, los análisis y gráficos son ficción.'
      },
      {
        enunciado: '¿Cuál de estas prácticas viola la visualización honesta?',
        opciones: [
          'Etiquetas claras en los ejes',
          'Eje Y truncado para inflar visualmente las diferencias',
          'Título descriptivo del gráfico',
          'Eje desde cero'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Eje truncado infla diferencias visualmente. Es la trampa más común de gráficos engañosos.',
        feedbackIncorrecto: 'Eje truncado es trampa. Visualización honesta exige eje desde 0, etiquetas claras, escala consistente, sin 3D engañoso.'
      },
      {
        enunciado: '¿Qué es un "insight" en análisis de datos?',
        opciones: [
          'Un número aleatorio',
          'Conclusión razonada a partir de los datos que sugiere una decisión accionable',
          'Un gráfico bonito',
          'El total de la suma'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Un insight conecta el dato con la decisión. "El 70% estudia 5-7pm; agendar tutorías ahí" es insight; "el 70% estudia" es solo estadística.',
        feedbackIncorrecto: 'Insight = conclusión razonada que sugiere acción. Un número aislado no es insight; un patrón con propuesta de acción sí.'
      },
      {
        enunciado: 'Durante la sustentación de tu mini-estudio, ¿qué muestra MEJOR tu oficio?',
        opciones: [
          'Hablar mucho',
          'Mostrar 1 gráfico honesto + 1 insight accionable + reconocer limitaciones del estudio',
          'Decir que no hay limitaciones',
          'Solo leer cifras'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Gráfico honesto + insight + límites reconocidos. La honestidad sobre lo no resuelto distingue al analista maduro.',
        feedbackIncorrecto: 'Gráfico honesto + insight + límites reconocidos. Reconocer lo que el estudio NO responde es parte del oficio.'
      },
      {
        enunciado: '¿Cuál oficio ancestral conecta con el análisis de datos en este periodo?',
        opciones: [
          'El cartero del barrio',
          'El contador de cosechas del granero del Valle con su cuaderno cuadriculado',
          'El zapatero',
          'El maestro de música'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El contador llevaba kilos, precios, gastos en cuaderno. Análisis de datos antes del software.',
        feedbackIncorrecto: 'El contador de cosechas. Su cuaderno cuadriculado es el ancestro directo de la hoja de cálculo.'
      },
      {
        enunciado: 'En una tabla limpia, ¿qué representa cada COLUMNA?',
        opciones: [
          'Un registro completo',
          'Un tipo de dato (variable, atributo, campo)',
          'Una respuesta',
          'Una fórmula'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Columna = tipo de dato. Todas las celdas de una columna son del mismo tipo (números, fechas, texto).',
        feedbackIncorrecto: 'Columna = tipo. Edad, nombre, fecha, monto: cada uno en su columna. Mezclar tipos en una columna rompe el análisis.'
      },
      {
        enunciado: 'Quieres saber cuántos estudiantes hay en una tabla con 200 filas. ¿Qué fórmula usas?',
        opciones: [
          '=SUMA(A2:A200)',
          '=CONTAR(A2:A200) o =CONTARA(A2:A200) si son textos',
          '=PROMEDIO(A2:A200)',
          '=MAX(A2:A200)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. CONTAR cuenta números, CONTARA cuenta celdas no vacías (incluye texto).',
        feedbackIncorrecto: 'CONTAR para números, CONTARA para textos o mixto. SUMA totaliza valores numéricos, no cuenta filas.'
      },
      {
        enunciado: 'Filtras tu tabla por "Mes = marzo" y obtienes 50 filas. ¿Las otras 150 se borraron?',
        opciones: [
          'Sí, las borró el filtro',
          'No, solo están ocultas temporalmente; al quitar el filtro vuelven a aparecer',
          'Se fueron a la papelera',
          'Se duplicaron'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Filtros NO borran datos. Solo ocultan filas temporalmente; al quitar el filtro, todo vuelve.',
        feedbackIncorrecto: 'Filtros ocultan, no borran. Al quitar el filtro las filas vuelven. Por eso es reversible y seguro.'
      },
      {
        enunciado: 'Quieres saber cuántas ventas hubo POR MES y POR PRODUCTO al mismo tiempo. ¿Qué usas?',
        opciones: [
          'Solo un filtro',
          'Tabla dinámica con Mes en filas y Producto en columnas',
          'Un gráfico circular',
          'Una sola fórmula CONTAR'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Tabla dinámica es la herramienta para cruzar dos dimensiones (filas × columnas) y ver intersecciones.',
        feedbackIncorrecto: 'Tabla dinámica. Permite cruzar dimensiones (mes × producto) y ver el conteo en cada intersección.'
      },
      {
        enunciado: '¿Cuál de estos gráficos NO debe usarse para más de 5-6 categorías?',
        opciones: [
          'Gráfico circular (pastel) — se vuelve ilegible con muchas categorías',
          'Tabla',
          'Gráfico de líneas',
          'Histograma'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. Circular pierde claridad con muchas categorías. Para más de 6, usar barras horizontales.',
        feedbackIncorrecto: 'Circular es para 3-6 categorías. Con más, usar barras horizontales que se leen mejor.'
      },
      {
        enunciado: 'Encuentras 4 filas duplicadas en tu tabla de 100 filas. ¿Qué haces?',
        opciones: [
          'Las ignoro',
          'Las elimino con Datos > Quitar duplicados (Sheets) o verifico si son legítimas antes de borrar',
          'Las copio 4 veces más',
          'Cambio de tabla'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Quitar duplicados con criterio: confirmar primero si son legítimas o error de captura.',
        feedbackIncorrecto: 'Quitar duplicados con criterio. Antes verificar si son error de captura o registros legítimos repetidos.'
      },
      {
        enunciado: '¿Cuál NO es un principio de visualización honesta?',
        opciones: [
          'Eje Y desde cero',
          'Escala consistente',
          'Etiquetas legibles',
          'Efectos 3D rotativos para que se vea más profesional'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. 3D rotativo distorsiona proporciones. Los principios son eje desde cero, escala consistente, etiquetas claras, título descriptivo, sin 3D engañoso.',
        feedbackIncorrecto: 'El 3D distorsiona, no es principio. Los 5 principios honestos: eje desde 0, escala consistente, sin 3D, etiquetas legibles, título descriptivo.'
      },
      {
        enunciado: 'Tu mini-estudio encuentra que el 65% de los estudiantes usa el celular para estudiar. ¿Cuál es un insight ACCIONABLE?',
        opciones: [
          'El 65% usa celular',
          'Dado que 65% estudia en celular, la coordinación podría priorizar materiales formato móvil-first antes que PDFs A4',
          'Hay que prohibir celulares',
          'Es interesante'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Insight conecta dato + propuesta de acción específica. Estadística sola no es insight.',
        feedbackIncorrecto: 'Insight = dato + propuesta de acción. "El 65% usa celular" es estadística; insight conecta eso con qué hacer.'
      },
      {
        enunciado: 'Durante tu sustentación, alguien señala que tu muestra de 30 estudiantes es pequeña. ¿Qué respondes?',
        opciones: [
          'No es relevante',
          'Tiene razón: reconocer que es estudio exploratorio de mi grado, no representativo de toda la institución; proponer ampliar a más grados en futuras investigaciones',
          'Cambiar de tema',
          'Decir que 30 es suficiente'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Honestidad sobre limitaciones + plan de ampliación. Esa es la postura madura del analista.',
        feedbackIncorrecto: 'Reconocer limitación + proponer ampliación. La honestidad fortalece el estudio; ocultarla lo debilita.'
      },
      {
        enunciado: 'Quieres sumar SOLO las ventas mayores a 1000. ¿Qué fórmula usas?',
        opciones: [
          '=SUMA(A2:A100)',
          '=SUMAR.SI(A2:A100; ">1000")',
          '=CONTAR(A2:A100)',
          '=MAX(A2:A100)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. SUMAR.SI suma condicional. Permite criterios numéricos, de texto o referencias.',
        feedbackIncorrecto: 'SUMAR.SI con criterio ">1000". Es suma condicional, base para análisis filtrados.'
      },
      {
        enunciado: 'Vas a publicar un gráfico de evolución de notas (4.0 a 4.5 en 6 meses). ¿Cómo lo diseñas honestamente?',
        opciones: [
          'Eje Y de 3.9 a 4.6 para que se vean grandes las diferencias',
          'Eje Y desde 0 a 5 (la escala de notas completa); etiquetas claras en cada punto',
          'Sin etiquetas para que no distraigan',
          'Con efecto 3D para verse profesional'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Eje desde 0 hasta 5 (la escala completa), etiquetas claras. Eso muestra el crecimiento real proporcional al rango.',
        feedbackIncorrecto: 'Eje desde 0 a 5 (escala completa) + etiquetas claras. Truncar el eje infla diferencias y engaña al lector.'
      }
    ]
  }
};

export default contenido;
