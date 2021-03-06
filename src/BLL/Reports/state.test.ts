import { reports } from "./state";
import reportsExcel from "../../test-data/lab.ods";
import { ReportRaw } from "../../types";
import { report } from "../../test-data/report";

describe("Test Reports state", () => {
  beforeEach(() => {
    reports.resetDates();
  });
  test("Is searchName changes", () => {
    const text = "reports";
    reports.setSearchName(text);
    expect(reports.search.name).toBe(text);
  });
  test("Is searchGroup changes", () => {
    const text = "R3180";
    reports.setSearchGroup(text);
    expect(reports.search.group);
  });
  test("Is dates reset", () => {
    reports.setSearchGroup("reports");
    reports.resetDates();
    expect(reports.search.group).toBe("");
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
    expect(reports.reports.raw).toStrictEqual(reportsRaw);
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
  test("Is setSelectedReports work correct", () => {
    reports.setSelectedReports([report]);
    expect(reports.reports.selected).toStrictEqual([report]);
  });
  test("Is setPage work correct", () => {
    reports.setPage(2);
    expect(reports.page).toBe(2);
  });
});
