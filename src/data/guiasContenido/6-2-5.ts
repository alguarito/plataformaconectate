/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/6/6-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 5,
  titulo: 'Hardware vs software — el cuerpo y las instrucciones',
  resumen: 'Hardware viene del inglés y significa "mercancía dura, cosa material".',
  duracionMin: 90,
  subtema: 'Hardware vs software — el cuerpo y las instrucciones',
  preLectura: {
    porQueImporta: 'El producto es ese mapa firmado con 15 elementos clasificados + analogía + frase comparativa.',
    preguntaDetonante: 'Tu celular se cae y la pantalla se raja. ¿Esa pantalla es hardware o software? Después de cambiarla en un técnico, ¿pierdes tus fotos? ¿Por qué sí o no?',
    activacion: {
      titulo: 'Clasifica 15 cosas',
      descripcion: 'Actividad 1 · IDENTIFICA — Clasifica 15 cosas (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: clasificas 15 cosas en hardware o software, aprendes las 3 diferencias clave, dibujas el mapa con la analogía de la costurera, y firmas tu trabajo.',
      siguiente: 'Esta semana, cuando alguien hable de un problema con su computador, escucha bien: ¿están describiendo un problema de hardware (algo roto físicamente) o de software (algo que no abre, no actualiza, da error)?'
    }
  },
  conceptosClave: [
    {
      termino: 'Hardware',
      definicion: 'Todo lo que se puede tocar en el computador. Las piezas físicas: gabinete, pantalla, teclado, ratón, cables, chips internos. Si lo puedes golpear, derribar o llevar en la mano, es hardware.',
      ejemplo: 'El monitor, el teclado, los audífonos, la tarjeta madre, el disco duro: todos son hardware. También el ratón inalámbrico (aunque no tenga cable, lo tocas).',
      emoji: '💻'
    },
    {
      termino: 'Software',
      definicion: 'Las instrucciones y archivos que viven dentro del hardware. No se pueden tocar pero existen guardados en memoria. Sistema operativo, programas, apps, archivos: todo eso es software.',
      ejemplo: 'Windows 11, Microsoft Word, Chrome, la app de WhatsApp, tu foto de cumpleaños, un video que descargaste: todos son software.',
      emoji: '📦'
    },
    {
      termino: 'Sistema operativo',
      definicion: 'El software más importante del computador. Es el "gerente" que coordina todo lo demás: programas, archivos, periféricos. Sin él, el hardware no funciona como computador.',
      ejemplo: 'Computadores: Windows, macOS, Linux, ChromeOS. Celulares: Android, iOS. Cada uno es un sistema operativo distinto pero todos hacen lo mismo: coordinar todo.',
      emoji: '🎛️'
    },
    {
      termino: 'Programa o app',
      definicion: 'Un software que hace una tarea específica. Word es para escribir, Chrome para navegar, Roblox para jugar, WhatsApp para chatear. Cada uno hace algo concreto, distinto del sistema operativo.',
      ejemplo: 'En tu celular tienes muchas apps abiertas a la vez (WhatsApp, Instagram, TikTok). Cada una es un programa distinto que el sistema operativo Android está coordinando.',
      emoji: '📲'
    },
    {
      termino: 'Archivo',
      definicion: 'El software más pequeño: una unidad de información que tú creas o descargas. Una foto, un video, un documento Word, una canción MP3, un PDF: todos son archivos. Se guardan en el disco duro.',
      ejemplo: 'Tu archivo "tarea-mate.docx" es un archivo de software. Vive en tu disco duro (hardware). Si cambias el disco, perderías el archivo a menos que tengas copia.',
      emoji: '📄'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Distingues hardware de software?',
      instrucciones: '5 preguntas para verificar la clasificación de hardware y software con sus reglas.',
      preguntas: [
        {
          enunciado: 'Tu primo dice \'me regalaron Windows nuevo\'. ¿Qué le regalaron, hardware o software?',
          opciones: [
            'Hardware, porque Windows es un programa físico.',
            'Software, porque Windows es un sistema operativo (instrucciones).',
            'Las 2 cosas al tiempo.',
            'Ninguna, Windows no es ni una cosa ni otra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Windows es un sistema operativo: software. Tu primo recibió una licencia o una instalación, no una caja con piezas físicas.',
          feedbackIncorrecto: 'Windows es software (sistema operativo). No se toca, son instrucciones que coordinan el computador. El hardware sería un PC nuevo.'
        },
        {
          enunciado: 'Tu hermano te dice \'la pantalla del celular se rajó\'. ¿Qué se dañó, hardware o software?',
          opciones: [
            'Software: las imágenes que mostraba la pantalla.',
            'Ninguno, las pantallas rajadas no son tecnología.',
            'Las 2 cosas al tiempo.',
            'Hardware: la pantalla es física, se tocó (cuando se cayó).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. La pantalla es hardware (se toca, se daña físicamente). Cambiarla no afecta las fotos porque las fotos son software guardado en el disco duro.',
          feedbackIncorrecto: 'La pantalla es hardware: se daña físicamente. Las fotos no se pierden porque son software guardado en otra pieza (el disco).'
        },
        {
          enunciado: 'Tu tía borra una foto de su celular por accidente. ¿Qué perdió, hardware o software?',
          opciones: [
            'Hardware: la foto era una pieza física.',
            'Las 2 cosas, porque la foto y la pantalla son lo mismo.',
            'Software: la foto era un archivo (información).',
            'No perdió nada, la foto sigue ahí pero invisible.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Las fotos son archivos (software). Tu tía borró información del disco duro. El hardware (el celular) sigue intacto.',
          feedbackIncorrecto: 'Las fotos son software (archivos). Tu tía borró información del disco duro. El hardware (celular y pantalla) está bien.'
        },
        {
          enunciado: 'Tu computador tarda mucho en abrir programas. Tu papá compra una memoria USB nueva. ¿Le ayudó o no?',
          opciones: [
            'No tiene sentido: el problema es de hardware interno (RAM o disco), no se arregla con un periférico externo.',
            'Sí, porque la memoria USB hace que los programas vayan más rápido.',
            'Sí, porque la memoria USB es software.',
            'No, porque el problema es de software.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. La memoria USB es hardware externo para llevar archivos. Para que el equipo abra rápido, hace falta más RAM o cambiar el disco a SSD.',
          feedbackIncorrecto: 'La memoria USB es para llevar archivos, no para acelerar el computador. La velocidad la dan RAM y disco duro (hardware interno) y un buen mantenimiento.'
        },
        {
          enunciado: 'Tu computador no enciende. Huele a quemado por dentro. ¿Es problema de hardware o software?',
          opciones: [
            'Software, hay que reinstalar Windows.',
            'Hardware, una pieza se quemó (probablemente la fuente de poder).',
            'Software, hay que borrar virus.',
            'No es problema, así huelen normalmente.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Si huele a quemado, una pieza física falló. Lo más probable es la fuente de poder (alimenta a todo). Hay que llevarlo al técnico.',
          feedbackIncorrecto: 'Olor a quemado = problema de hardware (físico). Lo más probable es la fuente de poder. Software no se quema. Lleva el equipo a técnico.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de mis 2 manos (la del hardware o la del software) tengo más entrenada hoy?',
    transferencia: 'Esta semana, cuando alguien hable de un problema con su computador, escucha bien: ¿están describiendo un problema de hardware (algo roto físicamente) o de software (algo que no abre, no actualiza, da error)?',
    cierre: 'Al terminar la clase: (1) podrás identificar hardware y software con la regla del toque; (2) sabrás explicar 3 diferencias claves; (3) habrás aplicado la clasificación a 15 elementos reales; (4) podrás evaluar qué pasa si falla el hardware o si falla el software.'
  },
  saberAncestral: {
    saber: 'Doña Carmen, la costurera del barrio, no podía coser solo con tela. En cualquier cuadra de Cartago, antes de las máquinas industriales, había una costurera que hacía vestidos y uniformes del colegio. Doña Carmen tenía 2 cosas en su taller: por un lado, la tela, los hilos, la máquina de coser Singer, las tijeras grandes — todo lo que se podía tocar. Por otro lado, el patrón de papel (un plano del vestido recortado en papel beige) que indicaba cuánto cortar, dónde unir, cómo hacer la manga. Sin tela no había vestido. Pero sin patrón tampoco. La tela era el cuerpo, el patrón eran las instrucciones. Doña Carmen sabía que sin uno o sin otro, no podía coser nada. Hoy en el computador pasa exactamente lo mismo: hay hardware (la parte que se toca) y software (las instrucciones que le dicen al hardware qué hacer). Sin uno o sin otro, el computador no sirve. Conocer ese par es entender por qué el computador funciona.',
    preguntaPuente: 'Tu celular se cae y la pantalla se raja. ¿Esa pantalla es hardware o software? Después de cambiarla en un técnico, ¿pierdes tus fotos? ¿Por qué sí o no?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del trabajo material e inmaterial)',
      lente: 'lente del nosotros',
      cita: '"El cuerpo y la palabra son inseparables. Un trabajo sin las dos manos no se completa."',
      preguntaEspejo: '¿Cuál de mis 2 manos (la del hardware o la del software) tengo más entrenada hoy?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Cuida el cuerpo. Cuida la palabra. Lo que está adentro y lo que está afuera son uno."',
      preguntaEspejo: '¿Cuido mi computador como un todo (hardware + software) o cuido solo lo que se ve?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la ontología digital)',
      lente: 'lente de la infoesfera',
      cita: '"La distinción entre lo físico y lo digital es práctica, no esencial: ambos son reales."',
      preguntaEspejo: '¿Le doy el mismo valor a mis archivos digitales que a mis cosas físicas?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar hardware y software con la regla del toque; (2) sabrás explicar 3 diferencias claves; (3) habrás aplicado la clasificación a 15 elementos reales; (4) podrá…',
    emocional: 'Si maltratas tu hardware (golpes, suciedad, mojadura), el software no puede correr bien aunque sea el mejor del mundo.',
    ciudadana: 'Doña Carmen no podía coser solo con tela.',
    local: 'Antes de salir, mira tu mapa: ¿podrías tachar todos los del hardware y ver qué queda en software?',
    intergeneracional: 'Mucha gente cree que "lo digital no es real porque no se toca".'
  }
};

export default contenido;
