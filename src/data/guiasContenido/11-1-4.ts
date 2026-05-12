/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 4
 * Tema: Plantillas web — elegir y adaptar sin perderse uno mismo.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-4.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 4,
  titulo: 'Plantillas web — elegir y adaptar sin perderse uno mismo',
  ocultarPDF: false,
  resumen:
    'Eliges una plantilla profesional, la adaptas con tu identidad y la publicas en GitHub Pages. Por primera vez tu marca tiene URL pública.',
  duracionMin: 100,
  subtema: 'Presencia y marca digital · Plantillas y publicación',

  saberAncestral: {
    saber:
      'Los oficios heredados se aprenden con moldes: la receta de la abuela, el corte del sastre, el patrón del tejedor, las décimas del Pacífico. El maestro no enseña con palabras: enseña con un molde que el aprendiz debe usar primero igual, y después adaptar a su mano. Lo que cambia es la firma; lo que se conserva es la estructura.',
    fuente: 'Tradición de oficios y moldes en el Valle del Cauca y el Pacífico colombiano',
    preguntaPuente:
      '¿Qué se mantiene y qué cambia cuando tú haces la receta de tu abuela? ¿Qué la sigue convirtiendo en esa receta y no en una copia genérica?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El molde y la firma', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Tres plantillas comparadas', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de una buena adaptación', duracionMin: 15 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Adapta y publica tu sitio', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 17 },
  ],

  preLectura: {
    porQueImporta:
      'Las plantillas son moldes profesionales que aceleran tu trabajo. Usarlas tal cual te invisibiliza; adaptarlas con tu identidad —tus colores, tu copy, tus historias— es un acto pequeño de soberanía digital. Hoy tu marca pasa de archivo local a URL pública.',
    preguntaDetonante:
      'Si dos personas usan la misma plantilla, ¿en qué se va a notar que un sitio es tuyo y el otro de otra persona?',
    activacion: {
      titulo: 'El mismo molde, distinta firma',
      descripcion:
        'En 4 minutos abre 3 sitios de tu universidad o colegio que evidentemente usan la misma plantilla. Anota qué se nota igual y qué se nota distinto en cada uno. Esa diferencia es lo que vas a buscar en tu propia adaptación.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 3 construiste el index.html con estructura semántica clara: la casa digital ya tenía planos.',
      siguiente:
        'En la sesión 5 usarás IA para redactar el copy comercial de tu sitio: inicio, servicios, preguntas frecuentes.',
    },
  },

  conceptosClave: [
    {
      categoria: '🧰 Las 4 decisiones de adaptación',
      termino: 'Conservar',
      definicion:
        'Lo que se queda igual: estructura semántica, layout principal, sistema de grilla. No reinventes la rueda — eso es lo que te da la plantilla.',
      ejemplo:
        'Si la plantilla tiene un layout de 3 columnas para servicios, consérvalo. Es el esqueleto probado.',
      emoji: '🏛',
    },
    {
      categoria: '🧰 Las 4 decisiones de adaptación',
      termino: 'Cambiar',
      definicion:
        'Lo que se personaliza: paleta y tipografía a las tuyas (Guía 2), copy a tu voz, fotos por imágenes reales tuyas.',
      ejemplo:
        'El azul tech de la plantilla por tu naranja Valle. El "Welcome to my site!" por tu propuesta de valor.',
      emoji: '✏️',
    },
    {
      categoria: '🧰 Las 4 decisiones de adaptación',
      termino: 'Agregar',
      definicion:
        'Un detalle único de tu marca que no estaba en la plantilla: un símbolo, un microcopy, una sección propia, un easter egg.',
      ejemplo:
        'Una pequeña sección "Por qué Cartago" o un microcopy en español del Valle que ninguna plantilla traerá nunca.',
      emoji: '✨',
    },
    {
      categoria: '🧰 Las 4 decisiones de adaptación',
      termino: 'Eliminar',
      definicion:
        'Las secciones genéricas que la plantilla trae y tú no necesitas. Menos es más — eliminar lo que sobra acelera la lectura del visitante.',
      ejemplo:
        'Si la plantilla trae 6 secciones y tú solo necesitas 3, borra las otras 3. No las dejes "por si acaso".',
      emoji: '🗑',
    },
    {
      categoria: '🚀 Despliegue público',
      termino: 'GitHub Pages',
      definicion:
        'Servicio gratuito de GitHub que publica los archivos de un repositorio como sitio web público con URL fija.',
      ejemplo:
        'Tu repo "tunombre.github.io" se publica automáticamente como tunombre.github.io. Cualquiera con internet lo abre.',
      emoji: '🌐',
    },
    {
      categoria: '🚀 Despliegue público',
      termino: 'Patrón 70-20-10',
      definicion:
        'Proporción saludable de una buena adaptación: ~70% queda como la plantilla (estructura), ~20% se personaliza (colores, copy), ~10% se agrega o quita.',
      ejemplo:
        'Si cambias el 80%, rompes la coherencia de la plantilla. Si cambias el 5%, no se nota que es tuya.',
      emoji: '⚖️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Tres plantillas, qué tienen en común',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Visita 3 sitios construidos sobre plantillas: catálogos de GitHub Pages templates, Carrd showcase o Astro themes.',
        'Para cada plantilla: ¿qué partes son intercambiables (logo, paleta, tipografía, fotos)?',
        'Para cada plantilla: ¿qué partes son estructura fija (orden de secciones, jerarquía)?',
        'Toma nota del nombre y URL de la plantilla que más se acerca a tu marca.',
      ],
      cuaderno: {
        titulo: 'Tres plantillas comparadas',
        formato:
          'Tabla 4 columnas (Plantilla | URL | Partes intercambiables | Partes fijas), 3 filas. Al final 1 párrafo justificando tu elección.',
        extension: '3 filas + 1 párrafo de 3-4 renglones',
      },
      criterios: [
        'Las 3 plantillas son de catálogos distintos',
        'Cada celda nombra elementos concretos',
        'La plantilla elegida es coherente con tu paleta y tipografía de la Guía 2',
        'La justificación menciona al menos un elemento de tu manifiesto',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Plan de adaptación de tu plantilla',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma la plantilla elegida y divídela mentalmente en 4 columnas: Conservar · Cambiar · Agregar · Eliminar.',
        'En Conservar lista 3-5 elementos estructurales que te quedas como vinieron.',
        'En Cambiar lista 3-5 elementos específicos a reemplazar (color X por color Y, copy genérico por tu copy).',
        'En Agregar y Eliminar lista lo único de tu marca y lo que sobra.',
      ],
      cuaderno: {
        titulo: 'Plan de adaptación de mi plantilla',
        formato: 'Tabla de 4 columnas (Conservar | Cambiar | Agregar | Eliminar), 3-5 elementos por columna',
        extension: '4 columnas, 3-5 ítems por columna',
      },
      criterios: [
        'Cada ítem es concreto: "el azul #0066FF del navbar por mi naranja #FF6B35", no "el color"',
        'Las 4 columnas tienen contenido —ninguna queda vacía',
        'Hay al menos 1 elemento único en "Agregar" que no estaba en la plantilla',
        'Las decisiones son coherentes con tu paleta y tipografía de la Guía 2',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Publica tu sitio adaptado',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Haz fork de la plantilla elegida a tu cuenta de GitHub.',
        'Clona el repo local, ábrelo en VS Code y cambia paleta + tipografía a las tuyas (CSS variables o archivo de tema).',
        'Reemplaza todo el copy y las fotos placeholder por contenido real tuyo.',
        'Commit + push. Settings → Pages → main branch → save. Espera 1-2 min y abre la URL pública.',
        'Verifica en móvil con DevTools a 360 px y en pestaña incógnita.',
      ],
      cuaderno: {
        titulo: 'Mi sitio publicado',
        formato:
          '(1) URL pública en grande arriba. (2) Tabla de cambios aplicados. (3) Captura impresa o dibujada del home.',
        extension: 'URL + tabla + captura — 1 página',
      },
      criterios: [
        'La URL pública es accesible para cualquiera con internet',
        'Cero contenido placeholder: ni "Lorem ipsum", ni "John Doe", ni fotos de stock',
        'La paleta y tipografía coinciden con tu sistema visual (Guía 2)',
        'Se ve y navega bien en móvil',
        'Hay al menos UN detalle único que no estaba en la plantilla original',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el sitio publicado de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia URLs con un compañero. Abre la suya en pestaña incógnita en móvil (DevTools 360 px).',
        'Califica del 1 al 5: (a) ¿se nota su marca o parece la plantilla genérica?, (b) ¿el copy es propio y específico?, (c) ¿se ve bien en móvil?',
        'Escribe 1 observación que afirma (qué hace única su versión) y 1 que reta (qué todavía se siente plantilla).',
        'Conversen 5 minutos sin defenderse — solo escuchar.',
      ],
      cuaderno: {
        titulo: 'Evaluación del sitio publicado de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Las 3 calificaciones están con justificación de 1 línea',
        'La observación que afirma señala un detalle único concreto',
        'La observación que reta menciona algo específico que todavía se siente plantilla',
        'Verificaste el sitio en móvil real o emulado, no solo desktop',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los principios de adaptación',
      instrucciones:
        '5 preguntas para confirmar que distingues adaptar de copiar antes de publicar. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'En el patrón 70-20-10 de adaptación, ¿qué representa el 70%?',
          opciones: [
            'Lo que cambias',
            'Lo que conservas de la plantilla',
            'Lo que eliminas',
            'Lo que agregas único',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El 70% queda como vino la plantilla (estructura, layout). El 20% se personaliza, el 10% se agrega o quita.',
          feedbackIncorrecto:
            'El 70% se conserva. La plantilla es un molde probado; cambiar demasiado rompe su coherencia.',
        },
        {
          enunciado: '¿Cuál es el error más grave al usar una plantilla?',
          opciones: [
            'Cambiar los colores',
            'Dejar copy genérico tipo "Welcome to my site!"',
            'Cambiar la tipografía',
            'Eliminar una sección',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Dejar copy placeholder es la señal #1 de un sitio sin trabajar. El visitante lo nota en 3 segundos y cierra.',
          feedbackIncorrecto:
            'El copy genérico es el error mortal. "Welcome to my site!" o "John Doe" son banderas rojas que dicen "no me tomé el trabajo".',
        },
        {
          enunciado: 'Si dos personas usan la misma plantilla, ¿qué hace que un sitio sea reconocible como tuyo?',
          opciones: [
            'Que cambies la estructura HTML',
            'Tus decisiones de identidad: paleta, tipografía, copy, detalles únicos',
            'Que tenga más secciones',
            'Que sea más larga',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La identidad —tu paleta, tu voz, tus detalles únicos— es lo que firma tu adaptación. La estructura puede ser idéntica.',
          feedbackIncorrecto:
            'La identidad. Tu paleta + tipografía + copy + detalles únicos. La estructura HTML puede ser igual a la del compañero y aun así reconocerse como tuya.',
        },
        {
          enunciado: '¿Qué es GitHub Pages?',
          opciones: [
            'Un editor de código',
            'Servicio gratuito que publica los archivos de un repo como sitio web con URL pública',
            'Una red social para programadores',
            'Un sistema de control de versiones',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Publicas un repo y GitHub te da una URL pública gratuita. Ideal para sitios estáticos y portafolios.',
          feedbackIncorrecto:
            'GitHub Pages publica los archivos de un repo como sitio público con URL fija. Es gratis y soporta dominios estáticos.',
        },
        {
          enunciado:
            'En el saber ancestral del molde y la firma, ¿qué aplica directamente a adaptar una plantilla?',
          opciones: [
            'Nada — los moldes tradicionales no tienen que ver con la web',
            'Que la estructura se conserva (molde) y la firma personal cambia',
            'Que solo los maestros usan moldes',
            'Que los moldes son del pasado',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La receta de la abuela enseñada con molde y firma = la plantilla web adaptada con tu identidad.',
          feedbackIncorrecto:
            'Lo que conservas (estructura) es el molde; lo que cambias (identidad) es la firma. Mismo principio del oficio heredado.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu URL pública con 3 personas: un familiar, un compañero, un docente. Pídele a cada uno UNA observación. No discutas las observaciones: anótalas tal cual. La próxima guía empezamos con esas tres voces externas como insumo de redacción.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El sur global piensa desde su propia herida y desde ahí ofrece mundo.',
      preguntaEspejo:
        '¿Mi sitio publicado se siente como un sitio del Valle o como un clon de plantilla global? ¿Qué señales locales le agregué?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Algunas cosas dependen de nosotros y otras no — distinguir esto es la libertad.',
      preguntaEspejo:
        '¿Estoy ejerciendo mi libertad sobre la plantilla, o me dejé llevar por todo lo que venía? ¿Qué partes son auténticamente mías?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La estandarización facilita la cooperación; la diversidad sostiene la riqueza informacional.',
      preguntaEspejo:
        '¿Mi adaptación aporta diversidad a la infoesfera o solo replica un patrón estándar? ¿Qué de mi sitio enriquece el panorama digital común?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de tener una marca en cuaderno a tener una marca con URL pública: tu primera presencia real en la web.',
    emocional:
      'Sentiste lo que cuesta publicar algo público y la satisfacción de hacerlo con criterio, no improvisando.',
    ciudadana:
      'Te sumaste a la infoesfera pública aportando un sitio propio en vez de un clon más de plantilla genérica.',
    local:
      'Llevaste señales del Valle —colores, copy en español de Colombia, referencias locales— a un molde diseñado en otra parte.',
    intergeneracional:
      'Tu URL queda en internet — los archivos del futuro la leerán. Es tu primera huella permanente en la web.',
  },
};

export default contenido;
