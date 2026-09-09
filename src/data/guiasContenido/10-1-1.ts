/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 1
 * (sesión global 1).
 *
 * Auto-generado desde content/guias/10/10-1-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 1,
  titulo: 'El oficio del editor — qué hace y qué no hace',
  resumen: 'Asumes el rol de editor de tu propio libro: escribir es producir, editar es elegir, ordenar y responder. La IA será tu escritor asistente, no tu editor.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Autoría y responsabilidad',
  preLectura: {
    porQueImporta: 'Cualquiera puede pedirle un texto a una IA. Lo que distingue a un editor es que decide qué se queda, qué se descarta y qué firma. Esa distinción sostiene todo el periodo.',
    preguntaDetonante: 'Si un libro lo escribió en parte una IA y tú lo firmas, ¿de qué exactamente estás respondiendo?',
    activacion: {
      titulo: 'La prenda que pasó por ocho manos',
      descripcion: 'En 3 minutos, piensa en algo que uses a diario y cuenta cuántas personas tuvieron que trabajar en ello. Después mira de quién es el nombre que aparece encima.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'Vienes de un año de producir piezas propias; ahora vas a coordinar una obra larga.',
      siguiente: 'En la sesión 2 concibes tu libro: género, tema, audiencia precisa y escaleta de capítulos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Editor',
      definicion: 'Quien decide sobre una obra: qué entra, qué sale, cómo se ordena y para quién es. No escribe todo, pero firma todo.',
      ejemplo: 'El editor devuelve un capítulo a corregir aunque no vaya a reescribirlo él mismo.',
      categoria: 'El oficio'
    },
    {
      termino: 'Autor y editor',
      definicion: 'Quien escribe llena la página en blanco. Quien edita decide qué se queda en la página llena.',
      ejemplo: 'Un mismo texto puede tener tres autores y un solo editor que responde por el conjunto.',
      categoria: 'El oficio'
    },
    {
      termino: 'Escritor asistente',
      definicion: 'El papel de la IA en este periodo: produce primeros borradores que después tú decides si sirven.',
      ejemplo: 'La IA propone tres aperturas de capítulo; tú eliges una, la reescribes y descartas dos.',
      categoria: 'El oficio'
    },
    {
      termino: 'Tema',
      definicion: 'De qué trata el libro y qué pregunta responde. Si no cabe en dos frases, todavía no está claro.',
      ejemplo: '«Cómo se armó el barrio donde vivo, contado por quienes llegaron primero.»',
      categoria: 'Las tres decisiones'
    },
    {
      termino: 'Audiencia',
      definicion: 'Para quién es el libro y cuánto conocimiento previo se le supone a quien lo lee.',
      ejemplo: 'El mismo tema escrito para un niño de diez años y para un adulto son dos libros distintos.',
      categoria: 'Las tres decisiones'
    },
    {
      termino: 'Responsabilidad firmada',
      definicion: 'Poner el nombre significa responder por la pieza, incluido el trabajo que hicieron otros o una herramienta.',
      ejemplo: 'Si un dato del libro está mal, quien responde es quien firma, no quien generó el borrador.',
      categoria: 'Las tres decisiones'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica el oficio del editor',
      instrucciones: '5 preguntas para confirmar que distingues escribir de editar. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia principal entre autor y editor?',
          opciones: [
            'El editor trabaja más rápido porque no tiene que producir el texto desde cero',
            'Quien escribe llena la página; quien edita decide qué se queda y firma como responsable',
            'El editor se ocupa de la ortografía y la puntuación una vez el texto está listo',
            'No hay diferencia real: en un libro pequeño las dos funciones las hace la misma persona'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Producir texto y decidir qué texto merece quedarse son dos trabajos distintos.',
          feedbackIncorrecto: 'No es velocidad ni corrección de comas. Es quién decide y quién responde por el conjunto.'
        },
        {
          enunciado: 'En este periodo, ¿qué papel cumple la IA generativa?',
          opciones: [
            'El de editor responsable, que decide qué entra al libro y qué queda fuera',
            'El de corrector final, que revisa el libro una vez tú lo has terminado entero',
            'El de escritor asistente, que produce primeros borradores que tú decides si sirven',
            'El de consultor, que recomienda qué tema y qué audiencia conviene elegir'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Produce borradores. Las decisiones y la firma siguen siendo tuyas.',
          feedbackIncorrecto: 'Si la IA decide el tema, la audiencia o qué entra, dejaste de ser el editor.'
        },
        {
          enunciado: '¿Cuáles son las tres decisiones críticas que se toman antes de escribir?',
          opciones: [
            'Tema, audiencia y estructura, y las tres se deciden antes de la primera palabra',
            'Título, portada y número de páginas, que definen el formato final del libro',
            'Herramienta, plataforma y formato de exportación con que se va a trabajar',
            'Presupuesto, cronograma y reparto de tareas entre quienes participan'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Si el tema no cabe en dos frases o la audiencia no está definida, escribir es adivinar.',
          feedbackIncorrecto: 'El título y la herramienta vienen después. Primero: de qué trata, para quién y cómo se ordena.'
        },
        {
          enunciado: '¿Por qué declarar abiertamente que usaste IA en tu libro?',
          opciones: [
            'Porque de lo contrario la institución podría anular la entrega del producto final',
            'Porque los modelos dejan marcas que cualquier detector automático puede reconocer',
            'Porque así queda claro que el trabajo tomó menos tiempo del que aparenta',
            'Porque quien firma responde, y responder incluye decir cómo se hizo la pieza'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Ocultar el proceso es el atajo que erosiona la confianza en lo que se lee.',
          feedbackIncorrecto: 'No es por sanción ni por detectores. Es que firmar incluye decir cómo se hizo.'
        },
        {
          enunciado: 'En Cartago el nombre de un taller lo sostienen ocho artesanas por prenda. ¿Qué aplica eso al editor?',
          opciones: [
            'Que un libro siempre debería llevar los nombres de todas las personas que intervinieron',
            'Que el trabajo artesanal y el trabajo editorial se organizan de maneras parecidas',
            'Que firmar es responder por trabajo que uno no hizo, y decidir a quién se nombra',
            'Que la reputación de un editor depende sobre todo de la cantidad de libros que publica'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. La reputación se acumula en el taller y no en quien borda, y esa asimetría también existe en un libro.',
          feedbackIncorrecto: 'El punto no es el parecido entre oficios. Es que firmar carga con trabajo ajeno y obliga a decidir a quién se nombra.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De lo que voy a firmar este periodo, ¿qué parte va a ser trabajo mío y qué parte de otros?',
    transferencia: 'Llega a la próxima sesión con tu definición de editor, las tres decisiones preliminares y el análisis de los dos libros. Son la base de la concepción del libro.',
    cierre: 'Al terminar podrás: (1) identificar las tres decisiones que cualquier editor toma sobre una obra — tema, audiencia y estructura — en libros que ya conoces; (2) analizar qué decisión editorial sostiene principalmente a cada uno de esos libros; (3) evaluar qué responsabilidad estás…'
  },
  saberAncestral: {
    saber: 'En Cartago la reputación de un taller de bordado no la construye lo que se dice de él, sino lo que sale de sus manos. Los ornamentos que vistió el papa durante su visita a Colombia se bordaron allí (Chica García, 2019). Una prenda pasa por unas ocho artesanas y más de ocho horas de trabajo antes de llevar el nombre de un taller. En un oficio así el nombre no se defiende hablando: se defiende con la puntada, y una sola pieza mal hecha pesa más que cualquier rumor. La cara de exclusión está en ese mismo nombre. El taller lo sostienen ocho artesanas por prenda que rara vez aparecen en él, porque la reputación se acumula en el taller y no en quien borda. Firmar es quedar respondiendo por lo que otras manos hicieron. Y también es decidir a quién se nombra.',
    fuente: 'Talleres de bordado de Cartago · el nombre que firma lo que ocho manos hicieron',
    referencia: 'Chica García, A. (2019, 17 de agosto). Bordados de Cartago: la herencia española que apropiaron las mujeres vallunas. Radio Nacional de Colombia.',
    preguntaPuente: '¿Qué está aceptando un taller cuando pone su nombre en una prenda que pasó por ocho manos? ¿Y qué acepta quien firma un libro escrito con ayuda de una IA?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El nombre que firma ocho manos',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Dos libros bajo la lupa',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las tres decisiones y los cinco errores',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Mi definición de editor',
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
      titulo: 'Dos libros bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota dos libros que conozcas de verdad, de cualquier género.',
        'Responde sin buscar nada quién es el autor o autora de cada uno.',
        'Anota para quién parece hecho cada libro y en qué lo notas.',
        'Anota cómo está organizado por dentro.',
        'Escribe en una frase qué hace que cada uno te funcione a ti.'
      ],
      cuaderno: {
        titulo: 'Dos libros bajo la lupa',
        formato: 'una ficha por libro con autoría, audiencia, organización y la frase de por qué funciona',
        extension: 'un tercio de página'
      },
      criterios: [
        'Los dos libros se conocen de verdad, no de oídas.',
        'Cada ficha dice para quién parece hecho el libro y en qué se nota.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Las tres decisiones y los cinco errores',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres decisiones críticas con un ejemplo propio de cada una.',
        'Escriban los cinco errores del editor novato con IA.',
        'Cada uno marca el error que más teme cometer y explica por qué.',
        'Escriban en dos líneas la diferencia entre escribir y editar.'
      ],
      cuaderno: {
        titulo: 'Anatomía editorial',
        formato: 'las tres decisiones con ejemplo, los cinco errores con el más temido marcado y la diferencia en dos líneas',
        extension: 'media página'
      },
      criterios: [
        'Cada decisión tiene un ejemplo propio, no uno copiado de la guía.',
        'Está marcado y justificado el error que más se teme.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Mi definición de editor',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe a mano, sin IA, qué te comprometes a hacer como editor este periodo.',
        'Declara tus tres decisiones preliminares de tema, audiencia y estructura.',
        'Analiza los dos libros y di qué decisión editorial sostiene a cada uno.',
        'Cierra con cinco líneas sobre por qué editar no es escribir.',
        'Léela en voz alta, comprueba que suena a ti y fírmala.'
      ],
      cuaderno: {
        titulo: 'Mi definición de editor',
        formato: 'la definición, las tres decisiones, los dos análisis y el cierre, firmados',
        extension: 'una página'
      },
      criterios: [
        'La definición se escribió sin asistencia de IA.',
        'El texto leído en voz alta suena a la propia voz y no a chatbot.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.4.3',
      lente: 'lente del nosotros',
      cita: 'Los artefactos u objetos… que nos rodean en el mundo cotidiano… son entonces productos del trabajo humano… Si los entes son instrumentos producidos significa que fueron objeto de un cierto trabajo.',
      preguntaEspejo: 'De lo que voy a firmar este periodo, ¿qué parte va a ser trabajo mío y qué parte de otros?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 20 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'La filosofía enseña a hacer, no a decir; y exige que cada uno viva según su propia ley, que la vida no desdiga de la palabra. (trad. propia)',
      preguntaEspejo: 'Lo que escribí hoy que me comprometo a hacer, ¿lo estoy haciendo en la sesión 5?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 3.2',
      lente: 'lente de la infoesfera',
      cita: 'En el mundo onlife, los artefactos han dejado de ser meras máquinas que simplemente operan según instrucciones humanas: pueden cambiar de estado de manera autónoma. (trad. propia)',
      preguntaEspejo: 'Cuando la IA me proponga un capítulo entero, ¿voy a decidir sobre él o voy a aceptarlo?'
    }
  },
  cincoDimensiones: {
    personal: 'Decides con qué nombre vas a responder por un trabajo largo. Es la primera vez que asumes una obra entera y no una pieza suelta.',
    emocional: 'Aceptar que vas a descartar buena parte de lo que se produzca cuesta. Editar es en gran medida soltar.',
    ciudadana: 'Declarar qué aportó la IA es una forma de honestidad pública. Ocultarlo es el atajo que erosiona la confianza en lo que se lee.',
    local: 'En el taller de Cartago el nombre se defiende con la puntada. La reputación por obra es lenta y verificable; la reputación por conversación es rápida y reversible.',
    intergeneracional: 'Que quien firma responda es un acuerdo viejo entre oficios. Lo que cambia es que ahora parte del trabajo lo hace una herramienta que propone sola.'
  }
};

export default contenido;
