import { mount } from "enzyme"
import { FormHeader } from "./FormHeader"

describe("Test FormHeader component",()=>{
    let wrapper = mount(<FormHeader />)
    beforeEach(()=>{
        wrapper = mount(<FormHeader />)
    })
    test("Is button for refresh exist",()=>{
        expect(!!wrapper.find("#btn-refresh")).toBe(true)
    })
    test("Has button for refresh got variant outline-warning",()=>{
        expect(wrapper.find("#btn-refresh").props()).toHaveProperty("variant","outline-warning")
    })
})