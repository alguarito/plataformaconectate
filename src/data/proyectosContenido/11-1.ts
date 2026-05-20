/**
 * Contenido web del proyecto integrador · Grado 11 · Período 1
 *
 * Auto-generado desde content/proyectos/11-1.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 11,
  periodo: 1,
  clave: '11-1',
  titulo: 'Proyecto integrador · Presencia digital empresarial con IA',
  tituloPortada: 'Presencia digital empresarial con IA',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Diseña y sustenta una presencia digital empresarial con apoyo de IA, integrando identidad de marca, arquitectura web, redacción comercial, SEO básico, contenido para redes y criterios éticos.',
  estrategia: 'Design Thinking + ABP + IA como asistente editorial',
  duracionSemanas: 5,
  modalidad: 'equipo',
  reto: 'Diseñar y publicar tu presencia digital profesional como editor responsable: un portafolio en línea + manual de marca personal + pieza de red, con la IA como asistente y con al menos el 30% del contenido editado a mano. La pieza final debe poder mostrarse el día de la sustentación a un empleador o universidad.',
  insumos: [
    'Plantilla HTML/CSS responsive (entrega el docente) o acceso a Astro/Next starter',
    'Cuenta gratuita Netlify, Vercel o GitHub Pages para deploy',
    'Acceso a IA generativa: Claude, Gemini o ChatGPT (cualquiera basta)',
    'Acceso a Canva o Figma free para diseño de marca y pieza de red',
    '3 portafolios referentes elegidos (links que el equipo investigará)',
    'Validador de contraste WCAG (webaim.org/resources/contrastchecker)'
  ],
  anclaje: 'En las plazas de Cartago hubo durante décadas un maestro fotógrafo que firmaba cada copia con un sello pequeño en la esquina inferior derecha: "Fotografías Pereira, Cartago." Esa firma era compromiso de oficio: si alguien reclamaba, sabía dónde tocar la puerta; si quería más copias en diez años, sabía a quién buscar. Tu presencia digital es la misma firma del siglo XXI: cada post, cada copy, cada imagen lleva tu nombre asociado. La diferencia entre el maestro fotógrafo y un usuario casual de Instagram no es el medio: es la responsabilidad asumida al firmar.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'Marca personal: del oficio heredado a la huella propia'
    },
    {
      sesion: 2,
      titulo: 'Identidad visual: paleta, tipografía, lockup coherente'
    },
    {
      sesion: 3,
      titulo: 'Sitio web personal: arquitectura y propósito'
    },
    {
      sesion: 4,
      titulo: 'Plantillas: elegir y adaptar sin perder la voz propia'
    },
    {
      sesion: 5,
      titulo: 'Copywriting con IA: criterio, no copia ciega'
    },
    {
      sesion: 6,
      titulo: 'SEO básico: visibilidad sin engaño'
    },
    {
      sesion: 7,
      titulo: 'Imagen propia: foto y video con propósito'
    },
    {
      sesion: 8,
      titulo: 'Perfiles profesionales: LinkedIn y portafolio coherentes'
    },
    {
      sesion: 9,
      titulo: 'Métricas básicas: quién entra y qué busca'
    },
    {
      sesion: 10,
      titulo: 'Lanzamiento: presencia digital pública con responsabilidad'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Portafolio digital publicado',
      queEntregas: 'URL pública en Netlify, Vercel o GitHub Pages con 4 secciones obligatorias: portada, sobre mí, 3 proyectos seleccionados con su contexto, contacto. El sitio debe cargar en menos de 3 segundos en móvil y respetar contraste WCAG AA.',
      comoSeHace: [
        'Definir audiencia objetivo: edad, contexto, qué busca al llegar al sitio',
        'Investigar 3 portafolios referentes y extraer principios visuales y de copy',
        'Redactar copy de cada sección con IA y editar a mano al menos el 30%',
        'Adaptar plantilla con tu paleta y tipografía, deployar y enviar URL'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién no estoy atendiendo aún',
        consigna: 'Agrega a tu sección "Sobre mí" un párrafo de 3 renglones titulado "A quién no estoy atendiendo aún". Reconoce honestamente una audiencia que tu portafolio actual deja por fuera (por idioma, por accesibilidad técnica, por contexto cultural, por costo de la tecnología necesaria para llegar a él) y explica por qué. Ese párrafo es público en el sitio, no anexo escolar. Sostenerlo te obliga a no maquillar la exclusión.'
      },
      criterios: [
        'URL pública funcionando (no localhost ni borradores)',
        'Contraste WCAG AA verificado en validador (4.5:1 para texto)',
        'Carga inicial en móvil < 3 segundos (test en celular real)',
        '30% mínimo del copy reescrito a mano sobre el borrador de IA',
        'Párrafo de Dussel publicado en \'Sobre mí\''
      ]
    },
    {
      numero: 2,
      titulo: 'Manual de marca personal (PDF 2 páginas)',
      queEntregas: 'PDF de 2 páginas con: wordmark o logo simple, paleta con hex codes y verificación de contraste, tipografía elegida con justificación, tono de voz definido con 3 ejemplos de uso (formal, semi-formal, casual).',
      comoSeHace: [
        'Analizar 3 marcas personales que admiras y extraer principios',
        'Definir paleta de 3-4 colores y probar contraste WCAG',
        'Elegir tipografía consistente con el oficio (no la de moda)',
        'Escribir 3 ejemplos del mismo mensaje en 3 tonos distintos',
        'Diseñar el PDF en Canva o Figma y exportar'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que me comprometo a sostener',
        consigna: 'Termina el PDF con un párrafo titulado "Lo que me comprometo a sostener". Declara la disciplina que exige tu marca para que no degenere en 6 meses: consistencia de paleta aunque haya tentación de probar lo nuevo, voz definida aunque cambien las modas, no caer en plantillas genéricas para ahorrar tiempo. Ese compromiso queda firmado en el PDF, con tu nombre y fecha. El estoico entiende que firmar es sostener.'
      },
      criterios: [
        'Paleta con 3-4 colores y al menos 3 contrastes verificados',
        'Tipografía justificada (por qué esa y no otra)',
        '3 ejemplos del mismo mensaje en 3 tonos contrastados',
        'Compromiso firmado con nombre y fecha',
        'Coherencia visual con el portafolio (mismo wordmark, misma paleta)'
      ]
    },
    {
      numero: 3,
      titulo: 'Pieza de red + análisis de métricas básicas',
      queEntregas: 'Publicación en LinkedIn o Instagram anunciando tu portafolio. Después de 7 días, screenshot de las métricas observadas (impresiones, alcance, clics al sitio) y reporte de 1 página con 1 insight accionable basado en esos datos.',
      comoSeHace: [
        'Diseñar pieza visual con la paleta del manual de marca',
        'Redactar texto del post con IA y editar tono',
        'Publicar en horario razonable (no madrugada)',
        'Esperar 7 días sin tocar la publicación',
        'Analizar métricas y escribir el insight accionable'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Mi pieza en la infoesfera',
        consigna: 'En el reporte de 1 página, agrega una sección titulada "Mi pieza en la infoesfera". Reconoce qué información agregó tu pieza a la conversación común: ¿enriqueció la infoesfera con un aporte profesional, o solo agregó ruido más? ¿Qué responsabilidad ética asumes por el contenido que dejas circulando? Esa reflexión queda en el reporte que entregas al docente, no como anexo: es parte del entregable.'
      },
      criterios: [
        'Pieza visual coherente con manual de marca (paleta y tipografía)',
        'Métricas reales con screenshot fechado',
        '1 insight accionable (no vanity stat sin propuesta)',
        'Reflexión Floridi publicada en el reporte',
        'Cero clickbait o engaño en el copy del post'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación pública + declaración honesta de IA',
      queEntregas: 'Sustentación oral de 5 minutos frente al grupo (puede ser remota) + carta firmada de 1 página declarando uso de IA durante el periodo: qué modelos usaste, qué porcentaje del contenido se generó con IA, qué porcentaje editaste a mano, qué decisión tomaste por aplicar cada lente del triángulo.',
      comoSeHace: [
        'Preparar guion de 5 min siguiendo la estructura sugerida (ver abajo)',
        'Ensayar 2 veces midiendo el tiempo',
        'Escribir carta firmada con porcentajes verificables',
        'Mencionar las 3 lentes del triángulo y la decisión concreta por cada una',
        'Sustentar el día acordado con todos los entregables en pantalla'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Integración del triángulo en mi proyecto',
        consigna: 'En la carta firmada, dedica un párrafo a cada lente del triángulo (3 párrafos en total). En cada uno responde: ¿qué decisión concreta tomé en mi proyecto por aplicar esta lente? No vale "aprendí a ser más ético". Vale: "por Dussel, agregué la sección \'a quién no estoy atendiendo\' y reconocí que mi sitio no está traducido al inglés ni accesible para lectores de pantalla, lo cual me comprometo a corregir en la v2". Honestidad operativa, no retórica.'
      },
      criterios: [
        'Sustentación dura exactamente 5 minutos (no más, no menos)',
        'Carta firmada con porcentajes verificables (no inventados)',
        'Las 3 lentes del triángulo se mencionan con decisión concreta tomada',
        'Demo real de los 3 entregables anteriores funcionando',
        'Honestidad ante preguntas duras (reconoce limitaciones sin inventar)'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'URL pública, todos los criterios cumplidos, párrafo de Dussel visible y bien escrito',
      nivel3: 'URL pública pero falla en 1-2 criterios (contraste insuficiente o carga lenta)',
      nivel1: 'Sin URL pública, o múltiples criterios incumplidos'
    },
    {
      entregable: 2,
      nivel5: 'PDF completo, paleta verificada, 3 ejemplos de voz, compromiso firmado',
      nivel3: 'PDF con falla en 1-2 criterios (sin verificación de contraste o ejemplos genéricos)',
      nivel1: 'PDF incompleto o sin compromiso firmado'
    },
    {
      entregable: 3,
      nivel5: 'Pieza coherente con marca, métricas reales con insight accionable, Floridi explícito',
      nivel3: 'Pieza publicada pero con métricas vacías o insight superficial',
      nivel1: 'Pieza no publicada o sin reflexión Floridi'
    },
    {
      entregable: 4,
      nivel5: '5 min exactos, las 3 lentes con decisión concreta, demo en vivo de los 3 productos',
      nivel3: 'Sustentación con tiempo descontrolado o triángulo abordado superficialmente',
      nivel1: 'No sustentó o demo falló sin reconocer el fallo'
    },
    {
      entregable: 'global',
      nivel5: 'Voz propia clara, coherencia visual entre entregables, decisión honesta por cada lente',
      nivel3: 'Voz propia presente pero inconsistente; integración del triángulo parcial',
      nivel1: 'Sin voz propia identificable o triángulo ausente',
      titulo: 'Comunicación, sustentación e integración del triángulo'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '1 min · Audiencia objetivo y reto: por qué este portafolio y para quién',
      '2 min · Demo en vivo de los 3 entregables principales (URL, PDF, post)',
      '1 min · Integración del triángulo: una decisión concreta por cada lente',
      '30 seg · Limitaciones reconocidas (qué no logré, por qué)',
      '30 seg · Plan de v2: qué corregirías en los próximos 3 meses'
    ]
  },
  declaracionIa: 'Tu carta firmada de 1 página debe declarar honestamente: (1) Modelos usados durante el periodo (Claude, Gemini, ChatGPT, etc.). (2) Porcentaje aproximado del contenido total que se generó con IA (sé honesto, no maquilles). (3) Porcentaje editado a mano sobre lo generado (mínimo 30% para que el contenido sea legítimamente tuyo). (4) Una decisión concreta que tomaste tú —sin IA— sobre el proyecto, y por qué (ej. "decidí no traducir mi sitio al inglés porque mi audiencia es local").',
  cierre: 'Cierras el periodo 1 con tu firma pública en el oficio digital. El periodo 2 (Automatización y procesos) te pedirá llevar esta misma disciplina a procesos repetitivos que automatizarás con IA. El maestro fotógrafo se va contigo a programar Zapier.',
  pdf: 'proyecto-1-11-TIC.pdf'
};

export default contenido;
