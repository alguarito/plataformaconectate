/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/8/8-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 2,
  titulo: 'Cada celda tiene un tipo — número, texto, fecha, moneda, porcentaje',
  resumen: 'Excel adivina el tipo de cada celda, y a veces adivina mal. Hoy aprendes los cinco tipos, los aplicas con Formato de celdas y revisas la hoja de tu pareja, como la bordadora que sabe el nombre de cada puntada.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Casi todo error de Excel empieza aquí, en una celda con el tipo equivocado. Un número con letras no se suma, una fecha como texto no se ordena, y nadie te avisa.',
    preguntaDetonante: 'Cuando abras una hoja con veinte columnas, ¿sabrás decir de qué tipo es cada una?',
    activacion: {
      titulo: 'La celda que no suma',
      descripcion: 'En 3 minutos, escribe en Excel «cinco mil» en una celda y 5000 en otra. Suma las dos. ¿Qué pasó? Anota lo que viste.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 1 le hiciste cinco preguntas a una hoja antes de calcular.',
      siguiente: 'En la sesión 3 conviertes esta hoja en una tabla con campos y registros, y la limpias con bitácora.'
    }
  },
  conceptosClave: [
    {
      termino: 'Número',
      definicion: 'Cantidad que se puede calcular. Excel la alinea a la derecha y la deja sumar, promediar y comparar.',
      ejemplo: '15, 3,14 y 200 son números. «Quince» con letras no lo es, y Excel no lo suma.',
      categoria: 'Los cinco tipos'
    },
    {
      termino: 'Texto',
      definicion: 'Palabras o códigos que solo se leen. Excel los alinea a la izquierda y no los calcula.',
      ejemplo: '«María Pérez» y «Código X-45» son texto. Un código con letras va como texto aunque tenga números.',
      categoria: 'Los cinco tipos'
    },
    {
      termino: 'Fecha',
      definicion: 'Día, mes y año que Excel puede ordenar y restar. Con formato de fecha se calcula cuántos días pasaron entre dos.',
      ejemplo: '15/03/2026 como fecha se ordena de la más antigua a la más reciente. «15 de marzo» como texto, no.',
      categoria: 'Los cinco tipos'
    },
    {
      termino: 'Moneda',
      definicion: 'Número con símbolo de dinero y separador de miles. Sirve para precios, gastos y ventas.',
      ejemplo: '$ 5.000 con formato de moneda se suma y se muestra con el signo de peso.',
      categoria: 'Los cinco tipos'
    },
    {
      termino: 'Porcentaje',
      definicion: 'Tasa que se muestra con el símbolo % pero se calcula como decimal. 50 % vale 0,5 por dentro.',
      ejemplo: 'Si la celda tiene 0,15 y le pones formato de porcentaje, Excel muestra 15 %.',
      categoria: 'Los cinco tipos'
    },
    {
      termino: 'Formato de celdas',
      definicion: 'Menú de Excel donde eliges la categoría de una celda o columna. Cambia cómo se muestra el dato, no corrige un dato mal escrito.',
      ejemplo: 'Clic derecho sobre la columna, Formato de celdas, pestaña Número, categoría Fecha.',
      categoria: 'La herramienta'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué tipo lleva cada celda?',
      instrucciones: 'Cinco preguntas para verificar que distingues los cinco tipos y sabes cuándo usar cada uno. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tienes una columna con las fechas de cumpleaños del salón y quieres ordenarla del más antiguo al más reciente. ¿Qué tipo debe tener?',
          opciones: [
            'Texto, porque las fechas llevan el nombre del mes.',
            'Fecha, porque solo así Excel las ordena por el calendario.',
            'Número, porque los días son cantidades.',
            'Moneda, porque se separan con puntos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Solo el tipo Fecha ordena por el calendario. Como texto, «15 de marzo» quedaría junto a «15 de enero» por orden alfabético.',
          feedbackIncorrecto: 'Como texto, Excel ordena las fechas por la primera letra, no por el calendario. El tipo correcto es Fecha.'
        },
        {
          enunciado: 'Sumas tres celdas: 5000, 3000 y «cinco mil» escrito con letras. ¿Qué hace Excel?',
          opciones: [
            'Convierte «cinco mil» en 5000 y suma 13000.',
            'Muestra un error y no calcula nada.',
            'Pregunta si quieres convertir el texto a número.',
            'Suma 8000 y deja fuera la celda con letras, sin avisar.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Excel salta el texto en silencio. El total sale de dos celdas, no de tres, y nadie te avisa.',
          feedbackIncorrecto: 'Excel no convierte letras en números ni pregunta. Simplemente deja esa celda fuera de la suma y el total engaña.'
        },
        {
          enunciado: '¿Cuál es la ruta para cambiar el tipo de una columna completa?',
          opciones: [
            'Seleccionar la columna, clic derecho, Formato de celdas, pestaña Número.',
            'Insertar, Tabla, y elegir el estilo.',
            'Datos, Validación de datos, y escribir el tipo.',
            'Inicio, Borrar formato, y volver a escribir los datos.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Formato de celdas es donde eliges Número, Texto, Fecha, Moneda o Porcentaje para toda la columna.',
          feedbackIncorrecto: 'Las otras rutas hacen cosas distintas. El tipo se elige en Formato de celdas, pestaña Número.'
        },
        {
          enunciado: 'Una celda ya tiene el valor 50 y le aplicas formato de porcentaje. ¿Qué muestra Excel?',
          opciones: [
            '50 %.',
            '0,5 %.',
            '5000 %.',
            '0,005 %.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Excel entiende 50 como 50 enteros, no como 0,5, y los muestra como 5000 %. Para ver 50 % hay que escribir 0,5.',
          feedbackIncorrecto: 'Por dentro, el porcentaje es un decimal. 50 entero se convierte en 5000 %. Para que muestre 50 %, la celda debe tener 0,5.'
        },
        {
          enunciado: 'Una hoja tiene la columna «Código de estudiante» con valores como A-045 y B-112. ¿Qué tipo le conviene?',
          opciones: [
            'Número, porque tiene cifras.',
            'Texto, porque es un identificador que no se calcula.',
            'Fecha, porque el guion separa partes.',
            'Porcentaje, porque cada código es una parte del total.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Un código sirve para identificar, no para sumar. Va como texto aunque tenga cifras.',
          feedbackIncorrecto: 'Los códigos no se suman ni se ordenan como cantidades. Son texto, aunque lleven números.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de las cinco columnas te costó más tipar, y por qué?',
    transferencia: 'La próxima vez que veas una tabla en clase, en un recibo o en una noticia, pregúntate de qué tipo es cada columna y si alguien podría sumarla.',
    cierre: 'Excel adivina; tú decides. Ponerle tipo a una celda es la diferencia entre un dato y una palabra que parece dato.'
  },
  saberAncestral: {
    saber: 'En Cartago, el bordado a mano es economía y es lenguaje. Más de 1.500 bordadoras trabajan en el municipio y cerca de cien negocios venden lo que hacen (Chica García, 2019). Una sola prenda pasa por las manos de unas ocho artesanas. Y cada gesto de la aguja tiene nombre propio: cadeneta, pasado, rococó, paté cabra, randas caladas (Universidad Autónoma de Occidente, 2021). Ese nombre no es adorno. Cuando la maestra dice «aquí va pasado, no cadeneta», la aprendiz sabe qué hacer y qué corregir. Sin el nombre solo habría «una puntada», y nadie podría pedir, corregir ni enseñar. Ahí está también la cara de exclusión del oficio: la mayoría de quienes bordan son mujeres cabeza de familia con ingreso precario, y saber nombrar no les da todavía un salario digno. Hoy vas a hacer con Excel lo que la bordadora hace con la aguja: ponerle nombre al tipo de cada celda, para que se pueda calcular, corregir y enseñar.',
    fuente: 'Bordadoras de Cartago · nombrar las puntadas',
    referencia: 'Chica García, A. (2019, 17 de agosto). Bordados de Cartago: la herencia española que apropiaron las mujeres vallunas. Radio Nacional de Colombia.',
    preguntaPuente: 'La bordadora sabe si una puntada es cadeneta o pasado antes de corregirla. Cuando abras una hoja con veinte columnas, ¿sabrás decir de qué tipo es cada una? ¿Y qué le pasa a un promedio si una celda dice «cuatro coma cinco» con letras?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Nombrar las puntadas',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁',
        '✏️'
      ],
      titulo: 'Actividad 1 · Cinco celdas, cinco tipos',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '🔎'
      ],
      titulo: 'Actividad 2 · El tipo de cada columna',
      duracionMin: 25
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Revisa la hoja de tu pareja',
      duracionMin: 30
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
      titulo: 'Cinco celdas, cinco tipos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre Excel y escribe en cinco celdas distintas tu nombre completo, tu edad, tu fecha de nacimiento, el precio de una empanada hoy y el porcentaje de tu salón que usa gafas.',
        'Mira cómo trata Excel cada celda. ¿La alinea a la derecha o a la izquierda? ¿Le pone símbolo?',
        'Escribe al lado de cada celda el tipo que crees que Excel le dio.',
        'Marca con una estrella la celda que Excel trató distinto de lo que esperabas.'
      ],
      cuaderno: {
        titulo: 'Cinco celdas, cinco tipos',
        formato: 'tabla de 5 filas y 3 columnas (celda / lo que escribí / tipo que Excel le dio)',
        extension: 'media página'
      },
      criterios: [
        'Las cinco filas de la tabla están llenas.',
        'Una celda tiene estrella y puedes explicar por qué Excel la trató distinto.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Ponle el tipo correcto a cada columna',
      tiempoMin: 25,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, creen una hoja con cinco columnas, Nombre, Edad, Fecha de cumpleaños, Precio de la empanada, Porcentaje de asistencia.',
        'Llenen cinco filas con datos reales del salón.',
        'Antes de tocar nada, tomen la captura del «antes».',
        'Seleccionen cada columna, clic derecho, Formato de celdas, y elijan la categoría que corresponde.',
        'Tomen la captura del «después» y comparen las dos.'
      ],
      cuaderno: {
        titulo: 'El tipo de cada columna',
        formato: 'tabla de 5 filas y 3 columnas (columna / tipo elegido / qué voy a hacer con ella)',
        extension: 'media página'
      },
      criterios: [
        'Las cinco columnas tienen tipo y razón.',
        'Las dos capturas están guardadas con nombre.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Revisa la hoja de tu pareja y arregla la tuya',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Abre la hoja de tu pareja sin que te explique nada.',
        'Busca tres columnas con tipo equivocado o dudoso. Pista, alineación rara, dinero sin símbolo, fecha que no se ordena.',
        'Anota cada hallazgo con la razón en una línea.',
        'Devuélvele la hoja y recibe los hallazgos de la tuya.',
        'Corrige tu hoja, toma la captura final y llena la tabla del cuaderno.'
      ],
      cuaderno: {
        titulo: 'Qué cambió y por qué',
        formato: 'tabla de 5 filas y 2 columnas (columna / qué cambió y por qué), más los tres hallazgos de la hoja ajena',
        extension: 'una página'
      },
      criterios: [
        'Tu pareja encontró tus errores y los corregiste.',
        'Una suma de prueba sobre la columna de edades da el resultado esperado.',
        'La hoja está guardada con nombre claro.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.2.2',
      lente: 'lente del nosotros',
      cita: 'Una persona no es una cosa más entre las cosas de un sistema. Cuando la reducimos a un número, algo de ella queda por fuera.',
      preguntaEspejo: '¿Qué de las personas de mi hoja se pierde cuando solo miro los números?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones X, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Deja de discutir cómo debería ser una persona que hace bien las cosas, y hazlas bien.',
      preguntaEspejo: '¿Le puse a esta tarea pequeña el cuidado que va a necesitar la grande?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'La mitad de los datos que guardamos es basura, y el problema es que no sabemos cuál mitad.',
      preguntaEspejo: '¿Cuántas celdas de mi hoja parecen datos y no lo son?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a ponerle nombre al tipo de un dato antes de usarlo. Es una costumbre pequeña que evita errores grandes.',
    emocional: 'Dejaste que tu pareja encontrara tus errores y no te defendiste. Eso también se entrena.',
    ciudadana: 'Un dato mal tipado hace que un promedio salga mal en silencio. Saber cómo pasa es poder pedir explicaciones cuando una cifra pública no cuadra.',
    local: 'Las bordadoras de Cartago nombran cada puntada para poder corregir y enseñar. Tú nombraste cada tipo con el mismo propósito.',
    intergeneracional: 'La maestra bordadora y la aprendiz, la hoja y su revisor. En los dos casos el saber pasa cuando alguien mira tu trabajo y sabe nombrar lo que ve.'
  }
};

export default contenido;
