/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/8/8-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 5,
  titulo: 'Audio — grabar, limpiar y exportar',
  resumen: 'Una pieza de audio se captura, se limpia y se exporta en el formato que va a cada destino. Hoy grabas, aplicas tres operaciones y exportas MP3 y WAV, como Radio Pa\'yumat, que graba en nasa yuwe, limpia la voz y la manda por una antena que puede caerse.',
  duracionMin: 90,
  subtema: 'Multimedia y ciberética',
  preLectura: {
    porQueImporta: 'Los audios de WhatsApp, los pódcast y las notas de voz son audio grabado y, a veces, editado. Saber limpiar uno y elegir el formato es saber que te escuchen.',
    preguntaDetonante: 'Si grabas a tu abuela con el ventilador prendido, ¿qué parte de su voz se pierde y cuál de las tres operaciones lo arregla?',
    activacion: {
      titulo: 'El audio que no se entendió',
      descripcion: 'En 3 minutos, recuerda un audio de WhatsApp que tuviste que oír dos veces. ¿Era el ruido, el volumen o que hablaban muy rápido? ¿Qué le habrías hecho antes de mandarlo?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 4 editaste una imagen con permiso y cinco preguntas éticas.',
      siguiente: 'En la sesión 6 tratas el ciberacoso y cómo se denuncia.'
    }
  },
  conceptosClave: [
    {
      termino: 'Captura',
      definicion: 'Grabar en un lugar silencioso, con el micrófono a unos quince centímetros y una prueba de volumen antes.',
      ejemplo: 'Puerta cerrada, ventilador apagado, celular a un palmo de la boca.',
      categoria: 'Las fases'
    },
    {
      termino: 'Recorte y fundido',
      definicion: 'Quitar el silencio y lo que sobra, y suavizar el inicio y el final con un fundido de un segundo.',
      ejemplo: 'Se eliminan los tres segundos de silencio del inicio y se pone fundido de entrada.',
      categoria: 'Las fases'
    },
    {
      termino: 'Amplificar',
      definicion: 'Subir o bajar el volumen de la selección hasta que la onda llene la pista sin tocar el borde.',
      ejemplo: 'La parte de la abuela quedó baja; se selecciona sola y se amplifica.',
      categoria: 'Las fases'
    },
    {
      termino: 'Reducción de ruido',
      definicion: 'Tomar el perfil de un pedazo con solo ruido y restarlo de toda la pista. Poco no limpia; mucho deja la voz metálica.',
      ejemplo: 'Dos segundos de ventilador como perfil, y el ventilador desaparece de la voz.',
      categoria: 'Las fases'
    },
    {
      termino: 'MP3',
      definicion: 'Formato comprimido, liviano. Para enviar por WhatsApp, subir a la red o poner en una presentación.',
      ejemplo: 'Un minuto de voz pesa alrededor de un megabyte.',
      categoria: 'Los formatos'
    },
    {
      termino: 'WAV',
      definicion: 'Formato sin comprimir, pesado, con toda la calidad. Para guardar el original o seguir editando.',
      ejemplo: 'El mismo minuto pesa alrededor de diez megabytes.',
      categoria: 'Los formatos'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes grabar, limpiar y exportar?',
      instrucciones: 'Cinco preguntas para verificar que dominas captura, las tres operaciones y los dos formatos. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Grabaste a tu abuela y se oye el ventilador todo el tiempo. ¿Qué operación lo arregla?',
          opciones: [
            'Amplificar toda la pista, para que la voz tape al ventilador.',
            'Recortar las partes donde el ventilador suena más.',
            'Tomar el perfil de ruido y aplicar la reducción.',
            'Exportar en WAV, que tiene mejor calidad.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Se toma el perfil en un pedazo de solo ventilador y se resta de toda la pista.',
          feedbackIncorrecto: 'Amplificar sube también el ventilador, recortar quitaría la voz y el formato no limpia nada. Es la reducción de ruido.'
        },
        {
          enunciado: 'Al amplificar, la onda toca el borde de la pista. ¿Qué pasa?',
          opciones: [
            'Nada, porque así se oye más fuerte y mucho mejor.',
            'Se distorsiona y toca bajar.',
            'Audacity la corrige sola al exportar.',
            'Se convierte en WAV automáticamente.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La onda debe llenar la pista sin tocar el borde. Si lo toca, se distorsiona.',
          feedbackIncorrecto: 'No se corrige sola ni cambia de formato. Tocar el borde distorsiona; se baja un poco la amplificación.'
        },
        {
          enunciado: 'Tienes que mandar tu pieza por WhatsApp. ¿En qué formato?',
          opciones: [
            'En WAV, porque tiene toda la calidad y se oye mejor.',
            'En los dos formatos, para que la persona que lo recibe elija.',
            'En MP3, porque es liviano.',
            'En el formato del proyecto de Audacity.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. El MP3 es la copia liviana para enviar. El WAV se guarda.',
          feedbackIncorrecto: 'El WAV pesa diez veces más y el proyecto de Audacity no se abre en el celular. Para enviar, MP3.'
        },
        {
          enunciado: 'Tu pareja oye tu MP3 y dice «ahí se oye un golpe al empezar». ¿Qué faltó?',
          opciones: [
            'Grabar en un lugar más silencioso y con la puerta cerrada.',
            'Un fundido de entrada o un recorte en un silencio.',
            'Exportar con más calidad.',
            'Subir el volumen de toda la pieza.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. El corte brusco se arregla con un fundido de un segundo o recortando en un silencio, no a mitad de palabra.',
          feedbackIncorrecto: 'No es el lugar, la calidad ni el volumen. Un golpe al empezar es un corte sin fundido o a mitad de palabra.'
        },
        {
          enunciado: '¿Para qué se guarda el WAV si el MP3 es el que se envía?',
          opciones: [
            'Para tener el original con toda la calidad.',
            'Para que el archivo pese más y se vea más profesional al entregarlo.',
            'Porque WhatsApp exige un WAV de respaldo.',
            'Para que la reducción de ruido funcione mejor.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El WAV es el original. Del MP3 comprimido no se recupera lo que se perdió.',
          feedbackIncorrecto: 'WhatsApp no exige nada y el peso no es profesional. El WAV se guarda porque es el original con toda la calidad.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué problema de tu grabación de treinta segundos se arregló editando, y cuál tuviste que grabar de nuevo?',
    transferencia: 'La próxima vez que mandes un audio importante, grábalo con la puerta cerrada, escúchalo antes y córtale el silencio del inicio. Son veinte segundos que le ahorran a quien lo oye.',
    cierre: 'Grabar en silencio, limpiar sin disfrazar, exportar en el formato que va. Así llega una voz a donde tiene que llegar.'
  },
  saberAncestral: {
    saber: 'En la sesión 3 conociste el saludo de Radio Pa\'yumat. Hoy mira cómo llega esa voz a los resguardos. La emisora transmite en el 101.0 de la FM desde el cerro Munchique, en Santander de Quilichao, nueve horas al día. La sostienen cinco comunicadores indígenas coordinados por Abel Coicué (Aley, 2012). Los programas se graban y se emiten en nasa yuwe y en castellano: información, campañas, avisos de mingas, días de mercado, música. Antes de Pa\'yumat hubo emisoras nasa en Toribío, en 1996, y en Jambaló, en 1997; Pa\'yumat nació en 2000 como emisora de toda la zona. Lo que suena en el radio pasó por lo mismo que harás hoy: alguien grabó una voz, la limpió y la mandó por una antena. La cara de exclusión: en 2012 hubo atentados contra las antenas y torres; la señal perdió alcance y los equipos tuvieron que bajarse del cerro. Ningún editor de audio arregla una antena caída. Y la emisora depende del tiempo libre de niños, jóvenes y adultos que la sostienen. Hoy vas a grabar una voz, limpiarla y exportarla en dos formatos. En el norte del Cauca esa cadena se sostiene bajo amenaza.',
    fuente: 'Pueblo nasa del norte del Cauca · Radio Pa\'yumat desde el cerro Munchique',
    referencia: 'Aley, P. (2012, 22 de septiembre). Conozca la emisora de la resistencia indígena. El Tiempo. · Tejido de Comunicación ACIN. (s.\\,f.). Radio Pa\'yumat. Consultado el 7 de septiembre de 2026.',
    preguntaPuente: 'Pa\'yumat graba en nasa yuwe, limpia la voz y la manda por una antena que puede caerse. Si grabas a tu abuela con el ventilador prendido, ¿qué parte de su voz se pierde y cuál de las tres operaciones lo arregla?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Pa\'yumat desde el cerro Munchique',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Treinta segundos de tu voz',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Las tres operaciones',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Tu pieza en dos formatos',
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
      titulo: 'Treinta segundos de tu voz',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Graba treinta segundos con la grabadora del celular hablando de cualquier cosa y escúchate de inmediato con audífonos.',
        'Anota qué sonó bien, claridad, energía, ritmo.',
        'Anota qué sonó mal, ruido de fondo, volumen bajo, silencio largo, palabra comida.',
        'Para cada cosa que sonó mal, escribe si se arregla grabando de nuevo o editando.'
      ],
      cuaderno: {
        titulo: 'Treinta segundos de tu voz',
        formato: 'dos columnas, «sonó bien» y «sonó mal», y junto a cada problema la palabra «grabar» o «editar»',
        extension: 'media página'
      },
      criterios: [
        'Hay al menos una cosa que sonó bien y una que sonó mal.',
        'Cada problema tiene «grabar» o «editar».'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'Las tres operaciones',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, abran en Audacity o en la app la grabación de uno de los dos y recorten el silencio del inicio y del final.',
        'Seleccionen todo y apliquen «Amplificar» hasta que la onda llene la pista sin tocar el borde.',
        'Tomen el perfil de ruido en dos segundos de solo fondo y apliquen «Reducción de ruido» a todo.',
        'Exporten como MP3 y como WAV y comparen el peso de los dos archivos.'
      ],
      cuaderno: {
        titulo: 'Las tres operaciones',
        formato: 'las tres operaciones con una línea sobre qué cambió en cada una, y el peso del MP3 y del WAV',
        extension: 'media página'
      },
      criterios: [
        'La grabación limpia se oye pareja.',
        'Anotaste cuántas veces pesa más el WAV que el MP3.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Tu pieza en dos formatos',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Decide qué grabar, entrevista, narración o pódcast breve, pide permiso si graba a alguien y graba de uno a dos minutos en lugar silencioso.',
        'Aplica las tres operaciones y los fundidos.',
        'Exporta en MP3 y en WAV y anota el peso de cada uno.',
        'Escribe la ficha de cinco líneas y pásale el MP3 a tu pareja para que diga si notó algún corte o salto de volumen.'
      ],
      cuaderno: {
        titulo: 'Tu pieza en dos formatos',
        formato: 'los enlaces del MP3 y del WAV con su peso, la ficha de cinco líneas, la nota del permiso y lo que dijo tu pareja',
        extension: 'media página'
      },
      criterios: [
        'Tienes los dos archivos y la ficha llena.',
        'Tu pareja no notó ningún corte.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.3',
      lente: 'lente del nosotros',
      cita: 'El respeto es el silencio de quien todo tiene que escuchar, porque todavía no sabe nada del otro.',
      preguntaEspejo: '¿Qué le recorté a la voz de alguien porque yo lo habría dicho distinto?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 33 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Guarda silencio cuanto puedas; di solo lo necesario y con las menos palabras posibles.',
      preguntaEspejo: '¿Cuántos segundos de mi pieza sobraban y me costó cortar?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 3.1',
      lente: 'lente de la infoesfera',
      cita: 'Las tecnologías se usan primero para ahorrar tiempo y después para matarlo.',
      preguntaEspejo: '¿Qué audio mandé esta semana que le hizo perder tiempo a quien lo recibió?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Escuchaste tu propia voz y la limpiaste sin cambiarla. Esa es la diferencia entre editar y disfrazar.',
    emocional: 'Oírse grabado incomoda a todos. Saber que el ruido y el volumen se arreglan con tres operaciones baja esa incomodidad.',
    ciudadana: 'La voz de alguien es suya, como su imagen. Grabar con permiso y decir dónde va a sonar es respetarla.',
    local: 'Radio Pa\'yumat graba en nasa yuwe, limpia la voz y la manda por una antena que ha sido atacada. Tu cadena de captura, edición y exportación es la misma, sin la amenaza.',
    intergeneracional: 'Una entrevista de un minuto a tu abuela, en WAV, es un archivo que en veinte años va a valer más que cualquier foto.'
  }
};

export default contenido;
