/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 3
 * Tema: Fórmulas básicas — SUMA, PROMEDIO, MAX, MIN, CONTAR.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-3.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 3,
  titulo: 'Fórmulas básicas — SUMA, PROMEDIO, MAX, MIN, CONTAR',
  ocultarPDF: false,
  resumen:
    'Aplicas las 5 fórmulas básicas a tu propia tabla con interpretación contextual. El 80% de los cálculos cotidianos se resuelve con estas 5 — domínalas con criterio.',
  duracionMin: 90,
  subtema: 'Datos · Aritmética digital cotidiana',

  saberAncestral: {
    saber:
      'Los oficios colombianos resolvían cálculos cotidianos con aritmética mental heredada: el sastre estimaba metros de tela contando dedos sobre el rollo, el panadero medía harina con jarros conocidos, el carpintero usaba la palma como unidad, la tendera del barrio sumaba mentalmente 10-15 productos sin equivocarse. Cada uno tenía su técnica para SUMAR, PROMEDIAR, sacar MÁXIMOS y MÍNIMOS sin calculadora. Las 5 fórmulas básicas automatizan esa aritmética del oficio — pero la inteligencia sigue siendo humana.',
    fuente: 'Aritmética mental del sastre, panadero, carpintero y tendera del Valle del Cauca',
    preguntaPuente:
      '¿Cómo hacía la tendera del barrio para sumar mentalmente 12 productos sin equivocarse? ¿Y qué pierde un programador novato cuando aplica fórmulas sin saber qué pregunta responde cada una?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La aritmética del oficio', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Mente vs fórmula', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de las 5 fórmulas básicas', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '5 indicadores con interpretación', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Las 5 fórmulas básicas resuelven el 80% de los cálculos de tu vida cotidiana adulta: gastos, calificaciones, hábitos, salud. Dominarlas con criterio (no solo sintaxis) es alfabetización numérica fundamental.',
    preguntaDetonante:
      'Si tuvieras 20 calificaciones del curso, ¿cuál de las 5 fórmulas básicas te diría más rápido si hay alguien al borde de reprobar?',
    activacion: {
      titulo: 'El cálculo de la tendera',
      descripcion:
        'En 3 minutos: suma mentalmente 8 cifras de 2-3 dígitos que aparecen en una lista cualquiera (precios, edades, minutos). Cronómetrate. Después usa SUMA en una hoja de cálculo. Compara: ¿qué método fue más rápido y cuál más preciso?',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 2 limpiaste y tipaste tu tabla. Hoy le aplicas las primeras 5 fórmulas que el oficio digital del XXI exige.',
      siguiente:
        'En la sesión 4 aprenderás filtros y ordenamiento — preguntar a los datos con criterio.',
    },
  },

  conceptosClave: [
    {
      termino: 'SUMA',
      definicion:
        'Suma todos los valores numéricos de un rango. Sintaxis: =SUMA(B2:B20). Responde: ¿cuánto en total?',
      ejemplo:
        '=SUMA(B2:B20) en columna de minutos de TikTok diarios → total semanal o mensual de uso del curso.',
      emoji: '➕',
    },
    {
      termino: 'PROMEDIO',
      definicion:
        'Calcula el valor medio aritmético. Sintaxis: =PROMEDIO(B2:B20). Ignora celdas vacías (no las cuenta como 0). Responde: ¿cuánto típicamente?',
      ejemplo:
        '=PROMEDIO(C2:C20) en columna de calificaciones → nota promedio del curso.',
      emoji: '➗',
    },
    {
      termino: 'MAX',
      definicion:
        'Devuelve el valor más alto del rango. Sintaxis: =MAX(D2:D20). Sirve también con fechas (devuelve la más reciente).',
      ejemplo:
        '=MAX(D2:D20) en horas de sueño → identificas quién durmió más, posible caso a estudiar.',
      emoji: '⬆️',
    },
    {
      termino: 'MIN',
      definicion:
        'Devuelve el valor más bajo del rango. Sintaxis: =MIN(D2:D20). Útil para detectar casos en riesgo.',
      ejemplo:
        '=MIN(D2:D20) en horas de sueño → identificas quién durmió menos, atención prioritaria.',
      emoji: '⬇️',
    },
    {
      termino: 'CONTAR vs CONTARA',
      definicion:
        'CONTAR(rango) cuenta solo celdas con números. CONTARA(rango) cuenta cualquier celda no vacía. Distinguirlas evita conteos falsos.',
      ejemplo:
        '=CONTAR(E:E) cuenta cuántas filas tienen edad numérica. =CONTARA(A:A) cuenta cuántas filas tienen nombre (texto).',
      emoji: '🔢',
    },
    {
      termino: 'Interpretación contextual',
      definicion:
        'Cada resultado necesita una frase que diga qué significa para la decisión. Sin interpretación, el número es decoración.',
      ejemplo:
        '"PROMEDIO de minutos = 87, MAX = 240, MIN = 15. Hay alta dispersión. Decisión: hablar individualmente con el de 240 antes de tomar medida general."',
      emoji: '💡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Mente vs fórmula',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma tu tabla de Sesión 2 con columna numérica.',
        'Calcula mentalmente los 5 indicadores (SUMA, PROMEDIO, MAX, MIN, CONTAR) y mide tu tiempo.',
        'Aplica las 5 fórmulas en la hoja y compara con tus cálculos mentales.',
        'Anota honestamente: cuál método fue más rápido, cuál fue más preciso.',
      ],
      cuaderno: {
        titulo: 'Mente vs fórmula',
        formato: 'Tabla 4 columnas (Indicador | Mental | Fórmula | Tiempo), 5 filas',
        extension: '5 filas + 1 línea de cierre',
      },
      criterios: [
        'Hice los 5 cálculos mentales con tiempo cronometrado',
        'Apliqué las 5 fórmulas correctamente',
        'Reconozco honestamente fortalezas de cada método',
        'Identifico cuándo conviene mente y cuándo fórmula',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía de las 5 fórmulas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada fórmula (SUMA, PROMEDIO, MAX, MIN, CONTAR/CONTARA) escribe una ficha.',
        'En cada ficha: pregunta que responde + sintaxis exacta + tipo de dato esperado + error frecuente.',
        'Da un ejemplo de tu tabla en cada caso.',
        'Marca con ★ la fórmula que más te servirá en la vida adulta.',
      ],
      cuaderno: {
        titulo: 'Anatomía de las 5 fórmulas básicas',
        formato: '5 fichas con pregunta + sintaxis + tipo + error frecuente + ejemplo tuyo',
        extension: '5 fichas + 1 marca de prioridad',
      },
      criterios: [
        'Las 5 fichas tienen los 5 elementos',
        'Cada ejemplo proviene de tu tabla real',
        'Identifico errores frecuentes',
        'Podría escribir las 5 fórmulas sin consultar',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: '5 indicadores con interpretación',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'En tu tabla limpia, aplica las 5 fórmulas sobre la columna numérica relevante.',
        'Para cada resultado, escribe una frase de interpretación ligada a tu pregunta original.',
        'Marca con ★ el indicador más relevante para tu decisión.',
        'Verifica los tipos de dato (numéricos donde corresponde) antes de cerrar.',
      ],
      cuaderno: {
        titulo: 'Mis 5 indicadores con interpretación',
        formato: '5 fichas con fórmula + resultado + interpretación de 1 frase',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '5 fórmulas escritas con sintaxis correcta',
        '5 resultados verificados',
        '5 interpretaciones ligadas a la pregunta original',
        'Identifico el indicador clave para mi decisión',
        'Tipos de dato verificados',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa los indicadores de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia el link de tu hoja con las 5 fórmulas aplicadas.',
        'Califica del 1 al 5: (a) ¿fórmulas correctas?, (b) ¿interpretaciones específicas?, (c) ¿indicador clave bien elegido?',
        'Marca con ✨ la interpretación más clara y con 🚩 las decorativas (números sin frase de uso).',
        'Conversen 5 min sobre cuál de los 5 indicadores cambiaría más una decisión real.',
      ],
      cuaderno: {
        titulo: 'Evaluación de los indicadores de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Marcaste interpretación clara y números decorativos',
        'Sugerencia constructiva',
        'La conversación cerró con acuerdo sobre indicador clave',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica las 5 fórmulas básicas',
      instrucciones:
        '5 preguntas para confirmar que aplicas las 5 fórmulas con criterio, no solo sintaxis. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Para calcular el "típico" valor de una columna numérica, ¿qué fórmula uso?',
          opciones: ['=SUMA(rango)', '=PROMEDIO(rango)', '=MAX(rango)', '=CONTAR(rango)'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. PROMEDIO da el valor medio. Cuidado: ignora celdas vacías pero NO ignora ceros, lo cual puede sesgar.',
          feedbackIncorrecto:
            'PROMEDIO. SUMA da total, no típico. MAX da el más alto. PROMEDIO calcula el valor medio aritmético — el "típico".',
        },
        {
          enunciado: '¿Cuál es la diferencia entre CONTAR y CONTARA?',
          opciones: [
            'No hay diferencia',
            'CONTAR cuenta solo celdas con números; CONTARA cuenta cualquier celda no vacía',
            'CONTAR es más rápido',
            'CONTARA solo funciona en Excel, no en Sheets',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Si quieres saber cuántas edades hay registradas (números): CONTAR. Si quieres saber cuántas filas tienen nombre (texto): CONTARA.',
          feedbackIncorrecto:
            'CONTAR = solo números. CONTARA = cualquier celda con valor. Usar la incorrecta puede dar conteos engañosos.',
        },
        {
          enunciado: 'Aplicas =SUMA(B2) y devuelve solo un número. ¿Qué pasó?',
          opciones: [
            'Funcionó bien',
            'Olvidaste el rango — SUMA(B2) suma solo una celda, no el rango',
            'Es error de Excel',
            'B2 está vacía',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Para sumar un rango necesitas =SUMA(B2:B20). Sin rango, SUMA "suma" un solo número (que es ese mismo número).',
          feedbackIncorrecto:
            'Error de rango. =SUMA(B2) no suma nada — solo devuelve el valor de B2. Lo correcto: =SUMA(B2:B20) o =SUMA(B:B) para toda la columna.',
        },
        {
          enunciado: '¿Por qué reportar SOLO el promedio puede ser engañoso?',
          opciones: [
            'Porque es lento',
            'Porque oculta los extremos (MAX y MIN) — alguien puede estar al borde sin que el promedio lo refleje',
            'Porque es difícil de calcular',
            'No es engañoso',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Promedio 6.2 con MAX 9.5 y MIN 2.0 cuenta una historia muy distinta a promedio 6.2 con MAX 6.5 y MIN 5.8. Reportar solo promedio invisibiliza extremos.',
          feedbackIncorrecto:
            'El promedio sin MAX y MIN oculta dispersión. Siempre reportar al menos los 3: PROMEDIO + MAX + MIN da contexto justo del caso real.',
        },
        {
          enunciado:
            'En el saber ancestral de la aritmética del oficio, ¿qué aplica a las fórmulas de hoy?',
          opciones: [
            'Nada — la tendera no usaba Excel',
            'Que dominar las 5 operaciones básicas con criterio resuelve el 80% de problemas reales',
            'Que se debe calcular a mano siempre',
            'Que las fórmulas son innecesarias',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La tendera resolvía cuentas complejas con SUMA, PROMEDIO, MAX, MIN mentales. Tú lo haces con fórmulas — mismo oficio, distinto medio.',
          feedbackIncorrecto:
            'Las 5 básicas resuelven el 80%. La tendera dominaba mentalmente lo que hoy Excel automatiza. Lo que cambia es la herramienta, no el oficio de calcular para decidir.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica las 5 fórmulas a UNA tabla cotidiana fuera del aula: gastos del mes, calificaciones, hábitos de sueño. Documenta una decisión real que tomes basada en esos 5 indicadores.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un promedio que no nombra a los extremos es un indicador que invisibiliza a las minorías.',
      preguntaEspejo:
        'Cuando reporto "promedio del curso" o "promedio del barrio", ¿estoy invisibilizando a quienes están abajo o arriba del centro? ¿Qué cambia si reporto también MAX y MIN?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La aritmética básica bien aplicada es virtud — la aritmética compleja sin interpretación es ego.',
      preguntaEspejo:
        '¿Estoy invirtiendo en dominar bien las 5 básicas o saltando a fórmulas complejas que después aplico mal?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las 5 fórmulas básicas son la infraestructura cognitiva mínima para decidir en la infoesfera de datos contemporánea.',
      preguntaEspejo:
        '¿Cuántas tablas y reportes leo a diario sin aplicar mentalmente estas 5 fórmulas? ¿Cuánto me pierdo por no entender los indicadores que rigen mi vida?',
    },
  },

  cincoDimensiones: {
    personal:
      'Adquiriste 5 herramientas que usarás toda tu vida adulta: gastos, hábitos, salud, finanzas — todo cabe en SUMA/PROMEDIO/MAX/MIN/CONTAR.',
    emocional:
      'Resististe la tentación de "ya sé lo básico, vamos a las fórmulas complejas". El dominio de lo básico es virtud invisible.',
    ciudadana:
      'Leer y aplicar indicadores básicos es alfabetización numérica democrática — defenderse de reportes mal hechos en medios y publicidad.',
    local:
      'Heredaste la aritmética mental del sastre, panadero, tendera. Lo que cambia es la herramienta, no la phronesis.',
    intergeneracional:
      'La tendera del barrio que sumaba 12 productos sin errar y tu Excel comparten oficio. Las 5 fórmulas básicas son el ábaco del XXI.',
  },
};

export default contenido;
