/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 6
 * Tema: IA en mensajería — clasificar y responder con criterio.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-6.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 6,
  titulo: 'IA en mensajería — clasificar y responder con criterio',
  ocultarPDF: false,
  resumen:
    'La IA aplicada a mensajería clasifica mensajes según categorías que tú defines. Aprendes a redactar un prompt afinado (rol + categorías + criterios + formato + borde de duda), a medir el acierto del modelo y a supervisar éticamente.',
  duracionMin: 90,
  subtema: 'Automatización · IA aplicada',

  saberAncestral: {
    saber:
      'El intermediario respetado de la plaza de los pueblos del Valle filtraba qué noticia se contaba: urgente (al alcalde), útil (el domingo en misa) o ignorable (rumor sin verificar). La abuela jefa de la casa filtraba qué noticias del barrio se compartían en la mesa. Filtrar mensajes con criterio es oficio antiguo. La IA en mensajería es ese filtro — pero solo es buena si el humano define las reglas con ética.',
    fuente: 'Intermediario respetado de la plaza y abuela jefa de la casa como filtros heredados',
    preguntaPuente:
      '¿Cómo sabía la abuela qué noticia merecía atención inmediata, cuál podía esperar y cuál no valía la pena contar? ¿Y qué pierde un emprendedor novato cuando deja a la IA clasificar sus mensajes sin haber definido criterios éticos y reglas claras?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El intermediario de la plaza', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Línea base humana', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del prompt', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Sistema de clasificación con métrica', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Bancos, hospitales, gobiernos y plataformas usan IA para clasificar millones de mensajes. Las decisiones afectan a personas reales: deniegan créditos, retrasan diagnósticos, archivan reclamos. Diseñar estos sistemas con ética es alfabetización cívica decisiva.',
    preguntaDetonante:
      'Si tu tía pierde un mensaje urgente porque su IA lo clasificó como "spam", ¿quién tiene la responsabilidad: el modelo, el ingeniero, la abuela?',
    activacion: {
      titulo: 'El filtro del barrio',
      descripcion:
        'En 3 minutos: el grupo identifica quién fue, en su barrio, el "intermediario respetado" — esa persona que filtraba noticias con criterio. ¿Qué hacía bien? ¿Qué errores cometía? La IA repite el oficio.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 5 automatizaste con triggers reglas rígidas (si X, haz Y). Hoy das el salto a IA: interpretar con criterio aprendido.',
      siguiente:
        'En la sesión 7 conectarás IA con APIs para que las decisiones del modelo disparen acciones concretas en otros servicios.',
    },
  },

  conceptosClave: [
    {
      termino: 'Línea base humana',
      definicion:
        'Tu clasificación manual de un lote de mensajes. Es la referencia para medir si el modelo clasifica bien o mal.',
      ejemplo:
        '10 mensajes clasificados a mano como urgente/útil/ignorar antes de pasarlos por la IA.',
      emoji: '👤',
    },
    {
      termino: 'Prompt: Rol',
      definicion:
        'Le dices al modelo qué función cumple. Da contexto y autoridad para responder con criterio.',
      ejemplo:
        '"Eres un clasificador de mensajes de atención al cliente de una panadería del barrio".',
      emoji: '🎭',
    },
    {
      termino: 'Prompt: Categorías exhaustivas',
      definicion:
        'Cubren todos los casos posibles y son excluyentes (un mensaje cae en una sola). Sin esto, el modelo improvisa.',
      ejemplo:
        'urgente / útil / ignorar — exhaustivas y excluyentes. NO usar "urgente / importante / relevante" (solapadas).',
      emoji: '🗂️',
    },
    {
      termino: 'Prompt: Criterios con ejemplos',
      definicion:
        '2-3 ejemplos reales por categoría. Sin ejemplos, las clasificaciones son inconsistentes.',
      ejemplo:
        'urgente: "llegué y la panadería está cerrada"; útil: "¿hacen sin azúcar?"; ignorar: "Hola".',
      emoji: '🪞',
    },
    {
      termino: 'Prompt: Formato de salida',
      definicion:
        'JSON estructurado o etiqueta + justificación. Sin formato, no se puede automatizar lo que viene después.',
      ejemplo:
        '"Responde solo: {categoria: ..., justificacion: ..., flag_revision: ...}".',
      emoji: '📋',
    },
    {
      termino: 'Prompt: Borde de duda',
      definicion:
        'Qué hacer cuando el modelo no está seguro. Sin borde, la IA finge confianza que no tiene.',
      ejemplo:
        '"Si dudas entre urgente y útil, marca útil y agrega flag_revision: true para que un humano revise".',
      emoji: '🤔',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Línea base humana',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Recibe los 10 mensajes que comparte el docente.',
        'Clasifica cada uno como urgente / útil / ignorar.',
        'Anota 1 frase de justificación por cada mensaje.',
        'Marca con 🌫️ los mensajes que te costaron decidir (zona gris).',
      ],
      cuaderno: {
        titulo: 'Línea base humana',
        formato: 'Tabla 10 filas × 4 columnas (Mensaje | Categoría | Justificación | Dudoso?)',
        extension: '10 filas',
      },
      criterios: [
        'Los 10 mensajes clasificados',
        'Cada uno con justificación',
        'Marcados los dudosos',
        'Reconozco qué mensajes son claros y cuáles zona gris',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía del prompt',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con los 5 elementos del prompt aplicados a tu caso.',
        'Lista los errores comunes y marca 🚨 el que más temes.',
        'Identifica el riesgo ético principal de tu sistema (¿quién quedaría invisibilizado?).',
        'Anota 1 categoría que NO debe usarse (datos sensibles, estereotipos).',
      ],
      cuaderno: {
        titulo: 'Anatomía del prompt',
        formato: 'Ficha con 5 elementos + errores + riesgo ético + restricción',
        extension: '1 ficha + 1 línea de riesgo',
      },
      criterios: [
        'Los 5 elementos con contenido específico',
        'Riesgo ético nombrado',
        'Restricción ética declarada',
        'Identifico el error más temido',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Sistema de clasificación con métrica',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Redacta el prompt v1 con los 5 elementos.',
        'Pásalo por ChatGPT/Claude/Gemini con los 20+ mensajes (o reusa los 10 de Actividad 1 + 10 más).',
        'Compara la clasificación del modelo con tu línea base humana en una tabla.',
        'Calcula la tasa de acierto (% de coincidencias) y nombra los errores típicos.',
      ],
      cuaderno: {
        titulo: 'Sistema de clasificación',
        formato: 'Prompt completo + tabla comparativa humano vs IA + métrica final',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        '20+ mensajes con línea base humana',
        'Prompt con 5 elementos',
        'Clasificación del modelo registrada',
        'Tasa de acierto calculada',
        'Errores típicos identificados',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Ajusta el prompt y re-mide',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Identifica los 2 errores más graves del modelo (no de cantidad, sino de impacto).',
        'Propón 2 ajustes concretos al prompt (agregar ejemplo, afinar criterio, mejorar borde de duda).',
        'Re-ejecuta el prompt v2 con los mismos mensajes.',
        'Re-mide la tasa de acierto y decide si el sistema sirve para producción o necesita más afinación.',
      ],
      cuaderno: {
        titulo: 'Ajuste y re-medición',
        formato: '2 errores + 2 ajustes + métrica v1 vs métrica v2 + decisión final',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '2 errores graves identificados (no solo "muchos")',
        '2 ajustes concretos al prompt',
        'Métrica v1 y v2 comparadas',
        'Decisión justificada sobre producción',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica IA en mensajería',
      instrucciones:
        '5 preguntas para confirmar que diseñas prompts con criterio ético. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué hacer línea base humana antes de pasar los mensajes por la IA?',
          opciones: [
            'Por trámite',
            'Porque sin línea base no se puede medir si el modelo clasifica bien o mal',
            'Para perder tiempo',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La línea base es la referencia. Sin ella, "el modelo clasifica bien" es opinión, no dato.',
          feedbackIncorrecto:
            'Sin línea base no hay métrica. La opinión de que la IA funciona no equivale a medir su tasa de acierto.',
        },
        {
          enunciado: '¿Qué problema tiene usar categorías "urgente / importante / relevante"?',
          opciones: [
            'Ninguno',
            'Son solapadas (no excluyentes); el modelo no puede decidir cuál asignar',
            'Son muchas',
            'Suenan formales',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Solapadas confunden al modelo. Categorías deben ser excluyentes: cada mensaje en una sola.',
          feedbackIncorrecto:
            'Categorías solapadas. Si "urgente" e "importante" se traslapan, el modelo improvisa y produce inconsistencia.',
        },
        {
          enunciado: '¿Para qué sirve el "borde de duda" en un prompt?',
          opciones: [
            'Decoración',
            'Para que el modelo escale al humano cuando no está seguro, en vez de fingir confianza',
            'Para hacer el prompt más largo',
            'No sirve',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El borde de duda es prudencia técnica. La IA debe decir "no sé, revisen humanos" en vez de adivinar.',
          feedbackIncorrecto:
            'Prudencia técnica. Sin borde de duda, el modelo finge certeza que no tiene — los errores se vuelven invisibles.',
        },
        {
          enunciado: 'Tu IA clasifica como "ignorar" los reclamos en jerga callejera. ¿Cuál es el riesgo ético?',
          opciones: [
            'Ninguno',
            'Silencia a las personas que no escriben con lenguaje formal — los más vulnerables suelen ser los más invisibilizados',
            'Solo problema técnico',
            'Se arregla con más datos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Las categorías automatizadas reproducen sesgos. La phronesis exige revisar manualmente lo que el modelo marcó como "ignorar" para detectar exclusiones.',
          feedbackIncorrecto:
            'Riesgo ético grave. La IA puede silenciar a quienes la institución ya silencia. Supervisión humana de la categoría "ignorar" es indispensable.',
        },
        {
          enunciado: 'En el saber ancestral del intermediario de la plaza, ¿qué aplica a la IA?',
          opciones: [
            'Nada',
            'Filtrar mensajes con criterio ético es oficio antiguo; la IA solo escala el gesto si el humano define bien las reglas',
            'Que los intermediarios eran perfectos',
            'Que hoy ya no se necesita',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El intermediario filtraba con criterio comunitario; la IA escala con criterio que tú defines. La responsabilidad ética siempre es humana.',
          feedbackIncorrecto:
            'Criterio ético humano. La IA solo replica las reglas que tú escribes — la ética sigue siendo de quien diseña el prompt.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu sistema con un docente o emprendedor que reciba mensajes a diario; pide retroalimentación sobre falsos positivos o casos invisibilizados, y ajusta el prompt.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda categoría automatizada decide qué personas y qué mensajes son visibles para la institución.',
      preguntaEspejo:
        'En mi sistema, ¿quién quedaría silenciado por la categoría "ignorar"? ¿Qué cambia si reviso manualmente al menos 1 vez por semana lo que el modelo marcó como ignorable?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'El juicio prudente exige tiempo — la IA solo simula prudencia.',
      preguntaEspejo:
        '¿Mi prompt tiene borde de duda real o asume que el modelo siempre puede decidir? ¿Qué tipo de mensaje merece siempre escalar a humano?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La IA aplicada a la mensajería es infraestructura ética de la comunicación digital contemporánea.',
      preguntaEspejo:
        '¿Cuántos sistemas de clasificación IA me afectaron esta semana sin que yo los viera? ¿Qué cambia si yo soy quien los diseña con criterios éticos explícitos?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a aplicar IA con disciplina técnica y ética. Es ventaja transferible a cualquier emprendimiento o empleo que use IA.',
    emocional:
      'Resististe la tentación de "confiar ciegamente en la IA". El criterio sobre cuándo escalar al humano es virtud profesional.',
    ciudadana:
      'Las instituciones que te afectan usan IA. Saber diseñarla con ética te permite criticarla con argumento y construirla con responsabilidad.',
    local:
      'El intermediario de la plaza, la abuela jefa de la casa: filtros heredados con criterio comunitario. La IA traduce ese oficio a escala.',
    intergeneracional:
      'Lo que tu abuela hacía a mano con criterio comunitario, tú lo escalas con prompt afinado. La phronesis es la misma; el medio, nuevo.',
  },
};

export default contenido;
