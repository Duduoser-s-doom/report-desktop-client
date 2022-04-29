import { shallow } from "enzyme";
import { Sandbox } from "./Sandbox";

describe("Test Sandbox component", () => {
  let wrapper = shallow(<Sandbox />);
  beforeEach(() => {
    wrapper = shallow(<Sandbox />);
  });
  test("Is width 595", () => {
    expect(wrapper.find("#sandbox").props().style).toHaveProperty("width", 595);
  });
  test("Is height 842", () => {
    expect(wrapper.find("#sandbox").props().style).toHaveProperty(
      "height",
      842
    );
  });
  test("Is box-shadow 0 0 10px rgba(0,0,0,0.5)", () => {
    expect(wrapper.find("#sandbox").props().style).toHaveProperty(
      "boxShadow",
      "0 0 10px rgba(0,0,0,0.5)"
    );
  });
  test("Is position absolute", () => {
    expect(wrapper.find("#sandbox").props().style).toHaveProperty(
      "position",
      "relative"
    );
  });
  test("Is overflow hidden", () => {
    expect(wrapper.find("#sandbox").props().style).toHaveProperty(
      "overflow",
      "hidden"
    );
  });
});
