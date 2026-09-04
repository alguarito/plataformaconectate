/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/6/6-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 4,
  titulo: 'Periféricos — las manos, los ojos y la voz del computador',
  resumen: 'Un periférico es cualquier pieza que se conecta por fuera del computador.',
  duracionMin: 90,
  subtema: 'Periféricos — las manos, los ojos y la voz del computador',
  preLectura: {
    porQueImporta: 'El producto es la tabla maestra firmada + el diagrama con 6 periféricos conectados.',
    preguntaDetonante: 'Cuando ves a alguien jugar Roblox en computador, usa al menos 4 periféricos al mismo tiempo. ¿Sabrías nombrarlos? Pista: 2 son de entrada y 2 de salida.',
    activacion: {
      titulo: 'Reconoce los 12 periféricos',
      descripcion: 'Actividad 1 · IDENTIFICA — Reconoce los 12 periféricos (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: reconoces 12 periféricos, los clasificas en entrada/salida/mixtos, ves cómo se conectan, y armas tu tabla maestra.',
      siguiente: 'Esta semana, observa cuántos periféricos usas cada día y por qué tipo de conexión.'
    }
  },
  conceptosClave: [
    {
      termino: 'Periférico',
      definicion: 'Cualquier pieza que se conecta por fuera del computador (a diferencia de las internas como CPU o RAM). Hay 3 tipos: entrada, salida y mixto. Conocerlos te permite escoger el adecuado y resolver problemas básicos.',
      ejemplo: 'Teclado, ratón, monitor, impresora, parlantes, audífonos, cámara web. Todo lo que ves conectado a la torre por cable o bluetooth es periférico.',
      emoji: '🔌'
    },
    {
      termino: 'Periférico de entrada',
      definicion: 'Pieza por donde TÚ le das información al computador. La regla rápida: si tú estás dándole algo a la máquina (tocas, escribes, hablas, mueves), eso es entrada.',
      ejemplo: 'Teclado (escribes), ratón (mueves), micrófono (hablas), cámara (te capta), escáner (escaneas documento), joystick (juegas).',
      emoji: '⬆️'
    },
    {
      termino: 'Periférico de salida',
      definicion: 'Pieza por donde el computador te muestra información a ti. La regla rápida: si la máquina te está mostrando algo (visible, audible, palpable), eso es salida.',
      ejemplo: 'Monitor (ves), impresora (imprime), altavoz (oyes), audífonos (escuchas), proyector (muestra al grupo), vibrador del celular (te avisa).',
      emoji: '⬇️'
    },
    {
      termino: 'Periférico mixto',
      definicion: 'Pieza que cumple las 2 funciones a la vez: entrada Y salida. La pista: si una sola pieza hace 2 cosas (te muestra Y recibe de ti), es mixto.',
      ejemplo: 'Pantalla táctil (muestra + recibe tu toque), audífonos con micrófono (oyes + hablas), memoria USB (lees archivos + le pasas archivos), módem (recibe internet + manda a equipos).',
      emoji: '↕️'
    },
    {
      termino: 'Conexión de periférico',
      definicion: 'Cómo se conecta el periférico al computador. Las más comunes: USB (universal, casi todo), HDMI (para monitor y proyector), jack 3.5mm (audífonos y micrófonos), Bluetooth (sin cable), wifi (impresoras y altavoces nuevos).',
      ejemplo: 'Tu teclado probablemente es USB, tu monitor HDMI, tus audífonos jack 3.5mm. Una impresora nueva puede ir por wifi sin cable.',
      emoji: '🔗'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes clasificar periféricos?',
      instrucciones: '5 preguntas para verificar que dominas entrada, salida y mixtos.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos es periférico de ENTRADA?',
          opciones: [
            'Monitor',
            'Micrófono',
            'Impresora',
            'Altavoz'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El micrófono es entrada: tú le hablas al computador. Monitor, impresora y altavoz son salida (el computador te muestra algo).',
          feedbackIncorrecto: 'El micrófono es entrada (tú le hablas). Monitor, impresora y altavoz son salida (te muestran algo).'
        },
        {
          enunciado: 'Una pantalla TÁCTIL (como la del celular) es periférico de...',
          opciones: [
            'Solo entrada.',
            'Solo salida.',
            'Mixto: entrada Y salida al tiempo.',
            'Almacenamiento.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. La pantalla táctil te muestra (salida) y recibe tu toque (entrada). Es mixto. Una pantalla NO táctil es solo salida.',
          feedbackIncorrecto: 'Es mixto. Te muestra (salida) y recibe tu toque (entrada). Si la pantalla no es táctil, sería solo salida.'
        },
        {
          enunciado: 'Quieres conectar un monitor nuevo a tu computador. ¿Qué cable necesitas?',
          opciones: [
            'USB.',
            'Jack 3.5mm.',
            'Bluetooth.',
            'HDMI.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. HDMI es el cable estándar para monitor o proyector. Lleva imagen + sonido en un solo cable. USB es para teclado/ratón.',
          feedbackIncorrecto: 'El monitor usa HDMI (lleva imagen + sonido). USB es para teclado y ratón. El jack es para audio. Bluetooth no es cable.'
        },
        {
          enunciado: 'Unos audífonos con micrófono incorporado (los gamer) son periférico de...',
          opciones: [
            'Mixto: salida (sonido) + entrada (voz).',
            'Solo entrada (porque tienen micrófono).',
            'Solo salida (porque oyes).',
            'Almacenamiento (porque guardan canciones).'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Los audífonos gamer son mixtos: oyes el juego (salida) y hablas con tu equipo (entrada). Audífonos sin micrófono son solo salida.',
          feedbackIncorrecto: 'Audífonos con micrófono son mixtos: salida (escuchar) + entrada (hablar). Si no tienen micrófono, son solo salida.'
        },
        {
          enunciado: 'Estás jugando Roblox en computador. Nombra los 4 periféricos principales que estás usando.',
          opciones: [
            'Teclado y ratón (entrada) + monitor y altavoz (salida).',
            'Solo el ratón.',
            'Solo el monitor.',
            'Impresora y cámara web.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Cuando juegas Roblox usas teclado y ratón para controlar (entrada), y ves el juego en monitor + lo oyes en altavoces (salida).',
          feedbackIncorrecto: 'Al jugar Roblox usas 4 periféricos: teclado + ratón (entrada para controlar) y monitor + altavoz (salida para ver y oír).'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál es el periférico que uso más cada día? ¿Lo escogí yo o me lo asignaron?',
    transferencia: 'Esta semana, observa cuántos periféricos usas cada día y por qué tipo de conexión.',
    cierre: 'Al terminar la clase: (1) podrás identificar 12 periféricos comunes; (2) sabrás analizar si cada uno es entrada, salida o mixto; (3) podrás distinguir las formas de conexión (USB, HDMI, jack, Bluetooth); (4) habrás creado tu tabla maestra de periféricos + diagrama.'
  },
  saberAncestral: {
    saber: 'En el taller de don Lucho el relojero de Cartago, cada herramienta tenía su lugar y su uso. Si entrabas a su vitrina de la calle 14, veías colgadas en orden las herramientas de su oficio: la lupa para ver lo pequeño, las pinzas largas para agarrar tornillos diminutos, los destornilladores en miniatura para abrir tapas, el martillito de bronce para ajustar suavemente, el paño de gamuza para limpiar sin rayar, el aceite especial para lubricar engranajes. Cada herramienta servía para una cosa específica y don Lucho sabía cuándo sacar cuál. La lupa no servía para apretar tornillos, ni el martillo para mirar dentro. Una persona inexperta usaba la herramienta equivocada y dañaba el reloj. El relojero sabio sabía cuál herramienta usar cuándo. Hoy el computador es la máquina: las herramientas que la rodean se llaman periféricos. Cada una tiene una función específica, y conocerlas te hace usuario sabio.',
    preguntaPuente: 'Cuando ves a alguien jugar Roblox en computador, usa al menos 4 periféricos al mismo tiempo. ¿Sabrías nombrarlos? Pista: 2 son de entrada y 2 de salida.'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del saber práctico)',
      lente: 'lente del nosotros',
      cita: '"Conocer las herramientas a la mano es conocer cómo vivimos."',
      preguntaEspejo: '¿Cuál es el periférico que uso más cada día? ¿Lo escogí yo o me lo asignaron?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Cuidar la herramienta es prolongar su utilidad y la nuestra."',
      preguntaEspejo: '¿Trato mis periféricos como herramientas valiosas o como cosas desechables que pronto reemplazaré?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del entorno digital)',
      lente: 'lente de la infoesfera',
      cita: '"El cuerpo de cada usuario se extiende a través de sus periféricos."',
      preguntaEspejo: '¿De qué manera mis periféricos me hacen más yo, y de qué manera me alejan de mí mismo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar 12 periféricos comunes; (2) sabrás analizar si cada uno es entrada, salida o mixto; (3) podrás distinguir las formas de conexión (USB, HDMI, jack, Bluetoot…',
    emocional: 'Los periféricos son los que más se dañan en un computador: el teclado por golpes, el ratón por suciedad, la impresora por mal uso, los audífonos por estirones.',
    ciudadana: 'Cada periférico es una decisión cultural: alguien decidió que el teclado tuviera esas teclas, que el ratón fuera ese tamaño, que la pantalla mostrara colores.',
    local: 'Antes de salir, verificas que cada periférico tenga sus 4 datos completos en la tabla.',
    intergeneracional: 'Cuando usas el teclado, tus dedos se extienden hacia los caracteres en la pantalla.'
  }
};

export default contenido;
