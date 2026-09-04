/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 10
 * (sesión global 10).
 *
 * Auto-generado desde content/guias/10/10-1-10.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 10,
  titulo: 'Sustentación + feria del libro escolar',
  resumen: 'La sustentación pública del libro es el acto formal donde el editor presenta su pieza ante el grupo.',
  duracionMin: 90,
  subtema: 'Sustentación + feria del libro escolar',
  preLectura: {
    porQueImporta: 'El criterio principal: que la audiencia se vaya sabiendo qué libro hiciste y queriendo abrirlo.',
    preguntaDetonante: '¿Qué sabían los autores de la feria del libro del pueblo al leer fragmentos en voz alta a quien se acercaba a la mesa, que el estudiante novato olvida cuando entrega el PDF sin sustentar? ¿Y por qué la lectura en voz alta es la prueba de fuego de tu voz propia?',
    activacion: {
      titulo: 'Selección de fragmentos para lectura en voz alta',
      descripcion: 'Actividad 1 · ANALIZA — Selección de fragmentos para lectura en voz alta (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Has recorrido 9 sesiones para producir un libro de 80 páginas.',
      siguiente: 'Cierras el periodo 1 (escritura abierta con IA) y abre el periodo 2 (informes técnicos y comunicación profesional con IA).'
    }
  },
  conceptosClave: [
    {
      termino: 'Sustentación pública del libro',
      definicion: 'Acto formal donde el editor presenta su pieza en 6 minutos con estructura clara y lectura de fragmento.',
      ejemplo: 'Cuentas la concepción, el proceso, las decisiones; lees 1-2 minutos del libro; muestras la portada y exhibes el ejemplar.',
      emoji: '🎤'
    },
    {
      termino: 'Lectura de fragmento',
      definicion: '1-2 minutos donde la audiencia escucha la voz del libro. Prueba de fuego: si suena a chatbot, el oficio editorial falló.',
      ejemplo: 'Eliges el párrafo del que más orgulloso te sientes y lo lees en voz alta sin disculparte.',
      emoji: '📖'
    },
    {
      termino: 'Honestidad sobre uso de IA',
      definicion: 'Declaración abierta sobre qué modelos usaste, qué porcentaje del texto generaste y qué porcentaje editaste o reescribiste a mano.',
      ejemplo: '"Usé Claude para los borradores. Generé ~70% del texto. Reescribí a mano ~35% del final."',
      emoji: '🤝'
    },
    {
      termino: 'Feria del libro escolar',
      definicion: 'Práctica colectiva donde los libros se exhiben e intercambian. Cada estudiante actúa como autor y como lector.',
      ejemplo: 'Pones tu libro sobre la mesa; los compañeros se acercan, leen fragmentos, comentan. Editores leyendo editores.',
      emoji: '🏛️'
    },
    {
      termino: 'Ciudadanía editorial',
      definicion: 'Práctica de leer y comentar el trabajo de otros con respeto y criterio. Es la cultura que sostiene el oficio editorial.',
      ejemplo: 'En la feria, comentas el libro de un compañero señalando lo que admiraste y proponiendo algo concreto que mejorarías.',
      emoji: '👥'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sustentas como editor profesional?',
      instrucciones: '5 preguntas para verificar que cierras el periodo con honestidad y rigor.',
      preguntas: [
        {
          enunciado: '¿Cuántos minutos dura la sustentación del libro?',
          opciones: [
            '1',
            '6',
            '30',
            '60'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 6 minutos. Tiempo controlado obliga a destilar lo esencial.',
          feedbackIncorrecto: 'Son 6 minutos. Tiempo controlado fuerza la curaduría del mensaje.'
        },
        {
          enunciado: '¿Qué prueba si el oficio editorial funcionó o no?',
          opciones: [
            'La lectura en voz alta del fragmento',
            'El precio del libro',
            'La cantidad de páginas',
            'El color de la portada'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. La lectura en voz alta revela si el texto tiene voz humana o suena a chatbot.',
          feedbackIncorrecto: 'La lectura en voz alta. Revela si el libro suena a ti o si quedó genérico.'
        },
        {
          enunciado: '¿Qué actitud profesional pide la declaración de uso de IA?',
          opciones: [
            'Ocultarlo para parecer más auténtico',
            'No mencionarlo',
            'Exagerar el uso humano',
            'Declarar modelos, porcentaje generado y porcentaje reescrito a mano'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. La honestidad gana respeto profesional y construye la nueva cultura editorial.',
          feedbackIncorrecto: 'La honestidad sobre uso de IA es estándar profesional contemporáneo. Ocultarlo erosiona la cultura.'
        },
        {
          enunciado: '¿Qué papel cumples en la feria del libro escolar?',
          opciones: [
            'Solo de autor',
            'Solo de lector',
            '',
            'Solo de moderador'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Cada estudiante es autor y lector. Esa doble práctica es la ciudadanía editorial.',
          feedbackIncorrecto: 'Eres autor y lector. La feria entrena en ciudadanía editorial: leer a otros con criterio y respeto.'
        },
        {
          enunciado: 'La regla "el libro no termina cuando se firma; termina cuando se comparte" significa que...',
          opciones: [
            'Hay que vender pronto',
            'El libro nunca termina',
            'El libro debe quedar guardado',
            'El libro alcanza sentido pleno al circular y ser leído por otros'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. El libro vive al circular. Sin lector, queda como archivo sin propósito cumplido.',
          feedbackIncorrecto: 'Significa que el libro alcanza sentido pleno al ser leído. Compartir cierra el ciclo editorial.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi sustentación devuelve oficio asumido al grupo, o solo cumple con requisito escolar?',
    transferencia: 'Cierras el periodo 1 (escritura abierta con IA) y abre el periodo 2 (informes técnicos y comunicación profesional con IA).',
    cierre: 'Al terminar podrás: (1) analizar tu libro completo identificando los 2-3 fragmentos más representativos de tu voz propia; (2) explicar en sustentación pública la concepción, proceso, decisiones críticas y uso de IA; (3) evaluar con honestidad las preguntas duras de la audiencia;…'
  },
  saberAncestral: {
    saber: 'En los pueblos del Valle del Cauca y en los corregimientos cafeteros del Quindío, durante décadas existió una práctica cultural que reunía cada año al pueblo entero: la feria del libro del pueblo. No era feria de editorial grande: era encuentro local. Los autores barriales (poetas aficionados, cronistas del pueblo, maestros que habían escrito libros pedagógicos, párrocos con sermones recopilados) traían sus libros impresos en pequeño tiraje al parque principal. Ponían mesa con mantel sencillo, exhibían los ejemplares, se sentaban a esperar. Pero la feria no era solo exhibición: era intercambio activo. Los autores leían fragmentos en voz alta cuando llegaba alguien interesado. Los lectores preguntaban: "¿de qué trata?", "¿por qué lo escribió?", "¿está pasando lo que cuenta?". Los libros se vendían a precios bajos, se prestaban, se intercambiaban entre autores. Al cerrar el día, cada autor sabía algo nuevo sobre su propio libro: qué partes interesaban más, qué preguntas hacía el público, qué se vendía y qué no. La sabiduría era ancestral y simple: el libro se completa con la audiencia, no antes. La sustentación del periodo más la feria del libro escolar es esa práctica ancestral aplicada a tu grupo.',
    preguntaPuente: '¿Qué sabían los autores de la feria del libro del pueblo al leer fragmentos en voz alta a quien se acercaba a la mesa, que el estudiante novato olvida cuando entrega el PDF sin sustentar? ¿Y por qué la lectura en voz alta es la prueba de fuego de tu voz propia?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'El editor que sustenta su libro ante la comunidad devuelve oficio asumido, no archiva trabajo individual.',
      preguntaEspejo: '¿Mi sustentación devuelve oficio asumido al grupo, o solo cumple con requisito escolar?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La honestidad del cierre es virtud del editor; ocultar el proceso es debilidad disfrazada de modestia.',
      preguntaEspejo: '¿Estoy declarando porcentajes honestos del uso de IA, o inflando o minimizando según convenga?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La sustentación con declaración honesta de IA es la nueva ética profesional del oficio editorial del siglo XXI.',
      preguntaEspejo: '¿Mi sustentación contribuye al modelo editorial transparente del siglo XXI, o sostiene la opacidad heredada?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar tu libro completo identificando los 2-3 fragmentos más representativos de tu voz propia; (2) explicar en sustentación pública la concepción, proceso, decisiones crític…',
    emocional: 'Es tentador minimizar el uso de IA al sustentar ("casi no usé IA") o exagerarlo ("todo lo hizo la IA").',
    ciudadana: 'Tu sustentación cierra el ciclo del periodo: el libro vuelve a la comunidad (el grupo) hecho voz propia firmada.',
    local: 'Antes de cerrar, mira la sustentación desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, los editores profesionales que declaran abiertamente el uso de IA en sus libros se posicionan en el modelo ético emergente.'
  }
};

export default contenido;
