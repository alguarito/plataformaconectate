/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 1
 * (sesión global 1).
 *
 * Auto-generado desde content/guias/8/8-1-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 1,
  titulo: 'Preguntar antes de calcular — phronesis con datos',
  resumen: 'Antes de sacar el primer promedio, hazle preguntas a la hoja. Hoy aprendes las cinco preguntas que un analista hace antes de calcular, con el cuaderno del fiado como maestro.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Saber leer una hoja de datos te va a servir toda la vida, desde decidir qué red social te conviene hasta votar con criterio. Pero leer datos sin preguntar es peligroso. Te lleva a conclusiones rápidas que la realidad no sostiene.',
    preguntaDetonante: 'La tendera le pregunta al cuaderno antes de sumar. Cuando abras una hoja con 200 filas, ¿qué le vas a preguntar antes del primer promedio?',
    activacion: {
      titulo: 'El dato del bolsillo',
      descripcion: 'En 3 minutos, saca tu celular y mira tu tiempo de pantalla de ayer. ¿Qué pregunta se te ocurre con ese dato? ¿Qué te falta saber para decidir algo sobre tu uso del celular?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En 7.º trabajaste con tablas básicas y comparaste datos de palabras, no de números.',
      siguiente: 'En la sesión 2 vas a ingresar datos en Excel con su tipo correcto, número, texto, fecha, moneda.'
    }
  },
  conceptosClave: [
    {
      termino: 'Registro',
      definicion: 'Una fila completa de la hoja, con todos sus campos. En el cuaderno del fiado, un renglón es un registro, quién, qué día, qué llevó, cuánto vale.',
      ejemplo: '«Camila, 13 años, 8-A, 4,2» es un registro de 4 campos. Si falta uno, el registro está incompleto y debilita el análisis.',
      categoria: 'Cómo se observan los datos'
    },
    {
      termino: 'Variable',
      definicion: 'Lo que cambia de una fila a otra, una columna. Puede ser un número (nota, minutos, pesos) o una categoría (grupo, red social, sí o no).',
      ejemplo: 'En la hoja de 8-A, «nota» es una variable numérica y «grupo» es una variable de categoría.',
      categoria: 'Cómo se observan los datos'
    },
    {
      termino: 'Origen del dato',
      definicion: 'De dónde salió la información, una encuesta, una observación, un registro automático, una copia de otra hoja. Sin origen claro, el dato es difícil de defender.',
      ejemplo: '«Tiempo de pantalla» puede venir de lo que cada uno dijo (poco confiable) o de la app del celular (más confiable). El origen cambia la confianza.',
      categoria: 'Cómo se observan los datos'
    },
    {
      termino: 'Vacío y error de tipo',
      definicion: 'Una celda vacía no es un cero. Un número escrito con letras («dos mil») es texto y no se suma. Los dos fallan en silencio.',
      ejemplo: 'Tres celdas con «ausente» en la columna de notas hacen que Excel promedie a 27 estudiantes y no a 30, sin avisar.',
      categoria: 'Cómo se observan los datos'
    },
    {
      termino: 'Phronesis',
      definicion: 'Palabra griega para la sabiduría práctica, saber decidir bien en un caso concreto, reconociendo lo que no sabes. No es repetir fórmulas, es aplicar criterio.',
      ejemplo: 'La tendera que revisa el cuaderno renglón por renglón antes de cobrar tiene phronesis. El que suma de memoria, no.',
      categoria: 'Cómo se decide con prudencia'
    },
    {
      termino: 'Las cinco preguntas',
      definicion: 'Origen, autor y fecha, tipo de dato, errores y vacíos, pregunta concreta. Se hacen en ese orden, antes de la primera fórmula.',
      ejemplo: 'Antes de promediar las notas del grupo, pregunta quién las recogió, si hay celdas vacías y qué quieres saber con ese promedio.',
      categoria: 'Cómo se decide con prudencia'
    },
    {
      termino: 'Muestra y sesgo',
      definicion: 'La muestra es a quién le preguntaste de verdad. Si solo preguntaste a tus amigos, la muestra está sesgada y no habla por el colegio.',
      ejemplo: 'Una encuesta de tiempo de pantalla respondida por 12 amigos entre sí describe a esos 12, no al grado.',
      categoria: 'Cómo se decide con prudencia'
    },
    {
      termino: 'Limitaciones declaradas',
      definicion: 'Decir abiertamente qué no puede afirmar tu análisis, muestra pequeña, periodo corto, columna dudosa. Es honestidad profesional, no debilidad.',
      ejemplo: '«Estos datos vienen de 30 estudiantes de un solo salón en una semana; no describen al colegio».',
      categoria: 'Cómo se decide con prudencia'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Le preguntaste a la hoja?',
      instrucciones: 'Cinco preguntas para verificar que reconoces cuándo un cálculo es prudente y cuándo es un atajo peligroso. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'La hoja de notas de 8-A tiene tres celdas con la palabra «ausente». Si sacas el promedio sin mirar, ¿qué pasa?',
          opciones: [
            'Excel cuenta cada «ausente» como un cero y el promedio del grupo baja.',
            'Excel muestra un mensaje de error y se niega a calcular el promedio.',
            'Excel salta esas celdas sin avisar y promedia a menos estudiantes.',
            'Tres celdas no cambian nada en un grupo de 30.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Excel salta el texto en silencio. El promedio sale de 27 estudiantes, no de 30, y nadie te avisa. Por eso miras antes.',
          feedbackIncorrecto: 'Excel no avisa ni cuenta el texto como cero. Simplemente lo salta, y el promedio queda hecho con menos estudiantes de los que crees.'
        },
        {
          enunciado: 'Te entregan una hoja con 200 filas de gastos de la tienda escolar. ¿Cuál es la primera pregunta?',
          opciones: [
            '¿De dónde vienen los datos y quién los recogió?',
            '¿Qué gráfico se ve mejor en la presentación final del grupo?',
            '¿Cuál es el promedio de gasto por día en la tienda escolar?',
            '¿Qué fórmula avanzada puedo usar?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Origen y autor van primero. Sin eso, cualquier promedio es un número sin respaldo.',
          feedbackIncorrecto: 'Gráficos, promedios y fórmulas vienen después. La primera pregunta es de dónde salió la hoja y quién la hizo.'
        },
        {
          enunciado: 'Una encuesta de tiempo de pantalla la respondieron 12 estudiantes, todos amigos de quien la hizo. ¿Cuál frase es honesta?',
          opciones: [
            'Con 12 respuestas ya se sabe lo que pasa en todo el colegio.',
            'Los datos hablan solos; no hace falta explicar nada.',
            'Mejor no decir cuántos respondieron para que el trabajo no se vea flojo.',
            'Describe solo a esos 12, que además son amigos.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Decir cuántos fueron y que son un grupo cerrado es declarar la limitación. Eso es honestidad con datos.',
          feedbackIncorrecto: 'La frase honesta declara la muestra, doce personas y amigas entre sí. Esconderlo o generalizar es engañar al lector.'
        },
        {
          enunciado: 'En la columna «precio» aparece «dos mil» escrito con letras. ¿Qué haces?',
          opciones: [
            'Se suma igual; Excel entiende el texto.',
            'Es un error de tipo; se corrige o se deja fuera, y se anota.',
            'Se borra la fila completa sin anotar nada en la ficha.',
            'Se pasan todos los precios a texto para que queden iguales entre sí.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Texto donde va un número es un error de tipo. Lo corriges si sabes el valor, o lo dejas fuera y lo escribes en «dejo fuera».',
          feedbackIncorrecto: 'Excel no suma palabras, y borrar sin anotar esconde el problema. La respuesta prudente es reconocer el error de tipo y decir qué hiciste con él.'
        },
        {
          enunciado: '¿Qué hace la tendera que muestra phronesis con su cuaderno del fiado?',
          opciones: [
            'Cobra de memoria para no perder tiempo con el cuaderno.',
            'Suma rápido para atender al siguiente cliente de la fila.',
            'Revisa renglón por renglón y sabe a quién no le fía.',
            'Le fía a todo el mundo para tener más datos.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Revisar antes de sumar y saber quién no está en el cuaderno, eso es preguntar antes de calcular.',
          feedbackIncorrecto: 'La phronesis no es rapidez ni memoria. Es revisar el registro antes de sacar la cuenta y saber quién quedó fuera.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Recuerdas una vez que decidiste algo «con datos» y después resultó mal? ¿Qué te faltó preguntar antes de decidir?',
    transferencia: 'En tu próxima decisión cotidiana (qué comprar, qué red usar, cómo organizar tu tiempo) pregúntate antes «¿qué dato me serviría?» y «¿qué no me dice ese dato?». Conviértelo en costumbre.',
    cierre: 'Saber de datos no es saber más números, es saber qué preguntarles. La tendera lo hace con su cuaderno; tú, con tu hoja.'
  },
  saberAncestral: {
    saber: 'En muchas tiendas de barrio de Cartago todavía existe el cuaderno del fiado. Cada renglón guarda cuatro datos: quién llevó, qué día, qué llevó y cuánto vale. Cuando la familia viene a pagar, la tendera no suma de una. Primero le pregunta al cuaderno. ¿Esta letra es mía o de mi hijo? ¿Este cinco es un cinco o un tres? ¿Falta el sábado? ¿Estoy cobrando la quincena o el mes? Solo después saca la cuenta. Una socióloga estudió el fiado en un pequeño negocio de Cali. Encontró que fiar es un pacto de confianza entre vecinos, sostenido por un cuaderno que se revisa y se tacha (Martínez Benavides, 2021). «Miremos el cuaderno» resuelve la discusión que la memoria sola no resuelve. Ahí está lo importante: el registro vale porque cualquiera puede ponerlo a prueba. Pero el cuaderno tiene una cara de exclusión: a quien la tendera no conoce, no le fía. Solo cuenta a los que ya estaban adentro. Preguntar antes de sumar y saber quién falta en la lista: eso vas a hacer hoy con una hoja de datos.',
    fuente: 'Cuaderno del fiado · tiendas de barrio',
    referencia: 'Martínez Benavides, A. (2021). Circuitos crediticios: fiado y trabajo relacional en un pequeño negocio en Cali, Colombia. Estudios Sociológicos de El Colegio de México, 39(116), 467--494.',
    preguntaPuente: 'La tendera le pregunta al cuaderno antes de sumar. Cuando abras una hoja con 200 filas, ¿qué le vas a preguntar antes del primer promedio? ¿Y quién no aparece en esas filas?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El cuaderno del fiado',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁',
        '✏️'
      ],
      titulo: 'Actividad 1 · Mira la hoja antes de tocarla',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · Las cinco preguntas',
      duracionMin: 35
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Decide qué calcular',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres voces y tu compromiso',
      duracionMin: 5
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Mira la hoja antes de tocarla',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Recibe la hoja de datos que te entrega o proyecta tu docente, notas del último parcial, tiempo de pantalla del salón o gastos de la tienda escolar.',
        'Mírala 5 minutos sin calcular nada. Ni promedios, ni sumas.',
        'Anota qué columnas tiene y cuántas filas hay.',
        'Marca al menos un dato raro, una celda vacía, un texto donde va un número, un valor imposible.',
        'Escribe una pregunta que te gustaría responder con esos datos.'
      ],
      cuaderno: {
        titulo: 'Primera mirada',
        formato: 'ficha de 4 casillas, columnas, filas, datos raros, mi pregunta',
        extension: 'media página'
      },
      criterios: [
        'Tu ficha tiene las cuatro casillas llenas.',
        'Puedes señalar con el dedo un dato raro y decir por qué es raro.',
        'Tu pregunta se puede responder con esas columnas, no con otras.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Hazle las cinco preguntas a tu hoja',
      tiempoMin: 25,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, toma la hoja que miraste en la Actividad 1.',
        'Respondan en una línea de dónde viene y quién la recogió. Si no saben, escriban «no se sabe», también es una respuesta.',
        'Recorran columna por columna y anoten el tipo de dato (número, texto, fecha) y cuántas celdas vacías o raras hay.',
        'Escriban la pregunta concreta que quieren responder con esos datos.',
        'Marquen cada columna con C (de confianza), D (dudosa) o X (de descarte) y digan por qué en cinco palabras.'
      ],
      cuaderno: {
        titulo: 'Las cinco preguntas',
        formato: 'tabla de 5 filas y 2 columnas (pregunta / respuesta), más la lista de columnas con su letra C, D o X',
        extension: 'media página; cada respuesta de 1 a 2 renglones'
      },
      criterios: [
        'Las cinco preguntas tienen respuesta, aunque alguna sea «no se sabe».',
        'Cada columna de la hoja tiene su letra C, D o X con una razón.',
        'Tu pareja puede leer tu tabla y decir, sin preguntarte nada, si confiaría en un promedio de esa hoja.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Decide qué calcular y qué dejar fuera',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Relee las respuestas de las cinco preguntas. Tu pareja puede opinar, pero escribes tú.',
        'Elige la pregunta que sí se puede responder con confianza y subráyala.',
        'Escribe qué vas a calcular (promedio, suma, conteo, mínimo, máximo) y por qué sirve para tu pregunta.',
        'Escribe qué dejas fuera y por qué, una columna dudosa, celdas vacías, un dato que no entiendes.',
        'Cierra con un párrafo de 4 renglones, cuántas filas hay, de qué periodo son y a quién sí y a quién no describen.'
      ],
      cuaderno: {
        titulo: 'Decido qué calcular',
        formato: 'ficha de 4 piezas, pregunta elegida, calculo, dejo fuera, párrafo de cierre',
        extension: '1 página'
      },
      criterios: [
        'Cada cálculo tiene una razón escrita al lado.',
        'Hay al menos una cosa que dejas fuera y dices por qué.',
        'El párrafo dice cuántas filas hay y de qué periodo son.',
        'Lo leíste en voz alta y suena honesto, no defensivo.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977)',
      lente: 'lente del nosotros',
      cita: 'Quien queda fuera del sistema tiene rostro y voz. Mirarlo es el primer paso para no repetir la exclusión.',
      preguntaEspejo: '¿Quién no aparece en mi hoja? ¿Qué cambiaría en mi cálculo si estuviera?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 21 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Si alguien te muestra que estás equivocado, cambia de camino con gusto. Lo que daña no es el error: es aferrarse a él.',
      preguntaEspejo: '¿Estoy leyendo los datos como son, o como me gustaría que fueran para darme la razón?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Un patrón pequeño solo significa algo si se agregó bien, se comparó con otro y llegó a tiempo.',
      preguntaEspejo: '¿Mi cálculo agrega bien, compara con algo y llega a tiempo? ¿O es un número solo?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste que un dato no es una decisión, es un insumo. Lo que conecta el número con la acción es preguntar antes.',
    emocional: 'Resististe la tentación de la respuesta rápida. Distinguir lo que el dato dice de lo que no dice es paciencia que se entrena.',
    ciudadana: 'Ignorar los datos es irresponsable, pero creerles a ciegas es ingenuo. Pedir que un promedio diga a quién dejó fuera es ciudadanía con datos.',
    local: 'Conectaste el cuaderno del fiado de las tiendas de Cartago con tu próxima hoja de Excel. Son saberes que dialogan, no que se reemplazan.',
    intergeneracional: 'La tendera con su cuaderno y el analista con su hoja hacen lo mismo, preguntar antes de sumar. Hoy heredas esa costumbre en formato digital.'
  }
};

export default contenido;
