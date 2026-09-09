/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/10/10-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 5,
  titulo: 'Estructura editorial — arco narrativo, ritmo y capítulos',
  resumen: 'Subes del capítulo suelto al libro entero: el arco en tres actos, la función de cada capítulo, el reparto de páginas con variación y los tres capítulos que cargan más peso.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Estructura y ritmo',
  preLectura: {
    porQueImporta: 'Un cierre apurado desperdicia todo lo anterior, y diez capítulos del mismo largo producen un libro plano aunque cada uno esté bien escrito. La estructura decide cómo se lee el conjunto.',
    preguntaDetonante: 'Si tu libro tuviera que perder veinte páginas, ¿de qué acto las quitarías?',
    activacion: {
      titulo: 'Las dos cosechas',
      descripcion: 'En 3 minutos, dibuja una barra por cada capítulo de tu escaleta, con la altura de las páginas que estimaste. Mira el dibujo: ¿es plano o tiene relieve?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 4 iteraste un capítulo hasta que sonara a tu voz.',
      siguiente: 'En la sesión 6 defines quién firma la obra y bajo qué licencia circula.'
    }
  },
  conceptosClave: [
    {
      termino: 'Planteamiento',
      definicion: 'El primer acto, cerca de una cuarta parte del libro. Presenta el tema, los conceptos y la pregunta central.',
      ejemplo: 'Dos o tres capítulos que dejan claro de qué va el libro y por qué vale la pena seguir.',
      categoria: 'El arco'
    },
    {
      termino: 'Desarrollo',
      definicion: 'El segundo acto, cerca de la mitad del libro. Profundiza, complica y propone. Es la zona más larga.',
      ejemplo: 'Cuatro a seis capítulos donde cada uno agrega algo que el anterior no tenía.',
      categoria: 'El arco'
    },
    {
      termino: 'Cierre',
      definicion: 'El tercer acto, la cuarta parte restante. Resuelve y propone. No es un resumen de lo dicho.',
      ejemplo: 'Cinco páginas para cerrar un libro de ochenta dejan a quien lee con la sensación de que faltó algo.',
      categoria: 'El arco'
    },
    {
      termino: 'Capítulos pivote',
      definicion: 'El primero, el del medio y el último. Cargan más que los demás y merecen más trabajo.',
      ejemplo: 'Si la apertura falla, lo que venga después casi no importa: nadie llega a leerlo.',
      categoria: 'Peso y ritmo'
    },
    {
      termino: 'Ritmo de páginas',
      definicion: 'El reparto deliberado de extensión entre capítulos. Cortos para transición y gancho, largos para desarrollo.',
      ejemplo: 'Diez capítulos de ocho páginas producen una lectura plana aunque cada uno esté bien escrito.',
      categoria: 'Peso y ritmo'
    },
    {
      termino: 'Función del capítulo',
      definicion: 'Lo que ese capítulo hace en el arco: enganchar, profundizar, contrastar, dar un giro o cerrar.',
      ejemplo: 'Si la función no cabe en una frase, el capítulo necesita revisión antes que páginas.',
      categoria: 'Peso y ritmo'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica la estructura editorial',
      instrucciones: '5 preguntas para confirmar que puedes repartir el peso de un libro. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué proporción del libro suele ocupar el desarrollo?',
          opciones: [
            'Cerca de una cuarta parte, igual que el planteamiento y que el cierre final',
            'Cerca de la mitad, porque es donde el libro profundiza y avanza de verdad',
            'Cerca de tres cuartas partes, dejando muy poco espacio para plantear y cerrar',
            'No hay proporción fija, porque depende únicamente del género que se escriba'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. El desarrollo es la zona más larga: ahí está el trabajo que sostiene el libro.',
          feedbackIncorrecto: 'No son tres partes iguales ni es libre. El desarrollo pesa cerca de la mitad.'
        },
        {
          enunciado: '¿Cuáles son los tres capítulos pivote?',
          opciones: [
            'Los tres primeros, porque son los que deciden si alguien continúa leyendo el libro',
            'Los que el autor considere más importantes según el tema que esté tratando',
            'Los tres del acto de desarrollo, que es donde se concentra el peso del libro',
            'El primero, el del medio y el último, que cargan más que todos los demás'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. El primero decide si siguen leyendo, el del medio sostiene la parte larga y el último es lo que queda.',
          feedbackIncorrecto: 'No son los tres primeros ni los del desarrollo. Son el primero, el del medio y el último.'
        },
        {
          enunciado: '¿Qué pasa si todos los capítulos tienen el mismo largo?',
          opciones: [
            'La lectura queda plana, porque nada se destaca sobre el resto del libro',
            'Nada relevante, porque la uniformidad hace el libro más fácil de seguir',
            'El libro resulta más corto de lo que debería para el tema que trata',
            'Se dificulta la maquetación posterior, porque las páginas no calzan bien'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Sin variación, lo importante no tiene dónde apoyarse y todo se lee igual.',
          feedbackIncorrecto: 'No es un problema de longitud ni de maquetación. Es que sin relieve nada se destaca.'
        },
        {
          enunciado: '¿Cuál es la prueba de que un capítulo merece estar en el libro?',
          opciones: [
            'Que trate un asunto relacionado con el tema general que anuncia el título',
            'Que su función en el arco se pueda nombrar en una sola frase',
            'Que tenga una extensión parecida a la de los capítulos que lo rodean',
            'Que aporte información que no aparezca en ninguna otra parte del libro'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Si la función no cabe en una frase, el capítulo está ahí porque el tema lo sugería.',
          feedbackIncorrecto: 'Estar relacionado con el tema no basta. La prueba es poder nombrar qué hace ese capítulo en el arco.'
        },
        {
          enunciado: 'El año cafetero tiene dos cosechas de distinto tamaño y un «tiempo frío» entre ellas. ¿Qué aplica eso a tu libro?',
          opciones: [
            'Que conviene escribir el libro en dos temporadas separadas por un periodo de descanso',
            'Que los ciclos productivos del campo inspiraron las estructuras narrativas modernas',
            'Que el ciclo no reparte el trabajo en partes iguales, y la estructura tampoco debería',
            'Que todo proyecto largo necesita pausas para que quien lo hace no termine agotado'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Una cosecha grande, una pequeña y un periodo entre las dos: el peso está repartido con relieve.',
          feedbackIncorrecto: 'No es sobre el calendario de escritura ni sobre el descanso propio. Es sobre el reparto desigual del peso.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál de mis capítulos está ahí por función y cuál está porque el tema lo sugería?',
    transferencia: 'Llega a la próxima sesión con el mapa estructural. Todo lo que produzcas de aquí en adelante se va a acomodar sobre ese plano.',
    cierre: 'Al terminar podrás: (1) analizar tu escaleta contra el arco de tres actos y detectar si el planteamiento se alargó o el cierre quedó corto; (2) explicar por qué los tres capítulos pivote necesitan más trabajo que los demás; (3) crear el mapa estructural completo, con la función d…'
  },
  saberAncestral: {
    saber: 'El café no se recoge todo el año igual. Colombia tiene dos cosechas: la principal, hacia septiembre y diciembre, y una segunda más pequeña que llaman mitaca o traviesa, hacia abril y junio (Parada Sanabria, 2017). El Valle del Cauca está en traviesa durante el primer semestre, mientras otras regiones están en cosecha principal. En las veredas cafeteras de Caldas los campesinos llaman «tiempo frío» al periodo entre las dos. Y no es tiempo perdido: es la otra mitad del ciclo, la que hace posible la cosecha siguiente. La cara de exclusión está en de quién es ese descanso. Es del cultivo y del calendario, no del recolector: entre cosechas no hay jornal.',
    fuente: 'Campesinado cafetero de Caldas · las dos cosechas y el «tiempo frío» entre ellas',
    referencia: 'Parada Sanabria, P. J. (2017). Práctica social y cultural del campesinado cafetero en cuatro municipios de Caldas (Colombia). Revista Colombiana de Sociología, 40(1 Supl.), 193--212. https://doi.org/10.15446/rcs.v40n1Supl.65913',
    preguntaPuente: '¿Por qué un año cafetero no reparte el trabajo en partes iguales? ¿Y qué le pasa a un libro donde los diez capítulos pesan exactamente lo mismo?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las dos cosechas y el tiempo frío',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Auditoría de mi escaleta',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · El arco, los pivotes y el ritmo',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Mi mapa estructural',
      duracionMin: 35
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
      verbo: 'ANALIZA',
      titulo: 'Auditoría de mi escaleta',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma la escaleta que armaste en la sesión 2.',
        'Etiqueta cada capítulo como planteamiento, desarrollo o cierre.',
        'Suma las páginas estimadas de cada grupo y conviértelas en proporciones.',
        'Compara esas proporciones con el arco de una cuarta parte, la mitad y una cuarta parte.',
        'Anota dónde está la mayor desproporción y qué capítulo la causa.'
      ],
      cuaderno: {
        titulo: 'Auditoría de mi escaleta',
        formato: 'tabla con capítulo, etiqueta, páginas y total por grupo, más la comparación con el arco',
        extension: 'un tercio de página'
      },
      criterios: [
        'Todos los capítulos quedaron etiquetados, ninguno sin acto.',
        'Está señalado el capítulo que causa la mayor desproporción.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'El arco, los pivotes y el ritmo',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los tres actos con su proporción y su función.',
        'Escriban los tres capítulos pivote y qué carga cada uno.',
        'Escriban los errores típicos de estructura.',
        'Cada uno explica la función de cada capítulo de su libro en una frase.',
        'Marquen los capítulos cuya función no cabe en una frase.'
      ],
      cuaderno: {
        titulo: 'El arco, los pivotes y el ritmo',
        formato: 'los tres actos, los tres pivotes, los errores y la lista de capítulos sin función clara',
        extension: 'media página'
      },
      criterios: [
        'Cada pivote tiene escrito qué carga, no solo cuál es.',
        'Está la lista de capítulos cuya función no cabe en una frase.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Mi mapa estructural',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Reorganiza la escaleta hacia el arco de tres actos.',
        'Numera los capítulos definitivos con su título.',
        'Escribe la función de cada uno en una frase.',
        'Reparte las páginas con variación deliberada y marca los tres pivotes.',
        'Escribe el mapa completo en una página y léelo en voz alta.'
      ],
      cuaderno: {
        titulo: 'Mi mapa estructural',
        formato: 'el mapa en una página con arco, capítulos, funciones, páginas y pivotes',
        extension: 'una página'
      },
      criterios: [
        'Ningún capítulo quedó sin función escrita.',
        'Las páginas están repartidas con variación, no en partes iguales.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.3.1.2',
      lente: 'lente del nosotros',
      cita: 'El tema esencial del diseño es el de dotar al producto de coherencia formal; incluye a la tecnología… por cuanto esto significa coherencia funcional: el del valor del uso; incluye a la estética, porque la coherencia formal, en cuanto tal, es la belleza del producto.',
      preguntaEspejo: '¿Cuál de mis capítulos está ahí por función y cuál está porque el tema lo sugería?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VII, 47 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Conduce mirar alrededor el curso de los astros, como quien gira con ellos, y contemplar también frecuentemente las mutuas conversiones de los elementos, porque las consideraciones de estas cosas purifican a uno de las manchas de esta vida terrestre.',
      preguntaEspejo: 'Al mirar el libro entero de una vez, ¿qué vi que no se veía capítulo por capítulo?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 2.3',
      lente: 'lente de la infoesfera',
      cita: 'La abundancia de información también puede producir sobrecarga cognitiva, distracción y amnesia (el presente olvidadizo). (trad. propia)',
      preguntaEspejo: 'Si alguien leyera mi libro entero, ¿qué tres cosas recordaría una semana después?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendes a mirar un trabajo largo desde arriba, y no solo desde la parte que tienes entre manos. Sirve para cualquier proyecto que dure meses.',
    emocional: 'Reconocer que un capítulo querido no tiene función cuesta. Es la misma incomodidad de la sesión anterior, pero a escala del libro.',
    ciudadana: 'Repartir el peso es respeto por el tiempo de quien lee. Un libro que se cae a la mitad le hace perder algo a alguien.',
    local: 'El año cafetero tiene dos cosechas de distinto tamaño y un tiempo entre ellas. El ciclo no reparte el trabajo en partes iguales.',
    intergeneracional: 'Que el descanso sea del cultivo y no de quien recoge es una diferencia que conviene no borrar cuando se usa el ciclo como imagen.'
  }
};

export default contenido;
