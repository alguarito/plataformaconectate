/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 8
 * (sesión global 18 — Sistema de alerta ambiental).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 8,
  resumen:
    'Como las señales de los pájaros antes de la lluvia: sistema de alerta natural. Aprendes a diseñar y simular un sistema de alerta ambiental con lectura, lógica compuesta y respuesta escalonada.',
  duracionMin: 90,
  subtema: 'Alertas · Lógica compuesta · Validación con escenarios',

  preLectura: {
    porQueImporta:
      'Saber diseñar sistemas de alerta es habilidad de quien protege: alarmas de incendio, sensores de humedad para huertas, monitoreo de salud. La lógica de alerta salva proyectos, recursos y a veces vidas.',
    preguntaDetonante: '¿Qué de las señales de los pájaros antes de la lluvia — el sistema de alerta natural — podemos llevar a un sistema digital?',
    activacion: { titulo: 'La falsa alarma del lobo', descripcion: 'En 5 minutos: en parejas recuerden la fábula del pastor que gritaba lobo. ¿Qué pasa cuando un sistema de alerta da muchas falsas alarmas? ¿Cómo se evita técnicamente?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 17 aprendiste depuración sistemática con hipótesis y casos.', siguiente: 'En la sesión 19 construirás el proyecto MILC integrador del periodo.' },
  },

  conceptosClave: [
    { categoria: '🎯 Diseño', termino: 'Variables ambientales', definicion: 'Magnitudes físicas que se monitorean: temperatura, humedad, humo, sonido, vibración. Cada una requiere su sensor específico y su rango de valores.', ejemplo: 'Para alerta de incendio: temperatura (35°C+), humo (presencia/ausencia), opcionalmente CO2. Cada variable aporta evidencia distinta.', emoji: '🌡️' },
    { categoria: '🎯 Diseño', termino: 'Umbrales múltiples', definicion: 'Cada variable tiene su umbral propio. La combinación de varios umbrales crea reglas más precisas que una sola variable.', ejemplo: 'temp > 35°C Y humedad < 20% indica peligro de incendio. Solo temp > 35 puede ser día caluroso normal. Combinar reduce falsas alarmas.', emoji: '🎚️' },
    { categoria: '🎯 Diseño', termino: 'Lógica compuesta', definicion: 'Combinación de variables con AND/OR/NOT. AND para confirmación (ambas verdaderas), OR para alternativa (cualquiera), NOT para excepción.', ejemplo: '(humo OR (temp > 50 AND tiempo > 30s)) — humo activa de inmediato; temperatura sostenida también, pero requiere 30 segundos para evitar falsa alarma.', emoji: '🔗' },
    { categoria: '🎯 Diseño', termino: 'Respuesta escalonada', definicion: 'Niveles distintos de alerta según la gravedad. Verde (normal), amarillo (atención), rojo (alarma). Cada nivel con su umbral y respuesta.', ejemplo: 'Verde: monitoreo normal. Amarillo: una variable cerca del umbral, alertar al docente. Rojo: ambas variables en zona crítica, evacuar.', emoji: '🚦' },
    { categoria: '🧪 Simulación', termino: 'Datos de prueba', definicion: 'Valores simulados que se inyectan al sistema para verificar su respuesta sin esperar el evento real. Se prueba lógica antes de instalar hardware.', ejemplo: 'Para probar alarma de incendio: en lugar de prender fuego (peligroso), simular en código temp=40, humo=verdadero. Verificar respuesta.', emoji: '🧪' },
    { categoria: '🧪 Simulación', termino: 'Caso normal', definicion: 'Escenario típico donde el sistema NO debe alertar. Variables en rango seguro. Es la condición de fondo del monitoreo.', ejemplo: 'temp=24, humedad=60, sin humo. El sistema debe estar en verde, monitoreando silenciosamente.', emoji: '🟢' },
    { categoria: '🧪 Simulación', termino: 'Caso de alerta', definicion: 'Escenario donde el sistema SÍ debe alertar. Una o más variables cruzan umbrales. Verifica que la lógica funciona.', ejemplo: 'Caso amarillo: temp=36 sostenida 2 minutos. Sistema debe pasar a amarillo y notificar. Caso rojo: temp=40 + humo=verdadero. Sistema en rojo + alarma sonora.', emoji: '🟡' },
    { categoria: '🧪 Simulación', termino: 'Caso extremo', definicion: 'Valor fuera de rango o combinación inusual. Verifica que el sistema maneja sin colapsar.', ejemplo: 'temp=99 (¿error de sensor o incendio?). humedad=0 (sensor seco?). El sistema no debe romperse — debe alertar y diagnosticar.', emoji: '🔴' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Sistema de alerta ambiental',
    instrucciones: '5 preguntas tipo ICFES sobre diseño de sistemas de alerta y validación.',
    preguntas: [
      { enunciado: 'Para una alarma de incendio que NO dé falsas alarmas, la lógica más adecuada es:', opciones: ['Una sola variable: humo (cuando hay humo, alerta)', 'Combinación: (humo OR (temp > 50 AND tiempo > 30s))', 'Solo temperatura > 30', 'Activar alarma siempre por seguridad'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Una sola variable da falsas alarmas. La combinación con filtro temporal (30s) elimina ruido (vela momentánea, sol momentáneo). Activar siempre es absurdo.', feedbackIncorrecto: '❌ Solo humo da falsas alarmas (vapor de agua). Solo temp baja da falsas (día caliente). Activar siempre es absurdo. La lógica robusta combina alternativa + filtro temporal.' },
      { enunciado: '¿Por qué usar respuesta escalonada (verde/amarillo/rojo) en lugar de solo un nivel de alarma?', opciones: ['Es más bonito visualmente', 'Permite advertencias preventivas antes de la emergencia y evita pánico innecesario', 'Es obligatorio por norma', 'Hace el código más rápido'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La respuesta escalonada permite ACCIÓN PREVENTIVA en amarillo (revisar, ventilar) antes de que sea rojo (evacuar). Solo rojo es binario y reactivo; tres niveles son predictivos.', feedbackIncorrecto: '❌ La respuesta escalonada NO es estética ni norma obligatoria. Es ESTRATEGIA: amarillo permite acción preventiva (revisar, ventilar) que evita llegar a rojo (emergencia, evacuación). Tres niveles dan más opciones.' },
      { enunciado: 'Para validar tu sistema de alerta sin esperar el evento real, debes:', opciones: ['Esperar a que ocurra el evento real', 'Simular casos de prueba en código (normal, alerta, extremo)', 'Confiar en que la lógica está bien', 'Probar solo en condiciones perfectas'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. La SIMULACIÓN es la herramienta profesional: inyectar valores de prueba que cubran los 3 escenarios. Validas la lógica antes de instalar hardware. Es disciplina pre-despliegue.', feedbackIncorrecto: '❌ Esperar el evento real es peligroso (¿esperarías un incendio para probar?). Confiar es irresponsable. Probar solo lo perfecto deja bugs. La simulación con casos cubre normal/alerta/extremo de forma segura.' },
      { enunciado: 'En la fábula del pastor que gritaba lobo, ¿qué falla técnica representa?', opciones: ['Falta de tecnología', 'Sistema con muchas falsas alarmas que pierde credibilidad', 'Lobo demasiado rápido', 'Pastor sin amigos'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. El pastor "alertaba" sin causa real (falsas alarmas). La comunidad dejó de creerle. Lección técnica: un sistema con muchas falsas alarmas pierde su utilidad. La precisión es ética del sistema.', feedbackIncorrecto: '❌ La fábula enseña sobre PRECISIÓN del sistema de alerta. Las falsas alarmas hacen que la gente ignore las reales. La lección técnica: invertir en filtros (temporales, de ruido, lógica compuesta) para que cada alerta sea creíble.' },
      { enunciado: 'Tu sistema de alerta debe distinguir entre temperatura alta por sol momentáneo (no alarma) y temperatura alta sostenida (incendio probable). ¿Cómo?', opciones: ['Aumentar el umbral mucho', 'Disminuir el umbral mucho', 'Agregar filtro temporal: temperatura debe estar alta por X segundos sostenidos', 'Eliminar la lectura de temperatura'], respuestaIndex: 2, feedbackCorrecto: '✅ Sí. El FILTRO TEMPORAL es la solución: temperatura > 50 sostenida por 30 segundos = alarma real. Un sol momentáneo no dura 30 segundos. La duración filtra el ruido.', feedbackIncorrecto: '❌ Cambiar el umbral no soluciona: un sol momentáneo igual lo cruzará. Eliminar la lectura no es opción. La SOLUCIÓN es FILTRO TEMPORAL: requerir que la condición se sostenga por X segundos para activar.' },
    ],
  }],

  postLectura: {
    reflexion: 'Un sistema de alerta confiable se construye con disciplina: combinaciones lógicas, filtros, validación. ¿Qué situación de tu colegio o casa se beneficiaría de un sistema de alerta diseñado con estos principios?',
    transferencia: 'Esta semana: en MakeCode programa un sistema con 2 variables, lógica compuesta y filtro temporal. Valida con 3 escenarios (normal, alerta, falsa alarma) y documenta los resultados.',
    cierre: 'Las señales de los pájaros y el sistema digital de alerta comparten un principio: la naturaleza no avisa siempre, pero cuando avisa, hay que escuchar. La precisión es ética del cuidado.',
  },

  saberAncestral: {
    saber:
      'En el campo del Valle, el Pacífico y los Andes, antes de que llegara la radio meteorológica los campesinos leían las señales naturales con precisión asombrosa: las hormigas marchando en fila indicaban lluvia próxima, el vuelo bajo de las golondrinas anunciaba tormenta, el canto del torcaz a deshora avisaba cambio brusco de tiempo. Esas señales NO eran predictores únicos — eran parte de un sistema de alertas en capas que el campesino sabía cruzar antes de decidir si cosechaba o esperaba. Los sistemas de alerta digital con lógica compuesta heredan esa misma estructura: nunca una sola señal, siempre combinaciones validadas.',
    fuente: 'Lectura de señales naturales en el campo colombiano',
    preguntaPuente:
      '¿Por qué el campesino no decidía cosechar con una sola señal de pájaros? ¿Y qué pasa cuando un sistema digital de alerta dispara con una sola variable sin validar contexto?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una alerta es promesa de cuidado — la falsa alarma erosiona la confianza de la comunidad.',
      preguntaEspejo:
        '¿Mis sistemas de alerta protegen a quien los escucha, o lo agotan con falsas alarmas hasta que deja de prestar atención?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La precisión en el aviso es virtud silenciosa — más alta que el espectáculo de la alarma frecuente.',
      preguntaEspejo:
        'En las alertas que diseño (digitales o personales), ¿priorizo precisión o frecuencia? ¿Cuál de las dos sostiene la confianza?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'En una infoesfera saturada de notificaciones, la alerta precisa es la nueva forma del cuidado.',
      preguntaEspejo:
        '¿Cuántas notificaciones recibo al día y cuántas me llevan a una acción real? ¿Qué dice eso sobre el diseño de las apps que uso?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a combinar señales antes de actuar — habilidad cognitiva que aplica al código y a las decisiones humanas.',
    emocional:
      'Resististe la tentación de la alerta fácil — entendiste que la precisión cuida a quien recibe el mensaje.',
    ciudadana:
      'Diseñar alertas comunitarias con lógica compuesta (huerta, salón, casa) es ciudadanía técnica concreta.',
    local:
      'Heredaste la lectura del campesino: cruzar varias señales naturales antes de decidir cosecha o espera.',
    intergeneracional:
      'Las señales de los pájaros y los sistemas digitales de alerta comparten ética: precisión como cuidado.',
  },
};

export default contenido;
