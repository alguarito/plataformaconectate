/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 1
 * (sesión global 11 — apertura del periodo 2 del grado 10).
 *
 * Tema: Del libro al informe profesional.
 * Continúa la línea curricular de IA + escritura empresarial del grado 10.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 1,
  resumen:
    'Del cuaderno del comerciante de plaza al informe profesional digital. Aprendes a distinguir 4 tipos de texto (creativo, técnico, comercial, estudio de mercado) y a usar IA como asistente que respeta tu autoría.',
  duracionMin: 90,
  subtema: 'Periodo 2 · Informes profesionales · IA con criterio',

  preLectura: {
    porQueImporta:
      'Saber redactar informes profesionales con asistencia de IA es la habilidad más solicitada hoy en empresas, ONGs y administración pública. Te servirá para tu primer empleo, tu emprendimiento, tu gestión escolar — toda la vida.',
    preguntaDetonante:
      '¿Qué del cuaderno del comerciante de plaza —su disciplina de la palabra precisa— podemos llevar al informe profesional digital, sin perder lo que aprendimos del libro creativo?',
    activacion: {
      titulo: 'Del libro al informe',
      descripcion:
        'En 5 minutos: en parejas comparen un fragmento de su libro del periodo 1 con cómo lo escribirían si fuera para la rectora. ¿Qué cambia? ¿Qué se mantiene? ¿Qué nuevas reglas aparecen?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En el periodo 1 escribiste un libro creativo con asistencia de IA, cuidando autoría y voz propia.',
      siguiente: 'En la sesión 12 redactarás el cuerpo del informe profesional con LaTeX y citas formales.',
    },
  },

  conceptosClave: [
    {
      categoria: '✍️ Cómo se escribe formalmente',
      termino: 'Tono profesional',
      definicion:
        'Forma de escribir que prioriza claridad, objetividad y respeto al destinatario, sin emoción innecesaria. No es frío — es preciso. Reconoce al lector como interlocutor con tiempo limitado.',
      ejemplo:
        'Creativo: "La cafetería es ese rincón mágico donde se cuajan amistades". Profesional: "La cafetería es punto de encuentro de 480 estudiantes diarios; este informe analiza su funcionamiento."',
      emoji: '🎙️',
    },
    {
      categoria: '✍️ Cómo se escribe formalmente',
      termino: 'Datos verificables',
      definicion:
        'Cifras, hechos y observaciones con fuente identificable. Cada número trae su origen para que el lector pueda confirmar. Sin datos verificables, todo informe se vuelve opinión.',
      ejemplo:
        '"480 estudiantes/día (fuente: registro de cafetería, marzo 2026)" en lugar de "muchos estudiantes". El primer dato sustenta una decisión; el segundo, no.',
      emoji: '🔎',
    },
    {
      categoria: '✍️ Cómo se escribe formalmente',
      termino: 'Estructura clara',
      definicion:
        'Secciones predecibles que ayudan al lector a navegar: resumen ejecutivo, contexto, datos, análisis, propuesta, anexos. Un destinatario ocupado puede ir directo a la sección que necesita.',
      ejemplo:
        'Norma colombiana NTC 1486 establece estructura estándar de informes. Permite que cualquier lector encuentre lo que busca sin leer todo.',
      emoji: '🧱',
    },
    {
      categoria: '✍️ Cómo se escribe formalmente',
      termino: 'Lenguaje técnico apropiado',
      definicion:
        'Vocabulario específico del dominio (gerencial, contable, ingenieril) usado con precisión, sin abusar. La regla: usa el término técnico si comunica mejor; explícalo si la audiencia es mixta.',
      ejemplo:
        '"Margen de contribución" en informe a un comité administrativo — apropiado. "Margen de contribución" a estudiantes — explica qué es antes de usarlo.',
      emoji: '🛠️',
    },
    {
      categoria: '📊 Tipos de informe',
      termino: 'Texto creativo',
      definicion:
        'Voz personal, anécdota, prosa que busca conmover o entretener. Lo que hiciste en el periodo 1 con tu libro. Tiene valor único pero NO es informe profesional.',
      ejemplo:
        'Tu libro sobre tu barrio del periodo 1: emociones, recuerdos, narrativa propia. Lectura íntima. Distinto a un estudio sobre tu barrio para un alcalde.',
      emoji: '📖',
    },
    {
      categoria: '📊 Tipos de informe',
      termino: 'Informe técnico',
      definicion:
        'Documento que describe procesos, especificaciones, mediciones o procedimientos. Audiencia: experta. Decisión que apoya: implementar, validar o auditar algo técnico.',
      ejemplo:
        '"Informe de funcionamiento del sistema de internet del colegio: ancho de banda, latencia, % de caídas mensuales." Sirve al área de TI.',
      emoji: '⚙️',
    },
    {
      categoria: '📊 Tipos de informe',
      termino: 'Informe comercial',
      definicion:
        'Documento que sustenta una propuesta de valor, beneficios y retorno. Audiencia: decisor con presupuesto. Decisión que apoya: aprobar/rechazar una compra, contrato o proyecto.',
      ejemplo:
        '"Propuesta de mejora de cafetería: opción vegetariana 2 veces/semana, costo estimado, retorno en satisfacción." Sirve a la administración.',
      emoji: '💼',
    },
    {
      categoria: '📊 Tipos de informe',
      termino: 'Estudio de mercado',
      definicion:
        'Análisis de audiencia, competencia, tendencias y oportunidades. Audiencia: emprendedor o inversionista. Decisión que apoya: lanzar/cerrar un producto, entrar a un segmento.',
      ejemplo:
        '"Estudio de la cafetería del colegio: perfil de consumidores, alternativas en barrio, productos rentables." Sirve a quien quiere emprender un negocio escolar.',
      emoji: '📈',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Del libro al informe profesional',
      instrucciones:
        '5 preguntas tipo ICFES sobre tipos de texto, tono profesional y uso de IA con criterio.',
      preguntas: [
        {
          enunciado:
            'Daniel escribe un informe sobre la cafetería para la rectora con esta frase: "Yo creo que la cafetería del colegio es un lugar especial". El error principal es:',
          opciones: [
            'La frase es muy corta',
            'Mezcla opinión personal sin datos en un texto profesional',
            'Falta una metáfora bonita',
            'Está bien escrita pero es para otra rectora',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. "Yo creo que ... es especial" es voz creativa. Un informe profesional sustenta con datos: "La cafetería atiende a 480 estudiantes diarios y es punto de encuentro central, según registro de marzo."',
          feedbackIncorrecto:
            '❌ El problema NO es la longitud ni la falta de metáfora. Es el TONO: "Yo creo" + "lugar especial" es voz creativa, no profesional. El informe necesita datos verificables y tono objetivo.',
        },
        {
          enunciado:
            'La administración del colegio quiere decidir si compra una nueva impresora. ¿Qué tipo de informe le sirve más?',
          opciones: [
            'Texto creativo sobre la importancia de imprimir',
            'Informe comercial con propuesta de valor, costo y retorno',
            'Estudio de mercado sobre el sector de impresoras en Colombia',
            'Informe técnico sobre física de la tinta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. Una decisión de compra es decisión comercial. Necesita propuesta de valor, costo y retorno. El informe técnico de física de tinta es sobrecarga; el creativo no aporta a la decisión.',
          feedbackIncorrecto:
            '❌ Una decisión de COMPRA con presupuesto es un informe COMERCIAL. El creativo no aporta a decidir. El estudio de mercado da contexto pero no propone. El técnico es solo si hay duda técnica.',
        },
        {
          enunciado:
            '¿Qué hace correctamente al usar IA para redactar un informe profesional?',
          opciones: [
            'Pegar el texto generado por IA tal cual sin revisar',
            'Pedirle a la IA que invente cifras si no las tienes',
            'Usar IA para borrador inicial y luego verificar cada dato y afirmación',
            'No usar IA porque siempre miente',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Sí. La IA es asistente de borrador, no autora final. Tú verificas cada cifra, ajustas tono al destinatario y firmas con tu nombre — porque la responsabilidad ética es tuya.',
          feedbackIncorrecto:
            '❌ Pegar sin revisar es irresponsable (la IA puede inventar cifras). Pedir invento es manipulación. No usarla es desperdiciar la herramienta. Lo correcto: borrador con IA + verificación humana.',
        },
        {
          enunciado:
            '¿Cuál es la diferencia clave entre informe técnico y estudio de mercado?',
          opciones: [
            'Uno es largo y el otro corto',
            'El técnico describe procesos/especificaciones; el estudio analiza audiencia/competencia/oportunidad',
            'El técnico es más caro de hacer',
            'No hay diferencia, son sinónimos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. El técnico responde a "¿cómo funciona/qué especificaciones?". El estudio de mercado responde a "¿hay oportunidad/qué hace la competencia?". Audiencias y decisiones distintas.',
          feedbackIncorrecto:
            '❌ NO se diferencian por longitud ni costo. Son CATEGORÍAS distintas: técnico = proceso/especificación, estudio de mercado = audiencia/competencia/oportunidad. Apoyan decisiones distintas.',
        },
        {
          enunciado:
            'En la NTC 1486 (norma colombiana), un informe profesional debe incluir mínimo:',
          opciones: [
            'Solo título y conclusión',
            'Resumen ejecutivo, contexto, datos, análisis, propuesta y anexos',
            'Solo cifras sin explicación',
            'Una historia personal del autor',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. La NTC 1486 estandariza la estructura para que cualquier lector pueda navegar el documento. Resumen ejecutivo arriba (para el ejecutivo apurado), datos en el medio, anexos al final.',
          feedbackIncorrecto:
            '❌ La NTC 1486 establece estructura COMPLETA: resumen ejecutivo + contexto + datos + análisis + propuesta + anexos. Solo título y conclusión es ensayo, no informe.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      'Del libro creativo al informe profesional. ¿Qué de la voz del libro quieres preservar al escribir informes? ¿Qué definitivamente debes dejar atrás?',
    transferencia:
      'Esta semana: identifica una situación real de tu colegio que requiera un informe profesional (cafetería, transporte, biblioteca, descansos). Esboza qué tipo sería y a quién iría dirigido.',
    cierre:
      'El cuaderno del comerciante y el informe digital comparten algo: la palabra dada por escrito tiene peso. La IA acelera el borrador; tú firmas la responsabilidad.',
  },
};

export default contenido;
