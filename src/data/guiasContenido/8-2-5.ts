/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 5
 * (sesión global 15 — Actuadores y eventos en MakeCode).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 5,
  resumen:
    'Como las campanas del pueblo: cada respuesta automática tiene su propio código sonoro. Aprendes a programar actuadores (LEDs, sonido, pantalla) en secuencias coreografiadas con propósito comunicativo.',
  duracionMin: 90,
  subtema: 'Actuadores · LEDs · Sonido · Coreografía',

  preLectura: {
    porQueImporta:
      'Saber diseñar respuestas automáticas multi-actuador te permite construir interfaces accesibles, alarmas claras, indicadores intuitivos. Es habilidad de diseño UX antes de existir UX.',
    preguntaDetonante:
      '¿Qué de las campanas del pueblo — la disciplina del código sonoro reconocible — podemos llevar a los actuadores que diseñamos hoy?',
    activacion: {
      titulo: 'La respuesta automática perfecta',
      descripcion:
        'En 5 minutos: en parejas identifiquen una respuesta automática del entorno (timbre del colegio, alarma del celular, notificación) que está bien diseñada y otra que está mal. ¿Qué las diferencia?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 14 aprendiste a leer sensores y configurar eventos automáticos.',
      siguiente: 'En la sesión 16 trabajarás variables, umbrales y calibración para sistemas más sofisticados.',
    },
  },

  conceptosClave: [
    { categoria: '💡 Tipos de actuador', termino: 'LED', definicion: 'Diodo emisor de luz. En el micro:bit hay matriz 5x5 de LEDs rojos integrados que se encienden individualmente o en patrones (iconos, mensajes, animaciones).', ejemplo: 'show_icon(Heart) enciende los LEDs en forma de corazón. plot(2,2) enciende solo el LED del centro. Útil para iconos rápidos.', emoji: '💡' },
    { categoria: '💡 Tipos de actuador', termino: 'Buzzer/sonido', definicion: 'Componente que produce sonido. En micro:bit v2 está integrado; en v1 requiere uno externo. Permite reproducir notas musicales, melodías, beeps simples.', ejemplo: 'play_tone(440, 500) emite la nota La por 500 ms. Útil para confirmaciones sonoras o alarmas cortas.', emoji: '🔔' },
    { categoria: '💡 Tipos de actuador', termino: 'Pantalla LED 5x5', definicion: 'La matriz de LEDs del micro:bit que muestra texto, números o iconos predefinidos. Limitada pero suficiente para mensajes cortos y reconocibles.', ejemplo: 'show_string("HOLA") desplaza el texto carácter por carácter. show_number(42) muestra el número.', emoji: '📺' },
    { categoria: '💡 Tipos de actuador', termino: 'Servomotor', definicion: 'Motor que se mueve a un ángulo específico (0° a 180°). Útil para abrir/cerrar puertas pequeñas, mover indicadores físicos, controlar mecanismos.', ejemplo: 'servo.set_angle(90) mueve el servo a posición central. servo.set_angle(180) lo lleva al extremo. Buen actuador físico.', emoji: '⚙️' },
    { categoria: '🎬 Diseño de respuesta', termino: 'Secuencia', definicion: 'Orden temporal de activación de actuadores. Una buena secuencia cuenta una historia: apertura visual → refuerzo sonoro → confirmación textual.', ejemplo: 'Saluda automático: 1) icono corazón (1s) → 2) melodía bienvenida (1.5s) → 3) texto "¡HOLA!" (2s). Lectura clara.', emoji: '📋' },
    { categoria: '🎬 Diseño de respuesta', termino: 'Patrón', definicion: 'Repetición consistente de una respuesta. Si tu saluda usa "luz + sonido + texto", todos los saludas deberían usar ese mismo patrón para que la audiencia lo aprenda.', ejemplo: 'Como las campanas del pueblo: 1 campanada = misa, 2 = muerte, 3 = fiesta. La consistencia hace que el patrón se aprenda.', emoji: '🔁' },
    { categoria: '🎬 Diseño de respuesta', termino: 'Duración', definicion: 'Tiempo que cada actuador permanece activo. Demasiado corto se pierde; demasiado largo molesta. La duración óptima depende del tipo de actuador y del mensaje.', ejemplo: 'LED visual: 1-2 segundos. Sonido: máximo 2 segundos (más es molesto). Texto: 2-3 segundos por mensaje.', emoji: '⏱️' },
    { categoria: '🎬 Diseño de respuesta', termino: 'Combinación multiestímulo', definicion: 'Coordinación de varios actuadores para un mensaje único. La regla universal del diseño: visual capta atención, sonoro confirma, textual explica.', ejemplo: 'Una alarma efectiva: LED rojo parpadea + buzzer corto repetido + texto "ALERTA". Tres canales coordinados, mismo mensaje.', emoji: '🎼' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Actuadores y secuencias',
    instrucciones: '5 preguntas tipo ICFES sobre diseño de respuestas automáticas multi-actuador.',
    preguntas: [
      { enunciado: 'Si quieres que el micro:bit muestre un icono de corazón, ¿qué bloque usarías?', opciones: ['play_tone(440, 500)', 'show_icon(Heart)', 'set_servo_angle(90)', 'sound_level()'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. show_icon(Heart) muestra el icono predefinido de corazón en la matriz LED 5x5. MakeCode tiene varios iconos: Heart, Smile, Sad, Yes, No, etc.', feedbackIncorrecto: '❌ play_tone es para sonido. set_servo_angle es para servomotor. sound_level lee sonido. Para mostrar visualmente un icono se usa show_icon().' },
      { enunciado: 'En una secuencia bien diseñada de saluda automático, ¿qué actuador suele ir PRIMERO?', opciones: ['Texto en pantalla', 'Visual (LED o icono)', 'Sonido (buzzer)', 'Servomotor'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La regla es "primero los ojos". El visual capta atención antes que el sonido. Después viene el sonoro como refuerzo, y al final el texto como confirmación.', feedbackIncorrecto: '❌ La regla del diseño multi-actuador: VISUAL primero (capta atención), SONORO después (refuerza), TEXTO al final (explica). Texto primero se pierde en el ojo no enfocado.' },
      { enunciado: 'Una respuesta automática que activa LED + sonido + texto al MISMO TIEMPO se siente:', opciones: ['Profesional y clara', 'Caótica y difícil de procesar', 'Económica en tiempo', 'Eficiente'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Sin pausas entre actuadores, todo se mezcla y la mente humana se pierde. La SECUENCIA con pausas (200-500ms entre cada uno) hace que se entienda.', feedbackIncorrecto: '❌ Activar todo a la vez es CAÓTICO, no profesional. La regla: secuenciar con pausas pequeñas (200-500ms). Cada actuador tiene su momento.' },
      { enunciado: 'La duración óptima de un sonido (buzzer) en una respuesta automática es:', opciones: ['Más de 5 segundos para que se escuche bien', 'Entre 1 y 2 segundos máximo', 'Lo más corto posible (50ms)', 'No importa, depende del usuario'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Sonidos de 1-2 segundos son perceptibles y no molestos. Más de 3 segundos se vuelve agresivo. Menos de 0.5 segundos se pierde.', feedbackIncorrecto: '❌ Sonidos largos (>3s) MOLESTAN. Sonidos demasiado cortos se PIERDEN. La duración óptima es 1-2 segundos: suficiente para captar, no tanto para irritar.' },
      { enunciado: 'Si la regla del pueblo era "1 campanada=misa, 2=muerte, 3=fiesta", el principio de diseño que aplica es:', opciones: ['Aleatoriedad para sorprender', 'Consistencia del patrón para que se aprenda', 'Volumen máximo siempre', 'Simplicidad sin código'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. La CONSISTENCIA del patrón (mismo número de campanadas → mismo significado) permite que la comunidad lo aprenda sin manual. Es el principio de diseño universal.', feedbackIncorrecto: '❌ La aleatoriedad rompe el aprendizaje. El volumen no es el principio. La consistencia DEL PATRÓN es lo que hace que cualquier respuesta automática (campanas, alarmas, semáforos) se vuelva legible.' },
    ],
  }],

  postLectura: {
    reflexion: 'Las campanas del pueblo y los actuadores digitales comparten un principio: comunicar con disciplina y consistencia. ¿En qué situación de tu colegio o casa convendría diseñar una respuesta automática para mejorar la convivencia?',
    transferencia: 'Esta semana: en MakeCode diseña un saluda automático completo con LED + sonido + texto y pruébalo con 3 personas distintas. ¿Lo entienden todas igual? Ajusta hasta que sí.',
    cierre: 'Las campanas y los actuadores digitales hacen lo mismo: dar voz a una decisión que la comunidad necesita escuchar. Diseñar es ordenar percepciones con respeto.',
  },
};

export default contenido;
