import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import UserManagement from '../pages/UserManagement'
import CourseManagement from '../pages/CourseManagement'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import CreateCourse from '../pages/CreateCourse'
import Course from '../components/Course'
const Routes = () => {
    return (
        <Switch>            
            <Route path='/' exact component={Home}/>
            <Route path='/signup' exact component={Signup}/>            
            <Route path='/login' exact component={Login}/>                 
            <Route path='/courses' exact component={Course}/>
            <Route path='/admin-management-user' exact component={UserManagement}/>
            <Route path='/admin-management-course' exact component={CourseManagement}/>
            <Route path='/admin-create-course' exact component={CreateCourse}/>
        </Switch>
    )
}

export default Routes
