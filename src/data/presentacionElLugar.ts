/**
 * Metadata de la presentación "El Lugar de Llegar a Ser" — Tomo V de la
 * Colección MILC (el tomo de cierre), generada con NotebookLM y curada
 * por el Dr. Álvaro Cárdenas Orozco.
 *
 * Las slides viven en `public/presentaciones/el-lugar-de-llegar-a-ser/slide-NN.webp`
 * (12 imágenes), junto al PDF descargable.
 *
 * Cada entrada describe el slide para:
 *  - Alt text accesible (lectores de pantalla)
 *  - Tooltip y caption visibles
 *  - Schema.org PresentationDigitalDocument
 */
import type { SlideMilc } from './presentacionMilc';

export const presentacionElLugar = {
  titulo: 'El Lugar de Llegar a Ser',
  subtitulo:
    'El espacio pedagógico como agente de la formación · Presentación del Tomo V de la Colección MILC',
  autor: 'PhD. Álvaro Cárdenas Orozco',
  institucion: 'I.E. Sor María Juliana · Cartago, Valle del Cauca',
  fecha: '2026',
  totalSlides: 12,
  archivoPdf: 'el-lugar-de-llegar-a-ser.pdf',
  duracionEstimada: '10-12 minutos',
  licencia: 'CC BY-SA 4.0',
} as const;

