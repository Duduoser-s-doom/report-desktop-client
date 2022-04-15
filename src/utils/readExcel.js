export const readExcel = (data) => {
  return Object.values(data).map((d, index) => readList(data, index));
};
const readList = (data, lId) => {
  /* const data = {
    sheets: {
      "l1":{
      "A1":{v:2},
      "A2":{v:3},
      "B1":{v:4},
      "B2":{v:5}
      }
    }
  } */
  let sheets = [];
  const l = Object.values(Object.values(data)[lId]);
  l.forEach((d) => {
    sheets = Object.keys(d);
  });
  const rowsId = [];
  let go = true;
  let i = 1;
  while (go) {
    let newRow = readRow(i, sheets);
    if (newRow.length !== 0) {
      rowsId.push(newRow);
    } else {
      go = false;
      break;
    }
    i = i + 1;
  }
  const rowsValues = rowsId.map((rIds) => {
    return rIds.map((t) => l[0][t].v);
  });
  return rowsValues;
};
const readRow = (rowId = 1, sheets = []) => {
  const query = new RegExp(`${rowId}`);
  const row = sheets.filter((s) => s.match(query));
  return row;
};
