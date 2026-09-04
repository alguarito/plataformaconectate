/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 1
 * (sesión global 11).
 *
 * Auto-generado desde content/guias/8/8-2-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 1,
  titulo: 'Decidir con varias condiciones — si-sino con Y, O y NO',
  resumen: 'Casi ninguna decisión depende de una sola condición. Hoy aprendes a escribirlas con Y, O y NO en pseudocódigo, y a comprobar que cubren todos los casos, como los «no» que el pueblo misak escribió con fecha y testigos.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Toda app, todo semáforo y toda alarma funcionan con reglas de varias condiciones. Saber escribirlas sin huecos es el primer paso para programar algo que no falle cuando más se necesita.',
    preguntaDetonante: 'Cuando escribas «SI llueve Y NO tengo capucha», ¿qué pasa si llueve y sí tienes capucha?',
    activacion: {
      titulo: 'El paraguas',
      descripcion: 'En 3 minutos, escribe la regla completa de cuándo sacas paraguas, con todas sus condiciones. ¿Cuántas usaste? ¿Alguna es un NO?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En el periodo 1 cerraste con la sustentación de tu mini estudio.',
      siguiente: 'En la sesión 2 verificas tus reglas con tablas de verdad.'
    }
  },
  conceptosClave: [
    {
      termino: 'Y (AND)',
      definicion: 'La regla se cumple solo si las dos condiciones son verdaderas. Si una falla, falla la regla.',
      ejemplo: 'SI llueve Y hace frío ENTONCES abrigo. Con lluvia sin frío, no.',
      categoria: 'Los operadores'
    },
    {
      termino: 'O (OR)',
      definicion: 'La regla se cumple si al menos una condición es verdadera. Las dos también vale.',
      ejemplo: 'SI hay humo O temperatura alta ENTONCES alarma. Basta una.',
      categoria: 'Los operadores'
    },
    {
      termino: 'NO (NOT)',
      definicion: 'Le da la vuelta a una condición. Se cumple cuando la condición es falsa.',
      ejemplo: 'SI NO está lloviendo ENTONCES regar. Es el operador que más se olvida.',
      categoria: 'Los operadores'
    },
    {
      termino: 'Si-sino',
      definicion: 'SI condición ENTONCES una acción SINO otra. Cuando hay más caminos, un si-sino va dentro de otro con sangría.',
      ejemplo: 'SI llueve ENTONCES SI hay viento ENTONCES quedarse SINO paraguas SINO salir.',
      categoria: 'La estructura'
    },
    {
      termino: 'Tabla de decisión',
      definicion: 'Una columna por condición, una fila por combinación posible y la acción al final. Con tres condiciones, ocho filas.',
      ejemplo: 'El semáforo del cruce escolar tiene ocho combinaciones y cada una necesita una acción.',
      categoria: 'La estructura'
    },
    {
      termino: 'Hueco',
      definicion: 'Una combinación de condiciones para la que la regla no dice qué hacer. Falla el día que aparece.',
      ejemplo: '«SI llueve Y NO capucha ENTONCES paraguas» no dice qué pasa si llueve y sí tienes capucha.',
      categoria: 'La estructura'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes decidir con Y, O y NO?',
      instrucciones: 'Cinco preguntas para verificar que distingues los operadores y detectas huecos. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'El huerto se debe regar si la humedad es baja y no está lloviendo. ¿Cuál regla es correcta?',
          opciones: [
            'SI humedad baja O NO llueve ENTONCES regar.',
            'SI humedad baja Y NO llueve ENTONCES regar.',
            'SI humedad baja Y llueve ENTONCES regar.',
            'SI NO humedad baja Y NO llueve ENTONCES regar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Las dos condiciones deben cumplirse, y la lluvia va con NO. Sin el NO, riegas bajo la lluvia.',
          feedbackIncorrecto: 'Con O regarías con humedad alta si no llueve; sin NO regarías bajo la lluvia. La regla es humedad baja Y NO llueve.'
        },
        {
          enunciado: 'La alarma debe sonar con humo, con temperatura alta o con el botón de pánico. ¿Qué operador une las tres condiciones?',
          opciones: [
            'Y, porque las tres son señales de peligro.',
            'NO, porque la alarma debe estar apagada normalmente.',
            'O, porque basta una de las tres para que suene.',
            'Ninguno, porque son tres reglas separadas.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Con O, basta una. Con Y, la alarma esperaría a que pasen las tres cosas.',
          feedbackIncorrecto: 'Con Y la alarma sonaría solo si hay humo, calor y alguien oprime el botón a la vez. Basta una, eso es O.'
        },
        {
          enunciado: 'Una regla con dos condiciones tiene cuatro combinaciones. Con tres condiciones, ¿cuántas?',
          opciones: [
            'Seis, porque son tres pares.',
            'Nueve, porque tres por tres.',
            'Tres, una por condición.',
            'Ocho, porque cada condición duplica las combinaciones.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Dos, cuatro, ocho. Cada condición nueva duplica las filas de la tabla.',
          feedbackIncorrecto: 'Cada condición puede ser verdadera o falsa, y las combinaciones se multiplican por dos. Con tres condiciones son ocho.'
        },
        {
          enunciado: '«SI llueve Y NO tengo capucha ENTONCES paraguas». ¿Cuál combinación queda sin respuesta?',
          opciones: [
            'Llueve y sí tengo capucha.',
            'No llueve y no tengo capucha.',
            'Llueve y no tengo capucha.',
            'Ninguna, la regla cubre todo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. La regla solo dice qué hacer cuando llueve sin capucha. Con capucha, no dice nada, y también en las otras dos combinaciones. Le falta el SINO.',
          feedbackIncorrecto: 'La regla solo responde en un caso, llueve sin capucha. Llueve con capucha es una combinación sin respuesta, como las otras. Necesita un SINO.'
        },
        {
          enunciado: '¿Cuál de estas es una condición que se contradice y nunca se cumple?',
          opciones: [
            'Edad mayor que 10 O edad menor que 5.',
            'Edad mayor que 10 Y edad menor que 5.',
            'NO edad mayor que 10.',
            'Edad mayor que 10 Y edad menor que 15.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Nadie tiene más de 10 y menos de 5 a la vez. Con O sí se cumple; con Y, nunca.',
          feedbackIncorrecto: 'Mayor que 10 Y menor que 5 no se cumple para ninguna edad. Las otras sí tienen casos verdaderos.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué hueco te encontró tu pareja, y por qué no lo viste tú?',
    transferencia: 'La próxima vez que una app te niegue algo, piensa qué condiciones combinó y si alguna era un NO.',
    cierre: 'Una regla es un «no» y un «sí» escritos con sus condiciones. Sin huecos, se puede sostener con años encima.'
  },
  saberAncestral: {
    saber: 'En el resguardo de Guambía, en Silvia (Cauca), el pueblo misak escribió sus «no». En 2005, en Piendamó, el Mandato de Vida y Permanencia. En 2007, el 12 de agosto, la Misak Ley (Pueblo Misak, 2007). Son decisiones sobre lo que el pueblo acepta y lo que no en su territorio. No las tomó una persona: las tomaron las autoridades del Nu Nakchak, con los shures y las shuras, delante de todos, y las escribieron con fecha. Un «no» así no es una rabieta. Es una regla: dice bajo qué condiciones algo se acepta y bajo cuáles no, y se sostiene con años encima. Eso es lógica de decisión. Un programa hace lo mismo cuando escribe SI llueve Y NO hay capucha ENTONCES paraguas: fija condiciones y una respuesta. La cara de exclusión: ese «no» colectivo se sostiene frente a normas externas, a costa de conflicto con el Estado y con terratenientes; es una disputa territorial viva, no una figura de discurso. Hoy vas a escribir tus propias reglas con Y, O y NO, y a comprobar que cubren todos los casos.',
    fuente: 'Pueblo misak · los «no» escritos y fechados',
    referencia: 'Pueblo Misak. (2007, 12 de agosto). Misak Ley. I Encuentro por la defensa de nuestro Derecho Mayor.',
    preguntaPuente: 'El pueblo misak escribió sus «no» con fecha y testigos, y los sostiene con años encima. Cuando escribas «SI llueve Y NO tengo capucha», ¿qué pasa si llueve y sí tienes capucha? ¿Tu regla lo dice, o lo dejaste sin respuesta?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Los «no» escritos del pueblo misak',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Cinco decisiones de tu día',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · La tabla y el semáforo',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Riego, alarma y el hueco',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Cinco decisiones de tu día',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Escribe cinco decisiones que tomas en un día normal, qué ropa, qué ruta, si sacar paraguas, qué comer, qué ver por la noche.',
        'Para cada una, anota las dos o tres condiciones que miras antes de decidir.',
        'Escribe cómo las combinas, todas (Y), basta una (O), alguna al revés (NO).',
        'Elige la decisión que más operadores use y escríbela como SI… ENTONCES… SINO….'
      ],
      cuaderno: {
        titulo: 'Cinco decisiones de tu día',
        formato: 'tabla de 5 filas y 3 columnas (decisión / condiciones / operador)',
        extension: 'media página'
      },
      criterios: [
        'Las cinco filas están llenas.',
        'Una decisión está escrita como si-sino con al menos un operador.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'La tabla de decisión y el semáforo',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, tomen el semáforo del cruce escolar, hora pico, estudiantes cruzando, vehículo de emergencia.',
        'Hagan la tabla de decisión, una columna por condición, una fila por combinación, la acción al final.',
        'Escriban el algoritmo en pseudocódigo con SI, ENTONCES, SINO y al menos un Y, un O y un NO.',
        'Prueben las combinaciones extremas, todo verdadero y todo falso.',
        'Si una combinación no tiene respuesta, agreguen la rama que falta.'
      ],
      cuaderno: {
        titulo: 'La tabla y el semáforo',
        formato: 'la tabla de decisión del semáforo (tres condiciones, ocho filas, columna de acción) y el algoritmo con sangría',
        extension: 'una página'
      },
      criterios: [
        'Las ocho filas tienen acción.',
        'El algoritmo usa al menos un Y, un O y un NO.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Dos algoritmos más y el hueco de tu pareja',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Escribe el algoritmo del riego, humedad baja, NO está lloviendo, horario permitido.',
        'Escribe el de la alarma, humo O temperatura alta O botón de pánico.',
        'Prueba cada uno con todo verdadero, todo falso y una sola verdadera.',
        'Intercambia con tu pareja y busca en sus algoritmos una combinación sin respuesta. Anótala con su fila.',
        'Escribe la bitácora de cinco líneas, cuándo elegiste Y, O y NO, y qué hueco te encontraron.'
      ],
      cuaderno: {
        titulo: 'Riego, alarma y el hueco',
        formato: 'los dos algoritmos con sangría, la fila del hueco ajeno y la bitácora de cinco líneas',
        extension: 'una página'
      },
      criterios: [
        'Los dos algoritmos responden en todo verdadero y en todo falso.',
        'Anotaste un hueco ajeno con su fila exacta.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.2',
      lente: 'lente del nosotros',
      cita: 'La conciencia ética es la capacidad de escuchar la voz del otro, incluso cuando cuestiona el sistema en que vivimos.',
      preguntaEspejo: '¿Cuál de mis reglas de hoy dejaría revisar a alguien que no esté de acuerdo conmigo?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 1 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Hay cosas que dependen de nosotros y cosas que no. Saber cuáles son cuáles es el primer trabajo.',
      preguntaEspejo: 'En mis tres algoritmos, ¿cuáles condiciones no dependen de mí y cuáles sí?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Lo único que de verdad es finito, precioso, no renovable y no compartible es el tiempo.',
      preguntaEspejo: '¿Qué combinación de mi regla no probé porque me pareció que nunca iba a pasar?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Descubriste que ya decidías con Y, O y NO sin nombrarlos. Nombrarlos es lo que te deja revisar tus reglas.',
    emocional: 'Que tu pareja te encuentre un hueco no es derrota. Es una combinación menos que va a fallar a las tres de la mañana.',
    ciudadana: 'Una norma escrita con sus condiciones se puede discutir; una que vive en la cabeza de alguien, no. Pedir la regla escrita es un derecho.',
    local: 'El pueblo misak escribió sus «no» con fecha y testigos. Tus reglas de hoy también tienen fecha y una pareja que las revisó.',
    intergeneracional: 'Una regla sin huecos la puede usar quien venga después sin preguntarte. Así se hereda un algoritmo.'
  }
};

export default contenido;
