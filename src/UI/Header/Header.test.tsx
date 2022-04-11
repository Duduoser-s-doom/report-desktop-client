import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Test Header component", () => {
  let wrapper = shallow(<Header />);
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test("Is header variant dark", () => {
    expect(wrapper.find("#header").props()).toHaveProperty("variant", "dark");
  });
  test("Is header bg primary", () => {
    expect(wrapper.find("#header").props()).toHaveProperty("bg", "primary");
  });
  test("Is header has input", () => {
    expect(wrapper.find("#search").isEmptyRender()).toBe(false);
  });
});
