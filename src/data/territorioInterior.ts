/**
 * Programa "Territorio interior" — educación socioemocional, dentro de Explora.
 *
 * Nace del sismo del 10 de agosto de 2026 y de la pregunta que dejó en el aula:
 * cómo se comprende un fenómeno, cómo se sostiene el miedo y cómo se acompaña a
 * otro sin hacerle daño. El nombre toma la categoría nasa de territorio (kiwe),
 * que abarca a la vez el mundo y el cosmos, y la extiende hacia adentro: para el
 * pueblo nasa el desastre no fue "natural" sino una desarmonía del territorio.
 *
 * Dos categorías, seis niveles (uno por grado), diez guías por nivel:
 *   · Territorio propio     (6.º–8.º) — sostenerse
 *   · Territorio compartido (9.º–11.º) — sostener
 *
 * Tres reglas atraviesan las 60 guías, y no son de estilo sino de evidencia:
 *   1. Nunca revivir el evento. La OMS desaconsejó en 2009 el "debriefing
 *      psicológico" frente a la primera ayuda psicológica.
 *   2. Nunca exigir el lado bueno. El crecimiento postraumático autoinformado se
 *      asocia con MÁS malestar (Frazier et al., 2009): no se enseña ni se evalúa.
 *   3. La escuela es nivel 2 de la pirámide IASC (2007): sostiene rutina, vínculo
 *      e información veraz. No hace terapia. Cada guía lleva ruta de derivación.
 *
 * Respaldo normativo: MEN (2025), "Escuela, territorio de vida" — Política de
 * Gestión Integral del Riesgo Escolar y Educación en Emergencias, Resolución
 * 006519 del 1 de abril de 2025, que sitúa la atención psicosocial como primera
 * acción en la respuesta. Ver src/pages/explora/territorio-interior.
 *
 * Las guías con `claveGuia` tienen YAML en content/guias/territorio-interior/ y
 * PDF compilado en public/guias-mejoras/territorio-interior/.
 */

export type EstadoMomento = 'activo' | 'proximamente';

/** Semilla de saber ancestral. Solo `verificada` entró a una ronda de fuentes. */
export interface Ancla {
  semilla: string;
  verificada: boolean;
}

export interface Momento {
  /** Orden dentro del nivel (1–10) */
  numero: number;
  /** Identificador en la URL: /explora/territorio-interior/{nivel}/{slug} */
  slug: string;
  nombre: string;
  /** Qué trabaja, en una frase */
  foco: string;
  ancla: Ancla;
  estado: EstadoMomento;
  /** Clave del YAML/PDF cuando la guía ya está construida (ej. '7-10') */
  claveGuia?: string;
}

export interface Nivel {
  /** Identificador en la URL: /explora/territorio-interior/{slug} */
  slug: string;
  grado: number;
  nombre: string;
  edad: string;
  /** Frase corta para la lista de la ruta (el equivalente al «tema» de Salomé) */
  enunciado: string;
  /** Párrafo de entrada en la página del nivel */
  resumen: string;
  bgClass: string;
  momentos: Momento[];
}

export interface Categoria {
  slug: string;
  nombre: string;
  rango: string;
  verbo: string;
  descripcion: string;
  niveles: Nivel[];
}

/** Atajo: casi todas las anclas están por documentar. */
const a = (semilla: string, verificada = false): Ancla => ({ semilla, verificada });

