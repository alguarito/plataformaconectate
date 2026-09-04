/**
 * Contenido enriquecido para Grado 6 · Período 2 · Sesión 1
 * (sesión global 11).
 *
 * Auto-generado desde content/guias/6/6-2-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 2,
  sesion: 1,
  titulo: 'Apertura periodo 2 — las máquinas que nos rodean por dentro',
  resumen: 'En el Periodo 2 (Hardware y software) vas a recorrer 10 sesiones organizadas así: (S1) Hoy: Apertura del periodo.',
  duracionMin: 90,
  subtema: 'Apertura periodo 2 — las máquinas que nos rodean por dentro',
  preLectura: {
    porQueImporta: 'El producto es ese inventario + pregunta-radar + compromiso firmado.',
    preguntaDetonante: 'Cuando una persona dice "mi computador está lento, le voy a meter más RAM", ¿sabes lo que dijo? ¿Sabes qué es RAM? ¿Por qué meter más ayudaría? Si no, este periodo te lo va a enseñar.',
    activacion: {
      titulo: 'Inventario de las máquinas que conoces',
      descripcion: 'Actividad 1 · IDENTIFICA — Inventario de las máquinas que conoces (12 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy haces 4 cosas: recuerdas las máquinas que usas, descubres la ruta del P2, firmas el compromiso de cuidar la sala, y planteas tu pregunta-radar.',
      siguiente: 'Trae el cuaderno con el inventario + preguntas + compromiso firmado.'
    }
  },
  conceptosClave: [
    {
      termino: 'Hardware',
      definicion: 'Todo lo que se puede tocar en el computador y otras máquinas inteligentes: la pantalla, el teclado, los chips por dentro, los cables. Si lo puedes golpear o llevar en la mano, es hardware.',
      ejemplo: 'El teclado, monitor, ratón, gabinete, parlante: todo eso es hardware. Lo aprendes a fondo durante el periodo 2.',
      emoji: '💻'
    },
    {
      termino: 'Software',
      definicion: 'Las instrucciones y archivos que viven dentro del hardware. No se tocan, pero existen guardados en memoria. Sistema operativo, programas, apps, archivos: todo es software.',
      ejemplo: 'Windows, Word, Chrome, WhatsApp, tus fotos: todos son software. Necesitan hardware para existir y funcionar.',
      emoji: '📦'
    },
    {
      termino: 'Sala de sistemas',
      definicion: 'El espacio físico del colegio donde están los computadores. Tiene reglas de cuidado: manos limpias, sin comer, postura correcta, apagado adecuado, reportar daños. Cuidarla es respetar a quienes vendrán después.',
      ejemplo: 'Cada vez que entras a la sala de sistemas, miras alrededor: ¿hay un cable suelto? ¿algún equipo descuidado? Reportarlo al profe es parte del cuidado colectivo.',
      emoji: '🏛️'
    },
    {
      termino: 'Inventario de máquinas',
      definicion: 'Lista de las máquinas inteligentes que usas o ves cada día. Te ayuda a darte cuenta de que vives rodeado de tecnología (computador, celular, cajeros, electrodomésticos modernos, GPS).',
      ejemplo: 'Mi inventario podría ser: celular, computador del cole, microondas, cajero del banco, smart TV de la casa, GPS del bus, parlante Bluetooth, lavadora, nevera nueva, caja registradora. Suelen ser muchas más de las que uno nota.',
      emoji: '📋'
    },
    {
      termino: 'Pregunta-radar del periodo',
      definicion: 'Pregunta personal que tú escoges al inicio del periodo. Espera respuesta durante las 10 sesiones. En P2 puede ser sobre máquinas: cómo funcionan, por qué se calientan, qué computador conviene comprar.',
      ejemplo: 'Tu pregunta-radar del P2 podría ser \'¿qué computador debería comprar?\' Las sesiones del periodo (especialmente S10) te darán las herramientas para responderla con criterio.',
      emoji: '🧭'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Llegaste bien al periodo 2?',
      instrucciones: '5 preguntas para verificar que conoces la ruta y firmaste el compromiso.',
      preguntas: [
        {
          enunciado: '¿Por qué entender el hardware del computador te hace más libre?',
          opciones: [
            'Porque puedes presumir de saber mucho.',
            'Porque ya no necesitas usarlo.',
            'Porque resuelves problemas sin depender de técnicos, decides con criterio cuando compras, no te dejas engañar.',
            'Porque ahorra electricidad.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Entender te quita dependencia. El que sabe decide; el que no sabe depende. Esa es la libertad técnica del siglo XXI.',
          feedbackIncorrecto: 'Entender te hace libre: decides cuando compras, resuelves problemas básicos, no te estafan. Sin entender, dependes de otros para todo.'
        },
        {
          enunciado: 'Cuál es una de las 5 reglas de la sala de sistemas?',
          opciones: [
            'Puedo comer chocolate frente al computador.',
            'Apagar el computador con el botón de fuerza.',
            'Usar el computador descalzo.',
            'Manos limpias y secas antes de tocar teclado o ratón.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Bien. Manos limpias y secas: una de las 5 reglas. La humedad y la suciedad dañan electrónica. Pequeña disciplina, gran ahorro.',
          feedbackIncorrecto: 'Manos limpias y secas es regla 1. Otras: sin comer, buena postura, apagado correcto, reportar daños. Cuidar la sala es ciudadanía.'
        },
        {
          enunciado: 'Tu primo dice \'mi computador está lento, le voy a comprar más RAM\'. ¿Sabes qué le quiere meter?',
          opciones: [
            'No tengo idea, suena difícil.',
            'Una memoria que ayuda al equipo a tener más programas abiertos a la vez. Lo aprenderás en P2.',
            'Le va a comprar un programa nuevo.',
            'Algo decorativo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. La RAM es la memoria de trabajo del computador. Más RAM = más programas abiertos sin lentitud. Lo verás en S3 del periodo 2.',
          feedbackIncorrecto: 'RAM es memoria de trabajo. Más RAM permite más programas abiertos sin que se trabe. Lo aprenderás en detalle en S3 del P2.'
        },
        {
          enunciado: '¿Cuántos temas tiene el periodo 2 según la ruta presentada?',
          opciones: [
            '10 sesiones de S1 a S10 + S11 de cosecha.',
            '5 temas.',
            '20 temas.',
            'Solo 1 tema.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. P2 tiene 10 sesiones (S1 a S10) más S11 de cosecha. Cada sesión es un tema cerrado pero conectado con los anteriores.',
          feedbackIncorrecto: '10 sesiones (S1 a S10) más S11 de cosecha. Es el patrón de los 3 periodos del año. Conoces la ruta = caminas con mapa.'
        },
        {
          enunciado: 'Tu pregunta-radar del periodo es \'¿cuál computador me conviene comprar?\'. ¿Qué sesión te ayudará más a responderla?',
          opciones: [
            'Ninguna.',
            'S10 (Mi computador ideal), pero también todas las anteriores porque te dan el contexto.',
            'Solo la S1 que es hoy.',
            'Una clase fuera del colegio.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. S10 es la sesión específica, pero las anteriores te dan el contexto (hardware, software, mantenimiento) para tomar la decisión con criterio.',
          feedbackIncorrecto: 'S10 (Mi computador ideal) responde directo. Las anteriores te dan contexto para no decidir a ciegas. Todo el periodo te prepara para esa pregunta.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Vivo con miedo de las máquinas que uso, o con criterio? ¿Qué cosa me dejaría de dar miedo si la entendiera mejor?',
    transferencia: 'Trae el cuaderno con el inventario + preguntas + compromiso firmado.',
    cierre: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 2 (los 10 temas); (2) sabrás explicar por qué entender las máquinas por dentro te hace más libre; (3) podrás aplicar 5 reglas de cuidado de la sala de sistemas; (4) habrás creado un inventario de las máquinas que co…'
  },
  saberAncestral: {
    saber: 'Antes de que las máquinas modernas llegaran a Cartago, había maestros de oficio en cada cuadra que entendían sus herramientas por dentro. El relojero don Lucho, en su vitrina de la calle 14, conocía cada engranaje del reloj. La costurera doña Carmen, sentada en su Singer, entendía por qué a veces se rompía el hilo y cómo arreglarlo. El panadero don Aurelio, frente a su horno de leña, sabía a qué temperatura crecía la masa. Cada uno conocía su máquina por dentro, no solo por fuera. Por eso resolvían problemas, no quedaban esclavos del aparato. Hoy nuestras máquinas se llaman computador, celular, cajero electrónico. Son más complejas que el reloj de don Lucho, pero el principio es el mismo: quien las entiende por dentro es libre; quien solo las usa es dependiente. Este periodo 2 es tu entrada al oficio de entender las máquinas inteligentes. No vas a aprender a programar (eso vendrá en otros grados): vas a aprender qué hay adentro, cómo funciona, cómo cuidarlo, cómo elegirlo.',
    preguntaPuente: 'Cuando una persona dice "mi computador está lento, le voy a meter más RAM", ¿sabes lo que dijo? ¿Sabes qué es RAM? ¿Por qué meter más ayudaría? Si no, este periodo te lo va a enseñar.'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel (filósofo del saber popular)',
      lente: 'lente del nosotros',
      cita: '"El campesino que entiende su tierra es libre. El que solo la trabaja sin entenderla, vive con miedo de perderla."',
      preguntaEspejo: '¿Vivo con miedo de las máquinas que uso, o con criterio? ¿Qué cosa me dejaría de dar miedo si la entendiera mejor?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: '"Saber el nombre y la función de cada herramienta que usas es la primera virtud del que actúa bien en el mundo."',
      preguntaEspejo: '¿Cuántas herramientas uso todos los días sin saber su nombre ni su función? ¿Cómo me afecta eso?'
    },
    floridi: {
      autor: 'Luciano Floridi (filósofo italiano de la era digital)',
      lente: 'lente de la infoesfera',
      cita: '"En el siglo XXI, no entender hardware es como en el siglo XX no saber leer. Te excluye de decisiones importantes en tu propia vida."',
      preguntaEspejo: '¿Estoy convirtiéndome en ciudadano técnicamente alfabetizado, o me quedo en el grupo de los que aprietan botones sin saber?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar la clase: (1) podrás identificar la ruta del periodo 2 (los 10 temas); (2) sabrás explicar por qué entender las máquinas por dentro te hace más libre; (3) podrás aplicar 5 reglas de cuidad…',
    emocional: 'Marco Aurelio era emperador romano, pero también conocía a fondo sus herramientas: la pluma, el papiro, la armadura, el caballo.',
    ciudadana: 'Lo mismo aplica a las máquinas.',
    local: 'Antes de salir, verifica que el inventario tiene 10 máquinas reales tuyas y las 5 preguntas son sinceras.',
    intergeneracional: 'Floridi lo dice fuerte porque es real: una persona que no entiende mínimamente cómo funciona su computador y su celular va a tomar peores decisiones (compra equipos equivocados, se deja estafar, no en…'
  }
};

export default contenido;
