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
  titulo: 'Audio — captura, edición y formatos',
  resumen: 'Como la voz del cantor del pueblo: cuidar voz, pausas y ritmo. Aprendes a capturar audio con calidad, editar pausas y ruido, y exportar en formato apropiado para presentaciones y podcasts.',
  duracionMin: 90,
  subtema: 'Audio · Captura · Edición · Formatos',
  preLectura: {
    porQueImporta: 'Saber editar audio te abre el mundo del podcast, narración educativa, contenido en redes. Es habilidad creciente en demanda — y muy escasa entre estudiantes.',
    preguntaDetonante: '¿Qué de la voz del cantor del pueblo —su disciplina del ritmo y la pausa— podemos llevar a la grabación digital?',
    activacion: {
      titulo: 'El podcast memorable',
      descripcion: 'En 5 minutos: en parejas escuchen 30 segundos de un podcast favorito. Identifiquen qué hace que se sienta profesional: ¿voz clara? ¿pausas? ¿ausencia de ruido?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 24 aprendiste edición ética de imágenes.',
      siguiente: 'En la sesión 26 entrarás a ciberseguridad: protección ante ciberbullying.'
    }
  },
  conceptosClave: [
    {
      termino: 'Captura',
      definicion: 'Primera fase del audio. Grabación con micrófono. Reglas básicas, ambiente silencioso, micrófono cerca pero no pegado, volumen probado.',
      ejemplo: 'Para una entrevista, grabas en un salón sin eco, con el micrófono a un palmo de la boca y revisando volumen antes.',
      emoji: '🎙️'
    },
    {
      termino: 'Edición',
      definicion: 'Segunda fase. En Audacity u otro editor, cortas partes innecesarias, ajustas volumen, eliminas ruido, agregas fade-in y fade-out.',
      ejemplo: 'Cortas el "uhm" del inicio, subes el volumen general 3 dB y agregas fade-in para evitar el corte abrupto al inicio.',
      emoji: '🎚️'
    },
    {
      termino: 'Audacity',
      definicion: 'Editor de audio gratuito, descargable, multiplataforma. Estándar profesional para grabación y edición sencilla.',
      ejemplo: 'Abres Audacity, arrastras el archivo, seleccionas la parte a borrar y presionas Suprimir. Edición básica en pocos clics.',
      emoji: '🎧'
    },
    {
      termino: 'Formato MP3',
      definicion: 'Audio comprimido. Archivo pequeño, calidad estándar. Ideal para WhatsApp, redes sociales o distribución masiva.',
      ejemplo: 'Exportas el podcast como MP3 a 128 kbps. Suficiente calidad y cabe en WhatsApp sin problema.',
      emoji: '📦'
    },
    {
      termino: 'Formato WAV',
      definicion: 'Audio sin comprimir. Archivo grande, calidad máxima. Ideal para archivo maestro o edición posterior.',
      ejemplo: 'Guardas la grabación original en WAV. Si necesitas reeditar el año entrante, partes de un archivo sin pérdida.',
      emoji: '💎'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes producir audio con oficio?',
      instrucciones: '5 preguntas para verificar que aplicas las 4 fases y eliges el formato adecuado.',
      preguntas: [
        {
          enunciado: '¿Cuáles son las 4 fases de producción de una pieza de audio?',
          opciones: [
            'Grabar y publicar',
            'Solo edición',
            'Captura y compresión',
            'Captura, edición, exportación y difusión'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Captura, edición, exportación y difusión. Cada fase tiene reglas profesionales propias.',
          feedbackIncorrecto: 'Son cuatro: captura, edición, exportación y difusión. Saltar una resta calidad o alcance a la pieza.'
        },
        {
          enunciado: '¿Cuál es el editor de audio gratis y profesional más usado en aulas?',
          opciones: [
            'Word',
            'Excel',
            'Audacity',
            'WhatsApp'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Audacity, gratuito y multiplataforma. Hace cortes, ajustes de volumen, eliminación de ruido y exportación.',
          feedbackIncorrecto: 'Es Audacity. Gratuito, descargable y suficiente para todo el oficio escolar de audio.'
        },
        {
          enunciado: 'Vas a enviar tu podcast por WhatsApp. ¿Qué formato eliges?',
          opciones: [
            'WAV, porque pesa más',
            'MP3, comprimido y pequeño',
            'PDF',
            'JPG'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. MP3 está comprimido, pesa menos y tiene calidad estándar suficiente para distribución.',
          feedbackIncorrecto: 'Para WhatsApp se usa MP3. Está comprimido, pesa poco y mantiene calidad estándar suficiente.'
        },
        {
          enunciado: '¿Para qué sirve el fade-in al inicio de una grabación?',
          opciones: [
            'Para evitar el corte abrupto cuando empieza el audio',
            'Para subir el volumen total',
            'Para acortar la pieza',
            'Para cambiar el idioma'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El fade-in hace que el audio suba gradualmente, evitando el corte abrupto y dando entrada profesional.',
          feedbackIncorrecto: 'Sirve para evitar el corte abrupto al inicio. La pieza entra de forma gradual y suena profesional.'
        },
        {
          enunciado: 'Quieres archivar la grabación original con máxima calidad. ¿Qué formato eliges?',
          opciones: [
            'MP3',
            'WAV',
            'JPG',
            'DOC'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. WAV sin comprimir conserva calidad máxima. Ideal para archivar y poder reeditar después sin pérdida.',
          feedbackIncorrecto: 'WAV. Sin compresión, calidad máxima. Pesa más pero permite reedición posterior sin pérdida.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'La edición de audio enseña paciencia: una grabación de 1 minuto bien editada toma 15 minutos de trabajo. ¿En qué otros ámbitos de tu vida la paciencia produce calidad superior?',
    transferencia: 'Esta semana: graba un audio de 1 minuto sobre tu proyecto, edita pausas largas, normaliza volumen, exporta MP3. Compártelo con un compañero y pide retroalimentación honesta.',
    cierre: 'La voz del cantor del pueblo y el podcast digital comparten disciplina: cuidar voz, pausas, ritmo. La diferencia es la herramienta; la ética del cuidado es la misma.'
  },
  saberAncestral: {
    saber: 'En las emisoras barriales del Valle del Cauca, especialmente en las décadas en que la cumbia, el currulao y el vallenato pasaban por la radio antes de la televisión y mucho antes del celular, había un personaje silencioso que sostenía la programación: el operador de radio cumbero. No era el locutor (la voz que se escuchaba), ni el cantor (la voz grabada): era el técnico que estaba detrás del vidrio del estudio, con audífonos y consola de botones, decidiendo qué se escuchaba bien y qué se editaba antes de salir al aire. Cuando el cantor del grupo de Quibdó llegaba a grabar una canción nueva, el operador hacía 4 tareas en orden: (1) Capturar: posicionar el micrófono, ajustar volumen para que la voz no saliera distorsionada. (2) Editar: cortar el silencio del principio, eliminar el carraspeo a la mitad, balancear la voz con el coro. (3) Mezclar: equilibrar instrumentos y voz. (4) Difundir: enviar la cinta al transmisor que llegaba a todo el departamento. Esas 4 tareas eran su oficio profesional: capturar, editar, mezclar, difundir. La captura y edición de audio digital es exactamente ese oficio del operador trasladado al celular o computador, ahora al alcance de cualquier estudiante.',
    fuente: 'Cantores y versadores del Pacífico, el Valle, el Caribe y los Andes',
    preguntaPuente: '¿Qué sabía el operador de radio cumbero al cortar el silencio antes de transmitir, que el novato olvida cuando publica un audio crudo de 5 minutos sin editar? ¿Y por qué el formato MP3 es el más usado en WhatsApp aunque WAV tenga mejor calidad?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Producir audio con voz propia o de la comunidad es liberador; reproducir voces ajenas sin contexto es repetir el silencio del sistema.',
      preguntaEspejo: '¿Mi pieza da voz a alguien o algo que no suele escucharse, o repite contenido genérico?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Editar antes de difundir es disciplina; publicar audio crudo es pereza disfrazada de espontaneidad.',
      preguntaEspejo: '¿Estoy editando con disciplina, o pongo excusas para no hacer el trabajo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La producción sonora responsable es la nueva ética del oficio digital en la era de los podcasts y los audios virales.',
      preguntaEspejo: '¿Mi audio respeta al oyente con calidad cuidada, o publica como sea esperando que se entienda?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que la edición de audio enseña paciencia — habilidad transferible a cualquier oficio que requiera pulir antes de entregar.',
    emocional: 'Resististe la tentación de publicar al primer take — entendiste que el cuidado es regalo al oyente.',
    ciudadana: 'Producir audios cuidados aporta a una infoesfera sonora menos saturada de ruido.',
    local: 'Heredaste el oficio del versador del Pacífico y el decimero del Valle: voz cuidada, pausas con función, ritmo respetuoso.',
    intergeneracional: 'El cantor del pueblo y el podcaster digital comparten ética del cuidado vocal. Lo que cambia es la herramienta, no la disciplina.'
  }
};

export default contenido;
