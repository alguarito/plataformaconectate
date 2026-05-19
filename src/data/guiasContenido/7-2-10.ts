/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 10
 * (sesión global 20).
 *
 * Auto-generado desde content/guias/7/7-2-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 10,
  titulo: 'Cosecha del periodo 2 — mi primer programa Scratch completo',
  resumen: 'Esta es la cosecha del periodo 2.',
  duracionMin: 90,
  subtema: 'Cosecha del periodo 2 — mi primer programa Scratch completo',
  preLectura: {
    porQueImporta: 'El producto es programa + diagrama + documentación + sustentación.',
    preguntaDetonante: 'Hace 10 sesiones no sabías qué era un algoritmo. Hoy programas en Scratch un programa con variables, condicionales y bucles. ¿Cómo te sientes con ese crecimiento?',
    activacion: {
      titulo: 'Define tu programa con las 4 técnicas',
      descripcion: 'Actividad 1 · ANALIZA — Define tu programa con las 4 técnicas (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: planeas el programa con las 4 técnicas, lo programas en Scratch, documentas, sustentas.',
      siguiente: 'Guarda tu programa en Scratch.'
    }
  },
  conceptosClave: [
    {
      termino: 'Cosecha del periodo (P2)',
      definicion: 'Trabajo final que integra todo lo aprendido durante el periodo en un solo programa Scratch. Combina algoritmos, pensamiento computacional, diagramas, variables, condicionales, bucles y narrativa interactiva. Es el rito de paso del periodo.',
      ejemplo: 'Tu programa de cosecha podría ser un juego sencillo (atrapar manzanas), una historia interactiva (continuación de la S9), un simulador (clima del día) o una animación con eventos.',
      emoji: '🌾'
    },
    {
      termino: '10 criterios de la rúbrica',
      definicion: 'Las 10 dimensiones con las que el profe evalúa la cosecha: plan inicial, variables, condicionales, bucles, interactividad, diagrama, documentación, funcionamiento, sustentación, personalización. Cada uno vale 1-5 puntos.',
      ejemplo: 'Conocer la rúbrica te permite producir según los criterios. Si sabes que personalización es 10%, harás sprites únicos. Si sabes que documentación es 10%, harás el cuaderno completo.',
      emoji: '📊'
    },
    {
      termino: 'Documentación del programa',
      definicion: 'Conjunto de información que explica qué hace el programa, cómo está estructurado y cómo se usa. Para 7° grado: descripción + lista de variables + capturas + 4 técnicas aplicadas. Es 10% de la rúbrica.',
      ejemplo: 'Una página del cuaderno con: \'Mi programa es un juego donde el sprite atrapa manzanas. Variables: puntaje, vidasRestantes. Capturas: inicio, juego, fin. Descomposición: 4 partes.\'',
      emoji: '📋'
    },
    {
      termino: 'Sustentación oral',
      definicion: 'Presentación de 5 minutos donde explicas tu programa al profe y al grupo. Mostrarse funcionando, explicar decisiones de diseño, comentar qué te costó y aprendiste. Termina con preguntas del profe.',
      ejemplo: '\'30s: tema. 2 min: programa funcionando. 1 min: decisiones de diseño. 30s: qué aprendí. 1 min: preguntas.\' Estructura clara, demostración real.',
      emoji: '🎤'
    },
    {
      termino: 'Autoevaluación con rúbrica',
      definicion: 'Práctica de evaluar tu propio trabajo antes de la evaluación del profe usando los criterios oficiales. Permite identificar puntos débiles y ajustar antes de entregar. Disciplina adulta clave.',
      ejemplo: 'Antes de sustentar: ¿mi programa funciona? (criterio 8). ¿Tiene 2 variables? (criterio 2). ¿La sustentación está lista? (criterio 9). Marcas 1-5 en cada uno y ajustas.',
      emoji: '🪞'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Estás listo para entregar tu cosecha?',
      instrucciones: '5 preguntas para verificar que tu programa cumple los 10 criterios.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los componentes mínimos del programa de cosecha?',
          opciones: [
            'Solo un sprite que se mueve.',
            '2 variables + 2 condicionales + 1 bucle + interactividad + múltiples escenas/sprites.',
            'Solo bucles.',
            'Solo un cuento sin programación.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La cosecha integra 4 conceptos clave del periodo: variables (S5), condicionales (S6), bucles (S7) e interactividad (S9). Si te falta alguno, la cosecha está incompleta.',
          feedbackIncorrecto: '2 variables + 2 condicionales + 1 bucle + interactividad. Esos son los mínimos que demuestran que aprendiste todo el periodo. Falta alguno = cosecha incompleta.'
        },
        {
          enunciado: '¿Qué pesa MÁS, según la rúbrica de 10 criterios?',
          opciones: [
            'Solo el programa.',
            'Funcionamiento real Y sustentación oral Y documentación: cada uno tiene su peso.',
            'Solo la sustentación.',
            'Solo el diagrama.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La rúbrica evalúa 10 criterios distintos, cada uno con su peso. Funcionamiento, sustentación y documentación son todos importantes. No se trata solo del programa.',
          feedbackIncorrecto: '10 criterios = 10 dimensiones evaluadas. Programa funcionando, sustentación oral, documentación, diagrama, todo cuenta. Cada uno aporta a la nota final.'
        },
        {
          enunciado: 'Tu programa funciona pero no documentaste nada en el cuaderno. ¿Está completo?',
          opciones: [
            'Sí, lo importante es que funcione.',
            'No. La documentación es 10% de la rúbrica. Sin ella, pierdes esos puntos.',
            'Sí, solo necesita estar guardado.',
            'Sí, la documentación es opcional.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La documentación NO es opcional. Es donde demuestras qué entiendes, no solo qué hiciste. Programa funciona + documentación = cosecha completa.',
          feedbackIncorrecto: 'Documentación obligatoria. Descripción + variables + capturas + 4 técnicas. Sin ella, pierdes puntos por no demostrar comprensión, solo ejecución.'
        },
        {
          enunciado: 'Antes de la sustentación, ¿qué deberías hacer?',
          opciones: [
            'Nada, llegar directo.',
            'Autoevaluación con los 10 criterios + probar el programa 5 veces + ensayar la presentación.',
            'Dormir mucho.',
            'Borrar el cuaderno.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Autoevaluación + pruebas + ensayo. Llegar a sustentar sin preparación es desperdiciar el trabajo de 10 sesiones. Prepararse es respeto al esfuerzo.',
          feedbackIncorrecto: 'Autoevaluación con rúbrica + probar programa 5 veces + ensayar presentación. La preparación cierra el ciclo del oficio. Improvisar al final daña todo lo anterior.'
        },
        {
          enunciado: 'Durante 10 sesiones aprendiste a programar. ¿Cómo te sentís ahora?',
          opciones: [
            'Como cuando empezaste.',
            'Diferente: ahora soy creador digital, no solo usuario. Esa transformación es real y permanente.',
            'Exactamente igual.',
            'Sin cambio.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Programar tu primer programa completo es rito de paso. Tu identidad digital cambió: ya no solo consumes apps; ahora puedes crear con código. No hay vuelta atrás.',
          feedbackIncorrecto: 'Eres creador digital ahora. Antes consumías apps; ahora puedes crearlas. Esa transformación de identidad te acompaña al resto de tu vida. Es lo más valioso del periodo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy mostrando mis obras (académicas y personales) o las guardo solo para mí?',
    transferencia: 'Guarda tu programa en Scratch.',
    cierre: 'Al terminar la clase: (1) podrás integrar todos los componentes aprendidos en un solo programa; (2) sabrás aplicar las 4 técnicas del pensamiento computacional en tu diseño; (3) podrás evaluar tu programa con rúbrica; (4) habrás creado y sustentado tu primer programa Scratch comp…'
  },
  saberAncestral: {
    saber: 'En el Valle del Cauca, cuando una tejedora terminaba una mochila wayuu o un canasto, no se quedaba con él para ella sola. Doña Sofía y otras tejedoras de la vereda La Plata de Cartago mostraban su obra: la llevaban a la plaza del pueblo, la enseñaban a los vecinos, contaban qué patrón usaron, cuánto tiempo les tomó, qué cambiarían para la próxima. La obra terminada se sustentaba ante la comunidad. Eso no era vanidad: era validación cultural, era transmisión de saberes, era oportunidad de mejorar. Si alguien notaba un error, lo decía con respeto. Si alguien alababa una innovación, otros aprendían. La cosecha no se quedaba en privado. Hoy tú cierras el periodo 2 igual: programaste varios miniproyectos en Scratch durante 9 sesiones; hoy presentas tu obra completa, la sustentás, y la dejas como muestra de lo que ahora sabes hacer.',
    preguntaPuente: 'Hace 10 sesiones no sabías qué era un algoritmo. Hoy programas en Scratch un programa con variables, condicionales y bucles. ¿Cómo te sientes con ese crecimiento?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la cosecha colectiva)',
      lente: 'lente del nosotros',
      cita: '"El que termina su obra y la muestra a la comunidad cierra el ciclo. El que la oculta, la deja incompleta."',
      preguntaEspejo: '¿Estoy mostrando mis obras (académicas y personales) o las guardo solo para mí?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador del trabajo cumplido)',
      lente: 'lente del cuidado interior',
      cita: '"Termina lo que empezaste con la misma atención con que empezaste. La obra cumplida da paz; la inconclusa pesa siempre."',
      preguntaEspejo: '¿Cuántas cosas empecé este año y dejé incompletas? ¿Qué pasaría si las terminara una a una?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del oficio digital)',
      lente: 'lente de la infoesfera',
      cita: '"Programar tu primer programa completo es rito de paso. Cambias de quien aprieta botones a quien crea con código. No hay vuelta atrás."',
      preguntaEspejo: 'Hoy soy creador digital. ¿En qué otras áreas de mi vida soy creador y no solo consumidor?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás integrar todos los componentes aprendidos en un solo programa; (2) sabrás aplicar las 4 técnicas del pensamiento computacional en tu diseño; (3) podrás evaluar tu prog…',
    emocional: 'Hace 10 sesiones empezaste el periodo sin saber programar.',
    ciudadana: 'Doña Sofía la tejedora del Valle no se quedaba con la mochila terminada en su casa: la llevaba a la plaza, la mostraba, recibía retroalimentación, transmitía el saber.',
    local: 'Antes de sustentar, autoevalúa con la rúbrica de 10 criterios.',
    intergeneracional: 'Hoy cambias de identidad: antes eras usuario de programas, ahora eres creador de programas.'
  }
};

export default contenido;
