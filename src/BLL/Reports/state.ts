import { makeAutoObservable } from "mobx";
import { read } from "xlsx";
import { ReportRaw } from "../../types"
import { excelToReportsRaw } from "../../utils";

class Reports {
  searchText = "";
  group = "";
  isFetching = false;
  reports = {
    raw: [] as ReportRaw[],
    excel: null as File | null,
    pdf: [] as any,
    zip: null as any,
  };
  constructor() {
    makeAutoObservable(this)
  }
  setSearchText = (text: string): void => {
    this.searchText = text;
  };
  setGroup = (group: string): void => {
    this.group = group
  }
  setReportsExcel = (file: any): void => {
    this.reports.excel = file
  }
  setReportsRaw = (reports: ReportRaw[]) => {
    this.reports.raw = reports
  }
  setReportsByExcelFile = async (file: File) =>{
    this.isFetching = true
    const data = await file.arrayBuffer()
    const workbook = read(data)
    this.reports.excel = file
    this.reports.raw = excelToReportsRaw(workbook)
    this.isFetching = false
  }
  resetDates = (): void => {
    this.searchText = "";
    this.group = "";
    this.reports = {
      raw: [],
      excel: null as any,
      pdf: [] as any,
      zip: null as any,
    };
  };
}

export const reports = new Reports();
