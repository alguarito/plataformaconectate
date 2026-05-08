/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 1
 * (sesión global 21 — Diseño de presentaciones multimedia).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 1,
  resumen: 'Como los retablos coloniales: cada panel cuenta un fragmento de la historia, ordenando la mirada. Aprendes principios universales de diseño visual y comunicación con diapositivas.',
  duracionMin: 90,
  subtema: 'Multimedia · Diseño visual · Jerarquía',

  preLectura: {
    porQueImporta: 'Saber diseñar presentaciones es habilidad universal: para tu próximo trabajo, tu universidad, tu emprendimiento. Una buena presentación abre puertas; una mala las cierra.',
    preguntaDetonante: '¿Qué de los retablos coloniales —cada panel un fragmento ordenado de la historia— podemos llevar a las diapositivas digitales?',
    activacion: { titulo: 'La presentación memorable', descripcion: 'En 5 minutos: en parejas recuerden la mejor y la peor presentación que han visto. ¿Qué las diferenció VISUALMENTE? ¿Qué principios de diseño aplicaba la buena?', duracionMin: 5 },
    conexion: { anterior: 'Cierre del periodo 2: aprendiste lógica avanzada y proyectos técnicos.', siguiente: 'En la sesión 22 aprenderás animaciones e hipervínculos para presentaciones interactivas.' },
  },

  conceptosClave: [
    { categoria: '🎨 Principios visuales', termino: 'Jerarquía', definicion: 'Orden visual que guía qué se ve primero, segundo y tercero. Tamaño, color y posición la crean. Sin jerarquía, todo grita igual y nada destaca.', ejemplo: 'Título grande arriba (jerarquía 1), mensaje principal mediano (jerarquía 2), notas pequeñas al pie (jerarquía 3). El ojo lee en orden.', emoji: '📐' },
    { categoria: '🎨 Principios visuales', termino: 'Contraste', definicion: 'Diferencia visual entre elementos: claro vs oscuro, grande vs pequeño, color vs gris. El contraste destaca lo importante y separa información.', ejemplo: 'Texto negro sobre fondo blanco: máximo contraste, máxima legibilidad. Texto gris sobre fondo gris: bajo contraste, ilegible.', emoji: '⚫' },
    { categoria: '🎨 Principios visuales', termino: 'Espacio en blanco', definicion: 'Áreas sin contenido en la diapositiva. NO es vacío — es elegancia. El ojo descansa, la información destaca, el mensaje respira.', ejemplo: '30-40% de espacio en blanco en una diapositiva profesional. La sobrecarga es síntoma de no haber pensado bien.', emoji: '⬜' },
    { categoria: '🎨 Principios visuales', termino: 'Alineación', definicion: 'Consistencia en cómo se posicionan los elementos. Todos los títulos a la izquierda, todas las imágenes con el mismo margen. Crea coherencia visual.', ejemplo: 'Si un título está a la izquierda, todos los títulos a la izquierda. Si está centrado, todos centrados. La consistencia es elegancia.', emoji: '📏' },
    { categoria: '🖼️ Anatomía de diapositiva', termino: 'Título', definicion: 'Frase grande que dice qué muestra la diapositiva en una línea. Autocontenido: alguien que lo lee solo entiende el tema.', ejemplo: '"Energía solar para mi colegio: ahorro estimado en 5 años" es buen título. "Energía" no lo es (muy vago).', emoji: '🏷️' },
    { categoria: '🖼️ Anatomía de diapositiva', termino: 'Mensaje único', definicion: 'UNA idea principal por diapositiva. Si tienes dos ideas, son dos diapositivas. La sobrecarga es síntoma de no haber pensado bien la estructura.', ejemplo: 'Slide A: el problema (gasto eléctrico). Slide B: la propuesta (paneles solares). NO mezclar ambos en una sola.', emoji: '🎯' },
    { categoria: '🖼️ Anatomía de diapositiva', termino: 'Imagen de apoyo', definicion: 'UNA imagen clave que refuerza el mensaje, no decora. Cada imagen debe tener propósito: ilustrar, comparar, ejemplificar.', ejemplo: 'Para "ahorro de electricidad" → gráfico comparativo. Para "instalación de paneles" → foto del sitio. NO una foto de "tecnología" genérica.', emoji: '🖼️' },
    { categoria: '🖼️ Anatomía de diapositiva', termino: 'Cita de fuente', definicion: 'Pequeña anotación que indica de dónde vienen los datos o imágenes. Da credibilidad sin distraer del mensaje principal.', ejemplo: '"Fuente: encuesta propia, abril 2026" o "Imagen: Pexels, autor X" en esquina inferior, pequeña y discreta.', emoji: '📑' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Diseño de diapositivas profesionales',
    instrucciones: '5 preguntas tipo ICFES sobre principios de diseño visual.',
    preguntas: [
      { enunciado: 'Para una presentación profesional, el espacio en blanco ideal en cada diapositiva es:', opciones: ['0% (todo lleno de información)', '30-40% (respiración visual)', '90% (casi vacío)', 'No importa'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. 30-40% de espacio en blanco da elegancia, hace destacar la información clave y permite al ojo descansar. Más es minimalismo extremo; menos es sobrecarga.', feedbackIncorrecto: '❌ Llenar todo es sobrecarga (síntoma de no pensar). Casi vacío es minimalismo extremo. La regla profesional: 30-40% de blanco da elegancia y destaca la información.' },
      { enunciado: 'La regla "6x6" en diseño de diapositivas significa:', opciones: ['6 colores y 6 fuentes', 'Máximo 6 palabras por línea, 6 líneas por diapositiva', '6 imágenes por slide', '6 minutos de presentación'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Máximo 6 palabras por línea, máximo 6 líneas por diapositiva. Es regla profesional contra la sobrecarga textual. Más texto = menos atención.', feedbackIncorrecto: '❌ La regla 6x6 es sobre TEXTO en diapositivas: máximo 6 palabras por línea, 6 líneas por slide. Combate la sobrecarga textual que arruina presentaciones.' },
      { enunciado: 'Si tienes que mostrar 12 categorías de datos en una diapositiva, la mejor opción es:', opciones: ['Pie chart con 12 secciones', 'Barras horizontales con valores numéricos', 'Tabla densa con todos los datos', 'Gráfico 3D con efectos'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Para 12 categorías, BARRAS HORIZONTALES con valores son más legibles. El pie con tantas secciones es ilegible. La tabla densa es texto puro. El 3D distrae.', feedbackIncorrecto: '❌ Pie con 12 secciones es ilegible (humanos no comparan áreas pequeñas). Tabla densa pierde el punto visual. 3D distrae con efectos. BARRAS HORIZONTALES con valores son la elección profesional.' },
      { enunciado: '¿Por qué citar fuentes en una diapositiva?', opciones: ['Para llenar espacio', 'Para dar credibilidad y permitir verificación independiente', 'Es opcional', 'Solo si lo pide el profesor'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Citar fuentes da CREDIBILIDAD profesional Y permite que la audiencia verifique independientemente. Sin fuente, los datos son opinión disfrazada.', feedbackIncorrecto: '❌ Citar fuentes NO es relleno ni opcional. Es ÉTICA profesional: da credibilidad, permite verificación, evita plagio. Toda diapositiva con datos debe tener fuente visible.' },
      { enunciado: 'Edward Tufte, gurú del diseño de información, dice que el espacio en blanco es:', opciones: ['Vacío', 'Elegancia', 'Pereza del diseñador', 'Falta de contenido'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La famosa frase de Tufte: "El espacio en blanco no es vacío — es elegancia". Las mejores presentaciones tienen mucho blanco y poco texto.', feedbackIncorrecto: '❌ Tufte (gurú del diseño de información) dice que el espacio en blanco es ELEGANCIA, no vacío ni pereza. Las presentaciones profesionales tienen MUCHO blanco. Es disciplina, no falta de contenido.' },
    ],
  }],

  postLectura: {
    reflexion: 'Cada decisión de diseño (color, tamaño, espacio) comunica algo. ¿Qué tono comunica TU diseño actual: profesional, casual, urgente, calmado? ¿Es lo que quieres comunicar?',
    transferencia: 'Esta semana: en Canva o PowerPoint diseña 5 diapositivas aplicando los 4 principios (jerarquía, contraste, espacio en blanco, alineación). Compártelo con un compañero antes de presentar.',
    cierre: 'Los retablos coloniales y las diapositivas digitales comparten propósito: ordenar la mirada para enseñar. La elegancia es disciplina, no decoración.',
  },
};

export default contenido;
