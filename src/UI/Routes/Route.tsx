import { memo } from "react"
import { navigation } from "../../BLL/Navigation/Navigation"
import { NavigationRoutes } from "../../consts/navigation-routes"

type Props = {
    path: NavigationRoutes
    render: ()=>React.ReactNode
}
export const Route = memo<Props>(({path, render}) =>{
    if(path === navigation.location){
        return<div id={path}>{render()}</div>
    }
    return<></>
})
