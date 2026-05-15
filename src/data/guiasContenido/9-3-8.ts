/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 8
 * Tema: Visualización honesta — gráficos que mienten.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-8.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 8,
  titulo: 'Visualización honesta — gráficos que mienten',
  ocultarPDF: false,
  resumen:
    'Un gráfico engañoso no miente: dice una verdad parcial con técnica visual que empuja al lector a una conclusión equivocada. Aprendes a detectar los 5 trucos típicos y a producir la versión honesta del mismo dato.',
  duracionMin: 90,
  subtema: 'Datos · Lectura crítica visual',

  saberAncestral: {
    saber:
      'El comerciante tramposo de la plaza ajustaba la balanza para sumar gramos en su favor: un kilo pesaba 900 g pero la balanza decía "un kilo". La abuela del Valle enseñaba a verificar la pesa antes de pagar — pedir el grano en bolsa propia, revisar el fiel, no fiarse del precio sin chequear el peso. Esa desconfianza educada es lo mismo que necesita el ciudadano frente a un gráfico: verificar antes de creer.',
    fuente: 'Balanza de la plaza, desconfianza educada de la abuela del Valle del Cauca',
    preguntaPuente:
      '¿Cómo enseñaba la abuela a sus nietas a no dejarse engañar en la plaza? ¿Y qué pierde un ciudadano novato cuando comparte en redes un gráfico bonito sin haber verificado si el eje Y arranca en cero?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La balanza tramposa', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Mira sin sospechar', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del engaño visual', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Auditoría de 3 gráficos reales', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Casi todo gráfico que circula en redes y prensa fue diseñado para empujarte a una conclusión. Aprender a auditarlo en 30 segundos es alfabetización defensiva del siglo XXI.',
    preguntaDetonante:
      'Si un gráfico te indigna o te emociona en 2 segundos, ¿es porque los datos son contundentes o porque el diseñador eligió esos colores y esa escala?',
    activacion: {
      titulo: 'Verificar la balanza',
      descripcion:
        'En 3 minutos: el docente muestra 3 gráficos reales (capturas de prensa) sin decir que tienen truco. Los estudiantes anotan qué entendieron y qué decisión tomarían como ciudadanos.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 6 aprendiste a producir gráficos honestos. Hoy aprendes a detectar los deshonestos. Producir bien y leer críticamente son la misma alfabetización.',
      siguiente:
        'En la sesión 9 cierras el periodo conectando dato → hallazgo → decisión: el insight accionable.',
    },
  },

  conceptosClave: [
    {
      termino: 'Eje Y cortado',
      definicion:
        'Truco más común: el eje Y no arranca en cero, lo cual exagera diferencias pequeñas. Detección: mira siempre el primer valor del eje Y.',
      ejemplo:
        'Gráfico de barras con eje Y que arranca en 95: una caída de 99 a 97 parece enorme.',
      emoji: '✂️',
    },
    {
      termino: 'Escala logarítmica oculta',
      definicion:
        'Comprime grandes diferencias visualmente. Sin etiqueta clara, engaña. Detección: revisa si el eje crece de 1 → 10 → 100 → 1000.',
      ejemplo:
        'Casos por país con escala log: el país con 10.000 casos parece solo "el doble" del que tiene 100.',
      emoji: '📉',
    },
    {
      termino: 'Color sesgado',
      definicion:
        'Rojo para lo que el diseñador quiere criticar; verde para lo que quiere alabar. El dato no es moral; el color le impone moral.',
      ejemplo:
        'Gráfico de "estratos sociales": rojo intenso para estratos bajos, verde apacible para estratos altos.',
      emoji: '🎨',
    },
    {
      termino: 'Contexto omitido',
      definicion:
        'Muestra el mejor mes o el peor mes sin la serie completa. Detección: pregunta siempre "¿qué pasó antes y después?".',
      ejemplo:
        'Crisis económica mostrada con solo 3 meses, sin los 12 anteriores que mostrarían tendencia distinta.',
      emoji: '✂️',
    },
    {
      termino: 'Cherry picking',
      definicion:
        'Selecciona las categorías que apoyan la tesis y oculta el resto en "otros" o las omite. Detección: cuenta categorías visibles y pregunta cuántas hay en realidad.',
      ejemplo:
        'Comparación de 5 productos donde solo se muestran los 3 que mejoran, omitiendo los 2 que cayeron.',
      emoji: '🍒',
    },
    {
      termino: 'Lista de chequeo en 30 segundos',
      definicion:
        '4 verificaciones rápidas: eje Y (¿arranca en cero?), fechas (¿serie completa?), categorías (¿todas?), color (¿carga moral?).',
      ejemplo:
        'Antes de compartir un gráfico en redes, los 4 chequeos: 10 segundos cada uno.',
      emoji: '🛡️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Mira sin sospechar',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'El docente proyecta 3 gráficos reales sin decir que tienen truco.',
        'Para cada uno anota: qué pregunta parece responder, qué conclusión sacarías, qué decisión tomarías como ciudadano.',
        'No analices todavía: responde como cualquier lector apurado.',
        'Al final, observa qué emoción te produjo cada gráfico — esa emoción es la primera señal de sospecha.',
      ],
      cuaderno: {
        titulo: 'Mira sin sospechar',
        formato: 'Tabla 3 filas (uno por gráfico) × 3 columnas (Pregunta | Conclusión | Decisión)',
        extension: '3 filas + 1 nota sobre emoción',
      },
      criterios: [
        'Anoté qué pregunta parecía responder cada gráfico',
        'Anoté la conclusión sin sospechar',
        'Anoté la decisión que tomaría como ciudadano',
        'Reconozco la emoción que cada gráfico me produjo',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Anatomía del engaño visual',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 5 fichas, una por truco (eje cortado, log oculta, color sesgado, contexto omitido, cherry picking).',
        'En cada ficha: cómo funciona + cómo se detecta en 5 segundos + 1 ejemplo de vida real.',
        'Marca 🚨 el truco que más te ha engañado en redes.',
        'Practica la lista de 4 chequeos sobre los 3 gráficos de la Actividad 1.',
      ],
      cuaderno: {
        titulo: 'Anatomía del engaño visual',
        formato: '5 fichas (un truco por ficha) con cómo + detección + ejemplo',
        extension: '5 fichas + 1 marca + checklist aplicado',
      },
      criterios: [
        'Las 5 fichas tienen los 3 elementos',
        'Cada ficha tiene ejemplo real',
        'Apliqué la checklist a los 3 gráficos iniciales',
        'Podría auditar un gráfico nuevo en 30 segundos',
      ],
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Audita 3 gráficos reales',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Busca 3 gráficos reales con sospecha de truco (prensa, redes, publicidad, libro).',
        'Toma captura y registra fuente (medio, fecha).',
        'Audita con la lista de 4 chequeos y nombra el truco principal.',
        'Evalúa la gravedad: ¿qué decisión real cambiaría el lector al ver la versión honesta?',
      ],
      cuaderno: {
        titulo: 'Auditoría de 3 gráficos reales',
        formato: '3 fichas con fuente + captura + truco + decisión que induce',
        extension: '3 fichas',
      },
      criterios: [
        '3 gráficos con captura y fuente verificable',
        'Truco nombrado de la lista de 5',
        'Análisis fundado en evidencia visible',
        'Evaluación de gravedad escrita',
      ],
    },
    {
      numero: 4,
      verbo: 'CREA',
      titulo: 'Versión honesta del mismo dato',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Para cada uno de los 3 gráficos auditados, produce la versión honesta (boceto a mano o gráfico hecho en Excel sobre el mismo dato).',
        'Usa eje Y desde cero, escala lineal, color neutro, contexto completo, todas las categorías.',
        'Escribe la decisión que saldría con la versión honesta.',
        'Compara con la decisión que inducía el original engañoso.',
      ],
      cuaderno: {
        titulo: 'Versiones honestas',
        formato: '3 fichas con boceto/captura + decisión nueva + comparación con el original',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        '3 versiones honestas sobre los mismos datos',
        'Cada versión declara qué corrige del original',
        '3 decisiones nuevas escritas',
        'Comparación con la decisión que inducía el engaño',
        'Podría defender mi auditoría ante el autor del gráfico original',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica detección de engaños visuales',
      instrucciones:
        '5 preguntas para confirmar que auditas gráficos con criterio. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué un gráfico engañoso suele ser legal?',
          opciones: [
            'Porque nadie verifica',
            'Porque dice una verdad parcial sin números falsos — manipula con selección y presentación',
            'Porque las leyes son laxas',
            'No es legal',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. El engaño visual es legal y peligroso precisamente porque los datos son ciertos: lo que manipula es el eje, la escala o la selección.',
          feedbackIncorrecto:
            'Es legal porque no miente con números. Por eso requiere auditoría visual: la verdad parcial es la verdad más peligrosa.',
        },
        {
          enunciado: 'Un gráfico te indigna en 2 segundos. ¿Qué haces primero?',
          opciones: [
            'Compartirlo en redes',
            'Aplicar la lista de 4 chequeos antes de creer o compartir',
            'Comentar de inmediato',
            'Confiar en la emoción',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La emoción rápida es la primera señal de sospecha — el diseñador buscó esa reacción. Verifica antes de actuar.',
          feedbackIncorrecto:
            'Verificar antes de creer. La indignación instantánea suele ser diseño, no contundencia del dato.',
        },
        {
          enunciado: '¿Cuál de estos NO es uno de los 5 trucos típicos?',
          opciones: [
            'Eje Y cortado',
            'Color sesgado',
            'Escala logarítmica con etiqueta clara',
            'Cherry picking',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. La escala log con etiqueta clara y declarada NO es engaño: es opción legítima. El truco aparece cuando la escala log se oculta.',
          feedbackIncorrecto:
            'La escala log declarada es legítima. El engaño llega cuando se oculta o cuando se elige sin explicar al lector.',
        },
        {
          enunciado: '¿Qué hace especial a una "versión honesta"?',
          opciones: [
            'Que es más bonita',
            'Que usa el mismo dato pero presentado de forma que el lector llegue a una conclusión justa',
            'Que es más colorida',
            'Que es más larga',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. La versión honesta no cambia los datos: cambia la presentación. Mismo dato, conclusión justa.',
          feedbackIncorrecto:
            'Mismo dato, presentación justa. Si cambias los datos, ya no es auditoría: es contraargumento.',
        },
        {
          enunciado: 'En el saber ancestral de la balanza, ¿qué aplica a los gráficos engañosos?',
          opciones: [
            'Nada',
            'Verificar antes de creer es desconfianza educada, no paranoia — es defensa civil',
            'Que las balanzas modernas son honestas',
            'Que cambió todo',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La abuela enseñaba a verificar el peso; tú verificas el eje. Mismo gesto, distinto medio.',
          feedbackIncorrecto:
            'Desconfianza educada. La verificación es virtud cívica heredada — solo cambia el objeto: de la balanza al gráfico.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, antes de compartir o comentar cualquier gráfico en redes o prensa, aplica la lista de 4 chequeos (eje, fechas, categorías, color). Si falla en alguno, no lo compartas: comenta el problema.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Una imagen que excluye a los pobres del análisis los excluye también de la política pública.',
      preguntaEspejo:
        'En los 3 gráficos que analicé, ¿qué grupos sociales quedaron disueltos en categorías agregadas y qué grupos aparecieron con detalle propio? ¿La elección era inocente?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Antes de creer en lo que ves, verifica que lo que ves está completo.',
      preguntaEspejo:
        '¿Qué emociones me produjeron los gráficos que analicé? ¿La emoción me empujó a una conclusión que la versión honesta desmiente?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La integridad visual de los datos es infraestructura democrática invisible.',
      preguntaEspejo:
        '¿Cuántos gráficos compartí o creí en redes esta semana sin auditarlos? ¿Cuánto contribuí, sin querer, a la circulación del engaño visual?',
    },
  },

  cincoDimensiones: {
    personal:
      'Pasaste de consumidor de gráficos a auditor: ya no aceptas indignaciones o euforias instantáneas sin verificar.',
    emocional:
      'Aprendiste a detectar la emoción inducida por diseño y a posponer la conclusión hasta auditar.',
    ciudadana:
      'La detección de engaños visuales es defensa civil. Tu auditoría protege también a quienes comparten sin saber.',
    local:
      'La abuela enseñaba a verificar la pesa; tú verificas el eje. Mismo gesto, distinto objeto.',
    intergeneracional:
      'La desconfianza educada es legado de la abuela rural. Tu pantalla es la nueva balanza.',
  },
};

export default contenido;
