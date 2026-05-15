/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 4
 * Tema: Filtros y orden — preguntar a los datos.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-4.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 4,
  titulo: 'Filtros y orden — preguntar a los datos',
  ocultarPDF: false,
  resumen:
    'Filtrar y ordenar son el cuchillo que afila la pregunta sobre una tabla. Aprendes a aplicar filtros de texto, número y fecha, y a ordenar resultados, para responder 3 preguntas reales con captura y conclusión.',
  duracionMin: 90,
  subtema: 'Datos · Preguntar a la tabla',

  saberAncestral: {
    saber:
      'El archivero del pueblo sabía dónde buscar para responder rápido. La abuela campesina revisaba su libreta de cosecha buscando "¿cuánto rindió la mata el agosto pasado?" — aplicaba un filtro mental. La tendera ordenaba el cuaderno de fiados de mayor a menor para decidir a quién cobrar primero. Excel automatiza ese gesto antiguo: preguntar a un montón de papeles sin tener que leerlos todos.',
    fuente: 'Archivero del pueblo, abuela campesina y tendera del barrio en el Valle del Cauca',
    preguntaPuente:
      '¿Cómo hacía la abuela para encontrar en su libreta el rendimiento de agosto del año pasado sin tener filtros? ¿Y qué pierde un analista novato cuando aplica filtros sin haber escrito antes la pregunta que quiere responder?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Saber del archivero', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'A ojo vs filtro', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de un filtro', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '3 preguntas con filtro y conclusión', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Filtrar y ordenar son las dos operaciones más usadas sobre cualquier tabla. La diferencia entre alguien que mira la tabla y alguien que la interroga está en saber escribir una pregunta antes de aplicar un filtro.',
    preguntaDetonante:
      'Si tu tabla tiene 80 filas, ¿cómo aíslas en 2 clics las 6 que cumplen una condición específica sin leer las 80?',
    activacion: {
      titulo: 'A ojo no se puede',
      descripcion:
        'En 3 minutos: el docente proyecta una tabla de 30 filas y pregunta "¿cuántas filas cumplen X?". Los estudiantes responden a ojo y luego se aplica el filtro. El contraste muestra para qué sirven los filtros realmente.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 3 aplicaste las 5 fórmulas básicas sobre toda la tabla. Hoy aprendes a cortar la tabla para que las fórmulas respondan preguntas más finas.',
      siguiente:
        'En la sesión 5 verás tablas dinámicas — re-agrupar la tabla para comparar promedios y totales por categoría.',
    },
  },

  conceptosClave: [
    {
      termino: 'Filtro de texto',
      definicion:
        'Oculta filas que no coinciden con un valor de texto (igual, contiene, comienza por). Ideal para aislar una categoría.',
      ejemplo:
        'Columna Curso: filtro "igual a 9A" deja solo las filas del 9A.',
      emoji: '🔤',
    },
    {
      termino: 'Filtro de número',
      definicion:
        'Oculta filas que no cumplen un umbral numérico (mayor, menor, entre, los 10 mayores). Ideal para identificar casos sobre/bajo el umbral.',
      ejemplo:
        'Columna Gasto: filtro "mayor que 20000" deja solo los gastos relevantes.',
      emoji: '🔢',
    },
    {
      termino: 'Filtro de fecha',
      definicion:
        'Oculta filas fuera de un periodo (hoy, este mes, entre dos fechas). Ideal para preguntas temporales.',
      ejemplo:
        'Columna Fecha: filtro "este mes" muestra solo las filas del mes en curso.',
      emoji: '📅',
    },
    {
      termino: 'Orden (A-Z, 0-9, fecha)',
      definicion:
        'No oculta filas, las reorganiza. Útil para rankings o priorización por valor o fecha.',
      ejemplo:
        'Ordenar la columna Gasto descendente para ver los 3 gastos más altos arriba.',
      emoji: '↕️',
    },
    {
      termino: 'Captura del filtro',
      definicion:
        'La conclusión sin captura es opinión. Toma siempre la imagen con el filtro visible antes de quitarlo, para tener evidencia.',
      ejemplo:
        '"Filtro Curso=9A + Gasto>20000 → 6 filas. Captura: pantallazo_9A_gastos.png".',
      emoji: '📸',
    },
    {
      termino: 'Conclusión en 1 frase',
      definicion:
        'Cada filtro responde una pregunta; la respuesta cabe en una frase corta ligada a la decisión que viene después.',
      ejemplo:
        '"6 estudiantes de 9A gastaron más de 20.000 en transporte — vale revisar si la ruta del barrio Macarena está fallando."',
      emoji: '💡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'A ojo vs filtro',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma tu tabla de Sesión 2 (con fórmulas de Sesión 3 ya aplicadas).',
        'Sin tocar filtros, responde a ojo: cuántas filas cumplen una condición numérica, cuántas filas hay de una categoría, y cuál es la fila con valor máximo en una columna.',
        'Cronometra cada respuesta y anota cuántas veces dudaste.',
        'Aplica filtro u orden para verificar y compara: ¿quién ganó velocidad, quién precisión?',
      ],
      cuaderno: {
        titulo: 'A ojo vs filtro',
        formato: 'Tabla 4 columnas (Pregunta | Respuesta a ojo | Respuesta con filtro | Tiempo a ojo), 3 filas',
        extension: '3 filas + 1 línea de cierre',
      },
      criterios: [
        'Las 3 respuestas a ojo fueron cronometradas',
        'Los 3 filtros se aplicaron y verificaron',
        'Reconozco honestamente fortalezas y límites de cada método',
        'Identifico cuándo el filtro es indispensable',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía de un filtro',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada tipo de filtro (texto, número, fecha) escribe una ficha.',
        'En cada ficha: pregunta + columna + condición + filas que quedan + error frecuente.',
        'Da un ejemplo de tu propia tabla para cada tipo.',
        'Marca con ★ el filtro que más te servirá para responder tu pregunta original.',
      ],
      cuaderno: {
        titulo: 'Anatomía de un filtro',
        formato: '3 fichas (texto, número, fecha) con pregunta + columna + condición + filas + error',
        extension: '3 fichas + 1 marca de prioridad',
      },
      criterios: [
        'Las 3 fichas tienen los 5 elementos',
        'Cada ejemplo proviene de tu tabla real',
        'Identifico errores frecuentes en cada tipo',
        'Podría aplicar cualquiera de los 3 sin consultar',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: '3 preguntas con filtro y conclusión',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe 3 preguntas en lenguaje natural antes de tocar la hoja.',
        'Aplica un filtro u orden para responder cada una (uno de texto, uno de número, uno de fecha u orden).',
        'Toma captura con el filtro visible antes de quitarlo.',
        'Escribe la conclusión de cada respuesta en 1 frase ligada a tu pregunta original.',
      ],
      cuaderno: {
        titulo: '3 preguntas respondidas con filtro',
        formato: '3 fichas con pregunta + filtro escrito + captura descrita + conclusión 1 frase',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '3 preguntas escritas antes del filtro',
        '3 filtros aplicados de distintos tipos',
        '3 capturas con el filtro activo',
        '3 conclusiones de 1 frase ligadas a la pregunta',
        'Quité cada filtro antes de aplicar el siguiente',
      ],
    },
    {
      numero: 4,
      verbo: 'ANALIZA',
      titulo: 'Analiza los filtros de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tus 3 fichas con un compañero.',
        'Marca ✨ los filtros que un tercero podría reproducir sin instrucción adicional, y 🚩 los que no.',
        'Califica de 1 a 5 la claridad de cada conclusión.',
        'Conversen 5 min: ¿qué quedó por fuera del filtro que también importaba?',
      ],
      cuaderno: {
        titulo: 'Evaluación de filtros de [nombre]',
        formato: '3 marcas + 3 calificaciones + 1 observación final',
        extension: '3 evaluaciones + 1 observación',
      },
      criterios: [
        'Las 3 marcas tienen justificación',
        'Las calificaciones son honestas',
        'Identifico al menos una conclusión decorativa',
        'La conversación cerró con acuerdo sobre qué quedó por fuera',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica filtros y orden',
      instrucciones:
        '5 preguntas para confirmar que aplicas filtros con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Aplicaste un filtro y luego una SUMA sobre la columna filtrada. ¿Qué calcula la SUMA?',
          opciones: [
            'Suma toda la columna como si no hubiera filtro',
            'Suma solo las filas visibles (las que pasaron el filtro)',
            'Devuelve error',
            'Depende de la versión de Excel',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. SUMA con filtro activo opera sobre filas visibles. Si olvidas quitar un filtro y aplicas SUMA, el resultado puede sesgarse sin que lo notes.',
          feedbackIncorrecto:
            'SUMA respeta el filtro: solo cuenta las filas visibles. Por eso es vital quitar filtros antes de aplicar fórmulas que deben mirar toda la tabla.',
        },
        {
          enunciado: 'Tu filtro de texto busca "Agosto" pero las celdas dicen "agosto" en minúscula. ¿Qué pasa?',
          opciones: [
            'Funciona igual, no distingue mayúsculas',
            'No encuentra ninguna fila — el filtro es sensible al texto exacto',
            'Devuelve error',
            'Se aplica solo a las mayúsculas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. El filtro de texto requiere coincidencia exacta. Por eso la higiene de datos (Sesión 2) importa antes de filtrar.',
          feedbackIncorrecto:
            'El filtro de texto distingue mayúsculas o requiere coincidencia exacta. Limpia los datos antes de filtrar para evitar sorpresas.',
        },
        {
          enunciado: '¿Cuál es la diferencia entre filtrar y ordenar?',
          opciones: [
            'Ninguna, son lo mismo',
            'Filtrar oculta filas; ordenar las reorganiza sin ocultar',
            'Ordenar es más lento',
            'Filtrar solo funciona con números',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Filtrar oculta lo que no cumple la condición. Ordenar conserva todo pero cambia el orden de aparición.',
          feedbackIncorrecto:
            'Filtrar oculta. Ordenar reorganiza. Son operaciones distintas — un filtro reduce la vista; un orden la prioriza.',
        },
        {
          enunciado: '¿Por qué escribir la pregunta antes de aplicar el filtro?',
          opciones: [
            'Por costumbre académica',
            'Porque sin pregunta, terminas con tabla rara sin saber qué viste',
            'Porque Excel lo exige',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Filtrar sin pregunta produce "tablas bonitas sin conclusión". La pregunta separa al analista del que juega con la tabla.',
          feedbackIncorrecto:
            'Sin pregunta escrita, el filtro es decoración. La disciplina de escribir la pregunta antes garantiza que el filtro sirva a una decisión.',
        },
        {
          enunciado: 'En el saber ancestral del archivero, ¿qué aplica a los filtros de hoy?',
          opciones: [
            'Nada, son tecnologías distintas',
            'Que saber dónde buscar respuesta sin leer todo es oficio antiguo — Excel automatiza el gesto',
            'Que los archiveros usaban Excel',
            'Que filtrar es una invención reciente',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El archivero, la abuela, la tendera filtraban mentalmente. La herramienta cambia, el oficio sigue.',
          feedbackIncorrecto:
            'El filtro es un gesto humano antiguo. Lo que cambia es la velocidad, no la pregunta detrás del filtro.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica un filtro real a UNA tabla cotidiana fuera del aula: gastos por categoría, calificaciones por área, hábitos por día. Documenta la conclusión y lo que el filtro dejó afuera.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo filtro decide quién se ve y quién queda fuera de la conversación.',
      preguntaEspejo:
        'Cuando filtro mi tabla para reportar solo lo bueno, ¿estoy ocultando a quienes más necesitarían atención? ¿Qué pasaría si reportara también lo que el filtro deja afuera?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La disciplina de mirar es la disciplina de soltar lo que no responde a la pregunta.',
      preguntaEspejo:
        '¿Filtré con una pregunta clara o filtré por curiosidad? ¿Qué pregunta nueva nació del filtro?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los filtros son los mediadores invisibles de toda decisión digital contemporánea.',
      preguntaEspejo:
        '¿Cuántas pantallas miré hoy sin preguntar qué filtro había detrás? ¿Qué información me pierdo por no ver lo que el filtro deja afuera?',
    },
  },

  cincoDimensiones: {
    personal:
      'Cada vez que buscas algo en tu correo, tu galería, tu chat, aplicas filtros. Dominarlos te hace dueño de tus archivos en lugar de víctima del scroll infinito.',
    emocional:
      'Resististe la tentación de filtrar por todo "a ver qué encuentro". La pregunta antes del filtro entrena disciplina cognitiva.',
    ciudadana:
      'Los algoritmos que rigen tu feed son filtros. Quien comprende filtros propios entiende mejor los que otros aplican sobre la información que recibe.',
    local:
      'El archivero del pueblo, la abuela de la libreta, la tendera del cuaderno: filtrar es oficio del Valle hecho con papel. Hoy lo automatizas.',
    intergeneracional:
      'Tus abuelos filtraban mentalmente; tus padres con marcadores y resaltadores; tú con dos clics. Misma phronesis, distinto medio.',
  },
};

export default contenido;
