import { home } from "./state";

describe("Test home state", () => {
  beforeEach(() => {
    home.resetDates();
  });
  test("setPlaceById standart case", () => {
    home.setPlaceById(1);
    expect(home.board).toStrictEqual([
      [1, 0, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
  });
  test("setPlaceById should dont replaced", () => {
    home.setPlaceById(4);
    expect(home.board).toStrictEqual(home.board);
  });
  test("Is refresh work correct", () => {
    const oldBoard = [...home.board];
    home.refresh();
    expect(home.board === oldBoard).toBe(false);
  });
  test("If getPosById get 0 should return {colPos:0, rowPos:0}", () => {
    const pos = home.getPosById(0);
    expect(pos).toStrictEqual({ colPos: 0, rowPos: 0 });
  });
  test("If getAblePosByPos get {colPos:0, rowPos:0} should return [{colPos:1,rowPos:0}, {colPos:0,rowPos:1}]", () => {
    const ablePos = home.getAblePosByPos({ colPos: 0, rowPos: 0 });
    expect(ablePos).toStrictEqual([
      { colPos: 1, rowPos: 0 },
      { colPos: 0, rowPos: 1 },
    ]);
  });
});
