/**
 * Contenido web del examen final · Grado 9 · Período 1
 *
 * Auto-generado desde content/examenes/9-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 9,
  periodo: 1,
  titulo: 'Examen final · Técnica y tecnología en perspectiva histórica',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Técnica y tecnología en perspectiva histórica',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuál es la diferencia central entre técnica y tecnología?',
        opciones: [
          'Son lo mismo',
          'Técnica es saber del cuerpo aplicado a un material; tecnología es el medio que amplifica la técnica',
          'Técnica es antigua, tecnología es moderna',
          'Técnica es de pueblos pobres, tecnología es de ricos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Técnica = saber del cuerpo. Tecnología = medio que amplifica la técnica. Esa distinción atraviesa todo el periodo.',
        feedbackIncorrecto: 'Técnica es saber del cuerpo (cómo amasar arcilla); tecnología es el medio que la amplifica (torno). No es cuestión de antiguo/moderno ni de clase.'
      },
      {
        enunciado: '¿Cuál de estas NO es una máquina simple del campo colombiano?',
        opciones: [
          'La rueda hidráulica del molino',
          'La balanza del granero',
          'El motor eléctrico industrial',
          'La polea del pozo'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Correcto. Las 3 primeras son máquinas simples (rueda, palanca, polea). El motor eléctrico es máquina compuesta industrial moderna.',
        feedbackIncorrecto: 'El motor eléctrico no es máquina simple. Las simples (rueda, palanca, polea, plano inclinado) son base del campo tradicional.'
      },
      {
        enunciado: '¿Por qué la sesión 3 dice que la balanza es "acto político"?',
        opciones: [
          'Porque pesa cosas',
          'Porque quien decide la unidad y la calibra define quién pierde y quién gana en cada transacción',
          'Porque es de metal',
          'Porque está en el granero'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La balanza no es neutra: la calibración decide la economía cotidiana. Por eso fue regulada históricamente por las autoridades.',
        feedbackIncorrecto: 'La balanza decide quién pierde y quién gana cada transacción. La calibración no es técnica neutra: es decisión política con consecuencias.'
      },
      {
        enunciado: '¿Cuál fue la primera técnica importante en la línea del tiempo del periodo?',
        opciones: [
          'La imprenta',
          'El fuego',
          'El motor a vapor',
          'El chip'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El fuego es la primera técnica fundamental: transformación intencional de la materia.',
        feedbackIncorrecto: 'El fuego es la primera. Antes solo había uso de herramientas naturales; con fuego empieza la transformación intencional.'
      },
      {
        enunciado: '¿Qué cambió la Revolución Industrial respecto al trabajo del artesano?',
        opciones: [
          'Nada',
          'Separó al trabajador del oficio completo: ya no hace toda la pieza, hace una parte',
          'Hizo el oficio más fácil',
          'Aumentó el salario del artesano'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. División del trabajo: el artesano que sabía todo el oficio fue reemplazado por obreros que repiten una parte. Es el cambio estructural.',
        feedbackIncorrecto: 'Separó al trabajador del oficio completo. La división del trabajo perdió la sabiduría integral del artesano para ganar escala.'
      },
      {
        enunciado: '¿Cuál fue el aporte central de la imprenta de Gutenberg?',
        opciones: [
          'Inventar el alfabeto',
          'Reproducir el mismo texto muchas veces, masificando el acceso a la lectura',
          'Crear los libros por primera vez',
          'Reemplazar a los escritores'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La imprenta no inventa el libro: lo reproduce a escala, haciendo accesible la lectura a más personas.',
        feedbackIncorrecto: 'Reproducción a escala. Los libros existían antes; la imprenta los multiplica y democratiza el acceso.'
      },
      {
        enunciado: '¿Cuál de estos NO fue un efecto histórico de la electricidad?',
        opciones: [
          'Iluminación de ciudades y campos',
          'Funcionamiento de motores',
          'Comunicaciones a distancia (telégrafo, teléfono, radio)',
          'Eliminación total de los oficios manuales'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. La electricidad iluminó, dio motor y permitió comunicación. NO eliminó los oficios manuales (siguen vivos: panadero, sastre, herrero).',
        feedbackIncorrecto: 'Los oficios manuales no se eliminaron. La electricidad amplifica pero los oficios de cuerpo siguen vivos.'
      },
      {
        enunciado: '¿Cuál es la línea de evolución que conecta el ábaco con el chip moderno?',
        opciones: [
          'No tienen relación',
          'Ambos son herramientas de cálculo; el chip es la versión electrónica del ábaco mecánico',
          'El chip reemplazó a las manos',
          'El ábaco era para niños'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El ábaco, las calculadoras mecánicas y el chip son una misma línea: instrumentos que amplifican el cálculo.',
        feedbackIncorrecto: 'Ambos son instrumentos de cálculo. El chip es continuidad de una larga historia que empezó con piedras, ábacos y calculadoras mecánicas.'
      },
      {
        enunciado: '¿Cuál de estas es una tecnología propia de los pueblos colombianos?',
        opciones: [
          'El microprocesador',
          'Las técnicas Quimbaya de cerámica con barniz que el mundo está redescubriendo',
          'El motor a vapor',
          'La imprenta'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Las técnicas Quimbaya son sofisticación tecnológica propia: barnices vegetales, hornos de leña controlados, decoración por punzones.',
        feedbackIncorrecto: 'Las técnicas Quimbaya son tecnología propia avanzada. Hoy se redescubren y estudian en universidades internacionales.'
      },
      {
        enunciado: 'Tu manifiesto del técnico crítico debe incluir...',
        opciones: [
          'Solo elogios a la tecnología',
          'Una postura sobre cuándo adoptar, cuándo cuestionar, qué oficios proteger',
          'Solo rechazos a la modernidad',
          'Una lista de aparatos electrónicos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El técnico crítico tiene postura: adopta con criterio, cuestiona con razones, protege lo que la tecnología no debería destruir.',
        feedbackIncorrecto: 'Postura clara: adoptar, cuestionar, proteger. El técnico crítico no es elogio ciego ni rechazo automático.'
      },
      {
        enunciado: '¿Cuál es el oficio ancestral que conecta con el periodo entero?',
        opciones: [
          'El alfarero Quimbaya con su cadena de técnicas del cuerpo',
          'El programador del siglo XX',
          'El ingeniero industrial',
          'El piloto de avión'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. El alfarero Quimbaya dominaba la técnica del cuerpo; el torno y el horno son tecnología que amplifica el oficio.',
        feedbackIncorrecto: 'El alfarero Quimbaya. Su cadena de técnicas (preparar arcilla, moldear, decorar, secar, cocer) es modelo de oficio integral.'
      },
      {
        enunciado: 'Una palanca permite levantar 100 kg con esfuerzo de 25 kg. ¿Es máquina simple?',
        opciones: [
          'No',
          'Sí: amplifica la fuerza del cuerpo sin requerir energía externa',
          'Solo si es metálica',
          'Solo si es industrial'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Las máquinas simples (palanca, rueda, polea, plano inclinado, cuña, tornillo) amplifican el esfuerzo del cuerpo.',
        feedbackIncorrecto: 'Sí, la palanca es máquina simple. Amplifica la fuerza con solo geometría, sin energía externa.'
      },
      {
        enunciado: 'Un comerciante calibra su balanza para mostrar 10% más peso. ¿Qué problema técnico-político tiene?',
        opciones: [
          'Ninguno',
          'Estafa al cliente porque modifica intencionalmente la unidad de medida',
          'Mejor servicio',
          'Es legal'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La balanza descalibrada es estafa: la unidad de medida debe ser fija. Por eso hay autoridades que la regulan.',
        feedbackIncorrecto: 'Es estafa. La balanza es acto político: quien manipula la unidad gana ilegítimamente. Existen leyes que lo prohíben.'
      },
      {
        enunciado: '¿Cuál orden cronológico es CORRECTO?',
        opciones: [
          'Imprenta → fuego → electricidad → chip',
          'Fuego → rueda → imprenta → electricidad → chip',
          'Chip → fuego → rueda → imprenta',
          'Todo al mismo tiempo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Fuego (prehistoria) → rueda (Neolítico) → imprenta (s. XV) → electricidad (s. XIX) → chip (s. XX).',
        feedbackIncorrecto: 'Fuego (más antiguo) → rueda → imprenta → electricidad → chip (más reciente). Cada hito amplifica el anterior.'
      },
      {
        enunciado: '¿En qué siglo se ubica típicamente la Revolución Industrial?',
        opciones: [
          'Siglo XV',
          'Siglos XVIII-XIX (a partir de Inglaterra y luego Europa y América)',
          'Siglo XXI',
          'Antes de Cristo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Inicios mediados del siglo XVIII en Inglaterra; expansión en los siglos XVIII y XIX.',
        feedbackIncorrecto: 'Siglos XVIII-XIX. Empezó en Inglaterra alrededor de 1760 con el motor a vapor y la mecanización textil.'
      },
      {
        enunciado: '¿Qué consecuencia social trajo la imprenta?',
        opciones: [
          'Disminuyó la lectura',
          'Democratizó el acceso a libros y aceleró la difusión de ideas (Reforma, Ciencia, Educación)',
          'Eliminó a los autores',
          'Hizo más caros los libros'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La imprenta abarata libros, masifica lectura y acelera la difusión de ideas. La Reforma y la Ciencia moderna nacen gracias a ella.',
        feedbackIncorrecto: 'Democratizó el acceso. La imprenta es condición necesaria para la Reforma, la Revolución Científica y la educación pública moderna.'
      },
      {
        enunciado: '¿Cuál de estos es uso DIRECTO de la electricidad como descubrimiento?',
        opciones: [
          'Encender un fuego con piedras',
          'Iluminar un aula con bombillos LED',
          'Moler maíz con piedras',
          'Pesar en balanza mecánica'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La iluminación con bombillos es uso directo de la electricidad. Las otras opciones son técnicas anteriores.',
        feedbackIncorrecto: 'Iluminar con LEDs es uso directo. Las otras opciones (fuego, piedras, balanza) son técnicas que no requieren electricidad.'
      },
      {
        enunciado: '¿Qué tienen en común el ábaco, la calculadora mecánica y el computador?',
        opciones: [
          'Todos son del siglo XXI',
          'Todos son instrumentos para amplificar el cálculo humano',
          'Todos son chinos',
          'Todos son eléctricos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Pertenecen a la misma línea histórica: amplificar el cálculo del cuerpo. Cambia el medio, no el propósito.',
        feedbackIncorrecto: 'Amplificar el cálculo del cuerpo. La línea evolutiva mantiene el propósito; los medios cambian (cuentas, engranajes, electrónica).'
      },
      {
        enunciado: 'Las tecnologías propias de los pueblos del Pacífico colombiano (canoas, redes, sistemas de pesca) son...',
        opciones: [
          'Tecnologías inferiores a las occidentales',
          'Tecnologías sofisticadas adaptadas al ecosistema específico, con saberes que el mundo redescubre',
          'Folclor sin valor técnico',
          'Solo arte'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Son tecnologías de alta sofisticación contextual. Hoy se estudian para diseño sostenible, biomimética y desarrollo local.',
        feedbackIncorrecto: 'Tecnologías sofisticadas con saberes contextuales. La mirada colonial las minimiza; la mirada crítica las recupera.'
      },
      {
        enunciado: 'Tu manifiesto del técnico crítico ante una tecnología nueva debe preguntar...',
        opciones: [
          '¿Es bonita?',
          '¿Qué oficio amplifica?, ¿qué oficio silencia?, ¿quién decide su uso?, ¿a quién beneficia?',
          '¿Cuánto cuesta?',
          '¿Está de moda?'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Las preguntas del técnico crítico cruzan oficio, decisión y beneficio. Esa es la postura activa frente a cualquier tecnología nueva.',
        feedbackIncorrecto: 'Las preguntas son: qué oficio amplifica, cuál silencia, quién decide, a quién beneficia. Esa postura define al técnico crítico.'
      },
      {
        enunciado: 'Tu hermana menor te pregunta qué es "técnica". ¿Qué respondes con vocabulario del periodo?',
        opciones: [
          'Lo que sale en los celulares',
          'Saber del cuerpo aplicado a un material concreto, transmitido por imitación o palabra (cómo amasar pan, cómo tejer, cómo cortar madera)',
          'Las máquinas grandes',
          'Lo que sale en internet'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Técnica es saber del cuerpo aplicado a un material concreto. La tecnología viene después como amplificador.',
        feedbackIncorrecto: 'Técnica es saber del cuerpo aplicado a un material. Es el oficio. La tecnología es el medio que después amplifica ese oficio.'
      },
      {
        enunciado: '¿Qué postura asume el técnico crítico contemporáneo frente a las tecnologías propias del Pacífico colombiano?',
        opciones: [
          'Las desprecia como folclor',
          'Las reconoce como sofisticación contextual y aprende de ellas para diseñar tecnologías sostenibles',
          'Las copia tal cual',
          'Las olvida'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Reconocimiento + aprendizaje. Las tecnologías propias son fuente viva para diseñar respuestas locales actuales.',
        feedbackIncorrecto: 'Reconocer + aprender. Las tecnologías propias del Pacífico son sofisticación contextual; descartarlas como folclor empobrece nuestra mirada técnica.'
      }
    ]
  }
};

export default contenido;
