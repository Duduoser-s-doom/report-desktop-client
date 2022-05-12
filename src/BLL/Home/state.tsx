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
  setPlaceById = (placeId: number) => {
    let zeroColPos = 0;
    let zeroRowPos = 0;
    let movedColPos = 0;
    let movedRowPos = 0;
    this.board.forEach((row, rowPosition) => {
      row.forEach((elementId, colPosition) => {
        if (0 === elementId) {
          zeroColPos = colPosition;
          zeroRowPos = rowPosition;
        }
        if (placeId === elementId) {
          movedColPos = colPosition;
          movedRowPos = rowPosition;
        }
      });
    });
    if (
      (zeroColPos === movedColPos &&
        Math.abs(zeroRowPos - movedRowPos) === 1) ||
      (zeroRowPos === movedRowPos && Math.abs(zeroColPos - movedColPos))
    ) {
      this.board[zeroRowPos][zeroColPos] = placeId;
      this.board[movedRowPos][movedColPos] = 0;
    }
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
