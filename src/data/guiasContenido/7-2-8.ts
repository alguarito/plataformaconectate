/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 8
 * (sesión global 18).
 *
 * Auto-generado desde content/guias/7/7-2-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 8,
  titulo: 'Scratch — mi primer programa con bloques',
  resumen: 'Scratch es un lenguaje de programación visual desarrollado en el MIT Media Lab (Massachusetts Institute of Technology) en 2007.',
  duracionMin: 90,
  subtema: 'Scratch — mi primer programa con bloques',
  preLectura: {
    porQueImporta: 'El producto es el programa guardado + captura + lista de bloques en cuaderno.',
    preguntaDetonante: 'Cuando empieces a jugar con Scratch, ¿cómo crees que se siente programar con bloques en lugar de escribir código? ¿Más fácil? ¿Más difícil? ¿Más divertido?',
    activacion: {
      titulo: 'Interfaz de Scratch',
      descripcion: 'Actividad 1 · IDENTIFICA — Interfaz de Scratch (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: conoces la interfaz, exploras los bloques, creas tu primer programa, lo pruebas.',
      siguiente: 'Modifica tu programa: cambia los números, agrega más bloques, prueba qué pasa.'
    }
  },
  conceptosClave: [
    {
      termino: 'Scratch',
      definicion: 'Lenguaje de programación visual creado en el MIT Media Lab (Massachusetts Institute of Technology) en 2007. Gratuito, en scratch.mit.edu. Más de 100 millones de proyectos compartidos. Diseñado para enseñar programación a niños y jóvenes con bloques en lugar de código de texto.',
      ejemplo: 'Entras a scratch.mit.edu, haces clic en \'Crear\', arrastras bloques del panel izquierdo al área central, los encajas como Lego. Tu programa se ejecuta visualmente en el escenario.',
      emoji: '🐱'
    },
    {
      termino: 'Sprite',
      definicion: 'Un personaje u objeto en Scratch. Por defecto es el gato amarillo. Se puede cambiar por cualquier personaje de la biblioteca o subir uno propio. Cada sprite tiene sus propios bloques de código.',
      ejemplo: 'El gato amarillo es el sprite por defecto. Puedes cambiarlo por un perro, un balón, un personaje custom. Cada sprite responde a sus propios bloques.',
      emoji: '🦁'
    },
    {
      termino: 'Escenario (Stage)',
      definicion: 'El rectángulo arriba a la derecha de Scratch donde se ejecuta el programa. Tiene coordenadas X (horizontal, -240 a 240) e Y (vertical, -180 a 180), con el centro en (0,0). Es un plano cartesiano.',
      ejemplo: 'Si haces \'Ir a X=100, Y=50\', el sprite se teletransporta a esa coordenada del escenario. (0,0) es el centro. (240, 180) es la esquina superior derecha.',
      emoji: '🎬'
    },
    {
      termino: 'Bandera verde',
      definicion: 'El ícono de bandera verde encima del escenario. Al hacer clic en ella, se ejecutan todos los bloques que tienen el bloque de evento \'Al hacer clic en bandera verde\'. Es el botón START del programa.',
      ejemplo: 'Tu programa empieza con un bloque amarillo \'Al hacer clic en bandera verde\'. El usuario hace clic en la bandera, y todos los bloques debajo se ejecutan secuencialmente.',
      emoji: '🚩'
    },
    {
      termino: '5 categorías de bloques principales',
      definicion: 'Las primeras 5 que usarás: Eventos (amarillo - empieza el programa), Movimiento (azul - mueve sprite), Apariencia (morado - cambia visual), Sonido (rosa - reproduce audio), Control (naranja - bucles y condicionales). Hay más pero estas 5 te alcanzan para programas básicos.',
      ejemplo: 'Tu primer programa usa amarillo (evento bandera), azul (mover), morado (decir), naranja (repetir). 4 colores, 6 bloques, 1 programa funcional.',
      emoji: '🎨'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar Scratch?',
      instrucciones: '5 preguntas para verificar que dominas la interfaz y los bloques básicos.',
      preguntas: [
        {
          enunciado: '¿Dónde se descarga Scratch?',
          opciones: [
            'Hay que comprarlo.',
            'Funciona gratis en el navegador en scratch.mit.edu, sin instalación.',
            'Solo en celulares.',
            'No existe, es inventado.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Scratch es gratuito y vive en scratch.mit.edu. Funciona en cualquier computador con navegador. Sin instalar nada. Puedes crear cuenta para guardar tus proyectos.',
          feedbackIncorrecto: 'Scratch en scratch.mit.edu. Gratuito. Navegador, sin instalación. Crear cuenta opcional pero recomendado para guardar tus proyectos.'
        },
        {
          enunciado: 'Tu programa NO arranca al hacer clic en bandera verde. ¿Qué falta?',
          opciones: [
            'Nada falta, debe arrancar solo.',
            'Probablemente falta el bloque amarillo \'Al hacer clic en bandera verde\' al inicio.',
            'Hay que reiniciar el computador.',
            'Scratch está dañado.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin bloque de evento (sombrero amarillo) al inicio, los bloques no se ejecutan cuando haces clic en la bandera. Siempre arranca con un evento.',
          feedbackIncorrecto: 'Falta el bloque amarillo \'Al hacer clic en bandera verde\'. Sin él, los bloques no se conectan al botón START (la bandera). Es como olvidar el botón POWER.'
        },
        {
          enunciado: 'Quieres que tu sprite repita una acción 10 veces. ¿Qué bloque usas?',
          opciones: [
            'Un bloque de movimiento.',
            'Un bloque naranja \'Repetir 10 veces\' (Control).',
            '10 bloques iguales en fila.',
            'Un bloque de sonido.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Bucle FOR de la S7, ahora en Scratch. Bloque naranja \'Repetir 10 veces\'. Adentro pones los bloques que se repetirán. Mucho mejor que 10 bloques iguales.',
          feedbackIncorrecto: '\'Repetir 10 veces\' (Control naranja). El bloque abraza otros bloques que se repiten N veces. Es el bucle FOR de la S7 aplicado en Scratch.'
        },
        {
          enunciado: 'El sprite por defecto en Scratch es...',
          opciones: [
            'Un dragón.',
            'El gato amarillo.',
            'Un robot.',
            'Mickey Mouse.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El gato amarillo (llamado Scratch Cat) es el sprite por defecto. Puedes cambiarlo por otro de la biblioteca o subir el tuyo propio.',
          feedbackIncorrecto: 'El gato amarillo (Scratch Cat) es el sprite por defecto. Puedes cambiarlo con el botón \'Elegir un sprite\' abajo a la derecha. Hay biblioteca grande.'
        },
        {
          enunciado: '¿De qué color es la categoría \'Movimiento\' en Scratch?',
          opciones: [
            'Rosa.',
            'Azul.',
            'Verde.',
            'Negro.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Movimiento = azul. Apariencia = morado. Sonido = rosa. Eventos = amarillo. Control = naranja. Cada categoría con su color distintivo.',
          feedbackIncorrecto: 'Movimiento es AZUL. Apariencia morado, Sonido rosa, Eventos amarillo, Control naranja. Los colores ayudan a identificar la categoría sin leer.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprovechando este acceso al saber que generaciones anteriores no tuvieron?',
    transferencia: 'Modifica tu programa: cambia los números, agrega más bloques, prueba qué pasa.',
    cierre: 'Al terminar la clase: (1) podrás identificar la interfaz de Scratch (escenario, sprite, bloques); (2) sabrás aplicar los bloques de las 5 primeras categorías; (3) podrás evaluar si tu programa funciona correctamente; (4) habrás creado tu primer programa Scratch.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de Cartago decía: "Lo nuevo se aprende mejor jugando que estudiando." En la vereda La Plata, cuando enseñaba sumas a los niños del campo, no empezaba con ejercicios secos: usaba piedrecitas, granos de maíz, tarjetas hechas a mano. Los niños jugaban a sumar, restar, agrupar. Sin darse cuenta, estaban entendiendo matemáticas profundas. La pedagogía del juego no era casualidad: doña Mercedes había observado que el cerebro aprende cuando se divierte. Lo serio, presentado como serio, se aprende a medias; lo serio, presentado como juego, se aprende a fondo. Esa intuición pedagógica es exactamente lo que motivó la creación de Scratch en el MIT. Mitchel Resnick (su creador) sabía que enseñar programación a niños y jóvenes con código de texto sería frustrante. Diseñó Scratch para que sea juego primero, programación después. Hoy abres ese taller-juego.',
    preguntaPuente: 'Cuando empieces a jugar con Scratch, ¿cómo crees que se siente programar con bloques en lugar de escribir código? ¿Más fácil? ¿Más difícil? ¿Más divertido?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del acceso al conocimiento)',
      lente: 'lente del nosotros',
      cita: '"Scratch democratiza la programación: lo que era para ingenieros con doctorado ahora es para niños del barrio. Eso es justicia educativa."',
      preguntaEspejo: '¿Estoy aprovechando este acceso al saber que generaciones anteriores no tuvieron?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador de los hábitos diarios)',
      lente: 'lente del cuidado interior',
      cita: '"El que practica una habilidad 30 minutos al día durante 1 año, llega lejos. Scratch te da las herramientas para esa práctica."',
      preguntaEspejo: '¿Qué pasaría si practicara Scratch 20 minutos cada día en lugar de solo en clase?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del programar como alfabetización)',
      lente: 'lente de la infoesfera',
      cita: '"En 2030, no saber programar mínimamente será como en 1990 no saber leer. Scratch es el lápiz para esa nueva alfabetización."',
      preguntaEspejo: '¿Estoy reconociendo lo importante que es esta alfabetización para mi vida adulta?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la interfaz de Scratch (escenario, sprite, bloques); (2) sabrás aplicar los bloques de las 5 primeras categorías; (3) podrás evaluar si tu programa funcion…',
    emocional: 'Scratch es la herramienta.',
    ciudadana: 'Antes de Scratch, programar requería años de estudio formal: aprender sintaxis compleja, depurar errores de texto, leer documentación en inglés.',
    local: 'Antes de salir, ejecuta el programa al menos 3 veces para verificar que funciona.',
    intergeneracional: 'Las generaciones de tus abuelos aprendieron a leer; las de tus papás aprendieron a usar computadoras; tu generación aprende a programar.'
  }
};

export default contenido;
