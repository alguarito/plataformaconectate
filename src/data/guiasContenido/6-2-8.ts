/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 8
 * (sesión global 18).
 *
 * Auto-generado desde content/guias/6/6-2-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 8,
  titulo: 'Mantenimiento básico — cuidar el computador como cuida el relojero',
  resumen: 'Mantenimiento es el conjunto de acciones que haces para que tu computador (o celular) dure más tiempo, funcione más rápido, y se enferme menos.',
  duracionMin: 90,
  subtema: 'Mantenimiento básico — cuidar el computador como cuida el relojero',
  preLectura: {
    porQueImporta: 'El producto es ese plan firmado + las 3 acciones ejecutadas con evidencia.',
    preguntaDetonante: 'Tu computador del año pasado funcionaba rápido y ahora se demora una eternidad en abrir. ¿Por qué pasa eso? ¿Se dañó el equipo o hay algo que dejaste de hacer?',
    activacion: {
      titulo: 'Clasifica 15 acciones',
      descripcion: 'Actividad 1 · IDENTIFICA — Clasifica 15 acciones (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: clasificas 15 acciones, aprendes el calendario, ejecutas 3 acciones en clase, y armas tu plan personal.',
      siguiente: 'Esta semana, ejecuta al menos 2 acciones de mantenimiento en tu equipo (o el de tu casa).'
    }
  },
  conceptosClave: [
    {
      termino: 'Mantenimiento físico',
      definicion: 'El cuidado del hardware del computador: limpieza de pantalla y teclado, ventilación, ubicación, manejo de cables, apagado correcto. Se hace con las manos y herramientas físicas.',
      ejemplo: 'Limpiar la pantalla con paño microfibra cada semana, soplar el polvo del teclado, mantener el equipo lejos del sol directo. Eso es mantenimiento físico.',
      emoji: '🧹'
    },
    {
      termino: 'Mantenimiento digital',
      definicion: 'El cuidado del software: actualizar el sistema operativo y programas, mantener antivirus activo, vaciar papelera, limpiar archivos temporales, hacer copias de seguridad. Se hace con clics en el computador.',
      ejemplo: 'Actualizar Windows cada mes, hacer copia de tus fotos al OneDrive cada semana, vaciar papelera. Eso es mantenimiento digital.',
      emoji: '🔧'
    },
    {
      termino: 'Copia de seguridad (backup)',
      definicion: 'Una segunda versión de tus archivos importantes guardada en otro lugar (memoria USB, disco externo, nube). Si el disco principal falla, los archivos siguen vivos en la copia. Es la acción más importante de mantenimiento digital.',
      ejemplo: 'Cada domingo copias tus tareas y fotos del mes a una memoria USB o las subes a Google Drive. El día que el disco se dañe, no pierdes nada.',
      emoji: '💾'
    },
    {
      termino: 'Actualización (update)',
      definicion: 'Una versión nueva del sistema operativo o de un programa que corrige errores, cierra agujeros de seguridad y añade mejoras. Las actualizaciones son gratis y se hacen mensualmente.',
      ejemplo: 'Windows Update en computador, App Store en celular, Play Store en Android. Cuando aparece "actualizar disponible", lo aceptas: estás cerrando vulnerabilidades.',
      emoji: '🔄'
    },
    {
      termino: 'Antivirus',
      definicion: 'Programa que vigila tu computador para detectar y eliminar virus y software malicioso. Windows tiene Defender integrado que es bueno. Importante: escanear el disco completo al menos una vez al mes.',
      ejemplo: 'Si te llega un archivo extraño por correo, el antivirus lo escanea antes de abrirlo. Si está infectado, lo bloquea o lo elimina sin que tú tengas que hacer nada.',
      emoji: '🛡️'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes mantener tu computador?',
      instrucciones: '5 preguntas para verificar que dominas las acciones esenciales y su frecuencia.',
      preguntas: [
        {
          enunciado: '¿Cuál es la acción de mantenimiento MÁS importante?',
          opciones: [
            'Limpiar la pantalla cada día.',
            'Hacer copia de seguridad de tus archivos importantes.',
            'Cambiar el wallpaper cada semana.',
            'Apagar el computador cada hora.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La copia de seguridad es la más importante. Si el disco falla y no hiciste backup, perdiste todo el año escolar.',
          feedbackIncorrecto: 'La copia de seguridad (backup) es la más crítica. El disco se puede dañar cualquier día; si tienes copia, no pierdes nada.'
        },
        {
          enunciado: 'Apagar el computador presionando el botón de fuerza, ¿qué pasa?',
          opciones: [
            'Es lo mismo que apagar normalmente.',
            'Es mejor, ahorra electricidad.',
            'El SO no cierra bien y se pueden corromper archivos. Solo hacerlo en emergencia.',
            'El equipo se reinicia automáticamente.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Bien. Apagar por fuerza interrumpe al SO. Si lo haces seguido, los archivos se corrompen. Apagar desde el menú es la regla.',
          feedbackIncorrecto: 'Apagar por fuerza solo en emergencia. El SO no termina de guardar y los archivos se corrompen. Apagar normal es desde el menú.'
        },
        {
          enunciado: 'Tu computador se calienta mucho cuando lo usas en la cama. ¿Por qué?',
          opciones: [
            'Es normal, todos los computadores calientan.',
            'La cama ahoga la ventilación. Hay que ponerlo en superficie firme con espacio para que ventile.',
            'Le falta antivirus.',
            'Está dañado, hay que cambiarlo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La cama o el cojín tapan las salidas de aire de la ventilación. El equipo se calienta y se daña. Mesa firme + 15 cm atrás.',
          feedbackIncorrecto: 'La cama ahoga la ventilación. El portátil se calienta y se daña con el tiempo. Siempre en mesa firme con espacio detrás para ventilar.'
        },
        {
          enunciado: 'Cuándo debes hacer copia de seguridad de tus archivos?',
          opciones: [
            'Cuando se dañe el disco.',
            'Cada semana, antes de que algo malo pase.',
            'Una vez al año, suficiente.',
            'Nunca, mis archivos no son importantes.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Cada semana. Si esperas a que falle el disco, ya es tarde. La copia es prevención, no rescate.',
          feedbackIncorrecto: 'Cada semana. Si esperas a que algo se dañe, ya perdiste todo. Backup semanal te salva del 100% de los disgustos.'
        },
        {
          enunciado: 'Tu mamá dice \'el antivirus consume RAM, mejor lo desinstalo\'. ¿Qué le respondes?',
          opciones: [
            'Tiene razón, sin antivirus va más rápido.',
            'Sin antivirus en 1 mes te entran 20 virus. Mejor mantenerlo y limpiarlo en cambio.',
            'Da lo mismo, los virus ya no existen.',
            'Mejor instalo 3 antivirus, así protege más.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Sin antivirus es mucho peor. Y solo se usa UNO; varios chocan. Windows Defender es bueno y ya viene incluido.',
          feedbackIncorrecto: 'Sin antivirus el equipo se llena de virus rápido. Solo un antivirus a la vez (Windows Defender viene incluido y es bueno).'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Trato mis cosas como bienes que duran o como objetos desechables?',
    transferencia: 'Esta semana, ejecuta al menos 2 acciones de mantenimiento en tu equipo (o el de tu casa).',
    cierre: 'Al terminar la clase: (1) podrás identificar 10 acciones de mantenimiento; (2) sabrás aplicar la frecuencia adecuada a cada una (diaria, semanal, mensual, semestral); (3) habrás ejecutado 3 acciones en clase; (4) podrás evaluar si un computador está bien mantenido o no.'
  },
  saberAncestral: {
    saber: 'Don Lucho el relojero limpiaba cada engranaje con paciencia y aceite especial. Si entrabas a su vitrina de la calle 14 en Cartago, no veías solo herramientas: veías frascos pequeños de aceite, paños de gamuza, un cepillito suave de pelo de camello para limpiar piezas diminutas. Cuando una persona le traía un reloj que se atrasaba, lo primero que hacía don Lucho no era cambiar pieza: era limpiarlo. La mayoría de las veces, el reloj se atrasaba por polvo o aceite seco en los engranajes. "Mantenimiento, mijo, eso es lo que falta. Un reloj limpio dura toda la vida.", decía. Las personas que confiaban en don Lucho conservaban sus relojes 30, 40 años. Los que se los compraban a vendedores de la calle y nunca los limpiaban los gastaban en 2 años. La diferencia no era la calidad del reloj; era el cuidado. Los computadores funcionan igual. Un equipo mantenido dura el doble que uno usado y nada más.',
    preguntaPuente: 'Tu computador del año pasado funcionaba rápido y ahora se demora una eternidad en abrir. ¿Por qué pasa eso? ¿Se dañó el equipo o hay algo que dejaste de hacer?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del cuidado de los bienes comunes)',
      lente: 'lente del nosotros',
      cita: '"Cuidar lo que tienes es resistirte a la lógica del desecho."',
      preguntaEspejo: '¿Trato mis cosas como bienes que duran o como objetos desechables?'
    },
    estoico: {
      autor: 'Marco Aurelio (emperador que practicaba la disciplina diaria)',
      lente: 'lente del cuidado interior',
      cita: '"El que cuida lo pequeño cada día, evita lo grande mañana."',
      preguntaEspejo: '¿Qué pequeña acción de mantenimiento estoy postergando que después se convertirá en un problema grande?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la sostenibilidad digital)',
      lente: 'lente de la infoesfera',
      cita: '"El equipo bien cuidado consume menos energía, dura más, y deja menos huella en el planeta."',
      preguntaEspejo: '¿Cómo se vería el mundo si todos cuidáramos nuestros equipos al doble del tiempo?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar 10 acciones de mantenimiento; (2) sabrás aplicar la frecuencia adecuada a cada una (diaria, semanal, mensual, semestral); (3) habrás ejecutado 3 acciones e…',
    emocional: '30 minutos al mes de mantenimiento te ahorran 3 días enteros de problemas al año.',
    ciudadana: 'Hay una idea moderna que dice: "si se daña, lo cambio".',
    local: 'Antes de salir, verificas que tu plan tenga las 10 acciones con su frecuencia.',
    intergeneracional: 'Un computador que vive 8 años es el doble de sostenible que uno que vive 4.'
  }
};

export default contenido;
