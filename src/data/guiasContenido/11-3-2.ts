/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/11/11-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 2,
  titulo: 'Validación — hablar antes de construir',
  resumen: 'La validación en metodologías contemporáneas (Customer Discovery de Steve Blank, Mom Test de Rob Fitzpatrick, Lean Startup de Eric Ries) es la práctica de conversar con afectados reales antes de construir nada.',
  duracionMin: 90,
  subtema: 'Validación — hablar antes de construir',
  preLectura: {
    porQueImporta: 'El criterio principal: que un consultor leyendo tu síntesis pueda decir "con esta evidencia, la decisión está bien tomada", sin tener que confiar en tu palabra.',
    preguntaDetonante: '¿Qué sabía el campesino al consultar a la abuela antes de sembrar, que el emprendedor novato olvida cuando lanza su proyecto sin hablar con un afectado? ¿Y por qué "¿usarías mi app?" es la peor pregunta de validación posible, aunque parezca la más natural?',
    activacion: {
      titulo: 'Lista cerrada de 5 entrevistados',
      descripcion: 'Actividad 1 · IDENTIFICA — Lista cerrada de 5 entrevistados (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy lo contrastas con la realidad: 5 entrevistas a personas reales que sufren ese problema.',
      siguiente: 'En la sesión 3 vas a transformar lo validado en modelo de negocio con el Business Model Canvas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Validación con entrevistas',
      definicion: 'Práctica de hablar con 5+ personas afectadas por el problema ANTES de construir solución. Cada entrevista verifica si la hipótesis inicial sobrevive contacto con la realidad.',
      ejemplo: 'Entrevistas a 5 tenderos para validar la hipótesis "necesitan Excel". Dos dicen "ya uso WhatsApp para cuentas, no me sirve Excel". Eso pivotea la solución antes de construir.',
      emoji: '🎤'
    },
    {
      termino: 'Guion de entrevista (7 preguntas)',
      definicion: 'Documento previo con 7 preguntas que dirigen la entrevista sin sesgar. Mezcla preguntas abiertas (¿cómo lo haces hoy?) con preguntas específicas (¿cuánto tiempo te toma?).',
      ejemplo: 'Para tenderos: (1) ¿Cómo llevas las cuentas? (2) ¿Cuánto tiempo te toma cada semana? (3) ¿Qué intentaste antes? (4) ¿Qué pagarías por algo que te ayude? + 3 más.',
      emoji: '📝'
    },
    {
      termino: 'Síntesis de 4 bloques',
      definicion: 'Después de las 5 entrevistas, organizas hallazgos en 4 bloques: (1) lo que confirmé, (2) lo que descarté, (3) lo que no esperaba, (4) decisión de seguir o pivotar.',
      ejemplo: 'Confirmé: 4/5 quieren ayuda. Descarté: WhatsApp ya resuelve para 1. Inesperado: querían capacitación, no app. Decisión: pivotear de "app" a "taller presencial".',
      emoji: '📊'
    },
    {
      termino: 'Hablar antes de construir',
      definicion: 'Regla central del Customer Discovery. La mayoría de los emprendimientos fracasan porque construyen antes de hablar con usuarios. Cada hora de entrevista ahorra semanas de desarrollo equivocado.',
      ejemplo: 'En vez de programar 2 meses una app, dedicas 1 semana a entrevistar 5 usuarios. Si el problema no es lo que pensabas, ahorras 7 semanas de trabajo perdido.',
      emoji: '🗣️'
    },
    {
      termino: 'Sesgo de confirmación en entrevistas',
      definicion: 'Tendencia natural a oír solo lo que confirma tu idea inicial. Para evitarlo: preguntas abiertas, dejar que el entrevistado hable, no defender tu idea, anotar lo incómodo.',
      ejemplo: 'Si preguntas "¿no te gustaría una app que ayude?", sesgas a sí. Mejor: "¿cómo resuelves esto hoy?". Dejas que el entrevistado describa la realidad sin tu sugerencia.',
      emoji: '🚫'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes validar antes de construir?',
      instrucciones: '5 preguntas sobre entrevistas de validación.',
      preguntas: [
        {
          enunciado: 'Quieres validar tu hipótesis de proyecto. ¿Qué haces primero?',
          opciones: [
            'Programo el MVP.',
            'Subo a Instagram para ver likes.',
            'Pido permiso a un inversionista.',
            'Entrevisto a 5+ personas afectadas por el problema con un guion de 7 preguntas.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Hablar antes de construir. 5 entrevistas suelen ser suficientes para detectar si la hipótesis sobrevive. Cada hora de entrevista ahorra semanas de desarrollo equivocado.',
          feedbackIncorrecto: 'Entrevistas primero. Sin validación con usuarios reales, construir es apostar. 5+ entrevistas con guion de 7 preguntas mínimo.'
        },
        {
          enunciado: '¿Cuál pregunta en entrevista produce MENOS sesgo?',
          opciones: [
            '¿Cómo resuelves esto hoy?',
            '¿No te encantaría una app que resuelva esto?',
            '¿Verdad que mi idea es buena?',
            '¿Me ayudarías comprando mi producto?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Pregunta abierta sin sugerir respuesta. El entrevistado describe la realidad sin tu influencia. Sesgo de confirmación minimizado.',
          feedbackIncorrecto: 'Preguntas abiertas neutras dan datos reales. Las preguntas que sugieren respuesta ("¿no te gustaría...?") sesgan al sí y dan datos falsos.'
        },
        {
          enunciado: 'Después de 5 entrevistas, ¿qué entregas?',
          opciones: [
            'Solo los audios.',
            'Solo un párrafo de impresiones.',
            'Síntesis de 4 bloques: confirmé / descarté / inesperado / decisión seguir-pivotar.',
            'Una infografía bonita.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. 4 bloques estructurados convierten datos crudos en decisión. Sin esa síntesis, las entrevistas se vuelven anécdotas perdidas.',
          feedbackIncorrecto: 'Síntesis estructurada en 4 bloques. Confirmar + descartar + inesperado + decidir. Sin esa estructura, las entrevistas no producen decisión.'
        },
        {
          enunciado: 'Tu hipótesis no sobrevive las entrevistas. ¿Es fracaso?',
          opciones: [
            'Sí, fracaso total.',
            'No. Es éxito: encontraste la falla en 1 semana, no en 6 meses. Pivotas con criterio.',
            'Es que las entrevistas estaban mal.',
            'Mejor ignoro los datos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Hipótesis invalidada en 1 semana es éxito del método. Lo que fracasa es construir 6 meses para después descubrir lo mismo.',
          feedbackIncorrecto: 'Hipótesis invalidada temprano es éxito, no fracaso. Significa que ahorraste meses de trabajo equivocado. Pivotear con datos es maduración emprendedora.'
        },
        {
          enunciado: 'Tu entrevistado dice algo que no esperabas. ¿Qué haces?',
          opciones: [
            'Lo ignoro, no encaja con mi idea.',
            'Le digo que está equivocado.',
            'Cambio de tema.',
            'Lo anoto en el bloque \'lo que no esperaba\'. Suele ser el hallazgo más valioso.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Lo inesperado es oro. Las hipótesis se cumplen o no; lo inesperado abre dimensiones nuevas del problema. Anótalo.',
          feedbackIncorrecto: 'Lo inesperado es el hallazgo más valioso. Si lo ignoras, pierdes la dimensión nueva. Anota y revisa después si abre una pista para pivotar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'En mis entrevistas, ¿escuché de verdad o solo busqué confirmación? ¿Hablé yo más o habló el entrevistado? ¿Acepté lo que dijo cuando contradijo mi idea?',
    transferencia: 'En la sesión 3 vas a transformar lo validado en modelo de negocio con el Business Model Canvas.',
    cierre: 'Al terminar podrás: (1) identificar 5 personas afectadas reales y agendarlas para entrevista esta semana; (2) analizar la diferencia entre preguntas malas (hipotéticas, sugerentes, de aprobación) y preguntas buenas (de pasado concreto, abiertas, neutras); (3) explicar qué dice el…'
  },
  saberAncestral: {
    saber: 'En las veredas del Valle del Cauca y en los cabildos indígenas del Pacífico, antes de iniciar cualquier obra nueva había una costumbre obligatoria: ir a hablar con los mayores. Antes de sembrar un cultivo nuevo, se consultaba a la abuela campesina que conocía la luna; antes de construir una casa, se hablaba con el albañil viejo que sabía la pendiente; antes de abrir un negocio en la plaza, se preguntaba a los vendedores del lugar qué pasaba con sus clientes. No era trámite ni cortesía: era validación de la realidad. La persona que actuaba sin consultar a quien sabía era llamada terco o novato, y casi siempre fracasaba en el primer año. La sabiduría barrial y rural sostiene una verdad incómoda para el emprendedor moderno: lo que tú crees del mundo y lo que el mundo es no coinciden hasta que preguntas.',
    preguntaPuente: '¿Qué sabía el campesino al consultar a la abuela antes de sembrar, que el emprendedor novato olvida cuando lanza su proyecto sin hablar con un afectado? ¿Y por qué "¿usarías mi app?" es la peor pregunta de validación posible, aunque parezca la más natural?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El afectado es el primer epistemólogo del problema; nadie sabe del dolor mejor que quien lo sufre.',
      preguntaEspejo: 'En mis entrevistas, ¿escuché de verdad o solo busqué confirmación? ¿Hablé yo más o habló el entrevistado? ¿Acepté lo que dijo cuando contradijo mi idea?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La evidencia contraria es regalo, no insulto. El sabio cambia de opinión cuando los datos lo exigen.',
      preguntaEspejo: 'Si mis 5 entrevistas contradijeran mi hipótesis, ¿tendría la valentía de pivotar hoy, o seguiría adelante por orgullo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Decidir sin datos cuando los datos están al alcance es la nueva forma de irresponsabilidad profesional.',
      preguntaEspejo: '¿Estoy decidiendo mi proyecto con base en 5 conversaciones reales, o con base en lo que yo imagino del mundo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar 5 personas afectadas reales y agendarlas para entrevista esta semana; (2) analizar la diferencia entre preguntas malas (hipotéticas, sugerentes, de aprobación) y pr…',
    emocional: 'Es tentador defender tu hipótesis cuando un entrevistado la contradice.',
    ciudadana: 'Tu validación es ética antes de ser metodológica.',
    local: 'Antes de cerrar, mira la validación desde las cinco dimensiones humanas.',
    intergeneracional: 'Antes de internet, decidir sin datos era inevitable: la información era costosa.'
  }
};

export default contenido;
