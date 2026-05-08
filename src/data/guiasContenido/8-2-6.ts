/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 6
 * (sesión global 16 — Variables, umbrales y calibración).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 6,
  resumen:
    'Como el reloj de sol del campesino: calibrar al lugar y a la estación. Aprendes a usar variables, definir umbrales con criterio y calibrar sensores al ambiente real.',
  duracionMin: 90,
  subtema: 'Sensores · Variables · Umbrales · Calibración',

  preLectura: {
    porQueImporta:
      'Saber calibrar es lo que distingue un sensor confiable de uno que da falsas alarmas. Te servirá en cualquier proyecto futuro: huertas inteligentes, alarmas, automatización, IoT.',
    preguntaDetonante: '¿Qué del reloj de sol del campesino — su disciplina de calibrar al lugar y la estación — podemos llevar a los sensores que programamos?',
    activacion: { titulo: 'El sensor mal calibrado', descripcion: 'En 5 minutos: piensa en un dispositivo del entorno (alarma, sensor de movimiento de luces, detector) que dé falsas alarmas o no responde cuando debe. ¿Qué umbral está mal calibrado?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 15 aprendiste actuadores y respuestas multi-actuador.', siguiente: 'En la sesión 17 depurarás lógica de control con casos esperados, contrarios y límites.' },
  },

  conceptosClave: [
    { categoria: '📊 Cómo se lee', termino: 'Variable de lectura', definicion: 'Espacio nombrado que guarda la lectura del sensor para usarla. Cada vez que el bucle se ejecuta, la variable se actualiza.', ejemplo: 'nivel_luz = leer_sensor_luz(). Ahora la variable guarda el valor actual y la podemos comparar con el umbral.', emoji: '📊' },
    { categoria: '📊 Cómo se lee', termino: 'Rango del sensor', definicion: 'Conjunto de valores posibles que el sensor entrega. Cada modelo tiene su rango específico (0-255, 0-1023, -40 a 85°C).', ejemplo: 'Sensor de luz del micro:bit: 0 (oscuridad total) a 255 (máxima luz). Si tu lectura es 300, hay error.', emoji: '📏' },
    { categoria: '📊 Cómo se lee', termino: 'Ruido', definicion: 'Fluctuaciones momentáneas en la lectura por causas externas (sombras, vibraciones, interferencias). Genera falsas alarmas si no se filtra.', ejemplo: 'Sensor de luz baja a 30 cuando pasa una sombra, sube a 80 al instante. La sombra es ruido; el cuarto sigue iluminado.', emoji: '〰️' },
    { categoria: '📊 Cómo se lee', termino: 'Promediado', definicion: 'Técnica de filtrar ruido tomando el promedio de varias lecturas seguidas. Una sombra momentánea no afecta el promedio de 5 lecturas.', ejemplo: 'En lugar de comparar UNA lectura con el umbral, comparas el promedio de las últimas 5. Filtra ruido sin perder respuesta.', emoji: '➗' },
    { categoria: '⚖️ Cómo se calibra', termino: 'Umbral inicial', definicion: 'Primer valor que pruebas como punto de corte. Suele ser un valor central del rango y se ajusta con pruebas reales.', ejemplo: 'Para sensor de luz (rango 0-255), umbral inicial 50 separa "oscuro" de "con luz". Después se calibra con pruebas reales en TU ambiente.', emoji: '🎯' },
    { categoria: '⚖️ Cómo se calibra', termino: 'Ajuste por contexto', definicion: 'Modificar el umbral según las condiciones reales del lugar donde el sensor opera. Cuarto oscuro vs salón iluminado tienen umbrales distintos.', ejemplo: 'En un cuarto con cortinas: umbral de oscuridad = 40. En un salón con ventanas: umbral = 100. Mismo sensor, distinto umbral.', emoji: '🌍' },
    { categoria: '⚖️ Cómo se calibra', termino: 'Histéresis', definicion: 'Técnica de usar dos umbrales (uno para activar, otro para desactivar) para evitar oscilaciones cuando la lectura está cerca del límite.', ejemplo: 'Activar alarma si luz < 30. Desactivar si luz > 60. La diferencia (30-60) evita que la alarma parpadee con valores cercanos al umbral.', emoji: '🔁' },
    { categoria: '⚖️ Cómo se calibra', termino: 'Validación con casos', definicion: 'Probar el sensor calibrado con escenarios extremos para confirmar que responde bien. Caso normal, caso límite, caso fuera de rango.', ejemplo: 'Probar con luz directa (255), oscuridad total (0), día nublado (60), cuarto interior (40). Verificar que la respuesta es la esperada en cada caso.', emoji: '✅' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Variables, umbrales y calibración',
    instrucciones: '5 preguntas tipo ICFES sobre interpretación de sensores y calibración.',
    preguntas: [
      { enunciado: 'Si el sensor de luz del micro:bit tiene rango 0-255, ¿qué valor es razonable como umbral inicial para "está oscuro"?', opciones: ['Umbral = 200', 'Umbral = 30 o 50', 'Umbral = 0 exactamente', 'Umbral = 256'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Para oscuridad necesitas valor BAJO. 30 o 50 captura la mayoría de oscuridades sin falsas alarmas. 0 exacto es muy restrictivo, 256 está fuera de rango.', feedbackIncorrecto: '❌ Oscuridad = valor bajo. 200 es para detectar mucha luz (al revés). 0 exacto no captura oscuridades reales (siempre hay algo de luz). 256 está fuera de rango. ~30-50 es razonable.' },
      { enunciado: 'Tu alarma se activa con cada sombra momentánea (paso de mano). El problema más probable es:', opciones: ['Sensor dañado', 'Falta filtro de ruido (sin promediado)', 'Programa muy lento', 'Bucle forever incorrecto'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Una lectura puntual responde a una sombra. Promediar 5 lecturas seguidas filtra el ruido: la sombra es momentánea, el promedio sigue alto.', feedbackIncorrecto: '❌ El sensor probablemente está bien. La causa más común es FALTA DE FILTRO: una lectura puntual responde a sombras momentáneas. Solución: promediar varias lecturas seguidas.' },
      { enunciado: 'La "histéresis" en calibración significa:', opciones: ['Usar UN solo umbral muy preciso', 'Usar DOS umbrales: uno para activar, otro para desactivar', 'Eliminar el umbral y usar promedio', 'Aumentar la frecuencia de lectura'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Histéresis = dos umbrales con un rango entre ellos. Activar al cruzar el primero, desactivar al cruzar el segundo. Evita oscilaciones cerca del límite.', feedbackIncorrecto: '❌ Histéresis no es un umbral preciso ni eliminar el umbral. Es usar DOS umbrales con un rango de "incertidumbre" entre ellos para evitar que el sistema oscile cuando la lectura está justo en el límite.' },
      { enunciado: 'Si calibras tu sensor en tu cuarto y luego lo llevas al colegio donde hay más luz, ¿qué probable que pase?', opciones: ['El umbral seguirá siendo correcto', 'El umbral del cuarto activará con sombras normales del colegio', 'El sensor se daña', 'El programa borra el umbral automáticamente'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Cada ambiente tiene su rango de luz. El umbral calibrado para tu cuarto (oscuro) podría considerar "oscuridad" lo que en el colegio es luz normal. Necesitas re-calibrar.', feedbackIncorrecto: '❌ Los umbrales son específicos al ambiente. Lo que es "oscuridad" en tu cuarto es "luz normal" en un salón con ventanas. La calibración NO es transferible automáticamente — debe reajustarse al lugar.' },
      { enunciado: '¿Por qué documentar lo que representa el umbral en código?', opciones: ['Para que el archivo sea más grande', 'Para que tu yo del próximo mes (u otro programador) entienda por qué pusiste 50', 'Para encriptar el umbral', 'No es necesario'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. "umbral=50" sin contexto es opaco. "umbral=50 (oscuridad razonable en cuarto interior)" es claro. La documentación es ética del código colaborativo.', feedbackIncorrecto: '❌ La documentación NO es para llenar espacio. Es para que TÚ (en 3 meses) o un compañero entiendan tu razón. "umbral=50" sin contexto se vuelve magia incomprensible. Documenta el por qué.' },
    ],
  }],

  postLectura: {
    reflexion: 'Calibrar es disciplina de adaptar al territorio. ¿En qué otros ámbitos de tu vida (estudio, deporte, alimentación) sería útil "calibrar" en lugar de aplicar reglas genéricas?',
    transferencia: 'Esta semana: en MakeCode programa un sensor con umbral inicial, prueba en 3 ambientes distintos (casa, colegio, exterior) y documenta cómo ajustaste el umbral en cada uno.',
    cierre: 'El reloj de sol y el sensor digital comparten el mismo principio: la tecnología útil se calibra al lugar. La universalidad genérica es enemiga de la utilidad real.',
  },
};

export default contenido;
