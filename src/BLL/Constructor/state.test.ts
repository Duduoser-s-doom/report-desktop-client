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
  test("Is editElement work correct", () => {
    constructor.addElement(element);
    constructor.editElement({ ...element, text: "New text" });
    expect(constructor.elements[0].text).toBe("New text");
  });
  test("Is setSelectedElement set selectedElement element", () => {
    constructor.setSelectedElementById(element.id);
    expect(constructor.selectedElement).toStrictEqual(element);
  });
  test("Is resetSelectedElement set selectedElement null", () => {
    constructor.setSelectedElementById(element.id);
    constructor.resetSelectedElement();
    expect(constructor.selectedElement).toEqual(null);
  });
  test("Is startStorageSync set isStorageSync true", () => {
    constructor.startStorageSync()
    expect(constructor.isStorageSync).toBe(true)
  })
  test("Is finishStorageSync set isStorageSync false", () => {
    constructor.finishStorageSync()
    expect(constructor.isStorageSync).toBe(false)
  })
});
