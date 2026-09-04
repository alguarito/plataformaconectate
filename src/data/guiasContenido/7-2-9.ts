/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 9
 * (sesión global 19).
 *
 * Auto-generado desde content/guias/7/7-2-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 9,
  titulo: 'Scratch · narrativa interactiva — el cuento que el lector escoge',
  resumen: 'Una narrativa interactiva (o historia ramificada) es un cuento donde el lector toma decisiones que cambian el rumbo.',
  duracionMin: 90,
  subtema: 'Scratch · narrativa interactiva — el cuento que el lector escoge',
  preLectura: {
    porQueImporta: 'El producto es la historia jugable + guion en cuaderno.',
    preguntaDetonante: 'Si pudieras programar una historia donde el lector escoge qué hace el protagonista, ¿qué tema escogerías? ¿Un héroe wayuu? ¿Una niña perdida en el campo? ¿Un astronauta? ¿Un cuento de tu vida?',
    activacion: {
      titulo: 'Diseña el árbol de tu historia',
      descripcion: 'Actividad 1 · ANALIZA — Diseña el árbol de tu historia (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: planeas tu historia con caminos, aprendes los bloques nuevos, la programas en Scratch, la pruebas con un compañero.',
      siguiente: 'Esta semana, mejora tu narrativa: agrega una tercera opción, un sonido, otra escena.'
    }
  },
  conceptosClave: [
    {
      termino: 'Narrativa interactiva',
      definicion: 'Historia donde el lector toma decisiones que cambian el rumbo. En lugar de un único final, hay varios. El lector co-crea la experiencia. Existe en libros (Escoge tu propia aventura), videojuegos y películas (Black Mirror Bandersnatch).',
      ejemplo: 'Tu historia: \'Una niña en el río Cauca encuentra 2 caminos. ¿Va izquierda o derecha?\'. Cada elección lleva a una escena distinta con su final propio. El mismo programa, distintas experiencias.',
      emoji: '📖'
    },
    {
      termino: 'Preguntar y esperar (Scratch)',
      definicion: 'Bloque turquesa de Sensores. Hace aparecer una caja de texto en el escenario donde el lector escribe respuesta. El programa se pausa hasta que el lector pulse Enter. Es como una conversación interactiva.',
      ejemplo: '\'¿Vas a la izquierda o derecha? Escribe izquierda o derecha\'. El lector escribe, pulsa Enter, el programa continúa con la respuesta.',
      emoji: '❓'
    },
    {
      termino: 'Variable respuesta',
      definicion: 'Variable especial de Scratch (bloque turquesa de Sensores) que guarda lo último que el lector escribió. Se usa en condicionales para decidir el rumbo según la entrada del usuario.',
      ejemplo: 'Si respuesta = \'izquierda\' entonces ir a Escena A, si no, ir a Escena B. Cada respuesta del lector dirige el camino del programa.',
      emoji: '💬'
    },
    {
      termino: 'Cambiar fondo',
      definicion: 'Bloque morado de Apariencia. Cambia el fondo del escenario a otro fondo previamente cargado. Permite tener distintas escenas en la misma historia.',
      ejemplo: 'En tu narrativa: Escena 1 fondo \'río Cauca\'; Escena A fondo \'bosque\'; Escena B fondo \'cueva\'. Cada cambio crea sensación de viajar entre lugares.',
      emoji: '🌅'
    },
    {
      termino: 'Cambiar disfraz',
      definicion: 'Bloque morado de Apariencia. Cambia la imagen del sprite a otro disfraz previamente cargado. Permite que el sprite cambie de expresión, ropa o aspecto.',
      ejemplo: 'Un sprite puede tener disfraces: \'feliz\', \'triste\', \'asustado\'. Según el rumbo de la historia, cambia el disfraz para reflejar la emoción del personaje.',
      emoji: '🎭'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer narrativa interactiva en Scratch?',
      instrucciones: '5 preguntas para verificar que dominas los bloques nuevos y la estructura.',
      preguntas: [
        {
          enunciado: '¿Qué bloque usas para preguntar algo al lector y esperar su respuesta?',
          opciones: [
            'Decir [texto] por 2 segundos.',
            'Mover 10 pasos.',
            'Cambiar fondo.',
            'Preguntar [texto] y esperar (turquesa, Sensores).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. \'Preguntar y esperar\' es bloque turquesa de Sensores. Aparece caja de texto en el escenario. El programa se pausa hasta que el lector escriba y presione Enter.',
          feedbackIncorrecto: '\'Preguntar y esperar\' (Sensores, turquesa). Único bloque que invita al lector a escribir. \'Decir\' solo muestra texto sin esperar respuesta.'
        },
        {
          enunciado: 'El lector escribió \'izquierda\'. ¿Cómo se llama la variable donde Scratch guarda esa palabra?',
          opciones: [
            'respuesta (variable especial de Sensores).',
            'miVariable.',
            'entrada.',
            'Lo borra.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. La variable \'respuesta\' (turquesa, Sensores) guarda automáticamente lo último que el lector escribió en preguntar. La usas en condicionales.',
          feedbackIncorrecto: 'La variable se llama \'respuesta\'. Scratch la guarda automáticamente después de \'preguntar y esperar\'. La usas en condicionales: Si respuesta = ...'
        },
        {
          enunciado: 'Tu historia tiene 3 escenas con fondos distintos. ¿Qué bloque cambias entre escenas?',
          opciones: [
            'Mover 10 pasos.',
            'Cambiar fondo (morado, Apariencia).',
            'Esperar 1 segundo.',
            'Tocar sonido.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. \'Cambiar fondo a [nombre]\' (Apariencia, morado). Cambia el fondo del escenario y crea sensación de cambio de escena.',
          feedbackIncorrecto: '\'Cambiar fondo\' (Apariencia morado). Cargas varios fondos en el escenario y cambias entre ellos según la escena de la historia.'
        },
        {
          enunciado: 'La condición \'Si respuesta = izquierda\' no se cumple cuando el lector escribió \'Izquierda\' con mayúscula. ¿Por qué?',
          opciones: [
            'Scratch está dañado.',
            'Es magia.',
            'Las comparaciones son sensibles a mayúsculas. \'izquierda\' (todo minúscula) es distinto a \'Izquierda\' (con I mayúscula).',
            'El programa hizo trampa.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Comparaciones case-sensitive: \'izquierda\' ≠ \'Izquierda\'. Para evitar problemas, indica al lector cómo escribir o convierte todo a minúsculas con un operador.',
          feedbackIncorrecto: 'Sensibilidad a mayúsculas: \'izquierda\' (minúscula) NO es igual a \'Izquierda\' (con mayúscula). Indica el formato esperado o convierte la respuesta a minúsculas.'
        },
        {
          enunciado: 'Para que tu narrativa interactiva sea profesional, ¿qué debe pasar después de cada decisión?',
          opciones: [
            'Que el lector llegue al mismo final.',
            'Nada, todo igual.',
            'Que cada rama tenga su propia escena y final coherente. La decisión debe tener consecuencia real.',
            'Que termine con bandera verde.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Cada decisión = consecuencia real. Cada rama con su propio final. Eso respeta al lector y hace la narrativa interesante. Si todas las ramas llevan al mismo final, no es interactiva.',
          feedbackIncorrecto: 'Cada rama con su propia escena y final coherente. Si todas terminan igual, la decisión no importa. Lo interactivo es que cada elección tenga consecuencia real.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cuando creo algo, ¿lo hago para controlar la experiencia del otro o para invitarlo a participar?',
    transferencia: 'Esta semana, mejora tu narrativa: agrega una tercera opción, un sonido, otra escena.',
    cierre: 'Al terminar la clase: (1) podrás identificar la estructura de una narrativa ramificada; (2) sabrás aplicar los bloques Sensores y Apariencia de Scratch; (3) podrás evaluar la coherencia de una historia interactiva; (4) habrás creado tu primera narrativa interactiva.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de Cartago narraba cuentos donde los niños decidían. En la escuelita de la vereda La Plata, los miércoles eran días de cuento abierto. Doña Mercedes empezaba: "Iba un pescador caminando por el río Cauca cuando vio dos caminos". Luego preguntaba: "¿Va por la izquierda o por la derecha?". Los niños gritaban "¡Izquierda!". Doña Mercedes seguía: "Por la izquierda encontró un pájaro herido. ¿Lo ayuda o sigue?". Los niños decidían otra vez. Cada cuento era distinto porque el grupo decidía qué pasaba. Doña Mercedes no improvisaba sin orden: tenía un mapa mental con 4 o 5 caminos posibles, cada uno con su propio final. Los niños se sentían coautores del cuento. Esa pedagogía interactiva existía antes de los videojuegos y antes de Scratch. Hoy haces lo mismo: programas un cuento donde el lector decide los caminos.',
    preguntaPuente: 'Si pudieras programar una historia donde el lector escoge qué hace el protagonista, ¿qué tema escogerías? ¿Un héroe wayuu? ¿Una niña perdida en el campo? ¿Un astronauta? ¿Un cuento de tu vida?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la voz del otro)',
      lente: 'lente del nosotros',
      cita: '"Dar al otro el poder de decidir es el acto más generoso. Tu historia interactiva hace eso con cada lector."',
      preguntaEspejo: 'Cuando creo algo, ¿lo hago para controlar la experiencia del otro o para invitarlo a participar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Cada camino de tu historia debe ser coherente con su propia lógica. No abandones al lector a mitad de un rumbo."',
      preguntaEspejo: 'Mi historia, ¿trata con respeto las decisiones del lector o lo abandona en alguna rama?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la narrativa digital)',
      lente: 'lente de la infoesfera',
      cita: '"Las narrativas interactivas son el futuro del cuento. El lector ya no consume: co-crea. Esa es revolución cultural en marcha."',
      preguntaEspejo: '¿Estoy aprendiendo las formas narrativas del futuro o me quedo en las del pasado?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la estructura de una narrativa ramificada; (2) sabrás aplicar los bloques Sensores y Apariencia de Scratch; (3) podrás evaluar la coherencia de una histori…',
    emocional: 'Una narrativa interactiva mal hecha abandona al lector: una rama termina abruptamente, otra contradice la anterior, una decisión no tiene consecuencia.',
    ciudadana: 'Cuando programas una narrativa donde el lector escoge, no estás controlando la experiencia: la entregas.',
    local: 'Antes de salir, un compañero juega tu historia y verifica que los 2 caminos funcionan.',
    intergeneracional: 'Hace 30 años, los cuentos solo se leían lineal: empezabas, leías, terminabas.'
  }
};

export default contenido;
