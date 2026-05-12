/**
 * Contenido enriquecido — Grado 9 · Periodo 2 · Sesión 7
 * Tema: Accesibilidad lectora — quién NO puede leer mi revista y por qué.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-2-7.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 7,
  titulo: 'Accesibilidad lectora — quién NO puede leer mi revista y por qué',
  ocultarPDF: false,
  resumen:
    'Rediseñas 1 spread con criterios WCAG AA: contraste, tamaño, alt text, estructura. La accesibilidad no es extra técnico — es ética editorial heredada de la tradición oral.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Accesibilidad',

  saberAncestral: {
    saber:
      'En los pueblos donde la lectura escrita era privilegio de pocos, la información se transmitía oral: el pregonero en la plaza, el cuentero junto al fogón, la canción en el velorio, las décimas del Pacífico. La tradición oral no era "atrasada" — era universalmente accesible. El ciego conocía el cuento por la voz de la abuela. Diseñar accesible hoy es heredar esa lógica: no dejar a nadie afuera.',
    fuente: 'Tradición oral del Pacífico, el Valle y los Andes — pregonero, cuentero, décimas',
    preguntaPuente:
      '¿Quién de tu familia, vecindario o colegio tiene alguna dificultad para leer (visión, edad, daltonismo, atención)? ¿Tu revista actual los incluye o los deja afuera?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La tradición oral incluyente', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: '4 barreras lectoras experimentadas', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '4 ejes WCAG aplicados', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Rediseño accesible + bitácora', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Una revista accesible llega a 1.3 mil millones de personas con alguna discapacidad. Una inaccesible las excluye aunque no lo notes. Esta sesión convierte tu mirada editorial de estética a ética.',
    preguntaDetonante:
      'Si tu abuela tuviera que leer tu próximo post en redes con sus gafas habituales y poca luz, ¿podría?',
    activacion: {
      titulo: 'El squint test',
      descripcion:
        'En 3 minutos, mira tu spread más reciente y entrecierra mucho los ojos (como con baja visión). ¿Qué texto sigues leyendo y cuál se desvanece? Ese ejercicio simula a alguien que ve menos que tú.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En las sesiones 1-6 construiste sistema visual y produjiste portada digital. Hoy preguntas a quién deja afuera tu diseño.',
      siguiente:
        'En la sesión 8 aplicarás el ojo del corrector: 10 errores corregidos en tu propia revista.',
    },
  },

  conceptosClave: [
    {
      termino: 'WCAG AA',
      definicion:
        'Estándar de accesibilidad web. AA es el nivel realista exigible: contraste 4.5:1 en texto normal, 3:1 en texto grande, alt text en imágenes informativas, estructura semántica clara.',
      ejemplo:
        'webaim.org/resources/contrastchecker permite verificar contraste. Texto negro sobre blanco: 21:1 (pasa). Gris claro sobre blanco: 2.85:1 (falla).',
      emoji: '♿',
    },
    {
      termino: 'Alt text',
      definicion:
        'Texto alternativo que describe una imagen para personas que usan lector de pantalla. 1-2 frases claras sobre lo que la imagen muestra y aporta a la historia.',
      ejemplo:
        'Imagen: foto de un trapiche del Valle. Alt text malo: "imagen.jpg". Alt text bueno: "Trapiche tradicional del Valle con buey caminando alrededor, exprime caña de azúcar".',
      emoji: '🗣',
    },
    {
      termino: 'Contraste tonal',
      definicion:
        'Diferencia de luminosidad entre colores (claro vs oscuro), no solo cromática. Garantiza legibilidad incluso en pantallas blanco-y-negro o para personas con daltonismo.',
      ejemplo:
        'Texto azul oscuro #003366 sobre fondo amarillo #FFEE00 tiene alto contraste tonal. Texto rojo claro sobre verde claro: bajo contraste tonal aunque sean colores opuestos.',
      emoji: '⚫⚪',
    },
    {
      termino: 'Tamaño mínimo de letra',
      definicion:
        'Cuerpo de texto debe ser ≥ 16px en digital o ≥ 11pt impreso. Más pequeño excluye a personas mayores, con baja visión o que leen en pantallas pequeñas con sol.',
      ejemplo:
        'Apple, Google, BBC usan 16-18px para cuerpo. Páginas que usan 12px se ven elegantes pero excluyen al lector mayor de 45 años con gafas.',
      emoji: '🔤',
    },
    {
      termino: 'Estructura semántica',
      definicion:
        'Jerarquía clara con h1 único, h2 secundarios, párrafos identificados. Permite que un lector de pantalla salte entre secciones y que personas con dislexia o atención reducida se orienten.',
      ejemplo:
        'Bien: <h1>Título principal</h1> <h2>Subtítulo</h2> <p>Párrafo</p>. Mal: todo como <div> con tamaños distintos pero sin jerarquía semántica.',
      emoji: '🏗',
    },
    {
      termino: 'Información sin solo color',
      definicion:
        'Si distingues categorías o estados, no uses solo color. Agrega forma, ícono o etiqueta. 8% de hombres tiene daltonismo — combinaciones rojo/verde fallan para ellos.',
      ejemplo:
        'Semáforo: rojo arriba, amarillo medio, verde abajo. La posición y la forma circular dicen tanto como el color. Para daltónicos, eso salva vidas.',
      emoji: '🚦',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: '4 barreras lectoras experimentadas',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Baja visión: entrecierra los ojos mirando tu spread. ¿Qué texto se vuelve ilegible?',
        'Daltonismo: usa color-blindness.com/coblis-color-blindness-simulator sobre una captura. ¿Qué cambia?',
        'Lector de pantalla: pide a un compañero que describa oralmente tu spread sin ver. ¿Se entiende?',
        'Conexión lenta: imagina tu spread sin imagen cargada. ¿Qué se rompe?',
      ],
      cuaderno: {
        titulo: '4 barreras lectoras experimentadas',
        formato: 'Tabla 3 columnas (Barrera | Qué falla | Quién queda afuera), 4 filas',
        extension: '4 filas + 1 línea de honestidad sobre barreras pendientes',
      },
      criterios: [
        'Simulé las 4 condiciones de lectura limitada',
        'Reconozco al menos 2 barreras que mi spread actual no resuelve',
        'Identifiqué quién quedaría afuera en cada caso',
        'Probé con simulador de daltonismo, no solo imaginé',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: '4 ejes WCAG aplicados a mi revista',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada eje (perceptible, operable, comprensible, robusto) escribe una ficha.',
        'En cada ficha: definición + 1 chequeo específico que harías a tu revista.',
        'Cierra con un ejemplo de fallo común que conoces.',
        'Marca con ★ el eje que te parece más importante para tu lector ideal.',
      ],
      cuaderno: {
        titulo: '4 ejes WCAG aplicados a mi revista',
        formato: '4 fichas con definición + chequeo + ejemplo de fallo',
        extension: '4 fichas + 1 marca de prioridad',
      },
      criterios: [
        'Cada definición está en tus palabras',
        'Cada ficha tiene chequeo específico para tu revista',
        'Identifiqué fallos comunes (no solo teoría)',
        'Tienes lista de 4 chequeos concretos para aplicar',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Rediseña 1 spread accesible',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Elige UNO de tus spreads de la Sesión 5 para rediseñar.',
        'Verifica contraste en webaim.org y ajusta si está bajo 4.5:1.',
        'Verifica tamaño de cuerpo (≥ 16px digital o ≥ 11pt impreso).',
        'Escribe alt text descriptivo (1-2 frases) para cada imagen informativa.',
        'Verifica estructura semántica clara (un solo h1, jerarquía consistente).',
      ],
      cuaderno: {
        titulo: 'Spread accesible con bitácora',
        formato: 'Captura ANTES + captura DESPUÉS + bitácora de 4 cambios con justificación',
        extension: '1 página de cuaderno',
      },
      criterios: [
        'Contraste texto-fondo ≥ 4.5:1 verificado en webaim.org',
        'Cuerpo ≥ 16px digital o ≥ 11pt impreso',
        'Alt text de 1-2 frases por cada imagen informativa',
        'Estructura semántica clara con un único h1',
        'Bitácora antes/después con justificación por cambio',
        'Verificado con simulador de daltonismo',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la accesibilidad de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia bitácoras. Revisa el spread accesible del compañero.',
        'Califica del 1 al 5: (a) ¿pasa contraste WCAG?, (b) ¿alt text descriptivo?, (c) ¿estructura semántica clara?',
        'Aplica el squint test sobre su spread y reporta qué encontraste.',
        'Conversen 5 min: ¿qué accesibilidad les costó más implementar y por qué?',
      ],
      cuaderno: {
        titulo: 'Evaluación de accesibilidad de [nombre]',
        formato: '3 calificaciones con justificación + reporte del squint test + 1 observación',
        extension: '3 calificaciones + 1 observación',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación',
        'Apliqué el squint test sobre su spread y reporté hallazgos',
        'La observación es constructiva',
        'La conversación cerró con aprendizaje compartido sobre accesibilidad',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los principios WCAG',
      instrucciones:
        '5 preguntas para confirmar que aplicas accesibilidad como ética editorial. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué ratio de contraste exige WCAG AA para texto normal?',
          opciones: ['1:1', '3:1', '4.5:1 mínimo', '21:1 obligatorio'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. WCAG AA: 4.5:1 mínimo para texto normal. Verifica en webaim.org. Texto gris claro sobre blanco suele fallar.',
          feedbackIncorrecto:
            '4.5:1 mínimo para texto normal según WCAG AA. Texto negro sobre blanco: 21:1 (sobra). Texto #999 sobre blanco: 2.85 (falla).',
        },
        {
          enunciado: '¿Para qué sirve el alt text en una imagen?',
          opciones: [
            'Para SEO solamente',
            'Para que lectores de pantalla (usados por personas ciegas) describan la imagen',
            'Para decorar',
            'No tiene función real',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. El alt text es leído por lectores de pantalla. Sin él, una persona ciega no sabe qué muestra la imagen. Es accesibilidad básica.',
          feedbackIncorrecto:
            'Alt text = accesibilidad para personas ciegas que usan lector de pantalla. Sin él, la imagen es invisible para ellos. También ayuda al SEO, pero ese es bonus.',
        },
        {
          enunciado: '¿Qué porcentaje de hombres tiene daltonismo y qué implicación tiene?',
          opciones: [
            '0%',
            '8% — hay que evitar distinguir solo por rojo/verde en información crítica',
            '50%',
            'No es relevante',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 8% de hombres tiene daltonismo. Diseñar con accesibilidad significa usar forma o etiqueta además del color, no solo rojo/verde.',
          feedbackIncorrecto:
            '8% de hombres con daltonismo. Por eso semáforos usan posición + forma + color. Diseñar solo con color rojo/verde excluye a millones.',
        },
        {
          enunciado: '¿Qué tamaño mínimo de cuerpo de texto se recomienda en digital?',
          opciones: ['10px', '12px', '16px', '24px'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. 16px mínimo para cuerpo digital. Apple, Google, BBC lo usan. Menos excluye a personas mayores, con baja visión o leyendo bajo el sol.',
          feedbackIncorrecto:
            '16px mínimo en digital. 12px se ve elegante pero ilegible para muchos. Apple y Google lo saben — por eso lo usan en cuerpo.',
        },
        {
          enunciado:
            'En el saber ancestral de la tradición oral, ¿qué aplica directamente a tu accesibilidad digital?',
          opciones: [
            'Nada — la tradición oral es del pasado',
            'Que no dejar a nadie afuera es ética milenaria — el ciego conocía el cuento por la voz de la abuela',
            'Que la palabra escrita es mejor',
            'Que solo los mayores cuentan historias',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La tradición oral del Pacífico era universalmente accesible. Diseñar accesible hoy es heredar esa ética: la pieza llega a todos, no solo a quien ve perfecto.',
          feedbackIncorrecto:
            'No dejar a nadie afuera. La abuela contaba a todos: viejos, ciegos, niños, sordos (con gestos). Diseñar accesible hoy honra esa ética milenaria.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu spread accesible con alguien que tenga dificultad lectora (un mayor, un niño que apenas lee, alguien con gafas fuertes). Pídele que lo lea y te diga si pudo. Esa es la mejor prueba de accesibilidad real.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda comunicación que no incluye al excluido reproduce la exclusión.',
      preguntaEspejo:
        '¿A quién de mi propia familia o vecindario excluyo cuando diseño sin pensar en accesibilidad? ¿Qué decisión específica los volvería a incluir?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La virtud no consiste en lo que te beneficia, sino en el cuidado de los otros como si fueran tú mismo.',
      preguntaEspejo:
        '¿Estoy dispuesto a hacer accesibilidad aunque no se note ni se agradezca? ¿O solo cuando hay reconocimiento?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Una infoesfera saludable es una infoesfera que incluye a todos los inforgs.',
      preguntaEspejo:
        '¿Mi diseño contribuye a una infoesfera más incluyente o reproduce las exclusiones estructurales de las plataformas dominantes?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de diseñar lo que te gusta a diseñar para quien no piensas — salto ético del oficio editorial.',
    emocional:
      'Sentiste empatía concreta: simulaste la mirada del que ve menos y eso cambia toda tu próxima decisión.',
    ciudadana:
      'Reconociste que accesibilidad no es decorado — es justicia editorial que incluye o excluye 1.3 mil millones de personas.',
    local:
      'Heredaste la tradición oral del Pacífico como ética de inclusión universal — antes de WCAG ya estaba la abuela cuentera.',
    intergeneracional:
      'Tu spread accesible respeta a tu abuelo con gafas, a tu primo daltónico, a tu vecino con conexión lenta. Diseñas para tres generaciones a la vez.',
  },
};

export default contenido;
