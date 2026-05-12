/**
 * Contenido enriquecido — Grado 11 · Periodo 1 · Sesión 7
 * Tema: Imagen propia — cómo se ve mi marca en foto y video.
 * Profundidad MILC v3 completa, alineada con content/guias/11/11-1-7.yaml.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 1,
  sesion: 7,
  titulo: 'Imagen propia — cómo se ve mi marca en foto y video',
  ocultarPDF: false,
  resumen:
    'Produces 3 fotos profesionales (retrato, ambiente, acción) + 1 video corto de presentación con celular y criterio. Sin presupuesto, sin sesión de estudio.',
  duracionMin: 100,
  subtema: 'Presencia y marca digital · Foto y video propios',

  saberAncestral: {
    saber:
      'El retrato del oficio era un género visual con propósito: el panadero con su pan, el pescador con su atarraya, la tejedora con su telar, el campesino con su azadón. No era selfie. Era una imagen que decía sin palabras quién hacía qué, dónde, y con qué orgullo. La foto comunicaba dignidad, oficio y competencia antes de que la persona dijera su nombre.',
    fuente: 'Tradición del retrato del oficio en el Valle, el Pacífico y el campo colombiano',
    preguntaPuente:
      '¿Qué hacía que una foto antigua de oficio comunicara dignidad y competencia sin decir una palabra? ¿Qué de eso puedes replicar hoy con un celular?',
  },

  mapaRuta: [
    { numero: 1, iconos: ['🌱'], titulo: 'Retrato del oficio', duracionMin: 8 },
    { numero: 2, iconos: ['👁'], titulo: 'Profesional vs casual', duracionMin: 15 },
    { numero: 3, iconos: ['📖'], titulo: 'Las 4 decisiones técnicas', duracionMin: 15 },
    { numero: 4, iconos: ['🔎', '✏️'], titulo: 'Tus 3 fotos + 1 video', duracionMin: 45 },
    { numero: 5, iconos: ['✅', '💭'], titulo: 'Verifica, reflexiona y cierra', duracionMin: 17 },
  ],

  preLectura: {
    porQueImporta:
      'Hoy tu marca necesita imagen propia en formato digital: foto de perfil, foto de ambiente y video corto. En redes y perfiles, esa pieza visual habla por ti antes que tu texto. Quien te ve decide en menos de 3 segundos si quiere leerte.',
    preguntaDetonante:
      'Si dejaras tu foto actual de perfil sin texto al lado, ¿qué entendería un extraño de ti en 3 segundos? ¿Coincide con quien quieres ser profesionalmente?',
    activacion: {
      titulo: 'El test de los 3 segundos',
      descripcion:
        'En 3 minutos, abre tu perfil de Instagram y de WhatsApp. Mira tu foto actual como si la vieras por primera vez. Escribe en una hoja qué te transmite — sin pensar mucho. Esa primera impresión es lo que un futuro empleador o cliente ve.',
      duracionMin: 4,
    },
    conexion: {
      anterior:
        'En la sesión 6 optimizaste tu sitio para SEO básico: Google ya sabe qué ofreces.',
      siguiente:
        'En la sesión 8 producirás contenido para redes — piezas promocionales coherentes con tu marca.',
    },
  },

  conceptosClave: [
    {
      termino: 'Encuadre',
      definicion:
        'Decisión de qué cabe en la foto y qué queda fuera. Plano medio para retrato, plano abierto para ambiente, plano cerrado para acción.',
      ejemplo:
        'Para tu retrato: del pecho hacia arriba. Para tu ambiente: te ves entero con tu lugar de trabajo. No mezcles los dos.',
      emoji: '🎞',
    },
    {
      termino: 'Fondo',
      definicion:
        'Lo que aparece detrás del sujeto. Limpio o intencionalmente narrativo, nunca distractor. Un cuarto desordenado mata cualquier retrato.',
      ejemplo:
        'Una pared lisa de color de tu paleta + iluminación natural lateral = retrato pro. Una cocina con platos sucios atrás = ruido.',
      emoji: '🖼',
    },
    {
      termino: 'Luz natural lateral',
      definicion:
        'La mejor luz para foto sin presupuesto: cerca de una ventana, con el sol entrando de lado. Evita flash directo y contraluces fuertes.',
      ejemplo:
        'A las 8 AM o 5 PM, párate con la ventana a tu izquierda o derecha. Esa luz "suave" hace ver bien a cualquier persona.',
      emoji: '💡',
    },
    {
      termino: 'Regla de los tercios',
      definicion:
        'Divide mentalmente la imagen en 9 partes (3×3). Pon el sujeto en una de las 4 líneas, no en el centro exacto. El centro se siente plano; la línea, equilibrado.',
      ejemplo:
        'En la cámara del celular activa la cuadrícula y alinea tus ojos con la línea superior. Tu rostro queda en la zona fuerte.',
      emoji: '📐',
    },
    {
      termino: '20 tomas por foto final',
      definicion:
        'La diferencia entre amateur y profesional no es la cámara: es la cantidad de tomas que descartas. Toma 20 por cada foto final.',
      ejemplo:
        'Para tu retrato pro: usa temporizador del celular, toma 20-30, luego selecciona LA que mejor te representa. El descarte es la técnica.',
      emoji: '📸',
    },
    {
      termino: 'Coherencia con sistema visual',
      definicion:
        'Tu foto debe convivir con tu paleta y tu tipografía (Guía 2). Si tu marca es serena, no salgas con filtros saturados ni edición agresiva.',
      ejemplo:
        'Si tu paleta es verde + crema, evita una foto con fondo rojo intenso. La incoherencia rompe la marca completa.',
      emoji: '🎨',
    },
  ],

  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Foto profesional vs foto casual',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Busca en LinkedIn 3 fotos profesionales de personas que admiras.',
        'Busca en Instagram o TikTok 3 fotos casuales de cualquier persona.',
        'Para cada par, anota qué cambia en encuadre, fondo, luz, mirada.',
        'Cierra con 2 renglones: ¿qué diferencia visual hace la categoría "profesional"?',
      ],
      cuaderno: {
        titulo: 'Foto profesional vs casual',
        formato: 'Tabla de 5 columnas (Foto | Encuadre | Fondo | Luz | Qué transmite), 6 filas (3 pro + 3 casual)',
        extension: '6 filas + 2 renglones de cierre',
      },
      criterios: [
        'Cada celda nombra una decisión técnica concreta (no "se ve mejor")',
        'Las 6 fotos están en tu cuaderno con descripción mínima',
        'El cierre de 2 renglones identifica la diferencia técnica clave',
        'Hay al menos una foto profesional ANCLADA en el oficio (no solo retrato vacío)',
      ],
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Análisis de 3 imágenes que admiras',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Elige 3 imágenes profesionales de personas que admiras (de tu sector ideal).',
        'Para cada una: descríbela en 1 frase.',
        'Identifica las 4 decisiones técnicas: encuadre, fondo, luz, intención.',
        'Anota qué transmite cada imagen y cómo se aplicaría a tu marca.',
      ],
      cuaderno: {
        titulo: 'Análisis de 3 imágenes que admiro',
        formato: '3 fichas, cada una con descripción + 4 decisiones técnicas + qué transmite',
        extension: '3 fichas completas',
      },
      criterios: [
        'Las 4 decisiones están identificadas con precisión, no generalidades',
        'Cada imagen tiene un "qué transmite" específico',
        'Marcaste qué de cada imagen aplicarías a tu marca',
        'Las 3 imágenes son de tu sector ideal (no aleatorias)',
      ],
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tus 3 fotos + 1 video corto',
      tiempoMin: 40,
      modalidad: 'individual',
      pasos: [
        'Elige lugar y hora con luz natural (mañana 8-10 AM o tarde 4-6 PM).',
        'Toma 20+ fotos de retrato (plano medio, temporizador del celular, no selfie). Selecciona 1.',
        'Toma 20+ fotos de ambiente (te ves con tu lugar de trabajo o estudio). Selecciona 1.',
        'Toma 20+ fotos de acción (te ven HACIENDO algo de tu oficio). Selecciona 1.',
        'Graba 5 takes de un video de 30-60 segundos: te presentas, qué haces, cómo conectar. Edición mínima.',
      ],
      cuaderno: {
        titulo: 'Mi imagen de marca · v1',
        formato: '4 fichas (retrato + ambiente + acción + video) con descripción + URL/captura',
        extension: '4 fichas — 1 página de cuaderno',
      },
      criterios: [
        'Las 3 fotos tienen propósito distinto (retrato / ambiente / acción)',
        'Cero selfies con brazo extendido o filtros de cara',
        'El video tiene audio limpio y mensaje claro en máximo 60 segundos',
        'Las 4 piezas son coherentes con tu sistema visual (paleta, tono) de la Guía 2',
        'Un extraño puede entender qué haces en 3 segundos de mirada',
      ],
    },
    {
      numero: 4,
      verbo: 'EVALÚA',
      titulo: 'Evalúa la imagen de un compañero',
      tiempoMin: 15,
      modalidad: 'parejas',
      pasos: [
        'Intercambia las 4 piezas con un compañero. Míralas SIN que te explique nada.',
        'Califica del 1 al 5: (a) ¿se entiende qué hace en 3 segundos?, (b) ¿son coherentes entre sí?, (c) ¿alguna selfie con brazo o filtro agresivo?',
        'Escribe 1 observación que afirma + 1 que reta sobre la mejor y la peor pieza.',
        'Devuelve y conversen 5 min sin defenderse.',
      ],
      cuaderno: {
        titulo: 'Evaluación de la imagen de [nombre]',
        formato: '3 calificaciones con justificación + 2 observaciones sobre mejor y peor pieza',
        extension: '3 calificaciones + 2 observaciones de 2-3 renglones',
      },
      criterios: [
        'Las 3 calificaciones están con justificación de 1 línea',
        'Identificaste cuál es la mejor pieza y por qué',
        'Identificaste cuál es la más débil y qué cambiarías',
        'No defendiste tu propia versión durante el feedback',
      ],
    },
  ],

  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '✅ Verifica las decisiones técnicas',
      instrucciones:
        '5 preguntas para confirmar que dominas las decisiones de imagen profesional antes de avanzar. Necesitas 3/5 para continuar.',
      preguntas: [
        {
          enunciado: '¿Cuál es la mejor luz para foto de retrato con celular y sin presupuesto?',
          opciones: [
            'Flash directo del celular',
            'Luz natural lateral cerca de una ventana',
            'Sol directo del mediodía',
            'Solo luz artificial blanca',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Luz natural lateral, 8-10 AM o 4-6 PM. Suave, halagadora, gratis.',
          feedbackIncorrecto:
            'Luz natural lateral. El flash directo aplana, el sol del mediodía endurece sombras. La ventana a tu lado es tu mejor aliada.',
        },
        {
          enunciado: '¿Por qué se evita la selfie con brazo extendido para foto profesional?',
          opciones: [
            'Porque cansa el brazo',
            'Porque la distancia corta del lente distorsiona el rostro',
            'Porque consume batería',
            'Porque es ilegal en algunos países',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Sí. La distancia corta del lente distorsiona — nariz grande, cara ancha. Temporizador + apoyo es la solución sin presupuesto.',
          feedbackIncorrecto:
            'La selfie con brazo distorsiona el rostro: nariz más grande, frente ancha. Usa temporizador apoyando el celular.',
        },
        {
          enunciado: '¿Qué es la regla de los tercios?',
          opciones: [
            'Tomar 3 fotos seguidas',
            'Dividir la imagen en 9 partes y poner el sujeto en una de las líneas',
            'Editar con 3 filtros',
            'Imprimir en 3 tamaños',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Correcto. Divide en 3×3 y alinea al sujeto con una línea. Activa la cuadrícula del celular y aplícalo.',
          feedbackIncorrecto:
            'Regla de los tercios: divide en 9 partes y alinea el sujeto con una línea. El centro exacto se siente plano.',
        },
        {
          enunciado: '¿Cuántas tomas debes hacer por cada foto final?',
          opciones: ['1 — la primera', '5', '20 o más', '100'],
          respuestaIndex: 2,
          feedbackCorrecto:
            'Exacto. La técnica está en el descarte. Toma 20+, queda con la mejor. La cámara no te hace pro — el ojo crítico sí.',
          feedbackIncorrecto:
            '20+ tomas por foto final. La diferencia amateur vs pro no es la cámara — es cuántas descartas.',
        },
        {
          enunciado:
            'En el saber del retrato del oficio, ¿qué aplica a tu foto profesional hoy?',
          opciones: [
            'Nada — los retratos antiguos eran de pintura',
            'Mostrar el oficio con dignidad: quién hace qué, dónde, con qué orgullo',
            'Que solo los adultos podían retratarse',
            'Que las fotos eran caras',
          ],
          respuestaIndex: 1,
          feedbackCorrecto:
            'Esa es la conexión. El retrato del oficio mostraba dignidad y competencia antes de palabras. Tu foto profesional 2026 hace lo mismo.',
          feedbackIncorrecto:
            'El retrato del oficio comunicaba quién, qué y con qué orgullo. Tu foto profesional sigue ese principio en formato digital.',
        },
      ],
    },
  ],

  postLectura: {
    reflexion: '',
    transferencia:
      'Esta semana cambia tu foto de perfil en WhatsApp, Instagram, correo institucional y LinkedIn por tu nuevo retrato. Durante 3 días anota si las personas con las que interactúas te dicen algo distinto. Esa respuesta te dice si tu imagen funciona o necesita ajuste. El próximo lunes traes las observaciones al aula.',
    cierre: '',
  },

  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'La belleza estética nace donde una voz silenciada encuentra forma.',
      preguntaEspejo:
        '¿Mi imagen propia repite el canon global o se atreve a mostrar mi lugar? ¿Qué de mi contexto invisibilizo cuando elijo el fondo?',
    },
    estoico: {
      autor: 'Epicteto',
      lente: 'lente del cuidado interior',
      cita: 'No nos perturban las cosas, sino las opiniones que tenemos de ellas.',
      preguntaEspejo:
        '¿Estoy tomando esta foto para mí o para perseguir la aprobación de otros? ¿Puedo defenderla en 5 años como representativa de quien era?',
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Cada imagen publicada se vuelve dato en la infoesfera; cuídala como cuidarías un legado.',
      preguntaEspejo:
        '¿Esta imagen va a envejecer bien? Si dentro de 10 años un sistema la encuentra, ¿me representará?',
    },
  },

  cincoDimensiones: {
    personal:
      'Tomaste el control de tu imagen pública — del retrato improvisado al retrato con criterio.',
    emocional:
      'Resististe la tentación de la selfie fácil y la búsqueda de likes — elegiste la dignidad del retrato del oficio.',
    ciudadana:
      'Tu imagen pública es un dato en la infoesfera — la cuidaste como cuidarías un legado.',
    local:
      'Anclaste tu retrato en tu lugar real (Cartago, Valle) en vez de imitar el canon visual del norte global.',
    intergeneracional:
      'Heredaste la tradición del retrato del oficio y la actualizaste con celular — el principio sobrevive.',
  },
};

export default contenido;
