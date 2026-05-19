/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 6
 * (sesión global 26).
 *
 * Auto-generado desde content/guias/6/6-3-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 6,
  titulo: 'Encabezado, pie de página y números — terminar el documento como un profesional',
  resumen: 'Cuando un documento tiene más de 1 página, necesita 3 elementos de marco.',
  duracionMin: 90,
  subtema: 'Encabezado, pie de página y números — terminar el documento como un profesional',
  preLectura: {
    porQueImporta: 'El producto es ese informe + el boceto en el cuaderno.',
    preguntaDetonante: 'Tu profe acumula 30 trabajos impresos en su mesa. Las hojas se mezclan en el escritorio. ¿Cómo se asegura el profe de identificar el tuyo? ¿Y si tu trabajo tenía 4 hojas y se desordenaron, cómo sabe qué hoja iba primero?',
    activacion: {
      titulo: 'Encuentra los 3 elementos de marco',
      descripcion: 'Actividad 1 · IDENTIFICA — Encuentra los 3 elementos de marco (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: descubres dónde están encabezado y pie en Word, aprendes a insertarlos, agregas números de página, y armas tu informe de 2 páginas.',
      siguiente: 'Esta semana, en cualquier documento de más de 1 página que entregues, agrega los 3 elementos de marco.'
    }
  },
  conceptosClave: [
    {
      termino: 'Encabezado (header)',
      definicion: 'La franja superior que aparece en todas las páginas del documento. Allí va información de identificación: nombre, grado, materia, título del trabajo. Se configura una vez y se aplica a todas las páginas.',
      ejemplo: '"María Cárdenas · Grado 6B · Tecnología" arriba a la derecha de cada página. Si entregas 3 hojas y se mezclan con las de otros, el profe identifica las tuyas en segundos.',
      emoji: '📋'
    },
    {
      termino: 'Pie de página (footer)',
      definicion: 'La franja inferior que aparece en todas las páginas. Sirve para información secundaria: fecha de impresión, nombre del colegio, frase de cierre, número de página. Complementa al encabezado.',
      ejemplo: '"I.E. Sor María Juliana · Cartago · Mayo 2026" abajo a la izquierda. Da contexto institucional al documento sin saturar el cuerpo.',
      emoji: '📄'
    },
    {
      termino: 'Número de página',
      definicion: 'El contador automático que muestra qué número de página estás viendo (1, 2, 3...). Se inserta normalmente en el pie. Si agregas o quitas páginas, los números se actualizan solos.',
      ejemplo: 'Si tu trabajo de 5 páginas se cae y se mezcla, el número en cada página te permite reorganizarlas en el orden correcto: 1, 2, 3, 4, 5.',
      emoji: '🔢'
    },
    {
      termino: 'Portada',
      definicion: 'La primera página del documento, con el título grande, nombre del autor, fecha y grado. No tiene texto del informe, ni encabezado ni pie de las otras páginas. Es como la tapa de un libro.',
      ejemplo: 'En tus trabajos de universidad, la portada lleva: título del trabajo, tu nombre, materia, profe, fecha. Sin contenido. La página 1 (con número) viene después.',
      emoji: '📑'
    },
    {
      termino: 'Salto de página (Ctrl+Enter)',
      definicion: 'Comando para terminar la página actual y saltar a una nueva, aunque la anterior no esté llena. Útil para separar portada del contenido, o para que cada sección empiece en página nueva.',
      ejemplo: 'Después de escribir la portada, presionas Ctrl+Enter. Aunque solo escribiste 5 líneas, el cursor salta a la página 2. La portada queda separada.',
      emoji: '📃'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes terminar un documento profesional?',
      instrucciones: '5 preguntas para verificar que dominas los elementos de marco y la portada.',
      preguntas: [
        {
          enunciado: 'Tu trabajo tiene 4 páginas y todas se mezclaron en la mesa del profe. ¿Cómo identifica las tuyas?',
          opciones: [
            'Por el color del papel.',
            'Por el encabezado que tiene mi nombre y grado en cada página.',
            'Por la letra escrita a mano.',
            'Sin manera, las pierde.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El encabezado se repite en TODAS las páginas. Por eso si las hojas se mezclan, basta mirar arriba para identificar quién es el dueño.',
          feedbackIncorrecto: 'El encabezado se aplica a todas las páginas y lleva tu identificación. Sin él, las hojas mezcladas son un desastre.'
        },
        {
          enunciado: '¿Cuál es el camino en Word para insertar número de página?',
          opciones: [
            'Inicio → Numeración.',
            'Insertar → Número de página → escoger posición.',
            'Archivo → Guardar.',
            'Diseño → Color.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Insertar → Número de página → escoge posición (lo más común: parte inferior, esquina derecha). Word inserta el contador automático.',
          feedbackIncorrecto: 'Insertar → Número de página → posición. Lo más común: parte inferior, esquina derecha. El número se inserta y se actualiza solo.'
        },
        {
          enunciado: '¿La portada debe llevar número de página?',
          opciones: [
            'Sí, siempre. Es la página 1.',
            'No. La página 1 es la primera página de contenido, no la portada.',
            'Sí, pero en romano (I).',
            'Solo si el profe lo pide.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La portada va sin número de página. La página 1 es la primera de contenido. Esto es regla universal de documentos profesionales.',
          feedbackIncorrecto: 'La portada NO se numera. La primera página de contenido es la página 1. Hay una opción en Word para "Diferente en primera página" que excluye la portada.'
        },
        {
          enunciado: '¿Qué deberías poner en el pie de página de tu trabajo escolar?',
          opciones: [
            'Tu contraseña.',
            'Fecha de entrega + nombre del colegio + número de página.',
            'Una frase chistosa.',
            'Solo el número de página, nada más.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Fecha + colegio + número de página. Información institucional secundaria. El encabezado lleva tu identificación; el pie complementa con contexto.',
          feedbackIncorrecto: 'Pie de página: fecha + colegio + número. Información que complementa al encabezado. Identificación arriba; contexto institucional abajo.'
        },
        {
          enunciado: 'Acabas de escribir la portada en la página 1. ¿Cómo saltas a la página 2?',
          opciones: [
            'Presiono Enter muchas veces hasta llegar.',
            'Ctrl + Enter (salto de página).',
            'Salgo de Word y vuelvo a entrar.',
            'Insertar → Tabla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Ctrl+Enter es el salto de página. La portada queda separada y el cursor llega a la página 2 lista para contenido. Profesional y rápido.',
          feedbackIncorrecto: 'Ctrl+Enter = salto de página. Termina la página actual y empieza una nueva. Mejor que dar Enter mil veces (eso se desordena al editar después).'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mis trabajos tienen marco o flotan sin contexto?',
    transferencia: 'Esta semana, en cualquier documento de más de 1 página que entregues, agrega los 3 elementos de marco.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 elementos de marco (encabezado, pie, número); (2) sabrás aplicar los 3 en Word/Docs; (3) podrás distinguir entre portada y página de contenido; (4) habrás creado un mini-informe de 2 páginas con todos los elementos.'
  },
  saberAncestral: {
    saber: 'Cuando doña Mercedes hacía un cuaderno especial, le ponía marco al trabajo. En la escuela rural de la vereda La Plata de Cartago, doña Mercedes la maestra exigía que los cuadernos del campo tuvieran el nombre arriba ("Cuaderno de Lengua, Pedro Martínez, grado 5°") y la fecha abajo ("Año 1985"). En cada hoja, los niños debían escribir su nombre arriba (el encabezado) y el número de la hoja abajo (el pie). Eso no era manía: era darle marco al trabajo. Si un cuaderno se caía o un niño olvidaba el suyo, todos podían identificarlo en segundos. Si una hoja se desprendía, se podía colocar de nuevo gracias al número. Doña Mercedes enseñaba con eso un saber profundo: todo trabajo serio tiene marco. Hoy en digital los procesadores te dan herramientas para hacer ese marco: encabezado, pie de página y números. Y se aplican a CUALQUIER documento de varias páginas que vayas a entregar en tu vida.',
    preguntaPuente: 'Tu profe acumula 30 trabajos impresos en su mesa. Las hojas se mezclan en el escritorio. ¿Cómo se asegura el profe de identificar el tuyo? ¿Y si tu trabajo tenía 4 hojas y se desordenaron, cómo sabe qué hoja iba primero?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del marco y del contexto)',
      lente: 'lente del nosotros',
      cita: '"Nada existe sin marco. Sin marco la pintura es un papel. Sin marco el documento es ruido. El marco da existencia."',
      preguntaEspejo: '¿Mis trabajos tienen marco o flotan sin contexto?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que documentaba con disciplina)',
      lente: 'lente del cuidado interior',
      cita: '"La disciplina pequeña hace al trabajo grande visible. Quien marca cada hoja con su nombre se respeta y respeta a quien lo lee."',
      preguntaEspejo: 'Las pequeñas disciplinas (marco, formato, organización), ¿las cumplo o las dejo para otra vez?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del documento como objeto profesional)',
      lente: 'lente de la infoesfera',
      cita: '"Un documento con marco es un objeto profesional. Un documento sin marco es un borrador. La diferencia es 30 segundos de configuración."',
      preguntaEspejo: '¿Estoy entregando contenido o estoy entregando documentos profesionales?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 elementos de marco (encabezado, pie, número); (2) sabrás aplicar los 3 en Word/Docs; (3) podrás distinguir entre portada y página de contenido; (4) h…',
    emocional: 'Poner encabezado y pie toma 30 segundos por documento, pero comunica respeto y profesionalismo.',
    ciudadana: 'Un documento sin marco flota sin contexto: ¿quién lo escribió?, ¿cuándo?, ¿de qué tema?, ¿para qué materia?.',
    local: 'Antes de salir, verificas que los 3 elementos aparecen en las páginas correctas.',
    intergeneracional: 'Hay una diferencia entre escribir y producir un documento profesional.'
  }
};

export default contenido;
