/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/6/6-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 6,
  titulo: 'El sistema operativo — el gerente que coordina toda la máquina',
  resumen: 'El sistema operativo (SO) es el software más importante del computador.',
  duracionMin: 90,
  subtema: 'El sistema operativo — el gerente que coordina toda la máquina',
  preLectura: {
    porQueImporta: 'El producto es el dibujo del escritorio + tabla + opinión, firmado.',
    preguntaDetonante: 'Cuando prendes un computador, antes de que aparezca el escritorio, ves una pantalla que dice "Iniciando Windows" (o "Cargando macOS", o el logo del fabricante). ¿Qué está haciendo el computador en esos segundos? ¿Por qué no enciende y muestra todo de una vez?',
    activacion: {
      titulo: 'Reconoce 5 elementos del escritorio',
      descripcion: 'Actividad 1 · IDENTIFICA — Reconoce 5 elementos del escritorio (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: reconoces los 5 elementos del escritorio, aprendes las 5 funciones del SO, recorres un computador real (o lo dibujas), y firmas tu trabajo con opinión.',
      siguiente: 'Esta semana, cuando uses tu computador (o el celular), observa: ¿qué está haciendo el SO en cada momento?'
    }
  },
  conceptosClave: [
    {
      termino: 'Sistema operativo (SO)',
      definicion: 'El software más importante del computador. Es el "gerente" que coordina todo: hardware, programas, archivos, usuarios. Sin él, el computador no funciona como tal.',
      ejemplo: 'Windows, macOS, Linux, ChromeOS son SO de computador. Android y iOS son SO de celular. Todos coordinan lo demás aunque luzcan distintos.',
      emoji: '🎛️'
    },
    {
      termino: 'Escritorio (desktop)',
      definicion: 'El fondo grande que ves al encender el computador. Funciona como mesa de trabajo: ahí puedes poner íconos de acceso rápido a los programas y archivos que usas a menudo.',
      ejemplo: 'Cuando enciendes Windows aparece una imagen de fondo (sol, montaña, etc.) y unos íconos arriba. Eso es el escritorio.',
      emoji: '🖥️'
    },
    {
      termino: 'Barra de tareas',
      definicion: 'La tira horizontal (normalmente abajo) que muestra los programas que tienes abiertos en ese momento. Te permite saltar entre ellos con un clic.',
      ejemplo: 'Si tienes Chrome y Word abiertos al tiempo, ves dos íconos en la barra de tareas. Al hacer clic en uno cambias de programa al instante.',
      emoji: '📊'
    },
    {
      termino: 'Menú inicio',
      definicion: 'El botón Windows (abajo-izquierda) que abre una ventana con todas las apps instaladas, búsqueda y opción de apagar. Es la puerta principal del computador.',
      ejemplo: 'Si quieres abrir un programa que no está en el escritorio, vas al menú inicio, lo buscas y haces clic. Más rápido si lo escribes y aparece sugerido.',
      emoji: '🪟'
    },
    {
      termino: 'Papelera de reciclaje',
      definicion: 'El ícono de papelera donde van los archivos que borras. No se eliminan para siempre hasta que vacías la papelera. Es una segunda oportunidad ante errores.',
      ejemplo: 'Borras por error tu tarea. Vas a la papelera, la encuentras, haces clic derecho y eliges "Restaurar". Vuelve a su lugar original.',
      emoji: '🗑️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces el sistema operativo?',
      instrucciones: '5 preguntas para verificar que entiendes el gerente del computador y sus elementos.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia entre Windows y Microsoft Word?',
          opciones: [
            'Son lo mismo, solo cambia el nombre.',
            'Windows es el sistema operativo (gerente); Word es un programa (uno de los trabajadores).',
            'Word es más importante que Windows.',
            'Ninguno es software.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Windows coordina todo el computador (es el gerente). Word es un programa específico para escribir (uno de los muchos trabajadores que Windows coordina).',
          feedbackIncorrecto: 'Windows es el sistema operativo (coordina todo el computador). Word es un programa que corre dentro de Windows. SO es más amplio que cualquier programa individual.'
        },
        {
          enunciado: 'Borras tu archivo de tarea por error. ¿Se perdió para siempre?',
          opciones: [
            'Sí, los archivos borrados nunca vuelven.',
            'No, primero va a la papelera de reciclaje. Si no la vaciaste, puedes recuperarlo.',
            'Solo si reinicias el computador.',
            'Solo si el archivo era pequeño.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La papelera de reciclaje es tu segunda oportunidad: el archivo está ahí hasta que vacíes la papelera o pasen muchos días.',
          feedbackIncorrecto: 'Va primero a la papelera. Si no la has vaciado, abrís la papelera, clic derecho en el archivo, "Restaurar" y vuelve a su lugar.'
        },
        {
          enunciado: 'Tu mamá compra un computador Mac y tú estás acostumbrado a Windows. ¿Qué pasa?',
          opciones: [
            'No vas a poder usarlo, los Mac son totalmente distintos.',
            'Al principio te confundes, pero los conceptos son los mismos (escritorio, ventanas, archivos).',
            'Tienes que aprender a programar para usarlo.',
            'El Mac no tiene escritorio.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Mac es un SO distinto (macOS) pero los conceptos son los mismos: escritorio, ventanas, archivos, papelera. Cambia el estilo, no la idea.',
          feedbackIncorrecto: 'Todos los SO de escritorio tienen los mismos conceptos. Cambia el estilo (Mac arriba, Windows abajo), no la idea. En 1 semana te acostumbras.'
        },
        {
          enunciado: '¿Cuál de estos NO es un sistema operativo?',
          opciones: [
            'Android.',
            'Windows.',
            'Microsoft Word.',
            'Linux.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Microsoft Word es un programa para escribir. Android, Windows y Linux son sistemas operativos (coordinan todo el equipo).',
          feedbackIncorrecto: 'Microsoft Word no es SO; es un programa. SO: Android, Windows, Linux, macOS, iOS, ChromeOS. Word corre dentro de un SO.'
        },
        {
          enunciado: 'Encender el computador tarda varios segundos antes de mostrar el escritorio. ¿Qué hace el computador en ese tiempo?',
          opciones: [
            'Está descansando.',
            'El SO está cargándose: prepara el hardware, los archivos, los programas, el escritorio. Eso toma tiempo.',
            'Espera órdenes del usuario.',
            'Verifica que tienes wifi.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. En esos segundos el SO carga drivers de hardware, prepara la memoria, organiza archivos y arma el escritorio. No es lento; está trabajando.',
          feedbackIncorrecto: 'El SO se está cargando: prepara hardware, archivos, programas y el escritorio. Por eso tarda unos segundos al encender. Es trabajo invisible pero necesario.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Uso el SO que me asignaron porque me lo asignaron, o ya he probado otro para decidir cuál prefiero?',
    transferencia: 'Esta semana, cuando uses tu computador (o el celular), observa: ¿qué está haciendo el SO en cada momento?',
    cierre: 'Al terminar la clase: (1) podrás identificar 5 elementos típicos de un sistema operativo de escritorio; (2) sabrás explicar las 5 funciones que hace un SO; (3) podrás distinguir entre los principales SO del mercado (Windows, Linux, Android, iOS, ChromeOS); (4) habrás aplicado tod…'
  },
  saberAncestral: {
    saber: 'En el taller grande de don Aurelio había varios aprendices, y todos sabían a quién obedecer. En el centro de Cartago, en los años 60, hubo un taller de relojes donde trabajaban 4 aprendices al tiempo: uno limpiaba piezas, otro lijaba ejes, otro ensamblaba mecanismos, otro probaba el tic-tac final. El que coordinaba todo era don Aurelio, el maestro. Don Aurelio no hacía el trabajo manual; él decidía quién hacía qué, en qué momento, con qué herramienta. Si llegaba un reloj urgente, asignaba a 2 aprendices a la vez. Si una pieza llegaba tarde, redistribuía las tareas. Sin don Aurelio, los 4 aprendices se chocaban: dos limpiaban la misma pieza, otro buscaba la herramienta que su compañero tenía, nadie terminaba. Con don Aurelio coordinando, el taller producía 10 relojes al día. Hoy ese coordinador en el computador se llama sistema operativo. Sin él, el hardware no se entiende con los programas, los archivos no se encuentran, los periféricos no obedecen. Es el gerente invisible que hace que todo funcione.',
    preguntaPuente: 'Cuando prendes un computador, antes de que aparezca el escritorio, ves una pantalla que dice "Iniciando Windows" (o "Cargando macOS", o el logo del fabricante). ¿Qué está haciendo el computador en esos segundos? ¿Por qué no enciende y muestra todo de una vez?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del trabajo y la coordinación)',
      lente: 'lente del nosotros',
      cita: '"Cuando entiendes quién coordina, entiendes quién manda. Cuando entiendes quién manda, decides si lo aceptas."',
      preguntaEspejo: '¿Uso el SO que me asignaron porque me lo asignaron, o ya he probado otro para decidir cuál prefiero?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que estudió cómo coordinar muchas cosas a la vez)',
      lente: 'lente del cuidado interior',
      cita: '"Lo invisible es lo más importante. Lo que no se ve sostiene lo que se ve."',
      preguntaEspejo: '¿A qué cosas invisibles de mi vida les he dejado de poner atención porque "siempre funcionan"?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la infraestructura digital)',
      lente: 'lente de la infoesfera',
      cita: '"Los sistemas operativos no son neutros: cada uno propone un modo de habitar el mundo digital."',
      preguntaEspejo: '¿Qué filosofía me está enseñando el SO que más uso, sin que yo lo note?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar 5 elementos típicos de un sistema operativo de escritorio; (2) sabrás explicar las 5 funciones que hace un SO; (3) podrás distinguir entre los principales…',
    emocional: 'El sistema operativo es invisible la mayor parte del tiempo.',
    ciudadana: 'El sistema operativo decide cómo se ve tu pantalla, qué apps puedes usar, cómo se organizan los archivos.',
    local: 'Antes de salir, miras tu hoja: ¿podría un primo entender qué es un SO solo leyéndola?',
    intergeneracional: 'Cuando usas Windows, vives en un mundo que Microsoft ha diseñado: ese fondo, esa barra, esa lógica de archivos.'
  }
};

export default contenido;
