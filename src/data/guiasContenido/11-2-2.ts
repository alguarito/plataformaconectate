/**
 * Contenido enriquecido — Grado 11 · Periodo 2 · Sesión 2
 * Tema: Diagramas de flujo — lenguaje BPMN básico.
 * Profundidad MILC v3 PRO completa, alineada con content/guias/11/11-2-2.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 2,
  sesion: 2,
  titulo: 'Diagramas de flujo — lenguaje BPMN básico',
  ocultarPDF: false,
  resumen:
    'BPMN es el alfabeto profesional para diagramar procesos. Aprendes los 5 símbolos básicos (inicio/fin, tarea, decisión, flecha, swimlane) y traduces tu mapa de Sesión 1 a un diagrama legible por cualquier profesional del mundo.',
  duracionMin: 90,
  subtema: 'Automatización · Lenguaje profesional',

  saberAncestral: {
    saber:
      'Las recetas familiares del Valle son diagramas de flujo escritos sin saberlo: "primero el sofrito, luego el caldo, después el grano, al final el cilantro". La cocinera de la fonda, el maestro carpintero, el tejedor Wayuu — todos saben que cada paso del oficio tiene una secuencia precisa. BPMN no inventó los diagramas de flujo: les puso un alfabeto común para que un ingeniero en Bogotá entienda el flujo de una fábrica en Cartago sin necesidad de visitarla.',
    fuente: 'Recetas familiares, oficio del maestro carpintero y tejido Wayuu como flujos heredados',
    preguntaPuente:
      '¿Cómo sabía la cocinera, sin haberlo escrito, qué pasos del sancocho admiten desorden y cuáles no? ¿Y qué pierde un emprendedor novato cuando inventa su propio "lenguaje gráfico" en lugar de aprender el estándar que todos los profesionales del mundo ya leen?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Recetas como diagramas', duracionMin: 10 },
    { numero: 2, iconos: ['🔎'], titulo: 'Lee 3 BPMN sin guía', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Anatomía BPMN', duracionMin: 17 },
    { numero: 4, iconos: ['✏️'], titulo: 'Tu proceso en BPMN profesional', duracionMin: 33 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 15 },
  ],

  preLectura: {
    porQueImporta:
      'BPMN es la lengua franca de los procesos. Cualquier consultor, ingeniero o emprendedor profesional lo lee. Aprenderlo a los 16 años es ventaja profesional decisiva.',
    preguntaDetonante:
      'Si pudieras mostrarle a un consultor en Bogotá cómo funciona el negocio de tu familia sin verte explicar, ¿qué lenguaje gráfico usarías?',
    activacion: {
      titulo: 'La receta como diagrama',
      descripcion:
        'En 3 minutos: cada estudiante describe una receta familiar (sancocho, arroz, sopa) en voz alta como secuencia de pasos. Los demás identifican mentalmente dónde está la decisión ("¿hay yuca?") y dónde el bucle ("revolver hasta que espese").',
      duracionMin: 3,
    },
    conexion: {
      anterior:
        'En la sesión 1 mapeaste un proceso a mano alzada. Hoy le pones lenguaje profesional: el mismo proceso en BPMN estándar.',
      siguiente:
        'En la sesión 3 automatizas el primer paso del proceso — la captura de información — con un formulario digital.',
    },
  },

  conceptosClave: [
    {
      termino: 'Evento (círculo)',
      definicion:
        'Inicio (verde, fino) marca el comienzo del proceso; fin (rojo, grueso) marca el cierre. Idealmente uno de cada.',
      ejemplo:
        'Inicio: "Cliente llega al mostrador". Fin: "Cliente recibe el pedido".',
      emoji: '⚪',
    },
    {
      termino: 'Tarea (rectángulo redondeado)',
      definicion:
        'Cada acción concreta del proceso, nombrada con verbo + objeto.',
      ejemplo:
        '"Verificar stock", "emitir factura", "preparar pedido".',
      emoji: '🔲',
    },
    {
      termino: 'Compuerta (rombo)',
      definicion:
        'Decisión con mínimo 2 salidas etiquetadas con condición (sí/no, aprobado/rechazado).',
      ejemplo:
        '"¿Pago aprobado?" → sí (continúa), no (cancela).',
      emoji: '🔷',
    },
    {
      termino: 'Flujo de secuencia (flecha)',
      definicion:
        'Flecha continua que conecta elementos en el orden temporal del proceso.',
      ejemplo:
        'De "tarea A" a "tarea B" significa: tras A, sigue B.',
      emoji: '➡️',
    },
    {
      termino: 'Swimlane (carril)',
      definicion:
        'Carril horizontal que agrupa tareas por responsable (persona, rol, sistema).',
      ejemplo:
        '3 carriles: Cliente | Vendedor | Sistema — cada tarea va en el carril del que la ejecuta.',
      emoji: '🏊',
    },
    {
      termino: 'Legibilidad ciega',
      definicion:
        'Prueba clave: ¿alguien que no conoce mi proceso puede seguir el flujo y entenderlo solo con el diagrama?',
      ejemplo:
        'Le das tu BPMN a un compañero sin explicación. Si lo entiende, está bien hecho.',
      emoji: '👁️',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Lee 3 BPMN sin guía',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'El docente proyecta 3 diagramas BPMN reales sin explicarlos.',
        'Para cada uno, describe en tus palabras qué hace el proceso.',
        'Identifica inicio, fin y al menos 1 decisión en cada uno.',
        'Anota qué símbolo o flecha te resultó confusa.',
      ],
      cuaderno: {
        titulo: 'Lee 3 BPMN sin guía',
        formato: 'Tabla 3 filas × 3 columnas (Qué hace | Decisiones detectadas | Lo confuso)',
        extension: '3 filas',
      },
      criterios: [
        'Describí qué hace cada uno de los 3 diagramas',
        'Identifiqué inicio, fin y decisión en cada uno',
        'Anoté lo que me confunde para preguntar',
        'Reconozco que BPMN es más intuitivo de lo que parece',
      ],
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Anatomía BPMN',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Construye 1 ficha con los 5 símbolos básicos dibujados.',
        'En cada símbolo: qué representa + 1 error frecuente.',
        'Practica explicar los 5 a un compañero en menos de 1 minuto.',
        'Anota qué símbolo te costó más explicar.',
      ],
      cuaderno: {
        titulo: 'Anatomía BPMN',
        formato: 'Ficha con 5 símbolos + qué representa + 1 error frecuente cada uno',
        extension: '1 ficha + 1 marca',
      },
      criterios: [
        'Los 5 símbolos dibujados y nombrados',
        'Cada símbolo tiene error frecuente identificado',
        'Practiqué la explicación oral',
        'Reconozco cuál símbolo me costó más',
      ],
    },
    {
      numero: 3,
      verbo: 'APLICA',
      titulo: 'Tu proceso en BPMN profesional',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Abre draw.io (gratuito, sin cuenta) o Lucidchart.',
        'Crea swimlanes para cada responsable de tu proceso de Sesión 1.',
        'Coloca inicio, tareas, compuertas, flechas, fin — en su carril correspondiente.',
        'Etiqueta cada compuerta con sus salidas y exporta como PDF.',
      ],
      cuaderno: {
        titulo: 'BPMN de mi proceso',
        formato: 'Pantallazo del diagrama + checklist marcada + 1 línea sobre lo más difícil',
        extension: '1 página de cuaderno con el diagrama',
      },
      criterios: [
        'Título y swimlanes presentes',
        'Inicio y fin únicos',
        'Tareas con verbo + objeto',
        'Compuertas con salidas etiquetadas',
        'Exportado como PDF',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Prueba de legibilidad ciega',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Entrega tu BPMN a un compañero que no conozca tu proceso, sin explicación.',
        'El compañero debe describir qué hace el proceso, identificar inicio, fin, decisiones y responsables.',
        'Anota qué entendió bien y qué necesitó preguntar.',
        'Corrige tu diagrama con base en sus preguntas.',
      ],
      cuaderno: {
        titulo: 'Auditoría cruzada con [nombre]',
        formato: 'Lo que entendió + lo que preguntó + 1-3 cambios aplicados',
        extension: '1 evaluación cruzada',
      },
      criterios: [
        'El compañero recibió el diagrama sin explicación previa',
        'Anoté qué entendió y qué necesitó preguntar',
        'Apliqué al menos 1 cambio basado en sus preguntas',
        'Reconozco la diferencia entre "yo lo entiendo" y "es legible"',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica BPMN básico',
      instrucciones:
        '5 preguntas para confirmar que usas BPMN con rigor profesional. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Qué símbolo se usa para representar una decisión "sí/no"?',
          opciones: ['Círculo', 'Rectángulo', 'Rombo', 'Flecha'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Correcto. Rombo = compuerta = decisión. Debe tener 2+ salidas etiquetadas.',
          feedbackIncorrecto:
            'El rombo. Cada compuerta debe etiquetar sus salidas para que el lector siga la rama correcta.',
        },
        {
          enunciado: 'Una tarea se nombra "factura". ¿Qué problema tiene?',
          opciones: [
            'Es muy corta',
            'Es un sustantivo: las tareas se nombran con verbo + objeto ("emitir factura")',
            'No tiene problema',
            'Falta el responsable',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Verbo + objeto. "Emitir factura", "verificar factura", "archivar factura" son tareas distintas que un sustantivo solo no distingue.',
          feedbackIncorrecto:
            'Las tareas se nombran con verbo + objeto. Un sustantivo solo es ambiguo: no se sabe qué acción se ejecuta sobre él.',
        },
        {
          enunciado: '¿Para qué sirven los swimlanes?',
          opciones: [
            'Para hacer el diagrama más bonito',
            'Para agrupar tareas por responsable y mostrar quién hace qué',
            'Son obligatorios siempre',
            'No sirven',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Los swimlanes muestran la división del trabajo entre roles. Si hay un solo responsable no son necesarios; si hay más, son obligatorios para legibilidad.',
          feedbackIncorrecto:
            'Agrupan por responsable. Sin swimlanes, un proceso con 3 actores se vuelve ilegible aunque el flujo sea correcto.',
        },
        {
          enunciado: '¿Qué hace que un BPMN sea "profesional" vs "dibujito"?',
          opciones: [
            'Que esté hecho en computador',
            'Que use el estándar correctamente y sea legible para alguien sin explicación',
            'Que sea grande',
            'Que tenga colores',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. Estándar + legibilidad ciega. Un BPMN profesional puede leerlo cualquier consultor del mundo sin tu ayuda.',
          feedbackIncorrecto:
            'Estándar + legibilidad. La herramienta es lo de menos; lo que importa es que cumple las reglas y se entiende sin explicación.',
        },
        {
          enunciado: 'En el saber ancestral de las recetas, ¿qué aplica a BPMN?',
          opciones: [
            'Nada — son tecnologías distintas',
            'Las recetas son diagramas de flujo antiguos: BPMN les puso alfabeto común',
            'Que las recetas son obsoletas',
            'Que cocinar no es proceso',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. La cocinera diagrama mentalmente; el ingeniero lo dibuja en BPMN. Mismo oficio, distinto medio.',
          feedbackIncorrecto:
            'Las recetas son flujos heredados. BPMN solo agregó el lenguaje compartido para que el flujo viaje entre profesionales.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana, toma una receta familiar y diagrámala en BPMN en draw.io con swimlanes (cocinero, ayudante, comensal), decisiones ("¿hay yuca?") y eventos.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo lenguaje técnico decide quién entra a la conversación y quién queda fuera por desconocer el alfabeto.',
      preguntaEspejo:
        '¿Puedo explicar mi BPMN a la cocinera real de la fonda o al maestro carpintero real del taller en su lenguaje, o solo lo entienden los "del oficio digital"?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Aprender el estándar es aceptar que el oficio es más grande que tu preferencia.',
      preguntaEspejo:
        '¿Resistí la tentación de inventar mi propio lenguaje y acepté el estándar profesional? ¿Qué libertad gano al hablar la lengua que todos hablan?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los estándares de notación son la infraestructura invisible de toda economía digital colaborativa.',
      preguntaEspejo:
        '¿Cuántas conversaciones profesionales futuras (con un consultor, un ingeniero, un emprendedor) dependerán de que comparta el lenguaje BPMN? ¿Cuánto me cuesta no aprenderlo bien ahora?',
    },
  },

  cincoDimensiones: {
    personal:
      'Aprendiste un lenguaje profesional usado en cualquier carrera con procesos. Es ventaja transferible al primer empleo o al primer emprendimiento.',
    emocional:
      'Aceptaste el estándar en lugar de inventar el tuyo. Esa humildad es virtud profesional contra el ego del autodidacta.',
    ciudadana:
      'Los procesos públicos también se diagraman en BPMN. Saber leerlos te permite criticar trámites con vocabulario, no con queja.',
    local:
      'La cocinera, el carpintero, el tejedor Wayuu — todos manejaban flujos heredados. BPMN traduce esa sabiduría al diálogo profesional.',
    intergeneracional:
      'Lo que la abuela transmitía oralmente, tú lo diagramas en software. Mismo gesto, distinto medio — y ahora viaja al mundo.',
  },
};

export default contenido;
