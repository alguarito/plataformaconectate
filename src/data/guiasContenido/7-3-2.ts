/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/7/7-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 2,
  titulo: '¿Qué es la IA? — definición, historia y casos cotidianos',
  resumen: 'Definición simple de IA: tecnología que permite a las máquinas hacer tareas que requieren "inteligencia" — aprender, razonar, decidir, comunicarse.',
  duracionMin: 90,
  subtema: '¿Qué es la IA? — definición, historia y casos cotidianos',
  preLectura: {
    porQueImporta: 'El producto es el mapa + definición + línea de tiempo + reflexión.',
    preguntaDetonante: 'Si hoy te quitaran TODA la IA de tu día (Google sin sugerencias, TikTok sin recomendaciones, traductor sin existir, Maps sin rutas optimizadas), ¿cuánto cambiaría tu vida?',
    activacion: {
      titulo: 'Un día sin IA',
      descripcion: 'Actividad 1 · IDENTIFICA — Un día sin IA (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: defines IA con tus palabras, conoces 5 hitos históricos, mapeas IA en tu día, reflexionas.',
      siguiente: 'Esta semana, cuando uses cualquier app, observa si hay IA detrás (recomendaciones, sugerencias, autocompletados).'
    }
  },
  conceptosClave: [
    {
      termino: 'Inteligencia Artificial (IA)',
      definicion: 'Tecnología que permite a las máquinas realizar tareas que requerían inteligencia humana: aprender, razonar, decidir, comunicarse. Es matemática + estadística + computación + datos masivos. No es conciencia ni magia.',
      ejemplo: 'Cuando Google sugiere búsqueda mientras escribes, cuando TikTok te recomienda video, cuando ChatGPT te responde: todos son ejemplos cotidianos de IA en acción.',
      emoji: '🧠'
    },
    {
      termino: 'Test de Turing',
      definicion: 'Prueba propuesta por Alan Turing en 1950: una máquina es \'inteligente\' si puede mantener conversación con un humano sin que el humano detecte que es máquina. Pregunta filosófica fundadora de la IA.',
      ejemplo: 'Si chateas con ChatGPT y no sabes si es humano o máquina, ChatGPT pasó tu test de Turing personal. En la práctica, los humanos suelen detectar matices que las IAs aún no replican perfectamente.',
      emoji: '🧪'
    },
    {
      termino: '5 hitos históricos',
      definicion: 'Los 5 momentos clave: 1950 (Turing publica el Test), 1956 (conferencia de Dartmouth acuña el término AI), 1997 (Deep Blue vence a Kasparov), 2012 (deep learning revolución), 2022 (ChatGPT al público masivo).',
      ejemplo: 'Estás aprendiendo IA en 2026, 4 años después del hito ChatGPT. La IA tiene 76 años de historia, no es moda pasajera de ayer. Tu generación entra al campo en momento clave.',
      emoji: '📅'
    },
    {
      termino: 'IA en la vida cotidiana',
      definicion: 'Los momentos donde IA actúa sin que lo notes: recomendaciones de TikTok, sugerencias de Google, autocompletado de WhatsApp, rutas de Maps, traductor, reconocimiento facial del celular. Decenas de veces al día.',
      ejemplo: 'En 1 día de uso normal de celular probablemente interactúas con IA 50-100 veces. Cada video de TikTok es una decisión de IA. Cada sugerencia de búsqueda lo es.',
      emoji: '📱'
    },
    {
      termino: 'Alan Turing',
      definicion: 'Matemático inglés (1912-1954) considerado padre de la informática moderna y la IA. Rompió el código nazi Enigma en la Segunda Guerra Mundial. En 1950 publicó el artículo fundador sobre IA con el famoso Test de Turing.',
      ejemplo: 'Su trabajo en Bletchley Park durante la guerra ayudó a acortar la Segunda Guerra Mundial 2-4 años. Después del trabajo militar, su artículo sobre IA abrió el campo. Murió joven (41 años).',
      emoji: '🎓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué es la IA?',
      instrucciones: '5 preguntas para verificar que entiendes la definición y los hitos.',
      preguntas: [
        {
          enunciado: '¿Quién propuso el Test de Turing en 1950?',
          opciones: [
            'Steve Jobs.',
            'Alan Turing, matemático inglés.',
            'Bill Gates.',
            'Mark Zuckerberg.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Alan Turing, en 1950. Su artículo \'Computing Machinery and Intelligence\' propuso el famoso Test de Turing y abrió el campo de la IA. 76 años de historia.',
          feedbackIncorrecto: 'Alan Turing en 1950. Matemático inglés que también rompió el código nazi en la Segunda Guerra Mundial. Padre de la informática y la IA.'
        },
        {
          enunciado: '¿Cuándo salió ChatGPT al público?',
          opciones: [
            'Hace 50 años.',
            'A fines de 2022.',
            'Apenas el año pasado.',
            'Aún no ha salido.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. ChatGPT salió a fines de 2022. En 2 meses tuvo 100 millones de usuarios. La IA conversacional se volvió masiva. Eres parte de la primera generación que crece con ella.',
          feedbackIncorrecto: 'A fines de 2022. ChatGPT marcó el hito de la IA conversacional accesible al público masivo. Tu generación es la primera que crece con esto.'
        },
        {
          enunciado: '¿Es \'inteligente\' la IA como nosotros?',
          opciones: [
            'Sí, piensa exactamente como nosotros.',
            'No. Procesa datos a gran escala, pero no tiene conciencia ni emociones reales.',
            'Sí, y tiene emociones.',
            'Solo si es premium.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La IA procesa datos, no piensa con conciencia. Es muy poderosa para muchas tareas, pero no es \'inteligencia\' al modo humano. Diferencia clave.',
          feedbackIncorrecto: 'No es \'inteligente\' como nosotros. Procesa datos masivos y encuentra patrones. Útil pero distinto. Tener clara esa diferencia te ahorra confusiones.'
        },
        {
          enunciado: '¿Cuántos momentos al día interactúas con IA aproximadamente?',
          opciones: [
            '0 (no la uso).',
            'Decenas, probablemente más de 50 si usas celular regularmente.',
            '1 sola vez al día.',
            'Solo si uso ChatGPT.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Cada video de TikTok = 1 decisión de IA. Cada sugerencia de Google = otra. Cada autocompletado = otra. En un día normal, 50-100 fácilmente.',
          feedbackIncorrecto: 'Decenas o cientos. TikTok, Google, WhatsApp, Maps, traductor, Spotify: todos usan IA constantemente. Ya conviven contigo desde hace años.'
        },
        {
          enunciado: 'Tu hermano dice \'la IA es totalmente nueva, salió este año\'. ¿Cómo lo corriges?',
          opciones: [
            'Tiene razón, es nueva.',
            'La IA conversacional masiva sí es de 2022, pero el campo de la IA tiene 76 años (desde 1950).',
            'Solo lleva 2 años.',
            'Mejor no opinar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Hay matiz importante: la IA conversacional masiva (ChatGPT) es de 2022, pero el CAMPO de la IA arrancó en 1950 con Turing. 76 años, no 4.',
          feedbackIncorrecto: 'El campo tiene 76 años (1950 Turing). La conversacional masiva es de 2022. Saber la diferencia te coloca en lugar de criterio en debates sobre IA.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuántas otras cosas en mi vida cotidiana funcionan sin que sepa su nombre o cómo operan?',
    transferencia: 'Esta semana, cuando uses cualquier app, observa si hay IA detrás (recomendaciones, sugerencias, autocompletados).',
    cierre: 'Al terminar la clase: (1) podrás identificar qué es la IA con tus palabras; (2) sabrás explicar 5 hitos históricos clave; (3) podrás aplicar la idea de IA a 10 momentos cotidianos; (4) habrás creado tu mapa personal de IA en el día.'
  },
  saberAncestral: {
    saber: 'Mientras tus abuelos vivían los oficios de Cartago (relojero, costurera, tejedora), en 1950 un matemático inglés llamado Alan Turing escribió un artículo titulado "¿Pueden las máquinas pensar?". Turing era ya famoso por haber roto el código nazi durante la Segunda Guerra Mundial, salvando miles de vidas. Cuando se sentó a escribir aquel artículo, no había computadores como los de hoy: existían máquinas enormes que llenaban un cuarto y hacían cálculos lentos. Pero Turing imaginaba el futuro. Propuso una pregunta filosófica: "si una máquina puede mantener una conversación con un humano sin que el humano se dé cuenta de que es máquina, ¿no es eso pensar?". Esa pregunta abrió un campo: la Inteligencia Artificial. Han pasado 76 años. Y lo que Turing imaginó como teoría — una máquina que conversa como humano — hoy es ChatGPT. La IA es más vieja de lo que crees. Tú llegas a un campo con 76 años de historia, no a una moda de ayer.',
    preguntaPuente: 'Si hoy te quitaran TODA la IA de tu día (Google sin sugerencias, TikTok sin recomendaciones, traductor sin existir, Maps sin rutas optimizadas), ¿cuánto cambiaría tu vida?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del saber popular)',
      lente: 'lente del nosotros',
      cita: '"Conocer el nombre de lo que te rodea es el primer paso para dejar de ser usado por ello. Aprender qué es la IA es ya un acto de soberanía."',
      preguntaEspejo: '¿Cuántas otras cosas en mi vida cotidiana funcionan sin que sepa su nombre o cómo operan?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que se preguntaba por la naturaleza de las cosas)',
      lente: 'lente del cuidado interior',
      cita: '"Antes de juzgar si algo es bueno o malo, conoce su naturaleza. La IA no es magia ni monstruo: es matemática a gran escala."',
      preguntaEspejo: '¿Estoy en el grupo del miedo, en el de la adoración, o en el del conocimiento sereno?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la IA)',
      lente: 'lente de la infoesfera',
      cita: '"Vivir con IA sin entenderla es como vivir con electricidad sin saber qué es: sirve, pero te electrocutas a veces. Entenderla te protege."',
      preguntaEspejo: '¿Estoy en la fase mágica con la IA o ya empiezo a alfabetizarme?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar qué es la IA con tus palabras; (2) sabrás explicar 5 hitos históricos clave; (3) podrás aplicar la idea de IA a 10 momentos cotidianos; (4) habrás creado t…',
    emocional: 'Hay gente que teme a la IA (la pinta como monstruo que viene a destruirnos) y gente que la idolatra (la trata como dios infalible).',
    ciudadana: 'Hasta ayer, la IA era cosa invisible en tu vida.',
    local: 'Antes de salir, cuenta cuántos momentos de IA detectaste (suelen ser más de 10).',
    intergeneracional: 'Tus abuelos vivieron la electrificación rural.'
  }
};

export default contenido;
