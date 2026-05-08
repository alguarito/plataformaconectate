/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 10
 * (sesión global 30 — última del grado 8).
 *
 * Tema: Sustentación pública y portafolio digital.
 * Esta guía es la versión MILC v2 con apertura ancestral, pensamiento
 * computacional, 5 dimensiones y Triángulo Dussel-Estoicismo-Floridi.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 10,
  resumen:
    'Cierre del grado 8: del consejo de mayores a la sustentación digital. Aplicas pensamiento computacional al armar tu portafolio y cierras con el Triángulo de pensamiento.',
  duracionMin: 90,
  subtema: 'Cierre del grado · Triángulo de pensamiento',

  preLectura: {
    porQueImporta:
      'Aprender a sustentar es aprender a darle voz a tu trabajo. Hoy lo que practiques aquí te servirá para tu primer trabajo, tu primera entrevista o tu primera asamblea ciudadana.',
    preguntaDetonante:
      '¿Qué del consejo de mayores podemos llevar a una sustentación digital — y qué de lo digital podríamos ofrecerle al consejo?',
    activacion: {
      titulo: 'El círculo de palabra',
      descripcion:
        'En parejas (3 min): cada uno cuenta al otro UN logro del periodo en máximo 60 segundos. El otro escucha sin interrumpir, luego repite con sus palabras lo que entendió. Reflexionen: ¿cuán parecido es esto a sustentar un proyecto?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'Sesiones 21-29: técnicas multimedia, ciberseguridad y ética digital del periodo 3.',
      siguiente: 'Grado 9 abre con tecnología, ciencia y comunicación: sustentar será habilidad transversal.',
    },
  },

  conceptosClave: [
    {
      termino: 'Audiencia',
      definicion:
        'Las personas que te escuchan. Una buena sustentación se diseña para una audiencia concreta, no para "el público en general". Saber a quién hablas cambia qué dices, qué evitas y qué evidencia eliges.',
      ejemplo:
        'No le hablas igual a tu profesor que a tus compañeros que a la junta de acción comunal del barrio. La misma evidencia, distintas palabras y ejemplos.',
      emoji: '👥',
    },
    {
      termino: 'Evidencia',
      definicion:
        'Dato, captura, registro o prueba que sustenta lo que afirmas. Sin evidencia, una sustentación es una opinión. Con evidencia, es un argumento.',
      ejemplo:
        'Si dices "mi proyecto mejora la seguridad digital de mi familia", la evidencia es el antes/después: capturas de las contraseñas débiles que detectaste y de las que crearon nuevas.',
      emoji: '🔍',
    },
    {
      termino: 'Argumentación',
      definicion:
        'Conectar la evidencia con la afirmación mediante razones. No basta con mostrar datos: hay que explicar por qué prueban lo que dices.',
      ejemplo:
        '"Estas capturas (evidencia) muestran que mi familia mejoró la seguridad (afirmación) porque el porcentaje de contraseñas fuertes pasó de 0% a 80% en una semana (razón)."',
      emoji: '🧮',
    },
    {
      termino: 'Anatomía de presentación',
      definicion:
        'La estructura clásica de una buena sustentación: apertura (30s) → problema (1 min) → evidencia (1-2 min) → propuesta (1-2 min) → preguntas (2-3 min) → cierre (30s). Total: 5-7 minutos.',
      ejemplo:
        'Como un libro: portada, planteamiento, capítulos centrales, clímax, preguntas y desenlace. Una sustentación que sigue esta anatomía rara vez se pierde.',
      emoji: '🏛️',
    },
    {
      termino: 'Voz propia',
      definicion:
        'La autoría auténtica: lo que tú aprendiste, en tus palabras, con tus ejemplos. Es lo opuesto a leer un texto que parece de otra persona o que la IA escribió por ti.',
      ejemplo:
        'Si tu portafolio dice cosas que tú no podrías explicar oralmente sin ese papel, perdiste tu voz. Si lo que escribiste suena como hablas, la encontraste.',
      emoji: '🎙️',
    },
    {
      termino: 'Retroalimentación iterativa',
      definicion:
        'Aceptar preguntas y críticas para mejorar, no para defenderte. Cada pregunta de la audiencia es una oportunidad de iterar tu propuesta antes de la siguiente versión.',
      ejemplo:
        'Si te preguntan "¿y qué pasa con los adultos mayores que no usan internet?" y tu portafolio no lo cubre, anótalo como mejora futura, no como ataque.',
      emoji: '🔄',
    },
    {
      termino: 'Lenguaje no verbal',
      definicion:
        'Lo que comunicas sin palabras: voz, postura, mirada, manos, ritmo. Estudios de oratoria muestran que el 38% del impacto viene de la voz, el 55% del cuerpo y solo el 7% de las palabras exactas.',
      ejemplo:
        'Respirar profundo antes de empezar, mantener pies firmes, mirar a tres personas distintas durante la sustentación, y dejar silencio después de una idea importante.',
      emoji: '🧘',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · ¿Cómo se sustenta bien?',
      instrucciones:
        '5 preguntas tipo ICFES sobre la anatomía de una sustentación pública y el Triángulo de pensamiento. Lee con calma, escoge la mejor opción, revisa el feedback antes de avanzar.',
      preguntas: [
        {
          enunciado:
            'Camila va a sustentar su portafolio. Está nerviosa. Según la práctica estoica de Epicteto, ¿qué debería distinguir antes de empezar?',
          opciones: [
            'Distinguir las preguntas fáciles de las difíciles',
            'Distinguir lo que depende de ella (su preparación, su atención) de lo que no (las preguntas que harán)',
            'Distinguir a sus amigos de sus enemigos en la audiencia',
            'Distinguir las evidencias buenas de las malas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. La libertad estoica empieza distinguiendo lo que depende de ti (preparación, respiración, juicio) de lo que no (qué preguntan). Eso baja la ansiedad.',
          feedbackIncorrecto:
            '❌ Revisa la cita de Epicteto en la guía: "Algunas cosas dependen de nosotros y otras no — distinguir esto es la libertad". El estoicismo no separa amigos/enemigos ni preguntas fáciles/difíciles, separa control/no-control.',
        },
        {
          enunciado:
            'Aplicando el pilar de ABSTRACCIÓN del pensamiento computacional a tu sustentación, ¿qué deberías producir?',
          opciones: [
            'Una lista exhaustiva de todo lo que hiciste',
            'Una frase única que diga lo esencial de tu portafolio',
            'Un diagrama complejo con muchas conexiones',
            'Un resumen detallado de cada evidencia',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. Abstracción = quedarte con lo esencial. "Si no cabe en una frase, todavía no está clara." Es tu brújula durante la sustentación.',
          feedbackIncorrecto:
            '❌ Abstracción NO es resumir todo: es elegir lo esencial. Una sola frase que capture el corazón del trabajo. Lo demás es desarrollo.',
        },
        {
          enunciado:
            'Dussel propone que toda comunidad de comunicación se hace plena cuando incluye "la voz del excluido". En tu sustentación, ¿qué pregunta refleja mejor esta idea?',
          opciones: [
            '¿Qué cosas sé que mis compañeros no saben?',
            '¿Quién no está en mi sustentación pero debería ser escuchado?',
            '¿Qué evidencias tengo más fuertes?',
            '¿Cómo gano la atención del profesor?',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. La analéctica de Dussel parte del Otro — del que no tiene voz. Una sustentación es más fuerte cuando reconoce a quienes habitualmente quedan fuera.',
          feedbackIncorrecto:
            '❌ Dussel no se trata de saber más que otros ni de ganar atención. Su filosofía pregunta: ¿quién está siendo silenciado y cómo le doy voz?',
        },
        {
          enunciado:
            'Floridi dice que somos "inforgs" en una infoesfera. Al armar tu portafolio público, ¿qué responsabilidad asumes como inforg?',
          opciones: [
            'Mostrar absolutamente todo lo que hiciste',
            'Distinguir qué información es de uso público y cuál merece cuidado o protección',
            'Subir tantos archivos como sea posible',
            'Copiar el portafolio de un compañero exitoso',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. Ser inforg responsable es decidir éticamente qué se muestra y qué se protege. La privacidad de otros y los datos sensibles requieren cuidado, no exhibición.',
          feedbackIncorrecto:
            '❌ Floridi no pide mostrar todo ni nada — pide DECIDIR éticamente. Cada acto de información tiene peso moral. Hay datos que se protegen, no se exhiben.',
        },
        {
          enunciado:
            'En la "anatomía de la sustentación" presentada en la guía, ¿qué fase va inmediatamente DESPUÉS de presentar la evidencia?',
          opciones: [
            'El cierre y agradecimiento',
            'Las preguntas de la audiencia',
            'La propuesta o producto final',
            'La apertura con saludo',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Sí. La anatomía es: Apertura → Problema → Evidencia → Propuesta → Preguntas → Cierre. La propuesta sigue inmediatamente a la evidencia porque se sustenta en ella.',
          feedbackIncorrecto:
            '❌ Recuerda el algoritmo de presentación: Apertura → Problema → Evidencia → **Propuesta** → Preguntas → Cierre. La propuesta debe venir después de la evidencia y antes de las preguntas.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      'Esta guía es el cierre del grado 8. ¿Cuál de las tres voces del Triángulo (Dussel, Estoicismo, Floridi) te resuena más en este momento de tu vida y por qué?',
    transferencia:
      'Identifica un espacio en tu colegio, barrio, parroquia o familia donde podrías volver a sustentar algo en los próximos 6 meses. Anótalo. Conviértelo en compromiso real, no en intención vaga.',
    cierre:
      'Sustentar es darle voz a algo. La voz del consejo de mayores se hace, hoy, también voz digital. El círculo se cierra: lo ancestral camina con lo contemporáneo cuando ambos se escuchan.',
  },
};

export default contenido;
