/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 6
 * (sesión global 6).
 *
 * Auto-generado desde content/guias/8/8-1-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 6,
  titulo: 'Fórmulas compuestas — operadores, porcentajes y jerarquía PEMDAS',
  resumen: 'Como el cálculo de la chicha del abuelo: 3 partes de maíz, 1 de panela, después se multiplica por porciones, después se suman especias. El ORDEN no es negociable. Aprendes jerarquía PEMDAS y cálculo de porcentajes correctamente.',
  duracionMin: 90,
  subtema: 'Excel · Fórmulas compuestas · Jerarquía PEMDAS',
  preLectura: {
    porQueImporta: 'Saber escribir fórmulas correctas te servirá para presupuestos, descuentos, IVA, intereses, promedios ponderados. Una fórmula mal hecha en una nómina o cuota escolar afecta a personas reales — cuidar el orden es ética del cálculo.',
    preguntaDetonante: '¿Qué de la receta de la chicha del abuelo — el orden no negociable de pasos — podemos llevar a las fórmulas compuestas?',
    activacion: {
      titulo: 'Calcula sin fórmulas',
      descripcion: 'En 3 minutos: en parejas calculen sin Excel un descuento del 15% sobre $500.000. Comparen las dos respuestas. Si difieren, ¿por qué? El orden importa antes de Excel.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 5 aprendiste a anclar referencias con $ para fórmulas reusables.',
      siguiente: 'En la sesión 7 representarás los datos con gráficos: barras, líneas, circulares.'
    }
  },
  conceptosClave: [
    {
      termino: 'PEMDAS',
      definicion: 'Acrónimo del orden estándar en que se ejecutan operaciones: Paréntesis, Exponentes, Multiplicación y División (izq-der), Adición y Sustracción (izq-der).',
      ejemplo: 'En =2+3*4, la multiplicación va primero (3*4=12), después la suma (2+12=14). Por eso el resultado es 14, no 20.',
      emoji: '🔢'
    },
    {
      termino: 'Multiplicación antes que suma',
      definicion: 'Regla del orden PEMDAS más confundida. La multiplicación y división se hacen siempre antes que la suma y resta, salvo cuando hay paréntesis.',
      ejemplo: '=10+5*2 da 20 (porque 5*2=10, luego 10+10=20), no 30. Para forzar suma primero, hay que usar paréntesis: =(10+5)*2.',
      emoji: '✖️'
    },
    {
      termino: 'Paréntesis explícitos',
      definicion: 'Práctica profesional de agregar paréntesis incluso cuando PEMDAS los hace innecesarios, para que la fórmula sea legible sin descifrar el orden.',
      ejemplo: '=(B2*0,3)+(C2*0,3)+(D2*0,4) es más legible que =B2*0,3+C2*0,3+D2*0,4 aunque den el mismo resultado.',
      emoji: '( )'
    },
    {
      termino: 'Operación de izquierda a derecha',
      definicion: 'Cuando dos operaciones tienen el mismo nivel de PEMDAS (multiplicación y división, o suma y resta), se resuelven en el orden que aparecen leyendo izquierda a derecha.',
      ejemplo: '=10/2*5 es 25 (no 1). Primero 10/2=5, después 5*5=25. La división no tiene prioridad sobre multiplicación porque están al mismo nivel.',
      emoji: '➡️'
    },
    {
      termino: 'Fórmula compuesta',
      definicion: 'Fórmula que combina al menos 2 operadores distintos (más, menos, por, dividir, exponente). El orden importa y PEMDAS la organiza.',
      ejemplo: 'Nota final ponderada: =(B2*0,3)+(C2*0,3)+(D2*0,4) combina multiplicación y suma con porcentajes. PEMDAS asegura el orden correcto.',
      emoji: '🧮'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas PEMDAS en fórmulas?',
      instrucciones: '5 preguntas para verificar que sabes el orden de operaciones y cuándo usar paréntesis explícitos.',
      preguntas: [
        {
          enunciado: '¿Cuánto da =2+3*4 en Excel?',
          opciones: [
            '20',
            '10',
            'Error',
            '14'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Por PEMDAS, primero 3*4=12, después 2+12=14. La multiplicación va antes que la suma.',
          feedbackIncorrecto: 'Por PEMDAS, primero se hace la multiplicación (3*4=12), después la suma (2+12=14). El resultado es 14.'
        },
        {
          enunciado: 'Quieres calcular nota final como 30% del parcial 1 (B2), 30% del parcial 2 (C2) y 40% del final (D2). ¿Cuál fórmula es más clara?',
          opciones: [
            '=(B2*0,3)+(C2*0,3)+(D2*0,4)',
            '=B2*0,3+C2*0,3+D2*0,4',
            '=B2+C2+D2*0,4',
            '=B2*0,3*C2*0,3*D2*0,4'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Aunque las dos primeras dan el mismo resultado por PEMDAS, la segunda con paréntesis es más legible y profesional.',
          feedbackIncorrecto: 'La segunda opción con paréntesis explícitos es la más legible. Las dos primeras dan el mismo resultado por PEMDAS, pero la profesional muestra la intención.'
        },
        {
          enunciado: '¿Cuánto da =10/2*5?',
          opciones: [
            '1',
            '25',
            '100',
            '10'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Multiplicación y división tienen el mismo nivel, se resuelven izquierda a derecha. Primero 10/2=5, después 5*5=25.',
          feedbackIncorrecto: 'La división no tiene prioridad sobre la multiplicación. Se resuelven en orden de izquierda a derecha: 10/2=5, luego 5*5=25.'
        },
        {
          enunciado: 'Tienes precio (B2) sin IVA y quieres calcular precio con IVA de 19%. ¿Cuál fórmula es CORRECTA?',
          opciones: [
            '=B2*1+19%',
            '=B2+19%',
            '=B2*(1+19%)',
            '=B2*119'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. =B2*(1+19%) primero calcula 1+0,19=1,19, después multiplica por B2. Aplica el IVA correctamente.',
          feedbackIncorrecto: 'La fórmula correcta es =B2*(1+19%). Los paréntesis aseguran que se sume 1 con el porcentaje antes de multiplicar por el precio.'
        },
        {
          enunciado: '¿Cuál es la regla profesional del PEMDAS cuando dudas del orden?',
          opciones: [
            'Usar paréntesis explícitos siempre que ayude a la claridad',
            'Memorizar todo el orden',
            'Escribir varias fórmulas y elegir la que dé resultado esperado',
            'Confiar en que Excel adivine'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Cuando dudes, paréntesis. La phronesis del oficio consiste en privilegiar la claridad sobre la elegancia compacta.',
          feedbackIncorrecto: 'La regla profesional es: cuando dudes, usa paréntesis. Mejor explícito y claro que compacto y ambiguo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Pensar el orden antes de calcular es disciplina ancestral. ¿En qué otras decisiones de tu vida el ORDEN cambia el resultado (no solo en fórmulas)?',
    transferencia: 'Esta semana revisa una factura, un recibo o una cuenta de cafetería. ¿Los descuentos están bien calculados? ¿Hay algún error de orden? Aplica PEMDAS en la vida real.',
    cierre: 'La receta de la chicha y la fórmula de Excel comparten algo: el orden no es negociable. Equivocarse cuesta dinero, tiempo o sabor.'
  },
  saberAncestral: {
    saber: 'En las obras de construcción de Cartago, el maestro albañil tenía una regla inquebrantable que enseñaba a los aprendices el primer día: la mezcla se hace en orden. Primero la arena, en montón. Después el cemento, encima de la arena, en proporción exacta. Se revuelven en seco con la pala hasta uniformar el color. Recién entonces, en el centro del montón, se hace un hoyo y se vierte el agua poco a poco, integrando desde los bordes hacia el centro. Si un aprendiz cambiaba el orden "por ahorrar tiempo" (mezclar arena y agua primero, después echar cemento), el resultado era catastrófico: la mezcla quedaba con grumos, no fraguaba bien, las paredes salían débiles y se caían al primer aguacero fuerte. El maestro no aceptaba argumentos: el orden no es preferencia, es ley del oficio. La sabiduría de la construcción se sostiene en órdenes silenciosos como ese; cada gremio tiene los suyos. En matemáticas, también: hay un orden estricto en que las operaciones deben hacerse, y se llama PEMDAS.',
    fuente: 'Receta tradicional de la chicha de maíz en el Valle del Cauca',
    preguntaPuente: '¿Qué sabía el albañil al respetar el orden de la mezcla, que el novato olvida cuando escribe =2+3*4 esperando 20? ¿Y por qué los paréntesis explícitos son señal de profesionalismo, no de inseguridad?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una fórmula que respeta al lector es ya un acto ético; una que esconde su lógica es una pequeña violencia técnica.',
      preguntaEspejo: '¿Mis fórmulas están escritas para que otros las entiendan o para que admiren mi precisión técnica?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La claridad es virtud; lo oscuro disfrazado de elegante es vicio que se admira a sí mismo.',
      preguntaEspejo: '¿Estoy escribiendo fórmulas claras o estoy mostrando que sé PEMDAS escribiendo fórmulas compactas?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La fórmula transparente es la nueva ética del oficio digital en la era de la información compartida.',
      preguntaEspejo: '¿Mi hoja seguirá siendo legible si alguien la abre en 6 meses sin mi explicación, o solo se entiende conmigo presente?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que el orden importa tanto como las operaciones — habilidad cognitiva que aplica a Excel, a la vida, a la cocina.',
    emocional: 'Resististe la tentación de sumar porcentajes (10% + 20% = 30%) porque entendiste que la matemática real es secuencial, no aditiva.',
    ciudadana: 'Verificar el orden de cálculo en facturas y promociones es defensa del consumidor. Sabes leer lo que la promoción esconde.',
    local: 'Heredaste el orden riguroso de la receta de la chicha — cocinar y calcular comparten la misma lógica algorítmica.',
    intergeneracional: 'La abuela cocinera, el abuelo herrero y tu Excel comparten gramática del orden. Lo que cambia es el medio, no la ley.'
  }
};

export default contenido;
