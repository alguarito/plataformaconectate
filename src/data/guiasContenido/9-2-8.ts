/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 8
 * (sesión global 18).
 *
 * Auto-generado desde content/guias/9/9-2-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 8,
  titulo: 'Edición y corrección — el ojo crítico',
  resumen: 'Entre el pueblo wayuu, en La Guajira, la palabra pasa por un tercero antes de que el daño crezca: el palabrero no busca averiguar quién tiene la razón, sino evitar que la ofensa se convierta en guerra. Corregir es poner un tercero entre lo que escribiste y quien va a leerlo, y la pregunta que ordena todo es si el error confunde o solo te molesta.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Edición y corrección',
  preLectura: {
    porQueImporta: 'Cuando tú escribes, tu cerebro completa lo que falta. Cuando otro lee, no completa nada. Por eso nadie corrige bien su propio texto recién escrito.',
    preguntaDetonante: '¿Cuál fue el último error tuyo que solo viste cuando ya estaba publicado?',
    activacion: {
      titulo: 'En voz alta',
      descripcion: 'En 2 minutos, lee en voz alta un párrafo que hayas escrito esta semana. Anota dónde tropezó tu boca: ahí hay algo.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 7 rediseñaste un spread para que fuera accesible.',
      siguiente: 'En la sesión 9 maquetas la revista completa con las correcciones ya aplicadas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Capa de texto',
      definicion: 'Tildes, palabras repetidas cerca, puntuación que cambia el sentido, concordancia y datos mal copiados.',
      ejemplo: 'Una cifra mal transcrita es el error más caro de esta capa y el que menos se busca.',
      categoria: 'Las dos capas'
    },
    {
      termino: 'Capa de diseño',
      definicion: 'Alineaciones que bailan, espacios desiguales, líneas sueltas al inicio o al final de columna, jerarquías inconsistentes.',
      ejemplo: 'La mitad de los problemas de una revista están aquí, y casi nadie los revisa.',
      categoria: 'Las dos capas'
    },
    {
      termino: 'Confunde o molesta',
      definicion: 'La pregunta que separa un error de una preferencia. Si confunde al lector, se corrige; si es gusto propio, se suelta.',
      ejemplo: 'Casi todas las peleas de corrección son por preferencias disfrazadas de reglas.',
      categoria: 'El criterio'
    },
    {
      termino: 'Dejar descansar',
      definicion: 'Esperar antes de corregir lo propio, porque el autor recién terminado completa mentalmente lo que falta.',
      ejemplo: 'Una hora ya cambia el resultado; un día lo cambia mucho más.',
      categoria: 'El método'
    },
    {
      termino: 'El tercero',
      definicion: 'Quien lee antes de que la pieza salga. No está para tener la razón, sino para que el error no llegue al lector.',
      ejemplo: 'Entre el pueblo wayuu, el palabrero lleva y trae la palabra para que la ofensa no crezca.',
      categoria: 'El método'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Tienes ojo de corrector?',
      instrucciones: 'Cinco preguntas sobre las dos capas, el criterio y el método. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Cuál es la pregunta que separa un error de una preferencia?',
          opciones: [
            '¿Este error confunde al lector o solo me molesta a mí?',
            '¿Este error aparece en el manual de estilo que seguimos?',
            '¿Este error lo cometería también un diseñador profesional?',
            '¿Este error se nota a primera vista o hay que buscarlo?'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Si confunde, se corrige. Si es preferencia, se suelta.',
          feedbackIncorrecto: 'Si confunde al lector o solo te molesta. Casi todas las peleas son por preferencias.'
        },
        {
          enunciado: '¿Por qué nadie corrige bien su propio texto recién escrito?',
          opciones: [
            'Porque el cansancio impide concentrarse lo suficiente.',
            'Porque el cerebro del autor completa lo que falta.',
            'Porque hace falta un programa que revise la ortografía.',
            'Porque el texto todavía no está terminado del todo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Quien lee después no completa nada, y por eso ve lo que el autor no veía.',
          feedbackIncorrecto: 'Porque el autor completa mentalmente lo que falta. Por eso el texto descansa antes.'
        },
        {
          enunciado: '¿Cuál de estos es un error de la capa de diseño?',
          opciones: [
            'Una tilde que falta en un pretérito del texto.',
            'Una palabra repetida en dos frases muy cercanas.',
            'Una línea suelta al final de una columna.',
            'Una cifra mal copiada de la fuente original.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es. Alineaciones, espacios, líneas sueltas y jerarquías son capa de diseño.',
          feedbackIncorrecto: 'La línea suelta. Los otros tres son de la capa de texto.'
        },
        {
          enunciado: '¿En qué consiste el oficio del palabrero entre el pueblo wayuu?',
          opciones: [
            'En averiguar cuál de los dos clanes tiene la razón.',
            'En llevar y traer la palabra para que la ofensa no crezca.',
            'En imponer una sanción acordada por las dos familias.',
            'En representar a una de las familias ante la otra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí, y termina en una compensación que repara el daño ante los dos clanes.',
          feedbackIncorrecto: 'En llevar y traer la palabra. No busca quién tiene la razón, sino evitar la guerra.'
        },
        {
          enunciado: '¿Por qué el patrón de tus errores vale más que los diez errores?',
          opciones: [
            'Porque permite corregir más rápido la próxima revista.',
            'Porque es lo que pide la rúbrica de esta actividad.',
            'Porque demuestra que revisaste el trabajo con cuidado.',
            'Porque diez errores sueltos se corrigen y se olvidan.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. «Se me van las tildes en los pretéritos» sirve el resto del año.',
          feedbackIncorrecto: 'Porque los errores sueltos se olvidan y el patrón se puede vigilar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus diez errores, ¿cuántos eran de diseño? Si fueron menos de cinco, probablemente esa capa te cuesta ver.',
    transferencia: 'Pásale una página tuya a un compañero y pídele solo lo que le confunda, no lo que le disguste. Es una pregunta distinta.',
    cierre: 'El palabrero no busca tener la razón: busca que el daño no crezca. Corregir se parece más a eso que a ganar.'
  },
  saberAncestral: {
    saber: 'Entre el pueblo wayuu, en La Guajira, cuando dos familias entran en conflicto ninguna de las dos habla directamente con la otra. Se busca un pütchipü\'üi, el palabrero, que lleva y trae la palabra hasta que hay un acuerdo. Fíjate en cómo está definido su oficio, porque no es lo que uno esperaría. No consiste en averiguar quién tiene la razón, sino en evitar que la ofensa se convierta en guerra. Termina en una compensación que repara el daño ante los dos clanes. La UNESCO inscribió este sistema normativo en 2010, en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad. En Colombia tiene su propio Plan Especial de Salvaguardia. Conviene decirlo con precisión: es el derecho de un pueblo, no una técnica de mediación escolar. La cara de exclusión: la responsabilidad allí es del clan, no de la persona, y la venganza existe dentro del sistema como último recurso reglado.',
    fuente: 'Pueblo wayuu, en La Guajira · la palabra pasa por un tercero antes de que el daño crezca',
    referencia: 'UNESCO. (2010). El sistema normativo de los wayuus, aplicado por el pütchipü\'üi («palabrero») (Expediente 00435). Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad.',
    preguntaPuente: 'El palabrero no busca tener la razón: busca que el daño no crezca. Cuando corriges el trabajo de un compañero, ¿cuál de las dos cosas estás haciendo?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La palabra pasa por un tercero',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Errores en trabajo ajeno',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Las dos capas y el criterio',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✅'
      ],
      titulo: 'Actividad 3 · Diez correcciones sobre lo tuyo',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Errores en trabajo ajeno',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca tres publicaciones reales bien hechas, un periódico, una revista y una muy compartida.',
        'Con ojo de corrector, encuentra al menos dos errores en cada una.',
        'Anota de qué capa es cada uno, si de texto o de diseño.',
        'Escribe si confunde al lector o si solo te molesta a ti.',
        'Marca el que más te costó ver.'
      ],
      cuaderno: {
        titulo: 'Errores en trabajo ajeno',
        formato: 'tabla de 6 filas y 3 columnas (error / capa / confunde o solo molesta)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Al menos uno de los seis está marcado como «solo me molesta».',
        'Cada error tiene su capa anotada.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Las dos capas y el criterio',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cinco errores típicos de cada capa.',
        'Clasifiquen en ellos los doce errores que trajeron.',
        'Discutan los que uno marcó como «confunde» y el otro como «solo molesta».',
        'Escriban el criterio con el que resolvieron los desacuerdos.'
      ],
      cuaderno: {
        titulo: 'Las dos capas y el criterio',
        formato: 'los cinco errores típicos de cada capa, los doce clasificados y el criterio escrito',
        extension: 'media página'
      },
      criterios: [
        'Resolvieron al menos un desacuerdo con el criterio escrito.',
        'Los doce errores quedaron clasificados por capa.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Diez correcciones sobre lo tuyo',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Deja descansar tus páginas al menos una hora antes de empezar.',
        'Léelas completas en voz alta, sin corregir nada todavía.',
        'Encuentra cinco errores de texto y cinco de diseño en tu revista.',
        'Captura cada uno antes de tocarlo y después de arreglarlo.',
        'Escribe qué patrón se repite en tus errores.'
      ],
      cuaderno: {
        titulo: 'Diez correcciones sobre lo mío',
        formato: 'las diez correcciones con su capa, su criterio y la referencia a las capturas, más el patrón',
        extension: 'media página'
      },
      criterios: [
        'El patrón está escrito y se puede vigilar la próxima vez.',
        'Hay cinco correcciones de texto y cinco de diseño.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.3',
      lente: 'lente del nosotros',
      cita: 'El respeto es silencio, pero no silencio del que nada tiene que decir, sino del que todo tiene que escuchar porque nada sabe del otro como otro.',
      preguntaEspejo: '¿Cuándo empecé a corregir a alguien antes de haber terminado de leerlo?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Acuérdate que igualmente te es libre el mudar de parecer y el seguir el aviso de quien te corrija.',
      preguntaEspejo: 'De las correcciones que me hicieron, ¿cuál rechacé por orgullo y no por criterio?'
    },
    floridi: {
      autor: 'Luciano Floridi · Big data and their epistemological challenge (2012)',
      lente: 'lente de la infoesfera',
      cita: 'El verdadero problema epistemológico de los grandes datos son los pequeños patrones. (trad. propia)',
      preguntaEspejo: '¿Qué se repite en mis errores, y desde cuándo lo vengo repitiendo sin notarlo?'
    }
  },
  cincoDimensiones: {
    personal: 'Encontraste un patrón en tus propios errores, que es más útil que corregir diez veces lo mismo.',
    emocional: 'Corregir lo propio incomoda. Esa incomodidad es justo lo que separa a quien mejora de quien se estanca.',
    ciudadana: 'Publicar un dato mal copiado lo pone a circular. Verificar antes es parte del oficio, no un extra.',
    local: 'El sistema normativo wayuu está inscrito por la UNESCO desde 2010 y tiene su plan de salvaguardia en Colombia.',
    intergeneracional: 'Que la palabra pase por alguien antes de estallar es una idea vieja y sigue siendo la mejor que hay.'
  }
};

export default contenido;
