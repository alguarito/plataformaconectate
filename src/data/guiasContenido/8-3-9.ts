/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 9
 * (sesión global 29 — Proyecto MILC integrador multimedia).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 9,
  resumen: 'Como los gritos colectivos del pueblo: voz comunitaria con propósito político. Aplicas TODO el periodo 3 en una presentación multimedia ética sobre problemática real del barrio.',
  duracionMin: 90,
  subtema: 'Proyecto integrador · Voz comunitaria · Cambio social',

  preLectura: {
    porQueImporta: 'Saber producir presentación multimedia ética que llame a la acción es habilidad de líder ciudadano. Te servirá para emprender, abogar, organizar.',
    preguntaDetonante: '¿Qué de los gritos colectivos del pueblo —voz comunitaria con propósito político— podemos llevar a la presentación multimedia digital?',
    activacion: { titulo: 'La problemática que importa', descripcion: 'En 5 minutos: en parejas identifiquen UNA problemática real de su barrio que les afecte. ¿A quién afecta concretamente? ¿Qué propondrían?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 28 aplicaste estética de la liberación a contenidos.', siguiente: 'En la sesión 30 sustentas el portafolio digital ante la comunidad (Triángulo Dussel-Estoicismo-Floridi).' },
  },

  conceptosClave: [
    { categoria: '🌍 Diseño', termino: 'Problema social', definicion: 'Situación real que afecta a personas concretas en tu entorno. Verificable, no inventada. Punto de partida del proyecto integrador.', ejemplo: 'Falta de iluminación en 8 cuadras del barrio → afecta seguridad de estudiantes que regresan tarde → 12 robos en 6 meses.', emoji: '🌍' },
    { categoria: '🌍 Diseño', termino: 'Causas', definicion: 'Análisis honesto de qué genera el problema. NO simplificar a "la culpa del gobierno" — entender complejidad para proponer solución eficaz.', ejemplo: 'Falta iluminación porque: 1) presupuesto comunal limitado, 2) trámite con alcaldía complejo, 3) priorización municipal en otros barrios.', emoji: '🔬' },
    { categoria: '🌍 Diseño', termino: 'Voces afectadas', definicion: 'Personas concretas con nombre, no estadísticas anónimas. Su testimonio da rostro al problema y conecta con la audiencia decisora.', ejemplo: 'Doña Marta (residente 40 años): "Camino con miedo desde las 6pm". Pablo (estudiante): "He visto 3 robos esta semana". Voces concretas movilizan.', emoji: '👥' },
    { categoria: '🌍 Diseño', termino: 'Propuesta', definicion: 'Solución específica, ejecutable, dimensionada (cuánto cuesta, cuánto demora, quién la ejecuta). NO genérica ("mejorar la seguridad").', ejemplo: '"16 luminarias LED solares en las 8 cuadras críticas. Costo: $3.2M. Tiempo: 3 meses. Ejecutor: alcaldía vía programa de iluminación 2025".', emoji: '💡' },
    { categoria: '🎙️ Producción ética', termino: 'Consentimiento informado', definicion: 'Cada persona que aparece en imagen o voz da permiso explícito ANTES de grabar y aprueba el resultado ANTES de publicar. Es ético y legal.', ejemplo: 'Formato firmado o audio: "Yo, María Pérez, autorizo a [nombre] a usar mi imagen y voz en presentación sobre iluminación del barrio".', emoji: '✍️' },
    { categoria: '🎙️ Producción ética', termino: 'Datos verificados', definicion: 'Cifras con fuente citada. Para temas locales: policía, alcaldía, junta de acción comunal, registros oficiales. Sin fuente, son rumores.', ejemplo: '"12 robos en 6 meses (Fuente: estación de policía Cartago, datos del trimestre)". Verificable, citable, defendible.', emoji: '📊' },
    { categoria: '🎙️ Producción ética', termino: 'Multimedia respetuoso', definicion: 'Imágenes editadas éticamente (sin manipular), audio normalizado pero sin sensacionalismo, narrativa que dignifica a afectados.', ejemplo: 'Foto del barrio con iluminación pobre: ajuste de brillo OK. Pero NO recortar para que se vea peor de lo que es. La verdad visual es ética.', emoji: '🎬' },
    { categoria: '🎙️ Producción ética', termino: 'Llamado a la acción', definicion: 'Lo que pides que el destinatario haga. ESPECÍFICO (qué), CUÁNDO (plazo), CÓMO (mecanismo). NO genérico.', ejemplo: '"Solicitamos a la junta presentar petición formal a la alcaldía de Cartago antes del 30 de junio, en el marco del programa de iluminación 2025".', emoji: '📢' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Proyecto integrador ético',
    instrucciones: '5 preguntas tipo ICFES sobre producción de presentación multimedia social.',
    preguntas: [
      { enunciado: 'En tu presentación sobre problemática del barrio, una "voz afectada" significa:', opciones: ['Estadística general', 'Persona concreta con nombre que comparte testimonio', 'Tu opinión personal', 'Un experto académico'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Una historia personal con nombre y rostro mueve más que mil estadísticas anónimas. Doña Marta caminando con miedo conecta con la audiencia decisora.', feedbackIncorrecto: '❌ Estadísticas son contexto, no voz. Tu opinión es subjetiva. Experto académico es respaldo, no voz afectada. La VOZ AFECTADA = persona CONCRETA del barrio que sufre el problema, con nombre y testimonio.' },
      { enunciado: 'Un "llamado a la acción" efectivo se reconoce porque:', opciones: ['Es muy emotivo y dramático', 'Es ESPECÍFICO (qué), tiene PLAZO (cuándo) y MECANISMO (cómo)', 'Promete soluciones generales', 'No molesta a nadie'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Un llamado vago ("apoyemos la iluminación") no moviliza. Un llamado específico+plazo+mecanismo SÍ permite acción concreta. Es ingeniería del cambio social.', feedbackIncorrecto: '❌ La emoción ayuda, pero un llamado solo emotivo sin especificidad no se ejecuta. Lo profesional: QUÉ (acción específica) + CUÁNDO (plazo) + CÓMO (mecanismo). Sin estos tres, es slogan.' },
      { enunciado: 'Antes de mostrar la cara y voz de un vecino en tu presentación, debes:', opciones: ['Grabar y avisar después', 'Obtener consentimiento informado por escrito o audio explícito', 'Solo si te pide permiso', 'No es necesario'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Consentimiento informado es ético Y legal en Colombia. Sin él, posible violación de habeas data e imagen. Hazlo SIEMPRE: formato firmado o audio explícito.', feedbackIncorrecto: '❌ Grabar y avisar después es invasión. Consentimiento INFORMADO (con explicación de uso) y EXPLÍCITO (escrito o audio) es la regla profesional y legal. Protege al vecino y a ti.' },
      { enunciado: 'Si en tu presentación citas "12 robos en 6 meses", debes:', opciones: ['Inventar un número impactante', 'Citar fuente verificable (policía, alcaldía, registros oficiales)', 'No es necesario verificar', 'Usar el número que te suene mejor'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Datos sin fuente son rumores. Datos con fuente citada son argumentos. Para problemáticas locales: policía, alcaldía, junta de acción comunal son fuentes verificables.', feedbackIncorrecto: '❌ Inventar números destruye tu credibilidad cuando se descubre (siempre se descubre). Sin verificar es irresponsable. Lo profesional: cifra exacta + FUENTE citada (policía, alcaldía, registro oficial).' },
      { enunciado: 'La diferencia entre presentación que MOVILIZA y presentación que solo INFORMA es:', opciones: ['No hay diferencia', 'La que moviliza tiene voces concretas + datos verificados + llamado específico + plan de socialización', 'La que moviliza es más larga', 'La que informa es más profesional'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. INFORMAR = explicar el problema. MOVILIZAR = informar + dar herramientas para actuar. La diferencia: voces, datos, llamado, plan. Sin esos elementos, es informe; con ellos, es proyecto.', feedbackIncorrecto: '❌ HAY diferencia importante: INFORMAR explica. MOVILIZAR explica + invita y permite acción. La diferencia se ve en: voces concretas + datos verificados + llamado específico + plan de socialización. Tu proyecto debe MOVILIZAR.' },
    ],
  }],

  postLectura: {
    reflexion: 'Tu proyecto puede quedar en cuaderno o llegar a la junta. La diferencia la hace el plan de socialización. ¿Quién va a recibir tu presentación y cuándo?',
    transferencia: 'Esta semana: completa tu proyecto integrador. Ensaya la presentación. Confirma fecha de socialización con la junta o entidad relevante. Da seguimiento al llamado a la acción.',
    cierre: 'Los gritos colectivos del pueblo y la presentación multimedia comparten propósito: amplificar voces para movilizar cambio. La voz comunitaria es ancestral; el medio es nuevo.',
  },
};

export default contenido;