export const slidesElLugar: readonly SlideMilc[] = [
  {
    numero: 1,
    titulo: 'El Lugar de Llegar a Ser',
    descripcion:
      'Portada. Tomo V de la Colección MILC: «El espacio pedagógico como agente de la formación». Porque nadie llega a ser en un lugar cualquiera. Dr. Álvaro Cárdenas Orozco · I.E. Sor María Juliana, Cartago.',
  },
  {
    numero: 2,
    titulo: 'La pregunta que faltaba en la educación',
    descripcion:
      'El arco de la colección como una trayectoria ascendente: 1. El Yo (la atención), 2. El Nosotros (el arraigo), 3. El Cómo (el método), 4. El Con Qué (la herramienta) y, al final, iluminado en oro, 5. El Dónde (el lugar). Después de definir al sujeto, la comunidad, el método y la herramienta, queda la condición donde todo florece: el espacio. No es un apéndice de los otros cuatro; es la condición donde la vida que aprende llega a ser.',
  },
  {
    numero: 3,
    titulo: 'El aula no es neutra: es un agente de formación',
    descripcion:
      'Parte uno, el problema. Contraste visual entre el aula en filas frente al tablero y una trama de islas interconectadas. El paradigma falso: creer que el espacio es solo el contenedor neutro y el aprendizaje el contenido. La realidad incómoda: el lugar educa por su sola disposición, y hay aulas que apagan exactamente la capacidad que dicen querer encender. El silencio de un estudiante no es un dato sobre él; es una noticia sobre el lugar donde lo pusimos a estar.',
  },
  {
    numero: 4,
    titulo: 'La frontera mental: escuelas que se empobrecen al cerrarse',
    descripcion:
      'La escuela-isla frente a la escuela-nodo. La isla es una fortaleza que defiende su perímetro y funciona de puertas para adentro; enseña a los jóvenes de la periferia que lo importante sucede «lejos» y sin ellos. El nodo es un cruce de trayectorias: entiende que su espacio no se mide en metros cuadrados, sino en la densidad de su red, y le dice al joven, con hechos, que pertenece a la comunidad de los que investigan y crean.',
  },
  {
    numero: 5,
    titulo: 'Lo que la pedagogía sabe (y nuestra práctica olvidó)',
    descripcion:
      'Parte dos, los referentes. Cuatro anclajes teóricos: Reggio Emilia (Malaguzzi) y el ambiente como «tercer maestro», que educa sin dar clase por su luz, su forma y lo que invita a hacer; Vygotsky y el desarrollo mediado, donde las funciones superiores aparecen primero en la interacción con el entorno; Yi-Fu Tuan y la distinción espacio/lugar, pues el espacio anónimo se vuelve lugar solo cuando lo cargamos de experiencia y valor; y Lave y Wenger con las comunidades de práctica, donde lo que sostiene el aprendizaje no es la sala, sino el vínculo.',
  },
  {
    numero: 6,
    titulo: 'Si alguien lo diseñó, alguien puede rediseñarlo',
    descripcion:
      'Parte tres, la solución. «Esperar el presupuesto es esperar el permiso para no hacer nada». El espacio es un artefacto: no podemos decir «el aula es así» como quien dice «la gravedad es así». Mover las mesas no requiere presupuesto; requiere una decisión pedagógica.',
  },
  {
    numero: 7,
    titulo: 'Las cuatro operaciones sobre el espacio',
    descripcion:
      'El ciclo del método: 1. Nombrar (reconocer que el espacio es un agente activo y que su disposición actual es una decisión tuya); 2. Fundar (crear «el espacio otro» —un semillero, un laboratorio— donde no había nada, con lo que hay a mano); 3. Abrir (tejer la red, buscar la infraestructura prestada y conectar la escuela como nodo hacia el mundo exterior); 4. Sostener (institucionalizar la práctica y medir lo invisible, para que el espacio sobreviva al maestro que lo fundó).',
  },
  {
    numero: 8,
    titulo: 'Fundar: el vínculo resiste, el ladrillo no',
    descripcion:
      'Dos ideas de la fundación. El espacio sin lugar: si no hay sede, por cierre o falta de recursos, se funda el vínculo, porque el espacio educativo no es el edificio sino la red de personas investigando juntas. Y abrir el ágora: todo lugar fundado necesita un escenario de palabra pública, donde el estudiante no responde un examen para ser calificado, sino que defiende como autor lo que investigó y es tomado en serio.',
  },
  {
    numero: 9,
    titulo: 'Abrir: la lógica de la red sobre la lógica del inventario',
    descripcion:
      'Cambiar la pregunta: de «¿cuánto cuesta?» a «¿quién lo presta?». Lo que un colegio público no puede lograr acumulando propiedad, lo logra extendiendo conexiones. El diagrama muestra a la escuela pública conectada con universidades (EAFIT, Univalle), empresas de tecnología (ESRI, Fedesoft) y entidades de gobierno. Aliarse no es recibir caridad: es extender las fronteras del aula e integrar al estudiante en la práctica profesional real.',
  },
  {
    numero: 10,
    titulo: 'Sostener: evaluar lo que la nota no ve',
    descripcion:
      'Lo que no se puede mostrar, se recorta. La nota tradicional fotografía un instante; el ambiente exige medir el proceso y la trayectoria. La rúbrica de ambiente tiene cuatro dimensiones: participación (de la asistencia pasiva a tomar la palabra sin que se lo manden), autoría (de repetir un contenido dado a defender un portafolio propio), pertenencia (de estar «de paso» a usar el lenguaje del «nosotros» y cuidar el espacio) y apertura (del aislamiento escolar al número de redes y salidas externas conectadas).',
  },
  {
    numero: 11,
    titulo: 'El destino cambia cuando cambia la arquitectura del encuentro',
    descripcion:
      'Parte cuatro, conclusiones y logros. Dos casos reales. El de Luisa: apagada y sin voz en un aula evaluada solo con exposiciones orales, recuperó la voz en el semillero de astronomía Betelgeuse al cambiar la palabra de «examen» a «compartir un hallazgo», ganó galardones y viajó al extranjero; no cambió Luisa, cambió el sitio. Y el congreso nacional: un estudiante de escuela pública presentando ante investigadores adultos, que no es una hazaña de superación personal, sino el triunfo de un espacio que le otorgó un ágora y lo validó como autor en igualdad de condiciones.',
  },
  {
    numero: 12,
    titulo: 'El último acto de soberanía',
    descripcion:
      'Cierre. «El lugar donde alguien llega a ser no lo decreta el sistema… lo funda un maestro que se atreve». El último acto de soberanía docente no es decidir qué se enseña o con qué, sino atreverse a diseñar el entorno físico y social para que el potencial de un joven deje de ser invisible. Funda hoy el lugar donde otro llegará a ser mañana.',
  },
] as const;
