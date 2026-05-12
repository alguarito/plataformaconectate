/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 1
 * Tema: ¿Qué es técnica? — del cuerpo al instrumento.
 * Apertura del grado 9 y del período "Historia de la técnica".
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-1.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 1,
  titulo: '¿Qué es técnica? — del cuerpo al instrumento',
  ocultarPDF: false,
  resumen:
    'Apertura del grado 9. Definir qué es técnica desde tu cotidianidad: el cuerpo, las herramientas y las máquinas como tres etapas de un mismo gesto humano.',
  duracionMin: 90,
  subtema: 'Apertura · Historia de la técnica',

  saberAncestral: {
    saber:
      'La técnica no nació en una fábrica. Nació en la mano. Los primeros artefactos —la azuela de piedra, el hueso tallado, el telar de cintura, el atado de cuerdas— son extensiones del cuerpo humano hacia el mundo. El que talla la madera primero usa los dientes y las uñas; cuando esos no alcanzan, fabrica un filo. La técnica es lo que el cuerpo hace cuando descubre sus límites.',
    fuente: 'Primeros artefactos humanos — azuela, hueso tallado, telar de cintura',
    preguntaPuente:
      '¿Qué cosas haces hoy con un objeto que tus abuelos hacían con el cuerpo? ¿Y qué cosas todavía haces con el cuerpo aunque ya exista un objeto que las haga?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Del cuerpo al artefacto', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Técnicas en tu cotidianidad', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Cuerpo, herramienta, máquina', duracionMin: 18 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu definición personal de técnica', duracionMin: 32 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'En el grado 9 vas a estudiar la historia de la tecnología durante todo un año. Pero antes de hablar de Revolución Industrial, computadores o IA, vamos a aclarar lo básico: ¿qué entiendes TÚ por técnica? Sin esa definición personal, todo lo que aprendas será información prestada — no pensamiento propio.',
    preguntaDetonante:
      'Si te quitaran de pronto los 5 objetos que más usas en el día, ¿qué cosas seguirías pudiendo hacer y cuáles dejarías de poder hacer?',
    activacion: {
      titulo: 'Inventario rápido del cuerpo extendido',
      descripcion:
        'En 3 minutos, anota en una hoja 5 cosas que has hecho hoy desde que despertaste hasta este momento usando un objeto (un cepillo, una silla, una llave, un celular, un lápiz). Para cada uno escribe qué del cuerpo extiende o reemplaza. Ese ejercicio es lo que vamos a profundizar todo el día.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'Cierras el grado 8 con bases de pensamiento computacional y trabajo con software. Ahora abrimos la mirada histórica.',
      siguiente:
        'En la sesión 2 vas a analizar 3 máquinas simples del campo colombiano (trapiche, noria, molino) como tecnología eficiente que sigue funcionando.',
    },
  },

  conceptosClave: [
    {
      termino: 'Técnica',
      definicion:
        'Cualquier procedimiento o instrumento que el ser humano usa para resolver un problema concreto. Va del gesto corporal al algoritmo digital.',
      ejemplo:
        'Hervir agua para purificarla es técnica. Usar un filtro de cerámica es técnica. Programar un sensor que mida pureza también es técnica.',
      emoji: '🛠',
    },
    {
      termino: 'Cuerpo como técnica',
      definicion:
        'Antes de cualquier objeto, el primer instrumento humano fue el cuerpo: la mano cortando, la voz contando, la memoria guardando. Toda técnica empieza con un gesto corporal.',
      ejemplo:
        'Cuando aplaudes para llamar la atención, usas el cuerpo como técnica. Cuando cuentas con los dedos, también. El cuerpo es la téchne más antigua.',
      emoji: '✋',
    },
    {
      termino: 'Herramienta',
      definicion:
        'Objeto que extiende una función del cuerpo. El cuerpo sigue trabajando, pero la herramienta le da alcance, fuerza o precisión.',
      ejemplo:
        'Un cuchillo extiende la fuerza de la mano para cortar. Un ábaco extiende la memoria de la mente para contar. La herramienta no reemplaza — amplía.',
      emoji: '🔧',
    },
    {
      termino: 'Máquina',
      definicion:
        'Sistema que automatiza un trabajo: combina herramientas y una fuente de energía (agua, viento, electricidad) para repetir el gesto sin esfuerzo humano constante.',
      ejemplo:
        'El trapiche del Valle es máquina: combina rueda + presión + animal o motor. La calculadora es máquina: combina circuitos + electricidad.',
      emoji: '⚙️',
    },
    {
      termino: 'Ampliar vs reemplazar',
      definicion:
        'Distinción ética clave: una técnica que amplía el cuerpo te da más autonomía; una que lo reemplaza te puede quitar capacidades si dependes solo de ella.',
      ejemplo:
        'El GPS amplía tu sentido de orientación cuando lo usas con criterio. Pero si lo usas siempre sin pensar, reemplaza tu capacidad de leer mapas mentalmente.',
      emoji: '⚖️',
    },
    {
      termino: 'Técnicas que ya no notas',
      definicion:
        'Cuando una técnica entra profundo en tu vida, deja de sentirse "nueva" y se vuelve parte del cuerpo. Las técnicas más poderosas son las invisibles.',
      ejemplo:
        'Leer es una técnica que hace 500 años casi nadie tenía. Hoy ya no la notas — se volvió tu cuerpo extendido. La escritura, igual. El celular, casi.',
      emoji: '👀',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Técnicas en tu cotidianidad',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Sin moverte de donde estás, identifica 5 objetos en tu entorno que extienden tu cuerpo (lápiz, silla, celular, gafas, etc.).',
        'Para cada objeto pregúntate: ¿qué función corporal específica amplía o reemplaza?',
        'Marca cuáles ya "no notas" (se volvieron parte de ti) y cuáles aún sientes "nuevos".',
        'Identifica al menos 1 objeto cotidiano que viene de una tradición ancestral o popular (silla de madera artesanal, mochila tejida, jarra de barro).',
      ],
      cuaderno: {
        titulo: 'Técnicas en mi cotidianidad',
        formato:
          'Tabla de 3 columnas (Objeto | Qué del cuerpo extiende | ¿Lo noto o ya es cuerpo?), mínimo 5 filas',
        extension: '5 filas + 1 marca a la fila ancestral/popular',
      },
      criterios: [
        'Las 5 filas tienen un objeto concreto y una función corporal específica (no "ayudar")',
        'Identificaste al menos 1 objeto que ya no notas porque se volvió parte de ti',
        'Hay al menos 1 objeto anclado en tradición local (no solo objetos industriales)',
        'Puedes explicar cada fila en voz alta en menos de 10 segundos',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Cuerpo, herramienta, máquina',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada etapa (cuerpo, herramienta, máquina) escribe una ficha con tu propia definición en 1 frase.',
        'En cada ficha da un ejemplo de tu cotidianidad de hoy.',
        'En cada ficha da un ejemplo de la tradición local (Valle, Pacífico, oficios colombianos).',
        'Cierra con 2 renglones: ¿en qué se parecen las 3 etapas y en qué se diferencian?',
      ],
      cuaderno: {
        titulo: 'Cuerpo, herramienta, máquina',
        formato: '3 fichas con definición tuya + ejemplo cotidiano + ejemplo ancestral',
        extension: '3 fichas + 2 renglones de cierre',
      },
      criterios: [
        'Cada definición está en tus palabras (no copia del libro)',
        'Cada ficha tiene UN ejemplo cotidiano + UN ejemplo ancestral',
        'Las 3 etapas se distinguen claramente entre sí',
        'Puedes explicarlas sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu definición personal de técnica',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Antes de escribir, pregúntate: "si tuviera que explicarle a un primo más pequeño qué es la técnica, ¿qué le diría?".',
        'Escribe esa frase. Es tu definición inicial.',
        'Lista 5 ejemplos concretos de tu vida que prueban tu definición. Mezcla cuerpo, herramienta y máquina. Mezcla lo cotidiano con lo local.',
        'Pule la frase para que ninguna palabra sobre y al menos un ejemplo sea de la tradición local.',
      ],
      cuaderno: {
        titulo: 'Mi definición personal de técnica',
        formato: '(1) Un párrafo con tu definición (3-5 renglones). (2) 5 ejemplos numerados con 1 frase cada uno.',
        extension: 'Media página de cuaderno',
      },
      criterios: [
        'La definición cabe en UNA frase clara',
        'La definición está en palabras tuyas (no del diccionario)',
        '5 ejemplos numerados, cada uno con un objeto concreto de tu vida',
        'Al menos 1 ejemplo está anclado en una tradición local o ancestral',
        'El conjunto se lee en voz alta sin tropezar',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la definición de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu cuaderno con un compañero. Lee su definición y sus 5 ejemplos sin interrumpir.',
        'Califica del 1 al 5: (a) ¿la definición está en sus palabras o suena a copia?, (b) ¿los ejemplos son concretos?, (c) ¿hay al menos 1 ancla local?',
        'Marca 1 observación que afirma + 1 que reta (qué afinaría).',
        'Devuelve y conversen 5 minutos sin defenderse — solo escuchar.',
      ],
      cuaderno: {
        titulo: 'Evaluación de la definición de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'La observación que afirma señala algo específico',
        'La observación que reta es respetuosa y concreta',
        'No copiaste su definición en tu propio cuaderno',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los conceptos clave',
      instrucciones:
        '5 preguntas para confirmar que dominas el vocabulario de la técnica antes de pasar a la sesión 2. Necesitas 3/5 para avanzar.',
      preguntas: [
        {
          enunciado: 'Una persona aplaude para llamar la atención. ¿En qué etapa de la técnica está?',
          opciones: [
            'Máquina, porque produce un sonido fuerte',
            'Cuerpo, porque solo usa las manos sin instrumentos',
            'Herramienta, porque las manos son una herramienta',
            'No es técnica',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El cuerpo es la primera etapa de la técnica. Sin instrumentos, el gesto corporal ya resuelve un problema (avisar, llamar, comunicar).',
          feedbackIncorrecto:
            'El cuerpo es técnica. La mano que aplaude usa el órgano para resolver un problema (avisar). Antes de cualquier objeto hubo gesto.',
        },
        {
          enunciado: '¿Cuál de estos es claramente una MÁQUINA y no solo una herramienta?',
          opciones: [
            'Un cuchillo',
            'Un trapiche del Valle',
            'Un lápiz',
            'Una taza de barro',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. El trapiche combina rueda + presión + fuente de energía (animal o motor) para automatizar el trabajo. Eso es una máquina. El cuchillo y el lápiz son herramientas; la taza es un utensilio pero no automatiza nada.',
          feedbackIncorrecto:
            'El trapiche es la máquina. Combina herramientas + energía para automatizar la extracción de jugo. Cuchillo, lápiz y taza son herramientas u objetos, pero no automatizan trabajo.',
        },
        {
          enunciado: '¿Cuál es la diferencia ética clave entre "ampliar" y "reemplazar" el cuerpo?',
          opciones: [
            'No hay diferencia',
            'Ampliar te da autonomía; reemplazar te puede quitar capacidades si dependes solo de la máquina',
            'Ampliar es más caro',
            'Reemplazar es siempre mejor',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Una técnica que amplía te suma; una que reemplaza completamente te puede dejar dependiente. El GPS amplía tu orientación si la combinas con tu lectura mental del mapa; la reemplaza si solo lo sigues sin pensar.',
          feedbackIncorrecto:
            'Ampliar suma capacidad; reemplazar puede restarla. La diferencia es ética porque tiene que ver con tu autonomía: ¿la técnica te hace más capaz o más dependiente?',
        },
        {
          enunciado:
            '¿Por qué las técnicas más poderosas son las que "ya no notas"?',
          opciones: [
            'Porque son baratas',
            'Porque entraron tan profundo en tu vida que se volvieron parte del cuerpo extendido',
            'Porque son secretas',
            'Porque son antiguas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Leer fue revolucionario hace 500 años; hoy ya no lo notas. Cuando una técnica deja de sentirse "nueva", su poder es tan grande que ya es parte de ti.',
          feedbackIncorrecto:
            'Cuando una técnica entra profundo, se vuelve invisible. Eso es señal de poder, no de obsolescencia. Leer, escribir, usar zapatos: técnicas invisibles que organizan tu vida.',
        },
        {
          enunciado:
            'En el saber ancestral del cuerpo como técnica, ¿qué aplica a una herramienta digital de hoy?',
          opciones: [
            'Nada — la técnica digital es nueva',
            'Todo gesto técnico empieza en el cuerpo; el celular es extensión de memoria, voz y ojos',
            'Que las herramientas antiguas eran mejores',
            'Que el cuerpo no tiene importancia hoy',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El celular hace lo mismo que la piedra tallada hizo hace 30 mil años: extender el cuerpo más allá de sus límites. Cambia el material, no el principio.',
          feedbackIncorrecto:
            'El principio es el mismo desde la primera azuela: la técnica extiende el cuerpo. El celular es la versión 2026 de un gesto que tiene 30 mil años. Lo nuevo es el material, no la lógica.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, lleva tu cuaderno contigo durante 3 días y, cada vez que veas o uses un objeto técnico, anota una línea: nombre + qué del cuerpo extiende. Al cabo de 3 días lee la lista. Vas a descubrir que la vida cotidiana es mucho más técnica de lo que parece a simple vista. El próximo lunes traes esa lista al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Ninguna técnica es neutral; siempre sirve a un proyecto histórico.',
      preguntaEspejo:
        '¿A qué proyecto sirve la técnica que más uso en mi día? ¿La elegí yo o la heredé sin preguntar?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Cada gesto del cuerpo, cuando se hace con atención, es un acto técnico.',
      preguntaEspejo:
        '¿Qué gesto del cuerpo aún hago con atención? ¿Cuál ya delegué tanto a una máquina que se me está olvidando?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La técnica re-ontologiza el mundo: cambia lo que el mundo es, no solo lo que hacemos en él.',
      preguntaEspejo:
        '¿Qué actividad mía cambió de naturaleza cuando entró una técnica nueva? ¿Mejoró, empeoró o solo cambió de forma?',
    },
  },

  cincoDimensiones: {
    personal:
      'Construiste una definición tuya de técnica, no prestada — punto de partida del año.',
    emocional:
      'Distinguiste entre técnicas que te dan autonomía y las que te pueden volver dependiente.',
    ciudadana:
      'Entendiste que la técnica nunca es neutral — sirve a un proyecto, y vale la pena preguntar a cuál.',
    local:
      'Reconociste técnicas anclas en el Valle, el Pacífico y los oficios colombianos como tan válidas como las globales.',
    intergeneracional:
      'Conectaste tu cotidianidad técnica con la primera azuela de piedra: el principio del cuerpo extendido tiene 30 mil años.',
  },
};

export default contenido;
