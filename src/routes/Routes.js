import React from 'react'

import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/home' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes
