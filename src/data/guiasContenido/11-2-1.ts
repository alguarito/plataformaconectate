/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 1
 * Tema: Mapeo de procesos — ver dónde se pierde el tiempo.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-1.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 1,
  titulo: 'Mapeo de procesos — ver dónde se pierde el tiempo',
  ocultarPDF: false,
  resumen:
    'Antes de automatizar hay que ver. Aprendes a mapear un proceso real con pasos, responsables y tiempos, y a detectar el cuello de botella que marca el ritmo del todo.',
  duracionMin: 90,
  subtema: 'Automatización · Mirada del oficio',

  saberAncestral: {
    saber:
      'El maestro carpintero de Cartago no necesita reloj para saber dónde se traba el taller: lo ve. La cocinera de la fonda ve el cuello sin medirlo: "el sancocho se demora porque solo hay una estufa". El maestro del oficio no necesita lenguaje técnico para ver el flujo: lleva en la mirada el saber acumulado de cien repeticiones. Esa mirada es el primer acto de toda automatización: antes de cambiar el proceso, hay que verlo.',
    fuente: 'Mirada del maestro carpintero y de la cocinera mayor de fonda de mercado en el Valle del Cauca',
    preguntaPuente:
      '¿Cómo sabía la cocinera mayor, sin cronómetro, que el sancocho era el cuello de botella de la fonda? ¿Y qué pierde un emprendedor novato cuando compra software de automatización sin haber mapeado primero su proceso?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La mirada del maestro', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Caza el cuello de botella', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del cuello', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Mapa con 2 cuellos justificados', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Optimizar lo que no es cuello de botella es perder el tiempo. La regla del oficio: mapear primero, intervenir después. Sin esta disciplina, automatizar es comprar herramientas caras para el problema equivocado.',
    preguntaDetonante:
      'Si tu proceso de matrícula escolar tarda 4 horas, ¿dónde se pierde el tiempo: en escribir el nombre o en esperar la firma del rector?',
    activacion: {
      titulo: 'El ojo del maestro',
      descripcion:
        'En 3 minutos: cada estudiante nombra el "cuello de botella" de su mañana (desde despertar hasta llegar al colegio). Comparten en grupo y descubren que casi todos tienen el mismo cuello no donde creían.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En el periodo 1 trabajaste tu presencia digital personal. Hoy abres el periodo 2 mirando hacia adentro: cómo funciona un proceso, dónde falla, qué se podría automatizar.',
      siguiente:
        'En la sesión 2 tomas este mapa y lo conviertes en un diagrama BPMN profesional con notación estándar.',
    },
  },

  conceptosClave: [
    {
      termino: 'Paso (actividad)',
      definicion:
        'Cada acción concreta del proceso, nombrada con verbo + objeto. Numeradas en orden.',
      ejemplo:
        '"Cortar la tabla a 50 cm" (sí); "trabajar la madera" (no — demasiado vago).',
      emoji: '🪜',
    },
    {
      termino: 'Responsable',
      definicion:
        'Persona, rol o máquina que ejecuta cada paso. No confundir con beneficiario.',
      ejemplo:
        'Responsable de "verificar stock": el vendedor. Beneficiario: el cliente.',
      emoji: '👤',
    },
    {
      termino: 'Tiempo estimado',
      definicion:
        'Duración promedio de cada paso. Si fue medido, declara la fuente; si es estimación, márcalo.',
      ejemplo:
        '"Hornear pan: 35 min (medido) / Lijar tabla: 10 min (estimado)".',
      emoji: '⏱️',
    },
    {
      termino: 'Cuello de botella',
      definicion:
        'El paso lento que marca el ritmo del proceso completo. Suele ocupar más del 30% del tiempo total.',
      ejemplo:
        'En el sancocho, "ablandar el grano de maíz" puede tomar 50% del tiempo total — todo lo demás depende.',
      emoji: '🐌',
    },
    {
      termino: 'Espera / acumulación',
      definicion:
        'Tiempo en que nada visible ocurre pero el proceso no avanza. Suele ser invisible y por eso peligroso.',
      ejemplo:
        'Entre "enviar solicitud" y "recibir respuesta" hay 3 días de espera — eso cuenta como tiempo del proceso.',
      emoji: '⌛',
    },
    {
      termino: 'Impacto de la intervención',
      definicion:
        'La pregunta que define si vale la pena optimizar: "¿qué cambia en el total si resuelvo este paso?".',
      ejemplo:
        'Reducir 50% el cuello que ocupa 30% del total ahorra 15% del tiempo global. Reducir 50% un paso del 3% solo ahorra 1.5%.',
      emoji: '💡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Caza el cuello de botella',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige un proceso real de tu día (preparar el desayuno, llegar al colegio, registrar la nota).',
        'Anota TODOS los pasos en orden, sin omitir esperas.',
        'Junto a cada paso: quién lo hace y cuánto estimas que tarda.',
        'Marca con 🐌 tu candidato a cuello de botella e intenta justificar por qué.',
      ],
      cuaderno: {
        titulo: 'Caza el cuello de botella',
        formato: 'Tabla 4 columnas (Paso | Responsable | Tiempo | Notas), 8-15 filas',
        extension: 'Tabla + marca 🐌',
      },
      criterios: [
        'Listé todos los pasos del proceso en orden',
        'Anoté responsable y tiempo de cada paso',
        'Incluí esperas y acumulaciones',
        'Marqué un candidato a cuello con intento de justificación',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía del cuello',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Suma los tiempos de todos los pasos del proceso.',
        'Calcula qué % del total ocupa cada paso.',
        'Identifica los pasos que superan 30% del total.',
        'Compara con el candidato 🐌 de Actividad 1 — ¿coincidió tu intuición con el cálculo?',
      ],
      cuaderno: {
        titulo: 'Anatomía del cuello',
        formato: 'Tabla con columna nueva (% del total) + comparación intuición vs cálculo',
        extension: 'Tabla extendida + 1 línea de reflexión',
      },
      criterios: [
        'Suma total calculada correctamente',
        '% por paso calculado',
        'Identifiqué los pasos > 30%',
        'Comparé intuición con números reales',
      ],
    },
    {
      numero: 3,
      verbo: 'EXPLICA',
      titulo: 'Explica qué cambiaría si se interviene',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Para cada candidato a cuello, calcula: "si reduzco este paso a la mitad, ¿cuánto baja el total?".',
        'Distingue cuellos graves (alto impacto si se resuelve) de cuellos molestos (bajo impacto).',
        'Comparte con un compañero y compara sus cuellos con los tuyos.',
        'Anota qué diferencia hay entre "molesto" y "grave".',
      ],
      cuaderno: {
        titulo: 'Impacto de la intervención',
        formato: 'Tabla 3 columnas (Cuello | Impacto si se reduce 50% | Categoría: grave/molesto)',
        extension: 'Tabla + 1 línea sobre molesto vs grave',
      },
      criterios: [
        'Cada cuello tiene cálculo de impacto',
        'Distingo grave de molesto con números',
        'Compartí con un compañero',
        'Reconozco que la severidad subjetiva no equivale a impacto real',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Mapa final con 2 cuellos justificados',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige un proceso real cercano (negocio del barrio, microempresa familiar, proceso escolar).',
        'Observa al menos 1 corrida completa (o entrevista al responsable).',
        'Produce el mapa: tabla de pasos + diagrama visual + cálculo de %.',
        'Identifica y justifica los 2 cuellos más graves en 1 frase cada uno con número + razón.',
      ],
      cuaderno: {
        titulo: 'Mapa de proceso con cuellos de botella',
        formato: '1 página con título + tabla + boceto del flujo + 2 cuellos justificados',
        extension: '1 página A4 o 2 páginas de cuaderno',
      },
      criterios: [
        'Proceso real observado, no inventado de memoria',
        'Tabla con responsable y tiempo por paso',
        'Diagrama visual con flujo y decisiones',
        '% del total calculado por paso',
        '2 cuellos justificados numéricamente',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica mapeo de procesos',
      instrucciones:
        '5 preguntas para confirmar que mapas con criterio del oficio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Si reduces a la mitad un paso que ocupa 5% del tiempo total, ¿cuánto ahorras del proceso completo?',
          opciones: ['50%', '25%', '5%', '2.5%'],
          respuestaIndex: 3,
          feedbackCorrecto:
            'Correcto. 50% de 5% = 2.5%. Por eso optimizar pasos pequeños es perder el tiempo: solo el cuello mueve el total.',
          feedbackIncorrecto:
            '2.5%. Reducir a la mitad un paso que ya era pequeño produce un ahorro mínimo. El cuello es donde está la palanca.',
        },
        {
          enunciado: 'En el mapeo, ¿cómo se trata la espera entre dos pasos?',
          opciones: [
            'No cuenta porque no es trabajo',
            'Cuenta como tiempo del proceso — es invisible y por eso peligrosa',
            'Solo cuenta si pasa de 1 hora',
            'Depende del proceso',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La espera es tiempo real del proceso. Omitirla produce mapas mentirosos donde el total parece menor de lo que es.',
          feedbackIncorrecto:
            'Cuenta siempre. La espera invisible es lo que más alarga procesos reales y por eso debe aparecer en el mapa.',
        },
        {
          enunciado: 'Una compuerta de mapa muestra 5 cuellos de botella marcados. ¿Qué problema tiene?',
          opciones: [
            'Ninguno, mejor mucho cuello que poco',
            'Si todo es cuello, nada es cuello — falta priorización',
            'Solo significa proceso complejo',
            'Es siempre correcto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Marcar todo como crítico es no priorizar. Selecciona los 2 más graves para que el responsable sepa por dónde empezar.',
          feedbackIncorrecto:
            'Si todo es prioritario, nada lo es. El mapa profesional prioriza para que la acción sea posible.',
        },
        {
          enunciado: '¿Qué hace de "cortar tabla a 50 cm" una mejor tarea que "trabajar la madera"?',
          opciones: [
            'Es más corta',
            'Tiene verbo + objeto concretos y medibles',
            'Suena más profesional',
            'Da lo mismo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Verbo de acción + objeto medible permite asignar responsable, tiempo y verificar ejecución. "Trabajar" es demasiado vago.',
          feedbackIncorrecto:
            'Verbo + objeto. La concreción es la diferencia entre un mapa accionable y uno decorativo.',
        },
        {
          enunciado: 'En el saber ancestral del maestro carpintero, ¿qué aplica al mapeo?',
          opciones: [
            'Nada — son oficios distintos',
            'Antes de cambiar el flujo, hay que verlo — la observación es el primer acto del oficio',
            'Que mapear es rápido',
            'Que la intuición basta',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La mirada del maestro es la disciplina de observar antes de intervenir. El mapa la pone en lenguaje técnico.',
          feedbackIncorrecto:
            'Ver antes de cambiar. La phronesis del oficio está en la observación paciente antes de la propuesta apurada.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, mapea un segundo proceso de tu vida cotidiana (estudiar para examen, organizar evento, hacer compras) y comparte el mapa con quien comparte el proceso contigo.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo mapa de proceso decide quién aparece como protagonista del trabajo y quién queda invisible.',
      preguntaEspejo:
        'En mi mapa, ¿quién aparece nombrado y quién quedó como "ya estaba listo" sin responsable? ¿Qué cambia si nombro al trabajo invisible que sostiene el proceso?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Antes de cambiar el flujo del trabajo, observa el flujo del trabajo.',
      preguntaEspejo:
        '¿Llegué al mapa con la respuesta ya decidida o llegué con preguntas? ¿Qué descubrí en la observación que no habría podido inventar desde el escritorio?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El mapa de procesos es la infraestructura cognitiva con que toda organización contemporánea se entiende a sí misma.',
      preguntaEspejo:
        '¿Cuántos procesos cotidianos podría mejorar (en mi casa, mi colegio, el negocio familiar) si me tomara 1 hora de mapeo en lugar de quejarme de su lentitud?',
    },
  },

  cincoDimensiones: {
    personal:
      'Adquiriste una habilidad transferible a cualquier carrera: observar procesos antes de proponer cambios. Ingeniería, administración, salud, educación — todas usan mapeo.',
    emocional:
      'Toleraste la disciplina de observar en lugar de saltar a soluciones. Esa paciencia es virtud profesional escasa.',
    ciudadana:
      'Todo trámite estatal es un proceso mapeable. Saber mapear te permite criticar burocracias con evidencia, no con queja.',
    local:
      'El maestro carpintero y la cocinera de fonda saben ver el cuello sin medirlo. Tú lo aprendes con números — misma sabiduría, distinto método.',
    intergeneracional:
      'Lo que el abuelo veía con la mirada del oficio, tú lo registras con tabla y diagrama. Mismo gesto, distinto medio.',
  },
};

export default contenido;
