import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/> */}
        </Switch>
    )
}

export default Routes