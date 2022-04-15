import { action, makeObservable, observable } from "mobx";
import { ReportRaw } from "../../types"

class Reports {
  searchText = "";
  group = "";
  reports = {
    raw: [] as ReportRaw[],
    excel: null as any,
    pdfs: [] as any,
    zip: null as any,
  };
  constructor() {
    makeObservable(this, {
      searchText: observable,
      group: observable,
      reports: observable,
      setSearchText: action,
      resetDates: action,
    });
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
  resetDates = (): void => {
    this.searchText = "";
    this.group = "";
    this.reports = {
      raw: [],
      excel: null as any,
      pdfs: [] as any,
      zip: null as any,
    };
  };
}

export const reports = new Reports();
