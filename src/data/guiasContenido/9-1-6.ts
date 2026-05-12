/**
 * Contenido enriquecido — Grado 9 · Periodo 1 · Sesión 6
 * Tema: La imprenta — escribir muchas veces lo mismo.
 * Profundidad MILC v3 completa, alineada con content/guias/9/9-1-6.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 1,
  sesion: 6,
  titulo: 'La imprenta — escribir muchas veces lo mismo',
  ocultarPDF: false,
  resumen:
    'Diseñas una hoja informativa propia siguiendo la lógica del pasquín. Del original-muchas copias al post viral, el principio se mantiene.',
  duracionMin: 95,
  subtema: 'Historia de la técnica · Voz pública y diseño editorial',

  saberAncestral: {
    saber:
      'Antes de Gutenberg ya había repetición: sellos mesoamericanos, cilindros mayas, estampas wayuu, marcas de ganado del Valle. La imprenta no inventó repetir — la inventó al texto en masa. En el Valle, los pasquines y hojas volantes fueron arma política de pueblos sin periódicos propios: alguien escribía, otros multiplicaban, y la información circulaba antes de la censura.',
    fuente: 'Pasquines del Valle y tradiciones de repetición mesoamericana, wayuu y maya',
    preguntaPuente:
      '¿Qué tienen en común una hoja volante del Valle hace 200 años y un post viral en redes hoy? ¿Y en qué se diferencian profundamente?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Pasquín y voz pública', duracionMin: 10 },
    { numero: 2, iconos: ['👁'], titulo: 'Anatomía de 3 hojas eficaces', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: '5 elementos de una hoja eficaz', duracionMin: 17 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Diseña tu hoja informativa A4', duracionMin: 38 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'El principio de la imprenta — un original, muchas copias, audiencia grande — sigue siendo la base de toda comunicación masiva. Aprender a hacer una hoja que se entiende en 30 segundos es la habilidad de fondo detrás de un post viral, una valla, un volante o un email importante.',
    preguntaDetonante:
      'Si tuvieras que avisar a tu barrio sobre algo importante mañana y no pudieras usar redes — solo papel y fotocopia — ¿qué dirías y cómo lo dirías?',
    activacion: {
      titulo: 'El test de 5 segundos',
      descripcion:
        'En 3 minutos, mira algún volante o cartel que tengas a la vista (en tu casa, en la calle, en el colegio). Calcúlate 5 segundos para mirarlo. ¿Qué entendiste? ¿Sabes qué hacer? Si no, el diseñador falló. Si sí, está bien hecho.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 5 viste cómo las máquinas cambian el trabajo. Hoy ves cómo una máquina específica (la imprenta) cambió quién puede hablar al pueblo.',
      siguiente:
        'En la sesión 7 verás la electricidad como hito que reorganizó el tiempo humano y la cocina cotidiana.',
    },
  },

  conceptosClave: [
    {
      termino: 'Titular',
      definicion:
        '5-10 palabras grandes arriba de la hoja. Lo que se lee primero. Si no captura en 2 segundos, el resto de la hoja se pierde.',
      ejemplo:
        'Mal: "Información importante para la comunidad". Bien: "Asamblea del barrio · sábado 10 AM". Específico, urgente, accionable.',
      emoji: '📣',
    },
    {
      termino: 'Jerarquía visual',
      definicion:
        'El tamaño y la posición indican qué importa más. Algo grande arriba, algo mediano en el centro, algo chico abajo. Si todo es del mismo tamaño, el ojo no sabe por dónde empezar.',
      ejemplo:
        'Titular muy grande, subtítulo mediano, cuerpo de texto normal, datos de contacto pequeños. El ojo recorre la jerarquía sin que tú tengas que explicarla.',
      emoji: '📐',
    },
    {
      termino: 'Núcleo informativo',
      definicion:
        'La idea principal en 3-4 frases máximo. Responde qué, dónde, cuándo, por qué. Sin esto, el lector queda con preguntas pero sin respuesta.',
      ejemplo:
        '"La basura no pasa el miércoles por una huelga. Llévala al punto de acopio de la calle 7. Funciona hasta el viernes". 3 frases, claras.',
      emoji: '📝',
    },
    {
      termino: 'Llamada a la acción',
      definicion:
        'Qué quieres que el lector haga después de leer. Concreta, específica, con datos. Sin esto, leyeron pero no actúan.',
      ejemplo:
        'Mal: "Apóyenos". Bien: "Trae 3 botellas plásticas el sábado 10 AM al parque". Verbo + qué + cuándo + dónde.',
      emoji: '🎯',
    },
    {
      termino: 'Diseño para escaneo',
      definicion:
        'Nadie lee tu hoja palabra por palabra. La escanea en 5-15 segundos. Si en ese tiempo no entendió, perdiste. Diseñar para escaneo separa el profesional del aficionado.',
      ejemplo:
        'Bloques cortos con respiro, viñetas en lugar de párrafos largos, palabras clave en negrita. El ojo encuentra lo importante saltando.',
      emoji: '👁',
    },
    {
      termino: 'Datos de pie',
      definicion:
        'Quién publica, fecha, contacto. Si esto falta, pierdes credibilidad. Una hoja anónima sin fecha se siente sospechosa o irrelevante.',
      ejemplo:
        '"JAC barrio La Esperanza · 12 de mayo de 2026 · WhatsApp 300-555-1234". Tres datos que cambian todo.',
      emoji: '📌',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Anatomía de 3 hojas reales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca 3 ejemplos visuales: pasquín histórico, volante moderno de un negocio, post viral reciente.',
        'Para cada uno: ¿qué se ve primero? ¿qué viene segundo? ¿qué llamada a la acción tiene?',
        'Identifica qué emoción transmite cada uno (urgencia, calma, indignación, ternura).',
        'Cierra con 1 frase: ¿qué hace que las hojas eficaces sean eficaces, según lo que viste?',
      ],
      cuaderno: {
        titulo: '3 anatomías de hojas eficaces',
        formato: 'Tabla 5 columnas (Pieza | Titular | Núcleo | Llamada a la acción | Emoción), 3 filas',
        extension: '3 filas + 1 frase final',
      },
      criterios: [
        'Los 3 ejemplos son distintos en formato y época',
        'Identificaste qué se lee primero, segundo, tercero en cada uno',
        'Reconociste la llamada a la acción (o su ausencia)',
        'La frase final sintetiza un patrón común',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los 5 elementos de una hoja eficaz',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Para cada elemento (titular, jerarquía, núcleo, llamada a la acción, datos de pie) escribe una ficha.',
        'En cada ficha: definición en tus palabras + 1 ejemplo concreto que te imaginas para TU hoja final.',
        'Marca con ★ los 2 elementos que más te cuestan personalmente.',
        'Cierra con 1 párrafo: ¿qué te impide hoy producir hojas eficaces?',
      ],
      cuaderno: {
        titulo: '5 elementos de una hoja eficaz',
        formato: '5 fichas con definición + ejemplo + ★ en los 2 más difíciles',
        extension: '5 fichas + 1 párrafo de cierre',
      },
      criterios: [
        'Cada ficha tiene tu propio ejemplo, no genérico',
        'Identificaste honestamente tus 2 elementos más difíciles',
        'Tienes claro qué irá en cada elemento de tu propia hoja',
        'Puedes explicar los 5 sin mirar notas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu hoja informativa A4',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Elige tema y acción concreta a provocar (evento del colegio, problema del barrio, propuesta).',
        'Escribe 3 versiones de titular en borrador; elige la más fuerte (corta, clara, urgente).',
        'Redacta el núcleo en 3-4 frases máximo.',
        'Decide jerarquía visual (qué grande, qué chico, qué color o subrayado).',
        'Ejecuta en hoja A4 final a mano, con todos los 5 elementos visibles.',
      ],
      cuaderno: {
        titulo: 'Mi hoja informativa de 1 página',
        formato: '(1) Decisión de tema + acción. (2) 3 versiones de titular con la elegida marcada. (3) Hoja A4 final a mano.',
        extension: '1 página de cuaderno + 1 hoja A4',
      },
      criterios: [
        'Titular grande, claro y corto (5-10 palabras)',
        'Núcleo informativo de máximo 3-4 frases',
        'Llamada a la acción concreta',
        'Jerarquía visual clara',
        'Datos de pie con autor + fecha + contacto',
        'Un peatón entiende qué hacer en 30 segundos',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Test de 30 segundos con un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Pasa tu hoja A4 a un compañero por exactamente 30 segundos.',
        'Pasados los 30 segundos, retírala. Pregúntale: "¿qué entendiste? ¿qué tienes que hacer?".',
        'Anota su respuesta literal. Compara con lo que querías comunicar.',
        'Hagan el ejercicio recíproco. Califica del 1 al 5: claridad, jerarquía, llamada a la acción.',
      ],
      cuaderno: {
        titulo: 'Test 30 segundos de [compañero]',
        formato: 'Respuesta literal del compañero + 3 calificaciones con justificación',
        extension: 'Respuesta + 3 calificaciones',
      },
      criterios: [
        'Cronometró exactamente 30 segundos',
        'Anotó respuesta literal sin guiar al compañero',
        'Las 3 calificaciones tienen justificación de 1 línea',
        'Reconoció si hubo brecha entre lo querido y lo entendido',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica los principios del pasquín',
      instrucciones:
        '5 preguntas para confirmar que dominas la lógica del original-muchas copias. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuántas frases máximo debe tener el núcleo informativo de una hoja eficaz?',
          opciones: ['1 frase', '3-4 frases', '10 frases', 'Todo el texto que quepa'],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. 3-4 frases máximo. Más texto = no se lee. Menos = falta información. El equilibrio es decir lo esencial sin desperdiciar atención.',
          feedbackIncorrecto:
            '3-4 frases máximo. Nadie lee tu hoja como libro — la escanea. Más texto pierde lectores; menos deja preguntas.',
        },
        {
          enunciado: '¿Cuál es el error más grave de un titular?',
          opciones: [
            'Ser corto',
            'Ser abstracto y vago ("Información importante para la comunidad")',
            'Tener mayúsculas',
            'Estar arriba',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Un titular abstracto no captura. "Asamblea del barrio sábado 10 AM" funciona mejor que "Información importante para la comunidad".',
          feedbackIncorrecto:
            'Abstracción mata el titular. "Información importante" no informa nada. Específico, urgente, accionable — esa es la fórmula.',
        },
        {
          enunciado: '¿Qué pasa si tu hoja no tiene llamada a la acción?',
          opciones: [
            'Nada, está bien igual',
            'El lector lee pero no actúa — perdiste la oportunidad',
            'Se ve mejor',
            'Es más profesional',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Sin acción concreta, hasta el mejor texto se vuelve curiosidad. Cada hoja debe terminar en qué hacer + cuándo + dónde.',
          feedbackIncorrecto:
            'Sin llamada a la acción, el lector se va. Toda hoja debe contestar "¿qué hago con esta información?" en una línea clara.',
        },
        {
          enunciado: '¿Cuántos segundos suele tener una hoja para captar la atención?',
          opciones: ['5-15 segundos', '5 minutos', '1 hora', 'Hasta que termine de leer'],
          respuestaIndex: 0,
          feedbackCorrecto:
            'Exacto. La gente escanea, no lee. Diseñar para escaneo de 5-15 segundos es la diferencia entre pasquín profesional y panfleto torpe.',
          feedbackIncorrecto:
            '5-15 segundos. La hoja se escanea, no se lee. Si en ese tiempo no entendiste qué es y qué hacer, el diseñador falló.',
        },
        {
          enunciado:
            'En el saber ancestral del pasquín del Valle, ¿qué aplica directamente a un post viral hoy?',
          opciones: [
            'Nada — los pasquines son antiguos',
            'El principio "un original, muchas copias, audiencia grande" + la necesidad de captar atención rápido',
            'Que se imprimían en papel',
            'Que eran clandestinos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. Pasquín y post viral comparten lógica de multiplicación. La diferencia es la velocidad y la propiedad de los medios — no el principio.',
          feedbackIncorrecto:
            'El principio "un original + multiplicación + audiencia grande" y la urgencia de captar atención. La diferencia con el pasquín es que ahora la plataforma controla la distribución.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, imprime o haz fotocopia de tu hoja (5-10 copias) y distribúyela en tu salón, casa o barrio. Anota durante 3 días qué respuesta tuvo — ¿alguien hizo la acción que propusiste? Esa retroalimentación es más valiosa que una nota. El próximo lunes traemos los hallazgos.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Donde no hay imprenta propia, no hay voz pública; donde no hay voz pública, no hay comunidad política.',
      preguntaEspejo:
        '¿Tengo medios propios para hacer llegar mi voz a mi comunidad, o dependo totalmente de plataformas controladas por otros?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Escribe pocas cosas pero verdaderas; muchas palabras vacías son más ruido que silencio.',
      preguntaEspejo:
        'De lo que escribí esta semana en redes y correos, ¿cuánto aporta valor a alguien? ¿Cuánto es ruido que solo suma a la saturación?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La imprenta fue la primera tecnología que escaló radicalmente la infoesfera humana; las redes son la segunda.',
      preguntaEspejo:
        'Si lo que estoy a punto de publicar fuera a aparecer en 1000 hojas impresas con mi nombre, ¿lo seguiría publicando? ¿Cambiaría algo?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste a comunicarte con criterio editorial — no más volantes torpes, no más posts vacíos.',
    emocional:
      'Sentiste el desafío de decir lo esencial en pocas frases — disciplina que cuesta y libera.',
    ciudadana:
      'Conectaste el pasquín con la voz pública: quien tiene medios propios tiene poder político.',
    local:
      'Anclaste la sesión en pasquines reales del Valle y oficios de la imprenta colombiana del siglo XX.',
    intergeneracional:
      'El principio "un original, muchas copias" sobrevive desde Gutenberg hasta tu próximo post viral.',
  },
};

export default contenido;
