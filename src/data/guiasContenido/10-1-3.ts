/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/10/10-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 3,
  titulo: 'Prompting técnico para escritura — las 5 partes del prompt profesional',
  resumen: 'Aprendes las cinco partes del prompt profesional — rol, contexto, tarea, formato y restricciones — y las pruebas escribiendo tres prompts propios en más de una herramienta.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Pedir con precisión',
  preLectura: {
    porQueImporta: 'Cuando falta una parte del prompt, la herramienta rellena el hueco con lo más probable, que casi siempre es lo más genérico. Pedir con precisión es lo que separa un borrador útil de un texto que no sirve.',
    preguntaDetonante: 'Si le pidieras a una persona «escribe el capítulo 1» y nada más, ¿podría hacerlo?',
    activacion: {
      titulo: 'Antes del primer hilo',
      descripcion: 'En 3 minutos, escribe todo lo que una persona necesitaría saber para escribir por ti el primer capítulo de tu libro. Esa lista es tu primer prompt.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 2 cerraste la ficha editorial y la escaleta de capítulos.',
      siguiente: 'En la sesión 4 iteras el borrador que salga hoy hasta convertirlo en un capítulo terminado.'
    }
  },
  conceptosClave: [
    {
      termino: 'Rol',
      definicion: 'Qué profesional debe asumir la herramienta. Activa el vocabulario y el tono de ese oficio.',
      ejemplo: '«Actúa como editor de literatura juvenil» da un texto muy distinto que no decir nada.',
      categoria: 'Las cinco partes'
    },
    {
      termino: 'Contexto',
      definicion: 'La información de fondo del proyecto: de qué trata el libro, para quién es y en qué género está.',
      ejemplo: 'Sin contexto, la herramienta escribe para un lector promedio que no existe.',
      categoria: 'Las cinco partes'
    },
    {
      termino: 'Tarea',
      definicion: 'Qué hay que hacer exactamente, con un verbo claro y un objeto preciso.',
      ejemplo: '«Redacta el capítulo 3 según este resumen» en lugar de «algo sobre el capítulo 3».',
      categoria: 'Las cinco partes'
    },
    {
      termino: 'Formato',
      definicion: 'La extensión y la estructura esperadas: cuántas palabras, con subtítulos o sin ellos, en qué orden.',
      ejemplo: '«Ochocientas palabras, sin subtítulos, en tercera persona» evita tener que rehacerlo todo.',
      categoria: 'Las cinco partes'
    },
    {
      termino: 'Restricciones',
      definicion: 'Qué evitar: lugares comunes, tonos que no van, palabras que no quieres ver.',
      ejemplo: '«Sin frases de autoayuda y sin empezar con una pregunta retórica.»',
      categoria: 'Las cinco partes'
    },
    {
      termino: 'Bitácora comparativa',
      definicion: 'El registro de qué prompt se usó, en qué herramienta, qué funcionó, qué no y qué cambiarías.',
      ejemplo: 'Una fila por combinación deja ver si el problema era el prompt o era la herramienta.',
      categoria: 'Trabajar con la respuesta'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica el prompting técnico',
      instrucciones: '5 preguntas para confirmar que sabes pedir con precisión. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué parte del prompt define qué profesional debe asumir la herramienta?',
          opciones: [
            'El contexto, que describe el proyecto en el que se está trabajando ahora mismo',
            'El rol, que activa el vocabulario y el tono propios de un oficio concreto',
            'El formato, que indica con qué estructura debe llegar la respuesta esperada',
            'La tarea, que dice con un verbo qué es lo que hay que producir exactamente'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Sin rol, la respuesta llega con el tono genérico de cualquier asistente.',
          feedbackIncorrecto: 'El contexto da el proyecto y la tarea da la acción. Quien fija el oficio es el rol.'
        },
        {
          enunciado: 'Escribes «hazme algo sobre salud mental». ¿Qué le falta a ese prompt?',
          opciones: [
            'Solo le falta indicar la extensión que debería tener la respuesta esperada',
            'Nada importante: la herramienta puede preguntar lo que necesite saber después',
            'Le falta precisar el tema, porque salud mental es un asunto demasiado delicado',
            'Le faltan las cinco partes: rol, contexto, tarea concreta, formato y restricciones'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. No falta un dato: falta la estructura entera, y por eso la respuesta será genérica.',
          feedbackIncorrecto: 'No es solo la extensión, y la herramienta no pregunta: rellena los huecos con lo más probable.'
        },
        {
          enunciado: '¿Para qué sirve la parte de restricciones?',
          opciones: [
            'Para decirle a la herramienta qué evitar: lugares comunes, tonos y palabras que no van',
            'Para limitar la cantidad de veces que se puede consultar la misma herramienta al día',
            'Para impedir que la herramienta acceda a información que no debería estar usando',
            'Para indicar el plazo dentro del cual necesitas recibir la respuesta terminada'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Si nadie pide evitar los lugares comunes, aparecen todos, porque son lo más probable.',
          feedbackIncorrecto: 'No tiene que ver con límites de uso ni con plazos. Es qué no quieres ver en la respuesta.'
        },
        {
          enunciado: '¿Por qué probar el mismo prompt en más de una herramienta?',
          opciones: [
            'Porque una de ellas siempre resulta claramente mejor que las demás para todo',
            'Porque comparar las respuestas enseña más sobre tu prompt que sobre las herramientas',
            'Porque así se puede escoger la respuesta más larga, que suele ser la más completa',
            'Porque usar varias reparte el trabajo y hace que cada una responda más rápido'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Si las dos respuestas fallan igual, el problema estaba en el prompt.',
          feedbackIncorrecto: 'Ninguna es mejor para todo, y la más larga no es la más útil. Se compara para diagnosticar el prompt.'
        },
        {
          enunciado: 'La tejedora inga planea la labor en la mente antes de pasar el primer hilo. ¿Qué aplica eso al prompt?',
          opciones: [
            'Que las técnicas artesanales antiguas anticiparon la manera de trabajar con herramientas digitales',
            'Que conviene escribir el prompt a mano en el cuaderno antes de pasarlo al computador',
            'Que lo que no quedó decidido antes no aparece después, y un punto que falta se nota',
            'Que un trabajo hecho con paciencia siempre tendrá mejor calidad que uno hecho con prisa'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. En el telar no se improvisa a mitad de camino, y en el prompt lo que no codificaste no llega.',
          feedbackIncorrecto: 'No es sobre el cuaderno ni sobre la paciencia. Es que lo que no se decidió antes no aparece después.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De lo que yo tengo claro sobre mi libro, ¿cuánto quedó realmente escrito en el prompt?',
    transferencia: 'Llega a la próxima sesión con la plantilla, los tres prompts probados, la bitácora y el borrador del primer capítulo. Sin ese borrador no hay qué iterar.',
    cierre: 'Al terminar podrás: (1) identificar las cinco partes del prompt profesional y qué problema resuelve cada una; (2) explicar por qué un prompt sin alguna de esas partes produce respuestas genéricas; (3) aplicar la plantilla para escribir prompts propios, probarlos en más de una her…'
  },
  saberAncestral: {
    saber: 'En Santiago-Manoy, en el Alto Putumayo, las tejedoras ingas hacen chumbes: fajas tejidas con pictogramas geométricos que ellas llaman labores. Un trabajo de campo con las tejedoras documentó veinticinco chumbes y cuarenta y seis labores (Aldana Barahona y Sánchez Carballo, 2021). Lo que importa aquí no es el dibujo sino el método. Cada labor se planea en la mente antes de tejerse. La tejedora sabe cómo va a quedar la figura antes de pasar el primer hilo, porque en el telar no hay manera de improvisar a mitad de camino. Y un punto olvidado se nota. El chumbe tampoco es adorno: protege el vientre de la mujer. La cara de exclusión la dice una de las tejedoras, Ruby Rodríguez, en 2018: «estamos en amenaza de que tenemos que ser historia». Hay labores de chumbes antiguos cuyo significado ya nadie conoce.',
    fuente: 'Tejedoras ingas de Santiago-Manoy · la labor que se planea antes de pasar el primer hilo',
    referencia: 'Aldana Barahona, G. M. y Sánchez Carballo, A. (2021). Tejer con la mente: el chumbe inga del Alto Putumayo colombiano como artefacto cultural y mental. Estudios Atacameños, 67, e3521. https://doi.org/10.22199/issn.0718-1043-2021-0007',
    preguntaPuente: '¿Qué tiene decidido una tejedora inga antes de pasar el primer hilo? ¿Y qué le falta a quien le escribe a una IA «hazme un capítulo» sin haber decidido nada?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La labor que se piensa antes de tejer',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · El experimento de los dos prompts',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las cinco partes',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Plantilla, tres prompts y bitácora',
      duracionMin: 40
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'El experimento de los dos prompts',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre una IA generativa y escribe el prompt vago para tu libro.',
        'Lee la respuesta completa sin juzgarla todavía.',
        'Escribe ahora el prompt completo, con rol, contexto, tarea, formato y restricciones.',
        'Lee la segunda respuesta y compárala con la primera.',
        'Anota en tres líneas qué información concreta cambió la calidad.'
      ],
      cuaderno: {
        titulo: 'El experimento de los dos prompts',
        formato: 'un fragmento corto de cada respuesta y tres líneas sobre la diferencia',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están los dos fragmentos, no solo el bueno.',
        'Está nombrado el dato concreto que hizo la diferencia.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las cinco partes',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las cinco partes con el problema que resuelve cada una.',
        'Escriban qué pasa cuando falta cada una, con un ejemplo.',
        'Armen juntos una plantilla en blanco lista para llenar.',
        'Cada uno marca la parte que más se le olvida y dice por qué.'
      ],
      cuaderno: {
        titulo: 'Las cinco partes',
        formato: 'las cinco partes con su problema, la plantilla en blanco y la parte que más se olvida',
        extension: 'media página'
      },
      criterios: [
        'Cada parte tiene escrito qué problema resuelve, no solo su nombre.',
        'Está marcada y justificada la parte que más se olvida.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Plantilla, tres prompts y bitácora',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Escribe tu plantilla con las cinco partes y un ejemplo propio de cada una.',
        'Escribe los tres prompts: borrador de capítulo, títulos alternativos y sinopsis.',
        'Prueba los tres en al menos dos herramientas distintas.',
        'Llena la bitácora con una fila por combinación de prompt y herramienta.',
        'Anota en cada fila qué cambiarías del prompt y guarda el borrador del capítulo.'
      ],
      cuaderno: {
        titulo: 'Plantilla y tres prompts',
        formato: 'la plantilla, los tres prompts, la bitácora comparativa y la decisión final con su razón',
        extension: 'una página'
      },
      criterios: [
        'Los tres prompts se probaron en dos herramientas, no en una.',
        'Cada fila de la bitácora dice qué cambiarías del prompt.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.5.3',
      lente: 'lente del nosotros',
      cita: 'La información por transmitirse deberá codificarse semántica, sintáctica y fonéticamente, para ser, desde la recepción, decodificada fonética, sintáctica y semánticamente como información recibida.',
      preguntaEspejo: 'De lo que yo tengo claro sobre mi libro, ¿cuánto quedó realmente escrito en el prompt?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 33 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Guarda el silencio cuanto te fuere posible. Nunca digas sino lo que absolutamente es necesario, y en ello emplea las menos palabras que pudieres.',
      preguntaEspejo: 'En mi prompt más largo, ¿qué frase podría borrar sin que la respuesta cambie?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'La partida la ganarán quienes «sepan preguntar y responder» (Platón, Crátilo 390c) y, por tanto, sepan qué datos pueden ser útiles y relevantes, y merecen recogerse y cuidarse. (trad. propia)',
      preguntaEspejo: 'Si me quitaran la herramienta que uso, ¿sabría igual qué es lo que necesito pedir?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendes a pedir con precisión, que sirve mucho más allá de una IA: sirve para encargar un trabajo, pedir ayuda o explicar qué necesitas.',
    emocional: 'Dedicar dos minutos a escribir bien la petición, cuando la tentación es escribir tres palabras y darle enviar, es una forma de paciencia.',
    ciudadana: 'Quien sabe qué pedir obtiene algo aprovechable de cualquier herramienta. Quien no lo sabe queda a merced de lo que le entreguen.',
    local: 'La tejedora inga sabe cómo va a quedar la labor antes de pasar el primer hilo, porque en el telar no se improvisa a mitad de camino.',
    intergeneracional: 'Planear antes de ejecutar es lo que enseñan los oficios donde el error se paga caro. La herramienta cambió; la disciplina no.'
  }
};

export default contenido;
