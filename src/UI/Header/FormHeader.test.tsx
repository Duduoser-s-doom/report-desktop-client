import { mount } from "enzyme";
import { FormHeader } from "./FormHeader";

describe("Test FormHeader Component", () => {
  let wrapper = mount(<FormHeader />);
  beforeEach(() => {
    wrapper = mount(<FormHeader />);
  });

  test("Is FormHeader has right class", () => {
      expect(wrapper.find("#form-header").get(0).props).toHaveProperty("className", "d-flex justify-content-end w-100")
  })
  test("Is input for search exist", () => {
    expect(!!wrapper.find("#input-search").get(0)).toBe(true);
  });
  test("Is input for search has width 200px", () => {
    expect(wrapper.find("#input-search").get(0).props).toHaveProperty("style", {
      width: 200,
    });
  });
  test("Is button for search exist", () => {
    expect(!!wrapper.find("#btn-search").get(0)).toBe(true);
  });
  test("Has button for search got outline-light variant", () => {
    expect(wrapper.find("#btn-search").get(0).props).toHaveProperty("variant", "outline-light")
  })
  test("Is button for insert files exist", () => {
    expect(!!wrapper.find("#btn-insert").get(0)).toBe(true);
  });
  test("Has button for search got outline-light variant", () => {
    expect(wrapper.find("#btn-insert").get(0).props).toHaveProperty("variant", "outline-light")
  })
});
