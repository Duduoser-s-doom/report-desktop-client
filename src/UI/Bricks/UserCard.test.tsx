import { shallow } from "enzyme";
import { reports } from "../../BLL/Reports";
import { report } from "../../test-data/report";
import { UserCard } from "./UserCard";

describe("Test UserCell component", () => {
  let wrapper = shallow(<UserCard {...report} />);
  beforeEach(() => {
    wrapper = shallow(<UserCard {...report} />);
  });

  test("Is card-container exist", () => {
    expect(!!wrapper.find(`#card-user${report.reportId}`)).toBe(true);
  });
  test("Is card-body exist", () => {
    expect(!!wrapper.find(`#card-body${report.reportId}`)).toBe(true);
  });
  test("Is grid exist", () => {
    expect(!!wrapper.find(`#card-grid${report.reportId}`)).toBe(true);
  });
  test("Has group column got xs=2", () => {
    expect(
      wrapper.find(`#card-group${report.reportId}`).props()
    ).toHaveProperty("xs", 2);
  });
  test("Is group render", () => {
    expect(wrapper.find(`#card-group${report.reportId}`).text()).toBe(
      report.group
    );
  });
  test("Has name-column got xs=5", () => {
    expect(wrapper.find(`#card-name${report.reportId}`).props()).toHaveProperty(
      "xs",
      5
    );
  });
  test("Is name render", () => {
    expect(wrapper.find(`#card-name${report.reportId}`).text()).toBe(
      report.name
    );
  });
  test("Has labNumber-column got xs=1", () => {
    expect(
      wrapper.find(`#card-labNumber${report.reportId}`).props()
    ).toHaveProperty("xs", 1);
  });
  test("Is labNumber render", () => {
    expect(+wrapper.find(`#card-labNumber${report.reportId}`).text()).toBe(
      report.labNumber
    );
  });
  test("Has labNumber-column got xs=4", () => {
    expect(
      wrapper.find(`#card-buttons${report.reportId}`).props()
    ).toHaveProperty("xs", 4);
  });
  test("Is points-column render", () => {
    expect(!!wrapper.find(`#card-points${report.reportId}`)).toBe(true);
  });
  test("Has points-column got xs=1", () => {
    expect(
      wrapper.find(`#card-points${report.reportId}`).props()
    ).toHaveProperty("xs", 1);
  });
  test("Is button for delete exist", () => {
    expect(!!wrapper.find(`#card-btn-delete${report.reportId}`)).toBe(true);
  });
  test("Has btn for delete got danger-outline variant", () => {
    expect(
      wrapper.find(`#card-btn-delete${report.reportId}`).props()
    ).toHaveProperty("variant", "danger-outline");
  });
  test("Is Trash icon exist", () => {
    expect(!!wrapper.find(".bi-trash")).toBe(true);
  });
  test("Is button for download exist", () => {
    expect(!!wrapper.find(`#card-btn-download${report.reportId}`)).toBe(true);
  });
  test("Has btn for download got success-outline variant", () => {
    expect(
      wrapper.find(`#card-btn-download${report.reportId}`).props()
    ).toHaveProperty("variant", "outline-success");
  });
  test("Is Donwload icon exist", () => {
    expect(!!wrapper.find(".bi-download")).toBe(true);
  });
  test("Is card-checkbox exist", () => {
    expect(!!wrapper.find(`#card-checkbox${report.reportId}`)).toBe(true);
  });
  test("Has card-checkbox got type checkbox", () => {
    expect(
      wrapper.find(`#card-checkbox${report.reportId}`).props()
    ).toHaveProperty("type", "checkbox");
  });
  test("Is handleCheckbox work", () => {
    wrapper.find(`#card-checkbox${report.reportId}`).simulate("click");
    expect(
      reports.reports.selected.some((s) => s.reportId === report.reportId)
    ).toBe(true);
  });
});
