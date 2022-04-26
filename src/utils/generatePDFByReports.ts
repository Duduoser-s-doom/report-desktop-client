import jsPDF from "jspdf";
import { ReportRaw } from "../types";

export const generatePDFByReports = async (
  reports: ReportRaw[],
  group: string,
  callback?: (name: string, base64: string) => void
) => {
  let pdfFiles: { name: string; base64: string }[] = [];
  reports.forEach(async (r) => {
    return await new Promise<boolean>((resolve, reject) => {
      const doc = new jsPDF();
      doc.text("ИТМО", 100, 20);
      doc.text(`Отчет по лабе #${r.labNumber}`, 80, 50);
      doc.text(`Сделал ${r.name}`, 90, 100);
      doc.text(`Ссылка на гитхаб ${r.githubURL}`, 80, 150);
      doc.text(`Кол-во баллов ${r.points}`, 80, 200);
      const reader = new FileReader();
      reader.readAsDataURL(doc.output("blob"));
      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];
        const name = `Report-${group}-${r.name}${r.labNumber}.pdf`;
        pdfFiles.push({ name, base64 });
        if (callback) callback(name, base64);
      };
    });
  });
  return pdfFiles;
};
