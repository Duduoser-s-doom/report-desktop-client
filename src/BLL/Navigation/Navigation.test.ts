import { NavigationRoutes } from "../../consts/navigation-routes"
import { navigation } from "./Navigation"

describe("Test Navigation state",()=>{
    beforeEach(()=>{
        navigation.resetDates()
    })
    test("Has navigation got location", ()=>{
        expect(navigation.location).toBe(NavigationRoutes.home)
    })
    test("Is push work correct", ()=>{
        navigation.push(NavigationRoutes.constructor)
        expect(navigation.location).toBe(NavigationRoutes.home+NavigationRoutes.constructor)
    })
    test("Is replace work correct", ()=>{
        navigation.push(NavigationRoutes.constructor)
        navigation.replace()
        expect(navigation.location).toBe(NavigationRoutes.home)
    })
    test("Is go work correct", ()=>{
        navigation.go(NavigationRoutes.constructor)
        expect(navigation.location).toBe(NavigationRoutes.constructor)
    })
})
