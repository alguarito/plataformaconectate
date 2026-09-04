/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/8/8-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 5,
  titulo: 'Referencias relativas y absolutas en Excel',
  resumen: 'Como la fórmula heredada del abuelo: lo que no se negocia se ancla, lo que cambia con el día se deja libre. Aprendes a escribir UNA fórmula que se copia a 100 celdas y calcula bien cada caso.',
  duracionMin: 90,
  subtema: 'Excel · Referencias relativas y absolutas',
  preLectura: {
    porQueImporta: 'Saber anclar una celda con $ es la diferencia entre escribir UNA fórmula reutilizable y escribir 100 fórmulas a mano. Esta habilidad ahorra horas y reduce errores en cualquier hoja: notas, presupuestos, inventarios, nómina.',
    preguntaDetonante: '¿Qué de la fórmula del abuelo — el ancla heredada que no se negocia — podemos llevar a las referencias absolutas de Excel?',
    activacion: {
      titulo: 'La receta multiplicada',
      descripcion: 'En 5 minutos: piensa en una receta de tu casa (sancocho, arepa, jugo) que se multiplique según porciones. ¿Qué cantidades son FIJAS por porción y cuáles VARÍAN con el número de porciones? Eso es relativo vs absoluto antes de Excel.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 4 aplicaste 4 funciones estadísticas a datos reales.',
      siguiente: 'En la sesión 6 aprenderás fórmulas compuestas con operadores y orden de cálculo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Referencia relativa',
      definicion: 'Dirección de celda sin signos de dólar (B2). Al arrastrar la fórmula, la referencia se ajusta automáticamente a cada nueva posición.',
      ejemplo: 'Si en C2 escribes =B2*2 y arrastras a C3, queda =B3*2. La referencia se mueve con la fórmula.',
      emoji: '↔️',
      categoria: 'Cómo se ancla'
    },
    {
      termino: 'Referencia absoluta',
      definicion: 'Dirección con dos signos de dólar ($B$2). Al arrastrar, queda fija sin importar dónde se copie la fórmula.',
      ejemplo: 'Si pones =$B$2*2 en C2 y arrastras a C10, las 9 celdas siguen apuntando a B2. Útil para constantes como IVA o tasas.',
      emoji: '📌',
      categoria: 'Cómo se ancla'
    },
    {
      termino: 'Referencia mixta',
      definicion: 'Fija solo fila o solo columna. $B2 fija la columna B (fila libre); B$2 fija la fila 2 (columna libre).',
      ejemplo: 'En tabla de multiplicar, =$A2*B$1 permite que la columna A se quede fija al arrastrar derecha, y la fila 1 al arrastrar abajo.',
      emoji: '🔀'
    },
    {
      termino: 'Tecla F4',
      definicion: 'Atajo profesional que alterna entre los 4 tipos de referencia (B2 → $B$2 → B$2 → $B2 → B2) en el cursor de la barra de fórmulas.',
      ejemplo: 'Pones el cursor sobre B2 en la barra de fórmulas, presionas F4 una vez: se convierte en $B$2. Otra vez: B$2. Otra: $B2.',
      emoji: '⌨️',
      categoria: 'Cómo se construye fórmula compleja'
    },
    {
      termino: 'Patrón patrón-copia',
      definicion: 'Sabiduría del alfarero aplicada a Excel: lo que debe quedarse fijo se fija con $; lo que debe moverse se deja libre. La constante es el patrón, los datos son las copias.',
      ejemplo: 'El alfarero fija el molde y ajusta cada pieza. En Excel fijas el IVA como constante ($) y arrastras los precios (relativos) para calcular impuesto uno por uno.',
      emoji: '🏺'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas el dólar de las referencias?',
      instrucciones: '5 preguntas para verificar que sabes cuándo usar referencia relativa, absoluta o mixta.',
      preguntas: [
        {
          enunciado: 'Escribes =B2*$E$1 en C2 y la arrastras hacia abajo. ¿Qué cambia y qué no?',
          opciones: [
            'Ambas cambian (B2 y E1)',
            'Ninguna cambia',
            'B2 queda fija; E1 cambia',
            'B2 cambia (B3, B4...); E1 queda fija'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. B2 es relativa, se mueve al arrastrar (B3, B4...). $E$1 es absoluta, queda fija siempre.',
          feedbackIncorrecto: 'B2 (relativa) cambia con el arrastre. $E$1 (absoluta) queda fija. Esa es la regla del signo de dólar.'
        },
        {
          enunciado: 'Tienes IVA del 19% en celda E1. Quieres calcular IVA para 50 productos en columna C. ¿Qué fórmula escribes en C2 para arrastrarla?',
          opciones: [
            '=B2*$E$1',
            '=B2*E1',
            '=B$2*E1',
            '=$B$2*E1'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El precio (B2) debe moverse al arrastrar; el IVA (E1) debe quedarse fijo. Por eso =B2*$E$1.',
          feedbackIncorrecto: 'El precio (B2) debe ser relativo para que cambie con cada fila; el IVA (E1) debe ser absoluto ($E$1) para que no se mueva.'
        },
        {
          enunciado: '¿Para qué sirve la tecla F4 mientras editas una fórmula?',
          opciones: [
            'Para guardar la fórmula',
            'Para alternar entre los 4 tipos de referencia',
            'Para borrar la celda',
            'Para ejecutar la fórmula'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. F4 alterna B2 → $B$2 → B$2 → $B2 → B2. Mucho más rápido que escribir los signos a mano.',
          feedbackIncorrecto: 'F4 alterna los 4 tipos de referencia en el cursor. Es atajo profesional indispensable.'
        },
        {
          enunciado: 'Para tabla de multiplicar (filas 1-10 por columnas 1-10), ¿qué fórmula UNICA escribes en B2 para arrastrar a todas las 100 celdas?',
          opciones: [
            '=A2*B1',
            '=$A$2*$B$1',
            '=$A2*B$1',
            '=A$2*$B1'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. =$A2*B$1 fija columna A (factor de fila) y fija fila 1 (factor de columna). Permite arrastrar a las 100 celdas.',
          feedbackIncorrecto: 'La fórmula correcta es =$A2*B$1. Fija solo la columna A y solo la fila 1, dejando libres las direcciones que sí deben moverse.'
        },
        {
          enunciado: 'Sabiduría del alfarero del Quindío aplicada a Excel: ¿qué se fija con dólar?',
          opciones: [
            'Las copias (datos que cambian)',
            'El patrón (lo que no debe cambiar al copiar)',
            'Todas las celdas siempre',
            'Las celdas vacías'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El patrón se fija ($); las copias se mueven (sin $). Igual que el alfarero deja el molde fijo y ajusta cada pieza nueva.',
          feedbackIncorrecto: 'Se fija con dólar lo que no debe cambiar al copiar: el patrón. Las copias (filas que se calculan) se dejan libres para que se ajusten.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '"Lo que no se negocia se ancla". Más allá de Excel, ¿qué constantes éticas o personales anclas tú con $ en tu vida — lo que no copias de otros, lo que no varía con la presión social?',
    transferencia: 'Esta semana arma una hoja con UNA fórmula reusable: cálculo de descuento, IVA, promedio ponderado. Que UNA sola línea calcule 20 casos. Documenta qué anclaste y por qué.',
    cierre: 'La fórmula del abuelo — el ancla heredada — sigue viva en cada $ que escribes. Es disciplina técnica y, también, soberanía cultural.'
  },
  saberAncestral: {
    saber: 'En los talleres alfareros de Pijao y Filandia (Quindío), donde la cerámica es oficio de pueblo desde los abuelos, el maestro alfarero usa un gesto que parece de magia para quien no lo conoce: fija el patrón antes de copiar. Cuando va a producir 50 platos iguales para una boda o una venta, no hace cada plato desde cero. Hace UNO primero, el patrón: la forma exacta, el grosor justo, los bordes precisos. Ese patrón lo deja firme sobre la mesa, sin moverlo, casi sagrado. Después, los aprendices se van turnando para copiar el patrón: cada uno toma arcilla nueva, mira el patrón, y reproduce las medidas. El patrón no se mueve (es la referencia absoluta del oficio); las copias se ajustan al patrón (son las referencias relativas). Si el patrón se moviera con cada copia, las 50 piezas saldrían cada una distinta, y la venta se perdería. Si las copias no se ajustaran al patrón, también: no habría reproducción posible. La sabiduría del alfarero se traduce a Excel sin perder ni un gramo: lo que debe quedarse fijo se fija; lo que debe moverse se mueve.',
    fuente: 'Recetas y fórmulas heredadas de oficios colombianos (cocina, herrería, sastrería)',
    preguntaPuente: '¿Qué sabía el alfarero del Quindío al fijar el patrón antes de copiar, que el estudiante novato olvida cuando arrastra una fórmula y se le rompe a la mitad? ¿Y por qué un $ en la dirección de la celda cambia todo el comportamiento al arrastrar?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Reproducir sin perder dignidad es lo opuesto a copiar como esclavo; las referencias bien usadas honran el patrón sin convertir al copista en máquina.',
      preguntaEspejo: '¿Mi fórmula refleja una idea bien pensada que se reproduce con criterio, o es solo copia mecánica?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo pequeño cambia el resultado: un signo de dólar bien puesto separa el oficio del desastre.',
      preguntaEspejo: '¿Estoy poniendo cuidado a cada $ de mi fórmula, o asumo que se entiende?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La información replicable con honestidad es la nueva ética del oficio digital.',
      preguntaEspejo: '¿Mi hoja es replicable por otra persona, o solo yo entiendo cómo está armada?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a anclar lo no negociable y dejar libre lo contextual — habilidad cognitiva que aplica a Excel y a la vida.',
    emocional: 'Resististe la tentación de copiar fórmulas sin pensar — entendiste que el criterio precede a la técnica.',
    ciudadana: 'Las fórmulas reusables son cooperación silenciosa: el que las escribe bien le facilita la vida al que las hereda.',
    local: 'Heredaste el oficio de la receta colombiana: ancla lo esencial, varía lo contextual, transmite la lógica.',
    intergeneracional: 'La receta del sancocho de tu abuela y la fórmula $A$1 de Excel comparten lógica. Hoy heredas en formato digital lo que el oficio enseñó por siglos.'
  }
};

export default contenido;
