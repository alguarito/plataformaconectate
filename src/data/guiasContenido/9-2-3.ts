/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/9/9-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 3,
  titulo: 'Tipografía — la voz visible de las palabras',
  resumen: 'En el Carnaval de Riosucio el Matachín recoge los rumores del pueblo y los devuelve en verso, con nombre propio y en público. La diferencia con el rumor no es el contenido: es que alguien pone la cara y que la palabra viene con una forma. Hoy eliges la forma con que va a hablar tu revista.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Par tipográfico',
  preLectura: {
    porQueImporta: 'Si el lector no descifra una palabra al primer intento, abandona. Y no dirá que la letra era ilegible: dirá que el texto no le interesó.',
    preguntaDetonante: '¿Qué letrero de tu barrio reconocerías solo por su letra, sin leer lo que dice?',
    activacion: {
      titulo: 'Con remates o sin ellos',
      descripcion: 'En 2 minutos, mira tres textos que tengas cerca y fíjate solo en si las letras tienen remates en los extremos. Anota qué aire le da cada uno.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 2 construiste las cuadrículas que ordenan la página.',
      siguiente: 'En la sesión 4 eliges la paleta de color que acompaña a esta voz.'
    }
  },
  conceptosClave: [
    {
      termino: 'Display y cuerpo',
      definicion: 'La display es para titulares y puede permitirse ser rara. La de cuerpo tiene que aguantar párrafos enteros sin cansar.',
      ejemplo: 'Una display usada en el cuerpo empieza a molestar en el segundo párrafo.',
      categoria: 'Los cuatro ejes'
    },
    {
      termino: 'Serifa',
      definicion: 'El remate en los extremos de los trazos. Da un aire de libro; su ausencia, un aire de pantalla.',
      ejemplo: 'Casi todos los libros impresos usan serifa; casi todas las aplicaciones, no.',
      categoria: 'Los cuatro ejes'
    },
    {
      termino: 'Familia con pesos',
      definicion: 'Cuántas variantes trae la tipografía. Sin negrita ni cursiva no se puede construir jerarquía dentro de un texto.',
      ejemplo: 'Quien no tiene pesos termina subrayando o poniendo todo en mayúscula.',
      categoria: 'Los cuatro ejes'
    },
    {
      termino: 'Pareja contrastada',
      definicion: 'Titular y cuerpo se sienten parientes pero distinguibles. Dos casi iguales ensucian la página.',
      ejemplo: 'Si al mirar de lejos no se distingue el titular del texto, el par no está haciendo su trabajo.',
      categoria: 'Cómo se combina'
    },
    {
      termino: 'Prueba con texto real',
      definicion: 'Componer un titular y al menos cinco líneas seguidas, porque la palabra suelta de la muestra siempre se ve bien.',
      ejemplo: 'Cinco líneas revelan si la letra cansa, si el interlineado alcanza y si los acentos se ven.',
      categoria: 'Cómo se prueba'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes elegir una voz tipográfica?',
      instrucciones: 'Cinco preguntas sobre los cuatro ejes y sobre cómo se combina un par. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué no conviene usar una tipografía display en el cuerpo de texto?',
          opciones: [
            'Porque suele estar disponible solo en versiones de pago.',
            'Porque cansa la vista a partir del segundo párrafo.',
            'Porque no admite acentos ni caracteres especiales.',
            'Porque siempre ocupa más espacio en la página impresa.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La display puede permitirse ser rara; la de cuerpo tiene que aguantar párrafos.',
          feedbackIncorrecto: 'Porque cansa. Está pensada para llamar la atención en pocas palabras, no para leerse seguido.'
        },
        {
          enunciado: 'Tu titular y tu cuerpo son dos tipografías casi iguales. ¿Qué pasa?',
          opciones: [
            'No hay contraste y la página se ve descuidada.',
            'Mejora la coherencia visual de toda la revista.',
            'Se ahorra tiempo al no tener que cargar dos fuentes.',
            'El texto se vuelve más fácil de leer para todos.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La regla es pareja contrastada, no idéntica.',
          feedbackIncorrecto: 'No hay contraste, y nadie sabe decir por qué la página se ve sucia.'
        },
        {
          enunciado: '¿Para qué sirven los pesos de una familia tipográfica?',
          opciones: [
            'Para que el archivo de la fuente ocupe menos espacio.',
            'Para poder imprimir en distintos tipos de papel.',
            'Para construir jerarquía dentro de un mismo texto.',
            'Para que la tipografía funcione en cualquier idioma.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Sin negrita ni cursiva se termina subrayando o poniendo todo en mayúscula.',
          feedbackIncorrecto: 'Para la jerarquía interna del texto. Sin pesos, destacar algo obliga a recursos peores.'
        },
        {
          enunciado: '¿Qué hace el Matachín en el Carnaval de Riosucio?',
          opciones: [
            'Organiza los desfiles y reparte los papeles de la fiesta.',
            'Recoge los rumores del pueblo y los devuelve en verso y firmados.',
            'Guarda en secreto lo que le cuentan durante el carnaval.',
            'Escribe la crónica oficial que publica la alcaldía cada año.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí, y el pueblo consagra a sus Matachines o los degrada cuando no están a la altura.',
          feedbackIncorrecto: 'Devuelve la palabra en verso, con nombre propio y en público. La diferencia con el rumor es que pone la cara.'
        },
        {
          enunciado: '¿Cómo se prueba de verdad una tipografía antes de elegirla?',
          opciones: [
            'Mirando la palabra de muestra que trae el catálogo.',
            'Comparándola con las que usan las revistas conocidas.',
            'Comprobando cuántos idiomas admite su juego de caracteres.',
            'Componiendo un titular y al menos cinco líneas seguidas.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La palabra suelta siempre se ve bien; cinco líneas revelan si cansa.',
          feedbackIncorrecto: 'Componiendo texto real. La muestra del catálogo está elegida para lucir.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿La emoción que nombró tu compañero se parecía a la que declaraste? Si no, ¿cuál de las dos tipografías la desvió?',
    transferencia: 'Anota los dos nombres exactos en tu bitácora del periodo. Los vas a necesitar en todas las sesiones que quedan.',
    cierre: 'La diferencia con el rumor no es el contenido: es que alguien pone la cara y le da una forma a lo que dice.'
  },
  saberAncestral: {
    saber: 'En Riosucio, Caldas, hicieron algo poco común con el chisme. El Matachín es el poeta del Carnaval. Recoge los rumores y los hechos del pueblo y los devuelve en verso, con nombre propio y en público. Y el pueblo, a su vez, «consagra a sus Matachines o los degrada» cuando no están a la altura (Ministerio de Cultura, 2011, p. 41). Fíjate en lo que cambia ahí. El contenido puede ser el mismo que el del rumor. Lo que cambia es que alguien pone la cara, y que la palabra viene con una forma: el verso obliga a medir, a elegir y a sostener lo dicho. La cara de exclusión: el chisme fue y sigue siendo control social sobre las mujeres, y lo que se vigila es la reputación sexual. No es cohesión pintoresca. Hoy vas a trabajar con lo mismo: cómo la forma de una palabra decide con qué voz se oye.',
    fuente: 'Carnaval de Riosucio · el Matachín devuelve la palabra en verso y firmada',
    referencia: 'Ministerio de Cultura de Colombia. (2011). Plan Especial de Salvaguardia. Carnaval de Riosucio, Caldas. Ministerio de Cultura.',
    preguntaPuente: 'El Matachín firma lo que dice y el verso lo obliga a medir cada palabra. Tu revista, ¿con qué voz habla, y quién decidió que hablara así?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La palabra que se firma',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Diez tipografías reales',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro ejes',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu par tipográfico',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Diez tipografías reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Reúne diez tipografías de libros, revistas, logotipos y letreros de la calle.',
        'Fotografía o copia una muestra de cada una.',
        'Anota en cada una si la letra tiene remates en los extremos.',
        'Anota si la usarías para un titular o para un párrafo largo.',
        'Marca la que más te costó clasificar.'
      ],
      cuaderno: {
        titulo: 'Diez tipografías reales',
        formato: 'tabla de 10 filas y 3 columnas (dónde la vi / tiene remates / titular o cuerpo)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las diez muestras vienen de sitios distintos.',
        'Cada una tiene sus dos respuestas anotadas.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro ejes',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro ejes con una frase propia cada uno.',
        'Clasifiquen sus veinte muestras por los cuatro ejes.',
        'Formen dos pares con ellas, uno que funcione y otro que no.',
        'Escriban por qué falla el segundo, en términos de contraste y no de gusto.'
      ],
      cuaderno: {
        titulo: 'Los cuatro ejes',
        formato: 'los cuatro ejes con frase propia, las veinte muestras clasificadas y los dos pares',
        extension: 'media página'
      },
      criterios: [
        'El par que falla está explicado por contraste, no por gusto.',
        'Las veinte muestras quedaron clasificadas.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu par tipográfico',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe en una frase la emoción central de tu revista.',
        'Elige la tipografía de titulares con nombre exacto, disponible en Google Fonts.',
        'Elige la del cuerpo, que respete esa emoción y aguante párrafos largos.',
        'Justifica cada elección en una frase, en términos de los cuatro ejes.',
        'Compón un titular y un párrafo de cinco líneas y enséñaselo a un compañero.'
      ],
      cuaderno: {
        titulo: 'Tu par tipográfico',
        formato: 'la emoción declarada, los dos nombres con su justificación y la prueba compuesta',
        extension: 'media página'
      },
      criterios: [
        'Las dos tipografías tienen nombre exacto y están en Google Fonts.',
        'Un compañero nombró una emoción parecida a la declarada.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.8.4',
      lente: 'lente del nosotros',
      cita: 'La aparente fealdad del rostro del oprimido, el ajado rostro del campesino, la endurecida mano del obrero… es el punto de partida de la estética de la liberación, porque es la interpelación que revela la belleza popular.',
      preguntaEspejo: '¿Qué letra de mi barrio me parecía fea y ahora entiendo que tiene una voz propia?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 5 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Con los ojos fijos en tu tarea, mírala y, recordando que es tu deber ser bueno, hazla sin desviarte; y habla como te parezca más justo, con buena disposición, con modestia y sin hipocresía. (trad. propia)',
      preguntaEspejo: '¿La voz de mi revista se parece a cómo hablo yo, o me la puse encima?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), Prefacio',
      lente: 'lente de la infoesfera',
      cita: 'Tememos y rechazamos aquello a lo que no logramos dar sentido y significado. (trad. propia)',
      preguntaEspejo: '¿Qué texto dejé de leer esta semana por cómo estaba compuesto, sin darme cuenta de que era por eso?'
    }
  },
  cincoDimensiones: {
    personal: 'Elegiste una voz para lo que escribes, y eso obliga a decidir cómo quieres sonar.',
    emocional: 'Descubrir que una letra que te gustaba no aguanta un párrafo enseña a separar el gusto del criterio.',
    ciudadana: 'Lo que no se lee se rechaza, y quien no puede leer una pieza queda fuera de lo que esa pieza dice.',
    local: 'Los letreros pintados a mano de tu calle tienen una voz que ningún catálogo de fuentes consigue.',
    intergeneracional: 'El Matachín firma en verso desde hace generaciones. Poner la cara sobre lo que se dice no es nuevo.'
  }
};

export default contenido;
