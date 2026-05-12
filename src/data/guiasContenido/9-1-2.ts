/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 2
 * Tema: La rueda y el agua — máquinas simples del campo colombiano.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-2.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 2,
  titulo: 'La rueda y el agua — máquinas simples del campo colombiano',
  ocultarPDF: false,
  resumen:
    'Las 6 máquinas simples explicadas con 3 tecnologías colombianas: trapiche, noria y polea. "Simple" no significa "primitivo".',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Máquinas simples',

  saberAncestral: {
    saber:
      'El trapiche del Valle del Cauca exprime caña con una rueda y dos rodillos. La noria del campo subía agua de pozos profundos con baldes pegados a una rueda. El molino de agua del Pacífico aprovechaba el desnivel de un arroyo para mover una piedra que molía maíz o café. Tres ejemplos de máquinas simples ingeniosas que existían siglos antes de la electricidad.',
    fuente: 'Trapiche del Valle, noria del campo y molinos de agua del Pacífico colombiano',
    preguntaPuente:
      '¿Qué hace que una máquina simple del campo colombiano siga funcionando hoy con la misma eficiencia que cuando se inventó? ¿Y qué pierde una máquina moderna cuando deja de funcionar sin electricidad?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Tres máquinas que el Valle aún usa', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Las 6 máquinas simples a tu alrededor', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de una máquina simple', duracionMin: 18 },
    { numero: 4, iconos: ['✏️'], titulo: '3 dibujos analíticos', duracionMin: 30 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 17 },
  ],

  preLectura: {
    porQueImporta:
      'Una máquina simple bien diseñada multiplica tu fuerza sin gastar más energía. Las del campo colombiano siguen funcionando porque su diseño es elegante — y muchas son más sostenibles que sus reemplazos modernos.',
    preguntaDetonante:
      'Si tu casa se quedara sin electricidad por una semana, ¿qué máquinas simples del campo te harían la vida más fácil?',
    activacion: {
      titulo: 'La mochila como máquina',
      descripcion:
        'En 3 minutos, mira tu mochila o cualquier objeto cerca y encuentra al menos una máquina simple "escondida" dentro: el cierre (cuña), las correas con hebilla (palanca), las ruedas si las tiene. Lo "moderno" suele esconder lo "antiguo".',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 1 definiste qué es técnica y la distinguiste de cuerpo, herramienta y máquina.',
      siguiente:
        'En la sesión 3 verás la balanza como ejemplo de técnica que NO multiplica fuerza pero sí construye confianza social.',
    },
  },

  conceptosClave: [
    {
      termino: 'Palanca',
      definicion:
        'Barra rígida que pivota sobre un punto de apoyo. Multiplica fuerza cuando el brazo de la fuerza es más largo que el brazo de la resistencia.',
      ejemplo:
        'Un destornillador como palanca para abrir una lata. El brazo del destornillador es largo, el punto de apoyo es la tapa, ganas fuerza.',
      emoji: '➖',
    },
    {
      termino: 'Rueda y eje',
      definicion:
        'Rueda grande unida a un eje pequeño. Al girar la rueda, el eje hace más fuerza pero en menos distancia. Es la base del trapiche y la noria.',
      ejemplo:
        'La rueda de tu bicicleta: tú pedaleas un círculo grande, el piñón mueve uno pequeño. Cambias velocidad por torque (o al revés).',
      emoji: '⚙️',
    },
    {
      termino: 'Polea',
      definicion:
        'Rueda con surco por donde pasa una cuerda. Una polea simple cambia la dirección de la fuerza; varias poleas combinadas multiplican fuerza.',
      ejemplo:
        'En un pozo, halas la cuerda hacia abajo y el balde sube. Una sola polea no multiplica, solo redirige — pero te permite usar el peso del cuerpo.',
      emoji: '🪢',
    },
    {
      termino: 'Plano inclinado',
      definicion:
        'Superficie en ángulo que permite subir un peso a una altura aplicando menos fuerza pero recorriendo más distancia.',
      ejemplo:
        'Una rampa de bodega: subes un saco de café por la rampa con menos esfuerzo que cargándolo vertical, pero caminas más.',
      emoji: '📐',
    },
    {
      termino: 'Cuña',
      definicion:
        'Dos planos inclinados unidos. Concentra una fuerza grande en un filo pequeño. Es la base del cuchillo, el hacha y la cremallera.',
      ejemplo:
        'El filo del machete del campo: la cuña concentra la fuerza de tu brazo en un milímetro de filo. Por eso corta lo que la mano sola no puede.',
      emoji: '🔻',
    },
    {
      termino: 'Tornillo',
      definicion:
        'Plano inclinado enrollado alrededor de un cilindro. Convierte rotación en avance lineal. Multiplica fuerza pero exige muchas vueltas.',
      ejemplo:
        'Un tornillo de carpintería: con un destornillador y poca fuerza puedes apretar mucho. La energía la pones en vueltas, no en kilos.',
      emoji: '🔩',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Las 6 máquinas simples a tu alrededor',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Encuentra UN ejemplo cotidiano de cada una de las 6 máquinas simples: palanca, rueda, polea, plano inclinado, cuña, tornillo.',
        'Para cada ejemplo identifica qué fuerza multiplica o cambia de dirección.',
        'Al menos UNO de tus 6 ejemplos debe venir del campo, oficio tradicional o vida rural.',
        'Si dudas en clasificar, descompón el objeto: la bicicleta combina rueda + palanca + tornillo.',
      ],
      cuaderno: {
        titulo: 'Las 6 máquinas simples a mi alrededor',
        formato: 'Tabla 3 columnas (Máquina simple | Ejemplo cotidiano | Qué fuerza multiplica), 6 filas',
        extension: '6 filas + marca a la fila del ejemplo rural/tradicional',
      },
      criterios: [
        'Cada ejemplo es concreto (no "rueda" sino "rueda de mi maleta")',
        'Cada fila identifica qué fuerza se multiplica o cambia de dirección',
        'Al menos 1 ejemplo viene del campo o de un oficio tradicional',
        'Las 6 máquinas simples están representadas',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Análisis de 3 máquinas tradicionales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para trapiche, noria/molino y polea, completa la anatomía de 5 elementos.',
        'Fuerza entrada: ¿quién aplica el esfuerzo (mano, buey, agua, motor)?',
        'Mecanismo: ¿cuál de las 6 máquinas simples opera adentro?',
        'Ventaja mecánica: ¿multiplica fuerza o velocidad?',
        'Trabajo salida y costo: ¿qué se logra y qué pide a cambio?',
      ],
      cuaderno: {
        titulo: 'Análisis de 3 máquinas tradicionales',
        formato: '3 fichas (trapiche, noria/molino, polea) con los 5 elementos de anatomía',
        extension: '3 fichas completas',
      },
      criterios: [
        'Cada ficha identifica con precisión cuál de las 6 máquinas simples opera',
        'Cada ficha menciona explícitamente el costo (qué pide a cambio)',
        'Las fuentes de energía están nombradas (buey, agua, viento, humana)',
        'Puedes explicar las 3 sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: '3 dibujos analíticos de máquinas reales',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Busca foto de un trapiche, una noria/molino y una polea (30 segundos en internet por cada uno).',
        'Dibuja cada uno a mano (5 min cada uno, claridad sobre precisión).',
        'Marca con flechas las 4-6 piezas principales y etiquétalas.',
        'Abajo de cada dibujo escribe: "Máquina simple identificada: __" y "Por qué: __".',
      ],
      cuaderno: {
        titulo: '3 máquinas simples dibujadas',
        formato: '3 dibujos a mano + etiquetas + cuadro de identificación + justificación',
        extension: '1 página por dibujo, total 3 páginas',
      },
      criterios: [
        '3 dibujos a mano (trapiche + noria/molino + polea)',
        'Cada uno con al menos 4 piezas etiquetadas',
        'Cada uno identifica explícitamente cuál máquina simple opera',
        'Cada uno justifica esa identificación en 1 frase',
        'Un compañero puede leer los dibujos sin que tú expliques',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa los dibujos de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu cuaderno con un compañero. Mira sus 3 dibujos sin que te explique.',
        'Califica del 1 al 5: (a) ¿se entiende qué máquina simple opera?, (b) ¿las piezas están etiquetadas?, (c) ¿hay justificación clara?',
        'Identifica el dibujo más fuerte y el más débil. Anota 1 observación específica de cada uno.',
        'Devuelve y conversen 5 min: ¿coincidieron en la máquina simple identificada o difirieron?',
      ],
      cuaderno: {
        titulo: 'Evaluación de los dibujos de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones sobre el más fuerte y el más débil',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Identificaste el dibujo más fuerte con razón concreta',
        'Identificaste el más débil con sugerencia accionable',
        'La conversación cerró con 1 acuerdo sobre cuál máquina simple opera',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica las 6 máquinas simples',
      instrucciones:
        '5 preguntas para confirmar que reconoces las 6 máquinas simples en lo cotidiano. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'En un trapiche del Valle del Cauca, ¿cuál es la máquina simple principal que opera?',
          opciones: ['Plano inclinado', 'Rueda y eje', 'Polea', 'Cuña'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El trapiche usa rueda y eje: una rueda grande (la que mueve el animal o el motor) hace girar el eje que aprieta los rodillos.',
          feedbackIncorrecto:
            'Es rueda y eje. La rueda grande del trapiche multiplica la fuerza del buey o motor a través del eje que aprieta los rodillos.',
        },
        {
          enunciado: '¿Qué máquina simple esconde una rampa para subir cajas a un camión?',
          opciones: ['Polea', 'Plano inclinado', 'Tornillo', 'Palanca'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La rampa es un plano inclinado. Subes el peso con menos fuerza pero recorriendo más distancia. Toda ganancia mecánica tiene contrapartida.',
          feedbackIncorrecto:
            'Plano inclinado. La rampa te deja subir con menos fuerza, a cambio de caminar más distancia. El intercambio fuerza-distancia es la lógica de toda máquina simple.',
        },
        {
          enunciado: '¿Cuál es el "costo" típico de una máquina simple?',
          opciones: [
            'No tiene costo, es gratis',
            'Gastar más energía',
            'Si ganas fuerza, pierdes distancia (o al revés)',
            'Romperse rápido',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. No hay máquina simple gratis: si multiplicas la fuerza, recorres más distancia. La energía total no cambia.',
          feedbackIncorrecto:
            'El intercambio es fuerza por distancia (o velocidad). Una palanca larga gana fuerza pero exige más recorrido del brazo. La energía total se conserva.',
        },
        {
          enunciado: '¿Por qué el cuchillo o el machete es un ejemplo de cuña?',
          opciones: [
            'Porque es metálico',
            'Porque concentra la fuerza en un filo muy delgado',
            'Porque tiene mango',
            'Porque sirve para cortar comida',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La cuña concentra una fuerza grande en un área pequeña (el filo). Por eso un cuchillo corta lo que la mano sola no puede.',
          feedbackIncorrecto:
            'La cuña concentra fuerza. La fuerza de tu brazo (grande, distribuida) se concentra en el filo (pequeño, puntual). Eso es lo que corta.',
        },
        {
          enunciado:
            'En el saber ancestral del trapiche y la noria, ¿qué aplica directamente a las máquinas modernas?',
          opciones: [
            'Nada — las máquinas modernas son distintas',
            'Las 6 máquinas simples y la lógica de intercambio fuerza-distancia',
            'Que las antiguas eran más bonitas',
            'Que las modernas son siempre mejores',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Las 6 máquinas simples se inventaron hace miles de años y siguen siendo la base de toda máquina moderna. La física no cambió — solo los materiales y las escalas.',
          feedbackIncorrecto:
            'La física se conserva: las 6 máquinas simples del trapiche son las mismas que están en tu bicicleta o en un robot industrial. Cambia el material, no el principio.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, cada vez que veas una máquina cotidiana (bicicleta, tijeras, descorchador, persiana, ascensor, escalera mecánica), pregúntate: ¿cuál de las 6 máquinas simples opera adentro? Anota 5 ejemplos durante la semana. El próximo lunes compararemos las listas — es asombroso cuántas máquinas simples están escondidas en lo moderno.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Lo que la modernidad llama "atrasado" suele ser lo que el planeta puede sostener.',
      preguntaEspejo:
        '¿Qué tecnologías locales del Valle, el Pacífico o el campo colombiano consideré "atrasadas" sin haberlas mirado bien? ¿Cuáles funcionan hoy mejor que sus reemplazos modernos?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que está bien hecho con poco material durará más que lo hecho con mucho material y poco diseño.',
      preguntaEspejo:
        '¿De los objetos técnicos que uso, cuáles están bien diseñados (durarán) y cuáles están sobrediseñados (se romperán pronto)? ¿Qué de mi cotidianidad envejecerá bien?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Una tecnología que no pide al planeta más de lo que devuelve es una tecnología ética por diseño.',
      preguntaEspejo:
        '¿Qué tecnología que uso a diario depende de fuentes de energía que dañan el planeta? ¿Y qué tecnología más antigua resolvería lo mismo con menos costo ambiental?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a ver las 6 máquinas simples escondidas en lo cotidiano — y descubriste que lo "moderno" es lo "antiguo" en otro material.',
    emocional:
      'Sentiste respeto por el ingenio del trapiche, la noria y el molino — tecnologías locales que la modernidad llamó "atrasadas" sin razón.',
    ciudadana:
      'Conectaste el diseño técnico con la sostenibilidad: lo que funciona sin electricidad es lo que el planeta puede sostener.',
    local:
      'Anclaste el aprendizaje en tecnologías colombianas (trapiche del Valle, noria del campo, molino del Pacífico) como objetos de orgullo, no de vergüenza.',
    intergeneracional:
      'Heredaste un saber milenario: las 6 máquinas simples llevan siendo la base de toda tecnología desde Mesopotamia hasta tu bicicleta.',
  },
};

export default contenido;
