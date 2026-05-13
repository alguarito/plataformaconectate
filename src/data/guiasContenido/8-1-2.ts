/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 2
 * Tema: Tipos de datos y formato de celdas en Excel.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 2,
  resumen:
    'Cada tipo de dato en Excel tiene su columna y formato. Como en el cuaderno del tendero del barrio: si confunde libras con unidades, pierde dinero al final del mes.',
  duracionMin: 90,
  subtema: 'Excel · Tipos de datos · Formato de celdas',

  preLectura: {
    porQueImporta:
      'Lo que aprendas hoy te servirá toda la vida: registrar gastos, calcular notas, llevar control de ventas, hacer un presupuesto familiar. Saber poner cada dato en su columna con su formato es disciplina que ahorra horas y evita errores.',
    preguntaDetonante:
      '¿Qué del oficio del tendero — su disciplina de poner cada cosa en su columna — podemos llevar a la hoja de cálculo digital?',
    activacion: {
      titulo: 'El recibo que no cuadra',
      descripcion:
        'En 3 minutos: piensa en una vez que recibiste un recibo o factura con un dato confuso (precio mal escrito, fecha rara, columna sin etiqueta). ¿Qué error cometió quien lo hizo? ¿Cómo lo evitarías en Excel?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 1 aprendiste a hacer preguntas a los datos con phronesis.',
      siguiente: 'En la sesión 3 estructurarás tablas con campos, registros y limpieza básica.',
    },
  },

  conceptosClave: [
    {
      categoria: '🔢 Cómo se ingresa el dato',
      termino: 'Número',
      definicion:
        'Valor con el que Excel puede calcular. Se alinea automáticamente a la derecha. Si Excel lo trata como texto, los cálculos fallan.',
      ejemplo:
        'Escribir 1500 (sin comillas ni letras) permite =SUMA. Escribir "1500" (entre comillas) o "mil quinientos" rompe el cálculo.',
      emoji: '🔢',
    },
    {
      categoria: '🔢 Cómo se ingresa el dato',
      termino: 'Texto',
      definicion:
        'Etiqueta o descripción que NO entra en cálculos. Se alinea a la izquierda por defecto. Útil para nombres, descripciones, códigos.',
      ejemplo:
        '"Lápices HB", "Juan Pérez", "Sede A". Los códigos como "08-A" mejor como texto si no quieres que Excel los trate como fecha.',
      emoji: '🔤',
    },
    {
      categoria: '🔢 Cómo se ingresa el dato',
      termino: 'Fecha',
      definicion:
        'Punto en el tiempo. En Excel es realmente un número (días desde 1900) que se muestra con formato de fecha. Permite restar fechas para calcular días transcurridos.',
      ejemplo:
        '12/03/2026 — Excel sabe que es marzo 12. Restando "hoy" menos "tu cumpleaños" obtienes tu edad en días.',
      emoji: '📅',
    },
    {
      categoria: '🔢 Cómo se ingresa el dato',
      termino: 'Moneda',
      definicion:
        'Número con unidad de medida monetaria visible. Se ingresa el valor sin símbolo y se aplica formato moneda (COP, USD, etc.).',
      ejemplo:
        'Escribir 1500 → aplicar formato moneda → se ve $1.500. NO escribir "$1.500" como texto: pierdes el cálculo.',
      emoji: '💰',
    },
    {
      categoria: '🎨 Cómo se presenta el dato',
      termino: 'Formato de celda',
      definicion:
        'Máscara visual que cambia cómo se muestra un valor sin alterar su valor real. Permite mostrar el mismo número como 1500, $1.500 o 1.500,00 según el contexto.',
      ejemplo:
        'El número 0.5 con formato porcentaje se muestra como 50%. Mismo valor, distinta presentación según para quién es.',
      emoji: '🎯',
    },
    {
      categoria: '🎨 Cómo se presenta el dato',
      termino: 'Decimales',
      definicion:
        'Cantidad de cifras después del punto. Define la precisión visible. La precisión real del cálculo no cambia, solo lo que ves.',
      ejemplo:
        'Para edad: 0 decimales (15). Para promedio de notas: 1 decimal (3.7). Para moneda: 0 o 2 decimales (cuantos centavos).',
      emoji: '📐',
    },
    {
      categoria: '🎨 Cómo se presenta el dato',
      termino: 'Alineación',
      definicion:
        'Cómo se acomoda el dato dentro de la celda. Convención profesional: texto a la izquierda, números a la derecha, encabezados centrados.',
      ejemplo:
        'Una columna con 30 nombres a la izquierda y 30 precios a la derecha es legible al primer vistazo. Todo centrado se vuelve confuso.',
      emoji: '🔀',
    },
    {
      categoria: '🎨 Cómo se presenta el dato',
      termino: 'Encabezado',
      definicion:
        'Texto en la primera fila que nombra cada columna. Sin encabezado, una tabla es ilegible para alguien que no la creó.',
      ejemplo:
        '"Producto | Cantidad | Fecha | Precio" en negrita en la fila 1. Convertir esos encabezados en tabla con Ctrl+T para mejor manejo.',
      emoji: '🏷️',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Tipos de datos en Excel',
      instrucciones:
        '5 preguntas tipo ICFES sobre tipos de datos, formatos y errores comunes al ingresar información en hojas de cálculo.',
      preguntas: [
        {
          enunciado:
            'Si en una celda de Excel escribes "12-mar-2026" y luego intentas sumarla con otra celda que contiene "15-mar-2026", ¿qué hace Excel?',
          opciones: [
            'Suma los caracteres de los textos',
            'Devuelve un error porque son textos',
            'Suma los números de serie internos de las fechas',
            'Solo suma los días del mes',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Excelente. Excel almacena las fechas como números de serie internos (12-mar-2026 ≈ 46095). Al sumar, suma esos números. Ojo: sumar fechas raras veces tiene sentido — restar sí (te dice cuántos días pasaron).',
          feedbackIncorrecto:
            '❌ Internamente Excel guarda las fechas como números (días desde 1900). Por eso PUEDE sumarlas — aunque el resultado sea raro semánticamente. Lo útil es RESTARLAS para saber días entre fechas.',
        },
        {
          enunciado:
            '¿Cuál es la mejor manera de ingresar el precio "$1.500" en una hoja de cálculo profesional?',
          opciones: [
            'Escribir "$1.500" como texto entre comillas',
            'Escribir 1500 y aplicar formato de moneda COP',
            'Escribir "mil quinientos" en letras',
            'Usar varias celdas: una con $ y otra con 1500',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. Escribir el número puro (1500) y aplicar formato moneda separa el valor real de su presentación. Así puedes calcular sumas, promedios, descuentos sin que el símbolo $ rompa las fórmulas.',
          feedbackIncorrecto:
            '❌ Si escribes "$1.500" como texto, ningún cálculo funciona. Si lo escribes en letras, peor. La regla: ingresa el número limpio, aplica el formato como capa visual.',
        },
        {
          enunciado:
            'Sara quiere registrar el peso de 30 perros en kg con precisión decimal. ¿Qué tipo de dato y formato debe usar?',
          opciones: [
            'Texto, sin formato',
            'Número con 2 decimales',
            'Fecha, formato corto',
            'Moneda en COP',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. Pesos como 12.5, 8.3, 15.0 son números con decimales. El formato de 2 decimales muestra 12.50 (incluso si es exacto). Ni texto, ni fecha, ni moneda — es número con decimales.',
          feedbackIncorrecto:
            '❌ El peso es claramente un número (cuantitativo continuo). Texto rompe cálculos. Fecha es absurdo para peso. Moneda implicaría que es dinero — no es. Es número con decimales.',
        },
        {
          enunciado:
            'Si una columna se llama "edades" pero algunas celdas tienen "12 años" y otras "12", ¿qué pasa al calcular el promedio?',
          opciones: [
            'Excel suma todas y promedia correctamente',
            'Excel solo promedia los valores que son número puro',
            'Excel devuelve error porque hay textos',
            'Excel convierte los textos a 0',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. =PROMEDIO ignora los textos ("12 años") y solo calcula con los números puros (12). El resultado es real pero está hecho con menos datos de los que parece. Por eso la limpieza importa.',
          feedbackIncorrecto:
            '❌ Excel no falla, pero tampoco trata "12 años" como número. =PROMEDIO ignora los textos. El resultado es real pero solo con los registros numéricos limpios. Por eso la coherencia de tipo importa.',
        },
        {
          enunciado:
            'Antonio tiene una tabla con números a la izquierda y texto al centro. Para una presentación profesional, la mejor práctica visual es:',
          opciones: [
            'Centrar todo para uniformidad',
            'Texto a la izquierda, números a la derecha, encabezados centrados',
            'Todo a la derecha para que se vea moderno',
            'No importa, Excel ajusta solo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. Es convención editorial profesional: texto izquierda (lectura natural), números a la derecha (comparar dígitos alineados), encabezados centrados o en negrita. Centrar todo confunde.',
          feedbackIncorrecto:
            '❌ Centrar todo o todo a la derecha no es convención profesional. La regla universal es: texto izquierda, números derecha, encabezados centrados o en negrita. Da claridad inmediata al lector.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿En qué momento de tu vida te servirá organizar datos con tipos correctos y formato? Piensa en compras, ventas, presupuestos, tareas. Lo que aprendiste hoy te ahorra horas mañana.',
    transferencia:
      'Esta semana: lleva un registro en Excel (o Google Sheets) de algo real (gastos del kiosko, tiempo de pantalla, calificaciones). Aplica los 4 tipos: texto, número, fecha, moneda. Verifica con una fórmula =SUMA o =PROMEDIO.',
    cierre:
      'La disciplina del tendero — cada cosa en su columna — se vuelve hábito digital cuando la repites. Hoy es práctica; mañana, costumbre.',
  },

  saberAncestral: {
    saber:
      'El cuaderno del tendero de barrio en el Valle era una hoja de cálculo antes de que existieran las hojas de cálculo. Cada columna tenía su tipo: fecha, producto, cantidad, precio unitario, total. Confundir libras con unidades, o pesos con dólares, no era error pequeño — era pérdida real al final del mes. El tendero aprendía con la práctica que cada dato tiene su naturaleza y su lugar.',
    fuente: 'Cuaderno del tendero de barrio en el Valle del Cauca',
    preguntaPuente:
      '¿Qué del cuaderno del tendero (cada cosa en su columna, cada tipo respetado) podemos aplicar a Excel hoy? ¿Y qué nuevo problema aparece cuando una hoja electrónica nos deja mezclar tipos sin avisarnos?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Cada tipo de dato tiene origen — y reconocerlo es ya un acto político.',
      preguntaEspejo:
        '¿De dónde vienen los datos que estoy organizando en mi hoja? ¿A quién sirvió primero esa información antes de llegar a mí?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo cotidiano bien hecho es la base de lo extraordinario; cuida la columna antes que el resultado.',
      preguntaEspejo:
        '¿Estoy dispuesto a invertir 5 minutos en formatear bien las columnas o prefiero apresurarme y rehacer el trabajo después?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La calidad informacional empieza por el tipo de dato bien declarado en su origen.',
      preguntaEspejo:
        '¿Mis hojas de cálculo aportan calidad informacional a quien las recibe, o son ruido tipográfico disfrazado de datos?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste que la diferencia entre amateur y profesional con Excel es disciplina con los tipos de dato — no inteligencia bruta.',
    emocional:
      'Resististe la tentación del "ya está, sigamos" — entendiste que el orden inicial te ahorra frustración después.',
    ciudadana:
      'Una hoja de cálculo limpia respeta a quien la lee. Esa cortesía editorial es ciudadanía digital concreta.',
    local:
      'Heredaste el oficio del tendero del Valle: cada cosa en su columna, cada tipo respetado, cada total verificable.',
    intergeneracional:
      'El cuaderno de la abuela y tu Excel comparten el mismo principio. Lo que cambia es la herramienta, no la disciplina.',
  },
};

export default contenido;
