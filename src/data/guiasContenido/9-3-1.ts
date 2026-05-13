/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 1
 * Tema: ¿Qué es un dato? — recolección con propósito (apertura P3).
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-1.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 1,
  titulo: '¿Qué es un dato? — recolección con propósito',
  ocultarPDF: false,
  resumen:
    'Apertura del Periodo 3. Construyes tu primera tabla con 20 datos reales recolectados y la pregunta acotada que esos datos van a responder. Sin pregunta, no hay recolección — hay acumulación.',
  duracionMin: 90,
  subtema: 'Apertura · Datos del registro al insight',

  saberAncestral: {
    saber:
      'El conteo de cosecha en el campo colombiano nunca fue vanidad estadística. La abuela contaba en su libreta los racimos por mata de café, las mazorcas por surco, las mantas terminadas por luna, los días que llovió. Cada cifra tenía propósito: saber cuánto sembrar el próximo ciclo, a quién pedir ayuda, qué reservar. Sin propósito, contar es desperdicio.',
    fuente: 'Libreta de cosecha campesina en el Valle, el Pacífico y los Andes colombianos',
    preguntaPuente:
      '¿Qué datos recogía tu abuela en su libreta de cosecha y para qué? ¿Y qué datos recoges tú a diario (en redes, en apps, en notas) sin tener pregunta clara que esos datos vayan a responder?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La libreta de cosecha', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Tu propia huella de datos', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 elementos de una recolección honesta', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu primera tabla de 20 datos reales', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'En este Periodo 3 vas a producir un mini-estudio que pueda mejorar algo concreto del colegio. Pero antes de gráficos y tablas dinámicas viene la base: recolectar datos con pregunta y propósito. Sin esa base, todo el periodo se vuelve ejercicio escolar sin consecuencia.',
    preguntaDetonante:
      'Si tu celular registra ya cientos de datos tuyos cada día y NO toma decisiones por ti, ¿qué información sí podrías recoger tú con tu propio criterio?',
    activacion: {
      titulo: 'Inventario rápido de tu huella',
      descripcion:
        'En 3 minutos: anota cuántas apps en tu celular recogen datos tuyos (ubicación, tiempo de uso, contactos). Estima cuántos datos producen sobre ti por día. Esa magnitud es contra la cual decidirás qué TÚ quieres recolectar con criterio propio.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'Cerraste P2 con la revista digital pública. Hoy empiezas el P3 — del registro al insight: aprenderás a leer y producir datos con criterio.',
      siguiente:
        'En la sesión 2 limpiarás y tiparás tu tabla para que las fórmulas y filtros posteriores funcionen sin trampa.',
    },
  },

  conceptosClave: [
    {
      termino: 'Dato',
      definicion:
        'Información cuantificable o categorizable que puedas registrar de forma estructurada: edad, hora, lugar, color, número, sí/no.',
      ejemplo:
        '"Juan, 14 años, vive en La Esperanza, va a 9°A, 45 min de TikTok el lunes" son 5 datos. "Es buen estudiante" no es dato — es opinión.',
      emoji: '📊',
    },
    {
      termino: 'Pregunta acotada',
      definicion:
        'Una pregunta concreta, específica, que se pueda responder con datos contables. Sin pregunta acotada, la recolección se vuelve acumulación sin sentido.',
      ejemplo:
        'Mal: "¿cómo usan el celular?". Bien: "¿cuántos minutos diarios pasan mis compañeros en TikTok los lunes?". Lo específico permite responder.',
      emoji: '🎯',
    },
    {
      termino: 'Instrumento de recolección',
      definicion:
        'Cómo recoges los datos: encuesta (preguntas iguales a varios), observación (registras lo que ves sin preguntar), registro propio (anotas datos tuyos durante un tiempo).',
      ejemplo:
        'Encuesta: pregunto a 20 compañeros. Observación: cuento cuántos llevan portátil al colegio. Registro propio: anoto mi sueño por 14 noches.',
      emoji: '📝',
    },
    {
      termino: 'Muestra',
      definicion:
        'A quién mides y cuántos. Una buena muestra es lo suficientemente grande para tener tendencia y lo suficientemente cuidadosa para no incluir solo amigos cercanos.',
      ejemplo:
        '20 compañeros de TU salón es muestra clara. 5 amigos cercanos es sesgo. 200 estudiantes de todo el colegio sin saber cómo elegirlos es exceso sin método.',
      emoji: '👥',
    },
    {
      termino: 'Registro estructurado',
      definicion:
        'Tabla con columnas tipadas (texto, número, fecha, sí/no), no notas sueltas. La estructura permite que las fórmulas funcionen y otra persona pueda usar tu trabajo.',
      ejemplo:
        'Una hoja con columnas "Nombre | Edad | Minutos TikTok | Fecha" llena con 20 filas. NO: una nota en celular con párrafos mezclados.',
      emoji: '🗂',
    },
    {
      termino: 'Uso previsto',
      definicion:
        'Qué decisión vas a tomar cuando tengas los datos. Sin uso previsto, la recolección es curiosidad. Con uso previsto, cada dato encuentra propósito.',
      ejemplo:
        'Mi pregunta: "¿cuántos minutos diarios usamos TikTok?". Uso previsto: proponer al curso una franja de 30 min sin TikTok antes de dormir si el promedio supera 90 min.',
      emoji: '🎬',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tu propia huella de datos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu celular y haz inventario de apps que recogen datos tuyos (ubicación, uso, contactos).',
        'Lista 3 prácticas tuyas de registro consciente (notas, agenda, lista de gastos).',
        'Identifica 3 datos que NO registras y te servirían para mejorar una decisión.',
        'Anota el contraste: cuántos datos te miden a ti vs cuántos recoges tú con propósito propio.',
      ],
      cuaderno: {
        titulo: 'Mi huella de datos',
        formato: '3 listas (apps que me miden | registros propios | datos faltantes), 5+ ítems cada una',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Identifiqué 5+ apps que recogen datos sin mi decisión activa',
        'Reconozco 3 prácticas de registro propio actuales',
        'Identifiqué al menos 1 dato que me servirá registrar con criterio',
        'Anoté honestamente el desbalance (apps registran mucho de mí, yo poco de mí)',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 elementos de una recolección honesta',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (pregunta acotada, instrumento honesto, muestra adecuada, registro estructurado) escribe una ficha.',
        'En cada ficha: definición en tus palabras + ejemplo bueno + ejemplo malo.',
        'Marca con ★ el elemento que crees que más se descuida en tareas escolares.',
        'Cierra con 2 renglones: ¿qué error has cometido tú antes en recolecciones previas?',
      ],
      cuaderno: {
        titulo: '4 elementos de una recolección honesta',
        formato: '4 fichas con definición + ejemplo bueno + ejemplo malo',
        extension: '4 fichas + 2 renglones de cierre',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene ejemplo bueno + ejemplo malo concretos',
        'Identifiqué el elemento más descuidado en tareas escolares',
        'Reconozco honestamente un error propio del pasado',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu primera tabla con 20 datos reales',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe la pregunta acotada en 1 frase específica.',
        'Elige el instrumento (encuesta breve, observación, registro propio).',
        'Diseña tabla en Google Sheets o Excel con 3-5 columnas tipadas.',
        'Recoge los 20 datos reales sin saltarte columnas (no inventes).',
        'Verifica que cada fila esté completa y declara el uso previsto.',
      ],
      cuaderno: {
        titulo: 'Mi primera tabla de 20 datos',
        formato: 'Pregunta + instrumento + 3-5 columnas tipadas + 20 filas reales + uso previsto',
        extension: '1 archivo digital + 1 página de cuaderno',
      },
      criterios: [
        'Pregunta acotada en 1 frase clara',
        '20 filas reales (no inventadas)',
        '3-5 columnas tipadas correctamente',
        'Cero filas incompletas',
        'Uso previsto declarado',
        'El archivo se puede abrir y leer sin explicación oral',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la recolección de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia el link o archivo con un compañero. Abre el suyo sin que te explique.',
        'Califica del 1 al 5: (a) ¿pregunta acotada y específica?, (b) ¿20 filas reales sin inventar?, (c) ¿uso previsto claro?',
        'Marca con ✨ la decisión más fuerte y con 🚩 los huecos (pregunta vaga, datos genéricos).',
        'Conversen 5 min sobre qué cambiarían para que la tabla sirviera realmente para decidir algo.',
      ],
      cuaderno: {
        titulo: 'Evaluación de la recolección de [nombre]',
        formato: '3 calificaciones con justificación + marcas + 1 sugerencia',
        extension: '3 calificaciones + 1 sugerencia',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Marqué decisiones fuertes y huecos',
        'La sugerencia es accionable',
        'La conversación cerró con compromiso de mejora',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica la phronesis del dato',
      instrucciones:
        '5 preguntas para confirmar que dominas el principio "pregunta antes que dato". Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué hace que una pregunta sea "acotada" para recolectar datos?',
          opciones: [
            'Que sea corta',
            'Que se pueda responder con datos contables y sea específica',
            'Que la haga un profesor',
            'Que se pueda hacer en encuesta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Acotada = específica + contestable con datos. "¿Cuántos minutos diarios pasan en TikTok los lunes?" funciona. "¿Cómo usan el celular?" no.',
          feedbackIncorrecto:
            'Específica + contestable con datos. "¿Cómo va el curso?" no es acotada — no se sabe qué medir. "¿Cuánto tiempo dedican a leer fuera del colegio?" sí lo es.',
        },
        {
          enunciado: '¿Por qué encuestar SOLO a 5 amigos cercanos no es buena muestra?',
          opciones: [
            'Son pocos',
            'Tienen sesgo de origen — comparten contigo gustos y rutinas',
            'No saben responder',
            'Es ilegal',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Sesgo de origen: tus amigos se parecen a ti. Para que la muestra sea útil debe representar la diversidad de tu grupo objetivo.',
          feedbackIncorrecto:
            'Sesgo de origen. Tus 5 amigos comparten contigo características (gustos, barrio, rutinas) que hacen sus respuestas predecibles y no representativas del curso.',
        },
        {
          enunciado: 'Si recolectas datos sin declarar "uso previsto", ¿qué pasa?',
          opciones: [
            'Nada, está bien igual',
            'La recolección se vuelve acumulación sin propósito — datos que nunca llevan a decisión',
            'Los datos caducan',
            'Te ponen mala nota',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Sin uso previsto, recolectas y nunca decides. Es lo más común de la era digital: apps con mil datos tuyos que tú no usas para decidir nada.',
          feedbackIncorrecto:
            'Acumulación sin propósito. El uso previsto es lo que separa al analista del que junta cosas "por si acaso". Sin él, la recolección queda en cero decisiones.',
        },
        {
          enunciado: '¿Qué columna NO debería existir en una tabla profesional?',
          opciones: [
            'Una columna "Fecha" con formato dd/mm/aaaa',
            'Una columna "Edad-Género" que mezcla "14-F", "15-M"',
            'Una columna "Notas" con números del 0 al 5',
            'Una columna "Nombre" con texto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Edad-Género" mezcla 2 variables en 1 columna. Eso impide filtrar por edad o por género por separado. Debe partirse en 2 columnas: "Edad" y "Género".',
          feedbackIncorrecto:
            'La mezcla de variables en una columna rompe filtros y fórmulas. "Edad" y "Género" deben ser columnas separadas para poder analizar cada variable independientemente.',
        },
        {
          enunciado:
            'En el saber ancestral de la libreta de cosecha, ¿qué aplica directamente a tu próxima recolección digital?',
          opciones: [
            'Nada — la abuela no usaba Excel',
            'Que contar sin propósito es desperdicio; con propósito, cada cifra encuentra decisión',
            'Que se debe contar a mano',
            'Que la abuela siempre tenía razón',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La abuela contaba racimos para decidir cuánto sembrar. Tú recoges datos para decidir qué cambiar. Mismo principio en distinta tecnología.',
          feedbackIncorrecto:
            'Contar con propósito. La abuela y tu Excel comparten lógica: cada cifra debe llevar a una decisión concreta. Sin eso, el conteo es acumulación.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, sigue recolectando 5 datos diarios sobre tu pregunta — llega a 50 datos reales para la próxima sesión. La tabla bien hecha hoy es la base de todo el periodo. El próximo lunes traemos los datos para estructurarlos en tablas serias.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Lo que no se cuenta no existe en la decisión pública — contar es ya un acto político.',
      preguntaEspejo:
        '¿Qué de mi vida está siendo contado por apps sin que yo decida? ¿Y qué decido yo contar de mí mismo con criterios propios?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La phronesis empieza por la pregunta antes que por la respuesta.',
      preguntaEspejo:
        '¿Estoy recolectando datos para decidir mejor o para sentirme productivo? ¿Cuál fue la última decisión real que tomé desde una tabla mía?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada dato registrado es un acto informacional que modifica la infoesfera personal y colectiva.',
      preguntaEspejo:
        '¿Mi recolección de hoy aporta a una infoesfera más útil para mí y mi comunidad, o solo agrega ruido a la mía y a la de las plataformas?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de consumidor pasivo de datos a productor con criterio — primer paso de soberanía cognitiva.',
    emocional:
      'Resististe la tentación de "recoger cualquier cosa". Entendiste que pregunta antes que dato es disciplina, no obstáculo.',
    ciudadana:
      'Reconociste que decidir qué contar es político — herramienta básica para defenderte de algoritmos que cuentan por ti.',
    local:
      'Heredaste la libreta de cosecha del campo colombiano: contar para decidir, no para acumular.',
    intergeneracional:
      'La abuela contadora de cosechas y tu primera tabla digital comparten ética. Lo que cambia es la herramienta, no la phronesis.',
  },
};

export default contenido;
