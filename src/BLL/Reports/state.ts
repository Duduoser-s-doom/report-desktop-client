import { makeAutoObservable } from "mobx";
import { ReportRaw } from "../../types"

class Reports {
  searchText = "";
  group = "";
  reports = {
    raw: [] as ReportRaw[],
    excel: null as any,
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
