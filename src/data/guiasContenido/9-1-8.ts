/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 8
 * (sesión global 8).
 *
 * Auto-generado desde content/guias/9/9-1-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 8,
  titulo: 'Era digital — del ábaco al chip',
  resumen: 'En Cartago el bordado se hereda por la casa y el diseño se dibuja sobre un plástico que se disuelve al mojarse: cuando el molde se va, solo queda la puntada. Hoy haces el mismo cálculo de memoria, con papel y con calculadora, y miras qué queda de ti cuando el andamio desaparece.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Externalización del cálculo',
  preLectura: {
    porQueImporta: 'Delegar no es el problema. Delegar sin haberlo decidido deja capacidades sin uso, y una capacidad sin uso se apaga despacio y sin avisar.',
    preguntaDetonante: '¿Cuándo fue la última vez que calculaste algo de memoria teniendo el teléfono a mano?',
    activacion: {
      titulo: 'Sin mirar',
      descripcion: 'En 2 minutos, calcula de memoria cuánto pagarías por tres cosas de 3.500, 2.800 y 1.200 pesos. Anota el resultado y después compruébalo.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 7 escribiste la bitácora de un día sin electricidad.',
      siguiente: 'En la sesión 9 defiendes una tecnología propia con evidencia y con su desventaja.'
    }
  },
  conceptosClave: [
    {
      termino: 'Cálculo físico',
      definicion: 'Aquel en que la memoria sale de la cabeza y se apoya en un objeto: quipu, ábaco, marcas o un cuaderno.',
      ejemplo: 'El cuaderno del fiado de una tienda de barrio es cálculo físico, y todavía funciona.',
      categoria: 'Los cuatro momentos'
    },
    {
      termino: 'Externalizar',
      definicion: 'Poner fuera de la cabeza una tarea que antes hacía la cabeza. Gana precisión y cobra práctica.',
      ejemplo: 'Anotar en vez de memorizar libera memoria y, con el tiempo, reduce la que se entrena.',
      categoria: 'Los cuatro momentos'
    },
    {
      termino: 'Andamio',
      definicion: 'Apoyo que sostiene mientras se aprende y que conviene retirar después, como el plástico que se disuelve al mojarse.',
      ejemplo: 'La calculadora puede ser andamio o quedarse. Depende de si lo decides tú.',
      categoria: 'La decisión'
    },
    {
      termino: 'Capacidad sin uso',
      definicion: 'La que se apaga despacio por no ejercitarse, sin que haya un día en que se note la pérdida.',
      ejemplo: 'Un día calcular el vuelto de memoria cuesta más que antes y no recuerdas cuándo empezó.',
      categoria: 'La decisión'
    },
    {
      termino: 'Observación sin juicio',
      definicion: 'Describir lo que ocurrió con datos, sin sacar conclusiones sobre uno mismo a partir de un solo experimento.',
      ejemplo: '«Tardé cuatro minutos y me equivoqué en 62» observa. «Soy malo para las matemáticas» juzga.',
      categoria: 'Escribir la bitácora'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué delegar y qué quedarte?',
      instrucciones: 'Cinco preguntas sobre los cuatro momentos del cálculo y sobre la decisión. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿A qué momento del cálculo pertenece el cuaderno del fiado de una tienda?',
          opciones: [
            'Al mental, porque el tendero recuerda las cuentas de todos.',
            'Al mecánico, porque sustituye por completo a la persona.',
            'Al físico, porque la memoria se apoya en un objeto.',
            'A ninguno, porque no realiza ninguna operación por sí solo.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Como el ábaco o el quipu: la memoria sale de la cabeza y se apoya en algo.',
          feedbackIncorrecto: 'Al cálculo físico. La memoria se apoya en un objeto, aunque el objeto no opere solo.'
        },
        {
          enunciado: '¿Qué cobra cada salto en la historia del cálculo?',
          opciones: [
            'Dinero, porque cada instrumento nuevo es más caro que el anterior.',
            'Ejercicio mental, que es la práctica que deja de hacerse.',
            'Precisión, que siempre se pierde al automatizar una tarea.',
            'Tiempo, porque aprender el instrumento nuevo lleva semanas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Gana precisión, velocidad y memoria; cobra práctica.',
          feedbackIncorrecto: 'Cobra ejercicio mental. La precisión no se pierde: justamente es lo que se gana.'
        },
        {
          enunciado: '¿Cuál de estas es una observación sin juicio?',
          opciones: [
            '«Tardé cuatro minutos de memoria y me equivoqué en 62.»',
            '«Soy malo para las matemáticas desde que era pequeño.»',
            '«La calculadora me volvió perezoso con los números.»',
            '«Nadie de mi edad sabe calcular sin ayuda del teléfono.»'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Eso es. Describe lo que pasó con datos, sin concluir nada sobre quién eres.',
          feedbackIncorrecto: 'La que da datos de lo ocurrido. Las otras tres son juicios, y ninguno se deduce de un experimento.'
        },
        {
          enunciado: '¿Cuál de estas propuestas se puede cumplir o incumplir?',
          opciones: [
            '«Voy a usar menos el celular a partir de ahora.»',
            '«Voy a esforzarme más con los números este año.»',
            '«Voy a ser más consciente de mi uso de la tecnología.»',
            '«Voy a calcular de memoria el vuelto de lunes a viernes.»'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Dice qué cálculo y cuándo, así que al viernes se sabe si se cumplió.',
          feedbackIncorrecto: 'La que dice qué y cuándo. Las otras no se pueden comprobar ni el viernes ni nunca.'
        },
        {
          enunciado: '¿Qué enseña el plástico que se disuelve en el bordado de Cartago?',
          opciones: [
            'Que los materiales biodegradables son mejores para el oficio.',
            'Que el molde sostiene mientras se trabaja y después desaparece.',
            'Que el bordado a mano no necesita ninguna clase de plantilla.',
            'Que el diseño debe copiarse siempre antes de mojar la tela.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Cuando el molde se va, lo que permanece es lo que la mano hizo.',
          feedbackIncorrecto: 'Que el andamio sostiene mientras se aprende y luego se retira. Lo que queda es lo que hizo la mano.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué método te dio el resultado correcto y cuál te dio el más rápido? ¿Fueron el mismo?',
    transferencia: 'Cumple tu propuesta al menos tres días y anota si te costó más el primero o el tercero. La respuesta dice bastante.',
    cierre: 'Cuando el plástico se disuelve, solo queda la puntada. Con los aparatos pasa igual, solo que nadie avisa cuándo.'
  },
  saberAncestral: {
    saber: 'En Cartago el oficio se hereda por la casa, no por la escuela. Gladys Ramírez, bordadora con más de treinta años en el oficio, aprendió a bordar de su abuela (Chica García, 2019). Fíjate en un detalle del procedimiento. El diseño se dibuja a lápiz sobre un plástico biodegradable que se disuelve al mojarse. Cuando el plástico se va, solo queda la puntada. El molde desaparece y lo que permanece es lo que la mano hizo. Esa es la pregunta de hoy, dicha con hilo. Un andamio sirve mientras se construye y después estorba. La calculadora, el corrector y el buscador son andamios: te sostienen mientras aprendes algo. La cuestión es qué queda cuando se disuelven. La cara de exclusión: la transmisión doméstica del oficio convive con la informalidad, y heredar el oficio no garantiza heredar un ingreso.',
    fuente: 'Bordadoras de Cartago · el molde de plástico que se disuelve',
    referencia: 'Chica García, A. (2019, 17 de agosto). Bordados de Cartago: la herencia española que apropiaron las mujeres vallunas. Radio Nacional de Colombia.',
    preguntaPuente: 'Cuando el plástico se disuelve, solo queda la puntada. Si mañana te quitaran la calculadora del teléfono, ¿qué quedaría de lo que sabes calcular?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El molde que se disuelve',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · El experimento de los tres instrumentos',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro momentos del cálculo',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · La bitácora y tu decisión',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'El experimento de los tres instrumentos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma los diez números de la guía y súmalos de memoria, sin escribir, anotando resultado y tiempo.',
        'Súmalos con papel y lápiz, anotando resultado y tiempo.',
        'Súmalos con calculadora, anotando resultado y tiempo.',
        'Compara los tres y marca dónde estuvo cada error.'
      ],
      cuaderno: {
        titulo: 'El experimento de los tres instrumentos',
        formato: 'tabla de 3 filas y 4 columnas (método / resultado / tiempo / errores)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres filas tienen tiempo medido, no estimado.',
        'Está marcado dónde estuvo cada error.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro momentos del cálculo',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro momentos con una frase propia cada uno.',
        'Ubiquen en ellos el ábaco, el cuaderno del fiado, la caja registradora y el teléfono.',
        'Escriban qué ganó y qué cobró cada salto.',
        'Comparen sus tablas del experimento y anoten en qué se parecieron y en qué no.'
      ],
      cuaderno: {
        titulo: 'Los cuatro momentos del cálculo',
        formato: 'los cuatro momentos con frase propia, los cuatro objetos ubicados y lo que ganó y cobró cada salto',
        extension: 'media página'
      },
      criterios: [
        'Cada salto tiene escritas las dos partes, la ganancia y el costo.',
        'Los cuatro objetos están ubicados en su momento.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'La bitácora y tu decisión',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Pasa a limpio la tabla del experimento.',
        'Escribe tres observaciones de lo que pasó, sin juzgarte.',
        'Escribe dos o tres reflexiones honestas y nombra una capacidad que estés dejando de usar.',
        'Escribe una propuesta concreta para esta semana, con qué cálculo harás sin aparato y cuándo.',
        'Léesela a un compañero y pregúntale si alguna frase le sonó a lugar común.'
      ],
      cuaderno: {
        titulo: 'La bitácora y tu decisión',
        formato: 'la tabla, las tres observaciones, las reflexiones, la capacidad nombrada y la propuesta con día y lugar',
        extension: 'media página'
      },
      criterios: [
        'La propuesta se puede cumplir o incumplir esta misma semana.',
        'Un compañero la leyó y no le sonó a lugar común.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.4.5',
      lente: 'lente del nosotros',
      cita: 'Se debe tener clara conciencia que las mejores computadoras no pueden suplantar a los catorce mil millones de neuronas… situadas sólo en nuestra corteza cerebral. El método para la mejor decisión práctica es práctico.',
      preguntaEspejo: '¿Qué decisión mía he dejado en manos de un aparato sin darme cuenta?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 1 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Hay ciertas cosas que dependen de nosotros mismos, como la opinión, la inclinación, los deseos, la aversión, y en una palabra, todas nuestras operaciones. Otras hay también que no dependen, como el cuerpo, las riquezas, la reputación, los imperios.',
      preguntaEspejo: 'De lo que me molesta de mi relación con los aparatos, ¿qué parte depende de mí?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Afirmamos que las capacidades atencionales son un bien finito, precioso y escaso. (trad. propia)',
      preguntaEspejo: '¿En qué usé la atención que me liberó el último aparato que empecé a usar?'
    }
  },
  cincoDimensiones: {
    personal: 'Mediste algo tuyo en vez de suponerlo, y los números casi nunca coinciden con la suposición.',
    emocional: 'Equivocarse en una suma delante de uno mismo incomoda. Escribirlo sin juzgarse es la práctica difícil.',
    ciudadana: 'Quien no puede comprobar una cuenta depende de que quien la hizo la haya hecho bien.',
    local: 'El cuaderno del fiado sigue siendo un instrumento de cálculo vigente a dos cuadras de tu casa.',
    intergeneracional: 'Gladys Ramírez aprendió el bordado de su abuela, no de un curso. El molde se disuelve; la mano queda.'
  }
};

export default contenido;
