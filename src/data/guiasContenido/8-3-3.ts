/**
 * Contenido enriquecido para Grado 8 · Período 3 · Sesión 3
 * (sesión global 23 — Presentación de alto impacto).
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 3,
  sesion: 3,
  resumen: 'Como el cuento del fogón: principio, nudo y desenlace. Aprendes a construir presentación de 7 minutos con narrativa que engancha desde el primer segundo y deja huella al cerrar.',
  duracionMin: 90,
  subtema: 'Narrativa · Alto impacto · TED-style',

  preLectura: {
    porQueImporta: 'Saber contar un proyecto con narrativa es habilidad de líder, no solo de presentador. Te servirá para vender ideas, defender propuestas, conseguir aliados.',
    preguntaDetonante: '¿Qué del cuento del fogón —la gramática narrativa heredada— podemos llevar a la presentación tecnológica?',
    activacion: { titulo: 'El gancho que enganchó', descripcion: 'En 5 minutos: cada uno cuenta a su pareja un proyecto suyo en 30 segundos, empezando por un dato sorprendente o una pregunta. Comparen: ¿cuál enganchó más?', duracionMin: 5 },
    conexion: { anterior: 'En la sesión 22 aprendiste animaciones e hipervínculos disciplinados.', siguiente: 'En la sesión 24 aprenderás edición ética de imágenes para tu presentación.' },
  },

  conceptosClave: [
    { categoria: '📖 Narrativa', termino: 'Gancho inicial', definicion: 'Primera frase o imagen que captura atención inmediata. Dato sorprendente, pregunta retórica, anécdota corta. Los primeros 30 segundos deciden si la audiencia escuchará el resto.', ejemplo: '"El 70% del agua de Cartago se va en agricultura tradicional. Mi proyecto la reduce al 5%". El gancho enganchó.', emoji: '🎣' },
    { categoria: '📖 Narrativa', termino: 'Conflicto', definicion: 'Problema humano real que tu proyecto aborda. NO es enumeración de datos — es la situación que afecta a personas concretas. Sin conflicto humano, no hay narrativa.', ejemplo: '"Las huertas familiares de mi barrio dependen del agua que escasea. Mis vecinos riegan o pagan agua, no pueden hacer ambas".', emoji: '⚔️' },
    { categoria: '📖 Narrativa', termino: 'Solución', definicion: 'Cómo tu proyecto aborda el conflicto. Combina técnica (cómo funciona) con valor humano (qué cambia para las personas). NO solo tecnología.', ejemplo: '"Hidroponía escolar reduce 95% del consumo de agua. Replicable en hogares con $50,000 de inversión inicial".', emoji: '💡' },
    { categoria: '📖 Narrativa', termino: 'Llamado a acción', definicion: 'Lo que quieres que la audiencia haga después de tu presentación. Concreto, específico, ejecutable. NO genérico ("apoyen el proyecto").', ejemplo: '"Implementemos un piloto en 3 hogares antes de fin de año. Necesito 2 voluntarios y $150,000 del fondo de la cooperativa".', emoji: '📢' },
    { categoria: '🎯 Soporte visual', termino: 'Imagen impactante', definicion: 'Foto o gráfico que comunica al primer vistazo el conflicto o la solución. NO genérica — específica de tu contexto.', ejemplo: 'Foto de tu vecina regando con balde + imagen de hidroponía funcionando = comparación visual del antes/después.', emoji: '📸' },
    { categoria: '🎯 Soporte visual', termino: 'Dato sorpresa', definicion: 'Cifra inesperada que la audiencia no conocía. Crea momento de "wow" y memoria. Debe ser verificable y tener fuente.', ejemplo: '"En Cartago, 1 de cada 3 estudiantes vive en hogar con huerta. (Fuente: encuesta colegio, 2026)". Sorprendente para muchos.', emoji: '🤯' },
    { categoria: '🎯 Soporte visual', termino: 'Comparación visual', definicion: 'Mostrar dos imágenes lado a lado para que la audiencia VEA la diferencia. Más potente que enumerar números.', ejemplo: 'Antes: huerta tradicional con balde. Después: hidroponía con bomba. Las dos fotos cuentan la historia sin palabras.', emoji: '⚖️' },
    { categoria: '🎯 Soporte visual', termino: 'Cierre memorable', definicion: 'Última frase, imagen o promesa que se queda en la mente. Más allá de "gracias" — algo que la audiencia recuerde mañana.', ejemplo: '"En 5 años, cada hogar de Cartago podría producir su comida con 1/20 del agua actual. ¿Empezamos hoy?" Pregunta abierta + visión.', emoji: '🌟' },
  ],

  laboratorios: [{
    tipo: 'quiz',
    titulo: 'Quiz · Narrativa de alto impacto',
    instrucciones: '5 preguntas tipo ICFES sobre estructura narrativa de presentaciones.',
    preguntas: [
      { enunciado: 'El "gancho inicial" en una presentación profesional es:', opciones: ['Cualquier saludo formal', 'Dato sorprendente, pregunta o anécdota corta que captura atención inmediata', 'Una broma para relajar', 'La introducción larga del autor'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. El gancho captura atención en los primeros 30 segundos. Sin gancho, la audiencia se distrae con sus celulares. Con gancho, escucha el resto.', feedbackIncorrecto: '❌ Saludo formal e introducción larga son aburridos. Bromas son arriesgadas (depende del público). El GANCHO efectivo es: dato sorprendente, pregunta retórica, anécdota corta.' },
      { enunciado: 'Un "llamado a la acción" efectivo es:', opciones: ['"Espero que les guste"', '"Implementemos un piloto en 3 hogares antes de fin de año, necesito 2 voluntarios"', '"Apoyen el proyecto"', '"Gracias por escuchar"'], respuestaIndex: 1, feedbackCorrecto: '✅ Excelente. Llamado efectivo: específico (qué), cuándo (plazo), cómo (qué se necesita). Lo demás son fórmulas vacías que no movilizan acción.', feedbackIncorrecto: '❌ "Espero que les guste" no pide acción. "Apoyen" es genérico. "Gracias" cierra sin movilizar. El LLAMADO EFECTIVO es ESPECÍFICO: qué, cuándo, cómo.' },
      { enunciado: 'En la fórmula TED de presentaciones de alto impacto, la estructura es:', opciones: ['Solo enumeración de datos', 'Dato sorprendente → conflicto humano → solución → imagen memorable', 'Saludo → autor → contenido → preguntas', 'Solo gracias y aplauso'], respuestaIndex: 1, feedbackCorrecto: '✅ Sí. La fórmula TED universal: capturar (dato/pregunta) → involucrar (conflicto humano) → resolver (solución) → recordar (cierre memorable). Funciona en cualquier idioma y cultura.', feedbackIncorrecto: '❌ Las charlas TED siguen estructura narrativa, NO enumeración. Tampoco saludo formal típico. La fórmula: gancho → conflicto humano → solución → cierre memorable.' },
      { enunciado: 'Para tu presentación de 7 minutos sobre tu proyecto, ¿cuánto tiempo dedicar al gancho inicial?', opciones: ['3 minutos (mucho contexto)', '30 segundos (corto y poderoso)', '5 minutos (importante)', 'No es necesario'], respuestaIndex: 1, feedbackCorrecto: '✅ Correcto. El gancho debe ser CORTO Y PODEROSO: 30 segundos para capturar. Más es perder tiempo de la solución; menos puede no enganchar.', feedbackIncorrecto: '❌ El gancho NO es introducción larga. Su poder está en BREVEDAD: 30 segundos para capturar atención. El resto del tiempo es para conflicto, solución y cierre.' },
      { enunciado: '"Datos sin contexto humano" en una presentación significa:', opciones: ['Cifras presentadas sin traducirlas a impacto en personas reales', 'Datos de ciencias humanas', 'Información cualitativa', 'Datos sin gráfico'], respuestaIndex: 0, feedbackCorrecto: '✅ Sí. "Reducción 70% en consumo agua" es dato. "70% menos sed para mi vecina que riega con balde" es dato CON contexto humano. La narrativa traduce números a vidas.', feedbackIncorrecto: '❌ "Datos sin contexto humano" es presentar cifras sin traducirlas a IMPACTO en personas reales. La narrativa profesional siempre conecta dato → vida humana → emoción.' },
    ],
  }],

  postLectura: {
    reflexion: 'La narrativa es habilidad humana ancestral aplicada al contenido moderno. ¿Qué historia personal podrías contar para enganchar al iniciar tu presentación?',
    transferencia: 'Esta semana: redacta TU gancho inicial (30 segundos) y TU cierre memorable. Pruébalos con un compañero. Pregúntale: "¿qué recordarías 24 horas después?".',
    cierre: 'El cuento del fogón sobrevive en cada presentación TED memorable: gancho, conflicto, solución, cierre que perdura. La narrativa es ancestral; el medio es nuevo.',
  },
};

export default contenido;
