export const readExcel = (data: {sheets:object}) => {
  return Object.keys(Object.values(data.sheets)).map((d, index) => readList(data, index));
};

export const readList = (data: object, lId: number) => {
  const l = Object.values(Object.values(data)[0])[lId] as object;
  const sheets = Object.keys(l);
  const rowsId: string[][] = [];

  let i = 1;
  while (true) {
    let newRow = readRow(i, sheets);
    if (newRow.length !== 0) {
      rowsId.push(newRow);
    } else {
      break;
    }
    i = i + 1;
  }

  const rowsValues = rowsId.map((rIds) => {
    //@ts-ignore
    return rIds.map((t: string) => l[t].v);
  });
  return rowsValues;
};

export const readRow = (rowId = 1, sheets: string[]): string[] => {
  const row = sheets.filter((s) => s.match(new RegExp(String(rowId))));
  return row;
};
