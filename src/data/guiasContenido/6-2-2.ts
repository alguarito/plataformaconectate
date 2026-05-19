/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/6/6-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 2,
  titulo: '¿Qué es un computador? — las 4 funciones básicas de toda máquina inteligente',
  resumen: 'Un computador es una máquina que hace siempre lo mismo: recibe datos, los procesa, los guarda y muestra resultados.',
  duracionMin: 90,
  subtema: '¿Qué es un computador? — las 4 funciones básicas de toda máquina inteligente',
  preLectura: {
    porQueImporta: 'El producto es el diagrama firmado con las 4 funciones, las piezas y el caso completo.',
    preguntaDetonante: 'Cuando juegas Roblox en el celular y mueves tu personaje con el dedo en la pantalla, ¿qué partes del celular están trabajando en ese instante? ¿Sabrías nombrar al menos 3?',
    activacion: {
      titulo: '10 acciones para clasificar',
      descripcion: 'Actividad 1 · IDENTIFICA — 10 acciones para clasificar (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: clasificas 10 acciones cotidianas según función, aprendes las 4 funciones con sus piezas, aplicas todo a un juego que conoces, y dibujas tu diagrama.',
      siguiente: 'Esta semana, cuando uses tu celular, juega a identificar las 4 funciones.'
    }
  },
  conceptosClave: [
    {
      termino: 'Las 4 funciones del computador',
      definicion: 'Cualquier máquina inteligente hace siempre lo mismo: recibe información (entrada), la procesa, la guarda y muestra resultados (salida). Computadores, celulares, cajeros, registradoras: todos siguen este patrón.',
      ejemplo: 'Al jugar Roblox: tu dedo en la pantalla (entrada), CPU calcula movimientos (proceso), juego guardado en disco (almacenamiento), gráficos en pantalla y sonido en altavoz (salida).',
      emoji: '🔄'
    },
    {
      termino: 'Entrada (input)',
      definicion: 'Por donde llega la información al computador. Si tú le das algo a la máquina (tocas, escribes, hablas, muestras), eso es entrada. Las piezas que cumplen esto: teclado, ratón, pantalla táctil, micrófono, cámara.',
      ejemplo: 'Cuando escribes en WhatsApp, el teclado es la entrada. Cuando dices "Hola Siri", el micrófono es la entrada.',
      emoji: '⬆️'
    },
    {
      termino: 'Proceso (CPU)',
      definicion: 'Donde el computador piensa: hace cálculos, busca cosas, decide, compara. La pieza principal se llama CPU (Unidad Central de Proceso). Es el "cerebro" de la máquina. La GPU procesa los gráficos pesados de los juegos.',
      ejemplo: 'Cuando Google te muestra resultados de búsqueda, su CPU procesa millones de páginas en milésimas de segundo para encontrar las relevantes.',
      emoji: '🧠'
    },
    {
      termino: 'Almacenamiento',
      definicion: 'Donde el computador guarda la información. Hay 2 tipos. RAM (memoria temporal): guarda lo que usas AHORA, se borra al apagar. Disco duro (memoria permanente): guarda archivos, fotos, programas; queda aunque apagues.',
      ejemplo: 'Tus videos en TikTok están en el disco duro de Google (permanente). Lo que estás viendo ahora mismo está cargado en RAM (rápido pero temporal).',
      emoji: '💾'
    },
    {
      termino: 'Salida (output)',
      definicion: 'Cómo el computador te muestra el resultado de lo que procesó. Si la máquina te está mostrando algo (visible, audible, palpable), eso es salida. Piezas típicas: pantalla, altavoz, audífonos, impresora, vibrador.',
      ejemplo: 'Cuando ves un meme en TikTok, la pantalla muestra los gráficos (salida visual) y el altavoz reproduce el sonido (salida auditiva).',
      emoji: '⬇️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces las 4 funciones de un computador?',
      instrucciones: '5 preguntas para verificar que sabes identificar entrada, proceso, almacenamiento y salida.',
      preguntas: [
        {
          enunciado: 'Tocas la pantalla del celular para abrir TikTok. ¿Qué función es?',
          opciones: [
            'Salida, porque la pantalla muestra el resultado.',
            'Entrada, porque tú le estás dando información al celular.',
            'Proceso, porque el celular está pensando.',
            'Almacenamiento, porque guarda tu toque.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Cuando tú le DAS algo al celular (tocar, escribir, hablar), eso es entrada. La pantalla táctil es entrada cuando tocas y salida cuando muestra.',
          feedbackIncorrecto: 'Es entrada. La pantalla táctil cumple las 2 funciones: entrada (cuando tocas) y salida (cuando muestra). En este caso tú estás tocando.'
        },
        {
          enunciado: 'TikTok busca un video que coincida con lo que escribiste. ¿Qué función es?',
          opciones: [
            'Entrada, porque hay un teclado.',
            'Salida, porque va a mostrar el video.',
            'Proceso, porque la CPU está buscando y comparando.',
            'Almacenamiento, porque guarda lo que buscaste.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Buscar, comparar, calcular: todo eso es proceso. La pieza que lo hace es la CPU, el cerebro del celular.',
          feedbackIncorrecto: 'Es proceso. Cuando el celular está pensando, buscando o comparando, eso lo hace la CPU. Esa es la función \'proceso\'.'
        },
        {
          enunciado: 'Apagas el celular y al prenderlo de nuevo, ¿qué se mantiene y qué se pierde?',
          opciones: [
            'Todo se pierde, hay que volver a configurar.',
            'Todo queda, el celular nunca olvida.',
            'Lo que estaba en RAM se pierde; lo del disco duro queda.',
            'Depende del color del celular.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. RAM es memoria temporal (se borra al apagar). Disco duro es memoria permanente (queda). Las 2 son almacenamiento pero hacen cosas distintas.',
          feedbackIncorrecto: 'RAM se borra al apagar (temporal). Disco duro queda (permanente). Por eso tus fotos no se borran pero la app que tenías abierta sí se cierra.'
        },
        {
          enunciado: 'Cuál de estas piezas es de SALIDA (output)?',
          opciones: [
            'Teclado',
            'Micrófono',
            'Altavoz',
            'Cámara'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. El altavoz es salida porque el computador te muestra algo (un sonido). Teclado, micrófono y cámara son entrada.',
          feedbackIncorrecto: 'El altavoz es salida (el computador te da algo). Teclado, micrófono y cámara son entrada (tú le das algo al computador).'
        },
        {
          enunciado: 'Tu celular, una caja registradora y un cajero electrónico tienen en común que...',
          opciones: [
            'Son todos del mismo color.',
            'Tienen las mismas 4 funciones básicas (entrada, proceso, almacenamiento, salida).',
            'Funcionan solo cuando hay internet.',
            'Solo sirven para una cosa.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Cualquier máquina inteligente sigue el mismo patrón: entrada, proceso, almacenamiento, salida. Si lo entiendes, entiendes cualquier máquina nueva.',
          feedbackIncorrecto: 'Todas siguen las mismas 4 funciones. Por eso si entiendes este modelo, entiendes celulares, cajeros, registradoras y cualquier máquina nueva que aparezca.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Quiero seguir siendo mago con las máquinas (apretar y esperar), o quiero ser relojero (entender y decidir)?',
    transferencia: 'Esta semana, cuando uses tu celular, juega a identificar las 4 funciones.',
    cierre: 'Al terminar la clase: (1) podrás identificar las 4 funciones básicas de un computador; (2) sabrás explicar con tus palabras qué hace cada una; (3) podrás aplicar las 4 funciones a un caso real (un juego, un programa, una acción cotidiana); (4) habrás creado un diagrama propio del…'
  },
  saberAncestral: {
    saber: 'En cada barrio de Cartago vivía un relojero. Hasta hace pocas décadas, en una vitrina pequeña de la calle 12 o la calle 14 trabajaba el relojero. Don Lucho, don Aurelio, doña Rita — cada barrio tenía el suyo. El relojero no era un mago: era un sabio de las máquinas pequeñas. Sabía exactamente qué pieza hacía qué dentro del reloj. Conocía los engranajes que recibían la cuerda (entrada), las ruedas que la transmitían (proceso), el resorte que guardaba la energía (almacenamiento), y las manecillas que mostraban la hora (salida). Si una pieza fallaba, sabía cuál era. Si el reloj se atrasaba, sabía cuál engranaje ajustar. Las personas le tenían respeto porque conocía la máquina por dentro. Hoy el reloj de tu abuela ya casi no existe; hoy todos cargamos otra máquina por dentro: el computador y el celular. Aprender qué hay dentro te convierte en algo parecido al relojero: alguien que entiende la máquina, no alguien que solo la usa.',
    preguntaPuente: 'Cuando juegas Roblox en el celular y mueves tu personaje con el dedo en la pantalla, ¿qué partes del celular están trabajando en ese instante? ¿Sabrías nombrar al menos 3?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo que escribió sobre saber técnico y dignidad)',
      lente: 'lente del nosotros',
      cita: '"Quien conoce su herramienta por dentro, la usa libre. Quien no la conoce, depende de quien sí."',
      preguntaEspejo: '¿Quiero seguir siendo mago con las máquinas (apretar y esperar), o quiero ser relojero (entender y decidir)?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que escribió sobre conocer las cosas a fondo)',
      lente: 'lente del cuidado interior',
      cita: '"Pregunta siempre qué es la cosa en sí misma, no qué te parece que es. Esa pregunta separa al sabio del distraído."',
      preguntaEspejo: '¿Me conformo con saber qué hace una cosa, o también me pregunto qué es por dentro?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la información)',
      lente: 'lente de la infoesfera',
      cita: '"Vivimos en una sociedad de máquinas inteligentes. Quien no entiende cómo funcionan, las usa sin ser su dueño."',
      preguntaEspejo: '¿Estoy aprendiendo lo de hoy o las ideas que sirven para 30 años?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 4 funciones básicas de un computador; (2) sabrás explicar con tus palabras qué hace cada una; (3) podrás aplicar las 4 funciones a un caso real (un jue…',
    emocional: 'Cuando ves un computador, lo fácil es pensar "es un aparato que sirve para esto".',
    ciudadana: 'Hay 2 maneras de usar un computador: como mago (aprietas botones sin entender, esperando que funcione) o como relojero (sabes qué hace cada parte, entonces puedes resolver, ajustar, escoger).',
    local: 'Antes de salir, verificas que tu diagrama no tenga flechas perdidas: cada flecha conecta una función con la siguiente.',
    intergeneracional: 'En 20 años habrá máquinas que ni se han inventado.'
  }
};

export default contenido;
