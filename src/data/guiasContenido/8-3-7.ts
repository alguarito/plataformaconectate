/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 7
 * (sesión global 27 — Sexting y grooming).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 7,
  resumen: 'Como la advertencia de los mayores: no aceptes regalos de extraños. Aprendes a reconocer las 5 etapas del grooming, evitar sexting riesgoso, proteger tu privacidad digital.',
  duracionMin: 90,
  subtema: 'Ciberseguridad · Grooming · Sexting · Ley 1336',

  preLectura: {
    porQueImporta: 'Saber reconocer grooming en sus etapas tempranas es protección literal de tu seguridad. La Ley 1336 lo penaliza pero la PREVENCIÓN es la mejor defensa.',
    preguntaDetonante: '¿Qué de la advertencia ancestral —no aceptes regalos del extraño— podemos llevar a las redes y juegos en línea?',
    activacion: { titulo: 'La bandera roja temprana', descripcion: 'En 5 minutos: en parejas piensen en el "perfil" de un groomer en redes. ¿Qué señales podrían reconocerse en los primeros mensajes? Compartan ideas sin juzgar.', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 26 aprendiste sobre ciberbullying y rutas Línea 141.', siguiente: 'En la sesión 28 aplicarás estética de la liberación a contenidos digitales.' },
  },

  conceptosClave: [
    { categoria: '🔍 Cómo se reconoce', termino: 'Grooming', definicion: 'Manipulación gradual de un adulto que se hace pasar por igual o conocido para abusar sexualmente de un menor. Ocurre en 5 etapas progresivas. La Ley 1336 de Colombia lo penaliza.', ejemplo: 'Adulto crea cuenta falsa de adolescente, contacta a un menor, le da regalos virtuales, pide secreto, escala a peticiones íntimas.', emoji: '🎭' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Sexting', definicion: 'Envío de contenido íntimo (fotos, videos, mensajes sexuales). Aunque ocurra entre menores, una vez enviado el control se pierde — puede llegar a cualquier lugar para siempre.', ejemplo: 'Foto íntima a "novio de confianza" → al terminar la relación, foto se distribuye en redes. NUNCA se controla una vez enviada.', emoji: '📷' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Manipulación gradual', definicion: 'Estrategia del groomer: NO pide algo íntimo de inmediato. Construye confianza primero (semanas o meses) con halagos, regalos virtuales, escucha, secretos.', ejemplo: 'Etapa 1: cumplidos. Etapa 2: regalos virtuales. Etapa 3: "esto es nuestro secreto". Etapa 4: petición íntima. Por etapas, parece amistad.', emoji: '🪤' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Banderas rojas', definicion: 'Señales tempranas que TODAS deberían cortar comunicación: pide foto, pide secreto, ofrece encuentro presencial, da regalos a cambio de algo, halagos excesivos al inicio.', ejemplo: 'Si UN mensaje contiene "no le digas a nadie" o "tú eres especial, no como las demás", es bandera roja máxima.', emoji: '🚩' },
    { categoria: '🛡️ Cómo se protege', termino: 'Privacidad de cuenta', definicion: 'Configuración que limita quién puede contactarte. Cuenta cerrada (privada): solo aprobados pueden ver tus posts y enviarte DMs.', ejemplo: 'Instagram → Configuración → Privacidad → Cuenta privada (ON). Solo personas que tú apruebas pueden seguirte y enviarte mensajes.', emoji: '🔒' },
    { categoria: '🛡️ Cómo se protege', termino: 'Nunca enviar', definicion: 'Reglas absolutas: NUNCA fotos íntimas a NADIE (ni novio/a). NUNCA tu ubicación a desconocidos. NUNCA datos de tu familia a desconocidos.', ejemplo: 'Aunque tu pareja jure que es solo para ella, una vez enviada la foto sale de tu control. La regla NUNCA tiene excepción.', emoji: '🚫' },
    { categoria: '🛡️ Cómo se protege', termino: 'Adulto de confianza', definicion: 'Persona mayor (familia, profe, orientador) a quien puedes contar SIN juicio. Tener identificado a tu adulto de confianza ANTES de necesitarlo es prevención.', ejemplo: 'Tu mamá, tu tío, tu profe favorita. Decide ahora con quién hablarías si pasara algo. Eso es preparación de seguridad.', emoji: '🙋' },
    { categoria: '🛡️ Cómo se protege', termino: 'Línea 141 ICBF', definicion: 'Línea gratuita 24/7 para casos urgentes de grooming, sexting, abuso. Mismo número que para ciberbullying. Memorizar el 141 es protección.', ejemplo: 'Si recibes amenazas (ej: "si no me mandas más fotos, mando lo anterior a tu colegio"), llama 141 INMEDIATAMENTE. No estás solo.', emoji: '🆘' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Grooming y protección',
    instrucciones: '5 preguntas tipo ICFES sobre identificación de grooming y protocolo.',
    preguntas: [
      { enunciado: '¿En qué etapa del grooming es MEJOR cortar la comunicación?', opciones: ['En la etapa de chantaje (etapa 5)', 'En la etapa más temprana posible (etapa 1 o 2 de contacto/confianza)', 'Después de enviar la primera foto', 'Solo si el adulto se identifica claramente'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La regla profesional: cortar EN LA ETAPA MÁS TEMPRANA. En etapa 1 (contacto inicial sospechoso) ya puedes cortar — no esperes a sentirte atrapado en etapa 5.', feedbackIncorrecto: '❌ Esperar a etapa 5 (chantaje) es muy tarde — ya hay daño. La regla profesional: cortar EN LA ETAPA MÁS TEMPRANA posible (etapa 1 o 2). Cualquier bandera roja temprana = razón suficiente para cortar.' },
      { enunciado: 'Si un "amigo nuevo" en redes te dice "no le digas a tus papás de nuestra amistad", esto es:', opciones: ['Una broma normal', 'Bandera roja máxima de grooming — el secreto es señal clave', 'Forma común de empezar amistades', 'No importa'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. EL SECRETO es bandera roja máxima del grooming. Las amistades sanas NO requieren ocultarse de adultos. Si pide secreto = corta + cuenta a adulto + Línea 141 si escala.', feedbackIncorrecto: '❌ "No le digas a tus papás" es BANDERA ROJA MÁXIMA. Las amistades sanas no requieren secreto. Es señal clásica del grooming. Cortar inmediatamente y contar a adulto.' },
      { enunciado: 'Aunque sea con tu pareja "de confianza", enviar fotos íntimas:', opciones: ['Está bien, es muestra de amor', 'Es riesgo grave: una vez enviadas, no se controlan; la regla absoluta es NUNCA', 'Solo si firman acuerdo', 'Depende del año de relación'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La regla NUNCA NO TIENE EXCEPCIÓN. Una vez enviada, la foto sale de tu control: puede ser compartida, hackeada, expuesta al terminar la relación. La protección es no enviar JAMÁS.', feedbackIncorrecto: '❌ "Muestra de amor" o "acuerdos" no protegen. Una foto íntima ENVIADA pierde TU CONTROL: puede compartirse al terminar la relación, ser hackeada, exponerte. La regla absoluta: NUNCA, sin excepción.' },
      { enunciado: 'La Ley 1336 de 2009 en Colombia:', opciones: ['Es solo recomendación', 'Penaliza el grooming y delitos sexuales online contra menores', 'No aplica a internet', 'Solo aplica a adultos'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Ley 1336 PENALIZA con cárcel los delitos sexuales contra menores online (incluyendo grooming). Pero la mejor protección sigue siendo PREVENCIÓN: privacidad cerrada, no aceptar desconocidos, no enviar fotos íntimas.', feedbackIncorrecto: '❌ La Ley 1336 SÍ es ley penal (no recomendación), SÍ aplica a internet, SÍ protege a menores. Prevención: privacidad cerrada + no aceptar desconocidos + no enviar fotos íntimas.' },
      { enunciado: 'Para tu protección, la cuenta de redes ideal es:', opciones: ['Pública para tener muchos seguidores', 'PRIVADA + solo conocidos verificados + sin ubicación visible', 'Pública pero con foto borrosa', 'No tener cuenta'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. CUENTA PRIVADA (solo aprobados ven tus posts) + solo CONOCIDOS VERIFICADOS (en persona o por amigo de confianza) + SIN UBICACIÓN visible (estás expuesto). Eso es seguridad básica.', feedbackIncorrecto: '❌ Cuenta pública te expone a desconocidos. Foto borrosa no protege (los desconocidos siguen contactándote). No tener cuenta es opción pero no la única — privacidad cerrada + conocidos verificados es viable y seguro.' },
    ],
  }],

  postLectura: {
    reflexion: 'La protección digital empieza por reconocer que muchos depredadores se hacen pasar por iguales o conocidos. ¿Quién es TU adulto de confianza al que recurrirías sin dudar?',
    transferencia: 'Esta semana: revisa la privacidad de tus cuentas. Pásalas a privada si no lo están. Identifica y memoriza tu adulto de confianza. Memoriza Línea 141 ICBF.',
    cierre: 'La advertencia de los mayores ("no aceptes del extraño") sobrevive en cada bloqueo, en cada cuenta privada, en cada NO al enviar una foto. La sabiduría ancestral protege en formato digital.',
  },

  saberAncestral: {
    saber:
      'En las calles de pueblos del Valle, el Pacífico y los Andes, los mayores enseñaban tres reglas para el espacio público: no aceptes regalos de extraños, no vayas solo a lugares apartados con quien apenas conoces, avisa a un adulto de confianza si algo te incomoda. Esas tres reglas, repetidas durante generaciones, salvaron a miles de niños del abuso. El grooming digital opera con la misma lógica del depredador antiguo: ganar confianza, aislar, pedir intimidad, amenazar con vergüenza. La advertencia de los mayores no envejeció — solo cambió de plaza física a plaza digital. La Ley 1336 colombiana penaliza esos delitos online; los principios son los mismos que los del consejo de la abuela.',
    fuente: 'Reglas de los mayores sobre el extraño en el espacio público — Valle, Pacífico, Andes',
    preguntaPuente:
      '¿Qué reglas te enseñaron los mayores de tu familia sobre extraños en la calle? ¿Qué de esas reglas aplica directamente a "extraños en redes" hoy?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La vergüenza con que el agresor controla a la víctima es la misma desde hace siglos — romperla con palabra adulta es liberación.',
      preguntaEspejo:
        '¿He guardado silencio sobre algo en redes por vergüenza o miedo a la reacción? ¿Quién es mi adulto de confianza al que sí podría contarle?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo que no depende de ti es el extraño que te escribe; lo que sí depende es si lo respondes, lo bloqueas, o lo reportas.',
      preguntaEspejo:
        '¿Qué decisiones digitales sí dependen totalmente de mí (no aceptar, bloquear, reportar) y cuántas ejerzo con disciplina estoica?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La privacidad bien diseñada es la primera línea de defensa de la dignidad informacional del adolescente.',
      preguntaEspejo:
        '¿Mis cuentas están realmente privadas o "casi privadas"? ¿Y mis fotos compartidas en chats — están protegidas o circulan libremente en capturas?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a reconocer las 5 etapas del grooming y los riesgos del sexting — habilidades que pueden cambiar tu vida o la de un amigo.',
    emocional:
      'Resististe la pulsión de la "validación rápida" del extraño en redes — entendiste que la atención no pedida no es regalo, es señal.',
    ciudadana:
      'Conocer la Ley 1336 colombiana es alfabetización jurídica básica — derechos que tu generación tiene y muchos no usan por no saberlos.',
    local:
      'Heredaste el consejo de los mayores sobre el espacio público — el principio sobrevive en plaza física y plaza digital.',
    intergeneracional:
      'La abuela que decía "no aceptes del extraño" y tú al bloquear una cuenta sospechosa comparten ética. Lo que cambia es la calle, no la regla.',
  },
};

export default contenido;
