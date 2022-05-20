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
  createReports,
  deleteReports,
  retrieveReports,
  updateReports,
} from "../../DAL";

global.Buffer = global.Buffer || require("buffer").Buffer;
class Reports {
  search = { group: "", name: "" };
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
  countReports = 0;
  messageError = "";
  messageErrorFetchReports = ""
  constructor() {
    makeAutoObservable(this);
  }
  handleAsyncError = async (cb: () => Promise<void>) => {
    try {
      this.messageError = "";
      this.isFetching = true;
      await cb();
    } catch (e: any) {
      this.messageError = e.message;
    } finally {
      this.isFetching = false;
    }
  };
  deleteAndFetchReports = async () => {
    await this.handleAsyncError(async () => {
      await deleteReports(reports.reports.selected);
      this.setSelectedReports([]);
      this.fetchReports();
    });
  };
  changeAndSaveReports = (
    reportChanges: ReportChangeModel,
    elements: Element[]
  ) => {
    this.handleAsyncError(async () => {
      Object.keys(reportChanges).forEach((r: string) =>
        this.reports.selected.forEach((s: Report) => {
          //@ts-ignore
          s[r as keyof ReportChangeModel] =
            reportChanges[r as keyof ReportChangeModel];
        })
      );
      this.reports.selected.forEach(async (r: Report, index) => {
        await generatePDFByReports([r], r.group, elements).then((pdf) => {
          setTimeout(async () => {
            console.log(pdf[0]);
            r.pdf = pdf[0];
            if (index === this.reports.selected.length - 1) {
              await updateReports(this.reports.selected);
              this.setSelectedReports([]);
              this.fetchReports();
            }
          }, 1000);
        });
      });
    });
  };
  fetchReports = async () => {
    try {
      this.messageErrorFetchReports = ""
      this.isFetchingReports = true;
      const data = await retrieveReports(
        this.search.group,
        this.search.name,
        this.page
      );
      this.reports.fromSearch = data.reports;
      this.countReports = data.count;
    } catch (e: any) {
      this.messageErrorFetchReports = e.message 
    } finally {
      this.isFetchingReports = false;
    }
  };
  setPage = (page: number) => {
    this.page = page;
  };
  setSearchGroup = (text: string): void => {
    this.search.group = text;
  };
  setSearchName = (text: string): void => {
    this.search.name = text;
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
  setReportsByExcelFile = (file: File) => {
    this.handleAsyncError(async () => {
      const data = await file.arrayBuffer();
      const workbook = read(data);
      this.reports.excel = file;
      this.reports.raw = excelToReportsRaw(workbook);
    });
  };
  generatePDFAndZipFiles = (elements: Element[]) => {
    this.handleAsyncError(async () => {
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
              }),
          this.reports.raw.length * 1000
        );
      });
    });
  };
  saveReportsInServer = async () => {
    this.handleAsyncError(async () => {
      await createReports(
        this.reports.raw.map((r, index) => ({
          ...r,
          pdf: this.reports.pdf[index],
          group: this.group,
        }))
      );
      this.fetchReports();
    });
  };
  resetDates = (): void => {
    this.search = { group: "", name: "" };
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
