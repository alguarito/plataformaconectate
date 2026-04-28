/**
 * Test de Autoconcepto AF-5 (García y Musitu)
 *
 * 5 dimensiones × 6 ítems = 30 preguntas · escala Likert 1-5
 *
 * Algunas preguntas están redactadas en sentido inverso (ej. "Soy
 * tímido"). Su puntuación se invierte al calcular el score:
 *   raw_score → 6 - raw_score (1↔5, 2↔4, 3=3)
 *
 * El AF-5 es uno de los instrumentos más usados en Iberoamérica para
 * medir autoconcepto en adolescentes. Puntajes altos = autoconcepto
 * positivo en esa dimensión.
 *
 * IMPORTANTE: este test es un AUTORREPORTE reflexivo. No es un
 * diagnóstico clínico. Si una dimensión sale baja (especialmente
 * Emocional o Familiar) se sugiere conversar con un adulto de
 * confianza o con orientación escolar.
 */

export type DimensionAC =
  | 'academico'
  | 'social'
  | 'emocional'
  | 'familiar'
  | 'fisico';

export interface DimensionACMeta {
  id: DimensionAC;
  nombre: string;
  emoji: string;
  bgClass: string;
  descripcion: string;
  consejoBajo: string;
}

export const dimensionesAC: DimensionACMeta[] = [
  {
    id: 'academico',
    nombre: 'Académico',
    emoji: '📚',
    bgClass: 'bg-bento-blue',
    descripcion:
      'Cómo te ves a ti mismo como estudiante: tu desempeño, tu esfuerzo, tu valoración por parte de profesores.',
    consejoBajo:
      'Habla con un profesor de confianza sobre estrategias de estudio. Las habilidades académicas se construyen con práctica y método, no son fijas.',
  },
  {
    id: 'social',
    nombre: 'Social',
    emoji: '🤝',
    bgClass: 'bg-bento-lime',
    descripcion:
      'Cómo te ves en tus relaciones con compañeros: amistad, comunicación, popularidad.',
    consejoBajo:
      'Empieza con relaciones de a uno. Una conversación profunda con una persona puede valer más que muchos contactos superficiales.',
  },
  {
    id: 'emocional',
    nombre: 'Emocional',
    emoji: '💛',
    bgClass: 'bg-bento-yellow',
    descripcion:
      'Cómo manejas tus emociones: nerviosismo, tristeza, miedo. Un puntaje alto indica estabilidad emocional.',
    consejoBajo:
      'Si te sientes muy nervioso o triste con frecuencia, busca apoyo: orientación escolar, alguien de tu familia, o un profesional. Pedir ayuda es señal de fuerza.',
  },
  {
    id: 'familiar',
    nombre: 'Familiar',
    emoji: '🏠',
    bgClass: 'bg-bento-pink',
    descripcion:
      'Cómo te sientes con tu familia: confianza, apoyo, comunicación.',
    consejoBajo:
      'Si las cosas en casa son difíciles, recuerda que no es tu culpa. Habla con orientación escolar o un adulto de confianza fuera del hogar.',
  },
  {
    id: 'fisico',
    nombre: 'Físico',
    emoji: '💪',
    bgClass: 'bg-bento-orange',
    descripcion:
      'Cómo te ves físicamente: cuerpo, salud, deporte, atractivo personal.',
    consejoBajo:
      'Tu cuerpo está en cambio (es la adolescencia). Lo importante es lo que tu cuerpo te permite hacer, no cómo se compara con redes sociales.',
  },
];

export interface PreguntaAC {
  dim: DimensionAC;
  pregunta: string;
  /** Si true, su puntaje se invierte al calcular el score. */
  inversa?: boolean;
}

