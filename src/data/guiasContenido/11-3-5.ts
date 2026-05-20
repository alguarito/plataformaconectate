/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/11/11-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 5,
  titulo: 'Datos del MVP — recoger evidencia con rigor',
  resumen: 'La medición rigurosa del MVP es lo que separa el experimento profesional del experimento desperdiciado.',
  duracionMin: 90,
  subtema: 'Datos del MVP — recoger evidencia con rigor',
  preLectura: {
    porQueImporta: 'El criterio principal: que un analista de datos junior, mirando tu tabla, pueda confirmar o cuestionar tu decisión sin tener que confiar en tu palabra.',
    preguntaDetonante: '¿Qué sabía la sobandera del barrio al observar la postura del paciente durante 3 minutos antes de tocarlo, que el emprendedor novato olvida cuando salta del MVP a la "conclusión" sin medir nada? ¿Y por qué "tuvimos 500 visitas" es la peor manera de reportar el resultado de un MVP, aunque suene a éxito?',
    activacion: {
      titulo: '3-5 indicadores accionables para mi MVP',
      descripcion: 'Actividad 1 · IDENTIFICA — 3-5 indicadores accionables para mi MVP (20 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'La sesión 4 te dio un MVP funcional probado por al menos 1 usuario.',
      siguiente: 'Llega con el plan de medición, los 10 datos y la decisión documentada.'
    }
  },
  conceptosClave: [
    {
      termino: 'Indicadores del MVP (3-5)',
      definicion: 'Métricas específicas con meta numérica que dicen si el MVP funcionó. Ratios (% de conversión) o valores absolutos (cantidad de inscritos). Sin métricas, las decisiones son intuiciones disfrazadas.',
      ejemplo: 'Para landing: (1) % de visitantes que llenan formulario, (2) cantidad absoluta semanal, (3) % que ofrece pagar. 3 métricas, cada una con meta.',
      emoji: '📈'
    },
    {
      termino: 'Datos vs anécdotas',
      definicion: 'Diferencia clave del Lean: anécdota es "una persona me dijo X"; dato es "8 de 10 personas dicen Y". Las decisiones se basan en datos agregados, no en anécdotas memorables.',
      ejemplo: 'Anécdota: "Don Aurelio dijo que pagaría $50.000". Dato: "8 de 10 tenderos dicen entre $20-30K". Decisión: precio entre $25K. El dato gana.',
      emoji: '📊'
    },
    {
      termino: 'Decisión binaria con datos',
      definicion: 'Después de medir, decisión en 4 vías: SIGO (los datos confirman), AJUSTO (ajustes pequeños), PIVOTO (cambio mayor de solución), DESCARTO (problema no es lo que pensaba). La decisión se documenta por escrito.',
      ejemplo: '10 datos: 7 confirman tesis, 3 sugieren mejora menor. Decisión: AJUSTO. Cambio el precio y vuelvo a medir 1 semana. La decisión queda registrada con su razón.',
      emoji: '🎯'
    },
    {
      termino: 'Sesgo del optimista emprendedor',
      definicion: 'Tendencia natural a interpretar datos ambiguos en sentido positivo. Para evitar: definir criterios antes de medir (S4), tener un compañero crítico que cuestione, mirar números fríos sin narrativa.',
      ejemplo: '7 conversiones de 100 visitas. Optimista: "vamos por buen camino". Realista: "es 7%, menor a la meta de 15%; revisar mensaje del landing".',
      emoji: '🤔'
    },
    {
      termino: 'Conteo riguroso vs aproximaciones',
      definicion: 'La medición seria cuenta cada dato: cuántos visitaron, cuántos formularios, cuántos ofrecieron pagar. No "varios" ni "muchos" ni "algunos". Números exactos con fecha.',
      ejemplo: 'Mal: "varios tenderos respondieron interés". Bien: "12 tenderos visitaron el landing entre lunes y viernes; 4 dejaron correo; 2 ofrecieron pagar $25K".',
      emoji: '🧮'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes recoger datos del MVP con rigor?',
      instrucciones: '5 preguntas sobre medición y análisis de datos.',
      preguntas: [
        {
          enunciado: 'Tu MVP recibe 100 visitas y 7 formularios. Tu meta era 15 conversiones. ¿Es éxito?',
          opciones: [
            'Sí, recibí formularios.',
            'No. 7 < 15. Es por debajo de meta. Hay que ajustar.',
            'Depende del clima.',
            'Solo si me siento bien.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Meta definida antes (S4) = decisión clara después. 7 < 15, está por debajo. Hay que ajustar (cambiar mensaje, precio, audiencia) antes de seguir.',
          feedbackIncorrecto: '7 < 15 (meta). Datos por debajo de meta = no éxito. Sin criterios previos cae en sesgo del optimista. Con criterios, decisión clara.'
        },
        {
          enunciado: 'Un tendero te dice \'pagaría $50.000\'. Otros 9 dicen entre $20-30K. ¿Qué precio fijas?',
          opciones: [
            '$50.000, el de Don Aurelio.',
            'Entre $25-30K, lo que la mayoría aceptaría.',
            '$100.000 a ver.',
            'Gratis.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Datos > anécdota. 9 de 10 dicen $20-30K. La excepción no define precio; la mayoría sí. Anécdotas memorables sesgan; datos agregados deciden.',
          feedbackIncorrecto: 'Datos agregados > anécdota memorable. Don Aurelio es 1 dato; los 9 son 9 datos. Decisión basada en mayoría con datos: $25-30K.'
        },
        {
          enunciado: 'Después de medir, las 4 decisiones posibles son...',
          opciones: [
            'Sigo, ajusto, pivoto, descarto.',
            'Sigo o me rindo.',
            'Espero a ver.',
            'Solo sigo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Las 4 con sus criterios: sigo (datos confirman), ajusto (cambios menores), pivoto (cambio mayor), descarto (no es problema real).',
          feedbackIncorrecto: '4 decisiones: SIGO + AJUSTO + PIVOTO + DESCARTO. Cada una basada en datos. Documentar la decisión con su razón y referencia a datos.'
        },
        {
          enunciado: '¿Cuál es \'dato\' y no \'anécdota\'?',
          opciones: [
            'Una persona me dijo que sí.',
            '8 de 10 entrevistados pagarían entre $20-30K.',
            'Mi mamá cree en mi idea.',
            'Sentí buena vibra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Dato = números agregados con muestra. Anécdota = caso aislado memorable. Las decisiones serias se basan en datos, no anécdotas.',
          feedbackIncorrecto: 'Dato agregado con muestra (8/10) > anécdota individual. Anécdotas son memorables pero sesgan. Datos agregados con números son la base de decisión.'
        },
        {
          enunciado: 'Cómo describes tu medición: \'algunos tenderos respondieron interés\'. ¿Está bien?',
          opciones: [
            'Sí, suena suficiente.',
            'No. Mejor: \'12 visitaron landing, 4 dejaron correo, 2 ofrecieron pagar $25K\'. Números exactos.',
            'Solo si es viernes.',
            'Da igual.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Números exactos con fecha. "Algunos" es vago y sesga. La medición seria cuenta cada dato. Conteo riguroso es práctica adulta.',
          feedbackIncorrecto: 'Conteo exacto, no "algunos" o "varios". 12 visitaron, 4 formularios, 2 ofrecimientos. Sin números, la medición se vuelve interpretación.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy tratando los datos adversos con el mismo rigor que los favorables, o solo acepto la evidencia que me da la razón?',
    transferencia: 'Llega con el plan de medición, los 10 datos y la decisión documentada.',
    cierre: 'Al terminar podrás: (1) identificar 3-5 indicadores accionables (no de vanidad) para tu MVP, cada uno con meta numérica y método de recolección; (2) analizar los primeros 10 datos reales recogidos del MVP de la sesión 4 con un mínimo de rigor estadístico apropiado para muestras p…'
  },
  saberAncestral: {
    saber: 'En los caminos del Valle del Cauca, antes de los hospitales modernos, había una figura que dominaba un oficio que hoy llamaríamos "medicina basada en evidencia": el médico tradicional, la sobandera, la curandera del barrio. Su práctica nunca empezaba con la receta: empezaba con observar. La sobandera, antes de tocar la mano luxada, pedía caminar al paciente para ver la postura. La curandera, antes de dar el agua de violetas para la tos, escuchaba la respiración 3 minutos completos. El partero del campo, antes de decidir cualquier maniobra, contaba los latidos del bebé y los movimientos del vientre durante una hora. La sabiduría era rigurosa: observar antes de actuar, medir antes de intervenir, escuchar antes de hablar. La diferencia entre un médico tradicional respetado y un curandero novato no era el conocimiento de las plantas: era la disciplina de la observación previa. Esa virtud ancestral es la misma que separa al emprendedor que decide con datos del que decide con corazonadas.',
    preguntaPuente: '¿Qué sabía la sobandera del barrio al observar la postura del paciente durante 3 minutos antes de tocarlo, que el emprendedor novato olvida cuando salta del MVP a la "conclusión" sin medir nada? ¿Y por qué "tuvimos 500 visitas" es la peor manera de reportar el resultado de un MVP, aunque suene a éxito?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Decidir sobre el otro sin escuchar el dato que el otro produce es repetir la lógica del poder sin verdad.',
      preguntaEspejo: '¿Estoy tratando los datos adversos con el mismo rigor que los favorables, o solo acepto la evidencia que me da la razón?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Ve las cosas como son, no como te gustaría que fueran; ese es el principio del juicio recto.',
      preguntaEspejo: '¿Estoy interpretando los datos como son, o como me conviene que sean para que mi MVP parezca exitoso ante el docente?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Recolectar datos con rigor y limitaciones declaradas es la nueva ética del oficio en la era de la información.',
      preguntaEspejo: '¿Mi informe declara honestamente las limitaciones (n=10, sesgo de canal, sesgo de selección) o las esconde para sonar más convincente?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar 3-5 indicadores accionables (no de vanidad) para tu MVP, cada uno con meta numérica y método de recolección; (2) analizar los primeros 10 datos reales recogidos del…',
    emocional: 'Es tentador inflar los hallazgos numéricos para que el MVP parezca exitoso, o subestimarlos para tener excusa de pivotar.',
    ciudadana: 'Tu MVP recogió datos de usuarios reales.',
    local: 'Antes de cerrar, mira la medición desde las cinco dimensiones humanas.',
    intergeneracional: 'La era de la información produce datos por toneladas, pero la calidad ética del dato depende de cómo se recolecta y cómo se comunica.'
  }
};

export default contenido;
