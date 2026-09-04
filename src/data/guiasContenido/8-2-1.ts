/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 1
 * (sesión global 11).
 *
 * Auto-generado desde content/guias/8/8-2-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 1,
  titulo: 'Lógica avanzada — if-else con AND, OR y NOT',
  resumen: 'Como las pruebas del oficio del herrero: cruzar varias condiciones antes de actuar. Aprendes estructuras condicionales anidadas (if-else-if) y operadores lógicos AND/OR/NOT.',
  duracionMin: 90,
  subtema: 'Lógica avanzada · if-else · AND/OR/NOT',
  preLectura: {
    porQueImporta: 'Saber escribir condicionales con lógica compuesta es habilidad universal de programación: lo aplicarás en cualquier lenguaje (Python, JS, MakeCode), en cualquier sistema (web, móvil, hardware). Es la columna vertebral del pensamiento computacional.',
    preguntaDetonante: '¿Qué del juicio del herrero — su capacidad de cruzar varias condiciones antes de actuar — podemos llevar al código que decide?',
    activacion: {
      titulo: 'La decisión cotidiana',
      descripcion: 'En 5 minutos: en parejas describan una decisión real (de hoy o ayer) que tomaron cruzando varias condiciones. ¿Era AND (todas obligatorias) o OR (alcanzaba con una)? ¿Hubo NOT (algo que NO debía pasar)?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En el periodo 1 trabajaste análisis de datos con phronesis (Excel, estadística).',
      siguiente: 'En la sesión 12 construirás tablas de verdad para verificar tu lógica.'
    }
  },
  conceptosClave: [
    {
      termino: 'Operador AND (Y)',
      definicion: 'Combinador lógico que es verdadero solo cuando ambas condiciones son verdaderas. Restrictivo: las dos cosas deben cumplirse.',
      ejemplo: '"Si llueve Y la tierra está blanda, cosecho". Solo si ambas se cumplen, el campesino cosecha. Si solo una, no.',
      emoji: '🔗'
    },
    {
      termino: 'Operador OR (O)',
      definicion: 'Combinador lógico verdadero cuando al menos una condición es verdadera. Permisivo: con una basta.',
      ejemplo: '"Si llueve O hay viento fuerte, espero". Basta con que ocurra una de las dos para que espere.',
      emoji: '🌗'
    },
    {
      termino: 'Operador NOT (NO)',
      definicion: 'Invierte el valor de verdad de una condición. Verdadero se vuelve falso y viceversa.',
      ejemplo: '"Si NO llueve, riego". Solo cuando es falso que llueva, el campesino riega.',
      emoji: '🚫'
    },
    {
      termino: 'Estructura if-else',
      definicion: 'Forma de programar decisiones: SI se cumple condición, ejecutar A; SINO, ejecutar B. Base del pensamiento computacional.',
      ejemplo: 'SI nota es mayor o igual a 3, mostrar "Aprobado"; SINO, mostrar "Reprobado". Decisión automática con la condición.',
      emoji: '🔀'
    },
    {
      termino: 'Cubrir todos los casos',
      definicion: 'Regla profesional: con n condiciones binarias hay 2^n combinaciones. Todas deben tener respuesta clara en el algoritmo.',
      ejemplo: 'Con 2 condiciones (lluvia, tierra) hay 4 casos: (V,V), (V,F), (F,V), (F,F). Cada uno necesita su rama de decisión.',
      emoji: '🌐'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas if-else con AND/OR/NOT?',
      instrucciones: '5 preguntas para verificar que combinas condiciones con el operador correcto.',
      preguntas: [
        {
          enunciado: '"Para entrar al cabildo, hay que ser mayor de 18 años Y vivir en el resguardo." ¿Qué operador es?',
          opciones: [
            'OR',
            'NOT',
            'Ninguno',
            'AND'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. AND porque las dos condiciones deben cumplirse: edad mayor a 18 Y residencia en el resguardo.',
          feedbackIncorrecto: 'Es AND. Las dos condiciones deben cumplirse simultáneamente para entrar al cabildo.'
        },
        {
          enunciado: '"Mañana hay clase si NO es domingo Y NO es festivo." ¿Cuántos operadores tiene esta regla?',
          opciones: [
            '3 (NOT, AND, NOT)',
            '1 (solo AND)',
            '2 (NOT y NOT)',
            '0'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Tiene 3 operadores: NOT (domingo), AND, NOT (festivo). La regla combina dos negaciones con un AND.',
          feedbackIncorrecto: 'La regla usa 3 operadores: NOT-domingo, AND, NOT-festivo. Cada "NO" es un NOT y se combinan con AND.'
        },
        {
          enunciado: 'Tu programa tiene if "edad>10 AND edad<5". ¿Qué problema tiene?',
          opciones: [
            'Ninguno',
            'Se cumple siempre',
            'La condición nunca se cumple porque es contradictoria',
            'Solo funciona con números pares'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Edad no puede ser mayor a 10 Y menor a 5 al mismo tiempo. La condición es contradictoria y nunca se cumple.',
          feedbackIncorrecto: 'La condición es contradictoria: no hay edad que sea mayor a 10 y menor a 5 simultáneamente. Nunca se cumple.'
        },
        {
          enunciado: '"Llamo al taxi si llueve O es tarde." Si NO llueve y NO es tarde, ¿llamo al taxi?',
          opciones: [
            'Sí',
            '',
            'Depende del taxista',
            'A veces'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Con OR, basta una condición verdadera. Si ambas son falsas (no llueve y no es tarde), no llamo.',
          feedbackIncorrecto: 'Con OR, si ambas condiciones son falsas, el resultado es falso. No llamo al taxi en ese caso.'
        },
        {
          enunciado: 'Con 3 condiciones binarias en un algoritmo, ¿cuántas combinaciones de casos hay que cubrir?',
          opciones: [
            '3',
            '6',
            '9',
            '8'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. 2^3 = 8 combinaciones. Cada una necesita respuesta clara en el algoritmo.',
          feedbackIncorrecto: 'Con n condiciones binarias hay 2^n combinaciones. 2^3 = 8 casos posibles para cubrir.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Toda regla lógica excluye casos. ¿Qué regla en tu vida (familia, colegio) tiene un caso real que NO captura bien? ¿Cómo la mejorarías con AND/OR/NOT?',
    transferencia: 'Esta semana: en MakeCode escribe un programa con condicional anidada (if-else-if) que clasifique datos reales (ej: edad → categoría, nota → estado). Pruébalo con 5 casos distintos.',
    cierre: 'El juicio del herrero y la condicional anidada hacen lo mismo: cruzar varias condiciones antes de actuar. La diferencia: el herrero lo aprende con años; el código lo replica en milisegundos.'
  },
  saberAncestral: {
    saber: 'En las fincas del Valle del Cauca, los campesinos toman decisiones todos los días que parecen sencillas pero esconden lógica compuesta del oficio. Cuando el campesino mira al cielo de madrugada y decide qué hacer con la cosecha, no aplica una sola regla: combina varias. La sabiduría rural ya operaba así mucho antes de que existieran computadores: "Si llueve Y la tierra está blanda, cosecho hoy". "Si NO llueve y el sol está fuerte, riego ahora". "Si llueve O hay viento fuerte, espero". Esas tres palabras (Y, O, NO) ordenan toda decisión compleja en la finca. El campesino que solo aplicaba una condición ("si llueve, cosecho", sin importar el estado de la tierra) perdía la cosecha. La phronesis del campo exige combinar condiciones: dos cosas a la vez (Y), una de varias (O), la ausencia de algo (NO). Esa lógica compuesta no es invento moderno: es saber ancestral que la matemática y la computación recogieron y formalizaron con los nombres griegos AND, OR, NOT.',
    fuente: 'Oficio del herrero en el Valle del Cauca — siglos XIX-XX',
    preguntaPuente: '¿Qué sabía el campesino del Valle al combinar "si llueve Y la tierra está blanda", que el novato en programación olvida cuando escribe condiciones sueltas sin combinarlas? ¿Y por qué un buen if-else compuesto vale más que diez if-else sueltos?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un algoritmo que olvida casos invisibiliza a quien queda fuera de sus condiciones.',
      preguntaEspejo: '¿Mi algoritmo cubre todos los casos posibles, o deja afuera a quien viva el caso que olvidé?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Pensar con claridad es virtud; mezclar AND con OR es debilidad del pensamiento que produce errores predecibles.',
      preguntaEspejo: '¿Estoy verificando que cada AND y cada OR son los correctos, o estoy escribiendo lógica al azar?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La lógica clara es la nueva ética del oficio digital en la era de los algoritmos que deciden por nosotros.',
      preguntaEspejo: '¿Mi algoritmo es verificable por otra persona, o solo yo entiendo por qué decidí cada condición?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a cruzar condiciones antes de actuar — disciplina cognitiva que aplica a código y a vida adulta.',
    emocional: 'Resististe la tentación de simplificar reglas hasta el absurdo. La lógica robusta exige paciencia y atención al caso límite.',
    ciudadana: 'Detectar reglas mal diseñadas en reglamentos y leyes es defensa ciudadana concreta — la lógica formal entrenada en clase escala.',
    local: 'Heredaste el juicio del herrero del Valle: cruzar varias condiciones antes del golpe definitivo.',
    intergeneracional: 'El oficio que el herrero aprendía con los años, el código lo replica en milisegundos. Lo que cambia es el medio, no la lógica.'
  }
};

export default contenido;
