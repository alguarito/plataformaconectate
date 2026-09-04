/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 8
 * (sesión global 8).
 *
 * Auto-generado desde content/guias/8/8-1-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 8,
  titulo: 'Formato condicional y validación de datos — alertas visibles',
  resumen: 'Como el semáforo del salón comunal: tres colores, tres reglas, todos las entienden. Aprendes a aplicar formato condicional (color por valor) y validación de datos (qué se puede escribir).',
  duracionMin: 90,
  subtema: 'Excel · Formato condicional · Validación · Protección',
  preLectura: {
    porQueImporta: 'Las hojas profesionales tienen reglas que ayudan al usuario y previenen errores. Estas dos herramientas (formato condicional + validación) separan una plantilla amateur de una corporativa. Ahorran horas de corrección y mejoran la lectura.',
    preguntaDetonante: '¿Qué del semáforo del salón comunal — disciplina visual heredada — podemos llevar a la hoja de Excel para que ayude a leer y a no equivocarse?',
    activacion: {
      titulo: 'El error que se podría evitar',
      descripcion: 'En 5 minutos: piensa en una hoja de Excel que hayas visto donde alguien escribió mal y dañó los cálculos. ¿Qué validación habría evitado el error? Comparte con un compañero.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 7 elegiste el gráfico correcto según la pregunta.',
      siguiente: 'En la sesión 9 aplicarás todo a un mini-estudio del entorno escolar.'
    }
  },
  conceptosClave: [
    {
      termino: 'Formato condicional',
      definicion: 'Función de Excel que aplica color a celdas automáticamente según el valor. Convierte la hoja en tablero visual sin necesidad de gráfico aparte.',
      ejemplo: 'Notas menores a 3 en rojo, entre 3 y 4 en amarillo, mayores a 4 en verde. El docente ve el estado del grupo de un vistazo.',
      emoji: '🚦',
      categoria: 'Cómo se resalta'
    },
    {
      termino: 'Escala de colores',
      definicion: 'Variante de formato condicional que aplica gradiente automático (verde-amarillo-rojo) a un rango. Útil para visualizar magnitudes relativas.',
      ejemplo: 'Aplicar escala de colores a temperaturas semanales muestra los días más calientes en rojo y los más fríos en azul automáticamente.',
      emoji: '🌈'
    },
    {
      termino: 'Validación de datos',
      definicion: 'Función que impide ingresar valores incorrectos en una celda. Rechaza entrada y muestra mensaje al usuario antes del error.',
      ejemplo: 'Una columna de notas configurada con validación 0-5 rechaza si alguien escribe 7 o -1, evitando errores estructurales.',
      emoji: '🛡',
      categoria: 'Cómo se restringe'
    },
    {
      termino: 'Lista desplegable',
      definicion: 'Tipo de validación que ofrece opciones predefinidas y solo acepta esas. Asegura consistencia en categorías.',
      ejemplo: 'Columna Estado con lista desplegable [Aprobado, Reprobado, Pendiente] evita variantes como "aprobado", "APROBADO" o errores de tipeo.',
      emoji: '📋',
      categoria: 'Cómo se restringe'
    },
    {
      termino: 'Prevenir vs resaltar',
      definicion: 'Distinción profesional: validación previene errores futuros (al entrar el dato); formato condicional resalta los que ya existen (visualizar lo presente).',
      ejemplo: 'Validación impide poner edad de 200 años; formato condicional resalta si alguna edad existente es mayor a 18 años para fines del filtro.',
      emoji: '⚖️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes prevenir y resaltar errores con Excel?',
      instrucciones: '5 preguntas para verificar que distingues formato condicional de validación de datos.',
      preguntas: [
        {
          enunciado: '¿Qué hace el formato condicional?',
          opciones: [
            'Aplica color a celdas según su valor automáticamente',
            'Impide ingresar valores incorrectos',
            'Cambia el tipo de dato de la celda',
            'Calcula promedios'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Formato condicional pinta automáticamente las celdas según reglas que tú defines. Es visualización sin gráfico aparte.',
          feedbackIncorrecto: 'Formato condicional aplica color a celdas según su valor. No impide ingresos (eso es validación). No cambia tipo. No calcula.'
        },
        {
          enunciado: '¿Qué hace la validación de datos?',
          opciones: [
            'Pinta celdas con color',
            'Impide ingresar valores fuera de un criterio definido',
            'Calcula totales',
            'Genera gráficos'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Validación previene errores rechazando entradas que no cumplen la regla (rango, lista, longitud, fórmula).',
          feedbackIncorrecto: 'Validación impide ingresar valores incorrectos antes de que ocurra el error. No pinta (eso es formato condicional).'
        },
        {
          enunciado: 'Quieres que la columna Estado solo acepte "Aprobado", "Reprobado" o "Pendiente". ¿Qué herramienta usas?',
          opciones: [
            'Formato condicional',
            'Función SUMA',
            'Validación con lista desplegable',
            'Tabla pivote'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Validación con lista desplegable ofrece esas 3 opciones y rechaza cualquier otra entrada.',
          feedbackIncorrecto: 'La solución es validación con lista desplegable. Garantiza que solo se ingresen las 3 opciones predefinidas.'
        },
        {
          enunciado: 'Sabiduría del semáforo del mercado: ¿qué hace el formato condicional con color verde-amarillo-rojo?',
          opciones: [
            'Decora la hoja para que se vea bonita',
            'Solo funciona en hojas grandes',
            'Cambia el tipo de dato',
            'Avisa visualmente del estado antes de que el lector lea cada número'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. El semáforo del mercado avisa con color antes del problema. El formato condicional hace lo mismo: comunica estado visualmente.',
          feedbackIncorrecto: 'El formato condicional avisa visualmente, igual que el semáforo del mercado. No es decoración: es comunicación rápida.'
        },
        {
          enunciado: '¿Cuál es la diferencia clave entre validación y formato condicional?',
          opciones: [
            'Validación es para texto, formato para números',
            'Validación previene errores futuros; formato resalta los presentes',
            'Son lo mismo con nombre distinto',
            'Validación es para gráficos'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Validación previene en la entrada; formato resalta lo que ya hay. Son complementarias, no equivalentes.',
          feedbackIncorrecto: 'Validación previene errores futuros al impedir entrada; formato condicional resalta los que ya existen. Trabajan juntas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'El semáforo y la validación son ambos disciplinas comunitarias para prevenir errores. ¿En qué otros ámbitos de tu vida valdría la pena diseñar "validaciones" antes de los problemas?',
    transferencia: 'Esta semana: en una hoja real (lista, presupuesto, registro), aplica al menos UNA validación de datos y UN formato condicional. Documenta qué error previniste.',
    cierre: 'La hoja autovalidada es semáforo digital: cuida al usuario antes de que se equivoque. Es ética del diseño aplicada a la herramienta cotidiana.'
  },
  saberAncestral: {
    saber: 'En la galería del centro de Cartago había una figura silenciosa que sostenía la paz del mercado: el celador. Pero la verdadera vigilancia no la hacía él solo: la hacían las señales del color. Las puertas de las galerías tenían un sistema antiguo de banderas y luces para avisar de cosas que estaban por pasar antes de que pasaran. Bandera roja arriba: cuidado, hay pelea o robo en una galería. Bandera verde: todo en calma, pueden seguir entrando compradores. Bandera amarilla: cuidado moderado, está lloviendo y los pisos están resbalosos. El sistema funcionaba sin gritos ni alarmas estridentes: el color avisaba antes de que pasara el problema, y los comerciantes y compradores podían ajustar su comportamiento. Si alguien intentaba entrar con un costal demasiado grande que iba a tumbar pilas, los celadores levantaban una mano antes de que el desastre ocurriera. El semáforo del mercado avisaba con color antes del problema, no después. Esa sabiduría preventiva es la phronesis del aviso a tiempo.',
    fuente: 'Salón comunal del barrio y códigos visuales comunitarios del Valle',
    preguntaPuente: '¿Qué sabía el celador del mercado al usar banderas de color para avisar antes del problema, que el novato olvida cuando solo revisa la hoja después de cometer el error? ¿Y por qué una hoja con formato condicional puede comunicar el estado del grupo sin que el docente lea fila por fila?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Avisar a tiempo es cuidado; dejar que el otro se equivoque y después corregir es desprecio disfrazado de neutralidad.',
      preguntaEspejo: '¿Mis mensajes de validación cuidan al usuario explicando, o lo bloquean sin razón clara?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Prevenir es disciplina; corregir es servidumbre del error.',
      preguntaEspejo: '¿Estoy previniendo errores con validación, o asumo que después los corregiré uno por uno?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los sistemas que asisten al usuario son la nueva ética del oficio digital.',
      preguntaEspejo: '¿Mi hoja asiste al usuario o lo deja solo frente al error?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a diseñar herramientas que cuidan al usuario — habilidad profesional rara, valiosa, transferible a cualquier sistema.',
    emocional: 'Resististe la lógica del "ya está, que el usuario se cuide" y elegiste la disciplina del diseño preventivo.',
    ciudadana: 'Diseñar con validación es respetar a quien recibe la herramienta. Esa ética escala: de Excel a sistemas públicos, a apps, a leyes.',
    local: 'Heredaste la lógica del semáforo del salón comunal — tres reglas claras que cuidan a todos, no solo a los expertos.',
    intergeneracional: 'Los códigos visuales comunitarios que la abuela entendía sin leer son los mismos que el formato condicional automatiza hoy.'
  }
};

export default contenido;
