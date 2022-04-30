import jsPDF from "jspdf";
import { Element, ReportRaw } from "../types";
import { parseText } from "./parseText";

export const generatePDFByReports = async (
  reports: ReportRaw[],
  group: string,
  elements: Element[], 
  callback?: (name: string, base64: string) => void
) => {
  let pdfFiles: { name: string; base64: string }[] = [];
  reports.forEach(async (r) => {
    return await new Promise<boolean>((resolve, reject) => {
      const doc = new jsPDF({unit:"pt"});
      elements.forEach(e=>{
        let dataURL = e.imgSrc 
        if(!dataURL){
          const parsedText = parseText(e.text,{...r, group})
          let canvas = document.createElement("canvas")
          let ctx = canvas.getContext('2d')
          //@ts-ignore
          ctx.font = `${e.fontSize}px Times New Roman`
          const metrix = ctx?.measureText(e.text) as TextMetrics;
          canvas.width = metrix.width
          const height = metrix.actualBoundingBoxAscent+metrix.actualBoundingBoxDescent
          canvas.height = height
          ctx?.fillText(parsedText, 0, height)
          dataURL = canvas.toDataURL("image/png")
          console.log(dataURL);
        }
        const {width,height} = doc.getImageProperties(dataURL);
        doc.addImage(dataURL, "png",e.left,e.top,width,height)
      })
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
