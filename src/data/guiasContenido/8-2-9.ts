/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 9
 * (sesión global 19).
 *
 * Auto-generado desde content/guias/8/8-2-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 9,
  titulo: 'Proyecto de monitoreo — el micro:bit como vigía',
  resumen: 'Como el conocimiento de los lectores del cielo: leer el ambiente para servir a la comunidad. Aplicas TODO lo del periodo en un proyecto de monitoreo de la huerta escolar.',
  duracionMin: 90,
  subtema: 'Proyecto · Monitoreo · Logos como razón universal',
  preLectura: {
    porQueImporta: 'Construir un proyecto integrador es la habilidad de quien lleva ideas a la realidad. Te servirá para emprender, para liderar grupos, para resolver problemas comunitarios reales con tecnología.',
    preguntaDetonante: '¿Qué del logos campesino — la lectura paciente del cielo — podemos llevar al monitoreo ambiental con sensores digitales?',
    activacion: {
      titulo: 'El proyecto que cambia algo',
      descripcion: 'En 5 minutos: en parejas identifiquen un problema real del colegio que un proyecto de monitoreo podría aliviar (cafetería, biblioteca, baños, huerta). Formulen la pregunta de monitoreo.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 18 simulaste sistemas de alerta ambiental.',
      siguiente: 'En la sesión 20 sustentarás tu proyecto ante la comunidad.'
    }
  },
  conceptosClave: [
    {
      termino: 'Proyecto de monitoreo',
      definicion: 'Sistema que registra una variable del entorno durante un período, con disciplina de frecuencia y registro, para producir conocimiento.',
      ejemplo: 'Temperatura del aula medida cada hora durante 3 jornadas. 30 lecturas que permiten detectar el momento más caluroso.',
      emoji: '🛰️'
    },
    {
      termino: 'Variable bien definida',
      definicion: 'Una sola magnitud medida con consistencia, no una idea vaga. Permite comparar las lecturas entre sí.',
      ejemplo: 'Temperatura del aula medida con el mismo sensor a la misma altura. No "el clima" ni "cómo se siente el aula".',
      emoji: '🎯'
    },
    {
      termino: 'Frecuencia constante',
      definicion: 'Tomar las lecturas en intervalos regulares (cada hora, cada 30 minutos), no cuando uno se acuerda. Da contexto temporal al dato.',
      ejemplo: 'El vigía pasa cada hora aunque "no pase nada". Sin esa regularidad, la bitácora pierde valor comparativo.',
      emoji: '⏱️'
    },
    {
      termino: 'Hallazgo',
      definicion: 'Patrón detectado al releer la bitácora al final del período. No se ve durante una medición individual, solo al mirar el conjunto.',
      ejemplo: 'El aula supera 28 grados todos los días entre 1pm y 3pm. Hallazgo que justifica una propuesta de ventilación.',
      emoji: '🔍'
    },
    {
      termino: 'Propuesta razonada',
      definicion: 'Acción concreta derivada del hallazgo, no opinión libre. El dato sostiene la propuesta y la propuesta dice qué hacer.',
      ejemplo: 'Hallazgo, calor entre 1 y 3 pm. Propuesta, abrir ventanas opuestas a las 12:30 para generar corriente cruzada antes del pico.',
      emoji: '📝'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes monitorear como el vigía nocturno?',
      instrucciones: '5 preguntas para verificar que tu proyecto produce conocimiento, no solo datos.',
      preguntas: [
        {
          enunciado: '¿Cuál es la diferencia entre 30 mediciones con frecuencia constante y 100 mediciones desordenadas?',
          opciones: [
            'Ninguna, importa la cantidad',
            'Las 30 con frecuencia constante permiten comparar; las 100 desordenadas pierden contexto',
            'Las 100 siempre son mejores',
            'Las 30 siempre son peores'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La disciplina temporal es lo que convierte una serie de mediciones en conocimiento comparable.',
          feedbackIncorrecto: 'La calidad del monitoreo depende de la frecuencia constante, no del número bruto. 30 medidas en horarios fijos valen más que 100 al azar.'
        },
        {
          enunciado: '¿Qué propiedad falta en "el clima del aula es variable"?',
          opciones: [
            'Frecuencia',
            'Registro',
            'Variable bien definida',
            'Análisis'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. "El clima" es vago. Una variable bien definida sería temperatura, humedad o nivel de luz, medida con la misma técnica.',
          feedbackIncorrecto: 'Falta definir la variable. "Clima" no es medible; temperatura sí lo es, con el mismo sensor a la misma altura.'
        },
        {
          enunciado: 'Al final del período, ¿qué transforma la bitácora en conocimiento?',
          opciones: [
            'Releerla buscando patrones (hallazgos)',
            'Imprimirla',
            'Pasarla en limpio',
            'Guardarla en una carpeta'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El conocimiento aparece al releer y detectar patrones. Sin esa lectura, la bitácora es solo lista de números.',
          feedbackIncorrecto: 'La bitácora se vuelve conocimiento cuando se relee buscando patrones. Sin análisis, los datos son inertes.'
        },
        {
          enunciado: '¿Qué hace que una propuesta sea razonada y no opinión libre?',
          opciones: [
            'Que sea creativa',
            'Que sea corta',
            'Que sea bonita',
            'Que esté sostenida por un hallazgo concreto de la bitácora'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La propuesta razonada nace del dato. Sin hallazgo concreto, es opinión.',
          feedbackIncorrecto: 'Una propuesta razonada se sostiene en un hallazgo concreto de la bitácora. El dato justifica la acción.'
        },
        {
          enunciado: '¿Cuántas mediciones mínimas pide la guía para un proyecto de monitoreo válido?',
          opciones: [
            '5',
            '30',
            '10',
            '300'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 30 mediciones, 10 por jornada durante 3 jornadas. Da masa suficiente para detectar patrones.',
          feedbackIncorrecto: 'Son 30 mediciones (10 por jornada en 3 días). Menos no permite detectar patrones; muchas más son carga sin necesidad escolar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Un proyecto que SIRVE a la comunidad es distinto a uno que LUCE en presentación. ¿Tu proyecto cuida algo concreto del colegio o de tu barrio? ¿A quién beneficia más allá de la nota?',
    transferencia: 'Esta semana: ejecuta TU proyecto de monitoreo. 7 días de lecturas (simuladas o reales), tabla, gráfico, recomendación. Compártelo con un compañero antes de la sustentación.',
    cierre: 'El logos campesino y el proyecto digital comparten propósito: leer el mundo para cuidarlo. La tecnología que sirve es la que se calibra al territorio y a la comunidad.'
  },
  saberAncestral: {
    saber: 'En los barrios populares de Cartago y en los corregimientos del Valle del Cauca había una figura que sostenía la seguridad del lugar sin que nadie le pagara salario formal: el vigía nocturno, también llamado sereno en algunos pueblos. El vigía no tenía celular, ni cámara, ni dispositivo electrónico: tenía un pito de hojalata, una linterna de baterías, un cuaderno cuadriculado y una rutina inquebrantable. Su oficio era simple en apariencia, complejo en disciplina: recorrer el barrio una vez por hora durante toda la noche, escuchar lo que sonaba, contar lo que veía, y anotar todo en su cuaderno. "11:30 pm, calle 8: 2 perros ladrando esquina norte". "12:30 am, calle 8: tranquilo". "1:30 am, calle 8: motocicleta blanca pasó dos veces". Esa bitácora del vigía no era trámite: era conocimiento acumulado del barrio. Al final de la semana, releyendo las páginas, el vigía podía decir: "la motocicleta blanca pasó tres noches seguidas a la misma hora", y eso ya era una pista. El vigía monitoreaba con disciplina y producía conocimiento, no por intuición sino por anotación continua. Esa práctica ancestral es la misma que el monitoreo digital moderno formaliza con sensores.',
    fuente: 'Lectores del cielo campesinos en haciendas, veredas y resguardos colombianos',
    preguntaPuente: '¿Qué sabía el vigía nocturno al anotar cada hora aunque "no pasara nada", que el novato olvida cuando hace una medición ocasional y cree que ya monitoreó? ¿Y por qué 30 mediciones bien tomadas valen más que 100 mediciones sin disciplina temporal?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El monitoreo que cuida al usuario es liberador; el que lo vigila sin saberlo es opresor disfrazado de tecnología.',
      preguntaEspejo: 'Mi proyecto, ¿cuida al aula o vigila a alguien? ¿Las personas afectadas sabrían que existe y aceptarían su funcionamiento?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La disciplina de medir cada vez aunque no pase nada es virtud profesional; medir solo cuando uno se acuerda es vanidad.',
      preguntaEspejo: '¿Estoy midiendo con la disciplina del vigía o solo cuando me acuerdo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los sistemas de monitoreo bien diseñados son la nueva infraestructura de información del oficio digital.',
      preguntaEspejo: 'Mi sistema de monitoreo, ¿produce información útil para decisiones, o solo recolecta datos por recolectar?'
    }
  },
  cincoDimensiones: {
    personal: 'Aplicaste el periodo completo en UN proyecto con propósito comunitario — paso decisivo hacia la madurez técnica.',
    emocional: 'Resististe la tentación del proyecto "para que se vea bien" — elegiste el que sirve a alguien real.',
    ciudadana: 'Tu monitoreo de la huerta es ciudadanía tecnológica concreta: tu técnica al servicio de una necesidad real.',
    local: 'Heredaste el logos campesino del lector del cielo: leer el ambiente para cuidarlo, no para presumir.',
    intergeneracional: 'El abuelo lector de signos y tu micro:bit comparten propósito: servir a quien depende del territorio común.'
  }
};

export default contenido;
