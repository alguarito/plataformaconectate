/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/9/9-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 2,
  titulo: 'La rueda y el agua — máquinas simples del campo colombiano',
  resumen: 'El río La Vieja movió trapiches y molinos, y al crecer se lleva siempre los mismos barrios de Cartago. La gente no adivina la creciente: mira el nivel en Puerto Alejandría. Hoy abres las máquinas del campo y aprendes la regla que ninguna puede saltarse: si ganas fuerza, pierdes distancia. Qué multiplica y qué pide a cambio.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Máquinas simples',
  preLectura: {
    porQueImporta: 'Casi todo el mundo sabe decir qué le ahorra una máquina. Casi nadie sabe decir qué le cobra, y ahí está la mitad que importa.',
    preguntaDetonante: '¿Qué máquina usas todos los días sin saber qué está multiplicando exactamente?',
    activacion: {
      titulo: 'Fuerza gratis',
      descripcion: 'En 2 minutos, piensa en algo que hoy hiciste con menos esfuerzo del que costaría a mano. ¿Qué entregaste a cambio?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 1 definiste qué es técnica y distinguiste cuerpo, herramienta y máquina.',
      siguiente: 'En la sesión 3 construyes una balanza y ves por qué medir nunca fue neutral.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ventaja mecánica',
      definicion: 'La relación entre la fuerza que aplicas y el efecto que consigues. Es lo que define a una máquina simple.',
      ejemplo: 'Una palanca larga levanta con poca fuerza lo que a mano no se movería.',
      categoria: 'Las seis'
    },
    {
      termino: 'Rueda con eje',
      definicion: 'Máquina simple que convierte un giro pequeño en un recorrido grande, o al revés. Está en casi todo.',
      ejemplo: 'La rueda del trapiche, la del molino de agua y la de la bicicleta son la misma máquina.',
      categoria: 'Las seis'
    },
    {
      termino: 'Ganancia con costo',
      definicion: 'Si ganas fuerza, pierdes distancia; si ganas distancia o velocidad, pierdes fuerza. Ninguna máquina regala energía.',
      ejemplo: 'La polea te deja tirar hacia abajo, pero jalas la misma cantidad de cuerda que subiría el balde.',
      categoria: 'La regla'
    },
    {
      termino: 'La pregunta doble',
      definicion: 'Qué multiplica y qué pide a cambio. Contestar solo la primera mitad es no haber entendido la máquina.',
      ejemplo: 'El trapiche multiplica la fuerza del buey y le cobra muchas vueltas caminando.',
      categoria: 'La regla'
    },
    {
      termino: 'Punto de referencia',
      definicion: 'Un lugar fijo contra el que se compara un valor para saber si subió o bajó. Sin él no hay medición, solo impresión.',
      ejemplo: 'Puerto Alejandría, en Cartago, es donde se va a ver cómo está el río hoy contra cómo estaba ayer.',
      categoria: 'Leer el entorno'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer una máquina simple?',
      instrucciones: 'Cinco preguntas sobre las seis máquinas y la regla del costo. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Una polea te permite subir un balde tirando hacia abajo. ¿Qué pides a cambio?',
          opciones: [
            'Nada, porque la polea aprovecha el peso de tu cuerpo.',
            'Jalar la misma cantidad de cuerda que sube el balde.',
            'Más tiempo del que tardarías levantándolo a pulso.',
            'Una fuerza mayor que la del peso que estás subiendo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Cambia la dirección de la fuerza, y el recorrido de la cuerda es el precio.',
          feedbackIncorrecto: 'Jalas tanta cuerda como sube el balde. La polea cambia la dirección, no regala energía.'
        },
        {
          enunciado: '¿Qué quiere decir que una máquina sea «simple»?',
          opciones: [
            'Que es antigua y funciona sin electricidad.',
            'Que cualquiera puede construirla sin herramientas.',
            'Que no se puede descomponer en algo más básico.',
            'Que solo sirve para tareas de poca exigencia.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Simple no es primitivo: es que ya no se descompone más.',
          feedbackIncorrecto: 'Que no se descompone en algo más básico. Nada tiene que ver con ser antigua ni sencilla.'
        },
        {
          enunciado: 'En un trapiche movido por un buey, ¿quién aplica la fuerza?',
          opciones: [
            'El buey, y la máquina la redistribuye.',
            'La rueda, que la genera al girar sobre su eje.',
            'La caña, al oponer resistencia entre las masas.',
            'Nadie: el peso del conjunto hace el trabajo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Eso es. La máquina redistribuye fuerza, no la fabrica.',
          feedbackIncorrecto: 'La aplica el buey. Ninguna máquina genera fuerza: la redistribuye.'
        },
        {
          enunciado: '¿Qué es Puerto Alejandría para la gente de los barrios ribereños de Cartago?',
          opciones: [
            'Un dique construido para contener las crecientes del río.',
            'El punto donde se va a mirar el nivel del río La Vieja.',
            'Una estación oficial de alerta temprana de la cuenca.',
            'El sitio desde donde salían los molinos de agua antiguos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Es la referencia con la que se compara cómo está hoy contra cómo estaba ayer.',
          feedbackIncorrecto: 'Es el punto donde se mira el nivel. No es un dique ni una estación de alerta.'
        },
        {
          enunciado: 'Tu análisis de una máquina dice qué multiplica pero no qué pide a cambio. ¿Qué falta?',
          opciones: [
            'Falta medir la ventaja mecánica con números exactos.',
            'Falta identificar cuál de las seis máquinas simples opera.',
            'Falta nombrar quién construyó originalmente la máquina.',
            'Falta la mitad que separa entender de repetir.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La primera mitad la sabe casi todo el mundo; la segunda es la que cuesta.',
          feedbackIncorrecto: 'Falta el costo. Sin él, el análisis está a medias por buenos que sean los demás datos.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus tres dibujos, ¿en cuál te costó más decir qué pide a cambio, y por qué crees que fue ese?',
    transferencia: 'La próxima vez que abras una puerta, fíjate en la manija: es una palanca, y la distancia a la bisagra decide cuánta fuerza necesitas.',
    cierre: 'Ninguna máquina regala energía. Lo que parece gratis se está pagando en otra parte, y casi siempre en tiempo.'
  },
  saberAncestral: {
    saber: 'El río La Vieja bordea a Cartago y le pone frontera con Risaralda. Ese mismo río movió trapiches y molinos, porque el agua que corre es fuerza gratis para quien sepa tomarla. Pero el agua cobra. Cuando crece no se lleva la ciudad entera: se lleva siempre los mismos barrios. Brisas del Río, La Platanera, La Arenera, La Playa y Tierra del Olvido quedaron bajo el agua en marzo de 2022. El río llegó a 12,3 metros. Y la gente no adivina la creciente: la mira. Puerto Alejandría es el punto al que se va a ver el nivel. Es la referencia con la que se compara cómo está hoy contra cómo estaba ayer. Ese es el miedo que protege: no el que paraliza, sino el que enseña a qué hay que mirarle el nivel. La cara de exclusión: el riesgo está repartido por clase y por ubicación, no por azar.',
    fuente: 'Río La Vieja en Cartago · el nivel que se mira en Puerto Alejandría',
    referencia: 'CiudadRegión. (2022, 7 de marzo). Alarma por alto nivel del río La Vieja a su paso por Cartago. CiudadRegión Noticias.',
    preguntaPuente: 'El río da fuerza gratis y cobra creciendo sobre los mismos barrios. ¿Qué máquina de tu casa te da algo a cambio de un costo que casi nunca miras?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El río que da fuerza y cobra',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Las seis a tu alrededor',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Qué multiplica y qué pide',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tres dibujos analíticos',
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
      titulo: 'Las seis a tu alrededor',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Encuentra un ejemplo cotidiano de cada una de las seis máquinas simples.',
        'Búscalos en tu casa, tu mochila, la calle o una bicicleta.',
        'Escribe para cada una qué hace y qué te ahorra.',
        'Marca las dos que te costó más encontrar y anota por qué.'
      ],
      cuaderno: {
        titulo: 'Las seis a mi alrededor',
        formato: 'tabla de 6 filas y 3 columnas (máquina simple / objeto real / qué me ahorra)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las seis filas tienen un objeto concreto, no una categoría.',
        'Están marcadas las dos más difíciles de encontrar.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Qué multiplica y qué pide',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, tomen tres de sus doce objetos y escriban quién aplica la fuerza en cada uno.',
        'Escriban qué multiplica cada uno, si fuerza, velocidad o dirección.',
        'Escriban qué pide a cambio, que siempre es distancia, tiempo o recorrido.',
        'Busquen un objeto donde el costo no sea evidente y discútanlo hasta poder escribirlo.'
      ],
      cuaderno: {
        titulo: 'Qué multiplica y qué pide',
        formato: 'tres objetos analizados con las cuatro preguntas y el caso difícil con su costo escrito',
        extension: 'media página'
      },
      criterios: [
        'Los tres objetos tienen escrita la segunda mitad, la del costo.',
        'Queda resuelto el caso donde el costo no era evidente.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tres dibujos analíticos',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Dibuja a mano un trapiche, una noria o molino de agua y una polea.',
        'Rotula al menos cuatro piezas de cada uno con su nombre.',
        'Escribe en cada dibujo cuál de las seis máquinas simples opera adentro y justifícalo en una frase.',
        'Añade en cada uno qué multiplica y qué pide a cambio.',
        'Pásaselos a un compañero y anota qué no entendió sin explicación.'
      ],
      cuaderno: {
        titulo: 'Tres dibujos analíticos',
        formato: 'los tres dibujos con piezas rotuladas, la máquina simple identificada y la pregunta doble contestada',
        extension: 'una página'
      },
      criterios: [
        'Cada dibujo tiene al menos cuatro piezas rotuladas.',
        'Un compañero leyó los tres sin preguntar nada.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.1.2',
      lente: 'lente del nosotros',
      cita: 'El tema esencial del diseño es el de dotar al producto de coherencia formal; incluye a la tecnología… por cuanto esto significa coherencia funcional: el del valor del uso; incluye a la estética, porque la coherencia formal, en cuanto tal, es la belleza del producto.',
      preguntaEspejo: '¿Qué objeto de mi casa me parece bonito solo porque está bien resuelto?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 13 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Muchas más son, Lucilio, las cosas que nos aterran que las que realmente nos aprietan; frecuentemente sufrimos más por las opiniones que por la realidad.',
      preguntaEspejo: '¿Qué cosa me preocupa sin que yo haya mirado nunca su nivel de verdad?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Lo que en última instancia es finito, precioso, no renovable e incompartible es, en realidad, el tiempo. (trad. propia)',
      preguntaEspejo: '¿Qué máquina uso a diario que me ahorra esfuerzo y me cobra tiempo sin que lo note?'
    }
  },
  cincoDimensiones: {
    personal: 'Puedes desarmar con la mirada casi cualquier máquina que veas, y eso no se olvida.',
    emocional: 'El miedo que protege es el que sabe a qué mirarle el nivel. El otro solo cansa.',
    ciudadana: 'Cuando el río crece se lleva siempre los mismos barrios. El riesgo está repartido por clase y por ubicación.',
    local: 'El trapiche, la noria y la polea siguen funcionando a media hora de tu casa, y casi nadie sabe explicarlos.',
    intergeneracional: 'Quien construyó una noria calculó una ventaja mecánica sin escribir una sola fórmula.'
  }
};

export default contenido;
