/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 8
 * (sesión global 8).
 *
 * Auto-generado desde content/guias/8/8-1-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 8,
  titulo: 'Alertas visibles — formato condicional y validación de datos',
  resumen: 'Una hoja bien hecha impide que entre lo que no debe y avisa con colores cuando algo se sale de rango. Hoy la construyes y la pones a prueba, como el tul nasa que solo admite cada planta en su categoría.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'La mayoría de los errores en una tabla entran por una celda que nadie protegió. Validar y resaltar es lo que convierte una hoja en una herramienta que cuida a quien la usa.',
    preguntaDetonante: 'Cuando alguien escriba «cinco punto cinco» en la columna de notas, ¿tu hoja lo deja pasar?',
    activacion: {
      titulo: 'La nota de siete',
      descripcion: 'En 3 minutos, escribe 7 en una columna de notas y mira que Excel no dice nada. ¿Qué tendría que pasar para que la hoja se diera cuenta?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 7 hiciste tres gráficos honestos y criticaste uno engañoso.',
      siguiente: 'En la sesión 9 haces un mini estudio de datos con todo lo aprendido en el periodo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Formato condicional',
      definicion: 'Pinta una celda según su valor. La hoja avisa con color sin que leas fila por fila.',
      ejemplo: 'Nota menor que 3 en rojo, mayor que 4 en verde. Se aplica en Inicio, Formato condicional.',
      categoria: 'Las dos herramientas'
    },
    {
      termino: 'Validación de datos',
      definicion: 'Impide que entre lo que no debe. Rechaza el dato y muestra un mensaje.',
      ejemplo: 'Notas solo entre 0 y 5. Se aplica en Datos, Validación de datos.',
      categoria: 'Las dos herramientas'
    },
    {
      termino: 'Lista desplegable',
      definicion: 'Tipo de validación que solo acepta lo que está en una lista, como las cuatro categorías del tul.',
      ejemplo: 'Asistencia solo puede ser Presente, Ausente o Excusa.',
      categoria: 'Las dos herramientas'
    },
    {
      termino: 'Escala de colores',
      definicion: 'Formato condicional que pinta del rojo al verde según dónde cae el valor dentro del rango.',
      ejemplo: 'En una columna de notas, la más baja queda roja y la más alta verde, sin escribir reglas una por una.',
      categoria: 'Cómo se usan'
    },
    {
      termino: 'Prevenir o resaltar',
      definicion: 'Lo que se puede impedir antes de que entre se valida; lo que ya está y hay que ver rápido se resalta.',
      ejemplo: 'Una nota de 7 se previene con validación. Una nota de 1,0 se resalta con color.',
      categoria: 'Cómo se usan'
    },
    {
      termino: 'Mensaje de error',
      definicion: 'Texto que muestra la validación al rechazar un dato. Tiene título y explicación.',
      ejemplo: 'Título, «Nota fuera de rango». Explicación, «La nota debe estar entre 0 y 5».',
      categoria: 'Cómo se usan'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer que la hoja avise?',
      instrucciones: 'Cinco preguntas para verificar que distingues prevenir de resaltar y sabes usar las dos herramientas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Quieres que nadie pueda escribir una nota mayor que 5 en la columna. ¿Qué usas?',
          opciones: [
            'Formato condicional con relleno rojo para las notas mayores que 5.',
            'Validación de datos con decimal entre 0 y 5.',
            'Una fórmula que reste 5 a cualquier nota mayor.',
            'Ordenar la columna de mayor a menor.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Impedir que entre es validación. El color solo resalta lo que ya entró.',
          feedbackIncorrecto: 'El color no impide nada, solo pinta. Para que la nota de 7 no entre, se necesita validación.'
        },
        {
          enunciado: 'La columna de asistencia debe aceptar solo Presente, Ausente o Excusa. ¿Qué regla de validación conviene?',
          opciones: [
            'Longitud de texto menor que diez letras.',
            'Número entero entre 1 y 3.',
            'Lista desplegable con las tres opciones.',
            'Formato de fecha.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. La lista desplegable solo admite lo que está en la lista, como las categorías del tul.',
          feedbackIncorrecto: 'Ni la longitud ni un número garantizan que se escriba una de las tres palabras. Eso lo hace la lista desplegable.'
        },
        {
          enunciado: 'Una nota de 1,0 entra a la columna porque está entre 0 y 5. ¿Cómo hacer que se note rápido?',
          opciones: [
            'Con validación, para que no entre.',
            'Con una lista desplegable de notas.',
            'Con formato condicional, para que se pinte de rojo.',
            'Borrando la validación de la columna.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. La nota es válida, así que la validación no la detiene. Resaltarla es trabajo del formato condicional.',
          feedbackIncorrecto: '1,0 es una nota válida; la validación no la rechaza. Para verla rápido se usa formato condicional.'
        },
        {
          enunciado: 'Una validación rechaza el dato y no muestra ningún mensaje. ¿Qué pasa con la persona que escribía?',
          opciones: [
            'No pasa nada, porque Excel lo explica en la barra de estado.',
            'Se queda sin saber qué hizo mal ni qué debe escribir.',
            'Excel corrige el dato automáticamente.',
            'La celda se pinta de rojo y ya.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin mensaje, la hoja rechaza y no explica. Por eso cada validación lleva título y explicación.',
          feedbackIncorrecto: 'Excel no corrige ni explica solo. Sin mensaje, la persona no entiende el rechazo. El mensaje es parte de la regla.'
        },
        {
          enunciado: '¿Cuál de estas es una buena razón para no pintar toda la hoja con formato condicional?',
          opciones: [
            'Si todo está pintado, ya nada resalta y la hoja se vuelve lenta.',
            'Excel no permite más de una regla por hoja.',
            'Los colores borran los datos de las celdas.',
            'El formato condicional solo funciona en la primera columna.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El color sirve porque es escaso. Si todo está pintado, no hay alerta.',
          feedbackIncorrecto: 'Excel sí permite muchas reglas y el color no borra nada. El problema es que, si todo resalta, nada resalta.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué dato incorrecto entró en tu hoja sin que la detuvieras, y qué regla le faltaba?',
    transferencia: 'La próxima vez que un formulario te rechace algo sin explicar, piensa qué mensaje le habrías puesto tú.',
    cierre: 'Una hoja que avisa cuida. Una que rechaza sin explicar, no.'
  },
  saberAncestral: {
    saber: 'En los resguardos nasa de Toribío, Tacueyó y San Francisco, en el Cauca, la huerta de la casa se llama tul. No es un cultivo: es «la casa grande», donde conviven muchas especies bajo normas de equilibrio (Prieto Novoa y León-Sicard, 2024). Cada planta pertenece a una categoría: fría, caliente, dulce o brava. Y se siembra según esa categoría, para que unas no dañen a otras. Una planta no puede ser «más o menos caliente»: es de una categoría o de otra, y el tul funciona porque nadie mete una planta donde no va. Eso es una lista de valores válidos. En Excel se llama validación de datos, y el color que avisa cuando algo se sale de su sitio se llama formato condicional. La cara de exclusión: el estudio encontró que solo el 43 % de las familias mantiene el tul. La escuela foránea, las tecnologías agrícolas modernas y los cultivos ilícitos lo van borrando. Hoy vas a construir una hoja que, como el tul, solo admite lo que pertenece y avisa cuando algo se sale.',
    fuente: 'Pueblo nasa · el tul y sus plantas frías, calientes, dulces y bravas',
    referencia: 'Prieto Novoa, F. N. y León-Sicard, T. E. (2024). Actores y redes en la configuración del agroecosistema Tul Nasa en los resguardos indígenas de Toribío, Tacueyó y San Francisco en el departamento del Cauca, Colombia. Luna Azul, (59), 53--77.',
    preguntaPuente: 'En el tul no se siembra una planta caliente donde va una fría, y nadie tiene que revisarlo después. Cuando alguien escriba «cinco punto cinco» en la columna de notas, ¿tu hoja lo deja pasar? ¿Y cómo te avisa de una nota de 1,0 en una lista de treinta?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El tul y sus cuatro categorías',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 1 · El semáforo de las notas',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · La hoja que se cuida sola',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Cinco intentos de romper la hoja',
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
      titulo: 'El semáforo de las notas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre una tabla con diez notas, reales o inventadas, mezclando aprobadas y reprobadas.',
        'Selecciona la columna de notas. Inicio, Formato condicional, Reglas para resaltar celdas, Menor que 3, relleno rojo.',
        'Añade otra regla, Mayor que 4, relleno verde.',
        'Mira la columna y anota qué sabes ahora en dos segundos que antes tenías que buscar fila por fila.'
      ],
      cuaderno: {
        titulo: 'El semáforo de las notas',
        formato: 'las dos reglas que aplicaste, escritas tal cual, y una línea sobre qué te muestra la columna de un vistazo',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las dos reglas están escritas.',
        'Puedes decir cuántas notas quedaron en rojo sin volver a mirar.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'La hoja que se cuida sola',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, preparen una tabla con quince registros y cinco columnas, Nombre, Nota 1, Nota 2, Gastos de la semana, Asistencia.',
        'Formato condicional en tres columnas, Nota 1 con escala de colores, Gastos resaltando los que pasen un límite, Asistencia marcando las faltas.',
        'Validación en dos columnas, Nota 2 solo acepta decimales entre 0 y 5, Asistencia solo acepta la lista Presente, Ausente, Excusa.',
        'A cada validación pónganle un mensaje de error con título y explicación.',
        'Prueben una vez cada regla antes de seguir.'
      ],
      cuaderno: {
        titulo: 'La hoja que se cuida sola',
        formato: 'tabla de 5 filas y 3 columnas (columna / herramienta usada / regla escrita tal cual)',
        extension: 'media página'
      },
      criterios: [
        'Las cinco columnas tienen su regla.',
        'Probaste una vez cada regla sin que fallara.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Cinco intentos de romper la hoja',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Intercambia la hoja con tu pareja.',
        'Intenta meter cinco datos que no deben entrar, una nota de 7, una nota con letras, una asistencia fuera de la lista, un gasto negativo y un nombre de doscientas letras.',
        'Toma la captura de cada mensaje que recibas.',
        'Anota qué intento pasó sin que la hoja lo detuviera, si alguno.',
        'Devuelve la hoja con tus hallazgos y corrige la tuya con los que recibas.'
      ],
      cuaderno: {
        titulo: 'Cinco intentos de romper la hoja',
        formato: 'tabla de 5 filas y 3 columnas (dato que intenté / qué hizo la hoja / mensaje que recibí), más la lista de lo que corregí en la mía',
        extension: 'media página'
      },
      criterios: [
        'Los cinco intentos tienen su resultado anotado.',
        'Tu hoja rechaza los cinco después de corregirla.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.2',
      lente: 'lente del nosotros',
      cita: 'La conciencia ética es la capacidad de escuchar la voz del otro, incluso cuando cuestiona el sistema en que vivimos.',
      preguntaEspejo: '¿Mi mensaje de error le habla a una persona o solo a un dato?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 13 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Son muchas más las cosas que nos asustan que las que de verdad nos aprietan.',
      preguntaEspejo: '¿Qué de mi tabla me asustaba antes del semáforo y ya no?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Las configuraciones por defecto de una tecnología deberían respetar y proteger a la persona que la usa.',
      preguntaEspejo: '¿Mi hoja protege a quien la usa, o solo lo corrige después?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a hacer que la hoja te avise, en vez de revisarla tú fila por fila. Es delegar bien.',
    emocional: 'Una tabla entera asusta; un semáforo dice dónde mirar. Separar lo que aprieta de lo que asusta se aprende.',
    ciudadana: 'Un formulario público que rechaza sin explicar maltrata a la gente. Saber escribir un mensaje de error claro es una forma de respeto.',
    local: 'En el tul nasa cada planta va en su categoría y el equilibrio se cuida solo. Tu hoja hace lo mismo con una lista desplegable.',
    intergeneracional: 'El tul se aprende en la casa, viendo dónde va cada planta. Tu hoja cuidada la puede usar alguien que no sepa Excel.'
  }
};

export default contenido;
