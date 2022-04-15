import { readExcel, readList, readRow } from "./readExcel";

describe("Test readExcel functions", () => {
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

const testExcelData = {
  sheets: {
    l1: {
      A1: { v: 3 },
      A2: { v: 4 },
      B1: { v: 5 },
      B2: { v: 6 },
    },
    l2: {
      A1: { v: 11 },
      A2: { v: 22 },
      B1: { v: 33 },
      B2: { v: 44 },
    },
  },
};
const recycleExcelData = [
  [
    [3, 5],
    [4, 6],
  ],
  [
    [11, 33],
    [22, 44],
  ],
];
