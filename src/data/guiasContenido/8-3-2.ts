/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 2
 * (sesión global 22).
 *
 * Auto-generado desde content/guias/8/8-3-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 2,
  titulo: 'Animaciones e hipervínculos — narrativa interactiva',
  resumen: 'Como el movimiento del titiritero: cada figura entra, gesticula, sale en su tiempo. Aprendes a usar animaciones e hipervínculos con propósito (no decoración) en presentaciones digitales.',
  duracionMin: 90,
  subtema: 'Animaciones · Hipervínculos · Narrativa interactiva',
  preLectura: {
    porQueImporta: 'Saber crear presentaciones interactivas te diferencia profesionalmente: cuando alguien navega tu presentación según interés, en lugar de seguir un orden lineal, demuestras dominio del medio.',
    preguntaDetonante: '¿Qué del titiritero —su disciplina de mover una figura a la vez— podemos llevar a las animaciones digitales?',
    activacion: {
      titulo: 'La presentación interactiva',
      descripcion: 'En 5 minutos: en parejas exploran una presentación interactiva (en Canva o YouTube). Identifiquen 3 animaciones con propósito y 3 sin propósito. ¿Qué las distingue?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 21 aplicaste principios visuales a 5 diapositivas.',
      siguiente: 'En la sesión 23 construirás presentación de alto impacto con narrativa.'
    }
  },
  conceptosClave: [
    {
      termino: 'Presentación interactiva',
      definicion: 'Secuencia de slides que no se recorre linealmente. El lector elige caminos, regresa, salta entre secciones según hipervínculos.',
      ejemplo: 'Una historia con 3 finales posibles. El lector elige al final de cada acto y la presentación salta al desenlace correspondiente.',
      emoji: '🔀'
    },
    {
      termino: 'Hipervínculo interno',
      definicion: 'Texto o botón que al hacer clic lleva a otra slide dentro de la misma presentación. Permite ramificar la narrativa.',
      ejemplo: 'En Google Slides, clic derecho sobre el texto → Insertar enlace → seleccionar slide destino.',
      emoji: '🔗'
    },
    {
      termino: 'Animación',
      definicion: 'Efecto que aparece, se mueve o cambia según un disparador (clic, carga, tiempo). Debe apoyar la comprensión, no decorar.',
      ejemplo: 'Un mapa que se llena por regiones a medida que el presentador habla. Cada región aparece al hacer clic.',
      emoji: '✨'
    },
    {
      termino: 'Disparador (trigger)',
      definicion: 'Acción que activa la animación: clic del lector, carga de la slide, transcurso de tiempo, hover sobre un objeto.',
      ejemplo: 'Una animación con disparador "al hacer clic" da control al lector; "al cargar" la activa automáticamente.',
      emoji: '🎬'
    },
    {
      termino: 'Plataforma de slides',
      definicion: 'Herramienta para construir presentaciones. Las más usadas y gratuitas: Google Slides, Canva, Genially, PowerPoint escolar.',
      ejemplo: 'Genially es muy potente para interactividad; Google Slides es simple y colaborativo en tiempo real.',
      emoji: '🖼️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas la narrativa interactiva?',
      instrucciones: '5 preguntas para verificar que diseñas presentaciones con propósito comunicativo.',
      preguntas: [
        {
          enunciado: '¿Cuál es el criterio profesional para usar animaciones?',
          opciones: [
            'Que sean llamativas',
            'Que apoyen la comprensión, no que decoren',
            'Que sean muchas',
            'Que reboten siempre'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La animación bien usada revela información en el momento justo. La decorativa cansa al lector.',
          feedbackIncorrecto: 'El criterio es que apoye la comprensión. La decoración por decoración cansa y resta foco.'
        },
        {
          enunciado: 'En Google Slides, ¿cómo insertas un hipervínculo a otra slide?',
          opciones: [
            'Solo se puede a páginas web',
            'Hay que editar HTML',
            'Clic derecho → Insertar enlace → seleccionar slide',
            'No es posible'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Clic derecho sobre el texto u objeto → Insertar enlace → elegir slide destino.',
          feedbackIncorrecto: 'En Google Slides se hace con clic derecho sobre el texto y luego Insertar enlace, eligiendo el slide destino.'
        },
        {
          enunciado: '¿Qué es un "disparador" de animación?',
          opciones: [
            'Un error en la presentación',
            'El final del slide',
            'Una herramienta externa',
            'La acción que activa la animación (clic, carga, hover)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. El disparador define cuándo se ejecuta la animación: al clic, al cargar, al tiempo, al hover.',
          feedbackIncorrecto: 'Es la acción que activa la animación. Define si el lector controla el ritmo o si avanza sola.'
        },
        {
          enunciado: '¿Cuál de estas plataformas permite construir narrativa interactiva con hipervínculos internos?',
          opciones: [
            'Google Slides, Canva, Genially y PowerPoint',
            'Solo PowerPoint pago',
            'Solo Adobe Illustrator',
            'Solo herramientas de pago'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Las 4 plataformas mencionadas son gratuitas o accesibles y soportan hipervínculos internos.',
          feedbackIncorrecto: 'Las 4 (Google Slides, Canva, Genially, PowerPoint escolar) lo permiten y son accesibles para estudiantes.'
        },
        {
          enunciado: 'Tu presentación tiene animaciones que entran rebotando sin razón. ¿Qué problema tiene?',
          opciones: [
            'Las animaciones decorativas cansan y restan foco al mensaje',
            'Ninguno, es estilo personal',
            'Va a ser más rápida',
            'Va a tener mejor nota automáticamente'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Las animaciones decorativas distraen del mensaje y cansan al lector tras unos pocos slides.',
          feedbackIncorrecto: 'El problema es que cansan. Cada animación debe tener propósito comunicativo, no ser adorno.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'El minimalismo en animaciones es señal de profesionalismo. ¿En qué otros ámbitos de tu vida (decoración, vestimenta, hábitos) "menos es más"?',
    transferencia: 'Esta semana: en una presentación tuya, cuenta cuántas animaciones tienes. Si son más de 3 por diapositiva, recorta hasta dejar solo las que agreguen claridad real.',
    cierre: 'El titiritero y el animador digital comparten oficio: mover lo justo, en el momento justo. La disciplina del movimiento es elegancia.'
  },
  saberAncestral: {
    saber: 'En las noches de fogón del Pacífico colombiano y en los corredores de las casas de los abuelos del Valle, había una práctica que cualquier nieto reconoce: el cuentero del fogón. El abuelo o la abuela no contaba la historia como aparece en los libros: lineal, principio-medio-fin. La contaba con ramas, saltos, regresos: "Y entonces el tigre dijo... pero antes les cuento de la vez que mi abuelo fue al monte... y eso me hace acordar de cuando llovió tan fuerte que el río arrastró la mula...". El cuento iba y volvía. El nieto, lejos de aburrirse, prestaba más atención: la narrativa con ramas obligaba a seguir el hilo activamente. Cuando volvía al tigre, ya había aprendido cosas que el cuento lineal nunca le habría enseñado. El cuento del fogón no era una línea recta: era un mapa, y el nieto navegaba ese mapa con la guía del cuentero. Mucho antes de que existieran los hipervínculos, el oficio del cuentero ancestral practicaba el hipertexto: textos conectados que el lector recorre eligiendo caminos. La narrativa interactiva digital es esa práctica antigua formalizada con clics.',
    fuente: 'Oficio del titiritero en plazas del Valle y el Caribe colombiano',
    preguntaPuente: '¿Qué sabía el cuentero del fogón al contar la historia con ramas y regresos, que el novato en presentaciones olvida cuando hace 20 slides lineales en orden estricto? ¿Y por qué una presentación con 3 ramas bien pensadas es más comunicativa que una lineal con 30 slides?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La narrativa que ofrece caminos respeta al lector como sujeto; la que impone orden lo somete como objeto pasivo.',
      preguntaEspejo: '¿Mi presentación ofrece caminos o impone uno?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La animación que aporta es virtud; la que solo decora es vanidad del autor.',
      preguntaEspejo: '¿Mis animaciones aportan comprensión, o solo decoran porque sí?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El hipertexto bien diseñado es infraestructura cognitiva que respeta cómo el cerebro humano explora información.',
      preguntaEspejo: '¿Mi presentación respeta cómo piensan los lectores, o solo cómo yo organicé el contenido?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que la disciplina del movimiento es elegancia — mover lo justo es decisión madura.',
    emocional: 'Resististe la tentación de "compensar contenido débil con efectos llamativos" — elegiste sustancia sobre espectáculo.',
    ciudadana: 'Respetar la atención del espectador es ciudadanía digital concreta en una era de saturación visual.',
    local: 'Heredaste el oficio del titiritero: cada figura en su tiempo, ninguna por demás.',
    intergeneracional: 'El titiritero de la plaza y el animador digital comparten ética. Lo que cambia es la herramienta, no la disciplina del movimiento.'
  }
};

export default contenido;
