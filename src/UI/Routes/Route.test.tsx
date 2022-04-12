import { shallow } from "enzyme"
import { navigation } from "../../BLL/Navigation"
import { NavigationRoutes } from "../../consts"
import { Route } from "./Route"

describe("Test Route component", ()=>{
    let wrapper = shallow(<Route path={NavigationRoutes.home} render={()=><div id="home">Home</div>} />)
    beforeEach(()=>{
        wrapper = shallow(<Route path={NavigationRoutes.home} render={()=><div id="home">Home</div>}/>)
    })
    test("Is Router show content when active", ()=>{
        expect(wrapper.find("#home").text()).toBe("Home")
    })
    test("Is Router hide content when none-active", ()=>{
        navigation.go(NavigationRoutes.reports)
        wrapper = shallow(<Route path={NavigationRoutes.home} render={()=><div id="home">Home</div>}/>)
        expect(!!wrapper.text()).toBe(false)
    })
})