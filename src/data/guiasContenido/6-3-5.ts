/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 5
 * (sesión global 25).
 *
 * Auto-generado desde content/guias/6/6-3-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 5,
  titulo: 'Tablas e imágenes — mostrar datos y agregar voz visual',
  resumen: 'Un documento profesional rara vez tiene solo texto.',
  duracionMin: 90,
  subtema: 'Tablas e imágenes — mostrar datos y agregar voz visual',
  preLectura: {
    porQueImporta: 'El producto es ese documento + las 5 reglas de imágenes en el cuaderno.',
    preguntaDetonante: 'Si tu profe te pide entregar un trabajo sobre "los 5 ríos más importantes de Colombia", ¿cómo lo presentas mejor? ¿En 2 párrafos de texto seguido, o en una tabla con columnas nombre · longitud · ubicación · datos curiosos? ¿Por qué?',
    activacion: {
      titulo: '6 situaciones para clasificar',
      descripcion: 'Actividad 1 · IDENTIFICA — 6 situaciones para clasificar (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: decides cuándo conviene tabla vs imagen, aprendes a insertar y ajustar ambos, aplicas el ajuste de texto alrededor, y armas tu documento mixto.',
      siguiente: 'Esta semana, en cualquier trabajo digital, considera si una tabla o una imagen mejoraría la entrega.'
    }
  },
  conceptosClave: [
    {
      termino: 'Tabla',
      definicion: 'Estructura de filas y columnas para mostrar datos comparables. Se usa cuando tienes información categorizada (por ejemplo, 5 países con sus capitales y poblaciones). El encabezado de columnas va en negrita.',
      ejemplo: 'Lista de ríos con columnas: nombre | longitud | departamento donde nace | desemboca. Se entiende en 30 segundos lo que en párrafo tomaría 5 minutos.',
      emoji: '📊'
    },
    {
      termino: 'Insertar imagen',
      definicion: 'En Word/Docs: Insertar → Imágenes → escoger archivo del computador. La imagen llega grande por defecto y desplaza el texto. Hay que ajustar tamaño y configurar el ajuste de texto.',
      ejemplo: 'Buscas una imagen libre en Pixabay, la descargas, en Word vas a Insertar → Imágenes → la seleccionas. Aparece en el documento, lista para ajustar.',
      emoji: '🖼️'
    },
    {
      termino: 'Ajuste de texto',
      definicion: 'Configuración que define cómo el texto se relaciona con la imagen. Las opciones más útiles: \'Cuadrado\' (texto rodea la imagen en rectángulo), \'Estrecho\' (más pegado a la forma), \'En línea con el texto\' (la imagen es como una letra grande).',
      ejemplo: 'Por defecto la imagen llega \'En línea\' y empuja todo. Cambiar a \'Cuadrado\' permite que el texto fluya a la derecha o izquierda, como en revistas.',
      emoji: '↔️'
    },
    {
      termino: 'Pie de imagen',
      definicion: 'Texto corto que va debajo de una imagen, en cursiva y tamaño pequeño (10 puntos). Indica qué muestra la imagen. Sin pie, el lector no sabe qué está viendo.',
      ejemplo: '"Figura 1: vista del parque Bolívar de Cartago, año 2024". Esa línea le dice al lector exactamente qué es la imagen, sin tener que adivinar.',
      emoji: '🏷️'
    },
    {
      termino: 'Imágenes de uso libre',
      definicion: 'Fotografías que pueden usarse sin pagar y sin violar derechos de autor. Las fuentes más conocidas: Pixabay (pixabay.com), Pexels (pexels.com), Unsplash (unsplash.com). Las imágenes de Google muchas veces tienen copyright.',
      ejemplo: 'Si necesitas una foto de una escuela para tu trabajo, vas a pixabay.com, escribes "escuela", descargas. Es legal usarla. Si la sacas de Google sin verificar, puede ser ilegal.',
      emoji: '🆓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes integrar tabla, imagen y texto?',
      instrucciones: '5 preguntas para verificar que dominas la integración de elementos visuales en un documento.',
      preguntas: [
        {
          enunciado: 'Vas a mostrar los 5 ríos más importantes de Colombia con su longitud, departamento de nacimiento y desembocadura. ¿Cómo lo presentas?',
          opciones: [
            '5 párrafos, uno por río.',
            'Una tabla de 5 filas × 4 columnas.',
            '5 imágenes pegadas.',
            'Solo un párrafo grande.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Datos comparables en categorías = tabla. 5 ríos × 4 columnas (nombre, longitud, nace, desemboca). Se lee en 30 segundos.',
          feedbackIncorrecto: 'Para datos comparables: tabla. Las 5 filas son los ríos, las 4 columnas los datos de cada uno. En párrafo se vuelve denso.'
        },
        {
          enunciado: 'Insertas una imagen y queda gigante bloqueando todo el texto. ¿Qué cambias?',
          opciones: [
            'Borro la imagen, no se puede arreglar.',
            'Cambio el ajuste de texto a \'Cuadrado\' y ajusto el tamaño con las esquinas.',
            'Le bajo el brillo a la pantalla.',
            'Pongo el texto en negrita.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Clic en la imagen → Opciones de diseño → Cuadrado. Después arrastras de las esquinas para reducir tamaño. El texto fluye al lado.',
          feedbackIncorrecto: 'El ajuste \'Cuadrado\' hace que el texto fluya alrededor. Y arrastrar de las esquinas (no de los lados, que deforma) la hace más pequeña.'
        },
        {
          enunciado: 'Necesitas una foto de árbol para tu documento. ¿De dónde la sacas?',
          opciones: [
            'De Google sin verificar.',
            'De Pixabay, Pexels o Unsplash (gratis y legal).',
            'Robo una de Instagram.',
            'Hago un dibujo a mano.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Pixabay, Pexels y Unsplash ofrecen imágenes gratis y de uso libre. Google muchas veces tiene copyright. Usar lo de otros sin permiso puede ser ilegal.',
          feedbackIncorrecto: 'Para imágenes libres: pixabay.com, pexels.com, unsplash.com. Google no es libre por defecto; muchas imágenes tienen copyright.'
        },
        {
          enunciado: 'Tu tabla tiene 4 columnas pero ninguna está en negrita. ¿Qué falta?',
          opciones: [
            'Nada, así está bien.',
            'Falta el encabezado en negrita para identificar qué es cada columna.',
            'Falta cambiar el color del fondo.',
            'Falta agregar más filas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La primera fila debe ir en negrita: es el encabezado que dice qué dato muestra cada columna. Sin él, el lector no sabe qué es qué.',
          feedbackIncorrecto: 'La fila de encabezado va en negrita siempre. Identifica las columnas y se ve profesional. Sin encabezado en negrita, la tabla se ve incompleta.'
        },
        {
          enunciado: 'Insertas una imagen y NO le pones pie de foto. ¿Está bien?',
          opciones: [
            'Sí, las imágenes hablan solas.',
            'No, el pie de foto en cursiva tamaño 10 le da contexto al lector.',
            'Solo necesita pie si es color.',
            'El pie es opcional para imágenes pequeñas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. El pie indica qué muestra la imagen y le da contexto. Sin él, el lector se pregunta \'¿qué es esto?\'. Va en cursiva tamaño 10.',
          feedbackIncorrecto: 'Toda imagen profesional tiene pie: en cursiva tamaño 10, debajo. Ejemplo: \'Figura 1: vista del río Cauca\'. Da contexto al lector.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy usando la herramienta correcta para cada idea que quiero comunicar?',
    transferencia: 'Esta semana, en cualquier trabajo digital, considera si una tabla o una imagen mejoraría la entrega.',
    cierre: 'Al terminar la clase: (1) podrás identificar cuándo usar tabla y cuándo imagen; (2) sabrás aplicar la inserción de ambos elementos en Word/Docs; (3) podrás evaluar las 5 reglas de uso de imágenes; (4) habrás creado un documento con tabla, imágenes y texto integrado.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes la maestra rural de la vereda La Plata de Cartago usaba el tablero de varias maneras al tiempo. A veces escribía texto. A veces hacía cuadros con líneas para comparar ("Las 4 estaciones: primavera, verano, otoño, invierno" en una tabla con sus características). Y a veces pegaba recortes de periódico o dibujos con líneas que apuntaban a las palabras importantes. "Las palabras solas no siempre alcanzan", decía doña Mercedes. "A veces hay que mostrar la cosa, no solo nombrarla." Un dibujo de la araña en el cuaderno enseñaba más que 5 párrafos describiéndola. Una tabla comparando vacas vs caballos se entendía en 30 segundos, mientras 2 párrafos comparándolos se demoraban 5 minutos. Mezclar texto, tablas e imágenes era ya el saber de doña Mercedes hace 40 años. Hoy los procesadores de texto te dan exactamente esas mismas herramientas en digital.',
    preguntaPuente: 'Si tu profe te pide entregar un trabajo sobre "los 5 ríos más importantes de Colombia", ¿cómo lo presentas mejor? ¿En 2 párrafos de texto seguido, o en una tabla con columnas nombre · longitud · ubicación · datos curiosos? ¿Por qué?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del mostrar y del decir)',
      lente: 'lente del nosotros',
      cita: '"Hay verdades que se dicen con palabras, otras se muestran con imágenes, otras se ordenan en filas. Saber cuándo usar cada una es saber comunicar."',
      preguntaEspejo: '¿Estoy usando la herramienta correcta para cada idea que quiero comunicar?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que documentaba con orden)',
      lente: 'lente del cuidado interior',
      cita: '"Una tabla bien hecha vale lo que dos páginas de palabras. Eso es economía de pensamiento."',
      preguntaEspejo: '¿Qué cosa que escribí en párrafo se entendería mejor en tabla?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del documento digital)',
      lente: 'lente de la infoesfera',
      cita: '"La imagen sin contexto es ruido. La tabla sin encabezado es caos. La integración es lo que hace al documento profesional."',
      preguntaEspejo: 'Cuando reviso mis documentos, ¿está cada elemento integrado o son piezas sueltas?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar cuándo usar tabla y cuándo imagen; (2) sabrás aplicar la inserción de ambos elementos en Word/Docs; (3) podrás evaluar las 5 reglas de uso de imágenes; (4)…',
    emocional: 'Hay gente que escribe largo cuando podría escribir corto.',
    ciudadana: 'Doña Mercedes sabía que enseñar a una niña qué es un río era distinto a enseñarle qué es una vaca: un río se muestra con mapa; una vaca con foto; los ríos del país en una tabla.',
    local: 'Antes de salir, verificas que la tabla y las imágenes están bien insertadas con el texto fluyendo.',
    intergeneracional: 'Una imagen suelta sin pie de foto NO comunica: el lector se pregunta "¿qué es esto?".'
  }
};

export default contenido;
