/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 9
 * (sesión global 19).
 *
 * Auto-generado desde content/guias/8/8-2-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 9,
  titulo: 'Proyecto de monitoreo — tres jornadas de datos',
  resumen: 'Monitorear es medir la misma variable, con la misma frecuencia, durante un tiempo, y releer los datos para decidir. Hoy programas el micro:bit y planeas tres jornadas de mediciones, como el caficultor que solo entiende el cafetal mirando el año completo.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Muchas decisiones del colegio y de la ciudad se toman con datos que alguien midió con paciencia. Saber montar un monitoreo es saber producir ese dato.',
    preguntaDetonante: 'Si midieras la temperatura del salón una sola vez a las 10, ¿qué te perderías de lo que pasa a la 1?',
    activacion: {
      titulo: 'Tres días de lo mismo',
      descripcion: 'En 3 minutos, escribe una cosa que pasa en tu salón todos los días a la misma hora: el calor, el ruido, la fila. ¿Cómo lo sabes? ¿Cuántos días tuviste que verlo para estar seguro?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 8 combinaste sensores con lógica compuesta y probaste ocho escenarios.',
      siguiente: 'En la sesión 10 sustentas el proyecto con los datos y el micro:bit en vivo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Monitoreo',
      definicion: 'Medir la misma variable, con la misma frecuencia, durante un tiempo, y anotar cada valor para decidir después.',
      ejemplo: 'Temperatura del salón, diez veces por jornada, tres jornadas.',
      categoria: 'El plan'
    },
    {
      termino: 'Variable bien definida',
      definicion: 'Una sola cosa medida con una unidad clara. No «el clima», sino la temperatura en grados.',
      ejemplo: 'Luz del salón de 0 a 255, medida en el mismo rincón.',
      categoria: 'El plan'
    },
    {
      termino: 'Frecuencia constante',
      definicion: 'Cada cuánto se mide, y que se cumpla igual todos los días.',
      ejemplo: 'Al llegar, en cada cambio de clase, en el recreo y al salir, los tres días.',
      categoria: 'El plan'
    },
    {
      termino: 'Bitácora',
      definicion: 'Tabla de cuatro columnas, hora, valor, observación del entorno y nivel de alerta, con una fila por medición.',
      ejemplo: '«12:50 · 28 grados · ventanas cerradas, 35 personas · alerta».',
      categoria: 'Los datos'
    },
    {
      termino: 'Patrón',
      definicion: 'Lo que se repite en las filas cuando las comparas por hora y por día.',
      ejemplo: 'Los tres días la temperatura sube entre las 12 y la 1.',
      categoria: 'Los datos'
    },
    {
      termino: 'Propuesta de acción',
      definicion: 'La decisión que sale del patrón y su cifra. Algo que alguien del colegio podría hacer.',
      ejemplo: '«Abrir las ventanas a las 11:30, porque sube de 24 a 28 grados».',
      categoria: 'Los datos'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes montar un monitoreo?',
      instrucciones: 'Cinco preguntas para verificar que dominas variable, frecuencia, bitácora y análisis. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas es una variable bien definida para el monitoreo?',
          opciones: [
            'El clima del colegio durante la semana.',
            'El ambiente del salón en las horas de clase.',
            'La temperatura del salón en grados, medida en el mismo rincón.',
            'Lo que sienten los estudiantes cuando hace calor.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Una sola cosa, con unidad y lugar fijos. Así las treinta filas se pueden comparar.',
          feedbackIncorrecto: '«El clima» y «el ambiente» no tienen unidad ni se pueden comparar fila a fila. La temperatura en grados, en el mismo rincón, sí.'
        },
        {
          enunciado: 'Mediste cada hora el lunes y solo dos veces el martes. ¿Qué problema tiene tu bitácora?',
          opciones: [
            'Ninguno, porque lo importante es llegar a treinta filas en total.',
            'La frecuencia cambió y los dos días ya no se pueden comparar.',
            'El micro:bit se descalibra cuando se mide menos veces.',
            'El martes las mediciones valen doble para compensar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Sin frecuencia constante no sabes si el patrón cambió o si solo cambió cuánto mediste.',
          feedbackIncorrecto: 'El micro:bit no se descalibra y las filas no valen doble. El problema es que con frecuencias distintas los días no se comparan.'
        },
        {
          enunciado: '¿Por qué treinta mediciones en tres jornadas valen más que cien en una hora?',
          opciones: [
            'Porque el micro:bit se calienta si mide cien veces seguidas.',
            'Porque MakeCode solo permite guardar treinta valores en una variable.',
            'Porque la bitácora de papel no tiene espacio para cien filas.',
            'Porque un patrón que se repite solo aparece mirando varios días.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Cien datos de una hora muestran esa hora. Treinta datos de tres días muestran lo que se repite.',
          feedbackIncorrecto: 'No es el calor, ni MakeCode, ni el papel. Es que el patrón, el pico de la 1 de la tarde, solo se ve si aparece varios días.'
        },
        {
          enunciado: 'Se te olvidó anotar dos mediciones de la jornada 2. ¿Qué haces?',
          opciones: [
            'Dejas las filas vacías y declaras el hueco en la observación.',
            'Inventas dos valores parecidos a los vecinos para que la tabla quede completa.',
            'Borras la jornada 2 entera y mides una jornada 4.',
            'Copias los valores de la jornada 1 a la misma hora.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Una bitácora con huecos declarados es confiable. Una completa con datos inventados no sirve para decidir nada.',
          feedbackIncorrecto: 'Inventar o copiar valores daña todo el análisis. Se declara el hueco en la observación y se sigue.'
        },
        {
          enunciado: '¿Cuál de estas es una propuesta de acción que sale de los datos?',
          opciones: [
            '«Hace mucho calor en el salón y deberían hacer algo».',
            '«Poner aire acondicionado en todos los salones del colegio».',
            '«Medir la temperatura otra semana para estar más seguros».',
            '«Abrir las ventanas a las 11:30, porque los tres días subió de 24 a 28 grados».'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Tiene patrón, cifra y una acción que alguien del colegio puede tomar.',
          feedbackIncorrecto: 'Sin cifra es una impresión, y «medir otra semana» no es una acción. La propuesta dice qué hacer, a qué hora y con qué dato.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué falló del plan en la primera jornada, y qué vas a cambiar para las jornadas 2 y 3?',
    transferencia: 'La próxima vez que digas «siempre pasa lo mismo», anótalo tres días seguidos con hora. Vas a ver si era verdad y cuándo.',
    cierre: 'Una medición es un número. Treinta, a la misma hora tres días, son un patrón. El patrón es lo que vas a defender.'
  },
  saberAncestral: {
    saber: 'El café no se recoge todo el año igual. En Colombia hay dos cosechas: la principal, hacia el final del año, y una segunda más pequeña, la mitaca o traviesa, hacia mitad de año. El Valle del Cauca está en traviesa en el primer semestre mientras otras regiones recogen la grande. Entre una cosecha y otra, los campesinos de las veredas cafeteras de Caldas hablan del tiempo frío: los meses en que el cafetal no da fruto (Parada Sanabria, 2017). Ese tiempo no es tiempo perdido. Es la otra mitad del ciclo, la que hace posible la siguiente cosecha. Y solo se entiende mirando el año completo. Quien mira el cafetal una semana ve un cafetal sin grano; quien lo mira doce meses ve dos cosechas y un descanso. Un patrón necesita tiempo para aparecer. La cara de exclusión: el descanso es del cultivo, no del recolector; en tiempo frío no hay jornal, y quien vive de recoger café pasa esos meses buscando otro trabajo. Hoy vas a dejar el micro:bit midiendo durante tres jornadas, porque treinta datos en tres días muestran lo que cien datos en una hora esconden.',
    fuente: 'Campesinado cafetero del Valle del Cauca y Caldas · las dos cosechas y el tiempo frío',
    referencia: 'Parada Sanabria, P. J. (2017). Práctica social y cultural del campesinado cafetero en cuatro municipios de Caldas (Colombia). Revista Colombiana de Sociología, 40(1 Supl.), 193--212. https://doi.org/10.15446/rcs.v40n1Supl.65913',
    preguntaPuente: 'El caficultor solo ve el ciclo completo mirando el año, no una semana. Si midieras la temperatura del salón una sola vez a las 10, ¿qué te perderías de lo que pasa a la 1?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las dos cosechas y el tiempo frío',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Cinco variables y una decisión',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · El programa y el plan de tres jornadas',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · La primera jornada',
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
      titulo: 'Cinco variables y una decisión',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota cinco variables del colegio que un micro:bit pueda medir varios días, temperatura, luz, ruido, paso de personas, humedad de una matera.',
        'Para cada una, escribe qué sensor usarías y qué decisión podría salir del dato.',
        'Escribe cada cuánto la medirías.',
        'Elige una y escribe en una línea por qué esa.'
      ],
      cuaderno: {
        titulo: 'Cinco variables y una decisión',
        formato: 'tabla de 5 filas y 4 columnas (variable, sensor, decisión posible, frecuencia) y la elegida con su porqué',
        extension: 'media página'
      },
      criterios: [
        'Las cinco variables tienen sensor y decisión.',
        'La elegida tiene una decisión concreta que alguien del colegio podría tomar.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'El programa y el plan de tres jornadas',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, en MakeCode, guarden la lectura en una variable, muéstrenla con «mostrar número» y agreguen las tres ramas con umbrales e íconos.',
        'Escriban el plan, dónde va el micro:bit, a qué horas se anota, quién anota cada día.',
        'Dibujen la bitácora de cuatro columnas, hora, valor, observación del entorno y nivel de alerta, con treinta filas numeradas.',
        'Fijen la frecuencia, diez mediciones por jornada a horas que se puedan cumplir.'
      ],
      cuaderno: {
        titulo: 'El programa y el plan de tres jornadas',
        formato: 'el plan con lugar, horas y responsable por día, y la bitácora de cuatro columnas con treinta filas vacías numeradas',
        extension: 'una página'
      },
      criterios: [
        'El micro:bit muestra valor y alerta.',
        'Cualquiera de los dos puede anotar una fila sin preguntarle al otro.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'La primera jornada',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Instala el micro:bit en el lugar del plan y toma la primera medición con hora, valor, observación y alerta.',
        'Toma dos mediciones más en la sesión cambiando algo del entorno, la ventana, la luz.',
        'Revisa si el nivel de alerta tiene sentido con lo que ves. Si no, ajusta el umbral y anótalo.',
        'Escribe en una línea qué falló del plan y completa las diez mediciones de la jornada 1 en el resto del día.'
      ],
      cuaderno: {
        titulo: 'La primera jornada',
        formato: 'las tres primeras filas de la bitácora, el ajuste del umbral si lo hubo, y la línea sobre qué falló del plan',
        extension: 'media página'
      },
      criterios: [
        'Las tres filas tienen hora, valor, observación y alerta.',
        'El nivel de alerta coincide con lo que viste en el salón.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.9.4.1',
      lente: 'lente del nosotros',
      cita: 'Como los temas son infinitos y el tiempo corto, hay que saber perder tiempo para elegir lo que de verdad importa.',
      preguntaEspejo: '¿Qué decisión de mi colegio cambiaría si alguien tuviera estos treinta datos?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VII, 47 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Conviene mirar el curso de los astros y las transformaciones de las cosas, como quien gira con ellas.',
      preguntaEspejo: '¿Qué de mi día se repite sin que lo note, porque nunca lo miré tres veces seguidas?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Los patrones pequeños solo significan algo si se juntan bien, se comparan y se procesan a tiempo.',
      preguntaEspejo: '¿Qué patrón pequeño de mi bitácora se perdería si no comparo los tres días?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Sostener una frecuencia tres días seguidos es una disciplina pequeña. Es la misma que sirve para cualquier proyecto largo.',
    emocional: 'Ver una fila perdida porque se te olvidó anotar da rabia. Declararla en la observación, en vez de inventarla, es lo que hace confiable la bitácora.',
    ciudadana: 'Un dato medido con paciencia puede cambiar una decisión del colegio. Producirlo bien es una forma de participar.',
    local: 'El caficultor entiende el cafetal mirando el año entero, con sus dos cosechas y su tiempo frío. Tú entiendes el salón mirando tres jornadas.',
    intergeneracional: 'Una bitácora con hora y observación la puede releer alguien el año que viene y comparar. Sin eso, tus treinta datos mueren contigo.'
  }
};

export default contenido;
