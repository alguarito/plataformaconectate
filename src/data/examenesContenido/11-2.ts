/**
 * Contenido web del examen final · Grado 11 · Período 2
 *
 * Auto-generado desde content/examenes/11-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 11,
  periodo: 2,
  titulo: 'Examen final · Automatización y procesos',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Automatización y procesos',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué es "mapear un proceso" según la sesión 1?',
        opciones: [
          'Hacer un mapa físico del lugar donde se trabaja',
          'Documentar qué se hace, en qué orden y en cuánto tiempo, antes de automatizar',
          'Configurar Zapier rápidamente',
          'Comprar herramientas digitales nuevas'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Mapear es documentar el proceso real antes de automatizar. Sin mapeo, la automatización es atajo ciego.',
        feedbackIncorrecto: 'Mapear es documentar el proceso real (qué, orden, tiempo) antes de tocar Zapier. Sin esa disciplina, la automatización acelera errores.'
      },
      {
        enunciado: '¿Qué representa un rombo en un diagrama de flujo BPMN?',
        opciones: [
          'El inicio del proceso',
          'Una decisión: el flujo se ramifica según una condición',
          'El final del proceso',
          'Un actor humano'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El rombo es decisión: el flujo se bifurca según una condición (sí/no, A/B/C).',
        feedbackIncorrecto: 'Es una decisión. El rombo marca dónde el proceso se bifurca según una condición.'
      },
      {
        enunciado: '¿Cuál de estas situaciones se beneficia MÁS de reemplazar papel con un formulario digital?',
        opciones: [
          'Una firma legal notarial que debe ser presencial',
          'El registro semanal de pedidos de la tienda de tu mamá',
          'Un examen oral de grado 5',
          'Un acta firmada por testigos en persona'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Procesos repetidos con datos estructurados son los ideales para digitalizar. Los actos legales con firma presencial siguen requiriendo papel.',
        feedbackIncorrecto: 'Los procesos repetidos con datos estructurados son los candidatos ideales. Las firmas presenciales legales no se digitalizan así.'
      },
      {
        enunciado: 'Estás usando Google Sheets como base de datos. ¿Cuál de estas prácticas es CORRECTA?',
        opciones: [
          'Una columna por dato, una fila por registro, con encabezados claros',
          'Mezclar datos de tipos distintos en la misma columna',
          'Dejar celdas vacías en el medio para que se vea bonito',
          'No poner encabezados porque ya sé qué significa cada columna'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. La regla profesional de Sheets-as-DB: una columna = un campo, una fila = un registro, encabezados explícitos.',
        feedbackIncorrecto: 'Una columna por dato, una fila por registro, encabezados claros. Romper esa estructura te impide automatizar después.'
      },
      {
        enunciado: '¿Qué hace un "trigger" en Zapier o Make?',
        opciones: [
          'Es el evento que dispara el flujo automatizado (nueva entrada en un formulario, correo recibido, etc.)',
          'Es el botón final para ejecutar el flujo manualmente',
          'Es el nombre de la app gratis',
          'Es la factura mensual del servicio'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Exacto. El trigger es el evento detonante: cuando ocurre X, el flujo arranca.',
        feedbackIncorrecto: 'Es el evento detonante. Una nueva fila en Sheets, un correo nuevo o un envío de formulario son ejemplos típicos de trigger.'
      },
      {
        enunciado: 'Tu chatbot de IA responde mensajes de tus clientes. Llega un mensaje complicado con quejas legítimas. ¿Qué hace un chatbot bien diseñado?',
        opciones: [
          'Responde con una plantilla genérica para cerrar rápido',
          'Detecta la queja y deriva la conversación a un humano del equipo',
          'Ignora el mensaje',
          'Repite la misma respuesta hasta que el cliente desista'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La IA detecta cuándo no es competente y deriva. Eso es criterio: la máquina sabe lo que NO debe hacer.',
        feedbackIncorrecto: 'Un chatbot bien diseñado detecta sus límites y deriva al humano. La IA con criterio sabe cuándo NO debe responder sola.'
      },
      {
        enunciado: '¿Cuál es la primera regla al diseñar un flujo conversacional para un chatbot?',
        opciones: [
          'Hacer respuestas muy largas para parecer profesional',
          'Diseñar primero el camino corto (3-5 mensajes) que resuelve el 80% de las solicitudes',
          'Usar emojis en cada mensaje',
          'Cambiar el tono según la hora del día'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. El camino corto resuelve la mayoría de los casos. Lo complejo se atiende con derivación a humano.',
        feedbackIncorrecto: 'Camino corto primero (3-5 mensajes para el 80%) y derivación humana para el resto. La eficiencia conversacional sigue el principio 80/20.'
      },
      {
        enunciado: 'Un KPI honesto debe ser...',
        opciones: [
          'Fácil de contar aunque no represente lo importante',
          'Específico, medible y conectado al propósito del proceso',
          'Un número grande para impresionar',
          'Cambiante cada semana'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. KPI honesto = específico + medible + conectado al propósito. Lo fácil de contar es trampa común (vanity metric).',
        feedbackIncorrecto: 'El KPI honesto se conecta al propósito real del proceso. Lo fácil de contar pero sin sentido es vanity metric.'
      },
      {
        enunciado: '¿Qué significa Kaizen aplicado a procesos digitales?',
        opciones: [
          'Rediseñar todo desde cero cada mes',
          'Mejoras pequeñas, frecuentes y basadas en datos del proceso real',
          'Comprar herramientas nuevas constantemente',
          'Cambiar de plataforma cada vez que algo falla'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Kaizen es iteración disciplinada con datos: mejoras pequeñas constantes, no rediseños grandes.',
        feedbackIncorrecto: 'Kaizen es mejora pequeña, frecuente, basada en datos. Rediseñar todo o cambiar de plataforma son atajos contrarios al principio.'
      },
      {
        enunciado: 'Vas a automatizar el proceso de inscripción al taller de fotografía del colegio. ¿Cuál es el primer paso responsable?',
        opciones: [
          'Configurar el formulario en Google Forms inmediatamente',
          'Mapear el proceso actual con la coordinación y el docente que dicta el taller',
          'Comprar una suscripción a Zapier Pro',
          'Diseñar el logo del taller'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Mapear con quienes ejecutan el proceso es el primer paso. Sin eso, automatizas un proceso que no entiendes.',
        feedbackIncorrecto: 'El mapeo con quienes ejecutan el proceso real es el primer paso. La herramienta viene después.'
      },
      {
        enunciado: '¿Cuál era el oficio ancestral del Valle que conectó con la automatización en este periodo?',
        opciones: [
          'El sastre que tomaba medidas',
          'El panadero que documentaba su rutina en una hoja pegada a la pared',
          'El zapatero del centro',
          'El pescador del Pacífico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El panadero documentaba pasos y tiempos. Era mapeo de procesos antes del software.',
        feedbackIncorrecto: 'El panadero. Su hoja pegada a la pared con la rutina (4:00 amasar, 5:00 leudar...) es mapeo de procesos en su forma más pura.'
      },
      {
        enunciado: 'BPMN significa...',
        opciones: [
          'Business Process Model and Notation',
          'Big Process Manager Network',
          'Best Programming Method Now',
          'Brand Plan and Marketing Notes'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Exacto. BPMN es el lenguaje estándar para diagramar procesos de negocio.',
        feedbackIncorrecto: 'BPMN = Business Process Model and Notation. Es el lenguaje estándar para diagramar procesos.'
      },
      {
        enunciado: 'Tu flujo de Zapier dispara correctamente, pero los datos llegan corruptos. ¿Qué herramienta del periodo usas para diagnosticar?',
        opciones: [
          'Borrar el flujo y empezar de cero',
          'Revisar la base de datos (Sheets) para ver qué pasó en cada paso del flujo',
          'Cambiar a Make',
          'Apagar y prender el computador'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Auditar el log/datos en cada paso es el método. Cambiar de plataforma no resuelve el problema.',
        feedbackIncorrecto: 'Auditar los datos en cada paso del flujo es el diagnóstico. Cambiar de herramienta es atajo sin pensar.'
      },
      {
        enunciado: '¿Cuál de estos casos NO debe ser gestionado solo por IA?',
        opciones: [
          'Una consulta sobre horarios de atención',
          'La queja formal de un cliente molesto que pide hablar con un humano',
          'Una solicitud de información del menú',
          'Una pregunta sobre la dirección del local'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Las quejas que piden trato humano exigen derivación. La IA con criterio reconoce su límite.',
        feedbackIncorrecto: 'Las quejas con pedido de contacto humano se derivan. La IA con criterio sabe cuándo no es la respuesta correcta.'
      },
      {
        enunciado: 'Tu chatbot tiene 12 caminos posibles y los usuarios se pierden. ¿Qué decisión es razonable?',
        opciones: [
          'Agregar 5 caminos más para cubrir todos los casos',
          'Simplificar a 3-4 caminos principales y derivar el resto a humano',
          'Eliminar el chatbot',
          'Cambiar el color del chat'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Simplificar al camino corto + derivación humana. 12 caminos es complejidad innecesaria.',
        feedbackIncorrecto: 'Simplificar a los caminos esenciales + derivación. 12 caminos confunden al usuario; 3-4 + humano resuelven mejor.'
      },
      {
        enunciado: 'Tu microempresa de pedidos tiene 100 visitas/semana pero solo 5 ventas. ¿Cuál es el KPI clave a observar?',
        opciones: [
          'La cantidad de visitas (vanity)',
          'La tasa de conversión visitas → ventas (5%) y dónde se pierden los otros 95%',
          'El color del sitio',
          'El número de palabras en la home'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Tasa de conversión + análisis del embudo es el KPI honesto. Las visitas solas son vanity.',
        feedbackIncorrecto: 'La tasa de conversión y dónde se pierde el embudo. Las visitas sin conversión no significan nada.'
      },
      {
        enunciado: 'Aplicas Kaizen a tu flujo. Después de la primera mejora, ¿qué haces?',
        opciones: [
          'Declaras el flujo terminado',
          'Mides el efecto de la mejora, identificas la siguiente fricción y vuelves a iterar',
          'Olvidas el flujo durante 6 meses',
          'Cambias a otra herramienta'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Kaizen es ciclo continuo: medir, mejorar, medir, mejorar. Nunca termina.',
        feedbackIncorrecto: 'Kaizen es ciclo: medir el efecto, identificar la siguiente fricción, mejorar. Nunca se da por terminado.'
      },
      {
        enunciado: 'Identificas un proceso en el colegio que se puede automatizar (asistencia, permisos, citaciones). ¿Cuál es tu siguiente paso responsable?',
        opciones: [
          'Programar la solución y entregarla sin avisar',
          'Hablar con quien ejecuta el proceso actualmente, entender qué decide y qué no, antes de proponer',
          'Publicar la idea en redes sociales primero',
          'Pedir presupuesto a la rectoría sin haber probado nada'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Conversar con quien ejecuta el proceso es el respeto por el oficio. Sin eso, la automatización es imposición externa.',
        feedbackIncorrecto: 'Conversar con quien ejecuta el proceso real. Sin esa escucha, automatizas lo que crees, no lo que es.'
      },
      {
        enunciado: 'Diseñas un formulario digital para captar pedidos. ¿Cuántos campos obligatorios pones?',
        opciones: [
          'Cuantos más mejor, para tener todos los datos',
          'Solo los estrictamente necesarios para iniciar el pedido (típicamente 3-5)',
          'Ninguno, todos opcionales',
          'Solo el correo electrónico'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Mínimos campos obligatorios = mayor tasa de respuesta. 3-5 campos es el rango profesional.',
        feedbackIncorrecto: 'Solo lo estrictamente necesario. Cada campo obligatorio adicional reduce la tasa de respuesta.'
      },
      {
        enunciado: 'Tu Sheets como base de datos crece a 5.000 filas. ¿Qué decisión profesional toma sentido?',
        opciones: [
          'Borrar los datos antiguos sin respaldarlos',
          'Evaluar migrar a una base de datos real (Airtable, PostgreSQL) y mantener Sheets para visualización',
          'Comprar más espacio en Google Drive',
          'Seguir igual'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Sheets tiene límites; a 5.000+ filas con uso intensivo conviene migrar a herramienta especializada.',
        feedbackIncorrecto: 'Migrar a base de datos real cuando el volumen lo justifique. Sheets es punto de partida, no destino final.'
      },
      {
        enunciado: 'Le pides a la IA que clasifique tus mensajes de clientes en categorías. La IA propone "queja / pregunta / agradecimiento". Después auditas y encuentras 3 mensajes mal clasificados (sarcasmos tomados literal). ¿Qué haces?',
        opciones: [
          'Confías en la IA porque acertó en 17 de 20',
          'Reclasificas a mano los 3 y documentas que los sarcasmos son límite conocido de la IA',
          'Eliminas la IA del proceso',
          'Cambias de modelo de IA'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Auditoría humana de la IA + documentar sus límites es el método profesional. La IA propone, el humano dispone.',
        feedbackIncorrecto: 'Reclasificar a mano y documentar el límite. La IA acelera, el humano supervisa y firma.'
      },
      {
        enunciado: 'Aplicas Kaizen a tu proceso durante 4 semanas y los KPIs no mejoran. ¿Qué haces?',
        opciones: [
          'Sigues iterando las mismas mejoras esperando que en algún momento funcionen',
          'Vuelves al mapeo: probablemente el problema no es de ejecución sino de diseño del proceso',
          'Abandonas Kaizen como método',
          'Compras una herramienta nueva'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Cuando Kaizen no mueve los KPIs, el problema es de diseño del proceso, no de ejecución. Volver al mapeo.',
        feedbackIncorrecto: 'Volver al mapeo. Si las mejoras pequeñas no mueven los KPIs, el problema está en el diseño del proceso, no en la iteración.'
      }
    ]
  }
};

export default contenido;
