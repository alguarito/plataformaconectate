/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/10/10-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 5,
  titulo: 'Estructura editorial — arco narrativo, ritmo y capítulos',
  resumen: 'La estructura editorial es el plano del libro: cómo se ordena el contenido, qué peso tiene cada parte, qué papel cumple cada capítulo en el todo.',
  duracionMin: 90,
  subtema: 'Estructura editorial — arco narrativo, ritmo y capítulos',
  preLectura: {
    porQueImporta: 'El criterio principal: que alguien viendo tu mapa pueda decir "sí, este libro está bien planeado", sin haber leído ningún capítulo.',
    preguntaDetonante: '¿Qué sabía el arquitecto del barrio al dibujar el plano antes de pedir ladrillos, que el editor novato olvida cuando empieza a escribir capítulos sin haber pensado el arco completo? ¿Y por qué los 3 capítulos pivote merecen más cuidado que los demás?',
    activacion: {
      titulo: 'Auditoría rápida de tu escaleta',
      descripcion: 'Actividad 1 · ANALIZA — Auditoría rápida de tu escaleta (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 2 hiciste escaleta preliminar; en la 3 escribiste prompts; en la 4 iteraste el capítulo 1.',
      siguiente: 'En la sesión 6 vas a aprender sobre derechos de autor y propiedad intelectual con IA (Ley 23 de 1982, obras derivadas, licencias Creative Commons).'
    }
  },
  conceptosClave: [
    {
      termino: 'Arco narrativo de 3 actos',
      definicion: 'Estructura heredada de Aristóteles. Acto 1 planteamiento (25%), Acto 2 desarrollo (50%), Acto 3 cierre (25%).',
      ejemplo: 'En 80 páginas, planteamiento 20, desarrollo 40, cierre 20. La proporción sostiene el ritmo del lector.',
      emoji: '🎭'
    },
    {
      termino: 'Acto 1 — Planteamiento',
      definicion: 'Primer 25% del libro. Presenta tema, personajes o conceptos clave y el conflicto o pregunta central.',
      ejemplo: 'En el libro de amistades digitales, el acto 1 muestra al protagonista y su distancia con el amigo de la infancia.',
      emoji: '🌱'
    },
    {
      termino: 'Acto 2 — Desarrollo',
      definicion: '50% del libro. Profundiza, complica, propone. Zona más larga; aquí está la mayor responsabilidad del libro.',
      ejemplo: 'El protagonista intenta retomar la amistad por chat, fracasa, prueba videollamada, fracasa, entiende algo.',
      emoji: '🌳'
    },
    {
      termino: 'Acto 3 — Cierre',
      definicion: 'Últimos 25% del libro. Resuelve, concluye, propone. No necesita final cerrado; sí marca clara.',
      ejemplo: 'El protagonista decide visitar al amigo en persona. No sabemos qué pasará, pero el lector queda con claridad.',
      emoji: '🌲'
    },
    {
      termino: 'Capítulos pivote',
      definicion: 'Tres capítulos críticos: primero (engancha o pierde), mitad (sostiene o pierde), último (cierra o decepciona).',
      ejemplo: 'Los reescribes más veces que los demás. Si esos 3 funcionan, el libro funciona.',
      emoji: '📍'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Diseñas estructura editorial profesional?',
      instrucciones: '5 preguntas para verificar que dominas el arco narrativo de 3 actos.',
      preguntas: [
        {
          enunciado: '¿Qué porcentaje del libro ocupa el Acto 2 (desarrollo)?',
          opciones: [
            '10%',
            '25%',
            '90%',
            '50%'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. El Acto 2 ocupa el 50%. Es la zona más larga del libro y la de mayor responsabilidad.',
          feedbackIncorrecto: 'Son 50%. El desarrollo es la zona más larga; ahí se juega la mayor parte de la obra.'
        },
        {
          enunciado: '¿Cuántos capítulos pivote tiene un libro bien estructurado?',
          opciones: [
            '1',
            '10',
            '3',
            '30'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. 3 pivotes: primero, mitad y último. Merecen más reescritura que los demás.',
          feedbackIncorrecto: 'Son 3: el primero, el de la mitad y el último. Si esos funcionan, el libro funciona.'
        },
        {
          enunciado: '¿De dónde viene la estructura de 3 actos?',
          opciones: [
            'De TikTok',
            'De Aristóteles',
            'De Microsoft Word',
            'De los algoritmos'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Es estructura clásica que Aristóteles describió y sigue vigente.',
          feedbackIncorrecto: 'Viene de Aristóteles. Es estructura clásica con vigencia hasta hoy en literatura y cine.'
        },
        {
          enunciado: '¿Qué pasa si todos los capítulos pesan lo mismo?',
          opciones: [
            'Pierde ritmo y peso editorial',
            'El libro está perfecto',
            'Es más fácil de leer',
            'No tiene consecuencias'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Pesos iguales aplanan el ritmo. La estructura profesional asigna pesos según función.',
          feedbackIncorrecto: 'Pierde ritmo. Pesos iguales aplanan; la estructura profesional asigna pesos según función de cada capítulo.'
        },
        {
          enunciado: 'El último capítulo de un libro bien diseñado...',
          opciones: [
            'Tiene que dar un final feliz cerrado',
            'Es opcional',
            'Cierra o deja inconforme; merece ser pivote y reescribirse más',
            'Se copia del primero'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. El último es pivote. Cierra o decepciona; por eso pide más reescritura.',
          feedbackIncorrecto: 'Es pivote. Cierra o decepciona al lector, por eso merece más cuidado y reescritura.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi estructura ordena el camino del lector, o lo desordena con saltos sin propósito?',
    transferencia: 'En la sesión 6 vas a aprender sobre derechos de autor y propiedad intelectual con IA (Ley 23 de 1982, obras derivadas, licencias Creative Commons).',
    cierre: 'Al terminar podrás: (1) analizar la escaleta de la sesión 2 contra el arco narrativo en 3 actos, identificando si tu planteamiento es muy largo, tu desarrollo muy corto o tu cierre muy débil; (2) explicar con tus palabras por qué los 3 capítulos pivote requieren más trabajo que l…'
  },
  saberAncestral: {
    saber: 'En cualquier barrio del Valle del Cauca, cuando una familia decide construir su casa, el primer paso nunca es comprar ladrillos. El primer paso es ir donde el arquitecto del barrio (a veces un maestro de obra experimentado, a veces alguien con título formal). El arquitecto saca papel y lápiz, escucha a la familia ("somos 4, queremos 3 cuartos, una sala grande y un patio"), pregunta por el terreno, mira el sol, dibuja. Lo que dibuja es el plano: dónde van las puertas para que se abran cómodas, dónde las ventanas para que entre luz al cuarto correcto, qué tan grande el patio para que no se ahogue la casa, qué pendiente del techo para que el agua corra. Solo después de aprobar el plano, la familia pide los ladrillos. Si la familia se salta el plano y empieza a poner ladrillos por entusiasmo, pasa lo conocido: la casa queda con cuartos oscuros, puertas que pegan, escaleras peligrosas, presupuesto desbordado. La sabiduría del barrio es ancestral y simple: ningún edificio bueno se levanta sin plano previo. Un libro es un edificio de palabras. La estructura editorial es ese plano antes de poner los capítulos.',
    preguntaPuente: '¿Qué sabía el arquitecto del barrio al dibujar el plano antes de pedir ladrillos, que el editor novato olvida cuando empieza a escribir capítulos sin haber pensado el arco completo? ¿Y por qué los 3 capítulos pivote merecen más cuidado que los demás?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un libro bien estructurado ordena el pensamiento del lector; uno mal estructurado lo desordena y desperdicia su atención.',
      preguntaEspejo: '¿Mi estructura ordena el camino del lector, o lo desordena con saltos sin propósito?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El plan previo es disciplina; la improvisación editorial es vanidad disfrazada de espontaneidad.',
      preguntaEspejo: '¿Estoy cerrando la estructura antes de seguir escribiendo, o voy improvisando capítulos?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La estructura clara es ética del editor en la era del contenido infinito.',
      preguntaEspejo: '¿Mi estructura merece el tiempo del lector, o pide más atención de la que devuelve?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar la escaleta de la sesión 2 contra el arco narrativo en 3 actos, identificando si tu planteamiento es muy largo, tu desarrollo muy corto o tu cierre muy débil; (2) expl…',
    emocional: 'Es tentador empezar a escribir capítulos sin haber cerrado la estructura, con el argumento de "ya iré viendo".',
    ciudadana: 'La estructura editorial no es trámite: es respeto cognitivo por el lector.',
    local: 'Antes de cerrar, mira la estructura desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los lectores tienen miles de libros disponibles.'
  }
};

export default contenido;