const grado6: Nivel = {
  slug: 'grado-6',
  grado: 6,
  nombre: 'Habitar el cuerpo',
  edad: '11–12 años',
  enunciado: 'Reconocer, nombrar y regular lo que se siente',
  resumen:
    'Reconocer, nombrar y regular. Nada aquí es introspección abstracta: todo pasa por el cuerpo, que es lo que sí se puede observar.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'El cuerpo avisa primero', foco: 'Las señales físicas de la emoción llegan antes que la palabra.', ancla: a('Parteras del Norte del Valle: leer el cuerpo'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Más de veinte palabras', foco: 'Vocabulario emocional real, más allá de «bien» y «mal».', ancla: a('El bordado cartagüeño: nombrar cada puntada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Sentir no es actuar', foco: 'La emoción informa, no obliga: entre sentir y hacer hay un espacio.', ancla: a('La palabra en el fogón'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Respirar es una técnica', foco: 'Regulación fisiológica y anclaje sensorial, practicados hasta que salgan solos.', ancla: a('Cantos de boga del río Cauca'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'El miedo que protege', foco: 'Distinguir el miedo que cuida del miedo que se queda cuando ya pasó.', ancla: a('Leer la creciente del río La Vieja'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'El revés del bordado', foco: 'Error, frustración y rehacer: los nudos van por detrás, y sostienen.', ancla: a('Bordado de Cartago'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'La rabia y el límite', foco: 'La rabia como señal de que alguien cruzó una frontera propia.', ancla: a('El lindero campesino'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'La atención secuestrada', foco: 'Pantallas y soberanía de la mirada: quién decide dónde miras.', ancla: a('El silencio del sabedor'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Dormir, comer, moverse', foco: 'La base física del ánimo: casi nada se sostiene sin esto.', ancla: a('El calendario agrícola y el descanso'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'Pedir ayuda', foco: 'Construir una red con adultos, no solo con pares: el apoyo familiar es el factor más consistente (Xiong et al., 2022).', ancla: a('La mano cambiada campesina'), estado: 'proximamente' },
  ],
};

const grado7: Nivel = {
  slug: 'grado-7',
  grado: 7,
  nombre: 'Habitar el vínculo',
  edad: '12–13 años',
  enunciado: 'Escuchar, herir, reparar y volver a confiar',
  resumen:
    'El otro cercano: escuchar sin arreglar, herir con la palabra, reparar y volver a confiar. Cierra con el vínculo puesto a prueba por un hecho real.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'Escuchar sin arreglar', foco: 'Escucha activa: el silencio es parte de la conversación, no una falla.', ancla: a('El escuchar silencioso (Dussel)', true), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'La amistad no es propiedad', foco: 'Celos y exclusividad: querer a alguien no es tenerlo.', ancla: a('El compadrazgo'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Empatía no es lástima', foco: 'Tomar la perspectiva del otro sin ponerse por encima.', ancla: a('Alabaos del Pacífico: acompañar cantando'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'La palabra que hiere', foco: 'Apodos, burla y el humor que se cobra víctimas.', ancla: a('La palabra empeñada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'El conflicto no es violencia', foco: 'El conflicto es normal; la violencia es una elección dentro de él.', ancla: a('El palabrero wayuu (pütchipü’üi)'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Reparar y volver a confiar', foco: 'La diferencia entre «ya, perdón» y una reparación real, y qué viene después.', ancla: a('La armonización nasa', true), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'Guardar y no guardar', foco: 'Los secretos que sí se cuentan, y a quién.', ancla: a('El límite del secreto del sabedor'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Los grupos de chat', foco: 'Cuidado en línea: capturas, grupos y lo que se reenvía.', ancla: a('El chisme del pueblo y su costo'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Quién come solo', foco: 'La exclusión cotidiana, la que no se denuncia porque no se ve.', ancla: a('La minga: nadie sobra', true), estado: 'proximamente' },
    {
      numero: 10,
      slug: 'momento-10',
      nombre: 'Cuando la tierra se movió',
      foco: 'Comprender el sismo del 10 de agosto de 2026, sostener el miedo propio y acompañar a otro con las tres acciones de la primera ayuda psicológica.',
      ancla: a('La minga nasa tras el terremoto del río Páez (1994)', true),
      estado: 'activo',
      claveGuia: '7-10',
    },
  ],
};

const grado8: Nivel = {
  slug: 'grado-8',
  grado: 8,
  nombre: 'Habitar el grupo',
  edad: '13–14 años',
  enunciado: 'Pertenecer sin desaparecer en el grupo',
  resumen:
    'Pertenencia e identidad social: por qué el grupo pesa tanto, qué hace el que mira y cómo se lidera sin mandar.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'La necesidad de pertenecer', foco: 'Por qué el grupo pesa tanto a esta edad, y qué se paga por entrar.', ancla: a('La cuadrilla y el bando'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Decir que no', foco: 'Presión de grupo: negarse sin perder el lugar.', ancla: a('El consejo de mayores'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'El que mira', foco: 'El papel del espectador: mirar también es participar.', ancla: a('El testigo comunitario'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Rumor y reputación', foco: 'Cómo se fabrica la fama de alguien y cuánto cuesta deshacerla.', ancla: a('El pregonero'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'La ruta cuando algo pasa', foco: 'Ley 1620 de 2013: tipologías de situación y a quién se avisa.', ancla: a('El manual de convivencia como acuerdo, no castigo'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Identidad prestada', foco: 'Marca, moda y pertenencia comprada: la economía de la atención en el aula.', ancla: a('La feria y el aparentar'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'El cuerpo comparado', foco: 'Imagen corporal, burla y la vara con que se mide.', ancla: a('El cuerpo que trabaja'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Nosotros y ellos', foco: 'Prejuicio y estigma dentro del salón.', ancla: a('El forastero'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Liderar sin mandar', foco: 'Autoridad entendida como cuidado y no como mando.', ancla: a('La autoridad del cabildo'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'La minga del curso', foco: 'Acción colectiva de cuidado con seguimiento a cuatro semanas: la empatía se entrena sostenida y conductual (Teding van Berkhout y Malouff, 2016).', ancla: a('La minga como práctica de unidad (CRIC)', true), estado: 'proximamente' },
  ],
};

const grado9: Nivel = {
  slug: 'grado-9',
  grado: 9,
  nombre: 'Habitar la diferencia',
  edad: '14–15 años',
  enunciado: 'Convivir con quien no es como yo',
  resumen:
    'Empatía profunda y violencias cotidianas: género, exclusión, desarraigo, y la diferencia entre reparar y castigar.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'Ponerse en el lugar del otro', foco: 'Tomar perspectiva, evaluado por conducta observable y no por autoinforme.', ancla: a('El aprendiz que observa al maestro'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Género y mandatos', foco: 'Lo que se espera de hombres y mujeres, y quién lo decidió.', ancla: a('Los oficios asignados en el pueblo'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Vínculos y consentimiento', foco: 'Relaciones sanas y señales tempranas de control.', ancla: a('Reglas comunitarias del noviazgo'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Celos no son amor', foco: 'Violencia en la pareja adolescente: el control disfrazado de cuidado.', ancla: a('La casa que vigila'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'La broma que no es broma', foco: 'Racismo y clasismo cotidianos en el lenguaje del curso.', ancla: a('Castas y apellidos'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'El aula que excluye', foco: 'Discapacidad y neurodivergencia: barreras que nadie puso a propósito.', ancla: a('El que trabaja distinto'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'El que llegó de otra parte', foco: 'Migración y desarraigo: llegar sin red a un lugar que ya está repartido.', ancla: a('Desplazamiento en el Norte del Valle'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Cuando el daño lo hizo el grupo', foco: 'Reparación colectiva: qué se hace cuando el responsable son todos.', ancla: a('El refrescamiento del territorio (Drexler, 2004)', true), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Justicia y venganza', foco: 'Reparar no es castigar: dos respuestas distintas al mismo daño.', ancla: a('El palabrero wayuu y la justicia propia'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'El acuerdo de aula', foco: 'Construir norma propia en vez de recibirla hecha.', ancla: a('El mandato comunitario'), estado: 'proximamente' },
  ],
};

const grado10: Nivel = {
  slug: 'grado-10',
  grado: 10,
  nombre: 'Habitar la incertidumbre',
  edad: '15–16 años',
  enunciado: 'Salud mental, riesgo y rumor',
  resumen:
    'Salud mental y riesgo: ansiedad, duelo, anestesias, rumor y desastre. Aquí la ruta de atención deja de ser tema y se vuelve directorio.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'Ansiedad: qué es y qué no', foco: 'Normalizar sin banalizar: la ansiedad que avisa y la que incapacita.', ancla: a('El sereno y la espera'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Lo que controlo y lo que no', foco: 'La dicotomía del control aplicada a lo que de verdad quita el sueño.', ancla: a('La cosecha incierta'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Tristeza, depresión y ayuda', foco: 'Desestigmatizar y usar la ruta real: Ley 1616 de 2013, orientación escolar, EPS.', ancla: a('Los médicos tradicionales y el «refrescar»', true), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Si alguien me lo dice', foco: 'Qué hacer ante autolesión o ideación suicida: protocolo de aviso, nunca diagnóstico.', ancla: a('El que avisa a tiempo'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'Duelo', foco: 'Muerte, ruptura y migración, sin pedirle a nadie que le vea el lado bueno.', ancla: a('Novenario y alabaos'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Anestesias', foco: 'Sustancias, apuestas y pantallas como forma de no sentir.', ancla: a('La amapola en Tierradentro y el tejido roto', true), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'La infoesfera emocional', foco: 'Rumor, pánico e indignación: la información produce emociones y hace daño real.', ancla: a('La radio comunitaria'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'El desastre no es natural', foco: 'Vulnerabilidad global: los once ángulos de Wilches-Chaux sobre el propio barrio.', ancla: a('Nasa Kiwe, que Wilches-Chaux dirigió', true), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Prepararse sin vivir con miedo', foco: 'Plan familiar y riesgo, sin simulacros sorpresa ni pedagogía del susto.', ancla: a('El que sabe leer el cielo'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'Cuidar al que cuida', foco: 'El desgaste de sostener a otros: acompañar no es cargar.', ancla: a('La partera que también se cansa'), estado: 'proximamente' },
  ],
};

const grado11: Nivel = {
  slug: 'grado-11',
  grado: 11,
  nombre: 'Habitar el mundo que viene',
  edad: '16–17 años',
  enunciado: 'Decidir, despedirse y devolver',
  resumen:
    'Identidad, decisión y devolución. Cierra el programa poniendo a los mayores a acompañar a los de 6.º: la fase de devolución del MILC hecha práctica.',
  bgClass: 'bg-bento-teal',
  momentos: [
    { numero: 1, slug: 'momento-1', nombre: 'Quién soy cuando nadie mira', foco: 'Carácter y coherencia: lo que haces sin público.', ancla: a('El oficio heredado en Cartago'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'La trampa de compararse', foco: 'Redes, éxito y cuerpo: medirse con una vara ajena.', ancla: a('La medida comunitaria del valor'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Decidir con miedo', foco: 'Decisiones vitales cuando no hay certeza y hay que decidir igual.', ancla: a('El que abre trocha'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'El trabajo y la dignidad', foco: 'Qué hace que una vida valga la pena, más allá del salario.', ancla: a('El oficio con nombre'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'Irse o quedarse', foco: 'Migración, oportunidad y querencia: alas y raíces.', ancla: a('El retorno del que se fue'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Sostenerse afuera', foco: 'Soledad y adultez temprana: la red que hay que armar cuando se acaba el colegio.', ancla: a('El que se fue a estudiar'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'Ciudadanía emocional', foco: 'Deliberar con quien piensa distinto sin destruirse en el intento.', ancla: a('La asamblea'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Lo que le debo al lugar', foco: 'Territorio y deuda: qué recibiste de este sitio y qué le devuelves.', ancla: a('El territorio como cosmos (kiwe)', true), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Mentoría', foco: 'Acompañar durante un periodo a un estudiante de 6.º del Nivel 1.', ancla: a('La minga intergeneracional', true), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'Devolver', foco: 'Proyecto de vida entendido como cuidado, con acto público de cierre.', ancla: a('La devolución, quinta fase del MILC', true), estado: 'proximamente' },
  ],
};

export const categorias: Categoria[] = [
  {
    slug: 'territorio-propio',
    nombre: 'Territorio propio',
    rango: '6.º – 8.º',
    verbo: 'Sostenerse',
    descripcion:
      'De la propia piel al grupo: reconocer lo que se siente, nombrarlo, regularlo y descubrir que el vínculo también se cuida.',
    niveles: [grado6, grado7, grado8],
  },
  {
    slug: 'territorio-compartido',
    nombre: 'Territorio compartido',
    rango: '9.º – 11.º',
    verbo: 'Sostener',
    descripcion:
      'Del grupo al mundo: la diferencia, la incertidumbre y el futuro. Sostener a otro y sostener el lugar que se habita.',
    niveles: [grado9, grado10, grado11],
  },
];

export const niveles: Nivel[] = categorias.flatMap((c) => c.niveles);

export function getNivel(slug: string): Nivel | undefined {
  return niveles.find((n) => n.slug === slug);
}

export function getCategoriaDeNivel(slug: string): Categoria | undefined {
  return categorias.find((c) => c.niveles.some((n) => n.slug === slug));
}

export function getMomento(nivelSlug: string, momentoSlug: string): Momento | undefined {
  return getNivel(nivelSlug)?.momentos.find((m) => m.slug === momentoSlug);
}

/** Guías ya construidas (con YAML y PDF). */
export function getMomentosActivos(): Array<{ nivel: Nivel; momento: Momento }> {
  return niveles.flatMap((nivel) =>
    nivel.momentos.filter((m) => m.estado === 'activo').map((momento) => ({ nivel, momento })),
  );
}

export const TOTAL_MOMENTOS = niveles.reduce((n, nivel) => n + nivel.momentos.length, 0);
