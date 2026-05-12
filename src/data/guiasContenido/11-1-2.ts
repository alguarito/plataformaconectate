/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 2
 * Tema: Identidad visual — del grafismo ancestral a la paleta propia.
 * Conversión fiel desde content/guias/11/11-1-2.yaml (contrato MILC v3).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 2,
  titulo: 'Identidad visual — del grafismo ancestral a la paleta propia',
  ocultarPDF: false,
  resumen:
    'Le pones cara a tu marca: un sistema visual mínimo con paleta, par tipográfico y lockup coherentes con tu manifiesto.',
  duracionMin: 90,
  subtema: 'Presencia y marca digital · Sistema visual',

  saberAncestral: {
    saber:
      'Mucho antes de los "manuales de marca", los pueblos ya tenían identidad visual. La orfebrería Quimbaya, los tejidos Wayuu, las molas guna y los grafismos del Pacífico colombiano transmitían, en una sola pieza, quién era el pueblo que la había hecho. Sin firma, sin texto. Solo geometría, color y proporción.',
    fuente: 'Grafismos ancestrales — Quimbaya, Wayuu, Guna, Pacífico colombiano',
    preguntaPuente:
      '¿Qué señales visuales hacen que reconozcas inmediatamente a una familia, a un equipo del barrio o a tu colegio sin leer su nombre? ¿Por qué esas señales funcionan?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Identidad sin palabras', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Gramáticas visuales en tu entorno', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del sistema visual', duracionMin: 15 },
    { numero: 4, iconos: ['✏️'], titulo: 'Crea tu sistema visual mínimo', duracionMin: 35 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Las marcas modernas usan el mismo principio que las identidades ancestrales: una paleta de 3 a 5 colores, un par tipográfico y un lockup. Esa pieza mínima identifica tu marca antes de que el espectador lea una palabra.',
    preguntaDetonante:
      '¿Qué señales visuales hacen que reconozcas a un equipo o a un colegio sin leer su nombre?',
    activacion: {
      titulo: 'Reconoce sin leer',
      descripcion:
        'En 3 minutos, escribe en una hoja 3 marcas que reconoces solo con su color o forma — sin texto. Al lado de cada una anota qué señal específica te basta para reconocerla.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 1 escribiste tu Manifiesto de Marca Personal: la promesa que sostiene tu nombre.',
      siguiente:
        'En la sesión 3 construirás la estructura semántica de tu sitio web personal (HTML).',
    },
  },

  conceptosClave: [
    {
      categoria: '🎨 Las 3 piezas del sistema visual',
      termino: 'Paleta',
      definicion:
        '3 a 5 colores con jerarquía clara: un dominante (~60%), uno secundario (~30%), uno o dos acentos (~10%).',
      ejemplo:
        'Para una marca de comida saludable del Valle: verde hoja dominante, crema secundario, mango como acento.',
      emoji: '🎨',
    },
    {
      categoria: '🎨 Las 3 piezas del sistema visual',
      termino: 'Par tipográfico',
      definicion:
        'Una fuente display para titulares + una fuente cuerpo para texto. Nunca dos display compitiendo al mismo tiempo.',
      ejemplo: 'Bricolage Grotesque para titulares + Inter para el cuerpo. Contrastan sin pelearse.',
      emoji: '🔤',
    },
    {
      categoria: '🎨 Las 3 piezas del sistema visual',
      termino: 'Lockup',
      definicion:
        'La firma de tu nombre con tratamiento fijo (color, fuente, espacios). Debe funcionar a 16 píxeles y a 2 metros de pared.',
      ejemplo: 'Tu nombre en mayúsculas + un símbolo a la izquierda en color de acento, siempre igual.',
      emoji: '✍️',
    },
    {
      categoria: '🧭 Principios de coherencia',
      termino: 'Patrón 60-30-10',
      definicion:
        'Regla de proporción de color: 60% dominante, 30% secundario, 10% acento. Cámbiala y se rompe la armonía.',
      ejemplo:
        'Si tu acento aparece en el 50% de la pantalla, deja de ser acento y empieza a competir con el dominante.',
      emoji: '⚖️',
    },
    {
      categoria: '🧭 Principios de coherencia',
      termino: 'Coherencia con el manifiesto',
      definicion:
        'Cada decisión visual debe sostener la promesa de tu marca. Una marca seria con paleta neón es incoherente.',
      ejemplo:
        'Si tu manifiesto dice "rigor y cuidado", una paleta de neones saturados contradice esa promesa.',
      emoji: '🧭',
    },
    {
      categoria: '🧭 Principios de coherencia',
      termino: 'Test del tamaño chico',
      definicion:
        'Si tu lockup, en blanco y negro y del tamaño de una uña, todavía dice quién eres, has abstraído bien.',
      ejemplo:
        'El símbolo de Nike funciona a 1 cm. El de muchas marcas que solo usan texto, no.',
      emoji: '🔍',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Gramáticas visuales en tu entorno',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Sin moverte de donde estás, observa un objeto de tradición ancestral o popular: tejido, cerámica, ropa de fiesta.',
        'Observa un negocio del barrio: panadería, peluquería, taller.',
        'Observa una marca global presente en tu cotidianidad: zapatillas, app, café.',
        'Para cada uno anota qué colores usa, qué formas, qué transmite sin palabras.',
      ],
      cuaderno: {
        titulo: 'Gramáticas visuales en mi entorno',
        formato:
          'Tabla de 4 columnas (Ejemplo | Colores principales | Formas y patrones | Qué transmite). 3 filas.',
        extension: '3 filas, una por ejemplo',
      },
      criterios: [
        'Cada fila menciona colores específicos (no "varios")',
        'Cada fila menciona formas concretas (no "diseños bonitos")',
        'Cada fila incluye un mensaje que el sistema visual transmite sin texto',
        'Hay al menos un ejemplo ancestral o popular reconocido',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Tres sistemas visuales que admiras',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige 3 marcas distintas entre sí — no las 3 deportivas, no las 3 tech.',
        'Para cada una: nombre, paleta (3-5 códigos HEX), par tipográfico, qué transmite en 1 frase.',
        'Anota un patrón común a las 3: ¿qué hace que se sientan profesionales?',
        'Anota una diferencia clave: ¿qué hace que NO se confundan entre sí?',
      ],
      cuaderno: {
        titulo: 'Tres sistemas visuales que admiro',
        formato:
          '3 fichas con 4 datos cada una (Nombre · Paleta HEX · Par tipográfico · Qué transmite).',
        extension: '3 fichas + 1 patrón común + 1 diferencia clave',
      },
      criterios: [
        'Las 3 marcas son distintas entre sí (no del mismo sector)',
        'Cada paleta tiene códigos HEX concretos, no nombres genéricos',
        'La frase "qué transmite" es específica (no "se ve cool")',
        'El patrón común y la diferencia están en frases cortas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu sistema visual mínimo',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige la emoción principal de tu marca: calidez, rigor, frescura, etc.',
        'Prueba 3 paletas en coolors.co que transmitan esa emoción y elige una.',
        'Prueba 3 pares tipográficos en fonts.google.com y elige el que mejor sostenga la emoción.',
        'Dibuja a mano 3 versiones de tu lockup. Elige la combinación más coherente con tu manifiesto.',
      ],
      cuaderno: {
        titulo: 'Mi sistema visual — versión 1',
        formato:
          'Una página con 4 secciones (Paleta · Tipografía · Lockup · Justificación), cada una con datos concretos y una frase de decisión.',
        extension: '1 página de cuaderno · paleta + par + lockup + 4 frases de justificación',
      },
      criterios: [
        'La paleta tiene 3-5 colores con jerarquía clara y códigos HEX',
        'El par tipográfico es uno display + uno cuerpo, no dos display',
        'El lockup tiene tratamiento fijo y funciona a tamaño chico',
        'Cada decisión tiene una frase que la conecta con tu manifiesto',
        'Un extraño puede mirar el sistema y sentir tu marca sin que tú la expliques',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa el sistema visual de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia tu cuaderno con un compañero. Lee su sistema visual sin que te lo explique.',
        'Califica del 1 al 5 estas 3 dimensiones: (a) coherencia con su manifiesto, (b) jerarquía clara en paleta y tipografía, (c) escalabilidad del lockup (¿funciona chico?).',
        'Escribe DOS observaciones: una que afirma (qué está fuerte) y una que reta (qué debe afinar).',
        'Devuelve el cuaderno y conversen 5 minutos sobre los hallazgos sin defenderse — solo escuchar.',
      ],
      cuaderno: {
        titulo: 'Evaluación del sistema visual de [nombre del compañero]',
        formato:
          'Calificaciones (a/b/c con número del 1 al 5) + 1 observación que afirma + 1 observación que reta',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones cada una',
      },
      criterios: [
        'Las 3 calificaciones están con justificación de 1 línea',
        'La observación que afirma señala algo específico, no generalidades',
        'La observación que reta es respetuosa pero concreta',
        'No reescribiste su sistema en tu cuaderno — solo evaluaste',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el vocabulario visual',
      instrucciones:
        '5 preguntas para confirmar que dominas las piezas del sistema visual antes de avanzar. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado:
            'Una marca que dice "soy seria y rigurosa" pero usa paleta de neones saturados, ¿qué problema tiene?',
          opciones: [
            'Le faltan colores',
            'Incoherencia entre promesa y sistema visual',
            'Le sobran tipografías',
            'Ninguno — los neones siempre funcionan',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. El sistema visual debe sostener la promesa del manifiesto. Si la promesa es "rigor" y la paleta grita "fiesta", la marca pierde credibilidad.',
          feedbackIncorrecto:
            'El problema es coherencia. Tu sistema visual debe sostener la promesa de tu marca, no contradecirla.',
        },
        {
          enunciado: '¿Cuántos colores debe tener una paleta sólida de marca?',
          opciones: ['1 o 2', '3 a 5', '6 a 10', 'Más de 10'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 3-5 colores con jerarquía (un dominante, un secundario, 1-2 acentos) mantienen la identidad clara sin diluirse.',
          feedbackIncorrecto:
            'Una paleta de marca sólida usa 3-5 colores con jerarquía. Más se diluye, menos se queda sin contraste.',
        },
        {
          enunciado: 'En el patrón 60-30-10, ¿qué representa el 10%?',
          opciones: ['El color dominante', 'El color secundario', 'El color de acento', 'El color del texto'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Sí. El 10% es el acento — el color que aparece poco pero llama la atención cuando aparece.',
          feedbackIncorrecto:
            'El 10% es el acento. El 60% es dominante, el 30% secundario, el 10% acento. Si tu acento aparece más, deja de serlo.',
        },
        {
          enunciado: '¿Qué es un par tipográfico bien construido?',
          opciones: [
            'Dos fuentes display llamativas',
            'Una fuente display + una fuente cuerpo',
            'Una sola fuente para todo',
            'Tres fuentes para tener variedad',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Una display fuerte para titulares + una cuerpo neutra para texto largo. Dos display compiten y cansan.',
          feedbackIncorrecto:
            'Un par tipográfico es display + cuerpo. Dos display pelean, una sola fuente para todo se siente plana.',
        },
        {
          enunciado: '¿Cuál es la prueba definitiva de un buen lockup?',
          opciones: [
            'Tener muchos colores',
            'Funcionar a 16 píxeles y a 2 metros de pared',
            'Tener un logo grande',
            'Cambiar según el contexto',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Un lockup que sobrevive al tamaño chico y al tamaño grande está bien abstraído.',
          feedbackIncorrecto:
            'La prueba es escalabilidad: 16 píxeles (favicon, app icon) y 2 metros (cartel impreso). Si funciona en ambos, sirve.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, aplica tu paleta a 3 productos cotidianos: la portada de tu próximo trabajo, tu foto de perfil con un filtro de color coherente, y la firma de tu correo institucional. El próximo lunes traes esos 3 productos al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La belleza estética nace donde una voz silenciada encuentra forma.',
      preguntaEspejo:
        '¿Mi sistema visual incluye señales de mi lugar y mi gente, o copia el estándar global? ¿A qué voz le doy forma cuando elijo estos colores?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Toda cosa tiene su belleza propia, pero no todos la ven.',
      preguntaEspejo:
        '¿Estoy eligiendo lo que de verdad expresa mi marca o estoy persiguiendo una estética que vi en otra parte? ¿Cuál es mi belleza propia?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada acto de diseño es un acto informacional: añade o resta a la infoesfera visual común.',
      preguntaEspejo:
        '¿Mi sistema visual aporta claridad a quien lo mira o le suma ruido a un mundo ya saturado?',
    },
  },

  cincoDimensiones: {
    personal: 'Tomaste decisiones estéticas con criterio, no por impulso ni por imitación.',
    emocional: 'Identificaste la emoción que tu marca quiere transmitir y la sostuviste en cada decisión.',
    ciudadana: 'Cada elección visual habla de tu lugar y tu gente en una infoesfera ya saturada.',
    local: 'Anclaste tu paleta y tus formas en los grafismos del Valle, el Pacífico y la tradición popular colombiana.',
    intergeneracional:
      'Recuperaste una gramática visual que viene de la orfebrería Quimbaya y los tejidos del Pacífico.',
  },
};

export default contenido;
