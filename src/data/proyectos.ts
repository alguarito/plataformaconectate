// Auto-generado desde PROYECTOS/tex/*.tex (NO editar a mano)
// Total: 18 proyectos (3 períodos × 6 grados)

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
    "grado": 10,
    "periodo": 1,
    "pdf": "proyecto-1-10-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Gestiona la ética digital corporativa y utiliza herramientas de productividad profesional",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: guía técnica de mantenimiento preventivo.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Ciberseguridad avanzada I: amenazas en la red — ransomware, suplantación de identidad, ingeniería social",
      "Ciberseguridad avanzada II: análisis de casos éticos sobre el uso de datos masivos (Big Data)",
      "Ataraxia digital: mantener el equilibrio mental ante incidentes de seguridad — resiliencia estoica",
      "Productividad avanzada I: herramientas de gestión de proyectos — Trello/Asana/Notion",
      "Productividad avanzada II: manejo corporativo del correo — respuestas automáticas, listas de distribución",
      "Documentos colaborativos avanzados: gestión de flujos de trabajo en la nube para proyectos complejos",
      "Firmas digitales y certificados electrónicos — autenticación y no repudio en entornos profesionales",
      "Taller de gestión: planificación de un proyecto tecnológico con herramientas de productividad",
      "Proyecto MILC: diagnóstico de ciberseguridad institucional con propuestas de mejora ética",
      "Evaluación de competencias en ética digital y gestión corporativa"
    ],
    "conceptosClave": "Tema Central: Ciberseguridad Avanzada, Big Data y Gestión del Carácter Estoico",
    "competencias": "Ciberseguridad corporativa y ética del dato. Gestión de proyectos con herramientas profesionales. Ataraxia digital y resiliencia ante incidentes de seguridad.",
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
    "grado": 11,
    "periodo": 1,
    "pdf": "proyecto-1-11-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Desarrolla sitios web profesionales y gestiona su presencia digital en la infoesfera",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: sitio o micrositio informativo sobre una problemática social.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Fundamentos del desarrollo web: estructura del documento HTML5 — etiquetas semánticas",
      "HTML5 I: texto, listas, enlaces e imágenes — estructura y jerarquía de contenidos",
      "HTML5 II: tablas, formularios y elementos multimedia — accesibilidad web básica",
      "CSS3 I: selectores, propiedades y modelo de caja — estilos y maquetación",
      "CSS3 II: diseño responsivo, Flexbox y media queries — usabilidad móvil",
      "Tema central del periodo: HTML5, CSS3, CMS y Marketing Digital — Arquitectura de Sentido",
      "Marketing digital I: SEO básico — optimización para motores de búsqueda",
      "Tema central del periodo: HTML5, CSS3, CMS y Marketing Digital — Arquitectura de Sentido",
      "Tema central del periodo: HTML5, CSS3, CMS y Marketing Digital — Arquitectura de Sentido",
      "Tema central del periodo: HTML5, CSS3, CMS y Marketing Digital — Arquitectura de Sentido"
    ],
    "conceptosClave": "Tema Central: HTML5, CSS3, CMS y Marketing Digital — Arquitectura de Sentido",
    "competencias": "Desarrollo web front-end con estándares W3C. Gestión de sistemas de contenidos y presencia digital profesional. Marketing digital ético como extensión de la identidad del inforg.",
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
    "grado": 6,
    "periodo": 1,
    "pdf": "proyecto-1-6-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Reconoce principios y conceptos propios de la tecnología, relacionando artefactos con su utilización segura",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: diagnóstico escolar de conectividad o comunicación.",
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
      "Socialización de hallazgos y evaluación de periodo — portafolio digital del inforg"
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
    "grado": 7,
    "periodo": 1,
    "pdf": "proyecto-1-7-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Domina herramientas de trabajo colaborativo como práctica de liderazgo servicial en la nube",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: script o notebook de análisis aplicado a una problemática social.",
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
    "grado": 8,
    "periodo": 1,
    "pdf": "proyecto-1-8-TIC.pdf",
    "retoCentral": "Usar datos reales para comprender un problema escolar o comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Organiza y procesa datos numéricos para resolver problemas cotidianos mediante hojas de cálculo",
    "estrategia": "Aprendizaje basado en datos + experimento escolar",
    "focoDiseno": "recolectar datos, organizarlos, analizarlos y tomar decisiones con evidencia",
    "productoFinal": "Informe con tablas, gráficos y recomendación basada en datos. Puede dialogar con el producto antiguo sugerido: informe de análisis de datos con tablas y gráficos.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
      "Tipos de datos y formato de celdas — ingreso y organización de información numérica",
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
      "Funciones estadísticas: SUMA, PROMEDIO, MAX, MIN — aplicaciones en datos reales del entorno",
      "Referencias relativas y absolutas — anclaje de celdas para cálculos complejos",
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
      "Formato condicional y validación de datos — presentación profesional de información",
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis",
      "Tema central del periodo: Excel Básico y Fórmulas — Análisis de Datos con Phronesis"
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
    "grado": 9,
    "periodo": 1,
    "pdf": "proyecto-1-9-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Analiza la evolución tecnológica y aplica normas técnicas para la documentación de proyectos",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: boletín digital de orientación comunitaria.",
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
    "grado": 10,
    "periodo": 2,
    "pdf": "proyecto-2-10-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Comprende la arquitectura avanzada de hardware y ejecuta mantenimiento preventivo autónomo",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: guía técnica de mantenimiento preventivo.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Arquitectura de computadores I: estudio detallado de la placa base, chipset y buses de datos",
      "Arquitectura de computadores II: tipos de memoria (RAM, ROM, caché) y jerarquía de almacenamiento",
      "Configuración de BIOS/UEFI: parámetros de arranque, secuencia de booteo y diagnóstico",
      "Mantenimiento preventivo I: protocolos de limpieza de hardware — herramientas y procedimientos",
      "Mantenimiento preventivo II: optimización de software — desfragmentación, limpieza, gestión de inicio",
      "Diagnóstico de fallas comunes: metodología sistemática de identificación y resolución de problemas",
      "Instalación de software I: gestión de licencias, tipos de instalación y dependencias",
      "Instalación de software II: sistemas operativos en máquinas virtuales (VirtualBox) y configuración de drivers",
      "Proyecto MILC: guía técnica de mantenimiento para la sala de sistemas — autarquía técnica",
      "Evaluación práctica de competencias en arquitectura y mantenimiento de sistemas"
    ],
    "conceptosClave": "Tema Central: Arquitectura de Computadores, BIOS/UEFI y Autarquía Técnica",
    "competencias": "Arquitectura avanzada de sistemas computacionales. Autonomía técnica en instalación y configuración de software. Diagnóstico sistemático de fallas con metodología ingenieril.",
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
    "grado": 11,
    "periodo": 2,
    "pdf": "proyecto-2-11-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Aplica estándares de gestión de calidad ISO y normativa ético-legal en proyectos tecnológicos",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: diagnóstico de proceso con propuesta de mejora.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Gestión de calidad I: introducción a ISO 9001 — principios del SGC y enfoque en procesos",
      "Gestión de calidad II: ISO 21001 aplicada a organizaciones educativas — calidad como hábito virtuoso",
      "Ciclo PDCA aplicado: Planear — definición de objetivos SMART y análisis de riesgos (phronesis)",
      "Ciclo PDCA aplicado: Hacer — desarrollo siguiendo estándares técnicos y éticos (coraje/justicia)",
      "Ciclo PDCA aplicado: Verificar — auditorías de pares y validación con usuario real (humildad)",
      "Ciclo PDCA aplicado: Actuar — documentación de lecciones aprendidas y rediseño (templanza)",
      "Marco legal: Ley 1581 de 2012 — protección de datos personales en proyectos tecnológicos",
      "Sostenibilidad y economía circular: diseño de productos considerando ciclo de vida e impacto ambiental",
      "Plan de negocios digital: viabilidad financiera — costos, ingresos y proyecciones de crecimiento",
      "Evaluación de competencias en gestión de calidad y normatividad ético-legal"
    ],
    "conceptosClave": "Tema Central: ISO 9001/21001, Ciclo PDCA, Ley 1581 y Economía Circular",
    "competencias": "Gestión de calidad como hábito de excelencia — areté estoica. Marco legal de protección de datos y responsabilidad digital. Sostenibilidad ambiental e innovación social mediada por tecnología.",
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
    "grado": 6,
    "periodo": 2,
    "pdf": "proyecto-2-6-TIC.pdf",
    "retoCentral": "Crear un producto computacional que resuelva una necesidad o comunique una idea.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Reconoce la estructura física y lógica de un sistema computacional como arquitectura de la infoesfera local",
    "estrategia": "PRIMM + prototipado por bloques",
    "focoDiseno": "predecir, ejecutar, investigar, modificar y crear una solución interactiva",
    "productoFinal": "Prototipo funcional, simulación o experiencia interactiva documentada. Puede dialogar con el producto antiguo sugerido: guía técnica de mantenimiento preventivo.",
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
    "grado": 7,
    "periodo": 2,
    "pdf": "proyecto-2-7-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Desarrolla pensamiento algorítmico mediante programación visual por bloques aplicando el modelo PRIMM",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: algoritmo o diagrama de solución para un problema escolar o comunitario.",
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
    "grado": 8,
    "periodo": 2,
    "pdf": "proyecto-2-8-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Resuelve problemas mediante programación estructurada avanzada y computación física",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: guía técnica de mantenimiento preventivo.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Lógica avanzada I: estructuras condicionales anidadas (if-else-if) — operadores lógicos AND/OR/NOT",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Sensores básicos: luz, temperatura — activación de eventos mediante código en MakeCode",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal",
      "Proyecto MILC: sistema de monitoreo ambiental con sensores simulados — Logos como razón universal",
      "Tema central del periodo: Lógica de Control y Computación Física — El Logos Universal"
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
    "grado": 9,
    "periodo": 2,
    "pdf": "proyecto-2-9-TIC.pdf",
    "retoCentral": "Investigar un problema técnico del entorno y proponer una respuesta verificable.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Diseña publicaciones digitales y comprende los principios de redes e interconexión",
    "estrategia": "Aprendizaje experiencial + laboratorio técnico",
    "focoDiseno": "observar, diagnosticar, experimentar, registrar evidencias y proponer mejoras",
    "productoFinal": "Diagnóstico técnico, protocolo de cuidado o mapa de sistema con evidencias. Puede dialogar con el producto antiguo sugerido: diagnóstico escolar de conectividad o comunicación.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Diseño editorial digital I: fundamentos de autoedición — folletos y boletines informativos",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
      "Principios de redes I: concepto de emisor, receptor y canal — cómo funciona la radio y el Wi-Fi",
      "Principios de redes II: Bluetooth, protocolos básicos de comunicación — arquitectura de red simple",
      "Simulador de redes (Filius): construcción de arquitecturas de red virtuales — configuración de IP",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia",
      "Tema central del periodo: Diseño Editorial, Redes y Simulación — La Infoesfera como Coexistencia"
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
    "grado": 10,
    "periodo": 3,
    "pdf": "proyecto-3-10-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Programa en Python para análisis de datos y diseña emprendimientos tecnológicos con valor humano",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: script o notebook de análisis aplicado a una problemática social.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Tema central del periodo: Python, Pandas y Modelo CANVAS — Emprendimiento como Justicia",
      "Algoritmia II: estructuras de control en pseudocódigo — secuencia, selección, iteración",
      "Tema central del periodo: Python, Pandas y Modelo CANVAS — Emprendimiento como Justicia",
      "Python I: estructuras condicionales y bucles — resolución de problemas matemáticos",
      "Python II: funciones, listas y diccionarios — organización modular del código",
      "Tema central del periodo: Python, Pandas y Modelo CANVAS — Emprendimiento como Justicia",
      "Emprendimiento I: Modelo CANVAS — segmento de clientes, propuesta de valor, canales",
      "Emprendimiento II: investigación de mercados con formularios digitales — validación de ideas locales",
      "Proyecto MILC: prototipo de solución tecnológica con análisis de datos en Python — justicia social",
      "Tema central del periodo: Python, Pandas y Modelo CANVAS — Emprendimiento como Justicia"
    ],
    "conceptosClave": "Tema Central: Python, Pandas y Modelo CANVAS — Emprendimiento como Justicia",
    "competencias": "Algoritmia y programación estructurada en lenguaje de alto nivel. Análisis de datos con Pandas para toma de decisiones basada en evidencia. Emprendimiento tecnológico con propósito social y justicia dusseliana.",
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
    "grado": 11,
    "periodo": 3,
    "pdf": "proyecto-3-11-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Integra todos los saberes en un proyecto final de innovación transmoderna con impacto social",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: propuesta formal de solución tecnológica comunitaria.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Proyecto final I: definición del problema social/comunitario — Escuta analéctica con la comunidad",
      "Proyecto final II: investigación y fundamentación teórica — sistematización de hallazgos",
      "Proyecto final III: diseño de la solución tecnológica — integración de programación, datos y diseño",
      "Proyecto final IV: desarrollo del prototipo funcional — aplicación del ciclo PDCA",
      "Proyecto final V: documentación técnica completa — manual de usuario y documentación de código",
      "Proyecto final VI: pruebas de usabilidad y validación con usuarios reales — enfoque al cliente",
      "Proyecto final VII: iteración y mejora basada en retroalimentación — fortaleza estoica",
      "Tema central del periodo: Proyecto Final de Innovación — Síntesis: Liberación, Infoesfera y Virtud",
      "Tema central del periodo: Proyecto Final de Innovación — Síntesis: Liberación, Infoesfera y Virtud",
      "Debates éticos contemporáneos: singularidad tecnológica, biotecnología y ciudadanía onlife global — cierre del ciclo formativo"
    ],
    "conceptosClave": "Tema Central: Proyecto Final de Innovación — Síntesis: Liberación, Infoesfera y Virtud",
    "competencias": "Innovación tecnológica integral con estándares profesionales. Documentación técnica y comunicación audiovisual avanzada. Liderazgo ético y ciudadanía onlife global — síntesis del inforg consciente.",
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
    "grado": 6,
    "periodo": 3,
    "pdf": "proyecto-3-6-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Produce contenidos digitales y valida información de fuentes web aplicando criterios de soberanía informacional",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: boletín digital de orientación comunitaria.",
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
    "periodo": 3,
    "pdf": "proyecto-3-7-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Comprende los fundamentos de la IA y reflexiona críticamente sobre el impacto ambiental de la tecnología",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: informe crítico sobre uso social de IA en el entorno.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Introducción a la Inteligencia Artificial: definición, historia y ejemplos cotidianos",
      "Cómo aprenden las máquinas: Machine Learning básico — datos, patrones y predicciones",
      "Sesgos algorítmicos: análisis crítico de algoritmos de recomendación en redes sociales",
      "Ética y tecnología: impacto de la IA en el empleo, la privacidad y la equidad social",
      "Instrumento de trabajo para el estudiante",
      "Instrumento de trabajo para el estudiante",
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
    "periodo": 3,
    "pdf": "proyecto-3-8-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Crea contenidos multimedia y desarrolla conciencia crítica sobre seguridad en la red",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: campaña escolar de ciberseguridad.",
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
      "Sustentación pública y evaluación final — portafolio digital y bitácora estoica"
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
    "periodo": 3,
    "pdf": "proyecto-3-9-TIC.pdf",
    "retoCentral": "Diseñar y sustentar una solución tecnológica con impacto social, ético y comunitario.",
    "autor": "Dr. Álvaro Cárdenas Orozco",
    "dba": "Gestiona datos con funciones avanzadas de Excel y formula proyectos tecnológicos comunitarios",
    "estrategia": "Design Thinking + Aprendizaje Basado en Proyectos",
    "focoDiseno": "empatizar con usuarios reales, definir un reto, idear, prototipar y validar",
    "productoFinal": "Prototipo, propuesta técnica o solución tecnológica con validación social. Puede dialogar con el producto antiguo sugerido: algoritmo o diagrama de solución para un problema escolar o comunitario.",
    "sentido": "Este proyecto cierra el periodo mediante una experiencia activa. No se trata de repetir contenidos, sino de convertir los aprendizajes en una respuesta útil, visible y argumentada ante una necesidad escolar, comunitaria o digital.",
    "aprendizajes": [
      "Excel intermedio I: funciones de búsqueda BUSCARV y BUSCARH — sintaxis y aplicación",
      "Excel intermedio II: funciones lógicas avanzadas — SI anidado, Y, O, SI.ERROR",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
      "Gráficos estadísticos I: barras, líneas y circulares — selección del tipo adecuado según los datos",
      "Gráficos estadísticos II: dispersión y combinados — interpretación de tendencias y patrones",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
      "Tema central del periodo: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible"
    ],
    "conceptosClave": "Tema Central: Excel Intermedio, Gráficos y Proyecto Tecnológico — La Utopía Factible",
    "competencias": "Análisis avanzado de datos con funciones y tablas dinámicas. Visualización estadística e interpretación de tendencias. Formulación de proyectos tecnológicos con impacto social.",
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
  }
];

export function getProyecto(grado: number, periodo: number): Proyecto | undefined {
  return proyectos.find((p) => p.grado === grado && p.periodo === periodo);
}
