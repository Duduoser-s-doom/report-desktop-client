import { toast } from "./state";

describe("Test Modal state", () => {
  beforeEach(() => {
    toast.resetDates();
  });
  test("Has toast got title", () => {
    expect(toast.title).toBe("");
  });
  test("Is show work correct", () => {
    toast.show("text");
    expect(toast.title).toBe("text");
  });
  test("Is hide work correct", () => {
    toast.show("text");
    toast.hide();
    expect(toast.title).toBe("");
  });
  test("Is resetDates work correct", ()=>{
    toast.show("text");
    toast.resetDates();
    expect(toast.title).toBe("");    
  })
});
