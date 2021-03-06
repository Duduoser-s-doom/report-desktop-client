import { ReportRaw } from "../types";

export const testExcelData = {
  Sheets: {
    l1: {
      A1: {v:"Name"},
      A2: {v:"Daniel"},
      A3: {v:"Vitek"},
      B1: {v:"Git"},
      B2: {v:"https://Daniel/lab1"},
      B3: {v:"https://Vitek/lab1"},
      C1: {v:"Lab1"},
      C2: {v:10},
      C3: {v:10},
      D1: {v:"Git"},
      D2: {v:"https://Daniel/lab2"},
      D3: {v:"https://Vitek/lab2"},
      E1: {v:"Lab2"},
      E2: {v:10},
      E3: {v:10},
    },
    l2: {
      A1: {v:"Name"},
      A2: {v:"Danila"},
      A3: {v:"Kirill"},
      B1: {v:"Git"},
      B2: {v:"https://Danila/lab1"},
      B3: {v:"https://Kirill/lab1"},
      C1: {v:"Lab1"},
      C2: {v:10},
      C3: {v:10},
      D1: {v:"Git"},
      D2: {v:"https://Danila/lab2"},
      D3: {v:"https://Kirill/lab2"},
      E1: {v:"Lab2"},
      E2: {v:10},
      E3: {v:10},
      F1: {v:"Git"},
      F2: {v:"https://Danila/lab3"},
      F3: {v:"https://Kirill/lab3"},
      G1: {v:"Lab3"},
      G2: {v:10},
      G3: {v:10},
    },
  },
};

export const testReportsRaw = [
  {
    labNumber: 1,
    name: "Daniel",
    points: 10,
    githubURL: "https://Daniel/lab1",
  },
  {
    labNumber: 2,
    name: "Daniel",
    points: 10,
    githubURL: "https://Daniel/lab2",
  },
  {
    labNumber: 1,
    name: "Vitek",
    points: 10,
    githubURL: "https://Vitek/lab1",
  },
  {
    labNumber: 2,
    name: "Vitek",
    points: 10,
    githubURL: "https://Vitek/lab2",
  },
  {
    labNumber: 1,
    name: "Danila",
    points: 10,
    githubURL: "https://Danila/lab1",
  },
  {
    labNumber: 2,
    name: "Danila",
    points: 10,
    githubURL: "https://Danila/lab2",
  },
  {
    labNumber: 3,
    name: "Danila",
    points: 10,
    githubURL: "https://Danila/lab3",
  },
  {
    labNumber: 1,
    name: "Kirill",
    points: 10,
    githubURL: "https://Kirill/lab1",
  },
  {
    labNumber: 2,
    name: "Kirill",
    points: 10,
    githubURL: "https://Kirill/lab2",
  },
  {
    labNumber: 3,
    name: "Kirill",
    points: 10,
    githubURL: "https://Kirill/lab3",
  },
] as ReportRaw[];
