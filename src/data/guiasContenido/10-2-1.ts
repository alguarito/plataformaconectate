/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 1
 * (sesión global 11).
 *
 * Auto-generado desde content/guias/10/10-2-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 1,
  titulo: '4 tipos de texto profesional — informe, comercial, técnico, estudio de mercado',
  resumen: 'Del cuaderno del comerciante de plaza al informe profesional digital. Aprendes a distinguir 4 tipos de texto (creativo, técnico, comercial, estudio de mercado) y a usar IA como asistente que respeta tu autoría.',
  duracionMin: 90,
  subtema: 'Periodo 2 · Informes profesionales · IA con criterio',
  preLectura: {
    porQueImporta: 'Saber redactar informes profesionales con asistencia de IA es la habilidad más solicitada hoy en empresas, ONGs y administración pública. Te servirá para tu primer empleo, tu emprendimiento, tu gestión escolar — toda la vida.',
    preguntaDetonante: '¿Qué del cuaderno del comerciante de plaza —su disciplina de la palabra precisa— podemos llevar al informe profesional digital, sin perder lo que aprendimos del libro creativo?',
    activacion: {
      titulo: 'Del libro al informe',
      descripcion: 'En 5 minutos: en parejas comparen un fragmento de su libro del periodo 1 con cómo lo escribirían si fuera para la rectora. ¿Qué cambia? ¿Qué se mantiene? ¿Qué nuevas reglas aparecen?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En el periodo 1 escribiste un libro creativo con asistencia de IA, cuidando autoría y voz propia.',
      siguiente: 'En la sesión 12 redactarás el cuerpo del informe profesional con LaTeX y citas formales.'
    }
  },
  conceptosClave: [
    {
      termino: 'Informe técnico',
      definicion: 'Documento que reporta datos, análisis y hallazgos para que un especialista o supervisor tome decisiones técnicas. Tono neutro, datos verificables.',
      ejemplo: 'Informe sobre el ruido del recreo con mediciones, análisis y recomendaciones para la rectoría.',
      emoji: '📊',
      categoria: 'Tipos de informe'
    },
    {
      termino: 'Texto comercial',
      definicion: 'Propuesta de venta, presentación de servicio o pitch. Persuade a un cliente con poder de decidir. Tono cálido y profesional.',
      ejemplo: 'Propuesta para que el colegio contrate un servicio de fotografía escolar. Termina con llamada a la acción.',
      emoji: '💼'
    },
    {
      termino: 'Texto técnico-comercial mixto',
      definicion: 'Combinación que se ve en propuestas a empresas con componente técnico fuerte. Une rigor de datos y propósito persuasivo.',
      ejemplo: 'Propuesta de instalación de paneles solares: especificaciones técnicas + beneficios económicos.',
      emoji: '🔀'
    },
    {
      termino: 'Estudio de mercado',
      definicion: 'Investigación que analiza sector, audiencia o competencia. Da contexto a decisiones estratégicas. Tono analítico, basado en datos.',
      ejemplo: 'Estudio sobre hábitos de consumo de jóvenes del Valle para una cafetería que evalúa abrir cerca del colegio.',
      emoji: '🔎',
      categoria: 'Tipos de informe'
    },
    {
      termino: 'Tono según oficio',
      definicion: 'Cada tipo de texto exige su tono. Mezclarlos pierde la audiencia. Informe técnico con tono comercial parece superficial.',
      ejemplo: 'Un informe técnico no debería abrir con "¡Hola amigos!"; un texto comercial no debería abrir con tres tablas de datos.',
      emoji: '🎵'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Reconoces los 4 tipos de texto profesional?',
      instrucciones: '5 preguntas para verificar que diferencias propósito, audiencia y tono.',
      preguntas: [
        {
          enunciado: '¿Cuál es el propósito principal del informe técnico?',
          opciones: [
            'Vender',
            'Informar para que se tomen decisiones técnicas',
            'Entretener',
            'Saludar'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El informe técnico informa para decisión, no para venta ni entretenimiento.',
          feedbackIncorrecto: 'Es informar para decisiones técnicas. Su audiencia decide con base en datos verificables.'
        },
        {
          enunciado: 'El texto comercial debe terminar con...',
          opciones: [
            'Una despedida larga',
            'Una tabla de datos',
            'Un poema',
            'Una llamada a la acción (CTA)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. El comercial termina pidiendo decisión: "Solicito autorización", "Apruebe la propuesta".',
          feedbackIncorrecto: 'Termina con llamada a la acción. Sin pedido claro, el texto comercial pierde su propósito.'
        },
        {
          enunciado: 'Un estudio de mercado se diferencia del informe técnico en que...',
          opciones: [
            'Analiza sector, audiencia o competencia para decisiones estratégicas',
            'Es lo mismo',
            'Es solo para colegios',
            'Es solo en inglés'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El estudio de mercado da contexto estratégico; el informe técnico reporta hallazgos puntuales.',
          feedbackIncorrecto: 'El estudio de mercado analiza sector, audiencia o competencia. Es base para decisiones estratégicas.'
        },
        {
          enunciado: 'Mezclar el tono comercial en un informe técnico produce...',
          opciones: [
            'Mejor lectura',
            'Más datos',
            'Pérdida de audiencia, parece superficial',
            'Más páginas'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. El informe técnico con tono comercial pierde rigor a los ojos del lector especializado.',
          feedbackIncorrecto: 'Pierde audiencia. Un especialista que lee tono comercial en informe técnico desconfía del rigor.'
        },
        {
          enunciado: '¿Quién es la audiencia del informe técnico?',
          opciones: [
            'Clientes potenciales',
            'Especialistas, supervisores, comités',
            'Niños de primaria',
            'Influencers'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Especialistas, supervisores o comités que necesitan datos para decidir.',
          feedbackIncorrecto: 'Son especialistas, supervisores o comités. Por eso el tono es neutro y los datos verificables.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Del libro creativo al informe profesional. ¿Qué de la voz del libro quieres preservar al escribir informes? ¿Qué definitivamente debes dejar atrás?',
    transferencia: 'Esta semana: identifica una situación real de tu colegio que requiera un informe profesional (cafetería, transporte, biblioteca, descansos). Esboza qué tipo sería y a quién iría dirigido.',
    cierre: 'El cuaderno del comerciante y el informe digital comparten algo: la palabra dada por escrito tiene peso. La IA acelera el borrador; tú firmas la responsabilidad.'
  },
  saberAncestral: {
    saber: 'En el barrio Obrero de Cartago hubo cuatro oficios de la palabra que cualquier abuela distinguía al oído: (1) El cuentista: el que contaba historias a los nietos. Su palabra era para entretener y enseñar con ejemplo. Tono cálido, ritmo variado, metáforas locales. (2) El escribano: el señor con sombrero que redactaba cartas y poderes frente a la notaría. Su palabra era para acreditar formalmente. Tono respetuoso, frases largas, fórmulas legales precisas. (3) El contador: el que llevaba las cuentas del tendero, el zapatero, la modista. Su palabra era para calcular y reportar con números. Tono seco, cifras exactas, sin adornos. (4) El juez: el que oficiaba en la inspección de policía cuando había pleito vecinal. Su palabra era para sentenciar con autoridad. Tono firme, argumentación clara. Cualquier vecino mayor distinguía los 4 al instante: cada oficio tenía tono propio. Confundirlos era perder el oficio. Los 4 tipos de texto profesional moderno son la versión actualizada de esos 4 oficios del barrio.',
    preguntaPuente: '¿Qué sabían las abuelas del barrio al distinguir al cuentista del escribano y del contador, que el novato olvida cuando escribe todo con el mismo tono? ¿Y por qué un mismo dato presentado en informe técnico vs en texto comercial requiere palabras y estructuras completamente distintas?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El tono que respeta a la audiencia es liberador; el tono uniforme impuesto a toda audiencia es violencia comunicativa.',
      preguntaEspejo: '¿Mi escritura ajusta el tono a quien lee, o uso el mismo registro para todo?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La sobriedad del tono correcto es virtud profesional; el adorno inadecuado a la audiencia es vicio del que escribe.',
      preguntaEspejo: '¿Estoy usando el tono sobrio que cada tipo de texto exige, o lo adorno cuando no toca?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La comunicación contextual es la nueva ética profesional en la era de la información distribuida.',
      preguntaEspejo: '¿Sé reconocer en qué contexto y para quién escribe cada texto profesional que produzco?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar cuál de los 4 tipos de texto profesional aplica a una situación concreta del mundo real; (2) analizar ejemplos reales detectando qué tono y estructura sostiene cada…',
    emocional: 'Es tentador querer sonar elegante en todo texto.',
    ciudadana: 'Cuando escribes con el mismo tono para todas las audiencias, estás imponiendo tu manera de hablar a quien debe leer.',
    local: 'Antes de cerrar, mira los 4 tipos desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los textos circulan en contextos múltiples.'
  }
};

export default contenido;
