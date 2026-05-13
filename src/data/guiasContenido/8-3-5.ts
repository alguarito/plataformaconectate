/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 5
 * (sesión global 25 — Edición básica de sonido).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 5,
  resumen: 'Como la voz del cantor del pueblo: cuidar voz, pausas y ritmo. Aprendes a capturar audio con calidad, editar pausas y ruido, y exportar en formato apropiado para presentaciones y podcasts.',
  duracionMin: 90,
  subtema: 'Audio · Captura · Edición · Formatos',

  preLectura: {
    porQueImporta: 'Saber editar audio te abre el mundo del podcast, narración educativa, contenido en redes. Es habilidad creciente en demanda — y muy escasa entre estudiantes.',
    preguntaDetonante: '¿Qué de la voz del cantor del pueblo —su disciplina del ritmo y la pausa— podemos llevar a la grabación digital?',
    activacion: { titulo: 'El podcast memorable', descripcion: 'En 5 minutos: en parejas escuchen 30 segundos de un podcast favorito. Identifiquen qué hace que se sienta profesional: ¿voz clara? ¿pausas? ¿ausencia de ruido?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 24 aprendiste edición ética de imágenes.', siguiente: 'En la sesión 26 entrarás a ciberseguridad: protección ante ciberbullying.' },
  },

  conceptosClave: [
    { categoria: '🎤 Captura', termino: 'Micrófono', definicion: 'Dispositivo que captura sonido. El del celular es básico pero suficiente para iniciar. Mejor calidad: micrófono externo USB.', ejemplo: 'Micrófono del celular a 15-20cm de la boca, en ambiente silencioso, da grabación aceptable para podcast estudiantil.', emoji: '🎤' },
    { categoria: '🎤 Captura', termino: 'Ambiente silencioso', definicion: 'Espacio sin ruidos de fondo (ventilador, tráfico, voces). Ningún software arregla bien ruido pesado — la pre-producción ahorra horas.', ejemplo: 'Cuarto cerrado, ventanas cerradas, ventilador apagado. Si hay eco, agrega cojines o cobijas a la pared.', emoji: '🤫' },
    { categoria: '🎤 Captura', termino: 'Distancia', definicion: 'Espacio entre boca y micrófono. Muy cerca causa "popeo" (explosión de aire en consonantes); muy lejos pierde claridad.', ejemplo: 'Distancia ideal: 15-20cm (un puño aproximadamente). Permite voz natural sin distorsión.', emoji: '📏' },
    { categoria: '🎤 Captura', termino: 'Niveles', definicion: 'Volumen de la grabación. Muy bajo no se escucha; muy alto distorsiona (clipping). Lo profesional: el medidor toca verde con picos amarillos, NUNCA rojo.', ejemplo: 'Habla normal y mira el medidor. Si pasa al rojo (-3dB), hablas muy fuerte. Si no llega al verde, muy bajo.', emoji: '📊' },
    { categoria: '✂️ Edición', termino: 'Cortar pausas', definicion: 'Eliminar silencios largos (5+ segundos). Preserva pausas naturales que dan ritmo. Cortar TODAS las pausas suena robótico.', ejemplo: 'Audio crudo: 2 minutos. Después de cortar pausas largas: 1 minuto 30 segundos. Conservas las pausas naturales del habla.', emoji: '✂️' },
    { categoria: '✂️ Edición', termino: 'Reducir ruido', definicion: 'Herramienta de software (Audacity, GarageBand) que disminuye ruido constante de fondo. Funciona mejor con ruido pesado de pre-producción.', ejemplo: 'Selecciona 2 segundos de "silencio con ventilador" → "Reducción de ruido: capturar perfil" → aplicar al resto del audio.', emoji: '🔇' },
    { categoria: '✂️ Edición', termino: 'Normalizar volumen', definicion: 'Ajustar todas las partes al mismo nivel. Evita el problema de partes susurradas (no se oyen) o gritadas (irritan). Voz uniforme = profesional.', ejemplo: 'Sin normalizar: la audiencia ajusta volumen constantemente. Normalizado: nivel parejo, escucha cómoda.', emoji: '📉' },
    { categoria: '✂️ Edición', termino: 'Exportar formato', definicion: 'Forma final del archivo. MP3 (comprimido, archivos pequeños) para compartir; WAV (sin pérdida, archivos grandes) para producción.', ejemplo: 'Para enviar por WhatsApp: MP3 (1MB para 1 minuto). Para guardar máster: WAV (10MB para 1 minuto).', emoji: '💾' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Edición de audio',
    instrucciones: '5 preguntas tipo ICFES sobre captura y edición de audio profesional.',
    preguntas: [
      { enunciado: 'Para grabar un podcast con calidad aceptable, lo MÁS importante es:', opciones: ['Tener micrófono carísimo', 'Ambiente silencioso (pre-producción)', 'Software profesional', 'Filtros automáticos'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Pre-producción supera a herramientas: ningún software arregla bien ruido pesado. Cuarto silencioso + micrófono básico > cuarto ruidoso + micrófono caro.', feedbackIncorrecto: '❌ Lo más importante es PRE-PRODUCCIÓN: ambiente silencioso. Un buen micrófono en cuarto ruidoso da peor resultado que micrófono básico en cuarto silencioso. La fuente importa más que la herramienta.' },
      { enunciado: 'La distancia ideal entre boca y micrófono para podcast es:', opciones: ['Pegado a la boca', '15-20cm (un puño aproximadamente)', '1 metro o más', 'No importa, todo se arregla en edición'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. 15-20cm permite voz natural sin distorsión ni "popeo" (explosión de aire en P/B/T). Más cerca causa popeo; más lejos pierde claridad.', feedbackIncorrecto: '❌ Pegado causa "popeo" (explosión de aire). 1m+ pierde claridad y captura ruido ambiente. La distancia ideal es 15-20cm: un puño aproximadamente. Voz natural sin distorsión.' },
      { enunciado: 'Si tu audio tiene partes susurradas y partes gritadas, la herramienta apropiada es:', opciones: ['Reducción de ruido', 'Normalización de volumen', 'Filtro de Instagram', 'Cortar todo y regrabar'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. NORMALIZACIÓN ajusta todas las partes al mismo nivel. Las susurradas suben, las gritadas bajan, queda voz pareja. Es ajuste de volumen automático profesional.', feedbackIncorrecto: '❌ Reducción de ruido es para fondo (ventilador, eco). Filtros de Instagram son para imagen. Regrabar es solución cuando no se puede arreglar. NORMALIZACIÓN es la herramienta para volúmenes desiguales.' },
      { enunciado: 'Para compartir tu podcast por WhatsApp, el formato apropiado es:', opciones: ['WAV (alta calidad)', 'MP3 (comprimido, archivo pequeño)', 'OGG (libre)', 'Cualquiera funciona igual'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. MP3 es comprimido: 1MB por minuto aproximadamente. Compatible con todo. WAV es 10x más grande (no práctico para WhatsApp). OGG es libre pero no todos los reproductores lo abren.', feedbackIncorrecto: '❌ WAV es para producción (10MB/min). OGG es libre pero menos compatible. MP3 es ESTÁNDAR para compartir: comprimido (1MB/min), compatible con todo. Lo correcto para WhatsApp y redes.' },
      { enunciado: '¿Por qué cortar TODAS las pausas en tu podcast es mal?', opciones: ['No es mal, mientras más corto mejor', 'El audio suena robótico, sin ritmo natural; las pausas dan respiración a la audiencia', 'Es ilegal', 'No funciona técnicamente'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Las pausas NATURALES dan ritmo, énfasis, tiempo a la audiencia para procesar. Cortar TODAS hace que el audio suene robótico, agresivo, sin respiración. La regla profesional: cortar SOLO las pausas LARGAS (5+ segundos).', feedbackIncorrecto: '❌ Cortar todas las pausas hace audio ROBÓTICO. Las pausas naturales son ESENCIALES para ritmo, énfasis y comprensión. La regla profesional: cortar SOLO pausas largas (5+ segundos), preservar pausas naturales.' },
    ],
  }],

  postLectura: {
    reflexion: 'La edición de audio enseña paciencia: una grabación de 1 minuto bien editada toma 15 minutos de trabajo. ¿En qué otros ámbitos de tu vida la paciencia produce calidad superior?',
    transferencia: 'Esta semana: graba un audio de 1 minuto sobre tu proyecto, edita pausas largas, normaliza volumen, exporta MP3. Compártelo con un compañero y pide retroalimentación honesta.',
    cierre: 'La voz del cantor del pueblo y el podcast digital comparten disciplina: cuidar voz, pausas, ritmo. La diferencia es la herramienta; la ética del cuidado es la misma.',
  },

  saberAncestral: {
    saber:
      'El cantor del pueblo —el versador del Pacífico, el decimero del Valle, el copletero del Caribe, el juglar de las plazas andinas— era oficio de voz cuidada. Antes de cantar, ensayaba: aclaraba la garganta, medía la respiración, escuchaba el tono del público para ajustar volumen. Cada pausa tenía función: dejar al oyente respirar, dejar caer la frase, marcar el remate. Esa disciplina de la voz cantada y del silencio se aplica idéntica al podcast y al audio digital: capturar limpio, editar pausas largas, normalizar volumen, dejar caer el silencio que la frase necesita.',
    fuente: 'Cantores y versadores del Pacífico, el Valle, el Caribe y los Andes',
    preguntaPuente:
      '¿Qué hacía el versador del Pacífico antes de cada décima? ¿Y qué pierde un audio digital grabado de afán sin edición de pausas y volumen?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La voz propia con acento local es soberanía cultural — neutralizarla para "sonar profesional" es rendición.',
      preguntaEspejo:
        '¿En mis audios mantengo mi acento del Valle o lo neutralizo buscando un "español genérico" que no es mío?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La paciencia en la edición es virtud invisible — 1 minuto bien editado vale 10 mal grabados.',
      preguntaEspejo:
        '¿Estoy dispuesto a invertir 15 minutos editando 1 minuto de audio, o prefiero publicar rápido y mal?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La calidad del audio en la infoesfera respeta el tiempo y oído del que escucha.',
      preguntaEspejo:
        '¿Mis audios respetan a quien los escucha o los publican sin edición porque "se entiende igual"?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste que la edición de audio enseña paciencia — habilidad transferible a cualquier oficio que requiera pulir antes de entregar.',
    emocional:
      'Resististe la tentación de publicar al primer take — entendiste que el cuidado es regalo al oyente.',
    ciudadana:
      'Producir audios cuidados aporta a una infoesfera sonora menos saturada de ruido.',
    local:
      'Heredaste el oficio del versador del Pacífico y el decimero del Valle: voz cuidada, pausas con función, ritmo respetuoso.',
    intergeneracional:
      'El cantor del pueblo y el podcaster digital comparten ética del cuidado vocal. Lo que cambia es la herramienta, no la disciplina.',
  },
};

export default contenido;
