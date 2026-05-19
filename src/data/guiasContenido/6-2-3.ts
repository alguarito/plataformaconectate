/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/6/6-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 3,
  titulo: 'El gabinete por dentro — conocer las piezas como las conoce el relojero',
  resumen: 'El gabinete (o torre, o case) es la caja del computador.',
  duracionMin: 90,
  subtema: 'El gabinete por dentro — conocer las piezas como las conoce el relojero',
  preLectura: {
    porQueImporta: 'El producto es el plano firmado + la tabla CPU vs RAM vs disco.',
    preguntaDetonante: 'Cuando una persona dice "mi computador está lento, le voy a meter más RAM", ¿sabes qué quiere decir esa frase? ¿Qué es la RAM y por qué meter más ayuda?',
    activacion: {
      titulo: '6 imágenes mentales',
      descripcion: 'Actividad 1 · IDENTIFICA — 6 imágenes mentales (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas 6 piezas con sus nombres, aprendes qué hace cada una, distingues CPU/RAM/disco, y dibujas el plano del gabinete.',
      siguiente: 'Esta semana, si entras a la sala de sistemas, observa los gabinetes desde afuera: ¿qué cables ves?'
    }
  },
  conceptosClave: [
    {
      termino: 'Gabinete (torre o case)',
      definicion: 'La caja del computador donde van todas las piezas internas. En portátiles está oculto dentro de la carcasa; en computadores de escritorio se puede abrir para ver las piezas adentro.',
      ejemplo: 'Si miras un computador de la sala de sistemas, el gabinete es la caja vertical o horizontal donde se conectan el monitor, el teclado y el ratón. Adentro están las 6 piezas.',
      emoji: '📦'
    },
    {
      termino: 'Tarjeta madre (motherboard)',
      definicion: 'La placa grande (verde o negra) sobre la que se conectan todas las demás piezas. Es como la calle principal que conecta todas las casas del barrio. Sin tarjeta madre, no hay computador.',
      ejemplo: 'Si abres el gabinete y miras la placa más grande llena de chips, cables y ranuras, esa es la tarjeta madre. Sobre ella van CPU, RAM, disco y todo lo demás.',
      emoji: '🔌'
    },
    {
      termino: 'CPU (procesador)',
      definicion: 'El cerebro del computador. Un chip cuadrado pequeño con un ventilador encima (disipador). Hace los cálculos, toma decisiones y procesa información. Marca el ritmo del equipo.',
      ejemplo: 'Marcas famosas de CPU: Intel Core i5, AMD Ryzen 5. El número indica generación o potencia. Más alto en general significa más rápido para hacer trabajos pesados.',
      emoji: '🧠'
    },
    {
      termino: 'RAM (memoria de trabajo)',
      definicion: 'Reglitas paradas conectadas a la tarjeta madre. La CPU las usa como mesa de trabajo: pone ahí lo que está usando ahora. Si apagas el computador, la RAM se borra. Más RAM = más cosas abiertas a la vez.',
      ejemplo: 'Un computador con 4 GB de RAM aguanta navegador + Word + música. Con 16 GB aguanta todo lo anterior + un juego pesado + 20 pestañas abiertas sin lentitud.',
      emoji: '📚'
    },
    {
      termino: 'Disco duro (HDD o SSD)',
      definicion: 'Donde se guardan los archivos, fotos, videos y programas. Aunque apagues el equipo, queda. HDD es mecánico (más lento, más barato). SSD es de estado sólido (más rápido, más caro, silencioso).',
      ejemplo: 'Un SSD de 256 GB hace que el computador prenda en 10 segundos. Un HDD del mismo tamaño puede tardar 60 segundos. La diferencia se siente todos los días.',
      emoji: '💾'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces las piezas del gabinete?',
      instrucciones: '5 preguntas para verificar que sabes nombrar las piezas del computador y qué hace cada una.',
      preguntas: [
        {
          enunciado: '¿Cuál pieza es el \'cerebro\' del computador?',
          opciones: [
            'La tarjeta madre.',
            'La RAM.',
            'La CPU.',
            'El disco duro.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. La CPU es el cerebro: hace los cálculos y toma decisiones. La tarjeta madre conecta todo, pero no piensa por sí sola.',
          feedbackIncorrecto: 'La CPU (procesador) es el cerebro. La tarjeta madre solo conecta. La RAM es mesa de trabajo y el disco es archivo.'
        },
        {
          enunciado: 'Apagas el computador. ¿Qué pasa con la información que estaba en la RAM?',
          opciones: [
            'Queda guardada para siempre.',
            'Se borra. La RAM es memoria temporal.',
            'Se mueve sola al disco duro.',
            'Solo se borra si el computador está sin batería.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La RAM es memoria temporal: solo guarda lo que se usa AHORA. Al apagar se borra. Para guardar permanente, está el disco duro.',
          feedbackIncorrecto: 'La RAM se borra al apagar. Es memoria corta. Lo que quieres guardar para siempre tiene que estar en el disco duro.'
        },
        {
          enunciado: 'Una persona dice \'mi computador está lento, le voy a meter más RAM\'. ¿Qué le va a pasar al equipo?',
          opciones: [
            'Va a ser mejor para guardar archivos.',
            'Va a poder tener más programas abiertos al tiempo sin pegarse.',
            'Va a procesar los videos más rápido en YouTube.',
            'Va a tener más espacio para fotos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Más RAM = más mesa de trabajo = más programas abiertos a la vez sin lentitud. Para guardar archivos sirve más disco; para procesar más rápido, mejor CPU.',
          feedbackIncorrecto: 'Más RAM permite tener más cosas abiertas al tiempo sin que se pegue. Para guardar archivos sirve disco; para velocidad pura, CPU.'
        },
        {
          enunciado: '¿Cuál de estas piezas, si falla, hace que NADA encienda?',
          opciones: [
            'La RAM.',
            'El disco duro.',
            'La fuente de poder.',
            'La tarjeta gráfica.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. La fuente de poder alimenta a todas las piezas. Si falla, no hay electricidad para ninguna y el computador no enciende.',
          feedbackIncorrecto: 'La fuente de poder es la que alimenta de electricidad a todo. Si falla, nada enciende. Las otras piezas dañadas dejan encender pero con problemas.'
        },
        {
          enunciado: '¿Cuál es la analogía correcta para CPU, RAM y disco duro?',
          opciones: [
            'CPU = mesa, RAM = cerebro, disco = archivo.',
            'CPU = cerebro, RAM = mesa de trabajo, disco = archivo.',
            'CPU = archivo, RAM = mesa, disco = cerebro.',
            'CPU = cable, RAM = cerebro, disco = mesa.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. CPU es cerebro (piensa), RAM es mesa de trabajo (memoria corta), disco duro es archivo (memoria larga). Esa analogía te sirve toda la vida.',
          feedbackIncorrecto: 'CPU = cerebro (piensa), RAM = mesa de trabajo (corto plazo), disco = archivo (largo plazo). Si las confundes, vuelve a la tabla del cuaderno.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿De cuántas cosas dependo todos los días sin saber su nombre? ¿Cuál sería la próxima que querría aprender a nombrar?',
    transferencia: 'Esta semana, si entras a la sala de sistemas, observa los gabinetes desde afuera: ¿qué cables ves?',
    cierre: 'Al terminar la clase: (1) podrás identificar las 6 piezas internas del computador; (2) sabrás explicar qué hace cada una en lenguaje natural; (3) podrás distinguir CPU, RAM y disco duro con sus diferencias clave; (4) habrás creado un plano del interior del gabinete bien etiquetad…'
  },
  saberAncestral: {
    saber: 'Cuando el relojero levantaba la tapa del reloj, mostraba un universo pequeño. En la calle 14 de Cartago, don Lucho tenía un cristal de aumento (lupa) y una pinza diminuta. Cuando llegaba un cliente con un reloj atrasado, abría la tapa frente a él, mostraba los engranajes y explicaba cada pieza con paciencia: "Mire, este es el balancín, hace el tic-tac. Esta rueda grande mueve las manecillas. Este resortico guarda la cuerda. Este eje es el corazón del mecanismo, sin él nada se mueve.". La gente miraba hipnotizada. Esa pequeña clase del relojero convertía un misterio en algo familiar. Cuando lo entendían, ya no le tenían miedo al reloj. Hoy abrimos juntos el gabinete del computador. Lo que parece complicado se va a sentir cercano cuando sepas el nombre de cada pieza y para qué sirve.',
    preguntaPuente: 'Cuando una persona dice "mi computador está lento, le voy a meter más RAM", ¿sabes qué quiere decir esa frase? ¿Qué es la RAM y por qué meter más ayuda?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del conocimiento popular)',
      lente: 'lente del nosotros',
      cita: '"Conocer el nombre de algo es el primer paso para perderle el miedo."',
      preguntaEspejo: '¿De cuántas cosas dependo todos los días sin saber su nombre? ¿Cuál sería la próxima que querría aprender a nombrar?'
    },
    estoico: {
      autor: 'Epicteto (filósofo romano que enseñaba a no temer lo conocido)',
      lente: 'lente del cuidado interior',
      cita: '"Lo que se entiende, se domina. Lo que no se entiende, te domina a ti."',
      preguntaEspejo: '¿Qué cosas me asustan solo porque no las entiendo? ¿Cuál vale la pena empezar a entender hoy?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del conocimiento técnico)',
      lente: 'lente de la infoesfera',
      cita: '"Saber el nombre de las cosas técnicas es la primera forma de ciudadanía en una sociedad de máquinas."',
      preguntaEspejo: '¿Quiero ser dependiente de los expertos para todo, o quiero entender lo suficiente para decidir por mí?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 6 piezas internas del computador; (2) sabrás explicar qué hace cada una en lenguaje natural; (3) podrás distinguir CPU, RAM y disco duro con sus difere…',
    emocional: 'Cuando no entiendes cómo funciona algo, ese algo te genera ansiedad: "¿y si se daña?", "¿qué hago si no funciona?".',
    ciudadana: 'Antes de hoy, el interior del computador era un misterio.',
    local: 'Antes de salir, verificas que tu plano tiene las 6 piezas y que la tabla aclara cuál es cerebro, memoria corta y memoria larga.',
    intergeneracional: 'Vivimos rodeados de máquinas.'
  }
};

export default contenido;
