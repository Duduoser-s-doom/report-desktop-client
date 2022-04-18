import { shallow } from "enzyme";
import { modal } from "../../BLL/Modal";
import { ReportsInsertModal } from "./ReportsInsertModal";
import file from "../../test-data/lab.ods";
import { reports } from "../../BLL/Reports";

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
  test("Is onHide modal work correct", () => {
    //@ts-ignore
    wrapper.find("#reports-insert").props().onHide();
    expect(modal.visible).toBe(false);
  });
  test("Is button To PDF exist", () => {
    expect(!!wrapper.find("#report-insert-modal-footer-btn-to-pdf")).toBe(true);
  });
  test("Is button Download exist", () => {
    expect(!!wrapper.find("#report-insert-modal-footer-btn-download")).toBe(
      true
    );
  });
  test("Is button Save exist", () => {
    expect(!!wrapper.find("#report-insert-modal-footer-btn-save")).toBe(true);
  });
  test("Has button To PDF got variant outline-warning", () => {
    expect(
      wrapper.find("#report-insert-modal-footer-btn-to-pdf").props()
    ).toHaveProperty("variant", "outline-warning");
  });
  test("Has button Download got variant outline-success", () => {
    expect(
      wrapper.find("#report-insert-modal-footer-btn-download").props()
    ).toHaveProperty("variant", "outline-success");
  });
  test("Is button Save exist", () => {
    expect(
      wrapper.find("#report-insert-modal-footer-btn-save").props()
    ).toHaveProperty("variant", "outline-success");
  });
});
