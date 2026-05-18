/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/10/10-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 5,
  titulo: 'Visualización de datos contables con IA — gráficos honestos',
  resumen: 'La visualización de datos es la práctica de convertir números en imágenes que comuniquen información de manera rápida y precisa.',
  duracionMin: 90,
  subtema: 'Visualización de datos contables con IA — gráficos honestos',
  preLectura: {
    porQueImporta: 'El criterio principal: que tus gráficos comuniquen los datos con honestidad y que sepas reconocer cuándo otros mienten visualmente.',
    preguntaDetonante: '¿Qué sabía el pregonero al mostrar la pesa visible al comprador, que el novato olvida cuando publica gráficos con eje Y truncado? ¿Y por qué los 5 principios de honestidad visual valen más que las plantillas elegantes mal aplicadas?',
    activacion: {
      titulo: 'Auditoría de 2 gráficos reales',
      descripcion: 'Actividad 1 · IDENTIFICA — Auditoría de 2 gráficos reales (15 min · individual con dispositivo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En las sesiones 2-4 produjiste contabilidad personal y proyección financiera.',
      siguiente: 'En la sesión 6 vas a aprender a hacer encuestas y análisis de mercado con IA para microemprendimiento.'
    }
  },
  conceptosClave: [
    {
      termino: 'Gráfico de barras',
      definicion: 'Ideal para comparar valores entre categorías. Cada barra representa una categoría con su altura proporcional al valor.',
      ejemplo: 'Compara cuánto se gastó este mes en transporte, alimentación, ocio y salud con 4 barras lado a lado.',
      emoji: '📊'
    },
    {
      termino: 'Gráfico de líneas',
      definicion: 'Ideal para mostrar evolución en el tiempo. Une los puntos con líneas para visualizar la tendencia.',
      ejemplo: 'Balance semanal a lo largo de 12 semanas: una línea que sube y baja muestra la trayectoria de la cuenta.',
      emoji: '📈'
    },
    {
      termino: 'Gráfico circular',
      definicion: 'Ideal para proporciones del total. Cada segmento es una porción del 100%. Útil con pocas categorías (3-6).',
      ejemplo: 'Composición del egreso del mes: 40% alimentación, 30% transporte, 20% ocio, 10% ahorro.',
      emoji: '🥧'
    },
    {
      termino: 'Eje Y desde cero',
      definicion: 'Principio de honestidad en gráficos de barras. Si el eje no parte de cero, las diferencias se exageran visualmente.',
      ejemplo: 'Dos barras con valores 100 y 105 deberían parecer casi iguales; si el eje empieza en 99, parecen muy distintas.',
      emoji: '0️⃣'
    },
    {
      termino: 'Honestidad visual (5 principios)',
      definicion: 'Eje Y desde cero, escala consistente, sin 3D engañoso, etiquetas legibles, título descriptivo. Reglas no negociables.',
      ejemplo: 'Antes de presentar tu gráfico, lo revisas con los 5 principios. Si falla uno, lo arreglas, no lo defiendes.',
      emoji: '🪞'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Diseñas gráficos honestos?',
      instrucciones: '5 preguntas para verificar los 5 principios.',
      preguntas: [
        {
          enunciado: '¿Qué gráfico usarías para mostrar evolución del balance a lo largo de 12 semanas?',
          opciones: [
            'Circular',
            'Líneas',
            'Barras 3D rotativas',
            'Ninguno'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El gráfico de líneas muestra evolución en el tiempo de forma clara.',
          feedbackIncorrecto: 'Líneas. El gráfico de líneas es el indicado para tendencia temporal.'
        },
        {
          enunciado: '¿Por qué el eje Y debe partir de cero en barras?',
          opciones: [
            'Por costumbre',
            'Porque eje no nulo exagera las diferencias visuales',
            'Porque ahorra tinta',
            'Porque es obligatorio legal'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Si el eje no parte de cero, las diferencias se inflan visualmente y engañan al lector.',
          feedbackIncorrecto: 'Eje desde cero evita exagerar diferencias. Es regla de honestidad visual.'
        },
        {
          enunciado: '¿Cuántos principios de honestidad visual son irrenunciables?',
          opciones: [
            '1',
            '5',
            '100',
            '0'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 5: eje desde cero, escala consistente, sin 3D, etiquetas legibles, título descriptivo.',
          feedbackIncorrecto: 'Son 5 principios. Faltar a uno produce gráfico que comunica mal o engaña.'
        },
        {
          enunciado: 'La regla "si tu gráfico necesita explicación verbal extensa, está mal diseñado" significa que...',
          opciones: [
            'El gráfico no comunica por sí solo',
            'Hay que hablar mucho siempre',
            'Los gráficos son opcionales',
            'Las palabras son lo único válido'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Un buen gráfico se entiende casi solo. Si necesita 5 minutos de aclaración, falló el diseño.',
          feedbackIncorrecto: 'Significa que el gráfico no comunica por sí solo. La explicación complementa, no reemplaza al diseño.'
        },
        {
          enunciado: '¿Qué tipo de gráfico es mejor para mostrar proporciones del egreso total?',
          opciones: [
            'Circular',
            'Líneas',
            'Barras',
            'Ninguno'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El circular es ideal para proporciones del 100% con pocas categorías.',
          feedbackIncorrecto: 'Circular. Muestra cada categoría como porcentaje del total.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mis gráficos respetan al lector apurado con verdad clara, o lo engañan exagerando con trucos visuales?',
    transferencia: 'En la sesión 6 vas a aprender a hacer encuestas y análisis de mercado con IA para microemprendimiento.',
    cierre: 'Al terminar podrás: (1) identificar cuándo conviene barras, líneas o circular según el tipo de dato y la pregunta; (2) analizar un gráfico real (publicitario o periodístico) detectando errores de honestidad visual; (3) crear 3 gráficos honestos en Sheets sobre tus datos contables…'
  },
  saberAncestral: {
    saber: 'En las plazas de mercado del centro de Cartago, en la galería de Pereira, en las ferias del Quindío, hubo una figura que sostenía la honestidad del comercio: el pregonero del mercado. No era el vendedor; era el que pregonaba productos y precios desde una caseta alta. "Llegó la naranja del Valle a mil quinientos el kilo, llegó el café del Quindío a quince mil la libra". Pero hacía algo más: cuando un comprador se acercaba con duda sobre peso o precio, el pregonero mostraba la pesa visible al cliente. Sacaba la balanza, ponía el producto, dejaba que el cliente leyera la cifra. La pesa visible era prueba pública de honestidad: "vea, dos kilos justos", decía señalando el contrapeso. El comprador miraba, aprobaba, pagaba. La sabiduría era inquebrantable: el comerciante que ocultaba la pesa perdía la clientela del barrio entero en una semana. Esa práctica ancestral se traduce al gráfico contable moderno: el gráfico honesto muestra los datos como son; el manipulado los esconde o exagera.',
    preguntaPuente: '¿Qué sabía el pregonero al mostrar la pesa visible al comprador, que el novato olvida cuando publica gráficos con eje Y truncado? ¿Y por qué los 5 principios de honestidad visual valen más que las plantillas elegantes mal aplicadas?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un gráfico honesto respeta al lector apurado; uno manipulado le quita el tiempo y le miente.',
      preguntaEspejo: '¿Mis gráficos respetan al lector apurado con verdad clara, o lo engañan exagerando con trucos visuales?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Mostrar los datos como son es virtud visual; manipular para impactar es vicio del comunicador.',
      preguntaEspejo: '¿Mis gráficos muestran los datos como son, o los exagero para que impresionen?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La visualización honesta es ética informacional en la era de los gráficos virales.',
      preguntaEspejo: 'Si mis gráficos se compartieran en redes sin mi explicación, ¿seguirían comunicando la verdad?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar cuándo conviene barras, líneas o circular según el tipo de dato y la pregunta; (2) analizar un gráfico real (publicitario o periodístico) detectando errores de hone…',
    emocional: 'Es tentador exagerar diferencias para que el gráfico "impresione".',
    ciudadana: 'La mayoría de las personas que verán tus gráficos los miran en redes, prensa rápida, presentaciones con luz baja.',
    local: 'Antes de cerrar, mira los gráficos desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los gráficos circulan más rápido que los datos.'
  }
};

export default contenido;
