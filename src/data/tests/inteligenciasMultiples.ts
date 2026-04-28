/**
 * Test de Inteligencias Múltiples (Howard Gardner)
 *
 * 8 dimensiones × 5 preguntas = 40 ítems · escala Likert 1-5
 *
 * IMPORTANTE: este test es **descriptivo, no diagnóstico**. El resultado
 * indica las "puertas de entrada" actuales del estudiante hacia el
 * aprendizaje, no etiquetas fijas. Se interpretará desde un mindset
 * de crecimiento — todas las inteligencias se desarrollan con experiencia.
 */

export type DimensionIM =
  | 'linguistica'
  | 'logico_matematica'
  | 'espacial'
  | 'musical'
  | 'cinestesica'
  | 'intrapersonal'
  | 'interpersonal'
  | 'naturalista';

export interface DimensionMeta {
  id: DimensionIM;
  nombre: string;
  emoji: string;
  bgClass: string;
  descripcion: string;
  ejemplosCarrera: string[];
}

export const dimensionesIM: DimensionMeta[] = [
  {
    id: 'linguistica',
    nombre: 'Lingüística',
    emoji: '📖',
    bgClass: 'bg-bento-blue',
    descripcion:
      'Te conectas con palabras: leer, escribir, hablar, jugar con el lenguaje.',
    ejemplosCarrera: ['Comunicación', 'Periodismo', 'Derecho', 'Literatura'],
  },
  {
    id: 'logico_matematica',
    nombre: 'Lógico-matemática',
    emoji: '🧮',
    bgClass: 'bg-bento-cyan',
    descripcion:
      'Buscas patrones, resuelves acertijos, te interesa el porqué de las cosas.',
    ejemplosCarrera: ['Ingeniería', 'Ciencias', 'Matemáticas', 'Programación'],
  },
  {
    id: 'espacial',
    nombre: 'Espacial',
    emoji: '🎨',
    bgClass: 'bg-bento-purple',
    descripcion:
      'Imaginas en 3D, dibujas, te orientas con facilidad en lugares nuevos.',
    ejemplosCarrera: ['Arquitectura', 'Diseño gráfico', 'Cine', 'Animación 3D'],
  },
  {
    id: 'musical',
    nombre: 'Musical',
    emoji: '🎵',
    bgClass: 'bg-bento-pink',
    descripcion:
      'Reconoces ritmos, sonidos y tonos; la música te ayuda a aprender.',
    ejemplosCarrera: ['Música', 'Producción audiovisual', 'Sonido', 'Composición'],
  },
  {
    id: 'cinestesica',
    nombre: 'Cinestésico-corporal',
    emoji: '🤸',
    bgClass: 'bg-bento-orange',
    descripcion:
      'Aprendes haciendo: con las manos, el cuerpo, el movimiento.',
    ejemplosCarrera: ['Deporte', 'Danza', 'Cirugía', 'Mecánica', 'Construcción'],
  },
  {
    id: 'intrapersonal',
    nombre: 'Intrapersonal',
    emoji: '🪞',
    bgClass: 'bg-bento-yellow',
    descripcion:
      'Te conoces a ti mismo, reflexionas, tienes metas claras.',
    ejemplosCarrera: ['Psicología', 'Filosofía', 'Coaching', 'Investigación'],
  },
  {
    id: 'interpersonal',
    nombre: 'Interpersonal',
    emoji: '🤝',
    bgClass: 'bg-bento-lime',
    descripcion:
      'Conectas con otros, mediam conflictos, lideras equipos.',
    ejemplosCarrera: ['Educación', 'Trabajo social', 'Marketing', 'Política'],
  },
  {
    id: 'naturalista',
    nombre: 'Naturalista',
    emoji: '🌱',
    bgClass: 'bg-bento-lime',
    descripcion:
      'Te conectas con la naturaleza, cuidas el entorno, observas patrones vivos.',
    ejemplosCarrera: ['Biología', 'Veterinaria', 'Agronomía', 'Ecología'],
  },
];

export interface PreguntaIM {
  dim: DimensionIM;
  pregunta: string;
}

