/**
 * Contenido web del examen final · Grado 8 · Período 3
 *
 * Auto-generado desde content/examenes/8-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 8,
  periodo: 3,
  titulo: 'Examen final · Multimedia y ciberética',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Multimedia y ciberética',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué es la jerarquía visual en diseño multimedia?',
        opciones: [
          'Hacer todo del mismo tamaño',
          'Ordenar elementos para que el ojo recorra la información en el orden que el autor decide',
          'Usar muchos colores',
          'Agregar efectos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Jerarquía visual = orden intencional del recorrido del ojo. Es comunicación, no decoración.',
        feedbackIncorrecto: 'Jerarquía visual es orden intencional. Tamaño, color, ubicación: cada decisión guía el orden de lectura.'
      },
      {
        enunciado: '¿Para qué sirven los hipervínculos en narrativa multimedia interactiva?',
        opciones: [
          'Para hacer la pieza más larga',
          'Para dar al lector caminos alternativos según su interés (narrativa no lineal)',
          'Para decorar',
          'Para nada'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Hipervínculos permiten narrativa no lineal: el lector elige caminos según interés.',
        feedbackIncorrecto: 'Narrativa no lineal: el lector elige rutas. Es lo opuesto al video pasivo de inicio a fin.'
      },
      {
        enunciado: '¿Cuál es la estructura típica de una narrativa TED?',
        opciones: [
          'Solo datos',
          'Gancho inicial + historia central + idea-llave + cierre con llamado a la acción',
          'Solo conclusiones',
          'Lectura de slides'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Gancho + historia + idea-llave + cierre. La emoción y los datos se entrelazan.',
        feedbackIncorrecto: 'Gancho + historia + idea-llave + cierre con CTA. Es la anatomía probada de la narrativa TED.'
      },
      {
        enunciado: '¿Qué ley colombiana regula el uso de imágenes con datos personales?',
        opciones: [
          'Ley 100 (salud)',
          'Ley 1581 de 2012 (protección de datos personales)',
          'Ley 30 (educación superior)',
          'Ley 23 (derechos de autor)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Ley 1581 de 2012. Exige consentimiento informado para uso de datos personales (incluyendo imagen).',
        feedbackIncorrecto: 'Ley 1581 de 2012. Marco principal de protección de datos personales en Colombia.'
      },
      {
        enunciado: 'Quieres usar la foto de un compañero en un afiche del colegio. ¿Qué necesitas?',
        opciones: [
          'Solo tomar la foto',
          'Autorización informada del compañero (y de sus acudientes si es menor)',
          'Pedir solo permiso al colegio',
          'Nada'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Autorización informada del titular + acudiente si es menor. Sin eso, viola Ley 1581 y Ley 1098 (Infancia).',
        feedbackIncorrecto: 'Autorización informada. Para menores, también de los acudientes. Sin consentimiento, hay violación legal.'
      },
      {
        enunciado: 'Estás grabando audio para tu pieza. ¿Cuál formato es estándar para distribución web?',
        opciones: [
          '.docx',
          '.mp3 o .m4a (comprimidos, calidad razonable, tamaño manejable)',
          '.jpg',
          '.pdf'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. MP3 y M4A son estándar para distribución web. .wav es alta calidad pero archivos muy grandes.',
        feedbackIncorrecto: '.mp3 o .m4a. Comprimidos, calidad razonable, manejables. .wav reservado para edición o archivo maestro.'
      },
      {
        enunciado: '¿Cuál es el número de la Línea oficial del ICBF para denuncia y orientación en casos de maltrato a niños y adolescentes?',
        opciones: [
          '123',
          '141',
          '911',
          '112'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Línea 141 del ICBF. Atención 24/7 para casos de maltrato, abuso, violencia contra niños y adolescentes en Colombia.',
        feedbackIncorrecto: 'Línea 141 del ICBF. Es la línea nacional para protección de la infancia y adolescencia.'
      },
      {
        enunciado: '¿Qué es el ciberbullying?',
        opciones: [
          'Un chiste virtual',
          'Acoso repetido y sistemático a través de medios digitales con intención de causar daño',
          'Cualquier mensaje en internet',
          'Una pelea normal'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Ciberbullying = acoso repetido + sistemático + intencional + por medios digitales. Tiene impacto psicológico real.',
        feedbackIncorrecto: 'Acoso repetido, sistemático, intencional, por medios digitales. No es un chiste ni una pelea: es violencia con consecuencias.'
      },
      {
        enunciado: '¿Qué ley colombiana protege específicamente contra el grooming?',
        opciones: [
          'Ley 100',
          'Ley 1336 de 2009 (protección contra abuso sexual de menores online)',
          'Ley 30',
          'Ley 23'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Ley 1336 de 2009. Penaliza el grooming (acoso de adultos a menores en internet).',
        feedbackIncorrecto: 'Ley 1336 de 2009. Penaliza el grooming. Es marco principal junto con el Código Penal.'
      },
      {
        enunciado: '¿Qué es la estética de la liberación según Dussel?',
        opciones: [
          'Hacer cosas bonitas',
          'Producción cultural que dignifica al sujeto retratado en lugar de cosificarlo o folclorizarlo',
          'Estilo gráfico moderno',
          'Diseño con muchos colores'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Estética de la liberación = producir desde y con los retratados, no sobre ellos como objeto exótico.',
        feedbackIncorrecto: 'Producción que dignifica en lugar de cosificar. Es lo opuesto a la "estética del pintoresco" o el folclor turístico.'
      },
      {
        enunciado: '¿Cuál oficio ancestral conecta con la multimedia y la ciberética?',
        opciones: [
          'La narradora de cuentos de las veladas del Pacífico y el Valle',
          'El comerciante de plaza',
          'El sastre',
          'El piloto'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. La narradora era editora visual antes de los pixels: curaba qué contar, cómo y a quién proteger.',
        feedbackIncorrecto: 'La narradora de las veladas. Su oficio de decidir qué se cuenta y cómo cruza directamente con la edición multimedia ética.'
      },
      {
        enunciado: '¿Cómo se aplica la jerarquía visual en una infografía sobre prevención de ciberbullying?',
        opciones: [
          'Todo del mismo tamaño',
          'El mensaje clave (qué hacer si te pasa) más grande arriba; detalles más pequeños abajo; teléfono 141 destacado',
          'Solo texto sin imágenes',
          'Muchos colores brillantes'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Jerarquía pone primero lo más urgente (qué hacer, dónde llamar) y los detalles después.',
        feedbackIncorrecto: 'Mensaje clave + teléfono 141 destacados; detalles abajo. La jerarquía sirve a la urgencia del lector.'
      },
      {
        enunciado: 'Tu narrativa TED de 3 minutos tiene 4 minutos. ¿Qué haces?',
        opciones: [
          'La dejo así',
          'Identifico qué partes son ornamento (no aportan al mensaje) y las recorto',
          'Hablo más rápido',
          'La hago de 5 minutos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Recortar lo que sobra es disciplina TED. Lo esencial cabe; lo demás distrae.',
        feedbackIncorrecto: 'Recortar lo accesorio. Una narrativa TED bien hecha tiene la duración justa. Hablar rápido no respeta al oyente.'
      },
      {
        enunciado: '¿Cuál de estas prácticas viola la ética visual?',
        opciones: [
          'Pedir autorización al fotografiado',
          'Editar a una persona para que se vea ridícula y publicar el meme',
          'Borrar la foto si la persona se arrepiente',
          'Citar la fuente de imágenes ajenas'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Editar para ridiculizar y publicar viola ética y leyes (derecho a la imagen, ciberbullying si es repetido).',
        feedbackIncorrecto: 'Editar para ridiculizar es violación ética. Las otras opciones son buenas prácticas profesionales.'
      },
      {
        enunciado: 'Tu audio tiene ruido de fondo molesto. ¿Qué haces?',
        opciones: [
          'Lo publico igual',
          'Edito con reducción de ruido (Audacity, GarageBand) antes de publicar',
          'Grabo todo de nuevo siempre',
          'Ignoro el ruido'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Audacity y GarageBand son gratuitos y permiten reducir ruido. Es paso obligado antes de publicar.',
        feedbackIncorrecto: 'Editar el audio (reducir ruido + normalizar volumen) antes de publicar. Es oficio mínimo.'
      },
      {
        enunciado: 'Un compañero te cuenta que recibe insultos diarios por WhatsApp de un grupo de la clase. ¿Qué haces?',
        opciones: [
          'No me meto',
          'Le doy apoyo, le sugiero llamar al 141 / hablar con orientación escolar / Ley 1620 de convivencia escolar',
          'Le digo que se aguante',
          'Le doy consejos genéricos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Apoyar + dirigir a recursos oficiales (141, orientación, Ley 1620). Es ciudadanía digital activa.',
        feedbackIncorrecto: 'Apoyar + dirigir a recursos. 141 del ICBF, orientación escolar, Ley 1620 de convivencia escolar dan canales reales.'
      },
      {
        enunciado: 'Un adulto te contacta por Instagram pidiéndote fotos íntimas a cambio de regalos. ¿Qué haces?',
        opciones: [
          'Responder a ver qué quiere',
          'Bloquear, capturar evidencia, reportar a Línea 141 y a CAI Virtual (grooming es delito en Ley 1336)',
          'Aceptar si los regalos son grandes',
          'Ignorar sin más'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Bloquear + capturar evidencia + reportar a 141 y CAI Virtual. Es grooming penalizado por Ley 1336 de 2009.',
        feedbackIncorrecto: 'Bloquear, capturar evidencia, reportar a 141 y CAI Virtual. Es grooming, delito en Colombia (Ley 1336).'
      },
      {
        enunciado: 'Quieres hacer un video sobre la salsa caleña. ¿Cuál enfoque sigue la estética de la liberación?',
        opciones: [
          'Mostrarla como folclor exótico para turistas',
          'Entrevistar a bailarines locales, dejarlos hablar de su oficio, mostrar el barrio como protagonista',
          'Usar estereotipos viejos',
          'Solo música sin contexto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Producir CON los retratados (no SOBRE ellos), dejar que el sujeto sea protagonista de su propia historia.',
        feedbackIncorrecto: 'Entrevistar a los bailarines locales como protagonistas. Es la diferencia entre estética del folclor turístico y estética de la liberación.'
      },
      {
        enunciado: 'Tu proyecto comunitario combina los aprendizajes del periodo. ¿Cuál NO es elemento esencial?',
        opciones: [
          'Idea con propósito social claro',
          'Autorizaciones legales en orden',
          'Mucho efecto especial llamativo sin función comunicativa',
          'Pieza multimedia que respete al sujeto retratado'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Correcto. Los efectos sin función son ornamento. Lo esencial es propósito + legalidad + respeto al sujeto.',
        feedbackIncorrecto: 'Los efectos por sí mismos no son esenciales. Lo esencial: propósito social, legalidad, respeto al sujeto retratado.'
      },
      {
        enunciado: '¿Qué tiene tu portafolio digital del grado 8°?',
        opciones: [
          'Solo el último proyecto',
          'Las mejores piezas de los 3 periodos seleccionadas con criterio, cada una con bitácora reflexiva del proceso',
          'Todas las piezas sin filtro',
          'Solo capturas de pantalla'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Portafolio curado + bitácora reflexiva. Es selección con criterio, no acumulación de archivos.',
        feedbackIncorrecto: 'Selección curada con bitácora. El portafolio profesional es decisión editorial, no compilación automática.'
      },
      {
        enunciado: 'Tu pieza interactiva tiene 5 caminos posibles según el usuario. ¿Qué herramienta usas para diseñarla?',
        opciones: [
          'Solo Word',
          'Genially, Canva interactivo, o presentación con hipervínculos en Google Slides',
          'WhatsApp',
          'Calculadora'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Genially y Canva interactivo son gratuitos y permiten ramas. Google Slides con hipervínculos es alternativa.',
        feedbackIncorrecto: 'Genially, Canva interactivo, Google Slides con hipervínculos. Son herramientas accesibles para narrativa interactiva.'
      },
      {
        enunciado: 'En tu sustentación final del grado 8°, alguien pregunta por qué hiciste el documental sobre el zapatero. ¿Cuál es la mejor respuesta?',
        opciones: [
          'Porque era fácil',
          'Porque su oficio dignifica un saber popular que está desapareciendo y quería dejar registro con su voz',
          'Porque me ahorraba tiempo',
          'Porque mi tía me dijo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Conectar la pieza con propósito (dignificar saber popular, dejar registro con la voz del sujeto). Es oficio maduro.',
        feedbackIncorrecto: 'Conectar la pieza con propósito explícito. La sustentación muestra el criterio editorial detrás de la decisión.'
      }
    ]
  }
};

export default contenido;
