import { ModalRoutes } from "../../consts";
import { modal } from "./state";

describe("Test Modal state", () => {
  beforeEach(() => {
    modal.resetDates();
  });
  test("Has modal got visible", () => {
    expect(modal.visible).toBe(false);
  });
  test("Is show work correct", () => {
    modal.show(ModalRoutes.reportsEdit);
    expect(modal.visible).toBe(ModalRoutes.reportsEdit);
  });
  test("Is hide work correct", () => {
    modal.show(ModalRoutes.reportsInsert);
    modal.hide();
    expect(modal.visible).toBe(false);
  });
  test("Is resetDates work correct", ()=>{
    modal.show(ModalRoutes.reportsInsert);
    modal.resetDates();
    expect(modal.visible).toBe(false);    
  })
});
