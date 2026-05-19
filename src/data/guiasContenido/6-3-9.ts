/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 9
 * (sesión global 29).
 *
 * Auto-generado desde content/guias/6/6-3-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 9,
  titulo: 'Evaluar fuentes — distinguir lo verdadero de lo inventado en internet',
  resumen: 'Evaluar una fuente significa preguntarte si la página que estás leyendo dice información confiable.',
  duracionMin: 90,
  subtema: 'Evaluar fuentes — distinguir lo verdadero de lo inventado en internet',
  preLectura: {
    porQueImporta: 'El producto es la tabla de evaluación + lista de 8 banderas rojas + ganadora justificada.',
    preguntaDetonante: 'Buscas "Simón Bolívar fechas" en Google. Aparecen 3 resultados: (1) una página de Wikipedia con muchos detalles, (2) un blog personal de un señor cualquiera con su opinión, (3) un sitio del Ministerio de Educación de Colombia con cronología oficial. ¿En cuál confías más para tu tarea? ¿Por qué? ¿La 1, la 2, la 3, o las 3?',
    activacion: {
      titulo: '3 fuentes para escoger',
      descripcion: 'Actividad 1 · ANALIZA — 3 fuentes para escoger (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: aprendes los 5 criterios CRAAP, los aplicas a 3 fuentes sobre un tema, eliges la mejor con justificación, y armas tu lista de banderas rojas.',
      siguiente: 'Esta semana, cada vez que veas una noticia o una afirmación sorprendente en internet, aplica CRAAP rápido (15 segundos en tu cabeza).'
    }
  },
  conceptosClave: [
    {
      termino: 'CRAAP',
      definicion: 'Método de los bibliotecarios universitarios para evaluar la confiabilidad de una fuente en 5 criterios. Currency (actualidad), Relevance (relevancia), Authority (autoridad), Accuracy (exactitud), Purpose (propósito).',
      ejemplo: 'Aplicas CRAAP a una página: ¿tiene fecha reciente? ¿es del nivel correcto? ¿quién la escribió? ¿tiene fuentes? ¿para qué existe? Si los 5 son positivos, es confiable.',
      emoji: '✅'
    },
    {
      termino: 'Currency (actualidad)',
      definicion: 'Primer criterio de CRAAP: qué tan reciente es la información. Para temas que cambian rápido (tecnología, salud), menos de 3 años es ideal. Para temas que no cambian (historia básica), 10 años está bien.',
      ejemplo: 'Una página de 1995 sobre celulares está vencida (los celulares de 2026 no existían). Pero una página de 1995 sobre la Independencia de Colombia sigue siendo válida.',
      emoji: '📅'
    },
    {
      termino: 'Authority (autoridad)',
      definicion: 'Quién escribió la información y si tiene credibilidad en el tema. Universidades, museos, ministerios = mucha autoridad. Blogs personales anónimos = poca. La pregunta: ¿hay nombre y credenciales del autor?',
      ejemplo: 'Un artículo del Ministerio de Educación sobre el currículo escolar = alta autoridad. Un blog de "Pedro74" sin información personal = baja.',
      emoji: '🎓'
    },
    {
      termino: 'Accuracy (exactitud)',
      definicion: 'Si la información se puede verificar. Datos con fuente citada, sin errores ortográficos, sin contradicciones, confirmados por otros sitios confiables. La pregunta: ¿podría verificar al menos un dato en otro sitio?',
      ejemplo: 'Wikipedia cita fuentes al final de cada artículo. Eso da exactidud. Un blog que dice "el volcán explotará pronto" sin fuente = baja exactitud.',
      emoji: '🎯'
    },
    {
      termino: 'Banderas rojas',
      definicion: 'Señales que indican que una fuente probablemente NO es confiable. Las más comunes: sin fecha, sin autor, sin fuentes, errores ortográficos, lenguaje exagerado, mucha publicidad, pide pago.',
      ejemplo: 'Una página que dice "ESCANDALO MUNDIAL!!!!" sin fecha ni autor, llena de pop-ups, con errores ortográficos = 4 banderas rojas. No la cites.',
      emoji: '🚩'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes evaluar fuentes en internet?',
      instrucciones: '5 preguntas para verificar que dominas CRAAP y las banderas rojas.',
      preguntas: [
        {
          enunciado: 'Necesitas información sobre Simón Bolívar para una tarea. ¿Qué fuente es más confiable?',
          opciones: [
            'Un blog personal anónimo.',
            'La página del Ministerio de Educación o un libro de universidad.',
            'Un meme de Instagram.',
            'Un video aleatorio de TikTok.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Autoridad: gobierno o universidad tienen credibilidad académica. Blogs anónimos, memes y TikToks no son fuentes para tareas formales.',
          feedbackIncorrecto: 'Para tareas: Ministerio de Educación, universidades, museos. Blogs anónimos y redes sociales NO son fuentes académicas, aunque sean entretenidas.'
        },
        {
          enunciado: 'Una página web NO tiene fecha visible. ¿Qué piensas?',
          opciones: [
            'Da igual, lo importante es el contenido.',
            'Es una bandera roja. Sin fecha no puedo saber si la información está actualizada.',
            'Es buena señal, eso significa que es eterna.',
            'Solo importa la fecha si es sobre tecnología.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Sin fecha = bandera roja. No sabes si es de 1995 o 2026. Para verificar la Currency de CRAAP, necesitas fecha visible.',
          feedbackIncorrecto: 'Sin fecha es bandera roja. No puedes evaluar Currency (actualidad). Las fuentes serias siempre fechan su contenido.'
        },
        {
          enunciado: 'Lees una página que dice \'INCREÍBLE: ESCÁNDALO MUNDIAL!!!!\' con muchos signos. ¿Qué señal es?',
          opciones: [
            'Es información seria por la urgencia.',
            'Bandera roja: lenguaje exagerado. Es estrategia para asustar, vender o ganar clics. Desconfía.',
            'Es buen periodismo.',
            'Solo es escándalo si tiene fotos.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El lenguaje exagerado (mayúsculas, signos, palabras emocionales) es señal de manipulación. Las fuentes serias usan tono neutral.',
          feedbackIncorrecto: 'Lenguaje exagerado = bandera roja. Las fuentes serias usan tono neutro. Cuando ves "INCREÍBLE!!!!", el propósito ya no es informar, es manipular.'
        },
        {
          enunciado: 'Wikipedia, ¿es buena fuente para una tarea?',
          opciones: [
            'Sí, siempre.',
            'Sí como punto de partida; pero cita la fuente original que Wikipedia referencia al final.',
            'No, Wikipedia es mentira.',
            'Solo en inglés.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Wikipedia es buen mapa: encuentras el tema rápido y al final cita sus fuentes. Vas a esas fuentes originales y las citas en tu tarea. Wikipedia como punto de inicio, no como destino final.',
          feedbackIncorrecto: 'Wikipedia es buen punto de partida pero no fuente final. Al final del artículo hay referencias: ve a esas y úsalas como fuente. Wikipedia te orienta; las fuentes originales son las que citas.'
        },
        {
          enunciado: 'Acabas de leer una afirmación impactante. ¿Qué deberías hacer antes de creerla?',
          opciones: [
            'Compartirla en redes sociales rapidísimo.',
            'Verificar en al menos otra fuente confiable. Si las 2 coinciden, probable verdadero. Si contradice, busca una 3a.',
            'Memorizar la información.',
            'Olvidarla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La verificación cruzada es clave. Si 2 fuentes confiables coinciden, probable verdad. Si contradicen, busca una 3a o duda hasta verificar.',
          feedbackIncorrecto: 'Verificación cruzada: busca la misma info en otra fuente confiable. 2 que coinciden = probable verdad. Compartir sin verificar te hace cómplice de desinformación.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy en la cómoda actitud de creer todo lo que leo, o tengo la disciplina de verificar antes?',
    transferencia: 'Esta semana, cada vez que veas una noticia o una afirmación sorprendente en internet, aplica CRAAP rápido (15 segundos en tu cabeza).',
    cierre: 'Al terminar la clase: (1) podrás identificar los 5 criterios CRAAP; (2) sabrás aplicar cada criterio a una fuente; (3) podrás evaluar 3 fuentes y elegir la mejor con justificación; (4) habrás creado una lista personal de 8 banderas rojas.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de la vereda La Plata de Cartago decía: "No todas las cartas dicen verdad." En los años 70, llegaban a la vereda cartas con promesas extrañas: "Pague 100 pesos y reciba 1.000", "Su familia ha ganado un terreno en La Guajira". Algunos campesinos, sin medios para verificar, caían en la trampa. Doña Mercedes les enseñaba a desconfiar y verificar: "¿Quién mandó la carta? ¿Tiene sello oficial? ¿Tiene nombre de remitente real? ¿Suena demasiado bueno para ser cierto? Si dudas, ve a la alcaldía y pregunta". Esa regla "verificar antes de creer" salvó dinero y dignidad a muchas familias. Hoy en internet pasa lo mismo: hay páginas que mienten, exageran, manipulan, o están vencidas. Aprender a distinguir lo confiable de lo no confiable es la otra mitad de la alfabetización digital. Buscar bien (S8) te lleva a páginas. Evaluar fuentes te dice cuáles creer.',
    preguntaPuente: 'Buscas "Simón Bolívar fechas" en Google. Aparecen 3 resultados: (1) una página de Wikipedia con muchos detalles, (2) un blog personal de un señor cualquiera con su opinión, (3) un sitio del Ministerio de Educación de Colombia con cronología oficial. ¿En cuál confías más para tu tarea? ¿Por qué? ¿La 1, la 2, la 3, o las 3?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la crítica liberadora)',
      lente: 'lente del nosotros',
      cita: '"Dudar antes de creer no es desconfianza enferma. Es respeto a la verdad."',
      preguntaEspejo: '¿Estoy en la cómoda actitud de creer todo lo que leo, o tengo la disciplina de verificar antes?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que escribía solo lo verificable)',
      lente: 'lente del cuidado interior',
      cita: '"Antes de afirmar, pregunta: ¿esto es cierto? Si no puedes responder, calla hasta saber."',
      preguntaEspejo: '¿Estoy entregando información que no he verificado, o me esfuerzo en confirmar antes de afirmar?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la desinformación)',
      lente: 'lente de la infoesfera',
      cita: '"En la era de la información, el verdadero analfabetismo no es no saber leer. Es no saber distinguir lo verdadero de lo falso."',
      preguntaEspejo: '¿Estoy formando criterio para evaluar fuentes o me estoy convirtiendo en repetidor pasivo de información?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 5 criterios CRAAP; (2) sabrás aplicar cada criterio a una fuente; (3) podrás evaluar 3 fuentes y elegir la mejor con justificación; (4) habrás creado u…',
    emocional: 'El estoico no repite lo que oyó sin verificar.',
    ciudadana: 'Doña Mercedes enseñaba a los niños del campo a dudar de las cartas extrañas antes de creer.',
    local: 'Antes de salir, verificas que cada fuente tiene los 5 criterios calificados de 0 a 5.',
    intergeneracional: 'Tu abuela quizá no sabía usar Google, pero en su pueblo de Cartago sabía a quién creerle: a doña Mercedes, a don Lucho, no al pregonero exagerado.'
  }
};

export default contenido;
