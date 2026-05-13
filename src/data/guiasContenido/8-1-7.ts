/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 7
 * Tema: Gráficos básicos (barras, líneas, circulares).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 7,
  resumen:
    'Como el cuento gráfico del abuelo o las pictografías ancestrales: el dibujo cuenta lo que la cifra esconde. Aprendes a elegir el tipo de gráfico según la pregunta y a detectar gráficos engañosos.',
  duracionMin: 90,
  subtema: 'Excel · Gráficos · Comunicación visual honesta',

  preLectura: {
    porQueImporta:
      'Vivimos rodeados de gráficos: en redes, noticias, redes sociales. Saber leerlos críticamente y producirlos honestamente te protege de manipulación y te permite comunicar la verdad con claridad.',
    preguntaDetonante:
      '¿Qué del cuento gráfico del abuelo — la traducción de cifras a imagen viva — podemos llevar a un gráfico digital que cuente bien?',
    activacion: {
      titulo: 'El gráfico engañoso',
      descripcion:
        'En 5 minutos: busca en tu celular un gráfico de redes o noticias. Identifica si el eje empieza en 0, si tiene título claro, si los colores tienen sentido. ¿Comunica honesto o engaña?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 6 aprendiste fórmulas compuestas con jerarquía PEMDAS.',
      siguiente: 'En la sesión 8 aplicarás formato condicional y validación a tus tablas.',
    },
  },

  conceptosClave: [
    {
      categoria: '📊 Cómo se elige el gráfico',
      termino: 'Barras',
      definicion:
        'Gráfico para COMPARAR categorías independientes. Cada barra es una categoría. Las barras pueden ser verticales (col) o horizontales (especialmente si las etiquetas son largas).',
      ejemplo:
        'Comparar minutos de redes sociales por curso (8°A, 8°B, 8°C, 8°D): un gráfico de barras es ideal. Cada curso tiene su barra.',
      emoji: '📊',
    },
    {
      categoria: '📊 Cómo se elige el gráfico',
      termino: 'Líneas',
      definicion:
        'Gráfico para mostrar EVOLUCIÓN en el tiempo. Cada punto representa un momento; la línea conecta. Solo tiene sentido si el eje X es temporal (días, meses, años).',
      ejemplo:
        'Mostrar la temperatura del aula cada hora durante un día: gráfico de líneas. La forma de la línea revela picos y caídas.',
      emoji: '📈',
    },
    {
      categoria: '📊 Cómo se elige el gráfico',
      termino: 'Circular (pie)',
      definicion:
        'Gráfico para mostrar PROPORCIÓN de un todo. Cada porción es un % del 100%. Solo funciona con 3-5 categorías; con más, los humanos no podemos comparar áreas visualmente.',
      ejemplo:
        'Mostrar % de tiempo dedicado a 4 redes (TikTok, Instagram, WhatsApp, otros): un pie funciona. Con 12 redes, mejor barras.',
      emoji: '🥧',
    },
    {
      categoria: '📊 Cómo se elige el gráfico',
      termino: 'Tipo correcto',
      definicion:
        'La elección del tipo de gráfico ES decisión semántica. Un mismo dato comunica cosas distintas según el tipo. Elegir mal puede ser engaño involuntario.',
      ejemplo:
        'Mostrar evolución de notas con barras (en lugar de líneas) sugiere comparar momentos en lugar de ver tendencia. Cada elección tiene consecuencia.',
      emoji: '🎯',
    },
    {
      categoria: '🎨 Cómo se diseña',
      termino: 'Título',
      definicion:
        'Frase que describe qué muestra el gráfico, en una sola línea. NO "Datos del curso", SÍ "Minutos diarios en redes sociales del 8°A — abril 2026".',
      ejemplo:
        'Un buen título es autocontenido: alguien que ve solo el título entiende qué se está midiendo y a quién, sin leer más.',
      emoji: '🏷️',
    },
    {
      categoria: '🎨 Cómo se diseña',
      termino: 'Ejes etiquetados',
      definicion:
        'El eje X y el eje Y deben tener nombre claro y unidad. Sin etiquetas, los números flotantes no comunican nada confiable.',
      ejemplo:
        'Eje X: "Curso", Eje Y: "Minutos por día". Si el eje no tiene unidad, el lector no sabe si son segundos, minutos u horas.',
      emoji: '📐',
    },
    {
      categoria: '🎨 Cómo se diseña',
      termino: 'Color con sentido',
      definicion:
        'El color debe tener jerarquía: resaltar lo importante, no decorar. Un gráfico con 8 colores brillantes confunde. Una paleta limitada (2-4 colores con propósito) comunica mejor.',
      ejemplo:
        'Resaltar en rojo el curso con MIN, en verde el de MAX, y dejar los demás en gris. La mirada va inmediatamente a la información clave.',
      emoji: '🎨',
    },
    {
      categoria: '🎨 Cómo se diseña',
      termino: 'Fuente del dato',
      definicion:
        'Pequeña anotación que indica de dónde vienen los datos: encuesta propia, fuente externa, entidad oficial. Sin fuente, el gráfico es opinión visual.',
      ejemplo:
        '"Fuente: Encuesta propia, 35 estudiantes del 8°A, abril 2026". Da credibilidad y permite verificación independiente.',
      emoji: '📑',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Gráficos honestos',
      instrucciones:
        '5 preguntas tipo ICFES sobre selección de gráfico, diseño y detección de engaños visuales.',
      preguntas: [
        {
          enunciado: 'Para mostrar cómo cambió la temperatura del aula durante un mes, el gráfico más apropiado es:',
          opciones: ['Pie (circular)', 'Líneas', 'Barras horizontales', 'Una tabla simple'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. Las líneas son ideales para evolución TEMPORAL. Cada día es un punto, la línea conecta y revela tendencias (subida, bajada, picos).',
          feedbackIncorrecto: '❌ Pie es para proporción de un todo. Barras es para comparación de categorías. Los datos temporales (cambio en el tiempo) requieren líneas.',
        },
        {
          enunciado: 'Para comparar el consumo de internet de 4 cursos (8°A, 8°B, 8°C, 8°D), el mejor gráfico es:',
          opciones: ['Barras', 'Líneas', 'Pie', 'Solo una tabla'],
          respuestaIndex: 0,
          feedbackCorrecto: '✅ Correcto. Barras es ideal para comparar categorías independientes. Cada curso tiene su barra, las alturas son comparables al primer vistazo.',
          feedbackIncorrecto: '❌ Líneas no aplica (los cursos no son una secuencia temporal). Pie podría usarse pero solo si fuera proporción del total. Barras es la elección clara para comparación.',
        },
        {
          enunciado: 'Para mostrar qué porcentaje del tiempo se usa cada red social (4 redes principales):',
          opciones: ['Líneas', 'Barras horizontales con valores numéricos', 'Pie / Circular', 'Una columna numérica'],
          respuestaIndex: 2,
          feedbackCorrecto: '✅ Sí. Pie funciona aquí porque son 4 categorías que suman 100%. Cada porción muestra la proporción visualmente. Con MÁS de 5 categorías, mejor barras.',
          feedbackIncorrecto: '❌ Para PROPORCIÓN de un todo (suman 100%), pie es ideal — siempre que sean pocas categorías (3-5). Con muchas categorías, barras horizontales son mejores.',
        },
        {
          enunciado: 'Un gráfico SIN título y SIN ejes etiquetados:',
          opciones: ['Es elegante y minimalista', 'No comunica nada confiable: el lector no sabe qué mide', 'Es moderno y profesional', 'Está bien si los datos son obvios'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Correcto. Sin título y ejes, el gráfico es una decoración con números — no informa. La regla profesional es: título descriptivo, ejes con nombre y unidad.',
          feedbackIncorrecto: '❌ Un gráfico sin contexto NO es elegante ni moderno: es ininteligible. La forma profesional es título descriptivo, ejes con nombre, fuente del dato.',
        },
        {
          enunciado: 'Carlos hace un gráfico de pie sobre "rendimiento académico" con 12 categorías de notas. ¿Cuál es el problema?',
          opciones: ['Ninguno, mientras más categorías más completo', 'El pie se vuelve ilegible con tantas porciones; mejor barras horizontales con valores', 'Falta variedad de colores', 'Sobra información, hay que reducir a 3 categorías a la fuerza'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Excelente. El ojo humano NO puede comparar áreas de 12 porciones. Con tantas categorías, el pie pierde su función. Barras horizontales con valores numéricos comunican mejor.',
          feedbackIncorrecto: '❌ Más categorías NO es siempre mejor. El pie pierde efectividad con más de 5 categorías. La solución profesional: barras horizontales con valores numéricos visibles.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: 'Cada gráfico que produces es una decisión sobre cómo cuentas la verdad. ¿En qué situaciones la elección visual cambia la conclusión que el lector saca?',
    transferencia: 'Esta semana: revisa 3 gráficos en redes o noticias. Identifica si el eje empieza en 0, si tiene fuente, si el tipo es apropiado. Comparte con un compañero los engaños que detectes.',
    cierre: 'El cuento gráfico del abuelo y tu gráfico de Excel comparten propósito: hacer visible lo invisible. Cuidar el medio es cuidar la verdad.',
  },

  saberAncestral: {
    saber:
      'Antes del gráfico de barras existieron las pictografías ancestrales: los petroglifos del Valle, los mapas en piedra de los Andes, los dibujos en arena de los pescadores afro-pacíficos para mostrar corrientes, los esquemas que la abuela trazaba en el suelo con un palo para explicar el patrón de la cosecha. Visualizar datos es un gesto humano antiguo — el software solo cambió el medio. La diferencia entre gráfico honesto y gráfico tramposo también es antigua: el comerciante que ajustaba la balanza tramposa tiene primo en el publicista que corta el eje y.',
    fuente: 'Pictografías y esquemas tradicionales del Valle, los Andes y el Pacífico colombiano',
    preguntaPuente:
      '¿Qué hacía que el dibujo en arena del pescador afro-pacífico comunicara verdad a quien lo miraba? ¿Y qué hace que muchos gráficos de redes hoy comuniquen engaño aunque tengan números reales?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El gráfico engañoso es la balanza tramposa moderna — ambas explotan la confianza del que mira.',
      preguntaEspejo:
        '¿He compartido gráficos en redes sin verificar el eje, la fuente o el tipo? ¿A quién perjudicó esa difusión silenciosa?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Comunicar bien es responsabilidad de quien emite, no solo capacidad de quien recibe.',
      preguntaEspejo:
        'Cuando produzco un gráfico, ¿pienso primero en mi audiencia o en lo que quiero impresionar? ¿Cuál de las dos cosas dura más en la confianza?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La visualización honesta es la primera línea de defensa contra la degradación informacional.',
      preguntaEspejo:
        '¿Mis gráficos aportan claridad a la infoesfera o le suman ruido? ¿Estoy entrenando mi ojo para detectar el engaño visual?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a elegir el tipo de gráfico según la pregunta — habilidad de comunicador honesto, no decorador de datos.',
    emocional:
      'Reconociste la tentación del gráfico vistoso que oculta — y elegiste claridad sobre espectáculo.',
    ciudadana:
      'Tu ojo crítico ante gráficos de noticias y publicidad es defensa contra la desinformación visual cotidiana.',
    local:
      'Heredaste la lógica de la pictografía ancestral: hacer visible lo invisible con honestidad, no con efecto.',
    intergeneracional:
      'El dibujo en arena del pescador y tu gráfico de Excel comparten ética: el medio es responsable de la verdad que comunica.',
  },
};

export default contenido;
