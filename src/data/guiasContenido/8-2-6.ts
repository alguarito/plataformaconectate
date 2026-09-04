/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/8/8-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 6,
  titulo: 'Sensores con variables, umbrales y calibración',
  resumen: 'Como el reloj de sol del campesino: calibrar al lugar y a la estación. Aprendes a usar variables, definir umbrales con criterio y calibrar sensores al ambiente real.',
  duracionMin: 90,
  subtema: 'Sensores · Variables · Umbrales · Calibración',
  preLectura: {
    porQueImporta: 'Saber calibrar es lo que distingue un sensor confiable de uno que da falsas alarmas. Te servirá en cualquier proyecto futuro: huertas inteligentes, alarmas, automatización, IoT.',
    preguntaDetonante: '¿Qué del reloj de sol del campesino — su disciplina de calibrar al lugar y la estación — podemos llevar a los sensores que programamos?',
    activacion: {
      titulo: 'El sensor mal calibrado',
      descripcion: 'En 5 minutos: piensa en un dispositivo del entorno (alarma, sensor de movimiento de luces, detector) que dé falsas alarmas o no responde cuando debe. ¿Qué umbral está mal calibrado?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 15 aprendiste actuadores y respuestas multi-actuador.',
      siguiente: 'En la sesión 17 depurarás lógica de control con casos esperados, contrarios y límites.'
    }
  },
  conceptosClave: [
    {
      termino: 'Variable',
      definicion: 'Espacio nombrado en memoria donde guardas un valor para usarlo después. En MakeCode se crea desde la categoría Variables.',
      ejemplo: 'establecer nivel_luz a (nivel de luz). Luego puedes comparar nivel_luz con un umbral en un if.',
      emoji: '📦'
    },
    {
      termino: 'Umbral',
      definicion: 'Valor que separa dos zonas de acción del programa. Si la lectura está por encima o por debajo, el sistema reacciona distinto.',
      ejemplo: 'umbral_oscuro = 100. Si nivel_luz menor a 100, mostrar luna; sino, mostrar sol.',
      emoji: '📏'
    },
    {
      termino: 'Calibración',
      definicion: 'Proceso de tomar mediciones reales antes de fijar un umbral. Garantiza que el programa reacciona al contexto, no a un número inventado.',
      ejemplo: 'Antes de fijar umbral_oscuro, mides la luz del aula en 5 momentos del día y decides el valor según el rango observado.',
      emoji: '🎯'
    },
    {
      termino: 'Bitácora de calibración',
      definicion: 'Tabla con 4 columnas (momento, lectura, condición real, observación) que respalda la decisión del umbral con datos.',
      ejemplo: 'Fila 1, 7 a. m., lectura 120, aula con cortinas abiertas, día nublado. Cinco filas como esa dan baseline.',
      emoji: '📓'
    },
    {
      termino: 'Nombre descriptivo',
      definicion: 'Identificador de variable que dice qué guarda (nivel_luz, umbral_oscuro), no letras sueltas (x, y, z). Hace el código legible.',
      ejemplo: 'En lugar de a = nivel de luz, escribir nivel_luz = nivel de luz. Cualquier lector entiende sin explicación.',
      emoji: '🏷️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas variables, umbrales y calibración?',
      instrucciones: '5 preguntas para verificar que decides umbrales con calibración, no con números inventados.',
      preguntas: [
        {
          enunciado: 'Tienes 5 lecturas de luz en el aula a distintas horas (65, 120, 180, 195, 210). ¿Cuál umbral de "oscuro" tiene más sentido?',
          opciones: [
            '',
            '',
            '',
            ''
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. 100 queda justo debajo del menor valor normal (120) y por encima del único valor oscuro (65). Separa bien las zonas.',
          feedbackIncorrecto: 'Con esas lecturas, 100 es la mejor opción: queda debajo del rango normal (120-210) y solo activa la alerta cuando la luz baja claramente.'
        },
        {
          enunciado: '¿Por qué se recomienda usar nombres como nivel_luz en lugar de x para las variables?',
          opciones: [
            'Porque hace el código legible para quien lo lea después',
            'Porque x está reservada por MakeCode',
            'Porque ahorra memoria',
            'Porque corre más rápido'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Los nombres descriptivos son la diferencia entre código profesional y código que solo entiende quien lo escribió.',
          feedbackIncorrecto: 'La razón es la legibilidad. x no dice nada; nivel_luz dice qué guarda. El código se lee más veces de las que se escribe.'
        },
        {
          enunciado: 'Inventas el umbral sin medir nada y el programa reacciona en momentos equivocados. ¿Qué paso saltaste?',
          opciones: [
            'Compilar',
            'Guardar el archivo',
            'Conectar el cable USB',
            'Calibración'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Sin calibración, los umbrales son números al azar. La calibración con 5 mediciones reales evita ese error.',
          feedbackIncorrecto: 'Saltaste la calibración. Los umbrales se decantan a partir de mediciones reales, no se inventan.'
        },
        {
          enunciado: '¿Cuántas mediciones mínimas recomienda la guía para una bitácora de calibración útil?',
          opciones: [
            '1',
            '5',
            '2',
            '100'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. 5 mediciones en condiciones distintas dan baseline suficiente sin ser carga excesiva.',
          feedbackIncorrecto: 'Son 5 mediciones mínimas. Menos no da baseline; muchas más son carga sin necesidad para el aula.'
        },
        {
          enunciado: 'Tu programa tiene 3 umbrales (oscuro, normal, brillante). ¿Qué decisión es señal de programa profesional?',
          opciones: [
            'Usar 3 alertas claramente distinguibles',
            'Usar las 3 mismas alertas para distinguir',
            'Mostrar siempre el mismo ícono',
            'No mostrar nada'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Si las 3 alertas no se distinguen, el usuario no sabe qué zona está activa. La distinción es parte del diseño.',
          feedbackIncorrecto: 'Las 3 alertas deben distinguirse a primera vista u oído. Si todas son iguales, los umbrales pierden sentido.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Calibrar es disciplina de adaptar al territorio. ¿En qué otros ámbitos de tu vida (estudio, deporte, alimentación) sería útil "calibrar" en lugar de aplicar reglas genéricas?',
    transferencia: 'Esta semana: en MakeCode programa un sensor con umbral inicial, prueba en 3 ambientes distintos (casa, colegio, exterior) y documenta cómo ajustaste el umbral en cada uno.',
    cierre: 'El reloj de sol y el sensor digital comparten el mismo principio: la tecnología útil se calibra al lugar. La universalidad genérica es enemiga de la utilidad real.'
  },
  saberAncestral: {
    saber: 'En las comunidades del Pacífico colombiano, las curanderas y parteras tenían un instrumento de diagnóstico que las antecede por siglos: su propia mano convertida en termómetro. La mano de una curandera experimentada distinguía con precisión 3 estados del cuerpo: normal (frente tibia, no más caliente que la propia mano), fiebre leve (frente claramente más caliente que la mano, pero la persona habla con claridad), fiebre fuerte (frente como brasa, respiración acelerada, mirada perdida). Esa diferenciación no era arbitraria: era el resultado de calibración constante. La curandera había puesto su mano en cientos de frentes a lo largo de su vida: niños sanos, niños enfermos, mujeres en parto, ancianos. Esa colección de toques producía un baseline personal: "así se siente lo normal en mi mano". A partir de ese baseline, podía decir con certeza cuándo había cruzado el umbral hacia la alarma. Esa práctica es ancestral pero rigurosa: el umbral es marca personal calibrada con la experiencia, no número arbitrario. La medicina basada en evidencia formaliza después lo que la curandera practicó siempre.',
    fuente: 'Relojes de sol campesinos en haciendas y veredas del Valle del Cauca',
    preguntaPuente: '¿Qué sabía la curandera al construir su termómetro personal con años de práctica, que el programador novato olvida cuando inventa un umbral con un número al azar ("si luz menor a 100, alarma")? ¿Y por qué calibrar antes de decidir el umbral ahorra horas de programa que reacciona en momentos equivocados?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un sistema que se ajusta al contexto del usuario es liberador; uno que impone su umbral universal es opresor.',
      preguntaEspejo: '¿Mis umbrales reflejan el contexto real del aula, o son números copiados que ignoran el lugar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Calibrar antes de decidir es virtud; inventar umbrales sin medir es vanidad disfrazada de seguridad.',
      preguntaEspejo: '¿Mis umbrales se basan en mediciones reales, o son números que sonaban bien?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los sistemas contextuales son la nueva ética del oficio digital frente a los sistemas que asumen un usuario universal.',
      preguntaEspejo: '¿Mi programa se ajusta al contexto del aula, o asume un aula universal que no existe?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que calibrar no es paso opcional — es lo que separa dato útil de ruido. Habilidad transferible a cualquier herramienta de la vida.',
    emocional: 'Resististe la tentación de "ya está, está midiendo, sigamos". Entendiste que medir bien exige paciencia previa.',
    ciudadana: 'Diseñar tecnología calibrada al territorio respeta a las comunidades que la usan. Es soberanía técnica práctica.',
    local: 'Heredaste el oficio del relojero de sol: cada herramienta se hace para un lugar específico, no para un genérico ideal.',
    intergeneracional: 'El reloj de sol del abuelo y el sensor digital comparten la lógica del lugar. La técnica que sirve es la que se calibra.'
  }
};

export default contenido;
