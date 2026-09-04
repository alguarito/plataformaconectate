/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 10
 * (sesión global 30).
 *
 * Auto-generado desde content/guias/11/11-3-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 10,
  titulo: 'Sustentación pública — el aprendiz frente a los mayores',
  resumen: 'La sustentación pública del proyecto emprendedor es la versión contemporánea del examen del aprendiz ante los mayores.',
  duracionMin: 90,
  subtema: 'Sustentación pública — el aprendiz frente a los mayores',
  preLectura: {
    porQueImporta: 'El criterio principal: que un miembro de la audiencia que no te conoce, al salir de tu sustentación, pueda decir "este estudiante aprendió un oficio y está listo para llevarlo al mundo".',
    preguntaDetonante: '¿Qué sabía el aprendiz al sentarse ante los mayores del oficio para defender su pieza maestra, que el estudiante novato olvida cuando confunde "sustentar" con "leer las slides"? ¿Y por qué la sustentación pública es el verdadero examen del bachillerato técnico, no la nota final escrita?',
    activacion: {
      titulo: 'Síntesis del viaje completo del grado 11',
      descripcion: 'Actividad 1 · ANALIZA — Síntesis del viaje completo del grado 11 (20 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Has recorrido 30 sesiones, 3 periodos, 10 sesiones del proyecto emprendedor.',
      siguiente: 'Tu manifiesto firmado y entregado es el cierre formal del bachillerato técnico, pero también el primer documento de tu vida profesional adulta.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación pública',
      definicion: 'Presentación del proyecto entero ante audiencia (docente, compañeros, posibles invitados externos). 15 minutos típicos: presentación + demo en vivo + Q&A. Es el rito de paso del proyecto emprendedor.',
      ejemplo: '15 min divididos: 8 min presentación con deck S6 actualizado + 4 min demo MVP en vivo + 3 min Q&A. Termina con manifiesto final entregado al docente.',
      emoji: '🎤'
    },
    {
      termino: 'Demo en vivo (no captura)',
      definicion: 'Mostrar el MVP funcionando en tiempo real, no con video pregrabado o captura. Permite a la audiencia ver bugs, ajustes, y la realidad sin maquillaje del producto.',
      ejemplo: 'En vez de mostrar video de la app funcionando, abres la app en pantalla compartida y la usas en vivo. Si algo falla, lo dices con honestidad. Es señal de proyecto real.',
      emoji: '📺'
    },
    {
      termino: 'Q&A (sesión de preguntas y respuestas)',
      definicion: 'Después de la presentación, el audiencia pregunta libremente. El aprendiz responde con honestidad: si no sabe algo, lo dice; si hay limitaciones, las reconoce. Q&A revela el nivel real de dominio.',
      ejemplo: 'Pregunta: "¿Y si tu costo variable crece más rápido?". Respuesta honesta: "En el modelo asumimos crecimiento lineal; si crece más rápido, ajustamos precio o bajamos margen. Aún no hemos validado ese escenario".',
      emoji: '❓'
    },
    {
      termino: 'Manifiesto final',
      definicion: 'Documento de 1 página que integra los 3 periodos de grado 11 (marca digital, automatización, emprendimiento). El aprendiz declara qué tipo de profesional digital quiere ser y firma como cierre del bachillerato técnico.',
      ejemplo: '"Yo, María Cárdenas, completé los 3 periodos de grado 11 en Tecnología. Mi declaración: quiero ser profesional digital que [X]. Me comprometo a [Y]. Firmado, 19 mayo 2026."',
      emoji: '📜'
    },
    {
      termino: 'Cierre del bachillerato técnico',
      definicion: 'La sustentación pública del proyecto integrador de G11·P3 marca el final del recorrido de Tecnología en colegio. Es rito de paso al mundo universitario o profesional. Lo construido aquí, queda.',
      ejemplo: 'Después de 6 años de Tecnología (6° a 11°), el manifiesto final firmado es la huella de qué tipo de profesional digital quieres ser. Lo guardas para revisarlo en universidad y trabajo.',
      emoji: '🎓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Estás listo para sustentar?',
      instrucciones: '5 preguntas sobre la sustentación pública del proyecto.',
      preguntas: [
        {
          enunciado: '¿Cuánto dura la sustentación pública estándar?',
          opciones: [
            '1 minuto.',
            '15 minutos: presentación + demo + Q&A.',
            '2 horas.',
            '1 segundo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 15 min: 8 min presentación + 4 min demo + 3 min Q&A. Tiempo suficiente para cubrir el proyecto entero con claridad.',
          feedbackIncorrecto: '15 min estándar. Estructura: presentación con deck + demo en vivo + Q&A. Cada parte con su tiempo definido.'
        },
        {
          enunciado: '¿Por qué demo en VIVO y no video pregrabado?',
          opciones: [
            'Para gastar tiempo.',
            'Es opcional.',
            'Para que la audiencia vea el MVP REAL, no maquillado. Si falla algo, lo dices con honestidad. Es señal de proyecto auténtico.',
            'Para parecer técnico.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Demo en vivo = MVP real. Video pregrabado oculta bugs. La autenticidad gana credibilidad. Errores en vivo respondidos con honestidad > video perfecto irreal.',
          feedbackIncorrecto: 'Demo en vivo = realidad sin maquillaje. Si falla algo, lo reconoces. Si funciona, se nota que es real. Video oculta; vivo revela.'
        },
        {
          enunciado: 'En Q&A te preguntan algo que NO sabes. ¿Qué haces?',
          opciones: [
            'Dices: \'No lo sé exactamente. Lo que sí sé es X. Voy a investigar Y\'. Honestidad y compromiso futuro.',
            'Inventas una respuesta.',
            'Cambias de tema.',
            'Te enojas.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Honestidad gana credibilidad. No saber + decirlo + comprometerse a investigar = madurez profesional. Inventar baja autoridad para siempre.',
          feedbackIncorrecto: 'Honestidad gana. "No sé, pero sí sé X, y voy a investigar Y" muestra madurez. Inventar destruye credibilidad si te cogen.'
        },
        {
          enunciado: '¿Qué es el manifiesto final?',
          opciones: [
            'Solo un papel.',
            'El logo del proyecto.',
            'Una camiseta.',
            '1 página integrando los 3 periodos de G11. Declaras qué tipo de profesional digital quieres ser. Firmado como cierre del bachillerato técnico.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Manifiesto = declaración firmada de identidad profesional. Integra los 3 periodos (marca + automatización + emprendimiento). Lo guardas para tu yo de 25 años.',
          feedbackIncorrecto: 'Manifiesto final = declaración firmada. Integra los 3 periodos de G11. Es huella del tipo de profesional digital que quieres ser. Lo conservas.'
        },
        {
          enunciado: '¿Por qué la sustentación es \'rito de paso\'?',
          opciones: [
            'Por tradición.',
            'Porque cierra 6 años de Tecnología (6° a 11°) y marca el paso al mundo universitario o profesional con un proyecto real.',
            'Es solo formalidad.',
            'Para tener nota.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Después de 6 años, sustentar tu MVP es el paso adulto. Defendiste un proyecto real ante audiencia. Después de esto, universidad o trabajo se sienten naturales.',
          feedbackIncorrecto: 'Rito de paso real. 6 años de Tecnología culminan en sustentar un proyecto propio ante audiencia. Te prepara para defender ideas en universidad y trabajo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi sustentación devuelve a mi comunidad lo aprendido, o lo guardo solo para mí?',
    transferencia: 'Tu manifiesto firmado y entregado es el cierre formal del bachillerato técnico, pero también el primer documento de tu vida profesional adulta.',
    cierre: 'Al terminar podrás: (1) analizar el viaje completo del grado 11 (3 periodos, 30 sesiones) identificando los 3-5 aprendizajes más importantes y los 2-3 errores más reveladores; (2) explicar con honestidad y claridad qué hace tu proyecto, cómo lo construiste, qué aprendiste, qué te…'
  },
  saberAncestral: {
    saber: 'En los talleres antiguos y en las comunidades indígenas del Pacífico, el paso de aprendiz a oficial nunca se daba en privado: ocurría en público, ante los mayores reunidos. El aprendiz traía su pieza maestra, la ponía en el centro, y los mayores del oficio se sentaban alrededor a examinarla. No era ceremonia decorativa: era interrogatorio profesional. Los mayores preguntaban: "¿por qué este ensamble así?, ¿qué pasa si la madera trabaja?, ¿cómo respondes si el cliente vuelve en dos años con un defecto?". El aprendiz no podía decir "no sé" sin perder la prueba: tenía que defender cada decisión con argumento técnico, ético y económico. Si la defensa era sólida, los mayores le entregaban el título del oficio y un nombre nuevo (oficial, maestro joven, compañero, según la tradición). Si la defensa flaqueaba, el aprendiz volvía al taller por otro año. La sabiduría era inquebrantable: el examen privado no certifica oficio; el oficio se certifica ante quienes lo conocen. Esa graduación pública es ritual ancestral, no invento universitario moderno.',
    preguntaPuente: '¿Qué sabía el aprendiz al sentarse ante los mayores del oficio para defender su pieza maestra, que el estudiante novato olvida cuando confunde "sustentar" con "leer las slides"? ¿Y por qué la sustentación pública es el verdadero examen del bachillerato técnico, no la nota final escrita?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El aprendiz que regresa al pueblo con saber asumido es el que cierra el ciclo de la liberación pedagógica.',
      preguntaEspejo: '¿Mi sustentación devuelve a mi comunidad lo aprendido, o lo guardo solo para mí?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La prueba pública es el único espejo verdadero del carácter; lo demás son ensayos.',
      preguntaEspejo: '¿Estoy entrando a la sustentación buscando pasar o buscando verme como soy ante una audiencia exigente?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Salir al mundo digital con responsabilidad asumida es el primer acto del ciudadano de la infosfera.',
      preguntaEspejo: '¿Salgo del grado 11 con habilidades digitales y responsabilidad asumida, o solo con habilidades sin la responsabilidad?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar el viaje completo del grado 11 (3 periodos, 30 sesiones) identificando los 3-5 aprendizajes más importantes y los 2-3 errores más reveladores; (2) explicar con honesti…',
    emocional: 'Es tentador querer pasar la sustentación sin riesgo.',
    ciudadana: 'La sustentación pública te transforma de estudiante que recibe en aprendiz que devuelve.',
    local: 'Antes de cerrar, mira la sustentación desde las cinco dimensiones humanas.',
    intergeneracional: 'Después de la sustentación, sales del bachillerato técnico como ciudadano de la infosfera: alguien capaz de operar herramientas digitales asumiendo responsabilidad por sus efectos.'
  }
};

export default contenido;
