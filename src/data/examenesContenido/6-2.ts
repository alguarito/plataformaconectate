/**
 * Contenido web del examen final · Grado 6 · Período 2
 *
 * Auto-generado desde content/examenes/6-2.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 6,
  periodo: 2,
  titulo: 'Examen final · Hardware, software y la máquina por dentro',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Hardware, software y la máquina por dentro',
    instrucciones: 'Practica con 25 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuál es la idea central del periodo 2 según la apertura (S1)?',
        opciones: [
          'Aprender a programar videojuegos.',
          'Entender las máquinas inteligentes por dentro para no depender de técnicos ni vendedores.',
          'Memorizar marcas de computadores.',
          'Aprender a usar redes sociales.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. P2 es el periodo de abrir la máquina y mirar adentro: hardware, software, mantenimiento, criterio de compra. No es programación todavía.',
        feedbackIncorrecto: 'La idea central de P2: entender el computador por dentro — piezas, software y cuidado — para no quedar dependiente de quien sí sabe. La programación llega más adelante.'
      },
      {
        enunciado: '¿Por qué el ejemplo del relojero, la costurera y el panadero ayuda a entender este periodo?',
        opciones: [
          'Porque eran personas famosas en Cartago.',
          'Porque cada uno conocía su máquina por dentro, lo que les daba libertad para resolver problemas y elegir bien.',
          'Porque vendían herramientas baratas.',
          'Porque trabajaban gratis.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. El relojero conocía el reloj por dentro; tú vas a conocer el computador por dentro. La actitud (mirar, entender, decidir) es la misma.',
        feedbackIncorrecto: 'El paralelo no es histórico sino de oficio: conocer la máquina por dentro = libertad para decidir. Eso vale para don Lucho con el reloj y para ti con el computador.'
      },
      {
        enunciado: '¿Cuáles son las 4 funciones básicas de toda máquina inteligente?',
        opciones: [
          'Encender, apagar, cargar, descargar.',
          'Entrada, procesamiento, salida y almacenamiento.',
          'Internet, juegos, fotos y música.',
          'Hardware, software, red y disco.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Las 4 funciones: entrada (recibe datos), procesamiento (los transforma), salida (los muestra) y almacenamiento (los guarda). Desde un microondas hasta un computador, todas funcionan así.',
        feedbackIncorrecto: 'Son: entrada, procesamiento, salida y almacenamiento. Toda máquina inteligente cumple esas 4 funciones; cambia el "cuerpo" pero no el principio.'
      },
      {
        enunciado: 'En un cajero electrónico, cuando metes tu tarjeta y digitas la clave, ¿qué función estás activando?',
        opciones: [
          'Salida.',
          'Almacenamiento.',
          'Entrada.',
          'Procesamiento.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Meter tarjeta y digitar clave es entrada (le das datos al cajero). Después él los procesa y te muestra saldo (salida).',
        feedbackIncorrecto: 'Es entrada. La tarjeta y la clave son datos que tú le das al cajero. Después él los procesa, consulta tu saldo (almacenamiento) y te muestra el resultado (salida).'
      },
      {
        enunciado: '¿Cuál de estos NO es un ejemplo de máquina inteligente con las 4 funciones?',
        opciones: [
          'Microondas digital con teclado.',
          'Smart TV con control remoto.',
          'Una piedra del río.',
          'Cajero electrónico del banco.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Exacto. Una piedra no recibe ni procesa nada; no tiene las 4 funciones. Las otras tres sí (todas reciben datos, procesan, muestran y guardan algo).',
        feedbackIncorrecto: 'La piedra es objeto pasivo: no recibe datos, no procesa, no muestra. Las otras (microondas, smart TV, cajero) sí cumplen las 4 funciones aunque sean máquinas distintas.'
      },
      {
        enunciado: '¿Cuál es la pieza del gabinete que se considera el "cerebro" del computador?',
        opciones: [
          'La RAM.',
          'El disco duro.',
          'La CPU (procesador).',
          'La fuente de poder.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. La CPU (Unidad Central de Procesamiento) es el cerebro: ejecuta las instrucciones de los programas. Sin ella, nada se procesa.',
        feedbackIncorrecto: 'La CPU es el cerebro. La RAM es la mesa de trabajo (memoria de corto plazo). El disco es el archivero (largo plazo). La fuente es la que da electricidad. Las 4 trabajan juntas.'
      },
      {
        enunciado: 'Si la CPU es el cerebro, ¿qué papel cumple la RAM en la analogía?',
        opciones: [
          'Es el archivero donde se guarda todo permanentemente.',
          'Es la mesa de trabajo donde la CPU pone lo que está usando ahora; se borra al apagar.',
          'Es el cable que conecta todo.',
          'Es la pantalla.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La RAM es la mesa de trabajo: donde la CPU pone lo que necesita en ese momento (programas abiertos). Al apagar se vacía. Por eso más RAM = más cosas abiertas al tiempo.',
        feedbackIncorrecto: 'RAM = mesa de trabajo (corto plazo, se borra al apagar). Disco = archivero (largo plazo, queda guardado). La gente confunde RAM y disco; son piezas distintas con funciones distintas.'
      },
      {
        enunciado: 'Tu computador se pone lento cuando abres muchas pestañas y un programa pesado. ¿Qué pieza probablemente está saturada?',
        opciones: [
          'El disco duro.',
          'La RAM.',
          'El monitor.',
          'El teclado.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Muchas pestañas + programa pesado = RAM llena. Cerrar pestañas libera RAM y el equipo respira.',
        feedbackIncorrecto: 'Es la RAM. Como la mesa de trabajo se llena, la CPU empieza a buscar espacio en el disco (que es mucho más lento). Por eso el equipo se siente arrastrado. Cerrar pestañas libera RAM.'
      },
      {
        enunciado: '¿Qué es un periférico?',
        opciones: [
          'Una pieza interna del gabinete.',
          'Un dispositivo externo que se conecta al computador (entrada, salida o mixto).',
          'Un programa de oficina.',
          'Un tipo de virus.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Periférico = lo que se conecta por fuera al computador. Teclado, ratón, parlantes, impresora, audífonos, USB.',
        feedbackIncorrecto: 'Periférico es lo externo que se conecta. Las piezas internas (CPU, RAM, disco) no son periféricos. Periférico viene de periferia: el borde, lo que está alrededor.'
      },
      {
        enunciado: '¿Cuál de estos es un periférico MIXTO (entrada y salida al tiempo)?',
        opciones: [
          'Una impresora.',
          'Un parlante.',
          'Una pantalla táctil.',
          'Un teclado.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Exacto. La pantalla táctil muestra (salida) y recibe tu dedo (entrada) al mismo tiempo. Es periférico mixto.',
        feedbackIncorrecto: 'La pantalla táctil es mixta. Teclado = solo entrada. Parlante e impresora = solo salida. Mixto significa que cumple las 2 funciones a la vez.'
      },
      {
        enunciado: 'Un escáner que también imprime se llama "multifuncional". ¿Qué tipos de periférico combina?',
        opciones: [
          'Dos de entrada.',
          'Dos de salida.',
          'Uno de entrada (escáner) + uno de salida (impresora).',
          'Ninguno: el multifuncional no es periférico.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Sí. El escáner es entrada (captura imagen y la mete al computador); la impresora es salida (saca imagen del computador al papel). El multifuncional reúne ambos.',
        feedbackIncorrecto: 'Escáner = entrada (mete imagen al computador). Impresora = salida (saca imagen al papel). El multifuncional combina los dos en un solo aparato.'
      },
      {
        enunciado: '¿Cuál es la diferencia clave entre hardware y software?',
        opciones: [
          'Hardware se usa en el colegio; software en la casa.',
          'Hardware es lo físico (lo que puedes tocar); software es lo invisible (los programas y las instrucciones).',
          'Hardware es caro; software es barato.',
          'Son lo mismo, solo cambian de nombre.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Hardware = cuerpo (CPU, RAM, pantalla, teclado). Software = instrucciones (Windows, Word, navegador, juegos). El cuerpo sin instrucciones no hace nada.',
        feedbackIncorrecto: 'Hardware = lo físico que tocas. Software = los programas que corren dentro. El computador necesita los dos para funcionar: el cuerpo (hardware) y las instrucciones (software).'
      },
      {
        enunciado: '¿Cuál de estos es SOFTWARE?',
        opciones: [
          'El teclado.',
          'La RAM.',
          'El navegador Chrome.',
          'El cable USB.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Chrome es un programa (software): instrucciones que la CPU ejecuta para mostrarte páginas web. Las otras 3 son hardware.',
        feedbackIncorrecto: 'Chrome es software (un programa). Teclado, RAM y cable USB son hardware (piezas físicas). Los programas son invisibles aunque corran en piezas reales.'
      },
      {
        enunciado: '¿Qué es un sistema operativo (SO)?',
        opciones: [
          'Un juego en línea.',
          'El programa principal que coordina todo el computador: hardware, software y usuario.',
          'Una pieza física del gabinete.',
          'Una marca de computador.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. El SO es el gerente del computador: organiza la memoria, gestiona archivos, ejecuta programas y te muestra la pantalla. Ejemplos: Windows, macOS, Linux, Android, iOS.',
        feedbackIncorrecto: 'El SO es el gerente: coordina hardware (piezas) y software (programas) y te da la pantalla con ventanas. Sin SO, el computador no sabe qué hacer cuando lo enciendes.'
      },
      {
        enunciado: '¿Cuál de estos NO es un sistema operativo?',
        opciones: [
          'Windows 11.',
          'macOS.',
          'Microsoft Word.',
          'Android.'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Exacto. Word es una aplicación (procesador de texto), no un sistema operativo. Los otros tres sí son SO (Windows, macOS y Android coordinan toda la máquina).',
        feedbackIncorrecto: 'Word es aplicación, no SO. Los SO son: Windows, macOS, Linux (computador), Android, iOS (celular). Las aplicaciones (Word, Chrome, Spotify) corren dentro de un SO.'
      },
      {
        enunciado: '¿Cuál es la diferencia entre archivo y carpeta?',
        opciones: [
          'Son lo mismo.',
          'Archivo = unidad de información (documento, foto, video); carpeta = caja que organiza archivos.',
          'Archivo es de Windows; carpeta es de Mac.',
          'Archivo es del colegio; carpeta es personal.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Archivo = el documento, foto o video. Carpeta = la caja que agrupa archivos. Las carpetas pueden contener otras carpetas (subcarpetas).',
        feedbackIncorrecto: 'Archivo = el contenido (documento, foto, video). Carpeta = el contenedor. Una carpeta puede tener varios archivos y otras carpetas dentro. Es la "biblioteca digital".'
      },
      {
        enunciado: 'Vas a organizar tus tareas del semestre. ¿Cuál estructura de carpetas es la más profesional?',
        opciones: [
          'Una sola carpeta llamada "cosas" con todo adentro.',
          'Carpetas por año y dentro por materia (ej. 2026 → Tecnología → Periodo 2).',
          'Archivos sueltos en el escritorio sin carpetas.',
          'Una carpeta por archivo (un archivo por carpeta).'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Estructura por año → materia → periodo es lo más usado por estudiantes y profesionales. Encuentras cualquier tarea en 3 clics.',
        feedbackIncorrecto: 'Por año + materia + periodo. Eso te deja buscar por contexto ("mi tarea de Tecno P2") en lugar de revolver una pila de archivos sueltos.'
      },
      {
        enunciado: '¿Qué incluye el mantenimiento básico de un computador?',
        opciones: [
          'Solo limpiar la pantalla con jabón.',
          'Limpieza física (sin agua), actualizaciones del SO y respaldo de archivos importantes.',
          'Cambiar todas las piezas cada año.',
          'Nunca apagarlo para que no se dañe.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. 3 cosas básicas: limpiar (paño seco, sin agua), actualizar (instalar actualizaciones del SO) y respaldar (copia de archivos importantes en USB o nube).',
        feedbackIncorrecto: 'Mantenimiento básico: limpieza física suave (paño seco, sin agua), actualizaciones del SO y respaldo de archivos importantes. Apagado correcto también suma. Nada de jabón ni de cambiar piezas porque sí.'
      },
      {
        enunciado: 'Tu hermano dice que para limpiar la pantalla del computador es mejor usar agua y jabón. ¿Qué le respondes con criterio de S8?',
        opciones: [
          'Está bien, total el agua no daña.',
          'No: el agua puede dañar la pantalla. Lo correcto es un paño microfibra seco o ligeramente humedecido con limpiador especial.',
          'Mejor con thinner, eso saca todo.',
          'Mejor no limpiar nunca.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Agua + electrónica = riesgo. Lo correcto: paño microfibra seco o con limpiador especial para pantallas. Thinner o jabón dañan el recubrimiento.',
        feedbackIncorrecto: 'Agua daña electrónica. Lo correcto: paño microfibra seco o con limpiador especial. Nunca thinner, alcohol fuerte ni jabón. La pantalla tiene un recubrimiento que se borra con químicos agresivos.'
      },
      {
        enunciado: '¿Cuál es la postura correcta frente al computador para cuidar tu cuerpo?',
        opciones: [
          'Acostado en la cama con el laptop sobre el pecho.',
          'Espalda recta, pantalla a la altura de los ojos, codos en 90°, pies apoyados.',
          'De pie todo el tiempo, sin sillas.',
          'Inclinado a un lado para descansar la espalda.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Postura ergonómica: espalda recta, pantalla a nivel de ojos, codos 90°, pies apoyados. Eso cuida tu columna, tu cuello y tus muñecas a largo plazo.',
        feedbackIncorrecto: 'Postura ergonómica: espalda recta, pantalla a nivel de ojos (ni alta ni baja), codos a 90°, pies apoyados en el piso. La mala postura no duele hoy pero deja consecuencias en 2-3 años.'
      },
      {
        enunciado: 'Llevas 2 horas seguidas frente al computador. ¿Qué te recomienda S9 hacer?',
        opciones: [
          'Seguir sin parar, ya estoy concentrado.',
          'Aplicar la regla 20-20-20: cada 20 minutos miro algo a 20 pies (6 metros) por 20 segundos. Y descansar 5 minutos cada hora.',
          'Cerrar los ojos 5 minutos y ya.',
          'Cambiar el brillo al máximo.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Regla 20-20-20 + descansos cortos cada hora. Tus ojos y tu espalda lo agradecen. Pararse y caminar 2 minutos también renueva concentración.',
        feedbackIncorrecto: 'Regla 20-20-20: cada 20 minutos mira a algo lejano (6 metros) durante 20 segundos. Más: pausa de 5 min cada hora, párate, camina. Cuida vista y postura.'
      },
      {
        enunciado: 'Estás eligiendo computador para estudiar (tareas, navegar, mirar video). ¿Cuál ficha técnica es razonable como mínimo?',
        opciones: [
          'CPU Celeron, RAM 2 GB, disco 32 GB HDD.',
          'CPU Intel i3 o Ryzen 3, RAM 8 GB, disco 256 GB SSD.',
          'CPU Intel i9, RAM 64 GB, disco 4 TB SSD (lo más caro).',
          'Cualquier computador, no importa lo que tenga.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. Mínimo razonable para estudiar: i3/Ryzen 3 + 8 GB RAM + 256 GB SSD. El primero queda corto; el tercero es exagerado para tareas escolares.',
        feedbackIncorrecto: 'Para estudiar: i3/Ryzen 3 + 8 GB RAM + 256 GB SSD. Menos queda corto (lento, sin espacio). Más es exagerado para edad escolar (paga gama gamer sin necesidad). Criterio.'
      },
      {
        enunciado: 'Un vendedor te dice: "Llévate este computador súper barato, tiene 4 GB de RAM y disco HDD". ¿Qué decides con criterio de S10?',
        opciones: [
          'Lo compro, está baratísimo.',
          'Lo descarto: 4 GB de RAM y HDD lo hacen muy lento para estudiar en 2026; busco mínimo 8 GB y SSD.',
          'Lo compro y le agrego RAM yo.',
          'Solo lo compro si el vendedor es amable.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Sí. 4 GB de RAM hoy es muy poco (chrome solo consume eso). HDD es lento comparado con SSD. Lo barato sale caro: en 6 meses te frustras y necesitas otro.',
        feedbackIncorrecto: '4 GB de RAM + HDD = computador lento desde el día 1. Lo barato sale caro: en pocos meses ya no rinde y tienes que cambiarlo. Criterio es elegir bien, no rápido.'
      },
      {
        enunciado: 'Vas a crear el nombre de un archivo de tarea de tecnología. ¿Cuál nombre es el más profesional?',
        opciones: [
          'documento1.docx',
          'tarea.docx',
          '2026-05-15_TIC_P2_Ficha-Computador-Ideal_Cardenas.docx',
          'asdf.docx'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Bien. Nombre profesional incluye: fecha (YYYY-MM-DD) + materia + periodo + tema + apellido. Lo encuentras en segundos aunque tengas 100 archivos.',
        feedbackIncorrecto: 'Patrón profesional: fecha-materia-periodo-tema-apellido. "documento1" y "asdf" no dicen nada; en 3 meses no sabrás qué contienen.'
      },
      {
        enunciado: '¿Cuál de estas analogías describe mejor la relación hardware-software?',
        opciones: [
          'Hardware es el motor del carro; software es la gasolina.',
          'Hardware es el cuerpo (huesos, músculos); software es la mente (pensamientos, decisiones).',
          'Hardware es la maestra; software es el alumno.',
          'Hardware es el almuerzo; software es el postre.'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Bien. Cuerpo (hardware) + mente (software) es la analogía más clara: el cuerpo sin mente no decide; la mente sin cuerpo no actúa. Los dos se necesitan.',
        feedbackIncorrecto: 'La analogía cuerpo-mente es la más limpia: hardware = cuerpo físico que se toca; software = mente invisible que decide. Se necesitan mutuamente: uno sin otro no funciona.'
      }
    ]
  }
};

export default contenido;
