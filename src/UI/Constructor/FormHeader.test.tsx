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
});
