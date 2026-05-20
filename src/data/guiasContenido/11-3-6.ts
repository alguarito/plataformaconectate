/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 6
 * (sesión global 26).
 *
 * Auto-generado desde content/guias/11/11-3-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 6,
  titulo: 'Pitch — contar la historia de tu proyecto',
  resumen: 'El pitch (en inglés, lanzamiento) es la forma contemporánea más exigente de la narrativa: contar un proyecto entero en 3-5 minutos con estructura narrativa, evidencia y llamada a la acción.',
  duracionMin: 90,
  subtema: 'Pitch — contar la historia de tu proyecto',
  preLectura: {
    porQueImporta: 'El criterio principal: que un familiar que no conoce tu proyecto, después de ver tu pitch, pueda contarlo en sus propias palabras a otra persona en 1 minuto.',
    preguntaDetonante: '¿Qué sabía la abuela del Valle al contar el cuento del fogón, que el emprendedor novato olvida cuando llena 20 slides con tablas y gráficos? ¿Y por qué los pitch más exitosos del mundo se parecen estructuralmente más a un cuento de fogón que a una clase universitaria?',
    activacion: {
      titulo: 'Cuento crudo de mi proyecto en 3 minutos',
      descripcion: 'Actividad 1 · IDENTIFICA — Cuento crudo de mi proyecto en 3 minutos (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Llevas 5 sesiones de trabajo silencioso: problema (S1), validación (S2), modelo (S3), MVP (S4), datos (S5).',
      siguiente: 'Llega con el pitch deck terminado, guion escrito y grabación corregida.'
    }
  },
  conceptosClave: [
    {
      termino: 'Pitch deck (7 slides)',
      definicion: 'Presentación corta del proyecto con estructura estándar: problema + afectados + solución + MVP + datos + modelo + llamada. 7 slides es el formato estándar del mundo emprendedor.',
      ejemplo: 'Slide 1: problema. Slide 2: afectados. Slide 3: tu solución. Slide 4: el MVP. Slide 5: datos de validación. Slide 6: modelo de negocio. Slide 7: llamada a la acción.',
      emoji: '🎤'
    },
    {
      termino: 'Storytelling emprendedor',
      definicion: 'El pitch no recita datos: cuenta una historia. Empieza con un humano concreto que tiene un problema, sigue con la solución, cierra con visión. Conecta emocionalmente antes que racionalmente.',
      ejemplo: 'Mal: "78% de tenderos pierden tiempo en cuentas". Bien: "Don Aurelio, 58 años, pierde 8h cada semana haciendo cuentas a mano que un Excel resuelve en 15 min. Su caso no es único".',
      emoji: '📖'
    },
    {
      termino: 'Tiempos del pitch (3 minutos)',
      definicion: 'Pitch de 3 minutos = ~25-30 segundos por slide. Estructura típica: 30s problema + 30s afectados + 60s solución/MVP + 30s datos + 30s modelo + 30s cierre. Practicar con cronómetro.',
      ejemplo: 'Grabas tu pitch de 3 min con celular. Si sales en 2:30, faltó contenido. Si en 3:30, sobró. Ajustas hasta llegar a 3:00 exactos con todo lo necesario.',
      emoji: '⏱️'
    },
    {
      termino: 'Llamada a la acción (CTA)',
      definicion: 'Última frase del pitch que dice exactamente qué quieres del oyente: visitar el sitio, descargar app, dar feedback, comprar, invertir. Sin CTA, el pitch queda colgando.',
      ejemplo: 'Mal: "Gracias por escuchar". Bien: "Visita cartas-cuentas.com hoy y prueba la herramienta gratis los primeros 7 días". CTA específico, accionable.',
      emoji: '👉'
    },
    {
      termino: 'Iteración del pitch (mínimo 2 ensayos)',
      definicion: 'El primer pitch nunca es el final. Grabar, escuchar, ajustar lenguaje, ajustar tiempos. Mínimo 2 ensayos con grabación. Cada iteración mejora claridad y confianza.',
      ejemplo: 'Primer ensayo: 4 min, voz tensa. Escuchas, cortas 1 min, ensayas con tono más natural. Segundo ensayo: 3 min exactos, fluido. Tercer ensayo: 2:45, sólido.',
      emoji: '🔁'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer un pitch de 3 minutos?',
      instrucciones: '5 preguntas sobre el pitch emprendedor.',
      preguntas: [
        {
          enunciado: '¿Cuántos slides tiene un pitch estándar?',
          opciones: [
            '1',
            '7',
            '30',
            '50'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 7 slides es el estándar. Estructura: problema + afectados + solución + MVP + datos + modelo + llamada. Lo que no cabe en 7 sobra.',
          feedbackIncorrecto: '7 slides. Estructura estándar mundial. 30 slides en 3 min = caos. 7 con estructura clara = pitch profesional.'
        },
        {
          enunciado: '¿Cuál es buen storytelling para arrancar?',
          opciones: [
            '78% de tenderos pierden tiempo.',
            'Don Aurelio, 58 años, pierde 8h cada semana haciendo cuentas a mano que un Excel resolvería en 15 min.',
            'Mi solución revolucionará el mundo.',
            'Hay un problema importante.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Humano concreto con nombre + dolor específico. Conecta emocionalmente. El dato 78% va después; el humano va primero.',
          feedbackIncorrecto: 'Storytelling = humano concreto primero, datos después. Don Aurelio con nombre y edad y pérdida específica > estadísticas frías.'
        },
        {
          enunciado: 'Tu pitch dura 4 minutos en lugar de 3. ¿Qué haces?',
          opciones: [
            'Lo dejo así, tengo mucho que decir.',
            'Recorto. Cada minuto extra pierde atención. Tres minutos exactos.',
            'Pido más tiempo.',
            'Hablo rápido.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Recortar. 3 minutos es estándar; 4 pierde audiencia. Mejor menos contenido bien dicho que más contenido apresurado.',
          feedbackIncorrecto: 'Recortar siempre. 3 min es estándar. Lo que sobra es secundario. Hablar más rápido se siente acelerado y ansioso.'
        },
        {
          enunciado: 'Tu pitch termina con \'Gracias por escuchar\'. ¿Está bien?',
          opciones: [
            'Sí, suena cortés.',
            'No. Falta la CTA: qué quieres del oyente (visitar sitio, dar feedback, comprar, invertir).',
            'Sí, los pitches terminan así.',
            'Solo si es viernes.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. CTA específica. "Gracias" no acciona; "Visita el sitio y prueba gratis" sí. El pitch sin CTA queda colgando.',
          feedbackIncorrecto: 'CTA siempre. Sin llamada a la acción, el pitch no acciona. "Visita X, descarga Y, dame feedback Z" es CTA específica.'
        },
        {
          enunciado: 'Tu primer ensayo del pitch fue tenso. ¿Qué haces?',
          opciones: [
            'Pitcho así nomás.',
            'Grabo, escucho, ajusto. Mínimo 2 ensayos con grabación. Cada uno mejora claridad y confianza.',
            'Me rindo.',
            'Pido que pitchee otro.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Iteración con grabación. Primer ensayo es borrador; segundo se afina; tercero es sólido. Sin iteración, el pitch queda crudo.',
          feedbackIncorrecto: 'Iteración con grabación. Escuchar tu propia voz revela tensiones que no sentías. 2-3 ensayos = pitch profesional.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'En mi slide 1, ¿está el afectado con nombre y voz, o estoy yo con "mi proyecto" como protagonista?',
    transferencia: 'Llega con el pitch deck terminado, guion escrito y grabación corregida.',
    cierre: 'Al terminar podrás: (1) identificar la historia mínima de tu proyecto, capaz de sostener un pitch de 3 minutos: el problema que duele, la solución que alivia, la evidencia que prueba; (2) analizar la arquitectura de 7 slides estándar y aplicarla a tu proyecto con honestidad (no i…'
  },
  saberAncestral: {
    saber: 'En los corregimientos del Valle del Cauca, en las veredas del Chocó, en las noches de fogón del Pacífico, hay un oficio que sostuvo la educación cuando no había escuelas: contar el cuento. La abuela que enseñaba a los nietos por qué no se camina solo de noche; el abuelo que explicaba el origen del nombre del pueblo; la mayora que transmitía la receta de la viuda de pescado con un relato y no con una lista de ingredientes. El cuento ancestral tenía una arquitectura silenciosa que toda comunidad oral conocía sin nombrarla: (1) un comienzo que enganchaba con una imagen concreta o una pregunta; (2) un conflicto que dolía (alguien quería algo, algo se interpuso); (3) una resolución que dejaba enseñanza. Aristóteles llamó a esto principio, medio y fin; los abuelos del Valle lo conocían siglos antes de que el filósofo griego lo escribiera. Quien sabía contar bien era escuchado, recordado, replicado; quien no sabía, hablaba al vacío. La narrativa es estructura ancestral, no truco moderno de marketing.',
    preguntaPuente: '¿Qué sabía la abuela del Valle al contar el cuento del fogón, que el emprendedor novato olvida cuando llena 20 slides con tablas y gráficos? ¿Y por qué los pitch más exitosos del mundo se parecen estructuralmente más a un cuento de fogón que a una clase universitaria?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo pitch decide si da voz al afectado o se la quita; no hay narrativa neutra.',
      preguntaEspejo: 'En mi slide 1, ¿está el afectado con nombre y voz, o estoy yo con "mi proyecto" como protagonista?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Habla sobrio o no hables; el discurso inflado revela carácter inflado.',
      preguntaEspejo: 'En mi pitch, ¿estoy diciendo los datos como son (n=10, decisión preliminar), o los estoy inflando para sonar más exitoso?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Comunicar evidencia con honestidad es la nueva ética profesional en la era de la atención escasa.',
      preguntaEspejo: '¿Mi pitch declara las limitaciones (muestra pequeña, etapa temprana) o las esconde para sonar más maduro?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar la historia mínima de tu proyecto, capaz de sostener un pitch de 3 minutos: el problema que duele, la solución que alivia, la evidencia que prueba; (2) analizar la…',
    emocional: 'Es tentador inflar los datos ("500 visitas" cuando fueron 50), exagerar el impacto ("revolucionario" cuando es solo útil), prometer escala ("escalable a millones" cuando aún no tienes 10 usuarios).',
    ciudadana: 'Tu pitch puede tener al afectado en el centro ("María, la tendera del barrio Obrero, pierde 30 mil pesos a la semana porque…") o puede tenerse a sí mismo en el centro ("mi idea es genial porque…").',
    local: 'Antes de cerrar, mira el pitch desde las cinco dimensiones humanas.',
    intergeneracional: 'La era de la información compite por atención: cada oyente tiene 100 pitches por mes pidiendo sus 3 minutos.'
  }
};

export default contenido;
