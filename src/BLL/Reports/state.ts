import { makeAutoObservable } from "mobx";
import { read } from "xlsx";
import {
  Report,
  ReportChangeModel,
  ReportRaw,
  Element,
  PdfFile,
} from "../../types";
import { excelToReportsRaw, generatePDFByReports } from "../../utils";
import Zip from "jszip";
import {
  deleteReports,
  getReports,
  setReports,
  createReports,
} from "../../DAL";

global.Buffer = global.Buffer || require("buffer").Buffer;
class Reports {
  searchText = "";
  group = "";
  isFetchingReports = false;
  isFetching = false;
  page = 1;
  reports = {
    selected: [] as Report[],
    fromSearch: [] as Report[],
    raw: [] as ReportRaw[],
    excel: null as File | null,
    pdf: [] as PdfFile[],
    zip: null as any,
  };
  constructor() {
    makeAutoObservable(this);
  }
  deleteAndFetchReports = async () => {
    this.isFetching = true;
    await deleteReports(reports.reports.selected.map((r) => r.reportId));
    this.setSelectedReports([]);
    this.isFetching = false;
    this.fetchReports();
  };
  changeAndSaveReports = async (
    reportChanges: ReportChangeModel,
    elements: Element[]
  ) => {
    this.isFetching = true;
    Object.keys(reportChanges).forEach((r: string) =>
      this.reports.selected.forEach(
        (s: Report) =>
          //@ts-ignore
          (s[r as keyof ReportChangeModel] =
            reportChanges[r as keyof ReportChangeModel])
      )
    );
    const pdfFiles = await generatePDFByReports(
      this.reports.selected,
      this.group,
      elements
    );
    this.reports.selected.forEach((s, index) => (s.pdf = pdfFiles[index]));
    await setReports(this.reports.selected);
    this.setSelectedReports([]);
    this.isFetching = false;
    this.fetchReports();
  };
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
  setPage = (page: number) => {
    this.page = page;
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
    this.reports.selected = reports;
  };
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
  generatePDFAndZipFiles = (elements: Element[]) => {
    this.isFetching = true
    let zip = new Zip();
    generatePDFByReports(
      this.reports.raw,
      this.group,
      elements,
      (name, base64) =>
        zip?.file(name, base64, {
          base64: true,
        })
    ).then((pdfFiles) => {
      setTimeout(
        () =>
          zip
            ?.generateAsync({
              type: "blob",
            })
            .then((zipFile) => {
              this.reports.pdf = pdfFiles;
              this.reports.zip = zipFile;
              this.isFetching = false
            }),
        this.reports.raw.length * 1000
      );
    });
  };
  saveReportsInServer = async () => {
    this.isFetching = true;
    await createReports(
      this.reports.raw.map((r, index) => ({
        ...r,
        pdf: this.reports.pdf[index],
        group: this.group,
      }))
    );
    this.isFetching = false;
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
