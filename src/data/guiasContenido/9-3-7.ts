/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 7
 * (sesión global 27).
 *
 * Auto-generado desde content/guias/9/9-3-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 7,
  titulo: 'Limpieza de datos — el oficio del archivero',
  resumen: 'Cuando una comunidad indígena constituye o amplía un resguardo, la tierra se distribuye conforme al censo realizado: quien no queda en la lista ese día no existe para el reparto. Hoy limpias un conjunto de datos sucio y aprendes por qué borrar sin dejar constancia no es limpiar, sino hacer desaparecer.',
  duracionMin: 90,
  subtema: 'Datos · El oficio de limpiar',
  preLectura: {
    porQueImporta: 'Un nombre repetido o una casilla vacía no son errores de forma. Son alguien que aparece dos veces o alguien que no aparece.',
    preguntaDetonante: '¿Qué le pasaría a tu tabla si borraras hoy todas las filas incompletas y mañana te preguntaran cuántas eran?',
    activacion: {
      titulo: 'Dos veces el mismo',
      descripcion: 'En 2 minutos, mira una lista que tengas, de contactos o de gastos. Busca algo escrito de dos maneras que en realidad sea lo mismo.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 6 graficaste los datos y viste cómo cambia la lectura según el gráfico.',
      siguiente: 'En la sesión 8 auditas gráficos engañosos y aprendes los cinco trucos más comunes.'
    }
  },
  conceptosClave: [
    {
      termino: 'Duplicado',
      definicion: 'Fila que repite información ya presente. Se elimina la copia y se conserva el original, siempre con nota.',
      ejemplo: 'Cuidado con los falsos duplicados: dos personas distintas pueden llamarse igual.',
      categoria: 'Los cuatro tipos'
    },
    {
      termino: 'Formato inconsistente',
      definicion: 'La misma información escrita de varias maneras. Se elige un formato y se normaliza todo el conjunto.',
      ejemplo: 'Al normalizar suele bajar el número de categorías, y esa bajada indica que funcionó.',
      categoria: 'Los cuatro tipos'
    },
    {
      termino: 'Vacío',
      definicion: 'Celda sin dato. Es una decisión, no un accidente: se completa, se marca con un valor explícito o se descarta la fila.',
      ejemplo: 'Lo que no vale es no elegir y dejar que otro adivine qué significaba ese hueco.',
      categoria: 'Los cuatro tipos'
    },
    {
      termino: 'Identificar, decidir, documentar',
      definicion: 'El orden del oficio. Nunca se corrige sin haber decidido, y nunca se decide sin dejar constancia.',
      ejemplo: 'Cada entrada de bitácora dice qué encontraste, qué decidiste, por qué y a qué celdas afectó.',
      categoria: 'El método'
    },
    {
      termino: 'Original y copia',
      definicion: 'El archivo original se conserva intacto y la limpieza se hace sobre una copia. Sin eso no hay vuelta atrás.',
      ejemplo: 'Lo que se borra sin registro no se puede recuperar ni discutir después.',
      categoria: 'El método'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes limpiar sin hacer desaparecer?',
      instrucciones: 'Cinco preguntas sobre los cuatro tipos de suciedad y el método. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué se limpia sobre una copia y no sobre el original?',
          opciones: [
            'Porque el archivo original suele venir protegido contra la escritura directa.',
            'Porque los programas trabajan más rápido con archivos duplicados.',
            'Porque sin original no hay vuelta atrás si una decisión resulta mala.',
            'Porque así se pueden comparar los dos archivos en pantalla a la vez.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Lo que se borra sin registro no se puede recuperar ni discutir.',
          feedbackIncorrecto: 'Porque sin el original no se puede deshacer una decisión equivocada.'
        },
        {
          enunciado: 'Encuentras dos filas idénticas con el mismo nombre. ¿Qué haces?',
          opciones: [
            'Eliminas una de inmediato, porque es claramente un duplicado.',
            'Compruebas si son la misma persona antes de eliminar.',
            'Dejas las dos filas, porque al eliminar siempre se pierde algo de información.',
            'Las combinas en una sola fila con los datos de ambas.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Dos personas distintas pueden llamarse igual, y eso es un falso duplicado.',
          feedbackIncorrecto: 'Se comprueba antes. Eliminar sin mirar es el modo más fácil de perder un caso real.'
        },
        {
          enunciado: '¿Qué significa que un vacío sea una decisión y no un accidente?',
          opciones: [
            'Que alguien decidió no responder esa pregunta a propósito.',
            'Que el programa lo generó al importar el archivo.',
            'Que hay que completarlo siempre con un valor estimado.',
            'Que tú eliges si completarlo, marcarlo o descartar la fila, y lo dices.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Las tres opciones son válidas; lo que no vale es no elegir.',
          feedbackIncorrecto: 'Que quien limpia elige qué hacer con él y lo deja escrito. No elegir también es una decisión, pero muda.'
        },
        {
          enunciado: '¿Qué debe contener cada entrada de la bitácora?',
          opciones: [
            'Qué encontraste, qué decidiste, por qué y qué celdas.',
            'La hora exacta en que se hizo cada uno de los cambios del archivo.',
            'El nombre del programa con el que se hizo la limpieza.',
            'Una captura de pantalla del archivo antes de tocarlo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sin el «por qué» no se puede discutir la decisión; sin las celdas no se puede deshacer.',
          feedbackIncorrecto: 'Las cuatro cosas: qué, qué decidí, por qué y qué celdas. Lo demás es opcional.'
        },
        {
          enunciado: 'En un censo para constituir un resguardo, ¿qué pasa con quien no queda en la lista?',
          opciones: [
            'Puede inscribirse más adelante mediante un trámite administrativo ordinario.',
            'Queda registrado igual en el sistema del cabildo.',
            'No existe para el reparto, porque la tierra se distribuye conforme al censo.',
            'Se le asigna una porción menor de la tierra disponible.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto, y por eso un nombre mal escrito no es un error de forma.',
          feedbackIncorrecto: 'No existe para el reparto. La tierra se distribuye conforme al censo realizado.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De los vacíos que resolviste, ¿en cuál te costó más decidir, y qué te habría hecho falta saber para decidir mejor?',
    transferencia: 'Pídele a un compañero que repita tu limpieza con la bitácora en la mano. Anota dónde se atascó: ahí falta una línea.',
    cierre: 'Borrar sin dejar constancia no es limpiar. Es hacer desaparecer, y después nadie sabe cuántos eran.'
  },
  saberAncestral: {
    saber: 'Cuando una comunidad indígena va a constituir o ampliar un resguardo, hay que levantar un censo poblacional. Conviene decir qué es exactamente: un procedimiento del Estado hecho con la comunidad, no una práctica ancestral. El instructivo lo define como una fotografía de la realidad de una comunidad en un tiempo y un espacio específicos. Se levanta persona por persona, con apoyo de miembros del cabildo, profesores y líderes, y después funcionarios lo verifican. Y aquí está lo que importa para hoy: la tierra se distribuye conforme al censo realizado. Eso convierte una lista en algo muy serio. La cara de exclusión cabe en una frase: quien no queda en la lista el día del censo no existe para el reparto. Un dato mal escrito, un nombre repetido o una casilla vacía no son errores de forma. Son alguien que aparece dos veces o alguien que no aparece.',
    fuente: 'Censo poblacional de comunidades indígenas · quien no queda en la lista no existe para el reparto',
    referencia: 'Agencia Nacional de Tierras, Dirección de Asuntos Étnicos. (2023). Instructivo: levantamiento y diligenciamiento del formato de censo poblacional para comunidades indígenas (ACCTI-I-021, versión 1).',
    preguntaPuente: 'En un censo, quien queda fuera de la lista no existe para el reparto. En tu conjunto de datos, ¿qué desaparece cada vez que borras una fila sin anotarlo?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Quien no está en la lista',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Descubre la suciedad',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro tipos y su tratamiento',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Limpia con bitácora',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Descubre la suciedad',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre el archivo sucio sin instrucciones sobre qué buscar.',
        'Cuenta cuántas filas parecen repetidas y cuántos formatos de fecha aparecen.',
        'Cuenta las celdas vacías y mira si se concentran en alguna columna.',
        'Busca nombres escritos de dos maneras que sean el mismo.',
        'Anota cuál de los cuatro problemas te costó más ver.'
      ],
      cuaderno: {
        titulo: 'Descubre la suciedad',
        formato: 'tabla de 4 filas y 3 columnas (tipo de suciedad / cuántos encontré / dónde se concentran)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Los cuatro tipos tienen un número, aunque alguno sea cero.',
        'Está marcado el problema que costó más ver.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro tipos y su tratamiento',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro tipos con una frase propia cada uno.',
        'Escriban el tratamiento de cada uno antes de tocar el archivo.',
        'Decidan para cada columna con vacíos si se completan, se marcan o se descarta la fila.',
        'Anoten qué se perdería si borraran las filas incompletas sin avisar.'
      ],
      cuaderno: {
        titulo: 'Los cuatro tipos y su tratamiento',
        formato: 'los cuatro tipos con frase propia, su tratamiento y la decisión sobre los vacíos por columna',
        extension: 'media página'
      },
      criterios: [
        'Cada columna con vacíos tiene su decisión escrita.',
        'El tratamiento se decidió antes de tocar el archivo.'
      ]
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Limpia con bitácora',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Duplica el archivo y trabaja solo sobre la copia.',
        'Abre la bitácora antes de tocar el primer dato.',
        'Resuelve los duplicados y anota cuántos eran y cuáles conservaste.',
        'Normaliza los formatos, resuelve los vacíos y unifica los errores de escritura.',
        'Pásale la bitácora a un compañero para que repita tu limpieza.'
      ],
      cuaderno: {
        titulo: 'Limpia con bitácora',
        formato: 'las cuatro entradas de la bitácora completas y la nota de quién repitió la limpieza',
        extension: 'media página'
      },
      criterios: [
        'Un compañero llegó al mismo resultado con la bitácora sola.',
        'El original quedó intacto.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.4.4',
      lente: 'lente del nosotros',
      cita: 'Hay lengua cotidiana (la de todos los días), lengua de culturas ilustradas, de cultura de masas, lengua de cultura popular… lengua política (que se comprende no por lo que dice sino por lo que calla, contra quién lo dice, cuándo y por qué…).',
      preguntaEspejo: '¿Qué calla mi tabla, y estoy documentando ese silencio o borrándolo?'
    },
    estoico: {
      autor: 'Séneca · Sobre la ira, II, 29 (c. 45 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'El mayor remedio para la ira es la demora. (trad. propia)',
      preguntaEspejo: '¿Qué borré de un tirón alguna vez y después necesité de vuelta?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'Necesitamos más y mejores técnicas y tecnologías para ver los pequeños patrones en los datos, pero necesitamos más y mejor epistemología para cribar los valiosos. (trad. propia)',
      preguntaEspejo: '¿Qué decisión de mi limpieza no habría podido tomar un programa por mí?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que decidir antes de corregir es lo que separa el oficio de la prisa.',
    emocional: 'Limpiar es tedioso y no luce. También es donde se arruinan o se salvan semanas de trabajo ajeno.',
    ciudadana: 'Un registro decide repartos reales. Quien no queda en la lista queda fuera de lo que la lista distribuye.',
    local: 'El censo de un resguardo lo levantan el cabildo, los profesores y los líderes, persona por persona.',
    intergeneracional: 'Una bitácora permite que alguien entienda dentro de años por qué un dato cambió, y no tenga que adivinar.'
  }
};

export default contenido;
