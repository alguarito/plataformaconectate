/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 2
 * (sesión global 12 — Tablas de verdad).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 2,
  resumen:
    'Como el juego "verdadero o falso" de las abuelas: cuidar la coherencia entre afirmaciones. Aprendes a construir tablas de verdad para verificar lógica antes de programar.',
  duracionMin: 90,
  subtema: 'Lógica · Tablas de verdad · AND/OR/NOT',

  preLectura: {
    porQueImporta:
      'Saber construir tablas de verdad te da poder sobre la lógica: detectas reglas mal escritas, contradicciones invisibles, expresiones equivalentes. Es habilidad de analista, no solo de programador.',
    preguntaDetonante:
      '¿Qué del juego de las abuelas — el cuidado de la consistencia entre afirmaciones — podemos llevar a las tablas de verdad de la programación?',
    activacion: {
      titulo: 'La regla familiar mal entendida',
      descripcion:
        'En 5 minutos: en parejas recuerden una regla familiar (de casa o colegio) donde alguien la entendió distinto. ¿Era un AND o un OR mal interpretado? La tabla de verdad lo aclararía.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 11 aprendiste estructuras condicionales con AND/OR/NOT.',
      siguiente: 'En la sesión 13 representarás algoritmos con pseudocódigo y diagramas de flujo.',
    },
  },

  conceptosClave: [
    { categoria: '🔣 Lógica formal', termino: 'Proposición', definicion: 'Afirmación que solo puede ser Verdadera (V) o Falsa (F). No admite "tal vez". Es la unidad mínima de la lógica.', ejemplo: '"Está lloviendo" es proposición (V o F). "¿Está lloviendo?" no lo es (es pregunta).', emoji: '💬' },
    { categoria: '🔣 Lógica formal', termino: 'Conjunción (AND)', definicion: 'Operador que produce V solo cuando AMBAS proposiciones son V. Si una falla, falla todo. Es el operador exigente.', ejemplo: '"Llueve AND hace frío": V solo si llueve Y hace frío. Si solo llueve, F.', emoji: '∧' },
    { categoria: '🔣 Lógica formal', termino: 'Disyunción (OR)', definicion: 'Operador que produce V si AL MENOS UNA proposición es V. Solo da F cuando ambas fallan. Es el operador permisivo.', ejemplo: '"Llueve OR hace frío": V si llueve, V si hace frío, V si ambas. Solo F si ninguna pasa.', emoji: '∨' },
    { categoria: '🔣 Lógica formal', termino: 'Negación (NOT)', definicion: 'Operador unario que invierte el valor: V se vuelve F y viceversa. Es la negación lógica.', ejemplo: 'Si "llueve" es V, "NOT llueve" es F. Si "llueve" es F, "NOT llueve" es V.', emoji: '¬' },
    { categoria: '📐 Cómo se construye', termino: 'Tabla 2 entradas', definicion: 'Tabla con 2 variables (A, B) y 4 filas (2² = 4 casos posibles): FF, FV, VF, VV. Es la tabla mínima.', ejemplo: 'Para evaluar "A AND B" hay 4 casos: solo VV da V; los demás dan F.', emoji: '🗂️' },
    { categoria: '📐 Cómo se construye', termino: 'Tabla 3 entradas', definicion: 'Tabla con 3 variables (A, B, C) y 8 filas (2³ = 8 casos). Útil para expresiones más complejas.', ejemplo: 'Para evaluar "(A OR B) AND C" hay 8 casos. Solo algunos dan V.', emoji: '📋' },
    { categoria: '📐 Cómo se construye', termino: 'Equivalencia lógica', definicion: 'Dos expresiones son equivalentes si producen la misma columna de resultados en su tabla de verdad, aunque se escriban distinto.', ejemplo: '"NOT (A AND B)" es equivalente a "NOT A OR NOT B" (Ley de De Morgan).', emoji: '⇔' },
    { categoria: '📐 Cómo se construye', termino: 'Caso límite', definicion: 'Caso especial que revela el carácter de la expresión: tautología (siempre V), contradicción (siempre F) o contingencia (V o F según el caso).', ejemplo: '"A OR NOT A" siempre es V (tautología). "A AND NOT A" siempre es F (contradicción).', emoji: '🎯' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Tablas de verdad',
    instrucciones: '5 preguntas tipo ICFES sobre AND, OR, NOT y construcción de tablas.',
    preguntas: [
      { enunciado: 'Si "Llueve" es V y "Hace frío" es F, ¿cuál es el valor de "Llueve AND Hace frío"?', opciones: ['V', 'F', 'No se puede determinar', 'V o F según contexto'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. AND requiere que AMBAS sean V. Como "Hace frío" es F, la conjunción es F.', feedbackIncorrecto: '❌ El AND es exigente: necesita TODAS las proposiciones en V. Como "Hace frío" es F, basta para que toda la conjunción sea F.' },
      { enunciado: '¿Cuántas filas tiene la tabla de verdad de una expresión con 3 variables?', opciones: ['3 filas', '6 filas', '8 filas (2³)', '9 filas (3²)'], respuestaIndex: 2, feedbackCorrecto: '✅ Sí. Con 3 variables hay 2³ = 8 combinaciones posibles. Cada variable puede ser V o F → 2×2×2 = 8.', feedbackIncorrecto: '❌ Recuerda: con n variables hay 2ⁿ casos posibles. 3 variables → 2³ = 8 filas. Cada nueva variable DUPLICA los casos.' },
      { enunciado: '"NOT (A AND B)" es lógicamente equivalente a:', opciones: ['NOT A AND NOT B', 'NOT A OR NOT B', 'A OR B', 'A AND B'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Es la Ley de De Morgan: NOT(A AND B) = NOT A OR NOT B. Negar una conjunción la convierte en disyunción de negaciones.', feedbackIncorrecto: '❌ Ley de De Morgan: NOT(A AND B) = NOT A OR NOT B. Verificarla con tabla de verdad: las 4 filas dan los mismos resultados.' },
      { enunciado: 'En la frase "Si saco buena nota O entreno duro, mis padres me dejan ir", ¿qué tipo de operador está implícito?', opciones: ['AND (necesito ambas)', 'OR (basta con una)', 'NOT (no necesito ninguna)', 'Ninguno'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. La palabra "O" en español puede ser inclusiva o exclusiva, pero aquí es OR inclusivo: BASTA una de las dos condiciones.', feedbackIncorrecto: '❌ La palabra "O" en esta regla familiar es OR inclusivo: con UNA sola condición cumplida (buena nota O entrenamiento), ya alcanza. Si fuera AND diría "Y".' },
      { enunciado: 'Una expresión que SIEMPRE es V independiente de los valores de sus variables se llama:', opciones: ['Contradicción', 'Contingencia', 'Tautología', 'Negación'], respuestaIndex: 2, feedbackCorrecto: '✅ Exacto. Una tautología es siempre V (ej: "A OR NOT A"). Útil cuando la regla quiere capturar TODOS los casos.', feedbackIncorrecto: '❌ Tautología = siempre V. Contradicción = siempre F. Contingencia = depende. Negación es operador. La que es siempre V es tautología.' },
    ],
  }],

  postLectura: {
    reflexion: 'Las tablas de verdad son herramientas para detectar contradicciones y aclarar reglas. ¿En qué reglas de tu vida (familia, colegio, trabajo) sería útil aplicarlas?',
    transferencia: 'Esta semana: encuentra una regla escrita (en redes, en un reglamento, en una promoción) que use "y" u "o". Construye su tabla de verdad. ¿Es coherente? ¿Hay casos no contemplados?',
    cierre: 'El juego de las abuelas y la lógica formal comparten propósito: la palabra dada se sostiene cuando es coherente consigo misma.',
  },

  saberAncestral: {
    saber:
      'El juego de "verdadero o falso" que las abuelas del Valle y el Pacífico jugaban con los nietos no era pasatiempo: era entrenamiento de coherencia. Una abuela decía afirmaciones y los niños evaluaban si eran verdaderas, falsas o contradictorias. "Llueve y no llueve" — eso es contradicción, no se sostiene. "Si llueve, traigo paraguas" — eso es regla con dos casos posibles. La lógica formal con tablas de verdad codifica lo que el juego ancestral entrenaba sin nombres técnicos.',
    fuente: 'Juego de "verdadero o falso" en cocinas y patios del Valle y el Pacífico',
    preguntaPuente:
      '¿Qué hacía que el juego de las abuelas funcionara como entrenamiento cognitivo? ¿Y qué pasa hoy cuando las reglas de redes sociales o reglamentos contienen contradicciones lógicas que nadie detecta?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Detectar contradicciones en las reglas que rigen mi vida es ejercicio liberador, no académico.',
      preguntaEspejo:
        '¿Qué regla en mi colegio, mi familia o mi trabajo contiene contradicciones que nadie ha nombrado? ¿Qué cambia si las pongo en tabla de verdad?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La coherencia entre lo que dices y lo que haces es la mayor forma de virtud silenciosa.',
      preguntaEspejo:
        '¿Mis propias afirmaciones diarias serían coherentes si las pusiera en tabla de verdad? ¿Dónde me contradigo sin notarlo?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La coherencia lógica es la base de la confianza en cualquier infoesfera — desde la familia hasta la democracia.',
      preguntaEspejo:
        '¿Cuántas reglas que sigo a diario tienen coherencia interna probada? ¿Cuántas las acepté sin verificar?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a probar la coherencia lógica de cualquier regla — herramienta para defenderte de reglamentos mal escritos.',
    emocional:
      'Sentiste la satisfacción de detectar una contradicción que estaba a la vista pero nadie había nombrado.',
    ciudadana:
      'La lógica formal aplicada a reglamentos, leyes y promociones es defensa ciudadana cotidiana.',
    local:
      'Heredaste el juego de las abuelas: probar la coherencia de la palabra antes de aceptarla.',
    intergeneracional:
      'El juego de patio y la lógica matemática comparten gramática. La palabra dada se sostiene cuando es coherente consigo misma — antes y ahora.',
  },
};

export default contenido;
