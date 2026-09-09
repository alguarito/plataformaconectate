/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/9/9-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 7,
  titulo: 'Accesibilidad lectora — quién NO puede leer mi revista y por qué',
  resumen: 'La Ley 324 de 1996 llamó «lengua manual» a la lengua de señas, como si fuera un truco con las manos. La Ley 982 de 2005 corrigió y dijo lengua natural. Entre las dos cambia quién tiene que adaptarse: la persona o la institución. Hoy compruebas quién no puede leer tu revista y rediseñas un spread para que sí pueda.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Accesibilidad',
  preLectura: {
    porQueImporta: 'La exclusión no necesita mala intención. Basta con no hablar el idioma del otro y no haberse dado cuenta.',
    preguntaDetonante: '¿Alguna vez no pudiste leer algo por cómo estaba hecho, y creíste que el problema era tuyo?',
    activacion: {
      titulo: 'Al sol',
      descripcion: 'En 2 minutos, mira tu revista con la pantalla al mínimo de brillo o el papel bajo luz fuerte. Anota qué texto desaparece.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 6 montaste tus spreads con las herramientas digitales.',
      siguiente: 'En la sesión 8 aplicas el ojo del corrector sobre tu propia revista.'
    }
  },
  conceptosClave: [
    {
      termino: 'Perceptible',
      definicion: 'Que la información se pueda recibir por más de un sentido: contraste suficiente y texto alternativo en las imágenes.',
      ejemplo: 'Un contraste de al menos 4,5 a 1 entre texto y fondo es el piso realista.',
      categoria: 'Los cuatro ejes'
    },
    {
      termino: 'Robusto',
      definicion: 'Que la pieza funcione con las herramientas que la gente usa, incluidos los lectores de pantalla.',
      ejemplo: 'Un solo título principal por página y los subtítulos ordenados debajo.',
      categoria: 'Los cuatro ejes'
    },
    {
      termino: 'Texto alternativo',
      definicion: 'La descripción de la información que trae una imagen, no de la imagen misma. Quien no la ve debe quedar igual de informado.',
      ejemplo: '«Gráfico: el consumo baja a la mitad después de marzo», y no «imagen».',
      categoria: 'Cómo se aplica'
    },
    {
      termino: 'Información solo por color',
      definicion: 'Cuando el único indicio de algo es el color, y por tanto desaparece para quien no lo distingue.',
      ejemplo: 'Si el rojo significa «mal» y no hay otra marca, esa información no llega a todos.',
      categoria: 'Cómo se aplica'
    },
    {
      termino: 'Lengua natural',
      definicion: 'Lo que la Ley 982 de 2005 reconoció en la lengua de señas, corrigiendo el «lengua manual» de la Ley 324 de 1996.',
      ejemplo: 'Cambia quién debe adaptarse: no la persona, sino la institución que no habla ese idioma.',
      categoria: 'Por qué importa'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes quién no puede leer tu pieza?',
      instrucciones: 'Cinco preguntas sobre los cuatro ejes y el piso mínimo. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Qué corrigió la Ley 982 de 2005 respecto de la Ley 324 de 1996?',
          opciones: [
            'Que la lengua de señas es la lengua natural de la comunidad sorda.',
            'Que todos los colegios del país deben contar con intérprete en cada aula.',
            'Que la educación de las personas sordas debe ser gratuita.',
            'Que las señas deben enseñarse desde los primeros grados.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. La ley de 1996 la había llamado «lengua manual», como si fuera un truco con las manos.',
          feedbackIncorrecto: 'Corrigió el nombre: de «lengua manual» a lengua natural. Cambia quién debe adaptarse.'
        },
        {
          enunciado: 'Tu gráfico usa rojo para «mal» y verde para «bien», sin ninguna otra marca. ¿Qué falla?',
          opciones: [
            'El contraste entre el color del texto y el fondo de la página impresa.',
            'Que la información va solo por color y se pierde para quien no lo distingue.',
            'El tamaño de la letra usada en las etiquetas del gráfico.',
            'La estructura de títulos que recorre el lector de pantalla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Hace falta una segunda marca: una forma, un símbolo o una palabra.',
          feedbackIncorrecto: 'La información va solo por color. Quien no distingue rojo y verde no recibe nada.'
        },
        {
          enunciado: '¿Cuál de estos textos alternativos sirve?',
          opciones: [
            '«Imagen del gráfico que se incluye en este artículo.»',
            '«Fotografía a color tomada durante la jornada del evento.»',
            '«Gráfico: el consumo baja a la mitad después de marzo.»',
            '«Ilustración decorativa de la sección central de la revista.»'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Describe la información, así que quien no ve la imagen queda igual de informado.',
          feedbackIncorrecto: 'El que trae la información, no el que describe que hay una imagen.'
        },
        {
          enunciado: '¿Por qué se dice que un arreglo de accesibilidad rara vez sirve solo a pocos?',
          opciones: [
            'Porque suele abaratar de manera notable los costos de impresión de la pieza.',
            'Porque las normas obligan a aplicarlo a todo el documento.',
            'Porque simplifica el trabajo de quien diseña la página.',
            'Porque el contraste alto sirve con baja visión y también al sol.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí, y los subtítulos sirven a quien no oye y a quien va en un bus ruidoso.',
          feedbackIncorrecto: 'Porque lo que resuelve una barrera suele mejorar la lectura de todos.'
        },
        {
          enunciado: '¿Cuándo conviene pensar la accesibilidad de una pieza?',
          opciones: [
            'Al final, cuando el diseño ya está aprobado.',
            'Antes, porque rehacer cuesta más que decidirlo a tiempo.',
            'Solo si alguien del público lector la solicita de manera expresa.',
            'Únicamente en las piezas que se publican en internet.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Dejarla para el final obliga a rehacer lo que ya estaba montado.',
          feedbackIncorrecto: 'Antes. Es el error más común y el más caro de todos los de esta lista.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De los cambios que hiciste, ¿cuál mejoró la pieza también para quien no tenía ninguna barrera?',
    transferencia: 'Pásale la revista a alguien que use gafas y pregúntale qué le costó leer. Es la prueba más barata que existe.',
    cierre: 'La exclusión no necesita mala intención. Basta con no hablar el idioma del otro y no haberse dado cuenta.'
  },
  saberAncestral: {
    saber: 'Colombia tardó medio siglo en decir bien una sola cosa. La Ley 324 de 1996 reconoció la lengua de los sordos colombianos. Pero la llamó «lengua manual», como si fuera un truco con las manos. Hubo que esperar a la Ley 982 de 2005 para que la ley dijera lo correcto: la lengua de señas es la lengua natural de la comunidad sorda. La diferencia entre las dos leyes no es de palabras. Es la diferencia entre «este niño tiene un problema» y «este niño tiene un idioma que la escuela no habla». Fíjate en lo que eso cambia. En la primera versión, quien debe adaptarse es la persona. En la segunda, quien debe adaptarse es la institución. En un salón del Valle del Cauca esa diferencia decide algo concreto: si un estudiante sordo entra a la clase o se queda mirándola. La cara de exclusión: la exclusión no necesita mala intención. Basta con no hablar el idioma del otro y no haberse dado cuenta.',
    fuente: 'Ley 324 de 1996 y Ley 982 de 2005 · de «lengua manual» a lengua natural',
    referencia: 'Congreso de la República de Colombia. (2005, 2 de agosto). Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas. Diario Oficial.',
    preguntaPuente: 'La ley pasó de decir «lengua manual» a decir «lengua natural», y con eso cambió quién tenía que adaptarse. En tu revista, ¿quién se está adaptando a quién?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'De «lengua manual» a lengua natural',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Cuatro barreras en tu revista',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro ejes y su piso',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Rediseña un spread',
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
      titulo: 'Cuatro barreras en tu revista',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Aleja la revista o entrecierra los ojos y anota qué texto dejas de leer.',
        'Míralas en escala de grises y anota qué información se pierde.',
        'Tapa las fotos y comprueba si el texto solo sigue explicando.',
        'Pide que te lean la página en voz alta y anota qué no se entiende.',
        'Marca cuál barrera deja afuera a más gente.'
      ],
      cuaderno: {
        titulo: 'Cuatro barreras en mi revista',
        formato: 'tabla de 4 filas y 3 columnas (barrera / qué se pierde / a quién deja afuera)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Cada fila nombra qué información concreta se pierde.',
        'Está marcada la barrera que deja afuera a más gente.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro ejes y su piso',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro ejes con una frase propia cada uno.',
        'Ubiquen en ellos las cuatro barreras que encontraron.',
        'Escriban el piso mínimo de cada eje, con su número cuando lo tenga.',
        'Elijan un cambio que arregle dos ejes a la vez y expliquen por qué.'
      ],
      cuaderno: {
        titulo: 'Los cuatro ejes y su piso',
        formato: 'los cuatro ejes con frase propia, las barreras ubicadas y el piso mínimo con su número',
        extension: 'media página'
      },
      criterios: [
        'Cada eje tiene su piso mínimo escrito.',
        'Hay un cambio identificado que arregla dos ejes a la vez.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Rediseña un spread',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige el spread más débil de la prueba anterior.',
        'Verifica el contraste y súbelo si no llega al piso.',
        'Sube el cuerpo de letra hasta el mínimo.',
        'Escribe el texto alternativo de cada imagen informativa, con la información.',
        'Deja un solo título principal y anota cada cambio en la bitácora.'
      ],
      cuaderno: {
        titulo: 'Rediseña un spread',
        formato: 'el boceto del antes y el después y la bitácora con un renglón por cambio',
        extension: 'media página'
      },
      criterios: [
        'Ningún renglón de la bitácora se queda en describir el cambio.',
        'Cada imagen informativa tiene texto alternativo con contenido.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.2',
      lente: 'lente del nosotros',
      cita: 'Llamamos conciencia ética la capacidad que se tiene de escuchar la voz del otro, palabra transontológica que irrumpe desde más allá del sistema vigente. Puede que la protesta justa del otro ponga en cuestión los principios morales del sistema.',
      preguntaEspejo: '¿Qué me han dicho sobre mi trabajo que no quise oír porque me obligaba a rehacerlo?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 54 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Lo que no es bueno para el enjambre, tampoco es conducente para la abeja.',
      preguntaEspejo: '¿Qué arreglo hice pensando en alguien concreto y terminó mejorando la pieza entera?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.3',
      lente: 'lente de la infoesfera',
      cita: 'En una esfera pública plural, los demás no pueden reducirse a instrumentos, y hacen falta contención y respeto. (trad. propia, abreviada)',
      preguntaEspejo: '¿A qué lector le estoy diseñando por defecto, y a quién estoy dejando fuera sin haberlo decidido?'
    }
  },
  cincoDimensiones: {
    personal: 'Comprobaste en tu propio cuerpo qué se pierde con cada barrera, y eso se recuerda distinto que una norma.',
    emocional: 'Descubrir que tu pieza deja gente afuera incomoda. Es preferible descubrirlo ahora y no después de imprimir.',
    ciudadana: 'Diseñar suponiendo un solo tipo de lector es decidir, sin decirlo, para quién existe la pieza.',
    local: 'Hay una comunidad sorda colombiana cuya lengua tardó nueve años en ser nombrada correctamente por la ley.',
    intergeneracional: 'Quien lee con gafas hoy no leía con gafas hace veinte años. Casi todos vamos a necesitar ese contraste.'
  }
};

export default contenido;
