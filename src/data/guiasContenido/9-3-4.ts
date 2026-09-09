/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/9/9-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 4,
  titulo: 'Filtros y orden — preguntar a los datos',
  resumen: 'En el Pacífico las personas no se presentan por ciudad sino por el río del que vienen, y ese río agrupa, conecta y decide quién te recibe al llegar a Cali. Filtrar es eso hecho con una columna. Hoy le preguntas a tu tabla por una parte de ella, con la pregunta escrita antes de tocar el filtro.',
  duracionMin: 90,
  subtema: 'Datos · Preguntar a la tabla',
  preLectura: {
    porQueImporta: 'Si filtras primero y buscas después qué encontraste, siempre encuentras algo. Y ese algo casi nunca responde nada.',
    preguntaDetonante: '¿Qué pregunta te gustaría hacerle a tus datos, si pudieras hacerle solo una?',
    activacion: {
      titulo: 'A ojo',
      descripcion: 'En 2 minutos, mira tu tabla y calcula a ojo cuántas filas cumplen una condición. Anota el número; después lo vas a comprobar.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 3 calculaste los cinco indicadores básicos sobre toda la tabla.',
      siguiente: 'En la sesión 5 agrupas y comparas categorías con tablas dinámicas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Filtro de texto',
      definicion: 'Responde qué filas pertenecen a una categoría. Es sensible a mayúsculas y tildes inconsistentes.',
      ejemplo: 'Si «Guapi» y «guapi» conviven en la columna, el filtro deja fuera filas que sí pertenecían.',
      categoria: 'Las cuatro operaciones'
    },
    {
      termino: 'Filtro numérico',
      definicion: 'Responde qué filas pasan de un umbral, o quedan entre dos valores.',
      ejemplo: '«Más de siete horas» separa a quienes conviene mirar de cerca.',
      categoria: 'Las cuatro operaciones'
    },
    {
      termino: 'Columna, condición, resultado',
      definicion: 'La secuencia de todo filtro. Saltarse el primer paso es la fuente más común de confusión.',
      ejemplo: 'Elegir la condición sin haber decidido la columna lleva a filtrar la tabla equivocada.',
      categoria: 'Cómo se hace'
    },
    {
      termino: 'Condición reproducible',
      definicion: 'La condición escrita con precisión suficiente para que otro llegue al mismo resultado.',
      ejemplo: '«Filtré por fecha» no sirve. «Fecha entre el 1 y el 31 de agosto» sí.',
      categoria: 'Cómo se hace'
    },
    {
      termino: 'Filtrar no borra',
      definicion: 'Cambia lo que estás mirando, no los datos. Las filas siguen ahí, ocultas mientras el filtro esté activo.',
      ejemplo: 'Mucha gente cree que perdió filas cuando lo único que pasó es que dejó el filtro puesto.',
      categoria: 'Qué hace y qué no'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes preguntarle a una tabla por una parte?',
      instrucciones: 'Cinco preguntas sobre las cuatro operaciones y la secuencia. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué se escribe la pregunta antes de aplicar el filtro?',
          opciones: [
            'Porque el programa exige nombrar el filtro antes de crearlo.',
            'Porque si filtras primero, siempre encuentras algo que no responde nada.',
            'Porque así se puede compartir la hoja con otras personas.',
            'Porque los filtros se aplican en el orden en que se escriben.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Escribir la pregunta cuesta un minuto y ahorra media hora.',
          feedbackIncorrecto: 'Porque filtrar sin pregunta siempre encuentra algo, y ese algo casi nunca responde nada.'
        },
        {
          enunciado: 'Aplicaste un filtro y ahora ves menos filas. ¿Qué pasó con las demás?',
          opciones: [
            'Siguen ahí, ocultas mientras el filtro esté activo.',
            'Se movieron al final de la tabla, después de las visibles.',
            'Se eliminaron, y hay que deshacer para recuperarlas.',
            'Se copiaron a una hoja nueva creada por el programa.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Filtrar no borra: cambia lo que estás mirando.',
          feedbackIncorrecto: 'Siguen ahí, ocultas. Filtrar cambia la vista, no los datos.'
        },
        {
          enunciado: '¿Cuál es la secuencia de toda operación de filtro?',
          opciones: [
            'Resultado, condición y después columna.',
            'Condición, resultado y por último columna.',
            'Columna, condición y después resultado.',
            'Columna, resultado y por último condición.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Saltarse el primer paso es la fuente más común de confusión.',
          feedbackIncorrecto: 'Columna, condición, resultado. Primero se decide sobre qué se filtra.'
        },
        {
          enunciado: '¿Qué significa el paisanaje en la llegada a Cali desde el Pacífico?',
          opciones: [
            'Que las familias viajaban siempre en grupos numerosos.',
            'Que el que ya estaba recibía al que venía del mismo río.',
            'Que las colonias se organizaban por barrios de destino.',
            'Que existía un registro oficial de quienes llegaban.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí, y por eso las personas se presentan por el río del que vienen y no por la ciudad.',
          feedbackIncorrecto: 'Que el que ya estaba recibía al que venía del mismo río. Así se formaron las colonias.'
        },
        {
          enunciado: 'Anotaste «filtré por fecha». ¿Qué problema tiene?',
          opciones: [
            'Que las fechas deben filtrarse siempre por rango completo.',
            'Que conviene ordenar antes de filtrar por una fecha.',
            'Que el tipo de dato de la columna podría no ser fecha.',
            ''
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. «Fecha entre el 1 y el 31 de agosto» sí se puede reproducir.',
          feedbackIncorrecto: 'Que nadie puede reproducirlo. Sin la condición exacta, el resultado no se puede comprobar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus tres preguntas, ¿cuál te dio una respuesta distinta de la que esperabas, y qué hiciste con eso?',
    transferencia: 'Intercambia tus condiciones con un compañero y comprueba si llega a los mismos resultados. Si no, falta precisión.',
    cierre: 'Filtrar no cambia los datos: cambia lo que estás mirando. Y decidir qué miras es ya media respuesta.'
  },
  saberAncestral: {
    saber: 'Desde los años setenta, familias enteras del Chocó, de Buenaventura, de Guapi, Timbiquí y Tumaco bajaron a Cali. Hoy la región de Cali, el sur del Valle, el norte del Cauca y Buenaventura concentra alrededor de 1,5 millones de personas afrodescendientes. Es la mayor concentración del país. Al llegar no se llegaba solo: funcionaba el paisanaje, es decir, el que ya estaba recibía al que venía del mismo río. Así se formaron las colonias: la guapireña, la timbiqueña, la bonaverense, la chocoana. Fíjate en el detalle que importa hoy. En el Pacífico las personas no se presentan por ciudad, sino por el río del que vienen. Ese río funciona como un identificador de origen: agrupa, conecta y decide quién te recibe al llegar. La cara de exclusión: el asentamiento quedó espacialmente segregado en el oriente de Cali, y la migración se aceleró con la privatización portuaria de Buenaventura.',
    fuente: 'Paisanaje y colonias en Cali · identificarse por el río del que se viene',
    referencia: 'Urrea-Giraldo, F., Botero, W. F. A., & Hernández Quiceno, N. A. (2018). Cali y su relación con el Pacífico en el proceso de patrimonialización de saberes, prácticas y objetos. Organización Internacional para las Migraciones.',
    preguntaPuente: 'En el Pacífico el río del que vienes agrupa y conecta antes de que digas nada más. En tu tabla, ¿qué columna funciona como ese río?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El río del que se viene',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · A ojo y con filtro',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las cuatro operaciones',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tres preguntas, tres filtros',
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
      titulo: 'A ojo y con filtro',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu tabla con las fórmulas de la sesión 3 ya aplicadas.',
        'Sin tocar nada, responde a ojo tres preguntas sobre cantidad, categoría y fecha.',
        'Anota las tres respuestas y cuánto tardaste.',
        'Responde las tres con filtro y anota los resultados.',
        'Marca en cuál te equivocaste más y escribe por qué crees que fue ahí.'
      ],
      cuaderno: {
        titulo: 'A ojo y con filtro',
        formato: 'tabla de 3 filas y 3 columnas (pregunta / respuesta a ojo / respuesta con filtro)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están las tres respuestas de las dos maneras.',
        'Está escrito por qué falló justo esa.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las cuatro operaciones',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las cuatro operaciones con la pregunta que responde cada una.',
        'Escriban la secuencia de tres pasos que siguen todas.',
        'Tomen tres preguntas de sus tablas y digan qué operación necesita cada una.',
        'Busquen una pregunta que necesite dos filtros a la vez y escríbanla completa.'
      ],
      cuaderno: {
        titulo: 'Las cuatro operaciones',
        formato: 'las cuatro con su pregunta, la secuencia de tres pasos y la pregunta que necesita dos filtros',
        extension: 'media página'
      },
      criterios: [
        'Está escrita la pregunta que necesita dos filtros a la vez.',
        'Cada operación tiene su pregunta en lenguaje corriente.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Tres preguntas, tres filtros',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe tus tres preguntas antes de tocar la hoja, cada una en una frase.',
        'Comprueba que las tres necesiten operaciones distintas.',
        'Aplica el filtro de cada una y anota la condición exacta que usaste.',
        'Captura la pantalla con el filtro activo, de modo que se vea la condición.',
        'Escribe la conclusión de cada una en una frase que responda la pregunta original.'
      ],
      cuaderno: {
        titulo: 'Tres preguntas, tres filtros',
        formato: 'las tres preguntas con su columna, condición exacta, resultado y conclusión',
        extension: 'media página'
      },
      criterios: [
        'Los tres filtros son de tipos distintos.',
        'Un compañero reprodujo los tres resultados con esas condiciones.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §3.3.8.3',
      lente: 'lente del nosotros',
      cita: 'Dicha cultura posee los símbolos, los valores, los usos, las tradiciones de sabiduría, la memoria de compromisos históricos; conoce sus enemigos, sus amigos, sus aliados.',
      preguntaEspejo: '¿Qué columna de mi tabla decide quién queda dentro, y quién eligió ese criterio?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones IV, 11 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'No te formes de las cosas la opinión que tiene quien te agravia, ni la que él querría que tuvieras; míralas como son en verdad. (trad. propia)',
      preguntaEspejo: '¿Qué doy por sabido de mis datos sin haberlo comprobado nunca?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'La partida la ganarán quienes «sepan preguntar y responder» (Platón, Crátilo 390c) y, por tanto, sepan qué datos pueden ser útiles y relevantes, y merecen recogerse y cuidarse. (trad. propia)',
      preguntaEspejo: 'De mis tres preguntas, ¿cuál se me ocurrió antes de abrir la hoja?'
    }
  },
  cincoDimensiones: {
    personal: 'Comprobaste cuánto te equivocas respondiendo a ojo, que es un dato sobre ti y no sobre la tabla.',
    emocional: 'Escribir la pregunta antes obliga a saber qué quieres, y eso cuesta más que aplicar el filtro.',
    ciudadana: 'Un criterio de agrupación decide quién queda dentro de un conteo. Conviene saber quién lo eligió.',
    local: 'En el Pacífico el río del que vienes agrupa y conecta, y en Cali eso decidía quién te recibía.',
    intergeneracional: 'Las colonias funcionaron como una red de acogida antes de que existiera la palabra «red».'
  }
};

export default contenido;
