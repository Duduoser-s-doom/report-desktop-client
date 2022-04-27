import axios from "axios";
import { BACKEND_URL } from "../consts";
import { report } from "../test-data/report";
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
  return (await [report]) as Report[];
};

export const createReports = (
  reports: ReportCreateModel[],
  group: string
) => {};

export const setReports = async (reports: Report[]) => {};

export const deleteReports = async (reportsId: string[]) => {};
