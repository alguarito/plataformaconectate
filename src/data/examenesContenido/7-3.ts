/**
 * Contenido web del examen final · Grado 7 · Período 3
 *
 * Auto-generado desde content/examenes/7-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 7,
  periodo: 3,
  titulo: 'Examen final · Inteligencia artificial con criterio',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Inteligencia artificial con criterio',
    instrucciones: 'Practica con 25 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: 'Según la apertura (S1), ¿por qué la gente confiaba en los consejeros del barrio de Cartago?',
        opciones: [
          'Porque eran famosos.',
          'Porque tenían experiencia, paciencia, honestidad y discreción.',
          'Porque cobraban.',
          'Porque siempre acertaban.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 4 virtudes del consejero: experiencia + paciencia + honestidad + discreción. La IA tiene 2 (experiencia masiva en datos, paciencia infinita) pero le faltan 2 (honestidad limitada, discreción cuestionable).',
        feedbackIncorrecto: 'Las 4 virtudes: experiencia, paciencia, honestidad, discreción. La IA solo tiene completas las dos primeras. Por eso necesita tu criterio para complementar lo que le falta.'
      },
      {
        enunciado: '¿Cuál es el paralelo principal entre el consejero del barrio y la IA?',
        opciones: [
          'Ambos cobran lo mismo.',
          'Ambos aconsejan pero no deciden por ti; tú debes verificar con criterio y mantener tu voz.',
          'Ambos son adultos mayores.',
          'Ambos hablan español.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El consejero no decidía por ti; tampoco la IA debe decidir por ti. Tú escuchas, verificas, decides con criterio.',
        feedbackIncorrecto: 'Tanto el consejero como la IA aconsejan, no deciden. Tu trabajo: pedir bien, verificar lo que dicen, mantener tu voz. Eso vale para don Lucho y para ChatGPT.'
      },
      {
        enunciado: '¿Qué es la Inteligencia Artificial?',
        opciones: [
          'Un robot con cuerpo metálico.',
          'Un programa que aprende patrones de datos para hacer tareas que antes solo hacían humanos (clasificar, traducir, responder, recomendar).',
          'Una persona muy inteligente.',
          'Un computador encendido.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. IA = programa que aprende patrones para hacer tareas humanas. No necesita cuerpo metálico: vive como software en servidores y se accede por navegador o app.',
        feedbackIncorrecto: 'IA es programa, no cuerpo. Aprende patrones de muchísimos datos y ejecuta tareas que antes solo podían los humanos (clasificar fotos, traducir, responder texto, recomendar).'
      },
      {
        enunciado: '¿Cuál de estos NO es ejemplo de IA en tu vida diaria?',
        opciones: [
          'Recomendación de videos en TikTok o YouTube.',
          'Filtros y efectos de cámara en Instagram o Snapchat.',
          'Una calculadora de bolsillo de los años 80.',
          'Asistente de voz como Siri, Alexa o Google.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. La calculadora vieja ejecuta operaciones fijas sin aprender. Las otras 3 sí son IA: aprenden patrones para recomendar, transformar imágenes o responder.',
        feedbackIncorrecto: 'Una calculadora vieja no aprende: ejecuta operaciones fijas. IA implica aprendizaje de patrones. TikTok, filtros y asistentes de voz son IA viva en tu vida diaria.'
      },
      {
        enunciado: '¿Qué es la IA estrecha (también llamada específica)?',
        opciones: [
          'Una IA que hace todo lo que un humano puede hacer.',
          'Una IA diseñada para una tarea específica (recomendar videos, traducir, clasificar fotos).',
          'Una IA que cabe en un celular pequeño.',
          'Una IA que solo entiende inglés.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La IA estrecha (o específica) hace una tarea concreta muy bien. Es lo único que existe hoy. La IA general (hacer todo como humano) es teoría aún.',
        feedbackIncorrecto: 'IA estrecha = una tarea. IA general (AGI) = todas las tareas humanas. Hoy toda la IA real (incluso ChatGPT) es estrecha: especializada en lenguaje, en imágenes o en recomendar.'
      },
      {
        enunciado: '¿Qué diferencia hay entre aprendizaje supervisado y no supervisado?',
        opciones: [
          'Ninguna.',
          'Supervisado: la IA aprende con datos etiquetados (esta foto es un gato). No supervisado: la IA encuentra patrones en datos sin etiqueta.',
          'Supervisado es para niños; no supervisado para adultos.',
          'Solo cambian de nombre.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Supervisado = aprende con respuestas correctas (etiquetas). No supervisado = encuentra patrones sin guía. Ambos son útiles para distintos problemas.',
        feedbackIncorrecto: 'Supervisado: alguien etiquetó los datos (esto es gato, esto es perro) y la IA aprende. No supervisado: la IA se las arregla sola para encontrar patrones (estos 100 datos se parecen entre sí).'
      },
      {
        enunciado: '¿Cuáles son las 3 etapas básicas para que una IA aprenda?',
        opciones: [
          'Encender, apagar, reiniciar.',
          'Datos, entrenamiento, evaluación.',
          'Comprar, instalar, usar.',
          'Programar, jugar, descansar.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Datos (ejemplos para aprender) → entrenamiento (el modelo procesa los datos y ajusta sus parámetros) → evaluación (se mide qué tan bien aprendió).',
        feedbackIncorrecto: 'Las 3 etapas: datos + entrenamiento + evaluación. Si los datos son malos, la IA aprende mal (garbage in, garbage out). Si no se evalúa, no sabes si sirve.'
      },
      {
        enunciado: 'Si entrenas una IA con datos sesgados (por ejemplo, solo fotos de personas de un solo color de piel), ¿qué pasa?',
        opciones: [
          'Nada, aprende igual.',
          'La IA queda sesgada: no reconoce bien a personas con otros colores de piel; comete errores graves al usarse en el mundo real.',
          'La IA borra los datos sesgados sola.',
          'La IA cambia los datos a algo neutral.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Garbage in, garbage out: si los datos son sesgados, la IA es sesgada. Hay casos reales de IA de reconocimiento facial que no detectan bien a personas afro porque se entrenaron con datasets sesgados.',
        feedbackIncorrecto: 'Si los datos están sesgados, la IA aprende ese sesgo. Es un problema ético serio. Por eso S8 te enseña a sospechar de la IA: revisar de qué se alimentó.'
      },
      {
        enunciado: '¿Qué significa LLM?',
        opciones: [
          'Lo que Lleva el Mensaje.',
          'Large Language Model (modelo grande de lenguaje): IA entrenada con millones de textos para conversar.',
          'Lista Larga de Mensajes.',
          'Línea Linda y Mejorada.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. LLM = Large Language Model. Modelos como ChatGPT, Claude y Gemini son LLMs entrenados con millones de textos para generar respuestas.',
        feedbackIncorrecto: 'LLM = Large Language Model = modelo grande de lenguaje. Aprende de millones de textos (libros, webs, conversaciones) y genera respuestas estadísticas a tus preguntas.'
      },
      {
        enunciado: '¿Por qué un LLM puede "alucinar" (decir cosas falsas con seguridad)?',
        opciones: [
          'Porque está enojado.',
          'Porque genera lenguaje probable estadísticamente, no verdad verificada. Si los datos eran incompletos o ambiguos, llena el hueco con algo que suena bien pero puede ser falso.',
          'Porque tiene poca memoria.',
          'Porque está apagado.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Un LLM genera palabras estadísticamente probables, no verdades. Por eso puede inventar fechas, nombres o citas con seguridad falsa. Verificar es tu trabajo.',
        feedbackIncorrecto: 'Alucinación: el LLM da una respuesta estadísticamente probable, no necesariamente verdadera. Inventa fechas, nombres, fuentes. Por eso siempre se verifica contra fuente real lo importante.'
      },
      {
        enunciado: '¿Qué es un prompt en IA?',
        opciones: [
          'Un botón rápido.',
          'La instrucción que le das a la IA: lo que pides + cómo lo pides + qué formato esperas.',
          'Un error del programa.',
          'Una contraseña.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Prompt = instrucción a la IA. La calidad de la respuesta depende mucho de la calidad del prompt: pedir bien es la mitad del trabajo.',
        feedbackIncorrecto: 'Prompt es lo que escribes a la IA. Un buen prompt incluye contexto, rol, ejemplo y formato. Un prompt vago da respuesta vaga; uno preciso da respuesta útil.'
      },
      {
        enunciado: 'Quieres ayuda de ChatGPT para tu ensayo de Sociales. ¿Cuál prompt es el mejor según S6?',
        opciones: [
          'ayuda con un ensayo',
          'Eres profesor de Sociales para grado 7° en Cartago, Colombia. Voy a escribir un ensayo de 1 página sobre los oficios tradicionales del Valle del Cauca. Dame 5 oficios + 1 línea por cada uno explicando qué hacían. Formato: lista numerada.',
          'porfi hazme el ensayo',
          'rapido un ensayo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Prompt con los 4 elementos: rol (profesor de Sociales), contexto (grado 7°, Cartago), formato (lista numerada con 5 ítems + 1 línea), tarea clara. Resultado útil.',
        feedbackIncorrecto: 'Buen prompt = rol + contexto + tarea concreta + formato. "Ayuda con un ensayo" es vago; el segundo prompt te da una lista útil de partida. Pedir bien es la mitad del trabajo.'
      },
      {
        enunciado: 'Pides a la IA un texto y queda muy largo y formal. ¿Qué haces aplicando S7?',
        opciones: [
          'Lo aceptas como está.',
          'Iteras: "Reescríbelo en 80 palabras, voz cercana, sin tecnicismos".',
          'Lo borras y empiezas de cero.',
          'Cambias de plataforma.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Iterar = pedir cambios sobre la primera respuesta. La IA mejora con instrucciones específicas (más corto, más cercano, sin tecnicismos).',
        feedbackIncorrecto: 'Iteración: refinas la respuesta con un nuevo prompt ("más corto, sin tecnicismos, voz cercana"). Es la habilidad central de S7. No tienes que aceptar la primera versión.'
      },
      {
        enunciado: '¿Qué es una alucinación de IA?',
        opciones: [
          'Cuando la IA se duerme.',
          'Cuando la IA da una respuesta falsa pero la presenta con seguridad como si fuera verdad.',
          'Cuando la IA se apaga sola.',
          'Cuando la IA pide un descanso.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Alucinación = respuesta falsa con apariencia de verdad. La IA no sabe que mintió. Por eso siempre verificas datos importantes contra una fuente real.',
        feedbackIncorrecto: 'Alucinación es inventar datos con seguridad. Fechas, nombres, citas, leyes que no existen. La IA no sabe que se equivocó. Tu trabajo: verificar.'
      },
      {
        enunciado: 'ChatGPT te dice que la Ley 1581 de Colombia es de 2014. Tú sabes por S7 de 6° que es de 2012. ¿Qué haces?',
        opciones: [
          'Creerle a ChatGPT porque suena seguro.',
          'Corregirle internamente: alucinó. Verificar en página oficial del gobierno antes de usar el dato en tu trabajo.',
          'Borrar la conversación.',
          'Pedirle disculpas a ChatGPT.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Caso clásico de alucinación. Tú ya sabías la fecha real (2012). Verificar contra fuente oficial es lo correcto, no creer ciegamente.',
        feedbackIncorrecto: 'ChatGPT alucinó con la fecha. Tú ya sabías que la Ley 1581 es de 2012. Verifica contra fuente oficial. La IA habla seguro aun cuando se equivoca: tu criterio es el filtro final.'
      },
      {
        enunciado: 'Un compañero usa ChatGPT para hacer todo su trabajo de Lengua sin escribir nada y sin declarar el uso. La profe lo descubre. Aplicando criterio de S8:',
        opciones: [
          'Está bien, total el resultado quedó bonito.',
          'Es deshonestidad académica: la IA puede asistir, pero el trabajo entregado como propio debe tener trabajo humano real y declarar el uso.',
          'La profe exagera.',
          'Eso lo hace todo el mundo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La IA asiste, no reemplaza. Entregar como propio lo que hizo la IA, sin declararlo, es trampa académica. Hay forma honesta de usar IA: declarar + editar a mano + tener voz propia.',
        feedbackIncorrecto: 'La IA asiste; tú produces. Entregar como propio lo que escribió la IA sin declararlo es trampa. La salida correcta: declarar uso + tu voz visible + edición humana.'
      },
      {
        enunciado: '¿Qué es la declaración honesta de uso de IA en una tarea?',
        opciones: [
          'Decir que no usaste IA aunque la hayas usado.',
          'Indicar al final del trabajo qué herramienta usaste, en qué parte, y cuánto editaste a mano.',
          'Borrar el historial.',
          'Una contraseña secreta.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Declaración honesta = decir al final qué IA usaste, en qué parte y cuánto editaste a mano. Como citar una fuente: honestidad sobre el proceso.',
        feedbackIncorrecto: 'Declaración honesta: al final del trabajo, decir qué IA usaste (ChatGPT/Claude/Gemini), en qué parte (ideas, redacción inicial, ortografía) y cuánto editaste a mano. Como citar una fuente.'
      },
      {
        enunciado: 'Usaste Claude para que te sugiriera 5 ideas y de esas 5 elegiste 2, las desarrollaste tú en tu ensayo. ¿Cuál declaración es honesta?',
        opciones: [
          'No declaro nada, fueron mis ideas.',
          '"Usé Claude para una lluvia inicial de 5 ideas; de esas elegí 2 y las desarrollé en mi voz. El ensayo está escrito por mí."',
          '"Claude me hizo todo".',
          '"No usé IA".'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Declaración honesta: específica, breve, dice cómo participó la IA y qué hiciste tú. Eso te protege ante la profe y muestra criterio.',
        feedbackIncorrecto: 'Declaración honesta: específica + breve + qué hizo la IA + qué hiciste tú. La opción 2 cumple esos 4 criterios. Las otras o mienten u ocultan o exageran.'
      },
      {
        enunciado: 'Tu proyecto final del periodo usa IA para casi todo y tu trabajo humano es mínimo. ¿Qué nivel de la rúbrica obtendrías?',
        opciones: [
          'Nivel 5 porque queda muy bien.',
          'Nivel 1 porque la rúbrica evalúa USO RESPONSABLE: voz humana clara + edición visible + declaración honesta + verificación de lo que dijo la IA.',
          'Nivel 3 porque al menos lo entregaste.',
          'Nivel 4 porque tiene IA.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. La rúbrica de S10 valora el uso responsable de la IA, no la cantidad de IA. Trabajo humano + declaración + verificación + voz propia son lo central.',
        feedbackIncorrecto: 'Rúbrica de S10 evalúa USO RESPONSABLE: voz humana + edición + declaración + verificación. Si la IA hizo casi todo y tú casi nada, el proyecto falla la rúbrica aunque "quede bonito".'
      },
      {
        enunciado: 'Vas a estructurar tu proyecto final con IA responsable. ¿Cuál orden es el más profesional?',
        opciones: [
          'Le pido a la IA que me haga todo y lo entrego.',
          '1) Yo pienso el tema y el plan; 2) uso IA para ideas/borrador/ortografía; 3) edito en mi voz; 4) verifico datos contra fuentes; 5) declaro el uso al final.',
          'Solo copio de internet.',
          'Lo dejo para última hora y la IA hace todo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. El orden profesional: tú piensas primero, IA asiste, tú editas, verificas y declaras. Eso es uso responsable.',
        feedbackIncorrecto: 'Orden: planificas tú → IA asiste (no reemplaza) → editas en tu voz → verificas datos → declaras uso. Es el ciclo de IA responsable que enseña el periodo.'
      },
      {
        enunciado: 'Si tu prima entrena una IA con solo 20 fotos de gatos blancos, ¿qué problema tendrá la IA?',
        opciones: [
          'Ninguno.',
          'Sesgo de datos: clasificará mal los gatos negros o naranjas porque nunca los vio. Aprende solo el patrón que le enseñaron.',
          'Será más rápida.',
          'Le encantarán los perros.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Sesgo de datos: la IA solo aprende los patrones que vio. 20 fotos de gatos blancos no enseñan los demás colores. Para que sirva en el mundo real, los datos deben ser diversos.',
        feedbackIncorrecto: 'Sesgo de datos: la IA solo conoce lo que vio en entrenamiento. Datos limitados o desiguales = IA limitada o desigual. Por eso los datasets profesionales se cuidan en diversidad.'
      },
      {
        enunciado: 'Para mejorar un prompt corto, ¿qué agregas?',
        opciones: [
          'Solo emojis.',
          'Rol (eres profesor de...), contexto (grado 7°, Cartago), tarea concreta, formato esperado (lista de 5, máximo 80 palabras).',
          'Muchas exclamaciones.',
          'Tu contraseña.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Los 4 ingredientes del buen prompt: rol + contexto + tarea + formato. Aplicarlos cambia la calidad de la respuesta drásticamente.',
        feedbackIncorrecto: 'Rol + contexto + tarea + formato. Esos 4 elementos elevan un prompt malo a útil. Sin contexto la IA inventa; con contexto la IA acierta más.'
      },
      {
        enunciado: 'Tu profe pregunta si usaste IA en un trabajo. Tú lo usaste pero no estás seguro si declararlo. ¿Qué haces?',
        opciones: [
          'Mentir y decir que no.',
          'Declarar honestamente: "Sí, usé Claude para X. Edité con mi voz y verifiqué Y".',
          'Cambiar de tema.',
          'Decir que no me acuerdo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Honestidad académica: declarar siempre. Si lo usaste bien, declararlo no es problema — es prueba de criterio. Mentir es peor que el uso mismo.',
        feedbackIncorrecto: 'Declarar siempre. La mentira es deshonestidad académica, que pesa más que el uso de IA bien hecho. Si usaste bien la IA, declararlo te protege; mentir te perjudica.'
      },
      {
        enunciado: '¿Cuál de estas afirmaciones sobre los LLMs es FALSA?',
        opciones: [
          'Están entrenados con millones de textos.',
          'Generan respuestas estadísticamente probables, no verdades verificadas.',
          'Siempre dicen la verdad porque son inteligentes.',
          'Pueden alucinar y por eso necesitan verificación humana.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Los LLMs no garantizan verdad; generan lenguaje probable. Por eso la verificación humana sigue siendo esencial. Cualquier afirmación del estilo "siempre dice la verdad" es falsa.',
        feedbackIncorrecto: 'Los LLMs generan lenguaje probable, no verdad. Pueden alucinar. La verificación humana es tu deber. Un LLM "siempre verdadero" no existe; eso es propaganda, no realidad técnica.'
      },
      {
        enunciado: 'Quieres que la IA genere un texto pero con restricciones (no más de 80 palabras, sin tecnicismos, voz de adolescente). ¿Cómo lo logras?',
        opciones: [
          'Esperar a que adivine.',
          'Especificar las restricciones en el prompt: "Máximo 80 palabras, sin tecnicismos, voz de adolescente de 13 años".',
          'Borrar partes a mano después.',
          'Pedir disculpas a la IA.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Restricciones en el prompt = control sobre la salida. Cantidad de palabras, tono, audiencia, formato: todo se declara para que la IA respete.',
        feedbackIncorrecto: 'Especifica las restricciones en el prompt. La IA respeta lo que escribes claro: cantidad de palabras, tono, audiencia, formato. Sin restricciones, te entrega lo más genérico posible.'
      }
    ]
  }
};

export default contenido;
