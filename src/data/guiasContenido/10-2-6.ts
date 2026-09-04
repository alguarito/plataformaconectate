/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/10/10-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 6,
  titulo: 'Análisis cualitativo con IA — qué hace y qué no',
  resumen: 'El análisis cualitativo es el proceso de extraer significado de respuestas abiertas (texto, no números).',
  duracionMin: 90,
  subtema: 'Análisis cualitativo con IA — qué hace y qué no',
  preLectura: {
    porQueImporta: 'El criterio principal: que la conclusión que escribas resista verificación humana paso a paso.',
    preguntaDetonante: '¿Qué sabía la cocinera al mostrar las medidas antes de cocinar, que el novato olvida cuando acepta la clasificación de la IA sin verificar? ¿Y por qué la IA puede equivocarse interpretando un "más o menos" colombiano que es ambiguo a propósito?',
    activacion: {
      titulo: 'Lectura humana de 5 respuestas',
      descripcion: 'Actividad 1 · IDENTIFICA — Lectura humana de 5 respuestas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy aprendes a analizar los resultados con IA pero con criterio humano.',
      siguiente: 'En la sesión 7 vas a aprender a escribir informe comercial para audiencia real: propuesta concreta dirigida a alguien que pueda decidir.'
    }
  },
  conceptosClave: [
    {
      termino: 'Análisis cualitativo',
      definicion: 'Proceso de extraer significado de respuestas abiertas (texto, no números). Agrupa por temas y codifica con etiquetas.',
      ejemplo: 'Lees 20 respuestas sobre la cafetería y descubres 4 temas que se repiten: precios, sabor, fila y horario.',
      emoji: '📖'
    },
    {
      termino: 'Categorías emergentes',
      definicion: 'Etiquetas temáticas que surgen al leer las respuestas, no impuestas de antemano. La IA puede proponerlas en segundos.',
      ejemplo: 'La IA agrupa 18 respuestas en: "precios altos", "filas largas", "menú poco variado", "personal amable".',
      emoji: '🏷️'
    },
    {
      termino: 'IA propone, humano dispone',
      definicion: 'Regla profesional. La IA acelera la propuesta inicial; el editor humano audita, valida y corrige cuando hace falta.',
      ejemplo: 'La IA dice "categoría: queja", pero al leer la respuesta literal, era ironía. El humano la reclasifica.',
      emoji: '🤝'
    },
    {
      termino: 'Límites de la IA',
      definicion: 'Sarcasmo, modismos locales, contexto cultural, respuestas ambiguas. Áreas donde la IA falla y el humano debe intervenir.',
      ejemplo: '"Estoy planchao" significa sin dinero en costa, no plancha de ropa. La IA puede no entender el modismo.',
      emoji: '🚧'
    },
    {
      termino: 'Auditoría humana',
      definicion: 'Revisión de la clasificación propuesta por la IA, especialmente con respuestas en español coloquial colombiano.',
      ejemplo: 'Pasas las 20 respuestas con la clasificación de la IA y marcas las que reclasificaste a mano y por qué.',
      emoji: '🔍'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Auditas el análisis de la IA?',
      instrucciones: '5 preguntas para verificar que combinas velocidad y rigor.',
      preguntas: [
        {
          enunciado: '¿En qué es BUENA la IA para análisis cualitativo?',
          opciones: [
            'Detectar sarcasmo',
            'Detectar patrones obvios y agrupar respuestas similares',
            'Entender modismos locales',
            'Captar contexto cultural específico'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Detectar patrones obvios y agrupar similares es donde la IA acelera el proceso.',
          feedbackIncorrecto: 'Es buena detectando patrones obvios y agrupando similares. En sarcasmo y modismos, falla.'
        },
        {
          enunciado: 'La regla "la IA propone, el humano dispone" significa que...',
          opciones: [
            'La IA decide todo',
            'El humano hace todo',
            'No hay diferencia',
            'El humano audita, valida y corrige la propuesta inicial de la IA'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La IA acelera; el humano sostiene rigor con auditoría.',
          feedbackIncorrecto: 'El humano audita la propuesta de la IA. Acelera pero no decide finalmente.'
        },
        {
          enunciado: '¿Qué pasa si la IA clasifica un sarcasmo como respuesta literal?',
          opciones: [
            'El análisis pierde precisión; el humano debe corregir',
            'No importa',
            'Mejora el análisis',
            'Es más rápido'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El sarcasmo escapa a la IA. Sin auditoría humana, el análisis introduce error.',
          feedbackIncorrecto: 'El análisis pierde precisión. Por eso la auditoría humana es irrenunciable.'
        },
        {
          enunciado: '¿Cuál es UN área donde la IA falla?',
          opciones: [
            'Patrones obvios',
            'Resúmenes',
            'Modismos locales colombianos',
            'Agrupación simple'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Modismos como "planchao" o "embalado" pueden confundir a la IA.',
          feedbackIncorrecto: 'Falla con modismos locales. "Estoy embalado" en Cartago significa muy ocupado, no en una caja.'
        },
        {
          enunciado: '¿Cuál es producto de la auditoría humana del análisis?',
          opciones: [
            'Una lista sin cambios',
            'Tabla con respuestas reclasificadas y razón del cambio',
            'Borrar el análisis',
            'Repetir la encuesta'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La auditoría documenta qué reclasificaste y por qué. Eso es rigor profesional.',
          feedbackIncorrecto: 'Producto: tabla con cambios y razones. Documentar la auditoría es parte del oficio.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi auditoría rescató las voces que la IA malinterpretó, o acepté la clasificación sin verificar?',
    transferencia: 'En la sesión 7 vas a aprender a escribir informe comercial para audiencia real: propuesta concreta dirigida a alguien que pueda decidir.',
    cierre: 'Al terminar podrás: (1) identificar qué tipos de respuesta son fáciles para la IA y cuáles le dan problema; (2) analizar 15-20 respuestas abiertas con asistencia de IA para clasificación temática; (3) evaluar la clasificación de la IA respuesta por respuesta, detectando aciertos…'
  },
  saberAncestral: {
    saber: 'En la cocina de los restaurantes pequeños del centro de Cartago, sostuvo durante décadas una práctica que cualquier comensal observador reconoce: la cocinera muestra siempre las medidas antes de cocinar. Cuando un cliente pide un plato especial o complejo, la cocinera no entra a la cocina directamente: saca la libra de pollo, los gramos de arroz, la taza de caldo, los pone sobre la mesa, y dice: "vea, esto es lo que va". El cliente mira, aprueba o sugiere ajuste ("menos sal", "más papa"), y solo entonces la cocinera entra a la estufa. Ese gesto cumple 2 funciones simultáneas: (1) Transparencia: el cliente ve lo que va a comer antes de que esté cocinado. (2) Verificación humana: el cliente puede corregir antes del punto sin retorno. La sabiduría es ancestral: quien cocina y quien come deciden juntos, no la cocinera sola. Esa práctica del oficio se traduce directamente al análisis de datos con IA: la IA es buena agregando y proponiendo clasificaciones, pero puede errar en matices culturales o coloquiales. Tu papel como editor es ver lo que propone la IA antes de servirlo como conclusión.',
    preguntaPuente: '¿Qué sabía la cocinera al mostrar las medidas antes de cocinar, que el novato olvida cuando acepta la clasificación de la IA sin verificar? ¿Y por qué la IA puede equivocarse interpretando un "más o menos" colombiano que es ambiguo a propósito?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Las clasificaciones automáticas pueden invisibilizar voces; la auditoría humana las rescata.',
      preguntaEspejo: '¿Mi auditoría rescató las voces que la IA malinterpretó, o acepté la clasificación sin verificar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Revisar respuesta por respuesta es disciplina; aceptar el resumen sin verificar es vanidad.',
      preguntaEspejo: '¿Estoy revisando con disciplina cada clasificación, o quiero saltar al resumen porque parece más rápido?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La auditoría humana del análisis con IA es la nueva ética profesional del oficio analítico contemporáneo.',
      preguntaEspejo: '¿Mi análisis tiene auditoría humana real, o solo pego lo que la IA me dijo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar qué tipos de respuesta son fáciles para la IA y cuáles le dan problema; (2) analizar 15-20 respuestas abiertas con asistencia de IA para clasificación temática; (3)…',
    emocional: 'Es tentador aceptar el resumen bonito que produce la IA y pasar al siguiente paso.',
    ciudadana: 'Cuando la IA clasifica una respuesta sarcástica como literal o un modismo coloquial como neutro, está silenciando lo que el encuestado realmente quiso decir.',
    local: 'Antes de cerrar, mira el análisis desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, miles de análisis se publican sin auditoría humana.'
  }
};

export default contenido;
