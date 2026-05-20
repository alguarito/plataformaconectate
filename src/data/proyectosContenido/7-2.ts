/**
 * Contenido web del proyecto integrador · Grado 7 · Período 2
 *
 * Auto-generado desde content/proyectos/7-2.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 7,
  periodo: 2,
  clave: '7-2',
  titulo: 'Proyecto integrador · Tejedoras digitales: mi primer programa con criterio',
  tituloPortada: 'Tejedoras digitales — mi primer programa',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Aplica las técnicas del pensamiento computacional (descomposición, patrones, abstracción, algoritmo) para producir un programa en Scratch con variables, condicionales y bucles, documentando el proceso (MEN, T&I 7°).',
  estrategia: 'Trabajo en equipo + producto programado + reflexión ética',
  duracionSemanas: 5,
  modalidad: 'equipo de 3',
  reto: 'Tu equipo de 3 estudiantes se convierte en tejedoras digitales del salón: produce un programa real en Scratch (juego, narrativa interactiva o simulación) que use secuencia + repetición + condicionales + variables con criterio. El programa se acompaña de un diagrama de flujo en cuaderno y un instructivo de uso para que cualquier compañero pueda usarlo. Todo aplicando los 10 aprendizajes del periodo 2.',
  insumos: [
    'Cuaderno físico de cada integrante con sus 10 sesiones del periodo 2',
    'Acceso a Scratch (scratch.mit.edu) en navegador o aplicación offline',
    'Cuenta de Scratch del equipo o de un integrante (para guardar el proyecto en línea)',
    'Hojas y marcadores para el diagrama de flujo a mano',
    'Acceso a Outlook o correo institucional para enviar el enlace al profe',
    'Acuerdo de equipo sobre el tipo de programa (juego/narrativa/simulación) firmado por los 3'
  ],
  anclaje: 'Doña Sofía la tejedora del Valle no improvisaba: seguía un algoritmo. Empezaba con 8 hebras cruzadas (paso 1), pasaba la hebra de la derecha sobre 2 y por debajo de la siguiente (paso 2 que se repite), contaba hasta 12 puntos (condicional: si llegó, cambio), y volvía al patrón. Secuencia + repetición + condicionales + variables. Tu equipo de 3 traslada hoy esa misma sabiduría a Scratch: planea con diagrama, descompone en piezas, busca patrones, y teje un programa que cumpla su propósito. La herramienta es nueva; el oficio es antiguo.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'Apertura: las tejedoras como primeras programadoras'
    },
    {
      sesion: 2,
      titulo: '¿Qué es un algoritmo? Receta vs programa'
    },
    {
      sesion: 3,
      titulo: 'Pensamiento computacional: descomposición, patrones, abstracción, algoritmo'
    },
    {
      sesion: 4,
      titulo: 'Diagramas de flujo'
    },
    {
      sesion: 5,
      titulo: 'Variables: cajas con etiqueta'
    },
    {
      sesion: 6,
      titulo: 'Condicionales si... entonces'
    },
    {
      sesion: 7,
      titulo: 'Bucles: repeticiones'
    },
    {
      sesion: 8,
      titulo: 'Scratch: primer programa con movimiento'
    },
    {
      sesion: 9,
      titulo: 'Scratch: narrativa interactiva'
    },
    {
      sesion: 10,
      titulo: 'Cosecha: proyecto programado completo'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Plan + diagrama de flujo del programa en cuaderno (Dussel)',
      queEntregas: 'Una página de cuaderno por integrante con el plan completo y el diagrama de flujo del programa que el equipo va a hacer. Contiene: (a) idea del programa (juego, narrativa o simulación) en 2-3 líneas; (b) descomposición en 4-6 piezas (personajes, escenas, mecánica, datos); (c) patrones detectados (qué se repite, qué cambia); (d) abstracción (qué es lo esencial y qué es secundario); (e) diagrama de flujo en la siguiente página, con óvalo inicio/fin, rectángulos de proceso, rombos de decisión, flechas; (f) lista de variables y condicionales esperados.',
      comoSeHace: [
        'Paso 1: el equipo decide juntos el tipo de programa (juego sencillo / narrativa interactiva / simulación de minga).',
        'Paso 2: aplican las 4 técnicas del pensamiento computacional en cuaderno por separado (cada uno escribe en su cuaderno).',
        'Paso 3: comparan los 3 cuadernos; eligen la mejor descomposición y diagrama de flujo del equipo.',
        'Paso 4: redactan en limpio el plan elegido en la página de cuaderno de cada integrante (mismo plan, voz propia).',
        'Paso 5: cada cuaderno tiene firma del integrante + sello del equipo.'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: '💭 Cada cabeza piensa distinto: la diversidad enriquece (Dussel)',
        consigna: 'En el plan de cuaderno, los 3 integrantes escriben juntos un párrafo de 3 líneas: "Como tejedoras digitales del salón, descomponemos el problema desde 3 cabezas distintas. Tu cabeza vio cosas que yo no vi, y al revés. La diversidad de nuestros 3 puntos de vista hace el programa más rico que el de uno solo. Ninguna idea sobra; ninguna voz se silencia.". Queda escrito en cada cuaderno.'
      },
      criterios: [
        'Los 3 cuadernos tienen las 6 partes del plan (idea, descomposición, patrones, abstracción, diagrama, variables/condicionales).',
        'El diagrama de flujo usa las figuras correctas (óvalo, rectángulo, rombo) con flechas.',
        'El plan está firmado por los 3 con sello del equipo.',
        'Los cuadernos coinciden en el plan elegido (no son planes distintos).',
        'El párrafo Dussel está visible en los cuadernos.'
      ]
    },
    {
      numero: 2,
      titulo: 'Programa funcional en Scratch (Estoico)',
      queEntregas: 'Un programa en Scratch publicado en línea (o exportado como archivo .sb3) que cumpla el plan del entregable 1. Debe tener: (a) al menos 2 personajes/objetos; (b) al menos 2 escenas/fondos; (c) al menos 2 variables con nombre claro; (d) al menos 2 condicionales con la estructura si... entonces... si no...; (e) al menos 2 bucles (repetir N veces o por siempre o repetir hasta); (f) un comportamiento que responde al usuario (clic, tecla, movimiento). El programa se prueba y funciona sin errores graves.',
      comoSeHace: [
        'Paso 1: un integrante crea el proyecto en Scratch (cuenta del equipo o de un integrante) siguiendo el plan del entregable 1.',
        'Paso 2: programan por piezas (descomposición) en lugar de todo de golpe; prueban cada pieza antes de seguir.',
        'Paso 3: revisan que las variables tengan nombre claro, los condicionales tengan propósito y los bucles no estén anidados sin sentido.',
        'Paso 4: prueban el programa de principio a fin con un usuario externo (compañero del salón, hermano, mamá). Anotan qué se entiende y qué confunde.',
        'Paso 5: ajustan según los problemas detectados y publican o exportan la versión final.'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: '💭 El código que escribes hoy se descose o perdura (Marco Aurelio)',
        consigna: 'En el escenario inicial del programa (texto o globo de diálogo del personaje principal), incluyan en 2-3 líneas: "Marco Aurelio decía: lo que escribes hoy queda. Este programa fue tejido con paciencia y claridad: variables con nombre, bucles con propósito, condiciones sin duplicar. Quien revise el código adentro entiende lo que hicimos.". O escriban este texto en los créditos del proyecto.'
      },
      criterios: [
        'El programa tiene los 6 requisitos (2 personajes/objetos, 2 escenas, 2 variables, 2 condicionales, 2 bucles, interacción con usuario).',
        'Funciona de principio a fin sin errores graves al ejecutarse.',
        'Las variables tienen nombre claro (no x, y, cosa).',
        'El programa fue probado por al menos 1 usuario externo al equipo.',
        'El párrafo estoico está visible en el programa (escenario o créditos).'
      ]
    },
    {
      numero: 3,
      titulo: 'Instructivo de uso del programa (Floridi)',
      queEntregas: 'Un instructivo de uso de 1 página (Word, Google Docs o cartulina) para que cualquier compañero del salón pueda usar el programa sin que el equipo esté presente. Contiene: (a) título y autores; (b) qué es el programa (1-2 líneas); (c) cómo se inicia (paso a paso para abrirlo); (d) cómo se juega/usa (controles: clics, teclas, movimientos); (e) qué se espera del usuario; (f) qué hace el programa internamente en lenguaje sencillo (variables, condiciones, bucles); (g) enlace al proyecto (URL o nombre del archivo .sb3).',
      comoSeHace: [
        'Paso 1: un integrante redacta el instructivo en Word/Docs siguiendo las 7 partes en orden.',
        'Paso 2: los otros 2 lo leen y prueban el programa siguiendo SOLO lo que dice el instructivo (sin ayuda verbal).',
        'Paso 3: anotan lo que confunde y se ajusta el instructivo.',
        'Paso 4: piden a 1 compañero externo del salón usar el programa siguiendo solo el instructivo.',
        'Paso 5: ajustan según problemas detectados y entregan la versión final al profe por Outlook con el enlace del programa.'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: '💭 Tu programa entra a la infoesfera (Floridi)',
        consigna: 'En la última sección del instructivo (o como cierre destacado), escriban: "Luciano Floridi dice que en la infoesfera no solo recibes información: también la produces. Este programa es lo que nuestro equipo de 7° aporta a la conversación digital: una pequeña obra que cualquiera puede usar siguiendo este instructivo. Aportamos claridad, no ruido.". Queda visible en el instructivo.'
      },
      criterios: [
        'El instructivo tiene las 7 partes pedidas.',
        'Un compañero externo logró usar el programa SOLO con el instructivo, sin ayuda verbal.',
        'Las instrucciones son claras (sin frases ambiguas como "hace cosas chéveres").',
        'Incluye enlace al proyecto en Scratch (URL o nombre del archivo .sb3).',
        'El párrafo Floridi está visible en el instructivo.'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación de equipo y autoevaluación (transversal)',
      queEntregas: 'Sustentación oral de 5 minutos en clase donde el equipo presenta los 3 entregables al profe y al grupo: muestra el plan + diagrama (cuaderno), demuestra el programa funcionando (proyector o pantalla compartida), explica el instructivo. Los 3 integrantes hablan. Después: autoevaluación honesta con la rúbrica de 5 criterios.',
      comoSeHace: [
        'Paso 1: armar guion de 5 minutos: 1 min introducción (qué es el programa), 1 min proceso (descomposición + diagrama), 2 min demo del programa funcionando, 1 min cierre + aprendizajes.',
        'Paso 2: ensayar al menos 1 vez con cronómetro.',
        'Paso 3: presentar ante profe y compañeros con el programa proyectado.',
        'Paso 4: después, autoevaluarse en equipo con la rúbrica.',
        'Paso 5: cada integrante escribe 4 líneas de reflexión personal en su cuaderno.'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: '💭 Cierre del equipo: cosecha del periodo 2',
        consigna: 'Cada integrante escribe en su cuaderno 4 líneas: "Mi mayor aprendizaje siendo tejedora digital fue ___. Lo que más me costó del programa fue ___. El concepto del periodo que voy a sostener es ___. Le doy gracias a mi equipo por ___.". Firmado.'
      },
      criterios: [
        'Los 3 integrantes hablaron durante la sustentación.',
        'Los 5 minutos se respetaron (entre 4:30 y 5:30).',
        'El programa se demostró funcionando en vivo.',
        'Hay autoevaluación honesta con la rúbrica.',
        'Cada integrante escribió sus 4 líneas de reflexión personal.'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: '3 cuadernos con las 6 partes del plan + diagrama correcto + firmados + párrafo Dussel visible.',
      nivel3: 'Cuadernos casi completos, pero falta alguna parte (patrones, abstracción) o el diagrama tiene figuras incorrectas.',
      nivel1: 'Plan incompleto (<4 partes) o sin diagrama de flujo o sin párrafo Dussel.'
    },
    {
      entregable: 2,
      nivel5: 'Programa con los 6 requisitos + funciona sin errores + variables con nombre claro + probado por usuario externo + párrafo estoico visible.',
      nivel3: 'Programa con 4-5 requisitos o variables mal nombradas o sin pruebas externas.',
      nivel1: 'Programa con <4 requisitos o no funciona o sin párrafo estoico.'
    },
    {
      entregable: 3,
      nivel5: 'Instructivo con las 7 partes + probado por externo + claro + con enlace + párrafo Floridi visible.',
      nivel3: 'Instructivo con 5-6 partes o sin prueba externa o sin enlace al proyecto.',
      nivel1: 'Instructivo incompleto (<5 partes) o sin párrafo Floridi.'
    },
    {
      entregable: 4,
      nivel5: 'Los 3 hablaron 5 min con demo en vivo, autoevaluación honesta, reflexión personal de cada uno.',
      nivel3: '1-2 integrantes hablaron, sustentación de 3-4 min, autoevaluación limitada.',
      nivel1: 'Solo 1 habló o no hubo sustentación o sin demo del programa.'
    },
    {
      entregable: 'global',
      nivel5: 'Las 3 lentes (Dussel + Estoico + Floridi) están visibles en los productos, no como anexo aparte.',
      nivel3: 'Las 3 lentes están pero alguna parece copiada o forzada al producto.',
      nivel1: 'Falta alguna lente o las reflexiones son superficiales.',
      titulo: 'Comunicación, sustentación e integración del triángulo'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '1 min · presentación del equipo + reto y tipo de programa',
      '1 min · proceso (descomposición + diagrama de flujo) por integrante A',
      '2 min · demo del programa funcionando por integrante B',
      '1 min · instructivo de uso + cierre + aprendizajes por integrante C'
    ]
  },
  declaracionIa: 'Este es proyecto de grado 7°. Se permite el uso de IA generativa con declaración explícita: si tu equipo usó ChatGPT, Claude o Gemini para idear el plan, sugerir bloques de Scratch o redactar el instructivo, debe declararlo en la sustentación: qué herramienta, en qué parte, cuánto editó el equipo a mano. La programación en Scratch debe ser hecha por el equipo entendiendo cada bloque. La IA puede explicar, pero no programar por ti.',
  cierre: 'Cerrando el periodo 2 de grado 7°, las tejedoras digitales dejaron obra programada. El periodo 3 te abre la puerta más nueva: vas a entender qué es la inteligencia artificial, cómo aprende, y a usarla con criterio.',
  pdf: 'proyecto-2-7-TIC.pdf'
};

export default contenido;
