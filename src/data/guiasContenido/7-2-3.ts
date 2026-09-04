/**
 * Contenido enriquecido para Grado 7 · Período 2 · Sesión 3
 * (sesión global 13).
 *
 * Auto-generado desde content/guias/7/7-2-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 7,
  periodo: 2,
  sesion: 3,
  titulo: 'Pensamiento computacional — las 4 técnicas del oficio',
  resumen: 'El pensamiento computacional no es exclusivo de la programación: es una forma de abordar problemas que se aplica en cualquier campo.',
  duracionMin: 90,
  subtema: 'Pensamiento computacional — las 4 técnicas del oficio',
  preLectura: {
    porQueImporta: 'El producto es esa aplicación + reflexión final.',
    preguntaDetonante: 'Si te pidieran organizar la fiesta de cumpleaños número 15 de tu prima (50 personas, presupuesto limitado, 3 días para organizarla), ¿por dónde empezarías? ¿Te paralizarías o sabrías descomponer el problema?',
    activacion: {
      titulo: 'Un problema grande para pensar',
      descripcion: 'Actividad 1 · IDENTIFICA — Un problema grande para pensar (10 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: aprendes las 4 técnicas con ejemplos, escoges un problema real, aplicas las 4 técnicas, evalúas el proceso.',
      siguiente: 'Esta semana, aplica las 4 técnicas a un problema más (puede ser un trabajo de otra materia o algo de tu vida).'
    }
  },
  conceptosClave: [
    {
      termino: 'Pensamiento computacional',
      definicion: 'Forma de abordar problemas complejos descomponiéndolos en pasos manejables que un computador (o cualquier persona) puede ejecutar. Su definición moderna viene de Jeannette Wing (2006). Tiene 4 técnicas: descomposición, patrones, abstracción, algoritmo.',
      ejemplo: 'Aplicar las 4 técnicas a \'organizar fiesta de 50 personas\': descompones (ceremonia, comida, invitados); reconoces patrones (lista invitados igual a lista prensa); abstraes (no decides menú aún); diseñas algoritmo (orden temporal).',
      emoji: '🧠'
    },
    {
      termino: 'Descomposición',
      definicion: 'Primera técnica del pensamiento computacional. Dividir un problema grande en sub-problemas más pequeños y manejables. La sensación de \'no sé por dónde empezar\' desaparece cuando descomponees.',
      ejemplo: 'Problema grande: \'celebrar 50 años del cole\'. Descomposición: ceremonia + decoración + sonido + comida + invitados + souvenirs + plan B. Cada uno se aborda aparte.',
      emoji: '🔨'
    },
    {
      termino: 'Reconocimiento de patrones',
      definicion: 'Segunda técnica. Identificar similitudes entre sub-problemas para no inventar soluciones desde cero. Si dos sub-problemas son parecidos, usas la misma estrategia para ambos.',
      ejemplo: 'En el caso del colegio: \'invitar exalumnos\' e \'invitar prensa\' son patrones similares (lista + correos + confirmaciones). Usas la misma estrategia para los dos.',
      emoji: '🎨'
    },
    {
      termino: 'Abstracción',
      definicion: 'Tercera técnica. Dejar afuera los detalles que no son esenciales para enfocarse en lo importante. No es ignorar para siempre; es enfocar en el momento correcto. Lo importante primero, los detalles después.',
      ejemplo: 'Planeando la ceremonia, abstraes el menú exacto (vendrá después). Planeando invitaciones, abstraes el color de manteles. Enfoque en lo esencial.',
      emoji: '👁️'
    },
    {
      termino: 'Diseño de algoritmo',
      definicion: 'Cuarta técnica. Después de descomponer, reconocer patrones y abstraer, armar la secuencia exacta de pasos para resolver el problema. Es la culminación: el plan operativo que se puede ejecutar.',
      ejemplo: 'Plan operativo para los 50 años: Día 1-15 planeación, Día 16-30 invitaciones, Día 31-45 producción, Día 46-55 ensayo, Día 56-60 ejecución. Algoritmo temporal claro.',
      emoji: '📋'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes aplicar las 4 técnicas?',
      instrucciones: '5 preguntas para verificar que dominas el pensamiento computacional.',
      preguntas: [
        {
          enunciado: 'Te dan un problema grande y abrumador. ¿Cuál es la PRIMERA técnica que aplicas?',
          opciones: [
            'Pensar todo de una.',
            'Rendirse.',
            'Buscar en internet la solución completa.',
            'Descomposición: dividir el problema en sub-problemas manejables.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Descomposición es la primera técnica. Sin dividir, el problema sigue grande. Con división, cada parte se vuelve manejable. La parálisis se rompe así.',
          feedbackIncorrecto: 'Descomposición primero. Sin dividir, el problema te paraliza. Dividir en sub-problemas hace que cada parte sea manejable. Después vienen las otras 3 técnicas.'
        },
        {
          enunciado: 'Estás organizando una fiesta y notas que \'invitar amigos\' e \'invitar familia\' son parecidos. ¿Qué técnica aplicaste?',
          opciones: [
            'Descomposición.',
            'Abstracción.',
            'Patrones (reconociste similitudes para usar la misma estrategia).',
            'Algoritmo.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Patrones = reconocer similitudes. Si dos sub-problemas son parecidos, usas la misma estrategia. Ahorras tiempo y mantienes coherencia.',
          feedbackIncorrecto: 'Patrones. Reconocer que dos sub-problemas son parecidos te permite reusar la solución. Es la 2da técnica del pensamiento computacional.'
        },
        {
          enunciado: 'Planeando la fiesta, te dices \'el color de los manteles lo decido después\'. ¿Qué técnica?',
          opciones: [
            'Descomposición.',
            'Abstracción (dejar detalles no esenciales fuera del momento actual).',
            'Patrones.',
            'Algoritmo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Abstracción: dejar afuera lo no esencial para enfocarse en lo importante. No es ignorar para siempre; es enfocar correctamente.',
          feedbackIncorrecto: 'Abstracción. Dejas afuera detalles que vendrán después (color de manteles) para enfocarte en lo importante ahora (lista de invitados, presupuesto).'
        },
        {
          enunciado: 'Quién definió el pensamiento computacional moderno?',
          opciones: [
            'Jeannette Wing (Carnegie Mellon, 2006).',
            'Steve Jobs.',
            'Bill Gates.',
            'Marco Aurelio.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Jeannette Wing (científica computacional) lo definió formalmente en 2006. Sus 4 técnicas son hoy estándar mundial en educación computacional.',
          feedbackIncorrecto: 'Jeannette Wing, científica de Carnegie Mellon, 2006. Sus 4 técnicas (descomposición, patrones, abstracción, algoritmo) son hoy estándar en educación computacional mundial.'
        },
        {
          enunciado: '¿Las 4 técnicas se aplican solo en programación?',
          opciones: [
            'Sí, solo sirven para programar.',
            'Solo en matemáticas.',
            'Solo en juegos.',
            'No. Se aplican en cualquier problema complejo: organizar eventos, estudiar, planear viajes, vivir.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Las 4 técnicas son universales. Sirven para programar, sí, pero también para organizar tu vida adulta. Es alfabetización del pensamiento, no solo del software.',
          feedbackIncorrecto: 'Universales. Sirven para cualquier problema complejo: programar, organizar eventos, estudiar, criar hijos, dirigir empresas. Por eso vale la pena dominarlas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Qué problema actual mío se ha vuelto abrumador porque no lo he descompuesto?',
    transferencia: 'Esta semana, aplica las 4 técnicas a un problema más (puede ser un trabajo de otra materia o algo de tu vida).',
    cierre: 'Al terminar la clase: (1) podrás identificar las 4 técnicas del pensamiento computacional; (2) sabrás aplicar cada una a un problema real; (3) podrás evaluar qué técnica necesita un problema en cada momento; (4) habrás creado una aplicación completa de las 4 técnicas a un problem…'
  },
  saberAncestral: {
    saber: 'Cuando una abuela campesina del Valle del Cauca preparaba el sancocho para 30 personas, no se ponía a llorar ante la inmensidad de la tarea: la dividía en partes. "Una persona pela papas", decía. "Otra pela yuca". "Otra lava el plátano". "Otra prende el fogón". "Otra trae el agua del nacedero". En 1 hora, el sancocho está listo. Esa habilidad — dividir un problema grande en sub-problemas manejables — es la primera técnica del pensamiento computacional. Se llama descomposición. Pero la abuela también notaba algo más: que pelar papa y pelar yuca son tareas parecidas (las dos requieren cuchillo, paciencia, retirar la cáscara). Eso es patrones. Y notaba que no importaba si la papa tenía manchas o no: la cocinaba igual — dejaba afuera los detalles irrelevantes. Eso es abstracción. Y al final, tenía el orden exacto de pasos para que todo saliera al mismo tiempo. Eso es algoritmo. Las 4 técnicas del pensamiento computacional las usaban las abuelas para hacer sancocho, mucho antes de que existieran los computadores.',
    preguntaPuente: 'Si te pidieran organizar la fiesta de cumpleaños número 15 de tu prima (50 personas, presupuesto limitado, 3 días para organizarla), ¿por dónde empezarías? ¿Te paralizarías o sabrías descomponer el problema?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del trabajo colectivo)',
      lente: 'lente del nosotros',
      cita: '"Lo que parece imposible solo, se vuelve posible cuando lo divides en partes. Ese saber salva vidas."',
      preguntaEspejo: '¿Qué problema actual mío se ha vuelto abrumador porque no lo he descompuesto?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"El imperio se gobierna provincia por provincia. La vida se vive día por día. Los problemas se resuelven sub-problema por sub-problema."',
      preguntaEspejo: '¿Estoy intentando resolver problemas grandes de un solo golpe? ¿Cómo cambiaría si los dividiera?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano del pensamiento computacional como alfabetización)',
      lente: 'lente de la infoesfera',
      cita: '"Quien aprende a pensar computacionalmente entiende el mundo. Quien no, sobrevive en el mundo de los demás."',
      preguntaEspejo: '¿Estoy desarrollando una forma adulta de pensar problemas, o me quedo en reacciones emocionales?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar las 4 técnicas del pensamiento computacional; (2) sabrás aplicar cada una a un problema real; (3) podrás evaluar qué técnica necesita un problema en cada m…',
    emocional: 'Marco Aurelio gobernaba el imperio romano (millones de personas, miles de problemas simultáneos).',
    ciudadana: 'Las personas que enfrentan tragedias — una mudanza forzada, la pérdida de un trabajo, una enfermedad de un familiar — a veces se paralizan ante la inmensidad.',
    local: 'Antes de salir, verifica que aplicaste las 4 técnicas, no solo 1 o 2.',
    intergeneracional: 'Las 4 técnicas son herramientas para entender cualquier problema complejo, no solo para programar.'
  }
};

export default contenido;
