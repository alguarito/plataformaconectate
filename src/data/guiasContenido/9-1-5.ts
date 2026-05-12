/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 5
 * Tema: Revolución industrial — máquinas que cambiaron el trabajo.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-5.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 5,
  titulo: 'Revolución industrial — máquinas que cambiaron el trabajo',
  ocultarPDF: false,
  resumen:
    'Mapeas oficios ganados y perdidos en tu región. La revolución industrial no es solo historia económica: es vidas concretas de tu familia.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Revoluciones del trabajo',

  saberAncestral: {
    saber:
      'El oficio del herrero en el Valle del Cauca cambió tres veces. Primero competía con el cobre indígena de los Quimbaya. Después llegaron los hierros importados de Europa y el herrero local se reinventó como artesano de detalles. En el siglo XX la fábrica industrial casi lo extinguió — pero hoy renace, especializado en piezas únicas para la construcción regenerativa. Cada revolución técnica deja un mapa de oficios ganados y perdidos.',
    fuente: 'Oficio del herrero en el Valle del Cauca — tres revoluciones históricas',
    preguntaPuente:
      '¿Qué oficio de tu familia (papá, mamá, abuelos) cambió o desapareció por una máquina? ¿Y qué oficio nuevo apareció en su lugar?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Las 3 metamorfosis del herrero', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Entrevista a un mayor', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 estados de un oficio frente a la máquina', duracionMin: 18 },
    { numero: 4, iconos: ['✏️'], titulo: 'Mapa de oficios ganados y perdidos', duracionMin: 32 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'La pregunta de "qué pasa con los trabajos cuando llegan las máquinas" no es del pasado: es la pregunta de tu futuro laboral. La IA y la automatización repiten patrones que ya se vieron con el telar y el vapor. Aprender a leerlos te da ventaja.',
    preguntaDetonante:
      'Si un familiar te ofreciera hoy heredar SU oficio (el de tu papá, tu mamá o tu abuelo) — ¿lo aceptarías? ¿Por qué sí o por qué no?',
    activacion: {
      titulo: 'Inventario rápido familiar',
      descripcion:
        'En 3 minutos, anota los oficios de tus 4 abuelos (o los que conozcas). Para cada uno marca si todavía existe igual, si cambió de forma, o si desapareció. Vas a ver dos generaciones de revolución técnica en tu propia familia.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 4 construiste tu línea del tiempo de la técnica. Hoy aterrizas un siglo (XIX) en algo personal: tus propios oficios familiares.',
      siguiente:
        'En la sesión 6 verás la imprenta como una revolución específica que cambió quién puede hablar al pueblo.',
    },
  },

  conceptosClave: [
    {
      termino: 'Revolución industrial',
      definicion:
        'Periodo 1760-1840 cuando las máquinas pasaron del taller a la fábrica, la energía pasó del agua al carbón y el vapor, y el trabajo pasó del oficio personal al obrero asalariado.',
      ejemplo:
        'El telar mecánico en Inglaterra reemplazó a miles de tejedores manuales. El mismo telar hoy alimenta empleos en Bangladesh — la revolución no terminó, solo se desplazó.',
      emoji: '🏭',
    },
    {
      termino: '4ª revolución industrial',
      definicion:
        'Revolución actual con IA, robots, automatización digital y plataformas. Diferencia clave: ahora la máquina hace trabajo cognitivo (decidir, escribir, recomendar), no solo físico.',
      ejemplo:
        'Un radiólogo usa IA que detecta tumores. Eso no es ciencia ficción — es 2026. La pregunta es si la IA lo complementa o lo sustituye.',
      emoji: '🤖',
    },
    {
      termino: 'Oficio sustituido',
      definicion:
        'Trabajo que la máquina reemplaza por completo. Suelen ser tareas repetitivas y predecibles. Los humanos que vivían de ese oficio quedan sin lugar inmediato.',
      ejemplo:
        'Lechero (sustituido por la pasteurización industrial), telefonista (sustituido por centralita automática), digitador (sustituido por OCR + dictado).',
      emoji: '❌',
    },
    {
      termino: 'Oficio transformado',
      definicion:
        'Sigue existiendo pero cambia de forma. La habilidad central sobrevive en un nuevo formato. Quien sabe trasladarla se reinventa; quien no, se queda atrás.',
      ejemplo:
        'Cajero bancario: antes contaba billetes, hoy asesora sobre productos financieros. La habilidad social sobrevivió, la operativa fue automatizada.',
      emoji: '🔄',
    },
    {
      termino: 'Oficio complementado',
      definicion:
        'La máquina no reemplaza al humano: lo hace más productivo. Trabajan en equipo. Estos oficios suelen aumentar sus ingresos.',
      ejemplo:
        'Médico con escáner de IA: la IA detecta patrones, el médico interpreta y decide. Juntos hacen mejor diagnóstico que cualquiera solo.',
      emoji: '🤝',
    },
    {
      termino: 'Oficio creado',
      definicion:
        'No existía antes de la máquina. Surgió para diseñar, mantener o cuestionar la tecnología misma. Suelen ser los mejor pagados — y los más escasos en el sur global.',
      ejemplo:
        'Programador, científico de datos, community manager, especialista en ética de IA. Ninguno existía hace 30 años.',
      emoji: '✨',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Entrevista a un mayor sobre oficios perdidos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Llama o habla con un familiar mayor de 40 años (papá, mamá, tío, abuelo).',
        'Pregúntale: "¿qué oficio había en tu juventud que ya no existe?".',
        'Pregúntale: "¿qué oficio existe hoy que no existía cuando eras joven?".',
        'Anota sus respuestas LITERALES, entre comillas, sin paráfrasis.',
      ],
      cuaderno: {
        titulo: 'Memoria viva de oficios',
        formato: '(1) Persona entrevistada + parentesco + edad. (2) 2 respuestas literales. (3) Tu reacción en 2 renglones.',
        extension: '1/2 página con respuestas textuales',
      },
      criterios: [
        'La persona entrevistada es real y está identificada',
        'Las respuestas son textuales entre comillas',
        'Las respuestas son específicas (no "muchos trabajos cambiaron")',
        'Reconoces algo que no sabías antes de la entrevista',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 estados de un oficio frente a la máquina',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada estado (sustituido, transformado, complementado, creado) escribe una ficha.',
        'En cada ficha: definición en tus palabras (1 frase).',
        'En cada ficha da 2 ejemplos: uno histórico del siglo XX, otro de la 4ª revolución industrial.',
        'Cierra explicando cuál estado describe mejor el oficio que TÚ querrías ejercer en 10 años.',
      ],
      cuaderno: {
        titulo: '4 estados de un oficio frente a la máquina',
        formato: '4 fichas con definición + 2 ejemplos (1 histórico + 1 actual)',
        extension: '4 fichas + 1 párrafo final sobre tu propio futuro',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene 2 ejemplos específicos',
        'Distingues claramente entre los 4 estados',
        'Tu reflexión sobre tu propio futuro es honesta y específica',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Mapa de oficios ganados y perdidos en tu región',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'En hoja A4 horizontal dibuja un mapa con: izquierda 3 oficios perdidos, derecha 3 oficios creados, abajo cuadro de observación.',
        'Cada oficio tiene fecha aproximada (década) y lugar concreto (mi barrio, mi vereda, Cartago, Valle).',
        'Conecta cada oficio con su motor técnico (qué tecnología lo sustituyó o creó) usando flechas.',
        'Cierra con cuadro de observación de 3-4 renglones: ¿quién ganó económicamente?, ¿quién pagó el costo?',
      ],
      cuaderno: {
        titulo: 'Mapa de oficios ganados y perdidos en mi región',
        formato: 'Mapa A4 horizontal con 6 oficios + 6 fichas mini + cuadro de observación',
        extension: '1 página A4 + 6 fichas',
      },
      criterios: [
        '3 oficios perdidos + 3 oficios creados, todos con nombre concreto',
        'Al menos UN oficio viene de la entrevista familiar',
        'Cada oficio tiene fecha (década) y lugar local',
        'Cuadro de observación nombra a quién benefició y a quién no',
        'El mapa se entiende sin explicación oral',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el mapa de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee el mapa del compañero sin interrumpir.',
        'Califica del 1 al 5: (a) ¿oficios concretos con nombre, fecha y lugar?, (b) ¿al menos UN aporte familiar?, (c) ¿análisis de costos y beneficios claro?',
        'Anota 1 observación que afirma + 1 que reta (qué oficio te sorprendió, cuál te parece débil).',
        'Conversen 5 min: ¿coinciden los motores técnicos identificados o difieren?',
      ],
      cuaderno: {
        titulo: 'Evaluación del mapa de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'La observación que afirma señala algo específico del mapa',
        'La observación que reta es respetuosa y concreta',
        'La conversación cerró con 1 hallazgo compartido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el lenguaje de las revoluciones',
      instrucciones:
        '5 preguntas para confirmar que distingues los 4 estados de un oficio frente a la máquina. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Un médico que usa IA para detectar tumores y luego decide el tratamiento — ¿en qué estado está su oficio?',
          opciones: ['Sustituido', 'Transformado', 'Complementado', 'Creado'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Complementado: la máquina no lo reemplaza, lo hace más productivo. Juntos hacen mejor diagnóstico que cualquiera solo.',
          feedbackIncorrecto:
            'Es complementado. La máquina ayuda al médico, no lo sustituye. Esta es una de las relaciones humano-máquina más sostenibles.',
        },
        {
          enunciado: '¿Cuál de estos oficios fue sustituido (no transformado) por la revolución industrial?',
          opciones: ['Sastre', 'Telefonista de centralita manual', 'Carpintero', 'Maestro'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La centralita automática sustituyó a la telefonista por completo. Sastre, carpintero y maestro siguen existiendo (transformados).',
          feedbackIncorrecto:
            'La telefonista fue sustituida cuando llegaron las centralitas automáticas. Sastre, carpintero y maestro existen aún, transformados.',
        },
        {
          enunciado: '¿Cuál es la pregunta más importante al leer una revolución técnica?',
          opciones: [
            '¿Es nueva la tecnología?',
            '¿Quién gana económicamente y quién paga el costo?',
            '¿Es bonita la máquina?',
            '¿Cuándo se inventó?',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Toda revolución técnica reparte beneficios y costos. Sin esa pregunta, la historia de la técnica se vuelve ingenua.',
          feedbackIncorrecto:
            '¿Quién gana y quién paga? La revolución industrial inglesa se hizo con algodón colombiano. Sin esa pregunta no se entiende quién pagó el progreso.',
        },
        {
          enunciado: 'Si una IA puede escribir correos profesionales — ¿qué pasará con el oficio de "asistente ejecutivo"?',
          opciones: [
            'Será sustituido por completo',
            'Será transformado: las tareas operativas (correo, agenda) las hará la IA; las relacionales (gestión humana) seguirán siendo del humano',
            'Será creado nuevo',
            'No cambiará nada',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Las tareas operativas se automatizan; las relacionales y de juicio sobreviven. El asistente que se reinventa se enfoca en lo humano.',
          feedbackIncorrecto:
            'Será transformado. La IA hace lo operativo; el asistente humano se enfoca en gestión de personas, juicio en situaciones nuevas, relaciones.',
        },
        {
          enunciado:
            'En el saber ancestral del herrero del Valle, ¿qué aplica a tu propio futuro laboral?',
          opciones: [
            'Nada — los oficios antiguos no tienen que ver con hoy',
            'Que cada revolución abre una nueva forma del oficio si sabes reinventarte',
            'Que el herrero ya no existe',
            'Que la tradición siempre se pierde',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El herrero del Valle se reinventó 3 veces porque supo trasladar habilidades. Tú tendrás que reinventarte 5-10 veces en tu vida laboral.',
          feedbackIncorrecto:
            'El herrero se reinventó 3 veces sin perder identidad. La habilidad de trasladar saberes entre revoluciones es lo que separa al que prospera del que se queda atrás.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, escoge UN oficio de tu mapa (perdido o creado) e investiga 15 minutos: cuándo nació o desapareció, qué tecnología fue motor, qué pasó con las personas. Anota los hallazgos. El próximo lunes los traemos al aula — son insumo del proyecto integrador del periodo.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda revolución técnica reparte beneficios y costos según una geografía de poder previa.',
      preguntaEspejo:
        '¿Qué materia prima, datos o trabajo de mi región alimenta tecnologías que se beneficiaron en otro lugar? ¿Cómo cambia eso lo que pienso sobre "progreso"?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No te angusties por lo que cambiará; concéntrate en lo que de tu trabajo no depende de la máquina.',
      preguntaEspejo:
        '¿Qué habilidad humana mía estoy cultivando que ninguna máquina puede reproducir? ¿Cuál estoy dejando atrofiar?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La 4ª revolución industrial reconfigura no solo el trabajo, sino la naturaleza misma de la agencia humana.',
      preguntaEspejo:
        '¿Qué tareas que antes hacía yo ahora hace una IA por mí? ¿Cuáles me hacen más capaz y cuáles me están atrofiando habilidades?',
    },
  },

  cincoDimensiones: {
    personal:
      'Conectaste tu propio futuro laboral con la historia de las revoluciones técnicas — ya no es teoría, es tu vida.',
    emocional:
      'La conversación con un mayor te conectó con memoria viva: oficios reales de tu familia que cambiaron en una generación.',
    ciudadana:
      'Entendiste que ningún progreso técnico es para todos por igual — siempre hay reparto, y vale la pena nombrarlo.',
    local:
      'Anclaste el aprendizaje en oficios de tu propia región (herrero del Valle, oficios familiares) y no solo en datos abstractos.',
    intergeneracional:
      'La entrevista familiar y el mapa local conectan tres generaciones: la del abuelo que perdió un oficio, la del padre que se reinventó, y la tuya que aún elige.',
  },
};

export default contenido;
