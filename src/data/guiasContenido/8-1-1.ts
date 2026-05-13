/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 1
 * (sesión global 1 — apertura del grado 8).
 *
 * Tema: Análisis de datos con phronesis.
 * Versión MILC v3 con apertura ancestral, pensamiento computacional,
 * 5 dimensiones y Triángulo Dussel-Estoicismo-Floridi.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 1,
  resumen:
    'Apertura del grado 8: del oficio de pesar el grano a la prudencia digital. Aprendes a hacerle preguntas a los datos antes de calcular y a tomar decisiones que reconocen sus límites.',
  duracionMin: 90,
  subtema: 'Phronesis · Preguntar antes de calcular',

  preLectura: {
    porQueImporta:
      'Saber leer datos te servirá toda la vida — desde decidir qué red social te conviene hasta votar con criterio. Pero leer datos sin prudencia es peligroso: te lleva a conclusiones rápidas que no sostiene la realidad.',
    preguntaDetonante:
      '¿Qué del oficio de pesar el grano de los abuelos podemos llevar al análisis digital de datos?',
    activacion: {
      titulo: 'El dato del bolsillo',
      descripcion:
        'En 3 minutos: saca tu celular y mira tu tiempo de pantalla del último día. ¿Qué pregunta inmediata se te ocurre con ese dato? ¿Qué te falta saber para tomar una decisión prudente sobre tu uso del celular?',
      duracionMin: 5,
    },
    conexion: {
      anterior: 'En grado 7 trabajaste con tablas básicas y comparación de datos cualitativos.',
      siguiente: 'En la sesión 2 aprenderás a ingresar datos en Excel con sus tipos correctos (número, texto, fecha, moneda).',
    },
  },

  conceptosClave: [
    // ───── Cómo se observan los datos ─────
    {
      categoria: '🔍 Cómo se observan los datos',
      termino: 'Variable',
      definicion:
        'Característica que cambia entre personas, objetos o situaciones. Puede ser numérica (edad, nota, minutos) o categórica (red social, color, género).',
      ejemplo:
        'En tu curso, "edad" es una variable numérica (12, 13, 14...) y "red social favorita" es una variable categórica (TikTok, Instagram, etc.).',
      emoji: '📊',
    },
    {
      categoria: '🔍 Cómo se observan los datos',
      termino: 'Población',
      definicion:
        'El conjunto completo de personas u objetos del que queremos sacar conclusiones. Antes de analizar, define con claridad de qué grupo hablas.',
      ejemplo:
        'Si tu pregunta es "¿qué red social usan más en mi colegio?", la población son TODOS los estudiantes del colegio, no solo los de tu salón.',
      emoji: '👥',
    },
    {
      categoria: '🔍 Cómo se observan los datos',
      termino: 'Muestra',
      definicion:
        'Subgrupo de la población al que efectivamente preguntaste. Una buena muestra es representativa: refleja la diversidad de la población completa.',
      ejemplo:
        'Si encuestas SOLO a tus 5 mejores amigas, esa muestra no es representativa del colegio — los datos no se pueden generalizar.',
      emoji: '🎯',
    },
    {
      categoria: '🔍 Cómo se observan los datos',
      termino: 'Registro',
      definicion:
        'Una unidad individual de información con todos sus campos completos. En una tabla de Excel, cada fila es un registro.',
      ejemplo:
        'Un registro de "Juan, 13 años, 8°A, TikTok" tiene 4 campos. Si falta uno, el registro está incompleto y debilita el análisis.',
      emoji: '📋',
    },
    // ───── Cómo se decide con prudencia ─────
    {
      categoria: '🦉 Cómo se decide con prudencia',
      termino: 'Tendencia',
      definicion:
        'La dirección general que muestran los datos cuando los miras en conjunto. Puede ser hacia arriba (creciente), abajo (decreciente) o estable.',
      ejemplo:
        'Si el promedio de notas del curso fue 3.0 en marzo, 3.5 en abril, 3.8 en mayo, la tendencia es creciente — están mejorando.',
      emoji: '🔭',
    },
    {
      categoria: '🦉 Cómo se decide con prudencia',
      termino: 'Sesgo',
      definicion:
        'Inclinación que distorsiona los datos. Puede ser de la pregunta, de la muestra, o del que recolecta. Un análisis prudente reconoce sus posibles sesgos.',
      ejemplo:
        'Si encuestas "¿no crees que TikTok es la mejor red?" estás induciendo la respuesta — la pregunta tiene sesgo. Mejor: "¿qué red usas más cada día?".',
      emoji: '⚖️',
    },
    {
      categoria: '🦉 Cómo se decide con prudencia',
      termino: 'Phronesis',
      definicion:
        'Sabiduría práctica griega: saber decidir bien en situaciones concretas. No es repetir fórmulas, es aplicar criterio al caso particular reconociendo lo que NO sabes.',
      ejemplo:
        'Aristóteles distinguía a quien sabe la teoría (episteme) de quien sabe decidir bien (phronesis). El profesor que ajusta la nota a tu proceso, no a la fórmula sola, tiene phronesis.',
      emoji: '🦉',
    },
    {
      categoria: '🦉 Cómo se decide con prudencia',
      termino: 'Decisión informada',
      definicion:
        'Acción que reconoce qué dicen los datos Y qué no dicen. No es certeza absoluta — es la mejor opción dado lo que se sabe y lo que se ignora.',
      ejemplo:
        '"Los datos sugieren reducir el tiempo de TikTok del curso, pero no me dicen por qué cada estudiante lo usa. Por eso propongo conversar antes de regular." Eso es una decisión informada.',
      emoji: '🤝',
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: 'Quiz · Phronesis con datos',
      instrucciones:
        '5 preguntas tipo ICFES sobre cómo formular preguntas, distinguir variables, reconocer sesgos y tomar decisiones prudentes con datos. Lee con calma, escoge la mejor opción y revisa el feedback.',
      preguntas: [
        {
          enunciado:
            'En un curso de 30 estudiantes, las edades van de 12 a 14 años. ¿Qué tipo de variable es la edad?',
          opciones: [
            'Cualitativa nominal',
            'Cuantitativa continua',
            'Cuantitativa discreta',
            'Cualitativa ordinal',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Exacto. La edad en años cumplidos toma valores enteros (12, 13, 14) — es cuantitativa discreta. Si midiéramos la edad en años con decimales (12.5, 13.7), sería continua.',
          feedbackIncorrecto:
            '❌ Revisa: la edad SÍ es cuantitativa (es número, no categoría), y como toma valores enteros (no fracciones de año), es discreta. La continua es como peso en kg con decimales.',
        },
        {
          enunciado:
            'Si una encuesta sobre uso del celular se hace SOLO al curso 8°A, ¿qué error podríamos cometer al concluir sobre todo el colegio?',
          opciones: [
            'Sesgo de muestreo: la muestra no representa a la población',
            'Cálculo equivocado',
            'Falta de variables',
            'Pregunta mal formulada',
          ],
          respuestaIndex: 0,
          feedbackCorrecto:
            '✅ Correcto. El error principal es de muestreo: 8°A es solo una parte del colegio, y los demás cursos (otras edades, otros grupos) podrían comportarse distinto. La conclusión no es generalizable.',
          feedbackIncorrecto:
            '❌ El cálculo puede estar bien, las variables suficientes y la pregunta clara — pero si la muestra (8°A) no representa a la población (colegio), la generalización falla. Eso es sesgo de muestreo.',
        },
        {
          enunciado:
            'Camila quiere saber qué red social es más popular en su colegio. ¿Cuál es la mejor pregunta inicial?',
          opciones: [
            '"¿Te gusta TikTok?"',
            '"¿Cuántas redes usas?"',
            '"¿Qué red social usas más cada día y cuántos minutos?"',
            '"¿Cuándo dejarás las redes?"',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Sí. La opción C es específica (red, frecuencia, tiempo), abierta (no induce respuesta) y útil (te da datos para análisis real). Las otras tienen sesgo o son demasiado vagas.',
          feedbackIncorrecto:
            '❌ La A induce a TikTok (sesgo), la B es ambigua, la D es manipuladora. La C es la única que da datos limpios y útiles para decidir con phronesis.',
        },
        {
          enunciado:
            'El profesor presenta este dato: "El 60% del curso aprobó". Para tomar una decisión prudente, ¿qué información adicional NECESITAS?',
          opciones: [
            'Cuántos estudiantes son y cuáles fueron las notas más bajas',
            'Cuál es la mejor materia del curso',
            'Si hay grupo de estudio organizado',
            'Quién es el mejor estudiante',
          ],
          respuestaIndex: 0,
          feedbackCorrecto:
            '✅ Excelente. "60%" sin contexto puede esconder mucho: ¿de cuántos? ¿qué tan baja fue la nota más baja? ¿el otro 40% fue por poco o muy lejos? Sin esos datos, decidir es apresurado.',
          feedbackIncorrecto:
            '❌ Conocer la mejor materia o el mejor estudiante no te ayuda a tomar la decisión sobre QUÉ HACER con los que reprobaron. Lo que necesitas es contexto del propio dato (tamaño, dispersión).',
        },
        {
          enunciado:
            'Una decisión es "prudente con datos" cuando:',
          opciones: [
            'Confía 100% en los números',
            'Ignora los números',
            'Reconoce qué dicen los datos y qué NO dicen',
            'Espera siempre tener más datos',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Eso es phronesis. Una decisión prudente NO es certeza absoluta ni parálisis: es actuar reconociendo los límites de lo que se sabe. La decisión nombra "los datos sugieren X pero no me dicen Y".',
          feedbackIncorrecto:
            '❌ Confiar 100% en datos es ingenuo (los datos pueden tener sesgo). Ignorarlos es irresponsable. Esperar más datos es procrastinación. La phronesis es actuar reconociendo límites.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Recuerdas alguna vez que tomaste una decisión "con datos" que después resultó equivocada? ¿Qué te faltó preguntar antes de decidir? Esa es la pregunta de la phronesis.',
    transferencia:
      'En tu próxima decisión cotidiana (qué comprar, qué red usar, cómo organizar tu tiempo), pregúntate antes: "¿qué dato me serviría?" y "¿qué NO me dice ese dato?". Conviértelo en hábito.',
    cierre:
      'La phronesis no es saber más datos: es saber qué preguntarles. Pesar el grano antes de venderlo es la misma sabiduría que mirar los datos antes de decidir.',
  },

  saberAncestral: {
    saber:
      'El oficio de pesar el grano en las plazas del Valle exigía dos saberes: la balanza calibrada y el ojo del comerciante. La balanza daba el número; el ojo decidía qué hacer con ese número — si el grano estaba seco, si el costal venía con tierra adentro, si valía pagar o renegociar. El dato no era el final, era el principio de la decisión. La phronesis (sabiduría práctica griega) y el oficio del comerciante del Valle comparten esa lógica: medir es solo la mitad del trabajo.',
    fuente: 'Oficio del comerciante y la balanza en las plazas del Valle del Cauca',
    preguntaPuente:
      '¿Qué del oficio de pesar el grano de los abuelos podemos llevar al análisis digital de datos? ¿Qué pierde el que solo mira el número sin saber preguntar por el contexto?',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El dato sin pregunta sobre quién quedó afuera reproduce la exclusión que oculta.',
      preguntaEspejo:
        '¿Quién no aparece en los datos que estoy mirando? ¿Qué decisión cambiaría si esos invisibles estuvieran contados?',
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'No te perturben los datos que no controlas; ocúpate de cómo los lees y qué decides con ellos.',
      preguntaEspejo:
        '¿Qué de los datos depende de mí (qué pregunto, cómo decido) y qué no? ¿Estoy concentrando energía en lo que sí depende?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La phronesis digital es la virtud informacional de nuestro tiempo — saber qué preguntar al dato antes de calcular.',
      preguntaEspejo:
        '¿Estoy entrenando mi phronesis digital o solo aprendiendo a calcular más rápido? ¿Qué dato consumí hoy sin preguntar quién lo generó?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste que un dato no es decisión — es insumo. La prudencia es lo que conecta el número con la acción.',
    emocional:
      'Resististe la tentación de la respuesta rápida. Distinguir lo que el dato dice de lo que no dice es paciencia entrenable.',
    ciudadana:
      'Reconociste que ignorar datos es irresponsable, pero confiar ciegamente es ingenuo. Esa distinción es ciudadanía digital adulta.',
    local:
      'Conectaste el oficio del comerciante del Valle con tu próximo análisis en Excel — saberes que dialogan, no que se reemplazan.',
    intergeneracional:
      'La phronesis griega y la prudencia del abuelo en la plaza son la misma virtud, en distinto idioma. Hoy la heredas en formato digital.',
  },
};

export default contenido;
