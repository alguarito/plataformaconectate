/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 3
 * (sesión global 23).
 *
 * Auto-generado desde content/guias/6/6-3-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 3,
  titulo: 'Formato básico — darle voz visual a lo que escribo',
  resumen: 'El formato es la apariencia visual del texto: tipo de letra (fuente), tamaño, color, alineación, énfasis.',
  duracionMin: 90,
  subtema: 'Formato básico — darle voz visual a lo que escribo',
  preLectura: {
    porQueImporta: 'El producto es ese documento formateado + la tabla de atajos en el cuaderno.',
    preguntaDetonante: 'Dos compañeros entregan una tarea con el mismo contenido. Uno la entrega con todo el texto en una sola masa, sin títulos, sin nada destacado. El otro la entrega con título centrado en negrita, palabras importantes destacadas, párrafos separados. ¿Cuál crees que se va a leer primero? ¿Por qué?',
    activacion: {
      titulo: 'Comparar 2 versiones del mismo texto',
      descripcion: 'Actividad 1 · ANALIZA — Comparar 2 versiones del mismo texto (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas los 5 elementos de formato, memorizas los 8 atajos clave, aplicas formato a tu documento de la S2, y armas tu tabla de atajos.',
      siguiente: 'Esta semana, formateás cualquier tarea que entregues en digital usando los 8 atajos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Formato',
      definicion: 'La apariencia visual del texto en un documento: fuente, tamaño, color, estilo, alineación. Un buen formato hace que la estructura del documento se vea antes de leerlo. No es decoración: es respeto al lector.',
      ejemplo: 'El mismo texto sobre Cartago en una sola masa sin formato vs. con título centrado en negrita y palabras importantes resaltadas. La segunda versión se lee 3 veces más rápido.',
      emoji: '🎨'
    },
    {
      termino: 'Negrita (Ctrl+N)',
      definicion: 'Estilo que pone el texto más grueso. Se usa para destacar ideas importantes dentro de un párrafo. Atajo: Ctrl+N en español, Ctrl+B en inglés. Regla: máximo 2-3 palabras destacadas por párrafo.',
      ejemplo: 'En "Cartago se fundó en 1540", podrías poner "1540" en negrita porque es el dato clave. Pero no pongas la frase entera en negrita: pierde el énfasis.',
      emoji: '𝐁'
    },
    {
      termino: 'Alineación justificada (Ctrl+J)',
      definicion: 'Alineación donde el texto se estira para llegar a los dos márgenes (izquierdo y derecho). Da aspecto profesional, como en libros e informes. Atajo: Ctrl+J.',
      ejemplo: 'Los libros impresos tienen texto justificado: las líneas terminan parejas a la derecha. En documentos informales se usa alineación izquierda; en formales, justificada.',
      emoji: '📰'
    },
    {
      termino: 'Atajos de teclado',
      definicion: 'Combinaciones de teclas que ejecutan acciones rápidamente sin usar el ratón. Los 8 esenciales: Ctrl+N (negrita), Ctrl+K (cursiva), Ctrl+S (subrayado), Ctrl+E (centrar), Ctrl+J (justificar), Ctrl+G (guardar), Ctrl+Z (deshacer), Ctrl+C/V (copiar/pegar).',
      ejemplo: 'Para hacer una palabra negrita: selecciónala con el ratón, presiona Ctrl+N. Toma 1 segundo. Con el ratón hasta el menú toma 5 segundos. Multiplica por miles de palabras al año.',
      emoji: '⌨️'
    },
    {
      termino: 'Sangría',
      definicion: 'El espacio extra al inicio de la primera línea de un párrafo. Hace que los párrafos se vean separados visualmente sin necesidad de dejar línea en blanco. Se aplica con la tecla Tab al inicio del párrafo.',
      ejemplo: 'Los libros y los periódicos usan sangría: el primer carácter de cada párrafo entra un poco hacia la derecha. Da aspecto profesional al texto.',
      emoji: '↪️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes dar formato a un documento?',
      instrucciones: '5 preguntas para verificar que dominas los 5 elementos de formato y los 8 atajos.',
      preguntas: [
        {
          enunciado: 'Quieres poner una palabra en negrita. ¿Qué atajo usas?',
          opciones: [
            'Ctrl+E',
            'Ctrl+N',
            'Ctrl+J',
            'Ctrl+C'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Ctrl+N = Negrita en español (B en inglés). Seleccionas la palabra y presionas el atajo. Toma 1 segundo. Tu próxima clase va más rápido.',
          feedbackIncorrecto: 'Ctrl+N = Negrita. Ctrl+E centra, Ctrl+J justifica, Ctrl+C copia. Memoriza los 8 atajos esenciales y serás 3 veces más rápido.'
        },
        {
          enunciado: 'Tu documento tiene 5 fuentes distintas. ¿Está bien o mal?',
          opciones: [
            'Bien, así se ve creativo.',
            'Mal. Más de 2 fuentes en un documento se ve como collage. Usa máximo 2: una para títulos, una para texto.',
            'Da lo mismo, las fuentes no importan.',
            'Solo está mal si son colores.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Máximo 2 fuentes: una para títulos, otra para texto. Más fuentes = caos visual. Es como una persona vestida con 5 colores distintos.',
          feedbackIncorrecto: 'Máximo 2 fuentes por documento. Una para títulos, otra para texto. Más se ve recargado y caótico. Calibri o Arial son seguras.'
        },
        {
          enunciado: '¿Cuándo SÍ se debe poner texto en color azul (no negro)?',
          opciones: [
            'En todo el documento, se ve más bonito.',
            'Nunca, todo debe ser negro.',
            'Solo en títulos, y en azul OSCURO (no fluorescente).',
            'Solo si el lector es daltónico.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Cuerpo del texto = NEGRO siempre. Títulos: pueden ser azul oscuro, gris oscuro o vino tinto. Nunca fluorescentes.',
          feedbackIncorrecto: 'Cuerpo del texto: NEGRO siempre. Títulos: pueden ir en azul oscuro o gris oscuro. Cambiar el color del cuerpo se ve infantil.'
        },
        {
          enunciado: 'Tu profe te dice \'haz un documento profesional\'. ¿Qué alineación usas?',
          opciones: [
            'Centrada (Ctrl+E) para todo.',
            'Justificada (Ctrl+J): el texto llega a ambos márgenes parejo.',
            'Derecha (Ctrl+D).',
            'Sin alineación específica.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Justificada se usa en libros, informes, documentos formales. Centrada solo para títulos. Izquierda para informales.',
          feedbackIncorrecto: 'Para documentos profesionales: alineación justificada (Ctrl+J). Centrada solo para títulos y citas destacadas.'
        },
        {
          enunciado: 'Quieres destacar 4 palabras importantes en un párrafo de 6 líneas. ¿Cuántas debería ir en negrita?',
          opciones: [
            'Las 4, son todas importantes.',
            'Máximo 2-3. Si todas están en negrita, pierde el énfasis.',
            'Ninguna, mejor todo en cursiva.',
            'El párrafo entero en negrita.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Si todo está en negrita, nada destaca. Escoge las 2-3 palabras más importantes. Las demás van en texto normal.',
          feedbackIncorrecto: 'Máximo 2-3 negritas por párrafo. Si destacas todo, no destaca nada. Es como gritar todo el tiempo: te dejan de oír.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cuando entrego un documento, ¿le facilito el camino al lector o lo dejo solo?',
    transferencia: 'Esta semana, formateás cualquier tarea que entregues en digital usando los 8 atajos.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 5 elementos básicos de formato; (2) sabrás aplicar los 8 atajos de teclado más útiles; (3) podrás evaluar si un documento tiene buen formato o no; (4) habrás aplicado formato profesional a tu documento de la S2.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de la vereda La Plata de Cartago decía: "La letra entra con buena presentación." Cuando los niños campesinos le entregaban sus tareas, ella miraba 2 cosas: el contenido (¿qué dice?) y la presentación (¿se entiende a primera vista?). Una tarea con letra clara, márgenes respetados, títulos subrayados y palabras importantes resaltadas comunicaba al lector que el alumno se había tomado el trabajo en serio. Una tarea descuidada, sin importar qué tan inteligente fuera el contenido, daba pereza leer. Doña Mercedes no era exigente por capricho: enseñaba que la presentación es la primera forma de respeto al lector. Hoy escribes en digital, pero la regla sigue intacta: dar formato no es decoración — es respeto. Y los procesadores de texto te dan herramientas para hacerlo en segundos.',
    preguntaPuente: 'Dos compañeros entregan una tarea con el mismo contenido. Uno la entrega con todo el texto en una sola masa, sin títulos, sin nada destacado. El otro la entrega con título centrado en negrita, palabras importantes destacadas, párrafos separados. ¿Cuál crees que se va a leer primero? ¿Por qué?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del respeto al lector)',
      lente: 'lente del nosotros',
      cita: '"El formato es el primer abrazo que le das a quien te va a leer. Una página bien presentada dice: te respeto."',
      preguntaEspejo: 'Cuando entrego un documento, ¿le facilito el camino al lector o lo dejo solo?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que escribía con orden y disciplina)',
      lente: 'lente del cuidado interior',
      cita: '"Lo que está ordenado por fuera ayuda a la mente a ordenarse por dentro."',
      preguntaEspejo: '¿Cómo afecta a mi propio pensamiento el desorden visual de un documento?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del documento digital)',
      lente: 'lente de la infoesfera',
      cita: '"Un documento digital bien formateado es un acto cívico: respeta el tiempo de quien lo leerá, sea uno o mil."',
      preguntaEspejo: '¿Mis documentos respetan el tiempo de quien va a leerlos?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 5 elementos básicos de formato; (2) sabrás aplicar los 8 atajos de teclado más útiles; (3) podrás evaluar si un documento tiene buen formato o no; (4)…',
    emocional: 'Cuando formateas bien un documento, no solo ayudas al lector: también te ayudas a ti.',
    ciudadana: 'Cuando dejas tu documento sin formato, le dices al lector: "arréglatelas para entenderme".',
    local: 'Antes de salir, comparas tu documento antes y después: ¿se siente más profesional ahora?',
    intergeneracional: 'Lo que escribes en digital puede ser leído por muchas personas: tu profe, tus papás, tus compañeros, futuros colegas, lectores que no conoces.'
  }
};

export default contenido;
