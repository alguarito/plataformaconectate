/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 4
 * (sesión global 24).
 *
 * Auto-generado desde content/guias/11/11-3-4.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 4,
  titulo: 'MVP digital — una versión imperfecta para probar',
  resumen: 'El MVP, Producto Mínimo Viable (Eric Ries, The Lean Startup, 2011) es la versión digital exacta de la primera del alfarero: la versión más pequeña posible del producto que permita aprender algo real sobre los supuestos críticos del Canvas.',
  duracionMin: 90,
  subtema: 'MVP digital — una versión imperfecta para probar',
  preLectura: {
    porQueImporta: 'El criterio principal: que un emprendedor experimentado, viendo tu MVP, pueda decir "entendí qué prueba y cómo se mide" sin necesidad de explicaciones adicionales.',
    preguntaDetonante: '¿Qué sabía el alfarero al hacer la primera antes de la serie, que el emprendedor novato olvida cuando se obsesiona con "lanzar perfecto"? ¿Y por qué Reid Hoffman dice que la vergüenza por tu MVP es señal de buena disciplina, no de mal trabajo?',
    activacion: {
      titulo: '¿Cuál de mis 3 supuestos críticos pruebo primero?',
      descripcion: 'Actividad 1 · IDENTIFICA — ¿Cuál de mis 3 supuestos críticos pruebo primero?',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy construyes el primer artefacto que pondrá uno de esos supuestos contra el mundo.',
      siguiente: 'Llega con tu MVP funcional probado por al menos 1 usuario real y los primeros datos de uso registrados.'
    }
  },
  conceptosClave: [
    {
      termino: 'MVP (Producto Mínimo Viable)',
      definicion: 'Versión más simple del producto que aún permite probar la hipótesis principal. No es prototipo ni producto final: es la versión mínima que se puede poner en manos de usuarios reales para aprender. Acuñado por Eric Ries (Lean Startup).',
      ejemplo: 'En vez de construir app completa, MVP puede ser: landing + formulario de captura + responder manual cada email. Funciona para probar si la propuesta convence; si sí, se automatiza después.',
      emoji: '🚧'
    },
    {
      termino: '3 piezas digitales del MVP',
      definicion: 'Combinación mínima típica de un MVP digital: (1) sitio simple o landing, (2) formulario de captura, (3) flujo de respuesta (manual al inicio, automatizable después).',
      ejemplo: 'Landing en Carrd o Notion + Google Form como captura + responder cada solicitud por correo en menos de 24h. Total: 1 día de armado. Funciona para validar.',
      emoji: '🔧'
    },
    {
      termino: 'Criterios de éxito y falla',
      definicion: 'Antes de construir, definir EXPLÍCITAMENTE qué se considera "funcionó" y qué se considera "falló". Sin criterios previos, todo resultado se interpreta como éxito (sesgo de confirmación).',
      ejemplo: 'Éxito: 10+ formularios en 1 semana con 3+ ofreciendo pagar. Falla: <5 formularios o ningún ofrecimiento de pago. Decidir antes de medir.',
      emoji: '🎯'
    },
    {
      termino: 'Imperfecto pero real',
      definicion: 'Filosofía del MVP: mejor lanzar imperfecto y aprender que perfeccionar sin lanzar. Reid Hoffman (LinkedIn): "si no te avergüenza la primera versión de tu producto, lanzaste tarde".',
      ejemplo: 'Versión 1 fea con bugs pero funcional > versión imaginaria perfecta nunca lanzada. La 1 te enseña; la imaginaria no.',
      emoji: '🐛'
    },
    {
      termino: 'Build-Measure-Learn (Lean Startup)',
      definicion: 'Ciclo de Eric Ries. Construir lo mínimo (Build) → medir uso real (Measure) → aprender qué ajustar (Learn) → repetir. Cada ciclo es semanas, no meses.',
      ejemplo: 'Semana 1: armas MVP. Semana 2: 10 usuarios lo prueban. Semana 3: ajustas según datos. Semana 4: vuelves a probar. Aprendizaje continuo.',
      emoji: '🔄'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué es un MVP?',
      instrucciones: '5 preguntas sobre el Producto Mínimo Viable.',
      preguntas: [
        {
          enunciado: '¿Qué es un MVP?',
          opciones: [
            'Producto final perfecto.',
            'Versión más simple que aún permite probar la hipótesis principal.',
            'Prototipo sin usuarios.',
            'Una idea sin construir.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. MVP = versión mínima en manos de usuarios reales para aprender. Acuñado por Eric Ries. Lo opuesto al producto final pulido.',
          feedbackIncorrecto: 'MVP = mínima versión real para usuarios reales. Ni prototipo (sin usuarios) ni producto final (perfecto). Punto medio que permite aprender rápido.'
        },
        {
          enunciado: 'Antes de construir el MVP, ¿qué defines?',
          opciones: [
            'Solo la idea general.',
            'Criterios EXPLÍCITOS de éxito y falla (qué se considera \'funcionó\' o \'falló\').',
            'El precio.',
            'El logo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Criterios definidos antes de medir. Sin esto, todo resultado se interpreta como éxito (sesgo de confirmación). Define éxito numérico.',
          feedbackIncorrecto: 'Criterios de éxito y falla antes de construir. Ejemplo: éxito = 10 formularios, falla = <5. Sin meta clara, la medición se sesga.'
        },
        {
          enunciado: '¿Qué dice Reid Hoffman sobre la primera versión de tu producto?',
          opciones: [
            'Debe ser perfecta.',
            'Si no te avergüenza la primera versión, lanzaste tarde.',
            'Nunca lances algo imperfecto.',
            'Espera 2 años a perfeccionar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Imperfecto pero real > perfecto imaginario nunca lanzado. El MVP debe avergonzarte un poco para que estés aprendiendo.',
          feedbackIncorrecto: 'Reid Hoffman: si no avergüenza, tardaste demasiado. Lanzar imperfecto y aprender > perfeccionar sin lanzar. Filosofía del MVP.'
        },
        {
          enunciado: 'Tu MVP de captura de demanda con 3 piezas digitales típicas son...',
          opciones: [
            'App nativa + SDK + backend.',
            'Landing simple + formulario + flujo de respuesta (manual al inicio).',
            '5 microservicios en AWS.',
            'Sistema empresarial completo.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. 3 piezas mínimas: landing + formulario + flujo. Manual al inicio, automatizable después. Funciona para validar en 1 semana.',
          feedbackIncorrecto: 'MVP típico = landing + formulario + flujo manual. No necesitas infraestructura compleja para validar. 1 semana de armado.'
        },
        {
          enunciado: 'Build-Measure-Learn. ¿Cuánto debe durar 1 ciclo?',
          opciones: [
            '1 año.',
            'Semanas, no meses. Cada ciclo entrega aprendizaje.',
            '1 día.',
            '5 años.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Semanas. Construir > medir > aprender > ajustar. Si toma meses, ya no es Lean. La velocidad del ciclo es el activo.',
          feedbackIncorrecto: 'Ciclos cortos (semanas). Lean Startup: aprender rápido > construir lento. Si el ciclo dura meses, ya perdiste la ventaja del método.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Cuando invite a mi primer usuario al MVP, ¿le voy a decir con honestidad que es una versión imperfecta para probar, o se lo voy a presentar como producto terminado para impresionar?',
    transferencia: 'Llega con tu MVP funcional probado por al menos 1 usuario real y los primeros datos de uso registrados.',
    cierre: 'Al terminar podrás: (1) identificar cuál de tus 3 supuestos críticos vale más la pena probar primero y por qué; (2) aplicar el patrón MVP combinando 3 piezas digitales accesibles (landing + formulario + flujo de respuesta); (3) crear tu MVP funcional, end-to-end, en una sola tard…'
  },
  saberAncestral: {
    saber: 'En los talleres alfareros de Cartago la Vieja, en La Tebaida, en el Quindío profundo, ningún maestro saca jamás una serie de 50 piezas sin antes hacer la pieza de muestra. Esa pieza tiene un nombre antiguo: la primera. La primera es deliberadamente imperfecta: el barro elegido es del montón principal, pero el horneado se hace a temperatura menor para verificar antes de invertir leña; la forma se hace rápida para validar la mano; el esmalte se aplica solo en una zona para ver cómo se comporta. Si la primera quiebra, no se quema la serie. Si la primera se ve sólida, recién entonces el maestro invierte 3 días en producir las 50. La sabiduría es ancestral y económica: nadie quema 50 piezas para descubrir que el barro no servía. La misma lógica opera con la partera que prueba un té antes de prescribirlo, con el ebanista que entalla una muestra antes del juego de comedor, con el sastre que arma el patrón en papel antes de cortar la tela buena. El oficio profesional siempre ha sabido que una versión imperfecta para probar ahorra meses de error.',
    preguntaPuente: '¿Qué sabía el alfarero al hacer la primera antes de la serie, que el emprendedor novato olvida cuando se obsesiona con "lanzar perfecto"? ¿Y por qué Reid Hoffman dice que la vergüenza por tu MVP es señal de buena disciplina, no de mal trabajo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Todo MVP decide si respeta al usuario como sujeto o lo usa como objeto de experimento.',
      preguntaEspejo: 'Cuando invite a mi primer usuario al MVP, ¿le voy a decir con honestidad que es una versión imperfecta para probar, o se lo voy a presentar como producto terminado para impresionar?'
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'Lo que está en tu poder es construir; lo que no está en tu poder es que sea perfecto la primera vez.',
      preguntaEspejo: '¿Estoy retrasando mi MVP por mejoras reales o por miedo a que se vea imperfecto? ¿Qué dejaría en el MVP que hoy quiero pulir, si tuviera que lanzarlo en 4 horas?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'El MVP transparente es la nueva ética del experimento digital con humanos.',
      preguntaEspejo: '¿Mi MVP declara su naturaleza experimental al usuario, o lo disfraza de producto terminado? ¿Estoy entrenándome en una ética que escalaré, o en una que tendré que desaprender?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) identificar cuál de tus 3 supuestos críticos vale más la pena probar primero y por qué; (2) aplicar el patrón MVP combinando 3 piezas digitales accesibles (landing + formulario…',
    emocional: 'Es tentador retrasar el lanzamiento del MVP "hasta que esté mejor".',
    ciudadana: 'Tu MVP entra en contacto con personas reales.',
    local: 'Antes de cerrar, mira el MVP desde las cinco dimensiones humanas.',
    intergeneracional: 'Antes de internet, los experimentos con personas requerían comités de ética.'
  }
};

export default contenido;
