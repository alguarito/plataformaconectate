/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/7/7-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 4,
  titulo: 'Cómo aprende una IA — datos, entrenamiento y el problema del sesgo',
  resumen: 'Una IA aprende no porque le programen reglas, sino porque le muestran muchos ejemplos.',
  duracionMin: 90,
  subtema: 'Cómo aprende una IA — datos, entrenamiento y el problema del sesgo',
  preLectura: {
    porQueImporta: 'El producto es ese diagrama + análisis + 5 reglas firmadas.',
    preguntaDetonante: 'Si una IA tiene que aprender a reconocer "buenas notas", pero la entrenan SOLO con notas de niños de colegios privados de Bogotá, ¿qué pasa cuando le muestran una nota de un niño del campo del Pacífico que escribe con caligrafía distinta?',
    activacion: {
      titulo: 'Enseñar a una IA a reconocer "gato"',
      descripcion: 'Actividad 1 · ANALIZA — Enseñar a una IA a reconocer "gato" (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres cómo aprende una IA, analizas 3 casos de sesgo, dibujas el diagrama, formulas las 5 reglas.',
      siguiente: 'Esta semana, cuando uses una IA, pregúntate: "¿de qué datos aprendió esto?'
    }
  },
  conceptosClave: [
    {
      termino: 'Entrenamiento (training)',
      definicion: 'Proceso por el cual una IA aprende: se le muestran miles o millones de ejemplos y un algoritmo ajusta el modelo para reconocer patrones. Toma semanas o meses con computadores poderosos. Sin entrenamiento, no hay IA útil.',
      ejemplo: 'Entrenar GPT-4 tomó meses, usó miles de procesadores especializados y costó alrededor de 100 millones de dólares. El resultado: un modelo con 1.7 trillones de parámetros.',
      emoji: '🏋️'
    },
    {
      termino: 'Datos de entrenamiento',
      definicion: 'Los ejemplos con los que se entrena una IA. Para ChatGPT: libros, Wikipedia, foros, sitios web. Para reconocimiento facial: fotos etiquetadas. La calidad y diversidad de los datos determinan la calidad de la IA.',
      ejemplo: 'Si entrenas IA con CVs de hombres, la IA va a \'preferir\' candidatos hombres. Si entrenas IA de canciones solo con vallenato, va a \'rechazar\' otros géneros como \'no música\'.',
      emoji: '📚'
    },
    {
      termino: 'Sesgo (bias)',
      definicion: 'Cuando una IA discrimina o falla sistemáticamente con cierto grupo. No es bug accidental: es consecuencia de datos parciales o decisiones humanas en el diseño. Real y documentado en Amazon, Google, sistemas de justicia.',
      ejemplo: 'Google Photos en 2015 clasificó fotos de personas afrodescendientes como \'gorillas\' porque los datos no incluyeron suficiente diversidad. Google se disculpó. Caso paradigmático de sesgo.',
      emoji: '⚖️'
    },
    {
      termino: 'Redes neuronales profundas (deep learning)',
      definicion: 'El algoritmo más usado en IA moderna. Inspirado en cómo funcionan las neuronas del cerebro humano. \'Profundas\' porque tienen muchas capas (decenas o cientos). La revolución de 2012 popularizó esta técnica.',
      ejemplo: 'ChatGPT, DALL-E, Google Translate, reconocimiento facial: todos usan redes neuronales profundas. Es la tecnología clave detrás de la mayoría de IAs avanzadas que conoces.',
      emoji: '🧠'
    },
    {
      termino: '5 reglas para detectar sesgo',
      definicion: 'Las 5 normas para evaluar críticamente una IA: (1) preguntar de qué datos aprendió, (2) probar con distintos grupos, (3) buscar tu propio caso de prueba, (4) leer documentación, (5) no asumir neutralidad.',
      ejemplo: 'Antes de confiar en una IA que califica trabajos escolares, pregunta: ¿con qué trabajos se entrenó? ¿de qué colegios? ¿de qué países? Si solo se entrenó con trabajos de colegios élite, va a sesgar.',
      emoji: '🔍'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes cómo aprende una IA?',
      instrucciones: '5 preguntas para verificar que entiendes el aprendizaje y el sesgo.',
      preguntas: [
        {
          enunciado: '¿Cómo aprende una IA moderna?',
          opciones: [
            'Le programan reglas una por una.',
            'Le muestran miles o millones de ejemplos y ajusta automáticamente su modelo.',
            'Lee libros como un humano.',
            'Le rezan.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Aprende de ejemplos masivos (entrenamiento). Un algoritmo ajusta el modelo. No le programan reglas explícitas; extrae patrones de los datos.',
          feedbackIncorrecto: 'De ejemplos masivos. Le muestran miles de ejemplos, el algoritmo ajusta el modelo. Es como enseñar a un niño con muchas palabras, no con reglas gramaticales.'
        },
        {
          enunciado: 'Una IA de RH descarta CVs de mujeres. ¿Por qué pasa?',
          opciones: [
            'La IA es machista por naturaleza.',
            'Probablemente se entrenó con datos sesgados (más CVs de hombres en el histórico) y reprodujo ese sesgo.',
            'Es magia.',
            'Solo pasa en China.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Caso real: Amazon 2018. La IA se entrenó con CVs de 10 años (mayoría hombres) y aprendió a \'preferir\' ese patrón. Discriminó mujeres automáticamente.',
          feedbackIncorrecto: 'Caso real Amazon 2018. Datos sesgados (CVs mayormente de hombres) → IA reprodujo el sesgo. No es intencional, pero sí real. Amazon la canceló.'
        },
        {
          enunciado: '¿Es la IA \'neutral\' por naturaleza?',
          opciones: [
            'Sí, no tiene prejuicios.',
            'No. Refleja decisiones humanas sobre qué datos usar y cómo entrenar.',
            'Sí, los matemáticos las hacen objetivas.',
            'Solo si es premium.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La IA NO es neutral. Refleja los datos con que la entrenaron + las decisiones de sus diseñadores. Toda IA tiene sesgos potenciales.',
          feedbackIncorrecto: 'NO es neutral. Toda IA refleja decisiones humanas: qué datos, qué algoritmo, qué métricas. La neutralidad pura no existe. Reconocerlo es paso clave.'
        },
        {
          enunciado: 'Quieres detectar si una IA tiene sesgo. ¿Qué haces?',
          opciones: [
            'Confiar ciegamente.',
            'Aplicar las 5 reglas: preguntar datos, probar con distintos grupos, buscar caso propio, leer documentación, no asumir neutralidad.',
            'No usar IA.',
            'Solo usar IA china.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Las 5 reglas. Aplicarlas te entrena como crítico de IA, no consumidor pasivo. Es habilidad clave del ciudadano digital.',
          feedbackIncorrecto: '5 reglas: datos, grupos, caso propio, documentación, no asumir. Aplícalas a cualquier IA que uses regularmente. Te coloca en lugar de criterio.'
        },
        {
          enunciado: 'Una IA aprende de qué tipos de datos NO le mostraste. ¿Es responsable?',
          opciones: [
            'Sí, la IA debió saber sola.',
            'No. La IA solo sabe lo que le mostraron. Si faltaron datos, faltó la perspectiva en sus diseñadores. La responsabilidad es humana.',
            'Solo si paga premium.',
            'Depende del año.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La IA no inventa; reproduce. Si los datos faltaron, faltó la perspectiva de quien los recolectó. La responsabilidad es de los humanos que diseñaron y entrenaron.',
          feedbackIncorrecto: 'La responsabilidad es humana. La IA reproduce datos. Si faltan grupos, faltó visión en los diseñadores. Por eso diversificar quien crea IAs es justicia.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Las IAs que uso fueron creadas pensando en mí, mi familia, mi región?',
    transferencia: 'Esta semana, cuando uses una IA, pregúntate: "¿de qué datos aprendió esto?',
    cierre: 'Al terminar la clase: (1) podrás identificar las 4 partes del aprendizaje de una IA; (2) sabrás explicar qué es el sesgo y por qué ocurre; (3) podrás analizar 3 ejemplos reales de sesgo; (4) habrás creado tu diagrama del aprendizaje + 5 reglas para detectar sesgo.'
  },
  saberAncestral: {
    saber: 'Cuando doña Mercedes, maestra rural del Valle del Cauca, enseñaba a leer a un niño nuevo, no le mostraba 1 sola palabra: le mostraba cientos. Le mostraba "casa" y la repetía. Le mostraba "mamá", "perro", "árbol". Cada palabra varias veces. Con el tiempo, el niño empezaba a reconocer patrones: las letras juntas forman palabras, las palabras tienen sonidos, los sonidos forman frases. Doña Mercedes no le "programaba" las reglas: el niño las extraía de los ejemplos. Esa es exactamente la forma en que aprende una IA moderna: le muestras miles de ejemplos, ella encuentra patrones, y después puede generalizar. Si los ejemplos son buenos y variados, aprende bien. Si los ejemplos son malos o sesgados, aprende mal. Como doña Mercedes: si solo le hubiera mostrado al niño palabras de un grupo (solo objetos urbanos, sin animales del campo), el niño habría aprendido un mundo parcial. Las IAs igual.',
    preguntaPuente: 'Si una IA tiene que aprender a reconocer "buenas notas", pero la entrenan SOLO con notas de niños de colegios privados de Bogotá, ¿qué pasa cuando le muestran una nota de un niño del campo del Pacífico que escribe con caligrafía distinta?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del análisis crítico)',
      lente: 'lente del nosotros',
      cita: '"La IA refleja a quien la creó. Si los datos vinieron de unos pocos, la IA reproducirá los valores de unos pocos. La diversidad de datos es justicia."',
      preguntaEspejo: '¿Las IAs que uso fueron creadas pensando en mí, mi familia, mi región?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador del análisis sereno)',
      lente: 'lente del cuidado interior',
      cita: '"Saber cómo aprende la IA te quita el asombro mágico. Lo mágico cede paso a lo analítico, y eso es ganancia."',
      preguntaEspejo: '¿Antes veía la IA como magia? ¿Cómo cambia mi relación al saber cómo aprende?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del sesgo algorítmico)',
      lente: 'lente de la infoesfera',
      cita: '"El sesgo no es defecto técnico que arreglar después: es valor político que debe debatirse antes. La IA refleja decisiones humanas."',
      preguntaEspejo: '¿Qué decisiones políticas estoy aceptando sin verlas cada vez que uso una IA?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 4 partes del aprendizaje de una IA; (2) sabrás explicar qué es el sesgo y por qué ocurre; (3) podrás analizar 3 ejemplos reales de sesgo; (4) habrás cr…',
    emocional: 'Antes de hoy, las respuestas de ChatGPT te parecían casi mágicas: ¿cómo puede saber tanto?.',
    ciudadana: 'La mayoría de IAs del mundo se entrenan con datos en inglés, de Estados Unidos y Europa.',
    local: 'Antes de salir, verifica que tu mini-ejemplo muestra cómo el sesgo entra por los datos.',
    intergeneracional: 'El sesgo en IA no es problema solo técnico: es problema político.'
  }
};

export default contenido;
