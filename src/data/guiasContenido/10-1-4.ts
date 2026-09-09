/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/10/10-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 4,
  titulo: 'Iterar y refinar texto con IA — del borrador al capítulo terminado',
  resumen: 'Conviertes un borrador de IA en un capítulo tuyo en tres versiones: marcar lo que sobra, pedir cambios concretos y escribir a mano los puntos donde se nota la voz.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Iterar y refinar',
  preLectura: {
    porQueImporta: 'El primer borrador nunca es el definitivo, ni siquiera para quien escribe hace años. Lo que decide la calidad del capítulo es qué le quitas, no cuánto le agregas.',
    preguntaDetonante: 'Si tuvieras que borrar la mitad de tu borrador, ¿sabrías cuál mitad?',
    activacion: {
      titulo: 'La frase que más molesta',
      descripcion: 'En 3 minutos, lee tu borrador y subraya la frase que más te incomoda al releerla. No la corrijas todavía. Solo mírala.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 3 conseguiste el primer borrador con un prompt de cinco partes.',
      siguiente: 'En la sesión 5 pasas del capítulo suelto a la estructura del libro completo.'
    }
  },
  conceptosClave: [
    {
      termino: 'V1, el borrador',
      definicion: 'Lo que sale de una sola pasada del prompt profesional. Es material crudo: se produce y se marca, no se aprueba.',
      ejemplo: 'Trae la estructura y las ideas, y también los lugares comunes que nadie le pidió evitar.',
      categoria: 'Las tres versiones'
    },
    {
      termino: 'V2, la revisión',
      definicion: 'El texto que resulta de pedirle a la herramienta cambios concretos sobre el borrador marcado.',
      ejemplo: '«Reescribe la apertura como una escena, sin pregunta retórica» produce una V2 comparable.',
      categoria: 'Las tres versiones'
    },
    {
      termino: 'V3, la voz propia',
      definicion: 'La versión con escritura tuya directa en los puntos donde se nota la voz. Sin ella, es una V2 disfrazada.',
      ejemplo: 'Apertura, cierre y un ejemplo tomado de tu propia experiencia, escritos a mano.',
      categoria: 'Las tres versiones'
    },
    {
      termino: 'Prompt de revisión',
      definicion: 'Una instrucción que nombra un cambio verificable sobre un texto que le pegas a la herramienta.',
      ejemplo: '«Mejóralo» no permite comprobar nada; «quita las tres frases de relleno del párrafo 2» sí.',
      categoria: 'Cómo se pide un cambio'
    },
    {
      termino: 'Puntos críticos',
      definicion: 'Los lugares donde quien lee reconoce si hay alguien detrás: la apertura, el cierre y los ejemplos propios.',
      ejemplo: 'Un capítulo con buen cuerpo pero apertura genérica se lee como texto de máquina.',
      categoria: 'Cómo se pide un cambio'
    },
    {
      termino: 'Bitácora de cambios',
      definicion: 'El registro de qué cambió en cada versión, por qué y con qué resultado. La columna de la razón es la que vale.',
      ejemplo: '«Quité el ejemplo del comienzo porque repetía lo que el segundo párrafo ya decía.»',
      categoria: 'Cómo se pide un cambio'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica la iteración',
      instrucciones: '5 preguntas para confirmar que sabes convertir un borrador en un capítulo. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿En cuál de las tres versiones es indispensable que escribas tú directamente?',
          opciones: [
            'En la primera, para que el borrador salga desde el comienzo con tu manera de escribir',
            'En la segunda, cuando ya sabes qué hay que corregir del borrador inicial',
            'En la tercera, donde apertura, cierre y ejemplos propios se escriben a mano',
            'En ninguna: basta con dar instrucciones cada vez más precisas a la herramienta'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Una versión final sin mano humana directa es una segunda versión disfrazada.',
          feedbackIncorrecto: 'La primera es material crudo y la segunda sigue siendo de la herramienta. La voz entra en la tercera.'
        },
        {
          enunciado: '¿Cuál de estos es un prompt de revisión útil?',
          opciones: [
            '«Mejora este texto y hazlo más interesante para quien vaya a leerlo»',
            '«Quita las frases de relleno del segundo párrafo y deja la idea principal»',
            '«Revisa el capítulo completo y corrige todo lo que consideres necesario»',
            '«Haz que suene más profesional, con un tono acorde al tema tratado»'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Nombra un cambio que puedes comprobar al leer la respuesta. Los otros tres no se pueden verificar.',
          feedbackIncorrecto: '«Mejorar» y «sonar profesional» no se pueden comprobar. Un prompt de revisión nombra un cambio verificable.'
        },
        {
          enunciado: '¿Por qué marcar el borrador antes de pedirle cambios a la herramienta?',
          opciones: [
            'Porque el marcado convierte la intuición de que algo falla en una lista de cosas que pedir',
            'Porque la herramienta funciona mejor si recibe el texto con anotaciones incorporadas',
            'Porque es la forma de dejar constancia de que el trabajo se hizo en clase y no en casa',
            'Porque leer en papel siempre resulta más cómodo que leer en la pantalla del equipo'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Sin marcar, uno pide «mejóralo», que es justo el prompt que no sirve.',
          feedbackIncorrecto: 'No es por la herramienta ni por el papel. Es para saber qué pedir exactamente.'
        },
        {
          enunciado: '¿Qué columna hace realmente útil la bitácora de cambios?',
          opciones: [
            'La de la versión, porque permite saber en qué orden ocurrió cada modificación',
            'La del cambio, porque describe con precisión qué fue lo que se hizo en el texto',
            'La del resultado, porque indica si el texto quedó mejor después del ajuste',
            'La de la razón, porque es la única que se puede discutir con alguien más'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Un cambio sin razón escrita no se puede evaluar después, ni por ti ni por nadie.',
          feedbackIncorrecto: 'Las otras tres describen. La razón es la que permite discutir si el cambio estuvo bien.'
        },
        {
          enunciado: 'En el calado se retiran hilos de la tela hasta que el vacío dibuja. ¿Qué aplica eso a tu capítulo?',
          opciones: [
            'Que conviene dejar espacios en blanco entre los párrafos para que el texto respire',
            'Que quitar es parte del trabajo, y no un accidente ni una señal de haber fallado',
            'Que las técnicas textiles y las técnicas de escritura comparten un mismo origen antiguo',
            'Que un texto corto siempre comunica mejor que uno largo sobre el mismo asunto'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Hay oficios enteros donde parte del trabajo consiste en deshacer, y nadie lo vive como una pérdida.',
          feedbackIncorrecto: 'No es sobre espacios en blanco ni sobre longitud. Es que quitar es trabajo, no accidente.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Leí mi borrador como si fuera de otro, o lo leí defendiéndolo?',
    transferencia: 'Llega a la próxima sesión con la versión final, la bitácora y la reflexión. Lo que aprendiste iterando un capítulo se aplica a los diez que faltan.',
    cierre: 'Al terminar podrás: (1) identificar en tu borrador qué material sirve y qué es relleno — lugares comunes, repeticiones, frases vacías; (2) aplicar prompts de revisión concretos para producir una segunda versión mejor; (3) evaluar con honestidad cuánto de la versión final es tuyo…'
  },
  saberAncestral: {
    saber: 'En el norte del Valle hay un oficio hermano del bordado que trabaja quitando en vez de poniendo: el calado. Ansermanuevo se llama a sí misma cuna del calado y el bordado, y lo celebra cada agosto en sus fiestas (Soy Valle, s. f.). La técnica base es el deshilado. Se retiran hilos de la trama o de la urdimbre de la tela y se reagrupan con puntadas los que quedan, hasta que el vacío mismo dibuja. Hay oficios enteros, entonces, donde parte del trabajo consiste en deshacer. Y donde lo que se ve por delante depende de lo que se hizo por detrás. La cara de exclusión es la misma del bordado. Es un oficio precario, y el reconocimiento patrimonial en curso no equivale a un ingreso digno para las artesanas.',
    fuente: 'Caladoras de Ansermanuevo · el deshilado, donde el vacío dibuja',
    referencia: 'Soy Valle. (s.\\,f.). Ruta del bordado y el calado: Ansermanuevo, Cartago. Consultado en 2026.',
    preguntaPuente: '¿Por qué un oficio entero se construye quitando hilos en vez de poniéndolos? ¿Y qué pasa cuando alguien entrega el primer borrador de una IA sin haberle quitado nada?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El oficio que trabaja quitando',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · El borrador bajo la lupa',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Prompts de revisión',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tres versiones y una reflexión',
      duracionMin: 40
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'El borrador bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre o imprime el borrador que generaste en la sesión 3.',
        'Recórrelo entero marcando lugares comunes, repeticiones, relleno y material que sirve.',
        'Cuenta cuántas marcas hay de cada tipo.',
        'Calcula qué parte del texto se queda y qué parte hay que reescribir.',
        'Anota la frase que más te molestó al releerla.'
      ],
      cuaderno: {
        titulo: 'El borrador bajo la lupa',
        formato: 'una fila por etiqueta con su conteo, la parte que se queda y la frase que más molestó',
        extension: 'un tercio de página'
      },
      criterios: [
        'El borrador está marcado entero, no solo el principio.',
        'Está estimada la parte que se queda y la que se reescribe.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Prompts de revisión',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres versiones con el propósito de cada una.',
        'Escribe entre tres y cinco prompts de revisión a partir de tus marcas.',
        'Intercambien los prompts y marquen cuáles son vagos.',
        'Reescriban juntos los vagos hasta que nombren un cambio verificable.'
      ],
      cuaderno: {
        titulo: 'Prompts de revisión',
        formato: 'las tres versiones con su propósito, tus prompts y la corrección de los que estaban vagos',
        extension: 'media página'
      },
      criterios: [
        'Cada prompt nombra un cambio que se puede comprobar al leer la respuesta.',
        'Está registrada la corrección que hizo la pareja.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Tres versiones y una reflexión',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Genera la V2 aplicando tus prompts de revisión.',
        'Reescribe a mano la apertura, el cierre y uno o dos ejemplos propios.',
        'Pasa a limpio la V3 integrando lo que escribiste.',
        'Llena la bitácora con versión, cambio, razón y resultado.',
        'Escribe cinco líneas sobre cuánto de este capítulo es tuyo.'
      ],
      cuaderno: {
        titulo: 'Capítulo iterado',
        formato: 'la referencia a las tres versiones, la bitácora, la comparación y la reflexión',
        extension: 'media página'
      },
      criterios: [
        'La apertura y el cierre de la versión final están escritos a mano.',
        'La reflexión responde sin adornos cuánto del capítulo es propio.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.2.1.1',
      lente: 'lente del nosotros',
      cita: 'El maestro y el discípulo deben apartarse para preparar en la vida su discurso futuro… El rodeo de la lejanía hace posible la proximidad futura.',
      preguntaEspejo: '¿Leí mi borrador como si fuera de otro, o lo leí defendiéndolo?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Acuérdate que igualmente te es libre el mudar de parecer y el seguir el aviso de quien te corrija.',
      preguntaEspejo: '¿Qué fragmento defendí solo porque me costó escribirlo?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Parafraseando un dicho de la publicidad: la mitad de nuestros datos es basura, solo que no sabemos cuál mitad. Lo que necesitamos es entender mejor qué datos vale la pena conservar. (trad. propia)',
      preguntaEspejo: '¿Sabría señalar con el dedo qué mitad de mi borrador sobra, o solo siento que sobra algo?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendes a leer lo tuyo con distancia. Es la misma capacidad que hace falta para revisar un trabajo, una carta o una decisión.',
    emocional: 'Quitar lo que costó escribir duele un poco. Reconocer esa resistencia es lo que impide que decida por ti.',
    ciudadana: 'Declarar cuánto del texto es tuyo y cuánto de la herramienta es honestidad sobre el proceso, y hoy es una pregunta que se hace en serio.',
    local: 'En el calado se retiran hilos hasta que el vacío dibuja. Hay oficios enteros donde parte del trabajo consiste en deshacer.',
    intergeneracional: 'El reconocimiento patrimonial de un oficio no equivale a un ingreso digno para quien lo ejerce. Eso también se hereda.'
  }
};

export default contenido;
