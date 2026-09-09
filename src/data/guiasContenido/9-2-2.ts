/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/9/9-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 2,
  titulo: 'La página y la cuadrícula — primer principio del orden',
  resumen: 'En Ansermanuevo el calado trabaja quitando: se retiran hilos de la tela y se reagrupan los que quedan, hasta que el vacío mismo dibuja. Y la vainica se trabaja por el revés, así que lo de delante depende de lo de detrás. Una cuadrícula es eso: la estructura invisible que decide dónde puede ir cada cosa.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Cuadrícula',
  preLectura: {
    porQueImporta: 'Una cuadrícula está bien cuando no se nota. Lo que sí se nota es el efecto: márgenes constantes, alineaciones que coinciden y aire alrededor del texto.',
    preguntaDetonante: '¿Podrías decir cuántas columnas tiene la última página que leíste con atención?',
    activacion: {
      titulo: 'El vacío que dibuja',
      descripcion: 'En 2 minutos, mira una página cualquiera y fíjate solo en los espacios en blanco. ¿Se repiten? ¿Son iguales por los cuatro lados?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 1 analizaste tres piezas con los pilares de orden, jerarquía e intención.',
      siguiente: 'En la sesión 3 eliges el par tipográfico que va a vivir dentro de esta cuadrícula.'
    }
  },
  conceptosClave: [
    {
      termino: 'Cuadrícula modular',
      definicion: 'Retícula de cajas iguales. Sirve para galerías, catálogos y tableros, donde muchas piezas tienen el mismo peso.',
      ejemplo: 'Puesta bajo un texto largo obliga a saltar la vista cada pocas líneas.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Cuadrícula columnar',
      definicion: 'Columnas verticales del mismo ancho. Sirve para texto largo y lectura seguida.',
      ejemplo: 'Es la de los periódicos y la de casi cualquier libro con dos columnas.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Cuadrícula jerárquica',
      definicion: 'Zonas de tamaños distintos, pensada para cuando una pieza manda sobre las demás.',
      ejemplo: 'La portada de una revista, donde el titular y la imagen principal no compiten con lo demás.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Invisible cuando funciona',
      definicion: 'Si el lector percibe la retícula antes que el contenido, la cuadrícula falló.',
      ejemplo: 'Lo que sí debe notarse es el efecto: márgenes constantes y alineaciones que coinciden.',
      categoria: 'Cómo se juzga'
    },
    {
      termino: 'El vacío como parte del dibujo',
      definicion: 'El espacio entre bloques no es papel desperdiciado: es lo que hace legible todo lo demás.',
      ejemplo: 'En el calado se retiran hilos de la tela hasta que el vacío mismo dibuja.',
      categoria: 'Cómo se juzga'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes elegir una cuadrícula?',
      instrucciones: 'Cinco preguntas sobre los tres tipos, los márgenes y el vacío. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Vas a maquetar un texto largo de lectura seguida. ¿Qué cuadrícula sirve?',
          opciones: [
            'La modular, porque reparte el contenido en cajas iguales.',
            'La columnar, con columnas verticales del mismo ancho.',
            'La jerárquica, con una zona principal que domine la página.',
            'Cualquiera: el tipo de cuadrícula no afecta la lectura seguida.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La modular obligaría a saltar la vista cada pocas líneas.',
          feedbackIncorrecto: 'La columnar. Es la de los periódicos y la de casi cualquier libro.'
        },
        {
          enunciado: '¿Cuándo se puede decir que una cuadrícula está bien hecha?',
          opciones: [
            'Cuando el lector percibe la retícula antes que el contenido.',
            'Cuando usa el mayor número posible de columnas.',
            'Cuando no se nota, pero sí se nota su efecto.',
            'Cuando se dibuja con líneas visibles en la página final.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Lo que debe verse son los márgenes constantes y las alineaciones.',
          feedbackIncorrecto: 'Cuando no se nota. Si el lector ve la retícula antes que el contenido, algo falló.'
        },
        {
          enunciado: '¿Qué es el deshilado en el calado de Ansermanuevo?',
          opciones: [
            'Retirar hilos de la tela y reagrupar los que quedan.',
            'Añadir hilos de color sobre la tela ya tejida.',
            'Tejer con dos agujas siguiendo un patrón geométrico.',
            'Marcar el diseño con lápiz antes de bordarlo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Eso es. Se trabaja quitando, hasta que el vacío mismo dibuja.',
          feedbackIncorrecto: 'Retirar hilos y reagrupar los que quedan. Es un oficio que trabaja quitando.'
        },
        {
          enunciado: 'Tu página se ve apretada. ¿Cuál es la causa más probable?',
          opciones: [
            'Que la tipografía elegida es demasiado estrecha.',
            'Que hay demasiadas imágenes en la composición.',
            'Que faltan colores para separar las secciones.',
            'Que los márgenes son escasos o desiguales.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Casi todas las páginas apretadas tienen ese problema y no otro.',
          feedbackIncorrecto: 'Los márgenes. Por eso se trazan primero, antes que cualquier columna.'
        },
        {
          enunciado: '¿Qué significa que el vacío sea parte del dibujo?',
          opciones: [
            'Que conviene dejar páginas en blanco entre secciones.',
            'Que el espacio entre bloques es lo que hace legible lo demás.',
            'Que el papel sin usar abarata el costo de impresión.',
            'Que las imágenes deben tener fondos claros y neutros.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto, y es exactamente lo que hace el deshilado con la tela.',
          feedbackIncorrecto: 'Que el espacio entre bloques no sobra: es lo que permite leer lo demás.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus tres cuadrículas, ¿en cuál te costó más decidir los márgenes, y qué te hizo dudar?',
    transferencia: 'Mira una página que uses a diario y cuéntale a alguien cuántas columnas tiene. Casi nadie lo ha mirado nunca.',
    cierre: 'En el calado el vacío dibuja y el trabajo se hace por el revés. Una cuadrícula funciona igual.'
  },
  saberAncestral: {
    saber: 'En el Norte del Valle hay un oficio hermano del bordado que trabaja quitando en vez de poniendo: el calado. Ansermanuevo se llama a sí misma cuna del calado y el bordado. La técnica base es el deshilado. Se retiran hilos de la trama o de la urdimbre y se reagrupan los que quedan con puntadas, hasta que el vacío mismo dibuja. Hay dos cosas ahí que sirven para hoy. La primera: el vacío no es lo que sobra, es parte del dibujo. La segunda: la vainica se trabaja por el revés de la tela. Lo que se ve por delante depende por completo de lo que se hizo por detrás. Una cuadrícula es exactamente eso. La cara de exclusión: es un oficio precario, y el reconocimiento patrimonial en curso no equivale a un ingreso digno para las artesanas.',
    fuente: 'Caladoras de Ansermanuevo · el deshilado, donde el vacío dibuja',
    referencia: 'Soy Valle. (s.\\,f.). Ruta del bordado y el calado: Ansermanuevo, Cartago. Consultado en 2026.',
    preguntaPuente: 'En el calado, el vacío dibuja y el trabajo se hace por el revés. En tu página, ¿qué hay detrás de lo que se ve, y quién lo puso ahí?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El vacío también dibuja',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Cuadrículas reales',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los tres tipos',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tres cuadrículas dibujadas',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Cuadrículas reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca tres piezas con estructura visible, un plano en damero, una página de revista y un tablero digital.',
        'Dibuja encima de cada una las líneas que separan sus zonas.',
        'Cuenta cuántas columnas o módulos tiene cada una.',
        'Comprueba si los márgenes se repiten por los cuatro lados.',
        'Marca en cuál la estructura se nota demasiado.'
      ],
      cuaderno: {
        titulo: 'Cuadrículas reales',
        formato: 'tres bocetos con las líneas trazadas, su número de columnas o módulos y una nota sobre márgenes',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres piezas tienen sus líneas trazadas y su conteo.',
        'Está marcada aquella en la que la estructura se nota más de la cuenta.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los tres tipos',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los tres tipos con una frase propia cada uno.',
        'Asignen a cada una de sus seis piezas el tipo que le corresponde.',
        'Escriban, por tipo, un propósito al que sirva bien y otro al que sirva mal.',
        'Discutan una pieza donde el tipo elegido no parezca el adecuado y digan cuál usarían.'
      ],
      cuaderno: {
        titulo: 'Los tres tipos',
        formato: 'los tres tipos con frase propia, las seis piezas clasificadas y sus propósitos bien y mal servidos',
        extension: 'media página'
      },
      criterios: [
        'Cada tipo tiene un propósito al que sirve bien y otro al que no.',
        'Quedó resuelta la pieza cuyo tipo no parecía el adecuado.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Tres cuadrículas dibujadas',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Declara arriba de cada hoja A4 su propósito y el tipo de cuadrícula que le sirve.',
        'Dibuja los márgenes primero, iguales en las tres hojas.',
        'Traza la cuadrícula con regla.',
        'Ubica y rotula los bloques de contenido sobre ella.',
        'Pásaselas a un compañero sin los rótulos y pregúntale para qué cree que sirve cada una.'
      ],
      cuaderno: {
        titulo: 'Tres cuadrículas dibujadas',
        formato: 'los tres bocetos con su propósito, su tipo y sus bloques rotulados, más lo que adivinó tu compañero',
        extension: 'media página'
      },
      criterios: [
        'Las tres resuelven problemas distintos.',
        'Un compañero acertó el propósito de al menos dos.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.4.3',
      lente: 'lente del nosotros',
      cita: 'Los artefactos u objetos… que nos rodean en el mundo cotidiano… son entonces productos del trabajo humano… Si los entes son instrumentos producidos significa que fueron objeto de un cierto trabajo.',
      preguntaEspejo: '¿Qué cosa uso a diario que se ve tan sencilla que nunca pensé en quién la resolvió?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones II, 5 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Haz lo que tienes entre manos con dignidad perfecta y sencilla, con afecto, con libertad y con justicia, y líbrate de todo otro pensamiento. (trad. propia)',
      preguntaEspejo: '¿Qué paso aburrido me estoy saltando porque no se ve en el resultado?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 3.8',
      lente: 'lente de la infoesfera',
      cita: 'Creemos que todo el mundo necesita a la vez resguardo frente a la mirada pública y exposición… y también la generosidad del olvido deliberado. (trad. propia)',
      preguntaEspejo: '¿A qué parte de mi página le estoy negando el aire que necesita para poder leerse?'
    }
  },
  cincoDimensiones: {
    personal: 'Ya no vas a poder mirar una página sin contarle las columnas, y eso cambia cómo lees.',
    emocional: 'Trazar márgenes con regla es aburrido y decide el resultado. Muchas cosas importantes son así.',
    ciudadana: 'El trabajo que sostiene lo que se ve casi nunca se le reconoce a quien lo hizo.',
    local: 'En Ansermanuevo hay un oficio entero que consiste en quitar hilos hasta que el vacío dibuje.',
    intergeneracional: 'La vainica se trabaja por el revés desde hace generaciones. La estructura invisible no es una idea moderna.'
  }
};

export default contenido;