export const preguntasAC: PreguntaAC[] = [
  // Académico
  { dim: 'academico', pregunta: 'Hago bien los trabajos escolares.' },
  { dim: 'academico', pregunta: 'Mis profesores me consideran un buen estudiante.' },
  { dim: 'academico', pregunta: 'Trabajo con dedicación en clase.' },
  { dim: 'academico', pregunta: 'Mis profesores me aprecian.' },
  { dim: 'academico', pregunta: 'Soy un buen estudiante.' },
  { dim: 'academico', pregunta: 'Mis profesores me consideran inteligente y trabajador.' },

  // Social
  { dim: 'social', pregunta: 'Hago amigos con facilidad.' },
  { dim: 'social', pregunta: 'Soy una persona amigable.' },
  { dim: 'social', pregunta: 'Es difícil para mí hacer amigos.', inversa: true },
  { dim: 'social', pregunta: 'Soy una persona alegre.' },
  { dim: 'social', pregunta: 'Soy un chico o chica simpático.' },
  { dim: 'social', pregunta: 'Me cuesta hablar con personas desconocidas.', inversa: true },

  // Emocional (todas inversas: el puntaje original mide ansiedad,
  // se invierte para que "alto" = estabilidad emocional)
  { dim: 'emocional', pregunta: 'Tengo miedo de algunas cosas.', inversa: true },
  { dim: 'emocional', pregunta: 'Muchas cosas me ponen nervioso.', inversa: true },
  { dim: 'emocional', pregunta: 'Me asusto con facilidad.', inversa: true },
  { dim: 'emocional', pregunta: 'Cuando los mayores me dicen algo, me pongo muy nervioso.', inversa: true },
  { dim: 'emocional', pregunta: 'Me siento nervioso con frecuencia.', inversa: true },
  { dim: 'emocional', pregunta: 'Me siento triste con frecuencia.', inversa: true },

  // Familiar
  { dim: 'familiar', pregunta: 'Mis padres o cuidadores me dan confianza.' },
  { dim: 'familiar', pregunta: 'Soy muy criticado en casa.', inversa: true },
  { dim: 'familiar', pregunta: 'Me siento feliz en casa.' },
  { dim: 'familiar', pregunta: 'Mi familia me ayuda en cualquier problema.' },
  { dim: 'familiar', pregunta: 'Mis padres o cuidadores me dan ánimos.' },
  { dim: 'familiar', pregunta: 'Mi familia está decepcionada de mí.', inversa: true },

  // Físico
  { dim: 'fisico', pregunta: 'Me cuido físicamente.' },
  { dim: 'fisico', pregunta: 'Me buscan para hacer actividades deportivas o físicas.' },
  { dim: 'fisico', pregunta: 'Me considero atractivo o atractiva.' },
  { dim: 'fisico', pregunta: 'Soy bueno haciendo deporte o actividad física.' },
  { dim: 'fisico', pregunta: 'Me gusta cómo me veo físicamente.' },
  { dim: 'fisico', pregunta: 'Me siento cómodo con mi cuerpo.' },
];

export const opcionesLikertAC = [
  { valor: 1, etiqueta: 'Nunca' },
  { valor: 2, etiqueta: 'Casi nunca' },
  { valor: 3, etiqueta: 'A veces' },
  { valor: 4, etiqueta: 'Casi siempre' },
  { valor: 5, etiqueta: 'Siempre' },
];

/**
 * Calcula los puntajes por dimensión a partir de las respuestas (30 valores 1-5).
 * Retorna mapa { dim: score 0-100 }.
 */
export function calcularScoresAC(
  respuestas: number[],
): Record<DimensionAC, number> {
  if (respuestas.length !== preguntasAC.length) {
    throw new Error(
      `Se esperan ${preguntasAC.length} respuestas, recibidas ${respuestas.length}`,
    );
  }
  const totales: Record<string, { sum: number; count: number }> = {};
  preguntasAC.forEach((p, i) => {
    const score = p.inversa ? 6 - respuestas[i] : respuestas[i];
    if (!totales[p.dim]) totales[p.dim] = { sum: 0, count: 0 };
    totales[p.dim].sum += score;
    totales[p.dim].count += 1;
  });
  const out = {} as Record<DimensionAC, number>;
  for (const dim of dimensionesAC) {
    const t = totales[dim.id];
    out[dim.id] = t ? Math.round(((t.sum / t.count - 1) / 4) * 100) : 0;
  }
  return out;
}
