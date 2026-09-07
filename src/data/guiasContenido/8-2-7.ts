/**
 * Contenido enriquecido para Grado 8 · Período 2 · Sesión 7
 * (sesión global 17).
 *
 * Auto-generado desde content/guias/8/8-2-7.yaml por
 * scripts/build-guias-web-ts.py. Edita el YAML, no este archivo.
 */
import type { ContenidoGuia } from './_schema';

const contenido: ContenidoGuia = {
  grado: 8,
  periodo: 2,
  sesion: 7,
  titulo: 'Depuración — una hipótesis, una prueba',
  resumen: 'Depurar es encontrar un error con método, no con suerte: reproducir, una hipótesis, una prueba, confirmar o descartar. Hoy corriges tres errores con bitácora, como las bordadoras de Cartago revisan una prenda parte por parte antes de que avance.',
  duracionMin: 90,
  subtema: 'Lógica y micro:bit',
  preLectura: {
    porQueImporta: 'Todo programa falla en algún momento. La diferencia entre quien programa y quien adivina es cómo busca el error cuando aparece.',
    preguntaDetonante: 'Tu micro:bit muestra una cara feliz con 10 grados. ¿Por dónde empiezas a mirar, por todo el programa o por el bloque que compara?',
    activacion: {
      titulo: 'La linterna que no prende',
      descripcion: 'En 3 minutos, escribe tres razones por las que una linterna no prende: pila, bombillo, interruptor. ¿Cuál revisarías primero y por qué? ¿Qué prueba harías solo para esa?',
      duracionMin: 5
    },
    conexion: {
      anterior: 'En la sesión 6 calibraste umbrales con cinco mediciones reales.',
      siguiente: 'En la sesión 8 combinas sensores con lógica compuesta y pruebas ocho escenarios.'
    }
  },
  conceptosClave: [
    {
      termino: 'Error de programa (bug)',
      definicion: 'Una pieza del programa que no hace lo que esperabas, una condición al revés, una variable vacía, una pausa que falta.',
      ejemplo: 'Con 10 grados el micro:bit muestra cara feliz en vez de triste.',
      categoria: 'El error'
    },
    {
      termino: 'Reproducir',
      definicion: 'Encontrar la entrada exacta con la que el error aparece siempre. Sin eso no se puede buscar.',
      ejemplo: 'Pongo 10 grados en el simulador y falla; pongo 10 otra vez y vuelve a fallar.',
      categoria: 'El error'
    },
    {
      termino: 'Síntoma',
      definicion: 'Lo que el programa hace mal, con qué entrada. Es la primera columna de la bitácora.',
      ejemplo: '«Con 30 grados muestra el ícono de frío».',
      categoria: 'El error'
    },
    {
      termino: 'Hipótesis',
      definicion: 'Una explicación posible de dónde está el error. Se escriben dos o tres, la más probable primero.',
      ejemplo: '«Creo que la comparación está al revés, mayor donde iba menor».',
      categoria: 'El método'
    },
    {
      termino: 'Una prueba, un cambio',
      definicion: 'Cada prueba cambia una sola cosa, para saber qué arregló o qué dañó.',
      ejemplo: 'Cambio solo el «mayor que» por «menor que» y pruebo con 10 grados.',
      categoria: 'El método'
    },
    {
      termino: 'Técnicas de depuración',
      definicion: 'Mostrar el valor de una variable, deshabilitar un bloque para aislar, o probar con valores extremos.',
      ejemplo: '«Mostrar número (temperatura)» antes del «si» deja ver qué valor llega.',
      categoria: 'El método'
    }
  ],
  laboratorios: [
    {
      tipo: 'quiz',
      titulo: '¿Sabes buscar un error con método?',
      instrucciones: 'Cinco preguntas para verificar que dominas reproducir, hipótesis, una prueba y las tres técnicas. No va al cuaderno.',
      preguntas: [
        {
          enunciado: 'Tu programa falla «a veces» y no sabes cuándo. ¿Qué haces primero?',
          opciones: [
            'Cambio la condición del «si», porque casi siempre el problema está ahí.',
            'Busco la entrada con la que falla siempre.',
            'Borro el programa y lo vuelvo a hacer desde cero.',
            'Le pido a mi pareja que lo arregle porque a mí no me falla.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Sí. Sin reproducir el error no se puede buscar. Primero la entrada que lo provoca siempre.',
          feedbackIncorrecto: 'Cambiar sin saber cuándo falla es adivinar, y rehacer todo no enseña nada. Primero se reproduce con la misma entrada.'
        },
        {
          enunciado: 'Cambias la comparación y el ícono en la misma prueba, y el programa se arregla. ¿Qué problema tienes?',
          opciones: [
            'Ninguno, porque lo único importante es que el programa ya funciona.',
            'Que el micro:bit no acepta dos cambios en una sola carga.',
            'Que gastaste una prueba de más y ahora tienes menos tiempo.',
            'Que no sabes cuál de los dos cambios era el error.'
          ],
          respuestaIndex: 3,
          feedbackCorrecto: 'Exacto. Con dos cambios no sabes cuál arregló, y quizá uno de los dos dañó otra cosa. Una prueba, un cambio.',
          feedbackIncorrecto: 'El micro:bit acepta los cambios y el tiempo no es el problema. El problema es que no sabes cuál de los dos era el error.'
        },
        {
          enunciado: '¿Para qué sirve poner «mostrar número (temperatura)» justo antes del «si»?',
          opciones: [
            'Para ver qué valor llega a la comparación.',
            'Para que el micro:bit mida la temperatura con más precisión que antes.',
            'Para reemplazar el «si», que ya no hace falta.',
            'Para que el programa corra más lento y se vea el error.'
          ],
          respuestaIndex: 0,
          feedbackCorrecto: 'Correcto. Es la técnica de mostrar la variable. Si en pantalla sale 0 cuando hay 25 grados, la variable nunca se llenó.',
          feedbackIncorrecto: 'No mide mejor ni reemplaza nada. Muestra qué valor llega a la comparación, para saber si la variable trae lo que crees.'
        },
        {
          enunciado: 'Tu primera hipótesis era «la comparación está al revés». La cambias, pruebas con 10 grados y sigue fallando. ¿Qué haces?',
          opciones: [
            'Dejo el cambio, porque de todas formas puede ayudar más adelante en el programa.',
            'Cambio también el ícono, a ver si con los dos cambios funciona.',
            'Vuelvo al original, anoto «descartada» y pruebo la segunda.',
            'Concluyo que el error no tiene solución y entrego así.'
          ],
          respuestaIndex: 2,
          feedbackCorrecto: 'Sí. Una hipótesis descartada con una prueba limpia te deja una menos. Vuelves atrás para que la siguiente prueba también sea limpia.',
          feedbackIncorrecto: 'Dejar el cambio o sumar otro ensucia la siguiente prueba. Se vuelve al original, se anota «descartada» y se sigue con la siguiente.'
        },
        {
          enunciado: '¿Por qué la bitácora de depuración debe poder leerla otra persona?',
          opciones: [
            'Porque el docente la califica por la letra, el orden y la presentación.',
            'Porque evita repetir pruebas y dice al siguiente qué se probó.',
            'Porque MakeCode pide una bitácora para compartir el programa.',
            'Porque los errores solo se corrigen cuando alguien más los lee.'
          ],
          respuestaIndex: 1,
          feedbackCorrecto: 'Eso es. Una bitácora legible evita repetir pruebas y le dice al siguiente qué ya se descartó.',
          feedbackIncorrecto: 'MakeCode no la pide y no es por la letra. Es para no repetir pruebas y para que otro sepa qué se probó y qué se descartó.'
        }
      ]
    }
  ],
  postLectura: {
    reflexion: '¿Cuál hipótesis te costó soltar aunque la prueba la había descartado, y qué te hizo pasar a la siguiente?',
    transferencia: 'La próxima vez que algo no funcione, el wifi, una app, un aparato, escribe el síntoma y dos hipótesis antes de tocar nada. Prueba una a la vez.',
    cierre: 'La bordadora revisa esta flor, no toda la prenda. Una hipótesis, una prueba, y el error aparece.'
  },
  saberAncestral: {
    saber: 'En Cartago, una prenda bordada no la hace una sola persona. Pasa por unas ocho artesanas y más de ocho horas de trabajo antes de llevar el nombre de un taller (Chica García, 2019). Cada una recibe la pieza de la anterior y la revisa antes de seguir: si una puntada quedó floja o un hilo cambió de tono, se ve en esa mesa y se corrige antes de que la prenda avance. Nadie deshace todo el bordado para encontrar una puntada mal hecha. Se busca por partes: esta flor, este tallo, esta franja. Los ornamentos que vistió el papa en su visita a Colombia salieron de esas mesas. Un programa con errores se revisa igual. No se cambia todo a la vez: se mira una parte, se prueba, se descarta o se confirma, y se pasa a la siguiente. La cara de exclusión: el nombre del taller lo sostienen ocho mujeres que rara vez aparecen en él; la reputación se acumula en el taller, no en quien borda. Hoy vas a buscar errores como se revisa una prenda: de a una parte, con una hipótesis y una prueba cada vez.',
    fuente: 'Talleres de bordado de Cartago (Valle del Cauca) · la prenda que pasa por ocho manos',
    referencia: 'Chica García, A. (2019, 17 de agosto). Bordados de Cartago: la herencia española que apropiaron las mujeres vallunas. Radio Nacional de Colombia.',
    preguntaPuente: 'La bordadora revisa esta flor, no toda la prenda. Cuando tu micro:bit muestre una cara feliz con 10 grados, ¿por dónde empiezas a mirar: por todo el programa o por el bloque que compara la temperatura?'
  },
  mapaRuta: [
    {
      numero: 1,
      iconos: [
        '🌱'
      ],
      titulo: 'La prenda que pasa por ocho manos',
      duracionMin: 10
    },
    {
      numero: 2,
      iconos: [
        '✏️'
      ],
      titulo: 'Actividad 1 · Tres hipótesis sin tocar el código',
      duracionMin: 15
    },
    {
      numero: 3,
      iconos: [
        '🔎',
        '✏️'
      ],
      titulo: 'Actividad 2 · El primer error, con bitácora',
      duracionMin: 30
    },
    {
      numero: 4,
      iconos: [
        '🔎',
        '✅'
      ],
      titulo: 'Actividad 3 · Dos errores más y la técnica que sirvió',
      duracionMin: 25
    },
    {
      numero: 5,
      iconos: [
        '💭'
      ],
      titulo: 'Tres ideas y tu compromiso',
      duracionMin: 10
    }
  ],
  actividades: [
    {
      numero: 1,
      verbo: 'IDENTIFICA',
      titulo: 'Tres hipótesis sin tocar el código',
      tiempoMin: 15,
      modalidad: 'individual',
      pasos: [
        'Mira el programa que proyecta tu docente, debería mostrar cara triste bajo 18 grados y muestra la feliz. Copia la condición tal como está.',
        'Escribe tres hipótesis, la comparación al revés, los íconos en la rama equivocada, la variable que nunca se llena.',
        'Ordénalas de la más probable a la menos probable y escribe por qué pusiste esa primero.',
        'Escribe qué prueba harías para la primera hipótesis, y solo para esa.'
      ],
      cuaderno: {
        titulo: 'Tres hipótesis sin tocar el código',
        formato: 'la condición copiada, las tres hipótesis numeradas con la razón del orden, y la prueba para la primera',
        extension: 'media página'
      },
      criterios: [
        'Tu prueba cambia una sola cosa.',
        'Puedes decir qué esperas ver si la hipótesis es cierta.'
      ]
    },
    {
      numero: 2,
      verbo: 'APLICA',
      titulo: 'El primer error, con bitácora',
      tiempoMin: 30,
      modalidad: 'parejas',
      pasos: [
        'Con tu pareja, prueben el programa con tres errores en el simulador hasta que el primero aparezca siempre con la misma entrada.',
        'Dibujen la bitácora de tres columnas, síntoma, hipótesis, prueba y resultado, y escriban el síntoma y dos hipótesis.',
        'Prueben solo la primera hipótesis cambiando una sola cosa.',
        'Si se arregló, anoten «confirmada». Si no, vuelvan al programa original, anoten «descartada» y prueben la segunda.'
      ],
      cuaderno: {
        titulo: 'El primer error, con bitácora',
        formato: 'la bitácora de tres columnas con la entrada que reproduce el error, el síntoma, las hipótesis y cada prueba con su resultado',
        extension: 'media página'
      },
      criterios: [
        'El primer error está corregido.',
        'La bitácora dice qué cambiaste en cada prueba y qué pasó.'
      ]
    },
    {
      numero: 3,
      verbo: 'EVALÚA',
      titulo: 'Dos errores más y la técnica que sirvió',
      tiempoMin: 25,
      modalidad: 'individual',
      pasos: [
        'Reproduce el segundo error y llena su bitácora, síntoma, hipótesis, una prueba, resultado. Haz lo mismo con el tercero.',
        'Junto a cada error corregido, escribe qué técnica te sirvió, mostrar variable, aislar o valores extremos.',
        'Escribe la nota final de cinco líneas, cuál error fue el más difícil y por qué.',
        'Pásale tu bitácora a tu pareja y pídele que diga, sin ver el programa, en qué orden probaste.'
      ],
      cuaderno: {
        titulo: 'Dos errores más y la técnica que sirvió',
        formato: 'las bitácoras del segundo y el tercer error, la técnica junto a cada uno, y la nota final de cinco líneas',
        extension: 'una página'
      },
      criterios: [
        'Los tres errores están corregidos.',
        'Tu pareja pudo decir en qué orden probaste solo con leer tu bitácora.'
      ]
    }
  ],
  triangulo: {
    dussel: {
      autor: 'Enrique Dussel · Filosofía de la liberación (1977), §2.6.2.3',
      lente: 'lente del nosotros',
      cita: 'El respeto es el silencio de quien todo tiene que escuchar, porque todavía no sabe nada del otro.',
      preguntaEspejo: '¿Qué problema de esta semana intenté arreglar antes de entender qué pasaba?'
    },
    estoico: {
      autor: 'Marco Aurelio · Meditaciones VIII, 16 (c. 175 d.C.)',
      lente: 'lente del cuidado interior',
      cita: 'Cambiar de parecer cuando alguien te corrige no te quita libertad: es parte de ella.',
      preguntaEspejo: '¿Cuál hipótesis me costó soltar hoy aunque la prueba la había descartado?'
    },
    floridi: {
      autor: 'The Onlife Initiative (ed. Luciano Floridi) · The Onlife Manifesto (2015), Prefacio',
      lente: 'lente de la infoesfera',
      cita: 'Tememos y rechazamos aquello a lo que no logramos darle sentido.',
      preguntaEspejo: '¿Qué cosa de la tecnología rechazo porque no la entiendo, y qué prueba me ayudaría a entenderla?'
    },
    modo: 'ideas'
  },
  cincoDimensiones: {
    personal: 'Encontraste tres errores con método y no con suerte. Ese método sirve para cualquier problema que no entiendes todavía.',
    emocional: 'Un error que no cede da rabia y dan ganas de mover todo. Volver al programa original y probar la siguiente hipótesis es lo que lo resuelve.',
    ciudadana: 'Una bitácora que otro puede leer es una forma de honestidad. Dice qué probaste, no solo que «ya funciona».',
    local: 'Las bordadoras de Cartago revisan la prenda parte por parte antes de que avance. Tu bitácora hace lo mismo con el programa.',
    intergeneracional: 'Quien reciba tu programa mañana va a encontrar otro error. Tu bitácora le enseña cómo buscarlo.'
  }
};

export default contenido;
