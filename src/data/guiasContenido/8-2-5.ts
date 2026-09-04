/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/8/8-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 5,
  titulo: 'Actuadores — luces y sonido con compás',
  resumen: 'Un actuador ejecuta lo que el programa decide, luz o sonido. Hoy le das compás a una animación de ocho cuadros con notas y pausas, y la controlas con botones, como los bogas del Pacífico que reman al ritmo del canto.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Todo lo que una máquina te muestra o te suena pasó por una secuencia con pausas. Saber armarla por versiones es la forma de terminar lo que empiezas.',
    preguntaDetonante: 'Cuando pongas ocho cuadros seguidos sin pausa, ¿qué va a ver quien mire el micro:bit?',
    activacion: {
      titulo: 'Dos cuadros sin pausa',
      descripcion: 'En 3 minutos, pon en MakeCode dos «mostrar LEDs» seguidos, un corazón grande y uno pequeño, sin pausa. ¿Qué ves en el simulador? Agrega una pausa de 300 y vuelve a mirar.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 4 el micro:bit sintió con dos sensores y avisó.',
      siguiente: 'En la sesión 6 usas variables y umbrales para responder a niveles.'
    }
  },
  conceptosClave: [
    {
      termino: 'Actuador',
      definicion: 'Lo que ejecuta la decisión del programa en el mundo, una luz, un sonido, un motor.',
      ejemplo: 'La pantalla de 5×5 y el altavoz del micro:bit son actuadores.',
      categoria: 'Los actuadores'
    },
    {
      termino: 'Mostrar LEDs',
      definicion: 'Bloque que pinta un cuadro de 5×5. Una secuencia de estos bloques con pausa es una animación.',
      ejemplo: 'Corazón pequeño, mediano, grande, mediano, cuatro «mostrar LEDs» seguidos.',
      categoria: 'Los actuadores'
    },
    {
      termino: 'Tocar tono',
      definicion: 'Bloque que toca una nota durante un tiempo. Do es 262, la es 440.',
      ejemplo: '«Tocar tono do durante 200 ms» suena con el cuadro que dura 200 ms.',
      categoria: 'Los actuadores'
    },
    {
      termino: 'Pausa (ms)',
      definicion: 'Espera entre cuadros. Sin ella, solo se ve el último. Con 200 milisegundos, se ve el movimiento.',
      ejemplo: 'Ocho cuadros con pausa de 200 duran 1,6 segundos.',
      categoria: 'El compás'
    },
    {
      termino: 'Sincronizar',
      definicion: 'Que la nota dure lo mismo que la pausa, para que luz y sonido vayan juntos.',
      ejemplo: 'Cuadro de 200 ms, nota de 200 ms. Como el remo y la voz del boga.',
      categoria: 'El compás'
    },
    {
      termino: 'Versiones',
      definicion: 'Construir el programa en pasos que funcionan, la 1 con luces, la 2 con sonido, la 3 con botones.',
      ejemplo: 'La bitácora dice qué cambió de una versión a otra y por qué.',
      categoria: 'El compás'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes darle compás a una animación?',
      instrucciones: 'Cinco preguntas para verificar que dominas cuadros, pausas, notas y versiones. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Pones ocho «mostrar LEDs» seguidos sin ninguna pausa. ¿Qué se ve en el micro:bit?',
          opciones: [
            'Solo el último cuadro, porque los demás pasan demasiado rápido.',
            'Los ocho cuadros, uno tras otro, a una velocidad normal y cómoda.',
            'Un error en pantalla, porque MakeCode exige pausas entre cuadros.',
            'La pantalla apagada, porque los cuadros se cancelan entre sí al pasar.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sin pausa, los cuadros cambian tan rápido que solo queda el último. La pausa es el compás.',
          feedbackIncorrecto: 'MakeCode no da error y la pantalla no se apaga. Sin pausa, los cuadros pasan tan rápido que solo se ve el último.'
        },
        {
          enunciado: 'Quieres que la nota suene exactamente mientras se ve el cuadro. ¿Qué haces?',
          opciones: [
            'Pones la nota antes de todos los cuadros para que suene primero.',
            'Le das a la nota la misma duración que a la pausa del cuadro.',
            'Subes el volumen del altavoz al máximo para que se note más.',
            'Quitas todas las pausas para que luz y sonido salgan juntos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Nota y pausa del mismo largo, luz y sonido van juntos. Eso es sincronizar.',
          feedbackIncorrecto: 'El volumen y el orden no sincronizan. Lo que une luz y sonido es que la nota dure lo mismo que la pausa del cuadro.'
        },
        {
          enunciado: '¿Para qué sirve la variable «activa» en la versión 3?',
          opciones: [
            'Para contar cuántos cuadros tiene la animación y cuántos faltan por mostrar.',
            'Para guardar la nota más aguda del programa y repetirla al final.',
            'Para que A la ponga en verdadero, B en falso, y el «si» decida si corre.',
            'Para cambiar el color de las luces del micro:bit según la hora del día.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. «Activa» es un interruptor, y el «si activa» dentro de «para siempre» es quien obedece a los botones.',
          feedbackIncorrecto: 'La variable no cuenta cuadros ni guarda notas ni cambia colores. Es el interruptor que A enciende y B apaga.'
        },
        {
          enunciado: '¿Por qué se construye el programa en tres versiones y no todo de una vez?',
          opciones: [
            'Porque MakeCode no permite más de ocho bloques en un mismo programa.',
            'Porque cada versión funciona y se prueba, y el error se encuentra pronto.',
            'Porque el micro:bit se calienta si se le carga todo el programa junto.',
            'Porque así el programa queda más largo y se ve mejor en la pantalla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Tres versiones que corren valen más que un programa gigante que no arranca. El error aparece en la versión donde entró.',
          feedbackIncorrecto: 'No es un límite de MakeCode ni de calor. Es que cada versión se prueba y el error se encuentra pronto.'
        },
        {
          enunciado: 'Tu pareja mira tu animación y dice «unas luces». ¿Qué significa?',
          opciones: [
            'Que le falta volumen al altavoz y por eso no se entiende la secuencia.',
            'Que tu pareja no sabe de micro:bit y por eso no reconoce la animación.',
            'Que la animación está perfecta y solo hay que cargarla a la tarjeta.',
            'Que la animación no cuenta nada y hay que cambiar el cuadro que confunde.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Si quien mira no ve el latido o la ola, la secuencia no cuenta nada. Se ajusta el cuadro, no la explicación.',
          feedbackIncorrecto: 'No es el volumen ni tu pareja. Una animación cuenta algo solo si otro lo ve sin explicación. Cambia el cuadro que confunde.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué cuadro de tu animación confundió a tu pareja, y qué le cambiaste?',
    transferencia: 'La próxima vez que tengas un trabajo grande, divídelo en tres versiones que funcionen. Entrega la primera aunque le falte.',
    cierre: 'El canto le pone compás al remo. La pausa le pone compás a la luz. Sin compás, no hay secuencia.'
  },
  saberAncestral: {
    saber: 'En los ríos del Pacífico sur, entre Buenaventura y Tumaco, la gente se ha movido durante siglos en canoa, remando. Y mientras rema, canta. Los cantos de boga son cantos de trabajo: se entonan al ritmo de los remos, en trayectos que pueden durar un día entero (Ministerio de Cultura, 2010). El canto no quita el esfuerzo. Le pone un compás: cada golpe de remo cae donde cae la voz, y el cuerpo aguanta más cuando el esfuerzo tiene ritmo. Una animación en el micro:bit funciona igual. Ocho cuadros sin pausa son un parpadeo que nadie ve; ocho cuadros con una nota entre cada uno son una secuencia que cuenta algo. La cara de exclusión: remar durante días es un trabajo extenuante y mal pagado; el canto lo aligera, no lo dignifica por sí solo (Lozano Mayo y Palacios, 2013). Y una precisión: los cantos de boga son de los ríos del Pacífico, no del río Cauca ni del norte del Valle. Hoy vas a darle compás a tus luces con pausas y notas, para que la secuencia cuente algo.',
    fuente: 'Comunidades afro ribereñas del Pacífico sur · los cantos de boga',
    referencia: 'Ministerio de Cultura. (2010). Plan Especial de Salvaguardia de las músicas de marimba y los cantos tradicionales del Pacífico sur de Colombia (A. Vanín Romero, coord.), p. 15. · Lozano Mayo, L. A. y Palacios, L. E. (2013). Los bogas del Chocó. Bioetnia, 10, 61--69.',
    preguntaPuente: 'El boga canta al ritmo del remo y por eso aguanta el trayecto. Cuando pongas ocho cuadros seguidos en el micro:bit sin pausa, ¿qué va a ver quien lo mire? ¿Y qué cambia si cada cuadro dura lo que dura una nota?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Los cantos de boga, el compás del remo',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · La coreografía en papel',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Versión 1 y versión 2',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Versión 3, los botones mandan',
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
      titulo: 'La coreografía en papel',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Dibuja en el cuaderno cuatro cuadrículas de 5×5. Son la pantalla del micro:bit.',
        'Elige una animación simple, un corazón que late, una flecha que gira, una ola que sube, un cuadrado que crece.',
        'Rellena con lápiz las luces encendidas de cada cuadro, en orden, y numéralos del 1 al 4.',
        'Debajo de cada uno escribe una nota que le pondrías, grave, media o aguda.'
      ],
      cuaderno: {
        titulo: 'La coreografía en papel',
        formato: 'cuatro cuadrículas de 5×5 numeradas, con las luces encendidas rellenas y una nota debajo de cada una',
        extension: 'media página'
      },
      criterios: [
        'Se nota el movimiento al mirar los cuadros en orden.',
        'Cada cuadro tiene su nota.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'Versión 1 y versión 2, luces y luego sonido',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, en MakeCode, arrastren «al presionar el botón A» y adentro un «mostrar LEDs» por cada cuadro, hasta ocho.',
        'Entre cuadro y cuadro pongan «pausa (ms)» de 200 y prueben. Esa es la versión 1. Ajusten la pausa hasta que se vea fluida.',
        'Después de cada cuadro, o cada dos, agreguen «tocar tono» con una nota y una duración igual a la pausa. Esa es la versión 2.',
        'Anoten qué cambió de la versión 1 a la 2.'
      ],
      cuaderno: {
        titulo: 'Versión 1 y versión 2',
        formato: 'la lista de los ocho cuadros con su pausa, la lista de las notas con su duración, y una línea sobre qué cambió',
        extension: 'media página'
      },
      criterios: [
        'La animación se ve fluida y al menos cuatro notas suenan con los cuadros.',
        'Anotaste el valor de pausa que funcionó.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Versión 3, los botones mandan',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Crea una variable «activa». En «al presionar el botón A» ponla en verdadero; en «al presionar el botón B», en falso.',
        'Mueve la animación a «para siempre», dentro de un «si activa entonces». Prueba que A la inicia y B la detiene.',
        'Escribe la bitácora de las tres versiones, qué tenía cada una, qué cambió y por qué.',
        'Muéstrale la animación a tu pareja sin decir nada y pídele que diga qué cuenta. Anota si acertó.'
      ],
      cuaderno: {
        titulo: 'Versión 3, los botones mandan',
        formato: 'tabla de 3 filas y 3 columnas (versión / qué tenía / qué cambió y por qué), más lo que dijo tu pareja',
        extension: 'media página'
      },
      criterios: [
        'A inicia y B detiene.',
        'Las tres filas están llenas y anotaste lo que vio tu pareja.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.7.1',
      lente: 'lente del nosotros',
      cita: 'No hay liberación sin una tecnología con rostro humano, diseñada desde la historia de la gente que la usa.',
      preguntaEspejo: '¿Mi animación la entiende alguien que no soy yo?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 1 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Mientras la aplazamos, la vida se va. Solo el tiempo es nuestro, y se escapa.',
      preguntaEspejo: '¿Qué versión de algo mío nunca entregué por esperar a que fuera perfecta?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'La atención de las personas es un bien finito, precioso y escaso.',
      preguntaEspejo: '¿Qué de mi animación pide atención sin devolver nada?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Terminaste tres versiones que funcionan en vez de perseguir una perfecta. Es una forma de trabajar que sirve para todo.',
    emocional: 'Ver que tu pareja no entiende tu animación cuesta. Cambiar el cuadro que confunde, en vez de explicarlo, es lo que la mejora.',
    ciudadana: 'Una pantalla que pide atención sin devolver nada la gasta. Diseñar con compás es respetar el tiempo de quien mira.',
    local: 'Los bogas del Pacífico reman al ritmo del canto y por eso aguantan el trayecto. Tus luces con pausa tienen ese mismo compás.',
    intergeneracional: 'Una bitácora de versiones deja ver cómo se construyó algo. Quien la lea después puede seguir desde la versión 3.'
  }
};

export default contenido;
