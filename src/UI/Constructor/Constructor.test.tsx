import { mount } from "enzyme";
import { Constructor } from "./Constructor";

describe("Test Constructor component", () => {
  let wrapper = mount(<Constructor />);
  beforeEach(() => {
    wrapper = mount(<Constructor />);
  });
  test("Is form header exist", () => {
    expect(!!wrapper.find("#form-header")).toBeTruthy();
  });
  test("Is sandbox exist", ()=>{
    expect(!!wrapper.find("#sandbox")).toBeTruthy();
  })
});
