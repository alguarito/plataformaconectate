/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 2
 * (sesión global 12).
 *
 * Auto-generado desde content/guias/10/10-2-2.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 2,
  titulo: 'Estructura del informe técnico — introducción, desarrollo, conclusiones',
  resumen: 'La estructura del informe técnico es la herramienta más estable del oficio profesional escrito: existe desde los primeros informes científicos del siglo XVII y sigue vigente.',
  duracionMin: 90,
  subtema: 'Estructura del informe técnico — introducción, desarrollo, conclusiones',
  preLectura: {
    porQueImporta: 'El criterio principal: que cualquier docente o coordinador leyendo tu informe pueda tomar decisión con base en él.',
    preguntaDetonante: '¿Qué sabía la cocinera del Pacífico al respetar los 3 tiempos de la receta, que el novato olvida cuando escribe un informe sin estructura clara? ¿Y por qué un informe con introducción débil pierde al lector aunque el desarrollo sea brillante?',
    activacion: {
      titulo: 'Relectura crítica del informe real',
      descripcion: 'Actividad 1 · IDENTIFICA — Relectura crítica del informe real (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy implementas el primero de los 4: el informe técnico.',
      siguiente: 'Llega con tu plantilla guardada y el informe técnico aplicado.'
    }
  },
  conceptosClave: [
    {
      termino: 'Introducción',
      definicion: 'Primera sección (15-20% del informe). Presenta contexto, objetivo y alcance. Orienta al lector apurado.',
      ejemplo: '"Este informe analiza el ruido durante el recreo. Objetivo: proponer medidas a rectoría. Alcance: aulas del piso 2."',
      emoji: '🚪'
    },
    {
      termino: 'Desarrollo',
      definicion: 'Cuerpo del informe (60-70%). Aquí van metodología, datos y análisis. Se subdivide en secciones temáticas con subtítulos.',
      ejemplo: 'Mediciones en 5 horarios, tabla de decibeles por aula, comparación con norma OMS, interpretación.',
      emoji: '🔬'
    },
    {
      termino: 'Conclusiones',
      definicion: 'Última sección (15-20%). Hallazgos principales en 1-3 frases + recomendaciones accionables.',
      ejemplo: '"El ruido supera la norma en 3 aulas. Se recomienda redistribuir las pausas y aplicar paneles acústicos."',
      emoji: '🏁'
    },
    {
      termino: 'Recomendación accionable',
      definicion: 'Propuesta concreta con responsable sugerido y plazo. No "habría que mejorar"; sí "se propone X a Y antes de Z".',
      ejemplo: '"Se propone que coordinación instale 2 paneles acústicos en aulas 201 y 202 antes de junio."',
      emoji: '🎯'
    },
    {
      termino: 'Función única por sección',
      definicion: 'Cada sección cumple su rol. No se mezclan datos en la introducción ni conclusiones sin recomendaciones.',
      ejemplo: 'Si pones la metodología en las conclusiones, el lector se desorienta y el informe pierde rigor.',
      emoji: '🧩'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Dominas la estructura del informe técnico?',
      instrucciones: '5 preguntas para verificar que respetas función de cada sección.',
      preguntas: [
        {
          enunciado: '¿Qué porcentaje del informe ocupa el desarrollo?',
          opciones: [
            '10%',
            '60-70%',
            '100%',
            '5%'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. 60-70%. Es la sección más larga porque contiene metodología, datos y análisis.',
          feedbackIncorrecto: 'Son 60-70%. El desarrollo concentra el peso del informe.'
        },
        {
          enunciado: '¿Qué debe contener obligatoriamente la introducción?',
          opciones: [
            'Solo el saludo',
            'Solo conclusiones',
            'Solo bibliografía',
            'Contexto, objetivo y alcance'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Contexto, objetivo y alcance. Ese trío orienta al lector apurado.',
          feedbackIncorrecto: 'Contexto, objetivo y alcance. Sin esos tres, el lector apurado no sabe qué leer.'
        },
        {
          enunciado: '¿Cuál es la regla profesional sobre las secciones?',
          opciones: [
            'Cada sección tiene función única, no se mezcla',
            'Mezclar todo',
            'Solo escribir desarrollo',
            'Saltar conclusiones'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Función única por sección. Mezclar pierde rigor.',
          feedbackIncorrecto: 'Cada sección tiene función única. Mezclar datos en la introducción o conclusiones sin recomendaciones pierde rigor.'
        },
        {
          enunciado: '¿Qué hace una recomendación accionable?',
          opciones: [
            'Dice "habría que mejorar"',
            'Solo describe el problema',
            'Propone qué, quién y para cuándo',
            'Es opcional'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Correcto. Accionable significa qué se hace, quién lo hace y plazo concreto.',
          feedbackIncorrecto: 'Propone qué, quién y plazo. "Habría que mejorar" no es accionable; "Coordinación instala X antes de junio" sí.'
        },
        {
          enunciado: '¿Desde cuándo existe la estructura del informe técnico?',
          opciones: [
            'Siglo XVII (primeros informes científicos)',
            '',
            'Solo en TikTok',
            '1500 a.C.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Exacto. Desde el siglo XVII con los primeros informes científicos. Sigue vigente.',
          feedbackIncorrecto: 'Existe desde el siglo XVII. Es de las herramientas más estables del oficio profesional escrito.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Mi estructura sirve al lector tomador de decisiones, o le exige tiempo que no tiene?',
    transferencia: 'Llega con tu plantilla guardada y el informe técnico aplicado.',
    cierre: 'Al terminar podrás: (1) identificar qué información va en cada una de las 3 secciones obligatorias del informe técnico; (2) explicar con tus palabras la función de cada sección y qué pasa cuando se omite o se mezcla; (3) aplicar la estructura completa a un caso real del colegio e…'
  },
  saberAncestral: {
    saber: 'En cualquier cocina del Valle del Cauca, en las casas de los abuelos del Quindío y en las cocinas comunitarias del Pacífico, hay una práctica ancestral que cualquier receta seria respeta: toda preparación tiene 3 tiempos. (1) Alistamiento: antes de prender el fogón, la cocinera saca los ingredientes, los mide, los lava, los pica, los organiza por orden de uso. Sin alistamiento, el aceite se calienta sin la cebolla lista, la sal se olvida, el plato sale apurado. (2) Cocción: aquí pasa lo importante. Se sofríe, se hierve, se condimenta, se prueba, se ajusta. Es la zona más larga del proceso. (3) Servido: la cocinera prueba una última vez, ajusta sal o picante si hace falta, decora si es plato de visita, sirve. Recién entonces el plato existe para el comensal. Quien intenta cocinar saltándose el alistamiento o sin servir bien al final pierde el sabor de todo el trabajo. La receta ancestral exige los 3 tiempos en orden. La sabiduría es simple: principio que prepara, medio que cocina, fin que entrega. El informe técnico moderno hereda esa misma estructura: introducción que prepara, desarrollo que cocina, conclusiones que entregan.',
    preguntaPuente: '¿Qué sabía la cocinera del Pacífico al respetar los 3 tiempos de la receta, que el novato olvida cuando escribe un informe sin estructura clara? ¿Y por qué un informe con introducción débil pierde al lector aunque el desarrollo sea brillante?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Un informe técnico estructurado dignifica al tomador de decisiones; uno caótico lo abruma y le quita el tiempo.',
      preguntaEspejo: '¿Mi estructura sirve al lector tomador de decisiones, o le exige tiempo que no tiene?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'La disciplina de la estructura es virtud del informe; la improvisación es vicio que se nota en la confusión final.',
      preguntaEspejo: '¿Estoy respetando la estructura con disciplina, o improvisando porque parece más rápido?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El informe técnico bien estructurado es pieza de información cuidada en la era del exceso de datos.',
      preguntaEspejo: '¿Mi informe contribuye a la información cuidada, o agrega ruido al exceso ya existente?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar qué información va en cada una de las 3 secciones obligatorias del informe técnico; (2) explicar con tus palabras la función de cada sección y qué pasa cuando se om…',
    emocional: 'Es tentador escribir el informe de corrido sin pensar las secciones.',
    ciudadana: 'Quien recibe tu informe (coordinador, rector, gerente futuro) suele tener poco tiempo.',
    local: 'Antes de cerrar, mira la estructura desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los tomadores de decisiones reciben muchos informes.'
  }
};

export default contenido;
