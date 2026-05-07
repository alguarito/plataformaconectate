// Auto-generado desde Drive 02_PROYECTOS_INTEGRADORES/tex/*.tex (NO editar a mano)
// Total: 18 proyectos (3 períodos × 6 grados)
// Sincronizado: 2026-05-07

export interface RubricaItem {
  criterio: string;
  nivel5: string;
  nivel3: string;
  nivel1: string;
}

export interface FaseProyecto {
  nombre: string;
  proposito: string;
}

export interface Proyecto {
  grado: number;
  periodo: number;
  pdf: string;
  retoCentral: string;
  autor: string;
  dba: string;
  estrategia: string;
  focoDiseno: string;
  productoFinal: string;
  sentido: string;
  aprendizajes: string[];
  conceptosClave: string;
  competencias: string;
  desempenoCognitivo: string;
  desempenoProcedimental: string;
  desempenoActitudinal: string;
  fases: FaseProyecto[];
  entregables: string[];
  rubrica: RubricaItem[];
}

export const proyectos: Proyecto[] = [
  {
    "grado": 6,
    "periodo": 1,
    "pdf": "proyecto-1-6-TIC.pdf",
    "retoCentral": "Fortalecer la comunicación digital escolar mediante prácticas responsables, identidad cuidada y escucha del entorno.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Reconoce principios y conceptos propios de la tecnología, relacionando artefactos con su utilización segura",
    "estrategia": "Indagación guiada + comunicación digital responsable",
    "focoDiseno": "reconocer normas, configurar identidad digital, redactar mensajes formales, prevenir riesgos y socializar hallazgos",
    "productoFinal": "Portafolio de comunicación digital con correo formal, normas de convivencia, entrevista, evidencias y recomendaciones de seguridad básica.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Diagnóstico tecnológico y reconocimiento de la sala de sistemas — normas de seguridad y convivencia",
      "Concepto de identidad digital y huella digital — la Oikeiôsis estoica aplicada al entorno virtual",
      "Creación y configuración del correo institucional Microsoft 365 — firma profesional y bandeja de entrada",
      "Netiqueta: protocolos de comunicación digital profesional — simulaciones de correo formal",
      "Historia de los medios de comunicación I: de señales de humo al telégrafo — análisis dusseliano",
      "Historia de los medios de comunicación II: de la radio a la fibra óptica — impacto en la velocidad informacional",
      "Taller práctico: redacción de correos formales con diferentes propósitos comunicativos",
      "Seguridad en la comunicación digital: phishing, spam y protección de datos personales básicos",
      "Proyecto MILC Escuta: entrevista ética a un adulto mayor sobre la evolución de la comunicación en su vida",
      "Socialización de hallazgos y evaluación de periodo — portafolio digital del informe"
    ],
    "conceptosClave": "Configura y gestiona el correo electrónico institucional aplicando protocolos de Netiqueta. Analiza la evolución histórica de los medios de comunicación desde una perspectiva crítica. Reconoce las normas de seguridad y comportamiento en la sala de sistemas.",
    "competencias": "Ciudadanía digital y gestión de la identidad en la infoesfera. Comunicación profesional en entornos institucionales. Conciencia ética de la proximidad (Oikeiôsis estoica).",
    "desempenoCognitivo": "Define los conceptos de identidad digital, huella digital y Netiqueta. Explica la evolución de la comunicación humana desde señales de humo hasta la fibra óptica. Identifica las normas de seguridad institucional para el uso de equipos tecnológicos.",
    "desempenoProcedimental": "Crea y configura su correo institucional (Microsoft 365) con firma profesional. Elabora una línea de tiempo multimedia sobre la historia de las comunicaciones. Practica simulaciones de comunicación digital profesional en entornos controlados.",
    "desempenoActitudinal": "Valora el impacto duradero de las huellas digitales en la infoesfera. Reflexiona críticamente sobre cómo la velocidad de la información ha sido utilizada para liberar y dominar culturas. Demuestra respeto y responsabilidad en el uso compartido de equipos tecnológicos.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 6,
    "periodo": 2,
    "pdf": "proyecto-2-6-TIC.pdf",
    "retoCentral": "Comprender el computador como sistema y proponer acciones responsables para su uso y mantenimiento.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Reconoce la estructura física y lógica de un sistema computacional como arquitectura de la infoesfera local",
    "estrategia": "Aprendizaje experiencial + laboratorio técnico",
    "focoDiseno": "identificar componentes, clasificar hardware y software, organizar archivos, diagnosticar y proponer cuidado preventivo",
    "productoFinal": "Diagnóstico técnico básico del computador con mapa de componentes, protocolo de cuidado y evidencias del laboratorio.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Introducción a la arquitectura del computador — el computador como sistema de procesamiento",
      "Hardware interno I: procesador (CPU), memoria RAM — función y características básicas",
      "Hardware interno II: unidades de almacenamiento (HDD, SSD) — concepto de mantenimiento preventivo",
      "Periféricos: dispositivos de entrada, salida y mixtos — clasificación y función",
      "Software: definición y clasificación — sistema operativo, software de aplicación, software de programación",
      "Sistema operativo: funciones como administrador de recursos — exploración de la interfaz",
      "Gestión de archivos: organización en carpetas y subcarpetas — almacenamiento local vs. nube",
      "Laboratorio virtual de ensamble: identificación de componentes mediante simulador 3D",
      "Mantenimiento preventivo básico — dicotomía del control estoica aplicada al cuidado de equipos",
      "Evaluación práctica: diagnóstico de un sistema computacional y portafolio de evidencias"
    ],
    "conceptosClave": "Identifica componentes internos (CPU, RAM, almacenamiento) y periféricos (entrada, salida, mixtos). Diferencia entre software de sistema, de aplicación y de programación. Organiza información en estructuras de carpetas y subcarpetas con criterio lógico.",
    "competencias": "Comprensión arquitectónica de sistemas de computación (CSTA). Gestión de archivos y almacenamiento local y en la nube. Mantenimiento preventivo básico con autonomía técnica.",
    "desempenoCognitivo": "Describe la arquitectura interna del computador identificando procesador, memoria RAM y unidades de almacenamiento. Define sistema operativo y explica su función como administrador de recursos del hardware. Diferencia entre almacenamiento local y almacenamiento en la nube.",
    "desempenoProcedimental": "Utiliza laboratorios virtuales y simuladores 3D para identificar y ensamblar componentes de hardware. Realiza operaciones básicas de gestión de archivos: crear, mover, copiar, renombrar carpetas y archivos. Ejecuta protocolos básicos de mantenimiento preventivo de equipos.",
    "desempenoActitudinal": "Aplica la dicotomía del control estoica al cuidado de herramientas: distingue entre lo que depende de su cuidado y las fallas de fábrica. Asume la responsabilidad compartida sobre los equipos institucionales. Desarrolla curiosidad sobre la arquitectura que sostiene el mundo digital.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 6,
    "periodo": 3,
    "pdf": "proyecto-3-6-TIC.pdf",
    "retoCentral": "Transformar información confiable en un documento claro, útil y bien presentado para la comunidad escolar.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Produce contenidos digitales y valida información de fuentes web aplicando criterios de soberanía informacional",
    "estrategia": "Producción documental + alfabetización informacional",
    "focoDiseno": "crear documentos, aplicar formato, insertar recursos, buscar fuentes, evaluar información y presentar evidencias",
    "productoFinal": "Documento final con formato profesional, fuentes verificadas, imágenes/tablas pertinentes y reflexión sobre seguridad digital.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Introducción al procesador de texto (Word/Google Docs) — entorno de trabajo y funciones básicas",
      "Formato de fuente y párrafo: tipos de letra, tamaño, color, alineación, interlineado, sangría",
      "Inserción de imágenes, tablas y formas en documentos — normas básicas de presentación",
      "Taller práctico: creación de un documento autobiográfico con formato profesional",
      "Internet y motores de búsqueda: estrategias para localizar información confiable",
      "Evaluación de fuentes web: concepto de fake news, sesgo informacional y entropía de la información",
      "Seguridad digital básica: contraseñas seguras, privacidad en la red, configuración de cuentas",
      "Taller integrador: investigación guiada sobre un problema comunitario con fuentes validadas",
      "Proyecto MILC Sistematización: elaboración de un documento final con normas básicas de presentación",
      "Sustentación de proyectos y evaluación final de periodo — bitácora de depuración estoica"
    ],
    "conceptosClave": "Crea y edita documentos aplicando formatos de fuente, párrafo, imágenes y tablas. Aplica estrategias avanzadas de búsqueda para localizar, evaluar y validar fuentes confiables. Implementa prácticas de contraseñas seguras y privacidad en la red.",
    "competencias": "Apropiación y uso productivo de la tecnología. Pensamiento crítico frente a la desinformación (entropía informacional). Seguridad y privacidad digital.",
    "desempenoCognitivo": "Identifica las funciones principales del procesador de texto: formato de fuente, párrafo, inserción de elementos. Define los conceptos de fake news, sesgo informacional y entropía de la información. Explica la importancia de las contraseñas seguras y la protección de datos personales.",
    "desempenoProcedimental": "Produce documentos escritos con formato profesional integrando imágenes, tablas y formas. Ejecuta búsquedas avanzadas en motores de búsqueda y evalúa la confiabilidad de las fuentes. Configura contraseñas seguras y ajustes de privacidad en sus cuentas digitales.",
    "desempenoActitudinal": "Utiliza el procesador de texto como herramienta para narrar su propia historia y la de su comunidad. Valora la veracidad de la información como principio ético de la infoesfera. Asume la protección de su privacidad digital como ejercicio de soberanía personal.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 7,
    "periodo": 1,
    "pdf": "proyecto-1-7-TIC.pdf",
    "retoCentral": "Usar herramientas colaborativas para resolver una necesidad escolar con organización, comunicación y responsabilidad digital.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Domina herramientas de trabajo colaborativo como práctica de liderazgo servicial en la nube",
    "estrategia": "Aprendizaje colaborativo + ciudadanía digital",
    "focoDiseno": "asignar roles, gestionar permisos, documentar acuerdos, publicar y cuidar datos personales",
    "productoFinal": "Portafolio colaborativo en la nube con roles, evidencias, publicación responsable y reflexión sobre datos.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Diagnóstico de competencias colaborativas — introducción al trabajo en la nube",
      "Office 365 / Google Workspace: creación simultánea de documentos — gestión de permisos",
      "Taller colaborativo: producción grupal de un documento compartido con roles POGIL",
      "Almacenamiento en la nube: sincronización de dispositivos y copias de seguridad",
      "Ventajas y riesgos del almacenamiento remoto — soberanía de los datos personales",
      "Comunicación asincrónica: foros educativos, blogs y plataformas LMS (introducción)",
      "Taller práctico: publicación de una entrada de blog educativo sobre tecnología responsable",
      "Liderazgo servicial en proyectos digitales — el mandar obedeciendo de Dussel",
      "Proyecto MILC Escuta: cartografía social digital de necesidades tecnológicas del entorno escolar",
      "Evaluación de competencias colaborativas y portafolio digital del periodo"
    ],
    "conceptosClave": "Trabaja simultáneamente en documentos colaborativos gestionando permisos y comentarios. Sincroniza archivos entre dispositivos y gestiona copias de seguridad en la nube. Participa activamente en plataformas LMS y foros educativos.",
    "competencias": "Colaborador global y comunicador creativo (ISTE). Gestión de flujos de trabajo colaborativos. Liderazgo servicial (mandar obedeciendo — Dussel).",
    "desempenoCognitivo": "Explica las ventajas y desventajas del almacenamiento remoto vs. local. Describe el funcionamiento de las herramientas de edición simultánea. Define los conceptos de comunicación sincrónica y asincrónica.",
    "desempenoProcedimental": "Crea documentos colaborativos en Office 365/Google Workspace con gestión de permisos. Configura la sincronización automática de archivos en al menos dos dispositivos. Publica contenidos en blogs educativos o plataformas LMS institucionales.",
    "desempenoActitudinal": "Ejerce el liderazgo en proyectos digitales como servicio a la comunidad de aprendizaje. Respeta las contribuciones de sus compañeros en entornos colaborativos. Valora la comunicación asincrónica como herramienta de inclusión y flexibilidad.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 7,
    "periodo": 2,
    "pdf": "proyecto-2-7-TIC.pdf",
    "retoCentral": "Crear un producto computacional que resuelva una necesidad o comunique una idea.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Desarrolla pensamiento algorítmico mediante programación visual por bloques aplicando el modelo PRIMM",
    "estrategia": "PRIMM + prototipado por bloques",
    "focoDiseno": "predecir, ejecutar, investigar, modificar y crear una solución interactiva",
    "productoFinal": "Prototipo funcional, simulación o experiencia interactiva documentada.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Fundamentos de algoritmia: concepto de algoritmo como secuencia lógica de pasos",
      "Variables, instrucciones y eventos — introducción al entorno de programación Scratch",
      "Fase PRIMM — Predict/Run: análisis y ejecución de programas existentes en Scratch",
      "Fase PRIMM — Investigate: desglose de estructuras lógicas en programas de ejemplo",
      "Estructuras de control I: bucles (repeticiones) — iteración determinada e indeterminada",
      "Estructuras de control II: condicionales simples — toma de decisiones en el código",
      "Fase PRIMM — Modify: experimentación controlada modificando parámetros de programas",
      "Depuración de errores con ataraxia estoica — documentación del proceso de debugging",
      "Fase PRIMM — Make: creación de una narrativa digital interactiva (historia o juego básico)",
      "Sustentación del proyecto de narrativa digital y evaluación de competencias computacionales"
    ],
    "conceptosClave": "Diseña algoritmos como secuencias lógicas de instrucciones, variables y eventos en Scratch. Implementa estructuras de control: bucles (repeticiones) y condicionales simples. Crea historias interactivas o juegos básicos integrando personajes, fondos y sonidos.",
    "competencias": "Pensador computacional (ISTE) y programador inicial. Depuración de errores con disciplina estoica (ataraxia). Creación de narrativas digitales interactivas.",
    "desempenoCognitivo": "Define algoritmo, variable, evento, bucle y condicional con precisión conceptual. Explica la diferencia entre estructuras secuenciales, condicionales e iterativas. Describe las fases del modelo PRIMM: Predict, Run, Investigate, Modify, Make.",
    "desempenoProcedimental": "Programa en Scratch siguiendo el ciclo PRIMM: predice, ejecuta, investiga, modifica y crea. Depura errores lógicos en programas sencillos documentando el proceso de resolución. Desarrolla un proyecto de narrativa digital interactiva con al menos tres escenas programadas.",
    "desempenoActitudinal": "Enfrenta los errores de programación con ataraxia estoica: cada bug es una oportunidad de aprendizaje. Demuestra paciencia y atención plena (prosochē) al analizar código antes de ejecutarlo. Valora la programación como techne (virtud como artesanía del pensamiento).",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 7,
    "periodo": 3,
    "pdf": "proyecto-3-7-TIC.pdf",
    "retoCentral": "Usar IA para atender una necesidad escolar o comunitaria con verificación, privacidad y criterio humano.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Comprende los fundamentos de la IA y reflexiona críticamente sobre el impacto ambiental de la tecnología",
    "estrategia": "Aprendizaje basado en retos + uso crítico de IA",
    "focoDiseno": "formular prompts, verificar respuestas, cuidar datos, reconocer sesgos y crear una evidencia útil",
    "productoFinal": "Portafolio crítico de IA con prompts, verificaciones, producto aplicado, declaración de uso y reflexión ética.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Introducción a la Inteligencia Artificial: definición, historia y ejemplos cotidianos",
      "Cómo aprenden las máquinas: Machine Learning básico — datos, patrones y predicciones",
      "Sesgos algorítmicos: análisis crítico de algoritmos de recomendación en redes sociales",
      "Ética y tecnología: impacto de la IA en el empleo, la privacidad y la equidad social",
      "IA generativa responsable: prompts, verificación y declaración de uso",
      "Mini laboratorio de IA: clasificación manual, patrones y errores",
      "Gestión de RAEE: estrategias de reciclaje de componentes electrónicos — Rethink, Refuse, Reduce",
      "Taller práctico: auditoría de e-waste institucional — identificación de dispositivos obsoletos",
      "Proyecto MILC integrador: informe de impacto ambiental tecnológico con propuestas comunitarias",
      "Tribunal analéctico: sustentación del proyecto ante panel y evaluación final de grado"
    ],
    "conceptosClave": "Define IA y reconoce ejemplos de uso cotidiano: asistentes de voz, algoritmos de recomendación. Analiza la mochila ecológica de los dispositivos y el problema de la obsolescencia programada. Evalúa el impacto de la IA en el empleo, la privacidad y la equidad social.",
    "competencias": "Comprensión de IA (nivel Understand — UNESCO). Conciencia ambiental y gestión de residuos electrónicos. Ética ontocéntrica (Floridi) y ecología dusseliana.",
    "desempenoCognitivo": "Define inteligencia artificial y Machine Learning básico con ejemplos contextualizados. Explica el ciclo de vida de un producto tecnológico desde la minería de tierras raras hasta la disposición final. Identifica los sesgos algorítmicos en redes sociales y sistemas de recomendación.",
    "desempenoProcedimental": "Investiga y documenta el funcionamiento de al menos tres aplicaciones de IA cotidianas. Realiza una auditoría de e-waste en la institución identificando dispositivos obsoletos. Elabora un informe sobre el impacto ambiental y social de los RAEE en su comunidad.",
    "desempenoActitudinal": "Reflexiona críticamente sobre la responsabilidad ética del creador de tecnología. Promueve la cultura de reparación frente al reemplazo de dispositivos. Desarrolla compromiso con la sostenibilidad ambiental desde la gestión tecnológica.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 8,
    "periodo": 1,
    "pdf": "proyecto-1-8-TIC.pdf",
    "retoCentral": "Usar datos reales para comprender un problema escolar o comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Organiza y procesa datos numéricos para resolver problemas cotidianos mediante hojas de cálculo",
    "estrategia": "Aprendizaje basado en datos + experimento escolar",
    "focoDiseno": "recolectar datos, organizarlos, analizarlos y tomar decisiones con evidencia",
    "productoFinal": "Informe con tablas, gráficos y recomendación basada en datos.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Análisis de datos con phronesis: preguntas, variables y decisiones prudentes",
      "Tipos de datos y formato de celdas — ingreso y organización de información numérica",
      "Tablas de datos en Excel: campos, registros y limpieza básica",
      "Funciones estadísticas: SUMA, PROMEDIO, MAX, MIN — aplicaciones en datos reales del entorno",
      "Referencias relativas y absolutas — anclaje de celdas para cálculos complejos",
      "Fórmulas compuestas: operadores, porcentajes y orden de cálculo",
      "Gráficos básicos: barras, líneas y circulares para interpretar datos",
      "Formato condicional y validación de datos — presentación profesional de información",
      "Mini estudio de datos del entorno: recolección, análisis y conclusión prudente",
      "Socialización del portafolio de análisis de datos con phronesis"
    ],
    "conceptosClave": "Tema Central: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
    "competencias": "Análisis de datos y pensamiento cuantitativo. Sabiduría práctica (phronesis) en la interpretación de evidencias. Apropiación productiva de herramientas ofimáticas avanzadas.",
    "desempenoCognitivo": "Ver temario detallado de 10 sesiones en la sección correspondiente.",
    "desempenoProcedimental": "Se desarrollan mediante las metodologías MILC, PRIMM y ABP según el temario de sesiones.",
    "desempenoActitudinal": "Se evalúan mediante portafolio digital, bitácora estoica y tribunal analéctico.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 8,
    "periodo": 2,
    "pdf": "proyecto-2-8-TIC.pdf",
    "retoCentral": "Diseñar una respuesta tecnológica que use lógica, condiciones y sensores simulados para atender una necesidad del entorno.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Resuelve problemas mediante programación estructurada avanzada y computación física",
    "estrategia": "Computación física + prototipado lógico",
    "focoDiseno": "modelar condiciones, simular entradas, programar respuestas, probar casos y depurar",
    "productoFinal": "Sistema simulado de control o alerta con pseudocódigo, pruebas, evidencias y mejora documentada.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Lógica avanzada I: estructuras condicionales anidadas (if-else-if) — operadores lógicos AND/OR/NOT",
      "Tablas de verdad y condiciones compuestas: AND, OR y NOT en decisiones",
      "Pseudocódigo y diagramas de flujo para lógica de control",
      "Sensores básicos: luz, temperatura — activación de eventos mediante código en MakeCode",
      "Actuadores y eventos: LEDs, sonido y respuestas automáticas en MakeCode",
      "Variables, umbrales y calibración: interpretar lecturas de sensores",
      "Depuración de lógica de control: casos esperados, contrarios y límites",
      "Simulación de sistema de alerta ambiental: lectura, condición y respuesta",
      "Proyecto MILC: sistema de monitoreo ambiental con sensores simulados — Logos como razón universal",
      "Sustentación del proyecto de computación física: evidencias, pruebas y mejoras"
    ],
    "conceptosClave": "Tema Central: Lógica de Control y Computación Física — El Logos Universal",
    "competencias": "Programación estructurada y depuración sistemática. Computación física con Micro:bit y sensores. Metodología de diseño tecnológico (identificación-diseño-evaluación).",
    "desempenoCognitivo": "Ver temario detallado de 10 sesiones en la sección correspondiente.",
    "desempenoProcedimental": "Se desarrollan mediante las metodologías MILC, PRIMM y ABP según el temario de sesiones.",
    "desempenoActitudinal": "Se evalúan mediante portafolio digital, bitácora estoica y tribunal analéctico.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 8,
    "periodo": 3,
    "pdf": "proyecto-3-8-TIC.pdf",
    "retoCentral": "Comunicar una problemática social o tecnológica mediante recursos multimedia claros, responsables y culturalmente pertinentes.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Crea contenidos multimedia y desarrolla conciencia crítica sobre seguridad en la red",
    "estrategia": "Producción multimedia + comunicación ética",
    "focoDiseno": "diseñar guion, seleccionar recursos, editar imagen o audio, revisar accesibilidad y sustentar impacto",
    "productoFinal": "Presentación multimedia o campaña visual con recursos propios/citados, mensaje claro, accesibilidad y reflexión ética.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Diseño de presentaciones multimedia: principios de comunicación visual y diseño de diapositivas",
      "PowerPoint/Canva: animaciones de entrada, énfasis y salida — inserción de hipervínculos",
      "Taller de diseño: creación de una presentación de alto impacto sobre un proyecto tecnológico",
      "Edición básica de imagen: herramientas digitales para mejorar recursos visuales",
      "Edición básica de sonido: captura, edición y exportación de audio para presentaciones",
      "Seguridad en la red I: ciberbullying — definición, prevención y rutas de denuncia",
      "Seguridad en la red II: sexting y grooming — estrategias de protección y conciencia digital",
      "Estética de la liberación: crear contenidos que reflejen la belleza de la cultura popular",
      "Proyecto MILC integrador: presentación multimedia sobre problemática social con enfoque ético",
      "Sustentación pública y evaluación final — portafolio digital y bitácora de aprendizaje"
    ],
    "conceptosClave": "Tema Central: Multimedia, Ciberseguridad y Estética de la Liberación",
    "competencias": "Comunicación creativa y diseño visual de alto impacto. Edición multimedia con herramientas digitales. Seguridad digital: prevención de ciberbullying, sexting y grooming.",
    "desempenoCognitivo": "Ver temario detallado de 10 sesiones en la sección correspondiente.",
    "desempenoProcedimental": "Se desarrollan mediante las metodologías MILC, PRIMM y ABP según el temario de sesiones.",
    "desempenoActitudinal": "Se evalúan mediante portafolio digital, bitácora estoica y tribunal analéctico.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 9,
    "periodo": 1,
    "pdf": "proyecto-1-9-TIC.pdf",
    "retoCentral": "Comprender una tecnología desde su impacto social y comunicar la investigación con rigor documental.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Analiza la evolución tecnológica y aplica normas técnicas para la documentación de proyectos",
    "estrategia": "Investigación histórica + normativa documental",
    "focoDiseno": "formular una pregunta histórica, buscar fuentes, citar, comparar impactos y respetar la propiedad intelectual",
    "productoFinal": "Informe histórico o técnico con normas básicas de presentación, citas, referencias y análisis crítico.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Historia de la tecnología I: de la Revolución Industrial a la era del telégrafo y la electricidad",
      "Historia de la tecnología II: la era electrónica y la revolución digital — análisis de impacto social",
      "Análisis dusseliano: cómo los inventos han resuelto necesidades sociales y quiénes fueron excluidos",
      "Normas de presentación de documentos I: introducción a normas ICONTEC — estructura y formato",
      "Normas de presentación de documentos II: introducción a normas APA — citación y referenciación",
      "Taller práctico: elaboración de un informe técnico con normas ICONTEC/APA rigurosas",
      "Propiedad intelectual I: patentes y derechos de autor — análisis desde la justicia dusseliana",
      "Propiedad intelectual II: licencias de software — Creative Commons, GPL, software libre vs. propietario",
      "Proyecto MILC: investigación histórica sobre una tecnología que transformó la región — descolonización del saber",
      "Evaluación de competencias en normativa técnica y conciencia histórica"
    ],
    "conceptosClave": "Tema Central: Historia de la Tecnología, ICONTEC/APA y Soberanía Intelectual",
    "competencias": "Pensamiento histórico-crítico sobre la evolución tecnológica. Documentación técnica con estándares nacionales e internacionales. Conciencia sobre propiedad intelectual y descolonización del saber.",
    "desempenoCognitivo": "Ver temario detallado de 10 sesiones en la sección correspondiente.",
    "desempenoProcedimental": "Se desarrollan mediante las metodologías MILC, PRIMM y ABP según el temario de sesiones.",
    "desempenoActitudinal": "Se evalúan mediante portafolio digital, bitácora estoica y tribunal analéctico.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 9,
    "periodo": 2,
    "pdf": "proyecto-2-9-TIC.pdf",
    "retoCentral": "Explicar cómo circula la información en una comunidad digital y producir una publicación responsable.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Diseña publicaciones digitales y comprende los principios de redes e interconexión",
    "estrategia": "Producción editorial digital + simulación de redes",
    "focoDiseno": "diseñar una publicación, organizar información, simular conectividad y documentar pruebas",
    "productoFinal": "Publicación digital o boletín conectado a una simulación de red escolar con evidencias y criterios de accesibilidad.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Diseño editorial digital I: fundamentos de autoedición — folletos y boletines informativos",
      "Diseño editorial digital II: retícula, jerarquía visual y composición de página — La infoesfera como coexistencia",
      "Diseño editorial digital III: edición colaborativa, licencias y accesibilidad — revisión responsable",
      "Principios de redes I: concepto de emisor, receptor y canal — cómo funciona la radio y el Wi-Fi",
      "Principios de redes II: Bluetooth, protocolos básicos de comunicación — arquitectura de red simple",
      "Simulador de redes (Filius): construcción de arquitecturas de red virtuales — configuración de IP",
      "Redes III: topologías, direccionamiento y diagnóstico básico — infraestructura digital escolar",
      "Simulación de redes II: servicios básicos, cliente-servidor y rutas de información",
      "Proyecto MILC de infoesfera: publicación digital y red escolar responsable",
      "Socialización del proyecto de infoesfera: portafolio, pruebas y mejora"
    ],
    "conceptosClave": "Tema Central: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
    "competencias": "Diseño editorial digital y comunicación técnica. Arquitectura de redes y simulación con Filius. Modelado computacional de fenómenos del entorno.",
    "desempenoCognitivo": "Ver temario detallado de 10 sesiones en la sección correspondiente.",
    "desempenoProcedimental": "Se desarrollan mediante las metodologías MILC, PRIMM y ABP según el temario de sesiones.",
    "desempenoActitudinal": "Se evalúan mediante portafolio digital, bitácora estoica y tribunal analéctico.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 9,
    "periodo": 3,
    "pdf": "proyecto-3-9-TIC.pdf",
    "retoCentral": "Usar IA para atender una necesidad escolar o comunitaria con verificación, privacidad y criterio humano.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Comprende conceptos básicos de inteligencia artificial y usa herramientas de IA de manera crítica, ética y verificable para proponer soluciones escolares o comunitarias.",
    "estrategia": "Aprendizaje basado en retos + uso crítico de IA",
    "focoDiseno": "formular prompts, verificar respuestas, cuidar datos, reconocer sesgos y crear una evidencia útil",
    "productoFinal": "Portafolio crítico de IA con prompts, verificaciones, producto aplicado, declaración de uso y reflexión ética.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "¿Qué es la Inteligencia Artificial? — definición, ejemplos cotidianos y diferencias frente a la automatización",
      "Historia breve de la IA y presencia actual — asistentes, buscadores, redes sociales y herramientas generativas",
      "Datos, patrones y aprendizaje automático — cómo las máquinas aprenden a partir de información",
      "Tipos básicos de IA — predictiva, generativa, reconocimiento de imágenes, lenguaje natural y recomendadores",
      "Prompts y comunicación con IA — rol, contexto, tarea, formato y criterios de revisión",
      "IA generativa de texto e imagen — producción asistida con revisión humana",
      "Errores, alucinaciones y verificación de información — fuentes, sesgos y límites de la IA",
      "Ética, sesgos y privacidad — datos personales, consentimiento y responsabilidad escolar",
      "Proyecto MILC: uso de IA para resolver una necesidad escolar o comunitaria",
      "Sustentación y evaluación crítica del proyecto — beneficios, riesgos, mejoras e impacto de la IA"
    ],
    "conceptosClave": "Tema Central: Inteligencia Artificial básica, uso responsable y pensamiento crítico digital",
    "competencias": "Alfabetización básica en inteligencia artificial y pensamiento crítico digital. Diseño de prompts y comunicación efectiva con asistentes de IA. Ética, privacidad y verificación de información generada por sistemas inteligentes.",
    "desempenoCognitivo": "Define inteligencia artificial, aprendizaje automático, IA generativa, prompts, sesgos, alucinaciones, privacidad y verificación de información. Explica la relación entre datos, patrones, modelos y resultados en sistemas de IA.",
    "desempenoProcedimental": "Formula prompts con rol, contexto, tarea, formato y criterios de revisión. Usa herramientas de IA para producir y revisar textos o imágenes con supervisión humana. Verifica respuestas, contrasta fuentes y diseña una propuesta MILC para atender una necesidad escolar o comunitaria.",
    "desempenoActitudinal": "Reconoce los límites de la IA y evita usarla como sustituto del pensamiento propio. Protege datos personales, actúa con transparencia, reconoce sesgos y asume responsabilidad ética frente a la información generada.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 10,
    "periodo": 1,
    "pdf": "proyecto-1-10-TIC.pdf",
    "retoCentral": "Escribir y sustentar un libro propio usando IA como asistente, sin perder autoría, ética ni voz personal.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Produce un libro digital de tema libre usando IA como apoyo para planear, escribir, revisar y editar, aplicando criterios de autoría, ética, derechos de autor, citación, transparencia y calidad editorial.",
    "estrategia": "Escritura inversa + taller editorial asistido con IA",
    "focoDiseno": "imaginar el libro final, planear capítulos, escribir, editar, citar y declarar el uso de IA",
    "productoFinal": "Libro breve de tema libre con bitácora de prompts, fragmentos reescritos, créditos, diseño editorial y declaración de IA.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "IA como asistente de escritura — posibilidades, límites y diferencia entre ayudar, copiar, crear y editar",
      "Escritura Inversa: pensar primero el libro terminado — tema libre, lector, propósito, género, tono e índice",
      "Prompts básicos para crear un libro — rol, contexto, tarea, formato, extensión, tono y criterios de calidad",
      "Planeación editorial con IA — lluvia de ideas, escaleta, capítulos y estructura",
      "Autoría y voz propia — reescritura humana, estilo personal, memoria, ejemplos y experiencia",
      "Redacción asistida del primer capítulo — borrador, revisión humana, ampliación, reducción y coherencia",
      "Edición con IA — ortografía, puntuación, cohesión, títulos, subtítulos, ritmo y consistencia",
      "Ética, derechos de autor y citación — plagio, licencias, fuentes, imágenes y transparencia sobre IA",
      "Diseño editorial digital — portada, contraportada, tabla de contenido, créditos y exportación PDF",
      "Feria editorial MILC — presentación del libro, bitácora de prompts, decisiones éticas y aprendizajes"
    ],
    "conceptosClave": "Tema Central: Escritura Inversa con IA — creación, edición y publicación de un libro breve",
    "competencias": "Prompting para creación y edición de textos. Escritura Inversa y planeación editorial. Autoría, voz propia, derechos de autor y uso ético de IA.",
    "desempenoCognitivo": "Comprende la IA como asistente de escritura, la Escritura Inversa, la estructura de un libro breve, el diseño de prompts, la autoría, la voz propia, los derechos de autor, las licencias, la citación y la transparencia en el uso de IA.",
    "desempenoProcedimental": "Define tema, lector, propósito, género, tono e índice. Construye una escaleta, redacta y reescribe capítulos con apoyo de IA, edita ortografía, cohesión y estilo, diseña portada y créditos, registra una bitácora de prompts y exporta el libro final en PDF.",
    "desempenoActitudinal": "Valora la autoría y la voz personal como centro del proceso creativo. Respeta obras ajenas, evita el plagio, declara el uso de IA y asume la edición como ejercicio de honestidad intelectual y cuidado estético.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 10,
    "periodo": 2,
    "pdf": "proyecto-2-10-TIC.pdf",
    "retoCentral": "Transformar la escritura asistida en un informe profesional que sustente una decisión comercial o contable.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Elabora informes comerciales o estudios de mercado en PDF usando IA para planear y redactar, y LaTeX para codificar documentos estructurados con tablas, gráficos, fuentes y conclusiones.",
    "estrategia": "Aprendizaje basado en informes + codificación documental en LaTeX",
    "focoDiseno": "formular una pregunta comercial, recolectar datos, codificar el informe, analizar y citar fuentes",
    "productoFinal": "Informe comercial o estudio de mercado en LaTeX con datos, tabla, gráfico, análisis, citación y declaración de IA.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Del libro al informe profesional — diferencias entre texto creativo, informe técnico, informe comercial y estudio de mercado",
      "Introducción a LaTeX como código documental — documentclass, secciones, listas y compilación a PDF",
      "IA para planear informes — objetivos, preguntas de investigación, estructura y criterios de calidad",
      "Tema comercial o contable del informe — producto, servicio, emprendimiento, mercado o proceso de análisis",
      "Encuesta y recolección de datos — preguntas, formulario digital, muestra, ética y privacidad",
      "Tablas en LaTeX — organización de frecuencias, costos, precios, clientes o preferencias",
      "Gráficos e imágenes en el informe — exportación desde hoja de cálculo e inserción con título, fuente y análisis",
      "Análisis comercial con apoyo de IA — público objetivo, competencia, precio, necesidades y oportunidades",
      "Edición, citación y transparencia — fuentes, derechos de autor, anexos y declaración de uso de IA",
      "Sustentación del informe comercial — problema, datos, hallazgos, decisiones y aprendizaje técnico"
    ],
    "conceptosClave": "Tema Central: Informes comerciales con IA y LaTeX — escritura técnica, datos y presentación profesional",
    "competencias": "Codificación documental en LaTeX. Escritura técnica y comercial asistida por IA. Recolección ética de datos, tabulación, visualización y análisis de mercado.",
    "desempenoCognitivo": "Diferencia libro, informe técnico, informe comercial y estudio de mercado. Reconoce la estructura de LaTeX, los elementos de un informe profesional, el diseño de encuestas, la organización de datos, las tablas, los gráficos, las fuentes y la citación.",
    "desempenoProcedimental": "Codifica documentos en LaTeX con título, secciones, listas, tablas, imágenes y anexos. Usa IA para planear objetivos y preguntas, diseña instrumentos de recolección, tabula resultados, inserta gráficos, redacta análisis comercial y compila el informe final en PDF.",
    "desempenoActitudinal": "Actúa con rigor documental y respeto por la evidencia. Cuida la privacidad de quienes aportan datos, cita fuentes, declara el uso de IA y entiende la presentación profesional como responsabilidad comunicativa.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 10,
    "periodo": 3,
    "pdf": "proyecto-3-10-TIC.pdf",
    "retoCentral": "Usar datos comerciales o contables para sustentar una decisión empresarial con apoyo crítico de IA.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Analiza datos comerciales o contables con hojas de cálculo e IA para construir dashboards o reportes empresariales y sustentar decisiones basadas en evidencia.",
    "estrategia": "Aprendizaje basado en datos empresariales + analítica asistida con IA",
    "focoDiseno": "cargar datos, limpiarlos, calcular indicadores, visualizar, interpretar y defender decisiones",
    "productoFinal": "Dashboard o reporte empresarial con base limpia, indicadores, visualizaciones, recomendación, riesgos y verificación de IA.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Datos para tomar decisiones empresariales — registros, indicadores, métricas y evidencia",
      "Base de datos comercial en hoja de cálculo — productos, clientes, ventas, costos, fechas, cantidades e ingresos",
      "Fórmulas empresariales básicas — costos, ingresos, utilidad, margen, porcentajes, promedios, máximo y mínimo",
      "Limpieza y organización de datos — validación, filtros, ordenamiento, formatos y errores comunes",
      "Gráficos comerciales e interpretación visual — barras, líneas, circulares y comparativos",
      "Indicadores clave de negocio — producto más vendido, cliente frecuente, margen, tendencia y punto de equilibrio",
      "IA para interpretar datos — patrones, hipótesis, explicaciones y conclusiones verificables",
      "IA para cargue, limpieza y visualización de datos — orientación en hojas de cálculo o Google Colab",
      "Dashboard o reporte empresarial asistido con IA — indicadores, tablas, gráficos, hallazgos y recomendaciones",
      "Sustentación de decisiones empresariales con IA — datos, visualizaciones, indicadores, riesgos y argumentos"
    ],
    "conceptosClave": "Tema Central: Analítica empresarial con IA — datos, visualización y decisiones comerciales",
    "competencias": "Analítica empresarial con hojas de cálculo e IA. Visualización de datos, indicadores y dashboards. Sustentación de decisiones comerciales, contables o administrativas basadas en datos.",
    "desempenoCognitivo": "Comprende bases de datos comerciales, métricas, indicadores, costos, ingresos, utilidad, margen, porcentajes, limpieza de datos, visualizaciones, dashboards y criterios para sustentar decisiones empresariales con IA.",
    "desempenoProcedimental": "Construye una base de datos en hoja de cálculo, aplica fórmulas, valida y limpia registros, crea gráficos, calcula indicadores, usa IA para interpretar patrones y orientar cargue, limpieza y visualización, y construye un dashboard o reporte empresarial con recomendaciones.",
    "desempenoActitudinal": "Toma decisiones a partir de evidencia y no de intuiciones aisladas. Verifica las interpretaciones sugeridas por IA, protege la información, comunica límites del análisis y asume responsabilidad frente a decisiones comerciales o contables.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 11,
    "periodo": 1,
    "pdf": "proyecto-1-11-TIC.pdf",
    "retoCentral": "Diseñar una presencia digital empresarial clara, accesible y ética para comunicar una oferta real o simulada.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Diseña y sustenta una presencia digital empresarial con apoyo de IA, integrando identidad de marca, arquitectura web, redacción comercial, SEO básico, contenido para redes y criterios éticos.",
    "estrategia": "Design Thinking + estrategia de presencia digital empresarial",
    "focoDiseno": "definir público, propuesta de valor, identidad, arquitectura web, contenido, SEO y ética digital",
    "productoFinal": "Sitio, landing page o portafolio comercial con identidad de marca, textos revisados, pieza de red, SEO básico y declaración de IA.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Presencia digital empresarial — identidad, propósito, público y propuesta de valor",
      "IA para construir identidad de marca — nombre, tono, eslogan, descripción y mensaje central",
      "Arquitectura web empresarial — secciones de una landing page o página comercial",
      "HTML/CSS o CMS — estructura básica de sitio web, landing page o portafolio comercial",
      "IA para redacción comercial — inicio, servicios, beneficios, preguntas frecuentes y llamados a la acción",
      "Diseño visual de marca — portada, colores, tipografías, imágenes, coherencia y accesibilidad",
      "SEO básico con IA — palabras clave, títulos, descripciones y posicionamiento ético",
      "Contenido para redes — piezas promocionales y calendario básico de publicación",
      "Ética digital empresarial — derechos de imagen, datos personales, publicidad responsable y transparencia en IA",
      "Sustentación del sitio — marca, público, estrategia digital y decisiones de diseño"
    ],
    "conceptosClave": "Tema Central: Presencia Digital Empresarial con IA",
    "competencias": "Presencia digital empresarial con IA. Identidad de marca, arquitectura web y comunicación comercial. SEO básico, contenido para redes y ética digital empresarial.",
    "desempenoCognitivo": "Comprende presencia digital empresarial, identidad de marca, propuesta de valor, arquitectura web, landing page, redacción comercial, SEO básico, accesibilidad, derechos de imagen, privacidad y transparencia en el uso de IA.",
    "desempenoProcedimental": "Construye identidad de marca con apoyo de IA, organiza la arquitectura de una página, crea un prototipo en HTML/CSS o CMS, redacta textos comerciales, define criterios visuales, diseña piezas para redes y sustenta la estrategia digital.",
    "desempenoActitudinal": "Comunica de manera honesta, inclusiva y responsable. Respeta derechos de imagen y datos personales, evita publicidad engañosa, cuida la accesibilidad y declara el apoyo de IA en la producción de contenidos.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 11,
    "periodo": 2,
    "pdf": "proyecto-2-11-TIC.pdf",
    "retoCentral": "Mejorar un proceso empresarial, comercial o contable reduciendo errores y cuidando los datos personales.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Mapea, mejora y automatiza procesos empresariales básicos con herramientas digitales e IA, cuidando calidad, privacidad, protección de datos y revisión humana.",
    "estrategia": "Mapeo de procesos + mejora continua + automatización asistida con IA",
    "focoDiseno": "identificar entrada, actividad, responsable, salida, datos, automatización, PDCA y privacidad",
    "productoFinal": "Proceso empresarial mapeado y mejorado con formulario, base, flujo, protocolo de datos, FAQ o presentación de automatización.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Procesos empresariales — ventas, atención al cliente, inventario, encuestas, pedidos y seguimiento",
      "Mapeo de procesos — entrada, actividad, responsable, herramienta, salida y mejora",
      "IA para diagnosticar procesos — tareas repetitivas, errores, tiempos muertos y oportunidades",
      "Formularios digitales — captura de información comercial, contable o de servicio",
      "Organización de datos — registros, validaciones y estructura en hojas de cálculo",
      "Automatización básica — respuestas, confirmaciones, filtros, plantillas y flujos de trabajo",
      "IA para atención al cliente — preguntas frecuentes, guiones, respuestas y límites éticos",
      "Calidad y mejora continua — ciclo PDCA aplicado a un proceso escolar o empresarial",
      "Protección de datos — Ley 1581, consentimiento, privacidad y uso responsable de información",
      "Presentación del proceso automatizado — problema, flujo, datos, mejora y riesgos"
    ],
    "conceptosClave": "Tema Central: Automatización de Procesos Empresariales con IA",
    "competencias": "Automatización de procesos empresariales con IA. Mapeo de procesos, formularios, hojas de cálculo y flujos de trabajo. Calidad, PDCA, atención al cliente y protección de datos.",
    "desempenoCognitivo": "Reconoce procesos empresariales, entradas, actividades, responsables, herramientas, salidas, automatización básica, formularios, bases de datos, atención al cliente, ciclo PDCA, protección de datos y Ley 1581 de 2012.",
    "desempenoProcedimental": "Mapea procesos, diagnostica tareas repetitivas con IA, diseña formularios, organiza datos en hojas de cálculo, crea respuestas o plantillas automatizadas, elabora guiones de atención al cliente, aplica PDCA y construye un protocolo de privacidad.",
    "desempenoActitudinal": "Asume la automatización como apoyo al servicio humano, no como reemplazo acrítico. Protege datos personales, revisa las respuestas generadas por IA, mejora procesos con humildad y prioriza calidad, claridad y cuidado del usuario.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  },
  {
    "grado": 11,
    "periodo": 3,
    "pdf": "proyecto-3-11-TIC.pdf",
    "retoCentral": "Integrar lo aprendido en una solución empresarial asistida con IA, defendible con evidencias y orientada a una necesidad real.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Integra presencia digital, datos, dashboard, automatización, documentación y pitch en un proyecto final empresarial asistido con IA, orientado a una necesidad real del contexto.",
    "estrategia": "Proyecto empresarial integrado + feria o tribunal MILC",
    "focoDiseno": "investigar usuario, diseñar solución, integrar presencia digital, datos, dashboard, automatización, documentación y pitch",
    "productoFinal": "Solución empresarial integrada con problema, usuario, sitio, datos, dashboard, automatización, documentación, pitch y reflexión ética sobre IA.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Definición del problema o necesidad empresarial, comercial o contable",
      "Investigación del usuario, cliente o comunidad beneficiaria",
      "Diseño de la solución — producto, servicio, proceso o sistema de apoyo",
      "Integración del sitio web o presencia digital",
      "Integración de datos — encuesta, ventas simuladas, costos, inventario o indicadores",
      "Dashboard o reporte final con IA",
      "Automatización o mejora de proceso",
      "Documentación técnica y comercial del proyecto",
      "Preparación del pitch — argumento, evidencia, impacto, costos y sostenibilidad",
      "Sustentación final — feria empresarial o tribunal MILC"
    ],
    "conceptosClave": "Tema Central: Proyecto Final Empresarial Asistido con IA",
    "competencias": "Proyecto empresarial integrado asistido con IA. Diseño de soluciones, datos, dashboard, automatización y documentación. Pitch, sustentación pública, impacto, costos y sostenibilidad.",
    "desempenoCognitivo": "Integra problema, usuario, cliente, propuesta de solución, presencia digital, datos, indicadores, dashboard, automatización, documentación técnica-comercial, costos, impacto, sostenibilidad y pitch empresarial asistido con IA.",
    "desempenoProcedimental": "Define un problema, investiga usuarios, diseña una solución, integra sitio web, base de datos, dashboard y automatización, documenta el proyecto, prepara el pitch y sustenta decisiones con evidencia, costos, riesgos e impacto.",
    "desempenoActitudinal": "Ejerce liderazgo ético, escucha al usuario real y decide con evidencia. Reconoce límites de la IA, trabaja con responsabilidad, atiende la sostenibilidad del proyecto y defiende su solución con transparencia y sentido de servicio.",
    "fases": [
      {
        "nombre": "Fase 1 · Escuta y empatía",
        "proposito": "Escuchar el contexto, reconocer una necesidad real y formular un problema que valga la pena trabajar. Esta fase puede incluir entrevistas, observación, encuesta breve o revisión de evidencias."
      },
      {
        "nombre": "Fase 2 · Sistematización e investigación",
        "proposito": "Organizar información, conceptos y evidencias para comprender el problema con rigor. Aquí se conectan los aprendizajes del periodo con datos, ejemplos, fuentes o pruebas."
      },
      {
        "nombre": "Fase 3 · Praxis, diseño y prototipo",
        "proposito": "Pasar de la idea a la acción. El equipo diseña, experimenta, prototipa o produce una evidencia concreta que pueda revisarse y mejorarse."
      },
      {
        "nombre": "Fase 4 · Evaluación liberadora",
        "proposito": "La evaluación liberadora pregunta qué aprendimos, a quién sirve lo producido y qué responsabilidad asumimos frente a la tecnología, la comunidad y la infoesfera."
      }
    ],
    "entregables": [
      "Ficha de problema y pregunta de proyecto",
      "Evidencias de escuta: entrevista, encuesta, observación o registro",
      "Sistematización: conceptos, datos, fuentes o criterios",
      "Producto final o prototipo"
    ],
    "rubrica": [
      {
        "criterio": "Problema y escuta",
        "nivel5": "Problema real y bien sustentado.",
        "nivel3": "Problema comprensible con poca evidencia.",
        "nivel1": "Problema confuso o sin contexto."
      },
      {
        "criterio": "Sistematización",
        "nivel5": "Organiza conceptos y evidencias con rigor.",
        "nivel3": "Presenta información básica.",
        "nivel1": "Desordena o no conecta información."
      },
      {
        "criterio": "Praxis y producto",
        "nivel5": "Producto útil, probado y mejorado.",
        "nivel3": "Producto funcional con ajustes pendientes.",
        "nivel1": "Producto incompleto o poco pertinente."
      },
      {
        "criterio": "Comunicación",
        "nivel5": "Sustenta con claridad y evidencia.",
        "nivel3": "Explica parcialmente.",
        "nivel1": "No logra justificar decisiones."
      },
      {
        "criterio": "Evaluación liberadora",
        "nivel5": "Reflexiona sobre impacto y responsabilidad.",
        "nivel3": "Reflexiona de forma general.",
        "nivel1": "No relaciona el proyecto con la comunidad."
      }
    ]
  }
];

export function getProyecto(grado: number, periodo: number): Proyecto | undefined {
  return proyectos.find(p => p.grado === grado && p.periodo === periodo);
}
