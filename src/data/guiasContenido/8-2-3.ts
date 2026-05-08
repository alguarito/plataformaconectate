/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 3
 * (sesión global 13 — Pseudocódigo y diagramas de flujo).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 3,
  resumen:
    'Como la receta paso a paso de la abuela: cocina campesina como archivo de algoritmos heredados. Aprendes a escribir pseudocódigo claro y diagramas de flujo con símbolos ISO 5807.',
  duracionMin: 90,
  subtema: 'Algoritmos · Pseudocódigo · Diagramas de flujo',

  preLectura: {
    porQueImporta:
      'Saber expresar algoritmos en pseudocódigo y diagramas te prepara para programar en CUALQUIER lenguaje. Es habilidad transferible: a Python, JavaScript, MakeCode o lo que venga después.',
    preguntaDetonante:
      '¿Qué de la receta paso a paso de la abuela — su disciplina narrativa — podemos llevar al pseudocódigo y al diagrama de flujo?',
    activacion: {
      titulo: 'La receta como código',
      descripcion:
        'En 5 minutos: en parejas escojan una receta familiar simple (huevo perico, agua de panela, etc.) y escríbanla como pseudocódigo con palabras clave INICIO, LEER, SI, FIN.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 12 construiste tablas de verdad para verificar lógica.',
      siguiente: 'En la sesión 14 trabajarás con sensores físicos en MakeCode.',
    },
  },

  conceptosClave: [
    { categoria: '📝 Cómo se describe', termino: 'Pseudocódigo', definicion: 'Lenguaje intermedio entre español y código. Usa palabras clave estándar (INICIO, FIN, SI, MIENTRAS, REPETIR) para describir un algoritmo sin atarlo a un lenguaje específico.', ejemplo: 'INICIO → LEER nota → SI nota >= 3 ENTONCES escribir "aprobado" SI NO escribir "reprobado" → FIN.', emoji: '📝' },
    { categoria: '📝 Cómo se describe', termino: 'Variable', definicion: 'Espacio nombrado que guarda un valor. En pseudocódigo se nombra y se le asigna valor con flecha (←) o palabra ASIGNAR.', ejemplo: 'nota ← 3.5  (asignación). Después se puede leer: SI nota >= 3 ENTONCES...', emoji: '📦' },
    { categoria: '📝 Cómo se describe', termino: 'Operación', definicion: 'Acción que el algoritmo ejecuta: cálculo, lectura, escritura, decisión, repetición. Cada paso es una operación atómica.', ejemplo: 'CALCULAR promedio = (n1+n2+n3)/3 es una operación de cálculo. LEER edad es operación de entrada.', emoji: '⚙️' },
    { categoria: '📝 Cómo se describe', termino: 'Asignación (←)', definicion: 'Operación de guardar un valor en una variable. La flecha apunta hacia donde se guarda. Es el corazón del pseudocódigo.', ejemplo: 'nombre ← "María" guarda el texto "María" en la variable nombre. Suma ← 0 inicializa el contador.', emoji: '🏹' },
    { categoria: '🌊 Cómo se diagrama', termino: 'Diagrama de flujo', definicion: 'Representación visual de un algoritmo con símbolos estándar (ISO 5807). Muestra el flujo de ejecución con flechas y formas geométricas distintivas.', ejemplo: 'Útil para explicar a alguien que no sabe leer código. Universal: cualquier programador en cualquier país lo entiende.', emoji: '🌊' },
    { categoria: '🌊 Cómo se diagrama', termino: 'Inicio/Fin (óvalo)', definicion: 'Símbolos de óvalo que marcan dónde empieza y termina el algoritmo. Todo diagrama de flujo bien hecho tiene exactamente UNO de cada uno.', ejemplo: 'Óvalo arriba con palabra "INICIO". Óvalo abajo con palabra "FIN". Todo lo demás va en el medio.', emoji: '⭕' },
    { categoria: '🌊 Cómo se diagrama', termino: 'Decisión (rombo)', definicion: 'Símbolo de rombo que representa una pregunta SI/NO. Tiene dos salidas: una para SI y otra para NO. Cada salida lleva a un camino distinto del algoritmo.', ejemplo: 'Rombo con texto "¿nota >= 3?". Salida SI → "aprobado". Salida NO → "reprobado".', emoji: '🔷' },
    { categoria: '🌊 Cómo se diagrama', termino: 'Bucle/repetición', definicion: 'Estructura que repite un bloque de instrucciones mientras una condición sea verdadera. En diagrama es una flecha que regresa a un punto anterior.', ejemplo: 'MIENTRAS contador < 5: incrementar contador, mostrar mensaje. La flecha del diagrama vuelve al rombo de "¿contador < 5?".', emoji: '🔄' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Pseudocódigo y diagramas',
    instrucciones: '5 preguntas tipo ICFES sobre algoritmos en pseudocódigo y diagramas.',
    preguntas: [
      { enunciado: 'En pseudocódigo, la palabra clave INICIO marca:', opciones: ['El punto donde empieza la ejecución del algoritmo', 'Una variable que vale 0', 'Una decisión obligatoria', 'El final del algoritmo'], respuestaIndex: 0, feedbackCorrecto: '✅ Sí. INICIO es la primera palabra del pseudocódigo: marca dónde empieza. Equivalente al óvalo de inicio en el diagrama de flujo.', feedbackIncorrecto: '❌ INICIO marca DÓNDE EMPIEZA el algoritmo. No es una variable ni una decisión. Es el punto de partida obligatorio.' },
      { enunciado: 'En un diagrama de flujo, ¿qué símbolo representa una decisión SI/NO?', opciones: ['Óvalo', 'Rectángulo', 'Rombo', 'Paralelogramo'], respuestaIndex: 2, feedbackCorrecto: '✅ Exacto. El rombo es para decisiones (preguntas con SI/NO). Tiene dos salidas. Estandarizado por ISO 5807 para todo el mundo.', feedbackIncorrecto: '❌ Óvalo = inicio/fin. Rectángulo = proceso. Paralelogramo = entrada/salida. ROMBO = decisión. Símbolos universales ISO 5807.' },
      { enunciado: 'Si tu pseudocódigo dice "MIENTRAS contador < 5", ¿cuándo termina el bucle?', opciones: ['Cuando contador = 5 (la condición se vuelve falsa)', 'Cuando contador = 0', 'Nunca, es bucle infinito', 'Cuando se ejecuta INICIO'], respuestaIndex: 0, feedbackCorrecto: '✅ Correcto. El bucle MIENTRAS termina cuando la condición se vuelve falsa. Si contador llega a 5, ya no es < 5, y el bucle sale.', feedbackIncorrecto: '❌ MIENTRAS x continúa MIENTRAS x sea V. Termina cuando se vuelve F. Si contador < 5 deja de ser cierto (cuando contador = 5), el bucle se sale.' },
      { enunciado: 'Convertir el siguiente texto a pseudocódigo correcto: "Si la temperatura es mayor a 30, encender el ventilador":', opciones: ['SI temperatura > 30 ENTONCES encender ventilador FIN SI', 'temperatura > 30 ventilador encendido', 'IF temp > 30 then fan = ON', 'temperatura ELSE 30'], respuestaIndex: 0, feedbackCorrecto: '✅ Sí. Pseudocódigo usa palabras clave en español: SI ... ENTONCES ... FIN SI. Es legible para no-programadores.', feedbackIncorrecto: '❌ El pseudocódigo profesional usa palabras clave estándar en español: SI/ENTONCES/SI NO/FIN SI. No es código de un lenguaje específico.' },
      { enunciado: 'Un algoritmo que falta condición de salida en su MIENTRAS produce:', opciones: ['Un programa rápido', 'Un bucle infinito (el programa nunca termina)', 'Un error de sintaxis', 'Un cálculo correcto'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Un bucle MIENTRAS sin condición que se vuelva F nunca termina. El programa cuelga el computador. Por eso siempre verifica que tu condición pueda volverse F.', feedbackIncorrecto: '❌ Bucle infinito = nunca termina = cuelga el programa. Es uno de los errores MÁS comunes y peligrosos. Asegura siempre que la condición pueda volverse falsa.' },
    ],
  }],

  postLectura: {
    reflexion: 'El pseudocódigo democratiza el código: hace que personas sin formación técnica puedan opinar sobre algoritmos. ¿Qué proceso de tu colegio sería bueno escribir como pseudocódigo para que cualquiera lo pueda revisar?',
    transferencia: 'Esta semana: elige UN proceso real (timbre, asistencia, calificaciones, cafetería) y escríbelo como pseudocódigo + diagrama de flujo. Compártelo con alguien y mejora donde haya confusión.',
    cierre: 'La receta de la abuela y el diagrama ISO comparten algo: cuando se escribe bien, cualquiera puede seguirla. La claridad del orden es ética del trabajo compartido.',
  },
};

export default contenido;
