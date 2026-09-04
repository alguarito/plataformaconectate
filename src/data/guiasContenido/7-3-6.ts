/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 6
 * (sesión global 26).
 *
 * Auto-generado desde content/guias/7/7-3-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 6,
  titulo: 'Prompting básico — cómo hablarle a la IA para que te responda bien',
  resumen: 'Un prompt es la instrucción o pregunta que le das a una IA.',
  duracionMin: 90,
  subtema: 'Prompting básico — cómo hablarle a la IA para que te responda bien',
  preLectura: {
    porQueImporta: 'El producto es la tabla de 10 prompts + fórmula CTRF + reflexión.',
    preguntaDetonante: 'Si tu profe te dice "dime algo" sin contexto ni especifico, ¿qué le respondes? ¿Y si te dice "cuéntame 3 cosas que aprendiste hoy en clase de mate"? La diferencia es prompting — así pasa también con la IA.',
    activacion: {
      titulo: '6 prompts: ¿bueno o malo?',
      descripcion: 'Actividad 1 · ANALIZA — 6 prompts: ¿bueno o malo?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: distingues prompts buenos vs malos, aprendes la fórmula CTRF, mejoras 10 prompts, los pruebas con LLM.',
      siguiente: 'Esta semana, antes de cualquier prompt, piensa CTRF mentalmente.'
    }
  },
  conceptosClave: [
    {
      termino: 'Prompt',
      definicion: 'Instrucción o pregunta que le das a una IA. La calidad del prompt determina la calidad de la respuesta. Aprender a hacer buenos prompts se llama \'prompting\'.',
      ejemplo: 'Prompt malo: \'Bolívar\'. Prompt bueno: \'Soy estudiante de 7° grado. Resúmeme los 3 logros principales de Bolívar en máximo 100 palabras con lenguaje sencillo.\'',
      emoji: '❓'
    },
    {
      termino: 'CTRF (fórmula del prompt)',
      definicion: 'Las 4 partes de un buen prompt: Contexto (quién eres), Tarea (qué quieres), Restricciones (cómo debe ser), Formato (en qué forma). Aplicar CTRF transforma prompts vagos en prompts útiles.',
      ejemplo: 'Prompt CTRF: \'Soy estudiante de 7° (C). Explícame Pitágoras (T). Con lenguaje sencillo y ejemplo de fútbol (R). En 3 párrafos cortos (F).\' Las 4 partes claras.',
      emoji: '📋'
    },
    {
      termino: 'Iteración del prompt',
      definicion: 'Técnica de afinar la respuesta del LLM pidiendo ajustes. Si es muy larga: \'resúmela\'. Si es técnica: \'explícame más simple\'. Si falta ejemplo: \'dame un ejemplo del Valle\'. La conversación es ida y vuelta.',
      ejemplo: 'Primer prompt: te da respuesta genérica. Iteración: \'Hazlo más corto y con ejemplo del fútbol\'. El LLM ajusta. 2-3 iteraciones suelen dar respuesta excelente.',
      emoji: '🔄'
    },
    {
      termino: 'Prompt engineer',
      definicion: 'Profesional que diseña y refina prompts para obtener mejores resultados de las IAs. Es una de las profesiones más nuevas. Gana muy bien por la escasez de personas que dominan la habilidad.',
      ejemplo: 'Empresas pagan $100K+ al año por prompt engineers que les ayudan a usar IA para análisis, marketing, código. Tu generación puede prepararse para esta carrera desde 7° grado.',
      emoji: '🛠️'
    },
    {
      termino: 'Calidad de la pregunta',
      definicion: 'Principio universal: la calidad de la respuesta depende de la calidad de la pregunta. Aplica a IA, a humanos, a investigación. Por eso aprender prompting entrena pensamiento crítico general.',
      ejemplo: 'Le preguntas vago al médico: \'me siento mal\'. Te da consejo genérico. Le preguntas específico: \'tengo dolor de cabeza por 3 días con luz brillante\'. Te da diagnóstico mejor. Mismo principio.',
      emoji: '💎'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer buenos prompts?',
      instrucciones: '5 preguntas para verificar que dominas CTRF y la iteración.',
      preguntas: [
        {
          enunciado: '¿Cuál es la fórmula CTRF para un buen prompt?',
          opciones: [
            'Calma, Tiempo, Riesgo, Final.',
            'Contexto + Tarea + Restricciones + Formato.',
            'Compras, Tarjeta, Recibo, Factura.',
            'Carros, Tiempo, Rifa, Familia.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. CTRF: Contexto (quién eres) + Tarea (qué quieres) + Restricciones (cómo debe ser) + Formato (en qué forma). Aplica los 4 y tus prompts dan respuestas útiles.',
          feedbackIncorrecto: 'CTRF = Contexto + Tarea + Restricciones + Formato. Los 4 elementos transforman prompts vagos en prompts útiles. Memoriza la sigla.'
        },
        {
          enunciado: 'Tu prompt es \'Bolívar\'. ¿Qué le falta según CTRF?',
          opciones: [
            'Nada, está bien.',
            'Solo el formato.',
            'Todo: contexto, tarea específica, restricciones, formato.',
            'Solo el contexto.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. \'Bolívar\' es prompt de 1 palabra. Falta TODO: no dice quién eres, qué quieres saber, cómo debe responder, en qué formato. Es prompt basura.',
          feedbackIncorrecto: 'Le faltan las 4 partes de CTRF. \'Bolívar\' es palabra sola sin contexto, tarea, restricciones ni formato. Necesita los 4 para ser útil.'
        },
        {
          enunciado: 'Recibes una respuesta del LLM muy larga. ¿Qué haces?',
          opciones: [
            'Itero: pido \'resúmela en 3 puntos\' o \'hazla más corta\'.',
            'La acepto tal cual.',
            'Cierro el chat.',
            'Le pago más al LLM.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Iteración: pides ajustes. La conversación es ida y vuelta. 2-3 iteraciones suelen dar respuesta excelente. Aceptar la primera sin pensar es perderse el oficio del prompting.',
          feedbackIncorrecto: 'Iteras. Pides ajustes: \'más corta\', \'con ejemplo\', \'más simple\'. La conversación es ida y vuelta. Quien itera obtiene respuestas mejores que quien acepta la primera.'
        },
        {
          enunciado: 'Eres estudiante de 7°. ¿Qué prompt funciona mejor?',
          opciones: [
            '\'Hazme la tarea de ciencias\'.',
            '\'Tarea de ciencias por favor\'.',
            '\'Ciencia\'.',
            '\'Soy estudiante de 7° en Colombia. Explícame el ciclo del agua con ejemplo del río Cauca, en 3 párrafos sencillos. No me hagas la tarea, ayúdame a entender\'.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. CTRF aplicado completo + acuerdo ético (no me hagas la tarea, ayúdame a entender). Es prompt de profesional. Las respuestas que da son útiles y respetan tu aprendizaje.',
          feedbackIncorrecto: 'CTRF completo + ética. Contexto (estudiante 7°), Tarea (explicar ciclo del agua), Restricciones (ejemplo Cauca, sencillo), Formato (3 párrafos). + acuerdo ético de no hacer la tarea por ti.'
        },
        {
          enunciado: 'Sin aprender prompting, ¿cómo será tu uso de IA en 5 años?',
          opciones: [
            'Igual que con prompting.',
            'Mejor sin prompting.',
            'Limitado: recibirás respuestas pobres porque no sabrás formularlas bien. Como buscar en Google sin saber qué palabras usar.',
            'No habrá IA en 5 años.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Sin prompting, respuestas pobres. Como usar Google sin saber qué buscar. Aprender prompting en 7° te da años de ventaja sobre adultos que apenas empiezan.',
          feedbackIncorrecto: 'Sin prompting recibes basura. Quien sabe formular preguntas, obtiene oro. Quien no, recibe respuestas pobres y genéricas. Es habilidad clave del siglo XXI.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprendiendo solo a hablar con IA, o también a pensar con más precisión en todas mis conversaciones?',
    transferencia: 'Esta semana, antes de cualquier prompt, piensa CTRF mentalmente.',
    cierre: 'Al terminar la clase: (1) podrás identificar prompts buenos vs malos; (2) sabrás aplicar la fórmula CTRF (Contexto + Tarea + Restricciones + Formato); (3) podrás evaluar la mejora entre un prompt antes y uno después; (4) habrás creado 10 prompts mejorados probados con un LLM real…'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural del Valle del Cauca enseñaba a los niños a preguntarle bien al consejero del barrio. "No vayan donde don Lucho con un `dígame algo\' al aire", les decía. "Vayan con la pregunta concreta: `Don Lucho, mi papá quiere vender la finca, ¿qué debería considerar antes de decidir?\' Así él les responde algo útil". Doña Mercedes sabía que la calidad de la respuesta depende de la calidad de la pregunta. Si llegabas vago, recibías consejo vago. Si llegabas específico, recibías consejo específico. Aprender a formular bien una pregunta era habilidad que se enseñaba desde niño: "contextualicen su situación, sean claros, díganle qué necesitan exactamente". Hoy con la IA pasa lo mismo. Un prompt (pregunta a la IA) bien formulado te da respuesta valiosa. Un prompt vago te da basura. Aprender a preguntar bien es 50% del oficio de usar IA con criterio.',
    preguntaPuente: 'Si tu profe te dice "dime algo" sin contexto ni especifico, ¿qué le respondes? ¿Y si te dice "cuéntame 3 cosas que aprendiste hoy en clase de mate"? La diferencia es prompting — así pasa también con la IA.'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la palabra precisa)',
      lente: 'lente del nosotros',
      cita: '"Quien sabe formular bien una pregunta, tiene la mitad de la respuesta. La palabra precisa es semilla de pensamiento claro."',
      preguntaEspejo: '¿Estoy aprendiendo solo a hablar con IA, o también a pensar con más precisión en todas mis conversaciones?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Pregunta lo que necesitas saber, no lo que crees que debes preguntar. La diferencia es respeto por tu propio tiempo y el del que responde."',
      preguntaEspejo: '¿Pregunto lo que realmente necesito o lo que creo que "está bien preguntar"?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del prompting como nueva habilidad)',
      lente: 'lente de la infoesfera',
      cita: '"El prompting es la habilidad alfabetizada del siglo XXI. Quien sabe pedir bien, obtiene mucho. Quien no, queda con respuestas pobres."',
      preguntaEspejo: '¿Estoy entrenando una habilidad que en 5 años me dará ventaja real, o me limito a usar IA como entretenimiento?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar prompts buenos vs malos; (2) sabrás aplicar la fórmula CTRF (Contexto + Tarea + Restricciones + Formato); (3) podrás evaluar la mejora entre un prompt ante…',
    emocional: 'Mucha gente pregunta lo que "debería preguntar" (para parecer culta, para no ofender) en lugar de lo que realmente necesita saber.',
    ciudadana: 'La habilidad de preguntar bien no es nueva: doña Mercedes la enseñaba en la vereda La Plata.',
    local: 'Antes de salir, verifica que tus prompts mejorados contienen las 4 partes.',
    intergeneracional: 'En 2030, saber prompting bien será como hoy saber buscar en Google: habilidad básica del ciudadano digital.'
  }
};

export default contenido;
