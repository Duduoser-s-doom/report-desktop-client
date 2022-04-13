import { shallow } from "enzyme";
import { ReportsInsertModal } from "./ReportsInsertModal";

describe("Test ReportsInsertModal component", () => {
  let wrapper = shallow(<ReportsInsertModal />);
  beforeEach(() => {
    wrapper = shallow(<ReportsInsertModal />);
  });
  test("Has modal's header got text", () => {
    expect(wrapper.find("#report-insert-modal-header").text()).toBe(
      "Insert reports"
    );
  });
  test("Has modal's body got input for file", () => {
    expect(!!wrapper.find("#report-insert-modal-body-input-files")).toBe(true);
  });
  test("Has modal's body got label for input file", () => {
    expect(
      wrapper.find("#report-insert-modal-body-input-files-label").text()
    ).toBe("Here should be excel file");
  });
  test("Has modal's body got input for group", () => {
    expect(!!wrapper.find("#report-insert-modal-body-input-group")).toBe(true);
  });
  test("Has modal's body got label for input group", () => {
    expect(
      wrapper.find("#report-insert-modal-body-input-group-label").text()
    ).toBe("Group");
  });
});
