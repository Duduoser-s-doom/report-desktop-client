import { mount } from "enzyme";
import { Header } from "./Header";

describe("Test Header component", () => {
  let wrapper = mount(<Header />);
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  test("Is header variant dark", () => {
    expect(wrapper.find("#header").get(0).props).toHaveProperty("variant", "dark");
  });
  test("Is header bg primary", () => {
    expect(wrapper.find("#header").get(0).props).toHaveProperty("bg", "success");
  });
  test("Is header has input", () => {
    expect(!!wrapper.find("#input-search").get(0)).toBe(true);
  });
  test("Is fixed top", () => {
    expect(wrapper.find("#header").get(0).props).toHaveProperty("fixed","top");
  })
});
