/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 10
 * (sesión global 10).
 *
 * Auto-generado desde content/guias/8/8-1-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 10,
  titulo: 'Sustentación del mini-estudio — 4 minutos de phronesis comunicativa',
  resumen: 'Como la asamblea trimestral en cabildos: presentar lo trabajado, escuchar preguntas, recibir crítica con humildad. Sustentar es darle voz pública al estudio que hiciste con phronesis.',
  duracionMin: 90,
  subtema: 'Socialización · Sustentación de 4 minutos · Phronesis comunicativa',
  preLectura: {
    porQueImporta: 'Saber sustentar te servirá toda la vida: para defender un proyecto en tu universidad, para presentar una propuesta laboral, para participar en una junta de acción comunal. Es habilidad de ciudadano que se hace escuchar.',
    preguntaDetonante: '¿Qué de la asamblea trimestral en cabildos — la disciplina de presentar y escuchar a la comunidad — podemos llevar a la sustentación digital?',
    activacion: {
      titulo: 'La sustentación memorable',
      descripcion: 'En 5 minutos: en parejas recuerden la mejor sustentación que han visto (de un compañero, profesor, conferencia). ¿Qué la hizo memorable? ¿Qué tuvo que las malas no tienen?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 9 ejecutaste tu mini-estudio del entorno escolar.',
      siguiente: 'Cierre del periodo 1. En el periodo 2 entrarás a lógica avanzada y computación física.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación oral',
      definicion: 'Acto público donde el estudiante presenta y defiende su mini-estudio ante la audiencia. No es lectura: es comunicación con voz propia.',
      ejemplo: '4 minutos contando pregunta, método, hallazgo y decisión, mirando al público, sin leer las slides.',
      emoji: '🎤'
    },
    {
      termino: '5 slides estándar',
      definicion: 'Estructura mínima para sustentación corta: pregunta, método/datos, hallazgo, gráfico, decisión. Cada slide con tiempo asignado.',
      ejemplo: 'Slide 1 (45 seg) pregunta + por qué importa. Slide 2 (45 seg) cómo recolecté datos. Slide 3 (60 seg) hallazgo principal con cifra. Slide 4 (45 seg) gráfico. Slide 5 (45 seg) decisión.',
      emoji: '🎬'
    },
    {
      termino: 'Phronesis comunicativa',
      definicion: 'Disciplina de decir lo justo: ni inflar lo logrado ni minimizarlo. Lo que se cuenta debe sostenerse con honestidad ante preguntas.',
      ejemplo: '"Mi muestra fue 12 personas, no puedo generalizar al colegio" es phronesis. "Encuesté a toda la institución" sin haberlo hecho es engaño.',
      emoji: '🧭'
    },
    {
      termino: 'Autoevaluación profesional',
      definicion: 'Reconocimiento honesto de 1-2 fortalezas y 1-2 mejoras después de sustentar. No autoflagelación ni autoelogio: balance real.',
      ejemplo: '"Manejé bien el tiempo (fortaleza). Hablé muy rápido al principio por nervio (mejora). Para próxima sustentación ensayaré con cronómetro."',
      emoji: '🪞'
    },
    {
      termino: 'Cronometrar el ensayo',
      definicion: 'Práctica profesional: ensayar 2 veces con reloj antes de la sustentación real. Permite ajustar tiempos por slide y detectar excesos.',
      ejemplo: 'Si en el ensayo te toma 5,5 minutos lo planeado para 4, sabes que debes acortar o priorizar. Eso ahorra fracaso público.',
      emoji: '⏱'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes sustentar con phronesis comunicativa?',
      instrucciones: '5 preguntas para verificar que reconoces qué hace profesional una sustentación oral del mini-estudio.',
      preguntas: [
        {
          enunciado: '¿Cuál es el primer error del sustentante novato?',
          opciones: [
            'Hablar muy bajo',
            'Leer las slides en voz alta',
            'Tener slides simples',
            'Mirar al público'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Leer las slides mata la sustentación. Si lees, el público lee solo y tu voz sobra. Mejor contar con apoyo visual mínimo.',
          feedbackIncorrecto: 'Leer las slides es el primer error. Mejor hablar con apoyo visual mínimo y mirar al público.'
        },
        {
          enunciado: '¿Cuántas slides son ideales para sustentación de 4 minutos?',
          opciones: [
            '20',
            '15',
            'Solo 1',
            '4-5'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. 4-5 slides, una por bloque (pregunta, método, hallazgo, gráfico, decisión). Menos no alcanza; más no se puede explicar en 4 min.',
          feedbackIncorrecto: '4-5 slides es el estándar para sustentación corta. Más slides obligan a acelerar y leer; menos no muestra el camino.'
        },
        {
          enunciado: 'Te preguntan: "¿la encuesta fue representativa del colegio?". La muestra fue 15. ¿Qué respondes con phronesis comunicativa?',
          opciones: [
            'No, fue de 15 personas, así que aplica solo al grupo encuestado. Una muestra mayor permitiría generalizar.',
            'Sí, totalmente',
            'Buena pregunta... siguiente pregunta',
            'Depende'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Honestidad técnica con explicación. La phronesis comunicativa declara límites en lugar de evadir.',
          feedbackIncorrecto: 'La respuesta honesta declara el tamaño de la muestra y reconoce los límites. Evadir o inflar erosiona credibilidad.'
        },
        {
          enunciado: 'En la autoevaluación final, ¿qué es señal de profesionalismo?',
          opciones: [
            'Decir que todo salió perfecto',
            'Decir que todo salió mal',
            'Reconocer 1-2 fortalezas y 1-2 mejoras concretas',
            'No autoevaluarse'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Balance real entre lo logrado y lo mejorable es profesional. Autoelogio y autocrítica extremos son señal de poco oficio.',
          feedbackIncorrecto: 'Reconocer fortalezas y mejoras con honestidad balanceada es señal profesional. Extremos delatan inseguridad o vanidad.'
        },
        {
          enunciado: '¿Para qué sirve cronometrar el ensayo antes de sustentar?',
          opciones: [
            'Para impresionar al profe',
            'Es trámite sin utilidad',
            'Para perder tiempo',
            'Para detectar si tu tiempo se ajusta a lo asignado y ajustar antes'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Si en el ensayo te pasas o no llegas, ajustas. Mejor descubrir el problema en privado que en público.',
          feedbackIncorrecto: 'Cronometrar el ensayo te permite ajustar tiempos antes del fracaso público. Es disciplina profesional, no trámite.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'La sustentación es darle voz pública a tu estudio. ¿Qué te cuesta más: hablar en público, recibir crítica, o reconocer lo que no sabes? ¿Por qué?',
    transferencia: 'Mañana sustenta tu mini-estudio en 4 minutos. Cronométrate. Pide retroalimentación honesta a un compañero. Mejora antes de la próxima sustentación.',
    cierre: 'La asamblea del cabildo y la sustentación digital comparten una verdad: la palabra dada en público se sostiene con evidencia. La phronesis es habilidad de ciudadano informado.'
  },
  saberAncestral: {
    saber: 'En los pueblos del Valle del Cauca había un ritual antiguo que cualquier aprendiz de oficio debía pasar antes de ser reconocido como oficial: contar a los mayores lo que aprendió. El aprendiz de carpintero, después de un año en el taller, se sentaba frente al maestro y a 2-3 oficiales viejos, y debía explicar con sus propias palabras: cómo elegir la madera, cómo afilar la herramienta, cómo ensamblar sin clavos. No bastaba con haber trabajado bien: había que poder contarlo. Los mayores hacían preguntas duras: "¿qué haces si la madera se raja al lijarla?", "¿cómo decides la pendiente del techo?". El aprendiz que respondía con honestidad (incluso reconociendo lo que no sabía) era reconocido como oficial. El que inventaba respuestas para impresionar era devuelto al taller por otro año. La sabiduría era inquebrantable: el oficio se demuestra hablando, no solo haciendo. Esa práctica antigua del cuentista del fogón aplicada al oficio es la forma ancestral de la sustentación oral profesional moderna.',
    fuente: 'Asambleas trimestrales en cabildos indígenas colombianos (Misak, Nasa, Kogui, Wayuu)',
    preguntaPuente: '¿Qué sabía el aprendiz de oficio al sentarse frente a los mayores para defender lo aprendido, que el estudiante novato olvida cuando confunde sustentar con leer las slides? ¿Y por qué un sustentante que reconoce limitaciones con elegancia es más respetado que uno que las esconde?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La voz del aprendiz que devuelve a la comunidad lo aprendido cierra el ciclo de la pedagogía liberadora.',
      preguntaEspejo: '¿Mi sustentación devolvió algo útil al grupo, o solo cumplí con un requisito?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Decir las cosas como son ante la audiencia es valor; inflar el hallazgo para impresionar es debilidad.',
      preguntaEspejo: '¿Inflé mi hallazgo para sonar más impresionante, o lo presenté con honestidad de muestra y método?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La comunicación responsable es la nueva ética del oficio en la era de la información veloz.',
      preguntaEspejo: '¿Mi sustentación podría ser citada con honestidad, o alguien la usaría para conclusiones que mi estudio no soporta?'
    }
  },
  cincoDimensiones: {
    personal: 'Cerraste el periodo dándole voz pública a tu trabajo — habilidad que la mayoría de adultos no entrena.',
    emocional: 'Sentiste el nervio de hablar ante el grupo y lo sostuviste — entrenamiento real de presencia profesional.',
    ciudadana: 'Practicaste palabra pública sustentada con datos. Esa habilidad es base de la deliberación democrática.',
    local: 'Heredaste el ritual de la asamblea del cabildo: presentar, escuchar, ajustar, sin pretender certeza absoluta.',
    intergeneracional: 'El miembro del cabildo Misak que sustentaba la cosecha y tú con tu mini-estudio comparten gramática: palabra pública con evidencia.'
  }
};

export default contenido;
