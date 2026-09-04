/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/7/7-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 7,
  titulo: 'Bucles — repeticiones inteligentes en los algoritmos',
  resumen: 'Un bucle (o ciclo, o loop en inglés) es una estructura que repite una o varias acciones hasta que se cumple una condición.',
  duracionMin: 90,
  subtema: 'Bucles — repeticiones inteligentes en los algoritmos',
  preLectura: {
    porQueImporta: 'El producto es algoritmo + diagrama + tabla comparativa.',
    preguntaDetonante: 'Si tuvieras que escribir un programa para "saludar a los 30 estudiantes de la clase, uno por uno, llamándolos por su nombre", ¿escribirías 30 instrucciones separadas o usarías un bucle?',
    activacion: {
      titulo: '¿Cuántas instrucciones sin bucle?',
      descripcion: 'Actividad 1 · ANALIZA — ¿Cuántas instrucciones sin bucle?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas repeticiones en situaciones reales, aprendes los 2 tipos de bucles, escribes algoritmo con 2 bucles, dibujas el diagrama.',
      siguiente: 'Esta semana, identifica 3 situaciones reales donde te tocaría usar bucles si fueras a automatizarlas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Bucle (loop, ciclo)',
      definicion: 'Estructura de programación que repite una o varias acciones hasta que se cumple una condición. Es uno de los 3 componentes fundamentales (junto con variables y condicionales). Sin bucles, los programas serían imposibles.',
      ejemplo: 'REPETIR 10 VECES: dar paso. En lugar de escribir \'dar paso\' 10 veces, escribes el bucle una sola vez. Más limpio y más fácil de cambiar (si quieres 20 veces, cambias el 10 por 20).',
      emoji: '🔄'
    },
    {
      termino: 'Bucle FOR (repetir N veces)',
      definicion: 'Bucle que se repite un número fijo y conocido de veces. Estructura: REPETIR [N] VECES: [acción]. Útil cuando sabes exactamente cuántas iteraciones quieres.',
      ejemplo: 'PARA contador DESDE 1 HASTA 30: decir \'Hola estudiante [contador]\'. La variable contador toma valores 1, 2, ..., 30. Saluda a 30 estudiantes con 1 instrucción de bucle.',
      emoji: '🔁'
    },
    {
      termino: 'Bucle WHILE (repetir hasta que)',
      definicion: 'Bucle que se repite mientras una condición es verdadera. Estructura: MIENTRAS [condición]: [acción]. Útil cuando no sabes cuántas iteraciones, pero sabes cuándo parar.',
      ejemplo: 'MIENTRAS hiloRestante > 0: tejer 1 vuelta; hiloRestante = hiloRestante - 1. Se repite hasta que el hilo se acabe. No se sabe cuántas vueltas; sí se sabe cuándo parar.',
      emoji: '♾️'
    },
    {
      termino: 'Contador',
      definicion: 'Variable numérica que cuenta las iteraciones de un bucle. Suele empezar en 0 (o 1) y se incrementa (suma 1) cada vez que el bucle se ejecuta. Permite saber cuántas veces ha corrido el bucle.',
      ejemplo: 'vueltaActual = 0; MIENTRAS vueltaActual < 200: tejer; vueltaActual = vueltaActual + 1. El contador va 0, 1, 2, ..., 199. Cuando llega a 200, el bucle termina.',
      emoji: '🧮'
    },
    {
      termino: 'Bucle infinito (error a evitar)',
      definicion: 'Bucle que nunca termina porque la condición nunca se vuelve falsa. Hace que el programa se trabe. Se evita verificando que algo cambie adentro del bucle (incrementar contador, modificar variable).',
      ejemplo: 'REPETIR HASTA QUE 5 > 10: jugar. La condición \'5 > 10\' es siempre falsa, así que el bucle nunca termina. Error de diseño. Verifica que la condición pueda cumplirse algún día.',
      emoji: '⚠️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar bucles?',
      instrucciones: '5 preguntas para verificar que dominas los 2 tipos y el contador.',
      preguntas: [
        {
          enunciado: 'Necesitas saludar a 30 estudiantes. ¿Qué tipo de bucle usas?',
          opciones: [
            'WHILE (porque no sabes cuándo termina).',
            'Ninguno, escribes 30 instrucciones separadas.',
            'Bucle infinito.',
            'FOR (repetir 30 veces, sabes el número exacto).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Número exacto = bucle FOR. PARA contador DESDE 1 HASTA 30: saludar. Una instrucción de bucle, 30 saludos ejecutados.',
          feedbackIncorrecto: 'FOR para número exacto conocido (30 estudiantes). WHILE para \'no sé cuántas pero sé cuándo parar\'. Aquí sabes que son 30, entonces FOR.'
        },
        {
          enunciado: 'Tu juego dice \'repetir hasta que el jugador gane 100 puntos\'. ¿Qué tipo de bucle es?',
          opciones: [
            'FOR (porque hay número 100).',
            'Ninguno.',
            'WHILE (porque no sabes cuántas iteraciones, solo cuándo parar).',
            'Bucle infinito.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. No sabes cuántas iteraciones (podrían ser 5 o 50). Sabes la condición de parada (100 puntos). Eso es WHILE.',
          feedbackIncorrecto: 'WHILE porque no conoces el número exacto, solo cuándo parar. El jugador puede ganar en 5 turnos o 50; el bucle termina cuando llegue a 100.'
        },
        {
          enunciado: '¿Qué hace una variable contador en un bucle?',
          opciones: [
            'Nada útil.',
            'Cuenta las iteraciones, se incrementa (suma 1) cada vez que el bucle se ejecuta.',
            'Borra el bucle.',
            'Hace el bucle más lento.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Contador = variable que cuenta. Empieza en 0 (o 1), se suma 1 cada iteración. Permite saber cuántas veces ha corrido el bucle.',
          feedbackIncorrecto: 'Contador = variable que cuenta iteraciones. Esencial para bucles FOR y útil en WHILE. Empieza en 0, se incrementa cada vez.'
        },
        {
          enunciado: '¿Qué es un bucle infinito y cómo evitarlo?',
          opciones: [
            'Es un bucle que nunca termina (la condición nunca se vuelve falsa). Se evita verificando que algo cambie adentro.',
            'Es bueno, queremos que el programa corra siempre.',
            'Es un bucle invisible.',
            'Es un bucle que termina rápido.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Bucle infinito = nunca termina. Programa se traba. Se evita verificando que el contador se incremente o la condición pueda volverse falsa.',
          feedbackIncorrecto: 'Bucle infinito traba el programa. Evítalo verificando que algo cambie en cada iteración (incrementar contador, modificar variable que está en la condición).'
        },
        {
          enunciado: 'Si NO existieran los bucles, ¿qué pasaría con la programación?',
          opciones: [
            'Sería imposible procesar muchos datos: tendrías que escribir miles de instrucciones repetidas.',
            'Sería igual, no afecta.',
            'Los programas serían más rápidos.',
            'Sería más fácil.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Sin bucles, indexar Google sería escribir millones de instrucciones. Wikipedia, Spotify, TikTok: imposibles. Los bucles escalaron la programación.',
          feedbackIncorrecto: 'Sin bucles no habría Google, Wikipedia, ni redes sociales. Procesar muchos datos requiere bucles. Son fundamentales para programación moderna.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué repeticiones de mi vida son mecánicas (deberían automatizarse) y cuáles son formativas (vale la pena repetir conscientemente)?',
    transferencia: 'Esta semana, identifica 3 situaciones reales donde te tocaría usar bucles si fueras a automatizarlas.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 2 tipos de bucles; (2) sabrás aplicar cada tipo a su situación; (3) podrás evaluar si un algoritmo necesita bucle o no; (4) habrás creado un algoritmo con 2 bucles + diagrama.'
  },
  saberAncestral: {
    saber: 'Doña Sofía la tejedora del Valle del Cauca repetía el mismo patrón 200 veces para tejer una mochila. En la vereda La Plata, las tejedoras de canastos del Cauca, las hamaqueras del Pacífico, las costureras de Buga tenían un saber compartido: el patrón se repite. Cuando doña Sofía empezaba una mochila, sabía que tenía que ejecutar la secuencia "levantar hebra, pasarla sobre 2, pasarla por debajo de 1" exactamente 200 veces. ¿Contaba mentalmente? Sí. ¿Se aburría? No — la repetición rítmica era meditativa. ¿Se equivocaba? A veces, y entonces destejía hasta el último punto correcto y volvía a empezar. Esa estructura — "repetir N veces" o "repetir hasta lograr X" — es exactamente lo que en programación llamamos bucle o ciclo. Sin bucles, una mochila Wayuu tomaría escribir 200 instrucciones separadas. Con bucles, una instrucción se ejecuta automáticamente N veces. Es la elegancia algorítmica que las tejedoras ya conocían.',
    preguntaPuente: 'Si tuvieras que escribir un programa para "saludar a los 30 estudiantes de la clase, uno por uno, llamándolos por su nombre", ¿escribirías 30 instrucciones separadas o usarías un bucle?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del oficio repetitivo)',
      lente: 'lente del nosotros',
      cita: '"La repetición no es aburrida cuando entiendes su sentido. La tejedora tejió 200 vueltas porque cada vuelta importaba."',
      preguntaEspejo: '¿Qué repeticiones de mi vida son mecánicas (deberían automatizarse) y cuáles son formativas (vale la pena repetir conscientemente)?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Lo que se repite con criterio, perfecciona. Lo que se repite por inercia, embrutece. La diferencia está en la atención."',
      preguntaEspejo: 'Las repeticiones de mi vida diaria, ¿tienen propósito claro o las hago por inercia?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la automatización)',
      lente: 'lente de la infoesfera',
      cita: '"Los bucles son lo que hizo posible la computación masiva. Sin bucles, no habría Google ni Wikipedia."',
      preguntaEspejo: '¿Qué cosas del mundo digital que uso a diario serían imposibles sin bucles?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 2 tipos de bucles; (2) sabrás aplicar cada tipo a su situación; (3) podrás evaluar si un algoritmo necesita bucle o no; (4) habrás creado un algoritmo…',
    emocional: 'Los bucles bien diseñados son como la disciplina diaria: hacen lo mismo cada vez, pero con propósito claro y condición de parada.',
    ciudadana: 'Hay una idea moderna de que la repetición es aburrida y debe automatizarse.',
    local: 'Antes de salir, verifica que tu algoritmo NO entre en bucle infinito (que sí termine).',
    intergeneracional: 'Google indexa millones de páginas usando bucles: REPETIR por cada página: leer, analizar, indexar, pasar a la siguiente.'
  }
};

export default contenido;
