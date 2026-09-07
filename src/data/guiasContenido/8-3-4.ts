/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/8/8-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 4,
  titulo: 'Edición de imagen — lo que se puede tocar y lo que no',
  resumen: 'Editar una imagen es fácil; lo difícil es hacerlo con permiso y sin cambiar el sentido. Hoy aplicas cuatro ajustes y respondes cinco preguntas éticas, con la lección de las 122 piezas del Cauca medio regaladas sin preguntarle a nadie.',
  duracionMin: 90,
  subtema: 'Multimedia y ciberética',
  preLectura: {
    porQueImporta: 'Cada día se editan y publican fotos de personas que no dieron permiso. Saber qué se puede tocar y qué no es lo que separa una edición de un daño.',
    preguntaDetonante: 'Si recortas una foto de un compañero y le pones un texto que no dijo, ¿qué le estás quitando y a quién le pediste permiso?',
    activacion: {
      titulo: 'La foto que te editaron',
      descripcion: 'En 3 minutos, recuerda una foto tuya que alguien publicó o editó sin preguntarte. ¿Qué sentiste? Si no te ha pasado, ¿a quién le has hecho tú lo mismo?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 3 grabaste un discurso de tres minutos con tu voz.',
      siguiente: 'En la sesión 5 grabas y editas audio y exportas en dos formatos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Recorte',
      definicion: 'Quitar partes de la imagen para enfocar. Si quita el contexto que cambia el sentido, miente.',
      ejemplo: 'Recortar el balón deja a dos niños que parecen pelear cuando jugaban.',
      categoria: 'Los ajustes'
    },
    {
      termino: 'Brillo y contraste',
      definicion: 'Brillo aclara u oscurece todo; contraste separa claros y oscuros. Se usan para que se vea mejor, no para que parezca otra cosa.',
      ejemplo: 'Una foto oscura del salón se aclara sin cambiar quién está.',
      categoria: 'Los ajustes'
    },
    {
      termino: 'Texto agregado',
      definicion: 'Un título o nota sobre la imagen. Describe lo que hay; nunca pone palabras en boca de alguien.',
      ejemplo: '«Jornada deportiva, 8.º B» sí; una frase que la persona no dijo, no.',
      categoria: 'Los ajustes'
    },
    {
      termino: 'Permiso explícito',
      definicion: 'La persona que aparece, o sus padres si es menor, dice que sí, y se anota con nombre y fecha.',
      ejemplo: '«Le pregunté a Sara el martes y dijo que sí, para el afiche del festival».',
      categoria: 'La ética'
    },
    {
      termino: 'Ley 1581 de 2012',
      definicion: 'La ley colombiana de protección de datos personales. La imagen de tu rostro es un dato personal.',
      ejemplo: 'Publicar la foto de un compañero sin permiso va contra esa ley.',
      categoria: 'La ética'
    },
    {
      termino: 'Fuente declarada',
      definicion: 'Decir de quién es la foto cuando no es tuya. Una imagen sin fuente es como una pieza sin procedencia.',
      ejemplo: '«Foto: archivo del colegio, 2025».',
      categoria: 'La ética'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué se puede tocar y qué no?',
      instrucciones: 'Cinco preguntas para verificar que dominas los cuatro ajustes y las cinco preguntas éticas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Recortas una foto de dos compañeros y dejas por fuera el balón con el que jugaban. Ahora parece que pelean. ¿Qué hiciste?',
          opciones: [
            'Un recorte correcto, porque el balón no era lo importante.',
            'Un recorte que quita el contexto y cambia el sentido.',
            'Un ajuste de contraste, porque ahora se ven más definidos.',
            'Nada grave, porque no tocaste los rostros.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin tocar un píxel del rostro, el recorte hizo que la foto mintiera.',
          feedbackIncorrecto: 'No tocar el rostro no basta. Quitar el balón cambia lo que pasa en la foto: es un recorte que engaña.'
        },
        {
          enunciado: 'Quieres usar en un afiche una foto de tu compañera de 13 años. ¿Quién debe dar el permiso?',
          opciones: [
            'Nadie, porque es para un trabajo del colegio.',
            'Ella sola, porque es su cara.',
            'Ella y sus padres, porque es menor de edad.',
            'El docente, porque él revisa el afiche.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Para menores, el permiso lo dan los padres, y también se le pregunta a ella.',
          feedbackIncorrecto: 'Ser para el colegio no exime del permiso, y el docente no lo reemplaza. Para menores, lo dan los padres.'
        },
        {
          enunciado: 'Bajas una foto de internet para tu pieza. ¿Qué te falta hacer?',
          opciones: [
            'Nada, porque si está en internet es de todos.',
            'Aplicarle un filtro para que no se note que es bajada.',
            'Recortarle la marca de agua para que quede limpia.',
            'Declarar de quién es la foto y de dónde salió.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Una imagen sin fuente es como una pieza sin procedencia. Se dice de quién es.',
          feedbackIncorrecto: 'Estar en internet no la vuelve tuya, y quitar la marca de agua es peor. Se declara la fuente.'
        },
        {
          enunciado: 'Respondiste sí a cuatro preguntas éticas y «no sé» a «¿tengo permiso?». ¿Publicas?',
          opciones: [
            'Sí, porque cuatro de cinco es una buena nota.',
            'Sí, pero con una nota que diga que faltó el permiso.',
            'No, porque una sola respuesta mala basta para no publicar.',
            'Sí, si la persona no aparece de frente.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Las cinco preguntas no se promedian. Sin permiso, no se publica hasta tenerlo.',
          feedbackIncorrecto: 'No es un promedio ni se arregla con una nota. Sin permiso, no se publica.'
        },
        {
          enunciado: '¿Por qué la Corte Constitucional ordenó en 2017 buscar la devolución de las 122 piezas de Filandia?',
          opciones: [
            'Porque las piezas se rompieron en el museo de Madrid.',
            'Porque el regalo de 1893 violó el patrimonio público de todos los colombianos.',
            'Porque España pidió que se las llevaran de vuelta.',
            'Porque el Museo del Oro necesitaba más piezas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Se regaló algo que era de todos, sin preguntarle a nadie. La Corte declaró vulnerados la moralidad administrativa y el patrimonio público.',
          feedbackIncorrecto: 'No se rompieron ni España las devolvió. La Corte dijo que regalar sin permiso algo que era patrimonio de todos violó ese derecho.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de las cinco preguntas te costó más responder, y qué habrías tenido que hacer para que la respuesta fuera sí?',
    transferencia: 'La próxima vez que vayas a publicar una foto con alguien, hazte las cinco preguntas antes de tocar el botón. Una sola mala respuesta basta para no publicar.',
    cierre: 'Recortar, aclarar, escribir: fácil. Preguntar de quién es y si dio permiso: eso es editar con ética.'
  },
  saberAncestral: {
    saber: 'Hace más de mil años, orfebres del Cauca medio, hoy Quindío, fundieron en oro poporos y figuras que los coleccionistas llamaron «quimbayas». En 1891 el Estado colombiano compró 122 de esas piezas, encontradas en Filandia. En 1893 el presidente encargado Carlos Holguín las regaló a la reina regente de España. Nadie les preguntó a los pueblos del Cauca medio ni a los colombianos. Las piezas siguen en el Museo de América, en Madrid. En 2017 la Corte Constitucional dijo que ese regalo violó dos derechos de todos: la moralidad administrativa y el patrimonio público. Y ordenó al Estado hacer todo lo necesario para «repatriar y/o readquirir las 122 piezas» (Corte Constitucional, 2017). Lo que está en juego: algo que no era de quien lo regaló, sacado del lugar que le daba sentido. La cara de exclusión: ocho años después, las piezas no han vuelto. La Cancillería alegó que ninguna ley internacional obliga a devolver un regalo entre Estados. Y los orfebres que las hicieron no tienen voz en el pleito. Hoy vas a editar una imagen y antes de tocarla vas a preguntarte lo mismo: de quién es y quién dio permiso.',
    fuente: 'Orfebres prehispánicos del Cauca medio · la Colección Quimbaya y la sentencia SU-649 de 2017',
    referencia: 'Corte Constitucional de Colombia. (2017). Sentencia SU-649/17 (M. P. Alberto Rojas Ríos), 19 de octubre.',
    preguntaPuente: 'Las piezas de Filandia se regalaron sin preguntarle a nadie y se exhiben lejos de donde tenían sentido. Si recortas una foto de un compañero y le pones un texto que no dijo, ¿qué le estás quitando y a quién le pediste permiso?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las 122 piezas de Filandia',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Tres versiones de la misma foto',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Los cuatro ajustes con permiso',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Tu imagen y las cinco preguntas',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tres versiones de la misma foto',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira las tres versiones que proyecta tu docente, original, recortada y con texto, y escribe en una línea qué pasa en cada una.',
        'Compara tus tres líneas y marca cuál versión te hizo pensar algo distinto de la original.',
        'Escribe qué se quitó en el recorte y qué se agregó en el texto.',
        'Escribe a quién habría que pedirle permiso antes de publicar cualquiera.'
      ],
      cuaderno: {
        titulo: 'Tres versiones de la misma foto',
        formato: 'tres líneas, una por versión, la nota de qué se quitó y qué se agregó, y la línea del permiso',
        extension: 'media página'
      },
      criterios: [
        'Puedes decir cuál versión miente y con qué herramienta.',
        'Escribiste a quién pedirle permiso.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Los cuatro ajustes con permiso',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, elijan una foto sin rostros ajenos o una propia con permiso dado en voz alta, y guarden una copia del original.',
        'Recorten para enfocar lo importante sin quitar el contexto que cambia el sentido.',
        'Ajusten brillo y contraste hasta que se vea mejor sin que parezca otra cosa.',
        'Agreguen un texto corto que describa, no que invente, y guarden el después.'
      ],
      cuaderno: {
        titulo: 'Los cuatro ajustes con permiso',
        formato: 'el nombre de la foto y de quién es, los cuatro ajustes con una línea cada uno, y la nota del permiso',
        extension: 'media página'
      },
      criterios: [
        'Tienes el antes y el después guardados.',
        'Puedes decir qué hizo cada ajuste.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Tu imagen y las cinco preguntas',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Elige tu propia imagen, sin rostros ajenos o con permiso anotado, aplica los cuatro ajustes y guarda antes y después.',
        'Responde por escrito las cinco preguntas, con una línea de explicación cada una.',
        'Si alguna respuesta es «no» o «no sé», escribe qué tendrías que hacer antes de publicar.',
        'Muéstrale el después a quien aparece, o a tu pareja, y pregúntale si la reconoce y si la publicaría.'
      ],
      cuaderno: {
        titulo: 'Tu imagen y las cinco preguntas',
        formato: 'el antes y el después pegados o con enlace, las cinco preguntas con respuesta y línea, la nota del permiso y lo que dijo quien aparece',
        extension: 'una página'
      },
      criterios: [
        'Las cinco respuestas están escritas.',
        'Ninguna es «no» sin un plan para arreglarlo.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.2.2',
      lente: 'lente del nosotros',
      cita: 'El rostro del otro se revela como alguien, no como una cosa más entre mis instrumentos.',
      preguntaEspejo: '¿Qué foto de alguien tengo guardada como si fuera un archivo cualquiera?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 45 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Si ves a alguien hacer algo, no digas que lo hizo mal: no sabes desde dónde juzgar.',
      preguntaEspejo: '¿Qué foto recortada me hizo juzgar a alguien esta semana, y qué no me mostró?'
    },
    floridi: {
      autor: 'Luciano Floridi · Hyperhistory and the Philosophy of Information Policies (2015)',
      lente: 'lente de la infoesfera',
      cita: 'Somos organismos hechos también de información, que vivimos en un entorno de información.',
      preguntaEspejo: '¿Qué parte de mí anda en fotos que otros editaron sin preguntarme?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste que la herramienta es lo fácil y el permiso es lo difícil. Esa distinción te sirve para cada foto que publiques.',
    emocional: 'Ver una foto tuya recortada para que parezca otra cosa duele. Preguntar antes de editar la de alguien es no hacerle eso.',
    ciudadana: 'La ley protege la imagen de las personas porque es parte de ellas. Pedir permiso y declarar la fuente es cumplirla, no un favor.',
    local: 'Las 122 piezas del Cauca medio se regalaron sin preguntar y siguen lejos. Una foto sin permiso es la misma historia en pequeño.',
    intergeneracional: 'Una imagen con permiso anotado y fuente declarada se puede reutilizar dentro de años. Una sin permiso es un problema que espera.'
  }
};

export default contenido;
