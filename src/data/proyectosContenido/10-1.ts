/**
 * Contenido web del proyecto integrador · Grado 10 · Período 1
 *
 * Auto-generado desde content/proyectos/10-1.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 10,
  periodo: 1,
  clave: '10-1',
  titulo: 'Proyecto integrador · Libro de 80 páginas con IA y firma editorial',
  tituloPortada: 'Libro editorial con IA y firma propia',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Concibe, escribe con asistencia de IA, itera, diagrama y publica un libro de al menos 80 páginas, asumiendo el rol de editor responsable con intervención humana sustancial y declaración honesta del uso de IA.',
  estrategia: 'Oficio editorial + Prompting profesional + Iteración V1→V2→V3',
  duracionSemanas: 6,
  modalidad: 'equipo',
  reto: 'Concebir, escribir e ilustrar un libro publicable de al menos 80 páginas sobre un tema de tu elección, con IA como escritor asistente y con mínimo 30~% del texto editado a mano (V3 con voz propia). Al cerrar el periodo entregas el PDF compilado + tu firma de editor responsable + la declaración honesta de cómo se hizo.',
  insumos: [
    'Acceso a IA generativa: Claude, Gemini o ChatGPT',
    'Plantilla de prompt profesional 5 partes (rol+contexto+tarea+formato+restricciones)',
    'Bing Image Creator, Leonardo.ai o Microsoft Designer para portada',
    'Google Docs o LibreOffice para diagramación',
    'Plantilla de carta del editor (la entrega el docente)',
    'Acceso a Issuu, Calaméo o GitHub Pages para publicar el libro final'
  ],
  anclaje: 'En cada barrio del centro de Cartago hubo durante décadas un personaje silencioso que cualquier vecino mayor recuerda: el editor de la gaceta barrial, don Hernando Castaño. La gaceta era un cuadernillo a mimeógrafo con noticias del barrio. Don Hernando no escribía todas las notas: las recibía, las elegía, las corregía, decidía cuál entra al lado de cuál. Cuando salía la gaceta, su nombre aparecía abajo: "Editor: don Hernando Castaño." Esa firma no significaba "yo escribí esto"; significaba "yo respondo por esta pieza". Esa distinción entre escribir y editar es la base de tu rol con IA: el modelo escribe primeros borradores, tú decides qué entra, ordenas, refinas y firmas como responsable.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: 'El oficio del editor: qué hace y qué no hace'
    },
    {
      sesion: 2,
      titulo: 'Concebir el libro: género, tema, audiencia, escaleta'
    },
    {
      sesion: 3,
      titulo: 'Prompting profesional: las 5 partes del prompt'
    },
    {
      sesion: 4,
      titulo: 'Iteración V1→V2→V3 con intervención humana mínima 30%'
    },
    {
      sesion: 5,
      titulo: 'Estructura editorial: arco de 3 actos, capítulos pivote'
    },
    {
      sesion: 6,
      titulo: 'Derechos de autor con IA: Ley 23 de 1982, Creative Commons'
    },
    {
      sesion: 7,
      titulo: 'Portada con IA generativa: prompt visual, descriptores'
    },
    {
      sesion: 8,
      titulo: 'Diagramación: Canva, Google Docs, LibreOffice'
    },
    {
      sesion: 9,
      titulo: 'Producción final: PDF 80 páginas + carta del editor'
    },
    {
      sesion: 10,
      titulo: 'Sustentación pública del libro y feria editorial'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Concepto editorial + escaleta de 8-12 capítulos',
      queEntregas: 'Documento de 2-3 páginas con: tema y audiencia objetivo definidos (no genéricos), género específico, "por qué importa este libro" en 1 párrafo, escaleta detallada de 8-12 capítulos con título de cada uno y peso aproximado en páginas. + 3 prompts profesionales modelo (estructura 5 partes) que vas a usar para los primeros 3 capítulos.',
      comoSeHace: [
        'Definir tema con foco (no \'... sobre la música\' sino \'... sobre la salsa del Valle 1970-1990\')',
        'Definir audiencia objetivo (edad, contexto, nivel de conocimiento previo)',
        'Decidir género: novela, ensayo, manual, divulgación, memoir, etc.',
        'Diseñar escaleta con peso por capítulo (no todos iguales)',
        'Redactar 3 prompts profesionales completos con las 5 partes obligatorias'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Para quién no escribo este libro',
        consigna: 'Al final del documento de concepto, agrega un párrafo titulado "Para quién no escribo este libro". Reconoce honestamente qué audiencias quedan fuera de tu propuesta (por nivel de español, por contexto cultural ajeno al Valle, por costo del libro, por edad). Explica si esa exclusión es deliberada (porque el libro es para un público específico) o es ausencia involuntaria que deberías considerar. Ese párrafo queda en el documento de concepto entregado al docente y, si el libro tiene página web, también en la sección "Sobre este libro" del sitio.'
      },
      criterios: [
        'Tema con foco específico (no genérico)',
        'Audiencia definida con edad, contexto y nivel previo',
        'Escaleta de 8-12 capítulos con peso variable por capítulo',
        '3 prompts profesionales completos con las 5 partes',
        'Párrafo Dussel publicado en el documento'
      ]
    },
    {
      numero: 2,
      titulo: 'Libro PDF compilado de mínimo 80 páginas',
      queEntregas: 'PDF compilado con: portada generada con IA + página de créditos con declaración de IA + tabla de contenidos + 8-12 capítulos diagramados + sustentación del editor (1 página). El libro debe tener al menos 30~% de texto editado a mano sobre el borrador inicial de IA (V3 con voz propia). Acompañado de la bitácora de iteraciones de al menos 3 capítulos mostrando V1→V2→V3.',
      comoSeHace: [
        'Generar V1 de cada capítulo con prompt profesional',
        'V2: pedir a la IA mejorar puntos específicos (apertura, clichés, tono)',
        'V3: reescribir a mano al menos el 30% incluyendo voz propia y datos verificables',
        'Diseñar portada con Bing Image Creator/Leonardo (descriptores visuales, no narrativa)',
        'Diagramar en Google Docs con estilos consistentes y exportar a PDF'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que me comprometo a sostener como editor',
        consigna: 'En la página final del libro, antes de la contraportada, agrega una sección titulada "Lo que me comprometo a sostener como editor". Declara la disciplina personal que asumes con esta firma: revisar antes de publicar, no mentir sobre el uso de IA, corregir errores cuando lectores los señalen, sostener la voz propia aunque la IA proponga clichés cómodos. Esa página queda dentro del libro, no es anexo escolar: si el libro circula, esa página circula con él. El estoico entiende que firmar es comprometerse.'
      },
      criterios: [
        'PDF con mínimo 80 páginas terminadas',
        '8-12 capítulos diagramados con coherencia visual',
        '30%+ de texto editado a mano sobre V1 de IA (bitácora demuestra)',
        'Portada generada con IA con descriptores visuales documentados',
        'Página estoica publicada dentro del libro'
      ]
    },
    {
      numero: 3,
      titulo: 'Carta del editor + declaración honesta de IA + derechos de autor',
      queEntregas: 'Página de créditos del libro (que va dentro del PDF) + carta del editor firmada de 1 página (separada, entregada al docente). La carta declara: modelos de IA usados, porcentajes generados vs editados a mano, decisión de licencia (Creative Commons CC-BY-NC u otra), respeto a derechos de imagen si hay fotos/ilustraciones, y dónde se publica el libro (Issuu, Calaméo, GitHub Pages, etc.).',
      comoSeHace: [
        'Listar todos los modelos de IA usados y para qué tareas',
        'Calcular porcentaje aproximado: cuántas líneas de IA quedaron sin editar vs cuántas se editaron',
        'Elegir licencia con justificación: ¿Por qué CC-BY-NC y no todos los derechos reservados?',
        'Verificar derechos de imágenes y citas (Ley 23 de 1982)',
        'Publicar el libro en plataforma pública y obtener URL'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Mi libro como información en la conversación común',
        consigna: 'En la carta del editor, agrega una sección titulada "Mi libro como información en la conversación común". Reflexiona: ¿qué información agrega tu libro a la cadena informacional del mundo?, ¿enriquece la infoesfera con un aporte honesto o solo agrega contenido generado por IA disfrazado de autoría humana?, ¿qué responsabilidad ética asumes por lo que publicas? Esa reflexión va en la carta firmada al docente y, opcionalmente, en la sección "Sobre este libro" de la URL pública. La ética de Floridi va más allá del cumplimiento legal: pregunta por el aporte real.'
      },
      criterios: [
        'Página de créditos completa dentro del PDF con declaración de IA',
        'Carta del editor firmada con porcentajes verificables',
        'Licencia elegida y justificada (no por defecto)',
        'Derechos de imágenes y citas verificados (Ley 23 de 1982)',
        'URL pública del libro funcional'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación + feria del libro + lectura pública de fragmento',
      queEntregas: 'Sustentación oral de 5 minutos en feria del libro escolar + lectura pública en voz alta de fragmento del propio libro (mínimo 1 minuto) + carta del editor firmada de cierre con compromisos del triángulo. La feria debe convocar al menos a 2 invitados externos (familia, exalumnos, lectores).',
      comoSeHace: [
        'Preparar guion de sustentación con estructura clara (ver guion sugerido)',
        'Elegir fragmento del libro que muestra voz propia (no borrador de IA)',
        'Ensayar lectura en voz alta al menos 2 veces',
        'Identificar 2+ invitados externos a la feria',
        'Escribir la carta de cierre con compromisos verificables del triángulo'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Compromisos del editor con sus lectores',
        consigna: 'En la carta de cierre del editor, dedica un párrafo a cada lente del triángulo como compromisos verificables, no retóricos. Por Dussel: a qué audiencia me comprometo a integrar en una v2 del libro o a través de un texto complementario gratuito. Por el estoico: qué disciplina sostendré con este libro durante los próximos 12 meses (responder lectores, mejorar erratas, no inflar autoría). Por Floridi: qué información honesta seguiré publicando sobre el proceso de hacer este libro (errores, cambios, decisiones). Cada uno con una decisión concreta, no retórica.'
      },
      criterios: [
        'Sustentación de 5 min exactos cronometrados',
        'Lectura en voz alta de fragmento del propio libro (1+ min)',
        '2+ invitados externos asistieron a la feria',
        'Carta de cierre con compromisos concretos del triángulo',
        'Demo: muestra el PDF + la URL pública del libro'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'Concepto con foco, escaleta detallada, 3 prompts profesionales, Dussel visible',
      nivel3: 'Concepto genérico o escaleta superficial, prompts incompletos',
      nivel1: 'Sin foco editorial o sin escaleta'
    },
    {
      entregable: 2,
      nivel5: '80+ páginas, 30%+ editado a mano demostrable, página estoica dentro del libro',
      nivel3: 'Libro con menos páginas o sin bitácora de V3, estoico genérico',
      nivel1: 'Sin libro terminado o sin intervención humana visible'
    },
    {
      entregable: 3,
      nivel5: 'Carta del editor completa, licencia justificada, Floridi explícito, URL pública',
      nivel3: 'Carta incompleta o licencia por defecto',
      nivel1: 'Sin carta del editor o sin URL pública'
    },
    {
      entregable: 4,
      nivel5: 'Sustentación 5 min, lectura del propio libro, 2+ invitados, compromisos triángulo',
      nivel3: 'Sustentación con tiempo descontrolado o sin invitados externos',
      nivel1: 'No sustentó o leyó borrador en lugar del libro final'
    },
    {
      entregable: 'global',
      nivel5: 'El libro tiene voz propia identificable, decisiones editoriales claras, autoría firmada honestamente',
      nivel3: 'Voz propia parcial, decisiones editoriales en algunos capítulos solamente',
      nivel1: 'El libro suena a IA sin firma editorial humana visible',
      titulo: 'Voz editorial propia: el libro suena al editor, no a chatbot'
    }
  ],
  sustentacion: {
    duracionMin: 5,
    guionSugerido: [
      '1 min · Concepto del libro: tema, audiencia, por qué importa',
      '1 min · Decisiones editoriales clave (qué entró, qué quedó fuera, por qué)',
      '1 min · Lectura en voz alta de fragmento del propio libro',
      '1 min · Declaración de IA: porcentajes, modelos, decisión sin IA',
      '1 min · Compromisos del triángulo y URL pública del libro'
    ]
  },
  declaracionIa: 'La carta del editor firmada debe declarar honestamente: (1) modelos de IA usados y para qué (idea, borradores, edición, portada). (2) porcentaje de texto generado con IA vs editado a mano (V3). (3) decisión editorial crítica que tomaste sin IA y por qué (ej. "decidí escribir el capítulo 3 a mano porque la IA no entendía el modismo del Valle"). (4) licencia elegida con justificación. (5) los 3 compromisos del triángulo como decisiones verificables.',
  cierre: 'Cierras el periodo 1 con tu firma de editor publicada. El periodo 2 (Informes profesionales con IA) te pedirá llevar esta disciplina editorial a textos técnicos, encuestas y comunicación empresarial. Don Hernando de la gaceta barrial se va contigo a escribir el primer informe formal de tu vida adulta.',
  pdf: 'proyecto-1-10-TIC.pdf'
};

export default contenido;
