/**
 * Contenido web del proyecto integrador · Grado 9 · Período 2
 *
 * Auto-generado desde content/proyectos/9-2.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 9,
  periodo: 2,
  clave: '9-2',
  titulo: 'Proyecto integrador · Revista escolar maquetada con criterio editorial',
  tituloPortada: 'Revista escolar maquetada con criterio editorial',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Diseña, redacta, ilustra y maqueta una revista escolar completa con cuadrícula coherente, tipografía consistente, accesibilidad WCAG AA y voz editorial propia, asumiendo el rol de equipo editorial responsable.',
  estrategia: 'Diseño editorial + Maquetación digital + Edición y corrección',
  duracionSemanas: 5,
  modalidad: 'equipo',
  reto: 'Diseña y maqueta una revista escolar de 8-12 páginas (digital, imprimible o ambas) sobre un tema con sentido para tu comunidad. Aplica cuadrícula coherente, jerarquía tipográfica clara, contraste WCAG AA verificado, imagen y texto en diálogo, y firma como equipo editorial responsable. La revista debe poder leerse en celular sin ajustes incómodos y poder imprimirse sin perder accesibilidad.',
  insumos: [
    'Figma, Canva o Adobe Express gratuitos para maquetar',
    'Validador de contraste WCAG (webaim.org/resources/contrastchecker)',
    '3 revistas referentes (digitales o físicas) elegidas por el equipo',
    'Acceso a IA generativa para asistir en redacción e imágenes (no para suplantar)',
    'Plantilla de cuadrícula de 3 columnas (la entrega el docente)',
    'Plataforma para publicar: Issuu, Calaméo, GitHub Pages, o impresión digital local'
  ],
  anclaje: 'Hasta finales del siglo XX, en una calle del centro de Cartago había una tipografía artesanal: un taller con olor a tinta donde tres hombres mayores trabajaban con tipos móviles de plomo. El tipógrafo componía las páginas letra por letra, eligiendo cada carácter de un casillero, ajustando los espacios con láminas finas de bronce, decidiendo dónde caía cada palabra para que la página quedara con ritmo de lectura. No usaba reglas escritas: tenía la regla en el cuerpo. Sabía que una columna ancha cansa al ojo, que un título debe respirar, que el espacio en blanco no es desperdicio sino aire que el lector necesita. Cuando aparecieron los computadores, todo eso se llamó diseño editorial, pero los principios eran los mismos: jerarquía, ritmo, accesibilidad, intención. La regla en el cuerpo sigue siendo la misma.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: '¿Qué es diseñar? Orden, jerarquía, intención'
    },
    {
      sesion: 2,
      titulo: 'Página y cuadrícula: primer principio del orden'
    },
    {
      sesion: 3,
      titulo: 'Tipografía: la voz visible de las palabras'
    },
    {
      sesion: 4,
      titulo: 'Color editorial: contraste, jerarquía, accesibilidad'
    },
    {
      sesion: 5,
      titulo: 'Imagen y texto: ritmo de la lectura'
    },
    {
      sesion: 6,
      titulo: 'Herramientas digitales: Figma, Canva, Adobe Express'
    },
    {
      sesion: 7,
      titulo: 'Accesibilidad lectora: WCAG, contraste AA, tamaños'
    },
    {
      sesion: 8,
      titulo: 'Edición y corrección: el ojo crítico'
    },
    {
      sesion: 9,
      titulo: 'Maquetar la revista completa: flujo de trabajo'
    },
    {
      sesion: 10,
      titulo: 'Sustentación pública de la revista'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Concepto editorial + sistema de cuadrícula y tipografía',
      queEntregas: 'Documento de 2-3 páginas con: tema de la revista con foco, audiencia objetivo definida, plan de contenidos por sección (al menos 4 secciones), cuadrícula elegida (2-4 columnas según contenido) con plantilla guardada en Figma/Canva, jerarquía tipográfica completa (titular, subtítulo, cuerpo, pie de foto) con relaciones numéricas (ej. titular 48pt / subtítulo 24pt / cuerpo 11pt).',
      comoSeHace: [
        'Definir tema con foco y audiencia objetivo (no genéricos)',
        'Analizar 3 revistas referentes y extraer principios visuales',
        'Decidir cuadrícula con justificación (¿por qué 3 columnas y no 2?)',
        'Elegir tipografía con jerarquía clara y relaciones numéricas',
        'Guardar plantilla en Figma/Canva como sistema reutilizable'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién diseñamos esta revista y a quién no',
        consigna: 'En el documento de concepto, agrega una sección titulada "A quién diseñamos esta revista y a quién no". Reconoce honestamente qué tipo de lector queda fuera por tus decisiones editoriales (por idioma del cuerpo, por nivel de español académico, por tamaños de letra muy pequeños, por imágenes sin alt text). Explica si esa exclusión es deliberada o ausencia involuntaria. Esa sección queda en el documento de concepto que circula al equipo y al docente. La lente del nosotros pregunta por los lectores ausentes desde el primer borrador.'
      },
      criterios: [
        'Tema con foco y audiencia definida',
        'Plan de contenidos con 4+ secciones',
        'Cuadrícula justificada (no arbitraria)',
        'Jerarquía tipográfica con relaciones numéricas',
        'Sección Dussel publicada en el documento'
      ]
    },
    {
      numero: 2,
      titulo: 'Revista maquetada de 8-12 páginas con accesibilidad WCAG AA',
      queEntregas: 'Revista completa de 8-12 páginas en formato PDF + versión Figma/Canva editable. Debe cumplir: cuadrícula coherente entre páginas, tipografía consistente, contraste WCAG AA verificado en validador (screenshot del check) para todos los textos, jerarquía visual clara, espacios respirables, numeración automática de páginas. Mínimo 3 secciones distintas (editorial, reportaje, entrevista, infografía, etc.).',
      comoSeHace: [
        'Aplicar la plantilla del entregable 1 a cada página',
        'Mantener consistencia: misma cuadrícula, misma tipografía',
        'Verificar contraste de todos los textos en validador WCAG',
        'Insertar numeración automática y tabla de contenidos',
        'Exportar a PDF y revisar en celular real (no solo en pantalla grande)'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que decidimos quitar para que se lea mejor',
        consigna: 'En el editorial o en la última página de la revista, agrega una sección titulada "Lo que decidimos quitar para que se lea mejor". Declara qué elementos quisieron incluir y decidieron quitar a propósito: una imagen vistosa que rompía el ritmo, un titular muy largo que no respiraba, un fondo de color que dificultaba la lectura, un efecto decorativo que distraía. Esa sección queda dentro de la revista publicada, no como anexo escolar. El estoico entiende que el diseño disciplinado quita más de lo que añade.'
      },
      criterios: [
        '8-12 páginas terminadas en PDF',
        'Cuadrícula coherente entre páginas',
        'Tipografía consistente con sistema definido',
        'Contraste WCAG AA verificado en validador (screenshot)',
        'Sección estoica publicada dentro de la revista'
      ]
    },
    {
      numero: 3,
      titulo: 'Edición, corrección y auditoría de accesibilidad cruzada',
      queEntregas: 'Reporte de 1-2 páginas con: revisión cruzada por otro equipo (auditoría editorial mutua), errores ortográficos detectados y corregidos (mínimo 5), errores tipográficos detectados y corregidos (espaciado, viudas, huérfanas), auditoría de accesibilidad (¿hay alt text en imágenes?, ¿el flujo de lectura funciona en lectores de pantalla?, ¿las imágenes solas comunican o exigen texto?). Cambios documentados con foto antes/después.',
      comoSeHace: [
        'Intercambiar PDFs con otro equipo del salón para auditoría mutua',
        'Aplicar revisión ortográfica + tipográfica + accesibilidad',
        'Documentar 5+ errores corregidos con antes/después',
        'Probar la revista con un lector de pantalla (NVDA gratuito o VoiceOver)',
        'Listar mejoras hechas tras la auditoría'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Nuestra revista en la cadena informacional',
        consigna: 'En el reporte de auditoría, agrega una sección titulada "Nuestra revista en la cadena informacional". Reflexiona: ¿qué información agrega tu revista a la conversación pública del barrio o el colegio?, ¿enriquece la cadena informacional con contenido honesto y accesible o solo agrega ruido?, ¿qué responsabilidad asumes por lo que publicas y por quien queda sin poder leerlo? Esa sección queda en el reporte de auditoría entregado al docente y, si la revista tiene editorial, también referenciada allí. La ética de Floridi va más allá de la corrección formal: pregunta por el aporte real.'
      },
      criterios: [
        'Auditoría cruzada con otro equipo documentada',
        '5+ errores ortográficos/tipográficos corregidos',
        'Auditoría de accesibilidad con lector de pantalla',
        'Antes/después documentados con captura',
        'Reflexión Floridi publicada en el reporte'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación pública + revista publicada + carta editorial',
      queEntregas: 'Sustentación oral de 5 minutos presentando la revista en feria escolar o acto público, con 2 invitados externos (familia, exalumnos, profesionales del diseño, comunicador local). + Revista publicada en Issuu/Calaméo/GitHub Pages con URL pública + ejemplares impresos (mínimo 3) para repartir al cierre. + Carta editorial firmada del equipo con compromisos del triángulo para futuras ediciones.',
      comoSeHace: [
        'Preparar guion de sustentación con estructura clara',
        'Confirmar 2 invitados externos para el acto',
        'Publicar la revista en plataforma pública y obtener URL',
        'Imprimir mínimo 3 ejemplares (en imprenta local o impresora del colegio)',
        'Escribir carta editorial firmada con compromisos verificables del triángulo'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Compromisos del equipo editorial',
        consigna: 'En la carta editorial firmada, dedica un párrafo a cada lente del triángulo como compromisos verificables, no retóricos. Por Dussel: a qué lector que dejamos fuera de esta edición nos comprometemos a integrar en la v2 (traducción a otro idioma, versión accesible, tema que no abordamos). Por el estoico: qué disciplina editorial sostendremos en las próximas ediciones (no inflar páginas, no abusar de efectos, sostener la cuadrícula). Por Floridi: qué información honesta seguiremos publicando sobre el proceso editorial (erratas que corrijamos, ediciones revisadas). Cada uno con decisión concreta y fechada.'
      },
      criterios: [
        'Sustentación de 5 min exactos cronometrados',
        'Revista publicada con URL pública funcional',
        'Mínimo 3 ejemplares impresos repartidos',
        '2+ invitados externos asistieron al acto',
        'Carta editorial con compromisos verificables del triángulo'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'Concepto con foco, cuadrícula justificada, jerarquía numérica, Dussel visible',
      nivel3: 'Concepto genérico o cuadrícula sin justificar, jerarquía vaga',
      nivel1: 'Sin foco editorial o sin sistema de cuadrícula'
    },
    {
      entregable: 2,
      nivel5: '8-12 páginas con cuadrícula coherente, contraste WCAG AA verificado, estoico visible',
      nivel3: 'Revista con páginas pero cuadrícula inconsistente o sin verificación de contraste',
      nivel1: 'Revista sin terminar o sin accesibilidad mínima'
    },
    {
      entregable: 3,
      nivel5: 'Auditoría cruzada, 5+ correcciones documentadas, accesibilidad probada, Floridi visible',
      nivel3: 'Auditoría parcial o correcciones sin antes/después',
      nivel1: 'Sin auditoría cruzada o sin pruebas de accesibilidad'
    },
    {
      entregable: 4,
      nivel5: '5 min exactos, URL + 3 impresos, 2+ invitados, compromisos triángulo verificables',
      nivel3: 'Sustentación con falla en tiempo o sin invitados externos',
      nivel1: 'No sustentó o sin URL pública'
    },
    {
      entregable: 'global',
      nivel5: 'La revista tiene voz propia identificable, decisiones editoriales coherentes, accesibilidad sostenida',
      nivel3: 'Voz propia parcial, decisiones editoriales en algunas secciones solamente',
      nivel1: 'La revista suena a plantilla sin firma editorial visible',
      titulo: 'Voz editorial propia: la revista suena al equipo, no a plantilla'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '30 seg · Tema y audiencia: por qué esta revista y para quién',
      '1 min · Decisiones editoriales clave (cuadrícula, tipografía, color)',
      '1 min · Mostrar 2 secciones representativas leyendo titulares y bajadas',
      '1 min · Accesibilidad: WCAG AA verificado, auditoría cruzada, lector de pantalla',
      '1 min · Compromisos del triángulo para la v2 + URL pública + impreso en mano'
    ]
  },
  declaracionIa: 'Tu carta editorial debe declarar honestamente: (1) dónde usaron IA (asistencia en redacción, ilustración, sugerencia de palabras clave). (2) dónde decidieron NO usar IA y por qué (la voz editorial del equipo, la corrección final, la curaduría de contenidos). (3) cómo verificaron que la revista tenga voz propia y no suene a plantilla. (4) las 3 lentes del triángulo como compromisos verificables.',
  cierre: 'Cierras el periodo 2 con tu primera revista publicada y un equipo editorial firmando con responsabilidad. El periodo 3 (Datos y hojas de cálculo) te pedirá la misma disciplina del orden y la jerarquía aplicada ahora a tablas, fórmulas y gráficos honestos. El tipógrafo del centro se va contigo a Excel.',
  pdf: 'proyecto-2-9-TIC.pdf'
};

export default contenido;
