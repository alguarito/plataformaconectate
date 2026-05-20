/**
 * Contenido web del proyecto integrador · Grado 10 · Período 2
 *
 * Auto-generado desde content/proyectos/10-2.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 10,
  periodo: 2,
  clave: '10-2',
  titulo: 'Proyecto integrador · Informe técnico profesional con datos reales e IA',
  tituloPortada: 'Informe técnico profesional con datos reales',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Diseña, aplica una encuesta, analiza datos cualitativos y cuantitativos, y entrega un informe técnico profesional con criterio editorial, ética en el manejo de datos y declaración honesta de IA.',
  estrategia: 'Investigación aplicada + Encuesta con phronesis + Análisis con auditoría humana',
  duracionSemanas: 5,
  modalidad: 'equipo',
  reto: 'Elige un problema observable de tu colegio, casa o barrio, diseña una encuesta con phronesis (filtrada contra sesgos por IA), recoge datos de al menos 30 personas reales, analiza con IA pero audita a mano las clasificaciones, y entrega un informe técnico profesional dirigido a una autoridad real (rectoría, junta de acción comunal, alcaldía local) con propuesta accionable.',
  insumos: [
    'Google Forms para diseñar la encuesta',
    'Google Sheets o LibreOffice Calc para hoja de cálculo',
    'Plantilla del informe técnico (introducción + desarrollo + conclusiones)',
    'Acceso a IA: Claude, Gemini o ChatGPT (para filtro de sesgos y análisis cualitativo)',
    'Google Docs para diagramación del informe con estilos APA',
    'Lista de 30+ personas reales del entorno dispuestas a responder'
  ],
  anclaje: 'En el centro histórico de Cartago, en la calle de la galería, hubo durante décadas escribientes públicos: hombres y mujeres mayores que se sentaban con una máquina de escribir en un kiosco pequeño y, por una propina modesta, tomaban dictado de los vecinos. Su oficio era severo: convertir la palabra hablada del cliente en texto formal apto para ser leído por una autoridad que no lo conocía. La disciplina era inconfundible: ni más palabras de las necesarias, ni menos; tono ajustado al destinatario; precisión sin adornos. Esa traducción de habla cotidiana a texto profesional dirigido a destinatario específico es el oficio ancestral del informe técnico. La estructura, el tono y la precisión vienen del escribiente, no de Word ni de ChatGPT.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: '4 tipos de texto profesional: informe, comercial, técnico, estudio de mercado'
    },
    {
      sesion: 2,
      titulo: 'Estructura del informe técnico: introducción, desarrollo, conclusiones'
    },
    {
      sesion: 3,
      titulo: 'Google Docs profesional: estilos, TOC, citas APA, pie de figura'
    },
    {
      sesion: 4,
      titulo: 'Markdown: formato portable PDF/HTML/libro'
    },
    {
      sesion: 5,
      titulo: 'Encuestas con phronesis: Forms + filtro de IA contra sesgos'
    },
    {
      sesion: 6,
      titulo: 'Análisis cualitativo con IA + auditoría humana'
    },
    {
      sesion: 7,
      titulo: 'Informe comercial: persuasión con audiencia real y CTA'
    },
    {
      sesion: 8,
      titulo: 'Correo profesional con IA como asistente'
    },
    {
      sesion: 9,
      titulo: 'Mini-proyecto: informe técnico con datos reales + IA documentada'
    },
    {
      sesion: 10,
      titulo: 'Sustentación del periodo: defensa del oficio'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Encuesta diseñada con phronesis + 30 respuestas reales',
      queEntregas: 'Google Form con 8-12 preguntas (mezcla de cerradas Likert y abiertas), pasado por filtro de IA contra sesgos antes de aplicar (registrar 3+ ajustes hechos tras el filtro), aplicado a mínimo 30 personas reales. Entregas: link al Form + screenshot del filtro de IA con los ajustes hechos + hoja de Sheets con respuestas (cruda, sin tocar).',
      comoSeHace: [
        'Definir el problema observable y la pregunta de investigación',
        'Diseñar 8-12 preguntas iniciales en Forms',
        'Pasar las preguntas por IA con prompt: detecta sesgos, ambigüedad, doble cabeza, supuestos',
        'Ajustar preguntas según el filtro y documentar 3+ cambios',
        'Aplicar la encuesta a 30+ personas reales (no compañeros del equipo)'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién no llegó la encuesta',
        consigna: 'En la metodología del informe, agrega un párrafo titulado "A quién no llegó la encuesta". Reconoce honestamente qué grupos del entorno quedaron sin responder (personas sin internet, personas mayores, personas que no quisieron, personas en otro idioma) y por qué. Explica cómo afecta esto la validez del estudio. Ese párrafo queda en la sección de metodología del informe técnico final, no como anexo. La lente del nosotros exige reconocer las voces ausentes.'
      },
      criterios: [
        '8-12 preguntas en Google Forms',
        'Filtro de IA aplicado con 3+ ajustes documentados',
        '30+ respuestas reales de personas externas al equipo',
        'Hoja de Sheets con datos crudos (sin manipular)',
        'Párrafo Dussel publicado en metodología'
      ]
    },
    {
      numero: 2,
      titulo: 'Análisis con IA + auditoría humana de respuestas cualitativas',
      queEntregas: 'Hoja de Sheets con: respuestas abiertas clasificadas por IA en categorías emergentes (mínimo 3-5 categorías) + columna paralela donde el equipo auditó la clasificación a mano (corrigiendo errores de la IA en sarcasmos, modismos, ambigüedades). Acompañado de un documento de 1 página con los hallazgos cualitativos principales (3 hallazgos mínimo, con citas textuales de respuestas).',
      comoSeHace: [
        'Pegar las respuestas abiertas en un prompt a la IA y pedir clasificación temática',
        'Crear columna \'Categoría IA\' y otra \'Categoría auditada\' en Sheets',
        'Revisar cada respuesta: ¿la IA captó bien?, ¿hay sarcasmo o modismo mal interpretado?',
        'Marcar correcciones y documentar 3+ casos donde la IA falló',
        'Sintetizar 3 hallazgos cualitativos con citas textuales'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que la IA no entendió',
        consigna: 'En el documento de hallazgos cualitativos, agrega una sección titulada "Lo que la IA no entendió". Documenta los casos concretos donde la IA falló al clasificar respuestas: ¿qué modismo no captó?, ¿qué ironía interpretó literal?, ¿qué contexto local le faltó? Esa sección queda en el informe técnico final. El estoico entiende que la disciplina del analista es saber dónde el atajo automático no llega y hacer el trabajo manual de la auditoría.'
      },
      criterios: [
        'Mínimo 3-5 categorías emergentes',
        'Columna paralela de auditoría humana con correcciones marcadas',
        '3+ casos documentados donde la IA falló',
        '3 hallazgos cualitativos con citas textuales',
        'Sección estoica publicada en el documento de hallazgos'
      ]
    },
    {
      numero: 3,
      titulo: 'Informe técnico profesional completo en Google Docs (PDF final)',
      queEntregas: 'Documento Google Docs de 8-12 páginas con: portada, tabla de contenidos automática, introducción (contexto + objetivo + alcance), desarrollo (metodología + datos cuantitativos + análisis cualitativo + visualizaciones), conclusiones (hallazgos + recomendaciones accionables), citas en formato APA, pie de figura numerado en gráficos. Exportado a PDF. Dirigido a un destinatario real nombrado (rectoría, junta, alcaldía).',
      comoSeHace: [
        'Aplicar estilos consistentes en Google Docs (Título 1, 2, 3)',
        'Insertar tabla de contenidos automática',
        'Diagramar visualizaciones con eje desde 0 y etiquetas claras',
        'Citar fuentes en formato APA (Herramientas > Citas)',
        'Cerrar con recomendaciones accionables (qué, quién, plazo, recursos)'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Mi informe en la cadena informacional',
        consigna: 'En las conclusiones del informe, agrega un párrafo titulado "Mi informe en la cadena informacional". Reflexiona: ¿qué información agrega tu informe a la conversación pública del entorno?, ¿enriquece la toma de decisiones del destinatario con datos honestos o solo agrega ruido?, ¿qué responsabilidad ética asumes por publicar estas cifras? Esa reflexión va dentro del informe técnico que entregas al destinatario nombrado, no como anexo escolar. La ética de Floridi exige que cada informe que circula tenga responsabilidad sobre su efecto en la infoesfera.'
      },
      criterios: [
        '8-12 páginas en Google Docs exportado a PDF',
        'Estructura completa (intro + desarrollo + conclusiones)',
        'TOC automática + citas APA + pie de figura',
        'Recomendaciones accionables (qué, quién, plazo, recursos)',
        'Reflexión Floridi en conclusiones'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación + correo profesional al destinatario real + declaración IA',
      queEntregas: 'Sustentación oral de 5 minutos frente al grupo (puede ser remota) + correo profesional formal escrito al destinatario real del informe (rectoría, junta, alcaldía) enviándole el informe PDF + carta firmada del editor con declaración honesta de IA y compromisos del triángulo.',
      comoSeHace: [
        'Preparar guion de 5 min siguiendo la estructura sugerida',
        'Ensayar con cronómetro al menos 2 veces',
        'Redactar correo profesional (máximo 200 palabras) con IA + edición humana',
        'Enviar el correo realmente al destinatario (no simulado)',
        'Escribir carta de cierre con compromisos verificables del triángulo'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Mis compromisos como autor del informe',
        consigna: 'En la carta de cierre, dedica un párrafo a cada lente del triángulo como compromisos verificables. Por Dussel: a qué grupo del entorno que dejé fuera de la encuesta me comprometo a llegar en una v2 del estudio. Por el estoico: qué disciplina sostendré como autor de informes técnicos (verificar datos antes de publicar, no inflar conclusiones, reconocer limitaciones). Por Floridi: qué información honesta seguiré publicando sobre el seguimiento de las recomendaciones (si el destinatario las implementó, si funcionaron). Cada uno con decisión concreta.'
      },
      criterios: [
        'Sustentación de 5 min exactos cronometrados',
        'Correo profesional real enviado al destinatario (no simulado)',
        'Carta firmada con declaración honesta de IA',
        '3 lentes del triángulo con compromisos verificables',
        'Demo: muestra el informe PDF + correo enviado + respuesta si la hay'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: '30+ respuestas reales, filtro IA con 3+ ajustes documentados, Dussel visible',
      nivel3: 'Encuesta aplicada pero a pocos o sin filtro de IA documentado',
      nivel1: 'Encuesta sin aplicar o respuestas inventadas'
    },
    {
      entregable: 2,
      nivel5: 'Análisis cualitativo auditado, 3+ correcciones a la IA documentadas, estoico visible',
      nivel3: 'Análisis con IA pero sin auditoría humana documentada',
      nivel1: 'Solo análisis de IA sin auditoría o categorías superficiales'
    },
    {
      entregable: 3,
      nivel5: '8-12 páginas profesionales, APA, recomendaciones accionables, Floridi visible',
      nivel3: 'Informe completo pero sin estilos, citas o pie de figura',
      nivel1: 'Informe incompleto o sin recomendaciones accionables'
    },
    {
      entregable: 4,
      nivel5: '5 min exactos, correo real enviado, 3 lentes con compromisos verificables',
      nivel3: 'Sustentación con tiempo descontrolado o correo simulado',
      nivel1: 'No sustentó o correo no enviado realmente'
    },
    {
      entregable: 'global',
      nivel5: 'Texto editado con voz propia, decisiones editoriales visibles, autoría firmada honestamente',
      nivel3: 'Voz propia parcial, mucho borrador de IA sin editar',
      nivel1: 'El informe suena a IA sin intervención editorial humana',
      titulo: 'Voz profesional propia: el informe suena al equipo, no a chatbot'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '30 seg · Problema observable y por qué importa al destinatario nombrado',
      '1 min · Metodología: cómo diseñé la encuesta y a quién no llegué (Dussel)',
      '2 min · Hallazgos clave (cuantitativos + cualitativos auditados)',
      '1 min · Recomendaciones accionables (qué, quién, plazo, recursos)',
      '30 seg · Compromisos del triángulo y correo enviado al destinatario'
    ]
  },
  declaracionIa: 'Tu carta firmada debe declarar honestamente: (1) modelos de IA usados (filtro de encuesta, análisis cualitativo, redacción del informe). (2) porcentaje del informe editado a mano sobre lo generado por IA. (3) 3+ casos concretos donde la IA falló y fue corregida por el equipo. (4) las 3 lentes del triángulo como decisiones verificables.',
  cierre: 'Cierras el periodo 2 con la disciplina del escribiente actualizada al medio digital. El periodo 3 (Ofimática + contabilidad + emprendimiento) te pedirá llevar esta misma precisión a los números, las hojas de cálculo y los planes de negocio. La palabra empeñada del escribiente se va contigo a leer balances.',
  pdf: 'proyecto-2-10-TIC.pdf'
};

export default contenido;
