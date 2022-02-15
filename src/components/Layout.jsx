import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Navigate from './Navigate'
import Routes from '../routes/Routes'
import { useHistory } from 'react-router-dom';
import RefreshProvider from '../context/refresh'
const Layout = () => {
    const [profile, setProfile] = useState();
    const path = useHistory()
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setProfile(profile);
    }, [path]);
    return (
        <RefreshProvider>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route render={props => (
                        <div className="main-content">
                            <Navigate />
                            <div className="w-full">
                                <Routes />
                            </div>
                        </div>
                    )} />
                </div>
            </BrowserRouter>
        </RefreshProvider>
    )
}

export default Layout