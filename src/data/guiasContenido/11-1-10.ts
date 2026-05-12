/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 10 (cierre)
 * Tema: Lanzamiento P1 — mi presencia digital sale al mundo.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-10.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 10,
  titulo: 'Lanzamiento P1 — mi presencia digital sale al mundo',
  ocultarPDF: false,
  resumen:
    'Cierras el Periodo 1: anuncias tu sitio en 3 redes, abres tu bitácora de marca y aceptas que empezar imperfecto siempre vence a esperar perfecto.',
  duracionMin: 100,
  subtema: 'Cosecha · Cierre del Periodo 1',

  saberAncestral: {
    saber:
      'La inauguración del taller era un ritual del oficio. El carpintero, panadero o sastre que terminaba su aprendizaje y abría su propio espacio para el barrio invitaba a los vecinos, al maestro que lo enseñó, a la familia. Había nervios, errores, curiosos que asomaban. Pero el ritual mismo —abrir las puertas, anunciar el oficio, recibir la primera mirada externa— era más importante que la perfección. Lo importante era empezar; el resto se aprende sirviendo a los primeros clientes.',
    fuente: 'Tradición de la inauguración del taller en pueblos del Valle y el Pacífico',
    preguntaPuente:
      '¿Qué de los antiguos rituales de inauguración del taller sigue siendo necesario hoy para lanzar una marca? ¿Por qué empezar imperfecto venció a esperar perfecto?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La inauguración del taller', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: '3 lanzamientos que admiras', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Empezar imperfecto vence a esperar perfecto', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Tu lanzamiento real + bitácora', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Cosecha, reflexiona y cierra el P1', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Nueve guías te trajeron hasta aquí. Tienes manifiesto, sistema visual, sitio publicado, copy, SEO, imagen, LinkedIn y métricas. Hoy abres las puertas del taller. El error más común no es lanzar mal — es no lanzar.',
    preguntaDetonante:
      'Si tu yo de hace 10 semanas viera tu sitio hoy, ¿qué sentiría? Y si tu yo de dentro de 1 año mira lo que NO publicaste por miedo a la imperfección, ¿qué te diría?',
    activacion: {
      titulo: 'El test del año perdido',
      descripcion:
        'En 3 minutos, escribe 3 proyectos personales que postergaste alguna vez "hasta que estén perfectos" y nunca lanzaste. Mira esa lista. Esa lista es contra lo que vas a luchar hoy — porque lo que NO publicas no existe en la infoesfera.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 9 instalaste métricas. Ya tienes ojos para leer lo que pase después del lanzamiento.',
      siguiente:
        'En el Periodo 2 arrancas Automatización y procesos. La presencia digital queda viva — la mejoras desde la práctica.',
    },
  },

  conceptosClave: [
    {
      termino: 'v1 honesto > v0 perfecto',
      definicion:
        'Una primera versión sencilla pero publicada hoy es más valiosa que una versión perfecta planificada para el próximo año. La perfección es enemiga del lanzamiento.',
      ejemplo:
        'Tu sitio v1 con 3 secciones publicado hoy genera más aprendizaje que tu sitio "perfecto" de 10 secciones que sigue en borrador 6 meses después.',
      emoji: '🚀',
    },
    {
      termino: 'Las 4 razones para empezar imperfecto',
      definicion:
        'Aprendizaje (feedback real), tiempo (compounding semanal), visibilidad (existencia en infoesfera), ego (esperar la perfección es miedo disfrazado de criterio).',
      ejemplo:
        'Cada mes que esperas, otro lanza imperfecto, recibe feedback, ajusta, y avanza 4 ciclos delante de ti. El compounding del lanzamiento es real.',
      emoji: '⏳',
    },
    {
      termino: 'Post de lanzamiento (anatomía)',
      definicion:
        '5 piezas mínimas: gancho que detenga el scroll + propuesta de valor + audiencia + pequeña acción solicitada + enlace al sitio. Sin alardes, sin disculpas.',
      ejemplo:
        '"Estuve 10 semanas construyendo esto. Ayudo a [audiencia] a [resultado]. Si te sirve, échale una mirada y dime qué piensas → [URL]".',
      emoji: '📝',
    },
    {
      termino: 'Adaptación, no copia (3 redes)',
      definicion:
        'El mismo mensaje base pero ajustado al tono y formato de cada red. LinkedIn más texto, Instagram más imagen, WhatsApp más cercano.',
      ejemplo:
        'LinkedIn: texto largo + reflexión. Instagram: imagen + caption breve. WhatsApp grupo cercano: texto en voz íntima de tu propio círculo.',
      emoji: '🔁',
    },
    {
      termino: 'Bitácora de marca',
      definicion:
        'Cuaderno o documento donde anotas semana a semana qué pasó con tu marca: visitas, sorpresas, decisiones tomadas, aprendizajes. Sin bitácora, la marca no aprende.',
      ejemplo:
        'Lunes 7 PM, 15 minutos: ¿qué dijeron del lanzamiento? ¿cuántas visitas? ¿qué decisión tomo esta semana? Esa disciplina hace la diferencia.',
      emoji: '📓',
    },
    {
      termino: 'Cero disculpas',
      definicion:
        'Tu post de lanzamiento NO incluye "perdón por lo imperfecto" ni "apenas empiezo". Lanzar es lanzar — disculparte ANTES debilita lo que ofreces.',
      ejemplo:
        'Mal: "Disculpen lo simple, apenas empiezo en esto". Bien: "Aquí está, esto es lo que sé hacer. Si te sirve, escríbeme".',
      emoji: '🙅',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Cómo lanzaron 3 marcas que admiras',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca en LinkedIn o Instagram el primer post de 3 marcas o personas profesionales que admiras (revisa publicaciones antiguas o busca "cuando lancé").',
        'Para cada lanzamiento: copy textual o paráfrasis, tono, reacciones, qué sentiste al leerlo.',
        'Identifica qué se sintió honesto vs qué se sintió inflado.',
        'Cierra con 1 párrafo: ¿qué patrón común tienen los 3 lanzamientos que funcionaron?',
      ],
      cuaderno: {
        titulo: '3 lanzamientos que admiro',
        formato: '3 fichas por marca con copy + tono + reacciones + lección personal',
        extension: '3 fichas + 1 párrafo del patrón común',
      },
      criterios: [
        'Los 3 lanzamientos son de profesionales que sí admiras (no famosos azar)',
        'Cada ficha tiene observación específica (no "estuvo bonito")',
        'Identificaste un patrón común aplicable a tu propio lanzamiento',
        'Hay al menos 1 lección personal por ficha',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Por qué empezar imperfecto vence a esperar perfecto',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada una de las 4 razones (aprendizaje, tiempo, visibilidad, ego) escribe una ficha.',
        'En cada ficha: argumento de 2-3 frases con tus palabras + ejemplo concreto de TU propia experiencia.',
        'Cierra reconociendo honestamente: ¿qué proyecto tuyo postergaste por perfeccionismo y todavía no lanzaste?',
        'Decide ahora si vas a lanzarlo en este Periodo o lo sueltas conscientemente.',
      ],
      cuaderno: {
        titulo: 'Por qué empezar imperfecto vence a esperar perfecto',
        formato: '4 fichas (aprendizaje/tiempo/visibilidad/ego) con argumento + ejemplo tuyo',
        extension: '4 fichas + 1 párrafo de reconocimiento honesto',
      },
      criterios: [
        'Cada razón tiene argumento en tus palabras (no copia)',
        'Cada ejemplo es de tu propia experiencia, no genérico',
        'Reconociste al menos 1 proyecto postergado por perfeccionismo',
        'Tomaste una decisión clara sobre ese proyecto (lanzarlo o soltarlo)',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu lanzamiento real + bitácora día 1',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Escribe el post LinkedIn primero (más texto): gancho + propuesta de valor + audiencia + pequeña acción + enlace + imagen profesional.',
        'Condénsalo a Instagram: caption breve + imagen + URL en bio.',
        'Adáptalo al tono cercano para tu grupo de WhatsApp más cercano.',
        'Publica los 3 posts en UNA hora — no acumules.',
        'Escribe la primera entrada de tu bitácora de marca: ¿cómo me siento? ¿qué reacción esperaba? ¿qué reacción recibí?',
      ],
      cuaderno: {
        titulo: 'Mi lanzamiento P1',
        formato: 'Las 3 versiones del post + entrada bitácora día 1 + capturas reales',
        extension: '3 posts + bitácora + capturas — 1 página de cuaderno',
      },
      criterios: [
        'Los 3 posts están publicados en redes reales (no en borrador)',
        'Cada post enlaza al sitio y tiene imagen profesional',
        'Cero disculpas por imperfección en los textos',
        'Primera entrada de bitácora escrita el mismo día del lanzamiento',
        'Has decidido un horario semanal fijo para la bitácora del próximo periodo',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el lanzamiento de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia URLs de los 3 posts con un compañero. Léelos sin que te explique.',
        'Califica del 1 al 5: (a) ¿gancho en la primera frase?, (b) ¿propuesta de valor clara?, (c) ¿cero disculpas por imperfección?',
        'Escribe 1 observación que afirma + 1 que reta sobre el post más fuerte y el más débil.',
        'Devuelve y conversen 5 min: ¿qué reacción tuvieron los 3 posts y qué decisión toma cada uno para la próxima publicación?',
      ],
      cuaderno: {
        titulo: 'Evaluación del lanzamiento de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones sobre el más fuerte y el más débil',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Identificaste el post más fuerte con razón concreta',
        'Identificaste el más débil con sugerencia accionable',
        'La conversación cerró con 1 aprendizaje compartido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Cierre del Periodo 1',
      instrucciones:
        '5 preguntas para cerrar P1 y confirmar que dominas el principio del lanzamiento sano. Necesitas 4/5 para sentir el cierre del periodo completo.',
      preguntas: [
        {
          enunciado: '¿Cuál es el error más grave en un post de lanzamiento?',
          opciones: [
            'Que sea muy corto',
            'Disculparte por la imperfección antes de mostrar lo que ofreces',
            'Que tenga imagen',
            'Que enlace a tu sitio',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. "Disculpen lo simple, apenas empiezo" debilita ANTES de mostrar. Lanzar es lanzar — sin disculpas.',
          feedbackIncorrecto:
            'Disculparte por la imperfección. Esa frase debilita el post antes de mostrar lo que ofreces. Lanza sin disculpas — el sitio habla por sí mismo.',
        },
        {
          enunciado: '¿Por qué empezar imperfecto vence a esperar perfecto?',
          opciones: [
            'Porque la imperfección es bonita',
            'Porque solo el lanzamiento real genera feedback real y aprendizaje compounding',
            'Porque es más rápido',
            'Porque es más fácil',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Sin lanzamiento no hay feedback; sin feedback no hay aprendizaje. Cada mes esperando es un mes sin compounding.',
          feedbackIncorrecto:
            'Solo el lanzamiento genera feedback real. Sin feedback no aprendes — y mientras esperas, otros avanzan 4 ciclos delante de ti.',
        },
        {
          enunciado: '¿Cuántas piezas mínimas tiene un post de lanzamiento sólido?',
          opciones: [
            '2: gancho + enlace',
            '5: gancho + propuesta de valor + audiencia + pequeña acción + enlace',
            '10: muchos detalles',
            'Las que sean necesarias',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. 5 piezas: gancho, propuesta de valor, audiencia, pequeña acción, enlace. Sin alguna, el post pierde fuerza.',
          feedbackIncorrecto:
            '5 piezas: gancho + propuesta de valor + audiencia + pequeña acción + enlace. Cada una cumple una función — quitar alguna debilita el post.',
        },
        {
          enunciado: '¿Qué es la "bitácora de marca"?',
          opciones: [
            'Un blog en tu sitio',
            'Cuaderno donde anotas semana a semana qué pasa con tu marca y qué decisión tomas',
            'Una herramienta de IA',
            'Tu calendario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Bitácora = cuaderno semanal de aprendizaje. Sin ella, la marca no aprende — recibe feedback y lo olvida.',
          feedbackIncorrecto:
            'Bitácora de marca: cuaderno semanal donde anotas qué pasó, qué te sorprendió y qué decides. Es lo que convierte feedback en aprendizaje.',
        },
        {
          enunciado:
            'En el saber del ritual de inauguración del taller, ¿qué aplica directamente a tu lanzamiento digital?',
          opciones: [
            'Nada — los talleres no tienen que ver con redes',
            'Que el ritual mismo (abrir las puertas, anunciar) es más importante que la perfección',
            'Que se servía comida',
            'Que se firmaba un contrato',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El maestro del taller no esperaba a ser perfecto: abría puertas, recibía la primera mirada, aprendía sirviendo a los primeros clientes. Mismo principio hoy.',
          feedbackIncorrecto:
            'El ritual mismo importa más que la perfección. El maestro abría con nervios, errores y curiosos. Tú haces lo mismo hoy, en formato digital.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana — y el cierre del Periodo 1. Lunes a las 7 PM, abre tu cuaderno de marca y escribe la bitácora semana 2: ¿qué dijeron del lanzamiento? ¿cuántas visitas tuviste? ¿qué decisión tomas para la próxima publicación? Esa disciplina semanal es lo que diferencia una marca real de una publicación aislada. Próximo lunes arrancamos el Periodo 2 — Automatización y procesos. Felicitaciones por terminar el primero.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda comunidad de comunicación se hace plena cuando incluye la voz del excluido.',
      preguntaEspejo:
        '¿Mi lanzamiento es una invitación a servir o una promoción de mí mismo? ¿A quién abro la puerta hoy y a quién la cierro sin querer?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El obstáculo en el camino se vuelve el camino.',
      preguntaEspejo:
        'Lo que salió mal del lanzamiento, ¿depende de mí corregirlo, o no? ¿Qué error concreto se convierte en lección si lo miro sin drama?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada lanzamiento añade un agente más a la infoesfera; cuídala como cuidas tu firma.',
      preguntaEspejo:
        '¿Mi lanzamiento aporta algo útil a la infoesfera o solo añade ruido? ¿Lo defenderé en 10 años?',
    },
  },

  cincoDimensiones: {
    personal:
      'Cerraste 10 semanas de construcción con un lanzamiento real — pasaste del cuaderno al mundo.',
    emocional:
      'Resististe la tentación del perfeccionismo y elegiste empezar con la disciplina de cero disculpas.',
    ciudadana:
      'Tu primer post define el tono de los próximos cien — eligió servir antes que destacar.',
    local:
      'Tu lanzamiento llevó señales del Valle a una infoesfera global que premia lo genérico — pequeña victoria.',
    intergeneracional:
      'Heredaste el ritual de inauguración del taller y lo actualizaste en formato 2026: el principio sobrevive.',
  },
};

export default contenido;
