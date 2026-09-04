/**
 * Contenido enriquecido para Grado 8 · Período 1 · Sesión 3
 * (sesión global 3).
 *
 * Auto-generado desde content/guias/8/8-1-3.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 1,
  sesion: 3,
  titulo: 'Tablas de datos — campos, registros y limpieza con bitácora',
  resumen: 'Como el archivo de la parroquia: cada registro completo, único y con formato uniforme. Aprendes a estructurar tablas, identificar duplicados y datos faltantes, y documentar la limpieza con bitácora.',
  duracionMin: 90,
  subtema: 'Excel · Tablas · Limpieza con bitácora',
  preLectura: {
    porQueImporta: 'En cualquier trabajo profesional vas a heredar tablas mal armadas: nombres con mayúsculas raras, fechas en formatos distintos, registros duplicados. Saber limpiar con criterio (no a ciegas) es habilidad de oro en oficinas, ONGs, comercios y administración pública.',
    preguntaDetonante: '¿Qué del oficio del archivero parroquial — la disciplina de un libro con campos completos — podemos llevar a una hoja de Excel del colegio?',
    activacion: {
      titulo: 'El archivo desordenado',
      descripcion: 'En 5 minutos: imagina que recibes la lista de la cooperativa escolar con 100 registros mal ingresados. Antes de tocar nada, en parejas: ¿qué tres preguntas harías para no dañar la información mientras la limpias?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 2 aprendiste a aplicar tipo y formato a cada celda.',
      siguiente: 'En la sesión 4 usarás funciones SUMA, PROMEDIO, MAX, MIN sobre datos limpios.'
    }
  },
  conceptosClave: [
    {
      termino: 'Campo y registro',
      definicion: 'En una tabla, el campo es la columna (una característica medida) y el registro es la fila (un individuo o evento concreto).',
      ejemplo: 'En una tabla de estudiantes: las columnas Nombre, Edad, Grado son campos; cada fila con datos de un estudiante específico es un registro.',
      emoji: '🗂'
    },
    {
      termino: 'Espacio extra invisible',
      definicion: 'Caracteres en blanco al inicio o final de una celda que el ojo no nota pero rompen búsquedas, filtros y comparaciones.',
      ejemplo: '"María" y "María " (con espacio al final) son consideradas distintas por Excel. La función ESPACIOS los elimina automáticamente.',
      emoji: '👻'
    },
    {
      termino: 'Mayúsculas inconsistentes',
      definicion: 'Mismo dato escrito con capitalización distinta en celdas distintas. Excel los trata como entradas diferentes.',
      ejemplo: '"maría", "MARÍA", "María" se cuentan como 3 personas distintas en un filtro o conteo. NOMPROPIO unifica al estándar.',
      emoji: '🅰️'
    },
    {
      termino: 'Duplicados',
      definicion: 'Filas idénticas o casi idénticas que inflan los conteos. Datos → Quitar duplicados los detecta y elimina con confirmación.',
      ejemplo: 'Si registras 2 veces al mismo estudiante por error, los totales y promedios saldrán distorsionados. Eliminar duplicados los corrige.',
      emoji: '👯',
      categoria: 'Cómo se limpia'
    },
    {
      termino: 'Bitácora de limpieza',
      definicion: 'Documento donde se anota cada corrección hecha a la tabla con descripción, herramienta usada y razón. Permite reproducir el proceso.',
      ejemplo: 'Fila: "Espacios extra en columna Nombre" \\rightarrow "Aplicada función ESPACIOS" \\rightarrow "Para que el filtro funcione bien".',
      emoji: '📓'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes limpiar una tabla con disciplina?',
      instrucciones: '5 preguntas para verificar que reconoces errores comunes en tablas y sabes corregirlos con bitácora.',
      preguntas: [
        {
          enunciado: 'En una tabla, la fila con todos los datos de un estudiante (nombre, edad, grado) se llama...',
          opciones: [
            'Campo',
            'Cabecera',
            'Registro',
            'Celda'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Exacto. Registro = fila con un caso/evento completo. Campo = columna con una característica.',
          feedbackIncorrecto: 'La fila completa con los datos se llama registro. El campo es la columna (Nombre, Edad, Grado).'
        },
        {
          enunciado: 'Buscas \'María\' en la columna Nombre y solo aparece 1 vez, pero deberían ser 5 marías. ¿Qué problema probable hay?',
          opciones: [
            'Mayúsculas inconsistentes y espacios extra',
            'Excel no funciona bien',
            'Las filas están duplicadas',
            'El tipo de dato es incorrecto'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Si las otras marías están como "MARIA", "maría", "María " (con espacio), no aparecen en la búsqueda exacta.',
          feedbackIncorrecto: 'La causa más común es inconsistencia en mayúsculas y espacios. NOMPROPIO y ESPACIOS las unifican.'
        },
        {
          enunciado: '¿Para qué sirve la bitácora de limpieza?',
          opciones: [
            'Para hacer la tabla más bonita',
            'Para guardar las celdas borradas',
            'Solo es trámite escolar',
            'Para registrar paso a paso lo que se corrigió y por qué'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Sin bitácora, las decisiones de limpieza quedan invisibles y nadie puede reproducir tu trabajo.',
          feedbackIncorrecto: 'La bitácora documenta qué corregiste y por qué. Permite que otra persona reproduzca el proceso y verifique el criterio.'
        },
        {
          enunciado: '¿Cuál es el orden recomendado para limpiar?',
          opciones: [
            'Quitar duplicados → arreglar fechas → corregir mayúsculas → eliminar espacios',
            'Eliminar espacios → unificar mayúsculas → quitar duplicados → arreglar fechas',
            'Cualquier orden funciona igual',
            'Arreglar fechas → quitar duplicados → corregir mayúsculas → eliminar espacios'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Correcto. Espacios primero (afectan todo lo demás), después mayúsculas (sin uniformar no se detectan duplicados), después duplicados y finalmente fechas.',
          feedbackIncorrecto: 'El orden importa: espacios → mayúsculas → duplicados → fechas. Si lo haces al revés, harás trabajo doble.'
        },
        {
          enunciado: 'La regla profesional dice que una tabla limpia es...',
          opciones: [
            'La que se ve más bonita',
            'La que sirve para que las fórmulas y filtros funcionen sin engañar',
            'La que tiene menos filas',
            'La que ocupa menos espacio en disco'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Exacto. Una tabla limpia es la que sirve para análisis posterior. La apariencia es secundaria.',
          feedbackIncorrecto: 'La tabla limpia se mide por utilidad futura: que las fórmulas, filtros y gráficos funcionen sin distorsiones.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: 'Limpiar datos sin documentar es limpiar a ciegas. ¿En qué otros ámbitos de tu vida sería bueno llevar bitácora de cambios (proyectos, decisiones, hábitos)?',
    transferencia: 'Esta semana: revisa una hoja de cálculo cualquiera (gastos, contactos, calificaciones) y aplica los 4 pasos: encabezados claros, clave única, eliminación de duplicados verificada, bitácora de cambios.',
    cierre: 'El archivo de la parroquia y la hoja de Excel son lo mismo: memoria autorizada de una comunidad. Cuidarlo es trabajo de archivero, oficio noble.'
  },
  saberAncestral: {
    saber: 'En las cocinas tradicionales del Valle del Cauca, ningún plato bueno empezaba con el grano sucio. Las cocineras y las abuelas tenían un gesto previo que duraba a veces media hora y que muchos nietos consideraban innecesario: lavar y seleccionar el grano antes de cocinarlo. El frijol se extendía sobre una mesa, se buscaba la piedrita oculta, el grano picado, el palito que se coló en la cosecha. El café se escogía grano por grano: el verde fuera, el negro fuera, el grano perfecto al canasto que iría al tostador. El arroz se lavaba 3 veces para sacarle el almidón viejo. Si la cocinera saltaba el lavado, el plato salía con piedra entre los dientes, con sabor a moho, con grano duro. Los comensales no sabían qué había pasado, pero ya no volvían. La sabiduría de las cocinas era inquebrantable: lo que se cocina sucio sale sucio, por más fuego que se le ponga. Esa disciplina del lavado es exactamente la disciplina que el oficio digital pide cuando trabajamos con tablas de datos.',
    fuente: 'Archivo parroquial colombiano (siglos XVIII-XX)',
    preguntaPuente: '¿Qué sabía la cocinera al lavar el grano antes de cocinarlo, que el estudiante novato olvida cuando hace promedios sobre una tabla sucia? ¿Y por qué un analista profesional dedica más tiempo a limpiar la tabla que a calcular con ella?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Los datos sucios invisibilizan personas; los datos limpios las hacen contables, en el doble sentido: cuentan y se les puede contar.',
      preguntaEspejo: '¿Mi limpieza cuida que ninguna persona quede invisible o duplicada por error?'
    },
    estoico: {
      autor: 'Séneca',
      lente: 'lente del cuidado interior',
      cita: 'La paciencia del oficio no es lentitud: es respeto por lo que se hace.',
      preguntaEspejo: '¿Estoy limpiando con la paciencia que el oficio merece, o estoy corriendo para terminar?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'La calidad de la información es la ética del autor en la era digital.',
      preguntaEspejo: '¿Mi tabla limpia contribuye a la calidad informacional, o es solo trabajo escolar sin proyección profesional?'
    }
  },
  cincoDimensiones: {
    personal: 'Asumiste un rol que pocos ejercen: archivero/a de tu propia información. Disciplina que separa amateur de profesional.',
    emocional: 'Resististe la prisa de "borrar y ya" — entendiste que documentar es lentitud productiva, no burocracia inútil.',
    ciudadana: 'Aplicaste transparencia a tu propio trabajo. Esa práctica escala: a equipos, a instituciones, a la vida pública.',
    local: 'Heredaste el oficio del archivero parroquial colombiano —paciente, riguroso, fiel— y lo aplicaste en formato digital.',
    intergeneracional: 'Los registros parroquiales de hace 300 años permiten que hoy un colombiano rastree su árbol familiar. Tu disciplina hoy puede servir mañana de la misma forma.'
  }
};

export default contenido;
