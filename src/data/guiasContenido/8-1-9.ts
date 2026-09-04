/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 9
 * (sesión global 9).
 *
 * Auto-generado desde content/guias/8/8-1-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 9,
  titulo: 'Mini-estudio de datos del entorno escolar',
  resumen: 'Como el consejo de productores del mercado: estudiar antes de decidir. Aplicas TODO lo del periodo a una pregunta real del colegio: pregunta + instrumento + datos + análisis + gráfico + conclusión + recomendación.',
  duracionMin: 90,
  subtema: 'Mini-estudio · 8 etapas · Phronesis aplicada',
  preLectura: {
    porQueImporta: 'Saber hacer un mini-estudio te servirá toda la vida: para sustentar una propuesta en tu trabajo, para tomar una decisión informada en tu familia, para argumentar en una junta. Es habilidad de ciudadano informado.',
    preguntaDetonante: '¿Qué del consejo de productores del mercado — su disciplina de mirar datos antes de decidir — podemos llevar a un estudio del colegio?',
    activacion: {
      titulo: 'La problemática real',
      descripcion: 'En 5 minutos: en parejas identifiquen UNA problemática real del colegio (cafetería, descansos, transporte, biblioteca, etc.) que se podría estudiar con datos. Formula la pregunta de investigación específica.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 8 aplicaste validación y formato condicional para hojas profesionales.',
      siguiente: 'En la sesión 10 socializarás tu mini-estudio ante el curso.'
    }
  },
  conceptosClave: [
    {
      termino: 'Mini-estudio',
      definicion: 'Investigación pequeña pero rigurosa sobre una pregunta real con 8 etapas obligatorias. Integra todas las habilidades del periodo en una pieza.',
      ejemplo: '"¿Cuánto tiempo de pantalla tienen los compañeros del grado 8?" es una pregunta de mini-estudio si tiene datos, análisis y decisión.',
      emoji: '🔬'
    },
    {
      termino: 'Hipótesis previa',
      definicion: 'Apuesta sobre lo que vas a encontrar, escrita antes de mirar los datos. Permite contrastar realidad con expectativa y aprender.',
      ejemplo: '"Creo que el promedio de pantalla será 4 horas". Cuando los datos digan 6 horas, aprendes algo sobre tu percepción.',
      emoji: '🎯'
    },
    {
      termino: 'Hallazgo principal',
      definicion: 'La conclusión más importante del estudio en 1 frase clara con cifra. No es opinión: es lo que dicen los datos.',
      ejemplo: '"El promedio de pantalla del grupo es 5,2 horas/día, con MAX 11 horas en 1 estudiante que duerme poco."',
      emoji: '💡'
    },
    {
      termino: 'Decisión razonada',
      definicion: 'Acción concreta que se desprende del hallazgo. Conecta el dato con algo que se puede hacer en el mundo real.',
      ejemplo: '"Dado que 3 compañeros tienen MAX mayor a 8 horas, propongo conversación en clase sobre uso del tiempo."',
      emoji: '✅'
    },
    {
      termino: 'Limitaciones declaradas',
      definicion: 'Reconocimiento honesto de qué no puede afirmar tu estudio: muestra pequeña, sesgo, periodo corto. Honestidad profesional.',
      ejemplo: '"Encuesté solo a 15 personas del grupo. No es representativo del colegio entero. La cifra aplica solo al grupo."',
      emoji: '🔍'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes integrar un mini-estudio honesto?',
      instrucciones: '5 preguntas para verificar que reconoces las 8 etapas y la diferencia entre conclusión honesta vs inflada.',
      preguntas: [
        {
          enunciado: '¿Cuál es la primera etapa de un mini-estudio profesional?',
          opciones: [
            'Recolectar muchos datos',
            'Hacer un gráfico bonito',
            'Calcular el promedio',
            'Definir una pregunta clara y medible'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Sin pregunta clara, los datos no sirven. La primera etapa es siempre definir qué quieres responder.',
          feedbackIncorrecto: 'La primera etapa es definir la pregunta. Sin pregunta clara, recolectar datos es trabajar a ciegas.'
        },
        {
          enunciado: '¿Para qué sirve escribir la hipótesis ANTES de recolectar datos?',
          opciones: [
            'Para poder contrastar lo que creías con lo que los datos dicen',
            'Para que coincida con los resultados',
            'Es trámite escolar sin utilidad',
            'Para confundir al lector'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La hipótesis previa permite aprender: si los datos la confirman, refuerzas la teoría; si la contradicen, descubres algo nuevo.',
          feedbackIncorrecto: 'La hipótesis previa permite contrastar expectativa con realidad. Es herramienta de aprendizaje, no de confirmación.'
        },
        {
          enunciado: 'Tu mini-estudio tiene 12 respuestas. ¿Qué dice la honestidad profesional sobre tus conclusiones?',
          opciones: [
            'Generalizar a todo el colegio sin problema',
            'Limitar las conclusiones al grupo encuestado y declararlo',
            'Inventar más datos',
            'No sacar conclusiones'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Con 12 respuestas, las conclusiones aplican al grupo encuestado. Generalizar al colegio entero sería deshonesto.',
          feedbackIncorrecto: 'Con muestra pequeña, hay que limitar conclusiones y declarar limitaciones. Honestidad profesional sobre rigor inflado.'
        },
        {
          enunciado: 'Tu hallazgo dice: "promedio 5,2 horas pantalla". ¿Qué falta para que sea decisión razonada?',
          opciones: [
            'Solo el hallazgo basta',
            'Más gráficos',
            'Propuesta concreta de acción a partir del hallazgo',
            'Una segunda encuesta'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Hallazgo sin decisión es dato suelto. La decisión conecta el número con algo que se puede hacer (conversación, propuesta, plan).',
          feedbackIncorrecto: 'La decisión razonada conecta el hallazgo con acción concreta. Sin acción propuesta, el dato no sirve para nada.'
        },
        {
          enunciado: '¿Cuál es la diferencia entre "hallazgo principal" y "opinión"?',
          opciones: [
            'No hay diferencia',
            'El hallazgo tiene cifra y dato; la opinión solo afirmación',
            'El hallazgo es escrito; la opinión es oral',
            'La opinión es más importante'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El hallazgo se sostiene en cifras y datos verificables. La opinión es afirmación sin sustento empírico.',
          feedbackIncorrecto: 'El hallazgo tiene cifra/dato verificable; la opinión es afirmación sin sustento. Esa distinción es la phronesis del oficio.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Tu mini-estudio puede cambiar algo concreto del colegio. ¿Qué problema real propondrás estudiar y por qué te importa?',
    transferencia: 'Esta semana ejecuta TU mini-estudio: pregunta acotada, instrumento honesto, 20+ encuestados, análisis con funciones, gráfico, conclusión prudente, recomendación accionable.',
    cierre: 'El consejo de productores estudiaba antes de decidir. Tú haces lo mismo: tu palabra ante la administración tiene peso porque está sustentada en datos honestos.'
  },
  saberAncestral: {
    saber: 'En los barrios del centro de Cartago había una figura silenciosa que nadie llamaba investigador pero que producía conocimiento todos los días: el observador del barrio. El sereno, sentado en su silla nocturna, sabía cuántos extraños habían pasado en la semana, a qué hora se prendían las luces de cada casa, qué carros se detenían frente a la tienda. La abuela del balcón sabía cuántas empanadas se vendían en la cuadra, en qué momento del día se agotaban, qué barrio venía a comprar. El tendero contaba cuántos clientes nuevos entraron, qué productos preguntaron que no tenía, qué horas tuvo más movimiento. Ninguno de ellos llamaba a su práctica investigación, pero seguían un método claro: (1) observaban con disciplina, (2) anotaban en un cuaderno o memoria, (3) comparaban con días anteriores, (4) detectaban patrones, (5) tomaban decisiones ("mañana voy a hacer más empanadas", "no le presto al de la motocicleta blanca"). Esa práctica del observador del barrio es la forma ancestral del análisis de datos: observar con disciplina, comparar con criterio, decidir con honestidad. La investigación moderna formaliza esos pasos pero no inventa nada nuevo.',
    fuente: 'Consejos de productores en mercados campesinos del Valle del Cauca',
    preguntaPuente: '¿Qué sabía el observador del barrio al seguir su método silencioso de las 5 prácticas, que el estudiante novato olvida cuando hace un "análisis" sin pregunta clara, sin hipótesis previa y sin limitaciones declaradas? ¿Y por qué las 8 etapas del mini-estudio son la formalización moderna de la phronesis del observador?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El conocimiento que devuelve poder a la comunidad observada es liberador; el que la utiliza como objeto es extractivo.',
      preguntaEspejo: '¿Mi mini-estudio devuelve algo útil a las personas observadas, o las utiliza como objeto de mi tarea?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Declarar las limitaciones es virtud; inflar las conclusiones es debilidad disfrazada de seguridad.',
      preguntaEspejo: '¿Mis conclusiones están proporcionadas al tamaño de mi muestra, o estoy afirmando más de lo que mis datos permiten?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Investigar con rigor en la era de la información es responsabilidad ética del oficio.',
      preguntaEspejo: '¿Mi mini-estudio cumple los estándares mínimos del rigor profesional, o es solo trabajo escolar improvisado?'
    }
  },
  cincoDimensiones: {
    personal: 'Aplicaste 8 sesiones de aprendizaje en UN producto integrador con voz propia — eso es phronesis encarnada.',
    emocional: 'Resististe la tentación de afirmar más allá de los datos. Reconocer límites es madurez intelectual, no debilidad.',
    ciudadana: 'Tu mini-estudio puede mejorar algo real del colegio. La estadística aplicada a tu comunidad es ciudadanía concreta.',
    local: 'Heredaste el método del consejo de productores del Valle — estudiar antes de decidir cuando hay algo importante en juego.',
    intergeneracional: 'El mercado campesino que estudiaba precios antes de la temporada y tu mini-estudio escolar comparten ética: decisión con evidencia.'
  }
};

export default contenido;
