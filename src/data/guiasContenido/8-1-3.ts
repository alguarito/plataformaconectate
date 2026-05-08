/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 3
 * Tema: Tablas de datos: campos, registros y limpieza básica.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 3,
  resumen:
    'Como el archivo de la parroquia: cada registro completo, único y con formato uniforme. Aprendes a estructurar tablas, identificar duplicados y datos faltantes, y documentar la limpieza con bitácora.',
  duracionMin: 90,
  subtema: 'Excel · Tablas · Limpieza con bitácora',

  preLectura: {
    porQueImporta:
      'En cualquier trabajo profesional vas a heredar tablas mal armadas: nombres con mayúsculas raras, fechas en formatos distintos, registros duplicados. Saber limpiar con criterio (no a ciegas) es habilidad de oro en oficinas, ONGs, comercios y administración pública.',
    preguntaDetonante:
      '¿Qué del oficio del archivero parroquial — la disciplina de un libro con campos completos — podemos llevar a una hoja de Excel del colegio?',
    activacion: {
      titulo: 'El archivo desordenado',
      descripcion:
        'En 5 minutos: imagina que recibes la lista de la cooperativa escolar con 100 registros mal ingresados. Antes de tocar nada, en parejas: ¿qué tres preguntas harías para no dañar la información mientras la limpias?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En la sesión 2 aprendiste a aplicar tipo y formato a cada celda.',
      siguiente: 'En la sesión 4 usarás funciones SUMA, PROMEDIO, MAX, MIN sobre datos limpios.',
    },
  },

  conceptosClave: [
    {
      categoria: '📋 Cómo se estructura',
      termino: 'Tabla',
      definicion:
        'Conjunto organizado de filas (registros) y columnas (campos) que comparten una estructura común. En Excel se puede convertir un rango en tabla con Ctrl+T para autoformato y filtros.',
      ejemplo:
        'Lista de estudiantes con campos "Documento, Nombre, Curso, Fecha de matrícula". Ctrl+T la convierte en tabla con filtros automáticos.',
      emoji: '📋',
    },
    {
      categoria: '📋 Cómo se estructura',
      termino: 'Campo',
      definicion:
        'Columna que representa un atributo del registro. Cada campo tiene un tipo de dato consistente y un encabezado claro.',
      ejemplo:
        'En una tabla de estudiantes, "Edad" es un campo (todos los registros tienen edad). El encabezado va en negrita en la fila 1.',
      emoji: '📑',
    },
    {
      categoria: '📋 Cómo se estructura',
      termino: 'Registro',
      definicion:
        'Fila completa con todos los campos de una unidad de información (una persona, un evento, una venta). Si falta un campo crítico, el registro está incompleto.',
      ejemplo:
        'Una fila completa: "1004567 | Juan Pérez | 8°A | 12/03/2026". Si falta el documento, no podemos identificar al estudiante.',
      emoji: '📄',
    },
    {
      categoria: '📋 Cómo se estructura',
      termino: 'Clave única',
      definicion:
        'Campo (o combinación) que identifica cada registro de manera no repetible. Permite distinguir personas con el mismo nombre o fechas iguales.',
      ejemplo:
        'En una tabla de estudiantes, "Documento" es la clave única (no se repite). El nombre puede repetirse (dos Juan Pérez), la fecha también — el documento, no.',
      emoji: '🔑',
    },
    {
      categoria: '🧹 Cómo se limpia',
      termino: 'Duplicados',
      definicion:
        'Registros repetidos por error de captura. Se eliminan SOLO después de verificar que sean copias y no personas distintas con el mismo nombre.',
      ejemplo:
        '"Juan Pérez, doc 1004" aparece 3 veces idéntico → es duplicado. Pero "Juan Pérez, doc 1004" y "Juan Pérez, doc 2008" son DOS PERSONAS distintas, no duplicados.',
      emoji: '🧽',
    },
    {
      categoria: '🧹 Cómo se limpia',
      termino: 'Datos faltantes',
      definicion:
        'Celdas vacías o con valores nulos. Antes de eliminar, se investiga: el dato puede estar en otra fuente, o ser legítimamente desconocido.',
      ejemplo:
        'Si la columna "fecha de nacimiento" está vacía en 5 registros, no los borres: pregunta en secretaría, quizá ese dato existe en otra tabla.',
      emoji: '🩹',
    },
    {
      categoria: '🧹 Cómo se limpia',
      termino: 'Estandarización',
      definicion:
        'Llevar valores similares a un formato uniforme. Mayúsculas/minúsculas, fechas, abreviaturas. Evita que el sistema trate "Juan" y "JUAN" como personas distintas.',
      ejemplo:
        'Aplicar =NOMPROPIO a la columna de nombres convierte "JUAN PEREZ", "juan perez" y "Juan PEREZ" todos a "Juan Pérez".',
      emoji: '📐',
    },
    {
      categoria: '🧹 Cómo se limpia',
      termino: 'Bitácora',
      definicion:
        'Documento que registra QUÉ se cambió, CUÁNDO, y POR QUÉ. Permite auditar la limpieza y revertir si algo salió mal. Sin bitácora, una limpieza es opaca.',
      ejemplo:
        'Bitácora: "07/05/2026 — Eliminados 3 duplicados exactos del registro JP-1004. Estandarizados 12 nombres con NOMPROPIO. Conservados 5 faltantes pendientes de verificación con secretaría."',
      emoji: '📒',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Limpieza de tablas con criterio',
      instrucciones:
        '5 preguntas tipo ICFES sobre estructura de tablas, claves únicas, duplicados, faltantes y bitácora de cambios.',
      preguntas: [
        {
          enunciado:
            'En una tabla de estudiantes del colegio, ¿cuál sería la mejor "clave única"?',
          opciones: [
            'Nombre del estudiante',
            'Documento de identidad',
            'Edad',
            'Curso al que pertenece',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Exacto. El documento NO se repite entre dos personas distintas. El nombre sí (dos Juan Pérez), la edad también (varios de 13), el curso peor (todos del 8°A tienen el mismo). El documento es la clave perfecta.',
          feedbackIncorrecto:
            '❌ Una clave única NO debe repetirse jamás. Nombres se repiten, edades se repiten, cursos se repiten. El documento de identidad es único por persona en Colombia.',
        },
        {
          enunciado:
            'Si en una tabla aparecen 5 registros con nombre "JUAN" y 3 con "Juan", al limpiar:',
          opciones: [
            'Son 8 personas distintas, mantenerlos todos',
            'Son 8 registros pero quizá 1 sola persona; verificar con clave única antes de eliminar',
            'Eliminar todos porque están mal escritos',
            'Da igual, no hay que tocar',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Correcto. "JUAN" y "Juan" pueden ser la MISMA persona mal escrita, o personas DISTINTAS. La clave única (documento) decide. NO eliminar a ciegas — verifica primero.',
          feedbackIncorrecto:
            '❌ Eliminar sin verificar es peligroso (puedes borrar información real). Tratarlos como 8 personas distintas también puede ser error. La regla: usar la clave única para decidir caso por caso.',
        },
        {
          enunciado:
            'Una columna "edad" tiene un valor "doce" en lugar de "12". ¿Qué hacer?',
          opciones: [
            'Borrar la fila completa',
            'Dejarlo así, total Excel ya entiende',
            'Estandarizar a número o pedir verificación a la fuente, y documentar el cambio',
            'Convertir TODA la columna a texto para no tener que cambiar nada',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Sí. Estandarizar a número (12) es correcto, pero ANTES verifica con la fuente (¿fue error de captura?). Y documenta el cambio en la bitácora. Así otros podrán rastrear qué cambió.',
          feedbackIncorrecto:
            '❌ Borrar la fila pierde información. Dejarlo rompe los cálculos numéricos. Convertir todo a texto pierde la posibilidad de calcular. La opción correcta: estandarizar + verificar + documentar.',
        },
        {
          enunciado:
            '¿Por qué eliminar duplicados antes de calcular promedios?',
          opciones: [
            'Para que la hoja pese menos',
            'Para que el promedio refleje personas reales, no copias del mismo registro',
            'Para que se vea ordenado visualmente',
            'No importa, Excel los maneja igual',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Excelente. Si Juan aparece duplicado, su nota cuenta DOS VECES en el promedio, distorsionándolo. La limpieza de duplicados es condición de un cálculo veraz.',
          feedbackIncorrecto:
            '❌ El peso del archivo o la estética visual son secundarios. Lo crítico es la INTEGRIDAD del cálculo: un duplicado distorsiona promedios y conteos. La limpieza es ética analítica.',
        },
        {
          enunciado:
            'Después de limpiar una tabla de 100 registros, te quedan 87. ¿Qué deberías hacer ANTES de declarar la limpieza terminada?',
          opciones: [
            'Imprimir la tabla nueva',
            'Compartirla con el grupo',
            'Verificar qué tipos de errores había y por qué se eliminaron 13 registros (bitácora)',
            'Calcular el promedio inmediatamente',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Correcto. Eliminar 13 registros sin documentar es un riesgo: tu yo del próximo mes (o un auditor) no sabrá qué pasó. La bitácora de cambios es la garantía de transparencia.',
          feedbackIncorrecto:
            '❌ Imprimir, compartir o calcular son pasos POSTERIORES. Antes de declarar terminada la limpieza, documenta qué eliminaste y por qué. Sin bitácora, la limpieza es opaca.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      'Limpiar datos sin documentar es limpiar a ciegas. ¿En qué otros ámbitos de tu vida sería bueno llevar bitácora de cambios (proyectos, decisiones, hábitos)?',
    transferencia:
      'Esta semana: revisa una hoja de cálculo cualquiera (gastos, contactos, calificaciones) y aplica los 4 pasos: encabezados claros, clave única, eliminación de duplicados verificada, bitácora de cambios.',
    cierre:
      'El archivo de la parroquia y la hoja de Excel son lo mismo: memoria autorizada de una comunidad. Cuidarlo es trabajo de archivero, oficio noble.',
  },
};

export default contenido;
