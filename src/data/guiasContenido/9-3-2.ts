/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 2
 * Tema: Tablas y registros — la columna como tipo, la fila como caso.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-2.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 2,
  titulo: 'Tablas y registros — la columna como tipo, la fila como caso',
  ocultarPDF: false,
  resumen:
    'Limpias tu tabla de la sesión 1 aplicando las 3 reglas innegociables: columnas tipadas, filas completas, encabezados consistentes. Sin estas 3, ninguna fórmula posterior funciona.',
  duracionMin: 90,
  subtema: 'Datos · Estructura de tablas',

  saberAncestral: {
    saber:
      'Los registros parroquiales coloniales colombianos mantenían la memoria de los pueblos durante siglos: bautizos, matrimonios, defunciones, ventas de tierra. Cada registro tenía formato uniforme. Los cuadernos del tendero del barrio del Valle hacían lo mismo con cuentas diarias: fecha, producto, cantidad, precio. Una fila por hecho, una columna por tipo — esa estructura es exactamente la lógica de una hoja de cálculo moderna. La tabla no es invento digital: es la digitalización de un oficio centenario.',
    fuente: 'Registros parroquiales coloniales y cuadernos del tendero en el Valle del Cauca',
    preguntaPuente:
      '¿Cómo organizaba la abuela su libreta de cuentas o la parroquia su registro de bautizos? ¿Y qué pasa hoy cuando alguien sube una hoja de Excel con celdas combinadas, columnas mezcladas y filas incompletas?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El cuaderno del tendero', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: '3 tablas reales bajo la lupa', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '3 reglas innegociables', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Limpia tu tabla a forma profesional', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una tabla profesional bien estructurada hace que las fórmulas funcionen al primer intento. Una mal estructurada te hace pasar horas depurando errores invisibles. La diferencia entre amateur y profesional empieza aquí, no en las fórmulas avanzadas.',
    preguntaDetonante:
      'Si compartes hoy tu hoja de Excel con un compañero, ¿él podría entenderla en 30 segundos sin tu explicación? Si no, ¿qué está mal estructurado?',
    activacion: {
      titulo: 'Test del compañero',
      descripcion:
        'En 3 minutos: abre la tabla de la sesión 1 y muéstrasela a un compañero. Pídele que diga, sin que tú expliques, qué hay en cada columna. Si dudó en alguna, eso es indicador de error estructural.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 1 recogiste 20 datos con pregunta acotada. Hoy le aplicas las 3 reglas que permiten que esos datos sí sirvan.',
      siguiente:
        'En la sesión 3 aplicarás las 5 fórmulas básicas (SUMA, PROMEDIO, MAX, MIN, CONTAR) sobre tu tabla limpia.',
    },
  },

  conceptosClave: [
    {
      termino: 'Columna tipada',
      definicion:
        'Cada columna almacena UN solo tipo: texto, número, fecha, sí/no, o moneda. Romper el tipo impide que las fórmulas funcionen.',
      ejemplo:
        'Columna "Edad" debe ser solo números (14, 15, 16). Si una celda tiene "catorce", todas las fórmulas que la usen darán error.',
      emoji: '🅰',
    },
    {
      termino: 'Fila como caso',
      definicion:
        'Cada fila representa UN hecho completo con todos sus campos. Una fila a medias es como una transacción a medias — no sirve para análisis.',
      ejemplo:
        'Una fila "Juan, _, La Esperanza, 45" con la edad vacía rompe cualquier análisis de edad. Hay que completar o eliminar.',
      emoji: '↔',
    },
    {
      termino: 'Encabezados consistentes',
      definicion:
        'Primera fila con nombres cortos, sin acentos extraños, sin espacios al inicio, sin emojis. Eso permite que fórmulas referencien sin error.',
      ejemplo:
        'Bien: "Edad", "MinutosTikTok". Mal: " Edad ", "Minutos en TikTok 📱", "ÉDAD". Esos espacios y caracteres rompen referencias.',
      emoji: '🏷',
    },
    {
      termino: 'Celdas combinadas (a evitar)',
      definicion:
        'Cuando dos o más celdas se fusionan visualmente en una sola. Rompen filtros, fórmulas y exportación a CSV. Estética que destruye función.',
      ejemplo:
        'Para "agrupar visualmente" 3 filas bajo "Grado 9°A" se combinan 3 celdas. Resultado: filtros y SUMA fallan. Solución: repetir el valor en cada fila.',
      emoji: '🚫',
    },
    {
      termino: 'Forma larga vs forma ancha',
      definicion:
        'Forma larga: una fila por observación (Juan-Lunes-45min, Juan-Martes-30min). Forma ancha: una columna por dimensión (Juan, Lunes=45, Martes=30). Cada una sirve a un análisis distinto.',
      ejemplo:
        'Para tabla dinámica conviene forma larga. Para reporte visual conviene forma ancha. Saber convertir entre las dos es habilidad clave.',
      emoji: '↕',
    },
    {
      termino: 'Bitácora de limpieza',
      definicion:
        'Documento aparte donde anotas qué eliminaste, qué transformaste y por qué. Hace tu trabajo reproducible — alguien puede repetir tu proceso.',
      ejemplo:
        '"Eliminé fila 7 porque tenía edad vacía. Renombré columna Minutos en TikTok a MinutosTikTok para fórmulas." Esa bitácora es profesionalismo.',
      emoji: '📋',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '3 tablas reales bajo la lupa',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Encuentra una tabla profesional (DANE, datos abiertos del gobierno, ficha técnica).',
        'Encuentra una tabla cotidiana (lista del salón, inventario, programación).',
        'Encuentra una tabla mal estructurada (puede ser propia o de un grupo de WhatsApp).',
        'Para cada una verifica las 3 reglas innegociables y documenta cumplimiento o errores.',
      ],
      cuaderno: {
        titulo: '3 tablas bajo la lupa',
        formato: 'Tabla 4 columnas (Tabla | Tipos | ¿Filas completas? | Errores detectados), 3 filas',
        extension: '3 filas + reflexión final',
      },
      criterios: [
        '3 tablas reales identificadas y comparadas',
        'Reconozco tipos por columna en cada una',
        'Detecté errores específicos en la mal estructurada',
        'Entendí por qué los errores rompen análisis posterior',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '3 reglas innegociables de una tabla',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada regla (columnas tipadas, filas completas, encabezados consistentes) escribe una ficha.',
        'En cada ficha: definición + ejemplo correcto + ejemplo incorrecto (con captura o dibujo).',
        'Marca con ★ la regla que más se incumple en tareas escolares.',
        'Cierra con 2 renglones: ¿cuál de las 3 reglas has roto tú antes?',
      ],
      cuaderno: {
        titulo: '3 reglas innegociables de una tabla',
        formato: '3 fichas con definición + ejemplo correcto + ejemplo incorrecto',
        extension: '3 fichas + 2 renglones de cierre',
      },
      criterios: [
        'Cada ficha tiene definición + 2 ejemplos contrastantes',
        'Identifiqué la regla más descuidada',
        'Reconozco honestamente un error propio',
        'Puedo diagnosticar errores en cualquier tabla',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Limpia tu tabla a forma profesional',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Abre la tabla de Sesión 1. Revisa encabezados (cortos, consistentes, sin acentos raros).',
        'Declara tipos en cada columna (Sheets/Excel: Formato → Número/Texto/Fecha).',
        'Elimina o completa filas con celdas vacías.',
        'Revisa duplicados exactos y decide si quitar.',
        'Documenta cada cambio en una bitácora aparte.',
      ],
      cuaderno: {
        titulo: 'Mi tabla limpia y tipada',
        formato: 'Captura impresa de la tabla limpia + bitácora de limpieza + nombre del archivo',
        extension: '1 página de cuaderno + 1 archivo digital',
      },
      criterios: [
        'Encabezados cortos, consistentes, sin acentos raros',
        '3+ columnas con tipos declarados',
        '15+ filas reales sin celdas vacías',
        'Cero celdas combinadas',
        'Bitácora de limpieza documentada',
        'Un compañero puede abrir y entender sin explicación',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Auditoría de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia el link de la tabla limpia con un compañero.',
        'Abre la suya sin que te explique. Cronométrate: ¿en cuánto entiendes la estructura?',
        'Califica del 1 al 5: (a) ¿encabezados consistentes?, (b) ¿tipos correctos por columna?, (c) ¿bitácora clara?',
        'Marca con ✨ lo más profesional y con 🚩 lo que aún sería confuso para alguien externo.',
      ],
      cuaderno: {
        titulo: 'Auditoría de la tabla de [nombre]',
        formato: 'Tiempo de comprensión + 3 calificaciones + marcas',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Cronometraste tu tiempo de comprensión',
        'Las 3 calificaciones tienen justificación',
        'Marcaste lo profesional y los huecos',
        'Sugerencia concreta para mejorar',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica las 3 reglas innegociables',
      instrucciones:
        '5 preguntas para confirmar que estructuras tablas con criterio profesional. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué pasa si una columna mezcla números y texto?',
          opciones: [
            'Nada, se ve igual',
            'Las fórmulas como SUMA o PROMEDIO no funcionan o devuelven 0 silenciosamente',
            'Solo es problema estético',
            'Excel los convierte automáticamente',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Mezclar tipos rompe las fórmulas en silencio: SUMA devuelve 0 o un número incorrecto sin avisar.',
          feedbackIncorrecto:
            'Mezclar tipos rompe fórmulas silenciosamente. Es el error más peligroso: la hoja parece funcionar pero los resultados son falsos.',
        },
        {
          enunciado: '¿Por qué las celdas combinadas son enemigas de la tabla profesional?',
          opciones: [
            'Se ven feas',
            'Rompen filtros, fórmulas y exportación a CSV — estética que destruye función',
            'Solo se permiten en Word',
            'Ocupan más espacio',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Una tabla con celdas combinadas no se puede filtrar bien, las fórmulas se confunden con el rango y al exportar a CSV se rompe.',
          feedbackIncorrecto:
            'Celdas combinadas = estética que rompe función. Filtros, fórmulas y exportación fallan. Si necesitas agrupar visualmente, mejor formato condicional o repetir el valor.',
        },
        {
          enunciado: 'Una columna "Edad-Género" con valores "14-F", "15-M". ¿Qué hacer?',
          opciones: [
            'Dejarla así, ahorra espacio',
            'Partirla en 2 columnas: "Edad" (número) y "Género" (texto)',
            'Convertir todo a texto',
            'Borrarla',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Una variable por columna es regla básica. "Edad" debe poder filtrarse/promediarse como número; "Género" como texto.',
          feedbackIncorrecto:
            'Partir en 2 columnas. Una variable por columna permite filtrar por edad o por género independientemente — algo imposible con la mezcla.',
        },
        {
          enunciado: '¿Para qué sirve una "bitácora de limpieza"?',
          opciones: [
            'Para llenar página',
            'Para hacer el trabajo reproducible — alguien puede repetir o auditar tu proceso',
            'Para subir nota',
            'No sirve',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Si eliminaste 3 filas, alguien podría preguntar por qué. La bitácora documenta tus decisiones para que el trabajo se pueda auditar.',
          feedbackIncorrecto:
            'Reproducibilidad. Sin bitácora, tu trabajo es opaco. Con bitácora, otra persona puede repetir tu proceso y verificar tus decisiones.',
        },
        {
          enunciado:
            'En el saber ancestral del cuaderno del tendero, ¿qué aplica directamente a tu hoja de Excel hoy?',
          opciones: [
            'Nada — los tenderos no usaban Excel',
            'Que la estructura uniforme (una fila por hecho, una columna por tipo) permite memoria útil',
            'Que se debe escribir a mano',
            'Que los tenderos sabían más',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El cuaderno del tendero y tu hoja de Excel comparten la misma estructura porque ambas resuelven el mismo problema: guardar información para decidir.',
          feedbackIncorrecto:
            'Estructura uniforme. La hoja de Excel digitaliza el oficio del tendero: una fila por transacción, una columna por tipo. Cambia el medio, no el principio.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica las 3 reglas innegociables a UNA tabla cotidiana tuya (lista de gastos, inventario, programación). Compártela con alguien y pídele que diga si entiende la estructura sin que tú expliques. Ese feedback vale más que cualquier nota.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La memoria del pueblo se mantiene cuando se estructura con disciplina — las estructuras también son políticas.',
      preguntaEspejo:
        '¿Qué columnas faltan en las tablas que uso a diario? ¿Quiénes quedan invisibilizados por la ausencia de esa columna?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El cuidado paciente del encabezado, del tipo, de la fila completa — esa virtud invisible sostiene todo el análisis posterior.',
      preguntaEspejo:
        '¿Estoy dispuesto a invertir 30 minutos en limpieza estructural, o prefiero "ya está, vamos a las fórmulas" y después arrepentirme?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Una tabla bien estructurada es regalo informacional a quien la recibe — una mal estructurada es ruido egoísta.',
      preguntaEspejo:
        'Cuando comparto una tabla, ¿estoy regalando o cargando a quien la abre después? ¿Cómo lo sé sin preguntarle?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste que estructura bien hecha es lo que diferencia amateur de profesional en cualquier herramienta digital.',
    emocional:
      'Resististe la tentación de "ya está, sigamos" — entendiste que el orden inicial te ahorra frustración después.',
    ciudadana:
      'Saber estructurar tablas es habilidad cívica básica: lees mejor estadísticas oficiales, exiges mejor reportes, propones mejor proyectos con datos.',
    local:
      'Heredaste el oficio del tendero del Valle y del archivero parroquial: estructura uniforme como base de memoria comunitaria.',
    intergeneracional:
      'El cuaderno del tendero y tu hoja de Excel comparten lógica. Lo que cambia es el medio, no la disciplina.',
  },
};

export default contenido;
