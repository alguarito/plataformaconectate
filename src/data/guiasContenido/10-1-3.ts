/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/10/10-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 3,
  titulo: 'Prompting técnico para escritura — las 5 partes del prompt profesional',
  resumen: 'El prompt es el texto que le escribes a una IA generativa (ChatGPT, Gemini, Bing Copilot, Claude.ai) para que produzca una respuesta.',
  duracionMin: 90,
  subtema: 'Prompting técnico para escritura — las 5 partes del prompt profesional',
  preLectura: {
    porQueImporta: 'El criterio principal: que cualquiera con tu plantilla pueda construir prompts profesionales sin repetir tu trabajo desde cero.',
    preguntaDetonante: '¿Qué sabía el comensal experimentado del restaurante al pedir con precisión todos los detalles, que el usuario novato de ChatGPT olvida cuando escribe "hazme un capítulo"? ¿Y por qué un prompt de 100 palabras bien estructurado vale más que 1000 palabras de conversación con la IA?',
    activacion: {
      titulo: 'Experimento del comensal',
      descripcion: 'Actividad 1 · IDENTIFICA — Experimento del comensal (15 min · individual con dispositivo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 1 aceptaste el rol de editor; en la 2 concebiste tu libro.',
      siguiente: 'Llega con tu plantilla, los 3 prompts probados, la bitácora y el capítulo 1 borrador.'
    }
  },
  conceptosClave: [
    {
      termino: 'Prompt',
      definicion: 'Texto que le escribes a una IA generativa para obtener una respuesta. Su calidad determina la calidad del resultado.',
      ejemplo: 'Un prompt vago produce texto vago; un prompt técnico y completo produce respuestas útiles.',
      emoji: '💬'
    },
    {
      termino: 'Rol',
      definicion: 'Primera parte del prompt profesional. Define qué tipo de profesional debe asumir la IA al responder.',
      ejemplo: '"Actúa como editor de literatura juvenil con 15 años de experiencia." Sitúa a la IA en una mirada concreta.',
      emoji: '🎭'
    },
    {
      termino: 'Contexto',
      definicion: 'Información de fondo que la IA necesita para responder con precisión. Sin contexto, la respuesta es genérica.',
      ejemplo: '"Escribo un libro de 80 páginas sobre amistades jóvenes en el Valle, para bachillerato, género realismo cercano."',
      emoji: '🧭'
    },
    {
      termino: 'Tarea + Formato',
      definicion: 'Tercera y cuarta partes. Qué debe hacer exactamente la IA y cómo quieres la respuesta (extensión, estructura).',
      ejemplo: '"Escribe el capítulo 1 en prosa, 6 páginas, con subtítulos cada 2 páginas."',
      emoji: '📋'
    },
    {
      termino: 'Restricciones',
      definicion: 'Quinta parte. Qué evitar en la respuesta: clichés, tono, frases hechas, longitud excesiva.',
      ejemplo: '"Sin clichés de novela distópica, sin frases hechas, evita tono motivacional."',
      emoji: '🚧'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Escribes prompts profesionales?',
      instrucciones: '5 preguntas para verificar que aplicas las 5 partes del prompt.',
      preguntas: [
        {
          enunciado: '¿Qué significa "garbage in, garbage out"?',
          opciones: [
            'La IA siempre da respuestas mediocres',
            'Si tu prompt es vago, la respuesta es vaga',
            'Hay que limpiar el computador',
            'No tiene relación con prompts'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La calidad de entrada determina la calidad de salida. Prompt vago, respuesta vaga.',
          feedbackIncorrecto: 'Significa que la calidad del prompt define la calidad de la respuesta. Prompt vago, respuesta vaga.'
        },
        {
          enunciado: '¿Cuántas partes obligatorias tiene un prompt profesional?',
          opciones: [
            '1',
            '5',
            '10',
            '20'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. 5: rol, contexto, tarea, formato y restricciones.',
          feedbackIncorrecto: 'Son 5: rol, contexto, tarea, formato y restricciones. Cada una aporta precisión al resultado.'
        },
        {
          enunciado: 'La parte del prompt que define qué profesional asume la IA se llama...',
          opciones: [
            'Formato',
            'Rol',
            'Restricción',
            'Saludo'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Rol. Sitúa a la IA en una mirada profesional concreta antes de responder.',
          feedbackIncorrecto: 'Es el rol. Define qué profesional asume la IA al responder, lo que afina el tono y enfoque.'
        },
        {
          enunciado: '¿Qué falta en este prompt: \'escríbeme algo sobre salud mental\'?',
          opciones: [
            'Nada, está completo',
            'Rol, contexto, tarea precisa, formato y restricciones',
            'Solo el saludo',
            'Solo el punto final'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Falta todo el marco profesional. Por eso ese tipo de prompt produce texto genérico inservible.',
          feedbackIncorrecto: 'Falta el marco completo: rol, contexto, tarea precisa, formato y restricciones.'
        },
        {
          enunciado: 'La parte "restricciones" del prompt sirve para...',
          opciones: [
            'Bloquear la IA',
            'Decirle qué evitar (clichés, tono, longitud)',
            'Hacer la respuesta más larga',
            'Decir gracias'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Las restricciones evitan que la IA caiga en clichés, tono inadecuado o longitud excesiva.',
          feedbackIncorrecto: 'Sirve para decirle qué evitar. Sin restricciones, la IA cae en clichés y frases hechas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mis prompts dirigen a la IA, o la dejo dirigir el contenido que me devuelve?',
    transferencia: 'Llega con tu plantilla, los 3 prompts probados, la bitácora y el capítulo 1 borrador.',
    cierre: 'Al terminar podrás: (1) identificar las 5 partes del prompt profesional y qué problema resuelve cada una; (2) aplicar las 5 partes para construir prompts que produzcan respuestas útiles, no genéricas; (3) analizar las diferencias entre las respuestas de distintas IAs al mismo pro…'
  },
  saberAncestral: {
    saber: 'Cuando entras a un restaurante del centro de Cartago y te sientas a pedir el almuerzo, hay una diferencia inmediata entre el comensal que sabe pedir y el que no. El comensal novato dice: "algo rico", "lo que sea", "sorpréndame". El cocinero, sin información, hace lo que cree o lo más barato del día. El plato sale, pero el comensal queda inconforme. El comensal experimentado, en cambio, pide diferente: "un sancocho de gallina, con yuca y mazorca, no muy salado, para 4 personas, sin cilantro porque a mi mamá no le gusta". El cocinero recibe toda la información necesaria: qué plato, qué ingredientes, qué nivel de sal, para cuántos, qué excluir. El plato sale como el comensal esperaba. La diferencia entre los dos comensales no es el dinero ni el conocimiento culinario: es saber pedir con precisión. Esa habilidad ancestral del cliente exigente del barrio Obrero es exactamente lo que la IA generativa moderna llama prompting técnico. El prompt es el pedido al cocinero; la IA es el cocinero; la respuesta es el plato. Quien sabe pedir, come bien. Quien no, come lo que sea.',
    preguntaPuente: '¿Qué sabía el comensal experimentado del restaurante al pedir con precisión todos los detalles, que el usuario novato de ChatGPT olvida cuando escribe "hazme un capítulo"? ¿Y por qué un prompt de 100 palabras bien estructurado vale más que 1000 palabras de conversación con la IA?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Pedir con palabra precisa es ya acto de dignidad en la era del contenido automatizado.',
      preguntaEspejo: '¿Mis prompts dirigen a la IA, o la dejo dirigir el contenido que me devuelve?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo pequeño bien hecho cambia todo; el detalle del prompt separa la respuesta útil de la basura.',
      preguntaEspejo: '¿Estoy invirtiendo el tiempo justo en escribir el prompt, o quiero respuesta mágica con esfuerzo mínimo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El prompting es la nueva alfabetización del siglo XXI; quien no sabe pedirle a la IA pierde poder informacional.',
      preguntaEspejo: '¿Estoy aprendiendo prompting como habilidad profesional, o solo lo uso casual sin método?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 5 partes del prompt profesional y qué problema resuelve cada una; (2) aplicar las 5 partes para construir prompts que produzcan respuestas útiles, no genéricas;…',
    emocional: 'Es tentador pensar que escribir prompts es perder tiempo y que basta con "hablar normal" con la IA.',
    ciudadana: 'Cuando le pides a la IA con palabra precisa, asumes el control de la conversación.',
    local: 'Antes de cerrar, mira el prompting desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, saber escribir prompts profesionales es habilidad equivalente a saber escribir correo profesional fue en 2005.'
  }
};

export default contenido;
