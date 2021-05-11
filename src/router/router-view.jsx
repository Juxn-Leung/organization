import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { Suspense } from 'react'

const RouterView = (props) => {
    let { route } = props
    console.log(route)
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {
                    route.map((item, index) => {
                        return item.component ? <Route key={index} path={item.path} render={(props) => {
                            return <item.component route={item.routes} {...props} />
                        }}></Route> : <Redirect key={index} from={item.path} to={item.redirect} />
                    })
                }
            </Switch>
        </Suspense>
    )
}

export default RouterView