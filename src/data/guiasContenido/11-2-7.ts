/**
 * Contenido enriquecido para Grado 11 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/11/11-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 7,
  titulo: 'Chatbots sin código — flujos de conversación',
  resumen: 'Un chatbot es el "loro escalable" del oficio digital. Aprendes a diseñar un flujo conversacional con 5 ramas, captura a hoja y escape humano explícito, sin escribir una sola línea de código.',
  duracionMin: 90,
  subtema: 'Automatización · Conversación automatizada',
  preLectura: {
    porQueImporta: 'Bancos, EPS, alcaldías y plataformas inician la atención al ciudadano con un chatbot. Diseñarlos con criterio decide si la institución cuida o atrapa al usuario.',
    preguntaDetonante: 'Si tu primo recibe 100 mensajes al día por WhatsApp con preguntas repetidas, ¿cómo le ahorras horas sin perder cortesía con sus clientes?',
    activacion: {
      titulo: 'El loro escalable',
      descripcion: 'En 3 minutos: los estudiantes nombran qué 5-7 preguntas frecuentes recibe la portería del colegio. Reconocen que esos son los candidatos naturales a chatbot.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 6 aprendiste a clasificar mensajes con IA. Hoy unes esa lógica con automatización de triggers en una sola interfaz: el chatbot.',
      siguiente: 'En la sesión 8 mides si el sistema completo funciona, con 5 KPIs que digan con número la salud del proceso.'
    }
  },
  conceptosClave: [
    {
      termino: 'Bienvenida',
      definicion: '1-2 frases cordiales que identifican al bot y describen qué puede hacer.',
      ejemplo: '"¡Hola! Soy el asistente de Panadería Cartago. Puedo ayudarte con pedidos, horarios o reclamos."',
      emoji: '👋'
    },
    {
      termino: 'Menú principal',
      definicion: '3-5 botones u opciones rápidas que cubren las consultas más frecuentes.',
      ejemplo: '[Hacer pedido] [Ver horarios] [Reclamo] [Hablar con humano].',
      emoji: '📋'
    },
    {
      termino: 'Ramificación con profundidad máxima 3',
      definicion: 'Cada opción lleva a un sub-flujo. Más de 3 niveles produce abandono exponencial.',
      ejemplo: 'Pedido → ¿tipo? → confirmar → fin (3 niveles, OK).',
      emoji: '🌳'
    },
    {
      termino: 'Captura de información',
      definicion: 'El bot pide datos del usuario (nombre, email, pedido) y los guarda en hoja enlazada.',
      ejemplo: 'Bot: "¿Cuál es tu nombre?" → guarda en hoja "Pedidos" automáticamente.',
      emoji: '📝'
    },
    {
      termino: 'Escape humano',
      definicion: 'Regla innegociable: cada rama debe tener salida hacia un humano disponible.',
      ejemplo: 'En cada paso: botón [Hablar con humano] o frase "escribe AGENTE para hablar con persona real".',
      emoji: '🆘'
    },
    {
      termino: 'Fallback',
      definicion: 'Mensaje cuando el bot no entiende. No "error", sino conexión a humano.',
      ejemplo: '"Disculpa, no entendí. Te conecto con un asesor" (no "Opción inválida").',
      emoji: '🤝'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica chatbots sin código',
      instrucciones: '5 preguntas para confirmar que diseñas flujos conversacionales con criterio. Necesitas 3/5.',
      preguntas: [
        {
          enunciado: 'Tu bot tiene un menú con 12 opciones. ¿Cuál es el problema?',
          opciones: [
            'El usuario no procesa más de 5-7 opciones a la vez — abandona',
            'Ninguno, más es mejor',
            'Faltan colores',
            'Es lento'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. 3-5 botones es el rango funcional. 12 produce fatiga inmediata y abandono.',
          feedbackIncorrecto: 'Demasiadas opciones. El cerebro humano prioriza 5-7 max. Agrupa en categorías o usa sub-menús.'
        },
        {
          enunciado: '¿Por qué el escape humano es regla innegociable?',
          opciones: [
            'Solo si es legal',
            'Por capricho',
            'No es necesario',
            'Porque sin escape, el bot atrapa al usuario que necesita atención personal — especialmente a los más vulnerables'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. El escape humano es derecho del usuario, no decisión del diseñador. Sin él, el bot deja de ser servicio.',
          feedbackIncorrecto: 'Es derecho del usuario. Las personas mayores, con baja alfabetización o con consultas complejas necesitan salida hacia un humano.'
        },
        {
          enunciado: 'Tu bot dice "Opción inválida, vuelve al menú" cuando no entiende. ¿Qué corrige?',
          opciones: [
            'Hacerlo más bonito',
            'Quitarlo',
            'Nada',
            'Cambiar el fallback por "Disculpa, no entendí. Te conecto con un asesor" — conectar a humano en vez de rebotar'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. "Opción inválida" trata al usuario como error; el fallback debe ofrecer humano, no castigo.',
          feedbackIncorrecto: 'Conectar a humano. El bot no entiende → no es culpa del usuario → ofrece salida cordial.'
        },
        {
          enunciado: '¿Cuándo tiene sentido pedir 10 datos al inicio de la conversación?',
          opciones: [
            'Casi nunca: la captura excesiva produce abandono; pide solo lo necesario para la rama elegida',
            'En todas las plataformas',
            'Si el bot es comercial',
            'Siempre'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Pedir datos sin justificación = abandono. Pide solo lo necesario para resolver la consulta actual.',
          feedbackIncorrecto: 'Captura mínima. Cada dato adicional aumenta abandono. Pregunta solo cuando vas a usar la respuesta de inmediato.'
        },
        {
          enunciado: 'En el saber ancestral del loro y la tendera, ¿qué aplica al chatbot?',
          opciones: [
            'Nada',
            'Que los loros son obsoletos',
            'Cuando la pregunta se repite, la respuesta se prepara — la tendera ya era chatbot, solo cambió la escala',
            'Las tarjeticas no servían'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Esa es la conexión. La tendera respondía 50 veces al día las mismas frases. El bot lo hace a 5.000. Mismo gesto, distinta escala.',
          feedbackIncorrecto: 'Gesto antiguo a escala nueva. El oficio de preparar respuestas frecuentes existe hace siglos; el software solo lo escala.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi bot ofrece escape humano en cada rama o solo en el menú principal? ¿Quién quedaría atrapado si el escape estuviera oculto o demasiado lejos del flujo?',
    transferencia: 'Esta semana, comparte tu bot con 3 personas reales y mide tasa de finalización. Ajusta el flujo según resultados.',
    cierre: 'Al terminar podrás: (1) identificar las 5 partes de un flujo conversacional bien diseñado y sus reglas mínimas; (2) explicar con tus palabras la diferencia entre flujo lineal y flujo con ramificación, y cuándo conviene cada uno; (3) crear un bot funcional en ManyChat o Landbot co…'
  },
  saberAncestral: {
    saber: 'El loro que repetía las palabras del dueño, el muñeco oracular de los abuelos al que se le hacían preguntas y respondía con frases ensayadas, las tarjeticas de respuesta rápida del comerciante de plaza que tenía 7 frases listas para 7 preguntas frecuentes ("¿cuánto cuesta?", "¿hay descuento?", "¿lo trae a domicilio?"): todos son antecesores del chatbot. Compartían una sabiduría: cuando la pregunta se repite, la respuesta se prepara. La tendera del barrio respondía 50 veces al día "no, el yogurt llegó dañado, devuélvalo"; el chatbot moderno responde lo mismo, pero a 5.000 personas al mismo tiempo. Es el loro escalable.',
    fuente: 'Loro repetidor, muñeco oracular, tarjeticas del comerciante y tendera del barrio',
    preguntaPuente: '¿Cómo sabía la tendera qué 7 preguntas frecuentes valía la pena memorizar y cuáles no? ¿Y qué pierde un emprendedor novato cuando arma un chatbot infinito sin botón de escape, que atrapa al cliente en un laberinto del que no puede salir?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo chatbot decide quién recibe respuesta humana y quién queda atrapado en el laberinto del menú.',
      preguntaEspejo: '¿Mi bot ofrece escape humano en cada rama o solo en el menú principal? ¿Quién quedaría atrapado si el escape estuviera oculto o demasiado lejos del flujo?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La cortesía es virtud técnica antes que adorno social.',
      preguntaEspejo: '¿Los mensajes de mi bot tratan al usuario como persona o como código a procesar? ¿Qué pasaría si los leo en voz alta a mi abuela: ¿le sonarían cordiales?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los chatbots son la primera línea de atención al ciudadano en la economía digital contemporánea.',
      preguntaEspejo: '¿Cuántos chatbots me atendieron esta semana? ¿Cuántos me ayudaron y cuántos me obligaron a abandonar? ¿Qué aprendí del diseño respondiéndolos?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a construir un servicio conversacional sin código. Es ventaja transferible a cualquier emprendimiento.',
    emocional: 'Resististe la tentación de "atrapar" al usuario en menús. La cortesía técnica es disciplina ética.',
    ciudadana: 'Los bots públicos atienden o atrapan a millones. Diseñar con escape humano es ejercicio de cuidado ciudadano.',
    local: 'El loro, el muñeco oracular, la tendera con sus 7 respuestas: oficios del XX que el software escala al XXI.',
    intergeneracional: 'Lo que la tendera repetía cara a cara, tú lo automatizas con cortesía. Mismo cuidado, distinta escala.'
  }
};

export default contenido;
