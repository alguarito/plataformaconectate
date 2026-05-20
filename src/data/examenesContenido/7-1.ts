/**
 * Contenido web del examen final · Grado 7 · Período 1
 *
 * Auto-generado desde content/examenes/7-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 7,
  periodo: 1,
  titulo: 'Examen final · Trabajo colaborativo en la nube',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Trabajo colaborativo en la nube',
    instrucciones: 'Practica con 25 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué es la minga del Valle del Cauca según la apertura (S1)?',
        opciones: [
          'Una fiesta del barrio sin trabajo.',
          'Un sistema de trabajo colaborativo donde 20-30 vecinos cosechan al tiempo, en surcos distintos, sin estorbarse, con reciprocidad.',
          'Una herramienta tecnológica reciente.',
          'Una marca de café del Valle.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La minga es trabajo colectivo paralelo con reciprocidad. La metáfora ancla el periodo: Microsoft 365 es la minga digital.',
        feedbackIncorrecto: 'La minga reúne 20-30 vecinos a trabajar al tiempo en una sola obra, sin estorbarse, con reciprocidad. Esa misma idea es la coautoría en la nube hoy.'
      },
      {
        enunciado: '¿Por qué la minga sigue siendo buena metáfora para Microsoft 365?',
        opciones: [
          'Porque ambos cuestan dinero.',
          'Porque comparten 4 ideas: trabajo paralelo, no estorbarse, organización y reciprocidad.',
          'Porque ambos se hacen los sábados.',
          'Porque ambos terminan con sancocho.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Las 4 ideas (paralelo, no estorbar, organización, reciprocidad) son la columna vertebral de la minga y de la coautoría digital.',
        feedbackIncorrecto: 'Las 4 ideas que se cruzan: trabajo paralelo + no estorbarse + organización + reciprocidad. La herramienta cambió (de canasta a Word); la sabiduría es la misma.'
      },
      {
        enunciado: '¿Qué es Microsoft 365?',
        opciones: [
          'Un solo programa para escribir.',
          'Una suite de aplicaciones en la nube (Word, Excel, PowerPoint, OneDrive, Teams, Outlook) que funcionan desde el navegador.',
          'Una marca de computador.',
          'Un sistema operativo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Microsoft 365 es un paquete de aplicaciones en la nube: Word, Excel, PowerPoint, OneDrive, Teams, Outlook. Trabajan desde el navegador y se sincronizan.',
        feedbackIncorrecto: 'Microsoft 365 es una suite (varias aplicaciones juntas) en la nube. No es un solo programa ni un sistema operativo. Su gracia es que el archivo vive en la nube, no en tu disco.'
      },
      {
        enunciado: '¿Cuál es la diferencia clave entre Office tradicional y Microsoft 365?',
        opciones: [
          'No hay diferencia, son lo mismo.',
          'Office tradicional vive en tu computador; Microsoft 365 vive en la nube y permite coautoría desde el navegador.',
          'Office tradicional es para niños; 365 para adultos.',
          '365 es solo para Mac.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La diferencia es dónde vive el archivo: en el disco local (Office) o en la nube con sincronización (365). El segundo permite coautoría real.',
        feedbackIncorrecto: 'Office tradicional = archivo en disco; 365 = archivo en nube + coautoría desde navegador. Ambos hacen Word, Excel, PowerPoint. La diferencia es la nube.'
      },
      {
        enunciado: '¿Qué es OneDrive?',
        opciones: [
          'Un disco duro externo físico.',
          'La nube personal asociada a tu cuenta de Microsoft (1 TB por estudiante en muchas licencias escolares).',
          'Una aplicación para hacer videos.',
          'Un buscador de internet.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. OneDrive es tu nube personal: 1 TB típico para cuenta escolar. Tus archivos viven allí y se sincronizan al computador, celular o navegador.',
        feedbackIncorrecto: 'OneDrive = nube personal de Microsoft. No es disco físico ni un programa para videos. Es donde viven tus archivos del estudio, sincronizados en todos tus dispositivos.'
      },
      {
        enunciado: 'Tu laptop personal se daña la noche antes de entregar una tarea importante. Si tenías el archivo en OneDrive, ¿qué pasa?',
        opciones: [
          'Pierdes la tarea, hay que rehacerla.',
          'El archivo está sano en OneDrive: lo abres desde otro computador, celular o el navegador y lo entregas.',
          'El archivo se borra automáticamente.',
          'Solo lo recupera un técnico.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Esa es la magia de la nube: el archivo no depende de tu computador. Se accede desde cualquier dispositivo con tu cuenta.',
        feedbackIncorrecto: 'Si el archivo está en OneDrive, el computador es solo una ventana. Entras desde el navegador en otro equipo, lo descargas o lo entregas directo. La nube es respaldo automático.'
      },
      {
        enunciado: '¿Cuál es la principal ventaja de usar Word, Excel o PowerPoint en línea (en el navegador)?',
        opciones: [
          'Tienen más funciones que la versión de escritorio.',
          'Permiten que varios editen el mismo archivo al tiempo (coautoría) sin instalarse en el computador.',
          'Son siempre más rápidos.',
          'Solo funcionan con internet por cable.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. La versión en línea es la puerta a la coautoría: 2-3 personas editando al tiempo desde el navegador. Tiene menos funciones avanzadas que escritorio pero gana en colaboración.',
        feedbackIncorrecto: 'La versión en línea permite coautoría real desde navegador sin instalar nada. Las versiones de escritorio tienen más funciones, pero la web tiene la ventaja de colaboración instantánea.'
      },
      {
        enunciado: 'Vas a compartir un Word con tu equipo. ¿Qué permiso le das a tus 2 compañeros que van a redactar contigo?',
        opciones: [
          'Solo lectura: que vean pero no escriban.',
          'Edición: que puedan escribir y editar el documento.',
          'Comentarios: que solo puedan poner notas pero no editar.',
          'Ninguno, mejor no compartir.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Si van a redactar contigo, necesitan Edición. Si fueran solo revisores, sería Comentarios. Si fueran solo lectores, Lectura.',
        feedbackIncorrecto: '3 permisos: Lectura (solo ver), Comentarios (ver + comentar sin editar), Edición (todo). Para coautores activos: edición. Para revisores: comentarios. Para audiencia: lectura.'
      },
      {
        enunciado: 'Tu profe te pide compartir un documento "con permiso de comentarios pero no de edición". ¿Por qué crees que pide ese permiso específico?',
        opciones: [
          'Porque le gusta complicar.',
          'Porque quiere revisar y sugerir cambios sin alterar lo que tú escribiste; la versión que se entrega sigue siendo tuya.',
          'Porque no sabe usar la edición.',
          'Porque siempre comenta antes de leer.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Comentarios es perfecto para revisión: el revisor sugiere y opina sin tocar tu texto. Tú decides qué aceptar. Aprendizaje sin atropello.',
        feedbackIncorrecto: 'El permiso Comentarios mantiene tu autoría intacta y permite que el revisor (el profe) opine. Es el permiso ideal para revisión académica.'
      },
      {
        enunciado: '¿Qué es la coautoría asincrónica?',
        opciones: [
          'Dos personas editan al mismo segundo el mismo archivo.',
          'Varias personas editan el mismo archivo, pero en momentos distintos, sin pelear por el archivo ni perder cambios.',
          'Solo una persona puede editar a la vez.',
          'Edición que se hace solo de noche.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Asincrónica = en momentos distintos. Cada uno entra a su ritmo, edita su parte, guarda. Microsoft 365 fusiona los cambios automáticamente.',
        feedbackIncorrecto: 'Asincrónica = no al mismo tiempo. Cada coautor entra cuando puede y edita. La nube guarda los cambios y no pelean por el archivo. Es lo más usado en equipos reales.'
      },
      {
        enunciado: 'Sara está editando el Word a las 3 pm. Tú entras a las 7 pm a la misma sección. ¿Qué pasa?',
        opciones: [
          'Pierdes los cambios de Sara.',
          'Ves sus cambios ya guardados (estaba a las 3, ya cerró); editas sobre lo último.',
          'El archivo se daña.',
          'Hay que pedir permiso por chat.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Sara guardó al cerrar; el archivo en nube tiene su versión última. Tú abres y editas sobre lo último. Asincronía limpia.',
        feedbackIncorrecto: 'Microsoft 365 sincroniza al guardar. Cuando entres a las 7 verás lo último de Sara. Editas sobre eso. Sin pelear por archivos ni perder versiones.'
      },
      {
        enunciado: '¿Qué herramienta usas para sugerir un cambio sin modificar el texto del compañero?',
        opciones: [
          'Borrar y reescribir directamente.',
          'Insertar un Comentario (pestaña Revisar → Nuevo comentario) con tu sugerencia.',
          'Mandarle WhatsApp.',
          'Cambiar el color de toda la página.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Insertar comentario es la forma profesional de sugerir cambios sin pisar el texto del compañero. El autor decide si acepta.',
        feedbackIncorrecto: 'Comentarios sirven para sugerir sin modificar. El autor lee, decide si acepta, y marca como resuelto. Respetar la autoría del otro es clave en coautoría.'
      },
      {
        enunciado: 'Un compañero pone un comentario en tu párrafo: "revisar gramática". ¿Qué haces?',
        opciones: [
          'Ignorarlo siempre.',
          'Leer, corregir si tiene razón, responder al comentario o marcarlo como resuelto.',
          'Borrar el comentario sin mirar.',
          'Borrar el documento por venganza.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Lees, corriges si aplica, respondes y marcas como resuelto. Es ciclo de revisión sano: alguien ayuda, tú agradeces editando.',
        feedbackIncorrecto: 'Ciclo correcto: leer → evaluar → corregir si aplica → responder al comentario → marcarlo como resuelto. Ignorar o borrar es cerrarse al aprendizaje.'
      },
      {
        enunciado: '¿Qué es el historial de versiones en Microsoft 365?',
        opciones: [
          'Una lista de los usuarios del archivo.',
          'Un registro automático de todas las versiones guardadas del archivo, que permite recuperar una versión anterior si algo se daña.',
          'Una papelera de archivos borrados.',
          'Un cuento sobre el archivo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El historial guarda copias automáticas. Si alguien borra o daña algo, puedes recuperar la versión previa con un par de clics.',
        feedbackIncorrecto: 'Historial = todas las versiones guardadas automáticamente. Útil cuando algo se daña: vas a Archivo → Historial, eliges una versión y la restauras.'
      },
      {
        enunciado: 'Tu compañera borra sin querer un párrafo importante en el Word del equipo. ¿Cuál es el camino correcto?',
        opciones: [
          'Reescribirlo de memoria a la carrera.',
          'Ir al Historial de versiones, restaurar la versión anterior con el párrafo, avisar al equipo con calma.',
          'Pelear con la compañera por chat.',
          'Borrar todo el documento.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Historial + comunicación con calma. Solución técnica + humana, no escándalo. Eso es trabajar en equipo en la nube.',
        feedbackIncorrecto: 'Historial recupera lo perdido. Después avisas con calma para que no vuelva a pasar ("oye, cuidado al editar, recuperé el párrafo del historial"). Sin escándalos.'
      },
      {
        enunciado: '¿Para qué sirve Outlook en la suite de Microsoft 365?',
        opciones: [
          'Para escribir documentos largos.',
          'Para gestionar correo, calendario y citas.',
          'Para editar fotos.',
          'Para jugar.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Outlook = correo + calendario + citas. Es la pieza de comunicación de M365: te avisa de reuniones, envía y recibe correos, organiza la agenda.',
        feedbackIncorrecto: 'Outlook es correo + calendario + citas. Es a Microsoft 365 lo que Gmail+Calendar es a Google. Permite comunicación formal y agenda compartida.'
      },
      {
        enunciado: 'Tu equipo de 3 va a hacer una reunión virtual de 30 minutos para alinear el proyecto. ¿Qué herramienta de M365 usas?',
        opciones: [
          'PowerPoint.',
          'Microsoft Teams (videoconferencia, chat y compartir pantalla).',
          'Excel.',
          'OneDrive a secas.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Teams es la pieza de reunión virtual: video, chat, compartir pantalla. PowerPoint es para presentaciones, no para conectar voz/video.',
        feedbackIncorrecto: 'Teams = videoconferencia + chat + compartir pantalla + grabar reunión. Es la herramienta para reunirse virtual. PowerPoint, Word y Excel son archivos, no reunión.'
      },
      {
        enunciado: 'Tu profe te invita a una reunión por Teams. ¿Cómo te aceptas la invitación correctamente?',
        opciones: [
          'Ignorar la invitación.',
          'Abrir el correo (Outlook), aceptar la invitación; se agrega al calendario; el día de la reunión, hacer clic en el enlace de Teams.',
          'Llamar al profe por teléfono.',
          'Esperar a que el profe te recuerde.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Aceptar en Outlook → se agrega al calendario → clic al enlace el día de la reunión. Es flujo formal.',
        feedbackIncorrecto: 'Flujo: aceptar en Outlook → se agenda → el día, clic al enlace de Teams. Aceptar la invitación es cortesía profesional y confirma asistencia.'
      },
      {
        enunciado: 'Vas a sustentar tu proyecto colaborativo del periodo. ¿Cuál estructura es la más profesional?',
        opciones: [
          'Hablo de lo que se me ocurra.',
          '5 min con 4 partes: 1 min reto + 2 min producto colaborativo + 1 min cómo trabajamos (división, comentarios, historial) + 1 min cierre.',
          'Solo leo el documento entero.',
          'Solo dice el nombre del equipo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 4 partes en 5 minutos: reto + producto + proceso + cierre. Estructura clara comunica trabajo serio, no improvisación.',
        feedbackIncorrecto: 'Estructura profesional en 5 min: reto (1) + producto (2) + proceso colaborativo (1) + cierre (1). Mostrar el cómo (división, comentarios, historial) vale tanto como el qué.'
      },
      {
        enunciado: 'Tu equipo termina el proyecto pero un compañero hizo el 80% del trabajo y los otros 2 muy poco. ¿Qué dice la rúbrica de trabajo colaborativo?',
        opciones: [
          'Está bien, no importa quién hizo qué.',
          'Un proyecto colaborativo desigual no cumple la rúbrica: la nota baja, y el aprendizaje principal (trabajar como minga) no se logró.',
          'El compañero que más hizo merece toda la nota.',
          'Hay que castigar a los otros dos.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Coautoría desigual no cumple el aprendizaje del periodo. La rúbrica baja la nota porque la idea no era "alguien lo hace por mí". La minga es paralela y recíproca.',
        feedbackIncorrecto: 'Coautoría desigual no es coautoría. La rúbrica baja la nota porque el aprendizaje (trabajar como minga) no se logró. El historial muestra quién aportó qué.'
      },
      {
        enunciado: '¿Cuál de estas afirmaciones sobre Word, Excel y PowerPoint en línea es FALSA?',
        opciones: [
          'Permiten coautoría desde el navegador.',
          'Sus archivos se guardan automáticamente en OneDrive.',
          'Tienen exactamente las mismas funciones que las versiones de escritorio.',
          'Son gratis con cuenta escolar de M365.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. La versión web tiene MENOS funciones avanzadas que la de escritorio (faltan opciones de combinación de correspondencia, macros avanzadas, etc.). Pero gana en colaboración.',
        feedbackIncorrecto: 'La web tiene menos funciones avanzadas que escritorio (macros, opciones avanzadas, etc.). Su ventaja real es coautoría en tiempo real desde cualquier navegador.'
      },
      {
        enunciado: 'Estás en la sala de sistemas. Tu cuenta escolar tiene Microsoft 365. ¿Cómo accedes a tu OneDrive desde el navegador?',
        opciones: [
          'Descargas una app rara.',
          'Entras a office.com, inicias sesión con tu cuenta institucional y haces clic en OneDrive.',
          'Llamas al técnico.',
          'Pides clave a un compañero.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. office.com + cuenta institucional + clic en el ícono de OneDrive. Es el flujo estándar para acceder desde cualquier navegador.',
        feedbackIncorrecto: 'office.com → sesión con cuenta escolar → ícono OneDrive. Ese es el portal estándar. No descargas nada raro ni pides clave a otros (nunca compartas tu clave).'
      },
      {
        enunciado: 'Un compañero te pide que le des permiso de edición a un primo suyo que no es del colegio. ¿Qué haces aplicando criterio de S5?',
        opciones: [
          'Le doy edición porque me lo pidieron.',
          'Niego o consulto al profe: el archivo escolar lo edita el equipo escolar, no externos sin permiso.',
          'Le doy edición y borro la cuenta del compañero.',
          'Lo ignoro y no respondo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Criterio: archivos escolares = equipo escolar. Externos sin permiso, no entran. Si hay duda, se consulta al profe. Permisos no es regalo automático.',
        feedbackIncorrecto: 'Permisos se cuidan: archivos escolares se editan dentro del equipo escolar. Externos sin permiso, no entran. Si hay duda válida, se consulta al profe antes.'
      },
      {
        enunciado: 'Vas a dividir el trabajo entre 3 coautores en un Word. ¿Cuál estrategia es la más limpia?',
        opciones: [
          'Todos editan donde se les ocurra y veremos al final.',
          'Cada uno toma una sección distinta (intro, cuerpo, cierre); usamos comentarios para sugerencias; revisión final juntos.',
          'Uno solo hace todo.',
          'Hacemos 3 archivos separados y los uniremos a mano.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. División por secciones + comentarios para sugerencias + revisión final = coautoría limpia. Como en la minga: cada uno en su surco, todos en una sola obra.',
        feedbackIncorrecto: 'División por secciones, comentarios para sugerir, revisión final juntos. Esa es la coautoría que aprovecha M365. Editar caóticamente o hacer archivos separados anula la ventaja.'
      },
      {
        enunciado: '¿Qué significa que OneDrive "sincroniza" tus archivos?',
        opciones: [
          'Que los borra cada noche.',
          'Que mantiene la misma versión del archivo actualizada en la nube y en todos tus dispositivos conectados a tu cuenta.',
          'Que solo funciona en uno.',
          'Que te cobra cada vez.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Sincronizar = mantener todas las copias iguales. Si edito en el celular, al rato veo el cambio en el computador. La nube es el "punto único de verdad".',
        feedbackIncorrecto: 'Sincronizar significa que la versión más reciente está en todos lados (nube + dispositivos). Editas en uno, aparece en los otros. Sin sincronizar, tendrías versiones distintas.'
      }
    ]
  }
};

export default contenido;
