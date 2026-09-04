/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/8/8-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 2,
  titulo: 'Tablas de verdad — cuándo una regla vale de verdad',
  resumen: 'Una tabla de verdad muestra qué pasa en todas las combinaciones de una regla y descubre los huecos que el texto esconde. Hoy tabulas reglas del colegio y una promoción real, como la Corte que dijo que una decisión vale solo con acuerdo y con debido proceso a la vez.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Las reglas que te aplican en el colegio, en un juego y en una promoción casi nunca están completas. Saber tabularlas te dice qué pasa en la fila que nadie aclaró, antes de que te toque a ti.',
    preguntaDetonante: 'En la regla para aprobar una materia, ¿qué pasa en la combinación que la regla no menciona?',
    activacion: {
      titulo: 'La promoción de los martes',
      descripcion: 'En 3 minutos, cuenta cuántas condiciones tiene esta promoción, «si compras dos, pagas en efectivo, es martes y traes el cupón, recibes el 10 %». ¿En cuántas combinaciones ganas?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 1 escribiste reglas con Y, O y NO en pseudocódigo.',
      siguiente: 'En la sesión 3 escribes algoritmos completos y los dibujas en diagramas de flujo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Tabla de verdad',
      definicion: 'Lista de todas las combinaciones posibles de una regla con el resultado de cada una.',
      ejemplo: 'Para «nota mayor o igual a 3 Y asistencia mayor o igual al 80 %», cuatro filas y una sola aprueba.',
      categoria: 'Las tablas'
    },
    {
      termino: 'Filas que se duplican',
      definicion: 'Cada condición nueva multiplica por dos las combinaciones. Dos condiciones, cuatro filas; tres, ocho; cuatro, dieciséis.',
      ejemplo: 'La promoción de cuatro condiciones tiene dieciséis filas y solo una gana.',
      categoria: 'Las tablas'
    },
    {
      termino: 'Hueco',
      definicion: 'Una fila para la que la regla no dice qué pasa.',
      ejemplo: 'La regla de reprobar no dice qué pasa con nota menor que 3 y pocas faltas.',
      categoria: 'Lo que revela'
    },
    {
      termino: 'Contradicción',
      definicion: 'Una regla que da falso en todas las filas. Nunca se cumple.',
      ejemplo: 'Edad mayor que 10 Y menor que 5.',
      categoria: 'Lo que revela'
    },
    {
      termino: 'Tautología',
      definicion: 'Una regla que da verdadero en todas las filas. No decide nada.',
      ejemplo: '«Llueve O no llueve» siempre es verdadero.',
      categoria: 'Lo que revela'
    },
    {
      termino: 'Tabular antes de creer',
      definicion: 'Hacerle la tabla a una promoción o a una norma antes de aceptarla, para ver en cuántas filas ganas.',
      ejemplo: 'Cuatro condiciones para un descuento, una sola fila que lo da.',
      categoria: 'Lo que revela'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer una tabla de verdad?',
      instrucciones: 'Cinco preguntas para verificar que dominas las tres tablas y detectas huecos y trampas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'En la tabla de Y, ¿en cuántas filas de cuatro el resultado es verdadero?',
          opciones: [
            'En tres filas, todas menos la de falso-falso.',
            'En una, solo verdadero-verdadero.',
            'En dos filas, las que tienen algún verdadero.',
            'En las cuatro filas, sin importar los valores.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Y exige las dos verdaderas. Una fila de cuatro.',
          feedbackIncorrecto: 'Y solo da verdadero cuando las dos condiciones lo son. Es una sola fila; tres verdaderas es la tabla de O.'
        },
        {
          enunciado: 'Una regla de permiso de salida tiene tres condiciones. ¿Cuántas filas tiene su tabla?',
          opciones: [
            'Tres filas, una por cada condición de la regla.',
            'Seis filas, tres condiciones por dos valores.',
            'Ocho, porque cada condición duplica las filas.',
            'Nueve filas, tres condiciones por tres casos.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Dos, cuatro, ocho. Cada condición nueva duplica las combinaciones.',
          feedbackIncorrecto: 'Cada condición puede ser verdadera o falsa y las combinaciones se duplican. Con tres condiciones son ocho filas.'
        },
        {
          enunciado: '«Para reprobar hay que tener menos de 3 y más de diez faltas». ¿Qué pasa con nota menor que 3 y tres faltas?',
          opciones: [
            'Reprueba, porque la nota es lo único que importa de verdad.',
            'Aprueba, porque cumple solo una de las dos condiciones.',
            'Reprueba, porque la regla en realidad funciona con O.',
            'La regla no lo dice, es un hueco que hay que preguntar.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. La regla solo describe la fila verdadero-verdadero. Las otras tres quedan sin respuesta hasta que alguien las aclare.',
          feedbackIncorrecto: 'La regla dice cuándo se reprueba, no qué pasa en las demás filas. Nota baja con pocas faltas es un hueco.'
        },
        {
          enunciado: '¿Cuál de estas reglas es una contradicción, falsa en todas las filas?',
          opciones: [
            'Llueve O no llueve.',
            'Llueve Y no llueve.',
            'NO llueve.',
            'Llueve O hace frío.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. No puede llover y no llover a la vez. Falso en todas las filas. «Llueve O no llueve» es lo contrario, verdadero siempre.',
          feedbackIncorrecto: '«Llueve O no llueve» siempre es verdadero, es una tautología. La contradicción es «llueve Y no llueve», falsa en toda fila.'
        },
        {
          enunciado: 'Una promoción exige cuatro condiciones a la vez para dar un descuento. ¿Qué muestra la tabla?',
          opciones: [
            'Que hay dieciséis combinaciones y solo una gana el descuento.',
            'Que hay cuatro combinaciones y todas ganan el descuento completo.',
            'Que la promoción es falsa y no se puede ganar nunca de ningún modo.',
            'Que con cumplir dos condiciones ya se gana la mitad del descuento.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Cuatro condiciones con Y son dieciséis filas y una sola verdadera. La tabla muestra lo que el anuncio esconde.',
          feedbackIncorrecto: 'Sí se puede ganar, pero en una sola fila de dieciséis. Ni la mitad ni todas. Por eso se tabula antes de creer.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué regla del colegio te resultó incompleta al tabularla, y qué fila falta?',
    transferencia: 'La próxima vez que veas una promoción con varias condiciones, cuenta las filas y encuentra la única que gana.',
    cierre: 'Acuerdo Y proceso, las dos a la vez. Una tabla de verdad es la forma más honesta de saber cuándo una regla vale.'
  },
  saberAncestral: {
    saber: 'En el norte del Cauca, los cabildos nasa juzgan a sus comuneros en asamblea, delante de todos, para «devolver la armonía» a la comunidad. En 1997 un comunero de Jambaló, sancionado por la asamblea, acudió a la Corte Constitucional. La Corte dijo dos cosas a la vez (Corte Constitucional, 1997). Primera: los pueblos indígenas tienen derecho a juzgar según sus propias normas, como manda la Constitución. Segunda: ni siquiera un acuerdo de toda la comunidad puede saltarse el debido proceso; hay límites que no se negocian. Mira la forma de esa decisión. Una regla vale si la comunidad la acordó y si respetó el debido proceso. Las dos a la vez. Si falta una, la decisión no vale. Eso es una tabla de verdad: cuatro combinaciones y una sola donde la regla se cumple. La cara de exclusión: la sanción de aquel caso sigue en debate, y la Corte la admitió con límites; aquí no se toma como modelo sino como el punto exacto donde un acuerdo colectivo choca con los derechos de una persona. Hoy vas a construir tablas para saber cuándo una regla vale de verdad y cuándo tiene un hueco.',
    fuente: 'Cabildos nasa del norte del Cauca · la asamblea que juzga y la Sentencia T-523 de 1997',
    referencia: 'Corte Constitucional de Colombia. (1997, 15 de octubre). Sentencia T-523 de 1997 (M. P. Carlos Gaviria Díaz).',
    preguntaPuente: 'La Corte dijo que una decisión vale si la comunidad la acordó y si respetó el debido proceso: las dos, no una. En la regla de tu colegio para aprobar una materia, ¿cuántas condiciones hay? ¿Y qué pasa en la combinación que la regla no menciona?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La asamblea que juzga y sus límites',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · La regla del colegio, fila por fila',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · Tres situaciones en tablas',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Una regla del mundo, tabulada',
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
      titulo: 'La regla del colegio, fila por fila',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma una regla real de tu colegio con dos condiciones, por ejemplo la de reprobar el periodo.',
        'Dibuja una tabla de cuatro filas, verdadero-verdadero, verdadero-falso, falso-verdadero, falso-falso.',
        'En cada fila escribe qué dice la regla, reprobado o aprobado.',
        'Marca la fila donde la regla no aclara qué pasa, si la hay.',
        'Escribe en una línea qué le preguntarías a tu docente sobre esa fila.'
      ],
      cuaderno: {
        titulo: 'La regla del colegio, fila por fila',
        formato: 'la regla, la tabla de 4 filas y 3 columnas (condición 1 / condición 2 / qué dice la regla) y la pregunta',
        extension: 'media página'
      },
      criterios: [
        'Las cuatro filas tienen resultado o marca.',
        'Tu pregunta nombra una fila concreta.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Tres situaciones del colegio en tablas',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres tablas universales de Y, O y NO, completas.',
        'Modelen la aprobación de una materia, nota mayor o igual a 3 Y asistencia mayor o igual al 80 %. Cuatro filas.',
        'Modelen el permiso de salida temprana, (autorización del acudiente O cita médica) Y firma de coordinación. Ocho filas.',
        'Modelen el descuento de la tienda escolar con una regla propia de tres condiciones.',
        'Pongan nombre a las columnas, «nota», «asistencia», no «A» y «B».'
      ],
      cuaderno: {
        titulo: 'Tres situaciones en tablas',
        formato: 'las tres tablas universales y las tres tablas del colegio, con columnas nombradas',
        extension: 'una página'
      },
      criterios: [
        'Las seis tablas tienen todas sus filas con resultado.',
        'Ninguna columna se llama «A» o «B».'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Una regla del mundo, tabulada',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Elige una regla real con varias condiciones, una promoción, la regla de un juego o una norma del colegio.',
        'Escribe sus condiciones y hazle la tabla.',
        'Busca la fila con hueco, la contradicción o la combinación que el anunciante esconde.',
        'Escribe un párrafo de cinco líneas con lo que encontraste.',
        'Revisa las tres tablas del colegio de tu pareja fila por fila y marca cualquier fila sin resultado.'
      ],
      cuaderno: {
        titulo: 'Una regla del mundo, tabulada',
        formato: 'la regla, su tabla, el párrafo de cinco líneas y la lista de filas sin resultado que encontraste en las tablas de tu pareja',
        extension: 'una página'
      },
      criterios: [
        'Tu párrafo nombra una fila concreta de la tabla.',
        'Revisaste las tres tablas ajenas fila por fila.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.2.2',
      lente: 'lente del nosotros',
      cita: 'Una persona no es una cosa más entre las cosas de un sistema. Cuando la reducimos a una fila, algo de ella queda por fuera.',
      preguntaEspejo: '¿Qué fila de mis tablas de hoy decide algo sobre una persona real?'
    },
    estoico: {
      autor: 'Séneca · Sobre la ira, II, 29 (c. 45 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'No hay que apresurarse a creer lo que nos cuentan: muchos mienten para engañar y otros porque los engañaron.',
      preguntaEspejo: '¿Qué regla creí esta semana sin hacerle la tabla?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Ganan quienes saben preguntar y responder, y por eso saben qué datos buscar.',
      preguntaEspejo: '¿Cuál fila de mi tabla no me atreví a preguntar porque parecía obvia?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a preguntar «¿y en esta fila qué pasa?». Es una pregunta que te va a servir con cada regla que te apliquen.',
    emocional: 'Descubrir que una promoción casi nunca se gana molesta. Tabularla antes de creerla evita la molestia de después.',
    ciudadana: 'La Corte dijo que un acuerdo de toda una comunidad tiene límites frente a una persona. Saber leer una regla fila por fila es saber dónde están los límites.',
    local: 'Los cabildos nasa juzgan en asamblea y la Constitución lo reconoce; el debido proceso es la otra condición. Tus tablas de hoy tienen esa misma forma, acuerdo Y proceso.',
    intergeneracional: 'Una regla tabulada y sin huecos la puede aplicar quien venga después sin preguntar. Así se hereda una norma justa.'
  }
};

export default contenido;
