import React from 'react'

import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Home from '../pages/Home'
import Register from '../pages/Register'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/home' component={Home}/>
            <Route path='/register' component={Register}/>
        </Switch>
    )
}

export default Routes