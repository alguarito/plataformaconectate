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
    "pdfId": "1f9O_xrhUX8m_TuNErPM0l-1yFiIucJ6i",
    "archivo": "examen-1-6-TIC.pdf"
  },
  {
    "grado": 6,
    "periodo": 2,
    "pdfId": "1f_xSgcvcZNr2r2nxBO58jfpj5cn-sjgU",
    "archivo": "examen-2-6-TIC.pdf"
  },
  {
    "grado": 6,
    "periodo": 3,
    "pdfId": "1LPGYTxUdyx1G2mG8vVNwxSGZCim6IUTk",
    "archivo": "examen-3-6-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 1,
    "pdfId": "1aQckwrTlfXjNVZL3ebo4E8xa_hRaEG1D",
    "archivo": "examen-1-7-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 2,
    "pdfId": "1GFd0oQuvFBD-RyCksJusrdsByP8mJd4p",
    "archivo": "examen-2-7-TIC.pdf"
  },
  {
    "grado": 7,
    "periodo": 3,
    "pdfId": "1Y5x2LKs3SMPwPLCvcOGTyJX8C-rmt_3r",
    "archivo": "examen-3-7-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 1,
    "pdfId": "1jtpPEldtgLNWL7d2MGbOw16KdyaHPIo9",
    "archivo": "examen-1-8-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 2,
    "pdfId": "1bSqkO7ayEmIpU4SeOgiDsa_hgmPQvWt7",
    "archivo": "examen-2-8-TIC.pdf"
  },
  {
    "grado": 8,
    "periodo": 3,
    "pdfId": "1zmRasbF0F1N480r_fdDIpI7hgChazpkI",
    "archivo": "examen-3-8-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 1,
    "pdfId": "1zmLCF_wQ1JSIPQZxtlHIhEnLqgqTMQDi",
    "archivo": "examen-1-9-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 2,
    "pdfId": "1_luV1nPSaPbnkWuqjvl5IDWKjrpmQk0F",
    "archivo": "examen-2-9-TIC.pdf"
  },
  {
    "grado": 9,
    "periodo": 3,
    "pdfId": "1AXaUIn0OD_SQuhbG-LlsUT2X4oYAWKpN",
    "archivo": "examen-3-9-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 1,
    "pdfId": "1M8u54USi5EbKU0MIMtoErfdR0o5QI6iH",
    "archivo": "examen-1-10-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 2,
    "pdfId": "14RSbmPOrIMEFooE0TGbV8Vch-56ioELn",
    "archivo": "examen-2-10-TIC.pdf"
  },
  {
    "grado": 10,
    "periodo": 3,
    "pdfId": "1c15pDqQ7JdoeVzPhqIjRGIOHjZkjAs5B",
    "archivo": "examen-3-10-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 1,
    "pdfId": "1q7N-09NWdhb5OWVNuTdu9EyimTzRIMez",
    "archivo": "examen-1-11-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 2,
    "pdfId": "1_nnZRbsBnKG0g6zff_B2USJZJCaOknNx",
    "archivo": "examen-2-11-TIC.pdf"
  },
  {
    "grado": 11,
    "periodo": 3,
    "pdfId": "1_yDmXiMJUGWgRwG7K43Aey-BNDJeuFLE",
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
