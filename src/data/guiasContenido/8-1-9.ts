/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 9
 * (sesión global 9).
 *
 * Auto-generado desde content/guias/8/8-1-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 9,
  titulo: 'Mini estudio de datos — ocho etapas para responder una pregunta del colegio',
  resumen: 'Todo lo del periodo junto en un estudio propio de ocho etapas sobre una pregunta del colegio. Como el censo de un resguardo, se pregunta persona por persona, se verifica y se decide, sin olvidar a quién quedó fuera.',
  duracionMin: 90,
  subtema: 'Análisis de datos con phronesis',
  preLectura: {
    porQueImporta: 'Hacer un estudio pequeño y honesto es la habilidad que separa opinar de saber. La vas a usar en el colegio, en un trabajo y en cualquier discusión con cifras.',
    preguntaDetonante: 'Cuando encuestes a veinte compañeros, ¿quién no va a estar en tu lista y qué le pasa a tu hallazgo por eso?',
    activacion: {
      titulo: 'Una pregunta que se pueda contar',
      descripcion: 'En 3 minutos, escribe una pregunta sobre tu colegio que se responda contando algo, y otra que no se pueda responder con datos. ¿Cuál es la diferencia?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 8 tu hoja aprendió a validar y a avisar con colores.',
      siguiente: 'En la sesión 10 sustentas el mini estudio en cuatro minutos frente al grupo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Pregunta de investigación',
      definicion: 'Una sola pregunta, clara, que se pueda responder contando o midiendo algo.',
      ejemplo: '«¿Cuántos minutos de pantalla al día tienen los de octavo?» sí. «¿Cómo está el colegio?» no.',
      categoria: 'Las etapas'
    },
    {
      termino: 'Hipótesis',
      definicion: 'Lo que crees que vas a encontrar, escrito antes de mirar los datos, con su porqué.',
      ejemplo: '«Creo que el promedio será de 4 horas, porque casi todos tienen celular».',
      categoria: 'Las etapas'
    },
    {
      termino: 'Muestra',
      definicion: 'Las personas o los casos que sí quedaron en tus datos. Nunca son todos.',
      ejemplo: 'Veinte compañeros de 8-A encuestados un martes. Los que faltaron ese día no están.',
      categoria: 'Las etapas'
    },
    {
      termino: 'Hallazgo',
      definicion: 'Lo más importante que encontraste, en una sola frase, con cifras.',
      ejemplo: '«El promedio fue de 3 horas y el máximo de 8; la mitad supera las 3».',
      categoria: 'Las etapas'
    },
    {
      termino: 'Limitación',
      definicion: 'Lo que tu estudio no pudo saber, dicho claramente en la última página.',
      ejemplo: '«Solo encuesté a 8-A un martes; los otros grupos y los otros días quedaron fuera».',
      categoria: 'Honestidad'
    },
    {
      termino: 'Los cuatro filtros',
      definicion: 'Datos accesibles esta semana, al menos quince datos, interés real y algún uso para el hallazgo.',
      ejemplo: 'Una pregunta sobre todo el colegio no pasa el filtro de la semana; una sobre tu salón sí.',
      categoria: 'Honestidad'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes armar un mini estudio?',
      instrucciones: 'Cinco preguntas para verificar que reconoces una buena pregunta, una hipótesis a tiempo y una limitación honesta. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas preguntas se puede responder con datos en una semana?',
          opciones: [
            '¿Cuántos minutos de pantalla al día tienen los de 8-A?',
            '¿Los estudiantes de hoy son más felices que los de antes?',
            '¿Es bueno o malo usar el celular en las clases del colegio?',
            '¿Qué piensa la humanidad entera sobre la tecnología actual?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Tiene algo que se mide, minutos, y un grupo alcanzable, 8-A. Las otras no se cuentan ni se miden.',
          feedbackIncorrecto: '«Felices», «bueno o malo» y «la humanidad» no se cuentan en una semana. La pregunta de los minutos en 8-A sí.'
        },
        {
          enunciado: '¿Cuándo se escribe la hipótesis?',
          opciones: [
            'Después de calcular, para que coincida con el resultado.',
            'Solo si el estudio sale bien y confirma lo esperado.',
            'Antes de recolectar, para poder equivocarse con datos.',
            'En la sustentación, cuando ya se sabe todo el resultado.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Si la escribes después, todo parece esperado. Antes, te permite aprender del error.',
          feedbackIncorrecto: 'Una hipótesis escrita después de ver los datos no es hipótesis. Va antes, aunque falle.'
        },
        {
          enunciado: 'Encuestaste solo a tus cinco mejores amigos sobre el tiempo de pantalla. ¿Qué es lo correcto?',
          opciones: [
            'Presentar el resultado como el del colegio, porque son datos reales de verdad.',
            'Botar el estudio completo, porque cinco datos no sirven para concluir nada.',
            'Inventar quince datos más parecidos para completar la muestra mínima.',
            'Declarar en las limitaciones que fueron cinco amigos y no el colegio.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Cinco amigos es una limitación, y se dice. Un estudio pequeño y honesto vale; uno inflado no.',
          feedbackIncorrecto: 'Ni se infla ni se inventa ni se bota. Se declara la limitación en la última página y se propone cómo mejorarlo.'
        },
        {
          enunciado: '¿Cuál de estas frases es un hallazgo bien escrito?',
          opciones: [
            'Hice muchos cálculos con las cuatro funciones y varios gráficos interesantes.',
            'Los de 8-A pasan en promedio 3 horas al día en pantalla; el máximo fue 8.',
            'Los datos muestran cosas muy importantes sobre el uso del celular en el colegio.',
            'Creo que la gente usa mucho el celular, como todo el mundo sabe desde hace años.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Una frase, con cifras, que responde la pregunta. Las otras no dicen qué encontraste.',
          feedbackIncorrecto: 'Un hallazgo dice qué encontraste, con cifras, en una frase. «Muchos cálculos» y «cosas importantes» no son hallazgos.'
        },
        {
          enunciado: 'En el censo de un resguardo, ¿qué le pasa a quien no está el día del censo, y qué te enseña eso para tu estudio?',
          opciones: [
            'Nada, porque el cabildo lo agrega después de memoria; en tu estudio tampoco importa quién falta.',
            'Queda fuera de la lista y del reparto; en tu estudio, hay que decir quién quedó fuera.',
            'Lo cuentan dos veces al día siguiente; en tu estudio, se duplican los datos para compensar.',
            'Lo reemplaza un funcionario con un promedio; en tu estudio, inventas el dato que falta.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La tierra se reparte conforme al censo. Por eso tu informe dice a quién no encuestaste.',
          feedbackIncorrecto: 'Quien no está en la lista no existe para el reparto. La lección es declarar quién quedó fuera, no inventar ni duplicar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué persona o grupo quedó fuera de tu muestra, y cómo cambiaría tu hallazgo si estuviera?',
    transferencia: 'La próxima vez que veas una cifra sobre «los jóvenes» o «los colombianos», pregúntate a cuántos encuestaron y a quién dejaron fuera.',
    cierre: 'Una pregunta, quince datos y una frase honesta valen más que cien cifras sin pregunta.'
  },
  saberAncestral: {
    saber: 'Cuando una comunidad indígena pide constituir o ampliar su resguardo, se levanta un censo. El instructivo oficial lo define como «una fotografía de la realidad de una comunidad en un tiempo y espacio específico» (Agencia Nacional de Tierras, 2023). No lo hace un funcionario solo. Se apoya en miembros del cabildo, maestros y líderes de la comunidad, que van casa por casa con un formato. Se pregunta a todas las personas: quiénes son, cuántos años tienen, qué hacen. Después alguien verifica lo escrito, lo sistematiza y lo cuenta. Y con esa lista se toma una decisión enorme: la tierra se distribuye «conforme al censo realizado». Mira las etapas: una pregunta, un método, una recolección persona por persona, una revisión, un cálculo, una decisión. Es un estudio completo. La cara de exclusión es literal: quien no queda en la lista el día del censo no existe para el reparto. Hoy vas a hacer un estudio mucho más pequeño, sobre tu colegio, con las mismas etapas y el mismo cuidado por quién queda fuera.',
    fuente: 'Cabildos indígenas · el censo poblacional del resguardo',
    referencia: 'Agencia Nacional de Tierras, Dirección de Asuntos Étnicos. (2023). Instructivo: levantamiento y diligenciamiento del formato de censo poblacional para comunidades indígenas (ACCTI-I-021, versión 1).',
    preguntaPuente: 'El censo del resguardo decide la tierra, y quien no está en la lista queda fuera. Cuando encuestes a veinte compañeros sobre su tiempo de pantalla, ¿quién no va a estar en tu lista? ¿Y qué le pasa a tu hallazgo por esa ausencia?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'El censo del resguardo',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Diez preguntas posibles',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖',
        '✏️'
      ],
      titulo: 'Actividad 2 · Mi pregunta y mi hipótesis',
      duracionMin: 25
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✏️',
        '✅'
      ],
      titulo: 'Actividad 3 · Mi mini estudio',
      duracionMin: 30
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
      titulo: 'Diez preguntas posibles',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Escribe diez preguntas sobre tu colegio que se puedan responder con datos, por ejemplo cuántos minutos de pantalla al día tienen los de octavo.',
        'Revisa que cada pregunta tenga algo que se cuente o se mida.',
        'Tacha las que no podrías responder en una semana.',
        'Marca con una estrella las tres que más te interesan de verdad.'
      ],
      cuaderno: {
        titulo: 'Diez preguntas posibles',
        formato: 'lista numerada de diez preguntas, con tachones y estrellas',
        extension: 'media página'
      },
      criterios: [
        'Quedan al menos cinco preguntas sin tachar.',
        'Tres tienen estrella.'
      ]
    },
    {
      numero: 2,
      verbo: 'EVALÚA',
      titulo: 'Elige la pregunta y escribe la hipótesis',
      tiempoMin: 25,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, pasen sus tres preguntas con estrella por los cuatro filtros, datos esta semana, al menos quince datos, interés real, algún uso.',
        'Elijan cada uno la pregunta que pase los cuatro.',
        'Escriban la hipótesis antes de recolectar nada, creo que voy a encontrar X, porque Y.',
        'Planeen la recolección, a quién, cuántos, cuándo y con qué.',
        'Escriban quién va a quedar fuera de la muestra y por qué.'
      ],
      cuaderno: {
        titulo: 'Mi pregunta y mi hipótesis',
        formato: 'la pregunta elegida, los cuatro filtros con su respuesta, la hipótesis con su porqué, el plan de recolección y una línea sobre quién queda fuera',
        extension: 'media página'
      },
      criterios: [
        'La pregunta pasa los cuatro filtros.',
        'La hipótesis está escrita antes de recolectar y sabes a quién no vas a encuestar.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'El mini estudio completo',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Recolecta los datos durante tres a cinco días, como planeaste.',
        'Límpialos con bitácora y calcula las cuatro funciones y una fórmula compuesta que responda tu pregunta.',
        'Haz un gráfico honesto del tipo correcto.',
        'Escribe el hallazgo en una frase y la decisión que tomarías.',
        'Arma el informe de dos páginas con las ocho etapas y cierra con limitaciones y mejoras.'
      ],
      cuaderno: {
        titulo: 'Mi mini estudio',
        formato: 'el esquema del informe con las ocho secciones tituladas y qué va en cada una; el informe completo se entrega aparte',
        extension: 'una página'
      },
      criterios: [
        'Las etapas 1 a 3 están listas y las ocho secciones tienen título.',
        'Sabes qué te falta recolectar esta semana.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.9.4.1',
      lente: 'lente del nosotros',
      cita: 'Como los temas son infinitos y el tiempo corto, hay que saber perder tiempo para elegir los temas fundamentales.',
      preguntaEspejo: '¿Elegí mi pregunta porque importa, o porque era la más fácil de responder?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VI, 21 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Si alguien te muestra que estás equivocado, cambia de camino con gusto. Lo que daña no es el error: es aferrarse a él.',
      preguntaEspejo: 'Si mis datos contradicen mi hipótesis, ¿voy a decirlo en el informe?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Ganan quienes saben preguntar y responder, y por eso saben qué datos buscar.',
      preguntaEspejo: '¿Mi pregunta me dijo exactamente qué datos buscar, o busqué y después pregunté?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Hiciste un estudio de principio a fin. Ya sabes que una pregunta bien hecha vale más que muchos datos.',
    emocional: 'Si tu hipótesis falló, lo escribiste. Eso cuesta, y es lo que hace confiable tu informe.',
    ciudadana: 'Un censo decide derechos; una encuesta decide una nota. En las dos, quien queda fuera importa. Preguntar por quién falta es ciudadanía.',
    local: 'El censo de un resguardo se hace casa por casa con la gente del cabildo. Tu estudio se hizo pupitre por pupitre. La misma seriedad, otra escala.',
    intergeneracional: 'Un informe con limitaciones claras lo puede continuar quien venga después. Eso es investigar en comunidad.'
  }
};

export default contenido;
