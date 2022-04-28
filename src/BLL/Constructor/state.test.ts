import { element } from "../../test-data/element";
import { constructor } from "./state";

describe("Test Constructor state", () => {
  beforeEach(() => {
    constructor.resetDates();
  });
  test("Is addElement work correct", () => {
    constructor.addElement(element);
    expect(constructor.elements).toStrictEqual([element]);
  });
  test("Is removeElementById work correct", () => {
    constructor.addElement(element);
    constructor.removeElementById(element.id);
    expect(constructor.elements).toStrictEqual([]);
  });
  test("Is editElement work correct", ()=>{
    constructor.addElement(element)
    constructor.editElement({...element,text: "New text"})
    expect(constructor.elements[0].text).toBe("New text")
  })
});
