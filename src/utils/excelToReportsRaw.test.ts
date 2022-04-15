import { testExcelData, testReportsRaw } from "../test-data/excelToReportsRaw";
import { excelToReportsRaw, titleToNumber } from "./excelToReportsRaw";

describe("Test excelToReportsRaw and support functions", () => {
  test("Is excelToReportsRaw work correct", () => {
    const reportsRaw = excelToReportsRaw(testExcelData);
    expect(reportsRaw).toStrictEqual(testReportsRaw);
  });
  test("Is titleToNumber work correct", () => {
    const title = "Lab1";
    expect(titleToNumber(title)).toBe(1);
  });
});
