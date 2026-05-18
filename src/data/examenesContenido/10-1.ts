/**
 * Contenido web del examen final · Grado 10 · Período 1
 *
 * Auto-generado desde content/examenes/10-1.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 10,
  periodo: 1,
  titulo: 'Examen final · Libro editorial con asistencia de IA',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Libro editorial con asistencia de IA',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Cuál es la diferencia clave entre AUTOR y EDITOR en el periodo?',
        opciones: [
          'El autor escribe; el editor decide qué entra y firma como responsable',
          'Son lo mismo',
          'El editor escribe más rápido',
          'El autor es siempre humano y el editor siempre es la IA'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. El autor escribe, el editor decide y firma. En este periodo asumiste el rol de editor; la IA fue tu escritor asistente.',
        feedbackIncorrecto: 'Autor escribe; editor decide y firma. La IA puede ser autor asistente, pero la responsabilidad editorial es humana.'
      },
      {
        enunciado: '¿Cuál de estos enunciados de "audiencia" es el MÁS profesional para concebir un libro?',
        opciones: [
          'Jóvenes en general',
          'Estudiantes de 14-16 años del Valle del Cauca que ya juegan videojuegos pero no programan',
          'Personas con celular',
          'Todo el mundo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Audiencia profesional incluye edad concreta, contexto cultural y nivel previo. Sin eso, el tono y los ejemplos quedan ciegos.',
        feedbackIncorrecto: 'Audiencia precisa: edad + contexto + nivel previo. "Jóvenes" o "todo el mundo" son demasiado vagos para guiar las decisiones del libro.'
      },
      {
        enunciado: '¿Cuáles son las 5 partes obligatorias de un prompt profesional?',
        opciones: [
          'Saludo, agradecimiento, pregunta, despedida, firma',
          'Rol, contexto, tarea, formato, restricciones',
          'Solo la tarea',
          'Solo el saludo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Rol + contexto + tarea + formato + restricciones. Las 5 partes hacen la diferencia entre texto genérico y útil.',
        feedbackIncorrecto: 'Las 5 partes son rol, contexto, tarea, formato y restricciones. Sin ellas, la IA produce texto genérico sin valor.'
      },
      {
        enunciado: '¿Qué porcentaje mínimo de intervención humana directa exige V3?',
        opciones: [
          '0% (la IA lo hace todo)',
          '20-30%',
          '100%',
          '5%'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. 20-30% mínimo es la regla irrenunciable. Sin esa firma, V3 deja de ser tuyo.',
        feedbackIncorrecto: 'Mínimo 20-30%. Es lo que distingue tu libro de uno generado 100% por IA y firmado en falso.'
      },
      {
        enunciado: '¿Qué porcentaje del libro ocupa el Acto 2 (Desarrollo) en la estructura editorial clásica?',
        opciones: [
          '10%',
          '50%',
          '25%',
          '90%'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El Acto 2 ocupa el 50% del libro. Es la zona más larga y de mayor responsabilidad narrativa.',
        feedbackIncorrecto: 'El Acto 2 es el 50% del libro. Planteamiento (Acto 1) y cierre (Acto 3) ocupan 25% cada uno.'
      },
      {
        enunciado: '¿Qué ley colombiana regula los derechos de autor de tu libro?',
        opciones: [
          'Ley 100 de 1993',
          'Ley 23 de 1982',
          'Ley 30 de 1992',
          'No hay ley aplicable'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Ley 23 de 1982, complementada por la Decisión Andina 351/1993. Es marco principal de derechos de autor en Colombia.',
        feedbackIncorrecto: 'Ley 23 de 1982. Es el marco de derechos de autor en Colombia que distingue derechos morales (intransferibles) de patrimoniales (negociables).'
      },
      {
        enunciado: '¿La IA generativa puede ser titular de derechos de autor sobre el libro?',
        opciones: [
          'Sí, porque escribió la mayoría del texto',
          'No, el modelo no tiene personalidad jurídica; la autoría es del editor humano que firma y declara el uso de IA',
          'Sí, junto contigo como coautora',
          'Depende del país'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La IA no tiene personalidad jurídica. Con intervención editorial sustancial y declaración honesta, la obra es del editor humano.',
        feedbackIncorrecto: 'La IA no tiene personalidad jurídica. La autoría es del editor humano cuando hay intervención sustancial y declaración honesta de uso.'
      },
      {
        enunciado: '¿Cuál de estas herramientas es gratuita y permite generar portadas con IA?',
        opciones: [
          'Solo Photoshop pago',
          'Bing Image Creator (DALL-E 3 gratis con cuenta Microsoft)',
          'Solo Midjourney pago',
          'Solo Photoshop pago'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Bing Image Creator es gratis con cuenta Microsoft. Usa DALL-E 3. También Leonardo.ai (150 imágenes/día gratis).',
        feedbackIncorrecto: 'Bing Image Creator es gratuita y usa DALL-E 3. Otras opciones gratis: Leonardo.ai, Adobe Express, Microsoft Designer, Ideogram.'
      },
      {
        enunciado: 'Un prompt visual para IA generativa debe priorizar...',
        opciones: [
          'Instrucciones narrativas largas tipo cuento',
          'Descriptores visuales (estilo, paleta, atmósfera, composición)',
          'Gramática impecable',
          'Una historia personal del autor'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. El prompt visual gira en torno a descriptores: cinematic, watercolor, minimalist, paleta, atmósfera, composición.',
        feedbackIncorrecto: 'Descriptores visuales (estilo, paleta, atmósfera, composición). Términos narrativos largos confunden al modelo de imagen.'
      },
      {
        enunciado: 'Tu libro es 80% texto y 20% imágenes. ¿Cuál herramienta gratuita es la más razonable para diagramarlo?',
        opciones: [
          'Solo Canva',
          'Google Docs (con estilos, tabla de contenido automática y exportación a PDF)',
          'WhatsApp',
          'Una calculadora'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Google Docs es ideal para libros mayormente de texto: estilos, TOC automática, colaboración. Canva es mejor para libros muy visuales.',
        feedbackIncorrecto: 'Google Docs para libros mayormente de texto. Canva si tu libro tiene fuerte componente visual (manuales, ilustrados, fanzines).'
      },
      {
        enunciado: '¿Qué elemento NUEVO del libro distingue al editor profesional contemporáneo del autor pre-IA?',
        opciones: [
          'La portada',
          'La carta del editor firmada que declara el proceso y el uso de IA',
          'El número de páginas',
          'La bibliografía'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La carta del editor firmada (transparencia editorial). Es la pieza nueva que define el estándar profesional contemporáneo.',
        feedbackIncorrecto: 'La carta del editor firmada. Declara el proceso, el uso de IA y el porcentaje editado a mano. Es transparencia editorial.'
      },
      {
        enunciado: 'Durante tu sustentación pública del libro, ¿qué prueba MEJOR que tu autoría es legítima?',
        opciones: [
          'Mostrar el PDF terminado',
          'Leer en voz alta un fragmento de tu libro y que suene a ti, no a un chatbot',
          'Tener muchas páginas',
          'Decir que la IA no ayudó'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. La lectura en voz alta es la prueba de fuego: revela si el texto tiene voz humana o quedó genérico.',
        feedbackIncorrecto: 'La lectura en voz alta. Si suena a ti, V3 funcionó; si suena a manual, hubo poco trabajo editorial.'
      },
      {
        enunciado: '¿Cuál es el oficio ancestral que conecta con el rol del editor en este periodo?',
        opciones: [
          'El cartero del barrio',
          'Don Hernando Castaño, editor de la gaceta barrial de Cartago',
          'El conductor del bus escolar',
          'El sastre del centro'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Don Hernando elegía, corregía y firmaba cada gaceta. Era editor responsable antes de la era digital.',
        feedbackIncorrecto: 'Don Hernando, editor de la gaceta barrial. Firmaba cada edición como responsable de las notas que entraban y las que no.'
      },
      {
        enunciado: '¿Qué es una "escaleta" en concepción editorial?',
        opciones: [
          'Una escalera literaria',
          'Lista preliminar de capítulos con tema y peso aproximado, antes de escribir',
          'El primer capítulo del libro',
          'El índice final del libro'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Escaleta = mapa de capítulos antes de escribir. Sin escaleta, el libro se construye al azar.',
        feedbackIncorrecto: 'Escaleta es el mapa de capítulos previo. "El libro empieza a escribirse en la escaleta, no en el capítulo 1."'
      },
      {
        enunciado: '"Escríbeme algo sobre la amistad" es un prompt:',
        opciones: [
          'Profesional, está completo',
          'Vago: le falta rol, contexto, tarea precisa, formato y restricciones',
          'Excelente, corto y al grano',
          'Imposible de responder'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Garbage in, garbage out: ese prompt vago produce texto vago. Faltan las 5 partes.',
        feedbackIncorrecto: 'Faltan las 5 partes. Sin rol, contexto, tarea precisa, formato y restricciones, la IA produce texto genérico inservible.'
      },
      {
        enunciado: '¿Qué hace una iteración V2 sobre el borrador V1 generado por IA?',
        opciones: [
          'Repetir el mismo prompt',
          'Pedirle a la IA mejoras específicas (apertura, clichés, tono, longitud)',
          'Borrar V1 y empezar otro',
          'Aceptar V1 sin cambios'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. V2 = mejoras específicas pedidas con instrucciones puntuales. V3 = reescritura humana directa para incrustar voz propia.',
        feedbackIncorrecto: 'V2 pide mejoras específicas. "Mejora la apertura, reduce clichés del párrafo 3, ajusta tono." Instrucciones puntuales, no reescritura completa.'
      },
      {
        enunciado: '¿Cuáles son los "capítulos pivote" de un libro?',
        opciones: [
          'Cualquier capítulo central',
          'El primero (engancha), el de la mitad (sostiene) y el último (cierra)',
          'Solo el primero',
          'Los capítulos pares'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. 3 pivotes: primero, mitad, último. Reescribirlos más veces que los demás. Si esos 3 funcionan, el libro funciona.',
        feedbackIncorrecto: 'Pivotes: primero, mitad, último. Son los 3 que merecen más reescritura porque definen si el lector sigue o abandona.'
      },
      {
        enunciado: '¿Qué licencia permite que otros usen tu libro citándote, sin fines comerciales?',
        opciones: [
          'Todos los derechos reservados (no permite compartir)',
          'Creative Commons BY-NC (atribución, no comercial)',
          'Patente internacional',
          'Ninguna licencia es necesaria'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. CC BY-NC permite uso citando autor y sin fines comerciales. Es alternativa práctica a "todos los derechos reservados".',
        feedbackIncorrecto: 'Creative Commons BY-NC. Permite que otros usen tu obra citándote y sin fines comerciales.'
      },
      {
        enunciado: '¿Cuántos principios fundamentales de maquetación cubren el 80% del oficio?',
        opciones: [
          '1',
          '4 (tipografía coherente, jerarquía visual, espacios respirables, numeración automática)',
          '20',
          '100'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 4 principios cubren el 80% del oficio. Aplicarlos da apariencia profesional con cualquier herramienta.',
        feedbackIncorrecto: 'Son 4 principios: tipografía coherente, jerarquía visual, espacios respirables, numeración automática.'
      },
      {
        enunciado: '¿Cuál de estos componentes NO debe faltar en el PDF final del libro?',
        opciones: [
          'Música de fondo',
          'Portada + créditos + tabla de contenido + capítulos + carta del editor',
          'Solo capítulos',
          'Solo la portada'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Los 5 componentes obligatorios. La carta del editor es lo nuevo: declara honestamente el uso de IA.',
        feedbackIncorrecto: 'Portada + créditos + TOC + capítulos + carta del editor firmada. Los 5 componentes definen un libro profesional con IA.'
      },
      {
        enunciado: 'Tu libro de 80 páginas tendrá cuántos capítulos típicamente?',
        opciones: [
          '1 capítulo gigante',
          '8-12 capítulos con peso asignado según su función',
          '100 capítulos pequeños',
          'Exactamente 30'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 8-12 capítulos. Cada uno con función específica (planteamiento, desarrollo, cierre).',
        feedbackIncorrecto: '8-12 capítulos. Más fragmenta sin razón; menos hace capítulos demasiado largos para mantener atención.'
      },
      {
        enunciado: 'Un compañero te pasa un prompt sin "Restricciones" (la 5ª parte). ¿Qué problema típico aparecerá en la respuesta de la IA?',
        opciones: [
          'La IA no responderá nada',
          'La IA caerá en clichés, frases hechas o tono inadecuado sin que nadie se lo prohíba',
          'La IA cobrará dinero',
          'El prompt está bien sin restricciones'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. Sin restricciones, la IA cae en clichés y frases hechas. Las restricciones son la quinta parte que filtra lo que NO debe pasar.',
        feedbackIncorrecto: 'Sin restricciones, aparecen clichés y frases hechas. Las restricciones evitan que la IA caiga en el promedio insulso.'
      }
    ]
  }
};

export default contenido;
