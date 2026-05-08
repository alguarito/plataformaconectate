/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 9
 * (sesión global 19 — Proyecto MILC integrador).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 9,
  resumen:
    'Como el conocimiento de los lectores del cielo: leer el ambiente para servir a la comunidad. Aplicas TODO lo del periodo en un proyecto de monitoreo de la huerta escolar.',
  duracionMin: 90,
  subtema: 'Proyecto · Monitoreo · Logos como razón universal',

  preLectura: {
    porQueImporta:
      'Construir un proyecto integrador es la habilidad de quien lleva ideas a la realidad. Te servirá para emprender, para liderar grupos, para resolver problemas comunitarios reales con tecnología.',
    preguntaDetonante: '¿Qué del logos campesino — la lectura paciente del cielo — podemos llevar al monitoreo ambiental con sensores digitales?',
    activacion: { titulo: 'El proyecto que cambia algo', descripcion: 'En 5 minutos: en parejas identifiquen un problema real del colegio que un proyecto de monitoreo podría aliviar (cafetería, biblioteca, baños, huerta). Formulen la pregunta de monitoreo.', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 18 simulaste sistemas de alerta ambiental.', siguiente: 'En la sesión 20 sustentarás tu proyecto ante la comunidad.' },
  },

  conceptosClave: [
    { categoria: '🌱 Diseño', termino: 'Variables del entorno', definicion: 'Las 2-3 magnitudes que el proyecto monitoreará. La elección depende del problema a resolver y de los sensores disponibles.', ejemplo: 'Para huerta: humedad de tierra, temperatura, luz. Para biblioteca: temperatura, sonido, ocupación. Para baños: humedad, olor, uso.', emoji: '🌱' },
    { categoria: '🌱 Diseño', termino: 'Frecuencia de lectura', definicion: 'Cada cuánto se mide la variable. Más frecuente = más datos pero más almacenamiento. Menos frecuente = menos datos pero pierde detalles.', ejemplo: 'Para huerta: cada hora basta (humedad cambia lento). Para alarma: cada 10 segundos (incendio cambia rápido).', emoji: '⏱️' },
    { categoria: '🌱 Diseño', termino: 'Almacenamiento', definicion: 'Dónde se guardan los datos: tabla en MakeCode, hoja de Excel, archivo. Permite revisar, graficar, analizar después.', ejemplo: 'Tabla con columnas: fecha, hora, variable, valor, contexto. Cada lectura es una fila. Después se puede graficar.', emoji: '💾' },
    { categoria: '🌱 Diseño', termino: 'Visualización', definicion: 'Forma de mostrar los datos para que un humano los entienda al primer vistazo. Gráfico de evolución (líneas) suele ser ideal para datos temporales.', ejemplo: 'Gráfico de líneas: eje X = días, eje Y = humedad. Se ve la tendencia: lunes 80%, jueves 30%, riego, sube a 75%.', emoji: '📈' },
    { categoria: '📊 Comunicación', termino: 'Bitácora', definicion: 'Documento que acompaña al proyecto: qué se hizo cada día, qué se aprendió, qué se cambió. Evidencia el proceso, no solo el resultado.', ejemplo: 'Día 1: instalé sensor. Día 2: primera lectura, calibré umbral. Día 3: detecté error en código. Día 4: arreglé. Aprendí: filtros importan.', emoji: '📓' },
    { categoria: '📊 Comunicación', termino: 'Gráfico de evolución', definicion: 'Visualización temporal que muestra cómo cambia una variable en el tiempo. Revela tendencias (creciente, decreciente, cíclica) y casos extremos.', ejemplo: 'Humedad de la huerta a lo largo de una semana: cae rápido en días soleados, lento en nublados. Tendencia útil para programar riego.', emoji: '📈' },
    { categoria: '📊 Comunicación', termino: 'Recomendación accionable', definicion: 'Acción concreta y ejecutable que la comunidad puede implementar. NO genérica ("mejorar"); SÍ específica ("regar lunes y jueves").', ejemplo: 'Para huerta: "Riego: lunes y jueves si la semana es soleada; martes solamente si es nublada". Específico, ejecutable, medible.', emoji: '💡' },
    { categoria: '📊 Comunicación', termino: 'Logos: razón al servicio del bien común', definicion: 'El proyecto sirve a la comunidad, no al lucimiento personal. La razón (logos) se aplica al cuidado: huerta, biblioteca, vecinos, naturaleza.', ejemplo: 'Tu monitoreo no es para lucir tecnología — es para que la huerta produzca más con menos agua. La razón al servicio del cuidado.', emoji: '🌐' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Proyecto MILC integrador',
    instrucciones: '5 preguntas tipo ICFES sobre diseño y comunicación de proyectos de monitoreo.',
    preguntas: [
      { enunciado: 'Para un proyecto de monitoreo de huerta escolar, ¿cuántas variables es razonable monitorear?', opciones: ['1 variable (la más importante)', '2-3 variables relevantes y bien medidas', '10+ variables para ser exhaustivo', 'No importa, la cantidad es secundaria'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. 2-3 variables BIEN MEDIDAS son mejores que 10 mal medidas. La calidad supera la cantidad. Para huerta: humedad, temperatura, luz son suficientes y manejables.', feedbackIncorrecto: '❌ 1 variable da imagen incompleta. 10+ es saturación de datos. La regla profesional: 2-3 variables bien medidas que aporten información distinta. Calidad > cantidad.' },
      { enunciado: 'Para mostrar la evolución de humedad de la huerta a lo largo de una semana, el gráfico ideal es:', opciones: ['Pie / Circular', 'Líneas (eje X = días, eje Y = humedad)', 'Barras horizontales', 'Solo una tabla'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Para EVOLUCIÓN TEMPORAL, el gráfico de LÍNEAS es ideal. Cada día es un punto, la línea conecta y revela tendencias (subida, caída, estabilidad).', feedbackIncorrecto: '❌ Pie es para proporción. Barras es para comparación. Solo tabla no comunica evolución. LÍNEAS es para datos en el tiempo: revela tendencias al primer vistazo.' },
      { enunciado: 'Una "recomendación accionable" para la cooperativa escolar es:', opciones: ['"La huerta necesita atención"', '"Riego: lunes y jueves si la semana es soleada; martes si es nublada"', '"Mejorar todo lo posible"', '"La humedad es un tema importante"'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Una recomendación accionable dice QUÉ hacer, CUÁNDO, y se puede implementar mañana. "Atender" no es accionable; "regar lunes/jueves/martes según clima" sí.', feedbackIncorrecto: '❌ "Atender", "mejorar", "es importante" no son acciones — son etiquetas. Una recomendación útil es ESPECÍFICA y EJECUTABLE: qué, cuándo, cómo. Eso permite a la cooperativa implementarla.' },
      { enunciado: 'La "bitácora del proyecto" sirve para:', opciones: ['Llenar páginas y dar volumen al proyecto', 'Documentar el proceso día a día: qué se hizo, qué se aprendió, qué se cambió', 'Reemplazar la presentación final', 'Solo si lo pide el profesor'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La bitácora EVIDENCIA el proceso, no solo el resultado. Permite ver decisiones, errores, aprendizajes. Es evidencia profesional de que pensaste, no solo entregaste.', feedbackIncorrecto: '❌ La bitácora NO es relleno ni reemplazo de presentación. Es DOCUMENTACIÓN del proceso: decisiones, errores, aprendizajes. Demuestra que pensaste, no solo entregaste un producto final.' },
      { enunciado: 'El "logos al servicio del bien común" en un proyecto de monitoreo significa:', opciones: ['Mostrar que sé mucha tecnología', 'Que la razón técnica se aplica para cuidar a la comunidad (huerta, vecinos, recursos)', 'Hacer el proyecto más complejo', 'Usar la palabra "logos" en la presentación'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. El logos griego es razón universal. Aplicado: la tecnología NO es para lucir — es para servir. Tu monitoreo cuida la huerta, ahorra agua, mejora la cooperativa. Razón al servicio del cuidado.', feedbackIncorrecto: '❌ Logos al servicio del bien común NO es lucirse técnicamente ni complejizar. Es PROPÓSITO: la razón (técnica, científica) se aplica al cuidado de lo común (huerta, agua, comunidad). Es ética del proyecto.' },
    ],
  }],

  postLectura: {
    reflexion: 'Un proyecto que SIRVE a la comunidad es distinto a uno que LUCE en presentación. ¿Tu proyecto cuida algo concreto del colegio o de tu barrio? ¿A quién beneficia más allá de la nota?',
    transferencia: 'Esta semana: ejecuta TU proyecto de monitoreo. 7 días de lecturas (simuladas o reales), tabla, gráfico, recomendación. Compártelo con un compañero antes de la sustentación.',
    cierre: 'El logos campesino y el proyecto digital comparten propósito: leer el mundo para cuidarlo. La tecnología que sirve es la que se calibra al territorio y a la comunidad.',
  },
};

export default contenido;
