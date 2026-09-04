/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 7
 * (sesión global 7).
 *
 * Auto-generado desde content/guias/8/8-1-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 7,
  titulo: 'Gráficos que no engañan — barras, líneas y circular con el eje en cero',
  resumen: 'Los mismos datos cuentan historias distintas según cómo se dibujen. Hoy haces tres gráficos honestos y desmontas uno engañoso de verdad, con la cerca de Riosucio como advertencia.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Casi todos los gráficos que ves en redes y en noticias tienen alguna decisión escondida. Saber dónde empieza el eje te protege de creer lo que alguien quiere que creas.',
    preguntaDetonante: 'Cuando hagas un gráfico de las notas con el eje empezando en 3,0, ¿qué le estás mostrando a quien lo mira?',
    activacion: {
      titulo: 'El eje que empieza en 48',
      descripcion: 'En 3 minutos, escribe dos valores en Excel, 50 y 52, haz un gráfico de barras y cambia el mínimo del eje a 48. ¿Qué tan grande parece ahora la diferencia? Vuelve a cero y compara.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 6 escribiste fórmulas compuestas con paréntesis claros.',
      siguiente: 'En la sesión 8 la hoja avisa sola con formato condicional y validación de datos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Gráfico de barras',
      definicion: 'Compara valores entre categorías. Responde quién tiene más o menos.',
      ejemplo: 'Ventas de la tienda por día de la semana, una barra por día.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Gráfico de líneas',
      definicion: 'Muestra cómo cambia un valor en el tiempo. Los puntos van en orden cronológico.',
      ejemplo: 'Temperatura de cada día del mes, unida por una línea.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Gráfico circular',
      definicion: 'Muestra qué parte del total es cada categoría. Solo sirve con pocas tajadas.',
      ejemplo: 'En qué se fue la mesada, tienda, transporte y ahorro. Con diez tajadas ya no se lee.',
      categoria: 'Los tres tipos'
    },
    {
      termino: 'Eje desde cero',
      definicion: 'El eje vertical de las barras empieza en cero para que el tamaño de cada barra sea proporcional al valor.',
      ejemplo: 'Con el eje en 48, la barra de 52 parece el doble de la de 50. Con el eje en cero, casi iguales.',
      categoria: 'Honestidad'
    },
    {
      termino: 'Las seis trampas',
      definicion: 'Eje que no empieza en cero, escalas distintas, 3D, demasiadas categorías, colores que sugieren orden, y sin título, unidades o fuente.',
      ejemplo: 'Un circular en 3D con ocho tajadas usa dos trampas a la vez.',
      categoria: 'Honestidad'
    },
    {
      termino: 'Las cinco reglas',
      definicion: 'Tipo según la pregunta, eje desde cero, título, ejes con unidades y fuente de los datos.',
      ejemplo: 'Un gráfico que cumple las cinco se entiende sin que nadie lo explique.',
      categoria: 'Honestidad'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes cuándo un gráfico engaña?',
      instrucciones: 'Cinco preguntas para verificar que eliges el tipo correcto y reconoces las trampas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Quieres mostrar cómo cambió la temperatura de Cartago durante el mes. ¿Qué gráfico usas?',
          opciones: [
            'Circular, porque cada día es una parte del mes.',
            'Barras, porque compara cada día con los demás.',
            'Líneas, porque muestra el cambio en el tiempo.',
            'Ninguno, porque la temperatura no se grafica.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Los cambios en el tiempo se ven en líneas, con los días en orden.',
          feedbackIncorrecto: 'Los días tienen orden en el tiempo. Eso lo muestra el gráfico de líneas, no el circular ni las barras.'
        },
        {
          enunciado: 'Dos barras muestran 50 y 52. Con el eje empezando en 48, ¿qué pasa?',
          opciones: [
            'La diferencia parece enorme, aunque es de solo dos puntos.',
            'Las barras se ven iguales, porque el eje no cambia nada.',
            'Excel muestra un error, porque el eje debe empezar en cero.',
            'La barra de 50 desaparece del gráfico.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Con el eje en 48, la barra de 52 parece el doble de la de 50. Es la trampa más común.',
          feedbackIncorrecto: 'Excel no da error y las barras sí cambian. Con el eje en 48, dos puntos de diferencia parecen una montaña.'
        },
        {
          enunciado: '¿Cuál de estos gráficos circulares se puede leer?',
          opciones: [
            'Uno con doce tajadas en 3D.',
            'Uno con diez tajadas del mismo color.',
            'Uno con cuatro tajadas, plano y con porcentajes.',
            'Uno con veinte tajadas y una leyenda muy larga.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Pocas tajadas, sin 3D y con porcentajes, ese circular sí se lee.',
          feedbackIncorrecto: 'Con muchas tajadas o en 3D, nadie distingue las partes. El circular solo funciona con pocas categorías y plano.'
        },
        {
          enunciado: 'Un gráfico de prensa no tiene título ni unidades en los ejes. ¿Qué regla rompe y qué pasa?',
          opciones: [
            'Rompe la regla del tipo, y el gráfico se ve feo.',
            'Rompe la del eje en cero, y exagera las diferencias.',
            'No rompe ninguna, porque el texto del artículo lo explica.',
            'Rompe las de título y unidades, y cada lector interpreta lo que quiere.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Sin título ni unidades, el gráfico deja de ser un dato y se vuelve una opinión de quien lo mira.',
          feedbackIncorrecto: 'El artículo no reemplaza al gráfico. Sin título ni unidades, cada quien lee lo que quiere.'
        },
        {
          enunciado: '¿Cuál de estas frases es una crítica con las reglas y no con el gusto?',
          opciones: [
            'Me parece que el gráfico se ve muy recargado.',
            'El eje empieza en 2,5 y hace ver la diferencia más grande de lo que es.',
            'Los colores no combinan con el resto de la página.',
            'Yo habría usado un gráfico más bonito.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Nombra la regla, describe el hecho y dice el efecto. Las otras son gustos.',
          feedbackIncorrecto: '«Recargado», «no combinan» y «más bonito» son gustos. La crítica con reglas dice dónde empieza el eje y qué efecto tiene.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué gráfico de los que ves cada semana en redes revisarías ahora con las cinco reglas?',
    transferencia: 'La próxima vez que un gráfico te alarme, busca dónde empieza el eje y cuántas categorías tiene antes de compartirlo.',
    cierre: 'Los mismos datos, dos plazas. El eje en cero es la forma de quitar la cerca.'
  },
  saberAncestral: {
    saber: 'Riosucio, en Caldas, nació de dos pueblos que no se querían. Quiebralomo, de mineros blancos, negros y mulatos, y La Montaña, de indígenas. Cada uno puso su plaza y su iglesia a una cuadra del otro. Entre las dos levantaron una cerca que los separó durante más de veinte años; los días de mercado se insultaban de lado a lado (Ministerio de Cultura, 2011). En 1846 un decreto los fusionó, y de aquellos insultos salió el verso burlón que hoy es el Carnaval. Fíjate en la cerca. La misma ciudad, vista desde una plaza, era un pueblo; vista desde la otra, era otro. Un gráfico hace lo mismo con los datos. Los mismos números, con el eje empezando en cero, cuentan una historia; con el eje empezando en 50, cuentan otra. La cara de exclusión: el relato oficial del Eje Cafetero se contó como el de colonos blancos y respetables. Ese relato dejó por fuera a los indígenas y a los negros que ya estaban ahí (Appelbaum, 2007). Hoy vas a hacer gráficos que no levanten cercas: que dejen ver los datos como son.',
    fuente: 'Riosucio (Caldas) · dos plazas y una cerca',
    referencia: 'Ministerio de Cultura de Colombia. (2011). Plan Especial de Salvaguardia del Carnaval de Riosucio, pp. 12--13, 20 y 41.',
    preguntaPuente: 'Desde cada plaza, Riosucio parecía otro pueblo. Cuando hagas un gráfico de las notas del salón con el eje empezando en 3,0, ¿qué pueblo le estás mostrando a quien lo mira? ¿Y cómo se vería con el eje en cero?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Dos plazas y una cerca',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁',
        '✏️'
      ],
      titulo: 'Actividad 1 · Tres gráficos, un solo dato',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Tres gráficos honestos',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Un gráfico engañoso de verdad',
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
      titulo: 'Tres gráficos, un solo dato',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los tres gráficos que proyecta tu docente. Son los mismos datos, dibujados de tres maneras.',
        'Escribe cuál entiendes mejor a primera vista.',
        'Escribe cuál parece exagerar las diferencias y por qué.',
        'Escribe cuál confunde más que aclara.',
        'Anota una regla que sacarías de lo que viste.'
      ],
      cuaderno: {
        titulo: 'Tres gráficos, un solo dato',
        formato: 'tabla de 3 filas y 2 columnas (gráfico / qué me hace ver o creer), más una regla propia',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres filas están llenas.',
        'Tu regla dice algo que un compañero podría aplicar.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'Tres gráficos honestos sobre tu tabla',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, abran la tabla limpia de la sesión 3 y elijan una columna numérica con su categoría.',
        'Seleccionen el rango, Insertar, Gráfico, y hagan uno de barras.',
        'Con los mismos datos hagan uno de líneas y uno circular.',
        'A cada uno pónganle título que diga qué muestra, ejes con unidades y eje vertical desde cero.',
        'Escriban un párrafo por gráfico, qué pregunta responde mejor y por qué.'
      ],
      cuaderno: {
        titulo: 'Tres gráficos honestos',
        formato: 'tres párrafos de tres líneas, uno por gráfico, con la pregunta que responde mejor, y una marca del mejor para esos datos',
        extension: 'media página'
      },
      criterios: [
        'Los tres gráficos cumplen las cinco reglas.',
        'Los tres párrafos nombran una pregunta distinta.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Un gráfico engañoso de verdad',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Busca un gráfico en un periódico, una revista, una publicidad o una red social. Si no hay conexión, tu docente trae varios.',
        'Pásalo por las cinco reglas y marca cuáles cumple y cuáles no.',
        'Nombra la trampa, cuál de las seis usa, y escribe qué impresión falsa deja.',
        'Propón la corrección, qué cambio pequeño lo haría honesto.',
        'Revisa los tres gráficos de tu pareja con las cinco reglas y anota lo que falte.'
      ],
      cuaderno: {
        titulo: 'Un gráfico engañoso de verdad',
        formato: 'el gráfico pegado o dibujado, más tres líneas (trampa / impresión falsa / corrección), más las reglas que les faltan a los gráficos de tu pareja',
        extension: 'media página'
      },
      criterios: [
        'Nombraste la trampa con una de las seis y tu corrección cabe en una línea.',
        'Tu pareja recibió al menos una regla que le faltaba.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.5.4',
      lente: 'lente del nosotros',
      cita: 'Es ingenuo creer que la información se lee sola, como si no hubiera conflictos detrás de cada dato.',
      preguntaEspejo: '¿Quién decidió dónde empieza el eje del gráfico que vi hoy, y qué ganaba con eso?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 45 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Cuando alguien se baña rápido, no digas que se baña mal: di que se baña rápido. Describe el hecho antes de juzgarlo.',
      preguntaEspejo: '¿Describí el gráfico antes de juzgarlo, o juzgué primero y describí después?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), Prefacio',
      lente: 'lente de la infoesfera',
      cita: 'Tememos y rechazamos aquello a lo que no logramos darle sentido.',
      preguntaEspejo: '¿Mi gráfico le da sentido al dato, o solo lo hace ver grande?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a mirar dónde empieza el eje antes de creerle a un gráfico. Es una defensa que se vuelve costumbre.',
    emocional: 'Un gráfico exagerado produce alarma. Describirlo antes de reaccionar es la pausa que te deja pensar.',
    ciudadana: 'Las cifras públicas llegan casi siempre en gráficos. Saber nombrar la trampa es poder pedir el dato como es.',
    local: 'Riosucio vivió veinte años con una cerca entre dos plazas. Un eje mal puesto es una cerca entre el dato y quien lo mira.',
    intergeneracional: 'El Carnaval de Riosucio convirtió los insultos de la cerca en verso. Tus gráficos honestos también son una forma de dejar el relato limpio para quien venga.'
  }
};

export default contenido;
