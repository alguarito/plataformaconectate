/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/8/8-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 2,
  titulo: 'Tablas de verdad — AND, OR, NOT como reglas universales',
  resumen: 'Como el juego "verdadero o falso" de las abuelas: cuidar la coherencia entre afirmaciones. Aprendes a construir tablas de verdad para verificar lógica antes de programar.',
  duracionMin: 90,
  subtema: 'Lógica · Tablas de verdad · AND/OR/NOT',
  preLectura: {
    porQueImporta: 'Saber construir tablas de verdad te da poder sobre la lógica: detectas reglas mal escritas, contradicciones invisibles, expresiones equivalentes. Es habilidad de analista, no solo de programador.',
    preguntaDetonante: '¿Qué del juego de las abuelas — el cuidado de la consistencia entre afirmaciones — podemos llevar a las tablas de verdad de la programación?',
    activacion: {
      titulo: 'La regla familiar mal entendida',
      descripcion: 'En 5 minutos: en parejas recuerden una regla familiar (de casa o colegio) donde alguien la entendió distinto. ¿Era un AND o un OR mal interpretado? La tabla de verdad lo aclararía.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 11 aprendiste estructuras condicionales con AND/OR/NOT.',
      siguiente: 'En la sesión 13 representarás algoritmos con pseudocódigo y diagramas de flujo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Tabla de verdad',
      definicion: 'Diagrama que muestra el resultado de un operador lógico para todas las combinaciones posibles de entrada. Herramienta de verificación formal.',
      ejemplo: 'Para AND con 2 entradas (V,V→V; V,F→F; F,V→F; F,F→F). Las 4 filas cubren todos los casos posibles.',
      emoji: '📋'
    },
    {
      termino: 'Combinaciones 2^n',
      definicion: 'Fórmula que da el número de filas de una tabla de verdad. Con n condiciones binarias hay 2^n combinaciones distintas.',
      ejemplo: '2 condiciones = 4 filas. 3 = 8. 4 = 16. La tabla crece exponencialmente con cada condición añadida.',
      emoji: '🧮'
    },
    {
      termino: 'Tautología',
      definicion: 'Expresión lógica que es verdadera en todos los casos. Tabla de verdad con la columna resultado siempre V.',
      ejemplo: '"Llueve O NO llueve" es tautología: siempre verdadera. No aporta información: siempre se cumple.',
      emoji: '♾'
    },
    {
      termino: 'Contradicción',
      definicion: 'Expresión lógica que es falsa en todos los casos. Tabla de verdad con la columna resultado siempre F.',
      ejemplo: '"Llueve Y NO llueve" es contradicción: nunca se cumple. Imposible que ambas sean verdaderas simultáneamente.',
      emoji: '⛔'
    },
    {
      termino: 'Grieta lógica',
      definicion: 'Combinación de entradas que la regla no contempla con claridad. Caso sin respuesta definida en el algoritmo.',
      ejemplo: 'Regla "si nota≥3 y asistencia≥80% aprueba" no define qué pasa con nota 3 y asistencia 75%. Grieta a cerrar.',
      emoji: '🕳'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes construir tabla de verdad?',
      instrucciones: '5 preguntas para verificar que dominas tablas de verdad de AND/OR/NOT y reconoces tautologías y contradicciones.',
      preguntas: [
        {
          enunciado: 'Para AND con 2 entradas, ¿cuántas combinaciones resultan en V (verdadero)?',
          opciones: [
            '1 de 4',
            '0 de 4',
            '2 de 4',
            '4 de 4'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Solo (V,V)→V. Las otras 3 combinaciones dan F. AND es muy restrictivo.',
          feedbackIncorrecto: 'AND solo da V cuando ambas entradas son V. Es 1 de 4 (solo V,V→V).'
        },
        {
          enunciado: 'Para OR con 2 entradas, ¿cuántas combinaciones resultan en F (falso)?',
          opciones: [
            '0 de 4',
            '1 de 4',
            '2 de 4',
            '4 de 4'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Solo (F,F)→F. Las otras 3 combinaciones dan V. OR es permisivo.',
          feedbackIncorrecto: 'OR solo da F cuando ambas entradas son F. Es 1 de 4 (solo F,F→F).'
        },
        {
          enunciado: 'Con 4 condiciones binarias en un algoritmo, ¿cuántas filas tendría la tabla de verdad?',
          opciones: [
            '4',
            '8',
            '16',
            '32'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. 2^4 = 16 combinaciones posibles. La tabla crece rápido con cada condición nueva.',
          feedbackIncorrecto: '2^4 = 16. Con cada condición la tabla se duplica.'
        },
        {
          enunciado: '"Llueve O NO llueve" es una expresión que en todos los casos es V. ¿Cómo se llama?',
          opciones: [
            'Contradicción',
            'Grieta lógica',
            'Ambigüedad',
            'Tautología'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Una tautología es expresión siempre verdadera. No aporta información porque se cumple en todos los casos.',
          feedbackIncorrecto: 'Es tautología: siempre verdadera. La contradicción es lo opuesto (siempre falsa).'
        },
        {
          enunciado: 'La regla del colegio dice "aprobado si nota≥3 Y asistencia≥80%". Con nota 3 y asistencia 75%, ¿qué pasa?',
          opciones: [
            'Reprobado',
            'Aprobado',
            'Hay grieta lógica porque la regla no lo aclara',
            'Se decide por otro criterio'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Como nota≥3 (V) Y asistencia≥80% (F), el AND da F. Reprobado por incumplir asistencia. La regla SÍ lo cubre.',
          feedbackIncorrecto: 'La regla cubre el caso: con AND, basta que una falle. Asistencia 75% es F en "≥80%". AND da F = Reprobado.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Las tablas de verdad son herramientas para detectar contradicciones y aclarar reglas. ¿En qué reglas de tu vida (familia, colegio, trabajo) sería útil aplicarlas?',
    transferencia: 'Esta semana: encuentra una regla escrita (en redes, en un reglamento, en una promoción) que use "y" u "o". Construye su tabla de verdad. ¿Es coherente? ¿Hay casos no contemplados?',
    cierre: 'El juego de las abuelas y la lógica formal comparten propósito: la palabra dada se sostiene cuando es coherente consigo misma.'
  },
  saberAncestral: {
    saber: 'En las comunidades indígenas del Pacífico colombiano, en los cabildos del Cauca y en las juntas de acción comunal de los barrios populares, había una figura que tomaba decisiones difíciles con una sabiduría que parecía simple pero era profunda: el juez tradicional o el mayor de la comunidad. Cuando dos vecinos discutían sobre un lindero, cuando alguien era acusado de robo, cuando se decidía si un joven podía entrar al cabildo, el mayor aplicaba reglas claras que la comunidad entera conocía. Tres principios silenciosos guiaban su juicio: (1) Para condenar se necesitan dos pruebas (testigo Y evidencia material): la lógica del AND. Una sola no basta. (2) Para absolver basta una duda razonable: la lógica del OR. Cualquier elemento que ponga la culpa en duda, libera. (3) Para mantener la justicia, ninguna mentira en el testimonio: la lógica del NOT. La falsedad en una sola pieza derrumba todo el juicio. La sabiduría era inquebrantable: la justicia tradicional ya operaba con tablas de verdad mucho antes de que la matemática las inventara con ese nombre. Las tablas de verdad de la lógica formal solo formalizan reglas que las comunidades aplicaron durante siglos.',
    fuente: 'Juego de "verdadero o falso" en cocinas y patios del Valle y el Pacífico',
    preguntaPuente: '¿Qué sabía el mayor del cabildo al exigir dos pruebas para condenar pero solo una duda para absolver, que el novato olvida cuando construye reglas sin verificar todas las combinaciones? ¿Y por qué una tabla de verdad de 4 filas puede revelar una contradicción que el ojo no detecta?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una regla que no cubre todos los casos repite la lógica del sistema que excluye a quien queda en la grieta.',
      preguntaEspejo: '¿Mis reglas cubren todos los casos posibles, o dejo grietas que excluirían a alguien?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Verificar antes de aceptar es virtud; aceptar reglas sin tabular es debilidad disfrazada de confianza.',
      preguntaEspejo: '¿Estoy verificando lógicamente las reglas que me presentan, o las acepto porque suenan bien?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La lógica formal explícita es la nueva ética del oficio en la era de los algoritmos invisibles.',
      preguntaEspejo: '¿Podría auditar un algoritmo real (préstamo, admisión, recomendación) con las tablas de verdad que aprendí hoy?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a probar la coherencia lógica de cualquier regla — herramienta para defenderte de reglamentos mal escritos.',
    emocional: 'Sentiste la satisfacción de detectar una contradicción que estaba a la vista pero nadie había nombrado.',
    ciudadana: 'La lógica formal aplicada a reglamentos, leyes y promociones es defensa ciudadana cotidiana.',
    local: 'Heredaste el juego de las abuelas: probar la coherencia de la palabra antes de aceptarla.',
    intergeneracional: 'El juego de patio y la lógica matemática comparten gramática. La palabra dada se sostiene cuando es coherente consigo misma — antes y ahora.'
  }
};

export default contenido;
