/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 8
 * (sesión global 28).
 *
 * Auto-generado desde content/guias/11/11-3-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 8,
  titulo: 'Ética y legal — la palabra empeñada en lo digital',
  resumen: 'La ética digital del emprendimiento es exactamente la palabra empeñada del tendero traducida al ecosistema online.',
  duracionMin: 90,
  subtema: 'Ética y legal — la palabra empeñada en lo digital',
  preLectura: {
    porQueImporta: 'El criterio principal: que un usuario común leyendo tus documentos pueda entender en 5 minutos qué pasa con sus datos y qué se compromete contigo, sin necesidad de abogado.',
    preguntaDetonante: '¿Qué sostenía la palabra empeñada del tendero antes de que existieran contratos digitales? ¿Y por qué la Política de Privacidad copiada-pegada de internet es la versión moderna del "firmar sin leer" que los abuelos siempre advirtieron contra?',
    activacion: {
      titulo: 'Auditoría de datos del MVP',
      descripcion: 'Actividad 1 · IDENTIFICA — Auditoría de datos del MVP (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'La sesión 7 cerró la dimensión financiera; hoy cierras la dimensión ético-legal.',
      siguiente: 'Llega con los 3 documentos integrados al MVP y los ajustes éticos aplicados.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ley 1581 de 2012 (Habeas Data colombiano)',
      definicion: 'Ley colombiana que protege datos personales. Obliga a todo proyecto digital que recoja datos (correo, nombre, teléfono) a tener política de privacidad clara, pedir consentimiento explícito y permitir borrado a solicitud.',
      ejemplo: 'Tu MVP que recoge correos para enviar info debe tener política de privacidad visible que explique qué datos recoges, cómo los usas, y un email donde el usuario pueda pedir borrarse.',
      emoji: '📜'
    },
    {
      termino: 'Política de privacidad',
      definicion: 'Documento que dice qué datos recoges del usuario, para qué, cuánto tiempo los guardas, con quién los compartes, cómo el usuario puede pedir borrarse. Obligatorio por Ley 1581.',
      ejemplo: '"Recogemos: correo y nombre. Uso: enviar info de productos. Tiempo: hasta que pidas borrarte. Compartimos: solo con proveedores de email. Borrar: escribe a privacidad@cartas.com".',
      emoji: '🔒'
    },
    {
      termino: 'Términos de uso',
      definicion: 'Documento que dice las reglas del juego del MVP: qué puede y no puede hacer el usuario, qué garantías ofrece el proyecto, qué pasa si algo falla. Define derechos y obligaciones de ambas partes.',
      ejemplo: '"Puedes usar la app gratis. No puedes revenderla. Si la app falla, nos comprometemos a arreglar en 48h o reembolsar. No nos responsabilizamos por uso indebido por terceros".',
      emoji: '📋'
    },
    {
      termino: '4 preguntas éticas de Floridi',
      definicion: 'Marco de Luciano Floridi para evaluar impacto ético de un proyecto en la infosfera. (1) ¿A quién beneficia? (2) ¿A quién perjudica o excluye? (3) ¿Qué datos recoge y por qué? (4) ¿Qué pasaría si se masificara?',
      ejemplo: 'Para tu MVP: (1) tenderos del barrio. (2) ¿excluye a quienes no tienen smartphone? (3) recojo correo solo. (4) si todos los barrios lo usaran, ¿qué cambiaría en la economía local?',
      emoji: '🧭'
    },
    {
      termino: 'Autoevaluación ética escrita',
      definicion: 'Documento honesto donde el equipo responde las 4 preguntas de Floridi y se compromete a: qué mantendrá, qué ajustará, qué descartará por razones éticas. Firmar implica responsabilidad real.',
      ejemplo: '"Mantenemos: el taller presencial inclusivo. Ajustamos: agregamos versión sin smartphone. Descartamos: vender datos a terceros. Firmado María, Pedro, Lucía, 15 de mayo de 2026".',
      emoji: '✍️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces la ética y legalidad del MVP?',
      instrucciones: '5 preguntas sobre Ley 1581, políticas y autoevaluación ética.',
      preguntas: [
        {
          enunciado: 'Tu MVP recoge correos de usuarios. ¿Qué te obliga la Ley 1581?',
          opciones: [
            'Tener política de privacidad visible, pedir consentimiento explícito, permitir borrado a solicitud.',
            'Nada, son solo correos.',
            'Pagarle al gobierno.',
            'Tener oficina física.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Ley 1581 (Habeas Data colombiano) protege datos personales. Política + consentimiento + derecho a borrar son obligaciones legales.',
          feedbackIncorrecto: 'Ley 1581 obliga: política visible, consentimiento, derecho a borrar. Para CUALQUIER dato personal, no solo "datos sensibles".'
        },
        {
          enunciado: '¿Qué dice una política de privacidad?',
          opciones: [
            'Solo cómo se ve el sitio.',
            'Qué datos recoges, para qué, cuánto tiempo, con quién compartes, cómo borrar.',
            'Solo el precio.',
            'Solo el horario.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 5 elementos esenciales. Sin alguno, la política está incompleta y viola la Ley 1581.',
          feedbackIncorrecto: 'Política de privacidad = qué datos + para qué + tiempo + compartir + borrar. 5 elementos esenciales. Sin uno, incompleta legalmente.'
        },
        {
          enunciado: '¿Cuáles son las 4 preguntas éticas de Floridi?',
          opciones: [
            '¿Es bonito? ¿Es viral? ¿Es rentable? ¿Es legal?',
            '¿Es ético? ¿Es legal? ¿Es bueno? ¿Es malo?',
            '¿Es grande? ¿Es pequeño? ¿Es medio? ¿Es muy?',
            '¿A quién beneficia? ¿A quién perjudica/excluye? ¿Qué datos recoge? ¿Y si se masificara?'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Beneficia + perjudica/excluye + datos + masificación. Marco ético claro de Floridi para impacto en la infosfera.',
          feedbackIncorrecto: '4 preguntas Floridi: beneficia + excluye + qué datos + escala. Marco operativo, no abstracto. Aplicable a cualquier proyecto digital.'
        },
        {
          enunciado: 'Después de las 4 preguntas éticas, ¿qué entregas?',
          opciones: [
            'Solo respuestas.',
            'Solo un párrafo de reflexión.',
            'Compromiso firmado: qué mantengo, qué ajusto, qué descarto por razones éticas.',
            'Una camiseta del proyecto.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Compromiso firmado convierte reflexión en acción. Mantener + ajustar + descartar con responsabilidad real, no solo papel.',
          feedbackIncorrecto: 'Compromiso firmado: mantengo + ajusto + descarto. Sin firma, queda en buenas intenciones. Con firma, hay responsabilidad real.'
        },
        {
          enunciado: 'Pregunta de Floridi: \'¿Y si se masificara?\'. ¿Por qué importa?',
          opciones: [
            'No importa, solo es mi MVP.',
            'Solo para entrar a Silicon Valley.',
            'Para impresionar.',
            'Si funciona y se masifica, ¿qué cambia? ¿Beneficia a más o excluye a más? La escala revela impactos invisibles a pequeña escala.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. La escala revela impactos invisibles. Lo que ayuda a 10 puede dañar a 10 millones por efectos sistémicos. Pensar en escala desde el inicio.',
          feedbackIncorrecto: 'Pensar en escala revela impactos invisibles. Una app que excluye al 1% de usuarios afecta 100K personas si tiene 10M. La escala importa éticamente.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mis documentos legales reconocen al usuario como sujeto informado, o lo tratan como objeto que firma sin entender?',
    transferencia: 'Llega con los 3 documentos integrados al MVP y los ajustes éticos aplicados.',
    cierre: 'Al terminar podrás: (1) identificar qué datos recoge tu MVP, con qué propósito, con qué riesgos para el usuario, según la Ley 1581 de 2012; (2) analizar tu proyecto con las 4 preguntas éticas de Floridi sobre impacto en la infosfera (autenticidad, dignidad, privacidad, transparen…'
  },
  saberAncestral: {
    saber: 'En los pueblos del Valle del Cauca y en las plazas de mercado de Cartago había una expresión que cerraba cualquier negocio sin necesidad de notario ni firma: "palabra empeñada". Cuando el tendero decía a la abuela "mañana le llega la panela" y la abuela le daba el dinero por adelantado, no había contrato escrito: había palabra empeñada. Cuando el sastre prometía "el viernes le tengo el saco" y aceptaba el adelanto, era palabra empeñada. Cuando el ebanista decía "este escaparate dura veinte años", era palabra empeñada. Romper la palabra no era falta legal: era deshonor de oficio, y producía consecuencias peores que cualquier multa, porque el ebanista que mentía perdía la clientela del barrio entero. La sabiduría ancestral tenía 3 reglas: (1) nunca prometer lo que no se puede cumplir; (2) cumplir aunque cueste; (3) declarar a tiempo cuando algo va a fallar. Esa triada se llamaba "código de honor del oficio" y sostuvo economías enteras durante siglos antes de la era contractual.',
    preguntaPuente: '¿Qué sostenía la palabra empeñada del tendero antes de que existieran contratos digitales? ¿Y por qué la Política de Privacidad copiada-pegada de internet es la versión moderna del "firmar sin leer" que los abuelos siempre advirtieron contra?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El derecho del afectado a ser informado y consultado es la primera condición de la ética profesional.',
      preguntaEspejo: '¿Mis documentos legales reconocen al usuario como sujeto informado, o lo tratan como objeto que firma sin entender?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo prometido y lo hecho deben coincidir; la grieta entre ambos es la medida del defecto del carácter.',
      preguntaEspejo: '¿Lo que prometo en mis documentos coincide con lo que mi MVP realmente hace, o hay grieta entre palabra y acción?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La infosfera es el entorno ético compartido donde toda acción digital tiene consecuencias para los demás.',
      preguntaEspejo: '¿Mi MVP aporta autenticidad, dignidad, privacidad y transparencia a la infosfera, o las erosiona aunque sea un poco?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar qué datos recoge tu MVP, con qué propósito, con qué riesgos para el usuario, según la Ley 1581 de 2012; (2) analizar tu proyecto con las 4 preguntas éticas de Flori…',
    emocional: 'Es tentador escribir política bonita y operar distinto.',
    ciudadana: 'Tu usuario es el afectado de tu proyecto: sus datos quedan en tu sistema, su tiempo se invierte en tu MVP, su confianza sostiene tu modelo.',
    local: 'Antes de cerrar, mira la dimensión ética desde las cinco dimensiones humanas.',
    intergeneracional: 'Tu MVP no opera en vacío: vive en la infosfera, el ecosistema de información que todos compartimos.'
  }
};

export default contenido;
