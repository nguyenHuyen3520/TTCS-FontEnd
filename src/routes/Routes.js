import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Admin from '../pages/admin/Admin'
import AdminStudent from '../pages/admin/AdminStudent'
import AdminTeacher from '../pages/admin/AdminTeacher'
import LearningPath from '../pages/LearningPath'
import Signup from '../components/Signup'
import Login from '../components/Login'

const Routes = () => {
    return (
        <Switch>            
            <Route path='/' exact component={Home}/>
            <Route path='/signup' exact component={Signup}/>            
            <Route path='/login' exact component={Login}/>     
            <Route path='/admin' exact component={Admin}/>
            <Route path='/mn/users' exact component={AdminStudent}/>
            <Route path='/mn/teachers' exact component={AdminTeacher}/>
            <Route path='/learning-path' exact component={LearningPath}/>
        </Switch>
    )
}

export default Routes
