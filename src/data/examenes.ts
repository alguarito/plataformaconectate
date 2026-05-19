// Catálogo de exámenes finales (PDF) por grado y periodo.
//
// Cada examen verifica la transferencia de aprendizajes del periodo: síntesis,
// aplicación y argumentación.
//
// Dos formas de servirlos:
//   - `local: true` (preferido) — el PDF se genera con `make examen-build` desde
//     el YAML en content/examenes/ y vive en public/examenes-mejoras/. La página
//     lo sirve directamente.
//   - Drive PDF legacy — para grados/periodos que aún no migraron al YAML SSOT.
//     Mantiene `pdfId` apuntando al archivo de Drive.
//
// Cuando un examen migra al YAML, su `pdfId_archivo` conserva el ID de Drive
// original por si se quiere consultar el material previo.

export interface RecursoExamen {
  grado: number;
  periodo: number;
  /** Nombre del archivo PDF (e.g. "examen-1-11-TIC.pdf"). */
  archivo: string;
  /** Si está presente, el examen se sirve desde Drive con este ID. */
  pdfId?: string;
  /** Si es true, el examen se sirve desde public/examenes-mejoras/{archivo}. */
  local?: boolean;
  /** Drive ID original conservado tras migración a YAML SSOT (referencia). */
  pdfId_archivo?: string;
}

export const examenes: RecursoExamen[] = [
  {
    "grado": 6,
    "periodo": 1,
    "local": true,
    "archivo": "examen-1-6-TIC.pdf",
    "pdfId_archivo": "1-L51dUVdNYMAvnctSQtw5zRYHEKpmdr6"
  },
  {
    "grado": 6,
    "periodo": 2,
    "pdfId": "1p97z5Oeg7a2Z7s2cJ4J9LlcTxWiLDTNc",
    "archivo": "examen-2-6-TIC.pdf"
  },
  {
    "grado": 6,
    "periodo": 3,
    "pdfId": "17BzxjtC9NKQLWmPvWnsw0OnGbSQE-CG4",
    "archivo": "examen-3-6-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 1,
    "pdfId": "121NYrlxsbR_GJFDOsG3_8kbyT_6T4zcn",
    "archivo": "examen-1-7-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 2,
    "pdfId": "1zFdxwgjwZxbrtRdbedFxb4kclwMGbdtb",
    "archivo": "examen-2-7-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 3,
    "pdfId": "13tUb_yX9mTOAkCgXH-5PNdVDne_Sk4ej",
    "archivo": "examen-3-7-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 1,
    "local": true,
    "archivo": "examen-1-8-TIC.pdf",
    "pdfId_archivo": "1q5wHoPDhi17exUTAVE6Qg1DYbv7jhp-w"
  },
  {
    "grado": 8,
    "periodo": 2,
    "local": true,
    "archivo": "examen-2-8-TIC.pdf",
    "pdfId_archivo": "1j-zF6B8QehuiStuM13krJ1DeoXXyn4FZ"
  },
  {
    "grado": 8,
    "periodo": 3,
    "local": true,
    "archivo": "examen-3-8-TIC.pdf",
    "pdfId_archivo": "1JxsElggQ8S9INDN86nEB6t0n4nlH0mpi"
  },
  {
    "grado": 9,
    "periodo": 1,
    "local": true,
    "archivo": "examen-1-9-TIC.pdf",
    "pdfId_archivo": "1JuRK7X__xeyeLVXjvCnjKHHc6tYyZHgd"
  },
  {
    "grado": 9,
    "periodo": 2,
    "local": true,
    "archivo": "examen-2-9-TIC.pdf",
    "pdfId_archivo": "1Od87KfodnXD1Lc6AuMr2jqJrF7l6lC-z"
  },
  {
    "grado": 9,
    "periodo": 3,
    "local": true,
    "archivo": "examen-3-9-TIC.pdf",
    "pdfId_archivo": "1TQe-nrjNucLvTp4IWdhfEAyXY2T9jCwD"
  },
  {
    "grado": 10,
    "periodo": 1,
    "local": true,
    "archivo": "examen-1-10-TIC.pdf",
    "pdfId_archivo": "14BcdzCpDzvEppaV3jFWudPcmdNRMhphT"
  },
  {
    "grado": 10,
    "periodo": 2,
    "local": true,
    "archivo": "examen-2-10-TIC.pdf",
    "pdfId_archivo": "1S83Jw6SGy67-vIyBrw3IlYGHq91XACae"
  },
  {
    "grado": 10,
    "periodo": 3,
    "local": true,
    "archivo": "examen-3-10-TIC.pdf",
    "pdfId_archivo": "1JsrmRJdWeSurSKF2CV7XM1BCi_H6YGGX"
  },
  {
    "grado": 11,
    "periodo": 1,
    "local": true,
    "archivo": "examen-1-11-TIC.pdf",
    "pdfId_archivo": "13Vj6V4bPcm3FUX9Io59dVyLc6o2pBYFy"
  },
  {
    "grado": 11,
    "periodo": 2,
    "local": true,
    "archivo": "examen-2-11-TIC.pdf",
    "pdfId_archivo": "1JV6yLokb10l5z5xjSNeySZDQIKw0Ac0R"
  },
  {
    "grado": 11,
    "periodo": 3,
    "local": true,
    "archivo": "examen-3-11-TIC.pdf",
    "pdfId_archivo": "1w3qk0w-RAM1joAVXeIAANiJgbASu5F-U"
  }
];

export function getExamen(grado: number, periodo: number): RecursoExamen | undefined {
  return examenes.find((e) => e.grado === grado && e.periodo === periodo);
}

/**
 * URL para mostrar el PDF embebido en un iframe.
 * - Local: el PDF se sirve desde `/examenes-mejoras/{archivo}`.
 * - Drive: vista de preview de Google Drive.
 */
export function examenPreviewUrlFor(e: RecursoExamen, baseUrl = ''): string {
  if (e.local) return `${baseUrl}/examenes-mejoras/${e.archivo}`;
  return e.pdfId ? `https://drive.google.com/file/d/${e.pdfId}/preview` : '';
}

/** URL para descargar el PDF (botón "Descargar"). */
export function examenDownloadUrlFor(e: RecursoExamen, baseUrl = ''): string {
  if (e.local) return `${baseUrl}/examenes-mejoras/${e.archivo}`;
  return e.pdfId ? `https://drive.google.com/uc?export=download&id=${e.pdfId}` : '';
}

/** URL para abrir el PDF en pestaña nueva ("Abrir en Drive" o "Abrir PDF"). */
export function examenViewUrlFor(e: RecursoExamen, baseUrl = ''): string {
  if (e.local) return `${baseUrl}/examenes-mejoras/${e.archivo}`;
  return e.pdfId ? `https://drive.google.com/file/d/${e.pdfId}/view` : '';
}

// ─── Helpers legacy (solo Drive) ─────────────────────────────────────
// Mantenidos por compatibilidad. Las nuevas llamadas deben usar los
// helpers `*For(e, base)` que soportan ambos modos.

export function examenPreviewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function examenDownloadUrl(id: string): string {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

export function examenViewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/view`;
}
