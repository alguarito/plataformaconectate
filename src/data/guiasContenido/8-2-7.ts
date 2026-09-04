/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/8/8-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 7,
  titulo: 'Depuración — buscar el error como el relojero busca el tic-tac',
  resumen: 'Como el ojo del mecánico de pueblo: buscar dónde, probar, ajustar, probar de nuevo. Aprendes método sistemático de depuración con casos esperados, contrarios y de límite.',
  duracionMin: 90,
  subtema: 'Depuración · Hipótesis · Pruebas · Bitácora',
  preLectura: {
    porQueImporta: 'Saber depurar es lo que distingue un programador novato de uno profesional. En cualquier proyecto futuro (web, móvil, IoT) los bugs son inevitables — el método sistemático los encuentra.',
    preguntaDetonante: '¿Qué del ojo del mecánico de pueblo — su método disciplinado de buscar la falla — podemos llevar a la depuración de código?',
    activacion: {
      titulo: 'El bug detective',
      descripcion: 'En 5 minutos: en parejas recuerden una falla técnica reciente (app que falla, sensor que no responde, video que no carga). Formulen 3 hipótesis distintas de la causa.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 16 calibraste sensores y aprendiste sobre umbrales.',
      siguiente: 'En la sesión 18 simularás un sistema de alerta ambiental completo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Bug',
      definicion: 'Pieza del programa que no funciona como se esperaba. Puede ser una condición invertida, una variable mal inicializada, una pausa olvidada.',
      ejemplo: 'El programa muestra ícono feliz cuando debería mostrar triste. Síntoma claro de un if con condición invertida.',
      emoji: '🐛',
      categoria: 'Diagnóstico'
    },
    {
      termino: 'Reproducir el bug',
      definicion: 'Primer paso de la depuración. Identificar exactamente qué entrada produce el error, para poder investigarlo con método.',
      ejemplo: 'El error aparece solo cuando la temperatura está por debajo de 18. Con esa pista, ya sabes dónde mirar.',
      emoji: '🔁'
    },
    {
      termino: 'Hipótesis',
      definicion: 'Explicación posible del origen del bug, formulada antes de tocar el código. Se ordena por probabilidad y se prueba una a una.',
      ejemplo: 'Hipótesis 1, la condición está invertida. Hipótesis 2, los íconos están cambiados de rama. Pruebas la más probable primero.',
      emoji: '💡',
      categoria: 'Resolución'
    },
    {
      termino: 'Una hipótesis una prueba',
      definicion: 'Regla de oro del oficio. Cambiar UNA sola cosa por prueba. Si cambias varias, no sabrás cuál arregló (o empeoró) el problema.',
      ejemplo: 'Cambias el operador menor por mayor. Compilas. Pruebas. Si funciona, hipótesis confirmada. Sin tocar nada más.',
      emoji: '🎯'
    },
    {
      termino: 'Print debugging',
      definicion: 'Técnica de insertar mostrar variable en puntos del código para ver qué valor tiene cada variable en cada momento. La más vieja y eficaz.',
      ejemplo: 'Insertas mostrar nivel_luz justo antes del if. Si imprime 200 cuando esperabas 50, sabes que el sensor no está leyendo bien.',
      emoji: '🖨️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes depurar como el relojero?',
      instrucciones: '5 preguntas para verificar que aplicas el método de una hipótesis a la vez.',
      preguntas: [
        {
          enunciado: 'Cambias 5 cosas a la vez y el programa empieza a funcionar. ¿Qué problema hay?',
          opciones: [
            'Ninguno, ya funciona',
            'No sabes cuál de los 5 cambios arregló el bug',
            'El programa va más rápido',
            'El programa va más lento'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Sin saber qué cambio arregló el problema, no hay aprendizaje. El próximo bug te tomará el mismo tiempo.',
          feedbackIncorrecto: 'El problema es que no sabes cuál de los 5 cambios fue el bueno. La depuración profesional exige una hipótesis a la vez.'
        },
        {
          enunciado: '¿Cuál es el primer paso del método profesional de depuración?',
          opciones: [
            'Reproducir el bug',
            'Cambiar el código',
            'Reiniciar el computador',
            'Eliminar el programa'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Sin reproducir el bug, no puedes investigarlo. Identificar qué entrada lo dispara es el inicio.',
          feedbackIncorrecto: 'Primero se reproduce. Sin saber qué entrada genera el bug, cualquier cambio es a ciegas.'
        },
        {
          enunciado: 'La técnica de insertar mostrar variable en puntos del código se llama...',
          opciones: [
            'Compilación',
            'Aislar el problema',
            'Print debugging',
            'Búsqueda binaria'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Print debugging. Es la técnica más vieja y la más eficaz en cualquier lenguaje.',
          feedbackIncorrecto: 'Se llama print debugging. Aunque suene básica, es la herramienta más usada por programadores profesionales.'
        },
        {
          enunciado: '¿Por qué se documenta el proceso de depuración en una bitácora?',
          opciones: [
            'Por costumbre',
            'Porque lo exige MakeCode',
            'Para hacer más larga la tarea',
            'Para no repetir pruebas y para que otro pueda heredar el código'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La bitácora evita pruebas repetidas y permite que un compañero entienda qué pasó sin reabrir la investigación.',
          feedbackIncorrecto: 'La razón es práctica: la bitácora evita bucles de pruebas repetidas y permite que otro hereden el código con contexto.'
        },
        {
          enunciado: 'Tu primera hipótesis se descarta tras probarla. ¿Qué sigue?',
          opciones: [
            'Cambiar de proyecto',
            'Hacer 5 cambios a la vez',
            'Borrar el programa',
            'Volver al código original y probar la siguiente hipótesis'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Vuelves al código original (sin acumular cambios) y pruebas la siguiente hipótesis ordenada por probabilidad.',
          feedbackIncorrecto: 'Vuelves al código original y pruebas la siguiente hipótesis. Acumular cambios o cambiar de proyecto no es depurar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'La depuración disciplinada es habilidad transferible: encontrar la causa raíz se aplica a problemas técnicos, sociales, personales. ¿En qué situación de tu vida sería útil aplicar el método "hipótesis-prueba-corrección-re-test"?',
    transferencia: 'Esta semana: cuando algo te falle (app, dispositivo, plan), aplica el método: 3 hipótesis distintas, prueba aislada, corrección mínima, verificación. Documenta el proceso.',
    cierre: 'El ojo del mecánico y el debugger digital comparten método: paciencia disciplinada, no fuerza bruta. La sabiduría artesanal sobrevive en la depuración profesional.'
  },
  saberAncestral: {
    saber: 'En el centro histórico de Cartago, en la carrera 5 cerca de la galería, hubo durante décadas un taller de relojería donde un señor mayor de gafas gruesas atendía las piezas que ningún otro mecánico se atrevía a reparar: relojes de pared antiguos heredados de los abuelos, relojes de cuerda traídos de Suiza, despertadores de hojalata de los años 60. El relojero tenía un método que cualquier aprendiz de cualquier oficio podría reconocer como sabiduría profesional: nunca tocaba dos piezas al mismo tiempo. Cuando un reloj llegaba averiado, primero escuchaba: ¿el tic-tac sonaba bien o cojeaba? ¿había un engranaje que rozaba? ¿la cuerda estaba forzada? Después formulaba una hipótesis ("creo que es el escape", decía). Después ajustaba una sola pieza, no varias. Después escuchaba de nuevo: si el tic-tac se corrigió, había encontrado el error; si no, volvía a la pieza original y formulaba otra hipótesis. Una hipótesis, una prueba, un resultado: ese era el método silencioso del relojero, y es exactamente el método profesional de la depuración digital moderna.',
    fuente: 'Oficio del mecánico de pueblo en el Valle del Cauca',
    preguntaPuente: '¿Qué sabía el relojero al cambiar una sola pieza a la vez, que el programador novato olvida cuando toca 5 líneas de código simultáneamente y luego no sabe cuál arregló el problema? ¿Y por qué print debugging es la técnica más vieja y más eficaz del oficio?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un bug ignorado afecta a quien usa el sistema; documentar la depuración es respeto por la cadena de usuarios futuros.',
      preguntaEspejo: '¿Mi bitácora permitiría que otro programador entienda qué hice y por qué, o solo yo sé qué pasó?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Una hipótesis a la vez es disciplina; tocar varias piezas simultáneas es vanidad disfrazada de eficiencia.',
      preguntaEspejo: '¿Estoy probando una hipótesis a la vez, o cambiando varias cosas esperando que algo funcione?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La depuración rigurosa es la nueva ética profesional del oficio digital en la era del software ubicuo.',
      preguntaEspejo: '¿Mi depuración tiene el rigor que tendría si este código fuera para un sistema crítico, o me conformo con que parezca funcionar?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste un método transferible: hipótesis, prueba, corrección, verificación. Sirve para código, dispositivos, conflictos, decisiones.',
    emocional: 'Resististe la tentación de la fuerza bruta — entendiste que la paciencia disciplinada es virtud, no debilidad.',
    ciudadana: 'La capacidad de depurar problemas sistemáticamente es habilidad democrática: pensar antes de actuar es ciudadanía adulta.',
    local: 'Heredaste el ojo del mecánico de pueblo: oír primero, tocar después, abrir solo cuando es necesario.',
    intergeneracional: 'El método artesanal de diagnóstico y el debugger moderno comparten lógica. Lo que cambia es el medio, no la paciencia.'
  }
};

export default contenido;
