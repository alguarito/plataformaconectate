/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 4
 * Tema: Línea del tiempo de la técnica — del fuego a la imprenta.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-4.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 4,
  titulo: 'Línea del tiempo de la técnica — del fuego a la imprenta',
  ocultarPDF: false,
  resumen:
    'Construyes tu propia cronología técnica con 10 hitos: 3 locales + 7 mixtos. Recuperar saberes invisibilizados es un acto de soberanía narrativa.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Cronología y poder',

  saberAncestral: {
    saber:
      'La cronología oficial privilegia inventos del norte: rueda mesopotámica, imprenta de Gutenberg, máquina de vapor inglesa. Pero la línea del tiempo también incluye la cerámica Quimbaya, el quipu inca, el calendario muisca, la balsa de guadua del Pacífico, la agricultura andina de andenes. Recuperar esa cronología completa es un acto de justicia histórica.',
    fuente: 'Cerámica Quimbaya, quipu inca, calendario muisca, balsa de guadua del Pacífico',
    preguntaPuente:
      'Si te pidieran nombrar los 5 hitos técnicos más importantes de la historia, ¿cuál sería el primero que se te ocurre? ¿De dónde viene esa lista que tienes en la cabeza?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Cronologías invisibilizadas', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Tres listas, tres miradas', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Los 4 criterios de un hito', duracionMin: 15 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu línea del tiempo personal', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Cada lista de "10 inventos que cambiaron el mundo" es una declaración política sobre quién hace mundo y quién queda fuera. Construir tu propia cronología con criterio es soberanía narrativa: tú decides qué historia cuentas y qué futuro imaginas posible.',
    preguntaDetonante:
      'Si solo pudieras enseñarle a un niño 5 hitos técnicos de la historia, ¿cuáles elegirías y qué dirían eso de la historia que quieres contar?',
    activacion: {
      titulo: 'El test del primer pensamiento',
      descripcion:
        'En 60 segundos, escribe los 5 primeros inventos técnicos que se te vienen a la cabeza. No lo pienses mucho. Cuando termines, mira la lista: ¿cuántos son colombianos o latinoamericanos? Esa es la lista que tienes precargada — y es el punto de partida para construir una tuya con criterio.',
      duracionMin: 2,
    },
    conexion: {
      anterior:
        'En las sesiones 1-3 viste el cuerpo, la máquina y la balanza. Ahora ordenas 30 mil años de técnica humana en 10 hitos elegidos.',
      siguiente:
        'En la sesión 5 verás la Revolución Industrial como punto donde las máquinas cambiaron quién trabaja y cómo.',
    },
  },

  conceptosClave: [
    {
      termino: 'Hito técnico (4 criterios)',
      definicion:
        'Para calificar como hito, una técnica debe cumplir 4 condiciones: invención (alguien la creó), adopción (una comunidad la usó), transformación (cambió vida o trabajo), perdurabilidad (su efecto duró décadas o siglos).',
      ejemplo:
        'La imprenta cumple los 4: Gutenberg la inventó, Europa la adoptó, transformó el acceso al conocimiento, su efecto dura hasta hoy. El "iPhone 15" no es hito: es una versión de un hito (el smartphone).',
      emoji: '🏛',
    },
    {
      termino: 'Cronología situada',
      definicion:
        'La lista de hitos NO es la misma según quién la escribe. Una cronología desde Europa es distinta de una desde América Latina o desde un campesino. Aceptar eso es el primer paso para construir una propia.',
      ejemplo:
        'Wikipedia destaca la imprenta de Gutenberg (1450). Una cronología andina destacaría el sistema de andenes (3000 a.C.) que regeneró suelos. Las dos son válidas.',
      emoji: '🗺',
    },
    {
      termino: 'Saberes invisibilizados',
      definicion:
        'Tecnologías que la modernidad occidental llamó "atrasadas" sin estudiarlas a fondo. Hoy muchas se reevaluan como modelos: agricultura andina, navegación afro-pacífica, balsa de guadua, medicina indígena.',
      ejemplo:
        'La balsa de guadua resiste sismos mejor que muchos edificios modernos. Por eso ingenieros japoneses estudian su diseño. Lo "atrasado" del sur es lo que el norte necesita aprender.',
      emoji: '🌎',
    },
    {
      termino: 'Soberanía narrativa',
      definicion:
        'El derecho y la capacidad de contar la historia desde tu lugar, con tus criterios, sin necesidad de pedir permiso. Aplicado a la técnica: construir tu propia cronología.',
      ejemplo:
        'Cuando incluyes la cerámica Quimbaya al lado de la imprenta de Gutenberg, ejerces soberanía narrativa: no estás "completando" una lista oficial, estás construyendo una propia.',
      emoji: '✍️',
    },
    {
      termino: 'Invento vs adopción',
      definicion:
        'Inventar algo no es lo mismo que su adopción. La rueda existió en América precolombina (en juguetes) sin difundirse al transporte. La imprenta existió en China antes que en Europa. La diferencia explica por qué un hito se vuelve hito.',
      ejemplo:
        'Los chinos inventaron la imprenta de tipos móviles 400 años antes que Gutenberg. Pero la imprenta cambió Occidente porque ahí se adoptó masivamente. Inventar es solo el primer paso.',
      emoji: '🌱',
    },
    {
      termino: 'Perdurabilidad vs moda',
      definicion:
        'Una tecnología puede ser muy popular hoy y desaparecer en 10 años. Una puede ser silenciosa y durar siglos. La perdurabilidad — no la novedad — es la prueba de un hito.',
      ejemplo:
        'Facebook tuvo 2000 millones de usuarios. ¿Estará en la línea de tiempo en 2100? Difícil. La rueda lleva 5000 años — claramente hito. La diferencia es duración del efecto, no del producto.',
      emoji: '⏳',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tres listas, tres miradas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 3 listas distintas de "inventos o hitos técnicos importantes": (a) global (Wikipedia, BBC), (b) latinoamericana, (c) local (inventos colombianos o tecnología indígena).',
        'Anota los 5 primeros hitos de cada lista.',
        'Compara: ¿qué se repite, qué cambia, qué desaparece?',
        'Cierra con 1 párrafo: ¿qué tipo de hito predomina en cada lista (industrial, agrícola, digital, ancestral)?',
      ],
      cuaderno: {
        titulo: 'Tres listas, tres miradas',
        formato: 'Tabla 3 columnas (Lista global | Lista latinoamericana | Lista local) con 5 hitos cada una',
        extension: '3 columnas × 5 hitos + 1 párrafo de hallazgo',
      },
      criterios: [
        '3 listas distintas, de fuentes identificadas',
        'Al menos 3 hitos están en una y no en las otras',
        'Reconoces que las listas dependen de quién las escribe',
        'Identificaste qué tipo de hito predomina en cada una',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los 4 criterios para elegir hitos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada uno de los 4 criterios (invención, adopción, transformación, perdurabilidad) escribe una ficha.',
        'En cada ficha: definición en tus palabras + 1 ejemplo de hito que la cumple.',
        'En cada ficha: 1 "cuasi-hito" que incumple ese criterio (curiosidad histórica que no califica).',
        'Cierra explicando por qué un invento famoso (a tu elección) NO califica como hito por incumplir uno de los criterios.',
      ],
      cuaderno: {
        titulo: '4 criterios para elegir hitos',
        formato: '4 fichas con definición + ejemplo válido + cuasi-hito que incumple',
        extension: '4 fichas + 1 párrafo final',
      },
      criterios: [
        'Las 4 definiciones están en tus palabras',
        'Cada ficha tiene UN ejemplo de hito + UN cuasi-hito',
        'El párrafo final defiende por qué un "invento famoso" NO califica',
        'Puedes aplicar los 4 criterios sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu línea del tiempo personal',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Lista 20 hitos candidatos sin filtrar (lluvia de ideas, mezclando global y local).',
        'Aplica los 4 criterios a cada candidato; elimina los débiles hasta llegar a 10.',
        'Verifica que al menos 3 hitos vengan de Colombia o América Latina; si no, agrega.',
        'Ordena los 10 cronológicamente. Dibuja la línea en cuaderno o digital.',
        'Cierra con un cuadro de leyenda: ¿qué historia cuenta tu línea?',
      ],
      cuaderno: {
        titulo: 'Mi línea del tiempo de la técnica',
        formato: '(1) Línea dibujada con 10 hitos. (2) Ficha de cada hito (nombre + fecha + origen + transformación). (3) Cuadro de leyenda.',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        '10 hitos ordenados cronológicamente',
        'Cada hito tiene nombre + fecha + origen + transformación',
        'Al menos 3 hitos vienen de Colombia o América Latina',
        'Hay línea dibujada (no solo lista vertical)',
        'Cuadro de leyenda explica qué historia cuenta la línea',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la línea de tiempo de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee la línea de tiempo del compañero sin interrumpir.',
        'Califica del 1 al 5: (a) ¿hay al menos 3 hitos locales?, (b) ¿se cumplen los 4 criterios en cada hito?, (c) ¿el cuadro de leyenda es claro?',
        'Anota 1 hito que TÚ agregarías a su línea y 1 que TÚ quitarías, con justificación.',
        'Conversen 5 min: ¿coincidieron en valorar saberes locales o difirieron?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la línea de [nombre]',
        formato: '3 calificaciones con justificación + sugerencia de 1 hito a agregar y 1 a quitar',
        extension: '3 calificaciones + 2 sugerencias',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'La sugerencia de agregar es concreta y cumple los 4 criterios',
        'La sugerencia de quitar tiene razón (uno de los criterios no se cumple)',
        'La conversación cerró con 1 acuerdo o diferencia clara',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los criterios de hito',
      instrucciones:
        '5 preguntas para confirmar que sabes distinguir un hito real de una curiosidad histórica. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los 4 criterios para que algo sea un hito técnico?',
          opciones: [
            'Ser europeo, antiguo, famoso y útil',
            'Invención + adopción + transformación + perdurabilidad',
            'Tener Wikipedia, ser industrial, ser global, ser reciente',
            'Solo necesita ser inventado',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Un invento solo en un papel no es hito. Necesita ser adoptado por una comunidad, transformar la vida, y durar.',
          feedbackIncorrecto:
            'Los 4 criterios son: invención + adopción + transformación + perdurabilidad. Sin alguno, es invento sin adopción, novedad sin permanencia o curiosidad histórica.',
        },
        {
          enunciado: '¿Por qué la imprenta china (anterior a Gutenberg) no aparece en la mayoría de cronologías occidentales?',
          opciones: [
            'No existió',
            'Porque las cronologías oficiales están situadas — la europea privilegia inventos europeos',
            'Porque era de mala calidad',
            'Porque era secreta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La cronología está situada. La imprenta china fue real (siglo XI) — solo que la historia que aprendiste prioriza la europea (siglo XV). Reconocer eso es el primer acto crítico.',
          feedbackIncorrecto:
            'Las cronologías están situadas. La imprenta china existió 400 años antes que Gutenberg, pero las listas occidentales privilegian lo europeo. Eso es política, no hecho.',
        },
        {
          enunciado: '¿Por qué el iPhone 15 NO es un hito técnico?',
          opciones: [
            'Porque es caro',
            'Porque no es invención nueva — es una versión de un hito (el smartphone)',
            'Porque es de Apple',
            'Porque solo lo usa cierta gente',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. El smartphone sí es hito (cumple los 4 criterios). El iPhone 15 es solo una versión. Confundir producto con hito es error común.',
          feedbackIncorrecto:
            'El iPhone 15 no es hito porque no es invención nueva. Es una iteración del smartphone, que sí es hito. La distinción producto-categoría importa.',
        },
        {
          enunciado: '¿Qué tipo de tecnología latinoamericana hoy se reevalúa como modelo de sostenibilidad?',
          opciones: [
            'Ninguna',
            'Agricultura andina de andenes, navegación afro-pacífica, arquitectura en guadua',
            'Solo las industriales',
            'Solo las digitales',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Lo que llamaban "atrasado" hoy se estudia como modelo: andenes regeneran suelos, guadua resiste sismos, navegación afro-pacífica lee corrientes sin GPS.',
          feedbackIncorrecto:
            'Andenes andinos, guadua del Pacífico, navegación afro-pacífica. Tecnologías llamadas "atrasadas" que hoy son estudiadas por universidades del norte como modelos regenerativos.',
        },
        {
          enunciado:
            '¿Qué significa "soberanía narrativa" aplicada a la técnica?',
          opciones: [
            'Inventar tecnología nueva',
            'El derecho y capacidad de contar la historia técnica desde tu lugar, con tus criterios',
            'Tener Wikipedia propio',
            'Olvidar la historia europea',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Soberanía narrativa: cuentas tu historia técnica con tus criterios. No es olvidar lo europeo — es no estar obligado a centrarlo.',
          feedbackIncorrecto:
            'Soberanía narrativa: contar la historia con criterios propios. Es complementar y descentrar la cronología oficial, no negarla.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu línea del tiempo con un familiar mayor (abuelo, tío, papá, mamá). Pregúntale: "¿qué hito agregarías o quitarías?". Anota su respuesta. Esa conversación intergeneracional muchas veces da los hitos más valiosos que ningún libro tiene. El próximo lunes traemos esas respuestas al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda historia oficial se construye sobre las historias que decide invisibilizar.',
      preguntaEspejo:
        '¿Qué hitos técnicos de mi región conocía y por qué creo que no aparecen en las listas globales? ¿Qué cambia cuando los pongo al lado de la imprenta de Gutenberg?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No todo lo que pasa rápido es importante; no todo lo que dura mucho es valioso.',
      preguntaEspejo:
        'De las tecnologías de moda hoy, ¿cuáles creo que estarán en la línea de tiempo en 100 años? ¿Cuáles habrán desaparecido?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La historia es el primer dato; quien la organiza decide qué mundo es posible mañana.',
      preguntaEspejo:
        '¿Qué tipo de futuro técnico imagino, y cómo se relaciona con la historia que me enseñaron? ¿Podría imaginar otro si cambiara mi línea del tiempo?',
    },
  },

  cincoDimensiones: {
    personal:
      'Construiste una línea del tiempo de la técnica con criterios propios — no copia de Wikipedia.',
    emocional:
      'Sentiste que los saberes ancestrales de tu región no son curiosidades — son hitos al mismo nivel que la imprenta o el chip.',
    ciudadana:
      'Entendiste que las cronologías son políticas: lo que se nombra se vuelve real, lo que se omite se invisibiliza.',
    local:
      'Pusiste a la cerámica Quimbaya, los andenes andinos, la balsa de guadua al mismo nivel que los inventos europeos.',
    intergeneracional:
      'La conversación con un mayor sobre qué agregar a tu línea conecta la historia técnica con la memoria viva — la mejor fuente que hay.',
  },
};

export default contenido;
