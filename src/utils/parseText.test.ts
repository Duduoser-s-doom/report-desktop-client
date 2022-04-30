import { parseText } from "./parseText";

describe("Test parseText util", () => {
  test("Is 'Name: {name}, points: {points}' parsed to 'Name: Daniel, points: 10'", () => {
    expect(
      parseText("Name: {name}, points: {points}", {
        name: "Daniel",
        points: 10,
      })
    );
  });
});
