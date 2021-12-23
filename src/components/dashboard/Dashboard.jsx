import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
const Dashboard = () => {
    return (
        <div>
            <TopBar/>
            <div class="Dashboard__container">
                <SideBar/>
                <div className="other">other pages</div>
            </div>
        </div>
    )
}

export default Dashboard
