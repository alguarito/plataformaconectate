/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/8/8-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 3,
  titulo: 'Tablas limpias — campos, registros y una bitácora de lo que corregiste',
  resumen: 'Una tabla sirve cuando está limpia y cuando alguien puede volver a mirar lo que corregiste. Hoy aprendes los cinco errores comunes, los arreglas en orden y escribes una bitácora, como los congresos indígenas del Cauca rinden cuentas de sus mandatos.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Casi todos los cálculos que salen mal empiezan en una tabla sucia. Y casi nadie puede decir después qué corrigió. La bitácora es lo que convierte tu limpieza en un trabajo que otros pueden revisar.',
    preguntaDetonante: 'Cuando limpies una tabla, ¿vas a poder decir qué corregiste, cuándo y por qué?',
    activacion: {
      titulo: 'Las tres Marías',
      descripcion: 'En 3 minutos, escribe en tres celdas «María», «MARIA» y « María » con un espacio adelante. Cuenta cuántas veces aparece «María» con un filtro. ¿Qué pasó?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 2 le pusiste tipo a cada columna con Formato de celdas.',
      siguiente: 'En la sesión 4 calculas SUMA, PROMEDIO, MAX y MIN sobre esta tabla limpia.'
    }
  },
  conceptosClave: [
    {
      termino: 'Campo',
      definicion: 'Una columna de la tabla. Cada campo mide una característica, nombre, edad, fecha, nota.',
      ejemplo: 'En la lista del salón, «Edad» es un campo. Todas las edades van en esa columna.',
      categoria: 'Cómo se organiza una tabla'
    },
    {
      termino: 'Registro',
      definicion: 'Una fila de la tabla. Cada registro es una persona o un evento con todos sus campos.',
      ejemplo: '«Camila, 13, 8-A, 15/03/2013» es un registro de cuatro campos.',
      categoria: 'Cómo se organiza una tabla'
    },
    {
      termino: 'Formato de tabla',
      definicion: 'Opción de Excel (Insertar, Tabla) que reconoce el bloque como tabla, con filtros y encabezados fijos.',
      ejemplo: 'Con formato de tabla, cada encabezado tiene una flecha para filtrar u ordenar.',
      categoria: 'Cómo se organiza una tabla'
    },
    {
      termino: 'Espacio de más',
      definicion: 'Un carácter invisible al inicio o al final de una celda. Rompe búsquedas y filtros.',
      ejemplo: '« María» con espacio adelante no aparece cuando filtras por «María». Se quita con ESPACIOS.',
      categoria: 'Los cinco errores'
    },
    {
      termino: 'Mayúsculas distintas',
      definicion: 'La misma palabra escrita de varias formas. Excel las cuenta como valores distintos.',
      ejemplo: '«maría», «MARÍA» y «María» son tres personas para Excel. NOMPROPIO las unifica.',
      categoria: 'Los cinco errores'
    },
    {
      termino: 'Duplicado',
      definicion: 'Una fila que aparece dos veces. Infla conteos y sumas.',
      ejemplo: 'Si Camila aparece dos veces, el salón tiene un estudiante de más en la suma.',
      categoria: 'Los cinco errores'
    },
    {
      termino: 'Celda vacía',
      definicion: 'Una celda sin dato. No es un cero. Se decide caso por caso qué hacer con ella.',
      ejemplo: 'Una nota vacía en el promedio no cuenta. Un cero sí, y baja el promedio.',
      categoria: 'Los cinco errores'
    },
    {
      termino: 'Bitácora de limpieza',
      definicion: 'Registro de cada corrección, error, herramienta, cuándo y por qué. Permite que otra persona repita el trabajo.',
      ejemplo: '«Fila 12 repetida. Quitar duplicados. 4 de marzo, 10:20. Era la misma persona con el nombre en mayúsculas».',
      categoria: 'El oficio'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes limpiar una tabla y contarlo?',
      instrucciones: 'Cinco preguntas para verificar que reconoces los errores, el orden de limpieza y para qué sirve la bitácora. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'En la lista del salón, la fila con todos los datos de Camila (nombre, edad, grupo, fecha) se llama…',
          opciones: [
            'Campo, porque agrupa datos.',
            'Registro.',
            'Encabezado de la tabla.',
            'Filtro de la columna.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La fila completa de una persona es un registro; cada columna es un campo.',
          feedbackIncorrecto: 'Las columnas son campos. La fila completa de una persona, con todos sus campos, es un registro.'
        },
        {
          enunciado: 'Filtras por «María» y aparece una sola vez, pero en el salón hay cinco Marías. ¿Qué problema es más probable?',
          opciones: [
            'Las otras cuatro Marías nunca se escribieron en la tabla.',
            'Las otras están con mayúsculas distintas o con espacios de más.',
            'Excel solo muestra la primera coincidencia de cada filtro.',
            'La columna quedó con formato de fecha en vez de texto.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. «MARIA», «maría» y « María» son valores distintos para Excel. Por eso se limpian antes de filtrar.',
          feedbackIncorrecto: 'Excel muestra todas las coincidencias exactas. Si solo aparece una, las otras están escritas distinto, con mayúsculas o espacios de más.'
        },
        {
          enunciado: '¿Cuál es el orden correcto para limpiar una tabla?',
          opciones: [
            'Quitar duplicados, arreglar fechas, quitar espacios, unificar mayúsculas.',
            'Arreglar fechas, quitar espacios, quitar duplicados, unificar mayúsculas.',
            'Quitar espacios, unificar mayúsculas, quitar duplicados, arreglar fechas.',
            'Unificar mayúsculas, quitar duplicados, quitar espacios, arreglar fechas.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Primero espacios y mayúsculas, porque sin eso los duplicados no se detectan bien. Después duplicados y fechas.',
          feedbackIncorrecto: 'Si quitas duplicados antes de unificar mayúsculas, «María» y «MARIA» quedan como dos personas. El orden es espacios, mayúsculas, duplicados, fechas.'
        },
        {
          enunciado: 'Tienes una celda de nota vacía y la llenas con cero para «que no quede el hueco». ¿Qué pasa con el promedio?',
          opciones: [
            'No cambia, porque Excel ignora los ceros al promediar.',
            'Sube, porque ahora hay un dato más en la columna.',
            'Da error, porque el cero no es una nota válida en la escala.',
            'Baja, porque el cero entra como una nota real.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Un cero es una nota real para Excel y baja el promedio. Una celda vacía no cuenta. Por eso cada vacío se decide.',
          feedbackIncorrecto: 'Excel sí cuenta los ceros. Al llenar el vacío con cero, el promedio baja como si alguien hubiera sacado cero.'
        },
        {
          enunciado: '¿Para qué sirve, sobre todo, la bitácora de limpieza?',
          opciones: [
            'Para que otra persona pueda repetir o revisar cada corrección.',
            'Para que la tabla se vea más ordenada cuando se imprime.',
            'Para que Excel guarde una copia automática de la hoja.',
            'Para contar cuántas filas tiene la tabla al final.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Eso es. La bitácora deja rastro de qué corregiste, cómo y por qué, para que alguien vuelva a mirarlo.',
          feedbackIncorrecto: 'La bitácora no es para Excel ni para la impresión. Es para que otra persona, o tú dentro de un mes, pueda revisar y repetir lo que hiciste.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál corrección de tu tabla te costó más decidir, y qué escribiste en la justificación?',
    transferencia: 'La próxima vez que corrijas algo importante, una tarea, un trabajo en grupo, anota qué cambiaste y por qué. Es tu bitácora.',
    cierre: 'Una tabla limpia no es la que se ve bonita. Es la que sirve, y de la que alguien puede decir qué se le hizo.'
  },
  saberAncestral: {
    saber: 'En los pueblos indígenas del Cauca, las normas que rigen a todos se llaman mandatos. No las escribe una autoridad sola. Salen de un congreso al que llega la gente de los resguardos a discutir durante días. El XV Congreso del Consejo Regional Indígena del Cauca se reunió en Río Blanco, Sotará, del 25 al 30 de junio de 2017 (CRIC, 2017). De allí salieron mandatos concretos, numerados y escritos. Y lo más importante viene después: en el siguiente congreso, la organización rinde cuentas en público de cuáles se cumplieron y cuáles no. El registro se revisa, se corrige y se vuelve a mirar. Un mandato no vale por estar escrito; vale porque quienes lo hicieron vuelven a mirarlo. La cara de exclusión: un mandato es un acto de gobierno de un pueblo que se disputa con el Estado y con actores armados. El propio CRIC reporta que muchos quedan sin cumplir. Nosotros hacemos hoy algo mucho más pequeño que aprende de eso: una tabla con sus registros y una bitácora de lo que corregimos, para que cualquiera pueda volver a mirarla.',
    fuente: 'Congresos del CRIC · mandatos y rendición de cumplimiento',
    referencia: 'Consejo Regional Indígena del Cauca. (2017). Avanza el XV congreso regional del CRIC en el resguardo de Rioblanco Sotará del pueblo indígena yanacona.',
    preguntaPuente: 'El CRIC no solo escribe los mandatos: en el siguiente congreso rinde cuentas de cuáles cumplió. Cuando limpies una tabla, ¿vas a poder decir qué corregiste, cuándo y por qué? ¿O solo vas a tener una tabla que «se ve bien»?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Los mandatos y su rendición de cuentas',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁',
        '✏️'
      ],
      titulo: 'Actividad 1 · Inventario de la suciedad',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · La limpieza en orden',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Mi bitácora de limpieza',
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
      titulo: 'Inventario de la suciedad',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Recibe la tabla con errores que te entrega o proyecta tu docente.',
        'Mira una columna a la vez.',
        'Anota cada problema que veas, espacios de más, mayúsculas distintas, fechas raras, filas repetidas, celdas vacías.',
        'Marca con una estrella los problemas que dañarían un cálculo.',
        'Cuenta cuántos registros tiene la tabla y cuántos parecen sospechosos.'
      ],
      cuaderno: {
        titulo: 'Inventario de la suciedad',
        formato: 'lista numerada con problema, columna y marca de impacto (alto, medio, bajo)',
        extension: 'media página'
      },
      criterios: [
        'Tienes al menos cinco problemas anotados con su columna.',
        'Sabes por cuál empezarías y por qué.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Limpia la tabla en el orden correcto',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, abran la tabla sucia y guárdenla con otro nombre. La original no se toca.',
        'Quiten los espacios de más con la función ESPACIOS o con Buscar y reemplazar.',
        'Unifiquen las mayúsculas con NOMPROPIO.',
        'Revisen las filas repetidas antes de quitarlas con Datos, Quitar duplicados.',
        'Apliquen formato de fecha a la columna de fechas y decidan qué hacer con cada celda vacía.',
        'Tomen captura antes y después de cada paso.'
      ],
      cuaderno: {
        titulo: 'La limpieza en orden',
        formato: 'lista de los cinco pasos en el orden que los hicieron, con la herramienta usada al lado',
        extension: 'media página'
      },
      criterios: [
        'Los cinco pasos están en orden, cada uno con su herramienta.',
        'Hay una captura de antes y de después por paso.'
      ]
    },
    {
      numero: 3,
      verbo: 'EXPLICA',
      titulo: 'Escribe la bitácora y prueba la tabla',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Abre tu tabla limpia, selecciónala completa y aplica Insertar, Tabla.',
        'Escribe la bitácora, por cada corrección, qué error había, qué herramienta usaste, cuándo y por qué.',
        'Prueba la tabla con PROMEDIO sobre una columna numérica. Si da error, quedó un número como texto.',
        'Cuenta los registros finales y compáralos con los iniciales.',
        'Dale la bitácora a tu pareja y pídele que repita una corrección solo leyendo.'
      ],
      cuaderno: {
        titulo: 'Mi bitácora de limpieza',
        formato: 'tabla de 4 columnas (error / herramienta / cuándo / justificación) con al menos 5 filas, más la línea de registros iniciales y finales',
        extension: 'una página'
      },
      criterios: [
        'Tu pareja repite una corrección leyendo solo tu bitácora.',
        'PROMEDIO devuelve un valor sin error.',
        'La bitácora dice cuántos registros había y cuántos quedaron.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.5.4',
      lente: 'lente del nosotros',
      cita: 'Es ingenuo creer que la información se entiende sola, como si no hubiera conflictos detrás de cada dato.',
      preguntaEspejo: '¿Qué decisión de mi limpieza cambiaría el resultado si otra persona la hubiera tomado distinto?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Cambiar de parecer y seguir el aviso de quien te corrige es tan libre como mantenerte en lo tuyo.',
      preguntaEspejo: '¿Escribí la bitácora para que me corrijan, o para que parezca que no me equivoqué?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'La mitad de los datos que guardamos es basura; el problema es que no sabemos cuál mitad.',
      preguntaEspejo: 'De todo lo que quité o cambié, ¿qué parte podría haber sido un dato real que perdí?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a limpiar en orden y a dejar rastro de cada decisión. Es una costumbre que sirve mucho más allá de Excel.',
    emocional: 'Dejaste que tu pareja repitiera tu trabajo leyendo tu bitácora. Escribir para que te revisen es incómodo al principio y liberador después.',
    ciudadana: 'Un pueblo del Cauca rinde cuentas en público de sus mandatos. Pedir que las cifras públicas traigan su bitácora es lo mismo a otra escala.',
    local: 'Del congreso del CRIC en Sotará a tu tabla del salón, la idea es una, lo escrito vale porque alguien vuelve a mirarlo.',
    intergeneracional: 'Quien lea tu bitácora dentro de un año podrá repetir tu trabajo. Eso es lo que hace una comunidad cuando revisa sus propios acuerdos.'
  }
};

export default contenido;
