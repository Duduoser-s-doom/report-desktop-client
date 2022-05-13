import { makeAutoObservable } from "mobx";

class Home {
  board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  constructor() {
    makeAutoObservable(this);
  }
  refresh = () => {
    const countRefresh = Math.ceil((Math.random() + 1) * 50);
    for (let i = 0; i < countRefresh; i++) {
      const zeroPos = this.getPosById(0);
      let ablePos = this.getAblePosByPos(zeroPos);
      const randomPos =
        ablePos[Math.round((ablePos.length - 1) * Math.random())];
      this.board[zeroPos.rowPos][zeroPos.colPos] =
        this.board[randomPos.rowPos][randomPos.colPos];
      this.board[randomPos.rowPos][randomPos.colPos] = 0;
    }
  };
  setPlaceById = (placeId: number) => {
    const zeroPos = this.getPosById(0);
    const movedPos = this.getPosById(placeId);
    if (
      (zeroPos.colPos === movedPos.colPos &&
        Math.abs(zeroPos.rowPos - movedPos.rowPos) === 1) ||
      (zeroPos.rowPos === movedPos.rowPos &&
        Math.abs(zeroPos.colPos - movedPos.colPos))
    ) {
      this.board[zeroPos.rowPos][zeroPos.colPos] = placeId;
      this.board[movedPos.rowPos][movedPos.colPos] = 0;
    }
  };
  getPosById = (placeId: number) => {
    let colPos = 0;
    let rowPos = 0;
    this.board.forEach((row, rowPosition) => {
      row.forEach((elementId, colPosition) => {
        if (placeId === elementId) {
          colPos = colPosition;
          rowPos = rowPosition;
        }
      });
    });
    return { colPos, rowPos };
  };
  getAblePosByPos = ({
    colPos,
    rowPos,
  }: {
    colPos: number;
    rowPos: number;
  }) => {
    let ablePos = [];
    if (colPos - 1 > 0) {
      ablePos.push({ rowPos, colPos: colPos - 1 });
    }
    if (colPos + 1 < 2) {
      ablePos.push({ rowPos, colPos: colPos + 1 });
    }
    if (rowPos - 1 > 0) {
      ablePos.push({ colPos, rowPos: rowPos - 1 });
    }
    if (rowPos + 1 < 2) {
      ablePos.push({ colPos, rowPos: rowPos + 1 });
    }
    return ablePos;
  };
  resetDates = () => {
    this.board = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
  };
}

export const home = new Home();
