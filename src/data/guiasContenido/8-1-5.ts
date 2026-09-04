/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/8/8-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 5,
  titulo: 'Referencias relativas y absolutas — fija la rejilla, repite la puntada',
  resumen: 'Una fórmula bien escrita se copia a cien celdas sin romperse. Hoy aprendes qué fija el signo $ y qué deja libre, como la caladora que fija la rejilla y repite la puntada.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'La diferencia entre escribir cien fórmulas a mano y escribir una sola que se copia es la diferencia entre perder una tarde y ganarla. Y entre un error escondido y ninguno.',
    preguntaDetonante: 'Cuando copies una fórmula a diez filas, ¿qué parte debe quedarse quieta y qué parte debe moverse?',
    activacion: {
      titulo: 'La fórmula que se rompió',
      descripcion: 'En 3 minutos, escribe 19 % en E1 y un precio en B2. En C2 escribe =B2*E1 sin signos y arrástrala tres filas. ¿Qué salió en C3 y C4? ¿Por qué?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 4 escribiste SUMA, PROMEDIO, MAX y MIN sobre tu tabla limpia.',
      siguiente: 'En la sesión 6 combinas operadores en una sola fórmula y aprendes el orden en que calcula Excel.'
    }
  },
  conceptosClave: [
    {
      termino: 'Referencia relativa',
      definicion: 'Dirección que se mueve con la copia. B2 se vuelve B3 al copiar una fila abajo.',
      ejemplo: 'En =B2*$E$1, el precio B2 es relativo, cada fila lee su propio precio.',
      categoria: 'Las tres referencias'
    },
    {
      termino: 'Referencia absoluta',
      definicion: 'Dirección que queda fija al copiar gracias al signo $ en la columna y en la fila.',
      ejemplo: '$E$1 sigue apuntando al IVA aunque copies la fórmula a cien filas.',
      categoria: 'Las tres referencias'
    },
    {
      termino: 'Referencia mixta',
      definicion: 'Fija solo la columna ($A2) o solo la fila (B$1). Sirve cuando copias en dos direcciones.',
      ejemplo: '=$A2*B$1 construye la tabla de multiplicar completa desde una sola celda.',
      categoria: 'Las tres referencias'
    },
    {
      termino: 'Tecla F4',
      definicion: 'Con el cursor sobre una referencia en la barra de fórmulas, F4 alterna entre B2, $B$2, B$2 y $A2.',
      ejemplo: 'Escribe =B2*E1, pon el cursor sobre E1 y presiona F4 una vez, queda $E$1.',
      categoria: 'El oficio'
    },
    {
      termino: 'Verificar al final del rango',
      definicion: 'Mirar la fórmula de la última celda copiada. Si apunta a donde debe, la copia quedó bien.',
      ejemplo: 'En K11 la fórmula debe decir =$A11*K$1 y mostrar 100.',
      categoria: 'El oficio'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué fija el signo $?',
      instrucciones: 'Cinco preguntas para verificar que distingues las referencias y sabes cuál usar. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Escribes =B2*$E$1 en C2 y la arrastras hasta C11. ¿Qué cambia y qué no?',
          opciones: [
            'B2 cambia a B3, B4 y así; E1 queda fija en todas las filas.',
            'Las dos cambian, porque arrastrar mueve toda la fórmula.',
            'Ninguna cambia, porque la fórmula se copia tal cual.',
            'E1 cambia a E2, E3 y así; B2 queda fija en todas.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. El precio B2 es relativo y baja con la copia; el IVA $E$1 es absoluto y no se mueve.',
          feedbackIncorrecto: 'El $ fija E1. Lo que baja fila por fila es B2, que no tiene $.'
        },
        {
          enunciado: 'Tienes el descuento en E2 y quieres el precio con descuento de cincuenta productos. ¿Qué escribes en D2 para arrastrar?',
          opciones: [
            '=B2*(1-E2), y arrastras hasta la fila 51.',
            '=$B$2*(1-$E$2), y arrastras hasta la fila 51.',
            '=B2*(1-$E$2), y arrastras hasta la fila 51.',
            '=B$2*(1-E$2), y arrastras hasta la fila 51.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El precio se mueve fila por fila; el descuento queda fijo con $E$2.',
          feedbackIncorrecto: 'Sin $ el descuento se desplaza y apunta a celdas vacías. Con $ en el precio, todas las filas calculan el mismo producto. Solo el descuento lleva $.'
        },
        {
          enunciado: '¿Qué hace la tecla F4 mientras editas una fórmula?',
          opciones: [
            'Copia la fórmula a la celda de abajo automáticamente.',
            'Alterna la referencia entre B2, $B$2, B$2 y $B2.',
            'Borra el signo $ de todas las referencias de la hoja.',
            'Convierte la fórmula en su resultado numérico.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Cada toque de F4 cambia el tipo de referencia sin escribir los signos a mano.',
          feedbackIncorrecto: 'F4 no copia ni borra. Alterna la referencia seleccionada entre relativa, absoluta y las dos mixtas.'
        },
        {
          enunciado: 'Para una tabla de multiplicar del 1 al 10, con factores en A2:A11 y en B1:K1, ¿qué única fórmula va en B2?',
          opciones: [
            '=A2*B1, y se arrastra en las dos direcciones.',
            '=$A$2*$B$1, y se arrastra en las dos direcciones.',
            '=A$2*$B1, y se arrastra en las dos direcciones.',
            '=$A2*B$1, y se arrastra en las dos direcciones.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. $A2 fija la columna de factores de fila; B$1 fija la fila de factores de columna. Una fórmula, cien resultados.',
          feedbackIncorrecto: 'Hay que fijar la columna A y la fila 1, no al revés ni las dos coordenadas. La fórmula es =$A2*B$1.'
        },
        {
          enunciado: 'Tu pareja escribió =B2*E1 para el IVA y la arrastró diez filas. Tu veredicto:',
          opciones: [
            'Funciona, porque Excel entiende que E1 es el IVA.',
            'Funciona solo en la primera fila; de la segunda en adelante lee celdas vacías.',
            'Funciona, pero el resultado sale con signo negativo en cada fila.',
            'No funciona en ninguna fila, porque falta el signo igual.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Sin $, E1 se convierte en E2, E3… y esas celdas están vacías. Solo la primera fila da bien.',
          feedbackIncorrecto: 'La fórmula sí tiene signo igual y Excel no adivina constantes. Sin $, el IVA se desplaza fila por fila hacia celdas vacías.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿En qué momento entendiste qué fija el $? ¿Fue en el experimento, en el IVA o en la tabla de multiplicar?',
    transferencia: 'La próxima vez que copies algo muchas veces, una fórmula, una plantilla, un mensaje, pregúntate qué parte debe quedarse igual y qué parte debe cambiar.',
    cierre: 'Fija la rejilla, repite la puntada. Una fórmula bien pensada se copia cien veces sin romperse.'
  },
  saberAncestral: {
    saber: 'En Ansermanuevo y Cartago hay un oficio que trabaja quitando en vez de poniendo: el calado. La caladora tensa la tela y retira hilos de la trama y de la urdimbre, de uno en uno. «Si tratas de deshilar dos hilos a la vez, ellos no te dejan, se pegan entre sí», cuenta Olivia, caladora de 65 años (Pérez-Bustos, 2019). Lo que queda no es un hueco: es una rejilla regular. Esa rejilla se fija primero y no se toca más. Solo entonces empieza la puntada, que se repite celda por celda, siempre igual, hasta llenar el diseño. Dos cosas, entonces: una que queda fija para toda la pieza, la rejilla, y otra que se copia y se mueve, la puntada. Si cambias el orden, la tela se arruina. La cara de exclusión del oficio: es un saber que se transmite en casa y sin título, y la caladora experta no aparece en ningún registro oficial. En Excel vas a hacer hoy lo mismo: fijar lo que no cambia con el signo $, y dejar libre lo que sí se mueve al copiar.',
    fuente: 'Caladoras de Ansermanuevo y Cartago · la rejilla fija y la puntada que se repite',
    referencia: 'Cuéllar Barona, M., Sánchez-Aldana, E. y Pérez-Bustos, T. (Eds.). (2019). Papel de Colgadura, 18. Universidad Icesi.',
    preguntaPuente: 'La caladora fija la rejilla una vez y después repite la misma puntada en cada celda. Cuando copies una fórmula a diez filas, ¿qué parte de ella es la rejilla, la que no debe moverse? ¿Y qué parte es la puntada, la que debe cambiar en cada fila?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La rejilla fija y la puntada que se repite',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 1 · El experimento de fijar una celda',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '🔎'
      ],
      titulo: 'Actividad 2 · IVA y descuento con una fórmula',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Cien celdas con una fórmula',
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
      titulo: 'El experimento de fijar una celda',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'En Excel escribe 10 en B2 y 20 en C2. En D2 escribe =B2*C2. Debe dar 200.',
        'Escribe 30 en B3 y 40 en C3. Arrastra la fórmula de D2 hasta D3. Debe dar 1200.',
        'En E2 escribe =B2*$C$2 y arrastra hasta E3. Da 600, porque C2 quedó fija.',
        'Haz clic en D3 y en E3 y mira la fórmula en la barra. ¿Qué cambió en cada una?',
        'Escribe en una línea la diferencia entre la columna D y la columna E.'
      ],
      cuaderno: {
        titulo: 'El experimento de fijar una celda',
        formato: 'ficha con los cuatro pasos, los cuatro resultados y una línea sobre la diferencia entre D y E',
        extension: 'media página'
      },
      criterios: [
        'Los cuatro resultados coinciden con los de la guía.',
        'Puedes explicarle a un compañero qué hace el $ con este ejemplo.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'IVA y descuento con una fórmula que se copia',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban en la columna A diez productos de la tienda escolar y en la B sus precios.',
        'En E1 escriban 19 % y en E2 escriban 10 %. Son el IVA y el descuento.',
        'En C2 escriban =B2*$E$1 y arrastren hasta C11. Es el IVA de cada producto.',
        'En D2 escriban =B2*(1-$E$2) y arrastren hasta D11. Es el precio con descuento.',
        'Cambien el IVA de E1 a 21 % y miren la columna C. Si las diez filas cambiaron solas, la referencia quedó bien.'
      ],
      cuaderno: {
        titulo: 'IVA y descuento con una fórmula',
        formato: 'las dos fórmulas escritas tal cual, y una tabla de 2 filas y 2 columnas (qué fijamos con $ / qué dejamos libre)',
        extension: 'media página'
      },
      criterios: [
        'Al cambiar el IVA en E1, las diez filas de la columna C cambian solas.',
        'La tabla dice qué se fijó y por qué.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Cien celdas con una sola fórmula, y la fórmula de tu pareja',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'En una hoja nueva escribe del 1 al 10 en B1 hasta K1, y del 1 al 10 en A2 hasta A11.',
        'En B2 escribe =$A2*B$1.',
        'Arrastra B2 hacia la derecha hasta K2. Después selecciona B2:K2 y arrastra hacia abajo hasta la fila 11.',
        'Haz clic en K11 y mira la barra. Debe decir =$A11*K$1 y mostrar 100.',
        'Intercambia la hoja con tu pareja y revisa su fórmula de B2. ¿Se rompería al copiarla? Escribe tu veredicto en una línea.'
      ],
      cuaderno: {
        titulo: 'Cien celdas con una fórmula',
        formato: 'la fórmula =$A2*B$1 explicada en dos líneas (qué fija cada $), más el veredicto sobre la fórmula de tu pareja con su razón',
        extension: 'media página'
      },
      criterios: [
        'K11 muestra 100 y puedes decir qué fija cada $ de la fórmula.',
        'Tu veredicto sobre la fórmula ajena tiene razón escrita.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.7.1',
      lente: 'lente del nosotros',
      cita: 'No hay liberación sin una tecnología con rostro humano, diseñada desde la historia de la gente que la usa.',
      preguntaEspejo: '¿Quién va a usar mi hoja después de mí, y le dejé una fórmula que puede corregir?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 1 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Hay cosas que dependen de nosotros y cosas que no. Saber cuáles son cuáles es el primer trabajo.',
      preguntaEspejo: 'En mi fórmula, ¿qué fijé porque no depende de la fila, y qué dejé libre porque sí?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Ganan quienes saben preguntar y responder, y por eso saben qué datos buscar.',
      preguntaEspejo: '¿Me hice la pregunta antes de arrastrar, o arrastré y después miré qué salió?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a pensar qué se mueve y qué no antes de copiar. Es la diferencia entre trabajar una vez y trabajar cien.',
    emocional: 'Dejaste que tu pareja juzgara tu fórmula y le diste un veredicto a la suya, con razón. Evaluar sin herir se practica.',
    ciudadana: 'Una hoja con fórmulas bien fijadas la puede corregir cualquiera. Un cálculo público que nadie puede revisar es un cálculo que hay que desconfiar.',
    local: 'La caladora de Ansermanuevo fija la rejilla y repite la puntada. Tú fijaste el IVA con $ y dejaste libre el precio. Es el mismo pensamiento.',
    intergeneracional: 'El calado se aprende en casa, mirando. Tu fórmula bien escrita también se aprende mirando, por eso la revisó tu pareja.'
  }
};

export default contenido;
