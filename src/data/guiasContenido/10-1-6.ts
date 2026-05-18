/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 6
 * (sesión global 6).
 *
 * Auto-generado desde content/guias/10/10-1-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 6,
  titulo: 'Derechos de autor y propiedad intelectual con IA — Ley 23 de 1982 y obras derivadas',
  resumen: 'En Colombia, los derechos de autor están regulados por la Ley 23 de 1982 y la Decisión Andina 351 de 1993.',
  duracionMin: 90,
  subtema: 'Derechos de autor y propiedad intelectual con IA — Ley 23 de 1982 y obras derivadas',
  preLectura: {
    porQueImporta: 'El criterio principal: que tu ficha de derechos pueda ser revisada por un abogado y resista el examen legal y ético.',
    preguntaDetonante: '¿Qué sabía la artesana wayuu al firmar su mochila con patrón propio, que el usuario novato de IA olvida cuando publica un texto generado sin declarar? ¿Y por qué los derechos morales son intransferibles aunque vendas todos los derechos patrimoniales del libro?',
    activacion: {
      titulo: 'Un libro y sus derechos',
      descripcion: 'Actividad 1 · IDENTIFICA — Un libro y sus derechos (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy aseguras la dimensión legal y ética del libro.',
      siguiente: 'Llega con tu ficha de derechos completa y los 3 casos analizados.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ley 23 de 1982',
      definicion: 'Ley colombiana que regula los derechos de autor. Distingue derechos morales (perpetuos) y patrimoniales (negociables).',
      ejemplo: 'Cuando publicas tu libro, los derechos morales son tuyos siempre. Los patrimoniales puedes ceder a una editorial.',
      emoji: '📜'
    },
    {
      termino: 'Derechos morales',
      definicion: 'Intransferibles y perpetuos. Incluyen ser reconocido como autor, preservar integridad de la obra, decidir si publicar.',
      ejemplo: 'Aunque vendas todos los derechos patrimoniales, sigues siendo autor reconocido del libro.',
      emoji: '🪪'
    },
    {
      termino: 'Derechos patrimoniales',
      definicion: 'Transferibles y negociables. Incluyen reproducir, distribuir, traducir, adaptar y cobrar regalías.',
      ejemplo: 'Una editorial te paga por imprimir y vender tu libro: estás cediendo derechos patrimoniales, no morales.',
      emoji: '💼'
    },
    {
      termino: 'IA y autoría',
      definicion: 'El modelo de IA no tiene derechos de autor. Si tu intervención editorial es sustancial, la obra es tuya con declaración honesta.',
      ejemplo: 'Tu libro con 30% de intervención humana directa y declaración de uso de IA es obra tuya bajo el marco actual.',
      emoji: '🤖'
    },
    {
      termino: 'Licencia Creative Commons',
      definicion: 'Alternativa a "todos los derechos reservados". Permite compartir bajo condiciones (atribución, no comercial, sin derivadas, compartir igual).',
      ejemplo: 'CC BY-NC-SA permite que otros usen tu libro citándote, sin fines comerciales y compartiéndolo bajo la misma licencia.',
      emoji: '🔓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces los derechos del autor con IA?',
      instrucciones: '5 preguntas para verificar que distingues derechos morales, patrimoniales y licencias.',
      preguntas: [
        {
          enunciado: '¿Cuál es la ley colombiana que regula los derechos de autor?',
          opciones: [
            'Ley 100 de 1993',
            'Ley 23 de 1982',
            'Ley 30 de 1992',
            'Ley 1581 de 2012'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Ley 23 de 1982, complementada por la Decisión Andina 351 de 1993.',
          feedbackIncorrecto: 'Es la Ley 23 de 1982. Es marco principal de derechos de autor en Colombia.'
        },
        {
          enunciado: 'Los derechos morales son...',
          opciones: [
            'Transferibles y temporales',
            'Intransferibles y perpetuos',
            'Solo para mayores de edad',
            'Nunca se reconocen'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Intransferibles y perpetuos. Nunca dejan de ser tuyos aunque vendas todo lo demás.',
          feedbackIncorrecto: 'Son intransferibles y perpetuos. No se pueden ceder ni se acaban con el tiempo.'
        },
        {
          enunciado: 'La IA generativa, ¿tiene derechos de autor?',
          opciones: [
            'Sí, son del modelo',
            'No, el modelo no es persona jurídica',
            'Sí, son de la empresa creadora',
            'Depende del país'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El modelo no tiene personalidad jurídica, así que no puede tener derechos de autor.',
          feedbackIncorrecto: 'La IA no tiene derechos de autor: no es persona jurídica.'
        },
        {
          enunciado: 'Si usas IA con intervención editorial sustancial, ¿de quién es la obra?',
          opciones: [
            'De la IA',
            'Tuya con declaración honesta del uso de IA',
            'De OpenAI',
            'De nadie'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Bajo el marco actual, con intervención sustancial y declaración honesta, la obra es tuya.',
          feedbackIncorrecto: 'La obra es tuya con declaración honesta. La intervención humana sustancial es lo que sostiene la autoría.'
        },
        {
          enunciado: '¿Qué permite una licencia Creative Commons (CC)?',
          opciones: [
            'Bloquear todo uso',
            'Compartir la obra bajo condiciones específicas (atribución, no comercial, etc.)',
            'Solo vender la obra',
            'Eliminar al autor'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. CC permite compartir bajo condiciones claras, alternativa a "todos los derechos reservados".',
          feedbackIncorrecto: 'Permite compartir bajo condiciones (atribución, no comercial, sin derivadas, compartir igual).'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi ficha declara con honestidad el uso de IA, o intento ocultarlo por miedo o costumbre?',
    transferencia: 'Llega con tu ficha de derechos completa y los 3 casos analizados.',
    cierre: 'Al terminar podrás: (1) identificar la diferencia entre derechos morales y derechos patrimoniales aplicada a tu libro; (2) analizar 3 casos reales de polémica IA-derechos de los últimos 2 años para entender el panorama actual; (3) evaluar qué licencia te conviene (Creative Common…'
  },
  saberAncestral: {
    saber: 'En los talleres de cestería del Pacífico, en los mercados artesanales de Pasto y Popayán, en los puestos de cerámica de Pijao, hay una práctica que cualquier cliente reconoce: el artesano firma su pieza con marca distintiva. La firma es declaración de autoría y responsabilidad. En la cestería de iraca del Cauca, cada artesana tiene un nudo característico al cierre. En la cerámica del Quindío, el alfarero deja marca con uña en la base. En las mochilas wayuu, cada tejedora tiene patrones que la identifican. Esa firma tiene dos efectos al mismo tiempo: (1) Derecho moral: declarar que esa pieza fue hecha por esa persona. Es intransferible: aunque la vendas, sigue siendo tu pieza en autoría. (2) Derecho patrimonial: la pieza se puede vender, transferir, ceder. Es negociable: el comprador adquiere la pieza pero no el derecho a decir "yo la hice". La sabiduría del oficio distingue ambos derechos con claridad. La Ley 23 de 1982 traduce esa distinción a lenguaje legal moderno, y se aplica también a libros generados con IA.',
    preguntaPuente: '¿Qué sabía la artesana wayuu al firmar su mochila con patrón propio, que el usuario novato de IA olvida cuando publica un texto generado sin declarar? ¿Y por qué los derechos morales son intransferibles aunque vendas todos los derechos patrimoniales del libro?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Declarar autoría con honestidad en la era de la IA es acto de dignidad cultural y profesional.',
      preguntaEspejo: '¿Mi ficha declara con honestidad el uso de IA, o intento ocultarlo por miedo o costumbre?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La firma honesta es virtud del oficio; la firma engañosa es vicio que se descubre con el tiempo.',
      preguntaEspejo: '¿Estoy firmando con honestidad sobre cómo se hizo el libro, o quiero parecer más autor de lo que fui?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La transparencia editorial es la nueva ética en la era de la IA generativa; ocultar uso es fraude moderno disfrazado de autoría tradicional.',
      preguntaEspejo: '¿Mi ficha contribuye a la transparencia editorial contemporánea, o sostiene la opacidad heredada del modelo pre-IA?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar la diferencia entre derechos morales y derechos patrimoniales aplicada a tu libro; (2) analizar 3 casos reales de polémica IA-derechos de los últimos 2 años para en…',
    emocional: 'Es tentador firmar un libro como "escrito por mí" cuando la IA generó la mitad.',
    ciudadana: 'Cuando declaras explícitamente que usaste IA en tu libro, no estás debilitando tu autoría: la estás fortaleciendo con honestidad.',
    local: 'Antes de cerrar, mira los derechos desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, la transparencia sobre el uso de herramientas es la nueva norma ética profesional.'
  }
};

export default contenido;
