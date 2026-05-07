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
      termino: 'Apertura ancestral-contemporánea',
      definicion:
        'Conexión que cada guía MILC abre entre un saber tradicional (consejo de mayores, tejido, minga) y un saber técnico moderno. No es decoración: es anclaje cultural.',
      ejemplo:
        'Sustentar en círculo de mayores (ancestral) ↔ Sustentar un portafolio digital (contemporáneo). Ambos son actos comunitarios de palabra con evidencias.',
      emoji: '🪶',
    },
    {
      termino: 'Pensamiento computacional',
      definicion:
        'Cuatro pilares para resolver problemas: descomposición, reconocimiento de patrones, abstracción y algoritmo. Sirve para programar pero también para preparar una sustentación.',
      ejemplo:
        'Para tu sustentación: descompones el proyecto en partes, reconoces patrones de buenas presentaciones, abstraes tu mensaje en una frase, y diseñas un algoritmo (apertura → evidencia → propuesta → preguntas → cierre).',
      emoji: '🧩',
    },
    {
      termino: 'Portafolio digital',
      definicion:
        'Conjunto organizado de evidencias (textos, imágenes, audios, capturas, reflexiones) que demuestran tu proceso y aprendizajes durante un periodo escolar.',
      ejemplo:
        'Carpeta digital con 6+ evidencias: una guía resuelta de cada periodo, una evidencia multimedia, una de ciberseguridad, una colaborativa, una reflexión sobre un error, y una autoevaluación con rúbrica.',
      emoji: '📁',
    },
    {
      termino: 'Cinco dimensiones de la evaluación liberadora',
      definicion:
        'Marco MILC para que la evaluación no sea solo nota: incluye desarrollo personal, control emocional, reflexión ciudadana, reflexión local y vínculo intergeneracional.',
      ejemplo:
        'Después de sustentar, te preguntas: ¿qué cambió en mí? ¿qué emoción manejé? ¿cómo aporta esto a la democracia? ¿qué dice esto a Cartago? ¿qué le contaría a mi abuela?',
      emoji: '🌱',
    },
    {
      termino: 'Triángulo de pensamiento',
      definicion:
        'Cierre filosófico de cada guía MILC con tres voces: Dussel (lente del nosotros), Estoicismo (lente del cuidado interior), Floridi (lente de la infoesfera).',
      ejemplo:
        'En esta guía: Dussel pregunta a quién das voz al sustentar. Epicteto pregunta qué juicio eliges para no temer al público. Floridi pregunta qué información proteges y cuál haces pública.',
      emoji: '🔺',
    },
    {
      termino: 'Inforg (Floridi)',
      definicion:
        'Concepto del filósofo Luciano Floridi: somos organismos de información que vivimos en una infoesfera. Cada decisión de información tiene peso ético.',
      ejemplo:
        'Cuando decides qué incluir o no en tu portafolio público, estás actuando como inforg responsable: cuidas tus datos y los de tus compañeros.',
      emoji: '🌐',
    },
    {
      termino: 'Analéctica (Dussel)',
      definicion:
        'Método del filósofo Enrique Dussel: parte del Otro como Otro. Una sustentación es analéctica cuando incluye la voz de quien habitualmente queda fuera.',
      ejemplo:
        'Si tu portafolio sobre ciberseguridad nunca menciona a las personas mayores que no usan internet, la analéctica te invita a darles lugar.',
      emoji: '🤝',
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
