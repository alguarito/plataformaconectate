/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 6
 * Tema: Fórmulas compuestas: operadores, porcentajes y orden de cálculo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 6,
  resumen:
    'Como el cálculo de la chicha del abuelo: 3 partes de maíz, 1 de panela, después se multiplica por porciones, después se suman especias. El ORDEN no es negociable. Aprendes jerarquía PEMDAS y cálculo de porcentajes correctamente.',
  duracionMin: 90,
  subtema: 'Excel · Fórmulas compuestas · Jerarquía PEMDAS',

  preLectura: {
    porQueImporta:
      'Saber escribir fórmulas correctas te servirá para presupuestos, descuentos, IVA, intereses, promedios ponderados. Una fórmula mal hecha en una nómina o cuota escolar afecta a personas reales — cuidar el orden es ética del cálculo.',
    preguntaDetonante:
      '¿Qué de la receta de la chicha del abuelo — el orden no negociable de pasos — podemos llevar a las fórmulas compuestas?',
    activacion: {
      titulo: 'Calcula sin fórmulas',
      descripcion:
        'En 3 minutos: en parejas calculen sin Excel un descuento del 15% sobre $500.000. Comparen las dos respuestas. Si difieren, ¿por qué? El orden importa antes de Excel.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 5 aprendiste a anclar referencias con $ para fórmulas reusables.',
      siguiente: 'En la sesión 7 representarás los datos con gráficos: barras, líneas, circulares.',
    },
  },

  conceptosClave: [
    {
      categoria: '🧮 Cómo se opera',
      termino: 'Operadores aritméticos',
      definicion:
        'Símbolos de operación: + (suma), − (resta), * (multiplicación), / (división). Funcionan igual que en matemáticas, pero Excel los aplica en jerarquía estricta.',
      ejemplo:
        '=10+5*2 da 20 (no 30) porque la multiplicación va antes que la suma.',
      emoji: '➕',
    },
    {
      categoria: '🧮 Cómo se opera',
      termino: 'Porcentaje',
      definicion:
        'El símbolo % en Excel divide entre 100. Escribir 15% es lo mismo que 0.15. Para descontar 15% multiplicas por (1−15%) o sea por 0.85.',
      ejemplo:
        '=500*15% = 75. Para descontar: =500*(1−15%) = 425. Errores frecuentes: =500−15% da 499.85, no 425.',
      emoji: '💯',
    },
    {
      categoria: '🧮 Cómo se opera',
      termino: 'Potencia',
      definicion:
        'El operador ^ eleva un número a la potencia indicada. Útil para áreas, volúmenes, intereses compuestos.',
      ejemplo:
        '=2^3 = 8 (dos al cubo). =A1^2 calcula el cuadrado del valor en A1. Útil para áreas: =radio^2*PI().',
      emoji: '⏫',
    },
    {
      categoria: '🧮 Cómo se opera',
      termino: 'Paréntesis',
      definicion:
        'Los paréntesis ( ) fuerzan que las operaciones internas se calculen primero, rompiendo la jerarquía. Útiles cuando el orden natural NO da el resultado correcto.',
      ejemplo:
        '=(10+5)*2 da 30 (suma primero). Sin paréntesis =10+5*2 da 20. Cambian el resultado completo.',
      emoji: '📐',
    },
    {
      categoria: '🎯 Cómo se ordena el cálculo',
      termino: 'Jerarquía PEMDAS',
      definicion:
        'Orden de operaciones: Paréntesis → Exponentes → Multiplicación/División → Adición/Sustracción. Operaciones del mismo nivel: izquierda a derecha. Universal en matemáticas y Excel.',
      ejemplo:
        '=2+3*4^2 → primero potencia (4^2=16) → luego mult (3*16=48) → luego suma (2+48=50). PEMDAS al pie de la letra.',
      emoji: '🔢',
    },
    {
      categoria: '🎯 Cómo se ordena el cálculo',
      termino: 'Fórmula encadenada',
      definicion:
        'Combinación de varias operaciones en una sola fórmula. Útil pero peligrosa: una fórmula larga puede tener un error oculto.',
      ejemplo:
        '=A1*0.4+B1*0.3+C1*0.3 calcula nota ponderada con 3 porcentajes. Una buena práctica: descomponer en pasos para verificar.',
      emoji: '🧮',
    },
    {
      categoria: '🎯 Cómo se ordena el cálculo',
      termino: 'Resultado parcial',
      definicion:
        'Calcular paso a paso en celdas separadas para verificar antes de combinar todo. Reduce errores y facilita encontrar el problema.',
      ejemplo:
        'En lugar de =A1*0.4+B1*0.3+C1*0.3 directo, calcular en D1=A1*0.4, E1=B1*0.3, F1=C1*0.3, y luego =D1+E1+F1. Si algo falla, sabes dónde.',
      emoji: '🏷️',
    },
    {
      categoria: '🎯 Cómo se ordena el cálculo',
      termino: 'Trampa del orden',
      definicion:
        'Errores frecuentes al saltarse paréntesis o aplicar mal porcentajes. La verificación con cálculo simple a mano evita propagación de errores.',
      ejemplo:
        '=500−15% NO descuenta 15% — da 499.85. La forma correcta: =500*(1−15%) o =500−(500*15%). El % sin contexto engaña.',
      emoji: '🐞',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Fórmulas y orden de cálculo',
      instrucciones:
        '5 preguntas tipo ICFES sobre operadores, porcentajes, jerarquía y paréntesis.',
      preguntas: [
        {
          enunciado: 'El resultado de =10+5*2 en Excel es:',
          opciones: ['30 (suma primero)', '20 (multiplica primero por jerarquía)', '17', '25'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Exacto. Por jerarquía PEMDAS, la multiplicación va ANTES que la suma. 5*2 = 10, luego 10+10 = 20. Si quisieras 30, deberías escribir =(10+5)*2.',
          feedbackIncorrecto: '❌ La jerarquía PEMDAS dice: multiplicación antes que suma. =10+5*2 → primero 5*2=10 → luego 10+10=20. Para 30 necesitas paréntesis: =(10+5)*2.',
        },
        {
          enunciado: 'Para descontar 15% de $500.000 en Excel, ¿cuál es la fórmula correcta?',
          opciones: ['=500000−15%', '=500000*(1−15%) o =500000−(500000*15%)', '=15−500000%', '=500000/15'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Correcto. =500000*(1−15%) calcula el 85% (lo que queda después del descuento) = 425.000. =500000−(500000*15%) hace lo mismo paso a paso. Ambas son válidas.',
          feedbackIncorrecto: '❌ =500000−15% da 499.999.85 (Excel resta 0.15 unidades, no 15% del total). El % sin multiplicación NO descuenta proporcionalmente. La forma correcta es multiplicar por (1−15%) o restar (500000*15%).',
        },
        {
          enunciado: 'El orden correcto de operaciones (jerarquía PEMDAS) es:',
          opciones: ['Suma → resta → multiplicación → división', 'Paréntesis → potencias → mult/div → sum/rest', 'Izquierda a derecha siempre, sin jerarquía', 'No hay orden, depende de la fórmula'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. PEMDAS es universal: Paréntesis primero, luego Exponentes, luego Multiplicación/División (juntas, izq a der), luego Adición/Sustracción (juntas, izq a der).',
          feedbackIncorrecto: '❌ La jerarquía SÍ existe y es universal. PEMDAS: Paréntesis → Exponentes → Multiplicación/División → Adición/Sustracción. No es izquierda a derecha sin más.',
        },
        {
          enunciado: '¿Qué da =(20+10)*2 en Excel?',
          opciones: ['40', '30', '60', '50'],
          respuestaIndex: 2,
          feedbackCorrecto: '✅ Correcto. Los paréntesis fuerzan la suma primero: (20+10)=30. Luego multiplicación: 30*2=60. Sin paréntesis daría 40 (=20+10*2 → primero 10*2=20 → luego 20+20=40).',
          feedbackIncorrecto: '❌ Los paréntesis CAMBIAN el orden. =(20+10)*2 → suma primero (30) → luego multiplica (60). Si quieres 40 sería =20+10*2 (sin paréntesis: 10*2=20, luego 20+20=40).',
        },
        {
          enunciado: 'Para calcular un descuento del 20% sobre un precio que ya tiene 10% de IVA incluido:',
          opciones: ['Multiplicar el precio original por 0.7 (sumar descuentos)', 'Restar 30% directamente', 'Aplicar IVA primero, luego descontar 20% del total con IVA', 'Multiplicar por -0.3'],
          respuestaIndex: 2,
          feedbackCorrecto: '✅ Excelente. Los descuentos NO se suman porcentualmente. Si el precio sin IVA es P, con IVA es P*1.10. Con descuento 20%: P*1.10*0.80. Es secuencial, no aditivo.',
          feedbackIncorrecto: '❌ Los porcentajes en cadena NO se suman. Aplicar 10% IVA y luego 20% descuento NO equivale a "sumar/restar 30%". Es: precio * (1+10%) * (1−20%) = secuencial.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: 'Pensar el orden antes de calcular es disciplina ancestral. ¿En qué otras decisiones de tu vida el ORDEN cambia el resultado (no solo en fórmulas)?',
    transferencia: 'Esta semana revisa una factura, un recibo o una cuenta de cafetería. ¿Los descuentos están bien calculados? ¿Hay algún error de orden? Aplica PEMDAS en la vida real.',
    cierre: 'La receta de la chicha y la fórmula de Excel comparten algo: el orden no es negociable. Equivocarse cuesta dinero, tiempo o sabor.',
  },
};

export default contenido;
