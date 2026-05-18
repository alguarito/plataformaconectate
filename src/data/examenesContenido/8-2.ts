/**
 * Contenido web del examen final · Grado 8 · Período 2
 *
 * Auto-generado desde content/examenes/8-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 8,
  periodo: 2,
  titulo: 'Examen final · Lógica avanzada y computación física con micro:bit',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Lógica avanzada y computación física con micro:bit',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué hace el operador AND?',
        opciones: [
          'Es verdadero si AL MENOS UNA condición es verdadera',
          'Es verdadero solo cuando AMBAS condiciones son verdaderas',
          'Invierte una condición',
          'Suma valores'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. AND es restrictivo: necesita las dos. OR es permisivo: basta una. NOT invierte.',
        feedbackIncorrecto: 'AND exige las dos. Si una falla, AND es falso. Es el operador restrictivo.'
      },
      {
        enunciado: 'Para una tabla de verdad de "A AND B" con 2 entradas binarias, ¿cuántas filas tiene?',
        opciones: [
          '2 filas',
          '4 filas (2 entradas × 2 = 4 combinaciones)',
          '1 fila',
          '8 filas'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Con n entradas binarias hay 2^n combinaciones. 2 entradas = 4 filas (FF, FV, VF, VV).',
        feedbackIncorrecto: '4 filas. Cada entrada binaria duplica las combinaciones. Con 3 entradas hay 8 filas.'
      },
      {
        enunciado: '¿Qué representa un ROMBO en un diagrama de flujo?',
        opciones: [
          'El inicio del proceso',
          'Una decisión: el flujo se bifurca según una condición',
          'El final',
          'Una variable'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Rombo = decisión. Rectángulo = proceso/acción. Óvalo = inicio/fin.',
        feedbackIncorrecto: 'Rombo = decisión. Es donde el flujo se bifurca según condición (sí/no, mayor/menor).'
      },
      {
        enunciado: 'El micro:bit tiene sensor de luz integrado. ¿Qué valor devuelve cuando está en total oscuridad?',
        opciones: [
          'Un valor cercano a 0',
          'Un valor cercano a 255',
          'Un valor cualquiera',
          'No tiene sensor de luz'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. El sensor de luz va de 0 (oscuridad total) a 255 (luz fuerte). Es un rango lineal.',
        feedbackIncorrecto: '0 = oscuridad total. 255 = luz fuerte. El sensor de luz integrado del micro:bit usa esa escala.'
      },
      {
        enunciado: '¿Cuál de estos NO es un actuador típico que puedas conectar a un micro:bit?',
        opciones: [
          'LEDs',
          'Buzzer (parlante)',
          'Servomotor',
          'Sensor de temperatura'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. El sensor de temperatura es ENTRADA, no actuador. Los actuadores son salida: LED, buzzer, servo, etc.',
        feedbackIncorrecto: 'El sensor es entrada. Actuadores son salidas que hacen algo: LED, buzzer, servomotor. Sensor de temperatura es entrada.'
      },
      {
        enunciado: 'Inventas un umbral para tu alarma de luz sin calibrar. La alarma se dispara cuando no debería. ¿Qué problema técnico tienes?',
        opciones: [
          'Ninguno',
          'Umbral inventado sin calibración: produce falsas alarmas porque no corresponde al contexto real',
          'El sensor está roto',
          'El micro:bit está descargado'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Umbral sin calibración = falsas alarmas. La calibración con 5 mediciones reales evita ese error.',
        feedbackIncorrecto: 'Umbral inventado sin calibración. El número correcto se obtiene midiendo en condiciones reales, no escribiendo el primer valor que viene a la cabeza.'
      },
      {
        enunciado: 'Tu programa no funciona y cambias 5 cosas al mismo tiempo. ¿Qué pasa?',
        opciones: [
          'Vas más rápido',
          'No puedes saber qué cambio arregló el problema (si lo arregla) ni qué cambio empeoró otras cosas',
          'El programa va más estable',
          'Es buena práctica'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Cambiar varias cosas a la vez es lo opuesto a depurar. Una hipótesis, una prueba, un resultado.',
        feedbackIncorrecto: 'Sin disciplina de una sola hipótesis a la vez, el cambio que arregla y el que empeora se mezclan. No aprendes nada.'
      },
      {
        enunciado: 'Tu sistema con 3 sensores binarios necesita validarse por escenarios. ¿Cuántos escenarios mínimos hay?',
        opciones: [
          '3 escenarios',
          '8 escenarios (2 × 2 × 2 = 8 combinaciones)',
          '1 escenario',
          'Infinitos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 2^3 = 8 combinaciones posibles con 3 entradas binarias. Validación exige cubrir las 8.',
        feedbackIncorrecto: '8 escenarios. Con n entradas binarias hay 2^n combinaciones. Validar por escenarios significa cubrirlas todas.'
      },
      {
        enunciado: 'Tu vigía de inundación funciona perfecto en pruebas controladas, pero después de 2 días reales en autónomo da falsas alarmas. ¿Qué haces?',
        opciones: [
          'Borrar el proyecto',
          'Revisar log de mediciones para encontrar el patrón, recalibrar el umbral con datos del mundo real',
          'Quitar el sensor',
          'Cambiar de proyecto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El mundo real revela problemas que las pruebas controladas no muestran. Recalibrar con datos reales es el oficio.',
        feedbackIncorrecto: 'Revisar logs + recalibrar. El mundo real es el laboratorio final; los umbrales se ajustan con sus datos.'
      },
      {
        enunciado: 'En la sustentación de tu proyecto técnico, alguien pregunta por una limitación. ¿Qué respondes?',
        opciones: [
          'Mi proyecto no tiene limitaciones',
          'Reconozco honestamente la limitación, explico por qué existe y propongo cómo abordarla en próxima versión',
          'Cambio de tema',
          'No respondo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La honestidad sobre limitaciones distingue al oficio profesional del aficionado.',
        feedbackIncorrecto: 'Reconocer + explicar + proponer mejora. La honestidad técnica fortalece la sustentación, no la debilita.'
      },
      {
        enunciado: '¿Cuál oficio ancestral conecta con la lógica avanzada y la depuración?',
        opciones: [
          'El sastre del centro',
          'El electricista del barrio de Cartago con su método paso a paso',
          'El zapatero',
          'El conductor de bus'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El electricista usaba lógica AND/OR/NOT y depuración hipótesis-prueba antes de tocar cables.',
        feedbackIncorrecto: 'El electricista del barrio. Su método paso a paso (preguntar, medir, descartar hipótesis) es la lógica condicional aplicada.'
      },
      {
        enunciado: '¿Qué hace el operador NOT?',
        opciones: [
          'Combina dos condiciones',
          'Invierte el valor de verdad de una condición',
          'Suma valores',
          'Detiene el programa'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. NOT invierte: V se vuelve F, F se vuelve V. Es operador unario (1 entrada).',
        feedbackIncorrecto: 'NOT invierte una condición. Si A es verdadero, NOT A es falso. Es operador unario.'
      },
      {
        enunciado: 'En "A OR B" con A=V y B=F, ¿cuál es el resultado?',
        opciones: [
          'Falso',
          'Verdadero (basta con que una sea V)',
          'Indefinido',
          'Error'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. OR es permisivo: con que una sea V, el resultado es V. Solo es F cuando ambas son F.',
        feedbackIncorrecto: 'OR es V si al menos una es V. Solo es F cuando AMBAS son F. Es lo opuesto al AND.'
      },
      {
        enunciado: '¿Para qué sirve un pseudocódigo antes de programar?',
        opciones: [
          'Para perder tiempo',
          'Para escribir el algoritmo en lenguaje claro humano antes de traducirlo al editor de bloques',
          'Para imprimir',
          'No sirve para nada'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Pseudocódigo organiza la lógica antes del código. Hace visibles errores de razonamiento que el código esconde.',
        feedbackIncorrecto: 'Organizar la lógica en humano antes del código. Los errores de razonamiento se ven más rápido en pseudocódigo que en bloques.'
      },
      {
        enunciado: 'Tu micro:bit lee temperatura. ¿Qué bloque MakeCode usas?',
        opciones: [
          'mostrar texto',
          'leer temperatura (sensor integrado)',
          'establecer LED',
          'tocar nota'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El micro:bit tiene sensor de temperatura integrado. El bloque devuelve un valor en grados Celsius.',
        feedbackIncorrecto: 'El bloque "temperatura" devuelve los grados Celsius. El micro:bit tiene sensor integrado.'
      },
      {
        enunciado: 'Quieres que un LED parpadee cada segundo durante 10 segundos. ¿Qué bloques combinas?',
        opciones: [
          'Solo \'mostrar LED\'',
          'Bucle \'repetir 10 veces\' con bloques \'encender\' + \'pausa 500ms\' + \'apagar\' + \'pausa 500ms\'',
          'Solo \'apagar todo\'',
          'Bloques aleatorios'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Bucle + encendido + pausa + apagado + pausa. 500ms cada uno = parpadeo de 1 segundo total.',
        feedbackIncorrecto: 'Bucle "repetir 10 veces" con encendido + pausa + apagado + pausa de 500ms cada uno produce parpadeo de 1s por ciclo.'
      },
      {
        enunciado: '¿Por qué declarar una VARIABLE con nombre descriptivo (ej: "temperatura_aula") en lugar de "x"?',
        opciones: [
          'Es más bonito',
          'El código se vuelve legible para quien lo lea después (incluido tú dentro de 6 meses)',
          'El programa va más rápido',
          'MakeCode lo exige'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Nombres descriptivos hacen el código mantenible. "x" no dice nada; "temperatura_aula" sí.',
        feedbackIncorrecto: 'Nombres descriptivos = código mantenible. En 6 meses tú mismo agradecerás que "temperatura_aula" sea legible.'
      },
      {
        enunciado: 'Tu hipótesis al depurar dice "el sensor está mal calibrado". ¿Qué prueba haces para verificar?',
        opciones: [
          'Cambiar todo el programa',
          'Mostrar el valor del sensor en pantalla y compararlo con un termómetro conocido',
          'Reemplazar el micro:bit',
          'Cerrar MakeCode'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Una prueba específica que confirma o descarta UNA hipótesis. No tocar otras partes del código.',
        feedbackIncorrecto: 'Mostrar el valor + comparar con referencia conocida. Una prueba que confirma o descarta la hipótesis sin tocar el resto.'
      },
      {
        enunciado: 'Tu alarma combina humedad alta AND temperatura alta. ¿Cuántos escenarios validas?',
        opciones: [
          '1 escenario',
          '4 escenarios (2 condiciones binarias × 2 = 4 combinaciones FF, FV, VF, VV)',
          '100 escenarios',
          '0 escenarios'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 2^2 = 4 escenarios. Cada uno debe verificarse para confirmar que la alarma actúa solo en el caso VV.',
        feedbackIncorrecto: '4 escenarios. La validación exige verificar los 4 casos posibles, no solo el que dispara la alarma.'
      },
      {
        enunciado: 'Tu proyecto de monitoreo lee humedad y dispara alarma. ¿Qué documentas en una bitácora del proyecto?',
        opciones: [
          'Nada, los proyectos no necesitan bitácora',
          'Umbrales calibrados, escenarios validados, fallos encontrados y corregidos, decisiones de diseño',
          'Solo el código final',
          'Solo el nombre del proyecto'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La bitácora hace mantenible el proyecto. Sin ella, nadie sabe por qué tomaste cada decisión.',
        feedbackIncorrecto: 'Bitácora documenta umbrales, escenarios, fallos y decisiones. Sin ella el proyecto es caja negra que nadie puede mantener.'
      },
      {
        enunciado: 'Sustentas tu proyecto en 4 minutos. ¿Qué muestra MEJOR tu oficio?',
        opciones: [
          'Hablar muy rápido',
          'Demo del micro:bit funcionando + 1 limitación reconocida + 1 mejora propuesta para próxima versión',
          'Solo leer código',
          'Mostrar muchos colores'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Demo en vivo + honestidad sobre limitaciones + plan de mejora. Eso es oficio maduro.',
        feedbackIncorrecto: 'Demo + limitación + mejora. La honestidad sobre lo que falta fortalece la sustentación, no la debilita.'
      },
      {
        enunciado: 'Diseñas un alarma con 3 sensores. ¿Cómo te aseguras de cubrir TODOS los casos?',
        opciones: [
          'Pruebo solo el caso que dispara la alarma',
          'Construyo la tabla de verdad con 2^3 = 8 filas y valido cada combinación',
          'No hace falta probar',
          'Solo pruebo el caso negativo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Tabla de verdad completa + validación por escenarios. Cada combinación debe tener resultado predecible.',
        feedbackIncorrecto: 'Tabla de verdad con 8 filas. Cada combinación de las 3 entradas debe estar prevista en el diseño.'
      }
    ]
  }
};

export default contenido;
