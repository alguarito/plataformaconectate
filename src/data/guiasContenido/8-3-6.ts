/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 6
 * (sesión global 26 — Ciberbullying).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 6,
  resumen: 'Como el consejo del mayor cuando hay pelea: cuidar a la víctima, marcar límites. Aprendes a reconocer ciberbullying, capturar evidencia y conocer las rutas de ayuda en Colombia (Línea 141 ICBF).',
  duracionMin: 90,
  subtema: 'Ciberseguridad · Ciberbullying · Línea 141',

  preLectura: {
    porQueImporta: 'Saber reconocer y actuar ante ciberbullying puede salvar a un compañero — incluido tú mismo. Es habilidad ciudadana fundamental en la era digital.',
    preguntaDetonante: '¿Qué del consejo del mayor —cuidar a la víctima y marcar límites— podemos llevar al ciberbullying digital?',
    activacion: { titulo: 'El espectador defensor', descripcion: 'En 5 minutos: en parejas piensen en una situación de ciberbullying que vieron (no necesariamente vivieron). ¿Qué hicieron los espectadores? ¿Qué podrían haber hecho de manera distinta?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 25 aprendiste edición de audio y voz cuidada.', siguiente: 'En la sesión 27 profundizarás en sexting y grooming.' },
  },

  conceptosClave: [
    { categoria: '🔍 Cómo se reconoce', termino: 'Ciberbullying', definicion: 'Agresión digital sostenida y desigual contra una persona. NO es UN conflicto puntual — es patrón repetido con poder asimétrico que daña a la víctima.', ejemplo: 'Insultos diarios en grupo de WhatsApp dirigidos a UNA persona durante semanas. Es bullying digital. Una pelea aislada NO lo es.', emoji: '🚨' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Roles', definicion: 'Tres roles principales: AGRESOR (acción), VÍCTIMA (recibe), ESPECTADOR (ve). El espectador puede transformarse en DEFENSOR — el cambio crucial.', ejemplo: 'En grupo donde insultan a Juan: Pedro insulta (agresor), Juan recibe (víctima), Maria mira y calla (espectador). Si Maria interviene, se vuelve defensora.', emoji: '👥' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Modalidades', definicion: 'Formas de ciberbullying: insultos en chat, exposición de imágenes íntimas, exclusión de grupos, difusión de rumores, suplantación de identidad.', ejemplo: 'Crear meme humillante con foto de un compañero, compartirlo en redes, etiquetarlo. Es una forma específica de ciberbullying.', emoji: '📱' },
    { categoria: '🔍 Cómo se reconoce', termino: 'Señales de alarma', definicion: 'Cambios en la víctima que indican que está siendo afectada: cambio de ánimo, evitar redes, bajar rendimiento, aislamiento, faltar al colegio.', ejemplo: 'Tu hermana antes activa en redes ahora las evita. Antes salía con amigos, ahora se encierra. Pueden ser señales — pregúntale con cuidado.', emoji: '⚠️' },
    { categoria: '🛡️ Cómo se actúa', termino: 'Evidencia', definicion: 'Captura de pantalla con FECHA, USUARIO, MENSAJE COMPLETO. Sin retoque. Es prueba para procesos institucionales y legales.', ejemplo: 'Captura del mensaje hostil + fecha visible + nombre/foto de quien lo envió. NO borres antes de capturar. NO retoques.', emoji: '📸' },
    { categoria: '🛡️ Cómo se actúa', termino: 'Bloqueo y reporte', definicion: 'Cada plataforma (WhatsApp, Instagram, TikTok) tiene su botón de bloqueo y reporte. Bloquear corta el contacto; reportar avisa a la plataforma.', ejemplo: 'En WhatsApp: tres puntos → Reportar → Bloquear. En Instagram: tres puntos → Reportar → Acoso o intimidación.', emoji: '🙅' },
    { categoria: '🛡️ Cómo se actúa', termino: 'Rutas institucionales', definicion: 'En Colombia: orientador escolar → rector → ICBF (Línea 141 gratuita 24/7) → policía si hay amenaza física. Cada escalón tiene autoridad para intervenir.', ejemplo: 'Si el orientador no actúa, escalas al rector. Si el rector tampoco, ICBF. Si hay amenaza directa, policía. La ruta SE ESCALA.', emoji: '🏛️' },
    { categoria: '🛡️ Cómo se actúa', termino: 'Apoyo comunitario', definicion: 'No callar como espectador. Escribir a la víctima en privado para acompañar. Reportar al adulto. Crear cultura donde callar es la excepción.', ejemplo: 'Mensaje privado: "Vi lo que pasó. No estás solo. ¿Quieres que vayamos juntos al orientador?". Acompañar transforma víctima en defendida.', emoji: '🤝' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Ciberbullying y rutas de ayuda',
    instrucciones: '5 preguntas tipo ICFES sobre identificación, evidencia y rutas en Colombia.',
    preguntas: [
      { enunciado: 'Si presencio insultos repetidos a un compañero en un grupo de WhatsApp, lo correcto es:', opciones: ['Reírme para no ser el siguiente', 'Capturar evidencia, escribir privadamente a la víctima y reportar al orientador', 'Ignorar, no es asunto mío', 'Defender en público gritando al agresor'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. El espectador defensor: 1) capturar evidencia, 2) acompañar a la víctima en privado, 3) reportar al adulto. NO reírse (eso valida al agresor) ni ignorar (silencio cómplice).', feedbackIncorrecto: '❌ Reírse valida al agresor; ignorar es silencio cómplice; defender gritando puede escalar la violencia. Lo correcto: capturar evidencia + acompañar a la víctima en privado + reportar al adulto. Eso es ser DEFENSOR.' },
      { enunciado: 'La Línea 141 del ICBF en Colombia es:', opciones: ['Línea de pago para denuncias', 'Línea gratuita 24/7 para casos de violencia, bullying y abuso de menores', 'Solo para casos extremos', 'Línea para adultos'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Línea 141 es GRATUITA, CONFIDENCIAL, 24/7. Atiende casos de violencia, bullying, abuso. Conocerla y compartirla SALVA. Memorízala.', feedbackIncorrecto: '❌ La Línea 141 es GRATUITA (no de pago), 24/7 (cualquier momento), CONFIDENCIAL, para CUALQUIER caso (no solo extremos), para MENORES y adolescentes. Es recurso clave de protección.' },
      { enunciado: 'Si ves un mensaje hostil dirigido a un compañero, ANTES de bloquear o borrar:', opciones: ['Bórralo rápido para "no contaminarte"', 'Captura pantalla con fecha y usuario visible (es evidencia)', 'Compártelo a más personas', 'No hagas nada'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. La EVIDENCIA es crucial para procesos institucionales y legales. Captura ANTES de borrar. Sin evidencia, la palabra del agresor vale lo mismo que la de la víctima.', feedbackIncorrecto: '❌ Borrar evidencia sin capturar es perder la prueba. Compartir empeora la situación. No hacer nada es silencio cómplice. CAPTURA ANTES DE BORRAR es la regla profesional.' },
      { enunciado: 'La diferencia entre conflicto puntual y ciberbullying es:', opciones: ['No hay diferencia', 'Conflicto puntual es UNA situación; ciberbullying es PATRÓN repetido con poder asimétrico', 'El ciberbullying es solo en internet', 'Conflicto puntual es más grave'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. CIBERBULLYING = patrón repetido + poder desigual. Una pelea aislada NO es bullying. Sostenido + desigual = bullying. Identificar el patrón guía la intervención.', feedbackIncorrecto: '❌ HAY diferencia clara: conflicto puntual es UNA situación entre iguales. Ciberbullying es PATRÓN repetido con PODER ASIMÉTRICO. Confundirlos lleva a intervención equivocada.' },
      { enunciado: 'Si un compañero te confiesa que lo están haciendo ciberbullying, lo MÁS importante es:', opciones: ['Decirle que sea fuerte y siga adelante', 'Escucharlo sin juzgar, validar su experiencia, acompañarlo a buscar ayuda institucional', 'Investigar tú mismo a los agresores', 'Mantener el secreto'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Escuchar SIN JUZGAR + VALIDAR ("te creo, no es tu culpa") + ACOMPAÑAR a buscar ayuda institucional. Eso es apoyo real, no clichés ("sé fuerte").', feedbackIncorrecto: '❌ "Sé fuerte" minimiza el dolor. Investigar solo puede ser peligroso. Mantener secreto deja a la víctima sin protección institucional. Lo correcto: ESCUCHAR + VALIDAR + ACOMPAÑAR a ayuda profesional.' },
    ],
  }],

  postLectura: {
    reflexion: 'El silencio del espectador es el aliado del agresor. ¿En qué situaciones de tu vida has sido espectador silencioso? ¿Qué te impidió actuar?',
    transferencia: 'Esta semana: memoriza la Línea 141 ICBF. Si ves o vives ciberbullying, aplica los pasos: capturar evidencia + acompañar a víctima + reportar a adulto.',
    cierre: 'El consejo del mayor y la Línea 141 comparten esencia: la comunidad protege a sus víctimas. La sabiduría ancestral sobrevive en los protocolos modernos.',
  },
};

export default contenido;
