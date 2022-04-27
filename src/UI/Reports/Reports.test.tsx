import { mount } from "enzyme";
import { Reports } from "./Reports";

describe("Test Reports component", () => {
  let wrapper = mount(<Reports />);
  beforeEach(() => {
    wrapper = mount(<Reports />);
  });
  test("Is FormHeader exist", () => {
    expect(!!wrapper.find("#form-header").get(0)).toBe(true);
  });
  test("Is UserCards exist", () => {
    expect(!!wrapper.find("#usercards")).toBe(true);
  });
});
