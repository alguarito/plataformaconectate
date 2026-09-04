/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/7/7-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 6,
  titulo: 'Condicionales — el si... entonces de los algoritmos',
  resumen: 'Un condicional (o estructura selectiva) es un componente fundamental de la programación que permite ejecutar una acción solo SI se cumple cierta condición.',
  duracionMin: 90,
  subtema: 'Condicionales — el si... entonces de los algoritmos',
  preLectura: {
    porQueImporta: 'El producto es algoritmo + diagrama + tabla de operadores.',
    preguntaDetonante: 'Cada mañana tu mamá te dice: "si llueve, llevas paraguas. Si no, no." ¿Cuántas decisiones de este tipo tomas tú al día sin darte cuenta? ¿5? ¿20? ¿100?',
    activacion: {
      titulo: 'Decisiones de tu día',
      descripcion: 'Actividad 1 · IDENTIFICA — Decisiones de tu día (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: identificas decisiones en situaciones reales, aprendes la estructura + operadores, escribes algoritmo con 3 condicionales, dibujas el diagrama.',
      siguiente: 'Esta semana, anota 3 condicionales reales de tu vida (decisiones que tomaste con la estructura SI-ENTONCES).'
    }
  },
  conceptosClave: [
    {
      termino: 'Condicional',
      definicion: 'Estructura que ejecuta una acción SI se cumple una condición. La estructura básica es \'SI [condición] ENTONCES [acción 1] SI NO [acción 2]\'. Componente fundamental de toda programación.',
      ejemplo: 'SI hace frío ENTONCES uso chaqueta. SI NO, uso solo camiseta. La condición es \'hace frío\'; la acción 1 es \'usar chaqueta\'; la acción 2 es \'usar solo camiseta\'.',
      emoji: '🔀'
    },
    {
      termino: 'Operadores de comparación',
      definicion: 'Los 6 símbolos básicos para escribir condiciones: = (igual a), ≠ (distinto), > (mayor), < (menor), ≥ (mayor o igual), ≤ (menor o igual). Comparan dos valores y dan resultado verdadero o falso.',
      ejemplo: 'edad ≥ 18 → ¿la edad es mayor o igual a 18? Si edad = 13, la respuesta es falso. Si edad = 25, la respuesta es verdadero. Ese resultado decide el camino del condicional.',
      emoji: '⚖️'
    },
    {
      termino: 'Estructura SI-ENTONCES-SI NO',
      definicion: 'Forma completa del condicional. Si la condición es verdadera, se ejecuta acción 1. Si es falsa, se ejecuta acción 2. Siempre se ejecuta alguna (no se quedan \'casos sueltos\').',
      ejemplo: 'SI hay sol ENTONCES uso gafas. SI NO, no las uso. Si está soleado, gafas. Si está nublado, sin gafas. El algoritmo siempre decide algo.',
      emoji: '🔂'
    },
    {
      termino: 'Condicional anidado',
      definicion: 'Un condicional dentro de otro. Útil cuando una decisión depende de la anterior. Ejemplo: SI luz=verde, seguir. SI NO, SI luz=amarillo, disminuir. SI NO, detenerse. Útil para más de 2 caminos.',
      ejemplo: 'Semáforo: 3 estados. SI verde → seguir. SI NO (no es verde) → SI amarillo → disminuir. SI NO (no es amarillo, así que es rojo) → detenerse. Anidación clásica.',
      emoji: '🌲'
    },
    {
      termino: 'Rombo del diagrama de flujo',
      definicion: 'En el diagrama de flujo, cada condicional se representa con un rombo. Adentro va la condición (pregunta). De él salen 2 flechas etiquetadas SÍ y NO, cada una hacia una acción distinta.',
      ejemplo: 'Rombo con \'¿llueve?\' adentro. Flecha SÍ va a rectángulo \'llevar paraguas\'. Flecha NO va a rectángulo \'no llevarlo\'. Ambas siguen al siguiente paso del algoritmo.',
      emoji: '◇'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes usar condicionales?',
      instrucciones: '5 preguntas para verificar que dominas la estructura y los operadores.',
      preguntas: [
        {
          enunciado: '¿Cuál es la estructura básica de un condicional?',
          opciones: [
            'REPITE [acción] HASTA [condición].',
            'SI [condición] ENTONCES [acción 1] SI NO [acción 2].',
            'GUARDA [valor] EN [variable].',
            'MUESTRA [resultado].'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. SI-ENTONCES-SI NO. La condición es verdadera o falsa. Verdadera → acción 1. Falsa → acción 2. Estructura universal en programación.',
          feedbackIncorrecto: 'SI [condición] ENTONCES [acción 1] SI NO [acción 2]. La condición decide cuál acción se ejecuta. Componente fundamental de toda programación.'
        },
        {
          enunciado: 'Tu algoritmo dice \'SI edad ≥ 13 ENTONCES mostrar bienvenida\'. ¿Qué operador es \'≥\'?',
          opciones: [
            'Mayor o igual a.',
            'Igual a.',
            'Distinto a.',
            'Menor que.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. ≥ es \'mayor o igual a\'. Si edad es 13, 14, 15, ... la condición es verdadera. Si edad es 12 o menos, falsa. Útil para \'desde tal edad\'.',
          feedbackIncorrecto: '≥ = \'mayor o igual a\'. Incluye el valor exacto. Si edad ≥ 13, edades válidas: 13, 14, 15... Si fuera > 13 (sin igual), solo desde 14.'
        },
        {
          enunciado: 'Tu condicional dice \'SI nombre = María\'. ¿Qué falla?',
          opciones: [
            'Nada.',
            'Hay que escribir el nombre en mayúsculas.',
            'Falta poner María entre comillas: \'SI nombre = "María"\' (texto va entre comillas).',
            'El nombre debería ser número.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Texto entre comillas. Sin comillas, programa cree que \'María\' es otra variable. Con comillas, sabe que es texto literal a comparar.',
          feedbackIncorrecto: 'Texto entre comillas: nombre = \'María\'. Sin comillas, programa busca una variable llamada María, no compara con el texto María.'
        },
        {
          enunciado: 'Tu algoritmo necesita decidir entre 3 opciones según el semáforo. ¿Cómo lo escribes?',
          opciones: [
            'Un solo condicional simple.',
            '10 condicionales separados.',
            'Sin condicionales.',
            'Condicionales anidados: SI verde ENTONCES seguir. SI NO, SI amarillo ENTONCES disminuir. SI NO ENTONCES detenerse.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Para 3 opciones: anidación. SI verde → SI NO SI amarillo → SI NO (rojo). Estructura escalonada. Clásico ejemplo del semáforo.',
          feedbackIncorrecto: 'Anidación: SI verde ENTONCES seguir. SI NO (no es verde), SI amarillo ENTONCES disminuir. SI NO (no es ni verde ni amarillo, es rojo) ENTONCES detenerse.'
        },
        {
          enunciado: 'En un diagrama de flujo, ¿qué símbolo representa un condicional?',
          opciones: [
            'Rectángulo.',
            'Óvalo.',
            'Rombo (con 2 flechas SÍ/NO saliendo).',
            'Paralelogramo.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Rombo para condicionales. Adentro la pregunta, 2 flechas saliendo etiquetadas SÍ y NO. Cada flecha lleva a una acción distinta.',
          feedbackIncorrecto: 'Rombo. La pregunta adentro, 2 flechas saliendo: SÍ y NO. Cada flecha a una acción distinta. Es lo aprendido en S4.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuáles son las condicionales éticas que rigen mis decisiones diarias? ¿Las he hecho explícitas?',
    transferencia: 'Esta semana, anota 3 condicionales reales de tu vida (decisiones que tomaste con la estructura SI-ENTONCES).',
    cierre: 'Al terminar la clase: (1) podrás identificar la estructura si-entonces-si no; (2) sabrás aplicar los 6 operadores de comparación; (3) podrás evaluar si un condicional está bien escrito; (4) habrás creado un algoritmo con 3 condicionales + diagrama.'
  },
  saberAncestral: {
    saber: 'Doña Mercedes, la abuela cocinera de Cartago, decidía el almuerzo de cada día con un algoritmo de cabeza. Cuando llegaba al mercado del barrio, hacía decisiones rápidas: "¿Hay tomate fresco? Si sí, hago sancocho. Si no, hago arroz con lentejas". Después: "¿Es viernes? Si sí, pescado. Si no, lo que se decidió antes". Después: "¿Tengo presupuesto extra? Si sí, agrego carne. Si no, vegetariano hoy". Cada decisión seguía una estructura simple: "SI tal cosa, ENTONCES tal acción; SI NO, otra acción". Así doña Mercedes resolvía cada día el menú en 2 minutos en el mercado, sin paralizarse. Esa estructura — si... entonces... si no — es exactamente el condicional en programación. Las abuelas cocineras, los albañiles que decidían si un mes era invierno o no, los pescadores que escogían si salir al río o no según el clima: todos usaban condicionales sin saberlo.',
    preguntaPuente: 'Cada mañana tu mamá te dice: "si llueve, llevas paraguas. Si no, no." ¿Cuántas decisiones de este tipo tomas tú al día sin darte cuenta? ¿5? ¿20? ¿100?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la decisión ética)',
      lente: 'lente del nosotros',
      cita: '"Toda decisión es un condicional. SI quiero ser justo, ENTONCES debo escuchar. La vida ética es algoritmo aplicado."',
      preguntaEspejo: '¿Cuáles son las condicionales éticas que rigen mis decisiones diarias? ¿Las he hecho explícitas?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"El sabio no decide por impulso. Pregunta: SI hago esto, ¿qué pasa? SI no, ¿qué pasa? Y elige con criterio."',
      preguntaEspejo: 'Antes de tomar decisiones importantes, ¿hago el ejercicio mental del condicional (SI esto, entonces tal; SI no, tal otro)?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del algoritmo decisor)',
      lente: 'lente de la infoesfera',
      cita: '"Los algoritmos modernos toman decisiones por nosotros: qué video ver, qué amigo recomendar. Entender los condicionales es entender cómo deciden esos algoritmos."',
      preguntaEspejo: '¿Qué algoritmos invisibles me afectan cada día? ¿Sé al menos que existen?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la estructura si-entonces-si no; (2) sabrás aplicar los 6 operadores de comparación; (3) podrás evaluar si un condicional está bien escrito; (4) habrás cre…',
    emocional: 'Marco Aurelio gobernaba un imperio.',
    ciudadana: 'Las decisiones éticas también son condicionales: "SI mi amigo necesita ayuda, ENTONCES la ofrezco", "SI veo una injusticia, ENTONCES no callo".',
    local: 'Antes de salir, verifica que cada condicional tiene su SI NO.',
    intergeneracional: 'Cuando TikTok te recomienda un video, está ejecutando algoritmos con millones de condicionales (SI le gustaron videos similares, ENTONCES recomendar este).'
  }
};

export default contenido;
