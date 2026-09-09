/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/9/9-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 5,
  titulo: 'Imagen y texto — el ritmo de la lectura',
  resumen: 'En los pueblos del Cauca la tulpa, el fogón de tres piedras, es el lugar donde se aprende a escuchar: nadie llega allí a hablar, se llega a estar y a oír. En una página doble pasa lo mismo. Si la imagen y el texto gritan a la vez, el lector no oye a ninguno. Hoy decides quién habla primero.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Composición visual',
  preLectura: {
    porQueImporta: 'Nadie mira una página doble más de cinco segundos antes de decidir si sigue. En esos cinco segundos se juega todo el trabajo.',
    preguntaDetonante: 'De la última revista que hojeaste, ¿qué recuerdas: una foto o una frase?',
    activacion: {
      titulo: 'Cinco segundos',
      descripcion: 'En 2 minutos, mira una página doble cualquiera durante cinco segundos y cierra los ojos. Anota qué recuerdas primero.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 4 definiste la paleta de cinco colores de tu revista.',
      siguiente: 'En la sesión 6 llevas la cuadrícula, la tipografía y la paleta a una herramienta digital.'
    }
  },
  conceptosClave: [
    {
      termino: 'Refuerzo',
      definicion: 'Imagen y texto dicen lo mismo por canales distintos. Sirve cuando el mensaje no puede admitir dudas.',
      ejemplo: 'Repetir por repetir desperdicia media página: la foto debería aportar lo que el texto no dice.',
      categoria: 'Las tres relaciones'
    },
    {
      termino: 'Contraste',
      definicion: 'La imagen dice algo que el texto matiza o contradice. Sirve para hacer pensar a quien lee.',
      ejemplo: 'Una foto amable con un titular incómodo obliga a mirar dos veces.',
      categoria: 'Las tres relaciones'
    },
    {
      termino: 'Secuencia',
      definicion: 'Uno de los dos empieza la historia y el otro la continúa, de modo que hace falta leer ambos.',
      ejemplo: 'La imagen muestra el después y el texto cuenta el antes.',
      categoria: 'Las tres relaciones'
    },
    {
      termino: 'La imagen captura, el texto profundiza',
      definicion: 'El ojo entra por la imagen porque no hay que descifrarla; la mente sigue por el texto.',
      ejemplo: 'Si el titular pesa tanto como la foto, compiten y el lector no sabe por dónde empezar.',
      categoria: 'El patrón'
    },
    {
      termino: 'Los cinco segundos',
      definicion: 'El tiempo real que alguien mira una página doble antes de decidir si sigue leyendo.',
      ejemplo: 'Si en cinco segundos mira lo que no querías, hay que mover algo antes de entregar.',
      categoria: 'La prueba'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes repartir el turno entre imagen y texto?',
      instrucciones: 'Cinco preguntas sobre las tres relaciones y el patrón de entrada. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu foto muestra exactamente lo que dice el titular, palabra por palabra. ¿Qué pasa?',
          opciones: [
            'Uno de los dos sobra: se pierde media página diciendo lo mismo.',
            'Se refuerza el mensaje y la página gana claridad total.',
            'La composición queda equilibrada por la simetría del contenido.',
            'El lector recuerda mejor el mensaje al verlo repetido.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. El refuerzo sirve cuando no puede haber dudas, pero la foto debería aportar lo que el texto no dice.',
          feedbackIncorrecto: 'Uno de los dos sobra. Repetir por repetir desperdicia media página.'
        },
        {
          enunciado: '¿Por qué el ojo entra normalmente por la imagen y no por el texto?',
          opciones: [
            'Porque las imágenes suelen ocupar más espacio en la página.',
            'Porque el color atrae más que el blanco y negro del texto.',
            'Porque no hay que descifrarla para entender algo de ella.',
            'Porque los diseñadores las ponen siempre arriba a la izquierda.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. La imagen captura y el texto profundiza: ese es el patrón.',
          feedbackIncorrecto: 'Porque no hay que descifrarla. El texto exige leer; la imagen se recibe de una vez.'
        },
        {
          enunciado: '¿Qué se aprende en la tulpa, según el Tejido de Comunicación de la ACIN?',
          opciones: [
            'A hablar en público delante de la comunidad reunida.',
            'A escuchar: nadie llega allí a hablar, se llega a estar y a oír.',
            'A preparar los alimentos de las reuniones del cabildo.',
            'A resolver los conflictos que surgen entre vecinos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. La atención se cultiva estando presente en una conversación que no está dirigida a uno.',
          feedbackIncorrecto: 'A escuchar. Se llega a estar y a oír, no a hablar encima del otro.'
        },
        {
          enunciado: '¿Cuánto tiempo mira alguien una página doble antes de decidir si sigue?',
          opciones: [
            'Un minuto largo, si el tema le interesa.',
            'El tiempo que tarde en leer el primer párrafo.',
            'Depende por completo de la extensión del texto.',
            'Alrededor de cinco segundos.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí, y por eso la prueba del spread se hace con ese tiempo y no con más.',
          feedbackIncorrecto: 'Cinco segundos. En ese tiempo se juega todo el trabajo de la página.'
        },
        {
          enunciado: 'Tu titular y tu foto tienen el mismo peso visual. ¿Qué produce?',
          opciones: [
            'Una composición equilibrada y agradable de mirar.',
            'Que el texto se lea antes que la imagen.',
            'Que el lector no sepa por dónde empezar.',
            'Que la página parezca más profesional y seria.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Compiten, y el lector gasta su atención decidiendo en vez de entendiendo.',
          feedbackIncorrecto: 'Compiten. Sin un turno claro, quien mira no sabe por dónde entrar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'En el spread donde tu compañero miró lo que no querías, ¿qué elemento se llevó la atención y por qué?',
    transferencia: 'Mira una página doble cualquiera durante cinco segundos y anota qué recuerdas. Eso es su jerarquía real, no la que quiso el diseñador.',
    cierre: 'A la tulpa se llega a estar y a oír. Una página donde todo grita a la vez es una conversación donde nadie escucha.'
  },
  saberAncestral: {
    saber: 'En los pueblos del Cauca hay un lugar donde se aprende a escuchar: la tulpa, el fogón de tres piedras en el centro de la casa. El Tejido de Comunicación de la ACIN recoge la explicación de los mayores kiwe the del resguardo de Toez, en Caloto: «las tres piedras que forman la tulpa son traídas con todos los análisis espirituales de los mayores… es aquí donde está la comunicación propia» (2018). Cuatro comuneros del pueblo kokonuko lo cuentan igual en la revista del CRIC: alrededor del fogón, de noche y después de comer, los abuelos contaban historias a hijos y nietos. Fíjate en el detalle. Nadie llegaba allí a hablar: se llegaba a estar y a oír. La cara de exclusión: la tulpa es también un espacio de trabajo doméstico repartido de forma desigual, y el CRIC usa el nombre para sus espacios políticos. Es institución de gobierno, no una técnica de aula.',
    fuente: 'La tulpa en los pueblos del Cauca · se llega a estar y a oír',
    referencia: 'Tejido de Comunicación ACIN. (2018, 17 de agosto). Alrededor de la tulpa como principio de la comunicación ancestral, inició el diálogo con los pares académicos de la UAIIN-CRIC. Çxhab Wala Kiwe.',
    preguntaPuente: 'A la tulpa se llega a estar y a oír, no a hablar encima del otro. En tu página doble, ¿quién habla primero y quién espera su turno?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Se llega a estar y a oír',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Tres páginas dobles reales',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las tres relaciones',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Dos páginas dobles',
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
      titulo: 'Tres páginas dobles reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca tres páginas dobles: una de periódico, una de revista y una de libro ilustrado o catálogo.',
        'Mira cada una durante cinco segundos y anota qué miraste primero.',
        'Anota qué miraste después.',
        'Escribe si la imagen y el texto dicen lo mismo, se contradicen o se continúan.',
        'Marca en cuál compiten y explica en una línea cómo lo notaste.'
      ],
      cuaderno: {
        titulo: 'Tres páginas dobles reales',
        formato: 'tabla de 3 filas y 4 columnas (pieza / qué miré primero / qué después / relación)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres filas tienen nombrada su relación.',
        'Está marcada la pieza donde imagen y texto compiten.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las tres relaciones',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres relaciones con una frase propia cada una.',
        'Clasifiquen sus seis piezas según la relación que usan.',
        'Tomen la que compite y escriban qué cambiarían para que uno ceda el turno.',
        'Escriban en dos líneas cuándo conviene usar cada relación.'
      ],
      cuaderno: {
        titulo: 'Las tres relaciones',
        formato: 'las tres con frase propia, las seis piezas clasificadas y el arreglo de la que competía',
        extension: 'media página'
      },
      criterios: [
        'La pieza que competía tiene escrito qué cede el turno.',
        'Cada relación tiene dicho para qué sirve.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Dos páginas dobles',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Traza la cuadrícula a lápiz suave en dos hojas A4 horizontales.',
        'Decide qué historia cuenta cada spread y qué relación tendrán imagen y texto.',
        'Ubica la imagen y escribe el titular real con tu tipografía display.',
        'Simula el cuerpo con líneas y aplica la paleta señalando dónde va cada color.',
        'Enséñaselos a un compañero cinco segundos cada uno y anota qué miró primero.'
      ],
      cuaderno: {
        titulo: 'Dos páginas dobles',
        formato: 'los dos bocetos con su relación declarada y qué miró primero tu compañero',
        extension: 'media página'
      },
      criterios: [
        'Las dos relaciones son distintas entre sí.',
        'En al menos uno coincidió lo que miró con lo que querías.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.3',
      lente: 'lente del nosotros',
      cita: 'El respeto es silencio, pero no silencio del que nada tiene que decir, sino del que todo tiene que escuchar porque nada sabe del otro como otro.',
      preguntaEspejo: '¿Qué elemento de mi spread no está dispuesto a callarse ni un segundo?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 53 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Acostúmbrate a estar con atención a lo que dice el otro, y en cuanto te sea posible intérnate dentro del alma del que hablare contigo.',
      preguntaEspejo: '¿Estoy mirando mi página como el que la hizo o como el que va a llegar a ella?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Afirmamos que las capacidades atencionales son un bien finito, precioso y escaso. (trad. propia)',
      preguntaEspejo: '¿Cuánta atención le cuesta a alguien decidir por dónde entrar a mi página?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a mirar tu propia página como quien llega a ella, y no como quien la hizo.',
    emocional: 'Que tu compañero mire lo que no querías molesta un poco. También es la información más útil de la sesión.',
    ciudadana: 'Quien diseña decide el turno de palabra entre una foto y un párrafo, y casi nunca lo dice en voz alta.',
    local: 'En la tulpa se llega a estar y a oír. Escuchar es una práctica que se cultiva, no un rasgo de carácter.',
    intergeneracional: 'Alrededor del fogón, los abuelos contaban y los nietos oían. El turno de palabra es una técnica vieja.'
  }
};

export default contenido;
