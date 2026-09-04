/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 5
 * (sesión global 15).
 *
 * Auto-generado desde content/guias/8/8-2-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 5,
  titulo: 'Actuadores — LEDs, sonido y coreografía',
  resumen: 'Como las campanas del pueblo: cada respuesta automática tiene su propio código sonoro. Aprendes a programar actuadores (LEDs, sonido, pantalla) en secuencias coreografiadas con propósito comunicativo.',
  duracionMin: 90,
  subtema: 'Actuadores · LEDs · Sonido · Coreografía',
  preLectura: {
    porQueImporta: 'Saber diseñar respuestas automáticas multi-actuador te permite construir interfaces accesibles, alarmas claras, indicadores intuitivos. Es habilidad de diseño UX antes de existir UX.',
    preguntaDetonante: '¿Qué de las campanas del pueblo — la disciplina del código sonoro reconocible — podemos llevar a los actuadores que diseñamos hoy?',
    activacion: {
      titulo: 'La respuesta automática perfecta',
      descripcion: 'En 5 minutos: en parejas identifiquen una respuesta automática del entorno (timbre del colegio, alarma del celular, notificación) que está bien diseñada y otra que está mal. ¿Qué las diferencia?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 14 aprendiste a leer sensores y configurar eventos automáticos.',
      siguiente: 'En la sesión 16 trabajarás variables, umbrales y calibración para sistemas más sofisticados.'
    }
  },
  conceptosClave: [
    {
      termino: 'Actuador',
      definicion: 'Componente que ejecuta acción física a partir de la decisión del programa. Produce efectos en el mundo (luz, sonido, movimiento).',
      ejemplo: 'Los 25 LEDs de la matriz 5x5 del micro:bit son actuadores: encienden o apagan según el programa.',
      emoji: '💡'
    },
    {
      termino: 'Matriz de LEDs 5x5',
      definicion: '25 luces pequeñas organizadas en 5 filas y 5 columnas en la cara del micro:bit. Cada una se puede encender independientemente.',
      ejemplo: 'En MakeCode "mostrar LEDs" permite pintar la matriz como mosaico: cada cuadrito representa un LED encendido o apagado.',
      emoji: '🟨'
    },
    {
      termino: 'Pausa (ms)',
      definicion: 'Bloque que detiene la ejecución por milisegundos. Crucial para animaciones: sin pausa, los frames se ven solo el último.',
      ejemplo: 'Mostrar frame 1, pausa 200ms, mostrar frame 2, pausa 200ms... La pausa hace visible la animación.',
      emoji: '⏸'
    },
    {
      termino: 'Tocar tono (Hz, ms)',
      definicion: 'Bloque de música que emite frecuencia por tiempo determinado. Frecuencias estándar: do=262, re=294, mi=330, fa=349, sol=392.',
      ejemplo: 'tocar tono(262, 500) emite un do durante medio segundo. Encadenando notas se construyen melodías.',
      emoji: '🎵'
    },
    {
      termino: 'Coreografía',
      definicion: 'Secuencia ordenada de frames de LEDs con sonido sincronizado. Comunica algo (latido, ola, palabra) y se controla con botones.',
      ejemplo: 'Corazón pequeño → mediano → grande → mediano → pequeño con sonido grave-agudo-grave. Cuenta latido en 5 frames.',
      emoji: '💃'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar actuadores con criterio?',
      instrucciones: '5 preguntas para verificar que dominas LEDs, sonido y sincronización en MakeCode.',
      preguntas: [
        {
          enunciado: 'Programaste 5 frames seguidos sin "pausa" entre ellos. ¿Qué pasa?',
          opciones: [
            'Animación fluida',
            'Error',
            'Se ve todo en pantalla a la vez',
            'Solo se ve el último frame porque cambian demasiado rápido'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Sin pausa los frames cambian a velocidad de microsegundos. Solo se percibe el último. La pausa hace visible la secuencia.',
          feedbackIncorrecto: 'Sin pausa solo se ve el último. Los frames cambian tan rápido que el ojo solo capta el final. Necesitas pausa entre ellos.'
        },
        {
          enunciado: '¿Cuál es la frecuencia estándar de la nota "do" (do central)?',
          opciones: [
            '262 Hz',
            '100 Hz',
            '440 Hz',
            '1000 Hz'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Do central = 262 Hz. Re=294, mi=330, fa=349, sol=392, la=440, si=494. Estándares musicales.',
          feedbackIncorrecto: 'Do central es 262 Hz. La 440 (que confunde) es la nota "la", referencia para afinación.'
        },
        {
          enunciado: '¿Cuántos LEDs tiene la matriz del micro:bit?',
          opciones: [
            '16',
            '25',
            '100',
            '9'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 5x5 = 25 LEDs. Cada uno controlable independientemente con "mostrar LEDs" o "encender LED en X,Y".',
          feedbackIncorrecto: 'Son 25 LEDs (matriz 5x5). Cada uno se puede encender por separado.'
        },
        {
          enunciado: '¿Qué hace un actuador?',
          opciones: [
            'Percibe el mundo',
            'Calcula valores',
            'Ejecuta acciones físicas a partir de decisiones del programa',
            'Almacena datos'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Actuador ejecuta acciones (luz, sonido, movimiento). Sensor percibe; actuador actúa. Son complementarios.',
          feedbackIncorrecto: 'Actuador ejecuta acciones físicas. Lo que percibe es el sensor. Actuador y sensor son complementarios.'
        },
        {
          enunciado: 'Vas a programar el "latido" del corazón. ¿Qué patrón de frames usas?',
          opciones: [
            'Un corazón fijo todo el tiempo',
            'Corazón aleatorio',
            '25 LEDs aleatorios',
            'Corazón pequeño → mediano → grande → mediano → pequeño, con pausas'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Latido = expansión y contracción rítmica. El patrón pequeño-mediano-grande-mediano-pequeño con pausas comunica latido.',
          feedbackIncorrecto: 'El latido se comunica con la secuencia pequeño-mediano-grande-mediano-pequeño y pausas entre cada frame.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Las campanas del pueblo y los actuadores digitales comparten un principio: comunicar con disciplina y consistencia. ¿En qué situación de tu colegio o casa convendría diseñar una respuesta automática para mejorar la convivencia?',
    transferencia: 'Esta semana: en MakeCode diseña un saluda automático completo con LED + sonido + texto y pruébalo con 3 personas distintas. ¿Lo entienden todas igual? Ajusta hasta que sí.',
    cierre: 'Las campanas y los actuadores digitales hacen lo mismo: dar voz a una decisión que la comunidad necesita escuchar. Diseñar es ordenar percepciones con respeto.'
  },
  saberAncestral: {
    saber: 'En los pueblos del Valle del Cauca y en los puertos del Pacífico, antes de los teléfonos y los altavoces, la comunicación a distancia se hacía con dos instrumentos antiguos que combinaban luz y sonido: la campana del pueblo y el faro del puerto. La campana sonaba con códigos que toda la comunidad conocía: un solo toque para el ángelus, dos toques rápidos para el incendio, un repique largo para el difunto, tres campanadas para la misa. El faro del puerto, en cambio, era luz: pulso largo, pulso corto, pulso largo, según un patrón conocido por todos los marineros. Cada faro tenía su firma de luz para que el navegante supiera de qué puerto venía la señal. La sabiduría era doble: (1) Comunicar sin estar presente: la campana y el faro hablaban por sí solos a kilómetros. (2) Hablar con patrones, no con ruido aleatorio: cada secuencia tenía significado. La campana y el faro eran actuadores ancestrales: máquinas que, activadas por una decisión humana o automática, comunicaban a distancia con códigos de sonido y luz. El micro:bit hace lo mismo a escala de tu mano: LEDs y altavoz que dicen algo cuando se les programa con criterio.',
    fuente: 'Códigos sonoros de campanas en pueblos colombianos del Valle, Pacífico y Andes',
    preguntaPuente: '¿Qué sabía el pueblo al codificar la campana con toques distintos para anuncios diferentes, que el novato olvida cuando enciende todos los LEDs al azar sin patrón? ¿Y por qué una animación con 8 frames sincronizada con música es más comunicativa que 25 LEDs encendidos al mismo tiempo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un sistema que comunica con patrones honra al receptor; un sistema que solo decora desperdicia la voz que tiene.',
      preguntaEspejo: 'Mi coreografía, ¿comunica algo claro al observador o solo enciende LEDs bonitos?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'El patrón es disciplina del código; lo aleatorio es pereza disfrazada de creatividad.',
      preguntaEspejo: '¿Mis frames siguen un patrón disciplinado, o están en orden aleatorio?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El código que se expresa con sentido es la nueva ética del oficio creativo en la era digital.',
      preguntaEspejo: '¿Mi coreografía expresa algo decidido con criterio, o es ensayo aleatorio que probó cosas hasta que algo funcionó?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste que diseñar señales automáticas es responsabilidad comunicativa — cada parpadeo le habla a alguien.',
    emocional: 'Resististe la tentación del "más colores = mejor diseño". Entendiste que la consistencia silenciosa comunica más que la espectacularidad.',
    ciudadana: 'Tus actuadores bien diseñados son códigos comunitarios — pequeñas piezas que mejoran convivencia cotidiana.',
    local: 'Heredaste el oficio del campanero: cada señal tiene código, cada código sostiene confianza, cada confianza sostiene comunidad.',
    intergeneracional: 'Las campanas que organizaron la vida del pueblo y tus actuadores digitales comparten ética: comunicar con disciplina, no con ruido.'
  }
};

export default contenido;
