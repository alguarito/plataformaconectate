/**
 * Contenido web del examen final · Grado 6 · Período 1
 *
 * Auto-generado desde content/examenes/6-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 6,
  periodo: 1,
  titulo: 'Examen final · Comunicación e identidad digital',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Comunicación e identidad digital',
    instrucciones: 'Practica con 26 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Por qué es importante la S1 (Apertura) de cada periodo, aunque no enseñe tema técnico?',
        opciones: [
          'Porque es la única sesión fácil.',
          'Porque establece la ruta, el método MILC y el compromiso del año. Sin S1, las otras 10 sesiones se sienten dispersas.',
          'Porque no hay que llevar cuaderno.',
          'Porque solo se conversa.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La S1 da estructura: ruta, método, reglas, compromiso. Sin esa base, el periodo entero pierde dirección.',
        feedbackIncorrecto: 'La S1 establece el marco: ruta del periodo, método MILC, compromiso firmado. Sin ese marco, las sesiones técnicas se sienten sueltas.'
      },
      {
        enunciado: '¿Qué son los 5 acuerdos del compromiso que firmaste en la S1 del año?',
        opciones: [
          '5 reglas para usar el celular.',
          'Cuaderno propio · asistencia · respeto digital · esfuerzo honesto · ayuda mutua.',
          '5 contraseñas del colegio.',
          '5 amigos obligatorios.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Los 5 acuerdos del año: cuaderno propio + asistencia + respeto digital + esfuerzo honesto + ayuda mutua. Firmados en la S1.',
        feedbackIncorrecto: 'Los 5 acuerdos: cuaderno propio para Tecnología, asistencia, respeto digital, esfuerzo honesto, ayuda mutua. Los firmaste en la S1 como compromiso del año.'
      },
      {
        enunciado: '¿Qué es la identidad digital?',
        opciones: [
          'Solo tu nombre real.',
          'El conjunto de cosas que la gente puede ver de ti cuando te busca en internet (foto, apodo, comentarios, videos).',
          'Tu contraseña.',
          'Tu dirección de casa.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La identidad digital es lo que muestras en internet: tu foto, apodo, lo que escribes, los grupos donde estás. Tú decides qué muestras.',
        feedbackIncorrecto: 'La identidad digital incluye tu foto, apodo, lo que escribes, los videos que subes, los grupos donde estás. No es solo tu nombre real ni tu contraseña.'
      },
      {
        enunciado: '¿Cuál es la diferencia clave entre identidad digital y huella digital?',
        opciones: [
          'Son lo mismo.',
          'La identidad es lo que tú decides mostrar; la huella es todo lo demás que las apps registran sin que lo notes.',
          'La huella es para adultos; la identidad para niños.',
          'La huella se borra automáticamente.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Identidad = lo que decides mostrar. Huella = lo que se registra sin que lo decidas (búsquedas, tiempo en apps, ubicación).',
        feedbackIncorrecto: 'Identidad la controlas tú (publicaciones). Huella la registran las apps sin que lo notes (búsquedas, tiempo, ubicación). Las dos importan, pero son distintas.'
      },
      {
        enunciado: 'Vas a escribir un correo al profe pidiendo aclaración sobre la próxima clase. ¿Cuál asunto es el mejor?',
        opciones: [
          'Hola profe',
          'Es urgente',
          'Pregunta sobre la próxima clase de Tecnología',
          'Profe profe profe'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. Un buen asunto dice de qué trata el correo en una frase clara. El profe sabe qué esperar antes de abrirlo.',
        feedbackIncorrecto: 'El asunto debe ser específico: "Pregunta sobre la próxima clase de Tecnología" dice exactamente de qué se trata. "Hola profe" o "Es urgente" son vagos.'
      },
      {
        enunciado: 'Le escribes al coordinador del colegio. ¿Cómo lo saludas?',
        opciones: [
          'Hey coordi',
          'Qué más',
          'Buenos días señor coordinador',
          'Saludos mi rey'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Correcto. A una autoridad le hablas formal: "Buenos días señor coordinador". Eso abre puertas; lo informal las cierra.',
        feedbackIncorrecto: 'A una autoridad escolar le hablas con respeto: "Buenos días señor coordinador". "Hey" o "qué más" son informales y no se usan en correo formal.'
      },
      {
        enunciado: '¿Cuántos acuerdos de netiqueta aprendiste en la sesión 4?',
        opciones: [
          '5',
          '10',
          '20',
          '100'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí, los 10 acuerdos de netiqueta. Cada uno cuida cómo te llevas con otros en chats, juegos, redes y correos.',
        feedbackIncorrecto: 'Son 10: saluda, no grites con mayúsculas, no spam, cuida horarios, respeta lo privado, no publiques fotos de otros sin permiso, piensa antes de escribir, no insultes ni en broma, si algo está mal no lo reenvíes, cuéntale a un adulto si te asustas.'
      },
      {
        enunciado: 'Tu compañero escribe en el grupo de WhatsApp a las 11 de la noche pidiendo la tarea. ¿Qué haces según la netiqueta?',
        opciones: [
          'Le respondo de inmediato porque vi el mensaje.',
          'No respondo. A las 11 de la noche se respeta el sueño. Le contesto al día siguiente.',
          'Le mando 5 mensajes para que no me olvide.',
          'Le mando un audio gritando.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Acuerdo 4 de netiqueta: cuida los horarios. A las 11 pm se respeta el sueño. Responder al día siguiente está bien.',
        feedbackIncorrecto: 'Acuerdo 4 de netiqueta: respetar horarios. A las 11 pm no se escriben mensajes salvo emergencias. El compañero recibe respuesta al día siguiente.'
      },
      {
        enunciado: '¿De qué medio antiguo viene la idea de "destinatario, asunto, saludo, cuerpo y firma"?',
        opciones: [
          'Del telégrafo.',
          'De la carta postal de hace más de 100 años.',
          'De WhatsApp.',
          'De la radio.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 5 partes vienen de la carta postal de hace más de 100 años. El correo electrónico solo las trasladó a la pantalla.',
        feedbackIncorrecto: 'De la carta postal. Esas 5 partes existen hace más de 100 años. El correo electrónico moderno las heredó tal cual de las cartas que iban en mula o tren.'
      },
      {
        enunciado: '¿Qué tienen en común el telégrafo del siglo XIX y los mensajes de chat de hoy?',
        opciones: [
          'Los dos viajan por cables submarinos.',
          'Los dos usan abreviaciones porque hay que ser breves.',
          'Los dos cuestan dinero por cada letra.',
          'Los dos los maneja un operador en una oficina.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El telégrafo enseñó a abreviar porque cada palabra costaba. Hoy abrevias en chats por costumbre de esa misma idea.',
        feedbackIncorrecto: 'Ambos abrevian. El telégrafo lo hacía porque cada palabra costaba dinero. Los chats heredaron ese hábito aunque ya no cobren por letra.'
      },
      {
        enunciado: 'Subes una foto a TikTok. ¿Qué tipo de huella digital es?',
        opciones: [
          'Huella activa: tú decidiste subirla.',
          'Huella pasiva: la app la subió sola.',
          'Huella secundaria: alguien más la subió.',
          'No es huella, solo es un video.'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Sí. Tú la subiste a propósito, entonces es huella activa. La controlas tú: si la cuidas, está bien; si no, te queda.',
        feedbackIncorrecto: 'Es huella activa porque TÚ decidiste publicarla. La pasiva la dejas sin notar (búsquedas, ubicación). La secundaria la dejan otros sobre ti (te etiquetan).'
      },
      {
        enunciado: 'Tu prima sube una foto vieja tuya sin pedirte permiso a Instagram. ¿Qué tipo de huella es?',
        opciones: [
          'Huella activa: porque ahí estás tú.',
          'Huella pasiva: porque no lo notaste.',
          'Huella secundaria: porque la dejó otra persona sobre ti.',
          'No es huella, es una foto vieja.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Exacto. Huella secundaria es la que dejan otros sobre ti. Puedes pedirle a tu prima que la baje y eso es válido.',
        feedbackIncorrecto: 'Huella secundaria: la dejó otra persona sobre ti. Tienes derecho a pedirle a tu prima que la quite, especialmente si te sientes incómodo con la foto.'
      },
      {
        enunciado: '¿Cuál de estos es un dato PRIVADO (que casi nadie debería saber)?',
        opciones: [
          'Tu nombre de pila.',
          'La ciudad donde vives.',
          'Tu contraseña del correo institucional.',
          'El grado escolar en que estás.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. La contraseña es dato privado: solo tú la sabes. Si la das, alguien puede entrar a tu correo y hacerse pasar por ti.',
        feedbackIncorrecto: 'La contraseña es dato privado. Nombre, ciudad y grado son públicos. Los datos privados (contraseñas, cédula, dirección exacta) no se comparten con nadie.'
      },
      {
        enunciado: 'Una empresa te llama porque "compró tu número". Tú quieres que dejen de llamarte. ¿Qué ley colombiana te respalda?',
        opciones: [
          'Ninguna, no hay ley sobre esto.',
          'La Ley 1581 de 2012 de protección de datos personales.',
          'La Constitución de 1810.',
          'La Ley de Derechos del Niño.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Ley 1581 de 2012 protege tus datos personales. Tienes derecho a pedir que borren tu información. Es tu derecho legal.',
        feedbackIncorrecto: 'La Ley 1581 de 2012 protege tus datos personales en Colombia. Puedes exigir que las empresas borren tus datos. No es opcional para ellas: es tu derecho legal.'
      },
      {
        enunciado: 'Un amigo nuevo de un juego en línea te dice: "No le cuentes a tus papás que hablamos, ellos no entienden estas cosas". ¿Qué señal de alerta es?',
        opciones: [
          'Ninguna, solo está siendo amable.',
          'Es señal de grooming: te pide secreto Y te aleja de tus adultos.',
          'Es señal de buen amigo: respeta tu privacidad.',
          'Es señal de que es un niño igual a ti.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Pedir secreto + alejarte de adultos son 2 señales clarísimas de grooming. Una persona honesta jamás te pide guardar secretos de tus papás.',
        feedbackIncorrecto: 'Es alerta grande. Pedir secreto + alejarte de tu familia es la señal más clara de grooming. Cuéntale a un adulto de confianza inmediatamente.'
      },
      {
        enunciado: 'Recibes un correo: "Felicitaciones, ganaste 10 mil Robux. Escribe tu contraseña aquí para reclamar". ¿Qué haces?',
        opciones: [
          'Escribo mi contraseña rápido, no quiero perder el premio.',
          'Borro el correo. Roblox NUNCA pide tu contraseña por correo. Es phishing.',
          'Le pregunto al remitente por WhatsApp si es verdad.',
          'Reenvío a mis amigos para que también ganen.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Eso es phishing (estafa digital). Las empresas serias NUNCA piden contraseña por correo. Borrar es la salida correcta.',
        feedbackIncorrecto: 'Es phishing. Ninguna empresa real pide contraseña por correo. Borra el mensaje. Si caíste y entregaste contraseña, cámbiala YA y cuéntale a un adulto.'
      },
      {
        enunciado: 'Algo en internet te asustó. ¿Cuáles son las 3 acciones de oro?',
        opciones: [
          'Respondo, peleo, y borro la conversación.',
          'Respiro y no respondo, capturo evidencia (pantallazo), cuento a un adulto de confianza.',
          'Lo guardo para mí, mañana se olvida.',
          'Bloqueo al usuario y nunca lo cuento.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 3 acciones de oro: respirar y no responder, capturar evidencia, contar a un adulto de confianza. En ese orden y los 3 juntos.',
        feedbackIncorrecto: 'Las 3 acciones de oro son: NO responder con prisa, capturar pantalla (evidencia), contar a un adulto. NO bloquear sin avisar a nadie; el adulto necesita saber.'
      },
      {
        enunciado: '¿Cuáles son los 3 filtros antes de publicar algo en internet?',
        opciones: [
          '¿Está chistoso? ¿Tiene likes? ¿Se ve bien?',
          '¿Es verdad? ¿Es necesario? ¿Es amable?',
          '¿Es corto? ¿Tiene emojis? ¿Tiene foto?',
          '¿Es viral? ¿Es popular? ¿Es nuevo?'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Los 3 filtros: verdad + necesario + amable. Si lo que vas a publicar falla en uno, lo piensas mejor o no lo publicas.',
        feedbackIncorrecto: 'Son: (1) ¿es verdad? (2) ¿es necesario? (3) ¿es amable? Los 3 filtros antes de publicar cualquier cosa. Si falla uno, no se publica como está.'
      },
      {
        enunciado: 'Quieres comentar "esa cara está fea" en una foto de Instagram. ¿Qué filtro falla?',
        opciones: [
          'Falla el de "¿es verdad?".',
          'Falla el de "¿es amable?".',
          'Falla el de "¿es necesario?".',
          'No falla ninguno, está bien.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Aunque tú lo creas verdad, no es amable. Lo amable construye, no destruye. Reescribe o no publiques.',
        feedbackIncorrecto: 'Falla el filtro de amable. Aunque sea tu opinión, escribir "fea" destruye. Reescríbelo o no lo publiques. Lo amable construye relaciones.'
      },
      {
        enunciado: 'En un chat empiezan a burlarse de Sara, una compañera. ¿Qué hace un "upstander" (lo opuesto a bystander)?',
        opciones: [
          'Se suma a las burlas para no quedar fuera del grupo.',
          'Calla y mira sin escribir nada.',
          'Le escribe en privado a Sara: "¿estás bien? vi lo que pasa".',
          'Cierra el chat y se va sin avisar a nadie.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. Upstander = el que NO calla cuando ataca a otro. Escribir en privado a la víctima la sostiene. No tienes que pelear; solo no callar.',
        feedbackIncorrecto: 'Upstander es el que actúa. Lo mínimo es escribirle en privado a la víctima ("¿estás bien?"). Eso cambia el clima del grupo y le da soporte a Sara.'
      },
      {
        enunciado: 'Te paras a hacer tu presentación digital de 2 minutos. ¿Cuál postura es la correcta?',
        opciones: [
          'Encorvado, así me ven más tranquilo.',
          'De pie, pies firmes, manos relajadas. Mirando a 3 compañeros distintos durante los 2 minutos.',
          'Apoyado en una pared, así no me canso.',
          'Sentado, así no se nota si tiemblo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. De pie + pies firmes + manos relajadas + mirar a 3 compañeros. La postura comunica seguridad antes de hablar.',
        feedbackIncorrecto: 'De pie con pies firmes y manos relajadas. Miras a 3 compañeros distintos durante los 2 minutos. Encorvarte o apoyarte transmite duda; la postura habla antes que tú.'
      },
      {
        enunciado: 'Te equivocas en una palabra durante el pitch. ¿Qué haces?',
        opciones: [
          'Paro y pido disculpas largo rato.',
          'Empiezo de nuevo desde el inicio.',
          'Sigo. Una palabra no daña la presentación; un parón sí.',
          'Salgo de la clase corriendo.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Exacto. Sigue. Una palabra mal dicha es invisible si tú no le das importancia. Parar y disculparse hace el error 10 veces más grande.',
        feedbackIncorrecto: 'Sigues. La audiencia olvida la palabra al segundo siguiente. Parar y disculparte largo amplifica el error. Profesionalismo es seguir como si nada.'
      },
      {
        enunciado: '¿Cuál de estos NO debería ir en tu tarjeta de identidad digital del cuaderno?',
        opciones: [
          'Tu nombre real.',
          '3 cosas que te gusta hacer.',
          'Tu contraseña del correo.',
          'Una frase que tú mismo inventes para describirte.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. La contraseña NUNCA va en la tarjeta. La tarjeta es para mostrar quién eres; la contraseña queda en hoja aparte privada.',
        feedbackIncorrecto: 'La contraseña jamás va en la tarjeta de identidad. La tarjeta muestra quién eres (nombre, gustos, frase tuya); la contraseña queda en hoja aparte y solo tú la sabes.'
      },
      {
        enunciado: 'Te llega una cadena que dice "Reenvía esto a 10 amigos o algo malo te pasará". ¿Qué haces?',
        opciones: [
          'Reenvío de una para que no me pase nada.',
          'Reenvío solo a 3 amigos para ir despacio.',
          'Borro la cadena y no la reenvío. Es mentira.',
          'Reenvío a todo el grupo del salón.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Las cadenas son mentira. Borrarlas es lo correcto. Reenviarlas te hace parte del problema y molesta a tus amigos.',
        feedbackIncorrecto: 'Las cadenas son mentira. No te va a pasar nada. Borrar es la salida. Reenviar te hace cómplice de basura digital que llena chats de amigos.'
      },
      {
        enunciado: 'Una app de linterna te pide acceso a tu micrófono, tu cámara y tu lista de contactos. ¿Qué haces?',
        opciones: [
          'Le doy todo, debe necesitarlo.',
          'Niego los permisos. Una linterna no necesita micrófono, cámara ni contactos. Si insiste, busco otra app.',
          'Le doy solo el micrófono, los otros no.',
          'Le doy todo por un día solamente.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Regla del mínimo necesario: si la app pide más de lo que su función requiere, sospecha y niégale. Una linterna solo necesita el flash.',
        feedbackIncorrecto: 'Una linterna NO necesita micrófono, cámara ni contactos. Niégale los permisos. Si la app insiste, busca otra. Los permisos innecesarios suelen ser para vender tus datos.'
      },
      {
        enunciado: 'Estructura de tu pitch de 2 minutos. ¿Cuál es la más profesional?',
        opciones: [
          'Hablo de lo que se me ocurra en el momento.',
          '4 momentos en orden: quién soy (15s) + cómo cuido datos (45s) + cómo me protejo (45s) + compromiso (15s).',
          'Solo leo el cuaderno completo.',
          'Solo digo mi nombre y termino.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Los 4 momentos en 2 minutos: presentar 15s + cuidar datos 45s + protección 45s + compromiso 15s. Estructura clara, pitch profesional.',
        feedbackIncorrecto: '4 momentos: 15s + 45s + 45s + 15s = 2 minutos. Estructura te ahorra improvisar. Cada momento con propósito claro. Leer todo no es presentación; es lectura.'
      }
    ]
  }
};

export default contenido;
