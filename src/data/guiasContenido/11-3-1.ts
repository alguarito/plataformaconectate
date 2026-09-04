/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 1
 * (sesión global 21).
 *
 * Auto-generado desde content/guias/11/11-3-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 1,
  titulo: 'Ideación — un problema real de mi comunidad',
  resumen: 'La ideación en emprendimiento contemporáneo es exactamente lo opuesto de "se me ocurrió una idea genial".',
  duracionMin: 90,
  subtema: 'Ideación — un problema real de mi comunidad',
  preLectura: {
    porQueImporta: 'El criterio principal: que un emprendedor o consultor leyendo tu ficha pueda decir "este problema existe y vale la pena resolverlo" sin pedirte explicaciones adicionales.',
    preguntaDetonante: '¿Cómo sabía el tendero del barrio que su oficio era necesario antes de abrir la tienda? ¿Y qué pierde un estudiante de grado 11 cuando arranca su proyecto emprendedor con "se me ocurrió una idea" en lugar de "observé este dolor concreto en mi comunidad"?',
    activacion: {
      titulo: '10 problemas observados en mi territorio',
      descripcion: 'Actividad 1 · IDENTIFICA — 10 problemas observados en mi territorio (20 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Este periodo cierra el bachillerato técnico: construirás un proyecto emprendedor de punta a punta.',
      siguiente: 'Lleva la ficha de oportunidad lista y los datos de contacto de al menos 3 personas afectadas: en la sesión 2 vas a hacer entrevistas reales y necesitas poder llamarlas esta semana.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ideación basada en observación',
      definicion: 'Práctica disciplinada de identificar problemas reales antes de proponer soluciones. Lo opuesto a "se me ocurrió una idea genial". Métodos modernos (Design Thinking, Lean Startup) ponen observación al inicio.',
      ejemplo: 'En lugar de inventar una app porque suena cool, caminas el barrio 3 días observando qué falta. La idea sale de lo observado, no de la imaginación.',
      emoji: '👀'
    },
    {
      termino: 'Problema bien definido (5 partes)',
      definicion: 'Problema con 5 elementos: quién lo sufre, qué duele medible, cuándo ocurre, por qué no resuelto, qué hacen hoy para sobrellevarlo. Sin las 5 partes, es idea suelta, no problema.',
      ejemplo: 'Bien: "Don Aurelio (tendero) pierde 2h/lunes haciendo cuentas a mano; sin Excel; la academia más cercana queda a 40 min". Las 5 partes claras.',
      emoji: '🎯'
    },
    {
      termino: 'Enamórate del problema, no de la solución',
      definicion: 'Regla profesional. Quien se enamora de su idea defiende soluciones que nadie pidió; quien se enamora del problema pivotea hasta encontrar la solución que funciona.',
      ejemplo: 'Te enamoras del problema "abuelas con dificultad en cajero". Si la app falla porque no usan smartphone, pivoteas a "voluntarios en el banco". El problema sigue; la solución cambia.',
      emoji: '💝'
    },
    {
      termino: 'Ficha de oportunidad',
      definicion: 'Documento corto con 5 campos: problema, afectados, causa visible, consecuencia medible, hipótesis de solución. Primer entregable del proceso emprendedor y base de las entrevistas de validación.',
      ejemplo: 'Problema: cuentas manuales en tiendas. Afectados: 3 tenderos La Merced. Causa: falta capacitación Excel. Consecuencia: 8h/semana perdidas. Hipótesis: tutorial práctico 90 min.',
      emoji: '📋'
    },
    {
      termino: 'Tradición campesina del emprendimiento',
      definicion: 'El tendero, ebanista, partera del Valle del Cauca empezaban con: caminar territorio + nombrar dolor concreto + responder con oficio reproducible. Sabiduría que precede al método moderno.',
      ejemplo: 'El ebanista de Cartago no abrió taller "porque se le ocurrió". Lo abrió porque las casas necesitaban puertas duraderas y él sabía trabajar madera. Necesidad real + oficio respondedor.',
      emoji: '🪚'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes identificar un buen problema para emprender?',
      instrucciones: '5 preguntas para verificar que entiendes la ideación basada en observación.',
      preguntas: [
        {
          enunciado: 'Tu amigo dice \'tengo una idea de app genial, vamos a hacerla\'. ¿Qué le respondes?',
          opciones: [
            'Vamos, programémosla ya.',
            'Pidamos plata a un inversionista.',
            'Antes de programar: ¿qué problema resuelve? ¿A quién duele? ¿Entrevistamos primero?',
            'Subámosla a Instagram primero.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Enamorarse del problema, no de la idea. Primero validas que el problema existe y duele; después construyes.',
          feedbackIncorrecto: 'Antes de construir: observa y valida. Regla moderna: problema primero, solución después. Tu amigo se enamoró de la idea sin verificar.'
        },
        {
          enunciado: '¿Cuál es un problema BIEN definido?',
          opciones: [
            'Las abuelas (60+) del barrio La Merced pierden 45 min en cada visita al banco porque las filas no priorizan adultos mayores; lo asumen como inevitable.',
            'La gente pierde tiempo en el banco.',
            'Internet es lento.',
            'Necesitamos una app.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Tiene las 5 partes: quién, qué duele, cuándo, por qué no resuelto, qué hacen hoy. Eso es problema bien definido.',
          feedbackIncorrecto: 'Un problema bien definido tiene 5 partes específicas: quién, qué duele medible, cuándo, por qué no resuelto, qué hacen hoy.'
        },
        {
          enunciado: 'Tu idea inicial no convence en las entrevistas. ¿Qué haces?',
          opciones: [
            'Insisto, mi idea es buena.',
            'Pivoteo: mantengo el problema, busco otra solución.',
            'Cambio de problema.',
            'Abandono el proyecto.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Pivotear es señal de emprendedor maduro. Te enamoraste del problema; la solución es ajustable.',
          feedbackIncorrecto: 'Pivotear: cambias solución, mantienes problema. Insistir en una solución que no funciona es enamoramiento, no oficio.'
        },
        {
          enunciado: '¿Qué tienen en común el ebanista de Cartago y un emprendedor digital?',
          opciones: [
            'Nada.',
            'El ebanista usaba computador.',
            'Es metáfora forzada.',
            'Ambos parten de necesidad real + oficio respondedor. No de \'idea genial\'.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. La sabiduría del oficio campesino antecede al método moderno. El método Lean Startup redescubre lo que las abuelas ya sabían.',
          feedbackIncorrecto: 'Necesidad real + oficio respondedor = emprendimiento sano. Aplica al ebanista de 1950 y al emprendedor digital de 2026.'
        },
        {
          enunciado: 'Tu ficha de oportunidad debe tener...',
          opciones: [
            'Solo el problema.',
            'Solo la solución.',
            'Problema + afectados + causa + consecuencia + hipótesis (5 campos).',
            'Solo la idea genial.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Los 5 campos te obligan a especificar. Una ficha incompleta produce entrevistas pobres.',
          feedbackIncorrecto: '5 campos: problema + afectados + causa + consecuencia + hipótesis. Saltar uno hace que el proyecto se construya sobre arenas movedizas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De mis 10 problemas, ¿cuál elegí por rentabilidad y cuál por dolor humano real? ¿Mi elección honra a quien sufre o a mi comodidad?',
    transferencia: 'Lleva la ficha de oportunidad lista y los datos de contacto de al menos 3 personas afectadas: en la sesión 2 vas a hacer entrevistas reales y necesitas poder llamarlas esta semana.',
    cierre: 'Al terminar podrás: (1) identificar 10 problemas reales observados en Cartago, en tu casa, colegio o barrio, sin censurarlos por dificultad; (2) analizar cada problema con la rejilla de 5 partes (quién, qué duele, cuándo, por qué no resuelto, qué hace hoy); (3) evaluar los 10 can…'
  },
  saberAncestral: {
    saber: 'En los pueblos del Valle del Cauca, los oficios no nacían de la imaginación de un emprendedor genial: nacían de escuchar la queja del vecino. El tendero abría tienda porque la abuela del barrio caminaba dos horas para comprar panela; el ebanista ponía taller porque las casas nuevas necesitaban puertas que duraran; la partera aprendía el oficio porque las mujeres morían dando a luz lejos del hospital. El emprendimiento campesino y barrial empezaba con tres prácticas: (1) caminar el territorio escuchando lo que falta; (2) nombrar con claridad el dolor concreto, no la idea abstracta; (3) responder con un oficio reproducible, no con una solución improvisada. No había startup ni pitch: había necesidad real más oficio que respondía. Esa tradición se traduce hoy en una palabra fea pero exacta: ideación basada en observación.',
    preguntaPuente: '¿Cómo sabía el tendero del barrio que su oficio era necesario antes de abrir la tienda? ¿Y qué pierde un estudiante de grado 11 cuando arranca su proyecto emprendedor con "se me ocurrió una idea" en lugar de "observé este dolor concreto en mi comunidad"?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Los problemas que el sistema invisibiliza son los que más merecen oficio.',
      preguntaEspejo: 'De mis 10 problemas, ¿cuál elegí por rentabilidad y cuál por dolor humano real? ¿Mi elección honra a quien sufre o a mi comodidad?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Mira las cosas como son, no como te gustaría que fueran.',
      preguntaEspejo: 'En mi ficha, ¿estoy describiendo el problema como lo vi, o como me conviene que sea para que mi idea funcione?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Elegir qué problema atender es la primera decisión ética del oficio digital.',
      preguntaEspejo: '¿Mi proyecto atiende un problema porque importa, o porque era el más conveniente para sacar la nota? ¿Soy capaz de declararlo con honestidad?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar 10 problemas reales observados en Cartago, en tu casa, colegio o barrio, sin censurarlos por dificultad; (2) analizar cada problema con la rejilla de 5 partes (quié…',
    emocional: 'Es tentador inflar el problema elegido para que parezca grande, o reducirlo para que parezca fácil.',
    ciudadana: 'Tu elección de hoy es ética.',
    local: 'Antes de cerrar, mira la elección desde las cinco dimensiones humanas.',
    intergeneracional: 'En un mundo lleno de necesidades, cada hora invertida en un problema es una hora no invertida en otro.'
  }
};

export default contenido;
