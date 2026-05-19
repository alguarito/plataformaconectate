/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 7
 * (sesión global 27).
 *
 * Auto-generado desde content/guias/6/6-3-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 7,
  titulo: '¿Qué es internet? — cómo viajan los datos para llegar a tu pantalla',
  resumen: 'Internet es una red mundial de computadoras conectadas entre sí.',
  duracionMin: 90,
  subtema: '¿Qué es internet? — cómo viajan los datos para llegar a tu pantalla',
  preLectura: {
    porQueImporta: 'El producto es ese diagrama firmado + el glosario en el cuaderno.',
    preguntaDetonante: 'Cuando le das play a un video de YouTube, ¿de dónde sale realmente el video? ¿Está en tu celular? ¿Está en una nube en el cielo? ¿Dónde está físicamente?',
    activacion: {
      titulo: 'La historia del mensaje de Mateo',
      descripcion: 'Actividad 1 · IDENTIFICA — La historia del mensaje de Mateo (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: imaginas el viaje del paquete, aprendes las 6 estaciones, distingues conceptos clave (IP, paquete, servidor), y dibujas tu diagrama.',
      siguiente: 'Esta semana, observa: cuando navegas, ¿cuánto se demora cada página en cargar?'
    }
  },
  conceptosClave: [
    {
      termino: 'Internet',
      definicion: 'Red mundial de computadoras conectadas entre sí. No es una sola cosa: es millones de redes interconectadas (de ahí "inter-net"). Por esta red viajan datos en forma de paquetes pequeños.',
      ejemplo: 'Cuando le das play a un video en YouTube, la información viaja por internet desde un servidor en California hasta tu celular en Cartago, pasando por cables submarinos. Todo en 1 segundo.',
      emoji: '🌐'
    },
    {
      termino: 'URL',
      definicion: 'La dirección que escribes en el navegador para llegar a una página. Por ejemplo www.youtube.com es la URL de YouTube. URL viene de inglés: Uniform Resource Locator.',
      ejemplo: 'Cuando quieres ver Wikipedia escribes "es.wikipedia.org" en el navegador. Esa es una URL. Es como la dirección postal de una página en internet.',
      emoji: '🔗'
    },
    {
      termino: 'IP (Internet Protocol)',
      definicion: 'El número único que identifica un dispositivo o un servidor en internet. Como una dirección postal pero numérica. Ejemplo: 172.217.16.78 podría ser la IP de un servidor de Google.',
      ejemplo: 'Tu celular tiene una IP mientras está conectado. Cada vez que te conectas al wifi de un lugar nuevo, recibes una IP nueva (asignada por el router).',
      emoji: '📍'
    },
    {
      termino: 'Paquete (de datos)',
      definicion: 'Pedacito pequeño de información que viaja por internet. La información grande (un video, una foto) se divide en miles de paquetes que viajan por separado y se reensamblan en el destino.',
      ejemplo: 'Cuando subes una foto a Instagram, no viaja toda junta. Se divide en cientos de paquetes que viajan por caminos distintos, llegan al servidor de Instagram y allá se rejuntan.',
      emoji: '📦'
    },
    {
      termino: 'Servidor',
      definicion: 'Computador grande y especializado en guardar y entregar información a los usuarios. Los servidores de YouTube guardan los videos. Los servidores de Google guardan los resultados de búsqueda. Viven en edificios llamados centros de datos.',
      ejemplo: 'Cuando ves un video de YouTube, ese video no está en tu celular: está en un servidor de Google en California. Tu celular solo lo descarga y reproduce mientras lo ves.',
      emoji: '🖥️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes cómo funciona internet por dentro?',
      instrucciones: '5 preguntas para verificar que entiendes el viaje de los datos y los términos clave.',
      preguntas: [
        {
          enunciado: 'Le das play a un video de YouTube. ¿Dónde está realmente ese video?',
          opciones: [
            'En tu celular, guardado para siempre.',
            'En un servidor de Google, posiblemente en California.',
            'En las nubes del cielo.',
            'En tu casa, en el módem.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Los videos viven en servidores físicos de Google (en centros de datos). Tu celular solo los descarga y reproduce. Por eso necesitas internet para verlos.',
          feedbackIncorrecto: 'Los videos viven en servidores físicos de Google. Tu celular los descarga en streaming. Por eso sin internet no puedes verlos.'
        },
        {
          enunciado: '¿Qué es un \'paquete\' en internet?',
          opciones: [
            'Una caja con productos comprados.',
            'Pedacito de información que viaja entre dispositivos.',
            'Un programa que instalas.',
            'Un sobre de papel.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La info grande (videos, fotos) se divide en miles de paquetes que viajan por separado. En el destino se rejuntan. Es como un rompecabezas de información.',
          feedbackIncorrecto: 'Un paquete es un pedacito de información digital. La información grande se divide en miles de paquetes que viajan separados.'
        },
        {
          enunciado: 'Tu prima en España te manda una foto por WhatsApp. ¿Por dónde viaja principalmente?',
          opciones: [
            'Por el aire directamente.',
            'Por cables (submarinos y terrestres) que conectan los continentes.',
            'Por aves entrenadas.',
            'Solo por wifi.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La mayoría de internet viaja por cables submarinos de fibra óptica. El wifi es solo el último tramo. Aves no, satélites algunos.',
          feedbackIncorrecto: 'Por cables submarinos de fibra óptica. Internet entre continentes va por cables en el fondo del mar. Wifi y celular son solo el último tramo a tu casa.'
        },
        {
          enunciado: '¿Qué es una dirección IP?',
          opciones: [
            'El nombre de un programa.',
            'Un número que identifica único a un dispositivo en internet.',
            'La velocidad del internet.',
            'El color del módem.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Una IP es como una dirección postal pero numérica. Cada dispositivo conectado tiene una. Por ejemplo, 172.217.16.78 puede ser la IP de un servidor de Google.',
          feedbackIncorrecto: 'IP = número único de identificación en internet. Cada celular, computador o servidor tiene una IP mientras está conectado. Es como una dirección postal.'
        },
        {
          enunciado: 'Tu wifi de casa es lento. ¿De qué depende la velocidad real de internet?',
          opciones: [
            'Solo del wifi que tengas.',
            'Del plan de banda ancha que pagas al proveedor (Claro, Movistar, etc.).',
            'Del color del router.',
            'De la cantidad de wifi vecinos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La velocidad real depende del plan que pagas a tu proveedor (banda ancha). El wifi distribuye esa velocidad en tu casa. Más wifi sin más banda ancha no ayuda.',
          feedbackIncorrecto: 'La velocidad la da el plan de banda ancha que pagas. El wifi solo distribuye esa velocidad dentro de tu casa. Tener mejor wifi sin mejor plan no sirve.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Quiero seguir siendo usuario dependiente o quiero ser ciudadano de la red?',
    transferencia: 'Esta semana, observa: cuando navegas, ¿cuánto se demora cada página en cargar?',
    cierre: 'Al terminar la clase: (1) podrás identificar las 6 estaciones del viaje de un paquete; (2) sabrás explicar qué son los paquetes, las direcciones IP y los servidores; (3) podrás distinguir entre wifi y datos móviles; (4) habrás creado un diagrama del viaje completo.'
  },
  saberAncestral: {
    saber: 'Antes de internet, los mensajes viajaban por una red de personas y caballos. El pregonero de Cartago llevaba un anuncio de cuadra en cuadra. Si la noticia tenía que llegar a Pereira, viajaba en caballo con un mensajero. Si tenía que llegar a Bogotá, viajaba en tren. Si llegaba a otro país, viajaba en barco. Cada mensajero conocía solo su tramo. Ningún mensajero hacía todo el viaje: la información pasaba de uno a otro, como un balón. El cartero entregaba al jefe de correo, el jefe al maquinista, el maquinista al de la otra ciudad. Esa idea — la información que viaja en tramos, pasando de un sistema a otro — es exactamente cómo funciona internet. Solo que en vez de caballos hay cables; en vez de jinetes hay servidores; en vez de meses hay segundos. Internet es el sistema de mensajeros más grande de la historia humana, pero la idea es antigua: una red que conecta a personas que están lejos.',
    preguntaPuente: 'Cuando le das play a un video de YouTube, ¿de dónde sale realmente el video? ¿Está en tu celular? ¿Está en una nube en el cielo? ¿Dónde está físicamente?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la transparencia tecnológica)',
      lente: 'lente del nosotros',
      cita: '"La tecnología se vuelve servidumbre cuando no la entiendes. Se vuelve libertad cuando sabes cómo funciona."',
      preguntaEspejo: '¿Quiero seguir siendo usuario dependiente o quiero ser ciudadano de la red?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que se preguntaba por la naturaleza de las cosas)',
      lente: 'lente del cuidado interior',
      cita: '"Cada cosa cotidiana esconde un mundo si te detienes a preguntarla. Internet es un mundo entero detrás de un clic."',
      preguntaEspejo: '¿Qué otras cosas cotidianas escondo mundos que no he querido conocer?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de internet)',
      lente: 'lente de la infoesfera',
      cita: '"Internet no es una herramienta más. Es el sistema nervioso de la humanidad del siglo XXI. Aprender cómo funciona es aprender en qué planeta vives."',
      preguntaEspejo: '¿Estoy usando internet como un usuario de paso, o como un ciudadano que sabe lo que tiene entre manos?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 6 estaciones del viaje de un paquete; (2) sabrás explicar qué son los paquetes, las direcciones IP y los servidores; (3) podrás distinguir entre wifi y…',
    emocional: 'Hacer clic en play es un gesto que toma 1 segundo.',
    ciudadana: 'Mucha gente usa internet sin saber qué pasa por dentro.',
    local: 'Antes de salir, verificas que tu diagrama tiene 6 estaciones y que cada flecha tiene un tiempo aproximado.',
    intergeneracional: 'La generación de tus papás vivió un mundo sin internet.'
  }
};

export default contenido;
