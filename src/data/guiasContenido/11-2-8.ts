/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 8
 * Tema: KPIs — métricas que importan en un proceso.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-8.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 8,
  titulo: 'KPIs — métricas que importan en un proceso',
  ocultarPDF: false,
  resumen:
    'Si no se cuenta, no se mejora. Aprendes a definir 5 KPIs SMART de tu proceso, calcular sus valores actuales y montar un dashboard que permita decidir en 30 segundos.',
  duracionMin: 90,
  subtema: 'Automatización · Medir lo que importa',

  saberAncestral: {
    saber:
      'Antes de Excel, los oficios contaban: el cosechero contaba racimos por semana, el panadero llevaba conteo de panes diarios, la tejedora Wayuu sabía cuántas mantas al mes, el lechero medía litros y merma. Esos números no eran adorno: guiaban decisiones. La sabiduría del oficio cabía en 4-6 números bien elegidos. Hoy se llama KPI — y la regla sigue siendo la misma: si no se cuenta, no se mejora.',
    fuente: 'Conteo del cosechero, panadero, tejedora Wayuu y lechero del Valle del Cauca',
    preguntaPuente:
      '¿Cómo sabía el lechero que el porcentaje de merma valía la pena contar y el color del cuaderno no? ¿Y qué pierde un emprendedor novato cuando construye un dashboard de 25 métricas en lugar de elegir las 5 que sí mueven el proceso?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La cosecha del oficio', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Dashboard claro vs ruidoso', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía SMART', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: '5 KPIs + dashboard de tu proceso', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Toda organización contemporánea decide mirando un dashboard. Diseñar KPIs SMART y dashboards legibles es alfabetización profesional decisiva.',
    preguntaDetonante:
      'Si un emprendedor te muestra 25 métricas pero ninguna le dice qué hacer mañana, ¿qué le falta?',
    activacion: {
      titulo: 'La cosecha del oficio',
      descripcion:
        'En 3 minutos: cada estudiante nombra los 3-4 números que usaría para saber si su semana de estudio fue buena. Reconocen que 25 números diarios producirían parálisis.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 7 construiste el chatbot que ya atiende usuarios. Hoy mides si todo el proceso del periodo funciona, con 5 KPIs que digan su salud.',
      siguiente:
        'En la sesión 9 propones mejoras al proceso usando los KPIs como evidencia: el cierre Kaizen del periodo.',
    },
  },

  conceptosClave: [
    {
      termino: 'Específico (S)',
      definicion:
        'El KPI nombra exactamente qué mide, sin ambigüedad.',
      ejemplo:
        '"Ventas brutas semanales en COP" sí; "ventas" no.',
      emoji: '🎯',
    },
    {
      termino: 'Medible (M)',
      definicion:
        'Existe fórmula reproducible y fuente de dato verificable.',
      ejemplo:
        '=SUMA(monto, semana actual) — fórmula y fuente claras.',
      emoji: '📏',
    },
    {
      termino: 'Accionable (A)',
      definicion:
        'Si el KPI cambia, hay decisión específica que tomar. Si no, es decorativo.',
      ejemplo:
        '"Si conversión cae bajo 5%, hacer 3 entrevistas a clientes esta semana".',
      emoji: '⚡',
    },
    {
      termino: 'Relevante (R)',
      definicion:
        'Conecta con cuello de botella, objetivo de negocio o promesa al usuario.',
      ejemplo:
        'Tiempo de respuesta del chatbot — relevante porque promete atención rápida.',
      emoji: '🧭',
    },
    {
      termino: 'Temporal (T)',
      definicion:
        'Tiene frecuencia, valor objetivo y tolerancia.',
      ejemplo:
        'Frecuencia: semanal. Objetivo: 90%. Tolerancia: ±5%.',
      emoji: '⏰',
    },
    {
      termino: 'KPI vanidoso',
      definicion:
        'Métrica que sube sin que el proceso mejore: seguidores, likes, visitas sin conversión.',
      ejemplo:
        '"1.000 seguidores nuevos" sin ningún cliente nuevo → KPI vanidoso.',
      emoji: '🪞',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Dashboard claro vs ruidoso',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los 2 dashboards que comparte el docente (5 KPIs vs 25 métricas).',
        'En cada uno, intenta responder en 3 minutos: qué intervenir, qué decisión tomar, qué falta.',
        'Cronometra y mide tu nivel de confianza por respuesta.',
        'Identifica qué hizo legible al dashboard de 5 KPIs frente al de 25.',
      ],
      cuaderno: {
        titulo: 'Dashboard claro vs ruidoso',
        formato: 'Tabla 2 filas × 4 columnas (Tiempo | Decisión | Confianza | Falta)',
        extension: '2 filas + 1 conclusión',
      },
      criterios: [
        'Intenté las 3 preguntas en ambos',
        'Cronometré y medí confianza',
        'Identifiqué diferencias de diseño',
        'Reconozco que 5 bien elegidos vencen a 25 mal elegidos',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía SMART',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 5 reglas SMART + 5 errores comunes.',
        'Redacta 1 KPI completo de tu proceso con las 7 partes de anatomía.',
        'Marca 🚨 el error que más temes cometer.',
        'Identifica una métrica vanidosa de las que comparte la gente en redes.',
      ],
      cuaderno: {
        titulo: 'Anatomía SMART',
        formato: 'Ficha con 5 reglas + 5 errores + 1 KPI completo + 1 ejemplo vanidoso',
        extension: '1 ficha',
      },
      criterios: [
        'Las 5 reglas con definición clara',
        '1 KPI completo de mi proceso',
        '5 errores con marca del más temido',
        'Identifico una métrica vanidosa real',
      ],
    },
    {
      numero: 3,
      verbo: 'ANALIZA',
      titulo: '5 KPIs de tu proceso',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Identifica 5 decisiones recurrentes en tu proceso del periodo.',
        'Para cada decisión, define el KPI que la dispara (con las 7 partes).',
        'Calcula el valor actual de cada KPI con los datos reales de tu hoja de Sesión 4.',
        'Define valor objetivo + tolerancia + dueño para cada uno.',
      ],
      cuaderno: {
        titulo: '5 KPIs',
        formato: 'Tabla con 5 KPIs × 7 columnas de anatomía',
        extension: 'Tabla 5 KPIs',
      },
      criterios: [
        '5 decisiones recurrentes identificadas',
        '5 KPIs con 7 partes',
        'Valores actuales calculados con datos reales',
        'Objetivo + tolerancia + dueño por KPI',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Dashboard legible en 30 segundos',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Monta el dashboard en Sheets (con gráficos integrados) o Looker Studio.',
        'Crea 5 visualizaciones, una por KPI, con su valor actual + objetivo.',
        'Agrega evolución mensual donde aplique.',
        'Comparte con un compañero y mide si en 30 segundos puede decidir qué intervenir.',
      ],
      cuaderno: {
        titulo: 'Dashboard de mi proceso',
        formato: 'URL del dashboard + 5 gráficos + 1 decisión por KPI + retroalimentación del compañero',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        'Dashboard con 5 gráficos legibles',
        'Cada KPI con valor actual y objetivo',
        'Decisión asociada por KPI',
        'Compañero pudo decidir en 30 segundos',
        'No incluí más de 5 visualizaciones',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica KPIs y dashboards',
      instrucciones:
        '5 preguntas para confirmar que diseñas KPIs accionables. Necesitas 3/5.',
      preguntas: [
        {
          enunciado: 'Tu KPI dice "ventas". ¿Qué le falta para ser SMART?',
          opciones: [
            'Nada',
            'Específico: "ventas brutas semanales en COP" + medible + accionable + relevante + temporal',
            'Solo color',
            'Hacerlo más bonito',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. "Ventas" sin más es ambiguo: ¿brutas o netas? ¿qué periodo? ¿en qué moneda? SMART exige precisión.',
          feedbackIncorrecto:
            'Las 5 reglas SMART. Un KPI sin las 5 produce reportes inconsistentes y decisiones imposibles.',
        },
        {
          enunciado: 'Tu dashboard muestra "10.000 seguidores nuevos" pero las ventas no subieron. ¿Qué tipo de KPI es?',
          opciones: [
            'Excelente',
            'Vanidoso — sube sin que el proceso mejore',
            'Conservador',
            'Aún no es KPI',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. KPI vanidoso. El número crece pero ningún resultado de negocio lo acompaña. La métrica acciona ego, no decisión.',
          feedbackIncorrecto:
            'Vanidoso. La regla: si el KPI sube y la decisión que importa no cambia, el KPI no estaba alineado con el negocio.',
        },
        {
          enunciado: '¿Por qué máximo 5-7 KPIs en un dashboard?',
          opciones: [
            'Por estética',
            'Porque el cerebro humano no prioriza más de 5-7 variables; con 20, nada manda',
            'Da lo mismo',
            'Para ahorrar tinta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Atención humana limitada. Reducir a 5 obliga al diseñador a decidir qué importa.',
          feedbackIncorrecto:
            'Atención limitada. Reducir es disciplina ética: el diseñador debe priorizar; no puede delegar la priorización al lector.',
        },
        {
          enunciado: '¿Qué falta a un KPI sin "decisión asociada"?',
          opciones: [
            'Nada',
            'Le falta accionabilidad — si no dispara una decisión, es decorativo',
            'Color',
            'Una fórmula más compleja',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Sin decisión asociada, el KPI es contemplación. La A de SMART es accionable.',
          feedbackIncorrecto:
            'Accionabilidad. Cada KPI debe disparar una decisión específica. Sin ella, no es KPI; es ornamento.',
        },
        {
          enunciado: 'En el saber del lechero, ¿qué aplica al diseño de KPIs?',
          opciones: [
            'Nada',
            'Elegir 4-6 números bien escogidos guía mejor que medir 25 sin criterio',
            'Que el papel basta',
            'Los lecheros no sabían matemáticas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El lechero medía litros y merma — dos números que decidían su semana. Tu dashboard funciona igual.',
          feedbackIncorrecto:
            'Pocos números bien elegidos. El oficio ya sabía que la disciplina de medir es más importante que la cantidad de mediciones.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, mide los 5 KPIs durante 5 días y registra qué decisión real tomarías cada día con cada uno. Si ningún KPI dispara decisión en 5 días, alguno está mal elegido.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda métrica decide qué resultados se ven y qué consecuencias quedan fuera del reporte.',
      preguntaEspejo:
        '¿Mis 5 KPIs incluyen al menos 1 que proteja a las personas que sostienen el proceso, o todos miden solo resultados para el dueño?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo que se mide con disciplina mejora; lo que se mide con vanidad solo crece sin sentido.',
      preguntaEspejo:
        '¿Resistí la tentación de meter 20 métricas "por si acaso"? ¿Mis 5 KPIs son los más importantes o solo los más fáciles de calcular?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El dashboard es la infraestructura cognitiva con que las organizaciones contemporáneas se ven a sí mismas.',
      preguntaEspejo:
        '¿Cuántas decisiones organizacionales se tomaron mirando un dashboard esta semana? ¿Qué cambia si yo decido qué muestra ese dashboard?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a medir lo que importa con disciplina. Esa habilidad sirve para hábitos personales, presupuesto, salud — cualquier proceso de tu vida.',
    emocional:
      'Resististe la vanidad de medir mucho. Elegir 5 con criterio es virtud profesional contra el ego del que mide todo.',
    ciudadana:
      'Indicadores públicos como el IPC, desempleo o cobertura son KPIs. Saber leerlos te permite criticar reportes oficiales con vocabulario.',
    local:
      'El lechero, el panadero, la tejedora Wayuu medían lo que importaba con 4-6 números. Tu dashboard continúa esa sabiduría.',
    intergeneracional:
      'Lo que el abuelo contaba con la libreta diaria, tú lo calculas con fórmula automática. Mismo gesto, distinto medio.',
  },
};

export default contenido;
