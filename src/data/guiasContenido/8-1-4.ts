/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/8/8-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 4,
  titulo: 'SUMA, PROMEDIO, MAX, MIN — 4 funciones que dirigen decisiones',
  resumen: 'Como el recuento de la cosecha en las veredas: total, promedio, máximo y mínimo no son aritmética — son herramientas para decidir qué cambia mañana en el curso, en el equipo o en la cooperativa.',
  duracionMin: 90,
  subtema: 'Excel · 4 funciones estadísticas · Decisiones',
  preLectura: {
    porQueImporta: 'Saber leer 4 indicadores básicos te servirá toda la vida: para presupuestar, para evaluar tu rendimiento, para argumentar una propuesta a tu colegio o a tu empresa. La fórmula es fácil; lo difícil (y valioso) es saber qué decisión proponer con esos números.',
    preguntaDetonante: '¿Qué del recuento de la cosecha — la disciplina de mirar total, promedio, máximo y mínimo para decidir el siguiente día — podemos llevar al análisis del curso?',
    activacion: {
      titulo: 'Cuatro datos, una decisión',
      descripcion: 'En 5 minutos: piensa en una situación real (notas, deportes, ventas) y propón qué decisión podría tomar alguien con base en su total, promedio, máximo y mínimo. Comparte con un compañero.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 3 limpiaste y estructuraste tablas con criterio.',
      siguiente: 'En la sesión 5 aprenderás referencias relativas y absolutas para fórmulas reusables.'
    }
  },
  conceptosClave: [
    {
      termino: 'Función SUMA',
      definicion: 'Devuelve la suma total de un rango de celdas numéricas. Responde "¿cuánto en total?".',
      ejemplo: '=SUMA(B2:B11) suma las ventas de los 10 días registrados en B2 a B11. Útil para totales de caja, gastos del mes.',
      emoji: '➕'
    },
    {
      termino: 'Función PROMEDIO',
      definicion: 'Devuelve la media aritmética: la suma dividida por la cantidad de valores. Responde "¿cuánto típico?".',
      ejemplo: '=PROMEDIO(B2:B11) da el valor típico de ventas diarias. Ojo: ignora celdas vacías pero cuenta los ceros.',
      emoji: '⚖️'
    },
    {
      termino: 'Función MAX',
      definicion: 'Devuelve el valor más alto del rango. Responde "¿cuánto en el mejor caso?".',
      ejemplo: '=MAX(B2:B11) muestra el día con más ventas. Útil para detectar récords y eventos extraordinarios.',
      emoji: '⬆️'
    },
    {
      termino: 'Función MIN',
      definicion: 'Devuelve el valor más bajo del rango. Responde "¿cuánto en el peor caso?".',
      ejemplo: '=MIN(B2:B11) muestra el día más flojo. Útil para detectar problemas y oportunidades de mejora.',
      emoji: '⬇️'
    },
    {
      termino: 'Las 4 medidas juntas',
      definicion: 'Regla profesional: nunca mirar solo el promedio. Mirar SUMA, PROMEDIO, MAX, MIN al mismo tiempo da retrato completo.',
      ejemplo: 'Promedio 3,5 con MAX 5,0 y MIN 1,0 es muy distinto que promedio 3,5 con MAX 4,0 y MIN 3,0. El primero tiene casos extremos; el segundo está concentrado.',
      emoji: '🎯'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer las 4 funciones juntas?',
      instrucciones: '5 preguntas para verificar que distingues qué pregunta responde cada función y por qué hay que mirarlas todas.',
      preguntas: [
        {
          enunciado: 'Tu profe pregunta: ¿cuánto recaudó la tienda escolar esta semana? ¿Qué función usas?',
          opciones: [
            'PROMEDIO',
            'SUMA',
            'MAX',
            'MIN'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. SUMA responde "¿cuánto en total?". El total recaudado de la semana es la suma de los 7 días.',
          feedbackIncorrecto: 'La pregunta sobre total recaudado se responde con SUMA. PROMEDIO daría el típico, MAX el día más fuerte, MIN el más flojo.'
        },
        {
          enunciado: 'Promedio del grupo: 3,5. ¿Qué información NO te dice este número solo?',
          opciones: [
            'Si hubo casos extremos (1,0 o 5,0)',
            'Si la mayoría está cerca del 3,5 o disperso',
            'Las dos anteriores',
            'Ninguna, el promedio basta'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El promedio solo oculta los extremos y la dispersión. Por eso hay que mirar MAX, MIN y la SUMA junto al promedio.',
          feedbackIncorrecto: 'El promedio solo oculta tanto los extremos (MAX, MIN) como la dispersión. Por eso se miran las 4 funciones juntas, no solo una.'
        },
        {
          enunciado: '¿Cuál es la diferencia entre PROMEDIO ignorar celdas vacías y contarlas como cero?',
          opciones: [
            'Ignorar vacías sube el promedio, contarlas como cero lo baja',
            'No hay diferencia, dan el mismo resultado',
            'Ignorar vacías baja el promedio',
            'Solo afecta cuando hay muchos datos'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Si una celda vacía se cuenta como cero, agrega un cero al promedio (lo baja). Si se ignora, no afecta el promedio.',
          feedbackIncorrecto: 'Ignorar vacías deja el promedio igual; contarlas como cero lo baja porque agrega un cero al cálculo.'
        },
        {
          enunciado: 'MAX de las notas es 5,0 y MIN es 1,0. ¿Qué acción profesional sugiere esta información?',
          opciones: [
            'Reportar solo el promedio para no preocupar',
            'Ignorar los extremos y enfocarse en el medio',
            'Premiar al MAX y castigar al MIN',
            'Identificar quién sacó MAX para que comparta método, y quién sacó MIN para acompañarlo'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La phronesis del dato consiste en no dejar a las personas extremas invisibles. Aprender del MAX, acompañar al MIN.',
          feedbackIncorrecto: 'Los extremos no se ignoran ni se usan para premiar/castigar: el MAX enseña qué es posible, el MIN señala dónde acompañar.'
        },
        {
          enunciado: '¿Cuál de estas frases describe el patrón profesional \'las 4 medidas juntas\'?',
          opciones: [
            'Mirar SUMA, PROMEDIO, MAX y MIN al mismo tiempo para decisión informada',
            'Calcular las 4 pero reportar solo la mejor',
            'Usar siempre solo SUMA porque es la más simple',
            'Calcular cada una en hoja distinta'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Las 4 al mismo tiempo dan retrato completo. Solo una produce decisiones ciegas.',
          feedbackIncorrecto: 'La regla profesional es mirar las 4 al mismo tiempo. Cada una responde una pregunta distinta y necesaria.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Recuerdas alguna vez que un promedio te dio una imagen falsa de un grupo? ¿Qué dato faltó para entender qué pasaba realmente?',
    transferencia: 'Esta semana aplica las 4 funciones a un dato de tu vida: minutos de estudio diarios, gastos, calificaciones, tiempo de pantalla. Comparte el rango con alguien y propón UNA decisión.',
    cierre: 'El recuento de la cosecha no era para celebrar — era para decidir qué cambiar. Tus 4 funciones son las mismas: total, promedio, máximo, mínimo... y una decisión.'
  },
  saberAncestral: {
    saber: 'En las tiendas de barrio del centro de Cartago había un ritual silencioso antes de cerrar la persiana: la cuenta de la caja. El tendero, con bata azul y cuaderno cuadriculado, hacía 4 operaciones en orden fijo: (1) sumaba todo lo vendido en el día (la SUMA del oficio). (2) Promediaba las ventas de la semana (la PROMEDIO) para saber si el día fue mejor, igual o peor que lo normal. (3) Miraba cuál fue el día con más venta (la MAX): "el viernes vendí mucho café porque hubo partido". (4) Miraba el día con menos venta (la MIN): "el lunes nadie vino, llovió toda la tarde". Esas 4 cuentas no eran adorno: dirigían las decisiones del lunes siguiente. Si la suma era buena, pedía más mercancía. Si el promedio bajaba, recortaba pedido. Si el MAX se repetía los viernes, traía más café los viernes. Si el MIN coincidía con lluvia, dejaba el lunes lluvioso con poco pedido. Las 4 funciones de Excel no son invento moderno: son ese cuaderno del tendero formalizado en celdas.',
    fuente: 'Recuento de la cosecha en veredas del Valle, Pacífico y Andes colombianos',
    preguntaPuente: '¿Qué sabía el tendero al hacer las 4 cuentas en orden cada noche, que el novato olvida cuando solo mira el promedio? ¿Y por qué un solo número (el promedio, por ejemplo) puede engañar si no se acompaña de SUMA, MAX y MIN?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El promedio que oculta a los extremos repite la lógica que invisibiliza a quien queda fuera.',
      preguntaEspejo: '¿Mi análisis solo mira el promedio, o también ve a quien está en el extremo MIN o MAX?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Ver las 4 cifras juntas es ver lo que es; mirar solo una es elegir la ilusión cómoda.',
      preguntaEspejo: '¿Estoy mirando las 4 cifras juntas con honestidad, o me quedo en el promedio porque me incomoda lo que dicen MIN y MAX?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Elegir bien la medida es responsabilidad ética del oficio digital.',
      preguntaEspejo: '¿Estoy eligiendo las medidas porque responden a la pregunta correcta, o porque son las más fáciles de calcular?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a leer un conjunto de datos con criterio adulto: no solo el centro, también los extremos que requieren atención.',
    emocional: 'Sentiste que reportar solo "promedio" puede ser cómodo pero injusto. La phronesis exige nombrar también lo invisibilizado.',
    ciudadana: 'Reconociste que reportar bien datos es acto ético: a quién haces visible y a quién dejas en la sombra.',
    local: 'Heredaste la lógica del recuento campesino: 4 cifras para decidir qué cambiar el próximo ciclo.',
    intergeneracional: 'La abuela contadora de cosecha y tú con Excel comparten el mismo objetivo: datos que llevan a decisiones reales.'
  }
};

export default contenido;
