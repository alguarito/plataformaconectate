/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 8
 * Tema: Era digital — del ábaco al chip.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-8.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 8,
  titulo: 'Era digital — del ábaco al chip',
  ocultarPDF: false,
  resumen:
    'Haces el mismo cálculo con 3 instrumentos (mente, papel, calculadora) y descubres qué capacidades cognitivas estás cultivando o atrofiando.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Externalización del cálculo',

  saberAncestral: {
    saber:
      'El quipu inca guardaba la memoria contable de imperios enteros con nudos en cuerdas. El ábaco mesoamericano (nepohualtzintzin) hacía cuentas complejas con cuentas de maíz. Los conteos por marcas en pared de pastores andinos llevaban el registro de ovejas. Calcular sin la mente, externalizando la memoria en un objeto, no lo inventó Silicon Valley — lo inventaron pueblos hace milenios.',
    fuente: 'Quipu inca, ábaco mesoamericano (nepohualtzintzin), conteos andinos',
    preguntaPuente:
      '¿Qué cálculos haces a diario sin pensar gracias al celular? ¿Cuáles podrías hacer sin él? ¿Cuáles ya se te están olvidando?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Quipu, ábaco, chip', duracionMin: 8 },
    { numero: 2, iconos: ['🔎'], titulo: 'Experimento de 3 instrumentos', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 momentos del cálculo externo', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Bitácora + reflexión crítica', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Cada vez que delegas un cálculo o un dato a la pantalla, repites el gesto del quipucamayoc inca. Lo nuevo no es externalizar la mente — es la velocidad. La pregunta de tu generación es si esa velocidad te hace más capaz o solo más dependiente.',
    preguntaDetonante:
      '¿Cuál fue la última vez que sumaste mentalmente 3 cifras sin sacar el celular? Si no recuerdas, hay un dato ahí sobre tu propia cognición.',
    activacion: {
      titulo: 'Test rápido del cálculo mental',
      descripcion:
        'En 1 minuto, sin papel ni celular, calcula: 47 + 138 + 92. Anota tu resultado y tu tiempo. Luego verifica con la calculadora. ¿Cuánto te costó? ¿Te equivocaste? Ese mini-experimento es la antesala de la sesión.',
      duracionMin: 2,
    },
    conexion: {
      anterior:
        'En la sesión 7 viste cómo la electricidad reorganiza tu día. Hoy ves cómo el chip reorganiza tu cognición.',
      siguiente:
        'En la sesión 9 estudiarás tecnologías propias regenerativas que sobrevivieron sin chip ni electricidad — saberes que hoy se reevalúan.',
    },
  },

  conceptosClave: [
    {
      termino: 'Cálculo mental',
      definicion:
        'Hacer la cuenta con la mente sola, sin objeto externo. La forma más antigua de calcular y la primera que se atrofia cuando delegas todo a la pantalla.',
      ejemplo:
        'Tu abuelo calcula el precio total del mercado mentalmente mientras camina. Tú sacas el celular. Misma operación, distinta dependencia.',
      emoji: '🧠',
    },
    {
      termino: 'Cálculo físico (quipu, ábaco)',
      definicion:
        'Externalizar el conteo en un objeto manipulable. El quipucamayoc inca y el contador del ábaco no son primitivos — son ingenieros cognitivos del primer cálculo distribuido.',
      ejemplo:
        'El quipu guardaba tributos de un imperio. Sin papel, sin chip, con cuerdas y nudos. Funcionaba para millones de personas durante siglos.',
      emoji: '🪢',
    },
    {
      termino: 'Cálculo mecánico',
      definicion:
        'Máquinas que calculan con ruedas y engranajes (Pascalina 1642, máquina de Babbage 1822). Eslabón entre el ábaco y el computador digital.',
      ejemplo:
        'La Pascalina de Blaise Pascal sumaba con ruedas dentadas. Era enorme, frágil, lenta — pero ya no requería que el humano hiciera la operación.',
      emoji: '⚙️',
    },
    {
      termino: 'Cálculo digital',
      definicion:
        'Chips que operan con electricidad y miniaturizan todo lo anterior. Lo que tu celular hace en milisegundos requería habitaciones enteras en 1950.',
      ejemplo:
        'La calculadora del celular hace en 1 segundo lo que una máquina de los años 60 hacía en horas y ocupaba 100 m².',
      emoji: '💻',
    },
    {
      termino: 'Ganancia con costo cognitivo',
      definicion:
        'Toda externalización del cálculo gana precisión, velocidad y memoria, pero pierde ejercicio mental si no calculas a la vez. Lo que dejas de practicar, lo dejas de saber.',
      ejemplo:
        'Antes recordabas 30 números de teléfono. Hoy no recuerdas ni el de tu mejor amigo — está en el celular. La memoria no se atrofió: la delegaste.',
      emoji: '⚖️',
    },
    {
      termino: 'Cognición distribuida (Floridi)',
      definicion:
        'Tu mente hoy no es solo cerebro: incluye celular, Google, cuentas, algoritmos. Vives "onlife" — ni online ni offline, una vida híbrida donde lo digital es parte del yo.',
      ejemplo:
        'Cuando piensas "¿qué hago el sábado?" y abres el celular para ver el calendario, tu mente está distribuida. La decisión la tomas tú, pero la memoria vive en la nube.',
      emoji: '🌐',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Experimento de los 3 instrumentos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Suma estos 10 números: 47, 138, 92, 215, 56, 304, 89, 173, 462, 218.',
        'Primero mentalmente: anota tu resultado y el tiempo que te tomó.',
        'Después con papel y lápiz: anota tu resultado y el tiempo.',
        'Después con calculadora del celular: anota resultado y tiempo. Verifica cuál es el resultado correcto.',
      ],
      cuaderno: {
        titulo: '3 instrumentos, 1 cálculo',
        formato: 'Tabla 4 columnas (Instrumento | Resultado | Tiempo | Errores), 3 filas',
        extension: '3 filas + 1 párrafo de observación',
      },
      criterios: [
        'Los 3 métodos están con resultado y tiempo registrados',
        'Identifiqué errores honestamente (cuándo me equivoqué)',
        'Reconozco qué método me dio mejor resultado y por qué',
        'No hice trampa (usé celular solo en el tercer método)',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: '4 momentos del cálculo externo',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada momento (mental, físico, mecánico, digital) escribe una ficha.',
        'En cada ficha: ejemplo histórico + ejemplo cotidiano tuyo.',
        'Anota qué capacidad humana entrena o atrofia cada uno.',
        'Cierra con honestidad: ¿qué capacidad cognitiva tuya estás atrofiando ahora mismo?',
      ],
      cuaderno: {
        titulo: '4 momentos del cálculo externo',
        formato: '4 fichas con ejemplo histórico + ejemplo tuyo + capacidad entrena/atrofia',
        extension: '4 fichas + 1 párrafo final',
      },
      criterios: [
        'Cada ficha tiene un ejemplo histórico y uno tuyo',
        'Distinguís claramente los 4 momentos',
        'Reconoces honestamente qué capacidad estás atrofiando',
        'Puedes explicar los 4 sin notas',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Bitácora completa + reflexión crítica',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Copia los datos del experimento de la Actividad 1 (tabla con los 3 métodos).',
        'Escribe 3 observaciones sobre qué pasó (sin juicio).',
        'Escribe 2-3 reflexiones personales sobre tu propia cognición.',
        'Cierra con 1 propuesta concreta: ¿qué cálculo vas a hacer mentalmente esta semana en vez de delegar al celular?',
      ],
      cuaderno: {
        titulo: 'Bitácora del experimento del cálculo',
        formato: 'Tabla + 3 observaciones + 2-3 reflexiones + 1 propuesta',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Tabla completa con los 3 métodos',
        '3 observaciones del experimento sin juicio',
        '2-3 reflexiones personales honestas (no clichés)',
        '1 propuesta concreta y específica para la semana',
        'Reconoces al menos UNA capacidad mental que estás atrofiando',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la bitácora de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee la bitácora del compañero.',
        'Califica del 1 al 5: (a) ¿datos completos del experimento?, (b) ¿reflexiones honestas, no clichés?, (c) ¿propuesta concreta y accionable?',
        'Marca con ✨ la reflexión más honesta y con 🚩 las observaciones genéricas.',
        'Conversen 5 min: ¿propondrían cumplir la propuesta del otro? ¿Por qué sí o no?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la bitácora de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Marcaste reflexiones honestas y observaciones genéricas',
        'La conversación cerró con compromiso o desacuerdo claro',
        'No copiaste su reflexión en tu propio cuaderno',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los momentos del cálculo',
      instrucciones:
        '5 preguntas para confirmar que entiendes la historia del cálculo externalizado. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos NO es un cálculo externalizado precolombino?',
          opciones: ['Quipu inca', 'Ábaco mesoamericano (nepohualtzintzin)', 'Calculadora de bolsillo', 'Conteos andinos por marcas'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Quipu, ábaco mesoamericano y conteos andinos son precolombinos. La calculadora de bolsillo es de 1970 — eslabón reciente en una historia de milenios.',
          feedbackIncorrecto:
            'La calculadora de bolsillo es de 1970. Quipu, ábaco mesoamericano y conteos andinos son precolombinos — externalización del cálculo lleva milenios.',
        },
        {
          enunciado: '¿Qué significa "ganancia con costo cognitivo"?',
          opciones: [
            'Que calcular cuesta caro',
            'Que ganas precisión y velocidad pero pierdes ejercicio mental si no calculas a la vez',
            'Que el cerebro necesita más energía',
            'Que las matemáticas son difíciles',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Externalizar gana precisión y velocidad. Pero lo que dejas de practicar, lo dejas de saber. La ganancia técnica tiene contrapartida cognitiva.',
          feedbackIncorrecto:
            'Ganancia técnica + costo cognitivo. Calculadora rápida + memoria que se atrofia. La pregunta no es si delegar — es qué conviene delegar.',
        },
        {
          enunciado: '¿Por qué la velocidad del chip NO es lo mismo que inteligencia?',
          opciones: [
            'Porque el chip es lento',
            'Porque una calculadora opera rápido pero no entiende el problema — solo ejecuta',
            'Porque las máquinas no piensan en español',
            'Porque el chip consume electricidad',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La calculadora es velocísima pero no sabe si tu problema es de matemáticas o de cocina. Velocidad ≠ comprensión. Eso lo pone el humano.',
          feedbackIncorrecto:
            'Velocidad ≠ inteligencia. La calculadora ejecuta sin entender. El humano comprende el contexto. Esa diferencia es la frontera entre IA débil y cognición.',
        },
        {
          enunciado: '¿Qué es la "cognición distribuida" según Floridi?',
          opciones: [
            'Que el cerebro tiene varias partes',
            'Que tu mente hoy incluye celular, Google, cuentas, algoritmos — vives "onlife"',
            'Que pensar requiere internet',
            'Que la inteligencia se reparte',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Cognición distribuida: tu mente no es solo cerebro — es cerebro + dispositivos + plataformas. Onlife = ni online ni offline, vida híbrida.',
          feedbackIncorrecto:
            'Cognición distribuida según Floridi: tu mente incluye los dispositivos que extienden tu cognición. Vivimos "onlife" — vida híbrida donde lo digital es parte del yo.',
        },
        {
          enunciado:
            'En el saber ancestral del quipucamayoc inca, ¿qué aplica directamente a tu uso del celular?',
          opciones: [
            'Nada — el quipu era primitivo',
            'Que externalizar el cálculo requiere ENTENDER el sistema, no solo poseerlo',
            'Que las cuerdas son mejores',
            'Que los incas no usaban tecnología',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El quipucamayoc era experto porque ENTENDÍA el quipu. Tú serás experto en tu celular cuando entiendas lo que delega y lo que se atrofia.',
          feedbackIncorrecto:
            'Entender vence a poseer. El quipucamayoc dominaba el sistema; muchos hoy solo consumen el celular sin entender qué externalizan. La diferencia es expertise vs dependencia.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, identifica 3 cálculos cotidianos que hoy haces con celular (precio total del mercado, propina, división de cuenta entre amigos) y comprométete a hacerlos mentalmente durante 3 días seguidos. Anota qué te costó, qué descubriste, si tu velocidad mejoró. El próximo lunes traemos la bitácora.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Cada saber silenciado por la Conquista es una herramienta que tu generación tendrá que reaprender.',
      preguntaEspejo:
        '¿Qué saberes propios de mi región (cuentas de plaza, sistemas tradicionales de medida, técnicas de memoria oral) podría conocer mejor para complementar mi dependencia digital?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que dejas de practicar, lo dejas de saber; lo que dejas de saber, lo dejas de poder.',
      preguntaEspejo:
        '¿Qué habilidad cognitiva mía estoy dejando atrofiar por delegar todo al dispositivo? ¿Estaría dispuesto a recuperarla con 5 minutos diarios?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La cognición humana hoy es distribuida: parte vive en nuestra mente, parte en los dispositivos que extienden nuestra mente.',
      preguntaEspejo:
        '¿Qué partes de mi memoria, cálculo y juicio están hoy en dispositivos? ¿Lo diseñé yo o me lo impusieron las plataformas?',
    },
  },

  cincoDimensiones: {
    personal:
      'Hiciste un experimento honesto sobre tu propia cognición — y descubriste qué capacidades estás atrofiando.',
    emocional:
      'Sentiste el cuerpo cognitivo: la mente que se cansa, la calculadora que alivia, la elección que cuesta.',
    ciudadana:
      'Reconociste que la externalización masiva al chip no es neutral — concentra poder en quien diseña los dispositivos.',
    local:
      'Anclaste el aprendizaje en el quipu inca y el ábaco mesoamericano como antecedentes legítimos de tu celular.',
    intergeneracional:
      'Conectaste tu cálculo digital con 5000 años de cálculo externalizado. Lo que cambia es el material; el principio sobrevive.',
  },
};

export default contenido;
