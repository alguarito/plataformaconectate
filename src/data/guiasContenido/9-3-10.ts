/**
 * Contenido enriquecido — Grado 9 · Periodo 3 · Sesión 10
 * Tema: Cosecha P3 — sustentación del mini-estudio (capstone del año).
 * Profundidad MILC v3 PRO completa, alineada con content/guias/9/9-3-10.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 10,
  titulo: 'Cosecha P3 — sustentación del mini-estudio',
  ocultarPDF: false,
  resumen:
    'Cierre del año: presentación de 10 min con 6-8 diapositivas que integra pregunta, datos, análisis, gráficos, 3 insights y decisión propuesta, defendida ante el grupo con Q&A. Es la prueba integral del oficio de pensar con datos.',
  duracionMin: 90,
  subtema: 'Datos · Rendición de cuentas',

  saberAncestral: {
    saber:
      'El cierre del año retoma todas las anclas anteriores: la cosecha contada del campesino, el inventario del almacén, la criba de granos de la abuela, la balanza de la plaza, la lectura del cielo. El estudiante ya no solo usa Excel: piensa con datos como un campesino piensa con su libreta de campo — para decidir, no para presumir. La sustentación frente al grupo es el equivalente contemporáneo del relato del año productivo que hacían los mayores en la junta comunitaria: contar qué se sembró, qué rindió, qué falló, qué hacer distinto en el ciclo siguiente.',
    fuente: 'Relato del año productivo en la junta comunitaria del Valle del Cauca, integrando todas las anclas del periodo',
    preguntaPuente:
      '¿Cómo contaba el campesino mayor el balance del año en la junta comunitaria sin diapositivas ni proyector? ¿Y qué pierde un estudiante que termina el año con muchas hojas de Excel pero sin haber sustentado nunca una decisión real frente a una audiencia que pregunta?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Relato del año productivo', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Inventario de cosecha', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía de la sustentación', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Sustenta y responde Q&A', duracionMin: 40 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Cosecha, reflexión y compromiso', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Sin sustentación, el aprendizaje queda en privado. La capacidad de defender públicamente una decisión con datos es competencia profesional, ciudadana y vital. Esta es la última sesión del año: el capstone.',
    preguntaDetonante:
      'Si tuvieras 10 minutos con el rector, un padre de familia desconocido y un compañero de otro curso, ¿cómo les contarías tu mini-estudio para que entiendan tu decisión y te crean?',
    activacion: {
      titulo: 'Relato del año productivo',
      descripcion:
        'En 3 minutos: cada estudiante cuenta en voz alta a su compañero "qué cosechó este periodo con los datos": una pregunta, un dato y una decisión. Sin diapositivas. Solo voz.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 9 produjiste el reporte de 3 insights. Hoy integras todo el periodo en una sustentación de 10 minutos ante el grupo.',
      siguiente:
        'El año cierra aquí. El oficio sigue: cada vez que aparezca una pregunta cotidiana, repite el ciclo recoge → limpia → analiza → grafica → escribe insight → decide.',
    },
  },

  conceptosClave: [
    {
      termino: 'Regla 1-1-20',
      definicion:
        'Cada diapositiva tiene 1 idea, 1 imagen, máximo 20 palabras. Si tiene más, divídela o recórtala.',
      ejemplo:
        'Diapositiva "Datos": 1 frase con origen y tamaño, 1 ícono o imagen, listo. No párrafo.',
      emoji: '📐',
    },
    {
      termino: '7 momentos de la sustentación',
      definicion:
        'Portada, contexto, datos, análisis, 3 insights (3 diapositivas o 1), decisión y cierre. Q&A en vivo, no en diapositiva.',
      ejemplo:
        'Total 6-8 diapositivas para 10 minutos: ~1 minuto promedio por diapositiva.',
      emoji: '🗂️',
    },
    {
      termino: 'Limitaciones declaradas',
      definicion:
        'Diapositiva o frase que reconoce qué no alcanzaste a estudiar, qué quedó por fuera, qué muestra es chica. El crítico las verá; mejor decirlas tú primero.',
      ejemplo:
        '"Mi muestra fue de 25 estudiantes del 9B; no incluye 9A ni 9C — la conclusión vale solo para 9B".',
      emoji: '🛡️',
    },
    {
      termino: '3 preguntas duras anticipadas',
      definicion:
        'Antes de presentar, escribe las 3 preguntas críticas que un revisor podría hacer. Si no tienes respuesta honesta a las 3, la sustentación es frágil.',
      ejemplo:
        '"¿Cómo sabes que la muestra es representativa?", "¿Qué pasaría si el dato sucio se contara distinto?", "¿Por qué tu decisión y no la opuesta?".',
      emoji: '🎯',
    },
    {
      termino: '"No lo sé" con criterio',
      definicion:
        'Respuesta honesta cuando una pregunta del Q&A excede tu trabajo. Se dice limpio, sin disculpas largas. Es virtud, no derrota.',
      ejemplo:
        '"Esa correlación no la investigué. Sería buena pregunta para extender el estudio el próximo año".',
      emoji: '🙏',
    },
    {
      termino: 'Cierre con decisión',
      definicion:
        'La última diapositiva nombra la decisión propuesta + quién + plazo. La sustentación cierra en acción, no en agradecimiento.',
      ejemplo:
        '"Propongo a coordinación revisar la ruta del barrio Macarena en las próximas 4 semanas".',
      emoji: '✅',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Inventario de cosecha',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Pon sobre la mesa todo el trabajo del periodo: tabla original, tabla limpia, fórmulas, filtros, tabla dinámica, gráficos, reporte de insights.',
        'Para cada pieza pregunta: ¿entra en la sustentación o se queda fuera?',
        'Una sustentación de 10 min admite máximo 8 piezas — tienes que cortar.',
        'Marca con ✓ las 6-8 que entran y con ✗ las que se descartan, justificando cada decisión.',
      ],
      cuaderno: {
        titulo: 'Inventario de cosecha',
        formato: 'Tabla 3 columnas (Pieza | ¿Entra? ✓ o ✗ | Por qué), 8-12 filas',
        extension: '8-12 filas',
      },
      criterios: [
        'Hice inventario completo del periodo',
        'Marqué 6-8 piezas que entran y el resto se descarta',
        'Cada decisión justificada en 1 frase',
        'Reconozco lo descartado como decorativo, no por descuido',
      ],
    },
    {
      numero: 2,
      verbo: 'EVALÚA',
      titulo: 'Anatomía y preguntas duras',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Esboza las 6-8 diapositivas siguiendo los 7 momentos.',
        'Asigna tiempos por diapositiva (objetivo total: 10 min).',
        'Anota 3 preguntas duras que un crítico podría hacer en el Q&A.',
        'Prepara la respuesta a cada una en 1-2 frases (incluye "no lo sé" con criterio si aplica).',
      ],
      cuaderno: {
        titulo: 'Anatomía y preguntas duras',
        formato: 'Índice de 6-8 diapositivas con tiempos + 3 preguntas duras + 3 respuestas',
        extension: '1 página',
      },
      criterios: [
        'Índice de diapositivas con tiempo por cada una',
        'Total entre 8 y 12 minutos',
        '3 preguntas duras escritas',
        '3 respuestas honestas preparadas',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Produce y ensaya las diapositivas',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Produce las 6-8 diapositivas siguiendo regla 1-1-20.',
        'Incluye 1 diapositiva (o frase) con limitaciones declaradas.',
        'Cierra con decisión propuesta + quién + plazo.',
        'Ensaya al menos 1 vez en voz alta cronometrando.',
      ],
      cuaderno: {
        titulo: 'Producción + ensayo',
        formato: 'Notas del ensayo: tiempo real, qué corregir, qué simplificar',
        extension: 'Notas del ensayo',
      },
      criterios: [
        '6-8 diapositivas con regla 1-1-20',
        'Limitaciones declaradas, no escondidas',
        'Cierre con decisión + quién + plazo',
        'Al menos 1 ensayo cronometrado',
      ],
    },
    {
      numero: 4,
      verbo: 'EXPLICA',
      titulo: 'Sustenta ante el grupo y responde Q&A',
      tiempoMin: 15,
      modalidad: 'equipo',
      pasos: [
        'Sustenta tus 10 minutos ante el grupo respetando tiempos.',
        'Responde al menos 2 preguntas del Q&A con honestidad.',
        'Si una pregunta excede tu trabajo, di "eso no lo sé" con criterio.',
        'Anota la retroalimentación del docente y de al menos 1 compañero.',
      ],
      cuaderno: {
        titulo: 'Sustentación y Q&A',
        formato: 'Tiempo real + 2 preguntas recibidas + retroalimentación + 1 ajuste para próxima vez',
        extension: '1 página',
      },
      criterios: [
        'Tiempo total entre 8 y 12 min',
        'Al menos 2 preguntas respondidas',
        'Las limitaciones aparecieron en sustentación',
        'Recibí retroalimentación específica',
        'Anoté qué ajustaría para una próxima sustentación',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica sustentación',
      instrucciones:
        '5 preguntas para confirmar criterios de sustentación profesional. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Por qué declarar las limitaciones del estudio en lugar de esconderlas?',
          opciones: [
            'Por humildad académica',
            'Porque el crítico las verá igual — declararlas primero te da credibilidad y control narrativo',
            'Por costumbre',
            'No es necesario',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Esconder limitaciones produce auditoría hostil; declararlas convierte al crítico en interlocutor.',
          feedbackIncorrecto:
            'Las limitaciones se ven solas. Declararlas primero es estrategia, no debilidad: te da credibilidad y reduce el ataque.',
        },
        {
          enunciado: '¿Cuál es la regla "1-1-20" en una diapositiva?',
          opciones: [
            '1 hora, 1 imagen, 20 personas',
            '1 idea, 1 imagen, máximo 20 palabras',
            '1 gráfico, 1 tabla, 20 datos',
            '1 minuto, 1 frase, 20 segundos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La diapositiva apoya tu voz, no la reemplaza. Más de 20-25 palabras suele ser señal de pánico.',
          feedbackIncorrecto:
            '1 idea, 1 imagen, ≤20 palabras. Quien lee la diapositiva pierde a la audiencia.',
        },
        {
          enunciado: 'En el Q&A, una pregunta excede tu trabajo. ¿Qué dices?',
          opciones: [
            'Inventas algo creíble',
            'Te disculpas largamente',
            '"Eso no lo investigué — sería buena pregunta para extender el estudio"',
            'Cambias de tema',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. "No lo sé" con criterio es virtud, no derrota. Defender con orgullo herido es lo único que la audiencia recuerda mal.',
          feedbackIncorrecto:
            'Honestidad limpia: "eso no lo investigué". El ego sereno produce respuestas que la audiencia respeta.',
        },
        {
          enunciado: '¿Con qué debe cerrar tu sustentación?',
          opciones: [
            'Agradecimientos',
            'La decisión propuesta + quién + plazo',
            '"Gracias por su atención"',
            'Un meme',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La sustentación cierra en acción, no en cortesía. La decisión es el insight final de todo el año.',
          feedbackIncorrecto:
            'Decisión + quién + plazo. La cortesía está bien, pero el cierre profesional nombra acción concreta.',
        },
        {
          enunciado: 'En el saber ancestral del relato del año productivo, ¿qué aplica?',
          opciones: [
            'Nada — son contextos distintos',
            'Sustentar es rendir cuentas comunitarias: contar qué se sembró, qué rindió, qué falló y qué hacer distinto',
            'Que las juntas comunitarias eran cortas',
            'Que basta con datos',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El campesino mayor rendía cuentas sin diapositivas. Tú las rindes con datos. Mismo gesto comunitario.',
          feedbackIncorrecto:
            'Rendir cuentas es oficio comunitario antiguo. La sustentación profesional es su versión contemporánea con datos.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'El año cerró aquí. El oficio sigue. Cuando aparezca una pregunta cotidiana que merezca dato — gastos, hábitos, asistencia, encuesta del salón — repite el ciclo: recoge, limpia, analiza, grafica, escribe insight, decide. La phronesis se entrena un ciclo a la vez.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda sustentación pública debe nombrar a quienes no están presentes en la audiencia.',
      preguntaEspejo:
        'En mi sustentación, ¿hablo solo a los que están en el aula o nombro también a quienes no están y a quienes la decisión les caería encima?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Defender sin ego es virtud; defender con orgullo herido es derrota.',
      preguntaEspejo:
        '¿Cómo recibí las preguntas duras del Q&A? ¿Defendí con argumento o con orgullo herido? ¿Qué hubiera dicho si hubiera podido escuchar 5 segundos más antes de responder?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Toda sustentación pública con datos es un contrato implícito con quien escucha.',
      preguntaEspejo:
        'Mi sustentación, ¿honra el contrato implícito con la audiencia? ¿Dije con claridad de dónde vienen mis datos, cómo se podrían reproducir, y qué no alcancé a estudiar?',
    },
  },

  cincoDimensiones: {
    personal:
      'Te llevas al año siguiente la capacidad de defender públicamente una decisión con datos — competencia profesional y vital para presupuestos, proyectos personales y propuestas comunitarias.',
    emocional:
      'Resististe la tentación del lucimiento. Sustentar con limitaciones declaradas exige humildad activa y entrenamiento del ego sereno.',
    ciudadana:
      'Rendir cuentas públicas con datos es virtud democrática. Lo que practicaste en el aula es lo que la sociedad necesita en política, periodismo y servicio público.',
    local:
      'El campesino mayor del Valle, el tendero del barrio, la abuela de la libreta: el relato del año productivo es oficio comunitario heredado. Tu sustentación lo continúa.',
    intergeneracional:
      'Lo que la junta comunitaria hacía en voz, tú lo haces con diapositivas. La rendición de cuentas honesta es virtud que se hereda y se devuelve mejorada.',
  },
};

export default contenido;
