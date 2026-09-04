/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 10
 * (sesión global 10).
 *
 * Auto-generado desde content/guias/7/7-1-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 10,
  titulo: 'Cosecha del periodo — mi primer proyecto colaborativo',
  resumen: 'Esta es la cosecha del periodo 1.',
  duracionMin: 90,
  subtema: 'Cosecha del periodo — mi primer proyecto colaborativo',
  preLectura: {
    porQueImporta: 'El producto es la carpeta compartida con los 5 entregables + reunión Teams al profe.',
    preguntaDetonante: 'Ahora que tu equipo va a hacer un proyecto colaborativo real (no de práctica), ¿cómo se diferenciará de los trabajos en grupo de años anteriores? ¿Qué hábitos nuevos van a usar?',
    activacion: {
      titulo: 'Equipo + tema + acuerdos',
      descripcion: 'Actividad 1 · IDENTIFICA — Equipo + tema + acuerdos (10 min · equipo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: formas equipo y acuerdan tema, distribuyen roles, ejecutan los 5 entregables, sustentan al profe.',
      siguiente: 'La S11 cierra formalmente el periodo: autoevaluación con rúbrica visible, examen integrador, mirada al periodo 2.'
    }
  },
  conceptosClave: [
    {
      termino: 'Proyecto colaborativo',
      definicion: 'Trabajo de equipo que integra múltiples habilidades en un solo entregable. Se diferencia de tareas individuales porque requiere organización, distribución de roles, comunicación y reciprocidad. Es la forma adulta de producir en universidad y trabajo.',
      ejemplo: 'Wikipedia es proyecto colaborativo mundial. Tu mini-proyecto P1 con 2 compañeros es la versión escolar: misma lógica de organización + roles + entrega final.',
      emoji: '🚀'
    },
    {
      termino: '5 entregables del proyecto',
      definicion: 'Los 5 productos del mini-proyecto P1: (1) Word colaborativo, (2) Excel con dato, (3) PowerPoint resumen, (4) Bitácora colaborativa, (5) Sustentación Teams. Cada uno con peso específico en la rúbrica.',
      ejemplo: 'Word: 30%. Excel: 15%. PowerPoint: 15%. Bitácora: 20%. Sustentación: 20%. Total: 100%. La bitácora pesa tanto como la sustentación: el proceso importa.',
      emoji: '📦'
    },
    {
      termino: 'Bitácora colaborativa',
      definicion: 'Documento donde cada integrante registra su proceso individual en el proyecto: qué hizo, qué funcionó, qué se complicó, qué haría diferente. Es lo que demuestra el proceso (no solo el producto).',
      ejemplo: 'Cada integrante escribe SU entrada en el mismo Word compartido. Las 3 entradas juntas forman la bitácora del equipo. El profe la lee para entender cómo trabajaron, no solo qué entregaron.',
      emoji: '📓'
    },
    {
      termino: 'Sustentación virtual',
      definicion: 'Presentación oral del proyecto vía reunión Teams. El equipo presenta su trabajo al profe usando el PowerPoint. Cada integrante habla de su sección. El profe puede preguntar. Es ejercicio profesional clave.',
      ejemplo: 'Reunión Teams 10 minutos: cada uno habla 2-3 min. Se comparte pantalla con el PowerPoint. El profe pregunta. Es como una mini-defensa de tesis para 7° grado.',
      emoji: '🎤'
    },
    {
      termino: 'Rúbrica de 10 criterios',
      definicion: 'Los 10 criterios con los que el profe evalúa el proyecto, cada uno calificado de 1 a 5. Cubre organización, calidad de entregables individuales y trabajo en equipo. Conocerla desde el inicio permite producir según los criterios.',
      ejemplo: 'Criterio 7: \'Coautoría real (todos contribuyeron al Word)\' = 5 si los 3 escribieron secciones distintas; 1 si uno solo hizo todo. Conocerlo te incentiva a distribuir el trabajo.',
      emoji: '📋'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Tu cosecha del periodo 1 quedó bien?',
      instrucciones: '5 preguntas para verificar que tu equipo entregó completo según la rúbrica.',
      preguntas: [
        {
          enunciado: '¿Cuáles son los 5 entregables del proyecto?',
          opciones: [
            'Solo el Word.',
            'Solo PowerPoint.',
            'Word + PDF.',
            'Word + Excel + PowerPoint + Bitácora colaborativa + Sustentación Teams.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Los 5 entregables son interdependientes: Word es la base, Excel da datos, PowerPoint resume, bitácora documenta proceso, sustentación demuestra al profe.',
          feedbackIncorrecto: '5 entregables: Word, Excel, PowerPoint, Bitácora, Sustentación. Cada uno tiene peso. Faltar 1 baja drásticamente la nota del equipo.'
        },
        {
          enunciado: 'Un integrante hizo todo y los otros 2 firman. ¿Qué nota saca el equipo según la rúbrica?',
          opciones: [
            'Mala: los criterios de organización, coautoría real y sustentación bajan mucho. Los que no aportaron sacan menos puntos.',
            '100% (entregaron a tiempo).',
            'Es la misma para todos siempre.',
            'Depende del clima.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. La rúbrica evalúa coautoría real y participación individual. Si uno solo hizo todo, los criterios 1 (organización), 7 (coautoría) y 9 (todos sustenten) bajan.',
          feedbackIncorrecto: 'La rúbrica detecta cuando uno solo hizo todo. Criterios 1, 7 y 9 bajan. Los que no aportaron sacan menos en su nota individual. Por eso conviene distribuir bien.'
        },
        {
          enunciado: '¿Por qué importa la bitácora colaborativa (20% del peso)?',
          opciones: [
            'Es relleno.',
            'Demuestra el proceso del equipo: cómo se organizaron, qué se complicó, qué aprendieron. No solo el producto sino el cómo.',
            'Es opcional.',
            'Solo importa el producto final.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La bitácora cuenta el proceso. Un producto perfecto sin bitácora oculta cómo se hizo; una bitácora sincera muestra el aprendizaje real del equipo.',
          feedbackIncorrecto: 'Bitácora = proceso, no solo producto. Es 20% porque el profe quiere saber cómo trabajaron, no solo qué entregaron. El aprendizaje está en el proceso.'
        },
        {
          enunciado: 'En la sustentación Teams, ¿quién debe hablar?',
          opciones: [
            'Solo el líder del equipo.',
            'El profe.',
            'Todos los integrantes, 2-3 minutos cada uno sobre su sección.',
            'Nadie, solo se muestra el PowerPoint.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Todos los integrantes hablan de su sección. El profe quiere ver que cada uno domina lo suyo. Si uno solo presenta, baja el criterio 9.',
          feedbackIncorrecto: 'Todos los integrantes deben hablar. Cada uno presenta su sección. Si uno solo presenta, los otros 2 no demostraron dominio y baja la nota colectiva.'
        },
        {
          enunciado: 'Tu equipo terminó el proyecto. ¿Qué hacen ANTES de mandar el correo final al profe?',
          opciones: [
            'Nada, simplemente mandan.',
            'Autoevalúan con la rúbrica de 10 criterios y ajustan los puntos débiles si es posible.',
            'Borran la carpeta de OneDrive.',
            'Cambian todos los nombres de archivos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Autoevaluación previa con rúbrica te da oportunidad de corregir antes de entregar. El profe valora que el equipo conozca sus puntos débiles y los haya intentado mejorar.',
          feedbackIncorrecto: 'Autoevaluación con rúbrica antes de entregar. Si un criterio quedó débil, ajustan si es posible. Entregar conociendo las debilidades es señal de madurez del equipo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cómo me sentí trabajando con otros en esta minga digital? ¿Más sólido o más débil que trabajando solo?',
    transferencia: 'La S11 cierra formalmente el periodo: autoevaluación con rúbrica visible, examen integrador, mirada al periodo 2.',
    cierre: 'Al terminar la clase: (1) podrás integrar las 9 habilidades del periodo en un solo entregable; (2) sabrás aplicar el protocolo de equipo (roles + tiempos + comunicación); (3) podrás evaluar el proceso de tu equipo con bitácora; (4) habrás entregado el mini-proyecto al profe vía O…'
  },
  saberAncestral: {
    saber: 'El último día de la minga grande no se trabajaba: se celebraba. En la finca cafetera del Valle del Cauca, cuando los 30 trabajadores terminaban de cosechar el último cafetal, el dueño no decía "ya, váyanse". Decía: "vengan al patio, ya hay almuerzo". Las cocineras habían preparado durante el día un sancocho grande con gallina, arroz, plátano, yuca. Todos se sentaban juntos a la mesa larga. Mientras comían, conversaban: "vimos que don Pedro fue el más rápido", "este año la cosecha fue mejor que la del año pasado", "hay que invitar al primo Aurelio el próximo sábado". Ese almuerzo no era solo comida: era el cierre formal de la minga. Donde se reconocía el trabajo, se evaluaba lo aprendido, se preparaba la siguiente. Sin ese cierre, la minga quedaba incompleta. Hoy tu equipo de 3 cierra el periodo con su propia "minga digital": un mini-proyecto que reúne todo lo aprendido en P1, presentado al profe, archivado en OneDrive.',
    preguntaPuente: 'Ahora que tu equipo va a hacer un proyecto colaborativo real (no de práctica), ¿cómo se diferenciará de los trabajos en grupo de años anteriores? ¿Qué hábitos nuevos van a usar?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del cumplimiento colectivo)',
      lente: 'lente del nosotros',
      cita: '"Lo que se completa con otros pesa más que lo que se completa solo. La obra colectiva nos hace más humanos."',
      preguntaEspejo: '¿Cómo me sentí trabajando con otros en esta minga digital? ¿Más sólido o más débil que trabajando solo?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Termina lo que empezaste. La obra cumplida da paz; la obra inconclusa pesa siempre."',
      preguntaEspejo: '¿Estoy cerrando los proyectos completos o los dejo a medias por costumbre?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del trabajo digital integrado)',
      lente: 'lente de la infoesfera',
      cita: '"El primer proyecto colaborativo digital es un rito de paso. Después de él, ya no piensas igual la tecnología."',
      preguntaEspejo: '¿Cómo cambió mi forma de ver Microsoft 365 después de hacer mi primer proyecto colaborativo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás integrar las 9 habilidades del periodo en un solo entregable; (2) sabrás aplicar el protocolo de equipo (roles + tiempos + comunicación); (3) podrás evaluar el proceso…',
    emocional: 'Hoy cierras un periodo: empezaste en S1 con la apertura, terminaste en S10 con la cosecha.',
    ciudadana: 'Acabaste tu primer proyecto colaborativo digital.',
    local: 'Antes de sustentar, autoevalúan con la rúbrica de 10 criterios.',
    intergeneracional: 'Antes de este proyecto, Microsoft 365 era un paquete de apps sueltas.'
  }
};

export default contenido;
