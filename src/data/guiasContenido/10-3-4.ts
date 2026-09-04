/**
 * Contenido enriquecido para Grado 10 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/10/10-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 3,
  sesion: 4,
  titulo: 'Flujo de caja y punto de equilibrio — proyectar con IA',
  resumen: 'El flujo de caja y el punto de equilibrio son las 2 herramientas financieras más útiles para cualquier microemprendimiento.',
  duracionMin: 90,
  subtema: 'Flujo de caja y punto de equilibrio — proyectar con IA',
  preLectura: {
    porQueImporta: 'El criterio principal: que tu proyección permita decidir con honestidad si el microemprendimiento es viable.',
    preguntaDetonante: '¿Qué sabía el campesino al hacer la cuenta de la cosecha antes de sembrar, que el emprendedor novato olvida cuando lanza microempresa con "ya veremos"? ¿Y por qué el punto de equilibrio claro vale más que las proyecciones optimistas vagas?',
    activacion: {
      titulo: 'Experimento de las empanadas',
      descripcion: 'Actividad 1 · IDENTIFICA — Experimento de las empanadas (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'En las sesiones 2 y 3 trabajaste contabilidad personal y plantilla Sheets.',
      siguiente: 'En la sesión 5 vas a aprender visualización de datos contables con IA: gráficos automáticos honestos para presentar tu microemprendimiento.'
    }
  },
  conceptosClave: [
    {
      termino: 'Flujo de caja',
      definicion: 'Tabla mes a mes con ingresos proyectados - egresos proyectados = saldo. Acumulado, muestra cuándo el negocio tiene caja positiva o negativa.',
      ejemplo: 'Mes 1, ingresos $300.000, egresos $400.000, saldo -$100.000. Mes 2, -$50.000 acumulado. Necesitas capital inicial.',
      emoji: '💧'
    },
    {
      termino: 'Costos fijos',
      definicion: 'Ocurren cada mes existan o no ventas: arriendo, suscripciones SaaS, sueldos. Marcan el piso de gastos.',
      ejemplo: 'Arriendo del local $200.000 + suscripción de Canva $30.000 = $230.000 fijos mensuales.',
      emoji: '🏠'
    },
    {
      termino: 'Costos variables',
      definicion: 'Dependen del volumen de ventas: materia prima, comisiones, envíos. Suben con cada unidad vendida.',
      ejemplo: 'Cada brownie cuesta $1.500 producir. Si vendes 50, los variables suman $75.000. Si vendes 100, $150.000.',
      emoji: '📦'
    },
    {
      termino: 'Punto de equilibrio',
      definicion: 'Costos fijos / (Precio unitario - Costo variable unitario). Responde cuántas ventas necesitas para cubrir los costos.',
      ejemplo: 'Fijos $200.000, precio $5.000, variable $1.500. PE = 200.000/3.500 = 57 ventas mensuales para equilibrarse.',
      emoji: '⚖️'
    },
    {
      termino: '3 escenarios',
      definicion: 'Pesimista (30%), realista (60%) y optimista (100%) del esperado. Decides con realista; sostienes con pesimista.',
      ejemplo: 'Esperas vender 100. Modelas con 30, 60 y 100. Si el negocio cae a pesimista, debe seguir vivo.',
      emoji: '🎲'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Proyectas tu microemprendimiento con datos?',
      instrucciones: '5 preguntas para verificar flujo de caja y punto de equilibrio.',
      preguntas: [
        {
          enunciado: '¿Cuál es la fórmula del punto de equilibrio?',
          opciones: [
            'Costos totales / 2',
            'Ventas + Ganancias',
            'No tiene fórmula',
            'Costos fijos / (Precio unitario - Costo variable unitario)'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Costos fijos / (Precio - Costo variable). Da unidades mínimas para no perder.',
          feedbackIncorrecto: 'Es Costos fijos / (Precio unitario - Costo variable unitario). Da unidades mínimas a vender.'
        },
        {
          enunciado: 'Los costos que ocurren cada mes existan o no ventas se llaman...',
          opciones: [
            'Fijos',
            'Variables',
            'Imaginarios',
            'Opcionales'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Fijos. Arriendo, suscripciones, sueldos.',
          feedbackIncorrecto: 'Costos fijos. Existan o no ventas, hay que cubrirlos cada mes.'
        },
        {
          enunciado: '¿Cuántos escenarios mínimos modela el flujo de caja profesional?',
          opciones: [
            '1',
            '3',
            '100',
            '0'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 3: pesimista, realista, optimista.',
          feedbackIncorrecto: 'Son 3 escenarios: pesimista (30%), realista (60%) y optimista (100%) del esperado.'
        },
        {
          enunciado: 'Tu PE es 200 ventas/mes y vendes 50. ¿Qué indica?',
          opciones: [
            'Negocio rentable',
            'Ya está bien',
            '',
            'No importa'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Si el PE supera mucho las ventas reales, el modelo necesita ajuste.',
          feedbackIncorrecto: 'Indica problema estructural. Hay que reducir costos fijos, subir precio o cambiar producto.'
        },
        {
          enunciado: 'La regla "ningún microemprendimiento sin proyección a 3 meses sobrevive al cuarto" significa que...',
          opciones: [
            'Hay que cerrar todo',
            'Sin proyección financiera, el negocio se sostiene por suerte hasta que falla',
            '3 meses es lo máximo',
            'No hay que proyectar'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Sin proyección, las sorpresas matan al negocio. La proyección anticipa el problema.',
          feedbackIncorrecto: 'Sin proyección, el negocio se sostiene por suerte. La proyección anticipa problemas mientras hay tiempo.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi proyección protege al microemprendedor de la ruina, o solo confirma lo que quería oír?',
    transferencia: 'En la sesión 5 vas a aprender visualización de datos contables con IA: gráficos automáticos honestos para presentar tu microemprendimiento.',
    cierre: 'Al terminar podrás: (1) identificar los componentes del flujo de caja (costos fijos, costos variables, ingresos proyectados, saldo); (2) aplicar la fórmula del punto de equilibrio a tu microemprendimiento real o hipotético; (3) analizar los 3 escenarios (pesimista, realista, opti…'
  },
  saberAncestral: {
    saber: 'En las fincas del Valle del Cauca y en las parcelas cafeteras del Quindío, ningún campesino con experiencia sembraba sin antes hacer la cuenta de la cosecha. Esa cuenta no estaba en libros: estaba en la cabeza del mayor y se transmitía a los hijos en las tardes de patio. Tenía 3 columnas claras: (1) La siembra: lo que invertía antes de ver fruto (semilla, abono, jornales, herramienta, agua). (2) La espera: el tiempo entre siembra y cosecha (3 meses para frijol, 9 meses para café, 1 año para plátano). Durante ese tiempo no entraba peso, solo salían gastos. (3) La cosecha: lo que esperaba recoger en kilos, multiplicado por el precio probable del mercado, descontando plagas, lluvia y transporte. El campesino que no hacía esta cuenta era llamado loco o novato: casi siempre perdía la finca al primer año adverso. La phronesis económica campesina sabía algo que el emprendimiento moderno olvida: el cálculo previo no enfría la pasión; la protege de la ruina. El flujo de caja moderno formaliza esa cuenta de la cosecha aplicada al microemprendimiento contemporáneo.',
    preguntaPuente: '¿Qué sabía el campesino al hacer la cuenta de la cosecha antes de sembrar, que el emprendedor novato olvida cuando lanza microempresa con "ya veremos"? ¿Y por qué el punto de equilibrio claro vale más que las proyecciones optimistas vagas?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Proyectar antes de emprender protege al microempresario de la ruina; lanzar sin números es entregarse a la suerte del sistema.',
      preguntaEspejo: '¿Mi proyección protege al microemprendedor de la ruina, o solo confirma lo que quería oír?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La sobriedad del cálculo es virtud financiera; el optimismo sin números es vicio que se descubre tarde.',
      preguntaEspejo: '¿Estoy proyectando los 3 escenarios honestamente, o vivo solo en el optimista?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Las decisiones empresariales basadas en datos verificables son la nueva ética emprendedora del siglo XXI.',
      preguntaEspejo: '¿Mis decisiones están sustentadas en datos verificables, o las tomo solo con corazonadas?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar los componentes del flujo de caja (costos fijos, costos variables, ingresos proyectados, saldo); (2) aplicar la fórmula del punto de equilibrio a tu microemprendimi…',
    emocional: 'Es tentador proyectar solo el escenario optimista y declarar el negocio viable.',
    ciudadana: 'Muchos microemprendimientos del barrio fracasan no por falta de esfuerzo, sino por falta de proyección previa.',
    local: 'Antes de cerrar, mira la proyección desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los emprendedores que decidem con datos sobreviven más que los que deciden por intuición.'
  }
};

export default contenido;
