import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarWrapper__left">
                    <span className="logo">Admin</span>
                </div>
                <div className="topbarWrapper__right">
                    <div className="topbarWrapper__right__Icons">
                        <NotificationsNoneIcon/>                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
