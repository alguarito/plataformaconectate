/**
 * Contenido web del examen final · Grado 11 · Período 1
 *
 * Auto-generado desde content/examenes/11-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 11,
  periodo: 1,
  titulo: 'Examen final · Presencia y marca digital',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Presencia y marca digital',
    instrucciones: 'Practica con 20 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuál de estas frases representa mejor lo que entendimos por "marca personal" en la sesión 1?',
        opciones: [
          'Una logo bonito y un nombre corto',
          'El compromiso visible que firma quien produce un trabajo',
          'Un perfil de Instagram con muchos seguidores',
          'Un currículum bien diseñado'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Marca personal es compromiso visible, no estética. La paleta y el nombre vienen después.',
        feedbackIncorrecto: 'No es la respuesta. Marca personal es compromiso visible que firma tu trabajo. Los elementos visuales son apoyo, no esencia.'
      },
      {
        enunciado: '¿Por qué la coherencia entre paleta, tipografía y lockup importa para una marca personal?',
        opciones: [
          'Porque es obligatorio según las leyes de diseño',
          'Porque permite que la marca se reconozca rápido en cualquier soporte',
          'Porque las herramientas digitales lo exigen',
          'Porque sin eso no se puede tener sitio web'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. El reconocimiento rápido es la función. Sin coherencia, cada soporte se ve como una marca distinta.',
        feedbackIncorrecto: 'La función es el reconocimiento rápido. La coherencia visual hace que tu marca se reconozca en pocos segundos.'
      },
      {
        enunciado: 'Tu sitio personal tiene 5 páginas, pero los visitantes solo ven la home y la de contacto. ¿Qué decisión es más razonable?',
        opciones: [
          'Borrar las otras 3 páginas',
          'Reorganizar la home para que destaque mejor lo que la gente realmente busca',
          'Subir más páginas para tener más contenido',
          'Pagar publicidad para llevar gente a las otras 3'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Las métricas indican qué importa al visitante. Reorganizar la home según eso es la decisión basada en datos.',
        feedbackIncorrecto: 'La decisión basada en datos es reorganizar la home según lo que sí buscan. Borrar o pagar son atajos sin pensar.'
      },
      {
        enunciado: 'Eliges una plantilla web para tu sitio personal. ¿Cuál es el principal riesgo de NO adaptarla?',
        opciones: [
          'Que tarde más en cargar',
          'Que tu sitio se vea idéntico a otros 50.000 sitios que usaron la misma plantilla',
          'Que tenga errores de código',
          'Que sea ilegal usarla'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La plantilla sin adaptar te diluye en la multitud. Adaptarla es lo que la hace "tuya".',
        feedbackIncorrecto: 'El riesgo es perderte en la multitud. Adaptar paleta, tipografía y estructura es lo que diferencia tu sitio.'
      },
      {
        enunciado: 'Usas ChatGPT para escribir el "Sobre mí" de tu sitio. ¿Qué hace que el texto resultante sea profesional?',
        opciones: [
          'Aceptarlo tal como sale en la primera generación',
          'Editarlo, agregar 2-3 detalles personales verificables y borrar todos los clichés',
          'Pegarlo sin cambios pero agregando emojis',
          'Pedirle que use palabras más largas'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La IA es asistente, no autor. Editar + agregar detalles personales + quitar clichés es lo que firma como tuyo el texto.',
        feedbackIncorrecto: 'La IA es asistente, no autor. El texto profesional exige edición humana: agregar tus datos y quitar las frases hechas.'
      },
      {
        enunciado: 'Cuál de estos títulos sigue mejor las prácticas de SEO honesto que vimos en la sesión 6?',
        opciones: [
          'Las 7 técnicas SECRETAS que NADIE te quiere contar sobre programación!!!',
          'Cómo escribí mi primer programa en Python en grado 11 — Conéctate Cartago',
          'Click aquí para no perderte',
          'Lo más viral del momento'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Título específico, con contexto (grado), local (Cartago), sin sensacionalismo. SEO sin engaño.',
        feedbackIncorrecto: 'El SEO honesto es específico y local. Los títulos sensacionalistas funcionan corto plazo y dañan la credibilidad.'
      },
      {
        enunciado: '¿Qué define una foto profesional para tu marca personal?',
        opciones: [
          'Que tenga muchos filtros y efectos',
          'Que sea coherente con tu paleta de marca y muestre tu rostro con calidad técnica básica',
          'Que sea tomada con cámara profesional cara',
          'Que sea blanco y negro siempre'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Coherencia con paleta + claridad técnica básica. La cámara cara no es el factor.',
        feedbackIncorrecto: 'La coherencia con tu paleta y la claridad técnica son los factores. La cámara cara no garantiza foto profesional.'
      },
      {
        enunciado: 'Tu LinkedIn y tu portafolio web tienen mensajes distintos sobre lo que ofreces. ¿Cuál es el problema?',
        opciones: [
          'No hay problema, cada plataforma es distinta',
          'La inconsistencia confunde a quien te lee y debilita tu marca',
          'LinkedIn pesa más que tu sitio personal',
          'Tu sitio personal debería copiar a LinkedIn'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La inconsistencia genera duda en el lector. La coherencia entre canales es lo que sostiene la marca.',
        feedbackIncorrecto: 'El problema es la inconsistencia. Cuando un reclutador te busca en ambos lugares, debe encontrar la misma propuesta.'
      },
      {
        enunciado: '¿Qué métrica te dice mejor si tu sitio personal funciona?',
        opciones: [
          'Cuántos likes tienen tus posts',
          'Cuántos contactos (correos, mensajes, llamadas) generaste desde el sitio',
          'Cuántas visitas totales tuvo en el mes',
          'Cuántas páginas tiene tu sitio'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Los contactos son la conversión real. Las visitas y los likes son vanity metrics si no se traducen en conversación.',
        feedbackIncorrecto: 'La métrica clave es la conversión: cuántos contactos reales se generaron. Las visitas sin conversión son humo.'
      },
      {
        enunciado: 'Estás listo para lanzar tu presencia digital. ¿Cuál es la última verificación antes de hacer público el sitio?',
        opciones: [
          'Que el diseño se vea bien solo en tu computador',
          'Que el sitio cargue rápido en móvil, sea accesible y todos los enlaces funcionen',
          'Que tenga al menos 20 páginas',
          'Que tenga música de fondo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Carga móvil, accesibilidad y enlaces funcionales son la auditoría mínima antes del lanzamiento.',
        feedbackIncorrecto: 'La verificación es técnica: carga móvil, accesibilidad y enlaces. El estudiante en Cartago llega más por celular que por computador.'
      },
      {
        enunciado: '¿Qué oficio ancestral conecta con la marca digital en este periodo?',
        opciones: [
          'El programador de Silicon Valley',
          'El maestro fotógrafo que firmaba cada copia con su sello',
          'El youtuber de los años 2010',
          'El community manager'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El maestro fotógrafo del Valle firmaba como compromiso de oficio, no como decoración.',
        feedbackIncorrecto: 'Es el maestro fotógrafo. Su sello en cada copia era compromiso, no marketing. La marca digital hereda esa lógica.'
      },
      {
        enunciado: '¿Cuál es la "regla de los 3 segundos" en identidad visual?',
        opciones: [
          'El tiempo que tarda una página en cargar',
          'El tiempo que un visitante decide si tu marca le interesa al ver la home',
          'El tiempo entre cada animación',
          'El tiempo de duración de un post'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. 3 segundos para enganchar al visitante. Tu jerarquía visual debe comunicar lo esencial en ese tiempo.',
        feedbackIncorrecto: 'Son 3 segundos para enganchar. La jerarquía visual del primer pliegue es la que decide si el visitante sigue o se va.'
      },
      {
        enunciado: 'Le pides a ChatGPT que escriba tu "Sobre mí" y te devuelve un texto bonito pero genérico. ¿Qué haces?',
        opciones: [
          'Lo pegas tal cual porque suena bien',
          'Lo editas para agregar tu nombre, tu colegio y al menos 2 proyectos concretos',
          'Le pides otra versión hasta que te guste',
          'Le agregas muchos emojis'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Edición humana con detalles verificables es lo que firma tu autoría. La IA es asistente, no autor.',
        feedbackIncorrecto: 'Editar y agregar tus datos específicos es lo que firma como tuyo el texto. Sin eso, suena a cualquiera.'
      },
      {
        enunciado: '¿Qué tienen en común las palabras clave que rankean bien sin clickbait?',
        opciones: [
          'Son largas y suenan importantes',
          'Describen exactamente lo que ofreces, en el idioma de quien busca',
          'Son palabras en inglés',
          'Llevan signos de exclamación'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Especificidad y lenguaje del usuario. "Ilustraciones cartago" rankea para tu mercado real.',
        feedbackIncorrecto: 'Especificidad y lenguaje del usuario. SEO honesto coincide con lo que la gente realmente escribe al buscar.'
      },
      {
        enunciado: 'Vas a usar la misma foto de perfil en LinkedIn, tu sitio web y tu portafolio. ¿Es buena idea?',
        opciones: [
          'No, cada plataforma debe tener una distinta',
          'Sí, refuerza el reconocimiento de tu marca',
          'Solo si la foto es muy seria',
          'Solo si es en blanco y negro'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Repetir la misma foto refuerza tu reconocimiento. Es lo mismo que el sello del fotógrafo en cada copia.',
        feedbackIncorrecto: 'Repetir la foto refuerza el reconocimiento. La consistencia visual hace que tu marca se grabe más rápido en quien te ve.'
      },
      {
        enunciado: '¿Cuál es la primera sección que un reclutador suele leer en tu LinkedIn?',
        opciones: [
          'Las recomendaciones',
          'El titular (headline) y el resumen (about)',
          'Las publicaciones',
          'Los grupos a los que perteneces'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Headline + About es el primer pliegue. Si no engancha ahí, no scrollea más.',
        feedbackIncorrecto: 'Headline y About son lo que se lee primero. Ahí concentras la jerarquía visual: nombre, oficio, propuesta.'
      },
      {
        enunciado: 'Tu sitio tiene 500 visitas/mes pero 0 contactos. ¿Cuál es la hipótesis más razonable?',
        opciones: [
          'Las visitas son falsas, deberías comprar un dominio nuevo',
          'La CTA (llamada a la acción) no es visible o no genera confianza',
          'Necesitas más visitas',
          'Necesitas redes sociales'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El problema está en la conversión, no en la cantidad de tráfico. Auditar la CTA es lo siguiente.',
        feedbackIncorrecto: 'Si hay tráfico pero no conversión, la CTA es el sospechoso. Más visitas sin arreglar eso solo amplifica el problema.'
      },
      {
        enunciado: 'Después de lanzar tu presencia digital, ¿cuál es el siguiente paso responsable?',
        opciones: [
          'Olvidarte del sitio y enfocarte en redes sociales',
          'Establecer una rutina mensual de revisión: métricas, errores, actualización de contenido',
          'Pedir a tus amigos que pongan likes',
          'Cambiar el diseño cada mes'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Rutina de mantenimiento es lo que distingue marca personal sostenible de lanzamiento que se olvida.',
        feedbackIncorrecto: 'La rutina de revisión sostiene la marca. Sin ella, el sitio queda como tarea escolar olvidada.'
      },
      {
        enunciado: 'Un prompt profesional para que ChatGPT escriba tu copy debe incluir...',
        opciones: [
          'Solo la tarea: \'escríbeme un sobre mí\'',
          'Rol + contexto + tarea + formato + restricciones',
          'Solo el saludo',
          'Solo emojis para que sea creativo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Las 5 partes del prompt profesional son lo que diferencia copia automática de asistencia editorial real.',
        feedbackIncorrecto: 'Las 5 partes (rol, contexto, tarea, formato, restricciones) hacen la diferencia. Sin ellas, la IA genera texto genérico.'
      },
      {
        enunciado: 'Estás eligiendo la paleta de colores para tu marca personal. ¿Qué criterio sigue mejor lo aprendido?',
        opciones: [
          'Los colores que están de moda este año',
          'Colores que dialoguen con tu oficio y soporten contraste WCAG AA para accesibilidad',
          'Los colores que más te gustan personalmente',
          'Los colores de tu equipo de fútbol'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Diálogo con el oficio + accesibilidad WCAG AA. La moda pasa, la accesibilidad es respeto por el lector.',
        feedbackIncorrecto: 'El criterio profesional es: diálogo con tu oficio + accesibilidad. Las preferencias personales son secundarias.'
      }
    ]
  }
};

export default contenido;
