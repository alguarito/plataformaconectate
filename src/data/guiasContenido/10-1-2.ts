/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/10/10-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 2,
  titulo: 'Concebir tu libro — género, tema, audiencia y escaleta',
  resumen: 'Cierras las cuatro decisiones que sostienen el libro — género, tema, audiencia y propósito — y construyes la escaleta de capítulos antes de pedirle un solo borrador a la IA.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Concepción y escaleta',
  preLectura: {
    porQueImporta: 'Sin género, audiencia y propósito decididos, la IA produce capítulos que no conversan entre sí. La escaleta es lo que convierte diez textos sueltos en un libro.',
    preguntaDetonante: 'Si tuvieras que decir en dos frases de qué trata tu libro y para quién es, ¿podrías hacerlo hoy?',
    activacion: {
      titulo: 'Cuatro versos antes de empezar',
      descripcion: 'En 3 minutos, escribe en una sola frase de qué trataría tu libro. Después táchala y escríbela otra vez más corta. La segunda suele ser la buena.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 1 aceptaste el rol de editor y declaraste tres decisiones preliminares.',
      siguiente: 'En la sesión 3 conviertes esa escaleta en prompts profesionales para los primeros borradores.'
    }
  },
  conceptosClave: [
    {
      termino: 'Género específico',
      definicion: 'La forma concreta del libro, nombrada con precisión. «Ficción» no es un género: es una categoría.',
      ejemplo: '«Novela juvenil de aventura» o «manual práctico paso a paso» sí orientan cada decisión posterior.',
      categoria: 'Las cuatro decisiones'
    },
    {
      termino: 'Tema',
      definicion: 'Qué pregunta o problema explora el libro, dicho en una o dos frases declarativas.',
      ejemplo: '«Por qué los videojuegos cooperativos enganchan distinto que los competitivos.»',
      categoria: 'Las cuatro decisiones'
    },
    {
      termino: 'Audiencia',
      definicion: 'Edad concreta, contexto y conocimiento previo que se le supone a quien va a leer.',
      ejemplo: '«Estudiantes de bachillerato del Valle que ya juegan pero nunca han programado.»',
      categoria: 'Las cuatro decisiones'
    },
    {
      termino: 'Propósito',
      definicion: 'Qué se lleva quien lee, dicho con un verbo de cambio. No es «compartir mis ideas».',
      ejemplo: '«Que entienda por qué su barrio se llama como se llama y quién decidió ese nombre.»',
      categoria: 'Las cuatro decisiones'
    },
    {
      termino: 'Escaleta',
      definicion: 'La lista preliminar de capítulos con título y resumen de cada uno. Es mapa de partida, no compromiso definitivo.',
      ejemplo: 'Diez capítulos de ocho páginas, cada uno con dos o tres líneas de qué pasa dentro.',
      categoria: 'El mapa del libro'
    },
    {
      termino: 'Justificación',
      definicion: 'Las cinco líneas que responden por qué tú, por qué le importaría a tu audiencia y qué tiene de distinto.',
      ejemplo: 'Si las tres respuestas no aparecen, conviene cambiar de tema hoy y no en la sesión 6.',
      categoria: 'El mapa del libro'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica la concepción editorial',
      instrucciones: '5 preguntas para confirmar que puedes concebir un libro antes de escribirlo. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas formulaciones de género es la más útil para trabajar?',
          opciones: [
            'Ficción, que ya delimita bastante frente a los libros de no ficción existentes',
            'Novela juvenil de aventura ambientada en el Pacífico colombiano',
            'Un libro entretenido con personajes que la gente joven pueda sentir cercanos',
            'Literatura, entendida como el conjunto de obras escritas con intención estética'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Cuanto más específico el género, más decisiones quedan resueltas de antemano.',
          feedbackIncorrecto: '«Ficción» y «literatura» son categorías, no géneros. Un género dice qué forma tiene el libro.'
        },
        {
          enunciado: 'Defines tu audiencia como «adolescentes». ¿Qué le falta a esa definición?',
          opciones: [
            'Nada en particular, porque adolescentes ya acota bastante el rango de edad',
            'Falta decir en qué país viven, que es lo único que cambia entre unos y otros',
            'Falta el contexto y el conocimiento previo que se le supone a quien lee',
            'Falta indicar cuántos lectores se espera alcanzar con la publicación del libro'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Un adolescente que ya programa y uno que nunca abrió un editor necesitan dos libros distintos.',
          feedbackIncorrecto: 'No es cuestión de país ni de cantidad. Falta qué contexto tiene y qué sabe ya quien va a leer.'
        },
        {
          enunciado: '¿Cuántos capítulos suele tener la escaleta de un libro de ochenta páginas?',
          opciones: [
            'Entre veinte y treinta, para que cada capítulo se lea rápido y de una sentada',
            'Entre tres y cuatro, para desarrollar cada idea con toda la profundidad posible',
            'Los que hagan falta, porque el número depende únicamente del tema que se trate',
            'Entre ocho y doce, lo que deja entre seis y diez páginas para cada uno'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Veinte capítulos en ochenta páginas dejan cuatro cada uno, y todo queda fragmentado.',
          feedbackIncorrecto: 'La cuenta es sencilla: ochenta páginas entre ocho y doce capítulos da un tamaño que se puede desarrollar.'
        },
        {
          enunciado: '¿Qué tiene que responder la justificación de cinco líneas?',
          opciones: [
            'Por qué te importa a ti, por qué le importaría a tu audiencia y qué tiene de distinto',
            'Qué metodología vas a seguir y con qué herramientas piensas producir el libro',
            'Cuánto tiempo te va a tomar escribirlo y en cuántas sesiones piensas repartirlo',
            'Qué libros parecidos existen ya y en qué se te parecen los que vas a consultar'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Si alguna de las tres no aparece, conviene cambiar de tema hoy y no en la sesión 6.',
          feedbackIncorrecto: 'No es método ni cronograma. Es por qué tú, por qué ellos y por qué este y no otro.'
        },
        {
          enunciado: 'El decimero declara una copla de cuatro versos y cada décima cierra volviendo a uno de ellos. ¿Qué aplica eso a tu libro?',
          opciones: [
            'Que conviene que todos los capítulos terminen con la misma frase para dar unidad',
            'Que la esencia se declara al principio y cada parte vuelve a ella; eso es la escaleta',
            'Que la escritura por encargo funciona mejor cuando existe una tradición que la respalde',
            'Que un libro debería tener siempre el mismo número de capítulos que de temas tratados'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Lo que se va a decir queda anunciado al comienzo, y cada parte cierra regresando a él.',
          feedbackIncorrecto: 'No se trata de repetir una frase ni de contar capítulos. Se trata de declarar la esencia antes de empezar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Si le leyera un capítulo a la persona que dije que era mi audiencia, ¿sonaría escrito para ella?',
    transferencia: 'Llega a la próxima sesión con la ficha completa y la escaleta de ocho a doce capítulos. Sin ellas, los prompts de la sesión 3 no tienen a qué agarrarse.',
    cierre: 'Al terminar podrás: (1) identificar entre varios temas propios cuál sostiene un libro de ocho a doce capítulos; (2) analizar tu audiencia concreta con edad, contexto y conocimiento previo, y el género que le corresponde; (3) crear la ficha editorial completa con escaleta y una ju…'
  },
  saberAncestral: {
    saber: 'Los decimeros del Pacífico, en Guapi y en el río Saija, componen décimas glosadas. La forma está decidida antes de la primera palabra. Se declara primero una copla de cuatro versos. Después vienen cuatro décimas, y cada una termina en el verso que le corresponde de esa copla. Son cuarenta y cuatro versos en total. Lo que se va a decir queda anunciado al comienzo, y cada parte cierra regresando a él. La autoría tampoco es fija: cada quien añade o cambia. Y no es folclor. Ulrich Oslender las estudia como discursos ocultos de resistencia de comunidades negras que disputan el reconocimiento de su territorio (Oslender, 2003). La cara de exclusión está en quién sostiene esa memoria, porque la tradición depende de mayores cada vez menos escuchados.',
    fuente: 'Decimeros del Pacífico · la copla que se declara antes de las cuatro décimas',
    referencia: 'Oslender, U. (2003). «Discursos ocultos de resistencia»: tradición oral y cultura política en comunidades negras de la costa pacífica colombiana. Revista Colombiana de Antropología, 39, 203--236.',
    preguntaPuente: '¿Por qué un decimero declara los cuatro versos antes de empezar, si podría improvisar sin anunciarlos? ¿Y qué pierde quien le pide un libro a una IA sin haber decidido género, audiencia ni propósito?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La copla que se declara primero',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Cinco temas propios',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Anatomía de la concepción',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Mi ficha editorial',
      duracionMin: 35
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
      titulo: 'Cinco temas propios',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota cinco temas que de verdad te importen, te molesten o te den curiosidad.',
        'Comprueba que sean tuyos y no los que crees que deberían importarte.',
        'No descartes ninguno por parecer difícil o poco viable.',
        'Escribe al lado de cada uno por qué te importa a ti.'
      ],
      cuaderno: {
        titulo: 'Cinco temas propios',
        formato: 'lista numerada de cinco con una línea por tema sobre por qué importa',
        extension: 'un tercio de página'
      },
      criterios: [
        'Los cinco temas son propios y no de compromiso.',
        'Cada uno tiene escrita su razón personal.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía de la concepción',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las cuatro decisiones de concepción con un ejemplo de cada una.',
        'Escriban la estructura mínima de una entrada de escaleta.',
        'Escriban los cinco errores del editor novato.',
        'Cada uno pasa sus cinco temas por los tres filtros y dice cuál queda de finalista.'
      ],
      cuaderno: {
        titulo: 'Anatomía de la concepción',
        formato: 'las cuatro decisiones con ejemplo, la entrada de escaleta, los cinco errores y el tema finalista',
        extension: 'media página'
      },
      criterios: [
        'El tema finalista pasó los tres filtros, no se eligió por gusto.',
        'Está marcado el error que más se teme cometer.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Mi ficha editorial',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Declara el género específico en tres a cinco palabras.',
        'Escribe el tema en una o dos frases declarativas y define la audiencia.',
        'Declara el propósito en una frase con verbo de cambio.',
        'Construye la escaleta de ocho a doce capítulos, cada uno con título y resumen.',
        'Escribe la justificación de cinco líneas y lee toda la ficha en voz alta.'
      ],
      cuaderno: {
        titulo: 'Ficha editorial de mi libro',
        formato: 'la ficha con sus seis campos y la escaleta completa',
        extension: 'una página'
      },
      criterios: [
        'La escaleta tiene entre ocho y doce capítulos, cada uno con resumen.',
        'La justificación responde por qué tú, por qué ellos y por qué distinto.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.4.4',
      lente: 'lente del nosotros',
      cita: 'Hay lengua cotidiana (la de todos los días), lengua de culturas ilustradas, de cultura de masas, lengua de cultura popular… lengua política (que se comprende no por lo que dice sino por lo que calla, contra quién lo dice, cuándo y por qué…).',
      preguntaEspejo: 'Si le leyera un capítulo a la persona que dije que era mi audiencia, ¿sonaría escrito para ella?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 2 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Empalagarse con muchas cosas es lo propio de los estómagos hastiados. Lo mucho y lo muy diverso, no nutre: contamina.',
      preguntaEspejo: 'De los cinco temas, ¿elegí uno de verdad o metí pedazos de los otros cuatro en la escaleta?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Una de las preguntas políticas apremiantes que enfrentamos en las sociedades de la información avanzadas es: ¿en qué clase de proyecto humano estamos trabajando? (trad. propia)',
      preguntaEspejo: 'Si este libro no existiera, ¿qué se perdería, y quién lo notaría?'
    }
  },
  cincoDimensiones: {
    personal: 'Elegir un tema entre cinco obliga a saber qué te importa de verdad. Es una pregunta que pocas veces se hace en voz alta.',
    emocional: 'Descartar cuatro temas que también te gustaban cuesta. Concebir es sobre todo renunciar a los libros que no vas a escribir.',
    ciudadana: 'Definir para quién escribes es reconocer que hay alguien al otro lado. Un libro «para todos» suele estar escrito para nadie.',
    local: 'El decimero declara su copla antes de empezar, y cada décima cierra volviendo a uno de esos versos. La forma se decide primero.',
    intergeneracional: 'En la décima la autoría no es fija: cada quien añade o cambia. Tu escaleta también va a pasar por otras manos antes de ser libro.'
  }
};

export default contenido;
