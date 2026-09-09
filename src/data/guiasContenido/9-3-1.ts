/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 1
 * (sesión global 21).
 *
 * Auto-generado desde content/guias/9/9-3-1.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 1,
  titulo: '¿Qué es un dato? — recolección con propósito',
  resumen: 'En el Registro Único de Víctimas, 7.631 personas figuran ubicadas en Cartago, 6.385 declararon allí su hecho y 2.624 lo sufrieron dentro del municipio. Son tres cifras distintas del mismo tema y ninguna es intercambiable. Hoy aprendes qué hay que saber de un dato para poder leerlo, y recoges veinte filas reales con una pregunta que puedas usar.',
  duracionMin: 90,
  subtema: 'Apertura · Datos del registro al insight',
  preLectura: {
    porQueImporta: 'Dos cifras del mismo tema pueden parecer contradictorias y estar las dos bien. Casi siempre lo que falta no es el dato: es el metadato.',
    preguntaDetonante: '¿Qué registras de tu propia vida, y cuándo fue la última vez que lo volviste a mirar?',
    activacion: {
      titulo: 'Lo que recogen de ti',
      descripcion: 'En 2 minutos, escribe tres datos tuyos que alguna aplicación esté recogiendo ahora mismo. Al lado, si sabes para qué los usa.',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En el periodo 2 produjiste la revista y sustentaste su diseño.',
      siguiente: 'En la sesión 2 trabajas tablas y registros: la columna como tipo y la fila como caso.'
    }
  },
  conceptosClave: [
    {
      termino: 'Unidad de análisis',
      definicion: 'Qué cuenta cada fila: personas, hechos, declaraciones u hogares. Si cambia a mitad de tabla, los totales dejan de significar algo.',
      ejemplo: 'En Cartago, 7.631 son personas ubicadas y 2.624 son desplazamientos ocurridos allí. No es lo mismo.',
      categoria: 'Lo que hay que saber'
    },
    {
      termino: 'Fecha de corte',
      definicion: 'Hasta cuándo llegan los datos de un registro. Dos cifras con cortes distintos no se comparan directamente.',
      ejemplo: 'Por eso «uno de cada quince» es una razón aproximada: los dos números vienen de cortes distintos.',
      categoria: 'Lo que hay que saber'
    },
    {
      termino: 'Metadato',
      definicion: 'Lo que hay que saber del dato para poder leerlo: quién lo recogió, cuándo, con qué instrumento y a quién le preguntó.',
      ejemplo: 'Sin metadato, una cifra es un número suelto que cada quien interpreta como le conviene.',
      categoria: 'Lo que hay que saber'
    },
    {
      termino: 'Pregunta acotada',
      definicion: 'La que se puede responder con los datos que vas a recoger, escrita en una frase corta.',
      ejemplo: '«¿A qué hora del día se llena más la tienda del colegio?» se puede responder. «El consumo escolar» no.',
      categoria: 'Cómo se recoge'
    },
    {
      termino: 'Columna tipada',
      definicion: 'Aquella que guarda una sola clase de cosa —texto, número, fecha, sí o no— y lo tiene declarado.',
      ejemplo: '«Juan, 15 años» en una sola celda no se puede ordenar ni filtrar. Son dos columnas.',
      categoria: 'Cómo se recoge'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes qué hay que saber de un dato?',
      instrucciones: 'Cinco preguntas sobre unidad de análisis, corte y recolección con propósito. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'En Cartago, 7.631 personas figuran ubicadas y 2.624 desplazamientos ocurrieron allí. ¿Se contradicen?',
          opciones: [
            'Sí, porque las dos cifras deberían coincidir en el mismo municipio.',
            'No, porque cuentan cosas distintas: personas ubicadas y hechos ocurridos.',
            'Sí, porque una de las dos fuentes tiene que estar equivocada.',
            'No, porque la diferencia se explica solo por la fecha de corte.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Cambia la unidad de análisis, así que no son comparables directamente.',
          feedbackIncorrecto: 'No se contradicen: una cuenta personas ubicadas y otra hechos ocurridos en el municipio.'
        },
        {
          enunciado: '¿Por qué «uno de cada quince» es una razón aproximada y no un dato exacto?',
          opciones: [
            'Porque los dos números vienen de cortes distintos.',
            'Porque el registro se actualiza todos los días del año.',
            'Porque la población de Cartago no se conoce con precisión.',
            'Porque las cifras oficiales siempre se redondean al publicarse.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Sí. Comparar cifras con cortes distintos se puede, pero hay que decir que la razón es aproximada.',
          feedbackIncorrecto: 'Porque los cortes son distintos. Se puede comparar, siempre que se diga que es aproximado.'
        },
        {
          enunciado: '¿Qué es un metadato?',
          opciones: [
            'Un dato que se calcula a partir de otros datos ya existentes.',
            'El dato más importante de todo un conjunto de registros.',
            'Lo que hay que saber del dato para poder leerlo.',
            'Un dato que se guarda por si llega a hacer falta después.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Eso es: quién lo recogió, cuándo, con qué instrumento y a quién le preguntó.',
          feedbackIncorrecto: 'Es lo que hay que saber del dato para leerlo. Sin él, la cifra es un número suelto.'
        },
        {
          enunciado: '¿Cuál de estas es una pregunta acotada?',
          opciones: [
            '«El uso del tiempo entre los estudiantes de la institución.»',
            '«Todo lo relacionado con los hábitos de consumo escolar.»',
            '«La influencia de la tecnología en la juventud actual.»',
            '«¿A qué hora del día se llena más la tienda del colegio?»'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Sí. Se puede responder con los datos que vas a recoger, y se sabe cuándo terminaste.',
          feedbackIncorrecto: 'La que se puede responder recogiendo datos. Las otras tres son temas, no preguntas.'
        },
        {
          enunciado: 'Tienes una columna con «Juan, 15 años» en cada celda. ¿Qué problema hay?',
          opciones: [
            'Que guarda dos cosas y no se puede ordenar ni filtrar.',
            'Que el nombre debería ir siempre en la última columna.',
            'Que la edad tendría que expresarse en meses cumplidos.',
            'Que faltan comillas para que el programa lo lea bien.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Una columna, una clase de cosa. Ahí son dos columnas.',
          feedbackIncorrecto: 'Guarda dos cosas en una celda. Sin separarlas no se puede ordenar por edad ni buscar por nombre.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus veinte filas, ¿cuál te sorprendió y qué tendrías que recoger para saber si fue casualidad?',
    transferencia: 'Busca en datos abiertos una cifra de tu municipio y anota su unidad de análisis y su fecha de corte antes de creerla.',
    cierre: 'Ubicado, declarado y ocurrido son tres cifras distintas. Lo que falta casi nunca es el dato: es el metadato.'
  },
  saberAncestral: {
    saber: 'Cartago tenía 143.522 habitantes proyectados para 2025. Mira el Registro Único de Víctimas, con corte al 31 de diciembre de 2025. Allí, 7.631 personas víctimas de desplazamiento forzado figuran ubicadas en Cartago: viven allí. Otras 6.385 declararon su hecho en el municipio, y 2.624 sufrieron el desplazamiento dentro de Cartago. Son tres cifras distintas y ninguna es intercambiable. Sumando todos los hechos, con corte al 30 de junio de 2026 hay 9.393 personas víctimas ubicadas en Cartago. Comparando ese dato con la población proyectada, sale una razón aproximada: alrededor de uno de cada quince cartagüeños figura en el registro. Aproximada, porque los dos números tienen cortes distintos. En un salón de Cartago, «el que llegó de otra parte» no es una hipótesis. La cara de exclusión: estas cifras nombran desplazamiento forzado con su fuente, no como color local.',
    fuente: 'Registro Único de Víctimas · Cartago contado con fecha de corte',
    referencia: 'Unidad para la Atención y Reparación Integral a las Víctimas. (2026). Cifras de víctimas municipal [Conjunto de datos, corte 30 de junio de 2026]. Datos Abiertos Colombia.',
    preguntaPuente: 'Ubicado, declarado y ocurrido son tres cifras distintas del mismo municipio. ¿Qué contarías tú en cada fila de tu tabla, y estás seguro de que siempre es lo mismo?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Ubicado, declarado, ocurrido',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Tu huella de datos',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '📖'
      ],
      titulo: 'Actividad 2 · Unidad, corte y metadato',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 3 · Tu tabla de veinte filas',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '✅',
        '💭'
      ],
      titulo: 'Verifica, tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tu huella de datos',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Anota qué aplicaciones de tu celular recogen datos tuyos.',
        'Anota qué datos registras tú mismo, como notas, gastos o plan semanal.',
        'Marca cuáles de los que recoges tú has vuelto a mirar alguna vez.',
        'Escribe una pregunta que podrías responder con datos que ya tienes.',
        'Marca cuál de las dos listas salió más larga.'
      ],
      cuaderno: {
        titulo: 'Mi huella de datos',
        formato: 'dos columnas, lo que recogen de mí y lo que recojo yo, con la pregunta al pie',
        extension: 'un tercio de página'
      },
      criterios: [
        'Hay una pregunta concreta escrita, no un tema.',
        'Están marcados los registros que se han vuelto a mirar.'
      ]
    },
    {
      numero: 2,
      verbo: 'EXPLICA',
      titulo: 'Unidad, corte y metadato',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban las tres palabras con una frase propia cada una.',
        'Digan qué unidad de análisis usa cada una de las tres cifras de Cartago.',
        'Escriban por qué 7.631 y 2.624 no se contradicen.',
        'Diseñen las columnas de una tabla para la pregunta de uno de los dos, con su tipo.'
      ],
      cuaderno: {
        titulo: 'Unidad, corte y metadato',
        formato: 'las tres palabras con frase propia, la unidad de las tres cifras y el diseño de columnas con su tipo',
        extension: 'media página'
      },
      criterios: [
        'Queda explicado por qué las dos cifras no se contradicen.',
        'Cada columna diseñada tiene su tipo declarado.'
      ]
    },
    {
      numero: 3,
      verbo: 'CREA',
      titulo: 'Tu tabla de veinte filas',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Escribe tu pregunta acotada en una frase, arriba de la hoja.',
        'Decide el instrumento: encuesta, observación o registro.',
        'Define entre tres y cinco columnas y declara el tipo de cada una.',
        'Recoge veinte filas de datos reales, sin inventar ninguna.',
        'Escribe al pie qué vas a decidir con esos datos la próxima semana.'
      ],
      cuaderno: {
        titulo: 'Tu tabla de veinte filas',
        formato: 'la pregunta, el diseño de columnas con su tipo, cinco filas copiadas a mano y el uso previsto',
        extension: 'media página'
      },
      criterios: [
        'Las veinte filas son reales y ninguna queda incompleta.',
        'El uso previsto dice qué se decidirá la próxima semana.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.4.4.2',
      lente: 'lente del nosotros',
      cita: 'El otro se revela realmente como otro… como el pobre, el oprimido; el que a la vera del camino, fuera del sistema, muestra su rostro sufriente y sin embargo desafiante: «¡Tengo hambre!, ¡tengo derecho a comer!».',
      preguntaEspejo: 'Si mis veinte filas fueran sobre personas, ¿cómo cambiaría lo que estoy dispuesto a publicar?'
    },
    estoico: {
      autor: 'Séneca · Sobre la ira, II, 29 (c. 45 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'En cuanto a las que nos refieren, no debemos apresurarnos a creerlas. Muchos mienten para engañar, otros porque están engañados.',
      preguntaEspejo: '¿Qué cifra he repetido este mes sin saber quién la recogió ni con qué corte?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 4.5',
      lente: 'lente de la infoesfera',
      cita: 'Se suponía que acumular información y conocimiento llevaría a comprender mejor… pero esa expansión sin fin cada vez describe peor nuestra experiencia diaria. (trad. propia)',
      preguntaEspejo: 'De todo lo que registro de mí, ¿qué he vuelto a mirar alguna vez?'
    }
  },
  cincoDimensiones: {
    personal: 'Descubriste cuánto se recoge de ti y cuán poco de lo que registras vuelves a mirar.',
    emocional: 'Trabajar con cifras de desplazamiento incomoda, y esa incomodidad es la que impide tratarlas como decoración.',
    ciudadana: 'El registro es público y está en datos abiertos. Saber leerlo es poder discutir lo que se dice del municipio.',
    local: 'Alrededor de uno de cada quince cartagüeños figura en el registro de víctimas. No es una hipótesis sobre el salón.',
    intergeneracional: 'Un registro guarda lo que pasó para que alguien pueda reclamarlo después. Por eso la fecha de corte importa.'
  }
};

export default contenido;
