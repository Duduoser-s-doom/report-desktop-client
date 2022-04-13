import { reports } from "./state";
import reportsExcel from "../../test-data/lab.ods";
import readXlsxFile from "read-excel-file";

describe("Test Reports state", () => {
  beforeEach(() => {
    reports.resetDates();
  });
  test("Is searchText changes", () => {
    const text = "reports";
    reports.setSearchText(text);
    expect(reports.searchText).toBe(text);
  });
  test("Is dates reset", ()=>{
    reports.setSearchText("reports")
    reports.resetDates()
    expect(reports.searchText).toBe("") 
  })
  test("Is group changes", () => {
    const group = "R3180" 
    reports.setGroup(group)
    expect(reports.group).toBe(group)
  })
  test("Is setReportsExcel work correct", async ()=>{
    const data = await readXlsxFile(reportsExcel)
    console.log(data);
    reports.setReportsExcel(reportsExcel)
    expect(reports.reports.excel).toBe(reportsExcel)
  })
});
