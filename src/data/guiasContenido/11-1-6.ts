/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 6
 * Tema: SEO básico — hacerme visible sin engaños.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-6.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 6,
  titulo: 'SEO básico — hacerme visible sin engaños',
  ocultarPDF: false,
  resumen:
    'Aplicas técnica honesta de SEO a tu sitio para que Google lo encuentre cuando alguien busca lo que ofreces. Pregón digital, no truco.',
  duracionMin: 95,
  subtema: 'Presencia y marca digital · SEO honesto',

  saberAncestral: {
    saber:
      'En las plazas del Valle, el pregonero hacía llegar el mensaje correcto a la gente correcta. No gritaba: pregonaba. Anunciaba con voz clara, a la hora justa, en el lugar donde lo necesitaban escuchar. "Los huevos del corral de Don Tobías", "el agua bendita del padre Antonio", "el pan tibio de la señora Inés". El que lo oía iba; el que no lo necesitaba seguía su camino. Pregón honesto, no grito desesperado.',
    fuente: 'Oficio del pregonero en las plazas del Valle del Cauca',
    preguntaPuente:
      '¿Qué hacía que el pregonero antiguo lograra que la gente correcta lo escuchara entre el ruido de la plaza? ¿Por qué a algunos los oían y a otros no?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El pregonero honesto', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Cómo busca la gente real', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Cómo decide Google', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Optimiza tu sitio en 5 pasos', duracionMin: 40 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'El SEO no es truco para engañar a Google: es técnica honesta para que tu sitio aparezca cuando alguien busca lo que ofreces. Sin SEO básico, tu marca queda invisible aunque la URL exista. Es el pregón digital de tu plaza.',
    preguntaDetonante:
      'Si alguien busca en Google una frase con lo que tú haces, ¿aparece tu sitio en la primera página? Si no, ¿por qué?',
    activacion: {
      titulo: 'El primer test',
      descripcion:
        'En 3 minutos, googlea tu nombre completo entre comillas + una palabra que describa tu sitio. Anota qué aparece en los 5 primeros resultados. Si tu sitio no está, anota qué SÍ está. Eso es contra lo que compites.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 5 escribiste el Sobre mí de tu sitio coescribiéndolo con IA y firmándolo con tu voz.',
      siguiente:
        'En la sesión 7 producirás tu imagen propia: 3 fotos profesionales + 1 video corto coherentes con tu marca.',
    },
  },

  conceptosClave: [
    {
      termino: 'Palabra clave (keyword)',
      definicion:
        'Frase que la gente escribe en un buscador para encontrar algo. Las buenas keywords son frases largas (3+ palabras) y cotidianas, no jerga técnica.',
      ejemplo:
        '"diseñador gráfico Cartago Valle del Cauca" es mejor que "diseñador" — específica, real, sostenible.',
      emoji: '🔑',
    },
    {
      termino: 'Title',
      definicion:
        'Texto en la pestaña del navegador y el primer renglón del resultado de Google. 50-60 caracteres. Es la primera impresión.',
      ejemplo:
        '<title>Tu Nombre — diseño visual para pequeños negocios en Cartago</title>. Específico y sostenible.',
      emoji: '📑',
    },
    {
      termino: 'Meta description',
      definicion:
        'Resumen de 140-160 caracteres que Google muestra debajo del title en los resultados. Define si la gente entra o no a tu sitio.',
      ejemplo:
        '"Construyo identidad visual y sitios web para emprendimientos del Valle. Portafolio, contacto y horario." Claro y completo.',
      emoji: '📋',
    },
    {
      termino: 'Alt text',
      definicion:
        'Atributo alt de las imágenes que describe lo que muestra. Sirve a lectores de pantalla Y a Google — duplica visibilidad y accesibilidad.',
      ejemplo:
        '<img src="foto.jpg" alt="Retrato profesional con paleta de marca verde y crema, contexto Cartago". Útil para personas y para Google.',
      emoji: '🖼',
    },
    {
      termino: 'Sitemap.xml',
      definicion:
        'Archivo XML en la raíz de tu dominio que lista todas las URLs públicas de tu sitio. Le dice a Google qué páginas existen y cuáles son más importantes.',
      ejemplo:
        'tunombre.github.io/sitemap.xml con entradas para /, /sobre, /proyectos, /contacto. Submit en Google Search Console.',
      emoji: '🗺',
    },
    {
      termino: 'Keyword stuffing',
      definicion:
        'Repetir la palabra clave decenas de veces para forzar el ranking. Google lo penaliza con drops bruscos. La técnica honesta usa la keyword naturalmente.',
      ejemplo:
        'Mal: "diseñador en Cartago diseñador Cartago diseñador Cartago…". Bien: "Diseño en Cartago. Trabajo con emprendedores locales del Valle".',
      emoji: '⚠️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Palabras clave del que te busca',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Imagina 3 perfiles distintos que podrían buscarte: futuro empleador, cliente potencial, profesor de admisión universitaria.',
        'Para cada perfil, anota lo que esa persona escribiría en Google si no te conoce. Frases largas (3+ palabras), no jerga técnica.',
        'Llega a 10 frases mínimo. Mezcla geografía (Cartago, Valle), oficio y problema concreto.',
        'Prueba 3 de esas frases en Google ahora. Anota qué aparece y qué tan saturado está el resultado.',
      ],
      cuaderno: {
        titulo: 'Palabras clave de mi marca',
        formato: 'Lista de 10 frases numeradas, agrupadas en 3 perfiles. Al final, las 3 frases más estratégicas + 1 párrafo de justificación.',
        extension: '10 frases + 3 elegidas + párrafo de 3 renglones',
      },
      criterios: [
        'Las frases tienen 3+ palabras (no términos sueltos)',
        'Lenguaje cotidiano, no jerga técnica',
        'Las 3 elegidas son las que tu sitio sostiene honestamente',
        'Las 3 mezclan geografía, oficio y problema',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Cómo decide Google qué mostrar primero',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Repasa las 4 capas del SEO: contenido, metadatos, estructura, accesibilidad.',
        'Para cada capa, escribe en tus palabras qué es (1 frase).',
        'Para cada capa, da un ejemplo concreto de cómo la aplicarías a tu sitio.',
        'Cierra con 1 párrafo: ¿por qué el SEO honesto vence al SEO de trucos en el largo plazo?',
      ],
      cuaderno: {
        titulo: 'Cómo decide Google qué mostrar primero',
        formato: '4 fichas, una por capa (contenido / metadatos / estructura / accesibilidad), cada una con definición + ejemplo de tu sitio',
        extension: '4 fichas + 1 párrafo de cierre sobre honestidad SEO',
      },
      criterios: [
        'Cada definición está en tus palabras (no copia)',
        'Cada ejemplo es específico de tu sitio',
        'El párrafo de cierre menciona el problema del keyword stuffing',
        'Puedes explicar cada capa sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Optimiza tu sitio en 5 pasos',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Abre tu repo en VS Code y edita <title> en <head>: 50-60 caracteres con tu propuesta de valor.',
        'Edita <meta name="description">: 140-160 caracteres claros y específicos.',
        'Revisa que haya un solo <h1> en tu home, con tu palabra clave principal usada naturalmente.',
        'Recorre todas las imágenes y agrega alt descriptivo (no genérico tipo "imagen1.jpg").',
        'Crea sitemap.xml con tus URLs en la raíz. Commit + push. Verifica en search.google.com/test que Google lo lee bien.',
      ],
      cuaderno: {
        titulo: 'Mi SEO básico aplicado',
        formato: '4 secciones (Title · Description · Palabras clave aplicadas · Sitemap) con datos finales y captura del código real.',
        extension: '4 secciones + capturas — 1 página de cuaderno',
      },
      criterios: [
        'Title específico (no "Inicio"), 50-60 caracteres',
        'Description única, 140-160 caracteres, sin promesas que no cumples',
        'UN H1 con palabra clave principal usada naturalmente',
        'Cien por ciento de imágenes con alt descriptivo',
        'sitemap.xml accesible y validado',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Audita el SEO de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia URLs con un compañero. Abre la suya y mira el código fuente (Ver código → buscar <title> y <meta>).',
        'Califica del 1 al 5: (a) ¿title específico de 50-60?, (b) ¿description única de 140-160?, (c) ¿todas las imágenes tienen alt?',
        'Googlea su title entre comillas. ¿Aparece su sitio? Anótalo.',
        'Devuelve la auditoría con 1 observación que afirma + 1 que reta.',
      ],
      cuaderno: {
        titulo: 'Auditoría SEO de [nombre]',
        formato: '3 calificaciones con justificación + resultado del test en Google + 2 observaciones',
        extension: '3 calificaciones + test Google + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Inspeccionaste el código fuente, no solo lo visible',
        'Las 3 calificaciones tienen justificación',
        'Hiciste la búsqueda en Google con comillas',
        'Las observaciones son específicas (no genéricas)',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el SEO honesto',
      instrucciones:
        '5 preguntas para confirmar que distingues técnica honesta de trucos. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la longitud recomendada de un <title> para SEO?',
          opciones: ['10-20 caracteres', '50-60 caracteres', '100-120 caracteres', 'Cuanto más largo, mejor'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 50-60 caracteres caben completos en el resultado de Google. Más largo, Google lo corta.',
          feedbackIncorrecto:
            'El title óptimo es 50-60 caracteres. Más corto pierde información, más largo Google lo corta con "...".',
        },
        {
          enunciado: '¿Por qué Google penaliza el keyword stuffing?',
          opciones: [
            'No lo penaliza',
            'Porque degrada la experiencia del usuario y rompe la cooperación de búsqueda',
            'Porque consume mucho ancho de banda',
            'Porque es difícil de leer',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Google quiere ofrecer resultados útiles. Repetir keywords para forzar el ranking degrada la utilidad — penalización.',
          feedbackIncorrecto:
            'Keyword stuffing degrada la utilidad de los resultados. Google lo detecta y baja tu posición — a veces de forma brusca.',
        },
        {
          enunciado: '¿Para qué sirve el alt text en una imagen?',
          opciones: [
            'Solo para decorar',
            'Para lectores de pantalla Y para que Google entienda la imagen',
            'Para reducir el tamaño del archivo',
            'Para hacer la imagen más bonita',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Doble función: accesibilidad para personas con lectores de pantalla + información para Google. Ambas cosas a la vez.',
          feedbackIncorrecto:
            'El alt text sirve doblemente: lectores de pantalla lo leen para describir la imagen, y Google lo usa para entender qué muestra.',
        },
        {
          enunciado: '¿Qué es sitemap.xml y dónde va?',
          opciones: [
            'Un archivo de imágenes; va en /images',
            'Un archivo XML con tus URLs; va en la raíz del dominio',
            'Un archivo de CSS; va en /styles',
            'Un archivo de JavaScript; va en /scripts',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. tunombre.github.io/sitemap.xml lista todas tus páginas. Google lo lee para indexarlas.',
          feedbackIncorrecto:
            'sitemap.xml es la lista XML de tus URLs públicas. Va en la raíz: tunombre.github.io/sitemap.xml.',
        },
        {
          enunciado:
            'En el saber del pregonero, ¿qué aplica directamente al SEO honesto?',
          opciones: [
            'Nada — los pregoneros no usaban internet',
            'Hablar claro, a la gente correcta, sobre lo que sí ofreces — no gritar a todos',
            'Que los pregoneros eran ruidosos',
            'Que pregonaban solo de mañana',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. SEO honesto = pregón digital. Voz clara, gente correcta, oferta real. SEO de trucos = grito desesperado.',
          feedbackIncorrecto:
            'El pregonero hablaba con la gente correcta sobre lo que sí tenía. SEO honesto: lo mismo, ahora digital.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, cada día abre Google y busca una de tus 3 frases clave estratégicas. Anota qué posición ocupa tu sitio y cómo se ve tu resultado (title y description) en el listado. Esa bitácora de 7 días te enseña a leer cómo te ve Google. El próximo lunes traes la bitácora al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda comunidad de comunicación se hace plena cuando incluye la voz del excluido.',
      preguntaEspejo:
        '¿Mi sitio aparece para servir a quien lo busca, o solo para promocionarme yo? ¿A quién dejo afuera con las palabras clave que elijo?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El obstáculo en el camino se vuelve el camino.',
      preguntaEspejo:
        '¿Mi SEO depende de trucos que cualquier cambio de algoritmo derriba, o de calidad que aguanta el tiempo? ¿Qué de mi sitio sobrevive a Google?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La búsqueda es un acto cooperativo entre el que busca, el que ofrece, y la infoesfera que los conecta.',
      preguntaEspejo:
        '¿Mi SEO aporta a la cooperación de búsqueda en la infoesfera, o la degrada con ruido? ¿Estoy ayudando a que la gente encuentre lo que necesita?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a hacerte visible sin engañar — técnica honesta que sobrevive cambios de algoritmo.',
    emocional:
      'Resististe la tentación de inflar promesas para subir posiciones — elegiste sostenible sobre llamativo.',
    ciudadana:
      'Cada palabra clave honesta contribuye a una infoesfera de búsqueda menos saturada de ruido.',
    local:
      'Incluiste señales de Cartago y el Valle en tus keywords — visibilidad anclada en tu lugar.',
    intergeneracional:
      'El oficio del pregonero —voz clara, gente correcta, mensaje sostenible— sobrevive en formato 2026.',
  },
};

export default contenido;
