import { recycleExcelData, testExcelData } from "../test-data/readExcel";
import { readExcel, readList, readRow } from "./readExcel";

describe("Test readExcel and support functions", () => {
  test("Is readExcel work correct", () => {
    const rows = readExcel(testExcelData);
    expect(rows).toStrictEqual(recycleExcelData);
  });
  test("Is readList work correct", () => {
    const rows = readList(testExcelData, 0);
    expect(rows).toStrictEqual(recycleExcelData[0]);
  });
  test("Is readRow work correct", () => {
    const rows = readRow(1, ["A1", "A2", "B1", "B2"]);
    expect(rows).toStrictEqual(["A1", "B1"]);
  });
});
