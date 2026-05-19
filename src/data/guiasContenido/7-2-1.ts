/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 1
 * (sesión global 11).
 *
 * Auto-generado desde content/guias/7/7-2-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 1,
  titulo: 'Apertura periodo 2 — pensar como teje la abuela',
  resumen: 'Este periodo se llama Algoritmia y pensamiento computacional.',
  duracionMin: 90,
  subtema: 'Apertura periodo 2 — pensar como teje la abuela',
  preLectura: {
    porQueImporta: 'El producto es el cuaderno P2 inaugural + mini-investigación + compromiso firmado.',
    preguntaDetonante: 'Si te pidieran explicarle a un robot "cómo hacer una arepa", ¿podrías hacerlo? ¿Cuántos pasos tendrías que decirle? ¿Qué pasaría si te olvidaras de un paso?',
    activacion: {
      titulo: 'Imagina a doña Sofía tejiendo',
      descripcion: 'Actividad 1 · IDENTIFICA — Imagina a doña Sofía tejiendo (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres por qué tejer es programar, conoces la ruta, firmas el compromiso, investigas el tejido tradicional.',
      siguiente: 'Esta semana, completa la mini-investigación del tejido: habla con una persona mayor, anota 5 datos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Algoritmia',
      definicion: 'Rama de la informática que estudia los algoritmos: secuencias de pasos para resolver problemas. Es la base de toda programación. Una abuela tejedora practica algoritmia sin saberlo.',
      ejemplo: 'Una receta de cocina es un algoritmo. Un patrón de tejido es un algoritmo. Las instrucciones para armar un mueble son un algoritmo. La diferencia con la programación es que el algoritmo lo ejecuta un computador.',
      emoji: '🧮'
    },
    {
      termino: 'Pensamiento computacional',
      definicion: 'Habilidad de descomponer un problema complejo en pasos manejables que un computador (o cualquier persona) puede ejecutar. Tiene 4 técnicas: descomposición, patrones, abstracción y algoritmo. Lo aprenderás en S3.',
      ejemplo: 'Para preparar arepas: descomposición (4 pasos), patrones (mezclar es como amasar), abstracción (decir \'amasar\' sin describir cada movimiento), algoritmo (orden exacto: mezclar → amasar → bolitas → asar).',
      emoji: '🧩'
    },
    {
      termino: 'Scratch',
      definicion: 'Lenguaje de programación visual del MIT (Massachusetts Institute of Technology). Gratuito, en el navegador (scratch.mit.edu). Usa bloques que se encajan como Lego. Diseñado para que niños y jóvenes aprendan a programar.',
      ejemplo: 'En Scratch arrastras bloques: \'mover 10 pasos\' + \'esperar 1 segundo\' + \'decir hola por 2 segundos\'. Sin escribir código, el sprite (personaje) ejecuta tus instrucciones.',
      emoji: '🐱'
    },
    {
      termino: '5 acuerdos del pensamiento computacional',
      definicion: 'Las 5 normas para llegar bien al periodo: (1) paciencia, (2) paso a paso, (3) revisar errores con calma, (4) intentar de nuevo, (5) compartir aprendizajes. Sin estos acuerdos, programar se vuelve frustrante.',
      ejemplo: 'Tu primer programa no funciona. Acuerdo 3: revisar errores con calma. Acuerdo 4: intentar de nuevo modificando algo. Acuerdo 5: si encontraste la solución, compártela con el equipo.',
      emoji: '🤝'
    },
    {
      termino: 'Tejido como algoritmo',
      definicion: 'El tejido tradicional (canastos, mochilas, sombreros) tiene estructura algorítmica: secuencia (pasos en orden), repetición (patrones que se repiten), condicionales (cuándo cambiar de hebra), variables (contar puntos). Es algoritmia cultural transmitida durante siglos.',
      ejemplo: 'Una mochila Wayuu sigue un algoritmo: empezar centro, repetir patrón N veces, cambiar color cuando llega al borde, terminar con cierre. Las abuelas Wayuu son programadoras culturales sin saberlo.',
      emoji: '🧶'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Llegaste bien al periodo 2 de grado 7?',
      instrucciones: '5 preguntas para verificar que entiendes el espíritu del pensamiento computacional.',
      preguntas: [
        {
          enunciado: '¿Cuál es la relación entre tejer un canasto y programar un computador?',
          opciones: [
            'Ninguna, son cosas totalmente distintas.',
            'Ambos siguen un algoritmo: secuencia, repetición, condicionales, contadores.',
            'Tejer es más difícil.',
            'Programar es solo para genios; tejer es para abuelas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Tejer es algoritmia cultural. Las abuelas hacen mentalmente lo que un programa hace en código: secuencia, repetición, condicionales, contadores. Mismo pensamiento, distinto medio.',
          feedbackIncorrecto: 'Tejer y programar comparten estructura algorítmica. Las abuelas son programadoras culturales: secuencia, repetición, condicional, variable. Mismo pensamiento.'
        },
        {
          enunciado: '¿Es necesario ser muy bueno en matemáticas para programar?',
          opciones: [
            'Sí, sin matemáticas no se puede.',
            'La mate ayuda pero no es requisito. La habilidad central es pensar paso a paso.',
            'Solo álgebra es necesaria.',
            'La programación es lo mismo que matemáticas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Pensar paso a paso es la habilidad central. La mate ayuda pero no decide. Hay programadores excelentes que no son fuertes en mate.',
          feedbackIncorrecto: 'Pensar paso a paso es la habilidad central. Mate ayuda pero no es requisito. Las abuelas tejedoras programan algoritmos sin saber álgebra avanzada.'
        },
        {
          enunciado: 'Tu primer programa en Scratch no funciona. ¿Qué haces?',
          opciones: [
            'Me rindo, no soy bueno para esto.',
            'Lo reviso con calma (acuerdo 3) e intento de nuevo modificando algo (acuerdo 4).',
            'Borro Scratch.',
            'Le pago a alguien para que lo arregle.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Acuerdos 3 y 4: revisar errores con calma + intentar de nuevo. Los errores son información, no fracaso. Programadores expertos pasan más tiempo depurando que escribiendo.',
          feedbackIncorrecto: 'Acuerdos 3 y 4: revisar con calma, intentar de nuevo. Los errores son tu maestro. Sin error no aprendes a depurar (encontrar y corregir).'
        },
        {
          enunciado: '¿Qué es Scratch?',
          opciones: [
            'Un juego.',
            'Lenguaje de programación visual gratuito del MIT, con bloques que se encajan.',
            'Un dispositivo físico.',
            'Una marca de zapatos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Scratch: lenguaje visual del MIT, gratis, en scratch.mit.edu. Bloques se arrastran y encajan. Más de 100 millones de proyectos en el mundo.',
          feedbackIncorrecto: 'Scratch = lenguaje de programación visual del MIT. Gratis. En el navegador. Bloques que se encajan como Lego. Lo usarás en S8, S9, S10.'
        },
        {
          enunciado: '¿Cuántas sesiones tiene el periodo 2?',
          opciones: [
            '5 sesiones.',
            '10 sesiones organizadas en 3 bloques (algoritmo y diagramas + componentes + Scratch).',
            '30 sesiones.',
            'Solo 2 sesiones.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 10 sesiones en 3 bloques: (1) algoritmo + diagramas, (2) variables + condicionales + bucles, (3) Scratch. Cada bloque te prepara para el siguiente.',
          feedbackIncorrecto: '10 sesiones, 3 bloques: algoritmos y diagramas (S2-S4), componentes de programación (S5-S7), Scratch (S8-S10). Cada uno te prepara para el siguiente.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿En mi familia hay alguien que "programa" sin saberlo (cocina con receta exacta, teje, hace algo paso a paso)? ¿Qué les podría enseñar el pensamiento computacional explícito?',
    transferencia: 'Esta semana, completa la mini-investigación del tejido: habla con una persona mayor, anota 5 datos.',
    cierre: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 2; (2) sabrás explicar por qué tejer es "algorítmico"; (3) podrás aplicar los 5 acuerdos del pensamiento computacional; (4) habrás creado tu cuaderno P2 firmado + investigación.'
  },
  saberAncestral: {
    saber: 'En el Valle del Cauca, en las veredas que rodean Cartago, las abuelas tejedoras sabían programar mucho antes de que se inventaran los computadores. Cuando doña Sofía, una abuela de la vereda La Cabaña, se sentaba a tejer un canasto de fibra de plátano, no improvisaba: seguía un algoritmo. Empezaba con 8 hebras cruzadas en el centro (paso 1), levantaba la hebra de la derecha, la pasaba sobre 2 hebras y por debajo de la siguiente (paso 2 que se repite), contaba hasta llegar a 12 puntos (condicional: si llegó a 12, cambio de hebra), y volvía a comenzar el patrón. Después de 1 hora, tenía las paredes del canasto. Si te detenías a verla, te dabas cuenta: doña Sofía hacía secuencia (pasos en orden), repetición (el patrón se repetía cientos de veces), condicionales (cuando llegaba al borde, cambiaba), variables (contaba los puntos en su cabeza). Eso es exactamente lo que hace un computador. Las mochilas Wayuu de La Guajira, los sombreros aguadeños del Quindío, los canastos del Cauca: todos son algoritmos visuales transmitidos durante siglos sin necesidad de pantallas. Este periodo te enseña a hacer lo mismo, pero en lenguaje computacional.',
    preguntaPuente: 'Si te pidieran explicarle a un robot "cómo hacer una arepa", ¿podrías hacerlo? ¿Cuántos pasos tendrías que decirle? ¿Qué pasaría si te olvidaras de un paso?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del saber popular)',
      lente: 'lente del nosotros',
      cita: '"Las abuelas tejedoras eran programadoras antes de que se inventara el computador. El saber popular precede a la academia."',
      preguntaEspejo: '¿En mi familia hay alguien que "programa" sin saberlo (cocina con receta exacta, teje, hace algo paso a paso)? ¿Qué les podría enseñar el pensamiento computacional explícito?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador del pensamiento paso a paso)',
      lente: 'lente del cuidado interior',
      cita: '"Quien aprende a pensar paso a paso domina cualquier oficio. La paciencia con el orden es el secreto del trabajo bien hecho."',
      preguntaEspejo: '¿Tiendo a apurarme cuando un problema es difícil, o sé descomponer paso a paso?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la educación digital)',
      lente: 'lente de la infoesfera',
      cita: '"Programar es la nueva alfabetización. No es para todos hacer carrera de programador, pero todos deben entender cómo se programa el mundo en que viven."',
      preguntaEspejo: '¿Quiero ser sujeto pasivo de los algoritmos que me rodean, o ciudadano que los entiende y decide con criterio?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 2; (2) sabrás explicar por qué tejer es "algorítmico"; (3) podrás aplicar los 5 acuerdos del pensamiento computacional; (4) habrás crea…',
    emocional: 'La habilidad central del pensamiento computacional es la paciencia paso a paso.',
    ciudadana: 'La academia muchas veces presenta el pensamiento computacional como algo moderno e importado.',
    local: 'Antes de salir, verifica que tu cuaderno tiene los 5 elementos del periodo.',
    intergeneracional: 'Vivimos en un mundo programado: TikTok te recomienda videos por algoritmo, el banco aprueba créditos por algoritmo, los semáforos cambian por algoritmo.'
  }
};

export default contenido;
