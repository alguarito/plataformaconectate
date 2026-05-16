/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 10
 * Tema: Caso real — automatizar un proceso del colegio o la casa.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-10.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 10,
  titulo: 'Caso real — automatizar un proceso del colegio o la casa',
  ocultarPDF: false,
  resumen:
    'El capstone del periodo: aplicas las 9 piezas (mapeo, BPMN, Form, hoja, trigger, IA, bot, KPIs, Kaizen) a un proceso real con dolor real. Entregas con evidencia antes/después, 2 usuarios reales y video de 2-3 minutos.',
  duracionMin: 90,
  subtema: 'Automatización · Capstone',

  saberAncestral: {
    saber:
      'En los pueblos del Valle había una figura hoy subestimada: el reparador del barrio. El relojero ajustaba relojes con paciencia; el soldador arreglaba el silbato del olla express, el cuadro de la bicicleta, la tapa del fogón; la costurera recosía pantalones y subía dobladillos. Tenían tres valores: paciencia para entender qué falla, precisión para tocar solo lo necesario, y devolver algo útil a quien encargó el trabajo. Esa tradición sigue viva en el oficio digital: hoy se reparan procesos que ya casi funcionan pero pierden tiempo, dinero o paciencia.',
    fuente: 'Relojero, soldador y costurera del barrio: la tradición del reparador del Valle del Cauca',
    preguntaPuente:
      '¿Cómo sabía el reparador del barrio cuándo decir "ya está" y cuándo seguir ajustando? ¿Y qué pierde un emprendedor novato cuando entrega un proyecto sin evidencia antes/después, sin usuarios reales y sin haber medido lo que cambió?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El reparador del barrio', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: '3 candidatos a capstone', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del capstone', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Plan completo del capstone', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una entrega sin evidencia es declaración de fe, no oficio profesional. La cultura digital exige evidencia reproducible: lo que no se mide ni se muestra, no existe. Cerrar el periodo con un capstone con evidencia te entrena en esa ética profesional del siglo XXI.',
    preguntaDetonante:
      'Si un emprendedor del barrio te dijera "ayúdame a no perder pedidos por WhatsApp", ¿qué le entregarías en una semana para demostrar que tu trabajo le mejoró la vida?',
    activacion: {
      titulo: 'El reparador del barrio',
      descripcion:
        'En 3 minutos: cada estudiante nombra al "reparador" que conoció o recuerda en su barrio. Reconocen los tres valores: paciencia, precisión, devolver algo útil. Es la base ética del capstone.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En las 9 sesiones anteriores aprendiste mapeo, BPMN, Form, hoja, trigger, IA, bot, KPIs y Kaizen. Hoy las integras en un solo caso real con evidencia.',
      siguiente:
        'En el periodo 3 abrirás Proyecto final emprendedor: tomar este capstone (o un caso nuevo) y llevarlo a producto viable con modelo de negocio.',
    },
  },

  conceptosClave: [
    {
      termino: 'Proceso real vs ficticio',
      definicion:
        'Real: existe, duele a alguien, hay usuarios verificables. Ficticio: inventado, sin dueño, sin dolor concreto.',
      ejemplo:
        'Real: agendamiento del peluquero del barrio. Ficticio: "una empresa imaginaria de helados".',
      emoji: '✅',
    },
    {
      termino: 'KPIs antes/después',
      definicion:
        'Mismos 3-5 KPIs medidos antes de intervenir y después. Sin antes, no hay evidencia de mejora.',
      ejemplo:
        'Antes: 8 pedidos perdidos por semana. Después: 1 pedido perdido. KPI: % de pedidos atendidos.',
      emoji: '📊',
    },
    {
      termino: '2 usuarios reales validando',
      definicion:
        'Testimonios escritos o filmados de personas que usaron el proceso nuevo. No "como si".',
      ejemplo:
        'Testimonio del peluquero: "antes me llamaban 30 veces, ahora reciben respuesta automática y solo me llaman los confirmados".',
      emoji: '👥',
    },
    {
      termino: 'Bitácora del ciclo',
      definicion:
        'Registro diario de qué se hizo, qué falló, qué se ajustó. Permite reproducir el trabajo.',
      ejemplo:
        '"Día 3: el Zap falló porque el campo email tenía espacios. Ajusté trim() en Apps Script. Funcionó al cuarto intento."',
      emoji: '📔',
    },
    {
      termino: 'Video de sustentación (2-3 min)',
      definicion:
        'Acto público que cierra el capstone. Estructura en 3 actos: caso, antes/después, propuesta.',
      ejemplo:
        'Minuto 1: caso. Minuto 2: antes/después con KPIs. Minuto 3: qué sigue y a quién contactar.',
      emoji: '🎬',
    },
    {
      termino: 'Honestidad de lo que no funcionó',
      definicion:
        'Declarar en el video lo que falló, lo que se ajustó y lo que aún no se resolvió. Virtud profesional.',
      ejemplo:
        '"El chatbot funciona, pero el escape humano aún no notifica al dueño en tiempo real — pendiente para la semana próxima."',
      emoji: '🪞',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 candidatos a capstone',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota 3 procesos reales cercanos que duelan (casa, colegio, barrio).',
        'Para cada uno: ¿a quién duele?, ¿qué KPI se mide antes?, ¿lo implementas en 1 semana?',
        'Compara los 3 y elige uno con justificación de 1 frase.',
        'Identifica al "reparador" — la persona real a quien le entregarás el caso al final.',
      ],
      cuaderno: {
        titulo: '3 candidatos a capstone',
        formato: 'Tabla 3 filas × 4 columnas (Candidato | A quién duele | KPI | Viabilidad)',
        extension: '3 filas + 1 elección + 1 destinatario',
      },
      criterios: [
        '3 candidatos reales (no ficticios)',
        '3 dimensiones evaluadas',
        'Elección con justificación',
        'Destinatario real identificado',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía del capstone',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con los 7 entregables del capstone + 6 errores comunes.',
        'Aplica los 7 entregables a tu caso elegido.',
        'Marca 🚨 el error que más temes cometer.',
        'Bosqueja el cronograma semanal de implementación.',
      ],
      cuaderno: {
        titulo: 'Anatomía del capstone',
        formato: 'Ficha 7 entregables + 6 errores + cronograma de 5-7 días',
        extension: '1 ficha + 1 cronograma',
      },
      criterios: [
        '7 entregables aplicados a mi caso',
        '6 errores con marca',
        'Cronograma de 5-7 días con tareas concretas',
        'Identifico mis riesgos antes de empezar',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Plan completo del capstone',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Redacta el caso en 3 líneas (dueño, dolor, KPI inicial).',
        'Mide los 3-5 KPIs antes con datos reales actuales.',
        'Agenda 2 entrevistas con usuarios reales para validar después.',
        'Escribe el guion del video en 3 actos (caso, antes/después, propuesta).',
      ],
      cuaderno: {
        titulo: 'Plan del capstone',
        formato: 'Caso + cronograma + KPIs antes + usuarios agendados + guion del video',
        extension: '2 páginas de cuaderno',
      },
      criterios: [
        'Caso real con dueño/dolor/KPI',
        'KPIs antes ya medidos',
        '2 usuarios agendados',
        'Guion del video en 3 actos',
        'Herramientas listas',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Crítica cruzada antes de implementar',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte tu plan con un compañero sin tu explicación.',
        'El compañero audita: ¿el caso es real?, ¿los KPIs son medibles?, ¿el cronograma es viable?, ¿el video tiene los 3 actos?',
        'Recibe crítica escrita y aplica al menos 1 ajuste antes de empezar.',
        'Acuerda con el compañero una revisión a mitad de semana para apoyarse mutuamente.',
      ],
      cuaderno: {
        titulo: 'Crítica cruzada con [nombre]',
        formato: '4 auditorías + 1 ajuste aplicado + acuerdo de revisión',
        extension: '1 evaluación cruzada',
      },
      criterios: [
        'El compañero auditó los 4 puntos',
        '1 ajuste aplicado al plan',
        'Acuerdo de revisión a mitad de semana',
        'Reconozco que el plan público se defiende mejor que el plan privado',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el capstone',
      instrucciones:
        '5 preguntas para confirmar que tu capstone tendrá calidad profesional. Necesitas 3/5.',
      preguntas: [
        {
          enunciado: 'Tu capstone presenta KPIs solo del "después". ¿Cuál es el problema?',
          opciones: [
            'Ninguno, lo importante es el resultado',
            'Sin KPIs antes, no hay evidencia de mejora — solo declaración de fe',
            'Falta diseño',
            'Falta color',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Antes y después se miden con el mismo KPI. Sin antes, no puedes demostrar que algo cambió.',
          feedbackIncorrecto:
            'KPIs antes son indispensables. Medir antes de intervenir es la disciplina que separa el oficio del ejercicio.',
        },
        {
          enunciado: 'Tu caso es "una empresa imaginaria de helados". ¿Qué falla?',
          opciones: [
            'Nada',
            'Es ficticio: rompe el oficio profesional. El capstone exige proceso real con usuarios reales',
            'Helados es mal tema',
            'Falta presupuesto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La phronesis del oficio resiste el "como si". Cambia a proceso real cercano: tu casa, tu colegio, tu barrio.',
          feedbackIncorrecto:
            'Realidad innegociable. Sin proceso real, dueño real y usuario real, el capstone es ejercicio escolar disfrazado.',
        },
        {
          enunciado: '¿Cuántas piezas del periodo debes integrar mínimo en el capstone?',
          opciones: [
            'Las 9',
            '3 piezas integradas bien valen más que 9 a medias',
            'Solo 1',
            '10',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La ambición técnica sin terminar es peor que el alcance modesto bien ejecutado. 3+ piezas funcionando.',
          feedbackIncorrecto:
            'Calidad sobre cantidad. Mejor 3 piezas que funcionan que 9 a medias. La ambición se cobra con bugs.',
        },
        {
          enunciado: '¿Qué hace especial al video de sustentación de 2-3 minutos?',
          opciones: [
            'Que sea bonito',
            'Estructura en 3 actos (caso, antes/después, propuesta) y honestidad de lo que no funcionó',
            'Que sea largo',
            'Que tenga música',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Estructura + honestidad. El video bien hecho convence con claridad y transparencia, no con producción.',
          feedbackIncorrecto:
            '3 actos + honestidad. La estructura ayuda al lector; la honestidad gana su confianza. Ambas son virtudes profesionales.',
        },
        {
          enunciado: 'En el saber del reparador del barrio, ¿qué aplica al capstone?',
          opciones: [
            'Nada — son oficios distintos',
            'Paciencia, precisión y devolver algo útil al que encargó el trabajo: las tres virtudes del oficio digital',
            'Que el papel basta',
            'Que reparar es obsoleto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El relojero, el soldador, la costurera entregaban algo útil con paciencia y precisión. Tu capstone retoma el oficio.',
          feedbackIncorrecto:
            'Las tres virtudes del oficio. Paciencia para entender, precisión para tocar solo lo necesario, devolver algo útil. El medio cambia, el oficio no.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, ejecuta el cronograma. Mantén la bitácora diaria abierta y registra lo que falla. Entrega el caso al dueño real antes de presentarlo en clase.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda automatización decide si libera al trabajador o lo reemplaza, si cuida al usuario o lo descarga.',
      preguntaEspejo:
        'En mi capstone, ¿quién gana y quién pierde con la automatización? ¿Mi video lo declara o lo esconde?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'La honestidad de reportar lo que no funcionó es la prueba final del oficio.',
      preguntaEspejo:
        'En mi video, ¿cuento solo lo que funcionó o también lo que falló, lo que tuve que rehacer, lo que no logré? ¿Quién aprende más del relato honesto?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La entrega con evidencia es la ética profesional del oficio digital contemporáneo.',
      preguntaEspejo:
        '¿Mi capstone tiene la evidencia que un consultor profesional o un inversionista exigirían? ¿O sigue siendo trabajo escolar disfrazado?',
    },
  },

  cincoDimensiones: {
    personal:
      'Integraste 9 piezas técnicas en un caso real. Esa capacidad de cierre es la diferencia entre el aprendiz y el profesional.',
    emocional:
      'Aceptaste declarar lo que no funcionó. Esa honestidad pública es virtud escasa y valiosa.',
    ciudadana:
      'Entregas trabajo real a un destinatario real. Ese gesto repite la ética del reparador del barrio: devolver algo útil a la comunidad.',
    local:
      'El relojero, el soldador, la costurera del Valle: tradición del oficio que repara con paciencia. Tu capstone continúa esa tradición.',
    intergeneracional:
      'Lo que el abuelo reparaba con destornillador, tú lo reparas con Zapier. Mismas tres virtudes (paciencia, precisión, utilidad), distinto medio.',
  },
};

export default contenido;
