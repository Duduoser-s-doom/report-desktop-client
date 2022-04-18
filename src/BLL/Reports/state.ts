import { makeAutoObservable } from "mobx";
import { read } from "xlsx";
import { ReportRaw } from "../../types";
import { excelToReportsRaw } from "../../utils";
import jsPDF from "jspdf";
import Zip from "jszip";

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
    makeAutoObservable(this);
  }
  setSearchText = (text: string): void => {
    this.searchText = text;
  };
  setGroup = (group: string): void => {
    this.group = group;
  };
  setReportsExcel = (file: any): void => {
    this.reports.excel = file;
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
  generatePDFAndZipFiles = async () => {
    let pdfFiles: any[] = [];
    await this.reports.raw.forEach(async (r) => {
      return await new Promise<boolean>((resolve, reject) => {
        const doc = new jsPDF();
        doc.text("ИТМО", 100, 0);
        doc.text(`Отчет по лабе #${r.labNumber}`, 80, 50);
        doc.text(`Сделал ${r.name}`, 90, 100);
        doc.text(`Ссылка на гитхаб ${r.githubURL}`, 80, 150);
        doc.text(`Кол-во баллов ${r.points}`, 80, 200);

        const reader = new FileReader();
        reader.readAsDataURL(doc.output("blob"));
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1];
          pdfFiles.push({ base64, name: `Отчет-${r.name}.pdf` });
        };
      });
    });
    this.reports.pdf = pdfFiles;
    
    let zip = new Zip()
    const folder = zip.folder("Reports");
    pdfFiles.map((pdf) => folder?.file(pdf.name, pdf.base64, { base64: true }));
    const zipFile = await zip?.generateAsync({ type: "blob" });

    this.reports.zip = zipFile;
  };
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
