/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 7
 * (sesión global 27).
 *
 * Auto-generado desde content/guias/11/11-3-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 7,
  titulo: 'Presupuesto — cuánto siembras, cuánto cosechas',
  resumen: 'El presupuesto del emprendimiento digital es exactamente la cuenta de la cosecha aplicada al MVP.',
  duracionMin: 90,
  subtema: 'Presupuesto — cuánto siembras, cuánto cosechas',
  preLectura: {
    porQueImporta: 'El criterio principal: que un familiar emprendedor o un asesor financiero, mirando tu hoja, pueda decir en 3 minutos "este proyecto se sostiene" o "a este proyecto le faltan X y Y".',
    preguntaDetonante: '¿Qué sabía el campesino al hacer la cuenta de la cosecha antes de sembrar, que el emprendedor novato olvida cuando se lanza con "ya veremos cómo nos va"? ¿Y por qué un punto de equilibrio claro a 3 meses es señal de oficio profesional, no de pesimismo?',
    activacion: {
      titulo: 'Inventario de costos reales del MVP',
      descripcion: 'Actividad 1 · IDENTIFICA — Inventario de costos reales del MVP (20 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'La sesión 5 te dio datos de uso del MVP y la sesión 6 los convirtió en pitch.',
      siguiente: 'En la sesión 8 vas a trabajar la dimensión ética y legal del proyecto: política de privacidad, términos de uso, responsabilidad sobre datos.'
    }
  },
  conceptosClave: [
    {
      termino: 'Presupuesto del MVP',
      definicion: 'Tabla detallada con todos los costos del proyecto a 3 meses. Separa costos fijos (que no varían con usuarios) y variables (que crecen con uso). Sin presupuesto, el proyecto es esperanza, no plan.',
      ejemplo: 'Costos fijos: dominio $50K/año, hosting $20K/mes. Variables: $500 por email enviado, $1000 por usuario nuevo. Total mes 1: $80K. Mes 3: $300K con 100 usuarios.',
      emoji: '💰'
    },
    {
      termino: 'Punto de equilibrio',
      definicion: 'Cantidad de ventas o usuarios necesarios para que ingresos igualen costos. Antes del punto de equilibrio, pierdes dinero; después, ganas. Sin saberlo, vuelas a ciegas financieramente.',
      ejemplo: 'Costos fijos $300K/mes + variable $5K/usuario. Precio $30K/usuario. Punto de equilibrio: 12 usuarios/mes (12 × $30K - 12 × $5K = $300K). Por debajo, pérdida.',
      emoji: '⚖️'
    },
    {
      termino: '3 escenarios (pesimista, realista, optimista)',
      definicion: 'Proyectar ingresos en 3 versiones. Pesimista: 30% de la meta. Realista: 70%. Optimista: 100%+. Si solo proyectas optimista, te sorprende el realista. Si proyectas los 3, decides con base sólida.',
      ejemplo: 'Meta: 100 usuarios/mes. Pesimista: 30 usuarios = $750K. Realista: 70 usuarios = $1.75M. Optimista: 120 usuarios = $3M. Decides con los 3 a la vista.',
      emoji: '📊'
    },
    {
      termino: 'Flujo de caja mensual',
      definicion: 'Tabla mes a mes que muestra entradas y salidas de dinero. Permite ver si en algún momento la caja llega a cero (quiebra). El flujo de caja es lo que mata startups, no la falta de ideas.',
      ejemplo: 'Mes 1: ingresos $200K, costos $300K, balance -$100K. Mes 2: ingresos $400K, costos $350K, balance +$50K acumulado -$50K. Mes 3: ingresos $700K, costos $400K, balance +$300K acumulado $250K.',
      emoji: '📅'
    },
    {
      termino: 'Decisión de viabilidad financiera',
      definicion: 'Conclusión escrita después del presupuesto: ¿el proyecto se sostiene financieramente al menos en el escenario realista? Si la respuesta es no, pivotar el modelo (precio, costos, segmento) antes de continuar.',
      ejemplo: 'Análisis: en escenario realista, mes 3 = $250K acumulado. Es positivo pero ajustado. Decisión: viable con condición de bajar costos variables 20% antes del lanzamiento.',
      emoji: '🎯'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes hacer un presupuesto del MVP?',
      instrucciones: '5 preguntas sobre presupuestos y finanzas básicas del emprendimiento.',
      preguntas: [
        {
          enunciado: '¿Cuál es diferencia entre costo FIJO y VARIABLE?',
          opciones: [
            'El fijo NO cambia con usuarios (renta, dominio). El variable SÍ crece con usuarios (servidor, soporte).',
            'El fijo cambia, el variable no.',
            'Son lo mismo.',
            'El variable es siempre más grande.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Fijo = constante mes a mes. Variable = crece con uso. Distinguirlos es clave para escalar bien.',
          feedbackIncorrecto: 'Fijo = no cambia con usuarios. Variable = crece con usuarios. Diferencia fundamental para entender qué pasa cuando creces.'
        },
        {
          enunciado: 'Tu costo fijo es $300K/mes, variable $5K/usuario, precio $30K/usuario. ¿Cuál es punto de equilibrio?',
          opciones: [
            '1 usuario.',
            '300 usuarios.',
            'No se puede calcular.',
            '12 usuarios (12 × ($30K - $5K) = $300K, iguala fijo).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. (Precio - costo variable) × cantidad = costos fijos. ($30K - $5K) × X = $300K → X = 12 usuarios. Por encima ganas; por debajo pierdes.',
          feedbackIncorrecto: 'Punto de equilibrio: 12 usuarios. Fórmula: costos fijos ÷ (precio - costo variable) = 300K ÷ 25K = 12. Sin este número vuelas a ciegas.'
        },
        {
          enunciado: '¿Por qué proyectar 3 escenarios (pesimista, realista, optimista)?',
          opciones: [
            'Para llenar páginas.',
            'Para impresionar.',
            'Porque si solo proyectas optimista, te sorprende la realidad. 3 escenarios = decisión con piso, techo y centro.',
            'Por moda.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. 3 escenarios te protegen del optimismo emprendedor. Pesimista (piso seguro), realista (apuesta), optimista (techo posible). Decides con los 3.',
          feedbackIncorrecto: '3 escenarios protegen contra el optimismo natural. Si solo proyectas optimista, la realidad es decepción. Con piso definido, decides con seguridad.'
        },
        {
          enunciado: '¿Qué mata startups según el dicho del Lean?',
          opciones: [
            'Falta de ideas.',
            'El flujo de caja (cuando llega a cero, quiebran).',
            'Falta de creatividad.',
            'No tener logo bonito.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. El flujo de caja mata startups, no la falta de ideas. Si en algún mes la caja llega a cero, se acabó. Proyectar flujo mes a mes es supervivencia.',
          feedbackIncorrecto: 'Flujo de caja = oxígeno. Cero caja = quiebra. La proyección mes a mes detecta dónde puedes morir antes de morir. Sin ese análisis, vuelas ciego.'
        },
        {
          enunciado: 'Tu análisis muestra escenario realista en negativo el mes 3. ¿Qué haces?',
          opciones: [
            'Pivotar el modelo: bajar costos, subir precios, cambiar segmento o postergar lanzamiento.',
            'Sigo igual, ya veré.',
            'Pedir más crédito.',
            'Cerrar todo.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Pivotar antes de quebrar. El presupuesto detecta el problema en papel; pivotar en papel es barato; pivotar en operación es caro.',
          feedbackIncorrecto: 'Pivotar el modelo antes de quebrar. Bajar costos, subir precios, cambiar segmento. El presupuesto es la oportunidad de detectar problemas antes de operar.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi presupuesto cobra por valor entregado o se sostiene extrayendo más de lo que aporta? ¿Mi cliente, si viera todos mis números, los aprobaría?',
    transferencia: 'En la sesión 8 vas a trabajar la dimensión ética y legal del proyecto: política de privacidad, términos de uso, responsabilidad sobre datos.',
    cierre: 'Al terminar podrás: (1) identificar los costos fijos y variables reales de tu MVP, con cifras en pesos colombianos verificables; (2) explicar la diferencia entre costos fijos, costos variables, ingresos, margen y punto de equilibrio aplicado a tu proyecto; (3) aplicar la fórmula…'
  },
  saberAncestral: {
    saber: 'En las veredas del Valle del Cauca y en las fincas cafeteras del Quindío, ningún campesino sembraba sin antes hacer la cuenta de la cosecha. Esa cuenta no estaba escrita en libros: estaba en la cabeza del mayor y se transmitía a los hijos en las tardes de patio. Tenía 3 columnas claras: (1) la siembra, lo que se invertía antes de ver fruto (semilla, abono, jornales, herramienta, agua). (2) la espera, el tiempo que mediaba entre siembra y cosecha (3 meses para frijol, 9 meses para café, 1 año para plátano), durante el cual no entraba un peso. (3) la cosecha, lo que se esperaba recoger en kilos o en bultos, multiplicado por el precio del mercado más probable, descontando lo que se perdería por plaga, lluvia, transporte. El campesino que no hacía esta cuenta no era llamado emprendedor visionario: era llamado loco o novato, y casi siempre perdía la finca al primer año adverso. La phronesis económica campesina sabía algo que el emprendimiento moderno suele olvidar: el cálculo previo no enfría la pasión; la protege de la ruina.',
    preguntaPuente: '¿Qué sabía el campesino al hacer la cuenta de la cosecha antes de sembrar, que el emprendedor novato olvida cuando se lanza con "ya veremos cómo nos va"? ¿Y por qué un punto de equilibrio claro a 3 meses es señal de oficio profesional, no de pesimismo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un presupuesto que se sostiene sin extraer es ya una toma de posición ética.',
      preguntaEspejo: '¿Mi presupuesto cobra por valor entregado o se sostiene extrayendo más de lo que aporta? ¿Mi cliente, si viera todos mis números, los aprobaría?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Calcular antes es virtud; lamentar después es vicio del que se ahorra el cálculo previo.',
      preguntaEspejo: '¿Estoy haciendo el cálculo aunque revele problemas, o lo estoy evitando para no enfrentar lo que muestra?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La transparencia financiera es la nueva ética profesional en el oficio digital.',
      preguntaEspejo: 'Si mi familia, mi cliente o un inversionista vieran mi presupuesto completo, ¿lo aprobarían o detectarían algo que oculté?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar los costos fijos y variables reales de tu MVP, con cifras en pesos colombianos verificables; (2) explicar la diferencia entre costos fijos, costos variables, ingres…',
    emocional: 'Es tentador saltarse el presupuesto porque "ya veremos".',
    ciudadana: 'Tu presupuesto puede sostenerse de dos maneras: (a) cobrando un margen justo al usuario por valor real entregado, o (b) extrayendo valor más allá del beneficio que devuelves (comisiones ocultas, depen…',
    local: 'Antes de cerrar, mira el presupuesto desde las cinco dimensiones humanas.',
    intergeneracional: 'Un presupuesto que el cliente o el inversionista nunca podría ver sin escándalo no es modelo sostenible: es modelo opaco.'
  }
};

export default contenido;
