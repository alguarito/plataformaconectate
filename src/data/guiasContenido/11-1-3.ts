/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 3
 * Tema: Sitio web personal — fundamentos de la casa digital (HTML semántico).
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-3.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 3,
  titulo: 'Sitio web personal — fundamentos de la casa digital',
  ocultarPDF: false,
  resumen:
    'Construyes la casa digital de tu marca: un wireframe a mano + un index.html con estructura HTML semántica clara.',
  duracionMin: 90,
  subtema: 'Presencia y marca digital · HTML semántico',

  saberAncestral: {
    saber:
      'Los caminos prehispánicos —la red del oro Quimbaya en el Valle, los caminos incas, los senderos de los chasquis— no eran trazos al azar: cada uno tenía un propósito y conectaba un lugar específico con otro. El que caminaba sabía adónde iba porque la ruta estaba pensada. Esa misma intención organiza un buen sitio web.',
    fuente: 'Caminos prehispánicos del Valle del Cauca, redes Quimbaya y chasquis del Tahuantinsuyu',
    preguntaPuente:
      '¿Qué hacía que los caminos antiguos llevaran a la gente al lugar correcto sin GPS? ¿Qué señales usaban y por qué funcionaban?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Caminos con intención', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Lee la estructura de 3 sitios', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Vocabulario HTML semántico', duracionMin: 15 },
    { numero: 4, iconos: ['✏️', '🔎'], titulo: 'Wireframe + index.html de tu home', duracionMin: 37 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una página web bien construida usa HTML semántico: header, nav, main, article, aside, footer. Cada etiqueta no solo dibuja: le dice al navegador qué función cumple ese bloque. Sin semántica, los lectores de pantalla, los buscadores y las personas se pierden.',
    preguntaDetonante:
      'Si quitaras todos los estilos a tu sitio favorito, ¿se entendería igual? ¿O quedaría un montón de texto sin pies ni cabeza?',
    activacion: {
      titulo: 'Modo lectura',
      descripcion:
        'En tu navegador abre un sitio de noticias y activa el "modo lectura" o "vista de lector". Lo que sobrevive ES la estructura semántica. Compara con lo que se pierde — los anuncios, sidebars decorativos. Eso te muestra qué queda cuando solo importa el contenido.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 2 creaste tu sistema visual mínimo: paleta, tipografía y lockup. Tu marca ya tiene cara.',
      siguiente:
        'En la sesión 4 elegirás una plantilla web profesional y la adaptarás con tu identidad para publicarla.',
    },
  },

  conceptosClave: [
    {
      categoria: '🏗 Estructura semántica',
      termino: 'HTML semántico',
      definicion:
        'Etiquetas que tienen significado: header, nav, main, article, footer. No solo dibujan — le dicen al navegador y al lector de pantalla qué función cumple cada bloque.',
      ejemplo:
        'Un <header> contiene logo + nav. Un <article> es contenido autónomo (post, ficha). Un <footer> cierra con créditos y contacto.',
      emoji: '🧱',
    },
    {
      categoria: '🏗 Estructura semántica',
      termino: '<header>',
      definicion:
        'La cabecera del sitio: nombre o logo + navegación principal. Va arriba de todo. Puede repetirse dentro de articles, pero el principal solo aparece una vez.',
      ejemplo:
        '<header><h1>Tu nombre</h1><nav>...</nav></header> — el bloque que un visitante ve primero.',
      emoji: '🎩',
    },
    {
      categoria: '🏗 Estructura semántica',
      termino: '<main>',
      definicion:
        'El contenido único y central de la página. Solo debe haber UN <main> por página. Es lo que cambia de una página a otra.',
      ejemplo:
        'En la home, <main> contiene el hero + las secciones únicas. En una página "sobre mí", el <main> sería tu biografía.',
      emoji: '🎯',
    },
    {
      categoria: '🏗 Estructura semántica',
      termino: '<section> vs <article>',
      definicion:
        'Section agrupa contenido temático relacionado. Article es contenido autónomo que se entiende solo (post, ficha de producto, item de feed).',
      ejemplo:
        'Una página de blog tiene una <section class="posts"> que contiene varios <article>, uno por entrada.',
      emoji: '📑',
    },
    {
      categoria: '♿ Buenas prácticas',
      termino: 'Un solo <h1>',
      definicion:
        'Cada página debe tener exactamente un <h1>. Es el título principal — los lectores de pantalla lo usan como ancla.',
      ejemplo:
        'En la home, el <h1> suele ser tu nombre o tu propuesta de valor. Los subtítulos van con <h2>, <h3>.',
      emoji: '1️⃣',
    },
    {
      categoria: '♿ Buenas prácticas',
      termino: 'Test sin CSS',
      definicion:
        'Si tu HTML, sin estilos, todavía se lee como un documento ordenado, tu estructura semántica está bien. Si parece sopa de letras, faltan etiquetas.',
      ejemplo:
        'Abre el index.html en Chrome con DevTools → Disable CSS. Si los títulos, párrafos y listas siguen jerarquizados, pasaste el test.',
      emoji: '👁',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Lee la estructura semántica de 3 sitios',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Visita un sitio de un periódico. Identifica qué hay en el header (logo, menú).',
        'Visita una página de universidad. Identifica el nav principal y el main.',
        'Visita un sitio de empresa. Identifica el footer (créditos, contacto).',
        'Para cada uno toma una captura y márcala a lápiz si puedes: dónde empieza header, main, footer.',
      ],
      cuaderno: {
        titulo: 'Estructura semántica de 3 sitios',
        formato: 'Tabla de 4 columnas (Sitio | Header | Main | Footer), 3 filas',
        extension: '3 filas + 1 frase final con el patrón común a los 3',
      },
      criterios: [
        'Cada celda nombra elementos concretos (no "varias cosas")',
        'Los 3 sitios son de sectores distintos (no 3 periódicos)',
        'La frase final identifica el patrón común a los 3',
        'Hay al menos una observación de qué falta o sobra en alguno',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Define con tus palabras 7 etiquetas semánticas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada etiqueta —header, nav, main, section, article, aside, footer— escribe en tus palabras para qué sirve.',
        'Para cada una, da un ejemplo concreto de cómo la usarás en tu propio sitio.',
        'Marca con una ★ las 3 etiquetas que más vas a usar.',
        'Cierra con 1 párrafo: ¿cuál es la diferencia clave entre <section> y <article>?',
      ],
      cuaderno: {
        titulo: 'Vocabulario semántico HTML',
        formato: '7 fichas, cada una con nombre + para qué sirve (1 frase) + ejemplo de tu sitio',
        extension: '7 fichas + 1 párrafo de cierre sobre section vs article',
      },
      criterios: [
        'Cada definición está en tus palabras, no copiada literal',
        'Cada ejemplo es específico de tu sitio (no genérico)',
        'La diferencia section/article está clara',
        'Puedes explicar cada etiqueta sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Wireframe + index.html de tu home',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Dibuja a mano en una hoja la estructura de tu home: header arriba, main al centro con 2-3 secciones, footer abajo.',
        'Abre un archivo index.html en VS Code con el esqueleto: <!doctype html>, <html>, <head>, <body>.',
        'Dentro del body escribe la estructura semántica vacía: header → main (con sections) → footer.',
        'Llena cada bloque con texto real (tu nombre, propuesta de valor, secciones). SIN CSS todavía.',
        'Abre el HTML en Chrome y verifica que se lea como documento ordenado.',
      ],
      cuaderno: {
        titulo: 'Mi home semántico v1',
        formato:
          '(1) Wireframe a mano en la página izquierda. (2) Transcripción del HTML real en la página derecha.',
        extension: '2 páginas enfrentadas',
      },
      criterios: [
        'El wireframe muestra header, main y footer claramente delimitados',
        'El HTML usa al menos 5 etiquetas semánticas distintas',
        'Existe un único <h1>',
        'Sin CSS, el navegador todavía muestra una jerarquía clara',
        'El HTML pasa el validador W3C sin errores estructurales',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el HTML de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu index.html con un compañero (puede ser por correo o pantalla compartida).',
        'Abre el suyo en Chrome con DevTools → desactiva todo el CSS.',
        'Califica del 1 al 5: (a) ¿se entiende sin estilos?, (b) ¿usa etiquetas semánticas en vez de <div>?, (c) ¿tiene un solo <h1>?',
        'Escribe 1 observación que afirma y 1 que reta. Devuélvele el archivo y conversen 5 min.',
      ],
      cuaderno: {
        titulo: 'Evaluación del home semántico de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Las 3 calificaciones están con justificación de 1 línea',
        'La observación que afirma señala algo específico',
        'La observación que reta es concreta y respetuosa',
        'Reconociste al menos una etiqueta semántica bien usada',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el vocabulario HTML',
      instrucciones:
        '5 preguntas para confirmar que dominas la semántica antes de pasar a la sesión 4. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuántos <h1> debe tener una página HTML bien construida?',
          opciones: ['Tantos como quieras', 'Exactamente 1', 'Mínimo 3', 'Ninguno'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Un solo <h1> por página. Los lectores de pantalla lo usan como ancla principal — varios confunden.',
          feedbackIncorrecto:
            'Un solo <h1>. Es el título principal de la página. Los subtítulos van con <h2>, <h3>.',
        },
        {
          enunciado: '¿Cuál es la diferencia clave entre <section> y <article>?',
          opciones: [
            'No hay diferencia',
            '<article> es contenido autónomo, <section> agrupa contenido temático',
            '<section> es más grande que <article>',
            '<article> solo sirve para blogs',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Article se entiende solo (post, ficha, item). Section agrupa varios articles o contenido temático relacionado.',
          feedbackIncorrecto:
            'Article = contenido autónomo. Section = agrupación temática. Una section puede contener varios articles.',
        },
        {
          enunciado: 'Si abres tu HTML sin CSS y queda una sopa de letras sin jerarquía, ¿qué te dice eso?',
          opciones: [
            'Que necesitas más CSS',
            'Que tu estructura semántica está incompleta',
            'Que el navegador está roto',
            'Que necesitas más colores',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. El CSS solo decora. Si sin CSS no se entiende, faltan etiquetas semánticas (h1-h6, section, article, etc).',
          feedbackIncorrecto:
            'La estructura semántica está incompleta. El CSS solo decora — si sin él se pierde la jerarquía, faltan h1-h6, sections, etc.',
        },
        {
          enunciado: '¿Cuántos <main> debe tener una página HTML?',
          opciones: ['Cualquier cantidad', 'Exactamente 1', 'Mínimo 2', 'Ninguno — está obsoleto'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Un único <main> por página. Es el contenido único y central — lo que cambia de una página a otra.',
          feedbackIncorrecto:
            'Exactamente 1 <main> por página. Es el contenido único y central, no se repite.',
        },
        {
          enunciado:
            'En el saber ancestral de los caminos prehispánicos, ¿qué aplica directamente a un sitio web?',
          opciones: [
            'Nada — los caminos no tienen que ver con HTML',
            'La intención: cada ruta tiene un propósito y conduce a un lugar específico',
            'Que los caminos eran de tierra',
            'Que solo los chasquis los usaban',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Una página web bien hecha tiene intención: cada section lleva al visitante a un lugar concreto, como los chasquis sabían a dónde llevaban.',
          feedbackIncorrecto:
            'La intención: una ruta sin propósito pierde gente. Un sitio sin estructura semántica también.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu index.html con un compañero por correo. Pídele que lo abra en Chrome y te diga en 1 frase qué entendió de la página. Si esa frase coincide con lo que querías comunicar, tu estructura semántica funciona. El próximo lunes traes ese feedback al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La analéctica supera a la dialéctica al partir del Otro como Otro.',
      preguntaEspejo:
        '¿Quién no puede leer mi sitio? ¿Una persona con lector de pantalla, con conexión lenta, que no maneja bien el español, lo logra navegar?',
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Nada se construye bien sin orden; sin él, la abundancia es ruina.',
      preguntaEspejo:
        '¿Mi sitio refleja una estructura ordenada y deliberada, o se siente improvisado? ¿Qué dice eso de mi disciplina?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La web es un patrimonio informacional común; cada sitio bien construido lo enriquece, cada sitio mal hecho lo erosiona.',
      preguntaEspejo:
        '¿Mi sitio enriquece o ensucia el patrimonio digital común? ¿Estoy publicando algo de lo que el internet del futuro se beneficiará?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a ver una página web por dentro: la estructura que sostiene lo que el usuario ve.',
    emocional:
      'Sentiste la diferencia entre construir con orden y construir improvisando — y elegiste el orden.',
    ciudadana:
      'Entendiste que la accesibilidad no es un extra: es la diferencia entre invitar al Otro o ignorarlo.',
    local:
      'Conectaste la lógica de los caminos prehispánicos del Valle con la lógica de un sitio web bien estructurado.',
    intergeneracional:
      'Tu HTML será leído por buscadores, lectores de pantalla y archivos del futuro. Construirlo bien es siembra a largo plazo.',
  },
};

export default contenido;
