/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/6/6-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 7,
  titulo: 'Archivos y carpetas — ordenar mi biblioteca digital',
  resumen: 'Un archivo es una unidad de información digital: un documento de Word, una foto, una canción, un video, un PDF.',
  duracionMin: 90,
  subtema: 'Archivos y carpetas — ordenar mi biblioteca digital',
  preLectura: {
    porQueImporta: 'El producto es ese árbol firmado + tabla de extensiones.',
    preguntaDetonante: 'Tu tía te pide que le envíes "la foto de tu cumpleaños del año pasado". Si abres tu galería del celular y encuentras 4.000 fotos sin organizar, ¿cuánto tardarías en encontrarla? ¿Y si las tuvieras en una carpeta llamada "2025-mi-cumpleaños"?',
    activacion: {
      titulo: '¿Qué archivo es?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Qué archivo es?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas 10 archivos con sus extensiones, aprendes a armar carpetas en árbol, escribes las 5 reglas de nombrado, y dibujas tu árbol personal.',
      siguiente: 'Esta semana, en el computador o celular, crea 3 carpetas siguiendo las 5 reglas de nombrado.'
    }
  },
  conceptosClave: [
    {
      termino: 'Archivo',
      definicion: 'Unidad de información digital. Un documento de Word, una foto, una canción, un video, un PDF. Cada archivo tiene un nombre y una extensión (las letras después del punto).',
      ejemplo: '"tarea-historia.docx" es un archivo. "docx" es la extensión que dice al computador que es un documento de Word.',
      emoji: '📄'
    },
    {
      termino: 'Carpeta',
      definicion: 'Una "caja virtual" que guarda archivos y otras carpetas adentro. Sirve para organizar la información por tema o categoría. Las carpetas se organizan en árbol jerárquico.',
      ejemplo: 'Carpeta "Colegio" tiene adentro "Tecnologia", "Matematicas" y "Sociales". Cada una tiene sus propios archivos.',
      emoji: '📁'
    },
    {
      termino: 'Extensión',
      definicion: 'Las 3-4 letras después del punto en el nombre del archivo. Le dice al computador qué tipo de archivo es y con qué programa debe abrirlo.',
      ejemplo: '".docx" = Word, ".jpg" = foto, ".mp4" = video, ".pdf" = lectura, ".zip" = comprimido. Si cambias la extensión sin saber, dañas el archivo.',
      emoji: '🏷️'
    },
    {
      termino: 'Jerarquía de carpetas (árbol)',
      definicion: 'La forma en que se organizan las carpetas: una raíz general en lo alto, ramas (subcarpetas) por tema, hojas (más subcarpetas o archivos) en los extremos. Se llama árbol porque parece uno invertido.',
      ejemplo: 'Mis-documentos → Colegio → Tecnologia → Periodo-2 → tarea-historia.docx. Eso son 4 niveles de profundidad.',
      emoji: '🌳'
    },
    {
      termino: 'Reglas de nombrado',
      definicion: 'Las 5 reglas para nombrar archivos y carpetas: palabras claras, sin espacios (usa guion), sin acentos ni ñ, con fecha si aplica, pensando en tu yo del próximo año.',
      ejemplo: 'Bien: "2026-tarea-historia.docx". Mal: "tarea final del año hjfdks.docx". El primero dice exactamente qué es y cuándo.',
      emoji: '✍️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes organizar tus archivos?',
      instrucciones: '5 preguntas para verificar que dominas archivos, carpetas y extensiones.',
      preguntas: [
        {
          enunciado: 'Te llega un archivo llamado \'instalador-juego.exe\'. ¿Qué deberías hacer?',
          opciones: [
            'Abrirlo de una porque dice \'juego\'.',
            'Verificar que viene de una fuente oficial confiable. Los .exe pueden ser virus.',
            'Borrarlo de una, todos los .exe son virus.',
            'Renombrarlo a .docx para que sea seguro.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Los .exe instalan programas, así que pueden ser virus. Solo abre los que vengan de páginas oficiales del fabricante.',
          feedbackIncorrecto: 'Los .exe pueden ser virus. Solo abre los de fuentes oficiales (página del fabricante). Nunca de correos extraños o links sospechosos.'
        },
        {
          enunciado: '¿Cuál es el mejor nombre para una carpeta?',
          opciones: [
            'x1',
            'Mi cumpleaños del año pasado',
            '2025-mi-cumple',
            'kjfhjksdf'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. "2025-mi-cumple" cumple las 5 reglas: claro, sin espacios, sin acentos, con fecha, y tu yo del futuro lo entiende.',
          feedbackIncorrecto: '"2025-mi-cumple" es el mejor: claro, sin espacios, con fecha. "x1" no dice nada; "kjfhjksdf" tampoco; con espacios algunos programas se enredan.'
        },
        {
          enunciado: 'Borraste un archivo importante. ¿Qué haces?',
          opciones: [
            'Lloro, ya no se recupera.',
            'Abro la papelera de reciclaje, busco el archivo, clic derecho, \'Restaurar\'.',
            'Reinicio el computador y vuelve.',
            'Cambio la extensión del archivo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La papelera es tu segunda oportunidad. Mientras no la hayas vaciado, el archivo sigue ahí y se recupera con \'Restaurar\'.',
          feedbackIncorrecto: 'Va a la papelera de reciclaje. Si no la has vaciado, el archivo está ahí. Clic derecho + \'Restaurar\' lo devuelve a su lugar.'
        },
        {
          enunciado: 'Quieres comprimir 20 fotos del cumpleaños en una sola caja para enviarla por correo. ¿Qué extensión usas?',
          opciones: [
            '.jpg',
            '.docx',
            '.zip',
            '.mp4'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. El .zip comprime varias cosas en una sola caja. Es más fácil enviar 1 archivo .zip que 20 .jpg sueltas.',
          feedbackIncorrecto: 'El .zip junta y comprime varios archivos en uno solo. Ideal para enviar muchas cosas en un solo correo o mensaje.'
        },
        {
          enunciado: 'Tu árbol de carpetas tiene 3 niveles. ¿Está bien organizado?',
          opciones: [
            'Sí, 3 niveles es mucho.',
            'Depende. La profundidad ideal es 3-5 niveles. Muy poco = todo amontonado; muy mucho = te pierdes.',
            'Solo 1 nivel es mejor.',
            'Mínimo 10 niveles, sino no sirve.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La profundidad ideal es 3-5 niveles. Muy plano (1-2) amontona todo. Muy profundo (6+) te enredas al buscar. 3-5 es lo óptimo.',
          feedbackIncorrecto: 'Lo ideal es 3-5 niveles. Plano amontona todo en una sola carpeta. Muy profundo te hace dar muchos clics para encontrar algo. Equilibrio.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuido mi trabajo digital como cuido las cosas que valoro físicamente?',
    transferencia: 'Esta semana, en el computador o celular, crea 3 carpetas siguiendo las 5 reglas de nombrado.',
    cierre: 'Al terminar la clase: (1) podrás identificar archivos por su extensión; (2) sabrás explicar la jerarquía de carpetas (árbol); (3) podrás aplicar 5 reglas de nombrado a tus carpetas; (4) habrás creado una estructura personal de organización con archivos ubicados.'
  },
  saberAncestral: {
    saber: 'Doña Elena trabajó 30 años como archivera del juzgado de Cartago. En esa oficina llegaban cada día 50 expedientes, cartas, peticiones, sentencias. Si se mezclaban, una persona podía pasar meses sin que le respondieran un trámite. Doña Elena tenía un sistema: archivadores de madera con etiquetas, dentro de cada archivador cajones por tipo de caso, dentro de cada cajón carpetas por mes, dentro de cada carpeta hojas numeradas en orden cronológico. Si llegaba un abogado preguntando por "el expediente Martínez del 15 de marzo de 1995", doña Elena lo encontraba en menos de 2 minutos. Su saber no era memoria, era organización: cada cosa en su lugar, cada lugar con su nombre. Los abuelos en las casas hacían algo parecido con cajas de zapatos llenas de fotos: una por familia, una por viaje, una por niño. Hoy ese mismo sistema vive en tu computador: se llama estructura de carpetas y archivos. Aprenderlo te ahorra años de búsqueda perdida.',
    preguntaPuente: 'Tu tía te pide que le envíes "la foto de tu cumpleaños del año pasado". Si abres tu galería del celular y encuentras 4.000 fotos sin organizar, ¿cuánto tardarías en encontrarla? ¿Y si las tuvieras en una carpeta llamada "2025-mi-cumpleaños"?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del cuidado del propio trabajo)',
      lente: 'lente del nosotros',
      cita: '"El orden no es una virtud burguesa: es un acto de cuidado hacia el propio trabajo."',
      preguntaEspejo: '¿Cuido mi trabajo digital como cuido las cosas que valoro físicamente?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador romano que vivía con disciplina diaria)',
      lente: 'lente del cuidado interior',
      cita: '"Cada cosa en su lugar; cada lugar con su propósito. Eso da paz al espíritu."',
      preguntaEspejo: '¿Cuánto tiempo gasto buscando archivos perdidos cada semana? ¿Qué haría con ese tiempo si lo ahorrara?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la información)',
      lente: 'lente de la infoesfera',
      cita: '"Quien organiza la información, gobierna su vida. Quien no, vive a merced del caos digital."',
      preguntaEspejo: '¿Estoy gobernando mi información o me está gobernando ella a mí (en forma de caos)?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar archivos por su extensión; (2) sabrás explicar la jerarquía de carpetas (árbol); (3) podrás aplicar 5 reglas de nombrado a tus carpetas; (4) habrás creado…',
    emocional: 'Cuando todo está en su lugar, no tienes que pensar dónde está.',
    ciudadana: 'Algunas personas creen que "ser ordenado es cosa de obsesivos".',
    local: 'Antes de salir, verificas que tu árbol tiene 4 niveles y que cada archivo está en la carpeta correcta.',
    intergeneracional: 'Hoy producimos más información que nunca: fotos, videos, documentos, audios, descargas.'
  }
};

export default contenido;
