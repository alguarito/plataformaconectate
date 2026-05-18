/**
 * Contenido enriquecido para Grado 10 · Período 2 · Sesión 4
 * (sesión global 14).
 *
 * Auto-generado desde content/guias/10/10-2-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 10,
  periodo: 2,
  sesion: 4,
  titulo: 'Markdown — el formato del oficio digital portable',
  resumen: 'Markdown es un lenguaje de marcado ligero creado por John Gruber en 2004.',
  duracionMin: 90,
  subtema: 'Markdown — el formato del oficio digital portable',
  preLectura: {
    porQueImporta: 'Lo que sigue resume qué entregas hoy: documento .md + PDF + HTML + comparación con Word.',
    preguntaDetonante: '¿Qué sabía el sastre al usar patrón estandarizado para clientes distintos, que el novato olvida cuando guarda su escritura solo en formato Word? ¿Y por qué Markdown es el patrón estándar del oficio digital aunque no se vea tan elegante como Word a primera vista?',
    activacion: {
      titulo: 'Tu primer Markdown',
      descripcion: 'Actividad 1 · IDENTIFICA — Tu primer Markdown (15 min · individual con dispositivo).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy aprendes Markdown como alternativa portable.',
      siguiente: 'En la sesión 5 vas a aprender a hacer encuestas con phronesis usando Google Forms más IA para detectar preguntas sesgadas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Markdown',
      definicion: 'Lenguaje de marcado ligero creado en 2004. Escribes texto plano con símbolos simples que se convierten a formato visual rico.',
      ejemplo: 'Escribes ** para negrita y # para título. Un conversor traduce los símbolos a formato real al exportar.',
      emoji: '📝'
    },
    {
      termino: 'Portabilidad',
      definicion: 'Propiedad clave de Markdown. El mismo archivo .md se convierte a PDF, HTML, libro o presentación sin perder estructura.',
      ejemplo: 'Escribes una vez en .md y exportas a tres formatos distintos para Slack, blog y PDF impreso.',
      emoji: '🔌'
    },
    {
      termino: 'Encabezados con',
      definicion: 'Sintaxis para títulos. # equivale a H1, ## a H2, ### a H3. Cuantos más #, más profundo el nivel jerárquico.',
      ejemplo: '# Capítulo 1 → título grande. ## 1.1 Apertura → subtítulo. Estructura jerárquica visible.',
      emoji: '🏷️'
    },
    {
      termino: 'Listas y énfasis',
      definicion: '- o * para listas no ordenadas; 1. 2. 3. para ordenadas; *cursiva* o **negrita** para énfasis.',
      ejemplo: '- Punto A, - Punto B. **Importante**: la lista usa - al inicio de cada línea, no en cualquier lugar.',
      emoji: '📌'
    },
    {
      termino: 'Editor portable',
      definicion: 'Programa que entiende Markdown. Gratuitos: StackEdit y Dillinger en web; Obsidian y VS Code en escritorio.',
      ejemplo: 'Abres VS Code, creas archivo .md, escribes con sintaxis Markdown, exportas a HTML o PDF.',
      emoji: '🖥️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Escribes en Markdown como profesional?',
      instrucciones: '5 preguntas para verificar la sintaxis básica.',
      preguntas: [
        {
          enunciado: '¿Para qué sirve "# Título"?',
          opciones: [
            'Para un comentario',
            'Para un encabezado H1',
            'Para borrar texto',
            'Para hacer negrita'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Un # equivale a H1, ## a H2, ### a H3. Define la jerarquía.',
          feedbackIncorrecto: '# crea encabezado H1. Más # bajan el nivel: ## H2, ### H3.'
        },
        {
          enunciado: '¿Cómo se hace negrita en Markdown?',
          opciones: [
            '$$texto$$',
            '**texto**',
            '___texto___',
            '<b>texto</b>'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. **texto** produce negrita en Markdown estándar.',
          feedbackIncorrecto: 'Se usa **texto**. Dos asteriscos a cada lado, sin espacios.'
        },
        {
          enunciado: '¿Cuál es la mayor ventaja de Markdown frente a Word?',
          opciones: [
            'Es más bonito',
            '',
            'Es de pago',
            'No tiene ventajas'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Portabilidad: el mismo archivo soporta múltiples salidas sin reescribir el contenido.',
          feedbackIncorrecto: 'Su mayor ventaja es la portabilidad. El mismo archivo .md se convierte a PDF, HTML, libro o presentación.'
        },
        {
          enunciado: '¿Cuál de estos editores entiende Markdown y es gratuito?',
          opciones: [
            'Photoshop',
            'VS Code',
            'Excel',
            'WhatsApp'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. VS Code es gratuito y soporta Markdown nativamente con vista previa.',
          feedbackIncorrecto: 'VS Code es gratuito y soporta Markdown. También StackEdit, Dillinger y Obsidian.'
        },
        {
          enunciado: '¿Quién creó Markdown y cuándo?',
          opciones: [
            'Microsoft, 1995',
            'John Gruber, 2004',
            'Google, 2010',
            'Anonymous, 2020'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. John Gruber lo creó en 2004 con filosofía de simplicidad y portabilidad.',
          feedbackIncorrecto: 'John Gruber, 2004. Filosofía: texto plano que se convierte automáticamente a formato visual.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy aprendiendo Markdown como acto de libertad profesional, o lo veo como complicación innecesaria?',
    transferencia: 'En la sesión 5 vas a aprender a hacer encuestas con phronesis usando Google Forms más IA para detectar preguntas sesgadas.',
    cierre: 'Al terminar podrás: (1) identificar los 8 elementos básicos de Markdown y cuándo usar cada uno; (2) explicar con tus palabras qué diferencia hay entre escribir en Markdown y en Word/Docs en términos de portabilidad; (3) aplicar la sintaxis Markdown para producir un documento prof…'
  },
  saberAncestral: {
    saber: 'En las sastrerías del centro de Cartago, en los talleres de costura del barrio Obrero, hay un secreto del oficio que separa al sastre profesional del aficionado: el uso de patrón estandarizado. Cuando llega un cliente a hacerse un saco, el sastre no improvisa cortes a ojo. Toma del cajón el patrón base de saco (papel manila grueso, con líneas precisas, calculado matemáticamente). Lo coloca sobre la tela del cliente, ajusta para la talla específica, marca con tiza, corta. El mismo patrón base sirve para 100 clientes distintos: cambia la tela, cambia el ajuste, pero la estructura permanece. Si el sastre intentara coser cada saco improvisando, cada pieza saldría desproporcionada, mal calzada, distinta. El patrón estandarizado da portabilidad: el oficio se puede transmitir, repetir, escalar. Esa práctica ancestral del sastre tiene equivalente en el oficio digital: se llama Markdown. Es el patrón estándar de la escritura digital, que permite que el mismo archivo se convierta a PDF, HTML, libro, presentación, sin perder estructura.',
    preguntaPuente: '¿Qué sabía el sastre al usar patrón estandarizado para clientes distintos, que el novato olvida cuando guarda su escritura solo en formato Word? ¿Y por qué Markdown es el patrón estándar del oficio digital aunque no se vea tan elegante como Word a primera vista?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Los estándares abiertos liberan al usuario; los formatos cerrados dependen de la empresa que los controla.',
      preguntaEspejo: '¿Estoy aprendiendo Markdown como acto de libertad profesional, o lo veo como complicación innecesaria?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'Lo simple es virtud; la complicación innecesaria es vicio del que prefiere lo difícil por orgullo.',
      preguntaEspejo: '¿Estoy apreciando la simplicidad de Markdown, o lo rechazo porque parece demasiado básico?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Los formatos abiertos son la nueva ética informacional en la era del control corporativo de datos.',
      preguntaEspejo: '¿Estoy contribuyendo a la cultura de formatos abiertos, o sostengo el control corporativo de mis archivos?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar los 8 elementos básicos de Markdown y cuándo usar cada uno; (2) explicar con tus palabras qué diferencia hay entre escribir en Markdown y en Word/Docs en términos d…',
    emocional: 'Markdown puede parecer demasiado simple comparado con Word.',
    ciudadana: 'Word es propiedad de Microsoft; si Microsoft cambia el formato, tus documentos viejos pueden quedar inservibles.',
    local: 'Antes de cerrar, mira Markdown desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, las grandes corporaciones controlan formatos (Word, Photoshop, PowerPoint).'
  }
};

export default contenido;
