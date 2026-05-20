/**
 * Contenido web del examen final · Grado 6 · Período 3
 *
 * Auto-generado desde content/examenes/6-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 6,
  periodo: 3,
  titulo: 'Examen final · Escribir y buscar con criterio',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Escribir y buscar con criterio',
    instrucciones: 'Practica con 26 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuáles son los dos saberes principales del periodo 3 según la apertura (S1)?',
        opciones: [
          'Aprender a programar y a jugar.',
          'Escribir bien con criterio y buscar/evaluar información con criterio.',
          'Memorizar páginas web y descargar juegos.',
          'Comprar computador y arreglarlo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. P3 entrena el oficio doble de doña Mercedes: escribir bien + leer crítico. Las herramientas cambiaron (de cuaderno y periódico a Word e internet), pero el saber es el mismo.',
        feedbackIncorrecto: 'Los dos saberes son: escribir bien con criterio (procesador de texto, formato) y buscar/evaluar información con criterio (búsqueda + CRAAP). Es el "oficio doble" del periodo.'
      },
      {
        enunciado: 'Doña Mercedes preguntaba 5 cosas antes de creer una noticia. ¿Cuál NO era una de esas preguntas?',
        opciones: [
          '¿Quién lo escribió?',
          '¿Cuándo lo escribió?',
          '¿Cuánto cuesta?',
          '¿Qué prueba tiene?'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Doña Mercedes no preguntaba el precio; preguntaba: quién, cuándo, por qué, qué prueba, quién más lo dice. Esas 5 preguntas siguen siendo CRAAP, 50 años después.',
        feedbackIncorrecto: 'Las 5 preguntas eran: quién, cuándo, por qué, qué prueba, quién más lo dice. El precio no entra. Esas 5 se mapean con CRAAP de S9.'
      },
      {
        enunciado: '¿Qué es un procesador de texto?',
        opciones: [
          'Un programa para hacer videojuegos.',
          'Un programa para escribir, editar y dar formato a documentos (Word, Google Docs, LibreOffice).',
          'Un teclado especial.',
          'Un buscador de internet.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El procesador de texto es el programa donde escribes documentos y les das formato. Word, Google Docs y LibreOffice son los más usados.',
        feedbackIncorrecto: 'Un procesador de texto = programa para escribir y dar formato a documentos. Word, Google Docs, LibreOffice Writer. No es buscador ni hardware: es software de escritura.'
      },
      {
        enunciado: 'Estás en Word. ¿Dónde aparecen las opciones de fuente, tamaño, negrita, alineación?',
        opciones: [
          'En el menú mph{Archivo}.',
          'En la cinta de la pestaña mph{Inicio} (la primera y más usada).',
          'Solo con clic derecho.',
          'En el escritorio del computador.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. La pestaña Inicio es la cinta principal: fuente, tamaño, color, negrita, cursiva, subrayado, alineación. Es lo más usado.',
        feedbackIncorrecto: 'La pestaña Inicio contiene fuente, tamaño, negrita, cursiva, alineación. Archivo es para guardar/abrir/imprimir. Las dos son útiles, cada una con su función.'
      },
      {
        enunciado: '¿Qué fuente y tamaño son los más usados para texto académico/escolar?',
        opciones: [
          'Comic Sans 18.',
          'Arial o Calibri 11-12 (Times New Roman 12 también).',
          'Letra cursiva manuscrita.',
          'Cualquier fuente decorativa rara.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Arial/Calibri 11-12 o Times New Roman 12 son los estándares escolares y profesionales. Se leen fácil y se ven serias.',
        feedbackIncorrecto: 'Estándar académico: Arial/Calibri 11-12 o Times New Roman 12. Comic Sans no es académica (parece informal); las fuentes decorativas se ven poco serias en tareas.'
      },
      {
        enunciado: 'Tu profe te pide que "el título quede destacado". ¿Qué formato es el más razonable?',
        opciones: [
          'Título en mayúscula sostenida, subrayado, cursiva y rojo brillante.',
          'Título centrado, en negrita, 2-4 puntos más grande que el cuerpo, en color sobrio.',
          'Título en letra muy pequeña al final del documento.',
          'Título con todos los emojis posibles.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Título centrado + negrita + 2-4 pt más grande es el estándar limpio. No abuses de mayúscula, subrayado y color brillante a la vez: cansa la vista.',
        feedbackIncorrecto: 'Centrado + negrita + 2-4 pt más grande basta. Sobrecargar (mayúscula + subrayado + rojo) se ve infantil y poco profesional. Menos es más en formato.'
      },
      {
        enunciado: '¿Cuándo es mejor usar una lista numerada en lugar de viñetas?',
        opciones: [
          'Cuando los ítems siguen un orden, secuencia o pasos.',
          'Cuando da igual el orden.',
          'Solo cuando hay menos de 3 ítems.',
          'Nunca.'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Sí. Numerada = el orden importa (pasos, ranking, cronología). Viñetas = el orden no importa (lista de ideas paralelas).',
        feedbackIncorrecto: 'Numerada cuando hay orden (pasos 1, 2, 3 · ranking · secuencia). Viñetas cuando no (lista de cosas que comparten algo, sin jerarquía). Elegir bien es claridad.'
      },
      {
        enunciado: 'Vas a hacer un documento con "5 lugares turísticos de Cartago, sin importar cuál es más bonito". ¿Qué tipo de lista usas?',
        opciones: [
          'Numerada (porque suena más serio).',
          'Viñetas (porque no hay jerarquía entre los lugares).',
          'Sin lista, solo texto corrido en un párrafo gigante.',
          'Lista de letras (A, B, C).'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Como no hay orden de importancia, viñetas es lo correcto. Numerar sugiere ranking, y el caso dice "sin importar cuál".',
        feedbackIncorrecto: 'Como no hay jerarquía ("sin importar cuál"), van viñetas, no numeración. Numerar implicaría que el primero es "más importante", cosa que no quieres aquí.'
      },
      {
        enunciado: '¿Para qué sirve una tabla en un documento?',
        opciones: [
          'Para decorar la página.',
          'Para organizar datos en filas y columnas y compararlos fácilmente.',
          'Para hacer que el documento sea más largo.',
          'Para no escribir párrafos.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La tabla organiza datos en filas y columnas para que la comparación sea inmediata. Por ejemplo: ciudades vs población, años vs evento.',
        feedbackIncorrecto: 'Una tabla compara datos rápido (filas + columnas). No es decoración: es herramienta de claridad. Si tus datos comparan algo, tabla. Si son texto narrativo, párrafo.'
      },
      {
        enunciado: 'Estás escribiendo sobre 5 ciudades del Valle y quieres comparar nombre, año de fundación y población. ¿Qué eliges?',
        opciones: [
          'Un párrafo largo con todos los datos seguidos.',
          'Una tabla de 6 filas (encabezado + 5 ciudades) y 3 columnas (nombre, año, población).',
          'Una imagen sin datos.',
          'Solo viñetas, una por ciudad, sin comparar.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Tabla 6×3 hace la comparación inmediata. El lector ubica un dato en segundos. Un párrafo o viñetas no comparan tan claro.',
        feedbackIncorrecto: 'Tabla 6×3 (encabezado + 5 filas, 3 columnas). Cuando comparas datos numéricos o categorías equivalentes, tabla es la mejor herramienta de claridad.'
      },
      {
        enunciado: '¿Qué información típica va en el encabezado y el pie de página?',
        opciones: [
          'Solo dibujos sin texto.',
          'Encabezado: nombre, materia, fecha. Pie de página: número de página y a veces fuente.',
          'Encabezado: chistes. Pie: emojis.',
          'Solo el color de fondo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Encabezado = identifica el documento (nombre, materia, fecha). Pie = número de página y a veces fuente. Convención profesional desde hace décadas.',
        feedbackIncorrecto: 'Encabezado lleva identificación del documento (nombre, materia, fecha, título corto). Pie lleva número de página y a veces fuente. Es convención académica/profesional estable.'
      },
      {
        enunciado: '¿Qué es internet?',
        opciones: [
          'Un solo computador gigante en EE.UU.',
          'Una red mundial de computadoras y servidores conectados entre sí que intercambian datos.',
          'Una sola aplicación.',
          'Un cable submarino.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Internet = red global de redes (computadoras, servidores, routers) que intercambian datos por cables, satélites y antenas.',
        feedbackIncorrecto: 'Internet es una red de redes: computadoras y servidores en todo el mundo, conectados por cables, satélites y antenas, intercambiando datos en formato estándar (TCP/IP).'
      },
      {
        enunciado: 'Cuando entras a una página web, ¿qué ocurre en simplificado?',
        opciones: [
          'El computador inventa la página solo.',
          'Tu navegador pide la página a un servidor; el servidor la envía por la red y tu navegador la muestra.',
          'El profe la copia y la pone.',
          'Internet la genera mágicamente.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Modelo cliente-servidor: tu navegador (cliente) pide; el servidor responde con los archivos (HTML, imágenes, video) y el navegador los muestra.',
        feedbackIncorrecto: 'Cliente-servidor: tu navegador pide, el servidor envía la página, tu navegador la muestra. Por eso si el servidor está caído, no ves nada aunque tengas internet.'
      },
      {
        enunciado: 'Quieres buscar páginas oficiales de la Alcaldía de Cartago. ¿Cuál búsqueda es más efectiva?',
        opciones: [
          '"alcaldía"',
          '"alcaldía cartago site:gov.co"',
          '"alcaldía cartago feliz"',
          '"alcaldía dijiste cartago me digo"'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El operador site:gov.co restringe a dominios oficiales colombianos. Más preciso que la búsqueda libre.',
        feedbackIncorrecto: 'El operador site:gov.co restringe a dominios .gov.co (oficiales colombianos). Es la forma más rápida y limpia de llegar a fuentes oficiales sin colarse propaganda.'
      },
      {
        enunciado: 'Quieres buscar la frase exacta "identidad digital responsable" (sin que Google la rompa en pedazos). ¿Cómo lo escribes?',
        opciones: [
          'identidad digital responsable',
          '"identidad digital responsable"',
          'identidad+digital+responsable',
          'identidad-digital-responsable'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Las comillas dobles fuerzan a Google a buscar la frase tal cual, sin separar palabras. Útil para frases técnicas exactas.',
        feedbackIncorrecto: 'Las comillas "..." buscan la frase exacta. Sin comillas, Google puede dispersar las palabras y traerte resultados que no son lo que buscas.'
      },
      {
        enunciado: '¿Qué significa CRAAP en evaluación de fuentes?',
        opciones: [
          'Currency · Relevance · Authority · Accuracy · Purpose.',
          'Cualquier · Rápido · Asunto · Antiguo · Poco.',
          'Comer · Reír · Andar · Aplaudir · Pensar.',
          'Color · Ratón · Animal · Astro · Pesos.'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Sí. CRAAP = Currency (cuán reciente), Relevance (qué tan pertinente), Authority (quién la firma), Accuracy (qué tan precisa), Purpose (con qué intención).',
        feedbackIncorrecto: 'CRAAP = Currency (fecha), Relevance (relevancia), Authority (autoría/quién), Accuracy (exactitud), Purpose (intención). Las 5 letras evalúan una fuente.'
      },
      {
        enunciado: 'Una página dice "los teléfonos celulares causan cáncer al instante". No tiene autor, no dice fecha, y la URL es tudoctorgratis.tk. ¿Qué CRAAP falla más?',
        opciones: [
          'Solo mph{Currency}.',
          'Solo mph{Authority}.',
          'Falla mph{Authority} (sin autor), mph{Currency} (sin fecha) y mph{Accuracy} (afirmación extrema sin estudio).',
          'No falla nada.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. Sin autor, sin fecha y con afirmación extrema sin prueba, fallan 3 criterios CRAAP. Esa página no se cita; se descarta.',
        feedbackIncorrecto: 'Fallan al menos 3 letras de CRAAP: Authority (sin autor), Currency (sin fecha) y Accuracy (afirmación extrema sin estudio). Página descartable; no se cita.'
      },
      {
        enunciado: 'Te llega un audio de WhatsApp con voz urgente que dice: "Hay una alerta de bomba en el colegio, salgan todos". ¿Qué haces?',
        opciones: [
          'Reenviarlo a todos para alertar a más gente.',
          'Salir corriendo del colegio sin avisar a nadie.',
          'Verificar la fuente: ir al coordinador o profe inmediatamente y NO reenviar hasta confirmar.',
          'Borrarlo y no contarle a nadie.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Audios urgentes y sin fuente verificada son la receta clásica del rumor que cunde. Pregunta al coordinador o profe en persona; ellos saben si es real.',
        feedbackIncorrecto: 'Verificar primero con autoridad real del colegio (coordinador, profe). Reenviar audios urgentes sin verificar es la forma más rápida de generar pánico injustificado. Borrar sin avisar tampoco: la autoridad debe saber que circula.'
      },
      {
        enunciado: '¿Cuál de estas señales NO es típica de una fake news?',
        opciones: [
          'Promete algo demasiado bueno o demasiado terrible.',
          'Cita estudios concretos con autor, fecha y revista.',
          'URL rara con dominios .tk, .info exóticos o letras extrañas.',
          'Pide reenviarlo o actuar con urgencia.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Citar estudios reales con autor, fecha y revista es seña de fuente seria, no de fake. Las otras tres sí son señales típicas.',
        feedbackIncorrecto: 'Citar estudios con autor, fecha y revista es señal de calidad. Las fake suelen: prometer extremos, urgir reenvío, tener URL rara o nada de pruebas verificables.'
      },
      {
        enunciado: 'Estás cerrando tu documento informativo del periodo. ¿Qué NO debe faltar al final?',
        opciones: [
          'Solo tu nombre.',
          'Sección de fuentes (al menos 2 fuentes reales con título, autor o entidad, fecha de consulta).',
          'Solo emojis decorativos.',
          'Nada, se entrega sin firma.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las fuentes son lo que separa un documento serio de un papel suelto. Mínimo 2, con título + autor/entidad + fecha de consulta.',
        feedbackIncorrecto: 'Sección de fuentes al final es obligatoria en un documento informativo serio. Mínimo 2 fuentes con título, autor o entidad y fecha de consulta. Es honestidad intelectual.'
      },
      {
        enunciado: 'Vas a estructurar tu documento de 2 páginas. ¿Cuál orden es el más razonable?',
        opciones: [
          'Cierre, título, contenido, introducción, fuentes.',
          'Título + introducción breve + 2-3 secciones con subtítulo + cierre + fuentes.',
          'Solo párrafos sin subtítulos.',
          'Páginas sueltas sin orden.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Estructura clara: título + intro corta + 2-3 secciones con subtítulo (cada una con su párrafo) + cierre + fuentes. Es la estructura más usada en informe escolar.',
        feedbackIncorrecto: 'Orden estándar: título → intro corta → 2-3 secciones con subtítulo → cierre → fuentes. Ese esqueleto lo entiende cualquier lector y te ahorra organizar caótico.'
      },
      {
        enunciado: 'Vas a incluir una imagen en tu documento. ¿Qué le pones debajo?',
        opciones: [
          'Nada, la imagen habla sola.',
          'Pie de imagen: descripción breve + fuente (de dónde la tomaste o autor).',
          'El pie de la página.',
          'Solo emojis.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Pie de imagen estándar: Figura 1: descripción breve. Fuente: [autor o sitio web]. Es honestidad sobre el origen.',
        feedbackIncorrecto: 'Pie de imagen profesional: descripción breve + fuente (de dónde proviene). Decir de dónde viene una imagen es básico de honestidad académica.'
      },
      {
        enunciado: 'Quieres excluir resultados de Wikipedia en una búsqueda de Google. ¿Cuál operador usas?',
        opciones: [
          '+wikipedia',
          '-wikipedia',
          '*wikipedia*',
          '&wikipedia'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. El guion menos excluye un término. Ejemplo: historia cartago -wikipedia → resultados sin Wikipedia.',
        feedbackIncorrecto: 'El guion (-) excluye. Útil cuando un término aparece en todos lados y enturbia tu búsqueda. -wikipedia te muestra fuentes alternativas.'
      },
      {
        enunciado: 'Antes de entregar tu documento informativo, ¿cuál es la mejor verificación final?',
        opciones: [
          'Solo revisar que tenga muchas páginas.',
          'Revisar formato (fuente/tamaño/alineación), ortografía, fuentes citadas, encabezado/pie/números y que cumpla lo pedido por el profe.',
          'Solo revisar el color del título.',
          'Mandarlo sin leerlo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Checklist final: formato + ortografía + fuentes + encabezado/pie/numeración + cumplir lo pedido. 5 minutos de revisión te suben la nota entera.',
        feedbackIncorrecto: 'Checklist final: formato consistente, ortografía, fuentes citadas, encabezado/pie/números, cumplir lo pedido por el profe. Revisar 5 minutos antes de entregar es la mejor inversión.'
      },
      {
        enunciado: '¿Cómo insertas números de página en Word?',
        opciones: [
          'Escribiéndolos a mano uno por uno al pie de cada página.',
          'Pestaña Insertar → Número de página → eliges posición (pie, centro, derecha).',
          'No se pueden insertar números.',
          'Solo con clic derecho en cualquier parte.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Pestaña Insertar → Número de página. Word los agrega automáticamente y los actualiza si agregas o quitas páginas. Profesional.',
        feedbackIncorrecto: 'Pestaña Insertar → Número de página → eliges posición. Word los pone automáticamente; nunca a mano (si agregas una página, se descuadra todo).'
      },
      {
        enunciado: '¿Cuál de estas afirmaciones sobre internet es FALSA?',
        opciones: [
          'Internet es una red mundial de redes.',
          'Internet funciona por cables submarinos, antenas, satélites y servidores.',
          'Internet es lo mismo que la World Wide Web (las páginas web).',
          'Internet tiene reglas técnicas (protocolos) para que computadoras de diferentes marcas se entiendan.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Internet $\\neq$ Web. La Web es una capa de internet (páginas con URL). Internet también tiene correo, mensajería, videollamada, juegos en línea, etc.',
        feedbackIncorrecto: 'Internet es la red completa (cables, servidores, protocolos). La Web (páginas web) es una parte de internet. También están correo, mensajería, juegos, etc. Confundirlos es común.'
      }
    ]
  }
};

export default contenido;
