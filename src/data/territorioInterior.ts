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

/**
 * Saber ancestral de la guía, con el resultado de la ronda de documentación
 * (5 lotes, dos rondas cada uno con verificación adversarial).
 *   · verificada     — documentada en fuente real; puede escribirse la guía.
 *   · por-documentar — la semilla no resistió y aún no hay sustituto cerrado.
 *   · descartada     — no se usará, por decisión ética o por falta de candidato.
 */
export type EstadoAncla = 'verificada' | 'por-documentar' | 'descartada';

export interface Ancla {
  semilla: string;
  estado: EstadoAncla;
  /** Por qué quedó pendiente o descartada. */
  nota?: string;
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

/** Atajo para declarar el ancla de cada guía. */
const a = (semilla: string, estado: EstadoAncla = 'verificada', nota?: string): Ancla =>
  nota ? { semilla, estado, nota } : { semilla, estado };

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
    { numero: 1, slug: 'momento-1', nombre: 'El cuerpo avisa primero', foco: 'Las señales físicas de la emoción llegan antes que la palabra.', ancla:a('Sin ancla local: la partería patrimonial documentada es afro del Pacífico', 'por-documentar', 'En Cartago el parto institucional es del 99,3 % (ASIS 2025); trasplantar la partería del Pacífico sería atribuirle al Norte del Valle un saber ajeno.'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Más de veinte palabras', foco: 'Vocabulario emocional real, más allá de «bien» y «mal».', ancla:a('El bordado cartagüeño: nombrar cada puntada', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Sentir no es actuar', foco: 'La emoción informa, no obliga: entre sentir y hacer hay un espacio.', ancla:a('El nak chak y el nak kuk: la cocina y el fogón del pueblo misak', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Respirar es una técnica', foco: 'Regulación fisiológica y anclaje sensorial, practicados hasta que salgan solos.', ancla:a('Los cantos de boga de los ríos del Pacífico: cantar para aligerar el paso', 'verificada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'El miedo que protege', foco: 'Distinguir el miedo que cuida del miedo que se queda cuando ya pasó.', ancla:a('El río La Vieja y sus crecientes', 'por-documentar', 'El río y las inundaciones están verificados, pero no hay corpus documentado de señales comunitarias para leer la creciente: se cierra con entrevista, no con búsqueda.'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'El revés del bordado', foco: 'Error, frustración y rehacer: los nudos van por detrás, y sostienen.', ancla:a('El revés del bordado y del calado: donde van los nudos', 'verificada'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'La rabia y el límite', foco: 'La rabia como señal de que alguien cruzó una frontera propia.', ancla:a('La cerca viva como lindero', 'por-documentar', 'No hay costumbre local documentada de mojones ni de disputa de linderos; la cerca viva es la alternativa del mismo territorio, aún por cerrar con fuente de primera mano.'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'La atención secuestrada', foco: 'Pantallas y soberanía de la mirada: quién decide dónde miras.', ancla:a('La tulpa, el fogón nasa y kokonuko: aprender mirando y escuchando', 'verificada'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Dormir, comer, moverse', foco: 'La base física del ánimo: casi nada se sostiene sin esto.', ancla:a('La traviesa y la mitaca: el calendario cafetero y el descanso', 'verificada'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'Pedir ayuda', foco: 'Construir una red con adultos, no solo con pares: el apoyo familiar es el factor más consistente (Xiong et al., 2022).', ancla:a('El convite: el trabajo que se devuelve entre vecinos', 'verificada'), estado: 'proximamente' },
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
    { numero: 1, slug: 'momento-1', nombre: 'Escuchar sin arreglar', foco: 'Escucha activa: el silencio es parte de la conversación, no una falla.', ancla:a('El escuchar silencioso (Dussel)', 'verificada'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'La amistad no es propiedad', foco: 'Celos y exclusividad: querer a alguien no es tenerlo.', ancla:a('El compadrazgo: el parentesco que se elige', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Empatía no es lástima', foco: 'Tomar la perspectiva del otro sin ponerse por encima.', ancla:a('Los alabaos: acompañar el duelo cantando', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'La palabra que hiere', foco: 'Apodos, burla y el humor que se cobra víctimas.', ancla:a('El fiado con cuaderno y el acuerdo de palabra del cuadradero', 'verificada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'El conflicto no es violencia', foco: 'El conflicto es normal; la violencia es una elección dentro de él.', ancla:a('El palabrero wayuu (pütchipü\'üi) y el sistema normativo wayuu', 'verificada'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Reparar y volver a confiar', foco: 'La diferencia entre «ya, perdón» y una reparación real, y qué viene después.', ancla:a('La armonización nasa', 'verificada'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'Guardar y no guardar', foco: 'Los secretos que sí se cuentan, y a quién.', ancla:a('Descartada por decisión ética', 'descartada', 'Documentarla obligaría a bordear saber restringido o a usar como ilustración justo aquello que las comunidades protegen. El dilema real del secreto es judicial y de despojo, no de madurez personal.'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Los grupos de chat', foco: 'Cuidado en línea: capturas, grupos y lo que se reenvía.', ancla:a('El Matachín del Carnaval de Riosucio: el chisme vuelto verso firmado', 'verificada'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Quién come solo', foco: 'La exclusión cotidiana, la que no se denuncia porque no se ve.', ancla:a('La minga: nadie sobra', 'verificada'), estado: 'proximamente' },
    {
      numero: 10,
      slug: 'momento-10',
      nombre: 'Cuando la tierra se movió',
      foco: 'Comprender el sismo del 10 de agosto de 2026, sostener el miedo propio y acompañar a otro con las tres acciones de la primera ayuda psicológica.',
      ancla:a('La minga nasa tras el terremoto del río Páez (1994)', 'verificada'),
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
    { numero: 1, slug: 'momento-1', nombre: 'La necesidad de pertenecer', foco: 'Por qué el grupo pesa tanto a esta edad, y qué se paga por entrar.', ancla:a('Las Cuadrillas del Carnaval de Riosucio y la cuadrilla de recolección', 'verificada'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Decir que no', foco: 'Presión de grupo: negarse sin perder el lugar.', ancla:a('El Nu Nakchak misak, los shures y las shuras, y la Misak Ley', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'El que mira', foco: 'El papel del espectador: mirar también es participar.', ancla:a('El conciliador en equidad y el juez de paz que la comunidad elige', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Rumor y reputación', foco: 'Cómo se fabrica la fama de alguien y cuánto cuesta deshacerla.', ancla:a('Sin ancla: no hay pregonero documentado en Cartago ni el Norte del Valle', 'por-documentar', 'Cero evidencia local de la figura. Sustituto propuesto por documentar: la reputación en el taller de bordado.'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'La ruta cuando algo pasa', foco: 'Ley 1620 de 2013: tipologías de situación y a quién se avisa.', ancla:a('La asamblea de cabildos del norte del Cauca y la sentencia T-523 de 1997', 'verificada'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Identidad prestada', foco: 'Marca, moda y pertenencia comprada: la economía de la atención en el aula.', ancla:a('La Feria de Cartago y las Fiestas del Calado y el Bordado de Ansermanuevo', 'verificada'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'El cuerpo comparado', foco: 'Imagen corporal, burla y la vara con que se mide.', ancla:a('Cómo Colombia aprendió a mirar cuerpos: cartillas escolares y la revista Cromos', 'verificada'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Nosotros y ellos', foco: 'Prejuicio y estigma dentro del salón.', ancla:a('Riosucio: dos pueblos separados por una cerca, fusionados por decreto en 1846', 'verificada'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Liderar sin mandar', foco: 'Autoridad entendida como cuidado y no como mando.', ancla:a('El cabildo indígena y el bastón de mando', 'verificada'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'La minga del curso', foco: 'Acción colectiva de cuidado con seguimiento a cuatro semanas: la empatía se entrena sostenida y conductual (Teding van Berkhout y Malouff, 2016).', ancla:a('La minga como práctica de unidad (CRIC)', 'verificada'), estado: 'proximamente' },
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
    { numero: 1, slug: 'momento-1', nombre: 'Ponerse en el lugar del otro', foco: 'Tomar perspectiva, evaluado por conducta observable y no por autoinforme.', ancla:a('La formación del jaibaná embera: se aprende de un maestro, no se hereda', 'verificada'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Género y mandatos', foco: 'Lo que se espera de hombres y mujeres, y quién lo decidió.', ancla:a('Los oficios asignados por género en la finca cafetera', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Vínculos y consentimiento', foco: 'Relaciones sanas y señales tempranas de control.', ancla:a('La Real Pragmática de Matrimonios (1776): el permiso paterno era ley', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Celos no son amor', foco: 'Violencia en la pareja adolescente: el control disfrazado de cuidado.', ancla:a('El artículo 383 del Código Penal de 1936, vigente hasta 1981', 'verificada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'La broma que no es broma', foco: 'Racismo y clasismo cotidianos en el lenguaje del curso.', ancla:a('Las Gracias al Sacar (1795): la blancura estaba en un arancel', 'verificada'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'El aula que excluye', foco: 'Discapacidad y neurodivergencia: barreras que nadie puso a propósito.', ancla:a('El Instituto para Niños Ciegos y Sordos de Cali y la «lengua manual» de la Ley 324', 'verificada'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'El que llegó de otra parte', foco: 'Migración y desarraigo: llegar sin red a un lugar que ya está repartido.', ancla:a('El desplazamiento y la migración en Cartago, con cifras del RUV', 'verificada'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Cuando el daño lo hizo el grupo', foco: 'Reparación colectiva: qué se hace cuando el responsable son todos.', ancla:a('El refrescamiento del territorio (Drexler, 2004)', 'verificada'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Justicia y venganza', foco: 'Reparar no es castigar: dos respuestas distintas al mismo daño.', ancla:a('El palabrero wayuu: reparar en vez de encarcelar', 'verificada'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'El acuerdo de aula', foco: 'Construir norma propia en vez de recibirla hecha.', ancla:a('Los mandatos del CRIC y del pueblo misak, y su rendición pública', 'verificada'), estado: 'proximamente' },
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
    { numero: 1, slug: 'momento-1', nombre: 'Ansiedad: qué es y qué no', foco: 'Normalizar sin banalizar: la ansiedad que avisa y la que incapacita.', ancla:a('Sin ancla: el sereno está documentado en Bogotá, no en el Norte del Valle', 'por-documentar', 'La figura solo aparece en fuentes divulgativas y fuera de la región.'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'Lo que controlo y lo que no', foco: 'La dicotomía del control aplicada a lo que de verdad quita el sueño.', ancla:a('La roya y la cosecha: lo que sí dependía de una decisión', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Tristeza, depresión y ayuda', foco: 'Desestigmatizar y usar la ruta real: Ley 1616 de 2013, orientación escolar, EPS.', ancla:a('Los médicos tradicionales y el «refrescar»', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'Si alguien me lo dice', foco: 'Qué hacer ante autolesión o ideación suicida: protocolo de aviso, nunca diagnóstico.', ancla:a('La Guardia Indígena del Cauca: avisar sin armas y sin resolver solo', 'verificada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'Duelo', foco: 'Muerte, ruptura y migración, sin pedirle a nadie que le vea el lado bueno.', ancla:a('El gualí, el levantamiento de tumba y el novenario', 'verificada'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Anestesias', foco: 'Sustancias, apuestas y pantallas como forma de no sentir.', ancla:a('La amapola en Tierradentro y el tejido roto', 'verificada'), estado: 'proximamente' },
    {
      numero: 7,
      slug: 'momento-7',
      nombre: 'La infoesfera emocional',
      foco: 'Volver a la normalidad y manejo de rumores: abrir un mensaje en sus tres capas, desarmar un rumor químico con la cuenta, rastrear el origen de una cifra falsa y distinguir lo que se comprueba de lo que se respeta.',
      ancla: a('La red de radios comunitarias del Norte del Valle: la palabra con dueño', 'verificada'),
      estado: 'activo',
      claveGuia: '10-7',
    },
    {
      numero: 8,
      slug: 'momento-8',
      nombre: 'El desastre no es natural',
      foco: 'La amenaza es natural, el desastre no. Los once ángulos de la vulnerabilidad global aplicados a una cuadra concreta, hasta llegar a una propuesta viable.',
      ancla: a('La lectura nasa de 1994 y la Corporación Nasa Kiwe, que Wilches-Chaux dirigió', 'verificada'),
      estado: 'activo',
      claveGuia: '10-8',
    },
    {
      numero: 9,
      slug: 'momento-9',
      nombre: 'Prepararse sin vivir con miedo',
      foco: 'El fenómeno físico, el histograma de las réplicas y la diferencia entre probabilidad y predicción, para preparar la casa sin vivir asustado. Sin simulacros sorpresa.',
      ancla: a('El brillo de las Pléyades: una predicción andina que la ciencia confirmó', 'verificada'),
      estado: 'activo',
      claveGuia: '10-9',
    },
    { numero: 10, slug: 'momento-10', nombre: 'Cuidar al que cuida', foco: 'El desgaste de sostener a otros: acompañar no es cargar.', ancla:a('Quién sostiene a las cantadoras de alabao', 'verificada'), estado: 'proximamente' },
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
    { numero: 1, slug: 'momento-1', nombre: 'Quién soy cuando nadie mira', foco: 'Carácter y coherencia: lo que haces sin público.', ancla:a('El oficio heredado en Cartago, de abuela a nieta', 'verificada'), estado: 'proximamente' },
    { numero: 2, slug: 'momento-2', nombre: 'La trampa de compararse', foco: 'Redes, éxito y cuerpo: medirse con una vara ajena.', ancla:a('Fals Borda en Saucío: la escala agrícola frente al convite', 'verificada'), estado: 'proximamente' },
    { numero: 3, slug: 'momento-3', nombre: 'Decidir con miedo', foco: 'Decisiones vitales cuando no hay certeza y hay que decidir igual.', ancla:a('La Compañía Burila (1884): abrir trocha no daba la tierra', 'verificada'), estado: 'proximamente' },
    { numero: 4, slug: 'momento-4', nombre: 'El trabajo y la dignidad', foco: 'Qué hace que una vida valga la pena, más allá del salario.', ancla:a('El calado de Ansermanuevo: el oficio con nombre propio', 'verificada'), estado: 'proximamente' },
    { numero: 5, slug: 'momento-5', nombre: 'Irse o quedarse', foco: 'Migración, oportunidad y querencia: alas y raíces.', ancla:a('Paisanaje y colonias: identificarse por el río al llegar al Valle', 'verificada'), estado: 'proximamente' },
    { numero: 6, slug: 'momento-6', nombre: 'Sostenerse afuera', foco: 'Soledad y adultez temprana: la red que hay que armar cuando se acaba el colegio.', ancla:a('La regionalización de la Universidad del Valle y la sede Cartago', 'verificada'), estado: 'proximamente' },
    { numero: 7, slug: 'momento-7', nombre: 'Ciudadanía emocional', foco: 'Deliberar con quien piensa distinto sin destruirse en el intento.', ancla:a('La Junta de Acción Comunal: afiliado desde los catorce años', 'verificada'), estado: 'proximamente' },
    { numero: 8, slug: 'momento-8', nombre: 'Lo que le debo al lugar', foco: 'Territorio y deuda: qué recibiste de este sitio y qué le devuelves.', ancla:a('El territorio como cosmos (kiwe)', 'verificada'), estado: 'proximamente' },
    { numero: 9, slug: 'momento-9', nombre: 'Mentoría', foco: 'Acompañar durante un periodo a un estudiante de 6.º del Nivel 1.', ancla:a('La minga intergeneracional', 'verificada'), estado: 'proximamente' },
    { numero: 10, slug: 'momento-10', nombre: 'Devolver', foco: 'Proyecto de vida entendido como cuidado, con acto público de cierre.', ancla:a('La devolución, quinta fase del MILC', 'verificada'), estado: 'proximamente' },
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
