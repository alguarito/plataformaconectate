/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 4
 * (sesión global 14 — Sensores básicos en MakeCode).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 4,
  resumen:
    'Como las antenas naturales del abuelo: leer el entorno con disciplina. Aprendes a usar sensores (luz, temperatura) en MakeCode para activar eventos automáticos.',
  duracionMin: 90,
  subtema: 'Sensores · MakeCode · Eventos automáticos',

  preLectura: {
    porQueImporta:
      'Saber programar sensores te permite construir tecnología que CUIDA: alarmas para huertas, sensores de luz para ahorro energético, monitoreos de temperatura para salud. Conecta código con mundo real.',
    preguntaDetonante:
      '¿Qué de la antena natural del abuelo — su capacidad de leer el entorno — podemos llevar a un sensor electrónico programado?',
    activacion: {
      titulo: 'Mis sentidos como sensores',
      descripcion:
        'En 5 minutos: en parejas identifiquen tres ocasiones reales donde sus sentidos actuaron como sensores (anticipar lluvia, detectar comida quemada, notar peligro). ¿Cuál fue el "umbral" que activó la alerta?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 13 escribiste pseudocódigo y diagramas de flujo de procesos.',
      siguiente: 'En la sesión 15 trabajarás con actuadores: LEDs, sonido, respuestas automáticas.',
    },
  },

  conceptosClave: [
    { categoria: '🌡️ Tipos de sensor', termino: 'Sensor de luz', definicion: 'Componente electrónico (LDR o fotorresistor) que mide la intensidad luminosa del ambiente. En el micro:bit es uno de los sensores integrados, con valores 0 (oscuro) a 255 (muy iluminado).', ejemplo: 'En MakeCode: nivel_luz devuelve un número. Si es < 50, está oscuro. Si es > 200, hay mucha luz.', emoji: '💡' },
    { categoria: '🌡️ Tipos de sensor', termino: 'Sensor de temperatura', definicion: 'Componente que mide la temperatura ambiente (NTC o termistor). En el micro:bit mide la temperatura del propio chip, no del aire — útil pero requiere calibración.', ejemplo: 'temperature_celsius() devuelve número entero. 25 = ambiente normal. > 35 = caliente. < 10 = frío.', emoji: '🌡️' },
    { categoria: '🌡️ Tipos de sensor', termino: 'Sensor de movimiento', definicion: 'En el micro:bit es el acelerómetro: detecta movimiento, inclinación, sacudidas. Mide aceleración en 3 ejes (X, Y, Z) y permite detectar gestos como "sacudir" o "voltear".', ejemplo: 'on_gesture(Gesture.SHAKE) → activar evento al sacudir. Útil para alarmas o control de juegos.', emoji: '📳' },
    { categoria: '🌡️ Tipos de sensor', termino: 'Sensor de sonido', definicion: 'Micrófono que mide nivel de ruido del ambiente. En micro:bit v2 es integrado; en v1 requiere uno externo. Útil para detectar gritos, aplausos o ambientes ruidosos.', ejemplo: 'sound_level() devuelve número. Bajo = silencio. Alto = ruido. Útil para alarmas de ambiente excesivamente ruidoso.', emoji: '🎤' },
    { categoria: '🎬 Eventos', termino: 'Lectura del sensor', definicion: 'Operación de pedir el valor actual al sensor. Se hace dentro de un bucle (forever) que repite la lectura constantemente.', ejemplo: 'forever: leer luz → comparar → reaccionar. El bucle se ejecuta varias veces por segundo, así el sensor "monitorea" el ambiente.', emoji: '👀' },
    { categoria: '🎬 Eventos', termino: 'Umbral', definicion: 'Valor que separa "poco" de "mucho". Define la decisión: si la lectura supera el umbral, ocurre el evento; si no, sigue monitoreando. Debe calibrarse al ambiente real.', ejemplo: 'Para alarma de oscuridad: umbral = 30 (luz < 30 → activar). Para alarma de calor: umbral = 35 (temp > 35 → activar).', emoji: '🎚️' },
    { categoria: '🎬 Eventos', termino: 'Disparador (trigger)', definicion: 'Condición que activa la respuesta. Se escribe como if/then. Cuando la condición se cumple, el actuador responde.', ejemplo: 'if nivel_luz < 30 then mostrar_icono(luna). El "if" es el disparador; la acción es la respuesta automática.', emoji: '🎯' },
    { categoria: '🎬 Eventos', termino: 'Acción reactiva', definicion: 'Respuesta automática del sistema al evento detectado. Puede ser visual (LED), sonora (buzzer), textual (pantalla) o motora (servomotor).', ejemplo: 'Acción: encender LED rojo + sonar buzzer + mostrar texto "ALERTA". Combina varios actuadores para máxima claridad.', emoji: '⚡' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Sensores y eventos',
    instrucciones: '5 preguntas tipo ICFES sobre sensores básicos y configuración de eventos.',
    preguntas: [
      { enunciado: '¿Qué sensor del micro:bit usarías para detectar si está oscuro en un cuarto?', opciones: ['Acelerómetro', 'Sensor de luz (LDR integrado)', 'Sensor de temperatura', 'Brújula'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. El sensor de luz mide intensidad luminosa. Valores bajos = oscuridad. Es el indicado para detectar si hay poca luz.', feedbackIncorrecto: '❌ Acelerómetro detecta movimiento. Temperatura mide calor. Brújula detecta dirección magnética. La luz se mide con el sensor LUMINOSO (LDR).' },
      { enunciado: 'Si tu sensor de luz lee valores entre 0 y 255, y quieres detectar oscuridad, ¿qué umbral usarías?', opciones: ['Umbral = 200 (mucho)', 'Umbral = 30 (poco)', 'Umbral = 0 exactamente', 'Umbral = 255 exactamente'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Para detectar oscuridad, el valor del sensor debe ser BAJO. Un umbral cerca de 30 captura la mayoría de situaciones oscuras sin falsos positivos por sombras momentáneas.', feedbackIncorrecto: '❌ Oscuridad = poca luz = valor BAJO en el sensor. Umbral 200 sería para mucha luz (al revés). Umbrales exactos como 0 o 255 son raros y restrictivos. ~30 es razonable.' },
      { enunciado: '¿Qué hace un bucle forever en MakeCode?', opciones: ['Ejecuta una vez y termina', 'Repite el bloque continuamente mientras el micro:bit esté encendido', 'Solo se ejecuta cuando hay error', 'Es un bucle infinito que cuelga el dispositivo'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. forever es el bucle permanente del micro:bit: repite el código mientras el dispositivo tiene energía. Útil para monitoreo continuo de sensores.', feedbackIncorrecto: '❌ forever NO ejecuta una sola vez ni cuelga el dispositivo. Es el bucle de monitoreo: repite continuamente mientras el micro:bit tenga energía. Esencial para sensores.' },
      { enunciado: 'Si tu programa enciende una alarma con cada sombra momentánea (paso de una mano), el problema es:', opciones: ['Sensor está dañado', 'Umbral mal calibrado o falta filtro de ruido', 'micro:bit muy lento', 'Bucle forever incorrecto'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Sombras momentáneas son "ruido". Soluciones: subir el umbral, o promediar varias lecturas seguidas (filtro), o requerir que la condición se mantenga por X segundos.', feedbackIncorrecto: '❌ El sensor probablemente está bien. El problema es de configuración: umbral demasiado sensible o falta de filtro de ruido. Soluciones: ajustar umbral o promediar lecturas.' },
      { enunciado: 'En MakeCode, la mejor manera de hacer que el sistema responda al SACUDIR el micro:bit es:', opciones: ['Usar sensor de luz', 'Usar on_gesture(SHAKE) del acelerómetro', 'Usar bucle forever', 'Usar sensor de temperatura'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. on_gesture(SHAKE) detecta el gesto "sacudir" usando el acelerómetro. MakeCode tiene gestos predefinidos: SHAKE, TILT_LEFT, TILT_RIGHT, etc.', feedbackIncorrecto: '❌ Sacudir = movimiento, eso lo detecta el ACELERÓMETRO, no la luz ni la temperatura. on_gesture(SHAKE) es el bloque listo para esto.' },
    ],
  }],

  postLectura: {
    reflexion: 'Los sensores convierten el mundo físico en datos digitales. ¿Qué problema real de tu entorno (huerta, sala de clase, casa) podría aliviarse con un sensor + actuador?',
    transferencia: 'Esta semana: en MakeCode (simulador online gratis) construye un programa con UN sensor y UN actuador. Comparte el link con un compañero y prueben en distintos ambientes.',
    cierre: 'Las antenas del abuelo y el sensor digital comparten algo: leer el entorno con disciplina antes de reaccionar. La diferencia es que el sensor también puede dormir tranquilo y despertar al evento.',
  },
};

export default contenido;
