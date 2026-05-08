/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 4
 * (sesión global 24 — Edición ética de imagen).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 4,
  resumen: 'Como el retoque del fotógrafo de plaza: limpiar la mancha, ajustar la luz, recortar el papel. Cuidar la imagen sin mentir sobre su contenido. Aprendes la línea ética entre edición y manipulación.',
  duracionMin: 90,
  subtema: 'Edición · Ética visual · Derechos de imagen',

  preLectura: {
    porQueImporta: 'Saber editar éticamente te protege legal y profesionalmente. En un mundo de Photoshop fácil, la honestidad visual es habilidad escasa y valiosa.',
    preguntaDetonante: '¿Qué del retoque del fotógrafo de plaza —su ética de mejorar sin mentir— podemos llevar a la edición digital?',
    activacion: { titulo: 'La línea ética', descripcion: 'En 5 minutos: en parejas decidan si las siguientes ediciones son éticas o manipulación: 1) aclarar foto oscura, 2) borrar persona del fondo, 3) recortar bordes, 4) cambiar color del cielo. Justifiquen.', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 23 construiste presentación de alto impacto.', siguiente: 'En la sesión 25 aprenderás edición básica de sonido para presentaciones.' },
  },

  conceptosClave: [
    { categoria: '✂️ Edición básica', termino: 'Recortar', definicion: 'Eliminar bordes innecesarios para enfocar el sujeto. Cambia el ENCUADRE pero no el CONTENIDO. Edición ética cuando elimina distracciones.', ejemplo: 'Foto del proyecto con bordes con basura. Recortar enfoca lo importante. NO es manipulación.', emoji: '✂️' },
    { categoria: '✂️ Edición básica', termino: 'Brillo/Contraste', definicion: 'Ajustar luminosidad y diferencia entre claros/oscuros. Hace legible una imagen oscura sin alterar su contenido.', ejemplo: 'Foto con sombra del flash: aumentar brillo +20% para ver detalles. Sigue siendo la misma escena.', emoji: '☀️' },
    { categoria: '✂️ Edición básica', termino: 'Saturación', definicion: 'Intensidad de los colores. Sutil aumento puede mejorar; exceso se ve artificial y poco profesional.', ejemplo: 'Aumentar saturación 10-15% mejora colores naturales. +50% se ve falso.', emoji: '🎨' },
    { categoria: '✂️ Edición básica', termino: 'Filtros', definicion: 'Efectos predefinidos. Algunos son útiles (blanco y negro, sepia para histórico). Filtros agresivos quitan profesionalismo.', ejemplo: 'Filtro de Instagram en presentación profesional pierde seriedad. Filtros sutiles de ajuste son aceptables.', emoji: '🎭' },
    { categoria: '⚖️ Ética visual', termino: 'Edición vs manipulación', definicion: 'EDICIÓN mejora la legibilidad sin alterar contenido. MANIPULACIÓN cambia lo que la imagen muestra. La línea es: ¿se altera la realidad?', ejemplo: 'Aclarar foto = edición ética. Borrar persona del fondo = manipulación. La diferencia es ética, no técnica.', emoji: '⚖️' },
    { categoria: '⚖️ Ética visual', termino: 'Conservar la verdad', definicion: 'Principio profesional: la imagen editada debe seguir representando lo que realmente pasó. Periodismo y ciencia exigen esto. Educación también.', ejemplo: 'Si la foto del experimento muestra error, no lo borres. Documenta el error. La ciencia es honestidad visual.', emoji: '🔍' },
    { categoria: '⚖️ Ética visual', termino: 'Atribución', definicion: 'Citar al autor y la fuente cuando la imagen no es propia. Es ética y legal. Sin atribución es plagio visual.', ejemplo: '"Imagen: Pexels, autor: Juan Pérez, 2024" en pequeño bajo la imagen. Da crédito y permite verificación.', emoji: '🏷️' },
    { categoria: '⚖️ Ética visual', termino: 'Derechos de imagen', definicion: 'Conjunto legal sobre quién puede usar una imagen. Creative Commons (CC) permite uso con condiciones. Imágenes con copyright requieren permiso.', ejemplo: 'Pexels, Unsplash, Pixabay → CC, libre uso. Google Imágenes generalmente NO es libre — son imágenes con derechos.', emoji: '⚖️' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Edición ética de imagen',
    instrucciones: '5 preguntas tipo ICFES sobre edición ética y derechos de imagen.',
    preguntas: [
      { enunciado: '¿Cuál es la línea entre edición ética y manipulación?', opciones: ['No hay línea, todo es edición', 'Edición mejora legibilidad sin alterar contenido; manipulación cambia lo que la imagen muestra', 'La edición es siempre ilegal', 'Solo importa el resultado final'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. EDICIÓN: aclarar, recortar, ajustar contraste sin cambiar QUÉ se muestra. MANIPULACIÓN: borrar/agregar elementos, cambiar lo que la imagen representa. La línea es ÉTICA, no técnica.', feedbackIncorrecto: '❌ SÍ hay línea ética clara: edición = mejorar legibilidad sin alterar contenido (recortar bordes, ajustar brillo). Manipulación = cambiar lo que la imagen muestra (borrar/agregar elementos). Ambas son técnicas, pero éticamente distintas.' },
      { enunciado: 'Para presentaciones profesionales, los filtros de Instagram (vintage, blur, etc.):', opciones: ['Son obligatorios', 'Pierden profesionalismo y deben evitarse', 'Mejoran toda imagen', 'Solo aplican a fotos personales'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Los filtros de Instagram tienen estética casual/personal. En presentación profesional pierden seriedad. Lo profesional: ediciones SUTILES (brillo, contraste 5-15%) sin filtros agresivos.', feedbackIncorrecto: '❌ Filtros de Instagram en contexto profesional pierden seriedad. La presentación profesional usa ediciones SUTILES (ajuste fino de brillo/contraste, no filtros agresivos).' },
      { enunciado: 'Si descargas una imagen de Pexels para tu presentación, debes:', opciones: ['Borrar la marca de agua', 'Citar fuente y autor (es ética y legal)', 'Pagarle al autor', 'No es necesario nada'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Pexels es Creative Commons (libre uso) PERO la atribución es ética. Cita: "Imagen: Pexels, autor X". Es legal Y demuestra integridad profesional.', feedbackIncorrecto: '❌ Pexels NO requiere pago (es libre). Pero la ATRIBUCIÓN al autor sí es ética y profesional. Cita siempre: "Imagen: Pexels, autor X". La atribución es buen oficio.' },
      { enunciado: 'Aumentar la saturación de una foto al 100% (máximo):', opciones: ['Es siempre mejor', 'Hace que la imagen se vea artificial y poco profesional', 'Es la edición estándar', 'Mejora la calidad real'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. Saturación máxima se ve "fake". La regla profesional: ajustes SUTILES (10-15% máximo). Más se ve sobre-procesado y pierde naturalidad.', feedbackIncorrecto: '❌ Saturación al máximo se ve ARTIFICIAL, no mejorada. La regla profesional: ajustes SUTILES (10-15%). El sobre-procesamiento se nota y pierde profesionalismo.' },
      { enunciado: 'Una imagen descargada de Google Imágenes (sin verificar licencia):', opciones: ['Es libre de uso', 'Generalmente tiene derechos de autor — requiere verificar antes de usar', 'Solo aplica para Google', 'Es de dominio público'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. Google Imágenes es BUSCADOR, no banco de imágenes libres. Cada imagen puede tener derechos. Verificar la licencia (filtro de Google: "derechos de uso") o usar plataformas explícitamente CC (Pexels, Unsplash).', feedbackIncorrecto: '❌ Google Imágenes es BUSCADOR (encuentra imágenes en internet). Cada imagen tiene su licencia que hay que verificar. Para uso seguro: usar Pexels, Unsplash, Pixabay (Creative Commons) o filtrar Google por "libre para usar".' },
    ],
  }],

  postLectura: {
    reflexion: 'La edición ética es disciplina personal. ¿Cuándo te has sentido tentado a "mejorar" una imagen cruzando la línea ética? ¿Cómo lo manejaste?',
    transferencia: 'Esta semana: revisa 5 imágenes de tus redes sociales. ¿Cuáles fueron editadas éticamente y cuáles cruzaron la línea? Aplica la regla "¿alteré el contenido o solo la legibilidad?".',
    cierre: 'El fotógrafo de plaza y el editor digital comparten oficio: cuidar la imagen sin mentir sobre su contenido. La ética es ancestral; las herramientas son nuevas.',
  },
};

export default contenido;
