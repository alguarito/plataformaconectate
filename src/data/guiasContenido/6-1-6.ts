/**
 * Contenido enriquecido para Grado 6 · Período 1 · Sesión 6
 * (sesión global 6).
 *
 * Auto-generado desde content/guias/6/6-1-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 1,
  sesion: 6,
  titulo: 'Mi huella digital — el rastro que dejas sin darte cuenta',
  resumen: 'Tu huella digital es el rastro que dejas cuando usas internet.',
  duracionMin: 90,
  subtema: 'Mi huella digital — el rastro que dejas sin darte cuenta',
  preLectura: {
    porQueImporta: 'El producto es ese reloj clasificado más los 3 compromisos para reducir huellas rojas.',
    preguntaDetonante: 'Si tu mamá pudiera ver todo lo que hiciste en el celular ayer — cada video, cada búsqueda, cada chat, cada lugar donde estuviste según el GPS — ¿le gustaría lo que vería? ¿O hay cosas que preferirías que no viera?',
    activacion: {
      titulo: 'Inventario de tu día de ayer',
      descripcion: 'Actividad 1 · IDENTIFICA — Inventario de tu día de ayer (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas las apps que usaste ayer, descubres los 3 tipos de huella, evalúas tus huellas, y firmas compromisos.',
      siguiente: 'Cumple los 3 compromisos que firmaste.'
    }
  },
  conceptosClave: [
    {
      termino: 'Huella digital',
      definicion: 'El rastro que dejas cuando usas internet. No es lo mismo que la identidad: la identidad es lo que tú decides mostrar; la huella es todo lo demás (búsquedas, ubicación, tiempo en apps, cosas que otros publican de ti).',
      ejemplo: 'Tu identidad digital incluye tu foto de perfil. Tu huella incluye que el martes viste 47 videos de TikTok entre 10 y 11 pm.',
      emoji: '👣'
    },
    {
      termino: 'Huella activa',
      definicion: 'La que dejas a propósito. Tú decides publicar un TikTok, subir una historia, escribir un comentario. Como tú la controlas, depende de ti que sea buena o no.',
      ejemplo: 'Subir una foto a Instagram con tu nombre es huella activa. Comentar un video con tu apodo también lo es.',
      emoji: '✍️'
    },
    {
      termino: 'Huella pasiva',
      definicion: 'La que dejas sin darte cuenta. Las apps registran cuánto tiempo las usas, qué buscas, dónde estás (si tienen GPS), a qué hora abres el celular. Las empresas la guardan y la venden.',
      ejemplo: 'TikTok sabe que te detienes 8 segundos en cada video de gatos. Google guarda cada palabra que has buscado este año.',
      emoji: '🔍'
    },
    {
      termino: 'Huella secundaria',
      definicion: 'La que dejan otros sobre ti. Un amigo te etiqueta en una foto, una prima te menciona, un familiar publica fotos viejas tuyas. Tú no la controlas directamente, pero puedes pedir que la quiten.',
      ejemplo: 'Tu tía sube una foto tuya de cuando tenías 5 años a Facebook. Es tu huella aunque tú no la publicaste.',
      emoji: '👥'
    },
    {
      termino: 'Permisos de la app',
      definicion: 'La lista de cosas que una app puede ver de tu celular: GPS, cámara, micrófono, contactos. Cada app pide los suyos. Algunos tienen sentido (Maps necesita GPS); otros no (una linterna no necesita micrófono).',
      ejemplo: 'Si una app de juego pide tu lista de contactos, eso no tiene sentido. Mejor le niegas el permiso o no la instalas.',
      emoji: '🔓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces tu huella digital?',
      instrucciones: '5 preguntas para verificar que sabes qué rastro dejas en internet y cómo cuidarlo.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia entre identidad digital y huella digital?',
          opciones: [
            'Son lo mismo, solo cambia el nombre.',
            'La identidad es para adultos; la huella es para niños.',
            'La huella es buena; la identidad es mala.',
            'La identidad es lo que tú muestras; la huella es lo que queda sin que tú decidas.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. La identidad la decides tú. La huella se va dejando casi sin notar. Cuidar las dos requiere cosas distintas.',
          feedbackIncorrecto: 'La identidad es lo que tú decides mostrar. La huella es lo que las apps registran sin que tú lo notes.'
        },
        {
          enunciado: 'Subes una foto a TikTok. ¿Qué tipo de huella es?',
          opciones: [
            'Huella activa: tú decidiste subirla.',
            'Huella pasiva: la app la subió sola.',
            'Huella secundaria: alguien más la subió.',
            'No es huella, es solo un video.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Tú la subiste a propósito, entonces es activa. La controlas tú: si la cuidas, está bien; si no, te queda.',
          feedbackIncorrecto: 'Si tú la subiste a propósito, es huella activa. La pasiva la dejas sin notar; la secundaria la dejan otros sobre ti.'
        },
        {
          enunciado: 'Tu prima sube una foto vieja tuya sin pedirte permiso. ¿Qué tipo de huella es?',
          opciones: [
            'Huella activa: porque ahí estás tú.',
            'Huella pasiva: porque no lo notaste.',
            'Huella secundaria: porque la dejó otra persona sobre ti.',
            'No es huella, es solo una foto vieja.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. La huella secundaria es la que dejan otros. Puedes pedirle a tu prima que la baje y eso es válido.',
          feedbackIncorrecto: 'Es huella secundaria porque la dejó otra persona. Tienes derecho a pedirle a tu prima que la quite si no te gusta.'
        },
        {
          enunciado: 'Una app de linterna te pide permiso para usar tu micrófono y tu lista de contactos. ¿Qué haces?',
          opciones: [
            'Le doy permiso, debe necesitarlo.',
            'Le niego los permisos. Una linterna no necesita micrófono ni contactos.',
            'Le doy solo el micrófono pero no los contactos.',
            'Borro todas las apps de linterna por si acaso.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Si el permiso no tiene sentido con lo que hace la app, lo niegas. Una linterna solo necesita la luz del flash.',
          feedbackIncorrecto: 'Niegas permisos que no tienen sentido. Una linterna no necesita micrófono ni contactos. Si insiste, mejor borra esa app.'
        },
        {
          enunciado: 'Alguien te dice \'si no tienes nada que esconder, no necesitas privacidad\'. ¿Qué piensas?',
          opciones: [
            'Tiene razón, si me porto bien no necesito privacidad.',
            'Solo los famosos necesitan privacidad.',
            'Privacidad no es esconder; es escoger qué se cuenta de mí y a quién.',
            'La privacidad ya no existe, da igual.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Privacidad es libertad de decidir. No es ocultar cosas malas; es proteger tu espacio para escoger qué muestras.',
          feedbackIncorrecto: 'Privacidad es libertad de decidir qué se sabe de ti. No tiene que ver con esconder cosas malas, sino con poder escoger.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy dejándome describir por mis búsquedas y mis likes, o sigo siendo yo el que decide quién soy?',
    transferencia: 'Cumple los 3 compromisos que firmaste.',
    cierre: 'Al terminar la clase: (1) podrás identificar 3 tipos distintos de huella digital; (2) sabrás explicar la diferencia entre identidad digital y huella digital; (3) habrás evaluado las huellas de un día tuyo y las clasificarás en verde-amarillo-rojo; (4) habrás escrito 3 compromisos…'
  },
  saberAncestral: {
    saber: 'En el río Cauca el pescador sabía dónde estaban los peces porque leía huellas. Antes de los sonares y los celulares, el pescador del Pacífico y del Cauca leía el agua para saber qué había debajo: las ondas pequeñas mostraban un cardumen, las burbujas contaban dónde dormía el bocachico, las ramas mordidas de la orilla decían "aquí estuvo un capibara hace dos horas". Cada criatura, sin querer, dejaba un rastro. Por ese rastro la gente sabía exactamente quién había pasado, cuándo y a dónde iba. En internet pasa parecido: cada vez que entras a una app, buscas algo, das me gusta, dejas un rastro. No lo ves, pero está. Otros sí lo leen — algunos para cuidarte (tus papás), otros para venderte cosas (las empresas), y a veces personas malas para hacerte daño.',
    preguntaPuente: 'Si tu mamá pudiera ver todo lo que hiciste en el celular ayer — cada video, cada búsqueda, cada chat, cada lugar donde estuviste según el GPS — ¿le gustaría lo que vería? ¿O hay cosas que preferirías que no viera?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la dignidad de las personas)',
      lente: 'lente del nosotros',
      cita: '"No eres lo que las empresas creen que eres por tus búsquedas. Eres más que tu huella."',
      preguntaEspejo: '¿Estoy dejándome describir por mis búsquedas y mis likes, o sigo siendo yo el que decide quién soy?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Lo que haces a solas habla más fuerte de ti que lo que muestras en público."',
      preguntaEspejo: '¿Hago en el celular cosas que coinciden con quien soy, o cosas que me darían pena si las viera mi familia?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano que estudia la privacidad en internet)',
      lente: 'lente de la infoesfera',
      cita: '"Privacidad no es esconder; privacidad es decidir qué se cuenta de ti y a quién."',
      preguntaEspejo: 'Cuando entrego mis datos sin pensar, ¿estoy regalando libertad sin notarlo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar 3 tipos distintos de huella digital; (2) sabrás explicar la diferencia entre identidad digital y huella digital; (3) habrás evaluado las huellas de un día…',
    emocional: 'Marco Aurelio escribió esto hace 1800 años, pero parece escrito ayer.',
    ciudadana: 'Las empresas que recogen tu huella creen que pueden predecir todo de ti: qué te gusta, qué vas a comprar, qué te asusta.',
    local: 'Antes de salir, miras tus 3 compromisos y verificas que sean concretos (no "voy a portarme mejor", sino "voy a desactivar el GPS de TikTok").',
    intergeneracional: 'Mucha gente dice "no tengo nada que esconder" para justificar no cuidar la huella.'
  }
};

export default contenido;
