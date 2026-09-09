/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 6
 * (sesión global 6).
 *
 * Auto-generado desde content/guias/10/10-1-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 6,
  titulo: 'Derechos de autor y propiedad intelectual con IA — Ley 23 de 1982 y obras derivadas',
  resumen: 'Defines quién firma tu libro y bajo qué licencia circula: qué derechos son intransferibles, cuáles se ceden y cómo se declara con precisión el uso de una IA.',
  duracionMin: 90,
  subtema: 'Oficio editorial · Autoría y licencias',
  preLectura: {
    porQueImporta: 'Firmar una obra hecha con ayuda de una herramienta obliga a decir qué hiciste tú y qué hizo ella. Y buena parte de lo que se discute hoy sobre IA es, en el fondo, de quién es lo que se produce.',
    preguntaDetonante: 'Si una herramienta escribió el primer borrador y tú lo reescribiste entero, ¿de quién es el capítulo?',
    activacion: {
      titulo: 'La página que nadie lee',
      descripcion: 'En 3 minutos, abre cualquier libro por la página de créditos y cuenta cuántos nombres aparecen ahí que no son el del autor.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 5 dejaste el mapa estructural del libro completo.',
      siguiente: 'En la sesión 7 generas la portada, y la pregunta de los derechos vuelve sobre las imágenes.'
    }
  },
  conceptosClave: [
    {
      termino: 'Derechos morales',
      definicion: 'Irrenunciables, intransferibles y perpetuos: ser reconocido como autor, que nadie altere la obra, decidir si se publica.',
      ejemplo: 'Aunque cedas todo lo demás a una editorial, sigues siendo el autor y nadie puede alterar la obra sin permiso.',
      categoria: 'Los dos tipos de derecho'
    },
    {
      termino: 'Derechos patrimoniales',
      definicion: 'Transferibles y negociables: reproducir, distribuir, traducir, adaptar y cobrar por la obra.',
      ejemplo: 'Son los que se negocian en un contrato editorial, y los que se pueden perder por firmarlo sin leerlo.',
      categoria: 'Los dos tipos de derecho'
    },
    {
      termino: 'Licencia abierta',
      definicion: 'Un permiso previo para que otros usen la obra bajo condiciones declaradas. Todas parten de dar crédito.',
      ejemplo: 'Unas permiten uso comercial y otras no; unas obligan a que lo derivado siga siendo abierto.',
      categoria: 'Cómo circula la obra'
    },
    {
      termino: 'Todos los derechos reservados',
      definicion: 'La opción más cerrada: nadie puede usar la obra sin pedir permiso caso por caso.',
      ejemplo: 'Tiene sentido si piensas publicar comercialmente; no lo tiene si tu objetivo es que el libro circule.',
      categoria: 'Cómo circula la obra'
    },
    {
      termino: 'El modelo no es autor',
      definicion: 'La ley reconoce como autores a personas. Una herramienta no adquiere derechos sobre lo que produce.',
      ejemplo: 'Un capítulo generado y luego reescrito por ti es tuyo, no de la herramienta que hizo el borrador.',
      categoria: 'IA y autoría'
    },
    {
      termino: 'Declaración específica',
      definicion: 'Decir qué modelos se usaron y en qué partes del proceso. Una frase genérica no declara nada.',
      ejemplo: '«Se usó inteligencia artificial» no dice nada; «los borradores de los capítulos 2 a 7 se generaron con X» sí.',
      categoria: 'IA y autoría'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Verifica derechos de autor',
      instrucciones: '5 preguntas para confirmar que sabes bajo qué condiciones firma y circula tu libro. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué caracteriza a los derechos morales de una obra?',
          opciones: [
            'Que se pueden negociar con una editorial a cambio de un porcentaje de las ventas',
            'Que caducan pasados unos años desde la muerte de quien escribió la obra',
            'Que son irrenunciables e intransferibles: siguen siendo tuyos pase lo que pase',
            'Que solo aplican a obras literarias y no a las obras musicales o visuales'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Aunque cedas todo lo patrimonial, sigues siendo el autor y la obra no se puede alterar sin tu permiso.',
          feedbackIncorrecto: 'Lo que se negocia son los patrimoniales. Los morales no se ceden ni caducan.'
        },
        {
          enunciado: 'Una IA generó el borrador y tú lo reescribiste entero. ¿De quién es la obra?',
          opciones: [
            'Tuya, porque la intervención humana fue sustancial y un modelo no es autor',
            'De la empresa que desarrolló el modelo, según sus términos de servicio',
            'De nadie: una obra hecha con IA queda automáticamente en dominio público',
            'Compartida entre tú y el modelo, en la proporción en que cada uno aportó'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La ley reconoce como autores a personas, y la obra es de quien tomó las decisiones.',
          feedbackIncorrecto: 'Un modelo no adquiere derechos ni puede compartir autoría. Si tu intervención fue sustancial, la obra es tuya.'
        },
        {
          enunciado: '¿Qué tienen en común todas las licencias abiertas más usadas?',
          opciones: [
            'Que impiden cualquier uso comercial de la obra por parte de terceros',
            'Que obligan a que las obras derivadas circulen con esa misma licencia',
            'Que ceden los derechos morales junto con los derechos patrimoniales',
            'Que parten de dar crédito a quien hizo la obra original'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. La atribución es la base; lo que cambia entre ellas es lo comercial y lo derivado.',
          feedbackIncorrecto: 'Solo algunas restringen lo comercial o lo derivado, y ninguna cede derechos morales. Todas exigen crédito.'
        },
        {
          enunciado: '¿Cómo debe ser la declaración de uso de IA en tu libro?',
          opciones: [
            'Específica: qué modelos se usaron, en qué partes del proceso y qué decidiste tú',
            'Breve, porque una mención extensa distrae de la lectura del contenido',
            'Opcional, dado que la ley colombiana no obliga hoy a declararlo en el libro',
            'General, mencionando que se usaron herramientas digitales durante la producción'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. «Se usó inteligencia artificial» no declara nada. Lo que declara es qué, dónde y qué decidiste tú.',
          feedbackIncorrecto: 'Que la ley no lo exija no la vuelve opcional en el oficio, y una frase general no declara nada.'
        },
        {
          enunciado: 'Las 122 piezas de la Colección Quimbaya se compraron en 1891 y se regalaron en 1893. ¿Qué aplica eso a tu libro?',
          opciones: [
            'Que las obras hechas hace mucho tiempo pasan siempre a ser propiedad del Estado',
            'Que un regalo entre Estados no se puede deshacer una vez ha sido entregado',
            'Que quien hizo algo puede terminar sin voz sobre lo que se decide con su obra',
            'Que el patrimonio cultural debería exhibirse siempre en el país donde se produjo'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. En el pleito discuten dos Estados; los orfebres que hicieron las piezas no aparecen.',
          feedbackIncorrecto: 'No es sobre antigüedad ni sobre dónde se exhibe. Es sobre quién queda sin voz en la decisión.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De todo lo que hay detrás de mi libro, ¿quién no aparece nombrado en ninguna parte?',
    transferencia: 'Llega a la próxima sesión con la ficha de derechos y los tres casos. En la portada la pregunta vuelve, esta vez sobre imágenes generadas.',
    cierre: 'Al terminar podrás: (1) identificar en un libro real quién firma, bajo qué licencia circula y qué declara sobre su proceso; (2) analizar la diferencia entre derechos morales y patrimoniales, y tres casos recientes de disputa entre IA y derechos; (3) crear la ficha de derechos de…'
  },
  saberAncestral: {
    saber: 'En 1891 el Estado colombiano compró 122 piezas de oro hechas por orfebres prehispánicos del Cauca medio. Dos años después, el 4 de mayo de 1893, las regaló a la reina regente de España. En 2017 la Corte Constitucional ordenó repatriarlas o readquirirlas, por vulneración de la moralidad administrativa y de la defensa del patrimonio público (Corte Constitucional de Colombia, 2017). Las piezas siguen en Madrid. La cara de exclusión es doble. «Quimbaya» es un exónimo: el nombre se lo pusieron los coleccionistas, no quienes hicieron las piezas. Y esos orfebres no tienen voz en el pleito. Lo que se discute es entre Estados, sobre quién es dueño de lo que hicieron otros.',
    fuente: 'Colección Quimbaya · las 122 piezas regaladas en 1893 y la sentencia SU-649 de 2017',
    referencia: 'Corte Constitucional de Colombia. (2017). Sentencia SU-649/17 (M. P. Alberto Rojas Ríos), 19 de octubre.',
    preguntaPuente: '¿De quién es una pieza cuando quienes la hicieron no tienen voz en el pleito? ¿Y de quién es un capítulo que una herramienta armó a partir de textos de miles de autores?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las 122 piezas y la sentencia',
      duracionMin: 5
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Un libro y sus créditos',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Morales, patrimoniales y licencias',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · La ficha de derechos de mi libro',
      duracionMin: 40
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Un libro y sus créditos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Toma un libro que tengas a mano, en papel o digital.',
        'Busca la página de créditos, después de la portadilla.',
        'Anota quién es el autor declarado, con nombre completo.',
        'Anota editorial, año y país de edición.',
        'Anota qué dice sobre derechos y qué otras manos aparecen nombradas.'
      ],
      cuaderno: {
        titulo: 'Un libro y sus créditos',
        formato: 'ficha con autoría, editorial, año, qué dice sobre derechos y qué otras manos aparecen',
        extension: 'un tercio de página'
      },
      criterios: [
        'Los datos vienen de la página de créditos, no de la portada.',
        'Está anotado si aparecen traducción, ilustración u otras manos.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Morales, patrimoniales y licencias',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los dos tipos de derecho con un ejemplo de cada uno.',
        'Escriban las licencias abiertas más usadas y qué permite cada una.',
        'Escriban los tres consensos sobre IA y autoría.',
        'Cada uno decide qué licencia le conviene y le explica al otro por qué.',
        'Quien escucha le busca una objeción a esa elección.'
      ],
      cuaderno: {
        titulo: 'Morales, patrimoniales y licencias',
        formato: 'los dos tipos con ejemplo, las licencias, los tres consensos y la objeción recibida',
        extension: 'media página'
      },
      criterios: [
        'Cada tipo de derecho tiene un ejemplo propio, no uno de la guía.',
        'Está escrita la objeción que puso la pareja a la licencia elegida.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'La ficha de derechos de mi libro',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Busca tres casos recientes de disputa entre IA y derechos de autor.',
        'Resume cada uno con quién demanda a quién, qué se discute y en qué va.',
        'Escribe la ficha con autoría, licencia, uso de IA, fuentes y contacto.',
        'En la declaración de IA di qué modelos usaste y en qué partes del proceso.',
        'Justifica la licencia en cinco líneas y dásela a leer a alguien.'
      ],
      cuaderno: {
        titulo: 'Los derechos de mi libro',
        formato: 'los tres casos resumidos, la ficha completa y la justificación de la licencia',
        extension: 'una página'
      },
      criterios: [
        'La declaración de IA dice qué modelos y en qué partes, no una frase genérica.',
        'Alguien que no conoce el libro entiende qué puede hacer con él.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.4.2',
      lente: 'lente del nosotros',
      cita: 'El otro se revela realmente como otro… como el pobre, el oprimido; el que a la vera del camino, fuera del sistema, muestra su rostro sufriente y sin embargo desafiante: «¡Tengo hambre!, ¡tengo derecho a comer!».',
      preguntaEspejo: 'De todo lo que hay detrás de mi libro, ¿quién no aparece nombrado en ninguna parte?'
    },
    estoico: {
      autor: 'Epicteto · Enquiridión, 1 (c. 125 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Hay ciertas cosas que dependen de nosotros mismos, como la opinión, la inclinación, los deseos, la aversión, y en una palabra, todas nuestras operaciones. Otras hay también que no dependen, como el cuerpo, las riquezas, la reputación, los imperios.',
      preguntaEspejo: 'De lo que estoy declarando en mi ficha, ¿qué podría ceder mañana y qué seguirá siendo mío pase lo que pase?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.3',
      lente: 'lente de la infoesfera',
      cita: 'En una esfera pública plural, los demás no pueden reducirse a instrumentos, y hacen falta contención y respeto. (trad. propia, abreviada)',
      preguntaEspejo: '¿Hay algo en mi libro que tomé de alguien y que todavía no está atribuido?'
    }
  },
  cincoDimensiones: {
    personal: 'Declaras con qué nombre respondes por tu trabajo y bajo qué condiciones dejas que circule. Es una decisión que hasta ahora no habías tenido que tomar.',
    emocional: 'Decir qué parte hizo la herramienta cuesta cuando uno quisiera que todo fuera propio. Declararlo con precisión es lo que hace creíble el resto.',
    ciudadana: 'Atribuir lo que se toma de otros es lo que sostiene la confianza en lo que se publica. Sin atribución, todo texto se vuelve sospechoso.',
    local: 'Las 122 piezas se compraron y se regalaron sin que quienes las hicieron tuvieran voz. Siguen en Madrid, pese a la orden de 2017.',
    intergeneracional: 'Que «quimbaya» sea un exónimo puesto por coleccionistas muestra que hasta el nombre de lo que alguien hizo puede terminar decidiéndolo otro.'
  }
};

export default contenido;
