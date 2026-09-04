/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 2
 * (sesión global 2).
 *
 * Auto-generado desde content/guias/8/8-1-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 2,
  titulo: 'Tipos de datos y formato de celdas en Excel',
  resumen: 'Cada tipo de dato en Excel tiene su columna y formato. Como en el cuaderno del tendero del barrio: si confunde libras con unidades, pierde dinero al final del mes.',
  duracionMin: 90,
  subtema: 'Excel · Tipos de datos · Formato de celdas',
  preLectura: {
    porQueImporta: 'Lo que aprendas hoy te servirá toda la vida: registrar gastos, calcular notas, llevar control de ventas, hacer un presupuesto familiar. Saber poner cada dato en su columna con su formato es disciplina que ahorra horas y evita errores.',
    preguntaDetonante: '¿Qué del oficio del tendero — su disciplina de poner cada cosa en su columna — podemos llevar a la hoja de cálculo digital?',
    activacion: {
      titulo: 'El recibo que no cuadra',
      descripcion: 'En 3 minutos: piensa en una vez que recibiste un recibo o factura con un dato confuso (precio mal escrito, fecha rara, columna sin etiqueta). ¿Qué error cometió quien lo hizo? ¿Cómo lo evitarías en Excel?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 1 aprendiste a hacer preguntas a los datos con phronesis.',
      siguiente: 'En la sesión 3 estructurarás tablas con campos, registros y limpieza básica.'
    }
  },
  conceptosClave: [
    {
      termino: 'Tipo número',
      definicion: 'Celda que contiene cantidades calculables. Excel la alinea a la derecha por defecto y permite operaciones aritméticas (SUMA, PROMEDIO).',
      ejemplo: '"15", "3,14", "200" son números. Si escribes "quince" en una celda, Excel lo trata como texto y no podrá sumarlo con otros números.',
      emoji: '🔢'
    },
    {
      termino: 'Tipo texto',
      definicion: 'Celda con cadenas de caracteres no calculables. Excel la alinea a la izquierda por defecto. Sirve para nombres, descripciones, códigos.',
      ejemplo: '"María Pérez", "Producto A123", "Código X-45" son texto. Aunque parezcan números (un código), si tienen letras o se usan como identificador, deben ir como texto.',
      emoji: '🔤'
    },
    {
      termino: 'Tipo fecha',
      definicion: 'Celda con día/mes/año ordenable cronológicamente. Permite restar fechas para calcular cuántos días pasaron entre dos eventos.',
      ejemplo: '"15/03/2026" formateado como fecha permite ordenar de antiguo a reciente, calcular edad, contar días entre dos.',
      emoji: '📅'
    },
    {
      termino: 'Tipo moneda',
      definicion: 'Variante del tipo número con símbolo de moneda y separación de miles automática. Útil para precios, gastos, salarios.',
      ejemplo: '"$ 5.000" con formato moneda permite que Excel reconozca el contexto financiero y muestre miles separados correctamente.',
      emoji: '💰'
    },
    {
      termino: 'Tipo porcentaje',
      definicion: 'Celda que muestra el símbolo % y se calcula internamente como decimal. 50 % es 0,5 en operaciones internas.',
      ejemplo: 'Si tienes 0,15 en una celda y aplicas formato porcentaje, Excel muestra "15 %". Multiplicar por una celda monetaria te da el descuento.',
      emoji: '📊'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes elegir el tipo de dato correcto?',
      instrucciones: '5 preguntas para verificar que distingues los 5 tipos básicos de Excel y cuándo usar cada uno.',
      preguntas: [
        {
          enunciado: 'Escribes \'15-marzo\' en una celda y quieres ordenar las filas cronológicamente. ¿Qué tipo debe tener esa celda?',
          opciones: [
            'Texto',
            'Número',
            'Moneda',
            'Fecha'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Solo el tipo Fecha permite ordenar cronológicamente. Si la celda es texto, el orden sería alfabético y "15-marzo" iría junto a "15-enero" en lugar de su lugar real.',
          feedbackIncorrecto: 'El tipo correcto es Fecha. Solo así Excel reconoce el orden cronológico real, no alfabético.'
        },
        {
          enunciado: 'Tu columna precio tiene celdas con 5000, 7.500, "cinco mil". ¿Qué problema vas a tener al sumar?',
          opciones: [
            'La celda con cinco mil será ignorada porque Excel la trata como texto',
            'Ninguno, Excel suma todo automáticamente',
            'Excel convertirá cinco mil a 5000 automáticamente',
            'La suma incluirá las 3 celdas como números'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Excel ignora silenciosamente las celdas con texto cuando sumas. El total queda menor de lo esperado sin aviso.',
          feedbackIncorrecto: 'Excel no convierte texto a número automáticamente. La celda con \'cinco mil\' queda fuera de la suma y el total resultante engaña.'
        },
        {
          enunciado: '¿Cuál es la herramienta de Excel que cambia el tipo de una celda?',
          opciones: [
            'Insertar → Tabla',
            'Formato → Formato de celdas → Número',
            'Datos → Validación',
            'Inicio → Borrar formato'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Formato de celdas → Número permite elegir Número, Texto, Fecha, Moneda, Porcentaje y otros.',
          feedbackIncorrecto: 'La ruta correcta es Formato → Formato de celdas → pestaña Número. Las otras opciones hacen cosas distintas.'
        },
        {
          enunciado: 'Pones 50 en una celda y aplicas formato Porcentaje. ¿Qué muestra Excel?',
          opciones: [
            '50%',
            '0,5%',
            '5000%',
            '0,005%'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Aplicar porcentaje a una celda con valor 50 lo interpreta como 50 (no 0,5) y lo muestra como 5000 %. Para tener 50 % debes escribir 0,5 antes.',
          feedbackIncorrecto: 'Excel muestra 5000 % porque interpreta el 50 como número entero y lo multiplica por 100. Para tener 50 % debes escribir 0,5 con el formato porcentaje aplicado.'
        },
        {
          enunciado: '¿Cuál es la regla profesional para elegir el tipo de una columna?',
          opciones: [
            'Decidir según lo que voy a hacer con la columna después',
            'Elegir el tipo que se vea más bonito',
            'Usar siempre Texto por seguridad',
            'Dejar el tipo por defecto que ponga Excel'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. La phronesis consiste en decidir el tipo por el uso futuro: si voy a sumar, número; si voy a ordenar cronológicamente, fecha; si solo voy a leer, texto.',
          feedbackIncorrecto: 'La regla profesional es decidir el tipo según el uso: ¿voy a calcular?, ¿ordenar?, ¿solo leer? El uso determina el tipo correcto.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿En qué momento de tu vida te servirá organizar datos con tipos correctos y formato? Piensa en compras, ventas, presupuestos, tareas. Lo que aprendiste hoy te ahorra horas mañana.',
    transferencia: 'Esta semana: lleva un registro en Excel (o Google Sheets) de algo real (gastos del kiosko, tiempo de pantalla, calificaciones). Aplica los 4 tipos: texto, número, fecha, moneda. Verifica con una fórmula =SUMA o =PROMEDIO.',
    cierre: 'La disciplina del tendero — cada cosa en su columna — se vuelve hábito digital cuando la repites. Hoy es práctica; mañana, costumbre.'
  },
  saberAncestral: {
    saber: 'En los talleres de carpintería del centro de Cartago y en los aserríos del Pacífico, ningún maestro toma madera del montón al azar antes de cortar. Tiene un gesto previo que parece pérdida de tiempo a quien no sabe del oficio: clasifica la madera por tipo. El cedro va a un lado: liviano, blando, fácil de tallar; sirve para puertas y cofres. El guayacán va al otro: pesado, durísimo, casi imposible de cortar a mano; sirve para vigas y postes que aguantan lluvia y peso. El balso en una tercera pila: liviano como espuma, perfecto para juguetes y maquetas. Si el maestro confunde los tipos, el desastre es seguro: una puerta de guayacán pesa demasiado y rompe los goznes; una viga de balso se quiebra al primer aguacero; un juguete de cedro se astilla en las manos del niño. La sabiduría es ancestral y simple: cada material tiene un uso, y cada uso exige el material correcto. Quien no clasifica antes de cortar pierde la pieza y a veces la confianza del cliente.',
    fuente: 'Cuaderno del tendero de barrio en el Valle del Cauca',
    preguntaPuente: '¿Qué sabía el carpintero al clasificar la madera por tipo antes de cortar, que el novato olvida cuando llena celdas de Excel sin pensar en el tipo de dato? ¿Y qué pasa con un promedio de notas si una celda dice "cuatro punto cinco" en lugar de \\emph{4{,}5}?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Los datos correctamente clasificados respetan a quien los produjo; los mal clasificados los reducen a ruido.',
      preguntaEspejo: '¿Mi clasificación de tipos respeta lo que cada columna representa, o trato todo como números abstractos?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo pequeño bien hecho prepara lo grande; lo pequeño descuidado lo arruina.',
      preguntaEspejo: '¿Estoy dedicando suficiente cuidado a esta tarea pequeña, sabiendo que las siguientes sesiones se montan sobre ella?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La información bien estructurada es la nueva ética de la era digital.',
      preguntaEspejo: '¿Mi hoja está estructurada para que otra persona la entienda y la use sin pedirme aclaraciones, o solo yo la entiendo?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que la diferencia entre amateur y profesional con Excel es disciplina con los tipos de dato — no inteligencia bruta.',
    emocional: 'Resististe la tentación del "ya está, sigamos" — entendiste que el orden inicial te ahorra frustración después.',
    ciudadana: 'Una hoja de cálculo limpia respeta a quien la lee. Esa cortesía editorial es ciudadanía digital concreta.',
    local: 'Heredaste el oficio del tendero del Valle: cada cosa en su columna, cada tipo respetado, cada total verificable.',
    intergeneracional: 'El cuaderno de la abuela y tu Excel comparten el mismo principio. Lo que cambia es la herramienta, no la disciplina.'
  }
};

export default contenido;
