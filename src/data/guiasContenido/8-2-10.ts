/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 10
 * (sesión global 20).
 *
 * Auto-generado desde content/guias/8/8-2-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 10,
  titulo: 'Sustentación del proyecto — decir qué funciona y qué no',
  resumen: 'Sustentar un proyecto técnico es mostrarlo funcionando, decir qué falla y responder con honestidad. Hoy presentas tu monitoreo en cinco minutos con el micro:bit en vivo, como el CRIC que vuelve ante su gente a decir cuáles mandatos se cumplieron y cuáles no.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Todo proyecto termina frente a alguien que pregunta. Saber presentar lo que funciona y declarar lo que no es lo que hace confiable a quien lo construyó.',
    preguntaDetonante: 'Cuando muestres tu proyecto, ¿qué te cuesta más, enseñar lo que funciona o decir en voz alta lo que todavía falla?',
    activacion: {
      titulo: 'La falla que dirías primero',
      descripcion: 'En 3 minutos, piensa en algo que hiciste esta semana y no salió del todo bien. Escribe cómo lo contarías en una frase que empiece por «lo que todavía falla es…». ¿Cambia algo si lo dices tú antes de que lo noten?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 9 el micro:bit midió tres jornadas y encontraste un patrón con cifra.',
      siguiente: 'En el periodo 3 empiezas con diseño visual y jerarquía de información.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación técnica',
      definicion: 'Presentar un proyecto ante personas que pueden preguntar, en cinco minutos, con problema, solución, datos y propuesta.',
      ejemplo: 'Cinco láminas, un guion de 700 palabras y el micro:bit en vivo.',
      categoria: 'La presentación'
    },
    {
      termino: 'Demo en vivo',
      definicion: 'El sistema funcionando frente al grupo. Una captura de pantalla no demuestra nada.',
      ejemplo: 'Tapas el sensor y el micro:bit muestra la luna.',
      categoria: 'La presentación'
    },
    {
      termino: 'Guion',
      definicion: 'Lo que vas a decir, escrito y ensayado con cronómetro. Unas 700 palabras son cinco minutos.',
      ejemplo: 'Dos ensayos, el primero de 6:10 y el segundo de 4:55.',
      categoria: 'La presentación'
    },
    {
      termino: 'Limitación declarada',
      definicion: 'Una cosa que falla, dicha por ti antes de que la pregunten, con causa y mejora.',
      ejemplo: '«El umbral de luz dispara falsas alarmas cuando pasa una nube; lo subiría de 100 a 80».',
      categoria: 'La honestidad'
    },
    {
      termino: 'Responder con datos',
      definicion: 'Contestar una pregunta con la cifra de la bitácora, o con «no lo resolví» y su porqué.',
      ejemplo: '«¿Es factible?» «Subió de 24 a 28 los tres días; abrir ventanas cuesta cero».',
      categoria: 'La honestidad'
    },
    {
      termino: 'Autoevaluación concreta',
      definicion: 'Una fortaleza y una mejora que otra persona pudo ver en tu sustentación.',
      ejemplo: '«Me pasé 40 segundos en los datos; recorto el gráfico».',
      categoria: 'La honestidad'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes sustentar un proyecto técnico?',
      instrucciones: 'Cinco preguntas para verificar que dominas láminas, demo, limitaciones y preguntas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu micro:bit está listo y también tienes una captura de pantalla del simulador. ¿Qué muestras en la sustentación?',
          opciones: [
            'La captura, porque es más segura y se ve mejor en el proyector.',
            'Las dos, primero la captura y después el micro:bit si alcanza el tiempo.',
            'El micro:bit en vivo, porque es lo que demuestra que funciona.',
            'Ninguna, porque las láminas ya describen el sistema completo.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. La demo en vivo es lo que sustenta «funciona». La captura no demuestra nada.',
          feedbackIncorrecto: 'La captura no prueba que funcione hoy, y las láminas tampoco. El micro:bit en vivo es la demostración.'
        },
        {
          enunciado: 'Sabes que tu umbral de luz dispara falsas alarmas cuando pasa una nube. ¿Cuándo lo dices?',
          opciones: [
            'En la lámina cinco, antes de las preguntas, con causa y mejora.',
            'Solo si alguien lo pregunta durante la ronda, para no perder puntos.',
            'Nunca, porque el grupo no puede saberlo desde sus sillas.',
            'Después de la sustentación, en privado, al docente.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Declarada por ti, es honestidad. Descubierta por otro, es algo que escondiste.',
          feedbackIncorrecto: 'Callarla es apostar a que nadie la vea. Se declara en la lámina de límites, con su causa y su mejora.'
        },
        {
          enunciado: 'Te preguntan «¿tu propuesta de abrir ventanas es factible?». ¿Cuál es la mejor respuesta?',
          opciones: [
            '«Sí, claro, es lo más lógico que se puede hacer».',
            '«No sé, eso lo decide el rector y no yo».',
            '«Depende de muchas cosas del colegio que yo no puedo controlar».',
            '«Subió de 24 a 28 los tres días; abrir ventanas cuesta cero».'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Eso es. Una pregunta se responde con la cifra de la bitácora, no con una opinión.',
          feedbackIncorrecto: 'Sin cifra es una opinión contra otra. La bitácora tiene el dato que hace factible la propuesta.'
        },
        {
          enunciado: 'Tu guion tiene 1.200 palabras y el ensayo duró ocho minutos. ¿Qué haces?',
          opciones: [
            'Hablas más rápido para que quepa en cinco minutos.',
            'Quitas la lámina de lo que falla, que es la menos importante de las cinco.',
            'Recortas el guion a 700 palabras y ensayas de nuevo.',
            'Pides seis minutos extra al docente antes de empezar.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Cinco minutos son unas 700 palabras. Se recorta y se ensaya de nuevo con cronómetro.',
          feedbackIncorrecto: 'Hablar rápido no se entiende y la lámina de límites no se quita. Se recorta el guion a 700 palabras y se ensaya otra vez.'
        },
        {
          enunciado: '¿Cuál de estas autoevaluaciones es concreta?',
          opciones: [
            '«Me pasé 40 segundos en los datos; la próxima recorto el gráfico».',
            '«Debo prepararme más y hablar mejor la próxima vez».',
            '«Creo que todo salió bien y no cambiaría nada».',
            '«Estuve muy nervioso todo el tiempo y por eso no salió como quería».'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Dice qué pasó, cuánto, y qué vas a cambiar. Alguien más pudo verlo.',
          feedbackIncorrecto: '«Prepararme más» y «hablar mejor» no dicen qué cambiar. La concreta tiene el dato, 40 segundos, y la acción.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué pregunta del grupo te mostró algo de tu proyecto que no habías visto, y qué respondiste?',
    transferencia: 'La próxima vez que entregues algo, di primero lo que falta. Quien lo recibe confía más en lo que sí está.',
    cierre: 'Un mandato vale porque se vuelve a mirar. Tu proyecto vale porque lo mostraste funcionando y dijiste qué falla.'
  },
  saberAncestral: {
    saber: 'En la sesión 3 del periodo 1 viste que los pueblos indígenas del Cauca no escriben sus normas desde una oficina. Salen de un congreso: la gente de los resguardos llega, discute durante días y de ahí nacen los mandatos. El XV Congreso del CRIC se reunió en Río Blanco, Sotará, del 25 al 30 de junio de 2017 (Consejo Regional Indígena del Cauca, 2017). Lo que importa hoy es lo que pasa después. La organización tiene que volver ante la misma gente y decir, en público, cuáles mandatos se cumplieron y cuáles no. Y la propia organización reporta que el cumplimiento es incompleto. No lo esconde: lo dice. Un mandato no vale por estar escrito; vale porque quienes lo hicieron vuelven a mirarlo. La cara de exclusión: un mandato es un acto de gobierno de un pueblo que se disputa con el Estado y con actores armados; no es una dinámica de convivencia escolar. Lo que tú haces hoy es mucho más pequeño y aprende de eso: presentar tu proyecto ante tu grupo y decir, con los datos en la mano, qué funcionó y qué todavía no.',
    fuente: 'Pueblos del CRIC en el Cauca · los mandatos de los congresos y la rendición de su cumplimiento',
    referencia: 'Consejo Regional Indígena del Cauca. (2017). Avanza el XV congreso regional del CRIC en el resguardo de Rioblanco Sotará del pueblo indígena yanacona.',
    preguntaPuente: 'El CRIC vuelve ante su gente y dice cuáles mandatos no se cumplieron. Cuando muestres tu proyecto, ¿qué te cuesta más: enseñar lo que funciona o decir en voz alta lo que todavía falla?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Los mandatos y la rendición de cuentas',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · El inventario honesto',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · Cinco láminas y un ensayo',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Sustentar con el micro:bit en vivo',
      duracionMin: 35
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'El inventario honesto',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre tu bitácora y tu programa de la sesión 9, y escribe tres cosas que funcionaron con evidencia en la bitácora.',
        'Escribe dos cosas que fallan o son frágiles, el umbral, las horas no cumplidas, las filas perdidas, la batería.',
        'Para cada falla, escribe en una línea por qué crees que pasa.',
        'Elige la falla que vas a declarar en la sustentación y escribe cómo la mejorarías.'
      ],
      cuaderno: {
        titulo: 'El inventario honesto',
        formato: 'dos columnas, «funciona» con tres filas y «falla» con dos, cada una con una línea de porqué, y la falla elegida con su mejora',
        extension: 'media página'
      },
      criterios: [
        'Cada cosa que funciona se puede señalar en la bitácora.',
        'Cada falla tiene una causa y no una excusa.'
      ]
    },
    {
      numero: 2,
      verbo: 'CREA',
      titulo: 'Cinco láminas y un ensayo',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Reduce tu proyecto a cinco láminas de máximo veinticinco palabras, problema, solución, datos con patrón y cifra, propuesta, y lo que falla con su mejora.',
        'Escribe el guion hablado de unas 700 palabras y prepara la demo, micro:bit con batería, código cargado y una forma de producir la alerta en vivo.',
        'Ensaya frente a tu pareja con cronómetro.',
        'Tu pareja te hace dos preguntas difíciles y te dice qué no entendió. Cambien de rol.'
      ],
      cuaderno: {
        titulo: 'Cinco láminas y un ensayo',
        formato: 'el texto de las cinco láminas, el guion, el tiempo de los dos ensayos y las dos preguntas de tu pareja con lo que no entendió',
        extension: 'una página'
      },
      criterios: [
        'El ensayo cabe en cinco minutos.',
        'La lámina de lo que falla tiene una causa y una mejora.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Sustentar con el micro:bit en vivo',
      tiempoMin: 35,
      modalidad: 'individual',
      pasos: [
        'Sustenta frente al grupo con cronómetro visible, cinco minutos, y haz la demo produciendo la alerta en vivo.',
        'Declara la falla que elegiste antes de que te la pregunten.',
        'Responde de tres a cinco preguntas. Si no sabes, di «no lo resolví» y por qué.',
        'Mientras escuchas a otros, evalúa con los seis criterios y escribe una pregunta para cada uno.',
        'Escribe tu autoevaluación, una fortaleza y una mejora concretas.'
      ],
      cuaderno: {
        titulo: 'Sustentar con el micro:bit en vivo',
        formato: 'las preguntas que te hicieron con tu respuesta en una línea, tu evaluación de dos compañeros con los seis criterios, y tu autoevaluación',
        extension: 'una página'
      },
      criterios: [
        'La falla se declaró antes de las preguntas.',
        'La fortaleza y la mejora son cosas que alguien más pudo ver.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.4.2',
      lente: 'lente del nosotros',
      cita: 'El otro se muestra como otro cuando, desde fuera de mi sistema, me interpela con su rostro y su reclamo.',
      preguntaEspejo: '¿Qué pregunta de hoy me mostró algo de mi proyecto que yo no había visto?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones X, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Deja de discutir cómo debería ser una buena persona y procura serlo.',
      preguntaEspejo: '¿Qué afirmé hoy con palabras que habría podido mostrar con el micro:bit?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'La mitad de nuestros datos no sirve; el problema es que no sabemos cuál mitad.',
      preguntaEspejo: '¿Cuáles de mis treinta filas no me atrevería a defender, y lo dije?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Declaraste una falla en voz alta y no pasó nada malo. Esa experiencia sirve para cada proyecto que venga.',
    emocional: 'Presentar frente al grupo con el micro:bit que puede fallar da nervios. Haberlo probado dos veces antes es lo que los baja.',
    ciudadana: 'Rendir cuentas es decir qué se cumplió y qué no ante quienes te lo encargaron. Lo hace el CRIC con sus mandatos; lo hiciste tú con tu proyecto.',
    local: 'Los pueblos del CRIC vuelven ante su gente a reportar el cumplimiento, incluso incompleto. Tu lámina cinco aprende de eso, en pequeño.',
    intergeneracional: 'Tus láminas y tu guion quedan como evidencia del periodo. Quien vea tu proyecto el año que viene sabrá qué funcionó y qué faltó.'
  }
};

export default contenido;
