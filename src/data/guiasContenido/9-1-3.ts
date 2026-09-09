/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/9/9-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 3,
  titulo: 'La balanza y el peso — medir como acto político',
  resumen: 'En Saucío convivían dos medidas del valor: la escala agrícola, que ordenaba a los vecinos, y el convite, donde uno valía por lo que ponía cuando a otro le hacía falta. Hoy construyes una balanza que se equilibre y escribes sobre un sistema de medición que te rige, nombrando a quien definió el patrón.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Medir y poder',
  preLectura: {
    porQueImporta: 'Quien define el patrón define el reparto. Por eso la pregunta útil no es si el número es exacto, sino quién eligió medir eso y no otra cosa.',
    preguntaDetonante: '¿Qué medición decide algo sobre ti esta semana, y sabrías decir quién fijó ese patrón?',
    activacion: {
      titulo: 'Quién fijó la medida',
      descripcion: 'En 2 minutos, escribe una cifra que te describa esta semana. Al lado, escribe quién decidió que esa cifra importara.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 2 estudiaste máquinas simples del campo colombiano.',
      siguiente: 'En la sesión 4 armas la línea del tiempo de la técnica, del fuego a la imprenta.'
    }
  },
  conceptosClave: [
    {
      termino: 'Punto de apoyo',
      definicion: 'El eje sobre el que gira la balanza. Si no está centrado, todas las comparaciones salen inclinadas.',
      ejemplo: 'El hilo del que cuelga la regla. Moverlo un centímetro cambia todos los resultados.',
      categoria: 'La balanza'
    },
    {
      termino: 'Patrón conocido',
      definicion: 'La pesa o la unidad que ambas partes aceptan. Es lo que convierte una comparación en una medida.',
      ejemplo: 'Sin una pesa aceptada, la balanza solo dice cuál pesa más, no cuánto pesa.',
      categoria: 'La balanza'
    },
    {
      termino: 'Calibrar',
      definicion: 'Ajustar el instrumento para que marque cero cuando no hay nada que medir. Sin eso, todo lo que siga está desviado.',
      ejemplo: 'Una balanza que ya está inclinada en vacío miente en cada comparación, aunque el resto esté bien hecho.',
      categoria: 'Medir y decidir'
    },
    {
      termino: 'Medir no es juzgar',
      definicion: 'La medición dice cuánto. El juicio dice si está bien. Son dos pasos, y confundirlos suele convenirle a alguien.',
      ejemplo: '«Durmió cinco horas» es una medida. «Durmió mal» es un juicio que alguien añadió.',
      categoria: 'Medir y decidir'
    },
    {
      termino: 'Escala de estatus',
      definicion: 'Un ranking informal donde la posición se lee en señales, no en cifras. Fals Borda lo encontró en Saucío entre 1949 y 1953.',
      ejemplo: 'Hasta los muebles y los zapatos servían de indicador de posición en la vereda.',
      categoria: 'Medir y decidir'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes leer un sistema de medición?',
      instrucciones: 'Cinco preguntas sobre la balanza, el patrón y la diferencia entre medir y juzgar. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Qué parte de la balanza convierte una comparación en una medida?',
          opciones: [
            'El patrón conocido que ambas partes aceptan.',
            'El punto de apoyo, si está bien centrado.',
            'Los dos brazos, siempre que midan lo mismo.',
            'El material del que está hecho el instrumento.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sin patrón aceptado solo sabes cuál pesa más, no cuánto pesa.',
          feedbackIncorrecto: 'El patrón conocido. Los brazos y el apoyo hacen falta, pero no dicen cuánto.'
        },
        {
          enunciado: '¿Por qué hay que equilibrar la balanza en vacío antes de usarla?',
          opciones: [
            'Para que el instrumento dure más tiempo en buen estado.',
            'Porque si ya está inclinada, todas las comparaciones salen desviadas.',
            'Porque así se calienta el mecanismo y responde mejor.',
            'Para comprobar que los dos vasos pesan exactamente lo mismo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Eso es calibrar, y es el paso que casi todos se saltan.',
          feedbackIncorrecto: 'Porque una balanza inclinada en vacío miente en cada comparación posterior.'
        },
        {
          enunciado: '«Durmió cinco horas» y «durmió mal». ¿Qué diferencia hay?',
          opciones: [
            'Ninguna, porque cinco horas es objetivamente poco para cualquiera.',
            'La segunda es más precisa porque incluye una valoración del caso.',
            'La primera es una medida y la segunda es un juicio añadido.',
            'La primera necesita un instrumento y la segunda no lo necesita.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Medir y juzgar son dos pasos, y confundirlos suele convenirle a alguien.',
          feedbackIncorrecto: 'La primera mide y la segunda juzga. Son pasos distintos aunque se digan seguidos.'
        },
        {
          enunciado: 'Si te preguntan quién definió un patrón de medida y respondes «la sociedad», ¿qué pasa?',
          opciones: [
            'Es correcto, porque las medidas se acuerdan colectivamente.',
            'Es correcto solo cuando se trata de medidas muy antiguas.',
            'Es una respuesta parcial que conviene completar con un ejemplo.',
            ''
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Los patrones los definen un ministerio, una empresa, un colegio o una aplicación.',
          feedbackIncorrecto: 'No es una respuesta. Detrás de cada patrón hay una institución con nombre.'
        },
        {
          enunciado: '¿Qué encontró Fals Borda en la vereda de Saucío?',
          opciones: [
            'Que la escala agrícola ordenaba a los vecinos y hasta los zapatos servían de indicador.',
            'Que allí funcionaban cooperativas para discutir los problemas comunes.',
            'Que las medidas de peso se fijaban en la plaza cada semana.',
            'Que la vereda había abandonado por completo cualquier jerarquía interna.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Y anotó también que el prestigio se medía por la capacidad de corresponder invitaciones.',
          feedbackIncorrecto: 'Encontró la escala agrícola. Registró además que en Saucío no había cooperativas ni reuniones comunes.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De las cinco mediciones de tu lista, ¿cuál cambiarías por otra que te describiera mejor, y quién tendría que aceptarla?',
    transferencia: 'Busca en internet quién define oficialmente el kilogramo hoy. La respuesta cambió en 2019 y explica bien qué es un patrón.',
    cierre: 'Quien define el patrón define el reparto. Por eso medir nunca fue solo un asunto técnico.'
  },
  saberAncestral: {
    saber: 'Entre 1949 y 1953, el sociólogo Orlando Fals Borda vivió en la vereda de Saucío, en Chocontá, Cundinamarca. Conviene decirlo desde el principio: es Cundinamarca, no el Valle. Allí encontró que la gente se medía de dos maneras a la vez. Una era lo que él llamó la escala agrícola: una escalera invisible con los propietarios arriba y los concertados sin tierra abajo. Hasta los muebles y los zapatos servían de indicador de posición. Fals Borda anotó algo incómodo: el campesino ahorraba sobre todo para sostener su prestigio, y ese prestigio se medía por su capacidad de corresponder invitaciones. La otra manera de medir era el convite y el brazo prestado. Ahí uno valía por lo que ponía cuando a otro le hacía falta. La cara de exclusión: no hay que idealizar la vereda. Fals Borda registró que en Saucío no había cooperativas ni reuniones para discutir problemas comunes. Vio desaparecer la segunda medida y vio la vereda recuperarse cuando volvieron a hacer algo juntos: construir la escuela.',
    fuente: 'Vereda de Saucío, Chocontá · las dos medidas del valor que encontró Fals Borda',
    referencia: 'Fals Borda, O. (2017). Campesinos de los Andes y otros escritos antológicos. Universidad Nacional de Colombia. (Obra original publicada en 1955)',
    preguntaPuente: 'En Saucío convivían dos medidas del valor y cada una repartía prestigio de un modo distinto. ¿Qué dos medidas conviven en tu curso, y cuál pesa más a la hora de decidir quién cuenta?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las dos medidas de Saucío',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Patrones de medida en tu vida',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las tres partes y el patrón compartido',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Balanza casera y reflexión',
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
      titulo: 'Patrones de medida en tu vida',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota cinco mediciones que regulan tu vida ahora mismo.',
        'Escribe para cada una con qué unidad se mide.',
        'Escribe quién definió ese patrón, con nombre o con institución.',
        'Escribe qué te pasa a ti según el resultado.',
        'Marca la que más te afecta y la que menos entiendes.'
      ],
      cuaderno: {
        titulo: 'Patrones de medida en mi vida',
        formato: 'tabla de 5 filas y 4 columnas (qué se mide / unidad / quién definió el patrón / qué me pasa)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Ninguna casilla de «quién» dice «la sociedad» o «ellos».',
        'Cada fila tiene unidad y consecuencia práctica.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las tres partes y el patrón compartido',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, dibujen una balanza y rotulen sus tres partes.',
        'Escriban con sus palabras qué pasaría si faltara cada una.',
        'Tomen dos mediciones de sus listas y decidan cuál tiene patrón compartido y cuál no.',
        'Escriban en dos líneas qué se puede discutir cuando el patrón es compartido.'
      ],
      cuaderno: {
        titulo: 'Las tres partes y el patrón compartido',
        formato: 'el dibujo de la balanza con sus tres partes rotuladas y las dos mediciones comparadas',
        extension: 'media página'
      },
      criterios: [
        'Las tres partes están rotuladas y explicadas.',
        'Queda claro cuál de las dos mediciones no tiene patrón compartido.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Balanza casera y reflexión',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Construye una balanza con una regla o un palo, un hilo y dos vasos o tapas iguales.',
        'Ajústala hasta que se equilibre en vacío antes de comparar nada.',
        'Compara dos objetos y anota cuál pesa más.',
        'Dibuja o fotografía la balanza y rotula sus tres partes.',
        'Escribe una página sobre una medición de tu lista y a quién le conviene.',
        'Intercambia la reflexión con un compañero y señálale si nombró a alguien concreto.'
      ],
      cuaderno: {
        titulo: 'Balanza casera y reflexión',
        formato: 'el dibujo con las partes rotuladas, la comparación de los dos objetos y la página de reflexión',
        extension: 'media página más la página de reflexión'
      },
      criterios: [
        'La balanza se equilibra en vacío antes de comparar.',
        'La reflexión nombra a alguien concreto que definió el patrón.',
        'Revisaste la reflexión de un compañero y le dijiste si nombró a alguien.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.2.2',
      lente: 'lente del nosotros',
      cita: 'El rostro del hombre se revela como otro cuando se recorta en nuestro sistema de instrumentos como exterior, como alguien, como una libertad que interpela, que provoca, que aparece como el que resiste a la totalización instrumental. No es algo; es alguien.',
      preguntaEspejo: '¿Qué medición de mi vida me convierte en un número para alguien que no me conoce?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 45 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Cuando ves alguno en el baño que se lava pronto, no digas que se lava mal, sino que se lava muy pronto… En efecto, ¿de dónde aprendiste que hizo mal para formar tal juicio?',
      preguntaEspejo: '¿Cuándo pasé de decir «esto midió tanto» a decir «esto está mal» sin darme cuenta?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Parafraseando un dicho de la publicidad: la mitad de nuestros datos es basura, solo que no sabemos cuál mitad. Lo que necesitamos es entender mejor qué datos vale la pena conservar. (trad. propia)',
      preguntaEspejo: 'De todo lo que se mide sobre mí, ¿qué falta que sí explicaría cómo me va?'
    }
  },
  cincoDimensiones: {
    personal: 'Averiguaste quién fija una de las medidas que te describen, y eso ya cambia cómo la lees.',
    emocional: 'Un número sobre uno duele menos cuando se sabe quién lo eligió y para qué.',
    ciudadana: 'Aceptar una unidad sin preguntar quién la fijó es aceptar el reparto que viene con ella.',
    local: 'En Saucío una medida ordenaba vecinos y la otra los juntaba. Las dos siguen existiendo en cualquier curso.',
    intergeneracional: 'Las pesas de una plaza se heredaban y se revisaban en público. Los patrones de una aplicación no se revisan nunca.'
  }
};

export default contenido;
