/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 1
 * (sesión global 11 — Lógica avanzada I, MILC v3).
 *
 * Apertura del periodo 2: pasamos de phronesis con datos a lógica
 * avanzada y computación física.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 1,
  resumen:
    'Como las pruebas del oficio del herrero: cruzar varias condiciones antes de actuar. Aprendes estructuras condicionales anidadas (if-else-if) y operadores lógicos AND/OR/NOT.',
  duracionMin: 90,
  subtema: 'Lógica avanzada · if-else · AND/OR/NOT',

  preLectura: {
    porQueImporta:
      'Saber escribir condicionales con lógica compuesta es habilidad universal de programación: lo aplicarás en cualquier lenguaje (Python, JS, MakeCode), en cualquier sistema (web, móvil, hardware). Es la columna vertebral del pensamiento computacional.',
    preguntaDetonante:
      '¿Qué del juicio del herrero — su capacidad de cruzar varias condiciones antes de actuar — podemos llevar al código que decide?',
    activacion: {
      titulo: 'La decisión cotidiana',
      descripcion:
        'En 5 minutos: en parejas describan una decisión real (de hoy o ayer) que tomaron cruzando varias condiciones. ¿Era AND (todas obligatorias) o OR (alcanzaba con una)? ¿Hubo NOT (algo que NO debía pasar)?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En el periodo 1 trabajaste análisis de datos con phronesis (Excel, estadística).',
      siguiente: 'En la sesión 12 construirás tablas de verdad para verificar tu lógica.',
    },
  },

  conceptosClave: [
    { categoria: '🧱 Cómo se estructura la decisión', termino: 'Condición simple', definicion: 'Comparación entre dos valores que se evalúa como V o F. Operadores: ==, !=, <, >, <=, >=. Es la unidad mínima de la lógica programada.', ejemplo: 'edad >= 13 es V si la edad es 13 o más, F si es menor. Una condición = una respuesta V/F.', emoji: '❓' },
    { categoria: '🧱 Cómo se estructura la decisión', termino: 'if-else', definicion: 'Estructura de dos caminos: si la condición es V, ejecuta el bloque de IF; si es F, ejecuta el de ELSE. Cada decisión tiene exactamente dos salidas.', ejemplo: 'if (nota >= 3) then mostrar("aprobado") else mostrar("reprobado"). Dos resultados posibles, uno solo se ejecuta.', emoji: '🔀' },
    { categoria: '🧱 Cómo se estructura la decisión', termino: 'if-else-if', definicion: 'Estructura de múltiples caminos secuenciales: evalúa varias condiciones en orden hasta encontrar la primera verdadera. Útil para clasificar en categorías.', ejemplo: 'if (nota >= 4.5) "excelente" else if (nota >= 3.5) "bueno" else if (nota >= 3) "aceptable" else "reprobado". Cuatro categorías.', emoji: '🌳' },
    { categoria: '🧱 Cómo se estructura la decisión', termino: 'Anidamiento', definicion: 'Condición dentro de otra condición. Permite decisiones jerárquicas pero puede volverse ilegible si se abusa. Regla: máximo 2-3 niveles.', ejemplo: 'if (lluvia) { if (frío) abrigo() else paraguas() }. Decisión anidada dentro de la condición de lluvia.', emoji: '📦' },
    { categoria: '🔗 Cómo se combinan', termino: 'AND (Y)', definicion: 'Operador que produce V solo cuando AMBAS condiciones son V. Si una falla, falla todo. Es el operador exigente.', ejemplo: 'edad >= 13 AND tiene_permiso → V solo si la persona tiene 13+ Y tiene permiso. Si falta uno, F.', emoji: '➕' },
    { categoria: '🔗 Cómo se combinan', termino: 'OR (O)', definicion: 'Operador que produce V si AL MENOS UNA condición es V. Solo da F cuando ambas fallan. Es el operador permisivo.', ejemplo: 'lluvia OR frío → V si llueve, V si hace frío, V si ambas. Solo F cuando ninguna pasa.', emoji: '〰️' },
    { categoria: '🔗 Cómo se combinan', termino: 'NOT (no)', definicion: 'Operador unario que invierte el valor. V se vuelve F y viceversa. Útil para expresar "lo contrario de".', ejemplo: 'NOT lluvia es V cuando NO está lloviendo. NOT (A AND B) es V cuando A o B fallan.', emoji: '🚫' },
    { categoria: '🔗 Cómo se combinan', termino: 'Tabla de verdad', definicion: 'Enumeración de todos los casos posibles de una expresión booleana y su resultado. Para n variables hay 2ⁿ casos. Verifica que la lógica funciona en TODOS los escenarios.', ejemplo: 'Tabla de "A AND B": 4 filas (FF→F, FV→F, VF→F, VV→V). Solo el caso VV produce V.', emoji: '🎯' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Lógica con condicionales',
    instrucciones: '5 preguntas tipo ICFES sobre estructuras condicionales y operadores lógicos.',
    preguntas: [
      { enunciado: 'Una sala de cine tiene la regla "edad >= 13 AND tiene_permiso". Si edad=15 y tiene_permiso=falso, ¿la persona entra?', opciones: ['Sí, porque tiene la edad', 'NO, porque AND requiere ambas verdaderas', 'Sí, AND no se aplica aquí', 'Depende del contexto'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. AND es exigente: necesita TODAS las condiciones en V. tiene_permiso=falso hace que toda la conjunción sea F. La persona NO entra.', feedbackIncorrecto: '❌ AND requiere AMBAS verdaderas. Tener la edad NO basta si falta el permiso. tiene_permiso=falso → toda la expresión es F → no entra.' },
      { enunciado: 'En "if (nota>=4) aprobado else if (nota>=3) recuperación else reprobado", si nota=3.5, el resultado es:', opciones: ['aprobado', 'recuperación', 'reprobado', 'Error'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La estructura if-else-if evalúa en ORDEN. nota=3.5 NO es >= 4 (falla primer if). Sí es >= 3 (segundo if pasa). Resultado: "recuperación".', feedbackIncorrecto: '❌ if-else-if evalúa en ORDEN. 3.5 >= 4 es F (no aprobado). 3.5 >= 3 es V (sí recuperación). El else final solo aplica si ningún if anterior pasó.' },
      { enunciado: '¿Cuál es el resultado de "NOT (lluvia OR frío)" si llueve y NO hace frío?', opciones: ['Verdadero', 'Falso', 'No se puede determinar', 'Error de sintaxis'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. (lluvia OR frío) = (V OR F) = V. NOT V = F. La expresión completa es F.', feedbackIncorrecto: '❌ Paso a paso: lluvia=V, frío=F. (V OR F)=V. NOT V = F. La expresión completa es F.' },
      { enunciado: 'En una tabla de verdad de "p AND q", ¿cuántos casos producen V?', opciones: ['0 casos', '1 caso (cuando ambos son V)', '2 casos', '3 casos'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. AND solo es V cuando AMBOS son V. De los 4 casos posibles (FF, FV, VF, VV), solo VV da V. Por eso AND es "exigente".', feedbackIncorrecto: '❌ AND es exigente: solo es V cuando AMBOS son V. De los 4 casos, solo 1 (VV) produce V. Eso lo distingue del OR (que tiene 3 casos V).' },
      { enunciado: 'Para una "alarma de incendio inteligente", la lógica más adecuada es:', opciones: ['humo (solo eso)', 'humo OR (temperatura > 50°C)', 'humo OR (temperatura > 50°C AND tiempo_caliente > 30s)', 'humo AND temperatura'], respuestaIndex: 2, feedbackCorrecto: '✅ Excelente. Combina alternativa (humo OR temperatura) Y filtro de ruido (la temperatura debe sostenerse 30s para evitar falsa alarma por una vela). Lógica robusta.', feedbackIncorrecto: '❌ "Solo humo" se pierde casos. "humo OR temp" da falsas alarmas. "humo AND temp" es muy restrictivo. La fórmula buena combina alternativa + filtro: humo OR (temp alta sostenida).' },
    ],
  }],

  postLectura: {
    reflexion: 'Toda regla lógica excluye casos. ¿Qué regla en tu vida (familia, colegio) tiene un caso real que NO captura bien? ¿Cómo la mejorarías con AND/OR/NOT?',
    transferencia: 'Esta semana: en MakeCode escribe un programa con condicional anidada (if-else-if) que clasifique datos reales (ej: edad → categoría, nota → estado). Pruébalo con 5 casos distintos.',
    cierre: 'El juicio del herrero y la condicional anidada hacen lo mismo: cruzar varias condiciones antes de actuar. La diferencia: el herrero lo aprende con años; el código lo replica en milisegundos.',
  },

  saberAncestral: {
    saber:
      'El oficio del herrero del Valle no era solo golpear metal. Antes de cada golpe, cruzaba múltiples condiciones mentales: ¿el color del hierro está al punto (amarillo cereza, no naranja, no rojo)? ¿Suena bien al primer toque? ¿El yunque está estable? ¿La tenaza sujeta firme? Si CUALQUIERA fallaba, no golpeaba. Esa lógica AND con varias condiciones simultáneas evitaba accidentes y herramientas mal hechas. El if-else-if anidado y los operadores AND/OR/NOT codifican lo que el herrero aprendía en años de oficio.',
    fuente: 'Oficio del herrero en el Valle del Cauca — siglos XIX-XX',
    preguntaPuente:
      '¿Qué hacía el herrero antes de cada golpe? ¿Y qué pasa cuando un programa decide sin cruzar bien las condiciones (alarma que se dispara por una vela, semáforo que se queda en rojo)?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda regla lógica excluye casos — saber a quién deja afuera es ética del programador.',
      preguntaEspejo:
        '¿Qué casos reales no captura bien mi condicional? ¿Qué personas o situaciones quedan invisibles para mi lógica?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Cruzar varias condiciones antes de actuar es virtud — la decisión apresurada es origen del error.',
      preguntaEspejo:
        'Cuando decido algo importante, ¿cruzo varias condiciones o salto a la primera respuesta posible? ¿Cuál de las dos posturas requiere más oficio?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La lógica AND/OR/NOT es gramática básica del razonamiento en la infoesfera contemporánea.',
      preguntaEspejo:
        '¿Estoy entrenando mi razonamiento lógico cotidiano (defensa contra reglas mal diseñadas) o solo aprendiendo operadores para el examen?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a cruzar condiciones antes de actuar — disciplina cognitiva que aplica a código y a vida adulta.',
    emocional:
      'Resististe la tentación de simplificar reglas hasta el absurdo. La lógica robusta exige paciencia y atención al caso límite.',
    ciudadana:
      'Detectar reglas mal diseñadas en reglamentos y leyes es defensa ciudadana concreta — la lógica formal entrenada en clase escala.',
    local:
      'Heredaste el juicio del herrero del Valle: cruzar varias condiciones antes del golpe definitivo.',
    intergeneracional:
      'El oficio que el herrero aprendía con los años, el código lo replica en milisegundos. Lo que cambia es el medio, no la lógica.',
  },
};

export default contenido;
