/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/10/10-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 2,
  titulo: 'Contabilidad básica — ingresos, egresos y balance personal o familiar',
  resumen: 'La contabilidad básica es la práctica de registrar sistemáticamente entradas y salidas de dinero para entender la salud económica de una persona, familia o negocio.',
  duracionMin: 90,
  subtema: 'Contabilidad básica — ingresos, egresos y balance personal o familiar',
  preLectura: {
    porQueImporta: 'El criterio principal: que descubras algo concreto sobre tus hábitos económicos que no sabías.',
    preguntaDetonante: '¿Qué sabía el tendero al hacer la cuenta de la caja cada noche, que el novato olvida cuando lleva sus finanzas "de memoria"? ¿Y por qué llevar contabilidad personal a los 16 años puede ahorrarte décadas de problemas financieros?',
    activacion: {
      titulo: 'Estimación inicial de mis cuentas',
      descripcion: 'Actividad 1 · IDENTIFICA — Estimación inicial de mis cuentas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 1 mapeaste las herramientas y tareas de ofimática con IA.',
      siguiente: 'Llega con tu cuaderno de 2 semanas completo, balance calculado y análisis.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ingresos',
      definicion: 'Todo dinero que entra. Para un joven: mesada, regalos, propinas, pequeños trabajos, ventas casuales.',
      ejemplo: 'Recibes $20.000 de tu tía + $50.000 de un trabajito + $10.000 de mesada. Total de ingresos del periodo: $80.000.',
      emoji: '💰'
    },
    {
      termino: 'Egresos',
      definicion: 'Todo dinero que sale, agrupado por categorías típicas: transporte, alimentación, ocio, ahorro, salud, vivienda, otros.',
      ejemplo: 'Gastas $30.000 en transporte, $15.000 en almuerzos y $5.000 en salidas. Total egresos: $50.000 en 3 categorías.',
      emoji: '🛒'
    },
    {
      termino: 'Balance neto',
      definicion: 'Ingresos menos egresos en un periodo. Positivo = excedente. Negativo = déficit.',
      ejemplo: 'Con ingresos de $80.000 y egresos de $50.000, el balance neto del mes es +$30.000.',
      emoji: '⚖️'
    },
    {
      termino: 'Disciplina del registro diario',
      definicion: 'Práctica de anotar cada entrada y salida el mismo día que ocurre. La memoria falla; el cuaderno no.',
      ejemplo: 'Al final del día anotas en una línea: "Almuerzo $8.000". Sin esa rutina, el balance del mes es invento.',
      emoji: '🗓️'
    },
    {
      termino: 'Cuaderno físico vs Sheets',
      definicion: 'Empezar con cuaderno físico 2 semanas y migrar a Sheets es estrategia común. Lo importante es la disciplina, no la herramienta.',
      ejemplo: 'Llevas 14 días en libreta, después abres Sheets, copias categorías y montas fórmulas. La disciplina ya está.',
      emoji: '📒'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Llevas contabilidad básica con disciplina?',
      instrucciones: '5 preguntas para verificar que dominas los 3 elementos obligatorios.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los 3 elementos obligatorios de la contabilidad básica?',
          opciones: [
            'Ingresos, egresos y balance neto',
            'Solo ingresos',
            'Solo egresos',
            'Solo el saldo bancario'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Ingresos, egresos y balance neto. Los tres juntos cuentan la historia económica del periodo.',
          feedbackIncorrecto: 'Son ingresos, egresos y balance neto. Faltar a uno deja la contabilidad incompleta.'
        },
        {
          enunciado: 'La regla "lo que no se mide, no se mejora" significa que...',
          opciones: [
            'No vale la pena medir',
            'Sin registro sistemático, no puedes controlar tus gastos',
            'Hay que medir solo a veces',
            'El registro es opcional'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Sin registro sistemático, los gastos escapan a tu control.',
          feedbackIncorrecto: 'Sin registro, no hay control. Por eso la disciplina diaria del cuaderno es clave.'
        },
        {
          enunciado: 'Tu balance neto es -$15.000 al final del mes. ¿Qué significa?',
          opciones: [
            'Que tienes excedente',
            'Que gastaste $15.000 más de lo que recibiste (déficit)',
            'Que no pasó nada',
            'Que ganaste $15.000'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Balance negativo significa déficit: egresos superaron ingresos en esa cantidad.',
          feedbackIncorrecto: 'Significa déficit: gastaste $15.000 más de lo que entró. Hay que ajustar para el próximo mes.'
        },
        {
          enunciado: '¿Qué importa más, el cuaderno físico o Google Sheets?',
          opciones: [
            'Solo Sheets',
            'Solo papel',
            'La disciplina del registro, no la herramienta',
            'Nada importa'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Sin disciplina, ninguna herramienta sirve. Con disciplina, cualquiera funciona.',
          feedbackIncorrecto: 'Importa la disciplina del registro diario. La herramienta es secundaria.'
        },
        {
          enunciado: '¿Cuántas semanas mínimas de registro pide la sesión?',
          opciones: [
            '1 día',
            '2 semanas',
            '1 año',
            '10 años'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 2 semanas mínimas para producir un balance interpretable.',
          feedbackIncorrecto: 'Son 2 semanas mínimas. Suficientes para detectar patrones y producir un primer balance útil.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy asumiendo control de mi economía con el registro, o entrego mis decisiones a hábitos automáticos?',
    transferencia: 'Llega con tu cuaderno de 2 semanas completo, balance calculado y análisis.',
    cierre: 'Al terminar podrás: (1) identificar tus fuentes de ingresos y categorías de egresos personales o familiares; (2) aplicar el registro disciplinado de ingresos y egresos durante al menos 2 semanas; (3) analizar tus datos para identificar patrones (días de mayor gasto, categorías qu…'
  },
  saberAncestral: {
    saber: 'En las tiendas del centro de Cartago, en las panaderías del barrio Obrero, en las modistas del Quindío, hubo un ritual nocturno que cualquier microempresario practicaba sin falta: la cuenta de la caja. Cuando cerraban al final del día, no se iban a casa directo. Sacaban cuaderno cuadriculado, calculadora, los billetes y monedas, y hacían 3 operaciones del oficio: (1) Sumar lo que entró: todas las ventas del día. (2) Restar lo que salió: todos los gastos. Mercancía, servicios, recursos. (3) Calcular el saldo: ingresos menos egresos. Si era positivo, el negocio iba bien. Si era negativo, había problema. Si se repetía el negativo, el negocio estaba en crisis. Esa contabilidad no era trámite: era información que dirigía las decisiones del día siguiente. Si los ingresos bajaban, había que cambiar algo. Si los egresos subían, había que revisar gastos. La sabiduría era precisa: ningún negocio sostenible se llevaba solo con la memoria. La contabilidad personal moderna hereda esa práctica del tendero.',
    preguntaPuente: '¿Qué sabía el tendero al hacer la cuenta de la caja cada noche, que el novato olvida cuando lleva sus finanzas "de memoria"? ¿Y por qué llevar contabilidad personal a los 16 años puede ahorrarte décadas de problemas financieros?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La contabilidad personal libera al joven de la deriva financiera; ignorar las cuentas es entregarse al sistema que extrae sin información.',
      preguntaEspejo: '¿Estoy asumiendo control de mi economía con el registro, o entrego mis decisiones a hábitos automáticos?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La disciplina del registro diario es virtud; la negligencia económica es vicio que se descubre tarde.',
      preguntaEspejo: '¿Estoy registrando con disciplina diaria, o salto días esperando que la memoria llene los huecos?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los datos económicos personales bien recolectados son información cuidada que fundamenta decisiones de vida.',
      preguntaEspejo: '¿Estoy cuidando mis datos económicos como información profesional, o solo registro porque me lo pidieron?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar tus fuentes de ingresos y categorías de egresos personales o familiares; (2) aplicar el registro disciplinado de ingresos y egresos durante al menos 2 semanas; (3)…',
    emocional: 'Es tentador saltarse el registro algunos días porque "no pasó nada importante".',
    ciudadana: 'Cuando llevas cuenta de tus ingresos y egresos, asumes control de tu vida económica.',
    local: 'Antes de cerrar, mira la contabilidad desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, llevar cuenta personal es ejercicio de soberanía sobre los propios datos.'
  }
};

export default contenido;
