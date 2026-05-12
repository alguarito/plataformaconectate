/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 3
 * Tema: La balanza y el peso — medir como acto político.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-3.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 3,
  titulo: 'La balanza y el peso — medir como acto político',
  ocultarPDF: false,
  resumen:
    'Construyes una balanza casera y entiendes por qué quien define el patrón de medida define el reparto. Medir nunca fue neutral.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Medir y poder',

  saberAncestral: {
    saber:
      'Las pesas de la plaza del pueblo del Valle marcaban el patrón con el que se cobraba un saco de café, un kilo de panela, una libra de queso. Las balanzas de los orfebres Quimbaya servían para repartir el oro. Las medidas coloniales (vara, fanega, arroba) las impuso el rey de España y cambiaron cuánto valía la tierra de un campesino. Medir nunca fue neutral: medir es regular, y quien define el patrón define el reparto.',
    fuente: 'Pesas de plaza del Valle, balanzas Quimbaya, medidas coloniales colombianas',
    preguntaPuente:
      '¿Qué patrones de medida estás usando hoy mismo (en tu vida escolar, social, digital) sin saber quién los definió? ¿Qué cambiaría si pudieras cambiar uno de ellos?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Pesas de la plaza, balanzas Quimbaya', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Patrones que rigen tu vida hoy', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de un sistema de medición', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Balanza casera + reflexión política', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Cada vez que aceptas una métrica sin preguntar quién la definió, aceptas también la política que viene con ella. Notas escolares, likes, scores crediticios, IMC — todos son patrones humanos disfrazados de objetividad. Entender cómo funciona una balanza es el primer paso para cuestionarlos con criterio.',
    preguntaDetonante:
      'Si pudieras cambiar UNA medida que rige tu vida (la escala de notas, los seguidores en redes, las calorías en una etiqueta), ¿cuál cambiarías y por qué?',
    activacion: {
      titulo: 'El test del patrón invisible',
      descripcion:
        'En 3 minutos, mira tu celular y anota 3 cifras visibles en este momento: hora exacta, porcentaje de batería, número de notificaciones. Para cada una pregúntate quién definió el patrón. Vas a darte cuenta que el ritmo de tu día está medido por entidades que nunca conociste.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 2 viste cómo una máquina simple multiplica fuerza. Hoy ves cómo un objeto simple multiplica confianza social.',
      siguiente:
        'En la sesión 4 construirás tu propia línea del tiempo de la técnica, mezclando saberes locales y globales con criterio propio.',
    },
  },

  conceptosClave: [
    {
      termino: 'Patrón de medida',
      definicion:
        'La unidad acordada con la que se compara lo que se quiere medir. Nunca es natural — siempre es un acuerdo humano que alguien definió en algún momento.',
      ejemplo:
        'El kilogramo fue, hasta 2019, un cilindro de platino guardado en una caja fuerte en París. Eso era el patrón mundial del peso. Hoy se define por una constante física.',
      emoji: '🎯',
    },
    {
      termino: 'Tres elementos de la balanza',
      definicion:
        'Toda balanza tiene punto de apoyo, dos brazos iguales y un patrón conocido en uno de los brazos. Quita uno y la balanza miente.',
      ejemplo:
        'Las balanzas Quimbaya tenían dos platillos colgados de los extremos de una vara horizontal apoyada en un eje central. La misma estructura que las balanzas digitales modernas.',
      emoji: '⚖️',
    },
    {
      termino: 'Medir = regular',
      definicion:
        'Medir no solo describe — también regula. Lo que se mide se vuelve real y comparable; lo que no se mide queda fuera del sistema.',
      ejemplo:
        'Si un trabajo se mide solo por horas de pantalla, se invisibiliza el descanso. Si solo se mide PIB, se invisibiliza el trabajo doméstico. El qué medir es política.',
      emoji: '📏',
    },
    {
      termino: 'Métricas de vanidad vs decisión',
      definicion:
        'Una métrica de decisión te lleva a hacer algo concreto. Una métrica de vanidad solo te hace sentir algo. La mayoría de cifras digitales son vanidad disfrazada de información.',
      ejemplo:
        '"30 likes nuevos hoy" = vanidad si no decides nada con eso. "3 personas escribieron preguntando precios" = decisión, porque ajustas tu estrategia.',
      emoji: '🪞',
    },
    {
      termino: 'Equilibrio = verdad',
      definicion:
        'En una balanza física, si los dos brazos se equilibran con un patrón conocido, podemos confiar en el resultado. Sin patrón, no hay verdad; sin equilibrio, tampoco.',
      ejemplo:
        'En la plaza del Valle, antes de comprar un kilo de café, la gente miraba que la balanza estuviera bien equilibrada en vacío. Si no, sabía que el vendedor iba a robar gramos.',
      emoji: '🎚',
    },
    {
      termino: 'Dataficación de la vida',
      definicion:
        'Tendencia contemporánea de medir todo (pasos, sueño, productividad, popularidad, relaciones) y dejar que esas medidas decidan tu valor. Floridi advierte que lo que no se mide se invisibiliza.',
      ejemplo:
        'Si tu reloj inteligente mide pasos pero no descanso emocional, vas a optimizar pasos. Lo medido moldea lo que valoras — aunque no te des cuenta.',
      emoji: '📊',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Patrones de medida en tu vida',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota 5 mediciones distintas que regulan tu vida actual: nota de examen, tiempo de pantalla, calorías, seguidores, peso corporal, etc.',
        'Para cada una pregúntate (o googlea): ¿quién define el patrón?',
        'Para cada una, ¿qué pasa contigo según el resultado? (pasas/repruebas, te recomiendan algo, te aceptan/rechazan).',
        'Marca al menos UNA medición cuyo patrón te parezca injusto o discutible.',
      ],
      cuaderno: {
        titulo: '5 mediciones que rigen mi vida',
        formato: 'Tabla 3 columnas (Medición | Quién define el patrón | Qué decide sobre mí), 5 filas',
        extension: '5 filas + marca a la medición discutible',
      },
      criterios: [
        'Las 5 mediciones son reales de tu vida (no genéricas)',
        'Identificaste o intuyes quién define cada patrón',
        'Reconoces al menos UNA medición cuyo patrón cuestionas',
        'Las consecuencias prácticas están descritas',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Sistemas de medición y poder',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige 3 sistemas de medición distintos (puede ser nota escolar, IPC, peso corporal, seguidores en redes).',
        'Para cada uno completa la anatomía: qué se mide, patrón, autoridad, instrumento, consecuencia.',
        'Identifica explícitamente quién es la autoridad que define el patrón.',
        'Nombra al menos UNA consecuencia concreta para una persona real (puedes ser tú).',
      ],
      cuaderno: {
        titulo: 'Sistemas de medición y poder',
        formato: '3 fichas con los 5 elementos de la anatomía',
        extension: '3 fichas completas',
      },
      criterios: [
        'Las 3 fichas nombran a la autoridad que define el patrón',
        'Al menos 1 consecuencia concreta para una persona real',
        'Distingues entre el instrumento (balanza, examen, app) y el patrón (kilo, escala, métrica)',
        'Puedes explicar las 3 sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Balanza casera + reflexión política',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Construye una balanza casera: gancho de ropa o regla como brazo, dos vasos/tapas como platillos, hilo, un punto de apoyo (lápiz, dedo).',
        'Verifica equilibrio en vacío (los dos platillos al mismo nivel).',
        'Compara 2 pares de objetos y anota cuál pesa más en cada par.',
        'Escribe una reflexión de 1 página sobre 1 sistema de medición que rige tu vida: qué mide, quién lo define, a quién beneficia, qué cambiarías.',
      ],
      cuaderno: {
        titulo: 'Balanza casera y reflexión política',
        formato: '(1) Dibujo o foto de la balanza. (2) Bitácora de 2 comparaciones. (3) Reflexión escrita de 1 página.',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        'La balanza casera se equilibra en vacío y permite comparar 2 objetos',
        'Hay dibujo o foto de la balanza con piezas etiquetadas',
        'La reflexión elige UN sistema de medición concreto',
        'Nombra explícitamente quién define el patrón',
        'Nombra a quién beneficia y a quién perjudica',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la balanza y la reflexión de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos con un compañero. Mira primero su balanza y prueba si funciona.',
        'Lee su reflexión. Califica del 1 al 5: (a) ¿la balanza funciona?, (b) ¿la reflexión nombra al patrón y la autoridad?, (c) ¿hay propuesta de cambio?',
        'Escribe 1 observación que afirma + 1 que reta sobre la reflexión política.',
        'Devuelve y conversen 5 min: ¿coincidieron en cuestionar la misma autoridad o diferentes?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la balanza y reflexión de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Verificaste físicamente que su balanza funcione',
        'Las 3 calificaciones tienen justificación de 1 línea',
        'La observación de la reflexión es específica',
        'La conversación cerró con 1 acuerdo o diferencia clara',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el concepto de medir',
      instrucciones:
        '5 preguntas para confirmar que entiendes medir como acto político. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué elementos debe tener toda balanza confiable?',
          opciones: [
            'Solo dos platillos',
            'Punto de apoyo + dos brazos iguales + patrón conocido',
            'Una pantalla digital',
            'Electricidad',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Esa es la estructura desde las balanzas Quimbaya hasta la balanza digital del supermercado. Sin alguno de los 3, la balanza miente.',
          feedbackIncorrecto:
            'Punto de apoyo + dos brazos iguales + patrón conocido. Quita uno y la balanza pierde su capacidad de decir la verdad.',
        },
        {
          enunciado: '¿Qué quiere decir que "medir nunca es neutral"?',
          opciones: [
            'Que las balanzas siempre mienten',
            'Que el patrón siempre fue definido por alguien con intereses concretos',
            'Que las matemáticas son injustas',
            'Que medir es ilegal',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Toda medida tiene un patrón humano detrás. Aceptar la medida es aceptar también la política de quien definió el patrón.',
          feedbackIncorrecto:
            'El patrón siempre lo definió alguien. Las medidas coloniales sobre tierras campesinas, las notas escolares, los algoritmos de redes: todos tienen autoridad detrás.',
        },
        {
          enunciado: '¿Cuál de estas es una métrica de VANIDAD y no de decisión?',
          opciones: [
            'Número de seguidores en una red sin acción derivada',
            'Tasa de conversión de tu sitio web',
            'Cantidad de visitas únicas que generan contactos',
            'Tiempo promedio de lectura de un post',
          ],
          respuestaIndex: 0,
          feedbackCorrecto:
            'Sí. "Tener seguidores" sin nada que decidir con eso es vanidad. Las otras 3 sí informan decisiones reales sobre qué cambiar.',
          feedbackIncorrecto:
            'Los seguidores sin decisión derivada son vanidad. Tasas de conversión, contactos generados y tiempo de lectura sí llevan a ajustes concretos.',
        },
        {
          enunciado: '¿Por qué los pueblos miraban la balanza vacía antes de comprar en la plaza?',
          opciones: [
            'Por costumbre',
            'Para verificar que el equilibrio en vacío fuera perfecto antes de confiar en el peso',
            'Para limpiarla',
            'Para impresionar al vendedor',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Si la balanza vacía no equilibra, el resultado al pesar miente. Esa desconfianza educada del campesino es el principio del método científico.',
          feedbackIncorrecto:
            'Verificación del cero. Si la balanza vacía no equilibra, cualquier peso será falso. La desconfianza educada del campesino es ciencia popular.',
        },
        {
          enunciado:
            'En el saber ancestral de las pesas de la plaza, ¿qué aplica a las métricas digitales de hoy?',
          opciones: [
            'Nada — las redes sociales son nuevas',
            'Que toda medida tiene autoridad detrás y vale la pena preguntar quién la definió',
            'Que los algoritmos siempre son justos',
            'Que solo lo medido importa',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La pesa de la plaza y el algoritmo de TikTok hacen lo mismo: alguien define el patrón y eso decide tu vida. Cuestionar el patrón es un acto político en ambos casos.',
          feedbackIncorrecto:
            'Toda medida tiene autoridad detrás. La pesa de la plaza ancestral y el algoritmo digital moderno funcionan con la misma lógica: alguien definió el patrón con un proyecto en mente.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Por 3 días, anota cada vez que una medición decide algo sobre ti (nota, hora exacta del bus, calorías, seguidores ganados o perdidos, score de un videojuego). Al final lee la lista. Vas a notar que vivimos rodeados de medición silenciosa. El próximo lunes traemos esa bitácora al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda imposición de medida es un acto de poder; toda recuperación de medida propia es un acto de liberación.',
      preguntaEspejo:
        '¿Qué medidas rigen mi vida sin que yo sepa de dónde vinieron? ¿Cuál podría empezar a cuestionar o sustituir por una propia?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'No te perturbe lo que otros miden de ti; perturbáte solo lo que tú mides en ti mismo.',
      preguntaEspejo:
        '¿Qué medida externa estoy dejando que defina mi valor? ¿Qué medida interna podría sustituirla o complementarla?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La dataficación es una forma moderna de medición política: lo que se mide se vuelve real, lo que no se mide se invisibiliza.',
      preguntaEspejo:
        '¿Qué de mí está siendo medido en este momento por alguna plataforma? ¿Qué de mí queda invisibilizado porque ningún sistema lo mide?',
    },
  },

  cincoDimensiones: {
    personal:
      'Construiste con tus manos un objeto que durante siglos sostuvo la confianza social — la balanza.',
    emocional:
      'Reconociste que medidas externas (notas, likes, calorías) deciden mucho de cómo te sientes — y que puedes cuestionarlas.',
    ciudadana:
      'Entendiste que medir es regular: quien define el patrón define el reparto, en la plaza y en la app.',
    local:
      'Anclaste el aprendizaje en pesas reales del Valle, orfebrería Quimbaya y medidas coloniales colombianas.',
    intergeneracional:
      'La desconfianza educada del comprador de la plaza ancestral es la misma herramienta crítica que necesitas frente al algoritmo digital.',
  },
};

export default contenido;
