export type Report = {
  group: string;
  labNumber: number;
  name: string;
  points: number;
  githubURL: string;
  pdf: PdfFile;
  reportId: string;
};

export type ReportRaw = {
  labNumber: number;
  name: string;
  points: number;
  githubURL: string;
};

export type ReportCreateModel = {
  labNumber: number;
  name: string;
  points: number;
  githubURL: string;
  pdf: PdfFile;
};

export type ReportChangeModel = {
  group?: string;
  labNumber?: number;
  name?: string;
  points?: number;
  githubURL?: string;
}

type PdfFile = {
  name: string;
  base64: string;
};
