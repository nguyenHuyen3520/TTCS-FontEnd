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
import Contact from '../components/Contact'
import Security from '../components/Security'
import Rules from '../components/Rules'
import Introduce from '../components/Introduce'
import Course from '../pages/Course'
import MyCourse from '../pages/MyCourse'
import Meet from '../components/Meet/Meet'
import EditProfile from '../pages/EditProfile'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/test' exact component={Test} />
            <Route path='/test-login' exact component={TestLogin} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} />
            <Route path='/editProfile' exact component={EditProfile} />
            <Route path='/chat' exact component={Chat} />
            <Route path='/courses' exact component={Courses} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/security' exact component={Security} />
            <Route path='/rules' exact component={Rules} />
            <Route path='/introduce' exact component={Introduce} />
            <Route path='/myCourse' exact component={MyCourse} />
            <Route path='/course/:id' exact component={Course} />
            <Route path='/admin-management-user' exact component={UserManagement} />
            <Route path='/admin-management-course' exact component={CourseManagement} />
            <Route path='/admin-create-course' exact component={CreateCourse} />
            <Route path='/meet' exact component={Meet} />
        </Switch>
    )
}

export default Routes


