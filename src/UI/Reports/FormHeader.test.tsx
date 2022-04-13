import { mount, shallow } from "enzyme";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts/modal-routes";
import { FormHeader } from "./FormHeader";

describe("Test FormHeader Component", () => {
  let wrapper = shallow(<FormHeader />);
  beforeEach(() => {
    wrapper = shallow(<FormHeader />);
  });

  test("Is FormHeader has right class", () => {
    expect(wrapper.find("#form-reports").props()).toHaveProperty(
      "className",
      "d-flex justify-content-end w-100"
    );
  });
  test("Is input for search exist", () => {
    expect(!!wrapper.find("#input-search")).toBe(true);
  });
  test("Is button for search exist", () => {
    expect(!!wrapper.find("#btn-search")).toBe(true);
  });
  test("Has button for search got outline-success variant", () => {
    expect(wrapper.find("#btn-search").props()).toHaveProperty(
      "variant",
      "outline-success"
    );
  });
  test("Is button for insert files exist", () => {
    expect(!!wrapper.find("#btn-insert")).toBe(true);
  });
  test("Has button for insert got outline-success variant", () => {
    expect(wrapper.find("#btn-insert").props()).toHaveProperty(
      "variant",
      "outline-success"
    );
  });
  test("Is button for insert open modal", () => {
    wrapper.find("#btn-insert").simulate("click");
    expect(modal.visible).toBe(ModalRoutes.reportsInsert);
  });
});
