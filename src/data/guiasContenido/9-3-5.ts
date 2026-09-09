/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/9/9-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 5,
  titulo: 'Tablas dinámicas — agrupar y comparar',
  resumen: 'Una tabla dinámica resume una tabla larga agrupando por una columna y calculando otra. Es el salto del cálculo único al cálculo comparable: ya no cuánto en total, sino cuánto por categoría.',
  duracionMin: 90,
  subtema: 'Datos · Comparar grupos',
  preLectura: {
    porQueImporta: 'El promedio general suele esconder las diferencias que más importan. Agrupar abre la tabla por categorías para que el número que decide sea el que corresponde, y no el que disuelve a todos en el mismo dato.',
    preguntaDetonante: 'Si el promedio del curso es 6.2 pero 9A tiene 7.5 y 9B tiene 4.9, ¿qué decisión cambia al ver el promedio por curso?',
    activacion: {
      titulo: 'Doce productos al azar',
      descripcion: 'En 3 minutos, el docente nombra doce productos repitiendo algunos. Los estudiantes agrupan mentalmente y reportan cuánto de cada uno. Después se compara con una tabla dinámica en vivo.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 4 aplicaste filtros para cortar la tabla y quedarte con una parte.',
      siguiente: 'En la sesión 6 le vas a poner imagen a esas agrupaciones con gráficos de barra, línea y circular.'
    }
  },
  conceptosClave: [
    {
      termino: 'Filas',
      definicion: 'La categoría por la que agrupas. Cada valor distinto se vuelve una fila del resumen.',
      ejemplo: 'Arrastras «Curso» a Filas y aparecen 9A, 9B y 9C como filas separadas.',
      categoria: 'Las cuatro zonas'
    },
    {
      termino: 'Valores',
      definicion: 'La columna numérica sobre la que se calcula el indicador. Es el motor del resumen.',
      ejemplo: 'Arrastras «Nota» a Valores y por defecto calcula SUMA; hay que cambiarla a PROMEDIO.',
      categoria: 'Las cuatro zonas'
    },
    {
      termino: 'Columnas',
      definicion: 'Zona opcional que cruza una segunda categoría y arma una matriz.',
      ejemplo: 'Filas con Curso y Columnas con Mes da el gasto promedio de cada curso en cada mes.',
      categoria: 'Las cuatro zonas'
    },
    {
      termino: 'Filtros',
      definicion: 'Zona opcional que reduce toda la tabla dinámica a un subconjunto sin tocar las demás zonas.',
      ejemplo: 'Un filtro de grado igual a 9 deja el resumen solo con los grupos de ese grado.',
      categoria: 'Las cuatro zonas'
    },
    {
      termino: 'Operación',
      definicion: 'SUMA, PROMEDIO, CUENTA, MAX o MIN. Define cuál es la pregunta que estás respondiendo.',
      ejemplo: 'Notas piden PROMEDIO, productos vendidos piden SUMA, estudiantes por curso piden CUENTA.',
      categoria: 'Decidir con el resumen'
    },
    {
      termino: 'Conclusión de tres renglones',
      definicion: 'El cierre mínimo de toda tabla dinámica: grupo destacado, grupo en riesgo y decisión posible.',
      ejemplo: '9A destaca con 7.5, 9B queda atrás con 4.9 y eso sugiere refuerzo focalizado antes que clase general.',
      categoria: 'Decidir con el resumen'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica tablas dinámicas',
      instrucciones: '5 preguntas para confirmar que dominas tablas dinámicas con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Arrastras una columna de notas a Valores y la operación queda en SUMA. ¿Qué está calculando?',
          opciones: [
            'El promedio de las notas de cada grupo, que suele ser lo que uno quiere ver',
            'La nota más alta que alcanzó cada uno de los grupos de la tabla',
            'La suma de todas las notas del grupo, que casi nunca responde la pregunta',
            'La cantidad de notas registradas en cada uno de los grupos comparados'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Excel arranca en SUMA por defecto. Hay que cambiarla a PROMEDIO con clic derecho, o el indicador no significa nada.',
          feedbackIncorrecto: 'SUMA suma, incluso cuando lo que tiene sentido es promediar. Cambiar la operación es el paso que más se olvida.'
        },
        {
          enunciado: 'La categoría «9A» aparece dos veces en el resumen, con totales distintos. ¿Qué pasó?',
          opciones: [
            'En la columna original conviven «9A» y «9a», y al agrupar quedan como dos grupos',
            'Es el comportamiento normal de la herramienta cuando una categoría reúne muchas filas asociadas',
            'Faltan datos en la columna numérica y el resumen parte el grupo en dos partes',
            'Es un error conocido de Excel al construir resúmenes sobre tablas muy largas'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Los datos sucios se separan al agrupar: mayúsculas, espacios y tildes inconsistentes crean grupos fantasma. La limpieza de la sesión 2 importa aquí.',
          feedbackIncorrecto: 'La causa es higiene de datos. Dos escrituras de la misma categoría producen dos grupos distintos.'
        },
        {
          enunciado: '¿Cuándo conviene SUMA y cuándo PROMEDIO en la zona de Valores?',
          opciones: [
            'PROMEDIO sirve solo para las columnas de notas; para todo lo demás la operación correcta siempre es SUMA',
            'Da lo mismo, porque las dos operaciones ordenan los grupos en el mismo orden',
            'SUMA cuando preguntas cuánto en total; PROMEDIO cuando preguntas cuánto típicamente',
            'SUMA siempre, porque es la operación que Excel trae configurada por defecto'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Ventas piden SUMA. Notas, edad u horas piden PROMEDIO. La operación define la pregunta que estás respondiendo.',
          feedbackIncorrecto: 'Total lleva a SUMA y típico lleva a PROMEDIO. Elegir mal cambia la conclusión sin que se note.'
        },
        {
          enunciado: '¿Qué entrega una tabla dinámica que las fórmulas básicas de la sesión 3 no entregan?',
          opciones: [
            'Cálculos bastante más precisos, porque el motor de agrupación redondea mejor los decimales de cada grupo',
            'Comparar grupos sin escribir diez fórmulas, porque el indicador se recalcula por categoría',
            'Lo mismo que las fórmulas, solo que presentado con otro formato en la hoja',
            'Mayor velocidad de cálculo sobre tablas que tienen muchos miles de filas'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Su poder está en comparar grupos sin esfuerzo. Reemplaza muchas fórmulas condicionales repetidas a mano.',
          feedbackIncorrecto: 'El valor está en comparar grupos. Sin tabla dinámica, un promedio por categoría exige repetir fórmulas condicionales una por una.'
        },
        {
          enunciado: 'En el Eje Cafetero, la palabra «cuadrilla» nombra dos grupos distintos. ¿Qué tiene que ver eso con agrupar datos?',
          opciones: [
            'Que las cuadrillas del cafetal llevaban tablas de recolección muy parecidas a las hojas de cálculo actuales',
            'Que agrupar es un invento reciente que llegó al campo con las hojas de cálculo',
            'Que nada los conecta, porque una cosa es el trabajo y otra el análisis de datos',
            'Que la misma etiqueta puede cubrir realidades distintas, y hay que decir cuál se agrupó'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Una cuadrilla da pertenencia mientras uno sirva y la otra mientras uno cree. La etiqueta es la misma; lo que hay debajo no. Con las categorías de tu tabla pasa igual.',
          feedbackIncorrecto: 'El punto no es la herramienta sino la etiqueta. Dos realidades muy distintas pueden caer bajo el mismo nombre, y quien agrupa tiene que declarar cuál está contando.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cuando agrupé mi tabla, ¿quién quedó en «otros» o en «no aplica»? ¿Qué cambiaría si esa fila fuera visible?',
    transferencia: 'Esta semana aplica una tabla dinámica real a una tabla cotidiana fuera del aula: gastos por categoría, calificaciones por área u horas de sueño por día. Documenta el grupo destacado, el grupo en riesgo y una decisión real.',
    cierre: 'Al terminar podrás: (1) analizar cuándo una pregunta necesita agruparse y cuándo basta una fórmula simple; (2) explicar las cuatro zonas de una tabla dinámica y qué operación pide cada pregunta; (3) crear tu propia tabla dinámica con una conclusión que nombre el grupo destacado y…'
  },
  saberAncestral: {
    saber: 'En el Eje Cafetero, la palabra «cuadrilla» nombra dos grupos que no se parecen en nada. Uno es el de los recolectores que entran al cafetal detrás de un patrón de corte. El patrón marca los surcos con una bandera y reparte el trabajo (Saldarriaga Ramírez, 2024). Ahí se pertenece mientras dure la cosecha. Y a la gente se la agrupa por de dónde viene: paisa, tolimense, pastuso. El otro son las Cuadrillas del Carnaval de Riosucio. Doce a quince personas trabajan un año entero en una letra, una música y un disfraz (Ministerio de Cultura, 2011). Ninguna de las tres cosas se puede repetir nunca más. Las dos cuadrillas dan pertenencia. Pero una la da mientras uno sirva, y la otra mientras uno cree. La cara de exclusión está del lado del cafetal. Se trabaja sin contrato ni seguridad social, en cuarteles hacinados, con jornadas que arrancan a las 6:30 de la mañana. Y hacia afuera pesa el estigma de «mal vestidos» o «bebedores de bar». Pertenecer a una cuadrilla puede convivir con quedar excluido del pueblo entero.',
    fuente: 'Cuadrillas del Eje Cafetero · la del cafetal y la del Carnaval de Riosucio',
    referencia: 'Saldarriaga Ramírez, C. (2024). Andariegos: prácticas culturales de los recolectores itinerantes de café del municipio de Pereira, Colombia. Apuntes: Revista de Estudios sobre Patrimonio Cultural, 37. https://doi.org/10.11144/Javeriana.apu37.apcr',
    preguntaPuente: '¿Por qué la misma palabra nombra dos cuadrillas que no se parecen en nada? ¿Y qué se pierde cuando un promedio mete en una sola fila a gente que no vive lo mismo?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las dos cuadrillas',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · ¿Total o por grupo?',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las cuatro zonas',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu tabla dinámica',
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
      verbo: 'ANALIZA',
      titulo: '¿Total o por grupo?',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma tu tabla de la sesión 2 con las fórmulas de la sesión 3 ya aplicadas.',
        'Responde a ojo cuál categoría tiene el promedio más alto y cuál tiene más filas.',
        'Cronometra cuánto tardas y anota si dudaste.',
        'Construye una primera tabla dinámica con esa categoría en Filas y la columna numérica en Valores.',
        'Compara qué método fue más rápido y cuál dio el resultado correcto.'
      ],
      cuaderno: {
        titulo: '¿Total o por grupo?',
        formato: 'tabla de dos filas y cuatro columnas (pregunta / a ojo / con tabla dinámica / tiempo) y una línea de cierre',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están las dos respuestas de las dos maneras.',
        'Está escrito qué método ganó en velocidad y cuál en precisión.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las cuatro zonas',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las cuatro zonas con la función de cada una.',
        'Escriban la secuencia de tres pasos que sigue toda tabla dinámica.',
        'Tomen tres preguntas de sus tablas y digan qué operación necesita cada una.',
        'Busquen una pregunta que solo se responda cruzando dos categorías y escríbanla completa.'
      ],
      cuaderno: {
        titulo: 'Las cuatro zonas',
        formato: 'las cuatro zonas con su función, la secuencia de tres pasos y la pregunta que cruza dos categorías',
        extension: 'media página'
      },
      criterios: [
        'Cada zona tiene su función escrita en lenguaje corriente.',
        'Está escrita la pregunta que necesita cruzar dos categorías.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu tabla dinámica',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe en una frase la pregunta de agrupación antes de tocar la hoja.',
        'Elige la categoría que va a Filas y la columna numérica que va a Valores.',
        'Construye la tabla dinámica y ajusta la operación a la que responde tu pregunta.',
        'Ordena los resultados de mayor a menor y captura la pantalla.',
        'Escribe tres renglones con el grupo destacado, el grupo en riesgo y la decisión posible.'
      ],
      cuaderno: {
        titulo: 'Mi tabla dinámica',
        formato: 'la pregunta, la configuración de zonas y operación, la captura y la conclusión de tres renglones',
        extension: 'media página'
      },
      criterios: [
        'La operación elegida responde la pregunta escrita, no otra.',
        'La conclusión nombra el grupo destacado y el grupo en riesgo.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.2.2',
      lente: 'lente del nosotros',
      cita: 'El rostro del hombre se revela como otro cuando se recorta en nuestro sistema de instrumentos como exterior, como alguien, como una libertad que interpela, que provoca, que aparece como el que resiste a la totalización instrumental. No es algo; es alguien.',
      preguntaEspejo: 'Cuando agrupé mi tabla, ¿quién quedó en «otros» o en «no aplica»? ¿Qué cambiaría si esa fila fuera visible?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VII, 47 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Conduce mirar alrededor el curso de los astros, como quien gira con ellos, y contemplar también frecuentemente las mutuas conversiones de los elementos, porque las consideraciones de estas cosas purifican a uno de las manchas de esta vida terrestre.',
      preguntaEspejo: '¿Qué vi al mirar el conjunto que no se veía fila por fila? ¿Y qué dejé de ver al mirarlo así?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Los pequeños patrones solo pueden ser significativos si se agregan correctamente, se comparan y se procesan a tiempo. (trad. propia, abreviada)',
      preguntaEspejo: '¿Mi agrupación deja ver el patrón, o lo fabrica porque agrupé justo por donde quería que saliera?'
    }
  },
  cincoDimensiones: {
    personal: 'Pasaste de mirar un total a comparar grupos. Es la capacidad que vas a usar en un presupuesto, en tus hábitos o en tus propias notas.',
    emocional: 'Toleraste la incomodidad de que lo simple ya no alcance. Comparar grupos obliga a pensar antes de calcular.',
    ciudadana: 'Los reportes oficiales y el periodismo de datos se construyen agrupando. Entender cómo se agrupa es poder discutir el resumen, no solo consumirlo.',
    local: 'El patrón de corte agrupa la cuadrilla por surcos y por procedencia. Tú agrupas tu tabla por categorías. En los dos casos alguien decidió el criterio.',
    intergeneracional: 'La libreta agrupada del almacén y tu tabla dinámica responden la misma pregunta. La herramienta cambia; la decisión sigue siendo de quien mira.'
  }
};

export default contenido;
