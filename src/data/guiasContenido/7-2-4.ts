/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/7/7-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 4,
  titulo: 'Diagramas de flujo — dibujar el algoritmo',
  resumen: 'Un diagrama de flujo (en inglés flowchart) es la representación visual de un algoritmo.',
  duracionMin: 90,
  subtema: 'Diagramas de flujo — dibujar el algoritmo',
  preLectura: {
    porQueImporta: 'El producto es ese diagrama + tabla de símbolos.',
    preguntaDetonante: 'Si tuvieras que explicar a tu mamá cómo decidir qué ponerse de ropa cada mañana (con todas sus decisiones: ¿llueve o no? ¿hace frío o calor? ¿es para colegio o paseo?), ¿te saldría mejor en lista de pasos o en dibujo con flechas?',
    activacion: {
      titulo: 'Lee un diagrama de flujo',
      descripcion: 'Actividad 1 · IDENTIFICA — Lee un diagrama de flujo (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas los 5 símbolos, los aplicas a un mini-ejemplo, dibujas tu propio diagrama, lo verificas.',
      siguiente: 'Esta semana, dibuja al menos 1 diagrama de flujo más (puede ser de algo de otra materia o de tu rutina diaria).'
    }
  },
  conceptosClave: [
    {
      termino: 'Diagrama de flujo',
      definicion: 'Representación visual de un algoritmo usando símbolos geométricos estándar conectados con flechas. Es el plano del albañil pero para algoritmos. Universal: se usa en programación, ingeniería, medicina, negocios.',
      ejemplo: 'El algoritmo de cepillarse los dientes se puede dibujar: óvalo INICIO → rectángulo (mojar cepillo) → rectángulo (poner crema) → rectángulo (cepillar 2 min) → óvalo FIN.',
      emoji: '📊'
    },
    {
      termino: 'Óvalo (Inicio / Fin)',
      definicion: 'Símbolo de comienzo y final del algoritmo. Todo diagrama empieza con un óvalo INICIO y termina con un óvalo FIN. Es como las marcas de salida y meta en una carrera.',
      ejemplo: 'Al inicio del diagrama dibujas un óvalo y escribes \'INICIO\'. Al final dibujas otro óvalo con \'FIN\'. Sin ellos, el diagrama está incompleto.',
      emoji: '⬭'
    },
    {
      termino: 'Rombo (Decisión)',
      definicion: 'Símbolo de decisión con 2 caminos posibles. Adentro va una pregunta (¿es par?, ¿está lloviendo?). De él salen 2 flechas: una etiquetada SÍ y otra NO. Cada flecha lleva a una rama distinta del algoritmo.',
      ejemplo: '\'¿Está lloviendo?\' → SÍ: dirige a \'Tomar paraguas\'. NO: dirige a \'Salir normal\'. Las dos flechas eventualmente convergen al siguiente paso común.',
      emoji: '◇'
    },
    {
      termino: 'Rectángulo (Proceso)',
      definicion: 'Símbolo de acción o instrucción. Adentro va un verbo en infinitivo que describe qué hacer. Es el símbolo más común; la mayoría del diagrama suele ser rectángulos conectados con flechas.',
      ejemplo: '\'Mezclar ingredientes\', \'Multiplicar por 2\', \'Imprimir el resultado\': todas son acciones, así que van en rectángulos.',
      emoji: '▭'
    },
    {
      termino: '4 reglas para dibujar',
      definicion: 'Las 4 normas: (1) un solo INICIO y un solo FIN, (2) flechas con dirección única, (3) cada rombo con 2 salidas etiquetadas (SÍ/NO), (4) símbolos del mismo tamaño. Sin estas reglas, el diagrama se vuelve confuso.',
      ejemplo: 'Si no etiquetas las flechas del rombo con SÍ/NO, quien lea no sabe cuál camino seguir cuando la respuesta es SÍ. Las 4 reglas evitan confusiones así.',
      emoji: '📐'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer diagramas de flujo?',
      instrucciones: '5 preguntas para verificar que dominas los 5 símbolos y las 4 reglas.',
      preguntas: [
        {
          enunciado: '¿Qué símbolo se usa para representar el INICIO o FIN de un algoritmo?',
          opciones: [
            'Rombo.',
            'Óvalo (o pastilla).',
            'Rectángulo.',
            'Triángulo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Óvalo para INICIO y FIN. El óvalo abre y cierra el diagrama. Todo algoritmo debe tener exactamente un óvalo de inicio y al menos uno de fin.',
          feedbackIncorrecto: 'Óvalo para INICIO/FIN. Estándar universal. Rombo es decisión; rectángulo es proceso. Cada forma tiene su uso.'
        },
        {
          enunciado: 'Tu algoritmo tiene una decisión: \'¿está lloviendo?\'. ¿Qué símbolo usas?',
          opciones: [
            'Rectángulo.',
            'Rombo (con 2 salidas etiquetadas SÍ/NO).',
            'Óvalo.',
            'Paralelogramo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Rombo para decisiones. Adentro va la pregunta. Salen 2 flechas: SÍ y NO, hacia ramas distintas del algoritmo.',
          feedbackIncorrecto: 'Rombo para decisiones. Adentro la pregunta. 2 flechas saliendo etiquetadas SÍ y NO. Es el símbolo más útil para algoritmos con alternativas.'
        },
        {
          enunciado: '¿Cuántas flechas salen de un rombo en un diagrama bien hecho?',
          opciones: [
            'Solo 1.',
            'Exactamente 2: una para SÍ y una para NO.',
            '3 o más.',
            'Ninguna.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Exactamente 2 flechas saliendo de un rombo, una SÍ y una NO. Si tu decisión tiene más opciones, mejor dividirla en varios rombos.',
          feedbackIncorrecto: '2 flechas: SÍ y NO. El rombo binariza decisiones. Para 3+ opciones, varios rombos en secuencia (rombo > anidado).'
        },
        {
          enunciado: 'Tu algoritmo recibe el nombre del usuario y al final imprime un saludo. ¿Qué símbolo usas para \'recibir nombre\' y \'imprimir saludo\'?',
          opciones: [
            'Rectángulo.',
            'Paralelogramo (símbolo de entrada/salida de datos).',
            'Óvalo.',
            'Rombo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Paralelogramo para entrada/salida. \'Recibir nombre\' = entrada; \'Imprimir saludo\' = salida. Ambos van en paralelogramos.',
          feedbackIncorrecto: 'Paralelogramo para datos que entran o salen del algoritmo. \'Leer entrada\' o \'Mostrar resultado\' van en paralelogramos, no en rectángulos.'
        },
        {
          enunciado: 'Tu diagrama tiene flechas en muchas direcciones y se ve enredado. ¿Qué haces?',
          opciones: [
            'Lo dejo así.',
            'Lo redibujo aplicando la regla: flechas en dirección única (arriba-abajo o izquierda-derecha).',
            'Borro las flechas.',
            'Agrego más símbolos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Las flechas deben seguir una dirección clara (típicamente de arriba abajo, o de izquierda a derecha). Si están enredadas, redibuja organizando.',
          feedbackIncorrecto: 'Las flechas en una dirección lógica (arriba-abajo o izq-der). Si están enredadas, el diagrama se vuelve ilegible. Mejor redibujar limpio.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué otros lenguajes simbólicos universales conozco (matemáticas, música, señales de tráfico)? ¿Qué tienen en común?',
    transferencia: 'Esta semana, dibuja al menos 1 diagrama de flujo más (puede ser de algo de otra materia o de tu rutina diaria).',
    cierre: 'Al terminar la clase: (1) podrás identificar los 5 símbolos estándar de un diagrama de flujo; (2) sabrás aplicar cada símbolo a su función; (3) podrás evaluar si un diagrama está bien dibujado; (4) habrás creado tu primer diagrama de flujo de un algoritmo real.'
  },
  saberAncestral: {
    saber: 'Los albañiles de Cartago, antes de levantar una pared, hacían un dibujo a mano en una hoja: el plano. El plano no era la pared, era una representación visual de cómo se levantaría: el ancho, la altura, dónde van las ventanas, dónde la puerta. Sin plano, los albañiles no sabían por dónde empezar; con plano, todos sabían qué seguía. El plano traducía la idea (que estaba en la cabeza del arquitecto) en algo que cualquier albañil podía ejecutar. En la cocina pasaba parecido: cuando una abuela tenía una receta complicada (como un pastel de cumpleaños), hacía un esquema en papel antes de empezar: "primero esto, después esto, si el horno está caliente entonces esto otro, si no, esperar 10 minutos". Ese esquema con flechas era un diagrama de flujo avant la lettre. Hoy aprendes los símbolos estándar para hacer diagramas de flujo de tus algoritmos.',
    preguntaPuente: 'Si tuvieras que explicar a tu mamá cómo decidir qué ponerse de ropa cada mañana (con todas sus decisiones: ¿llueve o no? ¿hace frío o calor? ¿es para colegio o paseo?), ¿te saldría mejor en lista de pasos o en dibujo con flechas?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del lenguaje compartido)',
      lente: 'lente del nosotros',
      cita: '"Los símbolos compartidos son lenguaje universal. El que los conoce habla con cualquier persona del mundo, en cualquier época."',
      preguntaEspejo: '¿Qué otros lenguajes simbólicos universales conozco (matemáticas, música, señales de tráfico)? ¿Qué tienen en común?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que usaba diagramas para planear campañas)',
      lente: 'lente del cuidado interior',
      cita: '"Un dibujo claro vale más que mil palabras vagas. Quien dibuja antes de hablar, ahorra confusiones."',
      preguntaEspejo: '¿Cuántas veces he intentado explicar algo complicado solo con palabras cuando un dibujo lo haría rápido?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del pensamiento visual)',
      lente: 'lente de la infoesfera',
      cita: '"El siglo XXI privilegia el pensamiento visual. Quien sabe diagramar, comunica más rápido que quien solo sabe redactar."',
      preguntaEspejo: '¿En qué situaciones de mi vida un diagrama claro me ahorraría malentendidos?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 5 símbolos estándar de un diagrama de flujo; (2) sabrás aplicar cada símbolo a su función; (3) podrás evaluar si un diagrama está bien dibujado; (4) ha…',
    emocional: 'Marco Aurelio planeaba campañas militares con mapas y esquemas, no solo con explicaciones verbales.',
    ciudadana: 'Los símbolos del diagrama de flujo (óvalo, rectángulo, rombo) son universales.',
    local: 'Antes de salir, intercambia el diagrama con un compañero: ¿él entiende sin que tú expliques?',
    intergeneracional: 'Las redes profesionales modernas (LinkedIn, presentaciones, propuestas de negocio) valoran cada vez más el pensamiento visual.'
  }
};

export default contenido;
