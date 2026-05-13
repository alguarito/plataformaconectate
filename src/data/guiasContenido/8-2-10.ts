/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 10
 * (sesión global 20 — Sustentación de proyecto técnico).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 10,
  resumen:
    'Como el mostrador del artesano: mostrar el oficio con honestidad, mostrar evidencia, reconocer límites. Aprendes a sustentar un proyecto técnico de 5 minutos con phronesis.',
  duracionMin: 90,
  subtema: 'Sustentación · Honestidad técnica · Mejoras futuras',

  preLectura: {
    porQueImporta:
      'Saber sustentar honestamente un proyecto técnico te servirá toda la vida: defender una propuesta de empleo, presentar resultados a un cliente, sustentar una tesis. La honestidad construye credibilidad.',
    preguntaDetonante: '¿Qué del mostrador del artesano — su disciplina de mostrar el oficio con honestidad — podemos llevar a la sustentación digital?',
    activacion: { titulo: 'La sustentación memorable', descripcion: 'En 5 minutos: en parejas recuerden la mejor sustentación que han visto (un compañero, un emprendedor, un profesor). ¿Qué la hizo memorable? ¿Tenía honestidad sobre limitaciones?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 19 ejecutaste tu proyecto MILC integrador.', siguiente: 'Cierre del periodo 2. En el periodo 3 entrarás a multimedia, ciberseguridad y estética de la liberación.' },
  },

  conceptosClave: [
    { categoria: '🏛️ Estructura', termino: 'Problema', definicion: 'La situación real que el proyecto aborda. Acotada, verificable, importante para la comunidad. Los primeros 30 segundos de la sustentación.', ejemplo: '"La huerta del colegio se regaba 3 veces/semana sin saber si era necesario, gastando agua y tiempo del personal."', emoji: '🎯' },
    { categoria: '🏛️ Estructura', termino: 'Diseño', definicion: 'Cómo se construyó el sistema: variables, lógica, código clave. 1 minuto explicando lo esencial sin abrumar con detalles.', ejemplo: '"Usé sensor de humedad simulado en MakeCode, lógica simple: medir cada hora, registrar en tabla, graficar evolución."', emoji: '🏗️' },
    { categoria: '🏛️ Estructura', termino: 'Pruebas hechas', definicion: 'Casos esperados, contrarios y de límite que se probaron. Demuestra rigor: no solo funcionó "una vez", funcionó en escenarios diversos.', ejemplo: '"Probé caso normal (humedad 60%), seco (humedad 20%), lluvioso (humedad 90%). En los tres casos, el sistema respondió correctamente."', emoji: '🧪' },
    { categoria: '🏛️ Estructura', termino: 'Lecciones aprendidas', definicion: 'Lo que el proceso enseñó, más allá del resultado final. Errores, ajustes, descubrimientos. Demuestra reflexión, no solo ejecución.', ejemplo: '"Aprendí que el filtro temporal es crítico: sin él, sombras momentáneas falsificaban alertas. La depuración me enseñó disciplina."', emoji: '🦉' },
    { categoria: '🎙️ Honestidad técnica', termino: 'Limitaciones reconocidas', definicion: 'Casos no probados, escenarios fuera del alcance, datos faltantes. Reconocerlos en lugar de ocultarlos construye credibilidad.', ejemplo: '"NO probé qué pasa si el sensor se daña. NO incluí datos de fin de semana. Estas son limitaciones a corregir en próxima versión."', emoji: '⚠️' },
    { categoria: '🎙️ Honestidad técnica', termino: 'Casos no probados', definicion: 'Escenarios reconocidos pero no validados. La honestidad es nombrarlos para que la audiencia entienda los límites del proyecto.', ejemplo: '"No probé el sistema con temperaturas bajo 0 (Cartago no llega) ni con humedad 100% (lluvias intensas no contempladas)."', emoji: '❓' },
    { categoria: '🎙️ Honestidad técnica', termino: 'Mejoras futuras', definicion: 'Lo que harías con más tiempo o recursos. No es promesa — es plan. Demuestra visión más allá del producto inmediato.', ejemplo: '"Con más tiempo: agregar redundancia (segundo sensor), exportar datos a la nube, integrar con app del docente."', emoji: '🚀' },
    { categoria: '🎙️ Honestidad técnica', termino: 'Apertura a crítica', definicion: 'Disposición a recibir preguntas y considerar puntos no contemplados. NO defenderte — escuchar, agradecer, considerar mejoras.', ejemplo: 'Si te preguntan "¿qué pasa si llueve mucho?", responde: "No lo probé. Lo agregaré a las mejoras futuras. Buena observación, gracias."', emoji: '🤝' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Sustentación honesta',
    instrucciones: '5 preguntas tipo ICFES sobre estructura y honestidad técnica en sustentaciones.',
    preguntas: [
      { enunciado: 'En tu sustentación de 5 minutos, ¿qué porcentaje del tiempo deberías dedicar a las limitaciones del proyecto?', opciones: ['0% (no mencionarlas)', '30 segundos a 1 minuto reconociéndolas', '50% del tiempo', 'Solo si te preguntan'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Reconocer limitaciones por 30s-1min es honestidad técnica que construye credibilidad. Ocultarlas es engañoso. Dedicarles 50% es excesivo. La proporción 30s-1min es ideal.', feedbackIncorrecto: '❌ Ocultar limitaciones daña credibilidad cuando la audiencia las descubre. Dedicar 50% del tiempo es desproporcionado. Lo profesional: 30 segundos a 1 minuto reconociéndolas — suficiente para honestidad, no excesivo.' },
      { enunciado: 'Si te preguntan algo que NO probaste en tu proyecto, lo mejor es:', opciones: ['Inventar una respuesta convincente', 'Reconocer honestamente que no lo probaste y proponer agregarlo a mejoras futuras', 'Cambiar de tema rápido', 'Decir que la pregunta es irrelevante'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Reconocer + proponer mejora es phronesis técnica. Demuestra honestidad Y visión. Inventar es peligroso (te pueden refutar). Cambiar de tema es evasivo.', feedbackIncorrecto: '❌ Inventar puede dejarte mal parado. Cambiar de tema es evasivo. Decir que la pregunta es irrelevante es arrogante. Lo profesional: reconocer + proponer agregarlo. Es phronesis y construye credibilidad.' },
      { enunciado: 'En la sustentación, mostrar UNA evidencia técnica clave bien explicada vs cinco gráficos amontonados:', opciones: ['Cinco gráficos demuestran más trabajo', 'UN gráfico bien explicado comunica más rápido y deja huella', 'Es lo mismo, depende del gusto', 'Cinco gráficos solo si tienes tiempo'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La regla profesional: una idea, un gráfico, un mensaje. La audiencia procesa UN visual claro. Cinco amontonados se mezclan en la mente. Calidad > cantidad.', feedbackIncorrecto: '❌ Más cantidad NO es más calidad. La audiencia procesa MEJOR un gráfico claro que cinco amontonados. La regla profesional: UN gráfico clave bien explicado vale más que cinco mediocres.' },
      { enunciado: 'Si la audiencia critica tu conclusión, lo más sabio es:', opciones: ['Defenderse fuertemente', 'Escuchar completa la pregunta, agradecer, considerar la mejora propuesta', 'Ignorar la crítica', 'Cambiar tu conclusión inmediatamente sin pensar'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Defenderse cierra el aprendizaje. Cambiar sin pensar es ceder. Lo sabio: ESCUCHAR, agradecer, CONSIDERAR si tiene razón. Eso es humildad intelectual y crece tu trabajo.', feedbackIncorrecto: '❌ Defenderse cierra el diálogo. Ignorar es arrogante. Cambiar sin reflexión es ceder. Lo profesional: ESCUCHAR completa la crítica, AGRADECER, CONSIDERAR si tiene razón. Eso construye proyectos mejores.' },
      { enunciado: 'La diferencia entre "vender" y "sustentar" un proyecto es:', opciones: ['No hay diferencia', 'Vender enfatiza beneficios y oculta defectos; sustentar muestra evidencia y reconoce límites', 'Sustentar es más corto', 'Vender es más profesional'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. VENDER busca convencer y oculta lo malo. SUSTENTAR busca informar honestamente: aquí está el proyecto, aquí su evidencia, aquí sus límites. La sustentación construye credibilidad técnica; la venta, no.', feedbackIncorrecto: '❌ HAY diferencia importante: vender es persuasivo (oculta defectos, exagera beneficios); sustentar es honesto (muestra evidencia, reconoce límites). En contexto académico/profesional, sustentar > vender.' },
    ],
  }],

  postLectura: {
    reflexion: 'La honestidad técnica es habilidad que se entrena. ¿En qué situación de tu vida (académica, familiar, social) te ha sido difícil reconocer limitaciones honestamente?',
    transferencia: 'Mañana sustenta tu proyecto en 5 minutos cronometrados. Reconoce 2 limitaciones reales y propón 2 mejoras futuras. Recibe la crítica con apertura.',
    cierre: 'El mostrador del artesano y la sustentación digital comparten un principio: mostrar honestamente lo que se hizo, lo que falta, lo que se aprendió. La honestidad construye oficio. Cierre del periodo 2.',
  },

  saberAncestral: {
    saber:
      'El mostrador del artesano del Valle —el carpintero, el zapatero, el ceramista, la tejedora wayuu— era ritual semanal o mensual: la pieza terminada se mostraba al maestro y al cliente con honestidad técnica. "Aquí quedó la veta del tablón, no pude evitarla, queda visible." "Aquí el tinte salió más claro que en la muestra, en la próxima ajusto." Mostrar el oficio incluía mostrar las limitaciones. La sustentación digital de un proyecto técnico hereda esa ética: defender la decisión, mostrar la evidencia, reconocer límites, proponer mejora futura. Es honestidad técnica encarnada.',
    fuente: 'Mostrador del artesano en talleres del Valle, el Pacífico y la Guajira',
    preguntaPuente:
      '¿Qué hacía que el cliente confiara en el artesano que mostraba limitaciones honestamente? ¿Y qué pierde una sustentación que solo defiende y nunca reconoce nada?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La honestidad técnica es ciudadanía intelectual — defenderla en público es práctica democrática.',
      preguntaEspejo:
        '¿Estoy dispuesto a mostrar limitaciones de mi trabajo en público, o tiendo a esconderlas con discurso fluido?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Reconocer lo que no sabes ante una audiencia es virtud rara — más alta que el dominio aparente.',
      preguntaEspejo:
        '¿Cuántas veces este año he dicho "no sé" o "esto no funcionó" en una presentación? ¿Eso me hace menos creíble o más?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'En una infoesfera saturada de certezas vacías, la honestidad técnica es escasez valiosa.',
      preguntaEspejo:
        '¿Mi sustentación contribuye al mar de certezas infladas o aporta honestidad técnica que diferencia?',
    },
  },

  cincoDimensiones: {
    personal:
      'Cerraste el periodo con sustentación honesta — habilidad rara en el mundo adulto, entrenada aquí.',
    emocional:
      'Sentiste el nervio de mostrar limitaciones en público y lo sostuviste — eso entrena humildad madura, no sumisa.',
    ciudadana:
      'La sustentación con honestidad técnica es base de la deliberación democrática: defender y reconocer límites a la vez.',
    local:
      'Heredaste el ritual del mostrador del artesano: presentar la pieza con sus aciertos y sus límites visibles.',
    intergeneracional:
      'El artesano frente a su maestro y tú frente al curso comparten gramática: defender el oficio sin esconder lo que falta.',
  },
};

export default contenido;
