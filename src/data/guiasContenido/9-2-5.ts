/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 5
 * Tema: Imagen y texto — el ritmo de la lectura.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-5.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 5,
  titulo: 'Imagen y texto — el ritmo de la lectura',
  ocultarPDF: false,
  resumen:
    'Dibujas 2 spreads de revista con imagen + texto coherentes. La imagen entra por el ojo, el texto entra por la mente, los dos juntos entran por el corazón.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Composición visual',

  saberAncestral: {
    saber:
      'En las revistas y periódicos ilustrados del Valle del siglo XX (El País, El Pueblo, La Pajarera) la foto no acompañaba al texto: contaba parte de la historia. Una foto del campesino con su cosecha decía lo que tres párrafos no decían. Un retrato de la abuela con el niño en brazos era el subtítulo emocional del artículo. La imagen entra por el ojo, el texto entra por la mente, los dos juntos entran por el corazón.',
    fuente: 'Revistas y periódicos ilustrados del Valle del Cauca, siglo XX',
    preguntaPuente:
      '¿Por qué algunas portadas de revista o periódico te "hablan" inmediatamente y otras parecen "hojas de Word"? ¿Qué hace la diferencia?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Revistas ilustradas del Valle', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: '3 spreads bajo la lupa', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 relaciones imagen-texto', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '2 spreads dibujados a mano', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'En redes sociales el mismo principio aplica: una historia solo texto se ignora, una foto sola se olvida, una combinación bien hecha de imagen + texto se queda. Tu próxima publicación profesional depende del ritmo entre imagen y texto. No es decorar texto con foto — es componer.',
    preguntaDetonante:
      'Mira el post que más te llamó la atención en los últimos 7 días en redes. ¿Era solo imagen, solo texto, o una combinación? ¿Qué hizo que se quedara contigo?',
    activacion: {
      titulo: 'Test de la portada cubierta',
      descripcion:
        'En 3 minutos, toma una revista o libro con buena portada y cubre con la mano: primero el texto (solo se ve la imagen), luego la imagen (solo se ve el texto). ¿Cuál de los dos elementos cuenta más historia? ¿Cuál es el ancla visual?',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 4 elegiste paleta de color. Hoy combinas grilla + tipografía + color en piezas reales: 2 spreads.',
      siguiente:
        'En la sesión 6 llevarás todo el sistema visual a una herramienta digital (Figma, Canva o Adobe Express) para diseñar la portada real.',
    },
  },

  conceptosClave: [
    {
      termino: 'Spread (página doble)',
      definicion:
        'Las dos páginas enfrentadas de una revista (izquierda + derecha) que el lector ve a la vez. El spread es la unidad mínima de composición editorial — no la página suelta.',
      ejemplo:
        'Al abrir una revista, ves páginas 4-5 al tiempo. Esos son un spread. Diseñar para spread (no página) es lo profesional.',
      emoji: '📖',
    },
    {
      termino: 'Refuerzo',
      definicion:
        'Imagen y texto dicen lo mismo desde dos canales. La imagen ilustra literalmente lo que el titular anuncia. Sirve para claridad inmediata.',
      ejemplo:
        'Titular: "Llegó la cosecha del café". Imagen: foto del campesino con granos rojos. Coherencia obvia, comunicación directa.',
      emoji: '🔄',
    },
    {
      termino: 'Contraste',
      definicion:
        'Imagen y texto se tensionan productivamente. La imagen muestra una cosa, el titular sugiere otra — invita al lector a entender la conexión.',
      ejemplo:
        'Titular: "Año récord". Imagen: campo seco, granos pocos. La tensión "récord" vs "seco" pide que el lector entre al texto para entender.',
      emoji: '⚡',
    },
    {
      termino: 'Narrativa',
      definicion:
        'La imagen cuenta un momento, el texto cuenta el resto. Juntos completan una historia que ninguno cuenta por separado.',
      ejemplo:
        'Imagen: niño abrazando un perro callejero. Texto: "Cada mes la fundación atiende 200 perros como este. Esta es la historia de cómo cambió la vida de Juan, 8 años, después del encuentro".',
      emoji: '📚',
    },
    {
      termino: 'Ornamental (a evitar)',
      definicion:
        'Imagen decorativa sin función informativa. No aporta a la historia, solo "llena espacio bonito". Es la relación más débil — la profesional la evita.',
      ejemplo:
        'Texto sobre cambio climático con imagen genérica de hojas verdes que no muestra nada del problema. La imagen no informa, solo decora.',
      emoji: '🌸',
    },
    {
      termino: 'Espacio en blanco',
      definicion:
        'El aire que respira entre imagen, texto y bordes. Sin él, el spread agobia. Con él, invita al lector a entrar.',
      ejemplo:
        'The New Yorker usa enormes márgenes blancos. National Geographic deja respirar las fotos. Eso comunica respeto por la atención del lector.',
      emoji: '⬜',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 spreads bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 3 spreads reales: uno de periódico colombiano ilustrado, uno de revista cultural, uno de libro/catálogo con buenas imágenes.',
        'Para cada uno: ¿qué se ve primero, la imagen o el titular?',
        'Identifica reparto del espacio: 50/50, 70/30, imagen full bleed.',
        'Anota qué relación imagen-texto opera (refuerzo, contraste, narrativa).',
      ],
      cuaderno: {
        titulo: '3 spreads bajo la lupa',
        formato: 'Tabla 5 columnas (Spread | Qué se ve primero | Reparto de espacio | Relación imagen-texto | Emoción), 3 filas',
        extension: '3 filas + 1 línea de patrón común',
      },
      criterios: [
        '3 spreads reales identificados con fuente',
        'Identificaste qué se ve primero en cada uno',
        'Reparto de espacio reconocido',
        'Relación imagen-texto nombrada para cada spread',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 relaciones imagen-texto',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada relación (refuerzo, contraste, narrativa, ornamental) escribe una ficha.',
        'En cada ficha: definición + ejemplo de los spreads analizados + cuándo conviene usarla.',
        'Marca con ★ la relación que mejor sirve a tu revista del periodo.',
        'Cierra con 1 párrafo: ¿por qué la relación ornamental se considera la más débil?',
      ],
      cuaderno: {
        titulo: '4 relaciones imagen-texto',
        formato: '4 fichas con definición + ejemplo + cuándo usar',
        extension: '4 fichas + 1 párrafo final',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene ejemplo concreto',
        'Identifiqué qué relación sirve mejor a mi revista',
        'Explico por qué la ornamental es la más débil',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: '2 spreads dibujados a mano',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Elige 2 temas para los spreads (ej.: portada + un artículo de la revista).',
        'Decide la relación imagen-texto de cada uno (que sean distintas entre sí).',
        'Dibuja grilla en cada A4 horizontal con lápiz suave.',
        'Ubica imagen (cuadro con dibujo simple o descripción) + titular real + lead + cuerpo simulado.',
        'Aplica tu paleta de color (Sesión 4) y tu par tipográfico (Sesión 3).',
      ],
      cuaderno: {
        titulo: '2 spreads dibujados',
        formato: '2 hojas A4 horizontales con spreads dibujados a mano + aplicación de sistema visual',
        extension: '2 hojas A4',
      },
      criterios: [
        '2 spreads en hojas A4 horizontales',
        'Grilla visible en cada uno',
        'Imagen ubicada + titular real + cuerpo simulado',
        'Aplicación de paleta de Sesión 4',
        'Aplicación de par tipográfico de Sesión 3',
        'Relación imagen-texto identificada en cada spread',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa los spreads de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Mira los 2 spreads del compañero sin que te explique.',
        'Califica del 1 al 5: (a) ¿imagen y texto se ayudan o compiten?, (b) ¿la jerarquía guía la lectura?, (c) ¿hay coherencia con el sistema visual establecido (paleta + tipografía)?',
        'Marca con ✨ el spread más fuerte y con 🚩 el más débil.',
        'Conversen 5 min: ¿qué relación imagen-texto les gustaría experimentar más?',
      ],
      cuaderno: {
        titulo: 'Evaluación de los spreads de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste el spread más fuerte y el más débil',
        'La observación es constructiva y específica',
        'La conversación cerró con compromiso de experimentación',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el ritmo imagen-texto',
      instrucciones:
        '5 preguntas para confirmar que distingues las 4 relaciones y aplicas jerarquía. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué es un "spread" en diseño editorial?',
          opciones: [
            'Una página suelta',
            'Las dos páginas enfrentadas que el lector ve al tiempo',
            'Un titular grande',
            'Una imagen full bleed',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El spread son las dos páginas que ves al abrir la revista. Es la unidad mínima de composición editorial profesional.',
          feedbackIncorrecto:
            'Spread = páginas dobles. Al abrir una revista en páginas 4-5, ese es un spread. Diseñar para spread (no página suelta) es lo profesional.',
        },
        {
          enunciado: 'Titular: "Año récord". Imagen: campo seco, granos pocos. ¿Qué relación es?',
          opciones: ['Refuerzo', 'Contraste', 'Narrativa', 'Ornamental'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Contraste: la tensión entre "récord" e imagen de aridez invita al lector a entrar al texto para entender la paradoja.',
          feedbackIncorrecto:
            'Contraste. La tensión productiva entre lo que dice el titular y lo que muestra la imagen genera curiosidad. Es de las relaciones más fuertes.',
        },
        {
          enunciado: '¿Por qué la relación "ornamental" se considera la más débil?',
          opciones: [
            'Porque las imágenes ornamentales son feas',
            'Porque la imagen no aporta información — solo decora y ocupa espacio',
            'Porque no se permite legalmente',
            'Porque es muy difícil de hacer',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Una imagen ornamental no informa — solo llena espacio. En editorial serio se evita. Cada imagen debe aportar a la historia.',
          feedbackIncorrecto:
            'Ornamental = decora sin informar. Imagen genérica de hojas verdes en artículo sobre cambio climático: no aporta nada, solo ocupa.',
        },
        {
          enunciado: '¿Por qué The New Yorker y National Geographic usan tanto espacio en blanco?',
          opciones: [
            'Para ahorrar tinta',
            'Para comunicar respeto por la atención del lector y dejar respirar imagen y texto',
            'Porque les falta contenido',
            'Por moda pasajera',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El aire respeta al lector y da peso a lo que sí está en la página. Pocas cosas bien diseñadas comunican más que muchas amontonadas.',
          feedbackIncorrecto:
            'Espacio en blanco = respeto al lector + peso a lo que importa. Por eso revistas premium lo usan. Apretar todo comunica desesperación o tabloide.',
        },
        {
          enunciado:
            'En el saber ancestral de las revistas ilustradas del Valle, ¿qué aplica a tus posts en redes hoy?',
          opciones: [
            'Nada — las redes son distintas',
            'Que imagen + texto bien combinados se quedan con el lector; uno solo se ignora u olvida',
            'Que solo importan las imágenes',
            'Que el texto largo es mejor',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El periódico ilustrado del Valle y tu post de Instagram comparten el principio: imagen captura, texto profundiza, los dos juntos se quedan.',
          feedbackIncorrecto:
            'Imagen + texto coherentes se quedan; cualquiera por separado se olvida. Es el principio editorial más antiguo y más actual a la vez.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana crea UN post real para tus redes aplicando todo lo aprendido (grilla + tipografía + paleta + relación imagen-texto). Publícalo. Anota qué reacción tuvo. Compara con tus posts anteriores.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Las fotos editoriales que dominan revistas globales nunca son neutras: deciden quién es visible y quién queda invisibilizado.',
      preguntaEspejo:
        '¿Quién aparece en mis spreads y en qué pose? ¿Reproduzco los estereotipos editoriales o me atrevo a otra mirada?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Una imagen vale más que mil palabras solo cuando la imagen está bien elegida.',
      preguntaEspejo:
        '¿Estoy diciendo lo mismo con palabras y con imagen, o cada una aporta algo distinto? ¿Mi spread necesita ambos elementos o uno sobra?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La composición imagen-texto es la gramática básica de la infoesfera visual contemporánea.',
      preguntaEspejo:
        '¿Aplico criterio editorial a mis publicaciones en redes o simplemente sigo el formato por defecto? ¿Qué cambiaría si tratara cada post como un spread?',
    },
  },

  cincoDimensiones: {
    personal:
      'Diseñaste 2 piezas reales aplicando todo el sistema visual — primera prueba de oficio editorial real.',
    emocional:
      'Sentiste el ritmo entre imagen y texto: el peso visual, el aire que respira, la jerarquía que guía.',
    ciudadana:
      'Decidiste quién aparece en tus spreads y en qué pose — acto editorial que reproduce o rompe estereotipos.',
    local:
      'Heredaste la tradición editorial del Valle ilustrado: imagen que cuenta tanto como texto, foto del campesino, retrato de la abuela.',
    intergeneracional:
      'El periódico ilustrado de tu abuelo y tu próximo post viral comparten gramática. El oficio sobrevive en pantalla.',
  },
};

export default contenido;
