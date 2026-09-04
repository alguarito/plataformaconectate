/**
 * Contenido enriquecido para Grado 7 · Período 1 · Sesión 5
 * (sesión global 5).
 *
 * Auto-generado desde content/guias/7/7-1-5.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 1,
  sesion: 5,
  titulo: 'Compartir y permisos — abrir mi taller a invitados con criterio',
  resumen: 'Compartir un archivo en OneDrive significa darle acceso a otra persona desde su cuenta.',
  duracionMin: 90,
  subtema: 'Compartir y permisos — abrir mi taller a invitados con criterio',
  preLectura: {
    porQueImporta: 'El producto es ese archivo compartido + tabla de permisos en cuaderno.',
    preguntaDetonante: 'Si compartes tu archivo de Word con tu mejor amigo dándole "puede editar" y él, sin querer, borra una página, ¿se pierde para siempre la información? ¿Cómo deberías haber compartido en lugar de eso?',
    activacion: {
      titulo: '5 situaciones, 3 niveles',
      descripcion: 'Actividad 1 · IDENTIFICA — 5 situaciones, 3 niveles (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: aprendes los 3 niveles de permisos, los aplicas a 5 situaciones, conoces las 5 reglas del compartir, compartes un archivo real.',
      siguiente: 'Esta semana, intenta compartir 1 archivo más con un familiar (papá, mamá, abuelos) usando "Puede ver": enséñales tu trabajo escolar.'
    }
  },
  conceptosClave: [
    {
      termino: 'Compartir archivo en OneDrive',
      definicion: 'Dar acceso a otra persona a tu archivo desde su cuenta. NO se copia el archivo: queda donde está, pero otros pueden abrirlo. Tú decides qué pueden hacer con él (3 niveles).',
      ejemplo: 'Compartes tu Word con tu profe dándole \'Puede ver\'. Él lo abre desde su cuenta. No le mandas el archivo por correo: es el mismo archivo, en la nube, compartido.',
      emoji: '🔗'
    },
    {
      termino: 'Puede ver (viewer)',
      definicion: 'Primer nivel de permiso. El invitado abre el archivo pero NO puede modificar nada. Si intenta escribir, aparece mensaje \'solo lectura\'. Es el nivel más seguro.',
      ejemplo: 'Le compartes al profe tu trabajo terminado dándole \'Puede ver\'. Él lo califica sin riesgo de cambiar nada por error. Después le pasas a \'Puede comentar\' si quieres retroalimentación escrita.',
      emoji: '👁️'
    },
    {
      termino: 'Puede comentar (commenter)',
      definicion: 'Segundo nivel. El invitado puede leer Y agregar comentarios al margen, pero NO cambia el texto. Los comentarios son como notas adhesivas digitales que solo tú decides si aceptas.',
      ejemplo: 'Antes de entregar tu ensayo, lo compartes con un compañero dándole \'Puede comentar\'. Él lee y agrega 5 sugerencias al margen. Tú decides cuáles aplicar.',
      emoji: '💬'
    },
    {
      termino: 'Puede editar (editor)',
      definicion: 'Tercer y máximo nivel. El invitado puede leer, comentar y cambiar el archivo libremente. Es para coautoría real (varios escribiendo a la vez). Cuidado: el editor puede dañar tu trabajo sin querer.',
      ejemplo: 'Tu equipo de 3 va a hacer trabajo grupal. Compartes el Word con los 2 compañeros dándole \'Puede editar\'. Cada uno escribe su sección. Se ve quién escribió cada parte.',
      emoji: '✏️'
    },
    {
      termino: '5 reglas del compartir',
      definicion: 'Las 5 normas para compartir bien: (1) menor permiso necesario, (2) verifica el correo, (3) pon plazo de expiración, (4) revoca acceso cuando termine, (5) no compartas datos sensibles.',
      ejemplo: 'Compartes con un profe dándole \'Puede ver\' (no editor), verificas que el correo es correcto, pones expiración 30 días, después del semestre revocas acceso. Eso es compartir profesional.',
      emoji: '📋'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes compartir con criterio?',
      instrucciones: '5 preguntas para verificar que dominas los 3 niveles de permisos.',
      preguntas: [
        {
          enunciado: 'Le entregas la tarea final al profe. ¿Qué nivel de permiso le das?',
          opciones: [
            'Puede editar (por si quiere mejorarla).',
            'Puede ver (solo lectura).',
            'Puede comentar.',
            'Lo bloqueo para que no la abra.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Tarea terminada = puede ver. El profe la lee y califica. No queremos que la modifique por error.',
          feedbackIncorrecto: 'Para entregar trabajos terminados: \'Puede ver\'. Si le das editor, el profe puede cambiar tu tarea por accidente. La regla del menor permiso necesario.'
        },
        {
          enunciado: 'Tu equipo de 3 va a escribir un trabajo grupal en un Word compartido. ¿Qué nivel?',
          opciones: [
            'Puede ver (todos pueden mirarlo).',
            'Puede comentar.',
            'Solo 1 puede editar, los otros 2 solo ven.',
            'Puede editar (todos pueden escribir).'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Coautoría real = todos editores. Eso permite que los 3 escriban al mismo tiempo en sus secciones. Lo verás en S6 a fondo.',
          feedbackIncorrecto: 'Trabajo en grupo = puede editar para todos. Solo así pueden escribir en paralelo. Lo verás a fondo en S6 (coautoría asincrónica).'
        },
        {
          enunciado: 'Antes de entregar, quieres que un compañero revise tu ensayo y te diga errores. ¿Qué nivel?',
          opciones: [
            'Puede editar (que corrija él directamente).',
            'Puede ver (solo mira).',
            'Puede comentar (revisa y agrega sugerencias sin cambiar).',
            'Lo dejas sin compartir.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. \'Puede comentar\' es ideal para revisión: el otro lee, sugiere al margen, pero TÚ decides cambios. Sin riesgo de que él modifique sin permiso.',
          feedbackIncorrecto: '\'Puede comentar\' para revisión: él agrega notas al margen, tú decides aceptarlas. Si le das editor, podría cambiar cosas sin que tú lo apruebes.'
        },
        {
          enunciado: 'Compartiste un archivo con un compañero hace un mes. Ya no es de tu equipo. ¿Qué haces?',
          opciones: [
            'Voy a Compartir → veo quién tiene acceso → revoco el acceso del compañero que ya no es del equipo.',
            'Nada, da igual.',
            'Borro el archivo completo.',
            'Cambio mi contraseña.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Regla 4 del compartir: revoca acceso cuando ya no se necesite. En Compartir puedes ver y revocar accesos. Higiene digital básica.',
          feedbackIncorrecto: 'Revoca acceso cuando ya no se necesite. Higiene digital: no dejas la puerta abierta cuando los invitados ya se fueron. Va al panel de Compartir.'
        },
        {
          enunciado: 'Tu mejor amigo te dice: \'Compárteme tu cuenta de OneDrive con todos los archivos\'. ¿Qué haces?',
          opciones: [
            'Le doy mi contraseña.',
            'No. La cuenta es solo mía. Si quiere ver algún archivo específico, lo comparto con ese archivo a su correo.',
            'Le mando capturas de pantalla.',
            'Le creo otra cuenta a mi nombre.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. La cuenta NO se comparte. Si necesita ver algo, le compartes el archivo específico. Compartir cuenta = perdida de control total.',
          feedbackIncorrecto: 'La cuenta es tuya, no se comparte. Si necesita acceder a algo, compartes ese archivo específico. Compartir contraseña = perder control de TODO.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Comparto con criterio o por comodidad?',
    transferencia: 'Esta semana, intenta compartir 1 archivo más con un familiar (papá, mamá, abuelos) usando "Puede ver": enséñales tu trabajo escolar.',
    cierre: 'Al terminar la clase: (1) podrás identificar los 3 niveles de permisos; (2) sabrás aplicar el nivel correcto a 5 situaciones; (3) podrás evaluar las 5 reglas del compartir responsable; (4) habrás compartido 1 archivo con 2 compañeros con permisos distintos.'
  },
  saberAncestral: {
    saber: 'Cuando un maestro artesano de Cartago abría su taller a un aprendiz, decidía exactamente qué podía hacer y qué no. En el taller de don Lucho el relojero, no todos los aprendices podían tocar las mismas cosas. Al recién llegado, don Lucho le decía: "Mire, no toque". Era nivel lector. Al aprendiz de 6 meses, le decía: "Mire, dígame si ve algo raro, pero todavía no arregle". Era nivel comentarista. Al aprendiz de 2 años, ya: "Tome este reloj y repárelo, después le reviso". Era nivel editor. ¿Por qué tantos niveles? Porque abrir el taller no es regalar el taller. Cada nivel de acceso protegía el oficio — un aprendiz inexperto podía dañar un reloj caro tocando lo equivocado. Hoy en Microsoft 365 pasa exactamente igual: cuando compartes un archivo, escoges el nivel de permisos. Saber escogerlo es la diferencia entre colaborar bien y armar un desorden.',
    preguntaPuente: 'Si compartes tu archivo de Word con tu mejor amigo dándole "puede editar" y él, sin querer, borra una página, ¿se pierde para siempre la información? ¿Cómo deberías haber compartido en lugar de eso?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del trato responsable)',
      lente: 'lente del nosotros',
      cita: '"Compartir bien es escoger con criterio a quién das qué. No es dar todo a todos: eso no es generosidad, es descuido."',
      preguntaEspejo: '¿Comparto con criterio o por comodidad?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Antes de dar, pregunta: ¿qué necesita esta persona específicamente? No lo que tú te imaginas; lo que ella requiere para hacer su parte."',
      preguntaEspejo: '¿Pienso en lo que la otra persona necesita o en lo que es más rápido para mí?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del trabajo digital colaborativo)',
      lente: 'lente de la infoesfera',
      cita: '"La diferencia entre un equipo digital que funciona y uno que no es la calidad de los permisos. Acceso fino = equipo eficaz."',
      preguntaEspejo: 'Si formara un equipo de trabajo, ¿sabría asignar permisos finos a cada integrante?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar los 3 niveles de permisos; (2) sabrás aplicar el nivel correcto a 5 situaciones; (3) podrás evaluar las 5 reglas del compartir responsable; (4) habrás comp…',
    emocional: 'Compartir bien empieza por una pregunta: ¿qué necesita exactamente la otra persona?.',
    ciudadana: 'Hay quien cree que "ser generoso" es dar a todos el máximo acceso.',
    local: 'Antes de salir, verifica con los compañeros que ellos pueden abrir el archivo con el permiso correcto.',
    intergeneracional: 'Los equipos digitales que funcionan bien tienen un patrón: cada persona tiene exactamente el acceso que necesita (ni más, ni menos).'
  }
};

export default contenido;
