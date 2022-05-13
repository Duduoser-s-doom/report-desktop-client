import { mount } from "enzyme";
import { Home } from "./Home";

describe("Test Home component", () => {
  let wrapper = mount(<Home />);
  beforeEach(() => {
    wrapper = mount(<Home />);
  });
  test("Is FormHeader exist", () => {
    expect(!!wrapper.find("#home-form-header")).toBe(true);
  });
  test("Is PlayZone exist", () => {
    expect(!!wrapper.find("#play-zone")).toBe(true);
  });
});
