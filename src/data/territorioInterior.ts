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
    {
      numero: 2,
      slug: 'momento-2',
      nombre: 'Más de veinte palabras',
      foco: 'Vocabulario emocional real, más allá de «bien» y «mal»: familias, intensidad y la diferencia entre lo que siento, lo que pienso y lo que hice.',
      ancla:a('El calado cartagüeño: cada puntada tiene nombre propio ---rococó, pasado, punto de sombra, pate-cabra, punto espíritu--- y ese nombre es lo que permite pedirla, enseñarla y repararla (Pérez-Bustos, 2019)', 'verificada'),
      estado: 'activo',
      claveGuia: '6-2',
    },
    {
      numero: 3,
      slug: 'momento-3',
      nombre: 'Sentir no es actuar',
      foco: 'La emoción informa, no obliga: entre el impulso y la conducta hay un espacio que se puede ensanchar, y se ensancha con palabras.',
      ancla:a('El nak chak y el nak kuk ---la cocina y el fogón misak---: lo que pasa afuera se lleva al fuego, y de ahí nace y se difunde el consejo (kørøsrøp) antes de decidir', 'verificada'),
      estado: 'activo',
      claveGuia: '6-3',
    },
    {
      numero: 4,
      slug: 'momento-4',
      nombre: 'Respirar es una técnica',
      foco: 'Regulación fisiológica y anclaje sensorial, practicados en frío hasta que salgan solos: la pausa que no necesita permiso ni lugar.',
      ancla:a('Los cantos de boga de los ríos del Pacífico: el canto no le quita peso al remo, le pone ritmo ---y cantar es exhalar largo durante horas---', 'verificada'),
      estado: 'activo',
      claveGuia: '6-4',
    },
    { numero: 5, slug: 'momento-5', nombre: 'El miedo que protege', foco: 'Distinguir el miedo que cuida del miedo que se queda cuando ya pasó.', ancla:a('El río La Vieja y sus crecientes', 'por-documentar', 'El río y las inundaciones están verificados, pero no hay corpus documentado de señales comunitarias para leer la creciente: se cierra con entrevista, no con búsqueda.'), estado: 'proximamente' },
    {
      numero: 6,
      slug: 'momento-6',
      nombre: 'El revés del bordado',
      foco: 'Error, frustración y rehacer: los nudos van por detrás, y sostienen. Equivocarse es algo que se hace; «ser malo para esto» es una identidad, y contra una identidad no se puede trabajar.',
      ancla:a('El revés del bordado y del calado ---donde van los nudos---, y el remiendo hecho para no verse: «no quieres que se vea remendada» (Pérez-Bustos, 2019)', 'verificada'),
      estado: 'activo',
      claveGuia: '6-6',
    },
    { numero: 7, slug: 'momento-7', nombre: 'La rabia y el límite', foco: 'La rabia como señal de que alguien cruzó una frontera propia.', ancla:a('La cerca viva como lindero', 'por-documentar', 'No hay costumbre local documentada de mojones ni de disputa de linderos; la cerca viva es la alternativa del mismo territorio, aún por cerrar con fuente de primera mano.'), estado: 'proximamente' },
    {
      numero: 8,
      slug: 'momento-8',
      nombre: 'La atención secuestrada',
      foco: 'Pantallas y soberanía de la mirada: quién decide dónde miras. Los enganches están diseñados, así que no se resuelve con más fuerza de voluntad sino con decisiones tomadas antes.',
      ancla:a('La tulpa ---ipx kweht---, el fogón de tres piedras nasa y kokonuko: un solo fuego, y todos mirando hacia él, es donde se enseña la lengua y la cultura', 'verificada'),
      estado: 'activo',
      claveGuia: '6-8',
    },
    {
      numero: 9,
      slug: 'momento-9',
      nombre: 'Dormir, comer, moverse',
      foco: 'La base física del ánimo: casi nada de lo aprendido en los momentos anteriores funciona con el cuerpo en el piso.',
      ancla:a('La traviesa y la mitaca: el calendario cafetero no produce parejo todo el año, y al cafetal al que se le exige el máximo siempre no se le saca más café, se le agota', 'verificada'),
      estado: 'activo',
      claveGuia: '6-9',
    },
    {
      numero: 10,
      slug: 'momento-10',
      nombre: 'Pedir ayuda',
      foco: 'Construir una red con adultos, no solo con pares: en 90 estudios con más de 77.000 participantes, el apoyo familiar resultó más protector que el de los pares (Xiong y otros, 2022).',
      ancla:a('El convite: la ayuda se presta con la condición de que se devuelva, así que el que pide no queda debiendo ---queda dentro del ciclo---', 'verificada'),
      estado: 'activo',
      claveGuia: '6-10',
    },
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
    {
      numero: 1,
      slug: 'momento-1',
      nombre: 'Escuchar sin arreglar',
      foco: 'El silencio es parte de la conversación, no una falla. Escuchar no es esperar turno, y aconsejar demasiado pronto no acelera la solución: la aleja.',
      // La semilla del plan («el escuchar silencioso», de Dussel) nombraba en
      // realidad la primera voz del triángulo, no un saber situado: habría
      // repetido a Dussel dos veces en la misma guía. Se sustituye por la
      // práctica que sí está documentada y es del mismo orden que las demás
      // anclas del programa.
      ancla:a('El círculo de la palabra ---convocado hasta hoy por la ONIC y el CRIC---: en círculo y sin cabecera, la palabra circula por turnos, la conducen los mayores y no se cierra cuando aparece la respuesta, sino cuando todos hablaron', 'verificada'),
      estado: 'activo',
      claveGuia: '7-1',
    },
    {
      numero: 2,
      slug: 'momento-2',
      nombre: 'La amistad no es propiedad',
      foco: 'Celos y exclusividad: querer a alguien no es tenerlo. Los celos son una emoción que llega sola; el control es una conducta que se elige — y es la que aleja.',
      ancla:a('El compadrazgo: parentesco que se elige, con dos reglas que enseñan ---unos padres no pueden apadrinar a su propio hijo, y los padrinos no suelen ser parientes---: el lazo está hecho para traer gente de afuera', 'verificada'),
      estado: 'activo',
      claveGuia: '7-2',
    },
    {
      numero: 3,
      slug: 'momento-3',
      nombre: 'Empatía no es lástima',
      foco: 'Tomar la perspectiva del otro sin ponerse por encima: acompañar es un oficio con acciones, no un sentimiento que se tiene desde lejos.',
      ancla:a('Los alabaos del Chocó y el Pacífico ---cantos de velorio a capela, con voz líder y coro que responde, Patrimonio Inmaterial de la Nación desde 2014---: las cantadoras llegan, se quedan y nadie canta solo', 'verificada'),
      estado: 'activo',
      claveGuia: '7-3',
    },
    {
      numero: 4,
      slug: 'momento-4',
      nombre: 'La palabra que hiere',
      foco: 'Apodos, burla y el humor que se cobra víctimas. «Era chiste» no borra el daño: corre la línea de lo que el grupo permite hacerle a alguien.',
      ancla:a('El fiado de la tienda de barrio y su libreta: crédito sin contrato, sin firma y sin intereses, sostenido solo por la palabra del cliente ---la misma boca que un día vale un mercado y otro día dice «era chiste»---', 'verificada'),
      estado: 'activo',
      claveGuia: '7-4',
    },
    {
      numero: 5,
      slug: 'momento-5',
      nombre: 'El conflicto no es violencia',
      foco: 'El conflicto es normal; la violencia es una elección dentro de él. Casi ninguna pelea empieza en el golpe: empieza tres escalones antes.',
      ancla:a('El pütchipü\'üi (palabrero) y el sistema normativo wayuu, inspirado en la reparación y la compensación ---Patrimonio Cultural Inmaterial de la Humanidad, UNESCO 2010---', 'verificada'),
      estado: 'activo',
      claveGuia: '7-5',
    },
    {
      numero: 6,
      slug: 'momento-6',
      nombre: 'Reparar y volver a confiar',
      foco: 'La diferencia entre «ya, perdón» y una reparación real, y qué viene después: la confianza no vuelve por decreto, vuelve en pasos.',
      ancla:a('La armonización nasa: reparar es un procedimiento con pasos, conducido por quien sabe, hecho en comunidad y con un momento en que se declara cerrado', 'verificada'),
      estado: 'activo',
      claveGuia: '7-6',
    },
    { numero: 7, slug: 'momento-7', nombre: 'Guardar y no guardar', foco: 'Los secretos que sí se cuentan, y a quién.', ancla:a('Descartada por decisión ética', 'descartada', 'Documentarla obligaría a bordear saber restringido o a usar como ilustración justo aquello que las comunidades protegen. El dilema real del secreto es judicial y de despojo, no de madurez personal.'), estado: 'proximamente' },
    {
      numero: 8,
      slug: 'momento-8',
      nombre: 'Los grupos de chat',
      foco: 'Capturas, grupos y lo que se reenvía. Lo que suelta la mano no es el anonimato ---en un grupo todos saben quién eres---: es no tener que aguantar la cara del otro.',
      ancla:a('El matachín del Carnaval de Riosucio (Caldas), presente desde 1915, y su decretero: la burla escrita en verso sobre los propios vecinos, pero leída con nombre, en la plaza y con fecha de cierre', 'verificada'),
      estado: 'activo',
      claveGuia: '7-8',
    },
    {
      numero: 9,
      slug: 'momento-9',
      nombre: 'Quién come solo',
      foco: 'La exclusión cotidiana, la que no se denuncia porque no hay a quién acusar. Para que alguien quede por fuera no hace falta que nadie lo excluya: basta con que a nadie se le ocurra contarlo.',
      ancla:a('La minga ---nombrada por el CRIC como práctica de unidad---: se avisa uno por uno, hay tarea para cada quien según lo que puede hacer y se come junto de una sola olla; a la gente se la cuenta antes de empezar', 'verificada'),
      estado: 'activo',
      claveGuia: '7-9',
    },
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
    {
      numero: 1,
      slug: 'momento-1',
      nombre: 'La necesidad de pertenecer',
      foco: 'Por qué el grupo pesa tanto a esta edad, y qué se paga por entrar. Querer pertenecer no es un defecto: lo que se revisa es el precio, y si hay una sola puerta.',
      ancla:a('Las Cuadrillas del Carnaval de Riosucio ---grupos de vecinos que preparan en secreto, durante los dos años entre carnavales, su música, sus coplas y su montaje crítico--- y la cuadrilla de recolección, que es la misma palabra para el grupo que sale junto a la cosecha', 'verificada'),
      estado: 'activo',
      claveGuia: '8-1',
    },
    {
      numero: 2,
      slug: 'momento-2',
      nombre: 'Decir que no',
      foco: 'Presión de grupo: negarse sin perder el lugar. La fuerza del grupo no está en el número sino en la unanimidad, y un solo aliado la rompe.',
      ancla:a('El Nu Nakchak misak ---el fogón donde se toma la palabra entre los shures y las shuras--- y la Misak Ley, fundada en el Derecho Mayor: un «no» que no lo dijo uno solo, que afirma a qué se dice sí y que quedó por escrito', 'verificada'),
      estado: 'activo',
      claveGuia: '8-2',
    },
    {
      numero: 3,
      slug: 'momento-3',
      nombre: 'El que mira',
      foco: 'El papel del espectador: mirar también es participar. Entre más testigos, menos ayuda; y la autoridad para intervenir no es un cargo.',
      ancla:a('El juez de paz (artículo 247 de la Constitución de 1991 y Ley 497 de 1999) y el conciliador en equidad: vecinos elegidos por votación, sin necesidad de ser abogados, que resuelven según los criterios de justicia de su propia comunidad', 'verificada'),
      estado: 'activo',
      claveGuia: '8-3',
    },
    // Cerrada con el sustituto que proponía la nota anterior (el taller de bordado),
    // ahora con fuente: la etnografía del calado cartagüeño de Pérez-Bustos (2019,
    // Papel de Colgadura n.º 18). El error se remienda para que no se vea —«no quieres
    // que se vea remendada», dice Olivia, caladora— y cuando el daño es demasiado
    // grande, ya no hay remiendo posible. Esa es, exactamente, la economía de una
    // reputación: se sostiene en lo que no se nota, y tiene un punto sin retorno.
    {
      numero: 4,
      slug: 'momento-4',
      nombre: 'Rumor y reputación',
      foco: 'Cómo se fabrica la fama de alguien y cuánto cuesta deshacerla. Las malas impresiones se forman más rápido y resisten más los desmentidos que las buenas.',
      ancla:a('El remiendo invisible del calado cartagüeño: reparar el error para que no se vea, y el daño que ya no tiene remiendo (Pérez-Bustos, 2019)', 'verificada'),
      estado: 'activo',
      claveGuia: '8-4',
    },
    {
      numero: 5,
      slug: 'momento-5',
      nombre: 'La ruta cuando algo pasa',
      foco: 'Ley 1620 de 2013 y Decreto 1965: tipologías de situación y a quién se avisa. La palabra que cambia el tipo es «repetida», y avisar no es acusar.',
      ancla:a('La jurisdicción especial indígena y la sentencia T-523 de 1997 (M.P. Carlos Gaviria Díaz): reconoce la justicia propia de una comunidad y a la vez fija los límites que ninguna autoridad puede pasar ---la vida, la esclavitud, la tortura y la legalidad de faltas y penas---', 'verificada'),
      estado: 'activo',
      claveGuia: '8-5',
    },
    {
      numero: 6,
      slug: 'momento-6',
      nombre: 'Identidad prestada',
      foco: 'Marca, moda y pertenencia comprada. No se compra la cosa sino la señal, y la señal se devalúa; lo que se sabe hacer, no.',
      ancla:a('Las fiestas del calado y el bordado en el Norte del Valle ---Cartago y Ansermanuevo---: una región que celebra como signo propio algo hecho a mano, que se puede reconocer y que lleva la marca de quien lo hizo', 'verificada'),
      estado: 'activo',
      claveGuia: '8-6',
    },
    {
      numero: 7,
      slug: 'momento-7',
      nombre: 'El cuerpo comparado',
      foco: 'Imagen corporal, burla y la vara con que se mide: alguien la fabricó, tiene fecha y hay quien gana con ella.',
      ancla:a('Cómo Colombia aprendió a mirar cuerpos: la revista Cromos ---que durante el siglo XX promovió ideales estéticos sobre el cuerpo--- y el mito del 90-60-90 en sus discursos sobre el Reinado Nacional de Belleza', 'verificada'),
      estado: 'activo',
      claveGuia: '8-7',
    },
    {
      numero: 8,
      slug: 'momento-8',
      nombre: 'Nosotros y ellos',
      foco: 'Prejuicio y estigma dentro del salón. Basta una raya arbitraria para producir favoritismo, y lo único que baja una cerca es una tarea común.',
      ancla:a('Riosucio: La Montaña ---parroquia indígena--- y Quiebralomo ---parroquia minera--- separadas por una cerca que durante más de veinte años dividió los dos pueblos, sus iglesias y sus plazas, hasta el decreto de fusión del 17 de junio de 1846; el municipio conserva todavía dos plazas', 'verificada'),
      estado: 'activo',
      claveGuia: '8-8',
    },
    {
      numero: 9,
      slug: 'momento-9',
      nombre: 'Liderar sin mandar',
      foco: 'Autoridad entendida como cuidado y no como mando. Dominancia y prestigio llevan al mismo puesto por rutas opuestas, y se distinguen preguntando qué pasa cuando esa persona no está.',
      ancla:a('El cabildo indígena y el bastón de mando: autoridad que la comunidad entrega, que dura un periodo, que se refresca cuando se posesiona un cabildo nuevo y que se devuelve', 'verificada'),
      estado: 'activo',
      claveGuia: '8-9',
    },
    {
      numero: 10,
      slug: 'momento-10',
      nombre: 'La minga del curso',
      foco: 'Acción colectiva de cuidado con seguimiento a cuatro semanas: la empatía se entrena sostenida y conductual (Teding van Berkhout y Malouff, 2016).',
      ancla:a('La minga como práctica de unidad (CRIC): se convoca uno por uno, hay tarea para cada quien según lo que puede, se come junto de una sola olla ---y se devuelve, porque la cuenta se lleva en turnos---', 'verificada'),
      estado: 'activo',
      claveGuia: '8-10',
    },
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
    {
      numero: 1,
      slug: 'momento-1',
      nombre: 'Ponerse en el lugar del otro',
      foco: 'Tomar perspectiva es una técnica que se aprende y se verifica, no un rasgo de carácter: se reconstruye el día de alguien y después se le pregunta si se acertó.',
      ancla:a('La formación del jaibaná embera ---hombre o mujer, empieza en la infancia guiado por un maestro y buena parte de la enseñanza le llega en sueños---: no se hereda, se aprende, y lo que se aprende es a mirar desde donde miran otros', 'verificada'),
      estado: 'activo',
      claveGuia: '9-1',
    },
    {
      numero: 2,
      slug: 'momento-2',
      nombre: 'Género y mandatos',
      foco: 'Un mandato no se anuncia: se da por obvio y se cobra cuando se rompe. A unas les quita el derecho a intentar; a otros, el derecho a necesitar.',
      ancla:a('La división del trabajo por género en la finca cafetera, todavía vigente: 92 % de las mujeres en preparación de alimentos, 83 % de los hombres aplicando agroquímicos ---y una participación femenina en la producción que nunca modificó el reparto doméstico---', 'verificada'),
      estado: 'activo',
      claveGuia: '9-2',
    },
    {
      numero: 3,
      slug: 'momento-3',
      nombre: 'Vínculos y consentimiento',
      foco: 'Consentir es libre, informado, específico y revocable. El control no es un episodio sino un patrón, y la pregunta temprana es qué podía hacer antes que ya no hace.',
      ancla:a('La Pragmática Sanción de Carlos III (23 de marzo de 1776), «para evitar el abuso de contraer matrimonios desiguales»: obligaba a los menores de veinticinco a obtener el consentimiento paterno, y se extendió a América por real cédula del 7 de abril de 1778', 'verificada'),
      estado: 'activo',
      claveGuia: '9-3',
    },
    {
      numero: 4,
      slug: 'momento-4',
      nombre: 'Celos no son amor',
      foco: 'La violencia en la pareja no es un estallido sino un continuo. Los celos son una emoción que llega sola; revisar un teléfono o prohibir una amistad son conductas que se eligen.',
      // El plan citaba «el artículo 383 del Código Penal de 1936». No fue posible
      // confirmar el número del artículo en fuente primaria ---las referencias
      // consultadas apuntan al 382---, así que la guía nombra la ley y el delito,
      // que sí son rastreables, y no imprime el número. La fecha sí se confirmó:
      // el Código de 1980 entró a regir en enero de 1981 (Decreto 141 de 1980).
      ancla:a('El uxoricidio por adulterio del Código Penal de 1936 (Ley 95 de 1936), que reducía la pena de la mitad a las tres cuartas partes a quien matara o hiriera a la esposa, hija o hermana «de vida honesta» sorprendida en acceso carnal ilegítimo ---vigente hasta enero de 1981---', 'verificada'),
      estado: 'activo',
      claveGuia: '9-4',
    },
    {
      numero: 5,
      slug: 'momento-5',
      nombre: 'La broma que no es broma',
      foco: 'Racismo y clasismo cotidianos. Quienes cometen microagresiones con frecuencia no son conscientes: la ausencia de mala intención no es la excepción, es lo normal.',
      ancla:a('La Real Cédula de Gracias al Sacar (10 de febrero de 1795): un arancel con setenta y una opciones de compra, entre ellas la blancura ---dispensa de la calidad de pardo, 100 reales; de quinterón, 800; el título de «don», 1.000---', 'verificada'),
      estado: 'activo',
      claveGuia: '9-5',
    },
    {
      numero: 6,
      slug: 'momento-6',
      nombre: 'El aula que excluye',
      foco: 'La discapacidad resulta de la interacción entre las personas y las barreras del entorno y de la actitud. Las barreras de comunicación y de método son las más frecuentes y las que nadie mira.',
      ancla:a('El Instituto para Niños Ciegos y Sordos de Cali ---fundado en 1940 por Luisita Sánchez de Hurtado, y que empezó como internado: la forma de atender era reunir aparte--- y la Ley 324 de 1996, con la que el Estado reconoció la Lengua Manual Colombiana como idioma propio de la comunidad sorda', 'verificada'),
      estado: 'activo',
      claveGuia: '9-6',
    },
    {
      numero: 7,
      slug: 'momento-7',
      nombre: 'El que llegó de otra parte',
      foco: 'Lo primero que se pierde al migrar no es el lugar: es la gente que sabía quién eras. Al que llega no se le puede pedir que se integre; la red se ofrece.',
      // El plan proponía «cifras del RUV para Cartago», que no están disponibles
      // públicamente con el detalle municipal necesario. En vez de imprimir una
      // cifra sin fuente, la guía usa lo verificable ---la historia del traslado y
      // la ruta institucional de llegada--- y convierte la cifra en trabajo del
      // estudiante, que debe buscarla y citarla.
      ancla:a('Cartago misma llegó de otra parte: fundada el 9 de agosto de 1540 por Jorge Robledo a orillas del río Otún ---donde hoy está Pereira---, fue trasladada el 21 de abril de 1691 a su sitio actual, entre el Cauca y La Vieja', 'verificada'),
      estado: 'activo',
      claveGuia: '9-7',
    },
    {
      numero: 8,
      slug: 'momento-8',
      nombre: 'Cuando el daño lo hizo el grupo',
      foco: 'Reparación colectiva: hay daños que le pasan al grupo y no a una persona. Sin garantía de no repetición, toda reparación es un gesto.',
      ancla:a('El refrescamiento del territorio entre los nasa: prácticas rituales con las que se limpia, se refresca y se cura el territorio ---lo que es de todos--- documentadas por Drexler (2004) en trabajo de campo entre 2002 y 2004', 'verificada'),
      estado: 'activo',
      claveGuia: '9-8',
    },
    {
      numero: 9,
      slug: 'momento-9',
      nombre: 'Justicia y venganza',
      foco: 'Dos preguntas distintas ante el mismo daño: «¿quién lo hizo y cuánto merece?» y «¿qué hace falta para arreglarlo?». Reparar no es la versión blanda de castigar.',
      ancla:a('El sistema normativo wayuu aplicado por el pütchipü\'üi (palabrero), inspirado en la reparación y la compensación ---Patrimonio Cultural Inmaterial de la Humanidad, UNESCO 2010---: un conflicto puede cerrarse sin que nadie vaya preso', 'verificada'),
      estado: 'activo',
      claveGuia: '9-9',
    },
    {
      numero: 10,
      slug: 'momento-10',
      nombre: 'El acuerdo de aula',
      foco: 'Construir norma propia en vez de recibirla hecha: pocas reglas, verificables, con consecuencia reparadora, verificador rotativo y fecha de revisión.',
      ancla:a('Los mandatos del CRIC y del pueblo misak: normas que la comunidad delibera en asamblea y se da a sí misma, y de las que las autoridades rinden cuentas públicamente ante quienes las nombraron', 'verificada'),
      estado: 'activo',
      claveGuia: '9-10',
    },
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
    // Sustituye al sereno (bogotano y solo en fuentes divulgativas) por un saber del
    // propio Valle: la «enfermedad de los nervios», nombre popular con que las
    // comunidades rurales del suroccidente nombran el sufrimiento que mezcla cuerpo y
    // emoción —pesadillas, temblor, llanto, miedo, cambios de peso—. Etnografía en
    // Sevilla y Barragán (Tuluá), Valle del Cauca, y Descansé (Cauca), 2018-2019:
    // Piedrahita Forero y Tabares (2021), Jangwa Pana, 20(2), 225-258.
    // CUIDADO AL ESCRIBIR LA GUÍA: el síndrome está documentado como consecuencia de
    // las violencias del conflicto armado. Se nombra ese origen; no se folcloriza ni
    // se diluye en «así le dicen aquí a la ansiedad».
    { numero: 1, slug: 'momento-1', nombre: 'Ansiedad: qué es y qué no', foco: 'Normalizar sin banalizar: la ansiedad que avisa y la que incapacita.', ancla:a('La «enfermedad de los nervios»: cómo el campo del Valle nombra el sufrimiento que se siente en el cuerpo (Piedrahita Forero y Tabares, 2021)', 'verificada'), estado: 'proximamente' },
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
