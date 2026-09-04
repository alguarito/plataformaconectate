/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/10/10-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 2,
  titulo: 'Concebir tu libro — género, tema, audiencia y escaleta',
  resumen: 'La concepción editorial es la etapa donde se toman las decisiones que sostendrán toda la producción del libro.',
  duracionMin: 90,
  subtema: 'Concebir tu libro — género, tema, audiencia y escaleta',
  preLectura: {
    porQueImporta: 'El criterio principal: que un compañero leyendo tu ficha pueda imaginar el libro completo y decir "sí, lo leería" o "no me interesa" con honestidad.',
    preguntaDetonante: '¿Qué sabía el cuentista del fogón en esos 30 segundos de silencio antes de hablar, que el novato olvida cuando le pide a ChatGPT "escríbeme un libro\\" sin haber decidido género, audiencia ni propósito? ¿Y por qué la escaleta de 10 capítulos vale más como punto de partida que un primer capítulo improvisado?',
    activacion: {
      titulo: 'Lluvia personal de 5 temas',
      descripcion: 'Actividad 1 · IDENTIFICA — Lluvia personal de 5 temas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces la concepción editorial de tu libro: las decisiones que sostendrán las 8 sesiones siguientes (prompting, iteración, derechos, portada, diagramación, producción, sustentación).',
      siguiente: 'Llega con tu ficha editorial completa y la escaleta de 8-12 capítulos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Género específico',
      definicion: 'Categoría narrativa precisa. No "ficción", sino "novela juvenil de aventura" o "manual práctico paso a paso". Cuanto más específico, mejor.',
      ejemplo: '"Libro de cuentos cortos de terror urbano" guía toda la producción: tono, estructura, audiencia, ritmo.',
      emoji: '📚'
    },
    {
      termino: 'Tema',
      definicion: 'Pregunta o problema central del libro, formulado en 1-2 frases. Da unidad a toda la obra.',
      ejemplo: '"El libro explora cómo los jóvenes del Valle hacen amistades profundas en la era de los celulares."',
      emoji: '❓'
    },
    {
      termino: 'Audiencia',
      definicion: 'Edad concreta + contexto cultural + nivel de conocimiento previo del lector ideal. Define el tono y los ejemplos.',
      ejemplo: '"Estudiantes de bachillerato del Valle que juegan videojuegos pero no programan."',
      emoji: '🎯'
    },
    {
      termino: 'Propósito',
      definicion: 'Qué quieres lograr con el lector: entretener, enseñar, generar conversación, denunciar. Sin propósito, el libro es ruido.',
      ejemplo: '"Quiero que el lector se ría y, al final, llame al amigo que lleva tiempo sin ver." Propósito claro.',
      emoji: '🎬'
    },
    {
      termino: 'Escaleta',
      definicion: 'Lista preliminar de capítulos con tema y peso aproximado de cada uno. El libro empieza a escribirse aquí.',
      ejemplo: 'Cap. 1 (10 págs.) "El primer chat", Cap. 2 (8 págs.) "La distancia que no se ve"... Mapa antes de escribir.',
      emoji: '🗺️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Concebiste tu libro como editor profesional?',
      instrucciones: '5 preguntas para verificar que cerraste las 4 piezas clave.',
      preguntas: [
        {
          enunciado: '¿Cuáles son las 4 piezas obligatorias de la concepción editorial?',
          opciones: [
            'Título, autor, fecha, precio',
            'Solo el género',
            'Género específico, tema, audiencia y propósito',
            'Solo el título'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Género específico, tema, audiencia y propósito. Sin las 4 cerradas, la producción se desordena.',
          feedbackIncorrecto: 'Son género específico, tema, audiencia y propósito. Las 4 sostienen toda la producción posterior.'
        },
        {
          enunciado: '¿Cuál de estas formulaciones de género es la más profesional?',
          opciones: [
            'Manual práctico paso a paso de cocina vallecaucana para jóvenes',
            'Ficción',
            'Cosas',
            'Libro de letras'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Cuanto más específico el género, mejor guía la producción.',
          feedbackIncorrecto: 'La más específica es la profesional. "Ficción" es demasiado amplio para guiar decisiones.'
        },
        {
          enunciado: '¿Qué pieza falta si solo defines "audiencia adolescente"?',
          opciones: [
            'Nada, está completo',
            'Solo el precio',
            'Solo el título',
            'Edad concreta + contexto cultural + nivel de conocimiento previo'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. La audiencia profesional incluye edad concreta, contexto y conocimiento previo. "Adolescente" es vago.',
          feedbackIncorrecto: 'Falta edad concreta, contexto cultural y nivel previo. Sin esos detalles, el tono y los ejemplos son ciegos.'
        },
        {
          enunciado: 'La regla "el libro empieza a escribirse en la escaleta" significa que...',
          opciones: [
            'Hay que escribir muy rápido',
            'Las decisiones estructurales se toman antes de escribir el capítulo 1',
            'La escaleta es opcional',
            'El libro se escribe en orden alfabético'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La escaleta define peso, orden y función de cada capítulo antes de poner una palabra.',
          feedbackIncorrecto: 'Significa que las decisiones estructurales se toman antes de redactar. Sin escaleta, el libro se construye al azar.'
        },
        {
          enunciado: '¿Cuántos capítulos suele tener un libro de 80 páginas?',
          opciones: [
            '1',
            '8-12',
            '100',
            '1000'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 8-12 capítulos para 80 páginas, cada uno con peso asignado según su función en el arco.',
          feedbackIncorrecto: 'Son 8-12 capítulos. Más fragmenta sin razón; menos hace capítulos demasiado largos.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi libro amplifica una voz que falta, o repite contenido que ya está saturado en redes y librerías?',
    transferencia: 'Llega con tu ficha editorial completa y la escaleta de 8-12 capítulos.',
    cierre: 'Al terminar podrás: (1) identificar qué género se ajusta mejor a la idea de libro que quieres hacer y por qué; (2) analizar a tu audiencia concreta con edad, contexto y conocimiento previo asumido; (3) crear la ficha editorial completa con los 5 campos + escaleta de 8-12 capítulo…'
  },
  saberAncestral: {
    saber: 'En las noches de fogón del Pacífico colombiano y en los corredores de las casas de los abuelos del Valle, había una práctica silenciosa que cualquier nieto reconoce: el cuentista nunca empezaba a hablar sin saber qué historia iba a contar. Antes de la primera palabra, el cuentista tomaba 30 segundos de silencio y decidía tres cosas en su cabeza: (1) Qué tipo de historia: ¿una de susto?, ¿una de animales?, ¿una de aventura del pueblo?, ¿una para enseñar lección? La elección del género determinaba todo lo demás. (2) Para quién: si los nietos eran chiquitos, el cuento era distinto que si eran adolescentes; si había abuelos sentados, otra cosa. La elección de la audiencia ajustaba el tono. (3) Para qué: ¿quería entretener, asustar, enseñar, hacer reír, hacer pensar? El propósito marcaba el cierre. Solo después de esas 3 decisiones invisibles, el cuentista abría la boca. Si saltaba esos 30 segundos, el cuento salía confuso, sin rumbo, sin gracia. La sabiduría era ancestral y precisa: toda historia exige concepción previa, no improvisación. Esa práctica del cuentista del fogón es exactamente la concepción editorial que tu libro de 80 páginas exige hoy.',
    preguntaPuente: '¿Qué sabía el cuentista del fogón en esos 30 segundos de silencio antes de hablar, que el novato olvida cuando le pide a ChatGPT "escríbeme un libro\\" sin haber decidido género, audiencia ni propósito? ¿Y por qué la escaleta de 10 capítulos vale más como punto de partida que un primer capítulo improvisado?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un libro que da voz a quien no la tiene es liberador; uno que repite voces ya amplificadas reproduce el centro hegemónico.',
      preguntaEspejo: '¿Mi libro amplifica una voz que falta, o repite contenido que ya está saturado en redes y librerías?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Elegir bien el tema es virtud editorial; intentar abarcar todo es debilidad disfrazada de ambición.',
      preguntaEspejo: '¿Mi tema es del tamaño que puedo profundizar en 80 páginas, o estoy intentando abarcar más de lo que puedo sostener?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Concebir un libro con propósito declarado es acto editorial ético en la era de la producción acelerada de contenido.',
      preguntaEspejo: '¿Mi libro tiene propósito declarado que justifica su existencia, o solo va a sumar páginas al exceso ya existente?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar qué género se ajusta mejor a la idea de libro que quieres hacer y por qué; (2) analizar a tu audiencia concreta con edad, contexto y conocimiento previo asumido; (3…',
    emocional: 'Es tentador elegir un tema enorme ("la juventud colombiana hoy") creyendo que más grande es más importante.',
    ciudadana: 'Tu elección de tema puede tener dos rumbos: (a) seguir la inercia del contenido que ya circula (otra novela juvenil distópica, otro manual de productividad genérico), o (b) abrir espacio a una voz, co…',
    local: 'Antes de cerrar, mira la concepción desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, miles de libros se producen automáticamente con propósito vago o sin propósito.'
  }
};

export default contenido;
