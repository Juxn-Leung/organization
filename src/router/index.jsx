import React from 'react'

import routes from './config'
import RouterView from './router-view'
const routerList = [
    ...routes
]

const ViewRouter = () => {
    return (
        <div>
            <RouterView route={routerList} />
        </div>
    )
}

export default ViewRouter