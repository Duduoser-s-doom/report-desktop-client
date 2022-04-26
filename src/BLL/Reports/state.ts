import { makeAutoObservable } from "mobx";
import { read } from "xlsx";
import { Report, ReportChangeModel, ReportRaw } from "../../types";
import { excelToReportsRaw, generatePDFByReports } from "../../utils";
import Zip from "jszip";
import { getReports, setReports } from "../../DAL";

class Reports {
  searchText = "";
  group = "";
  isFetchingReports = false;
  isFetching = false
  page = 1;
  reports = {
    selected: [] as Report[],
    fromSearch: [] as Report[],
    raw: [] as ReportRaw[],
    excel: null as File | null,
    pdf: [] as any,
    zip: null as any,
  };
  constructor() {
    makeAutoObservable(this);
  }

  changeReports = async (reportChanges: ReportChangeModel) => {
    this.isFetching = true
    Object.keys(reportChanges).forEach((r: string) =>
      this.reports.selected.forEach(
        (s: Report) =>
          //@ts-ignore
          (s[r as keyof ReportChangeModel] =
            reportChanges[r as keyof ReportChangeModel])
      )
    );
    const pdfFiles = await generatePDFByReports(this.reports.selected, this.group)
    this.reports.selected.forEach((s,index)=>s.pdf = pdfFiles[index])
    this.isFetching = false
  };
  changeAndSaveReports = async (reportChanges: ReportChangeModel) =>{
    this.changeReports(reportChanges)
    this.isFetching = true
    await setReports(this.reports.selected)
    this.isFetching = false
  }
  fetchReports = async () => {
    this.isFetchingReports = true;
    const reports = await getReports(
      this.searchText,
      this.searchText,
      this.page
    );
    this.reports.fromSearch = reports;
    this.isFetchingReports = false;
  };
  setSearchText = (text: string): void => {
    this.searchText = text;
  };
  setGroup = (group: string): void => {
    this.group = group;
  };
  setReportsExcel = (file: any): void => {
    this.reports.excel = file;
  };
  setSelectedReports = (reports: Report[]) => {
    this.reports.selected = reports
  }
  setReportsRaw = (reports: ReportRaw[]) => {
    this.reports.raw = reports;
  };
  setReportsByExcelFile = async (file: File) => {
    this.isFetching = true;
    const data = await file.arrayBuffer();
    const workbook = read(data);
    this.reports.excel = file;
    this.reports.raw = excelToReportsRaw(workbook);
    this.isFetching = false;
  };
  generatePDFAndZipFiles = async () => {
    let zip = new Zip();
    const folder = zip.folder("Reports");
    const pdfFiles = await generatePDFByReports(this.reports.raw, this.group, (name, base64) =>
      folder?.file(name, base64, { base64: true })
    );
    try {
      const zipFile = await zip?.generateAsync({ type: "blob" });
      this.reports.pdf = pdfFiles;
      this.reports.zip = zipFile;
    } catch (e) {
      console.log(e);
    }
  };
  resetDates = (): void => {
    this.searchText = "";
    this.group = "";
    this.reports = {
      selected: [],
      fromSearch: [],
      raw: [],
      excel: null as any,
      pdf: [] as any,
      zip: null as any,
    };
  };
}

export const reports = new Reports();
