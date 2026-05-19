/**
 * Contenido enriquecido para Grado 6 · Período 1 · Sesión 7
 * (sesión global 7).
 *
 * Auto-generado desde content/guias/6/6-1-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 1,
  sesion: 7,
  titulo: 'Privacidad y datos personales — cerrar las puertas con criterio',
  resumen: 'Un dato personal es cualquier información que diga algo de ti como persona.',
  duracionMin: 90,
  subtema: 'Privacidad y datos personales — cerrar las puertas con criterio',
  preLectura: {
    porQueImporta: 'El producto es la bitácora de los cambios + la promesa de revisar cada mes.',
    preguntaDetonante: '¿Tu nombre real se puede saber en internet? ¿Tu número de celular? ¿Tu dirección exacta? Si los 3 están al mismo nivel, hay un problema. ¿Cuál es?',
    activacion: {
      titulo: 'Clasifica 10 datos tuyos',
      descripcion: 'Actividad 1 · IDENTIFICA — Clasifica 10 datos tuyos (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: clasificas 10 datos tuyos, aprendes las 4 reglas, configuras 2 apps, y firmas promesa.',
      siguiente: 'Esta semana, antes de instalar una app nueva, te haces 2 preguntas: "¿qué datos pide?" y "¿los necesita de verdad?".'
    }
  },
  conceptosClave: [
    {
      termino: 'Dato personal',
      definicion: 'Cualquier información que diga algo de ti como persona. Tu nombre, tu edad, tu cara, tu ubicación, tu correo, tu contraseña. No todos son iguales: hay 3 niveles según quién debería poder verlos.',
      ejemplo: 'Tu nombre es dato personal. Tu cara también. Tu cédula también. Tu contraseña también. Cada uno tiene su nivel.',
      emoji: '📋'
    },
    {
      termino: 'Dato público',
      definicion: 'El que se puede saber sin problema. Tu nombre, tu ciudad, el grado escolar en que estás. Esto no es información peligrosa si lo combinas con sentido común.',
      ejemplo: '"Soy Lara, estoy en sexto, vivo en Cartago" son datos públicos. No comprometen seguridad.',
      emoji: '🌍'
    },
    {
      termino: 'Dato semi-privado',
      definicion: 'El que solo deberían saber amigos cercanos y familia. Tu número de celular, tu correo personal, tu colegio exacto, fotos cotidianas tuyas. No los pones públicos en redes sociales.',
      ejemplo: 'Tu número de WhatsApp es semi-privado: lo das a quien conoces, no lo publicas en tu bio de Instagram.',
      emoji: '🔑'
    },
    {
      termino: 'Dato privado',
      definicion: 'El que no debería saber casi nadie aparte de tus padres y tú. Contraseñas, número de cédula, dirección exacta de casa, datos médicos, fotos íntimas. Estos son intocables.',
      ejemplo: 'Tu contraseña, tu número de tarjeta de identidad, tu dirección exacta. Nada de esto va a internet.',
      emoji: '🔒'
    },
    {
      termino: 'Ley 1581 de 2012',
      definicion: 'La ley colombiana que protege tus datos personales. Dice que ninguna empresa puede usar tus datos sin tu permiso, y que tú tienes derecho a saber qué datos tienen de ti y a pedirles que los borren.',
      ejemplo: 'Si una empresa de marketing te llama porque "compró" tu número, tú puedes pedirle que borre tu información. La ley te respalda.',
      emoji: '⚖️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes cuidar tus datos personales?',
      instrucciones: '5 preguntas para verificar que sabes clasificar y proteger tus datos personales.',
      preguntas: [
        {
          enunciado: '¿Cuál de estos es un dato privado (que casi nadie debería saber)?',
          opciones: [
            'Tu nombre de pila',
            'La ciudad donde vives',
            'Tu contraseña del correo institucional',
            'El grado escolar en que estás'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. La contraseña es dato privado: solo tú la sabes. Si la das, alguien puede entrar a tu correo y hacerse pasar por ti.',
          feedbackIncorrecto: 'La contraseña es dato privado. Nombre, ciudad y grado son públicos. Los datos privados no se comparten con nadie.'
        },
        {
          enunciado: 'Una app de linterna pide acceso a tu ubicación, micrófono y contactos. ¿Qué piensas?',
          opciones: [
            'Le doy todo, debe necesitarlo.',
            'Le niego los permisos porque una linterna no necesita eso. Si insiste, mejor busco otra app.',
            'Le doy solo la ubicación, los otros no.',
            'Le doy todo pero solo por un día.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Regla del mínimo necesario: si la app pide más de lo que su función necesita, sospecha y di que no.',
          feedbackIncorrecto: 'Una linterna NO necesita ubicación, micrófono ni contactos. Niégalo. Si la app insiste, busca otra que respete el mínimo.'
        },
        {
          enunciado: 'Tu compañero te pide tu cédula para \'apuntarte a un sorteo\'. ¿Qué haces?',
          opciones: [
            'Se la doy, es mi compañero.',
            'No se la doy. La cédula es dato privado, ni a un amigo.',
            'Se la doy a medias, solo los primeros números.',
            'Se la digo en voz baja para que nadie más oiga.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. La cédula es dato privado. Ni a un amigo se la das. Los sorteos legales no piden cédula a menores.',
          feedbackIncorrecto: 'La cédula es dato privado, no se comparte con nadie aparte de papás. Los sorteos legales no piden cédula a niños.'
        },
        {
          enunciado: 'Acabas de instalar Instagram. ¿Cómo deberían estar los ajustes por defecto?',
          opciones: [
            'Abiertos para todos, así me encuentran rápido.',
            'Cerrados (cuenta privada), y los abro solo si decido.',
            'Solo con foto de perfil bloqueada.',
            'Da igual, los ajustes no cambian nada.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La regla es \'por defecto privado\': empiezas cerrado y abres con criterio. Es más fácil abrir después que cerrar después.',
          feedbackIncorrecto: 'La regla es \'por defecto privado\'. Empieza con la cuenta cerrada, y abres a más gente solo si tú decides.'
        },
        {
          enunciado: 'Una empresa te llamó porque \'compró tu número\'. ¿Qué puedes hacer?',
          opciones: [
            'Aceptar la llamada, ya tienen mi número.',
            'Pedirles que borren mis datos. La Ley 1581 de Colombia me respalda.',
            'Cambiarme de número urgente.',
            'Bloquearlos sin decir nada.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. En Colombia la Ley 1581 te respalda. Tienes derecho a pedir que borren tus datos. No es opcional para la empresa.',
          feedbackIncorrecto: 'La Ley 1581 de 2012 te da derecho a pedirle a cualquier empresa que borre tus datos. Es tu derecho legal.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy decidiendo yo qué se sabe de mí, o estoy dejando que las apps lo decidan por mí?',
    transferencia: 'Esta semana, antes de instalar una app nueva, te haces 2 preguntas: "¿qué datos pide?" y "¿los necesita de verdad?".',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 niveles de datos personales con ejemplos; (2) sabrás aplicar las 4 reglas del dato personal; (3) habrás configurado la privacidad de 2 apps que usas; (4) podrás evaluar si una app o sitio respeta tu privacidad.'
  },
  saberAncestral: {
    saber: 'En el patio de tu abuela había muros, no por miedo: por respeto. Si alguna vez fuiste a la casa de campo de un abuelo, viste que el patio tenía un cerco bajito, una verja, una puerta. No estaba ahí porque la abuela tuviera miedo. Estaba ahí porque cada espacio tenía sus reglas: el zaguán era para los vecinos, la sala para las visitas, el patio para la familia, el cuarto sólo para ella. Tres niveles distintos de quién puede entrar. Cuando llegaba un desconocido, lo atendían en el zaguán; cuando llegaba un amigo, pasaba a la sala; cuando llegaba un hijo, iba directo al patio. Era una arquitectura de la confianza: las puertas decían quién entra y hasta dónde. En internet pasa lo mismo, solo que las puertas no son de madera, son ajustes de configuración en tus apps. Si no las cierras tú, todo el mundo entra hasta tu cuarto.',
    preguntaPuente: '¿Tu nombre real se puede saber en internet? ¿Tu número de celular? ¿Tu dirección exacta? Si los 3 están al mismo nivel, hay un problema. ¿Cuál es?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo de la liberación)',
      lente: 'lente del nosotros',
      cita: '"El que decide qué se sabe de él, es libre. El que entrega todo sin pensar, ya no lo es."',
      preguntaEspejo: '¿Estoy decidiendo yo qué se sabe de mí, o estoy dejando que las apps lo decidan por mí?'
    },
    estoico: {
      autor: 'Epicteto (filósofo romano que estudió qué depende de ti y qué no)',
      lente: 'lente del cuidado interior',
      cita: '"Cuida lo que depende de ti — tu palabra, tu casa, tu cuerpo, tus datos. Lo que no depende de ti, suéltalo."',
      preguntaEspejo: '¿Estoy quejándome de cosas que no controlo, o estoy actuando sobre las que sí?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la información)',
      lente: 'lente de la infoesfera',
      cita: '"Los datos no son neutros. Quien los tiene, tiene poder sobre ti."',
      preguntaEspejo: '¿A quién le estoy dando poder sobre mis decisiones, simplemente por entregarle mis datos sin pensar?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 niveles de datos personales con ejemplos; (2) sabrás aplicar las 4 reglas del dato personal; (3) habrás configurado la privacidad de 2 apps que usas;…',
    emocional: 'No puedes controlar todo internet.',
    ciudadana: 'Cuando aceptas todos los permisos sin leer, cuando entregas todos tus datos sin pensar, estás regalando libertad.',
    local: 'Antes de salir, revisas que cada cambio que hiciste tenga su razón anotada.',
    intergeneracional: 'Cuando una empresa tiene muchos datos tuyos, no es solo "información": es poder para influenciar lo que ves, lo que compras, lo que piensas.'
  }
};

export default contenido;
