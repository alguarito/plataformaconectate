/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 1
 * (sesión global 21).
 *
 * Auto-generado desde content/guias/10/10-3-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 1,
  titulo: 'Ofimática con IA — el copiloto del oficio digital cotidiano',
  resumen: 'La ofimática asistida por IA es la combinación de herramientas tradicionales de oficina (procesador de texto, hoja de cálculo, presentaciones, formularios) con asistencia de IA generativa para acelerar tareas, no para reemplazar el criterio…',
  duracionMin: 90,
  subtema: 'Ofimática con IA — el copiloto del oficio digital cotidiano',
  preLectura: {
    porQueImporta: 'El criterio principal: que tengas mapa claro de qué herramientas dominar primero según tu propio futuro.',
    preguntaDetonante: '¿Qué sabía el tendero al combinar cuaderno + calculadora + radio + agenda, que el novato olvida cuando intenta llevar microempresa solo con la memoria? ¿Y por qué tener IA como copiloto requiere primero conocer las herramientas que va a copilotar?',
    activacion: {
      titulo: '10 tareas reales de ofimática',
      descripcion: 'Actividad 1 · IDENTIFICA — 10 tareas reales de ofimática (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy abre el periodo 3: ofimática con IA, contabilidad, emprendimiento.',
      siguiente: 'Llega con tu mapa de 10 tareas y las 3 herramientas priorizadas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Ofimática con IA',
      definicion: 'Combinación de herramientas de oficina (Sheets, Docs, Forms) con IA generativa para acelerar tareas reales del oficio digital.',
      ejemplo: 'Le pides a Gemini que cree una fórmula que sume gastos por categoría. La fórmula aparece, tú la aplicas y revisas.',
      emoji: '🛠️'
    },
    {
      termino: 'Google Sheets',
      definicion: 'Hoja de cálculo gratuita con cuenta Gmail. Tiene =GEMINI() integrado en 2025+ para consultar IA dentro de celdas.',
      ejemplo: 'Abres una hoja, cargas tus gastos, escribes =SUMA(B2:B30) y luego =GEMINI("propón categorías para estos gastos").',
      emoji: '📊'
    },
    {
      termino: 'Notion',
      definicion: 'Base de datos y notas con IA integrada (plan gratuito limitado). Útil para organizar bases personales o de proyectos.',
      ejemplo: 'Creas tabla con tus clientes potenciales, columnas para nombre, contacto, estado y notas. IA sugiere etiquetas.',
      emoji: '📚'
    },
    {
      termino: 'LibreOffice',
      definicion: 'Paquete gratuito descargable: Writer, Calc, Impress, Base. Funciona offline, sin dependencia de cuenta.',
      ejemplo: 'Lo usas si la conexión es inestable o si prefieres no subir información sensible a la nube.',
      emoji: '💻'
    },
    {
      termino: 'Copiloto IA',
      definicion: 'Asistentes generales gratuitos (ChatGPT, Gemini, Bing, Claude) que ayudan a redactar, analizar y proponer.',
      ejemplo: 'Le pides a la IA "redacta un correo basado en este registro" y obtienes borrador para editar.',
      emoji: '🤖'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Combinas herramientas de ofimática con IA?',
      instrucciones: '5 preguntas para verificar que conoces el panorama 2026.',
      preguntas: [
        {
          enunciado: '¿Qué función nueva tiene Google Sheets desde 2025?',
          opciones: [
            '=GEMINI()',
            '=SUMA()',
            '=PRINT()',
            '=GUARDAR()'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. =GEMINI() permite consultar IA directamente desde una celda.',
          feedbackIncorrecto: 'Es =GEMINI(). Integra IA generativa dentro de Sheets para análisis y propuestas.'
        },
        {
          enunciado: '¿Cuál herramienta es ideal para trabajar offline sin nube?',
          opciones: [
            'Solo Google Sheets',
            'WhatsApp',
            'LibreOffice descargable',
            'Solo apps de pago'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. LibreOffice funciona offline y no requiere cuenta de nube.',
          feedbackIncorrecto: 'LibreOffice. Paquete gratuito descargable que funciona offline.'
        },
        {
          enunciado: 'La regla "cada herramienta tiene su lugar" significa que...',
          opciones: [
            'Hay que usar la más cara',
            'Aprender a combinarlas vale más que dominar una sola',
            'Solo se usa Word',
            'Las herramientas son iguales'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Combinarlas según la tarea da más oficio que dominar una sola.',
          feedbackIncorrecto: 'Combinarlas vale más. Sheets para cálculos, Notion para bases, LibreOffice offline.'
        },
        {
          enunciado: '¿Cuál es el rol correcto de la IA en ofimática?',
          opciones: [
            'Reemplazar al usuario',
            'Ser piloto sin supervisión',
            'No tiene rol',
            'Copiloto que acelera; el usuario decide'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La IA acelera tareas; el usuario decide con criterio.',
          feedbackIncorrecto: 'Es copiloto, no piloto. La IA acelera y propone; el usuario decide y firma.'
        },
        {
          enunciado: '¿Cuál asistente NO es gratuito y general en 2026?',
          opciones: [
            'ChatGPT',
            'Gemini',
            'Una IA inventada',
            'Bing Copilot'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Los 3 primeros son gratuitos y generales; el cuarto no existe en la sesión.',
          feedbackIncorrecto: 'ChatGPT, Gemini, Bing Copilot y Claude.ai son los 4 asistentes gratuitos mencionados.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprendiendo herramientas gratuitas como acto de libertad económica, o asumo que solo lo pago es bueno?',
    transferencia: 'Llega con tu mapa de 10 tareas y las 3 herramientas priorizadas.',
    cierre: 'Al terminar podrás: (1) identificar las 10 tareas reales de ofimática que dominarán tu vida laboral próxima; (2) analizar cuál herramienta gratuita se ajusta mejor a cada tarea; (3) evaluar cómo la IA puede asistir cada tarea sin reemplazar tu criterio; (4) explicar por qué algun…'
  },
  saberAncestral: {
    saber: 'En las tiendas y microempresas del centro de Cartago, en las panaderías del barrio Obrero, en las modistas del Quindío y en las pequeñas oficinas de contabilidad de los pueblos cafeteros, hubo durante décadas una práctica que cualquier comerciante experimentado conocía: la ofimática del oficio antes del computador. Aunque no se llamaba así, los tenderos, sastres y contadores manejaban herramientas de oficina con disciplina: (1) El cuaderno cuadriculado: la hoja de cálculo ancestral. Filas para días, columnas para conceptos (venta-mañana, venta-tarde, gastos, saldo). (2) La calculadora de mano: el procesador de cálculo. Sumar, restar, sacar porcentaje. (3) La radio: el correo en tiempo real. Conocer precios de mercado, noticias del sector. (4) El cuaderno de direcciones: la base de datos de clientes. Cada uno con teléfono, deuda, fecha de últimas compras. Esas 4 piezas (cuaderno + calculadora + radio + agenda) eran la ofimática del oficio del barrio. Quien las usaba con disciplina llevaba el negocio bien; quien improvisaba, se perdía. La sabiduría era ancestral: ningún negocio sostenible se llevaba solo con la memoria. La IA hoy agrega un copiloto: el cuaderno digital ya no hace solo cálculos, ahora sugiere, analiza, propone. Pero la decisión sigue siendo del comerciante.',
    preguntaPuente: '¿Qué sabía el tendero al combinar cuaderno + calculadora + radio + agenda, que el novato olvida cuando intenta llevar microempresa solo con la memoria? ¿Y por qué tener IA como copiloto requiere primero conocer las herramientas que va a copilotar?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Las herramientas gratuitas liberan al microempresario; las suscripciones caras extraen valor de quien menos puede pagarlas.',
      preguntaEspejo: '¿Estoy aprendiendo herramientas gratuitas como acto de libertad económica, o asumo que solo lo pago es bueno?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Aprende lo necesario con sobriedad; el exceso de herramientas dispersa al que las usa.',
      preguntaEspejo: '¿Estoy priorizando 3 herramientas para dominar, o intento aprender todo al mismo tiempo?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La IA como copiloto profesional es la nueva ética del oficio en la era de la automatización.',
      preguntaEspejo: '¿Estoy usando la IA como copiloto con criterio, o intentando que sea piloto sin mi intervención?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar las 10 tareas reales de ofimática que dominarán tu vida laboral próxima; (2) analizar cuál herramienta gratuita se ajusta mejor a cada tarea; (3) evaluar cómo la IA…',
    emocional: 'Es tentador querer dominar todas las herramientas disponibles.',
    ciudadana: 'Muchos jóvenes asumen que Microsoft Office o Adobe son las únicas opciones serias.',
    local: 'Antes de cerrar, mira la ofimática desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la IA generativa, los profesionales que usan IA con criterio aceleran su trabajo sin perder calidad.'
  }
};

export default contenido;
