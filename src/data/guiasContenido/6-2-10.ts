/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 10
 * (sesión global 20).
 *
 * Auto-generado desde content/guias/6/6-2-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 10,
  titulo: 'Mi computador ideal — diseñar la máquina que yo necesito',
  resumen: 'Diseñar el computador ideal no es elegir el más caro — es elegir el que se adapta a TU uso.',
  duracionMin: 90,
  subtema: 'Mi computador ideal — diseñar la máquina que yo necesito',
  preLectura: {
    porQueImporta: 'El producto es esa ficha completa con perfil, componentes, presupuesto, justificación y software.',
    preguntaDetonante: 'Si tus papás te dijeran "escoge tu primer computador propio, tienes 2 millones de pesos", ¿qué le preguntarías al vendedor primero? ¿Sabrías qué componentes pedir?',
    activacion: {
      titulo: '¿Cuál es TU perfil?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Cuál es TU perfil?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas tu perfil de uso, aprendes los 4 perfiles típicos y sus componentes, diseñas tu ficha técnica, y firmas tu propuesta.',
      siguiente: 'Si algún día tus papás o tú van a comprar un computador, esta hoja es tu guía.'
    }
  },
  conceptosClave: [
    {
      termino: 'Perfil de usuario',
      definicion: 'El conjunto de actividades para las que vas a usar tu computador. Define qué componentes necesitas. Hay 4 perfiles típicos: ofimática, edición media, gamer, creador profesional.',
      ejemplo: 'Tu perfil: 70% tareas + 30% ver videos = ofimática. El computador ideal para ti es básico con SSD, RAM 8 GB, sin tarjeta gráfica dedicada.',
      emoji: '👤'
    },
    {
      termino: 'Ofimática',
      definicion: 'El perfil más común para estudiantes. Incluye navegar, escribir documentos (Word), ver videos educativos, oír música, chats. No requiere componentes potentes ni tarjeta gráfica dedicada.',
      ejemplo: 'Si tu uso principal son tareas + Chrome + YouTube + Spotify, eres perfil ofimática. Un equipo de 1.500.000 a 2.500.000 pesos te alcanza.',
      emoji: '📊'
    },
    {
      termino: 'Componentes clave',
      definicion: 'Las 6 cosas en las que fijarse al elegir un computador: CPU (procesador), RAM (memoria), disco (almacenamiento), GPU (tarjeta gráfica), monitor y periféricos. Cada uno se elige según el perfil.',
      ejemplo: 'Para gamer: GPU dedicada es lo más importante. Para ofimática: SSD para que prenda rápido. Para creador: RAM alta para procesar pesado.',
      emoji: '⚙️'
    },
    {
      termino: 'SSD vs HDD',
      definicion: 'Dos tipos de disco duro. SSD (estado sólido): rápido, silencioso, caro. HDD (mecánico): lento, sonoro, barato. Hoy es estándar tener SSD en el disco principal; HDD se usa para guardar archivos grandes.',
      ejemplo: 'Con SSD el computador prende en 10 segundos. Con HDD del mismo tamaño, en 60 segundos. La diferencia se siente todos los días.',
      emoji: '💾'
    },
    {
      termino: 'Tarjeta gráfica dedicada',
      definicion: 'Una GPU separada de la CPU, con su propia memoria. Necesaria para juegos pesados, edición de video y trabajo gráfico. Para ofimática no es necesaria (la CPU ya trae una integrada que basta).',
      ejemplo: 'Tarjetas comunes: GTX 1650 (juegos medios), RTX 3060 (juegos pesados), RTX 4070+ (juegos exigentes). Las RTX hacen ray tracing (gráficos realistas).',
      emoji: '🎮'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes diseñar tu computador ideal?',
      instrucciones: '5 preguntas para verificar que entiendes cómo elegir el equipo correcto para tu uso.',
      preguntas: [
        {
          enunciado: 'Tu primo va a comprar un computador y dice \'voy a llevar el más caro\'. ¿Qué le dices?',
          opciones: [
            'Buena idea, así te dura más.',
            'El más caro tiene componentes que tal vez no usas. Primero pensar tu perfil, después comprar.',
            'Compra mejor el más barato.',
            'Compra cualquiera, todos son iguales.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El más caro tiene componentes para perfiles avanzados (gamer, creador pro). Si solo haces tareas, pagas por lo que no usas.',
          feedbackIncorrecto: 'El más caro suele tener componentes que no usarás. Primero piensas tu perfil, después eliges según necesidad. Decisión con criterio.'
        },
        {
          enunciado: 'Tu perfil es \'hacer tareas + ver YouTube\'. ¿Necesitas tarjeta gráfica dedicada?',
          opciones: [
            'Sí, sin ella no se ve YouTube.',
            'No, la CPU ya trae una integrada que basta para ver videos.',
            'Solo si es de Apple.',
            'Solo en computadores de escritorio.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Ofimática + videos no requiere GPU dedicada. La integrada en la CPU mueve YouTube y todo lo normal. Te ahorras 1-2 millones.',
          feedbackIncorrecto: 'Ofimática no necesita GPU dedicada. La CPU trae una integrada suficiente. Ahorras dinero y consume menos electricidad.'
        },
        {
          enunciado: 'Vas a jugar Roblox con shaders y Minecraft con mods pesados. ¿Cuál perfil eres?',
          opciones: [
            'Ofimática.',
            'Gamer (juegos pesados).',
            'Creador profesional.',
            'Edición media.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Juegos pesados = perfil gamer. Necesitas GPU dedicada, RAM 16 GB+, SSD rápido. Rango $4-7 millones.',
          feedbackIncorrecto: 'Eres perfil gamer. Roblox con shaders y mods exigentes requieren GPU dedicada + RAM 16 GB+ + SSD rápido.'
        },
        {
          enunciado: '¿Qué es más importante en un computador para ofimática: SSD o HDD?',
          opciones: [
            'HDD, porque guarda más.',
            'SSD, porque hace que el equipo prenda y abra programas rápido.',
            'Da lo mismo, son iguales.',
            'Solo HDD, los SSD son para gamers.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. SSD hace toda la diferencia: prende en 10s en vez de 60s, abre Word en segundos. Para ofimática, SSD es la mejor inversión.',
          feedbackIncorrecto: 'SSD es lo más importante. Prende rápido, abre rápido. HDD es más barato y guarda más, pero lento. Para principal, siempre SSD.'
        },
        {
          enunciado: 'Tus papás te dan $2.500.000 pesos para tu primer computador y tu perfil es ofimática + estudiante. ¿Qué pides?',
          opciones: [
            'Computador gamer con RTX 4090.',
            'Portátil con Intel i5, 8-16 GB RAM, SSD 256 GB, sin GPU dedicada.',
            'El más barato posible para guardar el resto.',
            'Computador de creador profesional.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Para ofimática + colegio con 2.5 millones: i5 + 16 GB RAM + SSD 256 GB es el dulce punto. Te durará 5-6 años bien.',
          feedbackIncorrecto: 'Para tu perfil + presupuesto: i5 + 16 GB RAM + SSD 256 GB. Gastas todo el dinero en componentes útiles, sin pagar lo innecesario.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Las cosas que quiero comprar las necesito, o me las quieren vender porque están de moda?',
    transferencia: 'Si algún día tus papás o tú van a comprar un computador, esta hoja es tu guía.',
    cierre: 'Al terminar la clase: (1) podrás identificar tu propio perfil de uso; (2) sabrás aplicar criterios de hardware a los 4 perfiles; (3) podrás evaluar si una oferta de computador conviene o no; (4) habrás creado tu ficha técnica con justificación.'
  },
  saberAncestral: {
    saber: 'Don Lucho el relojero no vendía un solo modelo de reloj a todos sus clientes. Cuando alguien entraba a la vitrina de la calle 14 de Cartago, lo primero que don Lucho hacía era preguntar: "¿Para qué lo quiere usted, mijo? ¿Para el trabajo? ¿Para regalar? ¿Para el campo o la ciudad?". Si era para un campesino que iba al cafetal, recomendaba uno resistente al sudor y al polvo, sencillo. Si era para una secretaria, uno elegante de pulsera fina. Si era para un abuelo que ya no veía bien, uno con números grandes. El relojero sabio sabe que no hay UN reloj para todos, hay EL reloj para cada quién. Por eso preguntaba primero, vendía después. Hoy con los computadores pasa lo mismo. No hay UN computador mejor: hay el computador correcto para lo que TÚ vas a hacer. Diseñar tu equipo ideal es la prueba de fuego de todo lo aprendido en este periodo: combinar hardware, software, mantenimiento y ergonomía para decidir con criterio.',
    preguntaPuente: 'Si tus papás te dijeran "escoge tu primer computador propio, tienes 2 millones de pesos", ¿qué le preguntarías al vendedor primero? ¿Sabrías qué componentes pedir?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del consumo crítico)',
      lente: 'lente del nosotros',
      cita: '"Quien sabe qué necesita, escapa de la trampa del consumo. Quien no, compra lo que le venden, no lo que necesita."',
      preguntaEspejo: '¿Las cosas que quiero comprar las necesito, o me las quieren vender porque están de moda?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que decidía con criterio)',
      lente: 'lente del cuidado interior',
      cita: '"Mide cada decisión por su propósito, no por el ruido a su alrededor."',
      preguntaEspejo: 'Mis últimas 3 compras importantes, ¿las decidí por mi propósito o por el ruido?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del consumo digital sostenible)',
      lente: 'lente de la infoesfera',
      cita: '"El equipo correcto te dura años. El equipo equivocado te genera el deseo de comprar otro en meses."',
      preguntaEspejo: '¿La compra que estoy pensando me va a durar años o me va a generar ganas de cambiar en meses?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar tu propio perfil de uso; (2) sabrás aplicar criterios de hardware a los 4 perfiles; (3) podrás evaluar si una oferta de computador conviene o no; (4) habrá…',
    emocional: 'Cuando vas a comprar un computador (o cualquier cosa importante), el ruido es enorme: vendedores, publicidad, youtubers, amigos que dicen "compra el mismo que yo".',
    ciudadana: 'La publicidad de computadores te dice "compra el último modelo", "el más rápido", "el más cool".',
    local: 'Antes de salir, miras tu ficha: ¿coincide el perfil con los componentes?',
    intergeneracional: 'Si compras un computador que NO se adapta a tu uso, vas a sentir frustración: "es muy lento", "no me aguanta lo que quiero hacer".'
  }
};

export default contenido;
