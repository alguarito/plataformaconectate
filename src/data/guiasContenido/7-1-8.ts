/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 8
 * (sesión global 8).
 *
 * Auto-generado desde content/guias/7/7-1-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 8,
  titulo: 'Versiones e historial — el sistema recuerda todo lo que escribiste',
  resumen: 'El historial de versiones es una función automática de OneDrive (y de Google Drive, y de la mayoría de servicios en la nube).',
  duracionMin: 90,
  subtema: 'Versiones e historial — el sistema recuerda todo lo que escribiste',
  preLectura: {
    porQueImporta: 'El producto es la auditoría + dibujo de la pantalla + 4 reglas firmadas.',
    preguntaDetonante: 'Estuviste 2 horas escribiendo un trabajo en línea. De repente borras por error un párrafo importante y guardas sin querer. ¿Se perdió para siempre o hay forma de recuperarlo sin haber hecho copia manual?',
    activacion: {
      titulo: '4 casos comunes de pérdida',
      descripcion: 'Actividad 1 · ANALIZA — 4 casos comunes de pérdida (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: imaginas el caso de pérdida, aprendes a abrir el historial, restauras una versión, auditas tu archivo.',
      siguiente: 'Esta semana, abre el historial de versiones de al menos 2 archivos distintos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Historial de versiones',
      definicion: 'Función automática de OneDrive (y otros servicios en la nube) que guarda copias del archivo cada vez que se modifica. Te permite ver versiones anteriores y restaurarlas si lo necesitas. OneDrive guarda hasta 25 versiones durante 30 días.',
      ejemplo: 'Escribiste 3 párrafos, los borraste por error, guardaste sin querer. Abres el historial, ves la versión de hace 2 horas con los 3 párrafos. Restauras. Recuperaste todo.',
      emoji: '🕰️'
    },
    {
      termino: 'Restaurar versión',
      definicion: 'Acción de tomar una versión anterior del archivo y hacerla la versión actual. NO destruye las otras versiones: la actual que reemplazas pasa a ser una versión más en el historial. Reversible.',
      ejemplo: 'Restauras la versión del lunes (que tenía un párrafo importante). La versión del martes (donde lo habías borrado) ahora aparece como versión anterior. Puedes volver atrás si te arrepientes.',
      emoji: '↩️'
    },
    {
      termino: 'Historial vs Papelera',
      definicion: 'Historial: cambios DENTRO de un archivo que aún existe. Te permite restaurar partes que cambiaron. Papelera: archivos COMPLETOS que fueron borrados. Te permite recuperar archivos enteros en 30 días.',
      ejemplo: 'Borraste por error un párrafo de tu Word: usa el historial para recuperar el párrafo. Borraste el Word completo: usa la Papelera de OneDrive para restaurarlo.',
      emoji: '🗑️'
    },
    {
      termino: '4 reglas del historial responsable',
      definicion: 'Las normas para usar el historial sin causar más problemas: (1) lee la versión antes de restaurar, (2) guarda nota de qué hiciste, (3) no restaures muy atrás sin pensar (pierdes trabajo posterior), (4) el historial no reemplaza el backup manual para cosas críticas.',
      ejemplo: 'Antes de restaurar la versión de hace 2 semanas, lees: \'¿realmente quiero perder el trabajo de las últimas semanas?\' Si dudas, no restaures: copia las partes que necesitas y pégalas en la actual.',
      emoji: '📋'
    },
    {
      termino: 'Backup manual',
      definicion: 'Copia adicional que tú haces aparte del sistema automático. Para trabajos críticos (tesis, proyectos finales): además del historial automático de OneDrive, también copias el archivo a una USB o a otro servicio en la nube (Google Drive, Dropbox).',
      ejemplo: 'Para tu proyecto final de fin de año: el archivo vive en OneDrive (con historial) Y tienes copia en USB Y subiste copia a Google Drive. Doble o triple seguro para lo importante.',
      emoji: '💾'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar el historial de versiones?',
      instrucciones: '5 preguntas para verificar que dominas el historial y la restauración.',
      preguntas: [
        {
          enunciado: 'Borraste por error un párrafo importante de tu Word y guardaste. ¿Está perdido?',
          opciones: [
            'Sí, sin esperanza.',
            'No. Abro el historial de versiones de OneDrive, busco una versión anterior, copio el párrafo o restauro la versión completa.',
            'Solo si pagué premium.',
            'Solo si era una USB.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El historial de versiones es tu salvavidas. OneDrive guarda 25 versiones durante 30 días. Restauras o copias lo que necesites.',
          feedbackIncorrecto: 'OneDrive guarda historial automático. Abres Archivo → Información → Historial. Encuentras versión con el párrafo, lo copias y lo pegas. O restauras toda la versión.'
        },
        {
          enunciado: '¿Cuánto tiempo guarda OneDrive las versiones anteriores?',
          opciones: [
            '1 año.',
            'Hasta 25 versiones durante 30 días aproximadamente.',
            'Para siempre.',
            '1 hora.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. 25 versiones × 30 días. Después se borran las viejas. Para trabajos críticos (tesis), además del historial conviene tener backup manual.',
          feedbackIncorrecto: '25 versiones durante 30 días. Para lo crítico (proyecto final), backup manual adicional en USB o Google Drive. Doble seguro.'
        },
        {
          enunciado: 'Restauras una versión de hace 2 semanas. ¿Qué pasa con el trabajo de las últimas 2 semanas?',
          opciones: [
            'Se pierde para siempre.',
            'La versión actual (de las últimas 2 semanas) pasa a ser una versión más en el historial. Puedes volver si te arrepientes.',
            'Se mezclan automáticamente.',
            'El archivo se borra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Restaurar no destruye: solo reordena. La actual que reemplazas se convierte en versión anterior. Puedes ir y venir sin perder nada.',
          feedbackIncorrecto: 'Restaurar es reversible. La que era actual pasa a ser versión anterior. Tu trabajo de las 2 semanas sigue accesible en el historial. Es seguro experimentar.'
        },
        {
          enunciado: '¿Cuál es la diferencia entre HISTORIAL y PAPELERA en OneDrive?',
          opciones: [
            'Son lo mismo.',
            'Historial = versiones de un archivo que aún existe. Papelera = archivos completos borrados (recuperables 30 días).',
            'Historial solo en Word; Papelera solo en Excel.',
            'Papelera se borra cada hora.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Historial = cambios DENTRO del archivo. Papelera = archivo COMPLETO borrado. Las dos son herramientas distintas que se complementan.',
          feedbackIncorrecto: 'Historial: cambios DENTRO de un archivo activo. Papelera: archivos completos borrados (30 días para restaurar). Las dos te protegen pero en distintos escenarios.'
        },
        {
          enunciado: 'Tu compañero (con permiso editor) borró sin querer toda tu sección del trabajo grupal. ¿Qué haces?',
          opciones: [
            'Me enojo y le digo al profe.',
            'Abro el historial, encuentro la versión donde mi sección estaba, restauro o copio mi sección desde ahí.',
            'Reescribo todo desde cero.',
            'Borro el archivo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. El historial salva trabajo perdido por errores ajenos. Restauras o copias la parte borrada. Después hablas con el compañero sobre los cuidados al editar.',
          feedbackIncorrecto: 'Historial al rescate. Restauras o copias tu sección desde una versión anterior. La coautoría se vuelve segura cuando sabes que nada se pierde permanentemente.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprovechando el archivo automático que OneDrive me da, o lo ignoro?',
    transferencia: 'Esta semana, abre el historial de versiones de al menos 2 archivos distintos.',
    cierre: 'Al terminar la clase: (1) podrás identificar qué es el historial de versiones y cómo se accede; (2) sabrás aplicar la restauración de una versión anterior; (3) podrás evaluar cuándo usar el historial vs hacer copia manual; (4) habrás auditado el historial de uno de tus archivos.'
  },
  saberAncestral: {
    saber: 'En el taller de doña Carmen la costurera del Valle del Cauca, había una costumbre estricta: nunca botar las piezas viejas. Cuando un cliente le pedía un vestido a doña Carmen y después del primer corte cambiaba de idea ("mejor más largo", "mejor mangas cortas"), ella guardaba TODOS los pedazos cortados. Si después al cliente se le ocurría "no, mejor sí lo quería corto", doña Carmen no tenía que empezar de cero: "Aquí está el pedazo, lo volvemos a meter". Cada decisión tenía marcha atrás. Esa virtud — guardar lo que se ha hecho para poder regresar a versiones anteriores — es exactamente lo que hace OneDrive con tus archivos. Cada vez que guardas un cambio, no se borra el anterior: queda una versión nueva, y la anterior queda guardada por si te arrepientes. En el campo se llamaba "no botar las piezas". En digital se llama "historial de versiones".',
    preguntaPuente: 'Estuviste 2 horas escribiendo un trabajo en línea. De repente borras por error un párrafo importante y guardas sin querer. ¿Se perdió para siempre o hay forma de recuperarlo sin haber hecho copia manual?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la memoria y la justicia)',
      lente: 'lente del nosotros',
      cita: '"Lo que se guarda se puede defender. Lo que se borra sin registro, no."',
      preguntaEspejo: '¿Estoy aprovechando el archivo automático que OneDrive me da, o lo ignoro?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que documentaba sus decisiones)',
      lente: 'lente del cuidado interior',
      cita: '"Quien registra su trabajo no teme el olvido. Quien no registra, depende de la memoria, que es traidora."',
      preguntaEspejo: '¿Confío más en mi memoria que en mis archivos, sabiendo que la memoria falla?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era del archivo digital)',
      lente: 'lente de la infoesfera',
      cita: '"El historial automático es la promesa de la nube: que tu trabajo no depende de tu propia disciplina perfecta. La nube te perdona errores."',
      preguntaEspejo: '¿Voy a aprovechar el perdón automático de la nube, o seguir trabajando con miedo a perder?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar qué es el historial de versiones y cómo se accede; (2) sabrás aplicar la restauración de una versión anterior; (3) podrás evaluar cuándo usar el historial…',
    emocional: 'Marco Aurelio escribía sus reflexiones diarias en un cuaderno (Meditaciones).',
    ciudadana: 'Hay culturas que guardan todo lo que escriben (archivos de tribunales, actas de juntas, cartas familiares) y culturas que botan sin registro.',
    local: 'Antes de salir, verifica que puedes navegar entre versiones y restaurar una.',
    intergeneracional: 'Antes, si se te olvidaba guardar con Ctrl+G en Word de escritorio, perdías horas.'
  }
};

export default contenido;
