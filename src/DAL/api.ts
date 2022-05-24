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
) => {
  return (
    await instance.get<{ reports: Report[]; count: number }>(
      `reports?page=${page}&count=${count}&name=${name}&group=${group}`
    )
  ).data;
};

export const createReports = async (reports: ReportCreateModel[]) => {
  const {success} = (await instance.post<ResultCode>(`reports`, { reports })).data;
  handleServerError(success)
};

export const updateReports = async (reports: Report[]) => {
  const {success} = (await instance.put<ResultCode>(`reports`, { reports })).data;
  handleServerError(success)
};

export const deleteReports = async (reports: Report[]) => {
  const {success} =  (
    await instance.delete<ResultCode>(`reports`, { data: { reports } })
  ).data;
  handleServerError(success)
};

export const handleServerError = (success:boolean) => {
  if(!success){
    throw new Error("Bad request");
  }
}

export type ResultCode = {
  success: boolean
}
