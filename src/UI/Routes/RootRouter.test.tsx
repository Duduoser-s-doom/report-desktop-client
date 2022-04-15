import { mount, shallow } from "enzyme";
import { NavigationRoutes } from "../../consts";
import { RootRouter } from "./RootRouter";

describe("Test RootReducer component", () => {
  let wrapper = shallow(<RootRouter />);
  beforeEach(() => {
    wrapper = shallow(<RootRouter />);
  });
  test("Is Route for home exist", () => {
    expect(!!wrapper.find(`[path="${NavigationRoutes.home}"]`)).toBe(true);
  });
  test("Is Route for reports exist", () => {
    expect(!!wrapper.find(`[path="${NavigationRoutes.reports}"]`)).toBe(true);
  });
  test("Is Route for constructor exist", () => {
    expect(!!wrapper.find(`[path="${NavigationRoutes.constructor}"]`)).toBe(true);
  });
});
