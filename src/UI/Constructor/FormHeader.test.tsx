import { shallow } from "enzyme";
import { FormHeader } from "./FormHeader";

describe("Test FormHeader component", () => {
  let wrapper = shallow(<FormHeader />);
  beforeEach(() => {
    wrapper = shallow(<FormHeader />);
  });
  test("Is button for attach file exist", () => {
    expect(!!wrapper.find("#btn-attach")).toBe(true);
  });
  test("Is button for save elements exist", () => {
    expect(!!wrapper.find("#btn-save")).toBe(true);
  });
  test("Has btn-save got variant outline-success", () => {
    expect(wrapper.find("#btn-save").props()).toHaveProperty(
      "variant",
      "outline-success"
    );
  });
});
