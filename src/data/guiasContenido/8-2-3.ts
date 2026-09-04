/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/8/8-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 3,
  titulo: 'Algoritmos — del pseudocódigo al diagrama de flujo',
  resumen: 'Como la receta paso a paso de la abuela: cocina campesina como archivo de algoritmos heredados. Aprendes a escribir pseudocódigo claro y diagramas de flujo con símbolos ISO 5807.',
  duracionMin: 90,
  subtema: 'Algoritmos · Pseudocódigo · Diagramas de flujo',
  preLectura: {
    porQueImporta: 'Saber expresar algoritmos en pseudocódigo y diagramas te prepara para programar en CUALQUIER lenguaje. Es habilidad transferible: a Python, JavaScript, MakeCode o lo que venga después.',
    preguntaDetonante: '¿Qué de la receta paso a paso de la abuela — su disciplina narrativa — podemos llevar al pseudocódigo y al diagrama de flujo?',
    activacion: {
      titulo: 'La receta como código',
      descripcion: 'En 5 minutos: en parejas escojan una receta familiar simple (huevo perico, agua de panela, etc.) y escríbanla como pseudocódigo con palabras clave INICIO, LEER, SI, FIN.',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 12 construiste tablas de verdad para verificar lógica.',
      siguiente: 'En la sesión 14 trabajarás con sensores físicos en MakeCode.'
    }
  },
  conceptosClave: [
    {
      termino: 'Pseudocódigo',
      definicion: 'Lenguaje cercano al humano pero estructurado: usa palabras clave (SI, ENTONCES, MIENTRAS) e indentación para mostrar la lógica del algoritmo sin sintaxis estricta.',
      ejemplo: 'LEER edad. SI edad >= 18 ENTONCES MOSTRAR "mayor" SINO MOSTRAR "menor". Cualquier programador entiende qué hace.',
      emoji: '📜',
      categoria: 'Cómo se describe'
    },
    {
      termino: 'Diagrama de flujo',
      definicion: 'Representación visual del algoritmo con 4 símbolos: óvalo (inicio/fin), rectángulo (proceso), rombo (decisión), paralelogramo (entrada/salida).',
      ejemplo: 'Para calcular IMC: inicio → leer peso/altura (paralelogramo) → calcular (rectángulo) → decisión (rombo) → mostrar resultado (paralelogramo) → fin.',
      emoji: '📊',
      categoria: 'Cómo se diagrama'
    },
    {
      termino: 'Secuencia',
      definicion: 'Estructura básica de algoritmo: pasos en orden, uno tras otro. Sin orden, las recetas y algoritmos no funcionan.',
      ejemplo: 'Para sancocho: 1. Pelar plátano. 2. Cortar. 3. Cocer 30 min. El orden no se puede cambiar sin romper la receta.',
      emoji: '📍'
    },
    {
      termino: 'Decisión (selección)',
      definicion: 'Estructura que permite elegir entre 2 o más caminos según una condición. SI-ENTONCES-SINO es su forma básica.',
      ejemplo: 'SI el plátano está verde, freír. SINO, asar. La decisión cambia el camino del algoritmo.',
      emoji: '🔀'
    },
    {
      termino: 'Algoritmo en 4 estructuras',
      definicion: 'Cualquier algoritmo se construye con 4 estructuras: secuencia, decisión, repetición (bucle) y entrada/salida. Combinadas resuelven problemas complejos.',
      ejemplo: 'Algoritmo de mañana: leer alarma (E/S) + decidir levantarse (decisión) + secuencia de ducha + repetir hasta despertar (bucle).',
      emoji: '🧩'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes escribir algoritmos en pseudocódigo y diagrama?',
      instrucciones: '5 preguntas para verificar las 4 estructuras y los 4 símbolos del diagrama de flujo.',
      preguntas: [
        {
          enunciado: '¿Cuál símbolo de diagrama de flujo representa una decisión?',
          opciones: [
            'Rombo',
            'Óvalo',
            'Rectángulo',
            'Paralelogramo'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. El rombo representa decisión (con 2 salidas típicas: sí/no). El óvalo es inicio/fin; rectángulo es proceso; paralelogramo es E/S.',
          feedbackIncorrecto: 'La decisión se representa con rombo. Tiene 2 salidas (sí/no). Los otros símbolos son: óvalo (inicio/fin), rectángulo (proceso), paralelogramo (E/S).'
        },
        {
          enunciado: '¿Cuál de estas NO es una de las 4 estructuras básicas de algoritmo?',
          opciones: [
            'Secuencia',
            'Decisión',
            'Cifrado',
            'Repetición'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Las 4 estructuras son secuencia, decisión, repetición y entrada/salida. Cifrado no es estructura algorítmica básica.',
          feedbackIncorrecto: 'Las 4 son: secuencia, decisión, repetición, entrada/salida. Cifrado es otra cosa (técnica de seguridad).'
        },
        {
          enunciado: '¿Qué hace la indentación en el pseudocódigo?',
          opciones: [
            'Decoración',
            'Mostrar visualmente qué está dentro de un SI o un MIENTRAS',
            'Cambiar el orden de ejecución',
            'No tiene función'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. La indentación visualiza la jerarquía. Lo que está dentro de un SI va indentado para que se vea claro qué pertenece al bloque.',
          feedbackIncorrecto: 'La indentación muestra jerarquía. Lo que está dentro de un SI o un MIENTRAS va sangrado para distinguirlo visualmente.'
        },
        {
          enunciado: 'Receta de arepa: "pelar plátano, cortar, si está verde freír, si maduro asar". ¿Qué estructuras usa?',
          opciones: [
            'Solo secuencia',
            'Solo decisión',
            'Repetición',
            'Secuencia + decisión'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Los primeros pasos son secuencia (pelar, cortar). Después hay decisión según el estado del plátano (verde→freír, maduro→asar).',
          feedbackIncorrecto: 'Usa secuencia (pelar, cortar) Y decisión (verde→freír, maduro→asar). Las dos estructuras combinadas.'
        },
        {
          enunciado: '¿Por qué se recomienda escribir pseudocódigo ANTES de programar el código real?',
          opciones: [
            'Es trámite escolar',
            'Para que tarde más el proyecto',
            'Para que la lógica esté clara antes de luchar con la sintaxis',
            'Para confundir al programador'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. La phronesis del oficio dice: planear antes de actuar. Pseudocódigo permite pensar la lógica sin distraerse con sintaxis.',
          feedbackIncorrecto: 'Se escribe pseudocódigo para clarificar la lógica antes de la sintaxis. Pensar primero, codificar después: ahorra horas de debug.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'El pseudocódigo democratiza el código: hace que personas sin formación técnica puedan opinar sobre algoritmos. ¿Qué proceso de tu colegio sería bueno escribir como pseudocódigo para que cualquiera lo pueda revisar?',
    transferencia: 'Esta semana: elige UN proceso real (timbre, asistencia, calificaciones, cafetería) y escríbelo como pseudocódigo + diagrama de flujo. Compártelo con alguien y mejora donde haya confusión.',
    cierre: 'La receta de la abuela y el diagrama ISO comparten algo: cuando se escribe bien, cualquiera puede seguirla. La claridad del orden es ética del trabajo compartido.'
  },
  saberAncestral: {
    saber: 'En las cocinas del Valle del Cauca y en las casas de los abuelos del Pacífico, las recetas no se escribían: se transmitían. Pero cualquier abuela que enseñaba a hacer arepa o sancocho seguía un orden inquebrantable que cualquier nieto reconoce: primero esto, después aquello, si pasa esto otra cosa. "Primero pelas el plátano. Después lo cortas en rodajas. Si está verde, lo fríes. Si está maduro, lo asas. Si quedan pedazos, los muelo". La receta tiene 4 piezas silenciosas que cualquier algoritmo profesional reconocería: (1) Secuencia: el orden de los pasos importa (no se puede cortar antes de pelar). (2) Decisión: a veces hay dos caminos según una condición (verde → freír / maduro → asar). (3) Repetición: a veces hay que hacer lo mismo varias veces ("revuelve hasta que esté liso"). (4) Entrada y salida: la materia prima entra (plátano), el plato sale (frito o asado). La sabiduría de la receta ancestral es la forma natural del algoritmo: la programación moderna no inventó esta estructura, solo le dio nombres formales.',
    fuente: 'Recetas tradicionales del campo colombiano (sancocho, ajiaco, mote, chicha)',
    preguntaPuente: '¿Qué sabía la abuela al transmitir la receta del sancocho con orden estricto, que el programador novato olvida cuando salta a escribir código sin pensar el algoritmo? ¿Y por qué un diagrama de flujo bien hecho permite explicar un algoritmo a alguien que no programa?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un algoritmo claro libera al ejecutor; un algoritmo opaco lo somete a la voluntad oculta del programador.',
      preguntaEspejo: '¿Mi algoritmo es lo suficientemente claro para que otro lo modifique sin pedirme ayuda?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Planear antes de actuar es virtud del oficio; improvisar es debilidad disfrazada de espontaneidad.',
      preguntaEspejo: '¿Estoy planeando con pseudocódigo antes de actuar, o salto directo al código sin pensar?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El algoritmo claro y revisable es la nueva ética del oficio digital en la era automatizada.',
      preguntaEspejo: '¿Mi pseudocódigo permite revisar la lógica, o oculta la decisión bajo código complejo?'
    }
  },
  cincoDimensiones: {
    personal: 'Aprendiste a escribir instrucciones que cualquiera puede seguir — habilidad fundamental para enseñar, dirigir, colaborar.',
    emocional: 'Resististe la tentación de dar "instrucciones cortas" — entendiste que la claridad respeta al lector aunque al autor le tome más tiempo.',
    ciudadana: 'Exigir versiones en pseudocódigo de algoritmos que toman decisiones públicas (becas, ingresos, créditos) es ciudadanía algorítmica.',
    local: 'Heredaste el archivo de algoritmos de la cocina campesina colombiana — saberes que llevan siglos siendo ejecutados con éxito.',
    intergeneracional: 'La receta de la abuela y el diagrama de flujo ISO comparten lógica. Lo que cambia es el medio, no la ética de la claridad.'
  }
};

export default contenido;
