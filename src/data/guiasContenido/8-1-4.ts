/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/8/8-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 4,
  titulo: 'SUMA, PROMEDIO, MAX y MIN — cuatro cifras para decidir, nunca una sola',
  resumen: 'Cuatro funciones de Excel resumen una columna en cuatro cifras, y el promedio solo engaña. Hoy las calculas a mano, las escribes en Excel y tomas una decisión con cada una, como quien mira el nivel del río en Puerto Alejandría.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Casi todas las decisiones «con datos» que salen mal se tomaron mirando un solo número. Saber qué esconde el promedio te sirve para las notas, para los gastos y para las noticias.',
    preguntaDetonante: 'Cuando calcules el promedio de las notas del salón, ¿qué te va a esconder ese número?',
    activacion: {
      titulo: 'Dos salones, un promedio',
      descripcion: 'En 3 minutos, inventa dos listas de cinco notas que den el mismo promedio, una pareja y otra dispareja. ¿En cuál salón preferirías estar? ¿Por qué el promedio no lo dice?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 3 dejaste una tabla limpia con bitácora.',
      siguiente: 'En la sesión 5 copias fórmulas a muchas celdas con referencias relativas y absolutas.'
    }
  },
  conceptosClave: [
    {
      termino: 'SUMA',
      definicion: 'Suma todos los números de un rango. Responde cuánto hay en total.',
      ejemplo: 'SUMA(B2:B21) sobre la columna de gastos dice cuánto gastaste en la semana.',
      categoria: 'Las cuatro funciones'
    },
    {
      termino: 'PROMEDIO',
      definicion: 'Suma el rango y divide entre la cantidad de valores. Responde cuánto es lo típico. Ignora las celdas vacías, pero cuenta los ceros.',
      ejemplo: 'PROMEDIO(B2:B21) sobre las notas dice cómo le fue al grupo en general, no a cada uno.',
      categoria: 'Las cuatro funciones'
    },
    {
      termino: 'MAX',
      definicion: 'Devuelve el valor más alto del rango. Responde cuál fue el mejor caso.',
      ejemplo: 'MAX de las temperaturas de la semana dice cuál fue el día más caliente.',
      categoria: 'Las cuatro funciones'
    },
    {
      termino: 'MIN',
      definicion: 'Devuelve el valor más bajo del rango. Responde cuál fue el peor caso.',
      ejemplo: 'MIN de las notas señala a quien más necesita acompañamiento.',
      categoria: 'Las cuatro funciones'
    },
    {
      termino: 'Medida resumen',
      definicion: 'Una cifra que representa muchas filas. Sirve para decidir rápido, y engaña si se mira sola.',
      ejemplo: 'Un promedio de 3,5 puede venir de un grupo parejo o de uno con un 5,0 y un 1,0.',
      categoria: 'Cómo se leen'
    },
    {
      termino: 'Las cuatro juntas',
      definicion: 'Regla del oficio, nunca se mira una sola cifra. Suma, promedio, máximo y mínimo responden preguntas distintas.',
      ejemplo: 'Con las cuatro sabes cuánto hay, cuánto es lo típico y qué tan lejos están los extremos.',
      categoria: 'Cómo se leen'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer las cuatro cifras?',
      instrucciones: 'Cinco preguntas para verificar que sabes qué responde cada función y qué esconde el promedio. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu docente pregunta cuánto recaudó la tienda escolar esta semana. ¿Qué función usas?',
          opciones: [
            'PROMEDIO, porque resume toda la semana en una sola cifra.',
            'MAX, porque muestra el mejor día de ventas de la semana.',
            'SUMA, porque responde cuánto en total.',
            'MIN, porque muestra el día más flojo de ventas.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. «Cuánto en total» es SUMA. Las otras tres responden preguntas distintas.',
          feedbackIncorrecto: 'La pregunta es por el total de la semana. Eso lo responde SUMA, no el promedio ni los extremos.'
        },
        {
          enunciado: 'Dos salones tienen promedio 3,5. En uno el máximo es 4,0 y el mínimo 3,0; en el otro, 5,0 y 1,0. ¿Qué es cierto?',
          opciones: [
            'Los dos salones están igual, porque el promedio es el mismo en ambos.',
            'El segundo salón es más disparejo y el promedio esconde al de 1,0.',
            'El primer salón tiene más estudiantes matriculados que el segundo.',
            'El segundo salón tiene mejor rendimiento porque alguien sacó 5,0.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Mismo promedio, situaciones distintas. El máximo y el mínimo muestran lo que el promedio esconde.',
          feedbackIncorrecto: 'El promedio no dice si el grupo es parejo. Con máximo 5,0 y mínimo 1,0, el segundo salón es disparejo y hay alguien que necesita apoyo.'
        },
        {
          enunciado: 'Calculas el promedio de una columna donde tres celdas están vacías y dos tienen cero. ¿Qué hace Excel?',
          opciones: [
            'Ignora las vacías y cuenta los ceros como notas reales.',
            'Cuenta las vacías como cero y también cuenta los ceros.',
            'Ignora las vacías y también ignora todos los ceros.',
            'Muestra un error porque hay celdas vacías dentro del rango.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Las vacías no entran; los ceros sí, y bajan el promedio. Por eso en la sesión 3 no llenaste los vacíos con cero.',
          feedbackIncorrecto: 'Excel no da error ni cuenta las vacías. Las salta, pero los ceros sí los promedia como notas reales.'
        },
        {
          enunciado: 'Escribes =SUMA(B2:B21) y el total sale menor de lo que esperabas. ¿Qué es lo más probable?',
          opciones: [
            'Excel redondeó todos los decimales hacia abajo al sumar.',
            'El rango es demasiado grande para que la función lo procese.',
            'Falta la etiqueta a la izquierda de la celda del resultado.',
            'Alguna celda del rango tiene texto y la función la saltó.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Un número escrito con letras o con espacio de más no entra en la suma. Vuelve a la limpieza de la sesión 3.',
          feedbackIncorrecto: 'Excel no redondea al sumar ni se queja del tamaño. Lo más probable es que haya texto disfrazado de número dentro del rango.'
        },
        {
          enunciado: '¿Cuál de estas frases es una decisión y no solo una lectura del dato?',
          opciones: [
            'El promedio de gastos es 10.000 pesos al día.',
            'Gasté mucho esta semana en la tienda.',
            'Desde el lunes llevo almuerzo de casa dos días a la semana.',
            'Habría que gastar menos en la tienda escolar.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Una decisión dice quién hace qué y cuándo. Las otras son lecturas o deseos.',
          feedbackIncorrecto: '«Gasté mucho» es una lectura; «habría que gastar menos» es un deseo. La decisión dice qué vas a hacer, desde cuándo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de las cuatro cifras te sorprendió, y qué decisión cambió por eso?',
    transferencia: 'La próxima vez que veas un promedio en una noticia o en un boletín, pregúntate cuál sería el máximo, cuál el mínimo y a quién esconde ese número.',
    cierre: 'Un promedio solo es un punto. Las cuatro cifras juntas son el río completo, desde la arena de verano hasta la marca de la creciente.'
  },
  saberAncestral: {
    saber: 'El río La Vieja bordea a Cartago y le pone frontera con Risaralda. Cuando crece, no se lleva la ciudad entera. Se lleva siempre los mismos barrios: Brisas del Río, La Platanera, La Arenera, La Playa, Tierra del Olvido. En marzo de 2022 quedaron bajo el agua cuando el río llegó a 12,3 metros (CiudadRegión, 2022). La gente de la orilla no adivina la creciente: la mira. Puerto Alejandría es el punto al que se va a ver el nivel. Allí se compara cómo está el río hoy contra cómo estaba ayer, y contra la marca de la última vez que se salió. Esa marca es un máximo: el nivel más alto que se recuerda. Y hay también un mínimo: el nivel de verano, cuando se ve la arena. Ninguno de los dos se decide con el promedio. La cara de exclusión es dura: la creciente golpea por clase y por ubicación, no por azar, y quien vive lejos del río no ve la marca. Hoy vas a calcular cuatro cifras sobre tu tabla. Y vas a aprender que el promedio, solo, engaña como engañaría mirar el río «en promedio» cuando ya está a 12 metros.',
    fuente: 'Barrios ribereños de Cartago · el nivel del río en Puerto Alejandría',
    referencia: 'CiudadRegión. (2022, 7 de marzo). Alarma por alto nivel del río La Vieja a su paso por Cartago. CiudadRegión Noticias.',
    preguntaPuente: 'En Puerto Alejandría nadie mira el nivel promedio del río: mira el máximo de la última creciente y el nivel de hoy. Cuando calcules el promedio de las notas del salón, ¿qué te va a esconder ese número? ¿Y qué te dirían el máximo y el mínimo que el promedio no dice?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El nivel del río en Puerto Alejandría',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Las cuatro cuentas a mano',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Las cuatro funciones en Excel',
      duracionMin: 25
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Una decisión por cada cifra',
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
      titulo: 'Las cuatro cuentas a mano',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma diez valores reales de tu tabla limpia, diez notas, diez gastos, diez temperaturas o los minutos que dormiste en diez días.',
        'Con calculadora, sin Excel, calcula la suma de los diez.',
        'Divide esa suma entre diez. Ese es el promedio.',
        'Busca el valor más alto y el más bajo. Son el máximo y el mínimo.',
        'Escribe una línea, cuál de las cuatro cifras te dice más sobre tu situación.'
      ],
      cuaderno: {
        titulo: 'Las cuatro cuentas a mano',
        formato: 'ficha con los diez valores, las cuatro cifras y una línea sobre cuál dice más',
        extension: 'media página'
      },
      criterios: [
        'La suma es mayor que el máximo y el promedio está entre el mínimo y el máximo.',
        'Puedes decir qué hace cada función sin mirar la guía.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Las cuatro funciones en Excel',
      tiempoMin: 25,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, abran la tabla limpia de la sesión 3 y elijan una columna numérica.',
        'En cuatro celdas debajo de la columna escriban SUMA, PROMEDIO, MAX y MIN con el rango entre paréntesis.',
        'En la celda de la izquierda de cada una escriban qué es, Total, Promedio, Máximo, Mínimo.',
        'Comprueben que la suma es mayor que el máximo y que el promedio está entre el mínimo y el máximo.'
      ],
      cuaderno: {
        titulo: 'Las cuatro funciones en Excel',
        formato: 'tabla de 4 filas y 3 columnas (función / fórmula escrita / resultado)',
        extension: 'media página'
      },
      criterios: [
        'Las cuatro fórmulas están escritas con su rango y cada resultado tiene etiqueta.',
        'La comprobación de coherencia da bien.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Una decisión por cada cifra',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Vuelve a tu hoja y mira las cuatro cifras.',
        'Al lado de cada una escribe dos líneas, qué dice el dato y qué harías tú con eso.',
        'Compara el máximo y el mínimo con el promedio. ¿El grupo es parejo o disparejo? Escríbelo.',
        'Cierra con un párrafo de cinco líneas, cuál cifra sirvió más para decidir y por qué.',
        'Guarda la hoja como G8-P1-S4-funciones.xlsx.'
      ],
      cuaderno: {
        titulo: 'Una decisión por cada cifra',
        formato: 'tabla de 4 filas y 3 columnas (cifra / qué dice / qué haría), más el párrafo de cierre',
        extension: 'una página'
      },
      criterios: [
        'Cada cifra tiene su acción escrita.',
        'Dijiste si el grupo es parejo o disparejo.',
        'El párrafo nombra la cifra que sirvió más.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.4.2',
      lente: 'lente del nosotros',
      cita: 'El que queda fuera del sistema tiene un rostro que reclama. Mirarlo es el comienzo de cualquier justicia.',
      preguntaEspejo: '¿Quién es el mínimo de mi tabla, y qué decisión lo tiene en cuenta?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VII, 47 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Mira el curso completo de las cosas, como quien gira con los astros, y no te quedes en un solo punto.',
      preguntaEspejo: '¿Estoy mirando las cuatro cifras, o me quedé con la que me convenía?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Un patrón pequeño solo significa algo si se agregó bien, se comparó con otro y llegó a tiempo.',
      preguntaEspejo: '¿Con qué comparé mi cifra antes de decidir?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a no creerle a una cifra sola. Es una defensa que te va a servir cada vez que alguien te muestre «el promedio».',
    emocional: 'Resististe la tentación de quedarte con la cifra que te convenía. Mirar las cuatro es aceptar lo que no querías ver.',
    ciudadana: 'Cuando una autoridad presenta un promedio, ahora sabes preguntar por el máximo y el mínimo. Ahí suele estar quien queda fuera.',
    local: 'En Puerto Alejandría nadie mira el río «en promedio». Mira el nivel de hoy contra la marca de la última creciente. Tú hiciste lo mismo con tu tabla.',
    intergeneracional: 'La marca de la creciente se la pasan de vecino a vecino. Tus cuatro cifras con su decisión también son una marca que otro puede leer.'
  }
};

export default contenido;
