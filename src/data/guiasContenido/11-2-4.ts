/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 4
 * Tema: Hojas de cálculo como base de datos.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-4.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 4,
  titulo: 'Hojas de cálculo como base de datos',
  ocultarPDF: false,
  resumen:
    'Una hoja se vuelve base de datos cuando cumple 3 reglas tidy (fila = caso, columna = variable, encabezados claros) y se opera con 3 vistas: filtro, orden y fórmulas. Aprendes a estructurar una hoja operativa con datos reales.',
  duracionMin: 90,
  subtema: 'Automatización · Estructura de datos',

  saberAncestral: {
    saber:
      'El libro contable del mercado campesino de Cartago es la primera base de datos: cada fila una venta, cada columna un dato. El libro mayor del tendero y el cuaderno de la lechera cumplen la misma función: registro estructurado, una observación por fila, una variable por columna. Excel y Google Sheets son la evolución natural del libro mayor — misma anatomía, misma disciplina, pero con cálculo automático y filtros instantáneos.',
    fuente: 'Libro contable del mercado campesino, libro mayor del tendero y cuaderno de la lechera del Valle',
    preguntaPuente:
      '¿Cómo sabía el tendero qué columna agregar a su libro mayor antes de Excel? ¿Y qué pierde un emprendedor novato cuando construye una hoja con datos mezclados en celdas sin separar las variables?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El libro mayor del tendero', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Hoja limpia vs hoja sucia', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de la hoja-base', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Hoja con 3 vistas operativas', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'El 80% de las microempresas de América Latina funciona con hojas de cálculo. Estructurarlas como bases de datos es el cimiento de cualquier transformación digital posterior.',
    preguntaDetonante:
      'Si tu hoja tiene 500 filas y necesitas responder "¿cuántos clientes de Cartago pagaron más de 100.000 en mayo?", ¿se puede sin reescribir nada?',
    activacion: {
      titulo: 'Hoja limpia vs hoja sucia',
      descripcion:
        'En 3 minutos: el docente proyecta 2 hojas, una limpia y una sucia, y pregunta lo mismo a ambas. Los estudiantes ven la diferencia entre responder en 5 segundos y rendirse a los 5 minutos.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 3 capturaste información con un formulario que llega a una hoja. Hoy aprendes a operar esa hoja para que sirva como base de datos real.',
      siguiente:
        'En la sesión 5 automatizas la cadena que se dispara cuando llega una fila nueva — triggers con Zapier, Make o n8n.',
    },
  },

  conceptosClave: [
    {
      termino: 'Regla 1: fila = observación',
      definicion:
        'Cada fila representa un caso completo (una venta, un cliente, un día). Si una "venta" ocupa 2 filas, la regla está rota.',
      ejemplo:
        'Fila: cliente Juan + producto pan + monto 5.000 + fecha 2026-05-15.',
      emoji: '↔️',
    },
    {
      termino: 'Regla 2: columna = variable',
      definicion:
        'Cada columna contiene un solo tipo de dato. No mezclar texto y número en la misma columna.',
      ejemplo:
        'Columna "monto" solo números; columna "ciudad" solo texto.',
      emoji: '⬆️',
    },
    {
      termino: 'Regla 3: encabezados claros',
      definicion:
        'Primera fila con nombres cortos, sin espacios ni acentos. Facilita fórmulas y conexiones a otras herramientas.',
      ejemplo:
        '"nombre_cliente", "fecha_pedido", "monto_total" — no "Nombre del Cliente, S.A.".',
      emoji: '🏷️',
    },
    {
      termino: 'Vista 1: filtro',
      definicion:
        'Aísla subconjuntos: "¿cuáles filas cumplen X?". No modifica datos, solo lo que ves.',
      ejemplo:
        'Filtro ciudad = "Cartago" + monto > 100.000 → solo esas filas visibles.',
      emoji: '🔍',
    },
    {
      termino: 'Vista 2: orden',
      definicion:
        'Reorganiza por columna numérica o fecha. Útil para rankings y priorización.',
      ejemplo:
        'Ordenar por "monto" descendente → ver primero los pedidos más grandes.',
      emoji: '↕️',
    },
    {
      termino: 'Vista 3: fórmulas',
      definicion:
        'Calcula métricas: SUMA, PROMEDIO, CONTAR.SI, BUSCARV. Responde preguntas cuantitativas.',
      ejemplo:
        '=CONTAR.SI(C:C,"Cartago") → cuenta filas de Cartago automáticamente.',
      emoji: '🧮',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Hoja limpia vs hoja sucia',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre las 2 hojas que comparte el docente (una limpia, una sucia).',
        'En cada una, intenta responder en 5 minutos: cuántas filas cumplen X, cuál es el promedio de Y, cuál fila tiene el valor máximo.',
        'Cronometra el tiempo total en cada hoja.',
        'Anota qué problemas concretos encontraste en la sucia (celdas combinadas, columnas mezcladas, encabezados ambiguos).',
      ],
      cuaderno: {
        titulo: 'Hoja limpia vs hoja sucia',
        formato: 'Tabla 2 filas × 3 columnas (Tiempo | Frustración | Pregunta no respondida)',
        extension: '2 filas + 2 problemas técnicos',
      },
      criterios: [
        'Intenté las 3 preguntas en ambas hojas',
        'Cronometré los tiempos',
        'Nombré 2 problemas con vocabulario técnico',
        'Reconozco cómo la estructura afecta el costo de cada consulta',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía de la hoja-base',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 3 reglas + 3 vistas + 5 errores comunes.',
        'Para cada regla, escribe 1 ejemplo de tu propia hoja (o del formulario de Sesión 3).',
        'Marca 🚨 el error que más temes cometer.',
        'Anota 1 pregunta operativa que necesitas responder y qué vista la resolvería.',
      ],
      cuaderno: {
        titulo: 'Anatomía de la hoja-base',
        formato: 'Ficha con 3 reglas + 3 vistas + 5 errores + ejemplos personales',
        extension: '1 ficha + 1 pregunta operativa propia',
      },
      criterios: [
        'Las 3 reglas con ejemplo propio',
        'Las 3 vistas explicadas con su pregunta operativa',
        '5 errores listados con marca del más temido',
        'Identifico 1 pregunta que mi hoja debe responder',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Hoja con 3 vistas operativas',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Toma datos reales (Sheet enlazado al Form, dataset abierto, registros del proceso).',
        'Verifica las 3 reglas tidy: limpia encabezados, separa columnas mezcladas, elimina celdas combinadas.',
        'En pestaña "Vistas": configura filtro avanzado, ordenamiento y 3-5 fórmulas clave.',
        'En pestaña "Cómo usar": escribe 1 línea por vista explicando qué pregunta responde.',
      ],
      cuaderno: {
        titulo: 'Mi hoja como base',
        formato: 'Pantallazo Datos + pantallazo Vistas + checklist + URL',
        extension: '1 página de cuaderno',
      },
      criterios: [
        '3 reglas tidy cumplidas',
        '25+ filas reales',
        '3 vistas configuradas (filtro, orden, fórmulas)',
        'Pestaña Cómo usar con 1 frase por vista',
        'URL compartible',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Prueba con un compañero externo',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte tu hoja con un compañero sin explicarle el contexto.',
        'Pídele responder 3 preguntas operativas usando las vistas configuradas.',
        'Cronometra cuánto tarda y anota dónde se confunde.',
        'Ajusta encabezados, vistas o la pestaña "Cómo usar" según su retroalimentación.',
      ],
      cuaderno: {
        titulo: 'Auditoría con [nombre]',
        formato: 'Tiempo + confusiones + ajustes aplicados',
        extension: '1 evaluación cruzada',
      },
      criterios: [
        'El compañero respondió sin contexto previo',
        'Cronometré inicio y fin',
        'Apliqué al menos 1 ajuste basado en sus dudas',
        'Reconozco la diferencia entre "yo entiendo mi hoja" y "es operativa para otros"',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica hojas como base de datos',
      instrucciones:
        '5 preguntas para confirmar que estructuras hojas con criterio profesional. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Una celda dice "Juan, 5 panes, jueves". ¿Cuál regla tidy rompe?',
          opciones: [
            'Ninguna',
            'Regla 2 — columna = variable; aquí 3 variables están mezcladas en una celda',
            'Regla 1',
            'Regla 3',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Cada variable necesita su columna: nombre_cliente, cantidad_panes, dia. Sin esa separación, no se puede filtrar ni calcular.',
          feedbackIncorrecto:
            'Una columna por variable. Mezclar 3 datos en una celda rompe filtros, ordenamiento y fórmulas.',
        },
        {
          enunciado: '¿Por qué los encabezados sin espacios ni acentos?',
          opciones: [
            'Por estética',
            'Para que funcionen en fórmulas, integraciones y Apps Script sin errores',
            'No importa',
            'Por costumbre académica',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Espacios y acentos rompen referencias en muchas integraciones. "monto_total" funciona en todos lados; "Monto Total" no.',
          feedbackIncorrecto:
            'Compatibilidad técnica. Las herramientas que se conectan después (Zapier, Apps Script, importadores) suelen fallar con encabezados sucios.',
        },
        {
          enunciado: '¿Cuál vista responde "¿cuál fila tiene el valor máximo?"',
          opciones: [
            'Filtro',
            'Orden descendente por la columna numérica',
            'Fórmulas',
            'Ninguna',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Ordenar descendente por la columna numérica pone el máximo arriba. También se puede con =MAX(), pero orden permite verla con su contexto completo.',
          feedbackIncorrecto:
            'Orden descendente. La vista de orden no oculta nada, solo reorganiza, y deja la fila máxima visible con todo su contexto.',
        },
        {
          enunciado: '¿Para qué sirve la pestaña "Cómo usar"?',
          opciones: [
            'Para decorar',
            'Para que cualquier persona sepa qué pregunta resuelve cada vista sin tu explicación',
            'Es opcional siempre',
            'No sirve',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La hoja debe ser operativa para terceros. Una línea por vista evita preguntas y permite que el sistema viva sin ti.',
          feedbackIncorrecto:
            'Para terceros. La pestaña "Cómo usar" es la diferencia entre una hoja personal y un sistema operativo de información.',
        },
        {
          enunciado: 'En el saber ancestral del libro mayor, ¿qué aplica a tu hoja?',
          opciones: [
            'Nada — son tecnologías distintas',
            'Una fila = un caso, una columna = una variable es disciplina antigua del oficio del registro',
            'Que el papel es obsoleto',
            'Que los tenderos inventaron Excel',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La estructura tidy es oficio del registro estructurado. Excel solo automatizó el cálculo y el filtro.',
          feedbackIncorrecto:
            'Disciplina del registro. Misma anatomía heredada de siglos: el medio cambia, la regla no.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, toma una hoja real de tu vida (gastos, contactos, notas) y rediseñala según las 3 reglas tidy. Comparte la versión limpia con quien comparte la hoja contigo.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una columna decide qué se cuenta como dato y qué queda fuera del modelo.',
      preguntaEspejo:
        'En mi base de datos, ¿qué personas o situaciones quedaron sin columna? ¿Qué cambia en la decisión cuando agrego una columna para nombrarlos?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La columna correcta en su lugar es la base de toda obra que dura.',
      preguntaEspejo:
        '¿Resistí la tentación de improvisar la estructura? ¿Qué ahorro de trabajo futuro gano con la disciplina inicial?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La hoja de cálculo bien estructurada es la infraestructura mínima de cualquier organización contemporánea.',
      preguntaEspejo:
        '¿Cuántas decisiones organizacionales que vi esta semana descansaban en una hoja bien o mal estructurada? ¿Qué cambia si domino esa estructura desde ya?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste el cimiento de cualquier sistema de información profesional: la hoja estructurada. Es ventaja transferible a cualquier carrera.',
    emocional:
      'Toleraste la disciplina de estructurar bien al inicio en lugar de improvisar. Esa paciencia es virtud profesional.',
    ciudadana:
      'Hoy en día, los datos públicos abiertos llegan en hojas. Saber leerlas y operarlas te permite participar en debates ciudadanos con evidencia.',
    local:
      'El libro contable, el libro mayor, el cuaderno de la lechera: oficios del registro que persisten en formato digital. Misma sabiduría heredada.',
    intergeneracional:
      'Lo que la abuela apuntaba con lápiz en libreta, tú lo estructuras en hoja con cálculo automático. Mismo gesto, distinto medio.',
  },
};

export default contenido;
