import { mount } from "enzyme";
import { RootModal } from "./RootModal";

describe("Test RootModal component", () => {
  let wrapper = mount(<RootModal />);
  beforeEach(() => {
    wrapper = mount(<RootModal />);
  });
  test("Is modal for ReportsInsert exist", () => {
    expect(!!wrapper.find("#reports-insert")).toBe(true);
  });
  test("Is modal for ReportsEdit exist", () => {
    expect(!!wrapper.find("#reports-edit")).toBe(true);
  });
  test("Is modal for ElementEdit exist", () => {
    expect(!!wrapper.find("#element-edit")).toBe(true);
  });
});
