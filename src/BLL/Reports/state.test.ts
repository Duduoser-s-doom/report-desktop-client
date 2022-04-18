import { reports } from "./state";
import reportsExcel from "../../test-data/lab.ods";
import xlsx, { read } from "xlsx";
import { ReportRaw } from "../../types";
import exp from "constants";
import { excelToReportsRaw } from "../../utils";

describe("Test Reports state", () => {
  beforeEach(() => {
    reports.resetDates();
  });
  test("Is searchText changes", () => {
    const text = "reports";
    reports.setSearchText(text);
    expect(reports.searchText).toBe(text);
  });
  test("Is dates reset", () => {
    reports.setSearchText("reports");
    reports.resetDates();
    expect(reports.searchText).toBe("");
  });
  test("Is group changes", () => {
    const group = "R3180";
    reports.setGroup(group);
    expect(reports.group).toBe(group);
  });
  test("Is setReportsExcel work correct", async () => {
    reports.setReportsExcel(reportsExcel);
    expect(reports.reports.excel).toBe(reportsExcel);
  });
  test("Is setReportsRaw work correct", () => {
    const reportsRaw = [
      {
        labNumber: 1,
        name: "Daniel",
        points: 7,
        githubURL: "https://github.io/XtereO",
      },
    ] as ReportRaw[];
    reports.setReportsRaw(reportsRaw);
    expect(reports.reports.raw).toBe(reportsRaw);
  });
  test("Is setReportsByExcelFile work correct", async () => {
    await reports.setReportsByExcelFile(reportsExcel);
    expect(reports.reports).toStrictEqual({
      raw: [
        {
          githubURL: "https://github.com/H0P3Y0UD13/LAB1/",
          points: 10,
          name: "Daniel",
          labNumber: 1,
        },
        {
          githubURL: "https://github.com/H0P3Y0UD13/lab2",
          points: 13,
          name: "Daniel",
          labNumber: 2,
        },
      ],
      excel: reportsExcel,
      pdf: [],
      zip: null,
    });
  });
});
