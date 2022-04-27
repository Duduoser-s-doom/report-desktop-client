import { mount, shallow } from "enzyme";
import { ReportsEditModal } from "./ReportsEditModal";

describe("Test ReportsEdit component", () => {
  let wrapper = mount(<ReportsEditModal />);
  beforeEach(() => {
    wrapper = mount(<ReportsEditModal />);
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
    ).toBe("Group");
  });
  test("Has modal's body got input for labNumber", () => {
    expect(!!wrapper.find("#report-edit-modal-body-input-labNumber")).toBe(
      true
    );
  });
  test("Has modal's body got label for input labNumber", () => {
    expect(
      wrapper.find("#report-edit-modal-body-input-labNumber-label").text()
    ).toBe("Lab number");
  });
  test("Has modal's body got input for name", () => {
    expect(!!wrapper.find("#report-edit-modal-body-input-name")).toBe(true);
  });
  test("Has modal's body got label for input name", () => {
    expect(
      wrapper.find("#report-edit-modal-body-input-name-label").text()
    ).toBe("Name");
  });
  test("Has modal's body got input for points", () => {
    expect(!!wrapper.find("#report-edit-modal-body-input-points")).toBe(true);
  });
  test("Has modal's body got label for input points", () => {
    expect(
      wrapper.find("#report-edit-modal-body-input-points-label").text()
    ).toBe("Points");
  });
  test("Has modal's body got input for githubURL", () => {
    expect(!!wrapper.find("#report-edit-modal-body-input-githubURL")).toBe(true);
  });
  test("Has modal's body got label for input githubURL", () => {
    expect(
      wrapper.find("#report-edit-modal-body-input-githubURL-label").text()
    ).toBe("Github URL");
  });
  test("Has modal's footer got button for change", ()=>{
    expect(!!wrapper.find("#report-edit-modal-footer-change")).toBe(true)
  })
  test("Has button for change got variant outline-success", ()=>{
    expect(wrapper.find("#report-edit-modal-footer-change")).toHaveProperty("variant","outline-success")
  })
  test("Has modal's footer got button for change and save", ()=>{
    expect(!!wrapper.find("#report-edit-modal-footer-change-and-save")).toBe(true)
  })
  test("Has button for change and save got variant outline-success", ()=>{
    expect(wrapper.find("#report-edit-modal-footer-change-and-save")).toHaveProperty("variant","outline-success")
  })
});
