/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 9
 * (sesión global 19).
 *
 * Auto-generado desde content/guias/9/9-2-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 9,
  titulo: 'Maquetar la revista completa — flujo de trabajo',
  resumen: 'Produces tu revista digital de ocho páginas con tema propio, sistema visual coherente, exportada en PDF y publicada con URL. Es el producto integrador del periodo.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Producto integrador',
  preLectura: {
    porQueImporta: 'Aquí converge todo lo de las ocho sesiones anteriores. Una revista de ocho páginas publicada con URL es prueba real de oficio: pasaste de la teoría a un producto que otro puede abrir.',
    preguntaDetonante: 'Si dentro de cinco años alguien te pidiera un solo trabajo del colegio que demostrara tu oficio, ¿qué le mostrarías?',
    activacion: {
      titulo: 'El test de la mesa entera',
      descripcion: 'En 3 minutos, abre dos revistas y déjalas extendidas en orden. Camina alrededor y míralas desde dos metros. ¿Qué hace que el conjunto se sienta coherente y no fragmentado?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En las sesiones 7 y 8 trabajaste accesibilidad y corrección sobre páginas sueltas.',
      siguiente: 'En la sesión 10 sustentas públicamente tu revista ante el curso y defiendes tus decisiones.'
    }
  },
  conceptosClave: [
    {
      termino: 'Estructura de ocho páginas',
      definicion: 'Portada, editorial o sumario, contenido principal en las intermedias y contraportada. Es la base que admite variaciones.',
      ejemplo: 'Portada, sumario en la 2, artículo principal de la 3 a la 5, secundario en 6 y 7, cierre en la 8.',
      categoria: 'La estructura'
    },
    {
      termino: 'Ritmo del conjunto',
      definicion: 'La variación entre páginas que evita que las ocho se sientan iguales sin romper la coherencia.',
      ejemplo: 'Una página densa de texto, después una de imagen grande, después una de respiro con una cita.',
      categoria: 'La estructura'
    },
    {
      termino: 'Planear antes de maquetar',
      definicion: 'Decidir el contenido de las ocho páginas antes de abrir la herramienta. Es lo que más se salta y lo que más se nota.',
      ejemplo: 'La tabla de ocho filas en el cuaderno evita descubrir en la página 4 que falta material para la 6.',
      categoria: 'El flujo de trabajo'
    },
    {
      termino: 'Coherencia del sistema',
      definicion: 'La misma grilla, la misma tipografía y la misma paleta en las ocho páginas, sin excepciones de última hora.',
      ejemplo: 'Cambiar la tipografía en la página 4 porque cansó la anterior rompe el conjunto entero.',
      categoria: 'El flujo de trabajo'
    },
    {
      termino: 'Exportar en PDF',
      definicion: 'El PDF conserva tipografía, color y disposición en un solo documento. Las imágenes sueltas pierden el orden.',
      ejemplo: 'Ocho archivos de imagen obligan al lector a ordenarlos; un PDF llega ya como revista.',
      categoria: 'Publicar'
    },
    {
      termino: 'URL comprobada',
      definicion: 'El enlace no está publicado hasta que alguien más lo abre desde otro equipo y funciona.',
      ejemplo: 'Un enlace con permisos restringidos abre bien en tu sesión y falla en la de cualquier otro.',
      categoria: 'Publicar'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica el flujo de maquetación',
      instrucciones: '5 preguntas para confirmar que puedes llevar una revista de la planeación a la URL. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué va típicamente en la página 2 de una revista de ocho páginas?',
          opciones: [
            'El editorial o el sumario, que dan la entrada y anuncian lo que viene después',
            'La contraportada, porque es la página que se lee justo después de la cubierta',
            'Un anuncio de publicidad, que es lo que financia la impresión de la revista',
            'Una imagen suelta a página completa, sin texto, para que la vista descanse'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La página 2 es la entrada: dice de qué va la revista y qué viene después.',
          feedbackIncorrecto: 'La contraportada es la 8. La 2 es la entrada de la revista: editorial o sumario.'
        },
        {
          enunciado: '¿Por qué planear las ocho páginas en el cuaderno antes de abrir la herramienta?',
          opciones: [
            'Porque los docentes piden siempre una evidencia escrita antes del trabajo digital',
            'Porque la herramienta digital funciona más rápido si uno ya sabe lo que va a hacer',
            'Porque saltarse la planeación es la causa principal de las revistas desordenadas',
            'Porque el cuaderno permite dibujar bocetos que la herramienta no deja hacer igual'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Sin plan, el material se acaba a mitad de camino y las últimas páginas se rellenan.',
          feedbackIncorrecto: 'No es un requisito escolar. Sin plan descubres en la página 4 que no tienes con qué llenar la 6.'
        },
        {
          enunciado: '¿Qué hace que las ocho páginas se sientan un cuerpo y no páginas sueltas?',
          opciones: [
            'Que todas lleven el mismo color de fondo de principio a fin de la revista',
            'Que todas estén numeradas en el mismo lugar y con la misma tipografía pequeña',
            'Que todas tengan exactamente la misma estructura de columnas y de imágenes',
            'Coherencia del sistema visual combinada con variación de ritmo entre páginas'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Coherencia sin variación aburre; variación sin coherencia desarma. Hacen falta las dos.',
          feedbackIncorrecto: 'Ni el fondo ni la numeración bastan, y páginas idénticas no son un cuerpo: son una repetición.'
        },
        {
          enunciado: '¿Por qué exportar en PDF y no como imágenes sueltas?',
          opciones: [
            'Porque el PDF conserva tipografía, color y disposición en un documento unificado',
            'Porque el PDF siempre pesa menos que el mismo contenido guardado como imágenes',
            'Porque las imágenes sueltas no se pueden compartir por enlace en ninguna nube',
            'Porque el PDF se ve más profesional aunque el contenido sea exactamente el mismo'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Ocho imágenes obligan al lector a ordenarlas; un PDF llega ya como revista.',
          feedbackIncorrecto: 'No es peso ni apariencia. Es que el PDF conserva el orden y la disposición exactos.'
        },
        {
          enunciado: 'El canasto de werregue se teje en rollo desde el centro. ¿Qué aplica eso a tu revista?',
          opciones: [
            'Que conviene empezar la revista por la página del medio e ir abriendo hacia afuera',
            'Que las herramientas digitales imitan técnicas artesanales que ya existían antes',
            'Que el orden importa: cada parte se apoya en la anterior y no se puede adelantar',
            'Que una pieza hecha a mano siempre tendrá más valor que una hecha en el computador'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Quien teje decide el conjunto antes de la primera vuelta. Tú decides las ocho páginas antes de maquetar la primera.',
          feedbackIncorrecto: 'No se trata de empezar por el centro ni de comparar valores. Se trata del orden: cada parte se apoya en lo ya hecho.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué entendí de verdad recién cuando lo tuve que hacer, y no cuando lo leí?',
    transferencia: 'Esta semana comparte la URL con tres personas distintas y pídele a cada una una observación honesta. No discutas: anótalas. Son el insumo de la sustentación de la sesión 10.',
    cierre: 'Al terminar podrás: (1) identificar los elementos de una revista de ocho páginas y su orden típico; (2) analizar el flujo narrativo y visual entre páginas para planear el conjunto; (3) aplicar un flujo de trabajo que te lleve de la planeación a una revista publicada con URL.'
  },
  saberAncestral: {
    saber: 'Los wounaan, en las selvas del Chocó, tejen canastos en fibra de palma de werregue. La pieza se arma en rollo: se empieza por el centro y se cose vuelta sobre vuelta (Universidad del Rosario, 2023). El orden no es negociable. Cada vuelta se apoya en la anterior, y ninguna se puede adelantar ni deshacer sin arruinar la pieza. Quien teje decide el conjunto antes de dar la primera vuelta. Los diseños hablan de la vida cotidiana, de la naturaleza y de las creencias del pueblo. La cara de exclusión está en el registro. La técnica se enseña hoy en talleres universitarios de Bogotá. Y la página que la documenta nombra al pueblo y a la técnica, pero no a ninguna tejedora.',
    fuente: 'Cestería wounaan en fibra de werregue · el canasto tejido en rollo desde el centro',
    referencia: 'Universidad del Rosario, Facultad de Creación. (2023). Saberes artesanales: taller de tejeduría en werregue.',
    preguntaPuente: '¿Por qué en un canasto de werregue no se puede adelantar una vuelta? ¿Y qué le pasa a quien maqueta la página 6 de su revista antes de haber decidido qué va en la 2?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El canasto que se teje en rollo',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Anatomía de una revista',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · El plan de mis ocho páginas',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Maqueta, exporta y publica',
      duracionMin: 40
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 5
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Anatomía de una revista',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca dos revistas reales de ocho páginas o más, una cultural y una temática.',
        'Anota qué va en la portada y qué en la contraportada de cada una.',
        'Anota cómo se reparte el contenido principal entre las páginas del medio.',
        'Anota si hay sumario o índice y si hay sección editorial.',
        'Dibuja el esquema de las ocho páginas de una de las dos con la función de cada una.'
      ],
      cuaderno: {
        titulo: 'Anatomía de una revista',
        formato: 'el esquema dibujado de las ocho páginas con una etiqueta por página',
        extension: 'un tercio de página'
      },
      criterios: [
        'Están revisadas las dos revistas, no una sola.',
        'El esquema nombra la función de las ocho páginas.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'El plan de mis ocho páginas',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban la estructura típica de una revista de ocho páginas.',
        'Escriban el flujo de trabajo en sus cuatro fases con el tiempo de cada una.',
        'Cada uno arma la tabla de sus ocho páginas con contenido y tipo de visual.',
        'Intercambien las tablas y marquen dónde el ritmo se repite demasiado.'
      ],
      cuaderno: {
        titulo: 'Plan de mi revista de ocho páginas',
        formato: 'tabla de ocho filas y tres columnas (página / contenido / tipo de visual) con la marca de tu pareja',
        extension: 'media página'
      },
      criterios: [
        'La tabla cubre las ocho páginas, ninguna queda sin decidir.',
        'Está marcado el tramo donde el ritmo se repite.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Maqueta, exporta y publica',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Abre ocho lienzos en tamaño A4 vertical.',
        'Aplica la grilla y la paleta a los ocho antes de maquetar nada.',
        'Maqueta una a una siguiendo tu plan, empezando por la página más fácil.',
        'Revisa el conjunto cada dos o tres páginas para que el sistema no se te vaya.',
        'Exporta en PDF, sube el archivo y comprueba la URL en una pestaña nueva.'
      ],
      cuaderno: {
        titulo: 'Mi revista de ocho páginas publicada',
        formato: 'el plan, la URL, capturas de portada, un interior y contraportada, y tres renglones de cierre',
        extension: 'una página'
      },
      criterios: [
        'Un compañero abrió la URL desde otro equipo y la revista cargó.',
        'Las ocho páginas comparten grilla, tipografía y paleta.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.5.2',
      lente: 'lente del nosotros',
      cita: 'Es un error pensar que la ciencia pura… aplica ella misma alguna de sus conclusiones, apareciendo la tecnología como su concreta creación… Muy por el contrario, es el discurso técnico artesanal o tecnológico… echa mano… de conclusiones o teorías científicas.',
      preguntaEspejo: '¿Qué entendí de verdad recién cuando lo tuve que hacer, y no cuando lo leí?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones II, 5 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Haz lo que tienes entre manos con dignidad perfecta y sencilla, con afecto, con libertad y con justicia, y líbrate de todo otro pensamiento. (trad. propia)',
      preguntaEspejo: 'Cuando me atasqué, ¿fue por la página que tenía delante o por todas las que faltaban?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.5',
      lente: 'lente de la infoesfera',
      cita: 'Se suponía que acumular información y conocimiento llevaría a comprender mejor… pero esa expansión sin fin cada vez describe peor nuestra experiencia diaria. (trad. propia)',
      preguntaEspejo: '¿Qué dejé fuera de mi revista, y podría defender esa decisión en voz alta?'
    }
  },
  cincoDimensiones: {
    personal: 'Produjiste tu primera pieza editorial completa con URL pública. Es una prueba de oficio que puedes mostrar.',
    emocional: 'Sostener el trabajo hasta el final entrenó algo que no aparece en la nota: la capacidad de terminar.',
    ciudadana: 'Tu revista suma una voz nueva a la infoesfera. Pequeña, pero tuya y no copia de otra.',
    local: 'El canasto de werregue se teje en un orden que no se puede saltar. Tu revista también, aunque el material sea otro.',
    intergeneracional: 'Quien teje decide el conjunto antes de la primera vuelta. Ese cuidado por el todo se enseña y se hereda en los oficios.'
  }
};

export default contenido;
