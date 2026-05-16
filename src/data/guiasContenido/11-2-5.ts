/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 5
 * Tema: Automatización con triggers — Zapier, Make, n8n.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-5.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 5,
  titulo: 'Automatización con triggers — Zapier, Make, n8n',
  ocultarPDF: false,
  resumen:
    'Un trigger es el evento que dispara una cadena de acciones automáticas. Aprendes el patrón trigger → acción y construyes tu primer flujo funcional en Zapier, Make o n8n que conecte 2 servicios reales.',
  duracionMin: 90,
  subtema: 'Automatización · Triggers y acciones',

  saberAncestral: {
    saber:
      'La campana de la iglesia de los pueblos del Valle era un sistema de triggers: tres golpes = misa; tañidos rápidos = emergencia; repique alegre = matrimonio. Cada patrón disparaba una cadena: el sacristán prendía velas, el padre tomaba sotana, las cocineras bajaban el fuego. Los triggers digitales son las campanas del XXI: un evento (nuevo correo, nueva fila, mensaje) activa una secuencia sin tu intervención.',
    fuente: 'Campana de la iglesia y grito de la cocinera mayor como sistemas de triggers heredados',
    preguntaPuente:
      '¿Cómo sabía el pueblo qué hacer al oír la campana sin orden explícita? ¿Y qué pierde un emprendedor novato cuando hace todo a mano en lugar de automatizar la cadena trigger → acción?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'La campana del pueblo', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Observa un flujo en acción', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía del trigger', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu primer flujo automatizado', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'Cada email automático que recibes, cada notificación instantánea, cada respuesta inmediata es un trigger en acción. Aprender a construirlos es el lenguaje con el que la economía digital ejecuta sus procesos.',
    preguntaDetonante:
      'Si tu primo recibe 30 pedidos al día por WhatsApp y los copia a mano a un Sheet, ¿cuántas horas a la semana podrías ahorrarle con un trigger bien hecho?',
    activacion: {
      titulo: 'La campana digital',
      descripcion:
        'En 3 minutos: el docente demuestra en vivo un Zap funcionando. Un compañero envía Form → el grupo ve aparecer una fila en Sheet → llega un email automático. Cuántos pasos hizo el humano vs el sistema.',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 4 estructuraste tu hoja como base de datos. Hoy automatizas la cadena que se dispara cuando llega un dato nuevo.',
      siguiente:
        'En la sesión 6 das el salto a IA: que el sistema no solo reaccione, sino que interprete con criterio (clasificación con prompt).',
    },
  },

  conceptosClave: [
    {
      termino: 'Trigger',
      definicion:
        'Evento que dispara el flujo. Tipos comunes: nueva fila, nuevo Form, nuevo email con asunto X, hora exacta, webhook.',
      ejemplo:
        '"Nueva respuesta en Google Forms" → dispara el resto del flujo automáticamente.',
      emoji: '🔔',
    },
    {
      termino: 'Acción',
      definicion:
        'Lo que el sistema hace tras el trigger. Tipos comunes: enviar email, escribir fila, enviar WhatsApp, crear tarea, llamar API.',
      ejemplo:
        'Acción: "enviar email a coordinacion@colegio.edu con los datos del Form".',
      emoji: '⚡',
    },
    {
      termino: 'Filtro',
      definicion:
        'Condición que decide si la acción se ejecuta o no. Evita disparar el flujo en casos no deseados.',
      ejemplo:
        'Filtro: "solo si Monto > 100.000" — los pedidos pequeños no disparan email al gerente.',
      emoji: '🎚️',
    },
    {
      termino: 'Mapeo de campos',
      definicion:
        'Cómo se llenan los campos de la acción con los datos del trigger. Sin mapeo, la acción no sabe qué información usar.',
      ejemplo:
        'Mapeo: campo "Para" del email ← campo "email_cliente" del Form.',
      emoji: '🔗',
    },
    {
      termino: 'Manejo de errores',
      definicion:
        'Qué pasa cuando la acción falla. Sin manejo, los errores se acumulan silenciosamente y nadie los detecta.',
      ejemplo:
        'Si el email rebota → enviar notificación al humano + registrar en hoja de errores.',
      emoji: '🚨',
    },
    {
      termino: 'Supervisión humana',
      definicion:
        'Revisión periódica de las ejecuciones para detectar casos invisibles al filtro. Nunca "activar y olvidar".',
      ejemplo:
        '"Revisar hoja de respuestas cada lunes para detectar mensajes que el flujo marcó como rutinarios pero eran urgentes".',
      emoji: '👁️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'ANALIZA',
      titulo: 'Observa un flujo en acción',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Observa el flujo en vivo o en video que demuestra el docente.',
        'Cuenta cuántos pasos hizo el humano y cuántos hizo el sistema.',
        'Estima el tiempo ahorrado si el flujo se ejecuta 30 veces al mes.',
        'Identifica 2 tareas de tu proceso de Sesión 1 que serían candidatas a automatización.',
      ],
      cuaderno: {
        titulo: 'Observa un flujo en acción',
        formato: 'Tabla 3 columnas (Tarea | Hace humano | Hace sistema) + tiempo ahorrado mensual',
        extension: '4-6 filas + 1 estimación',
      },
      criterios: [
        'Conté pasos humanos vs pasos del sistema',
        'Estimé el ahorro mensual',
        'Identifiqué 2 candidatos a automatización en mi proceso',
        'Reconozco qué tareas DEBEN seguir siendo humanas',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía del trigger',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con las 4 piezas (trigger, filtro, acción, manejo de errores).',
        'Aplícalas al flujo que construirás en Actividad 3.',
        'Lista los 5 errores comunes y marca 🚨 el que más temes.',
        'Define la frecuencia esperada de ejecución (cuántas veces al día/mes).',
      ],
      cuaderno: {
        titulo: 'Anatomía del trigger',
        formato: 'Ficha con 4 piezas + 5 errores + frecuencia esperada',
        extension: '1 ficha + 1 marca',
      },
      criterios: [
        'Las 4 piezas tienen contenido específico de mi caso',
        '5 errores listados con marca del más temido',
        'Frecuencia esperada estimada',
        'Podría explicar por qué cada pieza es necesaria',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu primer flujo automatizado',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Crea cuenta gratuita en Zapier (zapier.com) o Make (make.com).',
        'Configura el trigger conectando el servicio de origen (Form, Sheet, email).',
        'Configura la acción en el servicio de destino, mapeando los campos.',
        'Activa el flujo y prueba con 3 datos reales; documenta cada ejecución exitosa con captura.',
      ],
      cuaderno: {
        titulo: 'Mi primer flujo automatizado',
        formato: 'Pantallazos del flujo (trigger, acción, 3 ejecuciones) + URL + tiempo ahorrado estimado',
        extension: '1-2 páginas de cuaderno',
      },
      criterios: [
        'Cuenta gratuita creada',
        '2 servicios conectados',
        'Trigger específico (no genérico)',
        'Acción probada con dato real',
        '3 ejecuciones documentadas',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Detecta errores y propone mejoras',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Comparte tu flujo con un compañero para que envíe 2 datos reales.',
        'Revisa juntos qué pasó: ¿se ejecutó cada vez?, ¿algún caso no debió disparar?',
        'Identifica 1 caso límite donde el flujo podría fallar (datos sucios, falta de campo, formato inesperado).',
        'Propón 1 ajuste concreto (agregar filtro, validar campo, notificar humano).',
      ],
      cuaderno: {
        titulo: 'Auditoría del flujo con [nombre]',
        formato: 'Resultado de 2 pruebas + 1 caso límite + 1 ajuste propuesto',
        extension: '1 auditoría',
      },
      criterios: [
        '2 pruebas reales con compañero',
        '1 caso límite identificado',
        '1 ajuste concreto propuesto',
        'Reconozco que activar no es lo mismo que dejar funcionar bien',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica triggers y acciones',
      instrucciones:
        '5 preguntas para confirmar que dominas el patrón trigger → acción. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: 'Tu Zap se dispara cada vez que recibes CUALQUIER email. ¿Qué problema tiene?',
          opciones: [
            'Ninguno, es lo correcto',
            'Trigger demasiado amplio — produce ejecuciones falsas; necesita filtro o trigger específico (asunto, remitente)',
            'Solo necesita más velocidad',
            'No tiene problema si funciona',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Trigger demasiado amplio dispara la acción para 100 emails irrelevantes por cada email importante. Usa filtro o trigger más específico.',
          feedbackIncorrecto:
            'Demasiado amplio. Filtra por asunto, remitente o etiqueta para que el flujo solo se active en los casos relevantes.',
        },
        {
          enunciado: '¿Cuándo se justifica un filtro en el flujo?',
          opciones: [
            'Nunca',
            'Cuando el trigger captura casos que no quieres procesar (ej. solo pagos > 100.000)',
            'Solo en Make',
            'Siempre',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. El filtro evita ejecutar la acción cuando el caso no aplica. Sin filtro, el sistema actúa para todos los disparos.',
          feedbackIncorrecto:
            'Cuando el trigger captura casos irrelevantes. El filtro es la disciplina de no actuar para todo lo que llega.',
        },
        {
          enunciado: '¿Por qué probar con datos reales y no sintéticos?',
          opciones: [
            'Es lo mismo',
            'Los datos reales descubren problemas (formatos inesperados, vacíos, caracteres raros) que los sintéticos no muestran',
            'Por curiosidad',
            'Es opcional',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Los datos sintéticos suelen ser "ideales"; los reales tienen tildes, espacios, mayúsculas extrañas, campos vacíos. Solo lo real valida.',
          feedbackIncorrecto:
            'Realidad vs idealización. Lo sintético hace que "parezca funcionar"; lo real prueba si funciona.',
        },
        {
          enunciado: 'Tu flujo se activó pero el email no llegó. ¿Cuál puede ser la causa más probable?',
          opciones: [
            'Magia',
            'Falla silenciosa en la acción (token expirado, formato inválido, destinatario rechazó) sin manejo de errores',
            'Falla del trigger',
            'Falla de internet',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La acción falló silenciosamente. Sin manejo de errores, nadie se entera. Agregar notificación al humano cuando falla es indispensable.',
          feedbackIncorrecto:
            'Falla silenciosa de la acción. El sistema debe tener manejo de errores: notificación al humano cuando algo no se ejecuta.',
        },
        {
          enunciado: 'En el saber ancestral de la campana, ¿qué aplica al trigger digital?',
          opciones: [
            'Nada',
            'Un evento conocido dispara una cadena de acciones acordadas previamente — la campana es trigger heredado',
            'Las campanas eran ineficientes',
            'Los pueblos no usaban triggers',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El pueblo del Valle ya entendía que un evento (campana) dispara una cadena. Zapier solo lo automatiza con software.',
          feedbackIncorrecto:
            'Evento conocido + cadena acordada. La sabiduría comunitaria del XX antecede al software del XXI.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, comparte tu flujo con 3 personas reales, revisa las ejecuciones y ajusta. La phronesis de la automatización se entrena con datos reales y supervisión continua.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Toda automatización decide qué errores se vuelven masivos y qué errores se quedan locales.',
      preguntaEspejo:
        '¿Cuánto supervisarás mi flujo después de activarlo? ¿Quién detectará si empieza a fallar para casos que el filtro nunca contempló?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo que delegas al sistema dejas de aprender a hacer tú mismo.',
      preguntaEspejo:
        '¿Estoy automatizando tareas repetitivas que ya domino o estoy escondiendo bajo automatización procesos que aún no entiendo?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La automatización con triggers es la infraestructura invisible de la economía digital contemporánea.',
      preguntaEspejo:
        '¿Cuántos triggers automáticos me afectaron esta semana sin que yo notara? ¿Cuánto cambia mi posición si yo soy quien los diseña, no quien solo los recibe?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste el lenguaje base de toda automatización contemporánea. Es ventaja transferible a cualquier emprendimiento o empleo digital.',
    emocional:
      'Resististe la tentación de "automatizar todo". El criterio sobre qué delegar al sistema es disciplina ética.',
    ciudadana:
      'Los servicios públicos automatizados usan triggers. Saber cómo funcionan te permite reclamar cuando fallan con vocabulario técnico.',
    local:
      'La campana del pueblo, el grito de la cocinera: triggers heredados. El software solo digitalizó el patrón antiguo.',
    intergeneracional:
      'Lo que tu abuelo coordinaba con campanas y avisos, tú lo coordinas con Zaps. Mismo gesto, distinto medio.',
  },
};

export default contenido;
