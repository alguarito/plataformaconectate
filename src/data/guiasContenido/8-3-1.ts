/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 1
 * (sesión global 21).
 *
 * Auto-generado desde content/guias/8/8-3-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 1,
  titulo: 'Diseño visual — lo que se lee primero',
  resumen: 'La jerarquía visual decide qué se lee primero: tamaño, peso, color y posición. Hoy diseñas una pieza con cuatro elementos y tres colores, como la tejedora inga que elige fondo, labor y borde antes de tejer el chumbe.',
  duracionMin: 90,
  subtema: 'Multimedia y ciberética',
  preLectura: {
    porQueImporta: 'Cada afiche, publicación y pantalla que ves fue diseñada por alguien que decidió qué verías primero. Saber hacerlo es saber comunicar sin que te expliquen.',
    preguntaDetonante: 'Si en tu afiche todo tiene el mismo tamaño y seis colores, ¿qué va a leer primero alguien que pasa en tres segundos?',
    activacion: {
      titulo: 'Tres segundos en el corredor',
      descripcion: 'En 3 minutos, recuerda un afiche que viste hoy en el colegio. ¿De qué trataba? ¿Qué había que hacer? Si no lo recuerdas, ¿qué crees que falló?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 10 del periodo 2 sustentaste tu proyecto con el micro:bit en vivo.',
      siguiente: 'En la sesión 2 conectas piezas en una presentación con menús y regresos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Jerarquía visual',
      definicion: 'El orden en que el ojo recorre una pieza. Lo decide el diseño, no el azar.',
      ejemplo: 'Primero el título grande, luego el subtítulo, al final la fecha.',
      categoria: 'Los elementos'
    },
    {
      termino: 'Título',
      definicion: 'El mensaje principal en pocas palabras y en el tamaño mayor. Responde de qué trata.',
      ejemplo: '«Jornada deportiva del grado octavo».',
      categoria: 'Los elementos'
    },
    {
      termino: 'Llamada a la acción',
      definicion: 'Lo que el lector debe hacer después de ver la pieza, dicho con un verbo.',
      ejemplo: '«Inscríbete en la coordinación antes del viernes».',
      categoria: 'Los elementos'
    },
    {
      termino: 'Tamaño y peso',
      definicion: 'Lo más grande y lo más grueso se lee primero.',
      ejemplo: 'Título en 48 y en negrita; cuerpo en 18 y regular.',
      categoria: 'Las perillas'
    },
    {
      termino: 'Contraste',
      definicion: 'La diferencia entre el color del texto y el del fondo. Sin contraste no se lee.',
      ejemplo: 'Texto azul oscuro sobre fondo crema sí; gris claro sobre blanco no.',
      categoria: 'Las perillas'
    },
    {
      termino: 'Paleta de tres colores',
      definicion: 'Fondo, texto y acento. Como el chumbe inga, con fondo, labor y borde.',
      ejemplo: 'Crema, azul oscuro y naranja para lo que debe saltar.',
      categoria: 'Las perillas'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué se lee primero?',
      instrucciones: 'Cinco preguntas para verificar que dominas los cuatro elementos y las cuatro perillas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'En un afiche, el título, la fecha y el lugar tienen el mismo tamaño y el mismo color. ¿Qué pasa con quien lo mira?',
          opciones: [
            'Lee todo en orden, porque el ojo va de arriba abajo por sí solo.',
            'No sabe por dónde entrar y se va sin leer nada.',
            'Lee primero la fecha, porque los números llaman la atención.',
            'Entiende mejor, porque nada distrae de la información.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin jerarquía el ojo no sabe por dónde entrar. El título debe ser el más grande.',
          feedbackIncorrecto: 'El ojo no lee en orden por sí solo ni prefiere los números. Sin jerarquía, no sabe por dónde entrar y se va.'
        },
        {
          enunciado: '¿Cuál de estos es un buen título para un afiche?',
          opciones: [
            '«Jornada deportiva del grado octavo».',
            '«Los invitamos cordialmente a participar de la jornada deportiva que se realizará este año».',
            '«Deporte».',
            '«Importante, leer con atención la siguiente información».'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Dice de qué trata en pocas palabras. Ni una frase larga ni una sola palabra vacía.',
          feedbackIncorrecto: 'La frase larga no cabe en el tamaño mayor, y «Deporte» o «Importante» no dicen de qué trata. El título dice el tema en pocas palabras.'
        },
        {
          enunciado: 'Tu pareja mira tu pieza tres segundos y dice el tema, pero no sabe qué hacer. ¿Qué falta?',
          opciones: [
            'Un color más para que la pieza se vea más alegre.',
            'Un párrafo que explique la historia del evento.',
            'Una llamada a la acción con un verbo, «inscríbete», «llega».',
            'Un logo más grande del colegio en la esquina.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Entendió el tema pero no la acción. Falta el verbo que dice qué hacer.',
          feedbackIncorrecto: 'Más colores, párrafos o logos no dicen qué hacer. Falta la llamada a la acción con un verbo.'
        },
        {
          enunciado: 'Pones texto gris claro sobre fondo blanco. ¿Qué perilla estás moviendo mal?',
          opciones: [
            'El tamaño, porque el gris siempre se ve pequeño.',
            'La posición, porque el gris debe ir abajo.',
            'El peso, porque el gris no puede ir en negrita.',
            'El contraste, porque texto y fondo se parecen y no se lee.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Es la perilla del color: sin contraste entre texto y fondo, no se lee.',
          feedbackIncorrecto: 'No es tamaño, posición ni peso. Gris claro sobre blanco no tiene contraste, y por eso no se lee.'
        },
        {
          enunciado: '¿Por qué la guía recomienda máximo tres colores, como el chumbe inga?',
          opciones: [
            'Porque las herramientas gratuitas solo permiten tres colores.',
            'Porque tres es el número de elementos del afiche.',
            'Porque los afiches con más colores pesan más al exportar.',
            'Porque con seis colores todos compiten y ninguno se lee primero.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Fondo, texto y acento. Con más colores todo compite y la jerarquía se pierde.',
          feedbackIncorrecto: 'No es un límite de la herramienta ni del peso del archivo. Con muchos colores todo compite y nada se lee primero.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué leyó tu pareja primero en tu pieza, y coincidió con lo que tú querías que leyera?',
    transferencia: 'La próxima vez que veas un afiche en la calle, cuenta los colores y busca la llamada a la acción. Si no la encuentras, ya sabes qué le falta.',
    cierre: 'Tres colores, una labor que se ve primero, y todo planeado antes de tejer. Así se hace un chumbe y así se hace un afiche.'
  },
  saberAncestral: {
    saber: 'En Santiago-Manoy, en el Alto Putumayo, las mujeres ingas tejen el chumbe: una faja de hasta cuatro metros de largo y ocho centímetros de ancho que protege el vientre. Antes de tejer, la tejedora elige los colores: uno para el fondo, otro para las labores y, si quiere, un tercero para los bordes. No más. Las labores son figuras geométricas con base en el rombo, y en 25 chumbes los investigadores contaron 46 distintas (Aldana Barahona y Sánchez Carballo, 2021). Cada labor se ve porque contrasta con el fondo: eso que los autores llaman preeminencia visual es lo que hace que el ojo la encuentre primero. Y cada labor se planea en la mente antes de pasar al telar; «el olvido de un punto hace que la labor no sea prolija», y se nota. La cara de exclusión: las labores ya se pasan a manillas y mochilas para la venta. Hay figuras de chumbes antiguos cuyo significado nadie recuerda. Y una tejedora, Ruby Rodríguez, dice que están «en amenaza de que tenemos que ser historia». Hoy vas a diseñar como se teje un chumbe: pocos colores, una figura que se lea primero, y todo planeado antes de tocar la herramienta.',
    fuente: 'Pueblo inga de Santiago-Manoy (Alto Putumayo) · el chumbe y sus labores',
    referencia: 'Aldana Barahona, G. M. y Sánchez Carballo, A. (2021). Tejer con la mente: el chumbe inga del Alto Putumayo colombiano como artefacto cultural y mental. Estudios Atacameños, 67, e3521. https://doi.org/10.22199/issn.0718-1043-2021-0007',
    preguntaPuente: 'La tejedora inga elige tres colores y una labor que se vea primero. Si en tu afiche todo tiene el mismo tamaño y seis colores, ¿qué va a leer primero alguien que pasa en tres segundos?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El chumbe inga y sus labores',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · El recorrido del ojo',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · El boceto en papel',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · La pieza y la crítica',
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
      titulo: 'El recorrido del ojo',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los tres afiches que proyecta tu docente y anota, para cada uno, qué leíste primero, qué segundo y qué no leíste nunca.',
        'Anota qué hizo que lo primero fuera primero, más grande, más oscuro, arriba.',
        'Cuenta cuántos colores tiene cada afiche.',
        'Elige el que peor se entiende y escribe en una línea por qué.'
      ],
      cuaderno: {
        titulo: 'El recorrido del ojo',
        formato: 'tabla de 3 filas y 4 columnas (afiche, primero, segundo, nunca), el conteo de colores y la línea del peor',
        extension: 'media página'
      },
      criterios: [
        'Cada afiche tiene su recorrido de tres pasos.',
        'Anotaste la perilla que hizo que lo primero fuera primero.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'El boceto en papel',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, elijan un tema real del colegio y escriban título de máximo siete palabras, subtítulo, cuerpo con lugar, fecha y hora, y llamada a la acción con un verbo.',
        'Dibujen el rectángulo de la pieza y ubiquen los cuatro elementos con tamaños distintos, el título más grande.',
        'Elijan tres colores, fondo, texto y acento, y anótenlos al margen.',
        'Muestren el boceto tres segundos a otra pareja y pregunten qué leyeron primero.'
      ],
      cuaderno: {
        titulo: 'El boceto en papel',
        formato: 'el boceto con los cuatro elementos ubicados, los tres colores al margen y lo que dijo la otra pareja',
        extension: 'media página'
      },
      criterios: [
        'Los cuatro elementos tienen tamaños distintos.',
        'La otra pareja leyó primero el título.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'La pieza y la crítica',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Arma la pieza en Canva, Slides o la herramienta que indique tu docente, siguiendo tu boceto, y expórtala o guarda el enlace.',
        'Muéstrala tres segundos a tu pareja, tápala y pídele que diga de qué trata y qué hay que hacer. Anota si acertó.',
        'Busca un afiche real mal diseñado y toma una foto.',
        'Escribe la crítica, qué leíste primero, qué no, cuántos colores tiene y qué perilla cambiarías.'
      ],
      cuaderno: {
        titulo: 'La pieza y la crítica',
        formato: 'el enlace o archivo de la pieza, lo que dijo tu pareja, y la crítica del afiche real con foto y perillas',
        extension: 'una página'
      },
      criterios: [
        'Tu pareja acertó tema y acción.',
        'La crítica nombra al menos dos perillas.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.5.6.3',
      lente: 'lente del nosotros',
      cita: 'La máquina puede convertir el rostro de la persona en un instrumento de sí misma.',
      preguntaEspejo: '¿Mi pieza le sirve a quien la mira, o solo quiere que la mire?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 2 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Lo mucho y lo muy variado no alimenta; empalaga.',
      preguntaEspejo: '¿Qué le sobra a mi pieza que creí que la hacía más completa?'
    },
    floridi: {
      autor: 'Luciano Floridi · Commentary on the Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Lo único de verdad finito, precioso y que no se puede compartir es el tiempo.',
      preguntaEspejo: '¿Qué cosa que diseñé esta semana le hizo perder tiempo a alguien?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Aprendiste a decidir qué va primero. Esa decisión sirve para un afiche, un correo y una presentación.',
    emocional: 'Que tu pareja no entienda tu pieza en tres segundos molesta. Cambiar el tamaño del título, en vez de explicarla, es lo que la arregla.',
    ciudadana: 'Una pieza clara respeta el tiempo de quien pasa. Un afiche que grita para que lo miren le roba atención a todos.',
    local: 'La tejedora inga elige tres colores y una labor que se vea primero antes de tocar el telar. Tu boceto en papel hace lo mismo.',
    intergeneracional: 'Una pieza con los cuatro elementos la puede reutilizar el grupo del año siguiente cambiando la fecha. Una sin jerarquía se rehace desde cero.'
  }
};

export default contenido;
