/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 8
 * Tema: Formato condicional y validación de datos.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 8,
  resumen:
    'Como el semáforo del salón comunal: tres colores, tres reglas, todos las entienden. Aprendes a aplicar formato condicional (color por valor) y validación de datos (qué se puede escribir).',
  duracionMin: 90,
  subtema: 'Excel · Formato condicional · Validación · Protección',

  preLectura: {
    porQueImporta:
      'Las hojas profesionales tienen reglas que ayudan al usuario y previenen errores. Estas dos herramientas (formato condicional + validación) separan una plantilla amateur de una corporativa. Ahorran horas de corrección y mejoran la lectura.',
    preguntaDetonante:
      '¿Qué del semáforo del salón comunal — disciplina visual heredada — podemos llevar a la hoja de Excel para que ayude a leer y a no equivocarse?',
    activacion: {
      titulo: 'El error que se podría evitar',
      descripcion:
        'En 5 minutos: piensa en una hoja de Excel que hayas visto donde alguien escribió mal y dañó los cálculos. ¿Qué validación habría evitado el error? Comparte con un compañero.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 7 elegiste el gráfico correcto según la pregunta.',
      siguiente: 'En la sesión 9 aplicarás todo a un mini-estudio del entorno escolar.',
    },
  },

  conceptosClave: [
    {
      categoria: '🚦 Cómo se resalta',
      termino: 'Formato condicional',
      definicion:
        'Reglas que cambian el aspecto visual de una celda según su valor. Excel pinta automáticamente en rojo, verde, amarillo o aplica iconos según condiciones definidas.',
      ejemplo:
        'Notas menores a 3.0 en rojo automático: cuando un estudiante saca 2.8, la celda se pinta sola. Útil para identificar problemas al primer vistazo.',
      emoji: '🚦',
    },
    {
      categoria: '🚦 Cómo se resalta',
      termino: 'Reglas de comparación',
      definicion:
        'Condiciones específicas: mayor que, menor que, entre, igual a, contiene texto. Cada regla se asocia a un formato visual.',
      ejemplo:
        '">=4.5" en verde, "<3.0" en rojo, "entre 3.0 y 4.4" sin formato. Tres reglas, un código semáforo de notas.',
      emoji: '🎯',
    },
    {
      categoria: '🚦 Cómo se resalta',
      termino: 'Iconos y barras',
      definicion:
        'Formatos avanzados que insertan flechas (arriba/abajo), semáforos (rojo/amarillo/verde) o barras de datos dentro de la celda. Visualización integrada.',
      ejemplo:
        'Una columna de "cambio de notas mes anterior vs actual" con flechas: ↑ verde si subió, ↓ roja si bajó, → gris si igual.',
      emoji: '📊',
    },
    {
      categoria: '🚦 Cómo se resalta',
      termino: 'Barras de datos',
      definicion:
        'Mini-gráficos de barras dentro de cada celda numérica que se llenan proporcional al valor. Es como un mini-gráfico horizontal embebido.',
      ejemplo:
        'En una columna de "minutos corridos" cada celda muestra una barra azul cuya longitud refleja el valor. Comparación visual sin gráfico aparte.',
      emoji: '📏',
    },
    {
      categoria: '🚪 Cómo se restringe',
      termino: 'Validación de datos',
      definicion:
        'Reglas que limitan qué puede escribirse en una celda. Si el usuario intenta un valor inválido, Excel lo rechaza con mensaje de error.',
      ejemplo:
        'En columna de asistencia: solo P o A. Si alguien escribe "X", Excel lo rechaza con un mensaje configurable.',
      emoji: '✋',
    },
    {
      categoria: '🚪 Cómo se restringe',
      termino: 'Lista desplegable',
      definicion:
        'Tipo de validación que muestra al usuario las opciones permitidas como menú. Reduce errores tipográficos y acelera la captura.',
      ejemplo:
        'En columna "Periodo": lista con "P1, P2, P3". Click → escoger. No hay riesgo de escribir "Periodo 1" o "Per 1" inconsistente.',
      emoji: '📋',
    },
    {
      categoria: '🚪 Cómo se restringe',
      termino: 'Mensaje de error',
      definicion:
        'Texto que aparece cuando el usuario intenta un valor inválido. Una buena validación explica QUÉ se espera, no solo dice "incorrecto".',
      ejemplo:
        '"El valor debe ser P (presente) o A (ausente). Otros valores no son aceptados". Educa al usuario en lugar de frustrarlo.',
      emoji: '⚠️',
    },
    {
      categoria: '🚪 Cómo se restringe',
      termino: 'Protección de hoja',
      definicion:
        'Bloqueo de celdas críticas (con o sin contraseña) para que no se sobrescriban accidentalmente. Útil para fórmulas y totales.',
      ejemplo:
        'Proteger las filas de totales con fórmulas, dejando libres las filas de datos. Si alguien intenta editar un total, Excel lo bloquea.',
      emoji: '🔒',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Hojas autovalidadas',
      instrucciones:
        '5 preguntas tipo ICFES sobre formato condicional, validación y protección.',
      preguntas: [
        {
          enunciado: 'Para que las notas menores a 3.0 se vean en rojo automáticamente sin tener que pintar a mano:',
          opciones: ['Pintar manualmente cada celda con nota < 3.0', 'Aplicar formato condicional con regla "menor que 3.0"', 'Cambiar la fuente de la columna a roja', 'Filtrar y borrar las menores'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. Formato condicional aplica reglas automáticamente. Cuando un estudiante saca 2.8, Excel la pinta sola en rojo. Cuando saca 4.0, la deja sin formato. Inteligente y dinámico.',
          feedbackIncorrecto: '❌ Pintar a mano es manual y se pierde si los datos cambian. Cambiar fuente de toda la columna pinta también las notas altas. Filtrar y borrar pierde información. Formato condicional es la solución profesional.',
        },
        {
          enunciado: 'Para que en una columna de asistencia solo se acepten P o A:',
          opciones: ['Confiar en la buena fe del usuario', 'Borrar errores cuando aparezcan', 'Configurar validación de datos con una lista de opciones', 'Pintar la columna de rojo'],
          respuestaIndex: 2,
          feedbackCorrecto: '✅ Correcto. La validación de datos con lista (Datos → Validación → Lista → "P,A") fuerza al usuario a elegir solo entre las opciones predefinidas. Previene errores en la captura.',
          feedbackIncorrecto: '❌ Confiar en buena fe falla con muchos usuarios. Borrar errores después es retrabajo. Pintar de rojo no impide el error. La validación de datos es prevención automática.',
        },
        {
          enunciado: 'Una "lista desplegable" en Excel sirve para:',
          opciones: ['Decorar la celda', 'Limitar los valores ingresados a un conjunto predefinido de opciones', 'Ordenar los datos automáticamente', 'Calcular operaciones'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. La lista desplegable es un tipo de validación que muestra al usuario las opciones válidas. Click → escoger → no hay error tipográfico.',
          feedbackIncorrecto: '❌ La lista desplegable no decora ni ordena ni calcula. Su función es RESTRINGIR la entrada a un conjunto de valores definidos por ti.',
        },
        {
          enunciado: 'Si un estudiante intenta escribir "X" en una columna de asistencia validada con lista P/A:',
          opciones: ['Excel lo acepta y luego avisa', 'Excel rechaza el valor con un mensaje de error configurable', 'Se pinta automáticamente de rojo', 'Se borra todo el contenido de la columna'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Exacto. La validación rechaza activamente el valor inválido y muestra el mensaje que tú configuraste (ej: "Solo se acepta P o A"). Educa en el momento del error.',
          feedbackIncorrecto: '❌ Excel NO acepta valores fuera de la lista validada. Tampoco pinta de rojo (eso sería formato condicional). Tampoco borra otros datos. Simplemente RECHAZA y avisa.',
        },
        {
          enunciado: '¿Por qué proteger una hoja con fórmulas críticas?',
          opciones: ['Para verse profesional', 'Para evitar que un usuario sobrescriba las fórmulas por accidente', 'Para encriptar el archivo', 'No es necesario, los usuarios siempre tienen cuidado'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Correcto. Las fórmulas son frágiles: un click de más y se sobrescriben con un valor estático. Proteger la celda con la fórmula evita errores accidentales sin impedir uso normal.',
          feedbackIncorrecto: '❌ Proteger no es estética ni encriptación. Es PREVENCIÓN: las fórmulas críticas (totales, cálculos) son sensibles a sobrescritura accidental. La protección selectiva las cuida.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: 'El semáforo y la validación son ambos disciplinas comunitarias para prevenir errores. ¿En qué otros ámbitos de tu vida valdría la pena diseñar "validaciones" antes de los problemas?',
    transferencia: 'Esta semana: en una hoja real (lista, presupuesto, registro), aplica al menos UNA validación de datos y UN formato condicional. Documenta qué error previniste.',
    cierre: 'La hoja autovalidada es semáforo digital: cuida al usuario antes de que se equivoque. Es ética del diseño aplicada a la herramienta cotidiana.',
  },
};

export default contenido;
