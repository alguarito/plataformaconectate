/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 7
 * Tema: La electricidad — luz, motor, comunicación.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-7.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 7,
  titulo: 'La electricidad — luz, motor, comunicación',
  ocultarPDF: false,
  resumen:
    'Escribes una bitácora de un día sin electricidad. Descubres tu dependencia invisible — y separas lo esencial de la costumbre.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Dependencia eléctrica',

  saberAncestral: {
    saber:
      'Antes de la luz eléctrica, el día se organizaba según el sol y el candil. Despertarse al amanecer, almorzar al mediodía, cenar antes del oscurecer. La cocina con leña y fogón; las noticias con voz a voz en la plaza; la música con instrumentos propios. La electricidad reorganizó el tiempo humano: alargó la jornada, transformó la cocina, hizo posible la radio en pueblos lejanos antes que la carretera.',
    fuente: 'Vida cotidiana antes de la electrificación en el Valle y el Pacífico colombiano',
    preguntaPuente:
      '¿Qué cosas que haces sin pensar dejarían de funcionar si tu pueblo se quedara una semana sin electricidad? ¿Qué cosas seguirían intactas?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El día antes de la luz', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Inventario de dependencia eléctrica', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Luz, motor, comunicación', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Bitácora de un día sin luz', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'La electricidad es la tecnología más invisible de tu vida — solo la notas cuando falla. Pero detrás de cada acto cotidiano hay un cable. Entender esa dependencia te prepara para la transición energética que tu generación va a tener que pilotear.',
    preguntaDetonante:
      'Si tuvieras que pagar la cuenta de electricidad de tu casa con tu propio dinero, ¿qué apagarías primero y qué nunca apagarías?',
    activacion: {
      titulo: 'Cuenta los enchufes',
      descripcion:
        'En 3 minutos, mira tu casa o salón y cuenta cuántos objetos están enchufados o cargándose AHORA mismo (incluye los apagados que dependen de electricidad). La cifra te va a sorprender — la mayoría perdió noción de cuánto depende.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 6 viste cómo la imprenta cambió la voz pública. Hoy ves cómo la electricidad cambió el tiempo de la vida — dos revoluciones invisibles que organizan tu día.',
      siguiente:
        'En la sesión 8 verás el ábaco, el quipu y la era digital — de los primeros conteos al chip que llevas en el bolsillo.',
    },
  },

  conceptosClave: [
    {
      termino: 'Función luz',
      definicion:
        'La electricidad ilumina para extender la jornada útil más allá del sol. Fue la primera función masiva de la electricidad (1880-1920) y reorganizó por completo el ritmo del día humano.',
      ejemplo:
        'Antes de la luz eléctrica, leer de noche costaba aceite y dañaba la vista. Hoy puedes leer 24 horas sin notar el costo — porque el costo es invisible (factura mensual).',
      emoji: '💡',
    },
    {
      termino: 'Función motor',
      definicion:
        'La electricidad mueve cosas: nevera, ventilador, lavadora, ascensor, lavavajillas. Reemplaza fuerza humana o animal con electricidad transformada en movimiento mecánico.',
      ejemplo:
        'La nevera de tu casa: motor + compresor + electricidad funcionando 24/7. Sin ella, tendrías que comprar comida diaria o tener un pozo de hielo (como antes).',
      emoji: '⚙️',
    },
    {
      termino: 'Función comunicación e información',
      definicion:
        'Celular, wifi, radio, TV, computador. Esta es la dependencia más reciente (1900-hoy) y la que más crece. Sin electricidad no hay infoesfera.',
      ejemplo:
        'Cuando se va la luz, tu celular dura 8 horas con batería. Cuando se va el wifi, tu celular pierde el internet — porque las antenas también necesitan luz.',
      emoji: '📡',
    },
    {
      termino: 'Invisibilización progresiva',
      definicion:
        'Cuando una tecnología funciona, dejas de notarla. La luz eléctrica era novedad en 1900; hoy es invisible. Mañana lo será la IA. La pregunta crítica es qué pasa cuando esa invisibilidad se rompe.',
      ejemplo:
        'Apagón de 2 horas: descubres cuántos relojes están conectados a la luz. Descubres que no sabes qué hacer si no es a través de pantalla.',
      emoji: '🕳',
    },
    {
      termino: 'Esencial vs costumbre',
      definicion:
        'Distinguir lo que realmente necesitas de lo que es habitual. La nevera es esencial (sin ella se daña la comida); el ventilador con espejo led es costumbre (puedes abrir una ventana).',
      ejemplo:
        'Si tuvieras que vivir 1 semana con la mitad de los aparatos eléctricos, ¿cuáles eliminarías? Esa pregunta separa lo esencial de la costumbre.',
      emoji: '⚖️',
    },
    {
      termino: 'Costo ambiental invisible',
      definicion:
        'Cada watt de electricidad tiene origen: hidroeléctrica, termoeléctrica, solar, eólica. La factura mensual te cobra en pesos, no en daño ambiental — pero el daño existe igual.',
      ejemplo:
        'Cada hora de streaming consume megavatios en datacenters. Esos datacenters están en algún lugar — y consumen electricidad de origen real. La nube no es etérea.',
      emoji: '🌍',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Inventario de tu dependencia eléctrica',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Sin moverte mucho, cuenta los objetos eléctricos en tu casa o salón (mínimo 15).',
        'Clasifícalos en 3 grupos: "funcionan con batería propia", "no funcionan sin red eléctrica", "reemplazables por algo no eléctrico".',
        'Marca cuáles considerarías esenciales y cuáles solo costumbre.',
        'Anota tu primera reacción al ver el total.',
      ],
      cuaderno: {
        titulo: 'Mi dependencia eléctrica invisible',
        formato: 'Lista numerada de mínimo 15 objetos + clasificación en 3 grupos + marca de esenciales',
        extension: '15+ objetos clasificados + 1 párrafo de reacción',
      },
      criterios: [
        'Conté al menos 15 objetos eléctricos reales',
        'Clasificación en 3 grupos completa',
        'Identifiqué cuáles son esenciales vs costumbre',
        'Reconozco la magnitud de mi dependencia',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: '3 funciones de la electricidad en tu vida',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada función (luz, motor, comunicación) escribe una ficha.',
        'En cada ficha lista 3 objetos tuyos que la cumplen.',
        'Estima horas diarias que usas cada función.',
        'Cierra cada ficha con: ¿qué pasaría si esta función desapareciera 24 horas?',
      ],
      cuaderno: {
        titulo: '3 funciones de la electricidad en mi vida',
        formato: '3 fichas con 3 objetos + horas estimadas + qué pasaría sin 24h',
        extension: '3 fichas completas',
      },
      criterios: [
        'Cada ficha tiene 3 objetos concretos de tu vida',
        'Estimaste honestamente las horas diarias',
        'Reconoces la función de la que MÁS dependes',
        'Distingo dependencia elección de costumbre acumulada',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Bitácora de un día sin electricidad',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige un día completo (real o imaginado) sin electricidad. Anota contexto en 3 renglones.',
        'Lista cronológicamente 10 momentos del día (mañana, mediodía, tarde, noche).',
        'Por cada momento describe cómo cambia sin electricidad — específico, no genérico.',
        'Cierra con 3 aprendizajes no clichés sobre tu dependencia.',
      ],
      cuaderno: {
        titulo: 'Bitácora de mi día sin electricidad',
        formato: 'Introducción + 10 momentos cronológicos + 3 aprendizajes finales',
        extension: '1.5 a 2 páginas',
      },
      criterios: [
        '10 momentos específicos y cronológicos',
        'Cada momento identifica función eléctrica (luz, motor, comunicación)',
        '3 aprendizajes finales no clichés',
        'Distingo dependencia esencial de costumbre cosmética',
        'La bitácora se puede leer sin sentirse moralista',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la bitácora de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos. Lee la bitácora del compañero sin interrumpir.',
        'Califica del 1 al 5: (a) ¿10 momentos específicos?, (b) ¿identifica función eléctrica en cada uno?, (c) ¿aprendizajes finales son honestos y no clichés?',
        'Marca con 🚩 los momentos genéricos y con ✨ los más específicos.',
        'Conversen 5 min: ¿coincidieron en cuál es la función más invisible o difieren?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la bitácora de [nombre]',
        formato: '3 calificaciones con justificación + marcas 🚩/✨ + observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marcaste al menos 1 momento genérico (🚩) y 1 específico (✨)',
        'La observación es constructiva y específica',
        'La conversación cerró con 1 hallazgo compartido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica tu lectura de la dependencia eléctrica',
      instrucciones:
        '5 preguntas para confirmar que distingues lo esencial de la costumbre. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuáles son las 3 funciones esenciales de la electricidad doméstica?',
          opciones: [
            'Calor, frío, internet',
            'Luz, motor, comunicación e información',
            'TV, celular, computador',
            'Cocina, baño, dormitorio',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Toda la electricidad de tu casa cumple solo una de esas 3 funciones. Distinguirlas te permite decidir qué realmente necesitas.',
          feedbackIncorrecto:
            'Luz + motor + comunicación. Toda función eléctrica doméstica cabe en una de esas 3. El resto son ejemplos concretos.',
        },
        {
          enunciado: '¿Qué significa "invisibilización progresiva" en tecnología?',
          opciones: [
            'Que la tecnología se vuelve pequeña',
            'Que cuando una tecnología funciona dejas de notarla — solo aparece cuando falla',
            'Que se rompe',
            'Que la esconden',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La luz eléctrica fue novedad; hoy es invisible. La conexión a internet, también. Cuando se rompe la invisibilidad, descubres tu dependencia.',
          feedbackIncorrecto:
            'Invisibilización progresiva: cuando una tecnología funciona dejas de notarla. La luz, el wifi, pronto la IA. Solo notas cuando fallan.',
        },
        {
          enunciado: 'Si en un apagón puedes seguir leyendo un libro, ¿qué demuestra eso?',
          opciones: [
            'Que el libro es mejor que internet',
            'Que algunas funciones esenciales NO dependen de electricidad — puedes sustituir o prescindir',
            'Que los libros antiguos sirven más',
            'Que no necesitas electricidad',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. No todo depende de la red. Distinguir qué sí y qué no es libertad práctica frente a la crisis energética que viene.',
          feedbackIncorrecto:
            'Lo importante es distinguir qué depende de electricidad y qué no. El libro sigue siendo lectura aunque se vaya la luz. Esa autonomía es valiosa.',
        },
        {
          enunciado: '¿De dónde viene la electricidad que mueve datacenters de la nube?',
          opciones: [
            'Es etérea, no consume energía',
            'De plantas hidroeléctricas, termoeléctricas, solares — consume megavatios reales',
            'De los servidores mismos',
            'No se sabe',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. "La nube" son edificios llenos de servidores que consumen energía real. La sostenibilidad de la infoesfera es una pregunta abierta urgente.',
          feedbackIncorrecto:
            '"La nube" es física. Datacenters reales consumen megavatios. Cada hora de streaming, cada consulta a IA, tiene un costo eléctrico que pagaría el planeta si la energía no fuera renovable.',
        },
        {
          enunciado:
            'En el saber ancestral del día organizado por el sol, ¿qué aplica a tu vida hoy?',
          opciones: [
            'Nada — ahora todo es eléctrico',
            'Que el ritmo humano natural fue sustituido por uno artificial (jornada extendida, sueño desplazado, descanso reducido)',
            'Que el sol todavía sale igual',
            'Que los abuelos no tenían tiempo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La electricidad reorganizó el tiempo humano. Antes el sol mandaba; hoy manda la jornada extendida que la luz hizo posible. Y tu cuerpo paga el costo.',
          feedbackIncorrecto:
            'El sol organizaba la vida; ahora la organiza la electricidad. La jornada extendida, el sueño postergado, la noche poblada de pantallas son herencia técnica reciente, no naturaleza humana.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, pasa intencionalmente 4 horas seguidas sin electricidad (apaga celular, computador, TV, luces; usa luz natural o vela). Anota qué hiciste, qué notaste de ti, qué extrañaste y qué descubriste. Esa experiencia vale más que cualquier teoría. El próximo lunes traemos la bitácora.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Hay regiones donde la luz nunca llegó y eso no es accidente: es diseño.',
      preguntaEspejo:
        '¿Quiénes en mi región siguen sin electricidad confiable? ¿Qué tipo de modernidad les es negada por esa falta?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que mucho usas, deja de notarlo; lo que dejas de notar, te empieza a gobernar.',
      preguntaEspejo:
        '¿Qué dependencia eléctrica mía no he cuestionado nunca? ¿Qué pasaría si un día renunciara conscientemente a ella?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La infoesfera contemporánea es energía-dependiente: sin electricidad, sin nube, sin red, no hay realidad digital.',
      preguntaEspejo:
        '¿Qué de mi vida digital está consumiendo electricidad que no veo? ¿Estoy dispuesto a saber cuánto cuesta ambientalmente cada cosa?',
    },
  },

  cincoDimensiones: {
    personal:
      'Hiciste visible una dependencia que era invisible — primer paso para tener autonomía sobre tu propia vida.',
    emocional:
      'Sentiste el peso de cuántas cosas no funcionarían sin un cable — sin moralizar, solo observando.',
    ciudadana:
      'Reconociste que la electrificación selectiva sigue siendo política: hay regiones sin luz confiable en 2026.',
    local:
      'Conectaste el ritmo del día actual con el ritmo del sol y el candil que tus abuelos conocieron.',
    intergeneracional:
      'La transición energética que tu generación va a pilotear empieza por entender cómo se vivía antes y qué de eso era mejor.',
  },
};

export default contenido;
