/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 9
 * Tema: Tecnologías propias — saberes que el mundo aprende ahora.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-9.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 9,
  titulo: 'Tecnologías propias — saberes que el mundo aprende ahora',
  ocultarPDF: false,
  resumen:
    'Construyes una ficha técnica de una tecnología propia regenerativa con argumentos rigurosos, no nostálgicos. Justicia técnica antes que rescate cultural.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Saberes regenerativos',

  saberAncestral: {
    saber:
      'La agricultura andina de andenes regenera suelos. La navegación afro-pacífica lee corrientes sin GPS. La arquitectura en guadua resiste sismos. La medicina kogui de la Sierra Nevada cataloga plantas medicinales hace siglos. Lo que la modernidad europea llamó "atrasado" hoy lo reevalúan universidades del norte como tecnologías regenerativas: técnicas que dan más al planeta de lo que toman.',
    fuente: 'Andenes andinos, arquitectura en guadua del Pacífico, navegación afro-pacífica, medicina kogui',
    preguntaPuente:
      '¿Qué saber técnico tradicional tienen tu familia o tu región que la modernidad oficial ignora o subvalora? ¿Por qué crees que lo subvalora?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Tecnologías regenerativas propias', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: '4 tecnologías propias reales', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 criterios de tecnología regenerativa', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Ficha técnica con argumentos rigurosos', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Frente a la crisis climática, energética y de salud mental, muchas tecnologías propias latinoamericanas ofrecen modelos. No es nostalgia: es ingeniería que sobrevivió siglos por bien diseñada. Aprender a defenderlas técnicamente es soberanía intelectual.',
    preguntaDetonante:
      'Si tuvieras que escoger una sola tecnología (de la lista que conoces) para reconstruir una región devastada por una catástrofe — ¿elegirías una moderna o una ancestral? ¿Por qué?',
    activacion: {
      titulo: 'Test del estereotipo',
      descripcion:
        'En 3 minutos, escribe los primeros 3 adjetivos que se te vienen a la cabeza cuando lees "tecnología indígena precolombina". Mira la lista honestamente. ¿Hay palabras como "primitiva" o "atrasada"? Si las hay, no eres tú — es la educación recibida. Hoy vamos a probar técnicamente si esos adjetivos aplican.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 8 viste cómo el cálculo se externalizó hacia el chip. Hoy ves saberes que sobrevivieron sin chip ni electricidad — y hoy se reevalúan.',
      siguiente:
        'En la sesión 10 (cierre del periodo) escribirás tu manifiesto del técnico crítico recogiendo todo lo aprendido en las 9 sesiones.',
    },
  },

  conceptosClave: [
    {
      termino: 'Tecnología propia',
      definicion:
        'Saber técnico desarrollado por un pueblo o región específicos, transmitido intergeneracionalmente, que resuelve un problema concreto con materiales y conocimientos locales.',
      ejemplo:
        'El telar wayuu no es decoración: es ingeniería textil que produce mantas duraderas con técnicas que ningún libro patentado podría reproducir.',
      emoji: '🌎',
    },
    {
      termino: 'Tecnología regenerativa',
      definicion:
        'Técnica que da más al sistema (suelo, agua, comunidad) de lo que toma. Opuesta a la extractiva, que toma sin reponer. La mayoría de saberes ancestrales son regenerativos por diseño.',
      ejemplo:
        'Los andenes andinos no agotan el suelo cuando cultivan — lo enriquecen con cada ciclo. La agricultura industrial moderna agota suelos en 30-50 años.',
      emoji: '♻️',
    },
    {
      termino: 'Funcionalidad probada',
      definicion:
        'Un saber tradicional califica como tecnología cuando demuestra que resuelve un problema técnico real, no solo por siglos de uso sino por su persistencia frente a alternativas.',
      ejemplo:
        'La guadua sigue usándose para construcción antisísmica en Eje Cafetero — no por tradición sino porque ingenieros estructurales demostraron su comportamiento ante terremotos.',
      emoji: '✅',
    },
    {
      termino: 'Adaptabilidad al contexto',
      definicion:
        'Saber que encaja con clima, materiales y cultura locales. No exige importar nada externo. Eso lo hace resiliente cuando la cadena global falla.',
      ejemplo:
        'En el Pacífico llueve casi todo el año. La arquitectura en guadua con techo inclinado de palma encaja perfecto. Concreto y zinc requieren importar e impermeabilizar.',
      emoji: '🏞',
    },
    {
      termino: 'Transmisibilidad intergeneracional',
      definicion:
        'Saber que se enseña sin tecnología compleja, de persona a persona, generación tras generación. No depende de patentes ni manuales — depende de comunidad viva.',
      ejemplo:
        'La medicina kogui se transmite por la mamuna (maestra) a aprendices durante 18 años. Ningún libro reemplaza ese aprendizaje encarnado.',
      emoji: '🔗',
    },
    {
      termino: 'Defensa técnica vs nostálgica',
      definicion:
        'Defender una tecnología propia con argumentos técnicos (resuelve X problema, evidencia Y, alternativa moderna Z tiene desventaja W) en lugar de morales ("es nuestra tradición, por eso vale").',
      ejemplo:
        'Mal: "La guadua es bonita y representa nuestra cultura". Bien: "La guadua tiene resistencia a tracción de 132 MPa, comparable al acero estructural, con costo de carbono 10% del concreto".',
      emoji: '🛡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '4 tecnologías propias reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Lee información concreta sobre estas 4 tecnologías propias: andenes andinos, arquitectura en guadua del Pacífico, navegación afro-pacífica, medicina kogui.',
        'Para cada una identifica qué problema técnico resuelve.',
        'Anota al menos UNA ventaja sobre alternativas modernas.',
        'Anota por qué crees que la modernidad la subvaloró.',
      ],
      cuaderno: {
        titulo: '4 tecnologías propias latinoamericanas',
        formato: 'Tabla 4 columnas (Tecnología | Problema | Ventaja sobre alternativa moderna | Por qué la subvaloraron), 4 filas',
        extension: '4 filas completas',
      },
      criterios: [
        'Las 4 tecnologías están bien identificadas con datos concretos',
        'Cada una tiene problema técnico específico, no genérico',
        'Reconozco al menos UNA ventaja real sobre la alternativa moderna',
        'Identifico al menos UNA que NO conocía antes',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 criterios de una tecnología regenerativa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada criterio (funcionalidad, sostenibilidad, adaptabilidad, transmisibilidad) escribe una ficha.',
        'En cada ficha: definición en tus palabras + 1 ejemplo de las 4 tecnologías que la cumple bien.',
        'Cierra con 1 párrafo: ¿qué tecnología moderna familiar cumple los 4 criterios? ¿Cuál falla en uno?',
        'Tu propio futuro técnico debería tener cuál criterio como prioridad.',
      ],
      cuaderno: {
        titulo: '4 criterios de una tecnología regenerativa',
        formato: '4 fichas + 1 párrafo de comparación + 1 línea de prioridad personal',
        extension: '4 fichas + 2 párrafos',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene ejemplo de una de las 4 tecnologías propias',
        'El párrafo comparativo es honesto (reconoces fallas modernas)',
        'Identificas qué criterio priorizarías en tu futuro',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Ficha técnica de UNA tecnología propia',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige UNA tecnología propia (puede ser de las 4 vistas o de tu región: trapiche, telar, conuco, etc.).',
        'Investiga 10 min en internet con criterio técnico, no decorativo.',
        'Llena las 6 secciones: nombre y origen, problema, mecanismo + dibujo, evidencia histórica, comparación con alternativa moderna, aplicación contemporánea.',
        'Dibuja el mecanismo a mano (no copies foto, dibuja con etiquetas).',
        'Cierra con propuesta contemporánea concreta (qué problema actual podría ayudar a resolver).',
      ],
      cuaderno: {
        titulo: 'Ficha técnica de [nombre]',
        formato: '6 secciones en hoja A4 + dibujo del mecanismo + tabla de comparación',
        extension: '1 página A4',
      },
      criterios: [
        'Las 6 secciones presentes y completas',
        'Dibujo del mecanismo técnico (no solo descripción)',
        'Tabla de comparación con alternativa moderna',
        'Aplicación contemporánea concreta',
        'Cero argumentos solo de tradición; todo defendido técnicamente',
        'Aplica al menos 3 de los 4 criterios de tecnología regenerativa',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la ficha de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee la ficha del compañero sin que te explique.',
        'Califica del 1 al 5: (a) ¿defensa técnica, no nostálgica?, (b) ¿dibujo del mecanismo claro?, (c) ¿aplicación contemporánea específica?',
        'Marca con 🚩 los argumentos nostálgicos (si los hay) y con ✨ los técnicos rigurosos.',
        'Conversen 5 min: ¿reconocerías esta tecnología como "hito técnico" según los 4 criterios? ¿Por qué sí o no?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la ficha de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste argumentos nostálgicos y técnicos diferenciados',
        'La observación es constructiva y específica',
        'La conversación cerró con acuerdo sobre si califica como hito o no',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los criterios técnicos',
      instrucciones:
        '5 preguntas para confirmar que distingues defensa técnica de defensa nostálgica. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos es un argumento TÉCNICO (no nostálgico) a favor de la guadua?',
          opciones: [
            'Es bonita y representa nuestra cultura',
            'Tiene resistencia a tracción comparable al acero con 10% del costo de carbono del concreto',
            'Nuestros abuelos la usaban',
            'Es tradición del Pacífico',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Datos técnicos verificables, no apelaciones a tradición. Esa es la diferencia entre defensa técnica y nostalgia disfrazada.',
          feedbackIncorrecto:
            'El argumento técnico es el que cita datos verificables. "Es tradición" es nostalgia; "resistencia comparable al acero" es ingeniería.',
        },
        {
          enunciado: '¿Qué hace que una tecnología sea "regenerativa" en sentido estricto?',
          opciones: [
            'Que sea antigua',
            'Que dé más al sistema (suelo, agua, comunidad) de lo que toma',
            'Que sea bonita',
            'Que no use electricidad',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Regenerativa = el sistema queda mejor después. Los andenes mejoran el suelo cultivándolo. La industrial extrae y degrada.',
          feedbackIncorrecto:
            'Regenerativa: deja al sistema mejor después de usarla. Los andenes enriquecen suelo; la agricultura industrial lo agota. Diferencia estructural.',
        },
        {
          enunciado: '¿Por qué la modernidad europea llamó "primitivas" a las tecnologías precolombinas?',
          opciones: [
            'Por descuido',
            'Porque era política de poder: descalificar saberes propios para imponer los suyos',
            'Porque realmente eran simples',
            'Por barrera del lenguaje',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La clasificación de "primitivo" no era descripción técnica — era poder colonial. Hoy reconocer esa política es justicia histórica.',
          feedbackIncorrecto:
            'Política colonial: descalificar saberes propios legitimaba el control. No era descripción técnica. La cerámica Quimbaya era ingeniería más sofisticada que muchas técnicas europeas contemporáneas.',
        },
        {
          enunciado: '¿Por qué la medicina kogui de la Sierra Nevada se reevalúa hoy?',
          opciones: [
            'Por moda New Age',
            'Porque su catalogación de plantas medicinales y diagnóstico holístico aporta a problemas que la medicina occidental no resuelve solos',
            'Porque es barata',
            'Porque está en peligro',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La medicina kogui aporta saberes técnicos reales (plantas, diagnóstico relacional) a problemas modernos. No es moda — es complemento técnico.',
          feedbackIncorrecto:
            'Aporta saberes técnicos a problemas modernos. La farmacología estudia hoy plantas que los kogui usaron por siglos. Es complementación, no moda.',
        },
        {
          enunciado:
            'Si defendieras tu tecnología propia con argumentos ÚNICAMENTE técnicos, ¿qué cambiaría?',
          opciones: [
            'Nada — los argumentos morales también valen',
            'Que la defensa sería tomada en serio por ingenieros, políticos y financiadores que no responden a la nostalgia',
            'Que perdería el alma',
            'Que sería menos cierta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. La nostalgia convence al ya convencido. Los argumentos técnicos abren puertas en sectores que financian, regulan o ejecutan políticas.',
          feedbackIncorrecto:
            'Argumentos técnicos abren puertas que la nostalgia cierra. Un ingeniero o un funcionario público responde a datos. La defensa rigurosa multiplica el alcance.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu ficha técnica con un familiar o vecino mayor que conozca tradiciones locales. Pregúntale: "¿qué corregirías o agregarías?". Anota su respuesta. Esa retroalimentación intergeneracional enriquece la ficha más que cualquier libro. El próximo lunes traemos esas correcciones — son insumo del manifiesto de cierre.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La descolonización del conocimiento empieza por reconocer técnicamente lo que la modernidad subvaloró.',
      preguntaEspejo:
        '¿Qué saber técnico de mi región o familia he considerado "atrasado" sin haberlo estudiado a fondo? ¿Qué cambia cuando lo miro con criterio técnico riguroso?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que sobrevive siglos sin renovación tecnológica sostiene su propio peso.',
      preguntaEspejo:
        '¿Qué tecnología que uso hoy estará viva en 100 años sin actualizaciones forzosas? ¿Y cuál de las antiguas sigue cumpliendo su función intacta?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La infoesfera saludable necesita tanto las tecnologías propias regenerativas como las digitales avanzadas.',
      preguntaEspejo:
        '¿Qué hibridación entre tecnología propia y tecnología digital puedo imaginar para un problema contemporáneo (clima, salud, alimentación)?',
    },
  },

  cincoDimensiones: {
    personal:
      'Defendiste una tecnología propia con argumentos técnicos rigurosos, no nostálgicos — ese ejercicio reconfigura tu mirada.',
    emocional:
      'Sentiste orgullo legítimo por saberes que la educación oficial te enseñó a subvalorar.',
    ciudadana:
      'Entendiste que descolonizar el conocimiento es justicia técnica, no rescate folclórico.',
    local:
      'Pusiste el telar wayuu, la guadua, los andenes andinos al nivel técnico que tienen — sin inflarlos ni minimizarlos.',
    intergeneracional:
      'La conversación con un mayor sobre tradiciones locales hizo dialogar tres siglos de saberes con tu mirada técnica del XXI.',
  },
};

export default contenido;
