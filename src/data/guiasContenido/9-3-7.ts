/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 7
 * Tema: Limpieza de datos — el oficio del archivero.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-7.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 7,
  titulo: 'Limpieza de datos — el oficio del archivero',
  ocultarPDF: false,
  resumen:
    'El 70% del tiempo de un analista se va en limpiar datos. Aprendes a detectar duplicados, formatos inconsistentes, vacíos y errores tipográficos, y a documentar cada cambio en una bitácora que permita reproducir tu limpieza.',
  duracionMin: 90,
  subtema: 'Datos · Oficio invisible',

  saberAncestral: {
    saber:
      'La criba de granos antes de cocinar — separar la semilla buena de las piedras, del polvo, de las cáscaras vacías — es el mismo gesto que limpiar datos. La abuela del Valle cribaba arroz una hora antes de cocinarlo. El archivero del pueblo verificaba folio por folio antes de archivar. El ordeñador colaba la leche antes de envasarla. Lo que entra contaminado, sale contaminado: sin criba, lo que cocinas se daña; sin limpieza de datos, lo que concluyes es falso.',
    fuente: 'Criba de granos de la abuela rural, archivero del pueblo y ordeñador del Valle del Cauca',
    preguntaPuente:
      '¿Cómo sabía la abuela que un grano estaba dañado sin probarlo? ¿Y qué pierde un analista novato cuando entrega un análisis "rápido y bonito" sin haber cribado antes los datos sucios?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La criba de la abuela', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Descubre la suciedad', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de la limpieza', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Limpia con bitácora', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'En el mundo profesional los datos casi nunca llegan limpios. Saber cribarlos con bitácora es lo que separa un análisis sólido de uno bonito pero falso. Es el oficio invisible que sustenta toda conclusión.',
    preguntaDetonante:
      'Si recibes una tabla con 50 filas y 4 columnas, ¿cómo sabes en 3 minutos si está sucia y por dónde empezar a limpiarla?',
    activacion: {
      titulo: 'La criba en 3 minutos',
      descripcion:
        'Recibes el dataset sucio. En 3 minutos, sin instrucción específica, cuenta cuántos duplicados ves a simple vista, cuántas fechas con formato distinto y cuántas celdas vacías. No corrijas — solo identifica.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 6 aprendiste a hacer gráficos honestos sobre tu propia tabla limpia. Hoy recibes una tabla sucia ajena y aprendes a cribar como oficio profesional.',
      siguiente:
        'En la sesión 8 vas a auditar gráficos engañosos en prensa y redes — el mismo oficio del archivero, pero aplicado a la imagen.',
    },
  },

  conceptosClave: [
    {
      termino: 'Duplicados',
      definicion:
        'Filas que repiten la misma información. Tratamiento: eliminar la copia, conservar el original, dejar entrada en la bitácora.',
      ejemplo:
        'Dos filas con el mismo ID y mismos valores: una se elimina; la bitácora registra qué fila y por qué.',
      emoji: '👯',
    },
    {
      termino: 'Formato inconsistente',
      definicion:
        '"2025-05-15" vs "15/05/2025" vs "May 15 2025". Tratamiento: normalizar al formato estándar (ISO YYYY-MM-DD para fechas).',
      ejemplo:
        'Columna Fecha con 3 formatos distintos → todas pasan a YYYY-MM-DD.',
      emoji: '📐',
    },
    {
      termino: 'Vacíos sospechosos',
      definicion:
        'Celdas en blanco que deberían tener valor. Pregunta antes de rellenar: ¿es legítimo el vacío? ¿se rellena con valor por defecto? ¿se marca como "faltante"?',
      ejemplo:
        'Columna Edad con celda vacía: ¿el dato falta o la persona no quiso responder? La diferencia importa.',
      emoji: '🕳️',
    },
    {
      termino: 'Errores tipográficos',
      definicion:
        '"9A", "9a", "9 A" — variantes que el filtro o la tabla dinámica tratará como categorías distintas. Tratamiento: Buscar y reemplazar.',
      ejemplo:
        'Columna Curso con 3 variantes de "9A" → unificar a "9A" con Buscar y reemplazar.',
      emoji: '✏️',
    },
    {
      termino: 'Bitácora',
      definicion:
        'Registro con qué encontré, qué hice, por qué y cuántas celdas afectadas. Sin bitácora, otro analista no puede reproducir tu trabajo.',
      ejemplo:
        '"2026-05-15 · 12 duplicados eliminados · criterio: ID y fecha idénticos · filas afectadas: 12".',
      emoji: '📝',
    },
    {
      termino: 'Original vs copia',
      definicion:
        'Regla de oro: nunca limpies sobre el archivo original. Duplica primero, renombra "dataset_limpio_v1.xlsx", trabaja sobre la copia.',
      ejemplo:
        '"datos_crudos.xlsx" intacto + "datos_limpios_v1.xlsx" donde se trabaja.',
      emoji: '🗂️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Descubre la suciedad',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre el dataset sucio que reparte el docente (~50 filas).',
        'Cuenta cuántos duplicados, formatos inconsistentes, vacíos y errores tipográficos hay.',
        'Anota al menos 1 ejemplo concreto de cada tipo.',
        'No corrijas todavía: solo identifica. El reconocimiento es la mitad del oficio.',
      ],
      cuaderno: {
        titulo: 'Descubre la suciedad',
        formato: 'Tabla 3 columnas (Tipo | Cuántos casos | 1 ejemplo), 4 filas',
        extension: '4 filas',
      },
      criterios: [
        'Conté los 4 tipos de suciedad',
        'Anoté 1 ejemplo concreto de cada tipo',
        'Resistí la tentación de "arreglar de una"',
        'Reconozco dónde está cada tipo sin tener que volver a buscar',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía de la limpieza',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 4 fichas, una por tipo de suciedad (duplicados, formato, vacíos, tipográficos).',
        'En cada ficha: qué es + cómo se detecta + cómo se trata + 1 error frecuente.',
        'Marca con 🚫 el error que más has cometido tú al limpiar antes.',
        'Anota 1 caso de tu dataset donde aplicarías cada tratamiento.',
      ],
      cuaderno: {
        titulo: 'Anatomía de la limpieza',
        formato: '4 fichas (duplicados, formato, vacíos, tipográficos) con qué + detección + tratamiento + error',
        extension: '4 fichas + 1 marca',
      },
      criterios: [
        'Las 4 fichas tienen los 4 elementos',
        'Cada ficha tiene un ejemplo de tu dataset',
        'Identifico el error que más cometo',
        'Podría tratar cualquier tipo sin consultar',
      ],
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Decide qué hacer con cada vacío',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'En tu dataset, identifica las celdas vacías de cada columna.',
        'Para cada vacío, decide: ¿legítimo (se conserva vacío)?, ¿se rellena con valor por defecto?, ¿se marca como "faltante"?',
        'Justifica cada decisión en 1 frase antes de aplicar.',
        'Anota la justificación en la bitácora.',
      ],
      cuaderno: {
        titulo: 'Decisiones sobre vacíos',
        formato: 'Tabla 3 columnas (Columna | Vacíos encontrados | Decisión + justificación)',
        extension: 'Tabla por columna con vacíos',
      },
      criterios: [
        'Identifiqué los vacíos columna por columna',
        'Cada decisión está justificada en 1 frase',
        'Evité rellenar con 0 sin pensar',
        'La justificación quedó en la bitácora',
      ],
    },
    {
      numero: 4,
      verbo: 'APLICA',
      titulo: 'Limpia el dataset con bitácora',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Duplica el archivo original (regla de oro: nunca tocar el original).',
        'Abre la bitácora antes de tocar nada.',
        'Atiende un tipo a la vez: duplicados → formato → vacíos → tipográficos.',
        'Documenta cada cambio: qué encontré, qué hice, por qué, cuántas celdas afectadas.',
      ],
      cuaderno: {
        titulo: 'Bitácora de limpieza',
        formato: '4 entradas (una por tipo de problema) con qué + cómo + por qué + celdas',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Trabajé sobre copia, original intacto',
        'Bitácora con al menos 4 entradas',
        'Cada entrada documenta qué, cómo, por qué, celdas',
        'Dataset limpio conserva columnas y sentido del original',
        'Un compañero podría reproducir mi limpieza solo con la bitácora',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica limpieza de datos',
      instrucciones:
        '5 preguntas para confirmar que limpias con criterio y bitácora. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué duplicar el archivo antes de limpiar?',
          opciones: [
            'Porque ocupa menos espacio',
            'Porque si te equivocas, conservas el dato crudo intacto',
            'Por costumbre académica',
            'Para que cargue más rápido',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El original es la fuente de verdad: si tu limpieza sale mal, vuelves al original sin pérdida.',
          feedbackIncorrecto:
            'La razón es la reversibilidad. Limpiar sobre el original es destruir la fuente: una sola equivocación te deja sin dato crudo.',
        },
        {
          enunciado: 'Encuentras una celda vacía en la columna Teléfono. ¿Qué haces?',
          opciones: [
            'Borrar la fila siempre',
            'Rellenar con 0',
            'Preguntar primero si el vacío es legítimo (sin teléfono) o si es dato faltante',
            'Ignorar y seguir',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. "Sin teléfono" puede ser información real, no error. Decidir sin pensar es manipular en silencio.',
          feedbackIncorrecto:
            'Antes de tratar un vacío, decide si es legítimo o faltante. Rellenar con 0 puede convertir "no responde" en "responde cero".',
        },
        {
          enunciado: '¿Qué hace única a una bitácora bien hecha?',
          opciones: [
            'Que sea bonita',
            'Que permita reproducir tu limpieza sin más explicación',
            'Que sea corta',
            'Que esté en inglés',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La reproducibilidad es la propiedad clave. Sin ella, tu trabajo no es ciencia ni oficio: es opinión.',
          feedbackIncorrecto:
            'Reproducibilidad. La bitácora bien hecha es el manual de instrucciones de tu limpieza para cualquier otro analista.',
        },
        {
          enunciado: 'En tu tabla "9A", "9a" y "9 A" aparecen como categorías separadas. ¿Qué tipo de suciedad es?',
          opciones: [
            'Duplicado',
            'Formato inconsistente',
            'Vacío',
            'Error tipográfico',
          ],
          respuestaIndex: 3,
          feedbackCorrecto:
            'Correcto. Variantes tipográficas se unifican con Buscar y reemplazar. Si las dejas, la tabla dinámica las tratará como grupos distintos.',
          feedbackIncorrecto:
            'Error tipográfico. Mayúsculas, minúsculas y espacios sobrantes producen "categorías fantasma". Buscar y reemplazar las unifica.',
        },
        {
          enunciado: 'En el saber ancestral de la criba, ¿qué aplica a la limpieza de datos?',
          opciones: [
            'Nada, son oficios distintos',
            'Lo que entra contaminado sale contaminado: sin criba, lo que concluyes es falso',
            'Que limpiar es rápido',
            'Que cribar es invención moderna',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La criba es ética del oficio. La bitácora es la versión profesional del cuaderno del archivero.',
          feedbackIncorrecto:
            'Lo contaminado se queda contaminado. La paciencia del oficio invisible es la base de toda obra que dura.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, toma una tabla cotidiana ajena (gastos del hogar, asistencia, libreta de un comerciante). Identifica los 4 tipos de suciedad y propón cómo la limpiarías sin tocarla.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Lo que se descarta sin nombrar deja de existir para quien lee el dato limpio.',
      preguntaEspejo:
        'Cuando limpié, ¿qué decisiones tomé en silencio que un crítico podría discutir si las viera escritas? ¿Qué cambia si las nombro?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La paciencia del oficio invisible es la base de toda obra que dura.',
      preguntaEspejo:
        '¿Resistí la tentación de saltar limpieza para llegar al gráfico bonito? ¿Qué calidad ganan mis conclusiones al haber cribado primero?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La integridad de los datos es la condición de toda verdad pública contemporánea.',
      preguntaEspejo:
        '¿Cuántas decisiones públicas leí esta semana sin preguntar quién limpió los datos detrás? ¿Qué garantía tengo de que esa limpieza tuvo bitácora?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste el oficio invisible que sustenta toda decisión profesional con datos. La paciencia del archivero es virtud transferible a cualquier proyecto.',
    emocional:
      'Resististe la tentación del análisis rápido. Limpiar bien es disciplina contra la prisa.',
    ciudadana:
      'Toda estadística pública pasó por una limpieza. Saber que existe ese oficio te hace lector crítico de reportes oficiales.',
    local:
      'La criba de granos de la abuela, el folio del archivero, la colada del ordeñador: oficios del Valle que persisten en formato digital.',
    intergeneracional:
      'Lo que la abuela hacía con un colador, tú lo haces con Buscar y reemplazar. Mismo gesto, distinto medio.',
  },
};

export default contenido;
