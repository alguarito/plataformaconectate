/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 9
 * (sesión global 29).
 *
 * Auto-generado desde content/guias/9/9-3-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 9,
  titulo: 'Insights — del dato a la decisión',
  resumen: 'Un cafetero controla cuándo abona, no el hongo ni el precio en Nueva York. Pero la crisis de la roya no fue solo clima: al subir el costo de los insumos muchos dejaron de abonar, y el cafetal mal manejado se volvió vulnerable. Hoy conviertes tus datos en tres decisiones que nombren quién decide y en qué plazo.',
  duracionMin: 90,
  subtema: 'Datos · Del dato a la decisión',
  preLectura: {
    porQueImporta: 'Un dato que no cambia ninguna decisión es información, y la información sola no mueve nada. La diferencia está en nombrar quién decide.',
    preguntaDetonante: 'De todo lo que averiguaste este periodo, ¿qué harías distinto la próxima semana?',
    activacion: {
      titulo: 'Una sola decisión',
      descripcion: 'En 2 minutos, escribe un número que hayas encontrado en tus datos. Al lado, qué harías distinto por ese número.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 8 auditaste tres gráficos engañosos y los rehiciste con honestidad.',
      siguiente: 'En la sesión 10 sustentas el mini estudio que cierra el periodo y el año.'
    }
  },
  conceptosClave: [
    {
      termino: 'Dato',
      definicion: 'El número que sirve de evidencia: un promedio, una diferencia entre grupos, un rango o una tasa. Va en una línea.',
      ejemplo: '«El 60 % llega después de las siete» pesa. «Muchos llegan tarde» no permite discutir.',
      categoria: 'Las tres piezas'
    },
    {
      termino: 'Hallazgo',
      definicion: 'La frase humana que dice qué significa el dato. Sin ella, el número queda a interpretación de cada quien.',
      ejemplo: '«La mayoría no alcanza a llegar al primer bloque» explica lo que el porcentaje solo insinúa.',
      categoria: 'Las tres piezas'
    },
    {
      termino: 'Decisión',
      definicion: 'Qué se hace a partir del hallazgo, con quién decide y en qué plazo. Sin responsable ni fecha, no ocurre.',
      ejemplo: '«La coordinación revisa los horarios antes del viernes» se puede cumplir o incumplir.',
      categoria: 'Las tres piezas'
    },
    {
      termino: 'Un dato, una decisión',
      definicion: 'Si un hallazgo propone tres cosas, son tres hallazgos mal separados y ninguno se puede discutir aparte.',
      ejemplo: 'Separarlos permite aceptar uno y rechazar otro, que es como se decide de verdad.',
      categoria: 'Cómo se ordena'
    },
    {
      termino: 'Lo que depende de quién',
      definicion: 'Separar lo que no depende de nadie, lo que depende de alguien con nombre y lo que depende de ti.',
      ejemplo: 'En la roya, mucho de lo que parecía incontrolable venía de decisiones sobre el costo de los insumos.',
      categoria: 'Cómo se lee'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes convertir un dato en una decisión?',
      instrucciones: 'Cinco preguntas sobre las tres piezas y la regla de una decisión por dato. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos es un hallazgo accionable?',
          opciones: [
            '«Hay bastante variación en la columna de horarios de llegada.»',
            '«Los datos muestran comportamientos muy diversos entre grupos.»',
            '«El 60 % llega después de las siete, así que la reunión empieza siete y media.»',
            '«Se observa una tendencia interesante que conviene seguir estudiando.»'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Tiene número, significado y una decisión que se puede cumplir o incumplir.',
          feedbackIncorrecto: 'El que trae número y decisión. Los otros tres son observaciones sin destino.'
        },
        {
          enunciado: 'Tu hallazgo propone tres decisiones distintas. ¿Qué pasa?',
          opciones: [
            'Que son tres hallazgos mal separados.',
            'Que el hallazgo es especialmente valioso por su alcance.',
            'Que hay que elegir la más fácil de ejecutar primero.',
            'Que conviene dejarlo así para no alargar el reporte.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Separarlos permite aceptar uno y rechazar otro, que es como se decide.',
          feedbackIncorrecto: 'Son tres hallazgos juntos. Así ninguno se puede discutir por separado.'
        },
        {
          enunciado: '¿Qué le falta a «habría que revisar los horarios»?',
          opciones: [
            'Un dato numérico que respalde la afirmación general.',
            'Quién decide y en qué plazo.',
            'Una explicación de por qué los horarios importan.',
            'Un gráfico que acompañe la recomendación escrita.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Sin responsable ni fecha, la decisión no ocurre y nadie queda comprometido.',
          feedbackIncorrecto: 'Le faltan el responsable y el plazo. Sin eso no hay forma de saber si se cumplió.'
        },
        {
          enunciado: '¿Qué disparó la caída de producción durante la crisis de la roya?',
          opciones: [
            'Únicamente el clima y la aparición del hongo.',
            'Una decisión de los compradores internacionales de café.',
            'El clima y también que muchos dejaron de abonar al subir los insumos.',
            'Un cambio en las variedades sembradas por los productores.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Parte de lo que parecía incontrolable venía de decisiones económicas concretas.',
          feedbackIncorrecto: 'No fue solo el clima: al encarecerse los insumos muchos dejaron de abonar.'
        },
        {
          enunciado: '¿Cómo se ordenan los hallazgos en el reporte?',
          opciones: [
            'Por importancia, empezando por el que más cambia algo.',
            'Por el orden en que fueron apareciendo en el análisis.',
            'Por la cantidad de datos que respaldan cada uno.',
            'Por la facilidad con que se pueden ejecutar sus decisiones.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto, y ese orden dice tanto de tu criterio como los hallazgos mismos.',
          feedbackIncorrecto: 'Por importancia. El orden cronológico no le sirve a quien tiene que decidir.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus tres decisiones, ¿cuál depende de ti, cuál de alguien con nombre y cuál de nadie en particular?',
    transferencia: 'Elige una de tus decisiones y averigua quién tendría que tomarla de verdad. Con nombre y cargo, no «el colegio».',
    cierre: 'La pregunta no es cómo evitar la incertidumbre, sino qué hacer con la parte que sí es tuya.'
  },
  saberAncestral: {
    saber: 'Un cafetero del Valle o del Quindío controla cuándo abona, cuándo renueva y cuándo recoge. No controla el hongo, ni la temperatura, ni el precio en Nueva York. Entre 2008 y 2011 la roya hizo caer la producción colombiana un 31 % en promedio frente a 2007 (Avelino et al., 2015). Y aquí viene lo que no conviene simplificar. Lo que disparó la crisis no fue solo el clima. Al subir el costo de los insumos, muchos dejaron de abonar, y un cafetal mal manejado se volvió vulnerable. Es decir: buena parte de lo que parecía incontrolable se fabricó con decisiones económicas. La cara de exclusión: presentar el precio internacional como destino sería falsear el dato. En medio de todo eso viven 557.311 familias productoras. La pregunta del cafetero no es cómo evitar la incertidumbre, sino qué hacer con la parte que sí es suya.',
    fuente: 'Crisis de la roya (2008-2011) · lo que no depende de nadie y lo que sí',
    referencia: 'Avelino, J., Cristancho, M., Georgiou, S., Imbach, P., Aguilar, L., Bornemann, G., Läderach, P., Anzueto, F., Hruska, A. J., & Morales, C. (2015). The coffee rust crises in Colombia and Central America (2008--2013): Impacts, plausible causes and proposed solutions. Food Security, 7(2), 303--321. https://doi.org/10.1007/s12571-015-0446-9',
    preguntaPuente: 'El cafetero no controla el hongo ni el precio, pero sí cuándo abona. En tus datos, ¿qué parte de lo que encontraste depende de alguien que puedas nombrar?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Lo que sí depende de alguien',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '🔎'
      ],
      titulo: 'Actividad 1 · Hallazgo o decoración',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Dato, hallazgo, decisión',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu reporte de tres hallazgos',
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
      verbo: 'ANALIZA',
      titulo: 'Hallazgo o decoración',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu carpeta del periodo con todo lo que produjiste.',
        'Pregúntate en cada elemento qué decisión cambiaría si esto fuera real.',
        'Marca los que sí cambiarían algo.',
        'Marca aparte los que solo se ven bien.',
        'Cuenta cuántos hay de cada clase y anota si te sorprendió la proporción.'
      ],
      cuaderno: {
        titulo: 'Hallazgo o decoración',
        formato: 'lista de los elementos del periodo con su marca y el conteo final de cada clase',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están los dos conteos y se sabe cuál pesó más.',
        'Todos los elementos de la carpeta quedaron revisados.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Dato, hallazgo, decisión',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres piezas con una frase propia cada una.',
        'Tomen un elemento útil y escríbanlo con las tres piezas completas.',
        'Comprueben que la decisión nombre quién decide y en qué plazo.',
        'Busquen un hallazgo que proponga dos decisiones y sepárenlo en dos.'
      ],
      cuaderno: {
        titulo: 'Dato, hallazgo, decisión',
        formato: 'las tres piezas con frase propia, un elemento completo y el hallazgo doble separado en dos',
        extension: 'media página'
      },
      criterios: [
        'La decisión escrita nombra a alguien y un plazo.',
        'El hallazgo doble quedó separado en dos.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu reporte de tres hallazgos',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe arriba tu pregunta de investigación del periodo.',
        'Elige los tres elementos que más cambiarían una decisión.',
        'Escribe cada uno con sus tres piezas, dato, hallazgo y decisión.',
        'Ordénalos por importancia, no por el orden en que los encontraste.',
        'Dáselo a leer a alguien que no estuvo en el periodo y anota si entendió las tres decisiones.'
      ],
      cuaderno: {
        titulo: 'Tu reporte de tres hallazgos',
        formato: 'la pregunta, los tres hallazgos con sus tres piezas y la nota de qué entendió el lector ajeno',
        extension: 'una página'
      },
      criterios: [
        'Cada decisión nombra quién decide y en qué plazo.',
        'Un lector ajeno dijo las tres decisiones con sus palabras.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §3.3.9.4',
      lente: 'lente del nosotros',
      cita: 'El êthos de la liberación pedagógica exige al maestro saber oír en el silencio con respecto a la juventud, al pueblo.',
      preguntaEspejo: '¿Qué dato de los míos ignoré porque no encajaba con lo que esperaba encontrar?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 20 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Acuérdate que no te ofende el que te injuria, ni el que te golpea, sino la opinión que has concebido.',
      preguntaEspejo: '¿Qué estoy llamando «así son las cosas» cuando en realidad alguien lo decidió?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 3.2',
      lente: 'lente de la infoesfera',
      cita: 'En el mundo onlife, los artefactos han dejado de ser meras máquinas que simplemente operan según instrucciones humanas: pueden cambiar de estado de manera autónoma. (trad. propia)',
      preguntaEspejo: '¿Qué decisión sobre mí tomó esta semana un sistema, a partir de qué dato?'
    }
  },
  cincoDimensiones: {
    personal: 'Descubriste cuánto de lo que produjiste era decoración, que es un dato incómodo y muy útil.',
    emocional: 'Nombrar a quien debe decidir da algo de pudor. También es lo único que convierte un dato en un cambio.',
    ciudadana: 'Llamar destino a lo que alguien decidió es la forma más cómoda de no pedirle cuentas a nadie.',
    local: 'En el Valle y el Quindío, 557.311 familias productoras viven de decisiones que se toman con datos como estos.',
    intergeneracional: 'La crisis de la roya se estudió después y por eso hoy se sabe qué la disparó. Documentar sirve para eso.'
  }
};

export default contenido;
