/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 10
 * (sesión global 30).
 *
 * Auto-generado desde content/guias/9/9-3-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 10,
  titulo: 'Cosecha P3 — sustentación del mini-estudio',
  resumen: 'Cierre del año: una presentación de diez minutos que integra pregunta, datos, análisis, gráficos, tres hallazgos y una decisión propuesta, defendida ante el grupo.',
  duracionMin: 90,
  subtema: 'Datos · Rendición de cuentas',
  preLectura: {
    porQueImporta: 'Sin sustentación, el aprendizaje queda en privado. Defender públicamente una decisión con datos es una capacidad profesional y ciudadana, y esta es la última sesión del año para entrenarla.',
    preguntaDetonante: 'Si tuvieras diez minutos ante alguien que no vio nada de tu proceso, ¿cómo le contarías tu estudio para que entienda tu decisión?',
    activacion: {
      titulo: 'Relato del año productivo',
      descripcion: 'En 3 minutos, cuéntale en voz alta a tu compañero qué cosechaste este periodo: una pregunta, un dato y una decisión. Sin diapositivas, solo voz.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 9 produjiste el reporte con tus tres hallazgos.',
      siguiente: 'El año cierra aquí, pero el ciclo sigue: cada vez que aparezca una pregunta cotidiana, vuelve a recorrerlo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Inventario de cosecha',
      definicion: 'La lista de todo lo producido en el periodo, con la decisión de qué entra y qué se descarta.',
      ejemplo: 'La tabla sucia original entra si muestra el trabajo de limpieza; si no, se descarta.',
      categoria: 'Preparar la sustentación'
    },
    {
      termino: 'Una idea por diapositiva',
      definicion: 'Cada diapositiva sostiene una sola idea con pocas palabras. La diapositiva apoya tu voz, no la reemplaza.',
      ejemplo: 'Una diapositiva con tres hallazgos se convierte en tres diapositivas, una por hallazgo.',
      categoria: 'Preparar la sustentación'
    },
    {
      termino: 'Las tres preguntas duras',
      definicion: 'Las objeciones que alguien atento haría, escritas y respondidas antes de exponer.',
      ejemplo: '«¿Por qué tu decisión y no la contraria?» conviene tenerla contestada antes, no en el momento.',
      categoria: 'Preparar la sustentación'
    },
    {
      termino: 'Limitaciones declaradas',
      definicion: 'Los límites del estudio dichos por ti y en su propia diapositiva. Quien escucha los va a ver de todos modos.',
      ejemplo: '«La muestra son 40 respuestas de un solo curso, así que no habla del colegio entero.»',
      categoria: 'Sostener lo que se dice'
    },
    {
      termino: 'Decir que no se sabe',
      definicion: 'Reconocer en voz alta lo que el estudio no alcanzó a mirar, en vez de rellenar con algo plausible.',
      ejemplo: '«Eso no lo miré; sería una buena manera de extender el estudio el año entrante.»',
      categoria: 'Sostener lo que se dice'
    },
    {
      termino: 'Cierre con decisión',
      definicion: 'La última diapositiva propone qué hacer, quién lo hace y para cuándo. No es un agradecimiento.',
      ejemplo: '«Propongo mover el refuerzo al martes; lo coordina el representante de curso antes de mayo.»',
      categoria: 'Sostener lo que se dice'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica la sustentación',
      instrucciones: '5 preguntas para confirmar que puedes cerrar el año rindiendo cuentas de tu estudio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué declarar las limitaciones del estudio en vez de dejarlas de lado?',
          opciones: [
            'Porque es una convención académica que se exige en todos los trabajos escritos',
            'Porque quien escucha las va a notar igual, y decirlas primero es lo que da credibilidad',
            'Porque una diapositiva más ayuda a llenar el tiempo mínimo que exige la sustentación',
            'Porque así el docente sabe qué partes del trabajo no hace falta que revise a fondo'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Un estudio que oculta sus límites se parece a un discurso que se sostiene por lo que calla.',
          feedbackIncorrecto: 'No es una convención ni un relleno. Quien escucha ve los huecos, y quien los nombra primero conserva la credibilidad.'
        },
        {
          enunciado: '¿Qué quiere decir que una diapositiva lleve una sola idea?',
          opciones: [
            'Que solo puede contener una imagen, sin ningún texto que la acompañe encima',
            'Que se debe usar el mismo tipo de gráfico en todas las diapositivas del cierre',
            'Que si sostiene tres ideas conviene partirla en tres, y que apoya tu voz sin reemplazarla',
            'Que cada diapositiva debe durar exactamente el mismo tiempo que todas las demás'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Quien lee la diapositiva en voz alta ya perdió a la audiencia: el texto está para apoyar, no para sustituir.',
          feedbackIncorrecto: 'No se trata de prohibir el texto ni de igualar tiempos. Una diapositiva con tres ideas se parte en tres.'
        },
        {
          enunciado: 'En las preguntas del grupo aparece una que tu estudio no cubrió. ¿Qué respondes?',
          opciones: [
            'Que eso no lo miraste, y que sería una buena manera de extender el estudio',
            'Una respuesta plausible construida con lo que sí sabes, para no dejar el vacío',
            'Que la pregunta se sale del alcance que el docente había fijado para el trabajo',
            'Una disculpa larga por no haber previsto esa parte durante la investigación'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Reconocer el límite es más sólido que cualquier rodeo bien armado, y además abre el trabajo siguiente.',
          feedbackIncorrecto: 'Rellenar con algo plausible es lo que arruina la credibilidad de todo lo demás que dijiste.'
        },
        {
          enunciado: '¿Con qué debe cerrar tu sustentación?',
          opciones: [
            'Con un agradecimiento a quienes escucharon durante los diez minutos de exposición',
            'Con el gráfico más logrado del estudio, para que quede esa imagen en la memoria',
            'Con un resumen de los pasos técnicos que seguiste a lo largo de todo el periodo',
            'Con la decisión propuesta, diciendo qué se hace, quién lo hace y para cuándo'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. El estudio existe para llegar a una decisión. Si el cierre no la nombra, el trabajo queda sin destino.',
          feedbackIncorrecto: 'Ni el agradecimiento ni el resumen cierran nada. Lo que cierra es la decisión con responsable y plazo.'
        },
        {
          enunciado: 'Entre los misak, las decisiones grandes se llevan al Nu Nakchak y quedan por escrito con fecha. ¿Qué aplica a tu sustentación?',
          opciones: [
            'Que toda conclusión de datos debería quedar registrada en un documento con valor legal',
            'Que las decisiones colectivas siempre resultan más acertadas que las decisiones de una persona',
            'Que una decisión sostenida ante otros y por escrito pesa distinto que una opinión suelta',
            'Que conviene presentar el estudio ante la mayor cantidad posible de personas a la vez'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Lo que cambia no es el número de personas: es que la decisión se sostiene delante de otros y queda escrita.',
          feedbackIncorrecto: 'No se trata de valor legal ni de cantidad de público. Se trata de sostener una decisión ante otros y dejarla escrita.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué estoy dejando fuera de mi sustentación porque no me conviene decirlo?',
    transferencia: 'Conserva la presentación, la bitácora y los tres hallazgos. Cuando aparezca una pregunta cotidiana que merezca un dato, repite el ciclo completo: recoge, limpia, analiza, grafica, escribe el hallazgo y decide.',
    cierre: 'Al terminar podrás: (1) analizar qué piezas de tu trabajo del periodo entran en la sustentación y cuáles se descartan; (2) evaluar tu propio estudio antes de exponerlo, anticipando las preguntas duras que puede recibir; (3) crear y defender una presentación de seis a ocho diaposi…'
  },
  saberAncestral: {
    saber: 'En el pueblo misak, en Guambía (Silvia, Cauca), las decisiones grandes no las toma una sola persona. Se llevan al Nu Nakchak, el espacio de las autoridades junto con los shures y las shuras. Ese modo de decidir dejó documentos con fecha. El Mandato de Vida y Permanencia Misak Misak, en Piendamó, 2005. Y la Misak Ley, proclamada el 12 de agosto de 2007. Lo que quedó escrito ahí no es una opinión del momento. Es una decisión sostenida, con testigos y con años encima. La cara de exclusión es que ese «no» colectivo se sostiene frente a normas externas. Y se sostiene a costa de conflicto con el Estado y con terratenientes. No es un recurso retórico: es una disputa territorial viva.',
    fuente: 'Pueblo misak de Guambía · las decisiones llevadas al Nu Nakchak y puestas por escrito',
    referencia: 'Pueblo Misak. (2007, 12 de agosto). Misak Ley. I Encuentro por la defensa de nuestro Derecho Mayor.',
    preguntaPuente: '¿Qué diferencia hay entre decir que no y sostener un no por escrito, con fecha y con testigos? ¿Y qué le falta a una conclusión de datos que nadie tuvo que defender delante de nadie?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las decisiones que quedan por escrito',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Inventario de cosecha',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las tres preguntas duras',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Sustenta el mini-estudio',
      duracionMin: 40
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Inventario de cosecha',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Pon sobre la mesa todo lo que produjiste en el periodo.',
        'Decide para cada pieza si entra en la sustentación o se queda fuera.',
        'Ten presente que diez minutos admiten ocho piezas como máximo.',
        'Marca las que entran y las que quedan fuera.',
        'Escribe la razón de cada descarte y distingue las decorativas de las que descartas por cariño.'
      ],
      cuaderno: {
        titulo: 'Inventario de cosecha',
        formato: 'tabla de tres columnas (pieza producida / entra o no entra / por qué), una fila por pieza',
        extension: 'un tercio de página'
      },
      criterios: [
        'Cada inclusión y cada descarte tienen su razón escrita.',
        'Las piezas que entran no pasan de ocho.'
      ]
    },
    {
      numero: 2,
      verbo: 'EVALÚA',
      titulo: 'Las tres preguntas duras',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban la anatomía de la sustentación con el tiempo de cada momento.',
        'Cada uno le presenta al otro su estudio en dos minutos.',
        'Quien escucha escribe las tres preguntas más duras que se le ocurran.',
        'Cada uno prepara su respuesta a las tres en una o dos frases.',
        'Marca en cuál de las tres la respuesta honesta es que no lo miraste.'
      ],
      cuaderno: {
        titulo: 'Las tres preguntas duras',
        formato: 'la anatomía con sus tiempos, las tres preguntas recibidas y la respuesta a cada una',
        extension: 'media página'
      },
      criterios: [
        'Las tres preguntas vienen de tu pareja, no las escribiste tú.',
        'Está marcada la pregunta cuya respuesta honesta es que no la miraste.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Sustenta el mini-estudio',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Produce las seis a ocho diapositivas siguiendo la anatomía.',
        'Declara las limitaciones del estudio en una diapositiva propia.',
        'Ensaya una vez en voz alta con cronómetro.',
        'Sustenta ante el grupo y responde al menos dos preguntas con honestidad.',
        'Anota la retroalimentación y un ajuste que harías si volvieras a sustentar.'
      ],
      cuaderno: {
        titulo: 'Sustentación del periodo 3',
        formato: 'el índice de diapositivas, las preguntas anticipadas, la retroalimentación recibida y el ajuste',
        extension: 'media página'
      },
      criterios: [
        'Las limitaciones aparecen en una diapositiva propia, no al final y en pequeño.',
        'El cierre es la decisión propuesta, no un agradecimiento.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.4.4',
      lente: 'lente del nosotros',
      cita: 'Hay lengua cotidiana (la de todos los días), lengua de culturas ilustradas, de cultura de masas, lengua de cultura popular… lengua política (que se comprende no por lo que dice sino por lo que calla, contra quién lo dice, cuándo y por qué…).',
      preguntaEspejo: '¿Qué estoy dejando fuera de mi sustentación porque no me conviene decirlo?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones X, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'De hoy más, déjate absolutamente de disputar cuál conviene que sea un hombre bueno, sino procura ser tal en realidad.',
      preguntaEspejo: '¿Dediqué más tiempo a decir qué es un buen análisis que a mostrar el mío?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Una de las preguntas políticas apremiantes que enfrentamos en las sociedades de la información avanzadas es: ¿en qué clase de proyecto humano estamos trabajando? (trad. propia)',
      preguntaEspejo: 'Todo lo que aprendí este año a hacer con datos, ¿al servicio de qué lo quiero poner?'
    }
  },
  cincoDimensiones: {
    personal: 'Te llevas la capacidad de defender en público una decisión apoyada en datos. Sirve para un presupuesto, un proyecto o una propuesta.',
    emocional: 'Resististe la tentación del lucimiento. Sustentar con las limitaciones a la vista exige una humildad que se entrena.',
    ciudadana: 'Rendir cuentas con datos es una virtud de la vida en común. Lo que practicaste aquí es lo que hace falta en el debate público.',
    local: 'En el Nu Nakchak las decisiones se llevan a un espacio común y quedan por escrito con fecha. Tu sustentación hace algo parecido a otra escala.',
    intergeneracional: 'Una decisión sostenida con testigos y con años encima pesa distinto que una opinión del momento. Esa diferencia se aprende viéndola.'
  }
};

export default contenido;
