/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 10
 * (sesión global 10).
 *
 * Auto-generado desde content/guias/8/8-1-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 10,
  titulo: 'Sustentar el mini estudio — cuatro minutos y las preguntas de los demás',
  resumen: 'Cuatro minutos, cinco diapositivas y las preguntas de los demás. Hoy llevas tu mini estudio al fogón del salón, como el nak chak misak donde el asunto se cuenta y se somete a las preguntas.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Lo que no puedes contar en cuatro minutos todavía no lo entiendes del todo. Y responder «no lo resolví» con honestidad es una habilidad que vas a usar toda la vida.',
    preguntaDetonante: 'Cuando te pregunten «¿y a quién no encuestaste?», ¿vas a responder o a defenderte?',
    activacion: {
      titulo: 'Un minuto sin leer',
      descripcion: 'En 3 minutos, cuéntale a tu pareja tu mini estudio en un minuto, sin mirar el informe. ¿Qué fue lo primero que dijiste? ¿Era lo más importante?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 9 hiciste el mini estudio de ocho etapas.',
      siguiente: 'El periodo 2 arranca con lógica avanzada y micro:bit.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación',
      definicion: 'Contar en público un trabajo propio con tiempo limitado, apoyo visual y preguntas del público.',
      ejemplo: 'Cuatro minutos, cinco diapositivas y tres preguntas del salón.',
      categoria: 'La sustentación'
    },
    {
      termino: 'Las cinco diapositivas',
      definicion: 'Pregunta, método, hallazgo, gráfico, decisión y limitaciones. Una idea por diapositiva y menos de veinticinco palabras.',
      ejemplo: 'La diapositiva 3 dice solo «3 horas al día en promedio; máximo 8», con letra grande.',
      categoria: 'La sustentación'
    },
    {
      termino: 'Guion hablado',
      definicion: 'Lo que vas a decir, escrito para ordenarte y ensayarlo. No se lee en público.',
      ejemplo: 'Unas seiscientas palabras son cuatro minutos hablando con calma.',
      categoria: 'La sustentación'
    },
    {
      termino: 'Responder con honestidad',
      definicion: 'Decir lo que sabes y reconocer lo que no resolviste, con la razón.',
      ejemplo: '«No lo resolví, porque solo encuesté a mi salón. Con más tiempo encuestaría a los tres octavos».',
      categoria: 'Las preguntas'
    },
    {
      termino: 'Los cinco criterios',
      definicion: 'Tiempo cumplido, se entendió qué hizo, cifras con contexto, gráfico honesto, dijo qué no pudo saber.',
      ejemplo: 'Evaluar a un compañero es marcar los cinco y hacerle una pregunta que le sirva.',
      categoria: 'Las preguntas'
    },
    {
      termino: 'Autoevaluación concreta',
      definicion: 'Una fortaleza y una mejora que se puedan comprobar la próxima vez.',
      ejemplo: '«Controlé el tiempo» y «la próxima vez ensayo tres veces».',
      categoria: 'Las preguntas'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes sustentar en cuatro minutos?',
      instrucciones: 'Cinco preguntas para verificar que sabes reducir, contar y responder. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu diapositiva del hallazgo tiene cuatro párrafos. ¿Qué pasa cuando la proyectas?',
          opciones: [
            'El grupo la lee y deja de escucharte mientras habla.',
            'El grupo entiende mejor, porque tiene más información.',
            'El cronómetro se detiene mientras la leen en silencio.',
            'Nada, porque las diapositivas no importan en la nota.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Una diapositiva llena compite con tu voz. Menos de veinticinco palabras y tú cuentas el resto.',
          feedbackIncorrecto: 'Más texto no es más claridad. La gente lee en vez de escuchar. La diapositiva se lee en cinco segundos.'
        },
        {
          enunciado: 'Un compañero te pregunta algo que tu estudio no responde. ¿Cuál es la mejor respuesta?',
          opciones: [
            'Inventar una explicación razonable para no quedar mal delante del grupo.',
            'Decir que la pregunta no tiene que ver con el tema del estudio.',
            'Decir «no lo resolví» y explicar por qué, con la limitación.',
            'Pedirle que lo busque él mismo después de la clase.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Reconocer lo que no resolviste, con la razón, es la respuesta más profesional que hay.',
          feedbackIncorrecto: 'Inventar o evadir hunde la sustentación. «No lo resolví porque…» la sostiene.'
        },
        {
          enunciado: '¿Cuánto tiempo le toca, más o menos, a cada una de las cinco diapositivas en cuatro minutos?',
          opciones: [
            'Unos dos minutos a la primera y el resto se reparte como salga.',
            'Entre 45 y 60 segundos cada una, con el hallazgo un poco más largo.',
            'Diez segundos cada una y el resto para preguntas.',
            'Depende de cuánto texto tenga cada diapositiva.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Unos 45 segundos por diapositiva y 60 para el hallazgo suman los cuatro minutos.',
          feedbackIncorrecto: 'Cuatro minutos entre cinco ideas son unos 45 segundos cada una. El hallazgo puede llevarse un poco más.'
        },
        {
          enunciado: '¿Cuál de estas es una autoevaluación concreta?',
          opciones: [
            'Estuvo bien, aunque podría mejorar en varias cosas la próxima vez.',
            'Me sentí nervioso pero lo hice lo mejor que pude en ese momento.',
            'Creo que en general fue una buena sustentación para el grupo.',
            'Controlé el tiempo; la próxima vez ensayo tres veces para no leer.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Una fortaleza que se puede comprobar y una mejora que dice qué vas a hacer.',
          feedbackIncorrecto: '«Bien», «lo mejor que pude» y «en general» no se pueden comprobar. Una autoevaluación concreta nombra algo que hiciste y algo que harás.'
        },
        {
          enunciado: 'Evalúas a un compañero. ¿Cuál de estas observaciones sigue los cinco criterios?',
          opciones: [
            'Me gustó mucho, hablas muy bien y se te entiende todo lo que dices.',
            'Dijo el promedio sin unidad ni comparación; el gráfico sí empezaba en cero.',
            'Debería haber usado más colores y más imágenes en las diapositivas.',
            'Estuvo un poco largo para mi gusto, pero muy interesante.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Nombra criterios, cifras con contexto y gráfico honesto, y dice qué cumplió y qué no.',
          feedbackIncorrecto: '«Me gustó», «más colores» e «interesante» son gustos. La evaluación con criterios dice qué cumplió y qué faltó.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué pregunta te hicieron hoy que tu estudio no podía responder, y qué harías distinto para responderla?',
    transferencia: 'La próxima vez que expongas en cualquier materia, ensaya con cronómetro y prepara la respuesta a la pregunta que más temes.',
    cierre: 'Cuatro minutos para contar, y todo el tiempo del mundo para escuchar. Así cierra el periodo.'
  },
  saberAncestral: {
    saber: 'Entre los misak, en el resguardo de Guambía (Silvia, Cauca), la escuela no empieza en un salón: empieza en la cocina. Llaman nak chak a la cocina y nak kuk al fogón. Los mayores dicen que ahí «se dinamiza la educación propia» (Montano Morales, 2025). Alrededor del fuego se cocina, se come, se cuentan las cosas del día y se resuelven los desacuerdos. Un asunto no se resuelve donde ocurre: se lleva al fogón, se cuenta, y los demás preguntan. Quien cuenta no expone; se somete a las preguntas. Eso es sustentar. La cara de exclusión: cocinar entre los misak se concentra en el mundo femenino, y el fogón fue espacio de palabra y también de reparto desigual del trabajo. Y una advertencia: el nak chak es de un pueblo que defiende su territorio; lo que hacemos hoy es mucho más pequeño y aprende de eso, no lo imita. Hoy vas a llevar tu mini estudio al fogón del salón: cuatro minutos para contarlo y el tiempo que haga falta para las preguntas.',
    fuente: 'Pueblo misak · el nak chak, donde el asunto se lleva al fogón',
    referencia: 'Montano Morales, J. (2025). Comer y vivir bien en el mundo indígena misak: «sentipensar el cuidado de la vida». Revista de Estudios Sociales, (91), 163--174.',
    preguntaPuente: 'En el nak chak, quien cuenta el asunto no se defiende: escucha las preguntas. Cuando un compañero te pregunte «¿y a quién no encuestaste?», ¿vas a responder o a defenderte? ¿Qué diferencia hay?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El nak chak, donde se lleva el asunto',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Cuatro minutos sin leer',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Cinco diapositivas y un ensayo',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Sustentar, responder y evaluar',
      duracionMin: 35
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Cuatro minutos sin leer',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma tu informe y ponlo boca abajo.',
        'Pon el cronómetro en cuatro minutos y cuenta tu estudio en voz alta, como a un amigo.',
        'Al terminar, anota qué dejaste fuera por falta de tiempo.',
        'Anota qué dijiste de más y qué parte sonó más floja.'
      ],
      cuaderno: {
        titulo: 'Cuatro minutos sin leer',
        formato: 'tres líneas (qué dejé fuera / qué dije de más / qué sonó flojo) y el tiempo que tardé',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres líneas están llenas.',
        'Sabes qué vas a recortar antes de armar las diapositivas.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'Cinco diapositivas y un ensayo',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Reduce tu informe a cinco ideas, una por diapositiva, pregunta, método, hallazgo, gráfico, decisión y limitaciones.',
        'Arma las cinco con máximo veinticinco palabras cada una.',
        'Escribe el guion hablado, unas seiscientas palabras son cuatro minutos.',
        'Ensaya frente a tu pareja con cronómetro. Tu pareja te dice una cosa que no entendió y una que sobró. Cambien de rol.'
      ],
      cuaderno: {
        titulo: 'Cinco diapositivas y un ensayo',
        formato: 'las cinco ideas, una línea cada una, con su tiempo, y las dos observaciones de tu pareja',
        extension: 'media página'
      },
      criterios: [
        'Las cinco diapositivas tienen menos de veinticinco palabras.',
        'Ensayaste con cronómetro y aplicaste al menos una observación de tu pareja.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Sustentar, responder y evaluar',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Sustenta frente al grupo, o en rondas de cinco, con cronómetro visible. Cuatro minutos.',
        'Responde de tres a cinco preguntas. Si no sabes, di «no lo resolví» y por qué.',
        'Mientras escuchas a otros, evalúa con los cinco criterios y escribe una pregunta para cada uno.',
        'Escribe tu autoevaluación, una fortaleza concreta y una mejora concreta.',
        'Entrega las diapositivas, el guion y la autoevaluación.'
      ],
      cuaderno: {
        titulo: 'Sustentar, responder y evaluar',
        formato: 'tabla de evaluación de tres compañeros con los cinco criterios y una pregunta para cada uno, y tu autoevaluación en dos líneas',
        extension: 'una página'
      },
      criterios: [
        'Sustentaste dentro del tiempo y respondiste al menos tres preguntas.',
        'Evaluaste a tres compañeros con criterios y tu mejora dice qué vas a hacer distinto.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.3',
      lente: 'lente del nosotros',
      cita: 'El respeto es silencio; no el del que nada tiene que decir, sino el del que tiene todo que escuchar.',
      preguntaEspejo: '¿Escuché la pregunta entera, o empecé a responder antes de que terminara?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 53 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Acostúmbrate a atender a lo que dice el otro, y a meterte, hasta donde puedas, en lo que piensa.',
      preguntaEspejo: '¿Qué pregunta de hoy me mostró algo de mi estudio que yo no había visto?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'La atención de las personas es un bien finito, precioso y escaso.',
      preguntaEspejo: '¿Qué de mi sustentación gastó la atención del grupo sin devolverle nada?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Contaste un trabajo tuyo en cuatro minutos y respondiste preguntas. Ya sabes qué es esencial en lo que hiciste.',
    emocional: 'Decir «no lo resolví» delante del grupo cuesta. Hacerlo con la razón al lado es lo que te hace confiable.',
    ciudadana: 'Quien sustenta en público y responde preguntas está haciendo lo que se le pide a cualquier autoridad con cifras. Aprender a exigirlo empieza por practicarlo.',
    local: 'En el nak chak misak el asunto se cuenta al fogón y los demás preguntan. Tu salón fue hoy ese fogón, a otra escala.',
    intergeneracional: 'Tu mejora concreta es lo primero que vas a probar en la próxima sustentación. Así avanza un oficio, una sustentación a la vez.'
  }
};

export default contenido;
