/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/8/8-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 3,
  titulo: 'Algoritmos — del pseudocódigo al diagrama de flujo',
  resumen: 'Un algoritmo se escribe primero en pseudocódigo y después se dibuja con cuatro símbolos. Hoy haces los dos con una tarea de tu vida, con el cuidado de los orfebres del Cauca medio que pensaban los seis pasos de la cera perdida antes de vaciar el metal.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Todo programa empieza siendo un algoritmo en papel. Saber escribirlo y dibujarlo es lo que te deja programar sin perderte, y explicarle a otro lo que hiciste.',
    preguntaDetonante: 'Cuando escribas cómo alistas el morral, ¿qué paso no se puede hacer antes que otro? ¿Y en cuál hay una decisión?',
    activacion: {
      titulo: 'El paso que te saltaste',
      descripcion: 'En 3 minutos, escribe cómo se hace un sándwich en cinco pasos. Dáselo a tu pareja y pregúntale en qué paso se quedaría un extraterrestre.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 2 verificaste reglas con tablas de verdad.',
      siguiente: 'En la sesión 4 programas el micro:bit en MakeCode con sensores.'
    }
  },
  conceptosClave: [
    {
      termino: 'Pseudocódigo',
      definicion: 'Algoritmo escrito en texto ordenado, con palabras clave en mayúscula y un paso por línea.',
      ejemplo: 'LEER clima. SI llueve ENTONCES MOSTRAR «paraguas» SINO MOSTRAR «gorra».',
      categoria: 'Cómo se escribe'
    },
    {
      termino: 'Las tres estructuras',
      definicion: 'Secuencia, decisión y repetición. Con esas tres se escribe cualquier algoritmo.',
      ejemplo: 'Alistar el morral es secuencia; «si hay educación física, meter los tenis» es decisión; «repetir por cada materia» es repetición.',
      categoria: 'Cómo se escribe'
    },
    {
      termino: 'Variable',
      definicion: 'Un dato con nombre que el algoritmo lee y usa para decidir.',
      ejemplo: '«tiempo disponible» es una variable; si es menor que diez minutos, no hay desayuno completo.',
      categoria: 'Cómo se escribe'
    },
    {
      termino: 'Diagrama de flujo',
      definicion: 'El mismo algoritmo dibujado con símbolos y flechas que marcan el orden.',
      ejemplo: 'Un óvalo de inicio, tres rectángulos, un rombo con sí y no, y un óvalo de fin.',
      categoria: 'Cómo se dibuja'
    },
    {
      termino: 'Los cuatro símbolos',
      definicion: 'Óvalo para inicio y fin, rectángulo para acción, rombo para decisión, paralelogramo para entrada y salida.',
      ejemplo: 'Cada SI del pseudocódigo es un rombo con dos flechas.',
      categoria: 'Cómo se dibuja'
    },
    {
      termino: 'La prueba del que no sabe',
      definicion: 'Alguien que no conoce la tarea ejecuta el diagrama siguiendo solo las flechas.',
      ejemplo: 'Si tu pareja pregunta «¿y aquí qué hago?», ahí falta un paso.',
      categoria: 'Cómo se dibuja'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes pasar del pseudocódigo al diagrama?',
      instrucciones: 'Cinco preguntas para verificar que dominas las estructuras y los símbolos. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'En un diagrama de flujo, ¿qué símbolo representa una decisión?',
          opciones: [
            'El rectángulo, porque representa una acción del algoritmo.',
            'El óvalo, porque marca un punto importante del recorrido.',
            'El rombo, con una entrada y dos salidas.',
            'El paralelogramo, porque por ahí entra o sale un dato.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. El rombo es la decisión, y siempre tiene dos salidas, sí y no.',
          feedbackIncorrecto: 'El rectángulo es acción, el óvalo es inicio o fin y el paralelogramo es entrada o salida. La decisión es el rombo.'
        },
        {
          enunciado: '¿Cuáles son las tres estructuras con las que se escribe cualquier algoritmo?',
          opciones: [
            'Secuencia, decisión y repetición.',
            'Entrada de datos, proceso y salida.',
            'Inicio, desarrollo y fin del texto.',
            'Variable, constante y fórmula compuesta.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Con secuencia, decisión y repetición se escribe cualquier algoritmo. Entrada y salida son los datos, no estructuras.',
          feedbackIncorrecto: 'Las estructuras de control son tres, secuencia, decisión y repetición. Lo demás son datos o partes de un texto.'
        },
        {
          enunciado: 'Un rombo del diagrama tiene una sola flecha de salida. ¿Qué pasa?',
          opciones: [
            'Nada, porque el rombo solo necesita una salida para funcionar bien.',
            'El diagrama queda más corto y por eso se entiende mejor.',
            'Excel lo corrige solo cuando importas el diagrama desde draw.io.',
            'Falta el camino del «no», y quien lo ejecute no sabe qué hacer.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Toda decisión tiene dos salidas. Con una sola, el caso del «no» no tiene camino.',
          feedbackIncorrecto: 'Un rombo con una salida es una decisión que no decide. Falta el camino del «no».'
        },
        {
          enunciado: '¿Cuál de estas líneas está bien escrita en pseudocódigo?',
          opciones: [
            'si el clima es lluvia pues mostrar que lleve paraguas.',
            'SI clima = lluvia ENTONCES MOSTRAR «paraguas» SINO MOSTRAR «gorra».',
            'Lluvia paraguas, sol gorra.',
            'clima lluvia paraguas si no gorra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Palabras clave en mayúscula, una variable con nombre y los dos caminos.',
          feedbackIncorrecto: 'El pseudocódigo lleva SI, ENTONCES y SINO en mayúscula, una variable clara y los dos caminos de la decisión.'
        },
        {
          enunciado: '¿Para qué sirve que tu pareja ejecute tu diagrama sin explicaciones?',
          opciones: [
            'Para saber si el diagrama se entiende solo, con flechas y símbolos.',
            'Para que tu pareja aprenda a hacer tu tarea cotidiana.',
            'Para ganar tiempo en la clase y terminar antes que los demás.',
            'Para que el diagrama quede más bonito y mejor presentado.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Si alguien que no conoce la tarea llega al fin, el diagrama funciona. Donde se atasca, falta algo.',
          feedbackIncorrecto: 'La prueba del que no sabe muestra si el diagrama se sostiene solo. Cada atasco es un paso o un camino que falta.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿En qué paso se atascó tu pareja, y por qué a ti te parecía obvio?',
    transferencia: 'La próxima vez que expliques cómo hacer algo, cuenta los pasos y marca las decisiones antes de empezar a hablar.',
    cierre: 'Primero el orden en papel, después las manos. Como el orfebre antes de vaciar el metal.'
  },
  saberAncestral: {
    saber: 'Hace más de mil años, en el Cauca medio (hoy Quindío, Risaralda y norte del Valle), unos orfebres fundían piezas huecas de oro. Su técnica exigía un orden exacto: la cera perdida con núcleo. Los coleccionistas les pusieron «quimbayas», un nombre que no era el suyo. El procedimiento tenía seis pasos (Banco de la República, s.\\,f.). Modelar el núcleo con arcilla y carbón molido. Cubrirlo con una capa de cera y ponerle un embudo. Fijar soportes para que el núcleo no se mueva. Cubrir todo con un molde de arcilla. Calentar, sacar la cera y vaciar el metal. Romper el molde y sacar los soportes y el núcleo. No hay paso que se pueda adelantar ni vuelta atrás: si el molde se rompe antes de tiempo, la pieza se pierde. Es un algoritmo de orden absoluto, pensado completo antes de empezar. La cara de exclusión: el Tesoro Quimbaya se sacó de una tumba en Filandia en 1890, sin excavación científica, y los orfebres no dejaron nombre; los coleccionistas sí (Uribe Villegas, 1992). Hoy escribes un algoritmo de tu vida con ese cuidado: cada paso en su lugar.',
    fuente: 'Orfebres del Cauca medio · la cera perdida, seis pasos sin vuelta atrás',
    referencia: 'Banco de la República. (s.\\,f.). Quimbaya. Enciclopedia Banrepcultural. · Uribe Villegas, M. A. (1992). La orfebrería Quimbaya tardía. Boletín Museo del Oro, 31, 30--124.',
    preguntaPuente: 'El orfebre no podía vaciar el metal antes de sacar la cera, ni romper el molde antes de que el metal enfriara. Cuando escribas cómo se hace una arepa o cómo alistas el morral, ¿qué paso no se puede hacer antes que otro? ¿Y en qué paso hay una decisión?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La cera perdida, seis pasos sin vuelta atrás',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · La lista del extraterrestre',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · De la lista al pseudocódigo',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · El diagrama que otro ejecuta',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'La lista del extraterrestre',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige algo que sabes hacer sin pensar, alistar el morral, hacer una arepa, lavar los tenis.',
        'Escribe los pasos numerados, en orden, con frases cortas, sin saltarte ninguno por obvio.',
        'Si en algún paso decides algo, márcalo con una D.',
        'Léela como si fueras un extraterrestre que no sabe nada. ¿En qué paso se quedaría atascado?'
      ],
      cuaderno: {
        titulo: 'La lista del extraterrestre',
        formato: 'lista numerada de al menos ocho pasos, con D en las decisiones y una línea sobre el paso donde se atasca',
        extension: 'media página'
      },
      criterios: [
        'Hay al menos ocho pasos y una D.',
        'El paso atascado está corregido.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'De la lista al pseudocódigo',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, tomen la lista de uno de los dos y escriban qué entra (LEER) y qué sale (MOSTRAR).',
        'Reescriban los pasos con palabras clave en mayúscula, un paso por línea y sangría en lo que va dentro de un SI.',
        'Metan al menos una variable, como tiempo disponible o clima, y un si-sino sobre ella.',
        'Prueben el pseudocódigo con un caso concreto, línea por línea hasta el final.'
      ],
      cuaderno: {
        titulo: 'De la lista al pseudocódigo',
        formato: 'el pseudocódigo completo con mayúsculas, sangría, una variable y un si-sino, y el caso de prueba con su resultado',
        extension: 'media página'
      },
      criterios: [
        'Tiene al menos ocho pasos, una variable y un si-sino.',
        'El caso de prueba llegó hasta MOSTRAR.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'El diagrama que otro ejecuta',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Dibuja tu pseudocódigo como diagrama de flujo con los cuatro símbolos, en papel o en draw.io.',
        'Cuenta, un óvalo de inicio, al menos uno de fin, un rombo por cada SI.',
        'Entrégaselo a tu pareja sin decirle nada y pídele que lo ejecute con un caso, siguiendo solo las flechas.',
        'Anota dónde se atascó o qué símbolo le confundió, y corrige.',
        'Escribe cinco líneas sobre cómo se corresponden el pseudocódigo y el diagrama.'
      ],
      cuaderno: {
        titulo: 'El diagrama que otro ejecuta',
        formato: 'el diagrama dibujado, el lugar donde se atascó tu pareja y las cinco líneas de correspondencia',
        extension: 'una página'
      },
      criterios: [
        'Tu pareja llegó al fin del diagrama y el atasco quedó corregido.',
        'Las cinco líneas nombran cada símbolo.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.2.4',
      lente: 'lente del nosotros',
      cita: 'La tecnología no es teoría aplicada: es un oficio que se piensa mientras se hace.',
      preguntaEspejo: '¿Qué paso de mi algoritmo solo entendí cuando lo escribí, y no antes?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 20 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'La filosofía enseña a hacer, no a decir; lo que se dice y lo que se hace tienen que coincidir.',
      preguntaEspejo: '¿Mi diagrama se puede hacer, o solo se puede leer?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Las tecnologías se usan primero para ahorrar tiempo y después para matarlo.',
      preguntaEspejo: '¿Cuándo fue la última vez que empecé a hacer algo sin pensar el orden, y cuánto me costó?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Escribiste algo que hacías sin pensar y descubriste cuántos pasos tiene. Pensar el orden antes de hacer es una destreza que se lleva a todo.',
    emocional: 'Ver a tu pareja atascarse en tu diagrama es incómodo. Es también la única forma de saber que el diagrama sirve.',
    ciudadana: 'Un procedimiento escrito y dibujado lo puede seguir cualquiera, no solo quien lo inventó. Así deberían ser los trámites que te piden.',
    local: 'Los orfebres del Cauca medio pensaban seis pasos sin vuelta atrás antes de tocar el oro. Tu algoritmo tiene la misma disciplina, a otra escala.',
    intergeneracional: 'Un diagrama claro lo ejecuta quien venga después sin preguntarte. Es la forma en que un oficio deja de depender de una sola persona.'
  }
};

export default contenido;
