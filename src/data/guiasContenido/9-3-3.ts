/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 3
 * (sesión global 23).
 *
 * Auto-generado desde content/guias/9/9-3-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 3,
  titulo: 'Fórmulas básicas — SUMA, PROMEDIO, MAX, MIN, CONTAR',
  resumen: 'En la tienda de barrio hay un cuaderno donde la vendedora anota quién debe y cuánto, y va tachando. La palabra vale porque hay memoria y el registro vale porque cualquiera puede abrirlo, sumar y comparar. Hoy le haces a tu tabla las cinco preguntas básicas y aprendes que la pregunta va antes que la fórmula.',
  duracionMin: 90,
  subtema: 'Datos · Aritmética digital cotidiana',
  preLectura: {
    porQueImporta: 'Un promedio de cuatro horas puede tapar a alguien con once. Por eso el máximo y el mínimo no son adornos del reporte.',
    preguntaDetonante: '¿Quién lleva cuentas a mano cerca de ti, y qué revisa exactamente cuando cuadra?',
    activacion: {
      titulo: 'Cinco de cabeza',
      descripcion: 'En 2 minutos, mira una lista de números que tengas y calcula de cabeza el total y el mayor. Anota cuánto tardaste en cada uno.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 2 pusiste tu tabla en forma con las tres reglas innegociables.',
      siguiente: 'En la sesión 4 le preguntas a la tabla por una parte, con filtros y orden.'
    }
  },
  conceptosClave: [
    {
      termino: 'PROMEDIO',
      definicion: 'Responde cuánto suele haber por caso. Es el indicador más usado y el que más esconde, porque aplana los extremos.',
      ejemplo: 'Un promedio de cuatro horas de pantalla puede tapar a alguien con once.',
      categoria: 'Las cinco'
    },
    {
      termino: 'MAX y MIN',
      definicion: 'Señalan dónde están los extremos. Suelen ser la parte del reporte que muestra a quién le está pasando algo.',
      ejemplo: 'El máximo es el que delata al compañero que llega sin dormir.',
      categoria: 'Las cinco'
    },
    {
      termino: 'Rango completo',
      definicion: 'Seleccionar la columna entera y no celda por celda, para que la fórmula siga funcionando cuando lleguen filas nuevas.',
      ejemplo: 'Si mañana entra una fila y la fórmula no la ve, nadie te avisa del error.',
      categoria: 'Cómo se escriben'
    },
    {
      termino: 'Interpretación en contexto',
      definicion: 'Decir qué significa el número en tu tema concreto, no en abstracto.',
      ejemplo: '«El promedio es 4,2» no dice nada. «4,2 horas diarias de pantalla entre semana» sí.',
      categoria: 'Cómo se leen'
    },
    {
      termino: 'Registro verificable',
      definicion: 'Aquel que cualquiera puede abrir, sumar y comparar. Es lo que hace que valga, más que quién lo escribió.',
      ejemplo: 'El cuaderno del fiado se revisa y se tacha, y por eso sostiene un circuito de crédito sin firmas.',
      categoria: 'Por qué importa'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes preguntarle a una tabla?',
      instrucciones: 'Cinco preguntas sobre las fórmulas básicas y sobre cómo se leen. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué conviene seleccionar el rango completo y no celda por celda?',
          opciones: [
            'Porque la fórmula se escribe más rápido de esa manera.',
            'Porque si llega una fila nueva, la fórmula la incluye sola.',
            'Porque las celdas sueltas producen siempre un mensaje de error.',
            'Porque el programa lo exige para poder ordenar la tabla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí, y con celdas sueltas nadie te avisa de que la fórmula dejó de crecer.',
          feedbackIncorrecto: 'Porque el rango incluye las filas nuevas. Con celdas sueltas el error pasa desapercibido.'
        },
        {
          enunciado: 'Tu promedio de horas de pantalla es 4,2. ¿Qué puede estar escondiendo?',
          opciones: [
            'Nada: el promedio resume bien el comportamiento del grupo.',
            'Que la columna tiene un tipo de dato equivocado.',
            'Un caso extremo, que se vería con el máximo.',
            'Que faltan filas por recoger en la tabla.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Por eso el máximo y el mínimo no son adornos del reporte.',
          feedbackIncorrecto: 'Puede esconder un extremo. El promedio aplana, y el máximo es el que lo muestra.'
        },
        {
          enunciado: '¿Cuál de estas es una interpretación y no solo un resultado?',
          opciones: [
            '«El promedio de la columna es 4,2 según la fórmula.»',
            '«El valor máximo obtenido en la muestra fue de 11.»',
            '«La suma total del rango asciende a 84 unidades.»',
            '«El máximo es 11 horas, y es un compañero que llega sin dormir.»'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Habla del tema concreto, así que cualquiera entiende qué hacer con el dato.',
          feedbackIncorrecto: 'La que habla del contexto. Los otros tres repiten el número con otras palabras.'
        },
        {
          enunciado: '¿Qué hace que el cuaderno del fiado funcione sin ninguna firma?',
          opciones: [
            'Que cualquiera puede abrirlo, sumar y comparar.',
            'Que la tendera conoce personalmente a todos sus clientes.',
            'Que las deudas son siempre de montos muy pequeños.',
            'Que existe una ley que respalda ese tipo de crédito.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. La palabra vale porque hay memoria, y la memoria se puede poner a prueba.',
          feedbackIncorrecto: 'Que se puede revisar. El registro vale porque cualquiera puede ponerlo a prueba.'
        },
        {
          enunciado: 'Antes de escribir una fórmula, ¿qué conviene tener claro?',
          opciones: [
            'El nombre exacto de la función en el programa que uses.',
            'Qué decisión vas a tomar con ese número.',
            'El formato con que se mostrarán los decimales.',
            'Cuántas filas tiene exactamente la tabla completa.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Un promedio sin pregunta detrás es aritmética; con pregunta, es el comienzo de una decisión.',
          feedbackIncorrecto: 'La decisión que vas a tomar. La sintaxis se busca; la pregunta hay que tenerla antes.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de los cinco indicadores te dijo algo que no esperabas, y qué harías distinto por él?',
    transferencia: 'Pregúntale a alguien que lleve cuentas a mano qué revisa cuando cuadra. Va a nombrarte alguna de las cinco.',
    cierre: 'El cuaderno vale porque cualquiera puede abrirlo, sumar y comparar. Tu hoja de cálculo debería aguantar lo mismo.'
  },
  saberAncestral: {
    saber: 'En una tienda de barrio del Valle del Cauca hay un cuaderno. La vendedora anota ahí quién debe y cuánto, y va tachando a medida que le pagan. Nadie firma nada: al fiado se entra demostrando que uno es «buena paga» y se sale cuando uno deja de serlo (Martínez Benavides, 2021). Fíjate en lo que hace ese cuaderno. La palabra vale porque hay memoria, y el registro vale porque cualquiera puede ponerlo a prueba: se abre, se suma y se compara. Es una hoja de cálculo hecha a mano, con las mismas operaciones que vas a usar hoy. La cara de exclusión es doble. La sanción por incumplir no es proporcional ni apelable: es la vergüenza en público, delante de testigos. Y a quien la tendera no conoce, no le fía, así que el circuito solo cuenta a los que ya estaban adentro.',
    fuente: 'El fiado y el cuaderno de la tienda · la memoria que cualquiera puede revisar',
    referencia: 'Martínez Benavides, A. (2021). Circuitos crediticios: fiado y trabajo relacional en un pequeño negocio en Cali, Colombia. Estudios Sociológicos de El Colegio de México, 39(116), 467--494. https://doi.org/10.24201/es.2021v39n116.1946',
    preguntaPuente: 'El cuaderno de la tienda vale porque cualquiera puede abrirlo, sumar y comparar. Tu hoja de cálculo, ¿aguantaría que alguien la revisara así?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El cuaderno que cualquiera puede revisar',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · De cabeza y con fórmula',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Qué pregunta responde cada una',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Cinco indicadores interpretados',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'De cabeza y con fórmula',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu tabla de la sesión 2 con su columna numérica.',
        'Calcula mentalmente el total, el promedio, el máximo, el mínimo y cuántas filas hay.',
        'Anota tus cinco respuestas y cuánto tardaste.',
        'Calcula los cinco con fórmula y anota los resultados.',
        'Compara, marca en cuál te alejaste más y escribe por qué crees que fue ese.'
      ],
      cuaderno: {
        titulo: 'De cabeza y con fórmula',
        formato: 'tabla de 5 filas y 3 columnas (indicador / de cabeza / con fórmula)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están los cinco resultados de las dos maneras.',
        'Está escrito por qué falló ese cálculo y no otro.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Qué pregunta responde cada una',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las cinco fórmulas con la pregunta que responde cada una.',
        'Escriban qué exige cada una para funcionar.',
        'Digan qué indicador describe mejor y cuál peor un dato de sus tablas.',
        'Busquen un caso donde el promedio esconda algo y digan qué indicador lo mostraría.'
      ],
      cuaderno: {
        titulo: 'Qué pregunta responde cada una',
        formato: 'las cinco fórmulas con su pregunta y lo que exigen, más el caso donde el promedio esconde algo',
        extension: 'media página'
      },
      criterios: [
        'Hay escrito un caso donde el promedio engaña.',
        'Cada fórmula tiene su pregunta en lenguaje corriente.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Cinco indicadores interpretados',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe las cinco fórmulas sobre tu tabla, con su sintaxis completa.',
        'Comprueba que cada rango tome la columna entera.',
        'Verifica al menos un resultado a mano, con tres filas.',
        'Escribe la interpretación de cada indicador en una frase de tu contexto.',
        'Señala cuál de los cinco sirve para la decisión que tenías en mente.'
      ],
      cuaderno: {
        titulo: 'Cinco indicadores interpretados',
        formato: 'las cinco fórmulas con su resultado y su interpretación, más la señal en el que sirve',
        extension: 'media página'
      },
      criterios: [
        'Las interpretaciones hablan del tema propio, no de estadística en general.',
        'Un compañero explicó uno de los números sin ayuda.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.5.2',
      lente: 'lente del nosotros',
      cita: 'Es un error pensar que la ciencia pura… aplica ella misma alguna de sus conclusiones, apareciendo la tecnología como su concreta creación… Muy por el contrario, es el discurso técnico artesanal o tecnológico… echa mano… de conclusiones o teorías científicas.',
      preguntaEspejo: '¿Qué cálculo hago por necesidad, sin haberlo aprendido en una clase?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones IX, 6 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Tu opinión presente fundada en el entendimiento, tu conducta presente dirigida al bien común y tu disposición presente de contento con todo lo que sucede: eso basta. (trad. propia)',
      preguntaEspejo: '¿Cuántos de los números que calculé sé explicar sin volver a mirarlos?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Una de las preguntas políticas apremiantes que enfrentamos en las sociedades de la información avanzadas es: ¿en qué clase de proyecto humano estamos trabajando? (trad. propia)',
      preguntaEspejo: '¿Para qué recogí estos datos, y sigo calculando lo que responde a eso?'
    }
  },
  cincoDimensiones: {
    personal: 'Mediste cuánto se desvía tu cálculo mental, que es un dato tuyo y no de la tabla.',
    emocional: 'Descubrir que el promedio tapaba algo incomoda, y es justo para eso que se calculan los extremos.',
    ciudadana: 'Un registro que cualquiera puede revisar es lo que sostiene un acuerdo sin necesidad de firmas.',
    local: 'En las tiendas del Valle el fiado funciona con un cuaderno, y ese cuaderno es una hoja de cálculo a mano.',
    intergeneracional: 'Quien lleva cuentas a mano hace las mismas cinco preguntas que tú harás con fórmulas.'
  }
};

export default contenido;
