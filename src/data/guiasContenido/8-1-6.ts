/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 6
 * (sesión global 6).
 *
 * Auto-generado desde content/guias/8/8-1-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 6,
  titulo: 'Fórmulas compuestas — el orden de las operaciones y los paréntesis que lo dicen',
  resumen: 'Excel calcula en un orden fijo y una fórmula con varias operaciones solo da bien si respetas ese orden o lo cambias con paréntesis. Hoy escribes fórmulas reales que cualquiera puede leer, como la tejedora wounaan que cierra el canasto vuelta por vuelta.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Un IVA mal ordenado en una fórmula cobra de más o de menos y nadie lo nota hasta que alguien revisa la cuenta. Saber el orden de las operaciones te sirve en Excel, en la calculadora y en cualquier programa.',
    preguntaDetonante: 'Cuando escribas =B2*1+19 % para el IVA, ¿qué calculó Excel primero? ¿Era lo que querías?',
    activacion: {
      titulo: 'Catorce o veinte',
      descripcion: 'En 2 minutos, escribe en Excel =2+3*4 y al lado =(2+3)*4. ¿Por qué no dan lo mismo? Explícalo en una frase.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 5 copiaste fórmulas sin romperlas con referencias relativas y absolutas.',
      siguiente: 'En la sesión 7 graficas lo que calculaste y aprendes cuándo un gráfico engaña.'
    }
  },
  conceptosClave: [
    {
      termino: 'Orden de las operaciones',
      definicion: 'La secuencia fija en que Excel calcula, paréntesis, potencias, multiplicar y dividir, sumar y restar. Dentro de cada nivel va de izquierda a derecha.',
      ejemplo: 'En =2+3*4, Excel multiplica 3*4 primero y después suma 2. Da 14.',
      categoria: 'El orden'
    },
    {
      termino: 'Paréntesis',
      definicion: 'Lo que está entre paréntesis se calcula primero. Sirven para cambiar el orden y para dejarlo claro a quien lee.',
      ejemplo: '=(2+3)*4 suma primero y da 20.',
      categoria: 'El orden'
    },
    {
      termino: 'De izquierda a derecha',
      definicion: 'Multiplicar y dividir tienen el mismo nivel; también sumar y restar. Entre iguales, Excel va de izquierda a derecha.',
      ejemplo: '10/2*5 es 25, porque divide primero y multiplica después.',
      categoria: 'El orden'
    },
    {
      termino: 'Fórmula compuesta',
      definicion: 'Fórmula con dos o más operadores o funciones. El orden en que se calculan decide el resultado.',
      ejemplo: 'La nota final ponderada =(B2*0,3)+(C2*0,3)+(D2*0,4) combina tres multiplicaciones y dos sumas.',
      categoria: 'Fórmulas compuestas'
    },
    {
      termino: 'Caso de prueba',
      definicion: 'Un valor cuyo resultado ya conoces, para comprobar que la fórmula está bien ordenada.',
      ejemplo: 'Con 3,0 en las tres notas, la nota final debe dar 3,0. Si da otra cosa, la fórmula está mal.',
      categoria: 'Fórmulas compuestas'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes en qué orden calcula Excel?',
      instrucciones: 'Cinco preguntas para verificar que dominas el orden de las operaciones y el uso de paréntesis. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Cuánto da =2+3*4 en Excel, y por qué?',
          opciones: [
            '20, porque Excel calcula de izquierda a derecha siempre.',
            '14, porque Excel multiplica antes de sumar.',
            '24, porque Excel suma los tres números y luego multiplica.',
            '9, porque Excel ignora el asterisco en las sumas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Multiplicar va antes que sumar. Para que dé 20 hay que escribir =(2+3)*4.',
          feedbackIncorrecto: 'Excel no va siempre de izquierda a derecha. Primero multiplica 3*4 y después suma 2. Da 14.'
        },
        {
          enunciado: 'Quieres restar B2 de A2 y dividir el resultado entre C2. ¿Qué fórmula escribes?',
          opciones: [
            '=A2-B2/C2, porque el orden ya es el correcto.',
            '=A2-(B2/C2), para que reste al final.',
            '=(A2-B2)/C2, para que reste primero y divida después.',
            '=A2/(B2-C2), para que la división vaya adelante.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Sin paréntesis, Excel divide primero. Con (A2-B2) la resta va primero, como querías.',
          feedbackIncorrecto: 'Dividir va antes que restar. Para restar primero, la resta va entre paréntesis, =(A2-B2)/C2.'
        },
        {
          enunciado: 'Un compañero escribió =B2*1+19 % para el IVA de un precio de 1.000 pesos. ¿Qué obtiene?',
          opciones: [
            '1.190 pesos, el precio con IVA.',
            '190 pesos, solo el IVA.',
            'Un error, porque no se puede sumar un porcentaje.',
            '1.000,19 pesos, porque suma 0,19 al final.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Excel multiplica B2*1 y después suma 19 %, que vale 0,19. Lo correcto es =B2*(1+19 %).',
          feedbackIncorrecto: 'Excel no da error, pero tampoco 1.190. Multiplica primero y suma 0,19 al final. El paréntesis en (1+19 %) lo arregla.'
        },
        {
          enunciado: '¿Cuánto da =10/2*5?',
          opciones: [
            '25, porque divide 10 entre 2 y luego multiplica por 5.',
            '1, porque multiplica 2*5 primero y luego divide 10 entre 10.',
            '50, porque suma los tres números y multiplica.',
            '7, porque resta el dos y multiplica.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Dividir y multiplicar tienen el mismo nivel, así que Excel va de izquierda a derecha, 10/2=5 y 5*5=25.',
          feedbackIncorrecto: 'Entre operaciones del mismo nivel, Excel va de izquierda a derecha. Divide primero, después multiplica. Da 25.'
        },
        {
          enunciado: '¿Para qué sirve probar una fórmula con un caso cuyo resultado ya conoces?',
          opciones: [
            'Para que Excel guarde la fórmula como plantilla.',
            'Para descubrir un orden equivocado antes de que llegue a un gráfico.',
            'Para que la fórmula se copie sola a las demás filas.',
            'Para que el formato de la celda cambie a número.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Si con 3,0 en las tres notas la final no da 3,0, el orden está mal y lo ves antes de graficar.',
          feedbackIncorrecto: 'El caso de prueba no cambia la fórmula ni el formato. Sirve para detectar un orden equivocado a tiempo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de las tres fórmulas rotas te habría engañado si no la hubieras probado con un caso conocido?',
    transferencia: 'La próxima vez que uses la calculadora del celular para varias operaciones, pregúntate en qué orden las hizo. Prueba con 2+3*4.',
    cierre: 'El orden es el diseño. Los paréntesis son la forma de escribirlo para que otro lo lea.'
  },
  saberAncestral: {
    saber: 'En las selvas del Chocó, en el litoral del río San Juan, las mujeres wounaan tejen canastos con la fibra de la palma de werregue. La técnica es el rollo en espiral: se empieza por el centro y cada vuelta se cose sobre la anterior, hasta que el canasto cierra. Los diseños cuentan la vida cotidiana, la naturaleza y las creencias del pueblo (Universidad del Rosario, 2023). Fíjate en el orden. No se puede tejer la vuelta de afuera antes que la del centro. No se puede volver a la del medio cuando ya cerraste la de arriba. Cada vuelta depende de la anterior, y el diseño solo aparece si el orden se respeta. Eso es una fórmula compuesta: varias operaciones que solo dan el resultado correcto en un orden. La cara de exclusión: la técnica se enseña hoy en talleres universitarios de Bogotá. La página del taller nombra al pueblo y a la técnica, pero a ninguna tejedora. Hoy vas a escribir fórmulas donde el orden importa tanto como en el canasto, y vas a usar los paréntesis para dejarlo claro.',
    fuente: 'Tejedoras wounaan · el werregue, vuelta sobre vuelta',
    referencia: 'Universidad del Rosario, Facultad de Creación. (2023). Saberes artesanales: taller de tejeduría en werregue.',
    preguntaPuente: 'La tejedora wounaan no puede cerrar la vuelta de afuera antes que la del centro. Cuando escribas =B2*1+19 % para el IVA, ¿qué vuelta cerró Excel primero? ¿Era la que tú querías?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El werregue, vuelta sobre vuelta',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · A mano y en Excel',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Cinco fórmulas con paréntesis',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Tres fórmulas rotas y una prueba real',
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
      titulo: 'A mano y en Excel',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Calcula a mano estas tres expresiones, 2+3*4, (2+3)*4 y 20-6/2, y anota tus respuestas.',
        'Abre Excel y escribe las tres como fórmulas, con el signo igual adelante.',
        'Compara tus respuestas con las de Excel.',
        'Si alguna no coincide, escribe cuál y qué crees que calculó Excel primero.'
      ],
      cuaderno: {
        titulo: 'A mano y en Excel',
        formato: 'tabla de 3 filas y 3 columnas (expresión / mi resultado / resultado de Excel)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres filas están llenas.',
        'Escribiste en una línea qué calcula Excel primero.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Cinco fórmulas reales con paréntesis',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban tres notas parciales en B2, C2 y D2 y calculen la nota final, =(B2*0,3)+(C2*0,3)+(D2*0,4). Con 3,0 en las tres debe dar 3,0.',
        'Escriban un precio en B5, un descuento en D5 y el IVA en E5, y calculen el precio final, =B5*(1-D5)*(1+E5).',
        'Escriban cinco valores en B8:F8 y calculen el promedio sin el menor, =(SUMA(B8:F8)-MIN(B8:F8))/4.',
        'Inventen dos fórmulas más de su vida real, con al menos dos operadores y paréntesis, y pruébenlas con un caso que ya sepan.'
      ],
      cuaderno: {
        titulo: 'Cinco fórmulas con paréntesis',
        formato: 'tabla de 5 filas y 3 columnas (qué calcula / fórmula escrita / caso de prueba y resultado)',
        extension: 'media página'
      },
      criterios: [
        'Las cinco fórmulas tienen su caso de prueba.',
        'Las cinco dieron lo esperado.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Tres fórmulas rotas y una prueba real',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Copia las tres fórmulas mal escritas de la guía y escribe al lado qué calculó Excel primero y por qué salió mal.',
        'Corrígelas con paréntesis y comprueba el resultado.',
        'Haz una prueba real, un cálculo de tu vida con al menos dos operadores. Escribe primero la frase y después la fórmula.',
        'Lee la fórmula de tu pareja y di en voz alta qué se calcula primero. Anota si acertaste.'
      ],
      cuaderno: {
        titulo: 'Tres fórmulas rotas y una prueba real',
        formato: 'tabla de 3 filas y 3 columnas (fórmula rota / qué calculó Excel primero / fórmula corregida), más la prueba real en palabras y en fórmula',
        extension: 'media página'
      },
      criterios: [
        'Las tres corregidas dan el resultado esperado.',
        'Tu pareja leyó tu prueba real sin adivinar el orden.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.2.4',
      lente: 'lente del nosotros',
      cita: 'La tecnología no es teoría aplicada: es un oficio que se piensa mientras se hace.',
      preguntaEspejo: '¿Qué entendí hoy porque una fórmula me salió mal, y no porque me lo dijeron?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 33 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Guarda silencio cuando puedas y di solo lo necesario, con pocas palabras.',
      preguntaEspejo: '¿Mis paréntesis dicen lo necesario, o puse de más porque no estaba seguro?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Las configuraciones por defecto de una tecnología deberían respetar a la persona que la usa.',
      preguntaEspejo: '¿En qué otra herramienta acepto un «por defecto» que no elegí?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste que el orden en que haces las cosas cambia el resultado, y que decirlo con paréntesis evita adivinar.',
    emocional: 'Una fórmula que da 14 en vez de 20 frustra. Averiguar por qué, en vez de borrarla, es la calma que se entrena.',
    ciudadana: 'Un IVA mal ordenado cobra de más sin que nadie lo vea. Saber leer una fórmula es poder revisar una cuenta.',
    local: 'La tejedora wounaan cierra el canasto vuelta sobre vuelta; tú escribiste fórmulas que se calculan en orden. El mismo cuidado.',
    intergeneracional: 'Una fórmula con paréntesis claros la puede corregir quien la herede. Es lo que hace un oficio cuando se enseña.'
  }
};

export default contenido;
