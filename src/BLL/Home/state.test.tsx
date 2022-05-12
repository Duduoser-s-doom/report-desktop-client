import { home } from "./state";

describe("Test home state", () => {
  beforeEach(() => {
    home.resetDates();
  });
  test("setPlaceById standart case", () => {
    home.setPlaceById(1)
    expect(home.board).toStrictEqual([[1,0,2],[3,4,5],[6,7,8]])
  })
});
