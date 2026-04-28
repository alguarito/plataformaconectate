/**
 * Guía 11 · Grado 8° · Período 2 · Sesión 1
 * Lógica avanzada I: estructuras condicionales anidadas (if-else-if)
 *
 * Producto MILC: algoritmo comentado o diagrama de flujo con prueba de casos
 * y reflexión sobre decisiones.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 1,
  resumen:
    'Cómo un programa toma decisiones complejas: anidar if/else if/else para clasificar casos.',
  duracionMin: 90,
  subtema: 'Lógica de Control',

  preLectura: {
    porQueImporta:
      'Cada vez que tu celular decide si te muestra una notificación, cuando un videojuego elige qué enemigo aparece, o cuando Excel pinta una celda en rojo si el valor está bajo — eso es lógica condicional anidada. Vamos a aprender a escribirla nosotros.',
    preguntaDetonante:
      '¿Cómo decide tu celular si te muestra el mensaje de "batería baja", "batería crítica" o "apagado por batería"?',
    activacion: {
      titulo: 'Calienta motores: el portero del club',
      descripcion:
        'En grupos de 3, escriban cómo decide un portero quién entra a un evento: ¿solo lista? ¿lista + edad? ¿lista + edad + pase VIP? Comparten 2 minutos. Notarán que ya están pensando en condicionales anidadas — solo que en español, no en código.',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'En el período anterior usaste IF simple en Excel y Scratch. Hoy vamos al siguiente nivel: decisiones que tienen varios caminos posibles.',
      siguiente:
        'En la próxima sesión combinaremos esto con bucles (for/while) para automatizar decisiones repetitivas — ahí construirás tu primer mini-programa que clasifica datos.',
    },
  },

  conceptosClave: [
    {
      termino: 'Condición',
      definicion:
        'Pregunta lógica que un programa hace para decidir qué camino seguir. Solo tiene dos respuestas: verdadero (sí) o falso (no).',
      ejemplo: 'nota >= 3.0 → ¿la nota es 3.0 o más? Si sí, "aprueba".',
      emoji: '❓',
    },
    {
      termino: 'Rama',
      definicion:
        'Bloque de instrucciones que se ejecuta cuando una condición se cumple. Cada if, else if y else es una rama distinta.',
      ejemplo:
        'if (edad >= 18) imprime "adulto" — esa línea es la rama del if.',
      emoji: '🌿',
    },
    {
      termino: 'Anidación',
      definicion:
        'Poner una estructura condicional dentro de otra. Como cajas dentro de cajas. Permite clasificaciones más finas.',
      ejemplo:
        'Primero pregunta si tiene boleto. Si sí, pregunta si es VIP. Si no es VIP, pregunta el sector.',
      emoji: '📦',
    },
    {
      termino: 'Operador lógico',
      definicion:
        'Conector que combina varias condiciones: AND (todas verdaderas), OR (al menos una), NOT (la opuesta).',
      ejemplo: 'edad >= 18 AND tiene_cedula → debe cumplirse las dos.',
      emoji: '🔗',
    },
    {
      termino: 'Prueba de casos',
      definicion:
        'Probar el programa con valores de frontera, esperados y contrarios para encontrar errores antes de que los encuentre el usuario.',
      ejemplo:
        'Si la nota mínima de aprobación es 3.0, prueba con 2.9, 3.0, 3.1, 0 y 5.',
      emoji: '🔬',
    },
  ],

  laboratorios: [
    /* L1 — Visualización: paso a paso de un if anidado real */
    {
      tipo: 'visualizacion',
      titulo: 'Paso a paso: un if-else-if que clasifica notas',
      instrucciones:
        'Recorre el programa línea por línea. En cada paso ves qué decisión toma el computador y por qué.',
      pasos: [
        {
          titulo: 'El programa empieza',
          texto:
            'El usuario ingresa una nota. Imagina que ingresa 3.4. La variable `nota` queda con el valor 3.4.',
          codigo: 'nota = 3.4',
          destacar: [1],
        },
        {
          titulo: 'Primera pregunta: ¿es excelente?',
          texto:
            'Pregunta si nota es ≥ 4.5. Como 3.4 < 4.5, la respuesta es FALSO. El programa NO entra a esta rama y pasa a la siguiente.',
          codigo:
            'if (nota >= 4.5) {\n  imprime "Excelente"\n}',
          destacar: [1],
        },
        {
          titulo: 'Segunda pregunta: ¿es aprobado?',
          texto:
            'Pregunta else if (nota >= 3.0). Como 3.4 ≥ 3.0, la respuesta es VERDADERO. ENTRA a esta rama y ejecuta su instrucción.',
          codigo:
            'else if (nota >= 3.0) {\n  imprime "Aprobado"\n}',
          destacar: [1, 2, 3],
        },
        {
          titulo: 'El programa termina',
          texto:
            'Una vez ENTRA a una rama, las demás se ignoran. Aunque después haya un else con "Reprobado", ya no se ejecuta. El programa imprime "Aprobado" y termina.',
          codigo: 'else {\n  imprime "Reprobado"\n}',
          destacar: [],
        },
        {
          titulo: 'Resumen de la decisión',
          texto:
            'Para nota = 3.4 → revisó 2 condiciones, entró a una sola rama, imprimió un solo resultado. Esa es la magia del if-else-if: clasifica sin solapamientos.',
        },
      ],
    },

    /* L2 — Quiz: 5 preguntas con feedback inmediato */
    {
      tipo: 'quiz',
      titulo: 'Quiz: ¿qué imprime este programa?',
      instrucciones:
        'Lee cada caso y elige la respuesta correcta. Si te equivocas, lee la explicación — eso vale más que la nota.',
      preguntas: [
        {
          enunciado:
            'Si nota = 5.0, ¿qué imprime?\nif (nota >= 4.5) imprime "Excelente"\nelse if (nota >= 3.0) imprime "Aprobado"\nelse imprime "Reprobado"',
          opciones: ['Excelente', 'Aprobado', 'Excelente y Aprobado', 'Reprobado'],
          respuestaIndex: 0,
          feedbackCorrecto:
            '¡Bien! 5.0 cumple la primera condición y entra a su rama. Las demás se ignoran.',
          feedbackIncorrecto:
            'Recuerda: en if-else-if, una vez se cumple UNA condición, el resto se ignora. 5.0 ≥ 4.5 es verdadero, entra ahí y termina.',
        },
        {
          enunciado:
            'Si nota = 2.9, ¿qué imprime el mismo programa?',
          opciones: ['Excelente', 'Aprobado', 'Reprobado', 'Nada'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. 2.9 < 4.5 (falso) y 2.9 < 3.0 (falso), por eso cae al else.',
          feedbackIncorrecto:
            'El else captura todos los casos que NO cumplieron las condiciones anteriores. 2.9 no es ≥ 4.5 ni ≥ 3.0, así que cae al else.',
        },
        {
          enunciado:
            '¿Qué pasa si cambias el orden a este?\nif (nota >= 3.0) imprime "Aprobado"\nelse if (nota >= 4.5) imprime "Excelente"\nPara nota = 5.0, ¿qué imprime?',
          opciones: ['Excelente', 'Aprobado', 'Las dos', 'Error'],
          respuestaIndex: 1,
          feedbackCorrecto:
            '¡Atrapaste el bug! Como 5.0 ≥ 3.0 es verdadero, entra a esa rama y ya nunca evalúa la segunda. Por eso el ORDEN importa: de más estricto a más laxo.',
          feedbackIncorrecto:
            'Truco: la primera condición que se cumple gana. 5.0 ≥ 3.0 es verdadero (la primera), entonces imprime "Aprobado" y nunca llega a evaluar la segunda. El orden importa en if-else-if.',
        },
        {
          enunciado:
            '¿Cuál operador lógico usarías para "edad mayor a 18 Y tener cédula"?',
          opciones: ['OR', 'AND', 'NOT', 'IF'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. AND exige que las dos condiciones sean verdaderas para que el resultado sea verdadero.',
          feedbackIncorrecto:
            'AND (Y) es para "ambas a la vez". OR (O) es para "al menos una". NOT (NO) niega. Aquí necesitamos las dos al tiempo: AND.',
        },
        {
          enunciado:
            'Estás probando un programa que clasifica edades. ¿Cuál es el mejor caso de prueba para encontrar bugs?',
          opciones: [
            'Solo probar con edad = 20',
            'Probar con 17, 18, 19 (frontera)',
            'Probar con 100',
            'No probar, ya quedó',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Los bugs viven en las fronteras. Probar 17, 18, 19 te dice si la condición usa >= o > (un detalle que confunde mucho).',
          feedbackIncorrecto:
            'En lógica condicional, los bugs viven en las fronteras (18 vs 19, >= vs >). Probar valores cercanos al límite revela errores que un caso normal nunca detectaría.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      'Mira atrás 24 horas. ¿En qué decisión que tomaste hoy aplicaste condiciones anidadas sin saberlo? (¿Cómo elegiste qué ponerte? ¿Qué ruta tomaste? ¿A quién le respondiste primero?). Escríbelo.',
    transferencia:
      'Encuentra 3 ejemplos de if-else-if en apps que uses todos los días. Pista: filtros de Instagram, recomendaciones de Spotify, iconos de batería de tu celular.',
    cierre:
      'En MILC, evaluar no es calificar — es preguntarse: "¿cómo cuido lo que aprendí, y a quién sirve?". Una buena lógica condicional no solo evita errores: protege a los usuarios de malas decisiones automáticas. Esa es tu praxis hoy.',
  },
};

export default contenido;
