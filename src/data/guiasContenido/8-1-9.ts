/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 9
 * Tema: Mini estudio de datos del entorno escolar.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 9,
  resumen:
    'Como el consejo de productores del mercado: estudiar antes de decidir. Aplicas TODO lo del periodo a una pregunta real del colegio: pregunta + instrumento + datos + análisis + gráfico + conclusión + recomendación.',
  duracionMin: 90,
  subtema: 'Mini-estudio · 8 etapas · Phronesis aplicada',

  preLectura: {
    porQueImporta:
      'Saber hacer un mini-estudio te servirá toda la vida: para sustentar una propuesta en tu trabajo, para tomar una decisión informada en tu familia, para argumentar en una junta. Es habilidad de ciudadano informado.',
    preguntaDetonante:
      '¿Qué del consejo de productores del mercado — su disciplina de mirar datos antes de decidir — podemos llevar a un estudio del colegio?',
    activacion: {
      titulo: 'La problemática real',
      descripcion:
        'En 5 minutos: en parejas identifiquen UNA problemática real del colegio (cafetería, descansos, transporte, biblioteca, etc.) que se podría estudiar con datos. Formula la pregunta de investigación específica.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 8 aplicaste validación y formato condicional para hojas profesionales.',
      siguiente: 'En la sesión 10 socializarás tu mini-estudio ante el curso.',
    },
  },

  conceptosClave: [
    {
      categoria: '🛠️ Cómo se recolecta',
      termino: 'Pregunta de investigación',
      definicion:
        'Pregunta clara, acotada, verificable. NO es opinión ni juicio: es algo que se puede medir o contar. Una buena pregunta es la mitad del estudio.',
      ejemplo:
        'Mala: "¿Está bien la cafetería?" (vaga). Buena: "¿Qué tan satisfechos están los del bachillerato con la variedad de almuerzos del 1 al 5?".',
      emoji: '❓',
    },
    {
      categoria: '🛠️ Cómo se recolecta',
      termino: 'Instrumento',
      definicion:
        'Herramienta que usas para recolectar los datos: encuesta, observación sistemática, registro, entrevista. Debe ser estandarizado para que los datos sean comparables.',
      ejemplo:
        'Encuesta de Google Forms con 5 preguntas escala 1-5 + 1 abierta corta. Mismo formato para todos los encuestados.',
      emoji: '📝',
    },
    {
      categoria: '🛠️ Cómo se recolecta',
      termino: 'Muestra representativa',
      definicion:
        'Subgrupo elegido para representar a la población. NO solo amigos. Para 200 estudiantes, mínimo 20-30 con diversidad de cursos y géneros.',
      ejemplo:
        'Si tu colegio tiene 6°-11°, encuesta a estudiantes de varios grados. Si solo a tu curso, los resultados no se generalizan.',
      emoji: '👥',
    },
    {
      categoria: '🛠️ Cómo se recolecta',
      termino: 'Tiempo de campo',
      definicion:
        'Periodo definido y limitado para recolectar datos. Si lo extiendes mucho, las condiciones cambian (un evento, una clima, una época especial) y los datos se vuelven incomparables.',
      ejemplo:
        'Recolectar durante 3-5 días en una semana normal de clases. NO durante exámenes (cambia comportamiento) ni en vacaciones.',
      emoji: '⏱️',
    },
    {
      categoria: '🦉 Cómo se concluye',
      termino: 'Análisis con funciones',
      definicion:
        'Aplicar SUMA, PROMEDIO, MAX, MIN, CONTAR.SI a los datos para extraer indicadores. El análisis es matemático; la interpretación es phronesis.',
      ejemplo:
        '=PROMEDIO de cada pregunta de la encuesta + =CONTAR.SI por categoría de respuesta. Cuatro indicadores básicos por dimensión.',
      emoji: '📊',
    },
    {
      categoria: '🦉 Cómo se concluye',
      termino: 'Visualización apropiada',
      definicion:
        'Gráfico que responde la pregunta de investigación. UN gráfico bien diseñado vale más que cinco mediocres.',
      ejemplo:
        'Para "satisfacción promedio por dimensión" → gráfico de barras horizontales con valores numéricos visibles.',
      emoji: '📈',
    },
    {
      categoria: '🦉 Cómo se concluye',
      termino: 'Conclusión prudente',
      definicion:
        'Afirmación basada en datos que reconoce sus límites. La phronesis no es certeza absoluta — es decir QUÉ dicen los datos y QUÉ no dicen.',
      ejemplo:
        '"Los datos sugieren baja satisfacción con variedad (3.2/5) pero NO me dicen si el problema es presupuesto, espacio o gestión".',
      emoji: '🦉',
    },
    {
      categoria: '🦉 Cómo se concluye',
      termino: 'Recomendación accionable',
      definicion:
        'Acción concreta y ejecutable, no genérica. NO "mejorar todo". SÍ "incluir 2 opciones vegetarianas los miércoles" — algo que la administración pueda implementar mañana.',
      ejemplo:
        'No: "que la cafetería sea mejor". Sí: "agregar una opción de fruta los lunes y miércoles a $3.000". Específico, concreto, accionable.',
      emoji: '💡',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Mini-estudio honesto',
      instrucciones:
        '5 preguntas tipo ICFES sobre diseño y conducción de un estudio.',
      preguntas: [
        {
          enunciado: 'Una pregunta de investigación NO acotada (que NO se puede analizar) es:',
          opciones: ['¿Qué red social usan más mis compañeros?', '¿Por qué el mundo es injusto?', '¿Cuántas horas duermen los del 8°A entre semana?', '¿Qué tipo de almuerzo prefieren los del bachillerato?'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Exacto. "¿Por qué el mundo es injusto?" no se puede medir, no tiene muestra clara, no produce datos analizables. Las otras 3 son acotadas y verificables.',
          feedbackIncorrecto: '❌ Una pregunta de investigación debe ser MEDIBLE. "Red social que usan más", "horas de sueño", "tipo de almuerzo" se pueden medir con encuesta. "Por qué el mundo es injusto" es filosofía, no estudio.',
        },
        {
          enunciado: 'Si encuestas SOLO a tus 5 mejores amigos sobre la cafetería:',
          opciones: ['Es suficiente, 5 personas representan el colegio', 'El resultado no representa al colegio: la muestra está sesgada', 'Es lo correcto, son los que más confían en ti', 'Solo si tienes prisa por entregar'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. Tus amigos comparten gustos contigo y NO representan al colegio. Necesitas diversidad: distintos cursos, géneros, frecuencias de uso de la cafetería. Eso es muestra representativa.',
          feedbackIncorrecto: '❌ 5 amigos no representan a 200+ estudiantes. La muestra debe ser DIVERSA, no cómoda. Es la diferencia entre estudio honesto y opinión personal disfrazada.',
        },
        {
          enunciado: 'Una "recomendación accionable" se reconoce porque:',
          opciones: ['Es muy general: "hay que mejorar todo"', 'Es específica y ejecutable: "cambiar el pan blanco por integral los miércoles"', 'Suena bonita: "la cafetería es regular"', 'Expresa un deseo: "ojalá hubiera más opciones"'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Correcto. Una recomendación accionable dice QUÉ hacer, CUÁNDO, y se puede medir si se cumplió. Ejecutable mañana mismo, no slogan.',
          feedbackIncorrecto: '❌ "Mejorar todo" no es accionable (¿qué se mejora primero?). "Es regular" no es recomendación, es opinión. "Ojalá" no propone acción. Sí: específica, ejecutable, medible.',
        },
        {
          enunciado: 'Si los datos muestran que el 80% del curso prefiere jugo natural pero costaría 50% más:',
          opciones: ['Implementar inmediatamente, lo que diga la mayoría', 'Reportar el dato Y el costo, dejar la decisión a la administración', 'Esconder el dato del costo para que se apruebe', 'Inventar otra solución sin reportar'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Exacto. La phronesis del estudiante es REPORTAR honestamente: "80% lo quiere, costaría 50% más". La decisión de implementar es de la administración con base en presupuesto. Tú das datos honestos, no decisiones.',
          feedbackIncorrecto: '❌ Esconder el costo es manipulación. Implementar sin considerar costo es irresponsable. Inventar otra cosa es no hacer estudio. Lo correcto: REPORTAR el dato + el costo y dejar decidir a quien tiene autoridad y recursos.',
        },
        {
          enunciado: 'Una conclusión "prudente" en un estudio se reconoce porque:',
          opciones: ['Da certezas absolutas: "la cafetería está mal"', 'Reconoce qué dicen los datos y qué quedan sin saber: "los datos sugieren X pero no me dicen Y"', 'Es muy larga y técnica', 'Tiene muchos números y porcentajes'],
          respuestaIndex: 1,
          feedbackCorrecto: '✅ Sí. La conclusión prudente NO afirma más allá de los datos. Reconoce los LÍMITES del estudio. Esa humildad es phronesis: saber lo que sabes Y lo que no.',
          feedbackIncorrecto: '❌ "Está mal" sin matices es certeza falsa. La longitud o cantidad de números no garantiza prudencia. Lo prudente es RECONOCER que el estudio ilumina algo Y deja preguntas abiertas.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: 'Tu mini-estudio puede cambiar algo concreto del colegio. ¿Qué problema real propondrás estudiar y por qué te importa?',
    transferencia: 'Esta semana ejecuta TU mini-estudio: pregunta acotada, instrumento honesto, 20+ encuestados, análisis con funciones, gráfico, conclusión prudente, recomendación accionable.',
    cierre: 'El consejo de productores estudiaba antes de decidir. Tú haces lo mismo: tu palabra ante la administración tiene peso porque está sustentada en datos honestos.',
  },
};

export default contenido;
