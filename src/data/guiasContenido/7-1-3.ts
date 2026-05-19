/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/7/7-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 3,
  titulo: 'OneDrive — mi nube personal y mi cuarto de archivos',
  resumen: 'OneDrive es la nube personal que Microsoft te da con tu cuenta institucional.',
  duracionMin: 90,
  subtema: 'OneDrive — mi nube personal y mi cuarto de archivos',
  preLectura: {
    porQueImporta: 'El producto es OneDrive activo + 6 carpetas + 2 archivos + dibujo del árbol.',
    preguntaDetonante: 'Si tu casa se incendia mañana y se quema tu computador, ¿qué pasaría con tus tareas del año? ¿Las has guardado solo en el disco local, o tienes copia en algún lugar?',
    activacion: {
      titulo: '4 casos de pérdida de archivos',
      descripcion: 'Actividad 1 · ANALIZA — 4 casos de pérdida de archivos (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: comparas nube vs disco duro, activas OneDrive, creas la estructura, subes archivos.',
      siguiente: 'Esta semana, abre OneDrive al menos 3 veces desde dispositivos distintos (en el cole, en casa, en celular).'
    }
  },
  conceptosClave: [
    {
      termino: 'OneDrive',
      definicion: 'Servicio de almacenamiento en la nube de Microsoft. Te da 1 TB de espacio para guardar archivos. Vienen incluidos con tu cuenta institucional. Tus archivos viven en servidores remotos, no en tu computador.',
      ejemplo: 'Cuando guardas un Word en línea, va automáticamente a OneDrive. Lo puedes abrir desde cualquier computador iniciando sesión con tu cuenta institucional.',
      emoji: '☁️'
    },
    {
      termino: 'Nube vs disco local',
      definicion: 'El disco duro guarda archivos en el computador físico. La nube los guarda en servidores remotos. Diferencia clave: si pierdes el computador, los archivos locales se pierden; los de la nube siguen vivos.',
      ejemplo: 'Si guardas tu tarea solo en el disco y se daña el computador, pierdes la tarea. Si la guardaste en OneDrive, sigue ahí y la abres desde cualquier otro PC.',
      emoji: '💾'
    },
    {
      termino: 'Sincronización',
      definicion: 'El proceso automático que mantiene los mismos archivos en varios dispositivos. Si editas un Word en el computador del cole, segundos después también está editado cuando lo abres en casa. La sincronización es invisible pero clave.',
      ejemplo: 'Empiezas un trabajo en el computador del cole. Llegas a casa, abres OneDrive, el archivo está ahí actualizado. No tuviste que copiar nada manualmente: OneDrive sincroniza solo.',
      emoji: '🔄'
    },
    {
      termino: 'Backup (copia de seguridad) automático',
      definicion: 'OneDrive guarda cada cambio en la nube automáticamente. Si tu disco duro falla, los archivos están vivos en la nube. Si borras algo por accidente, hay 30 días para recuperarlo de la papelera de OneDrive.',
      ejemplo: 'Borras por error tu tarea de OneDrive. Vas a la \'Papelera\' (en OneDrive), la encuentras, clic derecho \'Restaurar\'. Vuelve a su carpeta. 30 días de oportunidad para recuperar.',
      emoji: '🛡️'
    },
    {
      termino: 'Cuenta institucional',
      definicion: 'Cuenta de Microsoft 365 que el colegio te da. Termina en @[nombrecolegio].edu.co. Te da acceso gratis a OneDrive (1 TB), Word, Excel, PowerPoint, Outlook, Teams. Es seria, no es como un correo personal.',
      ejemplo: 'Tu cuenta puede ser lcardenas@sormariajuliana.edu.co. Con ella entras a office.com, abres OneDrive, todas las apps gratis. Vence cuando te gradúas.',
      emoji: '🎓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces OneDrive y la nube?',
      instrucciones: '5 preguntas para verificar que entiendes qué es la nube y cómo protege tus archivos.',
      preguntas: [
        {
          enunciado: 'Tu computador se daña. Habías guardado todas tus tareas SOLO en el disco local. ¿Qué pasa?',
          opciones: [
            'Las tareas se mantienen, los discos siempre se recuperan.',
            'Pierdes todas las tareas si no tenías copia en la nube.',
            'Microsoft las recupera por arte de magia.',
            'Las tareas saltan a otro computador automáticamente.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Si no había copia en la nube (OneDrive) ni en USB ni en disco externo, las tareas se perdieron. Por eso OneDrive es tan importante: backup automático.',
          feedbackIncorrecto: 'Sin backup en la nube, las tareas se pierden. OneDrive es la solución: guarda automáticamente cada archivo. Empieza a usarlo desde hoy.'
        },
        {
          enunciado: 'Estás en casa y necesitas la tarea que hiciste en el computador del colegio. ¿Cómo la abres?',
          opciones: [
            'Imposible, está en el cole.',
            'Voy a office.com, inicio sesión con mi cuenta institucional, abro OneDrive, ahí está la tarea.',
            'Llamo al colegio para que me la manden.',
            'Me toca rehacerla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Esa es la magia de la nube: tus archivos viajan contigo (no físicamente; viven en la nube). Abres desde cualquier dispositivo con tu cuenta.',
          feedbackIncorrecto: 'office.com + cuenta institucional + OneDrive = tus archivos donde sea. La nube hace que tu mundo digital no dependa de un computador específico.'
        },
        {
          enunciado: 'Borraste por accidente un archivo de OneDrive. ¿Está perdido?',
          opciones: [
            'Sí, totalmente perdido.',
            'Tienes 30 días para recuperarlo desde la Papelera de OneDrive.',
            'Microsoft te llama por teléfono.',
            'Hay que rehacerlo todo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Papelera de OneDrive guarda lo borrado 30 días. Click derecho en el archivo → Restaurar. Recuperación rápida sin estrés.',
          feedbackIncorrecto: '30 días en la Papelera de OneDrive para restaurar. Es como la papelera de Windows pero más generosa. Restaurar es 1 clic.'
        },
        {
          enunciado: 'Tu cuenta institucional te da... (escoge lo más completo)',
          opciones: [
            'Solo correo.',
            'Word, Excel, PowerPoint, OneDrive (1 TB), Outlook, Teams, Forms gratis.',
            'Solo Word.',
            'Nada, hay que pagar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Tu cuenta institucional te da Microsoft 365 completo: las 8 apps + 1 TB de OneDrive. Aprovéchala mientras estés en el colegio.',
          feedbackIncorrecto: 'Cuenta institucional = paquete completo de Microsoft 365 + 1 TB de OneDrive. Aprovéchalo, fuera del colegio cuesta mucho dinero.'
        },
        {
          enunciado: 'Estás organizando carpetas en OneDrive. ¿Qué nombre es MEJOR?',
          opciones: [
            'Mis Documentos del Año Pasado',
            'Mis-documentos',
            'MIS DOCUMENTOS',
            'xyz'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Mis-documentos sigue las 5 reglas: sin espacios (usa guion), sin acentos, claro, profesional. Las otras opciones violan reglas.',
          feedbackIncorrecto: 'Mis-documentos: sin espacios (guion), sin acentos, claro. Las URLs no se rompen, los profesores entienden, tu yo de un año después lo encuentra.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprovechando mi espacio propio o sigo dejando mis archivos dispersos?',
    transferencia: 'Esta semana, abre OneDrive al menos 3 veces desde dispositivos distintos (en el cole, en casa, en celular).',
    cierre: 'Al terminar la clase: (1) podrás identificar las 5 ventajas de la nube; (2) sabrás aplicar las 5 reglas de nombrado (de G6·P2·S7) en OneDrive; (3) podrás evaluar si una estructura de carpetas está bien diseñada; (4) habrás creado tu OneDrive activo con 6 carpetas + 2 archivos.'
  },
  saberAncestral: {
    saber: 'Doña Carmen la costurera del barrio Cartago tenía un cuarto especial en su casa: el cuarto de las telas. En una casa tradicional del Valle del Cauca, cuando uno entraba a su taller, lo primero que mostraba era el cuarto de telas: tela blanca para uniformes, tela floreada para vestidos, tela negra para sotanas, tela impermeable para gabanes. "Cada tela en su estante, cada estante con su etiqueta", decía doña Carmen. ¿Por qué tanta organización? Porque cuando llegaba un cliente a las 7 de la mañana pidiendo "hágame un vestido de fiesta", ella iba derecho al estante de tela floreada, no perdía tiempo buscando. Si todo hubiera estado amontonado, habría pasado 30 minutos buscando antes de empezar a coser. Hoy tu equivalente al cuarto de telas es OneDrive: el espacio donde guardas tus archivos en orden. Si lo organizas bien desde el principio, encuentras todo en segundos. Si lo dejas amontonado, pierdes archivos importantes y vuelves a hacerlos.',
    preguntaPuente: 'Si tu casa se incendia mañana y se quema tu computador, ¿qué pasaría con tus tareas del año? ¿Las has guardado solo en el disco local, o tienes copia en algún lugar?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del territorio propio)',
      lente: 'lente del nosotros',
      cita: '"Tener tu propio espacio — físico o digital — es la primera forma de soberanía."',
      preguntaEspejo: '¿Estoy aprovechando mi espacio propio o sigo dejando mis archivos dispersos?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que valoraba la disciplina del orden)',
      lente: 'lente del cuidado interior',
      cita: '"Lo que está ordenado por fuera ahorra el desorden interior. El espacio organizado da paz a la mente."',
      preguntaEspejo: '¿Cuánta energía mental ahorraría si tuviera mi mundo digital ordenado?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era de la nube)',
      lente: 'lente de la infoesfera',
      cita: '"La nube no te da más espacio. Te da más libertad para llevar tu espacio a donde vayas."',
      preguntaEspejo: '¿Cómo cambiaría mi vida si llevara mi mundo digital conmigo a todas partes?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 5 ventajas de la nube; (2) sabrás aplicar las 5 reglas de nombrado (de G6·P2·S7) en OneDrive; (3) podrás evaluar si una estructura de carpetas está bie…',
    emocional: 'Cuando entres a OneDrive y veas tu árbol de carpetas bien organizado, vas a sentir algo: paz.',
    ciudadana: 'Hasta antes de OneDrive, tus archivos vivían en el computador del colegio o en la USB que prestabas a un amigo o en un Drive ajeno.',
    local: 'Antes de salir, abre tu OneDrive desde otro computador (o celular) para verificar que está sincronizado.',
    intergeneracional: 'Antes, para acceder a tus archivos tenías que llevarte el computador o la USB.'
  }
};

export default contenido;
