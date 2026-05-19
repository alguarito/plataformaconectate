/**
 * Contenido enriquecido para Grado 7 · Período 3 · Sesión 8
 * (sesión global 28).
 *
 * Auto-generado desde content/guias/7/7-3-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 3,
  sesion: 8,
  titulo: 'Ética de la IA — sesgo, privacidad, derechos y deepfakes',
  resumen: 'La ética de la IA estudia los problemas morales que aparecen al usar IA.',
  duracionMin: 90,
  subtema: 'Ética de la IA — sesgo, privacidad, derechos y deepfakes',
  preLectura: {
    porQueImporta: 'El producto es ese código firmado + 5 dilemas analizados.',
    preguntaDetonante: 'Si tu amigo te muestra un deepfake (video falso) de un político del barrio diciendo algo que nunca dijo, y te dice "mira lo que dijo", ¿qué haces? ¿Lo crees? ¿Lo compartes? ¿Cómo te das cuenta de que es falso?',
    activacion: {
      titulo: '5 dilemas éticos reales',
      descripcion: 'Actividad 1 · EVALÚA — 5 dilemas éticos reales (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas los 5 temas, analizas 5 dilemas reales, formulas tu posición, escribes tu código personal.',
      siguiente: 'Esta semana, aplica al menos 2 reglas de tu código personal en situaciones reales.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ética de la IA',
      definicion: 'Conjunto de problemas morales y reglas de uso responsable que aparecen al desarrollar y usar IA. Cubre temas: sesgo, privacidad, derechos de autor, deepfakes, autenticidad académica. Está en debate mundial.',
      ejemplo: '¿Es ético que una IA bancaria rechace créditos a personas de barrios populares? ¿Es ético compartir un deepfake aunque sea chistoso? ¿Es ético usar ChatGPT para hacer la tarea? Cada uno es problema ético real.',
      emoji: '⚖️'
    },
    {
      termino: 'Deepfake',
      definicion: 'Video, imagen o audio falso generado por IA donde una persona dice o hace algo que NUNCA hizo. Convincentes al ojo humano. Usados para acoso, suplantación, fraude, manipulación política. Riesgo serio para la verdad pública.',
      ejemplo: 'Caso 2023: deepfake de Zelensky pidiendo a soldados rendirse circuló en redes. Era falso. Casos en Colombia: deepfakes de políticos diciendo cosas que no dijeron. La protección: verificar fuente, contrastar con fuentes confiables.',
      emoji: '🎭'
    },
    {
      termino: 'Privacidad con IA',
      definicion: 'Cuando le das información a una IA, esa info queda en servidores del proveedor. Algunas la usan para entrenar nuevas versiones. Por eso: no compartas datos sensibles (cédula, contraseña, dirección exacta, info médica).',
      ejemplo: 'Caso Samsung 2023: empleados pegaron código secreto en ChatGPT. El código quedó en servidores OpenAI. Samsung prohibió ChatGPT internamente. Lección: nunca compartas info sensible con IA.',
      emoji: '🔒'
    },
    {
      termino: 'Derechos de autor con IA',
      definicion: 'Cuando una IA genera contenido (texto, imagen, música), ¿de quién es ese contenido? ¿Del usuario que hizo el prompt? ¿De la empresa de IA? ¿De los autores cuyos datos se usaron para entrenar? Debate legal abierto en el mundo.',
      ejemplo: 'En 2024 hubo demandas de NYT contra OpenAI por usar artículos del periódico para entrenar ChatGPT sin permiso. Aún sin resolución definitiva. Mientras tanto: atribuir IA cuando se use; no vender creaciones de IA como 100% tuyas.',
      emoji: '©️'
    },
    {
      termino: 'Código personal de ética',
      definicion: 'Conjunto de reglas que TÚ defines para usar IA con criterio. Mínimo 5 reglas firmadas como compromiso. Es ejercicio adulto: en lugar de seguir reglas externas, te das las tuyas y las cumples.',
      ejemplo: 'Mi código: (1) Verifico antes de citar. (2) No comparto datos personales. (3) Atribuyo en mis trabajos. (4) Identifico contenido de IA cuando lo uso. (5) No propago deepfakes. Firmado con compromiso real.',
      emoji: '📜'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces la ética de la IA?',
      instrucciones: '5 preguntas para verificar que dominas los 5 temas éticos clave.',
      preguntas: [
        {
          enunciado: 'Un amigo te muestra un deepfake del presidente. ¿Qué haces?',
          opciones: [
            'Lo creo de inmediato y comparto.',
            'Verifico la fuente, contrasto con noticias confiables. NO lo comparto sin verificar.',
            'Lo borro y olvido.',
            'Le pago a la IA.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Verificar antes de compartir. Los deepfakes son riesgo real para la verdad pública. Tu papel: no propagar desinformación.',
          feedbackIncorrecto: 'Verifica + no compartas sin verificar. Los deepfakes son riesgo serio. Compartir sin verificar te hace cómplice de la desinformación.'
        },
        {
          enunciado: 'Le cuentas a ChatGPT tu contraseña del banco para pedirle consejo. ¿Está bien?',
          opciones: [
            'Sí, ChatGPT es seguro.',
            'NO. NUNCA compartas datos sensibles (contraseñas, cédula, info íntima) con IA. Quedan en servidores.',
            'Solo si es premium.',
            'Da igual.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. NUNCA datos sensibles. Una vez escrito, no sabes dónde queda. Samsung prohibió ChatGPT a empleados por código sensible filtrado. Lección clara.',
          feedbackIncorrecto: 'NUNCA. Datos sensibles (contraseñas, cédula, info íntima) NO se comparten con IA. Quedan en servidores. Riesgo real. Regla 2 del uso responsable.'
        },
        {
          enunciado: 'Tu compañero copia un ensayo entero de ChatGPT y lo entrega como suyo. ¿Es trampa?',
          opciones: [
            'No, es como usar Wikipedia.',
            'Sí. Si no aprendió, no es su trabajo. Usar IA como asistente con atribución sí está bien.',
            'Solo si copia mal.',
            'Da igual.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La regla: si no aprendiste, es trampa. Usar IA para entender + atribuir = ético. Copiar entero sin entender ni atribuir = trampa.',
          feedbackIncorrecto: 'Sí es trampa. La regla universal: si no aprendiste, es trampa. IA como asistente con atribución es ético. Como reemplazo sin aprender es plagio nuevo.'
        },
        {
          enunciado: 'Usas DALL-E para hacer una imagen y la vendes como creación tuya. ¿Está bien?',
          opciones: [
            'Sí, total.',
            'No del todo. Debes identificar que es creación con IA, no presentarla como 100% tuya.',
            'Solo si es gratis.',
            'Depende del país.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Atribuir el uso de IA. La creación con IA es categoría nueva: ni 100% tuya ni 100% de la IA. Honestidad pide atribución.',
          feedbackIncorrecto: 'Identifica el uso de IA. La creación es híbrida (parcialmente tuya, parcialmente IA). Venderla como 100% tuya es deshonesto. Atribuye y aclara.'
        },
        {
          enunciado: '¿Cuál es la ventaja de tener tu PROPIO código de ética con IA?',
          opciones: [
            'Ninguna, mejor seguir reglas de otros.',
            'Te entrena en pensar ética adulta: tú te das las reglas y las cumples por convicción, no por miedo.',
            'Suena culto.',
            'Es ejercicio académico sin valor.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Ética adulta: tú defines, tú cumples. No por miedo a castigo, sino por convicción propia. Esa madurez ética te diferencia.',
          feedbackIncorrecto: 'Ética adulta interiorizada. Tú defines tus reglas, tú las cumples por convicción. No por miedo a castigos externos. Eso es madurez moral.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi código refleja la sociedad digital en la que quiero vivir cuando sea adulto?',
    transferencia: 'Esta semana, aplica al menos 2 reglas de tu código personal en situaciones reales.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 5 temas éticos clave; (2) sabrás analizar dilemas éticos reales; (3) podrás evaluar situaciones con criterio propio; (4) habrás creado tu código personal de ética con IA.'
  },
  saberAncestral: {
    saber: 'En el barrio de Cartago, la comunidad tenía reglas no escritas para usar herramientas poderosas. Cuando alguien tenía un machete (herramienta para cortar caña, abrir camino, defenderse), no lo usaba para cualquier cosa: lo respetaba. Si veías a un niño jugando con machete, le decías: "Eso no se juega; le puedes hacer daño a alguien". Si alguien usaba el machete para amenazar, la comunidad lo censuraba. El machete no era malo en sí mismo: lo malo era usarlo sin ética. Doña Mercedes, doña Esperanza la partera, los consejeros del barrio enseñaban estas reglas no escritas a los niños desde temprano. La IA es la herramienta poderosa de tu generación. Como el machete, no es buena ni mala en sí misma: depende de cómo la uses. Hoy aprendes 5 dilemas éticos que ya están aquí, no en el futuro lejano. Y construyes tu propio código personal de ética con IA.',
    preguntaPuente: 'Si tu amigo te muestra un deepfake (video falso) de un político del barrio diciendo algo que nunca dijo, y te dice "mira lo que dijo", ¿qué haces? ¿Lo crees? ¿Lo compartes? ¿Cómo te das cuenta de que es falso?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la ética colectiva)',
      lente: 'lente del nosotros',
      cita: '"La ética no es lujo de unos pocos: es responsabilidad de todos. Cuando usas IA, tus decisiones pequeñas suman a un mundo más justo o menos."',
      preguntaEspejo: '¿Mi código refleja la sociedad digital en la que quiero vivir cuando sea adulto?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador de la integridad personal)',
      lente: 'lente del cuidado interior',
      cita: '"Sé el mismo cuando nadie te ve que cuando todos te miran. La integridad no se ajusta a la audiencia."',
      preguntaEspejo: 'Cuando uso IA solo, ¿soy el mismo que cuando alguien me observa?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la ética digital)',
      lente: 'lente de la infoesfera',
      cita: '"En 2030 habrá millones de personas usando IA sin ética alguna. Los pocos que la usen con ética serán los líderes de la próxima década."',
      preguntaEspejo: '¿Estoy entrenando una ética con IA que en 5 años pocos tendrán?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 5 temas éticos clave; (2) sabrás analizar dilemas éticos reales; (3) podrás evaluar situaciones con criterio propio; (4) habrás creado tu código person…',
    emocional: 'La integridad con IA es lo mismo.',
    ciudadana: 'Cada vez que decides usar IA con criterio — verificar, no compartir datos, atribuir, no propagar deepfakes — estás aportando a un mundo digital más justo.',
    local: 'Antes de salir, comparte tu código con un compañero — ¿se parecen o son distintos?.',
    intergeneracional: 'La mayoría de adultos hoy usa IA sin pensar en ética: copia, plagia, propaga deepfakes, no verifica.'
  }
};

export default contenido;
