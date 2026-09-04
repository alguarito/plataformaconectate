/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/6/6-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 2,
  titulo: '¿Qué es un procesador de texto? — mi primera página escrita en digital',
  resumen: 'Un procesador de texto es un programa para escribir documentos en el computador.',
  duracionMin: 90,
  subtema: '¿Qué es un procesador de texto? — mi primera página escrita en digital',
  preLectura: {
    porQueImporta: 'El producto es ese documento guardado + el resumen en cuaderno.',
    preguntaDetonante: 'Si te pidieran escribir 3 párrafos sobre tu equipo de fútbol favorito o sobre una tradición de tu familia, ¿lo escribirías en cuaderno o en computador? ¿Hay diferencia entre los dos? ¿Cuál?',
    activacion: {
      titulo: 'Comparar los 3 procesadores',
      descripcion: 'Actividad 1 · IDENTIFICA — Comparar los 3 procesadores (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: comparas los 3 procesadores, aprendes los 5 pasos para escribir y guardar, escoges tu tema, y creas tu documento real.',
      siguiente: 'Esta semana, abre tu primer documento al menos 2 veces más para releerlo y mejorarlo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Procesador de texto',
      definicion: 'Programa para escribir y dar formato a documentos digitales. Los más usados son Microsoft Word (de pago, en colegios suele ser gratis), Google Docs (gratis, en la nube) y LibreOffice Writer (gratis, instalable).',
      ejemplo: 'Si tu profe te pide entregar una tarea escrita, abres Word o Docs, escribes los párrafos, le das formato y entregas. Eso es procesar texto.',
      emoji: '📝'
    },
    {
      termino: 'Microsoft Word',
      definicion: 'El procesador de texto más usado en el mundo. Parte de Microsoft Office 365. Suele tener licencia gratis para estudiantes en colegios. Funciona sin internet y guarda en tu disco duro.',
      ejemplo: 'En la sala de sistemas del colegio probablemente está instalado Word. Abres, escribes, guardas con Ctrl+G en tu carpeta de Documentos.',
      emoji: '🔵'
    },
    {
      termino: 'Google Docs',
      definicion: 'Procesador de texto gratuito de Google. Funciona en el navegador con internet, y guarda en Google Drive (la nube). Permite escribir en grupo: varios pueden estar en el mismo documento al mismo tiempo.',
      ejemplo: 'Para una tarea en grupo, abres Docs, compartes el link con 3 compañeros, todos escriben a la vez en sus casas. Ahorra mucho tiempo.',
      emoji: '🟢'
    },
    {
      termino: 'Ctrl+G (o Ctrl+S)',
      definicion: 'El atajo de teclado para guardar el documento en español (Ctrl+G de Guardar) o en inglés (Ctrl+S de Save). Hay que guardar cada pocos minutos para no perder el trabajo si el computador se apaga.',
      ejemplo: 'Estás escribiendo y de repente se va la luz. Si guardaste hace 5 minutos con Ctrl+G, pierdes solo lo de los últimos 5 minutos. Si no guardaste, pierdes todo.',
      emoji: '💾'
    },
    {
      termino: 'Nombre del archivo',
      definicion: 'El nombre que le das al documento al guardarlo. Debe seguir las 5 reglas (sin espacios, sin acentos, claro, con fecha si aplica). Un buen nombre te ahorra horas de búsqueda en el futuro.',
      ejemplo: 'Bien: "2026-tarea-historia-medios.docx". Mal: "tarea final hjfdks.docx". El primero dice exactamente qué es y cuándo lo hiciste.',
      emoji: '🏷️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar un procesador de texto?',
      instrucciones: '5 preguntas para verificar que dominas crear, escribir y guardar tu primer documento.',
      preguntas: [
        {
          enunciado: '¿Cuál es la principal diferencia entre Word y Google Docs?',
          opciones: [
            'Word es más bonito que Docs.',
            'Docs es más complicado que Word.',
            'Son lo mismo, solo cambia el color.',
            'Word funciona sin internet y guarda en disco. Docs necesita internet y guarda en la nube.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Word: sin internet, guarda en tu disco. Docs: con internet, guarda en Drive. Cada uno conviene en situaciones distintas.',
          feedbackIncorrecto: 'Word: sin internet, guarda en disco. Docs: con internet, guarda en la nube. Por eso Docs te deja entrar desde cualquier computador con tu cuenta.'
        },
        {
          enunciado: 'Estás escribiendo en Word y se va la luz. ¿Qué pasa con tu documento?',
          opciones: [
            'Se guarda solo, no se pierde nada.',
            'Pierdes lo que no habías guardado con Ctrl+G.',
            'Word lo manda automáticamente al correo.',
            'El documento se vuelve invisible.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Si no guardaste con Ctrl+G, pierdes el trabajo desde el último guardado. Por eso la regla: guardar cada 5 minutos.',
          feedbackIncorrecto: 'Pierdes el trabajo no guardado. Guardar cada 5 minutos con Ctrl+G es la regla. Word tiene auto-guardado pero no es 100% confiable.'
        },
        {
          enunciado: 'Vas a hacer una tarea en grupo con 3 compañeros desde sus casas. ¿Cuál procesador conviene más?',
          opciones: [
            'Word, porque es el más completo.',
            'LibreOffice, porque es gratis.',
            'Google Docs, porque permite que varios escriban al mismo tiempo.',
            'Ningún procesador, mejor manuscrito.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Google Docs es perfecto para trabajos en grupo: todos en el mismo documento, ven en vivo lo que escriben los demás. Ahorra tiempo.',
          feedbackIncorrecto: 'Google Docs gana para trabajo en grupo: varios escriben a la vez, todos ven los cambios. Word colaborativo también existe (Office 365) pero menos común en colegio.'
        },
        {
          enunciado: '¿Cuál es el mejor nombre para tu documento de tarea de historia sobre la independencia?',
          opciones: [
            '2026-historia-independencia.docx',
            'tarea1.docx',
            'Mi tarea de historia 2026.docx',
            'documento.docx'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sigue las 5 reglas: sin espacios (guion), sin acentos, claro, con fecha. Tu yo del próximo año encuentra el archivo solo leyendo el nombre.',
          feedbackIncorrecto: 'El bueno es "2026-historia-independencia.docx". Sin espacios, sin acentos, claro, con fecha. "tarea1" no dice nada; "Mi tarea" tiene espacios.'
        },
        {
          enunciado: 'Doña Mercedes te diría que antes de escribir digital, hay que...',
          opciones: [
            'Encender el computador rápido.',
            'Buscar en Google y copiar.',
            'Tomar fotos del tema.',
            'Pensar y ordenar las ideas en el cuaderno primero.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Pensar primero, escribir después. Doña Mercedes lo decía hace 40 años; sigue siendo verdad. Lo digital sirve, pero el orden de las ideas viene antes.',
          feedbackIncorrecto: 'Primero piensas y ordenas en cuaderno. Después escribes en digital. El procesador no piensa por ti; eres tú quien organiza las ideas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy escribiendo con mi voz o con voces prestadas que aún no sé reconocer como mías?',
    transferencia: 'Esta semana, abre tu primer documento al menos 2 veces más para releerlo y mejorarlo.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 procesadores de texto más comunes; (2) sabrás aplicar los 5 pasos para crear, escribir y guardar un documento; (3) podrás distinguir entre escribir en computador y en cuaderno (cuándo conviene cada uno); (4) habrás creado tu prim…'
  },
  saberAncestral: {
    saber: 'Doña Mercedes era la maestra rural de la vereda La Plata, en Cartago, Valle del Cauca. Hace 40 años, no había computadores. En su escuelita de una sola aula, doña Mercedes enseñaba a los niños del campo a escribir: tomar el lápiz, formar las letras, juntar las palabras, ordenar las ideas en párrafos. Para ella escribir era "ordenar el pensamiento para que otros lo entiendan". Repetía a sus alumnos: "Mijo, antes de escribir, pensar. Antes de juntar las palabras, ordenar las ideas. Una hoja escrita con cuidado vale más que cien escritas con prisa.". Esa misma sabiduría sigue viviendo, pero ahora la escritura no es solo en cuaderno: también es digital, en programas que se llaman procesadores de texto. Aprender a usarlos no reemplaza el cuaderno (sigue siendo fundamental); lo complementa. Hoy doña Mercedes te enseña a escribir digital con el mismo cuidado con el que enseñaba a escribir en papel.',
    preguntaPuente: 'Si te pidieran escribir 3 párrafos sobre tu equipo de fútbol favorito o sobre una tradición de tu familia, ¿lo escribirías en cuaderno o en computador? ¿Hay diferencia entre los dos? ¿Cuál?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la palabra propia)',
      lente: 'lente del nosotros',
      cita: '"Escribir con tu voz, no con voz prestada. Esa es la primera disciplina del que aprende."',
      preguntaEspejo: '¿Estoy escribiendo con mi voz o con voces prestadas que aún no sé reconocer como mías?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Escribir es pensar despacio. Hablar es pensar rápido. Los dos son necesarios; el lento construye más."',
      preguntaEspejo: '¿Estoy aprovechando la escritura para pensar despacio, o solo escribo por obligación?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la escritura digital)',
      lente: 'lente de la infoesfera',
      cita: '"El procesador de texto no cambia qué es escribir. Cambia el ritmo, la facilidad de revisar, la capacidad de compartir. Lo demás es lo mismo de siempre."',
      preguntaEspejo: '¿Qué cosas escribo mejor en cuaderno y qué cosas escribo mejor en digital?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 procesadores de texto más comunes; (2) sabrás aplicar los 5 pasos para crear, escribir y guardar un documento; (3) podrás distinguir entre escribir e…',
    emocional: 'Hablamos todo el día sin pensar mucho.',
    ciudadana: 'Cuando empiezas a escribir digital, la tentación más grande es copiar de internet: hay millones de textos disponibles.',
    local: 'Antes de salir, verificas que tu documento abre cuando lo das clic, que tiene 3 párrafos y que está en la carpeta correcta.',
    intergeneracional: 'Algunas personas creen que escribir digital es "moderno" y escribir en cuaderno es "viejo".'
  }
};

export default contenido;
