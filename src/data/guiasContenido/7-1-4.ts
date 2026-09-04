/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/7/7-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 4,
  titulo: 'Word, Excel y PowerPoint en línea — las 3 herramientas estrella',
  resumen: 'Word, Excel y PowerPoint son las 3 aplicaciones más usadas del paquete Microsoft 365.',
  duracionMin: 90,
  subtema: 'Word, Excel y PowerPoint en línea — las 3 herramientas estrella',
  preLectura: {
    porQueImporta: 'El producto son los 3 archivos en OneDrive + tabla comparativa en cuaderno.',
    preguntaDetonante: 'Si te dieran a escoger una sola app de las 3 para aprender muy bien (a costa de no usar las otras 2), ¿cuál escogerías y por qué? ¿Word, Excel o PowerPoint? La respuesta dice mucho sobre el oficio que más te llama.',
    activacion: {
      titulo: '9 situaciones, 3 apps',
      descripcion: 'Actividad 1 · IDENTIFICA — 9 situaciones, 3 apps (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: distingues Word vs Excel vs PowerPoint, abres cada una en línea, creas un archivo en cada una, guardas todo en OneDrive.',
      siguiente: 'Esta semana, vuelve a abrir tus 3 archivos al menos 1 vez para revisarlos y mejorarlos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Word Online',
      definicion: 'La versión de Word que funciona dentro del navegador, sin instalar nada. Tiene 95% de las funciones de Word de escritorio. Se guarda automáticamente en OneDrive cada pocos segundos. Acceso desde cualquier computador con tu cuenta.',
      ejemplo: 'Para una tarea de Sociales abres office.com → Word → Documento en blanco. Escribes, formateas, se guarda solo. Mañana abres desde otro PC y sigue ahí.',
      emoji: '📝'
    },
    {
      termino: 'Excel Online',
      definicion: 'La versión de Excel en el navegador. Tiene celdas, fórmulas, gráficos automáticos. Para 7° grado tiene de sobra. Las celdas se identifican A1, B2, C3 (columna + fila). Fórmulas empiezan con = (igual).',
      ejemplo: 'En la celda E2 escribes =PROMEDIO(B2:D2) y aparece el promedio automático. Arrastras el cuadrito de la esquina hacia abajo y la fórmula se propaga a otras filas.',
      emoji: '📊'
    },
    {
      termino: 'PowerPoint Online',
      definicion: 'La versión web de PowerPoint para crear presentaciones con diapositivas. Cada diapositiva es una página visual con título + contenido. Tienen plantillas (Diseño → Temas), transiciones, modo presentador.',
      ejemplo: 'Para presentación oral de Sociales: 5-10 diapositivas con 1 idea por slide. Aplicas un tema, insertas imágenes, presentas con F5 (modo presentador). Profesional.',
      emoji: '📽️'
    },
    {
      termino: 'Fórmula de Excel (=PROMEDIO)',
      definicion: 'Instrucción que le dice a Excel que calcule algo automáticamente. Las fórmulas siempre empiezan con = (igual). =PROMEDIO(B2:D2) calcula el promedio de las celdas de B2 a D2. Hay miles de fórmulas en Excel.',
      ejemplo: 'Tienes notas en B2 (4.0), C2 (3.5), D2 (4.5). En E2 escribes =PROMEDIO(B2:D2) y aparece 4.0 (que es el promedio de las 3). Se actualiza solo si cambias alguna nota.',
      emoji: '🔢'
    },
    {
      termino: 'Guardado automático',
      definicion: 'Característica de las apps en línea de Microsoft 365: guardan los cambios en OneDrive cada pocos segundos sin que tengas que presionar Ctrl+G. Te protegen de perder trabajo cuando se va la luz o se cierra el navegador.',
      ejemplo: 'Estás escribiendo en Word Online y se va la luz. Cuando vuelves al computador, abres el archivo y tienes todo hasta el último segundo. Sin guardado automático, perdías el trabajo.',
      emoji: '💾'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar las 3 apps estrella?',
      instrucciones: '5 preguntas para verificar que distingues Word, Excel y PowerPoint.',
      preguntas: [
        {
          enunciado: 'Quieres llevar el control de tus gastos semanales (qué compraste, cuánto, total). ¿Qué app?',
          opciones: [
            'Word.',
            'PowerPoint.',
            'Excel: porque tienes columnas, números y vas a sumar.',
            'OneNote.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Control de gastos = números en tabla + suma automática. Excel es perfecto: columnas de fecha, descripción, monto, total con =SUMA().',
          feedbackIncorrecto: 'Excel para todo lo que tiene números en tabla con cálculos. Word es para texto; PowerPoint para presentar. Para sumar gastos, Excel.'
        },
        {
          enunciado: 'Tu tarea de Sociales es escribir un ensayo de 3 páginas. ¿Qué app?',
          opciones: [
            'Excel.',
            'Word.',
            'PowerPoint.',
            'Forms.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Ensayo = texto corrido en párrafos. Word está diseñado para textos largos: justificado, sangría, formato de párrafos, encabezado/pie.',
          feedbackIncorrecto: 'Word para ensayos. Excel deforma el texto corrido; PowerPoint pierde el flujo narrativo. Para textos largos: Word.'
        },
        {
          enunciado: 'En Excel, ¿qué pasa si en la celda E2 escribes =PROMEDIO(B2:D2)?',
          opciones: [
            'Aparece la palabra PROMEDIO literalmente.',
            'Se daña el archivo.',
            'No pasa nada.',
            'Excel calcula el promedio de las celdas B2, C2 y D2 y muestra el resultado.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. = le dice a Excel \'calcula esto\'. PROMEDIO es la función. (B2:D2) es el rango. Excel hace la operación y muestra el resultado.',
          feedbackIncorrecto: 'Excel calcula: = empieza fórmula, PROMEDIO calcula promedio, (B2:D2) es el rango. Aparece el resultado, no la fórmula escrita.'
        },
        {
          enunciado: 'Vas a presentar oralmente \'Los animales del Valle\' a tu clase. ¿Qué app?',
          opciones: [
            'PowerPoint con diapositivas visuales.',
            'Excel con muchas filas.',
            'Word con saltos de página.',
            'Forms.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Presentación oral = PowerPoint. Cada diapositiva con 1 idea, imágenes, transiciones. F5 modo presentador. Profesional desde día 1.',
          feedbackIncorrecto: 'PowerPoint para presentar oralmente. Word puede pero pierde transiciones. Excel deforma. PowerPoint está hecho para esto.'
        },
        {
          enunciado: '¿En qué se diferencia la versión \'en línea\' de las apps respecto a la versión de escritorio?',
          opciones: [
            'La en línea es peor y tiene menos funciones.',
            'La en línea funciona en el navegador sin instalar nada y guarda automáticamente en OneDrive.',
            'La en línea es más cara.',
            'Son exactamente iguales.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. En línea = navegador + guardado automático en OneDrive. Tiene 95% de funciones de la de escritorio. Para 7° grado sobra. Y se puede usar en cualquier PC con tu cuenta.',
          feedbackIncorrecto: 'Versión en línea: en el navegador, sin instalar, guarda automático en OneDrive, accesible desde cualquier PC. Tiene casi todo lo de la de escritorio.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Quiero ser turista del software o artesano que domina lo esencial?',
    transferencia: 'Esta semana, vuelve a abrir tus 3 archivos al menos 1 vez para revisarlos y mejorarlos.',
    cierre: 'Al terminar la clase: (1) podrás identificar las diferencias clave entre Word, Excel y PowerPoint; (2) sabrás aplicar cada una a su tipo de tarea; (3) podrás evaluar cuál usar para una tarea nueva; (4) habrás creado 1 archivo de cada uno en tu OneDrive.'
  },
  saberAncestral: {
    saber: 'En el taller de don Lucho el relojero de Cartago había 3 herramientas estrella que él usaba el 80 % del tiempo. A pesar de que tenía en su vitrina de la calle 14 decenas de herramientas para reparar relojes, en la práctica cotidiana siempre echaba mano a 3: la lupa de aumento para ver lo pequeño, las pinzas delicadas para agarrar piezas diminutas, y el destornillador miniatura para abrir tapas. Las otras herramientas (martillo, aceite, pulidor) las usaba solo en casos especiales. Cuando un aprendiz nuevo llegaba, don Lucho le decía: "Primero domine estas 3. Después se da cuenta de que con ellas hace el 80 % del oficio. Las otras se aprenden con el tiempo." Hoy en tu taller digital pasa lo mismo: aunque Microsoft 365 tenga 8 aplicaciones, en la práctica usas 3 el 80 % del tiempo: Word, Excel, PowerPoint. Dominar bien esas 3 te hace eficiente. Después aprenderás las otras 5.',
    preguntaPuente: 'Si te dieran a escoger una sola app de las 3 para aprender muy bien (a costa de no usar las otras 2), ¿cuál escogerías y por qué? ¿Word, Excel o PowerPoint? La respuesta dice mucho sobre el oficio que más te llama.'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del dominio del oficio)',
      lente: 'lente del nosotros',
      cita: '"Dominar 3 herramientas a fondo te hace artesano. Saber 10 a medias te hace turista."',
      preguntaEspejo: '¿Quiero ser turista del software o artesano que domina lo esencial?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Pocas armas bien usadas ganan más batallas que muchas mal manejadas."',
      preguntaEspejo: '¿Estoy aprendiendo lo esencial a fondo, o coleccionando conocimientos superficiales?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del software como oficio)',
      lente: 'lente de la infoesfera',
      cita: '"El que aprende Word, Excel y PowerPoint en serio se ahorra años de improvisación profesional."',
      preguntaEspejo: '¿Veo este aprendizaje como un favor que me hace mi yo de 25 años?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las diferencias clave entre Word, Excel y PowerPoint; (2) sabrás aplicar cada una a su tipo de tarea; (3) podrás evaluar cuál usar para una tarea nueva; (4…',
    emocional: 'Marco Aurelio dirigía un ejército.',
    ciudadana: 'Hay personas que se jactan de "conocer todo Microsoft 365" pero en realidad no dominan ninguna app a fondo.',
    local: 'Antes de salir, verifica que los 3 archivos abren desde otro dispositivo (sincronización OK).',
    intergeneracional: 'En el trabajo y la universidad, las 3 apps se exigen sin enseñar: se asume que las sabes.'
  }
};

export default contenido;