export const preguntasIM: PreguntaIM[] = [
  // Lingüística
  { dim: 'linguistica', pregunta: 'Disfruto leer libros, cuentos o cómics en mi tiempo libre.' },
  { dim: 'linguistica', pregunta: 'Me gusta jugar con palabras: rimas, crucigramas o trabalenguas.' },
  { dim: 'linguistica', pregunta: 'Recuerdo con facilidad lo que leo o escucho.' },
  { dim: 'linguistica', pregunta: 'Disfruto escribir historias, ensayos, poemas o mensajes largos.' },
  { dim: 'linguistica', pregunta: 'Me siento cómodo participando en debates o explicando algo en público.' },

  // Lógico-matemática
  { dim: 'logico_matematica', pregunta: 'Disfruto resolver problemas matemáticos o acertijos lógicos.' },
  { dim: 'logico_matematica', pregunta: 'Me gustan los juegos de estrategia: ajedrez, sudoku, escape room.' },
  { dim: 'logico_matematica', pregunta: 'Cuando algo no funciona, busco entender por qué paso a paso.' },
  { dim: 'logico_matematica', pregunta: 'Reconozco patrones, secuencias o reglas en lo que veo.' },
  { dim: 'logico_matematica', pregunta: 'Me interesan los temas de ciencia, tecnología y experimentos.' },

  // Espacial
  { dim: 'espacial', pregunta: 'Recuerdo lugares con solo verlos una vez (rutas, mapas, edificios).' },
  { dim: 'espacial', pregunta: 'Disfruto dibujar, pintar, hacer mapas mentales o diseñar.' },
  { dim: 'espacial', pregunta: 'Puedo imaginar objetos en 3D y rotarlos en mi mente.' },
  { dim: 'espacial', pregunta: 'Me gustan los videojuegos con mundos amplios o construcción.' },
  { dim: 'espacial', pregunta: 'Disfruto armar rompecabezas, modelos o construir con piezas.' },

  // Musical
  { dim: 'musical', pregunta: 'Identifico canciones con solo escuchar pocas notas o el ritmo.' },
  { dim: 'musical', pregunta: 'Sigo el ritmo con el cuerpo o tarareando cuando escucho música.' },
  { dim: 'musical', pregunta: 'Disfruto cantar, tocar un instrumento o crear sonidos.' },
  { dim: 'musical', pregunta: 'Me concentro mejor cuando hay música de fondo.' },
  { dim: 'musical', pregunta: 'Reconozco cuando una nota o canción está desafinada.' },

  // Cinestésico-corporal
  { dim: 'cinestesica', pregunta: 'Aprendo mejor haciendo cosas con las manos o moviéndome.' },
  { dim: 'cinestesica', pregunta: 'Disfruto los deportes, el baile o las actividades físicas.' },
  { dim: 'cinestesica', pregunta: 'Tengo buen equilibrio, coordinación o agilidad.' },
  { dim: 'cinestesica', pregunta: 'Me gusta construir, reparar o desmontar cosas.' },
  { dim: 'cinestesica', pregunta: 'Necesito moverme mientras estudio o pienso para concentrarme.' },

  // Intrapersonal
  { dim: 'intrapersonal', pregunta: 'Conozco bien mis fortalezas y mis debilidades.' },
  { dim: 'intrapersonal', pregunta: 'Reflexiono sobre mis emociones y por qué las siento.' },
  { dim: 'intrapersonal', pregunta: 'Tengo metas claras a corto o largo plazo.' },
  { dim: 'intrapersonal', pregunta: 'Prefiero trabajar solo en proyectos que me interesan profundamente.' },
  { dim: 'intrapersonal', pregunta: 'Llevo un diario, agenda o registro de ideas y reflexiones.' },

  // Interpersonal
  { dim: 'interpersonal', pregunta: 'Hago amigos con facilidad y disfruto las conversaciones.' },
  { dim: 'interpersonal', pregunta: 'Entiendo cómo se sienten los demás aunque no me lo digan.' },
  { dim: 'interpersonal', pregunta: 'Soy bueno mediando o ayudando a resolver conflictos.' },
  { dim: 'interpersonal', pregunta: 'Disfruto trabajar en equipo y aporto al grupo.' },
  { dim: 'interpersonal', pregunta: 'Las personas suelen pedirme consejo o apoyo.' },

  // Naturalista
  { dim: 'naturalista', pregunta: 'Disfruto estar al aire libre: parques, campo, mar, montaña.' },
  { dim: 'naturalista', pregunta: 'Reconozco distintos tipos de plantas, animales, nubes o estrellas.' },
  { dim: 'naturalista', pregunta: 'Me preocupa el cuidado del medio ambiente y el reciclaje.' },
  { dim: 'naturalista', pregunta: 'Disfruto los documentales o videos sobre naturaleza y animales.' },
  { dim: 'naturalista', pregunta: 'Prefiero salir a explorar antes que quedarme adentro.' },
];

export const opcionesLikert: { valor: number; etiqueta: string }[] = [
  { valor: 1, etiqueta: 'Para nada' },
  { valor: 2, etiqueta: 'Poco' },
  { valor: 3, etiqueta: 'Regular' },
  { valor: 4, etiqueta: 'Bastante' },
  { valor: 5, etiqueta: 'Totalmente' },
];

/**
 * Calcula los puntajes por dimensión a partir de las respuestas (array de 40 valores 1-5).
 * Retorna mapa { dim: score 0-100 }.
 */
export function calcularScoresIM(
  respuestas: number[],
): Record<DimensionIM, number> {
  if (respuestas.length !== preguntasIM.length) {
    throw new Error(
      `Se esperan ${preguntasIM.length} respuestas, recibidas ${respuestas.length}`,
    );
  }
  const totales: Record<string, { sum: number; count: number }> = {};
  preguntasIM.forEach((p, i) => {
    if (!totales[p.dim]) totales[p.dim] = { sum: 0, count: 0 };
    totales[p.dim].sum += respuestas[i];
    totales[p.dim].count += 1;
  });
  const out = {} as Record<DimensionIM, number>;
  for (const dim of dimensionesIM) {
    const t = totales[dim.id];
    // promedio (1-5) → 0-100: ((promedio - 1) / 4) * 100
    out[dim.id] = t ? Math.round(((t.sum / t.count - 1) / 4) * 100) : 0;
  }
  return out;
}
