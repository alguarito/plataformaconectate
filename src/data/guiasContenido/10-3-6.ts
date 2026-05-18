/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 6
 * (sesión global 26).
 *
 * Auto-generado desde content/guias/10/10-3-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 6,
  titulo: 'Encuestas y análisis de mercado con IA',
  resumen: 'Un estudio de mercado es la investigación que precede al lanzamiento de cualquier microemprendimiento.',
  duracionMin: 90,
  subtema: 'Encuestas y análisis de mercado con IA',
  preLectura: {
    porQueImporta: 'El criterio principal: que tu decisión final tenga sustento en datos, no en intuición.',
    preguntaDetonante: '¿Qué sabía el tendero al preguntar a sus 50 clientes antes de hacer pedido grande, que el emprendedor novato olvida cuando lanza microempresa basado en "yo creo que la gente quiere esto"? ¿Y por qué 15-20 entrevistados reales valen más que mil suposiciones?',
    activacion: {
      titulo: 'Conversación corta con 1 cliente potencial',
      descripcion: 'Actividad 1 · IDENTIFICA — Conversación corta con 1 cliente potencial (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 4 proyectaste flujo de caja de un microemprendimiento.',
      siguiente: 'En la sesión 7 vas a usar esos datos para construir el Business Model Canvas con IA: el lienzo del negocio en 9 casillas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Estudio de mercado',
      definicion: 'Investigación previa al lanzamiento de un microemprendimiento. Responde 5 preguntas básicas sobre cliente, necesidad, precio, competencia y canal.',
      ejemplo: 'Antes de vender brownies en el colegio, encuestas a 20 estudiantes sobre gustos, precios aceptables y dónde comprarían.',
      emoji: '🔬'
    },
    {
      termino: '5 preguntas básicas',
      definicion: 'Quién es el cliente, qué necesita, cuánto está dispuesto a pagar, cuál es la competencia y por dónde se entera.',
      ejemplo: 'Cliente, estudiantes de bachillerato. Necesidad, almuerzo rápido. Precio, $3.000-$5.000. Competencia, cafetería. Canal, voz a voz.',
      emoji: '❓'
    },
    {
      termino: 'Encuesta cuantitativa',
      definicion: 'Google Forms con preguntas cerradas aplicada a 15-20 personas. Produce datos numéricos para detectar patrones.',
      ejemplo: '15 estudiantes responden "¿Cuánto pagarías por un brownie?" con opciones 2000, 3000, 4000, 5000.',
      emoji: '📋'
    },
    {
      termino: 'Análisis cualitativo auditado',
      definicion: 'Respuestas abiertas clasificadas con IA y verificadas por el editor humano. Hereda método de S6 del P2.',
      ejemplo: 'La IA agrupa comentarios en "precios", "sabor" y "presentación". Tú auditas: la categoría "sabor" tenía 2 ironías que reclasificas.',
      emoji: '🔍'
    },
    {
      termino: 'Decisión razonada',
      definicion: 'Conclusión del estudio: qué producto o servicio ofrecer, a qué precio, con qué características. Sustentada en hallazgos concretos.',
      ejemplo: '"Ofrezco brownies a $3.500 con opción de glaseado, vendiendo en el descanso porque 70% prefiere comprar ahí."',
      emoji: '🎯'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Diseñas estudios de mercado profesionales?',
      instrucciones: '5 preguntas para verificar las 5 piezas obligatorias.',
      preguntas: [
        {
          enunciado: '¿Cuántas preguntas básicas responde un estudio de mercado?',
          opciones: [
            '1',
            '5',
            '50',
            '100'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 5: cliente, necesidad, precio, competencia y canal.',
          feedbackIncorrecto: 'Son 5. Sin respuesta a las 5, el estudio queda incompleto.'
        },
        {
          enunciado: '¿Cuántas respuestas mínimas pide la encuesta cuantitativa?',
          opciones: [
            '1',
            '15-20',
            '1000',
            '10000'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. 15-20 respuestas mínimas dan base para detectar patrones.',
          feedbackIncorrecto: 'Son 15-20. Suficientes para análisis sin esfuerzo desproporcionado.'
        },
        {
          enunciado: '¿Qué pasa con un microemprendimiento sin estudio de mercado previo?',
          opciones: [
            'Tiene mejor suerte',
            'No sobrevive a competencia básica',
            'No hay diferencia',
            'Llega más rápido'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Sin estudio, las decisiones se toman a ciegas y la competencia básica lo derrota.',
          feedbackIncorrecto: 'No sobrevive a competencia básica. El estudio previo es regla profesional.'
        },
        {
          enunciado: '¿Quién hace la decisión final del estudio?',
          opciones: [
            'La IA',
            'El emprendedor con los datos en la mano',
            'El cliente',
            'Nadie'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La IA acelera análisis; la decisión final es del emprendedor responsable.',
          feedbackIncorrecto: 'El emprendedor decide. La IA acelera análisis, pero la decisión y la firma son humanas.'
        },
        {
          enunciado: '¿Cuáles son las 4 piezas del estudio profesional?',
          opciones: [
            'Solo la encuesta',
            'Encuesta cuantitativa, análisis cualitativo auditado, síntesis y decisión razonada',
            'Solo el Canvas',
            'Solo el balance'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Las 4 juntas convierten la curiosidad en decisión sustentada.',
          feedbackIncorrecto: 'Las 4: encuesta cuantitativa, análisis cualitativo auditado, síntesis y decisión razonada.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy escuchando a mis clientes potenciales antes de lanzar, o impongo lo que yo creo que quieren?',
    transferencia: 'En la sesión 7 vas a usar esos datos para construir el Business Model Canvas con IA: el lienzo del negocio en 9 casillas.',
    cierre: 'Al terminar podrás: (1) identificar las 5 preguntas básicas que todo estudio de mercado debe responder; (2) analizar las respuestas de tu encuesta con asistencia de IA auditada; (3) aplicar las habilidades de S5 del P2 (encuesta con phronesis) al contexto comercial; (4) evaluar q…'
  },
  saberAncestral: {
    saber: 'En las tiendas, panaderías y talleres del centro de Cartago, hubo durante décadas una práctica que cualquier comerciante experimentado conocía: nunca pedir mercancía sin antes preguntar a la clientela. Antes de hacer pedido grande al proveedor, el tendero hablaba con sus clientes habituales: "¿qué les hace falta últimamente?", "¿qué les gustaría que trajera?", "¿qué precio pagarían?". La panadera preguntaba si querían más pan blanco o más integral. La modista preguntaba si la moda local iba hacia colores claros u oscuros. El tendero del barrio Obrero conocía a sus 50 clientes habituales por nombre y sabía qué preferían. Esa práctica tenía un nombre que los microempresarios no usaban pero practicaban: investigación de mercado. La sabiduría era ancestral y precisa: el comerciante que no escucha a su clientela pierde la clientela. La investigación de mercado moderna formaliza con IA lo que el tendero hacía de manera intuitiva: preguntar a la audiencia antes de invertir tiempo y dinero en un producto.',
    preguntaPuente: '¿Qué sabía el tendero al preguntar a sus 50 clientes antes de hacer pedido grande, que el emprendedor novato olvida cuando lanza microempresa basado en "yo creo que la gente quiere esto"? ¿Y por qué 15-20 entrevistados reales valen más que mil suposiciones?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Escuchar al cliente potencial antes de lanzar es respeto por la comunidad que se pretende servir.',
      preguntaEspejo: '¿Estoy escuchando a mis clientes potenciales antes de lanzar, o impongo lo que yo creo que quieren?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Preguntar antes de afirmar es virtud emprendedora; lanzar sin estudio es vanidad que se paga caro.',
      preguntaEspejo: '¿Estoy haciendo estudio honesto, o me lo salto creyendo que ya sé la respuesta?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los datos del cliente bien recolectados son ética emprendedora en la era de la información distribuida.',
      preguntaEspejo: '¿Mis datos del cliente están recolectados con rigor profesional o solo con encuestas casuales?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 5 preguntas básicas que todo estudio de mercado debe responder; (2) analizar las respuestas de tu encuesta con asistencia de IA auditada; (3) aplicar las habili…',
    emocional: 'Es tentador saltarse el estudio porque "ya sé lo que la gente quiere".',
    ciudadana: 'Cuando preguntas a 15-20 personas reales antes de lanzar microempresa, estás respetando a esa comunidad como sujeto, no objeto de venta.',
    local: 'Antes de cerrar, mira el estudio desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los emprendedores que tienen datos sobre sus clientes ganan ventaja sobre los que no.'
  }
};

export default contenido;
