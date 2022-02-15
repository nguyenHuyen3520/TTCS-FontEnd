import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Test from "../components/Test"
import TestLogin from "../components/TestLogin"
import Home from '../pages/Home'
import Chat from '../pages/Chat'
import UserManagement from '../pages/UserManagement'
import CourseManagement from '../pages/CourseManagement'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import CreateCourse from '../pages/CreateCourse'
import Courses from '../components/Courses'
import Course from '../pages/Course'
import MyCourse from '../pages/MyCourse'
import MainScreen from '../components/MainScreen/MainScreen.component'
// import CallPage from '../components/callPage/CallPage'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/test' exact component={Test} />
            <Route path='/test-login' exact component={TestLogin} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} />
            <Route path='/chat' exact component={Chat} />
            <Route path='/courses' exact component={Courses} />
            <Route path='/myCourse' exact component={MyCourse} />
            <Route path='/course/:id' exact component={Course} />
            <Route path='/admin-management-user' exact component={UserManagement} />
            <Route path='/admin-management-course' exact component={CourseManagement} />
            <Route path='/admin-create-course' exact component={CreateCourse} />
            <Route path='/Meet' exact component={MainScreen} />
        </Switch>
    )
}

export default Routes


