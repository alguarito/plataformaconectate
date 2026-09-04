/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/8/8-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 4,
  titulo: 'Sensores en MakeCode — el micro:bit que siente',
  resumen: 'Como las antenas naturales del abuelo: leer el entorno con disciplina. Aprendes a usar sensores (luz, temperatura) en MakeCode para activar eventos automáticos.',
  duracionMin: 90,
  subtema: 'Sensores · MakeCode · Eventos automáticos',
  preLectura: {
    porQueImporta: 'Saber programar sensores te permite construir tecnología que CUIDA: alarmas para huertas, sensores de luz para ahorro energético, monitoreos de temperatura para salud. Conecta código con mundo real.',
    preguntaDetonante: '¿Qué de la antena natural del abuelo — su capacidad de leer el entorno — podemos llevar a un sensor electrónico programado?',
    activacion: {
      titulo: 'Mis sentidos como sensores',
      descripcion: 'En 5 minutos: en parejas identifiquen tres ocasiones reales donde sus sentidos actuaron como sensores (anticipar lluvia, detectar comida quemada, notar peligro). ¿Cuál fue el "umbral" que activó la alerta?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 13 escribiste pseudocódigo y diagramas de flujo de procesos.',
      siguiente: 'En la sesión 15 trabajarás con actuadores: LEDs, sonido, respuestas automáticas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Sensor',
      definicion: 'Componente que percibe algo del mundo físico (luz, temperatura, movimiento, presión de botón) y lo convierte en valor que el programa puede usar.',
      ejemplo: 'El sensor de luz del micro:bit detecta qué tan brillante está el ambiente y devuelve un número entre 0 (oscuro total) y 255 (luz fuerte).',
      emoji: '👀'
    },
    {
      termino: 'MakeCode',
      definicion: 'Editor visual de programación para micro:bit basado en bloques arrastrables. Permite construir programas sin escribir código línea por línea.',
      ejemplo: 'En makecode.microbit.org arrastras "cuando se presiona botón A" y "mostrar ícono corazón". Acabas de hacer un programa.',
      emoji: '🧩'
    },
    {
      termino: 'Para siempre',
      definicion: 'Bucle principal del micro:bit. Lo que va dentro se repite continuamente mientras el dispositivo esté encendido.',
      ejemplo: '"Para siempre: leer luz, si es menor a 50, mostrar luna". El programa revisa la luz constantemente y reacciona.',
      emoji: '♾'
    },
    {
      termino: 'Al iniciar',
      definicion: 'Bloque que ejecuta código una sola vez cuando el micro:bit se enciende. Útil para configuraciones, mensajes de bienvenida.',
      ejemplo: '"Al iniciar: mostrar \'Hola\'". Aparece una vez al prender, después el programa pasa al bucle para siempre.',
      emoji: '▶️'
    },
    {
      termino: 'Probar en simulador',
      definicion: 'MakeCode tiene simulador integrado: muestra micro:bit virtual donde se prueba el programa antes de descargarlo al físico.',
      ejemplo: 'Botones A y B clickeables, sensor de luz con control deslizable, acelerómetro con flechas. Permite probar sin tener el dispositivo en mano.',
      emoji: '🖥'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Conoces los sensores del micro:bit?',
      instrucciones: '5 preguntas para verificar que sabes qué sensores tiene y cómo usarlos en MakeCode.',
      preguntas: [
        {
          enunciado: '¿Cuál NO es un sensor integrado del micro:bit?',
          opciones: [
            'Sensor de presión arterial',
            'Sensor de luz',
            'Sensor de temperatura',
            'Acelerómetro'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El micro:bit tiene luz, temperatura, botones, acelerómetro, brújula. Sensor de presión arterial no está integrado.',
          feedbackIncorrecto: 'El micro:bit no tiene sensor de presión arterial. Sí tiene luz, temperatura, botones, acelerómetro y brújula.'
        },
        {
          enunciado: '¿Qué rango de valores devuelve el sensor de luz del micro:bit?',
          opciones: [
            '0 a 100',
            '0 a 255',
            '0 a 1',
            '-100 a 100'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. 0 (oscuro total) a 255 (luz máxima). Es un valor entero de 8 bits.',
          feedbackIncorrecto: 'El rango es 0 a 255: 0 = oscuro, 255 = luz fuerte. Es estándar de 8 bits.'
        },
        {
          enunciado: '¿Qué hace el bloque "Para siempre" en MakeCode?',
          opciones: [
            'Se ejecuta una sola vez',
            'Termina el programa',
            'Repite continuamente lo que está adentro mientras el micro:bit esté encendido',
            'Detiene la ejecución'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. "Para siempre" es el bucle principal. Lo que esté adentro se repite sin parar mientras el dispositivo tenga energía.',
          feedbackIncorrecto: '"Para siempre" repite continuamente. Para ejecución única se usa "Al iniciar".'
        },
        {
          enunciado: '¿Para qué sirve el simulador de MakeCode?',
          opciones: [
            'Reemplazar el micro:bit físico',
            'Es decorativo',
            'Solo funciona si tienes el micro:bit conectado',
            'Probar el programa antes de cargarlo al micro:bit físico'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. El simulador permite probar sin tener el dispositivo. Ahorra tiempo y permite iterar rápido antes de cargar al físico.',
          feedbackIncorrecto: 'El simulador permite probar antes de cargar al micro:bit físico. No reemplaza, solo facilita pruebas iniciales.'
        },
        {
          enunciado: 'Quieres un programa que muestre "frío" cuando la temperatura es menor a 18 grados. ¿Qué bloques combinarías?',
          opciones: [
            'Para siempre + si temperatura menor a 18 entonces mostrar texto',
            'Solo mostrar texto',
            'Al iniciar + mostrar texto',
            'Solo cuando hace frío'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Para siempre (chequeo continuo) + condicional (si temperatura < 18) + acción (mostrar "frío"). Combinación de bucle, decisión y salida.',
          feedbackIncorrecto: 'La combinación correcta es "Para siempre" + condicional "si temperatura < 18" + "mostrar texto". Bucle + decisión + acción.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Los sensores convierten el mundo físico en datos digitales. ¿Qué problema real de tu entorno (huerta, sala de clase, casa) podría aliviarse con un sensor + actuador?',
    transferencia: 'Esta semana: en MakeCode (simulador online gratis) construye un programa con UN sensor y UN actuador. Comparte el link con un compañero y prueben en distintos ambientes.',
    cierre: 'Las antenas del abuelo y el sensor digital comparten algo: leer el entorno con disciplina antes de reaccionar. La diferencia es que el sensor también puede dormir tranquilo y despertar al evento.'
  },
  saberAncestral: {
    saber: 'En las fincas del Valle del Cauca, en las casas con patio del campo y en los corregimientos de la zona cafetera, había un compañero del oficio que dormía menos que el dueño: el perro guardián. El perro no tenía instrucciones escritas ni reloj, pero ejercía una función específica: sentir lo que el dueño no siente. Olía al extraño cuando todavía estaba a 100 metros del portal. Escuchaba el ruido del zorro antes de que llegara al gallinero. Sentía el motor de la motocicleta en el camino antes de que se viera la luz. Y cuando percibía algo, no actuaba solo: avisaba con su ladrido, su gemido o su carrera al patio principal. El dueño, al escuchar el aviso, decidía qué hacer (asomarse, buscar el machete, encender la luz). El perro no decidía; percibía y avisaba. Esa función ancestral del perro guardián tiene un nombre en computación física: sensor. Un sensor digital es exactamente eso: algo que percibe el mundo y le avisa al programa para que decida qué hacer.',
    fuente: 'Lectura ambiental tradicional en el campo colombiano (cielo, río, ganado)',
    preguntaPuente: '¿Qué sabía el perro guardián de la finca al percibir antes y avisar al dueño, que el programador novato olvida cuando trata el sensor como si fuera un cálculo más? ¿Y por qué el micro:bit con 2 sensores combinados puede tomar decisiones más útiles que con uno solo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un sensor que cuida es liberador; un sensor que vigila sin consentimiento es opresor.',
      preguntaEspejo: 'Mi programa con sensores, ¿cuida o vigila? ¿El usuario sabría qué hace este micro:bit si lo encontrara funcionando?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'Probar con varios escenarios es virtud; declarar funcional con una sola prueba es vanidad.',
      preguntaEspejo: '¿Estoy probando con varios escenarios o me convencí con una sola prueba?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los sistemas que aumentan la inteligencia humana sin reemplazarla son la nueva ética del oficio digital.',
      preguntaEspejo: '¿Mi programa asiste al usuario o intenta decidir por él?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que un sensor no es magia — es decisión consciente sobre qué del mundo cuenta para tu sistema.',
    emocional: 'Resististe la tentación de "más sensores = mejor sistema". Entendiste que medir bien lo que importa vence a medir todo sin criterio.',
    ciudadana: 'Diseñar sensores con criterio ético es ciudadanía técnica: incluyes o excluyes realidades con cada decisión de qué medir.',
    local: 'Heredaste la lectura ambiental del abuelo: leer el entorno con disciplina antes de reaccionar.',
    intergeneracional: 'Las antenas naturales del abuelo y los sensores digitales comparten oficio. Lo que cambia es la herramienta, no la atención al mundo.'
  }
};

export default contenido;
