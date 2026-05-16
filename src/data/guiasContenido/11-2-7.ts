/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 7
 * Tema: Chatbots sin código — flujos de conversación.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-7.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 7,
  titulo: 'Chatbots sin código — flujos de conversación',
  ocultarPDF: false,
  resumen:
    'Un chatbot es el "loro escalable" del oficio digital. Aprendes a diseñar un flujo conversacional con 5 ramas, captura a hoja y escape humano explícito, sin escribir una sola línea de código.',
  duracionMin: 90,
  subtema: 'Automatización · Conversación automatizada',

  saberAncestral: {
    saber:
      'El loro del dueño, el muñeco oracular del abuelo, las tarjeticas de respuesta rápida del comerciante de plaza: todos antecesores del chatbot. La tendera del barrio respondía 50 veces al día las mismas frases ("no, el yogurt llegó dañado, devuélvalo"). Cuando la pregunta se repite, la respuesta se prepara. El chatbot moderno es ese mismo gesto — pero atendiendo a 5.000 personas al mismo tiempo.',
    fuente: 'Loro repetidor, muñeco oracular, tarjeticas del comerciante y tendera del barrio',
    preguntaPuente:
      '¿Cómo sabía la tendera qué 7 preguntas frecuentes valía la pena memorizar? ¿Y qué pierde un emprendedor novato cuando arma un chatbot infinito sin escape humano, que atrapa al cliente en un laberinto?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El loro escalable', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Conversa con 2 bots reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del flujo', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu chatbot funcional', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Bancos, EPS, alcaldías y plataformas inician la atención al ciudadano con un chatbot. Diseñarlos con criterio decide si la institución cuida o atrapa al usuario.',
    preguntaDetonante:
      'Si tu primo recibe 100 mensajes al día por WhatsApp con preguntas repetidas, ¿cómo le ahorras horas sin perder cortesía con sus clientes?',
    activacion: {
      titulo: 'El loro escalable',
      descripcion:
        'En 3 minutos: los estudiantes nombran qué 5-7 preguntas frecuentes recibe la portería del colegio. Reconocen que esos son los candidatos naturales a chatbot.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 6 aprendiste a clasificar mensajes con IA. Hoy unes esa lógica con automatización de triggers en una sola interfaz: el chatbot.',
      siguiente:
        'En la sesión 8 mides si el sistema completo funciona, con 5 KPIs que digan con número la salud del proceso.',
    },
  },

  conceptosClave: [
    {
      termino: 'Bienvenida',
      definicion:
        '1-2 frases cordiales que identifican al bot y describen qué puede hacer.',
      ejemplo:
        '"¡Hola! Soy el asistente de Panadería Cartago. Puedo ayudarte con pedidos, horarios o reclamos."',
      emoji: '👋',
    },
    {
      termino: 'Menú principal',
      definicion:
        '3-5 botones u opciones rápidas que cubren las consultas más frecuentes.',
      ejemplo:
        '[Hacer pedido] [Ver horarios] [Reclamo] [Hablar con humano].',
      emoji: '📋',
    },
    {
      termino: 'Ramificación con profundidad máxima 3',
      definicion:
        'Cada opción lleva a un sub-flujo. Más de 3 niveles produce abandono exponencial.',
      ejemplo:
        'Pedido → ¿tipo? → confirmar → fin (3 niveles, OK).',
      emoji: '🌳',
    },
    {
      termino: 'Captura de información',
      definicion:
        'El bot pide datos del usuario (nombre, email, pedido) y los guarda en hoja enlazada.',
      ejemplo:
        'Bot: "¿Cuál es tu nombre?" → guarda en hoja "Pedidos" automáticamente.',
      emoji: '📝',
    },
    {
      termino: 'Escape humano',
      definicion:
        'Regla innegociable: cada rama debe tener salida hacia un humano disponible.',
      ejemplo:
        'En cada paso: botón [Hablar con humano] o frase "escribe AGENTE para hablar con persona real".',
      emoji: '🆘',
    },
    {
      termino: 'Fallback',
      definicion:
        'Mensaje cuando el bot no entiende. No "error", sino conexión a humano.',
      ejemplo:
        '"Disculpa, no entendí. Te conecto con un asesor" (no "Opción inválida").',
      emoji: '🤝',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Conversa con 2 bots reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Conversa 5 minutos con cada uno de los 2 bots que comparte el docente.',
        'Anota: tiempo, repeticiones, si te atascaste en bucle, si hubo escape humano, si tu problema se resolvió.',
        'Identifica 2 diferencias concretas de diseño entre el bot bueno y el malo.',
        'Describe en 1 frase qué hace bueno o malo a un chatbot.',
      ],
      cuaderno: {
        titulo: 'Conversa con 2 bots',
        formato: 'Tabla 2 filas × 5 columnas (Tiempo | Repeticiones | Bucles | Escape | Resuelto)',
        extension: '2 filas + 2 diferencias',
      },
      criterios: [
        'Conversación real de 5 min con cada uno',
        '5 dimensiones evaluadas por bot',
        '2 diferencias concretas identificadas',
        'Reconozco qué hace bueno/malo un chatbot',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía del flujo',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 5 partes del flujo + 5 errores comunes.',
        'Aplícalas al bot que vas a construir.',
        'Boceta a mano el flujo de tu bot con sus 5 ramas.',
        'Marca 🚨 el error que más temes cometer.',
      ],
      cuaderno: {
        titulo: 'Anatomía del flujo',
        formato: 'Ficha 5 partes + 5 errores + boceto del flujo',
        extension: '1 ficha + 1 boceto',
      },
      criterios: [
        'Las 5 partes con contenido específico',
        '5 errores identificados con marca',
        'Boceto del flujo legible',
        'Podría auditar un bot ajeno con vocabulario técnico',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu chatbot funcional',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Crea cuenta gratuita en ManyChat o Landbot.',
        'Configura bienvenida + menú de 3-5 botones + 5 ramas con profundidad máxima 3.',
        'Agrega escape humano explícito en cada rama y captura a hoja en al menos 2 ramas.',
        'Prueba 3 conversaciones reales y captura cada flujo.',
      ],
      cuaderno: {
        titulo: 'Mi chatbot funcional',
        formato: 'Pantallazos del flujo + URL pública + 1 línea por rama',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        'Bienvenida cordial e identidad clara',
        '5 ramas con profundidad ≤ 3',
        'Captura enlazada a hoja',
        'Escape humano en cada rama',
        '3 pruebas exitosas',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Prueba con 3 compañeros reales',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte tu bot con 3 compañeros sin instrucciones previas.',
        'Mide tasa de finalización: ¿cuántos resolvieron, cuántos abandonaron, cuántos usaron escape?',
        'Anota qué confundió y qué fluyó bien.',
        'Aplica 1 ajuste concreto basado en la retroalimentación.',
      ],
      cuaderno: {
        titulo: 'Auditoría con 3 compañeros',
        formato: 'Tabla con 3 pruebas + tasa de finalización + 1 ajuste aplicado',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '3 conversaciones reales con externos',
        'Tasa de finalización medida',
        '1 ajuste aplicado',
        'Reconozco "yo entiendo mi bot" ≠ "es operativo para otros"',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica chatbots sin código',
      instrucciones:
        '5 preguntas para confirmar que diseñas flujos conversacionales con criterio. Necesitas 3/5.',
      preguntas: [
        {
          enunciado: 'Tu bot tiene un menú con 12 opciones. ¿Cuál es el problema?',
          opciones: [
            'Ninguno, más es mejor',
            'El usuario no procesa más de 5-7 opciones a la vez — abandona',
            'Es lento',
            'Faltan colores',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 3-5 botones es el rango funcional. 12 produce fatiga inmediata y abandono.',
          feedbackIncorrecto:
            'Demasiadas opciones. El cerebro humano prioriza 5-7 max. Agrupa en categorías o usa sub-menús.',
        },
        {
          enunciado: '¿Por qué el escape humano es regla innegociable?',
          opciones: [
            'Por capricho',
            'Porque sin escape, el bot atrapa al usuario que necesita atención personal — especialmente a los más vulnerables',
            'Solo si es legal',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. El escape humano es derecho del usuario, no decisión del diseñador. Sin él, el bot deja de ser servicio.',
          feedbackIncorrecto:
            'Es derecho del usuario. Las personas mayores, con baja alfabetización o con consultas complejas necesitan salida hacia un humano.',
        },
        {
          enunciado: 'Tu bot dice "Opción inválida, vuelve al menú" cuando no entiende. ¿Qué corrige?',
          opciones: [
            'Nada',
            'Cambiar el fallback por "Disculpa, no entendí. Te conecto con un asesor" — conectar a humano en vez de rebotar',
            'Quitarlo',
            'Hacerlo más bonito',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Opción inválida" trata al usuario como error; el fallback debe ofrecer humano, no castigo.',
          feedbackIncorrecto:
            'Conectar a humano. El bot no entiende → no es culpa del usuario → ofrece salida cordial.',
        },
        {
          enunciado: '¿Cuándo tiene sentido pedir 10 datos al inicio de la conversación?',
          opciones: [
            'Siempre',
            'Casi nunca: la captura excesiva produce abandono; pide solo lo necesario para la rama elegida',
            'Si el bot es comercial',
            'En todas las plataformas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Pedir datos sin justificación = abandono. Pide solo lo necesario para resolver la consulta actual.',
          feedbackIncorrecto:
            'Captura mínima. Cada dato adicional aumenta abandono. Pregunta solo cuando vas a usar la respuesta de inmediato.',
        },
        {
          enunciado: 'En el saber ancestral del loro y la tendera, ¿qué aplica al chatbot?',
          opciones: [
            'Nada',
            'Cuando la pregunta se repite, la respuesta se prepara — la tendera ya era chatbot, solo cambió la escala',
            'Que los loros son obsoletos',
            'Las tarjeticas no servían',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La tendera respondía 50 veces al día las mismas frases. El bot lo hace a 5.000. Mismo gesto, distinta escala.',
          feedbackIncorrecto:
            'Gesto antiguo a escala nueva. El oficio de preparar respuestas frecuentes existe hace siglos; el software solo lo escala.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu bot con 3 personas reales y mide tasa de finalización. Ajusta el flujo según resultados.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo chatbot decide quién recibe respuesta humana y quién queda atrapado en el laberinto del menú.',
      preguntaEspejo:
        '¿Mi bot ofrece escape humano en cada rama o solo en el menú principal? ¿Quién quedaría atrapado si el escape estuviera oculto?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La cortesía es virtud técnica antes que adorno social.',
      preguntaEspejo:
        '¿Los mensajes de mi bot tratan al usuario como persona o como código a procesar? ¿Le sonarían cordiales a mi abuela?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los chatbots son la primera línea de atención al ciudadano en la economía digital contemporánea.',
      preguntaEspejo:
        '¿Cuántos chatbots me atendieron esta semana? ¿Cuántos ayudaron y cuántos obligaron a abandonar? ¿Qué aprendí del diseño?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a construir un servicio conversacional sin código. Es ventaja transferible a cualquier emprendimiento.',
    emocional:
      'Resististe la tentación de "atrapar" al usuario en menús. La cortesía técnica es disciplina ética.',
    ciudadana:
      'Los bots públicos atienden o atrapan a millones. Diseñar con escape humano es ejercicio de cuidado ciudadano.',
    local:
      'El loro, el muñeco oracular, la tendera con sus 7 respuestas: oficios del XX que el software escala al XXI.',
    intergeneracional:
      'Lo que la tendera repetía cara a cara, tú lo automatizas con cortesía. Mismo cuidado, distinta escala.',
  },
};

export default contenido;
