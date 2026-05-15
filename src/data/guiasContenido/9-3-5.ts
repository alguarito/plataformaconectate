/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 5
 * Tema: Tablas dinámicas — agrupar y comparar.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-5.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 5,
  titulo: 'Tablas dinámicas — agrupar y comparar',
  ocultarPDF: false,
  resumen:
    'Una tabla dinámica resume una tabla larga agrupando por una columna y calculando otra. Es el salto del cálculo único al cálculo comparable: ya no "cuánto en total", sino "cuánto por categoría".',
  duracionMin: 90,
  subtema: 'Datos · Comparar grupos',

  saberAncestral: {
    saber:
      'El inventario del almacén de barrio en Cartago se hacía agrupando: cuántos sacos de café, cuántas latas de aceite, cuántas libras de panela. Esa agrupación informaba qué pedir, qué guardar, qué bajar de precio. La costurera del Pacífico agrupaba telas por color; el cosechero agrupaba el café por lote y altura. Agrupar es un gesto antiguo: mirar lo grande agrupando lo pequeño. La tabla dinámica es ese mismo gesto en formato digital.',
    fuente: 'Inventario del almacén de barrio, costurera del Pacífico y cosechero campesino del Valle',
    preguntaPuente:
      '¿Cómo hacía el tendero del barrio para saber, sin computador, qué producto se vendía más? ¿Y qué pierde un analista novato cuando salta a las tablas dinámicas sin haber escrito antes la pregunta?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Agrupar es oficio antiguo', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: '¿Total o por grupo?', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de una tabla dinámica', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu tabla dinámica con conclusión', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'El promedio general suele esconder diferencias clave entre grupos. La tabla dinámica abre la tabla por categorías para que el promedio que decide tener sea el que importa, no el que disuelve a todos en el mismo dato.',
    preguntaDetonante:
      'Si el promedio del curso es 6.2 pero 9A tiene 7.5 y 9B tiene 4.9, ¿qué decisión pedagógica cambia al ver el promedio por curso en lugar del total?',
    activacion: {
      titulo: 'El inventario del almacén',
      descripcion:
        'En 3 minutos: el docente nombra 12 productos al azar (café, panela, arroz, café, aceite, arroz…). Los estudiantes deben "agrupar mentalmente" y reportar cuánto de cada uno. Después se compara con una tabla dinámica en vivo.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 4 aplicaste filtros para cortar la tabla. Hoy aprendes a re-agruparla para comparar promedios y totales por categoría.',
      siguiente:
        'En la sesión 6 vas a ponerle imagen a esas agrupaciones — gráficos de barra, línea y circular para que el ojo lea de un vistazo lo que la tabla dinámica dice por categoría.',
    },
  },

  conceptosClave: [
    {
      termino: 'Filas (zona)',
      definicion:
        'La categoría por la que agrupas: mes, curso, barrio, área. Cada valor distinto se vuelve una fila del resumen.',
      ejemplo:
        'Arrastras "Curso" a Filas: aparecen 9A, 9B, 9C como filas separadas.',
      emoji: '📋',
    },
    {
      termino: 'Valores (zona)',
      definicion:
        'La columna numérica sobre la que calculas un indicador (suma, promedio, conteo). El motor real de la tabla dinámica.',
      ejemplo:
        'Arrastras "Nota" a Valores: por defecto calcula SUMA; cámbiala a PROMEDIO.',
      emoji: '🔢',
    },
    {
      termino: 'Operación',
      definicion:
        'SUMA, PROMEDIO, CUENTA, MAX o MIN. Cambia con clic derecho → Configuración del campo. Confundirlas es el error más común.',
      ejemplo:
        'Notas: usa PROMEDIO. Productos vendidos: usa SUMA. Estudiantes por curso: usa CUENTA.',
      emoji: '⚙️',
    },
    {
      termino: 'Columnas (zona, opcional)',
      definicion:
        'Cruce: una segunda categoría que aparece en columnas. Útil para matrices curso × mes, área × periodo.',
      ejemplo:
        'Filas = Curso, Columnas = Mes, Valores = Gasto promedio → matriz mes-curso.',
      emoji: '🪟',
    },
    {
      termino: 'Filtros (zona, opcional)',
      definicion:
        'Reduce toda la tabla dinámica a un subconjunto sin tocar las filas/columnas. Útil cuando solo te interesa una rebanada.',
      ejemplo:
        'Filtro Grado = 9 → la tabla dinámica solo muestra grupos del grado 9.',
      emoji: '🎚️',
    },
    {
      termino: 'Conclusión de 3 renglones',
      definicion:
        'Cada tabla dinámica responde mejor con una conclusión corta: grupo destacado / grupo en riesgo / decisión posible.',
      ejemplo:
        '"9A destaca con 7.5. 9B queda atrás con 4.9. Sugiere refuerzo focalizado en 9B antes que clase general."',
      emoji: '💡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: '¿Total o por grupo?',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma tu tabla de Sesión 2 con fórmulas de Sesión 3 ya aplicadas.',
        'Responde a ojo: qué categoría tiene el promedio más alto en una columna numérica y cuál tiene más filas.',
        'Construye una primera tabla dinámica para verificar (Filas = categoría, Valores = columna numérica).',
        'Compara: ¿qué método fue más rápido?, ¿qué método dio resultado correcto?',
      ],
      cuaderno: {
        titulo: '¿Total o por grupo?',
        formato: 'Tabla 4 columnas (Pregunta | A ojo | Tabla dinámica | Tiempo a ojo), 2 filas',
        extension: '2 filas + 1 línea de cierre',
      },
      criterios: [
        'Respondí a ojo ambas preguntas con tiempo cronometrado',
        'Construí la tabla dinámica para verificar',
        'Comparé honestamente velocidad y precisión',
        'Reconozco cuándo el promedio total esconde lo que importa',
      ],
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Anatomía de una tabla dinámica',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 4 zonas (Filas, Columnas, Valores, Filtros).',
        'En cada zona escribe qué pusiste y por qué (para tu propio caso).',
        'Marca qué operación elegiste (SUMA, PROMEDIO, CUENTA, MAX, MIN) y por qué esa y no otra.',
        'Anota 1 error común que evitaste o cometiste y aprendiste.',
      ],
      cuaderno: {
        titulo: 'Anatomía de una tabla dinámica',
        formato: 'Ficha con 4 zonas + operación elegida + 1 error aprendido',
        extension: '1 ficha + 1 nota',
      },
      criterios: [
        'Las 4 zonas tienen contenido pertinente',
        'La operación elegida está justificada',
        'Identifico al menos 1 error frecuente',
        'Podría construir otra tabla dinámica sin consultar',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu tabla dinámica con conclusión',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe en 1 frase la pregunta de agrupación que quieres responder.',
        'Selecciona toda la tabla con encabezados → Insertar → Tabla dinámica → Nueva hoja.',
        'Arrastra categoría a Filas y columna numérica a Valores; ajusta la operación.',
        'Ordena el resultado de mayor a menor, toma captura y escribe 3 renglones de conclusión (destaca / queda atrás / sugiere).',
      ],
      cuaderno: {
        titulo: 'Mi tabla dinámica',
        formato: 'Ficha con pregunta + configuración + captura + conclusión 3 renglones',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Pregunta escrita antes de construir',
        'Filas + valores + operación configurados correctamente',
        'Resultados ordenados para destacar el grupo top',
        'Captura visible de la tabla dinámica',
        'Conclusión de 3 renglones con grupo destacado y decisión',
      ],
    },
    {
      numero: 4,
      verbo: 'EXPLICA',
      titulo: 'Explica tu tabla dinámica a un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte la captura y la conclusión con un compañero, sin la tabla original.',
        'El compañero debe poder responder: ¿qué grupo destaca?, ¿qué grupo queda atrás?, ¿qué decisión se desprende?',
        'Marca ✨ si la conclusión es clara, 🚩 si necesita reescritura.',
        'Conversen: ¿qué categoría quedó en "otros" o no aparece? ¿Qué cambiaría si fuera visible?',
      ],
      cuaderno: {
        titulo: 'Explicación cruzada con [nombre]',
        formato: 'Marca + 1 sugerencia de mejora + 1 observación sobre "otros"',
        extension: '1 evaluación cruzada',
      },
      criterios: [
        'La marca tiene justificación',
        'La sugerencia es accionable',
        'Identifico al menos una categoría invisibilizada',
        'La conversación cerró con un ajuste posible',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica tablas dinámicas',
      instrucciones:
        '5 preguntas para confirmar que dominas tablas dinámicas con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Arrastras una columna de notas a Valores y la operación es SUMA. ¿Qué calcula?',
          opciones: [
            'El promedio del grupo',
            'La suma de todas las notas del grupo (no es lo que normalmente quieres)',
            'La cantidad de notas',
            'El máximo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Excel arranca con SUMA por defecto. Cámbiala a PROMEDIO con clic derecho → Configuración del campo, o el indicador no tendrá sentido.',
          feedbackIncorrecto:
            'SUMA suma — incluso si lo que tiene sentido es PROMEDIO. Cambiar la operación es el paso que más se olvida.',
        },
        {
          enunciado: 'La categoría "9A" aparece dos veces en la tabla dinámica con totales distintos. ¿Qué pasó?',
          opciones: [
            'Bug de Excel',
            'En la columna original hay "9A" y "9a" con minúscula: el filtro las separa',
            'Es normal',
            'Faltan datos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Datos sucios (mayúsculas, espacios, tildes inconsistentes) se separan al agrupar. Limpia la columna antes de pivotar.',
          feedbackIncorrecto:
            'La causa es higiene de datos: dos versiones de la categoría producen dos grupos. La limpieza de Sesión 2 importa aquí.',
        },
        {
          enunciado: '¿Cuándo conviene SUMA y cuándo PROMEDIO en Valores?',
          opciones: [
            'Da lo mismo',
            'SUMA cuando preguntas "cuánto en total"; PROMEDIO cuando preguntas "cuánto típicamente"',
            'SUMA siempre',
            'PROMEDIO solo con notas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Ventas: SUMA. Notas, edad, horas: PROMEDIO. La operación define la pregunta que estás respondiendo.',
          feedbackIncorrecto:
            'Total → SUMA. Típico → PROMEDIO. Elegir mal cambia la conclusión sin que lo notes.',
        },
        {
          enunciado: '¿Qué entrega una tabla dinámica que las fórmulas básicas no entregan?',
          opciones: [
            'Lo mismo, en otra forma',
            'Permite comparar grupos sin escribir 10 fórmulas: el indicador se recalcula por categoría',
            'Más velocidad',
            'Cálculos más precisos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Su poder está en comparar grupos sin esfuerzo. Reemplaza horas de fórmulas =PROMEDIO.SI repetidas.',
          feedbackIncorrecto:
            'El valor agregado es comparar grupos. Sin tabla dinámica, replicar "promedio por categoría" requiere muchas fórmulas condicionales.',
        },
        {
          enunciado: 'En el saber ancestral del almacén de barrio, ¿qué aplica a la tabla dinámica?',
          opciones: [
            'Nada — son tecnologías distintas',
            'Agrupar lo grande en lo pequeño para decidir qué pedir, guardar o cambiar es oficio antiguo automatizado',
            'Que los tenderos usaban Excel',
            'Que agrupar es invento moderno',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El tendero agrupaba para decidir. Tú agrupas con tabla dinámica para decidir. Mismo oficio.',
          feedbackIncorrecto:
            'El gesto de agrupar es antiguo. La tabla dinámica solo lo hace en milisegundos sobre cientos de filas.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica una tabla dinámica real a UNA tabla cotidiana fuera del aula: gastos por categoría, calificaciones por área, horas de sueño por día. Documenta el grupo destacado, el grupo en riesgo y una decisión real.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una categoría es siempre una decisión de quién se cuenta junto a quién — y de quién queda fuera de toda categoría.',
      preguntaEspejo:
        'Cuando agrupé mi tabla, ¿quién quedó en "otros" o "no aplica"? ¿Qué decisión cambiaría si esa categoría fuera visible?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'No compares lo que no es comparable: ahí empieza toda confusión.',
      preguntaEspejo:
        'Los grupos que comparé, ¿eran realmente comparables o solo se parecían? ¿Qué diferencia silenciosa entre ellos podría explicar el resultado mejor que el grupo en sí?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las tablas dinámicas son la infraestructura cognitiva con que la sociedad contemporánea se mira a sí misma.',
      preguntaEspejo:
        '¿Cuántas "tablas con totales por categoría" leí esta semana en redes o noticias? ¿Habría agrupado yo las mismas categorías?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de mirar un total a comparar grupos: capacidad que usarás para presupuesto familiar, hábitos, deportes, métricas de salud.',
    emocional:
      'Toleraste la incomodidad de "lo simple ya no alcanza". Comparar grupos pide pensar antes de calcular.',
    ciudadana:
      'Reportes oficiales, periodismo de datos y propaganda usan tablas dinámicas. Dominarlas es leer crítica, no consumir resúmenes.',
    local:
      'El tendero de barrio, la costurera, el cosechero agrupaban con criterio. Tú agrupas con tabla dinámica. Misma phronesis.',
    intergeneracional:
      'La libreta agrupada de la abuela y tu tabla dinámica responden la misma pregunta. La herramienta cambia, la decisión sigue.',
  },
};

export default contenido;
