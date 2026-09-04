/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 3
 * (sesión global 23).
 *
 * Auto-generado desde content/guias/11/11-3-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 3,
  titulo: 'Modelo de negocio — el lienzo de tu proyecto',
  resumen: 'El Business Model Canvas (Alex Osterwalder, 2010) es la herramienta visual más usada del mundo para diseñar un modelo de negocio en una sola hoja.',
  duracionMin: 90,
  subtema: 'Modelo de negocio — el lienzo de tu proyecto',
  preLectura: {
    porQueImporta: 'El criterio principal: que un asesor financiero leyendo tu Canvas pueda decir en 3 minutos "entendí qué vendes, a quién, cómo se entera, cómo te paga y cuánto te cuesta".',
    preguntaDetonante: '¿Qué arquitectura silenciosa del trueque ancestral aún sostiene los modelos de negocio modernos, y por qué el Canvas se llama lienzo (canvas) y no plan? ¿Qué pasa cuando un estudiante llena el Canvas sin haber hecho las entrevistas de la sesión 2?',
    activacion: {
      titulo: 'Pre-llenado del Canvas desde mis entrevistas',
      descripcion: 'Actividad 1 · ANALIZA — Pre-llenado del Canvas desde mis entrevistas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En la sesión 1 elegiste un problema; en la sesión 2 lo validaste con 5 entrevistas.',
      siguiente: 'Llega con el Canvas terminado y los 3 supuestos críticos formulados.'
    }
  },
  conceptosClave: [
    {
      termino: 'Business Model Canvas (Canvas de negocio)',
      definicion: 'Lienzo de 9 bloques diseñado por Alexander Osterwalder. Representa un modelo de negocio completo en 1 hoja. Los 9 bloques: segmento, propuesta de valor, canales, relación, ingresos, recursos, actividades, socios, costos.',
      ejemplo: 'En 1 hoja A3 dibujas los 9 bloques y llenas cada uno. En 30 min tienes el modelo de negocio entero visible. Antes del Canvas, los modelos eran documentos de 50 páginas que nadie leía.',
      emoji: '🎨'
    },
    {
      termino: 'Propuesta de valor',
      definicion: 'El bloque central del Canvas. Frase clara que dice: para QUIÉN, qué PROBLEMA resuelve, qué SOLUCIÓN ofrece, qué BENEFICIO único promete. Si no cabe en 1 frase clara, todavía no es propuesta.',
      ejemplo: 'Mal: "una app cool". Bien: "para tenderos del barrio La Merced que pierden 8h/semana en cuentas manuales, ofrecemos un taller práctico de Excel de 90 min con plantillas listas, ganando esas 8h semanales".',
      emoji: '💎'
    },
    {
      termino: 'Segmento de clientes',
      definicion: 'Bloque del Canvas donde defines a QUIÉN sirves. No "todos los colombianos": un grupo específico con características compartidas y necesidad similar. Mientras más específico, mejor.',
      ejemplo: 'Bien: "tenderos hombres 35-55 años del barrio La Merced de Cartago, con tienda propia, sin estudios técnicos". Mal: "comerciantes".',
      emoji: '👥'
    },
    {
      termino: 'Fuentes de ingreso',
      definicion: 'Bloque del Canvas donde defines CÓMO ganas dinero. Tipos comunes: venta directa, suscripción, freemium, publicidad, comisión por transacción, capacitación, consultoría.',
      ejemplo: 'Para taller de Excel: $30.000 por persona por taller de 90 min. Para 10 tenderos = $300.000 por sesión. 4 sesiones/mes = $1.200.000/mes brutos.',
      emoji: '💰'
    },
    {
      termino: 'Supuestos críticos del modelo',
      definicion: 'Los 3-5 supuestos del Canvas que si fallan, todo el modelo falla. Identificarlos te dice qué verificar PRIMERO antes de invertir más esfuerzo.',
      ejemplo: 'Supuesto crítico: "los tenderos pagarán $30.000". Si en validación dicen "máximo $10.000", todo el modelo financiero cambia. Verificar ese precio antes de cualquier otra cosa.',
      emoji: '⚠️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces el Business Model Canvas?',
      instrucciones: '5 preguntas sobre el lienzo de modelo de negocio.',
      preguntas: [
        {
          enunciado: '¿Cuántos bloques tiene el Business Model Canvas?',
          opciones: [
            '5',
            '9',
            '20',
            '1'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 9 bloques. Diseñado por Alexander Osterwalder. Captura el modelo de negocio entero en 1 hoja.',
          feedbackIncorrecto: '9 bloques: segmento, propuesta de valor, canales, relación, ingresos, recursos, actividades, socios, costos. Memoriza la cuadrícula.'
        },
        {
          enunciado: '¿Cuál NO es un bloque del Canvas?',
          opciones: [
            'Color del logo.',
            'Propuesta de valor.',
            'Segmento de clientes.',
            'Fuentes de ingreso.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. El color del logo no es modelo de negocio: es identidad visual. El Canvas captura cómo el negocio crea, entrega y captura valor.',
          feedbackIncorrecto: 'El color del logo no es Canvas. Los 9 bloques: segmento, propuesta, canales, relación, ingresos, recursos, actividades, socios, costos.'
        },
        {
          enunciado: '¿Qué hace una buena propuesta de valor?',
          opciones: [
            'Suena cool.',
            'Tiene muchos adjetivos.',
            'Es muy general.',
            'Cabe en 1 frase clara: para QUIÉN, qué PROBLEMA, qué SOLUCIÓN, qué BENEFICIO único.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Para QUIÉN + qué PROBLEMA + qué SOLUCIÓN + qué BENEFICIO único. Si no cabe en 1 frase clara, no es propuesta sino slogan.',
          feedbackIncorrecto: 'La propuesta tiene 4 partes: para quién, qué problema, qué solución, qué beneficio único. En 1 frase clara. Sin esa precisión, es publicidad vacía.'
        },
        {
          enunciado: '¿Por qué identificar \'supuestos críticos\' del modelo?',
          opciones: [
            'Para llenar el Canvas.',
            'Para impresionar al profe.',
            'Porque si esos supuestos fallan, todo el modelo falla. Te dice qué verificar PRIMERO.',
            'Para parecer técnico.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Los supuestos críticos priorizan la validación. Si el precio crítico falla, todo el modelo financiero cambia. Verificar primero esos.',
          feedbackIncorrecto: 'Supuestos críticos = los que si fallan, todo cae. Identificarlos te dice qué validar PRIMERO. Sin esto, validas cosas menos importantes.'
        },
        {
          enunciado: 'Defines tu segmento como \'comerciantes\'. ¿Está bien?',
          opciones: [
            'No. Demasiado general. Mejor: \'tenderos hombres 35-55 del barrio La Merced, con tienda propia, sin estudios técnicos\'.',
            'Sí, es general y abarca mucho.',
            'Solo si hay 1000 clientes.',
            'Da igual la precisión.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Bien. Más específico = mejor. Un segmento bien definido te dice exactamente a quién entrevistar, dónde encontrarlo, cómo hablarle.',
          feedbackIncorrecto: 'Segmento específico es regla. "Comerciantes" no te dice nada. "Tenderos hombres 35-55 La Merced sin Excel" te orienta a entrevistas precisas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Mi Canvas, ¿libera o extrae? ¿La propuesta de valor mejora la vida del segmento o aprovecha su falta de opciones?',
    transferencia: 'Llega con el Canvas terminado y los 3 supuestos críticos formulados.',
    cierre: 'Al terminar podrás: (1) analizar los 9 bloques del Canvas y cómo se relacionan entre sí; (2) explicar la diferencia entre Canvas (hipótesis visual) y plan de negocio tradicional (documento de 50 páginas); (3) crear tu Canvas en una hoja con los 9 bloques llenos a partir de la evi…'
  },
  saberAncestral: {
    saber: 'En la galería de mercado de Cartago y en las plazas del Pacífico, el oficio más antiguo del mundo opera todos los sábados sin que nadie lo llame "modelo de negocio": el trueque. La señora trae racimo de plátano y se va con pescado; el pescador llega con corvinas y vuelve con queso; el quesero baja con cuajada y sube con frutas. Ese intercambio ancestral tiene una arquitectura silenciosa que cualquier emprendedor moderno reconocería: hay un segmento (quién intercambia con quién), una propuesta de valor (qué da cada uno), un canal (la plaza, el día, la hora), una relación (la confianza acumulada de años), una moneda implícita (volumen, calidad, frescura) y unos recursos clave (terreno, semilla, embarcación, conocimiento). El Business Model Canvas moderno no inventa nada nuevo: ordena en 9 casillas lo que el trueque hacía intuitivamente. La diferencia es la escala y la urgencia de hacerlo explícito.',
    preguntaPuente: '¿Qué arquitectura silenciosa del trueque ancestral aún sostiene los modelos de negocio modernos, y por qué el Canvas se llama lienzo (canvas) y no plan? ¿Qué pasa cuando un estudiante llena el Canvas sin haber hecho las entrevistas de la sesión 2?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo modelo de negocio decide si libera al cliente o lo extrae; no hay diseño económico neutro.',
      preguntaEspejo: 'Mi Canvas, ¿libera o extrae? ¿La propuesta de valor mejora la vida del segmento o aprovecha su falta de opciones?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'No hay viento favorable para quien no sabe a qué puerto va; pero tampoco hay sostenibilidad para quien navega ignorando los costos.',
      preguntaEspejo: '¿Mi Canvas se sostiene económicamente sin volverse extractivo? ¿Estoy cobrando justo o estoy regalando trabajo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La transparencia del modelo es la nueva forma de la ética profesional contemporánea.',
      preguntaEspejo: 'Si mi cliente viera mi Canvas completo (con costos, márgenes y socios), ¿se sentiría respetado o engañado?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar los 9 bloques del Canvas y cómo se relacionan entre sí; (2) explicar la diferencia entre Canvas (hipótesis visual) y plan de negocio tradicional (documento de 50 págin…',
    emocional: 'Es tentador inflar la fuente de ingresos para que el Canvas cierre con números bonitos, o ignorar los costos para que el modelo parezca rentable.',
    ciudadana: 'Tu Canvas es una toma de posición ética antes que comercial.',
    local: 'Antes de cerrar, mira el modelo desde las cinco dimensiones humanas.',
    intergeneracional: 'Un Canvas que el cliente nunca podría ver sin sentirse engañado no es un modelo sostenible: es un modelo opaco.'
  }
};

export default contenido;
