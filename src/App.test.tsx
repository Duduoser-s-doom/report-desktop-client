import { mount } from "enzyme";
import {App} from "./App";

describe("Test App component", () => {
  let wrapper = mount(<App />);
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("Is Header render", () => {
    expect(!!wrapper.find("#header")).toBe(true);
  });
  test("Is RootRouter render", ()=>{
    expect(!!wrapper.find("#root-reducer")).toBe(true)
  })
  test("Is RootModal render", ()=>{
    expect(!!wrapper.find("#root-modal")).toBe(true)
  })
});
