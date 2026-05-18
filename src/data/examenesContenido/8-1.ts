/**
 * Contenido web del examen final · Grado 8 · Período 1
 *
 * Auto-generado desde content/examenes/8-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 8,
  periodo: 1,
  titulo: 'Examen final · Phronesis con datos en hoja de cálculo',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Phronesis con datos en hoja de cálculo',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué significa phronesis con datos?',
        opciones: [
          'Hacer muchas fórmulas',
          'Criterio práctico aplicado a cifras: preguntar antes de calcular',
          'Saber matemáticas avanzadas',
          'Usar Excel rápido'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Phronesis es criterio práctico. Sin pregunta clara, las cifras son ruido.',
        feedbackIncorrecto: 'Phronesis = criterio práctico. La pregunta viene antes que la fórmula; sin pregunta, no hay análisis útil.'
      },
      {
        enunciado: 'En Excel, ¿qué tipo de dato debe tener una columna que guarda kilos de café?',
        opciones: [
          'Texto',
          'Número con decimales y formato consistente',
          'Fecha',
          'Cualquiera'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Número con decimales. Mezclar texto en columna numérica rompe las fórmulas.',
        feedbackIncorrecto: 'Número. Mezclar tipos (120 y "120 kg") en la misma columna impide sumar o promediar.'
      },
      {
        enunciado: '¿Qué representa cada FILA en una tabla limpia de Excel?',
        opciones: [
          'Un tipo de dato',
          'Un caso o registro individual',
          'Una fórmula',
          'Un gráfico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Fila = caso (un productor, un día, una venta). Columna = tipo de dato.',
        feedbackIncorrecto: 'Fila = caso individual. Columna = tipo. Esa estructura es base para fórmulas, filtros y gráficos.'
      },
      {
        enunciado: '¿Qué fórmula da el valor MÁS BAJO de un rango?',
        opciones: [
          '=MAX()',
          '=MIN()',
          '=PROMEDIO()',
          '=SUMA()'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. =MIN() da el valor mínimo. =MAX() el máximo.',
        feedbackIncorrecto: '=MIN() para mínimo. Conoce las 4 básicas: SUMA, PROMEDIO, MAX, MIN.'
      },
      {
        enunciado: 'Tienes en B1 el IVA (19%) y en A2:A10 los precios sin IVA. Quieres calcular el IVA de cada producto. ¿Cuál fórmula escribes en B2 para copiarla hacia abajo?',
        opciones: [
          '=A2*B1',
          '=A2*$B$1',
          '=$A$2*B1',
          '=A$2*B1'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. $B$1 fija el IVA. A2 cambia a A3, A4... pero $B$1 sigue apuntando al 19%.',
        feedbackIncorrecto: '$B$1 mantiene fija la referencia al IVA. Las constantes que aplican a todas las filas se escriben con $.'
      },
      {
        enunciado: '¿Cuál es el resultado de =3+5*2 según la jerarquía PEMDAS?',
        opciones: [
          '16',
          '13',
          '10',
          '8'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. PEMDAS: multiplicación antes que suma. 5*2 = 10; 3+10 = 13.',
        feedbackIncorrecto: 'Resultado: 13. PEMDAS dicta multiplicar antes de sumar. Si quieres sumar primero, usa paréntesis: =(3+5)*2.'
      },
      {
        enunciado: 'Quieres mostrar la evolución del consumo de agua durante 30 días. ¿Qué gráfico es el más adecuado?',
        opciones: [
          'Gráfico circular',
          'Gráfico de líneas (muestra tendencia temporal)',
          'Histograma',
          'Mapa'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Líneas para tendencia temporal. Circular para proporciones; barras para comparar categorías.',
        feedbackIncorrecto: 'Gráfico de líneas para evolución temporal. Es el estándar de tendencia día a día.'
      },
      {
        enunciado: '¿Cuál práctica VIOLA la honestidad visual?',
        opciones: [
          'Eje Y desde cero',
          'Eje Y truncado para inflar visualmente diferencias',
          'Etiquetas claras',
          'Título descriptivo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Eje truncado es la trampa más común. Infla diferencias visualmente y engaña al lector.',
        feedbackIncorrecto: 'Eje truncado infla diferencias. Honestidad visual exige eje desde 0 (salvo justificación), escala consistente, sin 3D.'
      },
      {
        enunciado: '¿Para qué sirve el formato condicional?',
        opciones: [
          'Para decorar las celdas',
          'Para resaltar visualmente valores que cumplen una condición (rojo si <0, verde si >100)',
          'Para cambiar el idioma',
          'Para imprimir'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Formato condicional = alertas visuales automáticas. Hace visibles los datos que necesitan atención.',
        feedbackIncorrecto: 'Alertas visuales automáticas. Permite ver de un vistazo qué celdas merecen atención sin leer todo.'
      },
      {
        enunciado: '¿Cuál es el primer paso al diseñar un mini-estudio del entorno escolar?',
        opciones: [
          'Abrir Excel y hacer fórmulas',
          'Formular una pregunta concreta y verificable (qué quieres saber, de quién, con qué propósito)',
          'Encuestar a 100 personas',
          'Hacer un gráfico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Pregunta primero. Sin pregunta clara, los datos recolectados no responden nada útil.',
        feedbackIncorrecto: 'Formular la pregunta. Excel es herramienta; la pregunta es el inicio del oficio.'
      },
      {
        enunciado: '¿Cuál es el oficio ancestral que conecta con este periodo?',
        opciones: [
          'La acopiadora de café del Valle con su libreta cuadriculada',
          'El zapatero del centro',
          'El cartero',
          'El piloto de avión'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. La acopiadora llevaba productores, kilos, calidad y precios en libreta. Era phronesis con datos antes de Excel.',
        feedbackIncorrecto: 'La acopiadora de café. Su libreta cuadriculada con productores, kilos y precios es la herencia directa de Excel.'
      },
      {
        enunciado: '¿Cuál de estos NO es un tipo de dato común en Excel?',
        opciones: [
          'Número',
          'Texto',
          'Fecha',
          'Sentimiento'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. Excel maneja números, texto, fechas, porcentajes y booleanos. Los "sentimientos" no son tipo.',
        feedbackIncorrecto: 'Excel: número, texto, fecha, porcentaje, booleano. "Sentimiento" no es tipo de dato.'
      },
      {
        enunciado: 'Tu tabla tiene una columna mezcla con "120", "120 L", "ciento veinte". ¿Qué haces?',
        opciones: [
          'Las dejo igual',
          'Las uniformizo a número puro (=VALOR si hay strings) antes de aplicar fórmulas',
          'Las borro todas',
          'Cambio a Word'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Uniformar el tipo es paso obligado. Sin homogeneidad, las fórmulas devuelven errores o resultados falsos.',
        feedbackIncorrecto: 'Uniformar a número puro. Sin homogeneidad de tipos, las fórmulas básicas no funcionan correctamente.'
      },
      {
        enunciado: 'Tienes los kilos de café de 30 productores. Quieres saber el productor con MAYOR cosecha. ¿Qué fórmula usas?',
        opciones: [
          '=PROMEDIO(B2:B31)',
          '=MAX(B2:B31)',
          '=SUMA(B2:B31)',
          '=CONTAR(B2:B31)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. =MAX devuelve el valor más alto. Para saber QUIÉN, usar BUSCARV con ese valor.',
        feedbackIncorrecto: '=MAX devuelve el valor más alto. Para saber QUIÉN, combinas MAX con BUSCARV o INDICE+COINCIDIR.'
      },
      {
        enunciado: '¿Cuál es la diferencia entre referencia A1 y $A$1?',
        opciones: [
          'Son lo mismo',
          'A1 es relativa (cambia al copiar); $A$1 es absoluta (NO cambia al copiar)',
          '$A$1 cuesta dinero',
          'A1 es para texto, $A$1 para números'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. $ fija la referencia. $A$1 no cambia al copiar la fórmula a otras celdas.',
        feedbackIncorrecto: 'A1 cambia al copiar (relativa); $A$1 no cambia (absoluta). $ fija fila y/o columna.'
      },
      {
        enunciado: '¿Cuál es el resultado de =(3+5)*2?',
        opciones: [
          '13',
          '16',
          '10',
          '8'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Los paréntesis se evalúan primero. (3+5) = 8; 8*2 = 16.',
        feedbackIncorrecto: 'Los paréntesis primero: (3+5)=8; 8*2=16. Sin paréntesis sería 13 (multiplicación antes que suma).'
      },
      {
        enunciado: 'Quieres comparar la cosecha de 5 productores. ¿Qué gráfico es el más adecuado?',
        opciones: [
          'Líneas',
          'Barras horizontales (compara categorías)',
          'Circular con 5 segmentos',
          'Dispersión'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Barras horizontales son ideales para comparar categorías. Circular también sirve con 5 o menos.',
        feedbackIncorrecto: 'Barras horizontales para comparar entre categorías. Circular es alternativa válida con pocas categorías (3-6).'
      },
      {
        enunciado: 'Quieres que las celdas con saldo negativo se vean automáticamente en rojo. ¿Qué herramienta usas?',
        opciones: [
          'Borrar las celdas',
          'Formato condicional con regla \'Valor menor que 0\'',
          'Cambiar la fuente',
          'Hacer un gráfico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Formato condicional = alertas visuales automáticas. Sin él hay que revisar celda por celda.',
        feedbackIncorrecto: 'Formato condicional con regla "Valor menor que 0". Excel pinta en rojo automáticamente sin revisar manualmente.'
      },
      {
        enunciado: 'Tu mini-estudio del consumo de agua del colegio termina con 30 mediciones. ¿Cuál es el siguiente paso responsable?',
        opciones: [
          'Publicar de inmediato',
          'Limpiar datos + analizar + visualizar honestamente + extraer 1 insight accionable + escribir conclusiones con limitaciones',
          'Borrar todo',
          'Hacer otro estudio'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Limpiar + analizar + visualizar + insight + conclusiones con límites reconocidos. Ese es el ciclo del oficio.',
        feedbackIncorrecto: 'Limpiar + analizar + visualizar + insight accionable + conclusiones con limitaciones. Publicar sin ese ciclo es prematuro.'
      },
      {
        enunciado: 'Durante tu sustentación de 4 minutos, ¿qué muestra MEJOR tu oficio?',
        opciones: [
          'Hablar muy rápido para caber en 4 min',
          'Mostrar 1 gráfico honesto + 1 insight accionable + reconocer limitaciones',
          'Decir que el estudio es perfecto',
          'Leer cifras una por una'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Gráfico honesto + insight + límites reconocidos. La honestidad distingue al analista maduro.',
        feedbackIncorrecto: 'Gráfico honesto + insight accionable + limitaciones reconocidas. Esa es la postura profesional madura.'
      },
      {
        enunciado: 'Tienes A2:A20 con cosechas semanales (números). Quieres el PROMEDIO de las cosechas. ¿Qué fórmula?',
        opciones: [
          '=SUMA(A2:A20)',
          '=PROMEDIO(A2:A20)',
          '=MAX(A2:A20)',
          '=CONTAR(A2:A20)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. =PROMEDIO devuelve la media aritmética del rango.',
        feedbackIncorrecto: '=PROMEDIO para la media. Equivale a SUMA/CONTAR sin escribirlo manualmente.'
      },
      {
        enunciado: 'Tu tabla tiene 200 filas pero falta una bitácora (registro de cambios y limpiezas hechas). ¿Por qué importa?',
        opciones: [
          'No importa, las tablas no necesitan bitácora',
          'La bitácora documenta qué decisiones de limpieza hiciste para que otro pueda reproducir el análisis',
          'Solo es decoración',
          'Las bitácoras son obligatorias por ley'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La bitácora hace reproducible el análisis. Sin ella, nadie (ni tú dentro de 6 meses) puede reconstruir qué hiciste.',
        feedbackIncorrecto: 'Documenta las decisiones de limpieza. La reproducibilidad del análisis depende de poder rastrear qué se decidió y por qué.'
      }
    ]
  }
};

export default contenido;
