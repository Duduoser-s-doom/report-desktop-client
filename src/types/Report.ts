export type Report = {
  group: string;
  labNumber: number;
  name: string;
  points: number;
  githubURL: string;
  pdf: any;
  reportId: string;
};

export type ReportRaw = {
  labNumber: number;
  name: string;
  points: number;
  githubURL: string;
};
