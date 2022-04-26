import { shallow } from "enzyme";
import { ReportsEditModal } from "./ReportsEditModal";

describe("Test ReportsEdit component", () => {
  let wrapper = shallow(<ReportsEditModal />);
  beforeEach(() => {
    wrapper = shallow(<ReportsEditModal />);
  });
  test("Has modal's header got text", () => {
    expect(wrapper.find("#report-edit-modal-header").text()).toBe(
      "Edit reports"
    );
  });
  test("Has modal's body got input for group", () => {
    expect(!!wrapper.find("#report-edit-modal-body-input-group")).toBe(true);
  });
  test("Has modal's body got label for input file", () => {
    expect(
      wrapper.find("#report-edit-modal-body-input-group-label").text()
    ).toBe("Title group");
  });
});
