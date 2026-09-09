/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 1
 * (sesión global 1).
 *
 * Auto-generado desde content/guias/9/9-1-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 1,
  titulo: '¿Qué es técnica? — del cuerpo al instrumento',
  resumen: 'Entre los embera, el jaibaná aprende acompañando a un maestro durante años: se aprende estando al lado, mirando y haciendo. Así empieza toda técnica. Hoy defines qué es la técnica para ti, distingues cuerpo, herramienta y máquina, y decides cuáles de tus objetos amplían lo que sabes hacer y cuáles hacen que no te haga falta saberlo.',
  duracionMin: 90,
  subtema: 'Apertura · Historia de la técnica',
  preLectura: {
    porQueImporta: 'Vas a estudiar la historia de la tecnología durante un año entero. Si no defines primero qué llamas técnica, todo lo que aprendas va a ser información prestada.',
    preguntaDetonante: 'Si mañana te quitaran los cinco objetos que más usas, ¿qué cosas seguirías sabiendo hacer y cuáles no?',
    activacion: {
      titulo: 'El cuerpo extendido',
      descripcion: 'En 3 minutos, anota cinco cosas que hiciste hoy usando un objeto. Al lado de cada una, escribe qué parte del cuerpo estaba extendiendo ese objeto.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En octavo cerraste con pensamiento computacional y trabajo con datos.',
      siguiente: 'En la sesión 2 estudias máquinas simples del campo colombiano, como el trapiche y la noria.'
    }
  },
  conceptosClave: [
    {
      termino: 'Cuerpo',
      definicion: 'La primera etapa de toda técnica: el órgano hace el trabajo sin ningún objeto de por medio.',
      ejemplo: 'Contar con los dedos, aplaudir para llamar la atención, memorizar un camino.',
      categoria: 'Las tres etapas'
    },
    {
      termino: 'Herramienta',
      definicion: 'Objeto que extiende una función del cuerpo. Sigue necesitando tu fuerza o tu atención todo el tiempo.',
      ejemplo: 'El cuchillo extiende la fuerza de la mano. El cuaderno extiende la memoria.',
      categoria: 'Las tres etapas'
    },
    {
      termino: 'Máquina',
      definicion: 'Sistema que automatiza el trabajo usando otra fuente de energía. Repite el gesto sin que tú lo sostengas.',
      ejemplo: 'El trapiche es máquina y no tiene un solo circuito. La calculadora también lo es.',
      categoria: 'Las tres etapas'
    },
    {
      termino: 'Ampliar',
      definicion: 'Cuando la técnica te deja hacer más de lo que hacías, y tú sigues sabiendo cómo se hace.',
      ejemplo: 'Leer un mapa con el GPS al lado. El aparato suma, pero tú sigues orientándote.',
      categoria: 'La distinción que importa'
    },
    {
      termino: 'Reemplazar',
      definicion: 'Cuando la técnica hace que deje de hacer falta que tú sepas. No es malo en sí; conviene saber cuándo pasa.',
      ejemplo: 'Seguir la voz del GPS sin mirar por dónde vas. Si se apaga, no sabes volver.',
      categoria: 'La distinción que importa'
    },
    {
      termino: 'Técnica invisible',
      definicion: 'La que entró tan hondo que dejó de notarse. Suelen ser las más poderosas, justo porque ya no se ven.',
      ejemplo: 'Leer. Hace quinientos años casi nadie podía; hoy ni siquiera lo sientes como una técnica.',
      categoria: 'La distinción que importa'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Distingues cuerpo, herramienta y máquina?',
      instrucciones: 'Cinco preguntas para verificar el vocabulario de la técnica antes de la sesión 2. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Alguien aplaude para llamar la atención. ¿En qué etapa de la técnica está?',
          opciones: [
            'En ninguna, porque la técnica necesita algún objeto de por medio.',
            'En la de herramienta, porque las manos funcionan como una herramienta.',
            'En la de cuerpo, porque el órgano resuelve el problema sin objetos.',
            'En la de máquina, porque el sonido se propaga por sí solo.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. El cuerpo es la primera etapa y ya resuelve un problema, en este caso avisar.',
          feedbackIncorrecto: 'Está en la etapa de cuerpo. Antes de cualquier objeto, el gesto corporal ya es técnica.'
        },
        {
          enunciado: '¿Cuál de estos es una máquina y no una herramienta?',
          opciones: [
            'Un trapiche de caña.',
            'Un cuchillo de cocina bien afilado.',
            'Un lápiz de mina blanda.',
            'Una taza de barro cocido.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Automatiza el trabajo con otra fuente de energía, aunque no tenga un solo circuito.',
          feedbackIncorrecto: 'El trapiche. Los otros tres necesitan tu fuerza todo el tiempo, así que son herramientas u objetos.'
        },
        {
          enunciado: '¿Cuándo se dice que una técnica reemplaza el cuerpo en vez de ampliarlo?',
          opciones: [
            'Cuando funciona con electricidad en lugar de fuerza humana.',
            'Cuando es más rápida que hacerlo a mano.',
            'Cuando cuesta más dinero del que costaba antes.',
            'Cuando deja de hacer falta que tú sepas cómo se hace.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. No es cuestión de velocidad ni de energía, sino de si la capacidad sigue siendo tuya.',
          feedbackIncorrecto: 'Cuando deja de hacer falta que sepas hacerlo. La velocidad y la electricidad no deciden eso.'
        },
        {
          enunciado: '¿Por qué las técnicas que ya no notamos suelen ser las más poderosas?',
          opciones: [
            'Porque son las más antiguas de todas las que usamos.',
            'Porque entraron tan hondo que ya funcionan como parte del cuerpo.',
            'Porque casi siempre son más baratas que las nuevas.',
            'Porque solo las conocen unos pocos especialistas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Leer fue revolucionario hace quinientos años y hoy ni siquiera se siente como técnica.',
          feedbackIncorrecto: 'Porque ya funcionan como parte del cuerpo. Volverse invisible es señal de poder, no de vejez.'
        },
        {
          enunciado: '¿Qué enseña sobre la técnica la formación del jaibaná embera?',
          opciones: [
            'Que el conocimiento técnico se hereda dentro de la familia.',
            'Que la teoría siempre va antes que la práctica del oficio.',
            'Que se aprende estando al lado, mirando y haciendo.',
            'Que las técnicas antiguas funcionan mejor que las modernas.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. El jaibaná no hereda el cargo: acompaña a un maestro durante años.',
          feedbackIncorrecto: 'Que se aprende acompañando. No se hereda, y la teoría no va primero.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus cinco objetos, ¿cuál te reemplazó una capacidad sin que te dieras cuenta, y te importa?',
    transferencia: 'Lleva el cuaderno tres días y anota cada objeto técnico que uses, con la función del cuerpo que extiende. La lista va a ser más larga de lo que esperas.',
    cierre: 'Antes que cualquier objeto está un cuerpo que hace algo y alguien que aprende mirándolo.'
  },
  saberAncestral: {
    saber: 'Entre los embera, el jaibaná no nace jaibaná ni hereda el cargo: aprende de un maestro, al que acompaña durante años. El antropólogo Luis Guillermo Vasco Uribe lo documentó en Jaibanás: los verdaderos hombres (1985), tras trabajar con los embera chamí de Risaralda y con los embera del río Garrapatas, en el Valle del Cauca. Se aprende estando al lado, mirando y haciendo, no recibiendo instrucciones. Por eso lo primero que se aprende de alguien es cómo mira el mundo. Fíjate en lo que eso dice de la técnica. Antes que cualquier objeto está un cuerpo que hace algo, y alguien que aprende mirándolo. La herramienta llega después. La cara de exclusión: el saber del jaibaná es restringido y ha sido objeto de extracción y exotización. Esta guía toma solo el modo de aprender, no el contenido, y ahí se detiene. Hoy vas a mirar tu propia vida con esa lente y a decidir qué llamas técnica.',
    fuente: 'Formación del jaibaná embera · se aprende acompañando, no recibiendo instrucciones',
    referencia: 'Vasco Uribe, L. G. (1985). Jaibanás: los verdaderos hombres. Fondo de Promoción de la Cultura, Banco Popular.',
    preguntaPuente: 'El aprendiz de jaibaná pasa años mirando a alguien hacer. ¿Qué sabes hacer tú porque viste a alguien hacerlo, y qué sabes hacer solo porque un aparato lo hace por ti?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Aprender estando al lado',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Técnicas en tu cotidianidad',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Cuerpo, herramienta, máquina',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu definición personal de técnica',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Técnicas en tu cotidianidad',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Sin moverte de donde estás, encuentra cinco objetos que extiendan tu cuerpo.',
        'Escribe para cada uno qué función corporal concreta amplía, sin decir «ayudar».',
        'Marca cuáles ya no notas y cuáles todavía sientes nuevos.',
        'Señala al menos uno que venga de un oficio o de una tradición, no de una fábrica.'
      ],
      cuaderno: {
        titulo: 'Técnicas en mi cotidianidad',
        formato: 'tabla de 5 filas y 3 columnas (objeto / qué del cuerpo extiende / lo noto o ya es cuerpo)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Ninguna fila describe la función como «ayudar».',
        'Una fila está marcada como de oficio o tradición.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Cuerpo, herramienta, máquina',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres etapas con una frase propia cada una.',
        'Pongan un ejemplo de su vida diaria en cada etapa.',
        'Pongan un ejemplo de un oficio o una tradición que conozcan en cada etapa.',
        'Tomen un objeto de la Actividad 1 y decidan si amplía o reemplaza, con una razón escrita.'
      ],
      cuaderno: {
        titulo: 'Cuerpo, herramienta, máquina',
        formato: 'tres fichas, una por etapa, con la definición propia, un ejemplo de tu vida y uno de oficio',
        extension: 'media página'
      },
      criterios: [
        'Las tres etapas tienen definición propia, no copiada de la guía.',
        'Cada etapa tiene un ejemplo cotidiano y uno de oficio o tradición.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu definición personal de técnica',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Responde primero en voz baja qué le dirías a un niño que preguntara qué es la técnica.',
        'Escribe esa respuesta en una sola frase.',
        'Lista cinco objetos de tu vida que la prueben, con su función corporal y su etapa.',
        'Asegúrate de que al menos uno venga de un oficio o una tradición.',
        'Quita de tu frase toda palabra que no haga falta.',
        'Léesela a un compañero y pídele que diga con sus palabras qué entendió.'
      ],
      cuaderno: {
        titulo: 'Mi definición personal de técnica',
        formato: 'la frase con tu definición y los cinco ejemplos numerados con función y etapa',
        extension: 'media página'
      },
      criterios: [
        'La definición cabe en una frase y se lee de un tirón.',
        'Los cinco ejemplos nombran función corporal y etapa.',
        'Un compañero dijo qué entendió y coincidió con lo que quisiste decir.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.2.4',
      lente: 'lente del nosotros',
      cita: 'La tecnología no es ciencia aplicada (teoría concretada), sino que es técnica científica.',
      preguntaEspejo: '¿Qué sé hacer sin poder explicarlo del todo, y quién me lo enseñó estando al lado?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 20 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'La filosofía enseña a hacer, no a decir; y exige que cada uno viva según su propia ley, que la vida no desdiga de la palabra. (trad. propia)',
      preguntaEspejo: '¿Mi definición describe cómo uso las cosas de verdad, o cómo me gustaría usarlas?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Las tecnologías se usan primero para ahorrar tiempo y luego para matarlo. (trad. propia)',
      preguntaEspejo: '¿En qué gasté el tiempo que me ahorró el objeto que más uso?'
    }
  },
  cincoDimensiones: {
    personal: 'Escribiste una definición tuya, no prestada, y vas a poder compararla con la que tengas en diciembre.',
    emocional: 'Distinguir entre lo que amplía y lo que reemplaza quita el drama de la discusión sobre pantallas.',
    ciudadana: 'Ninguna técnica es neutral. Preguntar a quién le sirve es el primer acto de pensamiento sobre ella.',
    local: 'El objeto de oficio que pusiste en tu lista enseña lo mismo que cualquier aparato, y casi nadie lo cuenta.',
    intergeneracional: 'El aprendiz de jaibaná mira durante años. Tú aprendiste algo así de alguien, aunque no lo hayas llamado técnica.'
  }
};

export default contenido;
