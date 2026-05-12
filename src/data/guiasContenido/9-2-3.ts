/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 3
 * Tema: Tipografía — la voz visible de las palabras.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-3.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 3,
  titulo: 'Tipografía — la voz visible de las palabras',
  ocultarPDF: false,
  resumen:
    'Clasificas 10 tipografías reales y eliges tu par tipográfico (display + cuerpo) para la revista del periodo, justificado en 1 frase.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Par tipográfico',

  saberAncestral: {
    saber:
      'Antes de la tipografía digital existió la caligrafía: rótulos de barberías y panaderías del Valle pintados a mano, letras de las décimas del Pacífico, escritura cuidada de registros parroquiales, cartas de amor de tu abuela con su letra inconfundible. Cada tipografía digital hereda gestos de mano humana: una letra con serifa serenamente curvada viene del trazo de la pluma sobre pergamino.',
    fuente: 'Caligrafía popular del Valle, décimas del Pacífico, escritura parroquial',
    preguntaPuente:
      '¿Por qué la letra de tu abuela en una carta antigua se "ve cálida"? ¿Y por qué algunas tipografías digitales transmiten lo mismo y otras no?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Caligrafía y voz visible', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: '10 tipografías bajo la lupa', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 ejes de clasificación tipográfica', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Par tipográfico de tu revista', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Elegir tipografía define la voz visible de tus palabras. Una con serifa se siente clásica; una sin serifa, moderna; una display, dramática. Tu par tipográfico moldea cómo el lector recibe tu mensaje antes de leerlo. Es decisión editorial mayor, no estética menor.',
    preguntaDetonante:
      'Si tu revista pudiera "sonar" como una voz humana, ¿qué voz tendría? (¿la de una abuela, la de un poeta, la de un científico, la de un activista?) Tu par tipográfico es esa voz.',
    activacion: {
      titulo: 'Test de 3 tipografías',
      descripcion:
        'En 3 minutos, ve a fonts.google.com y escribe la misma palabra (tu nombre o "revista") en 3 tipografías muy distintas: Playfair Display, Inter, Bricolage Grotesque. Mira las 3 versiones. ¿Cuál te suena a ti? Esa diferencia es la voz visible.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 2 dibujaste 3 grillas con propósito. Hoy le pones voz a esa grilla con tipografía: par display + cuerpo.',
      siguiente:
        'En la sesión 4 verás el color editorial — paleta de 5 colores justificada. Con grilla + tipografía + color, tu revista tendrá sistema visual completo.',
    },
  },

  conceptosClave: [
    {
      termino: 'Display vs cuerpo',
      definicion:
        'Display: tipografías llamativas, con personalidad, ideales para titulares grandes (36pt+). Cuerpo: tipografías legibles, neutras, ideales para texto largo (10-12pt). Usar la incorrecta es error frecuente.',
      ejemplo:
        'Playfair Display = display (titular). Inter = cuerpo (texto). Si pones Playfair en 11pt para cuerpo, cansa la vista. Si pones Inter en titular, se siente plano.',
      emoji: '🎤',
    },
    {
      termino: 'Con serifa vs sin serifa',
      definicion:
        'Con serifa: tiene "pies" en las letras (Times, Garamond, Lora). Sensación clásica, autorizada, ideal lectura larga. Sin serifa: limpia, geométrica (Inter, Helvetica, Roboto). Sensación moderna, neutra, ideal pantalla.',
      ejemplo:
        'Periódico tradicional impreso: serifa. App moderna: sin serifa. La elección comunica antes de que se lea una palabra.',
      emoji: '🅰',
    },
    {
      termino: 'Geométrica vs humanista',
      definicion:
        'Geométrica: trazos uniformes basados en círculos perfectos (Futura, Avenir). Humanista: trazos con variación que evocan la mano (Source Sans, Garamond). La humanista se siente cálida; la geométrica, fría y precisa.',
      ejemplo:
        'Logo de muchas tecnológicas: geométrica (sensación "futuro"). Tipografía de libro de poesía: humanista (sensación "humano").',
      emoji: '⚪',
    },
    {
      termino: 'Par tipográfico',
      definicion:
        'Combinación de UNA display (para titulares) + UNA cuerpo (para texto largo). El par debe sentirse pariente pero distinto: contraste rico, no monotonía.',
      ejemplo:
        'Bricolage Grotesque (display, geométrica) + Inter (cuerpo, humanista) = par contrastado. Lora (display con serifa) + Inter (cuerpo sin) = contraste serifa/sin.',
      emoji: '👯',
    },
    {
      termino: 'Google Fonts',
      definicion:
        'Biblioteca gratuita de tipografías profesionales. Inter, Playfair, Lora, Source Sans, Bricolage, IBM Plex — todas gratis, todas usables comercialmente. No necesitas comprar.',
      ejemplo:
        'fonts.google.com tiene 1500+ familias gratuitas. Para tu revista escolar, profesional, comercial: cero pago. Sin excusas.',
      emoji: '🆓',
    },
    {
      termino: 'Tipografía como voz',
      definicion:
        'Cada tipografía transmite emoción antes de que se lea. Playfair Display = elegancia clásica. Bricolage = juego moderno. Lora = literatura. Inter = neutralidad tech. Elegir tipografía es elegir voz.',
      ejemplo:
        'Si tu revista habla de música tradicional, una display con serifa transmite respeto al género. Si habla de tecnología emergente, una display geométrica transmite futuro.',
      emoji: '🗣',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '10 tipografías bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 10 tipografías en lugares cercanos: 3 de libros, 3 de revistas o periódicos, 2 de logotipos, 2 de letreros físicos.',
        'Para cada una identifica: ¿display o cuerpo? ¿con serifa o sin?',
        'Anota la emoción que transmite (clásica, moderna, dramática, neutra, juguetona, etc.).',
        'Marca cuál te parece más fuerte y cuál más débil.',
      ],
      cuaderno: {
        titulo: '10 tipografías bajo la lupa',
        formato: 'Tabla 5 columnas (Tipografía/muestra | Origen | Display/Cuerpo | Con/Sin serifa | Emoción), 10 filas',
        extension: '10 filas completas + marca de fuerte/débil',
      },
      criterios: [
        'Las 10 tipografías están bien identificadas',
        'Distinguís display de cuerpo en cada caso',
        'Distinguís con serifa de sin serifa',
        'Reconoces patrones (display son llamativas, cuerpo son legibles)',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 ejes de clasificación tipográfica',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada eje (display vs cuerpo, con vs sin serifa, geométrica vs humanista, regular vs variable) escribe una ficha.',
        'En cada ficha: definición + 2 ejemplos de tipografías que ejemplifican cada extremo.',
        'Marca con ★ tu eje preferido.',
        'Cierra con 1 párrafo: ¿qué combinación de 4 ejes describe la emoción ideal de tu futura revista?',
      ],
      cuaderno: {
        titulo: '4 ejes de clasificación tipográfica',
        formato: '4 fichas con definición + 2 ejemplos por extremo + 1 párrafo final',
        extension: '4 fichas + 1 párrafo',
      },
      criterios: [
        'Cada ficha tiene los 2 extremos del eje con ejemplos reales',
        'Puedes ubicar una tipografía nueva en los 4 ejes sin dudar',
        'Identificaste el eje que más te importa',
        'Definiste tu emoción ideal de revista en términos de los 4 ejes',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu par tipográfico para la revista',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Declara la emoción central de tu revista en 1 palabra (calma, rigor, juego, urgencia, ternura, etc.).',
        'Ve a fonts.google.com y prueba 3 display que transmitan esa emoción. Elige UNA.',
        'Prueba 3 cuerpo que respeten la emoción pero prioricen legibilidad. Elige UNA.',
        'Escribe en cuaderno un titular real y un párrafo real usando ambas (puedes pegar pantallazo o imitar a mano).',
        'Justifica cada elección en 1 frase.',
      ],
      cuaderno: {
        titulo: 'Mi par tipográfico para la revista',
        formato: 'Emoción central + display elegida con justificación + cuerpo elegida con justificación + prueba real',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Emoción central de la revista declarada en 1 palabra',
        'Display elegida con nombre exacto y justificación',
        'Cuerpo elegida con nombre exacto y justificación',
        'Ambas son de Google Fonts',
        'Probé un titular y un párrafo reales con ambas',
        'El par mantiene contraste sin perder coherencia',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el par tipográfico de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Mira el par tipográfico del compañero sin que te explique.',
        'Califica del 1 al 5: (a) ¿la emoción central es clara y específica?, (b) ¿display y cuerpo contrastan sin chocar?, (c) ¿la justificación es específica, no genérica?',
        'Marca con ✨ la decisión más fuerte y con 🚩 la más débil.',
        'Conversen 5 min: si tuvieras que defender SU par como tuyo, ¿podrías? ¿Por qué sí o no?',
      ],
      cuaderno: {
        titulo: 'Evaluación del par tipográfico de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste la decisión más fuerte y la más débil',
        'La observación es constructiva',
        'La conversación cerró con acuerdo o diferencia clara',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el oficio tipográfico',
      instrucciones:
        '5 preguntas para confirmar que dominas los 4 ejes y eliges par con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas combinaciones de par tipográfico está MAL?',
          opciones: [
            'Bricolage Grotesque (display) + Inter (cuerpo)',
            'Playfair Display (display con serifa) + Source Sans (cuerpo sin serifa)',
            'Bricolage (display) + Playfair (display, dramática)',
            'Lora (cuerpo con serifa) + Inter (cuerpo sin serifa)',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Dos display al mismo tiempo = caos visual. El par funciona cuando una es display y la otra es cuerpo.',
          feedbackIncorrecto:
            'Dos display compiten por la atención y rompen jerarquía. El par siempre es display + cuerpo, nunca display + display.',
        },
        {
          enunciado: '¿Qué tipografía es la mejor opción para CUERPO de texto largo (10-12pt) en pantalla?',
          opciones: [
            'Playfair Display',
            'Bricolage Grotesque',
            'Inter o Source Sans',
            'Una tipografía decorativa con sombras',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Sí. Inter y Source Sans son tipografías cuerpo modernas, legibles a tamaños pequeños en pantalla. Las display agobian; las decorativas son ilegibles.',
          feedbackIncorrecto:
            'Para texto largo en pantalla: Inter, Source Sans, IBM Plex Sans, Lora. Display es para titulares grandes. Decorativas son ilegibles a 11pt.',
        },
        {
          enunciado: '¿Por qué Google Fonts es la mejor opción para tu primera revista?',
          opciones: [
            'Es ilegal usar otras',
            'Son gratuitas, profesionales y usables comercialmente',
            'Son las más bonitas',
            'Las usa Google',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 1500+ familias gratuitas, profesionales, sin restricciones. Inter, Playfair, Lora, Source Sans, Bricolage — todas usables sin pagar.',
          feedbackIncorrecto:
            'Gratuitas + profesionales + comerciales. No hay excusa para usar Comic Sans cuando tienes Inter y Playfair gratis.',
        },
        {
          enunciado: '¿Cuál es la diferencia entre tipografía geométrica y humanista?',
          opciones: [
            'No hay diferencia',
            'Geométrica: trazos uniformes basados en círculos perfectos. Humanista: trazos con variación que evocan la mano',
            'Geométrica es para hombres; humanista para mujeres',
            'Geométrica es nueva; humanista es vieja',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Geométrica = matemática, futuro, frío. Humanista = mano, calidez, presente. Cada una transmite emoción distinta antes de leerse.',
          feedbackIncorrecto:
            'Geométrica = trazo uniforme matemático. Humanista = trazo con variación de mano. Son dos filosofías de diseño tipográfico distintas.',
        },
        {
          enunciado:
            'En el saber ancestral de la caligrafía popular del Valle, ¿qué aplica directamente a tu elección tipográfica digital?',
          opciones: [
            'Nada — la caligrafía es antigua',
            'Que toda tipografía hereda gestos de la mano humana y transmite emoción antes de ser leída',
            'Que las letras a mano son mejores',
            'Que solo se debe usar tipografía colombiana',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Las tipografías humanistas con serifa heredan el trazo de la pluma calígrafa. Sentirlas "cálidas" no es subjetivo — es herencia técnica.',
          feedbackIncorrecto:
            'Toda tipografía hereda gesto de mano humana. La carta de tu abuela y la fuente humanista digital comparten ADN: el trazo del cálamo.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, configura tu par tipográfico elegido en tu próximo trabajo del colegio (Google Docs, Figma, Canva). Úsalo durante al menos 3 días. Anota qué notaste — si te incomodó, si te gustó, si lo cambiarías. El próximo lunes la traemos. Elección no es definitiva: puedes ajustarla.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda tipografía habla con acento: las "neutras" son las que mejor disimulan su origen.',
      preguntaEspejo:
        '¿Las tipografías que uso reflejan mi región y mi lengua o solo replican estándares globales? ¿Conozco tipografías hechas en o desde Latinoamérica?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Las letras que duran son las que respetan los gestos antiguos de la mano.',
      preguntaEspejo:
        '¿Elijo tipografías porque están de moda o porque tienen historia que demuestre que duran? ¿Qué cambia si priorizo la durabilidad?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La tipografía es la infraestructura cognitiva más invisible y más poderosa de la infoesfera.',
      preguntaEspejo:
        '¿Qué tipografías han modelado mi forma de leer sin que lo note? ¿Si pudiera elegirlas yo, qué cambiaría?',
    },
  },

  cincoDimensiones: {
    personal:
      'Tomaste tu primera decisión editorial mayor: la voz visible de tu revista del periodo.',
    emocional:
      'Sentiste que las tipografías transmiten emoción antes de ser leídas — y elegiste la tuya con criterio.',
    ciudadana:
      'Reconociste que las tipografías "neutras" no lo son — toda elección tipográfica es decisión cultural.',
    local:
      'Conectaste la caligrafía popular del Valle, las décimas del Pacífico y los registros parroquiales como antecedentes de tu elección digital.',
    intergeneracional:
      'La letra de tu abuela y la tipografía humanista digital comparten gesto. Eliges una herencia técnica de 600 años.',
  },
};

export default contenido;
