/**
 * Contenido web del examen final · Grado 10 · Período 3
 *
 * Auto-generado desde content/examenes/10-3.yaml por
 * scripts/build-examenes-web-ts.py. Edita el YAML, no este archivo.
 *
 * Solo expone el BANCO DE PRÁCTICA. El examen formal (5 preguntas)
 * vive únicamente como PDF para preservar su carácter sumativo.
 */
import type { ContenidoExamen } from './_schema';

const contenido: ContenidoExamen = {
  grado: 10,
  periodo: 3,
  titulo: 'Examen final · Ofimática con IA, contabilidad y emprendimiento',
  duracionMin: 45,
  ponderacion: 20,
  fechaAplicacion: 'Sesión 10',
  bancoPractica: {
    tipo: 'quiz',
    titulo: 'Banco de práctica · Ofimática con IA, contabilidad y emprendimiento',
    instrucciones: 'Practica con 22 preguntas de opción múltiple. Esta práctica NO cuenta para la nota: es para que llegues preparado al examen formal. Puedes repetir las veces que quieras.',
    preguntas: [
      {
        enunciado: '¿Qué función nueva tiene Google Sheets desde 2025 para integrar IA en celdas?',
        opciones: [
          '=SUMA()',
          '=GEMINI()',
          '=PRINT()',
          '=GUARDAR()'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Exacto. =GEMINI("pregunta") permite consultar IA directamente desde una celda con prompt entre comillas.',
        feedbackIncorrecto: 'Es =GEMINI(). Integra IA generativa dentro de Sheets para análisis, clasificación y propuestas.'
      },
      {
        enunciado: '¿Cuáles son los 3 elementos obligatorios de la contabilidad básica?',
        opciones: [
          'Solo ingresos',
          'Ingresos, egresos y balance neto',
          'Solo el saldo bancario',
          'Compras, ventas, impuestos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Ingresos + egresos + balance neto. Los 3 juntos cuentan la historia económica del periodo.',
        feedbackIncorrecto: 'Ingresos + egresos + balance neto. Saltar uno deja la contabilidad incompleta.'
      },
      {
        enunciado: '¿Cuál fórmula usas para sumar SOLO los egresos cuya categoría sea "Transporte"?',
        opciones: [
          '=SUMA(B2:B30)',
          '=SUMAR.SI(C2:C30; "Transporte"; B2:B30)',
          '=PROMEDIO(B2:B30)',
          '=CONTAR.SI(B2:B30; 0)'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. =SUMAR.SI con criterio "Transporte" suma solo las filas que cumplen la condición.',
        feedbackIncorrecto: '=SUMAR.SI. Es la fórmula condicional para agrupar gastos por categoría.'
      },
      {
        enunciado: 'Tu negocio tiene costos fijos $500.000/mes, precio unitario $10.000, costo variable $5.000. ¿Cuál es tu punto de equilibrio en unidades?',
        opciones: [
          '50 unidades',
          '100 unidades',
          '200 unidades',
          '500 unidades'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. PE = 500.000 / (10.000 - 5.000) = 100 unidades mensuales.',
        feedbackIncorrecto: 'PE = Costos fijos / Margen unitario. 500.000 / 5.000 = 100 unidades.'
      },
      {
        enunciado: '¿Cuál de estos costos es FIJO?',
        opciones: [
          'Insumos por unidad producida',
          'Comisión por venta',
          'Arriendo del local',
          'Envío al cliente'
        ],
        respuestaIndex: 2,
        feedbackCorrecto: 'Correcto. Arriendo se paga existan o no ventas. Insumos, comisión y envío son variables (dependen del volumen).',
        feedbackIncorrecto: 'Arriendo es fijo. Los otros 3 dependen de la cantidad vendida (variables).'
      },
      {
        enunciado: '¿Qué principio de honestidad visual aplica a gráficos de barras?',
        opciones: [
          'El eje Y debe partir de cero (salvo justificación explícita)',
          'Mientras más colores, mejor',
          'Eje Y desde el valor mínimo para que se vean grandes las diferencias',
          'Sin etiquetas porque distraen'
        ],
        respuestaIndex: 0,
        feedbackCorrecto: 'Correcto. Eje Y desde cero evita exagerar diferencias visualmente. Es regla de honestidad visual.',
        feedbackIncorrecto: 'Eje Y desde cero. Si no parte de cero, las diferencias se inflan visualmente y engañan al lector.'
      },
      {
        enunciado: 'Quieres mostrar la composición de tus egresos del mes (alimentación, transporte, ocio, ahorro). ¿Qué gráfico es el más adecuado?',
        opciones: [
          'Líneas',
          'Circular (pastel)',
          'Dispersión',
          '3D rotativo'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Circular es el indicado para proporciones del total (4 categorías es ideal).',
        feedbackIncorrecto: 'Circular para proporciones del total. Líneas para tendencia temporal. Barras para comparación entre categorías.'
      },
      {
        enunciado: '¿Cuántas preguntas básicas responde un estudio de mercado?',
        opciones: [
          '1',
          '5 (cliente, necesidad, precio, competencia, canal)',
          '100',
          '0'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 5 preguntas: quién es el cliente, qué necesita, cuánto está dispuesto a pagar, cuál es la competencia, por qué canal se entera.',
        feedbackIncorrecto: 'Son 5 preguntas básicas. Sin responder esas 5, el negocio se construye sobre suposiciones.'
      },
      {
        enunciado: '¿Cuántas respuestas mínimas pide la encuesta cuantitativa del estudio de mercado?',
        opciones: [
          '1-2',
          '15-20',
          '1.000',
          '10.000'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 15-20 respuestas mínimas dan base para detectar patrones sin exigir esfuerzo desproporcionado.',
        feedbackIncorrecto: 'Son 15-20 respuestas mínimas. Suficientes para análisis sin esfuerzo desproporcionado.'
      },
      {
        enunciado: '¿Cuántos bloques tiene el Business Model Canvas de Osterwalder?',
        opciones: [
          '1',
          '9',
          '50',
          '100'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 9 bloques en un lienzo apaisado. Es la herramienta visual más usada para diseñar modelos de negocio.',
        feedbackIncorrecto: '9 bloques. Alex Osterwalder, 2010. Es el estándar contemporáneo del oficio emprendedor.'
      },
      {
        enunciado: '¿Cuál bloque del Canvas es el corazón del modelo de negocio?',
        opciones: [
          'Costos',
          'Propuesta de valor',
          'Canales',
          'Socios clave'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La propuesta de valor define qué problema resuelves y para quién. Todo lo demás se ajusta a eso.',
        feedbackIncorrecto: 'Propuesta de valor. Centro del Canvas. Sin claridad ahí, los otros 8 bloques se desordenan.'
      },
      {
        enunciado: '¿Con qué se llena el Canvas correctamente?',
        opciones: [
          'Con tu imaginación',
          'Con datos verificables del estudio de mercado',
          'Con post-its bonitos',
          'Con suposiciones'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Datos verificables del estudio de mercado. Sin datos, el Canvas es ficción que se cae al primer cliente.',
        feedbackIncorrecto: 'Con datos verificables. Sin estudio de mercado previo, el Canvas es suposición que se desmiente apenas hablas con clientes reales.'
      },
      {
        enunciado: '¿Cuántas piezas básicas tiene la comunicación empresarial de un microemprendimiento?',
        opciones: [
          '1',
          '3 (propuesta comercial breve, correo de presentación, publicación visual)',
          '10',
          '100'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 3 piezas que deben ser coherentes entre sí. Si dicen cosas distintas, el cliente desconfía.',
        feedbackIncorrecto: '3 piezas: propuesta breve, correo, publicación visual. Deben ser coherentes; incoherencias erosionan confianza.'
      },
      {
        enunciado: 'Tu proyecto integrador del periodo tiene 6 componentes obligatorios. ¿Cuál NO debe faltar?',
        opciones: [
          'Solo el Canvas',
          'Idea con problema real + Canvas + contabilidad proyectada + 3 piezas de comunicación + plan de validación + bitácora del año',
          'Solo el balance',
          'Solo el video promocional'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Los 6 componentes juntos. El plan de validación con 5 personas reales es clave.',
        feedbackIncorrecto: 'Los 6 componentes: idea + Canvas + contabilidad + 3 piezas comunicación + plan validación + bitácora.'
      },
      {
        enunciado: '¿Qué propiedad NO es irrenunciable de la sustentación final del periodo?',
        opciones: [
          'Tiempo controlado de 10 minutos',
          'Demostración real de los 3 productos del año',
          'Honestidad sobre uso de IA',
          'Música de fondo emocionante'
        ],
        respuestaIndex: 3,
        feedbackCorrecto: 'Correcto. La música es decoración opcional. Lo irrenunciable: tiempo, demo real, honestidad IA.',
        feedbackIncorrecto: 'La música no. Lo irrenunciable: tiempo controlado + demostración real + honestidad sobre uso de IA.'
      },
      {
        enunciado: '¿Cuál es el oficio ancestral del Valle que conecta con la ofimática y contabilidad este periodo?',
        opciones: [
          'El abogado del barrio',
          'La tendera de la esquina con su cuaderno cuadriculado',
          'El sastre',
          'El maestro de música'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La tendera llevaba contabilidad rigurosa en su cuaderno: clientes, fiados, productos, saldo en tiempo real.',
        feedbackIncorrecto: 'La tendera con su cuaderno cuadriculado. Era contabilidad rigurosa antes del software.'
      },
      {
        enunciado: 'Tu balance neto del mes es -$30.000. ¿Qué significa?',
        opciones: [
          'Tienes excedente',
          'Tienes déficit: gastaste $30.000 más de lo que recibiste',
          'Empate exacto',
          'Ganaste $30.000'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Balance negativo significa déficit. Hay que ajustar gastos o aumentar ingresos para el próximo mes.',
        feedbackIncorrecto: 'Déficit: gastaste más de lo que entró. Si se repite mes a mes, el negocio o el bolsillo personal se hunden.'
      },
      {
        enunciado: 'Tu microempresa hipotética tiene PE de 60 ventas/mes y realísticamente vendes 50. ¿Qué dicen los datos?',
        opciones: [
          'Estás bien, sigue así',
          'Hay problema estructural: o subes precio, o bajas costos fijos, o cambias el modelo',
          'Necesitas más publicidad',
          'El negocio es viable como está'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Si las ventas reales no alcanzan el PE, el modelo es deficitario. Hay que ajustar precio, costos o producto.',
        feedbackIncorrecto: 'Hay problema estructural. Vender bajo PE = pérdida cada mes. Hay que subir precio, bajar costos o cambiar el modelo.'
      },
      {
        enunciado: 'Tu flujo de caja proyecta 3 meses: M1 = +$200K, M2 = -$150K, M3 = +$100K. ¿Cuál es el saldo acumulado al final de M3?',
        opciones: [
          '-$50K',
          '+$150K',
          '+$300K',
          '+$450K'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. 200K - 150K + 100K = 150K acumulados. El flujo acumulado muestra la viabilidad real.',
        feedbackIncorrecto: '200K - 150K + 100K = 150K. El flujo acumulado revela si el negocio sobrevive cada mes.'
      },
      {
        enunciado: 'Un gráfico de barras que muestra crecimiento de $100 a $110 con eje Y empezando en $95. ¿Qué problema tiene?',
        opciones: [
          'Ninguno, se ve bien',
          'El eje Y truncado infla visualmente las diferencias, comunicando un crecimiento más grande del real',
          'Tiene muchos colores',
          'Es muy pequeño'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Eje truncado engaña al lector. El crecimiento parece grande pero solo es 10% real.',
        feedbackIncorrecto: 'Eje Y truncado infla diferencias. Es trampa visual común; el eje debe partir de 0 salvo justificación explícita.'
      },
      {
        enunciado: 'Tu estudio de mercado dice que el 80% de tus clientes potenciales paga máximo $10K por tu producto. Tu costo unitario es $8K. ¿Es viable el negocio?',
        opciones: [
          'Sí, el margen es de $2K por unidad',
          'Solo viable si los costos fijos son muy bajos y puedes vender volumen suficiente para cubrir punto de equilibrio',
          'No, los costos son muy altos',
          'No se puede saber sin más datos'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. Margen de $2K por unidad implica vender mucho volumen para cubrir costos fijos. Habría que analizar PE concreto.',
        feedbackIncorrecto: 'Margen de $2K implica vender mucho volumen. Sin saber costos fijos exactos no se decide; PE concreto es el siguiente paso.'
      },
      {
        enunciado: 'Tus 3 piezas de comunicación empresarial dicen precios distintos: propuesta $50K, correo $45K, post de Instagram $60K. ¿Qué problema tienes?',
        opciones: [
          'Está bien, cada canal puede ser distinto',
          'Incoherencia que erosiona la confianza del cliente; las 3 piezas deben decir lo mismo',
          'Es buena estrategia',
          'Solo importa el de Instagram'
        ],
        respuestaIndex: 1,
        feedbackCorrecto: 'Correcto. La incoherencia destruye confianza. Las 3 piezas profesionales deben tener exactamente la misma propuesta.',
        feedbackIncorrecto: 'Incoherencia erosiona confianza. Una propuesta única, replicada en las 3 piezas, es lo profesional.'
      }
    ]
  }
};

export default contenido;
