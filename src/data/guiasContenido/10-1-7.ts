/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 7
 * (sesión global 7).
 *
 * Auto-generado desde content/guias/10/10-1-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 7,
  titulo: 'Portada con IA generativa de imagen — herramientas gratuitas',
  resumen: 'Las herramientas gratuitas de IA generativa de imagen en 2026 son varias, cada una con fortalezas distintas: (1) Bing Image Creator (bing.com/images/create): basado en DALL-E 3, gratis, requiere cuenta Microsoft.',
  duracionMin: 90,
  subtema: 'Portada con IA generativa de imagen — herramientas gratuitas',
  preLectura: {
    porQueImporta: 'El criterio principal: que cualquiera viendo la portada entienda qué libro es y se sienta llamado a abrirlo.',
    preguntaDetonante: '¿Qué sabía el pintor de carteles al bocetar 3 versiones antes de pintar la definitiva, que el usuario novato de DALL-E olvida cuando acepta la primera imagen que sale? ¿Y por qué el prompt para imagen requiere descriptores visuales en lugar de instrucciones narrativas?',
    activacion: {
      titulo: '3 portadas referencia',
      descripcion: 'Actividad 1 · IDENTIFICA — 3 portadas referencia (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy le pones la primera imagen pública a tu libro: la portada que verá quien lo encuentre.',
      siguiente: 'Llega con tu portada definitiva, las 3 versiones probadas y la declaración del modelo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Bing Image Creator',
      definicion: 'Generador gratuito basado en DALL-E 3. Acceso con cuenta Microsoft. Bueno para estilos variados.',
      ejemplo: 'En bing.com/images/create escribes el prompt visual y obtienes 4 imágenes en pocos segundos.',
      emoji: '🎨'
    },
    {
      termino: 'Leonardo.ai',
      definicion: 'Herramienta gratuita con 150 imágenes diarias. Ofrece mucho control sobre estilo, paleta y composición.',
      ejemplo: 'Eliges un modelo, pasas el prompt y ajustas parámetros como aspect ratio y nivel de detalle.',
      emoji: '🦁'
    },
    {
      termino: 'Microsoft Designer',
      definicion: 'Integra IA con composición de portadas. Permite combinar imagen generada con texto editorial gratis.',
      ejemplo: 'Generas una imagen y la pones como fondo de una portada con el título de tu libro, todo en la misma herramienta.',
      emoji: '🎯'
    },
    {
      termino: 'Prompt para imagen',
      definicion: 'Distinto al prompt de texto. Importan descriptores visuales: estilo, paleta, composición, atmósfera.',
      ejemplo: '"Portada minimalista, acuarela, paleta verde y dorado, cinematic light, atmósfera contemplativa, sin texto."',
      emoji: '🖼️'
    },
    {
      termino: 'Estética por herramienta',
      definicion: 'Cada generador tiene su huella visual. Probar 2-3 antes de decidir cuál se ajusta mejor al libro.',
      ejemplo: 'Mismo prompt en Bing, Leonardo e Ideogram da 3 estéticas distintas. Elige la que dialogue con tu libro.',
      emoji: '🔬'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Generas portadas con criterio profesional?',
      instrucciones: '5 preguntas para verificar que dominas las herramientas y el prompt visual.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas herramientas es gratuita y basada en DALL-E 3?',
          opciones: [
            'Photoshop',
            'Bing Image Creator',
            'Word',
            'WhatsApp'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Bing Image Creator usa DALL-E 3 con cuenta Microsoft, gratis.',
          feedbackIncorrecto: 'Es Bing Image Creator (bing.com/images/create). Gratis, basado en DALL-E 3.'
        },
        {
          enunciado: '¿Qué importa más en un prompt para imagen?',
          opciones: [
            'La gramática perfecta',
            'Descriptores visuales (estilo, paleta, composición, atmósfera)',
            'El idioma latín',
            'El tamaño de letra'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. El prompt visual gira en torno a descriptores visuales, no en narrativa larga.',
          feedbackIncorrecto: 'Importan los descriptores visuales: estilo, paleta, composición, atmósfera, encuadre.'
        },
        {
          enunciado: '¿Por qué conviene probar 2-3 herramientas antes de decidir?',
          opciones: [
            'Para perder tiempo',
            'Porque cada herramienta tiene su estética propia',
            'Porque son todas iguales',
            'Porque es obligatorio'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Cada herramienta tiene huella visual; probar varias permite elegir la que más dialoga con el libro.',
          feedbackIncorrecto: 'Cada herramienta tiene estética distinta. Probar 2-3 permite elegir la mejor para tu libro.'
        },
        {
          enunciado: '¿Qué término sirve para describir atmósfera dramática en un prompt visual?',
          opciones: [
            'bonita',
            'moody / cinematic',
            'bueno',
            'normal'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. "Moody" o "cinematic" son descriptores estándar que entienden los generadores.',
          feedbackIncorrecto: 'Términos como "moody" o "cinematic" funcionan mucho mejor que adjetivos vagos como "bonita".'
        },
        {
          enunciado: 'Antes de usar la portada generada comercialmente, ¿qué hay que revisar?',
          opciones: [
            'Nada',
            'Los términos de uso de la herramienta',
            'El idioma de la imagen',
            'El precio'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Cada herramienta tiene sus condiciones. Hay que leer antes de comercializar.',
          feedbackIncorrecto: 'Hay que leer los términos de uso. Algunas herramientas exigen atribución o limitan uso comercial.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi portada anticipa con honestidad el contenido, o promete algo que el libro no cumple?',
    transferencia: 'Llega con tu portada definitiva, las 3 versiones probadas y la declaración del modelo.',
    cierre: 'Al terminar podrás: (1) identificar las 3-4 herramientas gratuitas de IA generativa de imagen más útiles y sus diferencias de estilo; (2) aplicar los descriptores visuales correctos para construir prompts de imagen efectivos; (3) crear 3 versiones de portada con prompts distintos…'
  },
  saberAncestral: {
    saber: 'En la carrera 5 del centro de Cartago, en los talleres de pintura de carteles que sostuvieron la comunicación visual del pueblo antes de las imprentas digitales, había un personaje que cualquier comerciante del barrio recuerda: el pintor de carteles. Cuando alguien quería anunciar tienda, velorio, fiesta patronal o publicación nueva, iba al pintor con la idea. El pintor nunca tomaba el pincel y empezaba. Tenía un ritual previo silencioso: bocetaba 3 versiones a lápiz. Primera versión: idea visual obvia. Segunda: variación con cambio de composición. Tercera: algo distinto, atrevido, inesperado. Ponía los 3 bocetos sobre la mesa, llamaba al cliente, pedía que escogiera. El cliente miraba, comentaba, a veces decía "mezcla la 1 con la 3". Solo después de la elección, el pintor tomaba el pincel. La sabiduría era simple: una sola idea visual rara vez es la mejor; 3 versiones permiten elegir con criterio. La portada con IA generativa es ese boceto multiplicado por 100. Pero el oficio del editor (elegir, decidir, firmar) sigue siendo humano.',
    preguntaPuente: '¿Qué sabía el pintor de carteles al bocetar 3 versiones antes de pintar la definitiva, que el usuario novato de DALL-E olvida cuando acepta la primera imagen que sale? ¿Y por qué el prompt para imagen requiere descriptores visuales en lugar de instrucciones narrativas?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una portada que representa al libro con dignidad respeta al lector; una que engaña visualmente lo manipula.',
      preguntaEspejo: '¿Mi portada anticipa con honestidad el contenido, o promete algo que el libro no cumple?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Lo simple comunica; lo recargado distrae. La virtud visual está en lo que se quita.',
      preguntaEspejo: '¿Mi portada tiene solo lo esencial, o agregué cosas que se pueden quitar sin perder mensaje?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Declarar el uso de IA en la portada es transparencia editorial moderna; ocultarlo es fraude visual.',
      preguntaEspejo: '¿Mi declaración del modelo IA es transparente, o intenté ocultarlo para parecer más "auténtico"?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 3-4 herramientas gratuitas de IA generativa de imagen más útiles y sus diferencias de estilo; (2) aplicar los descriptores visuales correctos para construir pro…',
    emocional: 'Es tentador llenar la portada con elementos para que se vea "profesional".',
    ciudadana: 'La portada es el primer contacto del lector con el libro.',
    local: 'Antes de cerrar, mira la portada desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de IA generativa, declarar que la portada fue creada con asistencia de IA es práctica ética emergente.'
  }
};

export default contenido;
