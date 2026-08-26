/**
 * Paleta de portada por grado, sincronizada con `COLORES_POR_GRADO` en
 * `scripts/build-guias-g11.py`.
 *
 * Existía solo del lado del PDF, así que la página web de una guía no tenía
 * forma de usar el color de su grado y los bloques quedaban en un color fijo,
 * distinto del impreso. Al vivir aquí, pantalla y papel comparten paleta.
 *
 * Si cambias un color, cámbialo también en el builder: son la misma decisión
 * editorial expresada en dos sitios.
 */
export interface ColorGrado {
  /** Color dominante de la banda de portada. */
  primary: string;
  /** Variante oscura, para texto sobre fondo claro y bordes. */
  dark: string;
  /** Variante suave, para fondos de bloque. */
  soft: string;
}

export const COLORES_GRADO: Record<number, ColorGrado> = {
  6:  { primary: '#0066FF', dark: '#003D99', soft: '#D6E8FF' },
  7:  { primary: '#84CC16', dark: '#4D7C0F', soft: '#ECFCCB' },
  8:  { primary: '#FF6600', dark: '#9A3E00', soft: '#FFE4D0' },
  9:  { primary: '#7C3AED', dark: '#4C1D95', soft: '#EDE9FE' },
  10: { primary: '#FF2D87', dark: '#9F1B56', soft: '#FFE0EE' },
  11: { primary: '#0066FF', dark: '#003D99', soft: '#D6E8FF' },
};

/** Devuelve la paleta del grado, con la de 6.º como respaldo. */
export function colorGrado(numero: number): ColorGrado {
  return COLORES_GRADO[numero] ?? COLORES_GRADO[6];
}
