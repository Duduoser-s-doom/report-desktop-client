import axios from "axios";
import { BACKEND_URL } from "../consts";
import { Report, ReportCreateModel } from "../types";
axios.defaults.adapter = require("axios/lib/adapters/http"); // always use Node.js adapter

const instance = axios.create({
  baseURL: BACKEND_URL,
});

export const retrieveReports = async (
  group: string,
  name: string = "",
  page = 1,
  count = 10
): Promise<{ reports: Report[]; count: number }> => {
  return (
    await instance.get(
      `reports?page=${page}&count=${count}&name=${name}&group=${group}`
    )
  ).data;
};

export const createReports = async (reports: ReportCreateModel[]) => {
  return (await instance.post(`reports`, { reports })).data;
};

export const updateReports = async (reports: Report[]) => {
  return (await instance.put(`reports`, { reports })).data;
};

export const deleteReports = async (reports: Report[]) => {
  return await (
    await instance.delete(`reports`, { data: { reports } })
  ).data;
};
