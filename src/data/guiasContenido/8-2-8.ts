/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 8
 * (sesión global 18).
 *
 * Auto-generado desde content/guias/8/8-2-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 8,
  titulo: 'Alertas con lógica compuesta — la tabla antes que el código',
  resumen: 'Una alerta real combina señales con Y, O y NO, y se prueba en todas sus combinaciones antes de darla por buena. Hoy escribes la tabla de ocho escenarios antes de programar, como los mayores nasa que leen las golondrinas junto con la hora del día.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Las alarmas que te rodean, del carro, de la casa, del celular, combinan señales. Saber por qué una suena de más y otra no suena es saber leer su lógica.',
    preguntaDetonante: 'Golondrinas y mañana es lluvia; golondrinas y tarde es problema. ¿Qué segunda señal necesita tu alarma de «aula oscura ocupada» para no sonar en el salón vacío?',
    activacion: {
      titulo: 'Y, O y NO en tu casa',
      descripcion: 'En 3 minutos, escribe una regla de tu casa que use Y, otra que use O y otra que use NO. Por ejemplo, «puedo salir si terminé la tarea Y no está lloviendo». ¿Qué pasa si cambias el Y por un O?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 7 buscaste errores con una hipótesis y una prueba.',
      siguiente: 'En la sesión 9 el micro:bit mide durante tres jornadas con bitácora.'
    }
  },
  conceptosClave: [
    {
      termino: 'Y (AND)',
      definicion: 'Verdadero solo si las dos condiciones lo son. Sirve para evitar alarmas falsas.',
      ejemplo: 'Alarma si humo Y temperatura alta, para que cocinar no la dispare.',
      categoria: 'Los bloques'
    },
    {
      termino: 'O (OR)',
      definicion: 'Verdadero si al menos una condición lo es. Sirve para no dejar casos por fuera.',
      ejemplo: 'Aviso si la puerta está abierta O la ventana está abierta.',
      categoria: 'Los bloques'
    },
    {
      termino: 'NO (NOT)',
      definicion: 'Invierte el valor. Verdadero se vuelve falso y al revés.',
      ejemplo: 'Riego si tierra seca Y NO está lloviendo.',
      categoria: 'Los bloques'
    },
    {
      termino: 'Escenario',
      definicion: 'Una combinación de valores de los sensores. Con tres sensores de sí o no hay ocho.',
      ejemplo: 'Luz baja V, movimiento F, botón V es el escenario VFV.',
      categoria: 'La prueba'
    },
    {
      termino: 'Tabla de escenarios',
      definicion: 'Una fila por combinación, con la salida esperada escrita antes de programar y la real anotada al probar.',
      ejemplo: 'Ocho filas, cinco columnas, ninguna vacía.',
      categoria: 'La prueba'
    },
    {
      termino: 'Alarma falsa y alarma muda',
      definicion: 'Falsa, suena cuando no debe, suele ser un O donde iba un Y. Muda, no suena cuando debería, suele ser un Y donde iba un O.',
      ejemplo: 'Suena en la fila FFF, es falsa. Calla en la fila VVV, es muda.',
      categoria: 'La prueba'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes combinar señales y probarlas?',
      instrucciones: 'Cinco preguntas para verificar que dominas Y, O, NO y la tabla de escenarios. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Quieres que la alarma de incendio no suene cada vez que alguien cocina. ¿Qué lógica usas?',
          opciones: [
            'Humo O temperatura alta, para que cualquiera de las dos la dispare.',
            'Humo Y temperatura alta, para que haga falta las dos señales.',
            'NO humo, para que solo suene cuando el aire esté limpio.',
            'Solo humo, porque la temperatura no tiene nada que ver con el fuego.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Con Y hacen falta las dos señales, y el humo de la cocina sin calor alto no la dispara.',
          feedbackIncorrecto: 'Con O el humo de la cocina bastaría. Con Y hacen falta las dos señales, y por eso evita la alarma falsa.'
        },
        {
          enunciado: 'Tu sistema suena en la fila FFF, donde nada debería pasar. ¿Qué tipo de error es y dónde lo buscas primero?',
          opciones: [
            'Alarma muda, y se busca en el bloque de pausa.',
            'Alarma falsa, y se busca un O donde debía ir un Y.',
            'Error de calibración, y se busca en la bitácora de la sesión 6.',
            'No es un error, porque la fila FFF nunca ocurre en la realidad.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Suena cuando no debe, es falsa. Un O demasiado permisivo es la primera hipótesis.',
          feedbackIncorrecto: 'Sonar cuando no debe es alarma falsa, no muda, y la fila FFF sí ocurre. La primera hipótesis es un O donde iba un Y.'
        },
        {
          enunciado: '¿Por qué con tres sensores de sí o no la tabla tiene ocho filas?',
          opciones: [
            'Porque MakeCode permite un máximo de ocho ramas en un «si».',
            'Porque ocho es el número de íconos que tiene el micro:bit.',
            'Porque cada sensor tiene dos estados y dos por dos por dos es ocho.',
            'Porque cada sensor aporta tres filas y sobran dos de reserva.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Dos estados por sensor, tres sensores, ocho combinaciones. Con cuatro sensores serían dieciséis.',
          feedbackIncorrecto: 'No es un límite de MakeCode ni de íconos. Cada sensor tiene dos estados, y dos por dos por dos da ocho.'
        },
        {
          enunciado: '¿Por qué la tabla de escenarios se escribe antes de programar y no después?',
          opciones: [
            'Porque escrita después tiendes a confirmar lo que ya programaste.',
            'Porque MakeCode no deja programar sin una tabla previa.',
            'Porque después no hay tiempo en la sesión para dibujarla.',
            'Porque los sensores cambian de estado cuando el programa ya existe.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Escrita antes, la lógica se piensa sin el programa encima, y el programa tiene que cumplirla.',
          feedbackIncorrecto: 'MakeCode no la exige y los sensores no cambian. Escrita después, la tabla solo confirma lo que ya hiciste en vez de probarlo.'
        },
        {
          enunciado: 'Probaste las filas VVV y FFF y las dos funcionan. ¿Puedes dar el sistema por listo?',
          opciones: [
            'Sí, porque si funcionan los extremos, las demás filas funcionan también.',
            'Sí, porque dos pruebas son suficientes para un sistema de tres sensores.',
            'No, porque el micro:bit exige probar cada fila para grabar el programa.',
            'No, porque los errores suelen vivir en las filas mixtas como VFV o FVF.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Las filas obvias casi siempre funcionan. Las mixtas son las que muestran un Y confundido con un O.',
          feedbackIncorrecto: 'Los extremos no garantizan las mixtas, y el micro:bit no exige nada. Los errores viven en filas como VFV, y hay que probarlas todas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál fila de tu tabla falló, y qué te dijo sobre la diferencia entre Y y O?',
    transferencia: 'La próxima vez que una regla tenga dos condiciones, escribe las cuatro combinaciones antes de decidir. Casi siempre hay una que no habías pensado.',
    cierre: 'La golondrina con la hora es una alerta; sola, es solo un pájaro. Dos señales y una tabla completa hacen un sistema.'
  },
  saberAncestral: {
    saber: 'En la sesión 6 viste que los mayores nasa de Toribío leen la lluvia en el sapo, las hormigas y la luna. Hay una señal que no se lee sola. Las golondrinas, cuenta don Luis Ardo Ascué, dependen de la hora: si pasan en la mañana, hacia las 8, 9 o 10, es porque va a llover. Si pasan en la tarde, a partir de la una, anuncian otra cosa: problemas sociales, un caso inesperado, un conflicto (Ramos García, Tenorio y Muñoz Yule, 2011). La misma golondrina, con otra hora, es otra alerta. Eso es una condición compuesta: golondrinas y mañana significa lluvia; golondrinas y tarde significa problema. Un sensor solo no decide; decide junto con otro. La cara de exclusión: en Toribío las golondrinas de la tarde han anunciado el asesinato de líderes. El conflicto armado forma parte de lo que ese pueblo lee en el cielo. Los autores advierten que no se trata de probar si aciertan, sino de entender cómo un pueblo ve el mundo. Hoy vas a construir alertas que combinan dos o tres señales. Y una tabla que revise todas las combinaciones antes de dar el sistema por bueno.',
    fuente: 'Pueblo nasa de Toribío (Cauca) · las golondrinas de la mañana y las de la tarde',
    referencia: 'Ramos García, C., Tenorio, A. D. y Muñoz Yule, F. (2011). Ciclos naturales, ciclos culturales: percepción y conocimientos tradicionales de los nasas frente al cambio climático en Toribío, Cauca, Colombia. En A. Ulloa (Ed.), Perspectivas culturales del clima (pp. 247--274). Universidad Nacional de Colombia.',
    preguntaPuente: 'Golondrinas y mañana es lluvia; golondrinas y tarde es problema. Si tu alarma de «aula oscura ocupada» se dispara con luz baja, ¿qué segunda señal necesitas para que no suene en el salón vacío?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Las golondrinas y la hora del día',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · El problema y sus señales',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · La tabla de ocho escenarios',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Programar y probar las ocho filas',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'El problema y sus señales',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige un problema del colegio que necesite más de una señal, aula oscura con gente, salón abierto de noche, sala de sistemas caliente y ocupada.',
        'Escribe qué dos o tres sensores del micro:bit usarías y la condición en palabras con Y, O y NO.',
        'Define tres niveles, alarma, alerta y aviso, y qué combinación produce cada uno.',
        'Escribe una combinación en la que tu sistema no debería hacer nada.'
      ],
      cuaderno: {
        titulo: 'El problema y sus señales',
        formato: 'el problema en una línea, los sensores, la condición en palabras con Y, O y NO, y los tres niveles con su combinación',
        extension: 'media página'
      },
      criterios: [
        'Puedes decir qué combinación dispara cada nivel.',
        'Tienes una combinación que no dispara nada.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'La tabla de ocho escenarios',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, dibujen una tabla de ocho filas y cinco columnas, tres sensores, salida esperada y salida real.',
        'Llenen las columnas de sensores con las ocho combinaciones de V y F, VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF.',
        'Escriban la salida esperada de cada fila, alarma, alerta, aviso o nada, y revisen que ninguna quedó vacía.',
        'Marquen las dos filas más difíciles de decidir y escriban por qué.'
      ],
      cuaderno: {
        titulo: 'La tabla de ocho escenarios',
        formato: 'la tabla de ocho filas y cinco columnas con sensores y salida esperada llenas, salida real vacía, y las dos filas difíciles marcadas',
        extension: 'media página'
      },
      criterios: [
        'Las ocho filas tienen salida esperada.',
        'Ninguna combinación de V y F se repite.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Programar y probar las ocho filas',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'En MakeCode, guarda cada lectura en una variable y compárala con su umbral de la sesión 6.',
        'Arma un «si… si no, si… si no» con tres ramas usando «y», «o» y «no» según tu tabla, con un ícono por nivel.',
        'Produce cada una de las ocho combinaciones en el simulador y anota la salida real.',
        'Si una fila no coincide, aplica hipótesis, un cambio y prueba, y anota qué fila falló y qué cambiaste.'
      ],
      cuaderno: {
        titulo: 'Programar y probar las ocho filas',
        formato: 'la tabla completa con la columna de salida real llena, y la nota de ajustes con la fila que falló, el cambio y el porqué',
        extension: 'media página'
      },
      criterios: [
        'Las ocho filas tienen salida real y coinciden con la esperada.',
        'Anotaste qué cambiaste si alguna falló.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §5.3.1',
      lente: 'lente del nosotros',
      cita: 'Toda persona y todo pueblo están siempre más allá del sistema que intenta abarcarlos.',
      preguntaEspejo: '¿Qué situación real no cabe en ninguna fila de mi tabla?'
    },
    estoico: {
      autor: 'Séneca · Cartas a Lucilio, 13 (c. 64 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Son más las cosas que nos asustan que las que de verdad nos aprietan.',
      preguntaEspejo: '¿Qué alerta me asustó esta semana por algo que al final no apretaba?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 2.3',
      lente: 'lente de la infoesfera',
      cita: 'La abundancia de información también produce sobrecarga, distracción y olvido.',
      preguntaEspejo: '¿Cuál de mis alertas debería callarse para que las otras se oigan?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Escribiste las ocho filas antes de programar. Pensar todos los casos antes de actuar sirve mucho más allá del micro:bit.',
    emocional: 'Una fila que no coincide frustra. Es también la única forma de saber que tu sistema tenía un hueco antes de que alguien lo encontrara.',
    ciudadana: 'Una alarma que suena por todo enseña a ignorarla, y una que calla cuando importa deja a la gente sola. Probar todas las filas es responsabilidad.',
    local: 'Los mayores nasa de Toribío no leen la golondrina sola, la leen con la hora. Tu sistema tampoco decide con una sola señal.',
    intergeneracional: 'Quien herede tu sistema puede leer la tabla y saber qué hace en cada caso, sin abrir el programa.'
  }
};

export default contenido;
