/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 9
 * (sesión global 9).
 *
 * Auto-generado desde content/guias/10/10-1-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 9,
  titulo: 'Producción final del libro — 80 páginas compiladas, revisadas y firmadas',
  resumen: 'La producción final del libro integra todo lo recorrido en las 8 sesiones anteriores en un PDF compilado de al menos 80 páginas listo para circular.',
  duracionMin: 90,
  subtema: 'Producción final del libro — 80 páginas compiladas, revisadas y firmadas',
  preLectura: {
    porQueImporta: 'El criterio principal: que cualquiera abriendo tu PDF reconozca una pieza profesional, no documento escolar improvisado.',
    preguntaDetonante: '¿Qué sabía el aprendiz al grabar su nombre en la pieza maestra ante el maestro y los oficiales viejos, que el estudiante novato olvida cuando entrega un PDF sin haber revisado ni firmado? ¿Y por qué la carta del editor es la pieza más profesional del libro, aunque sea solo 1 página?',
    activacion: {
      titulo: 'Inventario completo de lo producido',
      descripcion: 'Actividad 1 · ANALIZA — Inventario completo de lo producido (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Has recorrido 8 sesiones: editor, concepción, prompting, iteración, estructura, derechos, portada, diagramación.',
      siguiente: 'Llega con el PDF final del libro, la carta del editor firmada y la bitácora del periodo.'
    }
  },
  conceptosClave: [
    {
      termino: 'PDF compilado',
      definicion: 'Documento final del libro en un solo archivo de al menos 80 páginas, listo para distribuir.',
      ejemplo: 'Portada, créditos, índice, capítulos diagramados y contraportada en un PDF que se abre en cualquier lector.',
      emoji: '📚'
    },
    {
      termino: 'Página de créditos',
      definicion: 'Página con año, autor, licencia (CC o reservados) y declaración de uso de IA. Es transparencia editorial.',
      ejemplo: '"Este libro se produjo con apoyo de ChatGPT. El editor intervino al menos en el 30% del texto final."',
      emoji: '📃'
    },
    {
      termino: 'Tabla de contenido autogenerada',
      definicion: 'Índice de capítulos producido por la herramienta a partir de los estilos del libro. Mantiene numeración correcta automáticamente.',
      ejemplo: 'En Google Docs, Insertar → Tabla de contenido la genera de los títulos marcados como "Título 1".',
      emoji: '🗂️'
    },
    {
      termino: 'Carta del editor',
      definicion: 'Pieza nueva y esencial. 1 página en primera persona donde declaras el proceso, uso de IA, logros y mejoras posibles.',
      ejemplo: '"Este libro nació de la pregunta sobre amistades digitales. Usé Bing y Claude. Reescribí 35%. Lo firmo con orgullo."',
      emoji: '✍️'
    },
    {
      termino: 'Checklist de revisión (12 puntos)',
      definicion: 'Lista que cubre contenido, forma, derechos y voz propia. El libro no se entrega antes de pasarlo todo.',
      ejemplo: '¿Portada? ¿Créditos? ¿Índice? ¿Capítulos numerados? ¿Carta firmada? ¿Declaración de IA? Y así hasta 12.',
      emoji: '✅'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Tu libro está listo para circular?',
      instrucciones: '5 preguntas para verificar que tu PDF final cumple los 6 componentes.',
      preguntas: [
        {
          enunciado: '¿Cuántas páginas mínimas pide la producción final del libro?',
          opciones: [
            '10',
            '80',
            '500',
            '1000'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 80 páginas mínimas. Es escala que obliga a sostener voz, estructura y oficio editorial.',
          feedbackIncorrecto: 'Son 80 páginas mínimas. Es la escala que demuestra capacidad editorial sostenida.'
        },
        {
          enunciado: '¿Qué componente NUEVO introduce esta sesión, distinto del libro tradicional?',
          opciones: [
            'El índice',
            'La carta del editor firmada',
            'La portada',
            'La contraportada'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La carta del editor declara proceso, uso de IA y postura. Es transparencia editorial contemporánea.',
          feedbackIncorrecto: 'La carta del editor. Pieza esencial que declara honestamente el proceso y el uso de IA.'
        },
        {
          enunciado: '¿Cuántos puntos típicos tiene el checklist de revisión?',
          opciones: [
            '1',
            '12',
            '100',
            '1000'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 12 puntos. Cubren contenido, forma, derechos y voz propia.',
          feedbackIncorrecto: 'Son 12. Si los pasas todos, el libro está listo para entrega.'
        },
        {
          enunciado: 'La página de créditos debe incluir...',
          opciones: [
            'Solo el autor',
            'Año, autor, licencia y declaración de uso de IA',
            'Solo el precio',
            'Solo el ISBN'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La transparencia editorial pide declarar año, autor, licencia y uso de IA.',
          feedbackIncorrecto: 'Año, autor, licencia y declaración de uso de IA. Es transparencia editorial irrenunciable.'
        },
        {
          enunciado: 'La regla "el libro no se entrega antes de pasar checklist" significa que...',
          opciones: [
            'Hay que ahorrar tiempo saltando el checklist',
            'El checklist es paso obligado de calidad antes de circular',
            'El checklist es opcional',
            'Solo hay que revisar la portada'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El checklist es paso obligado. Saltarlo produce libros con detalles sueltos que dañan el oficio.',
          feedbackIncorrecto: 'El checklist es obligatorio antes de entregar. Saltarlo produce libros con detalles sueltos que dañan la pieza.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi carta del editor declara con honestidad el proceso, o intenta presentar el libro como obra puramente humana?',
    transferencia: 'Llega con el PDF final del libro, la carta del editor firmada y la bitácora del periodo.',
    cierre: 'Al terminar podrás: (1) analizar el material producido en las 8 sesiones anteriores y verificar que esté listo para integración; (2) evaluar el libro completo con el checklist de 12 puntos antes de declararlo final; (3) crear el PDF compilado de 80+ páginas con todos los componen…'
  },
  saberAncestral: {
    saber: 'En los talleres antiguos de carpintería, cerámica y orfebrería, hubo durante siglos un momento ritual que separaba al aprendiz del oficial: la firma de la pieza maestra. Después de un año de trabajo bajo el maestro, el aprendiz producía una pieza final que demostraba el oficio aprendido: una mesa con todas las uniones, un jarrón con todas las técnicas, un anillo con todos los procesos. Esa pieza no se entregaba cualquier día. Había un acto formal en el taller con el maestro y los oficiales viejos sentados alrededor. El aprendiz traía la pieza, la ponía sobre la mesa, la explicaba: "aquí usé esta técnica, esto lo aprendí del maestro, esto lo decidí yo, esto aún no domino del todo". Los mayores hacían preguntas. Si la defensa era sólida, el aprendiz tomaba un punzón y firmaba la pieza: grabar su nombre o marca en la base. Esa firma significaba 3 cosas al mismo tiempo: declarar autoría, asumir responsabilidad, certificar el oficio. La pieza con firma era certificación de competencia profesional. El libro de 80 páginas que entregas hoy es exactamente esa pieza maestra: producto final del aprendizaje del periodo, firmado con tu nombre, defendible ante cualquier audiencia.',
    preguntaPuente: '¿Qué sabía el aprendiz al grabar su nombre en la pieza maestra ante el maestro y los oficiales viejos, que el estudiante novato olvida cuando entrega un PDF sin haber revisado ni firmado? ¿Y por qué la carta del editor es la pieza más profesional del libro, aunque sea solo 1 página?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El libro firmado por el editor humano en la era de IA es acto de dignidad cultural que la cultura generativa necesita.',
      preguntaEspejo: '¿Mi carta del editor declara con honestidad el proceso, o intenta presentar el libro como obra puramente humana?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La disciplina del checklist antes de firmar es virtud profesional; el atajo de firmar sin revisar es vicio que se descubre con el tiempo.',
      preguntaEspejo: '¿Estoy pasando el checklist completo antes de declarar el libro final, o quiero terminar rápido y firmar?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El libro firmado con declaración honesta de IA es el modelo editorial del siglo XXI; ocultar el uso de IA es modelo obsoleto.',
      preguntaEspejo: '¿Mi libro contribuye al modelo editorial transparente del siglo XXI, o sostiene el modelo opaco que ya está obsoleto?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar el material producido en las 8 sesiones anteriores y verificar que esté listo para integración; (2) evaluar el libro completo con el checklist de 12 puntos antes de de…',
    emocional: 'Es tentador exportar el PDF y declararlo final apenas se cierra el último capítulo.',
    ciudadana: 'Cuando firmas tu libro con nombre, fecha y declaración de uso de IA, estás haciendo lo que la cultura generativa contemporánea necesita: seres humanos que asumen autoría con honestidad.',
    local: 'Antes de cerrar, mira la producción final desde las cinco dimensiones humanas.',
    intergeneracional: 'En 2026 y los años siguientes, los libros producidos con asistencia de IA serán mayoría.'
  }
};

export default contenido;
