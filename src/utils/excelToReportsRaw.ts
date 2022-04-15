import { ReportRaw } from "../types";
import { readExcel } from "./readExcel";

export const excelToReportsRaw = (data: { sheets: object }): ReportRaw[] => {
  const lists = readExcel(data);
  const firstRows = lists.map((rows) => {
    return rows.reduce((acc, tag) => {
      if (acc.length===0) {
        acc.push.apply(acc,tag.map((col) => titleToNumber(col)))
      }
      return acc
    },[]);
  });
  const studentsRows = lists.map(rows=>rows.filter((row,index)=>index!==0));
  
  const reportsRaw = students.map((rows,lId)=>{
    return rows.map((row,rId)=>{
        return{
          
        }
    })
  })
  
  return [];
};

export const titleToNumber = (title: string): number | false => {
  try {
    return tryTitleToNumber(title);
  } catch (e) {
    return false;
  }
};
const tryTitleToNumber = (title: string): number => {
  //@ts-ignore
  return +title.match(/\d+/)[0];
};
