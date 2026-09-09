/**
 * Contenido enriquecido para Grado 9 · Período 3 · Sesión 8
 * (sesión global 28).
 *
 * Auto-generado desde content/guias/9/9-3-8.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 9,
  periodo: 3,
  sesion: 8,
  titulo: 'Visualización honesta — gráficos que mienten',
  resumen: 'En la Feria de Cartago y en las Fiestas del Calado de Ansermanuevo uno se pone lo mejor que tiene, y la pregunta incómoda es si lo mejor que tiene es lo que hace o lo que compra. Un gráfico presenta igual. Hoy aprendes los cinco trucos con que un gráfico dice una verdad parcial, y el chequeo de diez segundos que los atrapa.',
  duracionMin: 90,
  subtema: 'Datos · Lectura crítica visual',
  preLectura: {
    porQueImporta: 'Un gráfico engañoso casi nunca miente con los números. Miente con la selección y con la presentación, y por eso cuesta tanto atraparlo.',
    preguntaDetonante: '¿Cuál fue el último gráfico que te hizo pensar algo, y le miraste el eje antes de creerlo?',
    activacion: {
      titulo: 'Diez segundos al eje',
      descripcion: 'En 2 minutos, busca un gráfico cualquiera y mira solo su eje vertical. ¿Arranca en cero? ¿Cambia algo si lo hiciera?',
      duracionMin: 3
    },
    conexion: {
      anterior: 'En la sesión 7 limpiaste un conjunto de datos con bitácora reproducible.',
      siguiente: 'En la sesión 9 conviertes tus datos en tres decisiones concretas.'
    }
  },
  conceptosClave: [
    {
      termino: 'Eje cortado',
      definicion: 'El eje vertical no arranca en cero, así que una diferencia pequeña ocupa media pantalla y parece enorme.',
      ejemplo: 'Si el eje empieza en 48, una subida de dos puntos se ve como si el valor se hubiera duplicado.',
      categoria: 'Los cinco trucos'
    },
    {
      termino: 'Rango elegido',
      definicion: 'Mostrar solo el periodo que conviene. Es el truco más común y el que menos se revisa.',
      ejemplo: 'Una serie que cae desde 2019 se ve creciendo si solo se grafican los últimos seis meses.',
      categoria: 'Los cinco trucos'
    },
    {
      termino: 'Contexto omitido',
      definicion: 'Falta la cifra con la que habría que comparar para saber si el número mostrado es mucho o poco.',
      ejemplo: '«Mil casos» no dice nada sin saber si el año pasado fueron cien o diez mil.',
      categoria: 'Los cinco trucos'
    },
    {
      termino: 'El chequeo de diez segundos',
      definicion: 'Mirar el eje vertical, el rango de fechas, cuántas categorías se ven y qué cifra falta.',
      ejemplo: 'Si el chequeo no cabe en diez segundos, en la práctica nadie va a hacerlo.',
      categoria: 'Cómo se audita'
    },
    {
      termino: 'Verdad parcial',
      definicion: 'Lo que dice casi todo gráfico engañoso: los números son reales, pero la selección y la presentación empujan a una conclusión falsa.',
      ejemplo: 'Por eso no basta con pedir «datos reales»: los datos suelen serlo.',
      categoria: 'Cómo se audita'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Le miras el eje a los gráficos?',
      instrucciones: 'Cinco preguntas sobre los cinco trucos y el chequeo de diez segundos. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Un gráfico de barras arranca su eje vertical en 48 en vez de en cero. ¿Qué produce?',
          opciones: [
            'Que las barras se vean más ordenadas y fáciles de comparar entre sí.',
            'Que una diferencia pequeña parezca enorme.',
            'Que el gráfico ocupe menos espacio en la página impresa.',
            'Que los valores negativos queden fuera de la representación.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Es el truco del eje cortado, y basta mirar el eje para atraparlo.',
          feedbackIncorrecto: 'Hace que una diferencia pequeña ocupe media pantalla y parezca enorme.'
        },
        {
          enunciado: '¿Por qué se dice que un gráfico engañoso «dice una verdad parcial»?',
          opciones: [
            'Porque suele mezclar datos verdaderos con datos inventados.',
            'Porque los números suelen ser reales y el truco está en la selección.',
            'Porque solo una parte del público lo interpreta correctamente.',
            'Porque los autores suelen desconocer las reglas de visualización.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Por eso no sirve pedir «datos reales»: los datos suelen serlo.',
          feedbackIncorrecto: 'Porque los números son reales y quien engaña es la selección y la presentación.'
        },
        {
          enunciado: '¿Cuál es el truco más común y el que menos se revisa?',
          opciones: [
            'El rango de fechas elegido para la serie.',
            'La escala logarítmica en el eje vertical.',
            'El uso de colores muy saturados en las barras.',
            'La ausencia de título descriptivo en el gráfico.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Eso es. Una serie que cae desde 2019 se ve creciendo si solo se muestran seis meses.',
          feedbackIncorrecto: 'El rango de fechas. Es el segundo paso del chequeo y casi nadie lo hace.'
        },
        {
          enunciado: 'Tu versión honesta de un gráfico usa datos distintos a los del original. ¿Qué pasa?',
          opciones: [
            'Nada, siempre que los datos nuevos sean más recientes.',
            'Mejora, porque permite comparar dos fuentes distintas.',
            'No demuestra nada, porque el punto era el mismo dato bien presentado.',
            'Es correcto si el original no citaba su propia fuente.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Lo que cambias es el eje, el rango, las categorías o el contexto, no las cifras.',
          feedbackIncorrecto: 'No demuestra nada. La versión honesta usa los mismos datos y cambia la presentación.'
        },
        {
          enunciado: '¿Qué diferencia hay entre un gráfico feo y uno engañoso?',
          opciones: [
            '',
            'El feo se puede corregir y el engañoso hay que descartarlo.',
            'El engañoso siempre viene de fuentes publicitarias.',
            'Uno mal hecho puede ser perfectamente honesto.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Correcto. La honestidad no depende de que se vea bonito, sino de qué muestra y qué omite.',
          feedbackIncorrecto: 'Que un gráfico feo puede ser honesto. Son dos cosas distintas y conviene no confundirlas.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'De tus tres versiones honestas, ¿en cuál el cambio fue más pequeño y aun así cambió la conclusión?',
    transferencia: 'Hazle el chequeo de diez segundos a los gráficos que veas esta semana. Anota cuántos no lo pasan.',
    cierre: 'Un gráfico engañoso no miente con los números. Dice una verdad parcial y cuenta con que nadie mire el eje.'
  },
  saberAncestral: {
    saber: 'Cada agosto Cartago celebra su aniversario, con misa en la catedral, ofrenda floral y sesión solemne del Concejo (Alcaldía de Cartago, 2021). Un detalle que casi nadie menciona: la fundación de 1540 ocurrió donde hoy está Pereira. A pocos kilómetros, Ansermanuevo celebra a mediados del mismo mes sus Fiestas del Calado y el Bordado. Se llama a sí misma cuna del calado y el bordado. Dos pueblos vecinos, dos ferias en el mismo mes, y en ambas la misma escena: en la feria uno se pone lo mejor que tiene. La pregunta incómoda viene después. ¿Lo mejor que tiene es lo que hace o lo que compra? No se trata de juzgar a nadie por cómo se presenta. Se trata de notar que presentarse es una decisión, y que la presentación puede coincidir con lo que hay detrás o puede taparlo. Un gráfico hace exactamente eso: presenta.',
    fuente: 'Feria de Cartago y Fiestas del Calado de Ansermanuevo · lo que se muestra y lo que se hace',
    referencia: 'Alcaldía de Cartago. (2021, 9 de agosto). Cartago celebra 481 años de fundación. Municipio de Cartago Valle.',
    preguntaPuente: 'En la feria uno se pone lo mejor que tiene, y eso no engaña a nadie porque todos saben que es una feria. ¿Cuándo un gráfico deja de presentarse y empieza a engañar?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'Lo mejor que uno tiene',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '👁'
      ],
      titulo: 'Actividad 1 · Mira sin sospechar',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎'
      ],
      titulo: 'Actividad 2 · Los cinco trucos',
      duracionMin: 20
    },
    {
      numero: 4,
      iconos: [
        '✅'
      ],
      titulo: 'Actividad 3 · Auditoría de tres gráficos',
      duracionMin: 30
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres citas y tu compromiso',
      duracionMin: 15
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Mira sin sospechar',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira los tres gráficos que proyecta tu docente, sin saber si tienen algo raro.',
        'Escribe qué pregunta parece responder cada uno.',
        'Escribe qué conclusión sacaste en los primeros diez segundos.',
        'Míralos otra vez con calma y anota si cambiarías esa conclusión.',
        'Marca en cuál cambió más entre la primera y la segunda mirada.'
      ],
      cuaderno: {
        titulo: 'Mira sin sospechar',
        formato: 'tabla de 3 filas y 3 columnas (gráfico / conclusión a los diez segundos / conclusión con calma)',
        extension: 'un tercio de página'
      },
      criterios: [
        'Las tres filas tienen las dos conclusiones escritas.',
        'Está marcado el gráfico donde más cambió.'
      ]
    },
    {
      numero: 2,
      verbo: 'ANALIZA',
      titulo: 'Los cinco trucos',
      tiempoMin: 20,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, escriban los cinco trucos con una frase propia cada uno.',
        'Vuelvan a los tres gráficos y busquen cuál truco usa cada uno.',
        'Apliquen el chequeo de diez segundos y anoten qué encontró cada paso.',
        'Escriban qué decisión cambiaría si alguien creyera el gráfico tal como está.'
      ],
      cuaderno: {
        titulo: 'Los cinco trucos',
        formato: 'los cinco trucos con frase propia, el truco de cada gráfico y los cuatro pasos del chequeo',
        extension: 'media página'
      },
      criterios: [
        'Cada truco identificado señala un elemento visible del gráfico.',
        'Los cuatro pasos del chequeo tienen anotado qué encontraron.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Auditoría de tres gráficos',
      tiempoMin: 30,
      modalidad: 'individual',
      pasos: [
        'Busca tres gráficos reales en prensa, redes, publicidad o un libro, y guarda captura y fuente.',
        'Nombra el truco de cada uno usando la lista de cinco.',
        'Explica el truco señalando qué se ve en la imagen, con números.',
        'Escribe qué decisión cambiaría si alguien lo creyera.',
        'Rehaz cada gráfico de forma honesta con los mismos datos y ponlos lado a lado.'
      ],
      cuaderno: {
        titulo: 'Auditoría de tres gráficos',
        formato: 'los tres con fuente, truco, prueba señalada, consecuencia y el boceto de la versión honesta',
        extension: 'una página'
      },
      criterios: [
        'Cada truco está probado con un número tomado de la imagen.',
        'Las versiones honestas usan los mismos datos del original.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §4.2.9.3',
      lente: 'lente del nosotros',
      cita: 'El arte popular es el arte primero, la suprema expresión de la estética. Se da en la vida cotidiana, en la música, la danza, la pintura, en el teatro… Es necesario formular una estética popular más allá de la publicidad y la moda.',
      preguntaEspejo: '¿Cuándo he elegido un gráfico porque se veía impresionante y no porque mostrara mejor el dato?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones X, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'De hoy más, déjate absolutamente de disputar cuál conviene que sea un hombre bueno, sino procura ser tal en realidad.',
      preguntaEspejo: '¿Qué elemento de mi último gráfico no resistiría el chequeo de diez segundos?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), § 2.3',
      lente: 'lente de la infoesfera',
      cita: 'La abundancia de información también puede producir sobrecarga cognitiva, distracción y amnesia (el presente olvidadizo). (trad. propia)',
      preguntaEspejo: '¿Cuántos gráficos vi esta semana, y a cuántos les miré el eje?'
    }
  },
  cincoDimensiones: {
    personal: 'Ya no vas a poder mirar un gráfico sin buscarle el eje, y eso cambia lo que crees.',
    emocional: 'Descubrir que un gráfico te convenció en diez segundos molesta. Es la molestia que enseña a mirar.',
    ciudadana: 'Un gráfico torcido en una noticia cambia lo que un municipio entero cree sobre un problema.',
    local: 'En la feria uno se pone lo mejor que tiene. Presentarse no es engañar; taparlo todo con la presentación, sí.',
    intergeneracional: 'Quien aprende a auditar un gráfico a los quince no vuelve a creerse uno sin mirarlo.'
  }
};

export default contenido;
