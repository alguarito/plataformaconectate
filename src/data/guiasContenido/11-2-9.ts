/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 9
 * Tema: Mejora continua — Kaizen aplicado a procesos digitales.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-9.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 9,
  titulo: 'Mejora continua — Kaizen aplicado a procesos digitales',
  ocultarPDF: false,
  resumen:
    'El oficio se afina con repetición y crítica. Aprendes a usar tu proceso como usuario, identificar fricciones reales y proponer 3 mejoras priorizadas con matriz impacto-esfuerzo y plan de implementación.',
  duracionMin: 90,
  subtema: 'Automatización · Mejora continua',

  saberAncestral: {
    saber:
      'El maestro carpintero miraba la silla terminada y veía qué podría haber salido mejor; al día siguiente corregía. La tejedora Wayuu apretaba más uniforme cada manta; la cocinera ajustaba el sancocho receta tras receta. Nunca se daba por terminado el oficio: cada pieza era un poco mejor que la anterior. Los japoneses le pusieron nombre técnico (Kaizen), pero el gesto existía mucho antes en el saber del oficio.',
    fuente: 'Maestro carpintero, tejedora Wayuu y cocinera mayor — todos kaizen sin saberlo',
    preguntaPuente:
      '¿Cómo sabía la tejedora qué ajuste pequeño no era perfeccionismo sino aprendizaje real? ¿Y qué pierde un emprendedor novato cuando, al final del periodo, abandona el proceso "porque ya funciona" en lugar de proponer 3 mejoras que lo dejen 30% mejor en un mes?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El oficio se afina', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Usa tu propio proceso', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de la mejora', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '3 mejoras priorizadas', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Toda organización contemporánea que merezca seguir existiendo aplica algún ciclo de mejora continua. Es la ética profesional mínima del XXI.',
    preguntaDetonante:
      'Si tu proceso ya funciona razonable, ¿qué 3 cambios pequeños lo dejarían 30% mejor en un mes — y por dónde empezarías?',
    activacion: {
      titulo: 'Mira tu propia silla',
      descripcion:
        'En 3 minutos: cada estudiante nombra UN detalle de su proceso del periodo que sabe que podría mejorar pero no lo ha tocado. Reconocen que el oficio nunca termina.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 8 mediste con 5 KPIs si el proceso está sano. Hoy usas esos KPIs como evidencia para proponer 3 mejoras concretas.',
      siguiente:
        'En la sesión 10 cierras el periodo presentando todo el camino: proceso, automatización, métricas y mejoras propuestas.',
    },
  },

  conceptosClave: [
    {
      termino: 'Ciclo PDCA',
      definicion:
        'Plan-Do-Check-Act. El motor de Kaizen: planificar la mejora, hacerla, verificar con KPI, ajustar.',
      ejemplo:
        'Plan: reordenar menú del bot. Do: implementar. Check: tasa de finalización subió. Act: dejar el cambio.',
      emoji: '🔄',
    },
    {
      termino: 'Fricción',
      definicion:
        'Punto del proceso donde el usuario o el operador siente que algo no fluye. Materia prima de Kaizen.',
      ejemplo:
        '"El menú del bot tiene la opción más usada al final" — fricción detectada al usarlo.',
      emoji: '⚠️',
    },
    {
      termino: 'Matriz impacto-esfuerzo',
      definicion:
        'Cuadrante 2×2 para priorizar. Empieza por alto impacto / bajo esfuerzo (quick wins).',
      ejemplo:
        'Mover botón = bajo esfuerzo / alto impacto → quick win. Rediseñar todo = alto/alto → planificar.',
      emoji: '🔲',
    },
    {
      termino: 'Quick win',
      definicion:
        'Cambio de bajo esfuerzo y alto impacto. Se implementa esta semana. Genera movimiento real.',
      ejemplo:
        'Mover botón "escape humano" al header del chatbot: 30 minutos, alto impacto.',
      emoji: '⚡',
    },
    {
      termino: 'Plan en 2 frases',
      definicion:
        'Esta semana: X. Próxima semana: Y. Concreción que separa idea de compromiso.',
      ejemplo:
        '"Esta semana: rediseño el menú. Próxima semana: pruebo con 5 usuarios y mido tasa de finalización."',
      emoji: '📝',
    },
    {
      termino: 'KPI asociado',
      definicion:
        'El indicador que medirá si la mejora funcionó. Sin KPI, no hay ciclo PDCA cerrado.',
      ejemplo:
        'Mejora: reducir tiempo de respuesta. KPI: tiempo promedio de primera respuesta del bot.',
      emoji: '📊',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Usa tu propio proceso',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Durante 10 minutos, actúa como usuario final de tu proceso del periodo.',
        'Envía el Form, recibe el email automático, conversa con el bot, mira el dashboard.',
        'Anota TODA fricción real sin filtrar: campo confuso, mensaje feo, espera larga, métrica difícil.',
        'Identifica al menos 5 fricciones concretas.',
      ],
      cuaderno: {
        titulo: 'Usa tu propio proceso',
        formato: 'Tabla 5+ filas × 3 columnas (Fricción | Dónde ocurre | Impacto)',
        extension: '5+ filas',
      },
      criterios: [
        'Actué como usuario, no como diseñador',
        'No censuré fricciones reales',
        '5+ fricciones identificadas',
        'Reconozco las fallas de mi propio diseño',
      ],
    },
    {
      numero: 2,
      verbo: 'EVALÚA',
      titulo: 'Anatomía de la mejora',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 5 partes de la mejora + dibuja la matriz 2×2.',
        'Lista los 5 errores comunes y marca 🚨 el que más temes.',
        'Ubica conceptualmente las 5 fricciones de Actividad 1 en la matriz.',
        'Identifica cuáles son quick wins y cuáles requieren planificar.',
      ],
      cuaderno: {
        titulo: 'Anatomía de la mejora',
        formato: 'Ficha 5 partes + matriz + 5 errores + ubicación de fricciones',
        extension: '1 ficha + 1 matriz',
      },
      criterios: [
        'Las 5 partes con definición',
        'Matriz dibujada con 4 cuadrantes',
        '5 fricciones ubicadas',
        'Identifico quick wins en mi proceso',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: '3 mejoras priorizadas',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Selecciona las 3 fricciones más graves entre las identificadas.',
        'Redacta cada mejora con las 7 partes de anatomía (fricción, cambio, impacto, esfuerzo, plan, KPI, cuadrante).',
        'Ubícalas en la matriz impacto-esfuerzo.',
        'Define orden de implementación (quick wins primero) y plan global.',
      ],
      cuaderno: {
        titulo: '3 mejoras priorizadas',
        formato: '3 fichas + matriz dibujada + plan global',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        '3 mejoras con las 7 partes',
        'Matriz con las 3 ubicadas',
        'Quick win identificado y priorizado',
        'Plan en 2 frases por mejora',
        'KPI asociado a cada mejora',
      ],
    },
    {
      numero: 4,
      verbo: 'EXPLICA',
      titulo: 'Explica el plan a un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte el plan con un compañero sin que vea tu cuaderno.',
        'En menos de 3 minutos, explícale: las 3 mejoras + orden + por qué quick win primero.',
        'Pídele que critique: ¿alguna mejora le parece vaga, cara o sin decisión?',
        'Ajusta al menos 1 mejora basado en su retroalimentación.',
      ],
      cuaderno: {
        titulo: 'Crítica cruzada con [nombre]',
        formato: '3 críticas recibidas + 1 ajuste aplicado',
        extension: '1 evaluación cruzada',
      },
      criterios: [
        'Expliqué en menos de 3 minutos',
        'Recibí crítica específica',
        '1 ajuste aplicado',
        'Reconozco la diferencia entre "yo lo entiendo" y "es ejecutable por otros"',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica Kaizen y mejora continua',
      instrucciones:
        '5 preguntas para confirmar que propones mejoras Kaizen accionables. Necesitas 3/5.',
      preguntas: [
        {
          enunciado: 'Tu propuesta dice "mejorar comunicación". ¿Qué problema tiene?',
          opciones: [
            'Ninguno',
            'Mejora vaga: no se puede implementar ni medir. Falta cambio operativo concreto + KPI',
            'Es buena',
            'Solo le falta color',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Mejorar comunicación" no es propuesta — es deseo. Reformula con cambio operativo concreto.',
          feedbackIncorrecto:
            'Vaguedad. Reescribir como: "Mover botón X a Y para que Z" — concreto, implementable, medible.',
        },
        {
          enunciado: '¿Por dónde empezar a implementar mejoras?',
          opciones: [
            'Por la más ambiciosa',
            'Por los quick wins: alto impacto / bajo esfuerzo. Generan movimiento real',
            'Por orden alfabético',
            'Por la más cara',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Quick wins primero. Tres mejoras chicas implementadas valen más que diez grandes propuestas.',
          feedbackIncorrecto:
            'Quick wins. Kaizen prioriza movimiento real sobre idea grande. La implementación es la medida del valor.',
        },
        {
          enunciado: 'Tu mejora no tiene KPI asociado. ¿Qué falta?',
          opciones: [
            'Nada',
            'Le falta el cierre del ciclo PDCA: sin KPI no puedes verificar si funcionó',
            'Color',
            'Más texto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Sin KPI antes-después, no hay Kaizen real, solo cambio. El ciclo PDCA exige verificación con dato.',
          feedbackIncorrecto:
            'Cierre del ciclo. Cada mejora necesita su KPI para que el Check del PDCA funcione.',
        },
        {
          enunciado: '¿Por qué 3 mejoras y no 15?',
          opciones: [
            'Por estética',
            'Porque la energía se dispersa con 15; 3 bien ejecutadas dejan el proceso 30% mejor en un mes',
            'Da igual',
            'Por presupuesto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Concentración sobre dispersión. 3 ciclos PDCA cerrados al mes producen más que 15 propuestos.',
          feedbackIncorrecto:
            'Concentración. Kaizen valora el ciclo cerrado sobre la idea grande. 3 implementadas vencen a 15 propuestas.',
        },
        {
          enunciado: 'En el saber ancestral del oficio, ¿qué aplica a Kaizen?',
          opciones: [
            'Nada — Kaizen es japonés',
            'El maestro carpintero, la tejedora y la cocinera afinaban cada pieza: la sabiduría del oficio coincide con Kaizen',
            'Solo en Japón funciona',
            'Es invento del siglo XX',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Kaizen es palabra nueva para sabiduría antigua. El oficio del Valle ya hacía mejora continua antes de que tuviera nombre técnico.',
          feedbackIncorrecto:
            'Sabiduría antigua. La palabra es japonesa, el gesto es universal: refinar pieza a pieza es oficio de cualquier maestro.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, implementa la mejora 1 (quick win) y mide con el KPI asociado antes y después. Si el KPI cambió favorablemente, documenta el caso; si no, ajusta o reemplaza la mejora.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda mejora decide a quién se le ahorra trabajo y a quién se le agrega.',
      preguntaEspejo:
        'En mis 3 mejoras, ¿quién gana tiempo y quién paga el costo escondido? ¿Hay alguna donde el costo cae sobre un trabajador o usuario sobrecargado?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El oficio nunca se termina de aprender; se afina pieza tras pieza.',
      preguntaEspejo:
        '¿Estoy diseñando mejoras pequeñas implementables o proponiendo un rediseño que nunca se ejecutará? ¿Cuántos ciclos PDCA cerré este periodo?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La mejora continua es la ética profesional del oficio digital contemporáneo.',
      preguntaEspejo:
        '¿Asumo mi proceso como "ya terminé" o como "ahora empieza la mejora continua"? ¿Qué cambia en mi compromiso si acepto que el oficio nunca termina?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a no abandonar lo que ya funciona. Esa disciplina del refinamiento sirve en estudio, deporte, relaciones — toda práctica humana.',
    emocional:
      'Aceptaste que tu propio diseño tiene fricciones. La humildad de criticarse a sí mismo es virtud profesional escasa.',
    ciudadana:
      'Las instituciones públicas mejoran con Kaizen o se quedan rotas. Saber proponer mejoras con evidencia te hace ciudadano técnico, no solo crítico.',
    local:
      'El carpintero, la tejedora, la cocinera del Valle aplicaban Kaizen sin saberlo. El nombre es nuevo; el oficio, antiguo.',
    intergeneracional:
      'Lo que tu abuela hacía afinando recetas y tu abuelo afilando herramientas, tú lo aplicas a procesos digitales. Mismo gesto, distinto medio.',
  },
};

export default contenido;
