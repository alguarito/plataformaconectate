/**
 * Contenido web del proyecto integrador · Grado 10 · Período 3
 *
 * Auto-generado desde content/proyectos/10-3.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 10,
  periodo: 3,
  clave: '10-3',
  titulo: 'Proyecto integrador · Plan completo de microemprendimiento con contabilidad e IA',
  tituloPortada: 'Microemprendimiento con contabilidad, Canvas e IA',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Diseña un plan completo de microemprendimiento con: idea validada, contabilidad proyectada a 3 meses, Business Model Canvas con datos verificables, 3 piezas de comunicación empresarial coherentes, y plan de validación con 5 personas reales.',
  estrategia: 'Lean Startup + Canvas + Contabilidad Sheets + Comunicación empresarial con IA',
  duracionSemanas: 6,
  modalidad: 'equipo',
  reto: 'Diseña un plan completo de microemprendimiento para un problema real de tu entorno (no inventado): valida la idea con 5 entrevistas, llena el Canvas con datos verificables, proyecta contabilidad a 3 meses con 3 escenarios, prepara 3 piezas coherentes de comunicación empresarial (propuesta, correo, publicación visual) y declara honestamente el uso de IA durante todo el proceso. Al cerrar el periodo cualquier mentor adulto del barrio debe poder leer tu plan y entender si es viable.',
  insumos: [
    'Lienzo Business Model Canvas (descargable o en Canva)',
    'Plantilla de validación con 5 entrevistas (la entrega el docente)',
    'Google Sheets con plantilla de contabilidad y flujo de caja (la entrega el docente)',
    'Canva o Figma free para diseñar 3 piezas de comunicación empresarial',
    'Acceso a IA: Claude, Gemini o ChatGPT (con =GEMINI() si está disponible)',
    'Lista de 5+ personas reales del entorno dispuestas a entrevistar'
  ],
  anclaje: 'En cada barrio de Cartago hubo durante décadas la tienda de la esquina: ese pequeño negocio familiar que vendía arroz, panela, fósforos, huevos por unidad. La dueña de la tienda tenía una herramienta silenciosa pero fundamental: el cuaderno cuadriculado. Anotaba clientes, fiados, productos que rotaban rápido y lento, saldos pendientes. "Doña Rosa, esta semana lleva diez mil pesos." La tendera sabía en tiempo real quién le debía qué, cuándo pedir al mayorista, cuál era su punto de equilibrio sin haber leído un libro de finanzas. Esa contabilidad de cuaderno no era informal: era rigurosa. Esa práctica ancestral cruza directamente con todo lo que aprendiste: ofimática con IA es la versión digital del cuaderno; contabilidad básica es lo que la tendera hacía a mano; el plan de negocio (Canvas) es lo que ella decidió antes de abrir la tienda.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'Ofimática con IA como copiloto (Sheets, Notion, ChatGPT, Gemini)'
    },
    {
      sesion: 2,
      titulo: 'Contabilidad básica: ingresos, egresos, balance neto'
    },
    {
      sesion: 3,
      titulo: 'Sheets contable con fórmulas + =GEMINI()'
    },
    {
      sesion: 4,
      titulo: 'Flujo de caja, costos fijos vs variables, punto de equilibrio'
    },
    {
      sesion: 5,
      titulo: 'Visualización de datos con 5 principios de honestidad'
    },
    {
      sesion: 6,
      titulo: 'Estudio de mercado: 5 preguntas + análisis cualitativo auditado'
    },
    {
      sesion: 7,
      titulo: 'Business Model Canvas con datos verificables'
    },
    {
      sesion: 8,
      titulo: 'Comunicación empresarial: 3 piezas coherentes'
    },
    {
      sesion: 9,
      titulo: 'Proyecto integrador: micro-emprendimiento con plan completo'
    },
    {
      sesion: 10,
      titulo: 'Sustentación final + feria de microempresas + carta del grado'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Idea validada con 5 entrevistas + Business Model Canvas',
      queEntregas: 'Reporte de 1-2 páginas con: problema verificable, síntesis de 5 entrevistas con personas afectadas (citas textuales), pivote documentado si lo hubo. + Canvas v1 lleno con los 9 bloques con datos de las entrevistas (no suposiciones). Exportado a PDF.',
      comoSeHace: [
        'Listar 5+ personas reales que viven el problema',
        'Diseñar 5 preguntas abiertas no inductoras',
        'Realizar las entrevistas (presencial o videollamada)',
        'Citar textualmente al menos 1 frase por entrevistado',
        'Llenar el Canvas con datos de campo, no con lo que el equipo imaginó'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién aún no escuché en la validación',
        consigna: 'En el reporte de validación, agrega una sección titulada "A quién aún no escuché en la validación". Identifica honestamente qué tipo de cliente potencial no entrevistaste (porque no tenías acceso, porque no quisieron, porque no hablan español, porque te pareció obvio que pensaban distinto). Explica qué riesgo trae esa ausencia para el modelo de negocio. Esa sección queda en el reporte de validación entregado al docente y al mentor del barrio si participa. La lente del nosotros pregunta por las voces ausentes del Canvas.'
      },
      criterios: [
        'Problema con cifra o dato verificable (no opinión)',
        '5+ entrevistas con personas reales (no compañeros del equipo)',
        '1+ cita textual por entrevistado',
        'Canvas con 9 bloques llenos con datos de campo',
        'Reflexión Dussel publicada en el reporte'
      ]
    },
    {
      numero: 2,
      titulo: 'Contabilidad proyectada a 3 meses + flujo de caja + punto de equilibrio',
      queEntregas: 'Hoja de Sheets con: tabla de costos fijos y variables, ingresos proyectados en 3 escenarios (pesimista 30%, realista 60%, optimista 100%), flujo de caja mensual a 3 meses, cálculo de punto de equilibrio en unidades, gráficos honestos (eje desde 0). Decisión de viabilidad documentada con datos.',
      comoSeHace: [
        'Listar todos los costos identificables (fijos vs variables) con cifras realistas',
        'Proyectar ingresos en 3 escenarios con supuestos explícitos',
        'Calcular punto de equilibrio con fórmula visible: PE = CF / (Precio - CVu)',
        'Diseñar gráficos con eje desde 0 y etiquetas claras (visualización honesta)',
        'Escribir 1 párrafo de decisión: ¿es viable según los 3 escenarios?'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que decidimos NO maquillar en las cifras',
        consigna: 'En la hoja de cálculo (en una celda visible o en una pestaña "Notas") agrega un párrafo titulado "Lo que decidimos NO maquillar en las cifras". Reconoce explícitamente qué tentaciones de inflar números resistió el equipo: ¿pusieron ingresos optimistas como "realistas"?, ¿escondieron un costo fijo importante?, ¿asumieron crecimiento sin evidencia? Esa declaración queda en el archivo Sheets entregado al mentor adulto del barrio, no como anexo separado. El estoico entiende que el contador disciplinado no maquilla ni siquiera para sí mismo.'
      },
      criterios: [
        'Costos fijos y variables identificados con cifras realistas',
        '3 escenarios con supuestos explícitos (no copiados entre ellos)',
        'Punto de equilibrio con fórmula visible',
        'Gráficos con eje desde 0 y etiquetas claras',
        'Párrafo estoico publicado en la hoja de cálculo'
      ]
    },
    {
      numero: 3,
      titulo: '3 piezas coherentes de comunicación empresarial (propuesta + correo + publicación)',
      queEntregas: '(a) Propuesta comercial breve de 1 página dirigida a un cliente potencial real, con problema + solución + propuesta + precio + CTA. (b) Correo profesional de máximo 200 palabras presentando el emprendimiento a un aliado (proveedor, mentor o cliente). (c) Publicación visual para redes sociales (Canva o Figma) con la propuesta de valor. Las 3 piezas deben decir exactamente lo mismo (precio, propuesta, contacto): la incoherencia entre canales es el principal síntoma a evitar.',
      comoSeHace: [
        'Definir propuesta de valor única (que coincide con el Canvas)',
        'Redactar las 3 piezas con borrador de IA y editar tono a mano',
        'Validar que el precio, la propuesta y el contacto coinciden entre las 3',
        'Diseñar la publicación visual con la paleta del emprendimiento',
        'Mostrar las 3 piezas a un mentor adulto antes de entregar'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Mi emprendimiento en la cadena informacional del barrio',
        consigna: 'En la propuesta comercial breve, agrega al pie de página una sección titulada "Mi emprendimiento en la cadena informacional del barrio". Reflexiona: ¿qué información agrega mi negocio al entorno (mejora la oferta local con un producto que se necesitaba o solo agrega ruido más)?, ¿qué responsabilidad ética asumo por los datos que recolecto de mis clientes? Esa reflexión queda en el pie de la propuesta comercial que circula a clientes reales. La ética de Floridi va más allá del cumplimiento: pregunta por el aporte real a la conversación común del barrio.'
      },
      criterios: [
        'Propuesta comercial completa con CTA claro',
        'Correo profesional menor a 200 palabras',
        'Publicación visual con paleta coherente',
        'Las 3 piezas dicen exactamente lo mismo (precio, propuesta, contacto)',
        'Reflexión Floridi publicada en pie de la propuesta comercial'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación en feria de microempresas + carta de cierre del grado 10',
      queEntregas: 'Pitch oral de 5 minutos en feria escolar de microempresas con 2 invitados externos reales del barrio (mentor adulto, comerciante local, exalumno emprendedor). Stand físico o virtual con: Canvas impreso, hoja de Sheets visible, 3 piezas de comunicación expuestas. + Carta de cierre del grado 10° firmada del equipo con compromisos verificables del triángulo para el grado 11°.',
      comoSeHace: [
        'Diseñar pitch con estructura clara (ver guion sugerido)',
        'Identificar y confirmar 2 invitados externos para la feria',
        'Preparar stand con Canvas impreso, Sheets en pantalla, piezas de comunicación',
        'Ensayar pitch con cronómetro al menos 2 veces',
        'Redactar carta de cierre del grado con compromisos del triángulo'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Compromisos del emprendedor con el barrio',
        consigna: 'En la carta de cierre del grado 10°, dedica un párrafo a cada lente del triángulo como compromisos verificables, no retóricos. Por Dussel: a qué cliente del barrio que excluyó mi Canvas v1 me comprometo a integrar en v2. Por el estoico: qué disciplina personal sostendré como emprendedor para no inflar cifras ni saltar la validación. Por Floridi: qué información honesta seguiré publicando sobre el negocio (incluyendo si falló) durante el grado 11°. Cada uno con decisión concreta y fechada.'
      },
      criterios: [
        'Pitch de 5 min exactos cronometrados',
        '2+ invitados externos asistieron al stand',
        'Demo: Canvas + Sheets + 3 piezas visibles en feria',
        'Carta de cierre firmada con compromisos verificables del triángulo',
        'Honestidad: reconoce limitaciones del plan sin maquillar'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: '5+ entrevistas reales, Canvas con datos de campo, Dussel visible en reporte',
      nivel3: 'Entrevistas pocas o Canvas con suposiciones',
      nivel1: 'Sin entrevistas reales o Canvas inventado'
    },
    {
      entregable: 2,
      nivel5: '3 escenarios serios, PE con fórmula, gráficos honestos, estoico visible en Sheets',
      nivel3: 'Contabilidad con falla en escenarios o gráficos engañosos',
      nivel1: 'Sin proyección contable o cifras maquilladas'
    },
    {
      entregable: 3,
      nivel5: '3 piezas coherentes entre sí, propuesta con CTA, Floridi visible en propuesta',
      nivel3: 'Piezas incoherentes o sin CTA',
      nivel1: 'Solo 1-2 piezas o sin coherencia visible'
    },
    {
      entregable: 4,
      nivel5: '5 min exactos, 2+ invitados externos, carta con compromisos verificables del triángulo',
      nivel3: 'Pitch con tiempo descontrolado o sin invitados externos',
      nivel1: 'No sustentó o sin carta del grado'
    },
    {
      entregable: 'global',
      nivel5: 'Las 4 partes dialogan: la validación sostiene el Canvas, las cifras sostienen el pitch',
      nivel3: 'Coherencia parcial entre las partes',
      nivel1: 'Las 4 partes parecen ejercicios separados sin diálogo',
      titulo: 'Coherencia del plan emprendedor (Canvas + cifras + comunicación + pitch)'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '1 min · Problema validado y por qué importa al barrio',
      '1 min · Canvas: bloques clave con datos de las entrevistas',
      '1 min · Cifras: punto de equilibrio y decisión de viabilidad',
      '1 min · 3 piezas de comunicación coherentes (demo rápida)',
      '1 min · Compromisos del triángulo para el grado 11°'
    ]
  },
  declaracionIa: 'Tu carta de cierre del grado 10° debe declarar honestamente: (1) modelos de IA usados (\\=GEMINI() en Sheets, ChatGPT para análisis cualitativo, IA para redacción de piezas). (2) porcentaje de cada entregable editado a mano sobre lo generado por IA. (3) decisión emprendedora que tomaste sin IA (ej. "decidimos no incluir un producto en el Canvas porque las entrevistas mostraron que el costo era prohibitivo"). (4) las 3 lentes del triángulo como compromisos verificables y fechados para el grado 11°.',
  cierre: 'Cierras el periodo 3, el grado 10° y dejas listas las herramientas para el grado 11° (proyecto emprendedor final del bachillerato). La tendera de la esquina y su cuaderno cuadriculado se van contigo al último año de bachillerato. El método ya es tuyo: escuchar al cliente, llevar las cuentas sin maquillar, comunicar con coherencia, firmar con la palabra empeñada.',
  pdf: 'proyecto-3-10-TIC.pdf'
};

export default contenido;
