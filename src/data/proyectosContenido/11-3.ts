/**
 * Contenido web del proyecto integrador · Grado 11 · Período 3
 *
 * Auto-generado desde content/proyectos/11-3.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 11,
  periodo: 3,
  clave: '11-3',
  titulo: 'Proyecto integrador · Emprendimiento de cierre del bachillerato técnico',
  tituloPortada: 'Emprendimiento de cierre del bachillerato',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Identifica, valida con la comunidad, prototipa, mide y sustenta una idea emprendedora con MVP digital, modelo de negocio en Canvas, presupuesto realista y ética declarada.',
  estrategia: 'Lean Startup + Business Model Canvas + Pitch TED + Ética digital',
  duracionSemanas: 6,
  modalidad: 'equipo',
  reto: 'Diseña un proyecto emprendedor real que parta de un problema verificable de tu comunidad cercana, válidalo con al menos 5 personas afectadas, prototipa un MVP digital funcional, mídelo durante 2 semanas, y preséntalo en pitch de 3 minutos frente a la comunidad escolar y al menos 2 invitados externos. Es la cima del bachillerato: lo que entregas el día de la sustentación es la primera firma pública de tu vida adulta.',
  insumos: [
    'Lienzo Business Model Canvas (descargable o en Canva)',
    'Acceso a herramientas de prototipado: Figma, Canva, o no-code (Glide, Softr)',
    'Plantilla de validación de 5 entrevistas (la entrega el docente)',
    'Hoja de cálculo de presupuesto con 3 escenarios (pesimista/realista/optimista)',
    'Lista de 5+ personas reales del entorno dispuestas a entrevistar',
    'Acceso a IA: Claude, Gemini o ChatGPT (asistente, no autor del MVP)'
  ],
  anclaje: 'En los barrios populares de Cartago, hasta los años 80, existió siempre una figura silenciosa que sostuvo la vida cívica: el fundador de la junta de acción comunal. No tenía título profesional ni capital propio. Tenía una libreta, un buen oído y la paciencia de ir casa por casa preguntando: "¿Qué le mejoraría la cuadra?, ¿qué pondría usted?, ¿qué pondríamos juntos?" Volvía a la alcaldía no con una idea propia, sino con la voz documentada de su barrio: 18 vecinos pidieron alumbrado, 11 una caneca, 5 un parque. Esa práctica ancestral cruza directamente con el proyecto emprendedor moderno: ideación desde un problema real validado, no desde una ocurrencia personal en escritorio. El fundador hacía Lean Startup sin saberlo: hablaba antes de construir, medía antes de pedir, sustentaba antes de ejecutar.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'Ideación: un problema real de mi comunidad'
    },
    {
      sesion: 2,
      titulo: 'Validación: hablar antes de construir'
    },
    {
      sesion: 3,
      titulo: 'Modelo de negocio en Business Model Canvas'
    },
    {
      sesion: 4,
      titulo: 'MVP digital: versión imperfecta para probar'
    },
    {
      sesion: 5,
      titulo: 'Datos del MVP: recoger evidencia con rigor'
    },
    {
      sesion: 6,
      titulo: 'Pitch: contar la historia del proyecto en 3 minutos'
    },
    {
      sesion: 7,
      titulo: 'Presupuesto: cuánto siembras, cuánto cosechas'
    },
    {
      sesion: 8,
      titulo: 'Ética y legal: la palabra empeñada en lo digital'
    },
    {
      sesion: 9,
      titulo: 'Versión final del MVP y plan de mejora'
    },
    {
      sesion: 10,
      titulo: 'Sustentación pública frente a la comunidad'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Validación con 5 entrevistas + Canvas v1',
      queEntregas: 'Reporte de 1-2 páginas con: (a) problema verificable identificado, (b) síntesis de 5 entrevistas con personas afectadas (citas textuales, no paráfrasis), (c) hipótesis ajustadas después de las entrevistas (si hubo pivote, explícito), y (d) Canvas v1 lleno con datos verificables, no suposiciones.',
      comoSeHace: [
        'Listar 5+ personas reales que viven el problema',
        'Diseñar 5 preguntas abiertas (no inducir respuestas)',
        'Realizar entrevistas (presenciales o por videollamada)',
        'Citar textualmente al menos 1 frase por entrevistado',
        'Llenar Canvas con datos de las entrevistas, no con lo que el equipo imaginó al principio'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién aún no escuché y por qué importa',
        consigna: 'En el reporte, agrega una sección titulada "A quién aún no escuché y por qué importa". Identifica honestamente qué grupo de personas afectadas por el problema no entrevistaste (porque no tenías acceso, porque no hablan español, porque no quisieron, porque te dio pena). Explica qué riesgo trae esa ausencia para el proyecto: ¿estás diseñando para una versión incompleta del problema? Esa sección queda en el reporte de validación. La lente del nosotros pregunta por las voces ausentes.'
      },
      criterios: [
        'Problema verificable con cifra o dato (no opinión personal)',
        '5+ entrevistas realizadas con personas reales (no compañeros del equipo)',
        '1+ cita textual por entrevistado',
        'Canvas v1 con todos los bloques llenos con datos de campo',
        'Reflexión Dussel publicada en el reporte'
      ]
    },
    {
      numero: 2,
      titulo: 'MVP digital funcional + datos de 2 semanas de uso',
      queEntregas: 'MVP digital accesible vía URL pública (sitio web, app no-code, formulario inteligente, prototipo Figma interactivo, según el caso) + dashboard simple con datos de uso de las 2 primeras semanas. Mínimo 10 usuarios reales (no compañeros del equipo) deben haber interactuado con el MVP. Entregas: URL + screenshot de métricas fechado + lista de 10 usuarios reales (con consentimiento documentado).',
      comoSeHace: [
        'Diseñar la versión más pequeña posible que prueba la hipótesis principal',
        'Construirla con la herramienta más simple disponible (no sobreingenierar)',
        'Compartir con 10+ usuarios reales y registrar su uso',
        'Medir 2-3 métricas que importan (no vanity metrics)',
        'Documentar errores y aprendizajes al final de la 2da semana'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que decidimos NO construir aún',
        consigna: 'En la documentación del MVP (puede ser README, sección del sitio, o doc interno) agrega un párrafo titulado "Lo que decidimos NO construir aún". Declara qué features pediste contener para esta versión MVP a pesar de la tentación de agregarlas (porque exigen validación previa, porque inflarían el alcance, porque distraen del core). Esa declaración queda visible al usuario del MVP o en su documentación pública. El estoico entiende que la disciplina del MVP es saber qué dejar fuera para validar lo esencial.'
      },
      criterios: [
        'URL pública funcional (no localhost ni borrador interno)',
        '10+ usuarios reales (no compañeros, no inventados)',
        'Consentimiento documentado por cada usuario',
        'Métricas reales con screenshot fechado de los 14 días',
        'Párrafo estoico publicado en documentación del MVP'
      ]
    },
    {
      numero: 3,
      titulo: 'Presupuesto realista con 3 escenarios + análisis ético-legal',
      queEntregas: 'Hoja de cálculo con presupuesto a 6 meses en 3 escenarios (pesimista, realista, optimista). Debe incluir: ingresos proyectados, costos fijos, costos variables, punto de equilibrio, flujo de caja mensual. + Documento de 1 página con análisis ético-legal: datos personales que recolecta el MVP, marco legal aplicable (Ley 1581, derechos de autor, propiedad intelectual de la IA), términos de uso y política de privacidad visibles al usuario.',
      comoSeHace: [
        'Listar todos los ingresos y costos identificables (no idealizar)',
        'Modelar 3 escenarios con supuestos explícitos',
        'Calcular punto de equilibrio en unidades vendidas',
        'Identificar qué datos personales recolecta el MVP',
        'Redactar política de privacidad y términos de uso accesibles'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Responsabilidad informacional del emprendimiento',
        consigna: 'En el documento ético-legal, agrega una sección titulada "Responsabilidad informacional del emprendimiento". Reflexiona sobre los datos que tu MVP recolecta, almacena y posiblemente comparte: ¿qué información personal estás manejando?, ¿cómo la proteges?, ¿qué información agrega tu emprendimiento a la cadena informacional de tu comunidad (mejora la calidad de la información disponible o solo agrega contenido)? Esa sección queda como parte del documento entregado al docente y, si aplica, al usuario del MVP en los términos públicos. La ética de Floridi va más allá del cumplimiento legal: pregunta por el aporte real a la infoesfera.'
      },
      criterios: [
        '3 escenarios con supuestos explícitos (no copiados entre ellos)',
        'Punto de equilibrio calculado con fórmula visible',
        'Marco legal correcto: Ley 1581, derechos de autor, IA',
        'Política de privacidad accesible (no escondida en letra pequeña)',
        'Reflexión Floridi publicada en el documento ético-legal'
      ]
    },
    {
      numero: 4,
      titulo: 'Pitch de 3 minutos + sustentación pública + carta del emprendedor',
      queEntregas: 'Pitch oral de 3 minutos frente a la comunidad escolar (mínimo) y al menos 2 invitados externos (familia, profesionales de la zona, exalumnos, micropreneurs locales). Acompaña: presentación de 5-7 slides (Canva o Figma), demo en vivo del MVP, y carta firmada del emprendedor de 1 página con: declaración honesta de uso de IA durante el proyecto, integración explícita del triángulo (1 decisión por cada lente), 3 lecciones aprendidas y 3 compromisos para los siguientes 6 meses.',
      comoSeHace: [
        'Diseñar pitch con estructura TED (gancho-historia-idea llave-llamado a la acción)',
        'Crear slides minimalistas (1 idea por slide)',
        'Ensayar con cronómetro al menos 3 veces',
        'Identificar y confirmar a 2 invitados externos para asistir',
        'Escribir la carta del emprendedor con porcentajes verificables'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Compromisos del emprendedor con la comunidad',
        consigna: 'En la carta firmada, dedica un párrafo a cada lente del triángulo como compromisos públicos, no como reflexión privada. Por Dussel: a quién me comprometo a integrar a mi emprendimiento en los próximos 6 meses (audiencia que dejé fuera del MVP). Por el estoico: qué disciplina personal sostendré para que el emprendimiento no muera al primer obstáculo. Por Floridi: qué información honesta seguiré publicando sobre el negocio (métricas, errores, pivotes). Cada uno con una decisión concreta y verificable, no retórica. La carta se firma con nombre, fecha y se entrega al docente y a la comunidad escolar como acto público.'
      },
      criterios: [
        'Pitch de 3 minutos exactos cronometrados',
        'Slides minimalistas, una idea por slide',
        'Demo en vivo del MVP funcionando',
        '2+ invitados externos asistieron al pitch',
        'Carta firmada con compromisos concretos (no retóricos) por cada lente del triángulo'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'Validación real con 5+ entrevistas, citas textuales, Canvas con datos de campo, Dussel visible',
      nivel3: 'Validación incompleta o Canvas con suposiciones, Dussel retórico',
      nivel1: 'Sin entrevistas reales o Canvas inventado'
    },
    {
      entregable: 2,
      nivel5: 'MVP funcional, 10+ usuarios reales, métricas honestas, estoico explícito',
      nivel3: 'MVP funcional pero pocos usuarios o métricas vanity',
      nivel1: 'MVP no funcional o usuarios inventados'
    },
    {
      entregable: 3,
      nivel5: '3 escenarios serios, marco legal correcto, política accesible, Floridi visible',
      nivel3: 'Presupuesto irreal o marco legal incompleto',
      nivel1: 'Sin presupuesto serio o sin política de datos'
    },
    {
      entregable: 4,
      nivel5: 'Pitch 3 min exactos, demo en vivo, 2 invitados externos, compromisos concretos del triángulo',
      nivel3: 'Pitch con tiempo descontrolado o sin invitados externos o triángulo retórico',
      nivel1: 'No sustentó, demo falló o triángulo ausente'
    },
    {
      entregable: 'global',
      nivel5: 'Las 4 partes dialogan; el pitch refleja lo validado, lo construido y los compromisos asumidos',
      nivel3: 'Partes coherentes parcialmente; el pitch no recoge bien la validación o las métricas',
      nivel1: 'Las 4 partes son ejercicios separados sin diálogo entre ellas',
      titulo: 'Coherencia del proyecto emprendedor: validación, MVP, presupuesto y pitch'
    }
  ],
  sustentacion: {
    duracionMin: 3,
    guionSugerido: [
      '30 seg · Gancho: la historia del problema con un dato verificable',
      '30 seg · Validación: qué aprendí de las 5 entrevistas',
      '1 min · Demo en vivo del MVP + 1 métrica que importa',
      '30 seg · Presupuesto resumido y punto de equilibrio',
      '30 seg · Compromiso público: 1 decisión por cada lente del triángulo'
    ]
  },
  declaracionIa: 'Tu carta firmada del emprendedor debe declarar honestamente: (1) modelos de IA usados durante el proyecto, en qué tareas concretas (ideación, redacción, código, diseño, análisis). (2) porcentaje del MVP que se construyó con asistencia de IA y porcentaje editado o decidido a mano. (3) qué decisión crítica del proyecto tomaste sin IA y por qué. (4) las 3 lentes del triángulo como compromisos verificables, no retóricos. (5) 3 lecciones aprendidas y 3 compromisos para los siguientes 6 meses.',
  cierre: 'Cierras el periodo 3, el grado 11° y el bachillerato técnico. Lo que llevas no es un proyecto: es un método de trabajo —escuchar antes de proponer, validar antes de construir, sustentar con la palabra empeñada— que pone a prueba todo lo aprendido en estos 11 años. El fundador de la junta de acción comunal se va contigo a la universidad, al primer empleo o al microemprendimiento de tu vida adulta.',
  pdf: 'proyecto-3-11-TIC.pdf'
};

export default contenido;
