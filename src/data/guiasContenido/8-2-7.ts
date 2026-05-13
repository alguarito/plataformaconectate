/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 7
 * (sesión global 17 — Depuración de lógica de control).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 7,
  resumen:
    'Como el ojo del mecánico de pueblo: buscar dónde, probar, ajustar, probar de nuevo. Aprendes método sistemático de depuración con casos esperados, contrarios y de límite.',
  duracionMin: 90,
  subtema: 'Depuración · Hipótesis · Pruebas · Bitácora',

  preLectura: {
    porQueImporta:
      'Saber depurar es lo que distingue un programador novato de uno profesional. En cualquier proyecto futuro (web, móvil, IoT) los bugs son inevitables — el método sistemático los encuentra.',
    preguntaDetonante: '¿Qué del ojo del mecánico de pueblo — su método disciplinado de buscar la falla — podemos llevar a la depuración de código?',
    activacion: { titulo: 'El bug detective', descripcion: 'En 5 minutos: en parejas recuerden una falla técnica reciente (app que falla, sensor que no responde, video que no carga). Formulen 3 hipótesis distintas de la causa.', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 16 calibraste sensores y aprendiste sobre umbrales.', siguiente: 'En la sesión 18 simularás un sistema de alerta ambiental completo.' },
  },

  conceptosClave: [
    { categoria: '🐛 Diagnóstico', termino: 'Bug', definicion: 'Error en el código o lógica que produce comportamiento no esperado. Puede ser de sintaxis (no compila), lógica (compila pero da resultado incorrecto) o de borde (falla en casos extremos).', ejemplo: 'Un AND que debió ser OR. Un umbral mal calibrado. Una variable no inicializada. Cualquiera produce un bug.', emoji: '🐛' },
    { categoria: '🐛 Diagnóstico', termino: 'Caso esperado', definicion: 'La entrada normal o típica que el programa debe procesar correctamente. Es el escenario para el que se diseñó el código.', ejemplo: 'Para alarma de movimiento: caso esperado es "alguien camina cerca". El programa debe detectarlo y activar.', emoji: '✅' },
    { categoria: '🐛 Diagnóstico', termino: 'Caso contrario', definicion: 'Lo opuesto al caso esperado. Si el esperado es activar, el contrario es NO activar. Ambos deben funcionar correctamente.', ejemplo: 'Caso contrario para alarma: NADIE camina. La alarma debe quedarse silenciosa. Si se activa sola, hay bug.', emoji: '⛔' },
    { categoria: '🐛 Diagnóstico', termino: 'Caso límite', definicion: 'Valor extremo o frontera que rompe suposiciones. Programadores expertos siempre prueban estos casos porque ahí viven la mayoría de los bugs.', ejemplo: 'Para alarma: ¿qué pasa con movimiento muy lento (1mm)? ¿muy rápido (cubre todo)? ¿valor 0 exacto del sensor?', emoji: '🎯' },
    { categoria: '🔧 Resolución', termino: 'Hipótesis', definicion: 'Suposición específica sobre la causa del bug. Debe ser falseable: una prueba debe poder confirmar o descartar.', ejemplo: 'Hipótesis: "la alarma se activa con sombras porque no filtro ruido". Falseable: si agrego promediado y deja de activarse con sombras, confirmada.', emoji: '💡' },
    { categoria: '🔧 Resolución', termino: 'Prueba aislada', definicion: 'Test específico para validar UNA hipótesis a la vez. Cambiar una sola cosa en el código, verificar el efecto, antes de cambiar otra.', ejemplo: 'Para probar "es por falta de filtro": agregar SOLO el promediado, mantener el resto igual. Si funciona, era el filtro.', emoji: '🧪' },
    { categoria: '🔧 Resolución', termino: 'Corrección', definicion: 'El cambio mínimo en el código que arregla el bug confirmado. Si tu corrección requiere muchos cambios, probablemente no encontraste la causa raíz.', ejemplo: 'Si el bug era falta de filtro, la corrección es agregar líneas de promediado. NO reescribir todo el programa.', emoji: '🔨' },
    { categoria: '🔧 Resolución', termino: 'Re-test completo', definicion: 'Después de corregir, probar de nuevo TODOS los casos: esperado, contrario y límite. La corrección puede arreglar un caso y romper otro.', ejemplo: 'Agregar promediado arregló el caso "sombra" (contrario). Pero ahora el caso esperado tarda 3 segundos en responder. Hay que ajustar.', emoji: '🔁' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Depuración sistemática',
    instrucciones: '5 preguntas tipo ICFES sobre método de depuración con hipótesis y pruebas.',
    preguntas: [
      { enunciado: 'Una "hipótesis falseable" en depuración es:', opciones: ['Una afirmación que siempre es verdadera', 'Una suposición que se puede confirmar o descartar con UNA prueba específica', 'Una idea sin sustento', 'Un sinónimo de error'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Una hipótesis útil debe ser FALSEABLE: una prueba específica la confirma o la descarta. "El bug es porque el código está mal" NO es falseable. "El bug es por falta de filtro" SÍ.', feedbackIncorrecto: '❌ Falseable significa que se puede PROBAR si es falsa. Una hipótesis útil para depurar permite diseñar UN test específico que la confirma o descarta. "El código está mal" no se puede probar; "falta filtro" sí.' },
      { enunciado: 'Si tu alarma se activa siempre que pasa una sombra, ¿qué tipo de caso debes probar?', opciones: ['Solo el caso esperado (alguien camina)', 'Casos esperado, contrario (nadie camina) Y límite (sombra momentánea)', 'Solo casos extremos', 'Solo cuando funciona bien'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La depuración profesional requiere los TRES tipos de casos: esperado (que funcione), contrario (que NO funcione cuando no debe), y límite (que filtre situaciones momentáneas).', feedbackIncorrecto: '❌ Probar solo el caso esperado deja bugs vivos. Los bugs viven en los CONTRARIOS (situaciones donde NO debería activarse) y los LÍMITES (valores extremos). Hay que probar los tres.' },
      { enunciado: 'Si cambias 5 cosas a la vez en tu código y el bug desaparece, ¿qué problema tiene esto?', opciones: ['Ninguno, lo importante es que funciona', 'No sabes cuál de los 5 cambios arregló el bug; podría volver a aparecer', 'El programa será más rápido', 'El bug fue siempre cosmético'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. La regla dorada de la depuración: cambiar UNA cosa a la vez. Si cambias 5, no puedes saber cuál fue. Si el bug vuelve, no sabes qué desencadenó la corrección. La disciplina es UNO a la vez.', feedbackIncorrecto: '❌ "Funciona" no es suficiente. Si cambiaste 5 cosas y no sabes cuál fue la causa, el bug puede volver y no sabrás cómo. La regla profesional: UN cambio a la vez, prueba, registra.' },
      { enunciado: 'Después de corregir un bug, ¿qué debe hacer un programador profesional?', opciones: ['Borrar el código viejo y olvidarlo', 'Re-test completo con casos esperado, contrario y límite + documentar la lección', 'Avisar a todo el mundo del bug', 'Pasar al siguiente bug inmediatamente'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Re-test completo (no solo el caso del bug) + documentar la lección aprendida. La corrección puede romper otros casos. La documentación evita que el bug regrese o que otros caigan en el mismo error.', feedbackIncorrecto: '❌ Borrar y olvidar es irresponsable. Avisar a todos sin verificar es alarmista. Pasar al siguiente sin re-testear ni documentar pierde el aprendizaje. Lo correcto: re-test + documentar la lección.' },
      { enunciado: 'La famosa primera "bug" real (1947) fue:', opciones: ['Un error de cálculo en NASA', 'Una polilla atrapada en un relé del computador Mark II', 'Un virus informático', 'Un fallo de Windows'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Grace Hopper documentó la polilla pegándola en su bitácora con la nota "First actual case of bug being found". El término "debugging" viene literalmente de quitar bichos del hardware.', feedbackIncorrecto: '❌ La primera "bug" documentada fue real: una polilla atrapada en el computador Mark II en 1947. Grace Hopper la pegó en su bitácora. De ahí viene la palabra "debugging" — quitar bichos del código.' },
    ],
  }],

  postLectura: {
    reflexion: 'La depuración disciplinada es habilidad transferible: encontrar la causa raíz se aplica a problemas técnicos, sociales, personales. ¿En qué situación de tu vida sería útil aplicar el método "hipótesis-prueba-corrección-re-test"?',
    transferencia: 'Esta semana: cuando algo te falle (app, dispositivo, plan), aplica el método: 3 hipótesis distintas, prueba aislada, corrección mínima, verificación. Documenta el proceso.',
    cierre: 'El ojo del mecánico y el debugger digital comparten método: paciencia disciplinada, no fuerza bruta. La sabiduría artesanal sobrevive en la depuración profesional.',
  },

  saberAncestral: {
    saber:
      'El mecánico del pueblo del Valle no abría el motor a desarmarlo cuando un carro no encendía. Primero escuchaba: ¿prende y se apaga? ¿no prende del todo? ¿hace ruido raro? Después olía: ¿gasolina derramada? ¿caucho quemado? Después tocaba: ¿la batería está caliente? Cada paso era una hipótesis verificada antes de abrir nada. Eliminaba causas con orden, no con fuerza. La depuración digital hereda ese método: hipótesis, prueba aislada, corrección mínima, re-verificación.',
    fuente: 'Oficio del mecánico de pueblo en el Valle del Cauca',
    preguntaPuente:
      '¿Qué hacía el mecánico antes de abrir el motor? ¿Y qué pasa cuando un programador novato modifica el código sin probar primero qué falla exactamente?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La depuración disciplinada es democratización del oficio — cualquiera puede aprenderla con paciencia.',
      preguntaEspejo:
        '¿Aplico depuración disciplinada en mi vida (técnica y no técnica) o tiendo a tirar el problema y empezar de cero?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Aislar la causa raíz exige paciencia — la fuerza bruta es atajo que cuesta más al final.',
      preguntaEspejo:
        'Cuando algo falla en mi vida, ¿busco la causa raíz o aplico parche tras parche hasta agotarme?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La depuración rigurosa es la primera línea contra la entropía de los sistemas informacionales.',
      preguntaEspejo:
        '¿Estoy entrenando hábitos de depuración en mi vida digital o solo cuando me obligan en el examen?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste un método transferible: hipótesis, prueba, corrección, verificación. Sirve para código, dispositivos, conflictos, decisiones.',
    emocional:
      'Resististe la tentación de la fuerza bruta — entendiste que la paciencia disciplinada es virtud, no debilidad.',
    ciudadana:
      'La capacidad de depurar problemas sistemáticamente es habilidad democrática: pensar antes de actuar es ciudadanía adulta.',
    local:
      'Heredaste el ojo del mecánico de pueblo: oír primero, tocar después, abrir solo cuando es necesario.',
    intergeneracional:
      'El método artesanal de diagnóstico y el debugger moderno comparten lógica. Lo que cambia es el medio, no la paciencia.',
  },
};

export default contenido;
