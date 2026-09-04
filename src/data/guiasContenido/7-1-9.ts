/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 9
 * (sesión global 9).
 *
 * Auto-generado desde content/guias/7/7-1-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 9,
  titulo: 'Outlook y Teams — comunicarme con voz profesional',
  resumen: 'Outlook es el cliente de correo electrónico institucional de Microsoft.',
  duracionMin: 90,
  subtema: 'Outlook y Teams — comunicarme con voz profesional',
  preLectura: {
    porQueImporta: 'El producto son los 3 correos enviados + reunión Teams + tabla comparativa.',
    preguntaDetonante: 'Si tienes que pedirle al rector permiso para ir al baño durante un examen importante, ¿usas Outlook o Teams? Y si tienes que preguntarle a tu compañero de equipo qué le pareció tu sección del trabajo grupal, ¿usas Outlook o Teams?',
    activacion: {
      titulo: '6 mensajes, 3 canales',
      descripcion: 'Actividad 1 · IDENTIFICA — 6 mensajes, 3 canales (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: diferencias Outlook y Teams, envías 3 correos formales, programas una reunión Teams, evalúas comunicaciones reales.',
      siguiente: 'Responde lo que tengas pendiente.'
    }
  },
  conceptosClave: [
    {
      termino: 'Outlook',
      definicion: 'Cliente de correo electrónico institucional de Microsoft. Lo usas para comunicación formal: cartas a profes, autoridades, instituciones. Trae también calendario, contactos, tareas. Tu cuenta institucional ya lo tiene activo.',
      ejemplo: 'Vas a outlook.office.com, inicias sesión con tu cuenta institucional, escribes un correo al rector siguiendo las 5 partes (destinatario, asunto, saludo, cuerpo, firma). Queda registrado para siempre.',
      emoji: '✉️'
    },
    {
      termino: 'Teams',
      definicion: 'App de comunicación profesional en tiempo real de Microsoft. Combina chat (como WhatsApp pero institucional), llamadas, videollamadas y reuniones programadas con calendario. Ideal para coordinar equipos académicos.',
      ejemplo: 'Tu equipo de 3 abre Teams, crean un grupo, chatean para coordinar, hacen videollamada con pantalla compartida para presentar avances al profe. Todo queda en archivo institucional.',
      emoji: '💼'
    },
    {
      termino: 'Firma de correo',
      definicion: 'Texto fijo que aparece automáticamente al final de cada correo que envías desde Outlook. Configurada una vez, se aplica a todos. Le da identidad profesional a tus correos sin que tengas que escribirla cada vez.',
      ejemplo: 'Tu firma puede ser \'Atentamente, María Cárdenas, Grado 7B, I.E. Sor María Juliana, año 2026\'. Aparece sola al final de cada correo. Profesional desde el inicio.',
      emoji: '🖊️'
    },
    {
      termino: 'Reunión programada en Teams',
      definicion: 'Evento de videollamada con hora, fecha, lista de invitados y enlace que todos abren al mismo tiempo. Se programa desde el calendario de Teams. Los invitados reciben correo con el enlace y se les agrega al calendario.',
      ejemplo: 'Programas reunión \'Trabajo grupal G7\' miércoles 4 p. m., 30 min, con 2 compañeros. Ellos reciben invitación. A las 4 p. m. cada uno hace clic en el enlace, se conectan los 3.',
      emoji: '📅'
    },
    {
      termino: 'Diferencia entre Outlook, Teams y WhatsApp',
      definicion: 'Outlook: formal, registrado, asincrónico. Teams: ágil profesional, registrado, sincrónico/asincrónico, equipo. WhatsApp: personal, no institucional, NO para asuntos académicos serios.',
      ejemplo: 'Al rector: Outlook (formal). Al equipo de tu trabajo grupal: Teams (ágil). A tu amigo sobre la fiesta: WhatsApp (personal). Cada canal para su uso.',
      emoji: '🔀'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar Outlook y Teams?',
      instrucciones: '5 preguntas para verificar que dominas la comunicación profesional digital.',
      preguntas: [
        {
          enunciado: 'Necesitas pedir al rector permiso para faltar una semana por viaje familiar. ¿Qué canal usas?',
          opciones: [
            'WhatsApp.',
            'Teams chat.',
            'Outlook (correo formal con las 5 partes).',
            'Una nota en papel.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Solicitud formal a autoridad = Outlook. Queda registrado, formal, con tu firma. WhatsApp y Teams son menos formales; el papel se pierde.',
          feedbackIncorrecto: 'A autoridades: Outlook. Petición formal, registrada, con las 5 partes. Queda en archivo institucional. Es la práctica adulta correcta.'
        },
        {
          enunciado: 'Tu equipo de 3 va a hacer videollamada para revisar el trabajo. ¿Qué canal?',
          opciones: [
            'Outlook.',
            'WhatsApp con audio amateur.',
            'FaceTime.',
            'Teams (Reunión programada con videollamada).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Teams es la app de reuniones virtuales institucionales: videollamada + pantalla compartida + agenda. Mucho más profesional que WhatsApp.',
          feedbackIncorrecto: 'Teams para reuniones virtuales académicas/profesionales. Video, pantalla compartida, agenda, calendario integrado. La opción profesional.'
        },
        {
          enunciado: 'Tu correo institucional debería tener... (escoge lo más profesional)',
          opciones: [
            'Una firma fija con tu nombre, grado, colegio y año.',
            'Sin firma.',
            'Tu emoji favorito.',
            'Una imagen de tu mascota.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Firma fija profesional: nombre, grado, colegio, año. Aparece sola al final de cada correo. Identidad profesional consistente.',
          feedbackIncorrecto: 'Firma fija profesional. Configurada una vez en Outlook, aparece automáticamente. \'Atentamente, [Nombre], Grado 7[letra], I.E. Sor María Juliana, año 2026\'.'
        },
        {
          enunciado: 'Te llega un correo institucional importante. ¿Cuándo deberías revisarlo?',
          opciones: [
            'Cuando tenga tiempo, sin importar si tardo 2 semanas.',
            'Mínimo 1 vez al día. Idealmente cada 2 días para mensajes urgentes.',
            'Solo cuando me acuerde.',
            'Nunca, prefiero WhatsApp.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Mínimo 1 vez al día. Outlook es el canal formal: los mensajes importantes llegan ahí. Si no lo revisas, te pierdes oportunidades.',
          feedbackIncorrecto: '1 vez al día mínimo. Outlook es el canal formal: anuncios del cole, mensajes de profes, oportunidades. Revisar regularmente es disciplina profesional.'
        },
        {
          enunciado: 'Programas una reunión Teams con tu equipo. ¿Qué le falta para ser profesional?',
          opciones: [
            'Programar sin agenda.',
            'Agregar agenda con 3 puntos claros para que los participantes sepan qué se discutirá.',
            'No invitar a nadie.',
            'Hacerlo a las 3 a. m..'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Reunión sin agenda pierde tiempo. Con agenda clara, los participantes llegan preparados y la reunión es eficaz. Profesional.',
          feedbackIncorrecto: 'Agenda con 3 puntos. Reunión sin agenda = pérdida de tiempo. Con agenda los participantes llegan preparados y la reunión rinde el doble.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy hablando igual con todos sin distinguir contextos? ¿Eso me ayuda o me complica?',
    transferencia: 'Responde lo que tengas pendiente.',
    cierre: 'Al terminar la clase: (1) podrás identificar la diferencia entre Outlook y Teams; (2) sabrás aplicar las 5 partes de un correo formal (ya aprendidas en G6); (3) podrás programar una reunión virtual en Teams; (4) habrás enviado 3 correos profesionales reales + 1 reunión Teams.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de Cartago tenía dos formas distintas de comunicar con la comunidad de la vereda La Plata. Para asuntos formales (anuncios al rector, peticiones al alcalde, cartas de recomendación de sus alumnos), escribía una carta a mano con letra clara, sobre, sello y firma. Tomaba 1 día en hacerla bien. Para asuntos cotidianos (avisar a una mamá que su hijo se enfermó, coordinar quién traía cuál material), iba a su casa o mandaba un recado verbal con otro niño. Eran 2 canales distintos para situaciones distintas: la carta para lo serio que queda registrado; el recado para lo rápido que no necesita papel. Confundir los dos era ridículo: nadie escribía una carta formal para decir "traiga lápiz mañana", ni mandaba recado verbal para una petición al alcalde. Hoy con tu cuenta institucional tienes los mismos 2 canales: Outlook (la carta digital) y Teams (el recado digital).',
    preguntaPuente: 'Si tienes que pedirle al rector permiso para ir al baño durante un examen importante, ¿usas Outlook o Teams? Y si tienes que preguntarle a tu compañero de equipo qué le pareció tu sección del trabajo grupal, ¿usas Outlook o Teams?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del lenguaje según contexto)',
      lente: 'lente del nosotros',
      cita: '"Hablar igual con todos no es respeto: es desconocimiento. El respeto adapta el lenguaje al lector."',
      preguntaEspejo: '¿Estoy hablando igual con todos sin distinguir contextos? ¿Eso me ayuda o me complica?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"La carta formal queda. El recado se va con el viento. Sabe usar las dos a su tiempo."',
      preguntaEspejo: '¿Estoy desarrollando precisión profesional en comunicación, o me quedo en informalidad permanente?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la comunicación digital institucional)',
      lente: 'lente de la infoesfera',
      cita: '"Tener correo institucional y saber usarlo es el primer rito de paso a la vida adulta digital."',
      preguntaEspejo: '¿Estoy aprovechando mi correo institucional como entrenamiento para mi yo de 25 años?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la diferencia entre Outlook y Teams; (2) sabrás aplicar las 5 partes de un correo formal (ya aprendidas en G6); (3) podrás programar una reunión virtual en…',
    emocional: 'Marco Aurelio gobernaba el imperio con dos canales: decretos escritos (que quedaban en archivo para siempre) y conversaciones verbales (rápidas, ágiles, no registradas).',
    ciudadana: 'Hay gente que cree que "yo hablo igual con todo el mundo" es virtud.',
    local: 'Antes de salir, verifica que los 3 correos cumplen las 5 partes y que la reunión está programada con invitaciones enviadas.',
    intergeneracional: 'Tu correo institucional (...@sormariajuliana.edu.co) es tu primera identidad oficial digital.'
  }
};

export default contenido;
