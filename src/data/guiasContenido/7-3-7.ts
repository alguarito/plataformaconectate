/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 7
 * (sesión global 27).
 *
 * Auto-generado desde content/guias/7/7-3-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 7,
  titulo: 'Prompting avanzado — técnicas que diferencian al usuario experto',
  resumen: 'El prompting avanzado usa técnicas que afinan las respuestas del LLM mucho más allá de la fórmula CTRF básica.',
  duracionMin: 90,
  subtema: 'Prompting avanzado — técnicas que diferencian al usuario experto',
  preLectura: {
    porQueImporta: 'El producto son los 5 prompts probados + tabla + evaluación.',
    preguntaDetonante: 'Si le pides a ChatGPT "actúa como un profesor estricto de matemáticas y resuelve este problema mostrando todos los pasos", ¿cómo crees que cambia la respuesta vs simplemente preguntar el problema?',
    activacion: {
      titulo: 'Compara 2 versiones de un prompt',
      descripcion: 'Actividad 1 · ANALIZA — Compara 2 versiones de un prompt (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres 4 técnicas avanzadas, las aplicas a ejemplos, las combinas, las pruebas.',
      siguiente: 'Esta semana, usa al menos 1 técnica avanzada en cada conversación con LLM.'
    }
  },
  conceptosClave: [
    {
      termino: 'Prompting avanzado',
      definicion: 'Conjunto de técnicas para afinar respuestas de LLMs más allá del CTRF básico. Las 4 principales: role prompting, few-shot, chain-of-thought, iteración explícita. Su combinación produce respuestas mucho mejores.',
      ejemplo: 'Prompt básico: \'Resuelve este problema\'. Prompt avanzado: \'Actúa como profesor paciente (role) y muestra todos los pasos (chain-of-thought) de cómo resolver: [problema]. Después dame 2 errores típicos (iteración)\'.',
      emoji: '🎯'
    },
    {
      termino: 'Role Prompting',
      definicion: 'Técnica de asignar un rol a la IA: \'Actúa como [experto]\'. El LLM ajusta tono, vocabulario y profundidad según el rol. Útil para explicaciones técnicas, escritura creativa, simulaciones.',
      ejemplo: '\'Actúa como un profesor paciente que enseña a niños de 12 años\'. La IA usa lenguaje sencillo. \'Actúa como un poeta del siglo XIX\'. La IA escribe con estilo más antiguo.',
      emoji: '🎭'
    },
    {
      termino: 'Few-shot',
      definicion: 'Técnica de dar ejemplos al LLM para que aprenda el patrón. Le muestras 1-3 ejemplos y pides que aplique el patrón a un caso nuevo. Útil para tareas con formato específico o clasificaciones.',
      ejemplo: '\'Te doy ejemplos: Ejemplo 1: \'La gota fría\' = vallenato. Ejemplo 2: \'Despacito\' = reggaetón. Ahora clasifica: \'La vida es un carnaval". El LLM sigue el patrón aprendido.',
      emoji: '📚'
    },
    {
      termino: 'Chain-of-Thought',
      definicion: 'Técnica de pedir al LLM que muestre el razonamiento paso a paso, no solo la respuesta final. Las respuestas son más precisas en matemáticas, lógica y análisis. Aprovecha la \'capacidad de pensar en voz alta\' del LLM.',
      ejemplo: 'En lugar de \'¿Cuánto es 35% de 240?\' (solo respuesta), \'Resuelve mostrando TODOS los pasos: ¿cuánto es 35% de 240?\'. El LLM razona y comete menos errores.',
      emoji: '🧠'
    },
    {
      termino: 'Iteración explícita',
      definicion: 'Técnica de pedir al LLM que se autocritique y mejore. \'Dame respuesta, luego critícala, luego dame versión mejorada\'. Útil para ensayos, decisiones importantes, planes complejos. Genera versiones más sólidas.',
      ejemplo: '\'Hazme un plan de estudios para 1 semana. Después dime 3 puntos débiles del plan. Después dame una versión mejorada que aborde esos puntos\'. En 1 prompt obtienes lo que normalmente toma 3 conversaciones.',
      emoji: '🔁'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas el prompting avanzado?',
      instrucciones: '5 preguntas para verificar las 4 técnicas y sus combinaciones.',
      preguntas: [
        {
          enunciado: '¿Cuáles son las 4 técnicas avanzadas de prompting?',
          opciones: [
            'Role + Few-shot + Chain-of-Thought + Iteración explícita.',
            'CTRF, copy, paste, paste.',
            'Pregunta, respuesta, escucha, decide.',
            'Solo CTRF basta.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Role + Few-shot + Chain-of-Thought + Iteración explícita. Cada una se puede combinar con otra para resultados aún mejores.',
          feedbackIncorrecto: 'Role + Few-shot + CoT + Iteración explícita. CTRF es la base; estas 4 son las técnicas avanzadas. La combinación con criterio es donde está la maestría.'
        },
        {
          enunciado: 'Le pides al LLM \'actúa como un profesor paciente que enseña a niños de 12 años\'. ¿Qué técnica usaste?',
          opciones: [
            'Few-shot.',
            'Chain-of-Thought.',
            'Role Prompting.',
            'CTRF.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Role Prompting: asignas a la IA un rol específico. El LLM ajusta tono, vocabulario y profundidad. Útil para explicaciones, escritura creativa.',
          feedbackIncorrecto: 'Role Prompting. \'Actúa como X\' es la fórmula básica. El LLM adapta su respuesta al rol. Para enseñar a niños sale más simple; para expertos sale más técnico.'
        },
        {
          enunciado: 'Quieres que el LLM resuelva un problema de mate mostrando TODOS los pasos. ¿Qué técnica?',
          opciones: [
            'Role.',
            'Few-shot.',
            'Iteración.',
            'Chain-of-Thought.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Chain-of-Thought: pedir al LLM mostrar pasos del razonamiento. En matemáticas, lógica y análisis, las respuestas son más precisas porque el LLM \'piensa en voz alta\'.',
          feedbackIncorrecto: 'Chain-of-Thought. Le pides mostrar pasos del razonamiento. Especialmente útil en matemáticas donde mostrar pasos mejora precisión y entendimiento.'
        },
        {
          enunciado: 'Para clasificar canciones por género, le das al LLM 2 ejemplos resueltos y pides que clasifique uno nuevo. ¿Qué técnica?',
          opciones: [
            'Chain-of-Thought.',
            'Few-shot.',
            'Iteración.',
            'Sin técnica.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Few-shot: dar ejemplos para que el LLM aprenda el patrón. Útil para clasificaciones, traducciones especiales, formatos específicos.',
          feedbackIncorrecto: 'Few-shot. Le muestras 1-3 ejemplos, el LLM aprende el patrón y lo aplica al caso nuevo. Mucho más preciso que solo explicar el patrón con palabras.'
        },
        {
          enunciado: '¿Cuál es el peligro de usar demasiadas técnicas en un solo prompt?',
          opciones: [
            'Prompts muy largos (500+ palabras) confunden al LLM. Mejor combinar 2-3 técnicas máximo.',
            'Ningún peligro, mientras más mejor.',
            'El LLM se enoja.',
            'La pantalla se traba.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Prompts muy largos confunden al LLM. La combinación inteligente de 2-3 técnicas es óptima. Más técnicas no siempre = mejor respuesta.',
          feedbackIncorrecto: 'Combinar 2-3 técnicas es óptimo. Más allá, el LLM se confunde. La calidad viene de combinar con criterio, no de acumular técnicas sin sentido.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy combinando las herramientas con criterio, o usándolas una por una sin pensar?',
    transferencia: 'Esta semana, usa al menos 1 técnica avanzada en cada conversación con LLM.',
    cierre: 'Al terminar la clase: (1) podrás identificar las 4 técnicas avanzadas; (2) sabrás aplicar cada una a una situación; (3) podrás combinar 2 o más técnicas en un mismo prompt; (4) habrás creado 5 prompts complejos y probados con LLM.'
  },
  saberAncestral: {
    saber: 'Don Lucho el relojero del Valle del Cauca tenía un truco para enseñar a sus aprendices a reparar relojes. Cuando uno de ellos — digamos un muchacho de 14 años de la vereda — llegaba con un reloj averiado, don Lucho NO le decía: "arréglalo". Le decía: "imagínate que tú eres yo. ¿Qué harías primero? ¿Por qué? Explícame paso a paso". El aprendiz pensaba en voz alta y don Lucho lo corregía suavemente. Después de 2 años, el aprendiz hacía esa misma reflexión solo: se hablaba a sí mismo como si fuera don Lucho. Esa técnica antigua — adoptar el rol de un experto, pensar en voz alta, mostrar tus pasos — es exactamente lo que en prompting moderno se llama chain-of-thought y role prompting. Las técnicas avanzadas no son inventos de Silicon Valley: son sabidurías pedagógicas antiguas trasladadas a conversaciones con IA.',
    preguntaPuente: 'Si le pides a ChatGPT "actúa como un profesor estricto de matemáticas y resuelve este problema mostrando todos los pasos", ¿cómo crees que cambia la respuesta vs simplemente preguntar el problema?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del oficio refinado)',
      lente: 'lente del nosotros',
      cita: '"El que pasa de aficionado a artesano lo hace combinando técnicas. La calidad nace de la combinación, no de la adición."',
      preguntaEspejo: '¿Estoy combinando las herramientas con criterio, o usándolas una por una sin pensar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"El sabio no se conforma con saber lo básico. Profundiza hasta dominar las sutilezas. Ahí está la diferencia con los demás."',
      preguntaEspejo: '¿En qué áreas de mi vida me conformo con lo básico cuando podría profundizar?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de las habilidades emergentes)',
      lente: 'lente de la infoesfera',
      cita: '"Las habilidades que valen oro en 2030 son las que pocos dominan en 2026. El prompting avanzado es una de ellas."',
      preguntaEspejo: '¿Estoy aprovechando este momento clave para construir habilidades que pocos tendrán?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 4 técnicas avanzadas; (2) sabrás aplicar cada una a una situación; (3) podrás combinar 2 o más técnicas en un mismo prompt; (4) habrás creado 5 prompts…',
    emocional: 'Mucha gente aprende solo CTRF básico (la S6) y se conforma.',
    ciudadana: 'Don Lucho el relojero no era bueno solo por usar herramientas: era bueno por combinarlas con criterio.',
    local: 'Antes de salir, evalúa cuál técnica funcionó mejor para qué tipo de tarea.',
    intergeneracional: 'En 2030, las personas que dominen prompting avanzado tendrán ventaja en universidad y trabajo.'
  }
};

export default contenido;
