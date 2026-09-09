/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 10
 * (sesión global 30).
 *
 * Auto-generado desde content/guias/8/8-3-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 10,
  titulo: 'Sustentación pública y portafolio digital del grado 8',
  resumen: 'En los cabildos del Cauca la autoridad se recibe y se devuelve al año, y quien la tuvo rinde cuentas. Hoy devuelves un año de trabajo en diez minutos: seis piezas curadas en un portafolio digital, una carta abierta de cuatro párrafos y la sustentación pública con demostración en vivo del proyecto integrador.',
  duracionMin: 90,
  subtema: 'Cierre del año · sustentación y portafolio',
  preLectura: {
    porQueImporta: 'Un portafolio con descripciones lo entiende alguien que no estuvo en tus clases. Sin ellas, es una carpeta de archivos que nadie va a abrir dos veces.',
    preguntaDetonante: 'Si solo pudieras mostrar una pieza de todo el año, ¿cuál sería y qué demuestra?',
    activacion: {
      titulo: 'La primera pieza',
      descripcion: 'En 2 minutos, escribe cuál trabajo del año mostrarías primero y qué aprendiste haciéndolo. Sin adjetivos: qué aprendiste.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 9 armaste el proyecto integrador sobre un problema real de tu entorno.',
      siguiente: 'En noveno trabajas con bases de datos y análisis de información, partiendo de este proyecto.'
    }
  },
  conceptosClave: [
    {
      termino: 'Curaduría',
      definicion: 'Elegir pocas piezas que demuestren aprendizaje, en vez de mostrar todo lo producido. Seleccionar es parte de lo que se evalúa.',
      ejemplo: 'Seis piezas con descripción comunican más que treinta archivos sueltos en una carpeta.',
      categoria: 'El portafolio'
    },
    {
      termino: 'Descripción de la pieza',
      definicion: 'Dos o tres líneas que dicen qué problema resolvía esa pieza y qué aprendiste haciéndola.',
      ejemplo: '«Mini-estudio de tiempo de pantalla. Aquí entendí que el promedio escondía un caso de once horas.»',
      categoria: 'El portafolio'
    },
    {
      termino: 'Párrafo concreto',
      definicion: 'Un párrafo que cuenta qué pasó, con datos o hechos, en vez de declarar que se aprendió mucho.',
      ejemplo: '«Aprendí cosas sobre datos» no es un párrafo. «El promedio era cuatro horas y un compañero tenía once» sí.',
      categoria: 'La carta'
    },
    {
      termino: 'Los cuatro bloques',
      definicion: 'Proyecto integrador en tres minutos, portafolio en tres, carta en dos y cierre en dos. Después, cinco minutos de preguntas.',
      ejemplo: 'Si hay que recortar, se recorta del recorrido del portafolio, nunca de la carta.',
      categoria: 'La sustentación'
    },
    {
      termino: 'Rendir cuentas',
      definicion: 'Contar qué se hizo con lo que se recibió, incluyendo lo que quedó a medias. Es lo que hace el cabildo al terminar su año.',
      ejemplo: '«Mi propuesta todavía no llegó a la junta del barrio» es parte de la sustentación, no un defecto que se esconde.',
      categoria: 'La sustentación'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes cerrar bien un año de trabajo?',
      instrucciones: 'Cinco preguntas sobre curaduría, portafolio, carta y sustentación. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Qué convierte una carpeta de archivos en un portafolio?',
          opciones: [
            'Que los archivos estén ordenados alfabéticamente por su nombre.',
            'Que cada pieza tenga dos o tres líneas sobre qué demuestra.',
            'Que el portafolio esté hecho en una plataforma profesional de pago.',
            'Que contenga absolutamente todo lo producido durante el año escolar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin descripción, quien no estuvo en clase no sabe qué está viendo.',
          feedbackIncorrecto: 'Las descripciones. El formato da igual; lo que comunica son las dos o tres líneas por pieza.'
        },
        {
          enunciado: 'Si tu sustentación se pasa de diez minutos, ¿de dónde recortas?',
          opciones: [
            'Del recorrido del portafolio.',
            'De la carta abierta, que se puede resumir.',
            'Del proyecto integrador, que ya está en el portafolio.',
            'De los cinco minutos de preguntas del grupo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El portafolio se puede resumir; la carta se lee completa.',
          feedbackIncorrecto: 'Del recorrido del portafolio. La carta se lee completa y las preguntas no son tuyas para recortar.'
        },
        {
          enunciado: '¿Cuál de estos párrafos sirve para la carta abierta?',
          opciones: [
            '«Este año aprendí muchas cosas nuevas y muy interesantes.»',
            '«El periodo dos fue difícil pero al final me gustó bastante.»',
            '«El promedio del grupo era cuatro horas y un compañero tenía once.»',
            '«Agradezco a mi profesor y a mis compañeros por todo el año.»'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Cuenta qué pasó, con un dato. Los otros tres podrían ser de cualquiera.',
          feedbackIncorrecto: 'El que cuenta un hecho concreto. Los demás no dicen qué aprendiste, solo que aprendiste.'
        },
        {
          enunciado: 'Durante las preguntas, alguien señala un error que no habías visto. ¿Qué haces?',
          opciones: [
            'Explicas que esa parte no era el foco de tu trabajo.',
            'Defiendes tu decisión original hasta terminar el tiempo.',
            'Anotas la pregunta y ofreces responderla por escrito después.',
            'Lo reconoces y dices qué cambiarías.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Cambiar de parecer delante de quien te corrige sostiene la sustentación, no la debilita.',
          feedbackIncorrecto: 'Se reconoce y se dice qué cambiarías. Esquivarlo se nota más que el error mismo.'
        },
        {
          enunciado: '¿Por qué el cabildo del Cauca sirve como imagen para esta sesión?',
          opciones: [
            'Porque la autoridad se recibe por un año y después se devuelve rindiendo cuentas.',
            'Porque sus decisiones se toman siempre por unanimidad del grupo.',
            'Porque sus integrantes son elegidos entre los mayores del resguardo.',
            'Porque su funcionamiento quedó fijado en la Constitución de 1991.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El mandato es temporal y termina con la rendición, igual que tu año.',
          feedbackIncorrecto: 'Porque el mandato dura un año y se devuelve rindiendo cuentas. Eso es lo que hoy haces tú.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De las seis piezas del portafolio, ¿cuál te costó más dejar fuera y por qué al final no entró?',
    transferencia: 'Guarda el enlace del portafolio en un lugar que abras en enero. Un portafolio que no se encuentra es igual que uno que no existe.',
    cierre: 'El cabildo devuelve el bastón y rinde cuentas. Tú devolviste un año en diez minutos, con lo bueno y lo que quedó a medias.'
  },
  saberAncestral: {
    saber: 'En los pueblos indígenas del Cauca, la autoridad no se toma: se recibe y se devuelve. El cabildo es elegido y reconocido por la propia comunidad, y su periodo dura un año. Así lo define el Decreto 2164 de 1995: una entidad pública especial, «elegidos y reconocidos por ésta». A quien recibe el cargo se le entrega un bastón de mando de madera de chonta con cintas de colores. Lo carga durante ese año y después pasa a otra persona. Desde 1991, el artículo 246 de la Constitución reconoce que esas autoridades pueden juzgar dentro de su territorio con sus propias normas. Lo que enseña esa figura es preciso: el mandato es temporal y termina rindiendo cuentas. La cara de exclusión está en el origen legal. La ley de 1890 que reconoció los cabildos lleva un título explícitamente racista, y la Corte Constitucional ya derribó tres de sus artículos. Hoy te toca a ti devolver lo que recibiste durante un año, delante de tu grupo.',
    fuente: 'Cabildos del Cauca · la autoridad que se recibe y se devuelve al año',
    referencia: 'Presidencia de la República de Colombia. (1995, 7 de diciembre). Decreto 2164 de 1995.',
    preguntaPuente: 'El cabildo devuelve el bastón al año y rinde cuentas de lo que hizo con él. Tú vas a devolver un año de trabajo en diez minutos. ¿Qué seis piezas cuentan de verdad lo que aprendiste?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La autoridad que se recibe y se devuelve',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '🔎'
      ],
      titulo: 'Actividad 1 · Curaduría del año',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · El plan de los diez minutos',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Portafolio, carta y sustentación',
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
      verbo: 'ANALIZA',
      titulo: 'Curaduría del año',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Revisa tus cuadernos y tus archivos de los tres periodos.',
        'Elige máximo seis piezas, dos por periodo más el proyecto integrador.',
        'Escribe al lado de cada una, en una línea, qué demuestra.',
        'Marca cuál pondrías primera si solo pudieras mostrar una.'
      ],
      cuaderno: {
        titulo: 'Curaduría del año',
        formato: 'lista de seis piezas con una línea cada una sobre qué demuestra',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las seis piezas cubren los tres periodos.',
        'Ninguna está por ser la más fácil, sino por lo que demuestra.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'El plan de los diez minutos',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban el plan minuto a minuto de los cuatro bloques.',
        'Armen el esqueleto del portafolio con los tres periodos y las seis piezas en su sitio.',
        'Escriban la primera frase de cada párrafo de la carta, la que dice qué aprendieron en concreto.',
        'Explíquenle su plan al otro en tres minutos y anoten qué no se entendió.'
      ],
      cuaderno: {
        titulo: 'El plan de los diez minutos',
        formato: 'el plan minuto a minuto, el esqueleto del portafolio y la primera frase de cada párrafo de la carta',
        extension: 'media página'
      },
      criterios: [
        'El plan asigna tiempo a los cuatro bloques y suma diez minutos.',
        'Tu pareja señaló qué parte no se entendió.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Portafolio, carta y sustentación',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Arma el portafolio con las seis piezas y sus descripciones.',
        'Escribe la carta abierta de cuatro párrafos, fírmala y féchala.',
        'Ensaya con cronómetro por lo menos dos veces.',
        'Sustenta delante del grupo con la demostración en vivo del proyecto integrador.',
        'Responde las preguntas y anota la que te costó más.'
      ],
      cuaderno: {
        titulo: 'Portafolio, carta y sustentación',
        formato: 'el enlace del portafolio, la carta completa, el plan minuto a minuto y las preguntas con lo que respondiste',
        extension: 'media página'
      },
      criterios: [
        'La sustentación cupo en los diez minutos.',
        'Anotaste la pregunta que más te costó y qué averiguarías.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.9.4.1',
      lente: 'lente del nosotros',
      cita: 'Como los temas son infinitos y el tiempo corto, hay que saber perder tiempo eligiendo cuáles importan.',
      preguntaEspejo: '¿Qué dejé fuera del portafolio, y estoy seguro de por qué?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Eres igual de libre para cambiar de parecer que para seguir el consejo de quien te corrige.',
      preguntaEspejo: '¿Qué me dijeron hoy que me hizo cambiar de opinión sobre algo que ya daba por hecho?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 2.3',
      lente: 'lente de la infoesfera',
      cita: 'La abundancia de información también produce sobrecarga, distracción y olvido.',
      preguntaEspejo: '¿Mi portafolio ayuda a recordar lo que hice, o solo acumula lo que hice?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Elegiste seis piezas entre todo lo del año, y en esa elección se ve qué crees que aprendiste.',
    emocional: 'Hablar diez minutos delante del grupo asusta. Ensayar con cronómetro es lo que convierte el miedo en tiempo medido.',
    ciudadana: 'Rendir cuentas de lo que se recibió no es un trámite escolar. Es lo que hace cualquier autoridad con mandato temporal.',
    local: 'El cabildo devuelve el bastón al año y la comunidad elige de nuevo. Tu sustentación cierra un ciclo igual de concreto.',
    intergeneracional: 'El portafolio que armas hoy lo puede abrir alguien dentro de cinco años. Por eso las descripciones importan más que los archivos.'
  }
};

export default contenido;
