/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/9/9-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 5,
  titulo: 'Revolución industrial — máquinas que cambiaron el trabajo',
  resumen: 'En la finca cafetera los oficios venían asignados: la recolección y la escogida eran de mujeres y niños. Cien años después, el DANE de 2022 muestra que la brecha de propiedad rural sigue y que hay más mujeres con título que mujeres decidiendo. Hoy mapeas los oficios que la máquina quitó y puso en tu región, y dices a quién le sirvió cada cambio.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Revoluciones del trabajo',
  preLectura: {
    porQueImporta: 'Cuando un cambio técnico se cuenta sin nombres, parece que no lo decidió nadie. Y siempre lo decidió alguien, casi nunca quien perdió el trabajo.',
    preguntaDetonante: '¿Qué oficio conocías de niño que ya casi no ves, y qué fue de la gente que vivía de él?',
    activacion: {
      titulo: 'El oficio que ya no está',
      descripcion: 'En 3 minutos, escribe el nombre de un oficio que veías de pequeño y hoy casi no existe. Al lado, escribe qué máquina o servicio ocupó su lugar.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 4 armaste la línea del tiempo de la técnica, del fuego a la imprenta.',
      siguiente: 'En la sesión 6 trabajas la imprenta y diseñas tu propia hoja informativa.'
    }
  },
  conceptosClave: [
    {
      termino: 'Oficio sustituido',
      definicion: 'Aquel cuyo trabajo pasó a hacer una máquina, hasta que el oficio dejó de existir como tal.',
      ejemplo: 'El telegrafista de la oficina del pueblo, cuando llegaron el teléfono y después el correo electrónico.',
      categoria: 'Los cuatro estados'
    },
    {
      termino: 'Oficio intacto',
      definicion: 'El que la máquina no tocó, casi siempre porque automatizarlo no le salía a cuenta a nadie.',
      ejemplo: 'Muchos oficios de cuidado siguen igual, y eso dice más del costo que de la dificultad técnica.',
      categoria: 'Los cuatro estados'
    },
    {
      termino: 'Quién gana y quién pierde',
      definicion: 'Quien gana tiempo, quien gana dinero y quien pierde el trabajo casi nunca son la misma persona.',
      ejemplo: 'La trilladora ahorró jornales al dueño y dejó sin trabajo a las escogedoras. Dos personas distintas.',
      categoria: 'El reparto'
    },
    {
      termino: 'Oficio asignado',
      definicion: 'Tarea repartida por costumbre y no por decisión explícita, hasta que deja de parecer una decisión.',
      ejemplo: 'Que la recolección y la escogida fueran «de mujeres y niños» no lo decidió el café.',
      categoria: 'El reparto'
    },
    {
      termino: 'Tener título no es decidir',
      definicion: 'Aparecer como dueño de un predio y tomar las decisiones productivas sobre él son dos cosas distintas.',
      ejemplo: 'El DANE de 2022 muestra más mujeres con predio a su nombre que mujeres decidiendo qué se hace en él.',
      categoria: 'El reparto'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer un cambio técnico en el trabajo?',
      instrucciones: 'Cinco preguntas sobre los cuatro estados y el reparto. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Un oficio sigue existiendo pero cambió por completo por dentro. ¿En qué estado está?',
          opciones: [
            'Transformado.',
            'Sustituido, porque ya no es el mismo trabajo de antes.',
            'Intacto, porque el nombre del oficio no cambió.',
            'Creado, porque en la práctica es un oficio nuevo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sigue existiendo y cambió de contenido: eso es transformado, no sustituido.',
          feedbackIncorrecto: 'Está transformado. Sustituido sería que desapareciera; intacto, que no lo tocara la máquina.'
        },
        {
          enunciado: '¿Por qué no sirve decir que «el progreso» quitó un oficio?',
          opciones: [
            'Porque el progreso técnico en realidad nunca quita oficios, solo los cambia.',
            'Porque suena anticuado y conviene usar un término más moderno.',
            'Porque el progreso no decide: deciden personas e instituciones con nombre.',
            'Porque el progreso es un concepto que solo aplica a la economía.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Sin nombrar a alguien, el reparto no se puede discutir.',
          feedbackIncorrecto: 'Porque el progreso no decide nada. Deciden empresas, dueños y gobiernos con nombre propio.'
        },
        {
          enunciado: '¿Qué muestra el dato del DANE de 2022 sobre la propiedad rural?',
          opciones: [
            'Que en la mayoría de departamentos ya se alcanzó la paridad.',
            'Que en predios de un solo dueño hay 63,7 % de hombres y 36,3 % de mujeres.',
            'Que la brecha desapareció en las zonas cafeteras del país.',
            'Que las mujeres son hoy mayoría entre los propietarios rurales.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es, y en ningún departamento del país hay paridad.',
          feedbackIncorrecto: 'Que la brecha sigue: 63,7 % hombres y 36,3 % mujeres, sin paridad en ningún departamento.'
        },
        {
          enunciado: '¿Qué quiere decir que tener el título no equivale a decidir?',
          opciones: [
            'Que los títulos de propiedad rural suelen estar mal registrados.',
            'Que hace falta un título profesional además del predio.',
            'Que el título se pierde si no se trabaja la tierra.',
            'Que aparecer como dueña y tomar las decisiones productivas son cosas distintas.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Confundirlas es una forma cómoda de no ver la desigualdad.',
          feedbackIncorrecto: 'Que ser dueña en el papel y decidir qué se hace en el predio no son lo mismo.'
        },
        {
          enunciado: '¿Por qué conviene fijarse también en los oficios intactos?',
          opciones: [
            'Porque dicen qué no le convino automatizar a nadie.',
            'Porque son los oficios que más dinero producen hoy.',
            'Porque suelen ser los más antiguos de una región.',
            'Porque son los únicos que no tienen relación con máquinas.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Que algo no se automatice suele ser una cuestión de costo, no de dificultad.',
          feedbackIncorrecto: 'Porque muestran qué no salía a cuenta automatizar, que es un dato sobre el dinero y no sobre la técnica.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De los tres oficios que la máquina creó en tu mapa, ¿alguno lo ocupa hoy la gente que perdió el oficio sustituido?',
    transferencia: 'Pregúntale a la persona que entrevistaste si el oficio nuevo paga mejor que el que desapareció. La respuesta suele sorprender.',
    cierre: 'La revolución industrial no fue solo carbón y vapor. Fue un reparto nuevo de quién hace qué, y alguien lo decidió.'
  },
  saberAncestral: {
    saber: 'En la finca cafetera del siglo XX los oficios venían asignados. Un informe consular británico de comienzos de siglo dice que la recolección «la llevan a cabo mujeres y niños». Ellas eran además escogedoras en la trilladora, cocineras de los trabajadores, encargadas de los animales, de la huerta y del pancoger (Ramírez Bacca, 2015). A la recolectora la llamaron chapolera, por la chapola, el arbolito de café recién nacido. Cien años después la desigualdad no es pasado. El DANE (2022) muestra que en los predios rurales de un solo dueño el 63,7 % son hombres y el 36,3 % mujeres. En ningún departamento del país hay paridad. Y hay un dato que incomoda más: hay más mujeres con título que mujeres tomando las decisiones productivas. La cara de exclusión es el ancla misma. Hoy la chapolera circula como disfraz folclórico para turistas, y ese disfraz tapa que el reparto de oficios fue una decisión, no una costumbre.',
    fuente: 'Caficultura tradicional colombiana · los oficios que venían asignados y la brecha que sigue',
    referencia: 'Ramírez Bacca, R. (2015). Mujeres en la caficultura tradicional colombiana, 1910--1970. Historia y Memoria, (10), 43--73. https://doi.org/10.19053/20275137.3200',
    preguntaPuente: 'En la finca cafetera los oficios venían asignados y nadie los había escogido. ¿Qué oficio de tu casa está asignado hoy sin que nadie lo haya decidido en voz alta?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Los oficios que venían asignados',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Un oficio que ya no existe',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro estados de un oficio',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Mapa de oficios ganados y perdidos',
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
      titulo: 'Un oficio que ya no existe',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Habla con alguien de tu familia mayor de cuarenta años.',
        'Pregúntale qué oficio había en su juventud que hoy ya no existe.',
        'Pregúntale qué oficio existe hoy que no existía entonces.',
        'Anota el nombre exacto de cada oficio, el año aproximado y el lugar.',
        'Pregúntale qué le pasó a la gente que vivía del oficio que desapareció.'
      ],
      cuaderno: {
        titulo: 'Un oficio que ya no existe',
        formato: 'ficha con quien te contó, el oficio desaparecido con año y lugar, el oficio nuevo y qué pasó con la gente',
        extension: 'un tercio de página'
      },
      criterios: [
        'Los dos oficios tienen nombre propio, no categoría.',
        'Cada uno tiene año aproximado y lugar.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro estados de un oficio',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro estados con una frase propia cada uno.',
        'Clasifiquen en ellos los oficios que trajeron de sus entrevistas.',
        'Elijan uno y escriban quién ganó tiempo, quién ganó dinero y quién perdió el trabajo.',
        'Comprueben si las tres respuestas son la misma persona y escriban qué significa que no lo sean.'
      ],
      cuaderno: {
        titulo: 'Los cuatro estados de un oficio',
        formato: 'los cuatro estados con frase propia, los oficios clasificados y el reparto de uno en tres renglones',
        extension: 'media página'
      },
      criterios: [
        'Los cuatro estados están definidos con palabras propias.',
        'El reparto dice si las tres respuestas son la misma persona.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Mapa de oficios ganados y perdidos',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Dibuja una línea de tiempo de tu región, del siglo XX a hoy.',
        'Pon tres oficios que la máquina sustituyó, con nombre, año y lugar.',
        'Pon tres oficios que la máquina creó, con los mismos datos.',
        'Cierra con un cuadro que diga, para dos de ellos, a quién le sirvió el cambio y a quién no.',
        'Muéstraselo a un compañero sin explicarle nada y anota qué no se entendió.'
      ],
      cuaderno: {
        titulo: 'Mapa de oficios ganados y perdidos',
        formato: 'la línea de tiempo con los seis oficios rotulados y el cuadro del reparto de dos de ellos',
        extension: 'media página'
      },
      criterios: [
        'El cuadro del reparto nombra a alguien concreto, no a «el progreso».',
        'Un compañero leyó el mapa sin explicación oral.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.5.6.3',
      lente: 'lente del nosotros',
      cita: 'La máquina, el robot, el «rostro material» del capital ha hecho del «rostro del hombre» un instrumento de sí mismo.',
      preguntaEspejo: '¿En qué parte de mi día me estoy adaptando yo a una máquina, en vez de al revés?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 5 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'No son las cosas las que atormentan a los hombres, sino las opiniones que se tienen de ellas.',
      preguntaEspejo: '¿Qué reparto de tareas doy por natural en mi casa sin que nadie lo haya decidido en voz alta?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.2',
      lente: 'lente de la infoesfera',
      cita: 'Nuestro yo es a la vez libre y social: la libertad no ocurre en el vacío, sino en un espacio de posibilidades y de límites. (trad. propia)',
      preguntaEspejo: '¿Qué opciones de trabajo tengo de verdad hoy, y quién definió esa lista?'
    }
  },
  cincoDimensiones: {
    personal: 'Le preguntaste a alguien de tu familia por su trabajo, y eso casi nunca se hace.',
    emocional: 'Perder un oficio no es una estadística para quien lo vivió. Escuchar eso antes de mapearlo cambia el mapa.',
    ciudadana: 'Decir «el progreso» esconde a quien decidió. Nombrar a alguien es lo que permite discutir el reparto.',
    local: 'Los seis oficios de tu mapa pasaron a menos de una hora de tu casa, y casi ninguno está escrito en ningún lado.',
    intergeneracional: 'La chapolera existió antes de ser un disfraz para turistas. Tu mapa la devuelve a su trabajo real.'
  }
};

export default contenido;
