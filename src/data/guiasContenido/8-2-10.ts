/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 10
 * (sesión global 20).
 *
 * Auto-generado desde content/guias/8/8-2-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 10,
  titulo: 'Sustentación del proyecto técnico — honestidad del oficio',
  resumen: 'Como el mostrador del artesano: mostrar el oficio con honestidad, mostrar evidencia, reconocer límites. Aprendes a sustentar un proyecto técnico de 5 minutos con phronesis.',
  duracionMin: 90,
  subtema: 'Sustentación · Honestidad técnica · Mejoras futuras',
  preLectura: {
    porQueImporta: 'Saber sustentar honestamente un proyecto técnico te servirá toda la vida: defender una propuesta de empleo, presentar resultados a un cliente, sustentar una tesis. La honestidad construye credibilidad.',
    preguntaDetonante: '¿Qué del mostrador del artesano — su disciplina de mostrar el oficio con honestidad — podemos llevar a la sustentación digital?',
    activacion: {
      titulo: 'La sustentación memorable',
      descripcion: 'En 5 minutos: en parejas recuerden la mejor sustentación que han visto (un compañero, un emprendedor, un profesor). ¿Qué la hizo memorable? ¿Tenía honestidad sobre limitaciones?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 19 ejecutaste tu proyecto MILC integrador.',
      siguiente: 'Cierre del periodo 2. En el periodo 3 entrarás a multimedia, ciberseguridad y estética de la liberación.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación técnica',
      definicion: 'Presentación pública del proyecto con demo en vivo, explicación del problema y declaración honesta de límites. No es show, es entrega de oficio.',
      ejemplo: '5 minutos donde muestras el problema, el sensor, los datos, la propuesta y respondes preguntas de la audiencia.',
      emoji: '🎤'
    },
    {
      termino: 'Demo en vivo',
      definicion: 'Mostrar el sistema funcionando frente a la audiencia, no una captura de pantalla. Distingue al proyecto sólido del proyecto inflado.',
      ejemplo: 'Sacas el micro:bit, lo conectas, dejas que la audiencia vea la lectura del sensor cambiando en tiempo real.',
      emoji: '🛠️'
    },
    {
      termino: 'Declaración de limitaciones',
      definicion: 'Reconocer públicamente qué del sistema aún no funciona y por qué. Gana confianza profesional; ocultarlo la pierde.',
      ejemplo: '"Esto funciona bien. Esto otro aún falla con humedad alta y la razón es que no calibré el sensor en condiciones de lluvia."',
      emoji: '🪞'
    },
    {
      termino: 'Honestidad técnica',
      definicion: 'Ética del oficio que valora reconocer lo no resuelto por encima de aparentar perfección. Origen del respeto profesional.',
      ejemplo: 'Una pregunta dura de la audiencia detecta un error. Reconocerlo de frente es mejor que inventar excusas.',
      emoji: '🤝'
    },
    {
      termino: 'Autoevaluación',
      definicion: 'Cierre donde nombras 1 fortaleza y 1 mejora concreta para futuras sustentaciones. Convierte la presentación en aprendizaje.',
      ejemplo: 'Fortaleza, expliqué bien el problema. Mejora, debo cronometrar mejor la demo para no extenderme.',
      emoji: '🪜'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sustentas como el relojero entrega el reloj?',
      instrucciones: '5 preguntas para verificar que entiendes la honestidad del oficio.',
      preguntas: [
        {
          enunciado: '¿Por qué la demo en vivo importa más que una captura de pantalla?',
          opciones: [
            'Porque queda más bonita',
            'Porque demuestra que el sistema realmente funciona',
            'Porque dura más tiempo',
            'Porque ocupa menos memoria'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La demo en vivo es la prueba real. La captura puede ser de un momento favorable, la demo no engaña.',
          feedbackIncorrecto: 'La razón es la prueba real. Una captura puede esconder fallas; la demo en vivo las expone si las hay.'
        },
        {
          enunciado: 'La audiencia detecta un bug en tu sistema. ¿Cuál es la respuesta profesional?',
          opciones: [
            'Reconocerlo y explicar la causa o el plan para resolverlo',
            'Negar que existe',
            'Cambiar de tema',
            'Salir del salón'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La honestidad técnica gana respeto profesional; ocultar el bug lo pierde.',
          feedbackIncorrecto: 'Lo profesional es reconocer el bug, explicar la causa probable o el plan para resolverlo. Ocultarlo daña más que el bug mismo.'
        },
        {
          enunciado: '¿Cuál de estos elementos NO debe faltar en la sustentación?',
          opciones: [
            'Animaciones de transición elegantes',
            'Música de fondo',
            'Demo en vivo + declaración de limitaciones',
            'Disfraces'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Demo en vivo y declaración de limitaciones son irrenunciables. El resto es decorado opcional.',
          feedbackIncorrecto: 'Los elementos no negociables son la demo en vivo y la declaración de limitaciones. El resto es decoración.'
        },
        {
          enunciado: '¿Para qué sirve la autoevaluación final?',
          opciones: [
            'Para alargar la sustentación',
            'Para ganar más nota',
            'Para llenar tiempo',
            'Para convertir la presentación en aprendizaje (1 fortaleza + 1 mejora)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La autoevaluación honesta es lo que diferencia una entrega cerrada de un aprendizaje que sigue.',
          feedbackIncorrecto: 'La autoevaluación convierte la sustentación en aprendizaje. Nombrar 1 fortaleza y 1 mejora concreta marca el siguiente paso.'
        },
        {
          enunciado: 'El relojero del oficio decía "marca bien pero el minutero se atrasa un minuto cada semana". Eso es ejemplo de...',
          opciones: [
            'Modestia falsa',
            'Inseguridad',
            'Honestidad técnica',
            'Mal trabajo'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Honestidad técnica. Declarar la limitación es la firma del oficio profesional.',
          feedbackIncorrecto: 'Es honestidad técnica. El cliente sabe qué lleva y qué cuidar; esa transparencia construye confianza a largo plazo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'La honestidad técnica es habilidad que se entrena. ¿En qué situación de tu vida (académica, familiar, social) te ha sido difícil reconocer limitaciones honestamente?',
    transferencia: 'Mañana sustenta tu proyecto en 5 minutos cronometrados. Reconoce 2 limitaciones reales y propón 2 mejoras futuras. Recibe la crítica con apertura.',
    cierre: 'El mostrador del artesano y la sustentación digital comparten un principio: mostrar honestamente lo que se hizo, lo que falta, lo que se aprendió. La honestidad construye oficio. Cierre del periodo 2.'
  },
  saberAncestral: {
    saber: 'Cuando el relojero del centro de Cartago entregaba un reloj reparado al cliente, lo ponía sobre el mostrador con un gesto silencioso y siempre el mismo discurso: "Vea, ya marca bien, lo probé toda la noche", decía señalando el péndulo en movimiento estable. Pero el relojero nunca prometía perfección absoluta. Después de mostrar lo que funcionaba, siempre agregaba la declaración honesta: "El minutero a veces se atrasa un minuto cada semana; eso es de la cuerda vieja, pero no se puede arreglar sin cambiar pieza", o "si se cae al piso, la espiral va a romper", o "la campanada del difunto sigue sonando un poco apagada, eso es del badajo, hay que mandar a hacer otro". El cliente entonces sabía exactamente qué llevaba y qué cuidar. Esa honestidad no era debilidad: era la firma del oficio profesional. El relojero que prometía perfección absoluta perdía clientes en cuanto el reloj fallaba; el relojero honesto los conservaba durante décadas, porque el cliente sabía que podía confiar en su palabra. La sabiduría era simple: declara lo que funciona, declara lo que aún no, promete mejorar lo que se puede mejorar.',
    fuente: 'Mostrador del artesano en talleres del Valle, el Pacífico y la Guajira',
    preguntaPuente: '¿Qué sabía el relojero al declarar lo que aún no funcionaba al entregar la pieza, que el sustentante novato olvida cuando esconde los bugs y promete perfección? ¿Y por qué la honestidad técnica gana respeto profesional que la inflación de logros nunca gana?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El sustentante que declara lo que aún no funciona devuelve oficio a la comunidad; el que lo esconde reproduce la lógica del fraude técnico.',
      preguntaEspejo: '¿Mi sustentación devuelve oficio honesto, o presenta un proyecto inflado?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Declarar lo que no funciona es disciplina del carácter; esconderlo es debilidad disfrazada de competencia.',
      preguntaEspejo: '¿Estoy declarando lo que aún no funciona, o lo escondo esperando que nadie lo note?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La transparencia técnica es la nueva ética del oficio en la era de los sistemas complejos.',
      preguntaEspejo: '¿Mi sustentación contribuye a la cultura de la transparencia técnica, o la erosiona ocultando limitaciones?'
    }
  },
  cincoDimensiones: {
    personal: 'Cerraste el periodo con sustentación honesta — habilidad rara en el mundo adulto, entrenada aquí.',
    emocional: 'Sentiste el nervio de mostrar limitaciones en público y lo sostuviste — eso entrena humildad madura, no sumisa.',
    ciudadana: 'La sustentación con honestidad técnica es base de la deliberación democrática: defender y reconocer límites a la vez.',
    local: 'Heredaste el ritual del mostrador del artesano: presentar la pieza con sus aciertos y sus límites visibles.',
    intergeneracional: 'El artesano frente a su maestro y tú frente al curso comparten gramática: defender el oficio sin esconder lo que falta.'
  }
};

export default contenido;
