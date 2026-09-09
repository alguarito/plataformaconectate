/**
 * Contenido enriquecido para Grado 9 · Período 2 · Sesión 6
 * (sesión global 16).
 *
 * Auto-generado desde content/guias/9/9-2-6.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 2,
  sesion: 6,
  titulo: 'Herramientas digitales — Figma, Canva o Adobe Express',
  resumen: 'En 1986, por el Acuerdo 008, Univalle abrió sede en Cartago porque estudiar obligaba a irse, e irse costaba plata, familia y salud. La idea que dejó sigue sirviendo: nadie debería tener que perderse a sí mismo para poder estudiar. Hoy usas herramientas que hicieron algo parecido con el diseño, y produces la portada de tu revista.',
  duracionMin: 90,
  subtema: 'Diseño editorial digital · Herramientas',
  preLectura: {
    porQueImporta: 'Aprender una herramienta es saber dónde están cuatro cosas en su menú. Por eso pasar de una a otra cuesta mucho menos de lo que parece.',
    preguntaDetonante: '¿Qué programa usas hoy que hace diez años habría costado un sueldo entero?',
    activacion: {
      titulo: 'Qué promete la portada',
      descripcion: 'En 2 minutos, abre la página principal de una herramienta de diseño y anota a quién parece estar buscando.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 4 definiste la paleta de cinco colores de tu revista.',
      siguiente: 'En la sesión 7 compruebas quién no puede leer tu revista y rediseñas un spread.'
    }
  },
  conceptosClave: [
    {
      termino: 'Lienzo',
      definicion: 'La página de trabajo con su tamaño definido. Fijarlo al principio evita tener que rehacerlo todo al exportar.',
      ejemplo: 'Empezar «a ver qué sale» y descubrir al final que no cabe en A4 cuesta la tarde entera.',
      categoria: 'Los cuatro elementos'
    },
    {
      termino: 'Capa',
      definicion: 'Cada objeto independiente que se apila sobre los demás: un texto, una imagen, una forma.',
      ejemplo: 'Si al mover una cosa se mueven las otras, están agrupadas y conviene separarlas.',
      categoria: 'Los cuatro elementos'
    },
    {
      termino: 'Guía',
      definicion: 'Línea de la cuadrícula que no se imprime. Se pone al principio, para construir sobre ella y no para comprobar después.',
      ejemplo: 'Poner las guías al final es revisar, no diseñar con cuadrícula.',
      categoria: 'Los cuatro elementos'
    },
    {
      termino: 'Exportar',
      definicion: 'Convertir el archivo de trabajo en uno que otros puedan abrir. La pieza es lo que exportas.',
      ejemplo: 'Un archivo que solo abre en tu cuenta no está entregado, aunque esté terminado.',
      categoria: 'Los cuatro elementos'
    },
    {
      termino: 'Cuál sirve, no cuál es mejor',
      definicion: 'La pregunta es qué pieza necesitas y cuál es tu nivel hoy, no qué marca tiene mejor fama.',
      ejemplo: 'Elegir por moda es la manera más común de perder una tarde entera.',
      categoria: 'Elegir herramienta'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes moverte en cualquier herramienta?',
      instrucciones: 'Cinco preguntas sobre los cuatro elementos y sobre cómo se elige. No va al cuaderno.',
      preguntas: [
        {
          enunciado: '¿Por qué se fija el tamaño del lienzo antes de empezar?',
          opciones: [
            'Porque después no se puede cambiar en ninguna herramienta.',
            'Porque si no, al exportar no cuadra nada y toca rehacer.',
            'Porque el programa funciona más rápido con medidas fijas.',
            'Porque así se pueden compartir las medidas con el grupo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Es la causa más común de perder una tarde de trabajo.',
          feedbackIncorrecto: 'Porque al exportar no cuadra. Empezar «a ver qué sale» sale caro.'
        },
        {
          enunciado: 'Mueves un texto y se mueve también la imagen. ¿Qué ocurre?',
          opciones: [
            'Están en la misma capa o agrupadas.',
            'El archivo se corrompió y hay que empezar de nuevo.',
            'Falta poner las guías de la cuadrícula.',
            'El lienzo tiene un tamaño equivocado.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Conviene separarlas antes de seguir maquetando.',
          feedbackIncorrecto: 'Están agrupadas o en la misma capa. Las capas son objetos independientes.'
        },
        {
          enunciado: '¿Qué creó el Acuerdo 008 del 15 de septiembre de 1986?',
          opciones: [
            'La Universidad del Valle como institución pública.',
            'La sede de Buenaventura y su programa a distancia.',
            'El Programa de Regionalización de Univalle.',
            'El convenio entre Univalle y la alcaldía de Cartago.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es, y la sede de Cartago abrió ese mismo año en modalidad a distancia.',
          feedbackIncorrecto: 'El Programa de Regionalización. De ahí salió la sede de Cartago.'
        },
        {
          enunciado: '¿Cuándo se ponen las guías de la cuadrícula?',
          opciones: [
            'Al final, para comprobar si el contenido quedó alineado.',
            'Al principio, para construir el contenido sobre ellas.',
            'Solo si la pieza va a imprimirse en papel.',
            'Cuando la herramienta lo pide al exportar el archivo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Ponerlas al final es revisar, no diseñar con cuadrícula.',
          feedbackIncorrecto: 'Al principio. Son para construir sobre ellas, no para comprobar después.'
        },
        {
          enunciado: '¿Cuál es la pregunta correcta al elegir una herramienta?',
          opciones: [
            'Cuál usan los diseñadores profesionales del sector.',
            'Cuál tiene más funciones disponibles en su versión gratuita.',
            'Cuál se ve mejor en el portafolio al mencionarla.',
            'Cuál sirve a la pieza que necesito y a mi nivel de hoy.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. Elegir por marca o por moda es como se pierde una tarde entera.',
          feedbackIncorrecto: 'Cuál sirve a tu pieza y a tu nivel. No cuál es mejor en abstracto.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De las barreras que anotaste, ¿cuál te afecta de verdad a ti, y cuál afectaría a un compañero sin conexión estable?',
    transferencia: 'Guarda una copia del archivo de trabajo en tu propio dispositivo. Lo que vive solo en una cuenta ajena no es del todo tuyo.',
    cierre: 'Nadie debería tener que perderse a sí mismo para poder estudiar. La herramienta quita una barrera; conviene ver cuáles deja.'
  },
  saberAncestral: {
    saber: 'En 1984 la Universidad del Valle escribió una propuesta que empezaba nombrando dos ciudades: Buenaventura y Cartago. Dos años después, por el Acuerdo 008 del 15 de septiembre de 1986, el Consejo Superior creó el Programa de Regionalización. La sede de Cartago abrió ese mismo año, en modalidad a distancia. La empujó un grupo de cartagüeños que consideró que la ciudad necesitaba sus propios espacios de formación. La razón de fondo era simple y muy poco romántica: estudiar obligaba a irse, e irse costaba plata, familia y salud. La cara de exclusión: no todo salió bien, y la sede de Sevilla cerró después del primer año. Pero la decisión dejó una idea que sigue sirviendo: nadie debería tener que perderse a sí mismo para poder estudiar. Hoy vas a usar herramientas que hicieron algo parecido con el diseño: acercarlo a quien no podía pagar un estudio.',
    fuente: 'Regionalización de Univalle · que irse no fuera el precio de estudiar',
    referencia: 'Universidad del Valle. (s.\\,f.). Historia sede Cartago. Consultado en 2026.',
    preguntaPuente: 'La sede de Cartago existió para que estudiar no obligara a irse. Estas herramientas son gratuitas y funcionan en un navegador: ¿qué barrera quitan, y cuál dejan en pie?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Que irse no fuera el precio',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Tres herramientas por fuera',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Los cuatro elementos',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · La portada de tu revista',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tres herramientas por fuera',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Abre las páginas principales de las tres herramientas más usadas para diseño editorial.',
        'Anota qué muestra cada una en lo primero que se ve.',
        'Anota a qué tipo de usuario parece dirigirse.',
        'Busca qué exige cada una: registro, pago, instalación o conexión permanente.',
        'Marca cuál está más cerca de lo que necesitas hoy y escribe por qué.'
      ],
      cuaderno: {
        titulo: 'Tres herramientas por fuera',
        formato: 'tabla de 3 filas y 3 columnas (herramienta / a quién se dirige / qué exige para empezar)',
        extension: 'un tercio de página'
      },
      criterios: [
        'La elección tiene una razón escrita que no es la marca.',
        'Queda anotado qué exige cada una para empezar.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Los cuatro elementos',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cuatro elementos con una frase propia cada uno.',
        'Abran la herramienta elegida y localicen los cuatro en su menú.',
        'Anoten cómo se llama cada uno allí, porque el nombre cambia de una a otra.',
        'Creen un lienzo A4 con guías y dos capas, y escriban los pasos exactos que siguieron.'
      ],
      cuaderno: {
        titulo: 'Los cuatro elementos',
        formato: 'los cuatro con frase propia, su nombre en la herramienta elegida y los pasos del lienzo A4',
        extension: 'media página'
      },
      criterios: [
        'Otro podría crear ese lienzo siguiendo los pasos escritos.',
        'Los cuatro elementos están localizados en el menú.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'La portada de tu revista',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Crea el lienzo A4 vertical y pon las guías de tu cuadrícula.',
        'Coloca la imagen principal en su capa.',
        'Escribe el titular con la display y el resto con la de cuerpo.',
        'Aplica la paleta con sus códigos exactos, respetando la función de cada color.',
        'Añade el pie, exporta y comprueba que el archivo abre fuera de tu cuenta.'
      ],
      cuaderno: {
        titulo: 'La portada de tu revista',
        formato: 'el boceto con sus capas señaladas, los nombres de las tipografías, los códigos de color y dónde comprobaste el archivo',
        extension: 'media página'
      },
      criterios: [
        'El archivo exportado se abrió bien fuera de tu computador.',
        'El titular añade lo que la imagen no dice sola.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.1.4.3',
      lente: 'lente del nosotros',
      cita: 'Codo-a-codo los hermanos en la asamblea donde se decide el destino de la patria; palabra-oído del maestro-discípulo en el aprendizaje del vivir… proximidad es la palabra que expresa la esencia del hombre.',
      preguntaEspejo: '¿A quién puedo preguntarle lo que no entiendo de esta herramienta, y por qué no le he preguntado?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones IX, 11 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Si puedes, corrige enseñando a quienes obran mal; y si no puedes, acuérdate de que para eso se te ha dado la indulgencia. (trad. propia)',
      preguntaEspejo: '¿A quién de mi salón podría enseñarle hoy algo que a mí me costó entender?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 3.6',
      lente: 'lente de la infoesfera',
      cita: 'Internet es una extensión importante del espacio público, incluso cuando lo operan y lo poseen actores privados. (trad. propia)',
      preguntaEspejo: '¿Qué trabajo mío existe solo dentro de la cuenta de una empresa, y qué pasaría si la cerraran?'
    }
  },
  cincoDimensiones: {
    personal: 'Produjiste tu primera pieza real con el sistema visual que tú mismo decidiste.',
    emocional: 'Pelearse con una herramienta nueva frustra. Saber que solo hay cuatro cosas que encontrar baja mucho esa frustración.',
    ciudadana: 'Estas herramientas quitan la barrera del precio y dejan otras: la conexión, la cuenta y las condiciones que pone otro.',
    local: 'En 1986 Cartago consiguió sede universitaria para que estudiar no obligara a irse. Acercar el acceso tiene historia aquí.',
    intergeneracional: 'Quien diseñaba hace treinta años necesitaba un estudio y una licencia carísima. Hoy hace falta un navegador.'
  }
};

export default contenido;
