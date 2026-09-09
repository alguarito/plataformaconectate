/**
 * Contenido enriquecido para Grado 9 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/9/9-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 4,
  titulo: 'Línea del tiempo de la técnica — del fuego a la imprenta',
  resumen: 'En el Cauca medio hubo orfebres que fundían oro a la cera perdida en seis pasos sin vuelta atrás, siglos antes de casi todo lo que aparece en las listas de hitos. No están ausentes porque no existieran: están ausentes porque quien hizo la lista no los buscó. Hoy armas tu propia línea del tiempo y sostienes qué historia cuenta.',
  duracionMin: 90,
  subtema: 'Historia de la técnica · Cronología y poder',
  preLectura: {
    porQueImporta: 'Ordenar hitos parece un trabajo neutro y no lo es. Decidir qué entra en una cronología es decidir qué se recuerda.',
    preguntaDetonante: 'Si tuvieras que nombrar tres inventos que cambiaron la vida humana, ¿alguno sería de este continente?',
    activacion: {
      titulo: 'Los tres primeros',
      descripcion: 'En 2 minutos, escribe los tres primeros hitos técnicos que se te vengan a la cabeza. Mira de dónde son. Esa es tu lista por defecto.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 3 construiste una balanza y viste que medir nunca fue neutral.',
      siguiente: 'En la sesión 5 mapeas los oficios que la revolución industrial quitó y puso.'
    }
  },
  conceptosClave: [
    {
      termino: 'Adopción',
      definicion: 'Que el invento se haya difundido más allá de quien lo hizo. Inventar y que se use son dos cosas distintas.',
      ejemplo: 'Muchas cosas se inventaron dos veces en lugares distintos y solo una versión se difundió.',
      categoria: 'Los cuatro criterios'
    },
    {
      termino: 'Permanencia',
      definicion: 'Que siguiera usándose o que dejara descendencia técnica, aunque el objeto original desapareciera.',
      ejemplo: 'La cera perdida sigue usándose hoy en joyería y en fundición industrial de piezas complejas.',
      categoria: 'Los cuatro criterios'
    },
    {
      termino: 'Exónimo',
      definicion: 'Nombre que le pone a un pueblo alguien de afuera. «Quimbaya» lo pusieron los coleccionistas y se extendió a todo el Cauca medio.',
      ejemplo: 'Los orfebres no dejaron nombre; los coleccionistas sí, y ese es el que quedó.',
      categoria: 'Quién escribe la lista'
    },
    {
      termino: 'Soberanía narrativa',
      definicion: 'Poder contar la propia historia en vez de aparecer solo en la que cuentan otros, o no aparecer.',
      ejemplo: 'Una lista que va del fuego al vapor y de ahí al chip cuenta la historia de una región, no de la técnica.',
      categoria: 'Quién escribe la lista'
    },
    {
      termino: 'Cera perdida con núcleo',
      definicion: 'Fundición en seis pasos donde cada uno depende del anterior y no hay corrección posible: hay que planear todo antes de empezar.',
      ejemplo: 'Si el error está en el paso tres, no se vuelve al dos. Se empieza de nuevo.',
      categoria: 'El procedimiento'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes juzgar un hito técnico?',
      instrucciones: 'Cinco preguntas sobre los criterios y sobre quién arma las listas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Qué significa que «Quimbaya» sea un exónimo?',
          opciones: [
            'Que es el nombre con que ese pueblo se llamaba a sí mismo desde antiguo.',
            'Que se lo pusieron desde afuera, en este caso los coleccionistas.',
            'Que designa una técnica y no a un grupo de personas.',
            'Que proviene de una lengua indígena ya desaparecida.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Los orfebres no dejaron nombre; los coleccionistas sí, y ese fue el que quedó.',
          feedbackIncorrecto: 'Que se lo pusieron desde afuera. Se extendió a todo el Cauca medio sin que nadie de allí lo eligiera.'
        },
        {
          enunciado: 'Un invento existió pero nunca salió del taller donde se hizo. ¿Qué criterio falla?',
          opciones: [
            'La adopción, porque no se difundió más allá de su creador.',
            'La invención, porque en realidad nunca llegó a completarse del todo.',
            'La permanencia, porque el objeto acabó desapareciendo.',
            'La transformación, porque no llegó a cambiar ninguna vida.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Inventar y que se use son dos cosas distintas, y la lista pide las dos.',
          feedbackIncorrecto: 'Falla la adopción: no se difundió. Puede estar perfectamente inventado y aun así no ser un hito.'
        },
        {
          enunciado: '¿Por qué la cera perdida con núcleo exige planear toda la secuencia antes de empezar?',
          opciones: [
            'Porque el oro es un material caro y no conviene desperdiciarlo nunca.',
            'Porque hay que reunir a varias personas para poder ejecutarla.',
            'Porque cada paso depende del anterior y no hay corrección posible.',
            'Porque el molde de arcilla tarda varios días en secarse bien.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Si el error está en el paso tres, no se vuelve al dos: se empieza de nuevo.',
          feedbackIncorrecto: 'Porque no admite corrección. Un error a mitad obliga a comenzar el procedimiento entero.'
        },
        {
          enunciado: 'Tu línea del tiempo va del fuego al vapor y de ahí al computador. ¿Qué le pasa?',
          opciones: [
            '',
            'Le faltan fechas exactas para cada uno de los hitos.',
            'Tiene demasiados hitos concentrados en el siglo XX.',
            'Cuenta la historia de una región y la llama «la técnica».'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Es una historia legítima, pero conviene decir cuál es en vez de presentarla como la única.',
          feedbackIncorrecto: 'Cuenta la historia de una región del mundo. El problema no son las fechas: es el recorte.'
        },
        {
          enunciado: '¿Por qué conviene listar veinte candidatos y quedarse con diez?',
          opciones: [
            'Porque descartar es donde se aplican de verdad los criterios.',
            'Porque así el trabajo se ve mucho más completo ante el docente que evalúa.',
            'Porque diez es un número que cabe mejor en una hoja.',
            'Porque conviene tener repuestos por si alguno resulta falso.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Elegir directamente diez lleva a poner los primeros que se te ocurren, que son los de la lista global.',
          feedbackIncorrecto: 'Porque descartar es donde se aplica el criterio. Ir directo a diez reproduce la lista por defecto.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De los diez hitos de tu línea, ¿cuántos habrías nombrado antes de esta sesión y cuántos tuviste que buscar?',
    transferencia: 'Pregúntale a alguien mayor qué invento le cambió la vida a su generación. Mira si cabría en tu línea o si la obligaría a cambiar.',
    cierre: 'No están ausentes de las listas porque no existieran. Están ausentes porque quien hizo la lista no los buscó.'
  },
  saberAncestral: {
    saber: 'En el Cauca medio, entre el Quindío, Risaralda y el norte del Valle, hubo orfebres que fundían oro a la cera perdida con núcleo. El procedimiento tiene seis pasos y ninguno admite corrección. Se modela un núcleo y se recubre de cera. Se talla el detalle sobre la cera y se forra todo en arcilla. Se saca la cera derritiéndola y se vierte el metal en el hueco. Si te equivocas en el paso tres, no vuelves al dos: empiezas de nuevo. Eso exige planear la secuencia entera antes de tocar nada. Ahora fíjate en cómo lo llamamos. «Quimbaya» es un exónimo: un nombre que pusieron los coleccionistas y que se extendió a todo el Cauca medio. El Tesoro llamado Quimbaya se saqueó en 1890 en Filandia, sin excavación científica. La cara de exclusión cabe en una frase: los orfebres no dejaron nombre, los coleccionistas sí.',
    fuente: 'Orfebres del Cauca medio · la cera perdida, seis pasos sin vuelta atrás',
    referencia: 'Uribe Villegas, M. A. (1992). La orfebrería Quimbaya tardía. Boletín Museo del Oro, 31, 30--124. · Banco de la República. (s.\\,f.). Quimbaya. Enciclopedia Banrepcultural.',
    preguntaPuente: 'Los orfebres del Cauca medio resolvieron un procedimiento de seis pasos sin vuelta atrás, siglos antes de lo que cuentan las listas. ¿Por qué crees que no aparecen en ellas?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Seis pasos sin vuelta atrás',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Tres listas, tres miradas',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro criterios',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu línea del tiempo',
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
      titulo: 'Tres listas, tres miradas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca tres listas de hitos técnicos, una global, una latinoamericana y una colombiana.',
        'Anota los cinco primeros de cada una.',
        'Marca los hitos que se repiten en las tres.',
        'Escribe qué región del mundo domina la lista global.',
        'Anota un hito de la lista colombiana que no aparezca en las otras dos.'
      ],
      cuaderno: {
        titulo: 'Tres listas, tres miradas',
        formato: 'tres columnas con los cinco primeros hitos de cada lista y los repetidos marcados',
        extension: 'un tercio de página'
      },
      criterios: [
        'Queda escrito qué región domina la lista global.',
        'Hay un hito colombiano señalado como ausente de las otras dos.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro criterios',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro criterios con una frase propia cada uno.',
        'Apliquen los cuatro a la orfebrería a la cera perdida del Cauca medio.',
        'Apliquen los cuatro a un hito de la lista global y comparen.',
        'Escriban en dos líneas por qué uno aparece en las listas y el otro no.'
      ],
      cuaderno: {
        titulo: 'Los cuatro criterios',
        formato: 'los cuatro criterios con frase propia aplicados a los dos casos y las dos líneas de comparación',
        extension: 'media página'
      },
      criterios: [
        'Los cuatro criterios están aplicados a los dos casos.',
        'Las dos líneas explican por qué uno entra en las listas y el otro no.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu línea del tiempo',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Lista veinte candidatos mezclando las tres listas con lo que sepas de tu región.',
        'Aplícales los cuatro criterios y quédate con diez.',
        'Comprueba que al menos tres sean de Colombia o América Latina.',
        'Ordénalos por fecha y dibújalos sobre una línea, no en lista vertical.',
        'Cierra con un recuadro que diga qué historia cuenta tu línea y quién queda fuera.'
      ],
      cuaderno: {
        titulo: 'Tu línea del tiempo',
        formato: 'la línea dibujada con los diez hitos y sus datos, más el recuadro de la leyenda',
        extension: 'una página'
      },
      criterios: [
        'Al menos tres hitos son de Colombia o América Latina.',
        'El recuadro nombra a alguien concreto que queda fuera.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.3.1',
      lente: 'lente del nosotros',
      cita: 'Analéctico quiere indicar el hecho real humano por el que todo hombre, todo grupo o pueblo se sitúa siempre «más allá» (aná-) del horizonte de la totalidad.',
      preguntaEspejo: '¿Qué sé que existió y no cabe en ninguna de las listas que consulté?'
    },
    estoico: {
      autor: 'Séneca · De la brevedad de la vida, I (c. 49 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Lo cierto es que la vida que se nos dio no es breve, nosotros hacemos que lo sea; y que no somos pobres, sino pródigos del tiempo.',
      preguntaEspejo: 'Al ver mi línea dibujada, ¿qué me sorprendió del reparto del tiempo?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), Prefacio',
      lente: 'lente de la infoesfera',
      cita: 'Tememos y rechazamos aquello a lo que no logramos dar sentido y significado. (trad. propia)',
      preguntaEspejo: '¿Qué he descartado por no entenderlo, en vez de por conocerlo bien?'
    }
  },
  cincoDimensiones: {
    personal: 'Descubriste cuál era tu lista por defecto, que es lo primero que aparece cuando a uno le preguntan.',
    emocional: 'Ver que algo tuyo no está en ninguna lista molesta. Esa molestia es información, no rabia.',
    ciudadana: 'Decidir qué entra en una cronología es decidir qué se recuerda, y eso nunca fue un trabajo neutro.',
    local: 'A menos de dos horas de tu casa se resolvió un procedimiento de seis pasos que casi ninguna lista menciona.',
    intergeneracional: 'Los orfebres del Cauca medio no dejaron nombre. Lo que dejaron fue el procedimiento, y todavía se usa.'
  }
};

export default contenido;
