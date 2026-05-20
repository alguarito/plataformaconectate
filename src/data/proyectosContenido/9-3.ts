/**
 * Contenido web del proyecto integrador · Grado 9 · Período 3
 *
 * Auto-generado desde content/proyectos/9-3.yaml por
 * scripts/build-proyectos-web-ts.py. Edita el YAML, no este archivo.
 *
 * Modelo MILC v3 entregable-céntrico: 3-5 entregables con reflexión
 * incrustada del triángulo (Dussel/Estoico/Floridi).
 */
import type { ContenidoProyecto } from './_schema';

const contenido: ContenidoProyecto = {
  grado: 9,
  periodo: 3,
  clave: '9-3',
  titulo: 'Proyecto integrador · Mini-estudio de datos del entorno con phronesis',
  tituloPortada: 'Mini-estudio de datos del entorno escolar',
  autor: 'Dr. Álvaro Cárdenas Orozco',
  dba: 'Diseña, recolecta y limpia datos del entorno escolar, los analiza con fórmulas y tablas dinámicas, los visualiza honestamente y propone una decisión razonada con insight accionable.',
  estrategia: 'Recolección con propósito + Limpieza + Análisis + Visualización honesta + Insight accionable',
  duracionSemanas: 5,
  modalidad: 'equipo',
  reto: 'Realiza un mini-estudio de datos sobre un problema observable de tu colegio o barrio (consumo de agua, uso de la biblioteca, hábitos de estudio, tráfico peatonal, basuras, etc.). Recoge mínimo 30 mediciones reales, límpialas, analízalas con fórmulas y tabla dinámica, visualízalas honestamente (sin trampas) y entrega un reporte con 1 insight accionable dirigido a una autoridad real del entorno.',
  insumos: [
    'Google Sheets o LibreOffice Calc para hoja de cálculo',
    'Plantilla de recolección de datos (la entrega el docente)',
    'Validador de gráficos honestos: checklist de 5 principios',
    'Cuenta de Google Drive para compartir la hoja',
    'Acceso a IA (Claude/Gemini/ChatGPT) para análisis cualitativo si las respuestas son abiertas',
    'Destinatario real identificado del entorno (rectoría, junta de acción comunal, padres de familia)'
  ],
  anclaje: 'En los graneros del campo del Valle del Cauca trabajó durante décadas el contador de cosechas: un hombre o mujer mayor que llevaba un cuaderno cuadriculado donde anotaba, semana a semana, kilos de café cosechados, sacos vendidos, precios pagados, gastos de jornales. Cuando el patrón preguntaba si valía la pena sembrar café o cambiar a aguacate, el contador no inventaba: abría el cuaderno, recorría con el dedo las cifras, comparaba años, calculaba promedio y presentaba un informe sin adornos. Esa era phronesis con datos: criterio práctico aplicado a cifras concretas. No era estadística académica; era saber del oficio cruzado con la columna sumada. La hoja de cálculo es la versión digital del cuaderno cuadriculado del granero.',
  aprendizajes: [
    {
      sesion: 1,
      titulo: '¿Qué es un dato? Recolección con propósito'
    },
    {
      sesion: 2,
      titulo: 'Tablas y registros: columna como tipo, fila como caso'
    },
    {
      sesion: 3,
      titulo: 'Fórmulas básicas: SUMA, PROMEDIO, MAX, MIN, CONTAR'
    },
    {
      sesion: 4,
      titulo: 'Filtros y orden: hacer preguntas a los datos'
    },
    {
      sesion: 5,
      titulo: 'Tablas dinámicas: agrupar y comparar'
    },
    {
      sesion: 6,
      titulo: 'Gráficos: imagen de los datos según propósito'
    },
    {
      sesion: 7,
      titulo: 'Limpieza de datos: el oficio del archivero'
    },
    {
      sesion: 8,
      titulo: 'Visualización honesta: gráficos que NO mienten'
    },
    {
      sesion: 9,
      titulo: 'Insights: del dato a la decisión razonada'
    },
    {
      sesion: 10,
      titulo: 'Sustentación del mini-estudio'
    }
  ],
  entregables: [
    {
      numero: 1,
      titulo: 'Pregunta de estudio + recolección de 30+ datos reales',
      queEntregas: 'Documento de 1 página con: pregunta de investigación formulada con propósito claro, justificación de por qué importa al entorno, destinatario real identificado (nombre del cargo o persona), plan de recolección (cómo, dónde, cuándo). + Hoja de cálculo con mínimo 30 mediciones reales (no inventadas) recolectadas durante al menos 5 días corridos.',
      comoSeHace: [
        'Definir pregunta de investigación con propósito y destinatario',
        'Diseñar plan de recolección (variable, instrumento, frecuencia)',
        'Recolectar mínimo 30 mediciones en al menos 5 días distintos',
        'Documentar el contexto de cada medición (fecha, hora, lugar, condición)',
        'Mantener los datos crudos en una pestaña separada (no tocar)'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'A quién no medimos y por qué',
        consigna: 'En el documento de 1 página, agrega una sección titulada "A quién no medimos y por qué". Reconoce honestamente qué casos o personas quedaron fuera de tus mediciones (horarios que no pudiste cubrir, lugares a los que no entraste, personas que no quisieron participar, días que no estuviste). Explica el sesgo que esto introduce en el estudio. Esa sección queda en el documento entregado al docente y al destinatario real. La lente del nosotros pregunta por los casos que no entraron al cuaderno cuadriculado.'
      },
      criterios: [
        'Pregunta de investigación con propósito y destinatario claros',
        'Justificación verificable (por qué importa al entorno)',
        '30+ mediciones reales recolectadas en 5+ días corridos',
        'Contexto de cada medición documentado',
        'Sección Dussel publicada en el documento'
      ]
    },
    {
      numero: 2,
      titulo: 'Limpieza + análisis con fórmulas y tabla dinámica',
      queEntregas: 'Hoja de cálculo organizada con: pestaña 1 "datos crudos" (intacta), pestaña 2 "datos limpios" (mayúsculas normalizadas, fechas en formato número, faltantes marcados como N/A, duplicados detectados), pestaña 3 "análisis" (con fórmulas: SUMA, PROMEDIO, MAX, MIN, CONTAR.SI según convenga + tabla dinámica que agrupe por al menos una dimensión). Acompañado de una bitácora de limpieza: 5+ decisiones documentadas (qué dato se corrigió, por qué y cómo).',
      comoSeHace: [
        'Copiar la pestaña cruda y empezar a limpiar en la segunda',
        'Normalizar formatos: fechas, mayúsculas, espacios',
        'Detectar duplicados con Datos > Quitar duplicados',
        'Aplicar fórmulas básicas en la pestaña análisis',
        'Construir tabla dinámica con al menos una dimensión de agrupación'
      ],
      reflexion: {
        lente: 'estoico',
        titulo: 'Lo que decidimos no ocultar en la limpieza',
        consigna: 'En una celda visible de la pestaña "datos limpios" o en una pestaña "Notas", agrega un párrafo titulado "Lo que decidimos no ocultar en la limpieza". Reconoce honestamente qué casos atípicos podrías haber borrado para que el promedio se viera mejor: ¿un valor extremo que te pareció error?, ¿una respuesta que rompía la tendencia esperada? Explica por qué decidiste conservarlos. Esa nota queda en la hoja de cálculo entregada al destinatario, no en privado. El estoico entiende que el contador disciplinado no borra cifras incómodas.'
      },
      criterios: [
        '3 pestañas separadas: crudos, limpios, análisis',
        '5+ decisiones de limpieza documentadas en bitácora',
        'Fórmulas básicas correctamente aplicadas',
        'Tabla dinámica con al menos una dimensión de agrupación',
        'Párrafo estoico publicado en la hoja'
      ]
    },
    {
      numero: 3,
      titulo: 'Reporte con visualización honesta + 1 insight accionable',
      queEntregas: 'Documento de 1-2 páginas con: 1 gráfico principal honesto (verificar 5 principios: eje desde 0, escala consistente, sin 3D, etiquetas legibles, título descriptivo) + 1 tabla resumen + 1 insight accionable (no estadística aislada, sino conclusión + propuesta concreta para el destinatario). Citas de fuentes si las hay, formato profesional.',
      comoSeHace: [
        'Decidir qué gráfico es el más adecuado al tipo de dato y propósito',
        'Construir el gráfico aplicando los 5 principios de honestidad',
        'Validar con un compañero externo al equipo (¿se entiende el gráfico solo?)',
        'Sintetizar tabla resumen con datos clave',
        'Redactar 1 insight accionable: dato + conclusión + propuesta concreta + destinatario'
      ],
      reflexion: {
        lente: 'floridi',
        titulo: 'Mi reporte en la cadena informacional',
        consigna: 'En el reporte, agrega una sección titulada "Mi reporte en la cadena informacional". Reflexiona: ¿qué información agrega tu mini-estudio a la conversación pública del entorno?, ¿enriquece la toma de decisiones del destinatario con datos honestos o solo agrega ruido más?, ¿qué responsabilidad asumes por las cifras que publicas? Esa sección queda dentro del reporte que se entrega al destinatario real, no como anexo escolar. La ética de Floridi va más allá de la corrección estadística: pregunta por el aporte real al entorno.'
      },
      criterios: [
        '1 gráfico principal con los 5 principios de honestidad',
        'Tabla resumen con datos clave',
        '1 insight accionable (dato + conclusión + propuesta concreta)',
        'Formato profesional con citas si las hay',
        'Reflexión Floridi publicada dentro del reporte'
      ]
    },
    {
      numero: 4,
      titulo: 'Sustentación + entrega del reporte al destinatario real + carta de cierre del grado',
      queEntregas: 'Sustentación oral de 4 minutos frente al grupo del colegio + entrega del reporte al destinatario real (rectoría, junta, alcaldía, padres) en formato profesional (papel impreso o correo formal). + Carta de cierre del grado 9° firmada del equipo con compromisos del triángulo y conexión al grado 10°.',
      comoSeHace: [
        'Preparar guion de 4 min siguiendo la estructura sugerida',
        'Ensayar con cronómetro al menos 2 veces',
        'Imprimir o enviar el reporte al destinatario real (no simulado)',
        'Esperar respuesta o acuse de recibo si es por correo',
        'Escribir carta de cierre con compromisos verificables del triángulo'
      ],
      reflexion: {
        lente: 'dussel',
        titulo: 'Compromisos del equipo investigador',
        consigna: 'En la carta de cierre del grado 9°, dedica un párrafo a cada lente del triángulo como compromisos verificables, no retóricos. Por Dussel: a qué grupo del entorno que no medimos en este estudio nos comprometemos a integrar si hay una v2. Por el estoico: qué disciplina personal sostendremos como analistas (no inflar conclusiones, no truncar ejes, no maquillar promedios). Por Floridi: qué información honesta seguiremos publicando sobre el seguimiento del estudio (si el destinatario actuó, si funcionó). Cada uno con decisión concreta y fechada.'
      },
      criterios: [
        'Sustentación de 4 min exactos cronometrados',
        'Reporte entregado realmente al destinatario (no simulado)',
        'Documentación del envío (foto, screenshot del correo)',
        'Carta de cierre con compromisos verificables del triángulo',
        'Demo: muestra el gráfico, la tabla y el insight'
      ]
    }
  ],
  rubrica: [
    {
      entregable: 1,
      nivel5: 'Pregunta con propósito, 30+ datos reales, 5+ días, Dussel visible',
      nivel3: 'Pregunta vaga o pocos datos reales',
      nivel1: 'Sin pregunta clara o datos insuficientes'
    },
    {
      entregable: 2,
      nivel5: '3 pestañas, limpieza documentada, fórmulas correctas, tabla dinámica, estoico visible',
      nivel3: 'Limpieza parcial o fórmulas con errores',
      nivel1: 'Sin limpieza o sin análisis con fórmulas'
    },
    {
      entregable: 3,
      nivel5: 'Gráfico honesto con 5 principios, insight accionable, Floridi visible',
      nivel3: 'Gráfico aceptable o insight superficial',
      nivel1: 'Gráfico engañoso (eje truncado) o sin insight'
    },
    {
      entregable: 4,
      nivel5: '4 min exactos, reporte entregado realmente, carta con compromisos triángulo verificables',
      nivel3: 'Sustentación con tiempo descontrolado o reporte no entregado al destinatario',
      nivel1: 'No sustentó o reporte solo simulado'
    },
    {
      entregable: 'global',
      nivel5: 'La pregunta inicial, los datos recolectados, el análisis y el insight dialogan; coherencia total',
      nivel3: 'Coherencia parcial entre las partes',
      nivel1: 'Las partes parecen ejercicios separados sin diálogo',
      titulo: 'Coherencia del mini-estudio: pregunta, datos, análisis e insight'
    }
  ],
  sustentacion: {
    duracionMin: 4,
    guionSugerido: [
      '30 seg · Pregunta de investigación y destinatario real',
      '1 min · Metodología: cómo recolectamos los 30+ datos',
      '1 min · Hallazgo principal con gráfico honesto en pantalla',
      '1 min · Insight accionable: qué proponemos al destinatario',
      '30 seg · Compromisos del triángulo + entrega real del reporte'
    ]
  },
  declaracionIa: 'Tu carta de cierre debe declarar honestamente: (1) si usaron IA para análisis cualitativo (si había respuestas abiertas) y cómo auditaron. (2) cómo verificaron que el gráfico no miente (5 principios revisados). (3) qué decisión analítica tomaron sin IA y por qué. (4) las 3 lentes del triángulo como compromisos verificables y fechados para el grado 10°.',
  cierre: 'Cierras el periodo 3 y, con él, el grado 9°. Lo que llevas no es Excel: es el oficio del contador del granero del Valle actualizado al medio digital. El grado 10° te pedirá esa misma disciplina aplicada a libros, informes profesionales y contabilidad de microemprendimiento. El cuaderno cuadriculado sigue vivo en cada hoja de cálculo bien llevada.',
  pdf: 'proyecto-3-9-TIC.pdf'
};

export default contenido;
