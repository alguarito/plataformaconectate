/**
 * Contenido enriquecido para Grado 6 · Período 1 · Sesión 11
 * (sesión global 11 — COSECHA MILC del periodo 1).
 *
 * Tema: Vitrina del Escuta + auto-check MILC #2 + cierre del primer ciclo.
 * Aplica PATRON_S11_cosecha.md · variante P1·S11 Primera cosecha.
 * Espeja simétricamente a 6-1-1.ts.
 * Calibración 6°: 30% reflexión · 70% producto.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 6,
  periodo: 1,
  sesion: 11,
  titulo:
    'Cosecha del periodo 1 · Vitrina del Escuta + auto-check MILC + cierre del primer ciclo',
  ocultarPDF: true,
  sinStepper: true,
  resumen:
    'Habitamos la sala digital con dignidad — capítulo 1 cerrado: lo que escuchamos también nos enseñó. Hoy presentas tu Escuta, comparas tu auto-check con la línea base y entregas el primer hito del proyecto del año.',
  duracionMin: 90,
  subtema: 'Cosecha · Primera vitrina + auto-check #2',

  preLectura: {
    porQueImporta:
      'Cerrar bien un ciclo es tan importante como abrirlo. Si pasaste 11 sesiones aprendiendo y no muestras lo aprendido, te lo guardas para ti — y este año dijimos que la voz del adulto mayor también merece llegar a otros.',
    preguntaDetonante:
      'Si solo tuvieras 3 minutos para que el curso entendiera por qué tu Escuta importa, ¿qué cuentas y qué dejas afuera?',
    activacion: {
      titulo: 'Círculo de la cosecha',
      descripcion:
        'En U, cada estudiante dice en una frase lo más valioso que aprendió en el periodo. El docente cierra: "lo que llevas hoy es la primera cosecha del año".',
      duracionMin: 5,
    },
    conexion: {
      anterior:
        'Vienes de la S10: socialización y portafolio del informe Escuta. Ya tienes evidencias.',
      siguiente:
        'En P2·S1 te re-encuentras con MILC y entras al hardware: vas a digitalizar tu Escuta en un equipo que aprenderás a cuidar.',
    },
  },

  conceptosClave: [
    {
      categoria: '🎤 Anatomía de una vitrina de 3 minutos',
      termino: 'Hilo narrativo',
      definicion:
        'El orden que sostiene la atención: arrancas con un gancho, muestras 1-2 evidencias, cierras con una frase memorable.',
      ejemplo:
        'Gancho: "Mi abuela escribía cartas que duraban semanas." Evidencia: foto + audio. Cierre: "Hoy una nota llega en segundos, pero tarda menos en olvidarse."',
      emoji: '🧵',
    },
    {
      categoria: '🎤 Anatomía de una vitrina de 3 minutos',
      termino: 'Evidencia visual',
      definicion:
        'Una imagen, captura de audio o foto que respalda lo que cuentas — sin ella el público se distrae.',
      ejemplo:
        'En tu vitrina muestras la foto de tu abuela + 30 segundos del audio del Escuta. No 5 minutos de audio.',
      emoji: '🖼️',
    },
    {
      categoria: '🎤 Anatomía de una vitrina de 3 minutos',
      termino: 'Retroalimentación entre pares',
      definicion:
        '1 fortaleza + 1 oportunidad de mejora que un compañero te entrega por escrito al final de tu vitrina.',
      ejemplo:
        '"Fortaleza: tu cierre fue muy claro. Mejora: hablaste rápido al inicio, baja el ritmo."',
      emoji: '💬',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC, ahora con evidencia',
      termino: 'Desarrollo personal · evidenciado',
      definicion:
        'No basta decir "crecí". Muestra UN momento del periodo donde notaste el cambio.',
      ejemplo:
        '"Antes pensaba que mi abuela no tenía nada nuevo que decirme; después de la entrevista entendí que sí."',
      emoji: '💚',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC, ahora con evidencia',
      termino: 'Control emocional · evidenciado',
      definicion:
        'Una emoción que reconociste y regulaste durante el periodo.',
      ejemplo:
        '"Sentí frustración cuando el correo no me funcionó al primer intento — respiré, pedí ayuda y aprendí."',
      emoji: '🟡',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC, ahora con evidencia',
      termino: 'Reflexión ciudadana · evidenciada',
      definicion:
        'Una decisión digital que tomaste en el periodo pensando en otros, no solo en ti.',
      ejemplo:
        '"No reenvié una cadena de WhatsApp con un dato sin verificar — porque aprendí que el ruido también daña."',
      emoji: '🤝',
    },
    {
      categoria: '🔍 Las 5 dimensiones MILC, ahora con evidencia',
      termino: 'Reflexión local + Vínculo intergeneracional · evidenciados',
      definicion:
        'Cómo tu Escuta te conectó con Cartago / el Valle y entre dos generaciones.',
      ejemplo:
        '"Mi entrevistado vivía en Ansermanuevo y trabajaba en café. Lo que me contó nunca había salido de la familia."',
      emoji: '🌳',
    },
  ],

  laboratorios: [
    {
      tipo: 'visualizacion',
      titulo: 'Vitrina del Escuta + auto-check #2 + retroalimentación entre pares',
      instrucciones:
        'Cinco pasos que ocupan el 70% de la sesión. Sales con producto entregado, auto-check registrado y retroalimentación firmada.',
      pasos: [
        {
          titulo: 'Paso 1 · Preparar la vitrina (10 min)',
          texto:
            'Selecciona 1 evidencia visual (foto o captura) + 1 fragmento de audio de 30 seg + 3 frases que sostendrán tu hilo narrativo.',
        },
        {
          titulo: 'Paso 2 · Vitrina pública (3 min/estudiante)',
          texto:
            'Cada estudiante presenta. Cronómetro a la vista. El curso escucha en silencio — sin interrumpir.',
        },
        {
          titulo: 'Paso 3 · Retroalimentación entre pares (15 min)',
          texto:
            'Cada estudiante recibe 2 papeletas: una "fortaleza" y una "mejora" de compañeros distintos. Las firma quien las entrega.',
        },
        {
          titulo: 'Paso 4 · Auto-check MILC #2 + comparación con #1 (10 min)',
          texto:
            'Mismo formato del primer día — 5 dimensiones, escala 1-5, emojis. Al lado dibujas la flecha de cambio respecto a #1: ↑ ↓ →. Si una dimensión bajó, NO es problema — es información.',
        },
        {
          titulo: 'Paso 5 · Marcar el mapa del año + entrada de cierre del diario',
          texto:
            'Pones la marca del cierre P1 en la cartelera. En el diario respondes: "Hoy, ¿cómo veo mi proyecto frente a cómo lo vi el primer día?"',
        },
      ],
    },
    {
      tipo: 'quiz',
      titulo: 'Quiz de cosecha · Síntesis del periodo 1',
      instrucciones: '5 preguntas que integran lo aprendido en S2-S10. Sin nota dura.',
      preguntas: [
        {
          enunciado: 'Lo que más cambia de tu identidad digital cuando empiezas a usar el correo institucional es:',
          opciones: [
            'El nombre',
            'La foto',
            'La huella digital pasiva que empieza a dejar trazo formal',
            'La voz',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Exacto. Cada correo enviado deja huella pasiva que un futuro empleador o profesor podría leer años después.',
          feedbackIncorrecto:
            '❌ Lo más profundo no es lo visible (nombre, foto). Es la huella pasiva que el correo institucional empieza a registrar de ti.',
        },
        {
          enunciado: 'Ante un correo dudoso de "ganaste un premio", la regla MILC del periodo es:',
          opciones: [
            'Abrir y mirar qué dice',
            'Reenviar a amigos por si acaso',
            'Detener · verificar canal oficial · reportar como spam',
            'Dar clic con cuidado',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Tres pasos: detenerse, verificar, reportar. La urgencia falsa es la herramienta favorita del phishing.',
          feedbackIncorrecto:
            '❌ El phishing usa urgencia y curiosidad. La regla es: detente, verifica por canal oficial, reporta. No abras "con cuidado".',
        },
        {
          enunciado: 'El proyecto Escuta vale la pena cuando:',
          opciones: [
            'Lo entregas a tiempo',
            'Suena bonito',
            'Devuelves la entrevista al adulto mayor y respetas lo que pidió no publicar',
            'Te dan buena nota',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ Correcto. La devolución y el respeto al pedido del entrevistado es el corazón ético de Escuta.',
          feedbackIncorrecto:
            '❌ Una entrevista sin devolución ni respeto es extracción, no escucha. La nota es secundaria.',
        },
        {
          enunciado: 'Tu auto-check MILC subió en "control emocional" porque:',
          opciones: [
            'Mentiste',
            'Tuviste suerte',
            'Reconociste una emoción fuerte y la regulaste con un acto concreto',
            'Te lo dijo el docente',
          ],
          respuestaIndex: 2,
          feedbackCorrecto:
            '✅ El control emocional sube cuando hay un acto concreto detrás (respiraste, pediste ayuda, esperaste).',
          feedbackIncorrecto:
            '❌ El auto-check no se mueve por suerte ni por palabras de otros. Solo por actos tuyos que tú reconoces.',
        },
        {
          enunciado: 'Tu hermano menor entra a 6° el próximo año. ¿Qué le dirías sobre el periodo 1?',
          opciones: [
            'Que copie todo',
            'Que escuche con respeto a quien entrevista, porque ahí empieza el resto',
            'Que pida nota alta sin esfuerzo',
            'Que falte si puede',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            '✅ Esa frase es vínculo intergeneracional puro. Anótala en tu diario — la usarás en P3·S11.',
          feedbackIncorrecto:
            '❌ Las otras opciones rompen el contrato pedagógico que firmaste. La que cuenta es la que cuida a quien viene detrás.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion:
      '¿Qué dimensión MILC se movió más en tu auto-check? ¿Qué hiciste tú para que se moviera? Si NINGUNA se movió, ¿qué dejaste de hacer?',
    transferencia:
      'Esta semana muestra tu Escuta a alguien fuera del colegio (un familiar, un vecino). No es "tarea": es practicar la sustentación que llegará en P3·S11.',
    cierre:
      'Cosechas el periodo 1: Dussel diría que diste voz pública a quien tenía voz privada. Epicteto diría que lo cosechado hoy lo sembraste 11 sesiones atrás — vuelve a tu auto-check #1 y mira. Floridi diría que cuidar la información del otro es cuidar al otro. Capítulo 1 cerrado.',
  },
};

export default contenido;
