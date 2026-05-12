/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 2
 * Tema: La página y la cuadrícula — primer principio del orden.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-2.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 2,
  titulo: 'La página y la cuadrícula — primer principio del orden',
  ocultarPDF: false,
  resumen:
    'Dibujas 3 grillas con propósito declarado (revista, póster, infografía). La cuadrícula es la columna vertebral invisible que sostiene toda página bien diseñada.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Cuadrícula',

  saberAncestral: {
    saber:
      'La cuadrícula no es invento moderno. La trazaron los romanos en sus campamentos, los pueblos andinos en sus chacras, los fundadores coloniales en Cartago (plano cuadrangular con plaza central, manzanas iguales), los tejedores wayuu en sus mantas (patrones geométricos repetidos con precisión). Toda comunidad que necesita organizar espacio invoca alguna forma de cuadrícula.',
    fuente: 'Plano colonial de Cartago, chacras andinas, mantas wayuu, campamentos romanos',
    preguntaPuente:
      '¿Por qué la cuadrícula del plano de Cartago sigue facilitando orientarte 500 años después? ¿Qué tienen en común esa cuadrícula y la de una revista bien diseñada?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Cuadrículas que organizan espacio', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Grillas reales (urbana, editorial, textil)', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '3 tipos de grilla editorial', duracionMin: 15 },
    { numero: 4, iconos: ['✏️'], titulo: '3 grillas dibujadas con propósito', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Sin cuadrícula, la página se siente caótica. Con grilla bien hecha, se siente tranquila y profesional aunque el lector nunca la vea. Toda revista del mundo (Economist, National Geographic, Time) usa grilla rigurosa. Tu próxima publicación en Instagram también puede usarla.',
    preguntaDetonante:
      'Si miraras tu feed de Instagram con criterio de diseñador, ¿qué cuadrícula está usando la plataforma? ¿Y cómo modelara la manera en que ves a tus amigos?',
    activacion: {
      titulo: 'Cuenta columnas',
      descripcion:
        'En 3 minutos, abre una revista o un sitio web (Wikipedia, BBC) y cuenta literalmente cuántas columnas tiene. ¿Son iguales o de tamaños diferentes? ¿Dónde van las imágenes? Ese conteo te entrena el ojo para ver lo invisible.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 1 viste los 3 pilares del diseño. Hoy bajas al primer principio operativo: la cuadrícula que sostiene todo lo demás.',
      siguiente:
        'En la sesión 3 le pondrás voz a la grilla con tipografía: par tipográfico para tu revista.',
    },
  },

  conceptosClave: [
    {
      termino: 'Grilla modular',
      definicion:
        'Cuadrícula de cajas iguales. Ideal para galerías de imágenes, dashboards, catálogos. Cada módulo es una unidad equivalente.',
      ejemplo:
        'El feed de Instagram en su versión clásica: cuadrícula 3×N. Cada celda igual al resto, dispuestas para que el ojo escanee sin priorizar.',
      emoji: '🟦',
    },
    {
      termino: 'Grilla columnar',
      definicion:
        '2-4-6 columnas verticales. Ideal para texto largo, revistas, periódicos. Las columnas pueden ser de igual o distinto ancho.',
      ejemplo:
        'Un periódico clásico: 4-6 columnas verticales que distribuyen titulares y cuerpo. Wikipedia: 1-2 columnas para lectura cómoda.',
      emoji: '📰',
    },
    {
      termino: 'Grilla jerárquica',
      definicion:
        'Zonas de tamaño desigual organizadas por importancia. Ideal para portadas, posters, páginas hero. Una zona "estrella" más grande, otras secundarias.',
      ejemplo:
        'La portada del New York Times: una foto grande con titular principal, varias notas secundarias en cajas más pequeñas. Jerarquía visible.',
      emoji: '⛰',
    },
    {
      termino: 'Márgenes',
      definicion:
        'Espacio en blanco entre el borde de la página y la grilla. Define el aire que respira la pieza. Márgenes generosos comunican calma; estrechos comunican urgencia.',
      ejemplo:
        'Un libro de poesía suele tener márgenes anchos (calma, contemplación). Un periódico tabloide tiene márgenes mínimos (información apretada, urgencia).',
      emoji: '⬜',
    },
    {
      termino: 'Gutter (calle)',
      definicion:
        'Espacio vertical entre columnas. Permite que el ojo distinga una columna de la siguiente sin que se mezclen las líneas.',
      ejemplo:
        'En una revista a 3 columnas, el gutter es de 10-20px. Sin gutter, las palabras de una columna se leerían como continuación de la otra.',
      emoji: '↔',
    },
    {
      termino: 'Invisible cuando funciona',
      definicion:
        'Una grilla bien hecha NO se nota — solo se nota cuando falla. Si tu lector ve la grilla como decoración, fallaste. La grilla es estructura, no espectáculo.',
      ejemplo:
        'En The Economist (180 años de grilla rigurosa), nadie ve la cuadrícula. Solo ve que la revista "se siente clara". Eso es señal de éxito.',
      emoji: '👻',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 cuadrículas que organizan espacio',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca imagen del plano de Cartago colonial (o cualquier ciudad latinoamericana colonial).',
        'Busca una página de revista impresa o digital con grilla visible.',
        'Busca imagen de un tejido wayuu o manta indígena con patrón geométrico.',
        'Para cada uno: cuenta columnas o módulos, identifica qué se ubica en cada zona, decide si la grilla es visible o invisible.',
      ],
      cuaderno: {
        titulo: '3 cuadrículas que organizan espacio',
        formato: 'Tabla 4 columnas (Ejemplo | Columnas/módulos | Qué contiene cada zona | ¿Visible o invisible?), 3 filas',
        extension: '3 filas + 1 línea final con tu hallazgo',
      },
      criterios: [
        '3 ejemplos distintos identificados (urbano + editorial + textil)',
        'Conté columnas o módulos en cada uno',
        'Reconozco que la grilla funciona mejor cuando casi no se nota',
        'Identifiqué qué se ubica en cada zona de la grilla',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '3 tipos de cuadrículas editoriales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada tipo (modular, columnar, jerárquica) escribe una ficha con descripción en tus palabras.',
        'En cada ficha: nombra 1 producto editorial donde aparece (puedes usar los de Actividad 1 o nuevos).',
        'Indica qué tipo de contenido organiza bien cada grilla.',
        'Cierra con 1 párrafo: si tuvieras que diseñar tu revista del periodo, ¿qué tipo de grilla elegirías y por qué?',
      ],
      cuaderno: {
        titulo: '3 tipos de cuadrículas',
        formato: '3 fichas con descripción + producto + tipo de contenido + 1 párrafo final',
        extension: '3 fichas + 1 párrafo',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene un producto editorial real como ejemplo',
        'Puedes recomendar qué grilla usar para un propósito dado',
        'Identificaste qué grilla usarías para tu revista',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: '3 grillas dibujadas con propósito declarado',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'En hoja A4 #1: dibuja grilla para "página de portada de revista" (jerárquica). Declara propósito arriba.',
        'En hoja A4 #2: dibuja grilla para "póster de evento del colegio" (jerárquica o modular). Declara propósito.',
        'En hoja A4 #3: dibuja grilla para "infografía de un tema" (modular o columnar). Declara propósito.',
        'En cada una: márgenes con lápiz suave, columnas/módulos delineados, bloques de contenido etiquetados (titular, imagen, cuerpo, llamada a la acción).',
      ],
      cuaderno: {
        titulo: '3 grillas editoriales aplicadas',
        formato: '3 hojas A4 con grilla dibujada + bloques etiquetados + propósito declarado',
        extension: '3 hojas A4',
      },
      criterios: [
        '3 grillas distintas en 3 hojas A4',
        'Cada grilla tiene propósito declarado y tipo identificado',
        'Bloques de contenido ubicados y etiquetados',
        'Márgenes consistentes y visibles',
        'Las 3 son distintas entre sí (no variaciones menores)',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa las grillas de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia las 3 grillas con un compañero. Míralas SIN que te explique.',
        'Califica del 1 al 5: (a) ¿el propósito se entiende solo con ver la grilla?, (b) ¿los bloques están bien etiquetados?, (c) ¿las 3 son distintas entre sí?',
        'Marca con ✨ la grilla más clara y con 🚩 la más confusa.',
        'Conversen 5 min: ¿qué grilla usarían para su revista personal? ¿Coinciden?',
      ],
      cuaderno: {
        titulo: 'Evaluación de las grillas de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste la grilla más clara y la más confusa',
        'La observación es constructiva',
        'La conversación cerró con acuerdo sobre grilla preferida',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los tipos de grilla',
      instrucciones:
        '5 preguntas para confirmar que distingues los 3 tipos de cuadrícula y los aplicas con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué tipo de grilla es ideal para una galería de imágenes o un catálogo de productos?',
          opciones: ['Modular', 'Columnar', 'Jerárquica', 'Sin grilla'],
          respuestaIndex: 0,
          feedbackCorrecto:
            'Correcto. La grilla modular (cajas iguales) es perfecta para galerías y catálogos porque cada elemento tiene el mismo peso visual.',
          feedbackIncorrecto:
            'Modular. Cuando todos los elementos tienen el mismo peso visual (productos en un catálogo, fotos en un feed), la grilla modular funciona mejor.',
        },
        {
          enunciado: '¿Cuál es la señal de que una grilla está BIEN diseñada?',
          opciones: [
            'Que se vea bonita',
            'Que el lector la note',
            'Que sea invisible — no se note, solo organice',
            'Que tenga muchas columnas',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. La grilla bien hecha es invisible. El lector solo percibe que la página "se siente clara". Si nota la grilla como decoración, fallaste.',
          feedbackIncorrecto:
            'Invisible. La grilla es estructura, no espectáculo. Si el lector ve la grilla en vez del contenido, la grilla está mal.',
        },
        {
          enunciado: 'En una revista a 3 columnas, ¿qué es el "gutter"?',
          opciones: [
            'El borde de la página',
            'El espacio vertical entre columnas',
            'El título principal',
            'El logo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. El gutter es la "calle" entre columnas. Sin él, las palabras de una columna se mezclan con las de la otra y la lectura se rompe.',
          feedbackIncorrecto:
            'Gutter = espacio entre columnas. Si no existe, las líneas de una columna se confunden con las de la siguiente. Suele ser 10-20px.',
        },
        {
          enunciado: '¿Qué transmiten márgenes generosos (mucho espacio en blanco)?',
          opciones: ['Pobreza', 'Calma y aire para respirar', 'Falta de contenido', 'Pereza'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Márgenes amplios = calma, aire, respeto por la atención del lector. Por eso Apple los usa: comunica premium sin decirlo.',
          feedbackIncorrecto:
            'Márgenes generosos = calma, aire, premium. Por eso los libros de poesía y las marcas de lujo los usan. Lo apretado comunica urgencia o tabloide.',
        },
        {
          enunciado:
            'En el saber ancestral del plano colonial de Cartago, ¿qué aplica directamente a tu revista digital?',
          opciones: [
            'Nada — los planos coloniales son del pasado',
            'Que una cuadrícula bien pensada organiza el espacio durante siglos y facilita orientarse sin esfuerzo',
            'Que solo los conquistadores diseñaban',
            'Que las ciudades viejas son confusas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El plano de Cartago facilita orientarte 500 años después gracias a su cuadrícula. Tu revista bien grillada será fácil de navegar.',
          feedbackIncorrecto:
            'Cuadrícula bien pensada = orientación durable. Cartago colonial y revista bien diseñada comparten el principio: estructura invisible que organiza.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, mira el feed de Instagram, TikTok o YouTube con mente de diseñador. ¿Qué cuadrícula usa la plataforma? ¿Cómo cambiarías el orden, jerarquía, espacio si la diseñaras tú? Anota 3 ideas. El próximo lunes traemos esas ideas — son insumo de la sesión 3.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda cuadrícula impuesta organiza el espacio pero también disciplina al cuerpo que la habita.',
      preguntaEspejo:
        '¿Qué cuadrículas (físicas o digitales) habito sin haberlas elegido? ¿Cómo me disciplinan sin que lo note?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que respeta su estructura sobrevive las modas; lo que la rompe sin entenderla, naufraga rápido.',
      preguntaEspejo:
        '¿Qué estructura subyacente respeto en mi trabajo y cuál rompo solo por afán de novedad? ¿Cuál merece respetar y cuál merece romper?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las cuadrículas digitales no solo organizan páginas: organizan la atención humana a escala global.',
      preguntaEspejo:
        '¿Qué cuadrículas digitales modelan mi atención hoy (feed, dashboard, grilla de Netflix)? ¿Las elegí o me las impusieron?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a ver la cuadrícula invisible que sostiene toda página bien diseñada — herramienta para toda tu vida.',
    emocional:
      'Sentiste la disciplina del orden: cómo lo estructurado puede liberar la lectura en vez de oprimirla.',
    ciudadana:
      'Reconociste que las grillas digitales (feed, dashboard) modelan tu atención y eso es político, no neutral.',
    local:
      'Conectaste el plano colonial de Cartago, las chacras andinas y las mantas wayuu como antecedentes del oficio de grillar.',
    intergeneracional:
      'La cuadrícula es decisión humana milenaria — desde Roma y los Andes hasta tu próximo dashboard. Heredas tradición de organización del espacio.',
  },
};

export default contenido;
