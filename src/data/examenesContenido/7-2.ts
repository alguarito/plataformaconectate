/**
 * Contenido web del examen final · Grado 7 · Período 2
 *
 * Auto-generado desde content/examenes/7-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 7,
  periodo: 2,
  titulo: 'Examen final · Algoritmia y pensamiento computacional',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Algoritmia y pensamiento computacional',
    instrucciones: 'Practica con 25 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: 'Según la apertura (S1), ¿qué hacía doña Sofía la tejedora del Valle que se parecía a programar?',
        opciones: [
          'Solo improvisaba con las hebras.',
          'Aplicaba secuencia, repetición, condicionales y variables (en su cabeza) para tejer el canasto.',
          'Copiaba lo que veía en internet.',
          'Tejía sin patrón.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Doña Sofía aplicaba los 4 elementos básicos de un algoritmo: secuencia, repetición, condicionales y variables. La tejedora ya programaba sin saberlo.',
        feedbackIncorrecto: 'Doña Sofía hacía los 4 elementos: secuencia (pasos), repetición (patrón), condicionales (cuando llega al borde), variables (contar puntos). El tejido es algoritmo visual ancestral.'
      },
      {
        enunciado: '¿Qué tienen en común las mochilas Wayuu, los sombreros aguadeños y los canastos del Cauca con un programa de Scratch?',
        opciones: [
          'Nada, son cosas totalmente distintas.',
          'Todos siguen un algoritmo: secuencia de pasos repetidos con condicionales y variables.',
          'Todos cuestan lo mismo.',
          'Todos los hace una sola persona.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Todos son algoritmos ejecutados: la tejedora ejecuta con las manos, Scratch ejecuta con la pantalla. Misma estructura lógica.',
        feedbackIncorrecto: 'Todos son algoritmos visuales: secuencia + repetición + condicionales + variables. Cambian las manos y la fibra por bloques y pantalla. La estructura es la misma.'
      },
      {
        enunciado: '¿Qué es un algoritmo?',
        opciones: [
          'Una palabra rara que solo usan los expertos.',
          'Una secuencia ordenada de pasos finitos para resolver un problema o ejecutar una tarea.',
          'Un programa de televisión.',
          'Una receta exclusiva de cocina.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Un algoritmo es una secuencia ordenada y finita de pasos. Una receta es un algoritmo, una rutina diaria también, y un programa de Scratch también.',
        feedbackIncorrecto: 'Algoritmo = secuencia ordenada de pasos finitos que resuelve un problema. Una receta de cocina sí es algoritmo; lo es también peinarse o cepillarse los dientes.'
      },
      {
        enunciado: '¿En qué se parece una receta de cocina a un algoritmo?',
        opciones: [
          'No se parecen en nada.',
          'Ambos tienen pasos ordenados, ingredientes/datos de entrada, un resultado esperado, y deben ser claros y reproducibles.',
          'Solo se parecen en que se usan ambos en la casa.',
          'En que ambas son aburridas.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Receta = algoritmo de cocina: pasos ordenados + ingredientes (entrada) + plato terminado (salida) + claridad/reproducibilidad.',
        feedbackIncorrecto: 'Receta y algoritmo comparten: pasos en orden, entrada (ingredientes/datos), salida (resultado), claridad (no ambiguo), reproducibilidad. Por eso la receta es la mejor analogía intuitiva.'
      },
      {
        enunciado: '¿Cuáles son las 4 técnicas del pensamiento computacional?',
        opciones: [
          'Pensar, escribir, leer, ejecutar.',
          'Descomposición, reconocimiento de patrones, abstracción y algoritmo.',
          'Encender, apagar, navegar, descargar.',
          'Sumar, restar, multiplicar, dividir.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 4 técnicas: descomposición (partir en piezas), patrones (ver lo que se repite), abstracción (quedarse con lo esencial), algoritmo (pasos para resolver).',
        feedbackIncorrecto: 'Las 4 técnicas: descomposición, reconocimiento de patrones, abstracción, algoritmo. Son habilidades mentales antes que computacionales; sirven para programar y para resolver cualquier problema.'
      },
      {
        enunciado: 'Tu salón debe organizar la izada de bandera. Aplicar descomposición significa:',
        opciones: [
          'Hacer todo de golpe sin planear.',
          'Partir el problema grande en piezas más pequeñas: música, palabras, izada, formación, sonido.',
          'Pedir ayuda externa.',
          'Posponer la actividad.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Descomposición = partir el todo en piezas manejables. La izada se vuelve viable cuando se separa en (música, palabras, sonido, formación) y cada parte se asigna.',
        feedbackIncorrecto: 'Descomposición = partir el problema en piezas más pequeñas. Cada pieza se puede asignar a alguien y resolver por separado. Es la primera técnica del pensamiento computacional.'
      },
      {
        enunciado: '¿Qué es un diagrama de flujo?',
        opciones: [
          'Una lista de palabras al azar.',
          'Una representación visual de un algoritmo con figuras (óvalo inicio/fin, rectángulo proceso, rombo decisión) y flechas que muestran el orden.',
          'Un dibujo decorativo.',
          'Una tabla numérica.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Diagrama de flujo = visualización del algoritmo. Óvalos para inicio/fin, rectángulos para procesos, rombos para decisiones (si...?), flechas para el orden.',
        feedbackIncorrecto: 'Diagrama de flujo dibuja un algoritmo: óvalo inicio/fin, rectángulo proceso (un paso), rombo decisión (un si), flechas indicando el flujo. Útil para mostrar lógica antes de codificar.'
      },
      {
        enunciado: 'En un diagrama de flujo, ¿qué figura indica una decisión (un condicional)?',
        opciones: [
          'Óvalo.',
          'Rectángulo.',
          'Rombo (diamante).',
          'Triángulo.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. El rombo indica decisión (si... entonces...). Tiene dos salidas (sí/no) que llevan a caminos distintos del algoritmo.',
        feedbackIncorrecto: 'Rombo = decisión. Tiene 2 salidas: una para "sí" y otra para "no". Es lo que permite que un algoritmo tome caminos distintos según una condición.'
      },
      {
        enunciado: '¿Qué es una variable en programación?',
        opciones: [
          'Una palabra rara.',
          'Una caja con etiqueta que guarda un valor que puede cambiar (nombre, edad, puntaje, contador).',
          'Un bloque que no sirve.',
          'Un dibujo decorativo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Variable = caja con etiqueta. La etiqueta es el nombre (edad); adentro va el valor (12). El valor puede cambiar; la etiqueta no.',
        feedbackIncorrecto: 'Una variable es como una caja con etiqueta: la etiqueta no cambia (edad), pero lo de adentro sí (12 hoy, 13 mañana). Guardar y modificar valores es el corazón de programar.'
      },
      {
        enunciado: 'Vas a guardar el puntaje de un jugador en Scratch. ¿Cuál es el mejor nombre para esa variable?',
        opciones: [
          'x',
          'cosa',
          'puntaje_jugador1',
          '$@!'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. puntaje_jugador1 es claro: dice qué guarda y a quién pertenece. Una variable bien nombrada es como una caja bien etiquetada.',
        feedbackIncorrecto: 'Nombre profesional de variable: claro, sin espacios, dice qué guarda. x es ambiguo; cosa no dice nada; los caracteres raros confunden. puntaje_jugador1 es legible y específico.'
      },
      {
        enunciado: '¿Qué es un condicional?',
        opciones: [
          'Un bloque sin función.',
          'Una estructura "si... entonces..." que toma decisiones según se cumpla o no una condición.',
          'Una repetición.',
          'Un dibujo decorativo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Condicional = decisión. Si la condición es verdadera, hacer A; si no, hacer B. Permite que el programa cambie de comportamiento según la situación.',
        feedbackIncorrecto: 'Condicional si... entonces: el programa decide qué hacer según una condición. Ejemplo: si vida = 0, entonces game over; si no, sigue jugando. Le da inteligencia al algoritmo.'
      },
      {
        enunciado: 'En Scratch quieres que el gato diga "¡Hola!" si toca a un compañero, y se quede quieto si no. ¿Cuál estructura usas?',
        opciones: [
          'Un bucle infinito sin condiciones.',
          'Un bloque si... entonces... si no... con la condición "tocando objeto".',
          'Un bloque solo de movimiento.',
          'Nada, no se puede hacer.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. El bloque si... entonces... si no... con condición "tocando objeto" permite dos comportamientos: decir hola (cuando toca) o quedarse quieto (cuando no).',
        feedbackIncorrecto: 'Bloque si... entonces... si no... es el clásico para decidir entre 2 caminos. La condición es tocando objeto; verdadero → decir hola; falso → quedarse quieto.'
      },
      {
        enunciado: '¿Qué es un bucle (también llamado ciclo)?',
        opciones: [
          'Un bloque que solo se ejecuta una vez.',
          'Una estructura que repite un bloque de pasos N veces, o hasta que se cumpla una condición.',
          'Una variable rara.',
          'Una decisión.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Bucle = repetición. Repetir 10 veces, repetir por siempre, repetir hasta.... Evita escribir el mismo bloque varias veces.',
        feedbackIncorrecto: 'Bucle = repetición controlada. Hay 3 tipos clásicos: repetir N veces, repetir por siempre, repetir hasta condición. Hacen el código corto y elegante.'
      },
      {
        enunciado: 'Quieres que un personaje cuente del 1 al 10 en pantalla. ¿Cuál estrategia usa un bucle?',
        opciones: [
          'Escribir 10 bloques de "decir 1", "decir 2"... uno por uno.',
          'Usar una variable contador que empiece en 1, dentro de repetir 10 veces hacer "decir contador" y "cambiar contador en 1".',
          'Mostrar solo el 10.',
          'No se puede hacer.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Variable contador + bucle de 10 repeticiones + cambiar contador en 1 cada vez = del 1 al 10 elegante. Es la forma profesional.',
        feedbackIncorrecto: 'Contador + bucle es la solución elegante. Escribir 10 bloques sueltos funciona pero es ineficiente y caótico. Bucle + variable es lo que enseña el periodo.'
      },
      {
        enunciado: '¿Qué es Scratch?',
        opciones: [
          'Un juego solo.',
          'Un entorno de programación visual con bloques (creado por el MIT) para aprender a programar sin escribir texto.',
          'Una página de videos.',
          'Una hoja de cálculo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Scratch = programación visual con bloques. Lo creó el MIT para enseñar programación a jóvenes. Los bloques se encajan como Lego, y el programa corre al instante.',
        feedbackIncorrecto: 'Scratch es entorno visual del MIT. Programas arrastrando bloques que se encajan; ves el resultado al instante. Ideal para aprender lógica de programación antes de pasar a texto.'
      },
      {
        enunciado: 'En Scratch hay un bloque "cuando se hace clic en la bandera verde". ¿Para qué sirve?',
        opciones: [
          'Solo decora.',
          'Es el bloque inicio del programa: lo que va debajo se ejecuta al hacer clic en la bandera verde.',
          'Hace ruido.',
          'Termina el programa.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. La bandera verde = botón de inicio. Lo que está debajo se ejecuta cuando el usuario hace clic. Es el equivalente al "play".',
        feedbackIncorrecto: 'La bandera verde inicia el programa. Cualquier bloque colocado debajo se ejecuta al hacer clic. Es la entrada de cada proyecto de Scratch.'
      },
      {
        enunciado: '¿Qué es una narrativa interactiva en Scratch?',
        opciones: [
          'Un video sin interacción.',
          'Una historia donde los personajes responden a clics o teclas del usuario, usando condicionales para cambiar de escena.',
          'Un texto sin imágenes.',
          'Solo música.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Narrativa interactiva = historia que responde al usuario. Click, tecla o evento → cambia de escena. Usa condicionales para decidir qué pasa.',
        feedbackIncorrecto: 'Una narrativa interactiva responde al usuario (clics, teclas) y cambia escenas con condicionales. Combina arte + lógica: es la forma más amigable de practicar condicionales en Scratch.'
      },
      {
        enunciado: 'Quieres que tu historia en Scratch cambie de escena cuando el usuario presiona la barra espaciadora. ¿Cuál bloque o estructura usas?',
        opciones: [
          'Un bucle infinito sin condición.',
          'El evento cuando se presione tecla [espacio] + el bloque cambiar fondo.',
          'Un bloque de sonido.',
          'Una variable sola.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Evento de tecla + bloque de fondo = cambio de escena. Eventos son los que escuchan acciones del usuario en Scratch.',
        feedbackIncorrecto: 'Eventos (cuando se presione tecla..., cuando se haga clic...) escuchan acciones del usuario. Al combinarlos con cambiar fondo o cambiar disfraz, controlas la narrativa.'
      },
      {
        enunciado: 'Tu proyecto final de Scratch tiene 30 bloques apilados sin organización: variables sin nombre, bucles dentro de bucles sin sentido, condiciones repetidas. ¿Qué dirías de él aplicando criterio de programación?',
        opciones: [
          'Funciona, está bien.',
          'Aunque corra, no aplica buen criterio: las variables deben tener nombre claro, los bucles deben tener propósito, y las condiciones no deben duplicarse.',
          'Es perfecto solo por ser largo.',
          'No importa cómo se vea.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Que un programa corra no significa que esté bien hecho. Buenos nombres de variables, bucles con propósito y condiciones sin duplicar son lo que separa un programa serio de un revoltijo.',
        feedbackIncorrecto: 'Funcionar y estar bien hecho son cosas distintas. Buenos nombres, lógica clara, sin duplicaciones son criterios profesionales. "Funciona" no es la única vara: claridad importa.'
      },
      {
        enunciado: 'Vas a planear tu primer proyecto completo en Scratch. ¿Cuál orden es el más profesional?',
        opciones: [
          'Empezar a poner bloques al azar.',
          '1) Descomponer la idea en piezas, 2) ver patrones, 3) hacer abstracción, 4) escribir el algoritmo en cuaderno, 5) programar en Scratch siguiendo ese algoritmo.',
          'Copiar el proyecto de un compañero.',
          'Solo dibujar sin programar.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 4 técnicas + diagrama en cuaderno antes de tocar Scratch. Pensar primero, programar después: ese es el oficio del periodo.',
        feedbackIncorrecto: 'Pensamiento computacional primero (descomponer, patrones, abstracción, algoritmo en cuaderno), Scratch después. Saltarse el pensamiento te lleva a programar caótico y debuguear horas.'
      },
      {
        enunciado: 'Tu prima de 3° ya sabe el orden de hacer un sandwich (pan, mantequilla, jamón, queso, pan). ¿Qué técnica del pensamiento computacional aplicó al guardar la receta en su memoria?',
        opciones: [
          'Solo descomposición.',
          'Algoritmo (secuencia ordenada de pasos para resolver un problema reproducible).',
          'Solo patrones.',
          'Nada, no es pensamiento computacional.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Tu prima tiene en la cabeza un algoritmo de sandwich: pasos en orden, reproducibles. El pensamiento computacional vive en muchas cosas cotidianas.',
        feedbackIncorrecto: 'Memorizar una secuencia reproducible es algoritmo. Esa es la magia del periodo: el pensamiento computacional ya existe en tu vida; este periodo te lo hace consciente y lo lleva a Scratch.'
      },
      {
        enunciado: 'En Scratch quieres llevar un contador de cuántas veces el gato saltó. ¿Cómo lo haces?',
        opciones: [
          'Sin variable, contando con los dedos.',
          'Creando una variable llamada saltos, iniciándola en 0, y cada vez que el gato salte, usar cambiar saltos en 1.',
          'Cambiando el color del fondo.',
          'Usando un bucle vacío.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Variable contador + incremento de 1 en cada evento. Eso te permite mostrar el número en pantalla y usarlo para condicionales (si saltos > 10 entonces ganaste).',
        feedbackIncorrecto: 'Variable contador + cambiar variable en 1 en cada salto. Es la forma estándar de contar eventos en Scratch. Sirve para puntajes, contadores, niveles, etc.'
      },
      {
        enunciado: 'Una compañera te muestra su narrativa en Scratch. Las escenas cambian al azar sin lógica clara. ¿Qué retroalimentación constructiva le das?',
        opciones: [
          'Está perfecto, no toques nada.',
          'Le sugieres usar condicionales para que cada escena cambie por acción del usuario (clic o tecla), no al azar; eso le da estructura narrativa.',
          'Le dices que el proyecto está mal y debe rehacer todo.',
          'Le copias el proyecto.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Retroalimentación constructiva: identifica el problema (azar sin lógica) + sugiere solución concreta (condicionales por acción). Eso ayuda a aprender, no a destruir.',
        feedbackIncorrecto: 'Retroalimentación constructiva: identifica el problema concreto + propone solución específica. Decir "está mal y rehazlo" no enseña; sugerir condicionales por acción sí.'
      },
      {
        enunciado: 'Quieres hacer un juego de Scratch donde el gato pierde si toca una bomba. ¿Qué condicional aplicas y dónde?',
        opciones: [
          'Ninguno.',
          'Dentro de un bucle por siempre, un si tocando bomba entonces decir "perdiste" + detener todo.',
          'Solo un bucle infinito sin condición.',
          'Solo un evento de teclado.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Bucle infinito que vigila + condicional "tocando bomba" + acciones (decir + detener). Es el patrón clásico de juegos en Scratch.',
        feedbackIncorrecto: 'Patrón clásico: por siempre + si tocando X entonces hacer Y. El bucle vigila constantemente; el condicional dispara la acción cuando se cumple. Aprenderás a usarlo en muchos juegos.'
      },
      {
        enunciado: '¿Cuál de estas características NO tiene un buen algoritmo?',
        opciones: [
          'Pasos en orden.',
          'Termina en un número finito de pasos.',
          'Cada paso es claro y no ambiguo.',
          'Puede usar 1.000.000 de pasos sueltos sin organización.'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Bien. Un buen algoritmo: orden + finitud + claridad + eficiencia. Un millón de pasos sin organización viola la eficiencia y la claridad.',
        feedbackIncorrecto: 'Buen algoritmo: orden (secuencia) + finitud (termina) + claridad (no ambiguo) + eficiencia (no más pasos de los necesarios). Mil pasos caóticos no es algoritmo, es revoltijo.'
      }
    ]
  }
};

export default contenido;
