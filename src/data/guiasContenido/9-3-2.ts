/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/9/9-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 2,
  titulo: 'Tablas y registros — la columna como tipo, la fila como caso',
  resumen: 'En 1795 la Corona publicó un arancel donde la blancura se podía comprar: la casilla que le tocaba a alguien decidía si podía estudiar, ordenarse o casarse. No era una etiqueta, era una lista de permisos. Hoy pones tu tabla en forma con tres reglas innegociables, y de paso miras qué reparte una columna cuando clasifica personas.',
  duracionMin: 90,
  subtema: 'Datos · Estructura de tablas',
  preLectura: {
    porQueImporta: 'Sobre una tabla sucia ninguna fórmula da un resultado confiable, y lo peor es que no avisa: devuelve un número que parece correcto.',
    preguntaDetonante: '¿Has abierto alguna vez una hoja de cálculo de otra persona y no has entendido qué significaba una columna?',
    activacion: {
      titulo: 'La columna rara',
      descripcion: 'En 2 minutos, mira una tabla que tengas y busca la columna cuyo nombre no entendería alguien más. Anota cómo se llamaría bien.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 1 recogiste veinte filas con una pregunta acotada.',
      siguiente: 'En la sesión 3 entran SUMA, PROMEDIO, MAX, MIN y CONTARA sobre esta tabla ya limpia.'
    }
  },
  conceptosClave: [
    {
      termino: 'Columna tipada',
      definicion: 'La que guarda una sola clase de cosa —texto, número, fecha, moneda, sí y no— con el tipo declarado en la hoja.',
      ejemplo: 'Si mezclas texto y número, la fórmula no falla: devuelve un resultado falso sin avisar.',
      categoria: 'Las tres reglas'
    },
    {
      termino: 'Cada fila un caso',
      definicion: 'Una fila registra un solo hecho. Si dentro de una celda hay una lista, son varias filas disfrazadas de una.',
      ejemplo: '«Leche, pan, mantequilla» en una celda impide contar cuántas veces se compró pan.',
      categoria: 'Las tres reglas'
    },
    {
      termino: 'Encabezado consistente',
      definicion: 'El mismo nombre en toda la hoja, corto y sin abreviaturas que solo entienda quien la hizo.',
      ejemplo: '«Fecha», «FECHA» y «fecha_1» crean tres columnas donde debía haber una.',
      categoria: 'Las tres reglas'
    },
    {
      termino: 'Celda combinada',
      definicion: 'Aquella que une varias celdas en una. Se ve ordenada y rompe cualquier ordenamiento o filtro.',
      ejemplo: 'Es el arreglo visual que más caro se paga cuando la tabla crece.',
      categoria: 'Lo que hay que mirar'
    },
    {
      termino: 'Columna que clasifica',
      definicion: 'La que asigna una categoría a personas. No describe: decide quién entra en un filtro, quién sale en un informe y quién no se cuenta.',
      ejemplo: 'El arancel de 1795 lo hacía sin disimulo. Hoy suele hacerse sin decirlo.',
      categoria: 'Lo que hay que mirar'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes poner una tabla en forma?',
      instrucciones: 'Cinco preguntas sobre las tres reglas y lo que reparte una categoría. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Mezclas texto y números en la misma columna. ¿Qué ocurre al usar una fórmula?',
          opciones: [
            'Devuelve un resultado falso sin avisar de nada.',
            'Aparece un mensaje de error que detiene el cálculo.',
            'La hoja convierte automáticamente todo a texto plano.',
            ''
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí, y ese es el problema: un número equivocado parece tan correcto como uno bueno.',
          feedbackIncorrecto: 'Devuelve algo falso sin avisar. No hay mensaje de error que te proteja.'
        },
        {
          enunciado: 'La celda «compras» de una fila dice «leche, pan, mantequilla». ¿Qué regla se rompe?',
          opciones: [
            'La de encabezados cortos y consistentes en toda la hoja.',
            'La de no dejar celdas vacías sin ninguna explicación.',
            'La de que cada fila registre un solo caso.',
            'La de declarar el tipo de dato de cada columna.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Son tres filas disfrazadas de una, y por eso no se puede contar el pan.',
          feedbackIncorrecto: 'La de cada fila un caso. Una lista dentro de una celda impide contar y filtrar.'
        },
        {
          enunciado: '¿Qué era el arancel de gracias al sacar de 1795?',
          opciones: [
            'Un impuesto que pagaban quienes viajaban a las Indias.',
            'Una lista de gracias que se podían comprar, entre ellas la blancura.',
            'Un registro parroquial donde se anotaban los nacimientos.',
            'Una norma que prohibía los matrimonios entre castas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Que la blancura tuviera precio prueba que era una posición social, no un hecho natural.',
          feedbackIncorrecto: 'Una lista de gracias comprables, con la blancura entre ellas. Ann Twinam siguió esos expedientes.'
        },
        {
          enunciado: '¿Por qué una columna que clasifica personas no es una etiqueta neutral?',
          opciones: [
            'Porque suele contener errores de digitación difíciles de ver.',
            'Porque cambia con el tiempo y hay que actualizarla siempre.',
            'Porque ocupa más espacio que una columna numérica.',
            'Porque decide quién entra en un filtro y quién no se cuenta.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. En 1795 se veía sin disimulo; hoy pasa igual, solo que sin decirlo.',
          feedbackIncorrecto: 'Porque reparte: decide quién aparece en un informe y quién queda fuera del conteo.'
        },
        {
          enunciado: '¿Cuál es la prueba de que una tabla está bien estructurada?',
          opciones: [
            'Que un compañero la abra y entienda la estructura sin explicación.',
            'Que quepa completa en una sola pantalla del computador.',
            'Que use colores para distinguir los distintos bloques.',
            'Que tenga al menos veinte filas de datos recogidos.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Si tiene que preguntarte qué significa una columna, el problema no es de él.',
          feedbackIncorrecto: 'Que otra persona la entienda sola. El tamaño y los colores no dicen nada de la estructura.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De los cambios que hiciste, ¿cuál habría sido imposible dentro de un mes porque ya no recordarías qué significaba?',
    transferencia: 'Abre una tabla de datos abiertos y busca su columna de categoría. Pregúntate qué decide esa casilla sobre quien está en ella.',
    cierre: 'Una columna que clasifica personas no describe: reparte. En 1795 se veía; hoy hay que buscarlo.'
  },
  saberAncestral: {
    saber: 'En 1795 la Corona española publicó un arancel de gracias que se podían comprar. Entre las opciones estaba la blancura: un pardo o un quinterón podía pagar para que un papel oficial lo declarara blanco. Eso se llamó gracias al sacar, y la historiadora Ann Twinam siguió esos expedientes uno por uno. Que la blancura tuviera precio prueba dos cosas al tiempo. Que no era un hecho de la naturaleza, sino una posición social. Y que esa posición abría o cerraba puertas reales: estudiar, ordenarse sacerdote, ocupar un cargo, casarse con quien uno quisiera. En aquel sistema, la casilla que le tocaba a una persona indígena, africana o mestiza no era una etiqueta descriptiva. Era una lista de permisos. La cara de exclusión: conviene evitar la lectura amable de que «al final podían ascender». Ese rastro sigue vivo en quién parece de familia conocida y quién no.',
    fuente: 'Arancel de gracias al sacar (1795) · una categoría que era una lista de permisos',
    referencia: 'Twinam, A. (2015). Purchasing whiteness: Pardos, mulattos, and the quest for social mobility in the Spanish Indies. Stanford University Press.',
    preguntaPuente: 'En 1795 la casilla que le tocaba a alguien decidía si podía estudiar o casarse. En tu tabla, ¿qué decide la columna que clasifica?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Una casilla que era una lista de permisos',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Tres tablas bajo la lupa',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las tres reglas',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Limpia tu tabla',
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
      titulo: 'Tres tablas bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca una tabla profesional, una casera y la tuya de la sesión 1.',
        'Mira los encabezados y anota si son cortos y consistentes.',
        'Comprueba si cada columna guarda una sola clase de cosa.',
        'Busca celdas vacías y celdas combinadas.',
        'Marca cuál de las tres se entiende sin explicación.'
      ],
      cuaderno: {
        titulo: 'Tres tablas bajo la lupa',
        formato: 'tabla de 3 filas y 4 columnas (tabla / encabezados / columnas tipadas / vacías o combinadas)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Queda anotado qué regla rompe cada tabla.',
        'Está marcada la que se entiende sin explicación.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las tres reglas',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres reglas con una frase propia cada una.',
        'Tomen la peor de sus seis tablas y escriban qué hay que hacerle, paso por paso.',
        'Busquen en las tablas profesionales una columna que clasifique personas.',
        'Escriban en dos líneas qué reparte esa columna.'
      ],
      cuaderno: {
        titulo: 'Las tres reglas',
        formato: 'las tres reglas con frase propia, el plan de arreglo paso por paso y las dos líneas sobre la columna que clasifica',
        extension: 'media página'
      },
      criterios: [
        'El plan de arreglo tiene pasos, no intenciones.',
        'Está identificada una columna que clasifica personas.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Limpia tu tabla',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        '',
        'Revisa que cada columna guarde un solo tipo y decláralo en la hoja.',
        'Separa las celdas que contengan listas para que cada fila sea un caso.',
        'Elimina las celdas combinadas y resuelve los vacíos con un valor explícito.',
        'Anota cada cambio en la bitácora y pásale el archivo a un compañero.'
      ],
      cuaderno: {
        titulo: 'Limpia tu tabla',
        formato: 'los encabezados finales con su tipo, cinco filas copiadas a mano y la bitácora con un renglón por cambio',
        extension: 'media página'
      },
      criterios: [
        'Un compañero abrió el archivo y no preguntó nada.',
        'Ningún vacío quedó sin resolver ni sin marcar.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.5.3',
      lente: 'lente del nosotros',
      cita: 'La información por transmitirse deberá codificarse semántica, sintáctica y fonéticamente, para ser, desde la recepción, decodificada fonética, sintáctica y semánticamente como información recibida.',
      preguntaEspejo: '¿Qué encabezado mío entiendo solo yo, y qué pasaría si no estuviera para explicarlo?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 1 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Mientras la diferimos, la vida transcurre. Todo lo demás, Lucilio, nos es ajeno. Sólo el tiempo, objeto tan fugaz como esquivo, es nuestro.',
      preguntaEspejo: '¿Qué arreglo de mi tabla vengo aplazando, y cuánto va a costar cuando ya no me acuerde?'
    },
    floridi: {
      autor: 'Luciano Floridi · Hyperhistory and the Philosophy of Information Policies (2015)',
      lente: 'lente de la infoesfera',
      cita: 'Una cuarta revolución en nuestra autocomprensión —tras la copernicana, la darwiniana y la freudiana— que reinterpreta a los humanos como organismos informacionales que viven e interactúan con otros agentes informacionales en la infoesfera. (trad. propia)',
      preguntaEspejo: '¿En qué registro estoy yo clasificado, y qué decide sobre mí esa casilla?'
    }
  },
  cincoDimensiones: {
    personal: 'Tu tabla ya la puede usar alguien más, que es la diferencia entre un apunte y un dato.',
    emocional: 'Limpiar es tedioso y no luce. También es lo que evita que una tarde de trabajo se pierda por un vacío.',
    ciudadana: 'Cuando una columna clasifica personas, reparte algo. Conviene saberlo antes de diseñar la columna.',
    local: 'El sistema de castas fue una clasificación con efectos reales, y su rastro no se fue con la Colonia.',
    intergeneracional: 'Un registro bien hecho se puede leer dentro de veinte años. Uno mal hecho no lo entiende ni quien lo escribió.'
  }
};

export default contenido;
