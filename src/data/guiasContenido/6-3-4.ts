/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/6/6-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 4,
  titulo: 'Listas, viñetas y numeración — ordenar la información para que se entienda',
  resumen: 'Una lista es un conjunto de cosas presentadas en líneas separadas, una debajo de otra, en vez de en un párrafo seguido.',
  duracionMin: 90,
  subtema: 'Listas, viñetas y numeración — ordenar la información para que se entienda',
  preLectura: {
    porQueImporta: 'El producto es ese documento + la reescritura del párrafo en el cuaderno.',
    preguntaDetonante: 'Si te dan a leer un examen con preguntas separadas por punto y línea aparte, vs un examen con todas las preguntas en una sola masa de texto, ¿cuál te tomas el tiempo de hacer bien? ¿Por qué?',
    activacion: {
      titulo: 'Reescribe un párrafo como lista',
      descripcion: 'Actividad 1 · ANALIZA — Reescribe un párrafo como lista (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: comparas un párrafo confuso con su lista, aprendes los 3 tipos con sus reglas de uso, escribes tus listas reales, y armas el documento.',
      siguiente: 'Esta semana, en cualquier documento que escribas, busca si algo se entiende mejor como lista.'
    }
  },
  conceptosClave: [
    {
      termino: 'Lista con viñetas (bullets)',
      definicion: 'Lista donde cada ítem lleva un símbolo al inicio (punto, círculo, guion). Se usa cuando el orden de los ítems no importa. Es la lista más usada en presentaciones, blogs y resúmenes.',
      ejemplo: '"Mis 5 frutas favoritas: • banano • mango • piña • lulo • maracuyá". El orden no importa: puedo cambiarlos y la información sigue siendo la misma.',
      emoji: '•'
    },
    {
      termino: 'Lista numerada',
      definicion: 'Lista donde cada ítem lleva un número (1, 2, 3...) o letra (a, b, c...). Se usa cuando el orden de los ítems SÍ importa: pasos, secuencias, jerarquías, rankings.',
      ejemplo: '"Para abrir Word: 1. Encender el computador, 2. Esperar a que cargue, 3. Buscar Word en el menú inicio, 4. Hacer clic. Si cambias el orden, no funciona.',
      emoji: '1️⃣'
    },
    {
      termino: 'Lista multinivel (jerárquica)',
      definicion: 'Lista que contiene listas dentro de listas, con sangría visible. Cada nivel más profundo se desplaza un poco a la derecha. Sirve para mostrar jerarquías o cuando un ítem se divide en sub-ítems.',
      ejemplo: '1. Tecnología • 1.1 Hardware • 1.2 Software (la sangría en 1.1 y 1.2 muestra que son sub-temas de Tecnología). Tab mete adentro, Shift+Tab saca afuera.',
      emoji: '📑'
    },
    {
      termino: 'Tab (tecla)',
      definicion: 'La tecla con dos flechas opuestas, a la izquierda del teclado. En listas multinivel sirve para meter un ítem un nivel adentro (más sangría). Shift+Tab lo saca un nivel (menos sangría).',
      ejemplo: 'Estás en "1. Tecnología", presionas Enter, escribes "Hardware". Presionas Tab y "Hardware" se vuelve "1.1 Hardware". Tab adentro, Shift+Tab afuera.',
      emoji: '↹'
    },
    {
      termino: 'Formato gramatical paralelo',
      definicion: 'Regla de las listas: todos los ítems deben tener la misma estructura gramatical. Si el primero empieza con verbo, todos empiezan con verbo. Si son sustantivos, todos son sustantivos. Esto se ve profesional y se lee fluido.',
      ejemplo: 'Bien: "Lavar, Cortar, Cocinar". Mal: "Lavar las verduras, Después se cortan, Cocción en sartén" (mezcla verbo en infinitivo + verbo pasivo + sustantivo).',
      emoji: '📏'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer listas en digital?',
      instrucciones: '5 preguntas para verificar que dominas los 3 tipos de listas y sus reglas.',
      preguntas: [
        {
          enunciado: 'Vas a escribir tus 5 películas favoritas. ¿Qué tipo de lista usas?',
          opciones: [
            'Numerada (1, 2, 3, 4, 5).',
            'Con viñetas (•, •, •, •, •).',
            'Multinivel.',
            'En párrafo seguido.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El orden de tus películas favoritas no importa, da igual cuál sea primera. Por eso, viñetas. Si fueran tus \'5 mejores ordenadas\', sería numerada.',
          feedbackIncorrecto: 'Para listas SIN orden: viñetas. Para listas CON orden: numerada. Tus películas favoritas no tienen orden importante, entonces viñetas.'
        },
        {
          enunciado: 'Vas a escribir los 7 pasos para preparar arepas. ¿Qué tipo de lista?',
          opciones: [
            'Con viñetas, así parece más casual.',
            'Numerada, porque el orden de los pasos es crítico.',
            'Multinivel con 7 niveles.',
            'En un solo párrafo masivo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Si cambias el orden de los pasos (mezclar antes que medir, por ejemplo), no funciona. Por eso numerada: el orden es información.',
          feedbackIncorrecto: 'Pasos = numerada. Si el orden importa para que algo funcione, es numerada. Viñetas perdería el orden y la receta se rompería.'
        },
        {
          enunciado: 'Estás haciendo una lista de tus materias del colegio con sus temas. ¿Qué tipo?',
          opciones: [
            'Solo con viñetas.',
            'Solo numerada.',
            'Multinivel: materia (nivel 1) + tema dentro (nivel 2).',
            'En tabla, no en lista.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Materia es lo grande, los temas están adentro. Eso es jerarquía: lista multinivel. Tab para meter dentro, Shift+Tab para sacar.',
          feedbackIncorrecto: 'Cuando hay jerarquía (cosas dentro de cosas), usas multinivel. Tab mete adentro un ítem; Shift+Tab lo saca.'
        },
        {
          enunciado: 'Hiciste una lista de 2 ítems. ¿Cuál es la regla?',
          opciones: [
            'Está bien, 2 ítems siempre son lista.',
            'Mejor en párrafo. Las listas se justifican desde 3 ítems.',
            'Solo 1 ítem es válido en listas.',
            'Hay que duplicar el ítem para tener 4.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Mínimo 3 ítems para que valga la pena la lista. Con 2 se ve forzado. En párrafo se ve natural: \'Las dos cosas que llevé fueron X y Y\'.',
          feedbackIncorrecto: 'Mínimo 3 ítems para hacer una lista. Menos = mejor en párrafo. Una lista de 2 se ve forzada.'
        },
        {
          enunciado: 'Tu lista es: 1. Lavar las verduras, 2. Cortar todo, 3. La cocción al final. ¿Qué falla?',
          opciones: [
            'Nada, está perfecta.',
            'Falla el formato gramatical paralelo. Mejor: 1. Lavar, 2. Cortar, 3. Cocer (todos en infinitivo).',
            'Le faltan ítems.',
            'El orden está mal.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La regla de paralelismo: si el primero empieza con verbo en infinitivo (Lavar), todos en infinitivo. Mezclar formas se ve descuidado.',
          feedbackIncorrecto: 'La regla del paralelismo: todos en el mismo formato gramatical. Si arrancas con infinitivo, todos en infinitivo. Sino, se ve desordenado.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál fue la lista que más me costó hacer? ¿Por qué creo que me costó?',
    transferencia: 'Esta semana, en cualquier documento que escribas, busca si algo se entiende mejor como lista.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 tipos de listas; (2) sabrás explicar cuándo usar cada una; (3) podrás aplicar listas en Word/Docs con su atajo; (4) habrás creado un documento con los 3 tipos demostrados.'
  },
  saberAncestral: {
    saber: 'Cuando doña Mercedes mandaba la lista de tareas del campo, no hablaba revuelto. En la vereda La Plata de Cartago, los lunes la maestra rural ponía en el tablero la lista de la semana, una al lado de la otra, no en una sola masa. "Lunes: traer cartulina. Martes: estudiar tablas. Miércoles: prueba de lectura. Jueves: traer botella vacía para experimento. Viernes: limpieza del salón.". Cada cosa con su día, cada día con su tarea. Si lo hubiera dicho todo seguido en un párrafo, los niños se habrían confundido y olvidado la mitad. "Cuando son muchas cosas, en lista", decía doña Mercedes. La cocinera del barrio hacía igual con la lista del mercado. El campesino con la lista de semillas. La lista no es decoración: es una herramienta de pensamiento ordenado. Hoy aprendes a hacer listas en digital, con las mismas reglas que doña Mercedes usaba en su tablero.',
    preguntaPuente: 'Si te dan a leer un examen con preguntas separadas por punto y línea aparte, vs un examen con todas las preguntas en una sola masa de texto, ¿cuál te tomas el tiempo de hacer bien? ¿Por qué?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del pensamiento ordenado)',
      lente: 'lente del nosotros',
      cita: '"Quien sabe ordenar lo que tiene en la cabeza, lo sabe comunicar al mundo. Quien no, lo guarda solo para sí."',
      preguntaEspejo: '¿Cuál fue la lista que más me costó hacer? ¿Por qué creo que me costó?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que ordenaba sus pensamientos diarios)',
      lente: 'lente del cuidado interior',
      cita: '"Cuando algo te abruma, hazlo una lista. Lo que parece imposible junto, se vuelve posible en 5 pasos numerados."',
      preguntaEspejo: '¿Qué cosa que tengo pendiente sentiría más ligera si la convirtiera en lista?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la información)',
      lente: 'lente de la infoesfera',
      cita: '"La lista es la primera tecnología cognitiva. Antes del libro, antes del computador, ya existía la lista."',
      preguntaEspejo: '¿Estoy aprovechando una herramienta de 5000 años que sigue siendo la mejor disponible?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 tipos de listas; (2) sabrás explicar cuándo usar cada una; (3) podrás aplicar listas en Word/Docs con su atajo; (4) habrás creado un documento con lo…',
    emocional: 'Cuando tienes muchas tareas y te sientes abrumado, escribir una lista numerada de lo que tienes que hacer convierte el caos en un mapa.',
    ciudadana: 'Hacer una lista te obliga a ordenar mentalmente lo que sabes.',
    local: 'Antes de salir, verificas que las 3 listas están bien aplicadas (no usaste numerada cuando era viñetas).',
    intergeneracional: 'Las listas son tan antiguas que se encuentran tablillas de barro de hace 5000 años con listas (de vacas, de granos, de impuestos).'
  }
};

export default contenido;
