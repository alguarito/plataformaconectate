/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/7/7-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 2,
  titulo: '¿Qué es un algoritmo? — la receta paso a paso',
  resumen: 'Un algoritmo es una secuencia ordenada de pasos para resolver un problema o realizar una tarea.',
  duracionMin: 90,
  subtema: '¿Qué es un algoritmo? — la receta paso a paso',
  preLectura: {
    porQueImporta: 'El producto es ese algoritmo + autoevaluación.',
    preguntaDetonante: 'Si tu mejor amigo nunca ha hecho una arepa, ¿qué tan detallada debería ser tu receta para que él la haga bien? ¿Cuántos pasos crees que necesita?',
    activacion: {
      titulo: '2 recetas: ¿cuál sí funciona?',
      descripcion: 'Actividad 1 · ANALIZA — 2 recetas: ¿cuál sí funciona?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres qué es un algoritmo, aprendes las 5 características, escribes tu primer algoritmo, lo verificas.',
      siguiente: 'Esta semana, escribe en tu cuaderno un segundo algoritmo de otra tarea cotidiana.'
    }
  },
  conceptosClave: [
    {
      termino: 'Algoritmo',
      definicion: 'Secuencia ordenada de pasos para resolver un problema o realizar una tarea. La palabra viene del matemático persa Al-Juarismi (siglo IX). Hoy los algoritmos están en computadores, recetas, manuales, tejidos: en todas partes.',
      ejemplo: 'Una receta de pan: ingredientes (entrada) + pasos (proceso) + pan terminado (salida). Un programa de Roblox: comandos del jugador (entrada) + reglas del juego (proceso) + acciones del personaje (salida).',
      emoji: '📜'
    },
    {
      termino: '5 características de un buen algoritmo',
      definicion: 'Las 5 reglas que todo buen algoritmo cumple: (1) CLARO (sin ambigüedad), (2) FINITO (termina), (3) DETERMINISTA (mismo input mismo output), (4) EFICAZ (logra la meta), (5) ORDENADO (pasos en secuencia correcta). Faltando una, el algoritmo falla.',
      ejemplo: 'Receta \'cocinar bien\' no es CLARA. Receta sin fin no es FINITA. Receta que a veces sirve y a veces no es no DETERMINISTA. Bailar mientras lavas no es EFICAZ. Secar antes de enjuagar no es ORDENADO.',
      emoji: '✅'
    },
    {
      termino: 'Estructura entrada-proceso-salida',
      definicion: 'Todo algoritmo tiene 3 partes: (1) ENTRADA (lo que necesitas para empezar), (2) PROCESO (los pasos), (3) SALIDA (el resultado). Identificar las 3 partes claramente te ayuda a escribir mejores algoritmos.',
      ejemplo: 'Algoritmo cepillarse: ENTRADA cepillo+crema+agua; PROCESO mojar cepillo, poner crema, cepillar 2 min, enjuagar; SALIDA boca limpia. Las 3 partes claras.',
      emoji: '🔄'
    },
    {
      termino: 'Al-Juarismi',
      definicion: 'Matemático persa del siglo IX. Su nombre dio origen a la palabra \'algoritmo\'. Enseñó a Europa los procedimientos matemáticos sistemáticos (sumas, restas, multiplicaciones paso a paso). Sus libros se tradujeron al latín y formaron base de la matemática europea moderna.',
      ejemplo: 'Cuando hoy decimos \'algoritmo\' estamos honrando a Al-Juarismi (Muhammad ibn Musa al-Khwarizmi). Su trabajo del siglo IX sigue vivo en cada programa de computador.',
      emoji: '🕌'
    },
    {
      termino: 'Determinista',
      definicion: 'Característica de un algoritmo: si lo ejecutas con la misma entrada, siempre da el mismo resultado. Lo opuesto sería \'aleatorio\' o \'imprevisible\'. Los algoritmos buenos son deterministas (siempre dan el mismo output con el mismo input).',
      ejemplo: 'Algoritmo determinista: \'sumar 5 + 3\' siempre da 8. Algoritmo NO determinista: \'lanzar moneda\' da cara o sello al azar. Las recetas y programas son deterministas.',
      emoji: '🎯'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué es un algoritmo?',
      instrucciones: '5 preguntas para verificar que dominas la definición y las 5 características.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas frases es algoritmo?',
          opciones: [
            '\'Lavarse las manos: agua y jabón. Hacerlo bien.\'',
            '\'Lavarse las manos: (1) abrir grifo (2) mojar (3) jabonar (4) frotar 20s (5) enjuagar (6) cerrar grifo (7) secar.\'',
            '\'Tener las manos limpias.\'',
            '\'Higiene importante.\''
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La opción correcta cumple las 5 características: pasos claros, ordenados, finitos, deterministas, eficaces. Las otras son demasiado vagas para ser algoritmos.',
          feedbackIncorrecto: 'Un algoritmo es secuencia ordenada de pasos claros. La opción correcta tiene 7 pasos numerados con verbos concretos. Las otras son vagas.'
        },
        {
          enunciado: 'Una receta dice \'cocinar a fuego medio\'. ¿Qué característica falla?',
          opciones: [
            'No es finita.',
            'No es clara (¿qué es \'medio\'? ¿qué fuego? ¿cuánto tiempo?).',
            'No tiene orden.',
            'No tiene entrada.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. \'Fuego medio\' es ambiguo. Para un algoritmo claro: \'fuego a temperatura 5/10 durante 15 minutos\'. Lo claro elimina ambigüedad.',
          feedbackIncorrecto: 'Falla la claridad. \'Fuego medio\' es ambiguo. Lo claro especificaría temperatura exacta y tiempo exacto. Sin claridad, el algoritmo se ejecuta distinto cada vez.'
        },
        {
          enunciado: '¿De dónde viene la palabra \'algoritmo\'?',
          opciones: [
            'Del inglés \'algorithm\'.',
            'Del matemático persa Al-Juarismi del siglo IX.',
            'Es palabra moderna inventada con la computación.',
            'Del griego antiguo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Al-Juarismi (Muhammad ibn Musa al-Khwarizmi) fue matemático persa del siglo IX. Su nombre latinizado dio \'algoritmo\'. Su trabajo del 800 d.C. sigue vivo hoy.',
          feedbackIncorrecto: 'De Al-Juarismi (siglo IX). Su trabajo en matemática sistemática llegó a Europa, su nombre se latinizó \'algoritmus\' y de ahí \'algoritmo\'. 1200 años de historia.'
        },
        {
          enunciado: 'Tu algoritmo tiene 6 pasos pero el orden está mal (paso 5 va antes que paso 3 lógicamente). ¿Qué característica falla?',
          opciones: [
            'No es finito.',
            'No es ordenado.',
            'No tiene entrada.',
            'Es demasiado largo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Orden incorrecto = falla la característica \'ordenado\'. Los pasos correctos en mal orden no resuelven el problema. Reorganiza.',
          feedbackIncorrecto: 'Característica ORDENADO. Los pasos correctos en mal orden no producen el resultado. Secar antes de enjuagar deja manos con jabón. Orden importa.'
        },
        {
          enunciado: 'Un algoritmo \'tirar moneda y decidir\' siempre da resultado distinto. ¿Es determinista?',
          opciones: [
            'Sí, porque tiene pasos.',
            'No, porque no produce el mismo resultado con la misma entrada (tirar moneda).',
            'Sí, porque siempre lanzas moneda.',
            'Depende de la moneda.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Determinista = mismo input → mismo output siempre. Tirar moneda da cara o sello al azar, así que NO es determinista. Los algoritmos buenos sí lo son.',
          feedbackIncorrecto: 'NO determinista. Determinista = predecible (mismo input → mismo output). Tirar moneda es aleatorio. Los algoritmos de programación son deterministas (no usan azar).'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Si yo enseñara algo que sé hacer a un primo más pequeño, ¿lo enseñaría con la claridad de doña Mercedes, o con vaguedad?',
    transferencia: 'Esta semana, escribe en tu cuaderno un segundo algoritmo de otra tarea cotidiana.',
    cierre: 'Al terminar la clase: (1) podrás identificar qué es un algoritmo y dónde se usa; (2) sabrás explicar las 5 características de un buen algoritmo; (3) podrás aplicar la estructura entrada-proceso-salida; (4) habrás creado tu primer algoritmo en lenguaje natural.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de Cartago siempre decía: "El que se sabe la receta exacta, hornea pan. El que la sabe a medias, hornea decepción." En la vereda La Plata, las recetas de panadería se transmitían exactas, paso a paso, sin saltarse nada. Si una abuela enseñaba a su nieta a hacer pan de yuca, la receta era: "1 libra de yuca rallada. 1 huevo. 200 gramos de queso. 1 cucharadita de sal. (1) Pelar y rallar la yuca. (2) Mezclar la yuca con el huevo. (3) Agregar el queso rallado. (4) Amasar con las manos hasta que quede uniforme. (5) Formar bolitas del tamaño de un huevo. (6) Hornear a 180° por 20 minutos. (7) Sacar y dejar enfriar.". La nieta podía hornear el mismo pan que su abuela porque la receta era exacta, completa y ordenada. Si alguien decía "hornee como Dios le ayude", la nieta dañaba el pan. Una receta clara es un algoritmo. Hoy en programación llamamos algoritmo exactamente a eso: una receta paso a paso para resolver un problema, lo suficientemente clara para que cualquiera (o un computador) pueda ejecutarla.',
    preguntaPuente: 'Si tu mejor amigo nunca ha hecho una arepa, ¿qué tan detallada debería ser tu receta para que él la haga bien? ¿Cuántos pasos crees que necesita?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la transmisión del saber)',
      lente: 'lente del nosotros',
      cita: '"El saber que se transmite paso a paso es saber que sobrevive generaciones. El que se transmite con vaguedad muere con quien lo tuvo."',
      preguntaEspejo: 'Si yo enseñara algo que sé hacer a un primo más pequeño, ¿lo enseñaría con la claridad de doña Mercedes, o con vaguedad?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador del orden disciplinado)',
      lente: 'lente del cuidado interior',
      cita: '"Pasos en orden, palabras exactas, fin claro. Esa es la trinidad del trabajo bien hecho."',
      preguntaEspejo: '¿Qué problema actual de mi vida podría resolver mejor si lo pensara como algoritmo?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la algorítmica)',
      lente: 'lente de la infoesfera',
      cita: '"Vivimos rodeados de algoritmos invisibles. El que aprende a escribir uno empieza a entender el mundo digital en que vive."',
      preguntaEspejo: 'Si los algoritmos los escriben personas, ¿quién decide qué algoritmo me recomienda mis videos? ¿Y por qué me debería importar?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar qué es un algoritmo y dónde se usa; (2) sabrás explicar las 5 características de un buen algoritmo; (3) podrás aplicar la estructura entrada-proceso-salida…',
    emocional: 'Las 5 características de un buen algoritmo son disciplina trasladada al pensamiento: claro (palabras exactas), finito (con fin claro), ordenado (en secuencia), eficaz (logra meta), determinista (mismo…',
    ciudadana: 'Doña Mercedes y las abuelas tejedoras del Valle del Cauca enseñaban en pasos exactos porque sabían que solo así el saber sobrevivía.',
    local: 'Antes de salir, verifica con un compañero que él podría ejecutar tu algoritmo solo leyéndolo.',
    intergeneracional: 'Los algoritmos que recomiendan tus videos de TikTok, los que clasifican tus correos como spam, los que ordenan los resultados de Google: los escribieron seres humanos como tú.'
  }
};

export default contenido;
