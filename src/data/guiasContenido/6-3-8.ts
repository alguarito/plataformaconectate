/**
 * Contenido enriquecido para Grado 6 · Período 3 · Sesión 8
 * (sesión global 28).
 *
 * Auto-generado desde content/guias/6/6-3-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 3,
  sesion: 8,
  titulo: 'Buscar bien en internet — encontrar lo que necesito en segundos',
  resumen: 'Buscar bien en internet es una habilidad que se aprende.',
  duracionMin: 90,
  subtema: 'Buscar bien en internet — encontrar lo que necesito en segundos',
  preLectura: {
    porQueImporta: 'El producto es la tabla de 10 búsquedas mejoradas + la tabla de 6 operadores.',
    preguntaDetonante: 'Buscas en Google "perros". Sale Wikipedia, criaderos de perros, fotos de perros, historia de perros. Pero tú lo que quieres es "qué hacer si mi perro tiene fiebre". ¿Cómo cambiarías la búsqueda para encontrar exactamente eso?',
    activacion: {
      titulo: '5 búsquedas malas y por qué fallan',
      descripcion: 'Actividad 1 · ANALIZA — 5 búsquedas malas y por qué fallan (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas el problema de buscar mal, aprendes los 6 operadores, mejoras 10 búsquedas tuyas, y registras todo en el cuaderno.',
      siguiente: 'Esta semana, cada vez que busques algo en Google, usa al menos un operador.'
    }
  },
  conceptosClave: [
    {
      termino: 'Operador de búsqueda',
      definicion: 'Símbolo o palabra que le dice al buscador algo específico sobre cómo buscar. Por ejemplo, comillas le dicen "busca frase exacta", el guion le dice "excluye esta palabra". Hay 6 operadores universales esenciales.',
      ejemplo: 'Sin operador: "perros fiebre" te da resultados confusos. Con operador: "qué hacer si mi perro tiene fiebre" entre comillas te da páginas específicas.',
      emoji: '🔍'
    },
    {
      termino: 'Comillas (frase exacta)',
      definicion: 'El operador más útil. Cuando pones una frase entre comillas, Google busca esas palabras EXACTAS y en ese orden. Sin comillas, busca cualquier página que mencione las palabras dispersas.',
      ejemplo: '"parque Bolívar Cartago" (con comillas) te da el parque específico. parque Bolívar Cartago (sin comillas) te da parques en varios países.',
      emoji: '🔤'
    },
    {
      termino: 'site:',
      definicion: 'Operador que limita la búsqueda a un sitio web específico. Sirve para buscar dentro de Wikipedia, dentro de un sitio del gobierno, dentro del MinEducación, etc. Útil cuando quieres fuentes confiables.',
      ejemplo: '"site:es.wikipedia.org Bolívar" te da solo resultados de Wikipedia sobre Bolívar. Excluye todo lo demás. "site:gov.co" busca solo en sitios oficiales del gobierno colombiano.',
      emoji: '🏠'
    },
    {
      termino: 'filetype:',
      definicion: 'Operador para buscar archivos de un tipo específico: PDF, Word, Excel, PowerPoint. Útil para tareas que necesitan documentos formales en lugar de páginas web.',
      ejemplo: '"himno nacional Colombia filetype:pdf" te da PDFs del himno con notas. "tabla periódica filetype:pdf" te da posters PDF imprimibles.',
      emoji: '📄'
    },
    {
      termino: 'Guion (-) para excluir',
      definicion: 'El operador menos: pone guion delante de una palabra y la excluye de los resultados. Útil cuando una palabra ambigua mezcla 2 temas y solo te interesa uno.',
      ejemplo: '"arepas -venezolanas" te da arepas colombianas (paisas, costeñas) sin las venezolanas. "Bolívar -monumento" te da páginas sobre Bolívar pero no del monumento.',
      emoji: '➖'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes buscar bien en internet?',
      instrucciones: '5 preguntas para verificar que dominas los 6 operadores esenciales.',
      preguntas: [
        {
          enunciado: 'Quieres encontrar la frase EXACTA \'parque del Bolívar Cartago\'. ¿Cómo la buscas?',
          opciones: [
            'parque del Bolívar Cartago',
            '\'parque del Bolívar Cartago\' (entre comillas)',
            'parque Cartago Bolívar',
            'Cartago parque'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Las comillas le dicen a Google que busque las palabras EXACTAS en ese orden. Sin comillas, busca páginas con esas palabras sueltas.',
          feedbackIncorrecto: 'Las comillas son la magia. "parque del Bolívar Cartago" entre comillas busca exactamente esa frase. Sin comillas, resultados confusos.'
        },
        {
          enunciado: 'Quieres buscar SOLO en Wikipedia sobre Colombia. ¿Cómo lo haces?',
          opciones: [
            'Wikipedia Colombia',
            'site:es.wikipedia.org Colombia',
            'Colombia Wikipedia.com',
            'WIKIPEDIA Colombia'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. site:es.wikipedia.org limita la búsqueda a ese dominio. Resultados solo de Wikipedia, excluye todo lo demás.',
          feedbackIncorrecto: 'site:es.wikipedia.org Colombia limita a Wikipedia. El operador "site:" + dominio te da resultados de ese sitio únicamente.'
        },
        {
          enunciado: 'Necesitas un PDF del himno nacional. ¿Cómo buscas?',
          opciones: [
            'himno nacional',
            'himno nacional Colombia filetype:pdf',
            'imprime el himno',
            'PDF de Colombia'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. filetype:pdf le dice a Google que solo te muestre PDFs. Útil para tareas que necesitan documentos formales.',
          feedbackIncorrecto: 'filetype:pdf filtra solo archivos PDF. Útil para descargar documentos formales en lugar de páginas web.'
        },
        {
          enunciado: 'Quieres recetas de arepas COLOMBIANAS pero te aparecen las VENEZOLANAS. ¿Cómo lo arreglas?',
          opciones: [
            'Buscar \'arepas\' solo.',
            'Buscar \'arepas paisas\' (con comillas) o \'arepas -venezolanas\' (excluye).',
            'Cambiar de buscador.',
            'Buscar en inglés.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. El guion (-) excluye. "arepas -venezolanas" elimina los resultados venezolanos. O usar comillas con la palabra específica como "arepas paisas".',
          feedbackIncorrecto: 'Usa el guion para excluir: arepas -venezolanas. O sé específico con comillas: "arepas paisas". Los 2 trucos funcionan.'
        },
        {
          enunciado: 'Buscas en Google y los primeros resultados son anuncios. ¿Qué haces?',
          opciones: [
            'Hago clic en el primero, debe ser el mejor.',
            'Bajo hasta los resultados orgánicos (los que no son anuncios). Los anuncios se marcan como \'Anuncio\' o \'Patrocinado\'.',
            'Reinicio el computador.',
            'Cambio a Bing.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Los primeros 2-4 resultados suelen ser anuncios (vienen marcados). Pasa de largo hasta los resultados orgánicos: esos son los más relevantes.',
          feedbackIncorrecto: 'Los primeros suelen ser anuncios pagados (marcados). Baja a los resultados orgánicos: los reales, los que Google encontró por relevancia, no por pago.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy entrenado en preguntar bien o solo confío en que la primera respuesta sea la correcta?',
    transferencia: 'Esta semana, cada vez que busques algo en Google, usa al menos un operador.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 6 operadores de búsqueda más útiles; (2) sabrás aplicar cada uno en búsquedas reales; (3) podrás evaluar si una búsqueda está bien formulada; (4) habrás mejorado 10 búsquedas tuyas con criterio.'
  },
  saberAncestral: {
    saber: 'Antes de Google, cuando doña Mercedes la maestra rural necesitaba información del campo de Cartago, sabía a quién preguntar. En la vereda La Plata, doña Mercedes no buscaba al azar. Si necesitaba saber sobre plagas del café, iba donde don Aurelio que tenía 50 años trabajando en fincas. Si era sobre tejido del sombrero aguadeño, iba donde doña Carmen la costurera. Si era sobre historia del barrio, donde don Lucho el relojero que vivió ahí 60 años. No preguntaba a cualquiera: preguntaba a la persona correcta. Esa es la clave de buscar bien: saber a quién preguntar y cómo preguntar. Hoy preguntamos a Google, Bing o DuckDuckGo, pero la lógica es la misma: si preguntas mal, te dan mala respuesta; si preguntas con precisión, encuentras oro en segundos. Internet tiene miles de millones de páginas. Solo unas pocas tienen lo que necesitas. Saber filtrar es el saber clave del siglo XXI.',
    preguntaPuente: 'Buscas en Google "perros". Sale Wikipedia, criaderos de perros, fotos de perros, historia de perros. Pero tú lo que quieres es "qué hacer si mi perro tiene fiebre". ¿Cómo cambiarías la búsqueda para encontrar exactamente eso?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la pregunta crítica)',
      lente: 'lente del nosotros',
      cita: '"Quien sabe preguntar, sabe encontrar. Quien no, depende de lo que le sirvan."',
      preguntaEspejo: '¿Estoy entrenado en preguntar bien o solo confío en que la primera respuesta sea la correcta?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que reflexionaba antes de actuar)',
      lente: 'lente del cuidado interior',
      cita: '"Lo que cuesta 30 segundos pensar antes, ahorra 30 minutos buscar después."',
      preguntaEspejo: '¿Hago el ejercicio de pensar antes de buscar, o salto al teclado y espero suerte?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la información digital)',
      lente: 'lente de la infoesfera',
      cita: '"En la era de internet, la habilidad escasa ya no es el acceso a la información, es saber filtrarla."',
      preguntaEspejo: '¿Estoy desarrollando la habilidad de filtrar, o me ahogo en información sin criterio?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 6 operadores de búsqueda más útiles; (2) sabrás aplicar cada uno en búsquedas reales; (3) podrás evaluar si una búsqueda está bien formulada; (4) habrá…',
    emocional: 'Mucha gente pierde el tiempo buscando en Google: navegando entre 50 resultados malos, leyendo páginas que no responden lo que necesitaban.',
    ciudadana: 'Doña Mercedes preguntaba a la persona correcta porque sabía que una buena pregunta encuentra una buena respuesta.',
    local: 'Antes de salir, comparas resultados: ¿cuánto cambió la calidad después de mejorar la búsqueda?',
    intergeneracional: 'Tu abuela, para encontrar información sobre algo, tenía que ir a la biblioteca municipal de Cartago, buscar el libro, leer.'
  }
};

export default contenido;
