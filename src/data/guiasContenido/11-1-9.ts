/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 9
 * Tema: Métricas básicas — quién entra a mi sitio y qué busca.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-9.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 9,
  titulo: 'Métricas básicas — quién entra a mi sitio y qué busca',
  ocultarPDF: false,
  resumen:
    'Instalas un dashboard de 5 indicadores y aprendes a leer datos para decidir, no para sentir. Vanidad vs decisión: la línea del oficio digital.',
  duracionMin: 90,
  subtema: 'Presencia y marca digital · Analytics con criterio',

  saberAncestral: {
    saber:
      'El conteo de la cosecha era una práctica seria en el campo: la abuela anotaba en una libreta cuántos racimos de café por mata, cuántas mazorcas por surco, cuántas mantas terminadas por luna, cuántos días llovió. No era vanidad ni estadística académica. Era información para decidir: cuánto sembrar el próximo ciclo, a quién pedir ayuda, qué reservar. Sin conteo, no había aprendizaje del oficio.',
    fuente: 'Práctica del conteo de la cosecha en el campo colombiano',
    preguntaPuente:
      '¿Qué hacían los abuelos con los conteos del año anterior que muchos hoy NO hacen con sus métricas digitales? ¿Por qué tener datos no es lo mismo que aprender de ellos?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'El conteo de la cosecha', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Vanidad vs decisión', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Las 5 métricas que sí importan', duracionMin: 15 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Instala dashboard + lee 1 semana', duracionMin: 37 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Las métricas de tu sitio son el conteo digital de tu cosecha: información para decidir, no para sentir. El error común es perseguir likes (vanidad); el oficio digital es leer las cinco métricas que sí importan.',
    preguntaDetonante:
      'De todos los números que miras al día (likes, vistas, seguidores), ¿cuántos te llevaron alguna vez a tomar una decisión concreta?',
    activacion: {
      titulo: 'Cuenta tus números',
      descripcion:
        'En 3 minutos, anota 6 cifras visibles de tus redes (likes, seguidores, vistas, comentarios). Para cada una pregúntate: "¿qué decisión tomé alguna vez basándome en este número?". Las que no tienen respuesta concreta son vanidad disfrazada de información.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 8 publicaste tu LinkedIn y portafolio. Tu marca ya tiene tráfico real entrando.',
      siguiente:
        'En la sesión 10 lanzas oficialmente tu presencia digital en 3 redes y cierras el Periodo 1.',
    },
  },

  conceptosClave: [
    {
      termino: 'Visitas únicas',
      definicion:
        'Personas distintas que entraron a tu sitio en un periodo. NO sesiones, NO visitas totales — personas únicas. Es tu termómetro de alcance real.',
      ejemplo:
        '50 visitas únicas en una semana sin promocionar = tendencia base. Después del lanzamiento sube — la diferencia te dice si tu post funcionó.',
      emoji: '👥',
    },
    {
      termino: 'Fuentes (referrers)',
      definicion:
        'De dónde viene cada visita: Google (búsqueda orgánica), redes (Instagram/LinkedIn), directo (alguien tecleó la URL), referencia (otro sitio te enlazó).',
      ejemplo:
        'Si el 80% de tus visitas vienen de Instagram y 0% de Google, sabes que tu SEO no está funcionando aún — decisión: mejorar keywords.',
      emoji: '🧭',
    },
    {
      termino: 'Páginas más vistas',
      definicion:
        'Qué páginas de tu sitio reciben más atención. Te dice qué le interesa a tu audiencia — a veces no coincide con lo que TÚ consideras más importante.',
      ejemplo:
        'Si "Sobre mí" tiene más visitas que "Servicios", la gente quiere saber QUIÉN eres antes de QUÉ ofreces. Acomoda el menú.',
      emoji: '📄',
    },
    {
      termino: 'Tiempo en sitio',
      definicion:
        'Cuánto se queda la gente. Menos de 30 segundos = rebote (entró y se fue). Más de 2 minutos = lectura real, interés genuino.',
      ejemplo:
        'Tiempo promedio de 8 segundos = la home no engancha. Decisión: revisar el hero — quizá el copy no es claro o la imagen no transmite.',
      emoji: '⏱',
    },
    {
      termino: 'Conversiones',
      definicion:
        'Cuántas visitas tomaron la acción que tú quieres: clic en email, envío de formulario, descarga, suscripción. Es la métrica que MÁS importa.',
      ejemplo:
        '100 visitas, 3 conversiones (3% de tasa) = arriba del promedio web. 100 visitas, 0 conversiones = falta CTA claro o la propuesta no convence.',
      emoji: '🎯',
    },
    {
      termino: 'Privacy first (Plausible/Umami)',
      definicion:
        'Herramientas de analytics sin cookies, sin perfilado individual, sin tracking transversal. Más simples, más éticas. Mejor opción que GA4 para una marca personal.',
      ejemplo:
        'Plausible o Umami: 5 min de instalación, dashboard claro, respeto al visitante. GA4: potente pero invasivo y complejo.',
      emoji: '🛡',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Métricas de vanidad vs métricas de decisión',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tus 3 redes principales y anota 6 cifras visibles (likes, seguidores, vistas, etc.).',
        'Para cada cifra pregúntate: ¿qué decisión concreta tomé alguna vez basándome en este número?',
        'Si la respuesta es "ninguna", márcala como VANIDAD. Si hay decisión, márcala como DECISIÓN.',
        'Cierra con 1 párrafo: ¿qué proporción de tus cifras son vanidad?',
      ],
      cuaderno: {
        titulo: 'Vanidad vs decisión',
        formato: 'Tabla 3 columnas (Cifra | ¿Genera decisión? Sí/No | Si sí: qué decisión), 6 filas',
        extension: '6 filas + 1 párrafo de 3 renglones de cierre',
      },
      criterios: [
        'Las 6 cifras son de tus redes reales',
        'Cada cifra tiene respuesta honesta a "qué decisión"',
        'El cierre reconoce honestamente la proporción de vanidad',
        'Identificaste al menos 1 cifra de decisión real',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las 5 métricas que sí importan',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada una de las 5 métricas (visitas únicas, fuentes, páginas, tiempo, conversiones) escribe una ficha.',
        'En cada ficha: qué mide en tus palabras + qué decisión te llevaría a tomar.',
        'Anticipa al menos UNA decisión específica que tomarías si esa cifra subiera o bajara.',
        'Cierra con 2 renglones: ¿cuál de las 5 será la más importante para tu marca personal?',
      ],
      cuaderno: {
        titulo: 'Las 5 métricas que sí importan',
        formato: '5 fichas, cada una con definición + decisión anticipada',
        extension: '5 fichas + 2 renglones de cierre',
      },
      criterios: [
        'Cada ficha tiene definición en tus palabras (no copia)',
        'Cada métrica tiene al menos 1 decisión anticipada concreta',
        'Identificaste tu métrica clave personal',
        'Puedes explicar las 5 sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'ANALIZA',
      titulo: 'Tu primera semana de datos reales',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Crea cuenta gratuita en Plausible o Umami (o GA4 si ya lo conoces).',
        'Copia el script de tracking y pégalo en el <head> de tu sitio. Commit + push.',
        'Si ya pasó 1 semana desde que tu sitio está vivo, lee los datos. Si no, deja la instalación lista y vuelve la próxima semana.',
        'Anota las 5 cifras. Identifica 1 sorpresa (algo que no esperabas). Escribe 1 decisión concreta para la próxima semana.',
      ],
      cuaderno: {
        titulo: 'Mi primera lectura semanal',
        formato: 'Tabla de las 5 cifras + 1 párrafo con la sorpresa + 1 párrafo con la decisión',
        extension: 'Tabla + 2 párrafos — 1 página',
      },
      criterios: [
        'Herramienta de analytics instalada y registrando',
        'Las 5 métricas visibles en el dashboard',
        'Si recolectas datos personales, política de privacidad publicada',
        'Primera lectura escrita con 1 decisión derivada (no observación vaga)',
        'Has decidido no mirar el dashboard hasta el próximo lunes',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la lectura de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia cuadernos con un compañero. Lee su lectura semanal.',
        'Califica del 1 al 5: (a) ¿las 5 métricas están completas?, (b) ¿la decisión es concreta o vaga?, (c) ¿la sorpresa está identificada?',
        'Marca 1 observación que afirma + 1 que reta sobre la decisión que él tomó.',
        'Devuelve y conversen 5 min: ¿coinciden las decisiones o cada uno leyó diferente sus datos?',
      ],
      cuaderno: {
        titulo: 'Evaluación de la lectura semanal de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones sobre su decisión',
        extension: '3 calificaciones + 2 observaciones',
      },
      criterios: [
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Identificaste si su decisión es concreta o vaga',
        'Sugeriste una decisión alternativa basada en sus mismos datos',
        'La conversación no se desvió a defenderse — solo aprender',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica el oficio del análisis',
      instrucciones:
        '5 preguntas para confirmar que distingues vanidad de decisión. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál de estas es una métrica de VANIDAD?',
          opciones: [
            'Tiempo promedio en sitio',
            'Conversiones de formulario',
            'Cantidad de likes en redes',
            'Páginas más vistas',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Likes generalmente no llevan a una decisión concreta — son vanidad disfrazada de información. Las otras 3 sí informan decisiones reales.',
          feedbackIncorrecto:
            'Likes son vanidad si no llevan a decisión. Tiempo, conversiones y páginas más vistas sí informan qué hacer.',
        },
        {
          enunciado: 'Si tu tiempo promedio en sitio es de 8 segundos, ¿qué te dice eso?',
          opciones: [
            'Que tu sitio es perfecto',
            'Que la gente entra y se va — algo no engancha (rebote)',
            'Que necesitas más colores',
            'Que necesitas más imágenes',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. 8 segundos = rebote. La gente entra y se va sin leer. Decisión: revisar hero, copy, o imagen principal.',
          feedbackIncorrecto:
            '8 segundos es rebote. La gente entra y se va. La decisión es revisar lo primero que ven: hero, copy, propuesta de valor.',
        },
        {
          enunciado: '¿Por qué Plausible o Umami son éticamente superiores a GA4?',
          opciones: [
            'Son más caras',
            'Son sin cookies, sin perfilado individual, sin tracking transversal',
            'Tienen mejor diseño',
            'Son más rápidas',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Plausible/Umami respetan al visitante: no cookies, no perfil individual, no tracking entre sitios. GA4 es invasivo por diseño.',
          feedbackIncorrecto:
            'Plausible/Umami: sin cookies, sin perfilado, sin cross-site tracking. Tu visitante merece ese respeto.',
        },
        {
          enunciado: '¿Cada cuánto deberías mirar tu dashboard de métricas?',
          opciones: [
            'Cada hora',
            'Una vez por semana, en horario fijo',
            'Cada vez que tengas tiempo',
            'Nunca — los datos son ruido',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Exacto. Una vez por semana, disciplina fija. Más frecuente = ruido sin señal y obsesión. Menos = ceguera.',
          feedbackIncorrecto:
            'Una vez por semana en horario fijo. Más es ruido, menos es ceguera. La disciplina semanal es lo que diferencia decidir de obsesionarse.',
        },
        {
          enunciado:
            'En el saber ancestral del conteo de la cosecha, ¿qué aplica directamente a tus métricas digitales?',
          opciones: [
            'Nada — los abuelos no usaban analytics',
            'Conteo = información para decidir, no para acumular ni para sentir',
            'Que solo se contaba lo que se cosechaba',
            'Que el conteo era anual',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La abuela contaba mazorcas para decidir cuánto sembrar — tú lees métricas para decidir qué cambiar.',
          feedbackIncorrecto:
            'Conteo para decidir, no para acumular. La abuela contaba para sembrar mejor el próximo ciclo. Tu dashboard sirve a lo mismo en formato digital.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, lunes a las 7 PM, dedica 15 minutos a leer tu dashboard y escribir 1 decisión accionable. NO mires los datos entre semana — esa disciplina semanal es lo que diferencia leer datos de obsesionarse con ellos. El próximo lunes traes el cuaderno con esa lectura.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Lo que no se mide no existe; lo que no se mide bien se inventa.',
      preguntaEspejo:
        '¿A quién hace visible mi dashboard y a quién deja invisible? ¿Qué de los visitantes que NO convierten merece ser visto y nombrado?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Tu vida es lo que tus pensamientos hagan de ella.',
      preguntaEspejo:
        '¿Estoy mirando mis métricas para aprender o para sentir? ¿Cuántas veces a la semana las miro — y cuántas decisiones tomé con ellas?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Tracking sin consentimiento es robo informacional.',
      preguntaEspejo:
        '¿Mi sistema de medición respeta a quien visita mi sitio? ¿Puedo explicar en 2 frases qué datos recojo y para qué?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de mirar likes a leer datos — del impulso emocional al oficio paciente del análisis.',
    emocional:
      'Distinguiste vanidad de decisión y elegiste no obsesionarte con cifras que no llevan a ninguna parte.',
    ciudadana:
      'Elegiste herramientas de medición que respetan al visitante en una infoesfera saturada de tracking invasivo.',
    local:
      'Heredaste el conteo paciente de la abuela en el cuaderno de cosecha — solo cambió el formato, no el oficio.',
    intergeneracional:
      'El conteo para decidir, no para presumir, sobrevive del campo colombiano al dashboard digital.',
  },
};

export default contenido;
