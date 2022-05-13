import { shallow } from "enzyme";
import { PlayZone } from "./PlayZone";

describe("Test PlayZone component", () => {
  let wrapper = shallow(<PlayZone />);
  beforeEach(() => {
    wrapper = shallow(<PlayZone />);
  });
  test("Is width equal to 501", () => {
    expect(wrapper.find("#play-zone").props().style).toHaveProperty(
      "width",
      501
    );
  });
  test("Is height equal to 501", () => {
    expect(wrapper.find("#play-zone").props().style).toHaveProperty(
      "height",
      501
    );
  });
});
