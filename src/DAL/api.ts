import axios from "axios";
import { BACKEND_URL } from "../consts";
import { Report, ReportCreateModel } from "../types";
const instance = axios.create({
  baseURL: BACKEND_URL,
});

export const getReports = async (
  group: string,
  name: string = "",
  page = 1,
  count = 10
) => {
  return await [
    {
      group: "R3180",
      name: "Daniel",
      labNumber: 1,
      points: 10,
      githubURL: "https://xtereo.github.io/lab1",
      pdf: { base64: "none", name: "R3180-Daniel-lab1.pdf" },
      reportId: String(new Date().getTime()),
    },
  ] as Report[];
};

export const createReports = (
  reports: ReportCreateModel[],
  group: string
) => {};

export const setReports = (reports: Report[], group: string = "") => {};
