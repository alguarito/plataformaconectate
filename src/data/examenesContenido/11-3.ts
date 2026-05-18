/**
 * Contenido web del examen final · Grado 11 · Período 3
 *
 * Auto-generado desde content/examenes/11-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 11,
  periodo: 3,
  titulo: 'Examen final · Proyecto emprendedor de cierre del bachillerato',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Proyecto emprendedor de cierre del bachillerato',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué tipo de problema sirve mejor como punto de partida para un proyecto emprendedor de cierre?',
        opciones: [
          'Un problema general del mundo, como el cambio climático',
          'Un problema real, concreto, verificable, de tu comunidad cercana',
          'Un problema interesante que viste en TikTok',
          'Cualquier problema, no importa la escala'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Problema real, concreto, verificable y cercano. Solo así puedes validar y construir un MVP útil.',
        feedbackIncorrecto: 'El problema debe ser real, concreto, verificable y cercano. Los temas generales no permiten validación con personas reales.'
      },
      {
        enunciado: '¿Qué significa "validar" en el contexto de Lean Startup?',
        opciones: [
          'Pedir aprobación a tus profesores',
          'Hablar con los afectados por el problema antes de construir, para verificar si lo que crees es real',
          'Comprar el dominio web',
          'Hacer publicidad en redes sociales'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Validar es escuchar a quienes viven el problema, antes de gastar tiempo o dinero construyendo.',
        feedbackIncorrecto: 'Validar es escuchar a los afectados antes de construir. Es lo que diferencia un proyecto serio de una ocurrencia personal.'
      },
      {
        enunciado: 'El Business Model Canvas tiene 9 bloques. ¿Cuál es el bloque central?',
        opciones: [
          'Costos',
          'Propuesta de valor',
          'Canales',
          'Socios'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La propuesta de valor es el centro: qué problema resuelves para quién.',
        feedbackIncorrecto: 'La propuesta de valor es el centro del Canvas. Define qué resuelves y para quién; todo lo demás se ajusta a eso.'
      },
      {
        enunciado: '¿Qué define un MVP (Producto Mínimo Viable)?',
        opciones: [
          'Un producto perfecto con todas las funciones',
          'La versión más pequeña que prueba la hipótesis principal del proyecto con usuarios reales',
          'Un prototipo en PowerPoint',
          'El proyecto terminado al 100%'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. El MVP es la versión imperfecta pero usable que permite aprender. No es el producto final.',
        feedbackIncorrecto: 'El MVP es la versión más pequeña que prueba la hipótesis con usuarios reales. Es instrumento de aprendizaje, no producto final.'
      },
      {
        enunciado: 'Lanzaste tu MVP. ¿Qué datos importan MÁS?',
        opciones: [
          'Cuántos likes recibió la publicación',
          'Cuántos usuarios reales lo usaron, cuántos volvieron, qué dijeron al probarlo',
          'El color del logo',
          'El número de seguidores en redes sociales'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Uso real, retención, feedback cualitativo. Los likes son vanity metrics que no enseñan nada.',
        feedbackIncorrecto: 'Uso real, retención y feedback cualitativo. Los likes y seguidores son vanity metrics que no informan decisiones.'
      },
      {
        enunciado: 'Un pitch profesional de 3 minutos debe incluir...',
        opciones: [
          'Todas las funcionalidades técnicas en detalle',
          'Problema + solución + evidencia + plan + pedido concreto',
          'Solo la historia personal del fundador',
          'Una lista de tus referentes intelectuales'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Problema, solución, evidencia, plan y pedido. La estructura es lo que mantiene la atención del que escucha.',
        feedbackIncorrecto: 'Estructura: problema + solución + evidencia + plan + pedido. Sin esa anatomía, el pitch se dispersa.'
      },
      {
        enunciado: 'Estás armando el presupuesto de tu proyecto. ¿Cuál de estos costos NO debe ir en el presupuesto inicial?',
        opciones: [
          'Servidor y dominio web',
          'Sueldos del primer tutor que contratas',
          'Una oficina física con escritorio cuando aún no la necesitas',
          'Pruebas de usabilidad con usuarios reales'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Correcto. La oficina física es gasto fijo prematuro. Los emprendedores serios empiezan con lo mínimo necesario.',
        feedbackIncorrecto: 'La oficina física antes de necesitarla es gasto fijo prematuro. Lean es empezar con lo mínimo y crecer con la evidencia.'
      },
      {
        enunciado: '¿Qué exige la ética digital del emprendedor en cuanto a datos de usuarios?',
        opciones: [
          'Recolectar todos los datos posibles para uso futuro',
          'Recolectar solo los datos necesarios para el servicio, informar al usuario y proteger la información',
          'Vender los datos a la mejor oferta',
          'Esconder qué datos se recolectan'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Mínima recolección, transparencia y protección. Es la base de la ética digital y de la ley colombiana (1581/2012).',
        feedbackIncorrecto: 'Mínima recolección, transparencia y protección. La ley colombiana y la ética profesional lo exigen.'
      },
      {
        enunciado: 'Después del MVP inicial, ¿qué prioriza tu versión 2.0?',
        opciones: [
          'Las funcionalidades que crees que son geniales',
          'Las mejoras que pidieron los usuarios reales y que tus datos respaldan',
          'Cambiar el diseño completamente',
          'Empezar de cero porque el MVP es feo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La v2.0 se construye con datos del MVP + voz de los usuarios. No es expresión de gustos personales.',
        feedbackIncorrecto: 'Mejoras pedidas por usuarios reales y respaldadas por datos. La v2 no es ocurrencia, es continuación informada.'
      },
      {
        enunciado: 'Vas a sustentar tu proyecto frente a la comunidad. ¿Cuál es la propiedad MÁS importante de tu sustentación?',
        opciones: [
          'Que sea muy creativa visualmente',
          'Que sea honesta sobre qué funcionó, qué falló y qué aprendiste',
          'Que prometa resultados grandes',
          'Que sea más larga que la de tus compañeros'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Honestidad sobre el proceso. La sustentación profesional cuenta los aciertos y los fallos con la misma claridad.',
        feedbackIncorrecto: 'Honestidad: qué funcionó, qué falló, qué aprendiste. La sustentación seria construye confianza al reconocer también los errores.'
      },
      {
        enunciado: '¿Qué oficio ancestral conecta con la ideación basada en problemas reales?',
        opciones: [
          'El comerciante de plaza',
          'El fundador de la junta de acción comunal con su libreta',
          'El profesor de matemáticas',
          'El conductor de bus'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El fundador comunal escuchaba antes de proponer. Iba con datos, no con opinión personal.',
        feedbackIncorrecto: 'El fundador de la junta de acción comunal. Su libreta con la voz de los vecinos era validación antes del software.'
      },
      {
        enunciado: '¿Cuántas personas mínimo se entrevistan para una validación inicial seria?',
        opciones: [
          '1-2 personas',
          '5-10 personas que vivan el problema directamente',
          '100+ personas para que sea estadístico',
          'Solo a tu familia'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 5-10 entrevistas profundas con quien vive el problema dan más insights que 100 encuestas superficiales.',
        feedbackIncorrecto: '5-10 entrevistas profundas con afectados. Más es bienvenido pero menos no permite detectar patrones.'
      },
      {
        enunciado: 'Llenas el bloque "Segmento de clientes" del Canvas. ¿Cuál es la formulación más profesional?',
        opciones: [
          'Jóvenes que quieren aprender',
          'Estudiantes de 10° y 11° de Cartago que se preparan para Saber 11 y no encuentran tutorías accesibles',
          'Personas en general',
          'Usuarios de internet'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Segmento bien definido = edad + ubicación + situación + necesidad concreta. Lo vago es inútil.',
        feedbackIncorrecto: 'Segmento bien definido incluye edad, ubicación, situación y necesidad concreta. "Jóvenes" es demasiado vago para construir.'
      },
      {
        enunciado: 'Tu MVP es una página simple en Notion con un formulario de Google. ¿Es suficiente para validar la hipótesis?',
        opciones: [
          'No, necesitas una app nativa con diseño profesional',
          'Sí, si permite que los usuarios reales prueben el servicio y dejen feedback',
          'Solo si tiene logo bonito',
          'Depende del número de seguidores'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La fidelidad técnica del MVP no importa: importa que permita aprender. Notion + Forms son MVPs válidos.',
        feedbackIncorrecto: 'Es suficiente si permite que usuarios reales prueben y den feedback. La técnica importa menos que la capacidad de aprender.'
      },
      {
        enunciado: 'Llevas 6 semanas con tu MVP. Tienes 50 usuarios pero ningún ingreso. ¿Qué evalúas?',
        opciones: [
          'Cerrar inmediatamente',
          'Si los 50 usuarios usan el servicio repetidamente; si lo recomiendan; qué dicen al preguntarles si pagarían',
          'Cambiar de problema',
          'Aumentar las funciones del producto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Sin ingresos pero con uso real podría ser hipótesis de precio mal puesta o segmento sin poder de pago.',
        feedbackIncorrecto: 'Investigar el uso real y la disposición a pagar. La ausencia de ingresos puede ser de precio mal puesto, no de problema mal elegido.'
      },
      {
        enunciado: 'Tu pitch es para un docente con poder de decidir. ¿Cuál es la frase MÁS efectiva al abrir?',
        opciones: [
          'Hola, soy Andrea, me apasiona el emprendimiento desde niña...',
          'Profe, encontré que el 60% de los 11° de Cartago no consigue tutoría para Saber 11. Quiero contarle qué hicimos al respecto.',
          'Voy a presentarles un proyecto que va a cambiar el mundo.',
          'Buenas tardes, espero estén bien...'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Empezar con un dato del problema real engancha. Hablar de pasión personal o promesas grandes pierde audiencia.',
        feedbackIncorrecto: 'Empezar con dato concreto del problema. La audiencia se conecta con realidad medible, no con biografía o promesas.'
      },
      {
        enunciado: 'Tu presupuesto inicial debe ser realista. ¿Qué rubro NUNCA debe faltar?',
        opciones: [
          'Marketing en TikTok',
          'Reserva del 10-15% para imprevistos',
          'Oficina física',
          'Patente internacional'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Reserva para imprevistos es regla profesional. Los proyectos sin colchón mueren al primer obstáculo.',
        feedbackIncorrecto: 'Reserva 10-15% para imprevistos es disciplina profesional. Sin ese colchón, cualquier obstáculo cierra el proyecto.'
      },
      {
        enunciado: 'Tu plataforma recolecta nombres y datos de contacto de menores de edad. ¿Qué marco legal aplicas?',
        opciones: [
          'Ninguno, ya que es proyecto escolar',
          'Ley 1581 de 2012 (protección de datos) + autorización expresa de padres/acudientes',
          'Solo derechos de autor',
          'Las leyes de los EE.UU.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La Ley 1581 protege datos personales en Colombia; con menores se exige autorización de acudientes.',
        feedbackIncorrecto: 'Ley 1581/2012 + autorización de acudientes para menores. Es marco mínimo no negociable.'
      },
      {
        enunciado: 'Tu versión final del MVP tiene 8 mejoras pendientes. ¿Cuál priorizas?',
        opciones: [
          'La más fácil de hacer',
          'La que más usuarios pidieron y que mueve el KPI principal del proyecto',
          'La que más te gusta a ti',
          'Todas al mismo tiempo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Priorización profesional combina demanda real (usuarios) con impacto (KPI). Es Kaizen aplicado a producto.',
        feedbackIncorrecto: 'Demanda de usuarios + impacto en KPI principal. Lo fácil o lo personal son criterios pobres de priorización.'
      },
      {
        enunciado: 'Cierras tu sustentación pública. ¿Qué llevas como mejor herencia del proyecto?',
        opciones: [
          'El producto terminado',
          'El método: escuchar, validar, construir lo mínimo, medir, iterar, sustentar honestamente',
          'El logo bonito',
          'El número de likes en redes'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. El método es la herencia. El producto puede cambiar, el método se aplica a cualquier proyecto futuro.',
        feedbackIncorrecto: 'El método: escuchar, validar, MVP, medir, iterar, sustentar honestamente. Es aplicable a cualquier proyecto futuro.'
      },
      {
        enunciado: 'Después de 8 entrevistas de validación, descubres que el problema que creías no es el problema real. ¿Qué haces?',
        opciones: [
          'Sigues con tu idea original porque ya la diseñaste',
          'Pivotas: ajustas tu propuesta al problema real que la gente sí tiene',
          'Abandonas el proyecto',
          'Buscas usuarios que confirmen tu idea original'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Pivotar con datos es señal de madurez emprendedora. Sostener una idea desmentida es vanidad.',
        feedbackIncorrecto: 'Pivotar al problema real es lo correcto. Sostener una idea que los datos desmienten es vanidad disfrazada de constancia.'
      },
      {
        enunciado: 'Tus datos del MVP muestran que el 80% de los usuarios abandona después del segundo uso. ¿Qué hipótesis investigas primero?',
        opciones: [
          'Que los usuarios son perezosos',
          'Que algo en la segunda experiencia rompe la promesa hecha en la primera',
          'Que los usuarios no entienden tecnología',
          'Que necesitas más usuarios'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Cuando hay churn alto entre primer y segundo uso, suele haber gap entre lo prometido y lo entregado.',
        feedbackIncorrecto: 'Hipótesis razonable: la segunda experiencia rompe la promesa. Churn entre uso 1 y 2 es señal clásica de gap producto-mercado.'
      }
    ]
  }
};

export default contenido;
