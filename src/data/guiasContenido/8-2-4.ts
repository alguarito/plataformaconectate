/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/8/8-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 4,
  titulo: 'Sensores en MakeCode — el micro:bit que siente y avisa',
  resumen: 'El micro:bit tiene sensores que leen el mundo, y un «si» decide qué hacer con lo que leen. Hoy programas tu primer sensor en MakeCode y lo pruebas cinco veces, con la regla de la Guardia Indígena nasa, percibir, avisar y que decida la comunidad.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Toda alarma, todo termostato y todo celular funcionan igual, un sensor lee, una regla decide, algo actúa. Hoy lo armas con tus manos y aprendes a probarlo antes de confiar.',
    preguntaDetonante: 'Cuando tu micro:bit lea «poca luz», ¿qué va a avisar, y quién decide qué hacer con eso?',
    activacion: {
      titulo: 'Los sensores de tu celular',
      descripcion: 'En 3 minutos, escribe tres cosas que tu celular siente sin que se lo pidas, la luz, el movimiento, la hora. ¿Qué decide con cada una?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 3 dibujaste un algoritmo con rombos de decisión.',
      siguiente: 'En la sesión 5 el micro:bit se expresa con luces y sonido sincronizados.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sensor',
      definicion: 'Parte del micro:bit que lee algo del mundo y lo convierte en un dato, luz, temperatura, movimiento, un botón.',
      ejemplo: 'El sensor de luz devuelve 0 en la oscuridad y 255 con mucha luz.',
      categoria: 'La tarjeta'
    },
    {
      termino: 'MakeCode',
      definicion: 'El editor en el navegador donde se programa el micro:bit con bloques que encajan. Tiene un simulador para probar sin tarjeta.',
      ejemplo: 'makecode.microbit.org, proyecto nuevo, bloques a la derecha, simulador a la izquierda.',
      categoria: 'La tarjeta'
    },
    {
      termino: 'Umbral',
      definicion: 'El valor con el que comparas la lectura del sensor para decidir. Se ajusta probando.',
      ejemplo: '«Si nivel de luz menor que 50» prende la vela; si el salón es muy claro, subes el umbral.',
      categoria: 'La tarjeta'
    },
    {
      termino: 'Al iniciar',
      definicion: 'Bloque que se ejecuta una sola vez al encender el micro:bit.',
      ejemplo: 'Mostrar un ícono de bienvenida va en «al iniciar».',
      categoria: 'El programa'
    },
    {
      termino: 'Para siempre',
      definicion: 'Bloque que se repite sin parar. Ahí van la lectura del sensor, el «si» y la acción.',
      ejemplo: 'Sin «para siempre», el micro:bit lee la luz una vez y no vuelve a mirar.',
      categoria: 'El programa'
    },
    {
      termino: 'Bitácora de pruebas',
      definicion: 'Tabla con la entrada que diste, lo que esperabas, lo que pasó y si coincide. Lo esperado se escribe antes.',
      ejemplo: '«Luz 30 y botón A, esperaba vela, pasó vela, coincide».',
      categoria: 'El programa'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer que el micro:bit sienta?',
      instrucciones: 'Cinco preguntas para verificar que distingues sensores, bloques y pruebas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Pones el bloque «si nivel de luz menor que 50 entonces mostrar ícono» fuera de «para siempre». ¿Qué pasa?',
          opciones: [
            'Funciona igual, porque el «si» se repite solo aunque esté afuera.',
            'MakeCode muestra un error y no deja cargar el programa a la tarjeta.',
            'El ícono se muestra todo el tiempo, sin importar el nivel de luz.',
            'El micro:bit decide una sola vez al encender y no vuelve a mirar.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Sin «para siempre», el «si» se evalúa una vez. Para que reaccione a los cambios, va adentro del bucle.',
          feedbackIncorrecto: 'MakeCode no da error, pero el «si» solo se evalúa al inicio. Para que el micro:bit siga mirando la luz, el «si» va dentro de «para siempre».'
        },
        {
          enunciado: 'El sensor de luz del micro:bit devuelve valores entre…',
          opciones: [
            '0 y 100, como un porcentaje de brillo.',
            '0 y 255, de oscuro a mucha luz.',
            '1 y 10, como una escala sencilla de brillo.',
            'Menos 50 y 50, según la hora del día.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. De 0 en la oscuridad a 255 con mucha luz. Un umbral de 300 nunca se cumple.',
          feedbackIncorrecto: 'El nivel de luz va de 0 a 255. Por eso un «si luz mayor que 300» nunca pasa.'
        },
        {
          enunciado: '¿Cuál de estas ideas usa dos sensores y una acción?',
          opciones: [
            'Mostrar un corazón al encender el micro:bit.',
            'Mostrar un número cuando se presiona el botón A.',
            'Encender la vela con poca luz y apagarla al agitar.',
            'Mostrar la temperatura todo el tiempo en la pantalla.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Luz y agitar son dos sensores; encender y apagar la vela es la acción.',
          feedbackIncorrecto: 'Las otras usan un sensor o ninguno. La vela lee la luz y el agitar, dos sensores, y actúa.'
        },
        {
          enunciado: 'En la bitácora de pruebas, ¿cuándo se escribe lo que esperas que pase?',
          opciones: [
            'Antes de probar, para que la prueba sea prueba y no sorpresa.',
            'Después de probar, para que coincida con lo que pasó de verdad.',
            'Solo si la prueba falla y hay que explicar qué salió mal.',
            'No se escribe en ninguna parte, simplemente se recuerda.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Lo esperado va antes. Si lo escribes después, cualquier resultado parece esperado.',
          feedbackIncorrecto: 'Escribir lo esperado después de ver el resultado no prueba nada. Va antes, siempre.'
        },
        {
          enunciado: 'Tu umbral «luz menor que 50» nunca se cumple en el salón. ¿Qué haces?',
          opciones: [
            'Borras el programa, porque el sensor de luz debe estar dañado.',
            'Cambias el sensor de luz por el de temperatura y sigues igual.',
            'Subes el umbral probando, y anotas el nuevo valor en la bitácora.',
            'Esperas a que anochezca para probar el programa en la oscuridad.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El salón es más claro de lo que pensaste. El umbral se ajusta probando y se anota.',
          feedbackIncorrecto: 'El sensor no está dañado ni hay que cambiarlo. El umbral se ajusta al lugar, probando, y el cambio va en la bitácora.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de tus cinco pruebas no coincidió con lo esperado, y qué te enseñó sobre el umbral?',
    transferencia: 'La próxima vez que una app haga algo raro, piensa qué sensor leyó y qué regla decidió. Casi siempre es una de las dos.',
    cierre: 'Percibir, avisar, y que decida la lógica. Un sensor no es más que eso, y tampoco menos.'
  },
  saberAncestral: {
    saber: 'En el Cauca, el pueblo nasa tiene una Guardia Indígena. Se llaman kiwe thegnas, «cuidadores del territorio», y nacieron como guardia en 2001, en el resguardo de Huellas, en Caloto (CRIC, s.\\,f.). No llevan armas: llevan un bastón. Su trabajo es recorrer el territorio, mirar, dar la alerta y convocar a la asamblea. Lo que hace fuerte a un kiwe thegna no es la valentía de uno solo. Es que nunca actúa solo y nunca se calla lo que vio. Fíjate en la secuencia: percibir, avisar, y que decida la comunidad. Un sensor hace exactamente eso: lee algo del mundo, avisa, y el programa decide. La cara de exclusión: la Guardia existe porque el territorio está bajo amenaza armada permanente; no es una figura de folclor ni un cuerpo de vigilancia escolar, y aquí no se cuentan casos ni se buscan héroes. Hoy vas a programar un micro:bit que sienta dos cosas del mundo y avise, con la misma regla: percibir, avisar, y que decida la lógica que tú escribiste.',
    fuente: 'Pueblo nasa · la Guardia Indígena Kiwe Thegnas',
    referencia: 'Consejo Regional Indígena del Cauca. (s.\\,f.). Kiwe Thegna: Guardia Indígena. Consultado el 4 de septiembre de 2026.',
    preguntaPuente: 'El kiwe thegna recorre, ve y avisa; la decisión la toma la asamblea. Cuando tu micro:bit lea «poca luz», ¿qué va a avisar? ¿Y quién decide qué hacer con eso: el sensor o el «si» que tú escribiste?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La Guardia Indígena, percibir y avisar',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '🔎'
      ],
      titulo: 'Actividad 1 · Qué siente el micro:bit',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Dos sensores y una acción',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Cinco pruebas y un ajuste',
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
      titulo: 'Qué siente el micro:bit',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre makecode.microbit.org y crea un proyecto nuevo.',
        'En el simulador, haz clic en los botones A y B.',
        'Busca el control del sensor de luz, un sol pequeño, y muévelo. Busca el control de agitar y prueba.',
        'Anota en una lista qué sensores tiene el micro:bit, qué puede mostrar y una cosa que te haya sorprendido.'
      ],
      cuaderno: {
        titulo: 'Qué siente el micro:bit',
        formato: 'dos listas (sensores / lo que puede mostrar) y una línea con la sorpresa',
        extension: 'un tercio de página'
      },
      criterios: [
        'Nombras al menos cuatro sensores.',
        'Nombras tres cosas que puede mostrar.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'Dos sensores y una acción',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, elijan una idea, la vela digital, el termómetro con caras o la cara expresiva.',
        'Escriban el pseudocódigo con un «si» que combine los dos sensores.',
        'En MakeCode, arrastren «para siempre» y adentro un «si» con la condición.',
        'Pongan la acción, mostrar ícono, número o texto.',
        'Prueben en el simulador moviendo cada sensor.'
      ],
      cuaderno: {
        titulo: 'Dos sensores y una acción',
        formato: 'la frase de qué hace el programa, el pseudocódigo del «si» y un dibujo de los bloques principales',
        extension: 'media página'
      },
      criterios: [
        'El simulador responde a los dos sensores como dice tu pseudocódigo.',
        'El «si» está dentro de «para siempre» y la acción se ve en la pantalla.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Cinco pruebas y un ajuste',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Prueba tu programa en cinco escenarios distintos, poca luz con botón, mucha luz sin botón, agitar, y dos que inventes.',
        'Antes de cada prueba escribe qué esperas; después, qué pasó. Si no coincidió, anota por qué.',
        'Haz un ajuste, cambia el umbral, la condición o el ícono, y vuelve a probar.',
        'Prueba el programa de tu pareja con una entrada que no esperaba y anota qué hizo.'
      ],
      cuaderno: {
        titulo: 'Cinco pruebas y un ajuste',
        formato: 'tabla de 5 filas y 4 columnas (entrada / esperado / pasó / coincide), el ajuste en dos líneas y la entrada inesperada que le diste a tu pareja',
        extension: 'una página'
      },
      criterios: [
        'Las cinco filas están llenas y el ajuste mejoró una de ellas.',
        'Anotaste qué hizo el programa ajeno con la entrada inesperada.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.5.6.3',
      lente: 'lente del nosotros',
      cita: 'La máquina se vuelve peligrosa cuando convierte el rostro de las personas en un instrumento más.',
      preguntaEspejo: '¿Qué decisión de mi programa preferiría que la tomara una persona y no un «si»?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 54 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Lo que no es bueno para el enjambre tampoco es bueno para la abeja.',
      preguntaEspejo: '¿A quién le sirve el aviso de mi micro:bit, además de a mí?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Un patrón pequeño solo significa algo si se agregó bien, se comparó con otro y llegó a tiempo.',
      preguntaEspejo: '¿Con qué comparé la lectura del sensor para que significara algo?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Hiciste que una tarjeta sintiera el mundo y respondiera como tú decidiste. Ya sabes que percibir y decidir son dos cosas distintas.',
    emocional: 'Una prueba que no coincide con lo esperado frustra. Escribir por qué, y ajustar, es lo que separa probar de adivinar.',
    ciudadana: 'La Guardia Indígena avisa y la asamblea decide. Un sensor que decide solo, sin que nadie revise, es lo que hay que aprender a cuestionar.',
    local: 'Los kiwe thegnas del Cauca recorren y avisan sin armas y nunca solos. Tu micro:bit avisa y tu «si» decide. La misma secuencia, a otra escala.',
    intergeneracional: 'Un programa con bitácora de pruebas lo puede mejorar quien venga después, porque sabe qué se probó y qué no.'
  }
};

export default contenido;
