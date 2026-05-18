/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 3
 * (sesión global 23).
 *
 * Auto-generado desde content/guias/10/10-3-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 3,
  titulo: 'Google Sheets + IA para contabilidad personal o microempresa',
  resumen: 'Google Sheets es la hoja de cálculo gratuita más usada del mundo, integrada con cuenta Gmail.',
  duracionMin: 90,
  subtema: 'Google Sheets + IA para contabilidad personal o microempresa',
  preLectura: {
    porQueImporta: 'El criterio principal: que la plantilla puedas reusarla para los próximos meses sin tener que rehacerla.',
    preguntaDetonante: '¿Qué sabía el contador del barrio al organizar la planilla cuadriculada con disciplina, que el novato olvida cuando intenta hacer Sheets sin estructura? ¿Y por qué =GEMINI() dentro de Sheets es asistente pero nunca decisor final?',
    activacion: {
      titulo: 'Mi primera fórmula en Sheets',
      descripcion: 'Actividad 1 · IDENTIFICA — Mi primera fórmula en Sheets (15 min · individual con dispositivo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 2 llevaste cuaderno de cuentas durante 2 semanas.',
      siguiente: 'Llega con tu plantilla Sheets funcional con los datos migrados y el gráfico generado.'
    }
  },
  conceptosClave: [
    {
      termino: '=SUMA(rango)',
      definicion: 'Fórmula que suma valores. Base de la contabilidad en Sheets. Aplica a egresos del mes, ingresos por categoría, totales acumulados.',
      ejemplo: '"=SUMA(B2:B30)" suma todos los valores de la columna B entre la fila 2 y la 30.',
      emoji: '➕'
    },
    {
      termino: '=SUMAR.SI(rango;criterio;rango_suma)',
      definicion: 'Suma condicional. Permite agregar solo los valores que cumplen un criterio. Clave para categorías.',
      ejemplo: '"=SUMAR.SI(C2:C30;\\"Transporte\\";B2:B30)" suma los egresos cuya categoría sea Transporte.',
      emoji: '🎯'
    },
    {
      termino: '=PROMEDIO, =MAX, =MIN',
      definicion: 'Funciones estadísticas básicas. Promedio para tendencia, máximo y mínimo para detectar valores atípicos.',
      ejemplo: '"=PROMEDIO(B2:B30)" da el gasto medio. "=MAX(B2:B30)" identifica el gasto más alto del periodo.',
      emoji: '📐'
    },
    {
      termino: '=GEMINI("pregunta")',
      definicion: 'Integración nativa con IA Gemini desde 2025. Permite consultar IA dentro de una celda con prompt entre comillas.',
      ejemplo: '"=GEMINI(\\"clasifica estos gastos en 4 categorías: \\"&UNIR(B2:B20;\\",\\"))" obtiene propuesta de categorización.',
      emoji: '🤖'
    },
    {
      termino: 'Gráfico automático',
      definicion: 'Insertar → Gráfico genera visual del dato seleccionado. Barras para comparar, líneas para tendencia, circular para proporciones.',
      ejemplo: 'Seleccionas la tabla de gastos por categoría, Insertar → Gráfico. Sheets sugiere "Circular"; lo aceptas.',
      emoji: '📊'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Manejas Sheets profesional para contabilidad?',
      instrucciones: '5 preguntas para verificar las fórmulas clave.',
      preguntas: [
        {
          enunciado: '¿Qué hace =SUMAR.SI?',
          opciones: [
            'Suma todo',
            'Suma condicional según un criterio',
            'Resta valores',
            'No existe'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Suma solo los valores que cumplen la condición especificada.',
          feedbackIncorrecto: 'Suma condicional. Útil para sumar solo los gastos de una categoría específica.'
        },
        {
          enunciado: '¿Qué función nativa permite preguntar a IA dentro de una celda?',
          opciones: [
            '=PRINT()',
            '=GEMINI()',
            '=GUARDAR()',
            '=CALL()'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. =GEMINI() consulta IA con prompt entre comillas.',
          feedbackIncorrecto: 'Es =GEMINI(). Integración nativa con IA desde 2025.'
        },
        {
          enunciado: '¿Qué tipo de gráfico es mejor para mostrar evolución del balance semanal?',
          opciones: [
            'Circular',
            'Líneas',
            '3D rotativo',
            'Mapa de calor'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Líneas muestra tendencia en el tiempo de forma clara.',
          feedbackIncorrecto: 'El gráfico de líneas es el adecuado para evolución temporal.'
        },
        {
          enunciado: 'La regla "las fórmulas dan velocidad; la IA da sugerencias; tú decides" significa que...',
          opciones: [
            'La IA reemplaza el criterio',
            'El editor humano combina velocidad de fórmulas, propuesta de IA y criterio propio',
            'Hay que evitar fórmulas',
            'Las fórmulas son lo único válido'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Las 3 capas se combinan: fórmulas rápidas, IA propone, humano decide.',
          feedbackIncorrecto: 'Combinas las 3 capas: velocidad, propuesta y criterio. Ninguna sola basta.'
        },
        {
          enunciado: '¿Para qué sirve =MAX en una hoja de gastos?',
          opciones: [
            'Para borrar valores',
            'Para identificar el gasto más alto del periodo',
            'Para sumar',
            'Para promediar'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. =MAX detecta el valor máximo, útil para identificar gastos atípicos.',
          feedbackIncorrecto: 'Identifica el valor máximo. Útil para detectar gastos atípicos o picos del periodo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprendiendo Sheets como acto de libertad económica futura, o solo como tarea escolar?',
    transferencia: 'Llega con tu plantilla Sheets funcional con los datos migrados y el gráfico generado.',
    cierre: 'Al terminar podrás: (1) identificar las 5 funciones básicas de Sheets útiles para contabilidad personal; (2) aplicar las fórmulas a tus datos del cuaderno de la sesión 2 ya migrados; (3) analizar el balance con gráficos automáticos para detectar patrones; (4) evaluar cuándo usar…'
  },
  saberAncestral: {
    saber: 'En las oficinas pequeñas del centro de Cartago, en las contadurías de barrio, hubo durante décadas un personaje que cualquier microempresario conocía: el contador del barrio que llevaba la planilla cuadriculada. No era contador titulado de empresa grande: era el señor con escritorio modesto, lápiz, regla, calculadora y planillas cuadriculadas (hojas grandes pre-impresas con columnas y filas). Cada microempresario del barrio le llevaba sus cuadernos de cuentas mensualmente. El contador desplegaba la planilla, organizaba los datos en columnas (ingresos por concepto, egresos por categoría, totales semanales, totales mensuales), hacía los cálculos con la calculadora, registraba con lápiz, sumaba. Al final del mes, entregaba al microempresario el resumen: balance, comparación con mes anterior, recomendaciones simples ("este mes subieron los gastos en transporte, revise rutas"). La planilla cuadriculada era la hoja de cálculo ancestral; el contador era el Excel humano del barrio. Hoy, Google Sheets es esa planilla digital al alcance de cualquiera, y la IA es el aprendiz que ayuda cuando te trabas con una fórmula. Pero la regla del oficio sigue siendo la misma: tú firmas las cuentas; la IA solo asiste.',
    preguntaPuente: '¿Qué sabía el contador del barrio al organizar la planilla cuadriculada con disciplina, que el novato olvida cuando intenta hacer Sheets sin estructura? ¿Y por qué =GEMINI() dentro de Sheets es asistente pero nunca decisor final?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Las herramientas digitales gratuitas con IA democratizan el oficio contable; el microempresario que las domina no depende de contadores caros.',
      preguntaEspejo: '¿Estoy aprendiendo Sheets como acto de libertad económica futura, o solo como tarea escolar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La fórmula correcta es virtud del oficio; copiar fórmula sin entenderla es vanidad técnica.',
      preguntaEspejo: '¿Entiendo cada fórmula de mi plantilla, o solo copié lo que la IA dijo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La IA como copiloto contable es ética profesional en la era de la automatización accesible.',
      preguntaEspejo: '¿Mi plantilla combina herramienta gratuita con criterio propio, o pretendo que solo la IA decida?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 5 funciones básicas de Sheets útiles para contabilidad personal; (2) aplicar las fórmulas a tus datos del cuaderno de la sesión 2 ya migrados; (3) analizar el b…',
    emocional: 'Es tentador copiar fórmulas que la IA sugiere sin entenderlas.',
    ciudadana: 'Tradicionalmente, los microempresarios pagaban contadores para tareas que ahora pueden hacer con Sheets gratis y asistencia de IA.',
    local: 'Antes de cerrar, mira Sheets desde las cinco dimensiones humanas.',
    intergeneracional: 'Tu plantilla con =GEMINI() integrada es modelo del oficio contemporáneo: herramienta gratuita + IA como asistente + criterio humano para verificar.'
  }
};

export default contenido;
