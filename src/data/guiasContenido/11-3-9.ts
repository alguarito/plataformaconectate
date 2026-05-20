/**
 * Contenido enriquecido para Grado 11 · Período 3 · Sesión 9
 * (sesión global 29).
 *
 * Auto-generado desde content/guias/11/11-3-9.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 11,
  periodo: 3,
  sesion: 9,
  titulo: 'Versión final del MVP',
  resumen: 'La versión final del MVP es exactamente la firma del aprendiz aplicada al oficio digital.',
  duracionMin: 90,
  subtema: 'Versión final del MVP',
  preLectura: {
    porQueImporta: 'El criterio principal: que el aprendiz pueda decir con sinceridad "firmo este proyecto y lo defiendo" ante cualquier audiencia.',
    preguntaDetonante: '¿Qué sabía el aprendiz al firmar su primera pieza ante el maestro, que el emprendedor novato olvida cuando entrega versión final sin aplicar los hallazgos? ¿Y por qué la firma es más exigente que el diseño, en cualquier oficio antiguo o contemporáneo?',
    activacion: {
      titulo: 'Inventario de ajustes pendientes por aplicar',
      descripcion: 'Actividad 1 · ANALIZA — Inventario de ajustes pendientes por aplicar (15 min · individual).',
      duracionMin: 10
    },
    conexion: {
      anterior: 'Hoy es el penúltimo paso: integrar todo.',
      siguiente: 'Llega con el MVP versión final, bitácora, checklist verificado y carta abierta firmada.'
    }
  },
  conceptosClave: [
    {
      termino: 'Versión final del MVP',
      definicion: 'Integración de TODOS los aprendizajes del periodo en la versión definitiva del MVP. Aplica las correcciones de la S5 (datos), ajustes de la S7 (presupuesto), compromisos de la S8 (ética).',
      ejemplo: 'V1 falló por precio alto. Ajustaste a $25K (S5). V2 no cubría costos. Subiste plan anual (S7). V3 excluía sin-smartphone. Agregaste versión SMS (S8). V4 = versión final integrando todo.',
      emoji: '🎯'
    },
    {
      termino: 'Bitácora de cambios',
      definicion: 'Documento que registra cada ajuste hecho al MVP, con su razón y referencia a la sesión que lo motivó. Permite trazabilidad y aprendizaje futuro: ¿por qué decidí esto?',
      ejemplo: '"Cambio: precio $30K → $25K. Razón: datos S5 mostraron mayoría aceptaba $25K. Referencia: tabla de datos sesión 5. Fecha: 10 mayo 2026".',
      emoji: '📓'
    },
    {
      termino: 'Checklist de calidad (12 puntos)',
      definicion: 'Lista verificable de 12 puntos de calidad a revisar antes de declarar la versión final: funcionalidad básica, accesibilidad, privacidad, performance, etc.',
      ejemplo: '12 puntos típicos: (1) funciona en móvil, (2) carga <3s, (3) política privacidad visible, (4) términos visible, (5) email funcional, (6) sin bugs críticos, (7-12) específicos del proyecto.',
      emoji: '✓'
    },
    {
      termino: 'Carta abierta firmada',
      definicion: 'Documento de 1 página donde el aprendiz declara qué construyó, por qué, qué aprendió, y qué está dispuesto a defender públicamente. Firmar con nombre y fecha implica responsabilidad real.',
      ejemplo: '"Yo, María Cárdenas, declaro haber construido [proyecto] entre febrero y mayo de 2026. Su propósito es [X]. Aprendí que [Y]. Defiendo públicamente este proyecto. Firmado. María Cárdenas, 19 mayo 2026."',
      emoji: '✒️'
    },
    {
      termino: 'Integración de aprendizajes',
      definicion: 'La versión final NO es solo el último prototipo: es la síntesis de aprendizajes de los 10 sesiones. Cada decisión del proyecto se rastrea a una sesión específica.',
      ejemplo: 'Decisión: precio $25K. Origen: datos S5. Decisión: pagar plan anual. Origen: análisis presupuesto S7. Cada elemento tiene rastro de qué sesión lo justifica.',
      emoji: '🧩'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes integrar aprendizajes en la versión final?',
      instrucciones: '5 preguntas sobre la versión final del MVP.',
      preguntas: [
        {
          enunciado: 'Tu versión final del MVP es...',
          opciones: [
            'Solo el último prototipo.',
            'Síntesis de aprendizajes de las 10 sesiones, con cada decisión rastreada a su sesión origen.',
            'Una nueva idea distinta.',
            'Una copia del primero.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Síntesis con trazabilidad. Cada decisión tiene rastro a la sesión que la motivó. Eso convierte el MVP en versión INTEGRADA, no solo iteración.',
          feedbackIncorrecto: 'Versión final = síntesis integrada de los 10 aprendizajes. Cada decisión rastreada. Sin esa integración, es solo otro prototipo.'
        },
        {
          enunciado: '¿Para qué sirve la bitácora de cambios?',
          opciones: [
            'Para parecer organizado.',
            'Para registrar qué cambió, por qué, y referencia a la sesión. Permite trazabilidad y aprendizaje futuro.',
            'Para llenar páginas.',
            'Solo para impresionar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Bitácora = memoria razonada del proyecto. Sin ella, en 6 meses no recuerdas por qué decidiste algo. Con ella, defiendes cada decisión.',
          feedbackIncorrecto: 'Bitácora = trazabilidad. Cambio + razón + referencia a sesión. Sin esto, en 3 meses no defiendes tu proyecto porque olvidaste el porqué.'
        },
        {
          enunciado: 'Tu MVP pasó el checklist de 12 puntos. ¿Está listo?',
          opciones: [
            'Sí, listo para sustentar.',
            'Casi: falta la carta abierta firmada como cierre.',
            'No, falta meses.',
            'Mejor empiezo de cero.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Checklist + carta abierta firmada. La carta es el compromiso público; sin ella, el proyecto no está cerrado formalmente.',
          feedbackIncorrecto: 'Checklist + carta firmada. La carta implica que defiendes públicamente. Sin firma, queda en buenas intenciones, no compromiso.'
        },
        {
          enunciado: 'Tu carta abierta debe decir... (escoge lo más completo)',
          opciones: [
            'Solo el nombre del proyecto.',
            'Qué construí, por qué, qué aprendí, qué defiendo públicamente. Firmado con nombre y fecha.',
            'Solo agradecimientos.',
            'Solo el slogan.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. 4 elementos: qué + por qué + aprendí + defiendo. Firma con nombre y fecha. La carta es declaración pública de autoría.',
          feedbackIncorrecto: 'Carta abierta = qué + por qué + aprendí + defiendo + firma. Sin esos elementos, es decoración. Con ellos, declaración pública de responsabilidad.'
        },
        {
          enunciado: 'Decides agregar una función nueva en V4 sin registrarla en bitácora. ¿Qué pasa después?',
          opciones: [
            'Nada, da igual.',
            'En 1 mes no recordarás por qué la agregaste. Si falla, no sabes a qué decisión revertir. La bitácora es memoria operativa.',
            'Te dan más nota.',
            'Es mejor improvisar.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Bien. Sin bitácora, pierdes razón de las decisiones. La bitácora es disciplina adulta de profesional, no burocracia.',
          feedbackIncorrecto: 'Sin bitácora, las decisiones se vuelven misterios. Cada cambio + razón + sesión origen. Es 30 segundos por decisión que te ahorra horas de re-aprendizaje.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Estoy dispuesto a poner mi nombre real y mi fecha real en la carta abierta? ¿O quisiera firmar bajo seudónimo para no asumir la responsabilidad?',
    transferencia: 'Llega con el MVP versión final, bitácora, checklist verificado y carta abierta firmada.',
    cierre: 'Al terminar podrás: (1) analizar qué hallazgos del periodo (S5 datos, S7 finanzas, S8 ética) exigen ajustes concretos en el MVP; (2) evaluar cada cambio aplicado con un checklist de calidad de 12 puntos; (3) crear la versión final del MVP con todos los ajustes aplicados, document…'
  },
  saberAncestral: {
    saber: 'En los talleres antiguos del Valle del Cauca y en la tradición de los oficios europeos importada al continente, había un acto ritual que marcaba el paso de aprendiz a oficial: firmar la pieza. El ebanista joven que llevaba tres años de aprendizaje no se llamaba todavía maestro: era aprendiz. El día que terminaba su primera pieza completa (una mesa, un armario, una silla), el maestro examinaba el trabajo durante una semana: revisaba uniones, lijado, ensamblaje, terminaciones. Si la pieza pasaba el examen, el maestro le permitía al aprendiz grabar su nombre en la base con un punzón. Esa firma era el acto público del oficio: significaba que el aprendiz se hacía responsable de la pieza para siempre, ante cualquier cliente, ante cualquier defecto futuro. Firmar implicaba 3 compromisos: (1) defender la pieza ante cualquier crítica; (2) repararla si fallaba; (3) mantener el nombre limpio en el siguiente trabajo. El aprendiz que rehusaba firmar no era llamado humilde: era llamado inseguro, y el maestro lo mandaba a rehacer la pieza hasta que pudiera firmarla con orgullo. La firma era el verdadero examen, no el diseño.',
    preguntaPuente: '¿Qué sabía el aprendiz al firmar su primera pieza ante el maestro, que el emprendedor novato olvida cuando entrega versión final sin aplicar los hallazgos? ¿Y por qué la firma es más exigente que el diseño, en cualquier oficio antiguo o contemporáneo?'
  },
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel',
      lente: 'lente del nosotros',
      cita: 'Firmar un proyecto es asumir al usuario como prójimo, no como cliente abstracto.',
      preguntaEspejo: '¿Estoy dispuesto a poner mi nombre real y mi fecha real en la carta abierta? ¿O quisiera firmar bajo seudónimo para no asumir la responsabilidad?'
    },
    estoico: {
      autor: 'Marco Aurelio',
      lente: 'lente del cuidado interior',
      cita: 'El oficio bien hecho es la única firma que dura; los atajos firman con tinta que se borra.',
      preguntaEspejo: 'Si alguien revisara mi MVP punto por punto contra mis 3 últimas entregas, ¿encontraría coherencia entre lo prometido y lo hecho?'
    },
    floridi: {
      autor: 'Luciano Floridi',
      lente: 'lente de la infoesfera',
      cita: 'Firmar digitalmente con responsabilidad es la nueva forma de la autoría ética en la infosfera.',
      preguntaEspejo: '¿Mi carta firmada me identifica como autor responsable o me diluye en lenguaje impersonal que esconde quién decide qué?'
    }
  },
  cincoDimensiones: {
    personal: 'Al terminar podrás: (1) analizar qué hallazgos del periodo (S5 datos, S7 finanzas, S8 ética) exigen ajustes concretos en el MVP; (2) evaluar cada cambio aplicado con un checklist de calidad de 12 punt…',
    emocional: 'Es tentador firmar la versión final sin haber aplicado los ajustes, esperando que la audiencia no se dé cuenta.',
    ciudadana: 'Cuando firmas con nombre y fecha, declaras públicamente que tu proyecto tiene una persona responsable detrás, no una entidad anónima.',
    local: 'Antes de cerrar, mira la versión final desde las cinco dimensiones humanas.',
    intergeneracional: 'En la era de la información, los proyectos digitales suelen ser anónimos o colectivos diluidos; identificar al autor es ya un acto de ética.'
  }
};

export default contenido;
