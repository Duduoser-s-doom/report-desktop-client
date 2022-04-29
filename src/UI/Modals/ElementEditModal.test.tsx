import { shallow } from "enzyme";
import { ElementEditModal } from "./ElementEditModal";

describe("Test ElementEditModal component", () => {
  let wrapper = shallow(<ElementEditModal />);
  beforeEach(() => {
    wrapper = shallow(<ElementEditModal />);
  });
  test("Is header edit element modal rendered", () => {
    expect(!!wrapper.find("#element-edit-modal-header")).toBe(true);
  });
  test("Is text Edit element rendered", () => {
    expect(wrapper.find("#element-edit-modal-header").text()).toBe(
      "Edit element"
    );
  });
  test("Is closeButton props should be exist", () => {
    expect(wrapper.find("#element-edit-modal-header").props()).toHaveProperty(
      "closeButton",
      true
    );
  });
  test("Is body edit element modal rendered", () => {
    expect(
      wrapper.find("#element-edit-modal-body").isEmptyRender()
    ).toBeFalsy();
  });
  test("Is label for element-edit-input-x rendered", () => {
    expect(wrapper.find("#element-edit-label-x").isEmptyRender()).toBeFalsy();
  });
  test("Is label for element-edit-input-x has text Coordinate X", () => {
    expect(wrapper.find("#element-edit-label-x").isEmptyRender()).toBe(
      "Coordinate X"
    );
  });
  test("Is input for x rendered", () => {
    expect(wrapper.find("#element-edit-input-x").isEmptyRender()).toBeFalsy();
  });
  test("Is label for element-edit-input-y rendered", () => {
    expect(wrapper.find("#element-edit-label-y").isEmptyRender()).toBeFalsy();
  });
  test("Is label for element-edit-input-y has text Coordinate X", () => {
    expect(wrapper.find("#element-edit-label-y").isEmptyRender()).toBe(
      "Coordinate Y"
    );
  });
  test("Is input for y rendered", () => {
    expect(wrapper.find("#element-edit-input-y").isEmptyRender()).toBeFalsy();
  });
  test("Is label for element-edit-input-font-size rendered", () => {
    expect(
      wrapper.find("#element-edit-label-font-size").isEmptyRender()
    ).toBeFalsy();
  });
  test("Is label for element-edit-input-font-size has text Font size", () => {
    expect(wrapper.find("#element-edit-label-font-size").isEmptyRender()).toBe(
      "Font size"
    );
  });
  test("Is input for font-size rendered", () => {
    expect(
      wrapper.find("#element-edit-input-font-size").isEmptyRender()
    ).toBeFalsy();
  });
  test("Is input for font-size has got type number", () => {
    expect(
      wrapper.find("#element-edit-input-font-size").props()
    ).toHaveProperty("type", "number");
  });
  test("Is label for element-edit-input-image rendered", () => {
    expect(
      wrapper.find("#element-edit-label-image").isEmptyRender()
    ).toBeFalsy();
  });
  test("Is label for element-edit-input-image has text Font size", () => {
    expect(wrapper.find("#element-edit-label-image").isEmptyRender()).toBe(
      "New image in format png"
    );
  });
  test("Is input for image rendered", () => {
    expect(
      wrapper.find("#element-edit-input-image").isEmptyRender()
    ).toBeFalsy();
  });
  test("Is edit modal rendered modal-footer", () => {
    expect(wrapper.find("#element-edit-modal-footer"));
  });
  test("Is button for save exist", () => {
    expect(wrapper.find("#element-edit-btn-save").isEmptyRender()).toBeFalsy();
  });
  test("Is button for save exist", () => {
    expect(wrapper.find("#element-edit-btn-save").props()).toHaveProperty(
      "variant",
      "outline-success"
    );
  });
});
