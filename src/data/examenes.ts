// Auto-generado desde Drive (carpeta de exámenes)
// Total: 18 exámenes (3 períodos × 6 grados)
//
// Cada examen es un PDF alojado en Google Drive que verifica la transferencia
// de aprendizajes del período: aplicación, argumentación y síntesis.

export interface RecursoExamen {
  grado: number;
  periodo: number;
  pdfId: string;
  archivo: string;
}

export const examenes: RecursoExamen[] = [
  {
    "grado": 6,
    "periodo": 1,
    "pdfId": "1-L51dUVdNYMAvnctSQtw5zRYHEKpmdr6",
    "archivo": "examen-1-6-TIC.pdf"
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
    "pdfId": "1q5wHoPDhi17exUTAVE6Qg1DYbv7jhp-w",
    "archivo": "examen-1-8-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 2,
    "pdfId": "1j-zF6B8QehuiStuM13krJ1DeoXXyn4FZ",
    "archivo": "examen-2-8-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 3,
    "pdfId": "1JxsElggQ8S9INDN86nEB6t0n4nlH0mpi",
    "archivo": "examen-3-8-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 1,
    "pdfId": "1JuRK7X__xeyeLVXjvCnjKHHc6tYyZHgd",
    "archivo": "examen-1-9-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 2,
    "pdfId": "1Od87KfodnXD1Lc6AuMr2jqJrF7l6lC-z",
    "archivo": "examen-2-9-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 3,
    "pdfId": "1TQe-nrjNucLvTp4IWdhfEAyXY2T9jCwD",
    "archivo": "examen-3-9-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 1,
    "pdfId": "14BcdzCpDzvEppaV3jFWudPcmdNRMhphT",
    "archivo": "examen-1-10-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 2,
    "pdfId": "1S83Jw6SGy67-vIyBrw3IlYGHq91XACae",
    "archivo": "examen-2-10-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 3,
    "pdfId": "1JsrmRJdWeSurSKF2CV7XM1BCi_H6YGGX",
    "archivo": "examen-3-10-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 1,
    "pdfId": "13Vj6V4bPcm3FUX9Io59dVyLc6o2pBYFy",
    "archivo": "examen-1-11-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 2,
    "pdfId": "1JV6yLokb10l5z5xjSNeySZDQIKw0Ac0R",
    "archivo": "examen-2-11-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 3,
    "pdfId": "1w3qk0w-RAM1joAVXeIAANiJgbASu5F-U",
    "archivo": "examen-3-11-TIC.pdf"
  }
];

export function getExamen(grado: number, periodo: number): RecursoExamen | undefined {
  return examenes.find((e) => e.grado === grado && e.periodo === periodo);
}

export function examenPreviewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function examenDownloadUrl(id: string): string {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

export function examenViewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/view`;
}
