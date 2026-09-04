/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/7/7-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 5,
  titulo: 'Variables — cajas con etiqueta que guardan información',
  resumen: 'Una variable en programación es un nombre simbólico que guarda un valor que puede cambiar.',
  duracionMin: 90,
  subtema: 'Variables — cajas con etiqueta que guardan información',
  preLectura: {
    porQueImporta: 'El producto es la tabla + algoritmo + 5 reglas firmadas.',
    preguntaDetonante: 'En tu vida diaria, ¿qué información necesitas "recordar" cuando haces algo? Cuando juegas, hay un puntaje (cambia). Cuando cocinas, hay un número de personas (cambia). Cuando estudias, hay horas restantes (cambia). Todas son variables.',
    activacion: {
      titulo: '¿Qué información cambia?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Qué información cambia?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: aprendes qué es una variable, conoces los 3 tipos, aplicas las 5 reglas de nombrado, escribes un mini-algoritmo con variables.',
      siguiente: 'Esta semana, identifica variables en al menos 3 situaciones de tu vida real (un juego, una receta, una rutina).'
    }
  },
  conceptosClave: [
    {
      termino: 'Variable',
      definicion: 'Nombre simbólico que guarda un valor que puede cambiar. Como una caja con etiqueta: la etiqueta (nombre) es fija, lo que está adentro (valor) puede variar. Un componente fundamental de toda programación.',
      ejemplo: 'edad = 13 (la variable \'edad\' guarda el número 13). Después puedes hacer edad = 14 y la variable ahora guarda 14. El nombre \'edad\' no cambia.',
      emoji: '📦'
    },
    {
      termino: 'Tipos de variables',
      definicion: 'Hay 3 tipos básicos: (1) NÚMERO (entero o decimal: 13, 1.65), (2) TEXTO o string (entre comillas: \'María\'), (3) BOOLEANO (solo verdadero o falso: tieneMascota = verdadero).',
      ejemplo: 'edad = 13 → número. nombre = \'María\' → texto. esCumpleHoy = verdadero → booleano. Cada tipo tiene operaciones distintas.',
      emoji: '🏷️'
    },
    {
      termino: '5 reglas para nombrar variables',
      definicion: 'Las normas universales: (1) empezar con minúscula, (2) usar camelCase si son varias palabras, (3) nombre descriptivo (no críptico), (4) sin espacios ni acentos, (5) no empezar con número.',
      ejemplo: 'Bien: cantidadMonedasGanadas. Mal: x, 1edad, Cantidad Monedas, cantmonedas. Las 5 reglas hacen tu código entendible.',
      emoji: '📝'
    },
    {
      termino: 'Booleano',
      definicion: 'Tipo de variable que solo guarda 2 valores: verdadero (true) o falso (false). Sin matices. Su nombre suele empezar con verbo es-, tiene-, está-. Fundamental para condicionales (S6).',
      ejemplo: 'tieneMascota = verdadero. esCumpleHoy = falso. puertaAbierta = verdadero. El booleano permite decisiones binarias en programación.',
      emoji: '🔘'
    },
    {
      termino: 'Asignación (=)',
      definicion: 'Operación que pone un valor adentro de una variable. Se escribe con el signo igual. NO es el igual matemático: en programación, el = es \'asigna esto a esta variable\'.',
      ejemplo: 'edad = 13 → asigna el valor 13 a la variable edad. nombre = \'María\' → asigna María a la variable nombre. tieneMascota = verdadero → asigna verdadero.',
      emoji: '✏️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces las variables?',
      instrucciones: '5 preguntas para verificar que dominas las variables y los 3 tipos.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos nombres de variable SIGUE las 5 reglas?',
          opciones: [
            'x',
            'Cantidad Monedas',
            'cantidadMonedasGanadas',
            '1edad'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. cantidadMonedasGanadas: minúscula inicial, camelCase, descriptivo, sin espacios, no empieza con número. Cumple las 5 reglas.',
          feedbackIncorrecto: 'cantidadMonedasGanadas cumple las 5 reglas. \'x\' no es descriptivo; \'Cantidad Monedas\' tiene espacio; \'1edad\' empieza con número.'
        },
        {
          enunciado: '¿Qué tipo de variable es \'tieneMascota = verdadero\'?',
          opciones: [
            'Número.',
            'Booleano (solo verdadero o falso).',
            'Texto.',
            'Lista.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Booleano: solo 2 valores posibles (verdadero o falso). Su nombre empieza con \'tiene-\' lo cual sugiere booleano. Útil para condicionales.',
          feedbackIncorrecto: 'Booleano. Solo verdadero o falso. Los nombres con \'tiene-\', \'es-\', \'está-\' suelen ser booleanos. Útiles para tomar decisiones.'
        },
        {
          enunciado: 'Tu algoritmo cuenta cuántas veces se repite algo. ¿Qué variable creas?',
          opciones: [
            'Una variable numérica (entera) que empieza en 0 y se suma 1 cada vez.',
            'Un texto.',
            'Un booleano.',
            'Ninguna.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Variable numérica entera como contador. Empieza en 0 y se incrementa (suma 1) cada repetición. Es patrón clásico de programación.',
          feedbackIncorrecto: 'Variable numérica entera (contador). Empieza en 0. Se suma 1 cada repetición. Es patrón fundamental. Lo verás en bucles (S7).'
        },
        {
          enunciado: 'Escribes \'edad = 13\'. Después escribes \'edad = edad + 1\'. ¿Qué pasa?',
          opciones: [
            'Da error.',
            'Crea una nueva variable.',
            'Borra la variable.',
            'La variable edad ahora vale 14 (cambió de 13 a 14).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. = es asignación. \'edad + 1\' calcula 14 (porque edad valía 13), y ese 14 se asigna a la variable edad. Ahora edad vale 14.',
          feedbackIncorrecto: 'Edad ahora vale 14. La operación \'edad + 1\' lee el valor actual (13) y calcula 14. Después el = asigna 14 a la variable edad.'
        },
        {
          enunciado: 'Necesitas guardar el nombre de un usuario en una variable. ¿Cómo lo escribes?',
          opciones: [
            'nombre = María (sin comillas).',
            'nombre = \'María\' (con comillas porque es texto).',
            'nombre = 13.',
            'Maria nombre.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Texto entre comillas. nombre = \'María\'. Sin comillas, el programa cree que María es otra variable. Las comillas le dicen \'esto es texto literal\'.',
          feedbackIncorrecto: 'Texto entre comillas: nombre = \'María\'. Sin comillas, programa cree que María es otra variable. Comillas distinguen texto de nombres.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuántas cosas en mi vida tengo sin nombrar bien y que por eso me confunden?',
    transferencia: 'Esta semana, identifica variables en al menos 3 situaciones de tu vida real (un juego, una receta, una rutina).',
    cierre: 'Al terminar la clase: (1) podrás identificar qué es una variable y los 3 tipos básicos; (2) sabrás aplicar las 5 reglas para nombrar variables; (3) podrás evaluar si un algoritmo necesita variables o no; (4) habrás creado un mini-algoritmo que usa 3 variables.'
  },
  saberAncestral: {
    saber: 'Doña Sofía, la tendera del barrio de Cartago, tenía un sistema de cajitas en su tienda. Cada cajita tenía una etiqueta escrita a mano con el nombre del producto: "arroz", "frijol", "café", "azúcar", "sal", "maíz molido". Adentro de cada cajita iba el producto correspondiente. Cuando un cliente pedía "250 gramos de café", doña Sofía iba a la cajita café, sacaba 250 gramos, y entregaba. Si la cajita estaba vacía, doña Sofía la rellenaba. Si quería cambiar de un café por otro, vaciaba la cajita y ponía el nuevo. Lo importante: la cajita era un lugar; lo que iba adentro podía cambiar. Esa idea — "un nombre fijo, un contenido variable" — es exactamente lo que en programación llamamos variable. Doña Sofía sabía gestionar variables sin haberlo estudiado. Hoy aprendes el concepto explícito.',
    preguntaPuente: 'En tu vida diaria, ¿qué información necesitas "recordar" cuando haces algo? Cuando juegas, hay un puntaje (cambia). Cuando cocinas, hay un número de personas (cambia). Cuando estudias, hay horas restantes (cambia). Todas son variables.'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del nombrar las cosas)',
      lente: 'lente del nosotros',
      cita: '"Nombrar las cosas correctamente es el primer acto de pensamiento claro."',
      preguntaEspejo: '¿Cuántas cosas en mi vida tengo sin nombrar bien y que por eso me confunden?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"La palabra exacta resuelve confusiones que las explicaciones largas no logran."',
      preguntaEspejo: '¿Cuando escribo (texto, código, listas), mi yo del futuro lee con claridad o tiene que adivinar?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del oficio de programar)',
      lente: 'lente de la infoesfera',
      cita: '"El 50 % del oficio de programar es nombrar bien. El otro 50 % es lógica. Los buenos programadores invierten en ambos."',
      preguntaEspejo: '¿Voy a ser un programador (o pensador) que nombra bien, o uno que mete x en todas partes?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar qué es una variable y los 3 tipos básicos; (2) sabrás aplicar las 5 reglas para nombrar variables; (3) podrás evaluar si un algoritmo necesita variables o…',
    emocional: 'En programación, el nombre de una variable es comunicación con tu yo del futuro.',
    ciudadana: 'Las variables se llaman "variables" porque varían (cambian).',
    local: 'Antes de salir, intercambia con un compañero: ¿tus nombres de variable son claros?',
    intergeneracional: 'Hay un dicho en programación: "solo hay dos cosas difíciles: nombrar bien y manejar la caché".'
  }
};

export default contenido;
