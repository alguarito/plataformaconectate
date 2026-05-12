/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 6
 * Tema: Herramientas digitales — Figma, Canva o Adobe Express.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-6.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 6,
  titulo: 'Herramientas digitales — Figma, Canva o Adobe Express',
  ocultarPDF: false,
  resumen:
    'Diseñas la portada de tu revista en software real. La herramienta no reemplaza el criterio: lo amplifica si lo tienes, lo expone si no.',
  duracionMin: 95,
  subtema: 'Diseño editorial digital · Herramientas profesionales',

  saberAncestral: {
    saber:
      'El paso del taller físico al taller digital no cambió el oficio: cambió la herramienta. Los impresores antiguos del Valle dominaban la prensa de tipos móviles, los rodillos, las planchas. El tipógrafo de los 50 usaba linotipia: una máquina que componía líneas de plomo fundido. El oficio era duro, lento, costoso. Hoy Figma, Canva o Adobe Express son las nuevas linotipias: herramientas complejas que aceleran el oficio sin reemplazar el criterio.',
    fuente: 'Tradición de la imprenta y linotipia colombiana del siglo XX',
    preguntaPuente:
      '¿Qué herramienta digital ya usas (aunque sea Word, Google Docs o el editor de Instagram)? ¿En qué te ayuda y qué decisiones todavía dependen de tu criterio?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Del taller físico al digital', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: '3 herramientas comparadas', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 elementos básicos digitales', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Portada digital de tu revista', duracionMin: 38 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Figma, Canva y Adobe Express son gratuitas para uso individual. Eso significa que la barrera de acceso al diseño profesional es conexión + tiempo de aprendizaje, no dinero. Aprovechar esa ventana es soberanía técnica concreta.',
    preguntaDetonante:
      'Si tuvieras que enseñarle a tu hermana menor a usar UNA herramienta de diseño hoy, ¿cuál elegirías y por qué? Esa pregunta te dice mucho sobre tu propio criterio actual.',
    activacion: {
      titulo: 'Tour rápido de 3 sitios',
      descripcion:
        'En 3 minutos abre figma.com, canva.com y express.adobe.com en pestañas distintas. Mira los hero de cada página principal. ¿Qué prometen? ¿A qué tipo de usuario apuntan? La promesa de marketing te da pista sobre la lógica de la herramienta.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En las sesiones 1-5 construiste criterio editorial: grilla, tipografía, color, relación imagen-texto. Hoy llevas todo eso a software.',
      siguiente:
        'En la sesión 7 verás accesibilidad lectora: cómo asegurar que tu revista funcione para personas con baja visión, daltonismo o conexión lenta.',
    },
  },

  conceptosClave: [
    {
      termino: 'Figma',
      definicion:
        'Herramienta profesional de diseño y prototipado. Gratuita para individuos, paga para equipos grandes. Estándar de la industria tech. Curva de aprendizaje moderada pero recompensa con potencia.',
      ejemplo:
        'La mayoría de apps que usas (Instagram, Spotify, bancos digitales) se diseñaron en Figma. Es donde trabajan los diseñadores de Silicon Valley y Latinoamérica profesional.',
      emoji: '🎨',
    },
    {
      termino: 'Canva',
      definicion:
        'Herramienta más sencilla, con muchas plantillas listas. Ideal para principiantes y para producir piezas rápidas (posts de redes, presentaciones, infografías). Plan gratuito robusto.',
      ejemplo:
        'Si necesitas hacer una historia de Instagram en 5 minutos para un evento mañana, Canva es la opción. Tiene plantilla, tipografía, colores predefinidos.',
      emoji: '🌈',
    },
    {
      termino: 'Adobe Express',
      definicion:
        'Versión simplificada del ecosistema Adobe (que incluye Photoshop, Illustrator). Gratuita con cuenta, ofrece equilibrio entre poder y simplicidad. Buena para quien quiere migrar luego a Adobe profesional.',
      ejemplo:
        'Si planeas estudiar diseño formal después del colegio, empezar con Adobe Express prepara el camino al ecosistema profesional.',
      emoji: '✨',
    },
    {
      termino: 'Capas (layers)',
      definicion:
        'Cada elemento (texto, imagen, forma) es una capa independiente apilable. Mover una capa no afecta a otra. Aprender a pensar en capas es la primera habilidad digital editorial.',
      ejemplo:
        'En Figma o Canva, el titular es una capa, la imagen otra, el fondo otra. Puedes mover, ocultar, duplicar cualquiera sin tocar las demás.',
      emoji: '📚',
    },
    {
      termino: 'Lienzo (frame/artboard)',
      definicion:
        'La página de trabajo con tamaño definido. A4 vertical (210×297mm), Instagram post (1080×1080), historia (1080×1920). El tamaño correcto importa antes de empezar.',
      ejemplo:
        'Si diseñas una historia de Instagram en formato A4, al exportar quedará deforme. El lienzo correcto desde el principio te ahorra reproceso.',
      emoji: '🖼',
    },
    {
      termino: 'Exportación',
      definicion:
        'Formato final del archivo. JPG/PNG para web y redes. PDF para imprimir o compartir como documento. Cada formato sirve a un propósito distinto.',
      ejemplo:
        'Para enviar la portada por WhatsApp: JPG. Para imprimir la revista: PDF. Para subir a Instagram: PNG o JPG. Confundir formato es error frecuente.',
      emoji: '📤',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 herramientas digitales editoriales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Visita figma.com, canva.com y express.adobe.com.',
        'Para cada una identifica: tipo de usuario apuntado, costo (gratis/paga), tipo de pieza del primer ejemplo en home.',
        'Crea cuenta gratuita en la que más se acerque a tu necesidad real.',
        'Justifica la elección en 1 frase (no por moda, por necesidad).',
      ],
      cuaderno: {
        titulo: '3 herramientas editoriales digitales',
        formato: 'Tabla 4 columnas (Herramienta | Tipo de usuario | Costo | Mi impresión), 3 filas + elección final',
        extension: '3 filas + 1 frase de elección',
      },
      criterios: [
        'Visité las 3 páginas',
        'Comparé tipo de usuario, precios y ejemplos',
        'Creé cuenta gratuita en una de las 3',
        'Elección justificada por necesidad real, no por moda',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 elementos básicos digitales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (lienzo, capas, tipografía, exportación) escribe una ficha.',
        'En cada ficha: definición + cómo lo aplica la herramienta que elegiste.',
        'Agrega captura de pantalla o dibujo del menú correspondiente.',
        'Cierra con 1 párrafo: ¿cuál de los 4 elementos te parece más difícil aprender?',
      ],
      cuaderno: {
        titulo: '4 elementos de una herramienta digital editorial',
        formato: '4 fichas con definición + cómo lo aplica + captura/dibujo del menú',
        extension: '4 fichas + 1 párrafo final',
      },
      criterios: [
        'Cada ficha tiene definición + ubicación en la herramienta',
        'Hay captura o dibujo del menú',
        'Identificas qué elemento es más difícil para ti',
        'Puedes ubicar los 4 elementos en la herramienta sin titubear',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Portada digital de tu revista',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Crea lienzo A4 vertical en la herramienta elegida.',
        'Agrega grilla guía (en Figma: layout grid; en Canva: reglas).',
        'Ubica imagen principal (sube foto o usa ilustración elegida).',
        'Escribe titular con tu display tipográfica de Sesión 3.',
        'Aplica tu paleta de color de Sesión 4 (mínimo dominante + acento).',
        'Agrega datos de pie (nombre revista + número/fecha).',
        'Exporta como JPG o PDF.',
      ],
      cuaderno: {
        titulo: 'Mi portada digital de revista',
        formato: 'Captura impresa o dibujada de la portada + 1 párrafo de proceso',
        extension: '1 página',
      },
      criterios: [
        'Portada producida en software (Figma/Canva/Adobe Express)',
        'Tamaño A4 vertical o equivalente',
        'Tipografía display de Sesión 3 aplicada',
        'Paleta de color de Sesión 4 aplicada',
        'Imagen principal y titular dialogan',
        'Datos de pie completos',
        'Exportada en formato adecuado',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la portada digital de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia link o captura de la portada del compañero.',
        'Califica del 1 al 5: (a) ¿aplica el sistema visual establecido (paleta + tipografía)?, (b) ¿la imagen y el titular dialogan?, (c) ¿se ve profesional o se siente "plantilla genérica"?',
        'Marca con ✨ la decisión más fuerte y con 🚩 algo que sigue sintiéndose plantilla.',
        'Conversen 5 min: ¿qué les costó más en la herramienta?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la portada de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Marcaste decisión más fuerte y algo de plantilla',
        'La observación es constructiva',
        'La conversación cerró con aprendizaje compartido sobre la herramienta',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el oficio digital',
      instrucciones:
        '5 preguntas para confirmar que dominas la lógica básica de las herramientas editoriales digitales. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia principal entre Figma y Canva?',
          opciones: [
            'No hay diferencia',
            'Figma es más profesional y potente (curva mayor); Canva es más sencilla con plantillas listas',
            'Canva es paga, Figma gratis',
            'Figma es para video, Canva para imagen',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Figma = estándar profesional, curva mayor, más potente. Canva = más accesible, con plantillas. Ambas gratuitas para uso individual.',
          feedbackIncorrecto:
            'Figma: profesional, potente, curva. Canva: sencilla, plantillas, rápida. Ambas gratuitas. Eliges según necesidad y nivel.',
        },
        {
          enunciado: '¿Qué son las "capas" en una herramienta digital editorial?',
          opciones: [
            'El tamaño del lienzo',
            'Cada elemento (texto, imagen, forma) como objeto independiente apilable y editable',
            'Los colores de fondo',
            'Los archivos exportados',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Las capas son la base del modelo digital editorial. Cada elemento es independiente — puedes mover, ocultar, editar uno sin afectar otros.',
          feedbackIncorrecto:
            'Capas = elementos independientes apilables. El titular es una capa, la imagen otra, el fondo otra. Pensar en capas es la primera habilidad digital.',
        },
        {
          enunciado: '¿Qué tamaño de lienzo elijo para una historia de Instagram?',
          opciones: ['A4 vertical', '1080×1080 px', '1080×1920 px', 'No importa, se ajusta solo'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Historia de Instagram: 1080×1920 px (vertical). Post normal: 1080×1080 px (cuadrado). Elegir tamaño correcto desde el inicio evita reproceso.',
          feedbackIncorrecto:
            'Historias = 1080×1920 (vertical). Post normal = 1080×1080 (cuadrado). Si diseñas en A4 se deforma al exportar para Instagram.',
        },
        {
          enunciado: '¿Cuál es el principal "sesgo" que tienen herramientas como Canva?',
          opciones: [
            'No tienen sesgo',
            'Empujan al usuario a usar plantillas, lo que puede hacer que sus piezas se parezcan a las de otros usuarios',
            'Son demasiado complejas',
            'No funcionan en celular',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Canva tiene miles de plantillas, lo que es ventaja para velocidad pero riesgo de homogeneización. Reconocer ese sesgo te permite usarlo con criterio.',
          feedbackIncorrecto:
            'Canva sesga hacia plantillas. Eso te da velocidad pero homogeniza tu estética con la de millones de otros usuarios. Conocer el sesgo te permite resistirlo.',
        },
        {
          enunciado:
            'En el saber ancestral del tipógrafo de linotipia, ¿qué aplica directamente a tu uso de Figma o Canva hoy?',
          opciones: [
            'Nada — la linotipia es del pasado',
            'Que la herramienta es compleja y aprenderla bien toma tiempo, pero amplifica el oficio sin reemplazar el criterio',
            'Que el plomo es mejor',
            'Que las herramientas modernas son fáciles',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La linotipia exigía años de dominio; Figma exige meses. Pero ambas amplifican criterio editorial — no lo reemplazan. Sin criterio, la herramienta te traiciona.',
          feedbackIncorrecto:
            'Herramienta compleja + tiempo de aprendizaje + criterio del oficio. Lo mismo desde Gutenberg hasta Figma. Sin criterio editorial, la herramienta es solo software costoso.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana haz una segunda versión de tu portada cambiando UN solo elemento (color principal, tipografía, posición de la imagen, titular). Compara las dos versiones. Anota cuál se siente mejor y por qué. Ese ejercicio de iteración es lo que separa al diseñador del usuario de plantillas.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El acceso a las herramientas profesionales es la nueva alfabetización del XXI; quien no las domina depende del que las domina.',
      preguntaEspejo:
        '¿Estoy aprovechando la ventana actual de acceso gratuito a herramientas profesionales? ¿O me limito a las herramientas básicas porque "son más fáciles"?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Aprende a usar la herramienta sin que ella te use a ti.',
      preguntaEspejo:
        'Cuando uso una herramienta digital, ¿estoy decidiendo yo o estoy siguiendo lo que la herramienta me sugiere? ¿Dónde está el criterio?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las plataformas digitales no son neutrales: cada una organiza la creación según su propia lógica económica y estética.',
      preguntaEspejo:
        '¿Mis trabajos en Canva se parecen a otros trabajos en Canva? ¿Y mis trabajos en Figma a otros en Figma? ¿Cuál es mi voz propia más allá de la herramienta?',
    },
  },

  cincoDimensiones: {
    personal:
      'Diste el salto del cuaderno al software — produjiste tu primera pieza editorial digital con criterio propio.',
    emocional:
      'Resististe la tentación de "usar plantilla y listo" — elegiste aprender la herramienta con criterio.',
    ciudadana:
      'Aprovechaste el acceso gratuito a herramientas profesionales — soberanía técnica práctica.',
    local:
      'Heredaste el oficio del tipógrafo de linotipia colombiano: dominar herramienta compleja como ampliación del criterio.',
    intergeneracional:
      'La prensa de Gutenberg, la linotipia de los 50, y Figma de hoy son la misma cadena de oficio. Tú eres el siguiente eslabón.',
  },
};

export default contenido;
