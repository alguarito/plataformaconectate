/**
 * Contenido web del examen final · Grado 9 · Período 2
 *
 * Auto-generado desde content/examenes/9-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 9,
  periodo: 2,
  titulo: 'Examen final · Diseño editorial y maquetación',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Diseño editorial y maquetación',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué significa "diseñar" según la sesión 1?',
        opciones: [
          'Hacer cosas bonitas',
          'Ordenar elementos con jerarquía e intención para que comuniquen un mensaje al lector',
          'Pintar',
          'Programar'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Diseñar es ordenar con jerarquía e intención. Lo bonito puede surgir; lo necesario es comunicar.',
        feedbackIncorrecto: 'Diseñar es ordenar con jerarquía e intención. No es decorar; es comunicar con disciplina.'
      },
      {
        enunciado: '¿Para qué sirve una cuadrícula en diseño editorial?',
        opciones: [
          'Para decorar',
          'Para dar orden visual a la página y mantener consistencia entre páginas',
          'Para hacer la página más larga',
          'Para llenar espacio'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La cuadrícula es el primer principio del orden. Define columnas, márgenes y espacios consistentes.',
        feedbackIncorrecto: 'Orden visual y consistencia. Sin cuadrícula, cada página parece de otra revista.'
      },
      {
        enunciado: '¿Cuál de estas tipografías es típicamente más legible para cuerpos de texto largos?',
        opciones: [
          'Cursiva ornamental decorativa',
          'Sans-serif o serif clásicas (Inter, Helvetica, Georgia, Times)',
          'Solo mayúsculas',
          'Fuentes con sombras 3D'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Sans-serif limpia o serif clásica son las opciones legibles. Las decorativas se reservan para títulos.',
        feedbackIncorrecto: 'Sans-serif o serif clásica para cuerpos largos. Las decorativas cansan el ojo en lecturas extensas.'
      },
      {
        enunciado: '¿Qué relación de contraste mínima exige WCAG AA para texto?',
        opciones: [
          '1:1',
          '4.5:1 (texto normal); 3:1 (texto grande)',
          '10:1',
          'Cualquiera'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 4.5:1 para texto normal, 3:1 para texto grande. Es el estándar mínimo internacional de accesibilidad.',
        feedbackIncorrecto: '4.5:1 para texto normal, 3:1 para texto grande. Bajar de ahí excluye a personas con baja visión.'
      },
      {
        enunciado: '¿Qué función cumple el espacio en blanco en una página editorial?',
        opciones: [
          'Sobra y debe llenarse',
          'Da aire al lector, jerarquiza elementos y permite que el ojo respire',
          'Es error del diseñador',
          'No tiene función'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El espacio en blanco es funcional: jerarquiza, descansa al ojo y guía la lectura.',
        feedbackIncorrecto: 'El espacio en blanco es funcional. No es desperdicio: es aire que el lector necesita para no fatigarse.'
      },
      {
        enunciado: '¿Cuál herramienta es ideal para principiantes que quieren plantillas listas y arrastrar-soltar?',
        opciones: [
          'Solo InDesign profesional pago',
          'Canva (plantillas, drag-and-drop, gratis hasta cierto nivel)',
          'Notepad',
          'Excel'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Canva es ideal para empezar: plantillas listas, drag-and-drop, gratis. Después se sube a Figma o Adobe Express.',
        feedbackIncorrecto: 'Canva. Drag-and-drop, plantillas listas, gratis. Es el punto de entrada profesional accesible.'
      },
      {
        enunciado: 'Tu revista escolar tiene tipografía de 8 puntos sobre fondo gris claro. ¿Qué problema de accesibilidad tiene?',
        opciones: [
          'Ninguno',
          'Tamaño insuficiente (debe ser 11pt+) Y contraste posiblemente bajo: doble barrera para lectores con baja visión',
          'Es muy grande',
          'Solo se ve mal en celular'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 8pt es muy pequeño para cuerpo de texto; combinado con bajo contraste, excluye a muchos lectores.',
        feedbackIncorrecto: 'Tamaño insuficiente + contraste bajo. La accesibilidad exige al menos 11pt y contraste 4.5:1 para no excluir lectores.'
      },
      {
        enunciado: 'Tu compañero revisor encontró 8 errores ortográficos en tu revista lista para imprimir. ¿Qué haces?',
        opciones: [
          'Igual la imprimo',
          'Corrijo los 8 antes de imprimir y reviso si hay más; los errores debilitan toda la pieza',
          'Solo corrijo los más graves',
          'Echo la culpa al revisor'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Corrección antes de imprimir es disciplina del oficio. La revista con errores ortográficos pierde credibilidad.',
        feedbackIncorrecto: 'Corregir todos antes de imprimir. Los errores erosionan la autoridad de la pieza editorial.'
      },
      {
        enunciado: '¿Cuál es el flujo de trabajo recomendado para maquetar una revista de 12 páginas?',
        opciones: [
          'Diseñar página por página desordenadamente',
          'Definir cuadrícula y estilos primero → maquetar páginas → revisar coherencia global → corregir → exportar PDF',
          'Solo escribir el texto',
          'Imprimir y diseñar después'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Cuadrícula + estilos antes; coherencia global y corrección al final. Flujo profesional probado.',
        feedbackIncorrecto: 'Cuadrícula y estilos primero, después maquetar, después revisar coherencia, después corregir, después exportar. Saltar pasos cuesta caro.'
      },
      {
        enunciado: 'Durante la sustentación pública de tu revista, ¿qué muestra MEJOR tu oficio de diseño?',
        opciones: [
          'Hablar de cuánto te esforzaste',
          'Explicar las decisiones de cuadrícula, tipografía, color y accesibilidad y por qué las tomaste',
          'Mostrar muchos colores',
          'Leer el texto en voz alta'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La sustentación muestra el criterio detrás de las decisiones. El producto se ve; el criterio se cuenta.',
        feedbackIncorrecto: 'Las decisiones justificadas. El producto se ve solo; lo que muestra tu oficio es por qué cada decisión.'
      },
      {
        enunciado: '¿Cuál oficio ancestral conecta con el diseño editorial de este periodo?',
        opciones: [
          'El pescador',
          'El tipógrafo de la imprenta de Cartago con los tipos móviles de plomo',
          'El carpintero',
          'El maestro de música'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El tipógrafo componía las páginas letra por letra y tenía la regla del diseño editorial en el cuerpo.',
        feedbackIncorrecto: 'El tipógrafo de la imprenta artesanal. Su oficio de componer páginas con tipos móviles es el origen del diseño editorial.'
      },
      {
        enunciado: '¿Cuántas columnas suele tener una revista de tamaño carta legible?',
        opciones: [
          '1 columna gigante',
          '2-4 columnas según contenido',
          '20 columnas',
          'Ninguna'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 2-4 columnas según tipo de contenido. 1 sola es para libros literarios; muchas pierden legibilidad.',
        feedbackIncorrecto: '2-4 columnas es el rango profesional para revistas tamaño carta. La cuadrícula define cuántas según contenido.'
      },
      {
        enunciado: '¿Para qué se usa típicamente una tipografía display (decorativa)?',
        opciones: [
          'Para todo el cuerpo del texto',
          'Para títulos y elementos puntuales donde llama atención sin estorbar la lectura',
          'Para no usarla nunca',
          'Para pies de página'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Display solo para títulos. Usar display en cuerpos largos cansa al ojo.',
        feedbackIncorrecto: 'Display para títulos. Su carácter llama la atención y se reserva para acentos, no para texto extenso.'
      },
      {
        enunciado: '¿Por qué el color en editorial es funcional, no solo decorativo?',
        opciones: [
          'No es funcional',
          'Crea jerarquía (qué se lee primero), guía al lector y comunica el tono',
          'Solo decora',
          'Hace la revista más larga'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Color funcional: jerarquía + guía + tono. Las decisiones de color afectan la lectura.',
        feedbackIncorrecto: 'Funcional: jerarquiza, guía, comunica tono. El color no es adorno: es parte del sistema de comunicación.'
      },
      {
        enunciado: '¿Cómo se relacionan imagen y texto en buena composición editorial?',
        opciones: [
          'Imagen aleatoria',
          'Imagen y texto dialogan: cada uno aporta lo que el otro no puede, sin redundar',
          'Solo imagen, sin texto',
          'Solo texto, sin imagen'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Imagen y texto dialogan. La imagen no repite el texto: lo amplía o lo concreta visualmente.',
        feedbackIncorrecto: 'Imagen y texto dialogan. Si la imagen solo repite el texto, ambos se vuelven redundantes.'
      },
      {
        enunciado: 'Quieres prototipar el diseño antes de maquetar la revista completa. ¿Qué herramienta es la más adecuada?',
        opciones: [
          'Excel',
          'Figma (gratis, diseño vectorial, prototipos interactivos)',
          'WhatsApp',
          'Word'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Figma es estándar profesional gratis para prototipado. Su tier gratuito es generoso para uso escolar.',
        feedbackIncorrecto: 'Figma. Estándar profesional gratis para diseño vectorial y prototipos. Adobe Express es alternativa válida.'
      },
      {
        enunciado: '¿Qué significa WCAG?',
        opciones: [
          'We Can Always Go',
          'Web Content Accessibility Guidelines (lineamientos internacionales de accesibilidad)',
          'World Color Art Group',
          'Wireless Connection Access Grade'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. WCAG = Web Content Accessibility Guidelines. Nivel AA es el estándar mínimo profesional.',
        feedbackIncorrecto: 'WCAG = Web Content Accessibility Guidelines. Estándar internacional de accesibilidad para contenido publicado.'
      },
      {
        enunciado: '¿Cuál de estos NO es función del editor revisor?',
        opciones: [
          'Verificar ortografía y gramática',
          'Comprobar coherencia visual (cuadrícula respetada, tipografía consistente)',
          'Detectar errores de hecho (datos verificables)',
          'Hacer el diseño desde cero'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. El revisor revisa, no rediseña. Sus funciones: ortografía, gramática, coherencia visual y verificación de hechos.',
        feedbackIncorrecto: 'Rediseñar no es del revisor. El revisor revisa: ortografía, coherencia visual, datos verificables.'
      },
      {
        enunciado: 'Antes de maquetar la revista, ¿qué decisión es crítica?',
        opciones: [
          'El color del logo',
          'Definir cuadrícula y estilos de tipografía consistentes para todas las páginas',
          'Cuántos amigos lo verán',
          'Si imprimir o digital'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Cuadrícula + estilos consistentes ANTES de maquetar. Eso evita rediseñar página por página después.',
        feedbackIncorrecto: 'Cuadrícula + estilos consistentes desde el inicio. Sin esa decisión previa, cada página queda como de otra revista.'
      },
      {
        enunciado: 'Recibes una crítica dura durante la sustentación: "tu revista no se lee en celular." ¿Qué haces?',
        opciones: [
          'Defenderme sin escuchar',
          'Reconocer el problema (responsive es real), proponer cómo lo abordaría en próxima edición',
          'Cambiar de tema',
          'Decir que no importa'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Honestidad ante crítica legítima + plan de mejora. Eso es el oficio editorial maduro.',
        feedbackIncorrecto: 'Reconocer + proponer plan. La crítica honesta se acepta y se convierte en aprendizaje para la próxima edición.'
      },
      {
        enunciado: 'Tu revista de 12 páginas decide usar cuadrícula de 3 columnas. ¿Por qué es buena elección?',
        opciones: [
          'Porque hace la página más larga',
          'Permite alternar entre 1, 2 o 3 columnas según el tipo de contenido, manteniendo consistencia',
          'Está de moda',
          'Porque el papel es cuadrado'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 3 columnas permite versatilidad sin perder coherencia. Es estándar editorial flexible.',
        feedbackIncorrecto: '3 columnas da versatilidad: 1 columna para textos largos, 2 para reportajes, 3 para ítems cortos. Versátil y consistente.'
      },
      {
        enunciado: 'Diseñas una revista para tus compañeros de colegio. ¿Qué te asegura que la pueden leer todos?',
        opciones: [
          'Si está en colores brillantes',
          'Cumple WCAG AA: contraste 4.5:1, tamaños 11pt+ cuerpo, jerarquía clara, sin solo imágenes sin alt text',
          'Si tiene muchas páginas',
          'Si está en PDF'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. WCAG AA es el estándar mínimo profesional para asegurar lectura inclusiva.',
        feedbackIncorrecto: 'Cumplir WCAG AA. Sin ese mínimo, la revista excluye a lectores con baja visión, daltonismo o lectura con apoyo.'
      }
    ]
  }
};

export default contenido;
