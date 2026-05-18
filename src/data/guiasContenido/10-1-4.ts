/**
 * Contenido enriquecido para Grado 10 · Período 1 · Sesión 4
 * (sesión global 4).
 *
 * Auto-generado desde content/guias/10/10-1-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 1,
  sesion: 4,
  titulo: 'Iterar y refinar texto con IA — del borrador al capítulo terminado',
  resumen: 'La iteración es el proceso de refinar un texto en varias versiones progresivas, cada una con propósito distinto.',
  duracionMin: 90,
  subtema: 'Iterar y refinar texto con IA — del borrador al capítulo terminado',
  preLectura: {
    porQueImporta: 'El criterio principal: que después de leer V3 cualquiera diga "esto suena a una persona real, no a un chatbot".',
    preguntaDetonante: '¿Qué sabía el ebanista al pasar 3 lijas distintas en orden, que el usuario novato olvida cuando entrega el primer borrador de ChatGPT como capítulo final? ¿Y por qué V3 es donde el libro empieza a sonar a ti, no a la IA?',
    activacion: {
      titulo: 'Lectura crítica del borrador V1',
      descripcion: 'Actividad 1 · IDENTIFICA — Lectura crítica del borrador V1 (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy aprendes a refinar lo que la IA produce.',
      siguiente: 'En la sesión 5 vas a afinar la estructura editorial completa del libro: arco narrativo, ritmo, peso de cada capítulo.'
    }
  },
  conceptosClave: [
    {
      termino: 'Iteración',
      definicion: 'Proceso de refinar un texto en versiones progresivas. Cada versión tiene propósito distinto y se construye sobre la anterior.',
      ejemplo: 'V1 captura estructura, V2 ajusta lo defectuoso, V3 imprime voz humana. Tres pasadas con propósito.',
      emoji: '🔁'
    },
    {
      termino: 'V1 — Borrador inicial',
      definicion: 'Primera versión producida con prompt profesional. Captura estructura básica, ideas principales y tono aproximado.',
      ejemplo: 'Le pides a la IA el capítulo 1 con prompt completo. Resultado, texto pasable que aún no es bueno.',
      emoji: '1️⃣'
    },
    {
      termino: 'V2 — Revisión editorial',
      definicion: 'Segunda versión donde le pides a la IA que mejore aspectos concretos del V1 (apertura, cliché, tono, frases hechas).',
      ejemplo: '"Mejora la apertura, reduce los clichés del párrafo 3, ajusta el tono a más íntimo." Instrucción específica.',
      emoji: '2️⃣'
    },
    {
      termino: 'V3 — Versión final con voz propia',
      definicion: 'Versión donde tú (sin IA) reescribes fragmentos clave para incrustar tu voz y ejemplos personales. Mínimo 20-30% humano.',
      ejemplo: 'En la mitad del capítulo, agregas un párrafo personal sobre tu propio recuerdo. Esa firma humana es V3.',
      emoji: '3️⃣'
    },
    {
      termino: 'Intervención humana mínima',
      definicion: 'Regla profesional irrenunciable. El V3 nunca es 100% generado por IA; el editor interviene al menos en 20-30% del texto final.',
      ejemplo: 'En un capítulo de 6 páginas, al menos 1,5 páginas deben tener intervención humana directa (no solo aprobación).',
      emoji: '✋'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Iteras como editor profesional?',
      instrucciones: '5 preguntas para verificar que produces V3 con voz propia.',
      preguntas: [
        {
          enunciado: '¿Cuál es la regla profesional sobre el primer borrador?',
          opciones: [
            'Es siempre el definitivo',
            'El primer borrador nunca es el definitivo',
            'Hay que publicarlo tal cual',
            'Solo importa el primer borrador'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. El primer borrador nunca es el definitivo, ni siquiera para autores humanos veteranos.',
          feedbackIncorrecto: 'El primer borrador nunca es el definitivo. Esto es más cierto con IA, no menos.'
        },
        {
          enunciado: '¿Cuántas versiones tiene una iteración profesional típica?',
          opciones: [
            '1',
            '3',
            '10',
            '100'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. 3 versiones, cada una con propósito distinto.',
          feedbackIncorrecto: 'Son 3: V1 borrador inicial, V2 revisión editorial, V3 versión con voz propia.'
        },
        {
          enunciado: '¿En cuál versión es OBLIGATORIA la intervención humana directa?',
          opciones: [
            'V1',
            'V2',
            'V3',
            'Ninguna'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. V3 nunca se genera completamente con IA. La intervención humana es irrenunciable.',
          feedbackIncorrecto: 'En V3. Al menos 20-30% del texto final debe tener intervención humana directa.'
        },
        {
          enunciado: 'En V2, ¿qué pides a la IA?',
          opciones: [
            'Que repita lo mismo',
            'Mejoras específicas (apertura, clichés, tono, frases hechas)',
            'Que invente nuevos personajes',
            'Que cambie todo'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. En V2 se piden mejoras específicas al borrador inicial, no reescritura completa.',
          feedbackIncorrecto: 'Se piden mejoras específicas. "Mejora la apertura, reduce clichés, ajusta tono." Instrucciones puntuales.'
        },
        {
          enunciado: '¿Qué porcentaje mínimo de intervención humana exige V3?',
          opciones: [
            '0%',
            '20-30%',
            '100%',
            '1%'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Mínimo 20-30%. Sin esa firma humana, V3 deja de ser tuyo.',
          feedbackIncorrecto: 'Mínimo 20-30%. Es lo que distingue tu libro de un libro 100% generado por IA.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi V3 tiene voz propia en los puntos críticos, o suena a chatbot disfrazado de capítulo?',
    transferencia: 'En la sesión 5 vas a afinar la estructura editorial completa del libro: arco narrativo, ritmo, peso de cada capítulo.',
    cierre: 'Al terminar podrás: (1) identificar en qué partes del primer borrador hay material útil y en qué partes hay relleno generativo (frases vacías, clichés, repeticiones); (2) aplicar prompts de revisión específicos para que la IA mejore el borrador en aspectos concretos; (3) analizar…'
  },
  saberAncestral: {
    saber: 'En los talleres de carpintería del barrio Obrero, hay un gesto que cualquier aprendiz aprende el primer mes: el ebanista nunca lija una pieza con una sola lija. Cuando termina de cortar y armar las uniones, la pieza queda áspera. El ebanista toma la primera lija, grano grueso (~80), y pasa firme. La pieza queda mejor pero aún áspera. Toma la segunda, grano medio (~150), y vuelve a pasar: ya se siente más suave. Toma la tercera, grano fino (~220), y pasa una última vez. Recién entonces la superficie está lista para el barniz. Si el ebanista se salta una lija, la pieza queda con marcas visibles. Si insiste con la gruesa, daña la madera. Cada lija quita lo justo y revela lo que el grano anterior dejó. La sabiduría es ancestral: ninguna superficie buena se logra en un solo paso. Iterar texto con IA es esa disciplina aplicada a las palabras: el primer borrador es áspero, el segundo más suave, el tercero está listo para firmar.',
    preguntaPuente: '¿Qué sabía el ebanista al pasar 3 lijas distintas en orden, que el usuario novato olvida cuando entrega el primer borrador de ChatGPT como capítulo final? ¿Y por qué V3 es donde el libro empieza a sonar a ti, no a la IA?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La voz propia inscrita en el texto es acto de dignidad cultural; aceptar la voz de la IA sin intervención es renunciar a la propia.',
      preguntaEspejo: '¿Mi V3 tiene voz propia en los puntos críticos, o suena a chatbot disfrazado de capítulo?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'La paciencia de las 3 lijas es virtud del oficio; el atajo del una sola pasada es engaño que se nota en la pieza final.',
      preguntaEspejo: '¿Estoy pasando las 3 lijas con paciencia, o intento entregar V1 disfrazado de V3?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La edición humana directa es el ancla de calidad en la era de la producción acelerada por IA.',
      preguntaEspejo: '¿Mi V3 aporta ancla de calidad humana al texto, o solo agrega más contenido generado a la pila?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar en qué partes del primer borrador hay material útil y en qué partes hay relleno generativo (frases vacías, clichés, repeticiones); (2) aplicar prompts de revisión e…',
    emocional: 'Es tentador entregar V1 como definitivo porque "ya está escrito".',
    ciudadana: 'Cuando dejas que V1 sea tu capítulo final, la IA habla por ti y tu voz desaparece del libro.',
    local: 'Antes de cerrar, mira la iteración desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA, miles de libros se publican sin intervención humana real.'
  }
};

export default contenido;
