/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 7
 * (sesión global 7).
 *
 * Auto-generado desde content/guias/8/8-1-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 7,
  titulo: 'Gráficos básicos — barras, líneas y circulares con honestidad visual',
  resumen: 'Como el cuento gráfico del abuelo o las pictografías ancestrales: el dibujo cuenta lo que la cifra esconde. Aprendes a elegir el tipo de gráfico según la pregunta y a detectar gráficos engañosos.',
  duracionMin: 90,
  subtema: 'Excel · Gráficos · Comunicación visual honesta',
  preLectura: {
    porQueImporta: 'Vivimos rodeados de gráficos: en redes, noticias, redes sociales. Saber leerlos críticamente y producirlos honestamente te protege de manipulación y te permite comunicar la verdad con claridad.',
    preguntaDetonante: '¿Qué del cuento gráfico del abuelo — la traducción de cifras a imagen viva — podemos llevar a un gráfico digital que cuente bien?',
    activacion: {
      titulo: 'El gráfico engañoso',
      descripcion: 'En 5 minutos: busca en tu celular un gráfico de redes o noticias. Identifica si el eje empieza en 0, si tiene título claro, si los colores tienen sentido. ¿Comunica honesto o engaña?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 6 aprendiste fórmulas compuestas con jerarquía PEMDAS.',
      siguiente: 'En la sesión 8 aplicarás formato condicional y validación a tus tablas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Gráfico de barras',
      definicion: 'Visualización que compara valores entre categorías. Cada barra representa una categoría y su altura el valor. Responde "¿quién es más?".',
      ejemplo: 'Para comparar gastos por categoría (transporte, comida, ocio) en un mes, las barras muestran cuál fue mayor de un vistazo.',
      emoji: '📊'
    },
    {
      termino: 'Gráfico de líneas',
      definicion: 'Visualización que muestra evolución de un valor en el tiempo. Los puntos conectados en orden cronológico revelan tendencia.',
      ejemplo: 'Para ver cómo cambió la temperatura del aula a lo largo de la semana, las líneas conectan cada día y muestran si sube o baja.',
      emoji: '📈'
    },
    {
      termino: 'Gráfico circular',
      definicion: 'Visualización que muestra proporción de cada parte respecto al total. Cada porción de pastel representa un porcentaje del 100%.',
      ejemplo: 'Para ver qué porcentaje de tus egresos fue alimentación vs transporte vs otros, el circular lo muestra como porciones de un pastel.',
      emoji: '🥧'
    },
    {
      termino: 'Honestidad visual',
      definicion: 'Conjunto de principios que aseguran que el gráfico comunica datos como son, no manipulados. Incluye eje Y desde cero, escala consistente, sin 3D engañoso.',
      ejemplo: 'Un gráfico de barras con eje Y empezando en 0 muestra diferencias reales. Si empieza en 50, exagera diferencias pequeñas.',
      emoji: '⚖️'
    },
    {
      termino: 'Eje Y desde cero',
      definicion: 'Principio profesional: en gráficos de barras, el eje vertical debe empezar en cero salvo justificación explícita. De lo contrario, exagera diferencias.',
      ejemplo: 'Si comparas ventas de 100 y 110 con eje desde 95, la barra de 110 parece el doble de grande. Desde 0, se ve la diferencia real (10%).',
      emoji: '0️⃣'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes elegir y leer gráficos honestos?',
      instrucciones: '5 preguntas para verificar que distingues los 3 tipos básicos y reconoces honestidad visual.',
      preguntas: [
        {
          enunciado: '¿Cuál gráfico usas para comparar la cantidad gastada en cada categoría (transporte, alimentación, ocio)?',
          opciones: [
            'Líneas',
            'Barras',
            'Cualquiera funciona igual',
            'Circular si quieres proporciones, barras si quieres comparar valores absolutos'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Si comparas valores absolutos (¿cuál es mayor?), barras. Si comparas proporciones (¿qué % del total?), circular.',
          feedbackIncorrecto: 'Depende: para valores absolutos, barras. Para proporciones del total, circular. La elección importa.'
        },
        {
          enunciado: 'Una publicidad muestra que las tasas de interés bajaron de 19% a 18,5%. El gráfico hace parecer que bajaron a la mitad. ¿Qué truco usan?',
          opciones: [
            'Tipo de gráfico equivocado',
            'Demasiados colores',
            'Eje Y truncado (no empieza en cero)',
            'Sin título'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Si el eje Y empieza en 18, la barra de 18,5 parece el doble de pequeña que la de 19. Desde 0, la diferencia se ve como lo que es: pequeña.',
          feedbackIncorrecto: 'El truco más común es eje Y truncado. Cambiar el origen del eje exagera diferencias pequeñas.'
        },
        {
          enunciado: '¿Para qué tipo de pregunta es ideal el gráfico circular (pastel)?',
          opciones: [
            '¿Qué porcentaje del total representa cada categoría?',
            '¿Cómo cambió la cifra en el tiempo?',
            '¿Cuál es el valor exacto de cada categoría?',
            '¿Cuál es el mínimo y máximo?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Circular responde "¿qué porción del total?". Para evolución temporal usa líneas; para valores exactos usa barras.',
          feedbackIncorrecto: 'El circular es para proporciones del total. Para evolución usa líneas; para comparar valores exactos, barras.'
        },
        {
          enunciado: '¿Cuántas categorías máximo conviene tener en un gráfico circular?',
          opciones: [
            '10-15',
            '3-6',
            'Más de 20',
            'No hay límite'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Con más de 6 categorías el circular se vuelve ilegible. Para muchas categorías, mejor barras horizontales.',
          feedbackIncorrecto: 'Máximo 3-6 categorías en circular. Más de eso, las porciones son demasiado pequeñas para leer bien.'
        },
        {
          enunciado: 'Aplicando la sabiduría del pregonero del mercado, ¿qué hace un gráfico honesto?',
          opciones: [
            'Muestra los datos como son sin trucos',
            'Exagera diferencias para llamar la atención',
            'Usa 3D para verse moderno',
            'Esconde valores incómodos'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. La pesa visible del pregonero es prueba pública de honestidad. El gráfico honesto hace lo mismo: muestra sin manipular.',
          feedbackIncorrecto: 'El gráfico honesto muestra los datos como son. Las otras opciones describen manipulaciones, no honestidad visual.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cada gráfico que produces es una decisión sobre cómo cuentas la verdad. ¿En qué situaciones la elección visual cambia la conclusión que el lector saca?',
    transferencia: 'Esta semana: revisa 3 gráficos en redes o noticias. Identifica si el eje empieza en 0, si tiene fuente, si el tipo es apropiado. Comparte con un compañero los engaños que detectes.',
    cierre: 'El cuento gráfico del abuelo y tu gráfico de Excel comparten propósito: hacer visible lo invisible. Cuidar el medio es cuidar la verdad.'
  },
  saberAncestral: {
    saber: 'En la galería del mercado del centro de Cartago había una imagen que cualquier comprador esperaba ver antes de cerrar una compra: la pesa a la vista. La balanza romana de hierro, vieja y rayada, se colocaba sobre el cajón en posición visible. El pregonero subía el racimo de plátanos al plato, movía el contrapeso, y dejaba que el cliente leyera la cifra antes de declarar el precio. "Cinco kilos justos, vea", decía señalando con el dedo. Esa pesa visible era prueba de honestidad: el cliente miraba con sus propios ojos. Pero también existía la otra pesa: la pesa trucada. Algunos vendedores la modificaban con un trapo bajo el plato, un imán en la base, un contrapeso desbalanceado. La pesa trucada se veía igual a la honesta. La denuncia popular era constante: "ese tendero tiene pesa con malicia", decían las abuelas. La sabiduría del mercado distinguía con precisión entre la pesa que muestra y la pesa que engaña. Esa misma distinción aplica a los gráficos: hay gráficos honestos que muestran y gráficos engañosos que esconden, y elegir entre los dos es decisión ética del oficio.',
    fuente: 'Pictografías y esquemas tradicionales del Valle, los Andes y el Pacífico colombiano',
    preguntaPuente: '¿Qué sabía el comprador del mercado al exigir ver la pesa antes de pagar, que el lector moderno olvida cuando acepta un gráfico de prensa sin mirar el eje Y? ¿Y por qué el mismo conjunto de datos puede contar dos historias opuestas según el tipo de gráfico elegido?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El gráfico engañoso aprovecha a quien menos puede verificarlo; mostrar la pesa visible es ética con quien no tiene tiempo de calcular.',
      preguntaEspejo: '¿Mi gráfico está pensado para que cualquiera lo entienda, o solo lo entiende quien ya conoce los datos?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Muestra las cosas como son; el gráfico engañoso es vanidad disfrazada de comunicación.',
      preguntaEspejo: '¿Mi gráfico muestra los datos como son, o estoy exagerando la diferencia para que se vea más impactante?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La visualización honesta de datos es la nueva ética del oficio digital en la era de la información veloz.',
      preguntaEspejo: 'Si mi gráfico se compartiera en redes sociales sin mi explicación, ¿seguiría siendo honesto?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a elegir el tipo de gráfico según la pregunta — habilidad de comunicador honesto, no decorador de datos.',
    emocional: 'Reconociste la tentación del gráfico vistoso que oculta — y elegiste claridad sobre espectáculo.',
    ciudadana: 'Tu ojo crítico ante gráficos de noticias y publicidad es defensa contra la desinformación visual cotidiana.',
    local: 'Heredaste la lógica de la pictografía ancestral: hacer visible lo invisible con honestidad, no con efecto.',
    intergeneracional: 'El dibujo en arena del pescador y tu gráfico de Excel comparten ética: el medio es responsable de la verdad que comunica.'
  }
};

export default contenido;
