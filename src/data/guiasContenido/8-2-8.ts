/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 8
 * (sesión global 18).
 *
 * Auto-generado desde content/guias/8/8-2-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 8,
  titulo: 'Alertas con lógica compuesta — validación con escenarios',
  resumen: 'Como las señales de los pájaros antes de la lluvia: sistema de alerta natural. Aprendes a diseñar y simular un sistema de alerta ambiental con lectura, lógica compuesta y respuesta escalonada.',
  duracionMin: 90,
  subtema: 'Alertas · Lógica compuesta · Validación con escenarios',
  preLectura: {
    porQueImporta: 'Saber diseñar sistemas de alerta es habilidad de quien protege: alarmas de incendio, sensores de humedad para huertas, monitoreo de salud. La lógica de alerta salva proyectos, recursos y a veces vidas.',
    preguntaDetonante: '¿Qué de las señales de los pájaros antes de la lluvia — el sistema de alerta natural — podemos llevar a un sistema digital?',
    activacion: {
      titulo: 'La falsa alarma del lobo',
      descripcion: 'En 5 minutos: en parejas recuerden la fábula del pastor que gritaba lobo. ¿Qué pasa cuando un sistema de alerta da muchas falsas alarmas? ¿Cómo se evita técnicamente?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 17 aprendiste depuración sistemática con hipótesis y casos.',
      siguiente: 'En la sesión 19 construirás el proyecto MILC integrador del periodo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Lógica compuesta',
      definicion: 'Combinación de 2 o más condiciones con AND, OR, NOT para tomar una decisión más fina que con una sola variable.',
      ejemplo: 'Alarma de incendio = humo AND temperatura alta. Necesita las dos para evitar falsos positivos por cocina.',
      emoji: '🧩',
      categoria: 'Diseño'
    },
    {
      termino: 'Niveles de alerta',
      definicion: 'Diferenciar la respuesta en función de la gravedad. No todo es alarma máxima; hay advertencias leves, moderadas, críticas.',
      ejemplo: 'Luz baja sola = advertencia. Luz baja Y ventana abierta = alerta moderada. Luz baja Y ventana abierta Y horario nocturno = alarma.',
      emoji: '🚦'
    },
    {
      termino: 'Tabla de escenarios',
      definicion: 'Tabla con todas las combinaciones posibles de entradas y la salida esperada. Para n condiciones binarias hay 2^n filas.',
      ejemplo: 'Con 3 sensores binarios hay 8 filas. Cada una contrasta salida esperada vs. salida real del programa.',
      emoji: '📊'
    },
    {
      termino: 'Falso positivo',
      definicion: 'El sistema dispara alerta cuando no debía. Síntoma de umbrales muy permisivos o de lógica con OR donde debía ir AND.',
      ejemplo: 'La alarma de incendio se activa cada vez que cocinan, aunque no haya fuego. Falso positivo por usar OR en lugar de AND.',
      emoji: '⚠️'
    },
    {
      termino: 'Validación por escenarios',
      definicion: 'Pasar el sistema por las 2^n combinaciones de entrada y verificar que cada salida real coincida con la esperada.',
      ejemplo: 'Recorres las 8 filas de la tabla. Si una sola falla, ajustas la lógica antes de entregar el sistema.',
      emoji: '✅'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Diseñas alertas con lógica compuesta?',
      instrucciones: '5 preguntas para verificar que combinas sensores y validas el sistema por escenarios.',
      preguntas: [
        {
          enunciado: '¿Cuántas combinaciones de entrada hay que probar con 3 sensores binarios?',
          opciones: [
            '3',
            '6',
            '9',
            '8'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. 2^3 = 8 combinaciones. Validar todas es la diferencia entre un sistema profesional y uno escolar.',
          feedbackIncorrecto: 'Son 2^3 = 8 combinaciones. Cada sensor binario duplica los casos a probar.'
        },
        {
          enunciado: 'Quieres una alarma de incendio que evite activarse por la cocina. ¿Qué operador conecta humo y temperatura alta?',
          opciones: [
            'OR',
            'NOT',
            'AND',
            'Ninguno'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. AND exige las dos cosas (humo Y temperatura alta), filtrando la cocina que solo tiene humo.',
          feedbackIncorrecto: 'Es AND. Necesitas las dos condiciones a la vez para evitar falsas alarmas por humo de cocina.'
        },
        {
          enunciado: 'Tu sistema de riego se activa también cuando llueve. ¿Qué operador estabas olvidando?',
          opciones: [
            'AND con humedad baja',
            'NOT con "está lloviendo"',
            'OR con horario',
            'Ninguno, no se puede arreglar'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La condición correcta incluye NOT está lloviendo. Sin esa negación, el sistema riega en plena lluvia.',
          feedbackIncorrecto: 'Faltaba NOT está lloviendo. El sistema solo debe regar si la humedad es baja Y no está lloviendo.'
        },
        {
          enunciado: '¿Para qué sirve la tabla de escenarios?',
          opciones: [
            'Para verificar que cada combinación da la salida esperada',
            'Para hacer más larga la entrega',
            'Para conectar el micro:bit',
            'Para escoger los colores del programa'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Recorres las 2^n filas y comparas salida esperada con salida real. Si alguna no coincide, ajustas la lógica.',
          feedbackIncorrecto: 'La tabla sirve para validar. Recorres las 2^n combinaciones y verificas que el programa da la salida esperada.'
        },
        {
          enunciado: 'Un falso positivo en una alarma de incendio significa que...',
          opciones: [
            'La alarma se activa cuando no hay incendio',
            'La alarma no se activa cuando hay incendio',
            'La alarma no funciona nunca',
            'La alarma cambia de color'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Falso positivo es alerta cuando no debía. Suele venir de usar OR donde debía ir AND.',
          feedbackIncorrecto: 'Falso positivo es activarse cuando no debía. Es síntoma de lógica permisiva (OR donde debía ir AND) o umbrales mal calibrados.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Un sistema de alerta confiable se construye con disciplina: combinaciones lógicas, filtros, validación. ¿Qué situación de tu colegio o casa se beneficiaría de un sistema de alerta diseñado con estos principios?',
    transferencia: 'Esta semana: en MakeCode programa un sistema con 2 variables, lógica compuesta y filtro temporal. Valida con 3 escenarios (normal, alerta, falsa alarma) y documenta los resultados.',
    cierre: 'Las señales de los pájaros y el sistema digital de alerta comparten un principio: la naturaleza no avisa siempre, pero cuando avisa, hay que escuchar. La precisión es ética del cuidado.'
  },
  saberAncestral: {
    saber: 'En los puertos del Pacífico colombiano (Buenaventura, Tumaco, Bahía Solano) existía una figura silenciosa que sostenía la seguridad del comercio marino: el centinela del puerto. Sentado en la torre de vigilancia, con un catalejo viejo y un cuaderno cuadriculado, el centinela tenía la responsabilidad de combinar varias observaciones simultáneas para decidir qué nivel de alerta dar a la población costera. No era un trabajo de una sola variable: exigía lógica compuesta de oficio profesional. El centinela conocía sus reglas: "Si veo barco grande Y bandera roja, alerta máxima" (las dos cosas: AND). "Si veo niebla O lluvia fuerte, alerta moderada" (cualquiera de las dos: OR). "Si NO hay viento favorable, alerta de retraso" (la ausencia de algo: NOT). Esas combinaciones no eran arbitrarias: la práctica del oficio había decantado cuáles condiciones, juntas, justificaban cuál nivel de alerta. La sabiduría del centinela era doble: (1) no dar alerta máxima por una sola señal sospechosa (eso producía falsas alarmas y los marineros dejaban de creer). (2) no esperar muchas señales para dar alerta moderada (eso producía respuestas demasiado tardías). La lógica compuesta vivía en la observación combinada, mucho antes de que se llamara así en computación.',
    fuente: 'Lectura de señales naturales en el campo colombiano',
    preguntaPuente: '¿Qué sabía el centinela del puerto al combinar varias observaciones para decidir el nivel de alerta, que el programador novato olvida cuando hace un sistema de alarma con un solo sensor? ¿Y por qué probar 8 escenarios es la diferencia entre un sistema profesional y uno escolar?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una alarma que protege a quien depende de ella es liberadora; una que falla en silencio es traición técnica.',
      preguntaEspejo: 'Si mi sistema de alerta protegiera a alguien real, ¿confiaría en él tal como está, o falta verificación?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Probar todos los escenarios es disciplina; declarar funcional con pruebas parciales es soberbia.',
      preguntaEspejo: '¿Estoy probando los 8 escenarios completos o me detuve en los obvios?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los sistemas de alerta confiables son la infraestructura ética del oficio digital en la era de los riesgos automatizados.',
      preguntaEspejo: '¿Mi sistema podría ser revisado por un auditor con la tabla de escenarios sin necesidad de mi explicación?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a combinar señales antes de actuar — habilidad cognitiva que aplica al código y a las decisiones humanas.',
    emocional: 'Resististe la tentación de la alerta fácil — entendiste que la precisión cuida a quien recibe el mensaje.',
    ciudadana: 'Diseñar alertas comunitarias con lógica compuesta (huerta, salón, casa) es ciudadanía técnica concreta.',
    local: 'Heredaste la lectura del campesino: cruzar varias señales naturales antes de decidir cosecha o espera.',
    intergeneracional: 'Las señales de los pájaros y los sistemas digitales de alerta comparten ética: precisión como cuidado.'
  }
};

export default contenido;
