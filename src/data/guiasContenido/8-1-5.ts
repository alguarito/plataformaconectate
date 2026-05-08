/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 5
 * Tema: Referencias relativas y absolutas en Excel.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 5,
  resumen:
    'Como la fórmula heredada del abuelo: lo que no se negocia se ancla, lo que cambia con el día se deja libre. Aprendes a escribir UNA fórmula que se copia a 100 celdas y calcula bien cada caso.',
  duracionMin: 90,
  subtema: 'Excel · Referencias relativas y absolutas',

  preLectura: {
    porQueImporta:
      'Saber anclar una celda con $ es la diferencia entre escribir UNA fórmula reutilizable y escribir 100 fórmulas a mano. Esta habilidad ahorra horas y reduce errores en cualquier hoja: notas, presupuestos, inventarios, nómina.',
    preguntaDetonante:
      '¿Qué de la fórmula del abuelo — el ancla heredada que no se negocia — podemos llevar a las referencias absolutas de Excel?',
    activacion: {
      titulo: 'La receta multiplicada',
      descripcion:
        'En 5 minutos: piensa en una receta de tu casa (sancocho, arepa, jugo) que se multiplique según porciones. ¿Qué cantidades son FIJAS por porción y cuáles VARÍAN con el número de porciones? Eso es relativo vs absoluto antes de Excel.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 4 aplicaste 4 funciones estadísticas a datos reales.',
      siguiente: 'En la sesión 6 aprenderás fórmulas compuestas con operadores y orden de cálculo.',
    },
  },

  conceptosClave: [
    {
      categoria: '⚓ Cómo se ancla',
      termino: 'Referencia relativa',
      definicion:
        'Notación A1 sin signos $. Al copiar la fórmula, ambas dimensiones (fila y columna) se ajustan automáticamente. Es la opción por defecto.',
      ejemplo:
        '=A1*B1 en C1, al copiar a C2 se vuelve =A2*B2. Útil cuando ambos datos están en la misma fila relativa.',
      emoji: '🔄',
    },
    {
      categoria: '⚓ Cómo se ancla',
      termino: 'Referencia absoluta',
      definicion:
        'Notación $A$1 con signos $ en fila y columna. Al copiar, NUNCA cambia. Útil para constantes (impuestos, porcentajes únicos, factores fijos).',
      ejemplo:
        '=A1*$E$1 al copiar mantiene siempre la celda E1. Útil cuando todos los datos se multiplican por el MISMO porcentaje.',
      emoji: '🔒',
    },
    {
      categoria: '⚓ Cómo se ancla',
      termino: 'Referencia mixta (fila)',
      definicion:
        'Notación A$1 con $ solo en la fila. Al copiar verticalmente la fila se mantiene; al copiar horizontalmente la columna varía. Útil para encabezados horizontales fijos.',
      ejemplo:
        '=A2*B$1 al copiar hacia abajo mantiene siempre la fila 1 (encabezados). Al copiar hacia el lado, B se vuelve C, D, E.',
      emoji: '↕️',
    },
    {
      categoria: '⚓ Cómo se ancla',
      termino: 'Referencia mixta (columna)',
      definicion:
        'Notación $A1 con $ solo en la columna. Al copiar horizontalmente la columna se mantiene; al copiar verticalmente la fila varía. Útil para etiquetas verticales fijas.',
      ejemplo:
        '=$A2*B$1 es el patrón clásico de tabla de multiplicar: columna A fija (multiplicando), fila 1 fija (multiplicador).',
      emoji: '↔️',
    },
    {
      categoria: '🛠️ Cómo se construye fórmula compleja',
      termino: 'Anclaje correcto',
      definicion:
        'Identificar qué celda(s) NO deben cambiar al copiar la fórmula. Lo que es constante en TODAS las filas/columnas, se ancla con $.',
      ejemplo:
        'Para calcular nota_final = nota * porcentaje: la nota varía por estudiante (relativa), el porcentaje es fijo (absoluto). Fórmula: =B2*$E$1.',
      emoji: '⚓',
    },
    {
      categoria: '🛠️ Cómo se construye fórmula compleja',
      termino: 'Fórmula reusable',
      definicion:
        'UNA sola fórmula con anclaje correcto que se copia a 30, 100 o 1000 celdas y calcula bien cada caso. Diseño que ahorra horas.',
      ejemplo:
        'Una fórmula de cálculo de IVA bien hecha se aplica a 1000 productos sin cambiar nada. La misma fórmula mal anclada falla en la fila 2.',
      emoji: '📋',
    },
    {
      categoria: '🛠️ Cómo se construye fórmula compleja',
      termino: 'Errores #DIV/0! y #REF!',
      definicion:
        '#DIV/0! aparece cuando se divide entre cero o entre celda vacía. #REF! aparece cuando la fórmula referencia una celda que fue eliminada o movida fuera de rango.',
      ejemplo:
        'Si tu fórmula =A1/B1 da #DIV/0!, B1 está vacío o es 0. Si da #REF!, alguien eliminó la columna A o B y la referencia se rompió.',
      emoji: '🐛',
    },
    {
      categoria: '🛠️ Cómo se construye fórmula compleja',
      termino: 'Tecla F4',
      definicion:
        'Atajo de Excel que rota entre los 4 tipos de referencia (relativa → absoluta → mixta fila → mixta columna → relativa). Te ahorra escribir signos $ a mano.',
      ejemplo:
        'Posiciona el cursor sobre A1 en una fórmula y presiona F4: A1 → $A$1 → A$1 → $A1 → A1. Útil para experimentar y elegir el anclaje correcto.',
      emoji: '⌨️',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Anclaje y fórmulas reusables',
      instrucciones:
        '5 preguntas tipo ICFES sobre tipos de referencia, anclaje correcto y diagnóstico de errores en fórmulas.',
      preguntas: [
        {
          enunciado:
            'Si la fórmula =A1*B1 está en C1 y la copias a C2, ¿en qué se convierte?',
          opciones: [
            'Sigue siendo =A1*B1 (idéntica)',
            'Se vuelve =A2*B2 (ambas referencias avanzan una fila)',
            'Se borra automáticamente',
            'Da error #REF!',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. Las referencias relativas (sin $) se ajustan automáticamente al copiar. C1: =A1*B1 → C2: =A2*B2. Cada fila usa sus propios datos.',
          feedbackIncorrecto:
            '❌ Las referencias SIN $ son relativas: se ajustan al copiar. =A1*B1 en C1 al copiarse a C2 SÍ cambia automáticamente a =A2*B2. No hay error ni borrado.',
        },
        {
          enunciado:
            '=A1*$B$1 al copiar de C1 a C2 se convierte en:',
          opciones: [
            '=A2*B2 (ambas avanzan)',
            '=A2*$B$1 (A1 avanza, $B$1 se ancla)',
            '=A1*$B$2 (A1 fija, B avanza)',
            '=$A$2*$B$2 (todo se ancla)',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. A1 (relativa) avanza a A2. $B$1 (absoluta) se mantiene fijo. La fórmula resultante es =A2*$B$1. Patrón clásico de "30 datos × 1 constante".',
          feedbackIncorrecto:
            '❌ La $ ANCLA la celda al copiar. $B$1 NO cambia nunca. A1 sin $ SÍ cambia. Resultado: =A2*$B$1. Es el patrón típico de cálculo con porcentaje fijo.',
        },
        {
          enunciado:
            'Para multiplicar 30 notas (columna A) por un MISMO porcentaje (celda E1), ¿cuál fórmula escribirías en C2 para luego copiarla?',
          opciones: [
            '=A2*E1',
            '=A2*$E$1',
            '=$A2*E1',
            '=$A$2*$E$1',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. =A2*$E$1 es la fórmula reusable. A2 relativa (cambia con cada nota: A3, A4, A5...). $E$1 absoluta (mantiene el porcentaje fijo). UNA fórmula, 30 cálculos.',
          feedbackIncorrecto:
            '❌ =A2*E1 falla: al copiar a C3, E1 se vuelve E2 (vacío). $A$2 ancla la fila de la nota (todas usarían A2). La correcta: A2 (relativa) × $E$1 (absoluta).',
        },
        {
          enunciado:
            'Si recibes el error #REF! en una fórmula, ¿qué significa?',
          opciones: [
            'Falta espacio en el archivo',
            'La celda referenciada fue eliminada o movida fuera de rango',
            'El número es muy grande para Excel',
            'Hay texto donde debería haber número',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. #REF! aparece cuando una fórmula apunta a una celda que ya no existe (eliminada, columna borrada, hoja eliminada). Hay que reconstruir la referencia.',
          feedbackIncorrecto:
            '❌ "Falta espacio" o "número muy grande" no producen #REF!. El error de texto en cálculo da #VALUE!. #REF! es específicamente cuando la celda referenciada fue ELIMINADA o movida.',
        },
        {
          enunciado:
            '¿Cuándo conviene usar referencias mixtas (A$1 o $A1) en lugar de absolutas?',
          opciones: [
            'Nunca, siempre usar $A$1',
            'Siempre, son más modernas',
            'Cuando una dimensión debe variar y la otra mantenerse al copiar (ej: tabla de multiplicar con encabezados fijos)',
            'Solo en gráficos',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Excelente. Ejemplo clásico: tabla de multiplicar. La columna A tiene multiplicandos (1-10), la fila 1 tiene multiplicadores (1-10). Fórmula =$A2*B$1 en B2 se copia a toda la matriz.',
          feedbackIncorrecto:
            '❌ Las mixtas son útiles cuando UNA dimensión debe quedarse fija (ej. encabezado de fila) y otra debe variar. Tabla de multiplicar es el caso clásico. No son "modernas" — son ESPECÍFICAS para casos donde sirven.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '"Lo que no se negocia se ancla". Más allá de Excel, ¿qué constantes éticas o personales anclas tú con $ en tu vida — lo que no copias de otros, lo que no varía con la presión social?',
    transferencia:
      'Esta semana arma una hoja con UNA fórmula reusable: cálculo de descuento, IVA, promedio ponderado. Que UNA sola línea calcule 20 casos. Documenta qué anclaste y por qué.',
    cierre:
      'La fórmula del abuelo — el ancla heredada — sigue viva en cada $ que escribes. Es disciplina técnica y, también, soberanía cultural.',
  },
};

export default contenido;
