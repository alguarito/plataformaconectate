/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 9
 * Tema: Insights — del dato a la decisión.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-9.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 9,
  titulo: 'Insights — del dato a la decisión',
  ocultarPDF: false,
  resumen:
    'Un insight no es un número ni un gráfico: es la lectura que conecta dato con decisión. Aprendes la anatomía dato → hallazgo → decisión y produces un reporte de 1 página con 3 insights accionables sobre tus propios datos.',
  duracionMin: 90,
  subtema: 'Datos · Decisión accionable',

  saberAncestral: {
    saber:
      'Antes de los meteorólogos, los campesinos del Valle leían el cielo: nubes a tres días, viento del norte, hormigas marchando en fila, ranas cantando antes del atardecer. El pescador afro-pacífico leía la mar: color del agua, viento, gaviotas. Esos eran sus insights: patrones leídos en señales que el resto veía sin mirar, y que llevaban a decisiones concretas — sembrar hoy, esperar, cosechar. Un insight no era predicción adivinada: era patrón con dato detrás y decisión que se desprende.',
    fuente: 'Lectura del cielo del campesino del Valle y lectura de la mar del pescador afro-pacífico',
    preguntaPuente:
      '¿Cómo sabía el campesino que las hormigas marchando significaban lluvia? ¿Y qué pierde un analista novato cuando entrega un reporte lleno de gráficos sin haber escrito un solo insight con decisión clara?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El campesino lee el cielo', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Insight vs decoración', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del insight', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Reporte de 3 insights', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'El analista contemporáneo no cierra su trabajo en el gráfico: cierra en la decisión. Un reporte que no nombra qué hacer es entretenimiento; uno que sí, es responsabilidad pública.',
    preguntaDetonante:
      'Si tuvieras 5 minutos con el rector para mostrar lo que aprendiste del periodo, ¿qué le dirías para que cambie algo concreto el próximo mes?',
    activacion: {
      titulo: 'Lectura del cielo',
      descripcion:
        'En 3 minutos: cada estudiante nombra un "insight cotidiano" de su semana — un patrón observado y una decisión que tomó por ese patrón. Ejemplo: "vi que duermo 4h los días de exámen, decidí estudiar la víspera, no el día".',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 8 aprendiste a auditar gráficos engañosos. Hoy cierras el ciclo: convertir tu propio trabajo del periodo en 3 insights con decisión clara.',
      siguiente:
        'En la sesión 10 sustentas el mini-estudio completo: pregunta de investigación, datos, análisis, gráficos, insights y decisión propuesta.',
    },
  },

  conceptosClave: [
    {
      termino: 'Dato',
      definicion:
        'El número, promedio, diferencia entre grupos, rango o tasa. La evidencia objetiva que sostiene el insight.',
      ejemplo:
        '"El promedio de gasto en transporte del 9B es 32.000; el del 9A es 20.000".',
      emoji: '🔢',
    },
    {
      termino: 'Hallazgo',
      definicion:
        '1 frase clara que expresa el patrón leído sobre el dato. La lectura humana de la evidencia.',
      ejemplo:
        '"El gasto en transporte del 9B es 60% más alto que el del 9A".',
      emoji: '🔍',
    },
    {
      termino: 'Decisión',
      definicion:
        '1 frase con la acción concreta que se desprende. Sin decisión, el hallazgo es comentario.',
      ejemplo:
        '"Revisar si la ruta del barrio Macarena (donde vive la mayoría del 9B) requiere intervención".',
      emoji: '✅',
    },
    {
      termino: 'Quién decide',
      definicion:
        'Persona o rol que debería actuar. La acción sin dueño se queda sin ejecutar.',
      ejemplo:
        '"Coordinación académica + responsable de transporte escolar".',
      emoji: '👤',
    },
    {
      termino: 'Plazo',
      definicion:
        'Esta semana / este mes / este periodo. Una decisión sin plazo no es decisión: es deseo.',
      ejemplo:
        '"Esta semana revisar; el próximo mes proponer ajuste de ruta".',
      emoji: '📅',
    },
    {
      termino: 'Orden por importancia',
      definicion:
        'Los 3 insights se ordenan por cuánto importan, no por orden cronológico de descubrimiento. El más importante primero.',
      ejemplo:
        'Si el lector solo lee el Insight 1, debe quedarse con lo esencial.',
      emoji: '🥇',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Insight vs decoración',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu carpeta del periodo (tabla, fórmulas, filtros, tabla dinámica, gráficos).',
        'Para cada elemento pregunta: "¿qué decisión cambiaría si esto fuera real?".',
        'Marca ✨ los que sí cambiarían una decisión, 🗑️ los que solo decoran.',
        'Cuenta cuántos elementos quedaron como insight potencial.',
      ],
      cuaderno: {
        titulo: 'Insight vs decoración',
        formato: 'Tabla 3 columnas (Elemento | Decisión que cambiaría | ✨ o 🗑️)',
        extension: '6-10 filas + 1 conteo final',
      },
      criterios: [
        'Pasé por cada elemento con la pregunta clave',
        'Marqué accionables y decorativos',
        'Reconozco honestamente la proporción',
        'Identifico los 3 elementos con mayor potencial de insight',
      ],
    },
    {
      numero: 2,
      verbo: 'EVALÚA',
      titulo: 'Anatomía del insight',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 5 partes del insight (dato, hallazgo, decisión, quién, plazo).',
        'Lista los 5 errores comunes y marca con 🚨 el que más cometes.',
        'Toma uno de tus elementos ✨ y escríbelo como insight completo.',
        'Léelo a un compañero y verifica que entiende qué hacer.',
      ],
      cuaderno: {
        titulo: 'Anatomía del insight',
        formato: 'Ficha con 5 partes + lista de 5 errores + 1 insight de práctica',
        extension: '1 ficha + 1 insight de prueba',
      },
      criterios: [
        'La ficha tiene las 5 partes',
        'Identifico mi error más frecuente',
        'El insight de práctica tiene anatomía completa',
        'Un compañero entendió la decisión sin más explicación',
      ],
    },
    {
      numero: 3,
      verbo: 'EXPLICA',
      titulo: 'Explica tu mejor insight',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte tu insight de práctica con un compañero, sin contexto adicional.',
        'El compañero debe poder responder qué hacer, quién y en qué plazo.',
        'Recibe retroalimentación: ¿qué frase sobra?, ¿qué quedó confuso?, ¿qué falta?',
        'Reescribe el insight con la retroalimentación recibida.',
      ],
      cuaderno: {
        titulo: 'Explicación cruzada con [nombre]',
        formato: 'Insight original + retroalimentación + versión reescrita',
        extension: '3 versiones (original, feedback, final)',
      },
      criterios: [
        'El compañero entendió la decisión',
        'Recibí retroalimentación específica',
        'Reescribí con criterio (no a ciegas)',
        'La versión final es más clara que la original',
      ],
    },
    {
      numero: 4,
      verbo: 'CREA',
      titulo: 'Reporte de 3 insights',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe la pregunta de investigación de Sesión 1 al inicio del reporte.',
        'Elige los 3 datos más significativos del periodo.',
        'Escribe dato + hallazgo + decisión + quién + plazo para cada uno.',
        'Ordena por importancia descendente; verifica que cabe en 1 página.',
      ],
      cuaderno: {
        titulo: 'Reporte de 3 insights',
        formato: '1 página con título + pregunta + 3 insights estructurados',
        extension: '1 página de cuaderno o A4',
      },
      criterios: [
        'Pregunta de investigación incluida al inicio',
        '3 insights con anatomía completa',
        'Cada insight nombra quién decide y plazo',
        'Ordenados por importancia, no por orden cronológico',
        'Un lector ajeno entiende las 3 decisiones sin tu explicación',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica anatomía del insight',
      instrucciones:
        '5 preguntas para confirmar que escribes insights accionables. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué hace que un hallazgo se vuelva un insight?',
          opciones: [
            'Un gráfico bonito',
            'La decisión concreta que se desprende del hallazgo',
            'Que use jerga profesional',
            'Que sea largo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Sin decisión, el hallazgo es comentario. La decisión es el cierre obligado.',
          feedbackIncorrecto:
            'La decisión convierte hallazgo en insight. Un gráfico bonito sin decisión sigue siendo decoración.',
        },
        {
          enunciado: '"Hay variación en la columna X" — ¿es un insight?',
          opciones: [
            'Sí, describe el dato',
            'No, es descripción genérica sin hallazgo claro ni decisión',
            'Depende del contexto',
            'Sí, si lo acompaña un gráfico',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. "Hay variación" no nombra patrón ni decisión. Es descripción vacía. Reescríbelo nombrando el patrón concreto y la acción.',
          feedbackIncorrecto:
            'No basta. "Hay variación" es descripción. Falta el patrón leído y la decisión concreta que se desprende.',
        },
        {
          enunciado: '¿Por qué ordenar los insights por importancia y no cronológicamente?',
          opciones: [
            'Es lo mismo',
            'Porque el lector apurado lee solo el primero y debe quedarse con lo esencial',
            'Por estética',
            'Por costumbre',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Respeto al lector: si lee solo el Insight 1, debe llevarse el más importante. El orden cronológico es egoísmo de quien escribió.',
          feedbackIncorrecto:
            'Importancia, no cronología. El lector apurado merece el insight clave primero.',
        },
        {
          enunciado: '¿Por qué nombrar "quién decide" en un insight?',
          opciones: [
            'Para llenar espacio',
            'Porque una acción sin dueño se queda sin ejecutar',
            'Por formato',
            'Por respeto a las jerarquías',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La acción nombrada sin dueño nunca pasa. Asignar responsabilidad es parte del insight.',
          feedbackIncorrecto:
            'Sin dueño no hay ejecución. Un insight bien escrito dice qué, quién y cuándo.',
        },
        {
          enunciado: 'En el saber ancestral del campesino, ¿qué aplica al insight contemporáneo?',
          opciones: [
            'Nada',
            'Un insight no es predicción adivinada: es patrón con dato detrás y decisión que se desprende',
            'Que el clima es predecible',
            'Que la intuición basta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El campesino leía las hormigas → decidía sembrar. Tú lees el promedio → decides intervención. Mismo gesto.',
          feedbackIncorrecto:
            'Patrón + dato + decisión. El insight es traducción contemporánea de la lectura del cielo del campesino.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, toma un reporte cotidiano (boletín escolar, factura, recibo) e identifica un insight con dato + hallazgo + decisión. Compártelo con quien pueda actuar.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un insight que no nombra a las víctimas se vuelve cómplice del problema que pretende analizar.',
      preguntaEspejo:
        'En mis 3 insights, ¿quién aparece beneficiado y quién queda invisible? ¿Hay un insight que solo nombre el promedio cuando debería nombrar a los extremos?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Lo que se dice con menos palabras se entiende con más fuerza.',
      preguntaEspejo:
        '¿Mis insights usan jerga para parecer más profesionales o están escritos para que cualquier persona los entienda? ¿Qué palabras puedo eliminar sin perder sentido?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Sin decisión, el trabajo con datos es entretenimiento; con decisión, es responsabilidad pública.',
      preguntaEspejo:
        '¿Cuántos reportes leí esta semana sin ver una sola decisión clara? ¿Cuántos datos compartí o produje yo sin cerrar con una acción concreta?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a cerrar todo análisis con una decisión clara. Esa disciplina te servirá en presupuestos, hábitos, proyectos personales.',
    emocional:
      'Resististe la tentación de inflar con jerga. Escribir con sencillez es respeto al lector y al propio pensamiento.',
    ciudadana:
      'Un insight accionable es responsabilidad pública. Los datos sin decisión son ruido informativo, no servicio civil.',
    local:
      'El campesino del Valle, el pescador del Pacífico, la abuela en la libreta: oficios del insight con saber heredado.',
    intergeneracional:
      'Las hormigas marchando y el promedio comparativo cumplen la misma función: decidir qué hacer. Cambia el medio, no el oficio.',
  },
};

export default contenido;
