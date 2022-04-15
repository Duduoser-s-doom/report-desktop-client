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
});
