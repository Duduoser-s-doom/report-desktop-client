import { shallow } from "enzyme";
import { navigation } from "../../BLL/Navigation";
import { NavigationRoutes } from "../../consts";
import { HeaderLink } from "./HeaderLink";

describe("Test HeaderLink component", () => {
  let wrapper = shallow(
    <HeaderLink path={NavigationRoutes.reports} title={"Reports"} />
  );
  beforeEach(() => {
    wrapper = shallow(
      <HeaderLink path={NavigationRoutes.reports} title={"Reports"} />
    );
  });
  test("Is title rendered", () => {
    expect(wrapper.find(`[eventKey="${NavigationRoutes.reports}"]`).text()).toBe("Reports");
  });
  test("Is click work", () => {
    wrapper.find(`[eventKey="${NavigationRoutes.reports}"]`).simulate("click")
    expect(navigation.location).toBe(NavigationRoutes.reports)
  })
});
