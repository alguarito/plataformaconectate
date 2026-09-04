/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 9
 * (sesión global 29).
 *
 * Auto-generado desde content/guias/7/7-3-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 9,
  titulo: 'IA y mis tareas — política personal de uso responsable en estudios',
  resumen: 'Usar IA en tareas escolares es ambiguo: a veces es legítimo, a veces es trampa.',
  duracionMin: 90,
  subtema: 'IA y mis tareas — política personal de uso responsable en estudios',
  preLectura: {
    porQueImporta: 'El producto es esa política firmada + ejemplo aplicado.',
    preguntaDetonante: 'Si tu profe te pide un ensayo de 2 páginas sobre la independencia de Colombia, y tú le pides a ChatGPT que lo escriba completo y se lo entregas tal cual, ¿en qué te perjudica? ¿La nota cambia? ¿Algo más cambia?',
    activacion: {
      titulo: '8 escenarios: ¿legítimo o trampa?',
      descripcion: 'Actividad 1 · ANALIZA — 8 escenarios: ¿legítimo o trampa?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: distingues uso legítimo de trampa, aprendes a atribuir, defines tu política personal, aplicas a un caso real.',
      siguiente: 'La próxima clase es la cosecha del periodo: un proyecto completo con IA responsable.'
    }
  },
  conceptosClave: [
    {
      termino: '4 usos legítimos de IA en tareas',
      definicion: 'Las 4 formas éticas de usar IA en estudios: (1) tutor (explicar conceptos), (2) corrector (revisar texto propio), (3) organizador (estructurar ideas), (4) generador de ideas (lluvia de opciones). Regla: la IA ayuda; tú aprendes y produces.',
      ejemplo: 'Le pides a ChatGPT que te explique derivadas con un ejemplo del fútbol. Después escribes el resumen con tus palabras en el cuaderno. La IA ayudó a entender; tú produjiste con tu voz.',
      emoji: '✅'
    },
    {
      termino: '4 usos NO legítimos (trampa)',
      definicion: 'Las 4 formas de hacer trampa con IA: (1) escribir el trabajo completo, (2) copiar respuesta sin entender, (3) investigar sin verificar ni añadir voz propia, (4) pasar como autoría tuya algo 100% generado. Regla violada: no aprendiste.',
      ejemplo: 'Le pides a ChatGPT que escriba ensayo de 2 páginas sobre Bolívar y lo entregas sin cambios. No aprendiste, no añadiste voz, lo pasas como tuyo. Es la nueva forma de plagio.',
      emoji: '❌'
    },
    {
      termino: 'Atribución de IA',
      definicion: 'Práctica académica de citar el uso de IA en un trabajo. No es signo de debilidad: es honestidad. Plantilla: \'En este trabajo usé [LLM] para [propósito]. Las ideas y desarrollo son míos.\' Los profesores valoran la verdad.',
      ejemplo: 'Al final de un ensayo: \'Asistencia de IA: ChatGPT (versión gratuita), consultado el 19 de mayo de 2026 para estructurar ideas iniciales. El contenido y desarrollo son propios.\' Atribución profesional.',
      emoji: '©️'
    },
    {
      termino: '5 preguntas de autoevaluación',
      definicion: 'Antes de entregar trabajo con IA, hazte 5 preguntas: (1) ¿aprendí?, (2) ¿puedo explicar verbalmente?, (3) ¿mi voz está?, (4) ¿atribuí?, (5) ¿mi yo adulto orgulloso? Si las 5 son SÍ, fue uso legítimo.',
      ejemplo: 'Antes de entregar el ensayo: \'¿Puedo explicar verbalmente al profe lo que escribí?\' Si la respuesta es NO, no entiendo y solo entregué. Ahí hay problema. Vuelve a estudiar.',
      emoji: '🪞'
    },
    {
      termino: 'Honestidad académica',
      definicion: 'Compromiso de no engañar en tareas y exámenes. Incluye: no plagio, no trampa, citar fuentes, reconocer asistencia (incluida IA). Es valor universal en universidades del mundo. Se forma en colegio.',
      ejemplo: 'Usar ChatGPT para entender un tema y después escribir con tu voz = honesto. Pasarlo como tuyo sin atribución = deshonesto. La diferencia se acumula: en universidad pueden expulsarte por la segunda.',
      emoji: '🤝'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces los usos legítimos vs trampa con IA?',
      instrucciones: '5 preguntas para verificar que dominas la política personal de IA en estudios.',
      preguntas: [
        {
          enunciado: 'Le pides a ChatGPT que te explique fotosíntesis. Después escribes el resumen con TUS palabras. ¿Es legítimo o trampa?',
          opciones: [
            'Trampa.',
            'Depende del país.',
            'Legítimo (uso como tutor).',
            'Solo si pagas premium.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Uso como TUTOR: la IA ayudó a entender. Tú escribiste con tu voz. Aprendiste. Es uso legítimo número 1.',
          feedbackIncorrecto: 'Legítimo. Uso como tutor. La IA explica, tú entiendes y escribes con tu voz. Aprendiste. Es uso 1 de los 4 legítimos.'
        },
        {
          enunciado: 'Le pides a ChatGPT que escriba un ensayo de 3 páginas y lo entregas TAL CUAL como tuyo. ¿Es?',
          opciones: [
            'TRAMPA: no aprendiste, no añadiste voz, pasaste como tuyo lo que no era.',
            'Legítimo si está bien escrito.',
            'Legítimo si es premium.',
            'Trampa solo si el profe se da cuenta.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. TRAMPA. Es el uso no legítimo #5: escribir entero y entregar como tuyo. La regla universal: si no aprendiste, es trampa. Aunque nadie te vea.',
          feedbackIncorrecto: 'Trampa. No aprendiste, no añadiste voz, pasaste como autor. La regla universal se rompe. El que aprende es Pedro; el que copia, Lucía.'
        },
        {
          enunciado: 'Tu profe te pide trabajar con IA. ¿Necesitas atribuir?',
          opciones: [
            'No, si el profe lo permite.',
            'Sí. Atribución profesional: \'usé [LLM] para [propósito]. Contenido propio.\' Siempre.',
            'Solo si el LLM lo exige.',
            'Solo si quieres.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Siempre atribuye. Es honestidad académica universal. Los profes valoran la verdad sobre los métodos. No atribuir parece deshonesto aunque el uso haya sido legítimo.',
          feedbackIncorrecto: 'Siempre atribuir. Es práctica adulta. \'Usé [IA] para [propósito]. Contenido propio.\' Honesto y profesional. No atribuir es jugar con el límite de la honestidad.'
        },
        {
          enunciado: 'Antes de entregar, te preguntas \'¿puedo explicar verbalmente este trabajo si el profe me pregunta?\'. La respuesta es NO. ¿Qué haces?',
          opciones: [
            'Lo entrego igual.',
            'Le pido al profe que no pregunte.',
            'Cambio el profe.',
            'Vuelvo a estudiar el tema hasta que pueda explicarlo. Si solo entregué sin entender, no es legítimo.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Pregunta 2 de la autoevaluación: si no puedo explicar verbalmente, no entiendo. Si no entiendo, no aprendí. Vuelvo al tema. Estándar adulto: honestidad con uno mismo.',
          feedbackIncorrecto: 'Vuelves a estudiar. Si no puedes explicar verbalmente, no entendiste. Solo entregaste un producto sin aprender. La pregunta 2 de la autoevaluación lo detecta.'
        },
        {
          enunciado: 'Tu compañero dice \'todos usan IA para hacer las tareas, no es trampa\'. ¿Cómo lo corriges?',
          opciones: [
            'Tiene razón, lo seguiré.',
            'Es solo opinión.',
            'Le pago al compañero por la copia.',
            'Que otros hagan trampa no la convierte en legítima. La regla es: ¿aprendí? Si no, es trampa, sin importar cuántos lo hagan.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. La ética no se mide por mayoría. Si la mayoría hace trampa, sigue siendo trampa. La regla universal: ¿aprendí? Si no, es trampa. Independiente del consenso social.',
          feedbackIncorrecto: 'La ética no depende de mayorías. Si la mayoría hace trampa, sigue siendo trampa. La regla \'aprendí o no\' es universal. Tu integridad no se ajusta a lo que otros hacen.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cuando uso IA en tareas, ¿estoy votando por convertirme en Pedro con asistente o en Lucía con atajos?',
    transferencia: 'La próxima clase es la cosecha del periodo: un proyecto completo con IA responsable.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 4 usos legítimos vs los 4 no legítimos; (2) sabrás aplicar la regla universal (¿aprendí?); (3) podrás atribuir IA correctamente en un trabajo; (4) habrás creado tu política personal de uso de IA en estudios.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de Cartago decía: "El que aprende con esfuerzo se gradúa; el que copia, se gradúa también, pero sin oficio." En la escuelita de la vereda La Plata había dos niños: Pedro y Lucía. Pedro hacía los ejercicios solo, se equivocaba, los corregía, aprendía. Lucía copiaba la tarea de Pedro y la entregaba como propia. Las dos pasaron de grado: las notas no detectaban la diferencia. Pero al año siguiente, cuando llegaron nuevos contenidos que se construían sobre lo anterior, Pedro entendía; Lucía no. Lucía había aprobado, pero no había aprendido. Tres años después, en un examen de ingreso al colegio de Buga, Pedro pasó; Lucía no. La diferencia no estaba en la inteligencia: estaba en haber aprendido el oficio en su momento. Con IA pasa exactamente lo mismo. El que la usa para hacer trampa pasa de grado pero no aprende. El que la usa con criterio, asistente real, aprende Y avanza. Hoy defines tu política personal para no ser Lucía.',
    preguntaPuente: 'Si tu profe te pide un ensayo de 2 páginas sobre la independencia de Colombia, y tú le pides a ChatGPT que lo escriba completo y se lo entregas tal cual, ¿en qué te perjudica? ¿La nota cambia? ¿Algo más cambia?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del esfuerzo formativo)',
      lente: 'lente del nosotros',
      cita: '"Lo que aprendes con esfuerzo te pertenece. Lo que obtienes con atajos, no es tuyo. El esfuerzo es lo que convierte el conocimiento en sabiduría propia."',
      preguntaEspejo: 'Cuando uso IA en tareas, ¿estoy votando por convertirme en Pedro con asistente o en Lucía con atajos?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"La integridad es la única posesión que no te pueden quitar. Pero tú mismo puedes regalarla con tus decisiones diarias."',
      preguntaEspejo: '¿Estoy cultivando mi integridad o regalándola con decisiones pequeñas?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la ética en estudios con IA)',
      lente: 'lente de la infoesfera',
      cita: '"Los estudiantes que aprendan a usar IA con criterio en grado 7 serán los profesionales del futuro. Los que solo copien, serán reemplazados por IAs mejores."',
      preguntaEspejo: '¿Estoy formando habilidades que la IA no puede reemplazar, o me estoy haciendo reemplazable?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 4 usos legítimos vs los 4 no legítimos; (2) sabrás aplicar la regla universal (¿aprendí?); (3) podrás atribuir IA correctamente en un trabajo; (4) habr…',
    emocional: 'Cada vez que decides usar IA con criterio o sin él, estás formando o desformando tu integridad personal.',
    ciudadana: 'Pedro y Lucía de la historia de doña Mercedes pasaron de grado igual.',
    local: 'Antes de salir, intercambia tu política con un compañero — ¿se parecen?',
    intergeneracional: 'El mercado laboral del futuro no premia a quien copia de IA: premia a quien usa IA como asistente y agrega valor humano genuino.'
  }
};

export default contenido;
