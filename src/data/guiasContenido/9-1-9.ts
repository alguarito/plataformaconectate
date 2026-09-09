/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 9
 * (sesión global 9).
 *
 * Auto-generado desde content/guias/9/9-1-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 9,
  titulo: 'Tecnologías propias — saberes que el mundo aprende ahora',
  resumen: 'En los Andes de Perú y Bolivia se mira el brillo de las Pléyades en junio para decidir cuándo sembrar la papa. En el año 2000 tres investigadores lo comprobaron con satélite: la señal existía. Hoy defiendes una tecnología propia con cuatro criterios técnicos, con evidencia de lugar y tiempo, y con su desventaja escrita sin suavizar.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Saberes que se pueden probar',
  preLectura: {
    porQueImporta: 'Defender un saber sin ponerlo a prueba es tratarlo como adorno. Lo valioso de las Pléyades no es que los abuelos supieran: es que la observación aguantó la prueba.',
    preguntaDetonante: '¿Qué saber técnico de tu región no se enseña en ningún curso, y cómo se comprobaría si funciona?',
    activacion: {
      titulo: 'La señal que sí existe',
      descripcion: 'En 3 minutos, escribe una señal del entorno que alguien de tu familia usa para predecir algo. Al lado, escribe cómo la comprobarías.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 8 recorriste la era digital, del ábaco al chip.',
      siguiente: 'En la sesión 10 escribes el manifiesto del técnico crítico que cierra el periodo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Funcionalidad probada',
      definicion: 'Que la tecnología resuelva un problema concreto y que haya evidencia de que lo resuelve, con lugar y tiempo.',
      ejemplo: 'Los andenes andinos sostienen cultivo en pendiente fuerte y llevan más de mil años haciéndolo.',
      categoria: 'Los cuatro criterios'
    },
    {
      termino: 'Adaptación al lugar',
      definicion: 'Que esté hecha para ese suelo, ese clima y esos materiales, en vez de importada sin ajuste.',
      ejemplo: 'La guadua crece cerca, se corta en luna menguante y se usa donde tiembla. Nada de eso es casual.',
      categoria: 'Los cuatro criterios'
    },
    {
      termino: 'La antigüedad es una pista',
      definicion: 'Que algo lleve siglos funcionando indica que pasó muchos ensayos. Pero hay que decir cuáles, dónde y con qué resultado.',
      ejemplo: '«Es ancestral» no defiende nada. «Alimenta poblaciones en pendiente desde hace mil años» sí.',
      categoria: 'Cómo se argumenta'
    },
    {
      termino: 'La desventaja honesta',
      definicion: 'El costo real frente a la alternativa industrial, casi siempre más trabajo humano o más conocimiento local.',
      ejemplo: 'Un trapiche de tracción animal rinde menos por hora que un molino eléctrico. Decirlo hace creíble el resto.',
      categoria: 'Cómo se argumenta'
    },
    {
      termino: 'Validar una observación',
      definicion: 'Comprobar con otro método si la señal que alguien usa existe de verdad. Es lo que separa el conocimiento de la costumbre.',
      ejemplo: 'Las Pléyades borrosas anuncian El Niño porque hay cirros altos. Un satélite lo confirmó en el año 2000.',
      categoria: 'Poner a prueba'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes defender una tecnología propia?',
      instrucciones: 'Cinco preguntas sobre criterios, evidencia y honestidad en la defensa. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué «es ancestral» no sirve como argumento técnico?',
          opciones: [
            'Porque los saberes antiguos suelen estar mal documentados en general.',
            'Porque no dice qué problema resuelve ni con qué evidencia.',
            'Porque las tecnologías modernas siempre resultan más eficientes.',
            'Porque la palabra no aparece en la bibliografía académica seria.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La antigüedad es una pista de que pasó muchos ensayos, pero hay que decir cuáles.',
          feedbackIncorrecto: 'Porque no dice qué resuelve ni cómo se sabe. La antigüedad es pista, no prueba.'
        },
        {
          enunciado: '¿Qué encontraron Orlove, Chiang y Cane en el año 2000?',
          opciones: [
            'Que la observación de las Pléyades no tenía ninguna base física real.',
            'Que el método servía únicamente en los Andes colombianos del sur.',
            'Que las Pléyades borrosas anuncian El Niño porque hay cirros altos.',
            'Que los agricultores habían copiado el método de los meteorólogos.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. La señal existía; lo que faltaba era la explicación.',
          feedbackIncorrecto: 'Que la señal era real: los cirros altos anuncian El Niño y enturbian las Pléyades.'
        },
        {
          enunciado: '¿De dónde es el saber de las Pléyades que estudia esta guía?',
          opciones: [
            'De los Andes de Perú y Bolivia.',
            'Del norte del Valle del Cauca y el Quindío.',
            'De los pueblos quimbayas del Cauca medio.',
            'De las veredas cafeteras de Caldas y Risaralda.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí, y decirlo con precisión es parte del respeto por el saber.',
          feedbackIncorrecto: 'De los Andes de Perú y Bolivia. Atribuirlo al Valle o a los quimbayas sería un error.'
        },
        {
          enunciado: '¿Por qué una ficha técnica debe incluir una desventaja?',
          opciones: [
            'Porque el docente lo exige como requisito de formato del trabajo.',
            'Porque toda tecnología antigua es peor que la industrial en algo.',
            'Porque sin ella la ficha no alcanza la extensión de una página.',
            'Porque reconocerla es lo que separa una ficha de un folleto.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Una defensa sin costos se lee como propaganda y convence menos.',
          feedbackIncorrecto: 'Porque reconocer el costo real hace creíble todo lo demás que afirmas.'
        },
        {
          enunciado: 'Presentar el saber local como infalible es un problema porque…',
          opciones: [
            'complica innecesariamente la redacción de la ficha técnica.',
            'también es una forma de faltarle al respeto.',
            'impide compararlo con cualquier alternativa industrial.',
            'resulta difícil de sostener frente a un profesor exigente.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El saber local también se equivoca, y tratarlo como oráculo no es tomarlo en serio.',
          feedbackIncorrecto: 'Porque también le falta al respeto: lo trata como creencia y no como conocimiento verificable.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de los cuatro criterios te costó más aplicar a tu tecnología, y qué te faltó averiguar?',
    transferencia: 'Pregúntale a alguien mayor por una técnica de su oficio que no se enseñe en ningún curso. Anota qué problema resuelve.',
    cierre: 'El punto no es que los abuelos supieran. Es que una observación se puede poner a prueba, y esa aguantó.'
  },
  saberAncestral: {
    saber: 'En los Andes, los agricultores miran las Pléyades en junio para saber si el verano vendrá seco. De eso depende si conviene atrasar la siembra de la papa. Conviene decirlo con precisión: esto es de los Andes de Perú y Bolivia, no del Valle ni de los quimbayas. En el año 2000, tres investigadores lo pusieron a prueba con imágenes de satélite y datos de El Niño, y encontraron que tenían razón. Cuando las Pléyades se ven borrosas es porque hay cirros altos. Y esos cirros anuncian un año de El Niño con menos lluvia (Orlove, Chiang y Cane, 2000). El saber campesino no era superstición: era una observación buena a la que le faltaba la explicación. Hoy en Colombia las Mesas Técnicas Agroclimáticas sientan en la misma mesa a agricultores, meteorólogos y técnicos. Deciden juntos qué sembrar y cuándo (Loboguerrero et al., 2018). La cara de exclusión: el saber local también se equivoca. Presentarlo como infalible es otra forma de faltarle al respeto. El punto no es que los abuelos supieran. Es que una observación se puede poner a prueba.',
    fuente: 'Andes de Perú y Bolivia · las Pléyades en junio, puestas a prueba con satélite',
    referencia: 'Orlove, B. S., Chiang, J. C. H., & Cane, M. A. (2000). Forecasting Andean rainfall and crop yield from the influence of El Niño on Pleiades visibility. Nature, 403(6765), 68--71. https://doi.org/10.1038/47456',
    preguntaPuente: 'Los agricultores andinos leían una señal real y les faltaba la explicación. ¿Qué saber de tu región conoces que nadie ha puesto a prueba todavía, y cómo se pondría a prueba?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las Pléyades, puestas a prueba',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Cuatro tecnologías propias',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro criterios',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · La ficha técnica',
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
      titulo: 'Cuatro tecnologías propias',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira andenes andinos, arquitectura en guadua, navegación del Pacífico y trapiche de caña.',
        'Escribe para cada una qué problema técnico resuelve, en una frase.',
        'Escribe qué evidencia hay de que lo resuelve, con siglos, extensión o adopción actual.',
        'Marca la que más te sorprendió y di en una línea por qué.'
      ],
      cuaderno: {
        titulo: 'Cuatro tecnologías propias',
        formato: 'tabla de 4 filas y 3 columnas (tecnología / problema técnico / evidencia de que funciona)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Ninguna casilla de evidencia dice solo «es muy antigua».',
        'Cada problema técnico cabe en una frase.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro criterios',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro criterios con una frase propia cada uno.',
        'Apliquen los cuatro a una de las tecnologías y anoten cuáles cumple.',
        'Busquen su alternativa industrial y escriban en qué gana cada una.',
        'Escriban la desventaja de la tecnología propia sin suavizarla.'
      ],
      cuaderno: {
        titulo: 'Los cuatro criterios',
        formato: 'los cuatro criterios con frase propia aplicados a una tecnología y la comparación con su alternativa',
        extension: 'media página'
      },
      criterios: [
        'La desventaja está escrita sin suavizar.',
        'La comparación dice en qué gana cada opción.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'La ficha técnica',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige una tecnología propia, de las cuatro o de tu región.',
        'Escribe el problema técnico que resuelve, en una frase.',
        'Dibuja el mecanismo y rotula sus partes.',
        'Escribe la evidencia de que funciona, con lugar y tiempo.',
        'Escribe una desventaja honesta y un uso actual concreto.',
        'Intercambia la ficha con un compañero y marca si algún argumento suyo se apoya solo en la tradición.'
      ],
      cuaderno: {
        titulo: 'La ficha técnica',
        formato: 'las cinco partes de la ficha, con el dibujo del mecanismo rotulado y la desventaja escrita',
        extension: 'una página'
      },
      criterios: [
        'Hay dibujo del mecanismo con las partes rotuladas.',
        'Ningún argumento se sostiene solo en que es tradición.',
        'Revisaste la ficha de un compañero y marcaste sus argumentos de sola tradición.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.7.1',
      lente: 'lente del nosotros',
      cita: 'No hay liberación sin economía y tecnología humanizada, diseño, y sin partir de una formación social histórica.',
      preguntaEspejo: '¿Qué problema de mi región se está resolviendo con una solución pensada para otro lugar?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VII, 47 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Conduce mirar alrededor el curso de los astros, como quien gira con ellos, y contemplar también frecuentemente las mutuas conversiones de los elementos, porque las consideraciones de estas cosas purifican a uno de las manchas de esta vida terrestre.',
      preguntaEspejo: '¿Qué señal del entorno miro sin darme cuenta y uso para decidir algo?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Los pequeños patrones solo pueden ser significativos si se agregan correctamente, se comparan y se procesan a tiempo. (trad. propia, abreviada)',
      preguntaEspejo: '¿Qué observación mía repetida muchas veces podría significar algo si la comparara?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a defender algo con evidencia en vez de con afecto, que es más difícil y convence más.',
    emocional: 'Reconocer la desventaja de lo que uno defiende cuesta. También es lo que hace que te crean.',
    ciudadana: 'Un saber que nadie pone a prueba se queda de adorno en un museo, y así no le sirve a nadie.',
    local: 'La guadua, el trapiche y la navegación del Pacífico resuelven problemas técnicos reales de este territorio.',
    intergeneracional: 'Alguien observó el cielo durante generaciones para que la señal se pudiera comprobar en el año 2000.'
  }
};

export default contenido;
