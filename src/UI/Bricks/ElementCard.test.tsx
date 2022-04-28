import { shallow } from "enzyme";
import { Element } from "../../types";
import { ElementCard } from "./ElementCard";

describe("Test ElementCard component", () => {
  const props = {
    left: 20,
    top: 50,
    image: null,
    text: "Element card",
    fontSize: 16,
    id: 1,
  } as Element;
  const elementId = `#element-card${props.id}`;
  let wrapper = shallow(<ElementCard {...props} />);
  beforeEach(() => {
    wrapper = shallow(<ElementCard {...props} />);
  });
  test("Is text rendered Element card", () => {
    expect(wrapper.find(elementId).text()).toBe(props.text);
  });
  test("Is padding equal 5", () => {
    expect(wrapper.find(elementId).props().style).toEqual(5);
  });
  test("Is left equal 20", () => {
    expect(wrapper.find(elementId).props().style).toEqual(props.left);
  });
  test("Is top equal 50", () => {
    expect(wrapper.find(elementId).props().style).toEqual(props.top);
  });
  test("Is fontSize equal 16", () => {
    expect(wrapper.find(elementId).props().style).toEqual(props.fontSize);
  });
  test("Is position equal absolute", () => {
    expect(wrapper.find(elementId).props().style).toEqual("absolute");
  });
});
