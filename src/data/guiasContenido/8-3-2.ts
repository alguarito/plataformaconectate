/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 2
 * (sesión global 22 — Animaciones e hipervínculos).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 2,
  resumen: 'Como el movimiento del titiritero: cada figura entra, gesticula, sale en su tiempo. Aprendes a usar animaciones e hipervínculos con propósito (no decoración) en presentaciones digitales.',
  duracionMin: 90,
  subtema: 'Animaciones · Hipervínculos · Narrativa interactiva',

  preLectura: {
    porQueImporta: 'Saber crear presentaciones interactivas te diferencia profesionalmente: cuando alguien navega tu presentación según interés, en lugar de seguir un orden lineal, demuestras dominio del medio.',
    preguntaDetonante: '¿Qué del titiritero —su disciplina de mover una figura a la vez— podemos llevar a las animaciones digitales?',
    activacion: { titulo: 'La presentación interactiva', descripcion: 'En 5 minutos: en parejas exploran una presentación interactiva (en Canva o YouTube). Identifiquen 3 animaciones con propósito y 3 sin propósito. ¿Qué las distingue?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 21 aplicaste principios visuales a 5 diapositivas.', siguiente: 'En la sesión 23 construirás presentación de alto impacto con narrativa.' },
  },

  conceptosClave: [
    { categoria: '🎬 Tipos de animación', termino: 'Entrada', definicion: 'Animación que marca cómo aparece un elemento. Aparecer, deslizar, desvanecerse. Las simples son elegantes; las rebuscadas distraen.', ejemplo: 'Aparecer (0.5s) para texto principal. Deslizar desde arriba para imagen clave. Evita "rebote" o "espiral".', emoji: '⏬' },
    { categoria: '🎬 Tipos de animación', termino: 'Énfasis', definicion: 'Animación sutil que destaca un elemento sin moverlo de su lugar. Cambio de color, pequeño zoom, parpadeo discreto.', ejemplo: 'Una cifra clave (40%) cambia de gris a rojo cuando se menciona. Resalta sin distraer del flujo.', emoji: '✨' },
    { categoria: '🎬 Tipos de animación', termino: 'Salida', definicion: 'Animación que marca cómo desaparece un elemento. Suele ser silenciosa y rápida para no distraer del siguiente contenido.', ejemplo: 'Desvanecerse (0.3s) para texto que ya cumplió su función. NO usar salidas dramáticas.', emoji: '⏫' },
    { categoria: '🎬 Tipos de animación', termino: 'Trayectoria', definicion: 'Camino visual que un elemento recorre durante la animación. Lo simple (recto) es elegante; lo complejo (espiral, rebote) es distractor.', ejemplo: 'Imagen aparece deslizando recto desde la derecha (OK). Imagen rebotando 5 veces (mal — distrae del contenido).', emoji: '➡️' },
    { categoria: '🔗 Hipervínculos', termino: 'Vínculo interno', definicion: 'Hipervínculo que salta a otra diapositiva dentro de la misma presentación. Crea menús, índices, navegación no lineal.', ejemplo: 'En la diapositiva de menú, click en "Sección 2" salta a la slide 5. Click en "Volver" regresa al menú.', emoji: '🔗' },
    { categoria: '🔗 Hipervínculos', termino: 'Vínculo externo', definicion: 'Hipervínculo que abre una página web fuera de la presentación. Útil para referencias, ejemplos, recursos adicionales.', ejemplo: 'Click en "Ver el código completo" abre el repositorio GitHub en el navegador. Útil para mostrar evidencia técnica.', emoji: '🌐' },
    { categoria: '🔗 Hipervínculos', termino: 'Botón de acción', definicion: 'Elemento gráfico clickeable que combina hipervínculo + animación de feedback. Se siente más profesional que texto subrayado.', ejemplo: 'Botón "Volver al menú" con efecto hover (cambio de color al pasar el mouse) + click que regresa.', emoji: '🔘' },
    { categoria: '🔗 Hipervínculos', termino: 'Diapositiva de menú', definicion: 'Slide especial al inicio que ofrece opciones navegables. Permite a la audiencia elegir el camino según interés.', ejemplo: 'Slide de menú con 3 botones: "Problema", "Solución", "Implementación". Cada uno lleva a su sección.', emoji: '📋' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Animaciones e interactividad',
    instrucciones: '5 preguntas tipo ICFES sobre uso disciplinado de animaciones e hipervínculos.',
    preguntas: [
      { enunciado: 'Para una diapositiva profesional, ¿cuántas animaciones diferentes son apropiadas?', opciones: ['8+ para impresionar', '2-3 con propósito comunicativo', '0, las animaciones son siempre malas', 'Depende del software'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. La regla profesional: 2-3 animaciones máximo POR DIAPOSITIVA, todas con propósito. 8+ es sobrecarga; 0 puede dejar la presentación rígida; 2-3 da variedad sin distraer.', feedbackIncorrecto: '❌ 8+ animaciones es sobrecarga (Carlos del caso de estudio). 0 es rígido. La regla profesional: 2-3 con propósito comunicativo claro.' },
      { enunciado: 'La duración apropiada para una animación de entrada en una diapositiva profesional es:', opciones: ['Más de 3 segundos para que la audiencia la note bien', 'Entre 0.5 y 1 segundo (corta y respetuosa)', 'Lo más larga posible', '5 segundos exactos'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Animaciones de 0.5-1s son rápidas, profesionales y no aburren. Más de 3s es molesto y pierde la atención.', feedbackIncorrecto: '❌ Animaciones largas (>3s) son molestas. La regla profesional: 0.5-1 segundo. Suficiente para captar atención, no tanto para irritar a la audiencia.' },
      { enunciado: 'Un hipervínculo INTERNO sirve para:', opciones: ['Abrir páginas web fuera de la presentación', 'Saltar a otra diapositiva DENTRO de la misma presentación', 'Reproducir un sonido', 'Cambiar el tema'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Vínculo INTERNO = navegación entre diapositivas (ej: ir al menú, saltar a una sección). Vínculo EXTERNO = abrir URL fuera. Ambos son útiles para distintos propósitos.', feedbackIncorrecto: '❌ Vínculo INTERNO conecta diapositivas dentro de la misma presentación. Vínculo EXTERNO abre URL afuera. Son herramientas distintas para usos distintos.' },
      { enunciado: 'Si tienes una presentación con menú navegable, ¿qué debe tener cada sección secundaria?', opciones: ['Nada especial', 'Botón de "Volver al menú" claramente visible', 'Animaciones agresivas para captar', 'Música de fondo'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Sin botón de retorno, la audiencia se pierde en la presentación interactiva. La regla profesional: cada sección tiene retorno claro al menú.', feedbackIncorrecto: '❌ Sin botón de retorno la presentación interactiva pierde funcionalidad. Animaciones agresivas distraen. Música de fondo molesta. La regla: BOTÓN VOLVER VISIBLE en cada sección.' },
      { enunciado: 'La regla profesional sobre animaciones es:', opciones: ['Más es mejor', 'Si no agrega claridad, no la pongas', 'Solo en presentaciones casuales', 'Las animaciones son obsoletas'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Cada animación debe AGREGAR CLARIDAD al mensaje (revelar paso a paso, destacar dato clave, marcar transición). Si no agrega claridad, distrae. Es regla universal de UX.', feedbackIncorrecto: '❌ "Más es mejor" es la receta de presentaciones malas. Las animaciones NO son obsoletas, son útiles CON PROPÓSITO. La regla profesional: si no agrega CLARIDAD, no la pongas.' },
    ],
  }],

  postLectura: {
    reflexion: 'El minimalismo en animaciones es señal de profesionalismo. ¿En qué otros ámbitos de tu vida (decoración, vestimenta, hábitos) "menos es más"?',
    transferencia: 'Esta semana: en una presentación tuya, cuenta cuántas animaciones tienes. Si son más de 3 por diapositiva, recorta hasta dejar solo las que agreguen claridad real.',
    cierre: 'El titiritero y el animador digital comparten oficio: mover lo justo, en el momento justo. La disciplina del movimiento es elegancia.',
  },
};

export default contenido;
