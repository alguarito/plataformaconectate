/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/8/8-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 6,
  titulo: 'Variables y umbrales — calibrar antes de programar',
  resumen: 'Un umbral es la frontera desde la que el programa actúa, y no se inventa: se calibra con mediciones reales. Hoy guardas lecturas en variables y disparas tres alertas, como los mayores nasa de Toribío que ajustan lo que esperan de una señal cuando el mundo cambia.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Cada alarma, termostato y sensor que te rodea tiene un umbral que alguien decidió. Saber calibrarlo es saber por qué una alarma suena a tiempo y otra molesta.',
    preguntaDetonante: 'Si tu alarma de «falta luz» sonara a mediodía con el sol entrando, ¿qué habría fallado, el sensor o el umbral que pusiste?',
    activacion: {
      titulo: 'Un número, tres salones',
      descripcion: 'En 3 minutos, piensa en tres lugares del colegio: el patio, tu salón y el laboratorio con cortinas. Escribe para cada uno un número entre 0 y 255 que te parezca «normal» de luz. ¿Te sirve el mismo umbral de «oscuro» en los tres?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 5 el micro:bit se expresó con luces y sonido en versiones.',
      siguiente: 'En la sesión 7 buscas el error cuando el programa no hace lo esperado.'
    }
  },
  conceptosClave: [
    {
      termino: 'Lectura',
      definicion: 'El número que entrega el sensor en un instante. Luz, de 0 a 255; temperatura, en grados Celsius.',
      ejemplo: 'A las 5 p. m. el sensor de luz del aula dio 65.',
      categoria: 'Medir'
    },
    {
      termino: 'Variable',
      definicion: 'Un cajón con nombre donde el programa guarda un valor para usarlo después.',
      ejemplo: '«Establecer nivel_luz a (nivel de luz)» guarda la lectura en nivel_luz.',
      categoria: 'Medir'
    },
    {
      termino: 'Nombre descriptivo',
      definicion: 'El nombre de la variable dice qué guarda. Se entiende sin explicación semanas después.',
      ejemplo: 'temperatura_aula en vez de t; umbral_oscuro en vez de x.',
      categoria: 'Medir'
    },
    {
      termino: 'Umbral',
      definicion: 'El valor que separa una zona de acción de otra. Por debajo pasa una cosa, por encima otra.',
      ejemplo: 'Oscuro si la luz es menor de 100; brillante si es mayor de 220.',
      categoria: 'Decidir'
    },
    {
      termino: 'Calibración',
      definicion: 'Tomar varias lecturas en condiciones reales antes de decidir el umbral, y ajustarlo después de probar.',
      ejemplo: 'Cinco lecturas, mesa, ventana, lámpara, mano y bolso, antes de fijar los umbrales.',
      categoria: 'Decidir'
    },
    {
      termino: 'Bitácora de calibración',
      definicion: 'Tabla de cuatro columnas, momento, lectura, condición real y observación, con al menos cinco filas.',
      ejemplo: '«Bajo la lámpara · 240 · muy iluminado · la lámpara a 20 cm».',
      categoria: 'Decidir'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes calibrar un umbral?',
      instrucciones: 'Cinco preguntas para verificar que dominas lecturas, variables, umbrales y calibración. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Las lecturas de luz de un aula fueron 65, 120, 180, 195 y 210. ¿Cuál es un umbral razonable de «oscuro» para una alarma de falta de luz?',
          opciones: [
            'Menos de 100, porque queda por debajo de la lectura normal más baja.',
            'Menos de 200, porque así la alarma suena casi todo el día y no se pierde nada.',
            'Exactamente 120, porque es la primera lectura de la mañana.',
            'Menos de 210, porque es la lectura más alta y así se cubre todo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. El rango normal va de 120 a 210. El umbral de oscuro va por debajo de 120, y 100 deja margen.',
          feedbackIncorrecto: 'Con 200 o 210 la alarma sonaría en momentos normales. El umbral de oscuro va por debajo de la lectura normal más baja, que es 120.'
        },
        {
          enunciado: '¿Para qué sirve el bloque «establecer nivel_luz a (nivel de luz)»?',
          opciones: [
            'Para cambiar cuánta luz emite la pantalla del micro:bit.',
            'Para fijar el umbral de oscuro de una vez por todas.',
            'Para guardar la lectura del sensor en una variable y compararla después.',
            'Para encender el sensor de luz, que viene apagado.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. La variable guarda el número que dio el sensor en ese instante, y con ese número decides.',
          feedbackIncorrecto: 'El bloque no enciende nada ni fija el umbral. Guarda la lectura en una variable para poder compararla.'
        },
        {
          enunciado: 'Tu compañero decidió el umbral de «brillante» sin medir, y la alerta de sol sale en un día nublado. ¿Qué pasó?',
          opciones: [
            'El sensor de luz del micro:bit está dañado y hay que cambiarlo.',
            'El umbral fue una opinión, no una medición, y quedó muy bajo.',
            'MakeCode cambió el valor del umbral al cargar el programa.',
            'Los días nublados siempre dan lecturas altas de luz.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Sin calibrar, el umbral es una opinión. La prueba mostró que quedó muy bajo, y toca subirlo y anotar por qué.',
          feedbackIncorrecto: 'No es el sensor ni MakeCode. El umbral se inventó sin medir y quedó muy bajo. Se calibra con lecturas reales.'
        },
        {
          enunciado: '¿Por qué la bitácora pide al menos cinco mediciones en condiciones distintas?',
          opciones: [
            'Porque MakeCode exige cinco valores para crear una variable.',
            'Porque el sensor solo se estabiliza después de la quinta lectura.',
            'Porque el micro:bit guarda un máximo de cinco números a la vez.',
            'Porque con pocas lecturas no se ve dónde está el rango normal.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Con una o dos lecturas no sabes qué es normal. Cinco, en condiciones distintas, dejan ver el rango.',
          feedbackIncorrecto: 'No es un límite de MakeCode ni del sensor. Sin varias lecturas no se ve el rango normal, y el umbral queda inventado.'
        },
        {
          enunciado: '¿Por qué el umbral de «oscuro» de tu salón puede no servir en el laboratorio?',
          opciones: [
            'Porque cada micro:bit trae umbrales de fábrica diferentes.',
            'Porque el laboratorio tiene otra luz y otro rango normal.',
            'Porque los umbrales se borran al cambiar de lugar.',
            'Porque en el laboratorio el sensor mide en grados y no en luz.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El umbral depende del contexto. Otro lugar, otro rango normal, otra calibración.',
          feedbackIncorrecto: 'Los umbrales no vienen de fábrica ni se borran. Dependen de la luz del lugar, y cada lugar se calibra.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de tus dos umbrales tuviste que mover después de probar, y qué te dijo la prueba?',
    transferencia: 'La próxima vez que un aparato de tu casa avise «demasiado» o «nunca», pregúntate dónde tiene el umbral y quién lo calibró.',
    cierre: 'La señal se lee con un umbral, y el umbral se ajusta cuando el mundo cambia. Don Luis lo hace con el sapo; tú, con la bitácora.'
  },
  saberAncestral: {
    saber: 'En Toribío, en el norte del Cauca, los mayores nasa leen el tiempo en señales que pocos saben interpretar. Si las hormigas arrieras salen al aire libre a recoger comida, va a llover. Si el sapo croa, va a llover. Y la luna avisa con su color: nus ate, la luna de lluvia, se ve pálida y blanca; sek ate, la luna de sol, se ve amarillenta (Ramos García, Tenorio y Muñoz Yule, 2011). Cada señal es un sensor con un umbral: no basta con ver la luna, hay que saber a partir de qué tono anuncia agua. Y ese umbral se vuelve a ajustar. Don Luis Ardo Ascué lo cuenta así: antes, apenas el sapo croaba, caía un torrente; ahora solo cae una llovizna. La señal sigue ahí, pero ya no anuncia lo mismo. La cara de exclusión: los autores del capítulo advierten que no buscan probar si las señales aciertan, sino entender cómo ve el mundo un pueblo. Y Toribío lee esas señales en medio de un conflicto armado que las marca. Hoy vas a hacer lo mismo: medir varias veces antes de decidir el umbral, y volver a mirarlo cuando la realidad cambie.',
    fuente: 'Pueblo nasa de Toribío (Cauca) · las señales para predecir el tiempo',
    referencia: 'Ramos García, C., Tenorio, A. D. y Muñoz Yule, F. (2011). Ciclos naturales, ciclos culturales: percepción y conocimientos tradicionales de los nasas frente al cambio climático en Toribío, Cauca, Colombia. En A. Ulloa (Ed.), Perspectivas culturales del clima (pp. 247--274). Universidad Nacional de Colombia.',
    preguntaPuente: 'Don Luis notó que el sapo ya no anuncia el torrente de antes y ajustó lo que espera de esa señal. Si tu alarma de «falta luz» sonara a mediodía con el sol entrando, ¿qué habría fallado: el sensor o el umbral que tú pusiste?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las señales del tiempo en Toribío',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · El umbral sobre cinco lecturas',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Cinco mediciones reales',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Tres umbrales, tres alertas',
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
      titulo: 'El umbral sobre cinco lecturas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Copia en el cuaderno estas lecturas de luz de un aula, 7 a. m. = 120; 9:30 a. m. = 180; 12 m. = 210; 2 p. m. = 195; 5 p. m. = 65.',
        'Escribe qué pasaría en cada momento con una alarma de «falta luz» si el umbral fuera 100, y luego si fuera 150.',
        'Decide tu umbral y escribe en dos líneas por qué.',
        'Anota qué lectura te haría dudar de tu umbral.'
      ],
      cuaderno: {
        titulo: 'El umbral sobre cinco lecturas',
        formato: 'las cinco lecturas con su hora, dos filas de «qué pasa» (umbral 100 y 150) y tu umbral con su justificación',
        extension: 'media página'
      },
      criterios: [
        'Escribiste qué pasa en los cinco momentos con los dos umbrales.',
        'Tu umbral tiene una justificación de dos líneas.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Cinco mediciones reales',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, en MakeCode, pongan «mostrar número (nivel de luz)» dentro de «para siempre» y carguen el programa.',
        'Dibujen la bitácora de cuatro columnas, momento, lectura, condición real y observación.',
        'Tomen cinco lecturas en condiciones distintas, sobre la mesa, junto a la ventana, bajo la lámpara, tapado con la mano, dentro del bolso, y anoten cada fila.',
        'Ordenen las cinco lecturas de menor a mayor y marquen cuáles son «normales».'
      ],
      cuaderno: {
        titulo: 'Cinco mediciones reales',
        formato: 'la bitácora de cuatro columnas con cinco filas llenas, y las lecturas ordenadas con el rango normal marcado',
        extension: 'media página'
      },
      criterios: [
        'Las cinco filas tienen lectura y observación.',
        'Está marcada la lectura normal más baja y la más alta.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Tres umbrales, tres alertas',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Con tu bitácora, decide tres zonas y escribe los dos umbrales que las separan, con una línea de justificación cada uno.',
        'En MakeCode, dentro de «para siempre», guarda la lectura con «establecer nivel_luz a (nivel de luz)».',
        'Agrega un «si… si no, si… si no» con tres ramas y un ícono distinto en cada una, luna, sol y equis.',
        'Prueba tapando el micro:bit y bajo la luz. Si una alerta sale cuando no toca, mueve el umbral y anota el cambio.'
      ],
      cuaderno: {
        titulo: 'Tres umbrales, tres alertas',
        formato: 'los dos umbrales con su justificación, el dibujo de las tres ramas con su ícono, y la nota del ajuste si lo hubo',
        extension: 'media página'
      },
      criterios: [
        'Al tapar sale la luna y bajo la lámpara sale el sol.',
        'Cada umbral tiene su porqué escrito.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.5.4',
      lente: 'lente del nosotros',
      cita: 'Es ingenuo creer que la información se lee sola, sin conflictos ni contexto.',
      preguntaEspejo: '¿Qué número leí esta semana como si hablara solo, sin preguntar de dónde salió?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 5 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'No nos inquietan las cosas, sino las opiniones que tenemos sobre ellas.',
      preguntaEspejo: '¿Cuál de mis umbrales de hoy era una opinión antes de medir?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'El diseño de nuestras tecnologías, empezando por sus valores por defecto, debería proteger la capacidad de atención de las personas.',
      preguntaEspejo: '¿Qué alerta de mi celular suena tanto que ya no la miro?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Mediste cinco veces antes de decidir. Esa paciencia sirve para cualquier decisión que dependa de un número.',
    emocional: 'Ver que tu alarma suena cuando no toca da rabia. Mover el umbral y anotar por qué es lo que la arregla, no insistir.',
    ciudadana: 'Una alarma mal calibrada enseña a la gente a ignorar las alarmas. Calibrar bien es cuidar la atención de los demás.',
    local: 'Los mayores nasa de Toribío ajustan lo que esperan de una señal cuando la lluvia cambia. Tu umbral también se vuelve a mirar.',
    intergeneracional: 'Una bitácora de calibración le dice a quien siga tu programa de dónde salió cada número. Sin ella, tendrá que medir de nuevo.'
  }
};

export default contenido;
