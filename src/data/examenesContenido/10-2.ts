/**
 * Contenido web del examen final · Grado 10 · Período 2
 *
 * Auto-generado desde content/examenes/10-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 10,
  periodo: 2,
  titulo: 'Examen final · Informes técnicos profesionales con IA',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Informes técnicos profesionales con IA',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuál es la diferencia principal entre informe técnico e informe comercial?',
        opciones: [
          'No hay diferencia',
          'Técnico informa para decisión técnica (tono neutro); comercial persuade para decisión de compra/aprobación (tono cálido, CTA)',
          'El comercial es más largo',
          'El técnico solo tiene números'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Propósito + audiencia + tono distinguen los tipos. Mezclarlos pierde audiencia.',
        feedbackIncorrecto: 'Técnico informa (tono neutro, datos verificables); comercial persuade (tono cálido, CTA). Cada uno tiene su audiencia y su estructura.'
      },
      {
        enunciado: '¿Cuáles son las 3 secciones obligatorias de un informe técnico?',
        opciones: [
          'Saludo, cuerpo, despedida',
          'Introducción, desarrollo, conclusiones',
          'Solo conclusiones',
          'Resumen, contenido, bibliografía'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Introducción (contexto + objetivo + alcance), desarrollo (metodología + datos + análisis), conclusiones (hallazgos + recomendaciones accionables).',
        feedbackIncorrecto: 'Las 3 secciones son introducción + desarrollo + conclusiones. Cada una tiene función específica que no se debe mezclar.'
      },
      {
        enunciado: '¿Cuál de estas herramientas de Google Docs distingue a un documento profesional de una tarea escolar?',
        opciones: [
          'Cambiar el color del texto',
          'Usar estilos de título consistentemente para generar tabla de contenido automática',
          'Agregar muchas imágenes',
          'Subrayar palabras importantes'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Estilos + TOC automática es el primer paso. Sin estilos, no hay índice navegable ni estructura visible.',
        feedbackIncorrecto: 'Estilos de título consistentes generan TOC automática. Es la diferencia entre documento profesional y tarea escolar.'
      },
      {
        enunciado: 'Tu informe lleva 8 citas en formato APA. ¿Cómo las gestionas en Google Docs?',
        opciones: [
          'Las escribo a mano una por una',
          'Uso Herramientas → Citas para insertarlas y generar bibliografía automática',
          'No cito porque es informal',
          'Pongo solo el nombre del autor sin más'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Herramientas → Citas en Google Docs gestiona APA, MLA, Chicago. Automatiza el formato y evita errores.',
        feedbackIncorrecto: 'Herramientas → Citas en Docs. Soporta APA, MLA, Chicago. Genera bibliografía automática al final.'
      },
      {
        enunciado: '¿Cuál es la mayor ventaja de Markdown sobre Word?',
        opciones: [
          'Es más bonito',
          'Portabilidad: el mismo .md se convierte a PDF, HTML, libro, presentación',
          'Tiene más colores',
          'Es más rápido de escribir'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Portabilidad. Un solo archivo soporta múltiples salidas sin reescribir.',
        feedbackIncorrecto: 'Portabilidad. Es la propiedad clave. Word te ata a una salida; Markdown te abre PDF, HTML, libro, slides, todo desde el mismo archivo.'
      },
      {
        enunciado: '¿Cómo se hace negrita en Markdown?',
        opciones: [
          '$$texto$$',
          '**texto**',
          '<b>texto</b>',
          '&&texto&&'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Dos asteriscos a cada lado. Cursiva con un solo asterisco *texto*.',
        feedbackIncorrecto: '**texto** para negrita. *texto* para cursiva. # para H1, ## para H2.'
      },
      {
        enunciado: '¿Qué problema tiene la pregunta "¿No crees que la biblioteca debería abrir más horas?"?',
        opciones: [
          'Ninguno',
          'Es sesgada: induce respuesta afirmativa al usar \'no crees\'',
          'Es muy larga',
          'No tiene signo de pregunta'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Sesgada. Una pregunta neutra dice "¿Cómo evalúas el horario actual de la biblioteca?".',
        feedbackIncorrecto: 'Es sesgada: "no crees que..." induce el sí. Pregunta neutra: "¿Cómo evalúas el horario actual?".'
      },
      {
        enunciado: 'Antes de aplicar tu encuesta de 10 preguntas, ¿qué haces?',
        opciones: [
          'La aplico directamente',
          'Le pido a la IA que la audite contra sesgos, ambigüedades, doble cabeza y supuestos; pruebo con 2 compañeros',
          'Solo se la muestro a mi mamá',
          'La publico en redes'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Filtro de IA + prueba con compañeros antes de aplicar. La IA detecta 5 problemas comunes; los humanos validan que el destinatario entiende.',
        feedbackIncorrecto: 'Filtro IA + prueba humana. Ese paso ahorra rehacer la encuesta cuando descubres después que las preguntas no daban respuestas útiles.'
      },
      {
        enunciado: 'La IA te clasifica respuestas abiertas en categorías. ¿En qué falla típicamente?',
        opciones: [
          'En todo',
          'En detectar sarcasmo, modismos locales colombianos y contexto cultural específico',
          'En contar palabras',
          'En traducir al inglés'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Sarcasmo y modismos son límites conocidos. El editor humano audita y reclasifica esos casos.',
        feedbackIncorrecto: 'Sarcasmo + modismos locales + contexto cultural. La IA propone categorías; el humano audita y reclasifica los casos problemáticos.'
      },
      {
        enunciado: '¿Cómo termina un informe COMERCIAL?',
        opciones: [
          'Con un poema',
          'Con un pedido claro (CTA): \'Solicito decisión sobre X\' o \'Apruebe Y\'',
          'Con varios anexos',
          'Sin terminar'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. CTA explícita. "Informe comercial sin pedido es informe perdido."',
        feedbackIncorrecto: 'Con pedido claro. Sin CTA, el informe comercial pierde su propósito persuasivo.'
      },
      {
        enunciado: 'Tu informe comercial propone instalar bebederos en el colegio. ¿Qué sección NO debe faltar?',
        opciones: [
          'Solo el saludo',
          'Resumen ejecutivo de 1 página + cuerpo argumentativo + recomendaciones accionables con responsable, plazo y recursos',
          'Solo el problema',
          'Solo conclusiones'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Los 4 componentes obligatorios. La recomendación accionable identifica qué, quién, plazo y recursos.',
        feedbackIncorrecto: 'Resumen ejecutivo + cuerpo + recomendaciones accionables. Cada sección con función propia.'
      },
      {
        enunciado: 'Tu correo profesional para la rectora supera 250 palabras. ¿Qué haces?',
        opciones: [
          'Lo envío así, mejor más detalle',
          'Reviso si todo es necesario: 200 palabras es el límite razonable; si pasa, sospecho que hay relleno',
          'Agrego más párrafos',
          'Cambio el destinatario'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La regla de las 200 palabras es señal: si pasa, hay que recortar. El destinatario apurado agradece la síntesis.',
        feedbackIncorrecto: 'Revisar y recortar. 200 palabras es señal: más exige justificación. La rectora lee 50 correos por día.'
      },
      {
        enunciado: '¿Cuál es el rol correcto de la IA al redactar un correo profesional?',
        opciones: [
          'Reemplazar al estudiante: pegar lo que diga ChatGPT',
          'Asistente que da borrador inicial; el humano ajusta tono, matices culturales y firma',
          'No tiene rol',
          'Solo traducir'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. IA como asistente, humano como editor + firmante. La IA acelera; el humano sostiene criterio.',
        feedbackIncorrecto: 'Asistente, no reemplazo. Borrador IA + edición humana + firma humana. La responsabilidad no se delega.'
      },
      {
        enunciado: 'Tu mini-proyecto integrador tiene 6 componentes obligatorios. ¿Cuál es el NUEVO respecto a un informe escolar tradicional?',
        opciones: [
          'La portada',
          'La declaración honesta de uso de IA con bitácora detallada',
          'El índice',
          'La bibliografía'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La declaración de IA es la pieza nueva del estándar profesional contemporáneo.',
        feedbackIncorrecto: 'La declaración honesta de IA. Pieza nueva que define el estándar profesional de transparencia.'
      },
      {
        enunciado: 'Durante tu sustentación de 5 minutos, ¿qué demuestra MEJOR que dominas tu proyecto?',
        opciones: [
          'Una presentación con muchos efectos visuales',
          'Responder con honestidad a las preguntas duras (reconocer lo no resuelto sin inventar)',
          'Hablar muy rápido para caber en 5 min',
          'Leer un papel'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Honestidad ante preguntas duras revela dominio. Inventar respuestas erosiona credibilidad.',
        feedbackIncorrecto: 'Responder con honestidad, reconocer lo no resuelto. Esa actitud es lo que distingue profesional de aficionado.'
      },
      {
        enunciado: '¿Qué oficio ancestral del Valle conecta con el informe técnico de este periodo?',
        opciones: [
          'El barbero de la plaza',
          'El escribiente público de Cartago con su máquina de escribir',
          'El vendedor de helados',
          'El conductor de chiva'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El escribiente traducía habla cotidiana a texto formal dirigido a una autoridad específica.',
        feedbackIncorrecto: 'El escribiente público. Su disciplina: ni más palabras ni menos, tono ajustado al destinatario.'
      },
      {
        enunciado: 'Recibes una invitación a un evento de emprendedores y te piden enviar tu "estudio de mercado". ¿De qué tipo de texto se trata?',
        opciones: [
          'Informe técnico',
          'Estudio de mercado: análisis de sector/audiencia/competencia con tono analítico y datos',
          'Texto comercial',
          'Correo profesional'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Estudio de mercado tiene su anatomía propia: contexto + metodología + análisis + conclusiones estratégicas.',
        feedbackIncorrecto: 'Estudio de mercado. Distinto de los otros 3 tipos en propósito (decisión estratégica) y estructura.'
      },
      {
        enunciado: '¿Qué porcentaje del informe técnico ocupa el desarrollo?',
        opciones: [
          '10%',
          '60-70%',
          '100%',
          '5%'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 60-70%. Es la zona más larga: metodología + datos + análisis.',
        feedbackIncorrecto: '60-70%. Es la zona de mayor responsabilidad: metodología clara, datos verificables, análisis con criterio.'
      },
      {
        enunciado: '"La IA propone, el humano dispone" es la regla profesional para...',
        opciones: [
          'Solo redactar',
          'Análisis cualitativo de respuestas abiertas con IA: la IA acelera la propuesta inicial, el humano audita y firma',
          'Solo enviar correos',
          'Solo formatear texto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La IA agiliza la clasificación inicial; el humano audita los casos límite y firma como responsable.',
        feedbackIncorrecto: 'Es la regla del análisis cualitativo. IA propone, humano dispone y firma. Sin auditoría, la IA introduce errores en sarcasmos y modismos.'
      },
      {
        enunciado: 'Diseñas una encuesta para 20 personas. ¿Cuántas preguntas son razonables?',
        opciones: [
          '1 sola pregunta',
          '5-10 preguntas bien diseñadas (cerradas + 1-2 abiertas para insights cualitativos)',
          '50 preguntas para tener mucha información',
          '100 preguntas'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 5-10 preguntas bien diseñadas. Más preguntas reducen la tasa de finalización y agotan al encuestado.',
        feedbackIncorrecto: '5-10 preguntas bien diseñadas. La cantidad importa menos que la calidad de cada pregunta.'
      },
      {
        enunciado: '¿Cuál de estos asuntos de correo es el MÁS profesional?',
        opciones: [
          'Hola',
          'Propuesta de mejora del recreo escolar — Grado 10°',
          'URGENTE!!!',
          'Sin asunto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Asunto específico, en 5-7 palabras, sin signos exagerados. El destinatario sabe qué leerá al abrir.',
        feedbackIncorrecto: 'Asunto específico (5-7 palabras) que le diga al destinatario qué encontrará. "Hola" y "URGENTE!!!" suelen ir a spam.'
      },
      {
        enunciado: 'Tu mini-proyecto declara que usaste IA en 60% del texto y editaste a mano 30%. ¿Es legítimo firmarlo?',
        opciones: [
          'No, no se puede firmar nada hecho con IA',
          'Sí, si la declaración es honesta y se mantiene en la carta del autor; el 30% editado a mano + verificación humana es la firma',
          'Solo si la IA fue gratis',
          'Solo si fue ChatGPT específicamente'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Honestidad + intervención humana sustancial = autoría legítima. La transparencia es la nueva ética editorial.',
        feedbackIncorrecto: 'Es legítimo si la declaración es honesta y la intervención humana es sustancial. La transparencia define la ética contemporánea.'
      }
    ]
  }
};

export default contenido;
