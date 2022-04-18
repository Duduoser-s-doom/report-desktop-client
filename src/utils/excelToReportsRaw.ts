import { ReportRaw } from "../types";
import { readExcel } from "./readExcel";

export const excelToReportsRaw = (data: { Sheets: object }): ReportRaw[] => {
  const lists = readExcel(data);
  const firstRows = lists.map((rows) => {
    return rows.reduce((acc, tag) => {
      if (acc.length === 0) {
        acc.push.apply(
          acc,
          tag.map((col) => titleToNumber(col))
        );
      }
      return acc;
    }, []);
  });
  const studentsRows = lists.map((s) => s.filter((row, index) => index !== 0));
  
  const reportsRaw: ReportRaw[] = [];
  studentsRows.forEach((list,lId) => {
    list.forEach((s)=>{      
      for (let i = 0; i < Math.floor((s.length - 1) / 2); i++) {
        reportsRaw.push({
          name: s[0] as unknown as string,
          labNumber: firstRows[lId][2 + 2 * i] as unknown as number,
          points: s[2 + 2 * i] as unknown as number,
          githubURL: s[1 + 2 * i] as unknown as string,
        });
      }
    })
  });
  return reportsRaw;
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
