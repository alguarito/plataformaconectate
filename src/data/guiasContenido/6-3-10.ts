/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 10
 * (sesión global 30).
 *
 * Auto-generado desde content/guias/6/6-3-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 10,
  titulo: 'Mi primer documento informativo — producto que reúne todo lo aprendido',
  resumen: 'Un documento informativo es un texto que enseña algo verídico a quien lo lee.',
  duracionMin: 90,
  subtema: 'Mi primer documento informativo — producto que reúne todo lo aprendido',
  preLectura: {
    porQueImporta: 'El producto es ese documento + autoevaluación con rúbrica + 3 fuentes citadas.',
    preguntaDetonante: 'Si tu profe te dijera "muéstrame en UN solo trabajo todo lo que aprendiste en el periodo 3", ¿podrías hacerlo? ¿Cuáles 10 elementos meterías en ese documento?',
    activacion: {
      titulo: 'Elige tu tema',
      descripcion: 'Actividad 1 · IDENTIFICA — Elige tu tema (8 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: escoges tema, buscas y evalúas 3 fuentes con CRAAP, escribes el documento con los 10 elementos, y haces autoevaluación.',
      siguiente: 'La próxima sesión es la Sesión 11 (cosecha formal del periodo): te autoevaluás con rúbrica visible, revisas el examen integrador del periodo 3, y te preparas para mirar atrás todo el año.'
    }
  },
  conceptosClave: [
    {
      termino: 'Documento informativo',
      definicion: 'Texto que enseña información verídica sobre un tema, con fuentes citadas. No es opinión ni ensayo. Se usa para tareas escolares, informes universitarios y reportes profesionales.',
      ejemplo: 'Un documento sobre "el volcán Nevado del Ruiz" que explica su historia, ubicación, erupciones, con datos sacados de 3 fuentes confiables citadas al final.',
      emoji: '📃'
    },
    {
      termino: 'Cosecha del periodo',
      definicion: 'Trabajo final que reúne todo lo aprendido durante un periodo en un solo entregable. No es una tarea más: es la prueba de que el oficio integrado ya es tuyo.',
      ejemplo: 'Tu documento de S10 P3 que aplica Word + formato + listas + tablas + imágenes + marco + búsqueda + fuentes en una sola pieza. Eso es cosecha.',
      emoji: '🌾'
    },
    {
      termino: 'Fuentes citadas',
      definicion: 'Lista al final del documento que indica de dónde sacaste la información. Formato simple para 6° grado: Apellido, Nombre. Título del artículo. Sitio. Año. URL. Mínimo 3 fuentes.',
      ejemplo: '"Universidad Nacional. Estudio sobre el volcán Nevado del Ruiz. unal.edu.co. 2024. https://...". Eso es una cita básica de fuente.',
      emoji: '📚'
    },
    {
      termino: 'Rúbrica de autoevaluación',
      definicion: 'Lista de elementos que un trabajo debe tener para considerarse completo. El estudiante mismo se evalúa marcando cuáles aplicó. Para 6° grado P3, son 10 elementos.',
      ejemplo: 'Los 10 elementos: archivo correcto, título formateado, párrafos formateados, énfasis, lista, tabla, imagen, marco, información verificable, fuentes CRAAP. Marcas los que cumpliste.',
      emoji: '📋'
    },
    {
      termino: 'Integración de aprendizajes',
      definicion: 'Capacidad de aplicar muchas habilidades aprendidas por separado en un solo trabajo. Es la diferencia entre \'saber por partes\' y \'saber el oficio\'.',
      ejemplo: 'Aprender Word, formato, fuentes y otros por separado es paso 1. Hacer un documento que aplica los 10 elementos juntos sin pensar mucho es integración: oficio.',
      emoji: '🧩'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Estás listo para entregar tu cosecha?',
      instrucciones: '5 preguntas para verificar que tu documento cumple los 10 elementos clave.',
      preguntas: [
        {
          enunciado: 'Tu documento tiene contenido, pero no tiene portada. ¿Cumple los 10 elementos?',
          opciones: [
            'Sí, la portada es opcional.',
            'Sí, si el título es grande.',
            'No tiene importancia.',
            'No, falta el elemento 8 (marco completo). La portada es parte del marco profesional.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. La portada separada es parte del marco profesional. Sin portada falta uno de los 10. Agrégala antes de entregar.',
          feedbackIncorrecto: 'La portada es elemento 8 del marco. Sin portada falta un elemento. Agrega 1 página al inicio con título grande, nombre, grado, fecha.'
        },
        {
          enunciado: 'Citaste solo 1 fuente al final del documento. ¿Cumple?',
          opciones: [
            'No, mínimo 3 fuentes con evaluación CRAAP.',
            'Sí, 1 es suficiente.',
            'Solo si la fuente es muy buena.',
            'Sí, si la fuente es Wikipedia.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Mínimo 3 fuentes citadas para evitar depender de una sola perspectiva. Cada una con CRAAP rápido.',
          feedbackIncorrecto: 'Mínimo 3 fuentes citadas con CRAAP. Una sola fuente te hace depender de su perspectiva. Verificar en varias fuentes es buena práctica.'
        },
        {
          enunciado: 'Tu lista de 3 ítems empieza así: \'Lavar las verduras, Cortar todo, La cocción final\'. ¿Está bien?',
          opciones: [
            'Sí, perfecto.',
            'Sí, los 3 son ítems válidos.',
            'No, no tiene formato gramatical paralelo. Mejor: Lavar, Cortar, Cocer (todos en infinitivo).',
            'Solo falta el cuarto.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Formato paralelo: todos los ítems con la misma estructura gramatical. Si arrancas con verbo en infinitivo, todos en infinitivo.',
          feedbackIncorrecto: 'Falla el formato paralelo. Si el primero es verbo (Lavar), todos verbo. La mezcla "Lavar las verduras / La cocción" se ve descuidada.'
        },
        {
          enunciado: 'Tu tabla tiene 4 columnas pero la fila de encabezado NO está en negrita. ¿Está bien?',
          opciones: [
            'Sí, las tablas son flexibles.',
            'No, la fila de encabezado debe ir en negrita para diferenciarse.',
            'Sí, si tiene colores.',
            'Solo si la tabla es grande.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El encabezado en negrita es regla. Sin él, el lector no sabe qué es cada columna a primera vista.',
          feedbackIncorrecto: 'Encabezado en negrita siempre. Sin él, las columnas no se distinguen del contenido. Es como un libro sin títulos de capítulos.'
        },
        {
          enunciado: 'Aplicaste 7 de los 10 elementos. ¿Está OK para entregar?',
          opciones: [
            'Mejor revisa los 3 que faltan y trata de aplicarlos. El objetivo es 8-10 de 10.',
            'Sí, es suficiente.',
            'Solo si los 3 que faltan son fáciles.',
            '10 son obligatorios siempre.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. 7/10 es regular. Tu objetivo es 8-10 para entrega. Revisa los 3 que faltan: probablemente son cosas rápidas que se completan en 10 minutos.',
          feedbackIncorrecto: 'La meta es 8-10 de 10. Los faltantes suelen tomar minutos extra. Antes de entregar, revisa qué te falta y complétalo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuántos elementos integré sin pensar y cuántos tuve que volver a revisar? Eso me dice qué tan asentado está el oficio.',
    transferencia: 'La próxima sesión es la Sesión 11 (cosecha formal del periodo): te autoevaluás con rúbrica visible, revisas el examen integrador del periodo 3, y te preparas para mirar atrás todo el año.',
    cierre: 'Al terminar la clase: (1) podrás integrar los 10 elementos aprendidos en el periodo; (2) sabrás aplicar cada uno en un solo documento; (3) habrás evaluado tu propio trabajo con rúbrica; (4) podrás citar las 3 fuentes con evaluación CRAAP rápida.'
  },
  saberAncestral: {
    saber: 'Cuando doña Mercedes la maestra rural de la vereda La Plata de Cartago veía a un alumno terminar el cuaderno del año, hacía un ritual. El último día, los niños del campo presentaban su "trabajo de cosecha": el mejor de todo lo aprendido en el año. "Hoy van a mostrarme TODO lo que aprendieron en una sola tarea", decía. Si habían visto escritura, debía estar la mejor escritura. Si habían visto dibujo, el mejor dibujo. Si habían visto matemáticas, el mejor cálculo. Era el día en que cada estudiante demostraba que la suma de todo el año había crecido a algo nuevo. Hoy es tu día de cosecha del periodo 3. Vas a hacer un documento que reúna todo lo aprendido: el procesador de texto, el formato, las listas, las tablas, las imágenes, los encabezados, la búsqueda con operadores, la evaluación de fuentes. No es decoración: es la prueba de que el oficio ya es tuyo. El relojero arma su primer reloj completo después de meses de aprender pieza por pieza. Tú haces tu primer documento informativo.',
    preguntaPuente: 'Si tu profe te dijera "muéstrame en UN solo trabajo todo lo que aprendiste en el periodo 3", ¿podrías hacerlo? ¿Cuáles 10 elementos meterías en ese documento?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del aprendizaje integrado)',
      lente: 'lente del nosotros',
      cita: '"Aprender en partes está bien. Pero solo al armar el rompecabezas completo sabes si de verdad aprendiste."',
      preguntaEspejo: '¿Cuántos elementos integré sin pensar y cuántos tuve que volver a revisar? Eso me dice qué tan asentado está el oficio.'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Lo terminado vale más que lo perfecto. Termina bien lo que empieces; perfecciona en el siguiente."',
      preguntaEspejo: '¿Voy a entregar lo terminado, o me voy a quedar esperando perfeccionarlo sin entregar nada?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del documento como producto)',
      lente: 'lente de la infoesfera',
      cita: '"El documento es la cosecha del pensamiento. Lo que no se documenta, no se conserva. Lo que no se conserva, se olvida."',
      preguntaEspejo: '¿Estoy conservando lo que aprendo en documentos que puedo revisar, o lo dejo flotar en la memoria que se pierde?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás integrar los 10 elementos aprendidos en el periodo; (2) sabrás aplicar cada uno en un solo documento; (3) habrás evaluado tu propio trabajo con rúbrica; (4) podrás cit…',
    emocional: 'Tu documento de hoy no va a ser perfecto, y eso está bien.',
    ciudadana: 'Durante este periodo viste 8 sesiones distintas: Word, formato, listas, tablas, imágenes, marco, internet, búsqueda, fuentes.',
    local: 'Antes de salir, marca cuáles de los 10 elementos están y cuáles faltan.',
    intergeneracional: 'Lo que aprendiste este periodo, si no lo documentas en un trabajo concreto, se va a olvidar.'
  }
};

export default contenido;
