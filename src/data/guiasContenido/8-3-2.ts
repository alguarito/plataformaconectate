/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/8/8-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 2,
  titulo: 'Presentaciones interactivas — caminos que vuelven al menú',
  resumen: 'Una presentación interactiva deja elegir el camino y siempre permite volver. Hoy construyes menú, ramas, glosario y regresos, como la décima glosada del Pacífico, donde cada rama termina regresando a la copla inicial.',
  duracionMin: 90,
  subtema: 'Multimedia y ciberética',
  preLectura: {
    porQueImporta: 'Los sitios, las apps y los cursos en línea son pantallas conectadas por enlaces. Saber diseñar caminos con retorno es saber que nadie se pierda en lo que haces.',
    preguntaDetonante: 'Si tu presentación tiene un botón que entra a una sección y ninguno que vuelva, ¿qué le pasa a quien hizo clic?',
    activacion: {
      titulo: 'El botón que no vuelve',
      descripcion: 'En 3 minutos, recuerda una app o página donde te quedaste atrapado y no sabías cómo volver. ¿Qué botón faltaba? ¿Dónde lo habrías puesto?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 1 diseñaste una pieza que se entiende en tres segundos.',
      siguiente: 'En la sesión 3 cuentas algo en tres minutos con tu voz.'
    }
  },
  conceptosClave: [
    {
      termino: 'Presentación interactiva',
      definicion: 'Pantallas conectadas por enlaces que dejan elegir el camino, entrar, volver y saltar.',
      ejemplo: 'Un menú de cuatro botones y cuatro secciones, cada una con regreso.',
      categoria: 'Los caminos'
    },
    {
      termino: 'Hipervínculo interno',
      definicion: 'Un texto o botón que lleva a otra pantalla de la misma presentación.',
      ejemplo: 'Clic derecho sobre el botón, «Insertar enlace», y elegir la diapositiva 3.',
      categoria: 'Los caminos'
    },
    {
      termino: 'Menú',
      definicion: 'La pantalla índice que lleva la esencia, como la copla inicial de la décima. Un botón por sección.',
      ejemplo: '«¿Qué es?», «¿Cómo funciona?», «¿Para qué sirve?», «¿Qué falla?».',
      categoria: 'Los caminos'
    },
    {
      termino: 'Retorno',
      definicion: 'El botón «volver al menú» que va en todas las pantallas menos el menú. Sin él, quien entra queda atrapado.',
      ejemplo: 'Cada décima vuelve a un verso de la copla; cada sección vuelve al menú.',
      categoria: 'Las reglas'
    },
    {
      termino: 'Glosario',
      definicion: 'Una palabra enlazada a su definición, con un enlace que devuelve a donde estabas.',
      ejemplo: '«Umbral» subrayada lleva a la definición y vuelve a la sección 2.',
      categoria: 'Las reglas'
    },
    {
      termino: 'Prueba de quitar',
      definicion: 'Una animación es útil solo si al quitarla se pierde algo para entender.',
      ejemplo: 'Revelar la respuesta después de la pregunta pasa la prueba; un título que gira, no.',
      categoria: 'Las reglas'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes diseñar caminos que vuelven?',
      instrucciones: 'Cinco preguntas para verificar que dominas menú, enlaces, retornos y animaciones útiles. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu pareja entra a la sección 3 de tu presentación y no sabe cómo seguir. ¿Qué falta?',
          opciones: [
            'Un botón «volver al menú» enlazado al inicio.',
            'Una animación que le muestre claramente que la sección ya terminó.',
            'Más texto en la sección para que no se aburra.',
            'Una transición distinta para que note el cambio.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Es una rama sin retorno. Cada sección necesita su botón de regreso.',
          feedbackIncorrecto: 'Ni animaciones ni texto ni transiciones la sacan de ahí. Falta el retorno al menú.'
        },
        {
          enunciado: '¿Cuál de estos menús lleva la esencia, como la copla inicial de la décima?',
          opciones: [
            '«Sección 1 · Sección 2 · Sección 3 · Sección 4».',
            '«Inicio · Siguiente · Anterior · Fin».',
            '«Diapositiva A · Diapositiva B · Diapositiva C · Diapositiva D · Diapositiva E».',
            '«¿Qué es? · ¿Cómo se programa? · ¿Qué sensores tiene? · ¿Qué falla?».'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Con solo leer el menú ya sabes de qué trata todo y eliges por dónde entrar.',
          feedbackIncorrecto: '«Sección 1» o «Diapositiva A» no dicen nada. El menú lleva la esencia cuando cada botón dice el tema de su sección.'
        },
        {
          enunciado: 'Tienes un título que entra girando y una respuesta que aparece después de la pregunta. ¿Cuál pasa la prueba de quitar?',
          opciones: [
            'Las dos, porque toda animación ayuda a mantener la atención.',
            'Ninguna, porque las animaciones siempre distraen.',
            'La respuesta que aparece después, porque sin ella se pierde el orden.',
            'El título que gira, porque es la primera pantalla y debe llamar la atención de todos.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Revelar la respuesta después de la pregunta ayuda a entender. El título girando se puede quitar sin perder nada.',
          feedbackIncorrecto: 'No todas ayudan ni todas distraen. La que revela la respuesta después de la pregunta se pierde si la quitas; la que gira, no.'
        },
        {
          enunciado: '¿Para qué sirve dibujar el mapa en papel antes de abrir la herramienta?',
          opciones: [
            'Para cumplir el requisito del cuaderno.',
            'Para ver nodos y regresos antes de enlazar, sin ramas sueltas.',
            'Para que la presentación tenga más diapositivas y se vea más completa.',
            'Para elegir los colores de cada pantalla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. En el papel se ve de una vez qué sección no tiene regreso. En la herramienta se descubre tarde.',
          feedbackIncorrecto: 'No es por el cuaderno ni por los colores. El mapa muestra ramas y regresos antes de enlazar, y evita dejar caminos sin vuelta.'
        },
        {
          enunciado: 'Un decimero de Guapi cambia dos versos de una décima que aprendió de su abuelo. ¿Qué dice eso de la décima?',
          opciones: [
            'Que la décima quedó dañada y ya no vale.',
            'Que el decimero no se la aprendió bien.',
            'Que las décimas tienen un autor único y original que hay que respetar siempre.',
            'Que la décima es de todos y cada quien añade o cambia partes.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Oslender lo registra: cada decimero añade o cambia, y así la décima se vuelve de todos.',
          feedbackIncorrecto: 'No está dañada ni mal aprendida. Las décimas del Pacífico no tienen autoría fija; cada decimero las cambia y siguen siendo válidas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿En qué pantalla se quedó tu pareja durante la prueba del minuto, y qué botón faltaba?',
    transferencia: 'La próxima vez que armes algo con partes, un trabajo, un video, una carpeta, escribe primero el menú. Si el menú no dice de qué trata todo, todavía no está listo.',
    cierre: 'La copla lleva la esencia y cada décima vuelve a ella. El menú lleva la esencia y cada sección vuelve. Nadie se pierde.'
  },
  saberAncestral: {
    saber: 'En Guapi y en los ríos de la costa caucana, los decimeros recitan de memoria poemas de 44 versos: las décimas glosadas. La estructura es estricta. Primero va una copla de cuatro versos que «lleva la esencia». Después vienen cuatro décimas de diez versos. Cada décima tiene que terminar en el verso correspondiente de la copla inicial (Oslender, 2003, citando a Pedrosa y Vanín, 1994). Es decir: el poema abre con un menú de cuatro líneas y desarrolla cada una por su lado. Cada desarrollo vuelve al menú antes de pasar al siguiente. Nadie se pierde porque cada rama regresa. Y las décimas no tienen autoría fija: cada decimero añade o cambia partes, y así se vuelven de todos. La cara de exclusión: Oslender llama a estas décimas «discursos ocultos de resistencia». Las comunidades negras del Pacífico las usan para contar lo que la historia oficial calla y para reclamar su territorio. Y los decimeros son mayores a los que cada vez se escucha menos. Hoy vas a construir una presentación como una décima glosada: un menú que lleva la esencia y ramas que siempre vuelven.',
    fuente: 'Decimeros del Pacífico caucano (Guapi, río Saija) · la décima glosada',
    referencia: 'Oslender, U. (2003). «Discursos ocultos de resistencia»: tradición oral y cultura política en comunidades negras de la costa pacífica colombiana. Revista Colombiana de Antropología, 39, 203--236.',
    preguntaPuente: 'En la décima glosada, cada rama termina volviendo a un verso de la copla inicial. Si tu presentación tiene un botón que entra a una sección y ninguno que vuelva, ¿qué le pasa a quien hizo clic?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La décima glosada, ramas que vuelven',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · El mapa en papel',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · El menú y las ramas',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Regresos, animaciones y la prueba del minuto',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'El mapa en papel',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige un tema escolar con partes y dibuja cinco círculos, uno es el menú y los otros cuatro son secciones.',
        'Traza flechas del menú a cada sección.',
        'Traza las flechas de regreso, de cada sección al menú, con otro color.',
        'Marca con una estrella la sección que necesita una palabra explicada.'
      ],
      cuaderno: {
        titulo: 'El mapa en papel',
        formato: 'el mapa de cinco nodos con flechas de ida en un color y de regreso en otro, y la estrella del glosario',
        extension: 'media página'
      },
      criterios: [
        'Cada sección tiene flecha de ida y de regreso.',
        'Desde cualquier nodo se puede seguir una flecha de vuelta al menú.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'El menú y las ramas',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, creen cinco diapositivas con el título de cada una según el mapa.',
        'En la primera, el menú, escriban cuatro botones, uno por sección, y enlacen cada uno a su diapositiva con clic derecho, «Insertar enlace».',
        'En cada sección pongan el contenido en pocas palabras, con la jerarquía de la sesión 1.',
        'Prueben en modo presentación entrando desde el menú a las cuatro secciones.'
      ],
      cuaderno: {
        titulo: 'El menú y las ramas',
        formato: 'el texto de los cuatro botones, la lista de secciones con su contenido en una línea, y el enlace de la presentación',
        extension: 'media página'
      },
      criterios: [
        'Los cuatro botones del menú enlazan a su sección.',
        'Ningún botón falla al probar.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Regresos, animaciones y la prueba del minuto',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Pon en cada sección un botón «volver al menú» y arma el glosario, la palabra difícil enlazada a su definición y de regreso.',
        'Agrega tres animaciones, una que revela, una que resalta y una que mueve, y a cada una hazle la prueba de quitar.',
        'Pásale el computador a tu pareja sin decir nada y cronometra un minuto, debe entrar a dos secciones y volver al menú.',
        'Escribe la nota de cinco líneas, por qué estos caminos y no una secuencia.'
      ],
      cuaderno: {
        titulo: 'Regresos, animaciones y la prueba del minuto',
        formato: 'las tres animaciones con qué se pierde sin cada una, el resultado de la prueba del minuto y la nota de cinco líneas',
        extension: 'una página'
      },
      criterios: [
        'Tu pareja volvió al menú sola.',
        'Las tres animaciones tienen escrito qué se perdería sin ellas.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §3.3.9.4',
      lente: 'lente del nosotros',
      cita: 'El maestro que libera sabe oír en silencio a la juventud y al pueblo, en vez de imponer su orden.',
      preguntaEspejo: '¿Qué de lo que hice esta semana obligaba a los demás a ir en mi orden?'
    },
    estoico: {
      autor: 'Séneca · De la brevedad de la vida, I (c. 49 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'La vida no es corta; nosotros la hacemos corta derrochando el tiempo.',
      preguntaEspejo: '¿Qué animación puse porque se veía bonita y no porque ayudara?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Ganan quienes saben preguntar y responder, y por eso saben qué merece recogerse y cuidarse.',
      preguntaEspejo: '¿Los botones de mi menú son preguntas que alguien se haría, o solo nombres?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Dibujaste el mapa antes de abrir la herramienta. Planear en papel primero sirve para cualquier cosa que tenga partes.',
    emocional: 'Ver a tu pareja atrapada en una pantalla sin saber volver incomoda. Ese momento te dice exactamente qué botón falta.',
    ciudadana: 'Un camino con regresos respeta a quien lo recorre. Una app que no deja volver atrás atrapa a la gente a propósito.',
    local: 'Los decimeros del Pacífico caucano abren con una copla que lleva la esencia y cada rama vuelve a ella. Tu menú y tus retornos hacen lo mismo.',
    intergeneracional: 'Una presentación con menú la puede ampliar el grupo del año siguiente agregando una sección. Una en línea recta hay que rehacerla.'
  }
};

export default contenido;
