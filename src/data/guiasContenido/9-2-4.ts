/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 4
 * Tema: Color en editorial — contraste, jerarquía, accesibilidad.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-4.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 4,
  titulo: 'Color en editorial — contraste, jerarquía, accesibilidad',
  ocultarPDF: false,
  resumen:
    'Eliges paleta de 5 colores con HEX y función declarada para la revista. La paleta no es decoración: define quién puede leer y qué emoción transmite.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Paleta de color',

  saberAncestral: {
    saber:
      'Las paletas naturales del Valle, el Pacífico y los Andes son ingeniería estética milenaria. El verde del café, el ocre del sombrero vueltiao, el rojo del achiote, el azul del Pacífico, el negro brillante de las molas guna. Cada paleta tradicional fue probada por siglos de uso humano: armoniosa, simbólica, reconocible. La paleta no nació en Pantone — nació donde la tierra, las plantas y el cielo se miraron juntos.',
    fuente: 'Paletas naturales del Valle, sombrero vueltiao, mola guna, Pacífico',
    preguntaPuente:
      'Mira el sombrero vueltiao o una mola guna: ¿qué hace que esos colores combinen perfecto aunque sean intensos? ¿Y qué falla en muchas paletas digitales que parecen "saturadas" o "confusas"?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Paletas naturales y tradicionales', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: '5 paletas que comunican', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '3 principios del color editorial', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu paleta de 5 colores', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una paleta editorial no es decoración: decide quién puede leer tu revista (accesibilidad), guía la atención (jerarquía) y transmite emoción antes de leerse. Diseñar con paletas locales no es nostalgia — es coherencia visual con tu lugar.',
    preguntaDetonante:
      'Si tu revista fuera una emoción, ¿cuál sería? Y si esa emoción tuviera 5 colores, ¿cuáles?',
    activacion: {
      titulo: 'Test de 5 segundos por color',
      descripcion:
        'En 3 minutos, abre coolors.co y mira 3 paletas al azar. Para cada una anota la primera emoción que sentiste (calma, urgencia, ternura, juego, etc.). Esa reacción inmediata es el dato más valioso para diseñar — el color habla antes que cualquier palabra.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 3 elegiste tu par tipográfico. Hoy le agregas color al sistema visual.',
      siguiente:
        'En la sesión 5 combinarás todo (grilla + tipografía + color) en 2 spreads dibujados con relación imagen-texto.',
    },
  },

  conceptosClave: [
    {
      termino: 'Regla 60-30-10',
      definicion:
        'Proporción saludable de una paleta: dominante 60%, secundario 30%, acento 10%. Cambia las proporciones y la armonía se rompe. El acento que ocupa 50% deja de ser acento.',
      ejemplo:
        'Si tu dominante es azul Pacífico y aparece en fondos, títulos y bloques (60%), el secundario crema lo apoya (30%), y el acento naranja achiote llama a la acción (10%).',
      emoji: '⚖️',
    },
    {
      termino: 'Contraste',
      definicion:
        'Los colores deben distinguirse claramente entre sí. No solo cromático (colores opuestos): también tonal (claro vs oscuro). Sin contraste, todo se ve plano y los elementos se mezclan.',
      ejemplo:
        'Texto negro sobre blanco = contraste máximo. Texto gris claro sobre blanco = contraste insuficiente, ilegible para muchos.',
      emoji: '⚫⚪',
    },
    {
      termino: 'Jerarquía cromática',
      definicion:
        'Los colores guían el ojo a lo importante. El acento atrae primero, el dominante sostiene el conjunto, el secundario apoya. Sin jerarquía, el ojo no sabe por dónde empezar.',
      ejemplo:
        'En una landing page, el botón "Comprar" suele ser de color acento (naranja, rojo) para destacar sobre fondo neutro. Eso es jerarquía cromática.',
      emoji: '🏔',
    },
    {
      termino: 'Accesibilidad WCAG AA',
      definicion:
        'Estándar de contraste mínimo texto-fondo para que personas con baja visión o daltonismo puedan leer: ratio ≥ 4.5:1. Verificable en webaim.org/resources/contrastchecker.',
      ejemplo:
        'Texto #333 sobre fondo #FFF tiene contraste 12.6:1 (excelente). Texto #999 sobre fondo #FFF tiene 2.85:1 (insuficiente, falla WCAG AA).',
      emoji: '♿',
    },
    {
      termino: 'Paleta natural local',
      definicion:
        'Inspirar tu paleta en colores reales de tu región (frutas, paisaje, oficios). Le da identidad inmediata y evita la trampa de copiar marcas globales.',
      ejemplo:
        'Café Valle (#5C3924), Crema (#F5E9D4), Verde plátano (#3B7A3F), Achiote (#C44530), Azul Pacífico (#1B5E7F). Paleta colombiana sin nostalgia.',
      emoji: '🌎',
    },
    {
      termino: 'HEX',
      definicion:
        'Código de 6 caracteres que identifica un color exacto (ej: #FF6B35). Permite reproducir el color en cualquier herramienta digital. Es el lenguaje universal del color en pantalla.',
      ejemplo:
        '#FFFFFF = blanco puro. #000000 = negro puro. #0066FF = azul brillante. Conocer HEX te permite recrear cualquier color que veas.',
      emoji: '#️⃣',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '5 paletas que comunican',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 5 paletas: una natural (paisaje de tu región), una tradicional (sombrero vueltiao, mola guna, manta wayuu), una de marca global (Spotify, Apple), una de red social que uses, una literaria (portada de libro favorito).',
        'Para cada una cuenta colores principales y nota cuántos predominan.',
        'Anota la emoción que transmite (calma, urgencia, ternura, juego, rigor).',
        'Reconoce el patrón: las paletas fuertes casi nunca usan más de 5 colores.',
      ],
      cuaderno: {
        titulo: '5 paletas que comunican',
        formato: 'Tabla 4 columnas (Paleta | Colores predominantes | Cantidad | Emoción), 5 filas',
        extension: '5 filas + 1 línea de patrón identificado',
      },
      criterios: [
        '5 paletas distintas identificadas (natural + tradicional + global + redes + literaria)',
        'Conté colores principales en cada una',
        'Anoté emoción de cada paleta',
        'Reconozco patrón: paletas fuertes ≤ 5 colores',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: '3 principios del color editorial',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada principio (contraste, jerarquía, accesibilidad) escribe una ficha.',
        'En cada ficha: definición + ejemplo de una de las 5 paletas de Actividad 1 que lo cumple bien.',
        'En cada ficha: ejemplo concreto de algo que lo incumple (puede ser un sitio que te frustró visualmente).',
        'Cierra con 1 párrafo: ¿cuál de los 3 principios te parece más descuidado en redes sociales actuales?',
      ],
      cuaderno: {
        titulo: '3 principios del color editorial',
        formato: '3 fichas con definición + ejemplo cumple + ejemplo incumple',
        extension: '3 fichas + 1 párrafo final',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene ejemplo de las paletas analizadas',
        'Hay ejemplo concreto de algo que incumple cada principio',
        'Reflexión final identifica principio más descuidado en redes',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu paleta editorial de 5 colores',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Declara emoción central de tu revista en 1 palabra.',
        'Usa coolors.co o pinta a mano 3 paletas candidatas inspiradas en una paleta natural local.',
        'Elige UNA paleta de 5 colores y anota código HEX de cada uno.',
        'Declara función para cada color: dominante, secundario, acento, fondo, texto.',
        'Verifica contraste texto-fondo en webaim.org (≥ 4.5:1).',
        'Escribe 3 frases de justificación sobre emoción transmitida.',
      ],
      cuaderno: {
        titulo: 'Mi paleta editorial',
        formato: '5 cuadritos pintados o pegados con HEX + función declarada + 3 frases de justificación',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '5 colores con código HEX anotado',
        'Función declarada para cada uno',
        'Contraste texto-fondo verificado en webaim.org (≥ 4.5:1)',
        'Al menos 1 color inspirado en paleta natural o tradicional local',
        'Justificación de 3 frases sobre emoción transmitida',
        'La paleta se siente coherente al pasar la mirada por todos los colores',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la paleta de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Mira la paleta del compañero SIN que te diga la emoción declarada.',
        'Adivina qué emoción central declaró. Anota tu hipótesis.',
        'Compara con la emoción real que él declaró. Califica del 1 al 5: (a) ¿transmite la emoción declarada?, (b) ¿pasa contraste WCAG?, (c) ¿hay al menos 1 color local?',
        'Conversen 5 min: si tu hipótesis no coincide con su emoción, ¿qué falló — tu intuición o su paleta?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la paleta de [nombre]',
        formato: 'Tu hipótesis de emoción + 3 calificaciones con justificación + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Hiciste hipótesis de emoción SIN ver la declaración del compañero',
        'Las 3 calificaciones tienen justificación de 1 línea',
        'La observación es constructiva',
        'La conversación cerró con acuerdo sobre si la paleta transmite la emoción',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el oficio del color',
      instrucciones:
        '5 preguntas para confirmar que dominas la lógica del color editorial. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué proporciones tiene la regla 60-30-10?',
          opciones: [
            '60% acento, 30% dominante, 10% secundario',
            '60% dominante, 30% secundario, 10% acento',
            '60% texto, 30% fondo, 10% bordes',
            'Cualquier proporción funciona',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El dominante sostiene 60% del espacio, el secundario lo apoya con 30%, el acento llama atención puntual con 10%.',
          feedbackIncorrecto:
            'Dominante 60, secundario 30, acento 10. Si inviertes y el acento ocupa 60%, deja de ser acento — la jerarquía cromática se rompe.',
        },
        {
          enunciado: '¿Qué ratio de contraste necesita texto-fondo para cumplir WCAG AA?',
          opciones: ['1:1', '4.5:1 o más', '10:1 obligatorio', 'No hay estándar'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. WCAG AA exige mínimo 4.5:1 para texto normal. Texto gris claro sobre blanco suele fallar; texto negro sobre blanco lo supera por mucho.',
          feedbackIncorrecto:
            '4.5:1 mínimo según WCAG AA. Texto #999 sobre fondo #FFF tiene 2.85:1 — falla. Texto #333 sobre fondo #FFF tiene 12.6:1 — pasa.',
        },
        {
          enunciado: '¿Por qué inspirarse en paletas naturales locales (café, achiote, Pacífico)?',
          opciones: [
            'Es obligatorio',
            'Le da identidad inmediata y evita copiar marcas globales sin pensar',
            'Es más barato',
            'No tiene ninguna ventaja',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Una paleta colombiana se reconoce sin texto y diferencia tu revista del genérico tech global.',
          feedbackIncorrecto:
            'Identidad inmediata + diferenciación. Paleta achiote-café-crema se siente Colombia. Paleta blanco-gris-azul-tech se siente Silicon Valley.',
        },
        {
          enunciado: '¿Qué porcentaje de hombres tiene daltonismo y por qué importa?',
          opciones: [
            '0%, no existe el daltonismo',
            '8% — combinaciones rojo/verde fallan para ellos, hay que evitarlas en información crítica',
            '50% — la mayoría',
            'No es relevante para diseño',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. 8% de hombres tiene daltonismo. Por eso semáforos usan forma + color, no solo color. Tu paleta debe funcionar incluso sin distinguir rojo/verde.',
          feedbackIncorrecto:
            '8% de hombres tiene daltonismo. Diseñar con accesibilidad significa usar contraste tonal (claro/oscuro) además de cromático, para no excluir a millones.',
        },
        {
          enunciado:
            'En el saber ancestral de la mola guna o el sombrero vueltiao, ¿qué aplica directamente a tu paleta digital?',
          opciones: [
            'Nada — son artesanías, no diseño',
            'Que pocos colores bien elegidos comunican identidad fuerte sin ser saturados ni neón',
            'Que solo se debe usar blanco y negro',
            'Que los colores intensos siempre fallan',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La mola guna usa 3-5 colores intensos en proporciones precisas. El resultado es identidad fuerte sin caos. Mismo principio para tu revista.',
          feedbackIncorrecto:
            'Pocos colores bien elegidos > muchos colores mal organizados. La mola guna lo demuestra: 3-5 colores intensos en proporciones precisas = identidad reconocible.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana aplica tu paleta a una pieza real: una hoja del cuaderno, una historia de Instagram, un grupo de WhatsApp, un avatar nuevo. Anota qué reacción tuvo. La paleta no es ley — es hipótesis que validas usándola.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Las paletas que dominan la infoesfera global no son universales — son culturalmente específicas y se imponen.',
      preguntaEspejo:
        '¿Mi paleta copia un estándar global (tech minimalista, tropical turístico) o se atreve a una identidad local? ¿Qué precio paga cada elección?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Pocos colores bien elegidos comunican más que muchos colores mal organizados.',
      preguntaEspejo:
        '¿Por qué siento la tentación de agregar más colores cuando algo se ve "aburrido"? ¿Será que lo aburrido es sobrio bien hecho?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El color es la infraestructura cromática de la infoesfera — decide quién puede leer y quién queda afuera.',
      preguntaEspejo:
        '¿Mi paleta funciona para alguien con daltonismo? ¿Para alguien que mira en un celular básico bajo el sol? ¿A quién dejo afuera?',
    },
  },

  cincoDimensiones: {
    personal:
      'Tomaste la segunda decisión editorial mayor de tu revista — la voz cromática que la acompañará todo el periodo.',
    emocional:
      'Distinguiste color como decoración de color como función — y elegiste con criterio, no por gusto.',
    ciudadana:
      'Diseñaste con accesibilidad: tu revista podrá ser leída por personas con baja visión o daltonismo.',
    local:
      'Anclaste tu paleta en colores reales del Valle, el Pacífico, el campo cafetero. Identidad cromática sin copiar Silicon Valley.',
    intergeneracional:
      'Las paletas de la mola guna y el sombrero vueltiao llevan siglos enseñando armonía cromática. Hoy las honras al integrarlas en formato digital.',
  },
};

export default contenido;
