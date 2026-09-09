/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 6
 * (sesión global 26).
 *
 * Auto-generado desde content/guias/9/9-3-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 6,
  titulo: 'Gráficos — la imagen de los datos',
  resumen: 'Un gráfico convierte la tabla en imagen para que el ojo lea de un vistazo. Aprendes los tres tipos básicos y a justificar por qué elegiste cada uno.',
  duracionMin: 90,
  subtema: 'Datos · La imagen como argumento',
  preLectura: {
    porQueImporta: 'Casi toda noticia económica, política o de salud llega al ciudadano en forma de gráfico. Saber elegir el tipo correcto y detectar las trampas visuales es alfabetización básica.',
    preguntaDetonante: 'Si dos gráficos muestran los mismos datos pero uno tiene el eje Y cortado, ¿qué pasa con la conclusión del lector?',
    activacion: {
      titulo: 'Tres gráficos, una sola tabla',
      descripcion: 'En 3 minutos, el docente muestra tres gráficos de los mismos datos: uno honesto, uno con el eje cortado y uno circular con doce porciones. Los estudiantes anotan qué entendieron antes de ver la tabla.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 5 agrupaste y comparaste con una tabla dinámica.',
      siguiente: 'En la sesión 7 vas a comunicar conclusiones con narrativa de datos: el gráfico como argumento y no como decoración.'
    }
  },
  conceptosClave: [
    {
      termino: 'Gráfico de barras',
      definicion: 'Compara categorías que no son tiempo. Las categorías van en el eje X y el valor en el eje Y.',
      ejemplo: 'Las horas asignadas a cada área del plan de estudios se comparan bien con barras.',
      categoria: 'Los tres tipos básicos'
    },
    {
      termino: 'Gráfico de líneas',
      definicion: 'Muestra evolución en el tiempo. El eje X lleva fechas o periodos ordenados.',
      ejemplo: 'El promedio de notas mes a mes durante el periodo se ve mejor con una línea.',
      categoria: 'Los tres tipos básicos'
    },
    {
      termino: 'Gráfico circular',
      definicion: 'Muestra participación sobre un total. Funciona con tres a cinco porciones y se vuelve ilegible pasadas siete.',
      ejemplo: 'El reparto del gasto entre transporte, alimentación, útiles y ahorro cabe en un circular.',
      categoria: 'Los tres tipos básicos'
    },
    {
      termino: 'Eje Y en cero',
      definicion: 'Regla básica de barras y líneas. Cortar el eje exagera diferencias y manipula la lectura.',
      ejemplo: 'Si el rango va de 95 a 99 y el eje arranca en 90, una caída pequeña parece un derrumbe.',
      categoria: 'Reglas que evitan engaños'
    },
    {
      termino: 'Título descriptivo',
      definicion: 'Dice qué muestra el gráfico y no qué tipo de gráfico es. Es lo único que viaja con la imagen.',
      ejemplo: '«Notas promedio por curso en el periodo 3» dice algo; «Gráfico 2» no dice nada.',
      categoria: 'Reglas que evitan engaños'
    },
    {
      termino: 'Justificación por tipo',
      definicion: 'Una o dos frases que digan por qué ese tipo y no otro. Sin ellas el gráfico es decoración.',
      ejemplo: 'Elegí líneas porque comparo cómo evoluciona mes a mes, y barras sueltas no mostrarían la tendencia.',
      categoria: 'Reglas que evitan engaños'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica gráficos',
      instrucciones: '5 preguntas para confirmar que eliges y lees gráficos con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Quieres mostrar cómo cambió el promedio de notas mes a mes durante el periodo. ¿Qué tipo de gráfico eliges?',
          opciones: [
            'Un circular, porque cada mes es una porción del periodo completo que estás evaluando',
            'Una línea, porque el eje X lleva periodos ordenados y la pendiente muestra la tendencia',
            'Barras, porque cada mes es una categoría distinta y así se comparan entre ellas',
            'Cualquiera de los tres, porque los datos son los mismos y la conclusión no cambia'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Hay tiempo ordenado, así que hay evolución, y la evolución se lee en la pendiente de una línea.',
          feedbackIncorrecto: 'Cuando el eje X es tiempo ordenado, el tipo que responde es la línea. Las barras comparan, pero no muestran tendencia.'
        },
        {
          enunciado: 'Un gráfico de barras muestra notas entre 95 y 99, y el eje Y arranca en 90. ¿Qué efecto tiene?',
          opciones: [
            'Ninguno en particular, porque los valores de las barras siguen siendo exactamente los mismos',
            'Mejora la lectura, porque aprovecha todo el alto disponible del área del gráfico',
            'Exagera las diferencias y hace que una caída pequeña parezca un derrumbe',
            'Solo afecta la leyenda, que deja de corresponder con la escala que se está usando'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Cortar el eje Y es la trampa visual más común. Si hay una razón para cortarlo, se declara en el gráfico.',
          feedbackIncorrecto: 'Los valores no cambian, pero la imagen sí. Y la gente decide con la imagen, no con la tabla.'
        },
        {
          enunciado: '¿Cuándo deja de servir un gráfico circular?',
          opciones: [
            'Cuando hay muchas porciones, porque el ojo ya no distingue cuál es mayor',
            'Cuando los porcentajes de las porciones no suman exactamente cien por el redondeo',
            'Cuando las categorías tienen nombres largos que no caben dentro de cada porción',
            'Cuando alguna de las porciones representa menos de la décima parte del total medido'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Con tres a cinco porciones se lee bien; pasadas siete ya nadie compara nada. Ahí conviene pasar a barras.',
          feedbackIncorrecto: 'El límite del circular es la cantidad de porciones. Cuando son muchas, el ojo no puede comparar áreas.'
        },
        {
          enunciado: '¿Cuál de estos es un título descriptivo de gráfico?',
          opciones: [
            '«Gráfico de barras 1», porque numera la figura y permite referirse a ella en el texto',
            '«Datos del periodo», porque anuncia con claridad de dónde salió la información mostrada',
            '«Gasto mensual en transporte, enero a mayo», porque dice qué muestra y en qué periodo',
            '«Resultados», porque es corto y deja que la imagen hable por sí sola sin interferencias'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El título es lo único que viaja con la imagen. Debe decir qué se está mirando y de cuándo.',
          feedbackIncorrecto: 'Un título dice qué muestra el gráfico. Numerarlo o llamarlo «resultados» no le dice nada a quien no estuvo.'
        },
        {
          enunciado: 'Cartago se llama capital del bordado y Ansermanuevo cuna del calado. ¿Qué tiene que ver eso con los gráficos?',
          opciones: [
            'Que las artesanas del norte del Valle usan gráficos para planear las piezas que van a bordar',
            'Que cada oficio tiene su nombre porque hace algo distinto, y con los tipos de gráfico pasa igual',
            'Que el bordado y el calado son en realidad el mismo oficio con dos nombres según la ciudad',
            'Que los oficios tradicionales del territorio se explican mejor con imágenes que con tablas'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Llamar bordado a un calado es no ver lo que la mano hizo. Llamar línea a lo que pedía barras es no ver lo que la pregunta pedía.',
          feedbackIncorrecto: 'El punto es el nombre. Dos cosas distintas necesitan dos nombres, y usar el que no corresponde impide ver lo que hay.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Mis tres gráficos, ¿los elegí por la pregunta que responden o por cuál se veía mejor en la pantalla?',
    transferencia: 'Esta semana toma un gráfico real de prensa o de redes. Identifica qué pregunta dice responder, si el tipo es el adecuado, si el eje Y arranca en cero y qué categoría queda escondida en «otros».',
    cierre: 'Al terminar podrás: (1) identificar los tres tipos básicos de gráfico y la pregunta que responde cada uno; (2) explicar cuándo un gráfico engaña al ojo y cuándo lo orienta bien; (3) crear tres gráficos sobre tu propia tabla, con una justificación escrita de por qué ese tipo y no…'
  },
  saberAncestral: {
    saber: 'Cartago se llama a sí misma capital del bordado. Ansermanuevo se llama cuna del calado, y cada agosto lo celebra en sus Fiestas del Calado y el Bordado. Son dos oficios distintos, con dos ciudades y dos nombres. Confundirlos no es un descuido de vocabulario: es no ver lo que la mano hizo. Tener nombre propio para lo que uno hace es parte de la dignidad del trabajo (Universidad Autónoma de Occidente, 2021). Pero el reconocimiento no es lo mismo que la justicia. La cara de exclusión está en la informalidad. La tradición está en riesgo por falta de contrato, por desinterés generacional y por la desconexión entre artesanas y diseñadores. Y quienes bordan lo dicen sin rodeos: «la mayoría somos mujeres cabeza de familia» (citado en Chica García, 2019).',
    fuente: 'Bordadoras de Cartago y caladoras de Ansermanuevo · dos oficios con nombre propio',
    referencia: 'Universidad Autónoma de Occidente. (2021, 24 de marzo). Cartago, capital mundial del bordado, el tejido y la moda, a través de la gestión del turismo cultural. https://www.uao.edu.co/ciencias-administrativas/cartago-capital-mundial-del-bordado-el-tejido-la-moda-a-traves-de-la-gestion-del-turismo-cultural/',
    preguntaPuente: '¿Por qué dos ciudades vecinas insisten en que su oficio se llame por su nombre? ¿Y qué pasa cuando un gráfico se titula «Gráfico 2» en lugar de decir qué muestra?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Dos oficios con nombre propio',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · ¿Qué entendiste de este gráfico?',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Cuándo cada tipo y cuándo ninguno',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tres gráficos con justificación',
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
      titulo: '¿Qué entendiste de este gráfico?',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los tres gráficos que muestra el docente sin ver la tabla que hay detrás.',
        'Anota para cada uno qué pregunta parece responder.',
        'Anota qué conclusión sacarías de cada uno a primera vista.',
        'Anota qué te resulta sospechoso o confuso en cada caso.',
        'Compara tu lectura con las tablas reales y marca dónde te desviaste más.'
      ],
      cuaderno: {
        titulo: '¿Qué entendiste de este gráfico?',
        formato: 'tabla de tres filas y tres columnas (pregunta aparente / conclusión a primera vista / qué cambió al ver la tabla)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están las tres lecturas hechas antes de ver las tablas.',
        'Está marcado en cuál gráfico la desviación fue mayor.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Cuándo cada tipo y cuándo ninguno',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban una ficha por tipo con la pregunta que responde.',
        'Añadan a cada ficha cuándo elegirlo y cuándo no elegirlo nunca.',
        'Añadan un error frecuente de cada tipo.',
        'Decidan qué gráfico usar y cuál descartar en los tres casos propuestos.'
      ],
      cuaderno: {
        titulo: 'Cuándo cada tipo y cuándo ninguno',
        formato: 'tres fichas con pregunta, cuándo sí, cuándo no y un error frecuente, más la decisión de los tres casos',
        extension: 'media página'
      },
      criterios: [
        'Cada ficha dice cuándo no usar ese tipo, no solo cuándo usarlo.',
        'Las tres decisiones vienen con una razón escrita.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tres gráficos con justificación',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe tres preguntas, una por gráfico, antes de insertar nada.',
        'Comprueba que cada pregunta pida un tipo distinto.',
        'Genera los tres gráficos sobre tu tabla o sobre la tabla dinámica de la sesión 5.',
        'Pon título descriptivo, ejes con unidad y leyenda solo si hace falta.',
        'Escribe la justificación de cada uno diciendo por qué ese tipo y por qué otro habría sido peor.'
      ],
      cuaderno: {
        titulo: 'Mis tres gráficos con justificación',
        formato: 'tres fichas con pregunta, tipo, captura pegada o descrita y justificación de una o dos frases',
        extension: 'media página'
      },
      criterios: [
        'El eje Y arranca en cero en barras y líneas, o está declarada la excepción.',
        'Cada justificación nombra el tipo descartado y por qué habría sido peor.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.1.2',
      lente: 'lente del nosotros',
      cita: 'El tema esencial del diseño es el de dotar al producto de coherencia formal; incluye a la tecnología… por cuanto esto significa coherencia funcional: el del valor del uso; incluye a la estética, porque la coherencia formal, en cuanto tal, es la belleza del producto.',
      preguntaEspejo: 'Mis tres gráficos, ¿los elegí por la pregunta que responden o por cuál se veía mejor en la pantalla?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones IV, 11 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'No te formes de las cosas la opinión que tiene quien te agravia, ni la que él querría que tuvieras; míralas como son en verdad. (trad. propia)',
      preguntaEspejo: 'Del último gráfico que me convenció, ¿alcancé a mirar dónde arrancaba el eje?'
    },
    floridi: {
      autor: 'Luciano Floridi · Hyperhistory and the Philosophy of Information Policies (2015)',
      lente: 'lente de la infoesfera',
      cita: 'La historia ha durado 6.000 años: empezó con la invención de la escritura en el cuarto milenio antes de Cristo. (trad. propia)',
      preguntaEspejo: 'Si mi gráfico llegara solo, sin que yo lo explique, ¿qué entendería quien lo abra?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a leer con criterio cualquier gráfico que te llegue y a producir los tuyos sin caer en trampas visuales.',
    emocional: 'Resististe la tentación del adorno: el tercer eje, la sombra, el degradado. Elegir simple es una disciplina.',
    ciudadana: 'Los gráficos abren las noticias. Auditar el eje, el tipo y la categoría «otros» es una forma de leer política.',
    local: 'En el norte del Valle, bordado y calado tienen cada uno su nombre porque son cosas distintas. Con los tipos de gráfico pasa igual.',
    intergeneracional: 'Nombrar bien lo que uno hace es un cuidado que se enseña en los oficios y se hereda. Tu título de gráfico es ese mismo cuidado.'
  }
};

export default contenido;
