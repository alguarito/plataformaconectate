/**
 * Contenido web del proyecto integrador · Grado 7 · Período 3
 *
 * Auto-generado desde content/proyectos/7-3.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 7,
  periodo: 3,
  clave: '7-3',
  titulo: 'Proyecto integrador · Consejeros digitales: IA con criterio para mi salón',
  tituloPortada: 'Consejeros digitales — IA con criterio',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Usa modelos de lenguaje (LLMs) con criterio para asistir un trabajo, declarando honestamente el uso, verificando la información y manteniendo voz propia (MEN, T&I 7°).',
  estrategia: 'Trabajo en equipo + IA responsable + reflexión ética',
  duracionSemanas: 5,
  modalidad: 'equipo de 3',
  reto: 'Tu equipo de 3 estudiantes se convierte en consejeros digitales del salón: produce un informe breve con asistencia de IA y verificación humana sobre un tema del barrio o el colegio. Cierra el periodo con una guía de prompts útiles para grado 7° y un decálogo ético del uso de IA firmado por el salón. Todo aplicando los 10 aprendizajes del periodo 3.',
  insumos: [
    'Cuaderno físico de cada integrante con sus 10 sesiones del periodo 3',
    'Acceso a al menos 1 modelo de lenguaje en navegador (Claude, ChatGPT o Gemini)',
    'Acceso a Word, Google Docs o LibreOffice Writer para el informe',
    'Cartulinas o papel grande para la guía de prompts y el decálogo',
    'Acceso a Outlook o correo institucional para entregar al profe',
    'Acuerdo de equipo sobre el tema del informe (firmado por los 3)'
  ],
  anclaje: 'En el barrio de Cartago, cada cuadra tenía su consejero — doña Mercedes para educación, don Lucho para asuntos técnicos, doña Esperanza para salud familiar. No decidían por ti; te ayudaban a decidir mejor. La gente los escuchaba, verificaba con su propio criterio y decidía. Hoy hay un nuevo consejero al que millones acuden cada día: la IA. Tu equipo asume el oficio del consejero digital: usar la IA con criterio, declarar honestamente, verificar siempre, y mantener la voz propia. La herramienta es nueva; el saber del consejero del barrio sigue vivo.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'Apertura: el consejero del barrio y la IA'
    },
    {
      sesion: 2,
      titulo: '¿Qué es la IA y dónde está?'
    },
    {
      sesion: 3,
      titulo: 'Tipos de IA'
    },
    {
      sesion: 4,
      titulo: 'Cómo aprende una IA'
    },
    {
      sesion: 5,
      titulo: 'Modelos de lenguaje (LLMs)'
    },
    {
      sesion: 6,
      titulo: 'Prompting básico (contexto + rol + ejemplo + formato)'
    },
    {
      sesion: 7,
      titulo: 'Prompting avanzado (pasos, restricciones, iteración)'
    },
    {
      sesion: 8,
      titulo: 'Ética de la IA (sesgo, alucinación, deshonestidad, privacidad)'
    },
    {
      sesion: 9,
      titulo: 'IA y mis tareas: declaración honesta'
    },
    {
      sesion: 10,
      titulo: 'Cosecha: proyecto con IA responsable'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Informe breve con IA responsable (Dussel)',
      queEntregas: 'Un informe de 3 páginas (Word, Google Docs o LibreOffice) sobre un tema real del barrio o del colegio (ejemplo: "Los oficios del barrio que están desapareciendo", "Tres lugares del colegio que necesitan mejora", "Historia de un grupo musical del Valle"). El informe tiene: (a) portada (título + autores + grado + fecha); (b) introducción (1 párrafo); (c) 2 secciones con subtítulo y autor; (d) cierre (1 párrafo en equipo); (e) sección final "Cómo trabajamos con IA" donde declaran qué modelo usaron, en qué partes, qué editaron a mano y qué verificaron contra fuentes externas; (f) lista de fuentes citadas (mínimo 2 fuentes externas a la IA).',
      comoSeHace: [
        'Paso 1: el equipo elige tema y define las preguntas del informe.',
        'Paso 2: usa la IA con prompts bien hechos (contexto + rol + tarea + formato) para una lluvia inicial de ideas o un primer borrador.',
        'Paso 3: cada integrante toma una sección, EDITA con voz propia (la IA no entrega texto final), y verifica los datos contra fuentes externas (mínimo 2).',
        'Paso 4: redactan la sección "Cómo trabajamos con IA" siendo específicos (modelo, partes, edición, verificación).',
        'Paso 5: revisión final del equipo y entrega al profe por Outlook.'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: '💭 La IA amplifica nuestra voz, no la silencia (Dussel)',
        consigna: 'En la introducción o portada, los 3 escriben juntos un párrafo de 3 líneas: "Como estudiantes de 7°, usamos IA como nueva consejera de oficio. Pero la voz que se entrega aquí es la nuestra. La IA nos ayudó a pensar más rápido y a explorar más ideas; las decisiones, la edición y la firma son nuestras. Nada de lo que aquí escribimos viene sin nuestro sello.". Queda visible en el documento.'
      },
      criterios: [
        'El informe tiene 3 páginas con las 6 partes pedidas.',
        'La sección \'Cómo trabajamos con IA\' detalla modelo, partes, edición humana y verificación.',
        'Hay al menos 2 fuentes externas verificadas (no de la IA).',
        'El texto tiene voz propia (no texto plano sospechoso de copia de IA).',
        'El párrafo Dussel está visible en el documento.'
      ]
    },
    {
      numero: 2,
      titulo: 'Guía de prompts útiles para grado 7° (Estoico)',
      queEntregas: 'Una guía visual de 1 hoja (cartulina mediana o página de Word) con 6 prompts útiles para grado 7°. Cada prompt incluye: (a) nombre/situación ("Para resumir un capítulo de Sociales"); (b) prompt completo con los 4 elementos (rol + contexto + tarea + formato); (c) qué hacer con la respuesta (verificar, editar, declarar). La guía cierra con un recuadro de 3 errores típicos a evitar (copiar y pegar sin editar, no declarar uso, no verificar datos).',
      comoSeHace: [
        'Paso 1: los 3 integrantes piensan en situaciones reales de grado 7° donde la IA podría ayudar (resumir, lluvia de ideas, sugerir títulos, mejorar redacción, explicar concepto difícil, generar ejemplos).',
        'Paso 2: para cada situación, escriben un prompt completo con los 4 elementos.',
        'Paso 3: prueban cada prompt en una IA real y anotan qué tan útil fue.',
        'Paso 4: redactan la guía con los 6 prompts + 3 errores típicos.',
        'Paso 5: imprimen y pegan en la cartelera del salón o sala de sistemas.'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: '💭 Pedir bien hoy ahorra trabajo mañana (Marco Aurelio)',
        consigna: 'En el pie de la guía, escriban en 2-3 líneas: "Marco Aurelio decía: la prisa es enemiga del juicio. Estos 6 prompts probados por nuestro equipo son disciplina anti-prisa: pedir bien hoy ahorra trabajo de edición mañana. Pedir vago = respuesta vaga; pedir claro = respuesta útil.". Queda visible en la guía.'
      },
      criterios: [
        'La guía tiene 6 prompts probados con los 4 elementos cada uno.',
        'Cada prompt tiene nota de "qué hacer con la respuesta".',
        'Incluye recuadro de 3 errores típicos a evitar.',
        'Es legible desde 2 metros y está pegada en aula o sala.',
        'El párrafo estoico está visible en la guía.'
      ]
    },
    {
      numero: 3,
      titulo: 'Decálogo ético del uso de IA en el salón (Floridi)',
      queEntregas: 'Un decálogo de 10 reglas (cartulina grande o póster) sobre el uso ético de IA en el salón, firmado por todos los compañeros. Cada regla con: (a) número; (b) frase corta y clara; (c) ícono dibujado. Las 10 reglas deben incluir al menos: declarar siempre el uso, verificar lo importante, no entregar texto sin editar, respetar la privacidad de otros, no usar IA para tareas que evalúan algo personal, cuidar lo que comparto en el prompt. Al final, espacio para firmas de los compañeros + correo formal al rector explicando el decálogo.',
      comoSeHace: [
        'Paso 1: en equipo, redactar las 10 reglas inspirándose en S8 (sesgo, alucinación, deshonestidad, privacidad).',
        'Paso 2: dibujar 1 ícono por regla.',
        'Paso 3: pasar el decálogo por el salón pidiendo firma de cada compañero con nombre + curso.',
        'Paso 4: redactar correo formal al rector (5 partes) explicando qué es el decálogo y por qué lo firmaron como salón.',
        'Paso 5: enviar el correo desde correo institucional + pegar el decálogo en cartelera del salón.'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: '💭 Habitamos juntos la infoesfera con IA (Floridi)',
        consigna: 'En la parte inferior del decálogo, escriban: "Luciano Floridi dice que la IA es parte de la infoesfera que habitamos. Como salón de 7°, decidimos qué tipo de infoesfera construimos cada día. Estas 10 reglas son nuestra voz: la IA nos amplifica si la usamos con criterio y nos perjudica si copiamos sin pensar. Firmamos lo que sostenemos.". Queda visible en el decálogo.'
      },
      criterios: [
        'El decálogo tiene 10 reglas con número + frase clara + ícono.',
        'Las reglas incluyen al menos las 6 obligatorias (declaración, verificación, edición, privacidad propia y ajena, prompt cuidado).',
        'Hay al menos 15 firmas de compañeros del salón.',
        'Se envió correo formal al rector con las 5 partes correctas.',
        'El párrafo Floridi está visible en el decálogo.'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación de equipo y autoevaluación (transversal)',
      queEntregas: 'Sustentación oral de 5 minutos en clase donde el equipo presenta los 3 entregables al profe y al grupo. Los 3 integrantes hablan. Apoyan con los productos (PDF del informe en pantalla, guía y decálogo en cartulinas). Después: autoevaluación honesta con la rúbrica de 5 criterios + declaración del uso de IA durante todo el proceso.',
      comoSeHace: [
        'Paso 1: armar guion de 5 minutos: 1 min introducción (qué hicimos), 1 min informe (con captura), 1:30 min guía de prompts (con ejemplos), 1 min decálogo + cierre, 30s declaración honesta de uso de IA en todo el proyecto.',
        'Paso 2: ensayar al menos 1 vez con cronómetro.',
        'Paso 3: presentar ante profe y compañeros.',
        'Paso 4: autoevaluarse con la rúbrica y declarar uso de IA durante todo el proyecto.',
        'Paso 5: cada integrante escribe 4 líneas de reflexión personal.'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: '💭 Cierre del equipo: cosecha del grado 7°',
        consigna: 'Cada integrante escribe en su cuaderno 4 líneas: "Mi mayor aprendizaje siendo consejero digital del salón fue ___. Lo que más me costó del uso responsable de IA fue ___. El criterio o prompt que voy a sostener todo el año es ___. Le doy gracias a mi equipo por ___.". Firmado.'
      },
      criterios: [
        'Los 3 integrantes hablaron durante la sustentación.',
        'Los 5 minutos se respetaron (entre 4:30 y 5:30).',
        'Se mostraron los 3 productos (informe + guía + decálogo).',
        'Hay declaración honesta del uso de IA durante todo el proyecto.',
        'Cada integrante escribió sus 4 líneas de reflexión personal.'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'Informe con 6 partes + sección \'Cómo trabajamos con IA\' detallada + 2 fuentes externas verificadas + voz propia + párrafo Dussel visible.',
      nivel3: 'Informe casi completo, pero la sección de IA es vaga o falta verificación de fuentes o la voz suena a IA sin editar.',
      nivel1: 'Informe incompleto (<2 páginas), sin declaración de IA o sin voz propia.'
    },
    {
      entregable: 2,
      nivel5: 'Guía con 6 prompts probados + 3 errores típicos + iconos + pegada en aula + párrafo estoico visible.',
      nivel3: 'Guía con 4-5 prompts o prompts sin los 4 elementos o sin recuadro de errores.',
      nivel1: 'Guía incompleta (<4 prompts) o no probada en IA real.'
    },
    {
      entregable: 3,
      nivel5: 'Decálogo con 10 reglas (con las 6 obligatorias) + íconos + 15+ firmas + correo al rector + párrafo Floridi visible.',
      nivel3: 'Decálogo con 8-9 reglas o faltan firmas (<10) o falta correo formal.',
      nivel1: 'Decálogo incompleto (<8 reglas) o sin firmas o sin párrafo Floridi.'
    },
    {
      entregable: 4,
      nivel5: 'Los 3 hablaron 5 min con los 3 productos a la vista, declaración honesta de IA, reflexión personal.',
      nivel3: '1-2 integrantes hablaron, sustentación de 3-4 min, declaración limitada.',
      nivel1: 'Solo 1 habló o no hubo sustentación o sin declaración de IA.'
    },
    {
      entregable: 'global',
      nivel5: 'Las 3 lentes (Dussel + Estoico + Floridi) están visibles en los productos, no como anexo aparte.',
      nivel3: 'Las 3 lentes están pero alguna parece copiada o forzada al producto.',
      nivel1: 'Falta alguna lente o las reflexiones son superficiales.',
      titulo: 'Comunicación, sustentación e integración del triángulo'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '1 min · presentación del equipo + reto del proyecto',
      '1 min · informe (mostrar el PDF, leer un extracto de la sección \'Cómo trabajamos con IA\')',
      '1:30 min · guía de prompts (mostrar 2 ejemplos probados)',
      '1 min · decálogo + cierre del equipo',
      '0:30 min · declaración honesta del uso de IA durante todo el proyecto'
    ]
  },
  declaracionIa: 'Este es proyecto de grado 7° y SE ESPERA explícitamente el uso de IA con criterio. La declaración es OBLIGATORIA: en la sustentación deben decir (a) qué modelo usaron (Claude/ChatGPT/Gemini), (b) en qué partes (informe, guía, decálogo), (c) cuánto editaron a mano y (d) qué verificaron contra fuentes externas. La rúbrica del entregable 1 penaliza explícitamente la falta de declaración o el copy-paste sin edición.',
  cierre: 'Cerrando el grado 7°, los consejeros digitales del salón dejaron obra: informe, guía y decálogo. En grado 8° das el siguiente salto: vas a entrar a la lógica avanzada, a los datos como tablas, y a tu primer pensamiento ético del oficio.',
  pdf: 'proyecto-3-7-TIC.pdf'
};

export default contenido;
