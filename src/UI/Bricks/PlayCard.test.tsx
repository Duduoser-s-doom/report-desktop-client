import { shallow } from "enzyme";
import { PlayCard } from "./PlayCard";

describe("Test PlayCard component", () => {
  let wrapper = shallow(<PlayCard isDraggable={true} placeId={1} imgSrc={"src"} />);
  beforeEach(() => {
    wrapper = shallow(<PlayCard isDraggable={true} placeId={1} imgSrc={"src"}  />);
  });
  test("Is width equal to 167", () => {
    expect(wrapper.find(`#play-card1`).props().style).toHaveProperty(
      "width",
      164
    );
  });
  test("Is height equal to 167", () => {
    expect(wrapper.find(`#play-card1`).props().style).toHaveProperty(
      "height",
      164
    );
  });
  test("Is border equal to 3px solid white", () => {
      expect(wrapper.find(`#play-card1`).props().style).toHaveProperty("border","3px solid white")
  })
  test("Is draggable",()=>{
      expect(wrapper.find("#play-card1").props()).toHaveProperty("draggable",true)
  })
});
