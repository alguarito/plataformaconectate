/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 8
 * (sesión global 28 — Estética de la liberación).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 8,
  resumen: 'Como los carnavales y las tejedurías Wayuu: belleza popular como acto político de dignidad. Aprendes a producir contenido digital que reconoce la cultura popular sin exotizarla.',
  duracionMin: 90,
  subtema: 'Estética de la liberación · Cultura popular · Producción ética',

  preLectura: {
    porQueImporta: 'Saber producir contenido cultural con respeto te diferencia: la mayoría de creadores exotizan; pocos dignifican. La distinción es ética y profesional.',
    preguntaDetonante: '¿Qué de los carnavales y las tejedurías —su belleza como acto político— podemos llevar al contenido digital que producimos?',
    activacion: { titulo: 'Reconocer vs exotizar', descripcion: 'En 5 minutos: en parejas comparen un video que muestra cultura popular con dignidad y otro que la exotiza. ¿Qué los distingue VISUAL Y NARRATIVAMENTE?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 27 aprendiste a protegerte de grooming.', siguiente: 'En la sesión 29 construirás proyecto MILC integrador sobre problemática social.' },
  },

  conceptosClave: [
    { categoria: '🎨 Principios estéticos', termino: 'Cultura popular', definicion: 'Saberes y oficios comunitarios desarrollados por generaciones: tejido, gastronomía, carnaval, agricultura, música. NO es "folclor" decorativo — es saber.', ejemplo: 'Mochila Wayuu no es "artesanía bonita" — es lectura/escritura en patrón de tejido. Cada figura cuenta historia familiar específica.', emoji: '🪡' },
    { categoria: '🎨 Principios estéticos', termino: 'Belleza singular', definicion: 'Lo propio del lugar/comunidad, NO copia de tendencias globales. La estética liberadora reconoce que cada cultura tiene belleza única.', ejemplo: 'Carnaval de Negros y Blancos (Pasto), Joropo (Llanos), Currulao (Pacífico), Bambuco (Cundinamarca). Cada uno con belleza propia, no derivada.', emoji: '🌈' },
    { categoria: '🎨 Principios estéticos', termino: 'Voz local', definicion: 'Quien sabe HABLA. El creador de contenido no habla POR la persona local — le da el espacio para que ella misma cuente su saber.', ejemplo: 'En vez de tu narración: "Las mochilas Wayuu son hermosas...", deja que tu abuela diga: "Esta mochila la hago como me enseñó mi abuela...".', emoji: '🗣️' },
    { categoria: '🎨 Principios estéticos', termino: 'Sur global', definicion: 'Pensar desde la herida histórica (colonialismo, exclusión) y ofrecer mundo desde ahí. NO esperar validación del norte; afirmar el saber propio.', ejemplo: 'No "Wayuu como tendencia exótica del año en revistas extranjeras" sino "Wayuu como saber técnico equivalente al de cualquier ingeniería textil".', emoji: '🌎' },
    { categoria: '📹 Producción ética', termino: 'Consentimiento', definicion: 'Pedir permiso ANTES de grabar, mostrar el resultado ANTES de publicar. Es respeto y es legal. Sin consentimiento, no hay producción ética.', ejemplo: '"Abuela, ¿le puedo grabar tejiendo y compartirlo en TikTok? Le mostraré antes de publicar para que diga si está OK". Eso es consentimiento.', emoji: '🤝' },
    { categoria: '📹 Producción ética', termino: 'Atribución', definicion: 'Créditos visibles a la persona y a la comunidad/saber. Sin atribución es plagio cultural — apropiarse de algo que no es tuyo.', ejemplo: 'En el video: "Tejedora: María Pushaina. Comunidad: Wayuu. Idioma: Wayuunaiki". Texto en pantalla, créditos finales, descripción del post.', emoji: '🏷️' },
    { categoria: '📹 Producción ética', termino: 'Contexto', definicion: 'Explicar la práctica para que se entienda como saber, no como pintoresco. NO mostrar solo "lo bonito" — mostrar el conocimiento detrás.', ejemplo: 'No solo "mira qué bonita la mochila". Sino: "Cada figura del patrón tiene nombre y significado familiar. Es lectura en formato textil".', emoji: '📚' },
    { categoria: '📹 Producción ética', termino: 'Propósito liberador', definicion: 'Para qué publico esto: ¿quién se beneficia con esta visibilización? Si es solo para mis vistas, es instrumentalización. Si es para reconocer un saber, es liberador.', ejemplo: '"Para que más gente conozca el tejido Wayuu como saber técnico, no como artesanía decorativa". Propósito claro y digno.', emoji: '🎯' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Producción ética cultural',
    instrucciones: '5 preguntas tipo ICFES sobre estética de la liberación.',
    preguntas: [
      { enunciado: 'La diferencia entre RECONOCER y EXOTIZAR una cultura popular es:', opciones: ['No hay diferencia', 'Reconocer trata el saber como conocimiento legítimo; exotizar lo trata como pintoresco', 'Exotizar es más profesional', 'Reconocer no genera vistas'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. RECONOCER da estatus de saber al conocimiento popular (igual a ingeniería, igual a ciencia). EXOTIZAR lo trata como decoración pintoresca. La diferencia es ética y se nota en el contenido.', feedbackIncorrecto: '❌ HAY diferencia ÉTICA fundamental: reconocer = tratar como saber legítimo. Exotizar = tratar como pintoresco/decorativo. Ambas pueden generar vistas, pero solo una es ética.' },
      { enunciado: 'En un video sobre tejido Wayuu de tu abuela, ¿quién debería tener mayor protagonismo?', opciones: ['Tú como creador del video', 'Tu abuela hablando del tejido', 'La música de fondo trendy', 'Los efectos visuales'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. La VOZ LOCAL = quien sabe habla. Tu abuela es la portadora del saber; tu rol es DARLE el espacio, no protagonizar tú. Eso es estética de la liberación.', feedbackIncorrecto: '❌ Si TÚ protagonizas, instrumentalizas el saber para tus vistas. La estética liberadora pone a la PERSONA QUE SABE en el centro. Tu rol es facilitar, no protagonizar.' },
      { enunciado: 'Antes de grabar a una persona para tu contenido, lo correcto es:', opciones: ['Grabar primero, pedir permiso después', 'Pedir consentimiento explícito ANTES de grabar y mostrar resultado ANTES de publicar', 'Solo pedir si la persona se molesta', 'No es necesario'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Consentimiento ANTES de grabar es ético y legal. Mostrar antes de publicar es respeto adicional. Sin esto, no hay producción ética — hay invasión.', feedbackIncorrecto: '❌ Grabar sin permiso es invasión de privacidad (y posible problema legal en Colombia). Pedir solo si se molestan es tarde. Lo correcto: CONSENTIMIENTO ANTES + MOSTRAR ANTES DE PUBLICAR.' },
      { enunciado: '"Pensar desde el sur global" en contenido cultural significa:', opciones: ['Imitar tendencias del norte para tener éxito', 'Reconocer la herida histórica y afirmar el saber propio sin esperar validación externa', 'Solo hablar del sur de Colombia', 'Es un concepto teórico sin aplicación'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Pensar desde el sur global = afirmar el saber propio sin esperar que el norte (Europa, EE.UU.) lo valide. La cultura popular colombiana tiene valor por sí misma.', feedbackIncorrecto: '❌ Imitar el norte es lo OPUESTO al sur global. "Solo el sur de Colombia" es geografía, no filosofía. Pensar desde el sur global es AFIRMAR el saber propio sin necesidad de validación externa.' },
      { enunciado: 'Tu video sobre cultura popular de tu barrio es más liberador si:', opciones: ['Tiene millones de vistas', 'Da voz a quien tradicionalmente NO la tiene en redes (mayores, oficios populares)', 'Usa filtros virales', 'Genera muchos likes'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. La estética liberadora se mide por A QUIÉN VISIBILIZAS, no por cantidad de vistas. Visibilizar a tu abuela tejedora vale más éticamente que millones de vistas a un trend genérico.', feedbackIncorrecto: '❌ Vistas, filtros y likes son métricas, no medida de impacto liberador. Lo liberador es DAR VOZ a quien tradicionalmente NO la tiene: mayores, oficios populares, comunidades silenciadas. La estética se mide en dignidad, no en clics.' },
    ],
  }],

  postLectura: {
    reflexion: 'Tu siguiente video puede dignificar a alguien o instrumentalizarlo para vistas. ¿Qué eliges? La diferencia es ética, no técnica.',
    transferencia: 'Esta semana: identifica UNA persona de tu familia o barrio con saber popular (oficio, receta, técnica). Pídele permiso para grabarla. Produce video respetando los principios.',
    cierre: 'Carnavales y tejedurías sobreviven en cada video que reconoce sin exotizar. La estética de la liberación es política digital.',
  },

  saberAncestral: {
    saber:
      'El Carnaval de Negros y Blancos en Pasto, el Carnaval de Barranquilla, las tejedurías wayuu en La Guajira, las balsas de guadua del Pacífico, los retablos de los maestros vereda — todas son expresiones de la estética popular colombiana que durante siglos fueron tratadas como "folclor exótico" por la mirada externa. Pero quien las hace, quien las hereda, sabe que son política: dignidad, memoria, resistencia. La estética de la liberación de Dussel nombra eso: belleza como acto político de los pueblos que han sido silenciados. Producir contenido digital sobre cultura popular sin exotizar (sin "rescatar al pueblito", sin postal turística) es heredar esa ética.',
    fuente: 'Carnavales del Pacífico y el Caribe, tejedurías wayuu, retablos veredas colombianos',
    preguntaPuente:
      '¿Cuándo has visto un video o una foto de tu región producido por gente de afuera que se sintió mal — como "exótico" o "pintoresco"? ¿Qué decisión específica del autor te molestó?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La estética de la liberación es la belleza que el pueblo produce sobre sí mismo — no la que otros producen sobre él.',
      preguntaEspejo:
        '¿Mis videos sobre mi región los hago yo desde dentro o reproduzco la mirada turística que aprendí de internet? ¿Cuál de las dos posturas honra a quien aparece?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Honrar lo que filmas pidiendo permiso es virtud antigua — la prisa por publicar es lo nuevo.',
      preguntaEspejo:
        '¿Cuántas veces he grabado a alguien sin permiso explícito porque "estaba en público"? ¿Qué pasaría si esa persona viera mi post mañana?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada video producido sobre una cultura modifica la infoesfera global de esa cultura — para bien o para mal.',
      preguntaEspejo:
        '¿Mis publicaciones sobre el Valle, el Pacífico o los Andes aportan a una infoesfera más rica de mi región, o reproducen el cliché que ya existe?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a distinguir entre reconocer y exotizar — habilidad ética rara en una era de turismo masivo y "creator economy".',
    emocional:
      'Resististe la facilidad de la postal — entendiste que producir contenido con respeto exige más trabajo que producir con efecto.',
    ciudadana:
      'Cada video tuyo que honra cultura popular sin exotizarla es resistencia a la mirada extractiva que domina redes.',
    local:
      'Heredaste la estética de los carnavales, tejedurías y oficios populares colombianos — política y belleza fusionadas.',
    intergeneracional:
      'El artesano wayuu que enseña su técnica a la nieta y tu próximo video sobre ella comparten propósito: que la memoria popular siga viva.',
  },
};

export default contenido;
