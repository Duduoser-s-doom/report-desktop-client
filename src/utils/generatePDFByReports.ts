import jsPDF from "jspdf";
import { Element, ReportRaw } from "../types";
import { getWidthAndHeightText } from "./getWidthAndHeightText";
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
          const {width, height} = getWidthAndHeightText(parsedText,"Times New Roman",`${e.fontSize}px`)
          let canvas = document.createElement("canvas")
          canvas.height = height
          canvas.width = width
          document.body.appendChild(canvas)
          let ctx = canvas.getContext('2d')
          //@ts-ignore
          ctx.font = `${e.fontSize}px Times New Roman` 
          ctx?.fillText(parsedText, 0, height-e.fontSize/4)
          dataURL = canvas.toDataURL("image/png")
          canvas.remove()
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
