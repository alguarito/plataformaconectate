/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/10/10-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 3,
  titulo: 'Google Docs para informes profesionales — estilos, índice y citas',
  resumen: 'Google Docs es el procesador de texto gratuito más usado del mundo profesional.',
  duracionMin: 90,
  subtema: 'Google Docs para informes profesionales — estilos, índice y citas',
  preLectura: {
    porQueImporta: 'El criterio principal: que la diferencia visual y funcional sea evidente al primer vistazo.',
    preguntaDetonante: '¿Qué sabía el escribano del juzgado al respetar la estructura inquebrantable de cada documento legal, que el novato olvida cuando escribe informe en Docs sin aplicar los estilos? ¿Y por qué los 5 elementos profesionales de Docs hacen tanta diferencia visual y funcional?',
    activacion: {
      titulo: 'Experimento del estilo',
      descripcion: 'Actividad 1 · IDENTIFICA — Experimento del estilo (15 min · individual con dispositivo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy le pones forma profesional en Google Docs.',
      siguiente: 'En la sesión 4 vas a aprender Markdown: el formato portable que se puede convertir a PDF, HTML, libro, sin perder estructura.'
    }
  },
  conceptosClave: [
    {
      termino: 'Estilos de título',
      definicion: 'Sistema jerárquico (Título principal, Título 1, 2, 3). Aplicarlos consistentemente da estructura visible y permite generar índice automático.',
      ejemplo: 'Marcas cada capítulo con Título 1 y subsecciones con Título 2. Eso convierte el documento en navegable.',
      emoji: '🏷️'
    },
    {
      termino: 'Tabla de contenido automática',
      definicion: 'Índice generado por Docs a partir de los estilos de título. Se actualiza solo al cambiar la estructura.',
      ejemplo: 'Insertar → Tabla de contenidos. Si agregas un capítulo, actualizas con un clic y queda al día.',
      emoji: '📑'
    },
    {
      termino: 'Numeración de página',
      definicion: 'Inserción automática de número de página en encabezado o pie. Imprescindible en documentos de varias páginas.',
      ejemplo: 'Insertar → Número de página → centrado abajo. Para informe de 10 páginas, evita confusión al lector.',
      emoji: '🔢'
    },
    {
      termino: 'Citas APA',
      definicion: 'Herramienta de Docs para insertar citas y bibliografía en formato APA, MLA o Chicago. Para grado 10, APA básico basta.',
      ejemplo: 'Herramientas → Citas. Agregas autor, año y obra. Insertas la cita en el texto; al final genera la bibliografía.',
      emoji: '📚'
    },
    {
      termino: 'Pie de figura numerado',
      definicion: 'Etiqueta debajo de una imagen ("Figura 1: descripción"). Permite referenciarla en el texto sin ambigüedad.',
      ejemplo: '"La distribución se muestra en la Figura 2." El lector salta a la imagen y entiende contexto inmediato.',
      emoji: '🖼️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Usas Google Docs profesionalmente?',
      instrucciones: '5 preguntas para verificar que dominas las 5 herramientas clave.',
      preguntas: [
        {
          enunciado: '¿Cuántas herramientas profesionales clave tiene Google Docs?',
          opciones: [
            '1',
            '20',
            '5',
            '100'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. 5: estilos de título, índice automático, numeración, citas y pie de figura.',
          feedbackIncorrecto: 'Son 5. Usarlas convierte el documento de tarea escolar en pieza profesional.'
        },
        {
          enunciado: '¿Cómo se genera la tabla de contenido automática?',
          opciones: [
            'Se escribe a mano',
            'No se puede',
            'Hay que pagar',
            'Insertar → Tabla de contenidos (a partir de estilos de título)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Insertar → Tabla de contenidos. Se genera de los estilos y se actualiza con un clic.',
          feedbackIncorrecto: 'Insertar → Tabla de contenidos. Lo hace solo a partir de los estilos de título aplicados.'
        },
        {
          enunciado: '¿En qué menú están las citas APA?',
          opciones: [
            'Archivo',
            'Herramientas → Citas',
            'Edición',
            'Ayuda'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Herramientas → Citas. Soporta APA, MLA, Chicago.',
          feedbackIncorrecto: 'En Herramientas → Citas. Es el menú correcto para añadir referencias y generar bibliografía.'
        },
        {
          enunciado: '¿Por qué los pies de figura deben estar numerados?',
          opciones: [
            'Para poder referenciarlos en el texto sin ambigüedad',
            'Por costumbre',
            'Para que se vea bonito',
            'No importa'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La numeración permite escribir "ver Figura 2" sin que el lector se pierda.',
          feedbackIncorrecto: 'Para referenciarlas en el texto sin ambigüedad. "Figura 2" es claro; "la imagen de arriba" no.'
        },
        {
          enunciado: '¿Qué diferencia un documento "tarea escolar" de uno "profesional" en Docs?',
          opciones: [
            'El idioma',
            'Solo el título',
            'Solo la portada',
            'Usar los 5 elementos (estilos, índice, numeración, citas, pie de figura)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Aplicar los 5 elementos cambia la sensación del documento aunque el contenido sea el mismo.',
          feedbackIncorrecto: 'Los 5 elementos profesionales. Aplicarlos consistentemente da aire profesional al documento.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi documento sirve al lector profesional con orden visible, o le exige leer todo de corrido?',
    transferencia: 'En la sesión 4 vas a aprender Markdown: el formato portable que se puede convertir a PDF, HTML, libro, sin perder estructura.',
    cierre: 'Al terminar podrás: (1) identificar los 5 elementos profesionales de Google Docs y cuándo se aplican; (2) aplicar estilos de título consistentes, tabla de contenidos, numeración, citas APA básicas, imagen con pie de figura; (3) analizar las diferencias visuales y funcionales entr…'
  },
  saberAncestral: {
    saber: 'Frente al juzgado del centro de Cartago, en la carrera 6 con calle 14, hubo durante décadas un personaje silencioso que sostenía la formalidad legal del pueblo: el escribano público. Cualquier vecino que necesitaba redactar carta, poder, petición o reclamo iba donde el escribano, que ponía mesa pequeña con máquina de escribir y carbón al frente. El escribano no inventaba el formato: usaba uno estricto y conocido. Cada tipo de documento tenía su estructura inquebrantable: las partes (quién y quién), los considerandos (los hechos), las cláusulas (los acuerdos), las firmas (la formalización). Si el documento se entregaba sin esa estructura, el juzgado lo rechazaba con la frase fría: "este documento no está bien hecho". La sabiduría era ancestral y precisa: un documento legal mal organizado se cae solo. El escribano memorizaba las estructuras de cada tipo: poder simple, poder amplio, petición, denuncia, carta de recomendación. Cada una con sus partes en orden estricto. Esa disciplina del oficio ancestral vive hoy en los estilos y la estructura de Google Docs: el documento profesional se sostiene en orden visible, no en improvisación.',
    preguntaPuente: '¿Qué sabía el escribano del juzgado al respetar la estructura inquebrantable de cada documento legal, que el novato olvida cuando escribe informe en Docs sin aplicar los estilos? ¿Y por qué los 5 elementos profesionales de Docs hacen tanta diferencia visual y funcional?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un documento estructurado respeta al lector profesional; uno desordenado le quita tiempo y dignidad.',
      preguntaEspejo: '¿Mi documento sirve al lector profesional con orden visible, o le exige leer todo de corrido?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Aplicar estilos con disciplina es virtud profesional; formatear a mano por capricho es vanidad.',
      preguntaEspejo: '¿Estoy usando los estilos del sistema, o formateando a mano por costumbre?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La documentación bien estructurada es ética profesional en la era de los documentos digitales compartidos.',
      preguntaEspejo: '¿Mi documento funciona bien al circular, o se rompe en cuanto alguien más lo abre?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar los 5 elementos profesionales de Google Docs y cuándo se aplican; (2) aplicar estilos de título consistentes, tabla de contenidos, numeración, citas APA básicas, im…',
    emocional: 'Es tentador formatear a mano (negrita aquí, tamaño 14 allá) porque parece más rápido.',
    ciudadana: 'Quien recibe tu informe profesional (docente, coordinador, futuro jefe) tiene poco tiempo.',
    local: 'Antes de cerrar, mira los estilos desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era digital, los documentos circulan: se comparten con compañeros, se exportan a PDF, se editan en grupo.'
  }
};

export default contenido;
