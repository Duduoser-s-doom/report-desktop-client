import { mount } from "enzyme";
import { NavigationRoutes } from "../../consts/navigation-routes";
import { Header } from "./Header";

describe("Test Header component", () => {
  let wrapper = mount(<Header />);
  beforeEach(() => {
    wrapper = mount(<Header />);
  });
  test("Is Home link exist", ()=>{
    expect(!!wrapper.find(`[eventKey="${NavigationRoutes.home}"]`)).toBe(true)
  })
  test("Is Reports link exist", ()=>{
    expect(!!wrapper.find(`[eventKey="${NavigationRoutes.reports}"]`)).toBe(true)
  })
  test("Is Constructor link exist", ()=>{
    expect(!!wrapper.find(`[eventKey="${NavigationRoutes.constructor}"]`)).toBe(true)
  })
  test("Has header got variant tabs", ()=>{
    expect(!!wrapper.find("#header").get(0).props).toHaveProperty("variant","tabs")
  })
  test("Has header got defaultActiveKey", ()=>{
    expect(!!wrapper.find("#header").get(0).props).toHaveProperty("defaultActiveKey", NavigationRoutes.home)
  })
});
