/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 4
 * Tema: Funciones estadísticas SUMA, PROMEDIO, MAX, MIN.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 4,
  resumen:
    'Como el recuento de la cosecha en las veredas: total, promedio, máximo y mínimo no son aritmética — son herramientas para decidir qué cambia mañana en el curso, en el equipo o en la cooperativa.',
  duracionMin: 90,
  subtema: 'Excel · 4 funciones estadísticas · Decisiones',

  preLectura: {
    porQueImporta:
      'Saber leer 4 indicadores básicos te servirá toda la vida: para presupuestar, para evaluar tu rendimiento, para argumentar una propuesta a tu colegio o a tu empresa. La fórmula es fácil; lo difícil (y valioso) es saber qué decisión proponer con esos números.',
    preguntaDetonante:
      '¿Qué del recuento de la cosecha — la disciplina de mirar total, promedio, máximo y mínimo para decidir el siguiente día — podemos llevar al análisis del curso?',
    activacion: {
      titulo: 'Cuatro datos, una decisión',
      descripcion:
        'En 5 minutos: piensa en una situación real (notas, deportes, ventas) y propón qué decisión podría tomar alguien con base en su total, promedio, máximo y mínimo. Comparte con un compañero.',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 3 limpiaste y estructuraste tablas con criterio.',
      siguiente: 'En la sesión 5 aprenderás referencias relativas y absolutas para fórmulas reusables.',
    },
  },

  conceptosClave: [
    {
      categoria: '🧮 Cómo se calcula',
      termino: 'SUMA',
      definicion:
        'Función que devuelve el total acumulado de un rango. Útil para presupuestos, conteo de minutos, esfuerzo total del grupo. Sintaxis: =SUMA(B2:B31).',
      ejemplo:
        '=SUMA(C2:C31) sobre la columna de minutos corridos te dice cuánto corrió el curso entero esta semana.',
      emoji: '➕',
    },
    {
      categoria: '🧮 Cómo se calcula',
      termino: 'PROMEDIO',
      definicion:
        'Función que devuelve la media aritmética del rango. Es el valor "central" pero puede engañar si hay casos atípicos. Sintaxis: =PROMEDIO(B2:B31).',
      ejemplo:
        'Si las notas son 4.5, 4.8, 4.2, 1.0, 4.5 → el promedio es 3.8 — pero el 1.0 es atípico y baja el resultado. Mira siempre MIN y MAX.',
      emoji: '➗',
    },
    {
      categoria: '🧮 Cómo se calcula',
      termino: 'MAX',
      definicion:
        'Función que devuelve el valor más alto del rango. Útil para identificar el caso más exitoso, la mejor nota, el récord. Sintaxis: =MAX(B2:B31).',
      ejemplo:
        '=MAX(D2:D31) sobre las notas del periodo te dice cuál fue la nota más alta. Útil para reconocer logros.',
      emoji: '⬆️',
    },
    {
      categoria: '🧮 Cómo se calcula',
      termino: 'MIN',
      definicion:
        'Función que devuelve el valor más bajo del rango. Útil para identificar dónde focalizar apoyo, no para estigmatizar. Sintaxis: =MIN(B2:B31).',
      ejemplo:
        '=MIN(D2:D31) te dice la nota más baja. La phronesis pregunta: ¿qué historia hay detrás de ese MIN?',
      emoji: '⬇️',
    },
    {
      categoria: '🦉 Cómo se interpreta',
      termino: 'Rango',
      definicion:
        'Diferencia entre MAX y MIN (=MAX − MIN). Indica qué tan disperso o concentrado está el grupo. Un rango grande revela desigualdad o variabilidad alta.',
      ejemplo:
        'Promedio 30 min con MAX 90 y MIN 0 → rango = 90, grupo muy desigual. Promedio 30 con MAX 35 y MIN 25 → rango = 10, grupo concentrado.',
      emoji: '🎯',
    },
    {
      categoria: '🦉 Cómo se interpreta',
      termino: 'Representatividad',
      definicion:
        'Cuán bien el promedio refleja al grupo. Si el rango es grande, el promedio es menos representativo. La phronesis exige no fiarte del promedio solo.',
      ejemplo:
        'Si la mitad del curso saca 5.0 y la otra mitad 1.0, el promedio es 3.0 — pero NADIE sacó 3.0. El promedio NO los representa.',
      emoji: '📊',
    },
    {
      categoria: '🦉 Cómo se interpreta',
      termino: 'Caso atípico (outlier)',
      definicion:
        'Dato muy lejos del resto. Puede ser error de captura o información valiosa (un caso excepcional). Antes de eliminarlo, investiga su origen.',
      ejemplo:
        'Si en notas de 1.0 a 5.0 aparece un 50.0, es error tipográfico (probablemente 5.0). Pero si aparece un 0.5, es atípico legítimo que merece atención.',
      emoji: '🔍',
    },
    {
      categoria: '🦉 Cómo se interpreta',
      termino: 'Decisión basada en función',
      definicion:
        'Acción concreta que se propone con base en lo que dicen los 4 indicadores juntos. Una decisión prudente nombra evidencia y reconoce límites.',
      ejemplo:
        '"El rango de minutos corridos (0-90) sugiere atender al estudiante con MIN=0 antes que celebrar al de MAX=90. Propongo conversación individual."',
      emoji: '🤔',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Las 4 funciones para decidir',
      instrucciones:
        '5 preguntas tipo ICFES sobre uso e interpretación de SUMA, PROMEDIO, MAX, MIN y rango.',
      preguntas: [
        {
          enunciado:
            'Si las notas de 5 estudiantes son 4.5, 4.8, 4.2, 1.0, 4.5, ¿el promedio refleja bien al grupo?',
          opciones: [
            'Sí, perfectamente: 3.8 es la nota típica del grupo',
            'No, el 1.0 es un caso atípico que baja el promedio y oculta que la mayoría está en 4+',
            'Solo si quitamos los 4.5 que se repiten',
            'Hay que sumar más datos para saber',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. El promedio (3.8) NO representa al grupo: 4 de 5 sacaron 4.0+. El 1.0 es atípico que baja el promedio. Sin mirar MIN/MAX, esa decisión queda ciega.',
          feedbackIncorrecto:
            '❌ El promedio puede engañar cuando hay un caso atípico (outlier). 4 de 5 estudiantes están en 4+, pero uno con 1.0 baja el promedio a 3.8. La phronesis exige mirar MIN/MAX.',
        },
        {
          enunciado:
            '=MAX(B2:B10) en una columna de notas devuelve:',
          opciones: [
            'La fila más larga del rango',
            'El valor más alto del rango B2:B10',
            'La suma de todas las notas',
            'El último número ingresado',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. =MAX devuelve el valor más alto numérico del rango. Si las notas son 3.5, 4.8, 4.2, 4.5, MAX devuelve 4.8.',
          feedbackIncorrecto:
            '❌ MAX no se trata de filas, sumas ni último ingreso. Devuelve el VALOR MÁS ALTO numérico. La sintaxis estándar es =MAX(rango).',
        },
        {
          enunciado:
            'El director quiere comparar las edades de dos cursos para una decisión. ¿Qué funciones son MÁS útiles?',
          opciones: [
            'Solo SUMA',
            'PROMEDIO + MIN/MAX (rango)',
            'Solo MAX',
            'SUMA + MIN',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. PROMEDIO da el centro y MIN/MAX dan el rango (qué tan dispersas son las edades). Comparar PROMEDIO + RANGO entre cursos da una imagen completa.',
          feedbackIncorrecto:
            '❌ SUMA de edades no tiene sentido pedagógico. MAX solo da el máximo (incompleto). PROMEDIO solo no muestra dispersión. Lo útil: PROMEDIO + RANGO (MIN/MAX) para comparar grupos.',
        },
        {
          enunciado:
            'Si el promedio de notas es 3.5 y la "mediana" (valor del medio) es 4.0, ¿qué interpretación es correcta?',
          opciones: [
            'Son lo mismo, da igual',
            'Hay valores muy bajos jalando el promedio hacia abajo, mientras la mayoría está en 4+',
            'El cálculo está mal',
            'La hoja tiene un error',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Excelente. Cuando promedio < mediana, hay outliers bajos. Cuando promedio > mediana, hay outliers altos. La diferencia revela asimetría — información clave para decidir.',
          feedbackIncorrecto:
            '❌ Promedio y mediana NO son lo mismo: el promedio es sensible a outliers. Si promedio (3.5) < mediana (4.0), hay valores bajos arrastrando el promedio. Eso te dice algo sobre el grupo.',
        },
        {
          enunciado:
            'Decir "el equipo entrenó en promedio 30 minutos" sin ver MAX ni MIN puede:',
          opciones: [
            'Simplificar la decisión, mejor así',
            'Esconder que algunos no entrenaron (MIN=0) y otros se excedieron (MAX=90), invisibilizando ambas situaciones',
            'Mejorar el resultado del equipo',
            'No importa, el promedio es suficiente',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Sí. Promedio de 30 con rango 0-90 esconde tanto al que no entrena como al que se sobreentrena — ambos requieren atención distinta. La phronesis es ver TODO, no solo el centro.',
          feedbackIncorrecto:
            '❌ El promedio solo NUNCA simplifica bien una decisión humana: esconde casos extremos. Ver MAX y MIN revela quién está al borde, en ambos extremos. Es ética analítica, no estadística decorativa.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Recuerdas alguna vez que un promedio te dio una imagen falsa de un grupo? ¿Qué dato faltó para entender qué pasaba realmente?',
    transferencia:
      'Esta semana aplica las 4 funciones a un dato de tu vida: minutos de estudio diarios, gastos, calificaciones, tiempo de pantalla. Comparte el rango con alguien y propón UNA decisión.',
    cierre:
      'El recuento de la cosecha no era para celebrar — era para decidir qué cambiar. Tus 4 funciones son las mismas: total, promedio, máximo, mínimo... y una decisión.',
  },

  saberAncestral: {
    saber:
      'En las veredas del Valle, el Pacífico y los Andes, terminada la cosecha la familia (o la cooperativa) hacía recuento: total de bultos, promedio por mata, máximo de la mejor parcela, mínimo de la peor. No era estadística académica — eran 4 cifras prácticas para decidir qué sembrar el próximo ciclo, a quién apoyar, qué parcela rotar. Esos 4 números son exactamente SUMA, PROMEDIO, MAX y MIN — Excel solo automatizó un saber milenario del campo.',
    fuente: 'Recuento de la cosecha en veredas del Valle, Pacífico y Andes colombianos',
    preguntaPuente:
      '¿Cómo decidía la abuela qué cambiar después del recuento de la cosecha? ¿Y qué pierde la decisión cuando solo miramos el promedio sin saber el mínimo y el máximo?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El promedio puede esconder al que no produce o al que se sobreexige; ver el rango es justicia analítica.',
      preguntaEspejo:
        'Cuando reporto un "promedio" del curso o del equipo, ¿estoy invisibilizando a quien está abajo o arriba del centro? ¿Qué cambia si reporto también MIN y MAX?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El número que no lleva a decisión es vanidad estadística.',
      preguntaEspejo:
        '¿Mis cálculos llevan a una decisión concreta o me los muestro para sentirme productivo? ¿Cuál fue la última decisión real que tomé desde un dato?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las 4 funciones básicas son la infraestructura cognitiva mínima para decidir en la infoesfera de datos.',
      preguntaEspejo:
        '¿Estoy entrenando mi alfabetización estadística cotidiana o solo aprendo fórmulas para el examen? ¿Cuál de las 4 uso menos y por qué?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a leer un conjunto de datos con criterio adulto: no solo el centro, también los extremos que requieren atención.',
    emocional:
      'Sentiste que reportar solo "promedio" puede ser cómodo pero injusto. La phronesis exige nombrar también lo invisibilizado.',
    ciudadana:
      'Reconociste que reportar bien datos es acto ético: a quién haces visible y a quién dejas en la sombra.',
    local:
      'Heredaste la lógica del recuento campesino: 4 cifras para decidir qué cambiar el próximo ciclo.',
    intergeneracional:
      'La abuela contadora de cosecha y tú con Excel comparten el mismo objetivo: datos que llevan a decisiones reales.',
  },
};

export default contenido;
