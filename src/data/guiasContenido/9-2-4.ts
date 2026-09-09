/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/9/9-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 4,
  titulo: 'Color en editorial — contraste, jerarquía, accesibilidad',
  resumen: 'En el tul nasa las plantas pertenecen a categorías —frías, calientes, dulces y bravas— y cada una se siembra según la suya para mantener el equilibrio. Una paleta editorial funciona igual: una lista cerrada donde cada color tiene un oficio. Hoy construyes la tuya con cinco colores, contraste verificado y al menos uno sacado de donde vives.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Paleta de color',
  preLectura: {
    porQueImporta: 'Un color sin función declarada es un color que en algún momento va a estorbar, porque nadie sabrá cuándo usarlo.',
    preguntaDetonante: '¿Qué colores tiene el paisaje o la calle que ves todos los días, y podrías nombrar tres?',
    activacion: {
      titulo: 'En escala de grises',
      descripcion: 'En 2 minutos, mira una imagen a color y después imagínala en grises. ¿Qué información se pierde al quitarle el color?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 3 elegiste el par tipográfico que le da voz a tu revista.',
      siguiente: 'En la sesión 5 trabajas el diálogo entre imagen y texto con el sistema visual completo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Contraste tonal',
      definicion: 'La diferencia de claridad entre dos colores, no solo de matiz. Es la que sobrevive en escala de grises.',
      ejemplo: 'Dos colores muy distintos pueden volverse el mismo gris, y ahí se pierde la jerarquía.',
      categoria: 'Los tres principios'
    },
    {
      termino: 'Información solo por color',
      definicion: 'Cuando el único indicio de algo es el color, y por tanto desaparece para quien no lo distingue.',
      ejemplo: 'Si el rojo significa una cosa, hace falta además una forma, un símbolo o una palabra.',
      categoria: 'Los tres principios'
    },
    {
      termino: 'Color de acento',
      definicion: 'El que destaca lo poco importante de verdad. Funciona porque es escaso: alrededor del diez por ciento.',
      ejemplo: 'Usado en todo deja de acentuar y se convierte en ruido visual.',
      categoria: 'Las cinco funciones'
    },
    {
      termino: 'Función declarada',
      definicion: 'Decir para qué sirve cada color de la paleta, para saber cuándo se usa y cuándo no.',
      ejemplo: 'Un color sin función acaba apareciendo en cualquier parte, y nadie sabe explicar por qué está.',
      categoria: 'Las cinco funciones'
    },
    {
      termino: 'Lista cerrada de categorías',
      definicion: 'Un conjunto fijo donde cada elemento tiene su lugar, y donde meter algo fuera de la lista rompe el equilibrio.',
      ejemplo: 'En el tul nasa las plantas son frías, calientes, dulces o bravas, y se siembran según eso.',
      categoria: 'De dónde salen'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes armar una paleta que funcione?',
      instrucciones: 'Cinco preguntas sobre contraste, funciones y accesibilidad del color. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué conviene mirar una paleta en escala de grises?',
          opciones: [
            'Para comprobar cómo se verá si se imprime en blanco y negro.',
            'Para ver si el contraste depende solo del matiz y se pierde.',
            'Para ahorrar tinta al imprimir las pruebas del diseño.',
            'Para comparar la paleta con las de otras revistas del mismo tema.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Dos colores muy distintos pueden volverse el mismo gris, y ahí desaparece la jerarquía.',
          feedbackIncorrecto: 'Para ver si el contraste sobrevive sin el color. Si depende del matiz, se pierde para mucha gente.'
        },
        {
          enunciado: 'Usas el color de acento en casi toda la revista. ¿Qué ocurre?',
          opciones: [
            'Deja de acentuar y se convierte en ruido.',
            'Refuerza la identidad visual de la publicación.',
            'Mejora la coherencia entre las distintas páginas.',
            'Facilita que el lector recuerde la marca de la revista.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. El acento funciona precisamente porque es escaso.',
          feedbackIncorrecto: 'Deja de acentuar. Si todo está destacado, no hay nada destacado.'
        },
        {
          enunciado: '¿Cómo se clasifican las plantas en el tul nasa?',
          opciones: [
            'Por su altura y por el tiempo que tardan en crecer.',
            'Por el color de sus flores y de sus frutos maduros.',
            'Como frías, calientes, dulces o bravas.',
            'Según la estación del año en que se siembran.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Cada planta entra en una categoría y se siembra según ella.',
          feedbackIncorrecto: 'Frías, calientes, dulces o bravas. Es una lista cerrada donde cada una tiene su lugar.'
        },
        {
          enunciado: 'Tu gráfico distingue dos estados solo con rojo y verde. ¿Qué le falta?',
          opciones: [
            'Aumentar la saturación de los dos colores usados.',
            'Añadir una leyenda en la esquina de la página.',
            'Cambiar a una pareja de colores más contrastada.',
            ''
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Es la regla que más se olvida y la más fácil de cumplir.',
          feedbackIncorrecto: 'Una segunda marca además del color. Con solo color, esa información no llega a todos.'
        },
        {
          enunciado: '¿Por qué se anota el código hexadecimal y no el nombre del color?',
          opciones: [
            'Porque «un azul oscuro» no se puede reproducir con exactitud.',
            'Porque los nombres de color cambian según el idioma.',
            'Porque el código ocupa menos espacio en la bitácora.',
            'Porque los programas de diseño no aceptan nombres.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto, y por eso el código va a la bitácora junto a los nombres de las tipografías.',
          feedbackIncorrecto: 'Porque el nombre no se puede reproducir. El código sí, exactamente.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué emoción nombró tu compañero, y si fue distinta de la tuya, qué color crees que la desvió?',
    transferencia: 'Fotografía un paisaje o una fachada de tu barrio y sácale tres colores con su código. Casi nunca coinciden con los del catálogo.',
    cierre: 'Cada planta del tul tiene su categoría y su lugar. Cinco colores con oficio rinden más que doce sin él.'
  },
  saberAncestral: {
    saber: 'En los resguardos nasa de Toribío, Tacueyó y San Francisco, en el Cauca, la huerta familiar se llama tul. Y no se siembra al azar. Las plantas pertenecen a categorías: frías, calientes, dulces y bravas. Cada una entra en una de ellas y se siembra según eso, para mantener el equilibrio del conjunto. La guía se queda ahí a propósito: cita la clasificación, no explica cómo funciona por dentro, porque eso no le corresponde. Lo que sí sirve para hoy es la forma. Es una lista cerrada de categorías donde cada elemento tiene un lugar y una función, y donde meter cualquier cosa rompe el equilibrio de todo. Una paleta editorial es exactamente eso. La cara de exclusión: el estudio reporta que solo el 43 % de las familias mantiene el tul. Lo erosionan la escuela foránea, las tecnologías agrícolas modernas y los cultivos ilícitos.',
    fuente: 'El tul nasa · plantas frías, calientes, dulces y bravas',
    referencia: 'Prieto Novoa, F. N. y León-Sicard, T. E. (2024). Actores y redes en la configuración del agroecosistema Tul Nasa en los resguardos indígenas de Toribío, Tacueyó y San Francisco en el departamento del Cauca, Colombia. Luna Azul, (59), 53--77.',
    preguntaPuente: 'En el tul cada planta pertenece a una categoría y se siembra según ella. En tu paleta, ¿qué hace cada color, y qué pasaría si le pusieras uno más?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Cada planta en su categoría',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Cinco paletas reales',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Tres principios y cinco funciones',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu paleta editorial',
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
      titulo: 'Cinco paletas reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        '',
        'Anota cuántos colores usa cada una de verdad, contando solo los que se repiten.',
        'Anota cuál domina en cada una.',
        'Mira las cinco en escala de grises.',
        'Marca en cuál se pierde información al quitar el color.'
      ],
      cuaderno: {
        titulo: 'Cinco paletas reales',
        formato: 'tabla de 5 filas y 3 columnas (de dónde es / cuántos colores usa / cuál domina)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Ninguna fila dice «muchos» en la columna del conteo.',
        'Está marcada la paleta que falla en escala de grises.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Tres principios y cinco funciones',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los tres principios con una frase propia cada uno.',
        'Escriban las cinco funciones y qué hace cada una.',
        'Asignen función a los colores de una de sus paletas y vean si sobra alguno.',
        'Busquen un caso donde la información vaya solo por color y escriban cómo lo arreglarían.'
      ],
      cuaderno: {
        titulo: 'Tres principios y cinco funciones',
        formato: 'los tres principios con frase propia, las cinco funciones y una paleta con función asignada',
        extension: 'media página'
      },
      criterios: [
        'Queda dicho si en la paleta analizada sobra algún color.',
        'El caso de información solo por color tiene su arreglo escrito.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu paleta editorial',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Escribe la emoción central de tu revista, la misma que declaraste con la tipografía.',
        'Elige dominante, secundario y acento, cada uno con su código hexadecimal.',
        'Define fondo y texto, y verifica que el contraste entre los dos sea suficiente.',
        'Comprueba que al menos uno venga de una paleta natural o tradicional de tu región.',
        'Enséñale la paleta a un compañero y pregúntale qué emoción le transmite.'
      ],
      cuaderno: {
        titulo: 'Tu paleta editorial',
        formato: 'los cinco colores con código y función, la verificación del contraste y las tres frases de la emoción',
        extension: 'media página'
      },
      criterios: [
        'Los cinco códigos están anotados y el contraste verificado.',
        'Un compañero nombró una emoción sin que se la explicaran.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.8.1',
      lente: 'lente del nosotros',
      cita: 'Las naciones dependientes y explotadas contemplan en su suelo la contradictoria existencia de un hetero-diseño; de una imitación inadecuada de diversas tecnologías… La negación de la cultura popular niega igualmente su técnica.',
      preguntaEspejo: '¿De dónde saqué los colores que uso, y me pareció normal que vinieran de allí?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones V, 5 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Muestra entonces las cualidades que están enteramente en tu poder: sinceridad, seriedad, resistencia en el trabajo, contento con lo que te toca, benevolencia, franqueza, ninguna afición a lo superfluo. (trad. propia)',
      preguntaEspejo: '¿Qué color de mi paleta no sabría decir cuándo se usa?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.6',
      lente: 'lente de la infoesfera',
      cita: 'Las configuraciones por defecto y otros aspectos del diseño de nuestras tecnologías deberían respetar y proteger las capacidades atencionales. (trad. propia)',
      preguntaEspejo: '¿Cuánto esfuerzo le estoy pidiendo a quien lea mi revista, y lo decidí yo o salió así?'
    }
  },
  cincoDimensiones: {
    personal: 'Elegiste cinco colores y sabes decir qué hace cada uno, que es más difícil que elegir doce.',
    emocional: 'Que tu compañero nombre otra emoción no es un fracaso: es información sobre lo que tu paleta dice de verdad.',
    ciudadana: 'Verificar el contraste decide cuánto esfuerzo le pides a alguien por leerte, y quién queda fuera.',
    local: 'Sacar un color de una fachada de tu calle da un resultado que no tiene ninguna marca del mundo.',
    intergeneracional: 'El tul organiza una huerta con cuatro categorías y funciona hace generaciones. Las listas cerradas no son un invento del diseño.'
  }
};

export default contenido;
